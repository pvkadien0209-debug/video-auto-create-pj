// Kịch bản video W lần 3 (#110) — "Tương quan và nhân quả khác nhau như thế nào? Cách tránh kết luận vội" · chuỗi "Tư duy phản biện"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  schema: "detpro.video-script/0.2",
  id: "correlation-vs-causation--w01",
  hook: "HOOK-04",
  loop: { open: "s01", close: "s28" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (C)
  unit: { audience: "everyday-information-readers", slug: "correlation-vs-causation", door: "ky-nang", level: "B1",
    title: "Tương quan và nhân quả khác nhau như thế nào? Cách tránh kết luận vội", series: "Tư duy phản biện" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: anh Phát (chủ tiệm) → Bác Bình; cậu nhân viên mới → Dũng; anh Khang → Thảo (đổi giới, vai nhân viên văn phòng). Con nhà hàng xóm ở ❓ p13 chỉ kể trên thẻ (không dựng cảnh, nên không dùng Bé Bin). Vai mới: không dùng. HOOK-04: s01 Bác Bình tin sai rằng nhân viên mới gây ra đơn nhầm (📌 p16), s20 đóng lại bằng phần sau của p16. DLG-01 s12 dựng từ 📌 p9: câu hỏi của đồng nghiệp trong bài do Đét hỏi ở phần làm lại. Không dùng questions[32]. Phủ ý: 22/22.",
  scenes: [
    // ── Mở đầu kể chuyện
    { id: "s01", module: "SCENE-01", ref: "p16",
      data: { set: "shop", label: "Hai đơn giao nhầm",
        actors: [{ id: "binh", side: "left" }, { id: "dung", side: "right", pose: "hold" }], props: ["package"] },
      lines: [
        L("l1", null, "Two orders went to the wrong customers this week, the week a new worker started.", "Tuần này tiệm giao nhầm hai đơn, đúng tuần cậu nhân viên mới vào làm."),
        L("l2", "binh", "It must be the new boy. I'll let him go.", "Chắc tại cậu mới. Thôi cho nghỉ.", { face: "stern", pose: "cross", react: { dung: "worried" } }),
      ],
      beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Đi cùng nhau, chưa chắc gây ra", pose: "think", items: ["Có một yếu tố thứ ba", "Nhân quả theo chiều ngược lại", "Chỉ là trùng hợp"] },
      lines: [
        L("l1", "det", "The mistakes started when Dũng arrived. Does that make him the cause? Not necessarily. Maybe:", "Lỗi xuất hiện đúng lúc Dũng đến. Vậy Dũng là nguyên nhân? Chưa chắc. Có thể:"),
        L("l2", "det", "A third factor.", "Có một yếu tố thứ ba."),
        L("l3", "det", "The cause runs the other way.", "Nhân quả đi theo chiều ngược lại."),
        L("l4", "det", "Or it's just a coincidence.", "Hoặc chỉ là trùng hợp."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Từ tiêu đề đến tự kiểm tra", chapters: [
        { label: "Tương quan, nhân quả", illus: "link" },
        { label: "Ba lý do không phải nhân quả", illus: "red-question-mark" },
        { label: "“Tôi dùng rồi, khỏi thật”", illus: "teacup-without-handle" },
        { label: "Một chuyện thành công", illus: "trophy" },
        { label: "Đổ cho người có mặt", illus: "bust-in-silhouette" },
        { label: "Tự kiểm tra, nói đúng mức", illus: "detective" } ] },
      lines: [
        L("l1", null, "From a headline or a personal story, all the way to checking the cause yourself.", "Đi từ lúc đọc một tiêu đề hay nghe một lời kể, đến lúc tự kiểm tra nguyên nhân."),
        L("l2", null, "Seven stops, one simple habit: slow down before you conclude.", "Bảy chặng, một thói quen: chậm lại trước khi kết luận."),
      ] },

    // ── Chương 1: Khác nhau thế nào (p1–p2)
    { id: "s04", module: "HOST-03", data: { n: 1, of: 7, title: "Tương quan và nhân quả" },
      lines: [L("l1", "det", "Part one: what's the difference?", "Phần một: tương quan và nhân quả khác nhau thế nào?")] },
    { id: "s05", module: "CMP-01", ref: "p1,p2",
      data: { labels: ["Tương quan", "Nhân quả"], left: "Hai hiện tượng thay đổi cùng nhau: cùng tăng, hoặc một tăng một giảm", right: "Hiện tượng này thật sự gây ra hiện tượng kia",
        illus: ["chart-increasing", "right-arrow"] },
      lines: [
        L("l1", null, "Correlation: two things change together. Both rise, or one rises while the other falls.", "Tương quan: hai hiện tượng thay đổi cùng nhau, cùng tăng, hoặc một tăng một giảm."),
        L("l2", null, "Causation: one thing really causes the other.", "Nhân quả: hiện tượng này thật sự gây ra hiện tượng kia."),
        L("l3", null, "Seeing two things together is a reason to look further. Not the final answer.", "Thấy hai thứ đi cùng nhau là lý do để tìm hiểu thêm, chưa phải câu trả lời cuối cùng."),
      ] },

    // ── Chương 2: Ba lý do không phải nhân quả (p3–p7)
    { id: "s06", module: "HOST-03", data: { n: 2, of: 7, title: "Đi cùng mà không nhân quả" },
      lines: [L("l1", "det", "Part two: why things can go together without causing each other.", "Phần hai: vì sao hai thứ đi cùng nhau mà không phải nhân quả?")] },
    { id: "s07", module: "RSN-02", ref: "p3,p4,p5",
      data: { examples: [
        { text: "Mùa hè, kem bán chạy và đuối nước cùng tăng: do trời nóng", illus: "ice-cream" },
        { text: "Người uống nhiều cà phê làm nhiều giờ: có thể ngược chiều", illus: "hot-beverage" },
        { text: "Hai con số tình cờ cùng tăng vài tháng: trùng hợp", illus: "bar-chart" } ],
        conclusion: "Hai thứ đi cùng nhau chưa chắc cái này gây ra cái kia" },
      lines: [
        L("l1", null, "A third factor: in summer, ice cream sales and drownings both rise.", "Yếu tố thứ ba: mùa hè, kem bán ra và số vụ đuối nước cùng tăng."),
        L("l2", null, "Ice cream doesn't cause drowning. Hot weather makes people eat ice cream and swim more.", "Kem không gây đuối nước; trời nóng khiến người ta vừa ăn kem vừa đi bơi nhiều hơn."),
        L("l3", null, "Reverse cause: heavy coffee drinkers work long hours. Maybe the long hours make them drink coffee.", "Nhân quả ngược: người uống nhiều cà phê làm nhiều giờ. Có thể vì làm nhiều nên uống nhiều."),
        L("l4", null, "Coincidence: any two numbers can rise together for a few months. Less data, more chance of coincidence.", "Trùng hợp: hai con số bất kỳ có thể cùng tăng vài tháng. Càng ít dữ liệu, càng dễ trùng hợp."),
      ] },
    { id: "s08", module: "CMP-09", ref: "p6",
      data: { myth: "“Người hay ngủ trưa dài có sức khoẻ kém hơn”: vậy ngủ trưa dài gây hại",
        fact: "Có thể ngược lại: người đang bệnh dễ mệt nên ngủ trưa lâu hơn",
        illusMyth: "sleeping-face", illusFact: "face-with-thermometer" },
      lines: [
        L("l1", null, "A headline: People who take long naps have worse health. So long naps are harmful?", "Tiêu đề: “Người hay ngủ trưa dài có sức khoẻ kém hơn”. Vậy ngủ trưa dài gây hại?"),
        L("l2", null, "Such articles usually just record two things together, not which causes which.", "Những bài như vậy thường chỉ ghi nhận hai điều đi cùng nhau, chưa cho thấy cái nào gây ra cái nào."),
      ] },
    { id: "s08b", module: "TEXT-04", ref: "p6",
      data: { text: "Chiều ngược lại cũng hợp lý: người đang có bệnh dễ mệt nên ngủ trưa lâu hơn.", marks: ["Chiều ngược lại", "ngủ trưa lâu hơn"], illus: "face-with-thermometer" },
      lines: [
        L("l1", null, "The other way is just as likely: sick people get tired, so they nap longer.", "Chiều ngược lại cũng hợp lý: người đang bệnh dễ mệt nên ngủ trưa lâu hơn."),
        L("l2", null, "Drop your nap because of the headline, and you may just feel exhausted every afternoon.", "Vội bỏ giấc trưa vì tiêu đề, bạn có thể chỉ mệt rã rời mỗi chiều mà sức khoẻ không khá hơn."),
      ] },
    { id: "s09", module: "TEXT-02", ref: "p7",
      data: { text: "Thấy “A gây ra B”, hỏi thử “hay B gây ra A?”.", keywords: ["hay B gây ra A?"], illus: "counterclockwise-arrows-button" },
      lines: [L("l1", "det", "See A causes B? Ask: or does B cause A?", "Thấy “A gây ra B”, hỏi thử “hay B gây ra A?”.")] },

    // ── Chương 3: “Tôi dùng rồi, khỏi thật” (p8–p11)
    { id: "s10", module: "HOST-03", data: { n: 3, of: 7, title: "“Tôi dùng rồi, khỏi thật”" },
      lines: [L("l1", "det", "Part three: I tried it, and I got better.", "Phần ba: nghe “tôi dùng rồi, khỏi thật” thì nghĩ sao?")] },
    { id: "s11", module: "TEXT-04", ref: "p8",
      data: { text: "Lời kể không cho biết: nếu không dùng thì chuyện gì sẽ xảy ra?", marks: ["nếu không dùng", "Lời kể"], illus: "speech-balloon" },
      lines: [
        L("l1", null, "One person's story is easy to remember and easy to believe.", "Lời kể của một người dễ nhớ và dễ tin."),
        L("l2", null, "But it doesn't tell you what would happen without it.", "Nhưng nó không cho biết nếu không dùng thì chuyện gì sẽ xảy ra."),
        L("l3", null, "Many mild illnesses get better on their own after a while, whatever you drink.", "Nhiều bệnh nhẹ tự đỡ sau một thời gian, dù có uống gì hay không."),
      ] },
    { id: "s12", module: "DLG-01", ref: "p9,p10",
      data: { set: "office", label: "Nhóm chat công ty",
        actors: [{ id: "thao", side: "center", pose: "phone" }],
        verdict: { ok: false, label: "Khỏi sau khi uống là khỏi vì uống",
          why: "Lời kể không cho biết nếu không uống thì sao. Cảm lạnh thường tự khỏi sau bảy đến mười ngày." } },
      lines: [
        L("l1", null, "Thảo had a cold. She drank a herbal drink from a friend, and got better in about a week.", "Thảo bị cảm, uống loại nước thảo mộc bạn cho, khoảng một tuần thì khỏi."),
        L("l2", "thao", "Drink this and your cold is gone! Just ask if you need some.", "Uống cái này là hết cảm, ai cần thì bảo nhé!", { face: "happy", pose: "phone", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Most common colds get better on their own in seven to ten days.", "Phần lớn cảm lạnh thông thường tự khỏi sau bảy đến mười ngày."),
        L("l5", "det", "Let's rewind. Last time you didn't drink it, how long did it take?", "Tua lại nhé. Lần trước không uống thì bao lâu khỏi?", { phase: "redo" }),
        L("l6", "thao", "Hmm… about the same number of days.", "Ừ nhỉ… cũng chừng ấy ngày.", { phase: "redo", face: "thinking", pose: "think" }),
      ] },
    { id: "s13", module: "LIST-13", ref: "p10,p11",
      data: { title: "Rút ra", items: [
        { title: "Khỏi sau khi uống chưa chắc là khỏi vì uống", detail: "Cảm lạnh thường tự khỏi sau khoảng bảy đến mười ngày.", illus: "teacup-without-handle" },
        { title: "Lo về sức khoẻ thật sự?", detail: "Hỏi bác sĩ, dược sĩ thay vì lời kể trong nhóm chat.", illus: "stethoscope" } ] },
      lines: [
        L("l1", "det", "Getting better after drinking it doesn't mean getting better because of it.", "Khỏi sau khi uống chưa chắc là khỏi vì uống."),
        L("l2", "det", "Really worried about your health? Ask a doctor or pharmacist, not the group chat.", "Thật sự lo về sức khoẻ? Hỏi bác sĩ hoặc dược sĩ, đừng dựa vào lời kể trong nhóm chat."),
      ] },

    // ── Chương 4: Một chuyện thành công (p12–p14)
    { id: "s14", module: "HOST-03", data: { n: 4, of: 7, title: "Một chuyện thành công" },
      lines: [L("l1", "det", "Part four: is one success story enough to copy?", "Phần bốn: một câu chuyện thành công có đủ để làm theo?")] },
    { id: "s15", module: "TEXT-04", ref: "p12",
      data: { text: "Nhìn rộng hơn: người không làm vậy thì sao, và trong thời gian đó còn thay đổi gì?", marks: ["còn thay đổi gì"], illus: "magnifying-glass-tilted-left" },
      lines: [
        L("l1", null, "Not enough. One case doesn't show what else happened at the same time.", "Chưa đủ. Một trường hợp không cho thấy điều gì khác đã xảy ra cùng lúc."),
        L("l2", null, "Look wider: what about people who didn't do it? And what else changed?", "Nhìn rộng hơn: những người không làm vậy thì sao, và trong thời gian đó còn thay đổi gì?"),
      ] },
    { id: "s16", module: "BEAT-04", ref: "p13",
      data: { seconds: 5, prompt: "Con nhà hàng xóm học thêm ở một trung tâm và lên điểm rõ. Bạn có nên đóng tiền cả khoá cho con mình ngay?" },
      lines: [
        L("l1", null, "The neighbour's child took extra classes at a centre, and their marks went up clearly.", "Con nhà hàng xóm học thêm ở một trung tâm và lên điểm rõ."),
        L("l2", null, "Should you pay for a full course for your own child right away?", "Bạn có nên đóng tiền cả khoá ở trung tâm đó cho con mình ngay không?"),
      ] },
    { id: "s17", module: "REL-12", ref: "p13,p14",
      data: { center: { label: "Điểm tăng rõ", illus: "chart-increasing" }, spokes: [
        { label: "Học thêm ở trung tâm", illus: "school" },
        { label: "Được đổi chỗ ngồi", illus: "chair" },
        { label: "Cô chủ nhiệm kèm thêm", illus: "woman-teacher" },
        { label: "Tự có động lực vì sắp thi", illus: "fire" } ] },
      lines: [
        L("l1", null, "Not yet. That term, the child also got a new seat…", "Chưa nên. Học kỳ đó bé cũng được đổi chỗ ngồi…"),
        L("l2", null, "…extra help from the homeroom teacher, and motivation from coming exams.", "…được cô chủ nhiệm kèm thêm, và tự có động lực vì sắp thi."),
        L("l3", null, "At least three other changes, so nobody knows how much the centre helped.", "Ít nhất ba thay đổi khác, nên không biết trung tâm góp bao nhiêu phần."),
        L("l4", null, "Ask other parents, or try a short trial and compare marks. One success isn't evidence.", "Hỏi thêm vài phụ huynh, hoặc cho học thử ngắn rồi so điểm. Một chuyện thành công chưa phải bằng chứng."),
      ] },

    // ── Chương 5: Đổ cho người có mặt (p15–p17)
    { id: "s18", module: "HOST-03", data: { n: 5, of: 7, title: "Đổ cho người có mặt?" },
      lines: [L("l1", "det", "Part five: blaming whoever was there.", "Phần năm: có chuyện không hay, có nên đổ cho người có mặt lúc đó?")] },
    { id: "s19", module: "TEXT-04", ref: "p15",
      data: { text: "Sự cố có xảy ra ở ca khác, với người khác, lúc khác không?", marks: ["ca khác", "người khác", "lúc khác"], illus: "spiral-calendar" },
      lines: [
        L("l1", null, "We often blame the person or thing right before a problem.", "Ta hay đổ lỗi cho người hay việc xảy ra ngay trước sự cố."),
        L("l2", null, "Ask: did it happen on other shifts, with other people, at other times?", "Hãy hỏi: sự cố có xảy ra ở ca khác, với người khác, lúc khác không?"),
      ] },
    { id: "s20", module: "SCENE-01", ref: "p16,p17",
      data: { set: "shop", label: "Xem lại sổ",
        actors: [{ id: "binh", side: "left" }, { id: "dung", side: "right", pose: "hold" }], props: ["printer"] },
      lines: [
        L("l1", null, "Back to the shop. Bác Bình checks his records.", "Quay lại tiệm. Bác Bình xem lại sổ."),
        L("l2", "binh", "Last week there were wrong orders too. The labels were faded from a broken printer roll.", "Tuần trước cũng có đơn nhầm. Nhãn in mờ, do cuộn giấy in hỏng.", { face: "surprised", pose: "think" }),
        L("l3", null, "A new roll, no more wrong orders. And Dũng keeps his job.", "Thay cuộn giấy, đơn nhầm hết hẳn. Và Dũng vẫn làm tiếp.", { react: { dung: "happy", binh: "happy" } }),
        L("l4", "det", "Being there when it happened doesn't make you the cause.", "Có mặt lúc sự cố chưa chắc là nguyên nhân."),
      ] },

    // ── Chương 6: Tự kiểm tra một nguyên nhân (p18–p20)
    { id: "s21", module: "HOST-03", data: { n: 6, of: 7, title: "Tự kiểm tra một nguyên nhân" },
      lines: [L("l1", "det", "Part six: checking a cause yourself.", "Phần sáu: tự kiểm tra một nguyên nhân thế nào?")] },
    { id: "s22", module: "LIST-05", ref: "p18",
      data: { title: "Danh sách kiểm tra", illus: "detective",
        items: ["Viết rõ: “A gây ra B”", "B thay đổi sau A, hay từ trước?", "Cùng lúc còn gì thay đổi? B gây ra A?", "Nơi không có A thì sao? Theo dõi đủ lâu chưa?"] },
      lines: [
        L("l1", null, "Write the claim clearly: A causes B.", "Viết rõ nhận định: “A gây ra B”."),
        L("l2", null, "Did B change after A, or before it?", "B có thay đổi sau A, hay đã thay đổi từ trước?"),
        L("l3", null, "What else changed then: weather, holidays, a sale, a new person? Could B cause A?", "Cùng lúc còn thay đổi gì: thời tiết, ngày lễ, giảm giá, người mới? Có thể B gây ra A không?"),
        L("l4", null, "Where there's no A, does B change the same way? Have you watched long enough?", "Nơi không có A thì B có thay đổi tương tự không? Đã theo dõi đủ lâu chưa?"),
      ] },
    { id: "s23", module: "LIST-13", ref: "p19,p20",
      data: { title: "Hai điều nên nhớ", items: [
        { title: "Có nhóm so sánh", detail: "Thử thay đổi ở một chỗ, giữ nguyên ở chỗ tương tự, rồi so.", illus: "balance-scale" },
        { title: "Cẩn thận bên có lợi", detail: "Người bán sản phẩm, trung tâm học thêm không phải người đánh giá trung lập.", illus: "money-bag" } ] },
      lines: [
        L("l1", null, "The strongest way is a comparison group. Change one place, keep a similar place the same, then compare.", "Cách mạnh nhất là có nhóm so sánh: thay đổi ở một chỗ, giữ nguyên ở chỗ tương tự, rồi so."),
        L("l2", null, "Without a comparison, it's hard to separate the real effect from other factors.", "Không có điểm so sánh thì khó tách tác động thật khỏi các yếu tố khác."),
        L("l3", null, "And be careful asking the side that benefits. A seller or a tutoring centre isn't neutral.", "Hỏi nguyên nhân từ bên có lợi cũng cần cẩn thận: người bán hay trung tâm học thêm không trung lập."),
      ] },

    // ── Chương 7: Nói kết luận đúng mức (p21–p22)
    { id: "s24", module: "HOST-03", data: { n: 7, of: 7, title: "Nói kết luận cho đúng mức" },
      lines: [L("l1", "det", "Part seven: stating a cause at the right strength.", "Phần bảy: nói kết luận về nguyên nhân thế nào cho đúng mức?")] },
    { id: "s25", module: "LIST-09", ref: "p21",
      data: { title: "Từ thận trọng khi bằng chứng chưa đủ", illus: "speech-balloon", keywords: [
        { text: "Có thể liên quan", illus: "link" },
        { text: "Kết quả ban đầu cho thấy", illus: "seedling" },
        { text: "Cần theo dõi thêm", illus: "eyes" },
        { text: "“Chắc chắn do”: khi đã loại các khả năng khác", illus: "check-mark-button" } ] },
      lines: [
        L("l1", null, "When evidence isn't enough, use careful words: may be related, early results suggest, needs more follow-up.", "Bằng chứng chưa đủ thì dùng từ thận trọng: “có thể liên quan”, “kết quả ban đầu cho thấy”, “cần theo dõi thêm”."),
        L("l2", null, "Only say definitely caused by when you've ruled out the other possibilities.", "Chỉ nói “chắc chắn do” khi đã loại được các khả năng khác."),
      ] },
    { id: "s26", module: "CMP-01", ref: "p22",
      data: { labels: ["Tiêu đề viết", "Trong bài thật ra ghi"], left: "“A giúp B”, như thể nhân quả", right: "Chỉ “liên quan”, “đi cùng”, không phải “gây ra”",
        illus: ["newspaper", "magnifying-glass-tilted-left"] },
      lines: [
        L("l1", null, "Reading A helps B in a headline? Look inside for related, goes with, or causes.", "Đọc tiêu đề “A giúp B”? Tìm trong bài chữ “liên quan”, “đi cùng” hay “gây ra”."),
        L("l2", null, "Many articles only report a link, but the headline is written like a cause.", "Nhiều bài chỉ ghi nhận liên quan, nhưng tiêu đề lại viết như nhân quả."),
      ] },

    // ── Câu đố và kết
    { id: "s27", module: "QUIZ-01", ref: "questions[7]",
      data: {
        q: "What might happen if you stop napping just because of that headline?",
        options: [
          "Nothing at all can change, because naps never affect how people feel",
          "You may feel very tired every afternoon while your health does not improve",
          "You will surely become much healthier, which proves the headline was right",
        ],
        correct: 1, countdown: 5, illus: "sleeping-face",
        why: "Bỏ giấc trưa vì kết luận vội, có khi chỉ mệt thêm mỗi chiều.",
      },
      lines: [
        L("l1", null, "What might happen if you stop napping just because of that headline?", "Điều gì có thể xảy ra nếu bạn bỏ ngủ trưa chỉ vì tiêu đề đó?"),
        L("l2", null, "You may feel very tired every afternoon while your health does not improve.", "Bạn có thể mệt rã rời mỗi chiều mà sức khoẻ không khá hơn."),
        L("l3", null, "That's the cost of trusting a headline without reading closely.", "Đó là cái giá của việc tin tiêu đề mà không đọc kỹ."),
      ] },
    { id: "s28", module: "END-02", ref: "p7,p10,p17",
      data: { kicker: "Rút ra", illus: "light-bulb",
        points: ["Thấy “A gây ra B”, hỏi “hay B gây ra A?”", "Khỏi sau khi uống chưa chắc vì uống", "Có mặt lúc sự cố chưa chắc là nguyên nhân"],
        icons: ["counterclockwise-arrows-button", "teacup-without-handle", "bust-in-silhouette"] },
      lines: [
        L("l1", null, "Or the other way around?", "Hay ngược lại?"),
        L("l2", null, "What else changed?", "Còn gì khác thay đổi?"),
        L("l3", null, "And what if we didn't do it? Today, find one A helps B headline, and look for a third factor.", "Nếu không làm thì sao? Hôm nay, tìm một tiêu đề “A giúp B” và hỏi có yếu tố thứ ba không."),
      ] },
    { id: "s29", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Hay ngược lại?" },
      lines: [L("l1", "det", "Before you conclude, try the forty questions below.", "Trước khi kết luận, thử bốn mươi câu hỏi bên dưới nhé.")] },
  ],
};
