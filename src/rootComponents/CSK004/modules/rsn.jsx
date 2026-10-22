// rsn.jsx — họ RSN (lập luận): RSN-01 diễn dịch · RSN-02 quy nạp · RSN-03 phản ví dụ · RSN-04 loại trừ
// · RSN-05 nếu… thì… · RSN-08 nhưng / vì vậy. Chữ tiếng Việt; RSN-05 có thể kèm một câu mẫu tiếng Anh (`quote`).
import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { Card, FitText, Icon, Illus, IllusBadge, Stage } from "../core/ui.jsx";
import { fadeUp, flash, flyIn, idle, pop, progress, shake, slam } from "../core/motion.js";
import { msToFrames, plan, readList, readMs } from "../core/timing.js";

const W = 1728; // bề rộng vùng an toàn
const H = 770; // bề cao vùng an toàn (đã chừa dải phụ đề)
const asItem = (x) => (typeof x === "string" ? { text: x } : x || { text: "" });
const sizeFor = (text, big, small, limit) => (String(text).length > limit ? small : big);

/** Nhãn chữ in hoa nhỏ đặt trong thẻ. */
const Tag = ({ children, bg, color = "#fff", icon }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 20px", borderRadius: 999, background: bg, color, fontSize: 40, fontWeight: 800, letterSpacing: "0.04em" }}>
    {icon && <Icon name={icon} size={34} color={color} stroke={2.8} />}
    {children}
  </div>
);

// ---------- RSN-01 Diễn dịch: luận điểm ở trên, các lý do rơi xuống làm cột đỡ ----------
const REASON_ILLUS = ["check-mark-button", "magnifying-glass-tilted-left", "balance-scale", "bar-chart"];
const Rsn01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const reasons = data.reasons.map(asItem);
  const n = reasons.length;
  const p = plan([data.claim, ...reasons.map((r) => r.text), ...(data.example ? [data.example] : [])], { ...ctx, lead: 300, gap: 250 });
  const st = p.starts.map((ms) => msToFrames(ms, fps));
  const beam = progress(frame, st[1] - 14, 12);
  // mỗi lần một cột chạm đất, mái rung nhẹ
  const quake = reasons.reduce((acc, _, i) => {
    const s = shake(frame, st[i + 1] + 9, 8, 6);
    return { x: acc.x + s.x, y: acc.y + s.y };
  }, { x: 0, y: 0 });
  const colW = (1560 - (n - 1) * 28) / n;
  const fs = n >= 4 ? TYPE.small : 48;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ width: 1560, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* mái: luận điểm */}
        <div style={{ ...slam(frame, fps, 0, 1.8), width: "100%" }}>
          <div style={{ transform: `translate(${quake.x}px, ${quake.y}px)` }}>
            <Card tone="marker" style={{ display: "flex", alignItems: "center", gap: 34, padding: "26px 40px", border: `4px solid ${COLORS.marker}`, borderRadius: 28 }}>
              <IllusBadge name={data.illus || "light-bulb"} size={140} bg={COLORS.surface} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <Tag bg={COLORS.ink} icon="flag">{data.label || "LUẬN ĐIỂM"}</Tag>
                <FitText text={data.claim} max={TYPE.h2} min={48} target={44} align="left" style={{ marginTop: 12 }} />
              </div>
            </Card>
          </div>
        </div>
        {/* xà ngang nối mái với cột */}
        <div style={{ width: "96%", height: 16, borderRadius: 8, background: ctx.accent, marginTop: 14, transform: `scaleX(${beam})` }} />
        <div style={{ display: "flex", gap: 28, width: "100%", alignItems: "stretch" }}>
          {reasons.map((r, i) => {
            const s = flyIn(frame, fps, st[i + 1], "up", 520);
            return (
              <div key={i} style={{ ...s, width: colW, display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* đầu cột */}
                <div style={{ width: "86%", height: 22, background: ctx.accent, opacity: 0.55, borderRadius: "0 0 10px 10px" }} />
                <Card style={{ width: "100%", flex: 1, minHeight: data.example ? 250 : 320, padding: "22px 26px", borderTop: `8px solid ${ctx.accent}`, borderRadius: "10px 10px 28px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{ width: 60, height: 60, borderRadius: "50%", background: ctx.accent, color: "#fff", display: "grid", placeItems: "center", fontSize: 36, fontWeight: 800, flex: "none" }}>{i + 1}</div>
                    <div style={{ transform: `rotate(${idle(frame + i * 19, 4, 110)}deg)` }}><Illus name={r.illus || REASON_ILLUS[i % 4]} size={76} /></div>
                  </div>
                  <div style={{ fontSize: fs, fontWeight: 700, lineHeight: 1.22 }}>{r.text}</div>
                </Card>
              </div>
            );
          })}
        </div>
        {data.example && (
          <div style={{ ...fadeUp(frame, st.at(-1), 12), width: "100%", marginTop: 22 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 22, padding: "16px 30px", borderRadius: 22, background: COLORS.pineSoft, border: `3px dashed ${ctx.accent}` }}>
              <Illus name={data.exampleIllus || "pushpin"} size={64} />
              <div style={{ fontSize: 44, fontWeight: 800, color: ctx.accent, flex: "none" }}>Ví dụ:</div>
              <div style={{ fontSize: 44, fontWeight: 600, color: COLORS.ink2, lineHeight: 1.22 }}>{data.example}</div>
            </div>
          </div>
        )}
      </div>
    </Stage>
  );
};

// ---------- RSN-02 Quy nạp: 3 ví dụ ở dưới, mũi tên hội tụ, kết luận hiện ra ----------
const EX_ILLUS = ["ice-cream", "hot-beverage", "bar-chart"];
const Rsn02 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const ex = data.examples.map(asItem);
  const p = plan(ex.map((e) => e.text), { ...ctx, lead: 300, gap: 200 });
  const st = p.starts.map((ms) => msToFrames(ms, fps));
  const arrowsAt = msToFrames(p.endMs, fps);
  const concAt = arrowsAt + 18;
  const cw = 540, cy = 370, gx = (W - 3 * cw) / 2;
  const tops = [0, 1, 2].map((i) => [i * (cw + gx) + cw / 2, cy]);
  const target = [W / 2, 248];
  const fl = flash(frame, concAt, 10);
  const pending = frame < concAt;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ position: "relative", width: W, height: H }}>
        {/* ô kết luận: trước khi lộ là khung đứt nét có dấu hỏi */}
        <div style={{ position: "absolute", left: 214, width: 1300, top: 0, height: 230 }}>
          {pending ? (
            <div style={{ ...fadeUp(frame, 0, 10), width: "100%", height: "100%", borderRadius: 32, border: `5px dashed ${COLORS.line}`, display: "flex", alignItems: "center", justifyContent: "center", gap: 30 }}>
              <div style={{ transform: `scale(${1 + idle(frame, 0.05, 40)})` }}><Illus name="thinking-face" size={120} /></div>
              <div style={{ fontSize: TYPE.h2, fontWeight: 800, color: COLORS.muted }}>{data.kicker || "Ba ví dụ này nói lên điều gì?"}</div>
            </div>
          ) : (
            <div style={{ ...pop(frame, fps, concAt), width: "100%", height: "100%" }}>
              <Card tone="marker" style={{ height: "100%", boxSizing: "border-box", display: "flex", alignItems: "center", gap: 30, padding: "20px 40px", border: `5px solid ${COLORS.marker}` }}>
                <IllusBadge name={data.illus || "light-bulb"} size={170} bg={COLORS.surface} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Tag bg={ctx.accent} icon="sparkles">KẾT LUẬN</Tag>
                  <FitText text={data.conclusion} max={TYPE.h2} min={48} target={44} align="left" style={{ marginTop: 10 }} />
                </div>
              </Card>
            </div>
          )}
        </div>
        {/* mũi tên hội tụ */}
        <svg width={W} height={H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          {tops.map(([x, y], i) => {
            const pr = progress(frame, arrowsAt + i * 3, 14);
            const len = Math.hypot(target[0] - x, target[1] - y);
            const ex2 = x + (target[0] - x) * 0.92, ey2 = y + (target[1] - y) * 0.92;
            return (
              <g key={i}>
                <line x1={x} y1={y - 8} x2={ex2} y2={ey2} stroke={ctx.accent} strokeWidth={10} strokeLinecap="round" strokeDasharray={len} strokeDashoffset={len * (1 - pr)} />
                <circle cx={x} cy={y - 8} r={14} fill={ctx.accent} opacity={pr > 0 ? 1 : 0} />
              </g>
            );
          })}
          <circle cx={target[0]} cy={target[1] + 6} r={22} fill={COLORS.marker} opacity={progress(frame, arrowsAt + 14, 6)} />
        </svg>
        {/* ba ví dụ */}
        {ex.map((e, i) => (
          <div key={i} style={{ ...pop(frame, fps, st[i]), position: "absolute", left: i * (cw + gx), top: cy, width: cw }}>
            <Card style={{ height: 400, boxSizing: "border-box", padding: "22px 28px", display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Tag bg={COLORS.pineSoft} color={ctx.accent}>VÍ DỤ {i + 1}</Tag>
                <div style={{ transform: `translateY(${idle(frame + i * 30, 5, 100)}px)` }}><Illus name={e.illus || EX_ILLUS[i]} size={72} /></div>
              </div>
              <div style={{ fontSize: sizeFor(e.text, 48, TYPE.small, 50), fontWeight: 700, lineHeight: 1.2 }}>{e.text}</div>
            </Card>
          </div>
        ))}
        <div style={{ position: "absolute", inset: -40, background: "#fff", opacity: fl * 0.7, pointerEvents: "none" }} />
      </div>
    </Stage>
  );
};

// ---------- RSN-03 Phản ví dụ: "Quy tắc", rồi thẻ "Nhưng" lao vào làm nứt ----------
const CRACK = "M 70 10 L 120 70 L 96 110 L 160 168 L 132 220 L 190 290";
const CRACK2 = "M 120 70 L 190 84 L 240 60";
const Rsn03 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = plan([data.rule, data.counter, data.lesson], { ...ctx, lead: 300, gap: 300 });
  const [ruleAt, hitAt, lessonAt] = p.starts.map((ms) => msToFrames(ms, fps));
  const s = shake(frame, hitAt + 6, 14, 18);
  const fl = flash(frame, hitAt + 6, 8);
  const crack = progress(frame, hitAt + 6, 8);
  const hit = frame >= hitAt + 6;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ position: "relative", width: W, height: H, transform: `translate(${s.x}px, ${s.y}px)` }}>
        {/* thẻ quy tắc */}
        <div style={{ ...fadeUp(frame, ruleAt - 8, 12), position: "absolute", left: 0, top: 10, width: 1240 }}>
          <Card style={{ position: "relative", overflow: "hidden", minHeight: 270, display: "flex", alignItems: "center", gap: 34, padding: "30px 44px", background: hit ? COLORS.paper : COLORS.surface }}>
            <IllusBadge name={data.ruleIllus || "scroll"} size={150} />
            <div style={{ flex: 1, minWidth: 0, paddingRight: 110, opacity: hit ? 0.6 : 1 }}>
              <Tag bg={COLORS.ink} icon="book-open">{data.ruleLabel || "QUY TẮC"}</Tag>
              <FitText text={`“${data.rule}”`} max={TYPE.h2} min={48} target={40} align="left" style={{ marginTop: 12 }} />
            </div>
            {/* vết nứt */}
            <svg width={300} height={300} viewBox="0 0 300 300" style={{ position: "absolute", right: -20, top: -10 }}>
              <path d={CRACK} fill="none" stroke={COLORS.ink} strokeWidth={7} strokeLinejoin="round" strokeDasharray={420} strokeDashoffset={420 * (1 - crack)} />
              <path d={CRACK2} fill="none" stroke={COLORS.ink} strokeWidth={5} strokeLinejoin="round" strokeDasharray={160} strokeDashoffset={160 * (1 - crack)} />
            </svg>
          </Card>
        </div>
        {/* thẻ "nhưng" lao vào */}
        <div style={{ ...flyIn(frame, fps, hitAt, "right", 900), position: "absolute", right: 0, top: 300, width: 1180 }}>
          <div style={{ transform: "rotate(-2deg)" }}>
            <Card tone="coral" style={{ display: "flex", alignItems: "center", gap: 30, padding: "28px 40px", border: `5px solid ${COLORS.coral}` }}>
              <div style={{ transform: `scale(${1 + 0.25 * flash(frame, hitAt + 6, 14)})` }}><Illus name={data.counterIllus || "collision"} size={130} /></div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <Tag bg={COLORS.coral} icon="zap">NHƯNG</Tag>
                <FitText text={data.counter} max={56} min={TYPE.small} target={46} align="left" weight={700} style={{ marginTop: 12 }} />
              </div>
            </Card>
          </div>
        </div>
        {/* bài học */}
        <div style={{ ...fadeUp(frame, lessonAt, 12), position: "absolute", left: 0, right: 0, bottom: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 26, padding: "22px 36px", borderRadius: 28, background: COLORS.pineSoft, border: `4px solid ${ctx.accent}` }}>
            <div style={pop(frame, fps, lessonAt + 4)}><Illus name="light-bulb" size={86} /></div>
            <div style={{ fontSize: 48, fontWeight: 800, color: ctx.accent, flex: "none" }}>Rút ra:</div>
            <div style={{ fontSize: sizeFor(data.lesson, 52, 46, 60), fontWeight: 800, lineHeight: 1.2 }}>{data.lesson}</div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", inset: 0, background: COLORS.coral, opacity: fl * 0.25, pointerEvents: "none" }} />
    </Stage>
  );
};

// ---------- RSN-04 Loại trừ: các khả năng, gạch dần còn 1 ----------
const rsn04Timeline = (d, c) => {
  const qMs = d.question ? readMs(d.question, c) : 300;
  const optMs = readList(d.options, { ...c, fresh: false });
  const order = d.options.map((_, i) => i).filter((i) => i !== d.answer);
  let t = qMs + d.options.length * 300 + optMs * 0.8;
  const cuts = order.map((i) => {
    const at = t;
    t += 500 + readMs((d.reasons || [])[i] || "", { ...c, fresh: false });
    return { i, at };
  });
  const keepAt = t + 200;
  const endMs = keepAt + 700 + readMs((d.reasons || [])[d.answer] || "", { ...c, fresh: false }) + 600;
  return { qMs, cuts, keepAt, endMs };
};
const Rsn04 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opts = data.options.map(asItem);
  const n = opts.length;
  const t = rsn04Timeline({ ...data, options: opts.map((o) => o.text) }, ctx);
  const f = (ms) => msToFrames(ms, fps);
  const qF = f(t.qMs);
  const keepF = f(t.keepAt);
  const cutAt = Object.fromEntries(t.cuts.map((x) => [x.i, f(x.at)]));
  const cols = n === 4 ? 2 : 3;
  const cardW = cols === 2 ? 820 : 548;
  const tall = n <= 3;
  const kept = frame >= keepF;
  const remaining = n - t.cuts.filter((x) => frame >= f(x.at) + 6).length;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ ...fadeUp(frame, 0, 10), display: "flex", alignItems: "center", gap: 24, marginBottom: 30, width: "100%" }}>
        <Illus name={data.illus || "detective"} size={110} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <FitText text={data.question || "Loại dần từng khả năng"} max={TYPE.h2} min={48} target={44} align="left" />
        </div>
        <div style={{ ...pop(frame, fps, qF), flex: "none", padding: "12px 28px", borderRadius: 24, background: kept ? COLORS.ok : COLORS.ink, color: "#fff", fontSize: 44, fontWeight: 800 }}>
          còn {remaining}/{n}
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, width: W, justifyContent: "center" }}>
        {opts.map((o, i) => {
          const c = cutAt[i];
          const out = c !== undefined && frame >= c;
          const win = i === data.answer && kept;
          const stamp = pop(frame, fps, c ?? 99999);
          const winPop = pop(frame, fps, keepF);
          const reason = (data.reasons || [])[i];
          const sh = c !== undefined ? shake(frame, c, 8, 8) : { x: 0, y: 0 };
          const fu = fadeUp(frame, qF + i * 9, 10);
          const grow = win ? 1 + 0.04 * progress(frame, keepF, 10) : 1;
          return (
            <div key={i} style={{ opacity: fu.opacity, width: cardW, transform: `${fu.transform} translate(${sh.x}px, ${sh.y}px) scale(${grow})` }}>
              <Card tone={win ? "marker" : out ? COLORS.paper : "surface"} style={{ position: "relative", minHeight: tall ? 300 : 170, boxSizing: "border-box", padding: "22px 56px 22px 28px", border: win ? `5px solid ${COLORS.ok}` : out ? `3px solid ${COLORS.line}` : undefined, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", alignItems: tall ? "flex-start" : "center", gap: 20, flexDirection: tall ? "column" : "row", opacity: out ? 0.45 : 1 }}>
                  {o.illus && <Illus name={o.illus} size={tall ? 96 : 70} />}
                  <div style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.18, textDecoration: out ? `line-through ${COLORS.coral}` : "none", textDecorationThickness: 6 }}>{o.text}</div>
                </div>
                {reason && (out || win) && (
                  <div style={{ ...fadeUp(frame, (out ? c : keepF) + 8, 10), display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <Icon name={win ? "check" : "corner-down-right"} size={40} color={win ? COLORS.ok : COLORS.coral} stroke={3} />
                    <div style={{ fontSize: TYPE.small, fontWeight: 600, color: win ? COLORS.ink : COLORS.ink2, lineHeight: 1.22 }}>{reason}</div>
                  </div>
                )}
                {out && (
                  <div style={{ position: "absolute", right: -14, top: -18, opacity: stamp.opacity, transform: `${stamp.transform} rotate(-10deg)` }}>
                    <div style={{ width: 84, height: 84, borderRadius: "50%", background: COLORS.coral, display: "grid", placeItems: "center", border: `5px solid ${COLORS.surface}` }}>
                      <Icon name="x" size={54} color="#fff" stroke={3.6} />
                    </div>
                  </div>
                )}
                {win && (
                  <div style={{ position: "absolute", right: -18, bottom: -24, opacity: winPop.opacity, transform: winPop.transform }}>
                    <Illus name="check-mark-button" size={100} />
                  </div>
                )}
              </Card>
            </div>
          );
        })}
      </div>
    </Stage>
  );
};

// ---------- RSN-05 Nếu… thì…: khối điều kiện → kết quả, có nhánh "nếu không" ----------
const Rsn05 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const texts = [...(data.quote ? [data.quote] : []), data.if, data.then, ...(data.else ? [data.else] : [])];
  let t = 300;
  const startsMs = texts.map((x, i) => {
    const s = t;
    const isQuote = data.quote && i === 0;
    t += readMs(x, { ...ctx, lang: isQuote ? "en" : "vi", fresh: i === 0 }) + 350;
    return s;
  });
  const st = startsMs.map((ms) => msToFrames(ms, fps));
  const o = data.quote ? 1 : 0;
  const ifAt = st[o], thenAt = st[o + 1], elseAt = data.else ? st[o + 2] : null;
  const hasElse = !!data.else;
  const ifTop = data.quote ? 30 : hasElse ? 200 : 210;
  const ifH = 340;
  const L = 640, R = 1000; // mép phải khối nếu, mép trái khối kết quả
  const thenY = hasElse ? 30 : 210, elseY = 430, boxH = 310;
  const from = [L, ifTop + ifH / 2];
  const path = (y) => `M ${from[0]} ${from[1]} C ${L + 160} ${from[1]}, ${R - 170} ${y}, ${R - 20} ${y}`;
  const d1 = progress(frame, thenAt - 12, 12);
  const d2 = hasElse ? progress(frame, elseAt - 12, 12) : 0;
  const Branch = ({ y, p, color, label }) => (
    <g opacity={p > 0 ? 1 : 0}>
      <path d={path(y)} fill="none" stroke={color} strokeWidth={10} strokeLinecap="round" strokeDasharray={520} strokeDashoffset={520 * (1 - p)} />
      <path d={`M ${R - 46} ${y - 20} L ${R - 18} ${y} L ${R - 46} ${y + 20}`} fill="none" stroke={color} strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" opacity={p > 0.9 ? 1 : 0} />
      <text x={(L + R) / 2} y={y + (y < from[1] ? -26 : 54)} textAnchor="middle" fontSize={44} fontWeight={800} fill={color} fontFamily="Be Vietnam Pro" opacity={p}>{label}</text>
    </g>
  );
  const Box = ({ y, at, tone, border, tag, tagBg, illus, text }) => (
    <div style={{ ...pop(frame, fps, at), position: "absolute", left: R, top: y, width: W - R }}>
      <Card tone={tone} style={{ height: boxH, boxSizing: "border-box", padding: "24px 34px", border: `4px solid ${border}`, display: "flex", alignItems: "center", gap: 26 }}>
        <div style={{ transform: `translateY(${idle(frame + y, 5, 110)}px)` }}><Illus name={illus} size={120} /></div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <Tag bg={tagBg}>{tag}</Tag>
          <div style={{ fontSize: sizeFor(text, 52, TYPE.small, 44), fontWeight: 800, lineHeight: 1.2, marginTop: 12 }}>{text}</div>
        </div>
      </Card>
    </div>
  );
  return (
    <Stage accent={ctx.accent}>
      <div style={{ position: "relative", width: W, height: H }}>
        {data.quote && (
          <div style={{ ...fadeUp(frame, st[0], 12), position: "absolute", left: 0, top: ifTop + ifH + 30, width: L }}>
            <div style={{ padding: "20px 28px", borderRadius: 24, background: COLORS.surface, borderLeft: `10px solid ${COLORS.ink}`, boxShadow: "0 12px 30px rgba(23,32,51,.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <Icon name="mail" size={38} color={COLORS.muted} />
                <div style={{ fontSize: 40, fontWeight: 800, color: COLORS.muted }}>EN</div>
              </div>
              <div style={{ fontSize: TYPE.small, fontWeight: 600, fontStyle: "italic", lineHeight: 1.25 }}>{data.quote}</div>
            </div>
          </div>
        )}
        <div style={{ ...flyIn(frame, fps, ifAt - 6, "left", 200), position: "absolute", left: 0, top: ifTop, width: L }}>
          <Card style={{ height: ifH, boxSizing: "border-box", padding: "26px 34px", border: `5px solid ${ctx.accent}`, display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Tag bg={ctx.accent} icon="split">NẾU</Tag>
              <Illus name={data.illus || "thinking-face"} size={96} />
            </div>
            <div style={{ fontSize: sizeFor(data.if, 54, 46, 48), fontWeight: 800, lineHeight: 1.2 }}>{data.if}</div>
          </Card>
        </div>
        <svg width={W} height={H} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          <Branch y={thenY + boxH / 2} p={d1} color={COLORS.ok} label="thì" />
          {hasElse && <Branch y={elseY + boxH / 2} p={d2} color={COLORS.coral} label="nếu không" />}
        </svg>
        <Box y={thenY} at={thenAt} tone="soft" border={COLORS.ok} tag="THÌ" tagBg={COLORS.ok} illus={data.thenIllus || "check-mark-button"} text={data.then} />
        {hasElse && <Box y={elseY} at={elseAt} tone="coral" border={COLORS.coral} tag="NẾU KHÔNG" tagBg={COLORS.coral} illus={data.elseIllus || "warning"} text={data.else} />}
      </div>
    </Stage>
  );
};

// ---------- RSN-08 Nhưng / Vì vậy: chuỗi thẻ có chữ nối chen giữa (xếp hình rắn: hàng 2 đi ngược) ----------
const LINKS = { but: { text: "NHƯNG", color: COLORS.coral }, therefore: { text: "VÌ VẬY", color: COLORS.pine } };
const Rsn08 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const beats = data.beats.map(asItem);
  const n = beats.length;
  const p = plan(beats.map((b) => b.text), { ...ctx, lead: 300, gap: 600 });
  const st = p.starts.map((ms) => msToFrames(ms, fps));
  const cols = n <= 3 ? n : Math.ceil(n / 2);
  const rows = n <= 3 ? 1 : 2;
  const gapX = 210;
  const cw = (W - (cols - 1) * gapX) / cols;
  const ch = rows === 1 ? 400 : 325;
  const gapY = 115;
  const top0 = rows === 1 ? (H - ch) / 2 : (H - (2 * ch + gapY)) / 2;
  const pos = (i) => {
    const r = i < cols ? 0 : 1;
    const c = r === 0 ? i : cols - 1 - (i - cols);
    return { x: c * (cw + gapX), y: top0 + r * (ch + gapY), r, c };
  };
  const fs = cols >= 3 ? TYPE.small : 50;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ position: "relative", width: W, height: H }}>
        {beats.map((b, i) => {
          const q = pos(i);
          const lk = i > 0 ? LINKS[b.link] || LINKS.therefore : null;
          const isBut = b.link === "but";
          const enter = isBut ? flyIn(frame, fps, st[i], "down", 120) : fadeUp(frame, st[i], 12);
          const sh = isBut ? shake(frame, st[i] + 4, 10, 10) : { x: 0, y: 0 };
          // vị trí chữ nối: giữa hai thẻ cùng hàng, hoặc giữa hai hàng (xuống dòng)
          let link = null;
          if (lk) {
            const pr = pos(i - 1);
            const linkAt = st[i] - 10;
            const lp = pop(frame, fps, linkAt);
            const vertical = pr.r !== q.r;
            const lx = vertical ? q.x + cw / 2 - 110 : Math.min(pr.x, q.x) + cw + (gapX - 220) / 2;
            const ly = vertical ? pr.y + ch + (gapY - 100) / 2 + 4 : q.y + ch / 2 - 50;
            const arrow = vertical ? "arrow-down" : q.c > pr.c ? "arrow-right" : "arrow-left";
            link = (
              <div key={`l${i}`} style={{ position: "absolute", left: lx, top: ly, width: 220, height: 100, display: "flex", flexDirection: vertical ? "row" : "column", alignItems: "center", justifyContent: "center", gap: vertical ? 10 : 0, opacity: lp.opacity, transform: lp.transform }}>
                <div style={{ padding: "6px 16px", borderRadius: 16, background: lk.color, color: "#fff", fontSize: 40, fontWeight: 800, letterSpacing: "0.02em", whiteSpace: "nowrap" }}>{lk.text}</div>
                <Icon name={arrow} size={44} color={lk.color} stroke={3.2} />
              </div>
            );
          }
          return (
            <React.Fragment key={i}>
              {link}
              <div style={{ position: "absolute", left: q.x, top: q.y, width: cw, height: ch, ...enter, transform: `${enter.transform} translate(${sh.x}px, ${sh.y}px)` }}>
                <Card tone={isBut ? "coral" : i === n - 1 ? "marker" : "surface"} style={{ height: "100%", boxSizing: "border-box", padding: "20px 26px", display: "flex", flexDirection: "column", gap: 10, borderTop: `8px solid ${lk ? lk.color : COLORS.ink}` }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: lk ? lk.color : COLORS.ink, color: "#fff", display: "grid", placeItems: "center", fontSize: 32, fontWeight: 800 }}>{i + 1}</div>
                    {b.illus && <div style={{ transform: `rotate(${idle(frame + i * 21, 4, 120)}deg)` }}><Illus name={b.illus} size={rows === 1 ? 100 : 72} /></div>}
                  </div>
                  <div style={{ fontSize: fs, fontWeight: 700, lineHeight: 1.22 }}>{b.text}</div>
                </Card>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </Stage>
  );
};

export const RSN = {
  "RSN-01": { name: "Diễn dịch", family: "RSN", Component: Rsn01, limits: { reasons: [2, 4], claim: [4, 18], reason: [3, 16], example: [0, 20] },
    estimate: (d, c) => plan([d.claim, ...d.reasons.map((r) => asItem(r).text), ...(d.example ? [d.example] : [])], { ...c, lead: 300, gap: 250 }).endMs + 700 },
  "RSN-02": { name: "Quy nạp", family: "RSN", Component: Rsn02, limits: { examples: [3, 3], example: [4, 16], conclusion: [4, 16] },
    estimate: (d, c) => plan(d.examples.map((e) => asItem(e).text), { ...c, lead: 300, gap: 200 }).endMs + 600 + readMs(d.conclusion, { ...c, fresh: false }) + 700 },
  "RSN-03": { name: "Phản ví dụ", family: "RSN", Component: Rsn03, limits: { rule: [3, 14], counter: [4, 22], lesson: [3, 14] },
    estimate: (d, c) => plan([d.rule, d.counter, d.lesson], { ...c, lead: 300, gap: 300 }).endMs + 700 },
  "RSN-04": { name: "Loại trừ", family: "RSN", Component: Rsn04, limits: { options: [3, 5], option: [1, 7], reason: [0, 12] },
    estimate: (d, c) => rsn04Timeline({ ...d, options: d.options.map((o) => asItem(o).text) }, c).endMs },
  "RSN-05": { name: "Nếu… thì…", family: "RSN", Component: Rsn05, limits: { if: [3, 14], then: [3, 12], else: [0, 12], quote: [0, 16] },
    estimate: (d, c) => {
      const texts = [...(d.quote ? [d.quote] : []), d.if, d.then, ...(d.else ? [d.else] : [])];
      return texts.reduce((s, x, i) => s + readMs(x, { ...c, lang: d.quote && i === 0 ? "en" : "vi", fresh: i === 0 }) + 350, 300) + 700;
    } },
  "RSN-08": { name: "Nhưng / Vì vậy", family: "RSN", Component: Rsn08, limits: { beats: [3, 6], beat: [3, 16] },
    estimate: (d, c) => plan(d.beats.map((b) => asItem(b).text), { ...c, lead: 300, gap: 600 }).endMs + 700 },
};
