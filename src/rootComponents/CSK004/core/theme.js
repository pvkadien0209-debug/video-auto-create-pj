// theme.js — màu, chữ, khổ hình của CSK004 (video bài học DetPro). Màu lấy đúng bảng màu trang web (kt.css).
export const COLORS = {
  paper: "#f4f6f9", // nền
  surface: "#ffffff", // thẻ
  ink: "#172033", // chữ chính
  ink2: "#2b3650",
  muted: "#5d6878",
  line: "#e3e7ee",
  pine: "#0f6e5a", // màu chính
  pineSoft: "#e2f1ec",
  marker: "#ffd23f", // vàng: CHỈ để tô chỗ nhấn hoặc đáp án (MV-Q4)
  markerSoft: "#fff4c7",
  coral: "#e5533d", // sai, cảnh báo
  coralSoft: "#fde5e0",
  ok: "#2e8b57",
};

// Màu nhấn theo cửa học (Kỹ năng / Kiến thức / Chuyên môn). Kịch bản ghi theme.accent để đổi theo chuỗi.
export const DOOR_ACCENT = { "ky-nang": "#0f6e5a", "kien-thuc": "#2f5fb3", "chuyen-mon": "#6b3fa0" };

export const FONT = "'Be Vietnam Pro', sans-serif";

// Khổ hình. Dạng W (tóm tắt trên web) = 16:9.
export const FORMATS = {
  W: { width: 1920, height: 1080, fps: 30 },
};

// Vùng an toàn 16:9: lề 5% (P7). Dải dưới chừa cho phụ đề 2 dòng (#092).
export const SAFE = { x: 96, top: 120, bottom: 190 };

// Cỡ chữ (px ở 1920×1080). Chữ nhỏ nhất 44 px để xem được trên điện thoại.
export const TYPE = { hero: 104, h1: 84, h2: 64, body: 52, small: 44 };

export const accentOf = (script) => script?.theme?.accent || DOOR_ACCENT[script?.unit?.door] || COLORS.pine;
