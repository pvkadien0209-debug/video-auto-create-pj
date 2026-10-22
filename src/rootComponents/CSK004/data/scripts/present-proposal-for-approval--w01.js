// Kịch bản video W lần 3 (#110) — "Trình bày một đề xuất để xin sếp duyệt" · chuỗi "Báo cáo và thuyết trình trước sếp"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
export default {
  schema: "detpro.video-script/0.2",
  id: "present-proposal-for-approval--w01",
  hook: "HOOK-02",
  loop: { open: "s01", close: "s27" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "presenting-to-managers", slug: "present-proposal-for-approval", door: "ky-nang", level: "B1",
    title: "Trình bày một đề xuất để xin sếp duyệt", series: "Báo cáo và thuyết trình trước sếp" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Diễm, Uyên → Thảo; Hiếu, Quang (🧪 p15, chỉ nhắc trong lời kể) → Dũng; sếp (“anh”) → Cô Hoa (Thảo, Dũng gọi “chị”). Vai mới: không dùng (bài không có trẻ con, bà cụ, người nước ngoài). Chỗ đứng cả video: Thảo left, Dũng center, Cô Hoa right. Bài đã sửa p21–p22 (#107): câu mở gói cả vấn đề — kịch bản theo bản mới. DLG-01 s27: dựng từ p24–p25 (bài không có nhân vật cho ý này); câu sai là cãi ngay thay vì nhắc lại mối lo; mối lo của sếp lấy nguyên từ câu mẫu p25. LIST-06 s17: bài không nêu số chi phí, thời gian cụ thể nên thẻ chỉ ghi các cột cần so. Mục lục 7 chương dùng LIST-09. Phủ ý: 30/30. Câu đố questions[16] (p13).",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-03", ref: "p8",
      data: { set: "meeting",
        actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "right", pose: "hold" }],
        left: { label: "Nói luôn trong họp đông", ok: false },
        right: { label: "Gặp riêng sếp trước", ok: true } },
      lines: [
        { id: "a1", lang: "en", who: "thao", say: "I propose a new duty schedule for the whole department.", sub: "Em đề xuất đổi lịch trực cho cả phòng ạ.", phase: "a", pose: "explain" },
        { id: "a2", lang: "en", who: "hoa", say: "Let's leave it for later.", sub: "Để sau.", phase: "a", face: "thinking" },
        { id: "b1", lang: "en", who: "thao", say: "Ten minutes before the meeting: here's my draft. Any comments?", sub: "Mười phút trước buổi họp: chị góp ý giúp em bản nháp ạ?", phase: "b", pose: "give" },
        { id: "b2", lang: "en", who: "hoa", say: "Change this one part, and I'll support it.", sub: "Sửa chỗ này, rồi vào họp chị ủng hộ.", phase: "b", face: "happy" },
        { id: "l5", lang: "en", say: "Same idea, two results. So what gets a proposal approved?", sub: "Cùng một ý, hai kết quả. Vậy điều gì giúp đề xuất được duyệt?", wait: 300 },
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Đề xuất được duyệt nhờ", pose: "present",
        items: ["Bắt đầu từ vấn đề sếp lo", "Rõ cái giá, cái lợi", "Có phương án so sánh", "Xin bước nhỏ trước"] },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "Not the best idea wins. It's the one that starts from your boss's problem,", sub: "Không phải ý hay nhất thắng, mà là ý bắt đầu từ vấn đề sếp lo," },
        { id: "l2", lang: "en", who: "det", say: "shows the cost and the gain,", sub: "nói rõ cái giá và cái lợi," },
        { id: "l3", lang: "en", who: "det", say: "gives options to compare,", sub: "có phương án để so sánh," },
        { id: "l4", lang: "en", who: "det", say: "and asks for a small step first.", sub: "và xin một bước nhỏ trước." },
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Bảy chặng xin duyệt", illus: "compass", chapters: [
        { text: "Ý tưởng đáng đề xuất", illus: "light-bulb" }, { text: "Nói riêng trước", illus: "door" },
        { text: "Số liệu cần có", illus: "bar-chart" }, { text: "Nhiều phương án", illus: "balance-scale" },
        { text: "Bước nhỏ trước", illus: "footprints" }, { text: "Thứ tự trình bày", illus: "clipboard" },
        { text: "Phản đối và sau khi duyệt", illus: "check-mark-button" } ] },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "Seven stops: is the idea worth it, who to talk to first, which numbers.", sub: "Bảy chặng: ý có đáng đề xuất, nói riêng trước, cần số liệu gì." },
        { id: "l2", lang: "en", who: "det", say: "Options, a small first step, the order to present, and objections.", sub: "Phương án, bước nhỏ trước, thứ tự trình bày, và khi bị phản đối." },
      ] },

    // ---------- Chương 1: Ý tưởng có đáng đề xuất ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 7, title: "Ý tưởng có đáng đem đề xuất?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part one: is your idea worth proposing?", sub: "Phần một: ý tưởng của mình có đáng đem đi đề xuất không?" }] },
    { id: "s05", module: "LIST-13", ref: "p1,p2",
      data: { title: "Trước khi chuẩn bị", items: [
        { title: "Tự hỏi", detail: "Ý này giải quyết vấn đề gì? Vấn đề đó có nằm trong điều sếp lo?", illus: "thinking-face" },
        { title: "Viết vấn đề thành một câu có hậu quả", detail: "“Mỗi tuần nhóm mất nhiều giờ nhập tay đơn hàng, nên hay giao trễ.”", illus: "memo" } ] },
      lines: [
        { id: "l1", lang: "en", say: "Ask: what problem does it solve, and is that something your boss worries about?", sub: "Tự hỏi: ý này giải quyết vấn đề gì, và đó có phải điều sếp đang lo?" },
        { id: "l2", lang: "en", say: "Tied to team goals, it gets heard. “I just think it's nice” doesn't.", sub: "Gắn với mục tiêu nhóm thì dễ được nghe hơn “em thấy hay”." },
        { id: "l3", lang: "en", say: "Write the problem in one sentence, with what goes wrong: we lose hours typing orders, so we deliver late.", sub: "Viết vấn đề thành một câu có hậu quả: “Nhóm mất nhiều giờ nhập tay đơn, nên hay giao trễ.”" },
      ] },
    { id: "s06", module: "DLG-01", ref: "p3,p4",
      data: { set: "office", label: "Trước – sau",
        actors: [{ id: "dung", side: "center" }, { id: "hoa", side: "right", pose: "hold" }],
        verdict: { ok: false, label: "Mở đầu bằng tính năng phần mềm",
          why: "Sếp chưa thấy vấn đề, nên giải pháp chưa có lý do để tồn tại.",
          rule: "Bán vấn đề trước, bán giải pháp sau" } },
      lines: [
        { id: "l1", lang: "en", who: "dung", say: "This software has drag and drop, reminders, and really nice charts!", sub: "Phần mềm này kéo thả được, có nhắc việc, biểu đồ rất đẹp ạ!", face: "happy", pose: "explain" },
        { id: "l2", lang: "en", who: "hoa", say: "What's wrong with the one we use now?", sub: "Cái mình đang dùng có vấn đề gì?", face: "thinking" },
        { id: "l3", lang: "en", who: "dung", say: "Well… um…", sub: "Dạ… ờ…", face: "worried", pose: "shrug", stop: true },
        { id: "l4", lang: "en", who: "det", say: "Wait a second!", sub: "Khoan đã!", face: "stern" },
        { id: "l5", lang: "en", who: "det", say: "Start with a problem your boss has seen. Then the tool has a reason.", sub: "Mở bằng vấn đề sếp đã thấy, giải pháp mới có lý do.", pose: "point" },
        { id: "l6", lang: "en", who: "det", say: "Let's rewind and try again.", sub: "Tua lại, thử lại nhé.", phase: "redo" },
        { id: "l7", lang: "en", who: "dung", say: "We often miss deadlines. Our tasks are spread across email, notebooks and messages.", sub: "Nhóm mình hay sót hạn vì việc rải rác ở email, sổ tay và tin nhắn.", phase: "redo", pose: "explain" },
        { id: "l8", lang: "en", who: "dung", say: "I suggest trying a tool that puts everything in one place.", sub: "Em đề xuất thử một phần mềm gom hết về một chỗ.", phase: "redo" },
        { id: "l9", lang: "en", who: "hoa", say: "Okay, let's try it.", sub: "Được, cho thử.", phase: "redo", face: "happy" },
      ] },

    // ---------- Chương 2: Nói trước với sếp ----------
    { id: "s07", module: "HOST-03", data: { n: 2, of: 7, title: "Nói trước, hay để dành cho buổi họp?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part two: tell your boss first, or save it for the meeting?", sub: "Phần hai: nói trước với sếp, hay để dành cho buổi họp?" }] },
    { id: "s08", module: "TEXT-07", ref: "p5,p6",
      data: { en: "Could I have ten minutes this week to share an idea on late deliveries?", vi: "Em có một ý về việc giảm giao hàng trễ, chị cho em mười phút tuần này được không ạ?",
        chunks: [{ en: "Could I have ten minutes this week", vi: "chị cho em mười phút tuần này" }, { en: "to share an idea", vi: "để nghe sơ một ý" }, { en: "on late deliveries?", vi: "về giao hàng trễ?" }], illus: "spiral-calendar" },
      lines: [
        { id: "l1", lang: "en", say: "For an important proposal, talk briefly with your boss before the formal meeting.", sub: "Đề xuất quan trọng: nói sơ qua với sếp trong một cuộc trao đổi ngắn trước buổi họp chính thức." },
        { id: "l2", lang: "en", say: "They have time to think, comment early, and aren't surprised in front of others.", sub: "Sếp có thời gian suy nghĩ, góp ý sớm, và không bị bất ngờ trước người khác." },
        { id: "l3", lang: "en", say: "Could I have ten minutes this week to share an idea on late deliveries, before I write the details?", sub: "“Chị cho em mười phút tuần này để nghe sơ qua một ý về giảm giao trễ, trước khi em làm bản chi tiết ạ?”" },
      ] },
    { id: "s09", module: "TEXT-04", ref: "p7",
      data: { text: "Đề xuất liên quan phòng khác? Hỏi ý họ trước: “Bên em đã trao đổi với phòng kho, họ đồng ý.”", marks: ["hỏi ý họ trước"], illus: "handshake" },
      lines: [
        { id: "l1", lang: "en", say: "Does it affect another team? Ask them first.", sub: "Đề xuất liên quan đến phòng khác? Hỏi ý họ trước." },
        { id: "l2", lang: "en", say: "“We've talked to the warehouse team, and they agree.” That calms your boss a lot.", sub: "“Bên em đã trao đổi với phòng kho, họ đồng ý.” Sếp yên tâm hơn nhiều." },
      ] },
    { id: "s10", module: "TEXT-01", ref: "p8,p9",
      data: { text: "Nói riêng trước, họp chung sau.", illus: "door" },
      lines: [
        { id: "l2", lang: "en", say: "Talk in private first. The group meeting comes after.", sub: "Nói riêng trước, họp chung sau." },
      ] },

    // ---------- Chương 3: Số liệu và thông tin ----------
    { id: "s11", module: "HOST-03", data: { n: 3, of: 7, title: "Chuẩn bị số liệu, thông tin gì?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part three: which numbers and facts to prepare.", sub: "Phần ba: cần chuẩn bị những con số và thông tin gì?" }] },
    { id: "s12", module: "LIST-02", ref: "p10",
      data: { title: "Bốn câu sếp gần như chắc chắn hỏi", illus: "red-question-mark", items: [
        { icon: "wallet", illus: "money-bag", text: "Tốn gì: tiền, thời gian, người" },
        { icon: "trending-up", illus: "chart-increasing", text: "Được gì, đo bằng cách nào" },
        { icon: "triangle-alert", illus: "warning", text: "Rủi ro gì, xử lý ra sao" },
        { icon: "hourglass", illus: "hourglass-not-done", text: "Bao lâu thấy kết quả" } ] },
      lines: [
        { id: "l1", lang: "en", say: "What does it cost: money, time, people?", sub: "Tốn gì: tiền, thời gian, người?" },
        { id: "l2", lang: "en", say: "What do we gain, and how do we measure it?", sub: "Được gì, đo bằng cách nào?" },
        { id: "l3", lang: "en", say: "What are the risks, and how will you handle them?", sub: "Rủi ro là gì, xử lý ra sao?" },
        { id: "l4", lang: "en", say: "And how long until we see results?", sub: "Và cần bao lâu để thấy kết quả?" },
      ] },
    { id: "s13", module: "HOST-02", ref: "p11",
      data: { statement: "Một con số tròn trịa đáng tin hơn một con số ước tính", truth: false,
        why: "Ước tính ghi rõ là ước tính, nói dựa vào đâu, đáng tin hơn số tròn không rõ từ đâu." },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "A nice round number is more believable than an estimate. True or false?", sub: "Con số tròn trịa đáng tin hơn con số ước tính. Đúng hay sai?" },
        { id: "l2", lang: "en", who: "det", say: "False. Call it an estimate and say what it's based on. That beats a number from nowhere.", sub: "Sai. Ghi rõ là ước tính và dựa vào đâu: đáng tin hơn số tròn không rõ nguồn.", face: "stern" },
      ] },
    { id: "s14", module: "CMP-01", ref: "p12",
      data: { labels: ["Tự nêu rủi ro", "Để sếp tự phát hiện"], left: "Sếp thấy bạn đã nghĩ kỹ", right: "Sếp nghi cả những phần còn lại",
        illus: ["thumbs-up", "face-with-raised-eyebrow"] },
      lines: [
        { id: "l1", lang: "en", say: "Be honest about the weak side too. Name each risk and how you'd handle it.", sub: "Nói thật cả mặt chưa tốt: tự nêu rủi ro và cách xử lý." },
        { id: "l2", lang: "en", say: "Name it yourself, and you look careful. Let your boss find it, and they doubt the rest.", sub: "Tự nêu thì sếp thấy bạn nghĩ kỹ; sếp tự phát hiện thì nghi cả phần còn lại." },
      ] },

    // ---------- Chương 4: Nhiều phương án ----------
    { id: "s15", module: "HOST-03", data: { n: 4, of: 7, title: "Có nên đưa nhiều phương án?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part four: should you bring several options?", sub: "Phần bốn: có nên đưa nhiều phương án không?" }] },
    { id: "s16", module: "LIST-13", ref: "p13,p14",
      data: { title: "Đưa phương án", items: [
        { title: "Hai đến ba phương án", detail: "Kể cả “giữ nguyên như hiện tại”; nói rõ bạn đề nghị cái nào, vì sao.", illus: "balance-scale" },
        { title: "So trên cùng tiêu chí", detail: "Chi phí, thời gian, rủi ro, lợi ích: một bảng nhỏ rõ hơn ba trang chữ.", illus: "clipboard" } ] },
      lines: [
        { id: "l1", lang: "en", say: "Bring two or three options, including keeping things as they are.", sub: "Đưa hai đến ba phương án, kể cả “giữ nguyên như hiện tại”." },
        { id: "l2", lang: "en", say: "That shows the cost of doing nothing. Then say which one you suggest, and why.", sub: "Nó cho thấy cái giá của việc không làm gì. Rồi nói rõ bạn đề nghị cái nào, vì sao." },
        { id: "l3", lang: "en", say: "Compare them on the same points: cost, time, risk, benefit. A small table beats three pages.", sub: "So trên cùng tiêu chí: chi phí, thời gian, rủi ro, lợi ích. Một bảng nhỏ rõ hơn ba trang chữ." },
      ] },
    { id: "s17", module: "LIST-06", ref: "p15",
      data: { title: "Làm mẫu: Dũng đề xuất làm video quảng cáo", steps: [
        { text: "Ba cách: công ty ngoài, nhóm tự làm, người làm tự do", illus: "movie-camera" },
        { text: "Mỗi cách: chi phí, thời gian, rủi ro trên một bảng", illus: "clipboard" },
        { text: "Chọn một cách, nói rõ vì sao", illus: "check-mark-button" },
        { text: "Đoán trước câu sếp hỏi, chuẩn bị sẵn", illus: "red-question-mark" } ] },
      lines: [
        { id: "l1", lang: "en", say: "Dung wants an ad video. He lists three ways: an outside company, his own team, or a freelancer.", sub: "Dũng muốn làm video quảng cáo, liệt kê ba cách: thuê công ty ngoài, nhóm tự làm, thuê người tự do." },
        { id: "l2", lang: "en", say: "For each, he writes cost, time and risk in one table.", sub: "Với mỗi cách, ghi chi phí, thời gian và rủi ro trên cùng một bảng." },
        { id: "l3", lang: "en", say: "He picks the outside company, because the team has no video editor yet.", sub: "Chọn thuê công ty ngoài, vì nhóm chưa có người dựng phim." },
        { id: "l4", lang: "en", say: "He expects: what if our team made it? When the boss asks, he points at the table, and she decides.", sub: "Đoán trước câu “Nhóm mình tự làm thì sao?”. Sếp hỏi đúng câu đó, Dũng chỉ vào bảng, sếp quyết ngay." },
      ] },
    { id: "s18", module: "TEXT-01", ref: "p16",
      data: { text: "Mang một lựa chọn, sếp hỏi thêm; mang ba, sếp chọn luôn.", illus: "balance-scale" },
      lines: [{ id: "l1", lang: "en", say: "Bring one choice, and your boss asks for more. Bring three, and your boss picks.", sub: "Mang một lựa chọn, sếp hỏi thêm; mang ba lựa chọn, sếp chọn luôn." }] },

    // ---------- Chương 5: Bước nhỏ trước ----------
    { id: "s19", module: "HOST-03", data: { n: 5, of: 7, title: "Xin lớn ngay hay bước nhỏ trước?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part five: ask big now, or a small step first?", sub: "Phần năm: xin lớn ngay hay xin một bước nhỏ trước?" }] },
    { id: "s20", module: "CMP-01", ref: "p17",
      data: { labels: ["Xin lớn ngay", "Xin thử nhỏ trước"], left: "Khoản lớn, chưa có gì chứng minh", right: "Một nhóm, một tháng, một phần ngân sách",
        illus: ["money-bag", "seedling"] },
      lines: [
        { id: "l1", lang: "en", say: "Costly or a big change? Ask for a small trial: one team, one month, part of the budget.", sub: "Tốn kém hoặc thay đổi nhiều? Xin thử nhỏ: một nhóm, một tháng, một phần ngân sách." },
        { id: "l2", lang: "en", say: "Less risk for your boss, and real proof for you to ask again.", sub: "Ít rủi ro cho sếp, và cho bạn bằng chứng thật để xin tiếp." },
      ] },
    { id: "s20b", module: "TEXT-07", ref: "p18",
      data: { en: "After one month, I'll report late orders compared with before the trial.", vi: "Sau một tháng, em sẽ báo lại số đơn giao trễ so với trước khi thử.",
        chunks: [{ en: "After one month,", vi: "sau một tháng" }, { en: "I'll report late orders", vi: "em báo lại số đơn giao trễ" }, { en: "compared with before the trial.", vi: "so với trước khi thử" }], illus: "chart-decreasing" },
      lines: [
        { id: "l1", lang: "en", say: "Say what the trial will measure, and when you'll report back:", sub: "Nói rõ thử nghiệm đo bằng gì và khi nào báo lại:" },
        { id: "l2", lang: "en", say: "After one month, I'll report late orders compared with before the trial.", sub: "“Sau một tháng, em sẽ báo lại số đơn giao trễ so với trước khi thử.”" },
      ] },
    { id: "s21", module: "SCENE-01", ref: "p19,p20",
      data: { set: "office", label: "Tình huống",
        actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "right" }] },
      lines: [
        { id: "l1", lang: "en", say: "Thao asked for a full year's budget for a new sales channel. Big money, no proof. Her boss said no.", sub: "Thảo xin ngân sách cả năm cho kênh bán mới. Tiền lớn, chưa có chứng minh: sếp từ chối." },
        { id: "l2", lang: "en", who: "thao", say: "Could I run a one-month trial with one product group?", sub: "Em xin chạy thử một tháng với một nhóm sản phẩm được không ạ?", face: "thinking", pose: "explain" },
        { id: "l3", lang: "en", say: "One month later, the results are good enough.", sub: "Một tháng sau, kết quả đủ tốt." },
        { id: "l4", lang: "en", who: "hoa", say: "How much would you need to expand it?", sub: "Mở rộng thêm thì cần bao nhiêu?", face: "happy", react: { thao: "happy" } },
        { id: "l5", lang: "en", say: "Ask for a small step, and win the long road.", sub: "Xin bước nhỏ, được đường dài." },
      ] },

    // ---------- Chương 6: Thứ tự trình bày ----------
    { id: "s22", module: "HOST-03", data: { n: 6, of: 7, title: "Trình bày theo thứ tự nào?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part six: in what order should you present?", sub: "Phần sáu: trình bày đề xuất theo thứ tự nào?" }] },
    { id: "s23", module: "LIST-05", ref: "p21",
      data: { title: "Thứ tự dễ theo", illus: "clipboard", items: [
        "Một câu: điều bạn xin, gắn với vấn đề", "Vấn đề và hậu quả", "Các phương án, phương án bạn đề nghị", "Chi phí, lợi ích, rủi ro", "Bước tiếp theo cần sếp đồng ý" ] },
      lines: [
        { id: "l1", lang: "en", say: "One sentence: what you ask for, tied to the problem it solves.", sub: "Một câu nêu điều bạn xin, gắn với vấn đề nó giải quyết." },
        { id: "l2", lang: "en", say: "The problem and what it causes. The options, and the one you suggest.", sub: "Vấn đề và hậu quả. Các phương án và phương án bạn đề nghị." },
        { id: "l3", lang: "en", say: "Cost, benefit, risk. And the next step you need your boss to approve.", sub: "Chi phí, lợi ích, rủi ro. Và bước tiếp theo bạn cần sếp đồng ý." },
      ] },
    { id: "s24", module: "TEXT-07", ref: "p22",
      data: { en: "Please approve a one-month trial of the order software for retail, to cut late deliveries.", vi: "Em xin chị duyệt thử nghiệm phần mềm nhập đơn trong một tháng cho nhóm bán lẻ, để giảm giao trễ.",
        chunks: [{ en: "Please approve a one-month trial", vi: "em xin duyệt thử nghiệm một tháng" }, { en: "of the order software for retail,", vi: "phần mềm nhập đơn cho nhóm bán lẻ" }, { en: "to cut late deliveries.", vi: "để giảm giao trễ" }], illus: "light-bulb" },
      lines: [
        { id: "l1", lang: "en", say: "An opening line that packs in the problem:", sub: "Câu mở mẫu, gói luôn vấn đề trong lời xin:" },
        { id: "l2", lang: "en", say: "Please approve a one-month trial of the order software for retail, to cut late deliveries.", sub: "“Em xin chị duyệt thử nghiệm phần mềm nhập đơn một tháng cho nhóm bán lẻ, để giảm giao trễ.”" },
        { id: "l3", lang: "en", say: "Let me quickly go through the reasons and the cost.", sub: "“Em trình bày nhanh lý do và chi phí ạ.”" },
      ] },
    { id: "s25", module: "CMP-07", ref: "p23",
      data: { wrong: "What do you think?", right: "Can I start next Monday?", diff: ["What do you think?"],
        note: "Kết bằng câu hỏi sếp trả lời được; “Anh thấy sao?” dễ dẫn đến “để anh xem”" },
      lines: [
        { id: "l1", lang: "en", say: "End with a question your boss can answer: can I start next Monday?", sub: "Kết bằng câu hỏi sếp trả lời được: “Chị đồng ý cho em bắt đầu từ thứ Hai tới không ạ?”" },
        { id: "l2", lang: "en", say: "Not: what do you think? That easily leads to: let me see.", sub: "Đừng kết bằng “Chị thấy sao ạ?”, vì dễ dẫn đến “để chị xem”." },
      ] },

    // ---------- Chương 7: Phản đối và sau khi duyệt ----------
    { id: "s26", module: "HOST-03", data: { n: 7, of: 7, title: "Bị phản đối, và khi được duyệt" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Last part: objections, and what to do once it's approved.", sub: "Phần cuối: sếp phản đối thì sao, và được duyệt rồi làm gì." }] },
    { id: "s27", module: "DLG-01", ref: "p24,p25",
      data: { set: "office", label: "Sếp lo",
        actors: [{ id: "dung", side: "center" }, { id: "hoa", side: "right", pose: "hold" }],
        verdict: { ok: false, label: "Cãi ngay khi sếp nêu mối lo",
          why: "Phản đối thường là sếp đang nghiêm túc cân nhắc. Nghe hết, nhắc lại mối lo rồi mới trả lời.",
          rule: "Nhắc lại mối lo bằng lời của mình" } },
      lines: [
        { id: "l1", lang: "en", who: "hoa", say: "I'm worried the team will lose time learning new software.", sub: "Chị lo nhóm sẽ mất thời gian làm quen phần mềm mới.", face: "thinking" },
        { id: "l2", lang: "en", who: "dung", say: "No, no, it's really easy! Trust me!", sub: "Không đâu chị, dễ lắm! Chị cứ tin em!", face: "happy", pose: "stop", stop: true },
        { id: "l3", lang: "en", who: "det", say: "Wait a second!", sub: "Khoan đã!", face: "stern" },
        { id: "l4", lang: "en", who: "det", say: "An objection means she's taking it seriously. Repeat her worry in your own words first.", sub: "Phản đối là sếp đang nghiêm túc cân nhắc. Nhắc lại mối lo bằng lời của mình trước.", pose: "point" },
        { id: "l5", lang: "en", who: "det", say: "Let's rewind and try again.", sub: "Tua lại, thử lại nhé.", phase: "redo" },
        { id: "l6", lang: "en", who: "dung", say: "I understand you're worried the team will lose time learning it.", sub: "Em hiểu chị lo nhóm sẽ mất thời gian làm quen phần mềm mới.", phase: "redo", face: "neutral" },
        { id: "l7", lang: "en", who: "dung", say: "I suggest testing with two people first. If work slows down, I'll stop.", sub: "Em đề xuất thử với hai người trước, nếu chậm việc em sẽ dừng.", phase: "redo", pose: "explain", face: "happy" },
      ] },
    { id: "s28", module: "LIST-13", ref: "p26,p27",
      data: { title: "Chưa được duyệt ngay", items: [
        { title: "Sếp nói “để chị suy nghĩ”", detail: "“Em gửi thêm gì để chị dễ quyết hơn ạ? Thứ Sáu em hỏi lại chị được không ạ?”", illus: "thinking-face" },
        { title: "Sếp từ chối", detail: "Hỏi lý do và điều kiện để xem lại sau.", illus: "hourglass-not-done" } ] },
      lines: [
        { id: "l1", lang: "en", say: "Let me think about it? Ask what would help, and when to check back:", sub: "Sếp nói “để chị suy nghĩ”? Hỏi cần thêm gì, và hẹn lúc quay lại:" },
        { id: "l2", lang: "en", say: "What else can I send to help you decide? May I check with you on Friday?", sub: "“Em gửi thêm gì để chị dễ quyết hơn ạ? Thứ Sáu em hỏi lại chị được không ạ?”" },
        { id: "l3", lang: "en", say: "A no? Ask the reasons, and the conditions to look at it again. Today's no is often “not yet”.", sub: "Bị từ chối? Hỏi lý do và điều kiện xem lại. Lời từ chối hôm nay thường là “chưa phải lúc”." },
      ] },
    { id: "s29", module: "LIST-07", ref: "p28,p29",
      data: { title: "Được duyệt: trong ngày, ghi lại", items: [
        { text: "Phạm vi", illus: "world-map" },
        { text: "Ngân sách", illus: "money-bag" },
        { text: "Thời gian", illus: "spiral-calendar" },
        { text: "Khi nào báo kết quả", illus: "alarm-clock" } ] },
      lines: [
        { id: "l1", lang: "en", say: "Approved? The same day, send a message: scope, budget, timeline, and when you'll report.", sub: "Được duyệt? Trong ngày, nhắn lại: phạm vi, ngân sách, thời gian, khi nào báo kết quả." },
        { id: "l2", lang: "en", say: "Then report back on time, honestly, even if results aren't as hoped.", sub: "Rồi báo lại đúng hẹn, trung thực, kể cả khi kết quả chưa như mong đợi." },
        { id: "l3", lang: "en", say: "People who get approved next time reported honestly last time.", sub: "Người được duyệt lần sau thường là người đã báo lại trung thực lần trước." },
      ] },
    { id: "s30", module: "END-03", ref: "p30",
      data: { title: "Danh sách mang theo", illus: "clipboard", items: [
        "Vấn đề viết thành một câu", "Đã nói riêng với sếp trước", "Chi phí, lợi ích, rủi ro; hai đến ba phương án", "Có thể xin thử nhỏ", "Câu kết là câu hỏi sếp trả lời được" ] },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "Your checklist: the problem in one sentence, and a private talk first.", sub: "Danh sách: vấn đề viết thành một câu, đã nói riêng với sếp trước." },
        { id: "l2", lang: "en", who: "det", say: "Costs, benefits, risks, and two or three options.", sub: "Chi phí, lợi ích, rủi ro, và hai đến ba phương án." },
        { id: "l3", lang: "en", who: "det", say: "A small trial if possible, and a closing question your boss can answer.", sub: "Có thể xin thử nhỏ, và câu kết là câu hỏi sếp trả lời được." },
      ] },
    { id: "s31", module: "END-02", ref: "outro",
      data: { points: ["Bán vấn đề trước, giải pháp sau", "Mang hai, ba phương án", "Xin bước nhỏ, kết bằng câu hỏi rõ"],
        icons: ["light-bulb", "balance-scale", "footprints"] },
      lines: [
        { id: "l1", lang: "en", say: "Asking for approval isn't begging a favour. It helps your boss make a good decision.", sub: "Xin duyệt không phải xin ân huệ, mà là giúp sếp ra quyết định tốt với đủ thông tin." },
        { id: "l2", lang: "en", say: "Today, write the problem your idea solves in one sentence, and what happens if nothing is done.", sub: "Hôm nay, viết vấn đề ý tưởng của bạn giải quyết thành một câu, kèm hậu quả nếu không làm gì." },
      ] },

    // ---------- Câu đố ----------
    { id: "s32", module: "QUIZ-01", ref: "questions[16]",
      data: {
        q: "How many options should you bring when asking your boss to approve something?",
        options: [
          "As many as possible, and let the boss choose without your recommendation",
          "Two or three, including keeping things as they are, and say which one you recommend",
          "Only one, because more options make the boss confused and slow to decide",
        ],
        correct: 1, countdown: 5, illus: "balance-scale",
        why: "Có lựa chọn, sếp thấy mình đang quyết chứ không bị đẩy vào một đường.",
      },
      lines: [
        { id: "l1", lang: "en", say: "How many options should you bring when asking your boss to approve something?", sub: "Khi xin sếp duyệt, nên mang theo bao nhiêu phương án?" },
        { id: "l2", lang: "en", say: "Two or three, including keeping things as they are, and say which one you recommend.", sub: "Hai đến ba, kể cả giữ nguyên, và nói rõ bạn đề nghị phương án nào." },
        { id: "l3", lang: "en", say: "With choices, your boss is deciding, not being pushed down one road.", sub: "Có lựa chọn, sếp thấy mình đang quyết, không bị đẩy vào một đường." },
      ] },
    { id: "s33", module: "END-05",
      data: { text: "Bốn mươi câu để xin duyệt", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Your turn. Forty questions are waiting below.", sub: "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới." }] },
  ],
};
