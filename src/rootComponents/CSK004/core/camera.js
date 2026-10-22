// camera.js — máy quay cho cảnh nhân vật (#126, nghiên cứu 3-bo-cuc-co-canh.md; #144 bộ mã E-SHOT/E-MOVE/E-ANG).
// Kịch bản: scene.data.camera = [{ at: "<id câu>" | <ms> | 0, shot, on, move?, angle?, ms?, dx? }]
//   Tên cũ (giữ y như #126): shot "wide"|"medium"|"close", move "cut"|"push"
//     • wide = toàn cảnh (mặc định) · medium ≈ ×1,5 · close ≈ ×2,4 · "cut" = cắt ngay · "push" = trôi mượt ~0,7 s
//   #144 (danh mục đầy đủ + cách ghi: core/edit-camera.js):
//     shot  E-SHOT-01…10 (toàn cảnh thiết lập → đặc tả, two-shot, qua vai) · on: "<id>" | ["a","b"] (two-shot)
//     move  E-MOVE-01…10 (đẩy vào, lùi ra, lia ngang, lia dọc, trượt, lia nhoè, rung tay, Ken Burns, zoom giật, dolly zoom giả)
//     angle E-ANG-01…06 (ngang mắt, thấp, cao, nghiêng, từ trên xuống, POV) · ms = thời lượng chuyển động
// Ánh xạ: màn = thế giới × z + T, T giữ cho khung 1920×1080 luôn phủ kín (không lộ mép bối cảnh).
// Góc máy (nghiêng/hất/chúc) là một lớp ngoài quay quanh tâm màn, phóng thêm m vừa đủ để vẫn phủ kín.
// Không ghi mã mới → chạy đúng đường cũ (legacyCameraAt), kết quả y hệt trước #144.
import { Easing } from "remotion";
import { W, H, GROUND } from "./sets.jsx";

export const SHOT_ZOOM = { wide: 1, medium: 1.5, close: 2.4 };
// đỉnh đầu nhân vật đặt ở y này trên màn → luôn chừa chỗ cho bong bóng thoại phía trên (bóng không đè mặt)
export const HEAD_Y = { medium: 330, close: 350 };
const PUSH_MS = 700;
const ease = (p) => (p <= 0 ? 0 : p >= 1 ? 1 : 1 - Math.pow(1 - p, 3));

/** #126 nguyên bản — chỉ dùng tên cũ. */
const legacyCameraAt = (keys, t, lines, focusOf) => {
  const timeOf = (k) => (typeof k.at === "number" ? k.at : lines.find((l) => l.id === k.at)?.startMs ?? 0);
  const ks = keys.map((k) => ({ ...k, t: Math.max(0, timeOf(k) - (k.move === "push" ? 0 : 80)) })).sort((a, b) => a.t - b.t);
  const frameOf = (k) => {
    if (!k || k.shot === "wide" || !SHOT_ZOOM[k.shot]) return { z: 1, tx: 0, ty: 0 };
    const z = SHOT_ZOOM[k.shot];
    const fp = focusOf(k.on) || { x: W / 2, y: GROUND - 300 };
    const target = { x: W / 2 + (k.dx || 0), y: HEAD_Y[k.shot] ?? 340 };
    let tx = target.x - fp.x * z, ty = target.y - fp.y * z;
    tx = Math.min(0, Math.max(W - W * z, tx));
    ty = Math.min(0, Math.max(H - H * z, ty));
    return { z, tx, ty };
  };
  let cur = { z: 1, tx: 0, ty: 0 };
  let prev = cur;
  for (const k of ks) {
    if (t < k.t) break;
    prev = cur;
    const next = frameOf(k);
    if (k.move === "push") {
      const p = ease((t - k.t) / PUSH_MS);
      cur = { z: prev.z + (next.z - prev.z) * p, tx: prev.tx + (next.tx - prev.tx) * p, ty: prev.ty + (next.ty - prev.ty) * p };
      if (p < 1) return cur;
    }
    cur = next;
  }
  return cur;
};

// =====================================================================
// #144 — bảng thông số
// =====================================================================
// Mốc cơ thể puppet (tỉ lệ từ đỉnh tóc 0 → gót 1), đo trên rig CSK004 (đầu to ~3,4 đầu).
export const LM = { eyes: 0.15, mouth: 0.21, chin: 0.27, shoulder: 0.33, chest: 0.42, waist: 0.56, knee: 0.8, feet: 1 };
const H0 = 459; // chiều cao thế giới mặc định của một người (620 × 0,74)

// Cỡ cảnh. panel = khung ảnh / cảnh không bong bóng (headroom chuẩn, mắt ở 1/3 trên);
// talk = cảnh toàn màn có bong bóng thoại (đỉnh đầu ≥ ~300 để bóng nằm trên đầu).
//   z: zoom cố định · cut: mốc cơ thể ở mép dưới khung · top: y đỉnh đầu trên màn · lead: độ lệch ngang theo hướng nhìn (px)
export const SHOT_SPEC = {
  "E-SHOT-01": { name: "ews", z: 1, lead: 0, establish: true },
  "E-SHOT-02": { name: "ws", z: 1.22, lead: 120, panel: { top: 150 }, talk: { top: 330 } },
  "E-SHOT-03": { name: "fs", lead: 240, panel: { cut: 1.07, top: 66 }, talk: { cut: 1.04, top: 330 } },
  "E-SHOT-04": { name: "mws", lead: 280, panel: { cut: LM.knee, top: 58 }, talk: { cut: LM.knee, top: 320 } },
  "E-SHOT-05": { name: "ms", lead: 320, panel: { cut: 0.66, top: 80 }, talk: { cut: 0.66, top: 320 } },
  "E-SHOT-06": { name: "mcu", lead: 320, panel: { cut: 0.48, top: 50 }, talk: { cut: 0.48, top: 300 } },
  "E-SHOT-07": { name: "cu", lead: 260, panel: { cut: 0.36, top: 22 }, talk: { cut: 0.36, top: 280 } },
  "E-SHOT-08": { name: "ecu", lead: 0, panel: { z: 12, eyeY: 430 }, talk: { z: 9, eyeY: 560 } },
  "E-SHOT-09": { name: "two", two: true, panel: { top: 96 }, talk: { top: 330 } },
  "E-SHOT-10": { name: "ots", ots: true, lead: 300, panel: { cut: 0.6, top: 76 }, talk: { cut: 0.6, top: 310 } },
};
// Chuyển động: d = thời lượng mặc định (ms)
export const MOVE_SPEC = {
  "E-MOVE-01": { name: "push", d: 2600 },
  "E-MOVE-02": { name: "pull", d: 1900 },
  "E-MOVE-03": { name: "pan", d: 1300 },
  "E-MOVE-04": { name: "tilt", d: 1700 },
  "E-MOVE-05": { name: "truck", d: 3600 },
  "E-MOVE-06": { name: "whip", d: 420 },
  "E-MOVE-07": { name: "handheld", d: 0 },
  "E-MOVE-08": { name: "kenburns", d: 6000 },
  "E-MOVE-09": { name: "punch", d: 190 },
  "E-MOVE-10": { name: "dolly", d: 1900 },
};
// Góc máy (2D giả): tilt = hất/chúc phối cảnh (rotateX, độ), rot = nghiêng khung (độ), zk = hệ số zoom, dTop = dời đỉnh đầu
export const ANGLE_SPEC = {
  "E-ANG-01": { name: "eye" },
  "E-ANG-02": { name: "low", tilt: 7, zk: 1.12, dTop: -36, lift: true },
  "E-ANG-03": { name: "high", tilt: -7, zk: 0.9, dTop: 70 },
  "E-ANG-04": { name: "dutch", rot: 10 },
  "E-ANG-05": { name: "overhead", tilt: -24, zk: 0.96, dTop: 60, center: true },
  "E-ANG-06": { name: "pov", pov: true, zk: 1.05, shake: 3 },
};
const SHOT_ALIAS = { ews: "E-SHOT-01", establish: "E-SHOT-01", ws: "E-SHOT-02", fs: "E-SHOT-03", full: "E-SHOT-03", mws: "E-SHOT-04", cowboy: "E-SHOT-04",
  ms: "E-SHOT-05", mcu: "E-SHOT-06", cu: "E-SHOT-07", ecu: "E-SHOT-08", two: "E-SHOT-09", "two-shot": "E-SHOT-09", ots: "E-SHOT-10" };
const MOVE_ALIAS = { "push-in": "E-MOVE-01", pull: "E-MOVE-02", "pull-out": "E-MOVE-02", pan: "E-MOVE-03", tilt: "E-MOVE-04", truck: "E-MOVE-05", parallax: "E-MOVE-05",
  whip: "E-MOVE-06", handheld: "E-MOVE-07", shake: "E-MOVE-07", kenburns: "E-MOVE-08", punch: "E-MOVE-09", crash: "E-MOVE-09", dolly: "E-MOVE-10" };
const ANGLE_ALIAS = { eye: "E-ANG-01", low: "E-ANG-02", high: "E-ANG-03", dutch: "E-ANG-04", overhead: "E-ANG-05", top: "E-ANG-05", pov: "E-ANG-06" };
const LEGACY_SHOT = new Set(["wide", "medium", "close"]);
const LEGACY_MOVE = new Set(["cut", "push"]);
export const normShot = (s) => (s == null ? null : SHOT_SPEC[s] ? s : SHOT_ALIAS[s] || (LEGACY_SHOT.has(s) ? s : null));
export const normMove = (m) => (m == null ? "cut" : MOVE_SPEC[m] ? m : MOVE_ALIAS[m] || (LEGACY_MOVE.has(m) ? m : null));
export const normAngle = (a) => (a == null ? null : ANGLE_SPEC[a] ? a : ANGLE_ALIAS[a] || null);
const isNewKey = (k) => (k.shot != null && !LEGACY_SHOT.has(k.shot)) || (k.move != null && !LEGACY_MOVE.has(k.move)) || k.angle != null || k.ms != null || Array.isArray(k.on);

/** Kiểm data.camera (tools/check-script.mjs → SCENE-01 check). */
export const checkCamera = (keys, lines = [], actorIds = []) => {
  const E = [];
  if (keys == null) return E;
  if (!Array.isArray(keys)) return ["camera phải là mảng [{ at, shot, on, move, angle }]"];
  keys.forEach((k, i) => {
    const w = `camera[${i}]`;
    if (k.shot != null && !normShot(k.shot)) E.push(`${w}: shot "${k.shot}" không có (wide | medium | close | E-SHOT-01…10)`);
    if (k.move != null && !normMove(k.move)) E.push(`${w}: move "${k.move}" không có (cut | push | E-MOVE-01…10)`);
    if (k.angle != null && !normAngle(k.angle)) E.push(`${w}: angle "${k.angle}" không có (E-ANG-01…06)`);
    if (typeof k.at === "string" && !lines.some((l) => l.id === k.at)) E.push(`${w}: at "${k.at}" không trùng id câu nào`);
    for (const id of [].concat(k.on ?? [])) if (actorIds.length && !actorIds.includes(id)) E.push(`${w}: on "${id}" không có trong actors`);
    if (k.ms != null && !(k.ms >= 0 && k.ms <= 15000)) E.push(`${w}: ms phải trong 0…15000`);
  });
  return E;
};

// ---------------------------------------------------------------- tiện ích
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, p) => a + (b - a) * p;
const EZ = {
  standard: Easing.bezier(0.45, 0, 0.55, 1),
  settle: Easing.bezier(0.16, 1, 0.3, 1),
  whip: Easing.bezier(0.7, 0, 0.3, 1),
  punch: Easing.bezier(0.2, 1.5, 0.4, 1),
  sine: (p) => 0.5 - 0.5 * Math.cos(Math.PI * p),
};
const P01 = (u, d) => (d <= 0 ? 1 : clamp(u / d, 0, 1));
// nhiễu tất định (tổng sin tần số lẻ) — rung tay
const noise = (t, s) => (Math.sin(t * 0.0021 + s * 1.7) * 0.5 + Math.sin(t * 0.0037 + s * 4.1) * 0.3 + Math.sin(t * 0.0071 + s * 2.3) * 0.2);
const hashStr = (s) => { let h = 7; for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };

// lớp ngoài (góc máy) — ánh xạ thuận một điểm màn (sau lớp trong) → màn
const PERSP = 1500;
const outerMap = (x, y, o) => {
  let px = (x - W / 2) * o.m, py = (y - H / 2) * o.m;
  if (o.rot) { const r = (o.rot * Math.PI) / 180, c = Math.cos(r), s = Math.sin(r); [px, py] = [px * c - py * s, px * s + py * c]; }
  if (o.tilt) { const a = (o.tilt * Math.PI) / 180, zz = py * Math.sin(a); py *= Math.cos(a); const f = PERSP / (PERSP - zz); px *= f; py *= f; }
  return { x: W / 2 + px, y: H / 2 + py };
};
// m nhỏ nhất để khung 1920×1080 sau khi quay/hất vẫn phủ kín màn (tìm nhị phân, 18 bước)
const coverM = (rot, tilt) => {
  if (!rot && !tilt) return 1;
  const C = [[0, 0], [W, 0], [W, H], [0, H]];
  const ok = (m) => {
    const q = C.map(([x, y]) => outerMap(x, y, { m, rot, tilt }));
    return C.every(([x, y]) => q.every((a, i) => { const b = q[(i + 1) % 4]; return (b.x - a.x) * (y - a.y) - (b.y - a.y) * (x - a.x) >= -0.5; }));
  };
  let lo = 1, hi = 2.2;
  for (let i = 0; i < 18; i++) { const mid = (lo + hi) / 2; if (ok(mid)) hi = mid; else lo = mid; }
  return hi * 1.004;
};

// ---------------------------------------------------------------- khung ngắm (trạng thái trong: tâm thế giới cx, cy + zoom z)
// st = { z, cx, cy, rot, tilt, pov, ots, bgK, bgO, bgDx, blur, shake }
const finalize = (st) => {
  const m = coverM(st.rot || 0, st.tilt || 0);
  const z = Math.max(1, st.z);
  let tx = W / 2 - st.cx * z, ty = H / 2 - st.cy * z;
  if (st.jx || st.jy) (tx += st.jx || 0), (ty += st.jy || 0);
  tx = Math.min(0, Math.max(W - W * z, tx));
  ty = Math.min(0, Math.max(H - H * z, ty));
  const out = { z, tx, ty, v2: true };
  if (m > 1.0005) out.m = m;
  if (st.rot) out.rot = st.rot;
  if (st.tilt) out.tilt = st.tilt;
  if (st.blur > 0.5) out.blur = st.blur;
  if (st.pov > 0.01) out.pov = st.pov;
  if (st.ots) out.ots = st.ots;
  if (st.bgK > 1.001 || Math.abs(st.bgDx || 0) > 0.5) {
    // nền (lớp xa) phóng quanh bgO + dời bgDx; kẹp dời để nền vẫn phủ vùng đang thấy
    const k = Math.max(1, st.bgK || 1), [ox, oy] = st.bgO || [W / 2, H / 2];
    const vx0 = -tx / z, vx1 = (W - tx) / z;
    const lo = vx1 - (ox + k * (W - ox)), hi = vx0 - (ox - k * ox);
    out.bg = { k, ox, oy, dx: clamp(st.bgDx || 0, Math.min(lo, hi), Math.max(lo, hi)) };
  }
  return out;
};

const centerOf = (z, tx, ty) => ({ cx: (W / 2 - tx) / z, cy: (H / 2 - ty) / z });
// đổi khung ngắm khi đã có lớp ngoài: muốn điểm P (màn) hiện ở S → điểm trong = C + R(-rot)(S - C)/m (bỏ qua phối cảnh)
const unOuter = (sx, sy, rot, m) => {
  let px = (sx - W / 2) / m, py = (sy - H / 2) / m;
  if (rot) { const r = (-rot * Math.PI) / 180, c = Math.cos(r), s = Math.sin(r); [px, py] = [px * c - py * s, px * s + py * c]; }
  return [W / 2 + px, H / 2 + py];
};

/** Khung đích của một mốc (chưa có chuyển động). */
const targetOf = (k, ctx) => {
  const { focusOf, talk, seed } = ctx;
  const shot = k._shot, ang = ANGLE_SPEC[k._angle] || {};
  const rot = ang.rot ? ang.rot * (seed % 2 ? 1 : -1) * (k.rotSign || 1) : 0;
  const tilt = ang.tilt || 0;
  const base = { rot, tilt, pov: ang.pov ? 1 : 0, ots: null, bgK: 1, bgDx: 0, blur: 0 };
  // tên cũ trong bộ máy mới (trộn cũ + mới): giữ đúng phép tính #126
  if (!shot || shot === "wide") return { ...base, z: 1 * (ang.zk || 1), cx: W / 2, cy: H / 2 };
  if (LEGACY_SHOT.has(shot)) {
    const z = SHOT_ZOOM[shot] * (ang.zk || 1);
    const fp = focusOf(k.on) || { x: W / 2, y: GROUND - 300 };
    const [sx, sy] = unOuter(W / 2 + (k.dx || 0), (HEAD_Y[shot] ?? 340) + (ang.dTop || 0), rot, coverM(rot, tilt));
    return { ...base, z, cx: fp.x + (W / 2 - sx) / z, cy: fp.y + (H / 2 - sy) / z };
  }
  const S = SHOT_SPEC[shot];
  const mode = talk ? S.talk : S.panel;
  const m = coverM(rot, tilt);
  if (S.establish) return { ...base, z: 1 * (ang.zk || 1), cx: W / 2, cy: H / 2 };
  const ids = [].concat(k.on ?? []);
  // ---- two-shot: khung cả hai đầu
  if (S.two) {
    let a = focusOf(ids[0]), b = ids[1] ? focusOf(ids[1]) : null;
    if (a && !b) b = (a.others || [])[0] || null;
    if (!a) return { ...base, z: 1, cx: W / 2, cy: H / 2 };
    if (!b) b = { ...a };
    const gap = Math.max(260, Math.abs(a.x - b.x));
    const hh = Math.max(a.h || H0, b.h || H0);
    const z = (clamp((W * 0.6) / gap, 1, (H * 0.9) / (hh * 0.62)) * (ang.zk || 1)) / m; // lớp ngoài đã phóng m
    const top = Math.min(a.y, b.y);
    const [sx, sy] = unOuter(W / 2 + (k.dx || 0), mode.top + (ang.dTop || 0), rot, m);
    return { ...base, z, cx: (a.x + b.x) / 2 + (W / 2 - sx) / z, cy: top + (H / 2 - sy) / z };
  }
  const fp = focusOf(ids[0]);
  if (!fp) return { ...base, z: 1, cx: W / 2, cy: H / 2 };
  const h = fp.h || H0;
  let z, top;
  if (mode.z) {
    z = mode.z;
    top = mode.eyeY - LM.eyes * h * z;
  } else if (S.z) {
    z = S.z; top = mode.top;
  } else {
    z = (H - mode.top) / (mode.cut * h);
    top = mode.top;
  }
  z = (z * (ang.zk || 1)) / m; // lớp ngoài (góc máy) đã phóng m → giữ cỡ người như khung gốc
  top += ang.dTop || 0;
  if (ang.lift) top = Math.min(top, mode.top + (ang.dTop || 0)); // máy thấp: người cao hơn trong khung
  const dir = ang.center ? 0 : fp.dir || 0;
  const sxHead = W / 2 - dir * (S.lead || 0) + (k.dx || 0);
  const [sx, sy] = unOuter(sxHead, top, rot, m);
  const st = { ...base, z, cx: fp.x + (W / 2 - sx) / z, cy: fp.y + (H / 2 - sy) / z };
  if (S.ots) {
    // người kia ở tiền cảnh: phía người kia đứng (bên trái → vai ở mép trái)
    const other = ids[1] ? focusOf(ids[1]) : (fp.others || []).slice().sort((p, q) => Math.abs(p.x - fp.x) - Math.abs(q.x - fp.x))[0];
    if (other) st.ots = { id: other.id, side: other.x < fp.x ? -1 : 1 };
  }
  return st;
};

const interp = (a, b, p) => ({
  ...b,
  z: Math.exp(lerp(Math.log(a.z), Math.log(b.z), p)),
  cx: lerp(a.cx, b.cx, p), cy: lerp(a.cy, b.cy, p),
  rot: lerp(a.rot || 0, b.rot || 0, p), tilt: lerp(a.tilt || 0, b.tilt || 0, p), pov: lerp(a.pov || 0, b.pov || 0, p),
  bgK: lerp(a.bgK || 1, b.bgK || 1, p), bgDx: lerp(a.bgDx || 0, b.bgDx || 0, p),
  ots: p < 0.5 ? a.ots : b.ots,
});
// kẹp tâm để zoom z phủ kín (dùng khi tạo điểm bắt đầu của chuyển động)
const clampC = (s) => {
  const z = Math.max(1, s.z);
  return { ...s, cx: clamp(s.cx, W / 2 / z, W - W / 2 / z), cy: clamp(s.cy, H / 2 / z, H - H / 2 / z) };
};

/** Trạng thái tại thời điểm u (ms, tính từ đầu mốc) với chuyển động của mốc. prev = trạng thái lúc mốc bắt đầu. */
const moveAt = (k, T, prev, u, ctx, span) => {
  const mv = k._move;
  const spec = MOVE_SPEC[mv];
  const d = k.ms ?? spec?.d ?? PUSH_MS;
  const dir = (ctx.focusOf([].concat(k.on ?? [])[0])?.dir) || 1;
  if (mv === "push") return interp(prev, T, ease(P01(u, PUSH_MS)));
  if (!spec) {
    // cut (+ toàn cảnh thiết lập: tự trôi từ cao xuống)
    if (SHOT_SPEC[k._shot]?.establish) {
      const A = clampC({ ...T, z: T.z * 1.14, cy: 0 });
      return interp(A, T, EZ.settle(P01(u, k.ms ?? 2800)));
    }
    return T;
  }
  switch (spec.name) {
    case "push": {
      const A = prev.z < T.z * 0.96 ? prev : clampC({ ...T, z: Math.max(1, T.z / 1.16) });
      return interp(A, T, EZ.standard(P01(u, d)));
    }
    case "pull": {
      const A = prev.z > T.z * 1.04 ? prev : clampC({ ...T, z: T.z * 1.32, cy: T.cy - 40 / T.z });
      return interp(A, T, EZ.settle(P01(u, d)));
    }
    case "pan": {
      const far = Math.abs(prev.cx - T.cx) * T.z > 140;
      const A = far ? prev : clampC({ ...T, z: Math.max(T.z, 1.3), cx: T.cx + (dir * W * 0.32) / Math.max(T.z, 1.3) });
      const B = far ? T : { ...T, z: Math.max(T.z, 1.3) };
      return interp(A, B, EZ.standard(P01(u, d)));
    }
    case "tilt": {
      const z = Math.max(T.z, 1.4);
      const B = clampC({ ...T, z });
      const A = clampC({ ...B, cy: B.cy + (H * 0.42) / z });
      return interp(A, B, EZ.standard(P01(u, d)));
    }
    case "truck": {
      // trượt ngang suốt cảnh + parallax 2 lớp: nền (xa) trôi chậm hơn người (gần)
      const z = Math.max(T.z, 1.25);
      const sw = (W * 0.07) / z;
      const p = EZ.sine(P01(u, d));
      const off = lerp(-sw, sw, p) * dir;
      const fp = ctx.focusOf([].concat(k.on ?? [])[0]);
      return clampC({ ...T, z, cx: T.cx + off, bgK: 1.12, bgO: [fp?.x ?? W / 2, GROUND], bgDx: off * 0.5 });
    }
    case "whip": {
      const far = Math.abs(prev.cx - T.cx) * T.z > 300;
      const A = far ? prev : clampC({ ...T, cx: T.cx - (dir * W * 0.5) / T.z });
      const p = P01(u, d);
      const st = interp(A, T, EZ.whip(p));
      const v = Math.abs(A.cx - T.cx) * T.z; // quãng lia (px màn)
      st.blur = Math.min(70, 18 + v * 0.06) * Math.pow(Math.sin(Math.PI * p), 2);
      return st;
    }
    case "handheld": {
      const s = ctx.seed;
      return { ...T, z: T.z * 1.035, jx: 7 * noise(u, s), jy: 5 * noise(u + 900, s + 3), rot: (T.rot || 0) + 0.45 * noise(u + 1700, s + 7) };
    }
    case "kenburns": {
      const p = EZ.sine(P01(u, Math.min(d, span || d)));
      return clampC({ ...T, z: T.z * lerp(1, 1.1, p), cx: T.cx + (dir * W * 0.035 * p) / T.z });
    }
    case "punch": {
      const A = prev.z < T.z * 0.95 ? prev : clampC({ ...T, z: Math.max(1, T.z / 1.35) });
      const st = interp(A, T, EZ.punch(P01(u, d)));
      const q = clamp((u - d) / 380, 0, 1);
      if (u > d * 0.6 && q < 1) { const a = 11 * (1 - q) * (1 - q); st.jx = a * Math.sin(u * 0.09); st.jy = a * 0.7 * Math.cos(u * 0.11); }
      st.blur = u < d ? 6 * Math.sin(Math.PI * P01(u, d)) : 0;
      return st;
    }
    case "dolly": {
      // dolly zoom giả: người giữ cỡ, nền phình ra quanh đầu người (cảm giác "choáng, nhận ra")
      const fp = ctx.focusOf([].concat(k.on ?? [])[0]);
      const p = EZ.standard(P01(u, d));
      return { ...T, z: T.z * lerp(1.06, 1, p), bgK: lerp(1, 1.34, p), bgO: [fp?.x ?? W / 2, fp ? fp.y + (fp.h || H0) * 0.2 : H / 2] };
    }
    default: return T;
  }
};

/** Khung camera tại thời điểm t (ms). focusOf(id) → { x, y, h?, dir?, others? }: (x, y) = toạ độ thế giới của ĐỈNH ĐẦU nhân vật.
 *  opt.talk = cảnh có bong bóng thoại (toàn màn) → chừa đầu ≥ ~300 cho bóng. Trả { z, tx, ty, m?, rot?, tilt?, blur?, pov?, ots?, bg? }. */
export const cameraAt = (keys, t, lines, focusOf, opt = {}) => {
  if (!keys?.length) return { z: 1, tx: 0, ty: 0 };
  if (!keys.some(isNewKey)) return legacyCameraAt(keys, t, lines, focusOf);
  const timeOf = (k) => (typeof k.at === "number" ? k.at : lines.find((l) => l.id === k.at)?.startMs ?? 0);
  const ctx = { focusOf, talk: opt.talk !== false, seed: 0 };
  let lastShot = "wide", lastOn = undefined;
  const ks = keys.map((k, i) => {
    const _move = normMove(k.move) || "cut";
    const _shot = normShot(k.shot) || (k.shot == null ? lastShot : "wide");
    const on = k.on ?? (k.shot == null ? lastOn : undefined);
    lastShot = _shot; lastOn = on;
    const lead = _move === "E-MOVE-06" ? (k.ms ?? MOVE_SPEC[_move].d) * 0.5 : ["push", "cut", "E-MOVE-09"].includes(_move) ? (_move === "push" ? 0 : 80) : 0;
    return { ...k, on, _i: i, _move, _shot, _angle: normAngle(k.angle), t: Math.max(0, timeOf(k) - lead) };
  }).sort((a, b) => a.t - b.t || a._i - b._i);
  let cur = { z: 1, cx: W / 2, cy: H / 2, rot: 0, tilt: 0, pov: 0, bgK: 1, bgDx: 0 };
  for (let i = 0; i < ks.length; i++) {
    const k = ks[i];
    if (t < k.t) break;
    ctx.seed = hashStr(`${k._i}|${[].concat(k.on ?? []).join(",")}|${k._shot}`);
    const T = targetOf(k, ctx);
    const next = ks[i + 1];
    const span = next ? next.t - k.t : null;
    const prev = cur;
    const until = next ? Math.min(t, next.t) : t;
    cur = moveAt(k, T, prev, until - k.t, ctx, span);
    const sh = ANGLE_SPEC[k._angle]?.shake;
    if (sh) { const u = until - k.t; cur = { ...cur, z: cur.z * 1.02, jx: (cur.jx || 0) + sh * noise(u, ctx.seed + 11), jy: (cur.jy || 0) + sh * 0.8 * noise(u + 500, ctx.seed + 13) }; }
    if (!next || t < next.t) break;
    // trạng thái để mốc sau nối tiếp: bỏ rung/nhoè tức thời
    cur = { ...cur, jx: 0, jy: 0, blur: 0 };
  }
  return finalize(cur);
};

/** Áp camera lên toạ độ thế giới (để đặt bong bóng thoại đúng chỗ mà chữ không bị phóng to). */
export const camPoint = (cam, x, y) => {
  const p = { x: x * cam.z + cam.tx, y: y * cam.z + cam.ty };
  return cam.m || cam.rot || cam.tilt ? outerMap(p.x, p.y, { m: cam.m || 1, rot: cam.rot || 0, tilt: cam.tilt || 0 }) : p;
};
/** Hệ số phóng toàn phần (lớp trong × lớp ngoài) — cỡ diễn viên trên màn. */
export const camScale = (cam) => cam.z * (cam.m || 1);
/** Camera có làm gì không (cũ: chỉ z > 1). */
export const camActive = (cam) => cam.z > 1.001 || !!(cam.m || cam.rot || cam.tilt || cam.bg || cam.blur);
/** Chuỗi transform CSS cho lớp thế giới (transformOrigin 0 0). Không góc máy → y như #126. */
export const camTransform = (cam) => {
  const inner = `translate(${cam.tx}px, ${cam.ty}px) scale(${cam.z})`;
  if (!(cam.m || cam.rot || cam.tilt)) return inner;
  return `translate(${W / 2}px, ${H / 2}px) perspective(${PERSP}px) rotateX(${cam.tilt || 0}deg) rotate(${cam.rot || 0}deg) scale(${cam.m || 1}) translate(${-W / 2}px, ${-H / 2}px) ${inner}`;
};
/** transform cho lớp nền khi có parallax / dolly zoom (toạ độ thế giới). */
export const bgTransform = (bg) => `translate(${bg.dx}px, 0px) translate(${bg.ox}px, ${bg.oy}px) scale(${bg.k}) translate(${-bg.ox}px, ${-bg.oy}px)`;
