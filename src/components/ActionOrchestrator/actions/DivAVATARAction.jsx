// src/Components/ActionOrchestrator/actions/DivAVATARAction.jsx
import React from "react";
import { createPortal } from "react-dom";
import DivView from "../smallComponents/media/DivAVATAR.jsx";
import { mergeStyles } from "../utils/cssOverrideManager.js";

/**
 * 📦 DIV ACTION
 * Tạo div rỗng với styling và animation tùy chỉnh
 * ⭐ Hỗ trợ render div vào element có ID (toID)
 */
function DivAVATARAction({ data }) {
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

export default DivAVATARAction;
export { DivAVATARAction };
