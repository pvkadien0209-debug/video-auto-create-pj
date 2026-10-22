import { ik, UPPER, FORE } from "./geom.js";
// poses.js — tư thế đặt tên sẵn cho người (dùng chung mọi áo da). Mỗi tư thế chỉ là con số → trộn/nội suy được.
// R = tay bên phải người xem (tay "diễn"), L = tay bên trái người xem.
export const POSES = {
  stand: {},
  walk: { walkAmt: 1, walk: 0.9 }, // cảnh động: truyền walk = pha bước theo khung
  wave: { R: { sh: -148, el: -18, hand: "stop" }, tilt: -3 },
  point: { R: { sh: -84, el: -6, hand: "point" }, lean: 2 }, // chỉ sang phải người xem
  pointL: { L: { sh: 84, el: 6, hand: "point" }, lean: -2 }, // chỉ sang trái người xem
  stop: { R: { sh: -62, el: -118, hand: "stop" } }, // giơ tay "dừng", lòng bàn tay hướng ra
  cross: { cross: true }, // khoanh tay
  phone: { R: { ...ik(60, 0, -6, 92, UPPER, FORE, 1), hand: "phone" }, nod: 10 }, // cầm điện thoại trước ngực, cúi nhìn
  thumb: { R: { sh: -40, el: -95, hand: "thumb" } },
  give: { R: { sh: -58, el: -38, hand: "idcard" }, lean: 3 }, // đưa giấy tờ sang phải
  // #106: thêm cho cảnh hội thoại
  think: { R: { ...ik(60, 0, 14, -48, UPPER, FORE, -1), hand: "open" }, tilt: 4 }, // tay chống cằm, nghĩ
  explain: { R: { sh: -38, el: -58, hand: "stop" }, lean: 1 }, // xoè tay giải thích về phía người nghe
  shrug: { R: { sh: -58, el: -70, hand: "stop" }, L: { sh: 58, el: 70, hand: "stop" }, tilt: -4 }, // nhún vai, hai tay ngửa
  hold: { R: { sh: 12, el: 52, hand: "open" }, L: { sh: -12, el: -52, hand: "open" }, front: true }, // hai tay đặt trước bụng (lễ phép, chờ)
};
export const POSE_VI = { stand: "đứng", walk: "đi", wave: "vẫy", point: "chỉ", pointL: "chỉ (tay trái)", stop: "giơ tay dừng", cross: "khoanh tay", phone: "cầm điện thoại", thumb: "ngón cái", give: "đưa giấy tờ",
  think: "chống cằm nghĩ", explain: "xoè tay giải thích", shrug: "nhún vai", hold: "chắp tay chờ" };

/** Tư thế có hướng (chỉ, đưa, giải thích): vẽ sẵn hướng sang PHẢI người xem; nhân vật nhìn sang trái thì lật (mirrorPose). */
export const DIRECTIONAL = new Set(["point", "give", "explain", "wave", "stop", "thumb"]);

/** Lật tư thế trái ↔ phải: đổi tay R/L, đổi dấu góc, nghiêng, quay mặt. */
export const mirrorPose = (p) => {
  const out = { ...p };
  const flip = (a) => (a ? { ...a, sh: -a.sh, el: -a.el } : undefined);
  out.R = flip(p.L);
  out.L = flip(p.R);
  if (!out.R) delete out.R;
  if (!out.L) delete out.L;
  for (const k of ["lean", "tilt", "turn"]) if (typeof p[k] === "number") out[k] = -p[k];
  return out;
};
export const SHEET_POSES = ["stand", "walk", "wave", "point", "stop", "cross", "phone"];

/** Trộn hai tư thế theo t (0..1) — nội suy mọi số, kể cả góc tay. */
export const mix = (a, b, t) => {
  const out = {};
  for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
    const va = a[k], vb = b[k];
    if (typeof va === "number" || typeof vb === "number") out[k] = (va ?? 0) + ((vb ?? 0) - (va ?? 0)) * t;
    else if (k === "R" || k === "L") {
      const da = va ?? (k === "R" ? { sh: -6, el: -4 } : { sh: 8, el: 4 }), db = vb ?? (k === "R" ? { sh: -6, el: -4 } : { sh: 8, el: 4 });
      out[k] = { sh: da.sh + (db.sh - da.sh) * t, el: da.el + (db.el - da.el) * t, hand: t < 0.5 ? da.hand : db.hand, card: t < 0.5 ? da.card : db.card };
    } else out[k] = t < 0.5 ? va : vb;
  }
  return out;
};
