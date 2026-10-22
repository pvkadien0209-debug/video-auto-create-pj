// render-CSK003-img.js — Chụp 1 frame (mặc định frame 30) của MỖI video CSK003 → PNG.
//   npm run renderimg3
//   npm run renderimg3 -- --frame=45        (đổi frame)
//   npm run renderimg3 -- --only=1,3        (chỉ render vài id)
// Output: renders/img/IMGPLDT/IMGPLDT_<id>.png
//
// ⭐ Theo quy ước chung: bundle src/index.js (qua src/RemotionRoot.js) — KHÔNG dùng entry riêng.
//    RemotionRoot.js phải đang trỏ CSK003, nếu không script dừng để tránh in nhầm project.
//
// Dùng thẳng @remotion/renderer.renderStill (không render video tạm → nhanh).
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { bundle } from "@remotion/bundler";
import { getCompositions, renderStill } from "@remotion/renderer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ============================================
// 🔧 CONFIG
// ============================================
const ENTRY = path.join(__dirname, "src", "index.js");
const ROOT_FILE = path.join(__dirname, "src", "RemotionRoot.js");
const REQUIRED_ROOT = "CSK003";
const PREFIX = "IMGPLDT_";
const OUT_DIR = path.join(__dirname, "renders", "img", PREFIX.replace(/_$/, ""));
const DEFAULT_FRAME = 30;
const IMAGE_FORMAT = "png"; // "png" | "jpeg"
const JPEG_QUALITY = 95;
const SCALE = 1; // 2 = ảnh gấp đôi độ phân giải (2160x2700)

const arg = (name) => {
  const a = process.argv.find((x) => x.startsWith(`--${name}=`));
  return a ? a.split("=")[1] : null;
};
const FRAME = Number(arg("frame") ?? DEFAULT_FRAME);
const ONLY = arg("only")?.split(",").map((s) => s.trim());

const main = async () => {
  // Kiểm tra RemotionRoot.js đang trỏ đúng project (dòng import không bị comment)
  const active = fs
    .readFileSync(ROOT_FILE, "utf8")
    .split(/\r?\n/)
    .filter((l) => /^\s*import\s.*rootComponents\//.test(l))
    .map((l) => l.match(/rootComponents\/([^/]+)\//)?.[1]);
  if (active.length !== 1 || active[0] !== REQUIRED_ROOT) {
    console.error(
      `❌ src/RemotionRoot.js đang trỏ: ${active.join(", ") || "(không có)"} — cần trỏ ${REQUIRED_ROOT}.\n` +
        `   Sửa dòng import trong RemotionRoot.js, xem lại bằng npm run dev, rồi chạy lại.`,
    );
    process.exit(1);
  }

  const t0 = Date.now();
  fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log("📦 Bundling:", ENTRY);
  const serveUrl = await bundle({
    entryPoint: ENTRY,
    publicDir: path.join(__dirname, "public"),
  });

  let comps = await getCompositions(serveUrl);
  if (ONLY) comps = comps.filter((c) => ONLY.includes(c.id));
  console.log(`🎬 ${comps.length} video · frame ${FRAME} → ${OUT_DIR}\n`);

  let ok = 0;
  for (const comp of comps) {
    const frame = Math.min(FRAME, comp.durationInFrames - 1);
    const output = path.join(OUT_DIR, `${PREFIX}${comp.id}.${IMAGE_FORMAT}`);
    try {
      await renderStill({
        composition: comp,
        serveUrl,
        frame,
        output,
        imageFormat: IMAGE_FORMAT,
        ...(IMAGE_FORMAT === "jpeg" ? { jpegQuality: JPEG_QUALITY } : {}),
        scale: SCALE,
        inputProps: comp.props,
        overwrite: true,
      });
      ok++;
      console.log(`✅ ${comp.id} (${comp.width}x${comp.height}, frame ${frame}) → ${path.basename(output)}`);
    } catch (e) {
      console.error(`❌ ${comp.id}: ${e.message}`);
    }
  }

  console.log(`\n🎯 ${ok}/${comps.length} ảnh · ${((Date.now() - t0) / 1000).toFixed(1)}s`);
};

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
