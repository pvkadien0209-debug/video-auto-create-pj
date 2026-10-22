// anim.js — chuyển động dùng chung của dàn nhân vật (#106): nhiễu mượt, chớp mắt, mấp máy miệng theo câu, trộn tư thế.
// Mọi giá trị chỉ tính từ thời gian (ms hoặc khung) → render lại luôn ra cùng một hình.
import { random } from "remotion";
import { speakMs } from "../core/timing.js";

const smooth = (t) => t * t * (3 - 2 * t);

/** Nhiễu mượt 1 chiều trong [-1, 1] (thay @remotion/noise). */
export const noise1 = (seed, x) => {
  const i = Math.floor(x), f = x - i;
  const a = random(`${seed}-${i}`) * 2 - 1, b = random(`${seed}-${i + 1}`) * 2 - 1;
  return a + (b - a) * smooth(f);
};

/** Góc gió: sóng sin + nhiễu chậm (lá, đèn lồng đung đưa). frame = khung hình. */
export const windAngle = (frame, { amp = 6, period = 90, gust = 3, seed = "gio", phase = 0 } = {}) =>
  amp * Math.sin((frame / period) * Math.PI * 2 + phase) + gust * noise1(seed, frame / 45);

/** Độ mở mắt 0..1: mỗi 1,5–4 giây chớp một lần (~6 khung), lịch theo hạt giống riêng của từng nhân vật. */
export const eyeOpenAt = (frame, seed = "mat", { start = 12, min = 45, spread = 75 } = {}) => {
  let t = start, i = 0;
  while (t + 7 < frame) t += min + random(`${seed}-${i++}`) * spread;
  const d = frame - t;
  if (d < 0 || d > 6) return 1;
  return [0.6, 0.15, 0, 0, 0.35, 0.75, 1][d];
};

/**
 * Hình miệng khi nói (0 khép · 1 hé · 2 mở) tại thời điểm tMs của một câu {say, lang, startMs, endMs}.
 * Miệng chỉ mấp máy trong khoảng NÓI (speakMs), phần còn lại của câu (chờ đọc phụ đề) thì khép.
 * Mỗi từ ≈ 1–2 nhịp mở–khép; dấu phẩy/chấm có nghỉ ngắn.
 */
export const mouthAt = (line, tMs) => {
  if (!line || tMs < line.startMs) return 0;
  const words = String(line.say || "").split(/\s+/).filter(Boolean);
  if (!words.length) return 0;
  const dur = Math.min(line.endMs - line.startMs, speakMs(line.say, line.lang || "en") - 150);
  const t = tMs - line.startMs - 80;
  if (t < 0 || t > dur) return 0;
  // trọng số mỗi từ = số nguyên âm (≈ âm tiết) + nghỉ sau dấu câu
  const w = words.map((x) => Math.max(1, (x.match(/[aeiouyàáảãạăâêôơưéèẻẽẹíìỉĩịóòỏõọúùủũụýỳỷỹỵ]+/gi) || []).length));
  const pause = words.map((x) => (/[,;:]$/.test(x) ? 0.8 : /[.!?]$/.test(x) ? 1.2 : 0));
  const total = w.reduce((a, b) => a + b, 0) + pause.reduce((a, b) => a + b, 0);
  let u = (t / dur) * total;
  for (let i = 0; i < words.length; i++) {
    if (u < w[i]) {
      const syl = Math.floor(u), ph = u - syl;
      const k = 0.55 + 0.45 * random(`m-${line.id}-${i}-${syl}`);
      const open = k * Math.sin(Math.PI * ph);
      return open < 0.18 ? 0 : open < 0.6 ? 1 : 2;
    }
    u -= w[i];
    if (u < pause[i]) return 0;
    u -= pause[i];
  }
  return 0;
};

/** Đang nói không (để nhún đầu, sáng người nói). */
export const isTalking = (line, tMs) => !!line && tMs >= line.startMs && tMs <= line.endMs;

/** 0..1 có làm mượt (ease in-out) trong [a, b] ms. */
export const ramp = (t, a, b) => {
  if (t <= a) return 0;
  if (t >= b) return 1;
  const x = (t - a) / (b - a);
  return x * x * (3 - 2 * x);
};
