// Kịch bản video W lần 3 (#110) — "Thánh địa Mỹ Sơn và văn hóa Chăm" · chuỗi "Di sản và du lịch Việt Nam"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "my-son-sanctuary-and-cham-culture--w01",
  hook: "HOOK-03",
  loop: { open: "s01", close: "s24" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "heritage-travellers", slug: "my-son-sanctuary-and-cham-culture", door: "kien-thuc", level: "B1",
    title: "Thánh địa Mỹ Sơn và văn hóa Chăm", series: "Di sản và du lịch Việt Nam" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên (#110): “bạn” muốn leo bệ tháp chụp ảnh (❓ p19) → Dũng; người dẫn, nói câu mở đầu ở cổng (p4) và người đi xem lễ Katê (🔀 p23) → Thảo; trẻ được đố tìm vữa, được chỉ hố bom (p10, p15) → Bé Bin (vai mới); du khách nghe ba câu tiếng Anh (p25) và người cùng xem lễ hội → Sam (vai mới, lên hình). Người trong ban tổ chức lễ Katê không lên hình (lời người kể). Câu treo ở s01 (leo lên một chút thì có sao?) được trả lời ở DLG-01 s21. Phủ ý: 25/25. Hai DLG-01 (⚖️ p15, ❓ p19). Câu đố cuối questions[10].",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "p19",
      data: { set: "heritage", label: "Ở Mỹ Sơn", actors: [{ id: "dung", side: "left" }, { id: "thao", side: "right" }], props: ["brick"] },
      lines: [
        L("l1", "dung", "Look, this fallen tower base is like a stage!", "Nhìn kìa, bệ tháp đổ trông như sân khấu!", { face: "happy", pose: "point" }),
        L("l2", "dung", "The bricks have stood here for centuries. A quick photo up there is fine, right?", "Gạch đứng cả trăm năm rồi. Leo lên chụp một chút thì có sao?", { pose: "phone", react: { thao: "thinking" } }),
        L("l3", null, "What would you do?", "Nếu là bạn, bạn sẽ làm gì?", { wait: 400 }),
      ],
      beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Mỹ Sơn: mỗi phế tích một câu chuyện", pose: "present", items: ["Thánh địa của vương quốc Champa", "Đền tháp thờ thần Shiva", "Khoảng chín thế kỷ xây dựng"] },
      lines: [
        L("l1", "det", "Is My Son just a pile of fallen bricks under the sun? No.", "Mỹ Sơn chỉ là đống gạch đổ giữa nắng? Không phải."),
        L("l2", "det", "It's the sanctuary of the Champa kingdom.", "Đó là thánh địa của vương quốc Champa."),
        L("l3", "det", "Cham kings built temples here to worship Shiva.", "Các vua Chăm dựng đền tháp thờ thần Shiva."),
        L("l4", "det", "Over about nine centuries. Every brick, every ruin has a story.", "Qua khoảng chín thế kỷ. Mỗi viên gạch, mỗi phế tích đều có chuyện."),
      ] },
    { id: "s03", module: "HOST-01",
      data: { title: "Lộ trình", pose: "point", items: ["Champa, thung lũng thiêng", "Nhìn gì, vì sao tháp đổ", "Đi đúng cách, văn hóa Chăm hôm nay"] },
      lines: [
        L("l1", "det", "Our route: who the Cham were, and why this valley.", "Lộ trình: Champa là ai, vì sao chọn thung lũng này."),
        L("l2", "det", "What to look at, and why towers fell.", "Nhìn vào đâu, và vì sao tháp đổ."),
        L("l3", "det", "How to visit, and Cham culture today.", "Đi sao cho đúng, và văn hóa Chăm hôm nay."),
      ] },

    // Chương 1 — Champa là ai
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Champa là ai, Mỹ Sơn là gì?" },
      lines: [L("l1", "det", "Part one: who were the Champa, and what is My Son?", "Phần một: Champa là ai, và Mỹ Sơn là gì?")] },
    { id: "s05", module: "LIST-13", ref: "p1,p2",
      data: { title: "Champa và Mỹ Sơn", items: [
        { title: "Vương quốc Champa", detail: "Hơn nghìn năm ở miền Trung; giỏi đi biển, buôn bán; ảnh hưởng Ấn Độ.", illus: "sailboat" },
        { title: "Thánh địa Mỹ Sơn", detail: "Đền tháp chủ yếu thờ Shiva, thế kỷ IV–XIII.", illus: "classical-building" },
        { title: "Kinh đô cổ Trà Kiệu", detail: "Ở không xa; vua sống ở kinh đô, không ở Mỹ Sơn.", illus: "crown" } ] },
      lines: [
        L("l1", null, "Champa was an ancient kingdom on today's central coast, for over a thousand years.", "Champa là vương quốc cổ hơn nghìn năm trên dải đất miền Trung."),
        L("l2", null, "The Cham were great sailors and traders. Their religion, writing and art came strongly from India.", "Người Chăm giỏi đi biển, buôn bán; tôn giáo, chữ viết, nghệ thuật chịu ảnh hưởng Ấn Độ."),
        L("l3", null, "My Son was their most important religious centre. Kings built temples mainly for the Hindu god Shiva, from the fourth to the thirteenth century.", "Mỹ Sơn là trung tâm tôn giáo quan trọng nhất, đền tháp chủ yếu thờ Shiva, thế kỷ IV đến XIII."),
        L("l4", null, "It was a sanctuary for ceremonies, not a palace. The old capital, Tra Kieu, is nearby.", "Đây là thánh địa để hành lễ, không phải cung điện. Kinh đô cổ Trà Kiệu ở gần đó."),
      ] },
    { id: "s06", module: "TEXT-04", ref: "p3",
      data: { text: "UNESCO ghi danh năm 1999: minh chứng giao lưu văn hóa bản địa và Ấn Độ ở Đông Nam Á.", marks: ["giao lưu"], illus: "classical-building" },
      lines: [
        L("l1", null, "My Son is in old Quang Nam, now part of Da Nang city.", "Mỹ Sơn thuộc vùng Quảng Nam cũ, nay thuộc thành phố Đà Nẵng."),
        L("l2", null, "UNESCO listed it in nineteen ninety nine, as proof of how local and Indian cultures met in Southeast Asia.", "UNESCO ghi danh năm 1999, minh chứng giao lưu văn hóa bản địa và Ấn Độ ở Đông Nam Á."),
      ] },
    { id: "s07", module: "SCENE-01", ref: "p4",
      data: { set: "heritage", label: "Ở cổng thánh địa", actors: [{ id: "sam", side: "left" }, { id: "thao", side: "right" }] },
      lines: [
        L("l1", "thao", "This was the holiest place of a kingdom that lasted over a thousand years, right here in central Vietnam.", "Đây là nơi linh thiêng nhất của một vương quốc hơn nghìn năm ngay trên đất miền Trung.", { pose: "explain", face: "happy", to: "sam", react: { sam: "surprised" } }),
        L("l2", "sam", "A thousand years? Tell me more.", "Một nghìn năm à? Kể thêm đi.", { face: "happy", to: "thao" }),
        L("l3", null, "One opening sentence, and your companion wants to know more.", "Một câu mở đầu, người đi cùng đã muốn nghe tiếp."),
      ] },

    // Chương 2 — Vì sao thung lũng này
    { id: "s08", module: "HOST-03", data: { n: 2, of: 6, title: "Vì sao dựng tháp ở thung lũng này?" },
      lines: [L("l1", "det", "Part two: why build towers in this valley?", "Phần hai: vì sao lại dựng tháp trong thung lũng này?")] },
    { id: "s09", module: "CMP-01", ref: "p5,p6",
      data: { labels: ["Thung lũng kín", "Núi Hòn Quắp (Răng Mèo)"], left: "Núi đồi bao quanh, suối chảy qua, tách biệt đời thường", right: "Được xem là núi thiêng trong vũ trụ quan Hindu", illus: ["national-park", "mountain"] },
      lines: [
        L("l1", null, "My Son is a closed valley, ringed by hills, with a stream, far from daily life.", "Mỹ Sơn là thung lũng kín, núi đồi bao quanh, có suối, tách biệt đời thường."),
        L("l2", null, "Quiet and separate: right for a sanctuary, where kings held ceremonies and worshipped.", "Không gian ấy hợp với thánh địa, nơi vua hành lễ, thờ cúng thần linh."),
        L("l3", null, "The tallest mountain, Hon Quap or Cat's Tooth, is seen as a sacred mountain in Hindu beliefs. Point to it, and people understand.", "Ngọn cao nhất, Hòn Quắp hay Răng Mèo, là núi thiêng theo Hindu. Chỉ tay về đó là người nghe hiểu."),
      ] },

    // Chương 3 — Nhìn vào đâu
    { id: "s10", module: "HOST-03", data: { n: 3, of: 6, title: "Đến nơi, nhìn vào đâu?" },
      lines: [L("l1", "det", "Part three: once you arrive, where do you look?", "Phần ba: đến nơi rồi thì nhìn vào đâu?")] },
    { id: "s11", module: "TEXT-06", ref: "p7",
      data: { term: "kalan", pos: "tháp chính", meaning: "Nơi đặt bộ linga – yoni, biểu tượng thần Shiva và sự sinh sôi", example: "The kalan door faces east.", illus: "classical-building" },
      lines: [
        L("l1", null, "The main tower is called a kalan.", "Tháp chính gọi là kalan."),
        L("l2", null, "Inside is a linga and yoni, symbols of Shiva and of fertility.", "Bên trong đặt bộ linga – yoni, biểu tượng của Shiva và sự sinh sôi."),
        L("l3", null, "Its door usually faces east, towards the rising sun.", "Cửa tháp thường quay về hướng đông, hướng mặt trời mọc."),
      ] },
    { id: "s12", module: "LIST-02", ref: "p9",
      data: { title: "Nhìn gần tường tháp", illus: "brick",
        items: [{ icon: "woman-dancing", illus: "woman-dancing", text: "Hoa văn, vũ nữ chạm thẳng lên gạch sau khi xây" }, { icon: "scroll", illus: "scroll", text: "Bia ký chữ Phạn, chữ Chăm cổ" }, { icon: "fire", illus: "fire", text: "Đền đầu tiên bằng gỗ, cháy rồi xây lại bằng gạch" }] },
      lines: [
        L("l1", null, "Patterns, dancers and gods were carved straight into the brick, after the walls were built.", "Hoa văn, vũ nữ, thần linh chạm thẳng lên gạch sau khi tường xây xong."),
        L("l2", null, "Stone inscriptions in Sanskrit and old Cham record kings' names and offerings.", "Bia ký chữ Phạn và chữ Chăm cổ ghi tên vua, việc dâng cúng."),
        L("l3", null, "They say the first temple, by King Bhadravarman, was wood. It burned, and was rebuilt in brick.", "Theo bia ký, đền đầu tiên do vua Bhadravarman dựng bằng gỗ, cháy rồi xây lại bằng gạch."),
      ] },
    { id: "s13", module: "OPEN-16", ref: "p8,p10",
      data: { fact: "Gạch tháp Chăm xếp khít gần như không thấy vữa, mà tháp đứng hơn nghìn năm.", illus: "brick" },

      lines: [
        L("l1", null, "Did you know? Almost no mortar, yet many towers have stood over a thousand years.", "Bạn có biết: gần như không vữa, mà nhiều tháp đứng hơn nghìn năm."),
        L("l2", null, "Many researchers think the faces were rubbed flat and stuck with tree resin. It's still being studied.", "Nhiều người cho là mài phẳng mặt gạch, gắn bằng nhựa cây; đến nay vẫn còn nghiên cứu."),

      ] },
    { id: "s14", module: "SCENE-01", ref: "p10,p11",
      data: { set: "heritage", label: "Đố tìm lớp vữa", actors: [{ id: "bin", side: "center" }, { id: "thao", side: "right" }], props: ["brick"] },
      lines: [
        L("l1", "thao", "Bin, can you find the mortar between two bricks?", "Bin ơi, cháu tìm được lớp vữa giữa hai viên gạch không?", { pose: "point", to: "bin" }),
        L("l2", "bin", "I can't see any! How do they stick together?", "Không thấy đâu cả! Sao nó dính được ạ?", { face: "surprised", pose: "think", to: "thao" }),
        L("l3", null, "Look very closely at one brick, and a whole civilisation appears.", "Nhìn thật gần một viên gạch, cả nền văn minh hiện ra."),
      ] },

    // Chương 4 — Vì sao chỉ còn nền
    { id: "s15", module: "HOST-03", data: { n: 4, of: 6, title: "Vì sao nhiều tháp chỉ còn nền?" },
      lines: [L("l1", "det", "Part four: why are many towers only foundations?", "Phần bốn: vì sao nhiều tháp chỉ còn nền móng?")] },
    { id: "s16", module: "NUM-06", ref: "p12,p13,p14",
      data: { title: "Mỹ Sơn qua thế kỷ XX", illus: "classical-building", illusEach: "spiral-calendar",
        events: [{ date: "Cuối thế kỷ XIX", label: "Học giả Pháp khảo sát, chia nhóm A, B, C, D" },
          { date: "Giữa thế kỷ XX", label: "Nhiều tháp vẫn khá nguyên vẹn" },
          { date: "Trong chiến tranh", label: "Bom đạn tàn phá; còn hố bom cạnh tháp", illus: "bomb" },
          { date: "Sau chiến tranh", label: "Kazimierz Kwiatkowski và chuyên gia Việt gia cố" },
          { date: "Về sau", label: "Dự án hợp tác với Ý và Ấn Độ" }],
        source: "UNESCO, My Son Sanctuary" },
      lines: [
        L("l1", null, "In the late nineteenth century, French scholars studied the site and named tower groups with letters: A, B, C, D.", "Cuối thế kỷ 19, học giả Pháp khảo sát, đặt tên các nhóm tháp theo chữ cái A, B, C, D."),
        L("l2", null, "By the mid twentieth century, many towers were still fairly whole.", "Đến giữa thế kỷ 20, nhiều tháp vẫn khá nguyên vẹn."),
        L("l3", null, "In the war, bombs destroyed many of the finest. Old bomb craters, now grassy, lie beside some groups.", "Trong chiến tranh, bom đạn làm nhiều tháp đẹp nhất sụp đổ. Cạnh vài nhóm còn hố bom, nay phủ cỏ."),
        L("l4", null, "After the war, Polish architect Kazimierz Kwiatkowski and Vietnamese experts spent years saving it. Later came projects with Italy and India.", "Sau chiến tranh, kiến trúc sư Ba Lan Kazimierz Kwiatkowski cùng chuyên gia Việt gia cố nhiều năm; sau có dự án với Ý, Ấn Độ."),
        L("l5", null, "Conservators keep what is real, rather than build new copies.", "Người bảo tồn chủ ý giữ dấu vết thật thay vì xây mới."),
      ] },
    { id: "s17", module: "DLG-01", ref: "p15,p16",
      data: { set: "heritage", label: "Bên một hố bom", actors: [{ id: "bin", side: "center" }, { id: "thao", side: "right" }],
        verdict: { ok: false, label: "Tháp đổ chỉ vì quá cũ", why: "Giữa thế kỷ XX nhiều tháp còn khá nguyên vẹn; bom đạn chiến tranh làm chúng sụp đổ." } },
      lines: [
        L("l1", "bin", "Why did this tower fall down, Auntie?", "Sao tháp này đổ vậy cô?", { face: "thinking", to: "thao" }),
        L("l2", "thao", "Oh, it's just very old. Centuries of rain and sun.", "À, tại nó cũ quá thôi. Mưa nắng cả trăm năm.", { pose: "shrug", to: "bin", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Until the mid twentieth century, many towers stood fairly whole. Bombs in the war brought the finest down.", "Đến giữa thế kỷ 20 nhiều tháp còn khá nguyên vẹn. Bom đạn chiến tranh làm chúng sụp đổ."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "thao", "See this round hole covered in grass? A bomb fell here, in the war.", "Thấy cái hố tròn phủ cỏ này không? Bom rơi xuống đây hồi chiến tranh.", { phase: "redo", pose: "point", to: "bin" }),
        L("l7", "bin", "Oh... so that's why the towers broke.", "Ồ… vậy ra tháp đổ vì thế.", { phase: "redo", face: "surprised", to: "thao" }),
        L("l8", "det", "A bomb crater beside a tower tells the story better than any lecture.", "Hố bom cạnh tháp kể chuyện rõ hơn mọi lời giảng.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },

    // Chương 5 — Đi cho đỡ nắng, đỡ mệt
    { id: "s18", module: "HOST-03", data: { n: 5, of: 6, title: "Đi cho đỡ nắng, đỡ mệt" },
      lines: [L("l1", "det", "Part five: how to avoid the heat and stay fresh.", "Phần năm: đi thế nào cho đỡ nắng, đỡ mệt?")] },
    { id: "s19", module: "CMP-06", ref: "p17",
      data: { do: ["Từ Hội An đi sáng sớm, về trong ngày", "Kiểm tra giờ mở cửa, quy định trước"], dont: ["Đến giữa trưa nắng gắt"], doIcons: ["sunrise", "mobile-phone"], dontIcons: ["sun"] },
      lines: [
        L("l1", null, "My Son sits in a valley. At noon it's very hot.", "Mỹ Sơn nằm giữa thung lũng, trưa rất nóng."),
        L("l2", null, "Many people leave Hoi An early in the morning, and come back the same day.", "Nhiều người đi từ Hội An sáng sớm rồi về trong ngày."),
        L("l3", null, "Opening hours and rules are set by the site managers. Check them first.", "Giờ mở cửa, quy định do ban quản lý đặt ra, hãy kiểm tra trước."),
      ] },
    { id: "s20", module: "LIST-05", ref: "p18",
      data: { title: "Mang theo, mặc gì", items: ["Mũ rộng vành, nước uống", "Giày đi bộ thoải mái", "Quần áo kín vai, gối: từng là nơi thờ tự", "Đi đúng lối, không trèo tháp, tường gạch"], illus: "backpack" },
      lines: [
        L("l1", null, "A wide hat and water. Comfortable walking shoes.", "Mũ rộng vành, nước uống. Giày đi bộ thoải mái."),
        L("l2", null, "Clothes covering shoulders and knees. This was a place of worship.", "Quần áo kín vai, gối, vì đây từng là nơi thờ tự."),
        L("l3", null, "And stay on the paths. Don't climb towers or brick walls.", "Và đi đúng lối, không trèo lên tháp hay tường gạch."),
      ] },
    { id: "s21", module: "DLG-01", ref: "p19,p20",
      data: { set: "heritage", label: "Quay lại bệ tháp", actors: [{ id: "dung", side: "left" }, { id: "thao", side: "right" }],
        verdict: { ok: false, label: "Leo lên bệ tháp chụp ảnh", why: "Gạch qua trăm năm và bom đạn đã lỏng: người ngã, phế tích mất một mảng không gì thay được.",
          rule: "Đi đúng lối, không trèo lên tháp hay tường gạch" } },
      lines: [
        L("l1", "dung", "Just one quick photo up there!", "Leo lên chụp một tấm thôi!", { face: "happy", pose: "wave", stop: true }),
        L("l2", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l3", "det", "Exactly because they're centuries old, and survived bombs, many bricks are loose. One step, you fall, and the ruin loses a piece forever.", "Chính vì qua trăm năm, lại chịu bom đạn, gạch đã lỏng. Một bước: người ngã, phế tích mất một mảng mãi mãi."),
        L("l4", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l5", "dung", "I'll find a good angle from the path.", "Mình tìm góc đẹp ngay từ lối đi vậy.", { phase: "redo", pose: "phone", face: "happy" }),
        L("l6", "thao", "Good. Ruins are not steps for photos.", "Đúng rồi. Phế tích không phải bậc để chụp ảnh.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },

    // Chương 6 — Văn hóa Chăm hôm nay
    { id: "s22", module: "HOST-03", data: { n: 6, of: 6, title: "Văn hóa Chăm hôm nay" },
      lines: [L("l1", "det", "Last part: where is Cham culture today?", "Phần cuối: văn hóa Chăm hôm nay còn ở đâu?")] },
    { id: "s23", module: "LIST-08", ref: "p21,p22",
      data: { title: "Văn hóa Chăm còn sống", items: [
        { title: "Người Chăm hôm nay", detail: "Chủ yếu ở Nam Trung Bộ và Nam Bộ", illus: "world-map" },
        { title: "Lễ hội Katê", detail: "Tại các tháp như Po Klong Garai, tưởng nhớ thần linh, tổ tiên", illus: "drum" },
        { title: "Gốm Bàu Trúc", detail: "Nặn tay, không bàn xoay, nung lộ thiên; UNESCO cần bảo vệ khẩn cấp", illus: "amphora" },
        { title: "Thổ cẩm, tháp Chăm", detail: "Dệt Mỹ Nghiệp; Tháp Bà Po Nagar ở Nha Trang", illus: "thread" }] },
      lines: [
        L("l1", null, "Champa is no longer a kingdom, but Cham people live mainly on the south central coast and in the south.", "Champa không còn là vương quốc, nhưng người Chăm vẫn sống chủ yếu ở Nam Trung Bộ, Nam Bộ."),
        L("l2", null, "The Kate festival, held at towers like Po Klong Garai, remembers gods and ancestors.", "Lễ hội Katê, tại các tháp như Po Klong Garai, tưởng nhớ thần linh và tổ tiên."),
        L("l3", null, "Bau Truc pottery is shaped by hand, with no wheel, and fired in the open air. UNESCO lists it as needing urgent protection.", "Gốm Bàu Trúc nặn tay, không bàn xoay, nung lộ thiên; UNESCO đưa vào danh sách cần bảo vệ khẩn cấp."),
        L("l4", null, "There's also My Nghiep weaving, and the Po Nagar towers in Nha Trang.", "Còn có dệt thổ cẩm Mỹ Nghiệp, và Tháp Bà Po Nagar ở Nha Trang."),
      ] },
    { id: "s24", module: "SCENE-03", ref: "p23,p24",
      data: { set: "heritage", actors: [{ id: "sam", side: "left" }, { id: "thao", side: "right" }],
        left: { label: "Tiến sát để chụp", ok: false }, right: { label: "Hỏi ban tổ chức trước", ok: true } },
      lines: [
        L("a1", "sam", "The elders in white! Let's get really close for a clear shot.", "Các vị chức sắc áo trắng kìa! Lại thật gần chụp cho rõ.", { phase: "a", face: "happy", pose: "phone", to: "thao" }),
        L("a2", "thao", "Hmm, we're blocking the way. People look upset.", "Ơ, mình chắn lối rồi. Người dự lễ có vẻ khó chịu.", { phase: "a", face: "worried", to: "sam" }),
        L("b1", "thao", "Let's ask an organiser first where we can stand.", "Mình hỏi ban tổ chức trước nên đứng ở đâu nhé.", { phase: "b", pose: "explain", to: "sam" }),
        L("b2", "sam", "They showed us a spot, explained the ritual, and invited us to watch the dance!", "Họ chỉ chỗ đứng, giải thích nghi lễ, còn mời ở lại xem múa!", { phase: "b", face: "happy", pose: "thumb", to: "thao" }),
        L("b3", null, "For them, it's a time to remember gods and ancestors. At someone else's festival, ask before you raise your camera.", "Với họ, đây là lúc tưởng nhớ thần linh, tổ tiên. Lễ hội của người khác, xin phép trước khi giơ máy."),
      ] },
    { id: "s25", module: "HOST-01", ref: "p25",
      data: { title: "Ba câu tiếng Anh ở Mỹ Sơn", pose: "present", items: ["The towers were built to worship Shiva.", "The bricks fit together almost perfectly.", "Many towers were damaged during the war."] },
      lines: [
        L("l1", "det", "Three short English sentences for your guests.", "Ba câu tiếng Anh ngắn để kể cho khách."),
        L("l2", "det", "The towers were built to worship Shiva.", "Các tháp được dựng để thờ thần Shiva."),
        L("l3", "det", "The bricks fit together almost perfectly.", "Gạch ghép khít gần như hoàn hảo."),
        L("l4", "det", "Many towers were damaged during the war.", "Nhiều tháp bị hư hại trong chiến tranh."),
      ] },

    // Tổng kết + câu đố + kết
    { id: "s26", module: "END-02", ref: "outro",
      data: { points: ["Thánh địa của một vương quốc nghìn năm", "Nhìn gần viên gạch, đọc dấu bom", "Đi sáng sớm, giữ chân trên lối đi"], icons: ["classical-building", "brick", "sunrise"] },
      lines: [
        L("l1", null, "My Son is not a pile of bricks. It's the sanctuary of a thousand-year kingdom.", "Mỹ Sơn không phải đống gạch đổ, mà là thánh địa của một vương quốc nghìn năm."),
        L("l2", null, "Look closely at the bricks, read the bomb marks, go early, and keep to the path.", "Nhìn gần viên gạch, đọc dấu bom, đi sáng sớm, giữ chân trên lối đi."),
      ] },
    { id: "s27", module: "QUIZ-01", ref: "questions[10]",
      data: {
        q: "What is surprising about the bricks of the Cham towers?",
        options: [
          "They fit so tightly that you can hardly see any mortar between them",
          "They are modern bricks that were added last year for tourists",
          "They are made of gold, which is why the towers shine in the sun",
        ],
        correct: 0, countdown: 5, illus: "brick",
        why: "Gạch xếp khít đến mức hầu như không thấy vữa.",
      },
      lines: [
        L("l1", null, "What is surprising about the bricks of the Cham towers?", "Điều gì đáng ngạc nhiên ở gạch tháp Chăm?"),
        L("l2", null, "They fit so tightly that you can hardly see any mortar between them.", "Gạch khít đến mức hầu như không thấy vữa."),
        L("l3", null, "And how they were joined is still being studied.", "Và kỹ thuật kết dính vẫn còn được nghiên cứu."),
      ],
      beats: { after: 600 } },
    { id: "s28", module: "END-05", data: { text: "Bốn mươi câu về Mỹ Sơn và Champa", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Save your opening sentence for the gate. Now try the forty questions below.", "Lưu sẵn câu mở đầu để nói ở cổng. Giờ thử bốn mươi câu bên dưới nhé.")] },
  ],
};
