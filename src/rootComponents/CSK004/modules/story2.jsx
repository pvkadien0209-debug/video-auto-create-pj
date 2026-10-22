// story2.jsx — họ STORY (câu chuyện), đợt 2:
// STORY-02 bong bóng hội thoại · STORY-03 tin nhắn điện thoại · STORY-04 email · STORY-05 truyện tranh 3 khung
// STORY-06 mốc giờ trong ngày · STORY-07 bạn là… · STORY-10 tài liệu đánh dấu.
// Chuyện dựng từ đoạn "📌 Tình huống thường gặp" của bài thì truyền label: "Tình huống minh hoạ".
import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { FitText, Icon, Illus, IllusBadge, Kicker, Stage, fitSize } from "../core/ui.jsx";
import { fadeUp, flash, flyIn, idle, pop, progress, shake, slam, typed, EASE_STD } from "../core/motion.js";
import { msToFrames, plan, readMs } from "../core/timing.js";

// ---------- trợ giúp chung ----------
const langOf = (d) => (d.lang === "en" ? "en" : "vi");

/** Nhãn đầu cảnh (ví dụ "Tình huống minh hoạ"), có biểu tượng. */
const Label = ({ text, frame, icon = "message-circle", tone = COLORS.ink2, style }) =>
  text ? (
    <div style={{ ...fadeUp(frame, 0, 10), ...style }}>
      <Kicker accent={tone} style={{ whiteSpace: "nowrap" }}><Icon name={icon} size={36} color="#fff" /> {text}</Kicker>
    </div>
  ) : null;

/** Bút dạ quét qua chữ, chạy liền qua nhiều dòng (nền gradient + box-decoration-break: slice). */
const HL = ({ children, startF = 0, dur = 12 }) => {
  const frame = useCurrentFrame();
  const p = progress(frame, startF, dur);
  return (
    <span style={{ backgroundImage: `linear-gradient(${COLORS.marker}, ${COLORS.marker})`, backgroundRepeat: "no-repeat", backgroundSize: `${p * 100}% 0.46em`, backgroundPosition: "0 86%", WebkitBoxDecorationBreak: "slice", boxDecorationBreak: "slice" }}>
      {children}
    </span>
  );
};

/** Mờ dần ở mép trên dòng tin (tin cũ trôi lên khuất). */
const FADE_TOP = { WebkitMaskImage: "linear-gradient(to bottom, transparent 0, #000 90px)", maskImage: "linear-gradient(to bottom, transparent 0, #000 90px)" };

/** Ba chấm "đang gõ…" nhún lần lượt. */
const Dots = ({ frame, color = COLORS.muted, size = 16 }) => (
  <div style={{ display: "flex", gap: size * 0.7, alignItems: "center", height: size * 2.6 }}>
    {[0, 1, 2].map((i) => (
      <div key={i} style={{ width: size, height: size, borderRadius: "50%", background: color, transform: `translateY(${Math.min(0, Math.sin((frame - i * 4) / 3.2) * -size * 0.6) * -1 - size * 0.3}px)`, opacity: 0.55 + 0.45 * Math.max(0, Math.sin((frame - i * 4) / 3.2)) }} />
    ))}
  </div>
);

/** Mục trong dòng tin: cao dần từ 0 (đẩy các tin cũ lên) rồi hiện rõ. */
const Grow = ({ frame, at, children, max = 700 }) => {
  const g = progress(frame, at, 8, EASE_STD);
  return <div style={{ maxHeight: g * max, opacity: progress(frame, at + 2, 8), transform: `translateY(${(1 - g) * 18}px)`, flex: "none" }}>{children}</div>;
};

/** Lịch hội thoại: mỗi tin có khoảng "đang gõ" rồi mới hiện; giữ đủ thời gian đọc. */
const chatPlan = (messages, c, { lead = 700, typing = (m) => 550, lang = "vi" } = {}) => {
  let t = lead;
  const rows = messages.map((m, i) => {
    const typeAt = t;
    const showAt = t + typing(m, i);
    t = showAt + readMs(m.text, { lang, level: c.level, fresh: i === 0 }) + 150;
    return { typeAt, showAt };
  });
  return { rows, endMs: t };
};

// =====================================================================
// STORY-02 Bong bóng hội thoại: 2 nhân vật (hình người minh hoạ) hai bên, bong bóng giữa, có "đang gõ…"
// data: { left:{name,illus}, right:{name,illus}, messages:[{who:"left"|"right", text}], label?, title?, lang? }
// =====================================================================
const S02_TYPING = 600;
const Story02 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const lang = langOf(data);
  const f = (ms) => msToFrames(ms, fps);
  const p = chatPlan(data.messages, ctx, { lead: 900, typing: () => S02_TYPING, lang });
  const L = { name: "Người A", illus: "woman", ...data.left };
  const R = { name: "Người B", illus: "man", ...data.right };
  // ai đang gõ / vừa nói
  let active = null;
  let typingNow = null;
  data.messages.forEach((m, i) => {
    if (frame >= f(p.rows[i].typeAt)) active = m.who;
    if (frame >= f(p.rows[i].typeAt) && frame < f(p.rows[i].showAt)) typingNow = m.who;
  });
  const fs = lang === "en" ? 46 : 48;
  const Person = ({ side, who }) => {
    const on = active === side;
    const isTyping = typingNow === side;
    const fly = flyIn(frame, fps, side === "left" ? 2 : 8, side, 260);
    return (
      <div style={{ ...fly, width: 300, flex: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <div style={{ transform: `translateY(${isTyping ? Math.sin(frame / 2.4) * 6 : idle(frame + (side === "left" ? 0 : 40), 6, 110)}px) scale(${on ? 1 : 0.88})`, opacity: active && !on ? 0.6 : 1 }}>
          <IllusBadge name={who.illus} size={250} bg={side === "left" ? COLORS.surface : COLORS.pineSoft} style={{ border: `6px solid ${on ? ctx.accent : COLORS.line}` }} />
        </div>
        <div style={{ fontSize: 44, fontWeight: 800, textAlign: "center", lineHeight: 1.15 }}>{who.name}</div>
        <div style={{ fontSize: 40, fontWeight: 600, color: COLORS.muted, height: 50, opacity: isTyping ? 1 : 0 }}>đang gõ…</div>
      </div>
    );
  };
  return (
    <Stage accent={ctx.accent}>
      <div style={{ display: "flex", alignItems: "center", gap: 24, alignSelf: "stretch", justifyContent: "center", minHeight: 70 }}>
        <Label text={data.label} frame={frame} />
        {data.title && <div style={{ ...fadeUp(frame, 4, 10), fontSize: TYPE.small + 4, fontWeight: 800 }}>{data.title}</div>}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 30, marginTop: 24, width: "100%" }}>
        <Person side="left" who={L} />
        <div style={{ flex: 1, height: 620, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 18, overflow: "hidden", padding: "0 6px", ...FADE_TOP }}>
          {data.messages.map((m, i) => {
            const left = m.who === "left";
            const typeF = f(p.rows[i].typeAt);
            const showF = f(p.rows[i].showAt);
            if (frame < typeF) return null;
            const showing = frame >= showF;
            return (
              <Grow key={i} frame={frame} at={showing ? showF : typeF}>
                <div style={{ display: "flex", justifyContent: left ? "flex-start" : "flex-end" }}>
                  <div style={{
                    maxWidth: "82%", padding: showing ? "20px 30px" : "14px 28px", borderRadius: 34,
                    borderBottomLeftRadius: left ? 8 : 34, borderBottomRightRadius: left ? 34 : 8,
                    background: left ? COLORS.surface : ctx.accent, color: left ? COLORS.ink : "#fff",
                    border: left ? `3px solid ${COLORS.line}` : "none", boxShadow: "0 12px 28px rgba(23,32,51,.10)",
                    fontSize: fs, fontWeight: 600, lineHeight: 1.28,
                  }}>
                    {showing ? m.text : <Dots frame={frame} color={left ? COLORS.muted : "#fff"} />}
                  </div>
                </div>
              </Grow>
            );
          })}
        </div>
        <Person side="right" who={R} />
      </div>
    </Stage>
  );
};

// =====================================================================
// STORY-03 Tin nhắn điện thoại: khung điện thoại chung (không thương hiệu), tin hiện dần.
// data: { contact:{name, illus}, messages:[{from:"me"|"them", text, time?}], label?, title?, illus?, around?[], lang? }
// "me" = tin mình gõ (chữ chạy trong ô nhập rồi gửi); "them" = bên kia (ba chấm rồi hiện).
// =====================================================================
const typingMe = (m) => Math.min(1300, Math.max(500, String(m.text).length * 22));
const s03Plan = (d, c) => chatPlan(d.messages, c, { lead: 1100, typing: (m) => (m.from === "me" ? typingMe(m) : 650) + (m.time ? 500 : 0), lang: langOf(d) });

const Story03 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = (ms) => msToFrames(ms, fps);
  const p = s03Plan(data, ctx);
  const contact = { name: "Liên hệ", illus: "bust-in-silhouette", ...data.contact };
  // ô nhập: đang gõ tin của mình
  let draft = "";
  data.messages.forEach((m, i) => {
    const a = f(p.rows[i].typeAt + (m.time ? 500 : 0));
    const b = f(p.rows[i].showAt);
    if (m.from === "me" && frame >= a && frame < b) draft = typed(m.text, frame, fps, a, (String(m.text).length / Math.max(1, b - a - 2)) * fps);
  });
  const phoneIn = flyIn(frame, fps, 0, "right", 300);
  const lastShown = data.messages.reduce((k, m, i) => (frame >= f(p.rows[i].showAt) ? i : k), -1);
  const lastMine = lastShown >= 0 && data.messages[lastShown].from === "me";
  const buzz = data.messages.reduce((acc, m, i) => {
    const s = shake(frame, f(p.rows[i].showAt), 8, m.from === "them" ? 6 : 0);
    return { x: acc.x + s.x, y: acc.y + s.y };
  }, { x: 0, y: 0 });
  return (
    <Stage accent={ctx.accent} align="left">
      <div style={{ display: "flex", width: "100%", height: 770, alignItems: "center", gap: 70 }}>
        {/* bên trái: nhãn, tiêu đề, hình người cầm máy */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 26, alignItems: "flex-start" }}>
          <Label text={data.label} frame={frame} />
          {data.title && <div style={fadeUp(frame, 4, 12)}><FitText text={data.title} max={TYPE.h2} min={TYPE.small} target={36} align="left" /></div>}
          <div style={{ ...pop(frame, fps, 6), position: "relative", alignSelf: "center", marginTop: 10 }}>
            <div style={{ width: 400, height: 400, borderRadius: "50%", background: COLORS.pineSoft, display: "grid", placeItems: "center" }}>
              <div style={{ transform: `translateY(${idle(frame, 8, 120)}px)` }}><Illus name={data.illus || "woman-office-worker"} size={300} /></div>
            </div>
            {(data.around || ["speech-balloon", "mobile-phone"]).slice(0, 2).map((n, i) => (
              <div key={n + i} style={{ position: "absolute", left: i === 0 ? -70 : 330, top: i === 0 ? 20 : 250, transform: `translateY(${idle(frame + i * 30, 10, 90)}px)` }}>
                <Illus name={n} size={130} />
              </div>
            ))}
          </div>
        </div>
        {/* bên phải: điện thoại chung chung */}
        <div style={{ ...phoneIn, flex: "none" }}>
          <div style={{ transform: `translate(${buzz.x}px, ${buzz.y}px) rotate(${idle(frame, 0.6, 200)}deg)` }}>
            <div style={{ width: 600, height: 770, borderRadius: 72, background: COLORS.ink, padding: 18, boxShadow: "0 30px 60px rgba(23,32,51,.25)" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: 56, background: COLORS.paper, overflow: "hidden", display: "flex", flexDirection: "column", position: "relative" }}>
                <div style={{ position: "absolute", top: 14, left: "50%", width: 150, height: 30, marginLeft: -75, borderRadius: 999, background: COLORS.ink }} />
                {/* thanh tên liên hệ */}
                <div style={{ display: "flex", alignItems: "center", gap: 18, padding: "58px 28px 18px", background: COLORS.surface, borderBottom: `2px solid ${COLORS.line}` }}>
                  <Icon name="chevron-left" size={44} color={ctx.accent} stroke={3} />
                  <IllusBadge name={contact.illus} size={78} />
                  <div style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1, flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{contact.name}</div>
                  <Icon name="phone" size={40} color={ctx.accent} />
                </div>
                {/* dòng tin */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 14, padding: "0 20px 14px", overflow: "hidden", ...FADE_TOP }}>
                  {data.messages.map((m, i) => {
                    const mine = m.from === "me";
                    const typeF = f(p.rows[i].typeAt);
                    const showF = f(p.rows[i].showAt);
                    if (frame < typeF) return null;
                    const showing = frame >= showF;
                    if (mine && !showing && !m.time) return null;
                    return (
                      <Grow key={i} frame={frame} at={showing ? showF : typeF}>
                        {m.time && (
                          <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
                            <div style={{ padding: "4px 20px", borderRadius: 999, background: COLORS.line, fontSize: 40, fontWeight: 700, color: COLORS.muted }}>{m.time}</div>
                          </div>
                        )}
                        {(showing || !mine) && (
                          <div style={{ display: "flex", justifyContent: mine ? "flex-end" : "flex-start" }}>
                            <div style={{
                              maxWidth: "86%", padding: showing ? "14px 22px" : "8px 22px", borderRadius: 28,
                              borderBottomRightRadius: mine ? 6 : 28, borderBottomLeftRadius: mine ? 28 : 6,
                              background: mine ? ctx.accent : COLORS.surface, color: mine ? "#fff" : COLORS.ink,
                              border: mine ? "none" : `2px solid ${COLORS.line}`, fontSize: 40, fontWeight: 600, lineHeight: 1.24,
                            }}>
                              {showing ? m.text : <Dots frame={frame} size={13} />}
                            </div>
                          </div>
                        )}
                        {showing && mine && i === lastShown && lastMine && (
                          <div style={{ textAlign: "right", fontSize: 40, color: COLORS.muted, fontWeight: 600, marginTop: 2, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 6 }}>
                            <Icon name="check-check" size={36} color={ctx.accent} /> Đã gửi
                          </div>
                        )}
                      </Grow>
                    );
                  })}
                </div>
                {/* ô nhập */}
                <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 20px 24px", background: COLORS.surface, borderTop: `2px solid ${COLORS.line}` }}>
                  <div style={{ flex: 1, minHeight: 64, borderRadius: 32, background: COLORS.paper, border: `2px solid ${COLORS.line}`, padding: "8px 22px", fontSize: 40, fontWeight: 500, color: draft ? COLORS.ink : COLORS.muted, display: "flex", alignItems: "center", overflow: "hidden", whiteSpace: "nowrap" }}>
                    <span style={{ direction: "ltr", overflow: "hidden", textOverflow: "clip", display: "block", maxWidth: "100%" }}>{draft ? draft.slice(-18) : "Nhắn tin…"}</span>
                    {draft && <span style={{ width: 4, height: 44, background: ctx.accent, marginLeft: 4, flex: "none" }} />}
                  </div>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: draft ? ctx.accent : COLORS.line, display: "grid", placeItems: "center", transform: `scale(${draft ? 1 + 0.06 * Math.sin(frame / 3) : 1})` }}>
                    <Icon name="send" size={34} color="#fff" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Stage>
  );
};

// =====================================================================
// STORY-04 Email: khung thư chung chung (không thương hiệu): người nhận, tiêu đề, thân thư; chỗ cần sửa được tô + ghi chú.
// data: { to, subject, body ("\n" = xuống dòng), marks:[{text, note, tone?:"fix"|"good"}], label?, title?, lang? ("en" mặc định) }
// =====================================================================
const markList = (d) => (d.marks || []).map((m) => (typeof m === "string" ? { text: m, note: "", tone: "fix" } : { tone: "fix", ...m }));

const s04Plan = (d, c) => {
  const lang = d.lang || "en";
  const bodyMs = readMs(`${d.subject} ${d.body}`, { lang, level: c.level });
  const marks = markList(d);
  const startMs = 700 + bodyMs * 0.55;
  let t = startMs;
  const starts = marks.map((m, i) => {
    const s = t;
    t += 600 + readMs(m.note || m.text, { level: c.level, fresh: false });
    return s;
  });
  return { starts, endMs: Math.max(t, 700 + bodyMs) + 700 };
};

/** Cắt chữ thành các đoạn, đoạn trùng chữ cần tô thì gắn số thứ tự mark. */
const segmentize = (text, marks) => {
  let segs = [{ t: text, mi: -1 }];
  marks.forEach((m, mi) => {
    let done = false;
    segs = segs.flatMap((s) => {
      if (done || s.mi !== -1) return [s];
      const k = s.t.indexOf(m.text);
      if (k < 0) return [s];
      done = true;
      return [{ t: s.t.slice(0, k), mi: -1 }, { t: m.text, mi }, { t: s.t.slice(k + m.text.length), mi: -1 }].filter((x) => x.t);
    });
  });
  return segs;
};

const NumDot = ({ n, tone, size = 46, style }) => (
  <span style={{ display: "inline-grid", placeItems: "center", width: size, height: size, borderRadius: "50%", background: tone === "good" ? COLORS.ok : COLORS.coral, color: "#fff", fontSize: size * 0.6, fontWeight: 800, verticalAlign: "middle", flex: "none", ...style }}>{n}</span>
);

const Story04 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = (ms) => msToFrames(ms, fps);
  const marks = markList(data);
  const p = s04Plan(data, ctx);
  const len = String(data.body).length;
  const fs = len < 220 ? 48 : len < 340 ? 44 : 40;
  const subjSegs = segmentize(String(data.subject), marks);
  const usedInSubject = new Set(subjSegs.filter((s) => s.mi >= 0).map((s) => s.mi));
  const bodyMarks = marks.map((m, i) => (usedInSubject.has(i) ? { ...m, text: "\u0000" } : m));
  const paras = String(data.body).split("\n");
  const renderSegs = (segs) =>
    segs.map((s, k) => {
      if (s.mi < 0) return <span key={k}>{s.t}</span>;
      const m = marks[s.mi];
      const at = f(p.starts[s.mi]);
      const on = frame >= at;
      return (
        <span key={k} style={{ textDecoration: on && m.tone !== "good" ? `underline wavy ${COLORS.coral}` : "none", textDecorationThickness: 3, textUnderlineOffset: 10 }}>
          <HL startF={at} dur={10}>{s.t.slice(0, s.t.lastIndexOf(" ") + 1)}</HL>
          <span style={{ whiteSpace: "nowrap" }}>
            <HL startF={at + 9} dur={4}>{s.t.slice(s.t.lastIndexOf(" ") + 1)}</HL>
            <span style={{ ...pop(frame, fps, at + 8), display: "inline-block", marginLeft: 8 }}><NumDot n={s.mi + 1} tone={m.tone} size={40} /></span>
          </span>
        </span>
      );
    });
  let bodySegsAll = [];
  const win = flyIn(frame, fps, 0, "up", 120);
  // thư dài: ước lượng chiều cao thân thư, cuộn dần lên trong lúc đọc
  const winW = len < 340 ? 1080 : 1250;
  const bodyW = winW - 72;
  const subjFs = len < 340 ? 44 : 40;
  const subjLines = Math.max(1, Math.ceil((String(data.subject).length * subjFs * 0.56) / (bodyW - 190)));
  const areaH = 770 - 64 - (66 + subjLines * subjFs * 1.25 + 16) - 36;
  const estBodyLines = paras.reduce((n, para) => n + Math.max(1, Math.ceil((para.length * fs * 0.52) / bodyW)), 0);
  const contentH = estBodyLines * fs * 1.3 + (paras.length - 1) * fs * 0.3;
  const over = Math.max(0, contentH - areaH + 24 + fs * 1.3);
  const bodyMs = readMs(`${data.subject} ${data.body}`, { lang: data.lang || "en", level: ctx.level });
  const scrollY = over * progress(frame, f(700 + bodyMs * 0.4), f(bodyMs * 0.45), EASE_STD);
  return (
    <Stage accent={ctx.accent} align="left">
      <div style={{ display: "flex", width: "100%", gap: 44, alignItems: "flex-start", height: 770 }}>
        {/* cửa sổ thư */}
        <div style={{ ...win, width: winW, flex: "none", height: 770, borderRadius: 30, background: COLORS.surface, border: `2px solid ${COLORS.line}`, boxShadow: "0 24px 50px rgba(23,32,51,.12)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 28px", background: COLORS.ink2, color: "#fff" }}>
            {[0, 1, 2].map((i) => <div key={i} style={{ width: 22, height: 22, borderRadius: "50%", background: COLORS.line, opacity: 0.7 }} />)}
            <Icon name="mail" size={40} color="#fff" />
            <div style={{ fontSize: 40, fontWeight: 700 }}>{data.windowTitle || "Thư mới"}</div>
            <div style={{ flex: 1 }} />
            {data.label && <div style={{ fontSize: 40, fontWeight: 700, opacity: 0.85 }}>{data.label}</div>}
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "4px 24px", borderRadius: 999, background: ctx.accent, color: "#fff", fontSize: 40, fontWeight: 800 }}>
              <Icon name="send" size={34} color="#fff" /> Gửi
            </div>
          </div>
          <div style={{ padding: "6px 36px", borderBottom: `2px solid ${COLORS.line}` }}>
            <div style={{ display: "flex", gap: 18, alignItems: "baseline", padding: "6px 0", borderBottom: `2px solid ${COLORS.line}`, fontSize: 40 }}>
              <div style={{ color: COLORS.muted, fontWeight: 700, width: 170 }}>Đến:</div>
              <div style={{ fontWeight: 600 }}>{data.to}</div>
            </div>
            <div style={{ display: "flex", gap: 18, alignItems: "baseline", padding: "6px 0", fontSize: subjFs }}>
              <div style={{ color: COLORS.muted, fontWeight: 700, width: 170, fontSize: 40, flex: "none" }}>Tiêu đề:</div>
              <div style={{ fontWeight: 800, lineHeight: 1.25 }}>{renderSegs(subjSegs)}</div>
            </div>
          </div>
          <div style={{ ...fadeUp(frame, 8, 14), flex: 1, overflow: "hidden", ...(over > 0 ? { WebkitMaskImage: "linear-gradient(to bottom, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)", maskImage: "linear-gradient(to bottom, transparent 0, #000 40px, #000 calc(100% - 40px), transparent 100%)" } : {}) }}>
          <div style={{ padding: "18px 36px", fontSize: fs, lineHeight: 1.3, fontWeight: 500, display: "flex", flexDirection: "column", gap: fs * 0.3, transform: `translateY(${-scrollY}px)` }}>
            {paras.map((para, i) => {
              const segs = segmentize(para, bodyMarks.map((m, mi) => (bodySegsAll.includes(mi) ? { ...m, text: "\u0000" } : m)));
              segs.forEach((s) => s.mi >= 0 && bodySegsAll.push(s.mi));
              return <div key={i} style={{ minHeight: para.trim() ? undefined : fs * 0.2 }}>{renderSegs(segs)}</div>;
            })}
          </div>
          </div>
        </div>
        {/* cột ghi chú */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 18, height: 770 }}>
          <div style={{ ...pop(frame, fps, 4), display: "flex", alignItems: "center", gap: 18 }}>
            <IllusBadge name={data.illus || "envelope-with-arrow"} size={104} bg={COLORS.surface} />
            <div style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.15 }}>{data.title || (marks.some((m) => m.tone !== "good") ? "Chỗ cần sửa" : "Điểm đáng học")}</div>
          </div>
          {marks.map((m, i) => {
            const at = f(p.starts[i]) + 10;
            return (
              <div key={i} style={{ ...flyIn(frame, fps, at, "right", 120) }}>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 18px", borderRadius: 24, background: m.tone === "good" ? COLORS.pineSoft : COLORS.coralSoft, border: `3px solid ${m.tone === "good" ? COLORS.ok : COLORS.coral}` }}>
                  <NumDot n={i + 1} tone={m.tone} size={46} />
                  <div style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.22, color: COLORS.ink }}>{m.note}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Stage>
  );
};

// =====================================================================
// STORY-05 Truyện tranh 3 khung: mỗi khung là cảnh dựng bằng hình minh hoạ màu + lời dẫn (+ lời thoại).
// data: { panels:[{scene:[illus...], caption, say?}] x3, label? (mặc định "Tình huống minh hoạ"), title? }
// =====================================================================
const s05Texts = (d) => d.panels.map((pn) => `${pn.caption} ${pn.say || ""}`);
const s05Plan = (d, c) => plan(s05Texts(d), { level: c.level, lead: 900, gap: 350 });

const ComicScene = ({ scene, frame, fps, at, hot }) => {
  const list = (Array.isArray(scene) ? scene : [scene]).filter(Boolean);
  const [main, ...props] = list;
  const spots = [[-150, -40, 1], [150, -30, -1], [-140, 110, 1], [150, 110, -1]];
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", display: "grid", placeItems: "center" }}>
      <div style={{ position: "absolute", width: 290, height: 290, borderRadius: "50%", background: hot ? COLORS.coralSoft : COLORS.pineSoft, transform: `scale(${progress(frame, at, 12)})` }} />
      <div style={{ ...pop(frame, fps, at + 2), position: "relative" }}>
        <div style={{ transform: `translateY(${idle(frame, 6, 100)}px)` }}><Illus name={main} size={230} /></div>
      </div>
      {props.slice(0, 4).map((n, i) => (
        <div key={n + i} style={{ ...pop(frame, fps, at + 8 + i * 4), position: "absolute", left: "50%", top: "50%", marginLeft: spots[i][0] - 60, marginTop: spots[i][1] - 60 }}>
          <div style={{ transform: `translateY(${idle(frame + i * 17, 8, 80)}px) rotate(${spots[i][2] * 8}deg)` }}><Illus name={n} size={120} /></div>
        </div>
      ))}
    </div>
  );
};

const Story05 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = s05Plan(data, ctx);
  const tilt = [-1.6, 1.2, -1];
  const lastAt = msToFrames(p.starts[2], fps);
  const sh = shake(frame, lastAt + 4, 10, 10);
  return (
    <Stage accent={ctx.accent}>
      <div style={{ display: "flex", alignItems: "center", gap: 24, minHeight: 70 }}>
        <Label text={data.label === undefined ? "Tình huống minh hoạ" : data.label} frame={frame} icon="book-open" />
        {data.title && <div style={{ ...fadeUp(frame, 4, 10), fontSize: TYPE.small + 4, fontWeight: 800 }}>{data.title}</div>}
      </div>
      <div style={{ display: "flex", gap: 34, marginTop: 30, width: "100%", transform: `translate(${sh.x}px, ${sh.y}px)` }}>
        {data.panels.slice(0, 3).map((pn, i) => {
          const at = msToFrames(p.starts[i], fps);
          const hot = i === 2;
          const s = slam(frame, fps, at, 1.35);
          const capFs = fitSize(pn.caption, 46, 40, 40);
          return (
            <div key={i} style={{ flex: 1, opacity: s.opacity, transform: `${s.transform} rotate(${tilt[i]}deg)` }}>
              <div style={{
                position: "relative", height: 640, borderRadius: 18, border: `7px solid ${COLORS.ink}`, overflow: "hidden",
                background: COLORS.surface, boxShadow: `12px 12px 0 ${hot ? COLORS.coral : ctx.accent}`,
                backgroundImage: `radial-gradient(${COLORS.line} 3px, transparent 3.5px)`, backgroundSize: "26px 26px",
                display: "flex", flexDirection: "column",
              }}>
                <div style={{ background: hot ? COLORS.coral : COLORS.ink, color: "#fff", padding: "16px 22px", fontSize: capFs, fontWeight: 700, lineHeight: 1.24, borderBottom: `6px solid ${COLORS.ink}` }}>
                  {pn.caption}
                </div>
                <div style={{ flex: 1, position: "relative" }}>
                  <ComicScene scene={pn.scene} frame={frame} fps={fps} at={at + 4} hot={hot} />
                  {pn.say && (
                    <div style={{ ...pop(frame, fps, at + 14), position: "absolute", left: 20, right: 20, bottom: 22, display: "flex", justifyContent: "center" }}>
                      <div style={{ position: "relative", background: COLORS.surface, border: `5px solid ${COLORS.ink}`, borderRadius: 30, padding: "10px 24px", fontSize: 42, fontWeight: 800, lineHeight: 1.2, textAlign: "center" }}>
                        <div style={{ position: "absolute", top: -26, left: "50%", marginLeft: -16, width: 0, height: 0, borderLeft: "16px solid transparent", borderRight: "16px solid transparent", borderBottom: `26px solid ${COLORS.ink}` }} />
                        “{pn.say}”
                      </div>
                    </div>
                  )}
                </div>
                <div style={{ position: "absolute", top: -2, right: -2 }} />
              </div>
              <div style={{ ...pop(frame, fps, at + 6), position: "relative", marginTop: -40, marginLeft: -10, width: 72, height: 72, borderRadius: "50%", background: hot ? COLORS.coral : ctx.accent, color: "#fff", border: `5px solid ${COLORS.ink}`, display: "grid", placeItems: "center", fontSize: 40, fontWeight: 800 }}>{i + 1}</div>
            </div>
          );
        })}
      </div>
      <div style={{ position: "absolute", inset: -200, background: COLORS.surface, opacity: flash(frame, lastAt + 2, 8) * 0.5, pointerEvents: "none" }} />
    </Stage>
  );
};

// =====================================================================
// STORY-06 Mốc giờ trong ngày: đồng hồ kim quay tới từng mốc, mỗi mốc một việc kèm hình.
// data: { entries:[{time:"HH:MM", text, illus?}], label?, title?, kicker? }
// =====================================================================
const S06_SWEEP = 650;
const s06Plan = (d, c) => plan(d.entries.map((e) => e.text), { level: c.level, lead: 1000 + S06_SWEEP, gap: S06_SWEEP });
const toMin = (t) => {
  const [h, m] = String(t).split(/[:h.]/).map((x) => Number(x) || 0);
  return h * 60 + m;
};

const Clock = ({ mins, size = 420, night, accent }) => {
  const r = size / 2;
  const hA = (mins / 2) % 360; // 0,5 độ mỗi phút
  const mA = (mins * 6) % 360;
  const hand = (a, len, w, color) => {
    const rad = ((a - 90) * Math.PI) / 180;
    return <line x1={r} y1={r} x2={r + Math.cos(rad) * len} y2={r + Math.sin(rad) * len} stroke={color} strokeWidth={w} strokeLinecap="round" />;
  };
  const face = night ? COLORS.ink2 : COLORS.surface;
  const ink = night ? "#fff" : COLORS.ink;
  return (
    <svg width={size} height={size}>
      <circle cx={r} cy={r} r={r - 8} fill={face} stroke={COLORS.ink} strokeWidth={14} />
      {Array.from({ length: 12 }).map((_, i) => {
        const a = ((i * 30 - 90) * Math.PI) / 180;
        const big = i % 3 === 0;
        return <line key={i} x1={r + Math.cos(a) * (r - 30)} y1={r + Math.sin(a) * (r - 30)} x2={r + Math.cos(a) * (r - (big ? 62 : 46))} y2={r + Math.sin(a) * (r - (big ? 62 : 46))} stroke={ink} strokeWidth={big ? 9 : 5} strokeLinecap="round" />;
      })}
      {hand(hA, r * 0.48, 16, ink)}
      {hand(mA, r * 0.7, 10, accent)}
      <circle cx={r} cy={r} r={16} fill={accent} stroke={ink} strokeWidth={5} />
    </svg>
  );
};

const Story06 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = s06Plan(data, ctx);
  const f = (ms) => msToFrames(ms, fps);
  const es = data.entries;
  const sweepF = f(S06_SWEEP);
  // mốc hiện tại và góc kim (quay tiến từ mốc trước tới mốc này)
  let cur = -1;
  es.forEach((e, i) => { if (frame >= f(p.starts[i]) - sweepF) cur = i; });
  const startMin = es.length ? toMin(es[0].time) - 90 : 0;
  let mins = startMin;
  if (cur >= 0) {
    const from = cur === 0 ? startMin : toMin(es[cur - 1].time);
    let to = toMin(es[cur].time);
    if (to < from) to += 24 * 60;
    mins = from + (to - from) * progress(frame, f(p.starts[cur]) - sweepF, sweepF, EASE_STD);
  }
  const hour = Math.floor((mins % 1440) / 60);
  const night = hour >= 18 || hour < 6;
  const shownTime = cur >= 0 ? es[cur].time : "";
  const tick = cur >= 0 ? pop(frame, fps, f(p.starts[cur])) : { opacity: 0, transform: "scale(.6)" };
  const n = es.length;
  const rowFs = n > 4 ? 44 : 50;
  return (
    <Stage accent={ctx.accent} align="left">
      <div style={{ display: "flex", width: "100%", gap: 60, alignItems: "center", height: 770 }}>
        <div style={{ width: 600, flex: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <Label text={data.label} frame={frame} />
          {data.title && <div style={{ ...fadeUp(frame, 4, 10), fontSize: 48, fontWeight: 800, textAlign: "center", lineHeight: 1.15 }}>{data.title}</div>}
          <div style={{ ...pop(frame, fps, 2), position: "relative", marginTop: 10 }}>
            <Clock mins={mins} size={400} night={night} accent={ctx.accent} />
            <div style={{ position: "absolute", right: -40, top: -30, transform: `translateY(${idle(frame, 8, 90)}px)` }}>
              <Illus name={night ? "crescent-moon" : "sun"} size={130} />
            </div>
          </div>
          <div style={{ ...tick, fontSize: 96, fontWeight: 800, color: ctx.accent, fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>{shownTime}</div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: n > 4 ? 12 : 22, position: "relative" }}>
          <div style={{ position: "absolute", left: 99, top: 30, bottom: 30, width: 6, borderRadius: 3, background: COLORS.line }} />
          {es.map((e, i) => {
            const at = f(p.starts[i]);
            const on = i === cur && frame >= at - 2;
            const past = i < cur;
            if (frame < at - 4) return <div key={i} style={{ height: 0 }} />;
            return (
              <div key={i} style={{ ...flyIn(frame, fps, at - 4, "right", 140) }}>
                <div style={{ display: "flex", alignItems: "center", gap: 22, padding: n > 4 ? "8px 20px" : "16px 24px", borderRadius: 26, background: on ? COLORS.surface : "transparent", border: `3px solid ${on ? ctx.accent : "transparent"}`, boxShadow: on ? "0 14px 30px rgba(23,32,51,.10)" : "none", opacity: past ? 0.6 : 1, position: "relative" }}>
                  <div style={{ flex: "none", width: 150, textAlign: "center", padding: "6px 0", borderRadius: 16, position: "relative", background: on ? ctx.accent : COLORS.ink, color: "#fff", fontSize: 42, fontWeight: 800, fontVariantNumeric: "tabular-nums" }}>{e.time}</div>
                  <IllusBadge name={e.illus || "alarm-clock"} size={n > 4 ? 92 : 120} bg={on ? COLORS.pineSoft : COLORS.surface} />
                  <div style={{ fontSize: rowFs, fontWeight: on ? 700 : 600, lineHeight: 1.22 }}>{e.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Stage>
  );
};

// =====================================================================
// STORY-07 Bạn là…: ngôi thứ hai, nền tối, hình nhân vật to dưới đèn rọi, đồ vật mờ phía sau.
// data: { role, scene, question, illus, props?[], label?, kicker? }
// =====================================================================
const s07Plan = (d, c) => plan([d.role, d.scene, d.question], { level: c.level, lead: 600, gap: 450 });

const Story07 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = s07Plan(data, ctx);
  const f = (ms) => msToFrames(ms, fps);
  const qAt = f(p.starts[2]);
  const light = progress(frame, 0, 14);
  const sh = shake(frame, 6, 10, 12);
  const bgProps = (data.props || []).slice(0, 4);
  const spots = [[-860, -380], [560, -420], [-760, 160], [620, 140]];
  return (
    <Stage accent={ctx.accent} bg={COLORS.ink} align="left">
      {/* đồ vật mờ phía sau */}
      {bgProps.map((n, i) => (
        <div key={n + i} style={{ position: "absolute", left: "50%", top: "50%", marginLeft: spots[i][0], marginTop: spots[i][1], filter: "blur(7px)", opacity: 0.28 * light, transform: `translateY(${idle(frame + i * 30, 12, 140)}px) rotate(${i % 2 ? 10 : -10}deg)` }}>
          <Illus name={n} size={260} />
        </div>
      ))}
      <div style={{ display: "flex", width: "100%", alignItems: "center", gap: 40, transform: `translate(${sh.x}px, ${sh.y}px)` }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 26, alignItems: "flex-start" }}>
          <div style={fadeUp(frame, 0, 8)}>
            <Kicker accent={ctx.accent}><Icon name={data.label ? "message-circle" : "user"} size={36} color="#fff" /> {data.label || data.kicker || "Thử đặt mình vào vai"}</Kicker>
          </div>
          <div style={{ ...slam(frame, fps, 4, 2.2), transformOrigin: "left center" }}>
            <FitText text={data.role} max={TYPE.hero} min={TYPE.h2} target={22} color="#fff" align="left" />
          </div>
          <div style={{ ...fadeUp(frame, f(p.starts[1]), 12), maxWidth: 1080 }}>
            <FitText text={data.scene} max={TYPE.body + 4} min={TYPE.small} target={70} weight={600} color={COLORS.line} align="left" />
          </div>
          <div style={{ ...pop(frame, fps, qAt), maxWidth: 1100 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 24, background: COLORS.surface, borderRadius: 30, padding: "24px 34px", boxShadow: `0 0 0 6px ${ctx.accent}` }}>
              <div style={{ flex: "none", width: 96, height: 96, borderRadius: "50%", background: COLORS.marker, display: "grid", placeItems: "center", fontSize: 70, fontWeight: 800, color: COLORS.ink, transform: `rotate(${idle(frame, 6, 50)}deg)` }}>?</div>
              <FitText text={data.question} max={TYPE.body + 2} min={TYPE.small} target={50} align="left" />
            </div>
          </div>
        </div>
        <div style={{ width: 560, height: 700, flex: "none", position: "relative", display: "grid", placeItems: "center" }}>
          {/* đèn rọi */}
          <div style={{ position: "absolute", width: 560, height: 560, borderRadius: "50%", background: `radial-gradient(circle, ${COLORS.surface}33 0%, ${ctx.accent}55 45%, transparent 70%)`, transform: `scale(${0.4 + 0.6 * light})`, opacity: light }} />
          <div style={{ position: "absolute", bottom: 40, width: 380, height: 60, borderRadius: "50%", background: "#000", opacity: 0.35 * light }} />
          <div style={{ ...pop(frame, fps, 2), position: "relative" }}>
            <div style={{ transform: `translateY(${idle(frame, 10, 120)}px)` }}><Illus name={data.illus || "person-standing"} size={460} /></div>
          </div>
          <div style={{ ...pop(frame, fps, qAt + 6), position: "absolute", top: 40, right: 10 }}>
            <Illus name="thinking-face" size={140} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", inset: 0, background: COLORS.surface, opacity: flash(frame, 4, 8) * 0.45, pointerEvents: "none" }} />
    </Stage>
  );
};

// =====================================================================
// STORY-10 Tài liệu đánh dấu: trang tài liệu, bút dạ quét dòng quan trọng, ghi chú bên lề nối bằng đường kẻ.
// data: { docTitle, lines:[string], marks:[{line (số thứ tự, bắt đầu 0), note}], label?, disclaimer?, illus? }
// =====================================================================
const S10 = { pageW: 970, gap: 64, noteW: 690, titleH: 92, lineFs: 44, noteFs: 40, padX: 40 };
const estLines = (text, width, fs, k = 0.6) => Math.max(1, Math.ceil((String(text).length * fs * k) / width));
const s10Plan = (d, c) => {
  const marks = d.marks || [];
  const docMs = readMs(`${d.docTitle} ${d.lines.join(" ")}`, { level: c.level });
  const startMs = 900 + Math.min(docMs * 0.5, 4000);
  let t = startMs;
  const starts = marks.map((m) => {
    const s = t;
    t += 700 + readMs(m.note, { level: c.level, fresh: false });
    return s;
  });
  return { starts, endMs: Math.max(t, 900 + docMs) + (d.disclaimer ? 900 : 500) };
};

const Story10 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const f = (ms) => msToFrames(ms, fps);
  const p = s10Plan(data, ctx);
  const marks = data.marks || [];
  const { pageW, gap, noteW, titleH, lineFs, noteFs, padX } = S10;
  const textW = pageW - padX * 2 - 90;
  const lineH = Math.round(lineFs * 1.24);
  // hình học (ước lượng số dòng để đặt ghi chú đúng ngang dòng được đánh dấu)
  let y = titleH + 14;
  const rows = data.lines.map((t) => {
    const h = estLines(t, textW, lineFs, 0.52) * lineH + 8;
    const r = { y, h };
    y += h;
    return r;
  });
  const pageH = y + 20;
  let noteBottom = 0;
  const notes = marks.map((m) => {
    const r = rows[m.line] || rows[0];
    const h = estLines(m.note, noteW - 110, noteFs, 0.66) * Math.round(noteFs * 1.22) + 34;
    const top = Math.max(r.y + r.h / 2 - h / 2, noteBottom + 16, 0);
    noteBottom = top + h;
    return { top, h, rowMid: r.y + r.h / 2 };
  });
  // ghi chú cuối tràn quá đáy trang thì đẩy cả chồng lên
  let limit = pageH;
  for (let i = notes.length - 1; i >= 0; i--) {
    notes[i].top = Math.max(0, Math.min(notes[i].top, limit - notes[i].h));
    limit = notes[i].top - 16;
  }
  noteBottom = notes.reduce((b, n) => Math.max(b, n.top + n.h), 0);
  const markOf = (li) => marks.findIndex((m) => m.line === li);
  const page = flyIn(frame, fps, 0, "up", 140);
  return (
    <Stage accent={ctx.accent} align="left">
      <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 14, minHeight: 56 }}>
        <Label text={data.label} frame={frame} icon="file-text" />
        {data.disclaimer && (
          <div style={{ ...fadeUp(frame, 10, 10), display: "flex", alignItems: "center", gap: 10, fontSize: 40, fontWeight: 600, color: COLORS.muted }}>
            <Icon name="info" size={38} color={COLORS.muted} /> {data.disclaimer}
          </div>
        )}
      </div>
      <div style={{ position: "relative", width: pageW + gap + noteW, height: Math.max(pageH, noteBottom) }}>
        {/* trang giấy */}
        <div style={{ ...page, position: "absolute", left: 0, top: 0, width: pageW, height: pageH, background: COLORS.surface, borderRadius: 14, border: `2px solid ${COLORS.line}`, boxShadow: "0 24px 50px rgba(23,32,51,.12)" }}>
          <div style={{ position: "absolute", right: 0, top: 0, width: 70, height: 70, background: `linear-gradient(225deg, ${COLORS.paper} 50%, ${COLORS.line} 50%)`, borderBottomLeftRadius: 10 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 20, height: titleH, padding: `0 ${padX}px`, borderBottom: `3px solid ${COLORS.ink}`, margin: `0 ${padX}px`, paddingLeft: 0 }}>
            <Illus name={data.illus || "page-facing-up"} size={78} />
            <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: "-0.01em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{data.docTitle}</div>
          </div>
          {data.lines.map((t, li) => {
            const mi = markOf(li);
            const at = mi >= 0 ? f(p.starts[mi]) : 0;
            const dim = marks.length && frame >= f(p.starts[0]) && mi < 0;
            return (
              <div key={li} style={{ ...fadeUp(frame, 6 + li * 3, 10), position: "absolute", left: padX, top: rows[li].y, width: pageW - padX * 2, height: rows[li].h, display: "flex", gap: 18, alignItems: "center" }}>
                <div style={{ flex: "none", width: 72, fontSize: 40, fontWeight: 800, color: mi >= 0 && frame >= at ? COLORS.coral : COLORS.muted, opacity: dim ? 0.6 : 1 }}>{li + 1}.</div>
                <div style={{ fontSize: lineFs, fontWeight: 600, lineHeight: 1.28, color: dim ? COLORS.muted : COLORS.ink, width: textW }}>
                  {mi >= 0 ? <HL startF={at} dur={14}>{t}</HL> : t}
                </div>
              </div>
            );
          })}
        </div>
        {/* đường nối + ghi chú bên lề */}
        <svg width={gap + 40} height={Math.max(pageH, noteBottom)} style={{ position: "absolute", left: pageW - 20, top: 0, overflow: "visible" }}>
          {notes.map((n, i) => {
            const at = f(p.starts[i]) + 8;
            const pr = progress(frame, at, 10);
            const x1 = 0, y1 = n.rowMid, x2 = gap + 30, y2 = n.top + n.h / 2;
            const len = Math.hypot(x2 - x1, y2 - y1) + 20;
            return (
              <g key={i}>
                <circle cx={x1} cy={y1} r={12} fill={COLORS.coral} opacity={pr > 0 ? 1 : 0} />
                <path d={`M ${x1} ${y1} C ${x1 + 40} ${y1}, ${x2 - 40} ${y2}, ${x2} ${y2}`} fill="none" stroke={COLORS.coral} strokeWidth={6} strokeLinecap="round" strokeDasharray={len} strokeDashoffset={len * (1 - pr)} />
              </g>
            );
          })}
        </svg>
        {marks.map((m, i) => {
          const at = f(p.starts[i]) + 14;
          return (
            <div key={i} style={{ ...flyIn(frame, fps, at, "right", 100), position: "absolute", left: pageW + gap, top: notes[i].top, width: noteW, minHeight: notes[i].h }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px 20px", borderRadius: 22, background: COLORS.coralSoft, border: `3px solid ${COLORS.coral}`, transform: `rotate(${i % 2 ? 0.8 : -0.8}deg)` }}>
                <div style={{ flex: "none", width: 60, height: 60, borderRadius: "50%", background: COLORS.surface, display: "grid", placeItems: "center" }}><Illus name="writing-hand" size={44} /></div>
                <div style={{ fontSize: noteFs, fontWeight: 700, lineHeight: 1.22 }}>{m.note}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Stage>
  );
};

// ---------- danh mục ----------
export const STORY2 = {
  "STORY-02": { name: "Bong bóng hội thoại", family: "STORY", Component: Story02, limits: { messages: [2, 8], text: [1, 16] },
    estimate: (d, c) => chatPlan(d.messages, c, { lead: 900, typing: () => S02_TYPING, lang: langOf(d) }).endMs + 600 },
  "STORY-03": { name: "Tin nhắn điện thoại", family: "STORY", Component: Story03, limits: { messages: [2, 7], text: [1, 30] },
    estimate: (d, c) => s03Plan(d, c).endMs + 600 },
  "STORY-04": { name: "Email", family: "STORY", Component: Story04, limits: { body: [5, 90], marks: [1, 4], note: [3, 14] },
    estimate: (d, c) => s04Plan(d, c).endMs },
  "STORY-05": { name: "Truyện tranh 3 khung", family: "STORY", Component: Story05, limits: { panels: [3, 3], caption: [4, 22], say: [0, 8] },
    estimate: (d, c) => s05Plan(d, c).endMs + 900 },
  "STORY-06": { name: "Mốc giờ trong ngày", family: "STORY", Component: Story06, limits: { entries: [3, 6], text: [3, 14] },
    estimate: (d, c) => s06Plan(d, c).endMs + 700 },
  "STORY-07": { name: "Bạn là…", family: "STORY", Component: Story07, limits: { role: [3, 10], scene: [6, 36], question: [5, 22] },
    estimate: (d, c) => s07Plan(d, c).endMs + 1000 },
  "STORY-10": { name: "Tài liệu đánh dấu", family: "STORY", Component: Story10, limits: { lines: [4, 8], marks: [1, 3], note: [3, 16] },
    estimate: (d, c) => s10Plan(d, c).endMs },
};
