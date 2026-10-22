// Kịch bản video W lần 3 (#110) — "Làm việc cả ngày vẫn mệt? Cách quản lý năng lượng và nghỉ giải lao hợp lý" · chuỗi "Quản lý thời gian và sắp xếp ưu tiên"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub). HOOK-05: kết cục trước (Tùng mệt cuối ngày, 📌 p11), tua lại, cuối video quay lại Dũng.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-manage-energy-and-take-breaks-at-work--w01",
  hook: "HOOK-05",
  loop: { open: "s01", close: "s28" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "busy-workers", slug: "how-to-manage-energy-and-take-breaks-at-work", door: "ky-nang", level: "B1",
    title: "Làm việc cả ngày vẫn mệt? Cách quản lý năng lượng và nghỉ giải lao hợp lý", series: "Quản lý thời gian và sắp xếp ưu tiên" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Tùng, làm thiết kế (p11) → Dũng; chị Quế kế toán công nợ (p15) → Thảo. Người phân tích tài chính (🔀 p6), người tự làm (p20) giữ ở thẻ không tên. Chỗ đứng cố định: Dũng center, Thảo center (không cùng cảnh). Phủ ý: 22/22. Câu đố đổi sang questions[14] (không có tên; bản trước dùng câu có tên Tung).",
  scenes: [
    // ---------- Mở đầu ----------
    { id: "s01", module: "SCENE-01", ref: "p11",
      data: { set: "office", label: "Sáu giờ chiều",
        actors: [{ id: "dung", side: "center", face: "sad", pose: "stand" }], props: ["laptop"] },
      lines: [
        L("l1", null, "Six p.m. Dung's eyes are burning, and his head is buzzing.", "Sáu giờ chiều. Mắt Dũng cay xè, đầu ong ong."),
        L("l2", "dung", "I took breaks all day. Why am I still so tired?", "Cả ngày mình có nghỉ mà. Sao vẫn mệt thế này?", { face: "sad", pose: "shrug" }),
        L("l3", null, "Let's rewind and look at how he rests.", "Tua lại xem Dũng nghỉ thế nào.", { wait: 300 }),
      ],
      beats: { after: 600 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Giữ sức cho giờ làm", pose: "present",
        items: ["Việc khó vào giờ tỉnh táo", "Nghỉ ngắn, rời màn hình", "Giữ bữa trưa và giấc ngủ"] },
      lines: [
        L("l1", "det", "Why are you tired after a full day? Often, it's energy at the wrong time.", "Vì sao làm cả ngày vẫn mệt? Thường là cạn sức sai lúc."),
        L("l2", "det", "Hard work in your freshest hours.", "Việc khó vào giờ tỉnh táo nhất."),
        L("l3", "det", "Short breaks away from screens.", "Nghỉ ngắn, rời màn hình."),
        L("l4", "det", "And keep lunch and sleep.", "Và giữ bữa trưa, giấc ngủ."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Hôm nay ta đi qua", chapters: [
        { label: "Đủ giờ mà không xong", illus: "hourglass-not-done" },
        { label: "Tìm giờ tỉnh táo", illus: "notebook" },
        { label: "Xếp việc theo sức", illus: "spiral-calendar" },
        { label: "Nghỉ cho đúng", illus: "person-walking" },
        { label: "Bữa trưa", illus: "fork-and-knife-with-plate" },
        { label: "Thức khuya, giấc ngủ", illus: "bed" }] },
      lines: [
        L("l1", null, "Six parts. Full hours, unfinished work. Finding your best hours. Planning by energy.", "Sáu phần. Đủ giờ mà không xong. Tìm giờ tỉnh táo. Xếp việc theo sức."),
        L("l2", null, "Real breaks. Lunch. And late nights and sleep.", "Nghỉ cho đúng. Bữa trưa. Thức khuya và giấc ngủ."),
      ] },

    // ---------- Chương 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Đủ giờ mà việc không xong" },
      lines: [L("l1", "det", "Part one: full hours, but work not done.", "Phần một: làm đủ giờ mà việc vẫn không xong.")] },
    { id: "s05", module: "CMP-01", ref: "p1",
      data: { labels: ["Buổi sáng tỉnh táo", "Chiều muộn uể oải"], left: "Bản phân tích mất một tiếng",
        right: "Cùng bản đó mất gấp mấy lần, còn sai", illus: ["sunrise", "sleepy-face"] },
      lines: [
        L("l1", null, "An alert hour is very different from a tired hour.", "Một giờ tỉnh táo khác hẳn một giờ uể oải."),
        L("l2", null, "An analysis may take one hour in the morning.", "Một bản phân tích buổi sáng có thể mất một tiếng."),
        L("l3", null, "Late afternoon, it can take several times longer, with mistakes.", "Chiều muộn có thể mất gấp mấy lần, mà còn sai."),
        L("l4", null, "Managing time but ignoring energy is like scheduling a car with no fuel.", "Quản lý thời gian mà bỏ qua sức lực, như xếp lịch cho chiếc xe hết xăng."),
      ] },
    { id: "s06", module: "HOST-02", ref: "p2",
      data: { statement: "Mệt giữa chiều nghĩa là mình yếu hoặc lười", truth: false,
        why: "Ai cũng có lúc tỉnh, lúc đuối trong ngày. Hãy xếp việc hợp với nhịp đó." },
      lines: [
        L("l1", "det", "Feeling tired mid-afternoon means you're weak or lazy. True or false?", "Mệt giữa chiều nghĩa là mình yếu hay lười. Đúng hay sai?"),
        L("l2", "det", "False. Most people have highs and lows in a day.", "Sai. Hầu hết mọi người đều có lúc tỉnh, lúc đuối trong ngày.", { face: "stern" }),
        L("l3", "det", "Don't fight the dip. Put lighter tasks there.", "Đừng chống lại lúc đuối. Đặt việc nhẹ vào đó."),
      ] },

    // ---------- Chương 2 ----------
    { id: "s07", module: "HOST-03", data: { n: 2, of: 6, title: "Giờ nào mình tỉnh táo nhất?" },
      lines: [L("l1", "det", "Part two: when are you most alert?", "Phần hai: giờ nào mình tỉnh táo nhất?")] },
    { id: "s08", module: "STORY-06", ref: "p3",
      data: { label: "Ghi nhịp năng lượng", title: "Năm ngày, cứ hai giờ ghi một chữ", entries: [
        { time: "9:00", text: "Tỉnh · đang viết · đã ăn sáng · ngủ đủ", illus: "high-voltage" },
        { time: "11:00", text: "Bình thường · trả lời email", illus: "envelope" },
        { time: "15:00", text: "Uể oải · đọc báo cáo · ăn trưa vội", illus: "sleepy-face" }] },
      lines: [
        L("l1", null, "For five work days, every two hours, write one word: alert, normal, or tired.", "Trong năm ngày làm việc, cứ khoảng hai giờ ghi một chữ: tỉnh, bình thường, hay uể oải."),
        L("l2", null, "Add what you were doing, whether you'd eaten, and how you slept.", "Kèm đang làm gì, đã ăn chưa, đêm trước ngủ thế nào."),
        L("l3", null, "At the weekend, find your usual best time, and your usual worst.", "Cuối tuần, tìm khung giờ bạn thường tỉnh nhất, và thường đuối nhất."),
      ] },
    { id: "s09", module: "TEXT-02", ref: "p4",
      data: { text: "Ghi lại một tuần đáng tin hơn đoán.", keywords: ["Ghi lại", "đoán"], illus: "notebook" },
      lines: [
        L("l1", null, "Many people are most alert early in the morning. But not everyone.", "Nhiều người tỉnh nhất đầu buổi sáng, nhưng không phải ai cũng vậy."),
        L("l2", null, "A one-week record beats guessing, and beats general advice.", "Ghi lại một tuần đáng tin hơn đoán, và hơn lời khuyên chung.", { wait: 300 }),
      ] },

    // ---------- Chương 3 ----------
    { id: "s10", module: "HOST-03", data: { n: 3, of: 6, title: "Xếp việc theo sức" },
      lines: [L("l1", "det", "Part three: match tasks to your energy.", "Phần ba: biết rồi thì xếp việc thế nào.")] },
    { id: "s11", module: "CMP-05", ref: "p5",
      data: { title: "Xếp việc theo nhịp", columns: [{ label: "Khung tỉnh táo", illus: "high-voltage" }, { label: "Khung uể oải", illus: "sleepy-face" }],
        rows: [{ label: "Loại việc", cells: ["viết, phân tích, quyết định", "email, sắp hồ sơ, gọi ngắn"] },
          { label: "Lưu ý", cells: ["giữ khỏi họp không cần", "việc thường lệ"] }] },
      lines: [
        L("l1", null, "Hard work, like writing, analysing and decisions: your most alert block.", "Việc khó như viết, phân tích, ra quyết định: khung tỉnh táo nhất."),
        L("l2", null, "Routine work, like emails, filing and short calls: your low block.", "Việc thường lệ như email, sắp hồ sơ, gọi ngắn: khung uể oải."),
        L("l3", null, "Protect your alert block from unneeded meetings, when you can.", "Bảo vệ khung tỉnh táo khỏi họp không cần thiết, khi chủ động được."),
      ] },
    { id: "s12", module: "LIST-08", ref: "p6",
      data: { title: "Người phân tích tài chính xếp buổi sáng", items: [
        { title: "Cách A", detail: "Chín đến mười một giờ dọn hộp thư, ba giờ chiều mới mở bảng số liệu", illus: "envelope" },
        { title: "Kết quả", detail: "Bảng bị trả về vì sai công thức hai tuần liền", illus: "sleepy-face" },
        { title: "Cách B", detail: "Phân tích từ chín giờ, email để sang đầu giờ chiều", illus: "bar-chart" },
        { title: "Kết quả", detail: "Email vẫn trả lời trong ngày, bảng xong nhanh hơn, hết bị trả về", illus: "check-mark-button" }] },
      lines: [
        L("l1", null, "A financial analyst. Way A: clear the inbox from nine to eleven, to feel light.", "Một người phân tích tài chính. Cách A: chín đến mười một giờ dọn hộp thư cho “nhẹ đầu”."),
        L("l2", null, "The spreadsheet opens at three, when he's sleepy. Sent back for formula errors, two weeks running.", "Ba giờ chiều mới mở bảng số liệu, lúc buồn ngủ. Bị trả về vì sai công thức hai tuần liền."),
        L("l3", null, "Way B: analysis from nine, email in the early afternoon.", "Cách B: phân tích từ chín giờ, email để đầu giờ chiều."),
        L("l4", null, "Emails still get answered that day. The spreadsheet is faster, and no longer sent back.", "Email vẫn trả lời trong ngày. Bảng xong nhanh hơn, hết bị trả về."),
      ] },
    { id: "s13", module: "TEXT-01", ref: "p7",
      data: { text: "Đừng tiêu giờ vàng cho hộp thư.", illus: "envelope" },
      lines: [L("l1", null, "Don't spend your golden hours on your inbox.", "Đừng tiêu giờ vàng cho hộp thư.", { wait: 300 })] },
    { id: "s14", module: "HOST-01", ref: "p8",
      data: { title: "Buộc làm việc khó buổi chiều?", pose: "think", items: ["Nghỉ ngắn, vận động nhẹ trước", "Chia việc thành phần nhỏ", "Phần cần soát kỹ để sáng mai"] },
      lines: [
        L("l1", "det", "Must you do hard work in the afternoon? Three tips.", "Buộc phải làm việc khó buổi chiều? Ba mẹo."),
        L("l2", "det", "Take a short, active break first.", "Nghỉ ngắn và vận động nhẹ trước đó."),
        L("l3", "det", "Split the work into small parts.", "Chia việc thành phần nhỏ."),
        L("l4", "det", "And leave careful checking for the next morning, if you can. Fresh eyes catch more.", "Phần cần kiểm tra kỹ để sáng hôm sau nếu được. Mắt tỉnh thấy lỗi nhiều hơn."),
      ] },

    // ---------- Chương 4 ----------
    { id: "s15", module: "HOST-03", data: { n: 4, of: 6, title: "Nghỉ thế nào mới là nghỉ?" },
      lines: [L("l1", "det", "Part four: what is a real break?", "Phần bốn: nghỉ thế nào mới đúng là nghỉ?")] },
    { id: "s16", module: "LIST-02", ref: "p9",
      data: { title: "Năm đến mười phút xa màn hình", illus: "person-walking", items: [
        { icon: "footprints", illus: "person-walking", text: "Đứng dậy đi lại" },
        { icon: "cup-soda", illus: "cup-with-straw", text: "Rót cốc nước" },
        { icon: "eye", illus: "eyes", text: "Nhìn ra xa" },
        { icon: "users", illus: "busts-in-silhouette", text: "Nói vài câu với đồng nghiệp" }] },
      lines: [
        L("l1", null, "After one to two hours of focus, take five to ten minutes away from screens.", "Sau một đến hai giờ tập trung, nghỉ năm đến mười phút xa màn hình."),
        L("l2", null, "Walk around, get water, look far away, stretch, chat with a colleague.", "Đi lại, rót nước, nhìn ra xa, vươn vai, nói vài câu với đồng nghiệp."),
        L("l3", null, "Your eyes and mind truly relax.", "Mắt và đầu óc được thả lỏng thật."),
      ] },
    { id: "s17", module: "DLG-01", ref: "p10,p11",
      data: { set: "office", label: "Giờ nghỉ của Dũng",
        actors: [{ id: "dung", side: "center", face: "neutral", pose: "stand" }],
        verdict: { ok: false, label: "Mệt là mở điện thoại lướt mười lăm phút",
          why: "Mắt vẫn nhìn màn hình, đầu vẫn xử lý thêm thông tin, nên càng mệt." } },
      lines: [
        L("l1", null, "Dung is a designer. Here's his usual break.", "Dũng làm thiết kế. Đây là giờ nghỉ quen của anh."),
        L("l2", "dung", "So tired. Fifteen minutes on my phone will help.", "Mệt quá. Lướt điện thoại mười lăm phút cho đỡ căng.", { face: "sad", pose: "phone", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Your eyes stay on a screen, and your brain gets more to process. Many come back more tired.", "Mắt vẫn dán màn hình, đầu vẫn xử lý thêm thông tin. Nhiều người quay lại còn mệt hơn."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử cách khác nhé.", { phase: "redo" }),
        L("l6", "dung", "I'll walk down the corridor and get some water.", "Đi bộ một vòng hành lang, rót cốc nước.", { phase: "redo", face: "happy", pose: "stand" }),
        L("l7", "det", "The walk wins. You leave the screen, and your body moves a little.", "Đi bộ thắng. Rời màn hình, người được cử động.", { phase: "redo", face: "happy", pose: "thumb" }),
      ] },
    { id: "s18", module: "TEXT-01", ref: "p12",
      data: { text: "Nghỉ là rời màn hình, không phải đổi màn hình.", illus: "mobile-phone" },
      lines: [L("l1", null, "A break means leaving the screen, not switching screens.", "Nghỉ là rời màn hình, không phải đổi màn hình.", { wait: 300 })] },
    { id: "s19", module: "CMP-09", ref: "p13",
      data: { myth: "Đứng dậy nghỉ giữa giờ là lười biếng", fact: "Nghỉ ngắn giống bảo dưỡng máy móc, là một phần của làm việc",
        illusMyth: "sleepy-face", illusFact: "wrench" },
      lines: [
        L("l1", null, "Short breaks are not laziness.", "Nghỉ ngắn không phải lười biếng."),
        L("l2", null, "They're like machine maintenance. Part of the work.", "Nó giống bảo dưỡng máy móc, là một phần của làm việc."),
        L("l3", null, "Often forget? Set a break reminder on your phone. And don't feel guilty standing up.", "Hay quên? Đặt nhắc nghỉ trên điện thoại, và đừng áy náy khi đứng dậy."),
      ] },

    // ---------- Chương 5 ----------
    { id: "s20", module: "HOST-03", data: { n: 5, of: 6, title: "Bữa trưa và buổi chiều" },
      lines: [L("l1", "det", "Part five: lunch and the afternoon.", "Phần năm: bữa trưa và buổi chiều.")] },
    { id: "s21", module: "SCENE-01", ref: "p14,p15",
      data: { set: "office", label: "Cuối tháng của Thảo",
        actors: [{ id: "thao", side: "center", face: "worried", pose: "stand" }], props: ["sandwich", "laptop"] },
      lines: [
        L("l1", null, "Thao handles client accounts. At month end, she eats bread at her desk to save time.", "Thảo làm kế toán công nợ. Cuối tháng, ngồi ăn bánh mì trước máy cho kịp."),
        L("l2", "thao", "Oh no. I typed two clients' account numbers wrong.", "Ôi, mình nhập nhầm số tài khoản của hai khách rồi.", { face: "worried", pose: "shrug" }),
        L("l3", null, "Fixing it took all the next morning.", "Mất cả buổi sáng hôm sau để dò và sửa."),
        L("l4", "thao", "Now, even when busy, I go out for a thirty-minute lunch.", "Giờ dù bận, mình vẫn ra ngoài ăn trưa ba mươi phút.", { face: "happy", pose: "explain" }),
        L("l5", null, "Her afternoons are steadier. Many find skipping lunch makes them slower, with more errors.", "Buổi chiều chắc tay hơn. Nhiều người thấy bỏ bữa trưa làm chiều chậm và dễ sai."),
      ] },
    { id: "s22", module: "TEXT-01", ref: "p16",
      data: { text: "Bữa trưa bỏ đi, buổi chiều đòi lại.", illus: "fork-and-knife-with-plate" },
      lines: [L("l1", null, "Skip lunch, and the afternoon takes it back.", "Bữa trưa bỏ đi, buổi chiều đòi lại.", { wait: 300 })] },

    // ---------- Chương 6 ----------
    { id: "s23", module: "HOST-03", data: { n: 6, of: 6, title: "Thức khuya chạy deadline?" },
      lines: [L("l1", "det", "Last part: are late nights worth it?", "Phần cuối: thức khuya chạy deadline có đáng không?")] },
    { id: "s24", module: "HOST-02", ref: "p17,p18",
      data: { statement: "Thức khuya thêm vài đêm là cách chắc chắn để kịp hạn", truth: false,
        why: "Khi mệt, lỗi nhỏ dễ lọt qua; thời gian sửa có khi còn nhiều hơn thời gian thức." },
      lines: [
        L("l1", "det", "A few late nights is a sure way to meet a deadline. True or false?", "Thức khuya vài đêm là cách chắc chắn để kịp hạn. Đúng hay sai?"),
        L("l2", "det", "False. Late nights add hours, but each hour gets worse.", "Sai. Thức khuya thêm giờ, nhưng mỗi giờ kém dần.", { face: "stern" }),
        L("l3", "det", "Less sleep means less focus, and missed errors. Those hours make fixes for tomorrow.", "Thiếu ngủ giảm tập trung, khó thấy lỗi. Giờ thêm đó dễ thành việc sửa hôm sau."),
      ] },
    { id: "s25", module: "LIST-08", ref: "p18,p19",
      data: { title: "Một báo cáo quý", items: [
        { title: "Thức đến hai giờ sáng cả tuần", detail: "Đêm thứ Tư nhập lệch dòng một cột số liệu", illus: "crescent-moon" },
        { title: "Kết quả", detail: "Cả bảng phải làm lại mất một ngày", illus: "sleepy-face" },
        { title: "Chia từ đầu tuần", detail: "Nhập số liệu buổi sáng, tự kiểm tra ngay, ngủ đủ", illus: "sunrise" },
        { title: "Kết quả", detail: "Thường về đích sớm hơn", illus: "check-mark-button" }] },
      lines: [
        L("l1", null, "A quarterly report, worked on until two a.m. all week.", "Một báo cáo quý, làm đến hai giờ sáng cả tuần."),
        L("l2", null, "One column typed one row off on Wednesday night. The whole table takes a day to redo.", "Đêm thứ Tư nhập lệch dòng một cột. Cả bảng làm lại mất một ngày."),
        L("l3", null, "Instead: split it from the start of the week. Enter data in the morning. Check right after. Sleep enough.", "Thay vào đó: chia từ đầu tuần, nhập số buổi sáng, kiểm tra ngay, ngủ đủ."),
        L("l4", null, "You usually finish sooner.", "Thường lại về đích sớm hơn."),
      ] },
    { id: "s26", module: "TEXT-01", ref: "p19",
      data: { text: "Đêm thức để kịp, ngày sửa vì sai.", illus: "crescent-moon" },
      lines: [L("l1", null, "Stay up to catch up, then spend the day fixing mistakes.", "Đêm thức để kịp, ngày sửa vì sai.", { wait: 300 })] },
    { id: "s27", module: "LIST-13", ref: "p20,p21",
      data: { title: "Giữ giấc ngủ", items: [
        { title: "Tự làm, không ai nhắc dừng?", detail: "Đặt giờ kết thúc và giờ đi ngủ cố định, giữ như hẹn khách.", illus: "alarm-clock" },
        { title: "Cà phê?", detail: "Tỉnh tạm thời, không thay được giấc ngủ.", illus: "hot-beverage" },
        { title: "Mệt kéo dài dù ngủ đủ?", detail: "Đi khám để bác sĩ tư vấn, đừng cố chịu.", illus: "stethoscope" }] },
      lines: [
        L("l1", null, "Work for yourself? No office hours tell you to stop.", "Tự làm? Không có giờ tan sở nhắc bạn dừng."),
        L("l2", null, "Set a fixed finish time and bedtime on work days. Keep them like client appointments.", "Đặt giờ kết thúc và giờ đi ngủ cố định, giữ như giữ hẹn với khách."),
        L("l3", null, "Coffee helps for a while. It can't replace sleep.", "Cà phê giúp tỉnh tạm thời, không thay được giấc ngủ."),
        L("l4", null, "Still tired for a long time, despite sleep and rest? See a doctor. Don't just put up with it.", "Mệt kéo dài dù đã ngủ đủ, nghỉ ngơi? Hãy đi khám, đừng chỉ cố chịu."),
      ] },

    // ---------- Kết ----------
    { id: "s28", module: "SCENE-01", ref: "p11",
      data: { set: "office", label: "Một tuần sau",
        actors: [{ id: "dung", side: "center", face: "happy", pose: "stand" }], props: ["cup-with-straw"] },
      lines: [
        L("l1", null, "Back to Dung, one week after switching to walks and water.", "Quay lại Dũng, một tuần sau khi đổi sang đi bộ, rót nước."),
        L("l2", "dung", "Same break time, but my afternoons feel much lighter.", "Thời gian nghỉ vẫn thế, mà buổi chiều đỡ đuối hẳn.", { face: "happy", pose: "thumb" }),
      ],
      beats: { after: 500 } },
    { id: "s29", module: "END-03", ref: "p22,outro",
      data: { title: "Giữ sức mỗi ngày", items: ["Ghi nhịp năng lượng một tuần", "Việc khó vào giờ tỉnh nhất", "Nghỉ ngắn xa màn hình sau một hai giờ", "Không bỏ bữa trưa", "Giờ đi ngủ cố định"], illus: "clipboard" },
      lines: [
        L("l1", null, "Good time management with no energy won't take you far.", "Quản lý thời gian tốt mà kiệt sức thì cũng không đi xa."),
        L("l2", null, "Know your rhythm, give alert hours to hard work, rest for real, keep lunch and sleep.", "Biết nhịp mình, giờ tỉnh cho việc khó, nghỉ thật, giữ bữa trưa và giấc ngủ."),
        L("l3", null, "From tomorrow, set a break reminder every ninety minutes, and stand up.", "Từ mai, đặt nhắc nghỉ mỗi chín mươi phút, và đứng dậy rời màn hình."),
      ] },
    { id: "s30", module: "QUIZ-01", ref: "questions[14]",
      data: {
        q: "Why is scrolling your phone often not a real break?",
        options: [
          "Scrolling is a real break, as long as you only read happy news",
          "Your eyes stay on a screen and your mind keeps processing new information",
          "Phones use too much battery, which makes the break cost more money",
        ],
        correct: 1, countdown: 5, illus: "mobile-phone",
        why: "Mắt vẫn nhìn màn hình, đầu vẫn xử lý thêm thông tin mới.",
      },
      lines: [
        L("l1", null, "Why is scrolling your phone often not a real break?", "Vì sao lướt điện thoại thường không phải là nghỉ thật sự?"),
        L("l2", null, "Your eyes stay on a screen and your mind keeps processing new information.", "Mắt vẫn nhìn màn hình, đầu vẫn xử lý thêm thông tin mới."),
        L("l3", null, "So many people come back more tired. Happy news or not, your eyes don't rest.", "Nên nhiều người quay lại còn mệt hơn. Tin vui hay buồn, mắt vẫn không được nghỉ."),
      ] },
    { id: "s31", module: "END-05", data: { text: "Nghỉ xong rồi, làm bốn mươi câu nhé", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án" },
      lines: [L("l1", "det", "Rested? Forty questions are waiting below.", "Nghỉ đủ chưa? Bốn mươi câu hỏi đang chờ bên dưới.", { face: "happy" })] },
  ],
};
