// T01_InfoTable/config.js — THÔNG TIN + THÔNG SỐ MẶC ĐỊNH của template CSK003 · T01.
// Đổi cho TẤT CẢ video → sửa ở đây. Đổi cho 1 video → khai báo cùng tên field trong data/videos.js
// (ở object có subject).

export const META = {
  code: "T01",
  name: "InfoTable",
  desc: "Ảnh/video 3s khổ ảnh Facebook: tiêu đề → nội dung → tiêu đề bảng → bảng → lưu ý",
  // Mã mục → mô tả (đồng bộ với styles.js và index.jsx)
  sections: {
    SUBJECT: "Tiêu đề chính (props: subject)",
    DETAIL: "Đoạn giải thích (props: detail)",
    SUBJECT_TABLE: "Tiêu đề bảng (props: subjectTable)",
    TABLE: "Bảng: hàng tiêu đề = tb-XX của dòng có subject, các hàng = dòng subject null",
    NOTICE: "Khung lưu ý cuối (props: notice, noticeLabel)",
  },
};

export const DEFAULTS = {
  seconds: 3, // độ dài video
  noticeLabel: "LƯU Ý",
  style: {}, // override style theo mã mục, vd { SUBJECT: { fontSize: 60 } }
  showSections: false, // true = viền + nhãn mã mục (debug)
};

// Khung hình ảnh Facebook (dọc 4:5 – hiển thị lớn nhất trên News Feed)
export const SIZE = { width: 1080, height: 1350 };

export const getDuration = (props, fps = 30) => {
  const p = { ...DEFAULTS, ...props };
  return Math.round(p.seconds * fps);
};

// Mốc hiệu ứng xuất hiện (frame). Tất cả xong trước frame 30 → ảnh chụp ở frame 30 đầy đủ.
export const TIMING = {
  SUBJECT: { from: 0, dur: 8 },
  DETAIL: { from: 5, dur: 8 },
  SUBJECT_TABLE: { from: 10, dur: 7 },
  TABLE_HEAD: { from: 13, dur: 6 },
  TABLE_ROWS: { from: 15, dur: 6, spread: 8 }, // các hàng rải đều trong `spread` frame
  NOTICE: { from: 22, dur: 7 },
};
