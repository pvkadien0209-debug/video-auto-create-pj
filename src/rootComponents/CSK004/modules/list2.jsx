// list2.jsx — họ LIST (liệt kê), đợt 2: LIST-03 thẻ lật · LIST-04 đếm ngược top N · LIST-06 bậc thang · LIST-07 số lớn 1-2-3
//   · LIST-08 chồng thẻ · LIST-09 chip từ khoá · LIST-10 lộ trình · LIST-11 bánh xe
// Mỗi mục có ô hình: items[].illus (tên Fluent Emoji, xem core/illus-names.js) hoặc items[].icon (tên Lucide). Không ghi thì dùng hình mặc định.
import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { FitText, Icon, Illus, IllusBadge, Kicker, Stage } from "../core/ui.jsx";
import { EASE_STD, fadeUp, flash, flyIn, idle, pop, progress, slam } from "../core/motion.js";
import { msToFrames, plan } from "../core/timing.js";

// ---------- phần dùng chung trong tệp ----------
const W = 1728; // bề ngang vùng an toàn
const H = 770; // chiều cao vùng an toàn (đã chừa dải phụ đề)

const useFF = () => ({ frame: useCurrentFrame(), fps: useVideoConfig().fps });
const txt = (x) => (typeof x === "string" ? x : x?.text || x?.label || "");

/** Hình của một mục: illus (màu) nếu có, không thì icon Lucide trong ô vuông bo góc, không nữa thì hình mặc định. */
const Pic = ({ item, def = "sparkles", size = 96, accent = COLORS.pine, solid = false }) => {
  const it = typeof item === "object" && item ? item : {};
  if (it.icon && !it.illus) {
    return (
      <div style={{ width: size, height: size, borderRadius: size * 0.28, background: solid ? accent : COLORS.pineSoft, display: "grid", placeItems: "center", flex: "none" }}>
        <Icon name={it.icon} size={size * 0.6} color={solid ? COLORS.surface : accent} stroke={2.4} />
      </div>
    );
  }
  return <div style={{ flex: "none", width: size, height: size }}><Illus name={it.illus || def} size={size} /></div>;
};

/** Tiêu đề màn: hình tròn nhỏ + chữ. */
const Head = ({ text, illus, frame, fps, align = "left", color = COLORS.ink, style }) =>
  text ? (
    <div style={{ display: "flex", alignItems: "center", gap: 26, justifyContent: align === "left" ? "flex-start" : "center", ...style }}>
      {illus && <div style={pop(frame, fps, 0)}><IllusBadge name={illus} size={104} /></div>}
      <div style={fadeUp(frame, 2, 10)}><FitText text={text} max={TYPE.h2} min={TYPE.small} target={36} align={align} color={color} /></div>
    </div>
  ) : null;

const sched = (texts, ctx, fps, lead, gap = 300) => {
  const p = plan(texts, { level: ctx.level, lead, gap });
  return { st: p.starts.map((ms) => msToFrames(ms, fps)), endMs: p.endMs };
};
const estOf = (texts, ctx, lead, gap = 300, tail = 900) => plan(texts, { level: ctx.level, lead, gap }).endMs + tail;
const curOf = (frame, st) => Math.max(-1, st.filter((s) => frame >= s).length - 1);

// =====================================================================================
// LIST-03 Thẻ lật: các thẻ úp hiện cùng lúc, lần lượt lật ra mặt sau.  items[2–4]{front, back, illus?|icon?, backIllus?}
// =====================================================================================
const lead03 = (d) => (d.title ? 1400 : 900);
const texts03 = (d) => d.items.flatMap((x) => [x.front, x.back]);
const List03 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const items = data.items;
  const n = items.length;
  const { st } = sched(texts03(data), ctx, fps, lead03(data), 200);
  const w = n <= 2 ? 660 : n === 3 ? 540 : 404;
  const h = data.title ? 600 : 660;
  return (
    <Stage accent={ctx.accent}>
      <Head text={data.title} illus={data.illus || "red-question-mark"} frame={frame} fps={fps} align="center" style={{ marginBottom: 40 }} />
      <div style={{ display: "flex", gap: 30, justifyContent: "center" }}>
        {items.map((x, i) => {
          const flipAt = st[2 * i + 1];
          const p = progress(frame, flipAt - 10, 16, EASE_STD);
          const ang = 180 * p;
          const back = ang >= 90;
          const lift = 1 + 0.07 * Math.sin(Math.PI * p);
          const inn = pop(frame, fps, 4 + i * 5);
          const isNow = frame >= st[2 * i] && (i === n - 1 || frame < st[2 * i + 2]);
          return (
            <div key={i} style={{ ...inn, perspective: 1800 }}>
              <div style={{ width: w, height: h, transform: `rotateY(${ang}deg) scale(${lift}) translateY(${idle(frame + i * 30, 4, 110)}px)` }}>
                {!back ? (
                  <div style={{ width: "100%", height: "100%", borderRadius: 36, background: COLORS.surface, border: `4px solid ${isNow ? ctx.accent : COLORS.line}`, boxShadow: "0 22px 50px rgba(23,32,51,.10)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 30, padding: "40px 34px", boxSizing: "border-box", position: "relative" }}>
                    <div style={{ position: "absolute", top: 22, right: 22, width: 64, height: 64, borderRadius: "50%", background: COLORS.pineSoft, display: "grid", placeItems: "center" }}>
                      <Icon name="refresh-cw" size={36} color={ctx.accent} stroke={2.6} />
                    </div>
                    <div style={{ position: "absolute", top: 22, left: 26, fontSize: TYPE.small, fontWeight: 800, color: ctx.accent }}>{i + 1}</div>
                    <Pic item={x} def="red-question-mark" size={n >= 4 ? 140 : 170} accent={ctx.accent} />
                    <FitText text={x.front} max={n >= 4 ? 60 : TYPE.h2} min={TYPE.small} target={16} />
                  </div>
                ) : (
                  <div style={{ width: "100%", height: "100%", transform: "rotateY(180deg)", borderRadius: 36, background: ctx.accent, boxShadow: "0 22px 50px rgba(23,32,51,.16)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 26, padding: "40px 34px", boxSizing: "border-box" }}>
                    <div style={{ flex: "none", width: n >= 4 ? 128 : 150, height: n >= 4 ? 128 : 150, borderRadius: "50%", background: COLORS.surface, display: "grid", placeItems: "center" }}>
                      <Illus name={x.backIllus || "light-bulb"} size={n >= 4 ? 84 : 100} />
                    </div>
                    {n < 4 && <div style={{ fontSize: TYPE.small, fontWeight: 700, color: COLORS.pineSoft, textAlign: "center" }}>{x.front}</div>}
                    <FitText text={x.back} max={n >= 4 ? 50 : 58} min={TYPE.small} target={22} color={COLORS.surface} weight={700} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Stage>
  );
};

// =====================================================================================
// LIST-04 Đếm ngược top N: nền tối, số lớn đập vào, N → 1.  items[3–5]{text, rank?, illus?|icon?}  (items[0] = hạng 1 nếu không ghi rank)
// =====================================================================================
const order04 = (d) => d.items.map((x, i) => ({ ...x, rank: x.rank ?? i + 1 })).sort((a, b) => b.rank - a.rank);
const lead04 = 1500;
const List04 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const seq = order04(data); // thứ tự hiện: hạng lớn trước
  const n = seq.length;
  const { st } = sched(seq.map((x) => x.text), ctx, fps, lead04, 400);
  const cur = curOf(frame, st);
  const c = cur >= 0 ? seq[cur] : null;
  const s = c ? slam(frame, fps, st[cur], 2.4) : { opacity: 0, transform: "scale(1)" };
  const fl = c ? flash(frame, st[cur], 10) : 0;
  const top = c && c.rank === 1;
  const rowH = Math.min(140, Math.floor((H - 130 - (n - 1) * 16) / n));
  const ink = COLORS.ink;
  return (
    <Stage accent={ctx.accent} bg={ink}>
      <div style={{ width: W, height: H, position: "relative", color: COLORS.surface }}>
        {/* tiêu đề */}
        <div style={{ ...fadeUp(frame, 0, 10), display: "flex", alignItems: "center", gap: 24, height: 100 }}>
          <Kicker accent={COLORS.coral} style={{ flex: "none", whiteSpace: "nowrap" }}><Icon name="timer" size={38} color={COLORS.surface} /> Đếm ngược</Kicker>
          <FitText text={data.title || `Top ${n}`} max={TYPE.h2} min={TYPE.small} target={34} color={COLORS.surface} align="left" />
        </div>
        {/* bên trái: số rất lớn */}
        <div style={{ position: "absolute", left: 0, top: 130, width: 620, height: H - 130, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", width: 540, height: 540, borderRadius: "50%", border: `6px solid ${top ? COLORS.marker : ctx.accent}`, opacity: 0.35 + 0.6 * fl, transform: `scale(${1 + 0.25 * (1 - fl) * (c ? 1 : 0)})` }} />
          <div style={{ position: "absolute", width: 460, height: 460, borderRadius: "50%", background: top ? COLORS.marker : ctx.accent, opacity: 0.16 }} />
          {c && (
            <div key={cur} style={{ ...s, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: 300, lineHeight: 0.9, fontWeight: 800, color: top ? COLORS.marker : COLORS.surface, letterSpacing: "-0.04em" }}>
                <span style={{ fontSize: 150, opacity: 0.7 }}>#</span>{c.rank}
              </div>
              <div style={{ ...pop(frame, fps, st[cur] + 8), marginTop: 6, transform: `${pop(frame, fps, st[cur] + 8).transform} translateY(${idle(frame, 6, 90)}px)` }}>
                <Pic item={c} def={top ? "1st-place-medal" : "warning"} size={170} accent={ctx.accent} solid />
              </div>
            </div>
          )}
        </div>
        {/* bên phải: bảng xếp hạng, hạng 1 trên cùng, điền từ dưới lên */}
        <div style={{ position: "absolute", left: 660, right: 0, top: 130, display: "flex", flexDirection: "column", gap: 16 }}>
          {Array.from({ length: n }).map((_, slot) => {
            const k = n - 1 - slot; // seq xếp hạng giảm dần, nên ô trên cùng (hạng nhỏ nhất) là phần tử cuối
            const x = seq[k];
            const shown = frame >= st[k];
            const now = k === cur;
            const r1 = x.rank === 1;
            return (
              <div key={slot} style={{ height: rowH, borderRadius: 26, border: `3px ${shown ? "solid" : "dashed"} ${shown ? (now ? (r1 ? COLORS.marker : ctx.accent) : COLORS.ink2) : COLORS.muted}`, background: shown ? (now ? (r1 ? COLORS.marker : ctx.accent) : COLORS.ink2) : "transparent", display: "flex", alignItems: "center", gap: 26, padding: "0 30px", boxSizing: "border-box", opacity: shown ? 1 : 0.5 }}>
                <div style={{ width: 76, height: 76, borderRadius: "50%", flex: "none", background: shown ? COLORS.surface : "transparent", border: shown ? "none" : `3px solid ${COLORS.muted}`, color: r1 && shown ? COLORS.ink : ctx.accent, display: "grid", placeItems: "center", fontSize: 46, fontWeight: 800 }}>
                  <span style={{ color: shown ? (r1 ? COLORS.ink : ctx.accent) : COLORS.muted }}>{x.rank}</span>
                </div>
                {shown ? (
                  <div style={{ ...flyIn(frame, fps, st[k], "right", 120), display: "flex", alignItems: "center", gap: 24, minWidth: 0 }}>
                    <Pic item={x} def={r1 ? "1st-place-medal" : "warning"} size={rowH - 46} accent={ctx.accent} />
                    <div style={{ fontSize: rowH < 120 ? TYPE.small : 48, fontWeight: 700, lineHeight: 1.15, color: now && r1 ? COLORS.ink : COLORS.surface }}>{x.text}</div>
                  </div>
                ) : (
                  <div style={{ fontSize: TYPE.small, fontWeight: 700, color: COLORS.muted }}>? ? ?</div>
                )}
              </div>
            );
          })}
        </div>
        {/* loé sáng khi số đập vào */}
        <div style={{ position: "absolute", inset: -200, background: top ? COLORS.marker : COLORS.surface, opacity: fl * 0.18, pointerEvents: "none" }} />
      </div>
    </Stage>
  );
};

// =====================================================================================
// LIST-06 Bậc thang: các bậc mọc lên từ trái sang phải, người leo nhảy lên từng bậc, bậc cuối cắm cờ.
// steps[3–5]{text, illus?|icon?}  (+ climber?, goalIllus?)
// =====================================================================================
const lead06 = (d) => (d.title ? 1300 : 600);
const List06 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const steps = data.steps;
  const n = steps.length;
  const { st } = sched(steps.map(txt), ctx, fps, lead06(data), 400);
  const cur = curOf(frame, st);
  const gap = 22;
  const bw = (W - gap * (n - 1)) / n;
  const base = 320;
  const topH = 520;
  const hOf = (i) => base + (n === 1 ? 0 : ((topH - base) * i) / (n - 1));
  // vị trí người leo: chỉ số liên tục giữa các bậc
  let pos = 0;
  for (let i = 1; i < n; i++) pos += progress(frame, st[i] - 2, 14, EASE_STD);
  const i0 = Math.floor(pos);
  const fr = pos - i0;
  const i1 = Math.min(n - 1, i0 + 1);
  const cx = (i0 + (i1 - i0) * fr) * (bw + gap) + bw / 2;
  const cy = hOf(i0) + (hOf(i1) - hOf(i0)) * fr + Math.sin(Math.PI * fr) * 70;
  const done = frame >= st[n - 1] + 14;
  const fs = n >= 5 ? TYPE.small : 48;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ width: W, height: H, position: "relative" }}>
        <Head text={data.title} illus={data.illus || "chart-increasing"} frame={frame} fps={fps} style={{ height: 110 }} />
        {steps.map((x, i) => {
          const g = progress(frame, st[i] - 6, 14);
          const now = i === cur;
          const past = i < cur;
          const h = hOf(i);
          return (
            <div key={i} style={{ position: "absolute", left: i * (bw + gap), bottom: 0, width: bw, height: h * g, overflow: "hidden", borderRadius: "28px 28px 8px 8px", background: now ? ctx.accent : past ? COLORS.pineSoft : COLORS.surface, border: `3px solid ${now || past ? ctx.accent : COLORS.line}`, boxSizing: "border-box", boxShadow: now ? "0 20px 44px rgba(23,32,51,.18)" : "none" }}>
              <div style={{ opacity: progress(frame, st[i] + 2, 10), padding: "24px 26px", display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ width: 70, height: 70, borderRadius: "50%", background: now ? COLORS.surface : ctx.accent, color: now ? ctx.accent : COLORS.surface, display: "grid", placeItems: "center", fontSize: 42, fontWeight: 800 }}>{i + 1}</div>
                  <div style={pop(frame, fps, st[i] + 4)}><Pic item={x} def="footprints" size={n >= 5 ? 82 : 96} accent={ctx.accent} /></div>
                </div>
                <div style={{ fontSize: fs, fontWeight: 700, lineHeight: 1.18, color: now ? COLORS.surface : COLORS.ink }}>{txt(x)}</div>
              </div>
            </div>
          );
        })}
        {/* cờ đích trên bậc cuối */}
        <div style={{ position: "absolute", left: (n - 1) * (bw + gap) + bw - 120, bottom: hOf(n - 1) - 6, ...pop(frame, fps, st[n - 1] + 12) }}>
          <div style={{ transform: `rotate(${idle(frame, 4, 70)}deg)`, transformOrigin: "bottom left" }}><Illus name={data.goalIllus || "chequered-flag"} size={110} /></div>
        </div>
        {/* người leo */}
        {cur >= 0 && (
          <div style={{ position: "absolute", left: cx - 60, bottom: cy - 4, opacity: progress(frame, st[0], 8) }}>
            <Illus name={done && data.winIllus !== false ? data.winIllus || "person-raising-hand" : data.climber || "person-walking-facing-right"} size={120} />
          </div>
        )}
      </div>
    </Stage>
  );
};

// =====================================================================================
// LIST-07 Số lớn 1-2-3: mỗi lần một mục, số rất lớn bên trái, hình + chữ bên phải; dải nhỏ phía trên cho biết đang ở mục mấy.
// items[2–4]{text, detail?, illus?|icon?}
// =====================================================================================
const texts07 = (d) => d.items.map((x) => `${txt(x)} ${x.detail || ""}`);
const List07 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const items = data.items;
  const n = items.length;
  const { st } = sched(texts07(data), ctx, fps, data.title ? 900 : 300, 500);
  const cur = Math.max(0, curOf(frame, st));
  return (
    <Stage accent={ctx.accent}>
      <div style={{ width: W, height: H, position: "relative" }}>
        {/* dải tiến độ */}
        <div style={{ ...fadeUp(frame, 0, 10), display: "flex", alignItems: "center", gap: 22, height: 110 }}>
          {data.title && <div style={{ fontSize: TYPE.body, fontWeight: 800, marginRight: 18, maxWidth: 760 }}>{data.title}</div>}
          {items.map((x, i) => {
            const on = i <= cur && frame >= st[i];
            return (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 22px 10px 12px", borderRadius: 999, background: i === cur ? ctx.accent : on ? COLORS.pineSoft : COLORS.surface, border: `3px solid ${on ? ctx.accent : COLORS.line}`, opacity: on ? 1 : 0.55 }}>
                <Pic item={x} def="sparkles" size={58} accent={ctx.accent} />
                <span style={{ fontSize: TYPE.small, fontWeight: 800, color: i === cur ? COLORS.surface : ctx.accent }}>{i + 1}</span>
              </div>
            );
          })}
        </div>
        {items.map((x, i) => {
          if (frame < st[i] - 1) return null;
          const out = i < n - 1 ? progress(frame, st[i + 1] - 8, 8) : 0;
          if (out >= 1) return null;
          const num = flyIn(frame, fps, st[i], "left", 260);
          return (
            <div key={i} style={{ position: "absolute", left: 0, right: 0, top: 130, bottom: 0, display: "flex", alignItems: "center", opacity: 1 - out, transform: `translateY(${-60 * out}px)` }}>
              <div style={{ ...num, width: 480, flex: "none", fontSize: 470, fontWeight: 800, lineHeight: 0.8, color: ctx.accent, textAlign: "center", letterSpacing: "-0.05em" }}>{i + 1}</div>
              <div style={{ width: 8, alignSelf: "stretch", margin: "40px 60px", borderRadius: 8, background: ctx.accent, opacity: 0.25, transform: `scaleY(${progress(frame, st[i] + 2, 12)})` }} />
              <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 50 }}>
                <div style={{ ...pop(frame, fps, st[i] + 6), position: "relative", flex: "none" }}>
                  <div style={{ width: 300, height: 300, borderRadius: "50%", background: COLORS.pineSoft, display: "grid", placeItems: "center", transform: `translateY(${idle(frame, 6, 110)}px)` }}>
                    <Pic item={x} def="sparkles" size={x.icon && !x.illus ? 180 : 200} accent={ctx.accent} />
                  </div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={fadeUp(frame, st[i] + 4, 10)}><FitText text={txt(x)} max={TYPE.h1} min={TYPE.h2 - 8} target={18} align="left" /></div>
                  {x.detail && <div style={{ ...fadeUp(frame, st[i] + 12, 10), marginTop: 22, fontSize: TYPE.body, fontWeight: 500, color: COLORS.ink2, lineHeight: 1.3 }}>{x.detail}</div>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Stage>
  );
};

// =====================================================================================
// LIST-08 Chồng thẻ: thẻ mới vào trên cùng, đẩy thẻ cũ xuống và thu gọn; bên trái là hình lớn của thẻ đang nói.
// items[2–5]{title, detail≤12 âm tiết, illus?|icon?}
// =====================================================================================
const texts08 = (d) => d.items.map((x) => `${x.title} ${x.detail || ""}`);
const List08 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const items = data.items;
  const n = items.length;
  const { st } = sched(texts08(data), ctx, fps, 900, 300);
  const cur = Math.max(0, curOf(frame, st));
  const FULL = 236, MINI = 92, G1 = 22, G2 = 14;
  const leftW = 560;
  const cx = items[cur];
  return (
    <Stage accent={ctx.accent}>
      <div style={{ width: W, height: H, position: "relative" }}>
        {/* bên trái: tiêu đề + hình lớn của thẻ hiện tại */}
        <div style={{ position: "absolute", left: 0, top: 0, width: leftW, height: H, display: "flex", flexDirection: "column", justifyContent: "center", gap: 40 }}>
          {data.title && <div style={fadeUp(frame, 0, 10)}><FitText text={data.title} max={TYPE.h2} min={TYPE.small} target={26} align="left" /></div>}
          <div style={{ position: "relative", width: 420, height: 420, alignSelf: "center" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: COLORS.pineSoft }} />
            <div style={{ position: "absolute", inset: 30, borderRadius: "50%", border: `4px dashed ${ctx.accent}`, opacity: 0.35, transform: `rotate(${frame * 0.4}deg)` }} />
            <div key={cur} style={{ ...pop(frame, fps, st[cur]), position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
              <div style={{ transform: `translateY(${idle(frame, 7, 110)}px)` }}><Pic item={cx} def="bookmark-tabs" size={250} accent={ctx.accent} /></div>
            </div>
            <div style={{ position: "absolute", right: 0, top: 10, width: 96, height: 96, borderRadius: "50%", background: ctx.accent, color: COLORS.surface, display: "grid", placeItems: "center", fontSize: 50, fontWeight: 800 }}>{cur + 1}</div>
          </div>
        </div>
        {/* bên phải: chồng thẻ */}
        <div style={{ position: "absolute", left: leftW + 48, right: 0, top: 0, height: H }}>
          {items.map((x, k) => {
            if (frame < st[k] - 1) return null;
            let age = 0;
            for (let j = k + 1; j < n; j++) age += progress(frame, st[j], 14, EASE_STD);
            const a1 = Math.min(1, age);
            const y = age <= 1 ? (FULL + G1) * age : FULL + G1 + (age - 1) * (MINI + G2);
            const hh = FULL + (MINI - FULL) * a1;
            const ent = progress(frame, st[k], 12);
            const now = age < 0.5;
            return (
              <div key={k} style={{ position: "absolute", left: 0, right: 0, top: y, height: hh, transform: `translateY(${(1 - ent) * -90}px) scale(${0.94 + 0.06 * ent})`, opacity: ent * (1 - 0.25 * Math.min(1, Math.max(0, age - 0.5))), zIndex: k,
                borderRadius: 30, background: now ? COLORS.surface : COLORS.paper, border: `3px solid ${now ? ctx.accent : COLORS.line}`, boxShadow: now ? "0 24px 50px rgba(23,32,51,.14)" : "none", overflow: "hidden", boxSizing: "border-box",
                display: "flex", alignItems: "center", gap: 30, padding: `0 ${36 - 10 * a1}px` }}>
                <div style={{ width: 14, alignSelf: "stretch", margin: `${22 - 8 * a1}px 0`, borderRadius: 7, background: ctx.accent, opacity: now ? 1 : 0.4, flex: "none" }} />
                <Pic item={x} def="bookmark-tabs" size={140 - 80 * a1} accent={ctx.accent} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: TYPE.h2 - 16 * a1 - (n >= 5 ? 4 : 0), fontWeight: 800, lineHeight: 1.12, whiteSpace: a1 > 0.5 ? "nowrap" : "normal", overflow: "hidden", textOverflow: "ellipsis" }}>{x.title}</div>
                  {x.detail && <div style={{ fontSize: TYPE.small + 2, fontWeight: 500, color: COLORS.ink2, lineHeight: 1.25, marginTop: 8, opacity: 1 - a1, maxHeight: 120 * (1 - a1), overflow: "hidden" }}>{x.detail}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Stage>
  );
};

// =====================================================================================
// LIST-09 Chip từ khoá: hình + tiêu đề ở tâm, các chip bung ra quanh tâm theo vòng elip, có dây nối.
// keywords[4–8] (chuỗi hoặc {text, illus?|icon?}), title?, illus? (hình ở tâm)
// =====================================================================================
const KW_ICONS = ["sparkles", "star", "check", "lightbulb", "target", "flag", "heart", "zap"];
const List09 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const kws = data.keywords.map((k, i) => (typeof k === "string" ? { text: k, icon: KW_ICONS[i % KW_ICONS.length] } : k));
  const n = kws.length;
  const { st } = sched(kws.map((k) => k.text), ctx, fps, data.title ? 1300 : 700, 150);
  const C = { x: W / 2, y: H / 2 };
  const rx = 620, ry = 310;
  const R = 190;
  const hub = pop(frame, fps, 0);
  return (
    <Stage accent={ctx.accent}>
      <div style={{ width: W, height: H, position: "relative" }}>
        <svg width={W} height={H} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
          <ellipse cx={C.x} cy={C.y} rx={rx} ry={ry} fill="none" stroke={COLORS.line} strokeWidth={3} strokeDasharray="6 14" opacity={progress(frame, 4, 14)} />
          {kws.map((k, i) => {
            const a = (-90 + 180 / n + (360 * i) / n) * (Math.PI / 180);
            const tx = C.x + rx * Math.cos(a), ty = C.y + ry * Math.sin(a);
            const sx = C.x + R * Math.cos(a) * 1.02, sy = C.y + R * Math.sin(a) * 1.02;
            const p = progress(frame, st[i] - 4, 12);
            return <line key={i} x1={sx} y1={sy} x2={sx + (tx - sx) * p * 0.8} y2={sy + (ty - sy) * p * 0.8} stroke={ctx.accent} strokeWidth={5} strokeLinecap="round" opacity={0.45} />;
          })}
        </svg>
        {/* tâm */}
        <div style={{ position: "absolute", left: C.x - R, top: C.y - R, width: 2 * R, height: 2 * R, borderRadius: "50%", background: ctx.accent, boxShadow: "0 26px 60px rgba(23,32,51,.20)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, padding: 40, boxSizing: "border-box", ...hub }}>
          <div style={{ position: "absolute", inset: -22, borderRadius: "50%", border: `4px solid ${ctx.accent}`, opacity: 0.25 + 0.1 * Math.sin(frame / 12), transform: `scale(${1 + 0.03 * Math.sin(frame / 12)})` }} />
          <div style={{ width: 150, height: 150, borderRadius: "50%", background: COLORS.surface, display: "grid", placeItems: "center", transform: `translateY(${idle(frame, 5, 100)}px)` }}>
            <Illus name={data.illus || "light-bulb"} size={104} />
          </div>
          {data.title && <FitText text={data.title} max={46} min={40} target={14} color={COLORS.surface} />}
        </div>
        {/* chip */}
        {kws.map((k, i) => {
          const a = (-90 + 180 / n + (360 * i) / n) * (Math.PI / 180);
          const tx = C.x + rx * Math.cos(a), ty = C.y + ry * Math.sin(a);
          const pp = progress(frame, st[i], 14, EASE_STD);
          const x = C.x + (tx - C.x) * pp, y = C.y + (ty - C.y) * pp;
          const sp = pop(frame, fps, st[i]);
          const fresh = frame >= st[i] && frame < st[i] + 24;
          return (
            <div key={i} style={{ position: "absolute", left: x, top: y + (pp >= 1 ? idle(frame + i * 17, 5, 120) : 0), width: "max-content", transform: `translate(-50%, -50%) ${sp.transform}`, opacity: frame < st[i] ? 0 : sp.opacity }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 30px 14px 14px", borderRadius: 999, background: COLORS.surface, border: `4px solid ${fresh ? COLORS.marker : ctx.accent}`, boxShadow: "0 14px 34px rgba(23,32,51,.12)", maxWidth: 470 }}>
                {k.illus ? (
                  <div style={{ width: 76, height: 76, borderRadius: "50%", background: COLORS.pineSoft, display: "grid", placeItems: "center", flex: "none" }}><Illus name={k.illus} size={56} /></div>
                ) : (
                  <div style={{ width: 76, height: 76, borderRadius: "50%", background: ctx.accent, display: "grid", placeItems: "center", flex: "none" }}><Icon name={k.icon || "sparkles"} size={42} color={COLORS.surface} stroke={2.6} /></div>
                )}
                <span style={{ fontSize: TYPE.small, fontWeight: 700, lineHeight: 1.15 }}>{k.text}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Stage>
  );
};

// =====================================================================================
// LIST-10 Lộ trình: con đường cong vẽ dần, các điểm dừng sáng lần lượt, điểm cuối là cờ đích.
// stops[3–6]{label, illus?|icon?}, title?
// =====================================================================================
const bez = (p0, c1, c2, p1, t) => {
  const u = 1 - t;
  return {
    x: u * u * u * p0.x + 3 * u * u * t * c1.x + 3 * u * t * t * c2.x + t * t * t * p1.x,
    y: u * u * u * p0.y + 3 * u * u * t * c1.y + 3 * u * t * t * c2.y + t * t * t * p1.y,
  };
};
const roadOf = (n) => {
  const pts = Array.from({ length: n }, (_, i) => ({ x: 120 + (i * (W - 240)) / (n - 1), y: i % 2 === 0 ? 540 : 330 }));
  const ext = [{ x: pts[0].x - 200, y: pts[0].y + 40 }, ...pts, { x: pts[n - 1].x + 200, y: pts[n - 1].y }];
  const segs = [];
  for (let i = 1; i < ext.length - 2; i++) {
    const p0 = ext[i], p1 = ext[i + 1];
    const c1 = { x: p0.x + (p1.x - ext[i - 1].x) / 6, y: p0.y + (p1.y - ext[i - 1].y) / 6 };
    const c2 = { x: p1.x - (ext[i + 2].x - p0.x) / 6, y: p1.y - (ext[i + 2].y - p0.y) / 6 };
    segs.push({ p0, c1, c2, p1 });
  }
  const d = `M ${pts[0].x} ${pts[0].y} ` + segs.map((s) => `C ${s.c1.x} ${s.c1.y}, ${s.c2.x} ${s.c2.y}, ${s.p1.x} ${s.p1.y}`).join(" ");
  // lấy mẫu để tính độ dài và điểm đầu bút
  const samples = [{ ...pts[0], L: 0 }];
  const cum = [0];
  let L = 0;
  segs.forEach((s) => {
    let prev = s.p0;
    for (let k = 1; k <= 40; k++) {
      const q = bez(s.p0, s.c1, s.c2, s.p1, k / 40);
      L += Math.hypot(q.x - prev.x, q.y - prev.y);
      samples.push({ ...q, L });
      prev = q;
    }
    cum.push(L);
  });
  const at = (len) => {
    const j = samples.findIndex((s) => s.L >= len);
    return j <= 0 ? samples[j === 0 ? 0 : samples.length - 1] : samples[j];
  };
  return { pts, d, cum, total: L, at };
};
const lead10 = (d) => (d.title ? 1300 : 700);
const List10 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const stops = data.stops;
  const n = stops.length;
  const { st } = sched(stops.map(txt), ctx, fps, lead10(data), 300);
  const road = roadOf(n);
  const base = progress(frame, 0, 18, EASE_STD);
  // phần đã đi: tới điểm i ở khung st[i]
  let len = 0;
  for (let i = 1; i < n; i++) len += (road.cum[i] - road.cum[i - 1]) * progress(frame, st[i] - 14, 14, EASE_STD);
  const tip = road.at(len);
  const cur = curOf(frame, st);
  const moving = cur < n - 1 && frame >= st[0];
  const labW = Math.min(600, ((W - 240) / (n - 1)) * 2 - 70);
  return (
    <Stage accent={ctx.accent}>
      <div style={{ width: W, height: H, position: "relative" }}>
        <Head text={data.title} illus={data.illus || "world-map"} frame={frame} fps={fps} style={{ height: 100 }} />
        <svg width={W} height={H} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
          <path d={road.d} fill="none" stroke={COLORS.line} strokeWidth={44} strokeLinecap="round" strokeDasharray={road.total} strokeDashoffset={road.total * (1 - base)} />
          <path d={road.d} fill="none" stroke={COLORS.surface} strokeWidth={5} strokeLinecap="round" strokeDasharray="22 26" opacity={base} />
          <path d={road.d} fill="none" stroke={ctx.accent} strokeWidth={16} strokeLinecap="round" strokeDasharray={`${len} ${road.total + 10}`} />
        </svg>
        {/* đầu bút: người đi */}
        {moving && (
          <div style={{ position: "absolute", left: tip.x - 45, top: tip.y - 100, transform: `translateY(${Math.abs(Math.sin(frame / 4)) * -8}px)` }}>
            <Illus name={data.walker || "person-walking-facing-right"} size={90} />
          </div>
        )}
        {stops.map((x, i) => {
          const p = road.pts[i];
          const on = frame >= st[i];
          const now = i === cur;
          const last = i === n - 1;
          const sp = pop(frame, fps, st[i]);
          const ring = on ? progress(frame, st[i], 20) : 0;
          const up = i % 2 === 1; // điểm cao: nhãn ở trên
          return (
            <React.Fragment key={i}>
              <div style={{ position: "absolute", left: p.x - 66, top: p.y - 66, width: 132, height: 132 }}>
                {on && <div style={{ position: "absolute", inset: -40 * ring, borderRadius: "50%", border: `5px solid ${ctx.accent}`, opacity: 1 - ring }} />}
                <div style={{ width: 132, height: 132, borderRadius: "50%", background: on ? (now ? ctx.accent : COLORS.surface) : COLORS.paper, border: `6px solid ${on ? ctx.accent : COLORS.line}`, display: "grid", placeItems: "center", boxSizing: "border-box", boxShadow: on ? "0 14px 30px rgba(23,32,51,.16)" : "none", opacity: base }}>
                  <div style={{ ...(on ? sp : { opacity: 0.3, transform: "scale(0.85)" }), filter: on ? "none" : "grayscale(1)" }}>
                    <Pic item={x} def={last ? "chequered-flag" : "round-pushpin"} size={78} accent={ctx.accent} solid={now} />
                  </div>
                </div>
                <div style={{ position: "absolute", left: -10, top: -10, width: 50, height: 50, borderRadius: "50%", background: on ? COLORS.ink : COLORS.line, color: COLORS.surface, display: "grid", placeItems: "center", fontSize: 28, fontWeight: 800, opacity: base }}>{i + 1}</div>
              </div>
              <div style={{ position: "absolute", left: Math.max(0, p.x - labW / 2), width: Math.min(W, p.x + labW / 2) - Math.max(0, p.x - labW / 2), ...(up ? { bottom: H - (p.y - 84) } : { top: p.y + 84 }), textAlign: p.x - labW / 2 < 0 ? "left" : p.x + labW / 2 > W ? "right" : "center", ...fadeUp(frame, st[i] + 2, 10) }}>
                <span style={{ fontSize: TYPE.small, fontWeight: now ? 800 : 700, lineHeight: 1.2, color: now ? COLORS.ink : COLORS.ink2, background: now ? COLORS.markerSoft : "transparent", borderRadius: 14, padding: now ? "4px 14px" : 0, boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>{txt(x)}</span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </Stage>
  );
};

// =====================================================================================
// LIST-11 Bánh xe: các mục xếp quanh một vòng, kim ở tâm quay tới từng mục, mục được chỉ sáng lên.
// items[4–6]{text, illus?|icon?}, title?, illus? (hình ở tâm)
// =====================================================================================
const List11 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const items = data.items;
  const n = items.length;
  const { st } = sched(items.map(txt), ctx, fps, data.title ? 1300 : 700, 300);
  const cur = curOf(frame, st);
  const C = { x: W / 2, y: H / 2 + 4 };
  const rx = 640, ry = 290;
  const R = 175;
  const angOf = (i) => -90 + 180 / n + (360 * i) / n; // lệch nửa ô để không mục nào nằm ngay trên/dưới tâm
  // kim: quay liên tục theo từng mục
  let turn = angOf(0) - 40 * (1 - progress(frame, st[0] - 10, 10, EASE_STD));
  for (let i = 1; i < n; i++) turn += (360 / n) * progress(frame, st[i] - 10, 12, EASE_STD);
  const hub = pop(frame, fps, 0);
  const cardW = n >= 6 ? 440 : 500;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ width: W, height: H, position: "relative" }}>
        <svg width={W} height={H} style={{ position: "absolute", inset: 0, overflow: "visible" }}>
          <ellipse cx={C.x} cy={C.y} rx={rx} ry={ry} fill="none" stroke={COLORS.line} strokeWidth={10} opacity={progress(frame, 2, 12)} />
          {items.map((_, i) => {
            const a = (angOf(i) * Math.PI) / 180;
            const lit = frame >= st[i];
            return <line key={i} x1={C.x + R * Math.cos(a)} y1={C.y + R * Math.sin(a)} x2={C.x + (rx - 40) * Math.cos(a)} y2={C.y + (ry - 30) * Math.sin(a)} stroke={i === cur ? ctx.accent : COLORS.line} strokeWidth={i === cur ? 8 : 5} strokeLinecap="round" opacity={lit ? 1 : 0.6} />;
          })}
        </svg>
        {/* tâm bánh xe */}
        <div style={{ position: "absolute", left: C.x - R, top: C.y - R, width: 2 * R, height: 2 * R, ...hub }}>
          <div style={{ position: "absolute", inset: -26, borderRadius: "50%", border: `6px dashed ${ctx.accent}`, opacity: 0.3, transform: `rotate(${frame * 0.6}deg)` }} />
          {/* kim */}
          <div style={{ position: "absolute", left: R, top: R, width: 0, height: 0, transform: `rotate(${turn}deg)` }}>
            <div style={{ position: "absolute", left: R - 6, top: -26, width: 0, height: 0, borderTop: "26px solid transparent", borderBottom: "26px solid transparent", borderLeft: `46px solid ${cur >= 0 ? COLORS.marker : COLORS.line}` }} />
          </div>
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: ctx.accent, boxShadow: "0 24px 56px rgba(23,32,51,.22)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: 34, boxSizing: "border-box" }}>
            <div style={{ transform: `translateY(${idle(frame, 5, 100)}px)` }}><Illus name={data.illus || "ferris-wheel"} size={data.title ? 110 : 170} /></div>
            {data.title && <FitText text={data.title} max={44} min={40} target={14} color={COLORS.surface} />}
          </div>
        </div>
        {/* các mục */}
        {items.map((x, i) => {
          const a = (angOf(i) * Math.PI) / 180;
          const px = C.x + rx * Math.cos(a), py = C.y + ry * Math.sin(a);
          const lit = frame >= st[i];
          const now = i === cur;
          const sp = pop(frame, fps, st[i]);
          const inn = fadeUp(frame, 4 + i * 3, 10);
          return (
            <div key={i} style={{ position: "absolute", left: px, top: py, transform: `translate(-50%, -50%) scale(${now ? 1.06 : 1})`, opacity: inn.opacity, zIndex: now ? 5 : 1 }}>
              <div style={{ width: cardW, display: "flex", alignItems: "center", gap: 18, padding: "16px 24px 16px 16px", borderRadius: 30, boxSizing: "border-box",
                background: now ? ctx.accent : COLORS.surface, border: `4px solid ${lit ? ctx.accent : COLORS.line}`, boxShadow: lit ? "0 16px 36px rgba(23,32,51,.14)" : "none" }}>
                <div style={{ width: 92, height: 92, borderRadius: "50%", background: now ? COLORS.surface : COLORS.pineSoft, display: "grid", placeItems: "center", flex: "none", filter: lit ? "none" : "grayscale(1)", opacity: lit ? 1 : 0.4 }}>
                  <div style={lit ? sp : {}}><Pic item={x} def="sparkles" size={64} accent={ctx.accent} /></div>
                </div>
                <div style={{ fontSize: TYPE.small, fontWeight: 700, lineHeight: 1.16, color: now ? COLORS.surface : COLORS.ink, opacity: lit ? 1 : 0.18 }}>{txt(x)}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Stage>
  );
};

export const LIST2 = {
  "LIST-03": { name: "Thẻ lật", family: "LIST", Component: List03, limits: { items: [2, 4] },
    estimate: (d, c) => estOf(texts03(d), c, lead03(d), 200, 1100) },
  "LIST-04": { name: "Đếm ngược top N", family: "LIST", Component: List04, limits: { items: [3, 5] },
    estimate: (d, c) => estOf(order04(d).map((x) => x.text), c, lead04, 400, 1000) },
  "LIST-06": { name: "Bậc thang", family: "LIST", Component: List06, limits: { steps: [3, 5] },
    estimate: (d, c) => estOf(d.steps.map(txt), c, lead06(d), 400, 1000) },
  "LIST-07": { name: "Số lớn 1-2-3", family: "LIST", Component: List07, limits: { items: [2, 4] },
    estimate: (d, c) => estOf(texts07(d), c, d.title ? 900 : 300, 500, 900) },
  "LIST-08": { name: "Chồng thẻ", family: "LIST", Component: List08, limits: { items: [2, 5] },
    estimate: (d, c) => estOf(texts08(d), c, 900, 300, 900) },
  "LIST-09": { name: "Chip từ khoá", family: "LIST", Component: List09, limits: { keywords: [4, 8] },
    estimate: (d, c) => estOf(d.keywords.map(txt), c, d.title ? 1300 : 700, 150, 1000) },
  "LIST-10": { name: "Lộ trình", family: "LIST", Component: List10, limits: { stops: [3, 6] },
    estimate: (d, c) => estOf(d.stops.map(txt), c, lead10(d), 300, 1000) },
  "LIST-11": { name: "Bánh xe", family: "LIST", Component: List11, limits: { items: [4, 6] },
    estimate: (d, c) => estOf(d.items.map(txt), c, d.title ? 1300 : 700, 300, 1000) },
};
