// Kịch bản video W lần 3 (#110) — "Nên hỏi nhà tuyển dụng câu gì vào cuối buổi phỏng vấn?" · chuỗi "Chuẩn bị phỏng vấn xin việc"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "smart-questions-to-ask-at-the-end-of-an-interview--w01",
  hook: "HOOK-02",
  loop: { open: "s01", close: "s31" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "job-seekers", slug: "smart-questions-to-ask-at-the-end-of-an-interview", door: "ky-nang", level: "B1",
    title: "Nên hỏi nhà tuyển dụng câu gì vào cuối buổi phỏng vấn?", series: "Chuẩn bị phỏng vấn xin việc" },
  format: "W", mode: "text", audio: {},
  notes: "Phủ ý: 25/25. Đổi tên: “bạn” ở Hai lựa chọn p3 và các câu hỏi mẫu p5–p11, p23 → Dũng; Ninh (p21) → Thảo; người phỏng vấn, chị quản lý → Cô Hoa (chỉ nói câu mời hỏi và câu “Chị vừa nói rồi đó em”, có trong bài); Lợi (p16) → kể trên thẻ STORY-01, không nêu tên; “bạn” ở câu hỏi nối tiếp p20 → Thảo. Vai mới: Sam (s31) là người phỏng vấn bằng tiếng Anh ở p25, chỉ nói câu mời hỏi; Dũng đọc ba câu mẫu tiếng Anh p25. Không dùng Bin, Bà Tư. Phần làm lại ở s26 (DLG-01) theo p22–p23: gạch câu đã được trả lời, hỏi câu về bước tiếp theo. Bài có 7 mục; video gộp mục “nhóm và người quản lý” với mục “học hỏi và thách thức” thành chương 3. Không dùng questions[32], [34] (có tên Ninh, lệch với tên đã đổi). Danh sách số câu theo bài đã sửa (#107): năm sáu câu (p18, p19). Câu đố: questions[25], questions[26] (không có tên nhân vật).",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-03", ref: "p3",
      data: { set: "office",
        actors: [{ id: "dung", side: "left" }, { id: "hoa", side: "right", pose: "hold" }],
        left: { label: "“Dạ không ạ”", ok: false },
        right: { label: "Hỏi về ba tháng đầu", ok: true } },
      lines: [
        L("a1", "hoa", "Do you have any questions for us?", "Em có câu hỏi gì cho bọn chị không?", { phase: "a", pose: "explain" }),
        L("a2", "dung", "No, thank you. You've explained everything.", "Dạ không ạ, anh chị nói rõ hết rồi.", { phase: "a", face: "happy", react: { hoa: "neutral" } }),
        L("b2", "dung", "In the first three months, what would you like this person to achieve?", "Trong ba tháng đầu, anh chị mong người ở vị trí này làm được gì ạ?", { phase: "b", face: "thinking", pose: "explain", react: { hoa: "happy" } }),
        L("b3", null, "She sees him in the job. He learns what they need.", "Người phỏng vấn hình dung Dũng khi vào làm; Dũng biết điều họ cần.", { phase: "b" }),
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Hỏi hai ba câu về", pose: "present",
        items: ["Chính công việc", "Nhóm sẽ làm cùng", "Cách người mới được hướng dẫn", "Bước tiếp theo"] },
      lines: [
        L("l1", "det", "What should you ask at the end of an interview?", "Cuối buổi phỏng vấn nên hỏi gì?"),
        L("l2", "det", "The job itself.", "Chính công việc."),
        L("l3", "det", "The team.", "Nhóm bạn sẽ làm cùng."),
        L("l4", "det", "How new people learn.", "Cách người mới được hướng dẫn."),
        L("l5", "det", "And the next steps.", "Và bước tiếp theo."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Sáu phần của video", chapters: [
        { label: "Vì sao đừng nói “không”", illus: "zipper-mouth-face" },
        { label: "Hỏi về công việc", illus: "briefcase" },
        { label: "Nhóm, học hỏi, thách thức", illus: "busts-in-silhouette" },
        { label: "Câu nên tránh", illus: "no-entry" },
        { label: "Bao nhiêu câu, lúc nào", illus: "notebook" },
        { label: "Câu cuối cùng", illus: "chequered-flag" } ] },
      lines: [
        L("l1", null, "Six parts: why not say no, questions on the work, the team and growth,", "Sáu phần: vì sao đừng nói không, hỏi về việc, về nhóm và học hỏi,"),
        L("l2", null, "what to avoid, how many and when, and the very last question.", "câu nên tránh, bao nhiêu câu và lúc nào, và câu cuối cùng."),
      ] },

    // ---------- Phần 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Vì sao đừng nói “Dạ không ạ”?" },
      lines: [L("l1", "det", "Part one: why not just say no?", "Phần một: vì sao không nên nói “Dạ không ạ”?")] },
    { id: "s05", module: "LIST-07", ref: "p1",
      data: { title: "Lượt hỏi ngược cho thấy", items: [
        { text: "Quan tâm công việc, hay chỉ muốn được nhận", illus: "briefcase" },
        { text: "Có lắng nghe suốt buổi không", illus: "ear" },
        { text: "Đã nghĩ như người sắp vào làm chưa", illus: "light-bulb" } ] },
      lines: [
        L("l1", null, "Your questions show what prepared answers can't. Do you care about the work, or just the offer?", "Câu hỏi của bạn cho thấy điều câu soạn sẵn khó cho thấy: quan tâm công việc, hay chỉ muốn được nhận?"),
        L("l2", null, "Were you listening the whole time?", "Bạn có lắng nghe suốt buổi không?"),
        L("l3", null, "Are you already thinking like someone starting the job?", "Bạn đã nghĩ như người sắp bắt tay vào làm chưa?"),
      ] },
    { id: "s06", module: "TEXT-04", ref: "p2",
      data: { text: "Phỏng vấn là hai chiều: bạn cũng đang chọn nơi làm việc.", marks: ["hai chiều"], illus: "handshake" },
      lines: [
        L("l1", null, "It's also a rare chance to ask insiders what the job ad never says.", "Đây cũng là lúc hiếm hoi hỏi người trong cuộc điều tin tuyển dụng không có."),
        L("l2", null, "It goes both ways. You are choosing too.", "Phỏng vấn là hai chiều, bạn cũng đang chọn nơi làm việc."),
      ] },
    { id: "s07", module: "TEXT-02", ref: "p4",
      data: { text: "Lượt hỏi cuối là lượt nói cuối của bạn.", keywords: ["lượt nói cuối"], illus: "speaking-head" },
      lines: [L("l1", null, "Your last turn to ask is your last turn to speak.", "Lượt hỏi cuối là lượt nói cuối của bạn.")] },

    // ---------- Phần 2 ----------
    { id: "s08", module: "HOST-03", data: { n: 2, of: 6, title: "Hỏi gì về chính công việc?" },
      lines: [L("l1", "det", "Part two: questions about the job itself.", "Phần hai: hỏi gì về chính công việc?")] },
    { id: "s09", module: "SCENE-01", ref: "p5",
      data: { set: "office", label: "Hình dung một ngày làm việc",
        actors: [{ id: "dung", side: "left" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l1", "dung", "What does a typical week look like in this role?", "Một tuần làm việc điển hình của vị trí này diễn ra thế nào ạ?", { pose: "explain", to: "hoa" }),
        L("l2", "dung", "Is this a new role, or replacing someone?", "Vị trí này mới mở hay thay cho người trước ạ?", { face: "thinking", react: { hoa: "thinking" } }),
        L("l3", null, "A new role is still taking shape. A replacement already has a pattern.", "Vị trí mới thường còn đang định hình, vị trí thay người thì đã có khuôn sẵn."),
      ] },
    { id: "s10", module: "LIST-03", ref: "p6,p7",
      data: { title: "Hai câu đáng hỏi", items: [
        { front: "“Trong ba tháng đầu, anh chị mong người ở vị trí này làm được những gì ạ?”", back: "Biết kỳ vọng thực tế; họ thấy bạn đã nghĩ đến lúc bắt đầu", illus: "bullseye", backIllus: "light-bulb" },
        { front: "“Sau một năm, thế nào là làm tốt công việc này ạ?”", back: "Biết họ đo kết quả bằng gì", illus: "trophy", backIllus: "bar-chart" } ] },
      lines: [
        L("l1", null, "In the first three months, what would you like this person to achieve?", "Ba tháng đầu, anh chị mong người ở vị trí này làm được gì?"),
        L("l2", null, "You learn real expectations, and they see you thinking about starting.", "Bạn biết kỳ vọng thực tế, và họ thấy bạn đã nghĩ đến lúc bắt đầu làm."),
        L("l3", null, "After one year, what does doing this job well look like?", "Sau một năm, thế nào là làm tốt công việc này?"),
        L("l4", null, "The answer tells you how they measure results.", "Câu trả lời cho biết họ đo kết quả bằng gì."),
      ] },

    // ---------- Phần 3 ----------
    { id: "s11", module: "HOST-03", data: { n: 3, of: 6, title: "Nhóm, học hỏi, thách thức" },
      lines: [L("l1", "det", "Part three: the team, learning, and challenges.", "Phần ba: hỏi về nhóm, về học hỏi và thách thức.")] },
    { id: "s12", module: "LIST-05", ref: "p8",
      data: { title: "Hỏi về nhóm", illus: "busts-in-silhouette", items: [
        "“Nhóm hiện có bao nhiêu người, mỗi người phụ trách mảng nào ạ?”", "“Nhóm thường giao việc và góp ý theo cách nào ạ?”" ] },
      lines: [
        L("l1", null, "The people you work with every day matter as much as the job.", "Người làm cùng mỗi ngày ảnh hưởng không kém bản thân công việc."),
        L("l2", null, "How many are on the team, and what does each handle?", "Nhóm có bao nhiêu người, mỗi người phụ trách mảng nào?"),
        L("l3", null, "How does the team give tasks and feedback?", "Nhóm thường giao việc và góp ý theo cách nào?"),
      ] },
    { id: "s13", module: "HOST-02", ref: "p9",
      data: { statement: "Hỏi “Anh chị thích gì nhất ở đây?” mà họ ngập ngừng lâu là chắc chắn nơi đó tệ", truth: false,
        why: "Câu này thường nhận câu trả lời rất thật. Ngập ngừng là thông tin đáng ghi nhận, nhưng chưa đủ để kết luận." },
      lines: [
        L("l1", "det", "You ask: what do you like most here? A long pause means it's a bad place. True or false?", "Hỏi “Anh chị thích gì nhất ở đây?”, họ ngập ngừng lâu là nơi đó tệ. Đúng hay sai?"),
        L("l2", "det", "False. The question is personal and positive, so answers are honest. A pause is worth noting, not a verdict.", "Sai. Câu hỏi cá nhân, tích cực nên thường được trả lời thật. Ngập ngừng đáng ghi nhận, chưa đủ kết luận.", { face: "wink" }),
      ] },
    { id: "s14", module: "CMP-01", ref: "p10",
      data: { labels: ["Muốn học để làm tốt hơn", "Chỉ quan tâm lên chức"], left: "“Người mới vào được hướng dẫn thế nào ạ?”", right: "“Bao lâu thì em được lên chức ạ?”", illus: ["seedling", "rocket"] },
      lines: [
        L("l1", null, "Ask about growth as wanting to learn: how are new people guided?", "Hỏi về phát triển theo hướng muốn học: “Người mới được hướng dẫn thế nào ạ?”"),
        L("l2", null, "Or: where do people in this role usually grow? Not only: when's my promotion?", "Hoặc: “Người ở vị trí này thường phát triển theo hướng nào?” Đừng chỉ hỏi khi nào lên chức."),
      ] },
    { id: "s15", module: "SCENE-01", ref: "p11",
      data: { set: "office", label: "Hỏi về thách thức",
        actors: [{ id: "dung", side: "left" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l1", "dung", "What's the biggest challenge for someone in this role?", "Thách thức lớn nhất người ở vị trí này sẽ gặp là gì ạ?", { pose: "explain", face: "thinking", react: { hoa: "thinking" } }),
        L("l2", null, "Asked wanting to help, it shows maturity.", "Hỏi với thái độ muốn góp sức, câu này cho thấy sự chín chắn."),
        L("l3", null, "The answer may open a door to share a related experience you haven't mentioned.", "Câu trả lời đôi khi mở ra cơ hội để kể thêm một kinh nghiệm liên quan chưa có dịp nói."),
      ] },

    // ---------- Phần 4 ----------
    { id: "s16", module: "HOST-03", data: { n: 4, of: 6, title: "Những câu nên tránh" },
      lines: [L("l1", "det", "Part four: questions to avoid.", "Phần bốn: những câu nào nên tránh?")] },
    { id: "s17", module: "CMP-02", ref: "p12,p13",
      data: { title: "Hỏi về sản phẩm của công ty",
        before: "“Dạ công ty mình chủ yếu bán sản phẩm gì ạ?”",
        after: "“Bên mình vừa ra dòng sản phẩm mới. Nhóm em ứng tuyển tham gia ở khâu nào ạ?”",
        illusBefore: "face-with-diagonal-mouth", illusAfter: "star-struck" },
      lines: [
        L("l1", null, "Before: the homepage already says it. You look unprepared.", "Trước: trang chủ đã ghi rõ. Người phỏng vấn dễ nghĩ bạn chưa đọc gì."),
        L("l3", null, "After: you saw the new product line. Which stage will this team work on?", "Sau: thấy bên mình vừa ra dòng sản phẩm mới, nhóm em ứng tuyển tham gia khâu nào?"),
      ] },
    { id: "s18", module: "TEXT-02", ref: "p14",
      data: { text: "Trang web trả lời được thì đừng hỏi.", keywords: ["Trang web", "đừng hỏi"], illus: "desktop-computer" },
      lines: [L("l1", null, "If the website can answer it, don't ask it.", "Trang web trả lời được thì đừng hỏi.")] },
    { id: "s19", module: "LIST-05", ref: "p15",
      data: { title: "Cũng nên tránh", illus: "no-entry", items: [
        "Lương, thưởng, ngày nghỉ ở vòng đầu, khi họ chưa nhắc", "Đời tư người phỏng vấn: tuổi, gia đình", "Câu có hoặc không quá đơn giản" ] },
      lines: [
        L("l1", null, "Pay, bonus and leave in round one, before they mention it: wait.", "Lương, thưởng, ngày nghỉ ở vòng đầu, khi họ chưa nhắc: để sau."),
        L("l2", null, "Wait until they want to go on, or HR raises it.", "Đợi khi công ty có dấu hiệu muốn đi tiếp, hoặc nhân sự chủ động hỏi."),
        L("l3", null, "No private questions, like age or family. No simple yes-or-no questions.", "Tránh hỏi đời tư như tuổi, gia đình, và câu có hoặc không quá đơn giản."),
      ] },
    { id: "s20", module: "STORY-01", ref: "p16",
      data: { context: "Một người đi làm hai năm, phỏng vấn vòng đầu với trưởng nhóm.",
        action: "Vừa được mời hỏi, hỏi liền ba câu: thưởng cuối năm, nghỉ phép, bao lâu tăng lương.",
        outcome: "Buổi gặp kết thúc sớm; tuần sau nhận email báo không đi tiếp vòng hai.",
        illus: ["man-office-worker", "money-bag", "envelope"] },
      lines: [
        L("l1", null, "Two years of work, a first round with the team leader.", "Đi làm hai năm, phỏng vấn vòng đầu với trưởng nhóm."),
        L("l2", null, "Three questions at once: year-end bonus, days off, when pay goes up.", "Hỏi liền ba câu: thưởng cuối năm, nghỉ phép mấy ngày, bao lâu tăng lương."),
        L("l3", null, "Short answers, an early end, and a no for round two.", "Trả lời ngắn, kết thúc sớm, tuần sau báo không đi tiếp vòng hai."),
      ] },
    { id: "s21", module: "TEXT-01", ref: "p17",
      data: { text: "Hỏi việc trước, hỏi tiền sau.", illus: "briefcase" },
      lines: [L("l1", null, "With your future team leader, ask about the work first, money later.", "Gặp trưởng nhóm tương lai: hỏi việc trước, hỏi tiền sau.")] },

    // ---------- Phần 5 ----------
    { id: "s22", module: "HOST-03", data: { n: 5, of: 6, title: "Bao nhiêu câu, hỏi lúc nào?" },
      lines: [L("l1", "det", "Part five: how many questions, and when to ask.", "Phần năm: chuẩn bị bao nhiêu câu, và hỏi lúc nào?")] },
    { id: "s23", module: "TEXT-04", ref: "p18",
      data: { text: "Chuẩn bị năm đến sáu câu, ghi vào sổ, mang sổ vào phòng.", marks: ["năm đến sáu câu"], illus: "notebook" },
      lines: [
        L("l1", null, "Prepare five or six. Some get answered during the talk.", "Chuẩn bị năm đến sáu câu, vì vài câu sẽ được trả lời ngay trong lúc nói chuyện."),
        L("l2", null, "Bringing a notebook is normal. Mind goes blank? Just look down.", "Mang sổ vào phòng là bình thường. Hồi hộp, đầu óc trống trơn? Nhìn xuống sổ."),
      ] },
    { id: "s24", module: "LIST-05", ref: "p19",
      data: { title: "Trong sổ nên có", illus: "notebook", items: [
        "Hai câu về công việc", "Một hai câu về nhóm", "Một câu về học hỏi hoặc thách thức", "Một câu về bước tiếp theo" ] },
      lines: [
        L("l1", null, "Two on the work. One or two on the team.", "Hai câu về công việc. Một hai câu về nhóm."),
        L("l2", null, "One on learning or challenges. One on next steps.", "Một câu về học hỏi hoặc thách thức. Một câu về bước tiếp theo."),
        L("l3", null, "When invited, pick two or three. More if they still have time and seem keen.", "Khi được mời, chọn hai ba câu; họ còn thời gian, hào hứng thì hỏi thêm, nhưng để ý phản ứng."),
      ] },
    { id: "s25", module: "SCENE-01", ref: "p20",
      data: { set: "office", label: "Câu hỏi nối tiếp",
        actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l1", null, "The best question may not be on your list. It comes from what they just said.", "Câu hay nhất đôi khi không nằm trong danh sách, mà nảy ra từ điều họ vừa nói."),
        L("l2", "thao", "You mentioned the team is moving to new software. What stage is that at?", "Lúc nãy chị có nhắc nhóm đang chuyển sang phần mềm mới, việc chuyển đổi đang ở giai đoạn nào ạ?", { pose: "explain", face: "thinking", react: { hoa: "happy" } }),
        L("l3", null, "It shows you really listened.", "Câu như vậy cho thấy bạn lắng nghe thật."),
      ] },
    { id: "s26", module: "DLG-01", ref: "p21",
      data: { set: "office", label: "Đọc câu hỏi từ sổ",
        actors: [{ id: "thao", side: "left", pose: "hold" }, { id: "hoa", side: "right", pose: "hold" }],
        verdict: { ok: false, label: "Đọc sổ mà không nghe",
          why: "Mười phút trước, chị quản lý vừa kể kỹ về chương trình kèm cặp người mới." } },
      lines: [
        L("l1", "hoa", "Do you have any questions for us?", "Em có câu hỏi gì không?", { pose: "explain" }),
        L("l2", "thao", "Yes. First, how are new staff trained?", "Dạ có. Câu đầu: người mới vào được đào tạo thế nào ạ?", { face: "happy", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Ten minutes ago, she explained the mentoring programme in detail.", "Mười phút trước, chị ấy vừa kể kỹ về chương trình kèm cặp."),
        L("l5", "det", "She'll say: I just told you. Listen first, then cross out what's answered.", "Chị sẽ nói: “Chị vừa nói rồi đó em.” Nghe hết rồi hỏi, câu đã trả lời thì gạch đi."),
        L("l6", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l7", "thao", "My question on training is already answered, thank you.", "Câu về đào tạo chị đã trả lời rồi, em cảm ơn ạ.", { phase: "redo", face: "happy", pose: "explain" }),
        L("l8", "thao", "What are the next steps in the process?", "Các bước tiếp theo của quy trình là gì ạ?", { phase: "redo", face: "thinking", react: { hoa: "happy" } }),
      ] },
    { id: "s27", module: "TEXT-02", ref: "p22",
      data: { text: "Nghe hết rồi hỏi, câu đã trả lời thì gạch đi.", keywords: ["Nghe hết", "gạch đi"], illus: "pencil" },
      lines: [L("l1", null, "Listen to everything, then ask. Cross out what's answered.", "Nghe hết rồi hỏi, câu đã trả lời thì gạch đi.")] },

    // ---------- Phần 6 ----------
    { id: "s28", module: "HOST-03", data: { n: 6, of: 6, title: "Câu cuối cùng nên hỏi gì?" },
      lines: [L("l1", "det", "Last part: what should your very last question be?", "Phần cuối: câu cuối cùng nên hỏi gì?")] },
    { id: "s29", module: "LIST-05", ref: "p23",
      data: { title: "Luôn để dành một câu về bước tiếp theo", illus: "footprints", items: [
        "“Các bước tiếp theo của quy trình là gì ạ?”", "“Khi nào em có thể nhận phản hồi ạ?”", "“Anh chị có cần thêm tài liệu gì từ em không ạ?”" ] },
      lines: [
        L("l1", null, "Always keep one about next steps, so you don't have to guess.", "Luôn để dành một câu về bước tiếp theo, đỡ hồi hộp đoán già đoán non."),
        L("l2", null, "What are the next steps? When can I hear back?", "Các bước tiếp theo là gì? Khi nào em nhận được phản hồi?"),
        L("l3", null, "Do you need any more documents from me? It shows care, and keeps things moving.", "Anh chị cần thêm tài liệu gì không? Cho thấy bạn chu đáo, quy trình không bị chậm."),
      ] },
    { id: "s30", module: "HOST-02", ref: "p24",
      data: { statement: "Ai cũng nên hỏi: “Hồ sơ của em có gì khiến anh chị còn băn khoăn không?”", truth: false,
        why: "Câu này cho cơ hội giải thích ngay, nhưng chỉ nên dùng khi đủ bình tĩnh nghe nhận xét thẳng." },
      lines: [
        L("l1", "det", "Everyone should ask: is there anything in my profile that still worries you? True or false?", "Ai cũng nên hỏi: “Hồ sơ của em có gì khiến anh chị còn băn khoăn không?” Đúng hay sai?"),
        L("l2", "det", "False. It lets you explain at once, but only if you're calm enough to hear direct comments.", "Sai. Nó cho bạn giải thích ngay, nhưng chỉ dùng khi đủ bình tĩnh nghe nhận xét thẳng.", { face: "wink" }),
      ] },
    { id: "s31", module: "SCENE-01", ref: "p25",
      data: { set: "meeting", label: "Phỏng vấn bằng tiếng Anh",
        actors: [{ id: "dung", side: "left" }, { id: "sam", side: "right", pose: "hold" }] },
      lines: [
        L("l1", "sam", "Do you have any questions for us?", "Bạn có câu hỏi gì cho chúng tôi không?", { pose: "explain", to: "dung" }),
        L("l2", "dung", "What does a typical week look like in this role?", "Một tuần điển hình của vị trí này thế nào?", { pose: "explain", to: "sam" }),
        L("l3", "dung", "What would you like the new person to achieve in the first three months?", "Ba tháng đầu, anh chị mong người mới đạt được gì?", { face: "thinking" }),
        L("l4", "dung", "What are the next steps in the process?", "Các bước tiếp theo của quy trình là gì?", { face: "happy", react: { sam: "happy" } }),
      ] },

    // ---------- Tổng kết, câu đố, kết ----------
    { id: "s32", module: "END-02", ref: "outro",
      data: { kicker: "Nhớ mang theo", illus: "notebook", points: [
        "Năm sáu câu trong sổ, nghe kỹ để gạch bớt",
        "Hỏi việc trước, hỏi tiền sau",
        "Luôn kết bằng bước tiếp theo" ],
        icons: ["notebook", "briefcase", "footprints"] },
      lines: [
        L("l1", null, "At the end, you switch roles: from answering to finding out.", "Lượt hỏi cuối là lúc bạn đổi vai, từ người trả lời thành người tìm hiểu."),
        L("l2", null, "Today, write five or six questions on the last page of your notebook.", "Hôm nay, viết năm sáu câu vào trang cuối cuốn sổ bạn sẽ mang theo."),
      ] },
    { id: "s33", module: "QUIZ-01", ref: "questions[25]",
      data: { q: "Which saying helps you order your questions at the end?",
        options: [
          "Ask about the work first, and ask about the money later",
          "Ask about the money first, because work questions waste everyone's time",
          "Ask about nothing at all, so you never say the wrong thing",
        ],
        correct: 0, countdown: 5, illus: "money-bag",
        why: "Hỏi việc trước cho thấy bạn quan tâm công việc; chuyện tiền để sau, đúng lúc." },
      lines: [
        L("l1", null, "Which saying helps you order your questions at the end?", "Câu nào giúp bạn sắp thứ tự câu hỏi cuối buổi?"),
        L("l2", null, "Ask about the work first, and ask about the money later.", "Hỏi việc trước, hỏi tiền sau."),
        L("l3", null, "Work first shows you care about the job. Money comes at the right time.", "Hỏi việc trước cho thấy bạn quan tâm công việc, chuyện tiền để sau đúng lúc."),
      ] },
    { id: "s34", module: "QUIZ-01", ref: "questions[26]",
      data: { q: "How many questions should you prepare for the end, and why?",
        options: [
          "Twenty or more, so you can keep asking until the interviewer stops you",
          "Only one, because preparing more makes you sound like a reporter",
          "Five or six, since a few will already be answered during the conversation",
        ],
        correct: 2, countdown: 5, illus: "notebook",
        why: "Vài câu sẽ được trả lời giữa chừng; đến lượt, chọn hai ba câu còn lại." },
      lines: [
        L("l1", null, "How many questions should you prepare for the end, and why?", "Nên chuẩn bị bao nhiêu câu cho cuối buổi, và vì sao?"),
        L("l2", null, "Five or six, since a few will already be answered during the conversation.", "Năm sáu câu, vì vài câu sẽ được trả lời ngay trong lúc nói chuyện."),
        L("l3", null, "When it's your turn, pick the two or three that fit best.", "Đến lượt, chọn hai ba câu còn lại phù hợp nhất."),
      ] },
    { id: "s35", module: "END-05", data: { text: "Bốn mươi câu để hỏi đúng lúc, đúng điều", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Your turn. Forty questions are waiting below.", "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới.")] },
  ],
};
