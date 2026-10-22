// Kịch bản video W lần 3 (#110) — "Mặc gì khi đi phỏng vấn: cách đoán đúng phong cách công ty" · chuỗi "Chuẩn bị phỏng vấn xin việc"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "what-to-wear-to-a-job-interview--w01",
  hook: "HOOK-03",
  loop: { open: "s01", close: "s33" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (C)
  unit: { audience: "job-seekers", slug: "what-to-wear-to-a-job-interview", door: "ky-nang", level: "B1",
    title: "Mặc gì khi đi phỏng vấn: cách đoán đúng phong cách công ty", series: "Chuẩn bị phỏng vấn xin việc" },
  format: "W", mode: "text", audio: {},
  notes: "Phủ ý: 26/26. Đổi tên: “bạn” làm ngân hàng ba năm (p11) → Thảo; “bạn” được nhân sự dặn “mặc thoải mái” (p14) và “bạn” hỏi nhân sự về trang phục (p5) → Dũng; chị nhân sự → Cô Hoa (chỉ nói câu dặn có trong bài); Quế (p19) → Lan. Vai mới (Bin, Bà Tư, Sam): không dùng, bài không có trẻ con, bà cụ hay người nước ngoài. Câu hỏi treo ở s01 được trả lời ở s13 (DLG-01, phần làm lại theo lời giải p11). Câu “quần đùi, dép lê” ở s17 là cách hiểu sai được nêu trong p14. s23: câu cảm thán của Lan dựng từ ý p19 (nghĩ mưa nhỏ nên không mặc áo mưa). Bài có 8 mục; video gộp mục 1 (trang phục quan trọng đến đâu) với mục 2 (đoán phong cách) để mục lục còn 6 phần. Câu đố: questions[14], questions[18] (không có tên nhân vật).",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "p11",
      data: { set: "home", label: "Tối trước buổi phỏng vấn",
        actors: [{ id: "thao", side: "center", pose: "think" }] },
      lines: [
        L("l1", null, "Thảo worked three years at a bank, in a suit every day.", "Thảo làm ngân hàng ba năm, ngày nào cũng mặc vest."),
        L("l2", null, "Tomorrow: a small ad agency. Their photos show T-shirts and jeans.", "Mai phỏng vấn công ty quảng cáo nhỏ. Ảnh văn phòng: áo thun, quần jean."),
        L("l3", "thao", "My full suit is the safest choice... right?", "Mặc nguyên bộ vest là an toàn nhất… nhỉ?", { face: "thinking", pose: "think" }),
        L("l4", null, "If you were Thảo, what would you wear?", "Nếu là Thảo, bạn sẽ mặc gì?", { wait: 300 }),
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Mặc gì đi phỏng vấn?", pose: "present",
        items: ["Đoán phong cách công ty", "Mặc hơn một bậc", "Sạch, vừa vặn, thoải mái"] },
      lines: [
        L("l1", "det", "What should you wear to an interview? A common rule of thumb:", "Mặc gì đi phỏng vấn? Kinh nghiệm chung là:"),
        L("l2", "det", "Guess the company's style.", "Đoán phong cách công ty."),
        L("l3", "det", "Dress one step above it.", "Mặc trang trọng hơn một bậc."),
        L("l4", "det", "Always clean, well-fitting and comfortable.", "Luôn sạch sẽ, vừa vặn, thoải mái."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Sáu phần của video", chapters: [
        { label: "Đoán phong cách công ty", illus: "magnifying-glass-tilted-left" },
        { label: "Mỗi môi trường mặc gì", illus: "necktie" },
        { label: "“Cứ mặc thoải mái”", illus: "t-shirt" },
        { label: "Chi tiết nhỏ", illus: "high-heeled-shoe" },
        { label: "Phỏng vấn trực tuyến", illus: "laptop" },
        { label: "Không có tiền mua đồ mới", illus: "money-bag" } ] },
      lines: [
        L("l1", null, "Six parts: guessing the style, each workplace, dress casually,", "Sáu phần: đoán phong cách, mỗi môi trường, “mặc thoải mái”,"),
        L("l2", null, "small details, online interviews, and no money for new clothes.", "chi tiết nhỏ, phỏng vấn trực tuyến, và không có tiền mua đồ mới."),
      ] },

    // ---------- Phần 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Đoán phong cách công ty" },
      lines: [L("l1", "det", "Part one: how much clothes matter, and how to guess the style.", "Phần một: trang phục quan trọng đến đâu, và đoán phong cách công ty thế nào?")] },
    { id: "s05", module: "TEXT-04", ref: "p1",
      data: { text: "Trang phục không quyết định bạn được nhận, nhưng ảnh hưởng ấn tượng ban đầu và sự tự tin của bạn.", marks: ["ấn tượng ban đầu", "tự tin"], illus: "sparkles" },
      lines: [
        L("l1", null, "Clothes don't decide if you get the job. They shape first impressions, and your confidence.", "Trang phục không quyết định được nhận, nhưng ảnh hưởng ấn tượng ban đầu và sự tự tin."),
        L("l2", null, "Dress right, and you forget your clothes and focus on answers.", "Mặc đúng, bạn quên chuyện quần áo để tập trung trả lời."),
      ] },
    { id: "s06", module: "CMP-01", ref: "p2",
      data: { labels: ["Ảnh văn phòng, sự kiện", "Sở thích riêng của bạn"], left: "Nhân viên thật sự mặc gì: sơ mi, áo thun hay đồng phục", right: "Chưa phải căn cứ", illus: ["framed-picture", "thinking-face"] },
      lines: [
        L("l1", null, "Look at office, event and recruiting photos on their site and social pages.", "Xem ảnh văn phòng, sự kiện nội bộ, ảnh tuyển dụng trên web và mạng xã hội của công ty."),
        L("l2", null, "Shirts, T-shirts, or uniforms? That's how staff really dress. Better than your own taste.", "Sơ mi, áo thun hay đồng phục? Đó là cách nhân viên thật sự mặc, căn cứ tốt hơn sở thích riêng."),
      ] },
    { id: "s07", module: "LIST-13", ref: "p3,p4",
      data: { title: "Thêm hai gợi ý", items: [
        { title: "Ngành nghề", detail: "Ngân hàng, luật, kiểm toán, bảo hiểm: trang trọng. Công nghệ, sáng tạo, khởi nghiệp: thoải mái hơn", illus: "bank" },
        { title: "Cách viết email", detail: "Ngắn, thân mật: thường thoải mái. Có chức danh, quy trình: thường trang trọng", illus: "e-mail" } ] },
      lines: [
        L("l1", null, "The industry: banking, law, auditing, insurance are usually formal.", "Ngành nghề: ngân hàng, luật, kiểm toán, bảo hiểm thường trang trọng."),
        L("l2", null, "Tech, creative work and start-ups, more relaxed.", "Công nghệ, sáng tạo, khởi nghiệp thường thoải mái hơn."),
        L("l3", null, "The recruiter's emails: short and friendly, or formal with titles. A hint, not a rule.", "Email của người liên hệ: ngắn, thân mật, hay có chức danh, quy trình. Chỉ là gợi ý, không phải quy tắc."),
      ] },
    { id: "s08", module: "SCENE-02", ref: "p5",
      data: { set: "room", label: "Hỏi thẳng nhân sự",
        actor: { id: "dung", side: "left" },
        contact: { name: "Phòng nhân sự", illus: "woman-office-worker" },
        messages: [{ from: "me", text: "Công ty có lưu ý gì về trang phục cho buổi phỏng vấn không ạ?", at: "l1" }] },
      lines: [
        L("l1", "dung", "Is there any dress advice for the interview?", "Công ty có lưu ý gì…", { face: "thinking" }),
        L("l2", null, "The surest way. A normal question, clearer than any guess. Nobody thinks less of you.", "Cách chắc nhất. Câu hỏi bình thường, rõ hơn mọi phỏng đoán, không ai đánh giá thấp bạn."),
      ] },
    { id: "s09", module: "TEXT-01", ref: "p6",
      data: { text: "Vẫn không chắc? Sơ mi và quần âu, không cần vest.", illus: "necktie" },
      lines: [L("l1", null, "Still unsure? The middle: a shirt and smart trousers, no suit.", "Vẫn không chắc? Mức vừa phải: sơ mi và quần âu, không cần vest.")] },

    // ---------- Phần 2 ----------
    { id: "s10", module: "HOST-03", data: { n: 2, of: 6, title: "Mỗi môi trường mặc thế nào?" },
      lines: [L("l1", "det", "Part two: what to wear in each kind of workplace.", "Phần hai: mỗi kiểu môi trường thì mặc thế nào?")] },
    { id: "s11", module: "REL-05", ref: "p7",
      data: { title: "Ba kiểu môi trường", root: "Mặc hơn một bậc", rootIllus: "necktie",
        children: [
          { label: "Trang trọng", sub: "Ngân hàng, luật, nhà nước", illus: "bank", children: ["Sơ mi sáng, quần âu tối", "Giày da gọn, có thể thêm vest", "Áo dài trang nhã cho nữ"] },
          { label: "Công sở thông thường", sub: "Thương mại, sản xuất, dịch vụ", illus: "office-building", children: ["Sơ mi hoặc polo có cổ", "Quần âu, kaki; không bắt buộc vest"] },
          { label: "Thoải mái", sub: "Công nghệ, quảng cáo, khởi nghiệp", illus: "laptop", children: ["Áo trơn có cổ, jeans sẫm không rách", "Giày thể thao sạch"] } ] },
      lines: [
        L("l1", null, "Three kinds of workplace: formal, normal office, relaxed.", "Ba kiểu môi trường: trang trọng, công sở thông thường, thoải mái."),
        L("l2", null, "Each one, one step above how staff dress.", "Mỗi nơi, mặc hơn một bậc so với nhân viên ở đó."),
      ] },
    { id: "s11b", module: "LIST-13", ref: "p7",
      data: { title: "Trang trọng: ngân hàng, tập đoàn, luật, nhà nước", items: [
        { title: "Áo, quần", detail: "Sơ mi sáng màu; quần âu hoặc chân váy công sở màu tối", illus: "necktie" },
        { title: "Giày, thêm", detail: "Giày da gọn; có thể thêm áo vest", illus: "mans-shoe" },
        { title: "Với nữ", detail: "Ở nhiều nơi, áo dài cũng là lựa chọn trang nhã", illus: "dress" } ] },
      lines: [
        L("l1", null, "Formal: a light shirt, dark trousers or office skirt.", "Trang trọng: sơ mi sáng màu, quần âu hoặc chân váy công sở màu tối."),
        L("l2", null, "Neat leather shoes. A jacket if you like.", "Giày da gọn; có thể thêm áo vest."),
        L("l3", null, "In many places, an ao dai is an elegant choice for women.", "Ở nhiều nơi, áo dài cũng là lựa chọn trang nhã cho nữ."),
      ] },
    { id: "s11c", module: "CMP-01", ref: "p8,p9",
      data: { labels: ["Công sở thông thường", "Thoải mái"], left: "Sơ mi hoặc polo có cổ, quần âu hoặc kaki, giày gọn; không bắt buộc vest", right: "Áo trơn có cổ, jeans sẫm không rách, giày thể thao sạch; vest dễ lạc lõng", illus: ["office-building", "laptop"] },
      lines: [
        L("l1", null, "Normal office, like trade or services: a collared shirt or polo, chinos, tidy shoes. No suit.", "Công sở thông thường: sơ mi hoặc polo có cổ, quần âu, kaki, giày gọn; không bắt buộc vest."),
        L("l2", null, "Relaxed, like tech or start-ups: dark jeans, no rips, clean trainers. A suit looks out of place.", "Thoải mái: jeans sẫm không rách, giày thể thao sạch. Một bộ vest dễ khiến bạn lạc lõng."),
      ] },
    { id: "s12", module: "LIST-05", ref: "p10",
      data: { title: "Việc thực hành: bếp, nhà xưởng, cửa hàng", illus: "cook", items: ["Mặc gọn, dễ cử động", "Giày kín mũi", "Có thể được mời tham quan hoặc làm thử"] },
      lines: [
        L("l1", null, "Hands-on jobs, like kitchens, workshops, shops: neat and easy to move in.", "Công việc thực hành như bếp, nhà xưởng, cửa hàng: mặc gọn, dễ cử động."),
        L("l2", null, "Closed shoes. You may be asked to tour, or try the work.", "Giày kín mũi, vì có thể được mời tham quan hoặc làm thử."),
      ] },
    { id: "s13", module: "DLG-01", ref: "p11",
      data: { set: "home", label: "Chọn đồ cho ngày mai",
        actors: [{ id: "thao", side: "center", pose: "think" }],
        verdict: { ok: false, label: "Mặc vest đủ bộ cho công ty quảng cáo nhỏ",
          why: "Quá trang trọng so với nơi đó dễ lạc lõng, ngồi cứng người, trả lời kém tự nhiên." } },
      lines: [
        L("l0", null, "Back to Thảo, choosing clothes for tomorrow.", "Quay lại Thảo, đang chọn đồ cho ngày mai."),
        L("l1", "thao", "I'll wear my full suit and tie, like at the bank.", "Mình mặc nguyên bộ vest, thắt cà vạt như ở ngân hàng.", { face: "happy", pose: "explain", stop: true }),
        L("l2", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l3", "det", "Far above their style, you may feel lost, sit stiffly, and answer less naturally.", "Quá xa phong cách nơi đó: dễ lạc lõng, ngồi cứng người, trả lời kém tự nhiên."),
        L("l4", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l5", "thao", "A plain shirt and dark trousers. Still neater than their staff, but not too far.", "Sơ mi trơn và quần sẫm màu: vẫn chỉn chu hơn một bậc, mà không quá xa.", { phase: "redo", face: "happy", pose: "explain" }),
      ] },
    { id: "s14", module: "TEXT-02", ref: "p12",
      data: { text: "Hơn một bậc là vừa, hơn ba bậc là lạc.", keywords: ["một bậc", "ba bậc"], illus: "necktie" },
      lines: [L("l1", null, "One step above is right. Three steps above, you're lost.", "Hơn một bậc là vừa, hơn ba bậc là lạc.")] },

    // ---------- Phần 3 ----------
    { id: "s15", module: "HOST-03", data: { n: 3, of: 6, title: "“Cứ mặc thoải mái” là sao?" },
      lines: [L("l1", "det", "Part three: what does dress casually mean?", "Phần ba: công ty bảo “cứ mặc thoải mái” thì hiểu sao?")] },
    { id: "s16", module: "CMP-06", ref: "p13",
      data: { do: ["Jeans sẫm hoặc kaki", "Sơ mi, áo trơn chất lượng tốt", "Giày sạch"],
        dont: ["Áo ba lỗ, quần đùi, dép lê", "Áo in chữ, hình lớn", "Đồ quá bó, quá rộng"],
        doIcons: ["jeans", "t-shirt", "running-shoe"], dontIcons: ["shorts", "framed-picture", "warning"] },
      lines: [
        L("l1", null, "Casual for an interview means neat, but not formal.", "“Thoải mái” trong buổi phỏng vấn là gọn gàng nhưng không cần trang trọng."),
        L("l2", null, "Dark jeans or chinos, a good plain shirt, clean shoes.", "Jeans sẫm hoặc kaki, sơ mi hay áo trơn chất lượng tốt, giày sạch."),
        L("l3", null, "Avoid tank tops, shorts, flip-flops, big prints, very tight or very loose clothes.", "Tránh áo ba lỗ, quần đùi, dép lê, áo in chữ hình lớn, đồ quá bó hay quá rộng."),
      ] },
    { id: "s17", module: "DLG-01", ref: "p14",
      data: { set: "online", label: "Nhân sự gọi hẹn lịch",
        actors: [{ id: "dung", side: "left" }, { id: "hoa", side: "right" }],
        verdict: { ok: false, label: "Hiểu “thoải mái” là đồ đi chơi",
          why: "“Thoải mái” thường chỉ là không cần vest, cà vạt. Buổi phỏng vấn vẫn là lần gặp đầu." } },
      lines: [
        L("l1", "hoa", "We dress very casually here.", "Bên chị mặc thoải mái lắm em.", { face: "happy" }),
        L("l2", "dung", "Great! Shorts and flip-flops, then.", "Vậy em mặc quần đùi, đi dép lê nhé!", { face: "happy", pose: "thumb", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Casual usually just means no suit and no tie.", "“Thoải mái” thường chỉ có nghĩa là không cần vest, không cần cà vạt."),
        L("l5", "det", "It's still a first meeting. They notice if you prepared.", "Vẫn là lần gặp đầu tiên, người phỏng vấn vẫn để ý bạn có chỉn chu không."),
        L("l6", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l7", "dung", "Then long trousers, a plain collared shirt, and clean shoes.", "Vậy em mặc quần dài, áo trơn có cổ, giày sạch.", { phase: "redo", face: "thinking", pose: "explain" }),
        L("l8", "det", "Cool, fits the advice, and still neat.", "Vừa mát, vừa hợp lời dặn, vừa gọn gàng.", { phase: "redo", face: "happy" }),
      ] },
    { id: "s18", module: "TEXT-02", ref: "p15",
      data: { text: "Thoải mái là gọn gàng, không phải đi chơi.", keywords: ["gọn gàng", "đi chơi"], illus: "t-shirt" },
      lines: [L("l1", null, "Casual means neat, not dressed for a day out.", "Thoải mái là gọn gàng, không phải đi chơi.")] },

    // ---------- Phần 4 ----------
    { id: "s19", module: "HOST-03", data: { n: 4, of: 6, title: "Chi tiết nhỏ hay bị để ý" },
      lines: [L("l1", "det", "Part four: the small details people notice.", "Phần bốn: những chi tiết nhỏ nào hay bị để ý?")] },
    { id: "s20", module: "LIST-05", ref: "p16",
      data: { title: "Soát trước khi đi", illus: "clipboard", items: [
        "Là phẳng từ tối hôm trước, không bẩn, không sờn chỉ", "Giày sạch, lau lại trước khi vào toà nhà", "Nước hoa vừa phải; tránh mùi thuốc, mùi đồ ăn", "Tóc, móng tay gọn", "Túi đủ đựng hồ sơ, không cồng kềnh" ] },
      lines: [
        L("l1", null, "Ironed the night before. No stains, no loose threads.", "Là phẳng từ tối hôm trước, không vết bẩn, không sờn chỉ."),
        L("l2", null, "Clean shoes, wiped again before you go in.", "Giày sạch, lau lại trước khi vào toà nhà."),
        L("l3", null, "Light perfume or none. No smoke or food smells.", "Nước hoa vừa phải hoặc không dùng, tránh mùi khói thuốc, đồ ăn."),
        L("l4", null, "Tidy hair and nails.", "Tóc, móng tay gọn."),
        L("l5", null, "A bag big enough for your papers, not bulky.", "Túi đủ đựng hồ sơ, không cồng kềnh."),
      ] },
    { id: "s21", module: "TEXT-01", ref: "p17",
      data: { text: "Ít ai nhớ màu áo, nhưng ai cũng thấy áo nhàu.", illus: "eyes" },
      lines: [L("l1", null, "They rarely remember your colour, but easily notice a creased shirt or dusty shoes.", "Người phỏng vấn ít khi nhớ màu áo, nhưng rất dễ để ý áo nhàu hay giày bám bụi.")] },
    { id: "s22", module: "TEXT-04", ref: "p18",
      data: { text: "Đi xe máy: mang áo khoác chống nắng hoặc áo mưa, đến sớm khoảng mười lăm phút để chỉnh trang.", marks: ["mười lăm phút"], illus: "motor-scooter" },
      lines: [
        L("l1", null, "By motorbike? Bring a sun jacket or raincoat to protect your clothes.", "Đi xe máy? Mang áo khoác chống nắng hoặc áo mưa để giữ quần áo."),
        L("l2", null, "Arrive fifteen minutes early, to fix hair and clothes in the restroom.", "Đến sớm khoảng mười lăm phút để chỉnh tóc tai, quần áo trong nhà vệ sinh."),
      ] },
    { id: "s23", module: "SCENE-01", ref: "p19",
      data: { set: "street", label: "Mưa giữa đường",
        actors: [{ id: "lan", side: "left" }] },
      lines: [
        L("l1", null, "Lan rides to her interview. It starts to rain.", "Lan chạy xe máy đến buổi phỏng vấn, giữa đường trời đổ mưa."),
        L("l2", "lan", "It's only light rain. No raincoat. And I've timed it exactly.", "Mưa nhỏ thôi, khỏi mặc áo mưa. Mà mình tính giờ vừa khít.", { face: "neutral", pose: "shrug" }),
        L("l3", null, "Muddy trousers, wet hair, no minute to tidy up.", "Đến nơi: ống quần lấm bùn, tóc bết, không còn phút nào chỉnh trang.", { react: { lan: "sad" } }),
        L("l4", null, "She worries about her trousers all interview, and rushes every answer.", "Lan để ý ống quần suốt buổi, câu trả lời nào cũng nói vội cho xong."),
      ] },
    { id: "s24", module: "TEXT-02", ref: "p20",
      data: { text: "Áo mưa trong cốp, mười lăm phút trong túi.", keywords: ["Áo mưa", "mười lăm phút"], illus: "umbrella" },
      lines: [L("l1", null, "A raincoat in the bike, fifteen spare minutes in your plan.", "Áo mưa trong cốp, mười lăm phút trong túi.")] },

    // ---------- Phần 5 ----------
    { id: "s25", module: "HOST-03", data: { n: 5, of: 6, title: "Phỏng vấn trực tuyến" },
      lines: [L("l1", "det", "Part five: what to wear online.", "Phần năm: phỏng vấn trực tuyến thì mặc gì?")] },
    { id: "s26", module: "HOST-02", ref: "p21",
      data: { statement: "Phỏng vấn trực tuyến chỉ cần mặc chỉnh tề nửa trên", truth: false,
        why: "Có thể phải đứng dậy bất ngờ; mặc đủ bộ giúp vào tâm thế nghiêm túc." },
      lines: [
        L("l1", "det", "Online, you only need to dress from the waist up. True or false?", "Phỏng vấn trực tuyến chỉ cần mặc chỉnh tề nửa trên. Đúng hay sai?"),
        L("l2", "det", "False. You may have to stand up. A full outfit also puts you in a serious mood.", "Sai. Bạn có thể phải đứng dậy bất ngờ. Mặc đủ bộ cũng giúp vào tâm thế nghiêm túc.", { face: "wink" }),
      ] },
    { id: "s27", module: "CMP-01", ref: "p22",
      data: { labels: ["Sọc nhỏ, hoạ tiết dày", "Áo màu trơn"], left: "Dễ nhoè, nhấp nháy trên camera", right: "Lên hình rõ; tránh trùng màu phông nền", illus: ["warning", "t-shirt"] },
      lines: [
        L("l1", null, "Choose plain colours. Thin stripes and busy patterns blur and flicker on camera.", "Chọn áo màu trơn. Sọc nhỏ, hoạ tiết dày dễ nhoè và nhấp nháy trên camera."),
        L("l2", null, "Avoid your background's colour. Test colour, light and framing on camera first.", "Tránh màu trùng phông nền, và thử trước trên camera: màu áo, ánh sáng, khung hình."),
      ] },
    { id: "s28", module: "LIST-06", ref: "p23",
      data: { title: "Làm mẫu: chín giờ, bàn trong phòng ngủ", steps: [
        { text: "Mặc chỉnh tề cả bộ, kể cả quần", illus: "jeans" },
        { text: "Sơ mi trơn màu nhạt, mở camera thử", illus: "video-camera" },
        { text: "Đặt bằng, hồ sơ in, giấy bút cạnh máy", illus: "scroll" } ] },
      lines: [
        L("l1", null, "Nine a.m., at a desk in your bedroom. Dress fully, trousers too, in case you stand up.", "Chín giờ, bàn trong phòng ngủ. Mặc cả bộ, kể cả quần, phòng khi phải đứng dậy."),
        L("l2", null, "A plain light shirt, not small stripes. Test the camera: no flicker, enough light?", "Sơ mi trơn màu nhạt thay áo sọc nhỏ. Thử camera: có nhấp nháy không, mặt đủ sáng không?"),
        L("l3", null, "Degree, printed CV, paper and pen beside the computer. Asked to show it? Just reach.", "Bằng, hồ sơ in, giấy bút cạnh máy. Được nhờ cầm bằng lên? Chỉ việc với tay lấy."),
      ] },
    { id: "s29", module: "TEXT-02", ref: "p24",
      data: { text: "Lên hình nửa người, vẫn mặc đủ cả bộ.", keywords: ["nửa người", "cả bộ"], illus: "laptop" },
      lines: [L("l1", null, "Half of you on screen. All of you dressed.", "Lên hình nửa người, vẫn mặc đủ cả bộ.")] },

    // ---------- Phần 6 ----------
    { id: "s30", module: "HOST-03", data: { n: 6, of: 6, title: "Không có tiền mua đồ mới" },
      lines: [L("l1", "det", "Last part: no money for new clothes?", "Phần cuối: không có tiền mua đồ mới thì sao?")] },
    { id: "s31", module: "LIST-07", ref: "p25",
      data: { title: "Chọn từ tủ đồ", items: [
        { text: "Một áo trơn màu trung tính", illus: "t-shirt" },
        { text: "Một quần sẫm màu", illus: "jeans" },
        { text: "Đôi giày sạch nhất", illus: "mans-shoe" } ] },
      lines: [
        L("l1", null, "No need for a new outfit. From your wardrobe: a plain neutral top,", "Không cần mua cả bộ mới. Chọn từ tủ đồ: một áo trơn màu trung tính,"),
        L("l2", null, "dark trousers, and your cleanest shoes.", "một quần sẫm màu, và đôi giày sạch nhất."),
        L("l3", null, "Wash, iron, sew back loose buttons. That's enough.", "Giặt sạch, là phẳng, khâu lại cúc lỏng là đủ."),
      ] },
    { id: "s32", module: "TEXT-04", ref: "p26",
      data: { text: "Thật sự thiếu: ưu tiên một sơ mi vừa người và một quần âu màu tối.", marks: ["sơ mi vừa người", "quần âu màu tối"], illus: "shopping-bags" },
      lines: [
        L("l1", null, "Really short? Buy a well-fitting shirt and dark smart trousers.", "Nếu thật sự thiếu: ưu tiên một sơ mi vừa người và một quần âu màu tối."),
        L("l2", null, "They work for many interviews, and later at work.", "Hai món này dùng được cho nhiều buổi phỏng vấn và cả khi đi làm sau này."),
      ] },

    // ---------- Tổng kết, câu đố, kết ----------
    { id: "s33", module: "END-03", ref: "outro",
      data: { title: "Tối nay", illus: "clipboard", items: [
        "Thử nguyên bộ định mặc", "Là phẳng, treo sẵn", "Lau giày, để cạnh cửa", "Áo mưa trong cốp xe" ] },
      lines: [
        L("l1", null, "Guess the style, dress one step above, care about small details, and plan the road.", "Đoán phong cách, mặc hơn một bậc, chăm chi tiết nhỏ, tính trước chuyện đường xá."),
        L("l2", null, "Tonight: try on the whole outfit, iron it, hang it, and put clean shoes by the door.", "Tối nay: thử nguyên bộ, là phẳng, treo sẵn, để đôi giày đã lau cạnh cửa."),
      ] },
    { id: "s34", module: "QUIZ-01", ref: "questions[14]",
      data: { q: "Moving from a bank to a small advertising agency, why is a full suit not the safest choice?",
        options: [
          "Suits are never allowed in creative companies, so you would be refused entry",
          "Wearing a suit shows that you did not research the salary for the role",
          "Dressing far above the office style can make you feel lost and stiff",
        ],
        correct: 2, countdown: 5, illus: "necktie",
        why: "Quá trang trọng so với nơi đó dễ lạc lõng, ngồi cứng người, trả lời kém tự nhiên." },
      lines: [
        L("l1", null, "Moving from a bank to a small advertising agency, why is a full suit not the safest choice?", "Từ ngân hàng sang công ty quảng cáo nhỏ, vì sao vest đủ bộ chưa chắc an toàn?"),
        L("l2", null, "Dressing far above the office style can make you feel lost and stiff.", "Mặc quá xa phong cách nơi đó dễ thấy lạc lõng, cứng người."),
        L("l3", null, "Choose by the new company's style, not by old habit.", "Chọn trang phục theo phong cách nơi mới, không theo thói quen cũ."),
      ] },
    { id: "s35", module: "QUIZ-01", ref: "questions[18]",
      data: { q: "The company says dress casually, what does that usually mean for an interview?",
        options: [
          "Anything you like, including shorts and sandals, since comfort is the only rule",
          "A full suit anyway, because companies always say casual as a hidden test",
          "Neat but not formal, like dark jeans or chinos, a plain shirt and clean shoes",
        ],
        correct: 2, countdown: 5, illus: "t-shirt",
        why: "Thoải mái là gọn gàng nhưng không cần trang trọng." },
      lines: [
        L("l1", null, "The company says dress casually, what does that usually mean for an interview?", "Công ty bảo cứ mặc thoải mái, điều đó thường có nghĩa gì với buổi phỏng vấn?"),
        L("l2", null, "Neat but not formal, like dark jeans or chinos, a plain shirt and clean shoes.", "Gọn gàng nhưng không trang trọng: jeans sẫm hoặc kaki, áo trơn, giày sạch."),
        L("l3", null, "Shorts and flip-flops still don't fit.", "Đồ đi chơi như quần đùi, dép lê vẫn không phù hợp."),
      ] },
    { id: "s36", module: "END-05", data: { text: "Bốn mươi câu về trang phục phỏng vấn", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Your turn. Forty questions are waiting below.", "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới.")] },
  ],
};
