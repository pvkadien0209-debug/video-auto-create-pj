// make-sfx.mjs — kho tiếng động DetPro tạo bằng code (#126, #127). Không cần thư viện, không vướng giấy phép.
//   node tools/make-sfx.mjs        → public/sfx/<khoá>.wav (mono 44,1 kHz, 16 bit) + public/sfx/_kho-code.json (danh mục)
//                                    rồi tự chạy tools/sfx-kho.mjs (gộp với âm thật anh tải về → core/sfx-kho.js, KHO-SFX.md)
// Bảng âm và cách tạo: DetPro/research/2026-10-20-dung-video/2-tieng-dong-sfx.md §3.
// Mọi âm có cao độ cùng giọng D trưởng (hợp nhạc nền sau này). Chuẩn hoá đỉnh −3 dBFS; độ to khi phát = "gain" trong danh mục.
// Âm "loop: true" nối đầu–cuối liền (lặp được suốt một đoạn, vd. tích tắc trong cả cảnh).
// Code tạo được tốt: tiếng điện tử, đồng hồ, đếm, vút, dâng, chuông, nhạc hiệu. Tiếng vật thật (lật sách, bước chân…) nên lấy tệp thật:
// bỏ vào public/sfx/_goc/ rồi chạy `node tools/sfx-kho.mjs` (xem KHO-SFX.md mục "Cần tìm").
// Ý tưởng tổng hợp âm tham khảo repo cth9191/animate (MIT).
import { writeFileSync, mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(HERE, "..", "public", "sfx");
mkdirSync(OUT, { recursive: true });
const SR = 44100;
const buf = (sec) => new Float32Array(Math.ceil(sec * SR));
let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647) * 2 - 1;
const r01 = () => (rnd() + 1) / 2;
const env = (t, a, d) => (t < a ? t / a : Math.exp(-(t - a) / d));
const N = { D2: 73.42, A2: 110, D3: 146.83, Fs3: 185, A3: 220, D4: 293.66, E4: 329.63, Fs4: 369.99, G4: 392, A4: 440, B4: 493.88, Cs5: 554.37, D5: 587.33, E5: 659.25, Fs5: 739.99, G5: 783.99, A5: 880, B5: 987.77, D6: 1174.66, E6: 1318.51, Fs6: 1479.98, A6: 1760 };

// ---------- khối dựng âm ----------
// nốt "pluck": sine + hoạ âm tam giác, tắt nhanh
function pluck(o, t0, f, dur, amp = 0.6, dec = 0.12, bright = 0.35) {
  for (let i = 0; i < dur * SR; i++) {
    const t = i / SR, k = Math.floor(t0 * SR) + i;
    if (k >= o.length) break;
    const ph = 2 * Math.PI * f * t;
    const s = Math.sin(ph) + bright * (2 / Math.PI) * Math.asin(Math.sin(2 * ph)) + 0.15 * Math.sin(3 * ph);
    o[k] += s * amp * env(t, 0.004, dec);
  }
}
function sine(o, t0, f, dur, amp, dec, a = 0.003) {
  for (let i = 0; i < dur * SR; i++) { const t = i / SR, k = Math.floor(t0 * SR) + i; if (k >= o.length) break; o[k] += Math.sin(2 * Math.PI * f * t) * amp * env(t, a, dec); }
}
function sweep(o, t0, f0, f1, dur, amp, dec) {
  let ph = 0;
  for (let i = 0; i < dur * SR; i++) { const t = i / SR, k = Math.floor(t0 * SR) + i; if (k >= o.length) break;
    const f = f0 * Math.pow(f1 / f0, t / dur); ph += (2 * Math.PI * f) / SR; o[k] += Math.sin(ph) * amp * env(t, 0.002, dec); }
}
// nhiễu lọc thấp một cực; lp có thể là hàm theo u (0..1)
function noise(o, t0, dur, amp, shape, lp = 0.3) {
  let y = 0;
  for (let i = 0; i < dur * SR; i++) { const t = i / SR, k = Math.floor(t0 * SR) + i; if (k >= o.length) break;
    const c = typeof lp === "function" ? lp(t / dur) : lp; y += c * (rnd() - y); o[k] += y * amp * shape(t / dur, t); }
}
// nhiễu dải (hiệu hai bộ lọc thấp) — tiếng "xì"/gỗ/giấy rõ hơn nhiễu thường
function bandNoise(o, t0, dur, amp, shape, lo = 0.05, hi = 0.5) {
  let a = 0, b = 0;
  for (let i = 0; i < dur * SR; i++) { const t = i / SR, k = Math.floor(t0 * SR) + i; if (k >= o.length) break;
    const x = rnd(); a += hi * (x - a); b += lo * (x - b); o[k] += (a - b) * amp * shape(t / dur, t); }
}
// sóng răng cưa qua lọc thấp (kèn/đàn điện tử), có rung nhẹ
function saw(o, t0, f, dur, amp, { a = 0.02, d = 0.3, lp = 0.15, vib = 0, glide = 1 } = {}) {
  let ph = 0, y = 0;
  for (let i = 0; i < dur * SR; i++) { const t = i / SR, k = Math.floor(t0 * SR) + i; if (k >= o.length) break;
    const ff = f * Math.pow(glide, t / dur) * (1 + vib * Math.sin(2 * Math.PI * 5.5 * t)); ph += ff / SR;
    const s = 2 * (ph % 1) - 1; y += lp * (s - y);
    const e = t < a ? t / a : t > dur - 0.05 ? Math.max(0, (dur - t) / 0.05) : Math.exp(-(t - a) / d) * 0.6 + 0.4;
    o[k] += y * amp * e; }
}
// tiếng "tách" của cơ cấu (đồng hồ, công tắc): nhiễu cực ngắn + cộng hưởng
function click(o, t0, f, amp = 0.8, dec = 0.012) { noise(o, t0, 0.006, amp, () => 1, 0.9); sine(o, t0, f, 0.06, amp * 0.7, dec, 0.0005); sine(o, t0, f * 1.47, 0.04, amp * 0.3, dec * 0.6, 0.0005); }

// nối đầu–cuối cho âm lặp: dựng dài thêm X, trộn phần thừa vào đầu
function loopify(o, xfSec = 0.25) {
  const X = Math.floor(xfSec * SR), n = o.length - X, out = new Float32Array(n);
  for (let i = 0; i < n; i++) out[i] = o[i];
  for (let i = 0; i < X; i++) { const g = i / X; out[i] = o[i] * g + o[n + i] * (1 - g); }
  return out;
}
function wav(name, d, { peakDb = -3, loop = false } = {}) {
  if (!loop) { // làm mềm 4 ms đầu/cuối để không lách cách (âm lặp thì không, để nối liền)
    const fade = Math.floor(0.004 * SR);
    for (let i = 0; i < fade; i++) { d[i] *= i / fade; d[d.length - 1 - i] *= i / fade; }
  }
  let pk = 0; for (const s of d) pk = Math.max(pk, Math.abs(s));
  const g = 10 ** (peakDb / 20) / (pk || 1);
  const b = Buffer.alloc(44 + d.length * 2);
  b.write("RIFF", 0); b.writeUInt32LE(36 + d.length * 2, 4); b.write("WAVEfmt ", 8); b.writeUInt32LE(16, 16);
  b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(SR, 24); b.writeUInt32LE(SR * 2, 28); b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34);
  b.write("data", 36); b.writeUInt32LE(d.length * 2, 40);
  d.forEach((s, i) => b.writeInt16LE(Math.round(Math.max(-1, Math.min(1, s * g)) * 32767), 44 + i * 2));
  writeFileSync(path.join(OUT, `${name}.wav`), b);
  return Math.round((d.length / SR) * 1000);
}

const KHO = {}; // khoá → { nhom, mota, gain, loop?, ms, nguon: "code" }
let NHOM = "";
const nhom = (n) => (NHOM = n);
/** W(khoá, giây, hàm dựng, độ to khi phát, mô tả, { loop, xf }) */
const W = (key, sec, fn, gain, mota, { loop = false, xf = 0.25 } = {}) => {
  let o = buf(sec + (loop ? xf : 0));
  fn(o);
  if (loop) o = loopify(o, xf);
  const ms = wav(key, o, { loop });
  KHO[key] = { nhom: NHOM, mota, gain, ms, ...(loop ? { loop: true } : {}), nguon: "code" };
};

// ===================== 1. Cấu trúc bài (chương, mục lục, câu hỏi) =====================
nhom("cau-truc");
W("chuong", 0.8, (o) => { noise(o, 0, 0.22, 0.35, (u) => Math.sin(Math.PI * u) ** 2, (u) => 0.05 + 0.25 * u); pluck(o, 0.16, N.D5, 0.6, 0.55, 0.16); pluck(o, 0.3, N.A5, 0.5, 0.5, 0.2); }, 0.42, "Mở chương (HOST-03): vút ngắn + hai nốt");
W("muc-luc", 0.75, (o) => { noise(o, 0, 0.4, 0.35, (u) => u * u * (1 - u) * 4, (u) => 0.02 + 0.35 * u); pluck(o, 0.38, N.D6, 0.37, 0.5, 0.14); }, 0.34, "Mục lục hiện ra (TOC-01)");
W("cau-hoi", 0.55, (o) => { pluck(o, 0, N.A4, 0.3, 0.55, 0.1); pluck(o, 0.14, N.D5, 0.41, 0.55, 0.22); }, 0.34, "Đặt câu hỏi (ASK-01): hai nốt đi lên");
W("lat-the", 0.22, (o) => { noise(o, 0, 0.18, 1, (u) => Math.exp(-u * 6), 0.7); noise(o, 0.12, 0.05, 0.8, (u) => Math.exp(-u * 10), 0.9); }, 0.34, "Thẻ chữ lật/hiện (TEXT-01/02)");
W("y-tuong", 1.1, (o) => { sine(o, 0, N.A5, 0.5, 0.5, 0.18); sine(o, 0.12, N.D6, 0.9, 0.55, 0.3); for (let k = 0; k < 7; k++) sine(o, 0.25 + k * 0.07, [N.Fs6, N.A6, N.D6 * 2][k % 3], 0.3, 0.12, 0.08); }, 0.34, "Ý chính / \"à ra thế\": ting + lấp lánh");

// ===================== 2. Đúng – sai – nhấn =====================
nhom("dung-sai");
W("dung", 0.6, (o) => { pluck(o, 0, N.D5, 0.3, 0.5, 0.1, 0.5); pluck(o, 0.09, N.Fs5, 0.3, 0.5, 0.1, 0.5); pluck(o, 0.18, N.A5, 0.42, 0.55, 0.18, 0.5); }, 0.38, "Đúng (ba nốt đi lên)");
W("khong-phai", 0.55, (o) => { pluck(o, 0, N.Fs5, 0.3, 0.5, 0.12, 0.5); pluck(o, 0.14, N.D5, 0.41, 0.5, 0.2, 0.5); }, 0.34, "Không phải / gỡ hiểu lầm (hai nốt đi xuống, nhẹ)");
W("sai", 0.55, (o) => { for (let i = 0; i < o.length; i++) { const t = i / SR; const s = Math.sign(Math.sin(2 * Math.PI * 110 * t)) * 0.5 + Math.sign(Math.sin(2 * Math.PI * 116 * t)) * 0.5; o[i] += s * 0.4 * (t < 0.45 ? 1 : (0.55 - t) / 0.1); } }, 0.22, "Sai rõ ràng (còi trầm) — dùng ít");
W("nhan", 0.32, (o) => { sweep(o, 0, 120, 38, 0.3, 1, 0.12); noise(o, 0, 0.08, 0.5, (u) => Math.exp(-u * 5), 0.15); }, 0.5, "Nhấn câu chốt (TEXT-04): \"bụp\" trầm");
W("ting", 0.65, (o) => { sine(o, 0, N.E6, 0.6, 0.55, 0.18); sine(o, 0.06, 1975.5, 0.55, 0.5, 0.2); sine(o, 0.06, 3951, 0.3, 0.08, 0.05); }, 0.36, "Con số / kết luận hiện ra");
W("tich", 0.08, (o) => { noise(o, 0, 0.006, 0.8, () => 1, 0.9); sine(o, 0, 2000, 0.06, 0.6, 0.012); }, 0.3, "Đánh dấu một ý trong danh sách");
W("pop", 0.13, (o) => { for (let i = 0; i < o.length; i++) { const t = i / SR, f = 300 + 650 * Math.exp(-t / 0.02); o[i] += Math.sin(2 * Math.PI * f * t) * env(t, 0.001, 0.03); } }, 0.3, "Vật/ô nhỏ bật ra");
W("chon", 0.12, (o) => { sine(o, 0, N.A5, 0.05, 0.5, 0.02); sine(o, 0.045, N.D6, 0.07, 0.5, 0.03); }, 0.3, "Chọn đáp án / bấm nút (blip)");
W("click", 0.05, (o) => click(o, 0, 3000, 0.9, 0.008), 0.3, "Bấm chuột / công tắc");
W("chuc-mung", 1.9, (o) => { // kèn điện tử: D–F#–A rồi hợp âm D trưởng ngân
  [[0, N.D4], [0.14, N.Fs4], [0.28, N.A4]].forEach(([t, f]) => saw(o, t, f, 0.16, 0.5, { d: 0.1 }));
  [N.D4, N.Fs4, N.A4, N.D5].forEach((f) => saw(o, 0.45, f, 1.4, 0.3, { a: 0.03, d: 0.6, vib: 0.006 }));
  for (let k = 0; k < 10; k++) sine(o, 0.5 + k * 0.09, [N.D6, N.Fs6, N.A6][k % 3], 0.25, 0.1, 0.07); }, 0.32, "Chúc mừng / hoàn thành (kèn ngắn + lấp lánh)");
W("thang-cap", 0.85, (o) => { [N.D5, N.Fs5, N.A5, N.D6, N.Fs6, N.A6].forEach((f, i) => pluck(o, i * 0.07, f, 0.45, 0.42, 0.12, 0.5)); }, 0.32, "Lên cấp / tiến bộ (rải nốt nhanh đi lên)");
W("buon", 2.2, (o) => { [[0, N.A3], [0.45, N.Fs3 * 1.06], [0.9, N.Fs3]].forEach(([t, f]) => saw(o, t, f, 0.42, 0.45, { d: 0.25, lp: 0.08 }));
  saw(o, 1.35, 174.6, 0.85, 0.45, { lp: 0.08, vib: 0.03, glide: 0.94, d: 0.6 }); }, 0.28, "\"Ôi thôi\" (kèn buồn wah-wah) — chỉ dùng cho chỗ hài nhẹ");

// ===================== 3. Chuyển động & chuyển cảnh =====================
nhom("chuyen-dong");
W("whoosh", 0.42, (o) => noise(o, 0, 0.42, 1, (u) => Math.sin(Math.PI * u) ** 2, (u) => 0.03 + 0.3 * Math.sin(Math.PI * u)), 0.32, "Vút (chuyển cảnh whip)");
W("whoosh-ngan", 0.22, (o) => noise(o, 0, 0.22, 1, (u) => Math.sin(Math.PI * u) ** 1.5, (u) => 0.08 + 0.4 * Math.sin(Math.PI * u)), 0.3, "Vút ngắn (chữ/thẻ trượt vào)");
W("whoosh-dai", 1.3, (o) => { noise(o, 0, 1.3, 1, (u) => Math.sin(Math.PI * u) ** 2, (u) => 0.02 + 0.25 * Math.sin(Math.PI * u) ** 2); bandNoise(o, 0.3, 0.8, 0.4, (u) => Math.sin(Math.PI * u), 0.02, 0.3); }, 0.3, "Vút dài (đổi cảnh lớn, bay qua thành phố)");
W("vut-len", 0.6, (o) => { noise(o, 0, 0.6, 0.8, (u) => u ** 1.5 * (u < 0.9 ? 1 : (1 - u) * 10), (u) => 0.02 + 0.5 * u); sweep(o, 0.05, 300, 1400, 0.55, 0.2, 0.4); }, 0.3, "Vút lên (vật bay lên / hiện ra từ dưới)");
W("roi", 0.8, (o) => { sweep(o, 0, 1800, 400, 0.75, 0.5, 0.5); noise(o, 0.72, 0.08, 0.6, (u) => Math.exp(-u * 6), 0.2); }, 0.26, "Rơi xuống (huýt đi xuống + chạm)");
W("nay", 0.6, (o) => { let ph = 0; for (let i = 0; i < o.length; i++) { const t = i / SR, f = 180 + 120 * Math.exp(-t * 6) * Math.cos(2 * Math.PI * 9 * t); ph += (2 * Math.PI * f) / SR; o[i] += Math.sin(ph) * env(t, 0.003, 0.18); } }, 0.32, "Nảy \"boing\" (nhân vật bật dậy, chỗ vui)");
W("truot", 0.5, (o) => bandNoise(o, 0, 0.5, 1, (u) => Math.sin(Math.PI * Math.min(1, u * 1.3)) * (1 - u * 0.5), 0.03, 0.25), 0.28, "Trượt (bảng/thẻ kéo ngang)");
W("vuot-man-hinh", 0.25, (o) => bandNoise(o, 0, 0.25, 1, (u) => Math.sin(Math.PI * u), 0.15, 0.7), 0.24, "Vuốt màn hình điện thoại");

// ===================== 4. Thời gian & đếm =====================
nhom("thoi-gian");
W("dong-ho", 0.07, (o) => { sine(o, 0, 3200, 0.05, 0.6, 0.008); sine(o, 0, 1600, 0.05, 0.3, 0.01); }, 0.14, "Một tiếng tích (đồng hồ hiện ra)");
W("tich-tac", 0.08, (o) => { sine(o, 0, 1800, 0.07, 0.8, 0.015); noise(o, 0, 0.01, 0.4, () => 1, 0.9); }, 0.22, "Một nhịp đếm (câu đố dùng)");
W("tich-tac-dai", 4, (o) => { for (let s = 0; s < 4; s++) click(o, s, s % 2 ? 2100 : 2500, 0.8, 0.014); }, 0.2, "Đồng hồ tích tắc, 1 nhịp/giây — LẶP suốt cảnh (vd. đêm khuya, giờ tan làm)", { loop: true, xf: 0.02 });
W("dem-nguoc", 3.7, (o) => { [0, 1, 2].forEach((s) => { sine(o, s, N.A5, 0.16, 0.6, 0.08); sine(o, s, N.A5 * 2, 0.1, 0.15, 0.04); }); sine(o, 3, N.A6, 0.65, 0.6, 0.35); sine(o, 3, N.A6 * 1.5, 0.4, 0.15, 0.2); }, 0.3, "Đếm ngược 3–2–1–bíp (hết giờ)");
W("dem-so-dai", 2.6, (o) => { let t = 0, gap = 0.03; while (t < 2.1) { sine(o, t, 2400, 0.02, 0.6, 0.006); t += gap; gap *= t > 1.4 ? 1.18 : 1.0; } sine(o, 2.2, N.E6, 0.4, 0.55, 0.15); sine(o, 2.26, 1975.5, 0.35, 0.45, 0.15); }, 0.18, "Con số chạy lên rồi dừng \"ting\" (đếm 0 → 16)");
W("dem-so", 1.0, (o) => { let t = 0, gap = 0.05; while (t < 0.95) { sine(o, t, 2400, 0.02, 0.7, 0.006); t += gap; gap *= 1.12; } }, 0.16, "Con số chạy ngắn (chậm dần)");
W("bao-thuc", 2.5, (o) => { for (let g = 0; g < 4; g++) for (let p = 0; p < 4; p++) { const t = g * 0.6 + p * 0.08; for (let i = 0; i < 0.05 * SR; i++) { const k = Math.floor(t * SR) + i; if (k < o.length) o[k] += Math.sign(Math.sin(2 * Math.PI * 2200 * (i / SR))) * 0.4; } } }, 0.2, "Chuông báo thức (sáng hôm sau, trễ giờ)");
W("dong-ho-chuong", 2.4, (o) => { [0, 0.8].forEach((t) => { sine(o, t, N.D5, 1.6, 0.5, 0.6); sine(o, t, N.D5 * 2.76, 1, 0.15, 0.3); sine(o, t, N.D5 * 5.4, 0.5, 0.06, 0.12); }); }, 0.24, "Chuông đồng hồ điểm giờ (hai tiếng boong)");
W("tua", 0.8, (o) => { let t = 0, gap = 0.07; let f = 900; while (t < 0.75) { sine(o, t, f, 0.03, 0.5, 0.01); t += gap; gap = Math.max(0.025, gap * 0.85); f *= 1.04; }
  noise(o, 0, 0.8, 0.25, (u) => u * (1 - u) * 4, (u) => 0.05 + 0.4 * u); }, 0.34, "Tua lại (DLG-01)");
W("re-dia", 0.5, (o) => { let ph = 0;
  for (let i = 0; i < o.length; i++) { const t = i / SR, f = 900 * Math.exp(-t * 5) + 120; ph += (2 * Math.PI * f) / SR;
    o[i] += (Math.sin(ph) * 0.5 + rnd() * 0.35) * env(t, 0.005, 0.12) * (0.6 + 0.4 * Math.sin(2 * Math.PI * 28 * t)); }
  for (let k = 0; k < 6; k++) noise(o, 0.05 + k * 0.07, 0.006, 0.9, () => 1, 0.95); }, 0.5, "Khựng lại (đĩa rè) — dừng hình trong DLG-01");

// ===================== 5. Hồi hộp & tiết lộ =====================
nhom("hoi-hop");
W("rise", 0.7, (o) => { let ph = 0; for (let i = 0; i < o.length; i++) { const t = i / SR, f = 110 * Math.pow(12, t / 0.7); ph += (2 * Math.PI * f) / SR;
  o[i] += ((ph / Math.PI) % 2 - 1) * 0.3 * Math.min(1, t / 0.6) * (t > 0.66 ? (0.7 - t) / 0.04 : 1); } }, 0.28, "Dâng ngắn trước khi lộ");
W("rise-dai", 3.2, (o) => { let ph1 = 0, ph2 = 0; for (let i = 0; i < o.length; i++) { const t = i / SR, u = t / 3.2, f = 90 * Math.pow(8, u);
  ph1 += f / SR; ph2 += (f * 1.007) / SR; const s = (2 * (ph1 % 1) - 1 + 2 * (ph2 % 1) - 1) * 0.25; o[i] += s * u ** 1.6 * (u > 0.97 ? (1 - u) / 0.03 : 1); }
  noise(o, 0, 3.2, 0.5, (u) => u ** 2 * (u > 0.97 ? (1 - u) / 0.03 : 1), (u) => 0.02 + 0.5 * u); }, 0.22, "Dâng dài 3 s (trước đáp án / con số lớn), nên nối với \"hit\"");
W("hit", 1.4, (o) => { sweep(o, 0, 110, 35, 1.3, 1, 0.45); noise(o, 0, 0.25, 0.7, (u, t) => env(t, 0.001, 0.06), 0.25); bandNoise(o, 0, 1.2, 0.25, (u, t) => env(t, 0.002, 0.35), 0.01, 0.12); }, 0.4, "Đập mạnh (lộ con số/đáp án lớn)");
W("trong-don", 2.6, (o) => { let t = 0; while (t < 2.1) { const u = t / 2.1; noise(o, t, 0.05, 0.35 + 0.6 * u, (v, tt) => env(tt, 0.001, 0.02), 0.6); sine(o, t, 190, 0.04, 0.2, 0.02); t += 0.045 - 0.012 * u; }
  noise(o, 2.15, 0.45, 0.9, (v, tt) => env(tt, 0.002, 0.15), 0.85); sweep(o, 2.15, 120, 50, 0.4, 0.8, 0.15); }, 0.3, "Trống dồn rồi \"chát\" (công bố kết quả)");
W("tiet-lo", 1.3, (o) => { for (let k = 0; k < 14; k++) sine(o, k * 0.05, [N.D6, N.Fs6, N.A6, N.E6][k % 4] * (1 + (k % 3) * 0.002), 0.5, 0.25, 0.15); sine(o, 0.6, N.D5, 0.7, 0.3, 0.3); }, 0.28, "Lộ ra lấp lánh (đáp án đẹp, \"đây rồi\")");
W("lap-lanh", 0.9, (o) => { for (let k = 0; k < 10; k++) sine(o, r01() * 0.6, [N.A6, N.Fs6, N.D6 * 2, N.E6 * 2][k % 4], 0.3, 0.2, 0.06); }, 0.24, "Lấp lánh nhẹ (vật mới, sạch, đẹp)");
W("hoi-hop", 4, (o) => { for (let i = 0; i < o.length; i++) { const t = i / SR; o[i] += (Math.sin(2 * Math.PI * N.D2 * t) * 0.5 + Math.sin(2 * Math.PI * N.D2 * 1.006 * t) * 0.5 + Math.sin(2 * Math.PI * N.A2 * t) * 0.25) * (0.75 + 0.25 * Math.sin(2 * Math.PI * 0.5 * t)); } }, 0.14, "Nền hồi hộp trầm — LẶP (đoạn căng, trước câu hỏi khó)", { loop: true, xf: 0.5 });
W("tim-dap", 2, (o) => { [0, 0.86].forEach((t) => { sweep(o, t, 70, 45, 0.15, 1, 0.05); sweep(o, t + 0.22, 65, 42, 0.13, 0.7, 0.045); }); }, 0.36, "Tim đập (lo lắng, phỏng vấn) — LẶP", { loop: true, xf: 0.02 });

// ===================== 6. Điện thoại & máy tính =====================
nhom("dien-thoai");
W("tin-den", 0.3, (o) => { sine(o, 0, N.B5, 0.12, 0.6, 0.05); sine(o, 0.1, N.E6, 0.2, 0.6, 0.07); }, 0.34, "Tin nhắn đến");
W("tin-di", 0.2, (o) => { noise(o, 0, 0.1, 0.4, (u) => Math.sin(Math.PI * u), (u) => 0.1 + 0.4 * u); sweep(o, 0.06, 900, 1600, 0.12, 0.5, 0.05); }, 0.3, "Tin nhắn gửi đi");
W("rung", 0.75, (o) => { for (let i = 0; i < o.length; i++) { const t = i / SR; const on = (t < 0.3 || (t > 0.42 && t < 0.72)) ? 1 : 0;
  o[i] += Math.sign(Math.sin(2 * Math.PI * 160 * t)) * 0.35 * on * (0.6 + 0.4 * Math.sin(2 * Math.PI * 11 * t)); } }, 0.26, "Điện thoại rung (hai nhịp)");
W("rung-dai", 3, (o) => { for (let i = 0; i < o.length; i++) { const t = i / SR, c = t % 1.5; const on = c < 0.45 || (c > 0.6 && c < 1.05) ? 1 : 0;
  o[i] += Math.sign(Math.sin(2 * Math.PI * 160 * t)) * 0.35 * on * (0.6 + 0.4 * Math.sin(2 * Math.PI * 11 * t)); } }, 0.24, "Điện thoại rung liên tục — LẶP (cuộc gọi bị lờ đi)", { loop: true, xf: 0.02 });
W("nhac-chuong", 3, (o) => { const mel = [N.A5, N.Fs5, N.D6, N.A5, N.E6, N.D6, N.A5, N.Fs5]; for (let r = 0; r < 2; r++) mel.forEach((f, i) => pluck(o, r * 1.5 + i * 0.16, f, 0.3, 0.45, 0.09, 0.15)); }, 0.24, "Nhạc chuông (cuộc gọi đến)");
W("go-phim", 1.1, (o) => { const hits = [0, 0.09, 0.2, 0.27, 0.39, 0.5, 0.58, 0.71, 0.8, 0.93];
  hits.forEach((h, i) => { noise(o, h, 0.03, 0.9, (u) => Math.exp(-u * 8), 0.85); sine(o, h, 1900 + (i % 3) * 180, 0.03, 0.25, 0.008); }); }, 0.16, "Gõ phím ngắn (TYPE-01)");
W("go-phim-dai", 4, (o) => { let t = 0.02, i = 0; while (t < 3.9) { const a = 0.6 + 0.4 * r01(); noise(o, t, 0.03, a, (u) => Math.exp(-u * 8), 0.8 + 0.15 * r01()); sine(o, t, 1700 + 500 * r01(), 0.03, 0.2 * a, 0.008);
  if (i % 9 === 8) { sweep(o, t + 0.05, 300, 200, 0.06, 0.4 * a, 0.03); t += 0.3; } t += 0.07 + 0.09 * r01(); i++; } }, 0.14, "Gõ phím liên tục — LẶP (làm việc trên máy tính)", { loop: true, xf: 0.05 });
W("chup-anh", 0.35, (o) => { noise(o, 0, 0.03, 1, (u) => Math.exp(-u * 4), 0.7); click(o, 0.02, 1500, 0.6, 0.01); noise(o, 0.12, 0.06, 0.7, (u) => Math.exp(-u * 5), 0.6); click(o, 0.14, 1300, 0.5, 0.01); }, 0.3, "Chụp ảnh / chụp màn hình");
W("xu", 0.4, (o) => { [2093, 2637, 3322, 4186].forEach((f, i) => sine(o, i * 0.012, f * (1 + i * 0.013), 0.38, 0.35, 0.09)); }, 0.34, "Một đồng xu / tiền vào");
W("xu-nhieu", 1.6, (o) => { for (let k = 0; k < 14; k++) { const t = k * 0.08 + 0.03 * r01(); [2093, 2637, 3322].forEach((f, i) => sine(o, t + i * 0.01, f * (1 + 0.04 * r01()), 0.3, 0.22, 0.07)); } }, 0.26, "Nhiều xu rơi (tiết kiệm được, lương về)");

// ===================== 7. Không khí (nền, lặp) =====================
nhom("khong-khi");
W("phong-yen", 6, (o) => { noise(o, 0, 6.5, 1, () => 1, 0.012); bandNoise(o, 0, 6.5, 0.15, (u, t) => 0.7 + 0.3 * Math.sin(2 * Math.PI * 0.13 * t), 0.002, 0.02); }, 0.1, "Tiếng phòng yên (nền rất nhỏ cho cảnh trong nhà) — LẶP", { loop: true, xf: 0.6 });
W("mua", 6, (o) => { bandNoise(o, 0, 6.5, 0.6, () => 1, 0.05, 0.6); for (let k = 0; k < 220; k++) { const t = r01() * 6.4; sine(o, t, 2500 + 3000 * r01(), 0.02, 0.15 * r01(), 0.004, 0.0005); } }, 0.14, "Mưa ngoài cửa sổ — LẶP (bản code, nên thay tệp thật)", { loop: true, xf: 0.6 });

// ===================== 7b. Vật thật — bản code tạm (thay bằng tệp thật: bỏ cùng tên vào public/sfx/_goc/) =====================
nhom("vat-that");
W("but-viet", 3, (o) => { // bút chì sột soạt: các nét 60–180 ms, nhiễu dải cao, nhấn nhá
  let t = 0.02; while (t < 2.9) { const d = 0.06 + 0.12 * r01(), a = 0.5 + 0.5 * r01();
    bandNoise(o, t, d, a, (u) => Math.sin(Math.PI * u) ** 0.7 * (0.7 + 0.3 * Math.sin(u * 30)), 0.25, 0.85); t += d + 0.02 + 0.1 * r01(); } },
  0.2, "Bút chì viết lên giấy — LẶP (bản code tạm; bảng vẽ BOARD-01)", { loop: true, xf: 0.05 });
W("go-bang", 0.18, (o) => { sine(o, 0, 180, 0.08, 0.7, 0.025, 0.0008); sine(o, 0, 1150, 0.06, 0.6, 0.012, 0.0005); sine(o, 0, 2650, 0.03, 0.35, 0.006, 0.0005); noise(o, 0, 0.012, 0.6, () => 1, 0.85); },
  0.3, "Bút dạ gõ lên bảng \"cộc\" (mỗi lần tay Đét đặt bút vẽ)");
W("go-bang-2", 0.4, (o) => { [0, 0.16].forEach((t, i) => { sine(o, t, 180, 0.08, 0.7 - i * 0.15, 0.025, 0.0008); sine(o, t, 1150 + i * 60, 0.06, 0.6, 0.012, 0.0005); sine(o, t, 2650, 0.03, 0.35, 0.006, 0.0005); noise(o, t, 0.012, 0.6, () => 1, 0.85); }); },
  0.3, "Gõ bảng hai cái \"cộc cộc\" (chỉ vào một ô: nhìn đây!)");
W("but-gach", 0.35, (o) => bandNoise(o, 0, 0.3, 1, (u) => Math.sin(Math.PI * u) ** 0.5, 0.2, 0.8), 0.24, "Gạch một nét bút (bản code tạm)");

// ===================== 8. Thương hiệu =====================
nhom("thuong-hieu");
W("det", 0.25, (o) => { noise(o, 0, 0.25, 1, (u, t) => env(t, 0.001, 0.025), 0.6); sine(o, 0, 180, 0.2, 0.5, 0.04); }, 0.55, "\"Đét\" (vòng Vòng Đét, iris)");
W("logo", 1.4, (o) => { pluck(o, 0, N.D5, 0.5, 0.5, 0.18); pluck(o, 0.16, N.Fs5, 0.5, 0.5, 0.18); pluck(o, 0.32, N.A5, 0.5, 0.5, 0.2); pluck(o, 0.48, N.D6, 0.9, 0.55, 0.35);
  noise(o, 0.62, 0.25, 0.8, (u, t) => env(t, 0.001, 0.025), 0.6); sine(o, 0.62, 180, 0.2, 0.4, 0.04); }, 0.55, "Nhạc hiệu DetPro (END-05)");

writeFileSync(path.join(OUT, "_kho-code.json"), JSON.stringify(KHO, null, 1));
console.log(`✔ ${Object.keys(KHO).length} tiếng động (code) → ${OUT}`);
// gộp với âm thật anh tải về → core/sfx-kho.js, KHO-SFX.md, nghe thử
const r = spawnSync(process.execPath, [path.join(HERE, "sfx-kho.mjs")], { stdio: "inherit" });
process.exit(r.status ?? 0);
