// Person.jsx — KHUNG XƯƠNG CHUNG cho mọi nhân vật người (mở rộng từ lab/cutout/Lan.jsx).
// Cây khớp: thân → đầu (cổ); thân → cánh tay (vai) → cẳng tay (khuỷu) → bàn tay; hông → đùi → ống chân (gối).
// Nhân vật chỉ khác "áo da" (skin: dữ liệu ở skins/*.js). Tư thế = các con số (pose), xem poses.js.
import React from "react";
import { INK, UPPER, joints, rad, shade } from "./geom.js";
import { Face, EXPR } from "./Face.jsx";
import { Hand } from "./Hand.jsx";
import { Badge } from "./ring.jsx";
import { HAIR, TOPS, ACC } from "./styles.jsx";

const Leg = ({ s, J, w, hip, knee, color, shoe, shorts }) => {
  const x = s * 22 * w;
  return (
    <g transform={`rotate(${hip} ${x} ${J.hip})`}>
      <rect x={x - 18} y={J.hip - 6} width={36} height={J.leg + 12} rx={18} fill={color} />
      {/* quần short (#110): ống quần phủ nửa trên đùi, chân để trần */}
      {shorts && <rect x={x - 21} y={J.hip - 8} width={42} height={J.leg * 0.62 + 8} rx={12} fill={shorts} />}
      <g transform={`rotate(${knee} ${x} ${J.hip + J.leg})`}>
        <rect x={x - 16} y={J.hip + J.leg - 8} width={32} height={J.leg + 4} rx={16} fill={color} />
        <ellipse cx={x + 12} cy={-10} rx={30} ry={14} fill={shoe} />
      </g>
    </g>
  );
};

const Arm = ({ s, J, w, S, sh, el, hand, card, lean }) => {
  const x = s * 60 * w, ey = J.sho + UPPER;
  const long = S.top.sleeve === "long", cloth = S.top.color;
  return (
    <g transform={`rotate(${sh} ${x} ${J.sho})`}>
      <rect x={x - 15} y={J.sho - 8} width={30} height={108} rx={15} fill={long ? cloth : S.skin} />
      {!long && <rect x={x - 17} y={J.sho - 12} width={34} height={52} rx={16} fill={cloth} />}
      <g transform={`rotate(${el} ${x} ${ey})`}>
        <rect x={x - 13} y={ey - 6} width={26} height={long ? 84 : 96} rx={13} fill={long ? shade(cloth, 0.92) : S.skin} />
        <Hand x={x} y={ey + 94} type={hand} abs={sh + el + lean} color={S.skin} card={card} />
      </g>
    </g>
  );
};

/**
 * <PersonG skin pose face talk eyeOpen /> — trả về <g>, gốc ở giữa hai bàn chân.
 * pose: walk, walkAmt 0..1, breath -1..1, lean, nod, tilt, turn -1..1 (quay mặt), hair (góc tóc),
 *       R/L = { sh, el, hand: open|stop|point|thumb|phone|idcard|card, card }, cross = khoanh tay, front = vẽ tay trái trước thân (#106).
 * face: tên trong EXPR hoặc object tham số. talk: 0|1|2 hình miệng khi nói.
 */
/**
 * Tham số áo da tuỳ chọn (#110): scale = tỉ lệ cả người (trẻ con nhỏ hơn, vẽ quanh gốc chân → vẫn đứng đúng sàn);
 * headK = tỉ lệ đầu (trẻ con đầu to); stoop = độ còng (người già: đầu chúi ra trước, cổ thấp, vai tròn).
 */
export const PersonG = (props) => {
  const k = props.skin.scale ?? 1;
  return k === 1 ? <PersonBody {...props} /> : <g transform={`scale(${k})`}><PersonBody {...props} /></g>;
};

const PersonBody = ({ skin: S, pose = {}, face = "neutral", talk = 0, eyeOpen = 1 }) => {
  const J = joints(S.leg ?? 120), w = S.w ?? 1;
  const hk = S.headK ?? 1, stoop = S.stoop ?? 0;
  const { walk = 0, walkAmt = 0, breath = 0, lean = 0, nod = 0, tilt = 0, turn = 0, cross = false } = pose;
  const legA = Math.sin(walk) * 28 * walkAmt;
  const kneeL = Math.max(0, Math.cos(walk)) * 38 * walkAmt, kneeR = Math.max(0, -Math.cos(walk)) * 38 * walkAmt;
  const drop = J.leg * 2 * (1 - Math.cos(rad(legA))) - 4 * Math.abs(Math.cos(walk)) * walkAmt;
  const sw = legA * 0.75; // tay đánh ngược chân
  let R = pose.R ?? { sh: -6 + sw, el: -4 - Math.abs(sw) * 0.3 };
  let L = pose.L ?? { sh: 8 - sw, el: 4 + Math.abs(sw) * 0.3 };
  if (cross) [R, L] = [{ sh: 16, el: 74 }, { sh: -16, el: -80 }];
  const ex = typeof face === "string" ? EXPR[face] : face;
  const skirt = S.bottom.style === "skirt";
  const shorts = S.bottom.style === "shorts" ? S.bottom.color : null;
  const legC = skirt || shorts ? S.bottom.legs || S.skin : S.bottom.color;
  const hair = HAIR[S.hair.style];
  const acc = (layer) => (S.acc || []).filter((a) => ACC[a]?.layer === layer);
  const sy = 1 + breath * 0.012;
  const arm = (s, a) => <Arm s={s} J={J} w={w} S={S} lean={lean} {...a} />;
  const c = { skin: S.skin, brow: S.hair.brow || S.hair.color, cheek: S.cheek || "#f59a8b", mouth: S.mouth || "#9b2c2c", hair: S.hair, eye: S.eye };
  // còng lưng: đầu chúi về phía đang quay mặt (hoặc chỉ cúi khi nhìn thẳng), cổ thấp xuống
  const turnS = Math.max(-1, Math.min(1, (pose.turn || 0) / 0.32));
  const hx = stoop * 1.1 * turnS, hy = stoop * 1.6;

  return (
    <g>
      <ellipse cx={0} cy={0} rx={95 * w - walkAmt * 10} ry={14} fill="#000" opacity={0.13} />
      <g transform={`translate(0 ${drop}) rotate(${lean} 0 ${J.hip})`}>
        {(S.acc || []).filter((a) => ACC[a]?.back).map((a) => <g key={a}>{ACC[a].back(J, w, S)}</g>)}
        <Leg s={1} J={J} w={w} hip={legA} knee={kneeR} color={shade(legC, 0.82)} shoe={S.shoes} shorts={shorts && shade(shorts, 0.85)} />
        {!cross && !pose.front && arm(-1, L)}
        <Leg s={-1} J={J} w={w} hip={-legA} knee={kneeL} color={legC} shoe={S.shoes} shorts={shorts} />
        {shorts && <rect x={-50 * w} y={J.hip - 14} width={100 * w} height={30} rx={10} fill={shorts} />}
        {skirt && (
          <path d={`M ${-54 * w} ${J.hip - 12} L ${54 * w} ${J.hip - 12} L ${68 * w} ${J.hip + 72} Q 0 ${J.hip + 82} ${-68 * w} ${J.hip + 72} Z`} fill={S.bottom.color} />
        )}
        <g transform={`translate(0 ${J.hip}) scale(1 ${sy}) translate(0 ${-J.hip})`}>
          {TOPS[S.top.style](J, w, S.top)}
          {acc("body").map((a) => <g key={a}>{ACC[a].draw(J, w, S)}</g>)}
          {S.badge !== false && <Badge x={38 * w} y={J.sho + 48} />}
          {/* đầu: xoay ở cổ (gật = nod, nghiêng = tilt) */}
          <g transform={`translate(${hx} ${hy}) rotate(${nod * 0.4 + tilt + stoop * 0.5 * turnS} 0 ${J.neck}) translate(0 ${nod * 1.1}) translate(0 ${J.neck}) scale(${hk}) translate(0 ${-J.neck})`}>
            <rect x={-13} y={J.neck - 22} width={26} height={34} rx={8} fill={S.skinD} />
            <g transform={`translate(0 ${J.head})`}>
              {hair.back(S.hair, pose)}
              {!hair.hideEars && [-1, 1].map((s) => <circle key={s} cx={s * 69 + turn * 6} cy={12} r={13} fill={S.skin} />)}
              <ellipse cx={turn * 4} cy={14} rx={66} ry={70} fill={S.skin} />
              {hair.front(S.hair, pose)}
              <Face ex={ex} eyeOpen={eyeOpen} talk={talk} turn={turn} c={c} />
              {acc("head").map((a) => <g key={a}>{ACC[a].draw(turn * 12, { ...c, hair: S.hair })}</g>)}
            </g>
          </g>
        </g>
        {(cross || pose.front) && arm(-1, L)}
        {arm(1, R)}
      </g>
    </g>
  );
};

/** Tâm đầu (y so với chân, đã tính scale/headK/stoop) — để đặt bong bóng, dấu tích, cắt ảnh nét mặt. */
export const headY = (S) => {
  const J = joints(S.leg ?? 120), hk = S.headK ?? 1;
  return (J.neck + (J.head - J.neck) * hk + (S.stoop ?? 0) * 1.6) * (S.scale ?? 1);
};
/** Hộp nhìn (viewBox) quanh đầu — để cắt ảnh nét mặt. */
export const headBox = (S, pad = 112) => {
  const p = pad * (S.headK ?? 1) * (S.scale ?? 1);
  return `${-p} ${headY(S) - p - 6} ${p * 2} ${p * 2}`;
};
/** Chiều cao hình tới đỉnh tóc (px ở tỉ lệ 1, đã nhân scale). */
export const heightOf = (S) => {
  const J = joints(S.leg ?? 120), hk = S.headK ?? 1;
  const extra = HAIR[S.hair.style]?.extra ?? (S.hair.style === "spiky" ? 26 : S.hair.style === "bun" ? 38 : 8);
  return -(headY(S) / (S.scale ?? 1) - (82 + extra) * hk) * (S.scale ?? 1);
};
export { INK };
