import React, { useState, useCallback, useEffect } from "react";
import { delayRender, continueRender, staticFile } from "remotion";

/**
 * ⭐ DivAvatarView — Static container + Image
 * ─────────────────────────────────────
 * - KHÔNG có transition / animation
 * - Image BẮT BUỘC load xong trước khi video bắt đầu render
 * - Dùng delayRender / continueRender của Remotion
 *
 * ⭐ IMAGE PATH LOGIC:
 * - img có "_" → assets/{prefix}/{img}  (vd: "bg_001.png" → "assets/bg/bg_001.png")
 * - img không "_" → assets/khac/{img}
 * - img là URL đầy đủ (http/https) → dùng trực tiếp
 */
const DivAvatarView = ({
  frame,
  styCss = {},
  startFrame = 0,
  endFrame = 300,
  data = {},
  dataAction = {},
}) => {
  // ⭐ Lấy config từ dataAction hoặc data
  const elementId = dataAction.id || data.id;
  const elementClass = dataAction.className || data.className;
  const img = dataAction.img || data.img || null;
  const imgStyle = dataAction.imgStyle || data.imgStyle || {};

  // ⭐ delayRender — chặn video render cho đến khi image load xong
  const [handle] = useState(() => {
    if (!img) return null;
    return delayRender(`Loading image: ${img}`);
  });

  const [loaded, setLoaded] = useState(!img); // không có img → loaded luôn

  // ⭐ Resolve image path
  const getImageSrc = useCallback((imgName) => {
    if (!imgName) return null;
    // URL đầy đủ → dùng trực tiếp
    if (imgName.startsWith("http://") || imgName.startsWith("https://")) {
      return imgName;
    }
    // Có "_" → assets/{prefix}/{imgName}
    if (imgName.includes("_")) {
      const prefix = imgName.split("_")[0];
      return staticFile(`assets/${prefix}/${imgName}`);
    }
    // Mặc định → assets/khac/{imgName}
    return staticFile(`assets/khac/${imgName}`);
  }, []);

  const imageSrc = getImageSrc(img);

  // ⭐ Preload image → continueRender khi xong
  useEffect(() => {
    if (!imageSrc || !handle) return;

    const imgEl = new Image();

    imgEl.onload = () => {
      setLoaded(true);
      continueRender(handle);
    };

    imgEl.onerror = (err) => {
      console.error(
        `❌ DivAvatarView [${elementId}]: Failed to load image "${img}"`,
        err,
      );
      // Vẫn continueRender để không block video mãi mãi
      setLoaded(true);
      continueRender(handle);
    };

    imgEl.src = imageSrc;

    return () => {
      imgEl.onload = null;
      imgEl.onerror = null;
    };
  }, [imageSrc, handle, elementId, img]);

  // Visibility check
  if (frame < startFrame || frame > endFrame) return null;

  // ⭐ Container style — thuần styCss, không transition/animation
  const containerStyle = { ...styCss };

  // ⭐ Image default style — fill container
  const defaultImgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const finalImgStyle = { ...defaultImgStyle, ...imgStyle };

  return (
    <div id={elementId} className={elementClass} style={containerStyle}>
      AVATAR
      {imageSrc && loaded && (
        <img src={imageSrc} alt={img || ""} style={finalImgStyle} />
      )}
    </div>
  );
};

export default DivAvatarView;
