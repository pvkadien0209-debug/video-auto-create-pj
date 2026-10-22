// list.jsx — họ LIST (liệt kê): LIST-01 gạch đầu dòng · LIST-02 lưới biểu tượng · LIST-05 checklist · LIST-13 tiêu đề rồi chi tiết
// Bản 2: thêm hình minh hoạ màu. Ô tuỳ chọn: illus (hình bên cạnh, false = tắt), icons[] (LIST-01: hình thay chấm đầu dòng),
// items[].illus (LIST-02, LIST-13: hình màu thay biểu tượng nét).
import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { Card, FitText, Icon, Illus, Stage } from "../core/ui.jsx";
import { fadeUp, flyIn, idle, pop, progress } from "../core/motion.js";
import { msToFrames, plan } from "../core/timing.js";

const Title = ({ text, frame }) =>
  text ? (
    <div style={{ ...fadeUp(frame, 0, 10), marginBottom: 44, width: "100%" }}>
      <FitText text={text} max={TYPE.h2} target={40} align="left" />
    </div>
  ) : null;

const startsOf = (texts, ctx, fps, title) => {
  const p = plan(texts, { level: ctx.level, lead: title ? 1200 : 400, gap: 300 });
  return p.starts.map((ms) => msToFrames(ms, fps));
};

/** Hình minh hoạ lớn đứng bên phải danh sách, nảy vào rồi thở nhẹ. */
const SideIllus = ({ name, frame, fps, size = 300, at = 4 }) => {
  if (!name) return null;
  const p = pop(frame, fps, at);
  return (
    <div style={{ ...p, width: size + 60, height: size + 60, flex: "none", borderRadius: "50%", background: COLORS.pineSoft, display: "grid", placeItems: "center" }}>
      <div style={{ transform: `translateY(${idle(frame, 8, 110)}px) rotate(${idle(frame, 3, 160)}deg)` }}><Illus name={name} size={size} /></div>
    </div>
  );
};

// ---------- LIST-01 Gạch đầu dòng: dòng mới hiện, dòng cũ mờ còn 50% ----------
const List01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const st = startsOf(data.items, ctx, fps, data.title);
  const cur = st.filter((s) => frame >= s).length - 1;
  const side = data.illus === false ? null : data.illus || "memo";
  const icons = data.icons || [];
  const fs = data.items.length > 4 ? TYPE.h2 - 8 : TYPE.h2;
  return (
    <Stage accent={ctx.accent} align="left">
      <Title text={data.title} frame={frame} />
      <div style={{ display: "flex", alignItems: "center", gap: 50, width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: data.items.length > 4 ? 22 : 30, flex: 1, minWidth: 0 }}>
          {data.items.map((t, i) => (
            <div key={i} style={{ ...fadeUp(frame, st[i], 10), display: "flex", alignItems: "center", gap: 30, opacity: frame < st[i] ? 0 : i === cur ? 1 : 0.5 }}>
              {icons[i] ? (
                <span style={{ ...pop(frame, fps, st[i]), flex: "none", width: 76, height: 76, borderRadius: 22, background: i === cur ? COLORS.markerSoft : COLORS.surface, display: "grid", placeItems: "center" }}><Illus name={icons[i]} size={58} /></span>
              ) : (
                <span style={{ width: 26, height: 26, borderRadius: "50%", background: i === cur ? ctx.accent : COLORS.muted, flex: "none" }} />
              )}
              <span style={{ fontSize: fs, fontWeight: 700 }}>{t}</span>
            </div>
          ))}
        </div>
        <SideIllus name={side} frame={frame} fps={fps} size={data.items.length > 4 ? 260 : 300} />
      </div>
    </Stage>
  );
};

// ---------- LIST-02 Lưới biểu tượng ----------
const List02 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const texts = data.items.map((x) => x.text);
  const st = startsOf(texts, ctx, fps, data.title);
  const cols = data.items.length <= 4 ? 2 : 3;
  return (
    <Stage accent={ctx.accent}>
      {data.title && (
        <div style={{ ...fadeUp(frame, 0, 10), marginBottom: 44, display: "flex", alignItems: "center", gap: 24 }}>
          {data.illus && <div style={pop(frame, fps, 2)}><Illus name={data.illus} size={96} /></div>}
          <FitText text={data.title} max={TYPE.h2} target={40} />
        </div>
      )}
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 32, width: cols === 2 ? 1400 : 1728 }}>
        {data.items.map((x, i) => (
          <div key={i} style={pop(frame, fps, st[i])}>
            <Card style={{ display: "flex", alignItems: "center", gap: cols === 3 ? 24 : 30, padding: cols === 3 ? "28px 28px" : "30px 36px" }}>
              <div style={{ width: cols === 3 ? 100 : 120, height: cols === 3 ? 100 : 120, borderRadius: 30, background: x.illus ? COLORS.markerSoft : COLORS.pineSoft, display: "grid", placeItems: "center", flex: "none", position: "relative" }}>
                {x.illus ? <div style={{ transform: `rotate(${idle(frame + i * 17, 4, 120)}deg)` }}><Illus name={x.illus} size={cols === 3 ? 74 : 88} /></div> : <Icon name={x.icon} size={66} color={ctx.accent} />}
                {x.illus && x.icon && (
                  <div style={{ position: "absolute", right: -12, bottom: -12, width: 50, height: 50, borderRadius: "50%", background: ctx.accent, display: "grid", placeItems: "center", border: `4px solid ${COLORS.surface}` }}>
                    <Icon name={x.icon} size={28} color="#fff" stroke={2.6} />
                  </div>
                )}
              </div>
              <div style={{ fontSize: TYPE.body, fontWeight: 700, lineHeight: 1.2 }}>{x.text}</div>
            </Card>
          </div>
        ))}
      </div>
    </Stage>
  );
};

// ---------- LIST-05 Checklist tick: ☐ đóng dấu thành ☑ ----------
const List05 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const st = startsOf(data.items, ctx, fps, data.title);
  const side = data.illus === false ? null : data.illus || "clipboard";
  const long = Math.max(...data.items.map((t) => t.length)) > 30;
  const done = st.filter((s) => frame >= s + 8).length;
  return (
    <Stage accent={ctx.accent} align="left">
      <Title text={data.title || "Kiểm tra từng mục"} frame={frame} />
      <div style={{ display: "flex", alignItems: "center", gap: 50, width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: data.items.length > 4 ? 24 : 34, flex: 1, minWidth: 0 }}>
        {data.items.map((t, i) => {
          const tick = pop(frame, fps, st[i] + 8);
          return (
            <div key={i} style={{ ...fadeUp(frame, st[i], 10), display: "flex", alignItems: "center", gap: 34 }}>
              <div style={{ width: 84, height: 84, borderRadius: 20, border: `5px solid ${ctx.accent}`, background: COLORS.surface, display: "grid", placeItems: "center", flex: "none" }}>
                <div style={{ transform: tick.transform, opacity: tick.opacity }}><Icon name="check" size={62} color={ctx.accent} stroke={3.2} /></div>
              </div>
              <span style={{ fontSize: long ? TYPE.body : TYPE.h2, fontWeight: 700 }}>{t}</span>
            </div>
          );
        })}
      </div>
      {side && (
        <div style={{ position: "relative", flex: "none" }}>
          <SideIllus name={side} frame={frame} fps={fps} size={260} />
          <div style={{ position: "absolute", right: 0, bottom: 0, minWidth: 110, padding: "8px 22px", borderRadius: 999, background: ctx.accent, color: "#fff", fontSize: TYPE.small, fontWeight: 800, textAlign: "center", ...pop(frame, fps, st[Math.max(0, done - 1)] + 8) }}>
            {done}/{data.items.length}
          </div>
        </div>
      )}
      </div>
    </Stage>
  );
};

// ---------- LIST-13 Tiêu đề rồi chi tiết ----------
const List13 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const texts = data.items.map((x) => `${x.title} ${x.detail}`);
  const st = startsOf(texts, ctx, fps, data.title);
  const n = data.items.length;
  return (
    <Stage accent={ctx.accent} align="left">
      <Title text={data.title} frame={frame} />
      <div style={{ display: "flex", flexDirection: "column", gap: n > 2 ? 20 : 34, width: "100%" }}>
        {data.items.map((x, i) => {
          const open = progress(frame, st[i] + 10, 12);
          return (
            <div key={i} style={{ ...flyIn(frame, fps, st[i], "left", 80), display: "flex", alignItems: "center", gap: 30, borderLeft: `10px solid ${ctx.accent}`, paddingLeft: 30 }}>
              {x.illus && (
                <div style={{ ...pop(frame, fps, st[i] + 2), flex: "none", width: n > 2 ? 104 : 140, height: n > 2 ? 104 : 140, borderRadius: 28, background: COLORS.surface, border: `2px solid ${COLORS.line}`, display: "grid", placeItems: "center" }}>
                  <Illus name={x.illus} size={n > 2 ? 76 : 104} />
                </div>
              )}
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: n > 2 ? TYPE.h2 - 6 : TYPE.h2, fontWeight: 800 }}>{x.title}</div>
                <div style={{ fontSize: n > 2 ? TYPE.small : TYPE.body - 4, fontWeight: 500, color: COLORS.ink2, maxHeight: 200 * open, overflow: "hidden", opacity: open, marginTop: 6 }}>{x.detail}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Stage>
  );
};

const listEst = (texts, d, c) => plan(texts, { level: c.level, lead: d.title ? 1200 : 400, gap: 300 }).endMs + 800;

export const LIST = {
  "LIST-01": { name: "Gạch đầu dòng", family: "LIST", Component: List01, limits: { items: [3, 6] }, estimate: (d, c) => listEst(d.items, d, c) },
  "LIST-02": { name: "Lưới biểu tượng", family: "LIST", Component: List02, limits: { items: [2, 6] }, estimate: (d, c) => listEst(d.items.map((x) => x.text), d, c) },
  "LIST-05": { name: "Checklist tick", family: "LIST", Component: List05, limits: { items: [2, 5] }, estimate: (d, c) => listEst(d.items, { title: true }, c) },
  "LIST-13": { name: "Tiêu đề rồi chi tiết", family: "LIST", Component: List13, limits: { items: [2, 4] }, estimate: (d, c) => listEst(d.items.map((x) => `${x.title} ${x.detail}`), d, c) },
};
