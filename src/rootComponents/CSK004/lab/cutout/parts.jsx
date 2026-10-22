// parts.jsx — LAB cutout: các thành phần chuyển động dùng lại (đung đưa, chớp mắt, nhún, parallax, trôi).
// Mọi chuyển động chỉ tính từ số khung (frame) → render lại luôn ra cùng một hình (tất định).
import React from "react";
import { AbsoluteFill, random, useCurrentFrame } from "remotion";

// ---------- Nhiễu mượt 1 chiều (value noise) ----------
// Thay cho @remotion/noise (chưa cài): nối các số ngẫu nhiên có hạt giống bằng đường cong mượt.
const smooth = (t) => t * t * (3 - 2 * t);
export const noise1 = (seed, x) => {
  const i = Math.floor(x), f = x - i;
  const a = random(`${seed}-${i}`) * 2 - 1, b = random(`${seed}-${i + 1}`) * 2 - 1;
  return a + (b - a) * smooth(f); // trong khoảng [-1, 1]
};

/** Góc gió: sóng sin đều + nhiễu chậm (gió lúc mạnh lúc nhẹ). */
export const windAngle = (frame, { amp = 6, period = 90, gust = 3, seed = "gio", phase = 0 } = {}) =>
  amp * Math.sin((frame / period) * Math.PI * 2 + phase) + gust * noise1(seed, frame / 45);

/** <Sway>: đung đưa quanh một điểm (pivot, ví dụ "50% 100%" = gốc cây; "50% 0%" = cuống lá treo). */
export const Sway = ({ pivot = "50% 100%", amp = 4, period = 100, gust = 2, seed = "sway", phase = 0, style, children }) => {
  const frame = useCurrentFrame();
  const a = windAngle(frame, { amp, period, gust, seed, phase });
  return <div style={{ ...style, transformOrigin: pivot, transform: `rotate(${a}deg)` }}>{children}</div>;
};

/** Độ mở mắt 0..1 theo lịch chớp ngẫu nhiên có hạt giống: mỗi 1,5–4 giây chớp 1 lần, mỗi lần ~6 khung. */
export const eyeOpenAt = (frame, seed = "mat", { start = 12, min = 45, spread = 75 } = {}) => {
  let t = start, i = 0;
  while (t + 7 < frame) t += min + random(`${seed}-${i++}`) * spread; // tìm lần chớp gần nhất
  const d = frame - t;
  if (d < 0 || d > 6) return 1;
  return [0.6, 0.15, 0, 0, 0.35, 0.75, 1][d]; // nhắm nhanh, mở chậm hơn
};

/** <Blink>: render-prop — con nhận độ mở mắt. Ví dụ <Blink seed="lan">{(o) => <Eyes open={o} />}</Blink> */
export const Blink = ({ seed = "mat", children }) => children(eyeOpenAt(useCurrentFrame(), seed));

/** <Bob>: nhún / thở — lên xuống theo sin, có nén–giãn nhẹ (squash & stretch) quanh đáy. */
export const Bob = ({ amp = 4, period = 80, squash = 0.012, phase = 0, style, children }) => {
  const frame = useCurrentFrame();
  const s = Math.sin((frame / period) * Math.PI * 2 + phase);
  return (
    <div style={{ ...style, transformOrigin: "50% 100%", transform: `translateY(${-s * amp}px) scale(${1 - s * squash}, ${1 + s * squash})` }}>
      {children}
    </div>
  );
};

/** <Parallax>: một lớp nền. depth 0 = đứng yên (trời), 1 = đi cùng máy quay (mặt đất, nhân vật). */
export const Parallax = ({ depth = 1, camX = 0, camY = 0, children }) => (
  <AbsoluteFill style={{ transform: `translate(${camX * depth}px, ${camY * depth}px)` }}>{children}</AbsoluteFill>
);

/** <Drift>: trôi ngang đều rồi quay vòng (mây). speed px/khung, span = bề rộng vòng lặp. */
export const Drift = ({ x0 = 0, y = 0, speed = 0.6, span = 2400, bobAmp = 4, seed = "may", children }) => {
  const frame = useCurrentFrame();
  const x = ((((x0 + 300 + speed * frame) % span) + span) % span) - 300;
  const dy = noise1(seed, frame / 70) * bobAmp;
  return <div style={{ position: "absolute", left: x, top: y + dy }}>{children}</div>;
};
