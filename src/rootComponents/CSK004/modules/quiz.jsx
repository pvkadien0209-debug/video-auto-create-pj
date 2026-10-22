// quiz.jsx — QUIZ-01: 3 đáp án + đếm ngược. Câu hỏi và đáp án tiếng Anh, giải thích tiếng Việt.
// Thứ tự: câu hỏi → 3 đáp án → đếm ngược (tắt nhạc, tích tắc) → đáp án đúng sáng + "vì sao".
import React from "react";
import { Audio, Sequence, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { Card, FitText, Icon, Illus, Kicker, Stage } from "../core/ui.jsx";
import { fadeUp, idle, pop, progress } from "../core/motion.js";
// Bản 2: hình minh hoạ màu. Ô tuỳ chọn: illus (hình chờ trả lời, mặc định mặt suy nghĩ), whyIllus (hình cạnh "Vì sao?").
import { msToFrames, readMs } from "../core/timing.js";

const LETTERS = ["A", "B", "C"];

/** Các mốc thời gian (ms) của một câu đố — dùng chung cho dựng hình, ước lượng thời lượng và lớp nhạc. */
export const quizTimeline = (d, c) => {
  const qMs = readMs(d.q, { ...c, lang: "en" });
  // đáp án hiện cách nhau 1,2 giây; người xem đọc tiếp trong lúc đếm ngược, nên chỉ chờ thêm 60% thời gian đọc
  const optStarts = d.options.map((_, i) => qMs + i * 1200);
  const readOpts = d.options.reduce((s, o) => s + readMs(o, { ...c, lang: "en", fresh: false }), 0);
  const countAt = Math.max(optStarts.at(-1) + 1200, qMs + readOpts * 0.6);
  const countMs = (d.countdown || 5) * 1000;
  const revealAt = countAt + countMs;
  const endMs = revealAt + 600 + readMs(d.why, c) + 900;
  return { qMs, optStarts, countAt, countMs, revealAt, endMs };
};

const Quiz01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = quizTimeline(data, ctx);
  const f = (ms) => msToFrames(ms, fps);
  const countF = f(t.countAt);
  const revealF = f(t.revealAt);
  const secs = data.countdown || 5;
  const counting = frame >= countF && frame < revealF;
  const left = Math.max(1, secs - Math.floor((frame - countF) / fps));
  const ring = progress(frame, countF, revealF - countF, (x) => x);
  const revealed = frame >= revealF;
  return (
    <Stage accent={ctx.accent} align="left">
      <div style={{ ...fadeUp(frame, 0, 10), display: "flex", alignItems: "center", gap: 20 }}>
        <Kicker accent={COLORS.ink}>EN</Kicker>
        <div style={{ fontSize: TYPE.small, fontWeight: 700, color: COLORS.muted }}>{data.kicker || "Thử trả lời"}</div>
      </div>
      <div style={{ ...fadeUp(frame, 4, 12), marginTop: 22, width: "100%" }}>
        <FitText text={data.q} max={TYPE.h2} min={TYPE.small} target={60} align="left" />
      </div>
      <div style={{ display: "flex", gap: 40, marginTop: 30, width: "100%", alignItems: "center" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
          {data.options.map((o, i) => {
            const right = i === data.correct;
            const dim = revealed && !right;
            return (
              <div key={i} style={{ ...fadeUp(frame, f(t.optStarts[i]), 10), opacity: frame < f(t.optStarts[i]) ? 0 : dim ? 0.35 : 1 }}>
                <Card tone={revealed && right ? "marker" : "surface"} style={{ display: "flex", alignItems: "center", gap: 24, padding: "18px 28px", border: revealed && right ? `4px solid ${COLORS.ok}` : undefined }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", flex: "none", display: "grid", placeItems: "center", fontSize: 34, fontWeight: 800, background: revealed && right ? COLORS.ok : COLORS.pineSoft, color: revealed && right ? "#fff" : ctx.accent }}>
                    {revealed && right ? <Icon name="check" size={40} color="#fff" stroke={3.4} /> : LETTERS[i]}
                  </div>
                  <div style={{ fontSize: 38, fontWeight: 600, lineHeight: 1.25 }}>{o}</div>
                </Card>
              </div>
            );
          })}
        </div>
        <div style={{ width: 520, minHeight: 300, display: "grid", placeItems: "center" }}>
          {!counting && !revealed && (
            <div style={{ ...pop(frame, fps, 8), position: "relative", width: 340, height: 340, borderRadius: "50%", background: COLORS.pineSoft, display: "grid", placeItems: "center" }}>
              <div style={{ transform: `translateY(${idle(frame, 8, 90)}px) rotate(${idle(frame, 4, 140)}deg)` }}><Illus name={data.illus || "thinking-face"} size={230} /></div>
              <div style={{ position: "absolute", right: 0, top: 6, transform: `translateY(${idle(frame + 20, 6, 70)}px)` }}><Illus name="red-question-mark" size={110} /></div>
            </div>
          )}
          {counting && (
            <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", right: -70, top: -40, transform: `rotate(${Math.floor((frame - countF) / (fps / 2)) % 2 ? 12 : -12}deg)` }}><Illus name="hourglass-not-done" size={110} /></div>
            <svg width={240} height={240}>
              <circle cx={120} cy={120} r={100} fill={COLORS.surface} stroke={COLORS.line} strokeWidth={16} />
              <circle cx={120} cy={120} r={100} fill="none" stroke={ctx.accent} strokeWidth={16} strokeLinecap="round"
                strokeDasharray={628} strokeDashoffset={628 * ring} transform="rotate(-90 120 120)" />
              <text x={120} y={148} textAnchor="middle" fontSize={92} fontWeight={800} fill={COLORS.ink} fontFamily="Be Vietnam Pro">{left}</text>
            </svg>
            </div>
          )}
          {revealed && (
            <div style={{ ...fadeUp(frame, revealF + 8, 12), width: "100%" }}>
              <Card tone="soft" style={{ padding: "30px 34px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                  <div style={pop(frame, fps, revealF + 8)}><Illus name={data.whyIllus || "light-bulb"} size={64} /></div>
                  <div style={{ fontSize: 36, fontWeight: 800, color: ctx.accent }}>Vì sao?</div>
                </div>
                <div style={{ fontSize: data.why.length > 110 ? 32 : 38, fontWeight: 600, color: COLORS.ink2, lineHeight: 1.3 }}>{data.why}</div>
              </Card>
            </div>
          )}
        </div>
      </div>
      {/* tích tắc mỗi giây khi đếm ngược (AQ-Q3) và âm lộ đáp án — chỉ phát khi kịch bản có tệp âm thanh */}
      {ctx.sfx?.tick && Array.from({ length: secs }).map((_, i) => (
        <Sequence key={i} from={countF + i * fps} durationInFrames={fps}><Audio src={staticFile(ctx.sfx.tick)} volume={0.2} /></Sequence>
      ))}
      {ctx.sfx?.reveal && <Sequence from={revealF} durationInFrames={fps * 2}><Audio src={staticFile(ctx.sfx.reveal)} volume={0.4} /></Sequence>}
    </Stage>
  );
};

export const QUIZ = {
  "QUIZ-01": { name: "3 đáp án + đếm ngược", family: "QUIZ", Component: Quiz01, limits: { options: [3, 3] },
    estimate: (d, c) => quizTimeline(d, c).endMs },
};
