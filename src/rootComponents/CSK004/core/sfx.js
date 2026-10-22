// sfx.js — lớp tiếng động của video (#126, #127; nghiên cứu 2026-10-20-dung-video/2-tieng-dong-sfx.md).
// Bật bằng kịch bản: audio.sfxPack = "detpro-1". Kho âm: core/sfx-kho.js (tự sinh — `node tools/make-sfx.mjs`, bảng tra VID/KHO-SFX.md).
// Ba nguồn sự kiện: (1) mặc định theo module (AUTO), (2) chuyển cảnh (whip → whoosh, iris → det),
// (3) kịch bản ghi thêm/bỏ: scene.sfx = false | [{ at: "<id câu>" | <ms> | "start", to?: "<id câu>" | "end", key, gain?, end?, offsetMs? }].
//     Có "to" → âm kéo dài đến hết câu đó (âm lặp thì lặp), vào 0,2 s / ra 0,4 s cho mềm.
// Luật (HUONG-DAN-VIDEO §8.2 + nghiên cứu): mỗi sfx gắn một thay đổi chính trên hình; không đè đầu câu đọc
// (đặt trước câu ≥ 150 ms); hai sfx cách nhau ≥ 250 ms; trần 8 sfx mỗi phút (bỏ âm ưu tiên thấp). Âm nền dài không tính vào trần.
import { KHO } from "./sfx-kho.js";
import { drawSpans, boardShotTimes } from "../modules/board.jsx";

export const SFX_PACK = "detpro-1";
export const sfxFile = (key) => `sfx/${key}.wav`;
export { KHO };

// độ to khi phát (0..1) — lấy từ kho; muốn đổi lâu dài thì sửa "gain" trong tools/make-sfx.mjs
export const SFX_GAIN = Object.fromEntries(Object.entries(KHO).map(([k, v]) => [k, v.gain]));
// ưu tiên giữ lại khi vượt trần (số lớn = giữ trước)
const PRIORITY = { "go-bang": 2, "go-bang-2": 4, logo: 9, det: 8, chuong: 8, "re-dia": 7, tua: 7, nhan: 7, dung: 6, "khong-phai": 6, "cau-hoi": 6, "muc-luc": 6, ting: 5, whoosh: 4, xu: 4, "tin-den": 4, rung: 3, pop: 3, "lat-the": 3, tich: 2 };

// ctx.sfx cho các module đã có chỗ phát sẵn (DLG-01, QUIZ, TYPE-01)
export const moduleSfxMap = () => ({
  stop: sfxFile("re-dia"), det: sfxFile("det"), rewind: sfxFile("tua"), ok: sfxFile("dung"),
  tick: sfxFile("tich-tac"), reveal: sfxFile("dung"), "go-phim-01": sfxFile("go-phim"),
});
// module tự phát âm riêng → lớp chung không thêm gì cho các module này
const SELF = new Set(["DLG-01", "QUIZ-01", "QUIZ-03", "QUIZ-05", "QUIZ-06", "QUIZ-07", "QUIZ-09", "TYPE-01"]);

/** Âm mặc định theo module: trả về [{ line: chỉ số câu | null (đầu cảnh), key, offsetMs? }]. */
const AUTO = {
  "HOST-03": () => [{ line: null, key: "chuong", offsetMs: 300 }], // sau whoosh của whip (cách ≥ 250 ms)
  "TOC-01": () => [{ line: null, key: "muc-luc", offsetMs: 120 }],
  "HOST-01": () => [{ line: 1, key: "ting" }],
  "HOST-02": (d) => [{ line: 0, key: "cau-hoi" }, { line: 1, key: d?.truth ? "dung" : "khong-phai" }],
  "CMP-09": () => [{ line: 1, key: "khong-phai" }],
  "CMP-08": () => [{ line: 1, key: "pop" }],
  "NUM-12": () => [{ line: 0, key: "ting", end: true }],
  "STAT-01": () => [{ line: 0, key: "ting", end: true }],
  "ASK-01": () => [{ line: 0, key: "cau-hoi" }],
  "MYTH-01": () => [{ line: 1, key: "khong-phai" }],
  "LIST-05": (d, lines) => [{ line: Math.max(0, (lines?.length || 1) - 1), key: "tich" }],
  "END-02": () => [{ line: 0, key: "ting" }],
  "END-05": () => [{ line: null, key: "logo", offsetMs: 800 }], // sau tiếng "đét" của iris
  // #130: bảng vẽ — tiếng bút chạy đúng các quãng đang vẽ nét (hình minh hoạ vẽ êm, không tiếng)
  // #131: mỗi lần đặt bút (đầu một quãng vẽ) có tiếng "cộc" gõ bảng; chuyển camera sang ô khác: "cộc cộc"
  "BOARD-01": (d, lines) => [
    ...drawSpans(d, lines).flatMap(([a, b]) => [{ ms: Math.max(0, a - 40), key: "go-bang" }, { ms: a, untilMs: b, key: "but-viet" }]),
    ...boardShotTimes(d, lines).map((ms) => ({ ms, key: "go-bang-2" })),
  ],
  // #126 lượt nghe 1: giữa bài thưa (1–3 âm/phút) → thêm âm cho thẻ chữ và danh sách, mỗi âm gắn một thay đổi trên hình
  "TEXT-01": () => [{ line: null, key: "lat-the", offsetMs: 0 }],
  "TEXT-02": () => [{ line: null, key: "lat-the", offsetMs: 0 }],
  "TEXT-04": () => [{ line: 0, key: "nhan" }],
  "CMP-01": () => [{ line: 1, key: "pop" }],
  "LIST-02": (d, lines) => (lines || []).map((_, i) => ({ line: i, key: "tich" })),
  "LIST-06": (d, lines) => (lines || []).map((_, i) => ({ line: i, key: "tich" })),
  "LIST-13": (d, lines) => (lines || []).map((_, i) => ({ line: i, key: "tich" })),
};

const PRE = 150; // ms: âm đặt trước đầu câu để không đè lời
/**
 * Lịch sfx cho cả video. scenes = layoutScript(...).scenes (có from, frames, timeline, transition).
 * Trả về [{ frame, key, gain, why }].
 */
export const sfxEvents = (script, scenes, fps) => {
  if (!script.audio?.sfxPack) return [];
  const ev = [];
  const f = (sceneFrom, ms) => sceneFrom + Math.round((ms / 1000) * fps);
  const lineMs = (s, i, end) => {
    const l = s.timeline[i];
    if (!l) return null;
    return end ? l.endMs + 60 : Math.max(0, l.startMs - PRE);
  };
  for (const s of scenes) {
    // chuyển cảnh
    if (s.transition?.type === "whip") ev.push({ frame: s.from - 2, key: "whoosh", why: `${s.id} whip` });
    if (s.transition?.type === "iris") ev.push({ frame: s.from + 10, key: "det", why: `${s.id} iris` });
    if (s.sfx === false) continue;
    const explicit = Array.isArray(s.sfx) ? s.sfx : [];
    const auto = !SELF.has(s.module) && !s.sfxNoAuto && AUTO[s.module] ? AUTO[s.module](s.data, s.timeline) : [];
    for (const a of auto) {
      if (a.ms != null) { ev.push({ frame: f(s.from, a.ms), key: a.key, until: a.untilMs != null ? f(s.from, a.untilMs) : null, why: `${s.id} ${s.module}` }); continue; }
      const ms = a.line == null ? a.offsetMs || 0 : lineMs(s, a.line, a.end);
      if (ms != null) ev.push({ frame: f(s.from, ms), key: a.key, why: `${s.id} ${s.module}` });
    }
    for (const e of explicit) {
      let ms = null;
      if (typeof e.at === "number") ms = e.at;
      else if (e.at === "start" || e.at == null) ms = 0;
      else if (typeof e.at === "string") {
        const i = s.timeline.findIndex((l) => l.id === e.at);
        ms = i >= 0 ? lineMs(s, i, e.end) : null;
      }
      if (ms == null) continue;
      const start = f(s.from, ms + (e.offsetMs || 0));
      let until = null; // khung kết thúc (âm kéo dài)
      if (e.to === "end") until = s.from + s.frames;
      else if (typeof e.to === "string") { const l = s.timeline.find((x) => x.id === e.to); if (l) until = f(s.from, l.endMs + 250); }
      else if (typeof e.to === "number") until = f(s.from, e.to);
      ev.push({ frame: start, key: e.key, gain: e.gain, until, why: `${s.id} kịch bản` });
    }
  }
  // khoá không có trong kho (chưa tải âm thật) → bỏ qua, check-script báo
  for (let i = ev.length - 1; i >= 0; i--) if (!KHO[ev[i].key]) ev.splice(i, 1);
  // âm kéo dài (có "to") là lớp nền: không tính vào khoảng cách/trần
  const beds = ev.filter((e) => e.until != null);
  for (const b of beds) ev.splice(ev.indexOf(b), 1);
  ev.sort((a, b) => a.frame - b.frame);
  // khoảng cách tối thiểu 250 ms: giữ âm ưu tiên cao hơn
  const gap = Math.round(0.25 * fps);
  const kept = [];
  for (const e of ev) {
    const prev = kept.at(-1);
    if (prev && e.frame - prev.frame < gap) {
      if ((PRIORITY[e.key] || 1) > (PRIORITY[prev.key] || 1)) kept[kept.length - 1] = e;
      continue;
    }
    kept.push(e);
  }
  // trần 8 sfx trong mỗi cửa sổ 60 s
  const win = 60 * fps;
  let out = kept;
  for (let guard = 0; guard < 50; guard++) {
    const bad = out.findIndex((e, i) => out.filter((x) => x.frame >= e.frame && x.frame < e.frame + win).length > 8);
    if (bad < 0) break;
    const inWin = out.filter((x) => x.frame >= out[bad].frame && x.frame < out[bad].frame + win);
    const drop = inWin.reduce((m, x) => ((PRIORITY[x.key] || 1) < (PRIORITY[m.key] || 1) ? x : m), inWin[0]);
    out = out.filter((x) => x !== drop);
  }
  const fileFrames = (k) => Math.ceil(((KHO[k]?.ms ?? 1000) / 1000) * fps) + 2;
  // #136: tắt hẳn một số âm cho cả bài, vd. audio.sfxOff: ["but-viet"] (bỏ tiếng bút chạy, giữ tiếng gõ bảng)
  const off = new Set(script.audio?.sfxOff || []);
  out = out.filter((e) => !off.has(e.key));
  return [
    ...out.map((e) => ({ ...e, frames: fileFrames(e.key), loop: false })),
    ...beds.filter((e) => !off.has(e.key)).map((e) => ({ ...e, frames: Math.max(6, e.until - e.frame), loop: !!KHO[e.key]?.loop, bed: true })),
  ]
    .map((e) => ({ ...e, frame: Math.max(0, e.frame), gain: e.gain ?? SFX_GAIN[e.key] ?? 0.3 }))
    .sort((a, b) => a.frame - b.frame);
};

/** Khoá sfx kịch bản gọi mà kho chưa có (cho tools/check-script.mjs). */
export const sfxMissing = (script) => {
  const miss = [];
  for (const s of script.scenes || []) for (const e of Array.isArray(s.sfx) ? s.sfx : []) if (!KHO[e.key]) miss.push(`${s.id}:${e.key}`);
  return miss;
};
