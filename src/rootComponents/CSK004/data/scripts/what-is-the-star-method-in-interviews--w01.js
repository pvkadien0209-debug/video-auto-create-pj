// Kịch bản video W lần 3 (#110) — "Phương pháp STAR là gì? Cách dùng khi trả lời phỏng vấn" · chuỗi "Chuẩn bị phỏng vấn xin việc"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "what-is-the-star-method-in-interviews--w01",
  hook: "HOOK-09",
  loop: { open: "s01", close: "s32" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "job-seekers", slug: "what-is-the-star-method-in-interviews", door: "ky-nang", level: "B1",
    title: "Phương pháp STAR là gì? Cách dùng khi trả lời phỏng vấn", series: "Chuẩn bị phỏng vấn xin việc" },
  format: "W", mode: "text", audio: {},
  notes: "Phủ ý: 26/26. Đổi tên: Khải → Dũng; người phỏng vấn → Bác Bình (chỉ nói các câu hỏi có trong bài và câu ngắt lời “Vậy cụ thể anh đã làm gì?”); “bạn” ở Trước – sau p9 và chuyện sai lầm p18, p20 → Thảo; người bán hàng ở câu trả lời mẫu p11–p12 → Dũng. Vai mới: Sam (s32) là người phỏng vấn bằng tiếng Anh ở p26, chỉ hỏi một câu hỏi hành vi mẫu của p3 (“làm việc dưới áp lực thời gian”); Dũng đọc bốn câu chuyển ý tiếng Anh của p26. Không dùng Bin, Bà Tư. Câu treo ở s01 (“cụ thể đã làm gì?”) được trả lời ở chương 2: hành động chiếm phần lớn, nói “em”. Bản sau ở s12 (DLG-01) theo bài đã sửa (#107): có phần kết quả “hơn hai mươi doanh nghiệp xác nhận”. Lời kể của Dũng ở s01 rút gọn từ p7. Hai cảnh DLG-01: s12 (p9) và s23 (p20; phần làm lại dùng câu chuyện mẫu p18). Bài có 7 mục; video gộp mục 1 (là gì) với mục 2 (dùng khi nào) để mục lục còn 6 phần. Câu đố: questions[7], questions[3] (không có tên nhân vật).",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "p7",
      data: { set: "meeting", label: "Câu hỏi “kể một lần”",
        actors: [{ id: "dung", side: "left" }, { id: "binh", side: "right", pose: "hold" }] },
      lines: [
        L("l1", "binh", "Tell me about a time you handled a late project.", "Kể về một lần anh xử lý dự án trễ hạn.", { pose: "explain" }),
        L("l2", "dung", "Well, my old company was short of staff, the client was difficult, the boss kept changing his mind...", "Dạ, công ty cũ thiếu người, khách khó tính, sếp đổi ý mấy lần…", { pose: "explain" }),
        L("l3", null, "Almost two minutes later...", "Gần hai phút sau…"),
        L("l4", "binh", "So what exactly did you do?", "Vậy cụ thể anh đã làm gì?", { face: "thinking", react: { dung: "surprised" } }),
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Phương pháp STAR", pose: "present",
        items: ["Tình huống", "Nhiệm vụ", "Hành động", "Kết quả"] },
      lines: [
        L("l1", "det", "How do you answer “tell me about a time” without getting lost? Use STAR.", "Trả lời câu “kể một lần” thế nào cho khỏi lan man? Dùng STAR."),
        L("l2", "det", "Situation.", "Tình huống."),
        L("l3", "det", "Task.", "Nhiệm vụ."),
        L("l4", "det", "Action.", "Hành động."),
        L("l5", "det", "Result. And five to eight true stories, ready.", "Kết quả. Và năm đến tám chuyện thật, chuẩn bị sẵn."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Sáu phần của video", chapters: [
        { label: "STAR là gì, dùng khi nào", illus: "star" },
        { label: "Bốn phần nói bao nhiêu", illus: "stopwatch" },
        { label: "Một câu trả lời mẫu", illus: "speech-balloon" },
        { label: "Kho câu chuyện", illus: "card-file-box" },
        { label: "Kể chuyện thất bại", illus: "adhesive-bandage" },
        { label: "Lỗi hay gặp trong phòng", illus: "warning" } ] },
      lines: [
        L("l1", null, "Six parts: what STAR is, how long each part, a full sample,", "Sáu phần: STAR là gì, mỗi phần bao lâu, một câu trả lời mẫu,"),
        L("l2", null, "your story bank, failure stories, and common mistakes.", "kho câu chuyện, kể chuyện thất bại, và những lỗi hay gặp."),
      ] },

    // ---------- Phần 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "STAR là gì, dùng khi nào?" },
      lines: [L("l1", "det", "Part one: what STAR is, and when to use it.", "Phần một: STAR là gì, và câu hỏi nào thì cần dùng?")] },
    { id: "s05", module: "LIST-03", ref: "p1",
      data: { title: "Bốn chữ của STAR", items: [
        { front: "Situation", back: "Tình huống", illus: "round-pushpin", backIllus: "office-building" },
        { front: "Task", back: "Nhiệm vụ", illus: "memo", backIllus: "clipboard" },
        { front: "Action", back: "Hành động", illus: "flexed-biceps", backIllus: "hammer-and-wrench" },
        { front: "Result", back: "Kết quả", illus: "trophy", backIllus: "chart-increasing" } ] },
      lines: [
        L("l1", null, "Situation: what was happening.", "Situation: tình huống."),
        L("l2", null, "Task: what you had to do.", "Task: nhiệm vụ."),
        L("l3", null, "Action: what you did.", "Action: hành động."),
        L("l4", null, "Result: what came of it. Not a trick for making up stories: it orders a true one.", "Result: kết quả. Không phải mẹo bịa chuyện, mà sắp một chuyện thật cho có đầu có cuối."),
      ] },
    { id: "s06", module: "TEXT-04", ref: "p2",
      data: { text: "Cách bạn đã xử lý việc trong quá khứ là gợi ý tốt về cách bạn sẽ làm sau này.", marks: ["trong quá khứ"], illus: "crystal-ball" },
      lines: [
        L("l1", null, "Employers believe how you handled things before shows how you'll work later.", "Nhà tuyển dụng tin cách bạn đã xử lý việc là gợi ý về cách bạn sẽ làm sau này."),
        L("l2", null, "STAR gives that proof neatly, not rambling or self-praise.", "STAR đưa bằng chứng đó gọn gàng, thay vì kể lan man hay chỉ tự khen."),
      ] },
    { id: "s07", module: "CMP-01", ref: "p3,p4",
      data: { labels: ["Câu hỏi hành vi: dùng STAR", "Câu kiến thức, thông tin: trả lời thẳng"], left: "“Kể về một lần…”, “Cho tôi một ví dụ…”", right: "“Hàm này trong bảng tính dùng để làm gì?”, “Khi nào bạn có thể bắt đầu?”", illus: ["speech-balloon", "information"] },
      lines: [
        L("l1", null, "Behavioural questions ask for a real example: a time you disagreed with a colleague.", "Câu hỏi hành vi đòi ví dụ thật: một lần bạn bất đồng với đồng nghiệp."),
        L("l2", null, "Or worked under time pressure. Or made a mistake. Listen for: tell me about a time.", "Làm việc dưới áp lực thời gian. Từng mắc lỗi. Dấu hiệu: “kể về một lần”, “cho tôi một ví dụ”."),
        L("l3", null, "What does this spreadsheet function do? When can you start? Just answer.", "“Hàm này dùng để làm gì?”, “Khi nào bắt đầu được?”: trả lời thẳng, không cần kể chuyện."),
      ] },

    // ---------- Phần 2 ----------
    { id: "s08", module: "HOST-03", data: { n: 2, of: 6, title: "Bốn phần nói bao nhiêu?" },
      lines: [L("l1", "det", "Part two: how much for each part?", "Phần hai: bốn phần nói bao nhiêu là vừa?")] },
    { id: "s09", module: "NUM-05", ref: "p5",
      data: { percent: 50, illus: "flexed-biceps", label: "Hành động: khoảng một nửa thời gian trở lên",
        source: "MIT CAPD, Using the STAR method for your next behavioral interview" },
      lines: [
        L("l1", null, "One to two minutes in total. Situation and task: a few sentences.", "Cả câu trả lời một đến hai phút. Tình huống, nhiệm vụ chỉ vài câu."),
        L("l2", null, "Half the time or more: action.", "Một nửa thời gian trở lên: hành động."),
        L("l3", null, "Result: clear, specific, with what you learned.", "Kết quả: nói rõ, có chi tiết, kèm điều bạn rút ra."),
      ] },
    { id: "s10", module: "CMP-01", ref: "p6",
      data: { labels: ["“Chúng tôi đã xử lý”", "“Tôi gọi nhà cung cấp và đổi lại đơn”"], left: "Không rõ bạn làm gì", right: "Thấy rõ việc của bạn", illus: ["busts-in-silhouette", "bust-in-silhouette"] },
      lines: [
        L("l1", null, "In the action part, say I, not only we.", "Ở phần hành động, nói “tôi”, không chỉ “chúng tôi”."),
        L("l2", null, "I called the supplier and changed the order: much clearer than we handled it.", "“Tôi gọi nhà cung cấp và đổi lại đơn” rõ hơn hẳn “chúng tôi đã xử lý”."),
        L("l3", null, "They're hiring you, not your old team.", "Người phỏng vấn tuyển bạn, không tuyển cả nhóm cũ của bạn."),
      ] },
    { id: "s11", module: "TEXT-02", ref: "p8",
      data: { text: "Bối cảnh vài câu, hành động là chính.", keywords: ["vài câu", "hành động"], illus: "flexed-biceps" },
      lines: [
        L("l1", null, "That's Dũng's problem: two minutes of background, no time for actions or result.", "Đó là lỗi của Dũng: hai phút bối cảnh, chưa kịp nói hành động và kết quả."),
        L("l2", null, "Background in a few sentences. Action is the main part.", "Bối cảnh vài câu, hành động là chính."),
      ] },
    { id: "s12", module: "DLG-01", ref: "p9",
      data: { set: "meeting", label: "Thảo trả lời",
        actors: [{ id: "thao", side: "left" }, { id: "binh", side: "right", pose: "hold" }],
        verdict: { ok: false, label: "Kể việc của nhóm, không rõ việc của mình",
          why: "Nghe hay, nhưng người phỏng vấn không biết bạn đã làm gì." } },
      lines: [
        L("l1", "binh", "Tell me about a time you helped your team succeed.", "Kể về một lần bạn góp phần làm nên thành công của nhóm.", { pose: "explain" }),
        L("l2", "thao", "We organised a job fair. Everyone worked hard, and lots of companies came!", "Bọn em tổ chức ngày hội việc làm, cả nhóm làm rất chăm, rất đông doanh nghiệp đến!", { face: "happy", pose: "explain", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Sounds nice. But what did you do?", "Nghe hay. Nhưng bạn đã làm gì?"),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "thao", "Our team of five ran a job fair. I was in charge of contacting companies.", "Nhóm em năm người tổ chức ngày hội việc làm. Em phụ trách liên hệ doanh nghiệp.", { phase: "redo", pose: "explain" }),
        L("l7", "thao", "I made a list, called each one, sent invitations, and reminded them a week before.", "Em lập danh sách, gọi từng nơi, gửi thư mời và nhắc lịch trước một tuần.", { phase: "redo", pose: "explain" }),
        L("l8", "thao", "As a result, more than twenty companies confirmed.", "Kết quả là hơn hai mươi doanh nghiệp xác nhận tham gia.", { phase: "redo", face: "happy", react: { binh: "happy" } }),
      ] },
    { id: "s13", module: "TEXT-02", ref: "p10",
      data: { text: "Kể việc của nhóm, nhấn việc của mình.", keywords: ["nhấn việc của mình"], illus: "bust-in-silhouette" },
      lines: [L("l1", null, "Tell the team's story, but stress your own part.", "Kể việc của nhóm, nhấn việc của mình.")] },

    // ---------- Phần 3 ----------
    { id: "s14", module: "HOST-03", data: { n: 3, of: 6, title: "Một câu trả lời STAR mẫu" },
      lines: [L("l1", "det", "Part three: a complete STAR answer.", "Phần ba: một câu trả lời STAR hoàn chỉnh trông thế nào?")] },
    { id: "s15", module: "SCENE-01", ref: "p11,p12",
      data: { set: "meeting", label: "Khách không hài lòng",
        actors: [{ id: "dung", side: "left" }, { id: "binh", side: "right", pose: "hold" }] },
      lines: [
        L("l1", "binh", "Tell me about a time you handled an unhappy customer.", "Kể về một lần bạn xử lý khách hàng không hài lòng.", { pose: "explain" }),
        L("l2", "dung", "At an appliance shop, a customer brought back a new washing machine. It leaked, and he was angry.", "Hồi bán ở cửa hàng điện máy, khách mang máy giặt mới mua quay lại vì rò nước, rất bực.", { pose: "explain" }),
        L("l3", "dung", "My task was to calm him, and fix it fast, within shop policy.", "Việc của em là làm khách bình tĩnh, xử lý nhanh trong phạm vi chính sách.", { pose: "explain" }),
        L("l4", "dung", "I listened, noted the fault, called the technicians myself, and asked my manager for an exchange.", "Em nghe hết, ghi lỗi, tự gọi bộ phận kỹ thuật hẹn kiểm tra, xin quản lý cho đổi máy.", { pose: "explain" }),
        L("l5", "dung", "He got a new machine two days later, and came back to buy more.", "Hai ngày sau khách được đổi máy, rồi quay lại mua thêm.", { face: "happy", react: { binh: "happy" } }),
        L("l6", null, "Plus a lesson: call the right team, don't send customers around.", "Kèm điều rút ra: chủ động gọi bộ phận liên quan, không chuyển khách đi vòng."),
      ] },

    // ---------- Phần 4 ----------
    { id: "s16", module: "HOST-03", data: { n: 4, of: 6, title: "Chuẩn bị kho câu chuyện" },
      lines: [L("l1", "det", "Part four: build your story bank before the interview.", "Phần bốn: mấy ngày trước phỏng vấn, chuẩn bị kho câu chuyện thế nào?")] },
    { id: "s17", module: "LIST-06", ref: "p13",
      data: { title: "Năm đến tám câu chuyện", steps: [
        { text: "Mở bản mô tả công việc", illus: "page-facing-up" },
        { text: "Liệt kê các kỹ năng chính", illus: "memo" },
        { text: "Mỗi kỹ năng, một tình huống thật", illus: "speech-balloon" } ] },
      lines: [
        L("l1", null, "You can't guess every question. Prepare five to eight flexible stories.", "Không đoán hết câu hỏi, nhưng chuẩn bị được năm đến tám chuyện dùng linh hoạt."),
        L("l2", null, "Open the job description, list the key skills,", "Mở bản mô tả công việc, liệt kê kỹ năng chính,"),
        L("l3", null, "and recall one real situation for each.", "rồi nhớ lại một tình huống thật cho mỗi kỹ năng."),
      ] },
    { id: "s18", module: "LIST-05", ref: "p14",
      data: { title: "Ghi mỗi câu chuyện", illus: "card-file-box", items: [
        "Bốn dòng ngắn S, T, A, R, không viết thành bài văn", "Đánh dấu chuyện dùng được cho nhiều câu", "Ít nhất một chuyện về thất bại, sai lầm", "Kể to vài lần và bấm giờ" ] },
      lines: [
        L("l1", null, "Four short lines per story: S, T, A, R. Not an essay.", "Mỗi chuyện bốn dòng ngắn theo S, T, A, R, không viết thành bài văn."),
        L("l2", null, "Mark stories that fit many questions.", "Đánh dấu chuyện nào dùng được cho nhiều câu hỏi."),
        L("l3", null, "Have at least one about a failure. Many forget it.", "Có ít nhất một chuyện về thất bại hay sai lầm, nhiều người hay quên."),
        L("l4", null, "Tell each one aloud a few times, and time it.", "Kể to mỗi chuyện vài lần và bấm giờ."),
      ] },
    { id: "s19", module: "REL-12", ref: "p15",
      data: { center: { label: "Một lần cứu dự án trễ hạn", illus: "hourglass-not-done" }, spokes: [
        { label: "Câu về áp lực", illus: "high-voltage" },
        { label: "Câu về làm việc nhóm", illus: "busts-in-silhouette" },
        { label: "Câu về giải quyết vấn đề", illus: "puzzle-piece" } ] },
      lines: [
        L("l1", null, "One good story can answer many questions.", "Một chuyện tốt có thể trả lời nhiều câu."),
        L("l2", null, "Saving a late project works for pressure, teamwork, and problem solving.", "Một lần cứu dự án trễ hạn dùng được cho câu về áp lực, làm việc nhóm, giải quyết vấn đề."),
      ] },
    { id: "s20", module: "LIST-09", ref: "p16",
      data: { title: "Ít kinh nghiệm? Vẫn có chuyện từ", illus: "seedling", keywords: [
        { text: "Dự án nhóm ở trường", illus: "school" }, { text: "Câu lạc bộ", illus: "busts-in-silhouette" },
        { text: "Việc làm thêm", illus: "shopping-bags" }, { text: "Hoạt động tình nguyện", illus: "handshake" } ] },
      lines: [
        L("l1", null, "New graduate? You still have stories: group projects, clubs,", "Mới ra trường? Bạn vẫn có chuyện: dự án nhóm, câu lạc bộ,"),
        L("l2", null, "part-time jobs, volunteering. They want how you think and act, not a job title.", "việc làm thêm, tình nguyện. Họ cần cách bạn nghĩ và làm, không phải chức danh."),
      ] },
    { id: "s21", module: "CMP-01", ref: "p17",
      data: { labels: ["Ví dụ quá nhẹ", "Ví dụ đủ sức nặng"], left: "Một lần nộp báo cáo đúng hạn", right: "Một tuần nhiều hạn chót trùng nhau, và cách bạn sắp xếp", illus: ["feather", "spiral-calendar"] },
      lines: [
        L("l1", null, "Pick examples with weight. One report on time proves little about time management.", "Chọn ví dụ đủ sức nặng. Một lần nộp đúng hạn khó chứng minh kỹ năng quản lý thời gian."),
        L("l2", null, "A week of clashing deadlines, and how you sorted them, does.", "Một tuần nhiều hạn chót trùng nhau và cách bạn sắp xếp thì chứng minh được."),
      ] },

    // ---------- Phần 5 ----------
    { id: "s22", module: "HOST-03", data: { n: 5, of: 6, title: "Kể chuyện thất bại" },
      lines: [L("l1", "det", "Part five: telling a failure story, without hurting yourself.", "Phần năm: kể chuyện thất bại thế nào cho khỏi tự hại mình?")] },
    { id: "s23", module: "DLG-01", ref: "p18,p20",
      data: { set: "meeting", label: "Câu hỏi về sai lầm",
        actors: [{ id: "thao", side: "left" }, { id: "binh", side: "right", pose: "hold" }],
        verdict: { ok: false, label: "“Em chưa mắc lỗi nào đáng kể”",
          why: "Ai đi làm cũng từng sai; câu né tránh dễ bị coi là thiếu tự nhìn lại, và sẽ bị hỏi lại." } },
      lines: [
        L("l1", "binh", "Tell me about a mistake you made at work.", "Kể về một sai lầm trong công việc.", { pose: "explain" }),
        L("l2", "thao", "I work carefully, so I haven't made any real mistakes.", "Dạ em làm việc cẩn thận nên chưa mắc lỗi nào đáng kể.", { face: "happy", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Not safe. Everyone makes mistakes. They'll just ask again, another way.", "Không an toàn. Ai cũng từng sai. Họ sẽ hỏi lại theo cách khác."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "thao", "I once sent a quote without the new shipping price. The company paid the difference.", "Em từng gửi báo giá mà quên cập nhật giá vận chuyển mới, công ty phải chịu phần chênh lệch.", { phase: "redo", face: "thinking", pose: "explain" }),
        L("l7", "thao", "I told my team leader at once, and clarified with the client for later orders.", "Em báo ngay trưởng nhóm, liên hệ khách làm rõ cho các đơn sau.", { phase: "redo", pose: "explain" }),
        L("l8", "thao", "Then I made a three-step checklist before sending any quote.", "Rồi em lập danh sách kiểm tra ba bước trước khi gửi báo giá.", { phase: "redo", face: "happy", react: { binh: "happy" } }),
        L("l9", "det", "No happy ending? Give the real consequence, and what you changed.", "Không kết thúc đẹp: nói hậu quả thật, và điều bạn đã thay đổi.", { phase: "redo", face: "happy" }),
      ] },
    { id: "s25", module: "TEXT-04", ref: "p19",
      data: { text: "Người phỏng vấn không tìm người chưa từng sai, mà đánh giá sự trung thực và khả năng học hỏi.", marks: ["trung thực", "học hỏi"], illus: "seedling" },
      lines: [
        L("l1", null, "They're not looking for someone who never failed.", "Người phỏng vấn không tìm người chưa từng sai."),
        L("l2", null, "They judge your honesty, and how you learn. Choose a moderate, past mistake.", "Họ đánh giá sự trung thực và khả năng học hỏi. Chọn một lỗi vừa phải, đã qua."),
      ] },
    { id: "s26", module: "TEXT-02", ref: "p21",
      data: { text: "Chuyện sai kể thật, phần sửa kể kỹ.", keywords: ["kể thật", "kể kỹ"], illus: "wrench" },
      lines: [L("l1", null, "Tell the mistake honestly. Tell the fix in detail.", "Chuyện sai kể thật, phần sửa kể kỹ.")] },

    // ---------- Phần 6 ----------
    { id: "s27", module: "HOST-03", data: { n: 6, of: 6, title: "Lỗi hay làm hỏng câu chuyện" },
      lines: [L("l1", "det", "Last part: mistakes that ruin the story in the room.", "Phần cuối: trong phòng, lỗi nào hay làm hỏng câu chuyện?")] },
    { id: "s28", module: "HOST-02", ref: "p22",
      data: { statement: "Phóng đại một chút cho câu chuyện hay hơn thì không sao", truth: false,
        why: "Người phỏng vấn giỏi sẽ hỏi sâu thêm vài câu, chi tiết không thật lộ ra rất nhanh." },
      lines: [
        L("l1", "det", "Exaggerating a bit makes the story better, and it's fine. True or false?", "Phóng đại một chút cho câu chuyện hay hơn thì không sao. Đúng hay sai?"),
        L("l2", "det", "False. Good interviewers ask deeper. Untrue details show up fast.", "Sai. Người phỏng vấn giỏi hỏi sâu thêm, chi tiết không thật lộ ra rất nhanh.", { face: "stern" }),
      ] },
    { id: "s29", module: "CMP-01", ref: "p23",
      data: { labels: ["Như đọc kịch bản", "Chuyển ý tự nhiên"], left: "“Tình huống là…, Nhiệm vụ là…”", right: "“Lúc đó…”, “Việc của em là…”, “Em đã…”, “Kết quả là…”", illus: ["scroll", "speech-balloon"] },
      lines: [
        L("l1", null, "STAR is a frame for your memory. Don't say: the situation is, the task is.", "STAR là khung để nhớ ý, không cần nói to “Tình huống là…, Nhiệm vụ là…”."),
        L("l2", null, "Use natural links: at that time, my job was, I did, as a result.", "Chuyển ý tự nhiên: “Lúc đó…”, “Việc của em là…”, “Em đã…”, “Kết quả là…”."),
      ] },
    { id: "s30", module: "LIST-06", ref: "p24",
      data: { title: "Làm mẫu: chưa biết kết quả", steps: [
        { text: "Một tuần trước, nhắn hỏi đồng nghiệp cũ", illus: "mobile-phone" },
        { text: "Ghi lại câu trả lời, càng cụ thể càng tốt", illus: "memo" },
        { text: "Không hỏi được: điều bạn tự quan sát", illus: "eyes" },
        { text: "Kể đủ bốn phần, kết bằng kết quả", illus: "trophy" } ] },
      lines: [
        L("l1", null, "You suggested a new delivery schedule, but left before the results were clear.", "Bạn từng đề xuất lịch giao hàng mới cho kho, nhưng nghỉ việc khi chưa rõ kết quả."),
        L("l2", null, "A week before, message an old colleague: is it still used? Fewer late deliveries?", "Một tuần trước, nhắn hỏi đồng nghiệp cũ: lịch mới còn dùng không, có đỡ trễ không?"),
        L("l3", null, "Can't ask? Use what you saw: in my last month, late trips dropped a lot.", "Không hỏi được? Dùng điều tự quan sát: “Tháng cuối em còn ở đó, chuyến giao trễ ít hẳn.”"),
        L("l4", null, "Then tell all four parts, ending with that result.", "Khi kể, đi hết bốn phần, kết bằng kết quả đó."),
      ] },
    { id: "s31", module: "TEXT-02", ref: "p25",
      data: { text: "Chưa có kết quả, câu chuyện chưa xong.", keywords: ["kết quả", "chưa xong"], illus: "chequered-flag" },
      lines: [L("l1", null, "No result? The story isn't finished.", "Chưa có kết quả, câu chuyện chưa xong.")] },
    { id: "s32", module: "SCENE-01", ref: "p26",
      data: { set: "meeting", label: "Phỏng vấn bằng tiếng Anh",
        actors: [{ id: "dung", side: "left" }, { id: "sam", side: "right", pose: "hold" }] },
      lines: [
        L("l1", "sam", "Give me an example of working under time pressure.", "Cho tôi một ví dụ bạn làm việc dưới áp lực thời gian.", { pose: "explain", to: "dung" }),
        L("l2", "dung", "At that time, I was working as a sales assistant.", "Lúc đó, tôi làm trợ lý bán hàng.", { pose: "explain", to: "sam" }),
        L("l3", "dung", "My task was to finish the report in two days.", "Nhiệm vụ của tôi là hoàn thành báo cáo trong hai ngày.", { pose: "explain" }),
        L("l4", "dung", "First, I talked to each member of the team.", "Đầu tiên, tôi trao đổi với từng thành viên trong nhóm.", { pose: "explain" }),
        L("l5", "dung", "As a result, we delivered the project on time.", "Kết quả là chúng tôi giao dự án đúng hạn.", { face: "happy", react: { sam: "happy" } }),
      ] },

    // ---------- Tổng kết, câu đố, kết ----------
    { id: "s33", module: "END-02", ref: "outro",
      data: { kicker: "Nhớ mang theo", illus: "star", points: [
        "Bối cảnh vài câu, hành động là chính",
        "Kể việc của nhóm, nhấn việc của mình",
        "Chuyện sai kể thật, phần sửa kể kỹ" ],
        icons: ["flexed-biceps", "bust-in-silhouette", "wrench"] },
      lines: [
        L("l1", null, "With five to eight true stories ready, you just pick one and tell it.", "Có sẵn năm đến tám chuyện thật, bạn chỉ việc chọn chuyện hợp và kể."),
        L("l2", null, "Today: take three key skills from the job post, and write one STAR story for each.", "Hôm nay: chọn ba kỹ năng đầu trong bản mô tả, viết cho mỗi kỹ năng một chuyện theo STAR."),
      ] },
    { id: "s34", module: "QUIZ-01", ref: "questions[7]",
      data: { q: "Which part of a STAR answer should take the most time?",
        options: [
          "The action, where you explain the steps you took and why you chose them",
          "The situation, because interviewers need every detail about your old company first",
          "The task, because your job title explains everything about what you did",
        ],
        correct: 0, countdown: 5, illus: "flexed-biceps",
        why: "Hành động là nơi người phỏng vấn thấy cách bạn làm việc." },
      lines: [
        L("l1", null, "Which part of a STAR answer should take the most time?", "Phần nào trong câu trả lời STAR nên chiếm nhiều thời gian nhất?"),
        L("l2", null, "The action, where you explain the steps you took and why you chose them.", "Hành động: các bước bạn đã làm và vì sao chọn cách đó."),
        L("l3", null, "About half the time or more. Situation and task need only a few sentences.", "Khoảng một nửa thời gian trở lên. Tình huống, nhiệm vụ chỉ vài câu."),
      ] },
    { id: "s35", module: "QUIZ-01", ref: "questions[3]",
      data: { q: "Which question is a clear signal to answer with the STAR method?",
        options: [
          "When are you able to start working with us if we make an offer",
          "Which office program do you use most often for making simple tables",
          "Tell me about a time when you disagreed with a colleague at work",
        ],
        correct: 2, countdown: 5, illus: "speech-balloon",
        why: "“Kể về một lần” đòi một chuyện có thật, đúng chỗ dùng STAR." },
      lines: [
        L("l1", null, "Which question is a clear signal to answer with the STAR method?", "Câu hỏi nào là tín hiệu rõ ràng để trả lời theo STAR?"),
        L("l2", null, "Tell me about a time when you disagreed with a colleague at work.", "Kể về một lần bạn bất đồng với đồng nghiệp."),
        L("l3", null, "Information or tool questions? Just answer directly.", "Câu hỏi thông tin hay công cụ thì trả lời thẳng là đủ."),
      ] },
    { id: "s36", module: "END-05", data: { text: "Bốn mươi câu để kể chuyện theo STAR", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Your turn. Forty questions are waiting below.", "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới.")] },
  ],
};
