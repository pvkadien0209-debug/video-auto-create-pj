// src/Components/ActionOrchestrator/actions/TypingTextAction.jsx
import React, { act } from "react";
import { createPortal } from "react-dom";
import TypingText from "../smallComponents/text/TypingText.jsx";
import { mergeStyles } from "../utils/cssOverrideManager.js";

/**
 * 📝 TYPING TEXT ACTION
 *
 * Hiển thị text với typing animation
 * ⭐ Component này chỉ làm trung chuyển data, không xử lý logic
 * ⭐ Hỗ trợ render text vào element có ID (toID)
 */
function TypingTextAction({ data }) {
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

  const hasText = item.text && item.text.trim() !== "";

  // ✅ Chuẩn bị text format
  const textData = action.text
    ? [{ text: action.text }]
    : hasText
      ? [{ text: item.text }]
      : [{ text: "" }];

  // ✅ Chuẩn bị style
  const mergedStyle = mergeStyles(
    action,
    item,
    defaultTextStyle,
    className,
    id,
    cssOverrides,
  );

  // ⭐ Component TypingText
  const typingTextComponent = (
    <TypingText
      text={textData}
      type={action.type}
      textEffect={action.textEffect}
      slideDirection={action.slideDirection}
      frame={frame}
      styCss={mergedStyle}
      startFrame={actionStartFrame}
      endFrame={actionEndFrame}
      sound={action.sound !== false}
      noTyping={action.noTyping || false}
      dataAction={action}
      data={data}
    />
  );

  // ⭐ Nếu có toID, render vào container đó
  if (action.toID) {
    const targetElement = document.getElementById(action.toID);

    if (!targetElement) {
      console.warn(`⚠️ Element with ID "${action.toID}" not found`);
      return null;
    }

    console.log("🎯 TypingTextAction rendering to ID:", action.toID);

    // ⭐ Dùng React Portal để render vào element có ID
    return createPortal(typingTextComponent, targetElement);
  }

  // ⭐ Render bình thường (không có toID)
  return typingTextComponent;
}

export default TypingTextAction;
export { TypingTextAction };
