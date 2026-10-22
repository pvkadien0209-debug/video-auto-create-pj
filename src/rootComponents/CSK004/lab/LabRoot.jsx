// LabRoot.jsx — nơi đăng ký các composition thử nghiệm (LAB). Tách riêng, không đụng R_CSK004 / modules/index.js.
import React from "react";
import { Composition, Folder } from "remotion";
import { SceneLan, LAB_FRAMES } from "./cutout/SceneLan.jsx";
import { DialogueRoot } from "./dialogue/DialogueRoot.jsx"; // #101: đối thoại + người ngoài cuộc dừng lại nhận xét
import { CastRoot } from "./cast/CastRoot.jsx"; // #101: bộ nhân vật + mascot Đét
import { Cast2Root } from "./cast2/Cast2Root.jsx"; // #110: cảnh thử Bé Bin, Bà Tư, Sam

export const LabRoot = () => (
  <Folder name="LAB">
    <Composition id="LAB-Cutout" component={SceneLan} fps={30} width={1920} height={1080} durationInFrames={LAB_FRAMES} />
    <DialogueRoot />
    <CastRoot />
    <Cast2Root />
  </Folder>
);
