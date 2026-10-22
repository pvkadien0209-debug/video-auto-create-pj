// ScriptVideo.jsx — đọc một kịch bản (detpro.video-script/0.2) → dãy cảnh nối nhau.
// Module do KỊCH BẢN chọn (MV-Q5); ở đây chỉ xếp lịch, chuyển cảnh, lớp nhạc, âm hiệu.
import { pickVoice, VOICE_DIRS } from "../core/voice.js";
import React, { useMemo } from "react";
import { AbsoluteFill, Audio, Freeze, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";
import { getModule } from "../modules/index.js";
import { quizTimeline } from "../modules/quiz.jsx";
import { COLORS, accentOf } from "../core/theme.js";
import { sfxEvents, moduleSfxMap, sfxFile } from "../core/sfx.js";
import { msToFrames, lineTimeline } from "../core/timing.js";
import { Subtitles } from "./Subtitles.jsx";
import { CodeTag } from "../core/ui.jsx";
import { ensureFonts } from "../core/fonts.js";
import { PanelFrame, Presenter, panelOf } from "../core/presenter.jsx";
import { planEdits } from "../core/edit-plan.js";
import { transOf, NEW_TRANS, layoutIdOf, LAYOUTS } from "../core/edit-layout.js"; // #144 agent A

const DEFAULT_AFTER = { BEAT: 200, QUIZ: 500, END: 500, BOARD: 150 }; // #135: rút nhịp lặng cuối cảnh // nhịp lặng cuối cảnh (ms) nếu kịch bản không ghi
const DB = (db) => (db === null ? 0 : Math.pow(10, db / 20));
const LEVELS = { full: 0, bed: -6, duck: -15, duckDeep: -20, off: null }; // HUONG-DAN-VIDEO §8.1

// #126: chuyển cảnh — cắt thẳng là mặc định (§9.6, nghiên cứu 4-dung-va-chuyen-canh); không chồng khung nên không đổi thời lượng.
//   whip (4–5 khung, nhoè ngang) cho mở chương HOST-03; iris Vòng Đét cho cảnh câu hỏi chính và cảnh kết; kịch bản ghi đè bằng scene.transition.
// #144: mã E-TR-01…12 (scene.transition hoặc scene.edit.trans) → kiểu mới, giữ hình cảnh trước (Freeze) trong vài khung đầu.
const transitionOf = (s, script) => {
  const tr = s.edit?.trans ?? s.transition;
  if (tr) return transOf(tr);
  if (script.scenes[0] === s) return { type: "cut" };
  if (s.module === "HOST-03") return { type: "whip", frames: 5, dir: 1 };
  if (s.module === "END-05") return { type: "iris", frames: 14 };
  return { type: "cut" };
};

/** Xếp lịch: mỗi cảnh = thời gian module cần (chế độ chỉ chữ) + nhịp lặng sau cảnh. */
export const layoutScript = (script0, fps, audioMs = {}) => {
  const script = planEdits(script0); // #144: tự xoay vòng biến thể edit (bỏ qua nếu đã lập / script.edit === false)
  // #109: tên các chương (cảnh HOST-03) cho mục lục TOC-01 và dải chương ở HOST-03
  const chapters = script.scenes.filter((s) => s.module === "HOST-03").map((s) => s.data?.title).filter(Boolean);
  const ctxBase = { level: script.unit?.level || "B1", accent: accentOf(script), chapters, boards: script.boards || {} };
  let from = 0;
  const boardDone = {}; // #130: phần tử đã vẽ ở các cảnh BOARD-01 trước (cùng bảng) → cảnh sau hiện sẵn
  const dataOf = (s) => {
    if (s.module !== "BOARD-01") return s.data;
    const id = s.data?.board;
    const d = { ...s.data, _prior: [...(boardDone[id] || [])] };
    boardDone[id] = [...(boardDone[id] || []), ...(s.data?.items || [])];
    return d;
  };
  const scenes = script.scenes.map((s0) => {
    const s = s0.module === "BOARD-01" ? { ...s0, data: dataOf(s0) } : s0;
    const mod = getModule(s.module);
    // #106: cảnh dài đủ cho cả phần hình (module) lẫn lời đọc tiếng Anh + phụ đề tiếng Việt
    const slug = script.unit?.slug;
    const timeline = lineTimeline(s.lines, { level: ctxBase.level, audioMs, key: slug ? (l) => `${slug}/${s.id}-${l.id}` : null });
    const voiceEnd = timeline.length ? timeline.at(-1).endMs : 0;
    const ms = Math.max(mod.estimate(s.data, { ...ctxBase, lines: timeline }), voiceEnd) + (s.beats?.after ?? DEFAULT_AFTER[mod.family] ?? 250);
    const frames = s.duration?.ms ? msToFrames(s.duration.ms, fps) : msToFrames(ms, fps);
    const item = { ...s, mod, from, frames, timeline, transition: transitionOf(s, script) };
    item.inPanel = panelOf(item, script); // #134: cảnh thu vào khung bên phải, Đét đứng bên dẫn
    from += frames;
    return item;
  });
  scenes.forEach((x, i) => { x.panelEnter = x.inPanel && !(i > 0 && scenes[i - 1].inPanel); });
  // #144: bố cục người dẫn E-LAY (cảnh khung) + bố cục cảnh khung liền trước (để trượt/đi sang mượt)
  scenes.forEach((x, i) => {
    x.layout = x.inPanel ? layoutIdOf(x, script) : null;
    x.prevLayout = x.inPanel && i > 0 && scenes[i - 1].inPanel ? scenes[i - 1].layout : null;
    // kiểu bảng (agent C, E-BD) → màu viền/khay khung bảng
    x.boardStyle = x.edit?.board ?? x.data?.style ?? script.boards?.[x.data?.board]?.style ?? null;
  });
  return { scenes, total: from, ctxBase };
};

/** Mức nhạc theo khung hình (đếm ngược tắt nhạc, thẻ chương nhạc gốc, còn lại "bed" ở chế độ chữ). */
const musicVolume = (frame, scenes, fps, script) => {
  const fadeIn = interpolate(frame, [0, 9], [0, 1], { extrapolateRight: "clamp" });
  const total = scenes.at(-1).from + scenes.at(-1).frames;
  const fadeOut = interpolate(frame, [total - 45, total], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const sc = scenes.find((s) => frame >= s.from && frame < s.from + s.frames) || scenes.at(-1);
  let level = sc.audio?.music || (sc.mod.family === "BEAT" ? "full" : "bed");
  if (sc.mod.family === "QUIZ") {
    const t = quizTimeline(sc.data, { level: script.unit?.level || "B1" });
    const local = frame - sc.from;
    const c0 = msToFrames(t.countAt, fps), r = msToFrames(t.revealAt + 500, fps);
    if (local >= c0 && local < r) level = "off";
  }
  return DB(LEVELS[level]) * fadeIn * fadeOut * (script.audio?.music?.gain ?? 1);
};

// #110: tự bật giọng khi MỌI câu của video đã có mp3 (server TTS ghi audio-durations.json); audio.voice: false để tắt
export const hasAllVoice = (script, audioMs = {}) => {
  const slug = script.unit?.slug;
  return !!slug && script.scenes.every((s) => (s.lines || []).every((l) => audioMs[`${slug}/${s.id}-${l.id}`] != null));
};

// #126: bỏ hoà mờ 8 khung ở mọi chỗ nối (trái §9.6). Chuyển cảnh chỉ tác động lên cảnh vào, không chồng khung.
const RING = "#ffd23f"; // Vòng Đét
const transitionStyle = (tr, frame) => {
  if (!tr || tr.type === "cut") return {};
  const n = tr.frames || (tr.type === "iris" ? 14 : 5);
  if (frame >= n) return {};
  const p = interpolate(frame, [0, n], [0, 1], { extrapolateRight: "clamp" });
  const e = 1 - Math.pow(1 - p, 3);
  if (tr.type === "whip") return { transform: `translateX(${(1 - e) * 38 * (tr.dir || 1)}%)`, filter: `blur(${(1 - e) * 24}px)` };
  if (tr.type === "iris") return { clipPath: `circle(${e * 75}% at 50% 50%)` };
  if (tr.type === "fade") return { opacity: e };
  return {};
};
const IrisRing = ({ tr }) => {
  const frame = useCurrentFrame();
  const n = tr.frames || 14;
  if (tr.type !== "iris" || frame > n + 6) return null;
  const e = 1 - Math.pow(1 - Math.min(1, frame / n), 3);
  const r = e * 0.75 * Math.hypot(1920, 1080);
  return (
    <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, pointerEvents: "none", opacity: frame <= n ? 1 : 1 - (frame - n) / 6 }}>
      <circle cx={960} cy={540} r={Math.max(1, r)} fill="none" stroke={RING} strokeWidth={18} />
    </svg>
  );
};

/* #144 (agent A): chuyển cảnh E-TR-01…12. Cảnh trước giữ hình khung cuối (Freeze, tắt âm hiệu) dưới/trên cảnh mới trong
   tr.frames khung đầu của cảnh mới → không chồng thời lượng. Toạ độ 1920×1080 (trong khung bảng thì là toạ độ bảng). */
const cl01 = (x) => Math.max(0, Math.min(1, x));
const eIO = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
const eOut = (k) => 1 - Math.pow(1 - k, 3);
const Eraser = ({ x, y, rot }) => (
  // giẻ lau bảng (gỗ + nỉ) do bàn tay Đét cầm
  <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <rect x={-70} y={-150} width={140} height={300} rx={22} fill="#3b4256" />
      <rect x={-40} y={-158} width={86} height={316} rx={26} fill="#b07a4f" stroke="#8a5a3c" strokeWidth={5} />
      <path d="M -20 -120 L -20 120 M 10 -120 L 10 120" stroke="#c9946a" strokeWidth={5} strokeLinecap="round" />
      <circle cx={18} cy={0} r={46} fill="#b8693d" stroke="#8a4524" strokeWidth={4} />
      {[-26, 0, 26].map((d) => <circle key={d} cx={48} cy={d} r={13} fill="#f7e4c8" />)}
    </g>
  </svg>
);
const TransLayer = ({ tr, f, old, cur, bg, accent }) => {
  const n = tr.frames || 14, p = cl01(f / n), e = eIO(p), eo = eOut(p), dir = tr.dir || 1;
  let so = {}, sn = {}, showOld = true, showNew = true, newTop = true, over = null;
  switch (tr.type) {
    case "rag": {
      const X = -260 + eo * 2440;
      const pts = [];
      for (let y = 0; y <= 1080; y += 60) pts.push(`${X + 34 * Math.sin(y / 70 + p * 9)}px ${y}px`);
      sn = { clipPath: `polygon(0px 0px, ${pts.join(", ")}, 0px 1080px)` };
      const ey = 540 + 400 * Math.sin(p * Math.PI * 5);
      over = (
        <>
          {[0, 1, 2, 3, 4, 5].map((j) => <div key={j} style={{ position: "absolute", left: X - 60 - j * 24, top: ey + ((j * 97) % 160) - 80, width: 10, height: 10, borderRadius: 5, background: "#c9ced8", opacity: 0.7 * (1 - j / 6) * (p < 0.95 ? 1 : 0) }} />)}
          {p < 0.98 && <Eraser x={X + 40} y={ey} rot={-14 + 10 * Math.cos(p * Math.PI * 5)} />}
        </>
      );
      break;
    }
    case "slide": so = { transform: `translateX(${-100 * e * dir}%)` }; sn = { transform: `translateX(${100 * (1 - e) * dir}%)` }; break;
    case "pushv": so = { transform: `translateY(${-100 * e * dir}%)` }; sn = { transform: `translateY(${100 * (1 - e) * dir}%)` }; break;
    case "zoom":
      newTop = false;
      so = { transform: `scale(${1 + 1.7 * eIO(cl01(p * 1.2))})`, filter: `blur(${16 * p}px)`, opacity: 1 - cl01(p * 1.7) };
      sn = { transform: `scale(${0.7 + 0.3 * eo})`, opacity: cl01((p - 0.1) / 0.45) };
      break;
    case "irisdot": {
      const [cx, cy] = tr.at || [960, 540];
      const R = Math.max(Math.hypot(cx, cy), Math.hypot(1920 - cx, cy), Math.hypot(cx, 1080 - cy), Math.hypot(1920 - cx, 1080 - cy));
      const k = cl01((p - 0.18) / 0.82), r = eIO(k) * R;
      sn = { clipPath: `circle(${r}px at ${cx}px ${cy}px)` };
      over = (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          {p < 0.3 && <circle cx={cx} cy={cy} r={22 * eOut(cl01(p / 0.18))} fill={COLORS.ink} />}
          {r > 1 && <circle cx={cx} cy={cy} r={r} fill="none" stroke={RING} strokeWidth={18} opacity={1 - k * 0.6} />}
        </svg>
      );
      break;
    }
    case "flash": showNew = p >= 0.3; showOld = p < 0.3;
      over = <AbsoluteFill style={{ background: "#fff", opacity: p < 0.3 ? p / 0.3 : 1 - (p - 0.3) / 0.7 }} />; break;
    case "smash": showOld = false;
      sn = { transform: `translate(${14 * (1 - p) * Math.sin(f * 2.7)}px, ${8 * (1 - p) * Math.cos(f * 3.1)}px) scale(${1.1 - 0.1 * eo})` }; break;
    case "flip":
      newTop = false;
      so = { transformOrigin: "50% 0%", transform: `perspective(2200px) rotateX(${e * 100}deg)`, backfaceVisibility: "hidden", filter: `brightness(${1 - 0.35 * e})`, boxShadow: "0 30px 60px rgba(0,0,0,.25)" };
      showOld = e < 0.98;
      over = <AbsoluteFill style={{ background: `linear-gradient(to bottom, rgba(23,32,51,${0.28 * (1 - e)}) 0%, rgba(23,32,51,0) 60%)`, pointerEvents: "none" }} />;
      break;
    case "blur": so = { filter: `blur(${18 * e}px)` }; sn = { opacity: e, filter: `blur(${18 * (1 - e)}px)` }; break;
    case "block": {
      const ph1 = p < 0.5, k = ph1 ? eIO(cl01(p / 0.5)) : eIO(cl01((p - 0.5) / 0.5));
      const kY = ph1 ? eIO(cl01(p / 0.5 + 0.16)) : eIO(cl01((p - 0.5) / 0.5 - 0.16));
      const pos = (q) => (ph1 ? -100 + 100 * q : 100 * q) * dir;
      showOld = ph1; showNew = !ph1;
      over = (
        <>
          <AbsoluteFill style={{ background: RING, transform: `translateX(${pos(kY)}%)` }} />
          <AbsoluteFill style={{ background: accent || COLORS.ink, transform: `translateX(${pos(k)}%)` }} />
        </>
      );
      break;
    }
    case "match":
      if (p < 0.25) { showNew = false; so = { transform: `scale(${1 + 0.12 * eIO(p / 0.25)})` }; }
      else { showOld = false; sn = { transform: `scale(${1.12 - 0.12 * eOut((p - 0.25) / 0.75)})` }; }
      break;
    case "spin":
      so = { transform: `rotate(${-10 * e * dir}deg) scale(${1 - 0.2 * e})`, opacity: 1 - e };
      sn = { transform: `rotate(${10 * (1 - e) * dir}deg) scale(${1.15 - 0.15 * e})`, opacity: e };
      break;
    default: showOld = false;
  }
  const O = showOld && <AbsoluteFill key="o" style={{ background: bg, ...so }}>{old}</AbsoluteFill>;
  const N = showNew && <AbsoluteFill key="n" style={{ background: bg, ...sn }}>{cur}</AbsoluteFill>;
  return <AbsoluteFill style={{ overflow: "hidden" }}>{newTop ? [O, N] : [N, O]}{over}</AbsoluteFill>;
};

const SceneWrap = ({ scene, prev, ctx, showCode, first }) => {
  const frame = useCurrentFrame();
  const C = scene.mod.Component;
  const tr = scene.transition;
  const live = !!(tr && NEW_TRANS.has(tr.type) && prev && frame < (tr.frames || 14));
  // cảnh trước, giữ hình ở khung cuối, không âm hiệu
  const prevEl = (inPanel) => {
    const P = prev.mod.Component;
    const el = <P data={prev.data} ctx={{ ...ctx, sfx: {}, edit: prev.edit, lines: prev.timeline, inPanel: prev.inPanel }} />;
    return <Freeze frame={prev.frames - 1}>{inPanel ? el : prev.inPanel ? <PanelFrame scene={prev}>{el}</PanelFrame> : el}</Freeze>;
  };
  // cảnh đầu: chữ phải có ngay khung hình 0 (luật âm thanh 15, "3 giây đầu")
  if (scene.inPanel) {
    // #134: khung cảnh nhỏ bên phải; lời thoại nhân vật xuống dải phụ đề (có tên người nói) — #144: phụ đề vẽ ở lớp trên cùng
    const el = <C data={scene.data} ctx={{ ...ctx, edit: scene.edit, lines: scene.timeline, inPanel: true }} />;
    if (live && prev.inPanel) {
      return (
        <AbsoluteFill>
          <PanelFrame enter={scene.panelEnter} scene={scene}>
            <TransLayer tr={tr} f={frame} old={prevEl(true)} cur={el} bg="#fdfdfb" accent={ctx.accent} />
          </PanelFrame>
        </AbsoluteFill>
      );
    }
    const mine = <PanelFrame enter={scene.panelEnter} scene={scene}>{el}</PanelFrame>;
    return <AbsoluteFill>{live ? <TransLayer tr={tr} f={frame} old={prevEl(false)} cur={mine} bg={COLORS.paper} accent={ctx.accent} /> : mine}</AbsoluteFill>;
  }
  const body = first && !scene.mod.ownSubtitles ? (
    // tua trước 18 khung hình để chữ câu mở đã hiện sẵn ở khung hình 0 (module hoạt hình thì không: miệng phải khớp giọng)
    <Sequence from={-18}><C data={scene.data} ctx={{ ...ctx, edit: scene.edit, lines: scene.timeline }} /></Sequence>
  ) : (
    <C data={scene.data} ctx={{ ...ctx, edit: scene.edit, lines: scene.timeline }} />
  );
  return (
    <AbsoluteFill style={live ? {} : transitionStyle(tr, frame)}>
      {live ? <TransLayer tr={tr} f={frame} old={prevEl(false)} cur={body} bg={COLORS.paper} accent={ctx.accent} /> : body}
      {showCode && <CodeTag code={scene.module} name={scene.mod.name} />}
    </AbsoluteFill>
  );
};
const SceneSubs = ({ scene, ctx }) => (
  <Subtitles lines={scene.timeline} own={scene.inPanel ? false : scene.mod.ownSubtitles} speakers={scene.inPanel || undefined} voice={ctx.voice} slug={ctx.slug} audioDir={ctx.audioDir} sceneId={scene.id} />
);

/** Lớp tiếng động (#126, #127): mỗi sự kiện một <Audio>, dài đúng độ dài tệp; âm kéo dài (bed) lặp + vào/ra mềm. */
const SfxLayer = ({ events }) =>
  events.map((e, i) => (
    <Sequence key={i} from={e.frame} durationInFrames={e.frames} name={`sfx ${e.key}${e.bed ? " ⟷" : ""}`} layout="none">
      <Audio
        src={staticFile(sfxFile(e.key))}
        loop={e.loop}
        volume={e.bed ? (f) => e.gain * Math.min(1, f / 6, (e.frames - f) / 12) : e.gain}
      />
    </Sequence>
  ));


/** #131: dải "Tuần của Thảo" — cả bài là một hành trình trong tuần; ngày/giờ đổi ở các mốc script.storyline.marks. */
const storyMarks = (script, scenes) => {
  const st = script.storyline;
  if (!st?.marks) return null;
  const at = (id) => scenes.find((x) => x.id === id)?.from;
  const marks = Object.entries(st.marks).map(([id, [d, label]]) => ({ from: at(id), d, label })).filter((m) => m.from != null).sort((a, b) => a.from - b.from);
  const end = st.hideFrom ? at(st.hideFrom) : null;
  // ẩn ở các module có khung riêng góc trên trái (DLG, SCENE-03 chia đôi, câu đố)
  const hide = (st.hideModules || ["DLG-01", "SCENE-03", "QUIZ-01"]).flatMap((m) => scenes.filter((x) => x.module === m).map((x) => [x.from, x.from + x.frames]));
  return marks.length ? { ...st, marks, end: end ?? Infinity, hide } : null;
};
const StoryStrip = ({ sl, accent, compact, scenes = [] }) => {
  const frame = useCurrentFrame();
  // #144: Đét đứng bên phải (E-LAY-02/04) → dải sang góc trên phải, khỏi đè góc bảng
  const now = scenes.find((x) => frame >= x.from && frame < x.from + x.frames);
  const right = !!(now?.layout && LAYOUTS[now.layout].det.x > 960);
  if (!sl || frame < sl.marks[0].from || frame >= sl.end) return null;
  if (sl.hide.some(([a, b]) => frame >= a && frame < b)) return null;
  let i = 0;
  for (let k = 0; k < sl.marks.length; k++) if (frame >= sl.marks[k].from) i = k;
  const cur = sl.marks[i], prev = sl.marks[Math.max(0, i - 1)];
  const k = interpolate(frame - cur.from, [0, 18], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const e = 1 - Math.pow(1 - k, 3);
  const pos = i === 0 ? cur.d : prev.d + (cur.d - prev.d) * e;
  const n = sl.days.length, W = compact ? 400 : 600, gap = W / (n - 1);
  const fadeIn = interpolate(frame - sl.marks[0].from, [0, 12], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(sl.end - frame, [0, 12], [0, 1], { extrapolateRight: "clamp" });
  return (
    <div style={{ position: "absolute", ...(right ? { right: 36 } : { left: 36 }), top: 24, padding: "10px 22px 12px", borderRadius: 18, background: "rgba(255,255,255,0.94)", boxShadow: "0 6px 18px rgba(23,32,51,.12)",
      opacity: Math.min(fadeIn, fadeOut), fontFamily: "'Be Vietnam Pro', sans-serif", color: COLORS.ink }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", width: W + 20, marginBottom: 6 }}>
        {!compact && <span style={{ fontSize: 24, fontWeight: 700, color: COLORS.muted }}>{sl.title || "Hành trình"}</span>}
        <span style={{ fontSize: compact ? 26 : 30, fontWeight: 800, color: accent, opacity: e, whiteSpace: "nowrap" }}>{cur.label}</span>
      </div>
      <svg width={W + 20} height={52} style={{ display: "block" }}>
        <line x1={10} y1={14} x2={10 + W} y2={14} stroke={COLORS.line} strokeWidth={6} strokeLinecap="round" />
        <line x1={10} y1={14} x2={10 + pos * gap} y2={14} stroke={accent} strokeWidth={6} strokeLinecap="round" />
        {sl.days.map((d, j) => (
          <g key={j}>
            <circle cx={10 + j * gap} cy={14} r={j <= pos + 0.01 ? 8 : 6} fill={j <= pos + 0.01 ? accent : "#fff"} stroke={j <= pos + 0.01 ? accent : COLORS.line} strokeWidth={3} />
            <text x={10 + j * gap} y={48} textAnchor="middle" fontSize={22} fontWeight={j === cur.d ? 800 : 500} fill={j === cur.d ? COLORS.ink : COLORS.muted}>{d}</text>
          </g>
        ))}
        <circle cx={10 + pos * gap} cy={14} r={13 + 5 * Math.sin(Math.PI * k)} fill="none" stroke={accent} strokeWidth={3} opacity={0.6} />
      </svg>
    </div>
  );
};

/** Thanh tiến độ mảnh phía trên: người xem biết video còn bao lâu. */
const ProgressBar = ({ total, accent }) => {
  const frame = useCurrentFrame();
  return (
    <div style={{ position: "absolute", left: 0, top: 0, height: 10, width: `${(frame / total) * 100}%`, background: accent, opacity: 0.85 }} />
  );
};

export const ScriptVideo = ({ script: script0, showCode = false, audioMs: voiceBundle = {} }) => {
  const script = useMemo(() => planEdits(script0), [script0]);
  ensureFonts();
  const fps = 30;
  const { audioMs, dir: audioDir } = pickVoice(script, voiceBundle); // #138: Kokoro trước, Google sau
  const { scenes, total, ctxBase } = layoutScript(script, fps, audioMs);
  const pack = script.audio?.sfxPack;
  const ctx = { ...ctxBase, sfx: { ...(pack ? moduleSfxMap() : {}), ...(script.audio?.sfx || {}) }, voice: script.audio?.voice ?? hasAllVoice(script, audioMs), slug: script.unit?.slug, audioDir };
  const music = script.audio?.music?.file;
  const logo = pack ? null : script.audio?.logo; // có sfxPack thì âm hiệu là sự kiện "logo" ở END-05
  const last = scenes.at(-1);
  const sl = storyMarks(script, scenes);
  // đổi ngày/giờ trong tuần: tiếng "tích" nhỏ của đồng hồ
  const stripSfx = pack && sl ? sl.marks.slice(1).map((m) => ({ frame: m.from + 4, key: "dong-ho", gain: 0.2, frames: 6, loop: false })) : [];
  return (
    <AbsoluteFill style={{ background: COLORS.paper }}>
      {scenes.map((s, i) => (
        <Sequence key={s.id} from={s.from} durationInFrames={s.frames} name={`${s.id} ${s.module}`}>
          <SceneWrap scene={s} prev={i > 0 ? scenes[i - 1] : null} ctx={ctx} showCode={showCode} first={i === 0} />
          <IrisRing tr={s.transition} />
        </Sequence>
      ))}
      <SfxLayer events={[...sfxEvents(script, scenes, fps), ...stripSfx].sort((a, b) => a.frame - b.frame)} />
      <StoryStrip sl={sl} accent={ctxBase.accent} compact={!!script.presenter} scenes={scenes} />
      {script.presenter && <Presenter scenes={scenes} script={script} />}
      {/* #144: phụ đề (+ giọng) ở lớp trên Đét → bố cục nào cũng không che phụ đề */}
      {scenes.map((s) => (
        <Sequence key={`sub-${s.id}`} from={s.from} durationInFrames={s.frames} name={`${s.id} phụ đề`}>
          <SceneSubs scene={s} ctx={ctx} />
        </Sequence>
      ))}
      <ProgressBar total={total} accent={ctxBase.accent} />
      {music && <Audio src={staticFile(music)} loop volume={(f) => musicVolume(f, scenes, fps, script)} />}
      {logo && <Sequence from={last.from + 10}><Audio src={staticFile(logo)} volume={0.5} /></Sequence>}
    </AbsoluteFill>
  );
};

export const scriptFrames = (script, fps = 30, audioMs = {}) => layoutScript(script, fps, pickVoice(script, audioMs).audioMs).total;

// #110: độ dài mp3 thật nằm cạnh mp3 — public/audio/dp/durations.dat (JSON, đuôi .dat để server nodemon không khởi động lại).
// Đọc một lần khi mở Studio / render; không có tệp thì video chạy chế độ chữ + phụ đề với thời lượng ước tính.
// #138: đọc cả hai kho giọng → { kokoro, google }; mỗi video chọn bằng pickVoice (core/voice.js)
let audioMsPromise = null;
const readDat = (dir) => fetch(staticFile(`${dir}/durations.dat`)).then((r) => (r.ok ? r.json() : {})).catch(() => ({}));
export const loadAudioMs = () =>
  (audioMsPromise ??= Promise.all([readDat(VOICE_DIRS.kokoro), readDat(VOICE_DIRS.google)]).then(([kokoro, google]) => ({ kokoro, google })));
