// cast.js — DANH MỤC NHÂN VẬT DetPro: dữ liệu dùng chung cho code (cảnh, bảng mẫu) và tài liệu (character bible).
// Thêm nhân vật: tạo skins/<id>.js theo mẫu, rồi thêm một mục vào CAST. Không sửa khung xương.
import { lan } from "./skins/lan.js";
import { dung } from "./skins/dung.js";
import { thao } from "./skins/thao.js";
import { hoa } from "./skins/hoa.js";
import { binh } from "./skins/binh.js";
import { bin } from "./skins/bin.js";
import { tu } from "./skins/tu.js";
import { sam } from "./skins/sam.js";

export const SIGNATURE = {
  name: "Vòng Đét",
  shape: "vòng vàng #ffd23f hở một khe ở hướng 1 giờ (300°); khép đủ 360° = xong",
  sound: "tiếng \"đét!\" ngắn, giòn lúc vòng khép",
  catchphrase: ["Khoan đã!", "Tròn vòng!"],
};

export const MASCOT = {
  id: "det", name: "Đét", kind: "tê tê (pangolin) tròn",
  role: "người dẫn, dừng cảnh, nhận xét Đúng/Sai",
  traits: "tò mò, thẳng thắn mà hiền, hay dừng lại hỏi \"khoan đã\"",
  shape: "tròn (thân, đầu, quả bóng cuộn) + viền vảy răng cưa",
  colors: { scale: "#b8693d", scaleDark: "#8a4524", cream: "#f7e4c8", ring: "#ffd23f" },
  signature: "cuộn tròn thành bóng → Vòng Đét khép → bung ra \"Đét!\"; đuôi luôn đeo Vòng Đét",
};

/** Dàn người. series = các chuỗi bài nhân vật thường xuất hiện (gợi ý, chờ chốt). */
export const CAST = [
  {
    id: "lan", short: "phục vụ quán", name: "Lan", age: 20, gender: "nữ", skin: lan,
    role: "sinh viên năm 2, làm thêm phục vụ quán cơm",
    series: ["Đi làm thêm khi còn đi học", "Sinh viên xa nhà"],
    traits: "chăm, chu đáo, NGẠI HỎI (điểm yếu điển hình)", shape: "tròn (mềm, dễ gần)",
    color: "#0f6e5a", item: "tạp dề trắng + kẹp tóc hồng", voice: "nói nhỏ, hay mở đầu \"Dạ, cho em hỏi…\"",
  },
  {
    id: "dung", short: "sinh viên, làm kho", name: "Dũng", age: 21, gender: "nam", skin: dung,
    role: "sinh viên, làm thêm ở kho / giao hàng",
    series: ["Đi làm thêm khi còn đi học", "Sinh viên xa nhà"],
    traits: "nhanh nhẹn, hăng hái, HAY BỎ QUA CHI TIẾT GIẤY TỜ", shape: "tam giác (tóc dựng, vai rộng hông hẹp: năng động, vội)",
    color: "#2f5fb3", item: "hoodie xanh lam + túi đeo chéo", voice: "nói nhanh, câu ngắn, \"Ok, làm luôn!\"",
  },
  {
    id: "thao", short: "nhân viên mới", name: "Thảo", age: 27, gender: "nữ", skin: thao,
    role: "nhân viên văn phòng mới vào công ty; chạy bộ buổi sáng",
    series: ["Nhân viên mới", "Thuyết trình với sếp", "Chạy bộ", "Ăn uống lành mạnh"],
    traits: "ngăn nắp, thích lập kế hoạch, hơi cầu toàn", shape: "chữ nhật (thẳng, gọn)",
    color: "#6b3fa0", item: "kính gọng vuông + dây thẻ nhân viên", voice: "rõ ràng, hay liệt kê \"Thứ nhất…\"",
  },
  {
    id: "hoa", short: "chủ quán", name: "Cô Hoa", age: 46, gender: "nữ", skin: hoa,
    role: "chủ quán cơm (chủ của Lan), chủ shop nhỏ",
    series: ["Chủ shop nhỏ", "Đi làm thêm khi còn đi học"],
    traits: "thẳng tính, tốt bụng nhưng bận rộn, nói ngắn gọn", shape: "tròn + vuông (thấp, đầy đặn: ấm áp, vững)",
    color: "#c94f7c", item: "tóc búi cài bút + áo cổ trắng", voice: "dứt khoát, \"Rồi, vậy nha con!\"",
  },
  {
    id: "binh", short: "nghỉ hưu", name: "Bác Bình", age: 63, gender: "nam", skin: binh,
    role: "đã nghỉ hưu, đi bộ/chạy bộ, ăn uống lành mạnh",
    series: ["Ăn uống lành mạnh", "Chạy bộ", "người lớn trong mọi chuỗi"],
    traits: "điềm tĩnh, khỏe, hay hỏi lại cho chắc", shape: "vuông (vai vuông: đáng tin, chậm rãi)",
    color: "#6f7f33", item: "khăn vắt cổ + giày thể thao trắng", voice: "chậm, ấm, \"Từ từ, mình xem lại đã.\"",
  },
  // #110 (NV-Q9): ba vai mới
  {
    id: "bin", short: "bé trai", name: "Bé Bin", age: 9, gender: "nam", skin: bin,
    role: "bé trai, con / cháu trong nhà",
    series: ["Gia đình", "người nhỏ tuổi trong mọi chuỗi"],
    traits: "hiếu động, HAY HỎI \"Sao vậy ạ?\"", shape: "tròn nhỏ (đầu to, thấp ≈ 0,65 Dũng: hồn nhiên)",
    color: "#c77c00", item: "áo phông cam sọc trắng + ba lô xanh", voice: "lanh lảnh, hỏi dồn \"Sao vậy ạ? Rồi sao nữa?\"",
  },
  {
    id: "tu", short: "bà cụ", name: "Bà Tư", age: 66, gender: "nữ", skin: tu,
    role: "bà nội / bà ngoại, hàng xóm lớn tuổi, khách lớn tuổi",
    series: ["Gia đình", "Chăm sóc người lớn tuổi", "người lớn tuổi trong mọi chuỗi"],
    traits: "hiền, chậm, cẩn thận, hay dặn dò; ngại công nghệ", shape: "tròn + cong (vai tròn, hơi còng: hiền, từng trải)",
    color: "#2b7a8c", item: "tóc bạc búi + kính lão + áo bà ba", voice: "chậm, nhỏ, \"Từ từ thôi con.\"",
  },
  {
    id: "sam", short: "người nước ngoài", name: "Sam", age: 35, gender: "nữ", skin: sam,
    role: "người nước ngoài: đối tác, khách du lịch, đồng nghiệp; nói tiếng Anh",
    series: ["Gặp đối tác nước ngoài", "Đi công tác", "Giới thiệu di sản cho du khách", "Tiếng Anh nơi làm việc"],
    traits: "cởi mở, lịch sự, hỏi thẳng, hay khen", shape: "chữ nhật mềm (thẳng, gọn, thân thiện)",
    color: "#c8463c", item: "tóc vàng ngắn + áo khoác đỏ san hô", voice: "rõ, thân thiện, \"Nice to meet you!\"",
  },
];

export const byId = Object.fromEntries(CAST.map((c) => [c.id, c]));
