// Kịch bản video W lần 3 (#110) — "Cách nói “không” một cách chuyên nghiệp" · chuỗi "Giao tiếp nơi công sở"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-say-no-professionally--w01",
  hook: "HOOK-09",
  loop: { open: "s01", close: "s31" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (D)
  unit: { audience: "office-communicators", slug: "how-to-say-no-professionally", door: "ky-nang", level: "B1",
    title: "Cách nói “không” một cách chuyên nghiệp", series: "Giao tiếp nơi công sở" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Hiền → Thảo; anh Tâm (marketing) → Dũng (xưng hô đổi theo tuổi: Thảo xưng “chị”); Khôi (p14) → Thảo; sếp → Cô Hoa (chỉ nói câu nhờ việc trung lập của p14); đồng nghiệp phòng khác hay nhờ (p16, p17) → Dũng; Ánh (p19) → Thảo, khách đặt đơn lớn → Sam (vai mới). Luân (p10) kể không tên ở CMP-07. Tên anh Hoàng (p9) giữ nguyên chữ của bài, không lên hình. Vai mới: Sam. Phủ ý: 26/26. Bài có 8 mục; gộp mục 1–2, mục 5–6 (6 chương). Câu thoại treo “Để chị xem” ở s01 được trả lời ở DLG s08 (p4–p6). Hai cảnh dừng: DLG s08 và SCENE-03 s20 (hứa ba ngày / nói thật năm ngày, p19, p20). Lời đáp của Dũng, Sam ở phần làm lại là lời trung lập. Yêu cầu sai quy định (p21) chỉ kể ở thẻ, không gán cho nhân vật nào. Câu đố: questions[11].",
  scenes: [
    // ── Mở đầu: một câu thoại treo
    { id: "s01", module: "SCENE-01", ref: "p5",
      data: { set: "office", label: "Một câu trả lời", actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", "dung", "Thảo, could you make a data table for Thursday's meeting?", "Chị Thảo ơi, chị làm giúp em bảng số liệu cho buổi họp thứ Năm nhé?", { pose: "explain" }),
        L("l2", "thao", "Let me see.", "Để chị xem.", { face: "thinking", pose: "think" }),
        L("l3", null, "Three little words. By Thursday morning, they will cause a big problem.", "Chỉ ba chữ. Đến sáng thứ Năm, chúng sẽ gây rắc rối lớn.", { wait: 300 }),
      ], beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Từ chối sao cho chuyên nghiệp?", pose: "present",
        items: ["Câu trả lời rõ", "Một lý do ngắn", "Ghi nhận nhu cầu", "Một phương án khác"] },
      lines: [
        L("l1", "det", "How do you say no and still stay professional? Four parts.", "Từ chối sao cho vẫn chuyên nghiệp? Bốn phần."),
        L("l2", "det", "A clear answer.", "Một câu trả lời rõ."),
        L("l3", "det", "One short reason.", "Một lý do ngắn."),
        L("l4", "det", "Show you understand their need.", "Ghi nhận nhu cầu của người kia."),
        L("l5", "det", "And another option, if you can.", "Và một phương án khác, nếu có."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng nói “không”", chapters: [
        { label: "Có mất điểm, khi nào nên", illus: "balance-scale" },
        { label: "Từ chối lịch sự mà rõ", illus: "speech-balloon" },
        { label: "Sếp giao thêm việc", illus: "clipboard" },
        { label: "Đồng nghiệp, khách hàng", illus: "handshake" },
        { label: "Yêu cầu sai quy định", illus: "no-entry" },
        { label: "Câu nên tránh, câu tiếng Anh", illus: "zipper-mouth-face" } ] },
      lines: [
        L("l1", null, "Six parts: whether and when, the four steps, your boss,", "Sáu phần: có nên và khi nào, bốn bước, khi sếp giao thêm,"),
        L("l2", null, "colleagues and clients, wrong requests, and what to avoid.", "đồng nghiệp và khách, yêu cầu sai quy định, câu nên tránh."),
      ] },

    // ── Chương 1
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Có mất điểm? Khi nào nên?" },
      lines: [L("l1", "det", "Part one: does saying no cost you, and when should you?", "Phần một: từ chối có mất điểm, và khi nào nên nói “không”?")] },
    { id: "s05", module: "REL-01", ref: "p1",
      data: { cause: "Nhận thêm một việc", effect: "Ngầm nói “không” với một việc khác, thường là việc chính của mình", causeIllus: "inbox-tray", effectIllus: "hourglass-not-done" },
      lines: [
        L("l1", null, "Your time is limited.", "Thời gian của bạn có hạn."),
        L("l2", null, "Each extra task quietly says no to something else, often your main job.", "Mỗi lần nhận thêm việc, bạn ngầm nói “không” với việc khác, thường là việc chính."),
      ] },
    { id: "s06", module: "CMP-01", ref: "p2",
      data: { labels: ["Biết từ chối đúng lúc", "Nhận hết"], left: "Đã nói “có” là làm được: được tin hơn", right: "Trễ hạn, làm qua loa: dần mất uy tín", illus: ["handshake", "hourglass-not-done"] },
      lines: [
        L("l1", null, "People who refuse at the right time are trusted more. Their yes means it gets done.", "Người biết từ chối đúng lúc được tin hơn: họ nói “có” là làm được."),
        L("l2", null, "Those who accept everything, then miss deadlines, slowly lose trust, even if they're liked at first.", "Người nhận hết rồi trễ hạn, làm qua loa mới dần mất uy tín, dù lúc đầu ai cũng quý."),
      ] },
    { id: "s07", module: "LIST-07", ref: "p3",
      data: { title: "Cân nhắc từ chối khi việc mới", items: [
        { text: "Làm trễ việc quan trọng đã nhận", illus: "alarm-clock" },
        { text: "Ngoài chuyên môn, có người hợp hơn", illus: "busts-in-silhouette" },
        { text: "Thời hạn không thực tế", illus: "hourglass-not-done" } ] },
      lines: [
        L("l1", null, "Think about saying no when it delays important work you've already accepted.", "Cân nhắc từ chối khi việc mới làm trễ việc quan trọng đã nhận."),
        L("l2", null, "When it's outside your role and another team does it better.", "Khi nó ngoài chuyên môn, có người hợp hơn."),
        L("l3", null, "Or when the deadline isn't realistic for the people you have.", "Hoặc khi thời hạn không thực tế với sức người hiện có."),
      ] },
    { id: "s08", module: "DLG-01", ref: "p4,p5,p6",
      data: { set: "office", label: "Sáng thứ Năm",
        actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right" }],
        verdict: { ok: false, label: "“Để em xem” rồi im lặng",
          why: "Người nhờ tưởng bạn đã nhận nên không tìm ai khác; đến hạn thì không còn kịp." } },
      lines: [
        L("l1", "dung", "Where's the table? The meeting starts now!", "Bảng số liệu đâu chị? Sắp họp rồi!", { face: "worried", pose: "shrug" }),
        L("l2", "thao", "Oh no, I got busy and forgot. I can't make it.", "Ôi, chị bận quá quên mất. Không kịp rồi.", { face: "sad", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "He thought she'd said yes, so he asked no one else. Now he goes in with no data.", "Dũng tưởng chị đã nhận nên không nhờ ai; giờ phải vào họp không có số liệu."),
        L("l5", "det", "Let's rewind to Monday.", "Tua lại thứ Hai nhé.", { phase: "redo" }),
        L("l6", "thao", "Let me check my schedule. I'll answer you before three this afternoon.", "Để chị xem lại lịch rồi trả lời em trước 3 giờ chiều nay nhé.", { phase: "redo", face: "thinking", pose: "explain" }),
        L("l7", "dung", "Okay, I'll wait for your answer.", "Dạ, em chờ chị trả lời.", { phase: "redo", face: "happy" }),
        L("l8", "det", "Asking for time is easier than taking back a quick promise. Say “let me see”, then give a time.", "Xin thời gian dễ hơn rút lại lời hứa vội. Nói “để em xem” thì phải hẹn giờ.", { phase: "redo" }),
      ] },

    // ── Chương 2
    { id: "s09", module: "HOST-03", data: { n: 2, of: 6, title: "Lịch sự mà vẫn rõ" },
      lines: [L("l1", "det", "Part two: four steps to a polite, clear no.", "Phần hai: từ chối thế nào cho lịch sự mà vẫn rõ?")] },
    { id: "s10", module: "LIST-06", ref: "p7,p8,p9",
      data: { title: "Bốn bước, chừng hai mươi giây", steps: [
        { text: "Ghi nhận nhu cầu", illus: "ear" },
        { text: "Câu trả lời rõ, không lấp lửng", illus: "speech-balloon" },
        { text: "Một lý do ngắn", illus: "memo" },
        { text: "Phương án khác nếu có", illus: "light-bulb" } ] },
      lines: [
        L("l1", null, "One: show you understand. Two: a clear answer, no “maybe”.", "Một: ghi nhận nhu cầu. Hai: câu trả lời rõ, không lấp lửng."),
        L("l2", null, "“Maybe, we'll see” leaves them unable to plan.", "Câu “để xem đã” khiến người kia không biết đường mà tính."),
        L("l3", null, "Three: one short reason. Four: another option. All in about twenty seconds.", "Ba: một lý do ngắn. Bốn: phương án khác. Cả bốn bước chừng hai mươi giây."),
      ] },
    { id: "s11", module: "SCENE-01", ref: "p8,p9",
      data: { set: "office", label: "Thảo trả lời, ba giờ chiều", actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", "thao", "I know you need this table for Thursday's meeting.", "Chị hiểu em cần bảng này cho buổi họp thứ Năm.", { pose: "hold", to: "dung" }),
        L("l2", "thao", "This week I can't take on more. I have the quarterly report due Friday.", "Tuần này chị không nhận thêm được. Chị đang phải nộp báo cáo quý trước thứ Sáu.", { pose: "explain" }),
        L("l3", "thao", "I can do it next Monday, or try Hoàng in analytics.", "Thứ Hai tuần sau chị làm được, hoặc em hỏi thử anh Hoàng bên phân tích.", { face: "happy", react: { dung: "happy" } }),
        L("l4", "dung", "Got it. I'll ask Hoàng now. Thanks!", "Dạ, em hỏi anh Hoàng luôn. Cảm ơn chị!", { face: "happy", pose: "thumb" }),
      ] },
    { id: "s12", module: "CMP-07", ref: "p10",
      data: { wrong: "Em bận việc nhà, lại mệt, xe hỏng, còn có hẹn…", right: "Cuối tuần này em có việc gia đình, em không trực được.",
        diff: ["lại mệt,", "xe hỏng,"], note: "Một lý do thật, nói một lần, kèm một gợi ý khác" },
      lines: [
        L("l1", null, "A colleague asks someone to cover a weekend fair. He already has a family matter.", "Đồng nghiệp nhờ trực thay hội chợ cuối tuần, mà anh ấy đã có việc gia đình."),
        L("l2", null, "Before: housework, tired, new to the product, broken bike, another appointment…", "Trước: bận việc nhà, lại mệt, chưa quen sản phẩm, xe hỏng, còn có hẹn…"),
        L("l3", null, "Each reason gets answered: someone can drive you, we'll train you, just half a day…", "Lý do nào cũng bị gỡ: có người chở, sẽ hướng dẫn, chỉ nửa buổi thôi…"),
      ] },
    { id: "s12b", module: "HOST-01", ref: "p11",
      data: { pose: "point", text: "Một lý do ngắn, nói một lần, đừng bày cả danh sách." },
      lines: [
        L("l4", "det", "After: I have a family matter this weekend, so I can't. Maybe ask the sales team?", "Sau: cuối tuần này em có việc gia đình, em không trực được. Anh hỏi thêm bên bán hàng nhé."),
        L("l5", "det", "One short reason, said once. Don't lay out a whole list.", "Một lý do ngắn, nói một lần, đừng bày cả danh sách."),
      ] },

    // ── Chương 3
    { id: "s13", module: "HOST-03", data: { n: 3, of: 6, title: "Sếp giao thêm việc" },
      lines: [L("l1", "det", "Part three: your boss adds work, and you're already full.", "Phần ba: sếp giao thêm việc mà mình đã kín lịch thì sao?")] },
    { id: "s14", module: "SCENE-01", ref: "p12,p13",
      data: { set: "office", label: "Sếp giao thêm việc", actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l1", null, "To a boss, “I can't do it” sounds hard. Put the new task next to your current ones, and ask them to choose.", "Với sếp, “em không làm được” nghe khá cứng. Đặt việc mới cạnh việc đang làm, nhờ sếp chọn."),
        L("l2", "hoa", "Can you also make slides for our new client?", "Em làm thêm bộ slide cho khách mới nhé?", { pose: "explain" }),
        L("l3", "thao", "I'm on the tender file and the client report, both due Friday.", "Em đang làm hồ sơ thầu và báo cáo khách hàng, cả hai hạn thứ Sáu.", { pose: "explain", to: "hoa" }),
        L("l4", "thao", "If I take this, one of them will slip. Which should I put first?", "Nếu nhận thêm, một trong hai việc sẽ phải lùi. Cô muốn em ưu tiên việc nào ạ?", { face: "thinking", react: { hoa: "thinking" } }),
        L("l5", null, "Often, the boss doesn't know how busy you are.", "Nhiều khi sếp không biết bạn đang bận đến mức nào."),
      ] },
    { id: "s15", module: "BEAT-04", ref: "p14",
      data: { seconds: 5, prompt: "Đang ôm hai việc cùng hạn thứ Sáu, sếp nhờ làm thêm slide. Đáp “Dạ được ạ” để giữ lòng sếp, hay nói lại điều gì?" },
      lines: [
        L("l1", null, "Two tasks due Friday, and now slides. Just say “Sure”, to please the boss, or say something else?", "Hai việc cùng hạn thứ Sáu, thêm slide. Đáp “Dạ được ạ” cho vừa lòng sếp, hay nói gì khác?"),
      ] },
    { id: "s16", module: "HOST-02", ref: "p14,p15",
      data: { statement: "Sếp giao thêm thì cứ “Dạ được ạ” cho giữ lòng sếp", truth: false,
        why: "Nhận hết thì cả ba việc có thể dang dở. Nêu việc đang làm, hỏi ưu tiên: sếp quyết đúng khi đủ thông tin." },
      lines: [
        L("l1", "det", "Just say yes to keep the boss happy. True or false?", "Cứ “Dạ được ạ” cho giữ lòng sếp. Đúng hay sai?"),
        L("l2", "det", "False. Take it all, and by Friday all three may be unfinished.", "Sai. Nhận hết thì cuối tuần cả ba việc có thể đều dang dở.", { face: "stern" }),
        L("l3", "det", "Knowing you're full, the boss may decide the slides can wait. Show your list, let the boss choose.", "Biết bạn kín việc, sếp có thể thấy slide chưa gấp. Đưa sếp danh sách việc, để sếp chọn ưu tiên."),
      ] },

    // ── Chương 4
    { id: "s17", module: "HOST-03", data: { n: 4, of: 6, title: "Đồng nghiệp, khách hàng" },
      lines: [L("l1", "det", "Part four: colleagues who keep asking, and clients.", "Phần bốn: đồng nghiệp nhờ vả liên tục, và khi từ chối khách.")] },
    { id: "s18", module: "SCENE-01", ref: "p16,p17",
      data: { set: "office", label: "Nhờ đều đặn", actors: [{ id: "thao", side: "left" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", "dung", "Could you do the weekly table for me again?", "Chị làm giúp em bảng tuần này nữa nhé?", { pose: "explain", to: "thao" }),
        L("l2", null, "Helping is good. But when it's regular work that isn't yours, set a limit, gently but clearly.", "Giúp nhau là tốt; nhưng khi bị nhờ đều đặn việc không phải của mình, hãy nói nhẹ mà rõ."),
        L("l3", "thao", "I can help this time. From next month, please ask the support team. I'm taking on a new project.", "Lần này chị giúp được, nhưng từ tháng sau em nhờ bên hỗ trợ nhé, chị đang nhận dự án mới.", { pose: "explain" }),
        L("l4", "thao", "Or I can't do the whole table, but I'll send you my template to fill in faster.", "Hoặc: chị không làm cả bảng được, nhưng chị gửi em mẫu chị hay dùng để em điền cho nhanh.", { face: "happy", pose: "give", react: { dung: "happy" } }),
        L("l5", null, "They still feel helped, and you keep your time. Without a limit, a favour slowly becomes your job.", "Người kia vẫn thấy được giúp, bạn giữ được thời gian. Không có giới hạn, việc nhờ dần thành việc của bạn."),
      ] },
    { id: "s19", module: "CMP-01", ref: "p18",
      data: { labels: ["Chỉ nói điều không thể", "Nói điều làm được"], left: "“Không kịp giao trong ba ngày.”", right: "“Giao trước một nửa thứ Năm, phần còn lại thứ Hai được không anh?”", illus: ["no-entry", "package"] },
      lines: [
        L("l1", null, "With clients, say what you can do, not only what you can't.", "Với khách, nói điều làm được thay vì chỉ nói điều không thể."),
        L("l2", null, "Not “We can't deliver in three days”, but “We can send half by Thursday, and the rest on Monday. Would that work?”", "Thay vì “không kịp giao trong ba ngày”, hãy nói “giao trước một nửa thứ Năm, phần còn lại thứ Hai được không anh?”"),
      ] },
    { id: "s20", module: "SCENE-03", ref: "p19,p20",
      data: { set: "office", actors: [{ id: "thao" }, { id: "sam" }],
        left: { label: "Nhận ba ngày", ok: false }, right: { label: "Nói thật năm ngày", ok: true } },
      lines: [
        L("a1", "sam", "Can you deliver this big order in three days?", "Đơn lớn này giao trong ba ngày được không?", { phase: "a", pose: "explain", to: "thao" }),
        L("a2", "thao", "Yes, three days!", "Dạ được, ba ngày ạ!", { phase: "a", face: "happy", pose: "thumb" }),
        L("a3", null, "The warehouse needs five. The goods aren't ready, Sam had promised his own client, and may go elsewhere.", "Kho cần ít nhất năm ngày. Đến hạn hàng chưa đủ, Sam đã hứa với khách của mình, có thể chuyển nơi khác.", { phase: "a" }),
        L("b1", "sam", "Can you deliver this big order in three days?", "Đơn lớn này giao trong ba ngày được không?", { phase: "b", pose: "explain", to: "thao" }),
        L("b2", "thao", "Honestly, we need five days. But we can send part of it in three.", "Thật lòng bên em cần năm ngày, nhưng có thể giao trước một phần trong ba ngày.", { phase: "b", pose: "explain", face: "neutral" }),
        L("b3", "sam", "A bit of a pity, but okay. I'll tell my client now.", "Hơi tiếc, nhưng được. Tôi báo lại khách của tôi luôn.", { phase: "b", face: "neutral" }),
        L("b4", "det", "Promise less and keep it, rather than promise more and miss it.", "Hứa ít mà giữ được, hơn hứa nhiều mà lỡ hẹn.", { phase: "b" }),
      ] },

    // ── Chương 5
    { id: "s21", module: "HOST-03", data: { n: 5, of: 6, title: "Yêu cầu sai quy định" },
      lines: [L("l1", "det", "Part five: a request that breaks the rules.", "Phần năm: yêu cầu không đúng quy định thì từ chối thế nào?")] },
    { id: "s22", module: "OPEN-19", ref: "p21",
      data: { label: "Từ chối dứt khoát", warning: "Sửa lùi ngày chứng từ, lộ thông tin khách", detail: "“Việc này không đúng quy định, em không làm được ạ.”" },
      lines: [
        L("l1", null, "Some requests need a firm no: backdating papers, or sharing client data.", "Có đề nghị phải từ chối dứt khoát: sửa lùi ngày chứng từ, lộ thông tin khách."),
        L("l2", null, "Even from a senior. Calm and short: “This is against the rules. I cannot.”", "Kể cả người lớn hơn nhờ: “Việc này không đúng quy định, em không làm được ạ.”"),
      ] },
    { id: "s23", module: "LIST-13", ref: "p22",
      data: { title: "Nếu bị ép", items: [
        { title: "Hỏi lại bằng văn bản", detail: "Để yêu cầu có dấu vết rõ ràng.", illus: "memo" },
        { title: "Trao đổi đúng nơi", detail: "Quản lý trực tiếp, nhân sự hay pháp chế, tuỳ quy trình.", illus: "office-building" },
        { title: "Không cần tranh luận dài", detail: "Chỉ cần giữ câu trả lời.", illus: "shield" } ] },
      lines: [
        L("l1", null, "Pushed? Ask for it in writing.", "Bị ép: đề nghị hỏi lại bằng văn bản."),
        L("l2", null, "Or talk to your manager, HR, or legal, depending on the process.", "Hoặc trao đổi với quản lý trực tiếp, nhân sự, pháp chế, tuỳ quy trình."),
        L("l3", null, "No long argument needed. Just keep your answer.", "Không cần tranh luận dài, chỉ cần giữ câu trả lời."),
      ] },

    // ── Chương 6
    { id: "s24", module: "HOST-03", data: { n: 6, of: 6, title: "Câu nên tránh" },
      lines: [L("l1", "det", "Part six: what to avoid, and a few English lines.", "Phần sáu: những câu nên tránh, và vài câu tiếng Anh.")] },
    { id: "s25", module: "CMP-06", ref: "p23",
      data: { do: ["Trả lời rõ, giọng bình tĩnh"], dont: ["“Để em xem” rồi im lặng", "Nói dối về lý do", "Xin lỗi quá nhiều lần trong một câu", "Giọng khó chịu, phàn nàn người nhờ"],
        doIcons: ["speech-balloon"], dontIcons: ["zipper-mouth-face", "lying-face", "folded-hands", "angry-face"] },
      lines: [
        L("l1", null, "Avoid “let me see” and then silence.", "Tránh nói “để em xem” rồi im lặng."),
        L("l2", null, "Avoid fake reasons. They're easy to find out, and trust is lost for a long time.", "Tránh nói dối về lý do: dễ lộ, mất lòng tin lâu dài."),
        L("l3", null, "Avoid saying sorry many times in one sentence, and an annoyed tone.", "Tránh xin lỗi quá nhiều lần trong một câu, tránh giọng khó chịu, phàn nàn người nhờ."),
      ] },
    { id: "s26", module: "TEXT-03", ref: "p24",
      data: { text: "Bị hỏi lại: nhắc lại câu trả lời, đừng thêm lý do mới.", illus: "counterclockwise-arrows-button" },
      lines: [
        L("l1", null, "Asked again? Calmly repeat your answer. No new reasons.", "Bị hỏi lại: bình tĩnh nhắc lại câu trả lời, không thêm lý do mới."),
        L("l2", null, "A new reason opens a new door to talk you round.", "Thêm lý do là mở thêm chỗ để bị thuyết phục lại."),
      ] },
    { id: "s27", module: "LIST-03", ref: "p25",
      data: { title: "Vài câu tiếng Anh", items: [
        { front: "I am sorry, I cannot take this on this week.", back: "Xin lỗi, tuần này tôi không nhận thêm việc này được.", illus: "no-entry", backIllus: "spiral-calendar" },
        { front: "I can do it next Monday if that works.", back: "Thứ Hai tuần sau tôi làm được, nếu ổn với anh/chị.", illus: "spiral-calendar", backIllus: "check-mark-button" },
        { front: "Which task should I put first?", back: "Tôi nên ưu tiên việc nào trước?", illus: "clipboard", backIllus: "red-question-mark" } ] },
      lines: [
        L("l1", null, "I am sorry, I cannot take this on this week.", "Xin lỗi, tuần này tôi không nhận thêm việc này được."),
        L("l2", null, "I can do it next Monday if that works.", "Thứ Hai tuần sau tôi làm được, nếu ổn."),
        L("l3", null, "Which task should I put first?", "Tôi nên ưu tiên việc nào trước?"),
      ] },
    { id: "s28", module: "LIST-01", ref: "p26",
      data: { title: "Danh sách khi nói “không”", items: ["Xin thời gian, kèm giờ trả lời", "Ghi nhận nhu cầu", "Câu trả lời rõ", "Một lý do ngắn", "Một phương án khác", "Với sếp: hỏi ưu tiên"], illus: "clipboard", icons: ["alarm-clock", "ear", "speech-balloon", "memo", "light-bulb", "clipboard"] },
      lines: [
        L("l1", null, "Ask for time, with an answer time. Show you understand. A clear answer.", "Xin thời gian kèm giờ trả lời. Ghi nhận nhu cầu. Câu trả lời rõ."),
        L("l2", null, "One short reason. Another option. And with your boss, ask for priorities.", "Một lý do ngắn. Một phương án khác. Với sếp: hỏi ưu tiên."),
      ] },

    // ── Tổng kết, câu đố, kết
    { id: "s29", module: "HOST-01", ref: "p6,p11,p15,p20",
      data: { title: "Bốn câu mang về", pose: "present", items: ["“Để em xem” thì phải hẹn giờ", "Một lý do ngắn, nói một lần", "Đưa sếp danh sách, để sếp chọn", "Hứa ít mà giữ được"] },
      lines: [
        L("l1", "det", "“Let me see” needs a time.", "Nói “để em xem” thì phải hẹn giờ trả lời."),
        L("l2", "det", "One reason, once.", "Một lý do ngắn, nói một lần."),
        L("l3", "det", "Give the boss your list to choose from.", "Đưa sếp danh sách việc, để sếp chọn ưu tiên."),
        L("l4", "det", "Promise less, and keep it.", "Hứa ít mà giữ được, hơn hứa nhiều mà lỡ hẹn."),
      ] },
    { id: "s30", module: "QUIZ-01", ref: "questions[11]",
      data: {
        q: "Why is the before reply with many reasons easy to argue against?",
        options: [
          "It sounds too rude, so the colleague complains to the manager at once",
          "Each weak reason can be answered one by one until none are left",
          "It is too short, so the colleague does not understand the answer",
        ],
        correct: 1, countdown: 5, illus: "clipboard",
        why: "Nhiều lý do yếu thì bị gỡ từng cái một.",
      },
      lines: [
        L("l1", null, "Why is the before reply with many reasons easy to argue against?", "Vì sao câu trả lời nhiều lý do ở bản trước dễ bị gỡ?"),
        L("l2", null, "Each weak reason can be answered one by one until none are left.", "Mỗi lý do yếu bị gỡ từng cái một, cho đến khi hết lý do."),
        L("l3", null, "Give one true reason, once. Don't add new ones when they ask again.", "Nói một lý do thật, một lần. Bị hỏi lại thì đừng thêm lý do mới."),
      ] },
    { id: "s31", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Nghe tiếng Anh, chọn đáp án đúng" },
      lines: [
        L("l1", "det", "Write one four-step no and save it in your phone, for the next time you're caught off guard.", "Soạn sẵn một câu từ chối bốn bước, lưu trong điện thoại cho lần tới."),
        L("l2", "det", "Then try the forty questions below.", "Rồi thử bốn mươi câu hỏi bên dưới nhé."),
      ] },
  ],
};
