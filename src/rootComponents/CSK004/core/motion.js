// motion.js — vốn chuyển động dùng chung (nghiên cứu module §3.1). Đường cong theo Carbon expressive.
import { Easing, interpolate, spring } from "remotion";

export const EASE_IN = Easing.bezier(0, 0, 0.3, 1); // vào
export const EASE_OUT = Easing.bezier(0.4, 0.14, 1, 1); // ra
export const EASE_STD = Easing.bezier(0.4, 0.14, 0.3, 1);

const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" };

/** 0 → 1 trong khoảng [start, start + dur] khung hình. */
export const progress = (frame, start, dur, easing = EASE_IN) =>
  interpolate(frame, [start, start + Math.max(1, dur)], [0, 1], { ...clamp, easing });

/** Hiện mờ dần và trượt lên 24 px. */
export const fadeUp = (frame, start = 0, dur = 10) => {
  const p = progress(frame, start, dur);
  return { opacity: p, transform: `translateY(${(1 - p) * 24}px)` };
};

/** Nảy vào, có vượt nhẹ. */
export const pop = (frame, fps, start = 0) => {
  const s = spring({ frame: frame - start, fps, config: { damping: 9, stiffness: 160, mass: 0.6 } });
  return { opacity: Math.min(1, s * 1.5), transform: `scale(${0.6 + 0.4 * s})` };
};

/** Mờ vào đầu cảnh, mờ ra cuối cảnh (chuyển cảnh mặc định). */
export const sceneFade = (frame, total, inF = 8, outF = 8) =>
  Math.min(inF > 0 ? progress(frame, 0, inF) : 1, 1 - progress(frame, total - outF, outF, EASE_OUT));

/** Thở nhẹ khi đứng yên hoặc lúc lặng (idle): lệch vài px theo hình sin, không giật. */
export const idle = (frame, amp = 3, period = 90) => Math.sin((frame / period) * Math.PI * 2) * amp;

/** Khung hình bắt đầu của mục thứ i khi các mục vào lần lượt, chia đều trong khoảng có sẵn. */
export const staggerAt = (i, n, startF, spanF) => startF + Math.round((spanF / Math.max(1, n)) * i);

// ---------- Hiệu ứng kịch tính (dùng cho họ OPEN và chỗ cần nhấn mạnh) ----------

/** Rung khung (shake) trong [start, start+dur]: biên độ giảm dần. Trả về translate px. */
export const shake = (frame, start, dur = 10, amp = 14) => {
  const t = frame - start;
  if (t < 0 || t > dur) return { x: 0, y: 0 };
  const k = 1 - t / dur;
  return { x: Math.sin(t * 2.9) * amp * k, y: Math.cos(t * 3.7) * amp * 0.6 * k };
};

/** Loé sáng: 1 tại khung `at`, tắt dần trong `dur` khung. Dùng làm opacity của lớp trắng/đỏ phủ. */
export const flash = (frame, at, dur = 8) => (frame < at ? 0 : Math.max(0, 1 - (frame - at) / dur));

/** Đập vào (slam): chữ từ to gấp `from` lần lao xuống cỡ thật, có nảy. */
export const slam = (frame, fps, start = 0, from = 2.6) => {
  const s = spring({ frame: frame - start, fps, config: { damping: 11, stiffness: 260, mass: 0.7 } });
  return { opacity: frame < start ? 0 : Math.min(1, s * 3), transform: `scale(${from - (from - 1) * s})` };
};

/** Phóng to/thu nhỏ máy quay (push): scale từ a → b trong [start, start+dur]. */
export const zoom = (frame, start, dur, a = 1.6, b = 1) => {
  const p = progress(frame, start, dur, EASE_STD);
  return a + (b - a) * p;
};

/** Gõ chữ: trả về phần chữ đã gõ, ~cps ký tự mỗi giây. */
export const typed = (text, frame, fps, start = 0, cps = 28) => {
  const n = Math.max(0, Math.floor(((frame - start) / fps) * cps));
  return String(text).slice(0, n);
};

/** Nhấp nháy đều (con trỏ, đèn báo): true/false theo chu kỳ `period` khung. */
export const blink = (frame, period = 16) => Math.floor(frame / (period / 2)) % 2 === 0;

/** Bay vào từ một phía: dir = "left" | "right" | "up" | "down". */
export const flyIn = (frame, fps, start = 0, dir = "left", dist = 160) => {
  const s = spring({ frame: frame - start, fps, config: { damping: 14, stiffness: 140 } });
  const d = (1 - s) * dist;
  const t = { left: `translateX(${-d}px)`, right: `translateX(${d}px)`, up: `translateY(${-d}px)`, down: `translateY(${d}px)` }[dir];
  return { opacity: frame < start ? 0 : Math.min(1, s * 1.4), transform: t };
};
