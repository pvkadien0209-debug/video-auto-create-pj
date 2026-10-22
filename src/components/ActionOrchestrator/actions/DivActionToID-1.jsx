// src/Components/ActionOrchestrator/actions/DivAction.jsx
import React from "react";
import { createPortal } from "react-dom";
import DivView from "../smallComponents/media/DivView.jsx";
import { mergeStyles } from "../utils/cssOverrideManager.js";

/**
 * 📦 DIV ACTION
 * Tạo div rỗng với styling và animation tùy chỉnh
 * ⭐ Hỗ trợ render div vào element có ID (toID)
 */
function DivAction({ data }) {
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

  // ✅ Merge styles
  const mergedStyle = mergeStyles(
    action,
    item,
    defaultTextStyle,
    className,
    id,
    cssOverrides,
  );

  // ⭐ Nếu có toID, render vào container đó
  if (action.toID) {
    const targetElement = document.getElementById(action.toID);

    if (!targetElement) {
      console.warn(`⚠️ Element with ID "${action.toID}" not found`);
      return null;
    }

    // ⚡ Trước đây log này chạy mỗi frame khi action còn active — chỉ bật lại
    // trong dev, tự tắt lúc render thật (Remotion CLI mặc định NODE_ENV=production).
    if (process.env.NODE_ENV === "development") {
      console.log("🎯 DivAction rendering to ID:", action.toID);
    }

    // ⭐ Dùng React Portal để render vào element có ID
    return createPortal(
      <DivView
        frame={frame}
        styCss={mergedStyle}
        startFrame={actionStartFrame}
        endFrame={actionEndFrame}
        data={data}
        dataAction={action}
      />,
      targetElement,
    );
  }

  // ⭐ Render bình thường (không có toID)
  return (
    <DivView
      frame={frame}
      styCss={mergedStyle}
      startFrame={actionStartFrame}
      endFrame={actionEndFrame}
      data={data}
      dataAction={action}
    />
  );
}

export default DivAction;
export { DivAction };
