// Kịch bản video W lần 3 (#110) — "Cách cảm ơn sau buổi phỏng vấn bằng tiếng Anh" · chuỗi "Trả lời phỏng vấn bằng tiếng Anh"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-say-thank-you-after-an-interview-in-english--w01",
  hook: "HOOK-02",
  loop: { open: "s01", close: "s28" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (C)
  unit: { audience: "english-interview-candidates", slug: "how-to-say-thank-you-after-an-interview-in-english", door: "ky-nang", level: "B1",
    title: "Cách cảm ơn sau buổi phỏng vấn bằng tiếng Anh", series: "Trả lời phỏng vấn bằng tiếng Anh" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: ứng viên ở 🔀 p17 (“bạn”) → Dũng; Kiều → Thảo; Hồng → Lan; người phỏng vấn → Cô Hoa (bài không nói người nước ngoài; Ms Linh, Mr Hung, Ms Thao, Minh Anh chỉ là tên trong thư mẫu, giữ nguyên chữ bài trên thẻ). Vai mới: không dùng. s01 dựng 🔀 p17 (lời Dũng là hai lựa chọn của bài nói thành câu). s07 dựng từ 📌 p4; phần làm lại theo p1–p3 (cảm ơn, chờ người phỏng vấn chào lại rồi mới rời cuộc gọi) — câu chào lại của Cô Hoa là lời dựng tối thiểu. Thư mẫu s16 đúng chữ p11. Phủ ý: 23/23.",
  scenes: [
    // ── Mở đầu kể chuyện
    { id: "s01", module: "SCENE-03", ref: "p17",
      data: { set: "home", actors: [{ id: "dung", pose: "phone" }],
        left: { label: "Cuối tuần, thư chỉn chu", ok: false }, right: { label: "Tối nay, thư ngắn", ok: true } },
      lines: [
        L("n0", null, "Monday afternoon, Dũng's interview is over. Two choices.", "Chiều thứ Hai, Dũng phỏng vấn xong. Hai lựa chọn."),
        L("a1", "dung", "I'll write a really polished email at the weekend.", "Cuối tuần mình sẽ viết một email thật chỉn chu.", { phase: "a", face: "thinking" }),
        L("a2", null, "Five days later, they have already chosen who goes to the next round.", "Năm ngày sau, họ đã chốt người vào vòng sau rồi.", { react: { dung: "sad" } }),
        L("b1", "dung", "I'll send a short email tonight.", "Tối nay mình gửi một email ngắn.", { phase: "b", face: "happy" }),
        L("b2", null, "It arrives while the interviewer still remembers him.", "Thư đến khi người phỏng vấn còn nhớ rõ cậu."),
      ],
      beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Cảm ơn hai lần", pose: "wave", items: ["Một câu ngắn lúc chia tay", "Một email ngắn trong vòng một ngày", "Nhắc một chi tiết bạn nhớ"] },
      lines: [
        L("l1", "det", "So what should you say, and send? Say thank you twice.", "Vậy nên nói gì, gửi gì? Cảm ơn hai lần."),
        L("l2", "det", "A short line as you leave.", "Một câu ngắn lúc chia tay."),
        L("l3", "det", "A short email within a day.", "Một email ngắn trong vòng một ngày."),
        L("l4", "det", "With one detail you remember from the talk.", "Kèm một chi tiết bạn nhớ từ buổi trò chuyện."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Các chặng của video", chapters: [
        { label: "Lúc chia tay", illus: "waving-hand" },
        { label: "Có cần email không", illus: "envelope" },
        { label: "Email gồm gì", illus: "clipboard" },
        { label: "Một email mẫu", illus: "memo" },
        { label: "Lỗi làm hỏng thư", illus: "warning" },
        { label: "Nhiều người, chưa có tin", illus: "hourglass-not-done" } ] },
      lines: [
        L("l1", null, "Our stops: saying goodbye, why email, what goes in it…", "Các chặng: lúc chia tay, vì sao gửi email, email gồm gì…"),
        L("l2", null, "…a sample, mistakes to avoid, and what if there's no news.", "…thư mẫu, lỗi cần tránh, và khi mãi chưa có tin."),
      ] },

    // ── Chương 1: Lúc chia tay (p1–p5)
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Lúc chia tay nên nói gì?" },
      lines: [L("l1", "det", "Part one: what to say when you say goodbye.", "Phần một: lúc chia tay nên nói gì?")] },
    { id: "s05", module: "TEXT-07", ref: "p1",
      data: { en: "Thank you so much for your time today. I look forward to hearing from you.",
        vi: "Cảm ơn anh chị rất nhiều vì đã dành thời gian hôm nay. Tôi mong nhận tin từ anh chị.",
        chunks: [{ en: "Thank you so much", vi: "cảm ơn rất nhiều" }, { en: "for your time today.", vi: "vì thời gian hôm nay" }, { en: "I look forward", vi: "tôi mong" }, { en: "to hearing from you.", vi: "nhận tin từ anh chị" }],
        illus: "handshake" },
      lines: [
        L("l1", null, "The last seconds matter as much as the first. They say: That's all from our side.", "Vài giây cuối quan trọng không kém vài giây đầu. Họ nói: “That's all from our side.”"),
        L("l2", null, "Thank you so much for your time today.", "“Cảm ơn anh chị rất nhiều vì đã dành thời gian hôm nay.”"),
        L("l3", null, "I really enjoyed hearing about the new project in Da Nang. I'm even more excited about this role now.", "“Tôi rất thích nghe về dự án mới ở Đà Nẵng. Giờ tôi càng hào hứng với vị trí này.”"),
        L("l4", null, "I look forward to hearing from you.", "“Tôi mong nhận tin từ anh chị.”"),
      ] },
    { id: "s06", module: "LIST-07", ref: "p2,p3",
      data: { title: "Câu cảm ơn ba phần", items: [
        { text: "Lời cảm ơn", illus: "folded-hands" },
        { text: "Một chi tiết từ cuộc nói chuyện", illus: "pushpin" },
        { text: "Mong được nghe phản hồi", illus: "envelope-with-arrow" } ] },
      lines: [
        L("l1", null, "Three parts: thanks, one detail from the talk, and hoping to hear back.", "Ba phần: lời cảm ơn, một chi tiết từ cuộc nói chuyện, mong được nghe phản hồi."),
        L("l2", null, "In person, add a firm handshake and a smile.", "Gặp trực tiếp thì kèm cái bắt tay chắc chắn và nụ cười."),
        L("l3", null, "Online, don't hang up right away.", "Phỏng vấn online thì đừng tắt máy ngay."),
        L("l4", null, "Say thank you, wait for them to say goodbye, then leave the call.", "Nói cảm ơn, chờ người phỏng vấn chào lại, rồi mới rời cuộc gọi."),
      ] },
    { id: "s07", module: "DLG-01", ref: "p3,p4,p5",
      data: { set: "online", label: "Phỏng vấn online",
        actors: [{ id: "hoa", side: "left" }, { id: "thao", side: "right" }],
        verdict: { ok: false, label: "Rời cuộc gọi quá nhanh",
          why: "Người phỏng vấn còn đang dặn dở, hôm sau phải gửi email bổ sung kèm câu nhắc khô." } },
      lines: [
        L("l1", "hoa", "Okay, that's all for today.", "Được rồi, hôm nay vậy thôi nhé."),
        L("l2", "thao", "Thank you, bye!", "Cảm ơn chị, chào chị!", { face: "happy", pose: "wave", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "She was still saying: And by the way… Let them say goodbye first.", "Chị ấy còn đang nói dở “And by the way…”. Họ chào xong, mình mới rời."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "thao", "Thank you so much for your time today. I look forward to hearing from you.", "Cảm ơn chị đã dành thời gian hôm nay. Em mong sớm nhận tin từ chị.", { phase: "redo", face: "happy" }),
        L("l7", "hoa", "Thank you too. Goodbye!", "Cảm ơn em. Chào em nhé!", { phase: "redo", face: "happy", pose: "wave" }),
      ] },
    { id: "s08", module: "TEXT-01", ref: "p5",
      data: { text: "Họ chào xong, mình mới rời phòng.", illus: "waving-hand" },
      lines: [L("l1", "det", "They say goodbye first. Then you leave the room.", "Họ chào xong, mình mới rời phòng.")] },

    // ── Chương 2: Có cần email không (p6–p7)
    { id: "s09", module: "HOST-03", data: { n: 2, of: 6, title: "Có thật cần email cảm ơn?" },
      lines: [L("l1", "det", "Part two: do you really need a thank you email?", "Phần hai: có thật cần gửi email cảm ơn không?")] },
    { id: "s10", module: "LIST-07", ref: "p6",
      data: { title: "Không nhiều người gửi, nên bạn nổi bật", items: [
        { text: "Trông chu đáo", illus: "sparkles" },
        { text: "Được nhớ đến giữa nhiều ứng viên", illus: "brain" },
        { text: "Bổ sung một ý đã quên nói", illus: "memo" } ] },
      lines: [
        L("l1", null, "Not many candidates send one, so it's your chance to stand out.", "Không nhiều ứng viên gửi email cảm ơn, nên đây là cơ hội nổi bật."),
        L("l2", null, "You look thoughtful.", "Bạn trông chu đáo."),
        L("l3", null, "They remember you among many candidates.", "Họ nhớ đến bạn giữa nhiều ứng viên."),
        L("l4", null, "And you can add a point you forgot.", "Và bạn bổ sung được một ý đã quên nói."),
      ] },
    { id: "s11", module: "HOST-02", ref: "p7",
      data: { statement: "Phỏng vấn chưa tốt thì không cần gửi email cảm ơn", truth: false,
        why: "Vẫn nên gửi: đôi khi bạn tự đánh giá khắt khe hơn thực tế. Thư là điểm cộng nhỏ khi hai người ngang nhau." },
      lines: [
        L("l1", "det", "If your interview went badly, don't bother with an email. True or false?", "Phỏng vấn chưa tốt thì khỏi gửi email. Đúng hay sai?"),
        L("l2", "det", "False. Send it anyway. You may judge yourself more harshly than reality.", "Sai. Vẫn nên gửi, vì đôi khi bạn tự chấm khắt khe hơn thực tế.", { face: "happy" }),
        L("l3", "det", "An email won't decide the job, but it's a small plus when two candidates are equal.", "Thư không quyết định được nhận hay không, nhưng là điểm cộng khi hai người ngang nhau."),
      ] },

    // ── Chương 3: Email gồm gì (p8–p10)
    { id: "s12", module: "HOST-03", data: { n: 3, of: 6, title: "Email cảm ơn gồm gì?" },
      lines: [L("l1", "det", "Part three: what goes in the email?", "Phần ba: email cảm ơn gồm những gì?")] },
    { id: "s13", module: "LIST-05", ref: "p8",
      data: { title: "Sáu phần của email", illus: "envelope",
        items: ["Tiêu đề rõ, có tên vị trí", "Lời chào “Dear Ms Linh,”", "Cảm ơn và nhắc tên vị trí", "Một chi tiết cụ thể, lời kết lịch sự và tên"] },
      lines: [
        L("l1", null, "A clear subject: Thank you for the interview, Marketing Executive position.", "Tiêu đề rõ: “Thank you for the interview, Marketing Executive position”."),
        L("l2", null, "A greeting: Dear Ms Linh.", "Lời chào: “Dear Ms Linh,”."),
        L("l3", null, "Thanks, with the job title, in one sentence.", "Cảm ơn và nhắc tên vị trí trong một câu."),
        L("l4", null, "One specific detail, your interest and fit again, a polite close, and your name.", "Một chi tiết cụ thể, khẳng định quan tâm và điểm phù hợp, lời kết và tên."),
      ] },
    { id: "s14", module: "LIST-13", ref: "p9,p10",
      data: { title: "Gửi lúc nào, viết thế nào", items: [
        { title: "Trong vòng một ngày", detail: "Khi họ còn nhớ rõ bạn. Ngắn: năm đến tám câu.", illus: "alarm-clock" },
        { title: "Ngôn ngữ của buổi phỏng vấn", detail: "Phỏng vấn tiếng Anh, hoặc người phỏng vấn là người nước ngoài: viết tiếng Anh.", illus: "globe-showing-asia-australia" } ] },
      lines: [
        L("l1", null, "Send it within one day, while they remember you clearly.", "Gửi trong vòng một ngày, khi họ còn nhớ rõ bạn."),
        L("l2", null, "Keep it short, five to eight sentences. Interviewers are busy.", "Giữ thư ngắn, năm đến tám câu, vì người phỏng vấn bận."),
        L("l3", null, "Write in the language of the interview. English interview, or a foreign interviewer? Write in English.", "Viết bằng ngôn ngữ của buổi phỏng vấn. Phỏng vấn tiếng Anh hay người nước ngoài thì viết tiếng Anh."),
      ] },

    // ── Chương 4: Email mẫu (p11–p14)
    { id: "s15", module: "HOST-03", data: { n: 4, of: 6, title: "Một email mẫu" },
      lines: [L("l1", "det", "Part four: what does a sample email look like?", "Phần bốn: một email mẫu trông thế nào?")] },
    { id: "s16", module: "STORY-04", ref: "p11,p12",
      data: { lang: "en", to: "Ms Linh", subject: "Thank you for the interview, Marketing Executive position",
        body: "Dear Ms Linh,\nThank you for taking the time to meet with me yesterday to discuss the Marketing Executive position.\nI really enjoyed learning about your plans to reach younger customers.\nI believe my experience running campaigns for student audiences could help the team reach that goal.\nI look forward to hearing from you.\nBest regards, Minh Anh",
        marks: [
          { text: "Marketing Executive position", note: "Nhắc tên vị trí" },
          { text: "your plans to reach younger customers", note: "Một chi tiết cụ thể từ buổi gặp" },
          { text: "could help the team reach that goal", note: "Nối điểm phù hợp với nhu cầu" } ] },
      lines: [
        L("l1", null, "Dear Ms Linh, Thank you for taking the time to meet with me yesterday to discuss the Marketing Executive position.", "Cảm ơn chị đã dành thời gian gặp tôi hôm qua về vị trí Marketing Executive."),
        L("l2", null, "I really enjoyed learning about your plans to reach younger customers.", "Tôi rất thích được biết kế hoạch tiếp cận khách hàng trẻ của công ty."),
        L("l3", null, "Our conversation made me even more excited about the role.", "Buổi trò chuyện khiến tôi càng hào hứng với vị trí này."),
        L("l4", null, "I believe my experience running campaigns for student audiences could help the team reach that goal.", "Tôi tin kinh nghiệm chạy chiến dịch cho sinh viên có thể giúp đội đạt mục tiêu đó."),
      ] },
    { id: "s16b", module: "TEXT-04", ref: "p11,p12",
      data: { text: "Chỉ khoảng tám mươi từ, nhưng đủ chi tiết để người đọc nhớ chính xác bạn là ai.", marks: ["tám mươi từ", "nhớ chính xác bạn là ai"], illus: "envelope" },
      lines: [
        L("l1", null, "Please let me know if you need any further information. I look forward to hearing from you.", "Xin cho tôi biết nếu cần thêm thông tin. Tôi mong nhận tin từ chị."),
        L("l2", null, "About eighty words, but enough detail to remember exactly who you are.", "Chỉ khoảng tám mươi từ, nhưng đủ chi tiết để người đọc nhớ chính xác bạn là ai."),
      ] },
    { id: "s17", module: "SCENE-01", ref: "p13,p14",
      data: { set: "home", label: "Chuyện của Lan",
        actors: [{ id: "lan", side: "center", pose: "phone" }] },
      lines: [
        L("l1", null, "At home, Lan remembers something she forgot: a tracking sheet she built, exactly what the new job needs.", "Về nhà, Lan mới nhớ quên kể chuyện tự dựng bảng theo dõi đơn, đúng việc vị trí mới cần.", { react: { lan: "surprised" } }),
        L("l2", "lan", "I forgot to mention that I built a simple order tracking sheet in my last job.", "Em quên chưa kể: ở chỗ cũ, em từng tự dựng bảng theo dõi đơn hàng.", { face: "thinking" }),
        L("l3", "lan", "Which reduced missed orders.", "Nhờ vậy giảm được số đơn bị sót.", { face: "happy" }),
        L("l4", null, "In the next round, the interviewer starts with that very sheet.", "Vòng sau, người phỏng vấn mở đầu bằng chính bảng theo dõi đó.", { react: { lan: "happy" } }),
        L("l5", null, "Forgot to say it in the room? There's still one line in the email.", "Quên nói trong phòng, vẫn còn một câu trong thư."),
      ] },

    // ── Chương 5: Lỗi làm hỏng email (p15–p19)
    { id: "s18", module: "HOST-03", data: { n: 5, of: 6, title: "Lỗi làm hỏng email" },
      lines: [L("l1", "det", "Part five: mistakes that ruin a thank you email.", "Phần năm: những lỗi làm hỏng email cảm ơn.")] },
    { id: "s19", module: "LIST-06", ref: "p15,p16",
      data: { title: "Dùng lại thư cũ? Kiểm theo thứ tự", steps: [
        { text: "Tên người nhận ở dòng chào, đúng chính tả", illus: "name-badge" },
        { text: "Tên công ty, ở mọi chỗ, nhất là câu cuối", illus: "office-building" },
        { text: "Tên vị trí ứng tuyển", illus: "briefcase" },
        { text: "Chi tiết riêng của buổi phỏng vấn", illus: "magnifying-glass-tilted-left" } ] },
      lines: [
        L("l1", null, "Two interviews in one week? You can reuse the email. Before sending, check: the name in the greeting.", "Hai buổi phỏng vấn một tuần? Dùng lại thư được. Trước khi gửi, kiểm: tên người nhận."),
        L("l2", null, "The company name everywhere, especially the last line.", "Tên công ty ở mọi chỗ, nhất là câu cuối."),
        L("l3", null, "The job title.", "Tên vị trí ứng tuyển."),
        L("l4", null, "And the details of this interview. Miss one, and you get: I think this was meant for another company.", "Và chi tiết riêng. Sót một tên công ty cũ là nhận về: “Chắc thư này gửi nhầm công ty.”"),
      ] },
    { id: "s20", module: "TEXT-02", ref: "p16",
      data: { text: "Chép thư thì được, chép nhầm tên thì mất điểm.", keywords: ["chép nhầm tên"], illus: "name-badge" },
      lines: [L("l1", "det", "Copying a letter is fine. Copying the wrong name loses points.", "Chép thư thì được, chép nhầm tên thì mất điểm.")] },
    { id: "s21", module: "CMP-01", ref: "p17,p18",
      data: { labels: ["Cách A: cuối tuần", "Cách B: tối hôm đó"], left: "Thư chỉn chu đến sau năm ngày: họ đã chốt người, chỉ trả lời cho có", right: "Email ngắn năm sáu câu, đến khi họ còn nhớ rõ bạn",
        illus: ["hourglass-done", "envelope-with-arrow"] },
      lines: [
        L("l1", null, "Back to Dũng. Way A: a polished email five days later. They already chose, and reply only politely.", "Quay lại Dũng. Cách A: thư chỉn chu năm ngày sau, họ đã chốt người, trả lời cho có."),
      ] },
    { id: "s21c", module: "TEXT-04", ref: "p17",
      data: { text: "Cách B: tối đó gửi email ngắn năm sáu câu, nhắc một điểm đã trao đổi.", marks: ["tối đó", "năm sáu câu"], illus: "envelope-with-arrow" },
      lines: [
        L("l1", null, "Way B: five or six sentences that evening, with one point you discussed.", "Cách B: tối đó gửi năm sáu câu, nhắc một điểm đã trao đổi."),
      ] },
    { id: "s21b", module: "TEXT-01", ref: "p18",
      data: { text: "Thư ngắn đúng lúc hơn thư hay muộn màng.", illus: "alarm-clock" },
      lines: [
        L("l1", null, "It arrives while they still remember you, and are comparing candidates.", "Thư đến khi họ còn nhớ rõ bạn và đang so sánh các ứng viên."),
        L("l2", null, "A short letter on time beats a fine letter too late.", "Thư ngắn đúng lúc hơn thư hay muộn màng."),
      ] },
    { id: "s22", module: "STORY-04", ref: "p19",
      data: { lang: "en", to: "Ms Linh", subject: "Thank you for the interview",
        body: "Hi Linh!!!\nThank you for the interview. I hope to get the job.\nWhen will I know the result?\nthx",
        marks: [
          { text: "Hi Linh!!!", note: "Quá thân mật: viết “Dear Ms Linh,”" },
          { text: "I hope to get the job.", note: "Câu chung chung, thiếu một chi tiết riêng" },
          { text: "When will I know the result?", note: "Đừng hỏi kết quả trong thư cảm ơn" },
          { text: "thx", note: "Tránh viết tắt, biểu tượng cảm xúc" } ] },
      lines: [
        L("l1", null, "Three more mistakes. Don't ask: When will I know the result?", "Thêm ba lỗi. Đừng hỏi “Khi nào em biết kết quả?” trong thư cảm ơn."),
        L("l2", null, "Don't be too casual: no Hi Linh with three exclamation marks, no emojis, no thx.", "Đừng quá thân mật: không “Hi Linh!!!”, không biểu tượng cảm xúc, không “thx”."),
        L("l3", null, "And don't write only: Thank you for the interview. I hope to get the job.", "Và đừng chỉ viết câu chung chung: “Cảm ơn buổi phỏng vấn. Mong được nhận.”"),
      ] },

    // ── Chương 6: Nhiều người phỏng vấn, chưa có tin (p20–p23)
    { id: "s23", module: "HOST-03", data: { n: 6, of: 6, title: "Nhiều người, hoặc chưa có tin" },
      lines: [L("l1", "det", "Part six: several interviewers, or no news for a long time.", "Phần sáu: nhiều người phỏng vấn, hoặc mãi chưa có tin.")] },
    { id: "s24", module: "LIST-13", ref: "p20,p21",
      data: { title: "Hai trường hợp", items: [
        { title: "Hai ba người phỏng vấn", detail: "Email riêng từng người, mỗi thư một chi tiết khác; chỉ có email nhân sự thì nhờ chuyển lời.", illus: "busts-in-silhouette" },
        { title: "Quá hạn hẹn vài ngày làm việc", detail: "Gửi một email theo dõi ngắn.", illus: "hourglass-not-done" } ] },
      lines: [
        L("l1", null, "Two or three interviewers? Email each one if you can, with a different detail in each.", "Có hai ba người phỏng vấn? Gửi riêng từng người nếu có địa chỉ, mỗi thư một chi tiết khác."),
        L("l2", null, "Only an HR address? Could you please pass on my thanks to Mr Hung and Ms Thao as well?", "Chỉ có email nhân sự? “Nhờ anh chị chuyển lời cảm ơn tới anh Hung và chị Thao giúp tôi.”"),
      ] },
    { id: "s24b", module: "TEXT-07", ref: "p21",
      data: { en: "I'm writing to follow up on my interview for the Marketing Executive position.", vi: "Tôi viết để hỏi thăm về buổi phỏng vấn vị trí Marketing Executive.", chunks: [{ en: "I'm writing to follow up", vi: "tôi viết để hỏi thăm" }, { en: "on my interview", vi: "về buổi phỏng vấn" }, { en: "for the Marketing Executive position.", vi: "vị trí Marketing Executive" }], illus: "envelope-with-arrow" },
      lines: [
        L("l1", null, "A few working days past their date, and no news? Send a short follow-up.", "Quá hạn họ hẹn vài ngày làm việc mà chưa có tin? Gửi email theo dõi ngắn."),
        L("l2", null, "I'm writing to follow up on my interview for the Marketing Executive position.", "“Tôi viết để hỏi thăm về buổi phỏng vấn vị trí Marketing Executive.”"),
        L("l3", null, "I'm still very interested in the role and would be grateful for any update.", "“Tôi vẫn rất quan tâm, và rất cảm ơn nếu được biết thêm thông tin.”"),
      ] },
    { id: "s25", module: "SCENE-02", ref: "p22",
      data: { set: "room", label: "Nhắn qua ứng dụng", actor: { id: "thao", side: "right" },
        contact: { name: "Nhà tuyển dụng", illus: "woman-office-worker" },
        messages: [{ from: "me", text: "Thank you for your time today. I look forward to hearing from you.", at: "l2" }] },
      lines: [
        L("l1", null, "Email is still the standard. But if they mostly message you on an app…", "Email vẫn là kênh chuẩn nhất. Nhưng nếu nhà tuyển dụng chủ yếu nhắn qua ứng dụng…"),
        L("l2", "thao", "Thank you for your time today. I look forward to hearing from you.", "Cảm ơn anh chị đã dành thời gian hôm nay. Mong nhận tin từ anh chị."),
        L("l3", null, "…a short, polite thank you there is fine too.", "…một tin cảm ơn ngắn, lịch sự ở đó cũng được."),
      ] },
    { id: "s26", module: "END-03", ref: "p23",
      data: { title: "Danh sách mang theo", illus: "clipboard",
        items: ["Câu cảm ơn ba phần lúc chia tay", "Email trong vòng một ngày, một chi tiết cụ thể", "Đã kiểm tên người nhận, tên công ty", "Không hỏi kết quả trong thư cảm ơn", "Email theo dõi chỉ khi quá hạn hẹn"] },
      lines: [
        L("l1", null, "Take with you: a three-part goodbye, and an email within a day with one detail.", "Mang theo: câu cảm ơn ba phần, email trong một ngày kèm một chi tiết."),
        L("l2", null, "Names and company checked, no result questions.", "Đã kiểm tên và công ty, không hỏi kết quả."),
        L("l3", null, "And a follow-up only when their date has passed.", "Và email theo dõi chỉ khi đã quá hạn họ hẹn."),
      ] },

    // ── Câu đố và kết
    { id: "s27", module: "QUIZ-01", ref: "questions[8]",
      data: {
        q: "When should you send your thank you email?",
        options: [
          "Before the interview, so they know you are a polite person",
          "Within about one day, while they still remember you clearly",
          "After about two weeks, so the interviewer has time to miss you",
        ],
        correct: 1, countdown: 5, illus: "envelope-with-arrow",
        why: "Trong vòng một ngày, khi họ còn nhớ rõ bạn.",
      },
      lines: [
        L("l1", null, "When should you send your thank you email?", "Nên gửi email cảm ơn khi nào?"),
        L("l2", null, "Within about one day, while they still remember you clearly.", "Trong vòng khoảng một ngày, khi họ còn nhớ rõ bạn."),
        L("l3", null, "Send it late, and it loses most of its effect.", "Gửi muộn thì email mất phần lớn tác dụng."),
      ] },
    { id: "s28", module: "END-02", ref: "p5,p14,p18",
      data: { kicker: "Rút ra", illus: "envelope",
        points: ["Họ chào xong, mình mới rời phòng", "Quên nói trong phòng, còn một câu trong thư", "Thư ngắn đúng lúc hơn thư hay muộn màng"],
        icons: ["waving-hand", "memo", "alarm-clock"] },
      lines: [
        L("l1", null, "Leave after they say goodbye.", "Họ chào xong, mình mới rời phòng."),
        L("l2", null, "Forgot something? Add one line in the email.", "Quên gì thì thêm một câu trong thư."),
        L("l3", null, "Short and on time beats fine and late. Today, draft your email template.", "Thư ngắn đúng lúc hơn thư hay muộn. Hôm nay, soạn sẵn một bản nháp."),
      ] },
    { id: "s29", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Cảm ơn bạn đã xem" },
      lines: [L("l1", "det", "Thank you for watching. Forty questions are waiting below.", "Cảm ơn bạn đã xem. Bốn mươi câu hỏi đang chờ bên dưới.")] },
  ],
};
