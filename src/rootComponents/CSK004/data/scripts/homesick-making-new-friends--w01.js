// Kịch bản video W lần 3 (#110) — "Nhớ nhà, cô đơn những tuần đầu: làm quen bạn mới thế nào?" · chuỗi "Chuẩn bị vào đại học xa nhà"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "homesick-making-new-friends--w01",
  hook: "HOOK-13",
  loop: { open: "s01", close: "s34" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (D)
  unit: { audience: "first-year-students-living-away", slug: "homesick-making-new-friends", door: "ky-nang", level: "B1",
    title: "Nhớ nhà, cô đơn những tuần đầu: làm quen bạn mới thế nào?", series: "Chuẩn bị vào đại học xa nhà" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Hiếu → Dũng; “bạn” trong khung 🔀 p7 → Lan; ba bạn cùng nhóm của Hiếu → Lan (một người đại diện); phụ huynh (p29, người bố trong questions[37]) → Bác Bình (bố Lan); người ở phòng tư vấn (p25) → Cô Hoa (chỉ phản ứng, không thoại). Chuyện của Toàn (p27) kể không tên ở STORY-05 s30. Vai mới: không dùng (mẹ ở khung p7 chỉ ở đầu dây điện thoại, không phải bà cụ). Phủ ý: 29/29. HOOK-13: chi tiết bị bỏ qua (người khác cũng đang ngại, p9, p13) — hé ở s01, lộ ở DLG s13. Câu trả lời từ chối của Dũng ở s16 là lời trung lập dựng theo p12. Đoạn p26 (ý nghĩ làm hại bản thân) viết đúng lời bài, giọng bình tĩnh, có số 115 như bài. Câu đố: questions[22].",
  scenes: [
    // ── Mở đầu: chi tiết bị bỏ qua
    { id: "s01", module: "SCENE-01", ref: "p13",
      data: { set: "campus", label: "Chuyện của Dũng", actors: [{ id: "dung", side: "left", pose: "hold" }], props: ["headphone"] },
      lines: [
        L("l1", null, "Every class, Dũng sits at the back with headphones on, waiting for someone to talk first.", "Buổi nào Dũng cũng ngồi bàn cuối, đeo tai nghe, chờ ai đó bắt chuyện trước."),
        L("l2", "dung", "Week five. Everyone has a group already…", "Tuần thứ năm rồi. Ai cũng có nhóm cả…", { face: "sad" }),
        L("l3", null, "But Dũng is missing one small detail. Keep watching.", "Nhưng Dũng đang bỏ sót một chi tiết nhỏ. Xem tiếp nhé."),
      ], beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Nhớ nhà, làm quen bạn mới thế nào?", pose: "present",
        items: ["Giữ nếp sinh hoạt đều", "Gọi về nhà vừa đủ", "Mỗi ngày mở lời một chút", "Chọn một nơi để gắn bó"] },
      lines: [
        L("l1", "det", "Homesick and lonely? So how do you make new friends? It gets easier when you…", "Nhớ nhà, cô đơn? Vậy làm quen bạn mới thế nào? Sẽ nhẹ dần khi bạn…"),
        L("l2", "det", "keep a regular routine,", "giữ nếp sinh hoạt đều,"),
        L("l3", "det", "call home, but not too much,", "gọi về nhà vừa đủ,"),
        L("l4", "det", "start a small chat every day,", "mỗi ngày mở lời một chút,"),
        L("l5", "det", "and pick one place to belong.", "và chọn một nơi để gắn bó."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng qua những tuần nhớ nhà", chapters: [
        { label: "Nhớ nhà có bình thường?", illus: "house" },
        { label: "Gọi về bao nhiêu là vừa", illus: "mobile-phone" },
        { label: "Làm quen bạn mới", illus: "waving-hand" },
        { label: "Chọn câu lạc bộ", illus: "busts-in-silhouette" },
        { label: "Buổi tối, cuối tuần", illus: "crescent-moon" },
        { label: "Khi cần người giúp", illus: "handshake" } ] },
      lines: [
        L("l1", null, "Six parts: is it normal, calling home, making friends,", "Sáu phần: có bình thường không, gọi về nhà, làm quen bạn,"),
        L("l2", null, "clubs, lonely evenings, and when to get help.", "câu lạc bộ, buổi tối một mình, và khi cần người giúp."),
      ] },

    // ── Chương 1
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Nhớ nhà có bình thường?" },
      lines: [L("l1", "det", "Part one: is feeling homesick normal?", "Phần một: nhớ nhà như thế này có bình thường không?")] },
    { id: "s05", module: "HOST-02", ref: "p1",
      data: { statement: "Nhớ nhà là dấu hiệu mình yếu đuối", truth: false,
        why: "Rất bình thường: mất cùng lúc bữa cơm, tiếng nói, bạn cũ. Bạn có một gia đình đáng nhớ." },
      lines: [
        L("l1", "det", "Feeling homesick means you're weak. True or false?", "Nhớ nhà là dấu hiệu mình yếu đuối. Đúng hay sai?"),
        L("l2", "det", "False. It's very normal. You lose family meals, voices and old friends all at once.", "Sai. Rất bình thường: cùng lúc mất bữa cơm, tiếng nói, nhóm bạn cũ.", { face: "happy" }),
        L("l3", "det", "It means you have a family worth missing.", "Đó là dấu hiệu bạn có một gia đình đáng nhớ."),
      ] },
    { id: "s06", module: "LIST-02", ref: "p2",
      data: { title: "Nỗi nhớ thường đến theo đợt", items: [
        { icon: "moon", illus: "crescent-moon", text: "Buổi tối" },
        { icon: "calendar", illus: "spiral-calendar", text: "Cuối tuần" },
        { icon: "thermometer", illus: "face-with-thermometer", text: "Khi ốm" },
        { icon: "phone", illus: "mobile-phone", text: "Vừa cúp máy, thấy ảnh bạn cũ" } ], illus: "house" },
      lines: [
        L("l1", null, "It comes in waves: evenings, weekends, when you're ill.", "Nỗi nhớ đến theo đợt: buổi tối, cuối tuần, khi ốm."),
        L("l2", null, "Right after calling Mom, or seeing photos of old friends together.", "Khi vừa cúp máy với mẹ, khi thấy ảnh bạn cũ tụ tập."),
        L("l3", null, "Know your hard times, and plan something to do, instead of lying alone with your phone.", "Biết trước lúc khó, chuẩn bị sẵn một việc, thay vì nằm lướt điện thoại."),
      ] },
    { id: "s07", module: "REL-01", ref: "p3",
      data: { cause: "Lịch sinh hoạt đều, vài người bạn đi ăn, đi học cùng", effect: "Cảm giác nhớ nhà nhẹ dần",
        causeIllus: "spiral-calendar", effectIllus: "smiling-face" },
      lines: [
        L("l1", null, "For many students, it eases with a regular routine and a few friends to eat and study with.", "Với nhiều bạn, nỗi nhớ nhẹ dần khi có nếp sinh hoạt và vài người bạn."),
        L("l2", null, "You don't have to stop missing home to start living well here.", "Không cần hết nhớ nhà mới bắt đầu sống tốt ở nơi mới."),
      ] },

    // ── Chương 2
    { id: "s08", module: "HOST-03", data: { n: 2, of: 6, title: "Gọi về bao nhiêu là vừa?" },
      lines: [L("l1", "det", "Part two: how often should you call home?", "Phần hai: gọi về nhà bao nhiêu là vừa?")] },
    { id: "s09", module: "SCENE-03", ref: "p4,p7,p8",
      data: { set: "room", actors: [{ id: "lan", pose: "phone" }],
        left: { label: "Gọi mỗi tối, từ chối", ok: false }, right: { label: "Hẹn ba tối, đi ăn", ok: true } },
      lines: [
        L("a1", "lan", "Mom, I miss home so much…", "Mẹ ơi, con nhớ nhà quá…", { phase: "a", face: "sad", pose: "phone" }),
        L("a2", null, "Two-hour video calls every night, crying, and no to every dinner invite.", "Tối nào cũng gọi video, có hôm hai tiếng, vừa gọi vừa khóc, từ chối mọi lời rủ.", { phase: "a" }),
        L("a3", null, "A month later, the others are a group. Mom can't sleep for worry.", "Một tháng sau, các bạn đã thành nhóm. Mẹ lo đến mất ngủ.", { phase: "a" }),
        L("b1", "lan", "Mom, let's talk three evenings a week. Tonight I'm eating with my floor mates!", "Mẹ ơi, mình hẹn ba tối mỗi tuần nhé. Tối nay con đi ăn với các bạn cùng tầng!", { phase: "b", face: "happy", pose: "phone" }),
        L("b2", null, "Set call times help the whole family relax, and give you time for the new place.", "Lịch gọi cố định giúp cả nhà yên tâm, bạn có thời gian làm quen nơi mới.", { phase: "b" }),
        L("b3", "det", "Call when you miss home, but don't let the calls keep you in.", "Nhớ nhà thì gọi, nhưng đừng để cuộc gọi giữ chân.", { phase: "b" }),
      ] },
    { id: "s10", module: "CMP-01", ref: "p5",
      data: { labels: ["Chỉ kể chuyện buồn", "Kể cả chuyện vui nhỏ"], left: "Bố mẹ lo, bạn cũng thấy nơi mới toàn điều tệ", right: "Món mới ăn thử, người bạn mới, buổi học thú vị", illus: ["crying-face", "smiling-face"] },
      lines: [
        L("l1", null, "When you call, share small good things too.", "Khi gọi, hãy kể cả chuyện vui nhỏ."),
        L("l2", null, "A new food, a new friend, an interesting class.", "Món mới ăn thử, người bạn mới, buổi học thú vị."),
        L("l3", null, "Only sad news? Your parents worry, and the new place feels all bad to you too.", "Chỉ kể chuyện buồn: bố mẹ lo, mình cũng thấy nơi mới toàn điều tệ."),
      ] },
    { id: "s11", module: "REL-02", ref: "p6",
      data: { chain: ["Về quê mỗi cuối tuần tháng đầu", "Lỡ buổi đi chơi, buổi sinh hoạt", "Lỡ lúc mọi người kết bạn với nhau"], illus: ["house", "party-popper", "busts-in-silhouette"] },
      lines: [
        L("l1", null, "Going home every weekend in the first month feels nice.", "Về quê mỗi cuối tuần tháng đầu nghe rất dễ chịu."),
        L("l2", null, "But you miss the outings and activities where people become friends.", "Nhưng bạn lỡ những buổi đi chơi, sinh hoạt, nơi mọi người kết bạn."),
        L("l3", null, "Try staying for a few of the first weekends.", "Hãy thử ở lại vài cuối tuần đầu tiên."),
      ] },

    // ── Chương 3
    { id: "s12", module: "HOST-03", data: { n: 3, of: 6, title: "Làm quen bạn mới" },
      lines: [L("l1", "det", "Part three: back to Dũng. Where do new friends start?", "Phần ba: quay lại Dũng. Làm quen bạn mới bắt đầu từ đâu?")] },
    { id: "s13", module: "DLG-01", ref: "p9,p13,p14",
      data: { set: "campus", label: "Dũng, tuần thứ năm",
        actors: [{ id: "dung", side: "left", pose: "hold" }, { id: "lan", side: "right" }],
        verdict: { ok: false, label: "Ngồi chờ người khác bắt chuyện",
          why: "Bạn mới không tự đến; các nhóm thành hình rồi thì càng khó chen vào." } },
      lines: [
        L("l1", "dung", "I'll just wait. Someone will talk to me one day.", "Cứ ngồi chờ thôi. Thế nào cũng có người bắt chuyện.", { face: "neutral", stop: true }),
        L("l2", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l3", "det", "The first week is easiest: everyone is new and hoping for friends. Take one small step.", "Tuần đầu dễ nhất: ai cũng mới, ai cũng mong có bạn. Hãy bước một bước."),
        L("l4", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l5", "dung", "Are you in this class too? Can I sit here?", "Bạn cũng học lớp này à? Mình ngồi đây được không?", { phase: "redo", pose: "wave", face: "thinking", to: "lan" }),
        L("l6", "lan", "Sure! Honestly, I was too shy to talk first.", "Được chứ! Thật ra mình cũng ngại mở lời lắm.", { phase: "redo", face: "happy" }),
        L("l7", "det", "That's the detail Dũng missed: the person next to you may be just as nervous.", "Chi tiết Dũng bỏ sót: người ngồi cạnh có thể cũng đang lo như bạn.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },
    { id: "s14", module: "HOST-01", ref: "p10",
      data: { title: "Câu mở lời: không cần hay, chỉ cần cụ thể", pose: "point",
        items: ["“Bạn cũng học lớp này à, mình ngồi đây được không?”", "“Bạn quê ở đâu thế?”", "“Bài hôm nay bạn hiểu phần cuối không?”"] },
      lines: [
        L("l1", "det", "Your first line doesn't need to be clever. Just specific.", "Câu mở lời không cần hay, chỉ cần cụ thể."),
        L("l2", "det", "“Are you in this class too? Can I sit here?”", "“Bạn cũng học lớp này à, mình ngồi đây được không?”"),
        L("l3", "det", "“Where are you from?”", "“Bạn quê ở đâu thế?”"),
        L("l4", "det", "“Did you understand the last part of today's lesson?”", "“Bài hôm nay bạn hiểu phần cuối không?”"),
      ] },
    { id: "s15", module: "LIST-07", ref: "p11",
      data: { title: "Tình bạn lớn lên từ những lần gặp lặp lại", items: [
        { text: "Ngồi gần cùng vài người mỗi buổi", illus: "chair" },
        { text: "Đi ăn trưa cùng sau giờ học", illus: "bento-box" },
        { text: "Lập một nhóm ôn bài nhỏ", illus: "books" } ] },
      lines: [
        L("l1", null, "Friendships grow from meeting again and again.", "Tình bạn lớn lên từ những lần gặp lặp lại."),
        L("l2", null, "Sit near the same few people. Have lunch together after class.", "Ngồi gần cùng vài người. Đi ăn trưa cùng sau giờ học."),
        L("l3", null, "Start a small study group. Small, regular meetings beat one big party.", "Lập nhóm ôn bài nhỏ. Gặp đều nhóm nhỏ hơn một bữa tiệc lớn."),
      ] },
    { id: "s16", module: "SCENE-01", ref: "p12,p14",
      data: { set: "campus", label: "Mình rủ trước", actors: [{ id: "dung", side: "left" }, { id: "lan", side: "right" }] },
      lines: [
        L("l1", null, "Don't wait to be invited. You can ask first.", "Đừng chờ người khác rủ. Bạn có thể là người rủ trước."),
        L("l2", "lan", "I'm going to the library this afternoon. Want to come?", "Chiều nay mình định ra thư viện, bạn đi cùng không?", { pose: "explain", face: "happy", to: "dung" }),
        L("l3", "dung", "Sorry, not today.", "Hôm nay mình bận mất rồi.", { face: "neutral", react: { lan: "neutral" } }),
        L("l4", null, "A no is normal. Ask someone else, or ask again another day.", "Bị từ chối một lần là bình thường. Rủ người khác, hoặc rủ lại lần sau."),
        L("l5", "det", "New friends don't just appear. You take one small step.", "Bạn mới không tự đến, mình phải bước một bước."),
      ] },

    // ── Chương 4
    { id: "s17", module: "HOST-03", data: { n: 4, of: 6, title: "Câu lạc bộ nào hợp?" },
      lines: [L("l1", "det", "Part four: which club suits you?", "Phần bốn: câu lạc bộ nào thì hợp với mình?")] },
    { id: "s18", module: "LIST-13", ref: "p15,p16",
      data: { title: "Chọn câu lạc bộ", items: [
        { title: "Đi thử vài buổi giới thiệu đầu năm", detail: "Chọn theo sở thích thật, hoặc thứ bạn muốn học.", illus: "magnifying-glass-tilted-left" },
        { title: "Lịch sinh hoạt đều đặn", detail: "Gặp cùng một nhóm người nhiều lần: cách kết bạn dễ nhất.", illus: "spiral-calendar" },
        { title: "Một hoặc hai nơi gắn bó", detail: "Học kỳ đầu còn cần thời gian để học, ngủ, làm quen thành phố.", illus: "pushpin" } ] },
      lines: [
        L("l1", null, "Try a few club fairs at the start of the year. Choose what you really like, or want to learn.", "Đi thử vài buổi giới thiệu câu lạc bộ, chọn theo sở thích thật."),
        L("l2", null, "Regular meetings mean the same people again and again. That's the easiest way to make friends.", "Sinh hoạt đều là gặp cùng nhóm người nhiều lần: cách kết bạn dễ nhất."),
        L("l3", null, "Pick one or two. You still need time to study, sleep and learn the city.", "Chọn một hai nơi. Bạn còn cần thời gian học, ngủ, làm quen thành phố."),
      ] },
    { id: "s19", module: "CMP-06", ref: "p17",
      data: { do: ["Lùi lại, xem kỹ nhóm đó"], dont: ["Ép nộp nhiều tiền", "Bắt bỏ học", "Áp lực phải rủ thêm người"],
        doIcons: ["magnifying-glass-tilted-left"], dontIcons: ["money-with-wings", "school", "busts-in-silhouette"] },
      lines: [
        L("l1", null, "A good group won't push you to pay a lot, skip class, or recruit more people.", "Nhóm tốt không ép nộp nhiều tiền, không bắt bỏ học, không ép rủ thêm người."),
        L("l2", null, "If you see that, step back. See our lesson on scams aimed at new students.", "Gặp điều đó thì lùi lại; xem bài về những chiêu lừa nhắm vào tân sinh viên."),
      ] },
    { id: "s20", module: "CMP-03", ref: "p18",
      data: { title: "Hai bạn cùng vào trường", illus: "busts-in-silhouette",
        a: { label: "Bạn thứ nhất", do: "Năm câu lạc bộ ngay tuần đầu", result: "Kín lịch, bỏ bài, bỏ ngủ", illus: "spiral-calendar" },
        b: { label: "Bạn thứ hai", do: "Một câu lạc bộ, đi đều mỗi tuần", result: "Có nhóm bạn thân trước", illus: "handshake" } },
      lines: [
        L("l1", null, "One student joins five clubs in week one. Another picks one and goes every week.", "Một bạn đăng ký năm câu lạc bộ, một bạn chọn một và đi đều."),
        L("l2", null, "By mid-term, who has close friends first? Usually the second.", "Giữa kỳ, ai có bạn thân trước? Thường là bạn thứ hai."),
      ] },
    { id: "s20b", module: "HOST-01", ref: "p19",
      data: { pose: "point", text: "Ít mà đều hơn nhiều mà bỏ." },
      lines: [
        L("l3", "det", "Five clubs mean late meetings, skipped homework and sleep, and being the face they rarely see.", "Năm câu lạc bộ: họp kín tuần, bỏ bài, bỏ ngủ, nơi nào cũng “thỉnh thoảng mới thấy mặt”."),
        L("l4", "det", "A few things done regularly beat many you keep missing.", "Ít mà đều hơn nhiều mà bỏ."),
      ] },

    // ── Chương 5
    { id: "s21", module: "HOST-03", data: { n: 5, of: 6, title: "Buổi tối, cuối tuần" },
      lines: [L("l1", "det", "Part five: lonely evenings and weekends.", "Phần năm: buổi tối, cuối tuần một mình thì làm gì?")] },
    { id: "s22", module: "LIST-07", ref: "p20",
      data: { title: "Giữ nếp sinh hoạt đều", items: [
        { text: "Ngủ và dậy đúng giờ", illus: "alarm-clock" },
        { text: "Ăn đủ bữa", illus: "bowl-with-spoon" },
        { text: "Vận động một chút mỗi ngày", illus: "person-walking" } ] },
      lines: [
        L("l1", null, "Keep a routine: sleep and wake on time, eat every meal, move a little every day.", "Giữ nếp: ngủ dậy đúng giờ, ăn đủ bữa, vận động mỗi ngày."),
        L("l2", null, "A tired, sleepless body makes sadness much heavier.", "Cơ thể mệt và thiếu ngủ làm nỗi buồn nặng hơn rất nhiều."),
      ] },
    { id: "s23", module: "LIST-05", ref: "p21",
      data: { title: "Cuối tuần rảnh, thử", items: ["Lập danh sách vài nơi muốn khám phá", "Rủ bạn cùng phòng nấu một bữa chung", "Đi thư viện, công viên, chợ cuối tuần", "Gọi cho một người bạn cũ thay vì chỉ xem ảnh"], illus: "world-map" },
      lines: [
        L("l1", null, "List a few places you want to explore. Cook a meal with your roommate.", "Lập danh sách nơi muốn khám phá. Rủ bạn cùng phòng nấu bữa chung."),
        L("l2", null, "Go to the library, a park, or a weekend market.", "Đi thư viện, công viên, chợ cuối tuần."),
        L("l3", null, "And call an old friend, instead of just looking at their photos.", "Và gọi cho một người bạn cũ, thay vì chỉ xem ảnh của họ."),
      ] },
    { id: "s24", module: "SCENE-01", ref: "p22",
      data: { set: "room", label: "Mười một giờ đêm", actors: [{ id: "lan", side: "right", pose: "phone" }] },
      lines: [
        L("l1", "lan", "Everyone looks so happy with their new friends… I feel worse.", "Ai cũng vui với nhóm bạn mới… Mình càng buồn hơn.", { face: "sad", pose: "phone" }),
        L("l2", "det", "Those photos are chosen. People post their happiest moments, not their lonely days.", "Ảnh đã được chọn lọc: người ta đăng lúc vui nhất, không đăng ngày cô đơn.", { pose: "point" }),
        L("l3", "det", "Feel worse after scrolling? Set a time limit, or keep your phone away from your bed.", "Lướt xong buồn hơn: đặt giới hạn thời gian, hoặc để điện thoại xa giường.", { react: { lan: "thinking" } }),
      ] },
    { id: "s25", module: "REL-12", ref: "p23",
      data: { center: { label: "Căn phòng lạ bớt lạ", illus: "bed" }, spokes: [
        { label: "Một tấm ảnh gia đình", illus: "framed-picture" },
        { label: "Một món ăn mẹ làm", illus: "pot-of-food" },
        { label: "Một chiếc gối cũ", illus: "bed" } ] },
      lines: [
        L("l1", null, "Bring a few familiar things from home.", "Mang theo vài món quen thuộc từ nhà."),
        L("l2", null, "A family photo, some food Mom made, an old pillow.", "Một tấm ảnh gia đình, món ăn mẹ làm, chiếc gối cũ."),
        L("l3", null, "Small things make a strange room feel less strange.", "Những thứ nhỏ đó giúp căn phòng lạ bớt lạ hơn."),
      ] },

    // ── Chương 6
    { id: "s26", module: "HOST-03", data: { n: 6, of: 6, title: "Khi cần người giúp" },
      lines: [L("l1", "det", "Part six: when sadness needs someone's help.", "Phần sáu: khi nào nỗi buồn cần có người giúp?")] },
    { id: "s27", module: "CMP-01", ref: "p24",
      data: { labels: ["Một tối buồn", "Buồn kéo dài nhiều tuần"], left: "Thường qua đi", right: "Mất ngủ, bỏ ăn, không muốn đi học, hết hứng thú: tìm người nói chuyện", illus: ["crescent-moon", "speech-balloon"] },
      lines: [
        L("l1", null, "A sad evening usually passes.", "Một buổi tối buồn thường sẽ qua."),
        L("l2", null, "Sadness for weeks that doesn't ease? Poor sleep, not eating, not wanting class, no interest in anything?", "Buồn nhiều tuần không nhẹ, mất ngủ, bỏ ăn, không muốn đi học, hết hứng thú?"),
        L("l3", null, "Find someone to talk to. It's not something to just push through alone.", "Hãy tìm người nói chuyện. Đó không phải chuyện tự cố là qua."),
      ] },
    { id: "s28", module: "SCENE-01", ref: "p25",
      data: { set: "office", label: "Phòng tư vấn của trường", actors: [{ id: "lan", side: "right" }, { id: "hoa", side: "farright", pose: "hold" }] },
      lines: [
        L("l1", null, "Many schools have a counselling room. Ask student affairs, or visit a clinic.", "Nhiều trường có phòng tư vấn tâm lý: hỏi phòng công tác sinh viên, hoặc đi khám."),
        L("l2", "lan", "I've felt sad and tired for weeks. I'd like to talk to someone.", "Em thấy buồn và mệt suốt mấy tuần nay, em muốn được nói chuyện với ai đó.", { face: "sad", to: "hoa", react: { hoa: "happy" } }),
      ] },
    { id: "s29", module: "TEXT-04", ref: "p26",
      data: { text: "Có lúc nghĩ đến việc làm hại bản thân: nói ngay với người tin cậy, tìm bác sĩ hoặc chuyên viên tư vấn. Nguy hiểm ngay: gọi 115.", marks: ["nói ngay", "115"], illus: "telephone-receiver" },
      lines: [
        L("l1", null, "If you ever think about hurting yourself, tell someone you trust right away.", "Nếu có lúc nghĩ đến việc làm hại bản thân, hãy nói ngay với người tin cậy."),
        L("l2", null, "And see a doctor or a counsellor.", "Và tìm gặp bác sĩ hoặc chuyên viên tư vấn tâm lý."),
        L("l3", null, "In danger right now? Call one one five, or get someone to take you to the nearest clinic.", "Nguy hiểm ngay lúc đó: gọi cấp cứu 115 hoặc nhờ người đưa đến cơ sở y tế."),
        L("l4", null, "You deserve help, and you don't have to carry this alone.", "Bạn xứng đáng được giúp, và không phải chịu một mình."),
      ] },
    { id: "s30", module: "STORY-05", ref: "p27,p28",
      data: { label: "Tình huống thường gặp", panels: [
        { scene: ["man-student", "mobile-phone", "pensive-face"], caption: "Một bạn buồn từ đầu học kỳ, gọi về vẫn nói “con ổn”.", say: "Con ổn mà." },
        { scene: ["bed", "alarm-clock", "sleepy-face"], caption: "Bạn ấy nghỉ học buổi sáng, ngủ đến trưa, ăn qua loa." },
        { scene: ["busts-in-silhouette", "office-building", "relieved-face"], caption: "Bạn cùng phòng rủ đi ăn, cùng đến phòng tư vấn; bạn ấy nhẹ đi, đi học lại." } ] },
      lines: [
        L("l1", null, "One student was sad all term, but told his parents, “I'm fine.”", "Một bạn buồn suốt từ đầu kỳ, gọi về vẫn nói “con ổn”."),
        L("l2", null, "He skipped morning classes, slept till noon, barely ate.", "Bạn ấy nghỉ học buổi sáng, ngủ đến trưa, ăn qua loa."),
        L("l3", null, "His roommate noticed, kept inviting him to eat, and went with him to the counselling room.", "Bạn cùng phòng để ý, kiên nhẫn rủ đi ăn, rồi cùng đến phòng tư vấn."),
        L("l4", null, "After a few talks, and telling his parents the truth, he felt lighter.", "Sau vài buổi nói chuyện và kể thật với bố mẹ, bạn ấy thấy nhẹ đi."),
        L("l5", "det", "When sadness lasts, talk. Talking is where relief begins.", "Buồn lâu thì nói, nói ra là bắt đầu nhẹ."),
      ] },
    { id: "s31", module: "SCENE-01", ref: "p29",
      data: { set: "home", label: "Nếu bạn là phụ huynh", actors: [{ id: "binh", side: "center" }, { id: "lan", side: "right" }] },
      lines: [
        L("l1", "lan", "Dad, I miss home.", "Bố ơi, con nhớ nhà.", { face: "sad", to: "binh" }),
        L("l2", null, "Parents: listen first. Don't rush to say “just come home” or “there's nothing to be sad about.”", "Phụ huynh: lắng nghe trước, đừng vội bảo “thôi về đi” hay “có gì đâu mà buồn”."),
        L("l3", "binh", "I'm listening. Tell me about a new friend? A place you like there?", "Bố nghe đây. Kể bố nghe về một người bạn mới, một chỗ con thích?", { pose: "explain", face: "happy", to: "lan", react: { lan: "happy" } }),
        L("l4", null, "It helps them see the good in the new place.", "Câu hỏi ấy giúp con nhìn thấy điều tốt ở nơi mới."),
      ] },

    // ── Tổng kết, câu đố, kết
    { id: "s32", module: "HOST-01", ref: "p8,p14,p19,p28",
      data: { title: "Bốn câu mang về", pose: "present", items: ["Nhớ nhà thì gọi, đừng để cuộc gọi giữ chân", "Bạn mới không tự đến", "Ít mà đều hơn nhiều mà bỏ", "Buồn lâu thì nói"] },
      lines: [
        L("l1", "det", "Call home, but don't let it keep you in.", "Nhớ nhà thì gọi, nhưng đừng để cuộc gọi giữ chân."),
        L("l2", "det", "New friends don't just appear. Take a step.", "Bạn mới không tự đến, mình phải bước một bước."),
        L("l3", "det", "A few things, done regularly.", "Ít mà đều hơn nhiều mà bỏ."),
        L("l4", "det", "And when sadness lasts, talk.", "Và buồn lâu thì nói."),
      ] },
    { id: "s33", module: "QUIZ-01", ref: "questions[22]",
      data: {
        q: "Between joining many clubs and going regularly to just one, which usually brings close friends sooner?",
        options: [
          "Neither, because real friendships at university only begin in the final year",
          "Joining many clubs, since meeting the largest number of people is what counts most",
          "Going regularly to one club, because friendship grows from meeting the same people often",
        ],
        correct: 2, countdown: 5, illus: "busts-in-silhouette",
        why: "Tình bạn lớn lên từ những lần gặp lặp lại.",
      },
      lines: [
        L("l1", null, "Between joining many clubs and going regularly to just one, which usually brings close friends sooner?", "Giữa đăng ký nhiều câu lạc bộ và đi đều một câu lạc bộ, cách nào thường giúp có bạn thân sớm hơn?"),
        L("l2", null, "Going regularly to one club, because friendship grows from meeting the same people often.", "Đi đều một câu lạc bộ, vì tình bạn lớn lên từ những lần gặp lặp lại."),
        L("l3", null, "Five clubs fill your week, but everywhere you're just a face they see sometimes.", "Năm câu lạc bộ thì kín lịch, mà nơi nào cũng chỉ thỉnh thoảng thấy mặt."),
      ] },
    { id: "s34", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Nghe tiếng Anh, chọn đáp án đúng" },
      lines: [
        L("l1", "det", "Tomorrow, ask the person next to you one question, and set call times with your parents.", "Mai hỏi người ngồi cạnh một câu, và hẹn lịch gọi cố định với bố mẹ."),
        L("l2", "det", "Then try the forty questions below.", "Rồi thử bốn mươi câu hỏi bên dưới nhé."),
      ] },
  ],
};
