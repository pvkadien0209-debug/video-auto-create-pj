// cmp2.jsx — họ CMP (so sánh), đợt 2: CMP-02 trước – sau thanh trượt · CMP-03 hai lựa chọn · CMP-04 đúng – sai
//   · CMP-05 bảng so sánh · CMP-07 sửa câu · CMP-08 thanh đôi · CMP-09 lật thẻ hiểu lầm · CMP-10 nhiều vai cùng nhìn
// Ô hình: illus* (tên Fluent Emoji trong core/illus-names.js). Không ghi thì dùng hình mặc định.
import React from "react";
import { interpolate, Easing, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { Card, FitText, Icon, Illus, IllusBadge, Kicker, Marker, Stage } from "../core/ui.jsx";
import { EASE_STD, blink, fadeUp, flash, flyIn, idle, pop, progress, shake, slam } from "../core/motion.js";
import { msToFrames, plan, readMs } from "../core/timing.js";

// ---------- phần dùng chung trong tệp ----------
const W = 1728; // bề ngang vùng an toàn
const useFF = () => ({ frame: useCurrentFrame(), fps: useVideoConfig().fps });
const clampX = { extrapolateLeft: "clamp", extrapolateRight: "clamp" };
const decOf = (v) => (String(v).includes(".") ? String(v).split(".")[1].length : 0);
const fmt = (v, dec) => Number(v).toLocaleString("vi-VN", { minimumFractionDigits: dec, maximumFractionDigits: dec });
/** Số chạy từ 0 tới v trong [start, start+dur] khung, easing out. */
const countTo = (frame, start, dur, v) => interpolate(frame, [start, start + dur], [0, Number(v)], { ...clampX, easing: Easing.out(Easing.cubic) });

/** Nhãn dạng viên thuốc có biểu tượng. */
const Pill = ({ children, bg, icon, color = "#fff", style }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "10px 28px", borderRadius: 999, background: bg, color, fontSize: TYPE.small, fontWeight: 800, alignSelf: "flex-start", ...style }}>
    {icon && <Icon name={icon} size={38} color={color} stroke={3} />}
    {children}
  </div>
);

const Title = ({ text, frame, illus, fps, color = COLORS.ink, style }) =>
  text ? (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 22, ...fadeUp(frame, 0, 10), ...style }}>
      {illus && <div style={pop(frame, fps, 2)}><Illus name={illus} size={84} /></div>}
      <FitText text={text} max={TYPE.h2} min={TYPE.small} target={40} color={color} />
    </div>
  ) : null;

// =====================================================================================
// CMP-02 Trước – sau thanh trượt: bản dở nằm dưới, thanh trượt quét sang phải lộ bản tốt.
//   before, after, title?, labels?[2], illusBefore?, illusAfter?
// =====================================================================================
const Cmp02 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const [la, lb] = data.labels || ["Trước", "Sau"];
  const lead = data.title ? 500 : 200;
  const wipeAt = msToFrames(lead + readMs(data.before, ctx) + 200, fps);
  const p = progress(frame, wipeAt, 26, EASE_STD);
  const boxW = 1640;
  const boxH = data.title ? 540 : 620;
  const enter = progress(frame, 0, 14);
  const handleOp = frame < wipeAt - 10 ? 0 : p >= 1 ? 1 - progress(frame, wipeAt + 30, 10) : progress(frame, wipeAt - 10, 8);
  const stamp = pop(frame, fps, wipeAt + 24);
  const face = (label, text, illus, good) => (
    <div style={{ position: "absolute", inset: 0, background: good ? COLORS.pineSoft : COLORS.coralSoft, display: "flex", alignItems: "center", gap: 60, padding: "0 90px" }}>
      <div style={{ transform: `translateY(${idle(frame + (good ? 40 : 0), 6, 110)}px)` }}>
        <IllusBadge name={illus} size={330} bg={COLORS.surface} />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 30 }}>
        <Pill bg={good ? ctx.accent : COLORS.coral} icon={good ? "check" : "x"}>{label}</Pill>
        <FitText text={text} max={TYPE.h1} min={TYPE.body} target={30} weight={800} align="left" color={good ? COLORS.ink : COLORS.ink2} />
      </div>
    </div>
  );
  return (
    <Stage accent={ctx.accent}>
      <Title text={data.title} frame={frame} fps={fps} style={{ marginBottom: 40 }} />
      <div style={{ position: "relative", width: boxW, height: boxH, borderRadius: 40, overflow: "hidden", border: `3px solid ${COLORS.line}`, boxShadow: "0 24px 50px rgba(23,32,51,.12)", opacity: enter, transform: `scale(${1.04 - 0.04 * enter})` }}>
        {face(la, data.before, data.illusBefore || "tired-face", false)}
        <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${(1 - p) * 100}% 0 0)` }}>
          {face(lb, data.after, data.illusAfter || "smiling-face-with-sunglasses", true)}
        </div>
        {/* tay nắm thanh trượt */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: p * boxW - 6 + (p === 0 ? idle(frame, 10, 24) + 16 : 0), width: 12, background: COLORS.surface, opacity: handleOp, boxShadow: "0 0 24px rgba(23,32,51,.25)" }}>
          <div style={{ position: "absolute", top: "50%", left: 6, width: 120, height: 120, marginLeft: -60, marginTop: -60, borderRadius: "50%", background: ctx.accent, border: `6px solid ${COLORS.surface}`, display: "grid", placeItems: "center" }}>
            <Icon name="chevrons-left-right" size={64} color="#fff" stroke={3} />
          </div>
        </div>
        <div style={{ position: "absolute", right: 40, top: 34, opacity: stamp.opacity, transform: `${stamp.transform} rotate(-10deg)` }}>
          <Illus name="check-mark-button" size={130} />
        </div>
      </div>
    </Stage>
  );
};

// =====================================================================================
// CMP-03 Hai lựa chọn: cột A và cột B, mỗi cột cách làm → kết quả. Không phán ai đúng tuyệt đối.
//   a{label?, do, result, illus?}, b{…}, title?
// =====================================================================================
const lead03 = (d) => (d.title ? 1100 : 700);
const Cmp03 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const { a, b } = data;
  const p = plan([a.do, a.result, b.do, b.result], { level: ctx.level, lead: lead03(data), gap: 250 });
  const at = (i) => msToFrames(p.starts[i], fps);
  const vs = slam(frame, fps, 6, 2.2);
  const col = (s, k, color, dir) => {
    const o = k * 2;
    return (
      <div style={{ width: 790, display: "flex", flexDirection: "column", alignItems: "stretch" }}>
        <div style={{ ...flyIn(frame, fps, at(o) - 10, dir, 120), display: "flex", alignItems: "center", gap: 22, marginBottom: 22 }}>
          <IllusBadge name={s.illus || (k === 0 ? "person-walking" : "person-running")} size={130} bg={k === 0 ? COLORS.line : COLORS.pineSoft} />
          <div style={{ fontSize: TYPE.h2, fontWeight: 800, color }}>{s.label || (k === 0 ? "Cách A" : "Cách B")}</div>
        </div>
        <div style={fadeUp(frame, at(o), 12)}>
          <Card style={{ minHeight: 196, padding: "28px 40px", display: "flex", alignItems: "center", borderTop: `10px solid ${color}` }}>
            <FitText text={s.do} max={TYPE.body} min={TYPE.small} target={44} weight={700} align="left" />
          </Card>
        </div>
        <div style={{ ...pop(frame, fps, at(o + 1) - 8), display: "grid", placeItems: "center", height: 74 }}>
          <Icon name="arrow-down" size={58} color={color} stroke={3} />
        </div>
        <div style={pop(frame, fps, at(o + 1))}>
          <Card tone={k === 0 ? COLORS.paper : COLORS.pineSoft} style={{ minHeight: 196, padding: "28px 40px", display: "flex", alignItems: "center", gap: 20, border: `3px solid ${color}` }}>
            <Icon name="flag" size={48} color={color} stroke={2.6} />
            <FitText text={s.result} max={TYPE.body} min={TYPE.small} target={44} weight={800} align="left" />
          </Card>
        </div>
      </div>
    );
  };
  return (
    <Stage accent={ctx.accent}>
      <Title text={data.title} frame={frame} fps={fps} illus={data.illus} style={{ marginBottom: 30 }} />
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", width: W }}>
        {col(a, 0, COLORS.ink2, "left")}
        {col(b, 1, ctx.accent, "right")}
        <div style={{ position: "absolute", left: "50%", top: 300, marginLeft: -62, width: 124, height: 124, borderRadius: "50%", background: COLORS.ink, color: "#fff", display: "grid", placeItems: "center", fontSize: 50, fontWeight: 800, ...vs }}>
          hay
        </div>
      </div>
    </Stage>
  );
};

// =====================================================================================
// CMP-04 Đúng – sai: câu nói, lặng một nhịp để đoán, rồi đóng dấu ✅ hoặc ❌, kèm lý do.
//   statement, truth (bool), why, kicker?
// =====================================================================================
const THINK = 1300;
const Cmp04 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const readF = msToFrames(400 + readMs(data.statement, ctx), fps);
  const revealAt = readF + msToFrames(THINK, fps);
  const whyAt = revealAt + 20;
  const t = !!data.truth;
  const sh = shake(frame, revealAt + 2, 12, 16);
  const fl = flash(frame, revealAt, 10);
  const st = slam(frame, fps, revealAt, 3);
  const thinking = frame >= readF && frame < revealAt;
  const thinkP = progress(frame, readF, revealAt - readF, (x) => x);
  const btn = (label, isTrue) => {
    const chosen = frame >= revealAt && isTrue === t;
    const dim = frame >= revealAt && isTrue !== t;
    const color = isTrue ? COLORS.ok : COLORS.coral;
    const pulse = thinking ? 1 + 0.04 * Math.sin((frame - readF) / 3 + (isTrue ? 0 : Math.PI)) : chosen ? 1.08 : 1;
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 18, padding: "18px 52px", borderRadius: 999, border: `5px solid ${color}`, background: chosen ? color : "transparent", color: chosen ? "#fff" : color, fontSize: TYPE.h2, fontWeight: 800, opacity: dim ? 0.25 : 1, transform: `scale(${pulse})` }}>
        <Icon name={isTrue ? "check" : "x"} size={60} color={chosen ? "#fff" : color} stroke={3.4} /> {label}
      </div>
    );
  };
  return (
    <Stage accent={ctx.accent} bg={COLORS.ink}>
      <div style={{ position: "absolute", inset: -200, background: t ? COLORS.ok : COLORS.coral, opacity: fl * 0.45, pointerEvents: "none" }} />
      <div style={{ transform: `translate(${sh.x}px, ${sh.y}px)`, display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        <div style={{ ...pop(frame, fps, 0), display: "flex", alignItems: "center", gap: 20 }}>
          <Illus name="red-question-mark" size={86} style={{ transform: `rotate(${idle(frame, 8, 40)}deg)` }} />
          <Kicker accent={COLORS.coral}>{data.kicker || "Đúng hay sai?"}</Kicker>
        </div>
        <div style={{ ...fadeUp(frame, 6, 14), position: "relative", marginTop: 36, maxWidth: 1520, minHeight: 250, padding: "0 180px", boxSizing: "border-box", display: "grid", placeItems: "center" }}>
          <FitText text={`“${data.statement}”`} max={TYPE.h1} min={TYPE.body} target={34} color={COLORS.surface} />
          <div style={{ position: "absolute", right: -40, top: -80, opacity: st.opacity, transform: `${st.transform} rotate(${t ? -8 : 10}deg)` }}>
            <div style={{ width: 210, height: 210, borderRadius: "50%", background: COLORS.surface, border: `12px solid ${t ? COLORS.ok : COLORS.coral}`, display: "grid", placeItems: "center", boxShadow: "0 18px 40px rgba(0,0,0,.35)" }}>
              <Illus name={t ? "check-mark-button" : "cross-mark"} size={130} />
            </div>
          </div>
        </div>
        <div style={{ ...fadeUp(frame, readF - 8, 10), display: "flex", gap: 60, marginTop: 34 }}>
          {btn("Đúng", true)}
          {btn("Sai", false)}
        </div>
        <div style={{ position: "relative", marginTop: 36, width: 1500, minHeight: 170 }}>
          {/* vạch đếm lúc đoán */}
          <div style={{ position: "absolute", left: 300, right: 300, top: 20, height: 12, borderRadius: 6, background: COLORS.ink2, opacity: frame >= readF && frame < revealAt + 4 ? 1 : 0 }}>
            <div style={{ height: "100%", width: `${thinkP * 100}%`, borderRadius: 6, background: COLORS.marker }} />
          </div>
          <div style={{ ...fadeUp(frame, whyAt, 12), display: "flex", alignItems: "center", gap: 28, background: COLORS.surface, borderRadius: 30, padding: "26px 40px" }}>
            <Illus name={data.illus || "light-bulb"} size={110} />
            <FitText text={data.why} max={TYPE.body} min={TYPE.small} target={50} weight={700} align="left" />
          </div>
        </div>
      </div>
    </Stage>
  );
};

// =====================================================================================
// CMP-05 Bảng so sánh: 2–3 cột, tối đa 5 hàng, các hàng vào lần lượt.
//   columns[2–3] (chuỗi hoặc {label, illus}), rows[1–5]{label, cells[]}, title?, highlight? (chỉ số cột)
// =====================================================================================
const colObj = (c) => (typeof c === "string" ? { label: c } : c);
const rowText = (r) => `${r.label} ${r.cells.join(" ")}`;
const lead05 = (d) => (d.title ? 1300 : 900);
const Cmp05 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const cols = data.columns.map(colObj);
  const nR = data.rows.length;
  const p = plan(data.rows.map(rowText), { level: ctx.level, lead: lead05(data), gap: 150 });
  const big = nR <= 3;
  const cellF = big ? TYPE.body : nR >= 5 ? 40 : TYPE.small;
  const labelW = 330;
  const grid = { display: "grid", gridTemplateColumns: `${labelW}px repeat(${cols.length}, 1fr)`, width: W };
  const hl = data.highlight;
  return (
    <Stage accent={ctx.accent}>
      {data.title && <Title text={data.title} frame={frame} fps={fps} style={{ marginBottom: nR >= 5 ? 14 : 30 }} />}
      <div style={{ width: W, borderRadius: 32, overflow: "hidden", background: COLORS.surface, border: `2px solid ${COLORS.line}`, boxShadow: "0 18px 40px rgba(23,32,51,.08)" }}>
        <div style={{ ...grid, background: COLORS.ink }}>
          <div />
          {cols.map((c, i) => (
            <div key={i} style={{ ...pop(frame, fps, 4 + i * 5), display: "flex", alignItems: "center", justifyContent: "center", gap: 16, padding: nR >= 5 ? "14px 12px" : "20px 12px", background: hl === i ? ctx.accent : "transparent" }}>
              {c.illus && <Illus name={c.illus} size={nR >= 5 ? 60 : 80} />}
              <div style={{ fontSize: nR >= 5 ? 44 : 50, fontWeight: 800, color: "#fff" }}>{c.label}</div>
            </div>
          ))}
        </div>
        {data.rows.map((r, ri) => {
          const s = msToFrames(p.starts[ri], fps);
          const e = progress(frame, s, 12);
          return (
            <div key={ri} style={{ ...grid, opacity: e, transform: `translateX(${(1 - e) * -60}px)`, background: ri % 2 ? COLORS.paper : COLORS.surface, borderTop: `2px solid ${COLORS.line}` }}>
              <div style={{ padding: nR >= 5 ? "14px 26px" : "22px 30px", display: "flex", alignItems: "center", fontSize: cellF, fontWeight: 800, color: ctx.accent, lineHeight: 1.15 }}>{r.label}</div>
              {r.cells.map((c, ci) => (
                <div key={ci} style={{ padding: nR >= 5 ? "14px 22px" : "22px 26px", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", fontSize: cellF, fontWeight: 600, lineHeight: 1.18, borderLeft: `2px solid ${COLORS.line}`, background: hl === ci ? COLORS.pineSoft : undefined }}>
                  {c}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </Stage>
  );
};

// =====================================================================================
// CMP-07 Sửa câu (câu mẫu tiếng Anh): gạch từ sai, câu đúng được gõ vào, từ mới tô vàng.
//   wrong, right, diff[] (các từ sai trong câu wrong), note? (tiếng Việt)
// =====================================================================================
const clean = (w) => w.toLowerCase().replace(/[^a-z0-9']/g, "");
const typeF07 = (d, fps) => Math.ceil((d.right.length / 26) * fps);
const Cmp07 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const en = { ...ctx, lang: "en" };
  const strikeAt = msToFrames(300 + readMs(data.wrong, en), fps);
  const typeAt = strikeAt + 22;
  const tF = typeF07(data, fps);
  const noteAt = typeAt + tF + msToFrames(readMs(data.right, { ...en, fresh: false }), fps);
  const bad = new Set((data.diff || []).map(clean));
  const wrongSet = new Set(data.wrong.split(/\s+/).map(clean));
  const wTok = data.wrong.split(/\s+/);
  const rTok = data.right.split(/\s+/);
  const nChars = Math.floor(((frame - typeAt) / fps) * 26);
  let acc = 0;
  let bi = 0;
  const typing = frame >= typeAt && nChars < data.right.length;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ width: 1640, display: "flex", flexDirection: "column", gap: 0 }}>
        <div style={{ ...flyIn(frame, fps, 0, "left", 120), display: "flex", alignItems: "center", gap: 30 }}>
          <Illus name="cross-mark" size={110} style={{ transform: `rotate(${idle(frame, 4, 50)}deg)` }} />
          <Card tone="coral" style={{ flex: 1, padding: "30px 44px", border: `3px solid ${COLORS.coral}` }}>
            <div style={{ fontSize: TYPE.small - 4, fontWeight: 800, color: COLORS.coral, marginBottom: 8 }}>Câu chưa đúng</div>
            <div style={{ fontSize: TYPE.h2, fontWeight: 700, lineHeight: 1.3, display: "flex", flexWrap: "wrap", columnGap: 18 }}>
              {wTok.map((w, i) => {
                const isBad = bad.has(clean(w));
                const k = isBad ? bi++ : 0;
                const sp = isBad ? progress(frame, strikeAt + k * 6, 8) : 0;
                return (
                  <span key={i} style={{ position: "relative", color: isBad && sp > 0 ? COLORS.coral : COLORS.ink, opacity: isBad ? 1 - 0.35 * sp : 1 }}>
                    {w}
                    {isBad && <span style={{ position: "absolute", left: -4, top: "52%", height: 8, borderRadius: 4, background: COLORS.coral, width: `calc(${sp * 100}% + 8px)` }} />}
                  </span>
                );
              })}
            </div>
          </Card>
        </div>
        <div style={{ ...pop(frame, fps, strikeAt + 12), display: "flex", justifyContent: "center", height: 92, alignItems: "center", paddingLeft: 140 }}>
          <div style={{ width: 76, height: 76, borderRadius: "50%", background: ctx.accent, display: "grid", placeItems: "center" }}>
            <Icon name="arrow-down" size={48} color="#fff" stroke={3} />
          </div>
        </div>
        <div style={{ ...fadeUp(frame, typeAt - 6, 8), display: "flex", alignItems: "center", gap: 30 }}>
          <Illus name="check-mark-button" size={110} />
          <Card tone="soft" style={{ flex: 1, padding: "30px 44px", border: `3px solid ${ctx.accent}` }}>
            <div style={{ fontSize: TYPE.small - 4, fontWeight: 800, color: ctx.accent, marginBottom: 8 }}>Câu đúng</div>
            <div style={{ fontSize: TYPE.h2, fontWeight: 800, lineHeight: 1.3, display: "flex", flexWrap: "wrap", columnGap: 18 }}>
              {rTok.map((w, i) => {
                const start = acc;
                acc += w.length + 1;
                const shown = Math.max(0, Math.min(w.length, nChars - start));
                const isNew = !wrongSet.has(clean(w));
                const doneAt = typeAt + Math.ceil(((start + w.length) / 26) * fps);
                const inner = (
                  <>
                    <span>{w.slice(0, shown)}</span>
                    <span style={{ opacity: 0 }}>{w.slice(shown)}</span>
                  </>
                );
                return (
                  <span key={i} style={{ position: "relative" }}>
                    {isNew ? <Marker startF={doneAt + 2} dur={8}>{inner}</Marker> : inner}
                    {typing && nChars >= start && nChars < start + w.length + 1 && blink(frame, 14) && (
                      <span style={{ position: "absolute", left: `${(shown / Math.max(1, w.length)) * 100}%`, top: 6, bottom: 6, width: 6, background: ctx.accent }} />
                    )}
                  </span>
                );
              })}
            </div>
          </Card>
        </div>
        {data.note && (
          <div style={{ ...fadeUp(frame, noteAt, 12), display: "flex", alignItems: "center", gap: 24, marginTop: 34, paddingLeft: 140 }}>
            <Illus name={data.illus || "light-bulb"} size={84} />
            <FitText text={data.note} max={TYPE.body} min={TYPE.small} target={52} weight={600} align="left" color={COLORS.ink2} />
          </div>
        )}
      </div>
    </Stage>
  );
};

// =====================================================================================
// CMP-08 Thanh đôi: hai thanh đứng chạy lên, số chạy theo. Bắt buộc có nguồn.
//   a{label, value, illus?}, b{…}, unit, source, title?, note?, highlight? ("a" | "b")
// =====================================================================================
const Cmp08 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const { a, b } = data;
  const max = Math.max(Number(a.value), Number(b.value)) || 1;
  const run = Math.round(fps * 1.2);
  const aAt = 10;
  const bAt = aAt + Math.round(fps * 0.5);
  const doneF = bAt + run;
  const barMaxH = data.title ? 330 : 380;
  const bar = (s, at, key) => {
    const v = countTo(frame, at, run, s.value);
    const h = (v / max) * barMaxH;
    const hl = data.highlight === key;
    const color = hl ? COLORS.marker : key === "a" ? COLORS.ink2 : ctx.accent;
    const dec = decOf(s.value);
    return (
      <div style={{ width: 400, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ height: barMaxH + 110, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center" }}>
          <div style={{ opacity: progress(frame, at, 6), display: "flex", alignItems: "baseline", gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: TYPE.h1, fontWeight: 800, color: hl ? COLORS.ink : color, fontVariantNumeric: "tabular-nums" }}>{fmt(v, dec)}</span>
          </div>
          <div style={{ width: 230, height: Math.max(4, h), borderRadius: "22px 22px 6px 6px", background: color, boxShadow: hl ? `0 0 0 6px ${COLORS.markerSoft}` : undefined }} />
        </div>
        <div style={{ ...fadeUp(frame, at + 6, 10), marginTop: 18, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, width: 400 }}>
          <Illus name={s.illus || "bar-chart"} size={72} />
          <div style={{ fontSize: TYPE.small, fontWeight: 700, lineHeight: 1.15, textAlign: "center", textWrap: "balance" }}>{s.label}</div>
        </div>
      </div>
    );
  };
  return (
    <Stage accent={ctx.accent}>
      <Title text={data.title} frame={frame} fps={fps} style={{ marginBottom: 18 }} />
      <div style={{ display: "flex", alignItems: "center", gap: 60, width: W }}>
        <div style={{ position: "relative", display: "flex", gap: 30, alignItems: "flex-start" }}>
          <div style={{ position: "absolute", left: -20, right: -20, top: barMaxH + 110, height: 6, borderRadius: 3, background: COLORS.ink }} />
          {bar(a, aAt, "a")}
          {bar(b, bAt, "b")}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ ...pop(frame, fps, 4), alignSelf: "flex-start" }}><Kicker accent={ctx.accent}><Icon name="ruler" size={36} color="#fff" /> Đơn vị: {data.unit}</Kicker></div>
          {data.note && (
            <div style={pop(frame, fps, doneF + 4)}>
              <Card tone="marker" style={{ border: `3px solid ${COLORS.marker}`, display: "flex", alignItems: "center", gap: 24 }}>
                <Illus name={data.noteIllus || "balance-scale"} size={110} />
                <FitText text={data.note} max={TYPE.h2} min={TYPE.body} target={26} weight={800} align="left" />
              </Card>
            </div>
          )}
          <div style={{ ...fadeUp(frame, doneF + 10, 10), fontSize: 40, color: COLORS.muted, fontWeight: 600 }}>Nguồn: {data.source}</div>
        </div>
      </div>
    </Stage>
  );
};

// =====================================================================================
// CMP-09 Lật thẻ hiểu lầm: mặt trước "Hiểu lầm", lật ra "Thực ra".
//   myth, fact, source?, label?, illusMyth?, illusFact?
// =====================================================================================
const Cmp09 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const flipAt = msToFrames(400 + readMs(`Nhiều người nghĩ ${data.myth}`, ctx), fps);
  const p = progress(frame, flipAt, 22, EASE_STD);
  const rot = 180 * p;
  const lift = 1 + 0.06 * Math.sin(p * Math.PI);
  const wob = frame > flipAt - 14 && frame < flipAt ? Math.sin((frame - flipAt) * 1.6) * 2.5 : 0;
  const fl = flash(frame, flipAt + 22, 10);
  const enter = pop(frame, fps, 0);
  const cardW = 1560;
  const cardH = data.source ? 560 : 600;
  const face = (back) => (
    <div style={{ position: "absolute", inset: 0, borderRadius: 44, background: back ? COLORS.pineSoft : COLORS.coralSoft, border: `4px solid ${back ? ctx.accent : COLORS.coral}`, backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: back ? "rotateY(180deg)" : "none", display: "flex", alignItems: "center", gap: 56, padding: "0 80px", boxShadow: "0 26px 60px rgba(23,32,51,.16)" }}>
      <IllusBadge name={back ? data.illusFact || "light-bulb" : data.illusMyth || "thinking-face"} size={300} bg={COLORS.surface} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 26 }}>
        <Pill bg={back ? ctx.accent : COLORS.coral} icon={back ? "lightbulb" : "triangle-alert"}>{back ? "Thực ra" : data.label || "Hiểu lầm"}</Pill>
        {!back && <div style={{ fontSize: TYPE.small, fontWeight: 600, color: COLORS.muted }}>Nhiều người nghĩ:</div>}
        <FitText text={back ? data.fact : `“${data.myth}”`} max={TYPE.h2} min={TYPE.small} target={72} weight={800} align="left" color={back ? COLORS.ink : COLORS.ink2} />
      </div>
    </div>
  );
  return (
    <Stage accent={ctx.accent}>
      <div style={{ perspective: 2200, opacity: enter.opacity, transform: enter.transform }}>
        <div style={{ position: "relative", width: cardW, height: cardH, transformStyle: "preserve-3d", transform: `rotateY(${rot}deg) rotateZ(${wob}deg) scale(${lift})` }}>
          {face(false)}
          {face(true)}
        </div>
      </div>
      <div style={{ position: "absolute", inset: -200, background: COLORS.surface, opacity: fl * 0.6, pointerEvents: "none" }} />
      {data.source && <div style={{ ...fadeUp(frame, flipAt + 26, 10), marginTop: 34, fontSize: 40, color: COLORS.muted, fontWeight: 600 }}>Nguồn: {data.source}</div>}
    </Stage>
  );
};

// =====================================================================================
// CMP-10 Nhiều vai cùng nhìn: một vấn đề ở trên, 2–4 thẻ vai bên dưới, mỗi vai một góc nhìn.
//   issue, views[2–4]{role, view, illus?}, kicker?, illus?
// =====================================================================================
const Cmp10 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const n = data.views.length;
  const p = plan([data.issue, ...data.views.map((v) => `${v.role} ${v.view}`)], { level: ctx.level, lead: 300, gap: 200 });
  const at = (i) => msToFrames(p.starts[i], fps);
  const gap = n >= 4 ? 28 : 44;
  const cw = (W - gap * (n - 1)) / n;
  const lineH = 96;
  const defIll = ["office-worker", "woman-office-worker", "man-cook", "health-worker"];
  return (
    <Stage accent={ctx.accent}>
      <div style={{ ...pop(frame, fps, 0), display: "flex", alignItems: "center", gap: 30, background: COLORS.ink, color: "#fff", borderRadius: 36, padding: "26px 50px", maxWidth: 1500 }}>
        <Illus name={data.illus || "magnifying-glass-tilted-left"} size={110} style={{ transform: `rotate(${idle(frame, 6, 70)}deg)` }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: TYPE.small - 4, fontWeight: 700, color: COLORS.marker }}>{data.kicker || "Cùng một chuyện"}</div>
          <FitText text={data.issue} max={TYPE.h2} min={TYPE.small} target={36} color="#fff" align="left" />
        </div>
      </div>
      <svg width={W} height={lineH} style={{ overflow: "visible" }}>
        {data.views.map((_, i) => {
          const x = cw / 2 + i * (cw + gap);
          const d = `M ${W / 2} 0 C ${W / 2} ${lineH * 0.6}, ${x} ${lineH * 0.4}, ${x} ${lineH}`;
          const len = Math.abs(x - W / 2) + lineH * 1.3;
          const pr = progress(frame, at(i + 1) - 12, 12);
          return <path key={i} d={d} fill="none" stroke={ctx.accent} strokeWidth={6} strokeLinecap="round" strokeDasharray={`${len}`} strokeDashoffset={len * (1 - pr)} opacity={0.6} />;
        })}
      </svg>
      <div style={{ display: "flex", gap, width: W, alignItems: "stretch" }}>
        {data.views.map((v, i) => (
          <div key={i} style={{ ...pop(frame, fps, at(i + 1)), width: cw }}>
            <Card style={{ height: "100%", minHeight: 380, padding: n >= 4 ? "26px 26px" : "30px 36px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, borderTop: `10px solid ${ctx.accent}` }}>
              <div style={{ transform: `translateY(${idle(frame + i * 20, 5, 100)}px)` }}><Illus name={v.illus || defIll[i % 4]} size={n >= 4 ? 120 : 140} /></div>
              <div style={{ padding: "8px 24px", borderRadius: 999, background: ctx.accent, color: "#fff", fontSize: TYPE.small - 4, fontWeight: 800, textAlign: "center" }}>{v.role}</div>
              <FitText text={v.view} max={TYPE.body} min={TYPE.small} target={36} weight={700} />
            </Card>
          </div>
        ))}
      </div>
    </Stage>
  );
};

export const CMP2 = {
  "CMP-02": { name: "Trước – sau thanh trượt", family: "CMP", Component: Cmp02, limits: { before: [3, 20], after: [3, 20] },
    estimate: (d, c) => (d.title ? 500 : 200) + readMs(d.before, c) + 200 + 900 + readMs(d.after, { ...c, fresh: false }) + 700 },
  "CMP-03": { name: "Hai lựa chọn", family: "CMP", Component: Cmp03, limits: { "a.do": [4, 18], "a.result": [3, 16], "b.do": [4, 18], "b.result": [3, 16] },
    estimate: (d, c) => plan([d.a.do, d.a.result, d.b.do, d.b.result], { level: c.level, lead: lead03(d), gap: 250 }).endMs + 800 },
  "CMP-04": { name: "Đúng – sai", family: "CMP", Component: Cmp04, limits: { statement: [5, 20], why: [4, 24] },
    estimate: (d, c) => 400 + readMs(d.statement, c) + THINK + 700 + readMs(d.why, { ...c, fresh: false }) + 600 },
  "CMP-05": { name: "Bảng so sánh", family: "CMP", Component: Cmp05, limits: { columns: [2, 3], rows: [1, 5], cell: [1, 8] },
    estimate: (d, c) => plan(d.rows.map(rowText), { level: c.level, lead: lead05(d), gap: 150 }).endMs + 900 },
  "CMP-07": { name: "Sửa câu", family: "CMP", Component: Cmp07, limits: { wrong: [3, 12], right: [3, 12], note: [0, 20] },
    estimate: (d, c) => {
      const en = { ...c, lang: "en" };
      return 300 + readMs(d.wrong, en) + 750 + (d.right.length / 26) * 1000 + readMs(d.right, { ...en, fresh: false }) + (d.note ? 400 + readMs(d.note, { ...c, fresh: false }) : 0) + 500;
    } },
  "CMP-08": { name: "Thanh đôi", family: "CMP", Component: Cmp08, limits: { "a.label": [1, 10], "b.label": [1, 10], note: [0, 10] }, needsSource: true,
    estimate: (d, c) => 2100 + readMs(`${d.title || ""} ${d.a.label} ${d.b.label}`, c) + (d.note ? readMs(d.note, { ...c, fresh: false }) : 0) + readMs(d.source, { ...c, fresh: false }) * 0.5 + 900 },
  "CMP-09": { name: "Lật thẻ hiểu lầm", family: "CMP", Component: Cmp09, limits: { myth: [4, 20], fact: [4, 26] },
    estimate: (d, c) => 400 + readMs(`Nhiều người nghĩ ${d.myth}`, c) + 800 + readMs(`Thực ra ${d.fact}`, { ...c, fresh: false }) + (d.source ? 500 : 0) + 600 },
  "CMP-10": { name: "Nhiều vai cùng nhìn", family: "CMP", Component: Cmp10, limits: { issue: [4, 16], views: [2, 4], "views.view": [3, 14] },
    estimate: (d, c) => plan([d.issue, ...d.views.map((v) => `${v.role} ${v.view}`)], { level: c.level, lead: 300, gap: 200 }).endMs + 800 },
};
