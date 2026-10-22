// Kịch bản video W lần 3 (#110) — "Bẫy chi phí chìm" · chuỗi "Giải quyết vấn đề và ra quyết định"
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "what-is-the-sunk-cost-trap--w01",
  hook: "HOOK-14",
  loop: { open: "s01", close: "s30" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (A)
  unit: { audience: "workplace-problem-solvers", slug: "what-is-the-sunk-cost-trap", door: "ky-nang", level: "B1",
    title: "Bẫy chi phí chìm là gì và làm sao để không tiếp tục chỉ vì đã lỡ đầu tư?", series: "Giải quyết vấn đề và ra quyết định" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Định → Dũng; Thoa → Thảo; người hỏi Định (p10: “mỗi lần có người hỏi”, bài không ghi nguyên văn) → Thảo, câu hỏi viết ngắn lại; câu hỏi của đồng nghiệp Thoa (p6) do Đét nói trong cảnh DLG-01; người nói câu mẫu đề xuất dừng (p16, bài không nêu tên) → Thảo, sếp → Cô Hoa (chỉ nghe, không thoại). Liên (🔀 p19) kể không tên bằng thẻ CMP-03. Vai mới (Bin, Bà Tư, Sam): bài không có trẻ con, bà cụ hay người nước ngoài nên không dùng. Chỗ đứng cố định: Thảo left, Dũng right, Cô Hoa farright. Câu đố giữ questions[6] (câu cũ questions[7] nêu tên “Thoa”). Bài chỉ có 5 mục chính có câu hỏi (mục cuối chỉ một checklist p21) nên video 5 chương, p21 vào phần tổng kết. Chuyện Dũng bỏ ngỏ ở cảnh mở đầu, giải ở phần ba (p10) và nhắc lại ở END-01 (khuôn HOOK-14). Phủ ý: 21/21.",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "p10",
      data: { set: "office", label: "Chuyện của Dũng", props: ["laptop"],
        actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", null, "For a year, Dũng has led work on an internal tool. Staff still like the old spreadsheet.", "Gần một năm Dũng dẫn dắt làm công cụ nội bộ. Nhân viên vẫn ưa bảng tính cũ."),
        L("l2", "thao", "There are errors to fix every month. Should we keep going?", "Tháng nào cũng có lỗi phải sửa. Mình có nên làm tiếp không?", { face: "worried" }),
        L("l3", "dung", "We've already invested so much. Let's finish it.", "Mình đã đầu tư nhiều rồi, làm nốt thôi.", { face: "stern", pose: "cross" }),
        L("l4", null, "Should Dũng finish it? Let's find out.", "Dũng có nên làm nốt? Cùng tìm hiểu nhé."),
      ], beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Thoát bẫy chi phí chìm", pose: "present", items: ["Nhận ra cái bẫy", "Hỏi “nếu mới bắt đầu hôm nay”", "Đặt điểm dừng từ đầu"] },
      lines: [
        L("l1", "det", "Going on only because you put in so much? That's the sunk cost trap. How do you escape?", "Tiếp tục chỉ vì đã bỏ vào quá nhiều? Đó là bẫy chi phí chìm. Thoát thế nào?"),
        L("l2", "det", "Learn to spot it.", "Nhận ra cái bẫy."),
        L("l3", "det", "Ask: from today on, is putting more in worth it?", "Hỏi: từ hôm nay, bỏ thêm vào có đáng không?"),
        L("l4", "det", "And set a stopping point early.", "Và đặt điểm dừng từ đầu."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Năm chặng của bài", chapters: [
        { label: "Bẫy chi phí chìm là gì", illus: "hole" },
        { label: "Nhận ra mình đang mắc", illus: "eyes" },
        { label: "Kiểm trước khi quyết", illus: "clipboard" },
        { label: "Kiên trì hay cố chấp", illus: "mountain" },
        { label: "Đề xuất dừng không mất mặt", illus: "speech-balloon" } ] },
      lines: [
        L("l1", null, "What the trap is, how to spot it, and what to check.", "Bẫy là gì, nhận ra thế nào, kiểm gì trước khi quyết."),
        L("l2", null, "Then persistence versus stubbornness, and how to propose stopping.", "Rồi kiên trì hay cố chấp, và cách đề xuất dừng."),
      ] },

    // ---------- Chương 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 5, title: "Bẫy chi phí chìm là gì?" },
      lines: [L("l1", "det", "Part one: what is the sunk cost trap?", "Phần một: bẫy chi phí chìm là gì?")] },
    { id: "s05", module: "TEXT-06", ref: "p1",
      data: { term: "Chi phí chìm", meaning: "Khoản tiền, thời gian, công sức đã bỏ ra; quyết thế nào cũng không quay lại",
        example: "Làm tiếp chỉ vì đã bỏ vào quá nhiều.", illus: "hole" },
      lines: [
        L("l1", null, "The trap: going on with something not worth it, only because you've put in so much.", "Bẫy: tiếp tục một việc không còn đáng làm chỉ vì đã bỏ vào quá nhiều."),
        L("l2", null, "What you spent is the sunk cost. Whatever you decide, it won't come back.", "Khoản đã bỏ ra là chi phí chìm: quyết thế nào cũng không quay lại."),
      ] },
    { id: "s06", module: "LIST-02", ref: "p2",
      data: { title: "Ai cũng từng gặp", illus: "hole", items: [
        { icon: "admission-tickets", illus: "admission-tickets", text: "Xem hết phim dở vì đã mua vé" },
        { icon: "hammer-and-wrench", illus: "hammer-and-wrench", text: "Sửa mãi máy cũ vì đã sửa nhiều lần" },
        { icon: "chart-decreasing", illus: "chart-decreasing", text: "Giữ dự án lỗ vì đã làm cả năm" } ] },
      lines: [
        L("l1", null, "Watching a bad film to the end, because you bought the ticket.", "Xem hết bộ phim dở vì đã mua vé."),
        L("l2", null, "Fixing an old machine again, because you've fixed it many times.", "Sửa mãi chiếc máy cũ vì đã sửa nhiều lần."),
        L("l3", null, "Keeping a losing project, because you've worked on it all year.", "Giữ một dự án đang lỗ vì đã làm cả năm."),
        L("l4", null, "At work it costs more: every push uses the whole team's time and money.", "Ở chỗ làm, bẫy này đắt hơn: mỗi lần “cố thêm” là tiền và thời gian của cả nhóm."),
      ] },
    { id: "s07", module: "HOST-01", ref: "p3",
      data: { text: "Cảm giác tiếc nhìn về phía sau, còn quyết định luôn là chuyện phía trước", pose: "point" },
      lines: [
        L("l1", "det", "Why do we fall in? Stopping feels like losing and wasting.", "Vì sao ta mắc? Bỏ dở tạo cảm giác thua thiệt và lãng phí."),
        L("l2", "det", "We fear looking wrong from the start, or wasting colleagues' effort.", "Ta sợ bị nghĩ là sai từ đầu, sợ phụ công sức đồng nghiệp."),
        L("l3", "det", "But that feeling looks back. A decision always looks forward.", "Nhưng cảm giác đó nhìn về phía sau, còn quyết định luôn là chuyện phía trước."),
      ] },

    // ---------- Chương 2 ----------
    { id: "s08", module: "HOST-03", data: { n: 2, of: 5, title: "Nhận ra mình đang mắc bẫy" },
      lines: [L("l1", "det", "Part two: is the money you spent in control?", "Phần hai: làm sao biết khoản đã chi đang điều khiển mình?")] },
    { id: "s09", module: "LIST-01", ref: "p4",
      data: { title: "Nghe mình nói những câu này?", illus: "speech-balloon", items: ["“Đã đến nước này rồi”", "“Bỏ thì phí”", "“Cố thêm chút nữa cho bõ”"] },
      lines: [
        L("l1", null, "Listen to yourself. We've come this far. Stopping is a waste.", "Để ý câu mình tự nói: “Đã đến nước này rồi”, “bỏ thì phí”,"),
        L("l2", null, "Let's push a bit more, so it pays off.", "“Cố thêm chút nữa cho bõ”."),
        L("l3", null, "If your main reason is what you put in, not what you'll get, you're near the trap.", "Lý do chính là cái đã bỏ ra, không phải cái sắp nhận về? Bạn đang gần cái bẫy."),
      ] },
    { id: "s10", module: "TEXT-07", ref: "p5",
      data: { en: "If I were starting today, would I choose this?", vi: "Nếu hôm nay mình mới bắt đầu, mình có chọn làm việc này không?",
        chunks: [{ en: "If I were starting", vi: "nếu mình mới bắt đầu" }, { en: "today,", vi: "hôm nay" }, { en: "would I choose this?", vi: "mình có chọn việc này không" }], illus: "seedling" },
      lines: [
        L("l1", null, "The best test: if I were starting today, knowing what I know now, would I choose this?", "Câu thử hiệu quả nhất: “Nếu hôm nay mới bắt đầu, với những gì biết bây giờ, mình có chọn việc này không?”"),
        L("l2", null, "If the answer is no, that's a strong sign to stop or change direction.", "Trả lời “không” là tín hiệu mạnh để dừng hoặc đổi hướng."),
      ] },
    { id: "s11", module: "DLG-01", ref: "p6",
      data: { set: "campus", label: "Khoá học của Thảo", actors: [{ id: "thao", side: "left", pose: "stand" }],
        verdict: { ok: false, label: "Cố học hết “cho khỏi phí tiền”", why: "Học phí đã đóng không đổi được; mười buổi tối còn lại thì đổi được." } },
      lines: [
        L("l1", null, "Thảo paid for a three-month course, to prepare for a new role.", "Thảo đóng học phí khoá kỹ năng ba tháng để chuẩn bị lên vị trí mới."),
        L("l2", "thao", "Three classes in: too basic, too crowded, and the teacher rarely checks our work.", "Ba buổi rồi: quá cơ bản, lớp đông, giảng viên ít sửa bài.", { face: "sad" }),
        L("l3", "thao", "But I paid already. I'll finish, so the money isn't wasted.", "Nhưng đóng tiền rồi. Cố đi hết cho khỏi phí tiền.", { pose: "cross", stop: true }),
        L("l4", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l5", "det", "That's ten more evenings. If you hadn't paid, would you sign up for this class?", "Thêm mười buổi tối nữa đấy. Nếu chưa đóng tiền, em có đăng ký lớp này không?"),
        L("l6", "det", "Let's rewind and try again.", "Tua lại, thử cách khác nhé.", { phase: "redo" }),
        L("l7", "thao", "Would I sign up today? No. Let me read the centre's rules again.", "Nếu chưa đóng, mình có đăng ký không? Không. Đọc lại quy định trung tâm đã.", { phase: "redo", face: "thinking", pose: "think" }),
        L("l8", "thao", "I can move to the advanced class!", "Mình được chuyển sang lớp nâng cao!", { phase: "redo", face: "happy" }),
      ] },
    { id: "s12", module: "TEXT-01", ref: "p7",
      data: { text: "Đi tiếp chỉ vì tiếc là trả giá hai lần.", illus: "money-with-wings" },
      lines: [L("l1", null, "Going on only out of regret means paying twice.", "Đi tiếp chỉ vì tiếc là trả giá hai lần.")] },

    // ---------- Chương 3 ----------
    { id: "s13", module: "HOST-03", data: { n: 3, of: 5, title: "Kiểm trước khi quyết" },
      lines: [L("l1", "det", "Part three: what to check before you continue or stop.", "Phần ba: trước khi quyết tiếp tục hay dừng, kiểm tra gì?")] },
    { id: "s14", module: "LIST-06", ref: "p8",
      data: { title: "Năm bước kiểm", steps: [
        { text: "Viết khoản đã bỏ, rồi gạch sang một bên", illus: "memo" },
        { text: "Ước tính khoản cần bỏ thêm để xong", illus: "money-bag" },
        { text: "Ước điều nhận lại, theo dữ kiện hôm nay", illus: "bar-chart" },
        { text: "Liệt kê cách khác dùng khoản bỏ thêm", illus: "card-index-dividers" },
        { text: "Trả lời thật: nếu mới bắt đầu hôm nay?", illus: "seedling" } ] },
      lines: [
        L("l1", null, "Write down what you've spent. Then set it aside.", "Viết ra khoản đã bỏ, rồi gạch nó sang một bên."),
        L("l2", null, "Estimate what it takes to finish.", "Ước tính khoản cần bỏ thêm để xong."),
        L("l3", null, "Estimate the return from today's facts, not your first hopes.", "Ước tính điều nhận lại theo dữ kiện hiện tại, không theo hy vọng ban đầu."),
        L("l4", null, "List other ways to use that same money. Then answer the fresh-start question honestly.", "Liệt kê cách khác dùng khoản đó. Rồi trả lời thật lòng câu “nếu mới bắt đầu hôm nay”."),
      ] },
    { id: "s15", module: "CMP-01", ref: "p9",
      data: { labels: ["Phần đã qua", "Phần phía trước"], left: "Giữ để rút kinh nghiệm, nhưng không góp phiếu",
        right: "Đem ra so: bỏ thêm bao nhiêu, nhận về gì, so với việc khác", illus: ["books", "compass"] },
      lines: [
        L("l1", null, "The past isn't erased. It gives lessons for next time.", "Phần đã qua không bị xoá; nó dùng để rút kinh nghiệm cho lần sau."),
        L("l2", null, "But it doesn't get a vote. Only the part ahead is compared:", "Nhưng nó không được góp phiếu. Chỉ phần phía trước được đem ra so:"),
        L("l3", null, "the extra cost, the return, and other uses of that money.", "bỏ thêm bao nhiêu, nhận về gì, và so với dùng khoản đó vào việc khác."),
      ] },
    { id: "s16", module: "SCENE-01", ref: "p10",
      data: { set: "office", label: "Quay lại chuyện Dũng", props: ["laptop"],
        actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right", pose: "think" }] },
      lines: [
        L("l1", null, "Back to Dũng. Each time someone asked, he said: we've invested a lot, let's finish.", "Quay lại Dũng. Mỗi lần có người hỏi, Dũng lại nói: “đầu tư nhiều rồi, làm nốt”."),
        L("l2", null, "Then he counted only the part ahead.", "Rồi Dũng ngồi tính đúng phần phía trước."),
        L("l3", "dung", "Finishing it costs much more than using a ready-made tool.", "Làm tiếp tốn hơn hẳn dùng một công cụ có sẵn.", { face: "surprised", react: { thao: "thinking" } }),
        L("l4", "dung", "And what we learned can still be used for other work.", "Còn những gì nhóm học được vẫn dùng được cho việc khác.", { face: "happy", pose: "explain" }),
      ] },
    { id: "s17", module: "TEXT-01", ref: "p11",
      data: { text: "Tiền đã chi không quay lại, tiền sắp chi vẫn còn trong tay.", illus: "money-bag" },
      lines: [L("l1", null, "Money spent won't return. Money not yet spent is still in your hands.", "Tiền đã chi không quay lại, tiền sắp chi vẫn còn trong tay.")] },

    // ---------- Chương 4 ----------
    { id: "s18", module: "HOST-03", data: { n: 4, of: 5, title: "Kiên trì hay cố chấp?" },
      lines: [L("l1", "det", "Part four: persistence, or stubbornness?", "Phần bốn: kiên trì hay cố chấp, phân biệt thế nào?")] },
    { id: "s19", module: "CMP-01", ref: "p12",
      data: { labels: ["Kiên trì", "Cố chấp"], left: "Tiếp tục khi dữ kiện cho thấy vẫn có triển vọng, dù đang khó",
        right: "Tiếp tục khi dữ kiện nói ngược lại, chỉ vì không muốn thừa nhận", illus: ["mountain", "locked"] },
      lines: [
        L("l1", null, "Persistence: going on when the facts still show hope, even if it's hard.", "Kiên trì: tiếp tục khi dữ kiện cho thấy vẫn có triển vọng, dù đang khó."),
        L("l2", null, "Stubbornness: going on when the facts say no, just to avoid admitting it.", "Cố chấp: tiếp tục khi dữ kiện nói ngược lại, chỉ vì không muốn thừa nhận."),
        L("l3", null, "The difference isn't how hard you work. It's whether you look at the facts.", "Khác nhau không ở mức chăm chỉ, mà ở chỗ có nhìn dữ kiện hay không."),
      ] },
    { id: "s20", module: "TEXT-04", ref: "p13",
      data: { text: "“Nếu đến cuối quý mà chưa đạt mức này thì mình ngồi lại xem có dừng không.”", marks: ["cuối quý"], illus: "stop-sign" },
      lines: [
        { id: "l1", lang: "en", say: "Set a stopping point at the start: if we haven't reached this level by the end of the quarter,", sub: "Đặt điểm dừng ngay từ đầu: “Nếu đến cuối quý mà chưa đạt mức này" },
        { id: "l2", lang: "en", say: "we'll sit down and decide whether to stop.", sub: "thì mình ngồi lại xem có dừng không.”" },
      ] },
    { id: "s20b", module: "TEXT-01", ref: "p13",
      data: { text: "Điểm dừng viết trước: quyết bằng lý, không bằng tiếc", illus: "memo" },
      lines: [
        { id: "l3", lang: "en", say: "Written early, it lets you decide with reason, not regret.", sub: "Điểm dừng viết trước giúp bạn quyết bằng lý, không bằng tiếc." },
      ] },
    { id: "s21", module: "LIST-06", ref: "p14",
      data: { title: "Xe giao hàng cũ hỏng lần đầu", steps: [
        { text: "Sửa, và ghi ngay mức dừng: tiền sửa quá một phần ba giá xe mới", illus: "wrench" },
        { text: "Mỗi lần sửa sau, cộng dồn vào một tờ ghi chép", illus: "memo" },
        { text: "Chạm mức thì đề xuất thay xe trước mùa cao điểm", illus: "delivery-truck" } ] },
      lines: [
        L("l1", null, "The old delivery van breaks for the first time. Fix it, and write a limit now:", "Xe giao hàng cũ hỏng lần đầu. Sửa, và ghi ngay một mức dừng:"),
        L("l2", null, "if total repairs pass a third of a new van's price, suggest replacing it.", "tổng tiền sửa vượt một phần ba giá xe mới thì đề xuất thay xe."),
        L("l3", null, "Add each repair to the same sheet. Hit the limit? Propose a new van before peak season.", "Mỗi lần sửa cộng dồn một tờ. Chạm mức thì đề xuất thay xe trước mùa cao điểm."),
        L("l4", null, "No limit? By repair five, it's a big sum, and the van breaks in peak week.", "Không có mức: đến lần thứ năm, tiền sửa thành khoản lớn, xe nằm xưởng đúng tuần cao điểm."),
      ] },
    { id: "s22", module: "TEXT-01", ref: "p15",
      data: { text: "Đặt điểm dừng lúc bắt đầu, đừng đợi lúc tiếc.", illus: "stop-sign" },
      lines: [L("l1", null, "Set your stopping point at the start. Don't wait for regret.", "Đặt điểm dừng lúc bắt đầu, đừng đợi lúc tiếc.")] },

    // ---------- Chương 5 ----------
    { id: "s23", module: "HOST-03", data: { n: 5, of: 5, title: "Đề xuất dừng không mất mặt" },
      lines: [L("l1", "det", "Part five: afraid of losing face when you suggest stopping?", "Phần năm: sợ mất mặt khi đề xuất dừng thì làm sao?")] },
    { id: "s24", module: "SCENE-01", ref: "p16",
      data: { set: "office", label: "Đề xuất dừng", actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "farright", pose: "hold" }] },
      lines: [
        L("l1", null, "Present stopping as a decision based on new data, with lessons.", "Trình bày việc dừng như một quyết định dựa trên dữ kiện mới, kèm bài học."),
        L("l2", "thao", "The last three months show that going on costs a lot, and the goal is hard to reach.", "Theo số liệu ba tháng qua, làm tiếp sẽ tốn thêm khá nhiều mà khó đạt mục tiêu.", { pose: "explain" }),
        L("l3", "thao", "I suggest we stop here, keep the customer data, and move the budget to a channel that works better.", "Em đề xuất dừng ở đây, giữ lại dữ liệu khách đã thu được, chuyển ngân sách sang kênh hiệu quả hơn.", { face: "happy", react: { hoa: "thinking" } }),
      ] },
    { id: "s25", module: "LIST-07", ref: "p17",
      data: { title: "Dừng mà vẫn giữ được", items: [
        { text: "Kinh nghiệm", illus: "books" },
        { text: "Dữ liệu", illus: "bar-chart" },
        { text: "Mối quan hệ", illus: "handshake" } ] },
      lines: [
        L("l1", null, "Stopping doesn't deny the team's effort.", "Dừng một việc không có nghĩa là phủ nhận công sức của nhóm."),
        L("l2", null, "Say what you keep: experience, data, relationships. And thank the people who did the work.", "Nói rõ những gì vẫn giữ: kinh nghiệm, dữ liệu, mối quan hệ, và cảm ơn người đã làm."),
      ] },
    { id: "s26", module: "HOST-01", ref: "p18",
      data: { text: "Hỏi thêm một người không tham gia từ đầu", pose: "wave" },
      lines: [
        L("l1", "det", "Ask someone who wasn't involved from the start.", "Hỏi thêm một người không tham gia từ đầu."),
        L("l2", "det", "They don't carry your regret, so they see the road ahead more clearly.", "Họ không mang cảm giác tiếc nuối như bạn, nên nhìn phần phía trước rõ hơn."),
      ] },
    { id: "s27", module: "TEXT-01", ref: "p19",
      data: { text: "Chiến dịch hai tháng, khách mới rất thấp", illus: "loudspeaker" },
      lines: [
        { id: "l1", lang: "en", say: "A campaign ran two months with very few new customers.", sub: "Một chiến dịch quảng bá chạy hai tháng mà số khách mới rất thấp." },
      ] },
    { id: "s27b", module: "CMP-01", ref: "p19",
      data: { labels: ["Cách A", "Cách B"], left: "Giấu số liệu, xin “cố thêm một tháng”: sếp hỏi sao không báo sớm", right: "Sau sáu tuần tự đề xuất dừng, kèm số liệu và hai bài học", illus: ["see-no-evil-monkey", "thumbs-up"] },
      lines: [
        { id: "l2", lang: "en", say: "Way A: hide some numbers and ask for one more month. Month three, the same.", sub: "Cách A: giấu bớt số liệu, xin thêm ngân sách “cố thêm một tháng”. Tháng ba vẫn vậy." },
        { id: "l3", lang: "en", say: "The boss checks the numbers and asks why nobody said so earlier.", sub: "Sếp tự xem số và hỏi vì sao không báo sớm." },
        { id: "l4", lang: "en", say: "Way B, next time: after six weeks, suggest stopping, with numbers and two lessons. The boss values that.", sub: "Cách B, lần sau: sau sáu tuần, tự đề xuất dừng kèm số liệu, hai bài học. Sếp đánh giá cao." },
      ] },
    { id: "s28", module: "TEXT-01", ref: "p20",
      data: { text: "Dừng đúng lúc là một quyết định, không phải một thất bại.", illus: "stop-sign" },
      lines: [L("l1", null, "Stopping at the right time is a decision, not a failure.", "Dừng đúng lúc là một quyết định, không phải một thất bại.")] },

    // ---------- Tổng kết, câu đố, kết ----------
    { id: "s29", module: "LIST-05", ref: "p21",
      data: { title: "Mang theo để khỏi rơi vào bẫy", illus: "clipboard", items: [
        "Lý do đi tiếp nằm ở phía trước", "Đã hỏi “nếu mới bắt đầu hôm nay”", "Đã so với cách dùng khác",
        "Có điểm dừng viết sẵn", "Đã hỏi một người ngoài cuộc" ] },
      lines: [
        L("l1", null, "Take this with you. Your reasons look forward, not back.", "Mang theo: lý do đi tiếp nằm ở phía trước, không phải phía sau."),
        L("l2", null, "You asked the fresh-start question, and compared other uses.", "Đã hỏi câu “nếu mới bắt đầu hôm nay”, đã so với cách dùng khác."),
        L("l3", null, "A written stopping point, and an outsider's view.", "Có điểm dừng viết sẵn, và đã hỏi một người ngoài cuộc."),
      ] },
    { id: "s30", module: "END-01", ref: "outro",
      data: { takeaway: "Khoản đã chi là bài học, không phải lá phiếu.", marks: ["không phải lá phiếu"], illus: "money-bag" },
      lines: [
        L("l1", null, "Like Dũng: money spent is a lesson, not a vote.", "Như Dũng: khoản đã chi là bài học, không phải lá phiếu."),
        L("l2", null, "Today, pick one thing you keep pushing, and answer the fresh-start question on paper.", "Hôm nay, chọn một việc bạn đang “cố cho bõ” và trả lời câu hỏi đó trên giấy."),
      ] },
    { id: "s31", module: "QUIZ-01", ref: "questions[6]",
      data: {
        q: "What is the most useful test question when you are unsure whether to continue?",
        options: [
          "What would my manager say if I stopped this without asking anyone",
          "If I were starting today, knowing what I know now, would I choose this",
          "How much have we already spent, and how embarrassing would stopping be",
        ],
        correct: 1, countdown: 5, illus: "seedling",
        why: "Câu này gạt phần đã chi sang một bên. Trả lời không là tín hiệu mạnh để dừng hoặc đổi hướng.",
      },
      lines: [
        L("l1", null, "What is the most useful test question when you are unsure whether to continue?", "Câu hỏi thử hữu ích nhất khi phân vân có nên tiếp tục là gì?"),
        L("l2", null, "If I were starting today, knowing what I know now, would I choose this?", "Nếu hôm nay mới bắt đầu, với những gì biết bây giờ, mình có chọn việc này không?"),
        L("l3", null, "It puts past costs aside.", "Câu này gạt phần đã chi sang một bên."),
      ], beats: { after: 600 } },
    { id: "s32", module: "END-05",
      data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Nhìn về phía trước" },
      lines: [L("l1", "det", "Look forward. Forty questions are waiting below.", "Nhìn về phía trước nhé. Bốn mươi câu hỏi đang chờ bên dưới.")] },
  ],
};
