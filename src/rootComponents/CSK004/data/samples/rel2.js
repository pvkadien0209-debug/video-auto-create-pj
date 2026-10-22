// Dữ liệu mẫu cho modules/rel2.jsx: mỗi mã có thuong và dai.
// Chữ lấy từ bài DetPro: busy-workers (trì hoãn, ưu tiên việc), new-runners (động lực, khối lượng chạy),
// workplace-problem-solvers (5 Why, nghĩ thêm phương án, cân nhắc ưu nhược), healthy-eaters (bữa ăn cân bằng, đạm – béo – tinh bột),
// students-preparing-early (chọn nghề), final-year-students (so hai lời mời), job-seekers (nguồn tin về công ty).
export const SAMPLES_REL2 = {
  "REL-03": {
    thuong: {
      center: "Vòng trì hoãn", tone: "bad",
      nodes: [
        { label: "Né một việc khó chịu", illus: "see-no-evil-monkey" },
        { label: "Tự trách cả buổi tối", illus: "downcast-face-with-sweat" },
        { label: "Việc càng nặng nề", illus: "weary-face" },
        { label: "Hôm sau càng muốn né", illus: "alarm-clock" },
      ],
    },
    dai: {
      title: "Biến buổi chạy thành thói quen",
      center: "Vòng thói quen", centerIllus: "running-shoe",
      nodes: [
        { label: "Ghi lịch chạy như một cuộc hẹn", illus: "spiral-calendar" },
        { label: "Để sẵn giày, quần áo từ tối", illus: "running-shoe" },
        { label: "Hôm lười chỉ chạy mười phút", illus: "person-running" },
        { label: "Ghi một điều mình thích", illus: "memo" },
        { label: "Tuần nào cũng thấy làm được", illus: "glowing-star" },
      ],
    },
  },
  "REL-04": {
    thuong: {
      problem: "Chạy vài tuần đã muốn bỏ",
      bones: [
        { group: "Sức", illus: "tired-face", causes: ["Chạy quá sức", "Buổi nào cũng mệt"] },
        { group: "Mục tiêu", illus: "mountain", causes: ["Mục tiêu quá xa", "Mãi chưa thấy tới đâu"] },
        { group: "Lịch", illus: "spiral-calendar", causes: ["Hôm nào rảnh mới chạy"] },
        { group: "Bạn chạy", illus: "bust-in-silhouette", causes: ["Chạy một mình mãi", "Thấy đơn điệu"] },
      ],
    },
    dai: {
      problem: "Việc quan trọng cứ bị hoãn",
      bones: [
        { group: "Mơ hồ", illus: "thinking-face", causes: ["Không rõ bước đầu tiên", "Chưa hỏi người giao việc"] },
        { group: "Quá lớn", illus: "mountain", causes: ["Nghĩ cả khối là thấy nặng", "Chưa chia thành bước nhỏ"] },
        { group: "Sợ sai", illus: "anxious-face-with-sweat", causes: ["Lo kết quả không đủ tốt", "Sợ bị chê"] },
        { group: "Chuẩn bị mãi", illus: "file-folder", causes: ["Dọn bàn, sắp thư mục", "Đọc thêm mẫu chưa thấy đủ"] },
        { group: "Bị kéo đi", illus: "mobile-phone", causes: ["Tay với lấy điện thoại", "Chưa đóng mạng xã hội"] },
        { group: "Chờ hứng", illus: "sleepy-face", causes: ["Chờ tâm trạng tốt", "Chưa hẹn giờ cố định"] },
      ],
    },
  },
  "REL-05": {
    thuong: {
      title: "Ba loại chất béo",
      root: "Chất béo", rootIllus: "olive",
      children: [
        { label: "Không bão hoà", sub: "Nên ưu tiên", tone: "ok", illus: "fish", children: ["Dầu ô liu, dầu lạc", "Cá béo", "Các loại hạt"] },
        { label: "Bão hoà", sub: "Nên hạn chế", tone: "warn", illus: "cut-of-meat", children: ["Mỡ động vật", "Bơ sữa", "Nước cốt dừa"] },
        { label: "Chuyển hoá", sub: "Nên tránh", tone: "bad", illus: "warning", children: ["Bơ thực vật cứng", "Một số bánh quy", "Đồ chiên công nghiệp"] },
      ],
    },
    dai: {
      title: "Bí ý tưởng? Đi qua bốn hướng",
      root: "Bốn hướng nghĩ thêm phương án", rootIllus: "light-bulb",
      children: [
        { label: "Bớt đi", icon: "circle-minus", children: ["Bỏ được bước nào?", "Ngừng việc gì?", "Ngừng in báo cáo không ai đọc"] },
        { label: "Thêm vào", icon: "circle-plus", children: ["Thêm người", "Thêm công cụ", "Thêm thông tin"] },
        { label: "Đổi cách", icon: "shuffle", children: ["Đổi thứ tự", "Đổi giờ, đổi kênh", "Đổi người làm"] },
        { label: "Hỏi người trong cuộc", icon: "message-circle", children: ["Hỏi khách", "Hỏi đồng nghiệp tuyến đầu", "Hỏi người mới vào"] },
      ],
    },
  },
  "REL-06": {
    thuong: {
      a: { label: "Đạm động vật", illus: "fish", items: ["Cá, thịt, trứng", "Sữa, hải sản"] },
      b: { label: "Đạm thực vật", illus: "peanuts", items: ["Đậu phụ, đậu nành", "Lạc, vừng, các loại hạt"] },
      both: { label: "Cả hai", items: ["Đều cho chất đạm", "Lượng vừa đủ là được"] },
    },
    dai: {
      title: "Chữa cháy và tìm gốc",
      a: { label: "Chữa cháy", illus: "fire-extinguisher", items: ["Thay cầu chì, xin lỗi khách", "Chặn thiệt hại hôm nay", "Giúp máy chạy tiếp"] },
      b: { label: "Tìm gốc", illus: "magnifying-glass-tilted-left", items: ["Hỏi vì sao nó cứ lặp lại", "Dành thời gian vài ngày tới", "Để sự cố khó quay lại"] },
      both: { label: "Cách làm tốt", items: ["Làm cả hai", "Chặn trước, tìm gốc sau", "Chữa cháy không sai"] },
    },
  },
  "REL-07": {
    thuong: {
      a: { label: "Điều bạn thích", illus: "red-heart" },
      b: { label: "Điều bạn làm tốt", illus: "flexed-biceps" },
      c: { label: "Điều bạn coi trọng", illus: "gem-stone" },
      center: "Hướng phù hợp",
    },
    dai: {
      title: "Hướng nghề nằm ở chỗ giao nhau",
      a: { label: "Điều bạn thích", sub: "Việc khiến mình quên thời gian", illus: "red-heart" },
      b: { label: "Điều bạn làm tốt", sub: "Việc người khác hay nhờ bạn", illus: "flexed-biceps" },
      c: { label: "Điều bạn coi trọng", sub: "Thu nhập, sự ổn định, thời gian cho gia đình", illus: "gem-stone" },
      center: "Hướng phù hợp với bạn",
    },
  },
  "REL-08": {
    thuong: {
      xAxis: "Gấp", yAxis: "Quan trọng",
      quadrants: [
        { title: "Quan trọng, chưa gấp", text: "Ghi vào lịch", illus: "spiral-calendar", tone: "soft" },
        { title: "Gấp và quan trọng", text: "Làm ngay", illus: "fire", tone: "marker" },
        { title: "Không gấp, không quan trọng", text: "Gạch đi", illus: "wastebasket", tone: "paper" },
        { title: "Gấp, ít quan trọng", text: "Làm gọn hoặc nhờ người khác", illus: "handshake", tone: "surface" },
      ],
      dots: [{ label: "Học kỹ năng mới", q: 0 }, { label: "Tin nhắn hỏi file", q: 3 }],
    },
    dai: {
      title: "Việc nào cũng gấp thì xếp thế nào?",
      xAxis: "Mức gấp", yAxis: "Mức quan trọng",
      quadrants: [
        { title: "Quan trọng, chưa gấp", text: "Ghi vào lịch với ngày giờ cụ thể", illus: "spiral-calendar", tone: "soft" },
        { title: "Gấp và quan trọng", text: "Làm ngay, trước các cuộc gọi khác", illus: "fire", tone: "marker" },
        { title: "Không gấp, không quan trọng", text: "Gạch đi", illus: "wastebasket", tone: "paper" },
        { title: "Gấp, ít quan trọng", text: "Làm gọn, gộp lại hoặc nhờ người khác", illus: "handshake", tone: "surface" },
      ],
      dots: [{ label: "Quy trình đón người mới", q: 0 }, { label: "Bản kiểm kê sếp chờ", q: 1 }, { label: "Tin nhắn hỏi file", q: 3 }],
    },
  },
  "REL-09": {
    thuong: {
      title: "Từ một ý quen đến ba cách nhỏ",
      stages: [
        { label: "Đi qua bốn hướng nghĩ", value: "9 cách", illus: "light-bulb" },
        { label: "Giữ những cách làm được", value: "3 cách", illus: "check-mark-button" },
        { label: "Tiết kiệm gần bằng khoản thưởng", illus: "money-bag" },
      ],
    },
    dai: {
      title: "Họp động não: gom ý trước, chấm điểm sau",
      stages: [
        { label: "Mỗi người viết ý riêng, chưa ai nói", illus: "memo" },
        { label: "Lần lượt đọc ý, không ai bình luận", illus: "speaking-head" },
        { label: "Gom các ý giống nhau thành nhóm", illus: "card-file-box" },
        { label: "Bỏ những ý chắc chắn không làm được", illus: "cross-mark" },
        { label: "Giữ ba bốn phương án để cân nhắc kỹ", value: "3–4", illus: "bullseye" },
      ],
    },
  },
  "REL-10": {
    thuong: {
      title: "Ba tháng đầu chạy bộ",
      levels: [
        { label: "Tháng 1: chạy xen đi bộ", sub: "Ba buổi, mỗi buổi 20–30 phút", illus: "person-walking" },
        { label: "Tháng 2: đoạn chạy dài dần", sub: "Vẫn ba buổi, đi bộ ngắn lại", illus: "person-running" },
        { label: "Tháng 3: chạy liền 20–30 phút", sub: "Ở tốc độ chậm", illus: "trophy" },
      ],
    },
    dai: {
      title: "5 Why: từ thứ ai cũng thấy xuống gốc",
      build: "down",
      levels: [
        { label: "Lịch bảo dưỡng không được giao lại", sub: "Gốc nằm ở khâu bàn giao", illus: "clipboard" },
        { label: "Mấy tháng không ai tra dầu", sub: "Vì sao khô dầu?", illus: "spiral-calendar" },
        { label: "Ổ trục khô dầu", sub: "Vì sao động cơ quá tải?", illus: "droplet" },
        { label: "Động cơ quá tải", sub: "Vì sao cầu chì cháy?", illus: "gear" },
        { label: "Cầu chì cháy", sub: "Vì sao máy dừng?", illus: "fire" },
      ],
    },
  },
  "REL-11": {
    thuong: {
      left: { label: "Bên rẻ hơn", illus: "package", items: ["Bán hàng nhiệt tình", "Bao bì đẹp", "Giá rẻ hơn"] },
      right: { label: "Một dòng nhược", illus: "delivery-truck", items: [{ text: "Hay giao trễ", weight: 4 }] },
      heavier: "right",
      verdict: "Đừng đếm dòng, hãy cân dòng.",
    },
    dai: {
      title: "So hai lời mời làm việc",
      left: { label: "Thư mời 15 triệu", illus: "envelope", items: ["Chỉ 8 triệu là cố định", "Phần thưởng doanh số khó đạt", "Có thể là lương gộp"] },
      right: { label: "Thư mời 12 triệu", illus: "money-bag", items: [{ text: "Cố định hoàn toàn", weight: 4 }] },
      heavier: "right",
      verdict: "So tiền về tay, đừng so con số trên giấy.",
    },
  },
  "REL-12": {
    thuong: {
      center: { label: "Bữa ăn cân bằng", illus: "bento-box" },
      spokes: [
        { label: "Rau và trái cây: khoảng nửa đĩa", illus: "leafy-green" },
        { label: "Tinh bột: cơm, bún, khoai", illus: "cooked-rice" },
        { label: "Đạm: cá, thịt, trứng, đậu phụ", illus: "egg" },
        { label: "Chất béo tốt, vừa phải", illus: "avocado" },
        { label: "Nước lọc đi kèm", illus: "droplet" },
      ],
    },
    dai: {
      title: "Tìm hiểu công ty từ nguồn nào?",
      center: { label: "Thông tin về công ty", illus: "office-building" },
      spokes: [
        { label: "Cổng đăng ký doanh nghiệp", illus: "classical-building" },
        { label: "Website chính thức của công ty", illus: "globe-with-meridians" },
        { label: "Báo cáo của công ty niêm yết", illus: "bar-chart" },
        { label: "Báo chí: xem ngày, xem nhãn", illus: "newspaper" },
        { label: "Đánh giá của nhân viên", illus: "speech-balloon" },
        { label: "Người đang làm ở đó", illus: "bust-in-silhouette" },
      ],
    },
  },
};
