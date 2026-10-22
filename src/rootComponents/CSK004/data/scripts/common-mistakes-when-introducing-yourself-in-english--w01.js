// Kịch bản video W lần 3 (#110) — "Những lỗi thường gặp khi giới thiệu bản thân bằng tiếng Anh" · chuỗi "Giới thiệu bản thân bằng tiếng Anh"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub). HOOK-06: câu nói trước – sau ở bữa tối giao lưu (✍️ p19), SCENE-03.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "common-mistakes-when-introducing-yourself-in-english--w01",
  hook: "HOOK-06",
  loop: { open: "s01", close: "s28" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (C)
  unit: { audience: "english-self-introducers", slug: "common-mistakes-when-introducing-yourself-in-english", door: "ky-nang", level: "B1",
    title: "Những lỗi thường gặp khi giới thiệu bản thân bằng tiếng Anh", series: "Giới thiệu bản thân bằng tiếng Anh" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên (#110, người nước ngoài → Sam): Tú (p19) → Dũng (câu mẫu “My name is Tu / Hi, I'm Tu” đọc thành “Dũng”), khách cùng bàn → Sam; Hoàng (p13) → Bác Bình; nhà cung cấp nước ngoài (p13) → Sam (bản trước: Cô Hoa); Nhàn (p23) → Thảo. Chỗ đứng cố định: Dũng left, Bác Bình left (không cùng cảnh với Dũng), Sam right, Thảo left (không cùng cảnh với Dũng/Bác Bình). Lỗi ở DLG-01 là trọng âm: giọng đọc máy không nói sai trọng âm được, nên lời kể nói rõ “nhấn âm sau nên nghe thành fifteen” — người duyệt cân nhắc khi thu mp3. Câu sai trên thẻ CMP-07/LIST-03 được đọc lên đúng nguyên văn của bài để người học nghe; người duyệt cân nhắc khi thu mp3 (câu sai có lời kể báo trước). p4 theo bài (#107). Phủ ý: 28/28. Câu đố: questions[28] (không có tên).",
  scenes: [
    // ---------- Mở đầu ----------
    { id: "s01", module: "SCENE-03", ref: "p19",
      data: { set: "cafe", actors: [{ id: "dung", side: "left" }, { id: "sam", side: "right" }],
        left: { label: "Trước: kiểu thuyết trình", ok: false }, right: { label: "Sau: kiểu trò chuyện", ok: true } },
      lines: [
        L("l1", null, "A dinner for six. Dung's turn.", "Bữa tối sáu người. Đến lượt Dũng."),
        L("a1", "dung", "Hello everybody. Today I will introduce myself. My name is Dũng... Thank you for listening.", "Xin chào mọi người. Hôm nay tôi xin giới thiệu bản thân. Tôi tên là Dũng… Cảm ơn đã lắng nghe.", { phase: "a", pose: "stand" }),
        L("b1", "dung", "Hi, I'm Dũng. I work in logistics and just moved here last month. What about you guys?", "Chào, mình là Dũng. Mình làm logistics, vừa chuyển đến tháng trước. Còn mọi người thì sao?", { phase: "b", face: "happy", pose: "wave", react: { sam: "happy" } }),
        L("l2", null, "Left: people clap. Right: the talk goes on. Why?", "Trái: mọi người vỗ tay. Phải: chuyện tiếp tục. Vì sao?", { wait: 300 }),
      ],
      beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Ba nhóm lỗi hay gặp", pose: "present",
        items: ["Dịch từng chữ", "Bỏ âm cuối, sai trọng âm", "Nói như trả bài"] },
      lines: [
        L("l1", "det", "What goes wrong when we introduce ourselves in English? Three groups of mistakes.", "Giới thiệu bằng tiếng Anh hay sai ở đâu? Ba nhóm lỗi."),
        L("l2", "det", "Translating word by word.", "Dịch từng chữ."),
        L("l3", "det", "Dropping sounds, or wrong stress.", "Bỏ âm cuối, sai trọng âm."),
        L("l4", "det", "And speaking like a school presentation.", "Và nói như đang trả bài."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Hôm nay ta đi qua", chapters: [
        { label: "Vì sao sai cùng kiểu", illus: "thinking-face" },
        { label: "Mạo từ và “to be”", illus: "input-latin-letters" },
        { label: "Số nhiều, giới từ, động từ", illus: "memo" },
        { label: "Phát âm", illus: "speaking-head" },
        { label: "Nói như trả bài", illus: "school" },
        { label: "Sửa cho bền", illus: "studio-microphone" }] },
      lines: [
        L("l1", null, "Six parts. Why we make the same mistakes. Articles and \"to be\". Plurals, prepositions, verbs.", "Sáu phần. Vì sao sai cùng kiểu. Mạo từ và “to be”. Số nhiều, giới từ, động từ."),
        L("l2", null, "Pronunciation. Sounding like a presentation. And fixing mistakes for good.", "Phát âm. Nói như trả bài. Và sửa lỗi cho bền."),
      ] },

    // ---------- Chương 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Vì sao sai cùng một kiểu?" },
      lines: [L("l1", "det", "Part one: why do Vietnamese speakers make the same mistakes?", "Phần một: vì sao người Việt hay sai cùng một kiểu?")] },
    { id: "s05", module: "LIST-02", ref: "p1,p2",
      data: { title: "Ba nguồn lỗi", illus: "magnifying-glass-tilted-left", items: [
        { icon: "languages", illus: "input-latin-letters", text: "Dịch từng chữ: không mạo từ, không chia động từ" },
        { icon: "volume-x", illus: "speaking-head", text: "Bỏ âm cuối" },
        { icon: "presentation", illus: "school", text: "Khuôn bài thuyết trình ở trường" }] },
      lines: [
        L("l1", null, "Three sources. Word-by-word translation: Vietnamese has no articles, and verbs don't change.", "Ba nguồn lỗi. Dịch từng chữ: tiếng Việt không có mạo từ, không chia động từ."),
        L("l2", null, "Dropped final sounds, because Vietnamese doesn't release them like English.", "Bỏ âm cuối, vì tiếng Việt không bật âm cuối như tiếng Anh."),
        L("l3", null, "And the school presentation style.", "Và khuôn bài thuyết trình đã học ở trường."),
        L("l4", null, "People usually still understand you. But you can prepare an introduction, so it's worth fixing for a better first impression.", "Người nghe vẫn hiểu. Nhưng lời giới thiệu chuẩn bị trước được, nên đáng sửa sạch cho ấn tượng đầu tốt hơn."),
      ] },

    // ---------- Chương 2 ----------
    { id: "s06", module: "HOST-03", data: { n: 2, of: 6, title: "Mạo từ và “to be”" },
      lines: [L("l1", "det", "Part two: articles and \"to be\".", "Phần hai: lỗi mạo từ và “to be”.")] },
    { id: "s07", module: "CMP-07", ref: "p3",
      data: { wrong: "I am student.", right: "I'm a student.", diff: ["am", "student"], note: "Nghề là danh từ đếm được số ít: cần “a” hoặc “an”" },
      lines: [
        L("l1", null, "Here's a common mistake. I am student.", "Lỗi hay gặp: “I am student”."),
        L("l2", null, "Correct: I'm a student. A job word needs a or an.", "Đúng: “I'm a student”. Từ chỉ nghề cần “a” hoặc “an”."),
        L("l3", null, "I'm an engineer. I work as an accountant.", "“I'm an engineer.” “I work as an accountant.”"),
        L("l4", null, "Use an before a vowel sound.", "Dùng “an” trước âm nguyên âm."),
      ] },
    { id: "s08", module: "LIST-03", ref: "p4",
      data: { title: "“I'm” hay “I”?", items: [
        { front: "I from Vietnam", back: "I'm from Vietnam: thiếu “am”", illus: "globe-showing-asia-australia", backIllus: "check-mark-button" },
        { front: "I'm work at a bank", back: "I work at a bank: thừa “am”", illus: "bank", backIllus: "check-mark-button" }] },
      lines: [
        L("l1", null, "I from Vietnam. The am is missing. Say: I'm from Vietnam.", "“I from Vietnam”: thiếu “am”. Nói: “I'm from Vietnam”."),
        L("l2", null, "The opposite: I'm work at a bank. Am is extra. Say: I work at a bank.", "Ngược lại: “I'm work at a bank”: thừa “am”. Nói: “I work at a bank”."),
        L("l3", null, "Tip: I'm goes with a noun, an adjective, or a place phrase like from Vietnam.", "Mẹo: “I'm” đi với danh từ, tính từ, hoặc cụm nơi chốn như “from Vietnam”."),
        L("l4", null, "I goes straight to the main verb.", "“I” đi thẳng với động từ chính."),
      ] },

    // ---------- Chương 3 ----------
    { id: "s09", module: "HOST-03", data: { n: 3, of: 6, title: "Số nhiều, giới từ, động từ" },
      lines: [L("l1", "det", "Part three: plurals, prepositions, age, and verb forms.", "Phần ba: số nhiều, giới từ, tuổi và dạng động từ.")] },
    { id: "s10", module: "CMP-07", ref: "p5",
      data: { wrong: "I have 3 years experiences", right: "I have three years of experience", diff: ["3", "experiences"], note: "“Experience” là kinh nghiệm làm việc: không đếm được, và cần “of”" },
      lines: [
        L("l1", null, "Wrong: I have three years experiences.", "Sai: “I have three years experiences”."),
        L("l2", null, "Right: I have three years of experience.", "Đúng: “I have three years of experience”."),
        L("l3", null, "Work experience is uncountable, so no plural. And it needs of.", "Kinh nghiệm làm việc là danh từ không đếm được, không có số nhiều, và cần “of”."),
      ] },
    { id: "s11", module: "LIST-03", ref: "p6",
      data: { title: "Giới từ hay sai", items: [
        { front: "I graduated Hanoi University", back: "I graduated from Hanoi University", illus: "graduation-cap", backIllus: "check-mark-button" },
        { front: "I'm majoring about marketing", back: "I'm majoring in marketing", illus: "books", backIllus: "check-mark-button" },
        { front: "I live at Ho Chi Minh City", back: "I live in Ho Chi Minh City", illus: "cityscape", backIllus: "check-mark-button" }] },
      lines: [
        L("l1", null, "I graduated Hanoi University. Add from: I graduated from Hanoi University.", "Thêm “from”: “I graduated from Hanoi University”."),
        L("l2", null, "I'm majoring about marketing. Say: I'm majoring in marketing.", "Không “about”: “I'm majoring in marketing”."),
        L("l3", null, "I live at Ho Chi Minh City. Cities and countries take in: I live in Ho Chi Minh City.", "Thành phố, quốc gia đi với “in”: “I live in Ho Chi Minh City”."),
      ] },
    { id: "s12", module: "HOST-01", ref: "p7",
      data: { title: "Nói tuổi", pose: "think", items: ["“I'm 25” hoặc “I'm 25 years old”", "Không dừng ở “years”", "Ở chỗ làm, thường không cần nói tuổi"] },
      lines: [
        L("l1", "det", "Age. Not I'm twenty-five years.", "Tuổi. Không nói “I'm twenty-five years”."),
        L("l2", "det", "Say I'm twenty-five, or I'm twenty-five years old.", "Nói “I'm twenty-five” hoặc “I'm twenty-five years old”."),
        L("l3", "det", "Don't stop at years.", "Đừng dừng ở “years”."),
        L("l4", "det", "Anyway, at work you usually don't need to say your age.", "Dù vậy, khi giới thiệu ở chỗ làm, tuổi thường không cần nói."),
      ] },
    { id: "s13", module: "LIST-03", ref: "p8,p9",
      data: { title: "Dạng động từ dễ nhầm", items: [
        { front: "I have been worked here for two years", back: "I have worked here… / I've been working here…", illus: "office-building", backIllus: "check-mark-button" },
        { front: "My hobby is play football", back: "I play football every weekend.", illus: "soccer-ball", backIllus: "check-mark-button" },
        { front: "Sau “enjoy”?", back: "Dạng -ing: I enjoy cooking.", illus: "cooking", backIllus: "check-mark-button" }] },
      lines: [
        L("l1", null, "I have been worked here for two years. Two tenses mixed in one sentence.", "“I have been worked here for two years”: trộn hai thì vào một câu."),
        L("l2", null, "Say: I have worked here for two years. Or: I've been working here for two years.", "Nói: “I have worked here for two years”, hoặc “I've been working here for two years”."),
        L("l3", null, "My hobby is play football. Say: my hobby is playing football.", "“My hobby is play football” → “My hobby is playing football”."),
        L("l4", null, "More natural: I play football every weekend. After enjoy, use -ing too: I enjoy cooking.", "Tự nhiên hơn: “I play football every weekend.” Sau “enjoy” dùng -ing: “I enjoy cooking”."),
      ] },
    // ---------- Chương 4 ----------
    { id: "s14", module: "HOST-03", data: { n: 4, of: 6, title: "Phát âm gây hiểu nhầm" },
      lines: [L("l1", "det", "Part four: pronunciation that causes confusion.", "Phần bốn: phát âm sai chỗ nào làm người nghe hiểu nhầm?")] },
    { id: "s15", module: "LIST-09", ref: "p10,p11",
      data: { title: "Bật rõ âm cuối và đuôi", illus: "speaking-head", keywords: [
        { text: "work: /k/", illus: "briefcase" }, { text: "five: /v/", illus: "keycap-5" },
        { text: "two brothers: -s", illus: "people-hugging" }, { text: "worked: -ed", illus: "check-mark-button" }] },
      lines: [
        L("l1", null, "The most common pronunciation mistake: dropping final sounds.", "Lỗi phát âm phổ biến nhất: bỏ âm cuối."),
        L("l2", null, "Work becomes wor. Five becomes fai. Release k, t, s, v clearly.", "“Work” thành “wor”, “five” thành “fai”. Bật rõ /k/, /t/, /s/, /v/."),
        L("l3", null, "Missing s and ed endings make you sound ungrammatical, even when you wrote it right.", "Thiếu đuôi -s, -ed khiến câu nghe như sai ngữ pháp, dù viết đúng."),
        L("l4", null, "I have two brothers. I worked there for a year.", "“I have two brothers.” “I worked there for a year.”"),
      ] },
    { id: "s16", module: "CMP-05", ref: "p12",
      data: { title: "Trọng âm", columns: [{ label: "Nghĩa", illus: "input-latin-letters" }, { label: "Nhấn âm", illus: "speaking-head" }],
        rows: [{ label: "engineer", cells: ["kỹ sư", "âm cuối"] }, { label: "accountant", cells: ["kế toán", "âm thứ hai"] },
          { label: "marketing", cells: ["tiếp thị", "âm đầu"] }, { label: "fifteen / fifty", cells: ["15 / 50", "sau / trước"] }] },
      lines: [
        L("l1", null, "Wrong stress makes words hard to recognise.", "Trọng âm sai làm từ khó nhận ra."),
        L("l2", null, "Engineer: stress on the last part. Accountant: the second. Marketing: the first.", "“Engineer” nhấn âm cuối, “accountant” âm thứ hai, “marketing” âm đầu."),
        L("l3", null, "Numbers too. Fifteen: stress at the end. Fifty: stress at the start.", "Số đếm cũng vậy: “fifteen” nhấn sau, “fifty” nhấn trước."),
      ] },
    { id: "s17", module: "DLG-01", ref: "p13",
      data: { set: "office", label: "Năm mươi hay mười lăm?",
        actors: [{ id: "binh", side: "left" }, { id: "sam", side: "right" }],
        verdict: { ok: false, label: "Nói “fifty” mà nhấn âm sau",
          why: "Nhấn âm sau nên bên kia nghe thành “fifteen”, gửi nhầm báo giá cho doanh nghiệp rất nhỏ." } },
      lines: [
        L("l1", null, "Bac Binh presents his company to Sam, a foreign supplier.", "Bác Bình giới thiệu công ty với Sam, nhà cung cấp nước ngoài."),
        L("l2", "binh", "We have fifty staff.", "Công ty chúng tôi có năm mươi nhân viên.", { face: "happy", pose: "explain", to: "sam", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "He stressed the end, so Sam heard fifteen. Next week: a quote for very small businesses.", "Bác nhấn âm sau, Sam nghe thành “fifteen”. Tuần sau nhận báo giá cho doanh nghiệp rất nhỏ."),
        L("l5", "det", "Then several more emails to clear it up. Let's rewind and try again.", "Mất thêm mấy email mới làm rõ. Tua lại, thử cách khác nhé.", { phase: "redo" }),
        L("l6", "binh", "We have fifty staff. Fifty.", "Chúng tôi có năm mươi nhân viên. Năm mươi.", { phase: "redo", face: "happy", pose: "explain", to: "sam" }),
        L("l7", "sam", "Fifty, got it.", "Năm mươi, tôi hiểu rồi.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },
    { id: "s18", module: "TEXT-02", ref: "p14,p15",
      data: { text: "Số “-teen” nhấn sau, số “-ty” nhấn trước.", keywords: ["-teen", "-ty"], illus: "input-numbers" },
      lines: [
        L("l1", null, "Teen numbers: stress at the end. Ty numbers: stress at the start.", "Số “-teen” nhấn sau, số “-ty” nhấn trước.", { wait: 300 }),
        L("l2", null, "Your name is familiar to you, new to them. Say it slowly and clearly, and repeat it if they miss it.", "Tên bạn quen với bạn, lạ với người nghe. Nói chậm, rõ, nhắc lại nếu họ chưa bắt kịp."),
      ] },

    // ---------- Chương 5 ----------
    { id: "s19", module: "HOST-03", data: { n: 5, of: 6, title: "Nghe như đang trả bài" },
      lines: [L("l1", "det", "Part five: sounding like a school presentation.", "Phần năm: cách nói nào nghe như đang trả bài?")] },
    { id: "s20", module: "LIST-08", ref: "p16,p18",
      data: { title: "Mở và kết khi gặp người", items: [
        { title: "Mở kiểu trả bài", detail: "Hello everybody, today I will introduce myself.", illus: "school" },
        { title: "Mở kiểu gặp người", detail: "Hi everyone, I'm Nam.", illus: "waving-hand" },
        { title: "Kết kiểu trả bài", detail: "Thank you for listening.", illus: "clapping-hands" },
        { title: "Kết kiểu gặp người", detail: "Nice to meet you. / How about you?", illus: "speech-balloon" }] },
      lines: [
        L("l1", null, "Hello everybody, today I will introduce myself. That's a school presentation opening.", "“Hello everybody, today I will introduce myself”: khuôn bài thuyết trình ở trường."),
        L("l2", null, "When you meet people, go straight in: Hi everyone, I'm Nam.", "Gặp người thì vào thẳng: “Hi everyone, I'm Nam.”"),
        L("l3", null, "Ending with thank you for listening sounds like you just gave a talk.", "Kết bằng “Thank you for listening” nghe như vừa thuyết trình xong."),
        L("l4", null, "End with nice to meet you, or ask: how about you?", "Hãy kết bằng “Nice to meet you” hoặc hỏi lại “How about you?”"),
      ] },
    { id: "s21", module: "HOST-02", ref: "p17",
      data: { statement: "Ngữ pháp đúng thì kể tuổi, cân nặng, hôn nhân cũng không sao", truth: false,
        why: "Kể quá nhiều chuyện riêng ở lần gặp đầu hay buổi phỏng vấn là lỗi cách nói." },
      lines: [
        L("l1", "det", "If the grammar is right, sharing your age, weight and marital status is fine. True or false?", "Ngữ pháp đúng thì kể tuổi, cân nặng, hôn nhân cũng được. Đúng hay sai?"),
        L("l2", "det", "False. At a first meeting or an interview, too much personal detail is a style mistake.", "Sai. Lần gặp đầu hay phỏng vấn, kể quá nhiều chuyện riêng là lỗi cách nói.", { face: "stern" }),
      ] },
    { id: "s22", module: "CMP-01", ref: "p19",
      data: { labels: ["Bản trước", "Bản sau"], left: "Đủ ý, nhưng mở và kết như bài trình bày", right: "Nói như trò chuyện, câu hỏi cuối trao lượt", illus: ["clapping-hands", "speech-balloon"] },
      lines: [
        L("l1", null, "Back to Dung's dinner. The first version opened and closed like a talk. People clapped like an audience.", "Quay lại bữa tối của Dũng. Bản đầu mở và kết như bài trình bày, mọi người vỗ tay như khán giả."),
        L("l2", null, "The second sounded like a chat, and the last question passed the turn.", "Bản sau nói như trò chuyện, câu hỏi cuối trao lượt cho người bên cạnh."),
      ] },
    { id: "s22b", module: "TEXT-01", ref: "p20",
      data: { text: "Gặp người là trò chuyện, không phải thuyết trình.", illus: "speech-balloon" },
      lines: [L("l1", null, "Meeting people is a conversation, not a presentation.", "Gặp người là trò chuyện, không phải thuyết trình.", { wait: 300 })] },
    // ---------- Chương 6 ----------
    { id: "s23", module: "HOST-03", data: { n: 6, of: 6, title: "Sửa lỗi cho bền" },
      lines: [L("l1", "det", "Last part: fixing mistakes for good.", "Phần cuối: sửa lỗi thế nào cho bền?")] },
    { id: "s24", module: "LIST-06", ref: "p21,p22,p25",
      data: { title: "Ba bước sửa lỗi", steps: [
        { text: "Viết ra giấy, gạch chân danh từ chỉ nghề, kiểm mạo từ", illus: "memo" },
        { text: "Nói to, ghi âm, nhờ bạn chép lại câu bạn nói", illus: "studio-microphone" },
        { text: "Chọn hai ba lỗi hay mắc, sửa trong một tuần", illus: "spiral-calendar" }] },
      lines: [
        L("l1", null, "Step one: write your introduction down. Underline every job word, and check the article.", "Bước một: viết ra giấy, gạch chân mọi từ chỉ nghề để kiểm mạo từ."),
        L("l2", null, "Then compare it with the mistakes in this lesson.", "Rồi đối chiếu với các lỗi trong bài."),
        L("l3", null, "Step two: say it aloud and record it, to catch final sounds and -s, -ed.", "Bước hai: nói to và ghi âm, bắt lỗi âm cuối và đuôi -s, -ed."),
        L("l4", null, "Ask a friend to write down what you say. Missing letters show where you drop sounds.", "Nhờ bạn viết lại câu bạn nói. Chỗ họ viết thiếu là chỗ bạn bỏ âm."),
        L("l5", null, "Step three: don't fix everything at once. Pick two or three common mistakes for one week.", "Bước ba: đừng sửa hết cùng lúc. Chọn hai ba lỗi hay mắc, tập trung một tuần."),
      ] },
    { id: "s25", module: "SCENE-01", ref: "p23,p24",
      data: { set: "room", label: "Chuyện của Thảo",
        actors: [{ id: "thao", side: "left", pose: "phone", face: "happy" }], props: ["studio-microphone", "memo"] },
      lines: [
        L("l1", "thao", "I always write the s, so I say I have two brothers right.", "Viết lúc nào cũng có chữ s, nên chắc mình nói đúng “two brothers”.", { face: "happy", pose: "explain" }),
        L("l2", null, "She records it, and a friend writes down what he hears.", "Thảo ghi âm, nhờ bạn chép lại."),
        L("l3", "thao", "I have two brother, I work at bank? No s, no a!", "“I have two brother, I work at bank”? Mất s, mất a!", { face: "surprised", pose: "shrug" }),
        L("l4", null, "Her ears heard the meaning, not the sound. Now she records every practice.", "Tai cô nghe ý, không nghe âm. Từ đó Thảo ghi âm mỗi lần tập."),
        L("l5", "thao", "A few weeks later, I can hear my -s.", "Vài tuần sau, mình đã bật được đuôi -s.", { face: "happy", pose: "thumb" }),
      ] },
    { id: "s26", module: "TEXT-01", ref: "p24",
      data: { text: "Tai mình nghe ý, máy ghi âm mới nghe âm.", illus: "studio-microphone" },
      lines: [L("l1", null, "Your ears hear the meaning. Only a recording hears the sound.", "Tai mình nghe ý, máy ghi âm mới nghe âm.", { wait: 300 })] },
    { id: "s27", module: "LIST-08", ref: "p26,p27",
      data: { title: "Sửa lỗi trong một tháng", items: [
        { title: "Cách A", detail: "Chép hai mươi lỗi, quyết sửa hết trong một tuần", illus: "scroll" },
        { title: "Kết quả", detail: "Nói phải dò danh sách, ngắc ngứ, bỏ cuộc sau vài ngày", illus: "weary-face" },
        { title: "Cách B", detail: "Chỉ hai lỗi, như mạo từ và âm cuối, một tuần rồi đổi", illus: "spiral-calendar" },
        { title: "Kết quả", detail: "Lời nói vẫn trôi, một tháng sửa bền khoảng tám lỗi", illus: "check-mark-button" }] },
      lines: [
        L("l1", null, "Way A: copy twenty common mistakes, and fix them all in one week.", "Cách A: chép hai mươi lỗi, quyết tâm sửa hết trong một tuần."),
        L("l2", null, "You check the list every time you speak, get stuck, and many give up in days.", "Mỗi lần nói lại dò danh sách, càng nói càng ngắc ngứ, nhiều người bỏ cuộc sau vài ngày."),
        L("l3", null, "Way B: just two, like articles and final sounds, for one week. Then the next two.", "Cách B: chỉ hai lỗi, như mạo từ và âm cuối, một tuần rồi đổi."),
        L("l4", null, "Your speech still flows. After a month, about eight mistakes are fixed for good.", "Lời nói vẫn trôi. Sau một tháng, sửa bền được khoảng tám lỗi."),
      ] },
    { id: "s27b", module: "TEXT-01", ref: "p27",
      data: { text: "Mỗi tuần hai lỗi, đều hơn một lần hai mươi lỗi.", illus: "spiral-calendar" },
      lines: [L("l1", null, "Two mistakes a week beats twenty at once.", "Mỗi tuần hai lỗi, đều hơn một lần hai mươi lỗi.", { wait: 300 })] },
    // ---------- Kết ----------
    { id: "s28", module: "END-03", ref: "p28,outro",
      data: { title: "Trước lần giới thiệu tới", illus: "studio-microphone",
        items: ["“a/an” trước nghề", "Không “am” với động từ chính", "“experience”, “graduated from”, “live in”", "Âm cuối, đuôi -s, -ed", "Mở “Hi, I'm…”, kết bằng câu hỏi lại"] },
      lines: [
        L("l1", null, "These mistakes don't mean you're bad. They show Vietnamese is translating for you.", "Những lỗi này không nói lên bạn kém, chỉ cho thấy tiếng Việt đang “dịch hộ” bạn."),
        L("l2", null, "Check: a or an before jobs, no am with a main verb, experience, graduated from, live in, final sounds, and a question back.", "Kiểm: “a/an” trước nghề, không “am” với động từ, “experience”, “graduated from”, “live in”, âm cuối, câu hỏi lại."),
        L("l3", null, "Record your introduction today, check it with this list, and pick two mistakes for this week.", "Ghi âm hôm nay, so với danh sách, chọn hai lỗi để sửa tuần này."),
      ] },
    { id: "s29", module: "QUIZ-01", ref: "questions[28]",
      data: {
        q: "In the before and after example, why does the after version keep the talk going?",
        options: [
          "It thanks everyone for listening, so the group feels respected and happy",
          "It ends with a question, so the next person gets a turn to speak",
          "It uses longer sentences, so the group sees how fluent the speaker is",
        ],
        correct: 1, countdown: 5, illus: "speech-balloon",
        why: "Bản sau kết bằng “What about you guys?”, trao lượt cho người bên cạnh.",
      },
      lines: [
        L("l1", null, "In the before and after example, why does the after version keep the talk going?", "Trong ví dụ trước – sau, vì sao bản sau giúp câu chuyện tiếp tục?"),
        L("l2", null, "It ends with a question, so the next person gets a turn to speak.", "Nó kết bằng một câu hỏi, nên người kế bên có lượt nói."),
        L("l3", null, "\"Thank you for listening\" makes people an audience. Meeting people is a chat.", "“Thank you for listening” biến mọi người thành khán giả. Gặp người là trò chuyện."),
      ] },
    { id: "s30", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án" },
      lines: [L("l1", "det", "No presentation needed. What about you? Forty questions below!", "Không cần thuyết trình. Còn bạn thì sao? Bốn mươi câu hỏi bên dưới!", { face: "wink" })] },
  ],
};
