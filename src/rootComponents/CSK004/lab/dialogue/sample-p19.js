// sample-p19.js — dữ liệu thử cho DLG-01 "Tin nhắn + dừng nhận xét".
// Nguồn: bài students-with-part-time-jobs/agree-pay-shifts-before-starting, đoạn p18–p20 (🔀 Hai lựa chọn: giữ căn cước).
// Chữ lấy từ bài; chỗ nào chuyển lời kể thành lời thoại thì ghi ở `ref`. Không thêm số liệu, không thêm lời của quản lý ngoài bài.
export const SAMPLE_P19 = {
  module: "DLG-01",
  ref: ["p18", "p19", "p20"],
  label: "Tình huống minh hoạ",
  title: "Quản lý xin giữ căn cước “để làm tin”",
  contact: { name: "Quản lý cửa hàng", illus: "man-office-worker" },
  // tin 0: chuyển lời kể p19 "Quản lý cửa hàng xin giữ căn cước của bạn “để làm tin”" thành lời thoại
  // tin 1: Cách A của p19 "đưa bản chính"
  messages: [
    { from: "them", text: "Em để căn cước lại cho anh giữ, để làm tin nhé." },
    { from: "me", text: "Dạ, em gửi anh bản chính ạ." },
  ],
  stopAt: 1, // dừng ngay sau tin thứ 2 (đếm từ 0)
  host: { name: "Người dẫn", illus: "owl" }, // tạm, sẽ thay bằng mascot của DetPro
  verdict: {
    ok: false,
    say: "Không nên đưa bản chính.",
    // rút gọn hậu quả Cách A ở p19
    why: "Lúc nghỉ việc, dễ bị hẹn “mai lấy” hết lần này đến lần khác, và kẹt mọi thủ tục cần căn cước.",
    // p18 + nguồn của bài (Bộ luật Lao động 2019, Điều 17)
    law: "Nơi làm không được giữ bản chính giấy tờ tuỳ thân · BLLĐ 2019, Điều 17",
  },
  // Cách B của p19, câu mẫu nguyên văn
  redo: [{ from: "me", attach: "Bản sao căn cước", text: "Dạ, em gửi anh bản sao để làm hồ sơ, bản chính em cần giữ để làm giấy tờ ạ." }],
  result: {
    ok: true,
    say: "Nên: đưa bản sao, nói nhẹ nhàng.",
    why: "Hồ sơ của quán vẫn đủ, còn giấy tờ quan trọng vẫn nằm trong tay bạn.", // p19 nguyên văn
  },
  takeaway: "Bản sao để lại, bản chính mang về.", // p20 → Rút ra
};
