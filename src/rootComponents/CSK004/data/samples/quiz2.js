// Dữ liệu mẫu cho modules/quiz2.jsx: mỗi mã có thuong và dai
// Câu hỏi, đáp án và giải thích lấy từ questions[] của các bài: correlation-vs-causation,
// how-to-decide-without-enough-information, conditional-sentences-explained, common-logical-fallacies,
// how-to-rent-a-safe-room.
export const SAMPLES_QUIZ2 = {
  "QUIZ-03": {
    thuong: {
      statement: "Ice cream sales and drowning both rise in summer because hot weather makes people buy ice cream and swim more.",
      truth: true,
      why: "Trời nóng là yếu tố thứ ba tác động lên cả hai. Kem không gây đuối nước.",
      countdown: 5,
    },
    dai: {
      statement: "Waiting for complete information is always safe, since nobody can blame you for a decision not made.",
      truth: false,
      why: "Chờ mãi là đang chọn “không làm gì” mà không cân nhắc nó. Trong lúc chờ, cơ hội đi mất hoặc vấn đề tự lớn lên.",
      countdown: 7,
    },
  },
  "QUIZ-05": {
    thuong: {
      sentence: "If the client ___ the design, we'll start production next week.",
      blank: "approves",
      options: ["approved", "approves", "will approve"],
      why: "Vế if của loại 1 dùng hiện tại đơn, kể cả khi nói về tương lai. Will thuộc về vế kết quả.",
      countdown: 5,
    },
    dai: {
      sentence: "If I had known about the traffic, I ___ the metro to the meeting.",
      blank: "would have taken",
      options: ["will take tomorrow", "had taken", "would have taken"],
      why: "Loại 3 dùng had cộng quá khứ phân từ ở vế if và would have ở vế kết quả. Hai đáp án còn lại trộn sai các thì nên không diễn tả được sự tiếc nuối.",
      countdown: 7,
    },
  },
  "QUIZ-06": {
    thuong: {
      q: "Match each conditional to what it means",
      pairs: [
        { left: "Really possible", right: "If I get the job, I'll move to Da Nang" },
        { left: "Imagined now", right: "If I had a bigger budget, I would hire two more people" },
        { left: "Missed in the past", right: "If I'd known, I'd have called you" },
      ],
      why: "Càng xa thực tế, động từ càng lùi về quá khứ.",
      countdown: 6,
    },
    dai: {
      q: "Match each fallacy to the reply that shows it",
      pairs: [
        { left: "Attack on the person", right: "Your idea is wrong because you are young" },
        { left: "Straw man", right: "You say use the phone less, so you want to ban phones" },
        { left: "False choice", right: "Either share this or you do not love your children" },
      ],
      why: "Công kích cá nhân chê người nói, người rơm bóp méo ý, lựa chọn giả chỉ đưa ra hai cửa.",
      countdown: 7,
    },
  },
  "QUIZ-07": {
    thuong: {
      q: "Order them from really possible, to imagined, to missed",
      items: [
        "If I had got the job, I would have moved to Da Nang",
        "If I get the job, I'll move to Da Nang",
        "If I got the job, I would move to Da Nang",
      ],
      order: [1, 2, 0],
      why: "Đang chờ kết quả, nghĩ khả năng thấp, rồi đã trượt: mức độ có thật giảm dần.",
      countdown: 6,
    },
    dai: {
      q: "Put these steps for renting a room in the right order",
      items: [
        "Read the contract and get a receipt for the deposit",
        "Start looking about one month before school starts",
        "Take photos of the room and the meters on move-in day",
        "Visit the room in the daytime and again in the evening",
      ],
      order: [1, 3, 0, 2],
      why: "Tìm sớm, xem tận mắt cả ngày lẫn tối, có giấy tờ rồi mới dọn vào và chụp ảnh ngày nhận phòng.",
      countdown: 7,
    },
  },
  "QUIZ-09": {
    thuong: {
      question: "Which is a stronger reason to buy a product, many users or independent test results?",
      options: [
        { text: "Many users", illus: "busts-in-silhouette" },
        { text: "Independent test results", illus: "test-tube" },
      ],
      countdown: 5,
    },
    dai: {
      question: "How should you compare a cheap room far away with a pricier room near school?",
      options: [
        { text: "Add travel money and travel time to each rent, then compare the real totals", illus: "money-bag" },
        { text: "Always pick the cheaper rent, since travel costs are too small to think about", illus: "house" },
        { text: "Always pick the nearest room, even if the rent leaves no money for food", illus: "school" },
      ],
      countdown: 7,
    },
  },
};
