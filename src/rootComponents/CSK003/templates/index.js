// templates/index.js — DANH BẠ TEMPLATE của CSK003. Thêm template: tạo Txx_Ten/ rồi đăng ký ở đây.
import InfoTable from "./T01_InfoTable/index.jsx";
import * as T01 from "./T01_InfoTable/config.js";

export const TEMPLATES = {
  T01: { component: InfoTable, meta: T01.META, getDuration: T01.getDuration, size: T01.SIZE },
};

export const DEFAULT_TEMPLATE = "T01";

export const resolveTemplate = (code) => {
  const key = code || DEFAULT_TEMPLATE;
  const tpl = TEMPLATES[key];
  if (!tpl) throw new Error(`CSK003: không có template "${code}". Có: ${Object.keys(TEMPLATES).join(", ")}`);
  return tpl;
};
