import React, { useMemo } from "react";
import { useCurrentFrame, interpolate } from "remotion";
import {
  useAnimations,
  getAnimationStyle,
} from "../../utils/animations/animationResolver.js";

/**
 * Component hiển thị text với animation effects - ALL IN ONE (Refactored v3.1 - Frame-based)
 *
 * ⭐ v3.1 CHANGES:
 * ─────────────────────────────────
 * - Thêm SHORT TEXT SLOWDOWN: text < 12 chars → tự động scale chậm hơn
 *   để tránh bị giật khi render (ít char = animation quá nhanh = ít frame = giật)
 *
 * ⭐ SHORT TEXT SLOWDOWN LOGIC:
 * ─────────────────────────────────
 * Vấn đề: Text ngắn (vd "Hello") chỉ có 5 chars
 *   → stagger tổng = 5 × 0.06s = 0.3s = 9 frames @30fps
 *   → Quá ít frames → animation bị giật, nhảy cóc
 *
 * Giải pháp: Nhân multiplier vào duration + stagger khi charCount < 12
 *   - 1 char  → ×3.0 (chậm nhất)
 *   - 5 chars → ×2.2
 *   - 8 chars → ×1.6
 *   - 11 chars → ×1.1
 *   - 12+ chars → ×1.0 (không thay đổi)
 *
 * Áp dụng cho:
 *   ✅ typingText: typing speed chậm hơn
 *   ✅ textEffect: char animation duration + stagger chậm hơn
 *   ✅ slideText: slide duration + char effect chậm hơn
 */

// ========================================
// ⭐ TEXT EFFECT CONFIG — Frame-based
// ========================================
const TEXT_EFFECTS = {
  "char-jump": {
    durationSec: 0.45,
    staggerDelaySec: 0.06,
  },
  "char-bounce": {
    durationSec: 0.5,
    staggerDelaySec: 0.055,
  },
  "char-fadeIn": {
    durationSec: 0.35,
    staggerDelaySec: 0.04,
  },
  "char-flip": {
    durationSec: 0.55,
    staggerDelaySec: 0.07,
  },
  "char-scale": {
    durationSec: 0.4,
    staggerDelaySec: 0.05,
  },
};

// ========================================
// ⭐ SHORT TEXT SLOWDOWN
// ========================================
const SHORT_TEXT_THRESHOLD = 15;
const SHORT_TEXT_MAX_MULTIPLIER = 2.8;
const SHORT_TEXT_MIN_MULTIPLIER = 1.0;

/**
 * Tính multiplier để làm chậm animation cho text ngắn
 *
 * @param {number} charCount - Số ký tự trong text
 * @returns {number} Multiplier (1.0 → 3.0)
 *
 * Ví dụ @30fps, effect "char-jump" (stagger=0.06s, duration=0.45s):
 *
 *   "Hi" (2 chars, ×2.8):
 *     stagger = 0.06 × 2.8 = 0.168s = 5 frames/char
 *     duration = 0.45 × 2.8 = 1.26s = 38 frames
 *     → Mượt mà, đủ frames cho mỗi char
 *
 *   "Hello World!" (12 chars, ×1.0):
 *     stagger = 0.06s = 1.8 frames/char
 *     duration = 0.45s = 13.5 frames
 *     → Giữ nguyên tốc độ gốc
 */
function getShortTextMultiplier(charCount) {
  if (charCount >= SHORT_TEXT_THRESHOLD) return SHORT_TEXT_MIN_MULTIPLIER;
  if (charCount <= 1) return SHORT_TEXT_MAX_MULTIPLIER;

  return interpolate(
    charCount,
    [1, SHORT_TEXT_THRESHOLD],
    [SHORT_TEXT_MAX_MULTIPLIER, SHORT_TEXT_MIN_MULTIPLIER],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );
}

// ========================================
// ⭐ FRAME-BASED EFFECT CALCULATORS
// ========================================
const calculateCharEffect = (textEffect, progress) => {
  const p = Math.max(0, Math.min(1, progress));

  switch (textEffect) {
    case "char-jump": {
      const opacity = interpolate(p, [0, 0.7, 1], [0, 1, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      const translateX = interpolate(p, [0, 0.7, 1], [-30, 3, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { opacity, transform: `translateX(${translateX}px)` };
    }

    case "char-bounce": {
      const opacity = interpolate(p, [0, 0.5, 1], [0, 1, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      const translateY = interpolate(p, [0, 0.5, 0.7, 1], [15, -8, 3, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      const scale = interpolate(p, [0, 0.5, 0.7, 1], [0.8, 1.05, 1, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { opacity, transform: `translateY(${translateY}px) scale(${scale})` };
    }

    case "char-fadeIn": {
      const opacity = interpolate(p, [0, 1], [0, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { opacity, transform: "" };
    }

    case "char-flip": {
      const opacity = interpolate(p, [0, 0.4, 1], [0, 1, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      const rotateX = interpolate(p, [0, 0.4, 0.7, 1], [90, -10, 5, 0], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { opacity, transform: `perspective(400px) rotateX(${rotateX}deg)` };
    }

    case "char-scale": {
      const opacity = interpolate(p, [0, 0.6, 1], [0, 1, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      const scale = interpolate(p, [0, 0.6, 1], [0, 1.15, 1], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      });
      return { opacity, transform: `scale(${scale})` };
    }

    default:
      return { opacity: 1, transform: "" };
  }
};

// ========================================
// ⭐ WORD-BREAK HELPERS
// ========================================
function tokenizeText(text) {
  if (!text) return [];
  const tokens = [];
  const regex = /(\S+)|(\s+)/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match[1]) tokens.push({ type: "word", text: match[1] });
    else if (match[2]) tokens.push({ type: "space", text: match[2] });
  }
  return tokens;
}

// ========================================
// ⭐ 2-LAYER RENDERING SYSTEM
// ========================================
function CharCell({ char, animStyle, isVisible }) {
  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <span style={{ visibility: "hidden" }} aria-hidden="true">
        {char === " " ? "\u00A0" : char}
      </span>

      {isVisible && (
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ...animStyle,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      )}
    </span>
  );
}

function renderWordSafe2Layer(text, visibleChars = Infinity) {
  const tokens = tokenizeText(text);
  let charIndex = 0;

  return tokens.map((token, tokenIdx) => {
    if (token.type === "space") {
      const spaceElements = token.text.split("").map((sp, spIdx) => {
        const isVisible = charIndex < visibleChars;
        charIndex++;
        return (
          <CharCell
            key={`sp-${tokenIdx}-${spIdx}`}
            char=" "
            animStyle={{ opacity: isVisible ? 1 : 0 }}
            isVisible={isVisible}
          />
        );
      });
      return (
        <span key={`space-${tokenIdx}`} style={{ display: "inline" }}>
          {spaceElements}
        </span>
      );
    }

    const wordChars = token.text.split("").map((char, cIdx) => {
      const isVisible = charIndex < visibleChars;
      charIndex++;
      return (
        <CharCell
          key={`c-${tokenIdx}-${cIdx}`}
          char={char}
          animStyle={{ opacity: isVisible ? 1 : 0 }}
          isVisible={isVisible}
        />
      );
    });

    return (
      <span
        key={`word-${tokenIdx}`}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
        }}
      >
        {wordChars}
      </span>
    );
  });
}

/**
 * ⭐ Render WORD-SAFE text VỚI textEffect (FRAME-BASED + SHORT TEXT SLOWDOWN)
 *
 * @param {string} text
 * @param {string} textEffect
 * @param {number} visibleChars
 * @param {number} currentFrame
 * @param {number} actionStartFrame
 * @param {number} fps
 * @param {number} totalCharCount - Tổng số ký tự (dùng cho short text slowdown)
 */
function renderWordSafeWithEffect2Layer(
  text,
  textEffect,
  visibleChars = Infinity,
  currentFrame,
  actionStartFrame,
  fps,
  totalCharCount,
) {
  if (!text || !textEffect) return null;

  const effectConfig = TEXT_EFFECTS[textEffect];
  if (!effectConfig) {
    console.warn(`⚠️ Unknown textEffect: "${textEffect}"`);
    return null;
  }

  // ⭐ SHORT TEXT SLOWDOWN
  const charCount = totalCharCount !== undefined ? totalCharCount : text.length;
  const slowMultiplier = getShortTextMultiplier(charCount);

  // Convert seconds → frames, ÁP DỤNG multiplier
  const effectDurationFrames = effectConfig.durationSec * slowMultiplier * fps;
  const staggerDelayFrames = effectConfig.staggerDelaySec * slowMultiplier * fps;

  const tokens = tokenizeText(text);
  let charIndex = 0;

  return tokens.map((token, tokenIdx) => {
    if (token.type === "space") {
      const spaceElements = token.text.split("").map((sp, spIdx) => {
        const currentIdx = charIndex;
        const isVisible = charIndex < visibleChars;
        charIndex++;

        let animStyle;
        if (isVisible) {
          const charStartFrame =
            actionStartFrame + currentIdx * staggerDelayFrames;
          const charElapsed = currentFrame - charStartFrame;
          const charProgress = charElapsed / effectDurationFrames;
          animStyle = calculateCharEffect(textEffect, charProgress);
        } else {
          animStyle = { opacity: 0, transform: "" };
        }

        return (
          <CharCell
            key={`sp-${tokenIdx}-${spIdx}`}
            char=" "
            animStyle={animStyle}
            isVisible={isVisible}
          />
        );
      });
      return (
        <span key={`space-${tokenIdx}`} style={{ display: "inline" }}>
          {spaceElements}
        </span>
      );
    }

    const wordChars = token.text.split("").map((char, cIdx) => {
      const currentIdx = charIndex;
      const isVisible = charIndex < visibleChars;
      charIndex++;

      let animStyle;
      if (isVisible) {
        const charStartFrame =
          actionStartFrame + currentIdx * staggerDelayFrames;
        const charElapsed = currentFrame - charStartFrame;
        const charProgress = charElapsed / effectDurationFrames;
        animStyle = calculateCharEffect(textEffect, charProgress);
      } else {
        animStyle = { opacity: 0, transform: "" };
      }

      return (
        <CharCell
          key={`c-${tokenIdx}-${cIdx}`}
          char={char}
          animStyle={animStyle}
          isVisible={isVisible}
        />
      );
    });

    return (
      <span
        key={`word-${tokenIdx}`}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
        }}
      >
        {wordChars}
      </span>
    );
  });
}

// ========================================
// ⭐ MAIN COMPONENT
// ========================================
const TypingText = ({
  text = [{ text: "I love you!", type: "normal" }],
  type = "typingText",
  frame,
  styCss = {},
  startFrame = 30,
  endFrame = 90,
  sound = true,
  noTyping = false,
  fps = 30,
  data = {},
  dataAction = {},
}) => {
  const currentFrame = useCurrentFrame();

  const elementId = dataAction.id || data.id;
  const elementClass = dataAction.className || data.className;
  const animations = dataAction.animations || data.animations || [];
  const animationStyles = useAnimations(animations);

  // Resolve type
  const resolvedType =
    dataAction.type !== undefined
      ? dataAction.type
      : data.type !== undefined
        ? data.type
        : type;

  // Resolve textEffect
  const textEffect =
    dataAction.textEffect || data.textEffect || styCss.textEffect || null;

  // Typing config
  const typingDuration =
    dataAction.typingDuration || data.typingDuration || 0.5;

  // Slide config
  const slideDuration = dataAction.slideDuration || data.slideDuration || 0.5;
  const slideFrames = slideDuration * fps;
  const slideDirection =
    dataAction.slideDirection || data.slideDirection || "left";

  // Visibility check
  if (frame < startFrame || frame > endFrame) return null;

  // Combined text
  const combinedText = text.map((item) => item.text).join("");
  const totalCharCount = combinedText.length;

  // ⭐ SHORT TEXT SLOWDOWN — áp dụng cho typing speed
  const slowMultiplier = getShortTextMultiplier(totalCharCount);
  const adjustedTypingDuration = typingDuration * slowMultiplier;
  const typingFrames = adjustedTypingDuration * fps;

  // Container style
  const containerSelector = elementId ? `#${elementId}` : null;
  const baseContainerStyle = {
    ...styCss,
    textEffect: undefined,
    wordWrap: "break-word",
    overflowWrap: "break-word",
  };

  const containerStyle = containerSelector
    ? getAnimationStyle(animationStyles, containerSelector, baseContainerStyle)
    : baseContainerStyle;

  // ========================================
  // TYPE: typingText
  // ========================================
  if (resolvedType === "typingText") {
    const progress = noTyping
      ? 1
      : Math.min((frame - startFrame) / typingFrames, 1);
    const visibleChars = noTyping
      ? totalCharCount
      : Math.floor(progress * totalCharCount);

    if (textEffect) {
      return (
        <div id={elementId} className={elementClass} style={containerStyle}>
          {renderWordSafeWithEffect2Layer(
            combinedText,
            textEffect,
            visibleChars,
            currentFrame,
            startFrame,
            fps,
            totalCharCount,
          )}
        </div>
      );
    }

    return (
      <div id={elementId} className={elementClass} style={containerStyle}>
        {renderWordSafe2Layer(combinedText, visibleChars)}
      </div>
    );
  }

  // ========================================
  // TYPE: slideText
  // ========================================
  if (resolvedType === "slideText") {
    // ⭐ slideText cũng áp dụng slowdown
    const adjustedSlideFrames = slideFrames * slowMultiplier;
    const relativeFrame = frame - startFrame;
    const slideProgress = interpolate(
      relativeFrame,
      [0, adjustedSlideFrames],
      [0, 1],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      },
    );

    const clipPath =
      slideDirection === "right"
        ? `inset(0 0 0 ${(1 - slideProgress) * 100}%)`
        : `inset(0 ${(1 - slideProgress) * 100}% 0 0)`;

    const slideStyle = {
      ...containerStyle,
      clipPath,
      WebkitClipPath: clipPath,
    };

    if (textEffect) {
      return (
        <div id={elementId} className={elementClass} style={slideStyle}>
          {renderWordSafeWithEffect2Layer(
            combinedText,
            textEffect,
            Infinity,
            currentFrame,
            startFrame,
            fps,
            totalCharCount,
          )}
        </div>
      );
    }

    return (
      <div id={elementId} className={elementClass} style={slideStyle}>
        {renderWordSafe2Layer(combinedText)}
      </div>
    );
  }

  // ========================================
  // FALLBACK
  // ========================================
  console.warn(
    `⚠️ TypingText: Unknown type "${resolvedType}". Fallback → typingText.`,
  );
  const fbProgress = noTyping
    ? 1
    : Math.min((frame - startFrame) / typingFrames, 1);
  const fbVisible = noTyping
    ? totalCharCount
    : Math.floor(fbProgress * totalCharCount);

  return (
    <div id={elementId} className={elementClass} style={containerStyle}>
      {renderWordSafe2Layer(combinedText, fbVisible)}
    </div>
  );
};

export default TypingText;