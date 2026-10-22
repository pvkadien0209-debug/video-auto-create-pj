// R_CSK002.jsx — Root của CSK002 (Remotion thuần, không qua pipeline JSON).
// Mỗi phần tử trong data/videos.js → 1 <Composition id="1" | "2" | ...> (giữ id số như CSK001
// để script batch render cũ vẫn dùng được).
import React from "react";
import { Composition } from "remotion";
import { ensureFontsLoaded } from "../../utils/load-fonts";
import { resolveTemplate } from "./templates/index.js";
import { VIDEOS } from "./data/videos.js";
import { videoSrc } from "./paths.js";

// Đo độ dài video (giây) bằng <video> của trình duyệt — không cần thư viện ngoài.
const getVideoSeconds = (src) =>
  new Promise((resolve) => {
    const v = document.createElement("video");
    v.preload = "metadata";
    v.onloadedmetadata = () => {
      resolve(v.duration);
      v.remove();
    };
    v.onerror = () => {
      console.warn(`⚠️ Không đọc được video: ${src}`);
      resolve(null);
      v.remove();
    };
    v.src = src;
  });

const FPS = 30;
const VERTICAL = true; // false → 1920x1080 (YouTube)

export const RemotionVideo = () => (
  <>
    {VIDEOS.map((v) => {
      const tpl = resolveTemplate(v.template); // template mặc định: T01
      return (
        <Composition
          key={v.id}
          id={String(v.id)}
          component={tpl.component}
          fps={FPS}
          width={VERTICAL ? 1080 : 1920}
          height={VERTICAL ? 1920 : 1080}
          durationInFrames={tpl.getDuration(v, FPS)}
          defaultProps={v}
          calculateMetadata={async ({ props }) => {
            await ensureFontsLoaded();
            // Khai báo tay trong data thì dùng luôn, không thì tự đo
            const bgVideoSourceSeconds =
              props.bgVideoSourceSeconds ??
              (props.bgVideo ? await getVideoSeconds(videoSrc(props.bgVideo)) : null);
            return {
              durationInFrames: tpl.getDuration(props, FPS),
              props: { ...props, bgVideoSourceSeconds },
            };
          }}
        />
      );
    })}
  </>
);

export default RemotionVideo;
