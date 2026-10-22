// ui.jsx — phần lõi dùng chung: khung hình, chữ tự co, biểu tượng, thẻ, đường nối, bút dạ quang.
import React from "react";
import { AbsoluteFill, Img, staticFile, useCurrentFrame } from "remotion";
import { ILLUS } from "./illus-names.js";
import { COLORS, FONT, SAFE, TYPE } from "./theme.js";
import { ICONS } from "./icons.js";
import { idle, progress } from "./motion.js";

/** Khung hình chung: nền, vùng an toàn, chừa dải phụ đề phía dưới. */
export const Stage = ({ children, accent = COLORS.pine, align = "center", bg = COLORS.paper }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: bg, fontFamily: FONT, color: COLORS.ink }}>
      {/* vệt màu nền thở nhẹ để màn không đứng chết */}
      <div
        style={{
          position: "absolute", width: 900, height: 900, borderRadius: "50%", right: -260, top: -320,
          background: accent, opacity: 0.06, transform: `translate(${idle(frame, 14, 240)}px, ${idle(frame, 10, 300)}px)`,
        }}
      />
      <div
        style={{
          position: "absolute", left: SAFE.x, right: SAFE.x, top: SAFE.top, bottom: SAFE.bottom,
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: align === "left" ? "flex-start" : "center",
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};

/** Cỡ chữ tự co theo độ dài: chữ ngắn thì to, chữ dài thì nhỏ dần, không nhỏ hơn min. */
export const fitSize = (text, max = TYPE.h1, min = TYPE.small, target = 28) => {
  const n = String(text || "").length || 1;
  return Math.round(Math.max(min, Math.min(max, max * Math.sqrt(target / n))));
};

export const FitText = ({ text, max, min, target, weight = 800, color = COLORS.ink, style, align = "center" }) => (
  <div style={{ fontSize: fitSize(text, max, min, target), fontWeight: weight, color, lineHeight: 1.18, textAlign: align, letterSpacing: "-0.01em", textWrap: "balance", ...style }}>
    {text}
  </div>
);

export const Icon = ({ name, size = 72, color = COLORS.ink, stroke = 2 }) => {
  const inner = ICONS[name] || ICONS["sparkles"];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: inner }} />
  );
};

/** Dòng nhỏ phía trên (kicker), dạng nhãn có màu nhấn. */
export const Kicker = ({ children, accent = COLORS.pine, style }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 14, padding: "10px 26px", borderRadius: 999, background: accent, color: "#fff", fontSize: TYPE.small - 4, fontWeight: 700, letterSpacing: "0.01em", ...style }}>
    {children}
  </div>
);

export const Card = ({ children, style, tone = "surface" }) => {
  const bg = { surface: COLORS.surface, soft: COLORS.pineSoft, marker: COLORS.markerSoft, coral: COLORS.coralSoft }[tone] || tone;
  return (
    <div style={{ background: bg, borderRadius: 32, padding: "36px 44px", border: `2px solid ${COLORS.line}`, boxShadow: "0 18px 40px rgba(23,32,51,.08)", ...style }}>
      {children}
    </div>
  );
};

/** Bút dạ quang quét qua chữ (sweep): thanh vàng scaleX 0 → 1 sau chữ. */
export const Marker = ({ children, startF = 0, dur = 12 }) => {
  const frame = useCurrentFrame();
  const p = progress(frame, startF, dur);
  return (
    <span style={{ position: "relative", whiteSpace: "pre-wrap" }}>
      <span style={{ position: "absolute", left: -6, right: -6, bottom: "0.06em", height: "0.5em", background: COLORS.marker, borderRadius: 8, transform: `scaleX(${p})`, transformOrigin: "left", zIndex: 0 }} />
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </span>
  );
};

/** Đường cong có mũi tên, vẽ dần từ trái sang phải (draw). p = 0 → 1. */
export const DrawArrow = ({ width = 320, height = 120, p = 1, color = COLORS.pine, curve = 50 }) => {
  const d = `M 10 ${height / 2} C ${width * 0.35} ${height / 2 - curve}, ${width * 0.65} ${height / 2 - curve}, ${width - 26} ${height / 2}`;
  const len = width * 1.25;
  return (
    <svg width={width} height={height} style={{ overflow: "visible" }}>
      <path d={d} fill="none" stroke={color} strokeWidth={8} strokeLinecap="round" strokeDasharray={len} strokeDashoffset={len * (1 - p)} />
      <path d={`M ${width - 44} ${height / 2 - 18} L ${width - 16} ${height / 2} L ${width - 44} ${height / 2 + 18}`} fill="none" stroke={color} strokeWidth={8}
        strokeLinecap="round" strokeLinejoin="round" opacity={p > 0.92 ? 1 : 0} />
    </svg>
  );
};

/** Nhãn mã module ở góc (chỉ dùng trong trang trưng bày). */
export const CodeTag = ({ code, name }) => (
  <div style={{ position: "absolute", left: 28, top: 24, padding: "8px 18px", borderRadius: 12, background: COLORS.ink, color: "#fff", fontFamily: FONT, fontSize: 26, fontWeight: 700, opacity: 0.9 }}>
    {code} · {name}
  </div>
);

// ---------- Hình minh hoạ màu (Fluent Emoji Flat, MIT) — tệp ở public/illus/<tên>.svg ----------

/** Hình minh hoạ màu. Tên tra trong core/illus-names.js (ví dụ "house", "money-bag", "mobile-phone").
 *  Tên không có thì hiện biểu tượng Lucide cùng tên (nếu có) hoặc dấu sao. */
export const Illus = ({ name, size = 160, style }) =>
  ILLUS.has(name) ? (
    <Img src={staticFile(`illus/${name}.svg`)} style={{ width: size, height: size, objectFit: "contain", ...style }} />
  ) : (
    <div style={{ width: size, height: size, display: "grid", placeItems: "center", ...style }}><Icon name={ICONS[name] ? name : "sparkles"} size={size * 0.7} color={COLORS.pine} /></div>
  );

/** Hình minh hoạ đặt trong vòng tròn nền nhạt (dùng cạnh chữ). */
export const IllusBadge = ({ name, size = 180, bg = COLORS.pineSoft, style }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", background: bg, display: "grid", placeItems: "center", flex: "none", ...style }}>
    <Illus name={name} size={size * 0.62} />
  </div>
);

/** Cảnh minh hoạ: 1 hình chính to ở giữa + 2–4 hình nhỏ bay lơ lửng quanh (thở nhẹ). Dùng làm nền ý. */
export const SpotScene = ({ main, around = [], size = 360 }) => {
  const frame = useCurrentFrame();
  const pos = [[-0.95, -0.55], [0.95, -0.5], [-0.85, 0.6], [0.9, 0.62]];
  return (
    <div style={{ position: "relative", width: size * 2.4, height: size * 1.7, display: "grid", placeItems: "center" }}>
      <div style={{ position: "absolute", width: size * 1.35, height: size * 1.35, borderRadius: "50%", background: COLORS.pineSoft }} />
      <div style={{ transform: `translateY(${idle(frame, 8, 120)}px)` }}><Illus name={main} size={size} /></div>
      {around.slice(0, 4).map((n, i) => (
        <div key={n + i} style={{ position: "absolute", left: "50%", top: "50%", transform: `translate(${pos[i][0] * size - size * 0.2}px, ${pos[i][1] * size - size * 0.2 + idle(frame + i * 23, 10, 100)}px)` }}>
          <Illus name={n} size={size * 0.4} />
        </div>
      ))}
    </div>
  );
};
