// sfx-kho.mjs — gộp KHO TIẾNG ĐỘNG (#127): âm tạo bằng code + âm thật anh tải về.
//   node tools/sfx-kho.mjs
// Việc làm:
//   1. Đọc public/sfx/_kho-code.json (do tools/make-sfx.mjs ghi).
//   2. Nhập âm thật: mọi tệp .mp3/.wav/.ogg/.m4a/.flac/.aac trong public/sfx/_goc/ → public/sfx/<khoá>.wav
//      (khoá = tên tệp, bỏ dấu, chữ thường, cách → "-"; vd. "Lật sách.mp3" → lat-sach.wav)
//      chuyển mono 44,1 kHz, cắt lặng đầu/cuối (trừ âm nền), đỉnh −3 dBFS, âm nền thì nối đầu–cuối để lặp.
//      Cần ffmpeg: dùng `ffmpeg` nếu có trong PATH, không thì `npx remotion ffmpeg` (đi kèm Remotion 4).
//      Trùng khoá với âm code → âm thật thay âm code.
//   3. Ghi src/rootComponents/CSK004/core/sfx-kho.js (danh mục cho video + kiểm kịch bản),
//      KHO-SFX.md (bảng tra + danh sách "Cần tìm"), public/sfx/_nghe-thu.html (mở bằng trình duyệt để nghe thử).
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SFX = path.join(ROOT, "public", "sfx");
const GOC = path.join(SFX, "_goc");
fs.mkdirSync(GOC, { recursive: true });
const SR = 44100;

// ---------- âm thật nên có (anh tìm tệp, đặt đúng tên vào public/sfx/_goc/) ----------
// tim = từ khoá tìm trên Pixabay / Mixkit / Freesound (lọc CC0); dung = dùng ở đâu
export const CAN_TIM = {
  // vật thật
  "lat-sach": { nhom: "vat-that", mota: "Lật một trang sách", tim: "page turn book", dung: "Thảo mở sách (cảnh khép vòng), mở chương bằng sách", gain: 0.45 },
  "lat-sach-nhanh": { nhom: "vat-that", mota: "Lật nhanh nhiều trang", tim: "book pages flip fast", dung: "Tua thời gian, tìm trong sách", gain: 0.4 },
  "gap-sach": { nhom: "vat-that", mota: "Gấp sách lại", tim: "book close", dung: "Kết một ý / bỏ dở việc đọc", gain: 0.45 },
  "giay-sot-soat": { nhom: "vat-that", mota: "Cầm, xếp tờ giấy", tim: "paper handling rustle", dung: "Thảo lấy giấy kẻ lịch", gain: 0.4 },
  "but-viet": { nhom: "vat-that", mota: "Bút chì viết lên giấy (2–4 s)", tim: "pencil writing on paper", dung: "Vẽ cột giờ, ghi danh sách", gain: 0.4, loop: true },
  "but-gach": { nhom: "vat-that", mota: "Gạch một nét bút", tim: "pen scribble cross out", dung: "Gạch bỏ thói quen cũ", gain: 0.4 },
  "xe-giay": { nhom: "vat-that", mota: "Xé giấy", tim: "paper tear", dung: "Bỏ kế hoạch cũ", gain: 0.4 },
  "vo-giay": { nhom: "vat-that", mota: "Vò giấy", tim: "paper crumple", dung: "Thất vọng, làm lại", gain: 0.4 },
  "dat-dien-thoai": { nhom: "vat-that", mota: "Đặt điện thoại úp xuống bàn", tim: "phone put down on table", dung: "\"Điện thoại úp xuống\" (cảnh khép vòng)", gain: 0.45 },
  "dat-coc": { nhom: "vat-that", mota: "Đặt cốc xuống bàn", tim: "mug put down table", dung: "Nghỉ giải lao, buổi sáng", gain: 0.4 },
  "rot-nuoc": { nhom: "vat-that", mota: "Rót trà / nước", tim: "pour tea cup", dung: "Buổi sáng chậm, thư giãn", gain: 0.35 },
  "mo-cua": { nhom: "vat-that", mota: "Mở cửa", tim: "door open interior", dung: "Về nhà, vào phòng họp", gain: 0.4 },
  "dong-cua": { nhom: "vat-that", mota: "Đóng cửa", tim: "door close interior", dung: "Tan làm, khép lại một ngày", gain: 0.4 },
  "chia-khoa": { nhom: "vat-that", mota: "Chùm chìa khoá, mở khoá", tim: "keys jingle unlock door", dung: "\"Sáu rưỡi, về đến nhà\"", gain: 0.4 },
  "buoc-chan": { nhom: "vat-that", mota: "Bước chân trong nhà", tim: "footsteps indoor wood", dung: "Nhân vật đi vào khung hình", gain: 0.35, loop: true },
  "keo-ghe": { nhom: "vat-that", mota: "Kéo ghế ngồi xuống", tim: "chair drag sit down", dung: "Bắt đầu làm việc / học", gain: 0.4 },
  "ban-phim-that": { nhom: "vat-that", mota: "Gõ bàn phím thật", tim: "keyboard typing office", dung: "Cảnh văn phòng (thay go-phim-dai)", gain: 0.2, loop: true },
  "chuot-that": { nhom: "vat-that", mota: "Click chuột thật", tim: "mouse click", dung: "Gửi email, nộp bài", gain: 0.35 },
  "cong-tac-den": { nhom: "vat-that", mota: "Bật/tắt công tắc đèn", tim: "light switch", dung: "Đêm khuya, tắt đèn đi ngủ", gain: 0.4 },
  "vo-tay": { nhom: "vat-that", mota: "Vỗ tay nhỏ", tim: "small group applause", dung: "Hoàn thành câu đố, chúc mừng", gain: 0.3 },
  // không khí thật (nền, lặp)
  "van-phong": { nhom: "khong-khi", mota: "Văn phòng: tiếng người xa, máy in", tim: "office ambience", dung: "Mọi cảnh ở công ty", gain: 0.1, loop: true },
  "quan-ca-phe": { nhom: "khong-khi", mota: "Quán cà phê", tim: "cafe ambience", dung: "Gặp bạn, học ngoài quán", gain: 0.1, loop: true },
  "duong-pho": { nhom: "khong-khi", mota: "Đường phố xa, xe cộ", tim: "city traffic distant", dung: "Đi làm, tan làm", gain: 0.09, loop: true },
  "dem-yen": { nhom: "khong-khi", mota: "Đêm yên, côn trùng", tim: "night ambience crickets", dung: "Đêm khuya trong phòng", gain: 0.1, loop: true },
  "mua-that": { nhom: "khong-khi", mota: "Mưa ngoài cửa sổ", tim: "rain on window", dung: "Buổi tối ở nhà (thay mua)", gain: 0.12, loop: true },
  "chim-sang": { nhom: "khong-khi", mota: "Buổi sáng, chim hót", tim: "morning birds", dung: "Sáng hôm sau, buổi sáng của mình", gain: 0.1, loop: true },
  "lop-hoc": { nhom: "khong-khi", mota: "Lớp học / giảng đường", tim: "classroom ambience", dung: "Cảnh trường, lớp ôn thi", gain: 0.1, loop: true },
};
const NHOM_TEN = {
  "cau-truc": "Cấu trúc bài (chương, mục lục, câu hỏi)", "dung-sai": "Đúng – sai – nhấn", "chuyen-dong": "Chuyển động & chuyển cảnh",
  "thoi-gian": "Thời gian & đếm", "hoi-hop": "Hồi hộp & tiết lộ", "dien-thoai": "Điện thoại & máy tính", "khong-khi": "Không khí (nền, lặp)",
  "thuong-hieu": "Thương hiệu", "vat-that": "Vật thật (tệp thật)", khac: "Khác (anh tự thêm)",
};

// ---------- tiện ích ----------
const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D")
  .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const readWav = (file) => { // PCM 16-bit → { sr, ch, data: Float32 (mono) }
  const b = fs.readFileSync(file);
  let p = 12, fmt = null, data = null;
  while (p + 8 <= b.length) { const id = b.toString("ascii", p, p + 4), n = b.readUInt32LE(p + 4);
    if (id === "fmt ") fmt = { ch: b.readUInt16LE(p + 10), sr: b.readUInt32LE(p + 12), bits: b.readUInt16LE(p + 22) };
    if (id === "data") data = b.subarray(p + 8, p + 8 + n);
    p += 8 + n + (n % 2); }
  if (!fmt || !data) return null;
  const bytes = fmt.bits / 8, frames = Math.floor(data.length / (bytes * fmt.ch));
  const out = new Float32Array(fmt.bits === 16 ? frames : 0);
  if (fmt.bits === 16) for (let i = 0; i < frames; i++) { let s = 0; for (let c = 0; c < fmt.ch; c++) s += data.readInt16LE((i * fmt.ch + c) * 2); out[i] = s / fmt.ch / 32768; }
  return { sr: fmt.sr, ch: fmt.ch, bits: fmt.bits, frames, data: out };
};
const writeWav = (file, d) => {
  const b = Buffer.alloc(44 + d.length * 2);
  b.write("RIFF", 0); b.writeUInt32LE(36 + d.length * 2, 4); b.write("WAVEfmt ", 8); b.writeUInt32LE(16, 16);
  b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(SR, 24); b.writeUInt32LE(SR * 2, 28); b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34);
  b.write("data", 36); b.writeUInt32LE(d.length * 2, 40);
  d.forEach((s, i) => b.writeInt16LE(Math.round(Math.max(-1, Math.min(1, s)) * 32767), 44 + i * 2));
  fs.writeFileSync(file, b);
};
let FF = null;
const ffmpeg = (args) => {
  if (!FF) {
    const t = spawnSync("ffmpeg", ["-version"], { shell: true });
    FF = t.status === 0 ? ["ffmpeg"] : ["npx", "remotion", "ffmpeg"];
  }
  return spawnSync(FF[0], [...FF.slice(1), ...args], { shell: true, cwd: ROOT, encoding: "utf8" });
};

// ---------- 1. âm code ----------
let KHO = {};
try { KHO = JSON.parse(fs.readFileSync(path.join(SFX, "_kho-code.json"), "utf8")); } catch { console.log("⚠ chưa có _kho-code.json — chạy node tools/make-sfx.mjs trước"); }

// ---------- 2. nhập âm thật từ _goc ----------
const goc = fs.readdirSync(GOC).filter((f) => /\.(mp3|wav|ogg|m4a|flac|aac)$/i.test(f));
const tmp = path.join(GOC, "_tam.wav");
for (const f of goc) {
  const key = slug(path.parse(f).name);
  const want = CAN_TIM[key] || {};
  const isBed = want.nhom === "khong-khi" || want.loop;
  const trim = isBed ? [] : ["-af", "silenceremove=start_periods=1:start_threshold=-50dB,areverse,silenceremove=start_periods=1:start_threshold=-50dB,areverse"];
  const r = ffmpeg(["-y", "-loglevel", "error", "-i", JSON.stringify(path.join(GOC, f)), "-ac", "1", "-ar", String(SR), ...trim, "-t", isBed ? "30" : "10", "-c:a", "pcm_s16le", JSON.stringify(tmp)]);
  const w = r.status === 0 && fs.existsSync(tmp) ? readWav(tmp) : null;
  if (!w || !w.frames) { console.log(`✖ ${f}: không đọc được (${(r.stderr || "").trim().split("\n").at(-1) || "ffmpeg lỗi"})`); continue; }
  let d = w.data;
  let pk = 0; for (const s of d) pk = Math.max(pk, Math.abs(s));
  const g = 10 ** (-3 / 20) / (pk || 1);
  d = d.map((s) => s * g);
  if (isBed && d.length > SR * 2) { // nối đầu–cuối 0,5 s để lặp không giật
    const X = Math.floor(0.5 * SR), n = d.length - X, o = d.slice(0, n);
    for (let i = 0; i < X; i++) { const a = i / X; o[i] = d[i] * a + d[n + i] * (1 - a); }
    d = o;
  } else { const fd = Math.floor(0.004 * SR); for (let i = 0; i < fd && i < d.length; i++) { d[i] *= i / fd; d[d.length - 1 - i] *= i / fd; } }
  writeWav(path.join(SFX, `${key}.wav`), d);
  KHO[key] = { nhom: want.nhom || "khac", mota: want.mota || `Âm anh thêm (${f})`, gain: want.gain ?? 0.4, ms: Math.round((d.length / SR) * 1000), ...(isBed ? { loop: true } : {}), nguon: `tệp: ${f}` };
  console.log(`✔ nhập ${f} → ${key}.wav (${(d.length / SR).toFixed(1)} s${isBed ? ", lặp" : ""})`);
}
try { fs.unlinkSync(tmp); } catch {}

// ---------- 2b. wav đặt thẳng vào public/sfx mà không có trong danh mục ----------
for (const f of fs.readdirSync(SFX).filter((f) => f.endsWith(".wav") && !f.startsWith("_"))) {
  const key = f.slice(0, -4);
  if (KHO[key]) continue;
  const w = readWav(path.join(SFX, f));
  if (!w) { console.log(`✖ ${f}: không phải wav PCM — bỏ vào _goc/ để chuyển`); continue; }
  const want = CAN_TIM[key] || {};
  KHO[key] = { nhom: want.nhom || "khac", mota: want.mota || "Âm anh thêm", gain: want.gain ?? 0.4, ms: Math.round((w.frames / w.sr) * 1000), ...(want.loop ? { loop: true } : {}), nguon: "tệp đặt thẳng" };
}

// ---------- 3. ghi danh mục ----------
const keys = Object.keys(KHO).sort((a, b) => (KHO[a].nhom + a).localeCompare(KHO[b].nhom + b));
const sorted = Object.fromEntries(keys.map((k) => [k, KHO[k]]));
fs.writeFileSync(path.join(ROOT, "src/rootComponents/CSK004/core/sfx-kho.js"),
  `// TỰ SINH bởi tools/sfx-kho.mjs — đừng sửa tay (sửa tools/make-sfx.mjs hoặc thêm tệp vào public/sfx/_goc/ rồi chạy lại).\n` +
  `// khoá → { nhom, mota, gain (độ to khi phát 0..1), ms (độ dài tệp), loop? (lặp được), nguon }\n` +
  `export const KHO = ${JSON.stringify(sorted, null, 1)};\n`);

const groups = {};
for (const k of keys) (groups[KHO[k].nhom] ||= []).push(k);
const order = Object.keys(NHOM_TEN).filter((g) => groups[g]).concat(Object.keys(groups).filter((g) => !NHOM_TEN[g]));
const sec = (ms) => (ms / 1000).toFixed(ms < 1000 ? 2 : 1) + " s";
let md = `# Kho tiếng động DetPro (#127)\n\n> TỰ SINH bởi \`node tools/sfx-kho.mjs\` — ${keys.length} âm (${keys.filter((k) => KHO[k].nguon === "code").length} tạo bằng code, ${keys.filter((k) => KHO[k].nguon !== "code").length} tệp thật). Nghe thử: mở \`public/sfx/_nghe-thu.html\` bằng trình duyệt.\n\n`;
md += `## Dùng trong kịch bản\n\n- Bật kho: \`audio: { sfxPack: "detpro-1" }\`. Âm mặc định theo module tự có (xem \`core/sfx.js\`, bảng AUTO).\n` +
  `- Thêm âm ở một cảnh: \`sfx: [{ at: "l2", key: "lat-sach" }]\` — phát trước câu l2 150 ms.\n` +
  `- Âm kéo dài một đoạn: \`{ at: "l1", to: "l3", key: "tich-tac-dai" }\` — chạy từ câu l1 đến hết câu l3 (âm lặp tự lặp, cuối đoạn nhỏ dần). \`at: "start"\`, \`to: "end"\` = đầu/cuối cảnh.\n` +
  `- Tuỳ chọn: \`gain\` (độ to), \`offsetMs\` (dời), \`end: true\` (đặt ở cuối câu). \`sfx: false\` = cảnh im. Khoá không có trong kho → bỏ qua và \`check-script\` báo.\n\n`;
for (const g of order) {
  md += `## ${NHOM_TEN[g] || g}\n\n| Khoá | Dài | Lặp | Độ to | Dùng khi | Nguồn |\n|---|---|---|---|---|---|\n`;
  for (const k of groups[g]) { const x = KHO[k]; md += `| \`${k}\` | ${sec(x.ms)} | ${x.loop ? "✓" : ""} | ${x.gain} | ${x.mota} | ${x.nguon} |\n`; }
  md += "\n";
}
const missing = Object.keys(CAN_TIM).filter((k) => !KHO[k] || KHO[k].nguon === "code");
md += `## Cần tìm (âm thật) — còn ${missing.length}/${Object.keys(CAN_TIM).length}\n\nTiếng vật thật làm bằng code nghe giả, nên lấy tệp thật. Tìm trên **Pixabay Sound Effects**, **Mixkit** hoặc **Freesound** (lọc giấy phép CC0), tải về, **đổi tên đúng khoá** rồi bỏ vào \`public/sfx/_goc/\` và chạy \`node tools/sfx-kho.mjs\`. Mp3 hay wav đều được; tệp dài cứ để nguyên, công cụ tự cắt lặng, chuẩn hoá, nối vòng cho âm nền.\n\n| Khoá (tên tệp) | Âm | Từ khoá tìm | Dùng ở | Đã có |\n|---|---|---|---|---|\n`;
for (const [k, x] of Object.entries(CAN_TIM)) md += `| \`${k}\` | ${x.mota}${x.loop ? " (lặp)" : ""} | ${x.tim} | ${x.dung} | ${KHO[k] && KHO[k].nguon !== "code" ? "✓" : ""} |\n`;
fs.writeFileSync(path.join(ROOT, "KHO-SFX.md"), md);

let html = `<!doctype html><meta charset="utf-8"><title>Kho tiếng động DetPro</title><style>body{font:15px system-ui;margin:24px;max-width:980px}h2{margin-top:28px}div.r{display:flex;gap:12px;align-items:center;border-bottom:1px solid #eee;padding:6px 0}code{min-width:150px;font-weight:600}audio{height:32px}small{color:#666}</style><h1>Kho tiếng động DetPro (${keys.length})</h1><p><small>Tự sinh bởi tools/sfx-kho.mjs. Nghe ở mức gốc (−3 dBFS); trong video còn nhân "độ to".</small></p>`;
for (const g of order) {
  html += `<h2>${NHOM_TEN[g] || g}</h2>`;
  for (const k of groups[g]) { const x = KHO[k]; html += `<div class="r"><code>${k}</code><audio controls preload="none" ${x.loop ? "loop" : ""} src="${k}.wav"></audio><span>${x.mota} <small>· ${sec(x.ms)}${x.loop ? " · lặp" : ""} · độ to ${x.gain}</small></span></div>`; }
}
fs.writeFileSync(path.join(SFX, "_nghe-thu.html"), html);
console.log(`✔ kho: ${keys.length} âm · còn thiếu ${missing.length} âm thật → KHO-SFX.md, core/sfx-kho.js, public/sfx/_nghe-thu.html`);
