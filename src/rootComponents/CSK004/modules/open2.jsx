// open2.jsx — họ OPEN (mở đầu, đợt 2): OPEN-03 con số gây sốc · 04 chạy đáp án · 05 "Bạn đang…" · 06 trích dẫn ·
// 08 quy nạp 3 ví dụ · 09 SCQA · 10 hiện tại và có thể · 12 hé lộ top N · 13 câu bị che chữ · 14 trước – sau chớp nhoáng ·
// 15 A hay B? · 16 bạn có biết. Mọi module: chữ chính hiện trong ~10 khung đầu, hình minh hoạ màu to, chuyển động mạnh.
import React from "react";
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { Card, FitText, Icon, Illus, IllusBadge, Kicker, Marker, Stage, fitSize } from "../core/ui.jsx";
import { EASE_STD, fadeUp, flash, flyIn, idle, pop, progress, shake, slam, zoom } from "../core/motion.js";
import { msToFrames, readList, readMs } from "../core/timing.js";

// ---------- trợ thủ riêng của tệp ----------

/** Lớp loé sáng phủ toàn khung. */
const Flash = ({ at, dur = 8, color = COLORS.surface, max = 0.8 }) => {
  const frame = useCurrentFrame();
  const o = flash(frame, at, dur) * max;
  return o > 0 ? <AbsoluteFill style={{ background: color, opacity: o, pointerEvents: "none" }} /> : null;
};

/** Rung cả khối nội dung. */
const Shaker = ({ hits = [], children, style }) => {
  const frame = useCurrentFrame();
  let x = 0, y = 0;
  hits.forEach(([at, dur, amp]) => { const s = shake(frame, at, dur, amp); x += s.x; y += s.y; });
  return <div style={{ transform: `translate(${x}px, ${y}px)`, display: "flex", flexDirection: "column", alignItems: "center", ...style }}>{children}</div>;
};

/** Tia sáng xoay chậm phía sau một hình (burst). */
const Rays = ({ size = 600, color = COLORS.marker, n = 14, opacity = 0.22, speed = 0.35, style }) => {
  const frame = useCurrentFrame();
  const r = size / 2;
  const w = (Math.PI / n) * 0.5;
  const tris = Array.from({ length: n }).map((_, i) => {
    const a = (i / n) * Math.PI * 2;
    const p1 = [r + Math.cos(a - w) * r, r + Math.sin(a - w) * r];
    const p2 = [r + Math.cos(a + w) * r, r + Math.sin(a + w) * r];
    return `M ${r} ${r} L ${p1[0]} ${p1[1]} L ${p2[0]} ${p2[1]} Z`;
  });
  return (
    <svg width={size} height={size} style={{ position: "absolute", opacity, transform: `rotate(${frame * speed}deg)`, ...style }}>
      {tris.map((d, i) => <path key={i} d={d} fill={color} />)}
    </svg>
  );
};

/** Chữ hiện từng từ rất nhanh (mỗi từ `step` khung), từ dưới bật lên. */
const WordsIn = ({ text, start = 0, step = 1, fps, highlightFirst = 0, markerAt = 0 }) => {
  const frame = useCurrentFrame();
  const words = String(text).split(/\s+/).filter(Boolean);
  const head = words.slice(0, highlightFirst).join(" ");
  const render = (w, i) => {
    const s = flyIn(frame, fps, start + i * step, "down", 40);
    return <span key={i} style={{ display: "inline-block", ...s, marginRight: "0.26em" }}>{w}</span>;
  };
  if (!highlightFirst) return <>{words.map(render)}</>;
  return (
    <>
      <span style={{ display: "inline-block", marginRight: "0.26em", ...flyIn(frame, fps, start, "down", 40) }}><Marker startF={markerAt} dur={10}>{head}</Marker></span>
      {words.slice(highlightFirst).map((w, i) => render(w, i + 1))}
    </>
  );
};

const LIGHT = COLORS.surface; // chữ trên nền tối
const syl = (t) => String(t || "").trim().split(/\s+/).filter(Boolean).length;

// Số kiểu Việt: "1.300" (chấm ngăn nghìn), "2,5" (phẩy thập phân).
const parseVN = (v) => {
  const s = String(v).trim();
  let t = s;
  if (/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(t)) t = t.replace(/\./g, "");
  t = t.replace(",", ".");
  const n = parseFloat(t);
  return { n, dec: (s.split(",")[1] || "").length, ok: /^[\d.,]+$/.test(s) && !isNaN(n) };
};
const fmtVN = (x, dec) => {
  const [i, d] = x.toFixed(dec).split(".");
  const ii = i.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return d ? `${ii},${d}` : ii;
};

// ---------- OPEN-03 Con số gây sốc ----------
const COUNT_F = 14;
const Open03 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pv = parseVN(data.value);
  const p = progress(frame, 0, COUNT_F, EASE_STD);
  const shown = pv.ok && frame < COUNT_F ? fmtVN(pv.n * p, pv.dec) : String(data.value);
  const hit = slam(frame, fps, COUNT_F, 1.35);
  const z = zoom(frame, 0, 16, 1.7, 1);
  return (
    <>
      <Stage accent={ctx.accent} bg={COLORS.ink}>
        <Shaker hits={[[COUNT_F, 12, 18]]} style={{ flexDirection: "row", gap: 70 }}>
          <div style={{ position: "relative", width: 460, height: 460, display: "grid", placeItems: "center", flex: "none" }}>
            <Rays size={540} color={ctx.accent} opacity={0.55} />
            <div style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", background: COLORS.ink2 }} />
            <div style={{ transform: `scale(${z}) translateY(${idle(frame, 8, 80)}px)` }}><Illus name={data.illus || "chart-increasing"} size={300} /></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", maxWidth: 1180 }}>
            <div style={{ ...fadeUp(frame, 2, 8), fontSize: fitSize(data.context, TYPE.h2, TYPE.small, 30), fontWeight: 700, color: LIGHT, lineHeight: 1.2, textWrap: "balance" }}>{data.context}</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 24, marginTop: 10, opacity: Math.min(1, frame / 2 + 0.3) }}>
              {data.prefix && <span style={{ fontSize: TYPE.h2, fontWeight: 700, color: LIGHT }}>{data.prefix}</span>}
              <span style={{ display: "inline-block", fontSize: 250, fontWeight: 900, color: COLORS.marker, lineHeight: 1, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums",
                transform: frame >= COUNT_F ? hit.transform : "none", transformOrigin: "left bottom" }}>{shown}</span>
              <span style={{ fontSize: TYPE.h1, fontWeight: 800, color: LIGHT }}>{data.unit}</span>
            </div>
            <div style={{ ...fadeUp(frame, COUNT_F + 4, 10), marginTop: 34, display: "flex", alignItems: "flex-start", gap: 14, fontSize: 40, color: COLORS.line, fontWeight: 500, lineHeight: 1.3 }}>
              <span style={{ marginTop: 6, flex: "none" }}><Icon name="info" size={40} color={COLORS.line} /></span> {data.source}
            </div>
          </div>
        </Shaker>
      </Stage>
      <Flash at={COUNT_F} dur={9} color={COLORS.marker} max={0.55} />
    </>
  );
};

// ---------- OPEN-04 Chạy đáp án ----------
const SPIN0 = 12;
const TICKS = [3, 3, 3, 3, 4, 4, 5, 6, 7, 9, 12];
const SPIN_END = SPIN0 + TICKS.reduce((a, b) => a + b, 0);
const QMARK = SPIN_END + 6;
const Open04 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opts = data.options.slice(0, 3);
  let k = -1, t = SPIN0;
  TICKS.forEach((d, i) => { if (frame >= t) k = i; t += d; });
  const lit = frame >= SPIN0 && frame < SPIN_END ? k % opts.length : -1;
  const q = slam(frame, fps, QMARK, 3);
  return (
    <>
      <Stage accent={ctx.accent} bg={COLORS.ink}>
        <Shaker hits={[[QMARK, 12, 16]]} style={{ width: "100%" }}>
          <div style={{ ...pop(frame, fps, 0), display: "flex", alignItems: "center", gap: 18 }}>
            <Illus name={data.illus || "thinking-face"} size={84} />
            <Kicker accent={ctx.accent}>{data.kicker || "Thử đoán xem"}</Kicker>
          </div>
          <div style={{ ...fadeUp(frame, 0, 6), marginTop: 22, maxWidth: 1600 }}>
            <FitText text={data.question} max={TYPE.h1} min={TYPE.body} target={34} color={LIGHT} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 40, marginTop: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 22, width: 1340 }}>
            {opts.map((o, i) => {
              const on = lit === i;
              return (
                <div key={i} style={{ ...flyIn(frame, fps, 3 + i * 2, i % 2 ? "right" : "left", 220) }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 28, padding: "20px 34px", borderRadius: 26,
                    background: on ? ctx.accent : COLORS.ink2, border: `4px solid ${on ? COLORS.marker : COLORS.ink2}`,
                    transform: `scale(${on ? 1.035 : 1})`, boxShadow: on ? `0 0 60px ${ctx.accent}` : "none" }}>
                    <span style={{ width: 76, height: 76, flex: "none", borderRadius: "50%", background: on ? COLORS.marker : COLORS.muted, color: COLORS.ink, display: "grid", placeItems: "center", fontSize: 44, fontWeight: 800 }}>{"ABC"[i]}</span>
                    <span style={{ fontSize: fitSize(o, TYPE.body, TYPE.small, 40), fontWeight: 700, color: LIGHT, lineHeight: 1.2 }}>{o}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ width: 260, height: 260, flex: "none" }}>
            {frame >= QMARK && (
              <div style={{ opacity: q.opacity, transform: `${q.transform} rotate(10deg)` }}>
                <div style={{ width: 260, height: 260, borderRadius: "50%", background: COLORS.marker, display: "grid", placeItems: "center", boxShadow: "0 20px 60px rgba(0,0,0,.4)" }}>
                  <Illus name="red-question-mark" size={190} />
                </div>
              </div>
            )}
          </div>
          </div>
        </Shaker>
      </Stage>
      <Flash at={QMARK} dur={8} max={0.6} />
    </>
  );
};

// ---------- OPEN-05 Tình huống "Bạn đang…" ----------
const Open05 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const z = zoom(frame, 0, 20, 1.6, 1);
  const around = (data.around || ["sparkles", "thought-balloon", "alarm-clock"]).slice(0, 3);
  const pos = [[-210, -190], [220, -170], [200, 210]];
  const hl = /^bạn\s+đang/i.test(data.scene) ? 2 : 0;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ display: "flex", alignItems: "center", gap: 70, width: "100%" }}>
        <div style={{ position: "relative", width: 640, height: 640, display: "grid", placeItems: "center", flex: "none" }}>
          <div style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", background: COLORS.pineSoft, transform: `scale(${zoom(frame, 0, 14, 0.4, 1)})` }} />
          <div style={{ transform: `scale(${z}) translateY(${idle(frame, 8, 110)}px)` }}><Illus name={data.illus || "house"} size={380} /></div>
          {around.map((n, i) => (
            <div key={n + i} style={{ position: "absolute", left: "50%", top: "50%", ...pop(frame, fps, 6 + i * 3) }}>
              <div style={{ transform: `translate(${pos[i][0] - 75}px, ${pos[i][1] - 75 + idle(frame + i * 20, 10, 90)}px)` }}>
                <IllusBadge name={n} size={150} bg={COLORS.surface} style={{ boxShadow: "0 14px 30px rgba(23,32,51,.12)" }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", flex: 1 }}>
          <div style={flyIn(frame, fps, 0, "left", 120)}>
            <Kicker accent={COLORS.coral}><Icon name="film" size={38} color={COLORS.surface} /> {data.label || "Tình huống minh hoạ"}</Kicker>
          </div>
          <div style={{ marginTop: 30, fontSize: fitSize(data.scene, TYPE.h1, TYPE.body, 46), fontWeight: 800, lineHeight: 1.22, color: COLORS.ink }}>
            <WordsIn text={data.scene} start={1} step={1} fps={fps} highlightFirst={hl} markerAt={8} />
          </div>
        </div>
      </div>
    </Stage>
  );
};

// ---------- OPEN-06 Trích dẫn ----------
const Open06 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const g = slam(frame, fps, 0, 3.2);
  const q = String(data.quote);
  const h = data.highlight && q.includes(data.highlight) ? data.highlight : null;
  const hlAt = msToFrames(readMs(q) * 0.5, fps);
  const body = h ? <>“{q.split(h)[0]}<Marker startF={hlAt} dur={12}>{h}</Marker>{q.split(h).slice(1).join(h)}”</> : `“${q}”`;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ position: "relative", width: 1560 }}>
        <div style={{ position: "absolute", left: -30, top: -96, fontSize: 340, lineHeight: 1, fontWeight: 900, color: ctx.accent, opacity: g.opacity, transform: g.transform, transformOrigin: "left top", fontFamily: "Georgia, serif" }}>“</div>
        <Card style={{ ...fadeUp(frame, 2, 8), padding: "64px 80px 48px", borderRadius: 40, borderLeft: `16px solid ${ctx.accent}` }}>
          {data.label && <div style={{ fontSize: TYPE.small, fontWeight: 700, color: ctx.accent, marginBottom: 14 }}>{data.label}</div>}
          <div style={{ fontSize: fitSize(q, TYPE.h1, TYPE.body, 44), fontWeight: 800, lineHeight: 1.25, color: COLORS.ink, textWrap: "balance" }}>{body}</div>
          <div style={{ ...fadeUp(frame, 10, 10), display: "flex", alignItems: "center", gap: 28, marginTop: 40, paddingTop: 30, borderTop: `3px solid ${COLORS.line}` }}>
            <IllusBadge name={data.illus || "classical-building"} size={130} />
            <div>
              <div style={{ fontSize: TYPE.body, fontWeight: 800, color: COLORS.ink }}>— {data.who}</div>
              <div style={{ fontSize: 40, fontWeight: 500, color: COLORS.muted, marginTop: 6 }}>{data.source}</div>
            </div>
          </div>
        </Card>
      </div>
    </Stage>
  );
};

// ---------- OPEN-08 Quy nạp: 3 ví dụ nhanh ----------
const CARD_GAP_F = 30; // mỗi thẻ 1 giây
const ex = (e) => (typeof e === "string" ? { text: e } : e);
const Open08 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const items = data.examples.slice(0, 3).map(ex);
  const promptAt = items.length * CARD_GAP_F;
  const p = slam(frame, fps, promptAt, 2.2);
  const defaults = ["eyes", "magnifying-glass-tilted-left", "pushpin"];
  return (
    <>
      <Stage accent={ctx.accent}>
        <Shaker hits={[[promptAt, 12, 14], ...items.map((_, i) => [i * CARD_GAP_F, 6, 6])]} style={{ width: "100%" }}>
          <div style={{ display: "flex", gap: 40, justifyContent: "center" }}>
            {items.map((it, i) => {
              const s = slam(frame, fps, i * CARD_GAP_F, 1.8);
              const past = frame >= promptAt;
              return (
                <div key={i} style={{ ...s, transform: `${s.transform} rotate(${[-3, 2, -2][i]}deg)` }}>
                  <Card style={{ width: 500, height: 440, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 26, padding: "30px 36px",
                    border: `4px solid ${past ? ctx.accent : COLORS.line}` }}>
                    <div style={{ position: "relative" }}>
                      <IllusBadge name={it.illus || defaults[i]} size={210} />
                      <span style={{ position: "absolute", left: -10, top: -10, width: 64, height: 64, borderRadius: "50%", background: ctx.accent, color: COLORS.surface, display: "grid", placeItems: "center", fontSize: 36, fontWeight: 800 }}>{i + 1}</span>
                    </div>
                    <div style={{ fontSize: fitSize(it.text, TYPE.body, TYPE.small, 18), fontWeight: 800, textAlign: "center", lineHeight: 1.2, textWrap: "balance" }}>{it.text}</div>
                  </Card>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 50, opacity: p.opacity, transform: p.transform, display: "flex", alignItems: "center", gap: 24 }}>
            <Illus name="thinking-face" size={110} />
            <div style={{ fontSize: fitSize(data.prompt, TYPE.h1, TYPE.body, 26), fontWeight: 900, color: COLORS.ink }}>
              <Marker startF={promptAt + 4} dur={10}>{data.prompt}</Marker>
            </div>
          </div>
        </Shaker>
      </Stage>
      <Flash at={promptAt} dur={8} color={COLORS.marker} max={0.45} />
    </>
  );
};

// ---------- OPEN-09 Bối cảnh – Vướng mắc – Câu hỏi ----------
const scqaStarts = (d, fps) => {
  const a = 0;
  const b = a + msToFrames(readMs(d.situation), fps);
  const c = b + msToFrames(readMs(d.complication, { fresh: false }), fps);
  return [a, b, c];
};
const Open09 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const st = scqaStarts(data, fps);
  const ill = data.illus || ["round-pushpin", "warning", "red-question-mark"];
  const rows = [
    { label: "Bối cảnh", text: data.situation, chip: COLORS.muted, color: LIGHT },
    { label: "Vướng mắc", text: data.complication, chip: COLORS.coral, color: LIGHT },
    { label: "Câu hỏi", text: data.question, chip: COLORS.marker, color: COLORS.marker },
  ];
  return (
    <>
      <Stage accent={ctx.accent} bg={COLORS.ink} align="left">
        <Shaker hits={[[st[1], 12, 16], [st[2], 10, 12]]} style={{ alignItems: "flex-start", gap: 34, width: "100%" }}>
          {rows.map((r, i) => {
            const m = i === 2 ? slam(frame, fps, st[i], 1.8) : flyIn(frame, fps, st[i], i === 1 ? "right" : "left", 260);
            const done = frame >= st[i];
            return (
              <div key={i} style={{ ...m, transformOrigin: "left center", marginLeft: i * 110, display: "flex", alignItems: "center", gap: 34, opacity: done ? (frame >= st[2] && i < 2 ? 0.72 : 1) * m.opacity : 0 }}>
                <div style={{ position: "relative", width: 160, height: 160, flex: "none", display: "grid", placeItems: "center" }}>
                  <div style={{ position: "absolute", inset: 0, borderRadius: 40, background: COLORS.ink2, border: `4px solid ${r.chip}` }} />
                  <Illus name={ill[i]} size={112} style={{ position: "relative" }} />
                </div>
                <div style={{ maxWidth: 1450 - i * 110 }}>
                  <div style={{ display: "inline-block", padding: "4px 18px", borderRadius: 999, background: r.chip, color: i === 2 ? COLORS.ink : COLORS.surface, fontSize: 40, fontWeight: 800 }}>{r.label}</div>
                  <div style={{ marginTop: 8, fontSize: fitSize(r.text, TYPE.h2, TYPE.body, 34), fontWeight: i === 2 ? 900 : 700, color: r.color, lineHeight: 1.18 }}>{r.text}</div>
                </div>
              </div>
            );
          })}
        </Shaker>
      </Stage>
      <Flash at={st[2]} dur={8} color={COLORS.marker} max={0.4} />
    </>
  );
};

// ---------- OPEN-10 Hiện tại và có thể ----------
const Open10 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const at = Math.max(14, msToFrames(readMs(data.whatIs), fps));
  const wipe = progress(frame, at, 12, EASE_STD);
  const panel = (tone, chipBg, label, illus, text, extra) => (
    <div style={{ width: 800, height: 660, borderRadius: 40, background: tone, padding: "40px 46px", display: "flex", flexDirection: "column", alignItems: "center", ...extra }}>
      <div style={{ alignSelf: "flex-start", padding: "10px 28px", borderRadius: 999, background: chipBg, color: COLORS.surface, fontSize: TYPE.small, fontWeight: 800 }}>{label}</div>
      <div style={{ flex: 1, display: "grid", placeItems: "center" }}><Illus name={illus} size={270} /></div>
      <div style={{ fontSize: fitSize(text, TYPE.h2, TYPE.body, 26), fontWeight: 800, textAlign: "center", lineHeight: 1.2, textWrap: "balance", minHeight: 150 }}>{text}</div>
    </div>
  );
  const b = pop(frame, fps, at + 6);
  return (
    <>
      <Stage accent={ctx.accent}>
        <div style={{ position: "relative", display: "flex", gap: 72 }}>
          <div style={{ ...flyIn(frame, fps, 0, "left", 300), opacity: (frame >= at + 10 ? 0.8 : 1) }}>
            <Shaker hits={[[2, 10, 10]]}>{panel(COLORS.coralSoft, COLORS.coral, data.labels?.[0] || "Bây giờ", data.illus?.[0] || "downcast-face-with-sweat", data.whatIs, { border: `4px solid ${COLORS.coral}` })}</Shaker>
          </div>
          <div style={{ clipPath: `inset(0 ${(1 - wipe) * 100}% 0 0)`, transform: `scale(${1 + (1 - wipe) * 0.06})` }}>
            {panel(COLORS.pineSoft, ctx.accent, data.labels?.[1] || "Có thể", data.illus?.[1] || "smiling-face-with-sunglasses", data.couldBe, { border: `4px solid ${ctx.accent}`, boxShadow: `0 24px 60px rgba(23,32,51,.14)` })}
          </div>
          <div style={{ position: "absolute", left: "50%", top: "50%", marginLeft: -66, marginTop: -66, ...b }}>
            <div style={{ width: 132, height: 132, borderRadius: "50%", background: COLORS.marker, display: "grid", placeItems: "center", boxShadow: "0 12px 30px rgba(23,32,51,.2)" }}>
              <Icon name="arrow-right" size={76} color={COLORS.ink} stroke={3} />
            </div>
          </div>
        </div>
      </Stage>
      <Flash at={at} dur={7} max={0.5} />
    </>
  );
};

// ---------- OPEN-12 Hé lộ top N ----------
const Open12 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const n = Math.max(2, Math.min(7, data.n || 3));
  const N = slam(frame, fps, 0, 3);
  const w = Math.min(300, Math.floor((1700 - (n - 1) * 30) / n));
  const cardsAt = 10;
  return (
    <>
      <Stage accent={ctx.accent} bg={COLORS.ink}>
        <Shaker hits={[[3, 12, 20]]}>
          <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
            <div style={{ position: "relative", width: 340, height: 340, display: "grid", placeItems: "center", flex: "none" }}>
              <Rays size={480} color={ctx.accent} opacity={0.6} speed={0.6} />
              <div style={{ fontSize: 330, fontWeight: 900, color: COLORS.marker, lineHeight: 1, ...N }}>{n}</div>
            </div>
            <div style={{ maxWidth: 1180, ...flyIn(frame, fps, 2, "right", 200) }}>
              <div style={{ fontSize: TYPE.body, fontWeight: 700, color: COLORS.line }}>{data.kicker || `Có đúng ${n}`}</div>
              <div style={{ fontSize: fitSize(data.topic, TYPE.h1, TYPE.body, 28), fontWeight: 900, color: LIGHT, lineHeight: 1.15, textWrap: "balance" }}>{data.topic}</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 30, marginTop: 50 }}>
            {Array.from({ length: n }).map((_, i) => {
              const f0 = cardsAt + i * 4;
              const flip = progress(frame, f0, 8, EASE_STD);
              return (
                <div key={i} style={{ opacity: frame < f0 ? 0 : 1, transform: `translateY(${idle(frame + i * 17, 6, 70)}px) scaleX(${flip}) rotate(${(i % 2 ? 1 : -1) * 2}deg)` }}>
                  <div style={{ position: "relative", width: w, height: 290, borderRadius: 28, background: ctx.accent, border: `5px solid ${COLORS.surface}`, display: "grid", placeItems: "center", overflow: "hidden",
                    backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,.10) 0 18px, transparent 18px 36px)` }}>
                    <span style={{ position: "absolute", left: 18, top: 12, fontSize: 44, fontWeight: 900, color: COLORS.surface }}>{i + 1}</span>
                    <Illus name="locked" size={Math.min(140, w * 0.55)} />
                  </div>
                </div>
              );
            })}
          </div>
        </Shaker>
      </Stage>
      <Flash at={0} dur={8} color={COLORS.marker} max={0.5} />
    </>
  );
};

// ---------- OPEN-13 Câu bị che chữ ----------
const Open13 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = String(data.sentence);
  const hw = String(data.hiddenWord || "");
  const idx = hw ? s.toLowerCase().indexOf(hw.toLowerCase()) : -1;
  const pre = idx >= 0 ? s.slice(0, idx) : s + " ";
  const post = idx >= 0 ? s.slice(idx + hw.length) : "";
  const fs = fitSize(s, TYPE.h1, TYPE.body, 40);
  const blockAt = 4;
  const b = slam(frame, fps, blockAt, 1.8);
  const shine = ((frame * 3) % 140) - 20;
  const block = (
    <span style={{ position: "relative", display: "inline-block", verticalAlign: "-0.12em", width: `${Math.max(3, hw.length) * 0.6}em`, height: "1em", margin: "0 0.08em",
      borderRadius: 12, background: `linear-gradient(110deg, ${COLORS.ink} ${shine - 12}%, ${COLORS.ink2} ${shine}%, ${COLORS.ink} ${shine + 12}%)`, opacity: b.opacity, transform: b.transform }}>
      <span style={{ position: "absolute", left: `${50 + idle(frame, 30, 50)}%`, top: "50%", width: "1.3em", height: "1.3em", marginLeft: "-0.65em", marginTop: "-0.6em",
        transform: `rotate(${idle(frame, 10, 70)}deg)` }}>
        <Illus name="magnifying-glass-tilted-left" size={Math.round(fs * 1.3)} />
      </span>
    </span>
  );
  return (
    <>
      <Stage accent={ctx.accent}>
        <Shaker hits={[[blockAt + 2, 10, 12]]}>
          <div style={{ ...pop(frame, fps, 0), display: "flex", alignItems: "center", gap: 18 }}>
            <Illus name="detective" size={96} />
            <Kicker accent={ctx.accent}>{data.kicker || "Từ nào bị che?"}</Kicker>
          </div>
          <Card style={{ ...fadeUp(frame, 0, 6), marginTop: 110, maxWidth: 1600, padding: "54px 70px", borderRadius: 40 }}>
            <div style={{ fontSize: fs, fontWeight: 800, lineHeight: 1.6, textAlign: "center", textWrap: "balance", color: COLORS.ink }}>
              {pre}{block}{post}
            </div>
          </Card>
          {data.vi && <div style={{ ...fadeUp(frame, 12, 10), marginTop: 28, fontSize: TYPE.small, color: COLORS.muted, fontWeight: 600, textAlign: "center", maxWidth: 1500 }}>{data.vi}</div>}
          <div style={{ ...fadeUp(frame, 16, 10), marginTop: 26, display: "flex", alignItems: "center", gap: 14, fontSize: 40, fontWeight: 700, color: COLORS.coral }}>
            <Icon name="eye-off" size={42} color={COLORS.coral} /> {data.revealNote || "Đáp án ở cuối video"}
          </div>
        </Shaker>
      </Stage>
      <Flash at={blockAt} dur={6} color={COLORS.ink} max={0.25} />
    </>
  );
};

// ---------- OPEN-14 Trước – sau chớp nhoáng ----------
const FLICK = 24; // 0,8 giây mỗi bản
// Cảnh mở đầu video được tua trước 18 khung (ScriptVideo), nên bản "trước" giữ thêm 18 khung để vẫn thấy đủ 0,8 giây.
const T1 = 18 + FLICK, T2 = T1 + FLICK;
const Open14 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const lang = data.lang === "en";
  const phase = frame < T1 ? 0 : frame < T2 ? 1 : 2;
  const big = (bad, text, f0) => {
    const z = zoom(frame, f0, 6, 1.18, 1);
    return (
      <div style={{ width: 1560, borderRadius: 44, padding: "50px 64px", background: bad ? COLORS.coralSoft : COLORS.pineSoft, border: `6px solid ${bad ? COLORS.coral : ctx.accent}`, transform: `scale(${z})`, display: "flex", alignItems: "center", gap: 50 }}>
        <Illus name={bad ? "cross-mark" : "check-mark-button"} size={220} />
        <div>
          <div style={{ display: "inline-block", padding: "8px 26px", borderRadius: 999, background: bad ? COLORS.coral : ctx.accent, color: COLORS.surface, fontSize: TYPE.small, fontWeight: 800 }}>{bad ? data.labels?.[0] || "Trước" : data.labels?.[1] || "Sau"}</div>
          <div style={{ marginTop: 16, fontSize: fitSize(text, TYPE.h1, TYPE.body, 36), fontWeight: 800, lineHeight: 1.2, color: COLORS.ink, fontStyle: lang ? "italic" : "normal" }}>“{text}”</div>
        </div>
      </div>
    );
  };
  const row = (bad, text, f0) => (
    <div style={{ ...flyIn(frame, fps, f0, bad ? "up" : "down", 80), width: 1600, borderRadius: 36, padding: bad ? "24px 44px" : "34px 50px",
      background: bad ? COLORS.coralSoft : COLORS.surface, border: `5px solid ${bad ? COLORS.coral : ctx.accent}`, display: "flex", alignItems: "center", gap: 36,
      boxShadow: bad ? "none" : "0 20px 50px rgba(23,32,51,.12)", opacity: bad ? 0.9 : 1 }}>
      <Illus name={bad ? "cross-mark" : "check-mark-button"} size={bad ? 110 : 150} />
      <div>
        <div style={{ fontSize: 40, fontWeight: 800, color: bad ? COLORS.coral : ctx.accent }}>{bad ? data.labels?.[0] || "Trước" : data.labels?.[1] || "Sau"}</div>
        <div style={{ fontSize: fitSize(text, bad ? TYPE.h2 : TYPE.h1, TYPE.body, 40), fontWeight: bad ? 600 : 800, lineHeight: 1.2, color: bad ? COLORS.ink2 : COLORS.ink, fontStyle: lang ? "italic" : "normal",
          textDecoration: bad ? `line-through ${COLORS.coral}` : "none", textDecorationThickness: 5 }}>
          “{bad ? text : <Marker startF={T2 + 8} dur={12}>{text}</Marker>}”
        </div>
      </div>
    </div>
  );
  return (
    <>
      <Stage accent={ctx.accent}>
        <Shaker hits={[[0, 8, 12], [T1, 8, 10]]}>
          {data.context && <div style={{ ...fadeUp(frame, 0, 6), fontSize: TYPE.small, fontWeight: 700, color: COLORS.muted, marginBottom: 30, textAlign: "center", maxWidth: 1500 }}>{data.context}</div>}
          {phase === 0 && big(true, data.before, 0)}
          {phase === 1 && big(false, data.after, T1)}
          {phase === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 28, alignItems: "center" }}>
              {row(true, data.before, T2)}
              {row(false, data.after, T2 + 3)}
            </div>
          )}
        </Shaker>
      </Stage>
      <Flash at={T1} dur={6} max={0.9} />
      <Flash at={T2} dur={6} max={0.7} />
    </>
  );
};

// ---------- OPEN-15 A hay B? ----------
const BTN_X = 400; // tâm nút cách giữa
const PATH = [[8, 0, 300], [20, -BTN_X, 30], [34, -40, 10], [46, BTN_X, 40], [60, -BTN_X + 40, 20], [72, BTN_X - 30, 30], [86, 0, 60]]; // [khung, x, y]
const pointerAt = (f) => {
  if (f <= PATH[0][0]) return [PATH[0][1], PATH[0][2] + (PATH[0][0] - f) * 30];
  for (let i = 1; i < PATH.length; i++) {
    const [f1, x1, y1] = PATH[i];
    const [f0, x0, y0] = PATH[i - 1];
    if (f <= f1) { const p = EASE_STD((f - f0) / (f1 - f0)); return [x0 + (x1 - x0) * p, y0 + (y1 - y0) * p]; }
  }
  const last = PATH[PATH.length - 1];
  return [last[1] + idle(f, 60, 50), last[2] + idle(f, 8, 37)];
};
const Open15 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const [px, py] = pointerAt(frame);
  const hover = Math.abs(px + BTN_X) < 230 ? 0 : Math.abs(px - BTN_X) < 230 ? 1 : -1;
  const opts = [
    { k: "A", text: data.a, illus: data.illus?.[0] || "thinking-face" },
    { k: "B", text: data.b, illus: data.illus?.[1] || "light-bulb" },
  ];
  const v = pop(frame, fps, 6);
  return (
    <Stage accent={ctx.accent}>
      <div style={{ ...fadeUp(frame, 0, 6), maxWidth: 1600, marginBottom: 50 }}>
        <FitText text={data.question} max={TYPE.h1} min={TYPE.body} target={30} />
      </div>
      <div style={{ position: "relative", display: "flex", gap: 120 }}>
        {opts.map((o, i) => {
          const on = hover === i;
          return (
            <div key={i} style={flyIn(frame, fps, 2 + i * 2, i ? "right" : "left", 260)}>
              <div style={{ width: 680, height: 420, borderRadius: 44, background: on ? COLORS.pineSoft : COLORS.surface, border: `6px solid ${on ? ctx.accent : COLORS.line}`,
                transform: `scale(${on ? 1.04 : 1})`, boxShadow: on ? "0 26px 60px rgba(23,32,51,.18)" : "0 14px 30px rgba(23,32,51,.08)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, padding: "24px 40px", position: "relative" }}>
                <span style={{ position: "absolute", left: 24, top: 20, width: 80, height: 80, borderRadius: 24, background: on ? ctx.accent : COLORS.ink, color: COLORS.surface, display: "grid", placeItems: "center", fontSize: 50, fontWeight: 900 }}>{o.k}</span>
                <Illus name={o.illus} size={190} />
                <div style={{ fontSize: fitSize(o.text, TYPE.h2, TYPE.body, 20), fontWeight: 800, textAlign: "center", lineHeight: 1.18, textWrap: "balance" }}>{o.text}</div>
              </div>
            </div>
          );
        })}
        <div style={{ position: "absolute", left: "50%", top: "50%", marginLeft: -70, marginTop: -70, ...v }}>
          <div style={{ width: 140, height: 140, borderRadius: "50%", background: COLORS.marker, border: `6px solid ${COLORS.surface}`, display: "grid", placeItems: "center", fontSize: 46, fontWeight: 900, color: COLORS.ink }}>hay</div>
        </div>
        <svg width={90} height={120} viewBox="0 0 64 96" style={{ position: "absolute", left: "50%", top: "50%", transform: `translate(${px - 10}px, ${py + 40}px)`, filter: "drop-shadow(0 8px 10px rgba(23,32,51,.3))" }}>
          <path d="M4 4 L4 74 L22 58 L34 88 L48 82 L36 52 L60 52 Z" fill={COLORS.ink} stroke={COLORS.surface} strokeWidth={4} strokeLinejoin="round" />
        </svg>
      </div>
    </Stage>
  );
};

// ---------- OPEN-16 Bạn có biết ----------
const Open16 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const st = slam(frame, fps, 0, 3);
  const z = zoom(frame, 0, 18, 0.3, 1);
  const glow = 0.5 + 0.2 * Math.sin(frame / 6);
  return (
    <>
      <Stage accent={ctx.accent} bg={COLORS.ink}>
        <Shaker hits={[[4, 12, 18]]} style={{ flexDirection: "row", gap: 60 }}>
          <div style={{ position: "relative", width: 480, height: 480, display: "grid", placeItems: "center", flex: "none" }}>
            <Rays size={560} color={COLORS.marker} opacity={0.3} speed={0.5} />
            <div style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", background: `radial-gradient(circle, ${COLORS.marker} 0%, transparent 70%)`, opacity: glow }} />
            <div style={{ transform: `scale(${z}) rotate(${idle(frame, 4, 80)}deg)` }}><Illus name={data.illus || "light-bulb"} size={320} /></div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", maxWidth: 1160 }}>
            <div style={{ opacity: st.opacity, transform: `${st.transform} rotate(-5deg)`, transformOrigin: "left center", padding: "12px 34px", border: `8px solid ${COLORS.marker}`, borderRadius: 20, color: COLORS.marker, fontSize: 76, fontWeight: 900, letterSpacing: "0.02em", textTransform: "uppercase" }}>
              {data.label || "Bạn có biết?"}
            </div>
            <div style={{ ...fadeUp(frame, 5, 8), marginTop: 44, fontSize: fitSize(data.fact, TYPE.h1, TYPE.body, 40), fontWeight: 800, color: LIGHT, lineHeight: 1.22, textWrap: "balance" }}>{data.fact}</div>
            <div style={{ ...fadeUp(frame, 14, 10), marginTop: 30, display: "flex", alignItems: "flex-start", gap: 14, fontSize: 40, color: COLORS.line, fontWeight: 500, lineHeight: 1.3 }}>
              <span style={{ marginTop: 6, flex: "none" }}><Icon name="info" size={40} color={COLORS.line} /></span> {data.source}
            </div>
          </div>
        </Shaker>
      </Stage>
      <Flash at={0} dur={8} color={COLORS.marker} max={0.6} />
    </>
  );
};

// ---------- danh mục ----------
const f2ms = (f) => (f / 30) * 1000;
const en = (c) => ({ level: c?.level, lang: "en" });

export const OPEN2 = {
  "OPEN-03": { name: "Con số gây sốc", family: "OPEN", Component: Open03, limits: { context: [3, 12] },
    estimate: (d, c) => f2ms(COUNT_F) + readMs(`${d.context} ${d.prefix || ""} ${d.value} ${d.unit}`, c) + readMs(d.source, { ...c, fresh: false }) * 0.5 },
  "OPEN-04": { name: "Chạy đáp án", family: "OPEN", Component: Open04, limits: { options: [3, 3], optionWords: [1, 10] },
    estimate: (d, c) => Math.max(f2ms(QMARK) + 900, readMs(d.question, en(c)) + readList(d.options, en(c)) - 400) + 300 },
  "OPEN-05": { name: "Tình huống \"Bạn đang…\"", family: "OPEN", Component: Open05, limits: { scene: [8, 18] },
    estimate: (d, c) => 400 + readMs(`${d.label || "Tình huống minh hoạ"} ${d.scene}`, c) },
  "OPEN-06": { name: "Trích dẫn", family: "OPEN", Component: Open06, limits: { quote: [4, 24] },
    estimate: (d, c) => 300 + readMs(d.quote, c) + readMs(`${d.who} ${d.source}`, { ...c, fresh: false }) * 0.6 },
  "OPEN-08": { name: "Quy nạp: 3 ví dụ nhanh", family: "OPEN", Component: Open08, limits: { examples: [3, 3], exampleSyllables: [2, 8] },
    estimate: (d, c) => Math.max(f2ms(d.examples.length * CARD_GAP_F) + readMs(d.prompt, c),
      readList([...d.examples.map((e) => ex(e).text), d.prompt], c)) + 300 },
  "OPEN-09": { name: "Bối cảnh – Vướng mắc – Câu hỏi", family: "OPEN", Component: Open09, limits: { situation: [3, 12], complication: [3, 12], question: [3, 12] },
    estimate: (d, c) => readList([d.situation, d.complication, d.question], c) + 500 },
  "OPEN-10": { name: "Hiện tại và có thể", family: "OPEN", Component: Open10, limits: { whatIs: [3, 10], couldBe: [3, 10] },
    estimate: (d, c) => Math.max(f2ms(14), readMs(d.whatIs, c)) + 400 + readMs(d.couldBe, { ...c, fresh: false }) + 300 },
  "OPEN-12": { name: "Hé lộ top N", family: "OPEN", Component: Open12, limits: { n: [3, 5], topic: [3, 12] },
    estimate: (d, c) => Math.max(f2ms(10 + (d.n || 3) * 4 + 8), readMs(`${d.kicker || "Có đúng điều"} ${d.topic}`, c)) + 600 },
  "OPEN-13": { name: "Câu bị che chữ", family: "OPEN", Component: Open13, limits: { sentenceWords: [4, 16] },
    estimate: (d, c) => readMs(d.sentence, en(c)) + readMs(`Từ nào bị che? ${d.vi || ""} Đáp án ở cuối video`, { ...c, fresh: false }) * 0.45 + 400 },
  "OPEN-14": { name: "Trước – sau chớp nhoáng", family: "OPEN", Component: Open14, limits: { before: [3, 12], after: [3, 12] },
    estimate: (d, c) => {
      const o = d.lang === "en" ? en(c) : c;
      return f2ms(T2) + readMs(d.before, { ...o, fresh: false }) + readMs(d.after, { ...o, fresh: false }) + (d.context ? readMs(d.context, { ...c, fresh: false }) * 0.5 : 0) + 300;
    } },
  "OPEN-15": { name: "A hay B?", family: "OPEN", Component: Open15, limits: { a: [2, 8], b: [2, 8], question: [3, 14] },
    estimate: (d, c) => Math.max(f2ms(PATH[PATH.length - 1][0]) + 300, readList([d.question, d.a, d.b], c)) + 400 },
  "OPEN-16": { name: "Bạn có biết", family: "OPEN", Component: Open16, limits: { fact: [4, 16] },
    estimate: (d, c) => 400 + readMs(`Bạn có biết ${d.fact}`, c) + readMs(d.source, { ...c, fresh: false }) * 0.5 },
};
