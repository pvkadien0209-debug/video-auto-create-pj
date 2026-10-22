// text-end-beat.jsx — TEXT-01 câu chốt chữ lớn · TEXT-04 bút dạ quang · END-02 rút ra 3 dòng · END-04 mời làm 40 câu · BEAT-05 thẻ chương
import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { Card, FitText, Icon, Illus, Kicker, Marker, Stage } from "../core/ui.jsx";
import { fadeUp, flyIn, idle, pop, progress, slam } from "../core/motion.js";
// Bản 2: hình minh hoạ màu. Ô tuỳ chọn: illus ở mọi module (false = tắt), END-02 icons[] (một hình cho mỗi dòng).

/** Hình trong vòng tròn có quầng sáng xoay nhẹ. */
const Glow = ({ name, size, frame, fps, at = 0, bg = COLORS.markerSoft, ring = COLORS.marker }) => {
  const p = pop(frame, fps, at);
  return (
    <div style={{ ...p, position: "relative", width: size * 1.4, height: size * 1.4, flex: "none", display: "grid", placeItems: "center" }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: bg }} />
      <div style={{ position: "absolute", inset: -14, borderRadius: "50%", border: `6px dashed ${ring}`, transform: `rotate(${frame * 0.5}deg)`, opacity: 0.8 }} />
      <div style={{ transform: `translateY(${idle(frame, 7, 100)}px)` }}><Illus name={name} size={size} /></div>
    </div>
  );
};
import { msToFrames, plan, readMs } from "../core/timing.js";

// ---------- TEXT-01 Câu chốt chữ lớn ----------
const Text01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <Stage accent={ctx.accent}>
      <div style={{ display: "flex", alignItems: "center", gap: 60, width: "100%" }}>
        {data.illus !== false && <Glow name={data.illus || "light-bulb"} size={230} frame={frame} fps={fps} />}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ ...pop(frame, fps, 0), marginBottom: 34, transformOrigin: "left" }}><Kicker accent={ctx.accent}><Icon name="sparkles" size={36} color="#fff" /> {data.kicker || "Rút ra"}</Kicker></div>
          <div style={{ ...slam(frame, fps, 4, 1.5), transformOrigin: "left center" }}>
            <FitText text={data.text} max={TYPE.hero + 16} target={26} align="left" />
          </div>
        </div>
      </div>
    </Stage>
  );
};

// ---------- TEXT-04 Bút dạ quang: câu đứng yên, quét 1–2 cụm cần nhớ ----------
const Text04 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const marks = data.marks || [];
  const readF = msToFrames(readMs(data.text, ctx) * 0.4, fps);
  // tách câu thành các đoạn, đoạn trùng với marks thì tô
  const parts = [];
  let rest = data.text;
  marks.forEach((m) => {
    const i = rest.indexOf(m);
    if (i < 0) return;
    parts.push({ t: rest.slice(0, i) }, { t: m, mark: true });
    rest = rest.slice(i + m.length);
  });
  parts.push({ t: rest });
  let k = 0;
  return (
    <Stage accent={ctx.accent}>
      {data.illus !== false && (
        <div style={{ ...pop(frame, fps, 2), marginBottom: 26, display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ transform: `rotate(${idle(frame, 6, 120) - 10}deg)` }}><Illus name={data.illus || "pushpin"} size={110} /></div>
          <div style={{ fontSize: TYPE.small, fontWeight: 800, color: ctx.accent }}>{data.kicker || "Ghi nhớ"}</div>
        </div>
      )}
      <div style={{ ...fadeUp(frame, 0, 12), maxWidth: 1600, fontSize: data.text.length > 70 ? TYPE.h2 : TYPE.h1, fontWeight: 700, lineHeight: 1.35, textAlign: "center", textWrap: "balance" }}>
        {parts.map((p, i) => (p.mark ? <Marker key={i} startF={readF + 14 * k++}>{p.t}</Marker> : <span key={i}>{p.t}</span>))}
      </div>
    </Stage>
  );
};

// ---------- END-02 Rút ra 3 dòng ----------
const End02 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = plan(data.points, { level: ctx.level, lead: 900, gap: 300 });
  const icons = data.icons || [];
  return (
    <Stage accent={ctx.accent} align="left">
      <div style={{ ...fadeUp(frame, 0, 10), display: "flex", alignItems: "center", gap: 22 }}>
        {data.illus !== false && <div style={{ ...pop(frame, fps, 0) }}><div style={{ transform: `rotate(${idle(frame, 5, 110)}deg)` }}><Illus name={data.illus || "backpack"} size={120} /></div></div>}
        <Kicker accent={ctx.accent}>{data.kicker || "Nhớ mang theo"}</Kicker>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 30, width: "100%" }}>
        {data.points.map((t, i) => (
          <div key={i} style={pop(frame, fps, msToFrames(p.starts[i], fps))}>
            <Card style={{ display: "flex", alignItems: "center", gap: 30, padding: "30px 40px" }}>
              <div style={{ width: 76, height: 76, borderRadius: 22, background: COLORS.marker, display: "grid", placeItems: "center", fontSize: 44, fontWeight: 800, flex: "none" }}>{i + 1}</div>
              <div style={{ fontSize: TYPE.body + 4, fontWeight: 700, flex: 1 }}>{t}</div>
              {icons[i] && <div style={{ ...pop(frame, fps, msToFrames(p.starts[i], fps) + 6), flex: "none" }}><Illus name={icons[i]} size={92} /></div>}
            </Card>
          </div>
        ))}
      </div>
    </Stage>
  );
};

// ---------- END-04 Mời làm 40 câu ngay bên dưới (video đặt trong trang bài) ----------
const End04 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bob = Math.abs(Math.sin((frame / fps) * Math.PI * 1.2)) * 26;
  const side = data.sideIllus || ["memo", "headphone"];
  return (
    <Stage accent={ctx.accent}>
      <div style={{ display: "flex", alignItems: "center", gap: 36, marginBottom: 10 }}>
        {side[0] && <div style={{ ...flyIn(frame, fps, 6, "left", 200) }}><div style={{ transform: `rotate(${idle(frame, 6, 120) - 8}deg)` }}><Illus name={side[0]} size={150} /></div></div>}
        <div style={{ ...pop(frame, fps, 0), maxWidth: 1240 }}>
          <FitText text={data.text || `Làm ${data.remaining || 40} câu hỏi ngay bên dưới`} max={TYPE.hero} target={30} />
        </div>
        {side[1] && <div style={{ ...flyIn(frame, fps, 6, "right", 200) }}><div style={{ transform: `rotate(${idle(frame, 6, 130) + 8}deg)` }}><Illus name={side[1]} size={150} /></div></div>}
      </div>
      <div style={{ ...fadeUp(frame, 10, 12), marginTop: 20, fontSize: TYPE.body, color: COLORS.muted, fontWeight: 600 }}>{data.sub || "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"}</div>
      <div style={{ ...fadeUp(frame, 16, 12), marginTop: 26, transform: `translateY(${bob}px)` }}>
        <div style={{ width: 230, height: 230, borderRadius: "50%", background: COLORS.markerSoft, border: `6px solid ${COLORS.marker}`, display: "grid", placeItems: "center" }}>
          {data.illus === false ? <Icon name="arrow-down" size={110} color={ctx.accent} stroke={3} /> : <Illus name={data.illus || "backhand-index-pointing-down"} size={160} />}
        </div>
      </div>
      <div style={{ ...fadeUp(frame, 24, 12), position: "absolute", bottom: -60, fontSize: 34, fontWeight: 700, color: COLORS.muted }}>{data.brand || "Mỗi ngày biết thêm"}</div>
    </Stage>
  );
};

// ---------- BEAT-05 Thẻ chương ----------
const Beat05 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bar = progress(frame, 4, 18);
  const ill = data.illus === false ? null : data.illus || "bookmark-tabs";
  const ip = slam(frame, fps, 0, 1.9);
  return (
    <Stage accent={ctx.accent} bg={COLORS.ink}>
      <div style={{ display: "flex", alignItems: "center", gap: 70, width: "100%" }}>
        {ill && (
          <div style={{ position: "relative", width: 400, height: 400, flex: "none", display: "grid", placeItems: "center" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: ctx.accent, opacity: ip.opacity, transform: ip.transform }} />
            <div style={{ position: "absolute", inset: -22, borderRadius: "50%", border: `6px dashed ${COLORS.marker}`, opacity: 0.6 * progress(frame, 6, 10), transform: `rotate(${frame * 0.6}deg)` }} />
            <div style={{ opacity: ip.opacity, transform: `${ip.transform} translateY(${idle(frame, 7, 100)}px)` }}><Illus name={ill} size={250} /></div>
          </div>
        )}
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", alignItems: ill ? "flex-start" : "center" }}>
          <div style={{ ...flyIn(frame, fps, 0, "right", 160), fontSize: 46, fontWeight: 700, color: COLORS.marker, letterSpacing: "0.04em" }}>PHẦN {data.n}{data.of ? ` / ${data.of}` : ""}</div>
          {data.of ? (
            <div style={{ display: "flex", gap: 14, margin: "30px 0 36px" }}>
              {Array.from({ length: data.of }).map((_, i) => (
                <div key={i} style={{ width: 120, height: 12, borderRadius: 6, background: "rgba(255,255,255,.18)", overflow: "hidden" }}>
                  <div style={{ width: `${(i < data.n - 1 ? 1 : i === data.n - 1 ? bar : 0) * 100}%`, height: "100%", background: COLORS.marker }} />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ width: 640, height: 10, borderRadius: 6, background: "rgba(255,255,255,.18)", margin: "34px 0 40px", overflow: "hidden" }}>
              <div style={{ width: `${bar * 100}%`, height: "100%", background: COLORS.marker }} />
            </div>
          )}
          <div style={{ ...flyIn(frame, fps, 4, "right", 220) }}>
            <FitText text={data.title} max={TYPE.hero} target={26} color="#fff" align={ill ? "left" : "center"} />
          </div>
        </div>
      </div>
    </Stage>
  );
};

export const TEXT_END_BEAT = {
  "TEXT-01": { name: "Câu chốt chữ lớn", family: "TEXT", Component: Text01, limits: { text: [3, 14] },
    estimate: (d, c) => readMs(d.text, c) + 1400 },
  "TEXT-04": { name: "Bút dạ quang", family: "TEXT", Component: Text04, limits: { text: [6, 30] },
    estimate: (d, c) => readMs(d.text, c) + 1200 + 450 * (d.marks || []).length },
  "END-02": { name: "Rút ra 3 dòng", family: "END", Component: End02, limits: { points: [3, 3] },
    estimate: (d, c) => plan(d.points, { level: c.level, lead: 900, gap: 300 }).endMs + 1200 },
  "END-04": { name: "Mời làm 40 câu", family: "END", Component: End04, limits: {},
    estimate: () => 4500 },
  "BEAT-05": { name: "Thẻ chương", family: "BEAT", Component: Beat05, limits: { title: [2, 10] },
    estimate: (d, c) => Math.max(1800, readMs(d.title, c) + 600) },
};
