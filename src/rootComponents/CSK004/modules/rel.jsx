// rel.jsx — họ REL (quan hệ): REL-01 nhân quả bằng đường nối · REL-02 chuỗi domino
// Bản 2: hình minh hoạ màu. Ô tuỳ chọn: REL-01 causeIllus, effectIllus (false = tắt); REL-02 illus[] (một hình cho mỗi mắt xích).
import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { Card, DrawArrow, FitText, Illus, Stage } from "../core/ui.jsx";
import { fadeUp, idle, pop, progress, shake } from "../core/motion.js";
import { msToFrames, readMs } from "../core/timing.js";

// ---------- REL-01 Nhân quả bằng đường nối: A → (vì vậy) → B ----------
const Rel01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const aEnd = msToFrames(readMs(data.cause, ctx), fps);
  const draw = progress(frame, aEnd, 18);
  const bAt = aEnd + 16;
  const ci = data.causeIllus === false ? null : data.causeIllus || "warning";
  const ei = data.effectIllus === false ? null : data.effectIllus || "collision";
  const k = shake(frame, bAt + 4, 10, 8);
  const ill = (name, at, tilt) => name && (
    <div style={{ ...pop(frame, fps, at), marginBottom: 14 }}>
      <div style={{ transform: `translateY(${idle(frame, 5, 100)}px) rotate(${tilt}deg)` }}><Illus name={name} size={150} /></div>
    </div>
  );
  return (
    <Stage accent={ctx.accent}>
      {data.title && <div style={{ ...fadeUp(frame, 0, 10), marginBottom: 60 }}><FitText text={data.title} max={TYPE.h2} target={40} /></div>}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ ...fadeUp(frame, 0, 12), width: 640 }}>
          <Card tone="coral" style={{ minHeight: 280, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            {ill(ci, 4, -4)}
            <FitText text={data.cause} max={TYPE.h2} min={TYPE.small} target={30} weight={700} />
          </Card>
        </div>
        <div style={{ position: "relative", width: 400, display: "grid", placeItems: "center" }}>
          <div style={{ ...fadeUp(frame, aEnd + 4, 10), position: "absolute", top: -50, fontSize: TYPE.small, fontWeight: 700, color: ctx.accent }}>{data.linkLabel || "vì vậy"}</div>
          <DrawArrow width={360} height={110} p={draw} color={ctx.accent} />
        </div>
        <div style={{ ...pop(frame, fps, bAt), width: 640, transform: `${pop(frame, fps, bAt).transform} translate(${k.x}px, ${k.y}px)` }}>
          <Card tone="marker" style={{ minHeight: 280, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: `3px solid ${COLORS.marker}` }}>
            {ill(ei, bAt + 4, 4)}
            <FitText text={data.effect} max={TYPE.h2} min={TYPE.small} target={30} weight={800} />
          </Card>
        </div>
      </div>
    </Stage>
  );
};

// ---------- REL-02 Chuỗi domino: mỗi mắt xích đổ sang mắt sau ----------
const Rel02 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const n = data.chain.length;
  let acc = 300;
  const st = data.chain.map((t) => {
    const s = acc;
    acc += readMs(t, { ...ctx, fresh: false }) + 500;
    return msToFrames(s, fps);
  });
  const w = 500;
  const ills = data.illus || [];
  if (n >= 4) {
    // chuỗi dài: xếp dọc để chữ không bị ép nhỏ
    return (
      <Stage accent={ctx.accent} align="left">
        {data.title && <div style={{ ...fadeUp(frame, 0, 10), marginBottom: 26 }}><FitText text={data.title} max={TYPE.h2} target={40} align="left" /></div>}
        {data.chain.map((t, i) => {
          const fall = progress(frame, st[i], 12);
          const last = i === n - 1;
          return (
            <div key={i} style={{ opacity: fall, transform: `translateX(${(1 - fall) * -40}px)`, display: "flex", alignItems: "center", gap: 26, marginBottom: 24 }}>
              <div style={{ width: 66, height: 66, borderRadius: 18, flex: "none", display: "grid", placeItems: "center", fontSize: 36, fontWeight: 800, background: last ? COLORS.coral : ctx.accent, color: "#fff" }}>{i + 1}</div>
              {ills[i] && <div style={{ ...pop(frame, fps, st[i] + 3), flex: "none" }}><Illus name={ills[i]} size={74} /></div>}
              <div style={{ fontSize: TYPE.h2 - 6, fontWeight: 700, color: last ? COLORS.coral : COLORS.ink }}>{t}</div>
            </div>
          );
        })}
      </Stage>
    );
  }
  return (
    <Stage accent={ctx.accent}>
      {data.title && <div style={{ ...fadeUp(frame, 0, 10), marginBottom: 60 }}><FitText text={data.title} max={TYPE.h2} target={40} /></div>}
      <div style={{ display: "flex", alignItems: "center" }}>
        {data.chain.map((t, i) => {
          const fall = progress(frame, st[i], 14);
          const last = i === n - 1;
          return (
            <React.Fragment key={i}>
              {i > 0 && <div style={{ opacity: progress(frame, st[i] - 6, 6) }}><DrawArrow width={110} height={60} p={progress(frame, st[i] - 6, 10)} color={COLORS.muted} curve={0} /></div>}
              <div style={{ width: w, opacity: fall, transform: `perspective(900px) rotateX(${(1 - fall) * -70}deg)`, transformOrigin: "bottom" }}>
                <Card tone={last ? "coral" : "surface"} style={{ minHeight: 300, display: "flex", flexDirection: "column", justifyContent: "center", gap: 14, border: last ? `3px solid ${COLORS.coral}` : undefined }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ fontSize: 40, fontWeight: 800, color: last ? COLORS.coral : ctx.accent }}>{i + 1}</div>
                    {ills[i] && <div style={{ ...pop(frame, fps, st[i] + 6) }}><div style={{ transform: `rotate(${idle(frame + i * 20, 4, 110)}deg)` }}><Illus name={ills[i]} size={120} /></div></div>}
                  </div>
                  <div style={{ fontSize: TYPE.body, fontWeight: 700, lineHeight: 1.2 }}>{t}</div>
                </Card>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </Stage>
  );
};

export const REL = {
  "REL-01": { name: "Nhân quả bằng đường nối", family: "REL", Component: Rel01, limits: { cause: [3, 14], effect: [3, 14] },
    estimate: (d, c) => readMs(d.cause, c) + 1100 + readMs(d.effect, { ...c, fresh: false }) + 800 },
  "REL-02": { name: "Chuỗi domino", family: "REL", Component: Rel02, limits: { chain: [3, 5] },
    estimate: (d, c) => d.chain.reduce((s, t) => s + readMs(t, { ...c, fresh: false }) + 500, 300) + 1000 },
};
