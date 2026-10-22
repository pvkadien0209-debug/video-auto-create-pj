// edit-layout.js — #144 agent A: danh mục + số liệu cho 3 họ biến thể edit của khuôn "bảng trắng + Đét":
//   E-LAY-01…10 bố cục người dẫn (khung bảng PANEL + Đét), E-DET-01…10 động tác Đét, E-TR-01…12 chuyển cảnh.
// Thuần JS (không React) → core/edit.js gom danh mục; presenter.jsx / ScriptVideo.jsx đọc số liệu ở đây.
// Kịch bản: scene.edit = { layout: "E-LAY-03", det: "E-DET-05", trans: "E-TR-07" }; câu: line.detAct = "E-DET-04".
// Không ghi gì → E-LAY-01 (y như #134–#143), không động tác thêm, chuyển cảnh như cũ.
import { ik } from "../cast/rig/geom.js";

/* ───────────────────────── E-LAY: bố cục ───────────────────────── */
// panel: khung bảng {x, y, w, ry (độ xoay 3/4 quanh trục đứng), tray (khay bút)}; h = w·9/16.
// det: {x, y (chân, px màn hình), s (tỉ lệ; 1.12 = cỡ cũ), flip (quay mặt sang trái), show, turn, pose, shadow,
//       badge {cx, cy, r} (PiP khung tròn)}. Đáy khung bảng ≤ 885 để chừa dải phụ đề; phụ đề vẽ trên cùng.
export const LAYOUTS = {
  "E-LAY-01": { panel: { x: 520, y: 88, w: 1340 }, det: { x: 260, y: 878, s: 1.12, pose: "point", shadow: true } },
  "E-LAY-02": { panel: { x: 60, y: 88, w: 1340 }, det: { x: 1660, y: 878, s: 1.12, flip: true, pose: "point", shadow: true } },
  "E-LAY-03": { panel: { x: 420, y: 40, w: 1460 }, det: { x: 210, y: 905, s: 0.86, pose: "talk", badge: { cx: 210, cy: 722, r: 160 } } },
  "E-LAY-04": { panel: { x: 40, y: 40, w: 1460 }, det: { x: 1710, y: 905, s: 0.86, flip: true, pose: "talk", badge: { cx: 1710, cy: 722, r: 160 } } },
  "E-LAY-05": { panel: { x: 204, y: 34, w: 1512 }, det: { x: -260, y: 878, s: 1.12, show: false, pose: "point", shadow: true } },
  "E-LAY-06": { panel: { x: 210, y: 30, w: 1500 }, det: { x: 960, y: 1170, s: 1.45, pose: "up", turn: 0 } },
  "E-LAY-07": { panel: { x: 520, y: 88, w: 1340 }, det: { x: 260, y: 878, s: 1.12, pose: "point", shadow: true }, enter: "walk" },
  "E-LAY-08": { panel: { x: 400, y: 36, w: 1480 }, det: { x: 205, y: 1185, s: 1.6, pose: "peek" }, enter: "rise" },
  "E-LAY-09": { panel: { x: 590, y: 96, w: 1260, ry: 18 }, det: { x: 285, y: 878, s: 1.12, turn: 0.28, pose: "point", shadow: true } },
  "E-LAY-10": { panel: { x: 770, y: 150, w: 1100 }, det: { x: 330, y: 1150, s: 2.4, turn: 0.32, pose: "point" } },
};
export const DEFAULT_LAYOUT = "E-LAY-01";

/** Mã bố cục của một cảnh khung: scene.edit.layout → script.presenter.layout → side "right" = E-LAY-02 → E-LAY-01. */
export const layoutIdOf = (scene, script) => {
  const id = scene.edit?.layout || script?.presenter?.layout || (script?.presenter?.side === "right" ? "E-LAY-02" : DEFAULT_LAYOUT);
  return LAYOUTS[id] ? id : DEFAULT_LAYOUT;
};

const lerp = (a, b, k) => a + (b - a) * k;
const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
const clamp01 = (k) => Math.max(0, Math.min(1, k));
const panelOfL = (L) => ({ x: L.panel.x, y: L.panel.y, w: L.panel.w, ry: L.panel.ry || 0 });
const detOfL = (L) => ({ ...L.det, show: L.det.show !== false, turn: L.det.turn || 0, flip: !!L.det.flip });
/** h khung theo rộng (giữ đúng 754 của bố cục cũ). */
export const panelH = (w) => Math.round(1080 * (w / 1920));

/**
 * Hình học tại khung hình cục bộ f của cảnh: { panel, det, walk } (walk = 0..1 đang bước, để presenter lắc người).
 * from = mã bố cục cảnh khung liền trước (null nếu cảnh mở chuỗi khung). Đổi bố cục → khung trượt/đổi cỡ, Đét đi sang.
 */
export const layoutAt = (id, from, f) => {
  const L = LAYOUTS[id] || LAYOUTS[DEFAULT_LAYOUT];
  const P1 = panelOfL(L), D1 = detOfL(L);
  // vào riêng của bố cục (07 đi bộ vào từ mép, 08 ló lên từ mép dưới) — chỉ khi cảnh trước không cùng kiểu
  if (L.enter === "walk" && from !== id) {
    const n = 40, k = clamp01(f / n);
    const P0 = from ? panelOfL(LAYOUTS[from]) : P1, kp = ease(clamp01(f / 20));
    return { panel: mixP(P0, P1, kp), det: { ...D1, x: lerp(-230, D1.x, 1 - Math.pow(1 - k, 1.6)), turn: k < 1 ? 0.45 * (1 - ease(clamp01((k - 0.8) / 0.2))) : 0 }, walk: k < 1 ? 1 - clamp01((k - 0.85) / 0.15) : 0, f };
  }
  if (L.enter === "rise" && from !== id) {
    const n = 18, k = clamp01((f - 4) / n);
    const P0 = from ? panelOfL(LAYOUTS[from]) : P1, kp = ease(clamp01(f / 20));
    const back = 1 + 2.2 * Math.pow(k - 1, 3) + 1.2 * Math.pow(k - 1, 2); // easeOutBack
    return { panel: mixP(P0, P1, kp), det: { ...D1, y: lerp(D1.y + 720, D1.y, back) }, walk: 0, f };
  }
  if (!from || from === id) return { panel: P1, det: D1, walk: 0, f };
  const L0 = LAYOUTS[from] || LAYOUTS[DEFAULT_LAYOUT];
  const P0 = panelOfL(L0), D0 = detOfL(L0);
  const far = Math.abs(D1.x - D0.x) > 700 && D0.show && D1.show;
  const n = far ? 34 : 22;
  const k = ease(clamp01(f / n));
  const panel = mixP(P0, P1, k);
  let det;
  if (D0.show && D1.show) {
    det = { ...D1, x: lerp(D0.x, D1.x, k), y: lerp(D0.y, D1.y, k), s: lerp(D0.s, D1.s, k), turn: lerp(D0.turn, D1.turn, k), flip: k < 0.5 ? D0.flip : D1.flip,
      shadow: k < 0.5 ? D0.shadow : D1.shadow, pose: k < 0.5 ? D0.pose : D1.pose };
    det.badge = mixBadge(D0, D1, k, det);
    if (far) { // đi bộ sang bên kia: quay 3/4 theo hướng đi
      const dir = Math.sign(D1.x - D0.x);
      det.turn = 0.5 * dir * Math.sin(Math.PI * clamp01(f / n)) * (det.flip ? -1 : 1);
    }
  } else if (D1.show) { // hiện lại: đi vào từ mép gần nhất
    const edge = D1.x < 960 ? -260 : 2180;
    det = { ...D1, x: lerp(edge, D1.x, k) };
  } else if (D0.show) { // rời khung: đi ra mép gần nhất
    const edge = D0.x < 960 ? -260 : 2180;
    det = { ...D0, x: lerp(D0.x, edge, k), show: k < 1, badge: D0.badge ? { ...D0.badge, cx: lerp(D0.badge.cx, edge, k) } : null };
  } else det = D1;
  const walking = (far || D0.show !== D1.show) && f < n ? Math.sin(Math.PI * clamp01(f / n)) : 0;
  return { panel, det, walk: walking, f };
};
const mixP = (a, b, k) => ({ x: lerp(a.x, b.x, k), y: lerp(a.y, b.y, k), w: lerp(a.w, b.w, k), ry: lerp(a.ry, b.ry, k) });
const mixBadge = (D0, D1, k, d) => {
  if (!D0.badge && !D1.badge) return null;
  const big = 1500;
  const b0 = D0.badge || { cx: D0.x, cy: D0.y - 200 * D0.s, r: big, a: 0 };
  const b1 = D1.badge || { cx: D1.x, cy: D1.y - 200 * D1.s, r: big, a: 0 };
  return { cx: lerp(b0.cx, b1.cx, k), cy: lerp(b0.cy, b1.cy, k), r: Math.exp(lerp(Math.log(b0.r), Math.log(b1.r), k)), a: lerp(b0.a ?? 1, b1.a ?? 1, k) };
};

export const EDIT_LAYOUT = [
  { id: "E-LAY-01", name: "Đét trái – bảng phải (mặc định)", how: 'không ghi gì, hoặc scene.edit = { layout: "E-LAY-01" }' },
  { id: "E-LAY-02", name: "Đét phải – bảng trái", how: 'scene.edit.layout = "E-LAY-02" (hoặc script.presenter.side = "right" cho cả bài)' },
  { id: "E-LAY-03", name: "Đét nhỏ trong khung tròn góc dưới trái (PiP), bảng lớn", how: 'scene.edit.layout = "E-LAY-03"' },
  { id: "E-LAY-04", name: "Đét nhỏ trong khung tròn góc dưới phải (PiP), bảng lớn", how: 'scene.edit.layout = "E-LAY-04"' },
  { id: "E-LAY-05", name: "Không Đét – bảng gần toàn màn (chỉ giọng dẫn)", how: 'scene.edit.layout = "E-LAY-05"' },
  { id: "E-LAY-06", name: "Đét nửa người đứng trước bảng, giữa dưới; bảng lớn sau lưng", how: 'scene.edit.layout = "E-LAY-06"' },
  { id: "E-LAY-07", name: "Đét đi bộ vào từ mép trái rồi dừng (bố cục 01)", how: 'scene.edit.layout = "E-LAY-07" (chỉ đi vào khi cảnh trước không phải 07)' },
  { id: "E-LAY-08", name: "Đét ló lên từ mép dưới góc trái, bảng lớn", how: 'scene.edit.layout = "E-LAY-08" (ló lên khi cảnh trước không phải 08)' },
  { id: "E-LAY-09", name: "Bảng nghiêng 3/4 hướng về Đét đứng trái", how: 'scene.edit.layout = "E-LAY-09"' },
  { id: "E-LAY-10", name: "Đét lớn cận nửa người bên trái + bảng hẹp bên phải", how: 'scene.edit.layout = "E-LAY-10"' },
];

/* ───────────────────────── E-DET: động tác ───────────────────────── */
// Mỗi động tác: frames (độ dài, 30 fps) + act(u) → { R, L, tilt, nod, turn, squash, dy, zoom, face, eyeOpen } tại tiến độ u ∈ [0,1].
// Presenter trộn với tư thế thường bằng bao (env) vào 20% đầu, ra 20% cuối. Tay R = phía bảng (Đét bên phải thì lật gương).
const SH = { x: 82, y: -196 }, UP = 52, FO = 48; // số đo vai/tay của Det.jsx (đọc, không sửa)
const ikR = (tx, ty, bend = 1) => ik(SH.x, SH.y, tx, ty, UP, FO, bend);
const ikL = (tx, ty, bend = -1) => ik(-SH.x, SH.y, tx, ty, UP, FO, bend);
const wave = (u, n) => Math.sin(u * Math.PI * 2 * n);
const FACE = {
  shrug: { eye: "round", brow: [-13, -13], mouth: "flat", cheek: 0.4 },
  whisper: { eye: "round", lid: [0.2, 0.2], brow: [-5, -2], mouth: "side", cheek: 0.6, look: [-0.7, 0] },
  proud: { eye: "arc", brow: [4, -6], mouth: "grin", cheek: 0.8 },
};
export const DET_ACTS = {
  "E-DET-01": { frames: 36, act: (u) => ({ R: { sh: -128 + 7 * Math.max(0, wave(u, 2.5)), el: -4, hand: "point" }, turn: 0.22, tilt: -6, face: "happy" }) },
  "E-DET-02": { frames: 36, act: (u) => ({ R: { sh: -50, el: -88, hand: "thumb" }, dy: -10 * Math.abs(Math.sin(u * Math.PI * 2)), tilt: -5, face: "wink" }) },
  "E-DET-03": { frames: 36, act: (u) => ({ R: { sh: -28, el: -92, hand: "stop" }, L: { sh: 28, el: 92, hand: "stop" }, nod: 9, tilt: 7 * wave(u, 1), squash: 0.03, face: FACE.shrug }) },
  "E-DET-04": { frames: 36, act: (u) => {
    const jump = u < 0.12 ? 0 : u < 0.55 ? Math.sin(((u - 0.12) / 0.43) * Math.PI) : 0;
    const sq = u < 0.12 ? 0.12 * Math.sin((u / 0.12) * Math.PI) : u > 0.55 && u < 0.7 ? 0.1 * Math.sin(((u - 0.55) / 0.15) * Math.PI) : -0.05 * jump;
    return { R: { sh: -145, el: -20, hand: "stop" }, L: { sh: 145, el: 20, hand: "stop" }, dy: -78 * jump, squash: sq, face: "surprised" };
  } },
  "E-DET-05": { frames: 42, act: (u) => ({ R: { ...ikR(72, -290 + 9 * wave(u, 3)), hand: "open" }, tilt: 8, face: "thinking" }) },
  "E-DET-06": { frames: 36, act: (u) => { const o = 4 + 30 * Math.abs(Math.cos(u * Math.PI * 4)); return { R: { ...ikR(o, -176), hand: "stop" }, L: { ...ikL(-o, -176), hand: "stop" }, dy: -6 * Math.abs(Math.sin(u * Math.PI * 4)), face: "laugh" }; } },
  "E-DET-07": { frames: 40, act: () => ({ R: { ...ikR(42, -232), hand: "stop" }, tilt: -9, zoom: 1.05, face: FACE.whisper }) },
  "E-DET-08": { frames: 36, act: (u) => ({ nod: 16 * Math.pow(Math.sin(u * Math.PI * 2.5), 2), face: "happy" }) },
  "E-DET-09": { frames: 42, act: (u) => { const b = Math.sin(Math.min(1, u * 1.6) * Math.PI * 0.5) * (u > 0.75 ? 1 - (u - 0.75) / 0.25 : 1); return { R: { ...ikR(18, -120), hand: "open" }, L: { ...ikL(-18, -120), hand: "open" }, nod: 26 * b, squash: 0.07 * b, dy: 6 * b, face: "happy", eyeOpen: 1 - b }; } },
  "E-DET-10": { frames: 40, act: () => ({ R: { ...ikR(104, -128, -1), hand: "open" }, L: { ...ikL(-104, -128, 1), hand: "open" }, tilt: -5, squash: -0.04, face: FACE.proud }) },
};
const ACT_ALIAS = { point: "E-DET-01", thumb: "E-DET-02", shrug: "E-DET-03", surprise: "E-DET-04", scratch: "E-DET-05", clap: "E-DET-06", whisper: "E-DET-07", nod: "E-DET-08", bow: "E-DET-09", hips: "E-DET-10" };
export const detActOf = (code) => DET_ACTS[code] || DET_ACTS[ACT_ALIAS[code]] || null;
/** Bao trộn: vào 20% đầu, ra 20% cuối (mượt). */
export const actEnv = (u) => (u <= 0 || u >= 1 ? 0 : u < 0.2 ? ease(u / 0.2) : u > 0.8 ? ease((1 - u) / 0.2) : 1);

export const EDIT_DET = [
  { id: "E-DET-01", name: "Chỉ mạnh lên bảng (giơ cao, chọc 2 nhịp)", how: 'line.detAct = "E-DET-01" hoặc scene.edit.det' },
  { id: "E-DET-02", name: "Giơ ngón cái + nháy mắt", how: 'line.detAct = "E-DET-02"' },
  { id: "E-DET-03", name: "Nhún vai, hai tay ngửa", how: 'line.detAct = "E-DET-03"' },
  { id: "E-DET-04", name: "Ngạc nhiên nảy lên (nhún – bật – tiếp đất)", how: 'line.detAct = "E-DET-04"' },
  { id: "E-DET-05", name: "Gãi đầu suy nghĩ", how: 'line.detAct = "E-DET-05"' },
  { id: "E-DET-06", name: "Vỗ tay", how: 'line.detAct = "E-DET-06"' },
  { id: "E-DET-07", name: "Đưa tay lên miệng nói nhỏ (mắt liếc)", how: 'line.detAct = "E-DET-07"' },
  { id: "E-DET-08", name: "Gật đầu", how: 'line.detAct = "E-DET-08"' },
  { id: "E-DET-09", name: "Cúi chào (nhắm mắt)", how: 'line.detAct = "E-DET-09"' },
  { id: "E-DET-10", name: "Chống nạnh tự tin", how: 'line.detAct = "E-DET-10"' },
];

/* ───────────────────────── E-TR: chuyển cảnh ───────────────────────── */
// type: tên kiểu trong ScriptVideo.transitionStyle; frames mặc định. Cảnh trước được giữ hình (Freeze khung cuối)
// dưới/ trên cảnh mới trong `frames` khung đầu của cảnh mới → không chồng thời lượng, tổng độ dài không đổi.
// Hai cảnh đều trong khung bảng → chuyển cảnh diễn ra BÊN TRONG bảng; còn lại diễn ra toàn màn.
export const TRANS = {
  "E-TR-01": { type: "rag", frames: 20 },
  "E-TR-02": { type: "slide", frames: 14 },
  "E-TR-03": { type: "pushv", frames: 14 },
  "E-TR-04": { type: "zoom", frames: 14 },
  "E-TR-05": { type: "irisdot", frames: 18 },
  "E-TR-06": { type: "flash", frames: 10 },
  "E-TR-07": { type: "smash", frames: 8 },
  "E-TR-08": { type: "flip", frames: 18 },
  "E-TR-09": { type: "blur", frames: 16 },
  "E-TR-10": { type: "block", frames: 18 },
  "E-TR-11": { type: "match", frames: 12 },
  "E-TR-12": { type: "spin", frames: 16 },
};
export const NEW_TRANS = new Set(Object.values(TRANS).map((t) => t.type));
/** Chuẩn hoá: "E-TR-05" | { type: "E-TR-05", frames, dir, at } | kiểu cũ ("cut" | "whip" | "iris" | "fade") → { type, frames, code? }. */
export const transOf = (tr) => {
  if (!tr) return null;
  const o = typeof tr === "string" ? { type: tr } : { ...tr };
  const T = TRANS[o.type];
  return T ? { ...T, ...o, type: T.type, code: o.type } : o;
};

export const EDIT_TRANS = [
  { id: "E-TR-01", name: "Lau bảng: giẻ lau của Đét quét ngang, lộ cảnh mới", how: 'scene.transition = "E-TR-01" hoặc scene.edit.trans' },
  { id: "E-TR-02", name: "Trượt ngang (cảnh mới đẩy cảnh cũ sang trái)", how: '"E-TR-02"; { type: "E-TR-02", dir: -1 } đẩy sang phải' },
  { id: "E-TR-03", name: "Đẩy dọc (cảnh mới từ dưới đẩy lên)", how: '"E-TR-03"; dir: -1 từ trên xuống' },
  { id: "E-TR-04", name: "Phóng xuyên (zoom-through, nhoè)", how: '"E-TR-04"' },
  { id: "E-TR-05", name: "Iris tròn mở từ một chấm bút (viền Vòng Đét)", how: '"E-TR-05"; { type: "E-TR-05", at: [x, y] } tâm (toạ độ 1920×1080)' },
  { id: "E-TR-06", name: "Chớp trắng", how: '"E-TR-06"' },
  { id: "E-TR-07", name: "Smash cut (cắt phũ + giật nhẹ)", how: '"E-TR-07"' },
  { id: "E-TR-08", name: "Lật trang bảng kẹp giấy (lật lên trên)", how: '"E-TR-08"' },
  { id: "E-TR-09", name: "Xoá mờ (blur dissolve)", how: '"E-TR-09"' },
  { id: "E-TR-10", name: "Khối màu quét (màu nhấn + dải vàng)", how: '"E-TR-10"' },
  { id: "E-TR-11", name: "Cắt theo nhịp phóng (match cut scale)", how: '"E-TR-11"' },
  { id: "E-TR-12", name: "Xoay nhẹ", how: '"E-TR-12"; dir: -1 xoay ngược' },
];
