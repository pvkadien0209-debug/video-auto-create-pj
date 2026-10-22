// Kịch bản video W lần 3 (#110) — "Những chiêu lừa nhắm vào tân sinh viên và cách tránh" · chuỗi "Chuẩn bị vào đại học xa nhà"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  schema: "detpro.video-script/0.2",
  id: "scams-targeting-new-students--w01",
  hook: "HOOK-09",
  loop: { open: "s01", close: "s27" }, // #112 KC-Q6, tự điền bằng tools/add-loop.mjs (B)
  unit: { audience: "first-year-students-living-away", slug: "scams-targeting-new-students", door: "ky-nang", level: "B1",
    title: "Những chiêu lừa nhắm vào tân sinh viên và cách tránh", series: "Chuẩn bị vào đại học xa nhà" },
  format: "W", mode: "text", audio: {},
  notes: "Đổi tên: “bạn” trong khung ⚖️ p11 → Dũng; Ly (tên mới sau #107, p5) → Lan; “bạn” trong khung ✍️ p16 → Lan; phụ huynh (p26) → Bác Bình (bố Dũng). Chuyện của Tùng (p20) kể không tên ở REL-02 s22. Kẻ gọi, nhóm tuyển, người tổ chức hội thảo không lên hình (lời người kể / tin nhắn). Vai mới: không dùng. Phủ ý: 26/26. Câu thoại treo của kẻ gọi (s01) được trả lời ở DLG s13. Hai DLG: s13 (chuyển vào “tài khoản tạm giữ”, p7, p8, p11, p12) và s19 (hội thảo “miễn phí”, p15–p17). Tin nhắn mạo danh Dũng ở s17 là cách diễn đạt ý p13, không có nguyên văn trong bài. Câu đố: questions[18]. #112 (khớp bài sau sửa logic): mục 2 rút còn p4 (hai dấu hiệu + dẫn sang bài “Nhận ra việc làm thêm lừa đảo: đặt cọc, cộng tác viên online”), bỏ p5, p6, đánh lại mã p7–p28 → p5–p26 — bỏ thẻ chiêu “làm nhiệm vụ” (s09) và cảnh Lan hỏi nơi tuyển (s11, câu hỏi mẫu không còn trong bài; Cô Hoa không còn trong video), thay bằng s11n (ba cách tìm việc an toàn + dẫn bài).",
  scenes: [
    // ── Mở đầu: một câu thoại treo
    { id: "s01", module: "SCENE-01", ref: "p7,p11",
      data: { set: "street", label: "Một cuộc gọi lạ", actors: [{ id: "dung", side: "left", pose: "phone" }] },
      lines: [
        L("l1", null, "A stranger calls Dũng. He knows Dũng's full name and ID number.", "Người lạ gọi Dũng, đọc đúng họ tên và số căn cước."),
        L("l2", null, "“Your account is linked to a crime. Don't tell anyone, not even your parents.”", "“Tài khoản của em liên quan đến một vụ án. Không được kể với ai, kể cả bố mẹ.”"),
        L("l3", "dung", "A crime? What should I do?", "Vụ án ạ? Em phải làm sao?", { face: "worried", pose: "phone" }),
      ], beats: { after: 500 } },
    { id: "s02", module: "HOST-01", ref: "intro,p2",
      data: { title: "Nhận ra lừa đảo thế nào?", pose: "present",
        items: ["Hối thúc làm ngay", "Đòi tiền hoặc mã trước", "Dặn giữ bí mật", "Hứa lợi lớn mà dễ"] },
      lines: [
        L("l1", "det", "How do you spot a scam? The names change, but the pattern doesn't.", "Nhận ra lừa đảo thế nào? Tên chiêu đổi, khuôn thì không."),
        L("l2", "det", "They rush you.", "Hối thúc làm ngay."),
        L("l3", "det", "They want money, a fee, or a code first.", "Đòi tiền, phí, hoặc mã trước."),
        L("l4", "det", "They tell you to keep it secret.", "Dặn giữ bí mật, không kể với ai."),
        L("l5", "det", "And they promise big, easy money.", "Hứa kiếm nhiều mà rất dễ."),
      ] },
    { id: "s03", module: "TOC-01",
      data: { title: "Sáu chặng tránh bẫy", chapters: [
        { label: "Vì sao bị nhắm tới", illus: "bullseye" },
        { label: "Việc làm thêm là bẫy", illus: "briefcase" },
        { label: "Cuộc gọi xưng cơ quan", illus: "telephone-receiver" },
        { label: "Bạn vay, người lạ rủ đầu tư", illus: "money-with-wings" },
        { label: "Giấy tờ, tài khoản", illus: "identification-card" },
        { label: "Lỡ bị lừa thì làm gì", illus: "sos-button" } ] },
      lines: [
        L("l1", null, "Six parts: why you're a target, fake jobs, fake officials,", "Sáu phần: vì sao bị nhắm, việc làm giả, cuộc gọi xưng cơ quan,"),
        L("l2", null, "friends and investments, your papers, and what to do if it happens.", "bạn vay, rủ đầu tư, giấy tờ tài khoản, và khi lỡ bị lừa."),
      ] },

    // ── Chương 1
    { id: "s04", module: "HOST-03", data: { n: 1, of: 6, title: "Vì sao bị nhắm tới?" },
      lines: [L("l1", "det", "Part one: why new students are targets.", "Phần một: vì sao tân sinh viên hay bị nhắm tới?")] },
    { id: "s05", module: "LIST-07", ref: "p1",
      data: { title: "Tân sinh viên thường", items: [
        { text: "Chưa quen thủ tục của trường", illus: "school" },
        { text: "Cần thêm tiền", illus: "money-bag" },
        { text: "Muốn tự lo cho bố mẹ khỏi bận tâm", illus: "house" } ] },
      lines: [
        L("l1", null, "New students don't know school procedures yet.", "Tân sinh viên chưa quen thủ tục của trường."),
        L("l2", null, "They often need money, and want to manage alone so parents don't worry.", "Thường cần thêm tiền, và muốn tự lo cho bố mẹ khỏi bận tâm."),
        L("l3", null, "Scammers know this, and strike in the month school starts.", "Kẻ lừa biết rõ, nên hay ra tay đúng tháng nhập học."),
      ] },
    { id: "s06", module: "LIST-06", ref: "p3",
      data: { title: "Thấy một dấu hiệu: ba việc", steps: [
        { text: "Dừng lại", illus: "stop-sign" },
        { text: "Kiểm tra qua kênh chính thức do bạn tự tìm", illus: "magnifying-glass-tilted-left" },
        { text: "Hỏi một người tin cậy", illus: "busts-in-silhouette" } ] },
      lines: [
        L("l1", null, "See any of those signs? Do three things.", "Gặp một trong các dấu hiệu đó, làm ba việc."),
        L("l2", null, "Stop. Check through an official channel you find yourself. Ask someone you trust.", "Dừng lại. Kiểm tra qua kênh chính thức do bạn tự tìm. Hỏi một người tin cậy."),
        L("l3", "det", "Scammers fear two things most: time, and a second person.", "Kẻ lừa sợ nhất là thời gian và người thứ hai."),
      ] },

    // ── Chương 2
    { id: "s07", module: "HOST-03", data: { n: 2, of: 6, title: "Việc làm thêm là bẫy" },
      lines: [L("l1", "det", "Part two: which part-time jobs are traps?", "Phần hai: việc làm thêm nào là bẫy?")] },
    { id: "s08", module: "CMP-01", ref: "p4",
      data: { labels: ["Việc thật", "Việc lừa"], left: "Trả lương cho bạn", right: "Bắt bạn trả trước: phí hồ sơ, đồng phục, cọc giữ chỗ, “nạp vốn nhận đơn”", illus: ["money-bag", "money-with-wings"] },
      lines: [
        L("l1", null, "A real job pays you. A fake job makes you pay first.", "Việc thật trả lương cho bạn; việc lừa bắt bạn trả tiền trước."),
        L("l2", null, "A file fee, a uniform, a deposit to hold your place, or “capital to get orders”.", "Phí hồ sơ, tiền đồng phục, cọc giữ chỗ, hay “nạp vốn để nhận đơn”."),
        L("l3b", null, "Also suspicious: no address, only social media chats, very high pay for a simple task, and no meeting at a real workplace.", "Đáng ngờ: không địa chỉ, chỉ nhắn qua mạng, lương cao bất thường cho việc đơn giản, né gặp ở nơi làm thật."),
      ] },
    { id: "s10", module: "SCENE-02", ref: "p5,p6",
      data: { set: "room", label: "Việc “nhẹ” của Lan", actor: { id: "lan", side: "right" },
        contact: { name: "Nhóm tuyển cộng tác viên", illus: "mobile-phone" },
        messages: [
          { from: "them", text: "Chỉ cần bấm thích sản phẩm, mỗi ngày vài trăm nghìn.", at: "l1" },
          { from: "them", text: "Nạp tiền để làm “nhiệm vụ cấp cao” nhé.", at: "l3" },
          { from: "me", text: "Em muốn rút tiền ạ.", at: "l4" } ] },
      lines: [
        L("l1", "them", "Just click like on products. Earn a few hundred thousand dong a day.", "Chỉ cần bấm thích sản phẩm, mỗi ngày vài trăm nghìn."),
        L("l2", "lan", "They really paid me for the first few days!", "Mấy ngày đầu nhận được tiền thật!", { face: "happy" }),
        L("l3", "them", "Now top up money for the advanced tasks.", "Nạp tiền để làm “nhiệm vụ cấp cao” nhé."),
        L("l4", "lan", "I paid three times, more each time. Now I want my money back.", "Nạp ba lần, lần sau nhiều hơn. Giờ mình muốn rút tiền.", { face: "worried" }),
        L("l5", null, "The group vanished, and so did her food money for the month.", "Nhóm chat giải tán, toàn bộ tiền ăn tháng biến mất."),
        L("l6", "det", "A real job pays you. A fake job makes you pay.", "Việc thật trả lương cho bạn, việc lừa bắt bạn trả tiền.", { face: "stern" }),
      ] },
    { id: "s11n", module: "LIST-01", ref: "p4",
      data: { title: "Tìm việc an toàn qua", items: ["Trung tâm hỗ trợ sinh viên của trường", "Anh chị khoá trên", "Đến tận nơi làm"], illus: "school", icons: ["school", "busts-in-silhouette", "store"] },
      lines: [
        L("l1", null, "Safer ways to find work: the school's student support centre,", "Tìm việc an toàn hơn: qua trung tâm hỗ trợ sinh viên của trường,"),
        L("l2", null, "older students,", "anh chị khoá trên,"),
        L("l3", null, "or going to the workplace yourself.", "hoặc đến tận nơi làm."),
        L("l4", null, "More on this, and tricks like the “task” scam, in the lesson on spotting part-time job scams.", "Chi tiết, cùng chiêu “làm nhiệm vụ”, có ở bài “Nhận ra việc làm thêm lừa đảo: đặt cọc, cộng tác viên online”."),
      ] },

    // ── Chương 3
    { id: "s12", module: "HOST-03", data: { n: 3, of: 6, title: "Cuộc gọi xưng cơ quan" },
      lines: [L("l1", "det", "Part three: back to Dũng's call. Callers posing as officials.", "Phần ba: quay lại cuộc gọi của Dũng. Người gọi xưng cơ quan.")] },
    { id: "s13", module: "DLG-01", ref: "p7,p8,p11,p12",
      data: { set: "street", label: "Cuộc gọi của Dũng",
        actors: [{ id: "dung", side: "left", pose: "phone" }],
        verdict: { ok: false, label: "Chuyển tiền vào “tài khoản tạm giữ”",
          why: "Cơ quan chức năng không làm việc qua điện thoại kiểu đó; dặn bí mật để bạn không kịp hỏi ai.",
          rule: "Không chuyển tiền qua điện thoại để “xác minh”, “tạm giữ”" } },
      lines: [
        L("l1", null, "The caller knows his ID number. Police, bank, or school, he says.", "Người gọi đọc đúng số căn cước, xưng công an, ngân hàng hay nhà trường."),
        L("l2", "dung", "Okay. I'll send my money to the holding account to prove I'm clean.", "Dạ, em chuyển tiền vào tài khoản tạm giữ để chứng minh trong sạch.", { face: "worried", pose: "phone", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Leaked details prove nothing. Officials never ask for money by phone. The secret stops you asking anyone.", "Thông tin bị lộ không chứng minh gì. Cơ quan không đòi tiền qua điện thoại. Dặn bí mật để bạn không kịp hỏi."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "dung", "I'm hanging up. I'll call my parents first.", "Em cúp máy. Em gọi bố mẹ trước đã.", { phase: "redo", face: "thinking", pose: "phone" }),
        L("l7", "dung", "Then I'll go to the office, or call a number I look up myself. Not the one he gave.", "Rồi tự đến trụ sở, hoặc gọi số chính thức em tự tra, không gọi số người lạ đưa.", { phase: "redo", face: "happy" }),
        L("l8", "det", "The more they want secrecy, the sooner you tell someone.", "Càng bị dặn giữ bí mật, càng phải kể ngay.", { phase: "redo" }),
      ] },
    { id: "s14", module: "CMP-06", ref: "p9",
      data: { do: ["Cúp máy, tự gọi số chính thức của ngân hàng"], dont: ["Đọc mã xác thực cho bất kỳ ai", "Bấm đường link lạ", "Cài ứng dụng theo lời người gọi"],
        doIcons: ["telephone-receiver"], dontIcons: ["locked", "link", "mobile-phone"] },
      lines: [
        L("l1", null, "Never read out a code sent by text, to anyone. That code is the key to your account.", "Không bao giờ đọc mã xác thực cho ai: mã đó là chìa khoá tài khoản."),
        L("l2", null, "Don't click strange links. Don't install apps a caller tells you to. They can control your phone.", "Không bấm link lạ, không cài ứng dụng theo người gọi: họ có thể điều khiển máy bạn."),
      ] },
    { id: "s15", module: "LIST-13", ref: "p10",
      data: { title: "Tin nhắn về tiền học", items: [
        { title: "“Trúng học bổng, cần nộp phí”", detail: "Học bổng thật có thông báo chính thức của trường.", illus: "trophy" },
        { title: "Nhắc đóng học phí vào tài khoản cá nhân", detail: "Kiểm tra với phòng đào tạo, phòng công tác sinh viên.", illus: "bank" },
        { title: "Chỉ đóng qua kênh trường đã công bố", detail: "Tài khoản cá nhân là dấu hiệu đỏ.", illus: "school" } ] },
      lines: [
        L("l1", null, "“You won a scholarship, pay a fee.” “Pay tuition into this personal account.”", "“Trúng học bổng, cần nộp phí.” “Đóng học phí vào tài khoản cá nhân này.”"),
        L("l2", null, "Check with the training office or student affairs.", "Kiểm tra với phòng đào tạo hoặc phòng công tác sinh viên."),
        L("l3", null, "Pay the school only through its official channels.", "Chỉ đóng tiền cho trường qua kênh chính thức đã công bố."),
      ] },

    // ── Chương 4
    { id: "s16", module: "HOST-03", data: { n: 4, of: 6, title: "Bạn vay, người lạ rủ đầu tư" },
      lines: [L("l1", "det", "Part four: friends asking for money, and strangers offering investments.", "Phần bốn: bạn bè nhắn vay tiền, người lạ rủ đầu tư.")] },
    { id: "s17", module: "SCENE-02", ref: "p13",
      data: { set: "room", label: "Tin nhắn từ “Dũng”", actor: { id: "lan", side: "right" }, contact: { name: "Dũng (mạng xã hội)", illus: "man" },
        messages: [{ from: "them", text: "Cho mình vay gấp ít tiền, mai trả ngay nhé!", at: "l1" }] },
      lines: [
        L("l1", "them", "Lend me some money, quick! I'll pay you back tomorrow!", "Cho mình vay gấp ít tiền, mai trả ngay nhé!"),
        L("l2", null, "A friend's social media account can be taken over.", "Tài khoản mạng xã hội của bạn bè có thể bị chiếm."),
        L("l3", "lan", "I'll call the number I saved, and ask something only we know.", "Mình gọi số đã lưu từ trước, hỏi một chuyện chỉ hai đứa biết.", { face: "thinking", pose: "phone" }),
        L("l4", null, "Voices and videos online can be faked too.", "Giọng nói, hình ảnh trên mạng cũng có thể bị làm giả."),
      ] },
    { id: "s18", module: "OPEN-19", ref: "p14",
      data: { label: "Dấu hiệu nên tránh xa", warning: "“Lãi cao, cam kết không lỗ”", detail: "Rủ thêm người nhận hoa hồng, khoá học làm giàu nhanh." },
      lines: [
        L("l1", null, "“High profit, no loss guaranteed.” Earn by recruiting more people. Get-rich-quick courses.", "“Lãi cao, cam kết không lỗ”, rủ thêm người nhận hoa hồng, khoá học làm giàu nhanh."),
        L("l2", null, "Stay away. Real earning always has risk. No one can promise high, sure profit.", "Tránh xa. Kiếm tiền thật luôn có rủi ro, không ai cam kết lãi cao mà chắc chắn."),
      ] },
    { id: "s19", module: "DLG-01", ref: "p15,p16,p17",
      data: { set: "meeting", label: "Hội thảo “miễn phí”",
        actors: [{ id: "lan", side: "right" }],
        verdict: { ok: false, label: "Ký vì ngại, ngay trong buổi",
          why: "Có thể để lại một khoản nợ gần bằng tiền học cả năm.", rule: "Không ký gì ngay trong ngày" } },
      lines: [
        L("l1", null, "A “free” seminar runs late. People cheer. Staff hand Lan a course form, paid by a loan.", "Hội thảo “miễn phí” kéo đến tối, người xung quanh hò reo, nhân viên đưa tờ đăng ký trả góp qua khoản vay."),
        L("l2", "lan", "Um… okay, I'll sign.", "Dạ… vâng, em ký ạ.", { face: "worried", pose: "hold", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "Signing out of politeness can leave a debt close to a whole year's fees.", "Ký vì ngại có thể để lại khoản nợ gần bằng tiền học cả năm."),
        L("l5", "det", "Let's rewind and try again.", "Tua lại, thử lại nhé.", { phase: "redo" }),
        L("l6", "lan", "Thank you. I need to take the papers home and ask my family. I won't sign anything today.", "Em cảm ơn, em cần mang giấy tờ về đọc và hỏi gia đình, hôm nay em chưa ký gì ạ.", { phase: "redo", face: "happy", pose: "explain" }),
        L("l7", "det", "Polite, no argument, and time to read the real cost. The easier the promise, the higher the price.", "Lịch sự, khỏi tranh luận, có thời gian đọc số tiền thật. Lời hứa càng dễ, cái giá càng đắt.", { phase: "redo" }),
      ] },

    // ── Chương 5
    { id: "s20", module: "HOST-03", data: { n: 5, of: 6, title: "Giấy tờ, tài khoản của mình" },
      lines: [L("l1", "det", "Part five: can you lend your papers or your account?", "Phần năm: giấy tờ, tài khoản có cho mượn được không?")] },
    { id: "s21", module: "CMP-06", ref: "p18,p19",
      data: { do: ["Gửi giấy tờ qua kênh riêng, khi biết rõ người nhận"], dont: ["Cho mượn, thuê, bán tài khoản, thẻ, sim, căn cước", "Đăng ảnh căn cước, giấy báo, thẻ sinh viên lên mạng"],
        doIcons: ["envelope"], dontIcons: ["credit-card", "identification-card"] },
      lines: [
        L("l1", null, "Never lend, rent out or sell your bank account, card, SIM or ID, even for monthly money.", "Đừng cho mượn, cho thuê hay bán tài khoản, thẻ, sim, căn cước, kể cả khi được trả tiền."),
        L("l2", null, "An account in your name can receive scam money, and you answer for it.", "Tài khoản đứng tên bạn có thể nhận tiền lừa đảo, và người phải làm việc là bạn."),
        L("l3", null, "Don't post your ID, admission letter or student card online. Send them privately, only to people you know.", "Đừng đăng căn cước, giấy báo, thẻ sinh viên lên mạng; gửi qua kênh riêng khi biết rõ người nhận."),
      ] },
    { id: "s22", module: "REL-02", ref: "p20,p21",
      data: { chain: ["Một người trên mạng “thuê” tài khoản, mỗi tháng trả một khoản", "Đưa thẻ và mã đăng nhập", "Hai tháng sau: tài khoản bị phong toả, phải lên làm việc", "Người thuê biến mất"], illus: ["mobile-phone", "credit-card", "locked", "ghost"] },
      lines: [
        L("l1", null, "One student “rented out” his bank account online, for a monthly payment.", "Một bạn được đề nghị “thuê” tài khoản ngân hàng, mỗi tháng trả một khoản."),
        L("l2", null, "He handed over the card and the login code.", "Chỉ cần đưa thẻ và mã đăng nhập."),
        L("l3", null, "Two months later, the account was frozen for receiving money from scam victims. He had to see the authorities.", "Hai tháng sau, tài khoản bị phong toả vì nhận tiền của nhiều người bị lừa; bạn ấy phải lên làm việc."),
        L("l4", "det", "An account in your name means the responsibility is in your name.", "Tài khoản đứng tên mình, trách nhiệm cũng tên mình."),
      ] },

    // ── Chương 6
    { id: "s23", module: "HOST-03", data: { n: 6, of: 6, title: "Lỡ bị lừa thì làm gì?" },
      lines: [L("l1", "det", "Part six: if you've been scammed, act now.", "Phần sáu: lỡ bị lừa rồi thì làm gì ngay?")] },
    { id: "s24", module: "LIST-06", ref: "p22",
      data: { title: "Làm ngay", steps: [
        { text: "Dừng chuyển thêm bất kỳ khoản nào", illus: "stop-sign" },
        { text: "Gọi số hỗ trợ chính thức của ngân hàng, khoá giao dịch", illus: "bank" },
        { text: "Đổi mật khẩu các tài khoản", illus: "locked" } ] },
      lines: [
        L("l1", null, "Stop all payments, even if they promise “one last payment and you can withdraw”.", "Dừng chuyển thêm, dù bên kia hứa “nộp lần cuối là rút được”."),
        L("l2", null, "Call your bank's official number, on the card or in its app, and ask to block transactions.", "Gọi số hỗ trợ chính thức của ngân hàng in trên thẻ, đề nghị khoá giao dịch."),
        L("l3", null, "Then change your passwords.", "Rồi đổi mật khẩu các tài khoản."),
      ] },
    { id: "s25", module: "LIST-05", ref: "p23",
      data: { title: "Giữ bằng chứng, trình báo", items: ["Chụp tin nhắn, số điện thoại, số tài khoản đã chuyển", "Giữ biên lai chuyển tiền", "Trình báo công an nơi gần nhất", "Báo trường nếu kẻ lừa giả danh trường"], illus: "clipboard" },
      lines: [
        L("l1", null, "Screenshot the messages, phone numbers and account numbers. Keep the receipts.", "Chụp tin nhắn, số điện thoại, số tài khoản. Giữ biên lai chuyển tiền."),
        L("l2", null, "Report it at the nearest police office. Tell your school if they used its name.", "Trình báo công an nơi gần nhất. Báo trường nếu kẻ lừa giả danh trường."),
      ] },
    { id: "s26", module: "HOST-02", ref: "p24",
      data: { statement: "Người hứa “lấy lại tiền đã mất” là cứu tinh", truth: false,
        why: "Đó thường là cú lừa thứ hai nhắm vào người đang hoảng. Chỉ làm việc với ngân hàng, công an." },
      lines: [
        L("l1", "det", "Someone offering to get your lost money back is a lifesaver. True or false?", "Người hứa “lấy lại tiền đã mất” là cứu tinh. Đúng hay sai?"),
        L("l2", "det", "False. It's usually a second scam. Work only with your bank and the police.", "Sai. Đó thường là cú lừa thứ hai. Chỉ làm việc với ngân hàng và cơ quan chức năng.", { face: "stern" }),
      ] },
    { id: "s27", module: "SCENE-01", ref: "p25,p26",
      data: { set: "home", label: "Kể với bố", actors: [{ id: "dung", side: "left" }, { id: "binh", side: "right" }] },
      lines: [
        L("l1", "dung", "Dad… I was scammed. I feel so ashamed.", "Bố ơi… con bị lừa rồi. Con xấu hổ quá.", { face: "sad", to: "binh" }),
        L("l2", "binh", "Thank you for telling me. You're not the one at fault. Let's handle it together.", "Cảm ơn con đã kể. Người có lỗi không phải con. Mình cùng xử lý nhé.", { pose: "explain", face: "happy", to: "dung", react: { dung: "happy" } }),
        L("l3", null, "Shame is normal. But telling early, with someone beside you, saves more money and stress.", "Xấu hổ là bình thường; kể sớm, có người bên cạnh, giữ được nhiều tiền hơn."),
        L("l4", null, "Parents: tell your child they can always tell you, and you won't blame them.", "Phụ huynh: hãy nói với con, lỡ bị lừa con cứ kể, bố mẹ không trách."),
      ] },

    // ── Tổng kết, câu đố, kết
    { id: "s28", module: "HOST-01", ref: "p6,p12,p17,p21",
      data: { title: "Bốn câu mang về", pose: "present", items: ["Việc thật trả lương cho bạn", "Càng bị dặn bí mật, càng phải kể", "Lời hứa càng dễ, cái giá càng đắt", "Tài khoản tên mình, trách nhiệm tên mình"] },
      lines: [
        L("l1", "det", "A real job pays you.", "Việc thật trả lương cho bạn, việc lừa bắt bạn trả tiền."),
        L("l2", "det", "The more secrecy, the sooner you tell.", "Càng bị dặn giữ bí mật, càng phải kể ngay."),
        L("l3", "det", "The easier the promise, the higher the price.", "Lời hứa càng dễ, cái giá càng đắt."),
        L("l4", "det", "Your account, your responsibility.", "Tài khoản đứng tên mình, trách nhiệm cũng tên mình."),
      ] },
    { id: "s29", module: "QUIZ-01", ref: "questions[18]",
      data: {
        q: "A caller knows your ID number and says your account is linked to a crime, what does that prove?",
        options: [
          "Your account really is involved, so you should move your savings somewhere safe",
          "The caller must be a real officer, since only police can know your ID number",
          "Nothing, because leaked personal details are common and do not make a caller real",
        ],
        correct: 2, countdown: 5, illus: "telephone-receiver",
        why: "Thông tin bị lộ không chứng minh người gọi là thật.",
      },
      lines: [
        L("l1", null, "A caller knows your ID number and says your account is linked to a crime, what does that prove?", "Người gọi đọc đúng số căn cước và nói tài khoản liên quan vụ án, điều đó chứng minh gì?"),
        L("l2", null, "Nothing, because leaked personal details are common and do not make a caller real.", "Không chứng minh gì, vì thông tin cá nhân bị lộ khá phổ biến."),
        L("l3", null, "Hang up, and call an official number you find yourself.", "Hãy cúp máy, tự gọi số chính thức do bạn tra."),
      ] },
    { id: "s30", module: "END-05", data: { text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Nghe tiếng Anh, chọn đáp án đúng" },
      lines: [
        L("l1", "det", "Save your bank's official number. Text your parents: if anyone rushes me to pay, I'll call you first.", "Lưu số ngân hàng chính thức. Nhắn bố mẹ: ai giục chuyển tiền, con sẽ gọi bố mẹ trước."),
        L("l2", "det", "Then try the forty questions below.", "Rồi thử bốn mươi câu hỏi bên dưới nhé."),
      ] },
  ],
};
