// Dữ liệu mẫu cho modules/open-drama.jsx: mỗi mã có thuong và dai
// Chữ lấy từ các bài: how-to-rent-a-safe-room, scams-targeting-new-students, what-to-do-when-pressured-to-decide-immediately,
// how-to-make-quick-decisions-under-pressure, calculate-costs-fees-profit (online-sellers).
export const SAMPLES_OPEN_DRAMA = {
  "OPEN-17": {
    thuong: { line: "Chưa thấy tận mắt, chưa chuyển một đồng.", hot: ["tận", "mắt"], illus: "eyes" },
    dai: { kicker: "Rút ra", line: "Tài khoản đứng tên mình, trách nhiệm cũng tên mình, đừng cho ai mượn.", hot: ["trách", "nhiệm"], illus: "credit-card" },
  },
  "OPEN-18": {
    thuong: { teaser: "Nhìn kỹ góc này", illus: "derelict-house", focus: [0.35, 0.45], around: ["mobile-phone", "luggage", "magnifying-glass-tilted-left"], headline: "Ảnh trên mạng thì đẹp, phòng thật ẩm mốc, không có cửa sổ" },
    dai: { teaser: "Chỉ cần đưa thẻ và mã?", illus: "bank", focus: [0.5, 0.3], around: ["credit-card", "locked-with-key", "mobile-phone", "money-bag"], headline: "Cho “thuê” tài khoản ngân hàng, hai tháng sau tài khoản bị phong toả vì nhận tiền lạ" },
  },
  "OPEN-19": {
    thuong: { label: "Dấu hiệu tin giả", warning: "“Chuyển cọc ngay kẻo hết!”", detail: "Người đăng hối thúc là dấu hiệu tin đăng giả." },
    dai: { label: "Cảnh báo", illus: "locked-with-key", warning: "Không bao giờ đọc mã xác thực cho bất kỳ ai", detail: "Mã đó là chìa khoá tài khoản của bạn." },
  },
  "OPEN-20": {
    thuong: { from: 3, kicker: "“Hôm nay giảm sâu, mai về giá gốc.”", question: "Đăng ký ngay, hay xin thêm một ngày để xem lại?" },
    dai: { from: 10, ticks: 3, unit: "phút", illus: "alarm-clock", kicker: "Ba giờ chiều, xe chở đơn gấp bị hỏng giữa đường.", question: "Khách cần hàng trước năm giờ. Việc đầu tiên bạn làm là gì?" },
  },
  "OPEN-21": {
    thuong: {
      notes: [
        { from: "Tin đăng phòng", icon: "house", text: "Phòng đẹp, giá mềm, xem ảnh nhé" },
        { from: "Chủ nhà", icon: "user-round", text: "Chiều nay có người đến xem rồi đấy" },
        { from: "Chủ nhà", icon: "user-round", text: "Em chuyển cọc ngay kẻo hết nhé!" },
      ],
      caption: "Bạn có chuyển không?",
    },
    dai: {
      time: "23:40",
      notes: [
        { from: "Số lạ", icon: "graduation-cap", text: "Chúc mừng bạn trúng học bổng, cần nộp phí để nhận" },
        { from: "Nhắc học phí", icon: "landmark", text: "Đóng học phí vào tài khoản cá nhân này nhé" },
        { from: "Bạn thân", icon: "user-round", text: "Cho mình vay tiền gấp, đừng kể với ai nhé" },
        { from: "Số lạ", icon: "shield-alert", text: "Đọc giúp mình mã xác thực vừa gửi về máy bạn" },
      ],
      illus: "exploding-head",
      caption: "Tin nào là lừa đảo?",
    },
  },
  "OPEN-22": {
    thuong: { kicker: "Chuyện của Duy", illus: "luggage", around: ["house", "spiral-calendar"], headline: "Xếp đồ đi trong một buổi chiều, mất toàn bộ tiền cọc" },
    dai: { kicker: "Khi trời tối", illus: "night-with-stars", around: ["house", "light-bulb"], headline: "Buổi tối mới lộ ra con đường: có ồn không, đường về có đèn không, mấy giờ đóng cổng" },
  },
  "OPEN-23": {
    thuong: { kicker: "Trước khi gật đầu", question: "Nên hỏi chủ nhà những gì?", items: ["house", "key", "receipt"] },
    dai: { kicker: "Ai cũng từng thắc mắc", question: "Giá thuê đã gồm những gì, điện nước tính thế nào, tiền cọc khi nào được trả lại?", items: ["house", "light-bulb", "money-bag", "receipt"] },
  },
  "OPEN-24": {
    thuong: { kicker: "Cái giá đắt", headline: "Mất trắng tiền cọc chỉ vì dọn đi rồi mới báo" },
    dai: {
      kicker: "Một đơn 90.000 đồng", amount: 12000, unit: "đồng", label: "phí sàn cho một đơn, chưa tính ship",
      source: "ví dụ trong bài “Tính giá vốn, phí sàn và lợi nhuận thật”", illus: "money-bag",
      headline: "Trừ giá vốn, phí sàn và ship, đơn đó chỉ còn lại 10.000 đồng",
    },
  },
};
