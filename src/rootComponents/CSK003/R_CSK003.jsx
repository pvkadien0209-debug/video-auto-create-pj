// R_CSK003.jsx — Root CSK003: ảnh/video 3s khổ ảnh Facebook (1080x1350).
// data/videos.js (dòng phẳng) → data/group.js gom theo subject → mỗi video = 1 <Composition id="1"|"2"...>
import React from "react";
import { Composition } from "remotion";
import { resolveTemplate } from "./templates/index.js";
import { VIDEOS as RAW } from "./data/videos.js";
import { groupVideos } from "./data/group.js";

const FPS = 30;
export const VIDEOS = groupVideos(RAW);

export const RemotionVideo = () => (
  <>
    {VIDEOS.map((v) => {
      const tpl = resolveTemplate(v.template);
      return (
        <Composition
          key={v.id}
          id={String(v.id)}
          component={tpl.component}
          fps={FPS}
          width={tpl.size.width}
          height={tpl.size.height}
          durationInFrames={tpl.getDuration(v, FPS)}
          defaultProps={v}
        />
      );
    })}
  </>
);

export default RemotionVideo;
