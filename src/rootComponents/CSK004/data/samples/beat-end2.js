// Dữ liệu mẫu cho modules/beat-end2.jsx: mỗi mã có thuong và dai
// Chữ lấy từ các bài: how-to-rent-a-safe-room, how-to-make-quick-decisions-under-pressure,
// what-to-do-when-pressured-to-decide-immediately, scams-targeting-new-students; tên bài tiếp lấy từ meta của chuỗi.
export const SAMPLES_BEAT_END2 = {
  "BEAT-03": {
    thuong: { question: "Còn điều gì bạn chưa biết?" },
    dai: { question: "Việc đầu tiên là gọi khắp nơi tìm xe tải thay, đúng không?" },
  },
  "BEAT-04": {
    thuong: { seconds: 5, prompt: "Bạn đến xem phòng vào buổi sáng, thấy sạch, yên tĩnh, vừa túi tiền. Còn điều gì bạn chưa biết?" },
    dai: { seconds: 7, prompt: "Ba giờ chiều, xe chở đơn gấp cho một khách lớn bị hỏng giữa đường, trong khi khách cần hàng trước năm giờ. Việc đầu tiên là gì?" },
  },
  "END-01": {
    thuong: { takeaway: "Tiền đưa ra, giấy tờ cầm về.", marks: ["giấy tờ"], illus: "receipt" },
    dai: { takeaway: "Ưu đãi mất thì tiếc một lúc, chọn sai thì tiếc cả khoá.", marks: ["chọn sai"], illus: "light-bulb" },
  },
  "END-03": {
    thuong: { title: "Ngày trả phòng", items: ["Dọn sạch phòng", "Trả đủ chìa khoá", "Thanh toán điện nước", "Cùng chủ nhà so phòng với ảnh ngày dọn vào"], illus: "clipboard" },
    dai: {
      title: "Lỡ bị lừa rồi thì làm ngay",
      items: [
        "Gọi số hỗ trợ chính thức của ngân hàng để khoá giao dịch",
        "Chụp lại tin nhắn, số điện thoại, số tài khoản đã chuyển",
        "Giữ biên lai chuyển tiền",
        "Đến cơ quan công an nơi gần nhất để trình báo",
        "Báo cho trường nếu kẻ lừa giả danh trường",
      ],
    },
  },
  "END-07": {
    thuong: { series: "Chuẩn bị vào đại học xa nhà", nextTitle: "Quản lý tiền bố mẹ gửi hằng tháng khi học xa nhà", n: 3, of: 10, illus: "money-bag" },
    dai: { series: "Chuẩn bị vào đại học xa nhà", nextTitle: "Đi lại an toàn ở thành phố mới: xe buýt, xe công nghệ, về khuya", n: 10, of: 10, illus: "bus" },
  },
};
