// Kịch bản video W lần 3 (#110) — "Hỏi lại nhà tuyển dụng bằng tiếng Anh cho lịch sự" · chuỗi "Trả lời phỏng vấn bằng tiếng Anh"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "polite-questions-to-ask-an-interviewer-in-english--w01",
  hook: "HOOK-05",
  loop: { open: "s01", close: "s30" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (C)
  unit: { audience: "english-interview-candidates", slug: "polite-questions-to-ask-an-interviewer-in-english", door: "ky-nang", level: "B1",
    title: "Hỏi lại nhà tuyển dụng bằng tiếng Anh cho lịch sự", series: "Trả lời phỏng vấn bằng tiếng Anh" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên (lần 3, #110): Hải → Dũng; quản lý nước ngoài ở 📌 p15 → Sam (nay lên hình); Cường (📌 p8, cùng vai ứng viên nam) → Dũng; người phỏng vấn nữ ở p8 và người phỏng vấn ở ✍️ p10 → Cô Hoa; ứng viên không tên ở ✍️ p10 → Thảo. Vai mới: Sam. Phỏng vấn qua điện thoại (p15): dựng hai cảnh cắt xen — Sam cầm điện thoại ở văn phòng (s02), Dũng cầm điện thoại ở phòng trọ (s01, s03); trong DLG-01 s20 câu hỏi của Sam do người kể đọc (Dũng một mình trong cảnh). HOOK-05: s01 mở bằng kết cục (Dũng ngượng), tua lại; s20 quay về Dũng, làm lại bằng khuôn “Sorry, what do you mean by…?” của p12 ghép với cụm “notice period” (p15, p16). Lời giải thích của Sam ở s03 rút từ p15. Câu đố giữ questions[11]. Phủ ý: 22/22.",
  scenes: [
    // ── Mở đầu kể chuyện (HOOK-05: kết cục trước, tua lại)
    { id: "s01", module: "SCENE-01", ref: "p15",
      data: { set: "room", label: "Phỏng vấn qua điện thoại",
        actors: [{ id: "dung", side: "right", pose: "phone", face: "sad" }] },
      lines: [
        L("l1", "dung", "Oh no… so embarrassing.", "Trời ơi… ngượng quá.", { face: "sad" }),
        L("l2", null, "Dũng spends the rest of his phone interview feeling embarrassed. Let's rewind.", "Dũng ngượng suốt phần sau buổi phỏng vấn qua điện thoại. Tua lại nhé."),
      ],
      beats: { after: 300 } },
    { id: "s02", module: "SCENE-01", ref: "p15",
      data: { set: "office", label: "Đầu dây bên kia",
        actors: [{ id: "sam", side: "left", pose: "phone" }] },
      lines: [
        L("l1", "sam", "What's your notice period?", "Thời gian báo trước khi nghỉ của anh là bao lâu?", { face: "neutral" }),
      ],
      beats: { after: 300 } },
    { id: "s03", module: "SCENE-01", ref: "p15",
      data: { set: "room", label: "Đoán nghĩa",
        actors: [{ id: "dung", side: "right", pose: "phone" }] },
      lines: [
        L("l1", "dung", "Maybe three years.", "Chắc khoảng ba năm ạ.", { face: "happy" }),
        L("l2", null, "He guessed it meant how long he'd stay. Sam explains: notice before leaving your old job.", "Dũng đoán là định làm bao lâu. Sam giải thích: báo trước khi nghỉ ở chỗ cũ.", { react: { dung: "worried" } }),
      ],
      beats: { after: 400 } },
    { id: "s04", module: "HOST-01", ref: "intro",
      data: { title: "Lịch sự nằm ở cấu trúc câu", pose: "present", items: ["Hỏi lại khi nghe chưa kịp", "Could you tell me… / I was wondering…", "Vài câu hỏi về việc, đội, bước tiếp"] },
      lines: [
        L("l1", "det", "So how do you ask, politely, in English?", "Vậy hỏi lại bằng tiếng Anh sao cho lịch sự?"),
        L("l2", "det", "When you didn't catch the question.", "Khi nghe chưa kịp câu hỏi."),
        L("l3", "det", "With soft structures like Could you tell me, and I was wondering.", "Bằng cấu trúc mềm như “Could you tell me…”, “I was wondering…”."),
        L("l4", "det", "And with a few questions ready about the job, the team, and the next steps.", "Và vài câu hỏi sẵn về công việc, đội nhóm, bước tiếp theo."),
      ] },
    { id: "s05", module: "TOC-01", ref: "intro",
      data: { title: "Các chặng của video", chapters: [
        { label: "Vì sao cách hỏi quan trọng", illus: "speech-balloon" },
        { label: "Ba cấu trúc lịch sự", illus: "feather" },
        { label: "Cuối buổi hỏi gì", illus: "red-question-mark" },
        { label: "Nghe chưa kịp", illus: "ear" },
        { label: "Lương, giờ làm, nghỉ phép", illus: "money-bag" },
        { label: "Câu nên tránh, hỏi bao nhiêu", illus: "no-entry" } ] },
      lines: [
        L("l1", null, "Our stops: why the way you ask matters, three structures, end-of-interview questions…", "Các chặng: vì sao cách hỏi quan trọng, ba cấu trúc, câu hỏi cuối buổi…"),
        L("l2", null, "…when you don't catch it, salary and leave, and what to avoid.", "…khi nghe chưa kịp, chuyện lương, nghỉ phép, và câu nên tránh."),
      ] },

    // ── Chương 1: Vì sao cách hỏi quan trọng (p1–p2)
    { id: "s06", module: "HOST-03", data: { n: 1, of: 6, title: "Cách hỏi quan trọng ra sao?" },
      lines: [L("l1", "det", "Part one: why the way you ask matters as much as what you ask.", "Phần một: vì sao cách hỏi quan trọng không kém nội dung?")] },
    { id: "s07", module: "CMP-01", ref: "p1",
      data: { labels: ["Tiếng Việt", "Tiếng Anh"], left: "Mềm câu bằng “dạ”, “ạ”, “cho em hỏi”", right: "Không có những từ này: lịch sự nằm ở cấu trúc câu",
        illus: ["speech-balloon", "feather"] },
      lines: [
        L("l1", null, "Vietnamese softens questions with dạ, ạ, or cho em hỏi.", "Tiếng Việt làm câu hỏi mềm đi bằng “dạ”, “ạ”, “cho em hỏi”."),
        L("l2", null, "English has no such words. Politeness lives in the sentence structure.", "Tiếng Anh không có những từ này, nên lịch sự nằm ở cấu trúc câu."),
        L("l3", null, "What is the salary? is correct, but sounds blunt to someone you just met.", "“What is the salary?” đúng ngữ pháp, nhưng nghe khá cụt với người mới gặp."),
      ] },
    { id: "s08", module: "CMP-01", ref: "p2",
      data: { labels: ["Hỏi về cách đội làm việc", "Chỉ hỏi về ngày nghỉ"], left: "Cho thấy bạn quan tâm công việc", right: "Để lại ấn tượng khác hẳn",
        illus: ["busts-in-silhouette", "beach-with-umbrella"] },
      lines: [
        L("l1", null, "Your question also shows what you care about.", "Câu bạn hỏi cũng cho thấy bạn quan tâm điều gì."),
        L("l2", null, "Asking how the team works leaves a very different impression from asking only about days off.", "Hỏi về cách đội làm việc để lại ấn tượng khác hẳn người chỉ hỏi về ngày nghỉ."),
      ] },

    // ── Chương 2: Ba cấu trúc lịch sự (p3–p5)
    { id: "s09", module: "HOST-03", data: { n: 2, of: 6, title: "Ba cấu trúc lịch sự" },
      lines: [L("l1", "det", "Part two: three structures that make questions polite.", "Phần hai: ba cấu trúc làm câu hỏi lịch sự hơn.")] },
    { id: "s10", module: "CMP-07", ref: "p3",
      data: { wrong: "Could you tell me what does a typical day look like?", right: "Could you tell me what a typical day looks like?", diff: ["does", "look"], note: "Sau “tell me”, chủ ngữ đứng trước động từ" },
      lines: [
        L("l1", null, "One: Could you tell me what a typical day looks like in this role?", "Một: “Could you tell me what a typical day looks like in this role?”"),
        L("l2", null, "Watch the word order. After tell me, the subject comes before the verb.", "Chú ý thứ tự từ: sau “tell me”, chủ ngữ đứng trước động từ."),
        L("l3", null, "So not: what does a typical day look like.", "Nên không nói “what does a typical day look like”."),
      ] },
    { id: "s11", module: "LIST-03", ref: "p4,p5",
      data: { title: "Thêm ba cách mở lời", items: [
        { front: "I was wondering if…", back: "Rất mềm, hợp chuyện tế nhị", illus: "thinking-face", backIllus: "feather" },
        { front: "Would you mind …ing?", back: "Khi nhờ họ làm gì", illus: "folded-hands", backIllus: "handshake" },
        { front: "May I ask…", back: "Mở lời lịch sự", illus: "raising-hands", backIllus: "speech-balloon" } ] },
      lines: [
        L("l1", null, "Two: I was wondering if there are opportunities for training. Very soft, good for delicate topics.", "Hai: “I was wondering if there are opportunities for training.” Rất mềm, hợp chuyện tế nhị."),
        L("l2", null, "Three: Would you mind explaining the next steps? For asking them to do something.", "Ba: “Would you mind explaining the next steps?” Dùng khi nhờ họ làm gì."),
        L("l3", null, "And May I ask how the team measures success? A polite opener.", "Thêm “May I ask how the team measures success?”: cách mở lời lịch sự."),
      ] },

    // ── Chương 3: Cuối buổi nên hỏi gì (p6–p11)
    { id: "s12", module: "HOST-03", data: { n: 3, of: 6, title: "Cuối buổi nên hỏi gì?" },
      lines: [L("l1", "det", "Part three: Do you have any questions for us? What should you ask?", "Phần ba: “Do you have any questions for us?” Cuối buổi nên hỏi gì?")] },
    { id: "s13", module: "LIST-08", ref: "p6,p7",
      data: { title: "Bốn nhóm câu hỏi", items: [
        { title: "Công việc", detail: "What would you expect me to achieve in the first three months?", illus: "briefcase" },
        { title: "Đội nhóm", detail: "Could you tell me a bit about the team I'd be working with?", illus: "busts-in-silhouette" },
        { title: "Phát triển", detail: "How have people in this role grown within the company?", illus: "seedling" },
        { title: "Bước tiếp theo", detail: "When can I expect to hear back from you?", illus: "spiral-calendar" } ] },
      lines: [
        L("l1", null, "The job: What would you expect me to achieve in the first three months? What are the biggest challenges for this position right now?", "Công việc: “Ba tháng đầu anh chị mong em đạt gì?”, “Thử thách lớn nhất của vị trí này hiện nay là gì?”"),
        L("l2", null, "The team: Could you tell me a bit about the team I'd be working with?", "Đội nhóm: “Anh chị kể chút về đội em sẽ làm cùng được không?”"),
        L("l3", null, "Growth: How have people in this role grown within the company?", "Phát triển: “Người ở vị trí này đã phát triển thế nào trong công ty?”"),
        L("l4", null, "Next steps: When can I expect to hear back from you?", "Bước tiếp: “Khi nào em có thể nhận phản hồi ạ?”"),
      ] },
    { id: "s14", module: "SCENE-01", ref: "p8,p9",
      data: { set: "meeting", label: "Câu hỏi cuối",
        actors: [{ id: "hoa", side: "left", pose: "hold", face: "neutral" }, { id: "dung", side: "right" }] },
      lines: [
        L("l1", null, "Dũng prepared three questions. The last one is about her.", "Dũng chuẩn bị ba câu hỏi, câu cuối hỏi về chính người phỏng vấn."),
        L("l2", "dung", "What do you enjoy most about working here?", "Chị thích điều gì nhất khi làm việc ở đây ạ?", { face: "happy", pose: "explain" }),
        L("l3", "hoa", "Oh, good question! Let me tell you about my favourite projects…", "Ồ, câu hỏi hay đấy! Để chị kể về những dự án chị thích nhất…", { face: "happy", pose: "explain", react: { dung: "happy" } }),
        L("l4", null, "The interview ends like a conversation. Ask one question about them, and the room warms up.", "Buổi phỏng vấn kết thúc như cuộc trò chuyện. Hỏi về họ một câu, cả phòng ấm lên."),
      ] },
    { id: "s15", module: "SCENE-03", ref: "p10,p11",
      data: { set: "office", actors: [{ id: "hoa", side: "left", pose: "hold" }, { id: "thao", side: "right" }],
        left: { label: "Câu hỏi đóng", ok: false }, right: { label: "Câu hỏi mở", ok: true } },
      lines: [
        L("a1", "thao", "Do you have training? Do you have a canteen? Is the team big?", "Có đào tạo không ạ? Có căng tin không? Đội có đông không?", { phase: "a" }),
        L("a2", "hoa", "Yes. Yes. Not really.", "Có. Có. Không hẳn.", { phase: "a", react: { thao: "worried" } }),
        L("b1", "thao", "Could you tell me how new people are usually trained in this team?", "Chị cho em biết người mới trong đội thường được đào tạo thế nào ạ?", { phase: "b", pose: "explain", face: "happy" }),
        L("n1", null, "Three closed questions, and she learns almost nothing. The talk dies too.", "Ba câu hỏi đóng trôi qua mà gần như không biết thêm gì, cuộc trò chuyện tắt theo."),
        L("n2", null, "The open one invites a story, often about the team and daily work.", "Câu hỏi mở mời họ kể, thường dẫn sang chuyện đội nhóm, công việc hằng ngày."),
      ] },
    { id: "s16", module: "TEXT-01", ref: "p11",
      data: { text: "Câu hỏi đóng nhận về một chữ, câu hỏi mở nhận về câu chuyện.", illus: "open-book" },
      lines: [L("l1", "det", "Closed questions get one word. Open questions get a story.", "Câu hỏi đóng nhận về một chữ, câu hỏi mở nhận về câu chuyện.")] },

    // ── Chương 4: Nghe chưa kịp (p12–p16)
    { id: "s17", module: "HOST-03", data: { n: 4, of: 6, title: "Nghe chưa kịp thì làm sao?" },
      lines: [L("l1", "det", "Part four: what if you didn't catch the question?", "Phần bốn: nghe chưa kịp câu hỏi thì làm sao?")] },
    { id: "s18", module: "LIST-07", ref: "p12",
      data: { title: "Câu xin nhắc lại", items: [
        { text: "Sorry, could you repeat the question, please?", illus: "repeat-button" },
        { text: "Could you say that a bit more slowly, please?", illus: "turtle" },
        { text: "Sorry, what do you mean by…?", illus: "red-question-mark" } ] },
      lines: [
        L("l1", null, "Answering a question you didn't understand is a much bigger mistake than asking again.", "Không hiểu mà vẫn trả lời là sai lầm lớn hơn nhiều so với hỏi lại."),
        L("l2", null, "Sorry, could you repeat the question, please?", "Xin lỗi, anh chị nhắc lại câu hỏi giúp em được không ạ?"),
        L("l3", null, "Could you say that a bit more slowly, please?", "Anh chị nói chậm hơn một chút giúp em được không ạ?"),
        L("l4", null, "Sorry, what do you mean by…? For one word you don't know.", "“Sorry, what do you mean by…?” cho một từ chưa hiểu."),
      ] },
    { id: "s19", module: "TEXT-07", ref: "p13,p14",
      data: { en: "Just to make sure I understand, are you asking about my role in the project?",
        vi: "Để em chắc mình hiểu đúng, anh chị đang hỏi về vai trò của em trong dự án ạ?",
        chunks: [{ en: "Just to make sure I understand,", vi: "để chắc mình hiểu đúng" }, { en: "are you asking", vi: "anh chị đang hỏi" }, { en: "about my role", vi: "về vai trò của em" }, { en: "in the project?", vi: "trong dự án" }],
        illus: "ear" },
      lines: [
        L("l1", null, "The most valuable line: Just to make sure I understand, are you asking about my role in the project?", "Câu đắt giá nhất: “Để chắc em hiểu đúng, anh chị hỏi về vai trò của em trong dự án ạ?”"),
        L("l2", null, "It makes sure, buys a few seconds, and shows you listen carefully.", "Vừa giúp bạn chắc chắn, vừa thêm vài giây nghĩ, vừa cho thấy bạn nghe cẩn thận."),
        L("l3", null, "Avoid What? or Huh? in a formal setting. Asking once or twice in an interview is normal.", "Tránh “What?”, “Huh?” trong bối cảnh trang trọng. Xin nhắc lại một hai lần là bình thường."),
      ] },
    { id: "s20", module: "DLG-01", ref: "p15,p16",
      data: { set: "room", label: "Quay lại cuộc gọi",
        actors: [{ id: "dung", side: "right", pose: "phone" }],
        verdict: { ok: false, label: "Đoán nghĩa rồi trả lời",
          why: "Hiểu sai “notice period”, trả lời lạc đề và ngượng suốt phần sau." } },
      lines: [
        L("l1", null, "Back to the call. Sam asks: What's your notice period?", "Quay lại cuộc gọi. Sam hỏi: “What's your notice period?”"),
        L("l2", "dung", "Maybe three years.", "Chắc khoảng ba năm ạ.", { face: "happy", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "He guessed. Don't know a word? Ask about that exact word.", "Đó là đoán. Không biết một từ thì hỏi đúng từ đó."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "dung", "Sorry, what do you mean by notice period?", "Xin lỗi, “notice period” nghĩa là gì ạ?", { phase: "redo", face: "thinking" }),
      ] },
    { id: "s21", module: "TEXT-01", ref: "p16",
      data: { text: "Không biết một từ, hỏi đúng từ đó.", illus: "magnifying-glass-tilted-left" },
      lines: [L("l1", "det", "Don't know a word? Ask about that word.", "Không biết một từ, hỏi đúng từ đó.")] },

    // ── Chương 5: Lương, giờ làm, nghỉ phép (p17–p19)
    { id: "s22", module: "HOST-03", data: { n: 5, of: 6, title: "Lương, giờ làm, nghỉ phép" },
      lines: [L("l1", "det", "Part five: when to ask about salary, hours, and leave.", "Phần năm: hỏi về lương, giờ làm, nghỉ phép lúc nào?")] },
    { id: "s23", module: "TEXT-04", ref: "p17",
      data: { text: "Vòng đầu, để nhà tuyển dụng nhắc trước. Cần biết thì dùng câu mềm.", marks: ["để nhà tuyển dụng nhắc trước", "câu mềm"], illus: "money-bag" },
      lines: [
        L("l1", null, "These topics are fair to ask, but at the right time, in the right way.", "Những chủ đề này hoàn toàn chính đáng, nhưng hỏi đúng lúc, đúng cách."),
        L("l2", null, "In the first round, let the employer bring it up first.", "Ở vòng đầu, hãy để nhà tuyển dụng nhắc trước."),
        L("l3", null, "If they don't, and you need to know: I was wondering if you could share the salary range for this role.", "Họ không nhắc mà bạn cần biết: “I was wondering if you could share the salary range for this role.”"),
      ] },
    { id: "s24", module: "CMP-07", ref: "p18,p19",
      data: { wrong: "Give me the salary range, please.", right: "I was wondering if you could share the salary range", diff: ["Give me", "please"], note: "“Give me…” là cấu trúc ra lệnh, thêm “please” vẫn nghe như yêu cầu" },
      lines: [
        L("l1", null, "A common belief: add please, and anything sounds polite.", "Hiểu lầm: cứ thêm “please” là câu nào cũng lịch sự."),
        L("l2", null, "Translate cho em xin khoảng lương ạ as Give me the salary range, please, and it still sounds like an order.", "Dịch “cho em xin khoảng lương ạ” thành “Give me the salary range, please.” vẫn nghe như yêu cầu."),
      ] },
    { id: "s24b", module: "TEXT-01", ref: "p19",
      data: { text: "“Cho em xin” không dịch thành “Give me”.", illus: "speech-balloon" },
      lines: [
        L("l1", null, "Give me is a command structure. They'll answer, but their face may freeze a little.", "“Give me…” là cấu trúc ra lệnh. Họ vẫn trả lời, nhưng nét mặt có thể hơi khựng."),
        L("l2", null, "For delicate topics, use the soft structure. Cho em xin is not Give me.", "Chuyện tế nhị thì dùng cấu trúc mềm. “Cho em xin” không dịch thành “Give me”."),
      ] },

    // ── Chương 6: Câu nên tránh, hỏi bao nhiêu (p20–p22)
    { id: "s25", module: "HOST-03", data: { n: 6, of: 6, title: "Câu nên tránh, hỏi bao nhiêu" },
      lines: [L("l1", "det", "Part six: what to avoid, and how many questions is enough.", "Phần sáu: câu nào nên tránh, hỏi bao nhiêu là đủ?")] },
    { id: "s26", module: "LIST-04", ref: "p20",
      data: { title: "Ba điều nên tránh", items: [
        { text: "Hỏi điều đã có trên trang web: “What does your company do?”", illus: "globe-with-meridians" },
        { text: "Câu có/không quá ngắn: “Is the job hard?”", illus: "cross-mark" },
        { text: "Hỏi dồn quá nhiều", illus: "red-question-mark" } ] },
      lines: [
        L("l1", null, "Don't ask what's on their website, like What does your company do?", "Đừng hỏi điều đã có trên trang web, như “Công ty mình làm gì ạ?”"),
        L("l2", null, "Don't ask short yes or no questions like Is the job hard? Ask: What do people find most challenging in this role?", "Đừng hỏi “Việc có khó không?”. Hỏi mở: “Mọi người thấy điều gì khó nhất ở vị trí này?”"),
        L("l3", null, "And don't fire too many questions.", "Và đừng hỏi dồn quá nhiều."),
      ] },
    { id: "s27", module: "LIST-07", ref: "p21",
      data: { title: "Bao nhiêu là đủ?", items: [
        { text: "Chuẩn bị khoảng năm câu", illus: "memo" },
        { text: "Thực tế hỏi hai ba câu là vừa", illus: "speech-balloon" },
        { text: "Ghi vào sổ, liếc nhìn khi hỏi: chuyên nghiệp", illus: "notebook" } ] },
      lines: [
        L("l1", null, "Prepare about five questions, because some may be answered during the interview.", "Chuẩn bị khoảng năm câu, vì vài câu có thể đã được trả lời trong buổi phỏng vấn."),
        L("l2", null, "In practice, two or three is right.", "Thực tế hỏi hai ba câu là vừa."),
        L("l3", null, "Writing them in a notebook and glancing at it is professional, not a weakness.", "Ghi câu hỏi vào sổ và liếc nhìn khi hỏi là chuyên nghiệp, không phải dấu hiệu kém."),
      ] },
    { id: "s28", module: "END-03", ref: "p22",
      data: { title: "Danh sách mang theo", illus: "clipboard",
        items: ["Năm câu hỏi: việc, đội, phát triển, bước tiếp", "Could you tell me / I was wondering / Would you mind", "Hai câu xin nhắc lại", "“Just to make sure I understand…”"] },
      lines: [
        L("l1", null, "Take with you: five questions about the job, team, growth, and next steps.", "Mang theo: năm câu hỏi về công việc, đội, phát triển, bước tiếp theo."),
        L("l2", null, "Three structures: Could you tell me, I was wondering, Would you mind.", "Ba cấu trúc: “Could you tell me”, “I was wondering”, “Would you mind”."),
        L("l3", null, "Two ways to ask for a repeat, and Just to make sure I understand.", "Hai câu xin nhắc lại, và “Just to make sure I understand…”."),
      ] },

    // ── Câu đố và kết
    { id: "s29", module: "QUIZ-01", ref: "questions[11]",
      data: {
        q: "You did not catch the interviewer's question, what should you say?",
        options: [
          "Okay, and then answer whatever you think they probably asked",
          "What, I did not hear anything you said just now",
          "Sorry, could you repeat the question, please, I missed the last part",
        ],
        correct: 2, countdown: 5, illus: "ear",
        why: "Lịch sự xin nhắc lại tốt hơn đoán. “What” cụt lủn nghe thiếu lịch sự.",
      },
      lines: [
        L("l1", null, "You did not catch the interviewer's question, what should you say?", "Bạn nghe chưa kịp câu hỏi của người phỏng vấn, nên nói gì?"),
        L("l2", null, "Sorry, could you repeat the question, please, I missed the last part.", "Xin lỗi, anh chị nhắc lại giúp em câu hỏi được không, em chưa nghe kịp đoạn cuối."),
        L("l3", null, "Asking politely is better than guessing. A short What sounds rude.", "Hỏi lại lịch sự tốt hơn đoán, “What” cụt lủn nghe thiếu lịch sự."),
      ] },
    { id: "s30", module: "END-02", ref: "p11,p16,p19",
      data: { kicker: "Rút ra", illus: "feather",
        points: ["Câu hỏi mở nhận về câu chuyện", "Không biết một từ, hỏi đúng từ đó", "“Cho em xin” không dịch thành “Give me”"],
        icons: ["open-book", "magnifying-glass-tilted-left", "speech-balloon"] },
      lines: [
        L("l1", null, "Open questions get stories.", "Câu hỏi mở nhận về câu chuyện."),
        L("l2", null, "Don't know a word? Ask about that word.", "Không biết một từ, hỏi đúng từ đó."),
        L("l3", null, "Cho em xin is not Give me. Today, write five questions in your notebook.", "“Cho em xin” không phải “Give me”. Hôm nay, ghi năm câu hỏi vào sổ."),
      ] },
    { id: "s31", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Luyện hỏi cho lịch sự" },
      lines: [L("l1", "det", "Could you try the forty questions below? Thank you!", "Bạn thử bốn mươi câu hỏi bên dưới nhé. Cảm ơn bạn!")] },
  ],
};
