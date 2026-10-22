// templates/index.js — DANH BẠ TEMPLATE. Thêm template mới: tạo thư mục Txx_Ten/ rồi đăng ký ở đây.
// Key = mã template (dùng trong data/videos.js: template: "T01").
import TipCard from "./T01_TipCard/index.jsx";
import * as T01 from "./T01_TipCard/config.js";

export const TEMPLATES = {
  T01: { component: TipCard, meta: T01.META, getDuration: T01.getDuration },
};

// Tên cũ vẫn dùng được: template: "TipCard" → T01
export const ALIASES = { TipCard: "T01" };

export const DEFAULT_TEMPLATE = "T01";

export const resolveTemplate = (code) => {
  const key = ALIASES[code] || code || DEFAULT_TEMPLATE;
  const tpl = TEMPLATES[key];
  if (!tpl) throw new Error(`Không có template "${code}". Có: ${Object.keys(TEMPLATES).join(", ")}`);
  return tpl;
};
