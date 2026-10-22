// Dữ liệu mẫu cho modules/story2.jsx: mỗi mã có thuong và dai.
// Chữ lấy từ bài DetPro (u3/soan/units); tệp nguồn ghi ở từng mẫu. Chuyện lấy từ "📌 Tình huống thường gặp" gắn nhãn "Tình huống minh hoạ".
const TH = "Tình huống minh hoạ";

export const SAMPLES_STORY2 = {
  // everyday-information-readers/common-logical-fallacies (Tình huống) · english-interview-candidates/polite-questions-to-ask-an-interviewer-in-english (Trước – sau)
  "STORY-02": {
    thuong: {
      label: TH,
      left: { name: "Bác hàng xóm", illus: "old-man" },
      right: { name: "Vinh", illus: "man" },
      messages: [
        { who: "right", text: "Cháu đề xuất lắp thêm đèn ở bãi xe vì tối quá ạ." },
        { who: "left", text: "Mới dọn đến thì biết gì, ở đây mấy chục năm có sao đâu." },
        { who: "right", text: "Dạ cháu còn mới thật." },
        { who: "right", text: "Bác thấy lắp đèn có điểm nào chưa ổn để cháu tính lại ạ?" },
      ],
    },
    dai: {
      lang: "en",
      title: "Ba câu hỏi đóng, rồi hai câu hỏi mở",
      left: { name: "Ứng viên", illus: "woman-student" },
      right: { name: "Người phỏng vấn", illus: "man-office-worker" },
      messages: [
        { who: "left", text: "Do you have training?" },
        { who: "right", text: "Yes." },
        { who: "left", text: "Do you have a canteen?" },
        { who: "right", text: "Yes." },
        { who: "left", text: "Is the team big?" },
        { who: "right", text: "Not really." },
        { who: "left", text: "Could you tell me how new people are usually trained in this team?" },
        { who: "left", text: "Would you mind explaining the next steps?" },
      ],
    },
  },
  // busy-workers/how-to-estimate-time-and-meet-deadlines (Tình huống + Tin nhắn mẫu) · frontline-staff/phone-and-chat-customer-service-skills (Trước – sau)
  "STORY-03": {
    thuong: {
      label: TH,
      title: "Thấy sẽ trễ, báo ngay từ thứ Tư",
      illus: "woman-office-worker",
      around: ["spiral-calendar", "speech-balloon"],
      contact: { name: "Sếp", illus: "man-office-worker" },
      messages: [
        { from: "me", text: "Phần giới thiệu và bảng giá đã xong." },
        { from: "me", text: "Phần thông số phức tạp hơn em dự tính, em cần thêm ba ngày." },
        { from: "me", text: "Em đề xuất gửi phần đã xong vào thứ Sáu để anh dùng trước, phần còn lại gửi thứ Ba ạ." },
        { from: "them", time: "5 phút sau", text: "Đồng ý, em gửi trước phần đã xong nhé." },
      ],
    },
    dai: {
      title: "Trả lời bằng một câu mẫu, lặp lại ba lần",
      illus: "man-frowning",
      around: ["mobile-phone", "robot"],
      contact: { name: "Shop điện thoại", illus: "office-building" },
      messages: [
        { from: "me", text: "Shop ơi, cho mình hỏi về bảo hành điện thoại." },
        { from: "them", text: "Cảm ơn bạn đã liên hệ, shop sẽ phản hồi sớm nhất." },
        { from: "me", text: "Máy mình còn bảo hành không shop?" },
        { from: "them", text: "Cảm ơn bạn đã liên hệ, shop sẽ phản hồi sớm nhất." },
        { from: "me", text: "Shop ơi?" },
        { from: "them", text: "Cảm ơn bạn đã liên hệ, shop sẽ phản hồi sớm nhất." },
        { from: "me", text: "Có người thật ở đây không vậy?" },
      ],
    },
  },
  // english-interview-candidates/how-to-say-thank-you-after-an-interview-in-english
  "STORY-04": {
    thuong: {
      lang: "en",
      to: "Ms Linh",
      subject: "Thank you for the interview",
      body: "Hi Linh!!!\nThank you for the interview. I hope to get the job.\nWhen will I know the result?\nthx",
      marks: [
        { text: "Hi Linh!!!", note: "Quá thân mật: viết “Dear Ms Linh,”" },
        { text: "I hope to get the job.", note: "Câu chung chung, thiếu một chi tiết từ buổi phỏng vấn" },
        { text: "When will I know the result?", note: "Đừng hỏi kết quả trong thư cảm ơn" },
        { text: "thx", note: "Tránh viết tắt, kết bằng lời chào và tên" },
      ],
    },
    dai: {
      lang: "en",
      title: "Email mẫu khoảng 80 từ",
      to: "Ms Linh",
      subject: "Thank you for the interview, Marketing Executive position",
      body: "Dear Ms Linh,\nThank you for taking the time to meet with me yesterday to discuss the Marketing Executive position. I really enjoyed learning about your plans to reach younger customers. Our conversation made me even more excited about the role, and I believe my experience running campaigns for student audiences could help the team reach that goal. Please let me know if you need any further information. I look forward to hearing from you.\nBest regards,\nMinh Anh",
      marks: [
        { text: "Marketing Executive position", note: "Tiêu đề nêu rõ vị trí", tone: "good" },
        { text: "your plans to reach younger customers", note: "Chi tiết riêng của buổi phỏng vấn", tone: "good" },
        { text: "my experience running campaigns for student audiences", note: "Nhắc lại điểm phù hợp", tone: "good" },
        { text: "I look forward to hearing from you.", note: "Kết lịch sự, không hỏi kết quả", tone: "good" },
      ],
    },
  },
  // office-workers-own-time/a-day-within-a-day (Tình huống) · first-trip-abroad/book-flights-and-hotels (Tình huống)
  "STORY-05": {
    thuong: {
      label: TH,
      panels: [
        { scene: ["woman-office-worker", "house", "fork-and-knife-with-plate"], caption: "Sáu giờ rưỡi, chị Phượng về đến nhà, ăn tối xong.", say: "Hôm nay xong rồi." },
        { scene: ["mobile-phone", "couch-and-lamp", "television"], caption: "Chị nằm xem điện thoại, định chỉ mười phút." },
        { scene: ["mantelpiece-clock", "closed-book", "anxious-face-with-sweat"], caption: "Ngẩng lên đã gần mười một giờ. Cuốn sách vẫn nằm trên bàn." },
      ],
    },
    dai: {
      label: TH,
      title: "Vé rẻ bằng một nửa",
      panels: [
        { scene: ["woman", "airplane", "mobile-phone"], caption: "Diệp thấy quảng cáo vé khứ hồi rẻ bằng một nửa trên mạng xã hội. Người bán giục:", say: "Chỉ còn hai chỗ!" },
        { scene: ["money-with-wings", "admission-tickets", "mobile-phone"], caption: "Diệp chuyển khoản vào tài khoản cá nhân, nhận về một tấm ảnh có “mã đặt chỗ”." },
        { scene: ["woman-frowning", "magnifying-glass-tilted-left", "prohibited"], caption: "Tra mã trên trang của hãng thì không thấy gì, còn người bán đã chặn liên lạc." },
      ],
    },
  },
  // series "Sống trọn 24 giờ": office-workers-own-time/take-back-your-evenings (Tình huống) · office-workers-own-time/read-seriously-one-subject-at-a-time (Làm mẫu)
  "STORY-06": {
    thuong: {
      label: TH,
      title: "Buổi tối của Khánh Linh",
      entries: [
        { time: "18:45", text: "Về đến nhà, tự hứa học tiếng Anh một tiếng", illus: "house" },
        { time: "19:45", text: "Ăn cơm xong, mở điện thoại, rồi video ngắn, rồi một tập phim", illus: "mobile-phone" },
        { time: "22:30", text: "Cuốn sách vẫn nằm trong túi. “Mai bắt đầu.”", illus: "closed-book" },
      ],
    },
    dai: {
      label: "Sống trọn 24 giờ",
      title: "Tối thứ Ba của anh Vỹ",
      entries: [
        { time: "20:30", text: "Đọc một chương sách nhập môn, khoảng hai mươi trang", illus: "open-book" },
        { time: "21:15", text: "Gấp sách, viết ba câu tóm tắt vào sổ", illus: "notebook" },
        { time: "21:30", text: "Ghi một điều thấy lạ", illus: "light-bulb" },
        { time: "21:45", text: "Nối với hôm nay: so cách chia tỉnh ngày ấy với bây giờ", illus: "world-map" },
        { time: "21:55", text: "Viết câu hỏi cho tối thứ Năm, kẹp sổ vào sách", illus: "writing-hand" },
        { time: "22:00", text: "Tắt đèn bàn", illus: "crescent-moon" },
      ],
    },
  },
  // busy-workers/how-to-plan-your-workday (Thử nghĩ xem) · job-seekers/what-to-wear-to-a-job-interview (Thử nghĩ xem)
  "STORY-07": {
    thuong: {
      role: "Bạn làm kỹ thuật bảo trì",
      scene: "Lịch kín từ tám giờ sáng đến năm giờ chiều. Chín giờ, một máy ở xưởng báo lỗi, bạn mất hai tiếng sửa.",
      question: "Gạch hết kế hoạch và chạy theo việc phát sinh, hay làm gì khác?",
      illus: "man-mechanic",
      props: ["factory", "wrench", "spiral-calendar", "alarm-clock"],
    },
    dai: {
      role: "Bạn làm ba năm ở ngân hàng",
      scene: "Bạn quen mặc vest và thắt cà vạt mỗi ngày. Nay bạn phỏng vấn một công ty quảng cáo nhỏ, ảnh văn phòng trên mạng cho thấy mọi người mặc áo thun, quần jean.",
      question: "Mặc nguyên bộ vest như cũ có phải là lựa chọn an toàn nhất không?",
      illus: "man-office-worker",
      props: ["necktie", "t-shirt", "jeans", "bank"],
    },
  },
  // final-year-students/read-first-employment-contract
  "STORY-10": {
    thuong: {
      docTitle: "Hợp đồng lao động",
      disclaimer: "Tham khảo, không phải tư vấn pháp lý",
      lines: [
        "Tên công việc, nhiệm vụ chính",
        "Địa điểm làm việc: văn phòng công ty và các địa điểm khác theo phân công",
        "Mức lương, phụ cấp, ngày và cách trả lương",
        "Giờ làm, ngày nghỉ",
        "Bảo hiểm",
        "Thời hạn hợp đồng",
      ],
      marks: [
        { line: 1, note: "Hỏi: có thường đi công tác hay chuyển chi nhánh không?" },
        { line: 2, note: "So với thư mời: lương, phụ cấp có khớp không?" },
      ],
    },
    dai: {
      docTitle: "Hợp đồng lao động",
      disclaimer: "Tham khảo, không phải tư vấn pháp lý",
      lines: [
        "Tên công việc, nhiệm vụ chính",
        "Địa điểm làm việc",
        "Mức lương, phụ cấp, ngày và cách trả lương",
        "Giờ làm, ngày nghỉ, bảo hiểm",
        "Thời gian và lương thử việc",
        "Cam kết đào tạo",
        "Giữ bí mật thông tin của công ty",
        "Báo trước khi nghỉ việc",
      ],
      marks: [
        { line: 2, note: "Thư mời có phụ cấp ăn trưa, hợp đồng không ghi: xin bổ sung" },
        { line: 5, note: "Hỏi rõ số tiền, thời gian cam kết và cách tính khi nghỉ giữa chừng" },
        { line: 7, note: "Đọc kỹ ngay từ đầu, để sau này nghỉ đúng cách, không bị trừ tiền" },
      ],
    },
  },
};
