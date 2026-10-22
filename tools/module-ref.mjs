// Xuất danh mục module + dữ liệu mẫu (để viết kịch bản): node tools/module-ref.mjs > MODULE-REF.md
import { build } from "esbuild"; import fs from "fs"; import path from "path"; import { pathToFileURL } from "url";
const ROOT = path.resolve("src/rootComponents/CSK004");
const tmp = path.resolve("node_modules/.cache/module-ref.mjs");
await build({ stdin: { contents: `export { REGISTRY } from ${JSON.stringify(ROOT + "/modules/index.js")}; export { SAMPLES } from ${JSON.stringify(ROOT + "/data/samples.js")};`, resolveDir: process.cwd(), loader: "js" },
  bundle: true, platform: "node", format: "esm", outfile: tmp, loader: { ".jsx": "jsx", ".js": "jsx" }, jsx: "automatic", logLevel: "error", external: ["remotion", "@remotion/*", "react", "react-dom"] });
const { REGISTRY, SAMPLES } = await import(pathToFileURL(tmp).href + "?t=" + Date.now());
const out = ["# Danh mục module CSK004 — ô dữ liệu và mẫu (tự xuất)", "", "Mỗi module: mã · tên · họ · ô bắt buộc (limits: [tối thiểu, tối đa] số chữ/tiếng; ô số so như số) · cần nguồn · dữ liệu mẫu `thuong` (vừa) — viết data đúng các khoá như mẫu.",
  "Module hoạt hình (#106, xem ANIM-GUIDE.md) có thêm `lines` mẫu: mỗi câu `{ id, lang, who?, say (tiếng Anh), sub (phụ đề / bong bóng tiếng Việt), face?, pose?, react?, to?, stop?, phase? }` — đặt ở cấp CẢNH (scene.lines), không đặt trong data.", ""];
// lời đọc mẫu = mảng câu có `say` (STORY-10 có ô data tên "lines" là chuỗi — không phải lời đọc)
const isVoice = (x) => Array.isArray(x) && x.length > 0 && x.every((l) => l && typeof l === "object" && "say" in l);
for (const [code, m] of Object.entries(REGISTRY)) {
  out.push(`## ${code} · ${m.name} · ${m.family}`);
  if (m.limits) out.push(`- limits: ${JSON.stringify(m.limits)}`);
  if (m.needsSource) out.push(`- cần ô source`);
  if (m.ownSubtitles) out.push(`- ownSubtitles: câu có \`who\` hiện trong bong bóng của module, không hiện ở thanh phụ đề`);
  const sample = SAMPLES[code]?.thuong ?? {};
  if (isVoice(sample.lines)) {
    const { lines, ...data } = sample;
    out.push("```json", JSON.stringify(data, null, 0), "```", "- lines mẫu:", "```json", ...lines.map((l) => JSON.stringify(l)), "```", "");
  } else out.push("```json", JSON.stringify(sample, null, 0), "```", "");
  // #110: mẫu thêm ngoài thuong/dai (vd. SCENE-01 "ba-vai": ba vai Bé Bin, Bà Tư, Sam)
  for (const [k, ex] of Object.entries(SAMPLES[code] || {})) {
    if (k === "thuong" || k === "dai" || !isVoice(ex.lines)) continue;
    const { lines, ...data } = ex;
    out.push(`- mẫu \`${k}\`:`, "```json", JSON.stringify(data, null, 0), "```", "- lines mẫu:", "```json", ...lines.map((l) => JSON.stringify(l)), "```", "");
  }
}
process.stdout.write(out.join("\n"));
