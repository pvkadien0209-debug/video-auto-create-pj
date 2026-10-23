// board.jsx — BOARD-01 "Bảng vẽ hành trình" (#130, nghiên cứu DetPro/research/2026-10-21-videoscribe.md).
// Kiểu VideoScribe / RSA Animate: một tấm canvas lớn dùng chung cả bài (script.boards), các phần tử được VẼ đúng lúc
// lời đọc tới từ khoá, bàn tay Đét cầm bút đi theo đầu nét, camera lướt giữa các ô, cuối bài zoom ra toàn cảnh.
//
// Kịch bản:
//   script.boards = { "<id>": { size: [W, H], frames: { A: [x, y, w, h], … }, hand: "det-paw" | "none", font: "hand" | "base" } }
//   scene.data = { board: "<id>", shots: [{ at, fit: "A" | [id…] | "all", zoom?, ms?, move?: "cut" }], items: [{ id, t, at, … }] }
//   Các phần tử của cảnh BOARD trước đó (cùng bảng) hiện sẵn — ScriptVideo.layoutScript truyền qua data._prior.
// Mốc "at": số ms từ đầu cảnh | "l2" (đầu câu) | "l2:sixteen" (lúc đọc tới chữ, so nguyên từ) | "l2:ten#2" | "l2:whom+400" | "l3:end".
// Phần tử t: illus | icon(chưa) | text | box | ring | arrow | line | strike | underline | marker | badge.
//   chung: id, at, ms (thời gian vẽ), color (ink|accent|coral|muted|marker|#hex), enter (draw|hand-in|pop|fade|none)
import React, { useMemo } from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { COLORS, FONT } from "../core/theme.js";
import { EASE_STD } from "../core/motion.js";
import { ILLUS_PATHS } from "../core/illus-paths.js";
import { getModule } from "./index.js"; // #135: khung ảnh cảnh nhân vật dán trên bảng (gọi lúc vẽ, không lúc nạp)
import { FRAME_IDS, NOTE_IDS, BOARD_IDS, CLOSE_NOTE } from "../core/edit-board.js"; // #144: E-FR / E-NOTE / E-BD

export const HAND_FONT = "'Patrick Hand', 'Be Vietnam Pro', cursive";
const SAFE_BOX = { x: 96, y: 120, w: 1728, h: 770 }; // vùng an toàn trên màn (chừa dải phụ đề)
const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
const easeOut = (p) => 1 - Math.pow(1 - clamp01(p), 3);

// ---------- mốc thời gian theo chữ ----------
const norm = (s) => String(s).toLowerCase().normalize("NFC").replace(/[“”"'’‘.,!?;:()…—–-]/g, " ").split(/\s+/).filter(Boolean);
/** "l2:sixteen+300" → ms trong cảnh; trả null nếu không tìm thấy. */
export const resolveAt = (at, lines = []) => {
  if (at == null) return 0;
  if (typeof at === "number") return at;
  const m = String(at).match(/^([^:+]+)(?::([^+#]+?)(?:#(\d+))?)?(?:\+(-?\d+))?$/);
  if (!m) return null;
  const [, lid, word, nth, plus] = m;
  const l = lines.find((x) => x.id === lid);
  if (!l) return null;
  const off = plus ? Number(plus) : 0;
  if (!word) return l.startMs + off;
  if (word.trim() === "end") return l.endMs + off;
  const toks = norm(l.say || ""), want = norm(word);
  let hit = -1, seen = 0;
  for (let i = 0; i + want.length <= toks.length; i++) {
    if (want.every((w, k) => toks[i + k] === w) && ++seen === Number(nth || 1)) { hit = i; break; }
  }
  if (hit < 0) return null;
  // giọng đọc ~ đều: vị trí chữ / tổng số chữ × độ dài câu, lùi 150 ms để nét vẽ bắt đầu ngay trước khi nghe chữ
  return Math.max(l.startMs, l.startMs + (hit / Math.max(1, toks.length)) * (l.endMs - l.startMs) - 150) + off;
};

// ---------- hình học từng phần tử ----------
const DRAW_MS = { vignette: 700, illus: 900, icon: 600, box: 550, ring: 650, arrow: 500, line: 650, strike: 300, underline: 350, marker: 420, badge: 450 };
// #144: chữ đánh máy (E-NOTE-06) / con dấu (E-NOTE-03) rộng hơn chữ tay
const TEXT_K = { "E-NOTE-06": 0.6, "E-NOTE-03": 0.78 };
const textW = (it) => (it.w ?? String(it.text || "").length * (it.size || 52) * (TEXT_K[it.style] || (it.font === "base" ? 0.55 : 0.44)));
// #144: phần khung ảnh nhô ra ngoài 16:9 (trên, phải, dưới) — chỉ khác 0 với kiểu khung mới
const FR_EXTRA = { "E-FR-03": [0, 70, 16], "E-FR-04": [0, 0, 10], "E-FR-05": [0, 0, 40], "E-FR-07": [0, 0, 14], "E-FR-08": [30, 0, 30] };
export const bboxOf = (it, byId) => {
  switch (it.t) {
    case "illus": case "icon": return [it.x, it.y, it.size || 120, it.size || 120];
    case "text": return [it.x, it.y, textW(it), (it.size || 52) * 1.25];
    case "badge": return [it.x, it.y, it.r ? it.r * 2 : 72, it.r ? it.r * 2 : 72];
    case "vignette": { const w = it.w || 760, [et, er, eb] = FR_EXTRA[it.frame] || [0, 0, 0];
      return [it.x, it.y - et, w + er, Math.round((w * 9) / 16) + (it.caption ? 70 : 0) + et + eb]; }
    case "arrow": { const [a, b] = [it.from, it.to]; return [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.abs(a[0] - b[0]) || 1, Math.abs(a[1] - b[1]) || 1]; }
    case "line": { const xs = it.pts.map((p) => p[0]), ys = it.pts.map((p) => p[1]); return [Math.min(...xs), Math.min(...ys), Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys)]; }
    case "ring": case "strike": case "underline": case "marker": {
      if (it.x != null) return [it.x, it.y, it.w, it.h];
      const ids = it.around || (it.over ? [it.over] : []);
      const bs = ids.map((id) => byId[id] && bboxOf(byId[id], byId)).filter(Boolean);
      if (!bs.length) return [0, 0, 1, 1];
      const x0 = Math.min(...bs.map((b) => b[0])), y0 = Math.min(...bs.map((b) => b[1]));
      const x1 = Math.max(...bs.map((b) => b[0] + b[2])), y1 = Math.max(...bs.map((b) => b[1] + b[3]));
      if (it.t === "ring") return [x0 - 24, y0 - 20, x1 - x0 + 48, y1 - y0 + 40];
      return [x0, y0, x1 - x0, y1 - y0];
    }
    default: return [it.x || 0, it.y || 0, it.w || 1, it.h || 1];
  }
};
// rung tay nhẹ, ổn định theo seed (không dùng Math.random)
const wob = (seed, k) => { const s = Math.sin(seed * 12.9898 + k * 78.233) * 43758.5453; return (s - Math.floor(s)) * 2 - 1; };
const seedOf = (id = "") => [...id].reduce((a, c) => a + c.charCodeAt(0), 7);
const ellipsePath = (b, seed) => { // vòng tay vẽ: hơi méo, vượt qua điểm đầu một đoạn
  const [x, y, w, h] = b, cx = x + w / 2, cy = y + h / 2, rx = w / 2, ry = h / 2, n = 28, pts = [];
  for (let i = 0; i <= n; i++) { const a = -2.2 + (i / n) * (Math.PI * 2 + 0.5); const r = 1 + 0.04 * wob(seed, i); pts.push([cx + Math.cos(a) * rx * r, cy + Math.sin(a) * ry * r]); }
  return "M" + pts.map((p) => p.map((v) => v.toFixed(1)).join(" ")).join("L");
};
const rectPath = (b, seed) => { const [x, y, w, h] = b, j = (k) => 3 * wob(seed, k);
  return `M${x + j(1)} ${y + j(2)}L${x + w + j(3)} ${y + j(4)}L${x + w + j(5)} ${y + h + j(6)}L${x + j(7)} ${y + h + j(8)}Z`; };
const arrowPath = (it) => { const [a, b] = [it.from, it.to]; const c = it.curve || 0;
  const mx = (a[0] + b[0]) / 2 - (b[1] - a[1]) * c, my = (a[1] + b[1]) / 2 + (b[0] - a[0]) * c;
  return { d: `M${a[0]} ${a[1]}Q${mx} ${my} ${b[0]} ${b[1]}`, ang: Math.atan2(b[1] - my, b[0] - mx) }; };

// đầu bút (toạ độ canvas) khi phần tử đang vẽ ở tiến độ p
const tipOf = (it, b, p) => {
  const [x, y, w, h] = b;
  switch (it.t) {
    case "text": if (it.style === "E-NOTE-03") return [x + w / 2, y + h * 0.5]; // #144 con dấu: tay ấn ở giữa
      return [x + w * p, y + h * (0.55 + 0.12 * Math.sin(p * 40))];
    case "arrow": { const [a, c] = [it.from, it.to]; return [a[0] + (c[0] - a[0]) * p, a[1] + (c[1] - a[1]) * p]; }
    case "line": { const n = it.pts.length - 1, f = p * n, i = Math.min(n - 1, Math.floor(f)), r = f - i; const A = it.pts[i], B = it.pts[i + 1]; return [A[0] + (B[0] - A[0]) * r, A[1] + (B[1] - A[1]) * r]; }
    case "ring": { const a = -2.2 + p * (Math.PI * 2 + 0.5); return [x + w / 2 + Math.cos(a) * w / 2, y + h / 2 + Math.sin(a) * h / 2]; }
    case "box": { const per = 2 * (w + h), d = p * per; if (d < w) return [x + d, y]; if (d < w + h) return [x + w, y + d - w]; if (d < 2 * w + h) return [x + w - (d - w - h), y + h]; return [x, y + h - (d - 2 * w - h)]; }
    case "strike": case "underline": return [x + w * p, it.t === "strike" ? y + h * 0.55 : y + h];
    default: { // illus/badge/marker: đi dích dắc trong khung (người xem khó nhận ra)
      const rows = 4, f = p * rows, r = Math.floor(Math.min(rows - 1, f)), q = f - r;
      return [x + w * (0.15 + 0.7 * (r % 2 ? 1 - q : q)), y + h * (0.2 + 0.6 * (r / (rows - 1)))];
    }
  }
};

/** Lập lịch: mỗi phần tử → { it, t0, dur, bbox }. */
const planItems = (data, lines, prior = []) => {
  const all = [...prior.map((x) => ({ ...x, _old: true })), ...(data.items || [])];
  const byId = Object.fromEntries(all.map((it) => [it.id, it]));
  const items = (data.items || []).map((it) => {
    const t0 = resolveAt(it.at, lines);
    const len = it.t === "text" ? Math.min(1600, Math.max(450, String(it.text || "").length * 45)) : DRAW_MS[it.t] || 600;
    return { it, t0: t0 ?? 0, bad: t0 == null, dur: it.ms ?? (it.enter === "fade" || it.enter === "pop" ? 350 : len) };
  });
  // hai phần tử cách nhau ≥ 300 ms (tay chỉ vẽ một chỗ một lúc)
  items.sort((a, b) => a.t0 - b.t0);
  for (let i = 1; i < items.length; i++) if (items[i].t0 < items[i - 1].t0 + 300 && items[i].it.enter !== "fade") items[i].t0 = items[i - 1].t0 + 300;
  return { items, old: prior, byId };
};
const camBoxOf = (fit, board, byId) => {
  const [W, H] = board.size;
  if (fit === "all") return { b: [0, 0, W, H], pad: 0 };
  if (typeof fit === "string" && board.frames?.[fit]) return { b: board.frames[fit], pad: 0 };
  const ids = Array.isArray(fit) ? fit : [fit];
  const bs = ids.map((id) => byId[id] && bboxOf(byId[id], byId)).filter(Boolean);
  if (!bs.length) return { b: [0, 0, W, H], pad: 0 };
  const x0 = Math.min(...bs.map((b) => b[0])), y0 = Math.min(...bs.map((b) => b[1]));
  return { b: [x0, y0, Math.max(...bs.map((b) => b[0] + b[2])) - x0, Math.max(...bs.map((b) => b[1] + b[3])) - y0], pad: 70 };
};
const camOf = (shot, board, byId) => {
  const { b, pad } = camBoxOf(shot.fit, board, byId);
  let z = Math.min(SAFE_BOX.w / (b[2] + 2 * pad), SAFE_BOX.h / (b[3] + 2 * pad));
  if (shot.zoom != null) z = Math.min(z, shot.zoom);
  z = Math.max(0.12, Math.min(1.6, z)); // #143: 0.4 → 0.12 để "all" thấy trọn bảng 10 ô (9600 × 1860)
  const cx = b[0] + b[2] / 2, cy = b[1] + b[3] / 2;
  let tx = SAFE_BOX.x + SAFE_BOX.w / 2 - cx * z, ty = SAFE_BOX.y + SAFE_BOX.h / 2 - cy * z;
  // #144: cận một cụm trong ô → giữ khung nhìn nằm trong ô (không lộ khoảng trống ngoài ô, giữ được tiêu đề/mép ô)
  if (Array.isArray(shot.fit) && board.frames) {
    const f = Object.values(board.frames).find((r) => cx >= r[0] && cx <= r[0] + r[2] && cy >= r[1] && cy <= r[1] + r[3]);
    if (f) {
      const clampAx = (t, lo, len, s0, sl) => { // khung nhìn [s0, s0+sl] trên màn ↔ bảng [(s0-t)/z, (s0+sl-t)/z] ⊂ [lo, lo+len]
        if (sl / z > len) return t;
        const tMax = s0 - lo * z, tMin = s0 + sl - (lo + len) * z;
        return Math.max(tMin, Math.min(tMax, t));
      };
      tx = clampAx(tx, f[0], f[2], SAFE_BOX.x, SAFE_BOX.w);
      ty = clampAx(ty, f[1], f[3], SAFE_BOX.y, SAFE_BOX.h);
    }
  }
  return { z, tx, ty };
};
const cameraAtT = (shots, t) => {
  let cur = shots[0]?.cam || { z: 1, tx: 0, ty: 0 };
  for (let i = 1; i < shots.length; i++) {
    const s = shots[i];
    if (t < s.t) break;
    if (s.move === "cut") { cur = s.cam; continue; }
    const p = EASE_STD(clamp01((t - s.t) / (s.ms || 800)));
    const from = cur;
    cur = { z: from.z + (s.cam.z - from.z) * p, tx: from.tx + (s.cam.tx - from.tx) * p, ty: from.ty + (s.cam.ty - from.ty) * p };
  }
  return cur;
};

// ---------- #144 kiểu nền bảng (E-BD): nền + bảng màu mực tự đổi cho đủ tương phản ----------
const hexMix = (a, b, q) => { const h = (s) => [1, 3, 5].map((i) => parseInt(s.slice(i, i + 2), 16)); const A = h(a), B = h(b);
  return "#" + A.map((v, i) => Math.round(v + (B[i] - v) * q).toString(16).padStart(2, "0")).join(""); };
const LIGHT = { dark: false, ink: COLORS.ink, ink2: COLORS.ink2, muted: COLORS.muted, coral: COLORS.coral, marker: COLORS.marker, overlay: "rgba(255,255,255,0.88)", card: "#ffffff", pen: "marker" };
const DARKP = (o) => ({ ...LIGHT, dark: true, overlay: "rgba(20,26,30,0.86)", card: "rgba(16,21,27,0.93)", ...o });
const smudge = (a) => [ // vệt phấn lau dở (to, chậm, theo bảng)
  { img: `radial-gradient(ellipse 38% 22% at 30% 40%, rgba(255,255,255,${a}) 0%, transparent 70%), radial-gradient(ellipse 30% 18% at 75% 70%, rgba(255,255,255,${a * 0.8}) 0%, transparent 70%)`, size: [2600, 1500] },
  { img: `radial-gradient(ellipse 22% 30% at 60% 20%, rgba(255,255,255,${a * 0.7}) 0%, transparent 70%)`, size: [1700, 1100] },
];
const grid = (s, c, lw = 1) => ({ img: `linear-gradient(to right, ${c} 0 ${lw}px, transparent ${lw}px), linear-gradient(to bottom, ${c} 0 ${lw}px, transparent ${lw}px)`, size: [s, s] });
export const BOARD_STYLE = {
  "E-BD-01": { bg: "#fdfdfb", pal: LIGHT },
  "E-BD-02": { bg: "#272d2b", layers: smudge(0.05), pal: DARKP({ ink: "#f3f1ea", ink2: "#e4e1d8", muted: "#b8bdb7", coral: "#ff9d88", marker: "#ffe066", pen: "chalk", chalk: true, overlay: "rgba(39,45,43,0.93)" }) },
  "E-BD-03": { bg: "#c69862", layers: [
      { img: "radial-gradient(circle at 30% 40%, rgba(92,58,24,.34) 0 1.6px, transparent 2.4px), radial-gradient(circle at 75% 80%, rgba(255,236,200,.28) 0 1.4px, transparent 2.2px)", size: [23, 19] },
      { img: "radial-gradient(circle at 60% 30%, rgba(80,50,20,.28) 0 2px, transparent 3px), radial-gradient(circle at 20% 75%, rgba(120,80,40,.22) 0 1.6px, transparent 2.6px)", size: [41, 37] },
      { img: "radial-gradient(ellipse at 30% 30%, rgba(255,230,190,.18), transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(110,70,30,.16), transparent 60%)", size: [900, 700] }],
    pal: { ...LIGHT, ink: "#1d140b", ink2: "#33251a", muted: "#4f3d2a", coral: "#a3241a", overlay: "rgba(255,248,236,0.9)" } },
  "E-BD-04": { bg: "#fcfcf8", layers: [grid(24, "rgba(170,160,220,.35)"), grid(96, "rgba(140,125,210,.55)", 2)], pages: "margin", pal: LIGHT },
  "E-BD-05": { bg: "#c9a477", layers: [
      { img: "repeating-linear-gradient(28deg, rgba(255,255,255,.05) 0 2px, transparent 2px 9px), repeating-linear-gradient(-36deg, rgba(90,60,30,.06) 0 1px, transparent 1px 13px)", size: [240, 240] },
      { img: "radial-gradient(ellipse at 25% 35%, rgba(255,235,200,.22), transparent 55%), radial-gradient(ellipse at 75% 65%, rgba(100,65,30,.18), transparent 55%)", size: [1300, 900] }],
    pal: { ...LIGHT, ink: "#22170b", ink2: "#3a2a17", muted: "#58432a", coral: "#9e2618", overlay: "rgba(250,240,222,0.9)" } },
  "E-BD-06": { bg: "#1f4f8c", layers: [grid(40, "rgba(255,255,255,.10)"), grid(200, "rgba(255,255,255,.22)", 2)], pal: DARKP({ ink: "#f2f7ff", ink2: "#dbe8ff", muted: "#a9c1e6", coral: "#ffb199", overlay: "rgba(18,52,96,0.9)", pen: "light" }) },
  "E-BD-07": { bg: "#0d141c", layers: [{ img: "radial-gradient(circle, rgba(255,255,255,.035) 0 1px, transparent 1.5px)", size: [9, 9] }],
    sheen: "linear-gradient(118deg, transparent 0 22%, rgba(255,255,255,.07) 26%, transparent 33%, transparent 58%, rgba(255,255,255,.045) 61%, transparent 66%)",
    pal: DARKP({ ink: "#eaf6ff", ink2: "#cfe3f2", muted: "#93a9bb", coral: "#ff8f7a", pen: "light", glow: true, overlay: "rgba(13,20,28,0.9)" }) },
  "E-BD-08": { bg: "#a87b4f", layers: [{ img: "repeating-linear-gradient(90deg, rgba(60,35,15,.10) 0 3px, transparent 3px 47px), repeating-linear-gradient(90deg, rgba(255,220,180,.08) 0 2px, transparent 2px 29px)", size: [400, 400] }], pages: "notebook", pal: LIGHT },
  "E-BD-09": { bg: "#fbfaf6", layers: [{ img: "radial-gradient(circle, #b9bec8 0 2.2px, transparent 2.8px)", size: [40, 40], dot: true }], pal: LIGHT },
  "E-BD-10": { bg: "#2c5945", layers: smudge(0.06), pal: DARKP({ ink: "#f6f4ea", ink2: "#e8e6dc", muted: "#bfd0c4", coral: "#ffab94", marker: "#ffe27a", pen: "chalk", chalk: true, overlay: "rgba(44,89,69,0.93)" }) },
};
/** Kiểu nền của cảnh: scene.data.style | scene.edit.board (ctx.edit / data.edit) | script.boards[id].style | E-BD-01. */
export const boardStyleOf = (data = {}, ctx = {}, board = {}) => {
  const id = [data.style, data.edit?.board, ctx.edit?.board, board.style].find((x) => BOARD_STYLE[x]) || "E-BD-01";
  return { id, ...BOARD_STYLE[id] };
};
const palOf = (ctx) => ctx.pal || LIGHT;
const accentOf = (ctx) => { const a = ctx.accent || COLORS.pine; return palOf(ctx).dark && a.startsWith("#") && a.length === 7 ? hexMix(a, "#ffffff", 0.55) : a; };
const colorOf = (c, ctx) => { const P = palOf(ctx);
  return c === "accent" ? accentOf(ctx) : c === "coral" ? P.coral : c === "muted" ? P.muted : c === "marker" ? P.marker : c && c.startsWith("#") ? c : P.ink; };
// chữ trên giấy sáng (giấy nhớ, thẻ, bong bóng…) — luôn dùng mực tối, kể cả khi bảng tối
const inkOnPaper = (c, ctx) => colorOf(c, { ...ctx, pal: LIGHT, accent: ctx.accent });

// #135: hl = [{ text, at }] → các đoạn chữ, đoạn tô có q (0…1 tiến độ quét)
const hlParts = (it, ctx, t, old) => {
  const parts = [];
  let rest = String(it.text || "");
  for (const h of it.hl || []) {
    const k = rest.indexOf(h.text);
    if (k < 0) continue;
    if (k > 0) parts.push({ s: rest.slice(0, k) });
    const t0 = old ? -1e9 : resolveAt(h.at, ctx.lines || []) ?? 0;
    parts.push({ s: h.text, q: easeOut((t - t0) / 380) });
    rest = rest.slice(k + h.text.length);
  }
  if (rest) parts.push({ s: rest });
  return parts;
};
// #144 bảng tối: phấn hơi nhoè / kính có quầng sáng
const darkFx = (P) => (P.chalk ? { textShadow: "0 0 2px rgba(255,255,255,.45), 0 0 1px rgba(255,255,255,.6)" } : P.glow ? { textShadow: "0 0 14px rgba(120,210,255,.45)" } : {});
// #144 tô vàng trên bảng tối: dải vàng quét qua, chữ trong dải đổi sang mực tối (lớp chồng cắt theo tiến độ)
const HlDark = ({ s, q }) => (
  <span style={{ position: "relative", display: "inline-block" }}>
    <span>{s}</span>
    <span style={{ position: "absolute", left: -4, top: 0, padding: "0 4px", borderRadius: 6, background: COLORS.marker, color: COLORS.ink, textShadow: "none",
      clipPath: `inset(0 ${(1 - q) * 100}% 0 0)`, whiteSpace: "nowrap" }}>{s}</span>
  </span>
);
const HlLight = ({ s, q }) => <span style={{ background: `linear-gradient(to right, ${COLORS.marker}cc ${q * 100}%, transparent ${q * 100}%)`, borderRadius: 6, padding: "0 4px", margin: "0 -4px" }}>{s}</span>;

// ---------- vẽ một phần tử ----------
const Item = ({ it, p, byId, ctx, hand, t = 0, old = false, pk = null }) => {
  const enter = it.enter || "draw";
  // #144: kiểu ghi chú mới (E-NOTE-02…09) — tách riêng, mặc định (-01, -10 khi không cận) đi đường cũ
  if (p > 0 && (it.t === "text" || it.t === "illus") && it.style && it.style !== "E-NOTE-01" && it.style !== "E-NOTE-10" && NOTE_IDS.has(it.style))
    return <NoteItem it={it} p={p} byId={byId} ctx={ctx} hand={hand} t={t} old={old} pk={pk} />;
  const b = bboxOf(it, byId);
  const col = colorOf(it.color, ctx);
  const seed = seedOf(it.id);
  const font = it.font === "base" ? FONT : hand;
  if (p <= 0) return null;
  let wrap = {};
  if (enter === "fade") wrap = { opacity: p };
  if (enter === "pop") wrap = { transform: `scale(${0.6 + 0.4 * easeOut(p)})`, transformOrigin: `${b[0] + b[2] / 2}px ${b[1] + b[3] / 2}px`, opacity: clamp01(p * 3) };
  if (enter === "hand-in") wrap = { transform: `translateY(${(1 - easeOut(p)) * 420}px)`, opacity: clamp01(p * 4) };
  const dp = enter === "draw" ? p : 1; // tiến độ nét
  // #151: khung SVG ôm đúng vùng phần tử (viewBox = toạ độ bảng) thay cho SVG 1×1 vẽ tràn — Chrome trên Windows vẽ lệch/mất nét
  //       (hộp, vòng, gạch…) khi nét nằm xa ngoài khung SVG 1×1.
  const svg = (children) => {
    const [bx, by, bw, bh] = b, pad = 300;
    if (![bx, by, bw, bh].every(Number.isFinite)) return <svg style={{ position: "absolute", left: 0, top: 0, overflow: "visible", ...wrap }} width={1} height={1}>{children}</svg>;
    const W = bw + 2 * pad, H = bh + 2 * pad;
    const w2 = wrap.transformOrigin ? { ...wrap, transformOrigin: `${pad + bw / 2}px ${pad + bh / 2}px` } : wrap;
    return <svg style={{ position: "absolute", left: bx - pad, top: by - pad, overflow: "visible", ...w2 }} width={W} height={H} viewBox={`${bx - pad} ${by - pad} ${W} ${H}`}>{children}</svg>;
  };
  const stroke = { fill: "none", stroke: col, strokeLinecap: "round", strokeLinejoin: "round", pathLength: 1, strokeDasharray: 1, strokeDashoffset: 1 - dp };
  switch (it.t) {
    case "illus": {
      const ip = ILLUS_PATHS[it.name];
      const size = it.size || 120;
      if (!ip || ip.img || enter !== "draw")
        return <Img src={staticFile(`illus/${it.name}.svg`)} style={{ position: "absolute", left: b[0], top: b[1], width: size, height: size, transform: `${wrap.transform || ""}${it.flip ? " scaleX(-1)" : ""}`, opacity: wrap.opacity ?? (enter === "draw" ? clamp01(p * 2) : 1) }} />;
      const [vx, vy, vw] = ip.vb, k = size / vw;
      const tot = ip.p.reduce((a, q) => a + q.d.length, 0);
      let acc = 0;
      const fillA = clamp01((p - 0.55) / 0.4);
      return (
        <svg style={{ position: "absolute", left: b[0], top: b[1], overflow: "visible", transform: it.flip ? "scaleX(-1)" : undefined }} width={size} height={size} viewBox={ip.vb.join(" ")}>
          {ip.p.map((q, i) => { const a0 = acc / tot; acc += q.d.length; const sp = clamp01((p / 0.75 - a0) / (q.d.length / tot)); return (
            <g key={i}>
              <path d={q.d} fill={q.fill} fillRule={q.rule} fillOpacity={fillA} />
              {fillA < 1 && <path d={q.d} fill="none" stroke={palOf(ctx).ink} strokeWidth={0.55 / k * 2.2} strokeOpacity={1 - fillA * 0.85} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - sp} strokeLinecap="round" strokeLinejoin="round" />}
            </g>); })}
        </svg>
      );
    }
    case "text": {
      const size = it.size || 52;
      // #135: hl = [{ text: "cụm cần tô", at: "l2:word" }] → tô vàng quét đúng lúc lời đọc tới (cảnh cũ: đã tô sẵn)
      const parts = hlParts(it, ctx, t, old);
      const P = palOf(ctx);
      return (
        <div style={{ position: "absolute", left: b[0], top: b[1], fontFamily: font, fontSize: size, lineHeight: 1.15, color: col, whiteSpace: "nowrap",
          fontWeight: it.font === "base" ? 500 : 400, clipPath: enter === "draw" ? `inset(-20% ${(1 - p) * 100}% -30% -2%)` : undefined, ...(P.dark ? darkFx(P) : null), ...wrap }}>
          {parts.map((x, i) => x.q == null ? <span key={i}>{x.s}</span> : P.dark ? <HlDark key={i} s={x.s} q={x.q} /> : (
            <span key={i} style={{ background: `linear-gradient(to right, ${COLORS.marker}cc ${x.q * 100}%, transparent ${x.q * 100}%)`, borderRadius: 6, padding: "0 4px", margin: "0 -4px" }}>{x.s}</span>))}
        </div>
      );
    }
    case "vignette": {
      // #135: cảnh nhân vật thu nhỏ thành khung ảnh dán trên bảng; cảnh cũ (đã qua) chỉ còn khung + chú thích
      // #144: kiểu khung mới (E-FR-02…10) → VignetteFrame; mặc định giữ nguyên mã cũ
      if (it.frame && it.frame !== "E-FR-01" && FRAME_IDS.has(it.frame)) return <VignetteFrame it={it} p={p} ctx={ctx} hand={hand} old={old} wrap={wrap} />;
      const w = it.w || 760, h = Math.round((w * 9) / 16), k = w / 1920;
      const fp = clamp01(p / 0.45), cp = clamp01((p - 0.35) / 0.4);
      // #143: live:true → cảnh cũ vẫn diễn (diễn viên đứng yên thở, không lời) thay vì chỉ còn khung + biểu tượng
      const live = old && it.live !== false; // #151: mặc định cảnh cũ vẫn hiện nhân vật (trước: chỉ còn biểu tượng trên nền xám → trông như mất hình)
      const M = (!old && cp > 0) || live ? getModule(it.module || "SCENE-01") : null;
      return (
        <div style={{ position: "absolute", left: b[0], top: b[1], width: w, ...wrap }}>
          <svg style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }} width={w} height={h}>
            <rect x={-6} y={-6} width={w + 12} height={h + 12} rx={14} fill="#fff" stroke={palOf(ctx).ink} strokeWidth={4} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - fp} />
          </svg>
          <div style={{ position: "absolute", left: 0, top: 0, width: w, height: h, borderRadius: 10, overflow: "hidden", opacity: old ? 1 : cp, background: old && !live ? "#eef1f5" : undefined }}>
            {M ? (
              <div style={{ width: 1920, height: 1080, transform: `scale(${k})`, transformOrigin: "0 0" }}>
                <M.Component data={it.data || {}} ctx={live ? { ...ctx, lines: [] } : ctx} />
              </div>
            ) : old && it.icon ? <Img src={staticFile(`illus/${it.icon}.svg`)} style={{ position: "absolute", left: w / 2 - h * 0.25, top: h * 0.2, width: h * 0.5, height: h * 0.5, opacity: 0.85 }} /> : null}
          </div>
          {it.caption && <div style={{ position: "absolute", left: 0, top: h + 14, width: w, textAlign: "center", fontFamily: hand, fontSize: it.capSize || 46, color: palOf(ctx).ink2, opacity: clamp01(p * 2), ...(palOf(ctx).dark ? darkFx(palOf(ctx)) : null) }}>{it.caption}</div>}
        </div>
      );
    }
    case "box": {
      const d = rectPath(b, seed);
      const hatch = it.hatch && dp > 0;
      const lines = [];
      const [hx, hy, hw, hh] = b, gap = it.gap || 16;
      if (hatch) for (let s = -hh; s < hw; s += gap) lines.push([hx + s, hy + hh, hx + s + hh, hy]); // gạch chéo 45°, cắt theo khung
      const nH = Math.floor(lines.length * clamp01((p - 0.35) / 0.65));
      const cid = `bx-${it.id}`;
      return svg(<>
        {it.fill && <path d={d} fill={colorOf(it.fill, ctx)} fillOpacity={0.25 * clamp01(p * 2)} />}
        {hatch && <defs><clipPath id={cid}><rect x={hx} y={hy} width={hw} height={hh} /></clipPath></defs>}
        <g clipPath={hatch ? `url(#${cid})` : undefined}>
          {lines.slice(0, nH).map((l, i) => <line key={i} x1={l[0]} y1={l[1]} x2={l[2]} y2={l[3]} stroke={col} strokeOpacity={0.45} strokeWidth={3} strokeLinecap="round" />)}
        </g>
        <path d={d} {...stroke} strokeDashoffset={1 - clamp01(hatch ? p / 0.35 : p)} strokeWidth={it.stroke || 5} />
      </>);
    }
    case "ring": return svg(<path d={ellipsePath(b, seed)} {...stroke} strokeWidth={it.stroke || 6} strokeDasharray={it.dash ? undefined : 1} style={it.dash ? { strokeDasharray: "0.025 0.018", opacity: clamp01(p * 1.5) } : undefined} />);
    case "arrow": { const a = arrowPath(it), L = 30, e = it.to;
      return svg(<>
        <path d={a.d} {...stroke} strokeWidth={it.stroke || 6} />
        {p > 0.9 && <path d={`M${e[0] - L * Math.cos(a.ang - 0.45)} ${e[1] - L * Math.sin(a.ang - 0.45)}L${e[0]} ${e[1]}L${e[0] - L * Math.cos(a.ang + 0.45)} ${e[1] - L * Math.sin(a.ang + 0.45)}`} fill="none" stroke={col} strokeWidth={it.stroke || 6} strokeLinecap="round" strokeLinejoin="round" />}
      </>); }
    case "line": return svg(<path d={"M" + it.pts.map((q) => q.join(" ")).join("L")} {...stroke} strokeWidth={it.stroke || 6} />);
    case "strike": case "underline": { const [x, y, w, h] = b; const yy = it.t === "strike" ? y + h * 0.55 : y + h + 4;
      return svg(<path d={`M${x - 8} ${yy + 3 * wob(seed, 1)}L${x + w + 8} ${yy + 3 * wob(seed, 2)}`} {...stroke} stroke={it.color ? col : it.t === "strike" ? palOf(ctx).coral : col} strokeWidth={it.stroke || 7} />); }
    case "marker": { const [x, y, w, h] = b;
      if (palOf(ctx).dark) // #144 bảng tối: chữ sáng không đọc được trên nền vàng → dải vàng đậm dưới chân chữ
        return <div style={{ position: "absolute", left: x - 6, top: y + h * 0.84, width: (w + 12) * (enter === "draw" ? easeOut(p) : 1), height: Math.max(10, h * 0.16), background: palOf(ctx).marker, opacity: 0.95, borderRadius: 8, ...wrap }} />;
      return <div style={{ position: "absolute", left: x - 6, top: y + h * 0.15, width: (w + 12) * (enter === "draw" ? easeOut(p) : 1), height: h * 0.8, background: COLORS.marker, opacity: 0.75, borderRadius: 6, ...wrap }} />; }
    case "badge": { const [x, y, w] = b, r = w / 2;
      return <>{svg(<path d={ellipsePath([x, y, w, w], seed)} {...stroke} stroke={colorOf(it.color || "accent", ctx)} strokeWidth={6} />)}
        <div style={{ position: "absolute", left: x, top: y, width: w, height: w, lineHeight: `${w}px`, textAlign: "center", fontFamily: hand, fontSize: r * 1.3, color: colorOf(it.color || "accent", ctx), opacity: clamp01((p - 0.5) * 3) }}>{it.n}</div></>; }
    default: return null;
  }
};

// ---------- #144 E-FR: kiểu khung ảnh (vignette) ----------
// nảy: 0 → quá 1,06 → 1
const popOver = (q) => { q = clamp01(q); return q < 0.7 ? 0.55 + 0.51 * easeOut(q / 0.7) : 1.06 - 0.06 * EASE_STD((q - 0.7) / 0.3); };
const MONO = "'Courier New', 'Liberation Mono', 'DejaVu Sans Mono', monospace";
const tornPoly = (W, H, seed, step = 26, amp = 9) => { // mép giấy xé: răng cưa không đều, theo seed
  const pts = [];
  const edge = (x0, y0, x1, y1, nx, ny, k0) => { const L = Math.hypot(x1 - x0, y1 - y0), n = Math.max(2, Math.round(L / step));
    for (let i = 0; i < n; i++) { const q = i / n, j = amp * (0.5 + 0.5 * wob(seed, k0 + i)); pts.push([x0 + (x1 - x0) * q + nx * j, y0 + (y1 - y0) * q + ny * j]); } };
  edge(0, 0, W, 0, 0, 1, 0); edge(W, 0, W, H, -1, 0, 100); edge(W, H, 0, H, 0, -1, 200); edge(0, H, 0, 0, 1, 0, 300);
  return `polygon(${pts.map((p) => `${p[0].toFixed(1)}px ${p[1].toFixed(1)}px`).join(",")})`;
};
const Tape = ({ x, y, w = 130, h = 38, rot = 0, q = 1 }) => q <= 0 ? null : (
  <div style={{ position: "absolute", left: x, top: y, width: w, height: h, transform: `rotate(${rot}deg) scale(${0.7 + 0.3 * easeOut(q)})`, opacity: clamp01(q * 2) * 0.92,
    background: "linear-gradient(180deg, rgba(246,236,200,.88), rgba(232,220,178,.82))", boxShadow: "0 2px 4px rgba(60,50,30,.18)",
    clipPath: "polygon(0 6%, 4% 0, 9% 7%, 15% 1%, 22% 6%, 30% 0, 100% 0, 100% 94%, 95% 100%, 89% 93%, 82% 100%, 74% 95%, 66% 100%, 0 100%)" }} />
);
const VignetteFrame = ({ it, p, ctx, hand, old, wrap }) => {
  const fr = it.frame, P = palOf(ctx), seed = seedOf(it.id);
  const w = it.w || 760, h = Math.round((w * 9) / 16);
  let cr = [0, 0, w, h];
  const bar = Math.round(w * 0.055);
  if (fr === "E-FR-10") { const ch = h - bar, cw = Math.round((ch * 16) / 9); cr = [Math.round((w - cw) / 2), bar, cw, ch]; }
  const k = cr[2] / 1920;
  let outer = {}, lid = null, cStyle = {}, cp = 1, back = null, front = null, under = null, fx = null, radius = 10;
  let cap = it.caption ? { top: h + 14, inside: false, color: P.ink2, fx: P.dark ? darkFx(P) : null, size: it.capSize || 46 } : null;
  switch (fr) {
    case "E-FR-02": { // polaroid + băng dính
      const q = easeOut(p / 0.45), rot = 2.6 * wob(seed, 3), dv = clamp01((p - 0.3) / 0.5);
      outer = { transform: `translateY(${(1 - q) * -50}px) rotate(${rot + (1 - q) * 7}deg) scale(${1 + (1 - q) * 0.12})`, opacity: clamp01(p * 4) };
      back = <div style={{ position: "absolute", left: -20, top: -20, width: w + 40, height: h + 20 + 86, background: "#fffef9", borderRadius: 4,
        boxShadow: `0 ${8 + (1 - q) * 20}px ${22 + (1 - q) * 24}px rgba(30,30,40,.30), 0 1px 2px rgba(0,0,0,.12)` }} />;
      radius = 2;
      cStyle = { filter: dv < 1 ? `sepia(${(1 - dv) * 0.7}) brightness(${1 + (1 - dv) * 0.25}) contrast(${0.8 + 0.2 * dv})` : undefined };
      fx = dv < 1 ? <div style={{ position: "absolute", inset: 0, background: "#d8d0bb", opacity: 1 - dv }} /> : null;
      const tq = clamp01((p - 0.6) / 0.25);
      front = <><Tape x={-48} y={-30} rot={-34} q={tq} /><Tape x={w - 82} y={-30} rot={34} q={clamp01(tq * 1.3 - 0.15)} /></>;
      if (cap) cap = { ...cap, inside: true, top: h + 12, color: COLORS.ink2, fx: null };
      break;
    }
    case "E-FR-03": { // TV cũ
      const q = easeOut(p / 0.3), s = clamp01((p - 0.28) / 0.45);
      outer = { transform: `scale(${0.92 + 0.08 * q})`, opacity: clamp01(p * 4) };
      back = <>
        <div style={{ position: "absolute", left: -24, top: -24, width: w + 24 + 88, height: h + 48, borderRadius: 30, background: "linear-gradient(160deg, #5d6470, #2b2f37)", boxShadow: "0 14px 30px rgba(20,24,32,.35), inset 0 2px 0 rgba(255,255,255,.15)" }} />
        <div style={{ position: "absolute", left: 0, top: 0, width: w, height: h, borderRadius: 26, background: "#0b0d10" }} />
        {[0.22, 0.48].map((yy, i) => <div key={i} style={{ position: "absolute", left: w + 20, top: h * yy, width: 40, height: 40, borderRadius: 20, background: "radial-gradient(circle at 35% 35%, #c3c9d2, #555c67 70%)", boxShadow: "0 2px 3px rgba(0,0,0,.4)" }} />)}
        <div style={{ position: "absolute", left: w + 20, top: h * 0.7, width: 40, height: h * 0.22, background: "repeating-linear-gradient(180deg, #1b1e24 0 4px, transparent 4px 9px)", borderRadius: 4 }} />
      </>;
      radius = 26;
      const sy = s < 0.4 ? 0.012 : easeOut((s - 0.4) / 0.6), sx = s < 0.4 ? easeOut(s / 0.4) : 1;
      cp = s > 0 ? 1 : 0;
      cStyle = s < 1 ? { transform: `scale(${sx}, ${sy})`, filter: `brightness(${1 + (1 - sy) * 2.5})` } : {};
      fx = <>
        <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(180deg, rgba(0,0,0,.08) 0 2px, transparent 2px 5px)" }} />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 70% at 30% 20%, rgba(255,255,255,.14), transparent 60%), radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(0,0,0,.28))" }} />
      </>;
      if (cap) cap = { ...cap, top: h + 34 };
      break;
    }
    case "E-FR-04": { // điện thoại nằm ngang
      const q = easeOut(p / 0.5), s = clamp01((p - 0.4) / 0.35);
      outer = { transform: `translateY(${(1 - q) * 260}px) rotate(${(1 - q) * -14}deg)`, opacity: clamp01(p * 3) };
      back = <>
        {[0.16, 0.3].map((xx, i) => <div key={i} style={{ position: "absolute", left: w * xx, top: -18, width: 74, height: 10, borderRadius: 5, background: "#3a3f48" }} />)}
        <div style={{ position: "absolute", left: -40, top: -13, width: w + 80, height: h + 26, borderRadius: 46, background: "#16191f", border: "3px solid #444b56", boxSizing: "border-box", boxShadow: "0 16px 30px rgba(20,24,32,.35)" }} />
        <div style={{ position: "absolute", left: -26, top: h / 2 - 7, width: 14, height: 14, borderRadius: 7, background: "#2b3444", boxShadow: "0 0 0 3px #0d0f13" }} />
        <div style={{ position: "absolute", left: 0, top: 0, width: w, height: h, borderRadius: 24, background: "#05070a" }} />
      </>;
      radius = 24; cp = s;
      cStyle = s < 1 ? { filter: `brightness(${0.4 + 0.6 * s})` } : {};
      fx = <div style={{ position: "absolute", inset: 0, background: "linear-gradient(125deg, rgba(255,255,255,.10) 0 18%, transparent 30%)" }} />;
      if (cap) cap = { ...cap, top: h + 24 };
      break;
    }
    case "E-FR-05": { // laptop
      const lq = easeOut(clamp01(p / 0.55)), s = clamp01((p - 0.45) / 0.35);
      outer = { opacity: clamp01(p * 4) };
      lid = { transform: `perspective(1800px) rotateX(${(1 - lq) * -86}deg)`, transformOrigin: `50% ${h + 16}px` };
      back = <>
        <div style={{ position: "absolute", left: -20, top: -20, width: w + 40, height: h + 36, borderRadius: "20px 20px 6px 6px", background: "#23272e", boxShadow: "inset 0 0 0 2px #3a404a" }} />
        <div style={{ position: "absolute", left: w / 2 - 5, top: -13, width: 10, height: 10, borderRadius: 5, background: "#3b4452" }} />
        <div style={{ position: "absolute", left: 0, top: 0, width: w, height: h, borderRadius: 6, background: "#05070a" }} />
      </>;
      under = <div style={{ position: "absolute", left: -78, top: h + 16, width: w + 156, height: 24, borderRadius: "4px 4px 16px 16px", background: "linear-gradient(180deg, #e3e6eb, #a9b0ba)", boxShadow: "0 10px 18px rgba(20,24,32,.3)" }}>
        <div style={{ position: "absolute", left: (w + 156) / 2 - 60, top: 0, width: 120, height: 8, borderRadius: "0 0 9px 9px", background: "#959dab" }} /></div>;
      radius = 6; cp = s;
      cStyle = s < 1 ? { filter: `brightness(${0.3 + 0.7 * s})` } : {};
      if (cap) cap = { ...cap, top: h + 50 };
      break;
    }
    case "E-FR-06": { // khung tròn (bầu dục)
      const r = easeOut(clamp01((p - 0.12) / 0.6)), fp = clamp01(p / 0.6), fp2 = clamp01((p - 0.3) / 0.6);
      radius = 0;
      cStyle = { clipPath: `ellipse(${r * 50}% ${r * 50}% at 50% 50%)` };
      front = <svg style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }} width={w} height={h}>
        <path d={ellipsePath([-24, -20, w + 48, h + 40], seed + 3)} fill="none" stroke={accentOf(ctx)} strokeWidth={3} strokeOpacity={0.75} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - fp2} strokeLinecap="round" />
        <path d={ellipsePath([-8, -8, w + 16, h + 16], seed)} fill="none" stroke={P.ink} strokeWidth={6} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - fp} strokeLinecap="round" />
      </svg>;
      if (cap) cap = { ...cap, top: h + 26 };
      break;
    }
    case "E-FR-07": { // giấy xé mép
      const q = easeOut(p / 0.45), rot = 1.8 * wob(seed, 5);
      outer = { transform: `translateX(${(1 - q) * -150}px) rotate(${rot - (1 - q) * 10}deg)`, opacity: clamp01(p * 4) };
      cp = clamp01((p - 0.3) / 0.4);
      back = <div style={{ position: "absolute", left: -26, top: -26, width: w + 52, height: h + 52, filter: "drop-shadow(0 8px 10px rgba(30,30,40,.30))" }}>
        <div style={{ width: "100%", height: "100%", background: "#fffdf6", clipPath: tornPoly(w + 52, h + 52, seed) }} /></div>;
      radius = 3;
      front = <Tape x={w / 2 - 80} y={-44} w={160} h={42} rot={-4 + 3 * wob(seed, 9)} q={clamp01((p - 0.55) / 0.25)} />;
      if (cap) cap = { ...cap, top: h + 34 };
      break;
    }
    case "E-FR-08": { // dải phim
      const q = easeOut(p / 0.6);
      outer = { transform: `translateX(${(1 - q) * w * 0.6}px)`, opacity: clamp01(p * 3) };
      const holes = (top) => <div style={{ position: "absolute", left: -36, top, width: w + 72, height: 14, background: "repeating-linear-gradient(90deg, transparent 0 13px, rgba(250,248,240,.92) 13px 31px, transparent 31px 44px)", borderRadius: 3 }} />;
      back = <><div style={{ position: "absolute", left: -36, top: -30, width: w + 72, height: h + 60, background: "#151515", borderRadius: 6, boxShadow: "0 10px 22px rgba(0,0,0,.3)" }} />{holes(-22)}{holes(h + 8)}</>;
      radius = 2;
      const flick = p > 0.55 && p < 0.85 ? (Math.floor(p * 40) % 2 ? 0.7 : 1) : 1;
      cp = clamp01((p - 0.2) / 0.3) * flick;
      fx = <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(40,25,10,.25))" }} />;
      if (cap) cap = { ...cap, top: h + 40 };
      break;
    }
    case "E-FR-09": { // ô truyện tranh
      const q = clamp01(p / 0.5), s = popOver(q);
      outer = { transform: `scale(${s}) rotate(${(1 - easeOut(q)) * -4}deg)`, opacity: clamp01(p * 5) };
      cp = clamp01((p - 0.2) / 0.2);
      radius = 0;
      back = <div style={{ position: "absolute", left: 6, top: 6, width: w + 12, height: h + 12, background: "#111" }} />;
      front = <div style={{ position: "absolute", left: -8, top: -8, width: w + 16, height: h + 16, border: "9px solid #111", boxSizing: "border-box" }} />;
      const fl = clamp01(1 - Math.abs(p - 0.45) / 0.12);
      fx = fl > 0 ? <div style={{ position: "absolute", inset: 0, background: "#fff", opacity: fl * 0.85 }} /> : null;
      if (cap) {
        const cq = clamp01((p - 0.5) / 0.25);
        front = <>{front}<div style={{ position: "absolute", left: -16, top: -30, padding: "2px 18px", background: "#ffe066", border: "5px solid #111", boxShadow: "5px 5px 0 #111",
          fontFamily: hand, fontSize: Math.round((it.capSize || 46) * 0.85), color: "#111", whiteSpace: "nowrap", transform: `rotate(-1.5deg) scale(${popOver(cq)})`, transformOrigin: "0 0", opacity: clamp01(cq * 4) }}>{it.caption}</div></>;
        cap = null;
      }
      break;
    }
    case "E-FR-10": { // cửa sổ trình duyệt
      const q = easeOut(p / 0.35), lq = clamp01((p - 0.25) / 0.4);
      outer = { transform: `scale(${0.9 + 0.1 * q})`, opacity: q };
      cp = clamp01((p - 0.55) / 0.3);
      radius = 0;
      back = <>
        <div style={{ position: "absolute", left: -3, top: -3, width: w + 6, height: h + 6, borderRadius: 14, background: "#0f1115", border: "2px solid #cfd5de", boxShadow: "0 14px 32px rgba(20,24,32,.28)" }} />
        <div style={{ position: "absolute", left: 0, top: 0, width: w, height: bar, borderRadius: "12px 12px 0 0", background: "#eef1f5", borderBottom: "1px solid #d6dbe3" }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => <div key={i} style={{ position: "absolute", left: bar * 0.4 + i * bar * 0.42, top: bar / 2 - bar * 0.13, width: bar * 0.26, height: bar * 0.26, borderRadius: "50%", background: c }} />)}
          <div style={{ position: "absolute", left: w * 0.22, top: bar * 0.2, width: w * 0.56, height: bar * 0.6, borderRadius: bar, background: "#fff", border: "1px solid #d6dbe3", boxSizing: "border-box",
            fontFamily: FONT, fontSize: bar * 0.34, lineHeight: `${bar * 0.6 - 2}px`, color: COLORS.muted, paddingLeft: bar * 0.4, whiteSpace: "nowrap", overflow: "hidden" }}>{it.url || "detpro.vercel.app"}</div>
          {lq > 0 && lq < 1 && <div style={{ position: "absolute", left: 0, top: bar - 4, width: w * lq, height: 4, background: accentOf({ ...ctx, pal: LIGHT }) }} />}
        </div>
      </>;
      break;
    }
    default: break;
  }
  const live = old && it.live !== false; // #151
  const M = (!old && cp > 0) || live ? getModule(it.module || "SCENE-01") : null;
  const content = (
    <div style={{ position: "absolute", left: cr[0], top: cr[1], width: cr[2], height: cr[3], borderRadius: radius, overflow: "hidden", opacity: old ? 1 : cp, background: old && !live ? "#eef1f5" : undefined, ...cStyle }}>
      {M ? (
        <div style={{ width: 1920, height: 1080, transform: `scale(${k})`, transformOrigin: "0 0" }}>
          <M.Component data={it.data || {}} ctx={live ? { ...ctx, lines: [] } : ctx} />
        </div>
      ) : old && it.icon ? <Img src={staticFile(`illus/${it.icon}.svg`)} style={{ position: "absolute", left: cr[2] / 2 - cr[3] * 0.25, top: cr[3] * 0.2, width: cr[3] * 0.5, height: cr[3] * 0.5, opacity: 0.85 }} /> : null}
      {fx}
    </div>
  );
  const capEl = cap && <div style={{ position: "absolute", left: 0, top: cap.top, width: w, textAlign: "center", fontFamily: hand, fontSize: cap.size, color: cap.color, opacity: clamp01(p * 2), ...(cap.fx || null) }}>{it.caption}</div>;
  return (
    <div style={{ position: "absolute", left: it.x, top: it.y, width: w, ...wrap }}>
      <div style={{ position: "absolute", left: 0, top: 0, width: w, height: h, transformOrigin: "50% 50%", ...outer }}>
        {under}
        <div style={{ position: "absolute", left: 0, top: 0, width: w, height: h, ...(lid || null) }}>{back}{content}{front}</div>
        {cap?.inside && capEl}
      </div>
      {cap && !cap.inside && capEl}
    </div>
  );
};

// ---------- #144 E-NOTE: kiểu ghi chú cho text/illus ----------
const NoteItem = ({ it, p, byId, ctx, hand, t, old, pk }) => {
  const st = it.style, P = palOf(ctx), seed = seedOf(it.id);
  const b = bboxOf(it, byId), [x, y, w, h] = b;
  const size = it.t === "text" ? it.size || 52 : Math.max(60, (it.size || 120) * 0.45);
  const base = { ...it, style: undefined };
  const lightCtx = { ...ctx, pal: LIGHT };
  const body = (q, c = lightCtx, more = {}) => <Item it={{ ...base, ...more }} p={q} byId={byId} ctx={c} hand={hand} t={t} old={old} />;
  const parkedCard = pk && pk.q < 1 && (pk.mode === "lower3" || pk.mode === "corner");
  const enterWrap = (it.enter === "fade" ? { opacity: p } : null);
  switch (st) {
    case "E-NOTE-02": { // giấy nhớ
      const pad = size * 0.42, q = clamp01(p / 0.25), rot = 2.5 * wob(seed, 1);
      return (
        <div style={{ position: "absolute", left: 0, top: 0, transformOrigin: `${x + w / 2}px ${y + h / 2}px`, transform: `rotate(${rot}deg)`, ...enterWrap }}>
          <div style={{ position: "absolute", left: x - pad, top: y - pad * 0.8, width: w + 2 * pad, height: h + 1.6 * pad, background: it.paper || "#fff27a",
            backgroundImage: "linear-gradient(180deg, rgba(0,0,0,.06) 0 14%, transparent 14%), linear-gradient(135deg, transparent 88%, rgba(0,0,0,.07) 88%)",
            boxShadow: `0 ${6 + 10 * (1 - q)}px ${14 + 10 * (1 - q)}px rgba(50,40,10,.28)`, borderRadius: 3,
            transform: `scale(${popOver(q)})`, transformOrigin: "50% 0", opacity: clamp01(q * 4) }} />
          {body(clamp01((p - 0.22) / 0.78))}
        </div>
      );
    }
    case "E-NOTE-03": { // con dấu
      const col = it.color ? colorOf(it.color, ctx) : P.dark ? "#ff8a78" : "#c8322a";
      const q = clamp01(p / 0.3), land = easeOut(q), rs = -4 + 2 * wob(seed, 2);
      const pad = size * 0.32;
      const grunge = { WebkitMaskImage: "radial-gradient(circle at 40% 60%, transparent 0 1.3px, #000 1.9px), radial-gradient(circle at 70% 30%, transparent 0 1px, #000 1.6px)", WebkitMaskSize: "11px 9px, 17px 13px", WebkitMaskComposite: "source-in", maskComposite: "intersect" };
      const isTxt = it.t === "text";
      return (
        <div style={{ position: "absolute", left: 0, top: 0, transformOrigin: `${x + w / 2}px ${y + h / 2}px`, transform: `rotate(${rs}deg) scale(${1.9 - 0.9 * land})`, opacity: q < 0.05 ? 0 : 0.35 + 0.57 * land, ...enterWrap }}>
          <div style={{ position: "absolute", left: x - pad, top: y - pad * 0.45, width: w + 2 * pad, height: h + pad * 0.9, border: `${Math.round(size * 0.15)}px double ${col}`, borderRadius: isTxt ? size * 0.2 : "50%", boxSizing: "border-box", ...grunge }} />
          {isTxt ? <div style={{ position: "absolute", left: x, top: y + size * 0.06, width: w, textAlign: "center", fontFamily: FONT, fontWeight: 800, fontSize: size * 0.84, lineHeight: 1.2, letterSpacing: "0.03em", color: col, whiteSpace: "nowrap", opacity: 0.92 }}>{String(it.text || "").toLocaleUpperCase("vi")}</div>
            : <Img src={staticFile(`illus/${it.name}.svg`)} style={{ position: "absolute", left: x + w * 0.12, top: y + h * 0.12, width: w * 0.76, height: h * 0.76, filter: "grayscale(1) contrast(1.4)", opacity: 0.8, ...grunge }} />}
        </div>
      );
    }
    case "E-NOTE-04": { // bút highlight quét
      if (it.t !== "text") break;
      const bq = easeOut(clamp01(p / 0.6));
      const c = it.hlColor || "#ffe14d";
      return (
        <div style={{ position: "absolute", left: 0, top: 0, ...enterWrap }}>
          <div style={{ position: "absolute", left: x - 12, top: y + h * 0.12, width: (w + 24) * bq, height: h * 0.8, background: c, opacity: 0.88, borderRadius: "6px 16px 9px 18px", transform: "rotate(-0.8deg)", transformOrigin: "0 50%" }} />
          {body(clamp01((p - 0.12) / 0.88))}
        </div>
      );
    }
    case "E-NOTE-05": { // chữ phấn: hiện giật 12 hình/giây, nét lấm tấm
      if (it.t !== "text") break;
      const ps = Math.ceil(p * 14) / 14;
      const col = colorOf(it.color, ctx);
      return (
        <div style={{ position: "absolute", left: x, top: y, fontFamily: hand, fontSize: size * 1.02, lineHeight: 1.15, color: col, whiteSpace: "nowrap", letterSpacing: "0.01em",
          clipPath: `inset(-20% ${(1 - ps) * 100}% -30% -2%)`, textShadow: `0 0 1px ${col}, 0 0 4px ${col}66`, opacity: 0.94,
          WebkitMaskImage: "repeating-linear-gradient(-38deg, #000 0 2px, rgba(0,0,0,.55) 2px 3px, #000 3px 5px), radial-gradient(circle at 50% 50%, rgba(0,0,0,.6) 0 1px, #000 1.5px)", WebkitMaskSize: "auto, 7px 5px", ...enterWrap }}>
          {hlParts(it, ctx, t, old).map((s, i) => s.q == null ? <span key={i}>{s.s}</span> : P.dark ? <HlDark key={i} s={s.s} q={s.q} /> : <HlLight key={i} s={s.s} q={s.q} />)}
        </div>
      );
    }
    case "E-NOTE-06": { // đánh máy
      if (it.t !== "text") break;
      const text = String(it.text || ""), n = Math.floor(clamp01((p - 0.12) / 0.86) * text.length + 1e-6);
      const sq = clamp01(p / 0.12), rot = 0.6 * wob(seed, 4);
      const parts = hlParts(it, ctx, t, old);
      let left = n;
      const shown = parts.map((s) => { const k = Math.max(0, Math.min(s.s.length, left)); left -= k; return { ...s, s: s.s.slice(0, k) }; });
      const caret = p < 1;
      return (
        <div style={{ position: "absolute", left: 0, top: 0, transformOrigin: `${x}px ${y + h / 2}px`, transform: `rotate(${rot}deg)`, ...enterWrap }}>
          <div style={{ position: "absolute", left: x - 18, top: y - 2, width: (w + 36) * easeOut(sq), height: h + 4, background: "#f8f4e8", boxShadow: "0 3px 8px rgba(40,35,20,.22)",
            backgroundImage: "linear-gradient(180deg, transparent 92%, rgba(120,100,60,.12) 92%)" }} />
          <div style={{ position: "absolute", left: x, top: y + size * 0.12, fontFamily: MONO, fontWeight: 700, fontSize: size * 0.95, lineHeight: 1.15, color: inkOnPaper(it.color, ctx), whiteSpace: "pre", opacity: sq >= 1 ? 1 : 0 }}>
            {shown.map((s, i) => s.q == null ? <span key={i}>{s.s}</span> : <HlLight key={i} s={s.s} q={s.q} />)}
            {caret && <span style={{ display: "inline-block", width: size * 0.5, height: size * 0.9, marginLeft: 2, verticalAlign: "-0.12em", background: COLORS.ink, opacity: 0.75 }} />}
          </div>
        </div>
      );
    }
    case "E-NOTE-07": { // bong bóng chú thích có dây chỉ
      const padX = size * 0.45, padY = size * 0.3, q = clamp01(p / 0.3), lq = clamp01((p - 0.45) / 0.35);
      const R = [x - padX, y - padY, w + 2 * padX, h + 2 * padY], C = [R[0] + R[2] / 2, R[1] + R[3] / 2];
      let T = null;
      if (Array.isArray(it.to)) T = it.to;
      else if (it.to && byId[it.to]) { const o = byId[it.to]; const ob = o.t === "vignette" ? [o.x, o.y, o.w || 760, Math.round(((o.w || 760) * 9) / 16)] : bboxOf(o, byId);
        const [fx, fy] = it.toAt || [0.5, 0.5]; T = [ob[0] + ob[2] * fx, ob[1] + ob[3] * fy]; }
      if (T && pk) T = [pk.ox + (T[0] - pk.ox - pk.dx) / pk.k, pk.oy + (T[1] - pk.oy - pk.dy) / pk.k]; // đang nằm chỗ tạm: dây vẫn chỉ đúng chỗ thật
      let S = null;
      if (T) { const dx = T[0] - C[0], dy = T[1] - C[1], s = Math.min(Math.abs(R[2] / 2 / (dx || 1e-6)), Math.abs(R[3] / 2 / (dy || 1e-6))); S = [C[0] + dx * s, C[1] + dy * s]; }
      const sw = Math.max(4, size * 0.09), ink = COLORS.ink2;
      return (
        <div style={{ position: "absolute", left: 0, top: 0, ...enterWrap }}>
          {S && lq > 0 && <svg style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }} width={1} height={1}>
            <path d={`M${S[0]} ${S[1]}Q${(S[0] + T[0]) / 2 + (T[1] - S[1]) * 0.12} ${(S[1] + T[1]) / 2 - (T[0] - S[0]) * 0.12} ${T[0]} ${T[1]}`} fill="none" stroke={P.dark ? "#ffffff" : ink} strokeWidth={sw} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - lq} />
            {lq >= 1 && <circle cx={T[0]} cy={T[1]} r={sw * 2.4 * popOver(clamp01((p - 0.8) / 0.2))} fill={accentOf(lightCtx)} stroke="#fff" strokeWidth={sw * 0.8} />}
          </svg>}
          <div style={{ position: "absolute", left: R[0], top: R[1], width: R[2], height: R[3], borderRadius: Math.min(R[3] / 2, size * 0.7), background: "#ffffff", border: `${sw}px solid ${ink}`, boxSizing: "border-box",
            boxShadow: "0 6px 14px rgba(20,24,32,.18)", transform: `scale(${popOver(q)})`, transformOrigin: S ? `${S[0] - R[0]}px ${S[1] - R[1]}px` : "50% 50%", opacity: clamp01(q * 4) }} />
          {body(clamp01((p - 0.2) / 0.6))}
        </div>
      );
    }
    case "E-NOTE-08": case "E-NOTE-09": { // dải lower-third / thẻ — trên bảng
      if (parkedCard) return body(p, ctx);
      const pad = size * 0.32, accent = accentOf(lightCtx);
      if (st === "E-NOTE-08") {
        const sq = Math.floor(clamp01(p / 0.35) * 6) / 6, barW = size * 0.22;
        return (
          <div style={{ position: "absolute", left: 0, top: 0, ...enterWrap }}>
            <div style={{ position: "absolute", left: x - pad - barW, top: y - pad * 0.4, width: w + 2 * pad + barW, height: h + pad * 0.8, background: "#ffffff", boxShadow: "0 6px 14px rgba(20,24,32,.16)", clipPath: `inset(0 ${(1 - sq) * 100}% 0 0)` }}>
              <div style={{ position: "absolute", left: 0, top: 0, width: barW, height: "100%", background: accent }} />
            </div>
            {body(clamp01((p - 0.25) / 0.75))}
          </div>
        );
      }
      const q = clamp01(p / 0.3);
      return (
        <div style={{ position: "absolute", left: 0, top: 0, ...enterWrap }}>
          <div style={{ position: "absolute", left: x - pad, top: y - pad, width: w + 2 * pad, height: h + 2 * pad, background: "#ffffff", borderRadius: 14, borderTop: `${size * 0.16}px solid ${accent}`, boxSizing: "border-box",
            boxShadow: "0 10px 24px rgba(20,24,32,.22)", transform: `scale(${popOver(q)})`, transformOrigin: "0 0", opacity: clamp01(q * 4) }} />
          {body(clamp01((p - 0.25) / 0.75))}
        </div>
      );
    }
    default: break;
  }
  return body(p, ctx); // kiểu không hợp phần tử này → vẽ như mặc định
};

// ---------- bàn tay Đét cầm bút (vẽ bằng code, ngòi bút ở gốc toạ độ) ----------
// #144 tool: "marker" (mặc định) | "chalk" (bảng phấn: viên phấn trắng) | "light" (bảng tối: bút thân sáng)
const DetPaw = ({ x, y, tilt = 0, tool = "marker" }) => (
  <svg width={300} height={300} viewBox="-20 -280 300 300" style={{ position: "absolute", left: x - 20, top: y - 280, overflow: "visible", transform: `rotate(${tilt}deg)`, transformOrigin: "20px 280px",
    filter: tool === "marker" ? undefined : "drop-shadow(0 0 6px rgba(0,0,0,.45))" }}>
    {tool === "chalk" ? <>
      {/* viên phấn */}
      <path d="M2 -2 L10 -24 L96 -160 L120 -146 L34 -10 Z" fill="#f4f1e8" />
      <path d="M2 -2 L10 -24 L34 -10 Z" fill="#d9d4c6" />
    </> : <>
      {/* bút dạ */}
      <path d="M0 0 L14 -30 L120 -200 L146 -184 L40 -14 Z" fill={tool === "light" ? "#dfe6ef" : "#2b3650"} />
      <path d="M0 0 L14 -30 L40 -14 Z" fill={tool === "light" ? "#9fb2c8" : "#172033"} />
      <path d="M118 -197 L146 -180 L166 -212 L138 -229 Z" fill="#e5533d" />
    </>}
    {/* bàn tay tê tê: lòng bàn tay + vảy + móng */}
    <ellipse cx="118" cy="-120" rx="70" ry="54" fill="#d4895a" transform="rotate(-32 118 -120)" />
    <path d="M70 -150 q30 -26 70 -14 q-24 10 -36 30 z" fill="#b8693d" />
    <path d="M120 -168 q26 -12 52 4 q-22 6 -30 24 z" fill="#b8693d" />
    <path d="M150 -100 q24 0 40 20 q-26 -2 -40 10 z" fill="#b8693d" />
    <path d="M58 -112 q-22 2 -30 16 q16 -6 32 2" fill="#8a4524" />
    <path d="M62 -88 q-20 6 -24 22 q14 -10 30 -6" fill="#8a4524" />
    <path d="M78 -70 q-12 14 -10 30 q8 -14 22 -18" fill="#8a4524" />
    <ellipse cx="96" cy="-104" rx="22" ry="16" fill="#f7e4c8" opacity="0.9" transform="rotate(-32 96 -104)" />
  </svg>
);

// ---------- module ----------
// #143: phần nhìn thấy (0–1) của một hộp trên bảng dưới camera c (khung 1920×1080)
const visFrac = (b, c) => {
  const bw = Math.max(8, b[2]), bh = Math.max(8, b[3]); // đường thẳng ngang/dọc có hộp dày 0 → nới 8 px
  const x0 = (b[0] + (b[2] - bw) / 2) * c.z + c.tx, y0 = (b[1] + (b[3] - bh) / 2) * c.z + c.ty, x1 = x0 + bw * c.z, y1 = y0 + bh * c.z;
  const iw = Math.max(0, Math.min(1920, x1) - Math.max(0, x0)), ih = Math.max(0, Math.min(1080, y1) - Math.max(0, y0));
  return (iw * ih) / Math.max(1, (x1 - x0) * (y1 - y0));
};
export const PARK_MS = 900; // thời gian Đét kéo tờ giấy nhớ về chỗ
const FOLLOW = new Set(["text", "illus", "icon", "badge", "box", "arrow", "line", "ring", "strike", "underline", "marker"]);
/** Tờ giấy nhớ: vị trí/tỉ lệ ở thời điểm t → { dx, dy, k, ox, oy, q } (q = 0 đang nằm chỗ tạm … 1 đã về chỗ). */
export const parkAt = (pk, t) => {
  const q = EASE_STD(clamp01((t - pk.t1) / PARK_MS));
  const ax = pk.A[0] + (pk.B0[0] - pk.A[0]) * q, ay = pk.A[1] + (pk.B0[1] - pk.A[1]) * q, k = pk.k + (1 - pk.k) * q;
  return { dx: ax - pk.B0[0], dy: ay - pk.B0[1], k, ox: pk.B0[0], oy: pk.B0[1], q, ax, ay };
};
const parkPt = (pk, t, [x, y]) => { const P = parkAt(pk, t); return [P.ax + (x - pk.B0[0]) * P.k, P.ay + (y - pk.B0[1]) * P.k]; };
/** Lập lịch phần tử + camera. #143 camera bám nét: khi Đét ghi chú mà chỗ ghi đang nằm ngoài khung
 *  (vd. camera đang cận khung ảnh nhân vật diễn) → camera lùi ra vừa đủ thấy cả khung ảnh lẫn chỗ đang ghi;
 *  khi đang lướt sang ô mới → chờ lướt xong mới viết. data.follow === false để tắt. */
export const planBoard = (data, lines, board) => {
  const plan = planItems(data, lines || [], data._prior || []);
  const mk = (s, i) => ({ ...s, t: s.t ?? (i === 0 ? 0 : resolveAt(s.at, lines || []) ?? 0), move: i === 0 ? "cut" : s.move, cam: s.cam || camOf(s, board, plan.byId) });
  let shots = (data.shots?.length ? data.shots : [{ at: 0, fit: "all", move: "cut" }]).map(mk);
  if (data.follow === false) return { ...plan, shots };
  const cellOf = (b) => {
    const cx = b[0] + b[2] / 2, cy = b[1] + b[3] / 2;
    return Object.keys(board.frames || {}).find((k) => { const f = board.frames[k]; return cx >= f[0] && cx <= f[0] + f[2] && cy >= f[1] && cy <= f[1] + f[3]; });
  };
  // #143c: giữ cận cảnh. Ghi chú mới viết lúc camera đang cận (chỗ thật nằm ngoài khung) → viết đè lên màn hình
  // sát mép gần chỗ thật; khi camera lùi ra, Đét kéo cụm ghi chú về đúng chỗ trên bảng.
  // Nét phụ (vòng, gạch, mũi tên…) cho chỗ ngoài khung → chờ kéo xong mới vẽ.
  const CONTENT = new Set(["text", "illus", "icon", "badge"]);
  const stableAt = (s) => s.t + (s.move === "cut" ? 0 : s.ms || 800);
  const delayed = [], parks = [];
  for (const x of plan.items) {
    if (!FOLLOW.has(x.it.t)) continue;
    const b = bboxOf(x.it, plan.byId);
    // thấy được lúc đang viết và ~1 s sau khi viết xong (đủ để đọc) không?
    const probe = () => [0.1, 0.5, 1, 1.4].map((q) => { const ms = q > 1 ? x.t0 + x.dur + 900 : x.t0 + x.dur * q; return [visFrac(b, cameraAtT(shots, ms)), ms]; }).sort((a, c) => a[0] - c[0])[0];
    let [v, wt] = probe();
    if (v >= 0.85) continue;
    // đang (hoặc sắp, ≤ 500 ms) lướt sang chỗ mới mà đích lướt nhìn thấy nét → viết sau khi lướt xong
    const pan = [...shots].reverse().find((s) => s.t <= x.t0 + 500 && s.move !== "cut");
    const panEnd = pan ? pan.t + (pan.ms || 800) : -1;
    if (pan && x.t0 < panEnd && visFrac(b, pan.cam) >= 0.85) { x.t0 = panEnd - 150; if (probe()[0] >= 0.85) continue; [v, wt] = probe(); }
    const act = [...shots].reverse().find((s) => s.t <= wt) || shots[0];
    if (!Array.isArray(act.fit)) {
      // #145: sắp có shot kịch bản (≤ 1,5 s) nhìn thấy nét → chờ shot đó lướt xong rồi mới viết, không chèn nhịp tự động
      const soon = shots.find((s) => s.t > x.t0 && s.t - x.t0 <= 1500 && !s.auto && visFrac(b, s.cam) >= 0.85);
      if (soon) { x.t0 = soon.t + (soon.move === "cut" ? 0 : soon.ms || 800) - 150; continue; }
      // không phải cận cảnh → camera về ô chứa nét
      const s = mk({ t: Math.max(act.t + 50, x.t0 - 350), fit: cellOf(b) || "all", ms: 600, auto: true }, 1);
      shots = [...shots, s].sort((a, c) => a.t - c.t);
      continue;
    }
    // lúc camera lùi ra thấy chỗ thật; không có → tự thêm một nhịp lùi về ô
    let rel = shots.find((s) => s.t > wt && visFrac(b, s.cam) >= 0.85);
    if (!rel) {
      rel = mk({ t: x.t0 + x.dur + 1500, fit: cellOf(b) || "all", ms: 700, auto: true }, 1);
      shots = [...shots, rel].sort((a, c) => a.t - c.t);
    }
    if (!CONTENT.has(x.it.t)) { delayed.push([x, rel]); continue; }
    parks.push({ x, b, rel, act });
  }
  // #143c: ghi chú ĐÈ LÊN MÀN HÌNH lúc cận cảnh — giữ nguyên cỡ (đang cận nên chữ còn to hơn) và bố cục cụm ghi chú,
  // đẩy cả cụm vào trong khung theo hướng gần chỗ thật nhất (được phép đè lên khung ảnh, có nền trắng mờ cho dễ đọc);
  // camera lùi ra thì Đét kéo cả cụm về đúng chỗ trên bảng.
  const groups = new Map();
  for (const g of parks) groups.set(g.act, [...(groups.get(g.act) || []), g]);
  for (const [act, list] of groups) {
    const pad = 14;
    const U = [Math.min(...list.map((g) => g.b[0])), Math.min(...list.map((g) => g.b[1]))];
    U.push(Math.max(...list.map((g) => g.b[0] + g.b[2])) - U[0], Math.max(...list.map((g) => g.b[1] + g.b[3])) - U[1]);
    // #143d: bố cục một phần ba — GIỮ độ cận, chỉ dời khung để cụm đang cận (khung ảnh) nằm ở 1/3 phía bên kia,
    // khoảng trống 2/3 phía chỗ ghi chú thật thành "lead room" cho chữ (chữ to, không đè lên nhân vật).
    // #144: chế độ ghi chú lúc cận (E-NOTE-08 lower3 / -09 corner / -10 glass); mặc định "thirds" như #143d
    let mode = CLOSE_NOTE[data.closeNote] || CLOSE_NOTE[list.map((g) => g.x.it.style).find((st) => st && st !== "thirds" && CLOSE_NOTE[st])] || "thirds";
    // #144: dải dưới / thẻ góc chỉ hợp cụm ghi chú nhỏ — cụm cao/rộng (chữ sẽ < 60% cỡ) → về "thirds"
    if (mode === "lower3" || mode === "corner") {
      const c0 = act.cam, box = mode === "lower3" ? [1160, 196] : [700, 440];
      if (Math.min(1, (box[0] / c0.z - 28) / U[2], (box[1] / c0.z - 28) / U[3]) < 0.6) mode = "thirds";
    }
    const thirds = mode === "thirds" && data.thirds !== false;
    let c = act.cam;
    if (thirds) {
      const fb = camBoxOf(act.fit, board, plan.byId).b, notesLeft = U[0] + U[2] / 2 < fb[0] + fb[2] / 2;
      const fw = fb[2] * c.z, M = 50;
      let sx = notesLeft ? 1920 - M - fw : M; // mép trái khung ảnh trên màn: dồn hẳn sang bên kia
      sx = Math.max(M, Math.min(1920 - M - fw, notesLeft ? Math.max(sx, 1920 * 2 / 3 - fw / 2) : Math.min(sx, 1920 / 3 - fw / 2)));
      c = act.cam = { ...c, tx: sx - fb[0] * c.z };
    }
    const m = 60 / c.z;
    let V = [-c.tx / c.z + m, -c.ty / c.z + m, 1920 / c.z - 2 * m, 1080 / c.z - 2 * m];
    const fb0 = camBoxOf(act.fit, board, plan.byId).b, notesLeft0 = U[0] + U[2] / 2 < fb0[0] + fb0[2] / 2;
    const scr = (r) => [(r[0] - c.tx) / c.z, (r[1] - c.ty) / c.z, r[2] / c.z, r[3] / c.z]; // hộp trên màn → toạ độ bảng
    if (mode === "lower3") V = scr([96, 690, 1160, 196]);
    else if (mode === "corner") V = scr(notesLeft0 ? [60, 100, 700, 440] : [1920 - 60 - 700, 100, 700, 440]);
    else if (mode === "glass") { // viết thẳng lên "kính" phủ khung ảnh: nửa khung phía chỗ ghi thật
      const x0 = Math.max(60, fb0[0] * c.z + c.tx), y0 = Math.max(120, fb0[1] * c.z + c.ty);
      const x1 = Math.min(1860, (fb0[0] + fb0[2]) * c.z + c.tx), y1 = Math.min(880, (fb0[1] + fb0[3]) * c.z + c.ty);
      V = scr([x0 + 10, y0 + 10, x1 - x0 - 20, Math.max(160, (y1 - y0) * 0.5)]); // nửa trên khung (thường là tường/nền)
    }
    if (thirds) { // chỉ dùng phần trống bên cạnh khung ảnh
      const fb = camBoxOf(act.fit, board, plan.byId).b, g = 40 / c.z;
      const L = [V[0], V[1], fb[0] - g - V[0], V[3]], R = [fb[0] + fb[2] + g, V[1], V[0] + V[2] - (fb[0] + fb[2] + g), V[3]];
      const side = U[0] + U[2] / 2 < fb[0] + fb[2] / 2 ? L : R;
      if (side[2] > 200 / c.z) V = side;
    }
    const k = Math.min(1, (V[2] - 2 * pad) / U[2], (V[3] - 2 * pad) / U[3]);
    const w = U[2] * k, h = U[3] * k;
    const clampIn = (v, lo, len, size) => Math.max(lo + pad, Math.min(lo + len - size - pad, v));
    let A = [clampIn(U[0], V[0], V[2], w), clampIn(U[1], V[1], V[3], h)];
    if (mode === "lower3") A = [V[0] + pad, V[1] + (V[3] - h) / 2]; // dải dưới: canh trái, giữa dải
    if (mode === "corner") A = [notesLeft0 ? V[0] + pad : V[0] + V[2] - w - pad, V[1] + pad]; // thẻ sát góc
    const rel = Math.min(...list.map((g) => g.rel.t));
    list.forEach(({ x }, i) => {
      x.park = { A, B0: [U[0], U[1]], k, w: U[2], h: U[3], pad, rel, card: i === 0, t0card: list[0].x.t0, rot: 0, style: mode === "thirds" ? "overlay" : mode, z: c.z, left: notesLeft0, fb: fb0 };
    });
  }
  // nhiều tờ cùng kéo về: so le 260 ms; nét phụ vẽ sau khi tờ cuối về chỗ
  const byRel = new Map();
  for (const x of plan.items) if (x.park) byRel.set(x.park.A, Math.max(byRel.get(x.park.A) || 0, x.park.rel, x.t0 + x.dur + 200));
  for (const x of plan.items) if (x.park) x.park.t1 = byRel.get(x.park.A); // cả tờ kéo về một lượt
  for (const [x, rel] of delayed) {
    const last = Math.max(rel.t, ...plan.items.filter((y) => y.park && y.park.rel === rel.t).map((y) => y.park.t1 + PARK_MS));
    x.t0 = Math.max(x.t0, last + 150);
  }
  plan.items.sort((a, c) => a.t0 - c.t0);
  return { ...plan, shots };
};
const usePlan = (data, ctx) => useMemo(() => {
  const board = ctx.boards?.[data.board] || { size: [3456, 1540], frames: {} };
  return { board, ...planBoard(data, ctx.lines || [], board) };
}, [data, ctx.lines, ctx.boards]);

const Board01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = (frame / fps) * 1000;
  const { board, items, old, byId, shots } = usePlan(data, ctx);
  const cam = cameraAtT(shots, t);
  const handFont = board.font === "base" ? FONT : HAND_FONT;
  const toScreen = ([x, y]) => [x * cam.z + cam.tx, y * cam.z + cam.ty];
  // bàn tay: đang vẽ → ở đầu nét; nghỉ ngắn → lướt sang chỗ kế; nghỉ dài → rút ra mép dưới phải
  let handXY = null;
  if ((board.hand || "det-paw") !== "none") {
    const draws = items.filter((x) => (x.it.enter || "draw") === "draw" || x.it.enter === "hand-in");
    const OFF = [1560, 1240];
    const act = draws.find((x) => t >= x.t0 && t <= x.t0 + x.dur);
    const tip = (x, q, tt) => { const p0 = tipOf(x.it, bboxOf(x.it, byId), q); return toScreen(x.park ? parkPt(x.park, tt, p0) : p0); };
    const startTip = (x) => tip(x, 0, x.t0);
    const endTip = (x) => tip(x, 1, x.t0 + x.dur);
    // #143b: đang kéo tờ giấy nhớ về chỗ → tay Đét cầm mép trên tờ giấy
    const drag = items.find((x) => x.park && t >= x.park.t1 - 250 && t <= x.park.t1 + PARK_MS);
    if (drag) {
      const P = parkAt(drag.park, Math.max(t, drag.park.t1));
      handXY = toScreen([P.ax + (drag.park.w * P.k) / 2, P.ay - drag.park.pad]);
    } else if (act) handXY = tip(act, clamp01((t - act.t0) / act.dur), t);
    else {
      const prev = [...draws].reverse().find((x) => x.t0 + x.dur < t), next = draws.find((x) => x.t0 > t);
      const lerp = (a, b, q) => [a[0] + (b[0] - a[0]) * q, a[1] + (b[1] - a[1]) * q];
      if (prev && next && next.t0 - (prev.t0 + prev.dur) <= 1200) handXY = lerp(endTip(prev), startTip(next), EASE_STD(clamp01((t - prev.t0 - prev.dur) / (next.t0 - prev.t0 - prev.dur))));
      else if (prev && t - (prev.t0 + prev.dur) < 350) handXY = lerp(endTip(prev), OFF, EASE_STD((t - prev.t0 - prev.dur) / 350));
      else if (next && next.t0 - t < 350) handXY = lerp(OFF, startTip(next), EASE_STD(1 - (next.t0 - t) / 350));
    }
  }
  const order = (x) => (x.t === "marker" ? 0 : x.t === "box" ? 1 : 2); // tô vàng nằm dưới chữ
  const oldSorted = [...old].sort((a, b) => order(a) - order(b));
  const curSorted = [...items].sort((a, b) => order(a.it) - order(b.it));
  // #144 E-BD: nền bảng + bảng màu mực (mặc định E-BD-01 = y như cũ)
  const BS = boardStyleOf(data, ctx, board);
  const pal = BS.pal;
  const cx = BS.id === "E-BD-01" ? ctx : { ...ctx, pal };
  // lớp hoa văn vẽ theo camera (ô ly, lưới, chấm, bần…) — tính trên màn hình nên rẻ và nét đều ở mọi độ zoom
  const pat = BS.layers ? (() => {
    const imgs = [], sizes = [], pos = [];
    for (const l of BS.layers) {
      if (l.size[0] * cam.z < 6) continue; // hoa văn quá nhỏ khi lùi xa → bỏ (khỏi thành mảng xám)
      imgs.push(l.img);
      for (let n = l.img.split("gradient(").length - 1; n > 0; n--) { sizes.push(`${l.size[0] * cam.z}px ${l.size[1] * cam.z}px`); pos.push(`${cam.tx}px ${cam.ty}px`); }
    }
    return imgs.length ? { backgroundImage: imgs.join(", "), backgroundSize: sizes.join(", "), backgroundPosition: pos.join(", ") } : null;
  })() : null;
  // E-BD-04 lề đỏ mỗi ô · E-BD-08 trang sổ dòng kẻ + gáy lò xo
  const pages = BS.pages ? Object.values(board.frames || {}).map((f, i) => BS.pages === "margin"
    ? <div key={i} style={{ position: "absolute", left: f[0] + 110, top: f[1] - 40, width: 3, height: f[3] + 80, background: "rgba(225,90,90,.55)" }} />
    : <div key={i} style={{ position: "absolute", left: f[0] - 40, top: f[1] - 30, width: f[2] + 80, height: f[3] + 70 }}>
        <div style={{ position: "absolute", inset: 0, background: "#fffdf6", borderRadius: 10, boxShadow: "0 18px 40px rgba(40,25,10,.35)",
          backgroundImage: "linear-gradient(to right, transparent 148px, rgba(225,90,90,.6) 148px 151px, transparent 151px), repeating-linear-gradient(180deg, transparent 0 62px, rgba(110,150,210,.45) 62px 64px)", backgroundPosition: "0 0, 0 70px" }} />
        <div style={{ position: "absolute", left: 30, top: -26, width: f[2] + 20, height: 56,
          backgroundImage: "radial-gradient(ellipse 13px 25px at 50% 50%, transparent 0 8px, #6c737e 9px 13px, transparent 14px)", backgroundSize: "56px 56px", backgroundRepeat: "repeat-x" }} />
      </div>) : null;
  return (
    <AbsoluteFill style={{ background: BS.bg, overflow: "hidden" }}>
      {pat && <AbsoluteFill style={pat} />}
      {BS.sheen && <AbsoluteFill style={{ background: BS.sheen }} />}
      <div style={{ position: "absolute", left: 0, top: 0, width: board.size[0], height: board.size[1], transformOrigin: "0 0", transform: `translate(${cam.tx}px, ${cam.ty}px) scale(${cam.z})` }}>
        {pages}
        {oldSorted.map((it) => <Item key={"o" + it.id} it={it} p={1} byId={byId} ctx={cx} hand={handFont} t={t} old />)}
        {curSorted.map(({ it, t0, dur, park }) => {
          const parked = park && !((t < t0 && !park.card) || t < park.t0card);
          const P = parked ? parkAt(park, t) : null;
          const done = !parked || (P.q >= 1 && t > park.t1 + PARK_MS + 300);
          const el = <Item key={it.id} it={it} p={clamp01((t - t0) / dur)} byId={byId} ctx={cx} hand={handFont} t={t} pk={done ? null : { ...P, mode: park.style }} />;
          if (done) return el;
          const fade = 1 - clamp01((t - park.t1 - PARK_MS) / 300); // tờ giấy mờ đi khi chữ đã về chỗ
          const rot = park.rot * (1 - P.q);
          const st = park.style, u = 1 / (park.z || 1); // u: 1 px trên màn (lúc cận) tính ra đơn vị bảng
          const appear = clamp01((t - park.t0card) / 250);
          let card = null;
          if (park.card && st === "lower3") {
            const sq = Math.floor(clamp01((t - park.t0card) / 330) * 6) / 6; // hiện giật theo bước (Vox)
            card = <div style={{ position: "absolute", left: P.ax - park.pad - 16 * u, top: P.ay - park.pad, width: park.w * P.k + 2 * park.pad + 16 * u, height: park.h * P.k + 2 * park.pad,
              background: pal.card, opacity: 0.97 * fade, clipPath: `inset(0 ${(1 - sq) * 100}% 0 0)`, boxShadow: `0 ${6 * u}px ${18 * u}px rgba(20,24,32,${0.22 * fade})` }}>
              <div style={{ position: "absolute", left: 0, top: 0, width: 16 * u, height: "100%", background: accentOf(cx) }} /></div>;
          } else if (park.card && st === "corner") {
            const q = clamp01((t - park.t0card) / 320);
            card = <div style={{ position: "absolute", left: P.ax - park.pad, top: P.ay - park.pad, width: park.w * P.k + 2 * park.pad, height: park.h * P.k + 2 * park.pad,
              background: pal.card, borderRadius: 16 * u, borderTop: `${10 * u}px solid ${accentOf(cx)}`, boxSizing: "border-box", opacity: 0.97 * fade * clamp01(q * 4),
              transform: `scale(${popOver(q)}) rotate(${park.left ? -1.2 : 1.2}deg)`, transformOrigin: park.left ? "0 0" : "100% 0", boxShadow: `0 ${10 * u}px ${26 * u}px rgba(20,24,32,${0.28 * fade})` }} />;
          } else if (park.card && st === "glass" && park.fb) { // tấm kính phủ khung ảnh
            const vh = Math.round((park.fb[2] * 9) / 16), gq = clamp01((t - park.t0card + 150) / 300) * (1 - clamp01((t - park.t1) / 400));
            card = gq > 0 ? <div style={{ position: "absolute", left: park.fb[0] - 14 * u, top: park.fb[1] - 14 * u, width: park.fb[2] + 28 * u, height: vh + 28 * u, borderRadius: 18 * u, opacity: gq,
              background: "linear-gradient(115deg, transparent 0 16%, rgba(255,255,255,.30) 21%, rgba(255,255,255,.08) 27%, transparent 31%, transparent 64%, rgba(255,255,255,.18) 67%, transparent 72%), rgba(215,235,255,.14)",
              boxShadow: `inset 0 0 0 ${5 * u}px rgba(255,255,255,.55), 0 ${4 * u}px ${14 * u}px rgba(20,40,70,.18)` }} /> : null;
          } else if (park.card && st !== "glass") {
            card = <div style={{ position: "absolute", left: P.ax - park.pad, top: P.ay - park.pad, width: park.w * P.k + 2 * park.pad, height: park.h * P.k + 2 * park.pad,
              background: park.style === "overlay" ? pal.overlay : "#fff4a3", opacity: 0.95 * fade * appear, borderRadius: 12, transform: `rotate(${rot}deg)`,
              boxShadow: `0 ${6 * (1 - P.q) + 2}px ${16 * (1 - P.q) + 4}px rgba(40,40,60,${0.16 * fade})` }} />;
          }
          // chữ trên kính: quầng tương phản để đọc được trên cảnh
          const halo = st === "glass" && P.q < 1 ? { filter: pal.dark ? "drop-shadow(0 0 3px rgba(0,0,0,.95)) drop-shadow(0 0 7px rgba(0,0,0,.7))" : "drop-shadow(0 0 3px rgba(255,255,255,1)) drop-shadow(0 0 7px rgba(255,255,255,.85))" } : null;
          return (
            <div key={it.id} style={{ position: "absolute", left: 0, top: 0 }}>
              {card}
              <div style={{ position: "absolute", left: 0, top: 0, transformOrigin: `${P.ox}px ${P.oy}px`, transform: `translate(${P.dx}px, ${P.dy}px) rotate(${rot}deg) scale(${P.k})`, ...halo }}>{el}</div>
            </div>
          );
        })}
      </div>
      {handXY && <DetPaw x={handXY[0]} y={handXY[1] + Math.sin(t / 90) * 2} tilt={-4 + 3 * Math.sin(t / 400)} tool={pal.pen} />}
    </AbsoluteFill>
  );
};

/** #143: soát chữ/hình bị che — (1) đang vẽ hoặc ngay sau khi vẽ (1,2 s) mà nằm ngoài khung hình (camera đang cận khung ảnh);
 *  (2) đè lên khung ảnh nhân vật. Tính SAU camera bám nét (planBoard). Trả [{ id, kind: "ngoai-khung" | "de-khung-anh", ms, vis, with? }]. */
export const boardHidden = (data, lines, board = { size: [3456, 1540], frames: {} }) => {
  const plan = planBoard(data, lines, board), shots = plan.shots;
  const out = [];
  for (const { it, t0, dur, park } of plan.items) {
    if (!FOLLOW.has(it.t) || park) continue;
    const b = bboxOf(it, plan.byId);
    let worst = 1, at = t0;
    for (let k = 0; k <= 8; k++) { const ms = t0 + ((dur + 400) * k) / 8; const v = visFrac(b, cameraAtT(shots, ms)); if (v < worst) (worst = v), (at = ms); }
    if (worst < 0.85) out.push({ id: it.id, kind: "ngoai-khung", ms: Math.round(at), vis: Math.round(worst * 100) });
  }
  for (const x of plan.items) if (x.park && x.park.card && x.park.k < 0.5) out.push({ id: x.it.id, kind: "giay-nho", vis: Math.round(x.park.k * 100) });
  const all = [...(data._prior || []), ...(data.items || [])];
  const vigs = (data.items || []).filter((x) => x.t === "vignette").concat((data._prior || []).filter((x) => x.t === "vignette"));
  const inter = (a, b) => Math.max(0, Math.min(a[0] + a[2], b[0] + b[2]) - Math.max(a[0], b[0])) * Math.max(0, Math.min(a[1] + a[3], b[1] + b[3]) - Math.max(a[1], b[1]));
  // #145: chữ quá nhỏ (dưới 28 đơn vị bảng ≈ < 20 px khi bảng thu vào khung) — chỉ dòng nguồn (id có "src") được nhỏ tới 24
  for (const it of data.items || []) if (it.t === "text" && (it.size || 52) < (/src|nguon|source/.test(it.id) ? 24 : 28)) out.push({ id: it.id, kind: "chu-nho", vis: it.size });
  // #144: chữ đè chữ (kể cả chữ của cảnh trước trên cùng bảng)
  const TXT = (x) => x.t === "text" || x.t === "illus" || x.t === "icon" || x.t === "badge";
  const others = [...(data._prior || []), ...(data.items || [])].filter(TXT);
  for (const it of (data.items || []).filter(TXT)) {
    const b = bboxOf(it, plan.byId);
    for (const o of others) {
      if (o === it || o.id === it.id) continue;
      const ob = bboxOf(o, plan.byId), f = inter(b, ob) / Math.max(1, Math.min(b[2] * b[3], ob[2] * ob[3]));
      if (f > 0.15 && !(o.id < it.id && (data.items || []).includes(o))) out.push({ id: it.id, kind: "de-chu", with: o.id, vis: Math.round(f * 100) });
    }
  }
  for (const it of data.items || []) {
    if (!["text", "illus", "icon", "badge"].includes(it.t)) continue;
    const b = bboxOf(it, plan.byId);
    for (const v of vigs) { const vb = bboxOf(v, plan.byId); const f = inter(b, vb) / Math.max(1, b[2] * b[3]); if (f > 0.05) out.push({ id: it.id, kind: "de-khung-anh", with: v.id, vis: Math.round((1 - f) * 100) }); }
  }
  return out;
};

/** Các quãng đang vẽ nét (ms trong cảnh), gộp quãng cách nhau < 400 ms — cho tiếng bút tự động (core/sfx.js). */
export const drawSpans = (data, lines) => {
  const { items } = planItems(data, lines || [], data._prior || []);
  const sp = items.filter((x) => (x.it.enter || "draw") === "draw" && x.it.t !== "marker" && x.it.t !== "illus" && x.it.t !== "vignette").map((x) => [x.t0, x.t0 + x.dur]).sort((a, b) => a[0] - b[0]);
  const out = [];
  for (const q of sp) { const last = out.at(-1); if (last && q[0] - last[1] < 400) last[1] = Math.max(last[1], q[1]); else out.push([...q]); }
  return out;
};

/** Mốc camera chuyển sang một ô/cụm khác bằng lướt (không tính shot đầu) — cho tiếng "cộc cộc" chỉ bảng. */
export const boardShotTimes = (data, lines) => (data.shots || []).slice(1).filter((s) => s.move !== "cut" && s.fit !== "all").map((s) => resolveAt(s.at, lines || [])).filter((x) => x != null);

const estimateBoard = (data, ctx) => {
  const { items } = planItems(data, ctx.lines || [], data._prior || []);
  const lastDraw = items.reduce((m, x) => Math.max(m, x.t0 + x.dur), 0);
  const lastShot = (data.shots || []).reduce((m, s) => Math.max(m, (resolveAt(s.at, ctx.lines || []) ?? 0) + (s.ms || 800)), 0);
  return Math.max(lastDraw + 300, lastShot, 1200); // #135: bớt đuôi
};
const checkBoard = (d, lines) => {
  const E = [];
  // #143: đếm từ bỏ ký hiệu (+ → / = …)
  const bwords = (x) => String(x || "").split(/\s+/).filter((w) => /[\p{L}\p{Nd}]/u.test(w)).length;
  if (!d.board) E.push("thiếu data.board (tên bảng trong script.boards)");
  const ids = new Set();
  for (const it of d.items || []) {
    if (!it.id) E.push(`phần tử thiếu id (${it.t})`);
    else if (ids.has(it.id)) E.push(`trùng id ${it.id}`); else ids.add(it.id);
    if (resolveAt(it.at, lines.map((l, i) => ({ ...l, startMs: i * 1000, endMs: i * 1000 + 900 }))) == null) E.push(`${it.id}: mốc "${it.at}" không khớp chữ nào trong lời đọc`);
    if (it.t === "vignette" && !["SCENE-01", "SCENE-02", "SCENE-03"].includes(it.module || "SCENE-01")) E.push(`${it.id}: khung ảnh chỉ nhận SCENE-01/02/03`);
    for (const h of it.hl || []) { if (!String(it.text || "").includes(h.text)) E.push(`${it.id}: hl "${h.text}" không có trong chữ`); if (resolveAt(h.at, lines.map((l, i) => ({ ...l, startMs: i * 1000, endMs: i * 1000 + 900 }))) == null) E.push(`${it.id}: hl mốc "${h.at}" không khớp`); }
    if (it.t === "illus" && !ILLUS_PATHS[it.name]) E.push(`${it.id}: hình "${it.name}" chưa nhúng — chạy node tools/board-illus.mjs`);
    if (it.t === "text" && it.font !== "base" && bwords(it.text) > 7) E.push(`${it.id}: chữ trên bảng ${bwords(it.text)} từ, tối đa 7 (nhãn nên ≤ 4)`);
  }
  // #144: mã kiểu khung / ghi chú / nền
  for (const it of d.items || []) {
    if (it.frame != null && (it.t !== "vignette" || !FRAME_IDS.has(it.frame))) E.push(`${it.id}: frame "${it.frame}" không hợp lệ (chỉ cho vignette, E-FR-01…10)`);
    if (it.style != null && (!["text", "illus"].includes(it.t) || !NOTE_IDS.has(it.style))) E.push(`${it.id}: style "${it.style}" không hợp lệ (chỉ cho text/illus, E-NOTE-01…10)`);
    if (it.style === "E-NOTE-07" && it.to == null) E.push(`${it.id}: bong bóng E-NOTE-07 cần to: "<id món>" hoặc [x, y]`);
    if (it.style === "E-NOTE-07" && typeof it.to === "string" && !ids.has(it.to) && !(d._prior || []).some((x) => x.id === it.to)) E.push(`${it.id}: to "${it.to}" không có trên bảng`);
    if (["E-NOTE-04", "E-NOTE-05", "E-NOTE-06"].includes(it.style) && it.t !== "text") E.push(`${it.id}: ${it.style} chỉ dùng cho text`);
  }
  if (d.closeNote != null && !CLOSE_NOTE[d.closeNote]) E.push(`closeNote "${d.closeNote}" không hợp lệ (thirds | E-NOTE-08 | E-NOTE-09 | E-NOTE-10)`);
  for (const k of [d.style, d.edit?.board]) if (k != null && !BOARD_IDS.has(k)) E.push(`kiểu bảng "${k}" không hợp lệ (E-BD-01…10)`);
  for (const s of d.shots || []) if (resolveAt(s.at, lines.map((l, i) => ({ ...l, startMs: i * 1000, endMs: i * 1000 + 900 }))) == null) E.push(`shot: mốc "${s.at}" không khớp`);
  return E;
};

export const BOARD = {
  "BOARD-01": { name: "Bảng vẽ hành trình (VideoScribe)", family: "BOARD", Component: Board01, limits: {}, estimate: estimateBoard, check: checkBoard },
};
