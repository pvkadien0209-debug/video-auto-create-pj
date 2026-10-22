// Cast2Root.jsx — LAB-Cast2: cảnh thử ba vai mới Bé Bin, Bà Tư, Sam (#110), dựng bằng ScriptVideo như video thật.
import React from "react";
import { Composition, Folder } from "remotion";
import { ScriptVideo, scriptFrames } from "../../script/ScriptVideo.jsx";
import { CAST2_SCENES } from "./scenes.js";

const script = (key, sc) => ({
  schema: "detpro.video-script/0.2", id: `LAB-Cast2-${key}`, unit: { door: "ky-nang", level: "B1" }, format: "W", mode: "text",
  scenes: [{ id: "s1", module: sc.module, data: sc.data, lines: sc.lines, beats: { after: 600 } }],
});

export const Cast2Root = () => (
  <Folder name="LAB-Cast2">
    {Object.entries(CAST2_SCENES).map(([k, sc]) => {
      const s = script(k, sc);
      return <Composition key={k} id={s.id} component={ScriptVideo} fps={30} width={1920} height={1080} durationInFrames={scriptFrames(s, 30)} defaultProps={{ script: s, showCode: false }} />;
    })}
  </Folder>
);
