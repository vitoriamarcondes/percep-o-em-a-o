import { readdir, rename, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");

const MIN_BYTES = 500 * 1024;
const MAX_WIDTH = 2400;
const JPEG_QUALITY = 82;
const WEBP_QUALITY = 82;

/** Pastas referenciadas na home, OG e galerias de projetos. */
const PRIORITY_DIRS = [
  "aura",
  "brand-logos",
  "nalu-carousel",
  "ana-cristina",
  "ceres-manifesto",
  "truvarao",
  "lizianto",
  "avanzzo",
  "retiro-acenda",
  "florescer",
  "saude-e-previdencia",
  "campanha-mulheres",
  "a-conversa-ta-boa",
  "estudio-mina",
];

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (IMAGE_EXT.has(ext)) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImage(filePath) {
  const before = (await stat(filePath)).size;
  if (before <= MIN_BYTES) {
    return { filePath, skipped: true, reason: "under-threshold", before, after: before };
  }

  const ext = path.extname(filePath).toLowerCase();
  const tmpPath = `${filePath}.opt-tmp`;
  const metadata = await sharp(filePath).metadata();

  let pipeline = sharp(filePath);
  if ((metadata.width ?? 0) > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (ext === ".png") {
    await pipeline
      .png({
        compressionLevel: 9,
        effort: 10,
        palette: (metadata.width ?? 0) <= 1600 && (metadata.height ?? 0) <= 1600,
      })
      .toFile(tmpPath);
  } else {
    await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tmpPath);
  }

  const after = (await stat(tmpPath)).size;

  if (after >= before) {
    await unlink(tmpPath);
    return { filePath, skipped: true, reason: "no-gain", before, after: before };
  }

  await rename(tmpPath, filePath);
  return { filePath, skipped: false, before, after };
}

async function createOgImage() {
  const source = path.join(publicDir, "aura", "1.webp");
  const output = path.join(publicDir, "aura", "og.webp");

  await sharp(source)
    .resize({ width: 1200, height: 630, fit: "cover", position: "centre" })
    .webp({ quality: WEBP_QUALITY })
    .toFile(output);

  const { size } = await stat(output);
  console.log(`created ${path.relative(root, output)} (${Math.round(size / 1024)} KB)`);
}

function formatMb(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const files = [];
for (const dir of PRIORITY_DIRS) {
  const fullDir = path.join(publicDir, dir);
  try {
    files.push(...(await walk(fullDir)));
  } catch {
    console.warn(`skip missing directory: ${dir}`);
  }
}

let optimized = 0;
let skipped = 0;
let savedBytes = 0;

for (const filePath of files) {
  const result = await optimizeImage(filePath);
  if (result.skipped) {
    skipped += 1;
    continue;
  }

  optimized += 1;
  savedBytes += result.before - result.after;
  console.log(
    `optimized ${path.relative(root, result.filePath)}: ${formatMb(result.before)} → ${formatMb(result.after)}`,
  );
}

await createOgImage();

console.log("");
console.log(`scanned ${files.length} images in ${PRIORITY_DIRS.length} folders`);
console.log(`optimized ${optimized}, skipped ${skipped}, saved ${formatMb(savedBytes)}`);
