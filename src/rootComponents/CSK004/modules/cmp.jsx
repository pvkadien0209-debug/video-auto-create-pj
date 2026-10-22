// cmp.jsx — họ CMP (so sánh): CMP-01 hai bên chia đôi · CMP-06 nên / không nên
// Bản 2: hình minh hoạ màu. Ô tuỳ chọn: CMP-01 illus [trái, phải] (false = tắt); CMP-06 doIllus, dontIllus, doIcons[], dontIcons[].
import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { Card, FitText, Icon, Illus, Stage } from "../core/ui.jsx";
import { fadeUp, flyIn, idle, pop, progress } from "../core/motion.js";
import { msToFrames, plan, readMs } from "../core/timing.js";

// ---------- CMP-01 Hai bên chia đôi (trước – sau, ban ngày – buổi tối…) ----------
const Cmp01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const [la, lb] = data.labels || ["Trước", "Sau"];
  const bAt = msToFrames(readMs(`${la} ${data.left}`, ctx) + 300, fps);
  const wipe = progress(frame, bAt, 14);
  const ills = data.illus === false ? [null, null] : data.illus || ["thinking-face", "smiling-face-with-sunglasses"];
  const short = !data.title;
  const side = (label, text, tone, at, good, ill, dir) => (
    <div style={{ ...flyIn(frame, fps, at, dir, 120), flex: 1, minWidth: 0 }}>
      <Card tone={tone} style={{ height: short ? 600 : 540, display: "flex", flexDirection: "column", gap: 24, padding: "40px 48px", border: good ? `3px solid ${ctx.accent}` : undefined }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <div style={{ display: "inline-flex", padding: "10px 28px", borderRadius: 999, background: good ? ctx.accent : COLORS.ink2, color: "#fff", fontSize: TYPE.small, fontWeight: 700 }}>{label}</div>
          {ill && (
            <div style={{ ...pop(frame, fps, at + 6), width: 170, height: 170, flex: "none", borderRadius: "50%", background: good ? COLORS.surface : COLORS.paper, display: "grid", placeItems: "center", marginTop: -20, marginRight: -14 }}>
              <div style={{ transform: `translateY(${idle(frame, 6, 100)}px)` }}><Illus name={ill} size={124} /></div>
            </div>
          )}
        </div>
        <FitText text={text} max={TYPE.h2} min={TYPE.small} target={36} weight={700} align="left" />
      </Card>
    </div>
  );
  return (
    <Stage accent={ctx.accent}>
      {data.title && <div style={{ ...fadeUp(frame, 0, 10), marginBottom: 50 }}><FitText text={data.title} max={TYPE.h2} target={40} /></div>}
      <div style={{ display: "flex", gap: 48, width: "100%", alignItems: "stretch" }}>
        {side(la, data.left, "surface", 0, false, ills[0], "left")}
        <div style={{ position: "relative", width: 8, borderRadius: 4, background: ctx.accent, transform: `scaleY(${wipe})` }}>
          <div style={{ position: "absolute", left: -40, top: "50%", marginTop: -44, width: 88, height: 88, borderRadius: "50%", background: ctx.accent, color: "#fff", display: "grid", placeItems: "center", fontSize: 34, fontWeight: 800, opacity: wipe }}>VS</div>
        </div>
        {side(lb, data.right, "soft", bAt, true, ills[1], "right")}
      </div>
    </Stage>
  );
};

// ---------- CMP-06 Nên / Không nên ----------
const Cmp06 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const all = [...data.do, ...data.dont];
  const p = plan(all, { level: ctx.level, lead: 600, gap: 200 });
  const at = (i) => msToFrames(p.starts[i], fps);
  const many = Math.max(data.do.length, data.dont.length) > 3;
  const col = (title, items, illus, color, offset, icons) => (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ ...fadeUp(frame, offset === 0 ? 0 : at(offset) - 6, 10), display: "flex", alignItems: "center", gap: 18, marginBottom: many ? 22 : 30 }}>
        <div style={{ ...pop(frame, fps, offset === 0 ? 0 : at(offset) - 6), width: many ? 96 : 120, height: many ? 96 : 120, borderRadius: "50%", background: color === COLORS.ok ? COLORS.pineSoft : COLORS.coralSoft, display: "grid", placeItems: "center" }}>
          <Illus name={illus} size={many ? 70 : 88} />
        </div>
        <div style={{ fontSize: TYPE.h2, fontWeight: 800, color }}>{title}</div>
      </div>
      {items.map((t, i) => (
        <div key={i} style={{ ...pop(frame, fps, at(offset + i)), marginBottom: many ? 16 : 22 }}>
          <Card style={{ padding: many ? "18px 28px" : "26px 34px", borderLeft: `10px solid ${color}`, display: "flex", alignItems: "center", gap: 22 }}>
            {icons[i] && <div style={{ flex: "none" }}><Illus name={icons[i]} size={many ? 52 : 64} /></div>}
            <div style={{ fontSize: many ? TYPE.small : TYPE.body - 4, fontWeight: 600 }}>{t}</div>
          </Card>
        </div>
      ))}
    </div>
  );
  return (
    <Stage accent={ctx.accent}>
      <div style={{ display: "flex", gap: 60, width: "100%" }}>
        {col(data.doLabel || "Nên", data.do, data.doIllus || "thumbs-up", COLORS.ok, 0, data.doIcons || [])}
        {col(data.dontLabel || "Không nên", data.dont, data.dontIllus || "prohibited", COLORS.coral, data.do.length, data.dontIcons || [])}
      </div>
    </Stage>
  );
};

export const CMP = {
  "CMP-01": { name: "Hai bên chia đôi", family: "CMP", Component: Cmp01, limits: { left: [3, 16], right: [3, 16] },
    estimate: (d, c) => readMs(d.left, c) + readMs(d.right, c) + 1200 },
  "CMP-06": { name: "Nên / Không nên", family: "CMP", Component: Cmp06, limits: { do: [1, 4], dont: [1, 4] },
    estimate: (d, c) => plan([...d.do, ...d.dont], { level: c.level, lead: 600, gap: 200 }).endMs + 900 },
};
