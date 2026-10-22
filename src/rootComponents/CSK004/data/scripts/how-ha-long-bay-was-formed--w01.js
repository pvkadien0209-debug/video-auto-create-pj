// Kịch bản video W lần 3 (#110) — "Vịnh Hạ Long được hình thành như thế nào?" · chuỗi "Di sản và du lịch Việt Nam"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-ha-long-bay-was-formed--w01",
  hook: "HOOK-09",
  loop: { open: "s01", close: "s33" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "heritage-travellers", slug: "how-ha-long-bay-was-formed", door: "kien-thuc", level: "B1",
    title: "Vịnh Hạ Long được hình thành như thế nào?", series: "Di sản và du lịch Việt Nam" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên (#110): “bạn” (người dẫn cả nhà, dẫn bạn nước ngoài) → Thảo; đứa con hỏi “Sao đảo lại mọc giữa biển?” → Bé Bin (vai mới; bản lần 2 để Dũng đóng); ông bà muốn vào hang (❓ p13) → Bà Tư (vai mới); người bạn nước ngoài (🔀 p26) → Sam (vai mới, nay lên hình). Bin gọi Thảo là “cô” (cháu trong nhà). Câu treo ở s01 được trả lời ở s33 bằng câu tóm tắt p2. Ba câu tiếng Anh mẫu p25 được đọc nguyên văn (s30). Phủ ý: 27/27. Hai DLG-01 (⚖️ p22, 🔀 p26). Câu đố cuối questions[24].",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "intro",
      data: { set: "heritage", label: "Ra vịnh Hạ Long", actors: [{ id: "thao", side: "right" }, { id: "bin", side: "center" }] },
      lines: [
        L("l1", "bin", "Auntie, why are there islands in the middle of the sea?", "Cô ơi, sao đảo lại mọc giữa biển ạ?", { face: "surprised", pose: "point", to: "thao" }),
        L("l2", "thao", "Um... good question.", "Ờ… câu hỏi hay đấy.", { face: "worried", pose: "shrug", to: "bin" }),
        L("l3", null, "Thao just smiles. But the answer fits in three short steps.", "Thảo chỉ biết cười trừ. Nhưng câu trả lời gói trong ba chặng ngắn.", { wait: 300 }),
      ],
      beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "p1",
      data: { title: "Ba chặng làm nên Hạ Long", pose: "present", items: ["Biển cổ", "Mưa gọt", "Biển dâng"] },
      lines: [
        L("l1", "det", "How did Ha Long Bay form? Remember three steps, and you can tell it on the boat.", "Vịnh Hạ Long hình thành thế nào? Nhớ ba chặng là kể được trên boong tàu."),
        L("l2", "det", "An ancient sea, where limestone was born.", "Biển cổ: đá vôi sinh ra dưới biển."),
        L("l3", "det", "Rain that shaped the rock into mountains and caves.", "Mưa gọt đá thành núi và hang."),
        L("l4", "det", "And a rising sea that left only the peaks. You can see each step from the boat.", "Biển dâng, chỉ để lại đỉnh núi thành đảo. Mỗi chặng đều thấy được từ tàu."),
      ] },
    { id: "s03", module: "HOST-01",
      data: { title: "Lộ trình", pose: "point", items: ["Biển cổ, mưa gọt, biển dâng", "Chọn tuyến tàu, nhìn từ tàu", "Vào hang, kể chuyện bằng tiếng Anh"] },
      lines: [
        L("l1", "det", "Our route: the three steps, one by one.", "Lộ trình: lần lượt ba chặng."),
        L("l2", "det", "Choosing a boat route, and what to look at.", "Chọn tuyến tàu, và nhìn vào đâu."),
        L("l3", "det", "The caves, and telling the story in English.", "Vào hang, và kể chuyện bằng tiếng Anh."),
      ] },

    // Chương 1 — Biển cổ
    { id: "s04", module: "HOST-03", data: { n: 1, of: 7, title: "Biển cổ: đá vôi từ đâu?" },
      lines: [L("l1", "det", "Part one: where does the limestone come from?", "Phần một: đá vôi ở đây từ đâu mà có?")] },
    { id: "s05", module: "REL-02", ref: "p3",
      data: { chain: ["Biển nông, ấm thời rất xa xưa", "Vỏ, xương sinh vật biển lắng xuống đáy", "Chồng thành lớp dày, nén thành đá vôi"], illus: ["water-wave", "spiral-shell", "rock"] },
      lines: [
        L("l1", null, "Limestone is mostly calcium carbonate.", "Đá vôi chủ yếu là canxi cacbonat."),
        L("l2", null, "Long ago, in a shallow, warm sea, shells and skeletons of countless sea animals sank to the floor.", "Thời xa xưa, ở biển nông và ấm, vỏ và xương vô số sinh vật biển lắng xuống đáy."),
        L("l3", null, "They piled up into thick layers, and were pressed into rock.", "Chúng chồng thành lớp dày rồi nén lại thành đá."),
      ] },
    { id: "s06", module: "TEXT-02", ref: "p4",
      data: { text: "Mỗi lớp đá như một trang sách ghi lại môi trường thời đó.", keywords: ["trang sách"], illus: "open-book" },
      lines: [
        L("l1", null, "This took hundreds of millions of years, much longer than human history.", "Quá trình này kéo dài hàng trăm triệu năm, dài hơn lịch sử loài người rất nhiều."),
        L("l2", null, "That's why scientists find fossils of ancient sea life in the rock. Each layer is like a page of a book.", "Vì thế trong đá có hóa thạch sinh vật biển cổ. Mỗi lớp đá như một trang sách."),
      ] },

    // Chương 2 — Mưa gọt
    { id: "s07", module: "HOST-03", data: { n: 2, of: 7, title: "Mưa “gọt” núi đá" },
      lines: [L("l1", "det", "Part two: how does rain carve the mountains?", "Phần hai: nước mưa “gọt” núi đá như thế nào?")] },
    { id: "s08", module: "REL-01", ref: "p5",
      data: { cause: "Mưa hấp thụ khí cacbonic trong không khí và đất", effect: "Thành axit rất yếu, hòa tan đá vôi chậm mà không ngừng", causeIllus: "cloud-with-rain", effectIllus: "rock" },
      lines: [
        L("l1", null, "Once the crust lifted the rock out of the sea, rain took in carbon dioxide and became a weak acid.", "Vỏ Trái Đất nâng đá khỏi biển; mưa hấp thụ khí cacbonic thành axit rất yếu."),
        L("l2", null, "It dissolves limestone slowly, but without stopping.", "Nó hòa tan đá vôi chậm nhưng không ngừng."),
      ] },
    { id: "s09", module: "TEXT-06", ref: "p6",
      data: { term: "karst", ipa: "/kɑːst/", pos: "danh từ", meaning: "Địa hình hình thành khi nước hòa tan đá vôi: núi tháp, thung lũng, hang", example: "Ha Long Bay is a drowned karst landscape.", illus: "mountain" },
      lines: [
        L("l1", null, "A hot, rainy climate makes this faster.", "Khí hậu nóng ẩm, mưa nhiều làm quá trình này mạnh hơn."),
        L("l2", null, "Rock dissolves along cracks into valleys. What's left becomes tower and cone shaped peaks, close together.", "Đá tan dọc khe nứt thành thung lũng; phần còn lại thành đỉnh núi dạng tháp, dạng nón."),
        L("l3", null, "This kind of land is called karst.", "Kiểu địa hình này gọi là karst."),
      ] },
    { id: "s10", module: "LIST-07", ref: "p7",
      data: { title: "Trong lòng núi", items: [{ text: "Nước ngấm vào, khoét thành hang", illus: "droplet" }, { text: "Giọt nước mang canxi nhỏ xuống rất chậm", illus: "hourglass-not-done" }, { text: "Để lại thạch nhũ và măng đá", illus: "rock" }] },
      lines: [
        L("l1", null, "Water also soaks into the mountains and hollows out caves. People didn't make them.", "Nước còn ngấm vào lòng núi, khoét thành hang, không phải do người làm."),
        L("l2", null, "Drops carrying calcium fall very slowly, leaving stalactites on the ceiling and stalagmites on the floor.", "Giọt nước mang canxi nhỏ rất chậm, để lại thạch nhũ trên trần, măng đá dưới nền."),
      ] },

    // Chương 3 — Biển dâng
    { id: "s11", module: "HOST-03", data: { n: 3, of: 7, title: "Biển dâng: núi thành đảo" },
      lines: [L("l1", "det", "Part three: when did mountains become islands?", "Phần ba: núi biến thành đảo từ lúc nào?")] },
    { id: "s12", module: "CMP-02", ref: "p8,p9",
      data: { title: "Vùng vịnh, xưa và nay", before: "Kỷ băng hà: biển thấp, đây là đồng bằng đá vôi có núi, thung lũng, sông suối", after: "Băng tan, biển tràn vào thung lũng, đỉnh núi thành hơn một nghìn hòn đảo", illusBefore: "snow-capped-mountain", illusAfter: "water-wave" },
      lines: [
        L("l1", null, "In the ice ages, the sea was low. The bay was a dry plain with mountains and rivers.", "Thời băng hà, biển thấp. Vịnh là đồng bằng có núi, sông suối."),
        L("l2", null, "Then the ice melted, and the sea filled the valleys. Only peaks remained.", "Băng tan, biển tràn vào thung lũng, chỉ còn đỉnh núi."),


      ] },
    { id: "s13", module: "QUIZ-01", ref: "questions[9]",
      data: {
        q: "What happened after the last ice age that created the islands?",
        options: [
          "A huge wave broke the coast into many small pieces in a single day",
          "The mountains slowly sank into the ground, and then water filled the empty space",
          "The ice melted, the sea rose into the valleys, and only mountain tops remained",
        ],
        correct: 2, countdown: 5, illus: "water-wave",
        why: "Băng tan, biển dâng tràn vào thung lũng, chỉ còn đỉnh núi nhô lên thành đảo.",
      },
      lines: [
        L("l1", null, "What happened after the last ice age that created the islands?", "Sau kỷ băng hà gần nhất, chuyện gì đã tạo nên các hòn đảo?"),
        L("l2", null, "The ice melted, the sea rose into the valleys, and only mountain tops remained.", "Băng tan, biển dâng vào thung lũng, chỉ còn đỉnh núi nhô lên."),
        L("l3", null, "The islands didn't float here. They are mountains the sea surrounded.", "Đảo không trôi tới đây. Đó là núi bị biển bao quanh."),
      ],
      beats: { after: 500 } },
    { id: "s14", module: "NUM-06", ref: "p10",
      data: { title: "UNESCO và Hạ Long", illus: "classical-building", illusEach: "classical-building",
        events: [{ date: "1994", label: "Công nhận vì vẻ đẹp cảnh quan" }, { date: "2000", label: "Công nhận thêm vì giá trị địa chất, địa mạo" }, { date: "2023", label: "Mở rộng sang quần đảo Cát Bà, cùng vùng karst" }],
        source: "UNESCO, Ha Long Bay – Cat Ba Archipelago" },
      lines: [
        L("l1", null, "UNESCO recognised Ha Long in nineteen ninety four, for its beautiful scenery.", "UNESCO công nhận Hạ Long năm 1994 vì vẻ đẹp cảnh quan."),
        L("l2", null, "In two thousand, again, for its geological value.", "Năm 2000, thêm lần nữa vì giá trị địa chất, địa mạo."),
        L("l3", null, "In twenty twenty three, it was extended to the Cat Ba islands: the same drowned karst.", "Năm 2023, mở rộng sang quần đảo Cát Bà, cùng một vùng karst bị biển nhấn chìm."),
      ] },

    // Chương 4 — Chọn tuyến tàu
    { id: "s15", module: "HOST-03", data: { n: 4, of: 7, title: "Chọn tuyến tàu" },
      lines: [L("l1", "det", "Part four: choosing a boat route that shows the story.", "Phần bốn: chọn tuyến tàu để thấy được câu chuyện.")] },
    { id: "s16", module: "SCENE-01", ref: "p13",
      data: { set: "home", label: "Cả nhà bàn tuyến", actors: [{ id: "tu", side: "left", pose: "hold" }, { id: "bin", side: "center" }, { id: "thao", side: "right" }] },
      lines: [
        L("l1", "tu", "I'd love to go inside a cave.", "Bà muốn được vào hang.", { face: "happy", pose: "explain", to: "thao" }),
        L("l2", "bin", "And I want to find the marks the waves bit into the rock!", "Cháu muốn tìm dấu sóng gặm đá cơ!", { face: "happy", pose: "point", to: "thao" }),
        L("l3", null, "A short route circles the islands from far away. A longer one stops at Sung Sot Cave, with small boats through a lagoon.", "Tuyến ngắn chỉ ngắm đảo từ xa. Tuyến dài dừng ở hang Sửng Sốt, có thuyền nhỏ qua áng nước."),
        L("l4", "thao", "Then the longer route. The story is inside the caves and at the foot of the islands.", "Vậy đi tuyến dài. Câu chuyện nằm trong hang và dưới chân đảo.", { face: "happy", pose: "thumb", react: { tu: "happy", bin: "happy" } }),
      ] },
    { id: "s17", module: "SCENE-02", ref: "p11,p14",
      data: { set: "room", label: "Hỏi trước khi đặt", actor: { id: "thao", side: "right" }, contact: { name: "Hãng tàu", illus: "ship" },
        messages: [{ from: "me", text: "Tuyến này dừng ở hang nào, có chỗ chèo thuyền nhỏ không ạ?", at: "l2" }, { from: "them", text: "Dạ có hang Sửng Sốt và chèo thuyền qua áng nước ạ.", at: "l3" }] },
      lines: [
        L("l1", null, "Routes differ: some go into caves, some paddle through lagoons, some only view from far away.", "Các tuyến khác nhau: có tuyến vào hang, có tuyến chèo qua áng nước, có tuyến chỉ ngắm xa."),
        L("l2", "thao", "Which caves does this route stop at? Are small boats included?", "Tuyến này dừng ở hang nào, có chỗ chèo thuyền nhỏ không ạ?"),
        L("l3", "them", "Yes, Sung Sot Cave and a small boat through a lagoon.", "Dạ có hang Sửng Sốt và chèo thuyền qua áng nước ạ."),
        L("l4", "thao", "Know what you want to see first, then choose the route.", "Biết mình muốn xem gì, rồi mới chọn tuyến.", { face: "happy" }),
      ] },
    { id: "s18", module: "CMP-06", ref: "p12",
      data: { do: ["Mặc áo phao khi được yêu cầu, nhất là trẻ nhỏ", "Theo tuyến, giờ chạy của ban quản lý và hãng tàu"], dont: ["Cãi lại hay bỏ áo phao của trẻ"], doIcons: ["child", "ship"], dontIcons: ["warning"] },
      lines: [
        L("l1", null, "Routes, times and safety rules come from the bay management and the boat companies. They change with the season and weather.", "Tuyến, giờ chạy, quy định an toàn do ban quản lý vịnh và hãng tàu đặt ra, đổi theo mùa, thời tiết."),
        L("l2", null, "When the crew asks, put life jackets on, especially on children, right away.", "Khi được yêu cầu, mặc áo phao ngay, nhất là cho trẻ nhỏ."),
      ] },

    // Chương 5 — Nhìn từ tàu
    { id: "s19", module: "HOST-03", data: { n: 5, of: 7, title: "Trên tàu, nhìn vào đâu?" },
      lines: [L("l1", "det", "Part five: on the boat, where should you look?", "Phần năm: ngồi trên tàu thì nhìn vào đâu?")] },
    { id: "s20", module: "LIST-02", ref: "p15",
      data: { title: "Bốn dấu vết nhìn từ tàu", illus: "ship",
        items: [{ icon: "water-wave", illus: "water-wave", text: "Ngấn lõm ở chân đảo" }, { icon: "mountain", illus: "mountain", text: "Vách đá dựng đứng như tường" },
          { icon: "door", illus: "door", text: "Cửa hang lưng chừng núi" }, { icon: "droplet", illus: "droplet", text: "Áng nước: hồ nước mặn giữa vách đá" }] },
      lines: [
        L("l1", null, "Look for notches at the foot of the islands, right at the water.", "Tìm ngấn lõm ở chân đảo, sát mặt nước."),
        L("l2", null, "Steep cliffs like walls, and cave mouths halfway up.", "Vách đá dựng đứng như tường, cửa hang lưng chừng núi."),
        L("l3", null, "And lagoons: salty lakes ringed by rock walls, joined to the sea through caves or gaps.", "Và áng nước: hồ nước mặn bao quanh bởi vách đá, nối biển qua hang hay khe."),
      ] },
    { id: "s21", module: "OPEN-16", ref: "p16,p18",
      data: { fact: "Ngấn lõm sát mặt nước là do sóng và nước mặn hòa tan đá."
, source: "UNESCO, Ha Long Bay – Cat Ba Archipelago", illus: "water-wave" },
      lines: [
        L("l1", null, "Did you know? That notch is made by the sea itself. Waves and salt water dissolve rock at water level.", "Bạn có biết: ngấn lõm là do chính nước biển. Sóng và nước mặn hòa tan đá ở mực nước."),
        L("l2", null, "Day after day, it cuts deeper, until some islands look like mushrooms.", "Ngày qua ngày khoét sâu, có đảo trông như cây nấm."),
      ] },
    { id: "s22", module: "CMP-01", ref: "p16,p17,p18",
      data: { labels: ["Ngấn cũ cao hơn mặt nước", "Hang trên cao"], left: "Chỗ biển từng đứng khi mực nước khác hôm nay", right: "Hình thành khi mực nước ngầm ở độ cao khác, lúc còn là đất liền", illus: ["water-wave", "mountain"] },
      lines: [
        L("l1", null, "An old notch above today's water? The sea once stood at a different level.", "Ngấn cũ cao hơn mặt nước? Đó là chỗ biển từng đứng ở mực khác."),
        L("l2", null, "Caves like Sung Sot, Thien Cung and Dau Go are high up, because they formed when the groundwater was at another height, while this was land.", "Hang Sửng Sốt, Thiên Cung, Đầu Gỗ nằm cao vì hình thành khi mực nước ngầm ở độ cao khác, lúc còn là đất liền."),
      ] },
    { id: "s23", module: "SCENE-01", ref: "p19",
      data: { set: "heritage", label: "Trên boong tàu", actors: [{ id: "bin", side: "center" }, { id: "thao", side: "right" }] },
      lines: [
        L("l1", "thao", "See that line at the bottom of the island? The sea made it.", "Thấy đường ngấn dưới chân đảo kia không? Biển khoét đấy.", { pose: "point", to: "bin" }),
        L("l2", "bin", "There's another one! And one more over there!", "Kia nữa! Đằng kia cũng có!", { face: "happy", pose: "pointL", to: "thao" }),
        L("l3", null, "Point to one mark, and children find the rest. One thing you see beats ten explanations.", "Chỉ một ngấn, trẻ tự tìm thêm. Một dấu vết tận mắt, nhớ hơn mười câu giảng."),
      ] },

    // Chương 6 — Vào hang
    { id: "s24", module: "HOST-03", data: { n: 6, of: 7, title: "Vào hang: xem gì, tránh gì" },
      lines: [L("l1", "det", "Part six: in the cave, what to see and what to avoid.", "Phần sáu: vào hang thì xem gì và nên tránh gì?")] },
    { id: "s25", module: "CMP-01", ref: "p20",
      data: { labels: ["Thạch nhũ", "Măng đá"], left: "Treo từ trần xuống", right: "Mọc từ nền lên; gặp nhau thành cột đá", illus: ["down-arrow", "up-arrow"] },
      lines: [
        L("l1", null, "A tip for children: stalactites hang down from the ceiling. Stalagmites grow up from the floor.", "Mẹo cho trẻ: thạch nhũ treo từ trần xuống, măng đá mọc từ nền lên."),
        L("l2", null, "When they meet, they make a column. That takes a very long time.", "Khi gặp nhau thành cột đá, phải qua thời gian rất dài."),
      ] },
    { id: "s26", module: "DLG-01", ref: "p21,p22,p23",
      data: { set: "heritage", label: "Trong hang Sửng Sốt", actors: [{ id: "bin", side: "center" }, { id: "thao", side: "right" }],
        verdict: { ok: false, label: "Bẻ một mẩu thạch nhũ làm kỷ niệm", why: "Một centimet có khi mất hàng chục đến hàng trăm năm; gãy rồi gần như không mọc lại trong đời người." } },
      lines: [
        L("l1", "bin", "There are thousands of them. Can I break off a tiny piece to keep?", "Có cả nghìn cái mà. Cháu bẻ một mẩu nhỏ làm kỷ niệm nhé?", { face: "happy", pose: "point", to: "thao", stop: true }),
        L("l2", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l3", "det", "Each one grows from tiny drops of calcium. One centimetre can take decades, even centuries. And oil from hands stains it.", "Mỗi mẩu lớn từ giọt nước canxi; một centimet có khi cả trăm năm. Dầu trên tay còn làm đổi màu."),
        L("l4", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l5", "thao", "Before we go in: we look, we don't touch. And hold my hand in the narrow parts.", "Trước khi vào: mình chỉ nhìn, không chạm. Chỗ hẹp thì nắm tay cô nhé.", { phase: "redo", pose: "explain", to: "bin" }),
        L("l6", "bin", "Okay! Just looking.", "Vâng! Cháu chỉ nhìn thôi.", { phase: "redo", face: "happy", pose: "thumb" }),
        L("l7", "det", "Give the rules at the entrance, so nothing is lost inside.", "Dặn trước ở cửa hang, đỡ tiếc ở trong hang.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },

    // Chương 7 — Kể chuyện
    { id: "s27", module: "HOST-03", data: { n: 7, of: 7, title: "Kể cho con, cho bạn nước ngoài" },
      lines: [L("l1", "det", "Last part: telling it to kids and foreign friends.", "Phần cuối: kể cho con và bạn nước ngoài thế nào cho hay?")] },
    { id: "s28", module: "STORY-05", ref: "p24",
      data: { label: "Truyền thuyết", panels: [
        { scene: ["ship", "crossed-swords", "water-wave"], caption: "Giặc từ biển kéo đến." },
        { scene: ["dragon", "gem-stone", "sparkles"], caption: "Rồng mẹ và đàn rồng con xuống giúp, phun ngọc thành đảo chắn giặc." },
        { scene: ["dragon", "mountain", "water-wave"], caption: "Nơi rồng mẹ đáp xuống gọi là Hạ Long: “rồng đáp xuống”." } ] },
      lines: [
        L("l1", null, "The Vietnamese legend: invaders came from the sea.", "Truyền thuyết: giặc từ biển kéo đến."),
        L("l2", null, "A mother dragon and her children came down, and spat jewels that became islands to block them.", "Rồng mẹ và đàn rồng con xuống giúp, phun ngọc thành đảo chắn đường giặc."),
        L("l3", null, "Where the mother dragon landed is Ha Long, meaning descending dragon.", "Nơi rồng mẹ đáp xuống là Hạ Long, nghĩa là “rồng đáp xuống”."),
      ] },
    { id: "s29", module: "DLG-01", ref: "p26,p27",
      data: { set: "heritage", label: "Dẫn Sam ra vịnh", actors: [{ id: "thao", side: "right" }, { id: "sam", side: "left" }],
        verdict: { ok: false, label: "Mở đầu bằng bài giảng khoa học", why: "Toàn từ khó, người nghe chưa có gì để bám vào, gật đầu rồi quay đi chụp ảnh." } },
      lines: [
        L("l1", "sam", "Wow, so many islands! How did they get here?", "Ồ, nhiều đảo quá! Sao lại có chúng ở đây?", { face: "surprised", pose: "point", to: "thao" }),
        L("l2", "thao", "Well, calcium carbonate, a weak acid, and then the ice ages...", "À, canxi cacbonat, axit yếu, rồi kỷ băng hà…", { pose: "explain", to: "sam", stop: true, react: { sam: "neutral" } }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Too many hard words, and nothing to hold on to. Your friend nods politely, then turns away to take photos.", "Toàn từ khó, chưa có gì để bám vào. Khách gật đầu lịch sự rồi quay đi chụp ảnh."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "thao", "A mother dragon spat jewels that became these islands. Ha Long means descending dragon.", "Rồng mẹ phun ngọc thành những hòn đảo này. Hạ Long là “rồng đáp xuống”.", { phase: "redo", pose: "explain", face: "happy", to: "sam" }),
        L("l7", "sam", "A dragon! And what really happened?", "Rồng à! Thế thật ra thì sao?", { phase: "redo", face: "happy", to: "thao" }),
        L("l8", "thao", "These islands used to be mountains.", "Những hòn đảo này từng là núi.", { phase: "redo", pose: "point", to: "sam" }),
        L("l9", "det", "The legend makes them curious. The short science line comes when they want it. Dragon first, rocks after.", "Truyền thuyết gợi tò mò, câu khoa học đến đúng lúc. Kể rồng trước, giải thích đá sau.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },
    { id: "s30", module: "TEXT-07", ref: "p25",
      data: { en: "These islands used to be mountains.", vi: "Những hòn đảo này từng là núi.", chunks: [{ en: "These islands", vi: "những hòn đảo này" }, { en: "used to be", vi: "từng là" }, { en: "mountains.", vi: "núi" }], illus: "mountain" },
      lines: [
        L("l1", null, "Three short English sentences. One: These islands used to be mountains.", "Ba câu tiếng Anh ngắn. Một: These islands used to be mountains."),
        L("l2", null, "Two: Rainwater slowly dissolved the rock.", "Hai: Rainwater slowly dissolved the rock. Nước mưa hòa tan đá từ từ."),
        L("l3", null, "Three: Ha Long means descending dragon. Speak slowly, and point to the islands as you speak.", "Ba: Ha Long means descending dragon. Nói chậm, chỉ tay vào đảo khi nói."),
      ] },

    // Tổng kết + câu đố + kết
    { id: "s31", module: "END-02", ref: "outro",
      data: { points: ["Biển cổ: đá vôi từ vỏ sinh vật biển", "Mưa gọt: núi tháp, thung lũng, hang", "Biển dâng: đỉnh núi thành đảo"], icons: ["spiral-shell", "cloud-with-rain", "water-wave"] },
      lines: [
        L("l1", null, "Ancient sea, carving rain, rising sea. That's the whole story of Ha Long.", "Biển cổ, mưa gọt, biển dâng: cả câu chuyện của Hạ Long."),
        L("l2", null, "Each island is an old mountain top. Each notch is a mark in time.", "Mỗi hòn đảo là một đỉnh núi xưa, mỗi ngấn đá là một dấu mốc thời gian."),
      ] },
    { id: "s32", module: "QUIZ-01", ref: "questions[24]",
      data: {
        q: "How can a child easily tell stalactites from stalagmites?",
        options: [
          "Stalactites hang down from the ceiling, and stalagmites grow up from the floor",
          "Stalactites are found near the sea, while stalagmites are found in forests",
          "Stalactites are always white, while stalagmites are always brown or grey",
        ],
        correct: 0, countdown: 5, illus: "rock",
        why: "Thạch nhũ treo từ trần xuống, măng đá mọc từ nền lên.",
      },
      lines: [
        L("l1", null, "How can a child easily tell stalactites from stalagmites?", "Làm sao để trẻ dễ phân biệt thạch nhũ và măng đá?"),
        L("l2", null, "Stalactites hang down from the ceiling, and stalagmites grow up from the floor.", "Thạch nhũ treo từ trần xuống, măng đá mọc từ nền lên."),
        L("l3", null, "Colour or place doesn't tell them apart.", "Màu sắc hay vị trí hang không phải cách phân biệt."),
      ],
      beats: { after: 600 } },
    { id: "s33", module: "SCENE-01", ref: "p2",
      data: { set: "heritage", label: "Trả lời Bin", actors: [{ id: "bin", side: "center" }, { id: "thao", side: "right" }] },
      lines: [
        L("l1", "bin", "So why are there islands in the sea, Auntie?", "Vậy sao đảo lại mọc giữa biển hả cô?", { face: "thinking", to: "thao" }),
        L("l2", "thao", "Long ago, these islands were mountains on land. The sea rose, and only the tops stayed above water.", "Ngày xưa đảo là núi trên đất liền. Biển dâng, chỉ còn đỉnh núi nhô lên.", { pose: "point", face: "happy", to: "bin", react: { bin: "happy" } }),
      ] },
    { id: "s34", module: "END-05", data: { text: "Bốn mươi câu về vịnh Hạ Long", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [
        L("l1", "det", "Save that sentence on your phone for the trip. Now try the forty questions below.", "Chép câu ấy vào điện thoại để kể. Giờ thử bốn mươi câu bên dưới nhé."),
      ] },
  ],
};
