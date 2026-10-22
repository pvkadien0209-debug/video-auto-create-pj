// Dữ liệu mẫu cho modules/anim.jsx (#106): mỗi mã có thuong và dai, KÈM `lines` mẫu (lời đọc tiếng Anh + phụ đề tiếng Việt).
// Gallery tách `lines` ra khỏi data rồi truyền vào cảnh (R_CSK004.jsx → one()).
// Nguồn: students-with-part-time-jobs/agree-pay-shifts-before-starting (p5, p9–p11, p13–p15, p17–p20, p22). Chuyện dựng từ "📌 Tình huống" và "🔀 Hai lựa chọn".
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export const SAMPLES_ANIM = {
  // p10 Tình huống của Lan: quán vắng bị cho về sớm
  "SCENE-01": {
    thuong: {
      set: "cafe", label: "Tình huống",
      actors: [{ id: "lan", side: "left" }, { id: "hoa", side: "right", pose: "hold" }],
      lines: [
        L("l1", "hoa", "The shop is quiet today, Lan. You can go home early.", "Quán vắng rồi, Lan về sớm nhé.", { pose: "explain" }),
        L("l2", "lan", "Oh, okay. Thank you.", "Dạ… vâng ạ.", { face: "worried", react: { hoa: "neutral" } }),
        L("l3", null, "Lan only asked about the hourly pay. The hours she misses are not paid.", "Lúc nhận việc, Lan chỉ hỏi lương mỗi giờ. Giờ bị cho về sớm thì không được tính."),
      ],
    },
    // p14–p15 Tình huống của Dũng: bị trừ lương vì bảng phạt không ai đưa xem
    dai: {
      set: "shop", label: "Chuyện của Dũng tháng đầu",
      actors: [{ id: "lan", side: "left", enter: "pop" }, { id: "dung", side: "center", enter: "walk", at: "l2" }, { id: "hoa", side: "right" }, { id: "det", enter: "pop", at: "l5" }],
      props: ["money-with-wings"],
      lines: [
        L("l1", "hoa", "Dung, here is your pay for the first month.", "Dũng ơi, lương tháng đầu của cháu đây.", { pose: "explain" }),
        L("l2", "dung", "Why is it so low? Half a shift is gone because I was a few minutes late!", "Sao ít vậy cô? Cháu trễ có vài phút mà bị trừ nửa ca!", { face: "surprised", pose: "shrug", react: { lan: "worried" } }),
        L("l3", "lan", "The list of fines is on the wall in the storeroom.", "Bảng phạt dán trong kho đó Dũng.", { to: "dung", pose: "point" }),
        L("l4", "dung", "Nobody showed it to me when I started.", "Lúc nhận việc, có ai đưa mình xem đâu.", { face: "sad", pose: "stand" }),
        L("l5", "det", "Know the fines first, and you will not lose pay unfairly later.", "Biết luật phạt trước, đỡ bị trừ oan sau.", { face: "happy", pose: "point" }),
      ],
    },
    // #110: mẫu có cả ba vai mới — Bà Tư (bà), Bé Bin (cháu), Sam (khách nước ngoài) ở phòng khách
    "ba-vai": {
      set: "home", label: "Khách tới nhà",
      actors: [{ id: "tu", side: "left", pose: "hold" }, { id: "bin", side: "center", enter: "pop" }, { id: "sam", side: "right", enter: "walk", at: "l2" }],
      lines: [
        L("l1", "bin", "Grandma, there is a guest at the door!", "Bà ơi, có khách tới nhà ạ!", { face: "happy", pose: "pointL", to: "tu" }),
        L("l2", "sam", "Hello! I am Sam. Thank you for inviting me.", "Xin chào! Tôi là Sam. Cảm ơn bà đã mời tôi tới chơi.", { face: "happy", pose: "wave", to: "tu" }),
        L("l3", "tu", "Welcome. Please come in and have some tea.", "Chào cháu, vào nhà uống chén trà đã.", { face: "happy", pose: "explain", to: "sam" }),
        L("l4", "bin", "Where are you from? Do you like Vietnamese food?", "Cô ở đâu tới ạ? Cô có thích món Việt không?", { face: "surprised", to: "sam", react: { sam: "happy" } }),
        L("l5", "sam", "I love it, especially pho in the morning.", "Thích lắm, nhất là phở buổi sáng.", { face: "happy", pose: "thumb", to: "bin" }),
      ],
    },
  },
  // p17 Tin nhắn mẫu sau khi thống nhất · p22 hỏi lại khi lương khác thoả thuận
  "SCENE-02": {
    thuong: {
      set: "room", label: "Nhắn lại để nhớ",
      actor: { id: "lan", side: "left" },
      contact: { name: "Cô Hoa (chủ quán)", illus: "woman-cook" },
      messages: [
        { from: "me", text: "Em xin nhắn lại để nhớ ạ: lương theo giờ, thử việc một tuần có lương, trả ngày mùng năm.", at: "l2" },
        { from: "them", text: "Đúng rồi con nhé.", at: "l3" },
      ],
      lines: [
        L("l1", "lan", "Let me write down what we agreed.", "Mình nhắn lại cho cô Hoa để nhớ.", { face: "thinking" }),
        L("l2", "lan", "Pay by the hour, a paid one-week trial, paid on the fifth.", "Em xin nhắn lại để nhớ ạ: lương theo giờ, thử việc một tuần có lương, trả ngày mùng năm."),
        L("l3", "them", "Yes, that is right.", "Đúng rồi con nhé."),
        L("l4", "lan", "Now it is all in writing.", "Vậy là có tin nhắn ghi lại rồi.", { face: "happy" }),
      ],
    },
    dai: {
      set: "room", label: "Lương tháng này khác thoả thuận",
      actor: { id: "dung", side: "left" },
      contact: { name: "Anh quản lý cửa hàng tiện lợi", illus: "man-office-worker" },
      messages: [
        { from: "me", text: "Em xin nhắn lại để nhớ ạ: lương theo giờ, thử việc một tuần có lương, trả ngày mùng năm, ca tối thứ Ba, Năm, Bảy, đổi ca báo trước hai ngày.", at: "l1" },
        { from: "them", text: "Ok em.", at: "l2" },
        { from: "me", text: "Em thấy lương tháng này khác với mình đã thống nhất, anh chị xem giúp em được không ạ?", at: "l4" },
        { from: "them", text: "Để anh kiểm tra bảng chấm công rồi báo em nhé.", at: "l5" },
        { from: "me", text: "Dạ, em cảm ơn anh ạ.", at: "l6" },
      ],
      lines: [
        L("l1", "dung", "Pay by the hour, a paid trial week, paid on the fifth, evening shifts, two days notice to swap.", "Em xin nhắn lại để nhớ ạ…", { face: "thinking" }),
        L("l2", "them", "Okay.", "Ok em."),
        L("l3", "dung", "A month later, my pay is different from what we agreed.", "Một tháng sau, lương khác với tin nhắn đã thống nhất.", { face: "worried" }),
        L("l4", "dung", "My pay this month is different from what we agreed. Could you check it for me?", "Em thấy lương tháng này khác với mình đã thống nhất…"),
        L("l5", "them", "Let me check the time sheet and get back to you.", "Để anh kiểm tra bảng chấm công rồi báo em nhé."),
        L("l6", "dung", "Thank you.", "Dạ, em cảm ơn anh ạ.", { face: "happy" }),
      ],
    },
  },
  // p19 🔀 Hai lựa chọn: giữ căn cước
  "SCENE-03": {
    thuong: {
      set: "shop",
      actors: [{ id: "dung" }, { id: "hoa", pose: "hold" }],
      left: { label: "Cách A: bản chính", ok: false },
      right: { label: "Cách B: bản sao", ok: true },
      lines: [
        L("a1", "hoa", "Leave your ID card with me, just to be safe.", "Cháu để căn cước lại cô giữ nhé.", { phase: "a" }),
        L("a2", "dung", "Sure, here is the original.", "Dạ, cháu gửi cô bản chính ạ.", { phase: "a", pose: "give" }),
        L("b1", "hoa", "Leave your ID card with me, just to be safe.", "Cháu để căn cước lại cô giữ nhé.", { phase: "b" }),
        L("b2", "dung", "Here is a copy. I need the original for paperwork.", "Dạ, cháu gửi bản sao, bản chính cháu cần giữ ạ.", { phase: "b", pose: "give", face: "happy" }),
      ],
    },
    dai: {
      set: "cafe",
      actors: [{ id: "lan" }, { id: "hoa" }],
      left: { label: "Chỉ hỏi lương mỗi giờ", ok: false },
      right: { label: "Hỏi cả ngày quán vắng", ok: true },
      lines: [
        L("a1", "lan", "How much is it per hour?", "Dạ, mỗi giờ bao nhiêu ạ?", { phase: "a" }),
        L("a2", "hoa", "Same as everyone. You start tomorrow.", "Như mọi người. Mai cháu làm luôn.", { phase: "a" }),
        L("b1", "lan", "If the shop is quiet and I go home early, how is my pay counted?", "Nếu quán vắng mà em về sớm thì lương tính thế nào ạ?", { phase: "b", pose: "explain", face: "thinking" }),
        L("b2", "hoa", "Good question. Let me explain.", "Ừ, để cô nói rõ.", { phase: "b", face: "happy" }),
      ],
    },
  },
  // p18–p20: quản lý xin giữ căn cước "để làm tin"
  "DLG-01": {
    thuong: {
      set: "shop", label: "Tình huống",
      actors: [{ id: "dung", side: "left" }, { id: "hoa", side: "right", pose: "hold" }],
      verdict: { ok: false, label: "Đưa bản chính căn cước", why: "Lúc nghỉ việc dễ bị hẹn “mai lấy” mãi, và kẹt mọi thủ tục cần căn cước.", rule: "Nơi làm không được giữ bản chính giấy tờ tuỳ thân" },
      lines: [
        L("l1", "hoa", "Leave your ID card with me, just to be safe.", "Cháu để căn cước lại cô giữ, để làm tin nhé.", { pose: "explain" }),
        L("l2", "dung", "Sure, here is my original card.", "Dạ, cháu gửi cô bản chính ạ.", { pose: "give", face: "happy", stop: true }),
        L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
        L("l4", "det", "If the shop keeps the original, getting it back can take visit after visit.", "Đưa bản chính, lúc nghỉ việc dễ bị hẹn “mai lấy” hết lần này đến lần khác."),
        L("l5", "det", "Let us rewind and try another way.", "Tua lại, thử cách khác nhé.", { phase: "redo" }),
        L("l6", "dung", "Here is a copy for your records. I need to keep the original for paperwork.", "Dạ, cháu gửi cô bản sao để làm hồ sơ, bản chính cháu cần giữ để làm giấy tờ ạ.", { phase: "redo", pose: "give", face: "happy" }),
        L("l7", "hoa", "Okay, a copy is fine.", "Ừ, bản sao là được rồi.", { phase: "redo", face: "happy" }),
      ],
    },
    // p9–p11: chỉ hỏi lương mỗi giờ
    dai: {
      set: "cafe", label: "Chuyện của Lan ngày nhận việc",
      actors: [{ id: "lan", side: "left" }, { id: "dung", side: "center" }, { id: "hoa", side: "right" }],
      verdict: { ok: false, label: "Chỉ hỏi lương mỗi giờ rồi nhận việc ngay", why: "Lương theo giờ thì ngày quán vắng, bị cho về sớm, giờ còn lại có thể không được tính, ảnh hưởng thẳng tới thu nhập cả tháng.", rule: "Hỏi trước: quán vắng có cho về sớm không, khi đó lương tính thế nào" },
      lines: [
        L("l1", "hoa", "You two will be paid by the hour.", "Hai đứa làm lương theo giờ nhé.", { pose: "explain" }),
        L("l2", "dung", "Great, we can start tomorrow!", "Dạ, mai tụi cháu đi làm luôn ạ!", { face: "happy", pose: "thumb" }),
        L("l3", "lan", "I only need to know the hourly pay. Thank you!", "Em chỉ cần biết lương mỗi giờ thôi, em cảm ơn cô ạ!", { face: "happy", stop: true }),
        L("l4", "det", "Wait a second!", "Khoan đã!"),
        L("l5", "det", "When the shop is quiet, Lan may be sent home early, and those hours are not paid.", "Quán vắng là Lan bị cho về sớm, và giờ còn lại không được tính.", { face: "worried" }),
        L("l6", "det", "Let us rewind. Ask about the quiet days too.", "Tua lại nhé. Hỏi luôn cả ngày vắng.", { phase: "redo" }),
        L("l7", "lan", "If the shop is quiet and I go home early, how is my pay counted?", "Dạ, nếu quán vắng mà em phải về sớm thì lương tính thế nào ạ?", { phase: "redo", face: "thinking", pose: "explain" }),
        L("l8", "hoa", "Good question. Let me explain.", "Ừ, hỏi vậy là đúng, để cô nói rõ.", { phase: "redo", face: "happy" }),
        L("l9", "det", "Ask about busy days, and ask about quiet days.", "Hỏi lương ngày đông, hỏi cả ngày vắng.", { phase: "redo", face: "happy", pose: "thumb" }),
      ],
    },
  },
  // intro + p3, p8, p12, p18: bốn điều cần hỏi
  "HOST-01": {
    thuong: {
      title: "Trước ngày đầu, hỏi rõ bốn điều", pose: "present",
      items: ["Lương và thử việc", "Ca, đổi ca, cắt ca", "Các khoản phạt", "Giấy tờ: đưa gì, giữ gì"],
      lines: [
        L("l1", "det", "Before your first day, ask about four things.", "Trước ngày đầu, hỏi rõ bốn điều."),
        L("l2", "det", "Pay and the trial period.", "Một: lương và thử việc."),
        L("l3", "det", "Shifts, swaps, and cuts.", "Hai: ca làm, đổi ca, cắt ca."),
        L("l4", "det", "Any fines.", "Ba: các khoản phạt."),
        L("l5", "det", "And which papers to give, and which to keep.", "Bốn: giấy tờ nào đưa, giấy tờ nào giữ."),
      ],
    },
    dai: {
      title: "Danh sách nên mở ra trước mỗi lần nhận việc mới", pose: "think", illus: "clipboard",
      items: ["Lương, ngày trả, tiền mặt hay chuyển khoản", "Thử việc bao lâu, có lương không", "Mỗi tuần mấy ca, đổi ca báo trước bao lâu", "Quy định phạt, xin xem trước khi nhận", "Chỉ đưa bản sao giấy tờ, giữ bản chính"],
      lines: [
        L("l1", "det", "Pay day, cash or transfer.", "Lương, ngày trả, tiền mặt hay chuyển khoản."),
        L("l2", "det", "How long the trial is, and whether it is paid.", "Thử việc bao lâu, có lương không."),
        L("l3", "det", "How many shifts a week, and how early to ask for a swap.", "Mỗi tuần mấy ca, đổi ca báo trước bao lâu."),
        L("l4", "det", "The rules on fines, seen before you say yes.", "Quy định phạt, xin xem trước khi nhận."),
        L("l5", "det", "Give a copy of your papers, keep the original.", "Chỉ đưa bản sao giấy tờ, giữ bản chính."),
      ],
    },
  },
  // p13: phạt tiền · p5: lương thử việc
  "HOST-02": {
    thuong: {
      statement: "Khoản phạt nào quán đặt ra cũng là hợp lệ", truth: false,
      why: "Luật lao động cấm phạt tiền, cắt lương thay cho xử lý kỷ luật.",
      lines: [
        L("l1", "det", "Every fine a shop sets is valid. True or false?", "Khoản phạt nào quán đặt ra cũng hợp lệ. Đúng hay sai?"),
        L("l2", "det", "False. The law bans fines and pay cuts as discipline.", "Sai. Luật cấm phạt tiền, cắt lương thay cho kỷ luật.", { face: "stern" }),
      ],
    },
    dai: {
      kicker: "Thử việc thì sao?",
      statement: "Thử việc vẫn có lương, ít nhất bằng tám mươi lăm phần trăm lương của công việc đó", truth: true,
      why: "Theo Bộ luật Lao động 2019; với việc phục vụ, bán hàng, thử việc không quá sáu ngày làm việc. Làm thật thì lương thật.",
      lines: [
        L("l1", "det", "A trial period is paid, at least eighty five percent of the job's pay. True or false?", "Thử việc vẫn có lương, ít nhất tám mươi lăm phần trăm. Đúng hay sai?"),
        L("l2", "det", "True. Real work means real pay, even on trial.", "Đúng. Làm thật thì lương thật, kể cả lúc thử việc.", { face: "happy" }),
      ],
    },
  },
  "HOST-03": {
    thuong: { n: 2, of: 4, title: "Ca làm, đổi ca, cắt ca", lines: [L("l1", "det", "Part two: shifts, swaps, and cuts.", "Phần hai: ca làm, đổi ca, cắt ca.")] },
    dai: { n: 4, of: 4, title: "Giấy tờ: đưa gì, giữ gì, nhắn lại để nhớ", lines: [L("l1", "det", "Last part: which papers to give, which to keep, and a message to remember it all.", "Phần cuối: giấy tờ đưa gì, giữ gì, và một tin nhắn để nhớ.")] },
  },
  "END-05": {
    thuong: {
      text: "Bốn mươi câu hỏi đang chờ bạn", sub: "Nghe câu hỏi tiếng Anh, chọn đáp án đúng",
      lines: [L("l1", "det", "Your turn. Forty questions are waiting below.", "Đến lượt bạn. Bốn mươi câu hỏi đang chờ ngay bên dưới.")],
    },
    dai: {
      text: "Bốn mươi câu hỏi để tập hỏi rõ lương, ca và giấy tờ trước ngày đầu", sub: "Nghe câu hỏi tiếng Anh, chọn một trong ba đáp án, rồi đọc giải thích",
      lines: [
        L("l1", "det", "Now practise. Forty questions on pay, shifts and papers.", "Giờ tập nhé: bốn mươi câu về lương, ca và giấy tờ."),
        L("l2", "det", "Listen, choose, and close the ring!", "Nghe, chọn, và khép vòng nào!", { face: "laugh" }),
      ],
    },
  },
};
