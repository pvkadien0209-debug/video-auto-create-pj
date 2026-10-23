// R_CSK004.jsx — Root CSK004: video bài học DetPro dựng từ thư viện module (HUONG-DAN-VIDEO, #087–#093).
//   • Thư mục "DP-W": mỗi kịch bản trong data/scripts → 1 video W (16:9, tóm tắt trên web).
//   • Thư mục "Gallery": mỗi module × 2 bộ dữ liệu (vừa / dài nhất) để xem thử, góc trên có mã module.
//   • "GalleryReel": chạy lần lượt cả 100 module.
//   • Thư mục "LAB": cảnh thử nghiệm (#099 hoạt hình cắt giấy: LAB-Cutout).
import React from "react";
import { Composition, Folder } from "remotion";
import { ScriptVideo, scriptFrames, loadAudioMs } from "./script/ScriptVideo.jsx";
import { trimBundle } from "./core/voice.js";
import { REGISTRY } from "./modules/index.js";
import { SAMPLES } from "./data/samples.js";
import { FORMATS } from "./core/theme.js";
import { SCRIPTS } from "./data/scripts/index.js";
import { SocialQuiz, SOCIAL_QUIZ, SAMPLE_QUIZ } from "./script/SocialQuiz.jsx"; // #172: ảnh "Câu hỏi hôm nay" (6-goi-dang-bai.bat)
import { Poster } from "./script/Poster.jsx"; // #164: ảnh bìa P-<mã video> (5-tao-anh-bia.bat)
import { LabRoot } from "./lab/LabRoot.jsx"; // #099: thư mục LAB — cảnh thử hoạt hình cắt giấy (không phải video thật)

const { width, height, fps } = FORMATS.W;

// #106: mẫu có thể kèm `lines` lời đọc ([{ id, say, sub, … }]) — tách ra khỏi data để cảnh nhận qua ctx.lines.
// (STORY-10 có ô data tên "lines" là dòng tài liệu — chuỗi, không có `say` — thì giữ nguyên trong data.)
const isVoice = (x) => Array.isArray(x) && x.length > 0 && x.every((l) => l && typeof l === "object" && "say" in l);
const sceneOf = (id, code, sample = {}, after) => {
  if (!isVoice(sample.lines)) return { id, module: code, data: sample, beats: { after } };
  const { lines, ...data } = sample;
  return { id, module: code, data, lines, beats: { after } };
};

const one = (code, sample, i) => ({
  schema: "detpro.video-script/0.2", id: `G-${code}`, unit: { door: "ky-nang", level: "B1" }, format: "W", mode: "text",
  scenes: [sceneOf(`s${i}`, code, sample, 600)],
});

const reel = {
  schema: "detpro.video-script/0.2", id: "GalleryReel", unit: { door: "ky-nang", level: "B1" }, format: "W", mode: "text",
  scenes: Object.keys(REGISTRY).map((code, i) => sceneOf(`r${i}`, code, SAMPLES[code].thuong, 500)),
};

const comp = (id, script, showCode) => (
  <Composition key={id} id={id} component={ScriptVideo} fps={fps} width={width} height={height}
    durationInFrames={scriptFrames(script, fps)} defaultProps={{ script, showCode }} />
);

// #110: video bài học đọc độ dài mp3 thật (public/audio/dp/durations.dat) → thời lượng khớp giọng, tự bật giọng khi đủ mp3
const compW = (id, script) => (
  <Composition key={id} id={id} component={ScriptVideo} fps={fps} width={width} height={height}
    durationInFrames={scriptFrames(script, fps)} defaultProps={{ script, showCode: false }}
    calculateMetadata={async ({ props }) => {
      const audioMs = trimBundle(props.script, await loadAudioMs()); // #159: chỉ câu của bài này
      return { durationInFrames: scriptFrames(props.script, fps, audioMs), props: { ...props, audioMs } };
    }} />
);

export const RemotionVideo = () => (
  <>
    <Folder name="DP-W">{SCRIPTS.map((s) => compW(s.id.replace(/[^a-zA-Z0-9-]/g, "-"), s))}</Folder>
    {/* #164: ảnh bìa 16:9 — một khung cho mỗi video (render bằng renderStill) */}
    <Folder name="DP-POSTER">
      {SCRIPTS.map((s) => (
        <Composition key={`P-${s.id}`} id={`P-${s.id.replace(/[^a-zA-Z0-9-]/g, "-")}`} component={Poster} fps={fps} width={width} height={height}
          durationInFrames={1} defaultProps={{ script: s }} />
      ))}
    </Folder>
    {/* #172: ảnh mạng xã hội — dựng bằng renderStill với inputProps (goi-dang-bai.js) */}
    <Folder name="DP-SOCIAL">
      <Composition id="S-QUIZ" component={SocialQuiz} fps={fps} width={SOCIAL_QUIZ.width} height={SOCIAL_QUIZ.height} durationInFrames={1} defaultProps={SAMPLE_QUIZ} />
    </Folder>
    <Folder name="Gallery">
      {Object.keys(REGISTRY).flatMap((code, i) => [
        comp(`G-${code}`, one(code, SAMPLES[code].thuong, i), true),
        comp(`G-${code}-dai`, one(code, SAMPLES[code].dai, i), true),
        // #110: mẫu thêm ngoài thuong/dai (vd. SCENE-01 "ba-vai") → G-<mã>-<khoá>
        ...Object.keys(SAMPLES[code]).filter((k) => k !== "thuong" && k !== "dai").map((k) => comp(`G-${code}-${k}`, one(code, SAMPLES[code][k], i), true)),
      ])}
      {comp("GalleryReel", reel, true)}
    </Folder>
    <LabRoot />
  </>
);

export default RemotionVideo;
