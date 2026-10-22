// Kịch bản video W lần 3 (#110) — "Giới thiệu di sản Việt Nam bằng tiếng Anh cho du khách" · chuỗi "Di sản và du lịch Việt Nam"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-introduce-vietnamese-heritage-to-tourists-in-english--w01",
  hook: "HOOK-14",
  loop: { open: "s01", close: "s27" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "heritage-travellers", slug: "how-to-introduce-vietnamese-heritage-to-tourists-in-english", door: "kien-thuc", level: "B1",
    title: "Giới thiệu di sản Việt Nam bằng tiếng Anh cho du khách", series: "Di sản và du lịch Việt Nam" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên (#110): “bạn” (người dẫn khách nước ngoài) → Thảo; vị khách, người bạn, đồng nghiệp nước ngoài → Sam (vai mới, nay lên hình; bản lần 2 không có khách trên hình); người bạn bảo phải giỏi tiếng Anh mới dẫn khách được (q37) → Dũng. Khuôn HOOK-14: câu treo ở s01 (khách sẽ kể lại điều nào?) được đóng ở s26 + câu đố questions[28]. Mọi câu tiếng Anh mẫu của bài (p2, p3, p5, p7, p8, p10–p12, p16, p19, p20, p22) được đọc nguyên văn. Phủ ý: 22/22. Hai DLG-01 (✍️ p8, ⚖️ p13). Câu đố cuối questions[31].",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "p17",
      data: { set: "heritage", label: "Ở Hoàng thành Thăng Long", actors: [{ id: "thao", side: "right" }, { id: "sam", side: "left" }], props: ["dragon"] },
      lines: [
        L("l1", "thao", "Welcome! In ten ten, the king moved the capital here.", "Chào Sam! Năm 1010, nhà vua dời đô về đây.", { pose: "explain", to: "sam" }),
        L("l2", "thao", "He saw a golden dragon flying up, so he named it Thang Long, rising dragon.", "Vua thấy rồng vàng bay lên, nên đặt tên Thăng Long: rồng bay lên.", { pose: "explain", face: "happy", to: "sam" }),
        L("l3", "sam", "Wow, a dragon!", "Ồ, có cả rồng!", { face: "happy", to: "thao" }),
        L("l4", null, "Tonight, which one will Sam retell to friends? The year, or the dragon? Keep that question till later.", "Tối nay Sam sẽ kể lại điều nào: năm, hay chuyện rồng? Giữ câu hỏi nhé.", { wait: 300 }),
      ],
      beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Giới thiệu di sản bằng tiếng Anh", pose: "present", items: ["Bốn câu ngắn cho mỗi nơi", "Tên tiếng Việt kèm một câu giải thích", "Kể một chuyện, rồi hỏi lại khách"] },
      lines: [
        L("l1", "det", "Worried your English isn't good enough to guide a visitor? Good news.", "Lo tiếng Anh chưa đủ giỏi để dẫn khách? Tin vui đây."),
        L("l2", "det", "You only need four short sentences for each place.", "Bạn chỉ cần bốn câu ngắn cho mỗi nơi."),
        L("l3", "det", "Keep the Vietnamese name, and add one line to explain it.", "Giữ tên tiếng Việt, kèm một câu giải thích."),
        L("l4", "det", "Tell one story, then ask your guest a question. They want to understand fast, remember one thing, and feel welcome.", "Kể một chuyện, rồi hỏi lại khách. Khách cần hiểu nhanh, nhớ một điều, thấy được chào đón."),
      ] },
    { id: "s03", module: "HOST-01",
      data: { title: "Lộ trình", pose: "point", items: ["Khung bốn câu", "Câu ngắn, tên quen", "Kể chuyện, trò chuyện", "Luyện trong một tuần"] },
      lines: [
        L("l1", "det", "Our route: the four-sentence frame.", "Lộ trình: khung bốn câu."),
        L("l2", "det", "Short sentences, and known names.", "Câu ngắn, và tên quen dùng."),
        L("l3", "det", "Stories, and real conversation.", "Kể chuyện, và trò chuyện thật."),
        L("l4", "det", "And one week of practice.", "Và một tuần luyện tập."),
      ] },

    // Chương 1 — Khung bốn câu
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Mỗi nơi nói gì là đủ?" },
      lines: [L("l1", "det", "Part one: what is enough to say at each place?", "Phần một: mỗi nơi cần nói những gì là đủ?")] },
    { id: "s05", module: "LIST-06", ref: "p1",
      data: { title: "Khung bốn bước, khoảng 30 giây", steps: [
        { text: "Đây là gì", illus: "round-pushpin" }, { text: "Vì sao quan trọng", illus: "star" },
        { text: "Một câu chuyện, chi tiết thú vị", illus: "open-book" }, { text: "Gợi ý khách xem, làm gì", illus: "eyes" } ] },
      lines: [
        L("l1", null, "Four steps. One: what it is. Two: why it matters.", "Bốn bước. Một: đây là gì. Hai: vì sao quan trọng."),
        L("l2", null, "Three: one story or fun detail. Four: what to see or do.", "Ba: một câu chuyện hay chi tiết thú vị. Bốn: gợi ý nên xem, làm gì."),
        L("l3", null, "One or two sentences each, about thirty seconds in all.", "Mỗi bước một, hai câu, khoảng ba mươi giây."),
      ] },
    { id: "s06", module: "SCENE-01", ref: "p2",
      data: { set: "street", label: "Ở Hội An", actors: [{ id: "thao", side: "right" }, { id: "sam", side: "left" }], props: ["red-paper-lantern"] },
      lines: [
        L("l1", "thao", "This is Hoi An, an old trading port.", "Đây là Hội An, một thương cảng xưa.", { pose: "point", to: "sam" }),
        L("l2", "thao", "It shows how Vietnamese, Chinese and Japanese cultures mixed here.", "Nơi đây cho thấy văn hoá Việt, Hoa, Nhật hoà quyện.", { pose: "explain", to: "sam" }),
        L("l3", "thao", "The covered bridge is on our money.", "Chùa Cầu có in trên tiền của chúng tôi.", { face: "happy", to: "sam" }),
        L("l4", "thao", "Come back at night, when the lanterns are on.", "Tối hãy quay lại, khi đèn lồng sáng lên.", { face: "happy", pose: "wave", to: "sam", react: { sam: "happy" } }),
      ] },
    { id: "s07", module: "SCENE-01", ref: "p3,p4",
      data: { set: "heritage", label: "Ngọ Môn, bốn câu", actors: [{ id: "thao", side: "right" }, { id: "sam", side: "left" }] },
      lines: [
        L("l1", "thao", "This is the Noon Gate, the main entrance to the Imperial City.", "Đây là Ngọ Môn, cổng chính vào Đại Nội.", { pose: "point", to: "sam" }),
        L("l2", "thao", "The emperors held big ceremonies here.", "Các vua cử hành đại lễ ở đây.", { pose: "explain", to: "sam" }),
        L("l3", "thao", "The middle door was only for the emperor.", "Cửa giữa chỉ dành cho nhà vua.", { pose: "explain", face: "happy", to: "sam" }),
        L("l4", "thao", "Look up at the pavilion on the roof. It's called Five Phoenixes.", "Nhìn lên lầu trên mái nhé, tên là Ngũ Phụng.", { pose: "point", face: "happy", to: "sam" }),
        L("l5", null, "Four sentences, thirty seconds. Short enough to know by heart and look your guest in the eye.", "Bốn câu, ba mươi giây: đủ ngắn để thuộc, nhìn vào mắt khách mà nói."),
        L("l6", null, "Four sentences you know well beat two pages you stumble over.", "Bốn câu thuộc lòng hơn hai trang đọc vấp."),
      ] },

    // Chương 2 — Câu ngắn hay câu sang
    { id: "s08", module: "HOST-03", data: { n: 2, of: 6, title: "Câu sang hay câu ngắn?" },
      lines: [L("l1", "det", "Part two: fancy sentences, or short ones?", "Phần hai: nên nói câu sang hay câu ngắn?")] },
    { id: "s09", module: "CMP-07", ref: "p5",
      data: { wrong: "This edifice was constructed during the reign of...", right: "This was built when Emperor Minh Mang ruled.", diff: ["edifice", "constructed", "reign"], note: "Khách đến từ nhiều nước: câu ngắn, từ đơn giản" },
      lines: [
        L("l1", null, "Short sentences, simple words. Many visitors are not native English speakers.", "Câu ngắn, từ đơn giản. Nhiều khách không nói tiếng Anh như tiếng mẹ đẻ."),
        L("l2", null, "Not: This edifice was constructed during the reign of...", "Đừng nói: This edifice was constructed during the reign of…"),
        L("l3", null, "Say: This was built when Emperor Minh Mang ruled.", "Hãy nói: This was built when Emperor Minh Mang ruled."),
      ] },
    { id: "s10", module: "LIST-13", ref: "p6",
      data: { title: "Con số và so sánh", items: [
        { title: "Một mốc năm quan trọng nhất", detail: "Không đọc cả loạt; còn lại để khách hỏi.", illus: "spiral-calendar" },
        { title: "So sánh cho dễ hình dung", detail: "“Hue was a bit like the Beijing of Vietnam”, nói rõ chỉ là so sánh.", illus: "balance-scale" } ] },
      lines: [
        L("l1", null, "Pick the one most important date, not a whole list. Leave the rest for questions.", "Chọn một mốc năm quan trọng nhất, đừng đọc cả loạt. Còn lại để khách hỏi."),
        L("l2", null, "When did Hue become the capital? At the start of the nineteenth century, when the first Nguyen emperor chose it.", "Huế thành kinh đô khi nào? Đầu thế kỷ 19, khi vua Nguyễn đầu tiên chọn nơi này."),
        L("l3", null, "Comparisons help: Hue was a bit like the Beijing of Vietnam. But say it's only a comparison.", "So sánh giúp hình dung: Huế giống Bắc Kinh của Việt Nam. Nhưng nói rõ chỉ là so sánh."),
      ] },
    { id: "s11", module: "CMP-06", ref: "p7",
      data: { do: ["“One of the most famous places in Vietnam”", "“It's my favourite place.”"], dont: ["“The most beautiful in the world” khi không có cơ sở"], doIcons: ["star", "red-heart"], dontIcons: ["warning"] },
      lines: [
        L("l1", null, "Avoid big claims like the most beautiful in the world, with nothing to back them up.", "Tránh nói quá như “đẹp nhất thế giới” khi không có cơ sở."),
        L("l2", null, "Say: one of the most famous places in Vietnam. Or share your feeling: It's my favourite place.", "Hãy nói: một trong những nơi nổi tiếng nhất Việt Nam. Hoặc: It's my favourite place."),
      ] },
    { id: "s12", module: "DLG-01", ref: "p8,p9",
      data: { set: "heritage", label: "Ra vịnh Hạ Long", actors: [{ id: "thao", side: "right" }, { id: "sam", side: "left" }],
        verdict: { ok: false, label: "Khen “nhất thế giới”", why: "Khách từng đi nhiều vịnh hỏi lại “Why do you think so?”, bạn khó có lý do để trả lời." } },
      lines: [
        L("l1", "thao", "This is the most beautiful bay in the world!", "Đây là vịnh đẹp nhất thế giới!", { face: "happy", pose: "wave", to: "sam" }),
        L("l2", "sam", "I've seen many famous bays. Why do you think so?", "Tôi từng đi nhiều vịnh nổi tiếng. Sao bạn nghĩ vậy?", { face: "thinking", to: "thao", stop: true, react: { thao: "worried" } }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "It sounds excited, but now there's no real reason to give.", "Nghe thì hào hứng, nhưng giờ khó có lý do để trả lời."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "thao", "It's one of the most famous places in Vietnam, and it's my favourite.", "Đây là một trong những nơi nổi tiếng nhất Việt Nam, và mình thích nhất.", { phase: "redo", face: "happy", pose: "explain", to: "sam" }),
        L("l7", "thao", "I came here with my grandfather.", "Mình từng đến đây với ông.", { phase: "redo", face: "happy", to: "sam" }),
        L("l8", "sam", "Really? Tell me about that trip!", "Thật à? Kể tôi nghe chuyến đi đó đi!", { phase: "redo", face: "happy", to: "thao" }),
        L("l9", "det", "Still proud, no big claim, and a real memory. Praise with your own feelings, not best in the world.", "Vẫn tự hào, không nói quá, lại có kỷ niệm thật. Khen bằng cảm nhận, đừng bằng “nhất thế giới”.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },

    // Chương 3 — Từ khó dịch
    { id: "s13", module: "HOST-03", data: { n: 3, of: 6, title: "Gặp từ khó dịch thì sao?" },
      lines: [L("l1", "det", "Part three: what about words that are hard to translate?", "Phần ba: gặp từ khó dịch thì làm sao?")] },
    { id: "s14", module: "LIST-03", ref: "p10",
      data: { title: "Giữ tên Việt, thêm một câu giải thích", items: [
        { front: "đình làng", back: "a communal house, where villagers met and worshipped the village guardian spirit", illus: "classical-building", backIllus: "busts-in-silhouette" },
        { front: "hội quán", back: "an assembly hall, where Chinese merchants from the same hometown gathered", illus: "house", backIllus: "busts-in-silhouette" },
        { front: "lăng", back: "a royal tomb, often with gardens and lakes", illus: "crown", backIllus: "national-park" } ] },
      lines: [
        L("l1", null, "The safe way: keep the Vietnamese name, and add one line. Dinh lang: a communal house, where villagers met and worshipped the village guardian spirit.", "Giữ tên Việt, thêm một câu. Đình làng: a communal house, nơi dân làng họp và thờ thành hoàng."),
        L("l2", null, "Hoi quan: an assembly hall, where Chinese merchants from the same hometown gathered.", "Hội quán: an assembly hall, nơi thương nhân Hoa cùng quê tụ họp."),
        L("l3", null, "Lang: a royal tomb, often with gardens and lakes.", "Lăng: a royal tomb, thường có vườn và hồ."),
      ] },
    { id: "s15", module: "CMP-01", ref: "p11",
      data: { labels: ["Tên riêng", "Tên có nghĩa thú vị"], left: "Tràng An, Phong Nha: không dịch, đọc rõ, chậm", right: "Hạ Long: “descending dragon”", illus: ["speaking-head", "dragon"] },
      lines: [
        L("l1", null, "Names like Trang An or Phong Nha need no translation. Say them clearly and slowly, and let guests repeat.", "Tên như Tràng An, Phong Nha không cần dịch: đọc rõ, chậm, để khách nhắc lại."),
        L("l2", null, "If the meaning is interesting, add it. Ha Long means descending dragon.", "Tên có nghĩa thú vị thì nói thêm: Hạ Long là descending dragon."),
      ] },
    { id: "s16", module: "TEXT-04", ref: "p12",
      data: { text: "The citadel, built by the Nguyen Dynasty, faces the Perfume River.", marks: ["the Nguyen Dynasty", "the Perfume River"], illus: "classical-building" },
      lines: [
        L("l1", null, "If a place already has a common English name, use it. Dai Noi is the Imperial City. Song Huong is the Perfume River.", "Nơi đã có tên tiếng Anh quen dùng thì dùng: Đại Nội là the Imperial City, sông Hương là the Perfume River."),
        L("l2", null, "Keep the word the before rivers and dynasties: The citadel, built by the Nguyen Dynasty, faces the Perfume River.", "Giữ mạo từ “the” trước tên sông, tên triều đại: the Nguyen Dynasty, the Perfume River."),
      ] },
    { id: "s17", module: "DLG-01", ref: "p13,p14",
      data: { set: "heritage", label: "Cổng Đại Nội", actors: [{ id: "thao", side: "right" }, { id: "sam", side: "left" }],
        verdict: { ok: false, label: "Dịch từng chữ tên địa danh", why: "Khách không biết đó là cung điện, tối tra bản đồ, sách hướng dẫn cũng không thấy tên ấy." } },
      lines: [
        L("l1", "thao", "Welcome to Big Inside!", "Chào mừng đến với “Big Inside”!", { face: "happy", pose: "wave", to: "sam" }),
        L("l2", "sam", "Big Inside? What is that? A market?", "Big Inside? Là gì vậy? Một cái chợ à?", { face: "surprised", pose: "shrug", to: "thao", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Your guest doesn't know it's a palace, and won't find Big Inside on any map or guidebook tonight.", "Khách không biết đó là cung điện, tối tra bản đồ, sách hướng dẫn cũng không thấy."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "thao", "Welcome to the Imperial City, where the Nguyen emperors lived.", "Chào mừng đến the Imperial City, nơi các vua Nguyễn từng sống.", { phase: "redo", face: "happy", pose: "explain", to: "sam" }),
        L("l7", "sam", "The Imperial City! It's on my map.", "The Imperial City! Có trên bản đồ của tôi này.", { phase: "redo", face: "happy", pose: "phone" }),
        L("l8", "det", "If a place already has a common English name, don't translate it word by word.", "Tên đã có cách gọi quen, đừng tự dịch từng chữ.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },

    // Chương 4 — Kể chuyện
    { id: "s18", module: "HOST-03", data: { n: 4, of: 6, title: "Kể chuyện cho khách nhớ" },
      lines: [L("l1", "det", "Part four: how to tell stories guests remember.", "Phần bốn: kể chuyện thế nào cho khách nhớ?")] },
    { id: "s19", module: "LIST-08", ref: "p15",
      data: { title: "Mỗi nơi một chuyện", items: [
        { title: "Hạ Long", detail: "Rồng mẹ phun ngọc thành đảo", illus: "dragon" },
        { title: "Thăng Long", detail: "Rồng vàng bay lên khi vua đến", illus: "crown" },
        { title: "Sơn Đoòng", detail: "Người dân tìm ra cửa hang rồi lạc lối nhiều năm", illus: "mountain" },
        { title: "Mỹ Sơn", detail: "Những viên gạch ghép khít đến khó tin", illus: "brick" } ] },
      lines: [
        L("l1", null, "Prepare one story for each site. Guests remember stories much longer than facts.", "Mỗi nơi chuẩn bị sẵn một chuyện: khách nhớ chuyện lâu hơn con số."),
        L("l2", null, "Ha Long: a mother dragon spat jewels into islands. Thang Long: a golden dragon flew up when the king came.", "Hạ Long: rồng mẹ phun ngọc thành đảo. Thăng Long: rồng vàng bay lên khi vua đến."),
        L("l3", null, "Son Doong: a local man found the entrance, then lost the way for many years.", "Sơn Đoòng: người dân tìm ra cửa hang rồi lạc lối nhiều năm."),
        L("l4", null, "My Son: bricks that fit together unbelievably well.", "Mỹ Sơn: những viên gạch ghép khít đến khó tin."),
      ] },
    { id: "s20", module: "TEXT-07", ref: "p16",
      data: { en: "First, the king arrived by boat. Then a golden dragon flew up.", vi: "Đầu tiên, nhà vua đến bằng thuyền. Rồi một con rồng vàng bay lên.",
        chunks: [{ en: "First,", vi: "đầu tiên" }, { en: "the king arrived by boat.", vi: "vua đến bằng thuyền" }, { en: "Then", vi: "rồi" }, { en: "a golden dragon flew up.", vi: "rồng vàng bay lên" }], illus: "dragon" },
      lines: [
        L("l1", null, "Tell it in the past simple, with first, then, later, finally.", "Kể bằng thì quá khứ đơn, dùng first, then, later, finally."),
        L("l2", null, "First, the king arrived by boat. Then a golden dragon flew up.", "First, the king arrived by boat. Then a golden dragon flew up."),
        L("l3", null, "So he named the city Thang Long, rising dragon.", "So he named the city Thang Long: vì vậy vua đặt tên Thăng Long, rồng bay lên."),
      ] },
    { id: "s21", module: "QUIZ-01", ref: "questions[28],p17",
      data: {
        q: "What is the lesson about using stories when you guide visitors?",
        options: [
          "Stories are useless, because visitors only want to take photos",
          "Visitors forget the numbers, but they happily retell the story",
          "Visitors remember every date if you repeat it many times",
        ],
        correct: 1, countdown: 5, illus: "dragon",
        why: "Khách quên con số, nhưng kể lại câu chuyện. Vậy tối đó, khách kể chuyện rồng.",
      },
      lines: [
        L("l1", null, "Back to Sam. What is the lesson about using stories when you guide visitors?", "Quay lại Sam: bài học về việc kể chuyện khi dẫn khách là gì?"),
        L("l2", null, "Visitors forget the numbers, but they happily retell the story.", "Khách quên con số, nhưng vui vẻ kể lại câu chuyện."),
      ],
      beats: { after: 500 } },
    { id: "s22", module: "SCENE-02", ref: "p18",
      data: { set: "hotel", label: "Tối hôm đó", actor: { id: "sam", side: "left" }, contact: { name: "Bạn của Sam", illus: "busts-in-silhouette" },
        messages: [{ from: "me", text: "Today a king saw a golden dragon flying up!", at: "l2" }, { from: "them", text: "A dragon? Tell me more!", at: "l3" }] },
      lines: [
        L("l1", null, "That night, Sam messages a friend. Not the year. The dragon.", "Tối đó, Sam nhắn cho bạn. Không phải con số năm, mà là chuyện rồng."),
        L("l2", "sam", "Today a king saw a golden dragon flying up!", "Hôm nay có ông vua thấy rồng vàng bay lên!", { face: "happy" }),
        L("l3", "them", "A dragon? Tell me more!", "Rồng á? Kể thêm đi!"),
        L("l4", null, "Still give the year, but put it inside the story: First, the king moved here. Then...", "Vẫn nói mốc năm, nhưng đặt trong câu chuyện: First, the king moved here. Then…"),
      ] },

    // Chương 5 — Trò chuyện
    { id: "s23", module: "HOST-03", data: { n: 5, of: 6, title: "Trò chuyện, không phải bài giảng" },
      lines: [L("l1", "det", "Part five: make it a conversation, not a lecture.", "Phần năm: thành cuộc trò chuyện, không phải bài giảng.")] },
    { id: "s24", module: "SCENE-01", ref: "p19",
      data: { set: "heritage", label: "Hỏi lại khách", actors: [{ id: "thao", side: "right" }, { id: "sam", side: "left" }] },
      lines: [
        L("l1", "thao", "Have you seen anything like this in your country?", "Ở nước bạn có nơi nào giống thế này không?", { pose: "explain", to: "sam" }),
        L("l2", "sam", "Yes, we have old castles, but no dragons!", "Có, chúng tôi có lâu đài cổ, nhưng không có rồng!", { face: "happy", to: "thao" }),
        L("l3", "thao", "Feel free to ask me anything.", "Bạn cứ hỏi mình bất cứ điều gì nhé.", { face: "happy", pose: "wave", to: "sam" }),
        L("l4", null, "A question gives your guest a break, and shows you what they care about.", "Câu hỏi giúp khách nghỉ, và bạn biết họ quan tâm điều gì."),
      ] },
    { id: "s25", module: "SCENE-03", ref: "p20",
      data: { set: "heritage", actors: [{ id: "thao", side: "right" }, { id: "sam", side: "left" }],
        left: { label: "Đoán bừa", ok: false }, right: { label: "Nói thật, hẹn kiểm tra", ok: true } },
      lines: [
        L("a1", "sam", "How tall is this tower?", "Cái tháp này cao bao nhiêu?", { phase: "a", face: "thinking", to: "thao" }),
        L("a2", "thao", "Everyone knows that. About a hundred metres!", "Ai cũng biết mà, khoảng một trăm mét!", { phase: "a", pose: "shrug", to: "sam" }),
        L("b1", "sam", "How tall is this tower?", "Cái tháp này cao bao nhiêu?", { phase: "b", face: "thinking", to: "thao" }),
        L("b2", "thao", "I'm not completely sure, but I can check for you.", "Mình không chắc lắm, nhưng mình có thể kiểm tra giúp bạn.", { phase: "b", face: "happy", pose: "phone", to: "sam" }),
        L("b3", null, "Don't guess. A wrong fact may be repeated to other people. Honesty builds more trust.", "Đừng đoán. Thông tin sai khách có thể kể lại cho người khác. Thành thật đáng tin hơn."),
      ] },

    // Chương 6 — Luyện một tuần
    { id: "s26", module: "HOST-03", data: { n: 6, of: 6, title: "Luyện trong một tuần" },
      lines: [L("l1", "det", "Last part: how to practise in one week.", "Phần cuối: luyện trong một tuần như thế nào?")] },
    { id: "s27", module: "SCENE-01", ref: "p21",
      data: { set: "room", label: "Luyện trước chuyến đi", actors: [{ id: "dung", side: "left" }, { id: "thao", side: "right" }], props: ["memo", "mobile-phone"] },
      lines: [
        L("l1", "dung", "You need perfect English to guide visitors, right?", "Phải giỏi tiếng Anh lắm mới dẫn khách được nhỉ?", { face: "worried", to: "thao" }),
        L("l2", "thao", "No. Clear short sentences and a friendly attitude matter more.", "Không đâu. Câu ngắn, rõ, thái độ thân thiện quan trọng hơn.", { face: "happy", pose: "explain", to: "dung" }),
        L("l3", "thao", "I wrote four sentences, and I'm recording myself to check my speed.", "Mình viết bốn câu, rồi ghi âm để nghe lại tốc độ.", { pose: "phone", to: "dung" }),
      ] },
    { id: "s28", module: "LIST-05", ref: "p21",
      data: { title: "Kế hoạch một tuần", items: ["Chọn một di sản bạn thích", "Viết bốn câu theo khung", "Nói to đến khi không cần nhìn giấy", "Ghi âm, nghe lại: rõ, chậm vừa chưa", "Mỗi ngày thêm một nơi"], illus: "spiral-calendar" },
      lines: [
        L("l1", null, "Choose a heritage site you like. Write four sentences with the frame.", "Chọn một di sản bạn thích. Viết bốn câu theo khung."),
        L("l2", null, "Say them aloud until you don't need the paper.", "Tập nói to đến khi không cần nhìn giấy."),
        L("l3", null, "Record yourself, and listen: clear enough, slow enough? Add one place a day.", "Ghi âm, nghe lại: đã rõ, chậm vừa chưa? Mỗi ngày thêm một nơi."),
      ] },
    { id: "s29", module: "HOST-01", ref: "p22",
      data: { title: "Câu dùng được ở mọi nơi", pose: "present", items: ["Let me tell you a little about this place.", "There's an interesting story behind it.", "I'd recommend coming back in the evening."] },
      lines: [
        L("l1", "det", "Three sentences you can use anywhere.", "Ba câu dùng được ở mọi nơi."),
        L("l2", "det", "Let me tell you a little about this place.", "Để mình kể bạn nghe một chút về nơi này."),
        L("l3", "det", "There's an interesting story behind it.", "Có một câu chuyện thú vị phía sau đấy."),
        L("l4", "det", "I'd recommend coming back in the evening.", "Mình gợi ý bạn quay lại vào buổi tối."),
      ] },

    // Tổng kết + câu đố + kết
    { id: "s30", module: "END-02", ref: "outro",
      data: { points: ["Bốn câu ngắn, tên quen thuộc", "Một câu chuyện, một câu hỏi lại", "Không chắc thì nói thật"], icons: ["memo", "dragon", "handshake"] },
      lines: [
        L("l1", null, "No academic words, no huge knowledge. Four short sentences and known names.", "Không cần từ học thuật hay kiến thức đồ sộ: bốn câu ngắn, tên quen thuộc."),
        L("l2", null, "One story, one question back, and honesty. That's enough.", "Một câu chuyện, một câu hỏi lại, và sự thành thật là đủ."),
      ] },
    { id: "s31", module: "QUIZ-01", ref: "questions[31]",
      data: {
        q: "A visitor asks a question and you are not sure of the answer, what should you say?",
        options: [
          "Everyone knows that, it happened about a thousand years ago",
          "I'm not completely sure, but I can check for you",
          "That is not important, let's move on to the next place",
        ],
        correct: 1, countdown: 5, illus: "thinking-face",
        why: "Nói thật và đề nghị kiểm tra giúp khách tin bạn hơn đoán bừa.",
      },
      lines: [
        L("l1", null, "A visitor asks a question and you are not sure of the answer, what should you say?", "Khách hỏi một câu mà bạn không chắc câu trả lời, nên nói gì?"),
        L("l2", null, "I'm not completely sure, but I can check for you.", "Mình không chắc lắm, nhưng mình có thể kiểm tra giúp bạn."),
        L("l3", null, "Guessing may spread wrong information.", "Đoán bừa có thể tạo thông tin sai mà khách kể lại."),
      ],
      beats: { after: 600 } },
    { id: "s32", module: "END-05", data: { text: "Bốn mươi câu tập giới thiệu di sản", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Tonight, write four sentences about a place you love, and say them aloud three times. Then try the forty questions.", "Tối nay viết bốn câu về nơi bạn thích, nói to ba lần. Rồi thử bốn mươi câu nhé.")] },
  ],
};
