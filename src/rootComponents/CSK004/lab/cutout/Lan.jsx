// Lan.jsx — nhân vật cắt giấy (cutout) tự vẽ bằng SVG, tách lớp: đầu, thân, 2 tay (cánh + cẳng), 2 chân (đùi + ống), mắt, miệng.
// Toạ độ cục bộ: gốc (0,0) = giữa hai bàn chân, trục y âm là đi lên. Mỗi khớp xoay bằng rotate(góc, x_khớp, y_khớp).
// Cây khớp (cha → con): thân → đầu (cổ) ; thân → cánh tay (vai) → cẳng tay (khuỷu) ; hông → đùi → ống chân (gối).
import React from "react";

const C = {
  skin: "#f3c9a8", skinD: "#e0a982", hair: "#2b1d16", shirt: "#0f6e5a", shirtD: "#0b5546",
  apron: "#ffffff", apronLine: "#d6dde6", pants: "#2b3650", shoe: "#172033", cheek: "#f59a8b", mouth: "#9b2c2c", ink: "#172033",
};
const HIP_Y = -250, LEG = 120, SHO_Y = -410, NECK_Y = -440;
const rad = (d) => (d * Math.PI) / 180;

/** Một chân: đùi xoay ở hông, ống chân xoay ở gối (con của đùi). s = -1 trái / +1 phải. */
const Leg = ({ s, hip, knee, shade }) => {
  const x = s * 22;
  return (
    <g transform={`rotate(${hip} ${x} ${HIP_Y})`}>
      <rect x={x - 18} y={HIP_Y - 6} width={36} height={LEG + 12} rx={18} fill={shade ? "#222b40" : C.pants} />
      <g transform={`rotate(${knee} ${x} ${HIP_Y + LEG})`}>
        <rect x={x - 16} y={HIP_Y + LEG - 8} width={32} height={LEG + 4} rx={16} fill={shade ? "#222b40" : C.pants} />
        <ellipse cx={x + 12} cy={-10} rx={30} ry={14} fill={C.shoe} />
      </g>
    </g>
  );
};

/** Một tay: cánh tay xoay ở vai, cẳng tay xoay ở khuỷu. */
const Arm = ({ s, shoulder, elbow }) => {
  const x = s * 60, ey = SHO_Y + 100;
  return (
    <g transform={`rotate(${shoulder} ${x} ${SHO_Y})`}>
      <rect x={x - 15} y={SHO_Y - 8} width={30} height={108} rx={15} fill={C.skin} />
      <rect x={x - 17} y={SHO_Y - 12} width={34} height={52} rx={16} fill={C.shirt} />
      <g transform={`rotate(${elbow} ${x} ${ey})`}>
        <rect x={x - 13} y={ey - 6} width={26} height={96} rx={13} fill={C.skin} />
        <circle cx={x} cy={ey + 94} r={18} fill={C.skin} />
      </g>
    </g>
  );
};

/** Mặt: mắt (theo độ mở), lông mày (nâng = lo lắng), miệng 3 hình (0 khép, 1 hé, 2 mở to). */
const Face = ({ eyeOpen, mouth, brow }) => (
  <g>
    {[-1, 1].map((s) => (
      <g key={s}>
        {eyeOpen > 0.12 ? (
          <ellipse cx={s * 25} cy={-520} rx={8.5} ry={12 * eyeOpen} fill={C.ink} />
        ) : (
          <path d={`M ${s * 25 - 10} -519 Q ${s * 25} -513 ${s * 25 + 10} -519`} stroke={C.ink} strokeWidth={4} fill="none" strokeLinecap="round" />
        )}
        {/* lông mày: brow > 0 → đầu trong nâng lên (lo, hỏi) */}
        <path d={`M ${s * 13} ${-548 - brow * 7} L ${s * 37} ${-545 + brow * 2}`} stroke={C.hair} strokeWidth={5} strokeLinecap="round" />
        <circle cx={s * 42} cy={-494} r={11} fill={C.cheek} opacity={0.45} />
      </g>
    ))}
    {mouth === 0 && <path d="M -14 -489 Q 0 -480 14 -489" stroke={C.mouth} strokeWidth={4.5} fill="none" strokeLinecap="round" />}
    {mouth === 1 && <ellipse cx={0} cy={-486} rx={11} ry={6.5} fill={C.mouth} />}
    {mouth === 2 && (
      <g>
        <ellipse cx={0} cy={-484} rx={13} ry={12} fill={C.mouth} />
        <ellipse cx={0} cy={-478} rx={8} ry={5} fill="#e57373" />
      </g>
    )}
  </g>
);

/**
 * <Lan pose={...} />  — mọi thứ điều khiển bằng số:
 *  walk: pha bước (radian), walkAmt: 0..1 (0 = đứng), breath: -1..1, lean: độ nghiêng thân,
 *  nod: độ gật đầu, wave: { shoulder, elbow } tay phải, eyeOpen 0..1, mouth 0|1|2, brow 0..1, pony: góc tóc đuôi ngựa.
 */
export const Lan = ({ pose }) => {
  const { walk = 0, walkAmt = 0, breath = 0, lean = 0, nod = 0, wave, eyeOpen = 1, mouth = 0, brow = 0, pony = 0 } = pose;
  const legA = Math.sin(walk) * 28 * walkAmt; // góc đùi
  const kneeL = Math.max(0, Math.cos(walk)) * 38 * walkAmt; // chân đang đưa tới thì gập gối
  const kneeR = Math.max(0, -Math.cos(walk)) * 38 * walkAmt;
  // Hạ thân khi hai chân dạng ra để bàn chân chạm đất (tự có nhún lên–xuống đúng chu kỳ bước)
  const drop = (LEG * 2) * (1 - Math.cos(rad(legA))) - 4 * Math.abs(Math.cos(walk)) * walkAmt;
  const armSwing = legA * 0.75; // tay đánh ngược chân
  const rShoulder = wave ? wave.shoulder : -6 + armSwing;
  const rElbow = wave ? wave.elbow : -4 - Math.abs(armSwing) * 0.3;
  const sy = 1 + breath * 0.012; // thở: thân giãn nhẹ

  return (
    <svg viewBox="-200 -700 400 720" width={400} height={720} style={{ overflow: "visible", display: "block" }}>
      {/* bóng dưới chân: không nhún theo thân */}
      <ellipse cx={0} cy={0} rx={95 - walkAmt * 10} ry={14} fill="#000" opacity={0.13} />
      <g transform={`translate(0 ${drop}) rotate(${lean} 0 ${HIP_Y})`}>
        {/* lớp sau: chân phải, tay trái */}
        <Leg s={1} hip={legA} knee={kneeR} shade />
        <Arm s={-1} shoulder={8 - armSwing} elbow={4 + Math.abs(armSwing) * 0.3} />
        <Leg s={-1} hip={-legA} knee={kneeL} />
        {/* thân (thở = giãn quanh hông) */}
        <g transform={`translate(0 ${HIP_Y}) scale(1 ${sy}) translate(0 ${-HIP_Y})`}>
          <path d={`M -50 ${HIP_Y + 8} L -62 ${SHO_Y + 4} Q 0 ${SHO_Y - 26} 62 ${SHO_Y + 4} L 50 ${HIP_Y + 8} Q 0 ${HIP_Y + 22} -50 ${HIP_Y + 8} Z`} fill={C.shirt} />
          <path d={`M -42 -330 L 42 -330 L 46 ${HIP_Y + 12} Q 0 ${HIP_Y + 24} -46 ${HIP_Y + 12} Z`} fill={C.apron} />
          <path d={`M -30 -330 L -44 ${SHO_Y + 2} M 30 -330 L 44 ${SHO_Y + 2}`} stroke={C.apron} strokeWidth={8} />
          <rect x={-20} y={-300} width={40} height={26} rx={5} fill="none" stroke={C.apronLine} strokeWidth={4} />
          {/* đầu: xoay ở cổ (gật) */}
          <g transform={`rotate(${nod * 0.4} 0 ${NECK_Y}) translate(0 ${nod * 1.1})`}>
            <rect x={-13} y={NECK_Y - 22} width={26} height={34} rx={8} fill={C.skinD} />
            {/* tóc đuôi ngựa: con của đầu, đung đưa trễ (follow-through) */}
            <g transform={`rotate(${pony} 52 -585)`}>
              <path d="M 52 -585 Q 108 -560 92 -470 Q 86 -440 70 -452 Q 84 -520 40 -570 Z" fill={C.hair} />
            </g>
            <circle cx={0} cy={-524} r={76} fill={C.hair} />
            <circle cx={-69} cy={-512} r={13} fill={C.skin} />
            <circle cx={69} cy={-512} r={13} fill={C.skin} />
            <ellipse cx={0} cy={-510} rx={66} ry={70} fill={C.skin} />
            <path d="M -72 -530 Q -64 -606 0 -604 Q 64 -606 72 -530 Q 40 -572 -6 -560 Q -40 -552 -72 -530 Z" fill={C.hair} />
            <circle cx={58} cy={-588} r={12} fill="#f58fa8" />
            <Face eyeOpen={eyeOpen} mouth={mouth} brow={brow} />
          </g>
        </g>
        {/* lớp trước: tay phải (vẫy) */}
        <Arm s={1} shoulder={rShoulder} elbow={rElbow} />
      </g>
    </svg>
  );
};
