// quiz2.jsx — họ QUIZ (đố), đợt 2: QUIZ-03 đúng hay sai · QUIZ-05 điền chỗ trống · QUIZ-06 ghép cặp
// · QUIZ-07 sắp thứ tự · QUIZ-09 bạn chọn gì? Câu hỏi và đáp án tiếng Anh, giải thích tiếng Việt.
// Mọi câu đều có đếm ngược ≥ 3 giây (vòng + số), rồi lộ đáp án bằng dấu rõ trên màn.
// Có ctx.sfx.tick / ctx.sfx.reveal thì phát tích tắc mỗi giây và âm lộ đáp án (như modules/quiz.jsx).
import React from "react";
import { Audio, Sequence, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { Card, FitText, Icon, Illus, Kicker, Stage } from "../core/ui.jsx";
import { fadeUp, flash, idle, pop, progress, shake, slam } from "../core/motion.js";
import { msToFrames, readList, readMs } from "../core/timing.js";

const W = 1728;
const H = 770;
const LETTERS = ["A", "B", "C", "D"];
const EN = (c) => ({ ...c, lang: "en" });
const secsOf = (d) => Math.max(3, d.countdown || 5);

/** Mốc chung: nội dung đọc xong lúc countAt → đếm ngược → revealAt → đọc phần sau. */
const timeline = (contentMs, d, afterMs) => {
  const countAt = contentMs;
  const revealAt = countAt + secsOf(d) * 1000;
  return { countAt, revealAt, endMs: revealAt + 600 + afterMs + 900 };
};

/** Vòng đếm ngược: vòng màu chạy hết, số nảy nhẹ mỗi giây. */
const Ring = ({ frame, fps, startF, secs, accent, size = 240 }) => {
  const total = secs * fps;
  const el = Math.max(0, frame - startF);
  const p = Math.min(1, el / total);
  const left = Math.max(1, secs - Math.floor(el / fps));
  const beat = 1 + 0.12 * Math.max(0, 1 - (el % fps) / 8);
  const r = size / 2 - 14;
  const C = 2 * Math.PI * r;
  const urgent = left <= 2;
  return (
    <div style={{ ...pop(frame, fps, startF), width: size, height: size, position: "relative" }}>
      <svg width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} fill={COLORS.surface} stroke={COLORS.line} strokeWidth={16} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={urgent ? COLORS.coral : accent} strokeWidth={16} strokeLinecap="round"
          strokeDasharray={C} strokeDashoffset={C * p} transform={`rotate(-90 ${size / 2} ${size / 2})`} />
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", fontSize: size * 0.4, fontWeight: 800, color: urgent ? COLORS.coral : COLORS.ink, transform: `scale(${beat})` }}>{left}</div>
    </div>
  );
};

/** Ô bên phải: trước đếm ngược là hình "nghĩ", trong lúc đếm là vòng, sau khi lộ là thẻ "Vì sao?". */
const Side = ({ frame, fps, countF, revealF, secs, accent, why, width = 520 }) => (
  <div style={{ width, minHeight: 300, display: "grid", placeItems: "center", flex: "none" }}>
    {frame < countF && <div style={{ ...pop(frame, fps, 6), transform: `translateY(${idle(frame, 6, 80)}px)` }}><Illus name="thinking-face" size={190} /></div>}
    {frame >= countF && frame < revealF && <Ring frame={frame} fps={fps} startF={countF} secs={secs} accent={accent} />}
    {frame >= revealF && why && <Why frame={frame} at={revealF + 8} accent={accent} text={why} />}
  </div>
);

const Why = ({ frame, at, accent, text, style }) => (
  <div style={{ ...fadeUp(frame, at, 12), width: "100%", ...style }}>
    <Card tone="soft" style={{ padding: "26px 32px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
        <Illus name="light-bulb" size={52} />
        <div style={{ fontSize: 40, fontWeight: 800, color: accent }}>Vì sao?</div>
      </div>
      <div style={{ fontSize: text.length > 120 ? 40 : TYPE.small, fontWeight: 600, color: COLORS.ink2, lineHeight: 1.28 }}>{text}</div>
    </Card>
  </div>
);

const Head = ({ frame, label, illus }) => (
  <div style={{ ...fadeUp(frame, 0, 10), display: "flex", alignItems: "center", gap: 20 }}>
    <Kicker accent={COLORS.ink}>EN</Kicker>
    {illus && <Illus name={illus} size={60} />}
    <div style={{ fontSize: TYPE.small, fontWeight: 700, color: COLORS.muted }}>{label}</div>
  </div>
);

/** Tích tắc mỗi giây khi đếm và âm lộ đáp án — chỉ phát khi kịch bản có tệp âm thanh. */
const Sfx = ({ ctx, countF, revealF, secs, fps }) => (
  <>
    {ctx.sfx?.tick && Array.from({ length: secs }).map((_, i) => (
      <Sequence key={i} from={countF + i * fps} durationInFrames={fps}><Audio src={staticFile(ctx.sfx.tick)} volume={0.2} /></Sequence>
    ))}
    {ctx.sfx?.reveal && <Sequence from={revealF} durationInFrames={fps * 2}><Audio src={staticFile(ctx.sfx.reveal)} volume={0.4} /></Sequence>}
  </>
);

const useClock = (t, d) => {
  const { fps } = useVideoConfig();
  return { fps, countF: msToFrames(t.countAt, fps), revealF: msToFrames(t.revealAt, fps), secs: secsOf(d) };
};

// ---------- QUIZ-03 Đúng hay sai ----------
const q03Time = (d, c) => timeline(readMs(d.statement, EN(c)) + 1200, d, readMs(d.why, c));
const Quiz03 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const t = q03Time(data, ctx);
  const { fps, countF, revealF, secs } = useClock(t, data);
  const revealed = frame >= revealF;
  const btnAt = msToFrames(readMs(data.statement, EN(ctx)), fps);
  const stamp = slam(frame, fps, revealF, 2.2);
  const s = shake(frame, revealF + 4, 10, 10);
  const Btn = ({ value, label, vi, icon, color }) => {
    const right = value === !!data.truth;
    const win = revealed && right;
    const p = pop(frame, fps, btnAt + (value ? 0 : 6));
    return (
      <div style={{ opacity: revealed && !right ? 0.3 : p.opacity, transform: `${p.transform} scale(${win ? 1 + 0.08 * progress(frame, revealF, 8) : 1})` }}>
        <div style={{ width: 400, height: 260, borderRadius: 36, background: win ? COLORS.markerSoft : COLORS.surface, border: `6px solid ${win ? COLORS.ok : color}`, boxShadow: "0 18px 40px rgba(23,32,51,.10)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, position: "relative" }}>
          <div style={{ width: 104, height: 104, borderRadius: "50%", background: color, display: "grid", placeItems: "center" }}>
            <Icon name={icon} size={70} color="#fff" stroke={3.4} />
          </div>
          <div style={{ fontSize: 60, fontWeight: 800, color: COLORS.ink }}>{label}</div>
          <div style={{ fontSize: 40, fontWeight: 600, color: COLORS.muted, marginTop: -8 }}>{vi}</div>
          {win && <div style={{ ...pop(frame, fps, revealF + 2), position: "absolute", right: -30, top: -34 }}><Illus name="check-mark-button" size={96} /></div>}
        </div>
      </div>
    );
  };
  return (
    <Stage accent={ctx.accent}>
      <div style={{ width: W, transform: `translate(${s.x}px, ${s.y}px)` }}>
        <Head frame={frame} label={data.kicker || "Đúng hay sai?"} illus="balance-scale" />
        <div style={{ ...fadeUp(frame, 4, 12), marginTop: 22, position: "relative" }}>
          <Card style={{ padding: "34px 160px 34px 48px", minHeight: 200, display: "flex", alignItems: "center", borderLeft: `14px solid ${ctx.accent}` }}>
            <FitText text={`“${data.statement}”`} max={TYPE.h2} min={TYPE.small} target={60} align="left" />
          </Card>
          {revealed && (
            <div style={{ position: "absolute", right: 30, top: "50%", marginTop: -80, opacity: stamp.opacity, transform: `${stamp.transform} rotate(-12deg)` }}>
              <Illus name={data.truth ? "check-mark-button" : "cross-mark"} size={160} />
            </div>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 34 }}>
          <Btn value={true} label="TRUE" vi="Đúng" icon="check" color={COLORS.ok} />
          <Side frame={frame} fps={fps} countF={countF} revealF={revealF} secs={secs} accent={ctx.accent} why={data.why} width={780} />
          <Btn value={false} label="FALSE" vi="Sai" icon="x" color={COLORS.coral} />
        </div>
      </div>
      <div style={{ position: "absolute", inset: 0, background: data.truth ? COLORS.ok : COLORS.coral, opacity: flash(frame, revealF, 10) * 0.18, pointerEvents: "none" }} />
      <Sfx ctx={ctx} countF={countF} revealF={revealF} secs={secs} fps={fps} />
    </Stage>
  );
};

// ---------- QUIZ-05 Điền chỗ trống ----------
const q05Time = (d, c) => {
  const sMs = readMs(d.sentence.replace("___", "blank"), EN(c));
  const oMs = readList(d.options, { ...EN(c), fresh: false });
  return { ...timeline(Math.max(sMs + d.options.length * 1000 + 600, sMs + oMs * 0.6), d, readMs(d.why || "", c)), sMs };
};
const Quiz05 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const t = q05Time(data, ctx);
  const { fps, countF, revealF, secs } = useClock(t, data);
  const revealed = frame >= revealF;
  const correct = Math.max(0, data.options.indexOf(data.blank));
  const sF = msToFrames(t.sMs, fps);
  const [before, after] = data.sentence.split("___");
  const fs = data.sentence.length > 60 ? 56 : TYPE.h2;
  const drop = pop(frame, fps, revealF);
  const dy = (1 - Math.min(1, progress(frame, revealF, 10))) * -120;
  return (
    <Stage accent={ctx.accent} align="left">
      <Head frame={frame} label={data.kicker || "Điền vào chỗ trống"} illus="memo" />
      <div style={{ ...fadeUp(frame, 4, 12), marginTop: 22, width: "100%" }}>
        <Card style={{ padding: "34px 48px", borderLeft: `14px solid ${ctx.accent}` }}>
          <div style={{ fontSize: fs, fontWeight: 800, lineHeight: 1.5 }}>
            {before}
            <span style={{ display: "inline-block", minWidth: 280, padding: "0 22px", margin: "0 6px", borderRadius: 18, textAlign: "center", verticalAlign: "bottom", lineHeight: 1.3,
              background: revealed ? COLORS.marker : COLORS.pineSoft, border: `4px ${revealed ? "solid" : "dashed"} ${revealed ? COLORS.ok : ctx.accent}` }}>
              {revealed ? (
                <span style={{ display: "inline-block", opacity: drop.opacity, transform: `translateY(${dy}px)` }}>{data.blank}</span>
              ) : (
                <span style={{ display: "inline-block", color: ctx.accent, transform: `scale(${1 + idle(frame, 0.08, 30)})` }}>?</span>
              )}
            </span>
            {after}
          </div>
        </Card>
      </div>
      <div style={{ display: "flex", gap: 40, marginTop: 30, width: "100%", alignItems: "center" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18 }}>
          {data.options.map((o, i) => {
            const right = i === correct;
            const at = sF + i * 30;
            return (
              <div key={i} style={{ ...fadeUp(frame, at, 10), opacity: frame < at ? 0 : revealed && !right ? 0.3 : 1 }}>
                <Card tone={revealed && right ? "marker" : "surface"} style={{ display: "flex", alignItems: "center", gap: 24, padding: "16px 28px", border: revealed && right ? `4px solid ${COLORS.ok}` : undefined }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", flex: "none", display: "grid", placeItems: "center", fontSize: 34, fontWeight: 800, background: revealed && right ? COLORS.ok : COLORS.pineSoft, color: revealed && right ? "#fff" : ctx.accent }}>
                    {revealed && right ? <Icon name="check" size={40} color="#fff" stroke={3.4} /> : LETTERS[i]}
                  </div>
                  <div style={{ fontSize: 48, fontWeight: 700 }}>{o}</div>
                </Card>
              </div>
            );
          })}
        </div>
        <Side frame={frame} fps={fps} countF={countF} revealF={revealF} secs={secs} accent={ctx.accent} why={data.why} width={760} />
      </div>
      <Sfx ctx={ctx} countF={countF} revealF={revealF} secs={secs} fps={fps} />
    </Stage>
  );
};

// ---------- QUIZ-06 Ghép cặp: 3 trái – 3 phải, đường nối vẽ dần ----------
const q06Time = (d, c) => {
  const qMs = readMs(d.q || "Match each pair", EN(c));
  const items = d.pairs.flatMap((p) => [p.left, p.right]);
  return { ...timeline(qMs + 6 * 300 + readList(items, { ...EN(c), fresh: false }) * 0.6, d, 1200 + readMs(d.why || "", c)), qMs };
};
const Quiz06 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const t = q06Time(data, ctx);
  const { fps, countF, revealF, secs } = useClock(t, data);
  const revealed = frame >= revealF;
  const n = data.pairs.length;
  const order = data.order || [1, 2, 0].slice(0, n); // thứ tự hiện của cột phải (chỉ số cặp)
  const qF = msToFrames(t.qMs, fps);
  const top = 100, rowH = 156, gap = 18, colW = 520, colR = 780, rx = W - colR;
  const cy = (r) => top + r * (rowH + gap) + rowH / 2;
  const fsR = Math.max(...data.pairs.map((p) => p.right.length)) > 40 ? TYPE.small : 48;
  const lineF = (i) => revealF + i * 9;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ position: "relative", width: W, height: H }}>
        <div style={{ position: "absolute", left: 0, right: 0, top: 0, display: "flex", alignItems: "center", gap: 20 }}>
          <div style={fadeUp(frame, 0, 10)}><Kicker accent={COLORS.ink}>EN</Kicker></div>
          <Illus name="puzzle-piece" size={64} />
          <div style={{ ...fadeUp(frame, 4, 12), flex: 1 }}><FitText text={data.q || "Match each pair"} max={56} min={TYPE.small} target={50} align="left" /></div>
        </div>
        <svg width={W} height={H} style={{ position: "absolute", left: 0, top: 0 }}>
          {data.pairs.map((_, i) => {
            const r = order.indexOf(i);
            const p = progress(frame, lineF(i), 12);
            const x1 = colW + 4, y1 = cy(i), x2 = rx - 4, y2 = cy(r);
            const len = Math.hypot(x2 - x1, y2 - y1) * 1.1;
            return (
              <g key={i} opacity={revealed ? 1 : 0}>
                <path d={`M ${x1} ${y1} C ${x1 + 160} ${y1}, ${x2 - 160} ${y2}, ${x2} ${y2}`} fill="none" stroke={ctx.accent} strokeWidth={10} strokeLinecap="round" strokeDasharray={len} strokeDashoffset={len * (1 - p)} />
                <circle cx={x1} cy={y1} r={14} fill={ctx.accent} />
                <circle cx={x2} cy={y2} r={14} fill={ctx.accent} opacity={p > 0.95 ? 1 : 0} />
              </g>
            );
          })}
        </svg>
        {data.pairs.map((p, i) => {
          const done = revealed && frame >= lineF(i) + 12;
          return (
            <div key={`l${i}`} style={{ ...fadeUp(frame, qF + i * 9, 10), position: "absolute", left: 0, top: cy(i) - rowH / 2, width: colW, height: rowH }}>
              <Card tone={done ? "soft" : "surface"} style={{ height: "100%", boxSizing: "border-box", padding: "14px 26px", display: "flex", alignItems: "center", gap: 20, border: done ? `3px solid ${ctx.accent}` : undefined }}>
                <div style={{ width: 62, height: 62, borderRadius: 18, flex: "none", background: ctx.accent, color: "#fff", display: "grid", placeItems: "center", fontSize: 34, fontWeight: 800 }}>{i + 1}</div>
                {p.illus && <Illus name={p.illus} size={70} />}
                <div style={{ fontSize: p.left.length > 16 ? 46 : 50, fontWeight: 800, lineHeight: 1.15 }}>{p.left}</div>
              </Card>
            </div>
          );
        })}
        {order.map((pi, r) => {
          const done = revealed && frame >= lineF(pi) + 12;
          const tick = pop(frame, fps, lineF(pi) + 12);
          return (
            <div key={`r${r}`} style={{ ...fadeUp(frame, qF + 30 + r * 9, 10), position: "absolute", left: rx, top: cy(r) - rowH / 2, width: colR, height: rowH }}>
              <Card tone={done ? "marker" : "surface"} style={{ position: "relative", height: "100%", boxSizing: "border-box", padding: "12px 26px", display: "flex", alignItems: "center", gap: 18, border: done ? `3px solid ${COLORS.ok}` : undefined }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", flex: "none", background: done ? COLORS.ok : COLORS.pineSoft, color: done ? "#fff" : ctx.accent, display: "grid", placeItems: "center", fontSize: 32, fontWeight: 800 }}>
                  {done ? pi + 1 : LETTERS[r]}
                </div>
                <div style={{ fontSize: fsR, fontWeight: 600, lineHeight: 1.18 }}>{data.pairs[pi].right}</div>
                {done && <div style={{ position: "absolute", right: -16, top: -20, opacity: tick.opacity, transform: tick.transform }}><Illus name="check-mark-button" size={64} /></div>}
              </Card>
            </div>
          );
        })}
        {/* giữa hai cột: hình nghĩ → vòng đếm ngược */}
        <div style={{ position: "absolute", left: colW, width: rx - colW, top: cy(1) - 120, height: 240, display: "grid", placeItems: "center" }}>
          {frame < countF && <div style={{ opacity: progress(frame, qF + 40, 10), transform: `translateY(${idle(frame, 6, 80)}px)` }}><Illus name="thinking-face" size={150} /></div>}
          {frame >= countF && !revealed && <Ring frame={frame} fps={fps} startF={countF} secs={secs} accent={ctx.accent} size={220} />}
        </div>
        {revealed && data.why && (
          <div style={{ ...fadeUp(frame, lineF(n - 1) + 16, 12), position: "absolute", left: 0, right: 0, top: cy(n - 1) + rowH / 2 + 22 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 18, padding: "16px 28px", borderRadius: 24, background: COLORS.pineSoft }}>
              <Illus name="light-bulb" size={56} />
              <div style={{ fontSize: TYPE.small, fontWeight: 600, color: COLORS.ink2, lineHeight: 1.25 }}>{data.why}</div>
            </div>
          </div>
        )}
      </div>
      <Sfx ctx={ctx} countF={countF} revealF={revealF} secs={secs} fps={fps} />
    </Stage>
  );
};

// ---------- QUIZ-07 Sắp thứ tự: thẻ xáo trộn rồi về đúng chỗ ----------
// items = các thẻ theo thứ tự HIỆN (đã xáo); order = chỉ số các thẻ theo thứ tự ĐÚNG.
const q07Time = (d, c) => {
  const qMs = readMs(d.q || "Put them in order", EN(c));
  return { ...timeline(qMs + d.items.length * 400 + readList(d.items, { ...EN(c), fresh: false }) * 0.7, d, 800 + readMs(d.why || "", c)), qMs };
};
const Quiz07 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const t = q07Time(data, ctx);
  const { fps, countF, revealF, secs } = useClock(t, data);
  const revealed = frame >= revealF;
  const n = data.items.length;
  const qF = msToFrames(t.qMs, fps);
  const rowH = n >= 4 ? 128 : 150, gap = n >= 4 ? 18 : 26;
  const listH = n * rowH + (n - 1) * gap;
  const fs = Math.max(...data.items.map((x) => x.length)) > 46 ? TYPE.small : 50;
  const move = progress(frame, revealF + 4, 18);
  return (
    <Stage accent={ctx.accent} align="left">
      <Head frame={frame} label={data.kicker || "Sắp xếp theo thứ tự"} illus="shuffle-tracks-button" />
      <div style={{ ...fadeUp(frame, 4, 12), marginTop: 18, width: "100%" }}>
        <FitText text={data.q || "Put them in order"} max={60} min={TYPE.small} target={50} align="left" />
      </div>
      <div style={{ display: "flex", gap: 40, marginTop: 26, width: "100%", alignItems: "center" }}>
        <div style={{ position: "relative", flex: 1, height: listH }}>
          {data.items.map((x, i) => {
            const target = data.order.indexOf(i);
            const y = (i + (target - i) * move) * (rowH + gap);
            const at = qF + i * 12;
            const fu = fadeUp(frame, at, 10);
            const placed = revealed && move > 0.98;
            const badge = pop(frame, fps, revealF + 22);
            return (
              <div key={i} style={{ position: "absolute", left: 0, right: 0, top: y, height: rowH, opacity: fu.opacity, transform: `${fu.transform} rotate(${revealed ? 0 : idle(frame + i * 25, 0.6, 70)}deg)`, zIndex: revealed ? 10 - Math.abs(target - i) : 1 }}>
                <Card tone={placed ? "marker" : "surface"} style={{ height: "100%", boxSizing: "border-box", padding: "12px 28px", display: "flex", alignItems: "center", gap: 24, border: placed ? `3px solid ${COLORS.ok}` : undefined }}>
                  <div style={{ width: 70, height: 70, borderRadius: 20, flex: "none", display: "grid", placeItems: "center", fontSize: 38, fontWeight: 800, background: placed ? COLORS.ok : COLORS.pineSoft, color: placed ? "#fff" : ctx.accent, transform: placed ? badge.transform : "none" }}>
                    {placed ? target + 1 : LETTERS[i]}
                  </div>
                  <div style={{ fontSize: fs, fontWeight: 700, lineHeight: 1.18, flex: 1 }}>{x}</div>
                  <Icon name={placed ? "check" : "grip-vertical"} size={44} color={placed ? COLORS.ok : COLORS.muted} stroke={placed ? 3.4 : 2} />
                </Card>
              </div>
            );
          })}
        </div>
        <Side frame={frame} fps={fps} countF={countF} revealF={revealF} secs={secs} accent={ctx.accent} why={data.why} width={560} />
      </div>
      <Sfx ctx={ctx} countF={countF} revealF={revealF} secs={secs} fps={fps} />
    </Stage>
  );
};

// ---------- QUIZ-09 Bạn chọn gì? Thăm dò, kết bằng lời mời xem bài ----------
const CTA = "Bạn chọn gì? Xem bài để biết vì sao";
const q09Time = (d, c) => {
  const qMs = readMs(d.question, EN(c));
  const opts = d.options.map((o) => (typeof o === "string" ? o : o.text));
  return { ...timeline(qMs + opts.length * 900 + readList(opts, { ...EN(c), fresh: false }) * 0.6, d, readMs(d.cta || CTA, c)), qMs };
};
const OPT_ILLUS = ["light-bulb", "compass", "bullseye"];
const Quiz09 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const t = q09Time(data, ctx);
  const { fps, countF, revealF, secs } = useClock(t, data);
  const revealed = frame >= revealF;
  const qF = msToFrames(t.qMs, fps);
  const opts = data.options.map((o) => (typeof o === "string" ? { text: o } : o));
  const n = opts.length;
  const banner = slam(frame, fps, revealF, 1.8);
  const fs = Math.max(...opts.map((o) => o.text.length)) > 50 ? TYPE.small : 50;
  return (
    <Stage accent={ctx.accent} align="left">
      <Head frame={frame} label={data.kicker || "Thăm dò nhanh"} illus="ballot-box-with-ballot" />
      <div style={{ ...fadeUp(frame, 4, 12), marginTop: 18, width: "100%" }}>
        <FitText text={data.question} max={TYPE.h2} min={TYPE.small} target={56} align="left" />
      </div>
      <div style={{ position: "relative", display: "flex", gap: 30, marginTop: 30, width: "100%", alignItems: "stretch" }}>
        {opts.map((o, i) => {
          const p = pop(frame, fps, qF + i * 27);
          return (
            <div key={i} style={{ ...p, flex: 1, minWidth: 0, opacity: revealed ? 0.35 : p.opacity }}>
              <Card style={{ height: "100%", boxSizing: "border-box", minHeight: 330, padding: "26px 30px", display: "flex", flexDirection: "column", gap: 16, borderTop: `10px solid ${ctx.accent}` }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ width: 84, height: 84, borderRadius: "50%", background: ctx.accent, color: "#fff", display: "grid", placeItems: "center", fontSize: 48, fontWeight: 800 }}>{LETTERS[i]}</div>
                  <div style={{ transform: `rotate(${idle(frame + i * 30, 5, 100)}deg)` }}><Illus name={o.illus || OPT_ILLUS[i]} size={96} /></div>
                </div>
                <div style={{ fontSize: fs, fontWeight: 700, lineHeight: 1.2 }}>{o.text}</div>
              </Card>
            </div>
          );
        })}
        <div style={{ width: 280, flex: "none", display: "grid", placeItems: "center" }}>
          {frame < countF && <div style={{ ...pop(frame, fps, qF), transform: `translateY(${idle(frame, 6, 80)}px)` }}><Illus name="thinking-face" size={170} /></div>}
          {frame >= countF && !revealed && <Ring frame={frame} fps={fps} startF={countF} secs={secs} accent={ctx.accent} size={240} />}
        </div>
        {revealed && (
          <div style={{ position: "absolute", left: 0, right: 0, top: "50%", display: "flex", justifyContent: "center", transform: "translateY(-50%)" }}>
            <div style={{ opacity: banner.opacity, transform: banner.transform }}>
              <div style={{ display: "flex", alignItems: "center", gap: 36, padding: "30px 56px", borderRadius: 40, background: COLORS.marker, boxShadow: "0 24px 60px rgba(23,32,51,.22)", border: `6px solid ${COLORS.ink}` }}>
                <div style={{ width: 170, height: 170, borderRadius: "50%", background: COLORS.surface, display: "grid", placeItems: "center", flex: "none" }}><div style={{ transform: `translateY(${Math.abs(idle(frame, 12, 30))}px)` }}><Illus name="backhand-index-pointing-down" size={120} /></div></div>
                <div style={{ maxWidth: 1000 }}>
                  {(data.cta || CTA).split("? ").map((part, k, arr) => (
                    <div key={k} style={{ fontSize: k === 0 ? TYPE.h1 : TYPE.h2 - 8, fontWeight: 800, lineHeight: 1.15, color: COLORS.ink }}>{part}{k < arr.length - 1 ? "?" : ""}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Sfx ctx={ctx} countF={countF} revealF={revealF} secs={secs} fps={fps} />
    </Stage>
  );
};

export const QUIZ2 = {
  "QUIZ-03": { name: "Đúng hay sai", family: "QUIZ", Component: Quiz03, limits: { statement: [4, 24], why: [0, 40], countdown: [3, 7] },
    estimate: (d, c) => q03Time(d, c).endMs },
  "QUIZ-05": { name: "Điền chỗ trống", family: "QUIZ", Component: Quiz05, limits: { sentence: [4, 18], options: [3, 3], why: [0, 40], countdown: [3, 7] },
    estimate: (d, c) => q05Time(d, c).endMs },
  "QUIZ-06": { name: "Ghép cặp", family: "QUIZ", Component: Quiz06, limits: { pairs: [3, 3], left: [1, 4], right: [2, 10], why: [0, 24], countdown: [3, 10] },
    estimate: (d, c) => q06Time(d, c).endMs },
  "QUIZ-07": { name: "Sắp thứ tự", family: "QUIZ", Component: Quiz07, limits: { items: [3, 4], item: [2, 12], why: [0, 30], countdown: [3, 10] },
    estimate: (d, c) => q07Time(d, c).endMs },
  "QUIZ-09": { name: "Bạn chọn gì?", family: "QUIZ", Component: Quiz09, limits: { options: [2, 3], option: [1, 12], question: [4, 22], countdown: [3, 7] },
    estimate: (d, c) => q09Time(d, c).endMs },
};
