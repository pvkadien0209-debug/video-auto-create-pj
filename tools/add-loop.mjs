// tools/add-loop.mjs — tự điền `loop` (vòng mở → đóng, KC-Q6/KC-08, #112) cho kịch bản video W chưa có.
// Chạy: node tools/add-loop.mjs <tệp kịch bản .js hoặc thư mục>... [--write] [--out=<thư mục>]
//   mặc định: chỉ in bảng đề xuất, KHÔNG ghi gì;
//   --write : ghi `loop` vào chính tệp kịch bản (chèn một dòng ngay sau dòng `hook:`);
//   --out=d : ghi bản đã chèn vào thư mục d (để thử, không đụng tệp gốc).
// Cách chọn:
//   open  = cảnh hoạt hình đầu tiên (SCENE-0x hoặc DLG-xx);
//   close = A: cảnh tổng kết (END-01/02/03) có nhắc lại nhân vật của cảnh mở;
//           B: không có A → cảnh cuối cùng (không phải câu đố) trong 30% cuối video có nhắc lại nhân vật mở;
//           C: không có B → cảnh tổng kết END-01/02/03 cuối cùng;
//           D: không có C → END-05.
// "Nhắc lại" = nhân vật đứng trong cảnh (actors), nói (who), hoặc tên có trong lời đọc / phụ đề / chữ trên thẻ.
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const argv = process.argv.slice(2);
const WRITE = argv.includes("--write");
const OUT = (argv.find((a) => a.startsWith("--out=")) || "").slice(6) || null;
const files = argv.filter((a) => !a.startsWith("--")).flatMap((a) =>
  fs.existsSync(a) && fs.statSync(a).isDirectory() ? fs.readdirSync(a).filter((x) => /--w\d\d\.js$/.test(x)).sort().map((x) => path.join(a, x)) : [a]);
if (!files.length) { console.log("Cần tệp hoặc thư mục kịch bản. Ví dụ: node tools/add-loop.mjs src/rootComponents/CSK004/data/scripts"); process.exit(1); }

// Tên gọi của dàn nhân vật (cast/cast.js) trong chữ Việt và chữ Anh không dấu
const NAMES = {
  lan: ["Lan"], dung: ["Dũng", "Dung"], thao: ["Thảo", "Thao"], hoa: ["Cô Hoa", "Hoa"], binh: ["Bác Bình", "Bình", "Binh"],
  bin: ["Bé Bin", "Bin"], tu: ["Bà Tư", "Tư"], sam: ["Sam"],
};
const nameRe = Object.fromEntries(Object.entries(NAMES).map(([id, ns]) =>
  [id, new RegExp(`(^|[^\\p{L}])(${ns.join("|")})(?=$|[^\\p{L}])`, "u")]));

const isAnim = (m) => /^(SCENE-0\d|DLG-)/.test(m);
const isSummary = (m) => /^END-0[123]$/.test(m);
const peopleOf = (s) => new Set([...(s.data?.actors || []).map((a) => a?.id), ...(s.lines || []).map((l) => l.who)]
  .filter((x) => x && x !== "det" && x !== "them"));
const mentions = (s, chars) => {
  const on = peopleOf(s);
  if ([...chars].some((c) => on.has(c))) return true;
  const text = JSON.stringify(s.data || {}) + " " + (s.lines || []).map((l) => `${l.say || ""} ${l.sub || ""}`).join(" ");
  return [...chars].some((c) => nameRe[c]?.test(text));
};

const stat = { A: 0, B: 0, C: 0, D: 0, "đã có": 0, "không đề xuất được": 0, "đã ghi": 0 };
const rows = [];
for (const file of files) {
  const id = path.basename(file, ".js");
  let script;
  try { script = (await import(pathToFileURL(path.resolve(file)).href + "?t=" + Date.now())).default; }
  catch (e) { rows.push([id, "-", "-", "lỗi", `không đọc được: ${e.message}`]); stat["không đề xuất được"]++; continue; }
  if (script.loop) { rows.push([id, script.loop.open, script.loop.close, "đã có", ""]); stat["đã có"]++; continue; }
  const sc = script.scenes || [];
  const oi = sc.findIndex((s) => isAnim(s.module));
  if (oi < 0) { rows.push([id, "-", "-", "—", "không có cảnh hoạt hình SCENE/DLG"]); stat["không đề xuất được"]++; continue; }
  const open = sc[oi], chars = peopleOf(open);
  const after = sc.map((s, i) => ({ s, i })).filter((x) => x.i > oi);
  const cut = Math.floor(sc.length * 0.7);
  let pick = null, how = null;
  const lastOf = (arr) => arr.length ? arr.at(-1) : null;
  if ((pick = lastOf(after.filter((x) => isSummary(x.s.module) && mentions(x.s, chars))))) how = "A";
  else if ((pick = lastOf(after.filter((x) => x.i >= cut && !/^(QUIZ|END-05)/.test(x.s.module) && mentions(x.s, chars))))) how = "B";
  else if ((pick = lastOf(after.filter((x) => isSummary(x.s.module))))) how = "C";
  else if ((pick = lastOf(after.filter((x) => x.s.module === "END-05")))) how = "D";
  if (!pick) { rows.push([id, open.id, "-", "—", "không tìm được cảnh khép"]); stat["không đề xuất được"]++; continue; }
  stat[how]++;
  rows.push([id, `${open.id} ${open.module}`, `${pick.s.id} ${pick.s.module}`, how, [...chars].join(", ") || "(không có nhân vật)"]);
  if (WRITE || OUT) {
    const src = fs.readFileSync(file, "utf8");
    const m = src.match(/^([ \t]*)hook:\s*"[^"]*",[^\n]*\n/m);
    if (!m) { rows.at(-1)[4] += " · KHÔNG GHI: không thấy dòng hook"; continue; }
    const line = `${m[1]}loop: { open: "${open.id}", close: "${pick.s.id}" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (${how})\n`;
    const outSrc = src.slice(0, m.index + m[0].length) + line + src.slice(m.index + m[0].length);
    const dest = OUT ? path.join(OUT, path.basename(file)) : file;
    if (OUT) fs.mkdirSync(OUT, { recursive: true });
    fs.writeFileSync(dest, outSrc);
    stat["đã ghi"]++;
  }
}

console.log("| Kịch bản | open | close | Cách | Nhân vật mở |\n|---|---|---|---|---|");
for (const r of rows) console.log(`| ${r.join(" | ")} |`);
console.log(`\nTổng ${rows.length} kịch bản · A (tổng kết nhắc nhân vật) ${stat.A} · B (cảnh cuối nhắc nhân vật) ${stat.B} · ` +
  `C (tổng kết, không nhắc) ${stat.C} · D (END-05) ${stat.D} · đã có loop ${stat["đã có"]} · không đề xuất được ${stat["không đề xuất được"]}`);
console.log(WRITE ? `Đã ghi ${stat["đã ghi"]} tệp.` : OUT ? `Đã ghi ${stat["đã ghi"]} bản thử vào ${OUT} (tệp gốc không đổi).` : "Chạy thử, chưa ghi gì. Thêm --write để ghi vào kịch bản.");
