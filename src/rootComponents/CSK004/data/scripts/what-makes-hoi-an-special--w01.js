// Kịch bản video W lần 3 (#110) — "Phố cổ Hội An có gì đặc biệt?" · chuỗi "Di sản và du lịch Việt Nam"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "what-makes-hoi-an-special--w01",
  hook: "HOOK-16",
  loop: { open: "s01", close: "s26" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "heritage-travellers", slug: "what-makes-hoi-an-special", door: "kien-thuc", level: "B1",
    title: "Phố cổ Hội An có gì đặc biệt?", series: "Di sản và du lịch Việt Nam" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên (#110): “bạn” đi Hội An theo Cách A (🔀 p8) và bước vào nhà cổ (❓ p17) → Dũng; người hỏi lại chuyến đi, người đặt phòng mùa mưa (⚖️ p23) → Thảo; chủ nhà cổ (p17) → Cô Hoa (chỉ nói câu trung lập: chỉ chỗ được xem); bà cụ bán bánh (q21) → Bà Tư (vai mới); khách nước ngoài hỏi Chùa Cầu (💡 p13) → Sam (vai mới, lên hình). Chùa Cầu chỉ nói “được cho là do thương nhân Nhật dựng”, không nêu mốc năm (theo bài đã sửa #107). Khuôn HOOK-16: s01 than vãn, s13 (SCENE-03) quay lại Dũng với chuyến đi làm lại. Phủ ý: 25/25. Hai DLG-01 (❓ p17, ⚖️ p23). Câu đố cuối questions[6].",
  scenes: [
    { id: "s01", module: "SCENE-01", ref: "p8",
      data: { set: "street", label: "Sau chuyến Hội An", actors: [{ id: "dung", side: "left" }, { id: "thao", side: "right" }] },
      lines: [
        L("l1", "dung", "Hoi An was great! Lantern photos till late, then the bus home next morning.", "Hội An vui lắm! Chụp đèn lồng tới khuya, sáng ra xe về.", { face: "happy", pose: "phone" }),
        L("l2", "thao", "Nice! What were the old houses like inside?", "Hay quá! Thế nhà cổ bên trong trông ra sao?", { face: "happy", react: { dung: "thinking" } }),
        L("l3", "dung", "Um... I have no idea.", "Ờ… chịu, chẳng biết kể gì.", { face: "sad", pose: "shrug" }),
        L("l4", null, "Great photos, no story. What makes Hoi An special?", "Ảnh đẹp mà chẳng có chuyện. Hội An đặc biệt ở đâu?", { wait: 300 }),
      ],
      beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Hội An đặc biệt ở đâu", pose: "present", items: ["Thương cảng xưa còn gần nguyên phố", "Việt, Hoa, Nhật, phương Tây để lại dấu ấn", "Phố vẫn có người đang sống"] },
      lines: [
        L("l1", "det", "What makes Hoi An special? It's easy to grasp.", "Hội An đặc biệt ở đâu? Rất dễ nắm."),
        L("l2", "det", "An old trading port, with streets kept almost as they were.", "Một thương cảng xưa còn giữ gần nguyên phố phường."),
        L("l3", "det", "Vietnamese, Chinese, Japanese and Western traders all left their mark.", "Người Việt, Hoa, Nhật, phương Tây từng buôn bán và để lại dấu ấn."),
        L("l4", "det", "And people still live there.", "Và phố vẫn có người đang sống."),
      ] },
    { id: "s03", module: "HOST-01",
      data: { title: "Lộ trình", pose: "point", items: ["Vì sao thành di sản; ban ngày nhìn gì", "Chùa Cầu, hội quán; cư xử trong phố", "Buổi tối, món ăn, mùa đi"] },
      lines: [
        L("l1", "det", "Our route: why it's heritage, and what to see by day.", "Lộ trình: vì sao thành di sản, ban ngày nhìn gì."),
        L("l2", "det", "The bridge, the halls, and how to behave in a living town.", "Chùa Cầu, hội quán, và cư xử ở phố có người ở."),
        L("l3", "det", "Evenings, food, and when to go.", "Buổi tối, ẩm thực, và đi mùa nào."),
      ] },

    // Chương 1 — Vì sao thành di sản
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Vì sao phố nhỏ thành di sản?" },
      lines: [L("l1", "det", "Part one: why is a small town world heritage?", "Phần một: vì sao một phố nhỏ lại thành di sản thế giới?")] },
    { id: "s05", module: "LIST-13", ref: "p1,p2",
      data: { title: "Thương cảng Faifo", items: [
        { title: "Gần cửa sông Thu Bồn", detail: "Tàu Trung Hoa, Nhật Bản, châu Âu ghé; nhộn nhịp thế kỷ XVI–XVIII.", illus: "sailboat" },
        { title: "Hàng buôn", detail: "Tơ lụa, gốm sứ, đường, trầm hương, quế.", illus: "amphora" },
        { title: "Thương nhân ở lại", detail: "Người Hoa, người Nhật sống cạnh người Việt.", illus: "busts-in-silhouette" } ] },
      lines: [
        L("l1", null, "Near the mouth of the Thu Bon river, Hoi An welcomed ships from China, Japan, then Europe.", "Gần cửa sông Thu Bồn, Hội An đón tàu buôn Trung Hoa, Nhật Bản rồi châu Âu."),
        L("l2", null, "Busiest from the sixteenth to the eighteenth century, under the Nguyen lords. Western traders called it Faifo.", "Nhộn nhịp nhất thế kỷ 16 đến 18, thời chúa Nguyễn. Người phương Tây gọi là Faifo."),
        L("l3", null, "Ships traded silk, pottery, sugar, agarwood and cinnamon.", "Tàu mua bán tơ lụa, gốm sứ, đường, trầm hương, quế."),
        L("l4", null, "Many traders stayed. Chinese and Japanese communities lived beside the Vietnamese.", "Nhiều thương nhân ở lại, người Hoa, người Nhật sống cạnh người Việt."),
      ] },
    { id: "s06", module: "REL-02", ref: "p3",
      data: { chain: ["Thế kỷ XIX cửa sông bồi lắng, tàu lớn khó vào", "Đà Nẵng dần thay vai trò cảng", "Phố lùi lại, ít bị xây mới", "Nhà xưa còn; UNESCO ghi danh 1999"],
        illus: ["water-wave", "ship", "house", "classical-building"] },
      lines: [
        L("l1", null, "In the nineteenth century, the river mouth silted up, and big ships couldn't get in. Da Nang took over.", "Thế kỷ 19, cửa sông bồi lắng, tàu lớn khó vào, Đà Nẵng dần thay vai trò cảng."),
        L("l2", null, "Hoi An quietly stepped back, with few new buildings. So many old houses remain.", "Hội An lặng lẽ lùi lại, ít bị xây mới, nên nhiều nhà xưa còn đến nay."),
        L("l3", null, "UNESCO listed the old town in nineteen ninety nine.", "UNESCO ghi danh phố cổ năm 1999."),
      ] },
    { id: "s07", module: "TEXT-01", ref: "p4",
      data: { text: "Giàu lên nhờ cảng, được giữ lại nhờ cảng bị bỏ quên.", illus: "sailboat" },
      lines: [L("l1", null, "One sentence for your family: Hoi An grew rich from its port, and was kept because the port was forgotten.", "Câu để kể: Hội An giàu lên nhờ cảng, rồi được giữ lại cũng nhờ cảng bị bỏ quên.", { wait: 300 })] },

    // Chương 2 — Ban ngày
    { id: "s08", module: "HOST-03", data: { n: 2, of: 6, title: "Ban ngày nhìn vào đâu?" },
      lines: [L("l1", "det", "Part two: walking by day, where should you look?", "Phần hai: ban ngày đi dạo thì nhìn vào đâu?")] },
    { id: "s09", module: "LIST-06", ref: "p5",
      data: { title: "Đi xuyên một ngôi nhà ống", steps: [
        { text: "Mặt tiền hẹp, gian trước bán hàng", illus: "convenience-store" },
        { text: "Giữa nhà có sân trời lấy sáng và gió", illus: "sun-behind-small-cloud" },
        { text: "Phía sau là kho, gần sông để bốc hàng", illus: "package" } ] },
      lines: [
        L("l1", null, "Old houses here are tube houses: a narrow front, running from the street to the river.", "Nhà cổ là nhà ống: mặt tiền hẹp, kéo dài từ phố ra tận sông."),
        L("l2", null, "The front room was a shop. In the middle, an open courtyard brings in light and air.", "Gian trước bán hàng. Giữa nhà có sân trời lấy sáng và gió."),
        L("l3", null, "At the back, a store room near the river, to unload goods from boats.", "Phía sau là kho, gần sông để bốc hàng từ thuyền."),
      ] },
    { id: "s10", module: "LIST-05", ref: "p6",
      data: { title: "Trong nhà cổ, để ý", items: ["Mái ngói âm dương phủ rêu", "Khung gỗ, cột kèo chạm trổ", "Hoa văn Hoa, Nhật trên kết cấu nhà Việt", "Nhà mở cửa đón khách: Tân Ký, Phùng Hưng"], illus: "house" },
      lines: [
        L("l1", null, "Look for mossy yin-yang roof tiles, and carved wooden frames and beams.", "Để ý mái ngói âm dương phủ rêu, khung gỗ, cột kèo chạm trổ."),
        L("l2", null, "Chinese and Japanese patterns on a Vietnamese structure. Not purely Chinese.", "Hoa văn kiểu Hoa, kiểu Nhật trên kết cấu nhà Việt, không thuần Hoa."),
        L("l3", null, "Houses like Tan Ky and Phung Hung welcome visitors.", "Các nhà mở cửa đón khách như Tân Ký, Phùng Hưng."),
      ] },
    { id: "s11", module: "OPEN-19", ref: "p7",
      data: { label: "Vé tham quan", warning: "Hỏi quầy thông tin khi đến", detail: "Cách bán vé có thể đổi; đừng chỉ dựa bài chia sẻ cũ." },
      lines: [
        L("l1", null, "Entry to old houses and halls usually follows a local ticket system, and it can change.", "Vào nhà cổ, hội quán thường theo hệ thống vé của địa phương, có thể thay đổi."),
        L("l2", null, "Ask at the information desk when you arrive, not just old posts online.", "Hỏi tại quầy thông tin khi đến, đừng chỉ dựa vào bài chia sẻ cũ."),
      ] },
    { id: "s12", module: "QUIZ-01", ref: "questions[10]",
      data: {
        q: "What do visitors often miss if they arrive in Hoi An only in the evening?",
        options: [
          "The inside of old houses and halls, and the details of their wooden carvings",
          "The lanterns, because they are all switched off as soon as it is dark",
          "The food, because every restaurant in town closes early in the evening",
        ],
        correct: 0, countdown: 5, illus: "red-paper-lantern",
        why: "Buổi tối phố đông, khó thấy chạm trổ, nhiều điểm đã đóng cửa.",
      },
      lines: [
        L("l1", null, "Back to Dung. What do visitors often miss if they arrive in Hoi An only in the evening?", "Quay lại Dũng: chỉ đến Hội An buổi tối thì thường bỏ lỡ gì?"),
        L("l2", null, "The inside of old houses and halls, and the details of their wooden carvings.", "Bên trong nhà cổ, hội quán, và chi tiết chạm gỗ."),
      ],
      beats: { after: 500 } },
    { id: "s13", module: "SCENE-03", ref: "p8,p9",
      data: { set: "street", actors: [{ id: "dung", side: "left" }, { id: "thao", side: "right" }],
        left: { label: "Chỉ buổi tối", ok: false }, right: { label: "Đến từ chiều", ok: true } },

      lines: [
        L("a1", "dung", "I arrived at dusk. Crowded, dark, and many places were closing.", "Mình đến lúc chạng vạng. Đông, tối, nhiều nơi sắp đóng cửa.", { phase: "a", face: "sad", pose: "shrug" }),
        L("a2", "thao", "So you couldn't see the carvings at all.", "Nên chẳng thấy chi tiết chạm trổ nào.", { phase: "a", face: "worried", to: "dung" }),
        L("b1", "dung", "This time I came in the afternoon: tube houses, sky wells, the assembly halls.", "Lần này mình đến từ chiều: nhà ống, sân trời, hội quán.", { phase: "b", face: "happy", pose: "explain", to: "thao" }),
        L("b2", "dung", "Then I stayed for the lanterns. Photos, and a story!", "Rồi ở lại khi đèn lên. Có ảnh, có cả chuyện để kể!", { phase: "b", face: "happy", pose: "thumb" }),
        L("b3", null, "One evening only? Arrive in the afternoon. Days to understand the town, nights to love it.", "Chỉ có một tối? Đến từ chiều. Ngày để hiểu phố, đêm để yêu phố."),
      ] },

    // Chương 3 — Chùa Cầu, hội quán
    { id: "s14", module: "HOST-03", data: { n: 3, of: 6, title: "Chùa Cầu và các hội quán" },
      lines: [L("l1", "det", "Part three: the stories of the bridge and the assembly halls.", "Phần ba: Chùa Cầu và các hội quán kể chuyện gì?")] },
    { id: "s15", module: "TEXT-04", ref: "p10,p11",
      data: { text: "Chùa Cầu được cho là do thương nhân Nhật dựng; qua nhiều lần trùng tu mang thêm nét Việt, Hoa.", marks: ["thương nhân Nhật"], illus: "bridge-at-night" },
      lines: [
        L("l1", null, "The covered bridge is believed to have been built by Japanese traders, when Hoi An was a busy port.", "Chùa Cầu được cho là do thương nhân Nhật dựng, thời Hội An còn là cảng tấp nập."),
        L("l2", null, "Over many restorations, it gained Vietnamese and Chinese features, just like the town itself.", "Qua nhiều lần trùng tu, cầu mang thêm nét Việt, Hoa, giống chính phố Hội An."),
      ] },
    { id: "s16", module: "SCENE-01", ref: "p13,p14",
      data: { set: "heritage", label: "Ở đầu Chùa Cầu", actors: [{ id: "sam", side: "left" }, { id: "thao", side: "right" }], props: ["bridge-at-night"] },
      lines: [
        L("l1", "sam", "Is this Japanese Covered Bridge a pagoda?", "Chùa Cầu này là một ngôi chùa à?", { face: "thinking", to: "thao" }),
        L("l2", "thao", "It's a covered bridge. Only the small shrine on one side is for worship. That's why locals call it a pagoda.", "Đó là cầu có mái che. Chỉ có miếu nhỏ một bên để thờ, nên dân quen gọi là chùa.", { pose: "explain", to: "sam" }),
        L("l3", "thao", "And look: it's on our twenty thousand dong note!", "Nhìn này: cầu in trên tờ hai mươi nghìn!", { face: "happy", pose: "give", to: "sam", react: { sam: "surprised" } }),
        L("l4", "sam", "Wow! Let me take a photo with the note and the bridge.", "Ồ! Để tôi chụp tờ tiền cạnh cây cầu.", { face: "happy", pose: "phone", to: "thao" }),
        L("l5", null, "One surprising detail is worth more than a whole page of history.", "Một chi tiết bất ngờ đáng giá hơn cả trang lịch sử."),
      ] },
    { id: "s17", module: "CMP-01", ref: "p12",
      data: { labels: ["Hội quán Phúc Kiến", "Hội quán Quảng Đông"], left: "Cổng nhiều màu", right: "Chạm đá, chạm gỗ công phu", illus: ["classical-building", "wood"] },
      lines: [
        L("l1", null, "An assembly hall is where Chinese people from the same hometown met, worshipped and helped each other.", "Hội quán là nơi người Hoa cùng quê tụ họp, thờ cúng, giúp đỡ nhau."),
        L("l2", null, "Like Phuc Kien, with its colourful gate, or Quang Dong, with fine stone and wood carving. Want to see how traders lived? Visit one.", "Như Phúc Kiến cổng nhiều màu, Quảng Đông chạm đá, gỗ công phu. Muốn biết thương nhân xưa sống ra sao, hãy vào hội quán."),
      ] },

    // Chương 4 — Cư xử ở phố có người ở
    { id: "s18", module: "HOST-03", data: { n: 4, of: 6, title: "Phố có người ở, cư xử sao?" },
      lines: [L("l1", "det", "Part four: people live here. How should you behave?", "Phần bốn: phố cổ có người ở, cư xử sao cho phải?")] },
    { id: "s19", module: "LIST-05", ref: "p15,p16",
      data: { title: "Ở phố “đang sống”", items: ["Xin phép trước khi chụp người dân", "Không bước qua dây ngăn, vào gian sau khi chưa được mời", "Nói khẽ ở nơi thờ tự", "Đi bộ, đạp xe: nhiều phố hạn chế xe máy theo giờ"], illus: "house" },
      lines: [
        L("l1", null, "Many old houses are still family homes and shops. It's a living town, not a museum.", "Nhiều nhà cổ vẫn là nhà ở, nhà buôn. Đây là phố đang sống, không phải bảo tàng."),
        L("l2", null, "Ask before you photograph people. Don't cross ropes or enter back rooms uninvited.", "Xin phép trước khi chụp người dân. Không bước qua dây ngăn, không vào gian sau khi chưa được mời."),
        L("l3", null, "Speak softly at places of worship. Walk or cycle: many streets limit motorbikes at certain hours.", "Nói khẽ ở nơi thờ tự. Đi bộ, đạp xe, vì nhiều phố hạn chế xe máy theo giờ."),
      ] },
    { id: "s20", module: "SCENE-01", ref: "p16",
      data: { set: "street", label: "Gánh bánh bên đường", actors: [{ id: "tu", side: "center", pose: "hold" }, { id: "thao", side: "right" }] },
      lines: [
        L("l1", "thao", "Excuse me, may I take a photo of you?", "Dạ, cháu chụp bà một tấm được không ạ?", { pose: "hold", face: "happy", to: "tu" }),
        L("l2", "tu", "Not today, dear. Buy a cake instead!", "Hôm nay thôi cháu ạ. Mua bánh đi!", { face: "happy", pose: "give", to: "thao" }),
        L("l3", "thao", "Of course. Two, please.", "Dạ vâng, bà bán cho cháu hai cái.", { face: "happy", to: "tu" }),
        L("l4", null, "Ask politely first, and respect the answer if it's no.", "Hỏi lịch sự trước, và tôn trọng nếu người ta từ chối."),
      ] },
    { id: "s21", module: "DLG-01", ref: "p17,p18",
      data: { set: "shop", label: "Nhà cổ đang mở cửa", actors: [{ id: "dung", side: "left" }, { id: "hoa", side: "right", pose: "hold" }],
        verdict: { ok: false, label: "Bước thẳng vào gian sau", why: "Nhiều nhà cổ vẫn là nhà ở; gian sau có thể là chỗ cả nhà ăn cơm, nghỉ ngơi." } },
      lines: [
        L("l1", "dung", "What a beautiful house! The best photo must be in the back room.", "Nhà đẹp quá! Góc chụp đẹp chắc ở gian sau.", { face: "happy", pose: "phone", stop: true }),
        L("l2", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l3", "det", "Don't guess. Many old houses are still homes. The back room may be where the family eats and rests.", "Đừng đoán. Nhiều nhà cổ vẫn là nhà ở. Gian sau có thể là chỗ cả nhà ăn cơm, nghỉ ngơi."),
        L("l4", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l5", "dung", "Excuse me, do you welcome visitors to look inside?", "Dạ, nhà mình có cho khách vào xem không ạ?", { phase: "redo", pose: "hold", face: "neutral", to: "hoa" }),
        L("l6", "hoa", "Yes, you can look around this front part.", "Được cháu, xem ở gian trước này nhé.", { phase: "redo", pose: "explain", face: "happy" }),
        L("l7", "det", "The old town has owners. Enter like a guest in someone's home.", "Phố cổ có chủ, bước vào như khách đến nhà người.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },

    // Chương 5 — Buổi tối, ẩm thực
    { id: "s22", module: "HOST-03", data: { n: 5, of: 6, title: "Buổi tối và ẩm thực" },
      lines: [L("l1", "det", "Part five: what's memorable at night, and at the table?", "Phần năm: buổi tối và ẩm thực có gì đáng nhớ?")] },
    { id: "s23", module: "LIST-13", ref: "p19,p20",
      data: { title: "Đêm phố cổ", items: [
        { title: "Đêm rằm âm lịch", detail: "Giảm đèn điện, thắp đèn lồng, thả hoa đăng; hỏi trước vì có thể đổi.", illus: "full-moon" },
        { title: "Hát bài chòi", detail: "Trò chơi hát dân gian miền Trung, UNESCO ghi danh phi vật thể.", illus: "musical-notes" } ] },
      lines: [
        L("l1", null, "On full moon nights, many places dim the electric lights, light lanterns, sing bai choi and float flower lanterns.", "Đêm rằm âm lịch, nhiều nơi giảm đèn điện, thắp đèn lồng, hát bài chòi, thả hoa đăng."),
        L("l2", null, "Programmes can change. Check the lunar calendar and ask locally.", "Chương trình có thể đổi: xem lịch âm và hỏi trước tại chỗ."),
        L("l3", null, "Bai choi, a folk singing game of central Vietnam, is UNESCO intangible heritage. Stop and listen once.", "Hát bài chòi miền Trung là di sản phi vật thể UNESCO. Dừng lại nghe một lượt nhé."),
      ] },
    { id: "s24", module: "LIST-07", ref: "p21",
      data: { title: "Món nên thử", items: [{ text: "Cao lầu", illus: "steaming-bowl" }, { text: "Mì Quảng", illus: "bowl-with-spoon" }, { text: "Bánh mì Hội An", illus: "sandwich" }] },
      lines: [
        L("l1", null, "Try cao lau, Quang noodles and Hoi An bread.", "Nên thử cao lầu, mì Quảng, bánh mì Hội An."),
        L("l2", null, "Locals say the best cao lau noodles need water from old wells and local wood ash. Tell that at the table!", "Người dân kể sợi cao lầu ngon phải làm bằng nước giếng cổ, tro củi địa phương. Kể bên bàn ăn nhé!"),
      ] },

    // Chương 6 — Mùa đi, kết hợp
    { id: "s25", module: "HOST-03", data: { n: 6, of: 6, title: "Đi mùa nào, kết hợp gì?" },
      lines: [L("l1", "det", "Last part: when to go, and what to add.", "Phần cuối: đi vào mùa nào, kết hợp thêm gì?")] },
    { id: "s26", module: "DLG-01", ref: "p22,p23,p24",
      data: { set: "room", label: "Đặt phòng cuối thu", actors: [{ id: "thao", side: "right" }],
        verdict: { ok: false, label: "Đặt phòng không xem dự báo", why: "Mùa mưa lũ, sông Thu Bồn dâng, phố sát sông ngập, nhà cổ đóng cửa; ô dù không giải quyết được." } },
      lines: [
        L("l1", "thao", "Late autumn in Hoi An! Rain is just a short shower. An umbrella is enough.", "Cuối thu đi Hội An! Mưa chỉ vài cơn rào, mang ô là xong.", { face: "happy", pose: "phone", stop: true }),
        L("l2", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l3", "det", "In the central rainy season, the Thu Bon can rise. Riverside streets flood, houses and shops close, people use boats.", "Mùa mưa lũ, sông Thu Bồn dâng, phố sát sông ngập, nhà cổ, cửa hàng đóng, có lúc đi bằng thuyền."),
        L("l4", "det", "Let's rewind and try again.", "Tua lại, thử lần nữa nhé.", { phase: "redo" }),
        L("l5", "thao", "First the forecast. Then I'll ask the hotel about flooding, before I book.", "Xem dự báo trước, hỏi khách sạn tình hình ngập, rồi mới đặt.", { phase: "redo", face: "thinking", pose: "phone" }),
        L("l6", "det", "In the central rainy season, check the weather first, book the room after.", "Mùa mưa miền Trung, xem trời trước, đặt phòng sau.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },
    { id: "s27", module: "LIST-02", ref: "p25",
      data: { title: "Kết hợp quanh Hội An", illus: "world-map",
        items: [{ icon: "amphora", illus: "amphora", text: "Làng gốm Thanh Hà, làng rau Trà Quế" }, { icon: "palm-tree", illus: "palm-tree", text: "Rừng dừa Bảy Mẫu, thuyền thúng" },
          { icon: "desert-island", illus: "desert-island", text: "Cù Lao Chàm, khu dự trữ sinh quyển" }, { icon: "classical-building", illus: "classical-building", text: "Thánh địa Mỹ Sơn, một di sản thế giới khác" }] },
      lines: [
        L("l1", null, "Kids love hands-on fun? Try Thanh Ha pottery village or Tra Que vegetable village.", "Trẻ thích tự tay làm? Thử làng gốm Thanh Hà, làng rau Trà Quế."),
        L("l2", null, "Basket boats in the Bay Mau coconut forest. Cu Lao Cham, a world biosphere reserve.", "Thuyền thúng rừng dừa Bảy Mẫu. Cù Lao Chàm, khu dự trữ sinh quyển thế giới."),
        L("l3", null, "And My Son Sanctuary, another World Heritage Site, not far away.", "Và Thánh địa Mỹ Sơn, một di sản thế giới khác ở không xa."),
      ] },

    // Tổng kết + câu đố + kết
    { id: "s28", module: "END-02", ref: "outro",
      data: { points: ["Thương cảng giàu lên, bị lãng quên, được gìn giữ", "Ban ngày để hiểu, ban đêm để thưởng thức", "Đây là nhà của người khác"], icons: ["sailboat", "red-paper-lantern", "house"] },
      lines: [
        L("l1", null, "Hoi An is memorable not for lanterns, but for the story of a port that grew rich, was forgotten, then kept.", "Hội An đáng nhớ không vì đèn lồng, mà vì chuyện một thương cảng giàu lên, bị lãng quên, rồi được gìn giữ."),
        L("l2", null, "Go by day to understand, by night to enjoy, and remember it's someone's home.", "Ban ngày để hiểu, ban đêm để thưởng thức, và nhớ đây là nhà của người khác."),
      ] },
    { id: "s29", module: "QUIZ-01", ref: "questions[6]",
      data: {
        q: "Why are old houses in Hoi An narrow at the front and very long?",
        options: [
          "People were poor, so they could only afford a very small piece of land",
          "The long shape keeps the house safe from strong winds and earthquakes",
          "The front was a shop on the street, and the back reached the river for boats",
        ],
        correct: 2, countdown: 5, illus: "house",
        why: "Gian trước là cửa hàng, phía sau gần sông để bốc dỡ hàng.",
      },
      lines: [
        L("l1", null, "Why are old houses in Hoi An narrow at the front and very long?", "Vì sao nhà cổ Hội An hẹp mặt tiền mà sâu dài?"),
        L("l2", null, "The front was a shop on the street, and the back reached the river for boats.", "Gian trước là cửa hàng, phía sau chạm sông để thuyền bốc hàng."),
      ],
      beats: { after: 600 } },
    { id: "s30", module: "END-05", data: { text: "Bốn mươi câu về phố cổ Hội An", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Put a twenty thousand note in your wallet for the bridge story. Then try the forty questions below.", "Bỏ tờ hai mươi nghìn vào ví để kể chuyện Chùa Cầu. Rồi thử bốn mươi câu bên dưới nhé.")] },
  ],
};
