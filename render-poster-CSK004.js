// render-poster-CSK004.js — #164 Ảnh bìa 16:9 (jpg) cho video bài học DetPro: Đét + tên bài + chuỗi + màu cửa học.
// Mỗi video <mã>--w01 có composition ảnh bìa "P-<mã>--w01" (script/Poster.jsx) → renders/dp/img/<mã>--w01.jpg
//
//   npx tsx render-poster-CSK004.js                         tất cả bài có kịch bản
//   npx tsx render-poster-CSK004.js --only=a--w01,b--w01    chỉ các bài này
//   npx tsx render-poster-CSK004.js --only-file=renders\dp\_ds-render.txt --skip-done   (4-render-tat-ca.bat gọi)
//   --scale=2/3 (mặc định, 1280×720 — đúng cỡ ảnh bìa YouTube) · 1 = 1920×1080 · --skip-done bỏ qua ảnh đã có
//
// Tải thư mục renders/dp/img lên Drive DetProMedia/img; web tự tìm <mã>--w01.jpg làm ảnh đại diện.
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { bundle } from "@remotion/bundler";
import { getCompositions, openBrowser, renderStill } from "@remotion/renderer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ENTRY = path.join(__dirname, "src", "index.js");
const PUBLIC = path.join(__dirname, "public");
const OUT_DIR = path.join(__dirname, "renders", "dp", "img"); // #166: ảnh riêng thư mục img (khớp Drive DetProMedia\img)

const arg = (name) => {
  const a = process.argv.find((x) => x.startsWith(`--${name}=`));
  return a ? a.slice(name.length + 3) : null;
};
const ONLY_RAW = arg("only-file") ? fs.readFileSync(arg("only-file"), "utf8") : arg("only");
const ONLY = ONLY_RAW == null ? null : ONLY_RAW.split(/[\s,]+/).map((s) => s.trim()).filter(Boolean);
const SCALE = String(arg("scale") ?? "2/3").split("/").map(Number).reduce((a, b) => a / b);
const SKIP_DONE = process.argv.includes("--skip-done");
const GL = (arg("gl") ?? "angle").toLowerCase();

const main = async () => {
  const T0 = Date.now();
  console.log(`🖼  Ảnh bìa CSK004 · ${Math.round(1920 * SCALE)}×${Math.round(1080 * SCALE)}${SKIP_DONE ? " · bỏ qua ảnh đã có" : ""}`);
  fs.mkdirSync(OUT_DIR, { recursive: true });

  console.log("📦 Đóng gói (1–3 phút)…");
  const serveUrl = await bundle({ entryPoint: ENTRY, publicDir: PUBLIC, enableCaching: false });

  const browser = await openBrowser("chrome", { chromiumOptions: GL === "off" ? {} : { gl: GL } });
  const all = (await getCompositions(serveUrl, { puppeteerInstance: browser })).filter((c) => c.id.startsWith("P-"));
  let list = ONLY ? all.filter((c) => ONLY.includes(c.id.slice(2))) : all;
  if (ONLY) {
    const miss = ONLY.filter((id) => !all.some((c) => c.id === `P-${id}`));
    if (miss.length) console.log(`⚠ Không có kịch bản cho: ${miss.join(", ")}`);
  }
  if (SKIP_DONE) list = list.filter((c) => !fs.existsSync(path.join(OUT_DIR, `${c.id.slice(2)}.jpg`)));
  console.log(`📋 ${list.length} ảnh sẽ dựng → ${path.relative(__dirname, OUT_DIR)}`);

  let ok = 0;
  const bad = [];
  for (const [k, comp] of list.entries()) {
    const id = comp.id.slice(2);
    const output = path.join(OUT_DIR, `${id}.jpg`);
    try {
      await renderStill({
        composition: comp, serveUrl, output, inputProps: comp.props, frame: 0,
        imageFormat: "jpeg", jpegQuality: 88, scale: SCALE, overwrite: true, puppeteerInstance: browser,
        timeoutInMilliseconds: 60000,
      });
      ok++;
      process.stdout.write(`\r   ${k + 1}/${list.length} · ${id.slice(0, 60).padEnd(60)}`);
    } catch (e) {
      bad.push(id);
      console.log(`\n   ❌ ${id}: ${String(e.message || e).split("\n")[0]}`);
    }
  }
  await browser.close({ silent: true }).catch(() => {});
  console.log(`\n✅ Xong ${ok}/${list.length} ảnh sau ${Math.round((Date.now() - T0) / 1000)} s.`);
  if (bad.length) console.log(`   Dựng lại ảnh lỗi:  npx tsx render-poster-CSK004.js --only=${bad.join(",")}`);
  console.log("   Bước tiếp: tải các tệp .jpg trong renders\\dp\\img lên Drive DetProMedia\\img (giữ tên).");
};

main().catch((e) => {
  console.error(`❌ Dừng: ${e.message}`);
  process.exit(1);
});
