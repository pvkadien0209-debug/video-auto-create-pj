// R001.jsx
import React from "react";
import { Composition, staticFile } from "remotion";
import { VideoTemplate } from "./R_A001V";
import { videoData01 } from "./data";
import { ensureFontsLoaded } from "../../utils/load-fonts";
let videoData = videoData01;
let youtbeFormat = false;
if (!videoData01[0].id) {
  let temVideoData = [];
  videoData01.forEach((e, i) => {
    temVideoData.push({ id: i + 1, data: e });
  });
  videoData = temVideoData;
}

const isVideoCode = (code) => code && code.endsWith(".mp4");

const getAudioPath = (code) => {
  if (!code) return null;
  if (isVideoCode(code)) {
    // ✨ MP4: lấy từ /video/... (code đã có .mp4)
    if (code.includes("_")) {
      const prefix = code.split("_")[0];
      return `video/${prefix}/${code}`;
    } else {
      return `video/khac/${code}`;
    }
  }
  // MP3 bình thường
  if (code.includes("_")) {
    const prefix = code.split("_")[0];
    return `audio/${prefix}/${code}.mp3`;
  } else {
    return `audio/khac/${code}.mp3`;
  }
};

const loadAudioDurationWithFetch = async (audioSrc) => {
  try {
    const response = await fetch(audioSrc);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    await audioContext.close();
    return audioBuffer.duration;
  } catch (error) {
    console.error("Error loading audio:", error);
    throw error;
  }
};

// ✨ Load duration từ video element (dùng cho .mp4)
const loadVideoDuration = (videoSrc) => {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.src = videoSrc;
    video.preload = "metadata";
    video.onloadedmetadata = () => {
      resolve(video.duration);
      video.remove();
    };
    video.onerror = () => {
      video.remove();
      reject(new Error(`Failed to load video: ${videoSrc}`));
    };
  });
};

// ⚡ Bật log chi tiết bằng cách set env REMOTION_DEBUG_METADATA=1 trước khi render.
// Mặc định TẮT để tránh spam console (đặc biệt khi render với nhiều worker/tab song song).
const DEBUG_METADATA = process.env.REMOTION_DEBUG_METADATA === "1";

export const RemotionVideo = () => {
  return (
    <>
      {videoData.map((item, i) => (
        <Composition
          key={i + ""}
          id={item.id + ""}
          component={VideoTemplate}
          durationInFrames={420}
          fps={30}
          width={youtbeFormat ? 1920 : 1080}
          height={youtbeFormat ? 1080 : 1920}
          defaultProps={{
            id: item.id + "",
            item: item,
          }}
          calculateMetadata={async ({ props, fps }) => {
            if (DEBUG_METADATA) {
              console.log("========================================");
              console.log("🚀 calculateMetadata STARTED for video:", props.id);
              console.log("Number of audio items:", props.item.data.length);
              console.log("========================================");
            }
            // ✅ LOAD FONT TRƯỚC TIÊN
            await ensureFontsLoaded();

            // ⚡ mediaDurationsFrames: lưu lại duration (frame) của từng item có media,
            // để truyền xuống VideoTemplate/FrameCalculator dùng lại — tránh phải
            // mount lại <audio>/<video> để đo LẦN THỨ HAI lúc render thật (xem R_A001V.jsx).
            const mediaDurationsFrames = {};

            // ⚡ TỐI ƯU: trước đây vòng lặp này dùng `for...await` nên load TUẦN TỰ
            // từng audio/video một — mỗi item phải chờ xong item trước mới bắt đầu.
            // Giờ dùng Promise.all để load SONG SONG, tổng thời gian chỉ còn ~bằng
            // item chậm nhất thay vì tổng tất cả. Thứ tự xử lý / công thức tính
            // duration của từng item giữ NGUYÊN 100% so với bản cũ.
            const itemResults = await Promise.all(
              props.item.data.map(async (dataItem, index) => {
                // ✨ Kiểm tra timeFixed trước tiên (không cần load media — tính ngay)
                // Fix: cộng thêm timePlus nếu có cả hai
                if (dataItem.timeFixed && dataItem.timeFixed > 0) {
                  const finalDuration =
                    dataItem.timeFixed + (dataItem.timePlus || 0);
                  if (DEBUG_METADATA) {
                    console.log(
                      `[${index + 1}/${props.item.data.length}] Using timeFixed: ${dataItem.timeFixed}s` +
                        (dataItem.timePlus
                          ? ` + timePlus: ${dataItem.timePlus}s`
                          : ""),
                    );
                  }
                  return { index, seconds: finalDuration, success: null };
                }

                if (dataItem.code) {
                  const audioPath = getAudioPath(dataItem.code);
                  const isVid = isVideoCode(dataItem.code);

                  if (!audioPath) {
                    if (DEBUG_METADATA) {
                      console.warn(`  ⚠️  No path for ${dataItem.code}`);
                    }
                    return { index, seconds: 0, success: null };
                  }

                  if (DEBUG_METADATA) {
                    console.log(
                      `[${index + 1}/${props.item.data.length}] Processing: ${dataItem.code}` +
                        (isVid ? " [VIDEO]" : ""),
                    );
                  }

                  try {
                    const src = staticFile(audioPath);
                    if (DEBUG_METADATA) console.log(`  → Source URL: ${src}`);

                    // ✨ Dùng video element cho .mp4, fetch+AudioContext cho audio
                    const duration = isVid
                      ? await loadVideoDuration(src)
                      : await loadAudioDurationWithFetch(src);

                    // ⚡ Lưu lại duration gốc (frame) để FrameCalculator dùng lại,
                    // không đo lần 2. Không cộng timePlus ở đây vì FrameCalculator
                    // tự cộng timePlus khi build codeFrame (giống hệt logic cũ).
                    mediaDurationsFrames[index] = Math.ceil(duration * fps);

                    const finalDuration = duration + (dataItem.timePlus || 0);
                    if (DEBUG_METADATA) {
                      console.log(`  ✓ Duration: ${duration.toFixed(2)}s`);
                      if (dataItem.timePlus) {
                        console.log(`  → timePlus: ${dataItem.timePlus}s`);
                      }
                      if (isVid) {
                        console.log(
                          `  → SoundPlay sẽ dùng: SOUNDCHUNG_SpaceSound.mp3`,
                        );
                      }
                      console.log(`  → Final Duration: ${finalDuration.toFixed(2)}s`);
                    }
                    return { index, seconds: finalDuration, success: true };
                  } catch (error) {
                    if (DEBUG_METADATA) {
                      console.error(
                        `  ✗ Error loading ${dataItem.code}:`,
                        error.message,
                      );
                    }
                    const fallbackDuration = 6 + (dataItem.timePlus || 0);
                    // ⚡ fallback cũng lưu lại để FrameCalculator không đo lại (khớp
                    // với fallback 6s / 180 frame @30fps mà buildFrames đã dùng sẵn).
                    mediaDurationsFrames[index] = Math.ceil(6 * fps);
                    if (DEBUG_METADATA) {
                      console.log(`  → Using fallback ${fallbackDuration}s`);
                    }
                    return { index, seconds: fallbackDuration, success: false };
                  }
                }

                return { index, seconds: 0, success: null };
              }),
            );

            // Cộng dồn kết quả — thứ tự cộng không ảnh hưởng tổng (phép cộng có tính giao hoán),
            // nên chạy song song ở trên không làm sai tổng so với bản tuần tự cũ.
            let totalDurationInSeconds = 0;
            let successCount = 0;
            let failCount = 0;
            for (const r of itemResults) {
              totalDurationInSeconds += r.seconds;
              if (r.success === true) successCount++;
              else if (r.success === false) failCount++;
            }

            // ⚠️ Giữ nguyên `* 30` (không đổi thành `* fps`) để không đổi hành vi cũ —
            // đây là chỗ có vẻ là bug tồn tại từ trước (composition luôn 30fps nên
            // chưa lộ ra), báo riêng cho bạn, KHÔNG tự sửa ở đây.
            const totalFrames = Math.ceil(totalDurationInSeconds * 30);
            if (DEBUG_METADATA) {
              console.log("========================================");
              console.log(`✅ CALCULATION COMPLETE for video ${props.id}`);
              console.log(`   Success: ${successCount}, Failed: ${failCount}`);
              console.log(
                `   Total Duration: ${totalDurationInSeconds.toFixed(2)}s`,
              );
              console.log(`   Total Frames: ${totalFrames} (at ${30} fps)`);
              console.log("========================================\n");
            }
            const finalFrames = totalFrames > 0 ? totalFrames : 420;
            return {
              durationInFrames: finalFrames,
              props: {
                ...props,
                duration: finalFrames,
                mediaDurationsFrames, // ⚡ NEW — optional, FrameCalculator tự fallback nếu thiếu
              },
            };
          }}
        />
      ))}
    </>
  );
};
