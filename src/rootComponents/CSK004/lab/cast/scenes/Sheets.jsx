// Sheets.jsx — các bảng mẫu tĩnh (model sheet): xếp hàng + so chiều cao, bóng đen, nét mặt, tư thế, góc quay mascot.
import React from "react";
import { AbsoluteFill } from "remotion";
import { ensureFonts } from "../../../core/fonts.js";
import { FONT } from "../../../core/theme.js";
import { INK, NIGHT, joints } from "../rig/geom.js";
import { PersonG, headBox, heightOf } from "../rig/Person.jsx";
import { EXPR_NAMES, EXPR_VI } from "../rig/Face.jsx";
import { POSES, POSE_VI, SHEET_POSES } from "../rig/poses.js";
import { DetRing } from "../rig/ring.jsx";
import { VerdictCard } from "../rig/Hand.jsx";
import { DetG, DetBall, DET_EXPR_NAMES, DET_POSES } from "../mascot/Det.jsx";
import { CAST, MASCOT } from "../cast.js";

const PAPER = "#f4f1ea";
const T = (p) => <text fontFamily={FONT} fill={INK} {...p} />;

/** Khung chung: nền giấy, tiêu đề, Vòng Đét nhỏ ở góc (chữ ký lặp lại trên mọi khung). */
const Sheet = ({ w = 1920, h = 1080, title, sub, children, dark }) => {
  ensureFonts();
  return (
    <AbsoluteFill style={{ background: dark ? NIGHT : PAPER }}>
      <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h}>
        <defs>
          <filter id="sil">
            <feColorMatrix type="matrix" values="0 0 0 0 0.09  0 0 0 0 0.12  0 0 0 0 0.2  0 0 0 1 0" />
          </filter>
        </defs>
        <DetRing cx={78} cy={66} r={22} w={9} />
        {T({ x: 118, y: 80, fontSize: 40, fontWeight: 800, children: title, fill: dark ? "#fff" : INK })}
        {sub && T({ x: w - 60, y: 78, fontSize: 26, fontWeight: 600, textAnchor: "end", fill: dark ? "#aab4c8" : "#5d6878", children: sub })}
        {children}
      </svg>
    </AbsoluteFill>
  );
};

// ---------------- 1. Xếp hàng (lineup) + thước "đầu" ----------------
const HEAD_U = 152; // 1 "đầu" = đường kính đầu người (đơn vị rig)
export const Lineup = ({ silhouette = false }) => {
  const slots = [{ id: "det" }, ...CAST];
  const G = 880, s = slots.length > 6 ? 0.8 : 0.92; // #110: 9 chỗ → thu nhỏ, giãn đều
  const X = (i) => 150 + i * (1620 / (slots.length - 1));
  return (
    <Sheet title={silhouette ? "DetPro · thử bóng đen (silhouette test)" : "DetPro · dàn nhân vật (lineup)"} sub="LAB-Cast · bản thử 2026-10-19">
      {[1, 2, 3, 4].map((k) => (
        <g key={k}>
          <line x1={60} x2={1860} y1={G - k * HEAD_U * s} y2={G - k * HEAD_U * s} stroke="#c8ccd4" strokeDasharray="10 10" strokeWidth={2} />
          {T({ x: 1860, y: G - k * HEAD_U * s - 10, fontSize: 22, fill: "#8a93a3", textAnchor: "end", children: `${k} đầu` })}
        </g>
      ))}
      <line x1={60} x2={1860} y1={G} y2={G} stroke="#9aa3b2" strokeWidth={3} />
      <g filter={silhouette ? "url(#sil)" : undefined}>
        {slots.map((c, i) => (
          <g key={c.id} transform={`translate(${X(i)} ${G}) scale(${s})`}>
            {c.id === "det" ? <DetG face="happy" pose={{ tail: -4 }} /> : <PersonG skin={c.skin} face="neutral" />}
          </g>
        ))}
      </g>
      {slots.map((c, i) => {
        const isM = c.id === "det";
        const hu = isM ? 400 / HEAD_U : heightOf(c.skin) / HEAD_U;
        return (
          <g key={c.id}>
            {T({ x: X(i), y: G + 58, fontSize: slots.length > 6 ? 34 : 40, fontWeight: 800, textAnchor: "middle", children: isM ? MASCOT.name : c.name })}
            {T({ x: X(i), y: G + 96, fontSize: 22, fontWeight: 600, textAnchor: "middle", fill: "#5d6878", children: isM ? "mascot · người dẫn" : slots.length > 6 ? c.short : `${c.age} tuổi · ${c.short}` })}
            {!silhouette && T({ x: X(i), y: G + 128, fontSize: 21, textAnchor: "middle", fill: "#8a93a3", children: `${!isM && slots.length > 6 ? `${c.age} tuổi · ` : ""}≈ ${hu.toFixed(1).replace(".", ",")} đầu` })}
          </g>
        );
      })}
    </Sheet>
  );
};

// ---------------- 2. Lưới nét mặt ----------------
const Cell = ({ x, y, w, h, vb, label, children }) => (
  <g>
    <rect x={x + 6} y={y} width={w - 12} height={h} rx={22} fill="#fff" stroke="#e3e7ee" strokeWidth={2} />
    <svg x={x + 6} y={y + 4} width={w - 12} height={h - 44} viewBox={vb}>{children}</svg>
    {T({ x: x + w / 2, y: y + h - 14, fontSize: 22, fontWeight: 600, textAnchor: "middle", fill: "#5d6878", children: label })}
  </g>
);
export const Expressions = () => {
  const rows = [
    { name: "Đét", list: DET_EXPR_NAMES, draw: (e) => <DetG face={e} pose={{ R: { sh: -10, el: -6 }, L: { sh: 10, el: 6 } }} />, vb: "-128 -408 256 236" },
    { name: "Lan", list: EXPR_NAMES, draw: (e) => <PersonG skin={CAST[0].skin} face={e} />, vb: headBox(CAST[0].skin) },
    { name: "Dũng", list: EXPR_NAMES, draw: (e) => <PersonG skin={CAST[1].skin} face={e} />, vb: headBox(CAST[1].skin) },
  ];
  return (
    <Sheet title="Nét mặt (expression sheet)" sub="6 nét chuẩn cho mọi người · 9 nét cho mascot">
      {rows.map((r, ri) => {
        const y = 128 + ri * 312, cw = r.list.length > 6 ? 190 : 250;
        return (
          <g key={r.name}>
            {T({ x: 50, y: y + 150, fontSize: 34, fontWeight: 800, children: r.name })}
            {r.list.map((e, i) => (
              <Cell key={e} x={168 + i * cw} y={y} w={cw} h={292} vb={r.vb} label={EXPR_VI[e]}>
                {r.draw(e)}
              </Cell>
            ))}
          </g>
        );
      })}
    </Sheet>
  );
};

// ---------------- 3. Bảng tư thế: 5 người × 7 tư thế ----------------
export const POSES_H = 220 + CAST.length * 312; // #110: cao theo số nhân vật
export const Poses = () => {
  const cw = 240, rh = 312;
  return (
    <Sheet h={POSES_H} title={`Tư thế (pose sheet) · một khung xương, ${CAST.length} áo da`} sub="đứng · đi · vẫy · chỉ · dừng · khoanh tay · điện thoại">
      {SHEET_POSES.map((p, i) => T({ key: p, x: 200 + i * cw + cw / 2, y: 150, fontSize: 26, fontWeight: 700, textAnchor: "middle", fill: "#5d6878", children: POSE_VI[p] }))}
      {CAST.map((c, ri) => (
        <g key={c.id}>
          {T({ x: 60, y: 200 + ri * rh + 170, fontSize: 32, fontWeight: 800, children: c.name })}
          {SHEET_POSES.map((p, i) => (
            <Cell key={p} x={200 + i * cw} y={180 + ri * rh} w={cw} h={rh - 14} vb="-290 -690 580 710" label="">
              <PersonG skin={c.skin} pose={POSES[p]} face={p === "stop" ? "stern" : p === "wave" ? "happy" : p === "phone" ? "thinking" : p === "cross" ? "neutral" : "neutral"} />
            </Cell>
          ))}
        </g>
      ))}
    </Sheet>
  );
};

// ---------------- 4. Góc quay + tư thế mascot ----------------
export const Turn = () => {
  const views = [
    { label: "chính diện", el: <DetG face="neutral" /> },
    { label: "3/4 phải", el: <DetG face="neutral" pose={{ turn: 0.55 }} /> },
    { label: "nghiêng", el: <DetG face="neutral" pose={{ turn: 1 }} /> },
    { label: "3/4 trái", el: <DetG face="happy" pose={{ turn: -0.55 }} /> },
    { label: "cuộn tròn", el: <DetBall sweep={300} /> },
  ];
  const poses = [
    { label: "giơ tay dừng", el: <DetG face="stern" pose={DET_POSES.stop} /> },
    { label: "chỉ", el: <DetG face="thinking" pose={DET_POSES.point} /> },
    { label: "thẻ Sai", el: <DetG face="worried" pose={{ ...DET_POSES.card, R: { ...DET_POSES.card.R, card: <VerdictCard ok={false} /> } }} /> },
    { label: "thẻ Đúng", el: <DetG face="happy" pose={{ ...DET_POSES.card, R: { ...DET_POSES.card.R, card: <VerdictCard ok /> } }} /> },
    { label: "ngón cái", el: <DetG face="wink" pose={DET_POSES.thumb} /> },
    { label: "suy nghĩ", el: <DetG face="thinking" pose={DET_POSES.think} /> },
    { label: "vẫy", el: <DetG face="happy" pose={DET_POSES.wave} /> },
    { label: "reo", el: <DetG face="laugh" pose={DET_POSES.cheer} /> },
  ];
  return (
    <Sheet title="Đét · góc quay (turnaround) + tư thế" sub="vòng vàng ở đuôi luôn thấy được">
      {views.map((v, i) => (
        <Cell key={v.label} x={60 + i * 360} y={120} w={360} h={470} vb="-260 -470 520 500" label={v.label}>
          {v.el}
        </Cell>
      ))}
      {poses.map((v, i) => (
        <Cell key={v.label} x={60 + i * 225} y={614} w={225} h={440} vb="-260 -500 520 530" label={v.label}>
          {v.el}
        </Cell>
      ))}
    </Sheet>
  );
};
