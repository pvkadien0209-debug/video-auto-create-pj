// Kịch bản video W lần 3 (#110) — "Cân nhắc ưu nhược điểm" · chuỗi "Giải quyết vấn đề và ra quyết định"
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-weigh-pros-and-cons--w01",
  hook: "HOOK-05",
  loop: { open: "s01", close: "s34" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (A)
  unit: { audience: "workplace-problem-solvers", slug: "how-to-weigh-pros-and-cons", door: "ky-nang", level: "B1",
    title: "Cân nhắc ưu nhược điểm thế nào để ra quyết định có cơ sở?", series: "Giải quyết vấn đề và ra quyết định" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Mỹ → Thảo; “nhiều khách đến muộn” (p8) do Bác Bình đóng một vị khách, câu thoại lấy đúng hai lý do của bài (đường kẹt, bãi xe nhỏ); người nói câu mẫu p12 và p23 (bài không nêu tên) → Thảo, sếp nghe báo cáo → Cô Hoa (chỉ nghe, không thoại). Vai mới (Bin, Bà Tư, Sam): bài không có trẻ con, bà cụ hay người nước ngoài (người bán p20 không rõ quốc tịch) nên không dùng. Chỗ đứng cố định: Thảo left, Bác Bình right, Cô Hoa farright. DLG-01 dựng từ 📌 p8 + cách làm ở p6–p7 (tối đa hai tiêu chí trọng số cao). Khung ⚖️ p3 dùng HOST-02 + REL-11; khung ❓ p18 dùng BEAT-04 hỏi, TEXT-04 giải. Câu đố đổi sang questions[14] (không tên; ví dụ chuyển dữ liệu của câu đố cũ đã dạy ở thân bài). Cảnh kết quay lại Thảo (khuôn HOOK-05). Phủ ý: 24/24. #112 nhịp hình (§9): tách hoặc đổi module các cảnh s07, s21, giữ lời đọc và ref.",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "p8",
      data: { set: "hotel", label: "Ngày hội nghị", actors: [{ id: "thao", side: "left", pose: "hold" }, { id: "binh", side: "right", enter: "walk", at: "l2" }] },
      lines: [
        L("l1", null, "Customer conference day. Many guests arrive late.", "Ngày hội nghị khách hàng. Nhiều khách đến muộn."),
        L("l2", "binh", "Sorry I'm late. The road was jammed, and the car park is tiny.", "Xin lỗi tôi đến muộn. Đường kẹt, bãi xe lại quá nhỏ.", { face: "worried", react: { thao: "worried" } }),
        L("l3", null, "Let's rewind a few weeks. How did Thảo choose this hotel?", "Tua lại vài tuần trước. Thảo đã chọn khách sạn này thế nào?"),
      ], beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Cân ưu nhược điểm có cơ sở", pose: "present", items: ["Cân dòng, đừng đếm dòng", "Chốt tiêu chí, trọng số trước", "Hỏi: hỏng thì lùi đường nào?"] },
      lines: [
        L("l1", "det", "How do you weigh pros and cons, and decide with good reasons?", "Cân ưu nhược điểm thế nào để quyết có cơ sở?"),
        L("l2", "det", "Weigh each line, don't count them.", "Cân từng dòng, đừng đếm dòng."),
        L("l3", "det", "Set criteria and weights first.", "Chốt tiêu chí và trọng số trước."),
        L("l4", "det", "Then ask about the worst case.", "Rồi hỏi về tình huống xấu nhất."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng của bài", chapters: [
        { label: "Liệt kê rồi vẫn phân vân", illus: "thinking-face" },
        { label: "Chọn tiêu chí", illus: "clipboard" },
        { label: "Chấm điểm gọn", illus: "memo" },
        { label: "Giá về sau", illus: "money-bag" },
        { label: "Kiểm trước khi chốt", illus: "warning" },
        { label: "Bảng hay cảm giác", illus: "balance-scale" } ] },
      lines: [
        L("l1", null, "Why lists aren't enough, choosing criteria, and scoring.", "Vì sao liệt kê chưa đủ, chọn tiêu chí, và chấm điểm."),
        L("l2", null, "Then later costs, final checks, and gut feeling.", "Rồi chi phí về sau, kiểm trước khi chốt, và cảm giác."),
      ] },

    // ---------- Chương 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Liệt kê rồi vẫn phân vân" },
      lines: [L("l1", "det", "Part one: you listed pros and cons. Why still unsure?", "Phần một: liệt kê rồi mà vẫn phân vân, vì sao?")] },
    { id: "s05", module: "TEXT-04", ref: "p1",
      data: { text: "Danh sách ưu nhược đưa cái lợi, cái hại bị che khuất lên giấy. Điểm yếu: dòng nào trông cũng quan trọng như nhau.",
        marks: ["quan trọng như nhau"], illus: "memo" },
      lines: [
        L("l1", null, "A pros and cons list beats gut feeling. It brings hidden gains and losses onto paper.", "Danh sách ưu nhược tốt hơn quyết theo cảm giác: nó đưa lợi, hại bị che khuất lên giấy."),
        L("l2", null, "Its weakness: every line looks equally important.", "Điểm yếu: dòng nào trông cũng quan trọng như nhau."),
      ] },
    { id: "s06", module: "HOST-02", ref: "p2,p3",
      data: { statement: "Phương án nào nhiều dòng ưu điểm hơn thì tốt hơn", truth: false,
        why: "Mỗi dòng nặng nhẹ khác nhau. Một nhược điểm lớn có thể lấn át năm ưu điểm nhỏ." },
      lines: [
        L("l1", "det", "The option with more pros is better. True or false?", "Phương án nhiều dòng ưu điểm hơn thì tốt hơn. Đúng hay sai?"),
        L("l2", "det", "False. Lines differ in weight. Count only, and you can be wrong, yet feel right.", "Sai. Mỗi dòng nặng nhẹ khác nhau. Chỉ đếm dòng, bạn có thể chọn sai mà vẫn thấy có lý.", { face: "stern" }),
      ] },
    { id: "s07", module: "REL-11", ref: "p2,p3",
      data: { left: { label: "Bên rẻ hơn: năm dòng ưu", illus: "package", items: ["Giá rẻ hơn", "Bán hàng nhiệt tình", "Bao bì đẹp"] },
        right: { label: "Một dòng nhược", illus: "delivery-truck", items: [{ text: "Hay giao trễ", weight: 4 }] },
        heavier: "right", verdict: "Đừng đếm dòng, hãy cân dòng." },
      lines: [
        L("l1", null, "Choosing a packaging supplier: the cheaper one has five pros, the other only three.", "Chọn nhà cung cấp bao bì: bên rẻ có năm dòng ưu, bên kia chỉ ba."),
        L("l2", null, "But the cheaper one often delivers late.", "Nhưng bên rẻ có một dòng nhược: hay giao trễ."),
      ] },
    { id: "s07b", module: "TEXT-04", ref: "p2,p3",
      data: { text: "Dây chuyền chạy liên tục, mỗi lần giao trễ có thể đứng chờ nửa ngày, thiệt hơn khoản rẻ.", marks: ["đứng chờ nửa ngày"], illus: "delivery-truck" },
      lines: [
        L("l3", null, "On a nonstop packing line, one late delivery can stop it half a day. That costs more than the savings.", "Dây chuyền chạy liên tục, mỗi lần trễ có thể đứng chờ nửa ngày, thiệt hơn khoản rẻ."),
      ] },
    { id: "s07c", module: "ASK-01", ref: "p2,p3",
      data: { q: "Vậy với xưởng mình, điều gì quan trọng nhất?", illus: "factory" },
      lines: [
        L("l4", null, "So first ask: for our factory, what matters most?", "Nên câu hỏi đầu tiên là: với xưởng mình, điều gì quan trọng nhất?"),
      ] },
    { id: "s08", module: "TEXT-01", ref: "p4",
      data: { text: "Đừng đếm dòng, hãy cân dòng.", illus: "balance-scale" },
      lines: [L("l1", null, "Don't count the lines. Weigh them.", "Đừng đếm dòng, hãy cân dòng.")] },

    // ---------- Chương 2 ----------
    { id: "s09", module: "HOST-03", data: { n: 2, of: 6, title: "Chọn tiêu chí cho đúng" },
      lines: [L("l1", "det", "Part two: choosing the right criteria.", "Phần hai: chọn tiêu chí thế nào cho đúng?")] },
    { id: "s10", module: "LIST-09", ref: "p5",
      data: { title: "Tiêu chí để đánh giá", illus: "clipboard", keywords: [
        { text: "Chi phí", illus: "money-bag" }, { text: "Thời gian", illus: "hourglass-not-done" },
        { text: "Rủi ro", illus: "warning" }, { text: "Chất lượng", illus: "gem-stone" },
        { text: "Ảnh hưởng tới khách", illus: "busts-in-silhouette" }, { text: "Ảnh hưởng tới đồng nghiệp", illus: "handshake" } ] },
      lines: [
        L("l1", null, "Criteria are what you judge by: cost, time, risk, quality,", "Tiêu chí là điều bạn dùng để đánh giá: chi phí, thời gian, rủi ro, chất lượng,"),
        L("l2", null, "and the effect on customers or colleagues. Four to six is usually enough.", "ảnh hưởng tới khách, tới đồng nghiệp. Thường bốn đến sáu tiêu chí là đủ."),
      ] },
    { id: "s11", module: "LIST-13", ref: "p6",
      data: { title: "Gán trọng số", items: [
        { title: "Cao, vừa hoặc thấp", detail: "Không cần công thức phức tạp", illus: "level-slider" },
        { title: "Tối đa hai tiêu chí cao", detail: "Cái gì cũng quan trọng thì không cái gì quan trọng", illus: "keycap-2" } ] },
      lines: [
        L("l1", null, "Give each criterion a simple weight: high, medium, or low.", "Gán cho mỗi tiêu chí trọng số đơn giản: cao, vừa hoặc thấp."),
        L("l2", null, "Rule: two high ones at most. If everything matters, nothing does.", "Quy tắc: tối đa hai tiêu chí cao. Cái gì cũng quan trọng thì không cái gì quan trọng."),
      ] },
    { id: "s12", module: "DLG-01", ref: "p7,p8",
      data: { set: "hotel", label: "Vài tuần trước", actors: [{ id: "thao", side: "left", pose: "stand" }],
        verdict: { ok: false, label: "Chọn trước, viết tiêu chí sau", why: "Đường đi và chỗ đỗ xe, điều khách cần nhất, không có trong danh sách." } },
      lines: [
        L("l1", null, "Thảo must choose a venue for the customer conference.", "Thảo được giao chọn địa điểm hội nghị khách hàng."),
        L("l2", "thao", "What a beautiful lobby! This is the one.", "Sảnh đẹp quá! Chọn chỗ này thôi.", { face: "happy", pose: "wave" }),
        L("l3", "thao", "Now my criteria: a luxury space, and great photos.", "Giờ viết tiêu chí: không gian sang, chụp ảnh đẹp.", { pose: "explain", stop: true }),
        L("l4", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l5", "det", "Like an option first, and you pick criteria that favour it.", "Đã thích rồi mới viết tiêu chí, bạn sẽ chỉ chọn tiêu chí có lợi cho nó."),
        L("l6", "det", "Let's rewind and try again.", "Tua lại, thử cách khác nhé.", { phase: "redo" }),
        L("l7", "thao", "Criteria first. What do our guests care about most?", "Tiêu chí trước đã. Khách quan tâm điều gì nhất?", { phase: "redo", face: "thinking", pose: "think" }),
        L("l8", "thao", "The road and the parking. Only these two get a high weight.", "Đường đi và chỗ đỗ xe. Chỉ hai tiêu chí này trọng số cao.", { phase: "redo", face: "happy", pose: "explain" }),
      ] },
    { id: "s13", module: "TEXT-01", ref: "p9",
      data: { text: "Chốt tiêu chí trước, nhìn phương án sau.", illus: "clipboard" },
      lines: [L("l1", null, "Fix your criteria first. Look at options after.", "Chốt tiêu chí trước, nhìn phương án sau.")] },

    // ---------- Chương 3 ----------
    { id: "s14", module: "HOST-03", data: { n: 3, of: 6, title: "Chấm điểm cho gọn" },
      lines: [L("l1", "det", "Part three: a simple way to score options.", "Phần ba: chấm điểm các phương án thế nào cho gọn?")] },
    { id: "s15", module: "LIST-06", ref: "p10",
      data: { title: "Bảng chấm trên một tờ giấy", steps: [
        { text: "Phương án thành cột trên đầu trang", illus: "card-index-dividers" },
        { text: "Tiêu chí thành hàng, ghi trọng số bên cạnh", illus: "level-slider" },
        { text: "Chấm từng ô: tốt, trung bình hay kém", illus: "check-mark-button" },
        { text: "Ưu tiên bên tốt ở tiêu chí trọng số cao", illus: "1st-place-medal" } ] },
      lines: [
        L("l1", null, "Options as columns across the top.", "Viết các phương án thành cột trên đầu trang."),
        L("l2", null, "Criteria as rows on the left, each with its weight.", "Tiêu chí thành hàng bên trái, ghi trọng số cạnh mỗi dòng."),
        L("l3", null, "Mark each box: good, average, or poor.", "Chấm từng ô: tốt, trung bình hay kém."),
        L("l4", null, "Look at the whole. Prefer the one that wins on high-weight criteria.", "Nhìn tổng thể, ưu tiên phương án tốt ở tiêu chí trọng số cao."),
      ] },
    { id: "s16", module: "TEXT-02", ref: "p11",
      data: { text: "Một tờ giấy và mười lăm phút thường đủ để thấy rõ đánh đổi.", keywords: ["mười lăm phút"], illus: "stopwatch" },
      lines: [
        L("l1", null, "No complex formula. A sheet of paper and fifteen minutes are usually enough.", "Không cần công thức phức tạp: một tờ giấy và mười lăm phút thường là đủ."),
        L("l2", null, "You'll see trade-offs that are easy to miss in your head.", "Bạn thấy rõ đánh đổi, thứ chỉ nghĩ trong đầu rất dễ bỏ qua."),
      ] },
    { id: "s17", module: "SCENE-01", ref: "p12",
      data: { set: "meeting", label: "Khi cả nhóm tranh cãi", actors: [{ id: "thao", side: "left" }] },
      lines: [
        L("l1", null, "Deciding with others? The table changes the argument.", "Phải bàn với người khác? Bảng này đổi hướng cuộc tranh luận."),
        L("l2", "thao", "Let's agree on what matters most first, then score the options.", "Mình thống nhất xem điều gì quan trọng nhất trước, rồi hãy chấm nhé.", { pose: "explain", face: "happy" }),
        L("l3", null, "People discuss criteria and weights, not fight about the answer.", "Mọi người bàn tiêu chí và trọng số, thay vì cãi nhau về kết luận."),
      ] },

    // ---------- Chương 4 ----------
    { id: "s18", module: "HOST-03", data: { n: 4, of: 6, title: "Ngoài cái giá trước mắt" },
      lines: [L("l1", "det", "Part four: beyond today's price.", "Phần bốn: ngoài cái giá trước mắt, còn phải tính gì?")] },
    { id: "s19", module: "LIST-07", ref: "p13",
      data: { title: "Nhìn mỗi phương án ở ba mốc", items: [
        { text: "Sau một tuần", illus: "spiral-calendar" },
        { text: "Sau một tháng", illus: "tear-off-calendar" },
        { text: "Sau một năm", illus: "hourglass-done" } ] },
      lines: [
        L("l1", null, "Look at each option after a week, a month, and a year.", "Nhìn mỗi phương án ở ba mốc: sau một tuần, một tháng, một năm."),
        L("l2", null, "Some choices feel good today, but leave big costs later.", "Có lựa chọn rất dễ chịu hôm nay nhưng để lại hậu quả lớn về sau."),
      ] },
    { id: "s20", module: "REL-12", ref: "p14",
      data: { center: { label: "Tổng chi phí trong vài năm", illus: "money-bag" }, spokes: [
        { label: "Giá mua", illus: "credit-card" }, { label: "Vật tư", illus: "package" },
        { label: "Sửa chữa", illus: "hammer-and-wrench" }, { label: "Bảo trì", illus: "gear" },
        { label: "Thời gian mất khi hỏng", illus: "hourglass-not-done" } ] },
      lines: [
        L("l1", null, "Buying something? Estimate the total cost over a few years.", "Với thứ phải mua, ước tính tổng chi phí trong vài năm."),
        L("l2", null, "The price, plus supplies, repairs, maintenance,", "Giá mua, cộng vật tư, sửa chữa, bảo trì,"),
        L("l3", null, "and the time people lose when it breaks.", "và thời gian người dùng mất khi nó hỏng."),
      ] },
    { id: "s21", module: "REL-02", ref: "p15",
      data: { chain: ["Cách A: máy in giá mua thấp nhất", "Hộp mực vừa đắt vừa hết nhanh", "Hay kẹt giấy, một người bỏ việc ra gỡ", "Cả năm lại tốn hơn"],
        illus: ["printer", "money-with-wings", "page-facing-up", "chart-increasing"] },
      lines: [
        L("l1", null, "Way A: the cheapest printer. Its ink is costly and runs out fast.", "Cách A: máy giá mua thấp nhất. Hộp mực vừa đắt vừa hết nhanh."),
        L("l2", null, "It jams often, and someone stops work to fix it. Over a year, it costs more.", "Máy hay kẹt giấy, mỗi lần một người bỏ việc ra gỡ. Cả năm lại tốn hơn."),
      ] },
    { id: "s21b", module: "LIST-05", ref: "p15",
      data: { title: "Cách B: trước khi chọn", items: ["Hỏi giá hộp mực", "Mỗi hộp in bao nhiêu trang", "Đọc đánh giá độ bền"], illus: "check-mark-button" },
      lines: [
        L("l3", null, "Way B: ask the ink price, pages per cartridge, and read reviews on reliability.", "Cách B: hỏi giá hộp mực, mỗi hộp in bao nhiêu trang, đọc đánh giá độ bền."),
      ] },
    { id: "s22", module: "TEXT-01", ref: "p16",
      data: { text: "Hỏi giá mua, nhớ hỏi cả giá dùng.", illus: "printer" },
      lines: [L("l1", null, "Ask the price to buy, and the price to use.", "Hỏi giá mua, nhớ hỏi cả giá dùng.")] },

    // ---------- Chương 5 ----------
    { id: "s23", module: "HOST-03", data: { n: 5, of: 6, title: "Kiểm trước khi chốt" },
      lines: [L("l1", "det", "Part five: one option is winning. Check before you decide.", "Phần năm: phương án đang dẫn đầu, kiểm gì trước khi chốt?")] },
    { id: "s24", module: "HOST-01", ref: "p17",
      data: { text: "Nếu mọi thứ đi chệch, có chịu nổi không? Đường lui là gì?", pose: "think" },
      lines: [
        L("l1", "det", "Ask about the worst case. If it goes wrong, can we handle it?", "Hỏi về tình huống xấu nhất: nếu đi chệch, mình có chịu nổi không?"),
        L("l2", "det", "What's our way back? Not to scare yourself, but to prepare a backup.", "Đường lui là gì? Không để doạ mình, mà để chuẩn bị dự phòng."),
      ] },
    { id: "s25", module: "BEAT-04", ref: "p18",
      data: { seconds: 5, prompt: "Chuyển toàn bộ dữ liệu khách sang hệ thống mới trong một cuối tuần: nhanh, rẻ nhất. Nên hỏi thêm câu gì?" },
      lines: [
        L("l1", null, "Moving all customer data to a new system in one weekend leads the table. Fastest and cheapest.", "Chuyển toàn bộ dữ liệu khách sang hệ thống mới trong một cuối tuần đang dẫn đầu: nhanh, rẻ nhất."),
        L("l2", null, "Before you decide, what else should you ask?", "Trước khi chốt, nên hỏi thêm câu gì?"),
      ] },
    { id: "s26", module: "TEXT-04", ref: "p18",
      data: { text: "“Nếu hỏng thì sao?” Giữ hệ thống cũ chạy song song vài ngày là có đường lui.", marks: ["chạy song song vài ngày"], illus: "counterclockwise-arrows-button" },
      lines: [
        L("l1", null, "What if it fails? Monday, the new system errors, the old one is off.", "“Nếu hỏng thì sao?” Sáng thứ Hai hệ thống mới lỗi, hệ thống cũ đã tắt."),
        L("l2", null, "The whole sales team waits all morning.", "Cả phòng bán hàng ngồi chờ suốt buổi sáng."),
        L("l3", null, "Keep the old system running a few days. Still fast, still cheap.", "Giữ hệ thống cũ chạy song song vài ngày là có đường lui, vẫn nhanh và rẻ."),
      ] },
    { id: "s27", module: "TEXT-01", ref: "p19",
      data: { text: "Chọn cách nào cũng hỏi: hỏng thì lùi đường nào?", illus: "door" },
      lines: [L("l1", null, "Whatever you choose, ask: if it fails, how do we step back?", "Chọn cách nào cũng hỏi: hỏng thì lùi đường nào?")] },
    { id: "s28", module: "LIST-07", ref: "p20",
      data: { title: "Lời của người bán", items: [
        { text: "Coi là một nguồn", illus: "speaking-head" },
        { text: "Kiểm thêm ít nhất hai nguồn khác", illus: "magnifying-glass-tilted-left" },
        { text: "Ví dụ: người đang dùng thật", illus: "busts-in-silhouette" } ] },
      lines: [
        L("l1", null, "Be careful with people who gain from your choice, like a seller.", "Cẩn thận với ý kiến của người có lợi ích riêng, như người bán."),
        L("l2", null, "Treat it as one source. Check at least two more, like real users.", "Coi đó là một nguồn, kiểm thêm ít nhất hai nguồn, như người đang dùng thật."),
      ] },

    // ---------- Chương 6 ----------
    { id: "s29", module: "HOST-03", data: { n: 6, of: 6, title: "Bảng hay cảm giác?" },
      lines: [L("l1", "det", "Part six: the table says one thing, your gut another.", "Phần sáu: bảng nói một đằng, cảm giác nói một nẻo.")] },
    { id: "s30", module: "RSN-05", ref: "p21",
      data: { if: "Kết quả trên giấy khiến bạn khó chịu", then: "Hỏi: mình đã bỏ sót tiêu chí nào?", illus: "anxious-face-with-sweat", thenIllus: "magnifying-glass-tilted-left" },
      lines: [
        L("l1", null, "Don't ignore the feeling, but don't let it replace the table.", "Đừng bỏ qua cảm giác, nhưng cũng đừng để nó thay bảng."),
        L("l2", null, "Uneasy with the result? Ask: which criterion did I miss?", "Kết quả khiến bạn khó chịu? Hỏi: mình đã bỏ sót tiêu chí nào?"),
        L("l3", null, "Often the feeling points to something important you haven't written.", "Thường cảm giác đang nhắc một điều quan trọng chưa viết ra."),
      ] },
    { id: "s31", module: "HOST-02", ref: "p22",
      data: { statement: "Cảm giác mạnh là đủ lý do để bỏ qua phân tích", truth: false,
        why: "Nếu cảm giác chỉ là thích cái mới hay sợ cái lạ, bảng giúp bạn nhận ra. Cảm giác là tín hiệu để xem lại." },
      lines: [
        L("l1", "det", "A strong feeling is reason enough to skip the analysis. True or false?", "Cảm giác mạnh là đủ lý do để bỏ qua phân tích. Đúng hay sai?"),
        L("l2", "det", "False. If it's just love of the new or fear of the unfamiliar, the table shows it.", "Sai. Nếu chỉ là thích cái mới hay sợ cái lạ, bảng giúp bạn nhận ra.", { face: "stern" }),
        L("l3", "det", "A feeling is a signal to look again.", "Cảm giác là tín hiệu để xem lại."),
      ] },
    { id: "s32", module: "SCENE-01", ref: "p23",
      data: { set: "office", label: "Báo sếp vài câu", actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "farright", pose: "hold" }] },
      lines: [
        L("l1", null, "A well-weighed decision can be explained in a few sentences.", "Quyết định cân nhắc tốt giải thích được trong vài câu."),
        L("l2", "thao", "I chose supplier B. Our top two criteria are on-time delivery and warranty, and B wins both.", "Em chọn bên B vì hai tiêu chí quan trọng nhất là giao đúng hẹn và bảo hành, B tốt hơn ở cả hai.", { pose: "explain" }),
        L("l3", "thao", "The risk is a slightly higher price. I got a discount for a yearly contract.", "Rủi ro là giá cao hơn một chút, em đã hỏi được mức giảm nếu ký theo năm.", { face: "happy", react: { hoa: "happy" } }),
      ] },
    { id: "s33", module: "LIST-05", ref: "p24",
      data: { title: "Đã cân kỹ khi", illus: "clipboard", items: [
        "Tiêu chí viết trước khi nhìn phương án", "Tối đa hai tiêu chí trọng số cao", "Đã tính chi phí về sau",
        "Đã hỏi tình huống xấu nhất và đường lui", "Đã kiểm ít nhất hai nguồn ngoài người bán" ] },
      lines: [
        L("l1", null, "Criteria before options. Two high weights at most.", "Tiêu chí viết trước. Tối đa hai tiêu chí trọng số cao."),
        L("l2", null, "Later costs counted. Worst case and way back known.", "Đã tính chi phí về sau, đã hỏi tình huống xấu nhất và đường lui."),
        L("l3", null, "And two sources besides the seller.", "Và đã kiểm ít nhất hai nguồn ngoài người bán."),
      ] },

    // ---------- Tổng kết, câu đố, kết ----------
    { id: "s34", module: "END-01", ref: "outro",
      data: { takeaway: "Cân, đừng đếm, và luôn biết đường lui.", marks: ["đường lui"], illus: "balance-scale" },
      lines: [
        L("l1", null, "Back to Thảo. With criteria written first, the road and parking would not be missing.", "Quay lại Thảo: viết tiêu chí trước, đường đi và chỗ đỗ xe đã không bị bỏ sót."),
        L("l2", null, "Your decision today: write four criteria, and mark the top two, before you look again.", "Với quyết định đang phân vân: viết bốn tiêu chí, đánh dấu hai cái quan trọng nhất trước."),
      ] },
    { id: "s35", module: "QUIZ-01", ref: "questions[14]",
      data: {
        q: "Two options score the same overall, which one should you prefer?",
        options: [
          "The one your colleague likes, so the team stays friendly and happy",
          "The one that does better on the criteria marked as highest importance",
          "The one with the longer description, because it was clearly thought through more",
        ],
        correct: 1, countdown: 5, illus: "balance-scale",
        why: "Tổng ngang nhau thì phương án tốt ở tiêu chí nặng nhất đáng chọn hơn; đó là lý do gán trọng số từ đầu.",
      },
      lines: [
        L("l1", null, "Two options score the same overall, which one should you prefer?", "Hai phương án có tổng điểm ngang nhau, nên ưu tiên phương án nào?"),
        L("l2", null, "The one that does better on the criteria marked as highest importance.", "Phương án tốt hơn ở các tiêu chí có trọng số cao nhất."),
        L("l3", null, "That's why you set weights from the start.", "Đó chính là lý do phải gán trọng số từ đầu."),
      ], beats: { after: 600 } },
    { id: "s36", module: "END-05",
      data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Cân từng đáp án nhé" },
      lines: [L("l1", "det", "Your turn. Weigh the answers to forty questions below.", "Đến lượt bạn. Cân đáp án của bốn mươi câu hỏi bên dưới.")] },
  ],
};
