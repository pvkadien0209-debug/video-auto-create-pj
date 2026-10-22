// open.jsx — họ OPEN (mở đầu): OPEN-01 câu hỏi thẳng · OPEN-02 hiểu lầm · OPEN-07 diễn dịch · OPEN-11 lời hứa + từ khoá
// Bản 2: mở đầu kịch tính hơn (đập chữ, rung, loé sáng, phóng máy) + hình minh hoạ màu lớn.
// Ô dữ liệu thêm (đều tuỳ chọn): illus, around[], illusAfter (OPEN-02), keywordIllus[] (OPEN-11).
import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { FitText, Icon, Illus, Kicker, Stage } from "../core/ui.jsx";
import { fadeUp, flash, flyIn, idle, pop, progress, shake, slam, zoom } from "../core/motion.js";
import { msToFrames, plan, readMs } from "../core/timing.js";

// ---------- phần dùng chung trong họ OPEN ----------

/** Tia sáng toả ra sau hình chính, xoay chậm. */
const Rays = ({ size = 620, color = COLORS.marker, opacity = 0.35, frame = 0, n = 14 }) => {
  const r = size / 2;
  const wedges = Array.from({ length: n }).map((_, i) => {
    const a0 = (i / n) * Math.PI * 2;
    const a1 = a0 + Math.PI / n;
    return `M ${r} ${r} L ${r + r * Math.cos(a0)} ${r + r * Math.sin(a0)} L ${r + r * Math.cos(a1)} ${r + r * Math.sin(a1)} Z`;
  });
  return (
    <svg width={size} height={size} style={{ position: "absolute", left: "50%", top: "50%", marginLeft: -r, marginTop: -r, opacity, transform: `rotate(${frame * 0.4}deg)` }}>
      {wedges.map((d, i) => <path key={i} d={d} fill={color} />)}
    </svg>
  );
};

/** Hình chính: tia sáng + vòng tròn màu + hình minh hoạ đập vào, sau đó thở nhẹ. */
const HeroIllus = ({ name, frame, fps, start = 0, size = 300, ring = COLORS.marker, rays = COLORS.marker, raysOpacity = 0.3, around = [] }) => {
  const s = slam(frame, fps, start, 2.2);
  const pos = [[-0.62, -0.5], [0.6, -0.56], [0.66, 0.5], [-0.66, 0.5]];
  return (
    <div style={{ position: "relative", width: size * 1.5, height: size * 1.5, display: "grid", placeItems: "center", flex: "none" }}>
      <Rays size={size * 1.9} color={rays} opacity={raysOpacity * progress(frame, start, 10)} frame={frame} />
      <div style={{ position: "absolute", width: size * 1.18, height: size * 1.18, borderRadius: "50%", background: ring, opacity: s.opacity, transform: s.transform }} />
      <div style={{ opacity: s.opacity, transform: `${s.transform} translateY(${idle(frame, 6, 80)}px)` }}><Illus name={name} size={size} /></div>
      {around.slice(0, 4).map((n, i) => {
        const p = pop(frame, fps, start + 8 + i * 4);
        return (
          <div key={n + i} style={{ position: "absolute", left: "50%", top: "50%", opacity: p.opacity,
            transform: `translate(${pos[i][0] * size - size * 0.19}px, ${pos[i][1] * size - size * 0.19 + idle(frame + i * 31, 9, 96)}px) ${p.transform}` }}>
            <Illus name={n} size={size * 0.38} />
          </div>
        );
      })}
    </div>
  );
};

/** Lớp phủ loé sáng toàn màn (trắng hoặc đỏ). */
const Flash = ({ o, color = "#fff" }) => (o > 0 ? <AbsoluteFill style={{ background: color, opacity: o, pointerEvents: "none" }} /> : null);

const sh = (a) => `translate(${a.x}px, ${a.y}px)`;

// ---------- OPEN-01 Câu hỏi thẳng: nền tối, dấu hỏi lớn đập vào, rung, loé ----------
const Open01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const q = slam(frame, fps, 2, 1.7);
  const k = shake(frame, 6, 12, 16);
  const cam = zoom(frame, 0, 45, 1.14, 1);
  return (
    <AbsoluteFill>
      <Stage accent={COLORS.marker} bg={COLORS.ink}>
        <div style={{ display: "flex", alignItems: "center", gap: 40, width: "100%", transform: `${sh(k)} scale(${cam})` }}>
          <HeroIllus name={data.illus || "red-question-mark"} frame={frame} fps={fps} size={330} ring={ctx.accent} rays={COLORS.marker} raysOpacity={0.22}
            around={data.around || ["thinking-face", "exclamation-question-mark"]} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ opacity: q.opacity, transform: q.transform, transformOrigin: "left center" }}>
              <FitText text={data.question} max={TYPE.hero + 16} target={30} color="#fff" align="left" />
            </div>
            <div style={{ ...fadeUp(frame, 10, 8), marginTop: 30, width: 220, height: 12, borderRadius: 6, background: COLORS.marker, transform: `scaleX(${progress(frame, 10, 14)})`, transformOrigin: "left" }} />
            {data.kicker && <div style={{ ...fadeUp(frame, 14, 10), marginTop: 26, fontSize: TYPE.small, color: "rgba(255,255,255,.75)", fontWeight: 600 }}>{data.kicker}</div>}
          </div>
        </div>
      </Stage>
      <Flash o={flash(frame, 0, 9) * 0.9} />
    </AbsoluteFill>
  );
};

// ---------- OPEN-02 Hiểu lầm: câu sai bay vào, con dấu SAI đập xuống, rung + loé đỏ ----------
const Open02 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const stampAt = msToFrames(readMs(data.myth) * 0.75, fps);
  const st = slam(frame, fps, stampAt, 3.2);
  const hit = frame >= stampAt + 3;
  const k = shake(frame, stampAt + 3, 14, 20);
  const k0 = shake(frame, 2, 8, 8);
  return (
    <AbsoluteFill>
      <Stage accent={COLORS.coral}>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", transform: `${sh(k)} ${sh(k0)}` }}>
          <div style={flyIn(frame, fps, 0, "up", 80)}>
            <Kicker accent={COLORS.coral}>
              <Icon name="triangle-alert" size={40} color="#fff" /> {data.label || "Hiểu lầm thường gặp"}
            </Kicker>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 30, marginTop: 34, width: "100%" }}>
            <div style={{ position: "relative", width: 400, height: 400, flex: "none", display: "grid", placeItems: "center" }}>
              <Rays size={640} color={hit ? COLORS.coral : COLORS.line} opacity={hit ? 0.22 : 0.6} frame={frame} />
              <div style={{ position: "absolute", width: 340, height: 340, borderRadius: "50%", background: hit ? COLORS.coralSoft : COLORS.surface, border: `6px solid ${hit ? COLORS.coral : COLORS.line}` }} />
              <div style={{ ...pop(frame, fps, hit ? stampAt + 3 : 0), position: "relative" }}>
                <Illus name={hit ? data.illusAfter || "face-screaming-in-fear" : data.illus || "smiling-face-with-sunglasses"} size={240} />
              </div>
            </div>
            <div style={{ ...flyIn(frame, fps, 2, "right", 220), position: "relative", flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: TYPE.h2, color: COLORS.muted, fontWeight: 600, marginBottom: 14 }}>Nhiều người nghĩ:</div>
              <FitText text={`“${data.myth}”`} max={TYPE.h1} target={34} align="left" color={hit ? COLORS.ink2 : COLORS.ink}
                style={{ textDecoration: hit ? `line-through ${COLORS.coral}` : "none", textDecorationThickness: 8 }} />
              <div style={{ position: "absolute", right: -10, top: -90, transform: `${st.transform} rotate(-12deg)`, opacity: st.opacity }}>
                <div style={{ padding: "14px 34px", borderRadius: 24, border: `10px solid ${COLORS.coral}`, background: "rgba(255,255,255,.92)", color: COLORS.coral, display: "flex", alignItems: "center", gap: 10, fontSize: 84, fontWeight: 900, letterSpacing: "0.06em" }}>
                  <Icon name="x" size={84} color={COLORS.coral} stroke={3.4} /> SAI
                </div>
              </div>
            </div>
          </div>
        </div>
      </Stage>
      <Flash o={flash(frame, stampAt + 3, 10) * 0.45} color={COLORS.coral} />
    </AbsoluteFill>
  );
};

// ---------- OPEN-07 Diễn dịch: kết luận đập vào trước, rồi các ô lý do rơi xuống ----------
const Open07 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const n = data.count || 3;
  const lead = msToFrames(readMs(data.claim), fps);
  const c = slam(frame, fps, 1, 1.8);
  const k = shake(frame, 6, 10, 12);
  const kk = Array.from({ length: n }).reduce((a, _, i) => {
    const s = shake(frame, lead + i * 7 + 5, 6, 6);
    return { x: a.x + s.x, y: a.y + s.y };
  }, { x: 0, y: 0 });
  const icons = data.icons || [];
  return (
    <AbsoluteFill>
      <Stage accent={ctx.accent}>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", transform: `${sh(k)} ${sh(kk)} scale(${zoom(frame, 0, 30, 1.1, 1)})` }}>
          <div style={{ display: "flex", alignItems: "center", gap: 30, width: "100%" }}>
            <HeroIllus name={data.illus || "bullseye"} frame={frame} fps={fps} size={290} ring={COLORS.markerSoft} rays={ctx.accent} raysOpacity={0.14} />
            <div style={{ flex: 1, minWidth: 0, opacity: c.opacity, transform: c.transform, transformOrigin: "left center" }}>
              <FitText text={data.claim} max={TYPE.hero + 16} target={28} align="left" />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 10 }}>
            {Array.from({ length: n }).map((_, i) => {
              const at = lead + i * 7;
              const f = flyIn(frame, fps, at, "down", 260);
              return (
                <div key={i} style={{ ...f, width: 140, height: 140, borderRadius: 34, background: i === 0 ? ctx.accent : COLORS.surface, border: `4px solid ${ctx.accent}`, color: i === 0 ? "#fff" : ctx.accent, display: "grid", placeItems: "center", fontSize: 74, fontWeight: 800, boxShadow: "0 16px 30px rgba(23,32,51,.12)" }}>
                  {icons[i] ? <Illus name={icons[i]} size={96} /> : i + 1}
                </div>
              );
            })}
            <div style={{ ...flyIn(frame, fps, lead + n * 7, "right", 120), marginLeft: 20, fontSize: TYPE.h2, fontWeight: 800, color: COLORS.ink2 }}>{data.countLabel || `${n} lý do`}</div>
          </div>
        </div>
      </Stage>
      <Flash o={flash(frame, 0, 8) * 0.85} />
    </AbsoluteFill>
  );
};

// ---------- OPEN-11 Lời hứa + từ khoá: hình bay vào, lời hứa đập xuống, từ khoá bay từ hai bên ----------
const Open11 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = plan(data.keywords, { level: ctx.level, lead: readMs(data.promise) });
  const pr = slam(frame, fps, 2, 1.6);
  const k = shake(frame, 7, 10, 12);
  const kIllus = data.keywordIllus || [];
  return (
    <AbsoluteFill>
      <Stage accent={ctx.accent}>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", transform: sh(k) }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, width: "100%" }}>
            <div style={flyIn(frame, fps, 0, "left", 420)}>
              <HeroIllus name={data.illus || "rocket"} frame={frame} fps={fps} size={250} ring={COLORS.markerSoft} rays={COLORS.marker} raysOpacity={0.4} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ ...fadeUp(frame, 0, 6), fontSize: TYPE.body, color: ctx.accent, fontWeight: 800, marginBottom: 10 }}>{data.kicker || "Trong vài phút tới"}</div>
              <div style={{ opacity: pr.opacity, transform: pr.transform, transformOrigin: "left center" }}>
                <FitText text={data.promise} max={TYPE.hero} target={32} align="left" />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24, marginTop: 40, maxWidth: 1700 }}>
            {data.keywords.map((kw, i) => {
              const at = msToFrames(p.starts[i], fps);
              const f = flyIn(frame, fps, at, i % 2 ? "right" : "left", 300);
              const glow = flash(frame, at + 4, 14);
              return (
                <div key={i} style={{ ...f, display: "flex", alignItems: "center", gap: 16, padding: "14px 34px 14px 16px", borderRadius: 999, background: COLORS.surface, border: `4px solid ${ctx.accent}`, fontSize: TYPE.body, fontWeight: 700,
                  boxShadow: `0 0 0 ${10 * glow}px rgba(255,210,63,${0.8 * glow}), 0 14px 28px rgba(23,32,51,.1)` }}>
                  <Illus name={kIllus[i] || `keycap-${i + 1}`} size={72} />
                  {kw}
                </div>
              );
            })}
          </div>
        </div>
      </Stage>
      <Flash o={flash(frame, 2, 8) * 0.7} />
    </AbsoluteFill>
  );
};

export const OPEN = {
  "OPEN-01": { name: "Câu hỏi thẳng", family: "OPEN", Component: Open01, limits: { question: [4, 20] },
    estimate: (d, c) => readMs(d.question, c) + 800 },
  "OPEN-02": { name: "Hiểu lầm", family: "OPEN", Component: Open02, limits: { myth: [5, 18] },
    estimate: (d, c) => readMs(`Nhiều người nghĩ: ${d.myth}`, c) + 1200 },
  "OPEN-07": { name: "Diễn dịch: kết luận trước", family: "OPEN", Component: Open07, limits: { claim: [4, 16] },
    estimate: (d, c) => readMs(d.claim, c) + 1500 },
  "OPEN-11": { name: "Lời hứa + từ khoá", family: "OPEN", Component: Open11, limits: { promise: [4, 16], keywords: [3, 4] },
    estimate: (d, c) => plan(d.keywords, { level: c.level, lead: readMs(d.promise, c) }).endMs + 600 },
};
