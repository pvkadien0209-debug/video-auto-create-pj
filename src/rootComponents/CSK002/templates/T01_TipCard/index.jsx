// T01_TipCard/index.jsx — BỐ CỤC + HIỆU ỨNG của template T01.
// Mỗi mục được đánh dấu bằng comment "[T01.<MÃ>]" (tìm nhanh bằng Ctrl+F) và bọc trong
// <Section> → trong Studio timeline hiện "T01·<MÃ>".
//   Nội dung/thông số mặc định → config.js
//   Style theo mục            → styles.js
import React from "react";
import {
  AbsoluteFill,
  Html5Audio,
  Img,
  Loop,
  OffthreadVideo,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { assetSrc, audioSrc, videoSrc } from "../../paths.js";
import { Section, SecLabel, debugOutline, mergeSectionStyles } from "../_shared/Section.jsx";
import { META, DEFAULTS } from "./config.js";
import { STYLES } from "./styles.js";

const T = META.code;
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" };

// ═══ [T01.BG] Video nền ═══════════════════════════════════════════════════════
const BgVideo = ({ src, durationInFrames, sourceFrames, fadeIn, fadeOut, style }) => {
  const f = useCurrentFrame(); // 0-based trong Sequence
  const opacity =
    interpolate(f, [0, fadeIn], [0, 1], clamp) *
    interpolate(f, [durationInFrames - fadeOut, durationInFrames], [1, 0], clamp);

  const video = (
    <OffthreadVideo
      src={src}
      muted
      style={{ width: "100%", height: "100%", ...style }}
    />
  );

  // ⚠️ Prop `loop` của OffthreadVideo KHÔNG lặp khi render → dùng <Loop> với độ dài
  // video gốc (đo sẵn trong calculateMetadata). Video dài hơn đoạn cần thì không lặp.
  const needLoop = sourceFrames && sourceFrames < durationInFrames;

  return (
    <AbsoluteFill style={{ opacity }}>
      {needLoop ? <Loop durationInFrames={sourceFrames}>{video}</Loop> : video}
    </AbsoluteFill>
  );
};

// ─── Template ────────────────────────────────────────────────────────────────
export const TipCard = (props) => {
  const p = { ...DEFAULTS, ...props };
  const S = mergeSectionStyles(STYLES, p.style);
  const dbg = p.showSections;
  const { durationInFrames, fps } = useVideoConfig();
  const bgFrames = Math.round(p.bgVideoSeconds * fps);
  const musicFrom = Math.round((p.musicStartFrom || 0) * fps);
  const cardBg = assetSrc(p.cardBgImage);
  const whiteVeil = "linear-gradient(rgba(255,255,255,0.70), rgba(255,255,255,0.70))";

  return (
    <AbsoluteFill style={S.ROOT}>
      {/* ═══ [T01.BG] ═══ */}
      {p.bgVideo && (
        <Sequence from={p.bgVideoDelayFrames} durationInFrames={bgFrames} name={`${T}·BG`}>
          <BgVideo
            src={videoSrc(p.bgVideo)}
            durationInFrames={bgFrames}
            sourceFrames={
              p.bgVideoSourceSeconds
                ? Math.max(1, Math.floor(p.bgVideoSourceSeconds * fps))
                : null
            }
            fadeIn={p.bgFadeInFrames}
            fadeOut={p.bgFadeOutFrames}
            style={S.BG}
          />
          <SecLabel tpl={T} code="BG" show={dbg} />
        </Sequence>
      )}

      {/* ═══ [T01.CARD] ═══ */}
      <Section tpl={T} code="CARD">
        <div style={{ ...S.CARD, ...debugOutline(dbg) }}>
          <SecLabel tpl={T} code="CARD" show={dbg} />

          {/* ═══ [T01.HEAD] ═══ */}
          <Section tpl={T} code="HEAD">
            <div
              style={{
                backgroundImage: cardBg ? `${whiteVeil}, url(${cardBg})` : whiteVeil,
                ...S.HEAD,
                ...debugOutline(dbg),
              }}
            >
              <SecLabel tpl={T} code="HEAD" show={dbg} />
              {p.headline}
            </div>
          </Section>

          {/* ═══ [T01.DETAIL] ═══ */}
          <Section tpl={T} code="DETAIL">
            <div style={{ ...S.DETAIL, ...debugOutline(dbg) }}>
              <SecLabel tpl={T} code="DETAIL" show={dbg} />
              {p.detail}
            </div>
          </Section>
        </div>
      </Section>

      {/* ═══ [T01.FOOTER] ═══ */}
      {p.footerText && (
        <Section tpl={T} code="FOOTER">
          <div style={{ ...S.FOOTER, ...debugOutline(dbg) }}>
            <SecLabel tpl={T} code="FOOTER" show={dbg} />
            {p.footerText}
          </div>
        </Section>
      )}

      {/* ═══ [T01.LOGO] ═══ */}
      {p.logo && (
        <Section tpl={T} code="LOGO">
          <div style={{ ...S.LOGO, ...debugOutline(dbg) }}>
            <SecLabel tpl={T} code="LOGO" show={dbg} />
            <Img src={assetSrc(p.logo)} style={S.LOGO_IMG} />
          </div>
        </Section>
      )}

      {/* ═══ [T01.MUSIC] ═══ */}
      {p.music && (
        <Section tpl={T} code="MUSIC">
          <Html5Audio
            src={audioSrc(p.music)}
            volume={p.musicVolume}
            trimBefore={musicFrom}
            trimAfter={musicFrom + durationInFrames}
          />
        </Section>
      )}
    </AbsoluteFill>
  );
};

export default TipCard;
