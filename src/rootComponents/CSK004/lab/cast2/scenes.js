// scenes.js — cảnh thử ba vai mới (#110): mỗi vai ≥ 2 bối cảnh, đứng cạnh vai cũ, có bong bóng thoại + DLG-01.
// Bin cạnh Bác Bình (park, home) · Bà Tư cạnh Cô Hoa (shop, kitchen) · Sam cạnh Thảo (meeting, online) · DLG-01 (home, meeting).
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export const CAST2_SCENES = {
  "bin-park": { module: "SCENE-01", data: { set: "park", label: "Đi bộ buổi sáng", actors: [{ id: "binh", side: "left" }, { id: "bin", side: "right" }] },
    lines: [
      L("l1", "bin", "Grandpa, why do you walk every morning?", "Ông ơi, sao sáng nào ông cũng đi bộ ạ?", { face: "thinking", to: "binh" }),
      L("l2", "binh", "Walking keeps my heart strong.", "Đi bộ giúp tim ông khoẻ đấy cháu.", { face: "happy", pose: "explain" }),
      L("l3", "bin", "Can I come with you tomorrow?", "Mai cháu đi cùng ông nhé!", { face: "happy", pose: "wave" }),
    ] },
  "bin-home": { module: "SCENE-01", data: { set: "home", actors: [{ id: "bin", side: "left", pose: "phone" }, { id: "binh", side: "center" }, { id: "lan", side: "right" }] },
    lines: [
      L("l1", "bin", "Grandpa, this game asks for your password.", "Ông ơi, trò chơi này đòi mật khẩu của ông.", { face: "worried" }),
      L("l2", "binh", "Wait. Let us check it together first.", "Từ từ, hai ông cháu xem lại đã.", { pose: "stop", to: "bin" }),
    ] },
  "tu-shop": { module: "SCENE-01", data: { set: "shop", label: "Khách lớn tuổi", actors: [{ id: "hoa", side: "left", pose: "hold" }, { id: "tu", side: "right", enter: "walk" }] },
    lines: [
      L("l1", "tu", "Can you read this label for me? The letters are too small.", "Cô đọc giúp bà nhãn này với, chữ nhỏ quá.", { face: "worried", pose: "give" }),
      L("l2", "hoa", "Of course. It is low in sugar.", "Dạ, loại này ít đường bà ạ.", { face: "happy", pose: "explain" }),
      L("l3", "tu", "Good. I will take two.", "Vậy bà lấy hai hộp.", { face: "happy" }),
    ] },
  "tu-kitchen": { module: "SCENE-01", data: { set: "kitchen", actors: [{ id: "tu", side: "left" }, { id: "hoa", side: "center" }, { id: "bin", side: "right" }] },
    lines: [
      L("l1", "tu", "Less salt in the soup, for your grandpa.", "Canh bớt muối nhé, cho ông nhà.", { pose: "explain", to: "hoa" }),
      L("l2", "hoa", "Yes, I will use herbs instead.", "Dạ, con nêm rau thơm thay muối.", { face: "happy", to: "tu" }),
      L("l3", "bin", "I can wash the herbs!", "Cháu rửa rau cho!", { face: "happy", pose: "thumb" }),
    ] },
  "sam-meeting": { module: "SCENE-01", data: { set: "meeting", label: "Họp với đối tác", actors: [{ id: "thao", side: "left" }, { id: "sam", side: "right" }] },
    lines: [
      L("l1", "sam", "Thank you for the report. Can we move the deadline to Friday?", "Cảm ơn bản báo cáo. Ta dời hạn sang thứ Sáu được không?", { pose: "explain" }),
      L("l2", "thao", "Friday works. I will send the plan today.", "Thứ Sáu được ạ. Hôm nay em gửi kế hoạch.", { face: "happy", pose: "thumb" }),
    ] },
  "sam-online": { module: "SCENE-01", data: { set: "online", actors: [{ id: "thao", side: "left" }, { id: "sam", side: "center" }, { id: "dung", side: "right" }] },
    lines: [
      L("l1", "sam", "Hi everyone, can you hear me?", "Chào mọi người, nghe rõ tôi không?", { pose: "wave", face: "happy" }),
      L("l2", "thao", "Yes, loud and clear.", "Dạ, nghe rõ ạ.", { face: "happy" }),
    ] },
  "dlg-home": { module: "DLG-01", data: { set: "home", label: "Tình huống",
      actors: [{ id: "tu", side: "left" }, { id: "bin", side: "right", pose: "phone" }],
      verdict: { ok: false, label: "Đọc mã OTP cho người gọi", why: "Ngân hàng không bao giờ gọi xin mã; ai có mã là rút được tiền.", rule: "Không đưa mã OTP cho bất kỳ ai" } },
    lines: [
      L("l1", "bin", "Grandma, a man on the phone asks for the code in your message.", "Bà ơi, chú gọi điện xin mã số trong tin nhắn của bà.", { face: "thinking", to: "tu" }),
      L("l2", "tu", "Then read it to him, dear.", "Thì cháu đọc cho chú ấy đi.", { pose: "explain", stop: true }),
      L("l3", "det", "Wait a second!", "Khoan đã!", { face: "stern" }),
      L("l4", "det", "A bank never calls to ask for that code.", "Ngân hàng không bao giờ gọi xin mã đó.", { face: "worried" }),
      L("l5", "det", "Let us rewind and try another way.", "Tua lại, thử cách khác nhé.", { phase: "redo" }),
      L("l6", "tu", "Do not read it. Hang up, and we will call the bank.", "Đừng đọc. Tắt máy, rồi bà cháu mình gọi ngân hàng.", { phase: "redo", pose: "stop", face: "stern" }),
      L("l7", "bin", "Okay, Grandma!", "Dạ, cháu nghe bà!", { phase: "redo", face: "happy" }),
    ] },
  "dlg-meeting": { module: "DLG-01", data: { set: "meeting", label: "Gặp đối tác",
      actors: [{ id: "sam", side: "left" }, { id: "thao", side: "right" }],
      verdict: { ok: false, label: "Gật đầu khi chưa hiểu", why: "Đối tác tưởng đã thống nhất, sau này dễ làm sai việc." } },
    lines: [
      L("l1", "sam", "So we ship in two batches, with a check after the first. Clear?", "Vậy giao hai đợt, kiểm sau đợt đầu. Rõ chưa?", { pose: "explain" }),
      L("l2", "thao", "Yes, yes. All clear.", "Dạ, dạ, rõ rồi ạ.", { face: "worried", stop: true }),
      L("l3", "det", "Wait a second!", "Khoan đã!"),
      L("l4", "det", "If you are not sure, ask again now.", "Chưa chắc thì hỏi lại ngay.", { face: "thinking" }),
      L("l5", "det", "Let us rewind.", "Tua lại nhé.", { phase: "redo" }),
      L("l6", "thao", "Sorry, could you explain the check once more?", "Xin lỗi, chị nói lại phần kiểm hàng được không ạ?", { phase: "redo", pose: "explain" }),
      L("l7", "sam", "Sure. Good question.", "Được chứ. Hỏi vậy là tốt.", { phase: "redo", face: "happy" }),
    ] },
};
