// Kịch bản video W lần 3 (#110) — "Cách khen và ghi nhận đóng góp của thành viên trong nhóm" · chuỗi "Làm thành viên tốt trong nhóm"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "how-to-recognise-team-members-contributions--w01",
  hook: "HOOK-13",
  loop: { open: "s01", close: "s24" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "team-members", slug: "how-to-recognise-team-members-contributions", door: "ky-nang", level: "B1",
    title: "Cách khen và ghi nhận đóng góp của thành viên trong nhóm", series: "Làm thành viên tốt trong nhóm" },
  format: "W", mode: "text", audio: {},
  notes: "Phủ ý: 22/22. Đổi tên: Vinh → Dũng; Lành → Lan; thầy (p18) → Bác Bình (chỉ nói câu khen có trong bài); Toản (p10) → Thảo; Hằng (p10) → Lan; Minh (p14) → Dũng; Nguyệt (p14) → Lan. Ví dụ công thức p4 (“Cảm ơn Lành…”) và câu chuyển lời khen p17 đổi thành Lan. Trước – sau p6 (Tuyết, Nhi) dùng trên thẻ, không nêu tên. Vai mới (Bin, Bà Tư, Sam): không dùng, bài không có trẻ con, bà cụ hay người nước ngoài. Hai cảnh DLG-01: s15 (p9–p10, khen kèm “nhưng”; phần làm lại chỉ giữ câu khen của bài, góp ý để lúc khác) và s24 (p17–p18, đóng chuyện mở đầu). s19: câu hỏi mẫu p13 do Dũng hỏi Lan; câu trả lời của Lan không có trong bài nên Lan chỉ đổi nét mặt. s20 (SCENE-03): câu khen to của Dũng là câu của Minh trong p14; câu nhắn riêng ở Cách B là lời dựng ngắn cho ý “nhắn riêng cảm ơn về phần khảo sát”. Không dùng câu đố có tên “Lanh”; dùng questions[11], questions[3]. Danh sách ☐ p22 có sáu mục, END-03 tối đa năm nên gộp “khen trong một hai ngày” với “không kèm nhưng”.",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "p18",
      data: { set: "meeting", label: "Buổi thuyết trình",
        actors: [{ id: "binh", side: "left", pose: "hold" }, { id: "dung", side: "center" }, { id: "lan", side: "right", face: "neutral" }] },
      lines: [
        L("l1", "binh", "This data analysis is very clear and solid.", "Phần phân tích số liệu này rõ ràng, chắc chắn.", { face: "happy" }),
        L("l2", "dung", "Thank you, sir!", "Dạ, em cảm ơn thầy!", { face: "happy", pose: "thumb", to: "binh" }),
        L("l3", null, "Look at Lan. She did this analysis all week.", "Nhìn Lan: chính Lan làm phần này cả tuần.", { react: { lan: "sad" } }),
        L("l4", null, "She says nothing. From then on, she sends only her assigned part.", "Lan không nói gì. Từ đó, Lan chỉ gửi đúng phần được giao."),
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Ghi nhận đúng người", pose: "present",
        items: ["Ai, làm gì, giúp được gì", "Khen sớm, không kèm “nhưng”", "Đúng cách người ấy thích", "Nhắc tên khi báo cáo"] },
      lines: [
        L("l1", "det", "How do you recognise a teammate, so they feel truly seen?", "Ghi nhận đóng góp thế nào để người ấy thấy mình được nhìn thấy?"),
        L("l2", "det", "Say who did what, and how it helped.", "Nói rõ ai, làm gì, giúp được gì."),
        L("l3", "det", "Say it early, with no “but”.", "Khen sớm, không kèm “nhưng”."),
        L("l4", "det", "In the way they like.", "Đúng cách người ấy thích."),
        L("l5", "det", "And name them when you report.", "Và nhắc tên họ khi báo cáo."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Sáu phần của video", chapters: [
        { label: "Lời ghi nhận thay đổi gì", illus: "sparkles" },
        { label: "Khen cho cụ thể", illus: "bullseye" },
        { label: "Lúc nào, đừng kèm gì", illus: "alarm-clock" },
        { label: "Trước nhóm hay riêng", illus: "busts-in-silhouette" },
        { label: "Ghi công khi báo cáo", illus: "memo" },
        { label: "Việc không ai thấy", illus: "eyes" } ] },
      lines: [
        L("l1", null, "Six parts: why it matters, being specific, timing,", "Sáu phần: vì sao quan trọng, khen cụ thể, khen lúc nào,"),
        L("l2", null, "public or private, credit in reports, and hidden work.", "trước nhóm hay riêng, ghi công khi báo cáo, và việc không ai thấy."),
      ] },

    // ---------- Phần 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Một lời ghi nhận đổi được gì?" },
      lines: [L("l1", "det", "Part one: what can one thank you change?", "Phần một: một lời ghi nhận thì thay đổi được gì?")] },
    { id: "s05", module: "REL-02", ref: "p1",
      data: { chain: ["Mỗi người gánh một phần lớn", "Công sức không ai nhìn thấy", "“Làm thêm cũng vậy thôi”", "Chỉ làm phần tối thiểu"],
        illus: ["person-lifting-weights", "see-no-evil-monkey", "person-shrugging", "turtle"] },
      lines: [
        L("l1", null, "In a small group, each person carries a big share.", "Trong nhóm nhỏ, mỗi người gánh một phần lớn của kết quả chung."),
        L("l2", null, "When nobody notices the effort,", "Khi công sức không ai nhìn thấy,"),
        L("l3", null, "people think: extra work changes nothing,", "người ta dần nghĩ “làm thêm cũng vậy thôi”,"),
        L("l4", null, "and do only the minimum.", "và chỉ làm đúng phần tối thiểu."),
      ] },
    { id: "s06", module: "LIST-07", ref: "p2",
      data: { title: "Một lời ghi nhận đúng lúc", items: [
        { text: "Người ấy biết công sức có ý nghĩa", illus: "sparkling-heart" },
        { text: "Cả nhóm biết thế nào là làm tốt", illus: "trophy" },
        { text: "Nhóm thấy được đối xử công bằng", illus: "balance-scale" } ] },
      lines: [
        L("l1", null, "A timely thank you tells them their effort matters.", "Lời ghi nhận đúng lúc cho người ấy biết công sức có ý nghĩa."),
        L("l2", null, "It shows everyone what good work looks like.", "Cho cả nhóm biết thế nào là làm tốt."),
        L("l3", null, "And it shows the group it's treated fairly. No gifts needed.", "Và cho nhóm thấy mình được đối xử công bằng. Không cần quà."),
      ] },
    { id: "s07", module: "HOST-02", ref: "p3",
      data: { statement: "Ghi nhận đóng góp là việc riêng của nhóm trưởng", truth: false,
        why: "Bạn cùng nhóm cảm ơn nhau còn có sức nặng hơn, vì hiểu rõ việc khó đến đâu." },
      lines: [
        L("l1", "det", "Recognising work is only the leader's job. True or false?", "Ghi nhận đóng góp là việc riêng của nhóm trưởng. Đúng hay sai?"),
        L("l2", "det", "False. Thanks from a teammate can mean more. They know how hard it was.", "Sai. Lời cảm ơn của người làm cùng còn nặng hơn, vì họ hiểu việc khó đến đâu.", { face: "wink" }),
      ] },

    // ---------- Phần 2 ----------
    { id: "s08", module: "HOST-03", data: { n: 2, of: 6, title: "Khen cho cụ thể" },
      lines: [L("l1", "det", "Part two: praise that makes people feel seen.", "Phần hai: khen thế nào để người nghe thấy mình được nhìn thấy?")] },
    { id: "s09", module: "LIST-07", ref: "p4",
      data: { title: "Công thức ba phần", items: [
        { text: "Ai", illus: "bust-in-silhouette" },
        { text: "Đã làm gì", illus: "telephone-receiver" },
        { text: "Giúp được gì", illus: "check-mark-button" } ] },
      lines: [
        L("l1", null, "Three parts: who, what they did, how it helped.", "Ba phần: ai, đã làm gì, giúp được gì."),
        L("l2", null, "Thanks, Lan, for calling everyone who hadn't answered the survey.", "Cảm ơn Lan đã gọi lại cho từng bạn chưa trả lời khảo sát,"),
        L("l3", null, "Because of that, we got enough replies before the deadline.", "nhờ vậy nhóm đủ số phiếu trước hạn."),
      ] },
    { id: "s10", module: "CMP-01", ref: "p5",
      data: { labels: ["Khen tính cách", "Khen hành động"], left: "“Bạn giỏi quá”", right: "“Bạn kiểm tra lại từng số liệu trước khi gửi”", illus: ["star-struck", "magnifying-glass-tilted-left"] },
      lines: [
        L("l1", null, "Praise actions, not only personality.", "Khen hành động, không chỉ khen tính cách."),
        L("l2", null, "You're so smart: nice, but nothing to repeat.", "“Bạn giỏi quá” nghe vui, nhưng không nói điều gì đáng lặp lại."),
        L("l3", null, "You checked every number before sending: now everyone knows what to do.", "“Bạn kiểm tra lại từng số liệu trước khi gửi”: cả nhóm biết việc nên làm."),
      ] },
    { id: "s11", module: "CMP-02", ref: "p6",
      data: { title: "Tin nhắn cảm ơn cuối dự án",
        before: "“Cảm ơn cả nhóm, ai cũng giỏi hết, yêu mọi người!”",
        after: "“Cảm ơn bạn đã xử lý toàn bộ số liệu khảo sát ba tuần, nhờ vậy kết quả mới chắc.”",
        illusBefore: "busts-in-silhouette", illusAfter: "bar-chart" },
      lines: [
        L("l1", null, "Before: Thanks, everyone, you're all great!", "Trước: “Cảm ơn cả nhóm, ai cũng giỏi hết!”"),
        L("l2", null, "Three weeks of data get the same thanks as one page of comments.", "Ba tuần làm số liệu được cảm ơn y như góp ý một trang. Dễ hụt hẫng."),
        L("l3", null, "After: one line for each person, saying what they did.", "Sau: thêm một dòng riêng cho từng người, nói rõ họ đã làm gì."),
      ] },
    { id: "s12", module: "TEXT-02", ref: "p7",
      data: { text: "Cảm ơn chung thì ai cũng như nhau, cảm ơn cụ thể mới thấy đúng người.", keywords: ["cảm ơn cụ thể", "đúng người"], illus: "bullseye" },
      lines: [L("l1", null, "General thanks make everyone equal. Specific thanks find the right person.", "Cảm ơn chung thì ai cũng như nhau, cảm ơn cụ thể mới thấy đúng người.")] },

    // ---------- Phần 3 ----------
    { id: "s13", module: "HOST-03", data: { n: 3, of: 6, title: "Khen lúc nào, đừng kèm gì?" },
      lines: [L("l1", "det", "Part three: when to praise, and what not to add.", "Phần ba: nên khen lúc nào, và đừng kèm theo điều gì?")] },
    { id: "s14", module: "TEXT-04", ref: "p8",
      data: { text: "Khen sớm, trong vòng một hai ngày sau sự việc.", marks: ["một hai ngày"], illus: "alarm-clock" },
      lines: [
        L("l1", null, "Praise early, within a day or two.", "Khen sớm, trong vòng một hai ngày sau sự việc."),
        L("l2", null, "Wait until the end, and it fades. They barely remember what they did.", "Để đến cuối dự án, lời khen nhạt đi, người được khen cũng không nhớ rõ."),
      ] },
    { id: "s15", module: "DLG-01", ref: "p9,p10",
      data: { set: "campus", label: "Xem slide",
        actors: [{ id: "thao", side: "farleft" }, { id: "lan", side: "right" }],
        verdict: { ok: false, label: "Khen kèm “nhưng”",
          why: "Người nghe chỉ nhớ phần sau “nhưng”: sửa cả đêm, nghĩ mình bị chê." } },
      lines: [
        L("l1", "thao", "Your slides look great, but the text is a bit small,", "Slide đẹp lắm, nhưng chữ hơi nhỏ,", { pose: "explain", to: "lan" }),
        L("l2", "thao", "the colours are a bit dark, and the end is a bit long.", "màu hơi tối, phần cuối hơi dài.", { pose: "explain", stop: true, react: { lan: "sad" } }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Lan fixed it all night, and felt criticised. Thảo thought she had praised first.", "Lan sửa cả đêm, thấy bị chê quá trời. Thảo thì nghĩ mình đã khen trước."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "thao", "Your slides look great.", "Slide đẹp lắm.", { phase: "redo", face: "happy", pose: "thumb", react: { lan: "happy" } }),
        L("l7", "det", "Praise is praise. The feedback waits for another time.", "Khen là khen, góp ý để lúc khác.", { phase: "redo", face: "happy" }),
      ] },
    { id: "s16", module: "TEXT-01", ref: "p11",
      data: { text: "Khen là khen, góp ý để lúc khác.", illus: "speech-balloon" },
      lines: [L("l1", null, "Two separate moments, so both are really heard.", "Tách hai lúc khác nhau, để cả lời khen lẫn góp ý đều được nghe.")] },

    // ---------- Phần 4 ----------
    { id: "s17", module: "HOST-03", data: { n: 4, of: 6, title: "Khen trước nhóm hay nói riêng?" },
      lines: [L("l1", "det", "Part four: in front of the group, or in private?", "Phần bốn: khen trước nhóm hay nói riêng?")] },
    { id: "s18", module: "HOST-02", ref: "p12",
      data: { statement: "Ai cũng thích được khen trước đông người", truth: false,
        why: "Có người vui khi được nhắc tên; có người ngại, sợ bị trêu hay bị nghĩ là “được ưu ái”." },
      lines: [
        L("l1", "det", "Everyone likes praise in front of others. True or false?", "Ai cũng thích được khen trước đông người. Đúng hay sai?"),
        L("l2", "det", "False. Some feel shy, or fear being teased or seen as a favourite.", "Sai. Có người ngại, sợ bị trêu hay bị nghĩ là “được ưu ái”.", { face: "wink" }),
      ] },
    { id: "s19", module: "SCENE-01", ref: "p13",
      data: { set: "campus", label: "Hỏi một lần",
        actors: [{ id: "dung", side: "center" }, { id: "lan", side: "right" }] },
      lines: [
        L("l1", null, "Watch how people react. Or ask once.", "Để ý cách từng người phản ứng, hoặc hỏi thẳng một lần."),
        L("l2", "dung", "When you do well, do you like it said in the group, or just to you?", "Khi bạn làm tốt, bạn thích được nhắc trước nhóm hay mình nói riêng?", { pose: "explain", to: "lan", react: { lan: "thinking" } }),
        L("l3", null, "Quiet people still need specific thanks, just by private message.", "Người kín đáo vẫn cần được ghi nhận cụ thể, chỉ là qua tin nhắn riêng."),
      ] },
    { id: "s20", module: "SCENE-03", ref: "p14",
      data: { set: "campus", actors: [{ id: "dung", side: "left" }, { id: "lan", side: "right" }],
        left: { label: "A: khen to trước lớp", ok: false }, right: { label: "B: nhắn riêng", ok: true } },
      lines: [
        L("a1", "dung", "Our group has Lan, the best! She did all the hard parts!", "Nhóm mình có Lan là nhất, làm hết phần khó!", { phase: "a", pose: "wave", face: "happy", react: { lan: "worried" } }),
        L("a2", null, "Other classes tease her. She blushes all day, and later avoids key tasks.", "Lớp khác trêu Lan là “con cưng của nhóm”. Lan đỏ mặt, lần sau ngại nhận phần quan trọng.", { phase: "a" }),
        L("b1", "dung", "Thanks for the survey part. It was really careful work.", "Cảm ơn Lan về phần khảo sát, làm kỹ lắm.", { phase: "b", pose: "phone", react: { lan: "happy" } }),
        L("b2", null, "A private message, then he names her work in the report to the teacher.", "Nhắn riêng, rồi nhắc công của Lan khi báo cáo với cô.", { phase: "b" }),
      ] },
    { id: "s21", module: "TEXT-01", ref: "p15",
      data: { text: "Khen đúng người còn phải đúng cách người ấy thích.", illus: "bullseye" },
      lines: [L("l1", null, "Praise the right person, in the way they like.", "Khen đúng người còn phải đúng cách người ấy thích.")] },

    // ---------- Phần 5 ----------
    { id: "s22", module: "HOST-03", data: { n: 5, of: 6, title: "Ghi công khi báo cáo" },
      lines: [L("l1", "det", "Part five: giving credit to teachers and managers.", "Phần năm: báo cáo với thầy cô, quản lý thì ghi công thế nào?")] },
    { id: "s23", module: "TEXT-04", ref: "p16",
      data: { text: "Khi báo cáo kết quả, hãy nêu tên người đã đóng góp phần nào.", marks: ["nêu tên"], illus: "memo" },
      lines: [
        L("l1", null, "When you report results, name who did which part.", "Khi báo cáo kết quả, nêu tên ai đóng góp phần nào."),
        L("l2", null, "They're seen at a higher level, and the report shows the real picture.", "Họ được nhìn thấy ở cấp cao hơn, và báo cáo cho thông tin thật về nhóm."),
      ] },
    { id: "s24", module: "DLG-01", ref: "p17,p18",
      data: { set: "meeting", label: "Tua lại buổi thuyết trình",
        actors: [{ id: "binh", side: "left", pose: "hold" }, { id: "dung", side: "center" }],
        verdict: { ok: false, label: "Nhận lời khen cho phần người khác làm",
          why: "Người làm cả tuần không được nhắc tên, thôi góp thêm ý; lòng tin của nhóm mất dần." } },
      lines: [
        L("l1", "binh", "This data analysis is very clear and solid.", "Phần phân tích số liệu này rõ ràng, chắc chắn.", { face: "happy" }),
        L("l2", "dung", "Thank you, sir!", "Dạ, em cảm ơn thầy!", { face: "happy", to: "binh", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Praised for a part you didn't do? Pass it to the right person, right then.", "Được khen phần không phải mình làm? Chuyển lời khen đúng người ngay lúc đó."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "dung", "Thank you, sir. This analysis was done by Lan.", "Dạ, phần phân tích này là bạn Lan làm ạ.", { phase: "redo", pose: "explain", face: "happy", react: { binh: "happy" } }),
        L("l7", "det", "One short line keeps the whole group's trust.", "Một câu ngắn giữ được lòng tin của cả nhóm.", { phase: "redo", face: "happy" }),
      ] },
    { id: "s25", module: "TEXT-02", ref: "p19",
      data: { text: "Được khen phần của ai, nhắc tên người ấy.", keywords: ["nhắc tên"], illus: "name-badge" },
      lines: [L("l1", null, "Praised for someone's part? Say their name. At work too.", "Được khen phần của ai, nhắc tên người ấy. Ở công ty cũng vậy.")] },

    // ---------- Phần 6 ----------
    { id: "s26", module: "HOST-03", data: { n: 6, of: 6, title: "Cả những việc không ai thấy" },
      lines: [L("l1", "det", "Last part: the work nobody sees.", "Phần cuối: ghi nhận cả những việc không ai thấy.")] },
    { id: "s27", module: "LIST-02", ref: "p20",
      data: { title: "Việc không hiện tên trên sản phẩm", items: [
        { illus: "puzzle-piece", text: "Ghép bài" }, { illus: "magnifying-glass-tilted-left", text: "Soát lỗi" },
        { illus: "telephone-receiver", text: "Liên lạc" }, { illus: "alarm-clock", text: "Nhắc lịch" } ], illus: "eyes" },
      lines: [
        L("l1", null, "Merging, checking errors, contacting people, reminders.", "Ghép bài, soát lỗi, liên lạc, nhắc lịch."),
        L("l2", null, "Their names rarely appear on the final work.", "Những việc này thường không hiện tên trên sản phẩm cuối."),
        L("l3", null, "Before thanking, ask: who did a lot this week but wasn't mentioned?", "Trước khi cảm ơn, tự hỏi: “Tuần này ai làm nhiều mà chưa được nhắc?”"),
      ] },
    { id: "s28", module: "CMP-01", ref: "p21",
      data: { labels: ["Ai cũng điểm như nhau", "Chấm theo đóng góp thật"], left: "Cho êm, nhưng bất công với người làm nhiều", right: "Dựa trên bảng việc và ghi chép của nhóm", illus: ["face-with-diagonal-mouth", "clipboard"] },
      lines: [
        L("l1", null, "When you grade each other, grade real contribution.", "Khi chấm điểm thành viên, chấm theo đóng góp thật."),
        L("l2", null, "Use the task list and the group's notes.", "Dựa trên bảng việc và ghi chép của nhóm."),
        L("l3", null, "Equal grades to keep the peace are unfair to those who did more.", "Ai cũng điểm như nhau cho êm là bất công với người làm nhiều."),
      ] },
    { id: "s29", module: "END-03", ref: "p22",
      data: { title: "Trước khi cảm ơn", illus: "clipboard", items: [
        "Ai, làm gì, giúp được gì", "Khen trong một hai ngày, không kèm “nhưng”", "Hỏi người đó thích công khai hay riêng",
        "Nhắc tên người đóng góp khi báo cáo", "Tìm một việc không ai thấy để ghi nhận" ] },
      lines: [
        L("l1", null, "Who, what, and how it helped.", "Ai, làm gì, giúp được gì."),
        L("l2", null, "Within a day or two, with no but.", "Trong một hai ngày, không kèm “nhưng”."),
        L("l3", null, "Public or private: ask.", "Hỏi người ấy thích công khai hay riêng."),
        L("l4", null, "Name contributors in reports.", "Nhắc tên người đóng góp khi báo cáo."),
        L("l5", null, "Find one hidden job to thank.", "Tìm một việc không ai thấy để ghi nhận."),
      ] },

    // ---------- Câu đố + kết ----------
    { id: "s30", module: "QUIZ-01", ref: "questions[11]",
      data: { q: "Why should you avoid adding but to your praise?",
        options: [
          "But is a rude word that should never be used with teammates",
          "People remember only the part after but, so the praise disappears",
          "Praise with but always takes too long to read in a chat",
        ],
        correct: 1, countdown: 5, illus: "speech-balloon",
        why: "Phần sau “nhưng” lấn át lời khen. Khen là khen, góp ý để lúc khác." },
      lines: [
        L("l1", null, "Why should you avoid adding but to your praise?", "Vì sao nên tránh thêm chữ “nhưng” vào lời khen?"),
        L("l2", null, "People remember only the part after but, so the praise disappears.", "Người nghe chỉ nhớ phần sau “nhưng”, lời khen biến mất."),
        L("l3", null, "Separate praise and feedback, so both work.", "Tách khen và góp ý thành hai lúc để cả hai có tác dụng."),
      ] },
    { id: "s31", module: "QUIZ-01", ref: "questions[3]",
      data: { q: "What three parts make a good thank you?",
        options: [
          "The date, the time, and the name of the project",
          "Who it is for, what they did, and how it helped",
          "A big smile, a nice emoji, and a short joke about the project",
        ],
        correct: 1, countdown: 5, illus: "check-mark-button",
        why: "Ai, làm gì, giúp được gì: ngắn mà rõ." },
      lines: [
        L("l1", null, "What three parts make a good thank you?", "Một lời cảm ơn tốt gồm ba phần nào?"),
        L("l2", null, "Who it is for, what they did, and how it helped.", "Cho ai, họ đã làm gì, và việc đó giúp được gì."),
        L("l3", null, "One or two sentences like this beat a lot of general praise.", "Một hai câu theo công thức này đáng giá hơn nhiều lời khen chung."),
      ] },
    { id: "s32", module: "END-05", data: { text: "Bốn mươi câu để ghi nhận đúng người", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [
        L("l1", "det", "Today, send one teammate a thank you: who, what, and how it helped.", "Hôm nay, nhắn một bạn cùng nhóm lời cảm ơn: ai, làm gì, giúp được gì."),
        L("l2", "det", "Then try the forty questions below.", "Rồi thử bốn mươi câu hỏi bên dưới nhé."),
      ] },
  ],
};
