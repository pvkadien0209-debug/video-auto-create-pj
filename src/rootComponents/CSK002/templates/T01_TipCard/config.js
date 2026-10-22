// T01_TipCard/config.js — THÔNG TIN + THÔNG SỐ MẶC ĐỊNH của template T01.
// Muốn đổi mặc định cho TẤT CẢ video dùng T01 → sửa ở đây.
// Muốn đổi cho 1 video → khai báo cùng tên field trong data/videos.js.

export const META = {
  code: "T01",
  name: "TipCard",
  desc: "Video nền + khung tiêu đề/nội dung dạng danh sách mẹo + footer + logo + nhạc nền",
  origin: "CSK001 modeND",
  // Mã mục → mô tả (giữ đồng bộ với styles.js và index.jsx)
  sections: {
    BG: "Video nền toàn màn hình (cover, muted, loop, fade-in/out)",
    CARD: "Khung viền xanh lá bao HEAD + DETAIL",
    HEAD: "Tiêu đề (props: headline)",
    DETAIL: "Nội dung chi tiết nhiều dòng (props: detail)",
    FOOTER: "Dòng chữ chân trang viền xanh dương (props: footerText)",
    LOGO: "Logo tròn góc phải dưới (props: logo)",
    MUSIC: "Nhạc nền (props: music, musicVolume, musicStartFrom)",
  },
};

export const DEFAULTS = {
  // ── BG ──
  bgVideo: null, // vd "kd_vdA1.mp4"
  bgVideoSeconds: 10, // thời lượng đoạn video nền (giây) → quyết định độ dài video
  bgVideoDelayFrames: 3, // CSK001: overlay xuất hiện trước video nền 0.1s
  bgFadeInFrames: 30,
  bgFadeOutFrames: 5,
  bgVideoSourceSeconds: null, // tự đo trong calculateMetadata (để <Loop> lặp đúng)

  // ── HEAD / DETAIL ──
  headline: "",
  detail: "",
  cardBgImage: "BG_canhan.png", // ảnh nền mờ của HEAD → assets/BG/BG_canhan.png

  // ── FOOTER ──
  footerText: 'Ká Điện - "Hướng dẫn ghép âm & Rèn nghe nói tiếng anh online"',

  // ── LOGO ──
  logo: "logo_brand-pvd.png", // null = ẩn logo

  // ── MUSIC ──
  music: "nhacnen_vuituoi", // null = không nhạc
  musicVolume: 0.2,
  musicStartFrom: 0, // giây, vị trí bắt đầu trích trong file nhạc

  // ── Chung ──
  style: {}, // override style theo mã mục, vd { HEAD: { fontSize: 90 } }
  showSections: false, // true = hiện viền + nhãn mã mục (chỉ để xem/debug)
};

export const getDuration = (props, fps = 30) => {
  const p = { ...DEFAULTS, ...props };
  return p.bgVideoDelayFrames + Math.round(p.bgVideoSeconds * fps);
};
