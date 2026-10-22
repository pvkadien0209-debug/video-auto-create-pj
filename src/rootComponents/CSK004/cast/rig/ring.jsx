// ring.jsx — CHI TIẾT CHỮ KÝ "Vòng Đét": vòng vàng hở một khe ở hướng 1 giờ (300°).
// Hở = đang học dở; khép đủ 360° = xong. Dùng chung cho: huy hiệu ngực mọi nhân vật, đuôi mascot,
// quả bóng cuộn của mascot, vòng khoanh chỗ cần chú ý, chuyển cảnh và khung kết.
import React from "react";
import { RING, NIGHT, arcPath } from "./geom.js";

export const GAP = 60; // khe hở: từ 12 giờ tới 2 giờ (giữa khe = 1 giờ)

/** <DetRing>: vòng tại (cx,cy). sweep = số độ đã tô (300 = dáng chữ ký; 360 = khép kín). */
export const DetRing = ({ cx = 0, cy = 0, r = 20, w = 8, sweep = 300, color = RING, track, opacity = 1 }) => {
  const s = Math.max(0, Math.min(360, sweep));
  return (
    <g opacity={opacity}>
      {track && <circle cx={cx} cy={cy} r={r} fill="none" stroke={track} strokeWidth={w} />}
      {s >= 359.5 ? (
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth={w} />
      ) : (
        s > 0.5 && <path d={arcPath(cx, cy, r, GAP, GAP + s)} fill="none" stroke={color} strokeWidth={w} strokeLinecap="round" />
      )}
    </g>
  );
};

/** Huy hiệu ngực: đĩa xanh đêm + Vòng Đét. Luôn ở NGỰC TRÁI nhân vật (bên phải người xem). */
export const Badge = ({ x, y, k = 1 }) => (
  <g>
    <circle cx={x} cy={y} r={15 * k} fill={NIGHT} />
    <DetRing cx={x} cy={y} r={8.5 * k} w={4.6 * k} />
  </g>
);
