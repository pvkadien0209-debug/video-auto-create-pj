// tools/export-script.mjs — xuất kịch bản video W ra tài liệu dễ đọc + loi-doc.json, và kiểm tra kịch bản.
// Chạy: node tools/export-script.mjs [--out=<thư mục>] [--only=<id>] [--loidoc=<tệp loi_doc.json gộp>]
//   → <out>/<id>.md          kịch bản đọc được (thời điểm từng cảnh, module, chữ trên màn hình, lời đọc)
//   → <out>/<id>.loi-doc.json danh sách câu cần tạo mp3: {code, lang, text, slow?, file}
//   → --loidoc: MỘT tệp gộp mọi video cho server TTS (#110): [{code: "<slug>/<cảnh>-<câu>", text, lang, slow, sub}]
// Kiểm tra: module có trong danh mục, tên hình minh hoạ (illus) và biểu tượng (icon) có thật, lời đọc tiếng Việt/Anh.
import { build } from "esbuild";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
// #110: độ dài mp3 thật (nếu đã chép thư mục audio/dp từ server sang) → thời lượng đúng theo giọng
const AUDIO_DAT = path.resolve("public/audio/dp/durations.dat");
const AUDIO_MS = (() => { try { return JSON.parse(fs.readFileSync(AUDIO_DAT, "utf8")); } catch { return {}; } })();

const args = Object.fromEntries(process.argv.slice(2).map((a) => a.replace(/^--/, "").split("=")));
const OUT = path.resolve(args.out || "renders/dp/kich-ban");
const FPS = 30;
const ROOT = path.resolve("src/rootComponents/CSK004");

const entry = `
export { SCRIPTS } from ${JSON.stringify(ROOT + "/data/scripts/index.js")};
export { layoutScript } from ${JSON.stringify(ROOT + "/script/ScriptVideo.jsx")};
export { ILLUS } from ${JSON.stringify(ROOT + "/core/illus-names.js")};
export { ICONS } from ${JSON.stringify(ROOT + "/core/icons.js")};
`;
const tmp = path.resolve("node_modules/.cache/export-script.mjs");
fs.mkdirSync(path.dirname(tmp), { recursive: true });
await build({ stdin: { contents: entry, resolveDir: process.cwd(), loader: "js" }, bundle: true, platform: "node", format: "esm",
  outfile: tmp, loader: { ".jsx": "jsx", ".js": "jsx" }, jsx: "automatic", logLevel: "error",
  external: ["remotion", "@remotion/*", "react", "react-dom"] });
const { SCRIPTS, layoutScript, ILLUS, ICONS } = await import(pathToFileURL(tmp).href + "?t=" + Date.now());

const mmss = (f) => { const s = f / FPS; return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`; };
const ILLUS_KEYS = /^(illus|illusAfter|illusMyth|illusFact|noteIllus|doIllus|dontIllus|causeIllus|effectIllus|keywordIllus|doIcons|dontIcons)$/;
const ICON_KEYS = /^(icon|icons)$/;

/** Gom chữ hiển thị trên màn hình (bỏ tên hình, tên biểu tượng, số liệu kỹ thuật). */
const SKIP = /^(illus|icon|icons|correct|countdown|highlight|n|of|truth|remaining|time|from|value|prefix|unit|around|order)$|Illus|Icons$/;
const texts = (v, key = "") => {
  if (SKIP.test(key)) return [];
  if (typeof v === "string") return [v];
  if (Array.isArray(v)) return v.flatMap((x) => texts(x, key));
  if (v && typeof v === "object") return Object.entries(v).flatMap(([k, x]) => texts(x, k));
  return [];
};

let errors = 0;
const allLoi = []; // gộp cho --loidoc
const problems = [];
const check = (script) => {
  const out = [];
  const walk = (v, key, where) => {
    if (Array.isArray(v)) return v.forEach((x) => walk(x, key, where));
    if (v && typeof v === "object") return Object.entries(v).forEach(([k, x]) => walk(x, k, where));
    if (typeof v !== "string") return;
    if (ILLUS_KEYS.test(key) && !ILLUS.has(v)) out.push(`${where}: không có hình minh hoạ "${v}"`);
    if (ICON_KEYS.test(key) && !ICONS[v] && !ILLUS.has(v)) out.push(`${where}: không có biểu tượng "${v}"`);
    if (key === "illus" && Array.isArray(v)) {}
  };
  for (const s of script.scenes) {
    walk(s.data, "", s.id);
    if (!s.lines?.length) out.push(`${s.id}: chưa có lời đọc (lines)`);
    for (const l of s.lines || []) {
      if (!["vi", "en"].includes(l.lang)) out.push(`${s.id}.${l.id}: lang phải là vi hoặc en`);
      if (!l.say?.trim()) out.push(`${s.id}.${l.id}: câu trống`);
    }
  }
  return out;
};

fs.mkdirSync(OUT, { recursive: true });
for (const script of SCRIPTS.filter((s) => !args.only || s.id === args.only)) {
  const p = check(script);
  errors += p.length; problems.push(...p.map((x) => `${script.id} ${x}`));
  const { scenes, total } = layoutScript(script, FPS, AUDIO_MS);
  const slug = script.unit.slug;
  const loi = [];
  const md = [];
  md.push(`# Kịch bản video W — ${script.unit.title || slug}`, "");
  md.push(`- Mã kịch bản: \`${script.id}\` · bài \`${script.unit.audience}/${slug}\` · cửa ${script.unit.door} · ${script.unit.level}`);
  if (script.unit.series) md.push(`- Chuỗi: ${script.unit.series}`);
  md.push(`- Khuôn: W 16:9 1920×1080 · chế độ: ${script.mode === "text" ? "chỉ chữ (thời lượng theo tốc độ đọc)" : script.mode}`);
  md.push(`- Tổng thời lượng: **${mmss(total)}** (${total} khung hình, ${FPS} khung/giây) · ${scenes.length} cảnh`);
  md.push(`- Lời đọc: ${scenes.reduce((n, s) => n + (s.lines?.length || 0), 0)} câu → \`public/audio/dp/${slug}/<mã>.mp3\` (danh sách ở \`${script.id}.loi-doc.json\`)`);
  md.push("", "> Tệp này được xuất tự động từ `data/scripts/" + script.id + ".js`. Sửa kịch bản ở tệp .js rồi xuất lại.", "");
  md.push("| # | Lúc | Dài | Module | Đoạn bài | Trên màn hình | Lời đọc (tiếng Anh) ↳ phụ đề (tiếng Việt) |", "|---|---|---|---|---|---|---|");
  scenes.forEach((s, i) => {
    const screen = texts(s.data).join(" · ").replace(/\|/g, "/").replace(/\n/g, " ");
    const lines = (s.lines || []).map((l) => {
      const code = `${s.id}-${l.id}`;
      loi.push({ code, lang: l.lang, text: l.say, ...(l.lang === "en" ? { slow: false } : {}), ...(l.who ? { who: l.who } : {}), sub: l.sub || "", file: `audio/dp/${slug}/${code}.mp3` });
      return `${l.who ? "**" + l.who + ":** " : ""}${l.say}${l.sub ? "<br>↳ _" + l.sub + "_" : ""} \`${code}\``;
    }).join("<br>");
    md.push(`| ${i + 1} | ${mmss(s.from)} | ${(s.frames / FPS).toFixed(1)} s | ${s.module} · ${s.mod.name} | ${s.ref || "—"} | ${screen} | ${lines} |`);
  });
  if (p.length) md.push("", "## Cần sửa", ...p.map((x) => `- ${x}`));
  fs.writeFileSync(path.join(OUT, `${script.id}.md`), md.join("\n") + "\n");
  fs.writeFileSync(path.join(OUT, `${script.id}.loi-doc.json`), JSON.stringify(loi, null, 2) + "\n");
  for (const x of loi) allLoi.push({ code: `${slug}/${x.code}`, text: x.text, lang: x.lang, slow: false, ...(x.who ? { who: x.who } : {}), sub: x.sub });
  console.log(`${script.id}: ${mmss(total)}, ${scenes.length} cảnh, ${loi.length} câu đọc${p.length ? `, ${p.length} lỗi` : ""}`);
}
if (args.loidoc) {
  fs.mkdirSync(path.dirname(path.resolve(args.loidoc)), { recursive: true });
  fs.writeFileSync(path.resolve(args.loidoc), JSON.stringify(allLoi, null, 1) + "\n");
  console.log(`loi_doc.json: ${allLoi.length} câu → ${path.resolve(args.loidoc)}`);
}
if (problems.length) { console.log("\nLỖI:\n" + problems.join("\n")); process.exitCode = 1; }
else console.log("LỖI 0");
