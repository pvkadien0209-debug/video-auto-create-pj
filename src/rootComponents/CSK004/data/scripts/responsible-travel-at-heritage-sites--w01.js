// Kịch bản video W lần 3 (#110) — "Du lịch có trách nhiệm tại các di sản" · chuỗi "Di sản và du lịch Việt Nam"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "responsible-travel-at-heritage-sites--w01",
  hook: "HOOK-01",
  loop: { open: "s01", close: "s30" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "heritage-travellers", slug: "responsible-travel-at-heritage-sites", door: "kien-thuc", level: "B1",
    title: "Du lịch có trách nhiệm tại các di sản", series: "Di sản và du lịch Việt Nam" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên (#110): khách chìa bánh cho khỉ (❓ p15), người đứng lên bệ đá chụp ảnh (🔀 p23), người viết tên lên tường (⚖️ p10) → Dũng; “bạn” (người nhắc) → Thảo; đứa trẻ được giải thích luật, đòi nhặt vỏ sò (🧪 p6, p13) → Bé Bin (vai mới); người lớn quen tay vịn cột (🧪 p6) → Bà Tư (vai mới); người bạn nước ngoài được nhắc bằng tiếng Anh (p22) → Sam (vai mới, lên hình). Câu treo s01 (đàn khỉ sẽ ra sao?) được trả lời bằng câu đố questions[21] ở chương 4. Bốn câu tiếng Anh mẫu p22 đọc nguyên văn. Mức phạt cụ thể không nêu (bài chỉ nói “có thể bị xử phạt theo quy định”). Phủ ý: 24/24. Hai DLG-01 (⚖️ p10, 🔀 p23). Câu đố cuối questions[3].",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "p15",
      data: { set: "park", label: "Trên một hòn đảo", actors: [{ id: "dung", side: "left" }, { id: "thao", side: "right" }], props: ["monkey"] },
      lines: [
        L("l1", "dung", "Here, little monkey! Have a biscuit!", "Này khỉ con, ăn bánh không!", { face: "happy", pose: "give" }),
        L("l2", "thao", "Everyone feeds them. It's kind, isn't it?", "Ai cũng cho chúng ăn. Thương mà, nhỉ?", { face: "thinking", react: { dung: "happy" } }),
        L("l3", null, "Visitors do this every day. What will these monkeys be like in a few months?", "Ngày nào khách cũng làm vậy. Vài tháng sau, đàn khỉ sẽ ra sao?", { wait: 300 }),
      ],
      beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Đi sao cho di sản còn nguyên", pose: "present", items: ["Không chạm, không trèo, chỉ mang về ảnh", "Ăn mặc, cư xử đúng nơi thờ tự", "Tiêu tiền cho người địa phương", "Nhắc nhau nhẹ nhàng, có lý do"] },
      lines: [
        L("l1", "det", "What does responsible travel really mean? Don't touch, don't climb, take home only photos.", "Du lịch có trách nhiệm là gì? Không chạm, không trèo, chỉ mang về ảnh."),
        L("l2", "det", "Dress and behave right in places of worship.", "Ăn mặc, cư xử đúng ở nơi thờ tự."),
        L("l3", "det", "Spend your money with local people.", "Tiêu tiền cho người địa phương."),
        L("l4", "det", "And remind each other gently, with a reason.", "Và nhắc nhau nhẹ nhàng, có lý do."),
      ] },
    { id: "s03", module: "HOST-01",
      data: { title: "Lộ trình", pose: "point", items: ["Vì sao việc nhỏ cũng hại, chuẩn bị gì", "Cung điện, phố cổ; vịnh, hang, rừng; nơi thờ tự", "Tiêu tiền, và nhắc khéo"] },
      lines: [
        L("l1", "det", "Our route: why small acts matter, and how to prepare.", "Lộ trình: vì sao việc nhỏ cũng hại, và chuẩn bị gì."),
        L("l2", "det", "Palaces and old towns, bays, caves, forests, and temples.", "Cung điện, phố cổ; vịnh, hang, rừng; đền chùa đang thờ tự."),
        L("l3", "det", "Spending money well, and reminding people kindly.", "Tiêu tiền sao cho đúng, và nhắc sao cho khéo."),
      ] },

    // Chương 1 — Một hành động nhỏ
    { id: "s04", module: "HOST-03", data: { n: 1, of: 7, title: "Một hành động nhỏ thì hại gì?" },
      lines: [L("l1", "det", "Part one: what harm can one small act do?", "Phần một: một hành động nhỏ thì hại gì?")] },
    { id: "s05", module: "REL-01", ref: "p1",
      data: { cause: "Hàng nghìn bàn tay chạm vào cột gỗ, đá, thạch nhũ", effect: "Gỗ mòn bóng, đá đổi màu, thạch nhũ ngừng phát triển", causeIllus: "raised-hand", effectIllus: "wood" },
      lines: [
        L("l1", null, "One touch is nothing. But oil from thousands of hands wears wooden pillars smooth.", "Chạm một lần thì không sao. Nhưng dầu trên tay hàng nghìn người làm gỗ mòn bóng."),
        L("l2", null, "Stone changes colour, and stalactites stop growing.", "Đá đổi màu, thạch nhũ ngừng phát triển."),
      ] },
    { id: "s06", module: "CMP-04", ref: "p2",
      data: { statement: "Thạch nhũ gãy sẽ sớm mọc lại, tháp đổ thì xây lại như xưa", truth: false, why: "Thạch nhũ cần thời gian rất dài; tháp gạch cổ đã sụp không thể xây lại đúng như xưa", illus: "rock" },
      lines: [
        L("l1", null, "Many things can't be repaired. A broken stalactite won't grow back in our lifetime.", "Nhiều thứ không phục hồi được. Thạch nhũ gãy không mọc lại trong đời mình."),
        L("l2", null, "And a fallen ancient tower can't be rebuilt exactly as it was.", "Tháp gạch cổ đã sụp không xây lại đúng như xưa."),
      ] },
    { id: "s07", module: "TEXT-02", ref: "p3",
      data: { text: "Không để lại gì ngoài dấu chân, không mang về gì ngoài ảnh và kỷ niệm.", keywords: ["dấu chân", "ảnh"], illus: "footprints" },
      lines: [L("l1", null, "The easy rule: leave nothing but footprints, take nothing but photos and memories.", "Nguyên tắc dễ nhớ: không để lại gì ngoài dấu chân, không mang về gì ngoài ảnh và kỷ niệm.")] },

    // Chương 2 — Chuẩn bị
    { id: "s08", module: "HOST-03", data: { n: 2, of: 7, title: "Trước chuyến đi chuẩn bị gì?" },
      lines: [L("l1", "det", "Part two: what to prepare before the trip.", "Phần hai: trước chuyến đi nên chuẩn bị gì?")] },
    { id: "s09", module: "LIST-05", ref: "p4",
      data: { title: "Bỏ vào ba lô", items: ["Chai nước cá nhân, bớt đồ nhựa một lần", "Một túi nhỏ đựng rác mang về", "Quần áo kín vai, gối cho nơi thờ tự", "Giày đi bộ chắc chân"], illus: "backpack" },
      lines: [
        L("l1", null, "A reusable water bottle, and less single-use plastic.", "Chai nước cá nhân, hạn chế đồ nhựa dùng một lần."),
        L("l2", null, "A small bag to carry your rubbish back.", "Một túi nhỏ đựng rác mang về."),
        L("l3", null, "Clothes covering shoulders and knees, and solid walking shoes.", "Quần áo kín vai, gối, và giày đi bộ chắc chân."),
      ] },
    { id: "s10", module: "SCENE-01", ref: "p5,p6",
      data: { set: "home", label: "Tối trước chuyến đi Huế", actors: [{ id: "bin", side: "center" }, { id: "thao", side: "right" }], props: ["framed-picture"] },
      lines: [
        L("l1", null, "Remind your family before the trip, not when someone gets it wrong. With children, a reason works better than a ban.", "Nhắc từ trước chuyến đi, đừng đợi có người làm sai. Với trẻ, giải thích lý do hơn là cấm."),
        L("l2", "thao", "Every hand leaves a little oil. Too many hands, and the gold on the pillars peels off.", "Mỗi bàn tay để lại chút dầu. Nhiều tay quá, lớp vàng trên cột bong mất.", { pose: "explain", to: "bin" }),
        L("l3", "thao", "Try it: touch this glass, then look closely.", "Cháu thử chạm ngón tay vào mặt kính này rồi soi xem.", { pose: "point", to: "bin" }),
        L("l4", "bin", "I can see my fingerprint!", "Thấy dấu vân tay mờ mờ của cháu rồi!", { face: "surprised", pose: "point", to: "thao" }),
        L("l5", "thao", "Tomorrow, you're the one who reminds everyone.", "Mai cháu làm người nhắc cả nhà nhé.", { face: "happy", pose: "thumb", to: "bin", react: { bin: "happy" } }),
      ] },
    { id: "s11", module: "SCENE-01", ref: "p7",
      data: { set: "heritage", label: "Trong Đại Nội", actors: [{ id: "tu", side: "left", pose: "hold" }, { id: "bin", side: "center" }] },
      lines: [
        L("l1", "tu", "Let me lean on this pillar for a moment.", "Để bà vịn cột này một chút.", { face: "neutral", pose: "point", to: "bin" }),
        L("l2", "bin", "Grandma, no! Too many hands, and the gold comes off!", "Bà ơi đừng! Nhiều tay quá là lớp vàng bong mất!", { face: "surprised", pose: "stop", to: "tu", react: { tu: "happy" } }),
        L("l3", null, "When children understand the reason, they become the ones who remind everyone.", "Trẻ hiểu lý do, trẻ thành người nhắc cả nhà."),
      ] },

    // Chương 3 — Cung điện, phố cổ, tháp cổ
    { id: "s12", module: "HOST-03", data: { n: 3, of: 7, title: "Cung điện, phố cổ, tháp cổ" },
      lines: [L("l1", "det", "Part three: palaces, old towns and old towers.", "Phần ba: ở cung điện, phố cổ, tháp cổ cần giữ gì?")] },
    { id: "s13", module: "CMP-06", ref: "p8",
      data: { do: ["Đi đúng lối, nhất là khu trùng tu, phế tích", "Hỏi trước khi dùng flash ở phòng trưng bày"], dont: ["Chạm, tựa vào cột gỗ, tường gạch, tượng đá", "Leo lên tháp, tường thành, bệ đá chụp ảnh"],
        doIcons: ["footprints", "camera-with-flash"], dontIcons: ["raised-hand", "person-climbing"] },
      lines: [
        L("l1", null, "Don't touch or lean on wooden pillars, brick walls or stone statues.", "Không chạm, không tựa vào cột gỗ, tường gạch, tượng đá."),
        L("l2", null, "Don't climb towers, walls or stone bases for photos. Suggest a good spot from the path.", "Không leo lên tháp, tường thành, bệ đá để chụp. Gợi ý góc đẹp từ lối đi."),
        L("l3", null, "Stay on the path near restoration and ruins. Ask before using flash: strong light fades old materials.", "Đi đúng lối ở khu trùng tu, phế tích. Hỏi trước khi dùng flash: ánh sáng mạnh làm phai màu."),

      ] },
    { id: "s14", module: "DLG-01", ref: "p9,p10,p11",
      data: { set: "heritage", label: "Góc khuất di tích", actors: [{ id: "dung", side: "left" }, { id: "thao", side: "right" }],
        verdict: { ok: false, label: "Viết tên ở góc khuất làm kỷ niệm", why: "Gạch, đá, gỗ cổ xốp, mực ăn sâu; muốn xoá phải mài đi lớp gốc. Một dòng tên rủ thêm dòng khác.",
          rule: "Xâm hại di tích, có thể bị xử phạt" } },
      lines: [
        L("l1", "dung", "Nobody looks here. I'll just write my name, small, as a memory.", "Góc này chẳng ai nhìn. Viết tên nhỏ thôi, làm kỷ niệm.", { face: "happy", pose: "point", stop: true }),
        L("l2", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l3", "det", "Old brick and wood are porous. Ink sinks deep. Cleaning needs chemicals or grinding, which removes more of the original.", "Gạch, gỗ cổ xốp, mực ăn sâu. Muốn xoá phải dùng hoá chất, mài đi thêm lớp gốc."),
        L("l4", "det", "And one name invites more. It's damage to a historic site, and can be fined.", "Một dòng tên rủ thêm dòng khác. Đó là xâm hại di tích, có thể bị xử phạt."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "dung", "I'll take a photo here instead.", "Thôi, mình chụp một tấm ở đây vậy.", { phase: "redo", face: "happy", pose: "phone" }),
        L("l7", "thao", "Keep your memories in photos, not on the walls.", "Kỷ niệm để trong ảnh, đừng để trên tường.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },
    { id: "s15", module: "TEXT-04", ref: "p12",
      data: { text: "Phố cổ nhiều nhà vẫn có người ở: xin phép trước khi chụp, không tự ý vào nhà riêng.", marks: ["xin phép"], illus: "house" },
      lines: [
        L("l1", null, "In Hoi An and many old towns, people still live in the houses.", "Ở Hội An và nhiều phố cổ, nhiều nhà vẫn có người ở."),
        L("l2", null, "Ask before photographing residents, and don't walk into private parts of their homes.", "Xin phép trước khi chụp người dân, không tự ý bước vào phần nhà riêng."),
      ] },

    // Chương 4 — Vịnh, hang, rừng
    { id: "s16", module: "HOST-03", data: { n: 4, of: 7, title: "Ở vịnh, hang động, rừng" },
      lines: [L("l1", "det", "Part four: what about bays, caves and forests?", "Phần bốn: ở vịnh, hang động, rừng thì sao?")] },
    { id: "s17", module: "LIST-02", ref: "p13",
      data: { title: "Giữ thiên nhiên nguyên vẹn", illus: "national-park",
        items: [{ icon: "rock", illus: "rock", text: "Không bẻ, không chạm thạch nhũ" }, { icon: "spiral-shell", illus: "spiral-shell", text: "Không mang đá, vỏ sò, san hô về" },
          { icon: "ship", illus: "ship", text: "Chọn tàu, tour đúng quy định rác, nước thải" }, { icon: "bat", illus: "bat", text: "Giữ yên lặng trong rừng và hang" }] },
      lines: [
        L("l1", null, "Don't break or touch stalactites.", "Không bẻ, không chạm thạch nhũ."),
        L("l2", null, "Don't take stones, shells or coral home.", "Không mang đá, vỏ sò, san hô về làm kỷ niệm."),
        L("l3", null, "Choose boats and tours that follow the rules on rubbish and waste water.", "Chọn tàu, tour tuân thủ quy định về rác và nước thải."),
        L("l4", null, "Stay quiet. Bats, birds and other animals are sensitive to noise.", "Giữ yên lặng: dơi, chim, nhiều loài khác nhạy với tiếng ồn."),
      ] },
    { id: "s18", module: "SCENE-01", ref: "p13",
      data: { set: "park", label: "Bãi biển trong vịnh", actors: [{ id: "bin", side: "center" }, { id: "thao", side: "right" }], props: ["spiral-shell"] },
      lines: [
        L("l1", "bin", "What a pretty shell! Can I take it home?", "Vỏ sò đẹp quá! Cháu mang về được không?", { face: "happy", pose: "give", to: "thao" }),
        L("l2", "thao", "If everyone took one, this beach would slowly lose all its shells.", "Nếu ai cũng lấy một cái, bãi biển dần hết vỏ sò mất.", { pose: "explain", to: "bin" }),
        L("l3", "bin", "Then I'll take a photo of it!", "Vậy cháu chụp ảnh nó thôi!", { face: "happy", pose: "thumb", to: "thao" }),
      ] },
    { id: "s19", module: "QUIZ-01", ref: "questions[21],p15",
      data: {
        q: "What happens when monkeys on an island are fed by visitors every day?",
        options: [
          "They stop finding food in the forest and start grabbing bags from people",
          "Nothing changes, because wild monkeys never remember who gave them food",
          "They become shy and hide deep in the forest away from all visitors",
        ],
        correct: 0, countdown: 5, illus: "monkey",
        why: "Khỉ học được người là thức ăn; không được cho thì giật túi, cào hoặc cắn.",
      },
      lines: [
        L("l1", null, "Back to the monkeys. What happens when monkeys on an island are fed by visitors every day?", "Quay lại đàn khỉ: chuyện gì xảy ra khi chúng được khách cho ăn mỗi ngày?"),
        L("l2", null, "They stop finding food in the forest and start grabbing bags from people.", "Chúng bớt tự kiếm ăn trong rừng, và bắt đầu giật túi của người."),
        L("l3", null, "They learn people mean food. When they get none, some scratch or bite.", "Chúng học được người là thức ăn. Không được cho, có con cào, cắn người."),
      ],
      beats: { after: 500 } },
    { id: "s20", module: "LIST-13", ref: "p14,p16",
      data: { title: "Thương khỉ thì đứng xa", items: [
        { title: "Không cho động vật hoang dã ăn", detail: "Thức ăn của người làm chúng đổi tập tính, có thể hung dữ.", illus: "monkey" },
        { title: "Bị cào, cắn", detail: "Sơ cứu, rồi hỏi nhân viên y tế về việc tiêm phòng.", illus: "adhesive-bandage" } ] },
      lines: [
        L("l1", null, "Don't feed wild animals, even monkeys on islands. Human food changes their behaviour, and they can turn aggressive.", "Không cho động vật hoang dã ăn, kể cả khỉ. Thức ăn của người làm chúng đổi tập tính, có thể hung dữ."),
        L("l2", null, "If someone is scratched, give first aid, and ask medical staff about injections.", "Ai bị cào, cắn: sơ cứu, rồi hỏi nhân viên y tế về tiêm phòng."),
        L("l3", null, "If you love monkeys, watch from a distance. Keep your biscuits away.", "Thương khỉ thì đứng xa, đừng chìa bánh."),
      ] },
    { id: "s21", module: "HOST-02", ref: "p17",
      data: { statement: "Mặc áo phao, đi theo hướng dẫn viên trong hang chỉ để bảo vệ di sản", truth: false, why: "Các quy định ấy bảo vệ di sản, và bảo vệ cả chính bạn." },
      lines: [
        L("l1", "det", "Life jackets and following the cave guide only protect the heritage. True or false?", "Mặc áo phao, đi theo hướng dẫn viên chỉ để bảo vệ di sản. Đúng hay sai?"),
        L("l2", "det", "False. These rules protect the site, and they also keep you safe.", "Sai. Các quy định ấy bảo vệ di sản, và bảo vệ cả chính bạn.", { face: "wink" }),
      ] },

    // Chương 5 — Nơi thờ tự
    { id: "s22", module: "HOST-03", data: { n: 5, of: 7, title: "Ở đền, chùa, tháp đang thờ tự" },
      lines: [L("l1", "det", "Part five: how to behave where people still worship.", "Phần năm: ở đền, chùa, tháp đang thờ tự thì cư xử thế nào?")] },
    { id: "s23", module: "LIST-09", ref: "p18",
      data: { title: "Ở nơi đang thờ tự", illus: "place-of-worship", keywords: [
        { text: "Kín vai và gối", illus: "t-shirt" }, { text: "Bỏ mũ", illus: "billed-cap" }, { text: "Nói khẽ", illus: "shushing-face" },
        { text: "Không chắn người hành lễ", illus: "person-standing" }, { text: "Không chạm tượng, đồ lễ", illus: "raised-hand" }, { text: "Không ngồi lên bậc thờ", illus: "chair" } ] },
      lines: [
        L("l1", null, "Many heritage sites are still places of worship. Cover shoulders and knees, and take off your hat.", "Nhiều di sản vẫn là nơi thờ tự. Mặc kín vai, gối, bỏ mũ."),
        L("l2", null, "Speak softly, and don't block people who are praying.", "Nói khẽ, không đứng chắn người đang hành lễ."),
        L("l3", null, "Don't touch statues or offerings, or sit on altar steps. If a friend reaches out, explain gently.", "Không chạm tượng thờ, đồ lễ, không ngồi lên bậc thờ. Bạn định chạm thì nhắc nhẹ."),
      ] },
    { id: "s24", module: "TEXT-03", ref: "p19",
      data: { text: "Gặp lễ hội: quan sát từ xa, hỏi người tổ chức trước khi đến gần chụp.", illus: "drum" },
      lines: [L("l1", null, "At a festival like the Cham Kate, watch from a distance, and ask an organiser before you move closer for photos.", "Gặp lễ hội như Katê của người Chăm, quan sát từ xa, hỏi người tổ chức trước khi đến gần chụp.")] },

    // Chương 6 — Tiêu tiền
    { id: "s25", module: "HOST-03", data: { n: 6, of: 7, title: "Tiêu tiền cho người địa phương" },
      lines: [L("l1", "det", "Part six: how to spend so local people benefit.", "Phần sáu: tiêu tiền sao cho người địa phương được lợi?")] },
    { id: "s26", module: "LIST-08", ref: "p20",
      data: { title: "Tiền của bạn đến tay ai?", items: [
        { title: "Quán địa phương, homestay", detail: "Do người dân điều hành", illus: "house" },
        { title: "Mua thẳng ở làng nghề", detail: "Gốm, đèn lồng, thổ cẩm", illus: "red-paper-lantern" },
        { title: "Hướng dẫn viên địa phương", detail: "Có chuyện không có trong sách", illus: "speaking-head" },
        { title: "Mặc cả nhẹ nhàng", detail: "Đừng ép giá đến mức người bán không còn lời", illus: "handshake" }] },
      lines: [
        L("l1", null, "Eat at local places, and stay in homestays run by local people.", "Ăn ở quán địa phương, ở homestay do người dân điều hành."),
        L("l2", null, "Buy crafts straight from the makers: pottery, lanterns, woven cloth.", "Mua đồ thủ công thẳng ở làng nghề: gốm, đèn lồng, thổ cẩm."),
        L("l3", null, "Hire a local guide. They know stories you won't find in books.", "Thuê hướng dẫn viên địa phương: họ có chuyện không có trong sách."),
        L("l4", null, "And bargain gently. Don't push the price so low the seller earns nothing.", "Mặc cả nhẹ nhàng, đừng ép giá đến mức người bán không còn lời."),
      ] },
    { id: "s27", module: "SCENE-02", ref: "p21",
      data: { set: "room", label: "Trước khi đặt tour", actor: { id: "thao", side: "right" }, contact: { name: "Đơn vị tour", illus: "passenger-ship" },
        messages: [
          { from: "me", text: "Đoàn đi bao nhiêu người ạ?", at: "l2" },
          { from: "me", text: "Rác trên tàu xử lý thế nào ạ?", at: "l3" },
          { from: "me", text: "Bên mình có thuê người địa phương không ạ?", at: "l4" },
        ] },
      lines: [
        L("l1", "thao", "Is this tour responsible? Three questions first.", "Tour này có trách nhiệm không? Hỏi ba câu đã.", { face: "thinking" }),
        L("l2", "thao", "How many people are in the group?", "Đoàn đi bao nhiêu người ạ?"),
        L("l3", "thao", "How do you deal with rubbish on the boat?", "Rác trên tàu xử lý thế nào ạ?"),
        L("l4", "thao", "Do you hire local people?", "Bên mình có thuê người địa phương không ạ?"),
        L("l5", null, "A good company usually answers clearly.", "Đơn vị làm tốt thường trả lời rõ ràng."),
      ] },

    // Chương 7 — Nhắc khéo
    { id: "s28", module: "HOST-03", data: { n: 7, of: 7, title: "Nhắc sao cho khỏi mất lòng" },
      lines: [L("l1", "det", "Last part: how to remind people without offending them.", "Phần cuối: nhắc người khác thế nào cho khỏi mất lòng?")] },
    { id: "s29", module: "SCENE-01", ref: "p22",
      data: { set: "heritage", label: "Đi cùng Sam", actors: [{ id: "sam", side: "left" }, { id: "thao", side: "right" }] },
      lines: [
        L("l1", null, "Remind quietly, in private, with one reason. With a foreign friend, these sentences help.", "Nhắc nhỏ, riêng, kèm một lý do. Với bạn nước ngoài, mấy câu này rất dùng được."),
        L("l2", "thao", "Please don't touch the walls. They're very old.", "Bạn đừng chạm vào tường nhé, tường cũ lắm.", { pose: "explain", to: "sam" }),
        L("l3", "thao", "We're not allowed to climb on the towers.", "Ở đây không được trèo lên tháp đâu.", { pose: "explain", to: "sam" }),
        L("l4", "sam", "Is it okay to take photos here?", "Ở đây chụp ảnh được không?", { face: "thinking", pose: "phone", to: "thao" }),
        L("l5", "thao", "Yes. And let's take our rubbish with us.", "Được. Và mình mang rác theo nhé.", { face: "happy", pose: "thumb", to: "sam" }),
      ] },
    { id: "s30", module: "DLG-01", ref: "p23,p24",
      data: { set: "heritage", label: "Giữa sân di tích", actors: [{ id: "dung", side: "left", pose: "phone" }, { id: "thao", side: "right" }],
        verdict: { ok: false, label: "Nói to giữa sân", why: "Người bị nhắc mất mặt trước đám đông, dễ cãi lại, mà bệ đá vẫn bị đứng lên." } },
      lines: [
        L("l1", "dung", "Great spot! Let me stand on this stone base for a photo.", "Chỗ đẹp ghê! Đứng lên bệ đá này chụp tấm nào.", { face: "happy", pose: "phone" }),
        L("l2", "thao", "Hey! Can't you read the sign?", "Này! Không biết đọc biển à?", { face: "stern", pose: "point", stop: true, react: { dung: "surprised" } }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Shouting in front of a crowd makes people lose face. They argue back, and stay on the stone.", "Nói to giữa đám đông, người ta mất mặt, dễ cãi lại, mà vẫn đứng trên bệ."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l6", "thao", "This base is very old and breaks easily. The step below makes a nice photo too.", "Bệ này cũ lắm, đứng lên dễ vỡ. Chụp ở bậc dưới cũng đẹp ạ.", { phase: "redo", face: "happy", pose: "explain", to: "dung" }),
        L("l7", "dung", "Oh, I didn't know. Thank you!", "Ồ, mình không biết. Cảm ơn nhé!", { phase: "redo", face: "happy", pose: "thumb" }),
        L("l8", "det", "Come closer, speak quietly, give a reason and a better spot. Remind gently, and people listen.", "Lại gần, nói nhỏ, có lý do, có chỗ thay thế. Nhắc nhỏ, kèm lý do, người ta mới nghe.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },

    // Tổng kết + câu đố + kết
    { id: "s31", module: "END-02", ref: "outro",
      data: { points: ["Chuẩn bị từ trước, giữ tay chân đúng chỗ", "Tiêu tiền cho người địa phương", "Nhắc nhau nhẹ nhàng, có lý do"], icons: ["backpack", "handshake", "speech-balloon"] },
      lines: [
        L("l1", null, "Responsible travel isn't a list of bans. It's how heritage stays for our children to see.", "Du lịch có trách nhiệm không phải danh sách cấm, mà là để di sản còn cho con cháu đến xem."),
        L("l2", null, "Prepare early, keep hands and feet in the right place, spend locally, and remind each other gently.", "Chuẩn bị từ trước, giữ tay chân đúng chỗ, tiêu tiền cho người địa phương, nhắc nhau nhẹ nhàng."),
      ] },
    { id: "s32", module: "QUIZ-01", ref: "questions[3]",
      data: {
        q: "What is the simple rule for responsible travel at heritage sites?",
        options: [
          "Leave your name somewhere, so future visitors know that you came here",
          "Leave nothing but footprints, take nothing but photos and memories",
          "Take as many souvenirs as you can carry, because you paid for a ticket",
        ],
        correct: 1, countdown: 5, illus: "footprints",
        why: "Không để lại gì ngoài dấu chân, không mang về gì ngoài ảnh và kỷ niệm.",
      },
      lines: [
        L("l1", null, "What is the simple rule for responsible travel at heritage sites?", "Nguyên tắc đơn giản của du lịch có trách nhiệm tại di sản là gì?"),
        L("l2", null, "Leave nothing but footprints, take nothing but photos and memories.", "Không để lại gì ngoài dấu chân, không mang về gì ngoài ảnh và kỷ niệm."),
      ],
      beats: { after: 600 } },
    { id: "s33", module: "END-05", data: { text: "Bốn mươi câu về đi có trách nhiệm", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Pack a water bottle and a rubbish bag for your next trip. Then try the forty questions below.", "Bỏ chai nước và túi đựng rác vào ba lô. Rồi thử bốn mươi câu bên dưới nhé.")] },
  ],
};
