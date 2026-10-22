// Kịch bản video W lần 3 (#110) — "Báo cáo bằng số liệu: nói sao cho dễ hiểu" · chuỗi "Báo cáo và thuyết trình trước sếp"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
export default {
  schema: "detpro.video-script/0.2",
  id: "explain-numbers-simply--w01",
  hook: "HOOK-06",
  loop: { open: "s01", close: "s25" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (C)
  unit: { audience: "presenting-to-managers", slug: "explain-numbers-simply", door: "ky-nang", level: "B1",
    title: "Báo cáo bằng số liệu: nói sao cho dễ hiểu", series: "Báo cáo và thuyết trình trước sếp" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Nhi → Thảo; Tín, “bạn” (❓ p20) → Dũng; sếp (“anh”) → Cô Hoa (Thảo, Dũng gọi “chị”). Vai mới: không dùng (bài không có trẻ con, bà cụ, người nước ngoài). Chỗ đứng cả video: Thảo left, Dũng center, Cô Hoa right. p7 dùng bản đã sửa (#107: “giảm so với tháng trước”, không “giảm mạnh”). DLG-01 s09: phần làm lại (Dũng kiểm cùng cách tính trước khi báo) dựng từ p5–p6, p8. CMP-06 s25: dòng “chỉ hứa tháng sau sẽ tốt hơn” lấy từ câu hỏi q37 của bài. Phủ ý: 24/24. Câu đố questions[12] (p13).",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-03", ref: "p3",
      data: { set: "meeting",
        actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "right", pose: "hold" }],
        left: { label: "Đọc từng ô của bảng", ok: false },
        right: { label: "Câu đầu trả lời ngay", ok: true } },
      lines: [
        { id: "a1", lang: "en", who: "thao", say: "Column one is sales in the North, column two is the Centre…", sub: "Dạ, cột thứ nhất là doanh số miền Bắc, cột thứ hai là miền Trung…", phase: "a", pose: "explain" },
        { id: "a2", lang: "en", who: "hoa", say: "In short, did we hit the target?", sub: "Tóm lại có đạt chỉ tiêu không em?", phase: "a", face: "thinking" },
        { id: "b1", lang: "en", who: "thao", say: "We hit the target this month, mainly thanks to returning customers.", sub: "Tháng này mình đạt chỉ tiêu, chủ yếu nhờ khách cũ quay lại ạ.", phase: "b", face: "happy", pose: "explain" },
        { id: "l4", lang: "en", say: "Same numbers. So how do you say numbers so your boss gets them?", sub: "Cùng một bảng số. Vậy nói số thế nào cho sếp hiểu?", wait: 300 },
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Sếp cần", pose: "present",
        items: ["Ít con số hơn", "Mỗi số một mốc so sánh", "Một câu “nghĩa là”"] },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "The problem is rarely the data. It's how you say it. Your boss needs", sub: "Vấn đề hiếm khi ở số liệu, mà ở cách nói. Sếp cần" },
        { id: "l2", lang: "en", who: "det", say: "fewer numbers,", sub: "ít con số hơn," },
        { id: "l3", lang: "en", who: "det", say: "each with something to compare it to,", sub: "mỗi số đi kèm một mốc so sánh," },
        { id: "l4", lang: "en", who: "det", say: "and one sentence on what it means.", sub: "và một câu nói rõ nó nghĩa là gì." },
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Sáu chặng nói số liệu", chapters: [
        { label: "Chọn con số nào", illus: "bullseye" },
        { label: "Kiểm tra trước khi đưa", illus: "magnifying-glass-tilted-left" },
        { label: "Nói một con số dễ nghe", illus: "speaking-head" },
        { label: "Biểu đồ", illus: "bar-chart" },
        { label: "Giải thích tăng, giảm", illus: "chart-increasing" },
        { label: "Khi số không đẹp", illus: "chart-decreasing" } ] },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "Six stops: which numbers, what to check, and how to say one number.", sub: "Sáu chặng: chọn số nào, kiểm tra gì, nói một con số thế nào." },
        { id: "l2", lang: "en", who: "det", say: "Then charts, causes, and numbers that don't look good.", sub: "Rồi biểu đồ, nguyên nhân, và số liệu không đẹp." },
      ] },

    // ---------- Chương 1: Nói con số nào ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Cả bảng số, nói con số nào?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part one: a whole table. Which numbers do you say?", sub: "Phần một: có cả bảng số, nên nói con số nào?" }] },
    { id: "s05", module: "LIST-13", ref: "p1,p2",
      data: { title: "Chọn số", items: [
        { title: "Bắt đầu từ câu hỏi", detail: "Sau buổi này sếp cần quyết gì? Chọn ba đến năm con số.", illus: "red-question-mark" },
        { title: "Số còn lại để phụ lục", detail: "Không nói ra không phải giấu, mà để sếp tập trung.", illus: "file-folder" } ] },
      lines: [
        { id: "l1", lang: "en", say: "Start with a question: after this meeting, what must your boss decide?", sub: "Bắt đầu từ câu hỏi: sau buổi này, sếp cần quyết định gì?" },
        { id: "l2", lang: "en", say: "Pick only the numbers that answer it. Usually three to five.", sub: "Chỉ chọn số giúp trả lời câu đó, thường ba đến năm con số." },
        { id: "l3", lang: "en", say: "Put the rest in an appendix or attached file. That's not hiding. It helps your boss focus.", sub: "Số còn lại để phụ lục hoặc file đính kèm. Không phải giấu, mà để sếp tập trung." },
      ] },
    { id: "s06", module: "TEXT-01", ref: "p3,p4",
      data: { text: "Bảng để tra, câu để nói.", illus: "speech-balloon" },
      lines: [
        { id: "l2", lang: "en", say: "Tables are for looking up. Sentences are for saying.", sub: "Bảng để tra, câu để nói." },
      ] },

    // ---------- Chương 2: Kiểm tra trước khi đưa số ----------
    { id: "s07", module: "HOST-03", data: { n: 2, of: 6, title: "Kiểm tra gì trước khi đưa số?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part two: what to check before you show a number.", sub: "Phần hai: trước khi đưa số, cần kiểm tra gì?" }] },
    { id: "s08", module: "LIST-05", ref: "p5",
      data: { title: "Trước khi đưa số", illus: "detective", items: [
        "Nguồn nào, ngày nào", "Đúng đơn vị: đồng hay nghìn đồng, sản phẩm hay đơn", "Đúng kỳ: tuần, tháng, quý", "Cách tính giống kỳ trước", "Người thứ hai soát lại" ] },
      lines: [
        { id: "l1", lang: "en", say: "Where is it from, and what date?", sub: "Số lấy từ nguồn nào, ngày nào?" },
        { id: "l2", lang: "en", say: "The right unit: dong or thousand dong, products or orders?", sub: "Đúng đơn vị: đồng hay nghìn đồng, sản phẩm hay đơn hàng?" },
        { id: "l3", lang: "en", say: "The right period, and the same method as last time.", sub: "Đúng kỳ: tuần, tháng, quý. Cách tính giống kỳ trước." },
        { id: "l4", lang: "en", say: "And a second person to check it. They spot what you missed.", sub: "Và một người thứ hai soát lại: họ thấy lỗi bạn bỏ sót." },
      ] },
    { id: "s09", module: "DLG-01", ref: "p6,p7,p8",
      data: { set: "office", label: "Tình huống",
        actors: [{ id: "dung", side: "center" }, { id: "hoa", side: "right", pose: "hold" }],
        verdict: { ok: false, label: "So hai tháng tính khác nhau",
          why: "Tháng này chưa gồm thuế, tháng trước đã gồm thuế: thực ra chi phí gần như không đổi.",
          rule: "So cùng cách tính, mới ra cùng sự thật" } },
      lines: [
        { id: "l1", lang: "en", who: "dung", say: "Good news! Our ad costs went down this month!", sub: "Tin vui ạ! Chi phí quảng cáo tháng này giảm so với tháng trước!", face: "happy", pose: "thumb", react: { hoa: "happy" }, stop: true },
        { id: "l2", lang: "en", who: "det", say: "Wait a second!", sub: "Khoan đã!", face: "stern" },
        { id: "l3", lang: "en", who: "det", say: "This month is without tax. Last month was with tax. Costs barely changed.", sub: "Tháng này chưa gồm thuế, tháng trước đã gồm thuế. Chi phí gần như không đổi.", pose: "point" },
        { id: "l4", lang: "en", who: "det", say: "Next day, accounting finds it, and from then on, the boss rechecks all his numbers.", sub: "Hôm sau kế toán phát hiện. Từ đó, sếp hỏi lại mọi con số Dũng đưa." },
        { id: "l5", lang: "en", who: "det", say: "Let's rewind and try again.", sub: "Tua lại, thử lại nhé.", phase: "redo" },
        { id: "l6", lang: "en", who: "dung", say: "First, are both months counted the same way, with tax?", sub: "Trước hết: hai tháng có cùng cách tính, cùng gồm thuế chưa?", phase: "redo", face: "thinking", pose: "think" },
        { id: "l7", lang: "en", who: "dung", say: "Counted the same way, our ad costs are almost the same as last month.", sub: "Tính cùng một cách, chi phí quảng cáo gần như không đổi so với tháng trước ạ.", phase: "redo", pose: "explain" },
        { id: "l8", lang: "en", who: "det", say: "Changed the method? Say so at once, or your boss thinks something really changed.", sub: "Đổi cách tính thì nói rõ ngay, kẻo sếp tưởng có thay đổi thật.", phase: "redo", pose: "thumb", face: "happy" },
      ] },

    // ---------- Chương 3: Nói một con số cho dễ nghe ----------
    { id: "s10", module: "HOST-03", data: { n: 3, of: 6, title: "Nói một con số cho dễ nghe" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part three: how to say one number so it's easy to hear.", sub: "Phần ba: nói một con số thế nào cho dễ nghe." }] },
    { id: "s11", module: "CMP-01", ref: "p9",
      data: { labels: ["Đọc đủ từng chữ số", "Làm tròn khi nói"], left: "Người nghe khó giữ trong đầu", right: "“Khoảng hai tỷ ba”; số đầy đủ để trên slide",
        illus: ["input-numbers", "speaking-head"] },
      lines: [
        { id: "l1", lang: "en", say: "Round it when you speak: about two point three billion is easier than every digit.", sub: "Làm tròn khi nói: “khoảng hai tỷ ba” dễ nghe hơn đọc đủ từng chữ số." },
        { id: "l2", lang: "en", say: "Keep the exact figure on the slide or in the file.", sub: "Con số đầy đủ để trên slide hoặc trong file." },
      ] },
    { id: "s12", module: "TEXT-04", ref: "p10",
      data: { text: "Tỷ lệ khách quay lại là ba mươi phần trăm, nghĩa là cứ mười khách thì ba người mua lần hai.", marks: ["nghĩa là"], illus: "busts-in-silhouette" },
      lines: [
        { id: "l1", lang: "en", say: "Give each number a “that means”. People remember the meaning longer than the number.", sub: "Mỗi con số kèm một câu “nghĩa là”. Người nghe nhớ ý nghĩa lâu hơn con số." },
        { id: "l2", lang: "en", say: "Thirty percent of customers come back. That means three in ten buy a second time.", sub: "Ba mươi phần trăm khách quay lại, nghĩa là cứ mười khách thì ba người mua lần hai." },
      ] },
    { id: "s12b", module: "LIST-01", ref: "p11",
      data: { title: "Đặt mỗi con số cạnh một mốc", illus: "balance-scale", items: ["Kỳ trước", "Cùng kỳ năm ngoái", "Mục tiêu đã đặt"],
        icons: ["tear-off-calendar", "spiral-calendar", "bullseye"] },
      lines: [
        { id: "l0", lang: "en", say: "A number alone doesn't say good or bad. Put it next to a reference:", sub: "Số đứng một mình không nói tốt hay xấu. Hãy đặt nó cạnh một mốc:" },
        { id: "l1", lang: "en", say: "last period,", sub: "kỳ trước," },
        { id: "l2", lang: "en", say: "the same period last year,", sub: "cùng kỳ năm ngoái," },
        { id: "l3", lang: "en", say: "or the target you set.", sub: "hoặc mục tiêu đã đặt." },
      ] },
    { id: "s13", module: "HOST-02", ref: "p12,p13",
      data: { statement: "Cứ nói “tăng gấp đôi” là báo cáo đủ ấn tượng và đủ rõ", truth: false,
        why: "Gấp đôi chỉ cho biết mức thay đổi, không cho biết quy mô: có thể chỉ từ năm lên mười." },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "Saying “it doubled” is impressive and clear enough. True or false?", sub: "Cứ nói “tăng gấp đôi” là đủ ấn tượng, đủ rõ. Đúng hay sai?" },
        { id: "l2", lang: "en", who: "det", say: "False. Doubling shows change, not size. Positive feedback may go from five to ten, among thousands.", sub: "Sai. Gấp đôi chỉ cho biết mức đổi: phản hồi tốt có thể chỉ từ năm lên mười, trên hàng nghìn khách.", face: "stern" },
        { id: "l3", lang: "en", who: "det", say: "Two orders to four is double too. Your boss needs to know that.", sub: "Từ hai đơn lên bốn đơn cũng là gấp đôi. Sếp cần biết điều đó." },
        { id: "l4", lang: "en", who: "det", say: "Say both: it doubled, from five to ten.", sub: "Nói cả hai: “tăng gấp đôi, từ năm lên mười lượt”." },
      ] },
    { id: "s14", module: "TEXT-01", ref: "p14",
      data: { text: "Phần trăm đi đâu, số thật theo đó.", illus: "footprints" },
      lines: [{ id: "l1", lang: "en", say: "Wherever a percentage goes, the real number follows.", sub: "Phần trăm đi đâu, số thật theo đó." }] },

    // ---------- Chương 4: Biểu đồ ----------
    { id: "s15", module: "HOST-03", data: { n: 4, of: 6, title: "Có cần biểu đồ, vẽ thế nào?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part four: do you need a chart, and how do you draw it?", sub: "Phần bốn: có cần biểu đồ không, và vẽ thế nào?" }] },
    { id: "s16", module: "CMP-01", ref: "p15",
      data: { labels: ["Biểu đồ đường", "Biểu đồ cột"], left: "Xu hướng theo thời gian", right: "So sánh giữa các nhóm",
        illus: ["chart-increasing", "bar-chart"] },
      lines: [
        { id: "l1", lang: "en", say: "A simple chart is often easier than a table.", sub: "Một biểu đồ đơn giản thường dễ hiểu hơn bảng số." },
        { id: "l2", lang: "en", say: "Lines for a trend over time. Bars to compare groups.", sub: "Biểu đồ đường cho xu hướng theo thời gian, cột cho so sánh giữa các nhóm." },
      ] },
    { id: "s17", module: "CMP-07", ref: "p16",
      data: { wrong: "Đơn hàng theo tháng", right: "Đơn hàng tăng ba tháng liền", diff: ["theo tháng"],
        note: "Mỗi biểu đồ một ý; tiêu đề chính là ý đó. Tô nổi phần cần nhìn" },
      lines: [
        { id: "l1", lang: "en", say: "One chart, one message. The title is that message.", sub: "Mỗi biểu đồ nói một ý, và tiêu đề chính là ý đó." },
        { id: "l2", lang: "en", say: "Not “orders by month”, but “orders rose three months in a row”.", sub: "Không phải “Đơn hàng theo tháng”, mà “Đơn hàng tăng ba tháng liền”." },
        { id: "l3", lang: "en", say: "Colour the part you want your boss to see. Keep the rest pale.", sub: "Tô màu nổi phần muốn sếp nhìn, phần còn lại để màu nhạt." },
      ] },
    { id: "s18", module: "HOST-02", ref: "p17",
      data: { statement: "Trục dọc không bắt đầu từ số không cũng chẳng sao", truth: false,
        why: "Chênh lệch nhỏ trông rất lớn. Buộc phải cắt trục thì ghi chú rõ." },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "A vertical axis that doesn't start at zero is no problem. True or false?", sub: "Trục dọc không bắt đầu từ số không cũng chẳng sao. Đúng hay sai?" },
        { id: "l2", lang: "en", who: "det", say: "False. A small difference can look huge. If you must cut it, add a clear note.", sub: "Sai. Chênh nhỏ trông rất lớn. Buộc phải cắt trục thì ghi chú rõ.", face: "stern" },
      ] },

    // ---------- Chương 5: Giải thích nguyên nhân ----------
    { id: "s19", module: "HOST-03", data: { n: 5, of: 6, title: "Số tăng giảm, giải thích thế nào?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part five: explaining why a number went up or down.", sub: "Phần năm: số tăng hay giảm, giải thích nguyên nhân thế nào." }] },
    { id: "s20", module: "CMP-01", ref: "p18",
      data: { labels: ["Đã kiểm chứng", "Giả thuyết đang kiểm tra"], left: "“Doanh số giảm chủ yếu ở phía Bắc”", right: "“Có thể do đối thủ giảm giá, em đang kiểm tra”",
        illus: ["check-mark-button", "magnifying-glass-tilted-left"] },
      lines: [
        { id: "l1", lang: "en", say: "Separate checked facts from ideas you're still testing.", sub: "Tách rõ điều đã kiểm chứng và giả thuyết đang kiểm tra." },
        { id: "l2", lang: "en", say: "Sales fell mainly in the North. That's the data.", sub: "“Doanh số giảm chủ yếu ở phía Bắc, đó là số liệu.”" },
        { id: "l3", lang: "en", say: "The reason may be a competitor's price cut. I'm checking that.", sub: "“Lý do có thể là đối thủ giảm giá, điều này em đang kiểm tra ạ.”" },
      ] },
    { id: "s21", module: "TEXT-04", ref: "p19",
      data: { text: "Tháng nhiều bài đăng cũng nhiều đơn, nhưng có thể cả hai đều do mùa cao điểm.", marks: ["cả hai", "mùa cao điểm"], illus: "spiral-calendar" },
      lines: [
        { id: "l1", lang: "en", say: "Two numbers rising together doesn't mean one causes the other.", sub: "Hai con số cùng tăng không có nghĩa cái này gây ra cái kia." },
        { id: "l2", lang: "en", say: "More posts, more orders. But both may come from the busy season.", sub: "Tháng nhiều bài đăng cũng nhiều đơn, nhưng có thể cả hai do mùa cao điểm." },
      ] },
    { id: "s22", module: "SCENE-01", ref: "p20,p21",
      data: { set: "office", label: "Thử nghĩ xem",
        actors: [{ id: "dung", side: "center" }, { id: "det", side: "det" }],
        props: ["e-mail"] },
      lines: [
        { id: "l1", lang: "en", who: "dung", say: "Months with more ad emails had higher sales. Let's send twice as many!", sub: "Tháng nào gửi nhiều email thì doanh số cao. Gửi gấp đôi luôn!", face: "happy", pose: "thumb" },
        { id: "l2", lang: "en", who: "det", say: "Not yet. Were those months also the holiday season?", sub: "Chưa nên. Những tháng đó có trùng mùa lễ không?", face: "thinking", pose: "think", react: { dung: "thinking" } },
        { id: "l3", lang: "en", who: "det", say: "Compare months without holidays. If more emails still sell better, then you have a case.", sub: "So các tháng không có lễ. Gửi nhiều email vẫn bán tốt hơn thì đề xuất mới có cơ sở." },
        { id: "l4", lang: "en", who: "det", say: "Moving together doesn't always mean causing each other.", sub: "Đi cùng nhau chưa chắc là nguyên nhân của nhau.", pose: "point" },
      ] },

    // ---------- Chương 6: Số không đẹp ----------
    { id: "s23", module: "HOST-03", data: { n: 6, of: 6, title: "Khi số liệu không đẹp" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Last part: when the numbers don't look good.", sub: "Phần cuối: khi số liệu không đẹp thì trình bày ra sao." }] },
    { id: "s24", module: "CMP-06", ref: "p22,p23",
      data: { do: ["Cùng mốc, cùng cách tính như số tốt", "Nói bạn hiểu con số thế nào", "Đề xuất bước tiếp theo cụ thể"],
        dont: ["Đổi mốc, chọn khoảng thời gian đẹp hơn", "Chỉ hứa “tháng sau sẽ tốt hơn”"],
        doIcons: ["balance-scale", "light-bulb", "footprints"], dontIcons: ["calendar", "crossed-fingers"] },
      lines: [
        { id: "l1", lang: "en", say: "Show a bad number like a good one: same comparison, same method.", sub: "Đưa số xấu như số tốt: cùng mốc so sánh, cùng cách tính." },
        { id: "l2", lang: "en", say: "Don't pick another period just to make it look nicer.", sub: "Đừng đổi mốc hay chọn khoảng thời gian khác cho dễ coi." },
        { id: "l3", lang: "en", say: "Then say how you read it, and a next step: watch two more weeks, or check one process.", sub: "Rồi nói bạn hiểu số thế nào và bước tiếp theo: theo dõi thêm hai tuần, hay kiểm tra một khâu." },
      ] },
    { id: "s25", module: "END-03", ref: "p24,outro",
      data: { title: "Khung câu cho mọi con số", illus: "speech-balloon", items: [
        "Con số chính là…",
        "So với… thì…",
        "Nghĩa là…",
        "Em đề xuất…" ] },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "Take this frame for almost any number.", sub: "Mang khung này cho gần như mọi con số." },
        { id: "l2", lang: "en", who: "det", say: "The main number is… Compared with… That means… I suggest…", sub: "Con số chính là… So với… thì… Nghĩa là… Em đề xuất…" },
        { id: "l3", lang: "en", who: "det", say: "Pick three numbers from your last report, and write one sentence for each.", sub: "Chọn ba con số trong báo cáo gần nhất, viết cho mỗi số một câu theo khung." },
      ] },

    // ---------- Câu đố ----------
    { id: "s26", module: "QUIZ-01", ref: "questions[12]",
      data: {
        q: "Why can saying positive feedback doubled be misleading without the real counts?",
        options: [
          "It is never misleading, because a percentage always shows the true size clearly",
          "Doubling from five to ten sounds big, but it is tiny among thousands of customers",
          "Feedback numbers are always misleading, so they should never appear in reports",
        ],
        correct: 1, countdown: 5, illus: "chart-increasing",
        why: "Phần trăm cho biết mức thay đổi, không cho biết quy mô.",
      },
      lines: [
        { id: "l1", lang: "en", say: "Why can saying positive feedback doubled be misleading without the real counts?", sub: "Vì sao nói phản hồi tích cực tăng gấp đôi mà không kèm số thật có thể gây hiểu lầm?" },
        { id: "l2", lang: "en", say: "Doubling from five to ten sounds big, but it is tiny among thousands of customers.", sub: "Từ năm lên mười nghe lớn, nhưng rất nhỏ trên hàng nghìn khách." },
        { id: "l3", lang: "en", say: "A percentage shows how much it changed, not how big it is.", sub: "Phần trăm cho biết mức thay đổi, không cho biết quy mô." },
      ] },
    { id: "s27", module: "END-05",
      data: { text: "Bốn mươi câu về số liệu", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Your turn. Forty questions are waiting below.", sub: "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới." }] },
  ],
};
