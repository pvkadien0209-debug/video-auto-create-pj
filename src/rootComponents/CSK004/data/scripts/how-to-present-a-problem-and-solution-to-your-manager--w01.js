// Kịch bản video W lần 3 (#110) — "Trình bày vấn đề và giải pháp với sếp" · chuỗi "Giải quyết vấn đề và ra quyết định"
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-present-a-problem-and-solution-to-your-manager--w01",
  hook: "HOOK-09",
  loop: { open: "s01", close: "s30" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "workplace-problem-solvers", slug: "how-to-present-a-problem-and-solution-to-your-manager", door: "ky-nang", level: "B1",
    title: "Trình bày vấn đề và giải pháp với sếp thế nào cho rõ ràng?", series: "Giải quyết vấn đề và ra quyết định" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Thắng → Dũng; sếp → Cô Hoa (các câu “Anh ơi…”, “em cần anh duyệt” và câu mẫu p20 đổi “anh” → “chị”); Tuệ → Thảo; người gửi tin nhắn mẫu (p20), bài không nêu tên → Dũng. Vai mới (Bin, Bà Tư, Sam): bài không có trẻ con, bà cụ hay người nước ngoài nên không dùng. Chỗ đứng cố định: Thảo left, Dũng center, Cô Hoa right. DLG-01 dựng từ 🔀 p4 (bản đã sửa #107: “ba lựa chọn và một đề xuất”) + bản báo cáo mẫu p6. SCENE-02 của Thảo dựng từ 📌 p17; tin đầu tóm gọn email của bài, tin cuối giữ nguyên câu mẫu. Khung ❓ p11 dùng BEAT-04 hỏi, CMP-01 giải. Câu đố đổi sang questions[23] (không tên, chưa bị đọc sẵn). Phủ ý: 21/21. #112 nhịp hình (§9): tách hoặc đổi module các cảnh s15, giữ lời đọc và ref. #112 (khớp bài sau sửa logic): bài bỏ p2, p3 (gộp vào p1, dẫn sang bài báo tin xấu), đánh lại mã p4–p23 → p2–p21; mục 1 đổi tên 'Gặp sự cố, vì sao nên báo sớm?' — bỏ câu “sếp phật ý vì bị bất ngờ” (s05) và tin nhắn báo nhanh mẫu (s06, s07) không còn trong bài; thay bằng s06n (gấp / không gấp) và s07n (dẫn sang bài “Báo tin xấu cho sếp thế nào cho đúng?”).",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "p4",
      data: { set: "office", label: "Ba ngày trước sự kiện",
        actors: [{ id: "hoa", side: "right", pose: "stand" }, { id: "dung", side: "center", enter: "walk", at: "l2" }] },
      lines: [
        L("l1", null, "Three days before a product launch, the venue says the hall is ready at ten, not eight.", "Ba ngày trước buổi ra mắt, địa điểm báo mười giờ mới giao hội trường, thay vì tám giờ."),
        L("l2", "dung", "There's a problem with the hall! What do we do now?", "Chị ơi, hội trường có vấn đề rồi, giờ tính sao ạ?", { face: "worried", pose: "explain", react: { hoa: "surprised" } }),
        L("l3", null, "Is this a good way to report a problem to your boss?", "Báo sếp như vậy đã ổn chưa?"),
      ], beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Báo cáo theo bốn phần", pose: "present", items: ["Vấn đề", "Nguyên nhân đã biết", "Hai ba phương án, lợi và hại", "Đề xuất, và cần sếp quyết trước khi nào"] },
      lines: [
        L("l1", "det", "How do you report a problem clearly? Early, and in four parts.", "Báo sự cố với sếp thế nào cho rõ? Báo sớm, theo bốn phần."),
        L("l2", "det", "The problem.", "Vấn đề."),
        L("l3", "det", "What you know about the cause.", "Nguyên nhân đã biết đến đâu."),
        L("l4", "det", "Two or three options, each with a pro and a con.", "Hai ba phương án, mỗi cái một lợi, một hại."),
        L("l5", "det", "Your suggestion, and what you need decided by when.", "Đề xuất của bạn, và cần sếp quyết gì trước khi nào."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng của bài", chapters: [
        { label: "Vì sao báo sớm", illus: "alarm-clock" },
        { label: "Báo đủ bốn phần", illus: "card-index-dividers" },
        { label: "Nói về nguyên nhân", illus: "magnifying-glass-tilted-left" },
        { label: "Phương án và đề xuất", illus: "balance-scale" },
        { label: "Kết để việc không treo", illus: "spiral-calendar" },
        { label: "Nói hay nhắn, dài bao nhiêu", illus: "mobile-phone" } ] },
      lines: [
        L("l1b", null, "Why report early, the four parts, and talking about causes.", "Vì sao báo sớm, bốn phần, và cách nói về nguyên nhân."),
        L("l2", null, "Then options, a strong ending, and how long to make it.", "Rồi phương án, cách kết, và dài bao nhiêu là vừa."),
      ] },

    // ---------- Chương 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Gặp sự cố, vì sao nên báo sớm?" },
      lines: [L("l1b", "det", "Part one: when something goes wrong, why report it early?", "Phần một: gặp sự cố, vì sao nên báo sớm?")] },
    { id: "s05", module: "CMP-01", ref: "p1",
      data: { labels: ["Báo sớm", "Bị phát hiện muộn"], left: "Còn nhiều lựa chọn", right: "Thường chỉ còn lựa chọn đắt", illus: ["sunrise", "money-with-wings"] },
      lines: [
        L("l1", null, "The earlier you report, the easier it is. Early problems still have many options.", "Báo càng sớm càng dễ xử lý: vấn đề báo sớm còn nhiều lựa chọn."),
        L("l2", null, "Problems found late usually leave only expensive ones.", "Bị phát hiện muộn thường chỉ còn lựa chọn đắt."),
      ] },
    { id: "s06n", module: "CMP-01", ref: "p1",
      data: { labels: ["Việc gấp", "Việc không gấp"], left: "Báo ngay một câu, hẹn giờ gửi bản đầy đủ", right: "Dành khoảng ba mươi phút chuẩn bị trước khi gặp sếp", illus: ["high-voltage", "stopwatch"] },
      lines: [
        L("l1", null, "If it's urgent, report in one line right away, and set a time to send the full version.", "Việc gấp: báo ngay một câu, rồi hẹn giờ gửi bản đầy đủ."),
        L("l2", null, "If it's not urgent, spend about thirty minutes preparing before you meet your boss.", "Việc không gấp: dành khoảng ba mươi phút chuẩn bị trước khi gặp sếp."),
      ] },
    { id: "s07n", module: "TEXT-01", ref: "p1",
      data: { text: "Xem thêm: “Báo tin xấu cho sếp thế nào cho đúng?”", illus: "open-book" },
      lines: [
        L("l1", null, "When to report, which channel, your first line, and your boss's reaction: see the lesson on delivering bad news.", "Lúc báo, kênh báo, câu mở đầu, cách đón phản ứng của sếp: xem bài “Báo tin xấu cho sếp thế nào cho đúng?”."),
        L("l2", null, "This lesson puts the four steps together into one report.", "Bài này lo phần ghép bốn bước thành một lần báo cáo."),
      ] },

    // ---------- Chương 2 ----------
    { id: "s08", module: "HOST-03", data: { n: 2, of: 6, title: "Báo đủ bốn phần" },
      lines: [L("l1", "det", "Part two: what helps your boss decide fast?", "Phần hai: báo những gì để sếp quyết được nhanh?")] },
    { id: "s09", module: "LIST-13", ref: "p2",
      data: { title: "Bốn phần của một báo cáo", items: [
        { title: "Vấn đề", detail: "Một câu: sự việc, mức độ, ảnh hưởng", illus: "warning" },
        { title: "Nguyên nhân", detail: "Điều đã kiểm tra được, điều còn đang tìm hiểu", illus: "magnifying-glass-tilted-left" },
        { title: "Phương án", detail: "Hai ba lựa chọn, mỗi cái một câu lợi, một câu hại", illus: "balance-scale" },
        { title: "Đề xuất", detail: "Nghiêng cách nào, vì sao, cần sếp quyết gì, trước khi nào", illus: "check-mark-button" } ] },
      lines: [
        L("l1", null, "Problem: one sentence on what happened, how big, who's affected.", "Vấn đề: một câu nêu sự việc, mức độ, ảnh hưởng."),
        L("l2", null, "Cause: what you've checked, and what you're still finding out.", "Nguyên nhân: điều đã kiểm tra được và điều còn đang tìm hiểu."),
        L("l3", null, "Options: two or three, one pro and one con each.", "Phương án: hai ba lựa chọn, mỗi cái một lợi, một hại."),
        L("l4", null, "Suggestion: which one, why, and what you need decided by when.", "Đề xuất: nghiêng cách nào, vì sao, cần sếp quyết gì, trước khi nào."),
      ] },
    { id: "s10", module: "HOST-01", ref: "p3",
      data: { text: "Sếp chỉ cần dùng kinh nghiệm để chọn hoặc chỉnh", pose: "thumb" },
      lines: [
        L("l1", "det", "With this, your boss uses experience to choose or adjust, not start from zero.", "Với khung này, sếp chỉ cần dùng kinh nghiệm để chọn hoặc chỉnh, không phải hỏi lại từ đầu."),
        L("l2", "det", "It also shows you thought it through, and didn't just push it up.", "Nó còn cho thấy bạn đã tự suy nghĩ, không đẩy việc lên trên."),
      ] },
    { id: "s11", module: "DLG-01", ref: "p4,p6",
      data: { set: "office", label: "Báo sếp",
        actors: [{ id: "dung", side: "center" }, { id: "hoa", side: "right", pose: "hold" }],
        verdict: { ok: false, label: "Chỉ mang đến nỗi lo", why: "Sếp phải hỏi lại từ đầu; hai mươi phút trôi qua chưa có quyết định." } },
      lines: [
        L("l1", null, "Back to Dũng and the hall.", "Quay lại Dũng và chuyện hội trường."),
        L("l2", "dung", "There's a problem with the hall! What do we do now?", "Chị ơi, hội trường có vấn đề rồi, giờ tính sao ạ?", { face: "worried", pose: "explain", react: { hoa: "thinking" }, stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Now she must ask: how late, other places, cost, guests? Twenty minutes, no decision.", "Sếp phải hỏi lại: trễ bao lâu, chỗ khác, chi phí, khách mời. Hai mươi phút chưa quyết được gì."),
        L("l5", "det", "Let's rewind. Thirty minutes of preparing first.", "Tua lại. Chuẩn bị ba mươi phút đã nhé.", { phase: "redo" }),
        L("l6", "dung", "The hall is ready only at ten. Three options: start later, a smaller hall here, or a pricier place.", "Hội trường chỉ giao lúc mười giờ. Ba cách: lùi giờ, hội trường nhỏ cùng toà, hoặc thuê chỗ khác đắt hơn.", { phase: "redo", pose: "explain", face: "neutral" }),
        L("l7", "dung", "I suggest starting later. Most guests are nearby, same cost. I need your OK this afternoon, to tell the guests.", "Em đề xuất lùi giờ: khách phần lớn ở gần, chi phí không đổi. Em cần chị đồng ý trước chiều nay để kịp báo khách.", { phase: "redo", face: "happy", react: { hoa: "happy" } }),
        L("l8", null, "One minute. The boss only has to choose.", "Sếp chỉ cần một phút để chọn.", { phase: "redo" }),
      ] },
    { id: "s12", module: "TEXT-01", ref: "p5",
      data: { text: "Mang đến lựa chọn, đừng chỉ mang đến nỗi lo.", illus: "card-index-dividers" },
      lines: [L("l1", null, "Bring choices, not only worries.", "Mang đến lựa chọn, đừng chỉ mang đến nỗi lo.")] },

    // ---------- Chương 3 ----------
    { id: "s13", module: "HOST-03", data: { n: 3, of: 6, title: "Nói về nguyên nhân" },
      lines: [L("l1", "det", "Part three: how to talk about the cause.", "Phần ba: nói về nguyên nhân thế nào cho đúng?")] },
    { id: "s14", module: "TEXT-07", ref: "p7",
      data: { en: "My guess is the courier. I'm waiting for confirmation.", vi: "Em đoán là do bên vận chuyển, đang chờ xác nhận.",
        chunks: [{ en: "My guess is", vi: "em đoán là" }, { en: "the courier.", vi: "do bên vận chuyển" }, { en: "I'm waiting", vi: "em đang chờ" }, { en: "for confirmation.", vi: "xác nhận" }], illus: "thinking-face" },
      lines: [
        L("l1", null, "Say clearly what is fact: I've checked that... And what is a guess:", "Nói rõ đâu là dữ kiện: “Em đã kiểm tra được là…”, đâu là phỏng đoán:"),
        L("l2", null, "My guess is..., and I'm waiting for confirmation.", "“Em đoán là…, đang chờ xác nhận.”"),
        L("l3", null, "Your boss may repeat it to clients. A guess told as fact can travel far.", "Sếp có thể nói lại với khách, cấp trên. Phỏng đoán bị nói như sự thật có thể đi rất xa."),
      ] },
    { id: "s15a", module: "TEXT-04", ref: "p8",
      data: { text: "Trước: “Lỗi do bên vận chuyển ạ.” Sếp gọi ngay cho khách, nói lỗi ở bên vận chuyển.", marks: ["Lỗi do bên vận chuyển ạ"], illus: "delivery-truck" },
      lines: [
        L("l1", null, "Before: it's the courier's fault. The boss calls the client, and blames the courier.", "Trước: “Lỗi do bên vận chuyển ạ.” Sếp gọi ngay cho khách, nói lỗi ở bên vận chuyển."),
      ] },
    { id: "s15", module: "CMP-02", ref: "p8",
      data: { title: "Một lô hàng giao nhầm địa chỉ", before: "Lỗi do bên vận chuyển ạ.",
        after: "Em đoán là do bên vận chuyển, em đang kiểm tra lại với kho, chiều nay em xác nhận.",
        illusBefore: "delivery-truck", illusAfter: "magnifying-glass-tilted-left" },
      lines: [
        L("l2", null, "Next day: the warehouse used the wrong label. The boss calls back to correct it.", "Hôm sau: hoá ra kho dán nhầm nhãn, sếp phải gọi lại để đính chính."),
        L("l3", null, "After: I think it's the courier. I'm checking with the warehouse, and I'll confirm this afternoon.", "Sau: “Em đoán là do bên vận chuyển, em đang kiểm tra với kho, chiều nay em xác nhận.”"),
      ] },
    { id: "s15b", module: "TEXT-01", ref: "p8",
      data: { text: "Sếp biết phải chờ trước khi nói với khách", illus: "hourglass-not-done" },
      lines: [
        L("l4", null, "Now the boss knows to wait before telling the client.", "Sếp biết phải chờ trước khi nói với khách."),
      ] },
    { id: "s16", module: "TEXT-01", ref: "p9",
      data: { text: "Dữ kiện nói là dữ kiện, phỏng đoán nói là phỏng đoán.", illus: "balance-scale" },
      lines: [L("l1", null, "Say facts as facts, and guesses as guesses.", "Dữ kiện nói là dữ kiện, phỏng đoán nói là phỏng đoán.")] },
    { id: "s17", module: "HOST-01", ref: "p10",
      data: { text: "Mô tả sự việc, đừng đổ cho bộ phận khác", pose: "point" },
      lines: [
        L("l1", "det", "Describe what happened. Don't blame another team.", "Mô tả sự việc, đừng đổ cho bộ phận khác."),
        L("l2", "det", "Reports get forwarded. Blame on paper sounds much harsher than spoken.", "Báo cáo có thể được chuyển tiếp; câu đổ lỗi trên giấy nặng hơn nhiều so với lúc nói."),
      ] },
    { id: "s18", module: "BEAT-04", ref: "p11",
      data: { seconds: 5, prompt: "Báo cáo về việc trả tiền nhà cung cấp bị trễ. Mở đầu bằng “Do phòng kế toán xử lý chậm”, hay tả quy trình?" },
      lines: [
        L("l1", null, "You write about a late supplier payment. Which opening is better?", "Bạn viết báo cáo về việc thanh toán nhà cung cấp bị trễ. Mở đầu thế nào?"),
        L("l2", null, "Accounting was slow? Or: the papers took five days across two teams, once missing a signature?", "“Do phòng kế toán xử lý chậm”, hay “Hồ sơ qua hai phòng mất năm ngày, có lần thiếu chữ ký”?"),
      ] },
    { id: "s19", module: "CMP-01", ref: "p11",
      data: { labels: ["Chỉ tên phòng", "Tả quy trình"], left: "Do phòng kế toán xử lý chậm",
        right: "Hồ sơ đi qua hai phòng mất năm ngày, có lần thiếu chữ ký", illus: ["angry-face", "page-facing-up"] },
      lines: [
        L("l1", null, "The second. Reports are often forwarded word for word.", "Câu thứ hai. Báo cáo hay được chuyển tiếp nguyên văn."),
        L("l2", null, "Naming accounting upsets them. They say the papers came without signatures, and tension lasts weeks.", "Chỉ tên phòng khiến kế toán phật ý, giải thích hồ sơ thiếu chữ ký, hai phòng căng nhiều tuần."),
        L("l3", null, "Describing the process lets everyone fix the process, not fight.", "Tả quy trình giúp mọi người cùng sửa quy trình thay vì cãi nhau."),
      ] },
    { id: "s20", module: "TEXT-01", ref: "p12",
      data: { text: "Tả sự việc, đừng tả thủ phạm.", illus: "memo" },
      lines: [L("l1", null, "Describe the event, not the culprit.", "Tả sự việc, đừng tả thủ phạm.")] },

    // ---------- Chương 4 ----------
    { id: "s21", module: "HOST-03", data: { n: 4, of: 6, title: "Phương án và đề xuất" },
      lines: [L("l1", "det", "Part four: options, and your suggestion.", "Phần bốn: đưa phương án và đề xuất thế nào?")] },
    { id: "s22", module: "LIST-08", ref: "p13,p14",
      data: { title: "Đưa phương án", items: [
        { title: "Ít nhất hai phương án", detail: "Kể cả “giữ nguyên” nếu hợp lý; hai ba là vừa", illus: "card-index-dividers" },
        { title: "Một câu lợi, một câu hại", detail: "“Lùi giờ: không tốn thêm tiền, nhưng vài khách ở xa phải chờ”", illus: "balance-scale" } ] },
      lines: [
        L("l1", null, "Bring at least two options, even keeping things as they are, if it makes sense.", "Luôn mang ít nhất hai phương án, kể cả “giữ nguyên” nếu hợp lý."),
        L("l2", null, "One option feels like pressure. Too many is confusing. Two or three is right.", "Một phương án làm sếp thấy bị ép, nhiều quá thì rối; hai ba là vừa."),
        L("l3", null, "One pro, one con each. Start later: no extra cost, but a few far guests wait.", "Mỗi cái một lợi, một hại: “Lùi giờ: không tốn thêm tiền, nhưng vài khách ở xa phải chờ.”"),
      ] },
    { id: "s23", module: "HOST-02", ref: "p15",
      data: { statement: "Nói mình nghiêng về cách nào là lấn quyền sếp", truth: false,
        why: "Sếp muốn nghe ý người trực tiếp xử lý. Bạn đề xuất, sếp vẫn quyết và có thể chỉnh." },
      lines: [
        L("l1", "det", "Saying which option you prefer oversteps your boss. True or false?", "Nói mình nghiêng về cách nào là lấn quyền sếp. Đúng hay sai?"),
        L("l2", "det", "False. Bosses want the view of the person handling it.", "Sai. Sếp muốn nghe ý của người trực tiếp xử lý.", { face: "happy" }),
        L("l3", "det", "Say which and why. The boss still decides, and can adjust.", "Nói rõ nghiêng cách nào, vì sao. Sếp vẫn là người quyết, và có thể chỉnh."),
      ] },

    // ---------- Chương 5 ----------
    { id: "s24", module: "HOST-03", data: { n: 5, of: 6, title: "Kết để việc không bị treo" },
      lines: [L("l1", "det", "Part five: end so nothing gets stuck.", "Phần năm: kết thúc thế nào để việc không bị treo?")] },
    { id: "s25", module: "TEXT-04", ref: "p16",
      data: { text: "Kết bằng một câu hỏi cụ thể: cần sếp đồng ý điều gì, trước lúc nào, và vì sao lại là lúc đó.",
        marks: ["trước lúc nào"], illus: "spiral-calendar" },
      lines: [
        L("l1", null, "End with a specific question: what you need approved, and by when.", "Kết bằng một câu hỏi cụ thể: cần sếp đồng ý điều gì, trước lúc nào."),
        L("l2", null, "And why that time: to confirm the order, or to tell the client.", "Và vì sao lại là lúc đó: “để kịp chốt đơn”, “để kịp báo khách”."),
      ] },
    { id: "s26", module: "SCENE-02", ref: "p17",
      data: { set: "room", label: "Email của Thảo", actor: { id: "thao", side: "left" },
        contact: { name: "Chị Hoa (sếp)", illus: "woman-office-worker" },
        messages: [
          { from: "me", text: "Nhà cung cấp tăng giá. Có hai phương án; em đề xuất đổi sang nhà cung cấp dự phòng.", at: "l1" },
          { from: "me", text: "Em cần chị duyệt trước trưa thứ Năm để kịp chốt đơn.", at: "l3" } ] },
      lines: [
        L("l1", "thao", "The supplier raised prices. Two options. I suggest our backup supplier.", "Nhà cung cấp tăng giá. Hai phương án, em đề xuất đổi sang bên dự phòng."),
        L("l2", null, "No deadline. The boss thinks it's just information. The Thursday order deadline is missed.", "Email không nói cần trả lời khi nào. Sếp tưởng chỉ để biết, và lỡ hạn chốt đơn thứ Năm."),
        L("l3", "thao", "Since then, one last line: I need your approval before Thursday noon to confirm the order.", "Từ đó luôn có dòng cuối: em cần chị duyệt trước trưa thứ Năm để kịp chốt đơn.", { face: "happy" }),
      ] },
    { id: "s27", module: "TEXT-01", ref: "p18",
      data: { text: "Kết thư bằng một câu hỏi có hạn giờ.", illus: "envelope-with-arrow" },
      lines: [L("l1", null, "End your message with a question that has a time limit.", "Kết thư bằng một câu hỏi có hạn giờ.")] },

    // ---------- Chương 6 ----------
    { id: "s28", module: "HOST-03", data: { n: 6, of: 6, title: "Nói hay nhắn, dài bao nhiêu?" },
      lines: [L("l1", "det", "Part six: speak or text, and how long?", "Phần sáu: báo bằng lời hay tin nhắn, dài bao nhiêu?")] },
    { id: "s29", module: "LIST-07", ref: "p19",
      data: { title: "Gọn mà đủ", items: [
        { text: "Câu đầu tiên là vấn đề", illus: "keycap-1" },
        { text: "Chi tiết để sau", illus: "page-facing-up" },
        { text: "Cả bốn phần trong khoảng hai phút", illus: "stopwatch" } ] },
      lines: [
        L("l1", null, "Say the problem in the first sentence. Details come later.", "Nói vấn đề ngay câu đầu tiên, chi tiết để sau."),
        L("l2", null, "Practise all four parts in about two minutes.", "Tập nói cả bốn phần trong khoảng hai phút."),
        L("l3", null, "Can't? Maybe the problem isn't clear to you yet.", "Không nói gọn được? Có thể chính bạn chưa rõ vấn đề."),
      ] },
    { id: "s30", module: "SCENE-02", ref: "p20",
      data: { set: "office", label: "Tin nhắn mẫu", actor: { id: "dung", side: "center" },
        contact: { name: "Chị Hoa (sếp)", illus: "woman-office-worker" },
        messages: [
          { from: "me", text: "Chị ơi, lô hàng cho khách bên em sẽ trễ hai ngày do nhà cung cấp giao thiếu nguyên liệu, em đã xác nhận.", at: "l1" },
          { from: "me", text: "Có hai cách: chờ đủ hàng, hoặc giao trước phần có sẵn rồi bù sau.", at: "l2" },
          { from: "me", text: "Em đề xuất giao trước, vì khách từng đồng ý cách này.", at: "l3" },
          { from: "me", text: "Em cần chị duyệt trước ba giờ chiều nay để kịp báo khách.", at: "l4" } ] },
      lines: [
        L("l1", "dung", "The client's shipment will be two days late. The supplier sent too little material. I've confirmed it.", "Lô hàng cho khách sẽ trễ hai ngày do nhà cung cấp giao thiếu nguyên liệu, em đã xác nhận."),
        L("l2", "dung", "Two options: wait for everything, or send what we have now and the rest later.", "Hai cách: chờ đủ hàng, hoặc giao trước phần có sẵn rồi bù sau."),
        L("l3", "dung", "I suggest sending first. The client has accepted this before.", "Em đề xuất giao trước, vì khách từng đồng ý cách này."),
        L("l4", "dung", "I need your approval before three today, to tell the client.", "Em cần chị duyệt trước ba giờ chiều nay để kịp báo khách.", { face: "happy" }),
      ] },
    { id: "s31", module: "LIST-09", ref: "p21",
      data: { title: "Trước khi gửi, kiểm", illus: "clipboard", keywords: [
        { text: "Câu đầu là vấn đề", illus: "keycap-1" },
        { text: "Dữ kiện tách phỏng đoán", illus: "balance-scale" },
        { text: "Không đổ lỗi", illus: "handshake" },
        { text: "Hai phương án, lợi và hại", illus: "card-index-dividers" },
        { text: "Đề xuất kèm lý do", illus: "check-mark-button" },
        { text: "Câu hỏi có hạn chót", illus: "spiral-calendar" } ] },
      lines: [
        L("l1", null, "Before sending: the problem first, facts apart from guesses, no blame.", "Trước khi gửi: câu đầu là vấn đề, tách dữ kiện với phỏng đoán, không đổ lỗi."),
        L("l2", null, "Two options with pros and cons, a suggestion with a reason,", "Ít nhất hai phương án có lợi hại, có đề xuất và lý do,"),
        L("l3", null, "and a specific question with a deadline.", "và một câu hỏi cụ thể kèm hạn chót."),
      ] },

    // ---------- Tổng kết, câu đố, kết ----------
    { id: "s32", module: "END-02", ref: "outro",
      data: { points: ["Báo sớm, báo nhanh khi gấp", "Tách dữ kiện với phỏng đoán, không đổ lỗi", "Kết bằng câu hỏi có hạn giờ"],
        icons: ["alarm-clock", "balance-scale", "spiral-calendar"] },
      lines: [
        L("l1", null, "Your boss doesn't need you to never have problems. She needs to know early, with choices.", "Sếp không cần bạn không bao giờ gặp sự cố; sếp cần biết sớm và có thứ để chọn."),
        L("l2", null, "Save the sample message as your frame for the next report.", "Lưu tin nhắn mẫu làm khung cho lần báo cáo tới."),
        L("l3", null, "That completes the series: root, options, decision, and saying it clearly.", "Vậy là trọn chuỗi: tìm gốc, có phương án, quyết có cơ sở, và nói ra rõ ràng."),
      ] },
    { id: "s33", module: "QUIZ-01", ref: "questions[23]",
      data: {
        q: "How should a problem report end?",
        options: [
          "With a summary of everything already said, repeated in other words",
          "With a long apology, so the manager does not feel angry with you",
          "With a specific question about what you need approved and by when",
        ],
        correct: 2, countdown: 5, illus: "spiral-calendar",
        why: "Câu hỏi cụ thể có hạn chót cho sếp biết phải làm gì, lúc nào; thiếu nó, báo cáo dễ bị coi là để biết.",
      },
      lines: [
        L("l1", null, "How should a problem report end?", "Một báo cáo sự cố nên kết thúc thế nào?"),
        L("l2", null, "With a specific question about what you need approved and by when.", "Bằng một câu hỏi cụ thể: cần duyệt điều gì, trước khi nào."),
        L("l3", null, "Without it, the report looks like information only.", "Thiếu câu đó, báo cáo dễ bị coi là thông tin để biết."),
      ], beats: { after: 600 } },
    { id: "s34", module: "END-05",
      data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Câu cuối của chuỗi" },
      lines: [L("l1", "det", "One last step: forty questions are waiting below.", "Bước cuối: bốn mươi câu hỏi đang chờ bên dưới.")] },
  ],
};
