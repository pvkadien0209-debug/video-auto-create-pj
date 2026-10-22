// styles.jsx — thư viện "áo da": kiểu tóc, kiểu áo, phụ kiện. Nhân vật chỉ CHỌN tên kiểu + màu (tệp skins/*.js).
// Thêm kiểu mới = thêm một mục vào bảng dưới đây; khung xương không đổi.
import React from "react";
import { INK, shade } from "./geom.js";

// ---------- TÓC (toạ độ đầu: tâm 0,0; mặt là elip rx66 ry70 tâm 0,14) ----------
export const HAIR = {
  ponytail: {
    back: (h, p) => (
      <g>
        <g transform={`rotate(${p.hair || 0} 52 -61)`}>
          <path d="M 52 -61 Q 108 -36 92 54 Q 86 84 70 72 Q 84 4 40 -46 Z" fill={h.color} />
        </g>
        <circle r={76} fill={h.color} />
      </g>
    ),
    front: (h) => (
      <g>
        <path d="M -72 -6 Q -64 -82 0 -80 Q 64 -82 72 -6 Q 40 -48 -6 -36 Q -40 -28 -72 -6 Z" fill={h.color} />
        <circle cx={58} cy={-64} r={12} fill={h.clip || "#f58fa8"} />
      </g>
    ),
  },
  spiky: {
    back: (h) => <circle cy={-2} r={77} fill={h.color} />,
    front: (h) => (
      <path
        d="M -75 0 L -73 -42 L -62 -58 L -62 -84 L -38 -76 L -28 -102 L -4 -86 L 14 -108 L 28 -84 L 54 -96 L 54 -68 L 74 -54 L 75 0 Q 64 -34 38 -40 L 20 -30 L 6 -44 L -14 -32 Q -54 -44 -75 0 Z"
        fill={h.color}
      />
    ),
  },
  bob: {
    hideEars: true,
    back: (h) => <path d="M -88 58 L -88 -4 Q -88 -90 0 -90 Q 88 -90 88 -4 L 88 58 Q 72 66 60 54 L -60 54 Q -72 66 -88 58 Z" fill={h.color} />,
    front: (h) => <path d="M -76 0 Q -76 -88 0 -88 Q 76 -88 76 0 L 64 -36 L -64 -36 Z" fill={h.color} />,
  },
  bun: {
    back: (h) => (
      <g>
        <rect x={-4} y={-124} width={7} height={74} rx={3} fill="#3b6fb6" transform="rotate(62 0 -88)" />
        <circle cy={-88} r={32} fill={h.color} />
        <circle r={76} fill={h.color} />
      </g>
    ),
    front: (h) => <path d="M -74 2 Q -72 -84 0 -82 Q 72 -84 74 2 Q 60 -50 22 -52 Q -8 -50 -24 -38 Q -50 -36 -74 2 Z" fill={h.color} />,
  },
  // #110 Bé Bin: tóc ngắn lởm chởm, một chỏm dựng trên đỉnh (extra = phần tóc cao hơn đỉnh đầu, để tính chiều cao)
  kid: {
    extra: 30,
    back: (h) => <circle cy={-2} r={75} fill={h.color} />,
    front: (h) => (
      <g fill={h.color}>
        <path d="M -73 -4 Q -72 -86 0 -86 Q 72 -86 73 -4 Q 62 -40 44 -44 L 34 -30 L 22 -48 L 4 -34 L -12 -50 L -28 -34 L -40 -46 Q -62 -36 -73 -4 Z" />
        <path d="M -2 -82 Q 4 -116 30 -110 Q 14 -104 14 -82 Z" />
      </g>
    ),
  },
  // #110 Bà Tư: tóc bạc chải ngược, rẽ ngôi giữa, búi nhỏ thấp phía sau đỉnh (khác búi cao cài bút của cô Hoa)
  granbun: {
    extra: 22,
    back: (h) => (
      <g>
        <circle cx={0} cy={-78} r={27} fill={h.color} />
        <path d="M -24 -66 Q 0 -58 24 -66" stroke={shade(h.color, 0.82)} strokeWidth={4} fill="none" strokeLinecap="round" />
        <circle r={76} fill={h.color} />
      </g>
    ),
    front: (h) => (
      <g>
        <path d="M -75 6 Q -76 -84 0 -82 Q 76 -84 75 6 Q 68 -42 38 -54 Q 14 -60 0 -64 Q -14 -60 -38 -54 Q -68 -42 -75 6 Z" fill={h.color} />
        <path d="M 0 -64 L 0 -80 M -30 -56 Q -54 -60 -66 -30 M 30 -56 Q 54 -60 66 -30" stroke={shade(h.color, 0.82)} strokeWidth={3.5} fill="none" strokeLinecap="round" />
      </g>
    ),
  },
  // #110 Sam: tóc ngắn (pixie) mái lệch chải sang phải, vành tai lộ
  pixie: {
    extra: 14,
    back: (h) => <path d="M -76 30 Q -82 -88 0 -88 Q 82 -88 76 30 Q 70 0 66 -10 L -66 -10 Q -70 0 -76 30 Z" fill={h.color} />,
    front: (h) => (
      <g>
        <path d="M -74 -2 Q -80 -92 4 -90 Q 80 -88 75 -2 Q 72 -26 64 -34 Q 26 -18 -18 -44 Q -44 -54 -60 -30 Q -68 -18 -74 -2 Z" fill={h.color} />
        <path d="M -40 -70 Q 4 -76 50 -50" stroke={shade(h.color, 1.25)} strokeWidth={5} fill="none" strokeLinecap="round" />
      </g>
    ),
  },
  short: {
    back: (h) => <circle cy={2} r={74} fill={h.color} />,
    front: (h) => <path d="M -71 -12 Q -66 -80 0 -80 Q 66 -80 71 -12 Q 62 -48 30 -58 Q 0 -64 -30 -58 Q -62 -48 -71 -12 Z" fill={h.color} />,
  },
};

// ---------- ÁO (toạ độ thân: J = khớp, w = độ rộng vai/hông) ----------
const torsoPath = (J, w) =>
  `M ${-50 * w} ${J.hip + 8} L ${-62 * w} ${J.sho + 4} Q 0 ${J.sho - 26} ${62 * w} ${J.sho + 4} L ${50 * w} ${J.hip + 8} Q 0 ${J.hip + 22} ${-50 * w} ${J.hip + 8} Z`;

export const TOPS = {
  apron: (J, w, t) => (
    <g>
      <path d={torsoPath(J, w)} fill={t.color} />
      <path d={`M ${-42 * w} ${J.sho + 80} L ${42 * w} ${J.sho + 80} L ${46 * w} ${J.hip + 12} Q 0 ${J.hip + 24} ${-46 * w} ${J.hip + 12} Z`} fill={t.apron || "#fff"} />
      <path d={`M ${-30 * w} ${J.sho + 80} L ${-44 * w} ${J.sho + 2} M ${30 * w} ${J.sho + 80} L ${44 * w} ${J.sho + 2}`} stroke={t.apron || "#fff"} strokeWidth={8} />
      <rect x={-20} y={J.sho + 110} width={40} height={26} rx={5} fill="none" stroke="#d6dde6" strokeWidth={4} />
    </g>
  ),
  hoodie: (J, w, t) => {
    const d = shade(t.color, 0.78);
    return (
      <g>
        <path d={torsoPath(J, w)} fill={t.color} />
        <path d={`M -46 ${J.sho - 8} Q 0 ${J.sho + 34} 46 ${J.sho - 8} Q 0 ${J.sho + 12} -46 ${J.sho - 8} Z`} fill={d} />
        <path d={`M -12 ${J.sho + 8} L -14 ${J.sho + 56} M 12 ${J.sho + 8} L 14 ${J.sho + 56}`} stroke="#eef2f7" strokeWidth={4} strokeLinecap="round" />
        <path d={`M ${-34 * w} ${J.hip - 64} L ${34 * w} ${J.hip - 64} L ${44 * w} ${J.hip - 6} L ${-44 * w} ${J.hip - 6} Z`} fill={d} />
        <rect x={-52 * w} y={J.hip - 4} width={104 * w} height={14} rx={7} fill={d} />
      </g>
    );
  },
  blazer: (J, w, t) => {
    const d = shade(t.color, 0.75);
    return (
      <g>
        <path d={torsoPath(J, w)} fill={t.color} />
        <path d={`M -28 ${J.sho - 12} L 28 ${J.sho - 12} L 0 ${J.sho + 96} Z`} fill={t.inner || "#fff"} />
        <path d={`M -28 ${J.sho - 12} L -4 ${J.sho + 96} L -40 ${J.sho + 34} Z M 28 ${J.sho - 12} L 4 ${J.sho + 96} L 40 ${J.sho + 34} Z`} fill={d} />
        <circle cx={0} cy={J.sho + 116} r={5} fill={d} />
        <circle cx={0} cy={J.sho + 140} r={5} fill={d} />
      </g>
    );
  },
  blouse: (J, w, t) => (
    <g>
      <path d={torsoPath(J, w)} fill={t.color} />
      <ellipse cx={-15} cy={J.sho - 2} rx={19} ry={12} fill={t.collar || "#fff"} transform={`rotate(18 -15 ${J.sho - 2})`} />
      <ellipse cx={15} cy={J.sho - 2} rx={19} ry={12} fill={t.collar || "#fff"} transform={`rotate(-18 15 ${J.sho - 2})`} />
      {[40, 72, 104].map((y) => <circle key={y} cx={0} cy={J.sho + y} r={4.5} fill={t.collar || "#fff"} />)}
    </g>
  ),
  // #110 Bé Bin: áo phông cổ tròn, một sọc ngang trên ngực
  tee: (J, w, t) => (
    <g>
      <path d={torsoPath(J, w)} fill={t.color} />
      <rect x={-56 * w} y={J.sho + 74} width={112 * w} height={20} fill={t.stripe || "#fff"} opacity={0.9} />
      <path d={`M -26 ${J.sho - 12} Q 0 ${J.sho + 16} 26 ${J.sho - 12}`} stroke={shade(t.color, 0.78)} strokeWidth={7} fill="none" strokeLinecap="round" />
    </g>
  ),
  // #110 Bà Tư: áo bà ba — vạt dài quá hông, xẻ tà hai bên, cổ tròn, hàng nút giữa, hai túi dưới
  baba: (J, w, t) => {
    const d = shade(t.color, 0.78);
    return (
      <g>
        <path d={`M ${-56 * w} ${J.hip + 46} L ${-62 * w} ${J.sho + 4} Q 0 ${J.sho - 26} ${62 * w} ${J.sho + 4} L ${56 * w} ${J.hip + 46} Q 0 ${J.hip + 54} ${-56 * w} ${J.hip + 46} Z`} fill={t.color} />
        <path d={`M ${-56 * w} ${J.hip + 46} L ${-54 * w} ${J.hip + 6} M ${56 * w} ${J.hip + 46} L ${54 * w} ${J.hip + 6}`} stroke={d} strokeWidth={5} strokeLinecap="round" />
        <path d={`M -24 ${J.sho - 12} Q 0 ${J.sho + 14} 24 ${J.sho - 12}`} stroke={d} strokeWidth={6} fill="none" strokeLinecap="round" />
        {[30, 62, 94, 126].map((y) => <circle key={y} cx={0} cy={J.sho + y} r={4} fill={shade(t.color, 1.5)} />)}
        <path d={`M ${-44 * w} ${J.hip - 14} h ${30 * w} v 30 h ${-30 * w} Z M ${14 * w} ${J.hip - 14} h ${30 * w} v 30 h ${-30 * w} Z`} fill="none" stroke={d} strokeWidth={4} strokeLinejoin="round" />
      </g>
    );
  },
  // #110 Sam: áo khoác mở + sơ mi trắng có cổ bẻ
  coat: (J, w, t) => {
    const d = shade(t.color, 0.78);
    return (
      <g>
        <path d={`M ${-52 * w} ${J.hip + 22} L ${-62 * w} ${J.sho + 4} Q 0 ${J.sho - 26} ${62 * w} ${J.sho + 4} L ${52 * w} ${J.hip + 22} Q 0 ${J.hip + 32} ${-52 * w} ${J.hip + 22} Z`} fill={t.color} />
        <path d={`M -30 ${J.sho - 12} L 30 ${J.sho - 12} L 24 ${J.hip + 26} L -24 ${J.hip + 26} Z`} fill={t.inner || "#fff"} />
        {[50, 84, 118].map((y) => <circle key={y} cx={0} cy={J.sho + y} r={3.5} fill="#c9d3e0" />)}
        {[-1, 1].map((s) => (
          <g key={s}>
            <path d={`M ${s * 30} ${J.sho - 12} L ${s * 22} ${J.sho + 70} L ${s * 26} ${J.hip + 26} L ${s * 42} ${J.hip + 24} L ${s * 46} ${J.sho + 30} Z`} fill={d} />
            <path d={`M ${s * 26} ${J.sho - 16} L ${s * 4} ${J.sho + 10} L ${s * 30} ${J.sho + 16} Z`} fill="#fff" stroke="#c9d3e0" strokeWidth={2.5} strokeLinejoin="round" />
          </g>
        ))}
        <path d={`M ${-46 * w} ${J.hip - 30} l 18 0 M ${28 * w} ${J.hip - 30} l 18 0`} stroke={d} strokeWidth={5} strokeLinecap="round" />
      </g>
    );
  },
  jacket: (J, w, t) => {
    const d = shade(t.color, 0.75);
    return (
      <g>
        <path d={torsoPath(J, w)} fill={t.color} />
        <path d={`M -32 ${J.sho - 14} Q 0 ${J.sho + 14} 32 ${J.sho - 14} L 30 ${J.sho - 2} Q 0 ${J.sho + 26} -30 ${J.sho - 2} Z`} fill={d} />
        <path d={`M 0 ${J.sho + 10} L 0 ${J.hip + 14}`} stroke={shade(t.color, 1.45)} strokeWidth={5} />
        <path d={`M ${-40 * w} ${J.hip - 46} l 22 0 M ${18 * w} ${J.hip - 46} l 22 0`} stroke={d} strokeWidth={5} strokeLinecap="round" />
      </g>
    );
  },
};

// ---------- PHỤ KIỆN (layer: "body" vẽ trên áo, "head" vẽ trên mặt, toạ độ đầu) ----------
export const ACC = {
  glasses: {
    layer: "head",
    draw: (dx) => (
      <g fill="none" stroke={INK} strokeWidth={4}>
        <rect x={dx - 44} y={-10} width={36} height={28} rx={9} />
        <rect x={dx + 8} y={-10} width={36} height={28} rx={9} />
        <path d={`M ${dx - 8} 0 Q ${dx} -5 ${dx + 8} 0 M ${dx - 44} -2 L -66 -6 M ${dx + 44} -2 L 66 -6`} />
      </g>
    ),
  },
  cap: {
    layer: "head",
    draw: (dx, c) => (
      <g>
        <path d="M -74 -18 Q -76 -92 0 -94 Q 76 -92 74 -18 Q 0 -34 -74 -18 Z" fill={c.hair.cap || "#2b3650"} />
        <path d="M -70 -22 Q -120 -26 -128 -8 Q -96 -4 -62 -12 Z" fill={c.hair.cap || "#2b3650"} />
        <circle cx={0} cy={-92} r={6} fill={c.hair.cap || "#2b3650"} />
        <rect x={-8} y={-62} width={16} height={6} rx={3} fill="#fff" opacity={0.85} />
      </g>
    ),
  },
  earrings: { layer: "head", draw: () => [-1, 1].map((s) => <circle key={s} cx={s * 69} cy={30} r={5} fill="#fff" stroke="#d6dde6" strokeWidth={2} />) },
  moustache: {
    layer: "head",
    draw: (dx, c) => <path d={`M ${dx - 20} 30 Q ${dx - 10} 18 ${dx} 25 Q ${dx + 10} 18 ${dx + 20} 30 Q ${dx} 26 ${dx - 20} 30 Z`} fill={c.hair.color} />,
  },
  lanyard: {
    layer: "body",
    draw: (J) => (
      <g>
        <path d={`M -22 ${J.sho - 4} L -10 ${J.sho + 100} M 22 ${J.sho - 4} L 10 ${J.sho + 100}`} stroke="#2f5fb3" strokeWidth={6} />
        <rect x={-20} y={J.sho + 98} width={40} height={52} rx={5} fill="#fff" stroke="#c9d3e0" strokeWidth={3} />
        <rect x={-20} y={J.sho + 98} width={40} height={12} rx={4} fill="#2f5fb3" />
        <circle cx={0} cy={J.sho + 126} r={8} fill="#c9d3e0" />
      </g>
    ),
  },
  bag: {
    layer: "body",
    draw: (J, w) => (
      <g>
        <path d={`M ${-50 * w} ${J.sho + 2} L ${44 * w} ${J.hip - 30}`} stroke="#2a2f3a" strokeWidth={10} strokeLinecap="round" />
        <rect x={30 * w} y={J.hip - 44} width={40} height={34} rx={8} fill="#2a2f3a" />
      </g>
    ),
  },
  // #110 Bé Bin: ba lô nhỏ — thân ba lô sau lưng (back, vẽ trước mọi thứ), quai đeo trước ngực (body)
  backpack: {
    layer: "body",
    back: (J, w) => (
      <g>
        <rect x={-60 * w} y={J.sho - 30} width={120 * w} height={150} rx={28} fill="#2f8f6f" />
        <path d={`M -16 ${J.sho - 30} Q 0 ${J.sho - 52} 16 ${J.sho - 30}`} stroke="#246f56" strokeWidth={7} fill="none" />
      </g>
    ),
    draw: (J, w) => (
      <g>
        {[-1, 1].map((s) => <rect key={s} x={s * 46 * w - 7} y={J.sho - 6} width={14} height={118} rx={6} fill="#246f56" />)}
      </g>
    ),
  },
  // #110 Bà Tư: kính lão gọng tròn mảnh, đeo thấp trên sống mũi
  readers: {
    layer: "head",
    draw: (dx) => (
      <g fill="none" stroke="#9a7a3a" strokeWidth={3.5}>
        <circle cx={dx - 25} cy={10} r={17} fill="#fff" fillOpacity={0.18} />
        <circle cx={dx + 25} cy={10} r={17} fill="#fff" fillOpacity={0.18} />
        <path d={`M ${dx - 8} 8 Q ${dx} 3 ${dx + 8} 8 M ${dx - 42} 6 L -66 0 M ${dx + 42} 6 L 66 0`} />
      </g>
    ),
  },
  // #110 nếp nhăn người già: chân chim, rãnh má, một nếp trán (màu da sẫm, mảnh)
  wrinkles: {
    layer: "head",
    draw: (dx, c) => (
      <g stroke={shade(c.skin, 0.74)} strokeWidth={3} fill="none" strokeLinecap="round">
        <path d={`M ${dx - 52} -2 l -8 -4 M ${dx - 52} 6 l -9 2 M ${dx + 52} -2 l 8 -4 M ${dx + 52} 6 l 9 2`} />
        <path d={`M ${dx - 22} 22 Q ${dx - 28} 32 ${dx - 24} 42 M ${dx + 22} 22 Q ${dx + 28} 32 ${dx + 24} 42`} />
        <path d={`M ${dx - 22} -40 Q ${dx} -44 ${dx + 22} -40`} />
      </g>
    ),
  },
  towel: {
    layer: "body",
    draw: (J) => (
      <g>
        <path d={`M -34 ${J.sho - 10} Q 0 ${J.sho + 16} 34 ${J.sho - 10}`} stroke="#f4f4ee" strokeWidth={16} fill="none" strokeLinecap="round" />
        {[-1, 1].map((s) => (
          <g key={s}>
            <rect x={s * 18 - 9} y={J.sho - 4} width={18} height={92} rx={6} fill="#f4f4ee" />
            <rect x={s * 18 - 9} y={J.sho + 70} width={18} height={6} fill="#3a7bd5" />
          </g>
        ))}
      </g>
    ),
  },
};
