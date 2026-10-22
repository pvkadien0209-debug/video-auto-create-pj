// MascotIntro.jsx — 8 giây: Đét lăn vào (bóng cuộn) → Vòng Đét khép "Đét!" → bung ra → giơ tay "Khoan đã!" (cảnh đứng hình)
// → khoanh vòng vàng chỗ sai → thẻ SAI (lắc đầu) → lật thẻ ĐÚNG (gật) → ngón cái → cuộn lại → vòng khép thành khung kết DetPro.
import React from "react";
import { AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ensureFonts } from "../../../core/fonts.js";
import { FONT } from "../../../core/theme.js";
import { eyeOpenAt, noise1 } from "../../cutout/parts.jsx";
import { fakeTalk, mouthFromTalk, mouthShape } from "../../cutout/talk.js";
import { INK, NIGHT, RING, handAt, joints } from "../rig/geom.js";
import { PersonG } from "../rig/Person.jsx";
import { POSES, mix } from "../rig/poses.js";
import { DetRing } from "../rig/ring.jsx";
import { VerdictCard } from "../rig/Hand.jsx";
import { DetG, DetBall, DET_POSES } from "../mascot/Det.jsx";
import { lan } from "../skins/lan.js";
import { hoa } from "../skins/hoa.js";

export const MASCOT_FRAMES = 240;
const cl = { extrapolateLeft: "clamp", extrapolateRight: "clamp" };
const ease = Easing.bezier(0.3, 0.05, 0.25, 1);
const ip = (f, a, b, e = ease) => interpolate(f, a, b, { ...cl, easing: e });

const GROUND = 930, PS = 0.82, MS = 0.95; // đường chân, tỉ lệ người, tỉ lệ mascot
const LAN_X = 430, HOA_X = 900, DET_X = 1480;
const FREEZE = 62; // khung cảnh truyện đứng hình

// Lời thoại (bong bóng) — đồng thời dùng để mấp máy miệng.
const LINES = [
  { at: 70, end: 100, text: "Khoan đã!" },
  { at: 106, end: 132, text: "Lan đang đưa gì vậy?" },
  { at: 138, end: 170, text: "Đưa bản chính CCCD?" },
  { at: 176, end: 206, text: "Chỉ đưa bản sao thôi!" },
  { at: 206, end: 216, text: "Tròn vòng!" },
].map((l) => ({ ...l, talk: fakeTalk(l.text, l.at + 2, { syl: 6, comma: 6 }) }));

// Vị trí thẻ CCCD trong tay Lan (để khoanh Vòng Đét đúng chỗ).
const lanCard = (() => {
  const J = joints(lan.leg), g = POSES.give.R;
  const [hx, hy] = handAt(60, J.sho, g.sh, g.el);
  return [LAN_X + (hx + 25) * PS, GROUND + (hy - 26) * PS];
})();

const Bubble = ({ x, y, text, k, tail }) => {
  const w = text.length * 25 + 70, h = 92;
  return (
    <g transform={`translate(${x} ${y}) scale(${k})`} opacity={Math.min(1, k * 1.5)}>
      <path d={`M ${tail[0]} ${tail[1]} L ${w / 2 - 70} ${h / 2 - 4} L ${w / 2 - 20} ${h / 2 - 4} Z`} fill="#fff" stroke={INK} strokeWidth={5} strokeLinejoin="round" />
      <rect x={-w / 2} y={-h / 2} width={w} height={h} rx={34} fill="#fff" stroke={INK} strokeWidth={5} />
      <rect x={w / 2 - 76} y={h / 2 - 10} width={62} height={12} fill="#fff" />
      <text x={0} y={16} textAnchor="middle" fontFamily={FONT} fontWeight={800} fontSize={44} fill={INK}>{text}</text>
    </g>
  );
};

/** Tia "Đét!" — vạch vàng toả ra + chữ, t = 0..1. */
const Burst = ({ x, y, t, size = 1, label = true }) => {
  if (t <= 0 || t >= 1) return null;
  const r0 = 70 + 90 * t, r1 = r0 + 50 * (1 - t);
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`} opacity={1 - t * t}>
      {Array.from({ length: 10 }, (_, i) => {
        const a = (i / 10) * Math.PI * 2 + 0.3;
        return <line key={i} x1={Math.cos(a) * r0} y1={Math.sin(a) * r0} x2={Math.cos(a) * r1} y2={Math.sin(a) * r1} stroke={RING} strokeWidth={12} strokeLinecap="round" />;
      })}
      {label && <text y={22 - 30 * t} textAnchor="middle" fontFamily={FONT} fontWeight={800} fontSize={76} fill={INK} stroke="#fff" strokeWidth={10} paintOrder="stroke">
        Đét!
      </text>}
    </g>
  );
};

/** Bối cảnh cắt giấy đơn giản: tường, cửa sổ, bảng "QUÁN CƠM", quầy. */
const Backdrop = () => (
  <g>
    <rect width={1920} height={1080} fill="#f6ead7" />
    <rect y={GROUND - 40} width={1920} height={200} fill="#e8d6b8" />
    <rect x={120} y={210} width={300} height={220} rx={16} fill="#bfe0f2" stroke="#e2c79d" strokeWidth={14} />
    <path d="M 270 210 L 270 430 M 120 320 L 420 320" stroke="#e2c79d" strokeWidth={10} />
    <g transform="rotate(-3 700 200)">
      <rect x={560} y={150} width={280} height={96} rx={14} fill="#fff" stroke="#c99a5b" strokeWidth={6} />
      <text x={700} y={214} textAnchor="middle" fontFamily={FONT} fontWeight={800} fontSize={48} fill="#8a4524">QUÁN CƠM</text>
    </g>
    <rect x={1010} y={640} width={230} height={GROUND - 600} rx={10} fill="#c99a5b" />
    <rect x={995} y={624} width={260} height={30} rx={8} fill="#b07f42" />
  </g>
);

export const MascotIntro = () => {
  ensureFonts();
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sf = Math.min(f, FREEZE);

  // ---------- cảnh truyện (đứng hình từ FREEZE) ----------
  const lanPose = { ...mix(POSES.stand, POSES.give, ip(sf, [6, 26], [0, 1])), breath: Math.sin(sf / 12) };
  const hoaPose = { L: { sh: 8 + 52 * ip(sf, [14, 32], [0, 1]), el: 4 + 22 * ip(sf, [14, 32], [0, 1]), hand: "open" }, breath: Math.sin(sf / 13 + 1), nod: ip(sf, [30, 38, 46], [0, 8, 0]) };
  const sat = ip(f, [FREEZE, FREEZE + 8], [1, 0.18]);
  const dim = ip(f, [FREEZE, FREEZE + 8], [0, 0.12]);

  // ---------- mascot ----------
  const rollX = ip(f, [8, 40], [2080, DET_X], Easing.out(Easing.cubic));
  const rot = ((rollX - 2080) / 104) * (180 / Math.PI);
  let ballSweep = ip(f, [38, 52], [0, 300]) + ip(f, [52, 57], [0, 60], Easing.in(Easing.quad));
  const ballSquash = ip(f, [50, 56], [0, 0.16]);
  const pop = spring({ frame: f - 57, fps, config: { damping: 9, stiffness: 170 } });
  const standing = f >= 57 && f < 218;

  // tư thế đứng theo nhịp (beats)
  const tw = (a, b) => ip(f, [a, a + 6], [0, 1], Easing.inOut(Easing.quad));
  let pose = DET_POSES.idle, face = "happy";
  if (f >= 64) (pose = mix(DET_POSES.idle, DET_POSES.stop, tw(64))), (face = "stern");
  if (f >= 100) (pose = mix(DET_POSES.stop, DET_POSES.pointL, tw(100))), (face = "thinking");
  if (f >= 132) (pose = mix(DET_POSES.pointL, DET_POSES.card, tw(132))), (face = "worried");
  if (f >= 172) face = "happy";
  if (f >= 200) (pose = mix(DET_POSES.card, DET_POSES.thumb, tw(200))), (face = "wink");
  const flip = f < 172 ? 1 : f < 177 ? ip(f, [172, 177], [1, 0]) : ip(f, [177, 182], [0, 1]);
  const card = <VerdictCard ok={f >= 177} flip={flip} />;
  if (pose.R?.hand === "card") pose = { ...pose, R: { ...pose.R, card } };
  const shake = f >= 140 && f < 164 ? 0.2 * Math.sin(((f - 140) / 6) * Math.PI * 2) * (1 - (f - 140) / 24) : 0;
  const nodB = ip(f, [182, 188, 194, 200], [0, 14, 0, 0]);
  const curl = ip(f, [210, 218], [0, 0.22], Easing.in(Easing.quad)); // co lại trước khi cuộn
  const line = LINES.find((l) => f >= l.at && f < l.end);
  const talk = line ? mouthShape(mouthFromTalk(line.talk, f)) : 0;
  const detPose = {
    ...pose,
    turn: shake - 0.12,
    nod: nodB,
    squash: f < 72 ? -0.22 * (1 - pop) : curl,
    tail: 6 * Math.sin(f / 9) + 3 * noise1("duoi", f / 20),
  };

  // ---------- khung kết ----------
  const endT = ip(f, [218, 230], [0, 1], Easing.inOut(Easing.cubic));
  const endSweep = ip(f, [220, 230], [0, 300]) + ip(f, [230, 234], [0, 60], Easing.in(Easing.quad));
  const bx = interpolate(endT, [0, 1], [DET_X, 960]), by = interpolate(endT, [0, 1], [GROUND, 640]);
  const bs = interpolate(endT, [0, 1], [MS, 1.3]);

  const spot = ip(f, [104, 116], [0, 300]);

  return (
    <AbsoluteFill style={{ background: "#f6ead7" }}>
      <svg viewBox="0 0 1920 1080" width={1920} height={1080}>
        <defs>
          <filter id="freeze">
            <feColorMatrix type="saturate" values={sat} />
          </filter>
        </defs>
        <g filter="url(#freeze)">
          <Backdrop />
          <g transform={`translate(${HOA_X} ${GROUND}) scale(${PS})`}>
            <PersonG skin={hoa} pose={hoaPose} face="happy" eyeOpen={eyeOpenAt(sf, "hoa")} />
          </g>
          <g transform={`translate(${LAN_X} ${GROUND}) scale(${PS})`}>
            <PersonG skin={lan} pose={lanPose} face="worried" eyeOpen={eyeOpenAt(sf, "lan")} />
          </g>
        </g>
        <rect width={1920} height={1080} fill={NIGHT} opacity={dim} />
        {f >= FREEZE && f < 218 && (
          <g opacity={ip(f, [FREEZE, FREEZE + 6], [0, 1])}>
            <rect x={60} y={52} width={92} height={62} rx={14} fill={NIGHT} />
            <rect x={88} y={66} width={12} height={34} rx={3} fill={RING} />
            <rect x={112} y={66} width={12} height={34} rx={3} fill={RING} />
          </g>
        )}
        {/* Vòng Đét khoanh chỗ cần chú ý */}
        {f >= 104 && f < 218 && <DetRing cx={lanCard[0]} cy={lanCard[1]} r={62} w={11} sweep={f >= 177 ? 360 : spot} />}

        {/* mascot: bóng cuộn hoặc đứng */}
        {!standing && f < 218 && (
          <g transform={`translate(${rollX} ${GROUND}) scale(${MS * (1 + ballSquash * 0.5)} ${MS * (1 - ballSquash)})`}>
            <DetBall rot={rot + ip(f, [40, 50], [0, 8], Easing.out(Easing.sin)) * Math.sin(f / 2)} sweep={ballSweep} />
          </g>
        )}
        {standing && (
          <g transform={`translate(${DET_X} ${GROUND}) scale(${MS})`}>
            <DetG pose={detPose} face={face} eyeOpen={eyeOpenAt(f, "det", { start: 80 })} talk={talk} />
          </g>
        )}
        <Burst x={DET_X} y={GROUND - 430} t={ip(f, [56, 72], [0, 1], Easing.linear)} />

        {line && (
          <Bubble x={1180} y={360} text={line.text} k={ip(f, [line.at, line.at + 5], [0.6, 1], Easing.out(Easing.back(2)))} tail={[150, 140]} />
        )}

        {/* khung kết: nền đêm, bóng lăn về giữa, Vòng Đét khép */}
        {f >= 218 && (
          <g>
            <rect width={1920} height={1080} fill={NIGHT} opacity={endT} />
            <g transform={`translate(${bx} ${by}) scale(${bs})`}>
              <DetBall rot={-endT * 200} sweep={endSweep} />
            </g>
            <Burst x={960} y={640 - 104 * 1.3} t={ip(f, [233, 246], [0, 1], Easing.linear)} size={1.9} label={false} />
            <g opacity={ip(f, [231, 237], [0, 1])}>
              <text x={960} y={890} textAnchor="middle" fontFamily={FONT} fontWeight={800} fontSize={92} fill="#fff">
                Det<tspan fill={RING}>Pro</tspan>
              </text>
              <text x={960} y={950} textAnchor="middle" fontFamily={FONT} fontWeight={600} fontSize={36} fill="#aab4c8">
                Học tới đâu, vòng khép tới đó.
              </text>
            </g>
          </g>
        )}
        <text x={1880} y={1050} textAnchor="end" fontFamily={FONT} fontWeight={600} fontSize={22} fill="#8a93a3" opacity={f < 218 ? 1 : 0}>
          LAB-Cast · nhân vật minh hoạ
        </text>
      </svg>
    </AbsoluteFill>
  );
};
