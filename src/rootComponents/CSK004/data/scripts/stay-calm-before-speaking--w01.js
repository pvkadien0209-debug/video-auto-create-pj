// Kịch bản video W lần 3 (#110) — "Hồi hộp trước khi nói: làm sao bình tĩnh?" · chuỗi "Báo cáo và thuyết trình trước sếp"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
export default {
  schema: "detpro.video-script/0.2",
  id: "stay-calm-before-speaking--w01",
  hook: "HOOK-16",
  loop: { open: "s01", close: "s27" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "presenting-to-managers", slug: "stay-calm-before-speaking", door: "ky-nang", level: "B1",
    title: "Hồi hộp trước khi nói: làm sao bình tĩnh?", series: "Báo cáo và thuyết trình trước sếp" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: “bạn” (mở bài, ❓ p12), Hiền, Yến → Thảo; Vinh (⚖️ p26, chỉ nhắc trong lời kể) → Dũng; sếp → Cô Hoa (Thảo gọi “chị”). Vai mới: không dùng (bài không có trẻ con, bà cụ, người nước ngoài). Chỗ đứng cả video: Thảo left, Cô Hoa right. HOOK-16: cảnh 1 Thảo than vãn mười phút trước lượt nói, tua lại vài ngày trước; cảnh s27 cuối video quay lại đúng lúc đó (thở chậm, tự nhủ “mình sẵn sàng”). SCENE-03 s11: câu sếp hỏi chen để trung tính (“cho chị hỏi chen một câu”) vì bài không nêu nội dung câu hỏi. DLG-01 s21: chuyện Yến p21; phần làm lại dùng câu mẫu p19 và cách xử lý giọng run p20 (bài không nêu con số bị quên nên câu làm lại không đọc số). HOST-01 s26 (p28): nhắc gặp bác sĩ / chuyên gia tâm lý đúng như bài. Phủ ý: 28/28. Câu đố questions[18] (p19).",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "intro,p1",
      data: { set: "office", label: "Mười phút trước",
        actors: [{ id: "thao", side: "left", face: "worried", pose: "hold" }] },
      lines: [
        { id: "l1", lang: "en", who: "thao", say: "Ten minutes to my turn. My heart is racing, my hands are cold…", sub: "Còn mười phút nữa đến lượt mình. Tim đập nhanh, tay lạnh…", face: "worried" },
        { id: "l2", lang: "en", who: "thao", say: "And my mind is blank. Maybe I'm just bad at this.", sub: "Đầu óc trống trơn. Chắc mình kém thật rồi.", face: "sad", pose: "shrug" },
        { id: "l3", lang: "en", say: "Is being nervous a sign you're bad at this? Let's rewind a few days.", sub: "Hồi hộp có phải là dấu hiệu mình kém? Tua lại vài ngày trước nhé.", wait: 300 },
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Không cần hết run mới nói tốt", pose: "think",
        items: ["Chuẩn bị đủ để tin nội dung", "Thở chậm trước khi nói", "Có sẵn cách xử lý khi quên ý"] },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "No. Nerves are normal, even for experienced speakers. You just need to", sub: "Không. Hồi hộp là bình thường, kể cả với người nói lâu năm. Bạn chỉ cần" },
        { id: "l2", lang: "en", who: "det", say: "prepare enough to trust your content,", sub: "chuẩn bị đủ để tin vào nội dung," },
        { id: "l3", lang: "en", who: "det", say: "slow your breathing before you speak,", sub: "thở chậm lại trước khi nói," },
        { id: "l4", lang: "en", who: "det", say: "and know what to do if you forget a point.", sub: "và có sẵn cách xử lý khi lỡ quên ý." },
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Sáu chặng bớt run", chapters: [
        { label: "Hồi hộp có phải mình kém", illus: "anxious-face-with-sweat" },
        { label: "Vài ngày trước", illus: "spiral-calendar" },
        { label: "Đêm trước, sáng hôm đó", illus: "sunrise" },
        { label: "Vài phút trước khi nói", illus: "hourglass-not-done" },
        { label: "Đang nói mà run, quên ý", illus: "speaking-head" },
        { label: "Nói xong, nhìn lại", illus: "check-mark-button" } ] },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "Six stops: what nerves mean, the days before, the night and morning.", sub: "Sáu chặng: hồi hộp nghĩa là gì, vài ngày trước, đêm trước và sáng hôm đó." },
        { id: "l2", lang: "en", who: "det", say: "Minutes before, while you speak, and looking back after.", sub: "Vài phút trước khi nói, trong lúc nói, và nhìn lại sau đó." },
      ] },

    // ---------- Chương 1: Hồi hộp có phải mình kém ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Hồi hộp có phải là mình kém?" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part one: do nerves mean you're bad at this?", sub: "Phần một: hồi hộp có phải là dấu hiệu mình kém không?" }] },
    { id: "s05", module: "HOST-02", ref: "p1",
      data: { statement: "Tim đập nhanh, khô miệng, run tay là dấu hiệu mình kém", truth: false,
        why: "Đó là phản ứng tự nhiên trước việc quan trọng: nó cho thấy bạn quan tâm đến kết quả." },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "A racing heart, a dry mouth, shaking hands: signs you're bad at this. True or false?", sub: "Tim đập nhanh, khô miệng, run tay là dấu hiệu mình kém. Đúng hay sai?" },
        { id: "l2", lang: "en", who: "det", say: "False. It's your body's natural reaction to something important. It shows you care.", sub: "Sai. Đó là phản ứng tự nhiên trước việc quan trọng: cho thấy bạn quan tâm đến kết quả.", face: "happy" },
      ] },
    { id: "s06", module: "CMP-01", ref: "p2",
      data: { labels: ["Bạn cảm thấy", "Người nghe thấy"], left: "Giọng run, tay lạnh, rất rõ", right: "Chủ yếu là nội dung bạn nói",
        illus: ["anxious-face-with-sweat", "ear"] },
      lines: [
        { id: "l1", lang: "en", say: "Listeners don't see your nerves as much as you think.", sub: "Người nghe thường không thấy bạn hồi hộp nhiều như bạn tưởng." },
        { id: "l2", lang: "en", say: "A shaky voice, cold hands: only you feel them clearly. Others mostly hear your content.", sub: "Giọng hơi run, tay hơi lạnh chỉ bạn thấy rõ; người khác chủ yếu nghe nội dung." },
      ] },
    { id: "s07", module: "CMP-07", ref: "p3",
      data: { wrong: "Mình phải bình tĩnh", right: "Mình đang hào hứng, mình sẵn sàng", diff: ["phải bình tĩnh"],
        note: "Cảm giác vẫn vậy, nhưng bạn coi nó là năng lượng để nói" },
      lines: [
        { id: "l1", lang: "en", say: "Instead of telling yourself: I must calm down, try: I'm excited, I'm ready.", sub: "Thay vì tự nhủ “mình phải bình tĩnh”, hãy nói “mình đang hào hứng, mình sẵn sàng”." },
        { id: "l2", lang: "en", say: "The feeling stays the same, but now it's energy to speak, not a sign of failure.", sub: "Cảm giác vẫn vậy, nhưng thành năng lượng để nói, không phải dấu hiệu sắp hỏng." },
      ] },

    // ---------- Chương 2: Vài ngày trước ----------
    { id: "s08", module: "HOST-03", data: { n: 2, of: 6, title: "Vài ngày trước: chuẩn bị bớt run" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part two: a few days before, how to prepare.", sub: "Phần hai: vài ngày trước, chuẩn bị thế nào để bớt run?" }] },
    { id: "s09", module: "CMP-01", ref: "p4",
      data: { labels: ["Đọc thầm trong đầu", "Nói to thành tiếng"], left: "Nghe thì trôi, lúc thật lại vấp", right: "Hai ba lần, đứng như lúc thật, bấm giờ",
        illus: ["thought-balloon", "stopwatch"] },
      lines: [
        { id: "l1", lang: "en", say: "Practise out loud two or three times, standing like the real thing, with a timer.", sub: "Tập nói to hai ba lần, đứng như lúc thật và bấm giờ." },
        { id: "l2", lang: "en", say: "Reading in your head is very different from making sound.", sub: "Đọc thầm trong đầu khác hẳn khi phải phát ra tiếng." },
      ] },
    { id: "s10", module: "LIST-05", ref: "p5,p6",
      data: { title: "Thẻ ghi chú: để liếc, không để đọc", illus: "spiral-notepad", items: [
        "Các ý chính theo thứ tự", "Con số quan trọng viết to", "Câu mở đầu và câu kết" ] },
      lines: [
        { id: "l1", lang: "en", say: "Learn the first few sentences by heart. The start is when nerves are strongest.", sub: "Thuộc lòng vài câu mở đầu, vì lúc mới đứng lên là lúc run nhất." },
        { id: "l2", lang: "en", say: "For the rest, remember ideas, not every word.", sub: "Phần còn lại chỉ cần nhớ ý, không cần thuộc từng chữ." },
        { id: "l3", lang: "en", say: "Make a card: main points in order, key numbers written big, your opening and closing lines.", sub: "Một thẻ ghi: ý chính theo thứ tự, con số quan trọng viết to, câu mở đầu và câu kết." },
      ] },
    { id: "s11", module: "SCENE-03", ref: "p7,p8",
      data: { set: "meeting",
        actors: [{ id: "thao", side: "left", pose: "explain" }, { id: "hoa", side: "right", pose: "hold" }],
        left: { label: "Học thuộc từng chữ", ok: false },
        right: { label: "Thuộc mở đầu, nhớ ý", ok: true } },
      lines: [
        { id: "l0", lang: "en", say: "Thao prepared a five-page report.", sub: "Thảo chuẩn bị bài báo cáo dài năm trang." },
        { id: "a1", lang: "en", who: "hoa", say: "Sorry, one quick question.", sub: "Cho chị hỏi chen một câu.", phase: "a", pose: "explain" },
        { id: "a2", lang: "en", who: "thao", say: "Um… which sentence was I on?", sub: "Ờ… mình đang ở câu nào nhỉ?", phase: "a", face: "worried", pose: "shrug" },
        { id: "a3", lang: "en", say: "She learned every word, so she must go back to the start of the paragraph.", sub: "Thuộc từng chữ, nên Thảo đứng im rồi phải đọc lại từ đầu đoạn.", phase: "a" },
        { id: "b1", lang: "en", who: "hoa", say: "Sorry, one quick question.", sub: "Cho chị hỏi chen một câu.", phase: "b", pose: "explain" },
        { id: "b2", lang: "en", who: "thao", say: "A quick look at my card… I'll continue from where I was.", sub: "Liếc thẻ ghi ý… em nói tiếp ý đang dở ạ.", phase: "b", face: "happy" },
        { id: "b3", lang: "en", say: "Know the opening by heart. Remember ideas for the rest.", sub: "Thuộc câu mở đầu, nhớ ý phần sau.", phase: "b" },
      ] },

    // ---------- Chương 3: Đêm trước, sáng hôm đó ----------
    { id: "s12", module: "HOST-03", data: { n: 3, of: 6, title: "Đêm trước và sáng hôm báo cáo" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part three: the night before, and that morning.", sub: "Phần ba: đêm trước và sáng hôm báo cáo nên làm gì?" }] },
    { id: "s13", module: "LIST-13", ref: "p9,p10,p11",
      data: { title: "Đêm trước, sáng hôm đó", items: [
        { title: "Ngủ đủ", detail: "Hơn là thức khuya sửa thêm slide: đầu tỉnh nói tốt hơn.", illus: "bed" },
        { title: "Ăn nhẹ, uống đủ nước", detail: "Đừng uống cà phê nhiều hơn thường ngày.", illus: "hot-beverage" },
        { title: "Đến sớm thử máy", detail: "Phòng nhỏ quen: năm mười phút. Hội trường lớn: sớm hơn.", illus: "film-projector" } ] },
      lines: [
        { id: "l1", lang: "en", say: "Sleep enough. A clear head speaks better than slightly better slides.", sub: "Ngủ đủ quan trọng hơn thức khuya sửa slide: đầu tỉnh nói tốt hơn." },
        { id: "l2", lang: "en", say: "Eat light, drink water, and no more coffee than usual. It can make your heart race and hands shake.", sub: "Ăn nhẹ, uống đủ nước, đừng uống cà phê hơn thường ngày: tim đập nhanh, tay run thêm." },
        { id: "l3", lang: "en", say: "Arrive early to test the projector, files and microphone. Many panics start there.", sub: "Đến sớm thử máy chiếu, mở file, kiểm tra micro: nhiều cơn hoảng bắt đầu từ đó." },
        { id: "l4", lang: "en", say: "A small familiar room: five or ten minutes. A big hall: earlier.", sub: "Phòng họp nhỏ quen thuộc: năm mười phút là đủ; hội trường lớn thì đến sớm hơn." },
      ] },
    { id: "s14", module: "DLG-01", ref: "p12,p13",
      data: { set: "kitchen", label: "Thử nghĩ xem",
        actors: [{ id: "thao", side: "left" }],
        props: ["hot-beverage"],
        verdict: { ok: false, label: "Hai cốc cà phê, đến vừa đúng giờ",
          why: "Cà phê nhiều dễ run tay; đến sát giờ, máy chiếu trục trặc là dễ vấp ngay câu đầu.",
          rule: "Đến sớm năm phút, đỡ run cả buổi" } },
      lines: [
        { id: "l1", lang: "en", who: "thao", say: "Two cups of coffee to wake up, then I'll get there right on time!", sub: "Hai cốc cà phê cho tỉnh, rồi đến vừa đúng giờ!", face: "happy", pose: "thumb", stop: true },
        { id: "l2", lang: "en", who: "det", say: "Wait a second!", sub: "Khoan đã!", face: "stern" },
        { id: "l3", lang: "en", who: "det", say: "Extra coffee can make your hands shake. And with no time to test, one cable can trip you up.", sub: "Cà phê nhiều dễ run tay. Đến sát giờ, máy không nhận laptop là vấp ngay câu đầu.", pose: "point" },
        { id: "l4", lang: "en", who: "det", say: "Let's rewind and try again.", sub: "Tua lại, thử lại nhé.", phase: "redo" },
        { id: "l5", lang: "en", who: "thao", say: "My usual coffee. And I'll arrive a few minutes early to test the projector.", sub: "Cà phê như mọi ngày. Đến sớm vài phút để thử máy chiếu.", phase: "redo", face: "happy" },
        { id: "l6", lang: "en", who: "det", say: "Arrive five minutes early, and shake less all session.", sub: "Đến sớm năm phút, đỡ run cả buổi.", phase: "redo", pose: "thumb", face: "happy" },
      ] },

    // ---------- Chương 4: Vài phút trước khi nói ----------
    { id: "s15", module: "HOST-03", data: { n: 4, of: 6, title: "Vài phút trước khi nói" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part four: the last few minutes before you speak.", sub: "Phần bốn: vài phút trước khi nói, làm gì cho đỡ run?" }] },
    { id: "s16", module: "LIST-06", ref: "p14",
      data: { title: "Thở chậm", steps: [
        { text: "Hít vào bằng mũi, đếm thầm đến bốn", illus: "nose" },
        { text: "Thở ra từ từ, lâu hơn lúc hít vào", illus: "wind-face" },
        { text: "Lặp lại vài lần: nhịp tim dịu xuống", illus: "beating-heart" } ] },
      lines: [
        { id: "l1", lang: "en", say: "Breathe in through your nose while you count to four.", sub: "Hít vào bằng mũi trong lúc đếm thầm đến bốn." },
        { id: "l2", lang: "en", say: "Breathe out slowly, a little longer than you breathed in.", sub: "Thở ra từ từ, lâu hơn lúc hít vào một chút." },
        { id: "l3", lang: "en", say: "Repeat a few times. Your heartbeat usually settles.", sub: "Lặp lại vài lần, nhịp tim thường dịu xuống." },
      ] },
    { id: "s17", module: "LIST-01", ref: "p15",
      data: { title: "Cơ thể bớt căng, giọng bớt run", illus: "person-in-lotus-position", items: [
        "Thả lỏng vai", "Hai chân vững trên sàn", "Nắm rồi mở bàn tay vài lần" ],
        icons: ["person-standing", "footprints", "raised-hand"] },
      lines: [
        { id: "l1", lang: "en", say: "Relax your shoulders.", sub: "Thả lỏng vai." },
        { id: "l2", lang: "en", say: "Both feet steady on the floor.", sub: "Đặt hai chân vững trên sàn." },
        { id: "l3", lang: "en", say: "Close and open your hands a few times. Less tension, less shaking in your voice.", sub: "Nắm rồi mở bàn tay vài lần. Cơ thể bớt căng thì giọng cũng bớt run." },
      ] },
    { id: "s18", module: "HOST-02", ref: "p16",
      data: { statement: "Vài phút trước lượt nói, nên sửa slide cho hoàn hảo hơn", truth: false,
        why: "Sửa vội dễ sinh lỗi mới. Chỉ liếc thẻ ghi chú, đọc thầm câu mở đầu một lần." },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "Minutes before your turn, fix your slides to make them perfect. True or false?", sub: "Vài phút trước lượt nói, sửa slide cho hoàn hảo hơn. Đúng hay sai?" },
        { id: "l2", lang: "en", who: "det", say: "False. Rushed edits make new mistakes. Glance at your card, and read your opening once.", sub: "Sai. Sửa vội dễ sinh lỗi mới. Liếc thẻ, đọc thầm câu mở đầu một lần.", face: "stern" },
      ] },

    // ---------- Chương 5: Đang nói mà run, quên ý ----------
    { id: "s19", module: "HOST-03", data: { n: 5, of: 6, title: "Đang nói mà run, mà quên ý" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Part five: shaking or forgetting while you speak.", sub: "Phần năm: đang nói mà run, mà quên ý thì sao?" }] },
    { id: "s20", module: "LIST-13", ref: "p17,p18",
      data: { title: "Trong lúc nói", items: [
        { title: "Nói chậm hơn bạn nghĩ", detail: "Hồi hộp ai cũng nói nhanh lên; chậm lại, cả hai cùng theo kịp.", illus: "turtle" },
        { title: "Nhìn vài gương mặt thân thiện", detail: "Chuyển ánh mắt giữa họ; đừng chỉ nhìn sếp hay quay lưng nhìn màn hình.", illus: "eyes" } ] },
      lines: [
        { id: "l1", lang: "en", say: "Speak slower than you think you need. Nervous people speed up.", sub: "Nói chậm hơn mức bạn nghĩ là cần. Khi hồi hộp, ai cũng nói nhanh lên." },
        { id: "l2", lang: "en", say: "Slowing down helps both you and your listeners keep up.", sub: "Nói chậm lại giúp cả bạn lẫn người nghe theo kịp." },
        { id: "l3", lang: "en", say: "Look at a few friendly faces and move your eyes between them.", sub: "Nhìn vài gương mặt thân thiện và chuyển ánh mắt giữa họ." },
        { id: "l4", lang: "en", say: "Don't just stare at your boss, or turn your back to look at the screen.", sub: "Đừng chỉ nhìn chằm chằm vào sếp hay quay lưng nhìn màn hình." },
      ] },
    { id: "s21", module: "DLG-01", ref: "p19,p20,p21,p22",
      data: { set: "meeting", label: "Tình huống thường gặp",
        actors: [{ id: "thao", side: "left", pose: "explain" }, { id: "hoa", side: "right", pose: "hold" }],
        verdict: { ok: false, label: "Xin lỗi liên tục, nói nhanh cho qua",
          why: "Cuối buổi, mọi người nhớ sự lúng túng, ít ai nhắc lại nội dung chính.",
          rule: "Quên thì dừng, liếc, nói tiếp, không cần xin lỗi" } },
      lines: [
        { id: "l1", lang: "en", say: "In the middle of her talk, Thao forgets a number.", sub: "Đang trình bày, Thảo quên mất một con số." },
        { id: "l2", lang: "en", who: "thao", say: "Oh no… I'm so nervous, I'm sorry, everyone, sorry…", sub: "Chết… em run quá, em xin lỗi mọi người…", face: "worried", pose: "shrug", react: { hoa: "surprised" }, stop: true },
        { id: "l3", lang: "en", who: "det", say: "Wait a second!", sub: "Khoan đã!", face: "stern" },
        { id: "l4", lang: "en", who: "det", say: "Then she rushes to get it over with. Everyone remembers the panic, not the content.", sub: "Rồi nói nhanh cho qua. Mọi người nhớ sự lúng túng, không nhớ nội dung.", pose: "point" },
        { id: "l5", lang: "en", who: "det", say: "Let's rewind and try again.", sub: "Tua lại, thử lại nhé.", phase: "redo" },
        { id: "l6", lang: "en", who: "thao", say: "Let me check my next point.", sub: "Em xin xem lại ý tiếp theo ạ.", phase: "redo", face: "thinking", pose: "think" },
        { id: "l7", lang: "en", who: "det", say: "A few seconds feel long to you. To listeners, it's a normal pause.", sub: "Vài giây im lặng với bạn thấy dài, với người nghe chỉ là nhịp dừng bình thường.", phase: "redo" },
        { id: "l8", lang: "en", who: "det", say: "Voice shaking? A sip of water, one breath, go on. No need to apologize.", sub: "Giọng run? Uống một ngụm nước, hít một hơi, nói tiếp. Không cần xin lỗi.", phase: "redo", pose: "thumb", face: "happy" },
      ] },

    // ---------- Chương 6: Nói xong, nhìn lại ----------
    { id: "s22", module: "HOST-03", data: { n: 6, of: 6, title: "Nói xong, nhìn lại cho công bằng" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Last part: looking back fairly after you speak.", sub: "Phần cuối: nói xong rồi, tự nhìn lại thế nào cho công bằng?" }] },
    { id: "s23", module: "LIST-13", ref: "p23,p24",
      data: { title: "Sau buổi nói", items: [
        { title: "Vài điều làm tốt, một điều sửa", detail: "Chỉ một điều, để lần sau tập trung sửa được.", illus: "memo" },
        { title: "Đừng nghĩ mãi một câu vấp", detail: "Người nghe đã quên; họ nhớ ý chính có rõ không.", illus: "zzz" } ] },
      lines: [
        { id: "l1", lang: "en", say: "Write a few things you did well, and one thing to change next time.", sub: "Ghi vài điều đã làm tốt và một điều muốn làm khác lần sau." },
        { id: "l2", lang: "en", say: "Just one, so you can focus on fixing it.", sub: "Chỉ một điều thôi, để lần sau tập trung sửa được." },
        { id: "l3", lang: "en", say: "Don't replay one stumble all night. People forgot it long ago. They remember if your main point was clear.", sub: "Đừng nghĩ mãi một câu vấp. Người nghe đã quên; họ nhớ ý chính của bạn có rõ không." },
      ] },
    { id: "s24", module: "CMP-09", ref: "p25,p26",
      data: { myth: "Tránh thuyết trình một thời gian thì nỗi sợ sẽ tự dịu đi", fact: "Né tránh làm nỗi sợ to thêm; tìm dịp nói ngắn, ít áp lực rồi tăng dần", illusMyth: "see-no-evil-monkey", illusFact: "chart-increasing" },
      lines: [
        { id: "l1", lang: "en", say: "Many think avoiding presentations for a while lets the fear fade.", sub: "Nhiều người nghĩ né thuyết trình một thời gian thì nỗi sợ tự dịu đi." },
        { id: "l2", lang: "en", say: "After one stumble, Dung avoided every report for six months. Next time, he shook even more.", sub: "Sau một lần vấp, Dũng né mọi lần báo cáo suốt nửa năm. Lần sau còn run hơn lần đầu." },
      ] },
    { id: "s24b", module: "TEXT-04", ref: "p25,p26",
      data: { text: "Nhận dịp nói ngắn, ít áp lực, như cập nhật vài phút trong họp nhóm, rồi tăng dần.", marks: ["tăng dần"], illus: "chart-increasing" },
      lines: [
        { id: "l3", lang: "en", say: "Instead, take small, low-pressure chances, like a short update in a team meeting, then build up.", sub: "Hãy nhận dịp nói ngắn, ít áp lực, như cập nhật vài phút trong họp nhóm, rồi tăng dần." },
      ] },
    { id: "s25", module: "TEXT-01", ref: "p27",
      data: { text: "Càng né càng sợ, càng nói càng quen.", illus: "chart-increasing" },
      lines: [{ id: "l1", lang: "en", say: "The more you avoid it, the more you fear it. The more you speak, the more natural it feels.", sub: "Càng né càng sợ, càng nói càng quen." }] },
    { id: "s26", module: "HOST-01", ref: "p28",
      data: { title: "Khi nào nên gặp bác sĩ, chuyên gia tâm lý", pose: "think",
        items: ["Mất ngủ nhiều đêm", "Tim đập mạnh kéo dài", "Né hẳn những việc quan trọng"] },
      lines: [
        { id: "l1", lang: "en", who: "det", say: "Talk to a doctor or a counsellor if nerves bring", sub: "Hãy nói chuyện với bác sĩ hoặc chuyên gia tâm lý nếu hồi hộp đến mức" },
        { id: "l2", lang: "en", who: "det", say: "many sleepless nights,", sub: "mất ngủ nhiều đêm," },
        { id: "l3", lang: "en", who: "det", say: "a racing heart that lasts,", sub: "tim đập mạnh kéo dài," },
        { id: "l4", lang: "en", who: "det", say: "or make you avoid important work. That's self-care, not weakness.", sub: "hoặc khiến bạn né hẳn việc quan trọng. Đó là chăm sóc bản thân, không phải yếu đuối." },
      ] },

    // ---------- Quay lại chuyện của Thảo ----------
    { id: "s27", module: "SCENE-01", ref: "p3,p14,outro",
      data: { set: "office", label: "Mười phút trước, lần này",
        actors: [{ id: "thao", side: "left", face: "worried", pose: "hold" }, { id: "det", side: "det" }] },
      lines: [
        { id: "l1", lang: "en", say: "Back to Thao, ten minutes before her turn.", sub: "Quay lại Thảo, mười phút trước lượt nói." },
        { id: "l2", lang: "en", who: "thao", say: "Breathe in through my nose… two, three, four. And out, slowly.", sub: "Hít vào bằng mũi… hai, ba, bốn. Thở ra thật chậm.", face: "thinking" },
        { id: "l3", lang: "en", who: "thao", say: "I'm excited. I'm ready.", sub: "Mình đang hào hứng. Mình sẵn sàng.", face: "happy", pose: "thumb" },
        { id: "l4", lang: "en", who: "det", say: "Same feeling, now it's energy. Forget a point? No need to apologize.", sub: "Cảm giác vẫn vậy, giờ là năng lượng. Quên ý thì không cần xin lỗi.", face: "happy", pose: "thumb" },
      ] },
    { id: "s28", module: "END-02", ref: "outro",
      data: { points: ["Thuộc câu mở đầu, nhớ ý phần sau", "Đến sớm năm phút, thở chậm", "Quên thì dừng, liếc, nói tiếp"],
        icons: ["memo", "alarm-clock", "spiral-notepad"] },
      lines: [
        { id: "l1", lang: "en", say: "You don't need zero nerves to report well.", sub: "Bạn không cần hết hồi hộp mới báo cáo tốt." },
        { id: "l2", lang: "en", say: "Today, write your opening line and say it out loud three times.", sub: "Hôm nay, viết câu mở đầu và tập nói to ba lần." },
      ] },

    // ---------- Câu đố ----------
    { id: "s29", module: "QUIZ-01", ref: "questions[18]",
      data: {
        q: "You suddenly forget your next point in the middle of your talk, what should you do?",
        options: [
          "Stop and explain that you are too nervous to continue right now",
          "Keep talking about anything until the idea comes back, so there is no silence",
          "Pause, check your notes calmly, and continue, since a short silence seems normal",
        ],
        correct: 2, countdown: 5, illus: "spiral-notepad",
        why: "Vài giây im lặng với bạn thấy dài, với người nghe chỉ là một nhịp dừng.",
      },
      lines: [
        { id: "l1", lang: "en", say: "You suddenly forget your next point in the middle of your talk, what should you do?", sub: "Đang nói thì bạn chợt quên ý tiếp theo, bạn nên làm gì?" },
        { id: "l2", lang: "en", say: "Pause, check your notes calmly, and continue, since a short silence seems normal.", sub: "Dừng lại, bình tĩnh xem ghi chú rồi nói tiếp, vài giây im lặng là bình thường." },
        { id: "l3", lang: "en", say: "To you, a few seconds feel long. To listeners, it's just a normal pause.", sub: "Với bạn, vài giây thấy dài; với người nghe, chỉ là một nhịp dừng." },
      ] },
    { id: "s30", module: "END-05",
      data: { text: "Bốn mươi câu để bớt run", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [{ id: "l1", lang: "en", who: "det", say: "Then try the forty questions below.", sub: "Rồi thử bốn mươi câu hỏi bên dưới nhé." }] },
  ],
};
