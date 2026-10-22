// Dữ liệu mẫu cho modules/num2.jsx: mỗi mã có thuong và dai
// Số liệu CHỈ lấy từ các bài có nguồn: units/healthy-eaters/*, units/new-runners/*, units/vietnamese-food-lovers/* (meta.sources),
// và chuỗi "Sống trọn 24 giờ" (units/office-workers-own-time/*, bài ghi nguồn Arnold Bennett, How to Live on 24 Hours a Day, 1908).
export const SAMPLES_NUM2 = {
  "NUM-02": {
    // start-healthy-eating-every-day: STEPS 2015 9,42 g; 2021 8,07 g; WHO dưới 5 g
    thuong: {
      title: "Người Việt ăn bao nhiêu muối mỗi ngày?", illus: "salt", unit: "g", highlight: 2,
      bars: [
        { label: "Người trưởng thành, năm 2015", value: 9.42 },
        { label: "Người trưởng thành, năm 2021", value: 8.07 },
        { label: "Mức WHO khuyến nghị", value: 5, prefix: "dưới" },
      ],
      source: "Điều tra STEPS 2015–2021; WHO",
    },
    // how-much-to-run-each-week (WHO 2020: 150–300 phút vừa / 75–150 phút mạnh; 3 buổi × 20–30 phút);
    // how-to-avoid-running-injuries (sức mạnh 2 buổi × 15–20 phút)
    dai: {
      title: "Bao nhiêu phút vận động mỗi tuần?", illus: "person-running", unit: "phút", highlight: 0,
      bars: [
        { label: "WHO: cường độ vừa, mức thấp", value: 150, illus: "person-walking" },
        { label: "WHO: cường độ vừa, mức cao", value: 300, illus: "person-walking" },
        { label: "WHO: cường độ mạnh, mức thấp", value: 75, illus: "person-running" },
        { label: "WHO: cường độ mạnh, mức cao", value: 150, illus: "person-running" },
        { label: "Chạy 3 buổi × 30 phút", value: 90, illus: "running-shoe" },
        { label: "Chạy 3 buổi × 20 phút", value: 60, illus: "running-shoe" },
        { label: "Tập sức mạnh 2 buổi × 20 phút", value: 40, illus: "flexed-biceps" },
        { label: "Tập sức mạnh 2 buổi × 15 phút", value: 30, illus: "flexed-biceps" },
      ],
      source: "WHO, Hướng dẫn vận động 2020; NHS Couch to 5K",
    },
  },
  "NUM-04": {
    // how-much-water-you-need-each-day (Mayo Clinic: thức ăn cung cấp khoảng 20% lượng nước)
    thuong: { n: 20, of: 100, illus: "droplet", label: "Khoảng 20% lượng nước mỗi ngày đến từ thức ăn", source: "Mayo Clinic, Water: how much should you drink every day?" },
    // protein-fat-and-carbohydrates-explained (WHO — Healthy diet: đường tự do dưới 10% năng lượng)
    dai: { n: 10, of: 100, prefix: "dưới", illus: "candy", kicker: "Đường tự do", label: "WHO khuyến nghị đường tự do dưới 10% tổng năng lượng mỗi ngày, tính cả đường trong nước ép và mật ong", source: "WHO, Healthy diet; hướng dẫn về đường (2015)" },
  },
  "NUM-05": {
    // what-is-a-balanced-meal (Harvard T.H. Chan — Healthy Eating Plate)
    thuong: { percent: 50, illus: "green-salad", label: "Nửa đĩa là rau và trái cây", source: "Harvard T.H. Chan, Healthy Eating Plate" },
    // what-is-a-balanced-meal (Harvard: một phần tư ngũ cốc nguyên hạt, một phần tư đạm)
    dai: { percent: 25, kicker: "Bữa ăn cân bằng", illus: "cooked-rice", label: "Một phần tư đĩa là ngũ cốc nguyên hạt, một phần tư còn lại là đạm như cá, thịt, đậu", source: "Harvard T.H. Chan, Healthy Eating Plate" },
  },
  "NUM-06": {
    // the-history-of-pho (nguồn: Andrea Nguyen, The evolution of pho)
    thuong: {
      title: "Bát phở đã đi một chặng đường dài", illus: "steaming-bowl", illusEach: "steaming-bowl",
      events: [
        { date: "Đầu thế kỷ 20", label: "Phở hình thành ở miền Bắc, quanh Nam Định và Hà Nội" },
        { date: "Sau 1954", label: "Theo người di cư vào Nam, thêm giá, húng quế, ngò gai" },
        { date: "Sau 1975", label: "Theo cộng đồng người Việt ra nhiều nước", illus: "globe-showing-asia-australia" },
      ],
      source: "Andrea Nguyen, The evolution of pho",
    },
    // the-history-of-pho, why-vietnamese-banh-mi-is-famous, why-vietnamese-food-is-known-worldwide
    dai: {
      title: "Món Việt ra thế giới",
      events: [
        { date: "Thời Pháp thuộc", label: "Ổ bánh baguette theo người Pháp vào Việt Nam", illus: "baguette-bread" },
        { date: "Thời Pháp thuộc", label: "Người Việt sang Pháp sinh sống, lập cộng đồng ở Paris", illus: "airplane" },
        { date: "Đầu thế kỷ 20", label: "Phở hình thành ở Nam Định và Hà Nội", illus: "steaming-bowl" },
        { date: "Sau 1954", label: "Phở vào Nam, thêm giá, húng quế, ngò gai", illus: "leafy-green" },
        { date: "Sau 1975", label: "Quán phở theo người Việt ra nhiều nước", illus: "globe-showing-asia-australia" },
        { date: "Sau 1975", label: "Tiệm bánh mì quen dần với người bản xứ", illus: "baguette-bread" },
        { date: "2011", label: "“Banh mi” vào Từ điển tiếng Anh Oxford", illus: "open-book" },
        { date: "2016", label: "Obama ăn bún chả ở Hà Nội, báo nhiều nước đăng", illus: "chopsticks" },
      ],
      source: "Andrea Nguyen; QĐND (2011); Vietcetera",
    },
  },
  "NUM-09": {
    // protein-fat-and-carbohydrates-explained (BDA — Fat: 1 g chất béo 9 kcal, đạm và bột đường 4 kcal)
    thuong: {
      title: "Năng lượng trong mỗi gam", unit: "kcal",
      items: [
        { label: "1 g chất béo", value: 9, illus: "peanuts" },
        { label: "1 g đạm hoặc bột đường", value: 4, illus: "egg" },
      ],
      note: "Gần gấp đôi", source: "British Dietetic Association, Fat: food fact sheet",
    },
    // start-healthy-eating-every-day (STEPS 2015 9,42 g; 2021 8,07 g; WHO dưới 5 g)
    dai: {
      title: "Muối mỗi ngày của người Việt so với mức WHO", unit: "g muối", highlight: 2,
      items: [
        { label: "Người trưởng thành, năm 2015", value: 9.42, illus: "salt" },
        { label: "Người trưởng thành, năm 2021", value: 8.07, illus: "salt" },
        { label: "Mức WHO khuyến nghị: dưới", value: 5, illus: "check-mark-button" },
      ],
      note: "Năm 2015 gần gấp đôi mức WHO", source: "Điều tra STEPS 2015–2021; WHO",
    },
  },
  "NUM-11": {
    // how-to-read-a-nutrition-label: 🧪 gói mì 1.800 mg natri × 2,5 ≈ 4,5 g muối; WHO dưới 5 g
    thuong: {
      title: "Một gói mì có bao nhiêu muối?", illus: "steaming-bowl",
      steps: [
        { expr: "Natri trên nhãn: 1.800 mg × 2,5", result: "≈ 4,5 g muối" },
        { expr: "So với mức WHO cho cả ngày", op: "→", result: "dưới 5 g" },
      ],
      source: "FDA, Nutrition Facts Label; WHO",
    },
    // live-on-24-hours-a-day-weekly-plan / take-back-your-evenings: Bennett, chương VI
    dai: {
      title: "Bảy tiếng rưỡi mỗi tuần từ đâu ra?", illus: "spiral-calendar",
      steps: [
        { expr: "6 buổi sáng × 30 phút", result: "3 giờ" },
        { expr: "3 buổi tối × 90 phút", result: "4 giờ 30 phút" },
        { expr: "3 giờ + 4 giờ 30 phút", result: "7 giờ 30 phút" },
        { expr: "Cả tuần: 7 ngày × 24 giờ", result: "168 giờ" },
        { expr: "Phần của mình mỗi tuần", op: "→", result: "7,5 / 168 giờ" },
      ],
      source: "Arnold Bennett, How to Live on 24 Hours a Day (1908), chương VI",
    },
  },
  "NUM-12": {
    // live-on-24-hours-a-day-weekly-plan: ❓ "làm 8, ngủ 7, đi xe và ăn uống 2… bảy tiếng còn lại đi đâu?"
    thuong: {
      title: "Bảy tiếng còn lại của ngày đi đâu?", highlight: 3,
      blocks: [
        { label: "Làm việc", hours: 8, illus: "briefcase" },
        { label: "Ngủ", hours: 7, illus: "bed" },
        { label: "Đi xe và ăn uống", hours: 2, illus: "bus" },
        { label: "Trôi qua không ai để ý", rest: true, illus: "mobile-phone" },
      ],
      source: "Ví dụ theo Arnold Bennett, How to Live on 24 Hours a Day (1908)",
    },
    // live-on-24-hours-a-day-weekly-plan: 🧪 chị Ngân (8 giờ – 5 giờ, xe buýt 30 phút, nửa tiếng sáng, 90 phút tối);
    // giấc ngủ 7 tiếng theo ví dụ ❓ cùng bài
    dai: {
      title: "Một ngày của chị Ngân, nhân viên hành chính", highlight: 3,
      blocks: [
        { label: "Ở công ty, 8 giờ đến 5 giờ chiều", hours: 9, illus: "office-building" },
        { label: "Ngủ (theo ví dụ trong bài)", hours: 7, illus: "bed" },
        { label: "Xe buýt hai chiều", hours: 1, illus: "bus" },
        { label: "90 phút buổi tối cho mình", hours: 1.5, illus: "open-book" },
        { label: "Nửa tiếng buổi sáng cho mình", hours: 0.5, illus: "hot-beverage" },
        { label: "Ăn, gia đình, việc nhà, nghỉ", rest: true, illus: "house" },
      ],
      source: "Arnold Bennett, How to Live on 24 Hours a Day (1908), chương VI",
    },
  },
};
