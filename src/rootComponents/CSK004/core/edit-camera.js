// edit-camera.js — #144 họ biến thể máy quay cho cảnh nhân vật (agent B).
//   EDIT_SHOT (E-SHOT-01…10) · EDIT_MOVE (E-MOVE-01…10) · EDIT_ANGLE (E-ANG-01…06) — danh mục cho core/edit.js
//   autoShots(lines, cast, { seed }) → data.camera theo shot grammar (mẫu A), tất định theo seed
//   Lớp phụ vẽ trong modules/anim.jsx: CamBlurDefs/camBlurFilter (nhoè ngang khi lia nhanh), PovVignette, otsPlace (vai tiền cảnh)
// Bộ máy tính khung: core/camera.js (cameraAt). Cách ghi trong kịch bản:
//   data.camera = [{ at: "<id câu>" | <ms>, shot: "E-SHOT-05", on: "lan" | ["lan","dung"], move: "E-MOVE-01", angle: "E-ANG-02", ms?: 2000 }]
//   Bỏ shot → giữ cỡ + người của mốc trước (chỉ đổi move/angle). Bỏ move → cắt (cut). Tên cũ wide/medium/close, push/cut vẫn chạy.
import React from "react";

export const EDIT_SHOT = [
  { id: "E-SHOT-01", name: "Toàn cảnh thiết lập (EWS)", how: '{ at: 0, shot: "E-SHOT-01" } — cả bối cảnh, tự trôi từ trên cao xuống ~2,8 s (ms đổi được)' },
  { id: "E-SHOT-02", name: "Toàn (WS)", how: '{ at, shot: "E-SHOT-02", on: "lan" } — toàn thân + nhiều bối cảnh, ×1,22' },
  { id: "E-SHOT-03", name: "Toàn thân (FS)", how: '{ at, shot: "E-SHOT-03", on } — đầu tới chân, chừa chỗ phía nhìn' },
  { id: "E-SHOT-04", name: "Trung toàn / cowboy (MWS)", how: '{ at, shot: "E-SHOT-04", on } — từ gối lên' },
  { id: "E-SHOT-05", name: "Trung / nửa người (MS)", how: '{ at, shot: "E-SHOT-05", on } — từ eo lên, mắt ở 1/3 trên, cỡ chủ lực cho thoại' },
  { id: "E-SHOT-06", name: "Cận trung (MCU)", how: '{ at, shot: "E-SHOT-06", on } — từ ngực lên; phản ứng, câu quan trọng' },
  { id: "E-SHOT-07", name: "Cận (CU, mặt–vai)", how: '{ at, shot: "E-SHOT-07", on } — câu then chốt; ≤ 2 lần mỗi cảnh' },
  { id: "E-SHOT-08", name: "Đặc tả (ECU)", how: '{ at, shot: "E-SHOT-08", on, ms? } — mắt–miệng lấp khung (×12 trong khung ảnh, ×9 toàn màn — rig vector không vỡ); giữ 0,5–1,5 s' },
  { id: "E-SHOT-09", name: "Hai người (two-shot)", how: '{ at, shot: "E-SHOT-09", on: ["lan","dung"] } — khung cả hai đầu; bỏ on → hai người đầu tiên' },
  { id: "E-SHOT-10", name: "Qua vai (OTS)", how: '{ at, shot: "E-SHOT-10", on: "dung" } — người nói 1/3 bên kia, vai + đầu người nghe tối mờ ở mép tiền cảnh (on: ["dung","lan"] để chọn người tiền cảnh)' },
];
export const EDIT_MOVE = [
  { id: "E-MOVE-01", name: "Đẩy vào chậm (push-in)", how: '{ at, shot, on, move: "E-MOVE-01" } — 2,6 s, từ khung trước (nếu rộng hơn) hoặc ×1/1,16 vào cỡ đích' },
  { id: "E-MOVE-02", name: "Lùi ra (pull-out)", how: '{ at, shot: "E-SHOT-09", move: "E-MOVE-02" } — 1,9 s, dừng mềm; kết cảnh / lộ bối cảnh' },
  { id: "E-MOVE-03", name: "Lia ngang (pan)", how: '{ at, shot, on, move: "E-MOVE-03" } — 1,3 s từ khung trước sang người mới (hoặc từ khoảng trống bên cạnh)' },
  { id: "E-MOVE-04", name: "Lia dọc (tilt-up)", how: '{ at, shot, on, move: "E-MOVE-04" } — 1,7 s từ thân dưới lên mặt (giới thiệu nhân vật)' },
  { id: "E-MOVE-05", name: "Trượt ngang + parallax (truck)", how: '{ at, shot, on, move: "E-MOVE-05" } — trôi ngang suốt 3,6 s; nền (lớp xa) trôi chậm hơn người (lớp gần)' },
  { id: "E-MOVE-06", name: "Lia nhanh nhoè (whip pan)", how: '{ at, shot, on: "<người mới>", move: "E-MOVE-06" } — 0,42 s, nhoè ngang ở giữa; điểm giữa trùng đầu câu' },
  { id: "E-MOVE-07", name: "Rung tay (handheld)", how: '{ at, shot, on, move: "E-MOVE-07" } — rung nhẹ ±7 px, ±0,45° suốt mốc; lúc rối, căng' },
  { id: "E-MOVE-08", name: "Ken Burns trôi chậm", how: '{ at, shot, on, move: "E-MOVE-08" } — phóng ×1,10 + trôi ngang suốt mốc (≤ 6 s)' },
  { id: "E-MOVE-09", name: "Zoom giật (punch-in / crash zoom)", how: '{ at, shot: "E-SHOT-07", on, move: "E-MOVE-09" } — 0,19 s vọt quá rồi dừng + rung tắt dần' },
  { id: "E-MOVE-10", name: "Dolly zoom giả (vertigo)", how: '{ at, shot: "E-SHOT-06", on, move: "E-MOVE-10" } — người giữ cỡ, nền phình ×1,34 quanh đầu; ≤ 1 lần/video' },
];
export const EDIT_ANGLE = [
  { id: "E-ANG-01", name: "Ngang mắt", how: '{ ..., angle: "E-ANG-01" } — trung tính (mặc định)' },
  { id: "E-ANG-02", name: "Máy thấp hất lên (mạnh)", how: '{ ..., angle: "E-ANG-02" } — phối cảnh hất 7°, người to và cao trong khung' },
  { id: "E-ANG-03", name: "Máy cao nhìn xuống (yếu)", how: '{ ..., angle: "E-ANG-03" } — phối cảnh chúc 7°, người thấp trong khung, nhiều khoảng trên đầu' },
  { id: "E-ANG-04", name: "Nghiêng khung (dutch)", how: '{ ..., angle: "E-ANG-04", rotSign?: -1 } — nghiêng 10°, phóng vừa đủ không lộ góc; ≤ 2–3 s' },
  { id: "E-ANG-05", name: "Từ trên xuống (overhead giả)", how: '{ ..., angle: "E-ANG-05" } — chúc mạnh 24°, người giữa khung' },
  { id: "E-ANG-06", name: "Góc nhìn nhân vật (POV)", how: '{ ..., angle: "E-ANG-06" } — viền tối quanh khung (ống nhòm/mắt nhìn) + rung tay rất nhẹ' },
];

// ---------------------------------------------------------------- lớp phụ (anim.jsx vẽ)
const blurId = (b) => `cam-whip-${Math.round(b)}`;
/** filter CSS cho lớp thế giới khi lia nhanh: nhoè NGANG (SVG feGaussianBlur stdDeviation "b 0"). */
export const camBlurFilter = (b) => `url(#${blurId(b)})`;
export const CamBlurDefs = ({ blur }) =>
  React.createElement("svg", { width: 0, height: 0, style: { position: "absolute" } },
    React.createElement("defs", null,
      React.createElement("filter", { id: blurId(blur), x: "-5%", y: "0%", width: "110%", height: "100%" },
        React.createElement("feGaussianBlur", { stdDeviation: `${Math.round(blur)} 0`, edgeMode: "duplicate" }))));

/** Viền tối mờ của góc nhìn nhân vật (POV). k = 0..1. */
export const PovVignette = ({ k = 1 }) =>
  React.createElement("div", { style: { position: "absolute", left: 0, top: 0, width: 1920, height: 1080, pointerEvents: "none", opacity: k } },
    React.createElement("div", { style: { position: "absolute", inset: 0, background: "radial-gradient(ellipse 68% 66% at 50% 46%, rgba(8,12,22,0) 50%, rgba(8,12,22,.5) 74%, rgba(8,12,22,.92) 100%)" } }));

/** Chỗ đứng (toạ độ màn) của người tiền cảnh trong khung qua vai: to hơn người nói ~1,2×, đầu sát mép bên phía mình. */
export const otsPlace = (cam, st) => {
  const s = st.s * cam.z * (cam.m || 1) * 1.45;
  const hh = st.fig.h * s;
  const side = cam.ots?.side || -1;
  return { x: side < 0 ? -20 : 1940, y: 1080 * 0.42 + hh, s };
};

// ---------------------------------------------------------------- shot grammar tự động
const mulberry = (a) => () => { a = (a + 0x6d2b79f5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const hashStr = (s) => { let h = 2166136261; for (const c of String(s)) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0; return h; };
const isKey = (l) => (Array.isArray(l.keys) ? l.keys.length > 0 : !!l.keys);

/**
 * Sinh data.camera theo mẫu A (nghiên cứu §6.1): thiết lập → two-shot → shot/reverse theo người nói (cùng cỡ hai phía)
 * → CU câu then chốt (line.keys, ≤ 2) → reaction người nghe (câu kế) → lùi ra kết cảnh. Tất định theo seed.
 * lines: [{ id, who, keys? }] (thứ tự kịch bản) · cast: actors của cảnh ([{ id }] hoặc ["lan", ...]).
 */
export const autoShots = (lines = [], cast = [], { seed = 0 } = {}) => {
  const ppl = cast.map((a) => (typeof a === "string" ? a : a?.id)).filter((id) => id && id !== "det");
  const said = lines.filter((l) => l.who && ppl.includes(l.who));
  if (!said.length || !ppl.length) return [];
  const rnd = mulberry((seed >>> 0) ^ hashStr(lines.map((l) => l.id).join("|")));
  const two = ppl.length >= 2;
  const other = (who) => ppl.find((p) => p !== who) || who;
  const single = two && rnd() < 0.4 ? "E-SHOT-10" : "E-SHOT-05"; // shot/reverse: cùng cỡ cả hai phía
  const keyMove = rnd() < 0.3 ? "E-MOVE-09" : "E-MOVE-01";
  const out = [{ at: 0, shot: "E-SHOT-01" }];
  const used = new Set();
  const add = (k) => { if (!used.has(k.at)) (used.add(k.at), out.push(k)); };
  const first = said[0];
  add(two ? { at: first.id, shot: "E-SHOT-09", on: [ppl[0], ppl[1]], ...(rnd() < 0.5 ? { move: "E-MOVE-01", ms: 3000 } : {}) } : { at: first.id, shot: "E-SHOT-04", on: first.who });
  let cuLeft = 2, lastWho = first.who, keyLine = null, sinceCut = 0, solo = 0;
  for (let i = 1; i < said.length; i++) {
    const l = said[i];
    sinceCut++;
    const isLast = i === said.length - 1;
    if (isKey(l) && cuLeft > 0) {
      add({ at: l.id, shot: "E-SHOT-07", on: l.who, move: keyMove });
      cuLeft--; keyLine = l; lastWho = l.who; sinceCut = 0;
      continue;
    }
    if (isLast && !keyLine) break; // câu cuối: để dành cho cú lùi ra
    if (keyLine) {
      // reaction sau câu then chốt: cùng người nói tiếp → cắt sang người nghe (L-cut); người kia đáp → MCU người đáp
      const on = two && l.who === keyLine.who ? other(l.who) : l.who;
      add({ at: l.id, shot: "E-SHOT-06", on });
      keyLine = null; lastWho = l.who; sinceCut = 0;
      continue;
    }
    if (l.who !== lastWho || sinceCut >= 2) {
      add({ at: l.id, shot: two ? single : ["E-SHOT-05", "E-SHOT-06", "E-SHOT-04"][solo++ % 3], on: two && single === "E-SHOT-10" ? [l.who, other(l.who)] : l.who });
      lastWho = l.who; sinceCut = 0;
    }
  }
  // lùi ra kết cảnh: ở câu cuối có người nói, hoặc câu ngay sau nếu câu cuối đã có mốc (CU/reaction)
  const last = said.at(-1);
  const after = lines[lines.indexOf(last) + 1];
  const endAt = !used.has(last.id) ? last.id : after ? after.id : null;
  if (endAt && said.length > 1) add({ at: endAt, shot: two ? "E-SHOT-09" : "E-SHOT-02", on: two ? [ppl[0], ppl[1]] : last.who, move: "E-MOVE-02" });
  return out;
};
