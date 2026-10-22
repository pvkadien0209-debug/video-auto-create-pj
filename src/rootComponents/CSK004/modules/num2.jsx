// num2.jsx — họ NUM (con số), đợt 2: NUM-02 thanh ngang · NUM-04 mảng biểu tượng 10×10 · NUM-05 vòng tỉ lệ
//   · NUM-06 dòng thời gian · NUM-09 bong bóng độ lớn · NUM-11 phép tính từng bước · NUM-12 ngân sách thời gian
// Quy tắc họ NUM: luôn có dòng `source`. Số chạy 0,7–1,5 giây, easing out, rồi giữ ≥ 1 giây.
import React from "react";
import { interpolate, Easing, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { Card, FitText, Icon, Illus, IllusBadge, Kicker, Marker, Stage } from "../core/ui.jsx";
import { EASE_STD, fadeUp, flash, idle, pop, progress, slam } from "../core/motion.js";
import { msToFrames, plan, readMs } from "../core/timing.js";

// ---------- phần dùng chung trong tệp ----------
const W = 1728;
const useFF = () => ({ frame: useCurrentFrame(), fps: useVideoConfig().fps });
const clampX = { extrapolateLeft: "clamp", extrapolateRight: "clamp" };
const decOf = (v) => (String(v).includes(".") ? String(v).split(".")[1].length : 0);
const fmt = (v, dec = 0) => Number(v).toLocaleString("vi-VN", { minimumFractionDigits: dec, maximumFractionDigits: dec });
const countTo = (frame, start, dur, v) => interpolate(frame, [start, start + dur], [0, Number(v)], { ...clampX, easing: Easing.out(Easing.cubic) });
const RUN = 1.2; // giây số chạy

/** Dòng nguồn (bắt buộc ở họ NUM). */
const Source = ({ text, frame, at, style }) => (
  <div style={{ ...fadeUp(frame, at, 10), display: "flex", alignItems: "center", gap: 12, fontSize: 40, color: COLORS.muted, fontWeight: 600, ...style }}>
    <Icon name="book-open" size={38} color={COLORS.muted} /> Nguồn: {text || "(chưa ghi nguồn)"}
  </div>
);

const Title = ({ text, frame, fps, illus, align = "center", style }) =>
  text ? (
    <div style={{ display: "flex", alignItems: "center", justifyContent: align === "left" ? "flex-start" : "center", gap: 22, ...fadeUp(frame, 0, 10), ...style }}>
      {illus && <div style={pop(frame, fps, 2)}><Illus name={illus} size={84} /></div>}
      <FitText text={text} max={TYPE.h2} min={TYPE.small} target={40} align={align} />
    </div>
  ) : null;

/** Giờ → chữ: 9 → "9 giờ", 0.5 → "30 phút", 1.5 → "1 giờ 30". */
const hoursText = (h) => {
  const H = Math.floor(h + 1e-6);
  const m = Math.round((h - H) * 60);
  if (H === 0) return `${m} phút`;
  return m ? `${H} giờ ${m}` : `${H} giờ`;
};

// =====================================================================================
// NUM-02 Thanh ngang: 2–8 thanh, thanh cần nhấn tô vàng.
//   bars[]{label, value, illus?}, highlight? (chỉ số), unit, title?, source
// =====================================================================================
const lead02 = (d) => (d.title ? 1000 : 500);
const Num02 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const n = data.bars.length;
  const max = Math.max(...data.bars.map((b) => Number(b.value))) || 1;
  const p = plan(data.bars.map((b) => b.label), { level: ctx.level, lead: lead02(data), gap: 0 });
  const dense = n >= 6;
  const rowH = dense ? 66 : n >= 4 ? 92 : 120;
  const barH = dense ? 44 : n >= 4 ? 60 : 78;
  const labelW = dense ? 720 : 600;
  const ill = dense ? 58 : 84;
  const trackW = W - labelW - ill - 30 - 40;
  const barMax = trackW - 300;
  const run = Math.round(fps * RUN);
  const last = msToFrames(p.starts[n - 1], fps) + run;
  return (
    <Stage accent={ctx.accent}>
      <Title text={data.title} frame={frame} fps={fps} illus={data.illus} style={{ marginBottom: dense ? 20 : 40 }} />
      <div style={{ width: W, display: "flex", flexDirection: "column", gap: dense ? 8 : 16 }}>
        {data.bars.map((b, i) => {
          const at = msToFrames(p.starts[i], fps);
          const v = countTo(frame, at, run, b.value);
          const hl = data.highlight === i;
          const color = hl ? COLORS.marker : ctx.accent;
          return (
            <div key={i} style={{ ...fadeUp(frame, at - 4, 8), minHeight: rowH, display: "flex", alignItems: "center", gap: 20 }}>
              <div style={{ width: ill, flex: "none" }}>{b.illus && <Illus name={b.illus} size={ill} />}</div>
              <div style={{ width: labelW, flex: "none", fontSize: TYPE.small, fontWeight: hl ? 800 : 600, lineHeight: 1.1, color: COLORS.ink }}>{b.label}</div>
              <div style={{ position: "relative", width: trackW, height: barH, display: "flex", alignItems: "center" }}>
                <div style={{ height: barH, width: Math.max(6, (v / max) * barMax), borderRadius: barH / 2, background: color, opacity: hl ? 1 : 0.88, boxShadow: hl ? `0 0 0 5px ${COLORS.markerSoft}` : undefined }} />
                <div style={{ marginLeft: 18, fontSize: dense ? 44 : TYPE.body, fontWeight: 800, color: hl ? COLORS.ink : ctx.accent, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                  {b.prefix ? `${b.prefix} ` : ""}{fmt(v, decOf(b.value))} <span style={{ fontSize: 40, fontWeight: 600, color: COLORS.muted }}>{data.unit}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Source text={data.source} frame={frame} at={last} style={{ marginTop: dense ? 16 : 34 }} />
    </Stage>
  );
};

// =====================================================================================
// NUM-04 Mảng biểu tượng 10×10: 100 (hoặc 10) hình minh hoạ, N hình bật màu lần lượt.
//   n, of (100 | 10), illus (tên hình mỗi ô), label, prefix?, source
// =====================================================================================
const Num04 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const of = data.of === 10 ? 10 : 100;
  const n = Math.max(0, Math.min(of, Number(data.n)));
  const cols = of === 10 ? 5 : 10;
  const cell = of === 10 ? 124 : 58;
  const g = of === 10 ? 22 : 8;
  const onAt = 14;
  const span = Math.round(fps * RUN);
  const num = countTo(frame, onAt, span, n);
  const doneF = onAt + span;
  const pct = of === 100;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ display: "flex", alignItems: "center", gap: 80, width: W }}>
        <div style={{ ...pop(frame, fps, 0), background: COLORS.surface, borderRadius: 40, padding: 34, border: `2px solid ${COLORS.line}`, boxShadow: "0 18px 40px rgba(23,32,51,.08)" }}>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, ${cell}px)`, gap: g }}>
            {Array.from({ length: of }).map((_, i) => {
              const s = onAt + (n > 0 ? (i / n) * span : 0);
              const on = i < n && frame >= s;
              const sc = i < n ? 0.75 + 0.25 * Math.min(1, progress(frame, s, 5)) + 0.18 * Math.sin(Math.min(1, progress(frame, s, 8)) * Math.PI) : 0.78;
              return (
                <div key={i} style={{ width: cell, height: cell, borderRadius: cell * 0.3, background: on ? COLORS.markerSoft : COLORS.paper, display: "grid", placeItems: "center" }}>
                  <div style={{ filter: on ? "none" : "grayscale(1)", opacity: on ? 1 : 0.28, transform: `scale(${sc})` }}>
                    <Illus name={data.illus || "person"} size={cell * 0.86} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          {data.kicker && <div style={fadeUp(frame, 0, 10)}><Kicker accent={ctx.accent}>{data.kicker}</Kicker></div>}
          <div style={{ display: "flex", alignItems: "baseline", gap: 18, fontVariantNumeric: "tabular-nums" }}>
            {data.prefix && <span style={{ fontSize: TYPE.h2, fontWeight: 800, color: COLORS.ink2 }}>{data.prefix}</span>}
            <span style={{ fontSize: 200, lineHeight: 1, fontWeight: 800, color: ctx.accent }}>{Math.round(num)}{pct ? "%" : ""}</span>
            {!pct && <span style={{ fontSize: TYPE.h1, fontWeight: 800, color: COLORS.muted }}>/ {of}</span>}
          </div>
          <div style={fadeUp(frame, doneF - 6, 12)}>
            <FitText text={data.label} max={TYPE.h2} min={TYPE.small} target={40} weight={700} align="left" />
          </div>
          <Source text={data.source} frame={frame} at={doneF + 6} />
        </div>
      </div>
    </Stage>
  );
};

// =====================================================================================
// NUM-05 Vòng tỉ lệ: vòng (donut) chạy tới %, số % chạy theo ở giữa.
//   percent, label, prefix?, illus?, source
// =====================================================================================
const Num05 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const S = 600;
  const r = 236;
  const sw = 74;
  const C = 2 * Math.PI * r;
  const at = 10;
  const run = Math.round(fps * RUN);
  const v = countTo(frame, at, run, data.percent);
  const doneF = at + run;
  const pulse = 1 + 0.025 * Math.sin(Math.max(0, frame - doneF) / 8) * (frame > doneF ? 1 : 0);
  const dec = decOf(data.percent);
  return (
    <Stage accent={ctx.accent}>
      <div style={{ display: "flex", alignItems: "center", gap: 90, width: W }}>
        <div style={{ ...pop(frame, fps, 0), position: "relative", width: S, height: S, flex: "none", transform: `scale(${pulse})` }}>
          <svg width={S} height={S}>
            <circle cx={S / 2} cy={S / 2} r={r + sw / 2 + 18} fill={COLORS.surface} />
            <circle cx={S / 2} cy={S / 2} r={r} fill="none" stroke={COLORS.line} strokeWidth={sw} />
            <circle cx={S / 2} cy={S / 2} r={r} fill="none" stroke={ctx.accent} strokeWidth={sw} strokeLinecap={v > 0.5 ? "round" : "butt"}
              strokeDasharray={`${(v / 100) * C} ${C}`} transform={`rotate(-90 ${S / 2} ${S / 2})`} />
            {Array.from({ length: 20 }).map((_, i) => {
              const a = (i / 20) * Math.PI * 2 - Math.PI / 2;
              const r1 = r - sw / 2 - 16;
              const r2 = r1 - (i % 5 === 0 ? 22 : 10);
              return <line key={i} x1={S / 2 + Math.cos(a) * r1} y1={S / 2 + Math.sin(a) * r1} x2={S / 2 + Math.cos(a) * r2} y2={S / 2 + Math.sin(a) * r2} stroke={COLORS.line} strokeWidth={4} strokeLinecap="round" />;
            })}
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            {data.prefix && <div style={{ fontSize: TYPE.small, fontWeight: 800, color: COLORS.ink2 }}>{data.prefix}</div>}
            <div style={{ fontSize: 150, lineHeight: 1, fontWeight: 800, color: COLORS.ink, fontVariantNumeric: "tabular-nums" }}>{fmt(v, dec)}%</div>
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 30 }}>
          <div style={{ ...pop(frame, fps, 6), transform: `${pop(frame, fps, 6).transform} translateY(${idle(frame, 6, 100)}px)` }}>
            <IllusBadge name={data.illus || "pie"} size={210} />
          </div>
          {data.kicker && <div style={fadeUp(frame, 4, 10)}><Kicker accent={ctx.accent}>{data.kicker}</Kicker></div>}
          <div style={fadeUp(frame, doneF - 8, 12)}>
            <FitText text={data.label} max={TYPE.h2} min={TYPE.small} target={40} weight={700} align="left" />
          </div>
          <Source text={data.source} frame={frame} at={doneF + 6} />
        </div>
      </div>
    </Stage>
  );
};

// =====================================================================================
// NUM-06 Dòng thời gian: trục vẽ dần, các mốc nảy lên lần lượt. ≥ 5 mốc thì xen kẽ trên/dưới.
//   events[3–8]{date, label, illus?}, title?, source
// =====================================================================================
const lead06 = (d) => (d.title ? 1000 : 500);
const evText = (e) => `${e.date} ${e.label}`;
const Num06 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const ev = data.events;
  const n = ev.length;
  const alt = n >= 5;
  const p = plan(ev.map(evText), { level: ctx.level, lead: lead06(data), gap: 100 });
  const st = p.starts.map((ms) => msToFrames(ms, fps));
  const L = Math.min(520, alt ? Math.floor((2 * W - 10 * (n - 1)) / (n + 1)) : Math.floor((W - 30 * (n - 1)) / n));
  const step = n > 1 ? (W - L) / (n - 1) : 0;
  const xs = ev.map((_, i) => L / 2 + i * step);
  const H = data.title ? 624 : 690;
  const ay = alt ? H / 2 - 24 : 230;
  // trục vẽ tới mốc i đúng lúc mốc i hiện
  const axP = (() => {
    let x = 0;
    for (let i = 0; i < n; i++) {
      const prevX = i === 0 ? 0 : xs[i - 1];
      const s0 = i === 0 ? 0 : st[i - 1] + 6;
      x = frame < s0 ? x : prevX + (xs[i] - prevX) * progress(frame, s0, Math.max(6, st[i] - s0), EASE_STD);
    }
    const s0 = st[n - 1] + 6;
    return x + (W - xs[n - 1]) * progress(frame, s0, 14, EASE_STD);
  })();
  const fs = alt ? TYPE.small : TYPE.body;
  return (
    <Stage accent={ctx.accent}>
      <Title text={data.title} frame={frame} fps={fps} illus={data.illus} style={{ marginBottom: 10 }} />
      <div style={{ position: "relative", width: W, height: H }}>
        <div style={{ position: "absolute", left: 0, top: ay - 5, height: 10, width: axP, borderRadius: 5, background: ctx.accent }} />
        {ev.map((e, i) => {
          const up = alt ? i % 2 === 0 : false;
          const dot = pop(frame, fps, st[i]);
          const textAt = st[i] + 4;
          const dateEl = <div style={{ fontSize: alt ? 44 : TYPE.h2, fontWeight: 800, color: ctx.accent, lineHeight: 1.05 }}>{e.date}</div>;
          const labelEl = <div style={{ fontSize: fs, fontWeight: 600, lineHeight: 1.18, color: COLORS.ink }}>{e.label}</div>;
          const content = <>{dateEl}{labelEl}</>;
          return (
            <React.Fragment key={i}>
              {alt ? (
                <div style={{ position: "absolute", left: xs[i] - 40, top: ay - 40, width: 80, height: 80, borderRadius: "50%", background: COLORS.surface, border: `7px solid ${i === n - 1 ? COLORS.marker : ctx.accent}`, display: "grid", placeItems: "center", ...dot }}>
                  <Illus name={e.illus || data.illusEach || "pushpin"} size={50} />
                </div>
              ) : (
                <div style={{ position: "absolute", left: xs[i] - 22, top: ay - 22, width: 44, height: 44, borderRadius: "50%", background: COLORS.surface, border: `8px solid ${i === n - 1 ? COLORS.marker : ctx.accent}`, ...dot }} />
              )}
              {alt ? (
                <div style={{ position: "absolute", left: xs[i] - L / 2, width: L, ...(up ? { bottom: H - ay + 54 } : { top: ay + 54 }), display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 8, ...fadeUp(frame, textAt, 10) }}>
                  {up ? <>{labelEl}{dateEl}</> : content}
                </div>
              ) : (
                <>
                  <div style={{ position: "absolute", left: xs[i] - 80, width: 160, bottom: H - ay + 40, display: "grid", placeItems: "center", ...pop(frame, fps, st[i] + 2) }}>
                    <div style={{ transform: `translateY(${idle(frame + i * 17, 6, 90)}px)` }}><Illus name={e.illus || data.illusEach || "pushpin"} size={150} /></div>
                  </div>
                  <div style={{ position: "absolute", left: xs[i] - L / 2, width: L, top: ay + 46, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12, ...fadeUp(frame, textAt, 10) }}>
                    {content}
                  </div>
                </>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <Source text={data.source} frame={frame} at={st[n - 1] + 16} style={{ marginTop: 2 }} />
    </Stage>
  );
};

// =====================================================================================
// NUM-09 Bong bóng độ lớn: 2–3 hình tròn có DIỆN TÍCH theo giá trị.
//   items[2–3]{label, value, illus?}, unit, note?, title?, source
// =====================================================================================
const Num09 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const it = data.items;
  const n = it.length;
  const max = Math.max(...it.map((x) => Number(x.value))) || 1;
  const maxD = n >= 3 ? 400 : 430;
  const ds = it.map((x) => maxD * Math.sqrt(Number(x.value) / max));
  const run = Math.round(fps * RUN);
  const ats = it.map((_, i) => 8 + i * Math.round(fps * 0.45));
  const doneF = ats[n - 1] + run;
  const tones = [ctx.accent, COLORS.ink2, COLORS.muted];
  return (
    <Stage accent={ctx.accent}>
      <Title text={data.title} frame={frame} fps={fps} style={{ marginBottom: 20 }} />
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: n >= 3 ? 70 : 120, width: W }}>
        {it.map((x, i) => {
          const s = Math.min(1.2, Math.max(0, interpolate(frame, [ats[i], ats[i] + 14, ats[i] + 22], [0, 1.08, 1], clampX)));
          const v = countTo(frame, ats[i], run, x.value);
          const d = ds[i];
          const inside = d >= 230;
          const hl = data.highlight === i;
          const bg = hl ? COLORS.marker : tones[i % 3];
          const numEl = (
            <div style={{ fontSize: inside ? Math.min(96, d * 0.24) : 64, fontWeight: 800, color: inside ? (hl ? COLORS.ink : "#fff") : COLORS.ink, fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>
              {x.prefix ? <span style={{ fontSize: 40 }}>{x.prefix} </span> : null}{fmt(v, decOf(x.value))}
            </div>
          );
          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: Math.max(d, 340) }}>
              {!inside && <div style={{ opacity: progress(frame, ats[i], 6), marginBottom: 12 }}>{numEl}</div>}
              <div style={{ width: d, height: d, borderRadius: "50%", background: bg, transform: `scale(${s})`, transformOrigin: "bottom center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, boxShadow: "0 20px 40px rgba(23,32,51,.15)" }}>
                <Illus name={x.illus || "red-circle"} size={Math.max(54, Math.min(110, d * 0.26))} style={{ transform: `translateY(${idle(frame + i * 30, 4, 80)}px)` }} />
                {inside && numEl}
                {inside && <div style={{ fontSize: 40, fontWeight: 700, color: hl ? COLORS.ink : "#fff", opacity: 0.9 }}>{data.unit}</div>}
              </div>
              <div style={{ ...fadeUp(frame, ats[i] + 10, 10), marginTop: 18, fontSize: TYPE.small, fontWeight: 700, textAlign: "center", lineHeight: 1.15, maxWidth: 400 }}>
                {x.label}{!inside && <span style={{ color: COLORS.muted, fontWeight: 600 }}> ({data.unit})</span>}
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 40, marginTop: 26 }}>
        {data.note && (
          <div style={{ ...slam(frame, fps, doneF + 2, 1.8), padding: "12px 34px", borderRadius: 999, background: COLORS.marker, fontSize: TYPE.body, fontWeight: 800, display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", flex: "none" }}>
            <Icon name="scale" size={44} color={COLORS.ink} /> {data.note}
          </div>
        )}
        <Source text={data.source} frame={frame} at={doneF + 10} />
      </div>
    </Stage>
  );
};

// =====================================================================================
// NUM-11 Phép tính từng bước: mỗi dòng một phép tính, kết quả dòng cuối tô vàng.
//   steps[1–5]{expr, result, op? ("=" mặc định)}, title?, illus?, source
// =====================================================================================
const lead11 = (d) => (d.title ? 1100 : 600);
const stepText = (s) => `${s.expr} ${s.result}`;
const Num11 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const n = data.steps.length;
  const p = plan(data.steps.map(stepText), { level: ctx.level, lead: lead11(data), gap: 300 });
  const st = p.starts.map((ms) => msToFrames(ms, fps));
  const dense = n >= 4;
  const rowH = dense ? 96 : 124;
  const last = st[n - 1] + 30;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ display: "flex", alignItems: "center", gap: 26, alignSelf: "flex-start", marginLeft: 40, marginBottom: 24, ...fadeUp(frame, 0, 10) }}>
        <div style={pop(frame, fps, 0)}><IllusBadge name={data.illus || "abacus"} size={dense ? 110 : 130} /></div>
        {data.title && <FitText text={data.title} max={TYPE.h2} min={TYPE.small} target={40} align="left" />}
      </div>
      <Card style={{ width: 1640, padding: dense ? "18px 50px" : "30px 56px", backgroundImage: `repeating-linear-gradient(transparent 0 ${rowH - 2}px, ${COLORS.line} ${rowH - 2}px ${rowH}px)` }}>
        {data.steps.map((s, i) => {
          const isLast = i === n - 1;
          const e = fadeUp(frame, st[i], 10);
          const r = slam(frame, fps, st[i] + 12, 1.9);
          return (
            <div key={i} style={{ height: rowH, display: "flex", alignItems: "center", gap: 30 }}>
              <div style={{ ...pop(frame, fps, st[i]), width: 64, height: 64, flex: "none", borderRadius: 20, background: isLast ? COLORS.ink : ctx.accent, color: "#fff", display: "grid", placeItems: "center", fontSize: 38, fontWeight: 800 }}>{i + 1}</div>
              <div style={{ ...e, flex: 1, minWidth: 0, fontSize: dense ? TYPE.body : TYPE.body + 4, fontWeight: 600, color: COLORS.ink2, fontVariantNumeric: "tabular-nums" }}>{s.expr}</div>
              <div style={{ opacity: progress(frame, st[i] + 8, 6), fontSize: TYPE.h2, fontWeight: 800, color: COLORS.muted, width: 70, textAlign: "center" }}>{s.op || "="}</div>
              <div style={{ ...r, transformOrigin: "left center", textAlign: "right", fontSize: isLast ? TYPE.h2 : TYPE.h2 - 8, fontWeight: 800, color: isLast ? COLORS.ink : ctx.accent, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                {isLast ? <Marker startF={st[i] + 20} dur={10}>{s.result}</Marker> : s.result}
              </div>
            </div>
          );
        })}
      </Card>
      <Source text={data.source} frame={frame} at={last} style={{ marginTop: 22, alignSelf: "flex-start", marginLeft: 40 }} />
    </Stage>
  );
};

// =====================================================================================
// NUM-12 Ngân sách thời gian: vòng 24 giờ chia thành các khối màu, chú thích bên phải.
//   blocks[2–6]{label, hours | rest:true, illus?}, highlight? (chỉ số), title?, source
// =====================================================================================
const lead12 = (d) => (d.title ? 1000 : 500);
const blockHours = (blocks) => {
  const fixed = blocks.reduce((s, b) => s + (b.rest ? 0 : Number(b.hours) || 0), 0);
  return blocks.map((b) => (b.rest ? Math.max(0, 24 - fixed) : Number(b.hours) || 0));
};
const Num12 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const bl = data.blocks;
  const n = bl.length;
  const hrs = blockHours(bl);
  const p = plan(bl.map((b, i) => `${b.label} ${hoursText(hrs[i])}`), { level: ctx.level, lead: lead12(data), gap: 150 });
  const st = p.starts.map((ms) => msToFrames(ms, fps));
  const palette = [COLORS.ink2, ctx.accent, COLORS.coral, COLORS.muted, COLORS.ok, COLORS.line];
  const colorOf = (i) => (data.highlight === i ? COLORS.marker : palette[i % palette.length]);
  const S = 600;
  const r = 220;
  const sw = 100;
  const C = 2 * Math.PI * r;
  const starts = hrs.reduce((a, h, i) => [...a, (a[i] || 0) + h], [0]);
  const hlAt = data.highlight != null ? st[data.highlight] : -1;
  const pull = hlAt >= 0 ? progress(frame, st[n - 1] + 20, 14, EASE_STD) : 0;
  const last = st[n - 1] + 24;
  const dense = n >= 5;
  const fl = flash(frame, st[n - 1] + 20, 10);
  return (
    <Stage accent={ctx.accent}>
      <Title text={data.title} frame={frame} fps={fps} illus={data.illus} style={{ marginBottom: 20 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 70, width: W }}>
        <div style={{ ...pop(frame, fps, 0), position: "relative", width: S, height: S, flex: "none" }}>
          <svg width={S} height={S} style={{ overflow: "visible" }}>
            <circle cx={S / 2} cy={S / 2} r={r} fill="none" stroke={COLORS.line} strokeWidth={sw} opacity={0.5} />
            {bl.map((b, i) => {
              const frac = hrs[i] / 24;
              const g = progress(frame, st[i] - 6, Math.max(8, Math.round(frac * 50)), EASE_STD);
              const len = Math.max(0, frac * C * g - 6);
              const mid = ((starts[i] + hrs[i] / 2) / 24) * Math.PI * 2 - Math.PI / 2;
              const off = data.highlight === i ? pull * 26 : 0;
              return (
                <circle key={i} cx={S / 2 + Math.cos(mid) * off} cy={S / 2 + Math.sin(mid) * off} r={r} fill="none" stroke={colorOf(i)} strokeWidth={data.highlight === i ? sw + pull * 16 : sw}
                  strokeDasharray={`${len} ${C}`} transform={`rotate(${(starts[i] / 24) * 360 - 90} ${S / 2 + Math.cos(mid) * off} ${S / 2 + Math.sin(mid) * off})`} />
              );
            })}
            {[0, 6, 12, 18].map((h) => {
              const a = (h / 24) * Math.PI * 2 - Math.PI / 2;
              const rr = r + sw / 2 + 34;
              return <text key={h} x={S / 2 + Math.cos(a) * rr} y={S / 2 + Math.sin(a) * rr + 14} textAnchor="middle" fontSize={40} fontWeight={700} fill={COLORS.muted}>{h}</text>;
            })}
          </svg>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            {pull > 0.5 && data.highlight != null ? (
              <div style={{ ...slam(frame, fps, st[n - 1] + 26, 1.8), display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Illus name={bl[data.highlight].illus || "sparkles"} size={96} />
                <div style={{ fontSize: hoursText(hrs[data.highlight]).length > 6 ? 56 : 76, fontWeight: 800, lineHeight: 1, whiteSpace: "nowrap" }}><Marker startF={st[n - 1] + 30}>{hoursText(hrs[data.highlight])}</Marker></div>
              </div>
            ) : (
              <>
                <Illus name="alarm-clock" size={100} style={{ transform: `rotate(${idle(frame, 6, 30)}deg)` }} />
                <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1 }}>24</div>
                <div style={{ fontSize: 40, fontWeight: 700, color: COLORS.muted }}>giờ</div>
              </>
            )}
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: dense ? 10 : 18 }}>
          {bl.map((b, i) => {
            const hl = data.highlight === i;
            return (
              <div key={i} style={{ ...fadeUp(frame, st[i], 10), display: "flex", alignItems: "center", gap: 20, padding: dense ? "10px 22px" : "16px 26px", borderRadius: 24, background: hl && pull > 0 ? COLORS.markerSoft : COLORS.surface, border: `3px solid ${hl && pull > 0 ? COLORS.marker : COLORS.line}` }}>
                <div style={{ width: 30, height: 30, flex: "none", borderRadius: 8, background: colorOf(i) }} />
                {b.illus && <Illus name={b.illus} size={dense ? 60 : 76} />}
                <div style={{ flex: 1, fontSize: TYPE.small, fontWeight: hl ? 800 : 600, lineHeight: 1.12 }}>{b.label}</div>
                <div style={{ fontSize: dense ? 46 : TYPE.body, fontWeight: 800, color: hl ? COLORS.ink : ctx.accent, whiteSpace: "nowrap" }}>{hoursText(hrs[i])}</div>
              </div>
            );
          })}
          <Source text={data.source} frame={frame} at={last} style={{ marginTop: 8 }} />
        </div>
      </div>
      <div style={{ position: "absolute", inset: -200, background: COLORS.marker, opacity: fl * 0.25, pointerEvents: "none" }} />
    </Stage>
  );
};

const src = (d, c) => readMs(d.source, { ...c, fresh: false }) * 0.5;
export const NUM2 = {
  "NUM-02": { name: "Thanh ngang", family: "NUM", Component: Num02, limits: { bars: [2, 8], "bars.label": [1, 10] }, needsSource: true,
    estimate: (d, c) => plan(d.bars.map((b) => b.label), { level: c.level, lead: lead02(d), gap: 0 }).endMs + RUN * 1000 + src(d, c) + 900 },
  "NUM-04": { name: "Mảng biểu tượng 10×10", family: "NUM", Component: Num04, limits: { label: [3, 24] }, needsSource: true,
    estimate: (d, c) => 500 + RUN * 1000 + readMs(d.label, c) + src(d, c) + 1000 },
  "NUM-05": { name: "Vòng tỉ lệ", family: "NUM", Component: Num05, limits: { label: [3, 24] }, needsSource: true,
    estimate: (d, c) => 350 + RUN * 1000 + readMs(d.label, c) + src(d, c) + 1000 },
  "NUM-06": { name: "Dòng thời gian", family: "NUM", Component: Num06, limits: { events: [3, 8], "events.label": [2, 11] }, needsSource: true,
    estimate: (d, c) => plan(d.events.map(evText), { level: c.level, lead: lead06(d), gap: 100 }).endMs + src(d, c) + 1000 },
  "NUM-09": { name: "Bong bóng độ lớn", family: "NUM", Component: Num09, limits: { items: [2, 3], "items.label": [1, 10] }, needsSource: true,
    estimate: (d, c) => 300 + (d.items.length - 1) * 450 + RUN * 1000 + readMs(`${d.title || ""} ${d.items.map((x) => x.label).join(" ")} ${d.note || ""}`, c) * 0.8 + src(d, c) + 1000 },
  "NUM-11": { name: "Phép tính từng bước", family: "NUM", Component: Num11, limits: { steps: [1, 5] }, needsSource: true,
    estimate: (d, c) => plan(d.steps.map(stepText), { level: c.level, lead: lead11(d), gap: 300 }).endMs + 700 + src(d, c) + 900 },
  "NUM-12": { name: "Ngân sách thời gian", family: "NUM", Component: Num12, limits: { blocks: [2, 6], "blocks.label": [1, 10] }, needsSource: true,
    estimate: (d, c) => {
      const h = blockHours(d.blocks);
      return plan(d.blocks.map((b, i) => `${b.label} ${hoursText(h[i])}`), { level: c.level, lead: lead12(d), gap: 150 }).endMs + 1200 + src(d, c) + 900;
    } },
};
