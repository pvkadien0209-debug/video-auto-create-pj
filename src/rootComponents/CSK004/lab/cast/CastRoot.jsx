// CastRoot.jsx — đăng ký các composition của bộ nhân vật. Claude chính gắn <CastRoot/> vào LabRoot sau.
import React from "react";
import { Composition, Folder } from "remotion";
import { Lineup, Expressions, Poses, POSES_H, Turn } from "./scenes/Sheets.jsx";
import { MascotIntro, MASCOT_FRAMES } from "./scenes/MascotIntro.jsx";

const W = { fps: 30, width: 1920, height: 1080, durationInFrames: 1 };
export const CastRoot = () => (
  <Folder name="LAB-Cast">
    <Composition id="LAB-Cast-Lineup" component={Lineup} {...W} />
    <Composition id="LAB-Cast-Silhouette" component={Lineup} {...W} defaultProps={{ silhouette: true }} />
    <Composition id="LAB-Cast-Expressions" component={Expressions} {...W} />
    <Composition id="LAB-Cast-Poses" component={Poses} {...W} height={POSES_H} />
    <Composition id="LAB-Cast-Turn" component={Turn} {...W} />
    <Composition id="LAB-Cast-Mascot" component={MascotIntro} {...W} durationInFrames={MASCOT_FRAMES} />
  </Folder>
);
