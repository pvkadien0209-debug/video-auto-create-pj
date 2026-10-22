// Kịch bản video W lần 3 (#110) — "Phong Nha – Kẻ Bàng: thế giới hang động" · chuỗi "Di sản và du lịch Việt Nam"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "phong-nha-ke-bang-caves--w01",
  hook: "HOOK-07",
  loop: { open: "s01", close: "s26" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "heritage-travellers", slug: "phong-nha-ke-bang-caves", door: "kien-thuc", level: "B1",
    title: "Phong Nha – Kẻ Bàng: thế giới hang động", series: "Di sản và du lịch Việt Nam" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên (#110): “bạn” (người lên lịch cho đoàn, ❓ p8) → Thảo; người mẹ ngoài sáu mươi, không biết bơi (❓ p8) → Bà Tư (vai mới; bản lần 2 để Bác Bình đóng; câu đố giữ chữ “mother” của bài); nhóm bạn trẻ khoẻ, người muốn vào hang ven đường (⚖️ p13) → Dũng; trẻ hét nghe tiếng vọng, trẻ tìm “cửa hang bí mật” (q21, p22) → Bé Bin (vai mới). Câu treo s01 (xếp thế nào cho cả đoàn?) được trả lời ở câu đố questions[12] + s13–s14. Phủ ý: 25/25. Một DLG-01 (⚖️ p13); 🔀 p17 dùng SCENE-03. Câu đố cuối questions[1].",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "p8",
      data: { set: "online", label: "Bạn là Thảo", actors: [{ id: "thao", side: "left" }, { id: "dung", side: "center" }, { id: "tu", side: "right" }] },
      lines: [
        L("l1", null, "You are Thao, planning the group's trip to Phong Nha.", "Bạn là Thảo, lên lịch cho cả đoàn đi Phong Nha."),
        L("l2", "dung", "Let's all do Dark Cave! Zip line, swimming, mud!", "Cả đoàn đi Hang Tối đi! Đu dây, bơi, tắm bùn!", { face: "happy", pose: "thumb" }),
        L("l3", "tu", "But I'm over sixty, and I can't swim.", "Nhưng bà ngoài sáu mươi, lại không biết bơi.", { face: "worried", react: { thao: "thinking" } }),
        L("l4", null, "How would you plan it, so everyone enjoys the trip?", "Bạn sẽ xếp thế nào cho cả đoàn cùng vui?", { wait: 300 }),
      ],
      beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Đi Phong Nha cần nhớ", pose: "present", items: ["Núi đá vôi bị nước khoét rỗng", "Mỗi hang một kiểu sức khoẻ", "Đúng lối, đúng người dẫn"] },
      lines: [
        L("l1", "det", "Which cave is right for you, and how do you go safely?", "Chọn hang nào hợp, và đi thế nào cho an toàn?"),
        L("l2", "det", "Phong Nha is inland limestone, hollowed out by water over a very long time.", "Phong Nha là núi đá vôi trong đất liền, bị nước khoét rỗng qua thời gian rất dài."),
        L("l3", "det", "Each cave fits a different kind of fitness.", "Mỗi hang hợp một kiểu sức khoẻ."),
        L("l4", "det", "And every cave needs the right path, with the right guide.", "Và hang nào cũng cần đúng lối, đúng người dẫn."),
      ] },
    { id: "s03", module: "HOST-01",
      data: { title: "Lộ trình", pose: "point", items: ["Phong Nha khác Hạ Long", "Chọn hang, hỏi trước khi đặt", "Trong hang, Sơn Đoòng, rừng trên núi"] },
      lines: [
        L("l1", "det", "Our route: how Phong Nha differs from Ha Long.", "Lộ trình: Phong Nha khác Hạ Long ở đâu."),
        L("l2", "det", "Choosing a cave, and what to ask before booking.", "Chọn hang, và hỏi gì trước khi đặt tour."),
        L("l3", "det", "Inside the caves, Son Doong's story, and the forest above.", "Trong hang, chuyện Sơn Đoòng, và rừng trên núi đá."),
      ] },

    // Chương 1 — Khác Hạ Long
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Phong Nha khác Hạ Long ở đâu?" },
      lines: [L("l1", "det", "Part one: how is Phong Nha different from Ha Long?", "Phần một: Phong Nha khác Hạ Long ở đâu?")] },
    { id: "s05", module: "TEXT-04", ref: "p1",
      data: { text: "Vườn quốc gia ở tây bắc Quảng Bình cũ, nay thuộc Quảng Trị, sát biên giới Lào.", marks: ["sát biên giới Lào"], illus: "world-map" },
      lines: [
        L("l1", null, "Phong Nha Ke Bang National Park is in the northwest of old Quang Binh, now Quang Tri province, near the border with Laos.", "Vườn quốc gia Phong Nha – Kẻ Bàng ở tây bắc Quảng Bình cũ, nay thuộc Quảng Trị, sát biên giới Lào."),
        L("l2", null, "It's part of a huge limestone area that stretches into Laos.", "Đây là một phần vùng núi đá vôi rộng lớn trải sang cả nước bạn."),
      ] },
    { id: "s06", module: "CMP-01", ref: "p2",
      data: { labels: ["Hạ Long", "Phong Nha"], left: "Núi đá vôi bị biển nhấn chìm",
        right: "Núi trong đất liền phủ rừng, ruột núi thành hang và sông ngầm", illus: ["water-wave", "national-park"] },
      lines: [
        L("l1", null, "Both are limestone. Ha Long is mountains drowned by the sea.", "Cả hai đều là đá vôi. Hạ Long là vùng núi bị biển nhấn chìm."),
        L("l2", null, "Phong Nha is inland, forest-covered, with caves and underground rivers tens of kilometres long.", "Phong Nha là núi trong đất liền phủ rừng, có hang và sông ngầm dài hàng chục cây số."),
        L("l3", null, "Easy to remember: Ha Long is mountains in the sea. Phong Nha is forest on hollow mountains.", "Dễ nhớ: Hạ Long là núi chìm trong biển, Phong Nha là biển rừng trên núi rỗng."),
      ] },
    { id: "s07", module: "REL-02", ref: "p3",
      data: { chain: ["Đá vôi rất cổ, hàng trăm triệu năm", "Mưa, sông suối len theo khe nứt", "Hòa tan đá dần dần, khoét rỗng lòng núi"], illus: ["rock", "cloud-with-rain", "hole"] },
      lines: [
        L("l1", null, "The limestone here is very old, formed over hundreds of millions of years, through many movements of the earth's crust.", "Đá vôi ở đây rất cổ, hình thành qua hàng trăm triệu năm, qua nhiều lần vỏ Trái Đất chuyển động."),
        L("l2", null, "Rain and rivers ran through the cracks, and slowly dissolved the rock. The caves were not made quickly.", "Mưa và sông suối len theo khe nứt, hòa tan đá dần dần. Hang không hình thành nhanh."),
      ] },
    { id: "s08", module: "NUM-06", ref: "p4",
      data: { title: "UNESCO và Phong Nha – Kẻ Bàng", illus: "classical-building", illusEach: "classical-building",
        events: [{ date: "2003", label: "Công nhận vì giá trị địa chất, địa mạo" }, { date: "2015", label: "Thêm giá trị hệ sinh thái, đa dạng sinh học" }, { date: "2025", label: "Mở rộng sang Hin Nam No của Lào" }],
        source: "UNESCO, Decision 39 COM 8B.6; Decision 47 COM 8B.6" },
      lines: [
        L("l1", null, "UNESCO listed it in two thousand and three, for its geology.", "UNESCO công nhận năm 2003 vì giá trị địa chất, địa mạo."),
        L("l2", null, "In twenty fifteen, again, for its forests, ecosystems and wildlife.", "Năm 2015, thêm giá trị hệ sinh thái và đa dạng sinh học."),
        L("l3", null, "In twenty twenty five, it was extended to Hin Nam No National Park in Laos, one site across the border.", "Năm 2025, mở rộng sang Vườn quốc gia Hin Nam No của Lào, thành di sản xuyên biên giới."),
      ] },

    // Chương 2 — Hang nào hợp
    { id: "s09", module: "HOST-03", data: { n: 2, of: 6, title: "Hang nào hợp với nhà mình?" },
      lines: [L("l1", "det", "Part two: which cave suits your group?", "Phần hai: hang nào hợp với nhà mình?")] },
    { id: "s10", module: "CMP-05", ref: "p5,p6",
      data: { title: "Bốn kiểu hang, bốn kiểu sức", columns: [{ label: "Nhẹ nhàng", illus: "canoe" }, { label: "Cần sức", illus: "person-climbing" }],
        rows: [{ label: "Hang", cells: ["Động Phong Nha", "Hang Tối"] }, { label: "Đi thế nào", cells: ["thuyền trên sông Son vào hang", "đu dây, bơi, tắm bùn"] }, { label: "Hợp với", cells: ["gia đình, người lớn tuổi", "nhóm trẻ khoẻ, biết bơi"] }] },
      lines: [
        L("l1", null, "Phong Nha Cave: a boat on the Son River, then into the cave by boat. Good for families and older people.", "Động Phong Nha: đi thuyền trên sông Son vào hang. Hợp gia đình, người lớn tuổi."),
        L("l2", null, "Paradise Cave: a wooden walkway and beautiful formations, but a steep climb before you enter.", "Động Thiên Đường: có cầu gỗ, thạch nhũ rất đẹp, nhưng phải leo dốc trước khi vào."),
        L("l3", null, "Dark Cave: zip line, swimming and a mud bath. For fit young groups who can swim.", "Hang Tối: đu dây, bơi, tắm bùn trong hang. Hợp nhóm trẻ khoẻ, biết bơi."),
        L("l4", null, "Hang En and multi-day tours: camping, streams, jungle. Train your fitness first.", "Hang Én và tour nhiều ngày: cắm trại, lội suối, đi rừng. Cần chuẩn bị thể lực từ trước."),
      ] },
    { id: "s11", module: "LIST-05", ref: "p7",
      data: { title: "Bốn câu hỏi cho cả đoàn", items: ["Có trẻ nhỏ hay người yếu chân?", "Mọi người có biết bơi không?", "Có ai sợ chỗ tối, chỗ hẹp?", "Muốn ngắm nhẹ nhàng hay vận động?"], illus: "clipboard" },
      lines: [
        L("l1", null, "Ask your group four questions. Any young children, or weak legs? Can everyone swim?", "Hỏi cả đoàn bốn câu. Có trẻ nhỏ, người yếu chân? Mọi người biết bơi không?"),
        L("l2", null, "Is anyone afraid of dark, narrow places? Then leave out those tours before booking.", "Có ai sợ chỗ tối, hẹp? Thì loại tour có lối tối, hẹp trước khi đặt."),
        L("l3", null, "Gentle sightseeing, or real exercise? Four answers rule out most wrong choices.", "Muốn ngắm nhẹ nhàng hay vận động? Bốn câu trả lời loại được phần lớn lựa chọn sai."),
      ] },
    { id: "s12", module: "QUIZ-01", ref: "questions[12]",
      data: {
        q: "What would be a better plan for this mixed group?",
        options: [
          "Make the mother try the zip line, because everyone should do the same thing",
          "Take everyone by boat to Phong Nha Cave, and let the young group go another day",
          "Leave the mother at home, because caves are not for older people",
        ],
        correct: 1, countdown: 5, illus: "canoe",
        why: "Đi chung: cả đoàn vào động Phong Nha bằng thuyền; nhóm trẻ đi Hang Tối buổi khác.",
      },
      lines: [
        L("l1", null, "Back to Thao's group. What would be a better plan for this mixed group?", "Quay lại đoàn của Thảo: kế hoạch nào tốt hơn cho đoàn này?"),
        L("l2", null, "Take everyone by boat to Phong Nha Cave, and let the young group go another day.", "Cả đoàn đi thuyền vào động Phong Nha, nhóm trẻ đi hôm khác."),
      ],
      beats: { after: 500 } },
    { id: "s13", module: "SCENE-01", ref: "p8",
      data: { set: "online", label: "Thảo chốt lịch", actors: [{ id: "thao", side: "left" }, { id: "tu", side: "right" }] },
      lines: [
        L("l1", "thao", "Together, we all take the boat into Phong Nha Cave.", "Buổi đi chung, cả đoàn đi thuyền vào động Phong Nha.", { pose: "explain", face: "happy" }),
        L("l2", "thao", "The young ones can do Dark Cave another day.", "Nhóm trẻ đi Hang Tối vào buổi khác ạ.", { pose: "explain", to: "tu" }),
        L("l3", "tu", "Good. I won't sit alone on the bank for hours.", "Vậy bà khỏi ngồi một mình trên bờ chờ hàng giờ.", { face: "happy", to: "thao" }),

      ] },
    { id: "s14", module: "TEXT-01", ref: "p9",
      data: { text: "Chọn hang theo người yếu nhất trong đoàn.", illus: "people-hugging" },
      lines: [L("l1", null, "Choose the cave for the weakest person in your group.", "Chọn hang theo người yếu nhất trong đoàn.", { wait: 300 })] },

    // Chương 3 — Trước khi đặt tour
    { id: "s15", module: "HOST-03", data: { n: 3, of: 6, title: "Trước khi đặt tour, hỏi gì?" },
      lines: [L("l1", "det", "Part three: what to ask before you book.", "Phần ba: trước khi đặt tour cần hỏi gì?")] },
    { id: "s16", module: "SCENE-02", ref: "p10",
      data: { set: "room", label: "Hỏi đơn vị tour", actor: { id: "thao", side: "left" }, contact: { name: "Đơn vị tour hang", illus: "flashlight" },
        messages: [{ from: "me", text: "Tour này khó mức nào, đi bộ bao lâu ạ?", at: "l1" }, { from: "me", text: "Có phải bơi hay lội nước không ạ?", at: "l2" },
          { from: "me", text: "Đơn vị có giấy phép và trang bị an toàn gì ạ?", at: "l3" }, { from: "me", text: "Trẻ em bao nhiêu tuổi thì đi được ạ?", at: "l4" }] },
      lines: [
        L("l1", "thao", "How difficult is this tour, and how long do we walk?", "Tour này khó mức nào, đi bộ bao lâu ạ?"),
        L("l2", "thao", "Do we have to swim or walk through water?", "Có phải bơi hay lội nước không ạ?"),
        L("l3", "thao", "What licence and safety equipment do you have?", "Đơn vị có giấy phép và trang bị an toàn gì ạ?"),
        L("l4", "thao", "From what age can children join?", "Trẻ em bao nhiêu tuổi thì đi được ạ?"),
      ] },
    { id: "s17", module: "CMP-01", ref: "p11",
      data: { labels: ["Mùa mưa lũ", "Mùa khô"], left: "Một số hang, tour có thể tạm đóng", right: "Thường thuận lợi hơn cho tour mạo hiểm", illus: ["cloud-with-rain", "sun"] },
      lines: [
        L("l1", null, "In the central rainy season, floods can close some caves and tours for a while.", "Mùa mưa lũ miền Trung có thể khiến một số hang, tour tạm đóng."),
        L("l2", null, "The dry season is usually better for adventure tours. The managers set the schedule, so check close to your trip.", "Mùa khô thường thuận lợi cho tour mạo hiểm. Lịch do ban quản lý quy định, kiểm tra gần ngày đi."),
      ] },
    { id: "s18", module: "DLG-01", ref: "p12,p13,p14",
      data: { set: "street", label: "Cửa hang ven đường", actors: [{ id: "dung", side: "center" }, { id: "thao", side: "left" }],
        verdict: { ok: false, label: "Bật đèn điện thoại vào hang lạ", why: "Hang chưa khai thác không có lối đi; nước có thể dâng đột ngột, đá trơn, lối rẽ nhánh dễ lạc." } },
      lines: [
        L("l1", "dung", "A cave by the road! I'll use my phone light and take a quick look.", "Có cửa hang ven đường! Bật đèn điện thoại vào xem chút.", { face: "happy", pose: "phone", stop: true }),
        L("l2", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l3", "det", "An unopened cave has no path and no one watching. Water can rise suddenly after rain in the hills, even when it's sunny here.", "Hang chưa khai thác không có lối đi, không ai canh. Nước có thể dâng đột ngột dù chỗ bạn trời nắng."),
        L("l4", "det", "Rocks are slippery, paths split, and phone batteries die fast.", "Đá trơn, lối rẽ nhánh dễ lạc, đèn điện thoại nhanh hết pin."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "thao", "Let's ask the locals, and go with a licensed company and an experienced guide.", "Mình hỏi người địa phương, rồi đi cùng đơn vị được cấp phép, có hướng dẫn viên.", { phase: "redo", pose: "explain", to: "dung" }),
        L("l7", "dung", "Okay. If a cave isn't open, I won't open the way myself.", "Ừ. Hang chưa mở cửa, đừng tự mở lối.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },

    // Chương 4 — Trong hang
    { id: "s19", module: "HOST-03", data: { n: 4, of: 6, title: "Vào hang: xem gì, giữ gì" },
      lines: [L("l1", "det", "Part four: inside the cave, what to see and what to protect.", "Phần bốn: vào hang thì xem gì và giữ gì?")] },
    { id: "s20", module: "SCENE-01", ref: "p15",
      data: { set: "heritage", label: "Động Thiên Đường", actors: [{ id: "bin", side: "center" }, { id: "thao", side: "left" }] },
      lines: [
        L("l1", "bin", "Hellooo! Listen to the echo!", "A lô ô ô! Nghe tiếng vọng kìa!", { face: "happy", pose: "wave" }),
        L("l2", "thao", "Shh, softly, Bin. Bats and other animals live here, and they don't like noise.", "Suỵt, nói khẽ thôi Bin. Trong hang có dơi, chúng sợ ồn lắm.", { pose: "hold", to: "bin", react: { bin: "surprised" } }),
        L("l3", null, "Stay on the wooden walkway. It lets you see without touching. Don't cross the rails, don't touch the formations.", "Đi đúng lối gỗ để ngắm mà không chạm. Không vượt rào, không chạm thạch nhũ."),
      ] },
    { id: "s21", module: "LIST-05", ref: "p16",
      data: { title: "Mang theo đi tour lội suối", items: ["Giày bám tốt, chịu được ướt", "Áo mỏng dễ khô", "Nước uống, túi đựng rác mang về", "Túi chống nước cho điện thoại"], illus: "backpack" },
      lines: [
        L("l1", null, "Shoes with good grip that can get wet. Thin clothes that dry fast.", "Giày bám tốt, chịu được ướt. Áo mỏng dễ khô."),
        L("l2", null, "Water, and a bag to carry your rubbish back.", "Nước uống, và túi đựng rác mang về."),
        L("l3", null, "And a waterproof bag for your phone, on boats or in streams.", "Và túi chống nước cho điện thoại khi đi thuyền, lội suối."),
      ] },
    { id: "s22", module: "SCENE-03", ref: "p17,p18",
      data: { set: "park", actors: [{ id: "thao", side: "left" }, { id: "dung", side: "center" }],
        left: { label: "Dép xinh để chụp ảnh", ok: false }, right: { label: "Giày bám đá", ok: true } },
      lines: [
        L("a1", "thao", "These cute sandals will look great in photos!", "Đôi dép xinh này lên ảnh đẹp lắm!", { phase: "a", face: "happy" }),
        L("a2", "dung", "Oh no, your strap broke in the stream. Barefoot on sharp rocks?", "Thôi rồi, quai đứt giữa suối. Đi chân trần trên đá sắc à?", { phase: "a", face: "worried", react: { thao: "sad" } }),
        L("b1", "thao", "I asked the tour which shoes to bring: grip and quick dry. Plus a spare pair.", "Mình hỏi đơn vị tour: giày bám đá, chịu ướt, thêm đôi dự phòng.", { phase: "b", pose: "explain" }),
        L("b2", "dung", "Steady feet, and the photos still look great with the cave behind.", "Đi vững, mà ảnh vẫn đẹp vì phông nền là hang và suối.", { phase: "b", face: "happy", pose: "thumb" }),
        L("b3", null, "Broken straps slow the whole group. Shoes that grip the rock matter more than clothes for photos.", "Quai đứt làm chậm cả đoàn. Đôi giày bám đá quý hơn bộ đồ chụp ảnh."),
      ] },

    // Chương 5 — Sơn Đoòng
    { id: "s23", module: "HOST-03", data: { n: 5, of: 6, title: "Câu chuyện Sơn Đoòng" },
      lines: [L("l1", "det", "Part five: what story does Son Doong have to tell?", "Phần năm: Sơn Đoòng có câu chuyện gì để kể?")] },
    { id: "s24", module: "NUM-06", ref: "p19,p22",
      data: { title: "Sơn Đoòng được tìm ra thế nào?", illus: "hole", illusEach: "hole", events: [
        { date: "Đầu thập niên 1990", label: "Ông Hồ Khanh đi rừng, gặp cửa hang có gió lạnh", illus: "man" },
        { date: "Nhiều năm sau", label: "Ông mới tìm lại được lối vào" },
        { date: "2009", label: "Thám hiểm Anh và nhà khoa học Việt khảo sát", illus: "flashlight" } ],
        source: "UNESCO, Decision 39 COM 8B.6" },
      lines: [
        L("l1", null, "In the early nineteen nineties, Ho Khanh, a local man walking in the forest, found a cave mouth.", "Đầu thập niên 1990, ông Hồ Khanh, người dân địa phương, đi rừng thì gặp một cửa hang."),
        L("l2", null, "Cold wind blew out of it, and he heard water roaring inside.", "Gió lạnh thổi ra, bên trong nước chảy ầm ầm."),
        L("l3", null, "Then he lost the way, and found it again only years later.", "Rồi ông lạc mất lối, nhiều năm sau mới tìm lại được."),
        L("l4", null, "In two thousand and nine, British cave experts and Vietnamese scientists explored it and revealed its huge size.", "Năm 2009, đoàn thám hiểm Anh cùng nhà khoa học Việt Nam khảo sát, công bố kích thước khổng lồ."),
      ] },
    { id: "s25", module: "LIST-13", ref: "p20,p21",
      data: { title: "Sơn Đoòng hôm nay", items: [
        { title: "Rừng mọc trong hang", detail: "Chỗ trần sụp, ánh sáng lọt xuống, cây mọc lên.", illus: "deciduous-tree" },
        { title: "Lòng hang lớn nhất được biết đến", detail: "Thường được giới thiệu như vậy với du khách.", illus: "1st-place-medal" },
        { title: "Chỉ tour thám hiểm giới hạn", detail: "Sức khoẻ tốt, đăng ký, kiểm tra kỹ; bảo vệ hệ sinh thái.", illus: "locked" } ] },
      lines: [
        L("l1", null, "The cave is so big that where the ceiling fell in, sunlight comes down, and a forest grows inside.", "Lòng hang rộng đến mức chỗ trần sụp, ánh sáng lọt xuống, rừng cây mọc ngay trong hang."),
        L("l2", null, "It's usually described as the cave with the largest known cave passage in the world.", "Sơn Đoòng thường được giới thiệu là hang có lòng hang lớn nhất thế giới được biết đến."),
        L("l3", null, "Only limited expeditions go in, for fit people who register and pass checks, to protect its fragile life.", "Chỉ mở cho tour thám hiểm giới hạn, cần sức khoẻ tốt, đăng ký, kiểm tra kỹ, để bảo vệ hệ sinh thái."),
      ] },
    { id: "s26", module: "SCENE-01", ref: "p23",
      data: { set: "heritage", label: "Trên thuyền vào động", actors: [{ id: "bin", side: "center" }, { id: "thao", side: "left" }] },
      lines: [
        L("l1", "thao", "A local man felt cold wind from a hole, and found the biggest cave. Then he lost it for years!", "Có ông đi rừng thấy gió lạnh từ một cái lỗ, tìm ra hang lớn nhất. Rồi lạc mất nhiều năm!", { pose: "explain", to: "bin" }),
        L("l2", "bin", "Maybe there's a secret cave door right here!", "Biết đâu có cửa hang bí mật ngay đây!", { face: "surprised", pose: "point", to: "thao" }),
        L("l3", null, "A real person in the story brings a stone cave to life.", "Có người thật trong chuyện, hang đá bỗng có hồn."),
      ] },

    // Chương 6 — Rừng trên núi đá
    { id: "s27", module: "HOST-03", data: { n: 6, of: 6, title: "Rừng trên núi đá quý ở đâu?" },
      lines: [L("l1", "det", "Last part: why is the forest on the rocks so precious?", "Phần cuối: rừng trên núi đá quý ở chỗ nào?")] },
    { id: "s28", module: "REL-12", ref: "p24",
      data: { center: { label: "Rừng trên núi đá vôi", illus: "national-park" },
        spokes: [{ label: "Cây bám rễ vào khe đá", illus: "deciduous-tree" }, { label: "Đất mỏng, nước thấm nhanh", illus: "droplet" }, { label: "Voọc Hà Tĩnh", illus: "monkey" }, { label: "Voọc chà vá chân nâu", illus: "monkey" }] },
      lines: [
        L("l1", null, "Above the caves is tropical forest on limestone. Roots grip the cracks, the soil is thin, and water sinks fast.", "Trên hang là rừng nhiệt đới trên núi đá vôi: cây bám khe đá, đất mỏng, nước thấm nhanh."),
        L("l2", null, "It's home to rare primates, like the Ha Tinh langur and the red-shanked douc.", "Đây là nhà của nhiều loài linh trưởng như voọc Hà Tĩnh, voọc chà vá chân nâu."),
      ] },
    { id: "s29", module: "CMP-06", ref: "p25",
      data: { do: ["Ngắm động vật từ xa", "Từ chối khi được mời mua"], dont: ["Cho động vật hoang dã ăn", "Bắt, mua động vật, thực vật rừng làm quà"], doIcons: ["eyes", "hand-with-fingers-splayed"], dontIcons: ["banana", "wrapped-gift"] },
      lines: [
        L("l1", null, "Don't feed wild animals. Human food changes how they behave.", "Không cho động vật hoang dã ăn: thức ăn của người làm chúng đổi tập tính."),
        L("l2", null, "Offered a wild animal or rare plant as a gift? Say no. Buying them can break forest protection rules.", "Được mời mua động vật, cây rừng làm quà? Từ chối, vì có thể vi phạm quy định bảo vệ rừng."),
      ] },

    // Tổng kết + câu đố + kết
    { id: "s30", module: "END-02", ref: "outro",
      data: { points: ["Chọn hang theo người yếu nhất", "Hỏi kỹ trước khi đặt, đi cùng người dẫn được cấp phép", "Mang theo câu chuyện bác Hồ Khanh"], icons: ["people-hugging", "flashlight", "man"] },
      lines: [
        L("l1", null, "Phong Nha is hollow mountains under forest. Every cave is a different trip.", "Phong Nha là núi rỗng phủ rừng, mỗi hang một trải nghiệm."),
        L("l2", null, "Choose for the weakest, ask before you book, go with a licensed guide, and bring Ho Khanh's story.", "Chọn theo người yếu nhất, hỏi kỹ trước khi đặt, đi cùng người dẫn được cấp phép, mang theo chuyện bác Hồ Khanh."),
      ] },
    { id: "s31", module: "QUIZ-01", ref: "questions[1]",
      data: {
        q: "What is the main difference between Phong Nha and Ha Long Bay?",
        options: [
          "There is no difference, because both are islands surrounded by deep ocean",
          "Ha Long is made of granite, while Phong Nha is made of sand and clay",
          "Ha Long is limestone drowned by the sea, Phong Nha is limestone inland with caves",
        ],
        correct: 2, countdown: 5, illus: "national-park",
        why: "Cả hai là đá vôi; Hạ Long bị biển nhấn chìm, Phong Nha là núi trong đất liền có hang.",
      },
      lines: [
        L("l1", null, "What is the main difference between Phong Nha and Ha Long Bay?", "Khác biệt chính giữa Phong Nha và Hạ Long là gì?"),
        L("l2", null, "Ha Long is limestone drowned by the sea, Phong Nha is limestone inland with caves.", "Hạ Long là đá vôi bị biển nhấn chìm, Phong Nha là đá vôi trong đất liền có hang."),
      ],
      beats: { after: 600 } },
    { id: "s32", module: "END-05", data: { text: "Bốn mươi câu về Phong Nha", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [
        L("l1", "det", "Send the four check questions to your group before choosing a tour. Then try the forty questions below.", "Gửi bốn câu hỏi kiểm tra cho cả đoàn trước khi chọn tour. Rồi thử bốn mươi câu bên dưới."),
      ] },
  ],
};
