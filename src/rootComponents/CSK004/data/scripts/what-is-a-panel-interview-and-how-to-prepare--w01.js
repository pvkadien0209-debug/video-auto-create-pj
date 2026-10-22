// Kịch bản video W lần 3 (#110) — "Phỏng vấn hội đồng là gì và cách chuẩn bị" · chuỗi "Chuẩn bị phỏng vấn xin việc"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "what-is-a-panel-interview-and-how-to-prepare--w01",
  hook: "HOOK-14",
  loop: { open: "s01", close: "s27" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "job-seekers", slug: "what-is-a-panel-interview-and-how-to-prepare", door: "ky-nang", level: "B1",
    title: "Phỏng vấn hội đồng là gì và cách chuẩn bị", series: "Chuẩn bị phỏng vấn xin việc" },
  format: "W", mode: "text", audio: {},
  notes: "Phủ ý: 28/28. Đổi tên: Cẩm → Thảo; “một anh trong hội đồng” hỏi vặn (p21) → Bác Bình (chỉ hỏi lại về con số, câu trung lập); “bạn” ở các mục khác → Thảo; anh trưởng phòng (p18) và giám đốc (p24) → Bác Bình (không nói câu nào ngoài câu hỏi lại con số; câu “bên mình cần người làm nhanh” do người kể thuật lại); chị bên nhân sự (p18) → Cô Hoa (không nói, người kể thuật lại việc hỏi chen); người nhận lịch ở p7 → phòng nhân sự (tin nhắn). Vai mới (Bin, Bà Tư, Sam): không dùng, bài không có trẻ con, bà cụ hay người nước ngoài. Chuyện bỏ lửng ở s01, đóng ở s25 (DLG-01). Phần làm lại ở s25 dựng theo lời khuyên p20 (giữ giọng đều, đúng trọng tâm, không phòng thủ); bài không có nội dung con số nên câu làm lại chỉ là câu mở đầu bình tĩnh. s21 là cảnh duy nhất có ba người. Bài có 7 mục; video gộp mục 1 (là gì) với mục 2 (ai ngồi), và tách mục “tình huống khó” làm hai chương (hỏi chen, hỏi dồn / khác quan điểm, không biết). Không dùng questions[37]. Câu đố: questions[16], questions[22] (không có tên nhân vật).",
  scenes: [
    // ---------- Mở đầu kể chuyện ----------
    { id: "s01", module: "SCENE-01", ref: "p21",
      data: { set: "meeting", label: "Buổi gặp hội đồng",
        actors: [{ id: "thao", side: "left" }, { id: "binh", side: "right", pose: "cross" }] },
      lines: [
        L("l1", "binh", "About that number in your old project. Can you explain it again?", "Về con số trong dự án cũ, em giải thích lại được không?", { face: "stern", pose: "explain" }),
        L("l2", null, "The third time. First, Thảo explained fully. Then, more briefly.", "Lần thứ ba. Lần đầu Thảo giải thích kỹ, lần hai nói ngắn hơn."),
        L("l3", "thao", "Um... I...", "Dạ… em…", { face: "worried" }),
        L("l4", null, "What will Thảo say this time?", "Lần này Thảo sẽ nói gì?", { wait: 300 }),
      ] },
    { id: "s02", module: "HOST-01", ref: "intro",
      data: { title: "Gặp cả hội đồng", pose: "present",
        items: ["Hỏi trước ai sẽ ngồi đó", "Đoán mỗi người quan tâm gì", "Nói với cả phòng"] },
      lines: [
        L("l1", "det", "How do you prepare for a panel interview? They're not there to trap you.", "Chuẩn bị phỏng vấn hội đồng thế nào? Hội đồng không ngồi đó để dồn bạn."),
        L("l2", "det", "Ask who will be there.", "Hỏi trước ai sẽ ngồi đó."),
        L("l3", "det", "Guess what each one cares about.", "Đoán mỗi người quan tâm gì."),
        L("l4", "det", "And talk to the whole room.", "Và nói sao cho cả phòng thấy được kết nối."),
      ] },
    { id: "s03", module: "TOC-01", ref: "intro",
      data: { title: "Sáu phần của video", chapters: [
        { label: "Hội đồng là gì, gồm ai", illus: "busts-in-silhouette" },
        { label: "Mấy ngày trước", illus: "spiral-calendar" },
        { label: "Nói với nhiều người", illus: "eyes" },
        { label: "Hỏi chen, hỏi dồn", illus: "high-voltage" },
        { label: "Khác quan điểm, không biết", illus: "balance-scale" },
        { label: "Kết thúc và sau buổi", illus: "envelope" } ] },
      lines: [
        L("l1", null, "Six parts: what a panel is, days before, talking to many,", "Sáu phần: hội đồng là gì, mấy ngày trước, nói với nhiều người,"),
        L("l2", null, "interruptions and pressure, disagreements, and after the interview.", "hỏi chen và hỏi dồn, khác quan điểm, và sau buổi gặp."),
      ] },

    // ---------- Phần 1 ----------
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Hội đồng là gì, gồm những ai?" },
      lines: [L("l1", "det", "Part one: what is a panel, and who sits on it?", "Phần một: phỏng vấn hội đồng là gì, ai thường ngồi trong đó?")] },
    { id: "s05", module: "LIST-09", ref: "p1",
      data: { title: "Hai người trở lên cùng hỏi, hay gặp ở", illus: "busts-in-silhouette", keywords: [
        { text: "Cơ quan nhà nước", illus: "classical-building" }, { text: "Ngân hàng", illus: "bank" },
        { text: "Trường học", illus: "school" }, { text: "Bệnh viện", illus: "hospital" },
        { text: "Công ty lớn", illus: "office-building" }, { text: "Vị trí quản lý", illus: "man-office-worker" } ] },
      lines: [
        L("l1", null, "A panel interview: two or more people question you at the same time.", "Phỏng vấn hội đồng: bạn ngồi trước hai người trở lên cùng lúc."),
        L("l2", null, "Common in public offices, banks, schools, hospitals,", "Hay gặp ở cơ quan nhà nước, ngân hàng, trường học, bệnh viện,"),
        L("l3", null, "big companies, and management roles.", "công ty lớn và các vị trí quản lý."),
      ] },
    { id: "s06", module: "LIST-07", ref: "p2,p3",
      data: { title: "Vì sao công ty chọn hội đồng", items: [
        { text: "Tiết kiệm thời gian", illus: "stopwatch" },
        { text: "Không phụ thuộc cảm nhận của một người", illus: "balance-scale" },
        { text: "Nhìn bạn từ nhiều góc", illus: "eyes" } ] },
      lines: [
        L("l1", null, "Why a panel? To save time.", "Vì sao chọn hội đồng? Để tiết kiệm thời gian."),
        L("l2", null, "So the decision doesn't rest on one person's feeling.", "Để quyết định không phụ thuộc cảm nhận của một người."),
        L("l3", null, "To see you from many angles. Many jobs mean presenting to a group, too.", "Để nhìn bạn từ nhiều góc. Nhiều việc cũng cần trình bày trước một nhóm."),
        L("l4", null, "For you, it's a plus: one meeting instead of several rounds.", "Với bạn, đây là lợi thế: một buổi thay cho nhiều vòng riêng lẻ."),
      ] },
    { id: "s07", module: "CMP-10", ref: "p4,p5",
      data: { issue: "Mỗi người trong hội đồng kiểm tra một phần", kicker: "Không phải để dồn bạn",
        views: [
          { role: "Nhân sự", view: "Thái độ, sự phù hợp, kỳ vọng lương, ngày bắt đầu", illus: "woman-office-worker" },
          { role: "Quản lý trực tiếp", view: "Làm được việc sớm không, dễ phối hợp không", illus: "man-office-worker" },
          { role: "Chuyên gia", view: "Hỏi sâu chuyên môn, có khi ra bài toán tình huống", illus: "man-technologist" },
          { role: "Đồng nghiệp, lãnh đạo", view: "Cách bạn giao tiếp và tầm nhìn", illus: "busts-in-silhouette" } ] },
      lines: [
        L("l1", null, "HR looks at attitude, fit, salary hopes and start date.", "Nhân sự xem thái độ, sự phù hợp, kỳ vọng lương, thời gian bắt đầu."),
        L("l2", null, "Your direct manager: can you do the work soon, and work with the team?", "Quản lý trực tiếp: bạn làm được việc sớm không, có dễ phối hợp không?"),
        L("l3", null, "The expert asks deep technical questions, maybe a case.", "Chuyên gia hỏi sâu chuyên môn, có khi ra bài toán tình huống."),
        L("l4", null, "Future colleagues or senior leaders watch how you communicate.", "Đồng nghiệp tương lai hay lãnh đạo cấp cao quan sát cách bạn giao tiếp, tầm nhìn."),
      ] },
    { id: "s08", module: "TEXT-04", ref: "p6",
      data: { text: "Thường có một người dẫn dắt, giới thiệu thành phần và điều phối thứ tự câu hỏi.", marks: ["một người dẫn dắt"], illus: "microphone" },
      lines: [
        L("l1", null, "Usually one person leads: introduces everyone and sets the order of questions.", "Thường có một người dẫn dắt: giới thiệu thành phần, điều phối thứ tự câu hỏi."),
        L("l2", null, "Notice them early, to follow the rhythm.", "Để ý người này từ đầu để theo kịp nhịp buổi phỏng vấn."),
      ] },

    // ---------- Phần 2 ----------
    { id: "s09", module: "HOST-03", data: { n: 2, of: 6, title: "Mấy ngày trước buổi gặp" },
      lines: [L("l1", "det", "Part two: the days before.", "Phần hai: mấy ngày trước buổi gặp, chuẩn bị gì?")] },
    { id: "s10", module: "SCENE-02", ref: "p7",
      data: { set: "room", label: "Hỏi thành phần",
        actor: { id: "thao", side: "left" },
        contact: { name: "Phòng nhân sự", illus: "woman-office-worker" },
        messages: [{ from: "me", text: "Anh chị có thể cho em biết buổi phỏng vấn gồm những ai không ạ?", at: "l1" }] },
      lines: [
        L("l1", "thao", "Could you tell me who will be in the interview?", "Anh chị có thể cho em biết…", { face: "thinking" }),
        L("l2", null, "A normal question. Many places share names and job titles.", "Câu hỏi bình thường. Nhiều nơi sẵn lòng chia sẻ tên và chức danh."),
      ] },
    { id: "s11", module: "HOST-02", ref: "p8",
      data: { statement: "Nên đào sâu cả thông tin cá nhân của từng người trong hội đồng", truth: false,
        why: "Chỉ ở mức vừa phải: xem chức danh, lĩnh vực để đoán họ quan tâm gì." },
      lines: [
        L("l1", "det", "Dig into each panel member's private life. True or false?", "Nên đào sâu thông tin cá nhân của từng người trong hội đồng. Đúng hay sai?"),
        L("l2", "det", "False. Just their title and field, to guess what they care about.", "Sai. Chỉ vừa phải: chức danh và lĩnh vực, để đoán họ quan tâm gì.", { face: "stern" }),
      ] },
    { id: "s12", module: "LIST-13", ref: "p9",
      data: { title: "Một câu chuyện thật, ba cách nhấn", items: [
        { title: "Với chuyên gia", detail: "Nhấn phần kỹ thuật", illus: "gear" },
        { title: "Với quản lý", detail: "Nhấn phần kết quả", illus: "trophy" },
        { title: "Với nhân sự", detail: "Nhấn phần phối hợp", illus: "handshake" } ] },
      lines: [
        L("l1", null, "Prepare answers from several angles. One true story,", "Chuẩn bị câu trả lời theo nhiều góc. Cùng một câu chuyện thật,"),
        L("l2", null, "the technical side for the expert, results for the manager, teamwork for HR.", "nhấn kỹ thuật cho chuyên gia, kết quả cho quản lý, phối hợp cho nhân sự."),
      ] },
    { id: "s13", module: "LIST-05", ref: "p10",
      data: { title: "Mang theo và luyện trước", illus: "briefcase", items: [
        "Hồ sơ mỗi người một bản, dư một bản", "Sổ, bút để ghi tên, chỗ ngồi", "Câu hỏi cuối buổi cho từng lĩnh vực", "Nhờ hai ba người thân cùng hỏi thử" ] },
      lines: [
        L("l1", null, "A CV for each person, plus one spare, in case someone hasn't seen it.", "Hồ sơ đủ mỗi người một bản và dư một bản, phòng khi có người chưa xem."),
        L("l2", null, "A notebook for names and seats.", "Sổ và bút để ghi tên, chỗ ngồi."),
        L("l3", null, "End-of-interview questions for each field.", "Câu hỏi cuối buổi cho từng lĩnh vực."),
        L("l4", null, "And ask two or three people to question you together.", "Và nhờ hai ba người thân cùng ngồi hỏi thử."),
      ] },

    // ---------- Phần 3 ----------
    { id: "s14", module: "HOST-03", data: { n: 3, of: 6, title: "Nói chuyện với nhiều người" },
      lines: [L("l1", "det", "Part three: talking to several people at once.", "Phần ba: trong phòng, nói chuyện với nhiều người thế nào?")] },
    { id: "s15", module: "LIST-06", ref: "p11,p12",
      data: { title: "Ánh mắt và tên gọi", steps: [
        { text: "Ghi nhanh tên, chỗ ngồi khi được giới thiệu", illus: "notebook" },
        { text: "Bắt đầu nhìn người hỏi", illus: "eyes" },
        { text: "Lần lượt nhìn những người khác", illus: "busts-in-silhouette" },
        { text: "Quay lại người hỏi khi kết ý", illus: "counterclockwise-arrows-button" } ] },
      lines: [
        L("l1", null, "When introduced, jot down each name and seat. Using names builds warmth.", "Khi được giới thiệu, ghi nhanh tên và chỗ ngồi. Gọi đúng tên tạo thiện cảm rõ rệt."),
        L("l2", null, "Start by looking at the asker,", "Bắt đầu nhìn vào người hỏi,"),
        L("l3", null, "then at the others in turn,", "rồi lần lượt nhìn sang những người khác,"),
        L("l4", null, "and back to the asker at the end. The whole room feels included.", "và quay lại người hỏi khi kết ý. Cả phòng đều thấy mình được nói cùng."),
      ] },
    { id: "s16", module: "TEXT-01", ref: "p13",
      data: { text: "Giữ câu trả lời gọn.", illus: "stopwatch" },
      lines: [L("l1", null, "Keep answers short. They have a list to finish. Five minutes wastes everyone's time.", "Giữ câu trả lời gọn: hội đồng có danh sách câu hỏi, trả lời năm phút làm mất thời gian cả phòng.")] },
    { id: "s17", module: "CMP-09", ref: "p14",
      data: { myth: "Trong hội đồng, chỉ cần thuyết phục người chức cao nhất",
        fact: "Người ngồi cuối bàn ít nói, cúi đầu ghi chép có thể là trưởng nhóm quản lý trực tiếp vị trí đó",
        illusMyth: "crown", illusFact: "memo" },
      lines: [
        L("l1", null, "Only the boss matters? No. The quiet note-taker may be your future team leader.", "Chỉ cần thuyết phục sếp lớn? Không. Người ít nói ghi chép có thể là trưởng nhóm tương lai."),
        L("l2", null, "Look only at the boss, and the others can't judge you.", "Chỉ nhìn người chức cao, những người khác ít căn cứ để đánh giá bạn."),
      ] },
    { id: "s18", module: "TEXT-02", ref: "p15",
      data: { text: "Người ít nói nhất cũng đang chấm điểm.", keywords: ["ít nói nhất", "chấm điểm"], illus: "pencil" },
      lines: [L("l1", null, "Even the quietest person is scoring you.", "Người ít nói nhất cũng đang chấm điểm.")] },
    { id: "s19", module: "HOST-02", ref: "p16",
      data: { statement: "Có người ghi chép suốt mà không nhìn bạn là họ không thích bạn", truth: false,
        why: "Rất bình thường: thường có người được giao ghi biên bản. Đừng mất tập trung." },
      lines: [
        L("l1", "det", "Someone writes the whole time and never looks at you. They don't like you. True or false?", "Có người ghi chép suốt, không nhìn bạn: họ không thích bạn. Đúng hay sai?"),
        L("l2", "det", "False. Someone is often asked to take notes. Stay focused.", "Sai. Thường có người được giao ghi biên bản. Đừng vì thế mà mất tập trung.", { face: "wink" }),
      ] },

    // ---------- Phần 4 ----------
    { id: "s20", module: "HOST-03", data: { n: 4, of: 6, title: "Bị hỏi chen, bị hỏi dồn" },
      lines: [L("l1", "det", "Part four: interruptions and pressure.", "Phần bốn: bị hỏi chen, bị hỏi dồn thì xử lý ra sao?")] },
    { id: "s21", module: "SCENE-01", ref: "p17,p18",
      data: { set: "meeting", label: "Hai câu một lúc",
        actors: [{ id: "thao", side: "left" }, { id: "hoa", side: "center", pose: "hold" }, { id: "binh", side: "right", pose: "hold" }] },
      lines: [
        L("l1", null, "Thảo is answering the manager. Then HR cuts in with another topic.", "Thảo đang trả lời anh trưởng phòng thì chị nhân sự hỏi chen sang chuyện khác.", { react: { thao: "surprised" } }),
        L("l2", "thao", "May I finish answering your question first, then come to yours?", "Em xin trả lời nốt câu của anh trước, rồi đến câu của chị ạ.", { pose: "explain", to: "binh", react: { hoa: "happy" } }),
        L("l3", "thao", "About the question you asked earlier...", "Về câu chị hỏi lúc nãy…", { pose: "explain", to: "hoa", face: "happy" }),
        L("l4", null, "Calm handling is exactly what a panel wants to see.", "Xử lý bình tĩnh như vậy chính là điều hội đồng muốn thấy."),
      ] },
    { id: "s22", module: "LIST-06", ref: "p18",
      data: { title: "Làm mẫu: bị hỏi chen", steps: [
        { text: "Dừng một nhịp, đừng nhảy nửa câu", illus: "pause-button" },
        { text: "Xin trả lời nốt câu trước", illus: "speech-balloon" },
        { text: "Ghi vài chữ về câu thứ hai", illus: "pencil" },
        { text: "Quay lại: “Về câu chị hỏi lúc nãy…”", illus: "counterclockwise-arrows-button" } ] },
      lines: [
        L("l1", null, "Pause. Don't jump between half-answers.", "Dừng một nhịp, đừng nói nửa câu này rồi nhảy sang nửa câu kia."),
        L("l2", null, "Ask to finish the first one.", "Xin trả lời nốt câu đầu."),
        L("l3", null, "Note a few words about the second.", "Ghi nhanh vài chữ về câu thứ hai vào sổ."),
        L("l4", null, "Then go back to it. Both get full answers.", "Rồi quay lại câu đó. Cả hai người được trả lời trọn vẹn."),
      ] },
    { id: "s23", module: "TEXT-02", ref: "p19",
      data: { text: "Hai câu một lúc, xin phép trả lời lần lượt.", keywords: ["xin phép", "lần lượt"], illus: "speech-balloon" },
      lines: [L("l1", null, "Two questions at once? Ask to answer them in turn.", "Hai câu một lúc, xin phép trả lời lần lượt.")] },
    { id: "s24", module: "TEXT-04", ref: "p20",
      data: { text: "Có người lạnh lùng, hỏi dồn: đôi khi là để xem bạn phản ứng với áp lực.", marks: ["phản ứng với áp lực"], illus: "high-voltage" },
      lines: [
        L("l1", null, "Someone seems cold, or keeps pressing. Sometimes it's a pressure test.", "Có người lạnh lùng hoặc hỏi dồn, đôi khi là để xem bạn phản ứng với áp lực."),
        L("l2", null, "Keep your voice even, answer to the point, don't get defensive.", "Giữ giọng đều, trả lời đúng trọng tâm, không phòng thủ."),
      ] },
    { id: "s25", module: "DLG-01", ref: "p21,p22",
      data: { set: "meeting", label: "Lần hỏi thứ ba",
        actors: [{ id: "thao", side: "left" }, { id: "binh", side: "right", pose: "cross" }],
        verdict: { ok: false, label: "Buột miệng “Em đã nói rồi mà anh”",
          why: "Phần còn lại của buổi, câu hỏi lẫn câu trả lời đều ngắn và gượng gạo." } },
      lines: [
        L("l1", null, "Back to Thảo, and the third question about the number.", "Quay lại Thảo, lần hỏi thứ ba về con số."),
        L("l2", "binh", "Can you explain that number again?", "Em giải thích lại con số đó được không?", { face: "stern", pose: "explain" }),
        L("l3", "thao", "I already told you!", "Em đã nói rồi mà anh!", { face: "stern", pose: "shrug", stop: true }),
        L("l4", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l5", "det", "He takes a note and moves on. The rest is short and awkward.", "Anh ấy ghi chú rồi chuyển câu. Phần còn lại ngắn và gượng gạo."),
        L("l6", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l7", "thao", "Of course. Let me explain it once more, briefly.", "Dạ vâng. Em xin giải thích lại ngắn gọn ạ.", { phase: "redo", face: "neutral", pose: "explain", react: { binh: "neutral" } }),
        L("l8", "det", "Pressed with questions? Keep your voice even.", "Bị hỏi dồn, giữ giọng đều.", { phase: "redo", face: "happy" }),
      ] },

    // ---------- Phần 5 ----------
    { id: "s26", module: "HOST-03", data: { n: 5, of: 6, title: "Khác quan điểm, không biết" },
      lines: [L("l1", "det", "Part five: when the panel disagrees, or you don't know.", "Phần năm: hội đồng khác quan điểm, hoặc bạn không biết câu trả lời.")] },
    { id: "s27", module: "SCENE-03", ref: "p23,p24",
      data: { set: "meeting", actors: [{ id: "thao", side: "left" }, { id: "binh", side: "right", pose: "hold" }],
        left: { label: "Chọn phe tốc độ", ok: false }, right: { label: "Chỉ cách cân bằng", ok: true } },
      lines: [
        L("l1", null, "The director says: we need someone fast. The quality manager sits beside him.", "Giám đốc nói “bên mình cần người làm nhanh”, chị phụ trách chất lượng ngồi cạnh."),
        L("a1", "thao", "I think speed matters most. Careful checks only slow work down.", "Em nghĩ tốc độ quan trọng hơn hết, kiểm tra kỹ chỉ làm chậm việc.", { phase: "a", pose: "explain" }),
        L("a2", null, "It pleases one person, and dismisses what the other values.", "Làm vừa lòng một người, nhưng gạt đi điều người kia coi trọng.", { phase: "a" }),
        L("b1", "thao", "I work fast when entering orders, but check carefully before sending to clients.", "Em làm nhanh ở khâu nhập đơn, nhưng kiểm tra kỹ ở khâu đối chiếu trước khi gửi khách.", { phase: "b", pose: "explain" }),
        L("b2", "thao", "At my old job, that kept us on time with few fixes.", "Ở chỗ cũ, cách đó giúp nhóm em vừa kịp hạn vừa ít phải sửa.", { phase: "b", face: "happy", react: { binh: "happy" } }),
      ] },
    { id: "s28", module: "TEXT-02", ref: "p25",
      data: { text: "Đừng chọn phe, hãy chỉ cách cân bằng.", keywords: ["Đừng chọn phe", "cân bằng"], illus: "balance-scale" },
      lines: [L("l1", null, "Don't pick a side. Show how you balance both.", "Đừng chọn phe, hãy chỉ cách cân bằng.")] },
    { id: "s29", module: "CMP-01", ref: "p26",
      data: { labels: ["Đoán bừa", "Thành thật, kèm cách làm"], left: "Trước nhiều người nghe, càng dễ lộ", right: "Chưa có kinh nghiệm trực tiếp, nêu cách sẽ tìm hiểu, xử lý", illus: ["game-die", "light-bulb"] },
      lines: [
        L("l1", null, "Don't know? Say honestly you lack direct experience.", "Không biết câu trả lời? Thành thật nói chưa có kinh nghiệm trực tiếp."),
        L("l2", null, "Then explain how you'd find out or handle it. With many listeners, guesses show.", "Rồi nêu cách bạn sẽ tìm hiểu, xử lý. Trước nhiều người nghe, đoán bừa càng dễ lộ."),
      ] },

    // ---------- Phần 6 ----------
    { id: "s30", module: "HOST-03", data: { n: 6, of: 6, title: "Kết thúc và sau buổi" },
      lines: [L("l1", "det", "Last part: ending the interview, and after.", "Phần cuối: kết thúc buổi và sau buổi làm gì?")] },
    { id: "s31", module: "LIST-05", ref: "p27",
      data: { title: "Cuối buổi", illus: "handshake", items: [
        "Có thời gian: hỏi mỗi người một câu theo lĩnh vực của họ", "Cảm ơn cả hội đồng", "Chào từng người" ] },
      lines: [
        L("l1", null, "Invited to ask? If time allows, one short question for each, in their field.", "Được mời hỏi? Nếu thời gian cho phép, hỏi mỗi người một câu ngắn theo lĩnh vực của họ."),
        L("l2", null, "Then thank the whole panel, and say goodbye to each person.", "Cuối buổi, cảm ơn cả hội đồng và chào từng người."),
      ] },
    { id: "s32", module: "LIST-13", ref: "p28",
      data: { title: "Email cảm ơn trong vòng một ngày", items: [
        { title: "Gửi người liên hệ chính", detail: "Nhờ chuyển lời đến các thành viên", illus: "envelope" },
        { title: "Hoặc gửi riêng từng người", detail: "Mỗi thư nhắc một chi tiết khác từ câu hỏi của người đó", illus: "e-mail" } ] },
      lines: [
        L("l1", null, "Send a thank-you email within a day.", "Gửi email cảm ơn trong vòng một ngày."),
        L("l2", null, "To the main contact, asking them to pass it on. Or to each member,", "Gửi người liên hệ chính, nhờ chuyển lời. Hoặc gửi riêng từng người,"),
        L("l3", null, "each letter mentioning a different detail from their own questions.", "mỗi thư nhắc một chi tiết khác nhau từ câu hỏi của người đó."),
      ] },

    // ---------- Tổng kết, câu đố, kết ----------
    { id: "s33", module: "END-02", ref: "outro",
      data: { kicker: "Nhớ mang theo", illus: "busts-in-silhouette", points: [
        "Người ít nói nhất cũng đang chấm điểm",
        "Bị hỏi dồn, giữ giọng đều",
        "Đừng chọn phe, hãy chỉ cách cân bằng" ],
        icons: ["pencil", "high-voltage", "balance-scale"] },
      lines: [
        L("l1", null, "More people means more chances to be seen from many sides.", "Hội đồng nhiều người là nhiều cơ hội được nhìn từ nhiều phía."),
        L("l2", null, "Today: ask who's on the panel, then have two people question you for fifteen minutes.", "Hôm nay: hỏi thành phần hội đồng, rồi nhờ hai người thân hỏi thử mười lăm phút."),
      ] },
    { id: "s34", module: "QUIZ-01", ref: "questions[16]",
      data: { q: "How should you use eye contact when answering a panel question?",
        options: [
          "Look only at the person who asked, and ignore everyone else completely",
          "Look at the asker first, then the others, and return to the asker at the end",
          "Look only at the ceiling, so you can think clearly without distractions",
        ],
        correct: 1, countdown: 5, illus: "eyes",
        why: "Cả phòng thấy được kết nối; chỉ nhìn một người khiến người khác thấy bị bỏ qua." },
      lines: [
        L("l1", null, "How should you use eye contact when answering a panel question?", "Nên dùng ánh mắt thế nào khi trả lời câu hỏi của hội đồng?"),
        L("l2", null, "Look at the asker first, then the others, and return to the asker at the end.", "Nhìn người hỏi trước, rồi những người khác, và quay lại người hỏi khi kết thúc."),
        L("l3", null, "Looking at one person only leaves the others out.", "Chỉ nhìn một người khiến những người khác thấy bị bỏ qua."),
      ] },
    { id: "s35", module: "QUIZ-01", ref: "questions[22]",
      data: { q: "Two panel members ask you different questions at almost the same time, what should you say?",
        options: [
          "Answer only the question from the more senior person and forget the other",
          "Ask to answer the first question now and return to the second one right after",
          "Ask them to decide between themselves which question is more important first",
        ],
        correct: 1, countdown: 5, illus: "speech-balloon",
        why: "Xin phép trả lời lần lượt: bình tĩnh, lịch sự, đúng điều hội đồng muốn thấy." },
      lines: [
        L("l1", null, "Two panel members ask you different questions at almost the same time, what should you say?", "Hai thành viên hỏi hai câu khác nhau gần như cùng lúc, nên nói gì?"),
        L("l2", null, "Ask to answer the first question now and return to the second one right after.", "Xin trả lời câu đầu trước, rồi quay lại câu thứ hai ngay sau đó."),
        L("l3", null, "Calm and polite. That's what the panel wants to see.", "Bình tĩnh và lịch sự, đúng điều hội đồng muốn thấy."),
      ] },
    { id: "s36", module: "END-05", data: { text: "Bốn mươi câu để vững vàng trước hội đồng", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng" },
      lines: [L("l1", "det", "Your turn. Forty questions are waiting below.", "Đến lượt bạn. Bốn mươi câu hỏi đang chờ bên dưới.")] },
  ],
};
