// Dữ liệu mẫu cho modules/open2.jsx: mỗi mã có thuong và dai.
// Chữ lấy từ bài DetPro: how-much-water-you-need-each-day, is-breakfast-really-important (healthy-eaters, có meta.sources),
// how-big-is-jupiter, how-to-rent-a-safe-room, scams-targeting-new-students, meetings-with-foreign-partners,
// how-to-answer-salary-expectation-questions-in-english.
export const SAMPLES_OPEN2 = {
  "OPEN-03": {
    thuong: { value: "2,5", unit: "lít", context: "Tổng lượng nước mỗi ngày cho nam giới", source: "Nguồn: EFSA (tính cả nước từ thức ăn)", illus: "droplet" },
    dai: { prefix: "khoảng", value: "20", unit: "%", context: "Phần nước mỗi ngày bạn nhận được từ chính thức ăn", source: "Nguồn: Mayo Clinic — Water: How much should you drink every day?", illus: "steaming-bowl" },
  },
  "OPEN-04": {
    thuong: { question: "How many Earths could fit inside Jupiter?", options: ["About 11", "About 100", "More than 1,000"], illus: "ringed-planet" },
    dai: { question: "How much water does every adult need each day?",
      options: ["There is no single number, about two liters for women", "Exactly eight cups for everyone, no matter the weather", "As much as possible, because more is always better"] },
  },
  "OPEN-05": {
    thuong: { scene: "Bạn đang xem phòng trọ vào buổi sáng: sạch, yên tĩnh, vừa túi tiền", illus: "house-with-garden", around: ["sun", "money-bag", "sparkles"] },
    dai: { scene: "Bạn đang ở quê, thấy một phòng trọ đẹp, giá mềm, chủ nhà giục chuyển cọc ngay", illus: "mobile-phone", around: ["house", "money-with-wings", "alarm-clock"] },
  },
  "OPEN-06": {
    thuong: { quote: "Ăn đủ bữa sáng, trưa, tối, không bỏ bữa.", highlight: "không bỏ bữa", who: "Bộ Y tế", source: "10 lời khuyên dinh dưỡng hợp lý đến năm 2030 (QĐ 3594/QĐ-BYT)", label: "Lời khuyên chính thức", illus: "classical-building" },
    dai: { quote: "Trà, cà phê, sữa đều được tính vào lượng nước; hãy hạn chế đồ uống nhiều đường, uống thêm khi trời nóng.", highlight: "đều được tính", who: "NHS, Dịch vụ Y tế Quốc gia Anh", source: "NHS — Water, drinks and your health", label: "Lời khuyên chính thức", illus: "hospital" },
  },
  "OPEN-08": {
    thuong: { examples: [{ text: "Giá rẻ bất thường", illus: "money-with-wings" }, { text: "Ảnh đẹp như ảnh mẫu", illus: "framed-picture" }, { text: "Giục chuyển cọc ngay", illus: "alarm-clock" }],
      prompt: "Ba tin đăng này giống nhau ở đâu?" },
    dai: { examples: [{ text: "Hối thúc phải làm ngay", illus: "hourglass-not-done" }, { text: "Đòi tiền, phí, tiền cọc trước", illus: "money-bag" }, { text: "Dặn giữ bí mật, không kể với ai", illus: "shushing-face" }],
      prompt: "Điểm chung của mọi chiêu lừa là gì?" },
  },
  "OPEN-09": {
    thuong: { situation: "Tuấn tìm phòng vào tuần cuối trước nhập học", complication: "Chỉ còn phòng xa và ồn, lại ký vội", question: "Nên bắt đầu tìm phòng từ khi nào?",
      illus: ["calendar", "warning", "red-question-mark"] },
    dai: { situation: "Đối tác hỏi có giao hàng sớm hơn hai tuần không", complication: "Toàn nói ngay “Yes, no problem”, về nước mới biết không kịp", question: "Chưa chắc chắn thì nên trả lời thế nào cho khéo?",
      illus: ["handshake", "warning", "red-question-mark"] },
  },
  "OPEN-10": {
    thuong: { whatIs: "Chỉ cốc cà phê sữa đá thay cả bữa", couldBe: "Cà phê kèm ổ bánh mì trứng nhiều rau", illus: ["cup-with-straw", "sandwich"] },
    dai: { whatIs: "Mải việc từ sáng đến chiều, chỉ uống vài ngụm", couldBe: "Chai nước để sẵn trên bàn, uống đều cả ngày", illus: ["face-with-head-bandage", "potable-water"] },
  },
  "OPEN-12": {
    thuong: { n: 3, topic: "việc cần làm ngay ngày dọn vào phòng trọ" },
    dai: { n: 5, topic: "dấu hiệu chung của gần như mọi chiêu lừa nhắm vào tân sinh viên" },
  },
  "OPEN-13": {
    thuong: { sentence: "That is a good question, let me check with my team.", hiddenWord: "check", vi: "Câu dùng khi chưa có câu trả lời trong buổi họp" },
    dai: { sentence: "Before we finish, let me summarise the next steps to make sure we agree.", hiddenWord: "summarise", vi: "Câu dùng trước khi kết thúc buổi họp với đối tác nước ngoài" },
  },
  "OPEN-14": {
    thuong: { context: "Đưa tiền cọc, chủ nhà bảo “để mai anh viết giấy”", before: "Dạ vâng, mai anh viết sau cũng được ạ.", after: "Anh ghi giúp em giấy biên nhận luôn nhé." },
    dai: { lang: "en", context: "Người phỏng vấn hỏi mức lương bạn mong muốn", before: "Whatever you think is fair is fine with me.", after: "I'm looking for a range of X to Y gross per month." },
  },
  "OPEN-15": {
    thuong: { question: "Bảy giờ sáng, chỉ có vài phút. Bạn chọn gì?", a: "Bánh bông lan và trà sữa", b: "Sữa chua, chuối và nắm hạt", illus: ["cupcake", "banana"] },
    dai: { question: "Đi khảo sát công trình giữa trưa hè, bạn mang theo gì?", a: "Chỉ một cốc cà phê, đợi khát mới tính", b: "Chai nước, uống dần khi chưa khát", illus: ["hot-beverage", "potable-water"] },
  },
  "OPEN-16": {
    thuong: { fact: "Quy tắc “8 cốc nước mỗi ngày” không có cơ sở khoa học chặt chẽ.", source: "Nguồn: Valtin, Dartmouth Medical School", illus: "droplet" },
    dai: { fact: "Thử nghiệm ở người lớn cho thấy ăn sáng không chắc chắn giúp giảm cân.", source: "Nguồn: Sievert và cs., BMJ 2019 — tổng quan các thử nghiệm có đối chứng", illus: "baguette-bread" },
  },
};
