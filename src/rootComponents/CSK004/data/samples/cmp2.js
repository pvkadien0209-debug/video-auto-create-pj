// Dữ liệu mẫu cho modules/cmp2.jsx: mỗi mã có thuong và dai
// Chữ lấy từ các bài DetPro: office-workers-own-time (Sống trọn 24 giờ), online-sellers, busy-workers, healthy-eaters,
// new-runners, vietnamese-food-lovers, english-self-introducers. Số liệu chỉ lấy từ bài có nguồn (meta.sources).
export const SAMPLES_CMP2 = {
  "CMP-02": {
    // take-back-your-evenings: anh Toàn, cách A / cách B
    thuong: { title: "Buổi tối của anh Toàn", before: "Tám giờ mới ăn, chín rưỡi mở laptop thì đã buồn ngủ", after: "Ăn lúc bảy giờ cùng vợ con, từ tám rưỡi có hai tiếng liền", illusBefore: "sleepy-face", illusAfter: "open-book" },
    // online-sellers/handle-returns-and-refunds: ✍️ Trước – sau
    dai: { title: "Chính sách đổi trả của một shop váy nhỏ", labels: ["Bản trước", "Bản sau"], before: "Shop nhận đổi trả nếu không hợp ạ", after: "Shop nhận đổi trả trong 3 ngày kể từ khi nhận hàng, váy còn tem, chưa mặc, chưa giặt", illusBefore: "thinking-face", illusAfter: "dress" },
  },
  "CMP-03": {
    // a-day-within-a-day: 🔀 hai người cùng đi xe buýt
    thuong: {
      title: "Hai người cùng đi xe buýt bốn mươi phút", illus: "bus",
      a: { label: "Người thứ nhất", do: "Coi chuyến xe là phần “chưa tính”, lướt video cho hết đường", result: "Đến công ty vẫn thấy uể oải", illus: "mobile-phone" },
      b: { label: "Người thứ hai", do: "Nghe một bài podcast đã chọn từ tối", result: "Bước vào công ty khi ngày của mình đã bắt đầu", illus: "headphone" },
    },
    // busy-workers/what-to-do-when-two-bosses-give-urgent-tasks: 🔀 hai trưởng nhóm
    dai: {
      title: "Hai trưởng nhóm cùng giao việc gấp trong một sáng", illus: "alarm-clock",
      a: { do: "Nhắn riêng cho từng người “dạ em làm ngay ạ” để giữ hoà khí", result: "Chiều thứ Năm cả hai cùng hỏi kết quả, cả hai cùng bực", illus: "speech-balloon" },
      b: { do: "Gửi một tin nhắn chung, nhờ hai anh chị chốt việc nào làm trước", result: "Cùng thấy một bức tranh, hai người tự thương lượng được", illus: "busts-in-silhouette" },
    },
  },
  "CMP-04": {
    // healthy-eaters/how-much-water-you-need-each-day
    thuong: { statement: "Uống 8 cốc nước mỗi ngày là con số khoa học bắt buộc", truth: false, why: "Đó chỉ là một cách nhớ; nhu cầu thật còn tuỳ thức ăn, thời tiết, mức vận động", illus: "potable-water" },
    // new-runners/how-much-to-run-each-week: ⚖️ hiểu lầm 5 km
    dai: { kicker: "Người mới chạy: đúng hay sai?", statement: "Người mới chạy không cần chạy đủ 5 km mỗi buổi thì mới có tác dụng", truth: true, why: "Hai mươi đến ba mươi phút chạy xen đi bộ, ba buổi một tuần, đã đủ để tim phổi và đôi chân quen dần", illus: "running-shoe" },
  },
  "CMP-05": {
    // healthy-eaters/protein-fat-and-carbohydrates-explained (nguồn: BDA — Fat; WHO — Healthy diet)
    thuong: {
      title: "Ba nhóm chất cho năng lượng",
      columns: [{ label: "Đạm", illus: "egg" }, { label: "Bột đường", illus: "cooked-rice" }, { label: "Chất béo", illus: "peanuts" }],
      rows: [
        { label: "Mỗi gam cho", cells: ["khoảng 4 kcal", "khoảng 4 kcal", "khoảng 9 kcal"] },
        { label: "Nên ưu tiên", cells: ["cá, trứng, đậu phụ", "gạo lứt, khoai lang", "dầu thực vật, cá béo, hạt"] },
        { label: "Nên nhớ", cells: ["đủ là được, ăn dồn không thành cơ", "nhiên liệu chính cho não và cơ", "giúp hấp thu vitamin A, D, E, K"] },
      ],
    },
    // vietnamese-food-lovers/food-culture-of-vietnam-s-three-regions
    dai: {
      title: "Khẩu vị ba miền, nói gọn",
      columns: [{ label: "Miền Bắc", illus: "steaming-bowl" }, { label: "Miền Trung", illus: "hot-pepper" }, { label: "Miền Nam", illus: "leafy-green" }],
      rows: [
        { label: "Khí hậu", cells: ["bốn mùa rõ rệt", "khắc nghiệt, gần biển", "nóng quanh năm"] },
        { label: "Khẩu vị", cells: ["thanh, ít cay, ít ngọt", "đậm, cay và mặn hơn", "ngọt hơn, béo hơn"] },
        { label: "Hay dùng", cells: ["nước mắm, rau thơm", "mắm ruốc, mắm nêm", "nước dừa, cốt dừa"] },
        { label: "Món tiêu biểu", cells: ["phở Hà Nội, bún chả", "bún bò Huế, mì Quảng", "cơm tấm, bánh xèo"] },
        { label: "Bánh Tết", cells: ["bánh chưng vuông", "bánh tét hình trụ", "bánh tét hình trụ"] },
      ],
    },
  },
  "CMP-07": {
    // english-self-introducers/common-mistakes-when-introducing-yourself-in-english
    thuong: { wrong: "I have 3 years experiences", right: "I have three years of experience", diff: ["3", "experiences"], note: "“Experience” là kinh nghiệm làm việc: không đếm được, và cần “of”" },
    dai: { wrong: "I have been worked here for two years", right: "I've been working here for two years", diff: ["have", "worked"], note: "Đừng trộn hai thì vào một câu: nói “I have worked” hoặc “I've been working”" },
  },
  "CMP-08": {
    // healthy-eaters/how-much-water-you-need-each-day (nguồn: EFSA)
    thuong: {
      title: "Tổng lượng nước mỗi ngày cho người lớn", unit: "lít mỗi ngày",
      a: { label: "Nữ", value: 2, illus: "woman" }, b: { label: "Nam", value: 2.5, illus: "man" },
      note: "Đã tính cả nước từ thức ăn", noteIllus: "potable-water", source: "EFSA, giá trị tham chiếu về nước",
    },
    // healthy-eaters/start-healthy-eating-every-day (nguồn: STEPS 2015; WHO)
    dai: {
      title: "Muối mỗi ngày: người Việt so với mức WHO", unit: "gam muối mỗi ngày", highlight: "a",
      a: { label: "Người Việt trưởng thành, năm 2015", value: 9.42, illus: "salt" }, b: { label: "Mức WHO khuyến nghị: dưới", value: 5, illus: "check-mark-button" },
      note: "Gần gấp đôi mức WHO khuyến nghị", source: "Điều tra STEPS 2015, Bộ Y tế; WHO",
    },
  },
  "CMP-09": {
    // office-workers-own-time/a-day-within-a-day: ⚖️ hiểu lầm
    thuong: { myth: "Một ngày làm việc đã vắt hết sức, tối học thêm thì mai làm kém đi", fact: "Bennett cho rằng dùng trí óc buổi tối không làm giảm sức làm việc ban ngày", illusMyth: "tired-face", illusFact: "brain", source: "Arnold Bennett, How to Live on 24 Hours a Day (1908)" },
    // healthy-eaters/protein-fat-and-carbohydrates-explained: ⚖️ hiểu lầm
    dai: { label: "Hiểu lầm về tinh bột", myth: "Tinh bột là thủ phạm gây béo, nên bỏ hẳn cơm, bún là khoẻ", fact: "Tinh bột là nhiên liệu chính cho não và cơ; cân nặng phụ thuộc tổng năng lượng ăn vào và tiêu hao", illusMyth: "cooked-rice", illusFact: "flexed-biceps", source: "WHO, Healthy diet; NHS, Starchy foods" },
  },
  "CMP-10": {
    // office-workers-own-time/learn-without-loving-books
    thuong: {
      issue: "Hỏi “vì sao” về chính công việc mình làm", kicker: "Học không cần sách",
      views: [
        { role: "Kế toán", view: "Vì sao quy định thuế thay đổi?", illus: "ledger" },
        { role: "Bán hàng", view: "Vì sao khách mua nhiều vào tháng này?", illus: "shopping-cart" },
        { role: "Giao nhận", view: "Vì sao giá cước lúc lên lúc xuống?", illus: "delivery-truck" },
      ],
    },
    dai: {
      issue: "Mỗi người lần theo một chuỗi nhân – quả quanh mình", kicker: "Không mê sách, vẫn mê hiểu biết", illus: "eyes",
      views: [
        { role: "Kế toán", view: "Vì sao quy định thuế thay đổi, điều gì dẫn tới thay đổi ấy?", illus: "ledger" },
        { role: "Bán hàng", view: "Vì sao khách mua nhiều vào tháng này hơn tháng khác?", illus: "shopping-cart" },
        { role: "Làm kho", view: "Vì sao đơn hàng tháng nào cũng dồn vào tuần cuối?", illus: "package" },
        { role: "Thợ sửa xe", view: "Vì sao chiếc máy đang chạy lại kêu lạ?", illus: "man-mechanic" },
      ],
    },
  },
};
