// geom.js — hằng số + phép tính khung xương dùng chung cho mọi nhân vật.
// Quy ước góc: 0° = tay buông thẳng xuống; số dương = xoay theo chiều kim đồng hồ (trên màn hình).
export const INK = "#172033";
export const RING = "#ffd23f"; // vàng vòng tiến độ = màu chữ ký
export const NIGHT = "#1b2438";
export const UPPER = 100, FORE = 94; // người: dài cánh tay (vai→khuỷu), cẳng tay (khuỷu→tâm bàn tay)
export const rad = (d) => (d * Math.PI) / 180;
export const deg = (r) => (r * 180) / Math.PI;

/** Toạ độ các khớp theo độ dài chân. Gốc (0,0) = giữa hai bàn chân, y âm là lên. leg=120 → đúng Lan.jsx cũ. */
export const joints = (leg = 120) => {
  const hip = -(2 * leg + 10), sho = hip - 160;
  return { leg, hip, sho, neck: sho - 30, head: sho - 114, top: sho - 114 - 82 };
};

/** Vector hướng của một đoạn xương có góc a (độ). */
export const dir = (a) => [-Math.sin(rad(a)), Math.cos(rad(a))];
export const angOf = (vx, vy) => deg(Math.atan2(-vx, vy));

/** IK 2 khúc: tìm {sh, el} để bàn tay chạm điểm (tx,ty). bend = 1 hoặc -1 chọn phía gập khuỷu. */
export const ik = (sx, sy, tx, ty, l1, l2, bend = 1) => {
  const vx = tx - sx, vy = ty - sy;
  const d = Math.min(l1 + l2 - 0.01, Math.max(Math.abs(l1 - l2) + 1, Math.hypot(vx, vy)));
  const a = deg(Math.acos((l1 * l1 + d * d - l2 * l2) / (2 * l1 * d)));
  const sh = angOf(vx, vy) + bend * a;
  const [ux, uy] = dir(sh);
  const ex = sx + l1 * ux, ey = sy + l1 * uy;
  return { sh, el: angOf(tx - ex, ty - ey) - sh };
};

/** Vị trí bàn tay (toạ độ cục bộ nhân vật) từ góc vai/khuỷu. */
export const handAt = (sx, sy, sh, el, l1 = UPPER, l2 = FORE) => {
  const [ux, uy] = dir(sh), [fx, fy] = dir(sh + el);
  return [sx + l1 * ux + l2 * fx, sy + l1 * uy + l2 * fy];
};

/** Điểm trên đường tròn, góc tính theo chiều kim đồng hồ từ 12 giờ. */
export const polar = (cx, cy, r, a) => [cx + r * Math.sin(rad(a)), cy - r * Math.cos(rad(a))];
export const arcPath = (cx, cy, r, a0, a1) => {
  const [x0, y0] = polar(cx, cy, r, a0), [x1, y1] = polar(cx, cy, r, a1);
  return `M ${x0} ${y0} A ${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1} ${y1}`;
};

/** Làm tối/sáng màu hex: k < 1 tối hơn, k > 1 sáng hơn. */
export const shade = (hex, k) => {
  const n = parseInt(hex.slice(1), 16);
  const c = [n >> 16, (n >> 8) & 255, n & 255].map((v) => Math.max(0, Math.min(255, Math.round(k < 1 ? v * k : v + (255 - v) * (k - 1)))));
  return "#" + c.map((v) => v.toString(16).padStart(2, "0")).join("");
};
