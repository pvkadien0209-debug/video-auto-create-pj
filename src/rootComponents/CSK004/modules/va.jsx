// va.jsx — 6 module rút từ video mẫu (#108, #109; DetPro/research/video-mau-hung-yen §6):
//   TOC-01  MUC-LUC-CHUONG       mục lục chương 01/02/03 (VA-03)
//   TYPE-01 CHU-GO-DAN           chữ gõ dần + tiếng gõ "go-phim-01" (VA-06)
//   STAT-01 THE-SO-LIEU          thẻ số liệu một màu nhấn, đếm số (VA-07)
//   SRC-01  TRICH-NGUON-TO-CAU   trích nguồn, tô vàng câu đang đọc (VA-08)
//   ASK-01  CAU-HOI-PHU          câu hỏi phụ "Vậy … là gì?" trong thân bài (VA-14)
//   MYTH-01 KHONG-PHAI-MA-LA     "Không phải A, mà là B" — gỡ hiểu lầm ở đầu, nhắc lại ở kết (VA-13)
// Mọi phần tử mới hiện theo lời đọc (ctx.lines[i].startMs) để không khung nào đứng yên quá 4 s (§9).
import React from "react";
import { AbsoluteFill, Audio, Easing, Sequence, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT, SAFE } from "../core/theme.js";
import { Icon, Illus, IllusBadge, Kicker, Stage, fitSize } from "../core/ui.jsx";
import { blink, idle } from "../core/motion.js";
import { readMs } from "../core/timing.js";

const cl = { extrapolateLeft: "clamp", extrapolateRight: "clamp" };
const tOf = (frame, fps) => (frame / fps) * 1000;
const ramp = (t, a, b) => interpolate(t, [a, b], [0, 1], { ...cl, easing: Easing.out(Easing.cubic) });
const lastEnd = (c) => (c?.lines?.length ? c.lines.at(-1).endMs : 0);
/** Thời điểm (ms) phần tử thứ i hiện: đầu câu đọc thứ i nếu có, không thì rải đều. */
const cueAt = (c, i, fallback) => c?.lines?.[i]?.startMs ?? fallback;
const msF = (ms, fps) => Math.max(0, Math.round((ms / 1000) * fps));
const pad2 = (n) => String(n).padStart(2, "0");
const words = (s) => String(s || "").trim().split(/\s+/).filter(Boolean).length;

/** Nền tối kẻ ô cố định cho thẻ số liệu (VA-07: mọi video cùng một nền). */
const GridBg = ({ frame }) => (
  <AbsoluteFill style={{ background: COLORS.ink }}>
    <AbsoluteFill style={{
      backgroundImage: "linear-gradient(rgba(255,255,255,.05) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,.05) 2px, transparent 2px)",
      backgroundSize: "64px 64px", backgroundPosition: `${idle(frame, 10, 400)}px ${idle(frame, 8, 500)}px`,
    }} />
  </AbsoluteFill>
);

// =====================================================================
// TOC-01 MUC-LUC-CHUONG — mục lục chương 01/02/03.
// data: { title?, chapters?: [string | { label, illus? }], current? }
//   - không có current: hiện cả mục lục, từng dòng sáng lần lượt (ngay sau câu hỏi chính, 3–4 s).
//   - current = n (1…): nhắc lại mục lục, chương n sáng lên, chương trước có dấu ✓ (1,5–2 s).
//   - không ghi chapters: lấy tên các cảnh HOST-03 của kịch bản (ctx.chapters).
// =====================================================================
const chaptersOf = (d, c) => {
  const raw = d.chapters?.length ? d.chapters : d.stops?.length ? d.stops : (c?.chapters || []);
  const strip = (s) => String(s || "").replace(/^\s*\d+[.)]\s*/, ""); // "1. Giá vốn" → "Giá vốn" (số đã có ở cột 01/02)
  return raw.map((x) => (typeof x === "string" ? { label: strip(x) } : { ...x, label: strip(x.label ?? x.text) }));
};
const tocPlan = (d, c) => {
  const n = chaptersOf(d, c).length || 1;
  if (d.current) return { starts: Array(n).fill(0), end: 1600 };
  const first = 500, voice = Math.max(lastEnd(c), 0);
  const step = Math.max(280, Math.min(520, ((voice || n * 450) - first) / n));
  return { starts: Array.from({ length: n }, (_, i) => first + i * step), end: first + n * step + 900 };
};
const Toc01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = tOf(frame, fps);
  const ch = chaptersOf(data, ctx);
  const cur = Number(data.current) || 0;
  const P = tocPlan(data, ctx);
  const n = ch.length;
  const rowH = n > 5 ? 88 : 104;
  const fs = n > 5 ? 46 : 52;
  const title = data.title ?? (cur ? "Mục lục" : "Hôm nay mình đi qua");
  return (
    <Stage accent={ctx.accent}>
      <div style={{ width: 1500, display: "flex", flexDirection: "column", gap: 22 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, opacity: ramp(t, 0, 300) }}>
          <Icon name="list-ordered" size={60} color={ctx.accent} />
          <div style={{ fontSize: 58, fontWeight: 800 }}>{title}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {ch.map((c, i) => {
            const k = i + 1;
            const inn = cur ? ramp(t, i * 40, i * 40 + 220) : ramp(t, P.starts[i], P.starts[i] + 260);
            const on = cur ? k === cur : t >= P.starts[i] && (i === n - 1 || t < P.starts[i + 1] + 120);
            const done = cur && k < cur;
            const lit = cur ? (k === cur ? spring({ frame: frame - 8, fps, config: { damping: 12, stiffness: 140 } }) : 0) : on ? 1 : 0;
            const dim = cur ? (k === cur ? 1 : 0.42) : 1;
            return (
              <div key={i} style={{
                height: rowH, display: "flex", alignItems: "center", gap: 28, padding: "0 30px", borderRadius: 22,
                background: lit > 0.01 ? (cur ? COLORS.markerSoft : COLORS.surface) : "transparent",
                border: `3px solid ${lit > 0.01 ? (cur ? COLORS.marker : COLORS.line) : "transparent"}`,
                boxShadow: lit > 0.01 ? "0 14px 30px rgba(23,32,51,.10)" : "none",
                opacity: inn * dim, transform: `translateX(${(1 - inn) * 80}px) scale(${1 + 0.035 * lit})`, transformOrigin: "left center",
              }}>
                <div style={{ width: 110, fontSize: fs + 14, fontWeight: 800, color: ctx.accent, fontVariantNumeric: "tabular-nums" }}>{pad2(k)}</div>
                <div style={{ flex: 1, fontSize: fs, fontWeight: k === cur ? 800 : 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{c.label}</div>
                {done ? <Icon name="check" size={56} color={COLORS.ok} stroke={3} /> : c.illus ? <Illus name={c.illus} size={rowH - 26} /> : null}
              </div>
            );
          })}
        </div>
      </div>
    </Stage>
  );
};

// =====================================================================
// TYPE-01 CHU-GO-DAN — chữ gõ dần (số liệu, nhãn, phép tính) + tiếng gõ nhỏ.
// data: { kicker?, items: [string] (1–3) hoặc text, note?, illus? }
// Tiếng gõ: audio.sfx["go-phim-01"] (hoặc audio.sfx.type) — ≤ 1,2 s, −20 dB dưới giọng (luật 10, ngoại lệ VA-06).
// =====================================================================
const CPS = 26;
const typeItems = (d) => (d.items?.length ? d.items : d.text ? [d.text] : []);
const typePlan = (d, c) => {
  const items = typeItems(d);
  const starts = items.map((_, i) => cueAt(c, i, 400 + i * 1500));
  const lastDone = starts.at(-1) + (String(items.at(-1)).length / CPS) * 1000;
  return { starts, end: Math.max(lastDone + 900, readMs(items.join(" "), c) + 400) };
};
const Type01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = tOf(frame, fps);
  const items = typeItems(data);
  const P = typePlan(data, ctx);
  const sfx = ctx.sfx?.["go-phim-01"] || ctx.sfx?.type;
  const big = items.length === 1;
  return (
    <Stage accent={ctx.accent}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: big ? 40 : 30, width: 1600 }}>
        {data.kicker && <div style={{ opacity: ramp(t, 0, 250) }}><Kicker accent={ctx.accent}><Icon name="keyboard" size={36} color="#fff" /> {data.kicker}</Kicker></div>}
        {items.map((s, i) => {
          const st = P.starts[i];
          const n = Math.max(0, Math.floor(((t - st) / 1000) * CPS));
          const shown = String(s).slice(0, n);
          const typing = n > 0 && n < String(s).length;
          const done = n >= String(s).length;
          const fs = big ? fitSize(s, 120, 64, 14) : fitSize(s, 84, 52, 20);
          return (
            <div key={i} style={{
              minHeight: fs * 1.25, fontSize: fs, fontWeight: 800, letterSpacing: "-0.01em", textAlign: "center",
              fontVariantNumeric: "tabular-nums", color: i === items.length - 1 && done && items.length > 1 ? ctx.accent : COLORS.ink,
              opacity: t < st - 80 ? 0.0 : 1,
            }}>
              {shown}
              <span style={{ display: "inline-block", width: Math.round(fs * 0.08), height: fs * 0.95, marginLeft: 8, verticalAlign: "-0.12em",
                background: ctx.accent, opacity: t >= st && (typing || (!done ? true : blink(frame, 20) && i === items.length - 1)) ? 1 : 0 }} />
            </div>
          );
        })}
        {data.note && (
          <div style={{ fontSize: 48, fontWeight: 600, color: COLORS.muted, fontStyle: "italic", textAlign: "center",
            opacity: ramp(t, P.end - 900, P.end - 600) }}>{data.note}</div>
        )}
      </div>
      {data.illus && <div style={{ position: "absolute", right: 40, top: -10, opacity: ramp(t, 200, 500), transform: `translateY(${idle(frame, 6, 90)}px)` }}><Illus name={data.illus} size={170} /></div>}
      {sfx && items.map((s, i) => {
        const dur = Math.min(1200, (String(s).length / CPS) * 1000);
        return (
          <Sequence key={i} from={msF(P.starts[i], fps)} durationInFrames={Math.max(1, msF(dur, fps))} layout="none">
            <Audio src={staticFile(sfx)} volume={0.1} />
          </Sequence>
        );
      })}
    </Stage>
  );
};

// =====================================================================
// STAT-01 THE-SO-LIEU — số to màu nhấn + nhãn nhỏ chữ nghiêng, đếm số, nền tối kẻ ô cố định.
// data: { kicker?, stats: [{ value, prefix?, suffix?, decimals?, label }] (1–3), source }
// value là số thì đếm từ 0; là chữ ("1/3", "7–9") thì hiện bật. Số phải lấy từ bài có dẫn nguồn (#088).
// =====================================================================
const fmtNum = (v, dec) => {
  const s = v.toFixed(dec);
  const [a, b] = s.split(".");
  return a.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (b ? "," + b : ""); // kiểu Việt: 1.200,5
};
const statPlan = (d, c) => {
  const st = d.stats || [];
  const starts = st.map((_, i) => cueAt(c, i, 400 + i * 1600));
  return { starts, end: Math.max(starts.at(-1) + 1100 + readMs(st.at(-1)?.label, c), 2600) };
};
const Stat01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = tOf(frame, fps);
  const stats = data.stats || [];
  const P = statPlan(data, ctx);
  const n = stats.length;
  const numFs = n === 1 ? 230 : n === 2 ? 170 : 130;
  return (
    <AbsoluteFill style={{ fontFamily: FONT, color: "#fff" }}>
      <GridBg frame={frame} />
      <div style={{ position: "absolute", left: SAFE.x, right: SAFE.x, top: SAFE.top, bottom: SAFE.bottom, display: "flex", flexDirection: "column", justifyContent: "center", gap: 40 }}>
        {data.kicker && <div style={{ fontSize: 46, fontWeight: 700, color: COLORS.marker, letterSpacing: "0.04em", opacity: ramp(t, 0, 300), textAlign: "center" }}>{data.kicker}</div>}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: n === 1 ? 0 : 90 }}>
          {stats.map((s, i) => {
            const st = P.starts[i];
            const inn = spring({ frame: frame - msF(st, fps), fps, config: { damping: 14, stiffness: 130 } });
            const isNum = typeof s.value === "number";
            const dec = s.decimals ?? (isNum && !Number.isInteger(s.value) ? 1 : 0);
            const p = interpolate(t, [st, st + 900], [0, 1], { ...cl, easing: Easing.out(Easing.cubic) });
            const val = isNum ? fmtNum(s.value * p, dec) : String(s.value);
            return (
              <div key={i} style={{ flex: 1, maxWidth: n === 1 ? 1400 : 560, display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
                opacity: t < st ? 0 : Math.min(1, inn * 1.4), transform: `translateY(${(1 - inn) * 60}px)` }}>
                <div style={{ fontSize: numFs, fontWeight: 800, lineHeight: 1, color: COLORS.marker, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap", letterSpacing: "-0.02em" }}>
                  {s.prefix || ""}{val}<span style={{ fontSize: numFs * 0.42 }}>{s.suffix || ""}</span>
                </div>
                <div style={{ fontSize: fitSize(s.label, 54, 44, 24), fontStyle: "italic", fontWeight: 500, color: "rgba(255,255,255,.88)", textAlign: "center", textWrap: "balance", lineHeight: 1.2,
                  opacity: ramp(t, st + 500, st + 800) }}>{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
      {data.source && (
        <div style={{ position: "absolute", left: SAFE.x, right: SAFE.x, bottom: SAFE.bottom + 6, fontSize: 30, color: "rgba(255,255,255,.62)", textAlign: "center",
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", opacity: ramp(t, 300, 700) }}>Nguồn: {data.source}</div>
      )}
    </AbsoluteFill>
  );
};

// =====================================================================
// SRC-01 TRICH-NGUON-TO-CAU — trang nguồn dựng lại bằng chữ (không chụp ảnh trang), tô vàng đúng câu đang đọc.
// data: { source, kind?, title?, sentences: [string] (2–6), hl?: [số thứ tự câu tô theo từng câu đọc] }
//   hl mặc định: câu đọc thứ i tô câu i. Câu trích phải lấy đúng từ nguồn bài đã dẫn (#088).
// =====================================================================
const srcPlan = (d, c) => {
  const S = d.sentences || [];
  const hl = d.hl?.length ? d.hl : S.map((_, i) => i);
  const starts = hl.map((_, i) => cueAt(c, i, 900 + i * 2200));
  const end = Math.max(starts.at(-1) + readMs(S[hl.at(-1)] || "", c) + 600, 3200);
  return { hl, starts, end };
};
const Src01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = tOf(frame, fps);
  const S = data.sentences || [];
  const P = srcPlan(data, ctx);
  let k = -1;
  P.starts.forEach((s, i) => { if (t >= s - 120) k = i; });
  const curS = k >= 0 ? P.hl[k] : -1;
  const curStart = k >= 0 ? P.starts[k] : 0;
  const inn = spring({ frame, fps, config: { damping: 16, stiffness: 110 } });
  const zoom = 1 + 0.05 * ramp(t, 0, P.end);
  const len = S.join(" ").length;
  const fs = len < 140 ? 68 : len < 260 ? 58 : len < 380 ? 50 : 44;
  return (
    <AbsoluteFill style={{ background: `linear-gradient(160deg, ${COLORS.paper}, #e6eaf1)`, fontFamily: FONT, color: COLORS.ink, overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 230, right: 230, top: 96, bottom: SAFE.bottom + 8, background: COLORS.surface, borderRadius: 26,
        boxShadow: "0 30px 70px rgba(23,32,51,.18)", border: `2px solid ${COLORS.line}`, overflow: "hidden",
        opacity: Math.min(1, inn * 1.3), transform: `translateY(${(1 - inn) * 80}px) rotate(${(1 - inn) * -2 - 0.6}deg) scale(${zoom})` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, padding: "20px 40px", background: COLORS.ink, color: "#fff" }}>
          <Icon name={data.kind === "báo" ? "newspaper" : "book-open"} size={44} color={COLORS.marker} />
          <div style={{ flex: 1, fontSize: 36, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{data.source}</div>
          <Icon name="quote" size={40} color="rgba(255,255,255,.5)" />
        </div>
        <div style={{ padding: "30px 64px", display: "flex", flexDirection: "column", gap: 22, justifyContent: "center", height: "calc(100% - 92px)", boxSizing: "border-box" }}>
          {data.title && <div style={{ fontSize: 50, fontWeight: 800, lineHeight: 1.15 }}>{data.title}</div>}
          <div style={{ fontSize: fs, lineHeight: 1.5, fontWeight: 500, fontFamily: "Georgia, 'Be Vietnam Pro', serif" }}>
            {S.map((s, i) => {
              const on = i === curS;
              const p = on ? ramp(t, curStart, curStart + 420) : 0;
              const wasOn = P.hl.slice(0, Math.max(0, k)).includes(i);
              return (
                <React.Fragment key={i}>
                  <span style={{
                    backgroundImage: `linear-gradient(${COLORS.marker}, ${COLORS.marker})`, backgroundRepeat: "no-repeat",
                    backgroundSize: `${p * 100}% 0.62em`, backgroundPosition: "0 88%",
                    color: k < 0 || on ? COLORS.ink : wasOn ? COLORS.ink2 : COLORS.muted, fontWeight: on ? 700 : 500,
                    boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone",
                  }}>{s}</span>{" "}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// =====================================================================
// ASK-01 CAU-HOI-PHU — câu hỏi phụ trong thân bài: "Vậy … là gì?" hiện bằng chữ trước khi giải thích (≥ 2 s).
// data: { q, kicker?, illus? }
// =====================================================================
const askPlan = (d, c) => ({ end: Math.max(2400, readMs(d.q, c) + 1200, lastEnd(c) + 400) });
const Ask01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = tOf(frame, fps);
  const W = String(data.q || "").split(/\s+/).filter(Boolean);
  const per = Math.min(110, 900 / Math.max(1, W.length));
  const qm = spring({ frame: frame - 2, fps, config: { damping: 7, stiffness: 160 } });
  return (
    <Stage accent={ctx.accent}>
      <div style={{ display: "flex", alignItems: "center", gap: 70, width: 1620 }}>
        <div style={{ position: "relative", width: 330, height: 330, flex: "none", transform: `scale(${qm}) rotate(${(1 - qm) * -30 + idle(frame, 4, 70)}deg)` }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: ctx.accent, opacity: 0.14 }} />
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}><Illus name={data.illus || "red-question-mark"} size={230} /></div>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ opacity: ramp(t, 100, 350) }}><Kicker accent={ctx.accent}><Icon name="circle-help" size={36} color="#fff" /> {data.kicker || "Câu hỏi nhỏ"}</Kicker></div>
          <div style={{ fontSize: fitSize(data.q, 96, 60, 22), fontWeight: 800, lineHeight: 1.16, textWrap: "balance" }}>
            {W.map((w, i) => {
              const a = ramp(t, 250 + i * per, 250 + i * per + 220);
              return <span key={i} style={{ display: "inline-block", marginRight: "0.26em", opacity: a, transform: `translateY(${(1 - a) * 24}px)` }}>{w}</span>;
            })}
          </div>
        </div>
      </div>
    </Stage>
  );
};

// =====================================================================
// MYTH-01 KHONG-PHAI-MA-LA — "Không phải A, mà là B": A hiện rồi bị gạch, B trượt vào và được tô.
// data: { wrong, right, kicker?, recap? }  recap: true = nhắc lại ở phần kết (nhanh hơn, không gạch dần).
// Câu đọc 1 → A, câu đọc 2 → B (không có câu 2 thì B hiện sau khi A bị gạch).
// =====================================================================
const mythPlan = (d, c) => {
  const a = cueAt(c, 0, 300);
  const strike = d.recap ? a + 500 : Math.max(a + 1300, (c?.lines?.[0]?.endMs ?? a + readMs(d.wrong, c)) - 200);
  const b = d.recap ? a + 900 : cueAt(c, 1, strike + 450);
  return { a, strike, b, end: Math.max(b + readMs(d.right, c) + 700, lastEnd(c) + 400) };
};
const Myth01 = ({ data, ctx }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const t = tOf(frame, fps);
  const P = mythPlan(data, ctx);
  const aIn = ramp(t, P.a, P.a + 300);
  const st = ramp(t, P.strike, P.strike + 350);
  const bIn = spring({ frame: frame - msF(P.b, fps), fps, config: { damping: 13, stiffness: 140 } });
  const mk = ramp(t, P.b + 350, P.b + 800);
  const fsA = fitSize(data.wrong, 64, 46, 26), fsB = fitSize(data.right, 76, 50, 24);
  return (
    <Stage accent={ctx.accent}>
      <div style={{ width: 1560, display: "flex", flexDirection: "column", gap: 34 }}>
        {(data.kicker || data.recap) && (
          <div style={{ opacity: ramp(t, 0, 250) }}><Kicker accent={ctx.accent}><Icon name={data.recap ? "rotate-ccw" : "lightbulb"} size={36} color="#fff" /> {data.kicker || "Nhớ lại"}</Kicker></div>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 30, opacity: aIn * (1 - 0.35 * st), transform: `translateX(${(1 - aIn) * -60}px)` }}>
          <div style={{ width: 290, flex: "none", fontSize: 44, fontWeight: 800, color: COLORS.coral, letterSpacing: "0.02em", whiteSpace: "nowrap" }}>KHÔNG PHẢI</div>
          <div style={{ flex: 1, background: COLORS.coralSoft, borderRadius: 24, padding: "24px 34px", fontSize: fsA, fontWeight: 700, color: COLORS.ink2, lineHeight: 1.2 }}>
            <span style={{ backgroundImage: `linear-gradient(${COLORS.coral}, ${COLORS.coral})`, backgroundRepeat: "no-repeat",
              backgroundSize: `${st * 100}% 6px`, backgroundPosition: "0 56%", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>{data.wrong}</span>
          </div>
          <div style={{ width: 90, flex: "none", opacity: st, transform: `scale(${0.6 + 0.4 * st})` }}><Illus name="cross-mark" size={86} /></div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 30, opacity: t < P.b ? 0 : Math.min(1, bIn * 1.4), transform: `translateY(${(1 - bIn) * 60}px)` }}>
          <div style={{ width: 290, flex: "none", fontSize: 44, fontWeight: 800, color: ctx.accent, letterSpacing: "0.02em", whiteSpace: "nowrap" }}>MÀ LÀ</div>
          <div style={{ flex: 1, background: COLORS.surface, border: `3px solid ${ctx.accent}`, borderRadius: 24, padding: "26px 34px", fontSize: fsB, fontWeight: 800, lineHeight: 1.2,
            boxShadow: "0 18px 40px rgba(23,32,51,.10)" }}>
            <span style={{ backgroundImage: `linear-gradient(${COLORS.marker}, ${COLORS.marker})`, backgroundRepeat: "no-repeat", backgroundSize: `${mk * 100}% 0.5em`,
              backgroundPosition: "0 90%", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>{data.right}</span>
          </div>
          <div style={{ width: 90, flex: "none", opacity: mk, transform: `scale(${0.6 + 0.4 * mk})` }}><Illus name="check-mark-button" size={86} /></div>
        </div>
      </div>
    </Stage>
  );
};

// =====================================================================
export const VA = {
  "TOC-01": { name: "Mục lục chương (MUC-LUC-CHUONG)", family: "TOC", Component: Toc01, limits: { chapters: [2, 7] },
    check: (d) => (d.current && d.chapters?.length && Number(d.current) > d.chapters.length ? ["current lớn hơn số chương"] : []),
    estimate: (d, c) => Math.max(tocPlan(d, c).end, lastEnd(c) + 300) },
  "TYPE-01": { name: "Chữ gõ dần (CHU-GO-DAN)", family: "TYPE", Component: Type01, limits: { items: [1, 3] },
    check: (d) => (typeItems(d).length ? typeItems(d).filter((s) => String(s).length > 48).map((s) => `dòng gõ quá dài (> 48 ký tự): "${s}"`) : ["cần items hoặc text"]),
    estimate: (d, c) => Math.max(typePlan(d, c).end, lastEnd(c) + 300) },
  "STAT-01": { name: "Thẻ số liệu (THE-SO-LIEU)", family: "NUM", Component: Stat01, limits: { stats: [1, 3] }, needsSource: true,
    check: (d) => (d.stats || []).flatMap((s, i) => [...(s.value == null ? [`stats[${i}] thiếu value`] : []), ...(!s.label ? [`stats[${i}] thiếu label`] : []), ...(words(s.label) > 12 ? [`stats[${i}].label quá 12 tiếng`] : [])]),
    estimate: (d, c) => Math.max(statPlan(d, c).end, lastEnd(c) + 400) },
  "SRC-01": { name: "Trích nguồn, tô câu (TRICH-NGUON-TO-CAU)", family: "SRC", Component: Src01, limits: { sentences: [2, 6] }, needsSource: true,
    check: (d) => [...(d.hl || []).filter((i) => !(i >= 0 && i < (d.sentences || []).length)).map((i) => `hl ${i} không có trong sentences`),
      ...((d.sentences || []).join(" ").length > 520 ? ["sentences quá dài (> 520 ký tự)"] : [])],
    estimate: (d, c) => Math.max(srcPlan(d, c).end, lastEnd(c) + 400) },
  "ASK-01": { name: "Câu hỏi phụ (CAU-HOI-PHU)", family: "ASK", Component: Ask01, limits: { q: [3, 18] },
    estimate: (d, c) => askPlan(d, c).end },
  "MYTH-01": { name: "Không phải… mà là (KHONG-PHAI-MA-LA)", family: "MYTH", Component: Myth01, limits: { wrong: [2, 18], right: [2, 20] },
    estimate: (d, c) => mythPlan(d, c).end },
};
