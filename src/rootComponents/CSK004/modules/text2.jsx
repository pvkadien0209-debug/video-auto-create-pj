// text2.jsx — họ TEXT (chữ động), đợt 2: TEXT-02 từng từ bật · TEXT-03 gõ chữ · TEXT-06 thẻ định nghĩa · TEXT-07 câu mẫu song ngữ
// Ô hình tuỳ chọn: illus (tên Fluent Emoji, xem core/illus-names.js); TEXT-07 chunks[].illus.
import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, TYPE } from "../core/theme.js";
import { FitText, Icon, Illus, IllusBadge, Kicker, Marker, Stage, fitSize } from "../core/ui.jsx";
import { blink, fadeUp, flyIn, idle, pop, progress, slam, typed } from "../core/motion.js";
import { msToFrames, readMs } from "../core/timing.js";

const useFF = () => ({ frame: useCurrentFrame(), fps: useVideoConfig().fps });
const norm = (w) => String(w).toLowerCase().replace(/[.,!?;:“”"'‘’()…–-]/g, "");

/** Đánh dấu các từ thuộc cụm từ khoá: trả về mảng boolean cùng độ dài với words. */
const keyMask = (words, keywords = []) => {
  const nw = words.map(norm);
  const mask = words.map(() => false);
  keywords.forEach((k) => {
    const kt = String(k).split(/\s+/).map(norm).filter(Boolean);
    for (let i = 0; i + kt.length <= nw.length; i++) {
      if (kt.every((t, j) => nw[i + j] === t)) for (let j = 0; j < kt.length; j++) mask[i + j] = true;
    }
  });
  return mask;
};

// =====================================================================================
// TEXT-02 Từng từ bật: mỗi từ nảy vào, từ khoá đổi màu nhấn và có gạch chân; hình minh hoạ nảy lên phía trên.
// text (≤ 24 từ), keywords[], illus?, kicker?
// =====================================================================================
const PER02 = 5; // khung hình giữa hai từ
const Text02 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const words = String(data.text).split(/\s+/).filter(Boolean);
  const mask = keyMask(words, data.keywords);
  const size = fitSize(data.text, TYPE.hero, TYPE.h2, 30);
  const t0 = 8;
  const end = t0 + words.length * PER02;
  const pulse = progress(frame, end + 4, 10);
  return (
    <Stage accent={ctx.accent}>
      <div style={{ display: "flex", alignItems: "center", gap: 30, marginBottom: 40 }}>
        <div style={pop(frame, fps, 0)}>
          <div style={{ transform: `translateY(${idle(frame, 6, 100)}px) rotate(${idle(frame, 4, 140)}deg)` }}>
            <IllusBadge name={data.illus || "light-bulb"} size={240} bg={COLORS.pineSoft} />
          </div>
        </div>
        {data.kicker !== false && <div style={fadeUp(frame, 4, 10)}><Kicker accent={ctx.accent}><Icon name="sparkles" size={36} color={COLORS.surface} /> {data.kicker || "Rút ra"}</Kicker></div>}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "baseline", columnGap: size * 0.28, rowGap: size * 0.12, maxWidth: 1640 }}>
        {words.map((w, i) => {
          const at = t0 + i * PER02;
          const p = pop(frame, fps, at);
          const k = mask[i];
          const bump = k ? 1 + 0.08 * Math.sin(Math.PI * pulse) : 1;
          return (
            <span key={i} style={{ position: "relative", display: "inline-block", fontSize: size, fontWeight: 800, lineHeight: 1.15, color: k ? ctx.accent : COLORS.ink, opacity: frame < at ? 0 : p.opacity, transform: `${p.transform} scale(${bump}) translateY(${frame < at + 6 ? -10 * (1 - progress(frame, at, 6)) : 0}px)` }}>
              {w}
              {k && <span style={{ position: "absolute", left: 0, right: 0, bottom: -4, height: 10, borderRadius: 6, background: ctx.accent, opacity: 0.35, transform: `scaleX(${progress(frame, at + 2, 8)})`, transformOrigin: "left" }} />}
            </span>
          );
        })}
      </div>
    </Stage>
  );
};

// =====================================================================================
// TEXT-03 Gõ chữ: một cửa sổ ghi chú chung chung, chữ gõ ra kèm con trỏ nhấp nháy; gõ xong có dấu tích nảy lên.
// text (≤ 20 từ), label? (tên cửa sổ), illus?
// =====================================================================================
const CPS03 = 22;
const typeFrames03 = (text, fps) => Math.ceil((String(text).length / CPS03) * fps);
const Text03 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const t0 = 10;
  const shown = typed(data.text, frame, fps, t0, CPS03);
  const doneAt = t0 + typeFrames03(data.text, fps);
  const done = frame >= doneAt;
  const size = fitSize(data.text, TYPE.h1, TYPE.h2 - 8, 34);
  const win = flyIn(frame, fps, 0, "up", 80);
  return (
    <Stage accent={ctx.accent}>
      <div style={{ position: "relative", ...win }}>
        {/* hình minh hoạ bên trái, nghiêng nhẹ */}
        <div style={{ position: "absolute", left: -70, top: -70, zIndex: 3, ...pop(frame, fps, 4) }}>
          <div style={{ transform: `rotate(${-10 + idle(frame, 3, 120)}deg)` }}><IllusBadge name={data.illus || "writing-hand"} size={190} bg={COLORS.markerSoft} /></div>
        </div>
        <div style={{ width: 1500, borderRadius: 36, background: COLORS.surface, border: `3px solid ${COLORS.line}`, boxShadow: "0 30px 70px rgba(23,32,51,.14)", overflow: "hidden" }}>
          {/* thanh cửa sổ chung chung */}
          <div style={{ height: 84, background: ctx.accent, display: "flex", alignItems: "center", gap: 16, padding: "0 30px 0 160px" }}>
            {[0, 1, 2].map((i) => <span key={i} style={{ width: 22, height: 22, borderRadius: "50%", background: COLORS.surface, opacity: 0.5 + i * 0.2 }} />)}
            <span style={{ marginLeft: 20, fontSize: TYPE.small - 4, fontWeight: 700, color: COLORS.surface }}>{data.label || "Ghi nhớ"}</span>
            <span style={{ marginLeft: "auto" }}><Icon name="pencil" size={40} color={COLORS.surface} /></span>
          </div>
          {/* vùng gõ: dòng kẻ như sổ tay */}
          <div style={{ position: "relative", minHeight: 400, padding: "60px 80px 70px 120px", boxSizing: "border-box",
            backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent ${Math.round(size * 1.3) - 3}px, ${COLORS.line} ${Math.round(size * 1.3) - 3}px, ${COLORS.line} ${Math.round(size * 1.3)}px)`, backgroundPosition: "0 60px" }}>
            <div style={{ position: "absolute", left: 86, top: 0, bottom: 0, width: 4, background: COLORS.coralSoft }} />
            {/* chữ thật đặt ẩn để giữ chỗ, tránh khung nhảy khi gõ */}
            <div style={{ position: "relative", fontSize: size, fontWeight: 800, lineHeight: 1.3, color: COLORS.ink }}>
              <span style={{ visibility: "hidden" }}>{data.text}</span>
              <span style={{ position: "absolute", left: 0, top: 0, right: 0 }}>
                {shown}
                <span style={{ display: "inline-block", width: 8, height: size * 1.05, marginLeft: 6, verticalAlign: "-0.15em", background: ctx.accent, opacity: !done || blink(frame, 18) ? 1 : 0 }} />
              </span>
            </div>
            {/* dấu tích khi gõ xong */}
            <div style={{ position: "absolute", right: 40, bottom: 30, ...pop(frame, fps, doneAt + 4) }}>
              <div style={{ width: 110, height: 110, borderRadius: "50%", background: COLORS.ok, display: "grid", placeItems: "center", boxShadow: "0 12px 26px rgba(23,32,51,.18)" }}>
                <Icon name="check" size={70} color={COLORS.surface} stroke={3.2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Stage>
  );
};

// =====================================================================================
// TEXT-06 Thẻ định nghĩa: bên trái ô hình lớn, bên phải từ (đập vào), phiên âm, nghĩa tiếng Việt, câu ví dụ có tô từ.
// term, ipa?, pos? (loại từ), meaning, example, mark? (cụm tô trong ví dụ, mặc định = term), illus?
// =====================================================================================
const times06 = (d, c) => {
  const a = 600 + (d.ipa ? 500 : 0);
  const b = a + readMs(d.meaning, { level: c.level, fresh: false });
  const e = b + readMs(d.example, { level: c.level, lang: "en", fresh: false });
  return { meaningAt: a, exampleAt: b, endMs: e };
};
const splitMark = (text, mark) => {
  const i = mark ? text.toLowerCase().indexOf(String(mark).toLowerCase()) : -1;
  return i < 0 ? [text, null, ""] : [text.slice(0, i), text.slice(i, i + mark.length), text.slice(i + mark.length)];
};
const Text06 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const t = times06(data, ctx);
  const mAt = msToFrames(t.meaningAt, fps);
  const eAt = msToFrames(t.exampleAt, fps);
  const [pre, mk, post] = splitMark(data.example, data.mark || data.term);
  const termSize = fitSize(data.term, TYPE.hero + 16, TYPE.h2, 10);
  return (
    <Stage accent={ctx.accent}>
      <div style={{ ...flyIn(frame, fps, 0, "up", 60), display: "flex", width: 1680, minHeight: 600, borderRadius: 40, background: COLORS.surface, border: `3px solid ${COLORS.line}`, boxShadow: "0 30px 70px rgba(23,32,51,.12)", overflow: "hidden" }}>
        {/* ô hình */}
        <div style={{ width: 460, flex: "none", background: ctx.accent, position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 30 }}>
          <div style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", background: COLORS.surface, opacity: 0.08, left: -160, top: -180 }} />
          <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: COLORS.surface, opacity: 0.08, right: -120, bottom: -90 }} />
          <div style={pop(frame, fps, 4)}>
            <div style={{ width: 280, height: 280, borderRadius: "50%", background: COLORS.surface, display: "grid", placeItems: "center", transform: `translateY(${idle(frame, 6, 110)}px)` }}>
              <Illus name={data.illus || "open-book"} size={190} />
            </div>
          </div>
          <div style={{ ...fadeUp(frame, 8, 10), display: "flex", alignItems: "center", gap: 12, color: COLORS.surface, fontSize: TYPE.small, fontWeight: 700 }}>
            <Icon name="book-open" size={44} color={COLORS.surface} /> {data.kicker || "Từ cần nhớ"}
          </div>
        </div>
        {/* nội dung */}
        <div style={{ flex: 1, padding: "56px 70px", display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 30, flexWrap: "wrap" }}>
            <div style={{ ...slam(frame, fps, 2, 1.8), transformOrigin: "left center", fontSize: termSize, fontWeight: 800, lineHeight: 1.05, color: COLORS.ink, letterSpacing: "-0.02em" }}>{data.term}</div>
            {data.pos && <div style={{ ...fadeUp(frame, 10, 10), fontSize: TYPE.small, fontWeight: 700, color: ctx.accent, fontStyle: "italic" }}>{data.pos}</div>}
          </div>
          {data.ipa && (
            <div style={{ ...fadeUp(frame, 12, 10), display: "flex", alignItems: "center", gap: 16, marginTop: 14 }}>
              <div style={{ width: 60, height: 60, borderRadius: "50%", background: COLORS.pineSoft, display: "grid", placeItems: "center" }}><Icon name="volume-2" size={36} color={ctx.accent} /></div>
              <span style={{ fontSize: TYPE.body, fontWeight: 500, color: COLORS.muted }}>{data.ipa}</span>
            </div>
          )}
          <div style={{ height: 4, borderRadius: 2, background: COLORS.line, margin: "34px 0 30px", transform: `scaleX(${progress(frame, mAt - 6, 12)})`, transformOrigin: "left" }} />
          <div style={{ ...fadeUp(frame, mAt, 12), display: "flex", gap: 22, alignItems: "flex-start" }}>
            <Kicker accent={ctx.accent} style={{ flex: "none", padding: "8px 20px" }}>Nghĩa</Kicker>
            <div style={{ fontSize: fitSize(data.meaning, TYPE.h2, TYPE.body, 34), fontWeight: 700, lineHeight: 1.22 }}>{data.meaning}</div>
          </div>
          <div style={{ ...fadeUp(frame, eAt, 12), marginTop: 34, padding: "26px 34px", borderRadius: 26, background: COLORS.paper, borderLeft: `10px solid ${ctx.accent}`, display: "flex", gap: 20, alignItems: "flex-start" }}>
            <Icon name="message-square-quote" size={52} color={ctx.accent} />
            <div style={{ fontSize: fitSize(data.example, TYPE.h2 - 4, TYPE.small, 34), fontWeight: 600, lineHeight: 1.3, color: COLORS.ink2 }}>
              {pre}{mk && <b style={{ color: COLORS.ink }}><Marker startF={eAt + 10} dur={12}>{mk}</Marker></b>}{post}
            </div>
          </div>
        </div>
      </div>
    </Stage>
  );
};

// =====================================================================================
// TEXT-07 Câu mẫu song ngữ: câu tiếng Anh lớn trong “…”, các cụm sáng lần lượt (nghĩa nhỏ hiện dưới từng cụm), nghĩa cả câu ở dưới.
// en (≤ 16 từ), vi, chunks[] (chuỗi là một phần của en, hoặc {en, vi?, illus?}), illus? (người nói), kicker?
// =====================================================================================
const chunksOf = (d) => {
  const raw = (d.chunks && d.chunks.length ? d.chunks : [d.en]).map((c) => (typeof c === "string" ? { en: c } : c));
  return raw;
};
const times07 = (d, c) => {
  const ch = chunksOf(d);
  let t = 700; // câu hiện, người xem định hướng
  const at = ch.map((x) => {
    const s = t;
    t += readMs(x.en, { level: c.level, lang: "en", fresh: false }) + (x.vi ? readMs(x.vi, { level: c.level, fresh: false }) : 0) + 200;
    return s;
  });
  const viAt = t;
  return { at, viAt, endMs: viAt + readMs(d.vi, { level: c.level, fresh: false }) };
};
const Text07 = ({ data, ctx }) => {
  const { frame, fps } = useFF();
  const ch = chunksOf(data);
  const t = times07(data, ctx);
  const at = t.at.map((ms) => msToFrames(ms, fps));
  const viAt = msToFrames(t.viAt, fps);
  const cur = at.filter((a) => frame >= a).length - 1;
  const words = String(data.en).split(/\s+/).length;
  const size = words <= 7 ? TYPE.hero : words <= 10 ? TYPE.h1 : TYPE.h2;
  const glossSize = TYPE.small;
  const enter = fadeUp(frame, 0, 12);
  return (
    <Stage accent={ctx.accent}>
      {/* người nói + bong bóng */}
      <div style={{ display: "flex", alignItems: "center", gap: 22, marginBottom: 26, ...fadeUp(frame, 0, 10) }}>
        <div style={pop(frame, fps, 0)}><IllusBadge name={data.illus || "speaking-head"} size={116} /></div>
        <div style={{ transform: `translateY(${idle(frame, 4, 90)}px)` }}><Illus name="speech-balloon" size={86} /></div>
        <Kicker accent={ctx.accent}><Icon name="languages" size={36} color={COLORS.surface} /> {data.kicker || "Câu mẫu"}</Kicker>
      </div>
      {/* câu tiếng Anh theo cụm */}
      <div style={{ ...enter, position: "relative", maxWidth: 1700, padding: "28px 64px 24px", borderRadius: 40, background: COLORS.surface, border: `3px solid ${COLORS.line}`, boxShadow: "0 26px 60px rgba(23,32,51,.10)" }}>
        <span style={{ position: "absolute", left: 18, top: -30, fontSize: 200, lineHeight: 1, fontWeight: 800, color: ctx.accent, opacity: 0.25 }}>“</span>
        <span style={{ position: "absolute", right: 22, bottom: -110, fontSize: 200, lineHeight: 1, fontWeight: 800, color: ctx.accent, opacity: 0.25 }}>”</span>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", columnGap: size * 0.26, rowGap: 10 }}>
          {ch.map((x, i) => {
            const lit = i <= cur;
            const now = i === cur && frame < viAt;
            const lp = progress(frame, at[i], 10);
            return (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", transform: `scale(${now ? 1 + 0.04 * lp : 1})` }}>
                <div style={{ position: "relative", fontSize: size, fontWeight: 800, lineHeight: 1.18, color: lit ? (now ? ctx.accent : COLORS.ink) : COLORS.muted, opacity: lit ? 1 : 0.55, padding: "0 6px" }}>
                  {lit && <span style={{ position: "absolute", left: 0, right: 0, bottom: 2, height: "0.28em", borderRadius: 8, background: now ? COLORS.marker : COLORS.pineSoft, transform: `scaleX(${lp})`, transformOrigin: "left", zIndex: 0 }} />}
                  <span style={{ position: "relative", zIndex: 1 }}>{x.en}</span>
                </div>
                {(x.vi || x.illus) && (
                  <div style={{ ...fadeUp(frame, at[i] + 4, 10), display: "flex", alignItems: "center", gap: 10, marginTop: 6 }}>
                    {x.illus && <Illus name={x.illus} size={56} />}
                    {x.vi && <span style={{ fontSize: glossSize, fontWeight: 600, color: now ? ctx.accent : COLORS.muted }}>{x.vi}</span>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {/* nghĩa cả câu */}
      <div style={{ ...fadeUp(frame, viAt, 12), display: "flex", alignItems: "center", gap: 22, marginTop: 30, maxWidth: 1600 }}>
        <div style={{ width: 76, height: 76, borderRadius: "50%", background: ctx.accent, display: "grid", placeItems: "center", flex: "none" }}><Icon name="arrow-down-right" size={44} color={COLORS.surface} stroke={2.8} /></div>
        <div style={{ fontSize: fitSize(data.vi, TYPE.h2, TYPE.body, 30), fontWeight: 600, color: COLORS.ink2, lineHeight: 1.25 }}>{data.vi}</div>
      </div>
    </Stage>
  );
};

export const TEXT2 = {
  "TEXT-02": { name: "Từng từ bật", family: "TEXT", Component: Text02, limits: { text: [3, 24], keywords: [0, 3] },
    estimate: (d, c) => Math.max(readMs(d.text, c), (8 + String(d.text).split(/\s+/).length * PER02 + 14) / 30 * 1000) + 900 },
  "TEXT-03": { name: "Gõ chữ", family: "TEXT", Component: Text03, limits: { text: [3, 20] },
    estimate: (d, c) => Math.max(readMs(d.text, c), ((10 + typeFrames03(d.text, 30)) / 30) * 1000 + 600) + 900 },
  "TEXT-06": { name: "Thẻ định nghĩa", family: "TEXT", Component: Text06, limits: { meaning: [3, 20], example: [3, 14] },
    estimate: (d, c) => times06(d, c).endMs + 1200 },
  "TEXT-07": { name: "Câu mẫu song ngữ", family: "TEXT", Component: Text07, limits: { en: [3, 16], chunks: [1, 5] },
    estimate: (d, c) => times07(d, c).endMs + 1000 },
};
