// Kịch bản video W lần 3 (#110) — "Ra quyết định khi cả nhóm không cùng ý kiến" · chuỗi "Lần đầu làm trưởng nhóm"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "decide-when-team-disagrees--w01",
  hook: "HOOK-14",
  loop: { open: "s01", close: "s24" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "first-time-team-leaders", slug: "decide-when-team-disagrees", door: "ky-nang", level: "B1",
    title: "Ra quyết định khi cả nhóm không cùng ý kiến", series: "Lần đầu làm trưởng nhóm" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Châu (p21), “bạn” (trưởng nhóm) → Thảo; hai bạn đưa hai cách làm (p21) → Lan và Dũng; người có ý không được chọn (p18) → Dũng; Nhung (p10) giữ là “một trưởng nhóm” trên thẻ STORY-01 (không gán cho Thảo, vì Thảo đã đóng chuyện p21); Kiên (p9) không dùng; sếp (p21) chỉ được kể, không lên hình. Vai mới (#110): bài không có trẻ con, bà cụ, người nước ngoài → không dùng. Khuôn chuyện bỏ lửng: mở 📌 p21 rồi để ngỏ “chuyện gì xảy ra?”, đóng ở DLG-01 s18 (nay chỉ Thảo và Dũng; cảnh ba người duy nhất là s01), phần làm lại chốt rõ kèm lý do theo p17. Cách A / Cách B của Lan và Dũng không nêu nội dung (bài không nói); Lan đề xuất cách B, Dũng cách A, để câu nói riêng p18 giữ đúng chữ. Phân việc trong tin chốt s19 (Lan dẫn chuẩn bị, Dũng lo hậu cần) là ví dụ dựng cho “ai làm gì tiếp theo”. Phủ ý: 28/28.",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "p21",
      data: { set: "meeting", label: "Hai cách làm", actors: [{ id: "thao", side: "left" }, { id: "lan", side: "center" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", "lan", "I think we should go with way B.", "Em nghĩ mình nên làm theo cách B.", { pose: "explain" }),
        L("l2", "dung", "No, way A is better.", "Không, cách A tốt hơn.", { pose: "explain", react: { lan: "stern" } }),
        L("l3", "thao", "Hmm. Let me think about it more.", "Ừm… để chị suy nghĩ thêm.", { face: "worried", pose: "think" }),
        L("l4", null, "One week passes. Then two. What happens next? You will see later.", "Một tuần, rồi hai tuần. Chuyện gì xảy ra? Lát nữa sẽ rõ.", { wait: 300 }),
      ],
      beats: { after: 700 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Chốt một hướng, không mất ai", pose: "present", items: ["Nói rõ ai quyết, quyết thế nào", "Nghe hết ý kiến", "So bằng tiêu chí chung", "Chốt rõ, hẹn xem lại"] },
      lines: [
        L("l1", "det", "The team disagrees, and everyone looks at you. How do you decide?", "Nhóm không cùng ý, ai cũng nhìn bạn. Quyết thế nào đây?"),
        L("l2", "det", "Say who decides, and how.", "Nói rõ ai quyết, quyết thế nào."),
        L("l3", "det", "Hear every opinion.", "Nghe hết ý kiến."),
        L("l4", "det", "Compare with shared criteria.", "So bằng tiêu chí chung."),
        L("l5", "det", "Decide clearly, and set a review date.", "Chốt rõ, hẹn ngày xem lại."),
      ] },
    { id: "s03", module: "HOST-01",
      data: { title: "Năm phần của video", pose: "point", items: ["Ai quyết, quyết thế nào", "Nghe ý thật", "So cho công bằng", "Chốt và nói với người bị bác", "Nếu quyết sai"] },
      lines: [
        L("l1", "det", "Who decides, and how.", "Một: ai quyết, quyết thế nào."),
        L("l2", "det", "Hearing real opinions.", "Hai: nghe được ý thật."),
        L("l3", "det", "Comparing fairly.", "Ba: so cho công bằng."),
        L("l4", "det", "Deciding, and the person who lost.", "Bốn: chốt, và nói với người bị bác ý."),
        L("l5", "det", "And if you were wrong.", "Năm: nếu quyết sai."),
      ] },

    // ---------- Phần 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 5, title: "Ai quyết, quyết thế nào" },
      lines: [L("l1", "det", "Part one: who decides, and how.", "Phần một: việc này ai quyết, và quyết bằng cách nào.")] },
    { id: "s05", module: "LIST-07", ref: "p1",
      data: { title: "Nói rõ trước khi bàn", items: [
        { text: "Bạn nghe hết rồi chốt", illus: "ear" },
        { text: "Cả nhóm biểu quyết", illus: "raising-hands" },
        { text: "Đưa lên sếp", illus: "office-building" } ] },
      lines: [
        L("l1", null, "Before the talk, say how it will be decided: you listen and decide, the team votes, or the boss decides.", "Trước khi bàn, nói rõ cách quyết: bạn nghe rồi chốt, cả nhóm biểu quyết, hay đưa lên sếp."),
        L("l2", null, "People accept the result more easily when they know the rules first.", "Biết luật chơi từ đầu, người ta dễ chấp nhận kết quả hơn."),
      ] },
    { id: "s06", module: "SCENE-01", ref: "p2",
      data: { set: "meeting", label: "Luật chơi", actors: [{ id: "thao", side: "left" }, { id: "lan", side: "center" }] },
      lines: [
        L("l1", "thao", "I want to hear all views until Wednesday. Then I will decide, and explain why.", "Chị muốn nghe hết ý kiến đến hết thứ Tư. Sau đó chị chốt và giải thích vì sao chọn vậy.", { pose: "explain" }),
        L("l2", "lan", "Okay, that is clear.", "Dạ, vậy rõ rồi ạ.", { face: "happy", react: { thao: "happy" } }),
      ] },
    { id: "s07", module: "CMP-01", ref: "p3,p4,p5",
      data: { labels: ["Dễ sửa", "Khó sửa"], left: "Quyết nhanh, như cách đặt tên thư mục chung", right: "Bàn kỹ, như đổi quy trình hay chọn khách hàng", illus: ["file-folder", "classical-building"] },
      lines: [
        L("l1", null, "Not every choice needs the whole team. Ask: if we are wrong, is it easy to fix?", "Không phải chuyện gì cũng cần cả nhóm bàn. Hỏi: chọn sai thì sửa có dễ không?"),
        L("l2", null, "Folder names take minutes to change. Suggest one way: “Any problem, tell me before Friday.” Then use it.", "Tên thư mục đổi mất vài phút. Đề xuất luôn: “Ai vướng báo mình trước thứ Sáu”, rồi dùng."),
        L("l3", null, "Easy to fix, decide fast. Hard to fix, discuss carefully.", "Dễ sửa thì quyết nhanh, khó sửa mới bàn kỹ."),
      ] },

    // ---------- Phần 2 ----------
    { id: "s08", module: "HOST-03", data: { n: 2, of: 5, title: "Nghe ý thật" },
      lines: [L("l1", "det", "Part two: how to hear what people really think.", "Phần hai: làm sao nghe được ý kiến thật.")] },
    { id: "s09", module: "STORY-01", ref: "p10,p11",
      data: { context: "Một trưởng nhóm mở buổi họp bằng ý của mình, nói rất chắc chắn.", action: "Cả nhóm gật đầu, không ai phản biện, họp xong sớm.", outcome: "Một tuần sau, kế hoạch vấp đúng chỗ một bạn đã thấy từ đầu.",
        illus: ["woman-office-worker", "raising-hands", "construction"] },
      lines: [
        L("l1", null, "A leader opens with her own idea, very sure. Everyone nods. The meeting ends early.", "Một trưởng nhóm mở đầu bằng ý mình, rất chắc. Cả nhóm gật, họp xong sớm."),
        L("l2", null, "A week later, the plan hits a problem. One member saw it: “But you had already said it.”", "Một tuần sau, kế hoạch vấp. Một bạn đã thấy từ đầu: “Chị đã nói vậy rồi nên em thôi.”"),
        L("l3", null, "When the leader speaks last, the team dares to speak honestly.", "Trưởng nhóm nói sau cùng, nhóm mới dám nói thật."),
      ] },
    { id: "s10", module: "LIST-01", ref: "p6,p7",
      data: { title: "Để nghe được ý thật", items: ["Người ít nói phát biểu trước", "Trưởng nhóm nói sau cùng", "Viết ý vào tài liệu chung trước buổi họp"],
        illus: "ear", icons: ["mic", "clock", "file-text"] },
      lines: [
        L("l1", null, "Invite quiet people first, gently, by name. You speak last.", "Mời người ít nói phát biểu trước, gọi tên nhẹ nhàng. Bạn nói sau cùng."),
        L("l2", null, "Or ask everyone to write views in a shared document first, so loud voices do not cover the rest.", "Hoặc nhờ mọi người viết ý vào tài liệu chung trước, để người nói to không lấn át."),
      ] },
    { id: "s11", module: "SCENE-01", ref: "p8",
      data: { set: "meeting", label: "Đào sâu", actors: [{ id: "thao", side: "left" }, { id: "lan", side: "center" }] },
      lines: [
        L("l1", "thao", "What is the biggest risk of this option?", "Cách này rủi ro lớn nhất là gì?", { pose: "explain", to: "lan" }),
        L("l2", "thao", "And what would change your mind?", "Cần điều gì để em đổi ý?", { face: "thinking", to: "lan" }),
        L("l3", "lan", "Good question. Let me think.", "Câu hỏi hay. Để em nghĩ đã.", { face: "thinking", react: { thao: "happy" } }),
        L("l4", null, "These questions move the talk to reasons, not to who wins.", "Những câu này đưa cuộc bàn sang lý lẽ, không phải ai thắng."),
      ] },
    { id: "s12", module: "CMP-07", ref: "p9",
      data: { wrong: "Your idea is not good.", right: "Option A has a weak point in cost.", diff: ["Your", "idea"], note: "Ý bị bác không có nghĩa là người bị bác" },
      lines: [
        L("l1", null, "Separate the idea from the person. Not “Your idea is not good.”", "Tách ý khỏi người. Không phải “Ý của bạn không ổn”."),
        L("l2", null, "But “Option A has a weak point in cost.” Attack people, and they stop sharing.", "Mà là “Phương án A yếu ở chi phí”. Bị chê người, họ sẽ thôi góp ý."),
      ] },

    // ---------- Phần 3 ----------
    { id: "s13", module: "HOST-03", data: { n: 3, of: 5, title: "So cho công bằng" },
      lines: [L("l1", "det", "Part three: comparing options fairly.", "Phần ba: so các phương án thế nào cho công bằng.")] },
    { id: "s14", module: "TEXT-04", ref: "p12",
      data: { text: "Thống nhất tiêu chí trước khi so: thời gian, chi phí, rủi ro, ảnh hưởng đến khách.", marks: ["tiêu chí"], illus: "straight-ruler" },
      lines: [
        L("l1", null, "Agree on criteria first: time, cost, risk, and the effect on the client.", "Thống nhất tiêu chí trước: thời gian, chi phí, rủi ro, ảnh hưởng đến khách."),
        L("l2", null, "The talk moves from “I like it” to “which one meets them better”. Even if your own idea loses.", "Cuộc bàn chuyển từ “tôi thích” sang “cách nào đáp ứng tốt hơn”. Kể cả khi ý của bạn thua."),
      ] },
    { id: "s15", module: "LIST-05", ref: "p13",
      data: { title: "Bảng nhỏ cho mỗi phương án", illus: "clipboard",
        items: ["Điểm mạnh", "Điểm yếu", "Rủi ro lớn nhất", "Nếu sai có quay lại được không"] },
      lines: [L("l1", null, "For each option: strengths, weaknesses, the biggest risk, and can we go back if wrong?", "Mỗi phương án: điểm mạnh, điểm yếu, rủi ro lớn nhất, sai có quay lại được không?")] },
    { id: "s16", module: "CMP-03", ref: "p14,p15,p16",
      data: { title: "Chọn giữa hai cách làm sự kiện cho khách", illus: "party-popper",
        a: { label: "Cách A", do: "Cho cả nhóm giơ tay ngay", result: "Vượt khoản chi khách duyệt, phải làm lại", illus: "raising-hands" },
        b: { label: "Cách B", do: "Ghi tiêu chí trước: chi phí, hạn, rủi ro", result: "Phương án vượt chi bị loại ngay", illus: "clipboard" } },
      lines: [
        L("l1", null, "Way A: a quick show of hands. The attractive option wins, then breaks the budget.", "Cách A: giơ tay ngay. Phương án hấp dẫn thắng, rồi vượt khoản chi khách duyệt."),
        L("l2", null, "Way B: criteria on the board first. The over-budget option is out at once.", "Cách B: ghi tiêu chí trước. Phương án vượt chi bị loại ngay."),
      ] },
    { id: "s16b", module: "TEXT-02", ref: "p14,p16",
      data: { text: "Đặt tiêu chí trước, đếm tay sau.", keywords: ["tiêu chí", "đếm tay"], illus: "raising-hands" },
      lines: [
        L("l1", null, "Popular is not always right. Vote only when every option is acceptable.", "Ý nhiều người thích chưa chắc đúng. Chỉ biểu quyết khi mọi lựa chọn đều chấp nhận được."),
        L("l2", null, "Set the criteria first, and count the hands after.", "Đặt tiêu chí trước, đếm tay sau."),
      ] },

    // ---------- Phần 4 ----------
    { id: "s17", module: "HOST-03", data: { n: 4, of: 5, title: "Chốt và người bị bác ý" },
      lines: [L("l1", "det", "Part four: back to Thao. Two weeks later.", "Phần bốn: quay lại với Thảo, hai tuần sau.")] },
    { id: "s18", module: "DLG-01", ref: "p17,p20,p21,p22",
      data: { set: "meeting", label: "Hai tuần sau",
        actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right" }],
        verdict: { ok: false, label: "Hẹn “suy nghĩ thêm” mãi", why: "Sát hạn, sếp phải vào quyết thay; cả hai bạn không vui, nhóm nói trưởng nhóm né tránh." } },
      lines: [
        L("l1", "dung", "So, way A or way B?", "Vậy chốt cách A hay cách B ạ?", { pose: "explain", to: "thao" }),
        L("l2", "thao", "Let me think about it a bit more.", "Để chị suy nghĩ thêm chút nữa.", { face: "worried", pose: "think", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Near the deadline, the manager had to decide. Nobody was happy. Not choosing is also a choice, the latest one.", "Sát hạn, sếp phải quyết thay. Không ai vui. Không chọn cũng là chọn, mà là chọn muộn nhất."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử cách khác nhé.", { phase: "redo" }),
        L("l6", "thao", "We compared both with our criteria. We choose way B, because it costs less.", "Mình đã so hai cách theo tiêu chí. Chốt cách B, vì chi phí thấp hơn.", { phase: "redo", pose: "explain" }),
        L("l7", "thao", "I will send who does what, and we review in two weeks.", "Chị gửi phân việc cho mọi người, hai tuần sau mình xem lại.", { phase: "redo", face: "happy" }),
        L("l8", "dung", "Okay. Clear.", "Dạ, rõ rồi ạ.", { phase: "redo", face: "neutral" }),
      ] },
    { id: "s19", module: "SCENE-02", ref: "p17",
      data: { set: "office", label: "Gửi cả nhóm", actor: { id: "thao", side: "left" }, contact: { name: "Nhóm dự án", illus: "busts-in-silhouette" },
        messages: [
          { from: "me", text: "Chốt: làm cách B, vì chi phí thấp hơn.", at: "l1" },
          { from: "me", text: "Lan dẫn phần chuẩn bị, Dũng lo hậu cần. Hai tuần sau mình xem lại.", at: "l2" } ] },
      lines: [
        L("l1", "thao", "Decision: way B, because it costs less.", "Chốt: làm cách B, vì chi phí thấp hơn."),
        L("l2", "thao", "Lan leads the preparation, Dung handles logistics. We review in two weeks.", "Lan dẫn phần chuẩn bị, Dũng lo hậu cần. Hai tuần sau mình xem lại."),
        L("l3", null, "What was decided, why, who does what, when to review. In writing, so nobody understands it differently.", "Quyết gì, vì sao, ai làm gì, khi nào xem lại. Viết ra, để không ai hiểu mỗi người một kiểu."),
      ] },
    { id: "s20", module: "SCENE-01", ref: "p18",
      data: { set: "office", label: "Nói riêng", actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", null, "Then talk privately with the person whose idea was not chosen.", "Rồi nói riêng với người có ý không được chọn."),
        L("l2", "thao", "Your idea showed me the time risk. This time we chose way B because it costs less.", "Ý của em giúp chị thấy rõ rủi ro thời gian. Lần này mình chọn cách B vì chi phí thấp hơn.", { pose: "explain" }),
        L("l3", "thao", "And I will watch the exact risk you raised.", "Chị sẽ theo dõi đúng rủi ro em nêu.", { face: "happy" }),
        L("l4", "dung", "Okay. I am in.", "Dạ, em cùng làm ạ.", { face: "happy", pose: "thumb", react: { thao: "happy" } }),
      ] },
    { id: "s21", module: "TEXT-02", ref: "p19",
      data: { text: "Không đồng ý vẫn cùng làm.", keywords: ["vẫn cùng làm"], illus: "handshake" },
      lines: [
        L("l1", null, "Disagree, and still commit. Once decided, everyone works fully on it.", "Không đồng ý vẫn cùng làm. Đã chốt thì ai cũng làm hết sức."),
        L("l2", null, "Still worried? Say it to the leader directly, not behind backs. Hear a hallway complaint? Invite them to tell you.", "Còn lo thì nói thẳng với trưởng nhóm, không nói sau lưng. Nghe ai than ở hành lang? Mời họ nói thẳng với mình."),
      ] },

    // ---------- Phần 5 ----------
    { id: "s22", module: "HOST-03", data: { n: 5, of: 5, title: "Nếu quyết sai" },
      lines: [L("l1", "det", "Last part: what if you decided wrong?", "Phần cuối: nếu quyết sai thì sao?")] },
    { id: "s23", module: "TEXT-04", ref: "p23",
      data: { text: "Hẹn trước ngày xem lại, ví dụ sau hai tuần. Thấy sai thì sửa sớm, khi cái giá còn nhỏ.", marks: ["sửa sớm"], illus: "spiral-calendar" },
      lines: [
        L("l1", null, "Set the review date in advance, for example in two weeks.", "Hẹn trước thời điểm xem lại, ví dụ sau hai tuần."),
        L("l2", null, "See signs it is wrong? Change early, while the cost is small. It is planned work, not shame.", "Thấy dấu hiệu sai thì sửa sớm, khi cái giá còn nhỏ. Đó là việc đã hẹn, không phải xấu hổ."),
      ] },
    { id: "s24", module: "SCENE-01", ref: "p24",
      data: { set: "meeting", label: "Hai tuần sau nữa", actors: [{ id: "thao", side: "left" }, { id: "lan", side: "center" }] },
      lines: [
        L("l1", "thao", "I chose this way, and it did not work as well as I thought. From next week, we switch.", "Chị đã chọn cách này và nó không hiệu quả như chị nghĩ. Từ tuần sau mình đổi cách khác.", { pose: "explain" }),
        L("l2", "lan", "Thanks for saying it clearly.", "Cảm ơn chị đã nói rõ ạ.", { face: "happy", react: { thao: "happy" } }),
        L("l3", null, "Take responsibility. Do not blame the person who suggested it. The team trusts you more.", "Nhận trách nhiệm, đừng đổ cho người đã góp ý. Nhóm sẽ tin bạn hơn."),
      ] },
    { id: "s25", module: "HOST-02", ref: "p26,p27",
      data: { statement: "Trưởng nhóm đổi quyết định là tự làm mất uy tín", truth: false,
        why: "Nhóm thấy kế hoạch không ổn từ lâu. Họ xem bạn làm gì khi thấy sai.", kicker: "Nhận sai sớm thì giữ được uy, cố chấp mới làm mất uy" },
      lines: [
        L("l1", "det", "A leader who changes a decision loses respect. True or false?", "Trưởng nhóm đổi quyết định là tự làm mất uy tín. Đúng hay sai?"),
        L("l2", "det", "False. The team saw the problem early. They watch what you do about it.", "Sai. Nhóm thấy kế hoạch không ổn từ lâu. Họ xem bạn làm gì khi thấy sai.", { face: "stern" }),
        L("l3", "det", "Holding on to a failing plan slows the project and loses trust.", "Cố giữ cách đã hỏng làm dự án chậm thêm, nhóm mất niềm tin."),
        L("l4", "det", "Admit a mistake early and you keep respect. Being stubborn loses it.", "Nhận sai sớm thì giữ được uy, cố chấp mới làm mất uy.", { face: "happy" }),
      ] },
    { id: "s26", module: "TEXT-04", ref: "p25",
      data: { text: "Việc vượt quyền mình: đưa lên sếp kèm tóm tắt các phương án và đề xuất của nhóm.", marks: ["đề xuất của nhóm"], illus: "office-building" },
      lines: [
        L("l1", null, "A big budget, or other teams affected? Take it to your manager, with the options and the team's suggestion.", "Khoản chi lớn, ảnh hưởng nhóm khác? Đưa lên sếp, kèm tóm tắt phương án và đề xuất."),
        L("l2", null, "Not avoiding: the right decision, to the right person.", "Không phải né tránh, mà là đưa đúng việc đến đúng người."),
      ] },
    { id: "s27", module: "LIST-09", ref: "p28",
      data: { title: "Lần bàn bạc tới", illus: "clipboard", keywords: [
        { text: "Nói rõ ai quyết", illus: "index-pointing-up" }, { text: "Việc nhỏ quyết nhanh", illus: "high-voltage" },
        { text: "Người ít nói trước", illus: "ear" }, { text: "Thống nhất tiêu chí", illus: "straight-ruler" },
        { text: "Chốt rõ kèm lý do", illus: "check-mark-button" }, { text: "Nói riêng với người bị bác", illus: "speech-balloon" },
        { text: "Hẹn ngày xem lại", illus: "spiral-calendar" }, { text: "Sai thì sửa sớm", illus: "wrench" } ] },
      lines: [
        L("l1", null, "Say who decides. Small things fast. Quiet voices first. Agree on criteria.", "Nói rõ ai quyết. Việc nhỏ quyết nhanh. Người ít nói trước. Thống nhất tiêu chí."),
        L("l2", null, "Decide with reasons. Talk privately with the one who lost. Review, and fix early.", "Chốt kèm lý do. Nói riêng với người bị bác. Hẹn xem lại, sai thì sửa sớm."),
      ] },

    { id: "s28", module: "END-01", ref: "outro",
      data: { takeaway: "Không chọn cũng là chọn, mà là chọn muộn nhất.", marks: ["chọn muộn nhất"], illus: "hourglass-not-done" },
      lines: [
        L("l1", null, "A good decision is not one everyone likes. It is one everyone understands, and works on together.", "Quyết định tốt không phải ai cũng thích, mà ai cũng hiểu vì sao và sẵn lòng cùng làm."),
        L("l2", null, "For the choice your team is discussing now: say who decides, by which criteria, and by when.", "Với việc nhóm đang bàn dở: nói rõ ai quyết, theo tiêu chí nào, hạn chốt ngày nào."),
      ] },
    { id: "s29", module: "QUIZ-01", ref: "questions[15]",
      data: {
        q: "Which saying sums up the right order for comparing options?",
        options: [
          "Let the client make every choice, so the team never has to decide",
          "Just count the votes, because long explanations only slow everyone down",
          "Set the criteria first, and only count the raised hands after that",
        ],
        correct: 2, countdown: 5, illus: "raising-hands",
        why: "Số phiếu không thay được tiêu chí. Loại phương án không đạt trước, rồi mới biểu quyết.",
      },
      lines: [
        L("l1", null, "Which saying sums up the right order for comparing options?", "Câu nào tóm tắt thứ tự đúng khi so các phương án?"),
        L("l2", null, "Set the criteria first, and only count the raised hands after that.", "Đặt tiêu chí trước, đếm tay sau."),
        L("l3", null, "Votes cannot replace criteria.", "Số phiếu không thay được tiêu chí."),
      ],
      beats: { after: 600 } },
    { id: "s30", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Ra quyết định khi nhóm bất đồng" },
      lines: [L("l1", "det", "You finished the series! Forty questions are waiting.", "Bạn đã đi hết chuỗi! Bốn mươi câu hỏi đang chờ.", { face: "laugh" })] },
  ],
};
