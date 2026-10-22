// Kịch bản video W lần 3 (#110) — "Ở ghép với bạn cùng phòng: chia tiền, chia việc, giữ hoà khí" · chuỗi "Chuẩn bị vào đại học xa nhà"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "living-with-roommates--w01",
  hook: "HOOK-06",
  loop: { open: "s01", close: "s31" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "first-year-students-living-away", slug: "living-with-roommates", door: "ky-nang", level: "B1",
    title: "Ở ghép với bạn cùng phòng: chia tiền, chia việc, giữ hoà khí", series: "Chuẩn bị vào đại học xa nhà" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: “bạn” trong khung ✍️ p23 → Lan; Mai (p18) → Lan; phụ huynh (p28) → Bác Bình (bố Lan). Bạn cùng phòng không lên hình (dàn nhân vật không có nữ sinh viên thứ hai; tránh ghép phòng nam nữ) — các cảnh Lan nói với bạn cùng phòng ngoài khung hình. Chuyện của Trinh (p4) kể không tên ở STORY-05 s08. Dũng chỉ xuất hiện ở tin nhắn chuyển tiền (s15, phòng nam). Vai mới: không dùng. Phủ ý: 28/28. Hai DLG: s20 (nhắc lượt việc kiểu “bạn lúc nào cũng…”, p17) và s26 (đăng bóng gió, p23, p24 — đóng vòng HOOK-06). Lời đáp “cả hai vui vẻ đồng ý” ở s21 do người kể nói theo p18. Câu đố: questions[28].",
  scenes: [
    // ── Mở đầu: câu nói trước – sau
    { id: "s01", module: "SCENE-02", ref: "p23",
      data: { set: "room", label: "Lan định đăng", actor: { id: "lan", side: "left" },
        contact: { name: "Trang cá nhân", illus: "mobile-phone" },
        messages: [{ from: "me", text: "Có những người ở chung mà chẳng biết tôn trọng giấc ngủ của ai.", at: "l2" }] },
      lines: [
        L("l1", null, "Lan's roommate often has friends over until late. Lan needs to sleep early.", "Bạn cùng phòng hay dẫn bạn về chơi khuya. Lan thì cần ngủ sớm."),
        L("l2", "lan", "Some people share a room but respect nobody's sleep.", "Có những người ở chung mà chẳng biết tôn trọng giấc ngủ của ai.", { face: "stern" }),
        L("l3", null, "Will this post fix anything?", "Đăng dòng này lên, có giải quyết được gì?"),
      ], beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Ở ghép mà giữ được hoà khí?", pose: "present",
        items: ["Chọn người hợp nếp sống", "Luật nhà ngay tuần đầu", "Tiền rõ, việc có lịch", "Có chuyện: nói sớm, nói riêng"] },
      lines: [
        L("l1", "det", "How do you share a room and keep the peace? Most problems can be avoided.", "Ở ghép sao cho êm? Hầu hết rắc rối đều tránh được."),
        L("l2", "det", "Choose someone with similar habits.", "Chọn người hợp nếp sống."),
        L("l3", "det", "Agree on house rules in the first week.", "Thống nhất luật nhà ngay tuần đầu."),
        L("l4", "det", "Keep money clear, and share chores by a schedule.", "Chia tiền rõ ràng, chia việc theo lịch."),
        L("l5", "det", "And when there's a problem, talk early and in private.", "Có bất đồng thì nói sớm, nói riêng."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng ở ghép", chapters: [
        { label: "Ở với ai thì hợp", illus: "busts-in-silhouette" },
        { label: "Luật nhà tuần đầu", illus: "memo" },
        { label: "Chia tiền công bằng", illus: "money-bag" },
        { label: "Chia việc nhà", illus: "broom" },
        { label: "Có bất đồng thì nói", illus: "speech-balloon" },
        { label: "Nhờ người, chuyển đi", illus: "door" } ] },
      lines: [
        L("l1", null, "Six parts: who to live with, house rules, money,", "Sáu phần: ở với ai, luật nhà, chia tiền,"),
        L("l2", null, "chores, disagreements, and getting help or moving out.", "việc nhà, bất đồng, nhờ người giúp và chuyển đi."),
      ] },

    // ── Chương 1
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Ở ghép với ai thì hợp?" },
      lines: [L("l1", "det", "Part one: who should you live with?", "Phần một: ở ghép với ai thì hợp?")] },
    { id: "s05", module: "HOST-02", ref: "p1",
      data: { statement: "Bạn thân thì ở chung kiểu gì cũng hợp", truth: false,
        why: "Điều quyết định là nếp sống: giờ ngủ, mức gọn gàng, cách tiêu tiền, chuyện mời khách." },
      lines: [
        L("l1", "det", "Best friends always make good roommates. True or false?", "Bạn thân thì ở chung kiểu gì cũng hợp. Đúng hay sai?"),
        L("l2", "det", "False. What matters is habits: sleep, tidiness, money and guests.", "Sai. Điều quyết định là nếp sống: giờ ngủ, gọn gàng, tiêu tiền, khách khứa.", { face: "wink" }),
      ] },
    { id: "s06", module: "LIST-08", ref: "p2",
      data: { title: "Hỏi nhau vài câu thật lòng", items: [
        { title: "“Bạn thường ngủ lúc mấy giờ?”", detail: "Giờ ngủ", illus: "bed" },
        { title: "“Bạn chịu được phòng bừa đến mức nào?”", detail: "Mức gọn gàng", illus: "broom" },
        { title: "“Bạn có hay rủ bạn bè về phòng không?”", detail: "Chuyện khách khứa", illus: "busts-in-silhouette" } ] },
      lines: [
        L("l1", null, "Before you decide, ask honest questions.", "Trước khi quyết, hỏi nhau vài câu thật lòng."),
        L("l2", null, "“What time do you usually sleep?” “How messy is okay for you?”", "“Bạn thường ngủ lúc mấy giờ?” “Bạn chịu được phòng bừa đến mức nào?”"),
        L("l3", null, "“Do you often bring friends back?”", "“Bạn có hay rủ bạn bè về phòng không?”"),
        L("l4", null, "Different answers are fine, if you both know early and agree to adjust.", "Trả lời khác nhau không sao, miễn là biết trước để nhường nhau."),
      ] },
    { id: "s07", module: "CMP-06", ref: "p3",
      data: { do: ["Hẹn gặp trực tiếp ở nơi công cộng", "Hỏi thêm qua người quen chung"], dont: ["Chuyển tiền trước khi gặp, trước khi hỏi"],
        doIcons: ["handshake", "busts-in-silhouette"], dontIcons: ["money-with-wings"] },
      lines: [
        L("l1", null, "Found someone in an online group? Meet in person at least once, somewhere public.", "Tìm qua nhóm trên mạng: hẹn gặp trực tiếp ít nhất một lần, ở nơi công cộng."),
        L("l2", null, "Ask mutual friends if you can, before you send any money.", "Hỏi thêm qua người quen chung, trước khi chuyển bất kỳ khoản tiền nào."),
      ] },
    { id: "s08", module: "STORY-05", ref: "p4,p5",
      data: { label: "Tình huống thường gặp", panels: [
        { scene: ["woman-student", "house", "smiling-face"], caption: "Một bạn rủ bạn thân thời cấp ba ở cùng: “thân thế thì ở đâu cũng hợp”.", say: "Thân thế mà!" },
        { scene: ["broom", "bowl-with-spoon", "t-shirt"], caption: "Bạn ấy quen gọn gàng; người kia để bát qua đêm, quần áo vắt khắp ghế." },
        { scene: ["zipper-mouth-face", "broom", "pensive-face"], caption: "Ngại nói, lặng lẽ dọn rồi bực; chưa hết kỳ, hai người đã ít nói chuyện hẳn." } ] },
      lines: [
        L("l1", null, "One student moved in with her best friend from high school.", "Một bạn rủ cô bạn thân thời cấp ba ở cùng."),
        L("l2", null, "She liked things tidy. Her friend left dishes overnight, and clothes on every chair.", "Bạn ấy quen gọn gàng; người kia để bát qua đêm, quần áo vắt khắp ghế."),
        L("l3", null, "Too shy to say it, she cleaned quietly and stayed angry. By term's end, they hardly talked.", "Ngại nói, cứ lặng lẽ dọn rồi bực. Chưa hết kỳ, hai người đã ít nói chuyện."),
        L("l4", "det", "Being close is one thing. Sharing a way of living is another.", "Thân là một chuyện, hợp nếp sống là chuyện khác."),
      ] },

    // ── Chương 2
    { id: "s09", module: "HOST-03", data: { n: 2, of: 6, title: "Tuần đầu thống nhất gì?" },
      lines: [L("l1", "det", "Part two: what to agree on in week one.", "Phần hai: tuần đầu nên thống nhất những gì?")] },
    { id: "s10", module: "LIST-05", ref: "p6,p7",
      data: { title: "Năm luật nhà nên có", illus: "memo",
        items: ["Giờ tắt đèn, giờ yên tĩnh", "Đồ chung và đồ riêng", "Lịch việc nhà", "Cách góp tiền chung", "Quy định về khách"] },
      lines: [
        L("l1", null, "Sit down once and write a few short house rules.", "Ngồi lại một buổi, viết ra vài luật nhà ngắn."),
        L("l2", null, "Lights-out and quiet hours. What's shared, and what's private.", "Giờ tắt đèn, giờ yên tĩnh. Đồ nào dùng chung, đồ nào của riêng."),
        L("l3", null, "Chores, common money, and guests. Can a guest stay overnight?", "Việc nhà, tiền chung, và khách: khách ngủ lại có được không?"),
        L("l4", null, "Stick it on the wall, or pin it in the room chat. A few clear rules beat many forgotten ones.", "Dán lên tường hoặc ghim trong nhóm phòng. Ít mà rõ hơn nhiều mà không ai nhớ."),
      ] },
    { id: "s11", module: "SCENE-01", ref: "p8",
      data: { set: "room", label: "Hỏi trước khi dùng", actors: [{ id: "lan", side: "left" }] },
      lines: [
        L("l1", "lan", "Can I borrow your charger for a moment?", "Cho mình mượn sạc một lát nhé?", { pose: "explain", face: "happy" }),
        L("l2", null, "Ask before you use anything that's not yours, even shampoo or a charger.", "Đồ riêng thì hỏi trước khi dùng, kể cả dầu gội hay sạc điện thoại."),
        L("l3", null, "Using without asking slowly builds into a problem.", "Dùng mà không hỏi, lâu dần sẽ thành chuyện."),
      ] },

    // ── Chương 3
    { id: "s12", module: "HOST-03", data: { n: 3, of: 6, title: "Chia tiền cho công bằng" },
      lines: [L("l1", "det", "Part three: splitting rent and bills fairly.", "Phần ba: chia tiền phòng, điện nước sao cho công bằng?")] },
    { id: "s13", module: "LIST-13", ref: "p9,p10",
      data: { title: "Tiền phòng và tiền điện", items: [
        { title: "Tiền phòng thường chia đều", detail: "Trừ khi chỗ ở chênh rõ; có chênh thì nói thẳng từ đầu, cùng thống nhất.", illus: "house" },
        { title: "Tiền điện: mỗi người dùng một kiểu", detail: "Chia đều rồi người bật điều hoà góp thêm, hoặc chia theo thiết bị.", illus: "high-voltage" },
        { title: "Cách nào cũng được", detail: "Miễn cả phòng đồng ý trước khi hoá đơn đến.", illus: "handshake" } ] },
      lines: [
        L("l1", null, "Rent is usually split equally, unless one space is clearly bigger or brighter.", "Tiền phòng thường chia đều, trừ khi một chỗ rộng, sáng hơn hẳn."),
        L("l2", null, "If so, say it at the start, and agree together.", "Có chênh thì nói thẳng từ đầu, cùng thống nhất cách chia."),
        L("l3", null, "Electricity is harder. Heavy air-con users can add an extra share, or split by device.", "Điện khó hơn: người bật điều hoà góp thêm, hoặc chia theo thiết bị."),
        L("l4", null, "Any way works, if everyone agrees before the bill arrives.", "Cách nào cũng được, miễn cả phòng đồng ý trước khi hoá đơn đến."),
      ] },
    { id: "s14", module: "LIST-07", ref: "p11",
      data: { title: "Quỹ chung cho đồ dùng chung", items: [
        { text: "Mỗi tháng mỗi người góp bằng nhau", illus: "coin" },
        { text: "Một người giữ và ghi chép", illus: "ledger" },
        { text: "Ai cũng xem được", illus: "eyes" } ] },
      lines: [
        L("l1", null, "Keep a common fund for dish soap, toilet paper and drinking water.", "Lập quỹ chung cho nước rửa bát, giấy vệ sinh, nước uống."),
        L("l2", null, "Equal monthly shares. One person keeps it and writes it down, and everyone can see.", "Mỗi tháng góp bằng nhau, một người giữ và ghi chép, ai cũng xem được."),
      ] },
    { id: "s15", module: "SCENE-02", ref: "p12",
      data: { set: "room", label: "Đúng hạn đóng tiền", actor: { id: "dung", side: "right" }, contact: { name: "Nhóm phòng", illus: "busts-in-silhouette" },
        messages: [{ from: "me", text: "Mình đã chuyển phần tiền phòng tháng này cho cậu rồi nhé.", at: "l2" }] },
      lines: [
        L("l1", null, "When rent is due, send your share on time to the person who signed the contract.", "Đến hạn, chuyển phần của mình đúng ngày cho người đứng tên hợp đồng."),
        L("l2", "dung", "I've sent you my share of this month's rent.", "Mình đã chuyển phần tiền phòng tháng này cho cậu rồi nhé.", { face: "happy" }),
        L("l3", null, "Don't make one person pay first and then chase everyone.", "Đừng để một người ứng trước rồi đi đòi từng người."),
      ] },
    { id: "s16", module: "CMP-03", ref: "p13",
      data: { title: "Phòng ba người, hai người bật điều hoà cả đêm", illus: "snowflake",
        a: { label: "Cách A", do: "Cứ chia ba tiền điện, không ai nhắc", result: "Ấm ức, rồi cãi to", illus: "electric-plug" },
        b: { label: "Cách B", do: "Chia đều phần cơ bản, ai bật điều hoà góp thêm", result: "Không ai thấy mình thiệt", illus: "handshake" } },
      lines: [
        L("l1", null, "Three in a room. Two run the air conditioner all night. One hardly uses it.", "Phòng ba người: hai bạn bật điều hoà cả đêm, một bạn gần như không dùng."),
        L("l2", null, "Split it three ways in silence? Months of quiet anger, then a big fight.", "Lặng lẽ chia ba: ấm ức mấy tháng, rồi cãi to vì chuyện nhỏ."),
      ] },
    { id: "s16b", module: "HOST-01", ref: "p14",
      data: { pose: "point", text: "Bạn bè thân mấy, tiền bạc vẫn phân minh." },
      lines: [
        L("l3", "det", "Or, before the first bill: share the basic power equally, and the two air-con users add extra.", "Hoặc trước hoá đơn đầu: chia đều phần cơ bản, hai người bật điều hoà góp thêm."),
        L("l4", "det", "However close you are, keep money clear.", "Bạn bè thân mấy, tiền bạc vẫn phân minh."),
      ] },

    // ── Chương 4
    { id: "s17", module: "HOST-03", data: { n: 4, of: 6, title: "Chia việc nhà" },
      lines: [L("l1", "det", "Part four: sharing chores so nobody loses out.", "Phần bốn: việc nhà chia thế nào để không ai thấy thiệt?")] },
    { id: "s18", module: "CMP-01", ref: "p15",
      data: { labels: ["Tuần này", "Tuần sau"], left: "Người này quét phòng, người kia đổ rác", right: "Đổi lượt cho nhau", illus: ["broom", "counterclockwise-arrows-button"] },
      lines: [
        L("l1", null, "Use a rotating schedule. This week, one sweeps and one takes out the rubbish.", "Chia việc xoay vòng: tuần này người quét phòng, người đổ rác."),
        L("l2", null, "Next week, swap. Write it on the door or in the room chat, so nobody has to remember.", "Tuần sau đổi. Ghi lên cửa hoặc nhóm nhắn tin, khỏi ai phải nhớ."),
      ] },
    { id: "s19", module: "LIST-05", ref: "p16",
      data: { title: "Làm ngay, không đợi lịch", items: ["Rửa bát mình vừa dùng", "Lau chỗ mình làm đổ", "Đổ rác khi thùng đầy"], illus: "sponge" },
      lines: [
        L("l1", null, "Some jobs can't wait for the schedule.", "Có việc nên làm ngay, không đợi lịch."),
        L("l2", null, "Wash the dishes you used. Wipe up your spills. Empty a full bin.", "Rửa bát mình vừa dùng, lau chỗ mình làm đổ, đổ rác khi thùng đầy."),
        L("l3", null, "Small things left overnight cause the biggest annoyance.", "Việc nhỏ để qua đêm thường là nguồn bực bội lớn nhất."),
      ] },
    { id: "s20", module: "DLG-01", ref: "p17",
      data: { set: "room", label: "Thùng rác đầy",
        actors: [{ id: "lan", side: "left" }],
        verdict: { ok: false, label: "Nhắc kiểu “bạn lúc nào cũng…”",
          why: "Câu đó chê con người, người nghe chỉ muốn cãi lại; hãy nhắc nhẹ, cụ thể." } },
      lines: [
        L("l1", null, "It's her roommate's turn, but the bin is full again.", "Đến lượt bạn cùng phòng, mà thùng rác lại đầy."),
        L("l2", "lan", "You always forget everything!", "Bạn lúc nào cũng quên hết!", { face: "stern", pose: "point", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "“Always” attacks the person. Remind gently, and be specific.", "“Lúc nào cũng” là chê con người. Hãy nhắc nhẹ và cụ thể."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "lan", "It's your turn for the rubbish today. The bin is full. Could you take it out?", "Hôm nay đến lượt bạn đổ rác đấy, thùng đầy rồi, bạn đổ giúp nhé.", { phase: "redo", face: "happy", pose: "explain" }),
      ] },
    { id: "s21", module: "SCENE-01", ref: "p18,p19",
      data: { set: "room", label: "Ai thấy bẩn thì dọn", actors: [{ id: "lan", side: "left" }], props: ["broom"] },
      lines: [
        L("l1", null, "No schedule in Lan's room: whoever sees a mess cleans it.", "Phòng Lan không có lịch: ai thấy bẩn thì dọn."),
        L("l2", "lan", "Me again… every single week.", "Lại mình… tuần nào cũng thế.", { face: "sad", pose: "hold" }),
        L("l3", null, "The others had no idea she was tired. When she suggested a rota, they agreed at once.", "Hai bạn kia không biết Lan mệt. Lan đề xuất lịch xoay vòng, cả hai đồng ý ngay."),
        L("l4", "lan", "I should have said it sooner.", "Giá mà mình nói sớm hơn.", { face: "happy" }),
        L("l5", "det", "Shared jobs need a schedule, so nobody loses out.", "Việc chung có lịch, không ai phải chịu thiệt."),
      ] },

    // ── Chương 5
    { id: "s22", module: "HOST-03", data: { n: 5, of: 6, title: "Bất đồng: nói cho khỏi căng" },
      lines: [L("l1", "det", "Part five: how to disagree without a fight.", "Phần năm: có bất đồng thì nói thế nào cho khỏi căng?")] },
    { id: "s23", module: "CMP-06", ref: "p20",
      data: { do: ["Nói sớm, khi chuyện còn nhỏ", "Nói riêng, chỉ hai người"], dont: ["Nói trước mặt người khác", "Đăng bóng gió lên mạng"],
        doIcons: ["alarm-clock", "speech-balloon"], dontIcons: ["busts-in-silhouette", "mobile-phone"] },
      lines: [
        L("l1", null, "Speak early, while it's still small. Waiting months makes it bigger.", "Nói sớm khi chuyện còn nhỏ; đợi mấy tháng thì chuyện lớn dần."),
        L("l2", null, "And speak privately. Not in front of others, and no hints online.", "Và nói riêng: không trước mặt người khác, không đăng bóng gió lên mạng."),
      ] },
    { id: "s24", module: "CMP-01", ref: "p21",
      data: { labels: ["Nói về con người", "Nói về việc"], left: "“Bạn bừa bộn quá”", right: "Điều mình thấy, điều mình cần, gợi ý cách làm", illus: ["angry-face", "light-bulb"] },
      lines: [
        L("l1", null, "Talk about the task, not the person. Not “You're so messy.”", "Nói về việc, đừng nói về con người. Đừng nói “Bạn bừa bộn quá”."),
        L("l2", null, "Say: “Dishes left overnight attract ants. I'd like them washed the same evening. Is that okay?”", "Hãy nói: “Bát để qua đêm hay có kiến, mình mong bát được rửa ngay trong tối, bạn thấy được không?”"),
        L("l3", null, "What you see, what you need, and a suggestion.", "Điều mình thấy, điều mình cần, và gợi ý cách làm."),
      ] },
    { id: "s25", module: "REL-01", ref: "p22",
      data: { cause: "Bạn cùng phòng bật đèn khuya vì phải làm bài nhóm", effect: "Giải pháp: một chiếc đèn bàn nhỏ", causeIllus: "light-bulb", effectIllus: "desktop-computer" },
      lines: [
        L("l1", null, "Listen to the other side. Ask why first.", "Nghe cả phía bên kia: hỏi lý do trước đã."),
        L("l2", null, "Maybe the light is on late for a group project. The fix is a small desk lamp.", "Có khi bạn ấy bật đèn khuya vì làm bài nhóm: giải pháp là một chiếc đèn bàn nhỏ."),
        L("l3", null, "It's not about who wins.", "Không phải chuyện ai thắng ai."),
      ] },
    { id: "s26", module: "DLG-01", ref: "p23,p24",
      data: { set: "room", label: "Lan, trước khi bấm đăng",
        actors: [{ id: "lan", side: "left", pose: "phone" }],
        verdict: { ok: false, label: "Đăng bóng gió lên mạng",
          why: "Người kia thấy bị bêu xấu trước cả lớp và chỉ muốn tự vệ." } },
      lines: [
        L("l1", null, "Back to Lan, and her post.", "Quay lại Lan và dòng định đăng."),
        L("l2", "lan", "Done. I'll post it, and everyone will see.", "Xong. Đăng lên cho mọi người cùng thấy.", { face: "stern", pose: "phone", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "She'll feel shamed in front of the class, and just defend herself.", "Bạn ấy sẽ thấy bị bêu xấu trước cả lớp, và chỉ muốn tự vệ."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "lan", "I'll wait until it's just the two of us.", "Đợi lúc chỉ có hai đứa, mình nói riêng.", { phase: "redo", face: "thinking" }),
        L("l7", "lan", "On weeknights I need to sleep early. Can your friends leave before ten?", "Tối trong tuần mình cần ngủ sớm, bạn bè về chơi mình hẹn về trước mười giờ nhé?", { phase: "redo", pose: "explain", face: "happy" }),
        L("l8", "det", "A problem? Talk in private, not online.", "Có chuyện nói riêng, đừng nói lên mạng.", { phase: "redo" }),
      ] },

    // ── Chương 6
    { id: "s27", module: "HOST-03", data: { n: 6, of: 6, title: "Nhờ người, và khi chuyển đi" },
      lines: [L("l1", "det", "Part six: getting help, and moving out.", "Phần sáu: khi nào nhờ người khác, và khi muốn chuyển đi.")] },
    { id: "s28", module: "LIST-02", ref: "p25",
      data: { title: "Không ổn, hoặc mất đồ, bị đe doạ: báo", items: [
        { icon: "house", illus: "house", text: "Chủ nhà" },
        { icon: "building", illus: "office-building", text: "Quản lý ký túc xá" },
        { icon: "users", illus: "school", text: "Phòng công tác sinh viên" } ], illus: "handshake" },
      lines: [
        L("l1", null, "Talked kindly and it's still not okay? Or something serious, like theft or threats?", "Đã nói tử tế mà vẫn không ổn, hoặc chuyện nghiêm trọng như mất đồ, bị đe doạ?"),
        L("l2", null, "Tell the landlord, the dorm manager, or student affairs. You don't carry it alone.", "Báo chủ nhà, quản lý ký túc xá, hoặc phòng công tác sinh viên. Bạn không phải tự gánh."),
      ] },
    { id: "s29", module: "HOST-02", ref: "p26",
      data: { statement: "Khoá tủ đồ quý là đang nghi ngờ bạn cùng phòng", truth: false,
        why: "Phòng ở ghép nhiều người ra vào; đó là thói quen tốt, không phải nghi ngờ ai." },
      lines: [
        L("l1", "det", "Locking away your valuables means you suspect your roommate. True or false?", "Khoá tủ đồ quý là đang nghi ngờ bạn cùng phòng. Đúng hay sai?"),
        L("l2", "det", "False. Many people come and go. Locking cash, papers and laptops is just a good habit.", "Sai. Phòng nhiều người ra vào; khoá tiền, giấy tờ, máy tính là thói quen tốt.", { face: "happy" }),
      ] },
    { id: "s30", module: "LIST-06", ref: "p27",
      data: { title: "Muốn chuyển đi", steps: [
        { text: "Báo cả phòng sớm", illus: "speech-balloon" },
        { text: "Cùng tính tiền cọc, điện tháng cuối", illus: "money-bag" },
        { text: "Giúp tìm người thay nếu được", illus: "busts-in-silhouette" } ] },
      lines: [
        L("l1", null, "Want to move out? Tell everyone early.", "Muốn chuyển đi: báo cả phòng sớm."),
        L("l2", null, "Work out the deposit and the last month's power together, and help find a replacement.", "Cùng tính tiền cọc, tiền điện tháng cuối, giúp tìm người thay nếu được."),
        L("l3", null, "Leave on good terms, and you keep a friend.", "Ra đi êm đẹp thì vẫn giữ được một người bạn."),
      ] },
    { id: "s31", module: "SCENE-01", ref: "p28",
      data: { set: "home", label: "Nếu bạn là phụ huynh", actors: [{ id: "lan", side: "left" }, { id: "binh", side: "right" }] },
      lines: [
        L("l1", "lan", "Dad, my roommate and I had a bit of a clash.", "Bố ơi, con với bạn cùng phòng có chút va chạm.", { face: "sad", to: "binh" }),
        L("l2", "binh", "Tell me what happened. Then let's think how you can talk to her honestly.", "Con kể bố nghe. Rồi mình nghĩ cách con nói thẳng thắn với bạn nhé.", { pose: "explain", face: "happy", to: "lan" }),
        L("l3", null, "Parents: listen, and suggest how to talk. Don't call the other parents, or say “move out now.”", "Phụ huynh: lắng nghe, gợi ý cách nói; đừng gọi phụ huynh bên kia hay bảo con chuyển đi ngay."),
      ] },

    // ── Tổng kết, câu đố, kết
    { id: "s32", module: "HOST-01", ref: "p5,p14,p19,p24",
      data: { title: "Bốn câu mang về", pose: "present", items: ["Thân là một chuyện, hợp nếp sống là chuyện khác", "Tiền bạc vẫn phân minh", "Việc chung có lịch", "Có chuyện nói riêng"] },
      lines: [
        L("l1", "det", "Being close isn't the same as living well together.", "Thân là một chuyện, hợp nếp sống là chuyện khác."),
        L("l2", "det", "Keep money clear.", "Bạn bè thân mấy, tiền bạc vẫn phân minh."),
        L("l3", "det", "Shared jobs need a schedule.", "Việc chung có lịch."),
        L("l4", "det", "And talk in private, not online.", "Có chuyện nói riêng, đừng nói lên mạng."),
      ] },
    { id: "s33", module: "QUIZ-01", ref: "questions[28]",
      data: {
        q: "Something your roommate does bothers you, when and where should you raise it?",
        options: [
          "Only after it happens many times, so you have strong proof to show them",
          "Early, while it is still small, and privately rather than in front of others",
          "In front of friends, so others can help decide who is right",
        ],
        correct: 1, countdown: 5, illus: "speech-balloon",
        why: "Nói sớm thì chuyện còn nhỏ; nói riêng thì không ai mất mặt.",
      },
      lines: [
        L("l1", null, "Something your roommate does bothers you, when and where should you raise it?", "Có việc bạn cùng phòng làm khiến bạn khó chịu, nên nói vào lúc nào và ở đâu?"),
        L("l2", null, "Early, while it is still small, and privately rather than in front of others.", "Nói sớm khi chuyện còn nhỏ, và nói riêng, không trước mặt người khác."),
        L("l3", null, "Early, it's easy to fix. In private, nobody loses face.", "Nói sớm thì dễ sửa. Nói riêng thì không ai mất mặt."),
      ] },
    { id: "s34", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Nghe tiếng Anh, chọn đáp án đúng" },
      lines: [
        L("l1", "det", "Tonight, sit with your roommates for fifteen minutes and write your first five house rules.", "Tối nay ngồi với cả phòng mười lăm phút, viết năm luật nhà đầu tiên."),
        L("l2", "det", "Then try the forty questions below.", "Rồi thử bốn mươi câu hỏi bên dưới nhé."),
      ] },
  ],
};
