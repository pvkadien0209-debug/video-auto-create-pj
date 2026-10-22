// Hand.jsx — bàn tay dùng chung (người + mascot). Vẽ ở đầu cẳng tay, trục cẳng tay hướng +y cục bộ.
// abs = góc tuyệt đối của cẳng tay → đồ vật (điện thoại, thẻ) và ngón cái được xoay ngược để luôn đứng thẳng.
import React from "react";
import { INK } from "./geom.js";

/** Thẻ nhận xét "Đúng/Sai" của người dẫn. ok=true → xanh ✓; flip 0..1 = lật thẻ (co ngang). */
export const VerdictCard = ({ ok, flip = 1, w = 196, h = 104 }) => {
  const c = ok ? "#2e8b57" : "#e5533d";
  return (
    <g transform={`scale(${Math.max(0.02, flip)} 1)`}>
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={16} fill="#fff" stroke={c} strokeWidth={7} />
      {ok ? (
        <path d={`M ${-w / 2 + 22} 2 l 14 14 l 26 -30`} fill="none" stroke={c} strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
      ) : (
        <path d={`M ${-w / 2 + 24} -14 l 28 28 M ${-w / 2 + 52} -14 l -28 28`} stroke={c} strokeWidth={9} strokeLinecap="round" />
      )}
      <text x={28} y={14} textAnchor="middle" fontFamily="'Be Vietnam Pro', sans-serif" fontWeight={800} fontSize={38} fill={c}>
        {ok ? "ĐÚNG" : "SAI"}
      </text>
    </g>
  );
};

export const Hand = ({ x, y, type = "open", abs = 0, color, k = 1, card }) => {
  const up = `rotate(${-abs} ${x} ${y})`; // xoay ngược → đứng thẳng theo màn hình
  const fist = <circle cx={x} cy={y} r={17 * k} fill={color} />;
  switch (type) {
    case "stop": // xoè bàn tay, lòng bàn tay hướng ra người xem
      return (
        <g>
          {[-1, -0.35, 0.35, 1].map((t, i) => (
            <rect key={i} x={x + t * 11 * k - 4.5 * k} y={y + 4 * k} width={9 * k} height={(i === 0 || i === 3 ? 26 : 32) * k} rx={4.5 * k} fill={color} />
          ))}
          <ellipse cx={x} cy={y + 2 * k} rx={18 * k} ry={17 * k} fill={color} />
          <rect x={x + 12 * k} y={y - 14 * k} width={9 * k} height={22 * k} rx={4.5 * k} fill={color} transform={`rotate(-35 ${x + 16 * k} ${y})`} />
        </g>
      );
    case "point": // nắm tay + ngón trỏ duỗi theo trục cẳng tay
      return (
        <g>
          <rect x={x - 5 * k} y={y} width={10 * k} height={40 * k} rx={5 * k} fill={color} />
          {fist}
        </g>
      );
    case "thumb": // ngón cái luôn chỉ lên trời
      return (
        <g>
          {fist}
          <g transform={up}>
            <rect x={x - 5.5 * k} y={y - 36 * k} width={11 * k} height={30 * k} rx={5.5 * k} fill={color} />
          </g>
        </g>
      );
    case "phone":
      return (
        <g>
          <g transform={up}>
            <rect x={x - 19 * k} y={y - 66 * k} width={38 * k} height={66 * k} rx={7 * k} fill={INK} />
            <rect x={x - 14 * k} y={y - 60 * k} width={28 * k} height={46 * k} rx={3 * k} fill="#7fb2ff" />
          </g>
          {fist}
        </g>
      );
    case "idcard": // thẻ căn cước nhỏ
      return (
        <g>
          <g transform={up}>
            <rect x={x - 6 * k} y={y - 46 * k} width={62 * k} height={40 * k} rx={5 * k} fill="#dfeefa" stroke="#7a9cc0" strokeWidth={2.5 * k} />
            <rect x={x} y={y - 40 * k} width={14 * k} height={18 * k} rx={2} fill="#9fb7cf" />
            <path d={`M ${x + 20 * k} ${y - 36 * k} h ${28 * k} M ${x + 20 * k} ${y - 27 * k} h ${22 * k} M ${x + 4 * k} ${y - 15 * k} h ${44 * k}`} stroke="#7a9cc0" strokeWidth={2.5 * k} />
          </g>
          {fist}
        </g>
      );
    case "card": // thẻ Đúng/Sai cầm phía trên bàn tay
      return (
        <g>
          <g transform={up}>
            <path d={`M ${x} ${y - 6 * k} L ${x + 30 * k} ${y - 42 * k}`} stroke="#c9ced8" strokeWidth={10 * k} strokeLinecap="round" />
            <g transform={`translate(${x + 46 * k} ${y - 92 * k}) scale(${k})`}>{card}</g>
          </g>
          {fist}
        </g>
      );
    default:
      return fist;
  }
};
