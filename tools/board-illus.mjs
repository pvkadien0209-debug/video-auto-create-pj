// board-illus.mjs — nhúng sẵn đường vẽ của các hình minh hoạ dùng trong bảng vẽ BOARD-01 (#130).
//   node tools/board-illus.mjs
// Đọc mọi kịch bản có module BOARD-01, lấy tên hình (t: "illus"), đọc public/illus/<tên>.svg,
// chuyển path/circle/ellipse/rect thành danh sách { d, fill } → src/rootComponents/CSK004/core/illus-paths.js.
// Nhúng thẳng vào mã (không fetch, không delayRender — tránh kiểu treo #118).
// Hình có gradient/filter/use → ghi { img: true }: module hiện bằng <Img> (vào kiểu hand-in/fade) thay vì vẽ nét.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SCRIPTS = path.join(ROOT, "src/rootComponents/CSK004/data/scripts");
const ILLUS = path.join(ROOT, "public/illus");
const OUT = path.join(ROOT, "src/rootComponents/CSK004/core/illus-paths.js");

const names = new Set(process.argv.slice(2));
for (const f of fs.readdirSync(SCRIPTS).filter((f) => f.endsWith(".js") && f !== "index.js")) {
  const src = fs.readFileSync(path.join(SCRIPTS, f), "utf8");
  if (!src.includes("BOARD-01")) continue;
  const s = (await import(pathToFileURL(path.join(SCRIPTS, f)).href + "?" + Date.now())).default;
  for (const sc of s.scenes || []) if (sc.module === "BOARD-01") for (const it of sc.data?.items || []) if (it.t === "illus" && it.name) names.add(it.name);
}

const attr = (tag, k) => { const m = tag.match(new RegExp(`\\s${k}="([^"]*)"`)); return m ? m[1] : null; };
const num = (tag, k, d = 0) => { const v = attr(tag, k); return v == null ? d : parseFloat(v); };
const ellipseD = (cx, cy, rx, ry) => `M${cx - rx} ${cy}a${rx} ${ry} 0 1 0 ${2 * rx} 0a${rx} ${ry} 0 1 0 ${-2 * rx} 0z`;
const rectD = (x, y, w, h, r) => r > 0
  ? `M${x + r} ${y}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1 ${-r} ${r}h${-(w - 2 * r)}a${r} ${r} 0 0 1 ${-r} ${-r}v${-(h - 2 * r)}a${r} ${r} 0 0 1 ${r} ${-r}z`
  : `M${x} ${y}h${w}v${h}h${-w}z`;

const OUTD = {};
const missing = [];
for (const name of [...names].sort()) {
  const file = path.join(ILLUS, `${name}.svg`);
  if (!fs.existsSync(file)) { missing.push(name); continue; }
  const svg = fs.readFileSync(file, "utf8");
  const vb = (attr(svg.match(/<svg[^>]*>/)[0], "viewBox") || "0 0 32 32").split(/[\s,]+/).map(Number);
  if (/<(linearGradient|radialGradient|filter|use|image|mask|clipPath)\b/.test(svg)) { OUTD[name] = { vb, img: true }; continue; }
  const p = [];
  for (const m of svg.matchAll(/<(path|circle|ellipse|rect)\b[^>]*>/g)) {
    const tag = m[0], kind = m[1];
    const fill = attr(tag, "fill");
    if (!fill || fill === "none") continue;
    let d = null;
    if (kind === "path") d = attr(tag, "d");
    else if (kind === "circle") d = ellipseD(num(tag, "cx"), num(tag, "cy"), num(tag, "r"), num(tag, "r"));
    else if (kind === "ellipse") d = ellipseD(num(tag, "cx"), num(tag, "cy"), num(tag, "rx"), num(tag, "ry"));
    else if (kind === "rect") d = rectD(num(tag, "x"), num(tag, "y"), num(tag, "width"), num(tag, "height"), num(tag, "rx"));
    if (d) p.push({ d, fill, ...(attr(tag, "fill-rule") ? { rule: attr(tag, "fill-rule") } : {}) });
  }
  OUTD[name] = p.length ? { vb, p } : { vb, img: true };
}
fs.writeFileSync(OUT,
  "// TỰ SINH bởi tools/board-illus.mjs — đường vẽ hình minh hoạ cho BOARD-01 (Fluent Emoji Flat, MIT). Đừng sửa tay.\n" +
  `export const ILLUS_PATHS = ${JSON.stringify(OUTD)};\n`);
console.log(`✔ ${Object.keys(OUTD).length} hình → core/illus-paths.js${missing.length ? ` · THIẾU: ${missing.join(", ")}` : ""}`);
if (missing.length) process.exitCode = 1;
