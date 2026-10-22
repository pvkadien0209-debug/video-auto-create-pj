// Det.jsx — MASCOT "Đét": tê tê (pangolin) tròn, vảy đất nung, đuôi đeo Vòng Đét. Rig riêng (chibi ~2 đầu).
// Gốc (0,0) = giữa hai bàn chân. Cao ≈ 400 (≈ 0,65 người). Hai dạng: đứng (<DetG>) và cuộn tròn (<DetBall>).
import React, { useId } from "react";
import { INK, angOf, ik, polar, shade } from "../rig/geom.js";
import { Hand } from "../rig/Hand.jsx";
import { DetRing } from "../rig/ring.jsx";

export const DC = { sc: "#b8693d", scD: "#8a4524", scL: "#d4895a", cr: "#f7e4c8", crD: "#ebc89e", blush: "#f2937a", ink: INK };
const BODY = { y: -140, rx: 100, ry: 108 };
const SH = { x: 82, y: -196 }, UP = 52, FO = 48;
const HEAD_PATH = "M -92 -300 C -94 -362 -52 -382 0 -382 C 52 -382 94 -362 92 -300 C 90 -246 52 -208 0 -206 C -52 -208 -90 -246 -92 -300 Z";

/** Nét mặt mascot: 6 chuẩn + nháy mắt, nghiêm (lúc "dừng"), cười to. lid = [mí trong, mí ngoài] 0..1. */
export const EXPR_DET = {
  neutral: { eye: "round", brow: [0, 0], mouth: "smile", cheek: 0.5 },
  happy: { eye: "arc", brow: [-6, -4], mouth: "grin", cheek: 0.85 },
  surprised: { eye: "round", big: 1.14, pupil: 0.62, brow: [-15, -12], mouth: "o", cheek: 0.3 },
  worried: { eye: "round", lid: [0, 0.22], brow: [-12, 5], mouth: "wavy", cheek: 0.3, look: [0, 0.45] },
  sad: { eye: "round", lid: [0.12, 0.5], brow: [-10, 7], mouth: "frown", cheek: 0.15, look: [0, 0.7] },
  thinking: { eye: "round", brow: [0, 0], browR: [-11, -15], mouth: "side", cheek: 0.4, look: [-0.65, -0.75] },
  wink: { eye: "round", eyeR: "closed", brow: [-4, -2], mouth: "grin", cheek: 0.85 },
  stern: { eye: "round", lid: [0.42, 0.12], brow: [9, -5], mouth: "flat", cheek: 0.2 },
  laugh: { eye: "laugh", brow: [-9, -7], mouth: "laugh", cheek: 0.95 },
};
export const DET_EXPR_NAMES = ["neutral", "happy", "surprised", "worried", "sad", "thinking", "wink", "stern", "laugh"];

// Tư thế mascot (tay R = bên phải người xem). card: thẻ Đúng/Sai cầm cao bên phải đầu.
export const DET_POSES = {
  idle: {},
  wave: { R: { sh: -150, el: -20, hand: "stop" }, tilt: -4 },
  stop: { R: { sh: -75, el: -105, hand: "stop" } },
  point: { R: { sh: -92, el: 2, hand: "point" } },
  pointL: { L: { sh: 92, el: -2, hand: "point" } },
  thumb: { R: { sh: -50, el: -88, hand: "thumb" } },
  card: { R: { ...ik(SH.x, SH.y, 150, -214, UP, FO, 1), hand: "card" } },
  think: { L: { ...ik(-SH.x, SH.y, -34, -236, UP, FO, 1), hand: "open" }, tilt: -6 },
  cheer: { R: { sh: -150, el: -20, hand: "stop" }, L: { sh: 150, el: 20, hand: "stop" } },
};

const bez = (P, t) => {
  const u = 1 - t;
  return [0, 1].map((i) => u * u * u * P[0][i] + 3 * u * u * t * P[1][i] + 3 * u * t * t * P[2][i] + t * t * t * P[3][i]);
};

/** Một vảy "ngói": đỉnh phẳng, mũi nhọn hướng +y cục bộ; a = góc xoay (0 = mũi chỉ xuống). */
const Shingle = ({ x, y, s, a = 0, fill = DC.sc }) => (
  <g transform={`translate(${x} ${y}) rotate(${a})`}>
    <path d={`M ${-s} ${-s * 0.25} Q ${-s * 1.02} ${s * 0.85} 0 ${s * 1.45} Q ${s * 1.02} ${s * 0.85} ${s} ${-s * 0.25} Z`} fill={fill} stroke={DC.scD} strokeWidth={3} strokeLinejoin="round" />
    <path d={`M ${-s * 0.42} ${s * 0.3} Q 0 ${s * 0.85} ${s * 0.42} ${s * 0.3}`} stroke={DC.scL} strokeWidth={2.6} fill="none" strokeLinecap="round" opacity={0.8} />
  </g>
);

/** Đuôi: chuỗi vảy dọc đường cong (mũi vảy hướng về chóp đuôi), chóp đuôi đeo Vòng Đét. side = 1 (phải) | -1 (trái). */
const Tail = ({ side, ang, ringSweep = 300 }) => {
  const P = [[50, -72], [178, -58], [204, -206], [128, -256]].map(([x, y]) => [x * side, y]);
  const n = 12, segs = [];
  for (let i = n; i >= 0; i--) {
    const t = i / n, [x, y] = bez(P, t), [x2, y2] = bez(P, Math.min(1, t + 0.02)), [x0, y0] = bez(P, Math.max(0, t - 0.02));
    const s = 27 - 15 * t;
    segs.push(<circle key={`c${i}`} cx={x} cy={y} r={s * 0.95} fill={DC.sc} />);
    segs.push(<Shingle key={i} x={x} y={y} s={s} a={angOf(x2 - x0, y2 - y0)} />);
  }
  const [tx, ty] = bez(P, 1);
  return (
    <g transform={`rotate(${ang} ${P[0][0]} ${P[0][1]})`}>
      {segs}
      <DetRing cx={tx} cy={ty} r={20} w={9} sweep={ringSweep} />
    </g>
  );
};

const Arm = ({ s, x, sh = 0, el = 0, hand, card }) => {
  const ey = SH.y + UP;
  return (
    <g transform={`rotate(${sh} ${x} ${SH.y})`}>
      <rect x={x - 16} y={SH.y - 12} width={32} height={UP + 18} rx={16} fill={DC.sc} />
      <path d={`M ${x - 13} ${SH.y + 14} Q ${x} ${SH.y + 26} ${x + 13} ${SH.y + 14}`} stroke={DC.scD} strokeWidth={3} fill="none" />
      <g transform={`rotate(${el} ${x} ${ey})`}>
        <rect x={x - 14} y={ey - 8} width={28} height={FO + 8} rx={14} fill={DC.sc} />
        <Hand x={x} y={ey + FO} type={hand} abs={sh + el} color={DC.cr} k={0.86} card={card} />
      </g>
    </g>
  );
};

/** Một mắt mascot. kind: round | arc | closed | laugh. */
const Eye = ({ id, s, cx, cy, ex, open, far }) => {
  const kind = s === 1 && ex.eyeR ? ex.eyeR : open < 0.12 && ex.eye === "round" ? "closed" : ex.eye;
  const st = { stroke: INK, strokeWidth: 6, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };
  if (kind === "arc") return <path d={`M ${cx - 15} ${cy + 6} Q ${cx} ${cy - 16} ${cx + 15} ${cy + 6}`} {...st} />;
  if (kind === "closed") return <path d={`M ${cx - 15} ${cy} Q ${cx} ${cy + 11} ${cx + 15} ${cy}`} {...st} />;
  if (kind === "laugh") return <path d={s < 0 ? `M ${cx - 13} ${cy - 11} L ${cx + 11} ${cy} L ${cx - 13} ${cy + 11}` : `M ${cx + 13} ${cy - 11} L ${cx - 11} ${cy} L ${cx + 13} ${cy + 11}`} {...st} />;
  const big = ex.big || 1, rx = 20 * big * far, ry = 23 * big * open;
  const [lx, ly] = ex.look || [0, 0];
  const pr = 11.5 * (ex.pupil || 1) * big;
  const px = cx + lx * 7 * far, py = cy + 2 + ly * 7;
  const [li, lo] = ex.lid || [0, 0];
  const yi = cy - ry - 2 + li * ry * 2, yo = cy - ry - 2 + lo * ry * 2; // mép mí trong / ngoài
  const xi = cx - s * (rx + 3), xo = cx + s * (rx + 3);
  return (
    <g>
      <clipPath id={id}>
        <ellipse cx={cx} cy={cy} rx={rx} ry={Math.max(1, ry)} />
      </clipPath>
      <ellipse cx={cx} cy={cy} rx={rx} ry={Math.max(1, ry)} fill="#fff" />
      <g clipPath={`url(#${id})`}>
        <ellipse cx={px} cy={py} rx={pr * far} ry={pr} fill={INK} />
        <circle cx={px - 4} cy={py - 5} r={4} fill="#fff" />
        {(li > 0 || lo > 0) && (
          <g>
            <path d={`M ${xi} ${cy - ry - 4} L ${xo} ${cy - ry - 4} L ${xo} ${yo} L ${xi} ${yi} Z`} fill={DC.cr} />
            <path d={`M ${xi} ${yi} L ${xo} ${yo}`} stroke={INK} strokeWidth={5} />
          </g>
        )}
      </g>
    </g>
  );
};

const MOUTH = (m, dx) => {
  const st = { stroke: "#7a2a2a", strokeWidth: 5, fill: "none", strokeLinecap: "round" };
  const D = (top, bot, hw) => (
    <g>
      <path d={`M ${dx - hw} ${top} Q ${dx} ${top + 3} ${dx + hw} ${top} Q ${dx + hw - 2} ${bot} ${dx} ${bot} Q ${dx - hw + 2} ${bot} ${dx - hw} ${top} Z`} fill="#7a2a2a" />
      <ellipse cx={dx} cy={bot - 6} rx={hw * 0.5} ry={5} fill="#e57373" />
    </g>
  );
  switch (m) {
    case "grin": return D(-238, -216, 19);
    case "laugh": return D(-240, -210, 24);
    case "o": return <ellipse cx={dx} cy={-228} rx={9} ry={11} fill="#7a2a2a" />;
    case "wavy": return <path d={`M ${dx - 15} -230 Q ${dx - 7} -236 ${dx} -230 Q ${dx + 7} -224 ${dx + 15} -230`} {...st} />;
    case "frown": return <path d={`M ${dx - 14} -224 Q ${dx} -236 ${dx + 14} -224`} {...st} />;
    case "side": return <path d={`M ${dx - 4} -230 Q ${dx + 8} -230 ${dx + 17} -237`} {...st} />;
    case "flat": return <path d={`M ${dx - 13} -230 L ${dx + 13} -230`} {...st} />;
    case 1: return <ellipse cx={dx} cy={-230} rx={11} ry={6.5} fill="#7a2a2a" />;
    case 2: return D(-238, -218, 14);
    default: return <path d={`M ${dx - 15} -235 Q ${dx} -224 ${dx + 15} -235`} {...st} />;
  }
};

/**
 * <DetG pose face eyeOpen talk ringSweep /> — mascot đứng.
 * pose: turn -1..1 (quay 3/4 → nghiêng), nod, tilt, squash (-0.2..0.2), tail (góc đuôi), R/L tay {sh, el, hand, card}.
 */
export const DetG = ({ pose = {}, face = "neutral", eyeOpen = 1, talk = 0, ringSweep = 300 }) => {
  const uid = useId().replace(/:/g, "");
  const ex = typeof face === "string" ? EXPR_DET[face] : face;
  const { turn: t = 0, nod = 0, tilt = 0, squash = 0, tail = 0 } = pose;
  const at = Math.abs(t), dx = t * 26;
  const side = t > 0.05 ? -1 : 1;
  const R = pose.R ?? { sh: -16, el: -10 }, L = pose.L ?? { sh: 16, el: 10 };
  const shx = (s) => s * SH.x * (1 - 0.22 * at) + t * 10;
  const farArm = t > 0.05 ? -1 : t < -0.05 ? 1 : 0;
  const armEl = (s, a) => <Arm s={s} x={shx(s)} {...a} />;
  // vảy thân: hàng dưới vẽ trước, hàng trên đè lên (như lợp ngói) → mép ngoài răng cưa = dấu nhận diện bóng đen
  const sq = 1 - 0.08 * at, scales = [];
  for (let y = -58; y >= -246; y -= 26) {
    const yc = y + 8, k = 1 - ((yc - BODY.y) / BODY.ry) ** 2, hw = k > 0 ? BODY.rx * sq * Math.sqrt(k) : 0;
    const odd = Math.round((-58 - y) / 26) % 2;
    for (let x = -hw + 4 + odd * 16; x <= hw - 2; x += 32) scales.push(<Shingle key={`${y}:${x}`} x={x + t * 6} y={y} s={18} />);
  }
  const fx = (s) => s * 36 * (1 - 0.18 * at) + dx; // vị trí mắt theo góc quay
  const far = (s) => (t !== 0 && s !== Math.sign(t) ? 1 - 0.42 * at : 1);
  // mào vảy trên đầu: 3 hàng, hàng dưới trước
  const crest = [
    [-334, 17, [-66, -33, 0, 33, 66]],
    [-354, 19, [-48, -16, 16, 48]],
    [-374, 21, [-30, 0, 30]],
  ];

  return (
    <g>
      <ellipse cx={0} cy={0} rx={96} ry={14} fill="#000" opacity={0.13} />
      <g transform={`scale(${1 + squash * 0.6} ${1 - squash})`}>
        <Tail side={side} ang={tail} ringSweep={ringSweep} />
        {farArm === -1 && armEl(-1, L)}
        {farArm === 1 && armEl(1, R)}
        {/* chân */}
        {[-1, 1].map((s) => (
          <g key={s}>
            <rect x={s * 40 - 17 + t * 8} y={-66} width={34} height={56} rx={17} fill={DC.scD} />
            <ellipse cx={s * 42 + t * 14} cy={-10} rx={30} ry={15} fill={DC.crD} />
            {[-1, 0, 1].map((k) => (
              <path key={k} d={`M ${s * 42 + t * 14 + k * 11 + 18 * t} -4 l ${3 + 4 * t} 7`} stroke={INK} strokeWidth={3} strokeLinecap="round" />
            ))}
          </g>
        ))}
        {/* thân: nền + vảy ngói */}
        <ellipse cx={0} cy={BODY.y} rx={BODY.rx * sq - 6} ry={BODY.ry - 6} fill={DC.sc} />
        {scales}
        <ellipse cx={t * 26} cy={-126} rx={62 * (1 - 0.18 * at)} ry={80} fill={DC.cr} />
        {[-150, -116, -82].map((y) => (
          <path key={y} d={`M ${t * 26 - 30} ${y} Q ${t * 26} ${y + 8} ${t * 26 + 30} ${y}`} stroke={DC.crD} strokeWidth={4} fill="none" strokeLinecap="round" />
        ))}
        {/* đầu (gật/nghiêng quanh cổ) */}
        <g transform={`rotate(${nod * 0.4 + tilt} 0 -214) translate(0 ${nod * 1.1})`}>
          {/* tai rất nhỏ (tê tê gần như không có vành tai) */}
          {[-1, 1].map((s) =>
            t !== 0 && s !== Math.sign(t) && at > 0.4 ? null : (
              <ellipse key={s} cx={s * 84 * (1 - 0.15 * at) + t * 14} cy={-318} rx={10} ry={8} fill={DC.crD} />
            ),
          )}
          {/* đầu hình trứng: rộng ở trán, thu về mõm */}
          <path d={HEAD_PATH} fill={DC.cr} transform={`translate(${t * 8} 0) scale(${1 - 0.06 * at} 1)`} />
          <g transform={`translate(${t * 10} 0) scale(${1 - 0.08 * at} 1)`}>
            <path d="M -84 -322 Q -88 -384 0 -388 Q 88 -384 84 -322 Z" fill={DC.sc} />
            {crest.map(([y, sz, xs]) => xs.map((x) => <Shingle key={`${y}:${x}`} x={x} y={y} s={sz} />))}
          </g>
          {/* mặt */}
          {[-1, 1].map((s) => (
            <g key={s}>
              {!(at > 0.9 && s !== Math.sign(t)) && <Eye id={`e${uid}${s}`} s={s} cx={fx(s)} cy={-280} ex={ex} open={eyeOpen} far={far(s)} />}
              <ellipse cx={s * 54 * (1 - 0.2 * at) + dx} cy={-262} rx={13} ry={8} fill={DC.blush} opacity={ex.cheek} />
              {(() => {
                const b = s === 1 && ex.browR ? ex.browR : ex.brow, k = far(s);
                const xi = fx(s) - s * 16 * k, xo = fx(s) + s * 18 * k, yi = -313 + b[0], yo = -313 + b[1];
                return <path d={`M ${xi} ${yi} Q ${(xi + xo) / 2} ${(yi + yo) / 2 - 6} ${xo} ${yo}`} stroke={INK} strokeWidth={7} strokeLinecap="round" fill="none" />;
              })()}
            </g>
          ))}
          {/* mõm: nhìn thẳng thì tròn, quay nghiêng thì nhô ra */}
          <ellipse cx={t * 52} cy={-242} rx={32 + 16 * at} ry={24} fill={DC.crD} />
          <ellipse cx={t * (74 + 16 * at)} cy={-256} rx={12} ry={8} fill={INK} />
          <circle cx={t * (74 + 16 * at) - 4} cy={-258} r={2.6} fill="#fff" />
          {MOUTH(talk > 0 ? talk : ex.mouth, t * 46)}
        </g>
        {farArm !== -1 && armEl(-1, L)}
        {farArm !== 1 && armEl(1, R)}
      </g>
    </g>
  );
};

/** <DetBall r rot sweep /> — Đét cuộn tròn: viền vảy, 2 vòng vảy xoay theo rot, giữa là đầu đuôi đeo vòng nhỏ;
 *  bên ngoài là Vòng Đét lớn (sweep 0→300 = đang "nạp", 360 = khép → "Đét!"). Đáy quả bóng chạm (0,0). */
export const DetBall = ({ r = 104, rot = 0, sweep = 0, ringW = 16 }) => {
  const cy = -r;
  const ring = (rr, n, sz, off) =>
    Array.from({ length: n }, (_, i) => {
      const a = (360 / n) * i + rot + off, [x, y] = polar(0, cy, rr, a);
      const th = (a * Math.PI) / 180;
      return <Shingle key={`${rr}-${i}`} x={x} y={y} s={sz} a={angOf(Math.cos(th), Math.sin(th))} />;
    });
  return (
    <g>
      <ellipse cx={0} cy={2} rx={r * 0.85} ry={13} fill="#000" opacity={0.13} />
      <circle cx={0} cy={cy} r={r * 0.92} fill={DC.sc} />
      {ring(r * 0.8, 13, r * 0.21, 0)}
      {ring(r * 0.5, 8, r * 0.19, 22)}
      <circle cx={0} cy={cy} r={r * 0.26} fill={shade(DC.sc, 0.94)} stroke={DC.scD} strokeWidth={3} />
      <g transform={`rotate(${rot} 0 ${cy})`}>
        <DetRing cx={0} cy={cy} r={r * 0.14} w={7} sweep={300} />
      </g>
      <DetRing cx={0} cy={cy} r={r + ringW + 12} w={ringW} sweep={sweep} />
    </g>
  );
};
