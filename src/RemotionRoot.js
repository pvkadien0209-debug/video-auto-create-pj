/**
 * ⭐ QUY ƯỚC CHUNG — ĐỔI PROJECT = ĐỔI DÒNG IMPORT BÊN DƯỚI (chỉ 1 chỗ này).
 *   • Studio (npm run dev) và các lệnh render đều dùng src/index.js → file này.
 *   • Quy trình: đổi trỏ → npm run dev xem video mẫu → OK rồi mới chạy lệnh in/render.
 *   • Chỉ để 1 dòng import không comment; các project khác để comment làm backup.
 */
// import * as rootModule from "./rootComponents/CSK001/R_A001.jsx"; // backup: pipeline JSON
// import * as rootModule from "./rootComponents/CSK002/R_CSK002.jsx"; // TipCard dọc 1080x1920
import * as rootModule from "./rootComponents/CSK004/R_CSK004.jsx"; // Video bài học DetPro 1920x1080 · npm run renderw
// import * as rootModule from "./rootComponents/CSK003/R_CSK003.jsx"; // Ảnh FB 1080x1350 · npm run renderimg3

// Re-export the RemotionVideo component
export const RemotionVideo = rootModule.RemotionVideo;

// Tên project đang trỏ (render script đọc từ dòng import đang bật)
console.log(`🎬 Loaded Remotion Root: CSK004`);
