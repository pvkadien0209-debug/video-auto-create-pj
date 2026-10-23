// Poster.jsx — #164 Ảnh bìa 16:9 cho video bài học (web, YouTube, TikTok): Đét + tên bài to rõ + chuỗi bài + màu cửa học.
// Một khung (durationInFrames = 1). Render: 5-tao-anh-bia.bat → renders/dp/<mã video>.jpg (1280×720).
// Chữ phải đọc được khi ảnh thu nhỏ còn ~320 px (thẻ trên web) → tên bài 70–104 px ở khổ 1920.
import React, { useState } from "react";
import { AbsoluteFill, continueRender, delayRender } from "remotion";
import { COLORS, FONT, accentOf } from "../core/theme.js";
import { ensureFonts } from "../core/fonts.js";
import { DetG, DET_POSES } from "../cast/mascot/Det.jsx";
import { DetRing } from "../cast/rig/ring.jsx";

const DOOR_LABEL = { "ky-nang": "Kỹ năng", "kien-thuc": "Kiến thức", "chuyen-mon": "Chuyên môn" };

// Tên chuỗi: phần trước dấu " — " (phần sau thường là "cho ai").
const seriesShort = (s) => String(s || "").split(/\s+[—–-]\s+/)[0].trim();
// Cỡ chữ tên bài theo độ dài — tối đa 4 dòng trong khung rộng 1060 px.
const titleSize = (t) => {
  const n = String(t || "").length;
  return n <= 40 ? 104 : n <= 60 ? 94 : n <= 80 ? 84 : n <= 100 ? 76 : 68;
};

export const Poster = ({ script }) => {
  // Chờ phông nạp xong rồi mới chụp (tối đa 4 s — #118: có máy lời hẹn nạp phông không bao giờ xong → không treo).
  const [handle] = useState(() => {
    ensureFonts();
    const h = delayRender("Ảnh bìa: chờ phông Be Vietnam Pro", { timeoutInMilliseconds: 20000 });
    const done = () => continueRender(h);
    const t = setTimeout(done, 4000);
    Promise.all([700, 800].map((w) => document.fonts?.load?.(`${w} 80px "Be Vietnam Pro"`, "Tiếng Việt")))
      .then(() => document.fonts?.ready)
      .catch(() => {})
      .finally(() => {
        clearTimeout(t);
        done();
      });
    return h;
  });
  void handle;

  const u = script.unit || {};
  const accent = accentOf(script);
  const title = u.title || script.id;
  const kicker = seriesShort(u.series);
  const door = DOOR_LABEL[u.door];

  return (
    <AbsoluteFill style={{ background: COLORS.paper, fontFamily: FONT, color: COLORS.ink, overflow: "hidden" }}>
      {/* khối màu bên phải + Đét */}
      <div
        style={{
          position: "absolute", right: -260, top: 90, width: 1000, height: 1000, borderRadius: "50%",
          background: accent, opacity: 0.95,
        }}
      />
      <div
        style={{
          position: "absolute", right: -120, top: 30, width: 760, height: 760, borderRadius: "50%",
          border: `22px solid ${COLORS.marker}`, opacity: 0.9,
        }}
      />
      <svg viewBox="-300 -430 600 470" style={{ position: "absolute", right: 110, bottom: 24, width: 720, height: 564 }}>
        <ellipse cx="0" cy="6" rx="170" ry="22" fill="rgba(0,0,0,.18)" />
        <DetG pose={DET_POSES.wave} face="happy" />
      </svg>

      {/* chữ bên trái */}
      <div style={{ position: "absolute", left: 110, top: 96, width: 1060, bottom: 90, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 38, fontWeight: 700 }}>
          {/* #167: logo DetPro như trên web — Vòng Đét trên ô xanh + chữ Det/Pro */}
          <svg width={56} height={56} viewBox="-32 -32 64 64" style={{ display: "block" }}>
            <rect x={-32} y={-32} width={64} height={64} rx={14} fill={COLORS.pine} />
            <DetRing r={17} w={9} sweep={300} />
          </svg>
          <span style={{ fontSize: 46, fontWeight: 800, letterSpacing: "-0.02em" }}>
            Det<span style={{ color: COLORS.pine }}>Pro</span>
          </span>
          {door && (
            <span style={{ padding: "6px 18px", borderRadius: 10, background: accent, color: "#fff", fontSize: 30, fontWeight: 600 }}>{door}</span>
          )}
          {u.level && (
            <span style={{ padding: "6px 14px", borderRadius: 10, border: `3px solid ${COLORS.line}`, color: COLORS.muted, fontSize: 28, fontWeight: 600 }}>{u.level}</span>
          )}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 26 }}>
          {kicker && (
            <div
              style={{
                fontSize: 40, fontWeight: 700, color: accent, textTransform: "uppercase", letterSpacing: "0.02em", lineHeight: 1.2,
                display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
              }}
            >
              {kicker}
            </div>
          )}
          <div
            style={{
              fontSize: titleSize(title), fontWeight: 800, lineHeight: 1.14, letterSpacing: "-0.02em",
              display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical", overflow: "hidden",
            }}
          >
            {title}
          </div>
        </div>
        {/* #167: khẩu hiệu DetPro */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 120, height: 14, borderRadius: 7, background: COLORS.marker }} />
          <span style={{ fontSize: 34, fontWeight: 600, color: COLORS.muted }}>Mỗi ngày biết thêm một điều hay</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
