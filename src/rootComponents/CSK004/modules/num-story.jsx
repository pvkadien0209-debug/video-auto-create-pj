// num-story.jsx — NUM-01 số chạy lớn · STORY-01 tình huống 3 nhịp
// Bản 2: hình minh hoạ màu. Ô tuỳ chọn: NUM-01 illus (hình cạnh con số); STORY-01 illus [hoàn cảnh, làm gì, kết quả] (hình người/việc).
import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig, Easing } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { Card, FitText, Icon, Illus, Kicker, Stage } from "../core/ui.jsx";
import { fadeUp, idle, pop, progress, shake } from "../core/motion.js";
import { msToFrames, plan, readMs } from "../core/timing.js";

// ---------- NUM-01 Số chạy lớn (bắt buộc có nguồn) ----------
const Num01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const runF = Math.round(fps * 1.1);
  const v = interpolate(frame, [6, 6 + runF], [0, Number(data.value)], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const dec = String(data.value).includes(".") ? String(data.value).split(".")[1].length : 0;
  const shown = v.toLocaleString("vi-VN", { minimumFractionDigits: dec, maximumFractionDigits: dec });
  const land = shake(frame, 6 + runF, 8, 8);
  const ring = progress(frame, 6, runF);
  return (
    <Stage accent={ctx.accent}>
      {data.kicker && <div style={fadeUp(frame, 0, 10)}><Kicker accent={ctx.accent}>{data.kicker}</Kicker></div>}
      <div style={{ display: "flex", alignItems: "center", gap: 50, marginTop: 30, transform: `translate(${land.x}px, ${land.y}px)` }}>
        <div style={{ ...pop(frame, fps, 2), position: "relative", width: 290, height: 290, flex: "none", display: "grid", placeItems: "center" }}>
          <svg width={290} height={290} style={{ position: "absolute" }}>
            <circle cx={145} cy={145} r={135} fill={COLORS.pineSoft} />
            <circle cx={145} cy={145} r={135} fill="none" stroke={ctx.accent} strokeWidth={12} strokeLinecap="round" strokeDasharray={848} strokeDashoffset={848 * (1 - ring)} transform="rotate(-90 145 145)" />
          </svg>
          <div style={{ transform: `translateY(${idle(frame, 6, 100)}px)` }}><Illus name={data.illus || "bar-chart"} size={190} /></div>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 24 }}>
          <div style={{ fontSize: 240, fontWeight: 800, color: ctx.accent, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{shown}</div>
          <div style={{ fontSize: TYPE.h1, fontWeight: 800 }}>{data.unit}</div>
        </div>
      </div>
      <div style={{ ...fadeUp(frame, 6 + runF, 10), marginTop: 30, maxWidth: 1400 }}>
        <FitText text={data.label} max={TYPE.h2} target={44} weight={600} />
      </div>
      <div style={{ ...fadeUp(frame, 10 + runF, 10), marginTop: 30, fontSize: 40, color: COLORS.muted }}>Nguồn: {data.source}</div>
    </Stage>
  );
};

// ---------- STORY-01 Tình huống 3 nhịp: hoàn cảnh → làm gì → chuyện gì xảy ra ----------
const Story01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ill = data.illus || ["student", "person-running", "face-screaming-in-fear"];
  const beats = [
    { label: "Hoàn cảnh", text: data.context, icon: "user", illus: ill[0] },
    { label: "Đã làm gì", text: data.action, icon: "footprints", illus: ill[1] },
    { label: "Kết quả", text: data.outcome, icon: "triangle-alert", illus: ill[2] },
  ];
  const p = plan(beats.map((b) => b.text), { level: ctx.level, lead: 900, gap: 400 });
  return (
    <Stage accent={ctx.accent} align="left">
      <div style={fadeUp(frame, 0, 10)}><Kicker accent={COLORS.ink2}><Icon name="message-circle" size={36} color="#fff" /> {data.label || "Tình huống minh hoạ"}</Kicker></div>
      <div style={{ display: "flex", gap: 34, marginTop: 34, width: "100%" }}>
        {beats.map((b, i) => {
          const last = i === 2;
          return (
            <div key={i} style={{ ...fadeUp(frame, msToFrames(p.starts[i], fps), 12), flex: 1 }}>
              <Card tone={last ? "coral" : "surface"} style={{ height: 560, display: "flex", flexDirection: "column", gap: 18, padding: "30px 38px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                  <div style={{ ...pop(frame, fps, msToFrames(p.starts[i], fps) + 4), width: 170, height: 170, flex: "none", borderRadius: "50%", background: last ? COLORS.surface : COLORS.pineSoft, display: "grid", placeItems: "center" }}>
                    {b.illus ? <div style={{ transform: `translateY(${idle(frame + i * 25, 5, 90)}px)` }}><Illus name={b.illus} size={128} /></div> : <Icon name={b.icon} size={64} color={last ? COLORS.coral : ctx.accent} />}
                  </div>
                  <div style={{ fontSize: 40, fontWeight: 800, color: last ? COLORS.coral : ctx.accent, lineHeight: 1.1 }}>{b.label}</div>
                </div>
                <FitText text={b.text} max={TYPE.body} min={40} target={60} weight={600} align="left" />
              </Card>
            </div>
          );
        })}
      </div>
    </Stage>
  );
};

export const NUM_STORY = {
  "NUM-01": { name: "Số chạy lớn", family: "NUM", Component: Num01, limits: { label: [3, 16] }, needsSource: true,
    estimate: (d, c) => 1500 + readMs(d.label, c) + 1000 },
  "STORY-01": { name: "Tình huống 3 nhịp", family: "STORY", Component: Story01, limits: { context: [4, 24], action: [4, 24], outcome: [4, 24] },
    estimate: (d, c) => plan([d.context, d.action, d.outcome], { level: c.level, lead: 900, gap: 400 }).endMs + 1000 },
};
