// Dữ liệu mẫu cho modules/rsn.jsx: mỗi mã có thuong và dai
// Chữ lấy từ bài: how-to-rent-a-safe-room, correlation-vs-causation, common-logical-fallacies, conditional-sentences-explained.
export const SAMPLES_RSN = {
  "RSN-01": {
    thuong: {
      claim: "Bắt đầu tìm phòng khoảng một tháng trước ngày nhập học",
      illus: "calendar",
      reasons: [
        { text: "Có thời gian xem và so sánh vài phòng", illus: "balance-scale" },
        { text: "Sát ngày, phòng tốt gần trường hết nhanh", illus: "house" },
        { text: "Người vội thường bỏ qua bước đọc hợp đồng", illus: "page-facing-up" },
      ],
    },
    dai: {
      claim: "Thấy hai thứ đi cùng nhau là lý do để tìm hiểu thêm, chưa phải câu trả lời cuối cùng",
      illus: "magnifying-glass-tilted-left",
      reasons: [
        { text: "Có thể do yếu tố thứ ba, như trời nóng", illus: "sun" },
        { text: "Có thể là nhân quả ngược chiều", illus: "counterclockwise-arrows-button" },
        { text: "Có thể chỉ là trùng hợp vài tháng", illus: "bar-chart" },
        { text: "Càng ít dữ liệu, khả năng trùng hợp càng lớn", illus: "abacus" },
      ],
      example: "Kem và đuối nước cùng tăng vào mùa hè, nhưng kem không gây đuối nước.",
      exampleIllus: "ice-cream",
    },
  },
  "RSN-02": {
    thuong: {
      examples: [
        { text: "Mùa hè, kem bán chạy và đuối nước cùng tăng: do trời nóng", illus: "ice-cream" },
        { text: "Người uống nhiều cà phê làm nhiều giờ: có thể ngược chiều", illus: "hot-beverage" },
        { text: "Hai con số tình cờ cùng tăng vài tháng: trùng hợp", illus: "bar-chart" },
      ],
      conclusion: "Hai thứ đi cùng nhau chưa chắc cái này gây ra cái kia",
    },
    dai: {
      kicker: "Ba câu chuyện này giống nhau ở đâu?",
      examples: [
        { text: "Anh Khang uống nước thảo mộc rồi khỏi cảm, nhưng lần không uống cũng chừng ấy ngày", illus: "face-with-thermometer" },
        { text: "Con hàng xóm lên điểm, nhưng cùng lúc được đổi chỗ, được cô kèm thêm", illus: "books" },
        { text: "Tiệm giao nhầm đơn tuần có nhân viên mới, nhưng lỗi là do nhãn in mờ", illus: "package" },
      ],
      conclusion: "Xảy ra trước hay có mặt lúc đó chưa chắc là nguyên nhân",
      illus: "detective",
    },
  },
  "RSN-03": {
    thuong: {
      rule: "Uống cái này là hết cảm",
      ruleIllus: "teacup-without-handle",
      counter: "Lần trước không uống, anh Khang cũng khỏi sau chừng ấy ngày",
      lesson: "Khỏi sau khi uống chưa chắc là khỏi vì uống.",
    },
    dai: {
      rule: "Vài chục người cùng bình luận “lừa đảo” thì chắc tiệm này lừa đảo thật",
      ruleLabel: "AI CŨNG NÓI VẬY",
      ruleIllus: "speech-balloon",
      counter: "Hôm sau chủ tiệm đăng lại tin nhắn và hoá đơn: đó chỉ là một khách nhận nhầm đơn",
      counterIllus: "receipt",
      lesson: "Đông người nói chưa chắc là đúng.",
    },
  },
  "RSN-04": {
    thuong: {
      question: "Tiệm anh Phát giao nhầm hai đơn trong tuần, vì sao?",
      illus: "package",
      options: [
        { text: "Cậu nhân viên mới làm ẩu", illus: "man-office-worker" },
        { text: "Chỉ là trùng hợp", illus: "game-die" },
        { text: "Nhãn in mờ từ cuộn giấy hỏng", illus: "printer" },
      ],
      answer: 2,
      reasons: [
        "Tuần trước, khi cậu chưa vào làm, cũng có đơn nhầm",
        "Đơn nhầm lặp lại cả hai tuần",
        "Thay cuộn giấy, đơn nhầm hết hẳn",
      ],
    },
    dai: {
      question: "Ai đó nói ý bạn sai vì bạn còn trẻ: đây là kiểu ngụy biện nào?",
      options: ["Dựa vào số đông", "Lựa chọn giả", "Công kích cá nhân", "Người rơm", "Dốc trượt"],
      answer: 2,
      reasons: [
        "Không ai viện dẫn chuyện nhiều người tin",
        "Không có cảnh bị ép chọn một trong hai",
        "Tuổi không cho biết ý tưởng đúng hay sai",
        "Ý của bạn không bị bóp méo",
        "Không doạ một bước nhỏ dẫn tới thảm hoạ",
      ],
    },
  },
  "RSN-05": {
    thuong: {
      if: "Muốn trả phòng sớm, bạn báo trước đúng hạn bằng tin nhắn",
      then: "Bạn có cơ sở đòi lại tiền cọc",
      else: "Chủ nhà có căn cứ giữ cọc, như Duy",
      illus: "mobile-phone",
      thenIllus: "money-bag",
    },
    dai: {
      quote: "Unless we receive payment by Friday, the order will be cancelled.",
      if: "Thanh toán trước thứ Sáu",
      then: "Đơn hàng được giữ",
      else: "Đơn hàng bị huỷ. Cần thêm thời gian thì liên hệ ngay",
      illus: "calendar",
      thenIllus: "package",
    },
  },
  "RSN-08": {
    thuong: {
      beats: [
        { text: "Anh Khang bị cảm, uống nước thảo mộc bạn cho, năm ngày sau khỏi", illus: "face-with-thermometer" },
        { text: "Anh nhắn vào nhóm công ty: “Uống cái này là hết cảm”", link: "therefore", illus: "mobile-phone" },
        { text: "Đồng nghiệp hỏi: “Lần trước anh không uống thì bao lâu khỏi?”", link: "but", illus: "thinking-face" },
        { text: "Anh nghĩ lại: cũng chừng ấy ngày", link: "therefore", illus: "light-bulb" },
      ],
    },
    dai: {
      beats: [
        { text: "Tuần có nhân viên mới, tiệm anh Phát giao nhầm hai đơn", illus: "package" },
        { text: "Anh Phát định cho cậu nghỉ", link: "therefore", illus: "man-office-worker" },
        { text: "Xem lại sổ, tuần trước đó cũng có đơn nhầm", link: "but", illus: "memo" },
        { text: "Anh tìm ra nhãn in mờ từ cuộn giấy in hỏng", link: "therefore", illus: "printer" },
        { text: "Anh thay cuộn giấy, đơn nhầm hết hẳn", link: "therefore", illus: "check-mark-button" },
        { text: "Cậu nhân viên vẫn làm tiếp", link: "therefore", illus: "handshake" },
      ],
    },
  },
};
