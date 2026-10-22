// data/group.js — Gom các dòng phẳng trong data/videos.js thành từng video.
//
// Quy tắc:
//  • Chấp nhận 2 dạng: mảng phẳng, hoặc mảng lồng [[...video 1], [...video 2]] (mỗi mảng con = 1 video).
//  • Object có `subject` (khác null/rỗng) → BẮT ĐẦU 1 video mới.
//    tb-01..tb-N của chính object đó = HÀNG TIÊU ĐỀ của bảng.
//  • Các object tiếp theo có subject = null → thêm 1 HÀNG vào bảng của video đang mở.
//  • Số cột: kiểm tra tb-01, tb-02, ... (+1) đến khi không còn key thì dừng
//    (có thể là 01-03, 01-05...).
//  • id: dùng `id` khai báo trong object mở đầu, nếu không có → số thứ tự 1, 2, 3...

const pad2 = (n) => String(n).padStart(2, "0");
const has = (v) => v !== null && v !== undefined && String(v).trim() !== "";

// Đếm số cột tb-XX của 1 object: +1 đến khi không còn key
export const countTbColumns = (obj) => {
  let n = 0;
  while (Object.prototype.hasOwnProperty.call(obj, `tb-${pad2(n + 1)}`)) n++;
  return n;
};

const readRow = (obj, cols) =>
  Array.from({ length: cols }, (_, i) => {
    const v = obj[`tb-${pad2(i + 1)}`];
    return has(v) ? String(v) : "";
  });

export const groupVideos = (rows = []) => {
  const out = [];
  let cur = null;

  // Mảng lồng → mỗi mảng con là 1 video: làm phẳng (dòng đầu mỗi mảng con có subject)
  for (const r of rows.flat()) {
    if (has(r.subject)) {
      const cols = countTbColumns(r);
      cur = {
        ...r, // giữ các field phụ (template, style, id...)
        id: String(r.id ?? out.length + 1),
        subject: r.subject,
        detail: r.detail ?? "",
        subjectTable: r.subjectTable ?? "",
        notice: r.notice ?? "",
        columns: readRow(r, cols),
        rows: [],
      };
      out.push(cur);
    } else if (cur) {
      const row = readRow(r, cur.columns.length);
      if (row.some(has)) cur.rows.push(row);
      // notice đặt ở dòng con (nếu có) cũng được nhận, ưu tiên dòng mở đầu
      if (!has(cur.notice) && has(r.notice)) cur.notice = r.notice;
    } else {
      console.warn("⚠️ CSK003: dòng bảng không có subject đứng trước → bỏ qua", r);
    }
  }

  // Bỏ các key tb-XX thô cho props gọn
  return out.map((v) => {
    const clean = { ...v };
    for (const k of Object.keys(clean)) if (/^tb-\d+$/.test(k)) delete clean[k];
    return clean;
  });
};
