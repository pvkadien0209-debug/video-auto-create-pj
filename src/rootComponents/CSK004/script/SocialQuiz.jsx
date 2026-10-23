// SocialQuiz.jsx — #172 (SP11 P2) Ảnh "Câu hỏi hôm nay" 1080×1350 (4:5, dọc) cho Facebook / Zalo.
// Một khung. Dữ liệu lấy nguyên từ bài (câu hỏi tiếng Anh, câu tiếng Việt, 3 đáp án theo thứ tự hiện trên web) — không lộ đáp án.
// Dựng bằng goi-dang-bai.js (6-goi-dang-bai.bat) qua renderStill với inputProps.
import React, { useState } from "react";
import { AbsoluteFill, continueRender, delayRender } from "remotion";
import { COLORS, FONT } from "../core/theme.js";
import { ensureFonts } from "../core/fonts.js";
import { DetG, DET_POSES } from "../cast/mascot/Det.jsx";
import { DetRing } from "../cast/rig/ring.jsx";

export const SOCIAL_QUIZ = { width: 1080, height: 1350 };
export const SAMPLE_QUIZ = {
  topic: "Lần đầu làm trưởng nhóm",
  q: "Delegating a task takes longer than doing it yourself the first time, so why delegate?",
  vi: "Lần đầu giao việc mất thời gian hơn tự làm, vậy vì sao vẫn nên giao?",
  options: [
    "Because after a few rounds the person can do it and you get time back",
    "Because a leader should never do any real work",
    "Because delegating always makes the task finish faster",
  ],
  accent: "#0f6e5a",
};

// Cỡ chữ theo độ dài để vừa khung
const qSize = (s) => {
  const n = String(s || "").length;
  return n <= 60 ? 58 : n <= 90 ? 52 : n <= 120 ? 46 : 40;
};
const optSize = (opts) => {
  const n = Math.max(...opts.map((o) => String(o).length));
  return n <= 50 ? 36 : n <= 80 ? 32 : n <= 110 ? 29 : 26;
};

export const SocialQuiz = ({ topic, q, vi, options = [], accent = COLORS.pine }) => {
  // Chờ phông (tối đa 4 s, không treo — giống Poster #164)
  useState(() => {
    ensureFonts();
    const h = delayRender("Ảnh câu hỏi: chờ phông", { timeoutInMilliseconds: 20000 });
    const t = setTimeout(() => continueRender(h), 4000);
    Promise.all([600, 700, 800].map((w) => document.fonts?.load?.(`${w} 40px "Be Vietnam Pro"`, "Tiếng Việt")))
      .catch(() => {})
      .finally(() => {
        clearTimeout(t);
        continueRender(h);
      });
    return h;
  });

  const os = optSize(options);
  return (
    <AbsoluteFill style={{ background: COLORS.paper, fontFamily: FONT, color: COLORS.ink, overflow: "hidden" }}>
      {/* đầu: logo + nhãn */}
      <div style={{ position: "absolute", left: 72, right: 72, top: 64, display: "flex", alignItems: "center", gap: 16 }}>
        <svg width={52} height={52} viewBox="-32 -32 64 64" style={{ display: "block" }}>
          <rect x={-32} y={-32} width={64} height={64} rx={14} fill={COLORS.pine} />
          <DetRing r={17} w={9} sweep={300} />
        </svg>
        <span style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.02em" }}>
          Det<span style={{ color: COLORS.pine }}>Pro</span>
        </span>
        <span style={{ marginLeft: "auto", padding: "8px 18px", borderRadius: 10, background: COLORS.marker, fontSize: 28, fontWeight: 800, letterSpacing: "0.02em" }}>
          CÂU HỎI HÔM NAY
        </span>
      </div>

      <div style={{ position: "absolute", left: 72, right: 72, top: 170, display: "flex", flexDirection: "column", gap: 22 }}>
        {topic && <div style={{ fontSize: 30, fontWeight: 700, color: accent, textTransform: "uppercase", letterSpacing: "0.03em", lineHeight: 1.25 }}>{topic}</div>}
        <div lang="en" style={{ fontSize: qSize(q), fontWeight: 800, lineHeight: 1.18, letterSpacing: "-0.015em" }}>
          {q}
        </div>
        {vi && <div style={{ fontSize: 32, fontWeight: 600, color: COLORS.muted, lineHeight: 1.35 }}>{vi}</div>}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 14 }}>
          {options.map((o, k) => (
            <div
              key={k}
              lang="en"
              style={{
                display: "flex", gap: 20, alignItems: "flex-start", padding: "20px 24px", borderRadius: 16,
                background: COLORS.surface, border: `3px solid ${COLORS.line}`, fontSize: os, fontWeight: 600, lineHeight: 1.3,
              }}
            >
              <span style={{ flex: "none", display: "grid", placeItems: "center", width: 54, height: 54, borderRadius: 12, background: COLORS.ink, color: "#fff", fontSize: 30, fontWeight: 800 }}>
                {k + 1}
              </span>
              <span style={{ paddingTop: 6 }}>{o}</span>
            </div>
          ))}
        </div>
      </div>

      {/* chân: lời mời + Đét */}
      <div style={{ position: "absolute", left: 72, bottom: 70, width: 640 }}>
        <div style={{ fontSize: 38, fontWeight: 800, lineHeight: 1.2 }}>Bạn chọn 1, 2 hay 3?</div>
        <div style={{ marginTop: 10, fontSize: 28, fontWeight: 600, color: COLORS.muted }}>Đáp án ở bình luận · detpro.vercel.app</div>
      </div>
      <svg viewBox="-300 -430 600 470" style={{ position: "absolute", right: 30, bottom: 20, width: 300, height: 235 }}>
        <ellipse cx="0" cy="6" rx="150" ry="18" fill="rgba(0,0,0,.12)" />
        <DetG pose={DET_POSES.think} face="thinking" />
      </svg>
    </AbsoluteFill>
  );
};
