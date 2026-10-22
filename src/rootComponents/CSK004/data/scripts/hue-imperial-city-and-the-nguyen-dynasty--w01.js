// Kịch bản video W lần 3 (#110) — "Kinh thành Huế và câu chuyện triều Nguyễn" · chuỗi "Di sản và du lịch Việt Nam"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "hue-imperial-city-and-the-nguyen-dynasty--w01",
  hook: "HOOK-18",
  loop: { open: "s01", close: "s24" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "heritage-travellers", slug: "hue-imperial-city-and-the-nguyen-dynasty", door: "kien-thuc", level: "B1",
    title: "Kinh thành Huế và câu chuyện triều Nguyễn", series: "Di sản và du lịch Việt Nam" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên (#110): “bạn” (người xếp lịch cho gia đình) → Thảo; bố mẹ lớn tuổi (🔀 p20) → Bác Bình và Bà Tư (vai mới; Thảo gọi “bác”, “bà” như các bài trước của chuỗi); người tưởng Đại Nội là một cung điện (⚖️ p7) → Bác Bình (bản lần 2 là Dũng; đổi để video không quá 5 nhân vật có tên); đứa trẻ chán ở di tích (p12–p13) → Bé Bin (vai mới); khách nước ngoài hỏi về nền móng trống (❓ p16) → Sam (vai mới, nay lên hình). Câu treo s01 (vì sao hai kết cục?) được trả lời ở s30. Ba câu tiếng Anh mẫu p23 đọc nguyên văn. Mốc 2024 của Cửu Đỉnh lấy đúng bài (p12). Phủ ý: 23/23. Hai DLG-01 (⚖️ p7, ❓ p16). Câu đố cuối questions[7].",
  scenes: [
    { id: "s01", module: "SCENE-03", ref: "p20",
      data: { set: "hotel", actors: [{ id: "thao", side: "right" }, { id: "binh", side: "left" }],
        left: { label: "Đại Nội và ba lăng", ok: false }, right: { label: "Hai ngày thong thả", ok: true } },
      lines: [
        L("a1", "thao", "Palace this morning, three tombs this afternoon!", "Sáng Đại Nội, chiều ba lăng nhé!", { phase: "a", pose: "explain", face: "happy" }),
        L("a2", "binh", "My legs are tired. Let's skip the last tomb.", "Chân bác mỏi rồi. Thôi bỏ lăng cuối nhé.", { phase: "a", face: "sad", react: { thao: "worried" } }),
        L("b1", "thao", "One day for the palace, one day for two tombs.", "Một ngày Đại Nội, một ngày cho hai lăng.", { phase: "b", pose: "explain" }),
        L("b2", "binh", "Good. I can still enjoy each king's story.", "Ừ, bác còn sức nghe chuyện từng vua.", { phase: "b", face: "happy", pose: "thumb" }),
        L("l6", null, "One trip to Hue, two endings. Why?", "Một chuyến Huế, hai kết cục. Vì sao?", { wait: 300 }),
      ],
      beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Hiểu mình đang xem gì ở Huế", pose: "present", items: ["Triều Nguyễn trong ba câu", "Ba vòng thành lồng nhau", "Thời gian riêng cho lăng tẩm"] },
      lines: [
        L("l1", "det", "How do you enjoy Hue without getting lost among empty yards?", "Đi Huế sao cho khỏi lạc giữa cổng và sân trống?"),
        L("l2", "det", "Know the Nguyen story in three sentences.", "Nắm câu chuyện triều Nguyễn trong ba câu."),
        L("l3", "det", "Know the citadel has three rings, one inside another.", "Hiểu Kinh thành có ba vòng lồng nhau."),
        L("l4", "det", "And give the tombs their own time. Each tomb shows one emperor's character.", "Và dành riêng thời gian cho lăng tẩm: mỗi lăng là tính cách một vị vua."),
      ] },
    { id: "s03", module: "HOST-01",
      data: { title: "Lộ trình", pose: "point", items: ["Triều Nguyễn kể ngắn", "Đại Nội: khỏi lạc, dừng đâu", "Đất trống, lăng tẩm, di sản khác"] },
      lines: [
        L("l1", "det", "Our route: the dynasty, in short.", "Lộ trình: kể ngắn về triều Nguyễn."),
        L("l2", "det", "The palace: how not to get lost, and where to stop.", "Đại Nội: đi sao khỏi lạc, dừng lâu ở đâu."),
        L("l3", "det", "Empty spaces, the tombs, and what else Hue left behind.", "Khoảng đất trống, lăng tẩm, và những di sản khác."),
      ] },

    // Chương 1 — Triều Nguyễn
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Triều Nguyễn kể ngắn" },
      lines: [L("l1", "det", "Part one: who were the Nguyen, in short?", "Phần một: triều Nguyễn là ai, kể ngắn thế nào?")] },
    { id: "s05", module: "NUM-06", ref: "p1,p2,p3",
      data: { title: "Từ chúa Nguyễn đến vua Bảo Đại", illus: "crown", illusEach: "crown",
        events: [{ date: "Thế kỷ XVI", label: "Chúa Nguyễn cai quản Đàng Trong, dời phủ về Phú Xuân" },
          { date: "Cuối thế kỷ XVIII", label: "Tây Sơn thắng; Nguyễn Ánh chiến đấu giành lại" },
          { date: "1802", label: "Nguyễn Ánh lên ngôi Gia Long, đóng đô Phú Xuân" }
,
          { date: "Thời Minh Mạng", label: "Tên nước đổi thành Đại Nam" },
          { date: "1945", label: "Vua Bảo Đại thoái vị tại Ngọ Môn" }],
        source: "UNESCO, Complex of Hué Monuments" },
      lines: [
        L("l1", null, "From the sixteenth century, the Nguyen lords ruled the south. Later they moved their base to Phu Xuan, today's Hue.", "Từ thế kỷ 16, chúa Nguyễn cai quản Đàng Trong, sau dời phủ về Phú Xuân, tức Huế."),
        L("l2", null, "In the late eighteenth century, the Tay Son defeated them. Nguyen Anh fought for years to win it back.", "Cuối thế kỷ 18, Tây Sơn đánh bại chúa Nguyễn. Nguyễn Ánh chiến đấu nhiều năm để giành lại."),
        L("l3", null, "In eighteen oh two, he became Emperor Gia Long, united the country, and chose Phu Xuan as the capital.", "Năm 1802, ông lên ngôi, hiệu Gia Long, thống nhất đất nước, chọn Phú Xuân làm kinh đô."),
        L("l4", null, "Under Emperor Minh Mang, the country was renamed Dai Nam.", "Thời vua Minh Mạng, tên nước đổi thành Đại Nam."),
        L("l5", null, "Thirteen emperors. France slowly took control. In nineteen forty five, Bao Dai gave up the throne at the Noon Gate, ending the monarchy.", "Mười ba đời vua. Pháp dần đô hộ. Năm 1945, Bảo Đại thoái vị tại Ngọ Môn, khép lại chế độ quân chủ."),
      ] },
    { id: "s06", module: "LIST-07", ref: "p4",
      data: { title: "Ba câu để kể cho cả nhà", items: [
        { text: "Kinh đô của triều Nguyễn, triều đại cuối cùng", illus: "japanese-castle" },
        { text: "Vua đầu là Gia Long, vua cuối là Bảo Đại", illus: "crown" },
        { text: "Di sản thế giới đầu tiên của Việt Nam, năm 1993", illus: "classical-building" } ] },
      lines: [
        L("l1", null, "Three sentences for the family. Hue was the capital of the Nguyen Dynasty, the last dynasty.", "Ba câu kể cả nhà: Huế là kinh đô triều Nguyễn, triều đại cuối cùng."),
        L("l2", null, "The first emperor was Gia Long. The last was Bao Dai.", "Vua đầu là Gia Long, vua cuối là Bảo Đại."),
        L("l3", null, "It was Vietnam's first World Heritage Site, listed in nineteen ninety three.", "Đây là di sản thế giới đầu tiên của Việt Nam, ghi danh năm 1993."),
      ] },

    // Chương 2 — Vào Đại Nội khỏi lạc
    { id: "s07", module: "HOST-03", data: { n: 2, of: 6, title: "Vào Đại Nội khỏi lạc" },
      lines: [L("l1", "det", "Part two: how not to get lost in the palace.", "Phần hai: vào Đại Nội làm sao cho khỏi lạc?")] },
    { id: "s08", module: "REL-10", ref: "p5",
      data: { title: "Ba vòng lồng nhau", levels: [
        { label: "Tử Cấm thành", sub: "Trong cùng: nơi sinh hoạt của vua và hoàng gia", illus: "crown" },
        { label: "Hoàng thành", sub: "Giữa: cung điện nghi lễ, nơi thờ tổ tiên", illus: "classical-building" },
        { label: "Kinh thành", sub: "Ngoài cùng: có hào nước bao quanh", illus: "water-wave" } ] },
      lines: [
        L("l1", null, "Three rings. Outside: the Capital Citadel, with a moat around it.", "Ba vòng. Ngoài cùng: Kinh thành, có hào nước bao quanh."),
        L("l2", null, "In the middle: the Imperial City, with ceremony halls and temples for the Nguyen ancestors.", "Giữa: Hoàng thành, cung điện nghi lễ và nơi thờ tổ tiên nhà Nguyễn."),
        L("l3", null, "At the centre: the Forbidden Purple City, where the emperor and his family lived.", "Trong cùng: Tử Cấm thành, nơi vua và hoàng gia sinh hoạt."),
        L("l4", null, "Dai Noi means the two inner rings. The outer citadel is not the Imperial City.", "“Đại Nội” là hai vòng trong. Kinh thành ngoài không phải Hoàng thành."),
      ] },
    { id: "s09", module: "SCENE-01", ref: "p6",
      data: { set: "heritage", label: "Trên Kỳ Đài", actors: [{ id: "thao", side: "right" }, { id: "tu", side: "left", pose: "hold" }] },
      lines: [
        L("l1", "thao", "Look: the citadel faces the Perfume River.", "Bà nhìn này: Kinh thành quay mặt ra sông Hương.", { pose: "point", to: "tu" }),
        L("l2", "thao", "Ngu Binh mountain stands in front like a screen. Two islets are the dragon and the tiger.", "Núi Ngự Bình làm bình phong phía trước. Hai cồn trên sông là rồng và hổ.", { pose: "explain", to: "tu" }),
        L("l3", "tu", "Ah, so the river and the mountain were chosen on purpose.", "À, vậy sông với núi là chọn có chủ ý.", { face: "happy", to: "thao" }),
        L("l4", null, "Eastern feng shui. Tell this at the Flag Tower, and people look out by themselves.", "Theo phong thủy phương Đông. Kể ở Kỳ Đài, người nghe tự nhìn ra sông núi."),
      ] },
    { id: "s10", module: "DLG-01", ref: "p7,p8",
      data: { set: "heritage", label: "Trước Ngọ Môn", actors: [{ id: "binh", side: "left" }, { id: "thao", side: "right" }],
        verdict: { ok: false, label: "Cứ vào là thấy hết", why: "Đại Nội là cả quần thể nhiều cổng, sân, cung điện; đi tự do dễ quay lại một cổng hai lần." } },
      lines: [
        L("l1", "binh", "It's just one big palace. Let's walk in and see it all!", "Một cung điện lớn thôi mà. Cứ vào là thấy hết!", { face: "happy", pose: "point", stop: true }),
        L("l2", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l3", "det", "It's a huge complex, with many gates, yards and palaces. At noon you may pass the same gate twice, and feet get tired.", "Đó là cả quần thể nhiều cổng, sân, cung điện. Đi tự do giữa trưa dễ quay lại một cổng hai lần."),
        L("l4", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l5", "thao", "Let's check the map at the gate first.", "Mình xem sơ đồ ở cổng trước đã bác.", { phase: "redo", pose: "point", face: "thinking", to: "binh" }),
        L("l6", "binh", "Then the main path, from the Noon Gate through Thai Hoa Palace, and the side places after.", "Rồi đi trục chính, từ Ngọ Môn qua điện Thái Hòa, sau mới rẽ hai bên.", { phase: "redo", face: "happy", pose: "explain" }),
        L("l7", "det", "Five minutes with the map saves a whole morning of getting lost.", "Năm phút xem sơ đồ, đỡ cả buổi đi lạc.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },
    { id: "s11", module: "CMP-06", ref: "p9",
      data: { do: ["Đi sáng sớm hoặc chiều muộn", "Mang nước và mũ", "Xem thông tin chính thức trước ngày đi"], dont: ["Đi giữa trưa nắng gắt"], doIcons: ["sunrise", "potable-water", "mobile-phone"], dontIcons: ["sun"] },
      lines: [
        L("l1", null, "Go early in the morning or late in the afternoon. Bring water and hats.", "Đi sáng sớm hoặc chiều muộn đỡ nắng, mang nước và mũ."),
        L("l2", null, "Opening hours, tickets and routes are set by the site managers and can change. Check the official information first.", "Giờ mở cửa, vé, lối tham quan do ban quản lý quy định, có thể đổi. Xem thông tin chính thức trước."),
      ] },

    // Chương 3 — Dừng lâu ở đâu
    { id: "s12", module: "HOST-03", data: { n: 3, of: 6, title: "Trong Đại Nội, dừng lâu ở đâu?" },
      lines: [L("l1", "det", "Part three: where to stop longer in the palace.", "Phần ba: trong Đại Nội, chỗ nào nên dừng lâu?")] },
    { id: "s13", module: "LIST-10", ref: "p10",
      data: { title: "Năm điểm nên dừng", stops: [
        { label: "Ngọ Môn: cổng nam, lầu Ngũ Phụng", illus: "japanese-castle" }, { label: "Điện Thái Hòa: ngai vàng, đại lễ", illus: "crown" },
        { label: "Thế Miếu: thờ các vua Nguyễn", illus: "classical-building" }, { label: "Hiển Lâm Các: ghi công vua, công thần", illus: "scroll" },
        { label: "Kỳ Đài: cột cờ lớn mặt nam", illus: "triangular-flag" } ] },
      lines: [
        L("l1", null, "The Noon Gate: the main southern gate, with the Five Phoenix pavilion on top.", "Ngọ Môn: cổng chính phía nam, có lầu Ngũ Phụng."),
        L("l2", null, "Thai Hoa Palace, with the throne, where great ceremonies were held.", "Điện Thái Hòa: nơi đặt ngai vàng, tổ chức đại lễ."),
        L("l3", null, "The Dynasty Temple, The Mieu, for the Nguyen emperors. And Hien Lam Pavilion, honouring kings and officials.", "Thế Miếu thờ các vua Nguyễn. Hiển Lâm Các ghi công vua và công thần."),
        L("l4", null, "And the Flag Tower, the big flagpole on the south side.", "Và Kỳ Đài, cột cờ lớn ở mặt nam Kinh thành."),
      ] },
    { id: "s14", module: "TEXT-04", ref: "p11",
      data: { text: "Cửu Đỉnh: chín đỉnh đồng thời Minh Mạng, chạm núi sông, cây cỏ, muông thú, sản vật đất nước.", marks: ["chín đỉnh đồng"], illus: "amphora" },
      lines: [
        L("l1", null, "In front of the Dynasty Temple stand nine bronze urns, cast under Minh Mang.", "Trước Thế Miếu là Cửu Đỉnh, chín đỉnh đồng đúc thời Minh Mạng."),
        L("l2", null, "They show mountains, rivers, plants, animals and products of the country. Each urn is like a bronze map.", "Chạm núi sông, cây cỏ, muông thú, sản vật. Mỗi đỉnh như tấm bản đồ bằng đồng."),
      ] },
    { id: "s15", module: "OPEN-16", ref: "p12",
      data: { fact: "Năm 2024, chạm khắc Cửu Đỉnh thành Di sản tư liệu thế giới khu vực.", illus: "amphora"
 },
      lines: [
        L("l1", null, "Each urn carries an emperor's name. The largest, Cao Dinh, for Gia Long, stands in the middle.", "Mỗi đỉnh mang tên một vua. Lớn nhất là Cao Đỉnh, ứng với Gia Long, đặt ở giữa."),
        L("l2", null, "In twenty twenty four, the carvings were listed as documentary heritage for Asia and the Pacific.", "Năm 2024, các bức chạm được ghi danh Di sản tư liệu thế giới khu vực châu Á – Thái Bình Dương."),
      ] },
    { id: "s16", module: "SCENE-01", ref: "p12,p13",
      data: { set: "heritage", label: "Trước Cửu Đỉnh", actors: [{ id: "bin", side: "center" }, { id: "thao", side: "right" }] },
      lines: [
        L("l1", "bin", "Auntie, this is boring...", "Cô ơi, chán quá à…", { face: "sad", pose: "shrug", to: "thao" }),
        L("l2", "thao", "Can you find an elephant, a boat and a mountain on these urns?", "Cháu tìm được con voi, con thuyền, ngọn núi trên mấy cái đỉnh này không?", { pose: "point", face: "happy", to: "bin" }),
        L("l3", "bin", "Found the elephant! Why is there a boat on it?", "Thấy con voi rồi! Sao lại có con thuyền ạ?", { face: "surprised", pose: "pointL", to: "thao" }),
        L("l4", null, "Give a child something to look for, and they will want to understand.", "Cho con một việc để tìm, con sẽ tự muốn hiểu."),
      ] },

    // Chương 4 — Khoảng đất trống
    { id: "s17", module: "HOST-03", data: { n: 4, of: 6, title: "Vì sao nhiều khoảng đất trống?" },
      lines: [L("l1", "det", "Part four: why so many empty spaces in the Forbidden City?", "Phần bốn: sao Tử Cấm thành có nhiều khoảng đất trống?")] },
    { id: "s18", module: "REL-04", ref: "p14",
      data: { problem: "Nhiều sân chỉ còn nền móng", bones: [
        { group: "Chiến tranh", illus: "bomb", causes: ["Hư hại nặng trong thế kỷ XX"] }, { group: "Bão lũ", illus: "cloud-with-rain", causes: ["Mưa bão, lũ lụt"] },
        { group: "Mối mọt", illus: "bug", causes: ["Gỗ bị ăn mòn"] }, { group: "Thời gian", illus: "hourglass-not-done", causes: ["Hàng trăm năm"] } ] },
      lines: [
        L("l1", null, "Many buildings were badly damaged by war in the twentieth century.", "Nhiều công trình hư hại nặng do chiến tranh trong thế kỷ 20."),
        L("l2", null, "Also by storms, floods, insects and time. That's why some yards have only foundations.", "Cùng bão lũ, mối mọt, thời gian. Vì vậy có sân chỉ còn nền móng."),
      ] },
    { id: "s19", module: "QUIZ-01", ref: "questions[23],p15",
      data: {
        q: "Why is restoration in Hue done slowly, piece by piece?",
        options: [
          "Because workers only come once a year during the dry season",
          "Because nobody knows what the buildings looked like in the past",
          "To stay true to the original, using old documents, photos and archaeology",
        ],
        correct: 2, countdown: 5, illus: "building-construction",
        why: "Trùng tu dựa trên tư liệu, ảnh cũ và khảo cổ để giữ tính xác thực.",
      },
      lines: [
        L("l1", null, "Why is restoration in Hue done slowly, piece by piece?", "Vì sao trùng tu ở Huế làm chậm, từng phần?"),
        L("l2", null, "To stay true to the original, using old documents, photos and archaeology.", "Để giữ đúng bản gốc, dựa trên tư liệu, ảnh cũ và khảo cổ."),
        L("l3", null, "Building fast, from guesses, would make a wrong copy.", "Xây nhanh theo phỏng đoán sẽ thành bản sao sai."),
      ],
      beats: { after: 500 } },
    { id: "s20", module: "DLG-01", ref: "p16,p17",
      data: { set: "heritage", label: "Dẫn Sam qua Tử Cấm thành", actors: [{ id: "sam", side: "left" }, { id: "thao", side: "right" }],
        verdict: { ok: false, label: "Giấu đi khoảng trống", why: "Kể thật về chiến tranh và việc trùng tu cẩn thận giúp khách nhìn nền móng bằng con mắt khác." } },
      lines: [
        L("l1", "sam", "Why is this yard empty? Why not rebuild it all, fast?", "Sao sân này trống vậy? Sao không xây lại hết cho nhanh?", { face: "thinking", pose: "point", to: "thao" }),
        L("l2", "thao", "Oh, nothing important here. Let's go to the next palace.", "À, chỗ này không có gì đâu. Mình qua cung khác nhé.", { pose: "wave", to: "sam", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "The empty space is part of the story. Tell the truth about it.", "Khoảng trống cũng là một phần câu chuyện. Hãy kể thật."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "thao", "Many buildings were lost in the war, and to storms and insects.", "Nhiều công trình mất do chiến tranh, bão lũ, mối mọt.", { phase: "redo", pose: "explain", to: "sam" }),
        L("l7", "thao", "To rebuild them right, experts use old photos and records, slowly, piece by piece.", "Muốn dựng lại đúng, người ta dựa ảnh cũ, tư liệu, làm chậm từng phần.", { phase: "redo", pose: "explain", to: "sam" }),
        L("l8", "sam", "I see. Now these foundations feel different.", "Tôi hiểu rồi. Giờ nhìn nền móng thấy khác hẳn.", { phase: "redo", face: "happy", to: "thao" }),
        L("l9", "det", "Empty spaces are part of the story. Don't hide them.", "Khoảng trống cũng là câu chuyện, đừng giấu nó đi.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },

    // Chương 5 — Lăng tẩm
    { id: "s21", module: "HOST-03", data: { n: 5, of: 6, title: "Lăng vua nào hợp nhà mình?" },
      lines: [L("l1", "det", "Part five: which royal tomb suits your family?", "Phần năm: lăng vua nào hợp với nhà mình?")] },
    { id: "s22", module: "CMP-05", ref: "p18",
      data: { title: "Ba lăng, ba tính cách", columns: [{ label: "Minh Mạng", illus: "evergreen-tree" }, { label: "Tự Đức", illus: "lotus" }, { label: "Khải Định", illus: "gem-stone" }],
        rows: [{ label: "Nét chính", cells: ["đối xứng, trang nghiêm", "thơ mộng", "pha trộn Đông Tây"] }, { label: "Nổi bật", cells: ["hồ nước, đồi thông", "hồ sen, nhà thủy tạ", "khảm sành sứ"] }] },
      lines: [
        L("l1", null, "Nguyen emperors often built their own tombs while alive. So each tomb shows a personality.", "Vua Nguyễn thường xây lăng từ khi còn sống, nên mỗi lăng mang tính cách một người."),
        L("l2", null, "Minh Mang: symmetrical and solemn, with a lake and pine hills.", "Minh Mạng: đối xứng, trang nghiêm, hòa vào hồ nước và đồi thông."),
        L("l3", null, "Tu Duc: poetic, with a lotus lake and pavilions by the water.", "Tự Đức: thơ mộng với hồ sen, nhà thủy tạ."),
        L("l4", null, "Khai Dinh: East meets West, famous for mosaics of glass and porcelain.", "Khải Định: pha trộn Đông Tây, nổi bật với khảm sành sứ."),
      ] },
    { id: "s23", module: "LIST-13", ref: "p19",
      data: { title: "Chọn theo sở thích", items: [
        { title: "Thích yên tĩnh, cây xanh", detail: "Lăng Minh Mạng hoặc Tự Đức.", illus: "evergreen-tree" },
        { title: "Thích chi tiết lạ, chụp ảnh", detail: "Lăng Khải Định, nhưng nhiều bậc thang.", illus: "camera" },
        { title: "Muốn ngắm sông", detail: "Chùa Thiên Mụ, tháp Phước Duyên.", illus: "water-wave" } ] },
      lines: [
        L("l1", null, "Like quiet places with trees? Minh Mang or Tu Duc.", "Thích yên tĩnh, cây xanh: lăng Minh Mạng hoặc Tự Đức."),
        L("l2", null, "Like unusual details and photos? Khai Dinh. But there are many high steps, so think twice with weak knees.", "Thích chi tiết lạ, chụp ảnh: Khải Định, nhưng nhiều bậc thang, gối yếu cần cân nhắc."),
        L("l3", null, "Want the river? Thien Mu Pagoda and its Phuoc Duyen tower, a symbol of Hue.", "Muốn ngắm sông: chùa Thiên Mụ với tháp Phước Duyên, biểu tượng của Huế."),
      ] },
    { id: "s24", module: "SCENE-01", ref: "p19,p20",
      data: { set: "hotel", label: "Tối trước ngày lăng tẩm", actors: [{ id: "binh", side: "left" }, { id: "tu", side: "center", pose: "hold" }, { id: "thao", side: "right" }] },
      lines: [
        L("l1", "thao", "You both like quiet places with trees. Minh Mang or Tu Duc?", "Bác và bà thích yên tĩnh, cây xanh. Lăng Minh Mạng hay Tự Đức ạ?", { pose: "explain", to: "binh" }),
        L("l2", "tu", "Tu Duc, with the lotus lake.", "Tự Đức, có hồ sen.", { face: "happy", to: "thao" }),
        L("l3", "binh", "And Khai Dinh has too many steps for my knees.", "Khải Định nhiều bậc quá, gối bác không kham.", { face: "thinking", to: "thao" }),
        L("l4", null, "Three tombs after the palace, and older people tire by the second. One day each, two tombs that fit their strength.", "Đại Nội rồi ba lăng, người lớn tuổi mỏi từ lăng thứ hai. Mỗi nơi một ngày, hai lăng hợp sức."),
      ] },

    // Chương 6 — Di sản khác
    { id: "s25", module: "HOST-03", data: { n: 6, of: 6, title: "Ngoài cung điện, Huế còn gì?" },
      lines: [L("l1", "det", "Last part: what else did Hue leave, beyond the palaces?", "Phần cuối: ngoài cung điện, Huế còn để lại gì?")] },
    { id: "s26", module: "CMP-01", ref: "p22",
      data: { labels: ["Nhã nhạc cung đình", "Mộc bản triều Nguyễn"], left: "Âm nhạc nghi lễ triều đình: di sản văn hóa phi vật thể", right: "Bản khắc gỗ in sách: Ký ức thế giới", illus: ["musical-notes", "scroll"] },
      lines: [
        L("l1", null, "Nha nhac, the royal court music played at palace ceremonies, is UNESCO intangible cultural heritage.", "Nhã nhạc cung đình Huế, âm nhạc nghi lễ triều đình, là di sản phi vật thể được UNESCO ghi danh."),
        L("l2", null, "The Nguyen woodblocks, carved to print books, are in the Memory of the World programme.", "Mộc bản triều Nguyễn, bản khắc gỗ để in sách, thuộc chương trình Ký ức thế giới."),
      ] },
    { id: "s27", module: "HOST-01", ref: "p23",
      data: { title: "Ba câu tiếng Anh về Huế", pose: "present", items: ["Hue was the capital of the Nguyen Dynasty.", "The citadel faces the Perfume River.", "Each tomb shows the emperor's personality."] },
      lines: [
        L("l1", "det", "Three short English sentences. One idea each, spoken slowly.", "Ba câu tiếng Anh ngắn, mỗi câu một ý, nói chậm."),
        L("l2", "det", "Hue was the capital of the Nguyen Dynasty.", "Huế là kinh đô của triều Nguyễn."),
        L("l3", "det", "The citadel faces the Perfume River.", "Kinh thành quay mặt ra sông Hương."),
        L("l4", "det", "Each tomb shows the emperor's personality. Then pause for questions.", "Mỗi lăng thể hiện tính cách của vua. Rồi dừng cho khách hỏi."),
      ] },

    // Tổng kết + câu đố + kết
    { id: "s28", module: "END-02", ref: "outro",
      data: { points: ["Ba câu chuyện triều Nguyễn", "Sơ đồ ba vòng thành", "Lịch không quá dày: chọn hai lăng"], icons: ["crown", "world-map", "spiral-calendar"] },
      lines: [
        L("l1", null, "Hue is easy with three Nguyen sentences, a map of the three rings, and a light schedule.", "Huế không khó: ba câu chuyện triều Nguyễn, sơ đồ ba vòng thành, lịch không quá dày."),
        L("l2", null, "Save the palace map on your phone, and choose two tombs that fit your family's strength.", "Chụp sơ đồ Đại Nội vào điện thoại, chọn trước hai lăng hợp sức người đi cùng."),
      ] },
    { id: "s29", module: "QUIZ-01", ref: "questions[7]",
      data: {
        q: "What are the three rings of the Hue citadel, from outside to inside?",
        options: [
          "The river, the mountain, and the garden behind the palace",
          "The Capital Citadel, the Imperial City, and the Forbidden Purple City",
          "The market, the temple, and the royal kitchen in the middle",
        ],
        correct: 1, countdown: 5, illus: "japanese-castle",
        why: "Ngoài cùng Kinh thành, giữa Hoàng thành, trong cùng Tử Cấm thành.",
      },
      lines: [
        L("l1", null, "What are the three rings of the Hue citadel, from outside to inside?", "Ba vòng của Kinh thành Huế, từ ngoài vào trong, là gì?"),
        L("l2", null, "The Capital Citadel, the Imperial City, and the Forbidden Purple City.", "Kinh thành, Hoàng thành, và Tử Cấm thành."),
        L("l3", null, "The river and mountain are feng shui outside, not rings.", "Sông và núi là phong thủy bên ngoài, không phải vòng thành."),
      ],
      beats: { after: 500 } },
    { id: "s30", module: "END-01", ref: "p21",
      data: { takeaway: "Một ngày cho Đại Nội, một ngày cho lăng tẩm.", marks: ["một ngày"], illus: "spiral-calendar" },
      lines: [L("l1", null, "And the two endings at the start? One day for the palace, one day for the tombs.", "Còn hai kết cục lúc đầu? Một ngày cho Đại Nội, một ngày cho lăng tẩm.", { wait: 300 })],
      beats: { after: 600 } },
    { id: "s31", module: "END-05", data: { text: "Bốn mươi câu về cố đô Huế", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Your turn. Forty questions on Hue are waiting below.", "Đến lượt bạn. Bốn mươi câu về Huế đang chờ bên dưới.")] },
  ],
};
