import { mkdir, copyFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = path.join(root, "src/assets");
const publicDir = path.join(root, "public");

const heroTargets = [
  { input: "hero-editorial.jpg", output: "hero-editorial.webp", width: 1600, quality: 82 },
  { input: "hero-cover-magazine.png", output: "hero-cover-magazine.webp", width: 1400, quality: 82 },
  { input: "hero-cover-wall.png", output: "hero-cover-wall.webp", width: 1400, quality: 82 },
  { input: "hero-cover-collage-bw.jpeg", output: "hero-cover-collage-bw.webp", width: 1400, quality: 82 },
  { input: "marca-valor-percebido.jpeg", output: "marca-valor-percebido.webp", width: 1200, quality: 80 },
];

async function optimizeHeroImages() {
  for (const target of heroTargets) {
    const inputPath = path.join(assetsDir, target.input);
    const outputPath = path.join(assetsDir, target.output);

    await sharp(inputPath)
      .resize({ width: target.width, withoutEnlargement: true })
      .webp({ quality: target.quality })
      .toFile(outputPath);

    const { size } = await stat(outputPath);
    console.log(`optimized ${target.output} (${Math.round(size / 1024)} KB)`);
  }
}

async function copyNaluCarousel() {
  const targetDir = path.join(publicDir, "nalu-carousel");
  await mkdir(targetDir, { recursive: true });

  for (let i = 1; i <= 19; i += 1) {
    const filename = `nalu-carousel-${String(i).padStart(2, "0")}.png`;
    await copyFile(path.join(assetsDir, filename), path.join(targetDir, filename));
  }

  console.log("copied nalu carousel assets to public/nalu-carousel");
}

await optimizeHeroImages();
await copyNaluCarousel();
