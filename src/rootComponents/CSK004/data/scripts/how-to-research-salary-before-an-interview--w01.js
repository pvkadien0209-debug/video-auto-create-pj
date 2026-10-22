// Kịch bản video W lần 3 (#110) — "Cách tìm hiểu mức lương trước khi phỏng vấn" · chuỗi "Chuẩn bị phỏng vấn xin việc"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-research-salary-before-an-interview--w01",
  hook: "HOOK-15",
  loop: { open: "s01", close: "s29" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "job-seekers", slug: "how-to-research-salary-before-an-interview", door: "ky-nang", level: "B1",
    title: "Cách tìm hiểu mức lương trước khi phỏng vấn", series: "Chuẩn bị phỏng vấn xin việc" },
  format: "W", mode: "text", audio: {},
  notes: "Phủ ý: 25/25. Đổi tên: Tường → Dũng; người phỏng vấn → Cô Hoa (chỉ hỏi câu “mức lương mong muốn” có trong bài); “bạn” hỏi người trong nghề (p9–p10) → Thảo, người trong nghề → Bác Bình (không nói câu nào, chỉ đổi nét mặt; câu trả lời không có trong bài nên không viết); “bạn” đi làm bốn năm ở Hai lựa chọn p20 → Thảo (thẻ CMP-03). Vai mới: Sam (s29) là người phỏng vấn bằng tiếng Anh ở p25, chỉ hỏi câu mức lương; Dũng đọc hai câu mẫu tiếng Anh p25. Không dùng Bin, Bà Tư. Phần làm lại ở s20 (DLG-01) dùng câu mẫu p22 theo bài đã sửa (#107): nói rõ trước khấu trừ. Câu cảm thán của Dũng ở s01 dựng từ ý p15 (tháng đầu số tiền về tài khoản ít hơn hẳn mình tính), không thêm số mới. Câu đố: questions[27], questions[17] (không có tên nhân vật).",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "p15",
      data: { set: "room", label: "Tháng lương đầu tiên",
        actors: [{ id: "dung", side: "left", pose: "phone" }] },
      lines: [
        L("l1", null, "Dũng asked for about fifteen million. He meant take-home pay.", "Dũng xin “khoảng mười lăm triệu”, nghĩ là tiền về tay."),
        L("l2", null, "The company heard pay before deductions, and quickly agreed.", "Công ty hiểu là trước khấu trừ, đồng ý ngay."),
        L("l3", "dung", "Wait. Why is my first salary so much lower?", "Ơ, sao lương tháng đầu ít hơn hẳn vậy?", { face: "surprised", pose: "phone" }),
        L("l4", null, "Insurance and tax came out. His spending plans must be redone.", "Đã trừ bảo hiểm và thuế. Kế hoạch chi tiêu phải làm lại.", { react: { dung: "sad" } }),
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Chuẩn bị câu trả lời về lương", pose: "present",
        items: ["Ba bốn nguồn", "Một khoảng, không một con số", "Nói rõ trước hay sau khấu trừ", "Căn cứ là điểm mạnh thật"] },
      lines: [
        L("l1", "det", "How do you prepare for the salary question?", "Chuẩn bị cho câu hỏi về lương thế nào?"),
        L("l2", "det", "Check three or four sources.", "Tìm hiểu từ ba bốn nguồn."),
        L("l3", "det", "Give a range, not one number.", "Đưa ra một khoảng, không phải một con số."),
        L("l4", "det", "Say if it's before or after deductions.", "Nói rõ trước hay sau khấu trừ."),
        L("l5", "det", "And back it with real strengths.", "Và căn cứ vào điểm mạnh thật."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Sáu phần của video", chapters: [
        { label: "Vì sao phải tìm hiểu", illus: "red-question-mark" },
        { label: "Tìm ở đâu", illus: "magnifying-glass-tilted-left" },
        { label: "Hỏi người trong nghề", illus: "speech-balloon" },
        { label: "Gross, net, tổng thu nhập", illus: "money-bag" },
        { label: "Đề xuất bao nhiêu", illus: "balance-scale" },
        { label: "Nói trong phòng phỏng vấn", illus: "handshake" } ] },
      lines: [
        L("l1", null, "Six parts: why research, where to look, asking people,", "Sáu phần: vì sao tìm hiểu, tìm ở đâu, hỏi người trong nghề,"),
        L("l2", null, "gross and net, how much to ask, and what to say.", "gross và net, đề xuất bao nhiêu, và nói thế nào trong phòng."),
      ] },

    // ---------- Phần 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Vì sao phải tìm hiểu lương?" },
      lines: [L("l1", "det", "Part one: why research salary before you go?", "Phần một: vì sao phải tìm hiểu lương trước khi đi?")] },
    { id: "s05", module: "CMP-01", ref: "p1",
      data: { labels: ["Đòi quá cao", "Nói quá thấp"], left: "Hồ sơ bị gạt", right: "Tiếc suốt cả năm", illus: ["wastebasket", "pensive-face"] },
      lines: [
        L("l1", null, "The salary question comes suddenly, sometimes in the first talk with HR.", "Câu hỏi lương thường đến bất ngờ, có khi ngay vòng đầu với nhân sự."),
        L("l2", null, "Unprepared, you ask too much and get cut, or too little and regret it all year.", "Không chuẩn bị: đòi quá cao thì bị gạt, nói quá thấp thì tiếc cả năm."),
      ] },
    { id: "s06", module: "TEXT-01", ref: "p2",
      data: { text: "Giọng chắc chắn, có lý do, quan trọng hơn con số chính xác.", illus: "speaking-head" },
      lines: [L("l1", null, "With facts in hand, you stay calm. A sure voice with reasons beats an exact number.", "Có căn cứ, bạn bình tĩnh hơn. Giọng chắc, có lý do quan trọng hơn con số chính xác.")] },

    // ---------- Phần 2 ----------
    { id: "s07", module: "HOST-03", data: { n: 2, of: 6, title: "Tìm thông tin lương ở đâu?" },
      lines: [L("l1", "det", "Part two: where to find salary information.", "Phần hai: tìm thông tin lương ở đâu?")] },
    { id: "s08", module: "LIST-06", ref: "p3",
      data: { title: "Nguồn một: tin tuyển dụng có ghi lương", steps: [
        { text: "Cùng chức danh, thành phố, số năm kinh nghiệm", illus: "magnifying-glass-tilted-left" },
        { text: "Ghi mười đến hai mươi tin vào một bảng", illus: "bar-chart" },
        { text: "Bỏ tin ghi mức cao bất thường", illus: "wastebasket" },
        { text: "Nhìn khoảng xuất hiện nhiều nhất", illus: "bullseye" } ] },
      lines: [
        L("l1", null, "Source one: job ads with pay. Same title, same city, same experience.", "Nguồn một: tin tuyển dụng có lương. Cùng chức danh, thành phố, số năm kinh nghiệm."),
        L("l2", null, "Put ten to twenty in a table.", "Ghi mười đến hai mươi tin vào một bảng."),
        L("l3", null, "Skip the strangely high ones, and find the most common range.", "Bỏ tin cao bất thường, rồi nhìn khoảng xuất hiện nhiều nhất."),
      ] },
    { id: "s09", module: "HOST-02", ref: "p4",
      data: { statement: "Mức lương ghi trên tin là mức người mới sẽ nhận", truth: false,
        why: "Đôi khi là mức tối đa để thu hút; người mới thường nhận mức thấp hoặc giữa khoảng." },
      lines: [
        L("l1", "det", "The pay in the ad is what a newcomer gets. True or false?", "Mức ghi trên tin là mức người mới sẽ nhận. Đúng hay sai?"),
        L("l2", "det", "Often false. It may be the top, to attract people. Newcomers start low or mid-range.", "Thường là sai. Có khi là mức tối đa để thu hút; người mới nhận mức thấp hoặc giữa khoảng.", { face: "wink" }),
      ] },
    { id: "s10", module: "CMP-01", ref: "p5,p6",
      data: { labels: ["Báo cáo lương theo ngành", "Trang đánh giá, nhóm nghề"], left: "Dữ liệu nhiều người, nhưng nghiêng về công ty lớn; xem năm phát hành", right: "Dễ nhầm trước, sau khấu trừ, hay gộp thưởng: chỉ tham khảo", illus: ["bar-chart", "busts-in-silhouette"] },
      lines: [
        L("l1", null, "Source two: salary reports from recruiters, by field, level and city.", "Nguồn hai: báo cáo lương của công ty tuyển dụng, theo ngành, cấp bậc, thành phố."),
        L("l2", null, "Many people's data, but they lean to big firms and office jobs. Check the year.", "Dữ liệu nhiều người, nhưng nghiêng về công ty lớn, văn phòng. Luôn xem năm phát hành."),
        L("l3", null, "Source three: review sites and online groups. People mix up gross and net, or add bonuses.", "Nguồn ba: trang đánh giá, nhóm nghề. Người chia sẻ hay nhầm trước, sau khấu trừ, hoặc gộp thưởng."),
      ] },
    { id: "s11", module: "CMP-09", ref: "p7",
      data: { myth: "Con số trong một bài đăng lan truyền chính là mức thị trường",
        fact: "Bài lan truyền vì khác thường: công ty nước ngoài, kỹ năng hiếm, hoặc đã gộp thưởng",
        illusMyth: "mobile-phone", illusFact: "bar-chart" },
      lines: [
        L("l1", null, "A viral post: huge pay in year one. That's the market? No. It spread because it's unusual.", "Bài lan truyền: lương rất cao năm đầu. Đó là thị trường? Không, nó lan vì khác thường."),
        L("l2", null, "A foreign firm, a rare skill, or bonus included. Say that number, and they'll ask: based on what?", "Công ty nước ngoài, kỹ năng hiếm, hay gộp thưởng. Nói con số ấy, dễ bị hỏi “Em dựa vào đâu?”"),
      ] },
    { id: "s12", module: "TEXT-02", ref: "p8",
      data: { text: "Một bài đăng không phải là thị trường.", keywords: ["Một bài đăng", "thị trường"], illus: "mobile-phone" },
      lines: [
        L("l1", null, "The real level shows when you compare many ads with industry reports. One post is not the market.", "Mặt bằng thật chỉ hiện ra khi so nhiều tin cùng vị trí với báo cáo lương. Một bài đăng không phải là thị trường."),
      ] },
    // ---------- Phần 3 ----------
    { id: "s13", module: "HOST-03", data: { n: 3, of: 6, title: "Hỏi người trong nghề" },
      lines: [L("l1", "det", "Part three: asking people in your field, politely.", "Phần ba: hỏi người trong nghề thế nào cho khéo?")] },
    { id: "s14", module: "SCENE-03", ref: "p9,p10",
      data: { set: "cafe", actors: [{ id: "thao", side: "left" }, { id: "binh", side: "right", pose: "hold" }],
        left: { label: "Hỏi túi tiền riêng", ok: false }, right: { label: "Hỏi mức thị trường", ok: true } },
      lines: [
        L("a1", "thao", "So how much do you earn now?", "Lương bác giờ được bao nhiêu thế?", { phase: "a", pose: "explain", react: { binh: "worried" } }),
        L("a2", null, "A personal question. People answer vaguely, then change the subject.", "Hỏi thẳng thu nhập riêng: người kia trả lời lấp lửng rồi đổi chủ đề.", { phase: "a" }),
        L("b1", "thao", "In your view, what range do mid-sized companies pay for this job?", "Theo bác, công ty cỡ vừa thường trả vị trí này trong khoảng nào ạ?", { phase: "b", pose: "explain", react: { binh: "happy" } }),
        L("b2", null, "About the market, not anyone's pocket. They answer clearly, maybe with allowances to ask about.", "Hỏi mặt bằng, không đụng túi tiền ai. Họ trả lời cụ thể, có khi chỉ thêm phụ cấp nên hỏi.", { phase: "b" }),
      ] },
    { id: "s15", module: "TEXT-04", ref: "p11",
      data: { text: "“Với ba năm làm kế toán tổng hợp ở thành phố mình, mức phổ biến khoảng bao nhiêu anh nhỉ?”", marks: ["mức phổ biến"], illus: "speech-balloon" },
      lines: [
        L("l1", null, "Like: with three years in general accounting here, what's the usual range?", "Ví dụ: “Ba năm kế toán tổng hợp ở thành phố mình, mức phổ biến khoảng bao nhiêu?”"),
        L("l2", null, "Ask about the market, not someone's pocket.", "Hỏi mức thị trường, đừng hỏi túi tiền người ta."),
      ] },

    // ---------- Phần 4 ----------
    { id: "s16", module: "HOST-03", data: { n: 4, of: 6, title: "Gross, net, tổng thu nhập" },
      lines: [L("l1", "det", "Part four: gross, net, and total income.", "Phần bốn: lương gross, net và tổng thu nhập khác nhau thế nào?")] },
    { id: "s17", module: "CMP-01", ref: "p12",
      data: { labels: ["Lương gross", "Lương net"], left: "Chưa trừ bảo hiểm bắt buộc và thuế thu nhập cá nhân", right: "Số tiền về tài khoản của bạn", illus: ["money-bag", "credit-card"] },
      lines: [
        L("l1", null, "Gross pay: before compulsory insurance and personal income tax.", "Lương gross: chưa trừ bảo hiểm bắt buộc và thuế thu nhập cá nhân."),
        L("l2", null, "Net pay: what reaches your bank account.", "Lương net: số tiền về tài khoản của bạn."),
      ] },
    { id: "s18", module: "LIST-02", ref: "p13",
      data: { title: "Tổng thu nhập có thể gồm", items: [
        { illus: "receipt", text: "Phụ cấp" }, { illus: "wrapped-gift", text: "Thưởng tháng mười ba" },
        { illus: "chart-increasing", text: "Thưởng theo kết quả" }, { illus: "handshake", text: "Hoa hồng" } ], illus: "money-bag" },
      lines: [
        L("l1", null, "Total income may add allowances, a thirteenth-month bonus, performance bonuses, commission.", "Tổng thu nhập có thể thêm phụ cấp, thưởng tháng mười ba, thưởng kết quả, hoa hồng."),
        L("l2", null, "Results-based money isn't there every month. Don't count it as fixed.", "Khoản theo kết quả không chắc tháng nào cũng có. Đừng tính như tiền cố định."),
      ] },
    { id: "s19", module: "TEXT-04", ref: "p14",
      data: { text: "Tỷ lệ đóng, mức giảm trừ có thể đổi theo từng thời kỳ: dùng công cụ tính lương cập nhật, hoặc hỏi nhân sự.", marks: ["công cụ tính lương cập nhật"], illus: "abacus" },
      lines: [
        L("l1", null, "The gap can be big, and the rates can change over time.", "Khoảng chênh có thể khá lớn, tỷ lệ đóng và mức giảm trừ có thể thay đổi."),
        L("l2", null, "Use an up-to-date calculator from a reliable source, or ask HR. Not an old rule.", "Dùng công cụ tính lương cập nhật từ nguồn tin cậy, hoặc hỏi nhân sự. Đừng đoán theo cách truyền miệng."),
      ] },
    { id: "s20", module: "DLG-01", ref: "p16",
      data: { set: "office", label: "Tua lại buổi phỏng vấn",
        actors: [{ id: "dung", side: "left" }, { id: "hoa", side: "right", pose: "hold" }],
        verdict: { ok: false, label: "Nói con số mà không nói loại lương",
          why: "Dũng nghĩ là tiền về tay, công ty hiểu là trước khấu trừ. Đồng ý nhanh: hãy kiểm tra." } },
      lines: [
        L("l1", "hoa", "What salary do you expect?", "Mức lương mong muốn của em là bao nhiêu?", { pose: "explain" }),
        L("l2", "dung", "About fifteen million.", "Dạ, khoảng mười lăm triệu ạ.", { face: "happy", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Gross or net? If they agree very fast, check you mean the same thing.", "Gross hay net? Công ty đồng ý quá nhanh thì kiểm tra hai bên có hiểu giống nhau không."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "dung", "Based on my research and experience, I'd like a range between these two figures,", "Dựa trên tìm hiểu thị trường và kinh nghiệm, em mong muốn trong khoảng từ mức này đến mức kia,", { phase: "redo", pose: "explain", face: "thinking" }),
        L("l7", "dung", "before deductions.", "tính trước khấu trừ ạ.", { phase: "redo", face: "happy", react: { hoa: "happy" } }),
        L("l8", "det", "Say the number, and say the type of pay.", "Nói con số, nói luôn loại lương.", { phase: "redo", face: "happy" }),
      ] },

    // ---------- Phần 5 ----------
    { id: "s21", module: "HOST-03", data: { n: 5, of: 6, title: "Mình nên đề xuất bao nhiêu?" },
      lines: [L("l1", "det", "Part five: how much should you ask for?", "Phần năm: mình nên đề xuất bao nhiêu?")] },
    { id: "s22", module: "REL-10", ref: "p17,p18",
      data: { title: "Ba mốc của riêng bạn, viết ra trước", levels: [
        { label: "Mức đề xuất", sub: "Cao hơn mục tiêu một chút, chừa chỗ thương lượng", illus: "chart-increasing" },
        { label: "Mức mục tiêu", sub: "Đúng kinh nghiệm, kỹ năng so với thị trường", illus: "bullseye" },
        { label: "Mức tối thiểu", sub: "Đủ chi phí sống; dưới mức này sẵn sàng từ chối", illus: "house" } ] },
      lines: [
        L("l1", null, "From the market data, work out three levels. Write them down before the interview.", "Từ dữ liệu thị trường, tự tính ba mốc, viết ra giấy trước buổi phỏng vấn."),
        L("l2", null, "Minimum: covers living costs and goals. Below it, you'd say no.", "Tối thiểu: đủ chi phí sống và mục tiêu; dưới mức này bạn sẵn sàng từ chối."),
        L("l3", null, "Target: right for your experience and skills.", "Mục tiêu: đúng với kinh nghiệm và kỹ năng so với thị trường."),
        L("l4", null, "Proposal: a little higher, to leave room to negotiate.", "Đề xuất: cao hơn mục tiêu một chút để còn chỗ thương lượng."),
      ] },
    { id: "s23", module: "LIST-02", ref: "p19",
      data: { title: "Đặt mình trong khoảng bằng điểm mạnh thật", items: [
        { illus: "scroll", text: "Chứng chỉ" }, { illus: "globe-showing-asia-australia", text: "Ngoại ngữ" },
        { illus: "laptop", text: "Phần mềm chuyên dùng" }, { illus: "busts-in-silhouette", text: "Nhóm khách hàng đặc thù" } ], illus: "flexed-biceps" },
      lines: [
        L("l1", null, "Move up in the range with real strengths: certificates, languages, software, special customers.", "Đặt mình trong khoảng bằng điểm mạnh thật: chứng chỉ, ngoại ngữ, phần mềm, nhóm khách đặc thù."),
        L("l2", null, "Not old salary plus a bit. The new job may carry different duties.", "Đừng lấy lương cũ cộng thêm một khoản: việc mới có thể khác về trách nhiệm."),
      ] },
    { id: "s24", module: "CMP-03", ref: "p20",
      data: { title: "Thảo đi làm bốn năm, rất muốn có việc mới", illus: "briefcase",
        a: { label: "Cách A", do: "Nói thấp hơn mặt bằng “cho chắc”", result: "Khởi điểm thấp, các năm sau tăng chậm", illus: "chart-decreasing" },
        b: { label: "Cách B", do: "Khoảng mục tiêu, kèm điểm mạnh", result: "Thương lượng từ con số có lý lẽ", illus: "balance-scale" } },
      lines: [
        L("l1", null, "Way A: below the market, to be safe. A low start holds back later raises.", "Cách A: thấp hơn mặt bằng “cho chắc”. Khởi điểm thấp kéo theo mức tăng các năm sau."),
        L("l2", null, "Way B: a target range, with strengths. They negotiate from her reasoned number.", "Cách B: khoảng mục tiêu kèm điểm mạnh. Công ty thương lượng từ con số có lý lẽ."),
      ] },
    { id: "s25", module: "TEXT-02", ref: "p21",
      data: { text: "Đừng để nỗi sợ đặt giá cho mình.", keywords: ["nỗi sợ", "đặt giá"], illus: "balance-scale" },
      lines: [L("l1", null, "Don't let fear set your price.", "Đừng để nỗi sợ đặt giá cho mình.")] },

    // ---------- Phần 6 ----------
    { id: "s26", module: "HOST-03", data: { n: 6, of: 6, title: "Nói về lương trong phòng" },
      lines: [L("l1", "det", "Last part: talking about pay in the interview.", "Phần cuối: trong phòng phỏng vấn, nói về lương thế nào?")] },
    { id: "s27", module: "SCENE-01", ref: "p22,p23",
      data: { set: "office", label: "Còn sớm trong quy trình",
        actors: [{ id: "dung", side: "left" }, { id: "hoa", side: "right", pose: "hold" }] },
      lines: [
        L("l1", null, "The safe way: a researched range, with the type of pay.", "Cách an toàn: một khoảng có căn cứ, kèm loại lương."),
        L("l2", "dung", "Could you share the budget you have planned for this role?", "Anh chị có thể chia sẻ khoảng ngân sách dự kiến cho vị trí này không ạ?", { pose: "explain", to: "hoa" }),
        L("l3", "dung", "I'd also like to know about bonuses and benefits, to see the whole package.", "Em cũng muốn hiểu thêm về thưởng và phúc lợi để cân nhắc chung ạ.", { face: "happy", react: { hoa: "thinking" } }),
        L("l4", null, "Early in the process, it's fine to ask back, politely.", "Nếu quy trình còn sớm, có thể hỏi lại lịch sự như vậy."),
      ] },
    { id: "s28", module: "LIST-05", ref: "p24",
      data: { title: "Khoảng của họ thấp hơn mong muốn?", illus: "thinking-face", items: [
        "Đừng vội gật, đừng vội từ chối", "Cảm ơn", "Hỏi thêm thưởng, phụ cấp, thời điểm xem xét lương", "Xin thời gian suy nghĩ nếu cần" ] },
      lines: [
        L("l1", null, "Their range is lower? Don't rush to say yes or no.", "Khoảng của họ thấp hơn? Đừng vội gật hay vội từ chối."),
        L("l2", null, "Thank them.", "Cảm ơn."),
        L("l3", null, "Ask about bonuses, allowances, and when pay is reviewed.", "Hỏi thêm về thưởng, phụ cấp, thời điểm xem xét lương."),
        L("l4", null, "And ask for time to think, if you need it.", "Và xin thời gian suy nghĩ nếu cần."),
      ] },
    { id: "s29", module: "SCENE-01", ref: "p25",
      data: { set: "meeting", label: "Phỏng vấn bằng tiếng Anh",
        actors: [{ id: "dung", side: "left" }, { id: "sam", side: "right", pose: "hold" }] },
      lines: [
        L("l1", "sam", "What salary are you looking for?", "Bạn mong muốn mức lương bao nhiêu?", { pose: "explain", to: "dung" }),
        L("l2", "dung", "Based on my research, I am looking for a range between these two figures,", "Dựa trên tìm hiểu, tôi mong muốn trong khoảng giữa hai mức này,", { pose: "explain", to: "sam" }),
        L("l3", "dung", "gross, before tax and insurance.", "tính gross, trước thuế và bảo hiểm.", { face: "thinking" }),
        L("l4", "dung", "Could you share the budget you have planned for this role?", "Anh chị có thể chia sẻ ngân sách dự kiến cho vị trí này không?", { face: "happy", react: { sam: "happy" } }),
      ] },

    // ---------- Tổng kết, câu đố, kết ----------
    { id: "s30", module: "END-02", ref: "outro",
      data: { kicker: "Nhớ mang theo", illus: "money-bag", points: [
        "Ba bốn nguồn, một khoảng lương",
        "Ba mốc của riêng bạn, viết ra trước",
        "Nói con số, nói luôn loại lương" ],
        icons: ["magnifying-glass-tilted-left", "balance-scale", "receipt"] },
      lines: [
        L("l1", null, "Several sources, one range, your three levels, and always gross or net.", "Ba bốn nguồn, một khoảng lương, ba mốc của bạn, và luôn nói rõ gross hay net."),
        L("l2", null, "Today, list ten ads with pay for your role, and circle the common range.", "Hôm nay, ghi mười tin cùng vị trí có lương, khoanh vùng khoảng phổ biến nhất."),
      ] },
    { id: "s31", module: "QUIZ-01", ref: "questions[27]",
      data: { q: "What are the three salary levels you should prepare?",
        options: [
          "A low number, a lower number, and the lowest number you can imagine",
          "A minimum you accept, a target that fits the market, and a slightly higher proposal",
          "Your old salary, your friend's salary, and the highest salary you ever heard",
        ],
        correct: 1, countdown: 5, illus: "balance-scale",
        why: "Tối thiểu để biết khi nào từ chối, mục tiêu đúng giá trị, đề xuất chừa chỗ thương lượng." },
      lines: [
        L("l1", null, "What are the three salary levels you should prepare?", "Ba mốc lương bạn nên chuẩn bị là gì?"),
        L("l2", null, "A minimum you accept, a target that fits the market, and a slightly higher proposal.", "Mức tối thiểu chấp nhận, mức mục tiêu hợp thị trường, và mức đề xuất cao hơn một chút."),
        L("l3", null, "Three levels keep you flexible, without losing direction.", "Ba mốc giúp bạn linh hoạt mà không mất phương hướng."),
      ] },
    { id: "s32", module: "QUIZ-01", ref: "questions[17]",
      data: { q: "What is the difference between gross pay and net pay?",
        options: [
          "Gross is before insurance and tax are taken off, net is what you receive",
          "They are the same, just two names used by different kinds of companies",
          "Gross is paid in cash, net is paid by bank transfer every month",
        ],
        correct: 0, countdown: 5, illus: "money-bag",
        why: "Gross là trước khi trừ bảo hiểm và thuế; net là tiền về tài khoản." },
      lines: [
        L("l1", null, "What is the difference between gross pay and net pay?", "Lương gross và lương net khác nhau thế nào?"),
        L("l2", null, "Gross is before insurance and tax are taken off, net is what you receive.", "Gross là trước khi trừ bảo hiểm và thuế, net là số bạn thực nhận."),
        L("l3", null, "Net is the money that actually reaches your account.", "Net là số tiền thực sự về tài khoản."),
      ] },
    { id: "s33", module: "END-05", data: { text: "Bốn mươi câu để nói về lương có căn cứ", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Your turn. Forty questions are waiting below.", "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới.")] },
  ],
};
