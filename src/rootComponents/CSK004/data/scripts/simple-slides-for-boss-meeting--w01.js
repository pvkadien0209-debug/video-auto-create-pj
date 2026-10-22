// Kịch bản video W lần 3 (#110) — "Làm slide gọn cho cuộc họp với sếp" · chuỗi "Báo cáo và thuyết trình trước sếp"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
export default {
  schema: "detpro.video-script/0.2",
  id: "simple-slides-for-boss-meeting--w01",
  hook: "HOOK-05",
  loop: { open: "s01", close: "s27" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "presenting-to-managers", slug: "simple-slides-for-boss-meeting", door: "ky-nang", level: "B1",
    title: "Làm slide gọn cho cuộc họp với sếp", series: "Báo cáo và thuyết trình trước sếp" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: Đạt, Nam → Dũng; Quyên, Ly → Thảo; sếp (“anh”) → Cô Hoa (Thảo, Dũng gọi “chị”). Vai mới: không dùng (bài không có trẻ con, bà cụ, người nước ngoài). Chỗ đứng cả video: Thảo left, Dũng center, Cô Hoa right. HOOK-05: cảnh 1 là kết cục của Cách A (p3), DLG-01 s05 tua lại; cảnh s29 cuối video quay lại Dũng với Cách B (“lần sau… khoảng nửa thời gian”). DLG-01 s24: chuyện Ly p24 kể bằng lời Đét lúc dừng cảnh; phần làm lại (soát cả bộ) theo p25. CMP-05 s14: ba loại biểu đồ lấy nguyên từ p12. Mục lục 7 chương dùng LIST-09. Phủ ý: 28/28. Câu đố questions[11] (p8).",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "p3",
      data: { set: "room", label: "Tối trước buổi họp",
        actors: [{ id: "dung", side: "center", face: "worried", pose: "think" }],
        props: ["laptop", "hot-beverage"] },
      lines: [
        { id: "l1", lang: "en", say: "The night before the meeting. Dung has thirty slides.", sub: "Tối trước buổi họp. Dũng có ba mươi slide." },
        { id: "l2", lang: "en", who: "dung", say: "Thirty slides… and where is my conclusion? Somewhere in the middle.", sub: "Ba mươi trang… kết luận đâu rồi? Lẫn đâu đó ở giữa.", face: "worried", pose: "shrug" },
        { id: "l3", lang: "en", say: "He stays up late to reorder them. Next morning, it's still a mess.", sub: "Dũng thức khuya xếp lại, sáng hôm sau trình bày vẫn lộn xộn." },
        { id: "l4", lang: "en", say: "Let's rewind. Where should Dung have started?", sub: "Tua lại nhé. Lẽ ra Dũng nên bắt đầu từ đâu?", wait: 300 },
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Slide gọn cho sếp", pose: "present",
        items: ["Câu chuyện viết ra giấy trước", "Mỗi slide một ý, tiêu đề là kết luận", "Biểu đồ làm nổi một điểm", "Chi tiết vào phụ lục"] },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "Simple slides aren't hard. Write the story on paper first.", sub: "Slide gọn không khó. Viết câu chuyện ra giấy trước." },
        { id: "l2", lang: "en", who: "det", say: "One idea per slide, with a conclusion as the title.", sub: "Mỗi slide một ý, tiêu đề là câu kết luận." },
        { id: "l3", lang: "en", who: "det", say: "Charts that make one point stand out.", sub: "Biểu đồ chỉ làm nổi một điểm." },
        { id: "l4", lang: "en", who: "det", say: "And details in the appendix.", sub: "Và chi tiết để vào phụ lục." },
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Bảy chặng làm slide", illus: "compass", chapters: [
        { text: "Tờ giấy trước", illus: "page-facing-up" }, { text: "Slide đầu tiên", illus: "keycap-1" },
        { text: "Bao nhiêu chữ", illus: "memo" }, { text: "Biểu đồ, con số", illus: "bar-chart" },
        { text: "Phụ lục, trông thế nào", illus: "file-folder" }, { text: "Kiểm tra trước khi gửi", illus: "magnifying-glass-tilted-left" },
        { text: "Trong lúc họp", illus: "speaking-head" } ] },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "Seven stops: paper first, the first slide, how many words, charts.", sub: "Bảy chặng: tờ giấy trước, slide đầu tiên, bao nhiêu chữ, biểu đồ." },
        { id: "l2", lang: "en", who: "det", say: "The appendix and the look, checks before sending, and using slides live.", sub: "Phụ lục và hình thức, kiểm tra trước khi gửi, và dùng slide khi họp." },
      ] },

    // ---------- Chương 1: Tờ giấy trước ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 7, title: "Bắt đầu từ phần mềm hay tờ giấy?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part one: start with software, or with paper?", sub: "Phần một: nên bắt đầu từ phần mềm hay từ tờ giấy?" }] },
    { id: "s05", module: "DLG-01", ref: "p1,p2,p4",
      data: { set: "office", label: "Tua lại",
        actors: [{ id: "dung", side: "center" }],
        verdict: { ok: false, label: "Mở máy làm slide ngay",
          why: "Nghĩ ra gì thêm trang đó: ba mươi trang, kết luận lẫn ở giữa.",
          rule: "Câu chuyện xong trên giấy, slide mới xong trên máy" } },
      lines: [
        { id: "l1", lang: "en", who: "dung", say: "A meeting with my boss. Let me open the software and start making slides!", sub: "Họp với sếp à. Mở máy làm slide luôn thôi!", face: "happy", pose: "thumb", stop: true },
        { id: "l2", lang: "en", who: "det", say: "Wait a second!", sub: "Khoan đã!", face: "stern" },
        { id: "l3", lang: "en", who: "det", say: "First write five or six sentences. If your boss read only those, they'd get the whole meeting.", sub: "Trước hết, viết năm, sáu câu: sếp chỉ đọc chúng cũng hiểu cả buổi họp.", pose: "point" },
        { id: "l4", lang: "en", who: "det", say: "Let's rewind and try again.", sub: "Tua lại, thử lại nhé.", phase: "redo" },
        { id: "l5", lang: "en", who: "dung", say: "Six sentences on paper. Each one becomes a slide title.", sub: "Sáu câu trên giấy, mỗi câu thành tiêu đề một slide.", phase: "redo", pose: "explain", face: "thinking" },
        { id: "l6", lang: "en", who: "dung", say: "Read together, they sound like a short story. If not, I fix it on paper.", sub: "Đọc liền, nghe trôi như một câu chuyện. Vấp thì sửa trên giấy.", phase: "redo", face: "happy" },
        { id: "l7", lang: "en", who: "det", say: "Fixing paper is much easier than fixing twenty finished slides.", sub: "Sửa trên giấy dễ hơn nhiều so với sửa hai mươi trang đã làm xong.", phase: "redo", pose: "thumb", face: "happy" },
      ] },

    // ---------- Chương 2: Slide đầu tiên ----------
    { id: "s06", module: "HOST-03", data: { n: 2, of: 7, title: "Slide đầu tiên nên nói gì?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part two: what should the first slide say?", sub: "Phần hai: slide đầu tiên nên nói gì?" }] },
    { id: "s07", module: "CMP-06", ref: "p5,p6",
      data: { do: ["Ngay sau trang tiêu đề: slide tóm tắt", "Kết luận chính và điều cần sếp quyết"], dont: ["Mở đầu bằng trang mục lục", "Trang giới thiệu nhóm"],
        doIcons: ["bullseye", "balance-scale"], dontIcons: ["bookmark-tabs", "busts-in-silhouette"] },
      lines: [
        { id: "l1", lang: "en", say: "After the title page, show a summary: your main conclusion, and what you need your boss to decide.", sub: "Sau trang tiêu đề là slide tóm tắt: kết luận chính và điều cần sếp quyết." },
        { id: "l2", lang: "en", say: "If the meeting is cut to a few minutes, this slide alone is enough.", sub: "Buổi họp bị rút còn vài phút, riêng slide này cũng đủ để sếp nắm việc." },
        { id: "l3", lang: "en", say: "Skip the contents page and the team intro. Your boss knows you. They need to know why they're here.", sub: "Bỏ trang mục lục, trang giới thiệu nhóm. Sếp biết bạn là ai; họ cần biết vì sao ngồi đây." },
      ] },

    // ---------- Chương 3: Bao nhiêu chữ ----------
    { id: "s08", module: "HOST-03", data: { n: 3, of: 7, title: "Mỗi slide bao nhiêu chữ?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part three: how many words per slide?", sub: "Phần ba: mỗi slide nên có bao nhiêu chữ?" }] },
    { id: "s09", module: "CMP-07", ref: "p7",
      data: { wrong: "Tình hình giao hàng", right: "Đơn giao trễ giảm từ khi đổi kho", diff: ["Tình hình"],
        note: "Tiêu đề là một câu kết luận đầy đủ, phần thân chỉ để chứng minh câu đó" },
      lines: [
        { id: "l1", lang: "en", say: "One idea per slide. Not a topic, like: delivery update.", sub: "Mỗi slide một ý. Đừng đặt tiêu đề chủ đề như “Tình hình giao hàng”." },
        { id: "l2", lang: "en", say: "Write the conclusion: late orders fell after we changed warehouses. The body only proves it.", sub: "Hãy viết kết luận: “Đơn giao trễ giảm từ khi đổi kho”. Phần thân chỉ để chứng minh." },
      ] },
    { id: "s10", module: "LIST-13", ref: "p8,p9",
      data: { title: "Chữ trên slide", items: [
        { title: "Thật ít chữ", detail: "Sếp đọc xong vài giây rồi quay lại nghe; ý dài nói bằng lời hoặc để ghi chú.", illus: "memo" },
        { title: "Quá nhiều ý thì tách đôi", detail: "Hai slide thoáng dễ theo hơn một slide chật cứng.", illus: "scissors" } ] },
      lines: [
        { id: "l1", lang: "en", say: "So few words that your boss reads them in seconds, then listens to you.", sub: "Chữ ít đến mức sếp đọc xong trong vài giây rồi quay lại nghe bạn." },
        { id: "l2", lang: "en", say: "Long explanations: say them, or keep them in your notes.", sub: "Ý giải thích dài: nói bằng lời hoặc để ở phần ghi chú." },
        { id: "l3", lang: "en", say: "Too many ideas on one slide? Split it in two.", sub: "Một slide quá nhiều ý? Tách thành hai." },
      ] },
    { id: "s11", module: "SCENE-03", ref: "p10,p11",
      data: { set: "meeting",
        actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "right", pose: "hold" }],
        left: { label: "Tám dòng chữ dày", ok: false },
        right: { label: "Một câu, ba từ khoá", ok: true } },
      lines: [
        { id: "l0", lang: "en", say: "Thao's slide on costs.", sub: "Slide báo cáo chi phí của Thảo." },
        { id: "a1", lang: "en", who: "thao", say: "Line one: printing costs this quarter… line two…", sub: "Dòng một: chi phí in ấn quý này… dòng hai…", phase: "a", pose: "explain" },
        { id: "a2", lang: "en", say: "Her boss reads faster than she speaks, jumps to the bottom, and asks about a point she hasn't reached.", sub: "Sếp đọc nhanh hơn Thảo nói, lướt xuống cuối, hỏi luôn điểm Thảo chưa nói tới. Thứ tự rối hẳn.", phase: "a" },
        { id: "b1", lang: "en", who: "thao", say: "Printing costs fell after we switched to digital documents.", sub: "Chi phí in ấn giảm nhờ chuyển sang tài liệu điện tử.", phase: "b", pose: "explain", face: "happy" },
        { id: "b2", lang: "en", say: "One conclusion and three key words. Nothing to read ahead, so the boss listens in her order.", sub: "Một câu kết luận, ba từ khoá. Không có gì để đọc trước, sếp nghe đúng thứ tự Thảo chuẩn bị.", phase: "b" },
        { id: "b3", lang: "en", say: "The less text on the slide, the more people listen to you.", sub: "Chữ trên slide càng ít, người nghe càng nghe mình.", phase: "b" },
      ] },

    // ---------- Chương 4: Biểu đồ, con số ----------
    { id: "s12", module: "HOST-03", data: { n: 4, of: 7, title: "Biểu đồ, con số nhìn là hiểu" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part four: charts and numbers your boss gets at a glance.", sub: "Phần bốn: biểu đồ và con số đặt thế nào cho sếp nhìn là hiểu." }] },
    { id: "s13", module: "CMP-05", ref: "p12",
      data: { title: "Chọn biểu đồ theo điều muốn nói", columns: [
        { label: "Biểu đồ cột", illus: "bar-chart" }, { label: "Biểu đồ đường", illus: "chart-increasing" }, { label: "Bảng nhỏ", illus: "clipboard" } ],
        rows: [{ label: "Dùng khi", cells: ["so sánh vài nhóm", "xu hướng theo thời gian", "sếp cần con số chính xác"] }] },
      lines: [
        { id: "l1", lang: "en", say: "Pick the chart for what you want to say. Bars to compare a few groups.", sub: "Chọn biểu đồ theo điều muốn nói: so sánh vài nhóm thì dùng cột." },
        { id: "l2", lang: "en", say: "Lines for a trend over time. A small table when your boss needs exact numbers.", sub: "Xu hướng theo thời gian dùng đường; bảng nhỏ khi sếp cần số chính xác." },
        { id: "l3", lang: "en", say: "No fancy charts needed.", sub: "Không cần biểu đồ cầu kỳ." },
      ] },
    { id: "s14", module: "LIST-13", ref: "p13,p14",
      data: { title: "Cho sếp nhìn đúng chỗ", items: [
        { title: "Làm nổi đúng một điểm", detail: "Tô đậm cột hay đường cần nhìn, phần còn lại nhạt, thêm một dòng chú thích.", illus: "high-voltage" },
        { title: "Con số dễ đọc", detail: "Làm tròn, ghi rõ đơn vị, ghi nguồn ở góc dưới.", illus: "input-numbers" } ] },
      lines: [
        { id: "l1", lang: "en", say: "Make one point stand out: a dark colour for that bar or line, the rest pale.", sub: "Làm nổi đúng một điểm: tô đậm cột hay đường bạn muốn sếp nhìn, phần còn lại nhạt." },
        { id: "l2", lang: "en", say: "Add a short label right next to it.", sub: "Ghi một dòng chú thích ngắn ngay cạnh điểm đó." },
        { id: "l3", lang: "en", say: "Round numbers, show units, and put the source at the bottom. Asked where it's from? You're ready.", sub: "Làm tròn số, ghi đơn vị, ghi nguồn ở góc dưới. Sếp hỏi “số này lấy ở đâu?” là có sẵn câu trả lời." },
      ] },
    { id: "s15", module: "SCENE-01", ref: "p15,p16",
      data: { set: "meeting", label: "Làm mẫu",
        actors: [{ id: "dung", side: "center", pose: "point" }, { id: "hoa", side: "right", pose: "hold" }],
        props: ["chart-decreasing"] },
      lines: [
        { id: "l1", lang: "en", say: "Dung shows a chart with ten lines, one for each product.", sub: "Dũng chiếu biểu đồ mười đường, mỗi đường một sản phẩm." },
        { id: "l2", lang: "en", who: "hoa", say: "Which line do you want me to look at?", sub: "Em muốn chị nhìn đường nào?", face: "thinking", react: { dung: "surprised" } },
        { id: "l3", lang: "en", say: "He turns nine lines light grey and makes the falling one dark.", sub: "Dũng đổi chín đường sang xám nhạt, tô đậm đúng đường đang tụt." },
        { id: "l4", lang: "en", who: "dung", say: "The title says it: Product B fell three months in a row.", sub: "Tiêu đề nói thẳng: “Sản phẩm B giảm ba tháng liền”.", face: "happy", pose: "explain" },
        { id: "l5", lang: "en", say: "Want your boss to look somewhere? Make it stand out.", sub: "Muốn sếp nhìn đâu, tô đậm chỗ đó." },
      ] },

    // ---------- Chương 5: Phụ lục, trông thế nào ----------
    { id: "s16", module: "HOST-03", data: { n: 5, of: 7, title: "Chi tiết để đâu, trông thế nào?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part five: where do details go, and how should it look?", sub: "Phần năm: chi tiết nhiều quá thì để đâu, trông thế nào thì dễ xem?" }] },
    { id: "s17", module: "TEXT-04", ref: "p17,p18",
      data: { text: "Bảng chi tiết, số đầy đủ, cách tính: để vào phụ lục cuối file. Bị hỏi sâu thì mở ngay trang cần.", marks: ["phụ lục"], illus: "file-folder" },
      lines: [
        { id: "l1", lang: "en", say: "Detailed tables, full numbers, and methods go in an appendix at the end.", sub: "Bảng chi tiết, số đầy đủ, cách tính: để vào phụ lục cuối file." },
        { id: "l2", lang: "en", say: "The main part stays short, and you can open the right page when asked.", sub: "Phần chính gọn, bị hỏi sâu thì mở ngay trang cần." },
      ] },
    { id: "s17b", module: "TEXT-01", ref: "p17,p18",
      data: { text: "Mọi thứ đều có, chỉ là không trình bày hết.", illus: "file-folder" },
      lines: [
        { id: "l3", lang: "en", say: "No fear of looking incomplete: everything is there, just not all presented.", sub: "Đỡ lo bị chê thiếu: mọi thứ đều có, chỉ là không trình bày hết." },
      ] },
    { id: "s18", module: "LIST-01", ref: "p19,p20",
      data: { title: "Dễ xem", illus: "eyes", items: [
        "Chữ đủ to cho người cuối phòng, người xem điện thoại", "Nền và chữ tương phản rõ, tránh chữ nhạt trên nền ảnh", "Cùng kiểu chữ, cùng vị trí tiêu đề, cùng màu cho cùng ý" ],
        icons: ["magnifying-glass-tilted-right", "black-large-square", "artist-palette"] },
      lines: [
        { id: "l1", lang: "en", say: "Text big enough for the back of the room, or a phone screen.", sub: "Chữ đủ to để người cuối phòng, người xem điện thoại vẫn đọc được." },
        { id: "l2", lang: "en", say: "Strong contrast. No light text on a busy photo.", sub: "Nền và chữ tương phản rõ, tránh chữ màu nhạt trên nền ảnh." },
        { id: "l3", lang: "en", say: "Same font, same title spot, same colour for the same idea, so eyes don't search on each page.", sub: "Cùng kiểu chữ, vị trí tiêu đề, màu cho cùng ý: mắt sếp không phải tìm lại mỗi trang." },
      ] },
    { id: "s19", module: "HOST-02", ref: "p21",
      data: { statement: "Hiệu ứng chuyển trang, hình động làm buổi họp với sếp chuyên nghiệp hơn", truth: false,
        why: "Hiệu ứng, hình động, ảnh trang trí thường làm chậm và rối. Đơn giản là an toàn nhất." },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "Transitions and animations make a boss meeting look more professional. True or false?", sub: "Hiệu ứng, hình động làm buổi họp với sếp chuyên nghiệp hơn. Đúng hay sai?" },
        { id: "l2", lang: "en", who: "det", say: "False. They usually slow things down and distract. Simple is safest.", sub: "Sai. Chúng thường làm chậm và rối. Đơn giản là an toàn nhất.", face: "stern" },
      ] },

    // ---------- Chương 6: Kiểm tra trước khi gửi ----------
    { id: "s20", module: "HOST-03", data: { n: 6, of: 7, title: "Kiểm tra trước khi gửi, trước khi họp" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part six: checks before sending, and before the meeting.", sub: "Phần sáu: trước khi gửi và trước khi họp cần kiểm tra gì?" }] },
    { id: "s21", module: "LIST-05", ref: "p22",
      data: { title: "Trước khi gửi slide", illus: "clipboard", items: [
        "Đọc riêng các tiêu đề: thành câu chuyện chưa?", "Số trên slide khớp phụ lục và báo cáo gốc", "Không sai chính tả, tên người, tên sản phẩm", "Tên file rõ ràng, có ngày" ] },
      lines: [
        { id: "l1", lang: "en", say: "Read only the titles. Do they tell a story?", sub: "Đọc riêng các tiêu đề: có thành một câu chuyện không?" },
        { id: "l2", lang: "en", say: "Numbers match the appendix and the original report.", sub: "Số trên slide khớp với phụ lục và báo cáo gốc." },
        { id: "l3", lang: "en", say: "No spelling mistakes in names or products. A clear file name with the date.", sub: "Không sai chính tả, tên người, tên sản phẩm. Tên file rõ ràng, có ngày." },
      ] },
    { id: "s22", module: "TEXT-04", ref: "p23",
      data: { text: "Sếp thích đọc trước: gửi file trước, ở dạng không chỉnh sửa được, và mang bản dự phòng.", marks: ["gửi file trước", "bản dự phòng"], illus: "envelope-with-arrow" },
      lines: [
        { id: "l1", lang: "en", say: "Boss likes to read first? Send the file before, and bring a backup.", sub: "Sếp thích đọc trước? Gửi file trước buổi họp, và mang theo bản dự phòng." },
        { id: "l2", lang: "en", say: "Export it in a format that can't be edited, so the layout doesn't move on other computers.", sub: "Xuất ra dạng không chỉnh sửa được, bố cục không bị xô lệch trên máy người khác." },
      ] },
    { id: "s23", module: "DLG-01", ref: "p24,p25",
      data: { set: "office", label: "Phút chót",
        actors: [{ id: "thao", side: "left" }],
        verdict: { ok: false, label: "Sửa số phút chót, không soát cả bộ",
          why: "Slide tóm tắt và phụ lục lệch nhau, sếp hỏi lại gần như mọi con số.",
          rule: "Sửa một số thì soát cả bộ" } },
      lines: [
        { id: "l1", lang: "en", say: "Minutes before the meeting, Thao changes the sales number on the summary slide.", sub: "Phút chót, Thảo sửa số doanh thu ở slide tóm tắt." },
        { id: "l2", lang: "en", who: "thao", say: "Done! No time to check the rest.", sub: "Xong! Không kịp xem phần còn lại.", face: "happy", pose: "thumb", stop: true },
        { id: "l3", lang: "en", who: "det", say: "Wait a second!", sub: "Khoan đã!", face: "stern" },
        { id: "l4", lang: "en", who: "det", say: "The appendix still shows the old number. Your boss will ask: which one is right?", sub: "Phụ lục vẫn là số cũ. Sếp sẽ lật xuống và hỏi: “Số nào đúng?”", pose: "point" },
        { id: "l5", lang: "en", who: "det", say: "Let's rewind and try again.", sub: "Tua lại, thử lại nhé.", phase: "redo" },
        { id: "l6", lang: "en", who: "thao", say: "I changed one number, so I'll check the appendix and the original report too.", sub: "Sửa một số thì mình soát cả phụ lục và báo cáo gốc.", phase: "redo", face: "thinking", pose: "think" },
        { id: "l7", lang: "en", who: "thao", say: "Every number matches now.", sub: "Giờ mọi con số đã khớp.", phase: "redo", face: "happy" },
        { id: "l8", lang: "en", who: "det", say: "One mismatch makes the whole set look doubtful.", sub: "Một chỗ lệch làm cả bộ bị nghi.", phase: "redo", pose: "thumb", face: "happy" },
      ] },

    // ---------- Chương 7: Trong lúc họp ----------
    { id: "s24", module: "HOST-03", data: { n: 7, of: 7, title: "Trong lúc họp, dùng slide thế nào?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Last part: using slides during the meeting.", sub: "Phần cuối: trong lúc họp, dùng slide thế nào?" }] },
    { id: "s25", module: "CMP-01", ref: "p26",
      data: { labels: ["Đọc slide", "Nói bằng lời của mình"], left: "Quay lưng về sếp, đọc từ màn hình", right: "Nói câu tiêu đề, giải thích vì sao, nhìn sếp nhiều hơn màn hình",
        illus: ["desktop-computer", "speaking-head"] },
      lines: [
        { id: "l1", lang: "en", say: "Don't read your slides with your back to your boss.", sub: "Đừng đọc slide, quay lưng về phía sếp." },
        { id: "l2", lang: "en", say: "Say the title in your own words, then explain why. Look at your boss more than the screen.", sub: "Nói câu tiêu đề bằng lời của bạn, rồi giải thích vì sao. Nhìn sếp nhiều hơn màn hình." },
      ] },
    { id: "s26", module: "LIST-13", ref: "p27,p28",
      data: { title: "Trong và sau buổi họp", items: [
        { title: "Sếp muốn nhảy trang", detail: "Đi theo sếp. Nhớ số trang các slide quan trọng.", illus: "fast-forward-button" },
        { title: "Sau họp", detail: "Gửi lại file kèm vài dòng tóm tắt kết luận.", illus: "envelope" } ] },
      lines: [
        { id: "l1", lang: "en", say: "Your boss wants to jump to another slide? Follow them.", sub: "Sếp muốn nhảy sang trang khác? Hãy đi theo sếp." },
        { id: "l2", lang: "en", say: "Remember the page numbers of key slides, so you get there fast.", sub: "Nhớ số trang các slide quan trọng để chuyển nhanh, không phải lật tìm." },
        { id: "l3", lang: "en", say: "After the meeting, send the file with a few lines on the conclusions.", sub: "Sau họp, gửi lại file kèm vài dòng tóm tắt kết luận." },
        { id: "l4", lang: "en", say: "Conclusion titles also help people who missed it understand.", sub: "Tiêu đề là câu kết luận cũng giúp người vắng mặt đọc lại vẫn hiểu." },
      ] },

    // ---------- Quay lại chuyện của Dũng ----------
    { id: "s27", module: "SCENE-01", ref: "p3",
      data: { set: "room", label: "Lần sau",
        actors: [{ id: "dung", side: "center", face: "happy" }],
        props: ["page-facing-up", "laptop"] },
      lines: [
        { id: "l1", lang: "en", say: "And Dung? Next time, he writes six sentences on paper first. Each becomes a slide.", sub: "Còn Dũng? Lần sau, Dũng viết sáu câu ra giấy trước, mỗi câu thành một slide." },
        { id: "l2", lang: "en", who: "dung", say: "Six sentences, six slides. Done in about half the time!", sub: "Sáu câu, sáu slide. Chỉ mất khoảng nửa thời gian!", face: "happy", pose: "thumb" },
        { id: "l3", lang: "en", say: "And the slides are much clearer.", sub: "Và bộ slide mạch lạc hơn hẳn." },
      ] },
    { id: "s28", module: "END-02", ref: "outro",
      data: { points: ["Câu chuyện viết trên giấy trước", "Mỗi trang một ý, tiêu đề là kết luận", "Biểu đồ nổi một điểm, số khớp nhau"],
        icons: ["page-facing-up", "bullseye", "bar-chart"] },
      lines: [
        { id: "l1", lang: "en", say: "Good slides aren't the prettiest. They help your boss understand fast and decide well.", sub: "Slide tốt không phải slide đẹp nhất, mà giúp sếp hiểu nhanh, quyết đúng." },
        { id: "l2", lang: "en", say: "Today: read only the titles of your last slides, and fix any that aren't conclusions.", sub: "Việc làm ngay: đọc riêng tiêu đề bộ slide gần nhất, sửa tiêu đề chưa phải câu kết luận." },
      ] },

    // ---------- Câu đố ----------
    { id: "s29", module: "QUIZ-01", ref: "questions[11]",
      data: {
        q: "How much text should a slide for your boss have?",
        options: [
          "Everything you plan to say, so the boss can follow along word by word",
          "Little enough that the boss reads it in seconds and then listens to you",
          "As much as fits, because empty space makes the slide look unfinished",
        ],
        correct: 1, countdown: 5, illus: "memo",
        why: "Slide ít chữ giúp sếp đọc nhanh rồi quay lại nghe bạn giải thích.",
      },
      lines: [
        { id: "l1", lang: "en", say: "How much text should a slide for your boss have?", sub: "Một slide trình bày cho sếp nên có bao nhiêu chữ?" },
        { id: "l2", lang: "en", say: "Little enough that the boss reads it in seconds and then listens to you.", sub: "Ít đến mức sếp đọc xong trong vài giây rồi quay lại nghe bạn." },
        { id: "l3", lang: "en", say: "Long explanations go in your notes, or you say them out loud.", sub: "Ý dài để ở phần ghi chú hoặc nói bằng lời." },
      ] },
    { id: "s30", module: "END-05",
      data: { text: "Bốn mươi câu về slide gọn", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Now you try. Forty questions are waiting below.", sub: "Giờ bạn thử nhé. Bốn mươi câu hỏi đang chờ bên dưới." }] },
  ],
};
