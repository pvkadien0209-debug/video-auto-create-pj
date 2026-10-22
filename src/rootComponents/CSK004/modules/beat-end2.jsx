// beat-end2.jsx — họ BEAT và END (nghiên cứu §3.11, §3.13):
// BEAT-03 câu hỏi treo · BEAT-04 vòng suy nghĩ · END-01 rút ra một câu · END-03 checklist mang về · END-07 bài tiếp trong chuỗi
import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { Card, FitText, Icon, Illus, Kicker, Marker, Stage } from "../core/ui.jsx";
import { fadeUp, flyIn, idle, pop, progress } from "../core/motion.js";
import { msToFrames, plan, readMs } from "../core/timing.js";

const clampX = { extrapolateLeft: "clamp", extrapolateRight: "clamp" };

/** Tách câu thành đoạn thường và đoạn được tô (marks). */
const splitMarks = (text, marks = []) => {
  const parts = [];
  let rest = String(text || "");
  marks.forEach((m) => {
    const i = rest.indexOf(m);
    if (i < 0) return;
    parts.push({ t: rest.slice(0, i) }, { t: m, mark: true });
    rest = rest.slice(i + m.length);
  });
  parts.push({ t: rest });
  return parts.filter((p) => p.t);
};

/** Tia sáng xoay sau hình (nền sáng). */
const Burst = ({ size, color, rot, opacity = 0.16, n = 12 }) => (
  <svg width={size} height={size} viewBox="-100 -100 200 200" style={{ position: "absolute", left: "50%", top: "50%", marginLeft: -size / 2, marginTop: -size / 2, transform: `rotate(${rot}deg)`, opacity }}>
    {Array.from({ length: n }).map((_, i) => {
      const a = (i / n) * Math.PI * 2;
      const b = a + Math.PI / n / 1.4;
      return <path key={i} d={`M0 0 L${Math.cos(a) * 100} ${Math.sin(a) * 100} L${Math.cos(b) * 100} ${Math.sin(b) * 100} Z`} fill={color} />;
    })}
  </svg>
);

// ---------- BEAT-03 Câu hỏi treo: dấu ? lớn thở và nhấp nháy, sóng toả ra, câu hỏi chưa giải ----------
const Beat03 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const glow = 0.5 + 0.5 * Math.sin((frame / 22) * Math.PI * 2);
  const dots = Math.floor(frame / 8) % 4;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ position: "relative", width: 380, height: 380, display: "grid", placeItems: "center", marginBottom: data.question ? 40 : 0 }}>
        {[0, 1, 2].map((k) => {
          const t = ((frame + k * 18) % 54) / 54;
          return <div key={k} style={{ position: "absolute", inset: 0, borderRadius: "50%", border: `6px solid ${ctx.accent}`, opacity: (1 - t) * 0.6, transform: `scale(${0.55 + t * 0.75})` }} />;
        })}
        <div style={{ position: "absolute", inset: 50, borderRadius: "50%", background: COLORS.pineSoft }} />
        <div style={{ ...pop(frame, fps, 0) }}>
          <div style={{ opacity: 0.75 + 0.25 * glow, transform: `translateY(${idle(frame, 8, 60)}px) rotate(${idle(frame, 6, 80)}deg) scale(${0.96 + 0.06 * glow})` }}>
            <Illus name={data.illus || "red-question-mark"} size={240} />
          </div>
        </div>
        <div style={{ position: "absolute", left: -150, top: 40, opacity: progress(frame, 6, 10), transform: `translateY(${idle(frame + 20, 10, 70)}px) rotate(-14deg)` }}><Illus name="white-question-mark" size={110} /></div>
        <div style={{ position: "absolute", right: -160, top: 150, opacity: progress(frame, 10, 10), transform: `translateY(${idle(frame + 40, 10, 75)}px) rotate(12deg)` }}><Illus name="thinking-face" size={120} /></div>
      </div>
      {data.question && (
        <div style={{ ...fadeUp(frame, 4, 10), maxWidth: 1500, textAlign: "center" }}>
          <FitText text={data.question} max={TYPE.h1} target={30} style={{ display: "inline" }} />
          <span style={{ fontSize: TYPE.h1, fontWeight: 800, color: ctx.accent, display: "inline-block", width: 90, textAlign: "left" }}>{".".repeat(dots)}</span>
        </div>
      )}
    </Stage>
  );
};

// ---------- BEAT-04 Vòng suy nghĩ: bánh tròn chạy ngược + "Thử nghĩ xem" + câu hỏi ----------
const Beat04 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const secs = data.seconds || 5;
  const start = 10;
  const total = secs * fps;
  const used = interpolate(frame, [start, start + total], [0, 1], clampX);
  const left = Math.ceil(secs * (1 - used) - 1e-6);
  const R = 170;
  const a = used * Math.PI * 2;
  // phần còn lại: từ góc đã chạy đến hết vòng (theo chiều kim đồng hồ, bắt đầu từ 12 giờ)
  const pt = (ang) => [Math.sin(ang) * R, -Math.cos(ang) * R];
  const [x0, y0] = pt(a);
  const large = 1 - used > 0.5 ? 1 : 0;
  const wedge = used >= 1 ? "" : used <= 0 ? `M0 ${-R} A${R} ${R} 0 1 1 -0.01 ${-R} Z` : `M0 0 L${x0} ${y0} A${R} ${R} 0 ${large} 1 0 ${-R} Z`;
  const done = used >= 1;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ display: "flex", alignItems: "center", gap: 90, width: "100%" }}>
        <div style={{ ...pop(frame, fps, 0), position: "relative", width: 440, height: 440, flex: "none" }}>
          <svg width={440} height={440} viewBox="-220 -220 440 440" style={{ position: "absolute", inset: 0 }}>
            <circle r={196} fill={COLORS.surface} stroke={COLORS.line} strokeWidth={4} />
            <circle r={R} fill={COLORS.pineSoft} />
            <path d={wedge} fill={ctx.accent} />
            {Array.from({ length: secs }).map((_, i) => {
              const g = (i / secs) * Math.PI * 2;
              return <circle key={i} cx={Math.sin(g) * 186} cy={-Math.cos(g) * 186} r={7} fill={i < secs - left ? COLORS.line : ctx.accent} />;
            })}
            <circle r={98} fill={COLORS.surface} />
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
            {done ? <div style={pop(frame, fps, start + total)}><Illus name="light-bulb" size={130} /></div>
              : <div style={{ fontSize: 110, fontWeight: 800, color: COLORS.ink, fontVariantNumeric: "tabular-nums" }}>{left}</div>}
          </div>
          <div style={{ position: "absolute", right: -40, top: -36, transform: `translateY(${idle(frame, 8, 70)}px) rotate(${idle(frame, 6, 90)}deg)` }}>
            <Illus name={data.illus || "thinking-face"} size={160} />
          </div>
          {[0, 1].map((k) => {
            const g = (frame / 90) * Math.PI * 2 + k * Math.PI;
            return <div key={k} style={{ position: "absolute", left: 220 + Math.cos(g) * 250 - 40, top: 220 + Math.sin(g) * 250 - 40, opacity: progress(frame, 8 + k * 6, 10) }}><Illus name={k ? "light-bulb" : "brain"} size={80} /></div>;
          })}
        </div>
        <div style={{ flex: 1 }}>
          <div style={fadeUp(frame, 0, 8)}>
            <Kicker accent={ctx.accent}><Icon name="brain" size={40} color="#fff" /> {data.kicker || "Thử nghĩ xem"}</Kicker>
          </div>
          <div style={{ ...fadeUp(frame, 6, 12), marginTop: 34 }}>
            <FitText text={data.prompt} max={TYPE.h1 - 6} target={40} align="left" weight={700} />
          </div>
        </div>
      </div>
    </Stage>
  );
};

// ---------- END-01 Rút ra một câu: hình sáng có tia xoay + câu chốt chữ to, quét bút dạ quang ----------
const End01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const parts = splitMarks(data.takeaway, data.marks);
  const markAt = msToFrames(readMs(data.takeaway, ctx) * 0.45, fps);
  const long = String(data.takeaway).length > 48;
  let k = 0;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ position: "relative", width: 300, height: 300, display: "grid", placeItems: "center", marginBottom: 30 }}>
        <Burst size={620} color={ctx.accent} rot={frame * 0.5} opacity={0.12 * progress(frame, 0, 12)} />
        <div style={{ position: "absolute", inset: 30, borderRadius: "50%", background: COLORS.markerSoft }} />
        <div style={pop(frame, fps, 0)}>
          <div style={{ transform: `translateY(${idle(frame, 6, 80)}px)` }}><Illus name={data.illus || "light-bulb"} size={210} /></div>
        </div>
        <div style={{ position: "absolute", left: -90, top: 20, opacity: progress(frame, 8, 10), transform: `scale(${0.8 + 0.2 * Math.abs(Math.sin(frame / 14))})` }}><Illus name="sparkles" size={90} /></div>
        <div style={{ position: "absolute", right: -100, bottom: 10, opacity: progress(frame, 12, 10), transform: `scale(${0.8 + 0.2 * Math.abs(Math.cos(frame / 16))})` }}><Illus name="sparkles" size={80} /></div>
      </div>
      <div style={{ ...fadeUp(frame, 2, 8), marginBottom: 26 }}>
        <Kicker accent={ctx.accent}><Icon name="sparkles" size={36} color="#fff" /> {data.kicker || "Rút ra"}</Kicker>
      </div>
      <div style={{ ...fadeUp(frame, 6, 12), maxWidth: 1600, fontSize: long ? TYPE.h1 : TYPE.hero, fontWeight: 800, lineHeight: 1.2, textAlign: "center", textWrap: "balance", letterSpacing: "-0.01em" }}>
        {parts.map((p, i) => (p.mark ? <Marker key={i} startF={markAt + 14 * k++}>{p.t}</Marker> : <span key={i}>{p.t}</span>))}
      </div>
    </Stage>
  );
};

// ---------- END-03 Checklist mang về: bảng kẹp giấy + các ô ☐ được tích lần lượt ----------
const Tick = ({ p, color }) => (
  <svg width={64} height={64} viewBox="0 0 64 64" style={{ flex: "none" }}>
    <rect x={4} y={4} width={56} height={56} rx={14} fill={p > 0 ? color : COLORS.surface} stroke={color} strokeWidth={5} opacity={1} />
    <path d="M17 33 L28 44 L48 22" fill="none" stroke="#fff" strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={50} strokeDashoffset={50 * (1 - p)} />
  </svg>
);
const End03 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const items = data.items || [];
  const p = plan(items, { level: ctx.level, lead: 900, gap: 250 });
  const starts = p.starts.map((ms) => msToFrames(ms, fps));
  const longest = Math.max(...items.map((t) => t.length));
  const tight = items.length >= 5 || (items.length >= 4 && longest > 34);
  const fs = tight ? TYPE.small : longest > 34 ? TYPE.small + 2 : TYPE.body;
  const pad = tight ? "12px 26px" : "20px 32px";
  return (
    <Stage accent={ctx.accent}>
      <div style={{ display: "flex", alignItems: "center", gap: tight ? 50 : 70, width: "100%" }}>
        <div style={{ ...pop(frame, fps, 0), position: "relative", width: tight ? 330 : 400, height: 460, flex: "none", display: "grid", placeItems: "center", transform: `${pop(frame, fps, 0).transform} scale(${tight ? 0.85 : 1})` }}>
          <div style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", background: COLORS.pineSoft }} />
          <div style={{ transform: `translateY(${idle(frame, 8, 90)}px) rotate(-6deg)` }}><Illus name={data.illus || "clipboard"} size={300} /></div>
          <div style={{ position: "absolute", right: 0, bottom: 30, transform: `rotate(${idle(frame, 6, 70)}deg)` }}><Illus name="backpack" size={140} /></div>
          <div style={{ position: "absolute", left: 10, top: 20, ...pop(frame, fps, starts[starts.length - 1] + 14) }}><Illus name="check-mark-button" size={100} /></div>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={fadeUp(frame, 0, 8)}>
            <Kicker accent={ctx.accent}><Icon name="list-checks" size={38} color="#fff" /> {data.kicker || "Checklist mang về"}</Kicker>
          </div>
          {data.title && <div style={{ ...fadeUp(frame, 4, 10), marginTop: tight ? 14 : 22, fontSize: tight ? TYPE.h2 - 8 : TYPE.h2, fontWeight: 800, lineHeight: 1.15 }}>{data.title}</div>}
          <div style={{ display: "flex", flexDirection: "column", gap: tight ? 12 : 20, marginTop: tight ? 20 : 30 }}>
            {items.map((t, i) => {
              const tp = progress(frame, starts[i] + 10, 10);
              return (
                <div key={i} style={flyIn(frame, fps, starts[i], "right", 120)}>
                  <div style={{ display: "flex", alignItems: "center", gap: 26, padding: pad, borderRadius: 26, background: COLORS.surface, border: `2px solid ${COLORS.line}`, boxShadow: "0 12px 28px rgba(23,32,51,.07)" }}>
                    <Tick p={tp} color={ctx.accent} />
                    <div style={{ fontSize: fs, fontWeight: 700, lineHeight: 1.22 }}>{t}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Stage>
  );
};

// ---------- END-07 Bài tiếp trong chuỗi: thẻ bài tiếp có hình minh hoạ, tên chuỗi, chấm tiến độ, nút chạy ----------
const End07 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const of = data.of || 0;
  const n = data.n || 0;
  const pulse = 1 + 0.07 * Math.sin((frame / fps) * Math.PI * 2);
  const card = flyIn(frame, fps, 0, "right", 260);
  return (
    <Stage accent={ctx.accent}>
      <div style={{ ...fadeUp(frame, 0, 8), alignSelf: "flex-start", display: "flex", alignItems: "center", gap: 18, marginBottom: 30, fontSize: TYPE.small, fontWeight: 700, color: ctx.accent }}>
        <Icon name="book-open" size={48} color={ctx.accent} /> Chuỗi: {data.series}
      </div>
      <div style={{ ...card, width: "100%" }}>
        <Card style={{ display: "flex", alignItems: "center", gap: 60, padding: "48px 56px", borderRadius: 44, border: `3px solid ${ctx.accent}` }}>
          <div style={{ position: "relative", width: 360, height: 360, flex: "none", display: "grid", placeItems: "center" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: 60, background: COLORS.pineSoft, transform: "rotate(-4deg)" }} />
            <div style={pop(frame, fps, 8)}>
              <div style={{ transform: `translateY(${idle(frame, 8, 90)}px)` }}><Illus name={data.illus || "open-book"} size={250} /></div>
            </div>
            {n > 0 && (
              <div style={{ ...pop(frame, fps, 14), position: "absolute", left: -18, top: -18, padding: "10px 24px", borderRadius: 999, background: COLORS.ink, color: COLORS.surface, fontSize: 40, fontWeight: 800 }}>
                Bài {n}{of ? `/${of}` : ""}
              </div>
            )}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ ...fadeUp(frame, 6, 10), display: "flex", alignItems: "center", gap: 14, fontSize: TYPE.body, fontWeight: 800, color: ctx.accent }}>
              {data.kicker || "Bài tiếp theo"} <Icon name="arrow-right" size={48} color={ctx.accent} stroke={3} />
            </div>
            <div style={{ ...fadeUp(frame, 10, 12), marginTop: 18 }}>
              <FitText text={data.nextTitle} max={TYPE.h1 - 8} target={34} align="left" />
            </div>
            {of > 1 && (
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 34 }}>
                {Array.from({ length: Math.min(of, 12) }).map((_, i) => {
                  const cur = i + 1 === n;
                  const s = pop(frame, fps, 16 + i * 2);
                  return <div key={i} style={{ ...s, width: cur ? 56 : 24, height: 24, borderRadius: 12, background: i + 1 < n ? ctx.accent : cur ? COLORS.marker : COLORS.line, border: cur ? `3px solid ${COLORS.ink}` : "none" }} />;
                })}
              </div>
            )}
          </div>
          <div style={{ ...pop(frame, fps, 20), flex: "none" }}>
            <div style={{ width: 140, height: 140, borderRadius: "50%", background: ctx.accent, display: "grid", placeItems: "center", transform: `scale(${pulse})`, boxShadow: `0 0 0 ${16 * (pulse - 0.93) * 6}px ${COLORS.pineSoft}` }}>
              <Icon name="play" size={70} color="#fff" stroke={3} />
            </div>
          </div>
        </Card>
      </div>
    </Stage>
  );
};

export const BEAT_END2 = {
  "BEAT-03": { name: "Câu hỏi treo", family: "BEAT", Component: Beat03, limits: { question: [0, 12] },
    estimate: (d, c) => (d.question ? Math.max(1800, readMs(d.question, c) + 700) : 2000) },
  "BEAT-04": { name: "Vòng suy nghĩ", family: "BEAT", Component: Beat04, limits: { prompt: [4, 26], seconds: [3, 7] },
    estimate: (d, c) => Math.max(readMs(`Thử nghĩ xem ${d.prompt}`, c) + 800, (d.seconds || 5) * 1000 + 900) },
  "END-01": { name: "Rút ra một câu", family: "END", Component: End01, limits: { takeaway: [3, 14] },
    estimate: (d, c) => readMs(d.takeaway, c) + 1300 + 450 * (d.marks || []).length },
  "END-03": { name: "Checklist mang về", family: "END", Component: End03, limits: { items: [3, 5] },
    estimate: (d, c) => plan(d.items, { level: c.level, lead: 900, gap: 250 }).endMs + 1000 },
  "END-07": { name: "Bài tiếp trong chuỗi", family: "END", Component: End07, limits: { nextTitle: [3, 16], series: [2, 8] },
    estimate: (d, c) => readMs(`Chuỗi ${d.series} Bài tiếp theo ${d.nextTitle}`, c) + 1200 },
};
