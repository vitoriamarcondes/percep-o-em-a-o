import { execFile } from "node:child_process";
import { readdir, readFile, rename, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const execFileAsync = promisify(execFile);

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const projectsPath = path.join(root, "src/data/projects.ts");

const MAX_WIDTH = 2400;
const WEBP_QUALITY = 82;
const MIN_VIDEO_BYTES = 400 * 1024;
const MIN_GIF_BYTES = 2 * 1024 * 1024;

const IMAGE_DIRS = ["estudio-mina"];
const VIDEO_DIRS = [
  "estudio-mina",
  "download-videos",
  "campanha-mulheres",
  "a-conversa-ta-boa",
  "soleil",
];

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg"]);

async function walkFiles(dir, filterExt) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkFiles(fullPath, filterExt)));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!filterExt || filterExt.has(ext)) {
      files.push(fullPath);
    }
  }

  return files;
}

function publicPath(filePath) {
  return `/${path.relative(publicDir, filePath).split(path.sep).join("/")}`;
}

function toWebpPath(filePath) {
  return filePath.replace(/\.(png|jpe?g)$/i, ".webp");
}

async function convertImageToWebp(inputPath) {
  const outputPath = toWebpPath(inputPath);
  if (inputPath === outputPath) return null;

  const before = (await stat(inputPath)).size;
  let pipeline = sharp(inputPath);
  const metadata = await sharp(inputPath).metadata();

  if ((metadata.width ?? 0) > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  await pipeline.webp({ quality: WEBP_QUALITY }).toFile(outputPath);
  const after = (await stat(outputPath)).size;

  await unlink(inputPath);

  return { before, after, outputPath };
}

async function compressVideo(inputPath) {
  const before = (await stat(inputPath)).size;
  if (before <= MIN_VIDEO_BYTES) {
    return { before, after: before, skipped: true, reason: "under-threshold" };
  }

  const tmpPath = `${inputPath}.compress.tmp.mp4`;

  await execFileAsync(
    "ffmpeg",
    [
      "-y",
      "-i",
      inputPath,
      "-vf",
      "scale='min(1280,iw)':-2",
      "-c:v",
      "libx264",
      "-crf",
      "28",
      "-preset",
      "medium",
      "-movflags",
      "+faststart",
      "-c:a",
      "aac",
      "-b:a",
      "128k",
      tmpPath,
    ],
    { maxBuffer: 10 * 1024 * 1024 },
  );

  const after = (await stat(tmpPath)).size;

  if (after >= before * 0.95) {
    await unlink(tmpPath);
    return { before, after: before, skipped: true, reason: "no-gain" };
  }

  await unlink(inputPath);
  await rename(tmpPath, inputPath);

  return { before, after, skipped: false };
}

async function convertGifToMp4(inputPath) {
  const outputPath = inputPath.replace(/\.gif$/i, ".mp4");
  const before = (await stat(inputPath)).size;

  await execFileAsync(
    "ffmpeg",
    [
      "-y",
      "-i",
      inputPath,
      "-movflags",
      "+faststart",
      "-pix_fmt",
      "yuv420p",
      "-vf",
      "scale='min(1280,iw)':-2",
      "-c:v",
      "libx264",
      "-crf",
      "28",
      "-an",
      outputPath,
    ],
    { maxBuffer: 10 * 1024 * 1024 },
  );

  const after = (await stat(outputPath)).size;
  await unlink(inputPath);

  return {
    before,
    after,
    from: publicPath(inputPath),
    to: publicPath(outputPath),
  };
}

function collectGifPaths(content) {
  return [...content.matchAll(/"(\/[^"]+\.gif)"/gi)].map((match) => match[1]);
}

function formatMb(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

let imageConverted = 0;
let imageSaved = 0;

for (const dirName of IMAGE_DIRS) {
  const dirPath = path.join(publicDir, dirName);
  const images = await walkFiles(dirPath, IMAGE_EXT);

  for (const imagePath of images) {
    const result = await convertImageToWebp(imagePath);
    if (!result) continue;

    imageConverted += 1;
    imageSaved += result.before - result.after;
    console.log(
      `webp ${publicPath(imagePath)} → ${publicPath(result.outputPath)} (${Math.round(result.before / 1024)} KB → ${Math.round(result.after / 1024)} KB)`,
    );
  }
}

let videoCompressed = 0;
let videoSkipped = 0;
let videoSaved = 0;
const seenVideos = new Set();

for (const dirName of VIDEO_DIRS) {
  const dirPath = path.join(publicDir, dirName);
  let videos = [];

  try {
    videos = await walkFiles(dirPath, new Set([".mp4"]));
  } catch {
    console.warn(`skip missing video directory: ${dirName}`);
    continue;
  }

  for (const videoPath of videos) {
    if (seenVideos.has(videoPath)) continue;
    seenVideos.add(videoPath);

    const result = await compressVideo(videoPath);
    if (result.skipped) {
      videoSkipped += 1;
      continue;
    }

    videoCompressed += 1;
    videoSaved += result.before - result.after;
    console.log(
      `video ${publicPath(videoPath)}: ${formatMb(result.before)} → ${formatMb(result.after)}`,
    );
  }
}

let projectsContent = await readFile(projectsPath, "utf8");
let gifConverted = 0;
let gifSaved = 0;

for (const gifPath of collectGifPaths(projectsContent)) {
  const inputPath = path.join(publicDir, gifPath.slice(1));

  let size;
  try {
    size = (await stat(inputPath)).size;
  } catch {
    console.warn(`missing gif ${gifPath}`);
    continue;
  }

  if (size < MIN_GIF_BYTES) continue;

  const result = await convertGifToMp4(inputPath);
  gifConverted += 1;
  gifSaved += result.before - result.after;
  projectsContent = projectsContent.split(result.from).join(result.to);
  console.log(`gif ${result.from} → ${result.to} (${formatMb(result.before)} → ${formatMb(result.after)})`);
}

if (gifConverted > 0) {
  await writeFile(projectsPath, projectsContent);
  console.log("updated src/data/projects.ts for gif → mp4 paths");
}

console.log("");
console.log(
  `images: ${imageConverted} converted, saved ${formatMb(imageSaved)}`,
);
console.log(
  `videos: ${videoCompressed} compressed, ${videoSkipped} skipped, saved ${formatMb(videoSaved)}`,
);
console.log(`gifs: ${gifConverted} converted, saved ${formatMb(gifSaved)}`);
