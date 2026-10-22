// src/Components/ActionOrchestrator/actions/TypingTextActionToID.jsx
import React from "react";
import { createPortal } from "react-dom";
import { mergeStyles } from "../utils/cssOverrideManager.js";
import TypingTextNoEffect from "../smallComponents/text/TypingTextNoEffect.jsx";
import { useDomElementByID } from "../utils/useDomElementByID.js";

/**
 * 📝 TYPING TEXT TO ID ACTION
 * Hiển thị text vào element có ID cụ thể
 * ⭐ Hỗ trợ render text vào element có ID bằng React Portal
 */
function TypingTextActionToID({ data }) {
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

  // ⚡ Có retry qua requestAnimationFrame nếu element đích chưa kịp mount
  // (giống Transitiontoid.jsx) — xem chi tiết trong useDomElementByID.js.
  const targetElement = useDomElementByID(action.toID);

  const hasText = item?.text && item.text.trim() !== "";

  // ✅ Chuẩn bị text format
  const textData = action.text
    ? [{ text: action.text, type: "normal" }]
    : hasText
      ? [{ text: item.text, type: "normal" }]
      : [{ text: "", type: "normal" }];

  // console.log("TypingTextActionToID:", {
  //   toID: action.toID,
  //   text: action.text,
  // });

  // ✅ Merge styles (hỗ trợ cả styleCss và styCss)
  const baseStyle = action.styleCss || action.styCss || {};
  const mergedStyle = mergeStyles(
    { ...action, styCss: baseStyle }, // Normalize to styCss
    item,
    {},
    className,
    id,
    cssOverrides,
  );

  // ⭐ Nếu có toID, render vào container đó
  if (action.toID) {
    if (!targetElement) return null;

    // ⭐ Dùng React Portal để render vào element có ID
    return createPortal(
      <TypingTextNoEffect
        text={textData} // ⭐ Pass text array
        frame={frame}
        styCss={mergedStyle}
        startFrame={actionStartFrame}
        endFrame={actionEndFrame}
        sound={action.sound !== false}
        noTyping={action.noTyping || false}
        dataAction={action}
        data={data}
      />,
      targetElement,
    );
  }

  // ⭐ Render bình thường (không có toID)
  return (
    <TypingTextNoEffect
      text={textData} // ⭐ Pass text array
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
}

export default TypingTextActionToID;
export { TypingTextActionToID };
