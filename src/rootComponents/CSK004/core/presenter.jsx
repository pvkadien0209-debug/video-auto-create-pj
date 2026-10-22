// presenter.jsx — #134 "Đét đứng bên dẫn chuyện": Đét đứng cố định bên trái, khung cảnh (SCENE, BOARD, CMP, LIST, TEXT…)
// thu nhỏ vào một khung bên phải như tranh Đét đang chỉ vào → cả bài là một lời giải thích liền mạch của Đét.
// Bật bằng kịch bản: script.presenter = { side: "left" }. Cảnh tự chọn: scene.panel = true | false (ghi đè luật mặc định).
// Trong khung: không bong bóng thoại, không vẽ Đét trong cảnh; lời thoại xuống dải phụ đề kèm tên người nói.
// #144 (agent A): bố cục E-LAY-01…10 (scene.edit.layout) — khung bảng đổi vị trí/cỡ, Đét đổi chỗ/cỡ, đổi bố cục thì trượt/đi
//   sang mượt; động tác E-DET-01…10 (scene.edit.det chơi ở câu đầu cảnh, line.detAct chơi lúc câu bắt đầu). Số liệu: core/edit-layout.js.
import React, { createContext, useMemo } from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS } from "./theme.js";
import { DetG, DET_POSES } from "../cast/mascot/Det.jsx";
import { mouthAt } from "../cast/anim.js";
import { layoutAt, panelH, detActOf, actEnv } from "./edit-layout.js";
import { EDIT_BOARD } from "./edit-board.js"; // agent C: màu viền/khay theo kiểu bảng E-BD

export const PanelCtx = createContext(false);

// khung cảnh bên phải: 1340 × 754 (tỷ lệ 16:9), chừa dải phụ đề bên dưới (= bố cục E-LAY-01)
export const PANEL = { x: 520, y: 88, w: 1340 };
PANEL.k = PANEL.w / 1920;
PANEL.h = Math.round(1080 * PANEL.k);

// họ module giữ toàn màn: chương (HOST), mục lục, câu đố, kết, cảnh Đét dừng hình (DLG), con số mở đầu, câu hỏi chính
// #144: + BRK (cảnh ngắt nhịp toàn màn E-BRK-01…12, modules/edit-breakers.jsx — agent D)
const FULL = new Set(["HOST", "END", "QUIZ", "TOC", "DLG", "STAT", "ASK", "BEAT", "BRK"]);
export const panelOf = (scene, script) => {
  if (!script.presenter) return false;
  if (scene.panel != null) return !!scene.panel;
  const fam = scene.mod?.family || String(scene.module).split("-")[0];
  return !FULL.has(fam);
};

/** Hình học khung của cảnh tại khung hình cục bộ (scene.layout / scene.prevLayout do layoutScript gắn). */
const geomOf = (scene, frame) => layoutAt(scene?.layout, scene?.prevLayout, frame);

/** Khung bọc cảnh: thu nhỏ cả cảnh 1920×1080 vào khung bảng; vào khung (lần đầu của một chuỗi cảnh khung) thì nảy nhẹ. */
export const PanelFrame = ({ children, enter, scene }) => {
  const frame = useCurrentFrame();
  const p = enter ? interpolate(frame, [0, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 1;
  const e = 1 - Math.pow(1 - p, 3);
  const g = geomOf(scene, frame).panel;
  const P = { x: g.x, y: g.y, w: g.w, h: panelH(g.w), k: g.w / 1920 };
  // #144: kiểu bảng E-BD (scene.boardStyle do layoutScript gắn) → màu viền + khay; không ghi → như cũ
  const F = { border: "#d5dbe3", outline: "#b9c1cc", tray: "#c4cbd4", ...(EDIT_BOARD.find((b) => b.id === scene?.boardStyle)?.frame || {}) };
  // #135: khung là BẢNG TRẮNG: viền nhôm + khay bút phía dưới
  const body = (
    <>
    <div style={{ position: "absolute", left: P.x + 80, top: P.y + P.h + 4, width: P.w - 160, height: 16, borderRadius: 6, background: F.tray,
      boxShadow: "0 4px 8px rgba(23,32,51,.15)", opacity: e }}>
      <div style={{ position: "absolute", left: 60, top: -8, width: 90, height: 12, borderRadius: 6, background: "#2b3650" }} />
      <div style={{ position: "absolute", left: 170, top: -8, width: 90, height: 12, borderRadius: 6, background: "#e5533d" }} />
    </div>
    <div style={{ position: "absolute", left: P.x, top: P.y, width: P.w, height: P.h, borderRadius: 14, overflow: "hidden",
      boxShadow: "0 18px 50px rgba(23,32,51,.22)", border: `10px solid ${F.border}`, outline: `2px solid ${F.outline}`, background: "#fdfdfb",
      transform: `translateY(${(1 - e) * 40}px) scale(${0.94 + 0.06 * e})`, opacity: e, transformOrigin: "50% 60%" }}>
      <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, transform: `scale(${P.k})`, transformOrigin: "0 0" }}>
        <PanelCtx.Provider value={true}>{children}</PanelCtx.Provider>
      </div>
    </div>
    </>
  );
  if (!g.ry) return body;
  // E-LAY-09: bảng nghiêng 3/4 quanh trục đứng (mép gần Đét to hơn)
  return (
    <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, transform: `perspective(2600px) rotateY(${g.ry}deg)`,
      transformOrigin: `${P.x + P.w / 2}px ${P.y + P.h / 2}px` }}>{body}</div>
  );
};

// tư thế thường theo bố cục khi Đét đang dẫn
const DEFAULT_ARM = { R: { sh: -16, el: -10 }, L: { sh: 16, el: 10 } };
const talkPose = (kind) => {
  if (kind === "up" || kind === "peek") return { R: { sh: -128, el: -6, hand: "point" }, tilt: -3 };
  if (kind === "talk") return { R: { sh: -36, el: -52, hand: "open" }, tilt: -3 };
  return { ...DET_POSES.point, tilt: -3 };
};
const near = (a, ref) => a - 360 * Math.round((a - ref) / 360);
const mixArm = (a = {}, b, w, side) => {
  const a0 = { ...DEFAULT_ARM[side], ...a };
  const sh = near(b.sh, a0.sh), el = near(b.el, a0.el);
  return { sh: a0.sh + (sh - a0.sh) * w, el: a0.el + (el - a0.el) * w, hand: w > 0.45 ? b.hand : a0.hand, card: w > 0.45 ? b.card : a0.card };
};
/** Trộn tư thế thường với động tác (w = 0..1). */
const blendAct = (pose, A, w) => {
  const out = { ...pose };
  if (A.R) out.R = mixArm(pose.R, A.R, w, "R");
  if (A.L) out.L = mixArm(pose.L, A.L, w, "L");
  for (const k of ["tilt", "nod", "turn", "squash"]) if (A[k] != null) out[k] = (pose[k] || 0) + (A[k] - (pose[k] || 0)) * w;
  return out;
};

/** Động tác đang chơi (mới nhất): scene.edit.det ở đầu câu đầu tiên của cảnh, line.detAct ở đầu câu. */
const activeAct = (sc, t) => {
  const cands = [];
  const sd = sc.edit?.det;
  if (sd) cands.push({ code: sd, at: sc.timeline?.[0]?.startMs ?? 300 });
  for (const l of sc.timeline || []) if (l.detAct) cands.push({ code: l.detAct, at: l.startMs });
  let best = null;
  for (const c of cands) {
    const A = detActOf(c.code);
    if (!A) continue;
    const u = (t - c.at) / ((A.frames / 30) * 1000);
    if (u > 0 && u < 1 && (!best || c.at >= best.at)) best = { ...c, A, u };
  }
  return best;
};

/** Đét người dẫn: hiện khi cảnh hiện tại nằm trong khung. Nói (miệng mấp máy, tay chỉ vào khung) khi câu là của Đét/lời dẫn. */
export const Presenter = ({ scenes, script }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const runs = useMemo(() => scenes.map((s) => panelOf(s, script)), [scenes, script]);
  const i = scenes.findIndex((s) => frame >= s.from && frame < s.from + s.frames);
  if (i < 0 || !runs[i]) return null;
  let start = i; while (start > 0 && runs[start - 1]) start--;
  let end = i; while (end < scenes.length - 1 && runs[end + 1]) end++;
  const runFrom = scenes[start].from, runTo = scenes[end].from + scenes[end].frames;
  const sc = scenes[i];
  const lf = frame - sc.from;
  const G = geomOf(sc, lf), D = G.det;
  if (!D.show) return null;
  const t = (lf / fps) * 1000;
  const line = (sc.timeline || []).find((l) => t >= l.startMs && t < l.endMs);
  const mine = line && (!line.who || line.who === "det");
  const talk = mine ? mouthAt(line, t) : 0;
  const inP = interpolate(frame - runFrom, [0, 12], [0, 1], { extrapolateRight: "clamp" });
  const outP = interpolate(runTo - frame, [0, 8], [0, 1], { extrapolateRight: "clamp" });
  const vis = Math.min(inP, outP), ev = 1 - Math.pow(1 - vis, 3);
  let bob = Math.sin(frame / 22) * 4;
  // tư thế: đang dẫn → chỉ vào khung (tay phải); người khác nói → nghe (đứng yên, nghiêng đầu); thỉnh thoảng nghĩ
  let pose = mine ? talkPose(D.pose) : line ? { ...DET_POSES.idle, tilt: 5 } : DET_POSES.idle;
  let face = mine ? (line.face && line.face !== "neutral" ? line.face : "happy") : line ? "neutral" : "happy";
  if (D.turn) pose = { ...pose, turn: D.turn };
  // đang đi (đổi bố cục / đi vào): nhún bước + lắc người
  if (G.walk > 0) {
    const ph = (lf * Math.PI) / 6;
    bob -= Math.abs(Math.sin(ph)) * 14 * G.walk;
    pose = { ...pose, tilt: (pose.tilt || 0) + Math.sin(ph) * 5 * G.walk, R: mine ? pose.R : { sh: -16 - 18 * Math.sin(ph) * G.walk, el: -10 }, L: { sh: 16 - 18 * Math.sin(ph) * G.walk, el: 10 } };
  }
  // động tác E-DET
  let dy = 0, zoom = 1, eyeOpen = 1;
  const act = activeAct(sc, t);
  if (act) {
    const w = actEnv(act.u), A = act.A.act(act.u);
    pose = blendAct(pose, A, w);
    if (A.face && w > 0.4) face = A.face;
    dy = (A.dy || 0) * w; zoom = 1 + ((A.zoom || 1) - 1) * w; eyeOpen = 1 + ((A.eyeOpen ?? 1) - 1) * w;
  }
  const s = D.s * zoom, k = s / 1.12;
  const dir = D.x < 960 ? -1 : 1;
  const B = D.badge;
  const fig = (
    <>
      {D.shadow && <div style={{ position: "absolute", left: D.x - 190 * k, top: D.y - 16 * k, width: 380 * k, height: 34 * k, borderRadius: "50%", background: "rgba(23,32,51,.10)" }} />}
      <svg width={520 * k} height={900 * k} viewBox={`${-260 / 1.12} ${-880 / 1.12} ${520 / 1.12} ${900 / 1.12}`}
        style={{ position: "absolute", left: D.x - 260 * k, top: D.y - 880 * k + bob + dy * s, overflow: "visible" }}>
        <g transform={D.flip ? "scale(-1,1)" : "translate(0,0)"}><DetG pose={pose} face={face} talk={talk} eyeOpen={eyeOpen} /></g>
      </svg>
    </>
  );
  return (
    <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, pointerEvents: "none", transform: `translateX(${(1 - ev) * 260 * dir}px)`, opacity: ev }}>
      {B && B.r < 1400 && (
        <div style={{ position: "absolute", left: B.cx - B.r, top: B.cy - B.r, width: 2 * B.r, height: 2 * B.r, borderRadius: "50%", opacity: B.a,
          background: "radial-gradient(circle at 50% 40%, #fffaf0 0%, #fbeed3 100%)", boxShadow: `0 0 0 8px #fff, 0 0 0 14px ${RING}, 0 16px 34px rgba(23,32,51,.25)` }} />
      )}
      {B ? <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, clipPath: `circle(${B.r}px at ${B.cx}px ${B.cy}px)` }}>{fig}</div> : fig}
    </div>
  );
};
const RING = "#ffd23f"; // Vòng Đét
