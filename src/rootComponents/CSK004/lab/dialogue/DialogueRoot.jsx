// DialogueRoot.jsx — đăng ký cảnh thử DLG-01 (đối thoại + người ngoài cuộc dừng lại nhận xét).
// Gắn vào LabRoot bằng: import { DialogueRoot } from "./dialogue/DialogueRoot.jsx"; rồi đặt <DialogueRoot /> trong <Folder name="LAB">.
// Bản thử ở chế độ chỉ chữ, nén thời gian đọc (PACE) để cảnh dài khoảng 20 giây; bản thật lấy thời lượng theo mp3.
import React from "react";
import { Composition, Folder } from "remotion";
import { DialogueStop, dlgPlan } from "./DialogueStop.jsx";
import { SAMPLE_P19 } from "./sample-p19.js";

const FPS = 30;
const PACE = 0.5;
export const LAB_DIALOGUE_FRAMES = dlgPlan(SAMPLE_P19, FPS, { pace: PACE }).end;

const SceneP19 = () => <DialogueStop data={SAMPLE_P19} pace={PACE} />;

export const DialogueRoot = () => (
  <Folder name="LAB-Dialogue">
    <Composition id="LAB-Dialogue" component={SceneP19} fps={FPS} width={1920} height={1080} durationInFrames={LAB_DIALOGUE_FRAMES} />
  </Folder>
);
