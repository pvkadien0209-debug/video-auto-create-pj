// Kịch bản video W lần 3 (#110) — "Làm sao nghĩ ra nhiều phương án?" · chuỗi "Giải quyết vấn đề và ra quyết định"
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-come-up-with-more-solutions--w01",
  hook: "HOOK-01",
  loop: { open: "s01", close: "s35" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (A)
  unit: { audience: "workplace-problem-solvers", slug: "how-to-come-up-with-more-solutions", door: "ky-nang", level: "B1",
    title: "Làm sao nghĩ ra nhiều phương án thay vì chỉ một?", series: "Giải quyết vấn đề và ra quyết định" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Đạt → Dũng; Kim (chủ trì họp) → Thảo; người chê ý trong buổi họp (bài không nêu tên) → Bác Bình; Dũng nêu ý trong buổi họp (bài không nêu nội dung ý nên câu thoại chỉ là “Em có một ý”). Thịnh (📌 p8) và nhóm của Loan (❓ p12) kể không tên, dựng bằng thẻ. Vai mới (Bin, Bà Tư, Sam): bài không có trẻ con, bà cụ hay người nước ngoài nên không dùng. Chỗ đứng cố định: Thảo left, Dũng center, Bác Bình right; cảnh nhiều người duy nhất là DLG-01 buổi họp (< 40 s). Kết quả Cách B của 🔀 p17 do người kể đọc trong phần làm lại. Câu đố đổi sang questions[16] (không tên). Không dùng câu “suýt gửi” (đã bỏ ở #107); kết theo outro mới “ít nhất ba phương án thật sự khác nhau”. Phủ ý: 25/25. #112 nhịp hình (§9): tách hoặc đổi module các cảnh s14, s17, giữ lời đọc và ref.",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "p5",
      data: { set: "office", label: "Chuyện của Dũng", props: ["money-bag"], actors: [{ id: "dung", side: "center", pose: "stand" }] },
      lines: [
        L("l1", null, "Dũng's team must cut running costs. The first idea comes at once.", "Phòng của Dũng phải giảm chi phí vận hành. Ý đầu tiên bật ra ngay."),
        L("l2", "dung", "Easy. We cut the end-of-quarter bonus.", "Dễ thôi. Cắt khoản thưởng cuối quý.", { pose: "explain", face: "neutral" }),
        L("l3", null, "But before sending it, he tried something. That night, he had nine ideas. How?", "Nhưng trước khi gửi, anh thử một việc. Tối đó anh có chín cách. Bằng cách nào?"),
      ], beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Nghĩ ra nhiều phương án", pose: "present", items: ["Bốn hướng nghĩ", "“Không làm gì” và “thử nhỏ”", "Gom ý trước, chấm sau"] },
      lines: [
        L("l1", "det", "How do you find more options than the first one? It's a skill you can practise.", "Làm sao nghĩ ra nhiều phương án thay vì một? Đây là kỹ năng tập được."),
        L("l2", "det", "Four directions to think.", "Bốn hướng nghĩ."),
        L("l3", "det", "Two options to always include.", "Hai phương án luôn nên có."),
        L("l4", "det", "And one rule: collect first, judge later.", "Và một luật: gom ý trước, chấm sau."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng của bài", illus: "compass",
        chapters: ["Chỉ nghĩ ra một cách", "Bốn hướng nghĩ", "Không làm gì và thử nhỏ", "Họp động não", "Dùng lại cách cũ", "Bao nhiêu là đủ"] },
      lines: [
        L("l1", null, "One idea only, four directions, and two default options.", "Chỉ một cách, bốn hướng nghĩ, hai phương án mặc định."),
        L("l2", null, "Then brainstorming, old methods, and how many is enough.", "Rồi họp động não, cách cũ, và bao nhiêu là đủ."),
      ] },

    // ---------- Chương 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Chỉ nghĩ ra một cách" },
      lines: [L("l1", "det", "Part one: only one idea in your head. Is that a problem?", "Phần một: đầu chỉ nghĩ ra một cách, có sao không?")] },
    { id: "s05", module: "LIST-01", ref: "p1",
      data: { title: "Ý đầu tiên thường là ý quen nhất", illus: "brain", items: ["Cách đã làm năm ngoái", "Cách bên khác đang làm", "Cách người nói to nhất vừa nêu"] },
      lines: [
        L("l1", null, "Under pressure, you see one way out, and grab the first idea.", "Khi bị dồn, ta chỉ thấy một lối ra và chộp ý đầu tiên."),
        L("l2", null, "Last year's way, another team's way, or the loudest person's idea.", "Cách năm ngoái, cách bên khác làm, hay ý người nói to nhất."),
        L("l3", null, "It isn't always wrong. But with nothing to compare, you can't tell how good it is.", "Không hẳn sai, nhưng không có gì để so thì không biết nó tốt đến đâu."),
      ] },
    { id: "s06", module: "CMP-01", ref: "p2",
      data: { labels: ["Chỉ “làm” hoặc “không làm”", "Có ba bốn phương án"], left: "Cuộc bàn dễ thành cãi nhau hai phe",
        right: "Mọi người so sánh, thường tìm ra cách dung hoà tốt hơn cả hai phía", illus: ["anger-symbol", "balance-scale"] },
      lines: [
        L("l1", null, "Only do it or don't? The talk turns into two sides arguing.", "Chỉ có “làm” hay “không làm”? Dễ thành cãi nhau hai phe."),
        L("l2", null, "With three or four options, people compare, and often find a better middle way.", "Có ba bốn phương án, mọi người so sánh, thường ra cách dung hoà tốt hơn."),
      ] },
    { id: "s07", module: "TEXT-07", ref: "p3",
      data: { en: "I looked at three options, and this one fits best because...", vi: "Em đã xem ba cách, và cách này hợp nhất vì…",
        chunks: [{ en: "I looked at", vi: "em đã xem" }, { en: "three options,", vi: "ba cách" }, { en: "and this one fits best", vi: "và cách này hợp nhất" }, { en: "because...", vi: "vì…" }], illus: "man-office-worker" },
      lines: [
        L("l1", null, "More options also make you stronger when your manager asks why.", "Nhiều phương án còn giúp bạn vững hơn khi sếp hỏi lại."),
        L("l2", null, "Not just I chose this. But: I looked at three options, and this one fits best because...", "Không chỉ “em chọn cách này”, mà “em đã xem ba cách, và cách này hợp nhất vì…”."),
      ] },

    // ---------- Chương 2 ----------
    { id: "s08", module: "HOST-03", data: { n: 2, of: 6, title: "Bí ý: đi qua bốn hướng" },
      lines: [L("l1", "det", "Part two: stuck? Try four directions.", "Phần hai: bí ý thì đi qua bốn hướng.")] },
    { id: "s09", module: "LIST-11", ref: "p4",
      data: { title: "Bốn câu tự hỏi", illus: "compass", items: [
        { text: "Bớt đi: bỏ bước nào, ngừng việc gì?", illus: "wastebasket" },
        { text: "Thêm vào: người, công cụ, thông tin gì?", illus: "package" },
        { text: "Đổi cách: thứ tự, giờ, kênh, người làm khác?", illus: "counterclockwise-arrows-button" },
        { text: "Hỏi người trong cuộc: khách, tuyến đầu nghĩ gì?", illus: "speech-balloon" } ] },
      lines: [
        L("l1", null, "Remove: which step can go, what can stop?", "Bớt đi: bỏ được bước nào, ngừng việc gì?"),
        L("l2", null, "Add: which people, tools, or information?", "Thêm vào: bổ sung người, công cụ, thông tin gì?"),
        L("l3", null, "Change the way: another order, time, channel, or person?", "Đổi cách: thứ tự khác, giờ khác, kênh khác, người khác làm?"),
        L("l4", null, "Ask the people involved: customers, frontline colleagues.", "Hỏi người trong cuộc: khách, đồng nghiệp tuyến đầu."),
      ] },
    { id: "s10", module: "LIST-11", ref: "p5",
      data: { title: "Bốn hướng Dũng đi qua", illus: "compass", items: [
        { text: "Bớt đi: ngừng in báo cáo không ai đọc", illus: "wastebasket" },
        { text: "Thêm vào: hỏi giá văn phòng phẩm mua theo quý", illus: "package" },
        { text: "Đổi cách: gộp chuyển phát lẻ thành một chuyến mỗi ngày", illus: "delivery-truck" },
        { text: "Hỏi người trong cuộc: khoản nào tốn mà ít dùng?", illus: "speech-balloon" } ] },
      lines: [
        L("l1", null, "Dũng's turn. Remove: stop printing reports nobody reads.", "Đến lượt Dũng. Bớt đi: ngừng in báo cáo không ai đọc."),
        L("l2", null, "Add: ask the supplier for a price when buying by the quarter.", "Thêm vào: hỏi giá văn phòng phẩm khi mua theo quý."),
        L("l3", null, "Change the way: one courier trip a day, not many small ones.", "Đổi cách: gộp chuyển phát lẻ thành một chuyến mỗi ngày."),
        L("l4", null, "Ask: which costs are high but little used?", "Hỏi bạn giữ quỹ: khoản nào tốn mà ít dùng?"),
        L("l5", null, "Nine ideas. Three small ones saved almost as much as the bonus.", "Chín cách. Ba cách nhỏ cộng lại gần bằng khoản thưởng, không ai mất động lực."),
      ] },
    { id: "s11", module: "TEXT-01", ref: "p6",
      data: { text: "Ý đầu tiên là ý quen nhất, chưa chắc là ý hay nhất.", illus: "light-bulb" },
      lines: [L("l1", null, "The first idea is the most familiar one, not always the best.", "Ý đầu tiên là ý quen nhất, chưa chắc là ý hay nhất.")] },
    { id: "s12", module: "HOST-02", ref: "p7",
      data: { statement: "Hướng hay bị quên nhất là “hỏi người trong cuộc”", truth: true,
        why: "Vì ta nghĩ mình hiểu vấn đề rồi. Người đang gặp chuyện thường có ý rất thực tế." },
      lines: [
        L("l1", "det", "The most forgotten direction is asking the people involved. True or false?", "Hướng hay bị quên nhất là hỏi người trong cuộc. Đúng hay sai?"),
        L("l2", "det", "True. We think we already understand the problem.", "Đúng. Vì ta nghĩ mình hiểu vấn đề rồi.", { face: "happy" }),
      ] },
    { id: "s13", module: "TEXT-07", ref: "p7",
      data: { en: "If you were me, how would you fix this?", vi: "Nếu là anh chị, anh chị sẽ sửa chuyện này thế nào?",
        chunks: [{ en: "If you were me,", vi: "nếu là anh chị" }, { en: "how would you", vi: "anh chị sẽ" }, { en: "fix this?", vi: "sửa chuyện này thế nào" }], illus: "speech-balloon" },
      lines: [
        L("l1", null, "Ask them: If you were me, how would you fix this?", "Hỏi họ: “Nếu là anh chị, anh chị sẽ sửa chuyện này thế nào?”"),
        L("l2", null, "People who face the problem often have very practical ideas.", "Người trực tiếp gặp chuyện thường có ý rất thực tế."),
      ] },
    { id: "s14", module: "CMP-02", ref: "p8",
      data: { title: "Người mới không đọc tài liệu hướng dẫn",
        before: "Viết thêm cho dày, bắt ký xác nhận đã đọc",
        after: "Hỏi ba bạn vừa vào: làm một trang việc tuần đầu và một người để hỏi",
        illusBefore: "books", illusAfter: "page-facing-up" },
      lines: [
        L("l1", null, "A trainer sees new staff don't read the guide. His plan: make it longer, and make them sign.", "Người phụ trách đào tạo định viết tài liệu dày hơn, bắt ký đã đọc."),
        L("l2", null, "First, he asks three people who joined last month. The guide is too long.", "Trước khi làm, anh hỏi ba bạn vào tháng trước. Cả ba nói tài liệu quá dài."),
      ] },
    { id: "s14b", module: "TEXT-04", ref: "p8",
      data: { text: "Họ cần một trang việc tuần đầu và một người để hỏi. Anh làm đúng hai thứ đó.", marks: ["một trang việc tuần đầu", "một người để hỏi"], illus: "page-facing-up" },
      lines: [
        L("l3", null, "They need one page of first-week tasks, and one person to ask. He does just that.", "Họ cần một trang việc tuần đầu và một người để hỏi. Anh làm đúng hai thứ đó."),
      ] },
    { id: "s15", module: "TEXT-01", ref: "p9",
      data: { text: "Bí ý thì hỏi người đang gặp chuyện.", illus: "speech-balloon" },
      lines: [L("l1", null, "Out of ideas? Ask the people living with the problem.", "Bí ý thì hỏi người đang gặp chuyện.")] },

    // ---------- Chương 3 ----------
    { id: "s16", module: "HOST-03", data: { n: 3, of: 6, title: "Không làm gì, và thử nhỏ" },
      lines: [L("l1", "det", "Part three: doing nothing, and a small test.", "Phần ba: “không làm gì”, và “thử nhỏ”.")] },
    { id: "s17a", module: "TEXT-01", ref: "p10",
      data: { text: "Đưa “không làm gì” vào danh sách: đó là mốc để so", illus: "balance-scale" },
      lines: [
        L("l1", null, "Put doing nothing on the list. It's your baseline to compare.", "Đưa “không làm gì” vào danh sách: đó là mốc để so."),
      ] },
    { id: "s17", module: "RSN-05", ref: "p10",
      data: { if: "Để yên mà thiệt hại nhỏ", then: "Có thể chưa đáng bỏ công sửa", else: "Thiệt hại lớn dần: có lý do làm ngay",
        illus: "balance-scale", thenIllus: "zzz" },
      lines: [
        L("l2", null, "Leaving it costs little? It may not be worth fixing yet.", "Để yên mà thiệt nhỏ? Có thể chưa đáng bỏ công sửa."),
        L("l3", null, "The damage keeps growing? Then you have a clear reason to act now.", "Thiệt hại lớn dần? Bạn có lý do rõ để hành động ngay."),
      ] },
    { id: "s18", module: "TEXT-04", ref: "p11",
      data: { text: "Thử nhỏ trước: làm với một nhóm, một tuần hoặc một loại hàng. Kết quả thật, chi phí thấp.",
        marks: ["Thử nhỏ trước"], illus: "test-tube" },
      lines: [
        L("l1", null, "A small test: one group, one week, or one product.", "Thử nhỏ: một nhóm, một tuần hoặc một loại hàng."),
        L("l2", null, "Real results at low cost. Great when you fear choosing wrong.", "Kết quả thật, chi phí thấp, rất hợp khi bạn sợ quyết sai."),
      ] },
    { id: "s19", module: "BEAT-04", ref: "p12",
      data: { seconds: 5, prompt: "Lỗi định dạng vài tháng gặp một lần, sửa tay mất vài phút. Có đáng bỏ gần một tháng làm công cụ tự sửa?" },
      lines: [
        L("l1", null, "A format error appears every few months. Fixing it by hand takes minutes.", "Lỗi định dạng vài tháng mới gặp một lần, sửa tay mất vài phút."),
        L("l2", null, "A team plans a month building a tool for it. Worth it?", "Một nhóm tính bỏ gần một tháng làm công cụ tự sửa. Có đáng không?"),
      ] },
    { id: "s20", module: "HOST-02", ref: "p12,p13",
      data: { statement: "Lỗi vài tháng mới gặp một lần, đáng bỏ một tháng làm công cụ tự sửa", truth: false,
        why: "Để yên cả năm chỉ mất chưa tới một giờ sửa tay.", kicker: "Luôn có phương án “không làm gì” để so" },
      lines: [
        L("l1", "det", "Worth a month of work? Ask: if we leave it, how much does it cost?", "Có đáng một tháng công? Hỏi: “để yên thì thiệt bao nhiêu?”"),
        L("l2", "det", "Almost surely not. Less than an hour a year. Use that month better.", "Gần như chắc chắn là không: cả năm chưa tới một giờ. Tháng đó nên làm việc khác.", { face: "wink" }),
      ] },
    { id: "s21", module: "TEXT-02", ref: "p13,p14",
      data: { text: "Bốn hướng cộng “không làm gì” và “thử nhỏ”: năm sáu lựa chọn để so.", keywords: ["năm sáu lựa chọn"], illus: "card-index-dividers" },
      lines: [
        L("l1", null, "Always keep an option called doing nothing, to compare against.", "Luôn có một phương án tên là “không làm gì” để so."),
        L("l2", null, "Add the small test and four directions: five or six choices, not one bet.", "Cộng thử nhỏ và bốn hướng: năm sáu lựa chọn, thay vì đặt cược vào một."),
      ] },

    // ---------- Chương 4 ----------
    { id: "s22", module: "HOST-03", data: { n: 4, of: 6, title: "Họp động não" },
      lines: [L("l1", "det", "Part four: a brainstorm where everyone dares to speak.", "Phần bốn: họp động não sao cho ai cũng dám góp ý.")] },
    { id: "s23", module: "LIST-10", ref: "p15",
      data: { title: "Thứ tự một buổi động não", stops: [
        { label: "Viết câu mô tả vấn đề lên bảng", illus: "memo" },
        { label: "Mỗi người viết ý riêng, chưa ai nói", illus: "pencil" },
        { label: "Lần lượt đọc ý, không bình luận", illus: "speaking-head" },
        { label: "Gom các ý giống nhau", illus: "card-index-dividers" },
        { label: "Bổ sung bằng bốn hướng", illus: "compass" },
        { label: "Chỉ sau đó mới đánh giá", illus: "check-mark-button" } ] },
      lines: [
        L("l1", null, "Write the problem on the board. Everyone writes ideas alone, in silence.", "Viết vấn đề lên bảng. Mỗi người viết ý riêng vài phút, chưa ai nói."),
        L("l2", null, "Read them out in turn, with no comments. Group similar ones.", "Lần lượt đọc ý, không ai bình luận. Gom ý giống nhau."),
        L("l3", null, "Add more with the four directions. Only then, judge.", "Bổ sung bằng bốn hướng. Chỉ sau đó mới đánh giá."),
      ] },
    { id: "s24", module: "LIST-13", ref: "p16",
      data: { title: "Vì sao viết riêng trước", items: [
        { title: "Người ít nói có thời gian nghĩ", detail: "Không phải tranh lời", illus: "thinking-face" },
        { title: "Ý không bị dẫn dắt từ đầu", detail: "Bởi người nói to hay người có chức vụ", illus: "loudspeaker" } ] },
      lines: [
        L("l1", null, "Quiet people get time to think, without fighting to speak.", "Người ít nói có thời gian nghĩ, không phải tranh lời."),
        L("l2", null, "And loud or senior people can't steer the ideas from the start.", "Ý tưởng không bị người nói to hay có chức vụ dẫn dắt ngay từ đầu."),
      ] },
    { id: "s25", module: "DLG-01", ref: "p17,p19",
      data: { set: "meeting", label: "Thảo chủ trì họp",
        actors: [{ id: "thao", side: "left", pose: "stand" }, { id: "dung", side: "center", pose: "hold" }, { id: "binh", side: "right", pose: "cross" }],
        verdict: { ok: false, label: "Ai nêu ý thì bàn, chê ngay", why: "Đến ý thứ ba cả phòng im lặng, buổi họp chốt một ý vì không ai muốn nói." } },
      lines: [
        L("l1", "thao", "We need ways to reduce complaints. Any ideas?", "Mình cần cách giảm khiếu nại. Ai có ý gì không?", { pose: "explain" }),
        L("l2", "dung", "I have one idea.", "Em có một ý ạ.", { pose: "wave" }),
        L("l3", "binh", "We did that already. It didn't work.", "Cái đó làm rồi, không ăn thua.", { face: "stern", react: { dung: "sad" }, stop: true }),
        L("l4", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l5", "det", "Judge every idea at once, and by idea three, the room goes silent.", "Ý nào cũng bị chê ngay thì đến ý thứ ba cả phòng im lặng."),
        L("l6", "det", "Let's rewind and try again.", "Tua lại, thử cách khác nhé.", { phase: "redo" }),
        L("l7", "thao", "Let's note this idea for now. We'll judge the whole list later.", "Ý này mình ghi lại đã, lát nữa mình đánh giá cả danh sách nhé.", { phase: "redo", pose: "explain", face: "happy" }),
        L("l8", null, "Ten minutes of only writing. The list grows much longer.", "Mười phút đầu chỉ ghi, không chê. Danh sách dài gấp mấy lần.", { phase: "redo" }),
        L("l9", null, "The chosen idea comes from a newcomer who never spoke.", "Ý được chọn đến từ một bạn mới chưa từng lên tiếng.", { phase: "redo" }),
      ] },
    { id: "s26", module: "TEXT-01", ref: "p18",
      data: { text: "Gom ý trước, chấm điểm sau.", illus: "card-index-dividers" },
      lines: [L("l1", null, "Collect ideas first. Score them later.", "Gom ý trước, chấm điểm sau.")] },
    { id: "s27", module: "HOST-01", ref: "p20",
      data: { text: "Ở bước gom, đừng loại ý nghe có vẻ lạ.", pose: "think" },
      lines: [
        L("l1", "det", "While collecting, don't drop ideas that sound strange.", "Ở bước gom, đừng loại ý nghe có vẻ lạ."),
        L("l2", "det", "An idea you can't do yet may lead to a practical one nobody thought of.", "Ý chưa làm được đôi khi gợi ra phương án thực tế không ai nghĩ tới."),
      ] },

    // ---------- Chương 5 ----------
    { id: "s28", module: "HOST-03", data: { n: 5, of: 6, title: "Dùng lại cách cũ" },
      lines: [L("l1", "det", "Part five: the old way worked. Can you use it again?", "Phần năm: cách cũ từng hiệu quả, dùng lại được không?")] },
    { id: "s29", module: "TEXT-07", ref: "p21",
      data: { en: "What is different now from before?", vi: "Điều kiện bây giờ khác trước ở điểm nào?",
        chunks: [{ en: "What is different", vi: "điều gì khác" }, { en: "now", vi: "bây giờ" }, { en: "from before?", vi: "so với trước" }], illus: "spiral-calendar" },
      lines: [
        L("l1", null, "Yes, but first ask: what is different now from before?", "Được, nhưng hỏi trước: “Điều kiện bây giờ khác trước ở điểm nào?”"),
        L("l2", null, "New customers, new prices, new people? The old way may not fit.", "Khách đã đổi, giá đã đổi, người làm đã đổi? Cách cũ có thể không còn hợp."),
      ] },
    { id: "s30", module: "TEXT-04", ref: "p22",
      data: { text: "Cách cũ là một phương án trong danh sách, không phải đáp án mặc định.", marks: ["một phương án"], illus: "card-index-dividers" },
      lines: [
        L("l1", null, "The old way is one option on the list, not the default answer.", "Cách cũ là một phương án trong danh sách, không phải đáp án mặc định."),
        L("l2", null, "Put it next to the others. You'll see if it still wins.", "Đặt nó cạnh các cách khác, bạn sẽ thấy nó vẫn hơn hay đã thua."),
      ] },

    // ---------- Chương 6 ----------
    { id: "s31", module: "HOST-03", data: { n: 6, of: 6, title: "Bao nhiêu là đủ?" },
      lines: [L("l1", "det", "Part six: how many options are enough?", "Phần sáu: bao nhiêu phương án là đủ?")] },
    { id: "s32", module: "RSN-01", ref: "p23",
      data: { claim: "Thường ba đến năm phương án đáng cân nhắc là vừa", illus: "balance-scale", reasons: [
        { text: "Ít hơn: thiếu cái để so", illus: "minus" },
        { text: "Nhiều hơn: mất thời gian, không thêm giá trị", illus: "hourglass-not-done" } ] },
      lines: [
        L("l1", null, "Usually, three to five real options is right.", "Thường ba đến năm phương án đáng cân nhắc là vừa."),
        L("l2", null, "Fewer, and there's nothing to compare. More, and you waste time.", "Ít hơn thì thiếu cái để so, nhiều hơn thì mất thời gian mà không thêm giá trị."),
      ] },
    { id: "s33", module: "LIST-06", ref: "p24",
      data: { title: "Gom xong, làm gì tiếp", steps: [
        { text: "Xếp các ý giống nhau thành nhóm", illus: "card-index-dividers" },
        { text: "Bỏ ý chắc chắn không làm được", illus: "wastebasket" },
        { text: "Giữ ba bốn phương án để cân nhắc kỹ", illus: "balance-scale" } ] },
      lines: [
        L("l1", null, "Group similar ideas. Drop the ones you surely can't do.", "Xếp ý giống nhau thành nhóm, bỏ ý chắc chắn không làm được."),
        L("l2", null, "Keep three or four to weigh carefully. That's the next video.", "Giữ ba bốn phương án để cân kỹ, cách cân ở bài tiếp theo."),
      ] },
    { id: "s34", module: "LIST-05", ref: "p25",
      data: { title: "Danh sách đã sẵn sàng khi", illus: "clipboard", items: [
        "Có ít nhất ba phương án thật sự khác nhau", "Có “không làm gì” và “thử nhỏ”", "Đã hỏi ít nhất một người trong cuộc", "Chưa chê ý nào trước khi danh sách xong" ] },
      lines: [
        L("l1", null, "Check: at least three really different options, not versions of one idea.", "Kiểm: ít nhất ba phương án thật sự khác nhau, không phải biến thể của một ý."),
        L("l2", null, "Doing nothing and a small test are there.", "Có “không làm gì” và “thử nhỏ”."),
        L("l3", null, "You asked at least one person involved, and judged nothing too early.", "Đã hỏi ít nhất một người trong cuộc, chưa chê ý nào quá sớm."),
      ] },

    // ---------- Tổng kết, câu đố, kết ----------
    { id: "s35", module: "END-01", ref: "outro",
      data: { takeaway: "Gom ý trước, chấm điểm sau.", marks: ["chấm điểm sau"], illus: "light-bulb" },
      lines: [
        L("l1", null, "The first idea comes fast because it's familiar, not because it's good.", "Ý đầu tiên đến nhanh vì nó quen, không phải vì nó hay."),
        L("l2", null, "Like Dũng: write at least three real options, plus doing nothing and a small test.", "Như Dũng: viết ít nhất ba phương án khác nhau, thêm “không làm gì” và “thử nhỏ”."),
      ] },
    { id: "s36", module: "QUIZ-01", ref: "questions[16]",
      data: {
        q: "Which question shows whether the report tool is worth a month of work?",
        options: [
          "If we leave this alone, how much does it actually cost us",
          "Who made the formatting error first, so they can fix it every time",
          "Which software is the newest, so our tool looks modern to the manager",
        ],
        correct: 0, countdown: 5, illus: "hourglass-not-done",
        why: "Hỏi “để yên thì thiệt bao nhiêu?” là đặt phương án không làm gì lên bàn để so.",
      },
      lines: [
        L("l1", null, "Which question shows whether the report tool is worth a month of work?", "Câu hỏi nào cho thấy công cụ báo cáo có đáng một tháng công hay không?"),
        L("l2", null, "If we leave this alone, how much does it actually cost us.", "Nếu để yên, việc này thật sự làm mình thiệt bao nhiêu."),
        L("l3", null, "That puts doing nothing on the table.", "Câu này đặt phương án “không làm gì” lên bàn để so."),
      ], beats: { after: 600 } },
    { id: "s37", module: "END-05",
      data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Nghĩ thêm một phương án nữa" },
      lines: [L("l1", "det", "Forty questions are waiting below. Have fun!", "Bốn mươi câu hỏi đang chờ bên dưới. Làm vui nhé!")] },
  ],
};
