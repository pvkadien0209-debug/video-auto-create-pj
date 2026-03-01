// src/Components/ActionOrchestrator/actions/StyledCardAction.jsx
import React from "react";
import { createPortal } from "react-dom";
import StyledCard from "../smallComponents/text/StyledCard.jsx";
import { mergeStyles } from "../utils/cssOverrideManager.js";

/**
 * 🎨 STYLED CARD ACTION
 * Action wrapper cho StyledCard component
 * ⭐ Hỗ trợ render vào element có ID (toID)
 *
 * ════════════════════════════════════════════════════════════
 *  TẤT CẢ PROPS ĐỀU NẰM TRONG dataAction:
 * ════════════════════════════════════════════════════════════
 *
 *  dataAction = {
 *    // ─── REQUIRED ───
 *    type: "GLASS_CARD",        // 1 trong 25 preset (mặc định: GLASS_CARD)
 *    text: "Nội dung chính",    // Main text
 *
 *    // ─── OPTIONAL CONTENT ───
 *    subText: "Mô tả phụ",     // Sub text (chỉ hoạt động với style có subText)
 *    step: 1,                   // Số bước (chỉ cho STEP_COUNTER)
 *
 *    // ─── DISPLAY MODE ───
 *    display: "box-text",       // "box-text" | "text-only" | "box-only" | "text-box" | "none"
 *
 *    // ─── BACKGROUND ───
 *    bgOption: "none",          // "medical" | "nature" | "warm" | "purple" | "light" | "none"
 *                               // hoặc custom CSS gradient string
 *
 *    // ─── CSS OVERRIDES (ưu tiên cao nhất) ───
 *    styleCSS: {},              // Override container wrapper
 *    boxStyleCSS: {},           // Override box style
 *    textStyleCSS: {},          // Override text style
 *    subTextStyleCSS: {},       // Override sub text style
 *    stepStyleCSS: {},          // Override step circle
 *    stepTextStyleCSS: {},      // Override step number text
 *
 *    // ─── SIZE ───
 *    maxWidth: "600px",
 *    minWidth: "300px",
 *    width: "auto",
 *
 *    // ─── PORTAL ───
 *    toID: "my-container",      // Render vào element có ID này
 *
 *    // ─── ANIMATION & TRANSITION ───
 *    animations: [],
 *    transition: "fadeIn",
 *    fadeFrames: 30,
 *  }
 *
 * ════════════════════════════════════════════════════════════
 *  25 TYPE PRESETS:
 * ════════════════════════════════════════════════════════════
 *
 *  GLASS_CARD       - Glassmorphism trong suốt
 *  NEON_GLOW        - Neon phát sáng cyan
 *  DARK_TECH        - Tech tối, chuyên nghiệp
 *  GRADIENT_CARD    - Gradient tím-hồng
 *  SOFT_SHADOW      - Bóng mềm, dịu mắt
 *  PREMIUM_TITLE    - Vàng gold sang trọng
 *  HIGHLIGHT_TAG    - Tag xanh lá compact
 *  WARNING_BOX      - Cảnh báo đỏ cam
 *  CTA_BADGE        - Gradient cam-đỏ nổi bật
 *  STATISTIC_CARD   - Số liệu nổi bật (có subText)
 *  EXPERT_NAME_TAG  - Lower third chuyên gia (có subText)
 *  QUOTE_HIGHLIGHT  - Trích dẫn sang trọng
 *  STEP_COUNTER     - Bước tiến trình (dùng step prop)
 *  MEDICAL_INFO     - Y tế xanh lá (có subText)
 *  BOLD_IMPACT      - Chữ to đậm impact
 *  MINIMAL_LABEL    - Nhãn tối giản
 *  FIRE_BANNER      - Gradient đỏ-cam trending
 *  ICY_GLASS        - Glass xanh dương lạnh
 *  HANDWRITTEN_ACCENT - Viết tay thân thiện
 *  GRADIENT_TEXT_ONLY - Chỉ text gradient cinematic
 *  PHARMA_CARD      - Dược phẩm clean (có subText)
 *  BUBBLE_POP       - Vui tươi, playful
 *  CINEMA_SUBTITLE  - Phụ đề điện ảnh
 *  ELECTRIC_PURPLE  - Tím điện, hiện đại
 *  AUTHORITY_BANNER - Navy uy tín, gold accent (có subText)
 */

function StyledCardAction({ data }) {
  const {
    action,
    item,
    frame,
    actionStartFrame,
    actionEndFrame,
    cssOverrides,
    defaultTextStyle,
    className,
    id,
  } = data;

  // ✅ Merge styles từ cssOverrideManager
  const mergedStyle = mergeStyles(
    action,
    item,
    defaultTextStyle,
    className,
    id,
    cssOverrides
  );

  // ✅ Build props cho StyledCard
  const cardProps = {
    frame,
    styCss: mergedStyle,
    startFrame: actionStartFrame,
    endFrame: actionEndFrame,
    data,
    dataAction: action,
  };

  // ⭐ Portal: render vào element có ID
  if (action.toID) {
    const targetElement = document.getElementById(action.toID);
    if (!targetElement) {
      console.warn(`⚠️ StyledCard: Element with ID "${action.toID}" not found`);
      return null;
    }
    return createPortal(<StyledCard {...cardProps} />, targetElement);
  }

  // ⭐ Render bình thường
  return <StyledCard {...cardProps} />;
}

export default StyledCardAction;
export { StyledCardAction };