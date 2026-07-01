import { readFile, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const projectsPath = path.join(root, "src/data/projects.ts");

const MAX_WIDTH = 2400;
const WEBP_QUALITY = 82;

function toWebpPath(assetPath) {
  return assetPath.replace(/\.(png|jpe?g)$/i, ".webp");
}

function collectPaths(content) {
  const paths = new Set();

  for (const match of content.matchAll(/"(\/[^"]+\.(?:png|jpe?g))"/gi)) {
    paths.add(match[1]);
  }

  for (let i = 1; i <= 19; i += 1) {
    paths.add(`/nalu-carousel/nalu-carousel-${String(i).padStart(2, "0")}.png`);
  }

  return [...paths].sort((a, b) => b.length - a.length);
}

async function convertToWebp(assetPath) {
  const inputPath = path.join(publicDir, assetPath.slice(1));
  const outputPath = path.join(publicDir, toWebpPath(assetPath).slice(1));

  let before;
  try {
    before = (await stat(inputPath)).size;
  } catch {
    return { assetPath, status: "missing" };
  }

  let pipeline = sharp(inputPath);
  const metadata = await sharp(inputPath).metadata();

  if ((metadata.width ?? 0) > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  await pipeline.webp({ quality: WEBP_QUALITY }).toFile(outputPath);
  const after = (await stat(outputPath)).size;

  await unlink(inputPath);

  return {
    assetPath,
    status: "converted",
    before,
    after,
    webpPath: toWebpPath(assetPath),
  };
}

let content = await readFile(projectsPath, "utf8");
const paths = collectPaths(content);

let converted = 0;
let missing = 0;
let savedBytes = 0;
const replacements = new Map();

for (const assetPath of paths) {
  const result = await convertToWebp(assetPath);

  if (result.status === "missing") {
    missing += 1;
    console.warn(`missing ${assetPath}`);
    continue;
  }

  converted += 1;
  savedBytes += result.before - result.after;
  replacements.set(assetPath, result.webpPath);
  console.log(
    `${assetPath} → ${result.webpPath} (${Math.round(result.before / 1024)} KB → ${Math.round(result.after / 1024)} KB)`,
  );
}

for (const [from, to] of replacements) {
  content = content.split(from).join(to);
}

content = content.replace(
  '/nalu-carousel/nalu-carousel-${String(n).padStart(2, "0")}.png',
  '/nalu-carousel/nalu-carousel-${String(n).padStart(2, "0")}.webp',
);

await writeFile(projectsPath, content);

const ogSource = path.join(publicDir, "aura", "1.webp");
const ogOutput = path.join(publicDir, "aura", "og.webp");

await sharp(ogSource)
  .resize({ width: 1200, height: 630, fit: "cover", position: "centre" })
  .webp({ quality: WEBP_QUALITY })
  .toFile(ogOutput);

console.log("");
console.log(`converted ${converted} assets, missing ${missing}, saved ${(savedBytes / (1024 * 1024)).toFixed(1)} MB`);
console.log("updated src/data/projects.ts");
