// Dữ liệu mẫu cho modules/text2.jsx: mỗi mã có thuong và dai
// Chữ lấy từ bài: new-runners/how-to-start-running-from-zero, workplace-problem-solvers/five-whys-root-cause-analysis,
// grammar-relearners/when-to-use-the-present-perfect, english-interview-candidates/english-phrases-to-buy-time-in-an-interview.
export const SAMPLES_TEXT2 = {
  "TEXT-02": {
    thuong: { text: "Chạy chậm không xấu, bỏ cuộc mới tiếc.", keywords: ["Chạy chậm", "bỏ cuộc"], illus: "person-running" },
    dai: {
      text: "Mười ngày nghỉ không xoá hết những gì bạn đã tập. Một buổi ngắn, nhẹ hơn mức cũ giúp chân quen lại mà không đau.",
      keywords: ["không xoá hết", "Một buổi ngắn"], illus: "running-shoe", kicker: "Lời giải",
    },
  },
  "TEXT-03": {
    thuong: { text: "Mỏi thì nghỉ ngơi, nhói thì đi khám.", illus: "adhesive-bandage" },
    dai: { text: "Mình đã xử lý tạm xong, giờ mình tìm xem vì sao nó cứ lặp lại nhé.", label: "Câu nói trong cuộc họp", illus: "speech-balloon" },
  },
  "TEXT-06": {
    thuong: {
      term: "since", ipa: "/sɪns/", pos: "giới từ",
      meaning: "Đi với một mốc thời gian, việc vẫn kéo dài đến nay",
      example: "I've worked here since 2020.", illus: "spiral-calendar",
    },
    dai: {
      term: "present perfect", ipa: "/ˌprez.ənt ˈpɜː.fɪkt/", pos: "thì",
      meaning: "Nối một việc trong quá khứ với hiện tại, không nói rõ việc đó xảy ra lúc nào",
      example: "I've sent you the contract.", mark: "I've sent", illus: "envelope-with-arrow", kicker: "Ngữ pháp",
    },
  },
  "TEXT-07": {
    thuong: {
      en: "Let me think about that for a moment.",
      vi: "Cho tôi suy nghĩ về điều đó một chút.",
      chunks: [
        { en: "Let me think", vi: "cho tôi nghĩ" },
        { en: "about that", vi: "về điều đó" },
        { en: "for a moment.", vi: "một chút" },
      ],
      illus: "man-office-worker",
    },
    dai: {
      en: "If I understand correctly, you'd like an example of a time I missed a deadline.",
      vi: "Nếu tôi hiểu đúng, anh/chị muốn nghe một ví dụ về lần tôi trễ hạn.",
      chunks: [
        { en: "If I understand correctly,", vi: "nếu tôi hiểu đúng" },
        { en: "you'd like an example", vi: "anh/chị muốn một ví dụ" },
        { en: "of a time", vi: "về một lần" },
        { en: "I missed a deadline.", vi: "tôi trễ hạn" },
      ],
      illus: "woman-office-worker", kicker: "Nhắc lại câu hỏi",
    },
  },
};
