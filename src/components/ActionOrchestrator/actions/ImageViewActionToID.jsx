// src/Components/ActionOrchestrator/actions/ImageViewAction.jsx
import React from "react";
import { createPortal } from "react-dom";
import ImageView from "../smallComponents/media/ImageView.jsx";
import { mergeStyles } from "../utils/cssOverrideManager.js";
import { useDomElementByID } from "../utils/useDomElementByID.js";

/**
 * 🖼️ IMAGE VIEW ACTION
 * Hiển thị image với styling tùy chỉnh
 * ⭐ Hỗ trợ render img vào element có ID
 */
function ImageViewAction({ data }) {
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

  // ⚡ Gọi hook NGAY ĐẦU component (trước mọi early-return) để tuân thủ Rules
  // of Hooks — hook tự no-op nếu action.toID không tồn tại. Có retry qua
  // requestAnimationFrame khi element đích chưa kịp mount (giống
  // Transitiontoid.jsx) thay vì bỏ nội dung vĩnh viễn như code cũ.
  const targetElement = useDomElementByID(action.toID);

  // ✅ Lấy img từ action hoặc item hoặc data
  const img = action.img || item.img || data.img;

  if (!img) return null;

  // ⚡ Log này trước đây chạy VÔ ĐIỀU KIỆN mỗi frame cho mọi ImageView đang active
  // (kể cả khi không dùng toID) — tốn I/O đáng kể khi render video dài nhiều ảnh.
  // Giờ chỉ chạy trong dev (Remotion render CLI mặc định NODE_ENV=production nên
  // lúc render thật sẽ tự động tắt hẳn).
  if (process.env.NODE_ENV === "development") {
    console.log(action.toID, "toIDImg");
  }

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
    // ⚡ Chưa tìm thấy element đích (đang trong lúc hook retry) → return null
    // cho lượt render này; hook sẽ tự re-render lại khi tìm thấy (hoặc warn
    // sau tối đa 60 lần thử), KHÔNG mất nội dung vĩnh viễn như trước.
    if (!targetElement) return null;

    // ⭐ Dùng React Portal để render vào element có ID
    return createPortal(
      <ImageView
        img={img}
        frame={frame}
        styCss={mergedStyle}
        startFrame={actionStartFrame}
        endFrame={actionEndFrame}
        imgSize={action.imgSize || data.imgSize || "100px"}
        data={data}
        dataAction={action}
      />,
      targetElement,
    );
  }

  // ⭐ Render bình thường (không có toID)
  return (
    <ImageView
      img={img}
      frame={frame}
      styCss={mergedStyle}
      startFrame={actionStartFrame}
      endFrame={actionEndFrame}
      imgSize={action.imgSize || data.imgSize || "800px"}
      data={data}
      dataAction={action}
    />
  );
}

export default ImageViewAction;
export { ImageViewAction };
