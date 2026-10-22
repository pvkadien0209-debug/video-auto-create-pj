// data/videos.js — NỘI DUNG của từng video (mỗi object = 1 video = 1 Composition).
// Chỉ cần sửa/thêm object ở đây. Field không khai báo → lấy mặc định trong templates/<Txx>/config.js.
// template: "T01" (mặc định). Override style 1 video: style: { HEAD: { fontSize: 90 } }
// Được chuyển 1-1 từ CSK001/data_Front_001.json (arr4, ADD_MODEOBJ000).

export const VIDEOS = [
  {
    id: "1",
    headline: "4 bước để nhanh có kỹ năng nghe nói tiếng anh",
    detail: "1/ Quan trọng! Học cơ bản 'vừa đủ' để vào thực hành: 'ghép âm', 'tách âm', nghe và trả lời vài câu cơ bản.\n 2/ Thực hiện 'được' các động tác cơ bản như nghe và nói lần đầu 1 vài câu.\n 3/ 'Vượt qua rào cản tâm lý' lười bắt đầu, sợ bị sai. Có công cụ giúp dễ dàng vượt qua hơn.\n 4/ Rèn luyện 'lặp lại' đủ số lần nhất định",
    bgVideo: "kd_vdA1.mp4",
    musicStartFrom: 10, // giây (StartNUMBER)
  },
  {
    id: "2",
    headline: "Muốn nghe nói tiếng anh nhưng có ít thời gian thì:",
    detail: "1/ Đừng học nhiều, hãy học 'cơ bản - vừa đủ'\n2/ Dùng thời gian ít ỏi đó tập trung luyện lập 'nghe nói'\n3/ 'Lặp lại - có phản hồi sửa đổi' là chìa khóa",
    bgVideo: "kd_vdA2.mp4",
    musicStartFrom: 30, // giây (StartNUMBER)
  },
  {
    id: "3",
    headline: "Học 'quá khó' dễ gây cảm giác 'sợ':",
    detail: "1/ Sự thật nghe nói TA không khó \n2/ Người bình thường đều có thể giao tiếp được hằng ngày\n3/ Học quá cao siêu hoặc tiêu chuẩn quá cao => cảm tưởng 'rất khó'",
    bgVideo: "kd_vdA3.mp4",
    musicStartFrom: 50, // giây (StartNUMBER)
  },
  {
    id: "4",
    headline: "44 âm IPA quá phức tạp, nếu bạn thấy thế thì:",
    detail: "1/ Nên bắt đầu với 6 cụm nguyên âm 'UEOAI-ơ' \n2/ Tuy sẽ bớt 'độ chuẩn lại' nhưng ít, dễ học, dễ áp dụng\n3/ Đảm bảo nói được, nghe được trong thời gian ngắn hơn nhiều",
    bgVideo: "kd_videonen001.mp4",
    musicStartFrom: 70, // giây (StartNUMBER)
  },
  {
    id: "5",
    headline: "'44 âm IPA' và 'Ghép âm với UEOAI-ơ'",
    detail: "44 âm IPA đôi lúc sẽ khó cho nhiều bạn\nGhép âm với UEOAI-ơ là phương pháp thu gọn, đơn giản hơn => vẫn đảm bảo độ chuẩn tương đối lại dễ học, dễ áp dụng, nhanh chóng nắm được để thực hành",
    bgVideo: "kd_videonen002.mp4",
    musicStartFrom: 90, // giây (StartNUMBER)
  },
  {
    id: "6",
    headline: "'rào cản thất vọng' khi vừa luyện nghe - nói TA",
    detail: "1/ Trước khi dùng được thì việc 'luyện' sẽ hơi 'chán' \n2/ Cố gắng một thời gian mà vẫn không thấy tiến lên tí nào thì => 'nản', 'bỏ cuộc'\n==> cần 'học vừa đủ', 'rèn luyện ngay', 'cảm nhận sự tiến bộ' để vượt qua 'rào cản'",
    bgVideo: "kd_videonen005.mp4",
    musicStartFrom: 110, // giây (StartNUMBER)
  },
  {
    id: "7",
    headline: "Học 'cơ bản-vừa đủ':",
    detail: "1/ Học một ít => thực hành => có tí thuần thục thì học bổ sung thêm => học quá nhiều sẽ 'ăn' hết thời gian để thực hành + 'nản' vì nhiều thời gian mà không thấy kết quả tiến bộ.",
    bgVideo: "kd_videonen007.mp4",
    musicStartFrom: 130, // giây (StartNUMBER)
  },
  {
    id: "8",
    headline: "'Rào cản' không có chỗ nào để nghe nói",
    detail: "1/ Các công cụ hiện nay hỗ trợ thật tuyệt vời để có chỗ 'nghe nói' đặc biệt còn được 'phản hồi' thời gian thực.\n2/ Rèn luyện có phản hồi là chìa khóa giúp tiến bộ\n3/ rèn mọi lúc mọi nơi không cần đợi ai cả",
    bgVideo: "kd_vdA1.mp4",
    musicStartFrom: 150, // giây (StartNUMBER)
  },
  {
    id: "9",
    headline: "'Rào cản' tâm lý sợ sai, ngại nói trước đám đông",
    detail: "1/ Rất hiển nhiên khi ta chưa 'làm được' thì nói trước ai đó đều rất ngại\n2/ Hãy bắt đầu với công cụ hỗ trợ => rèn lặp tới lui cho quen thuộc thuần thục\n3/ Học viên nhanh chóng từ rào cản 'ngại nói' sẽ sớm biến thành 'muốn có chỗ để nói mà chưa có'",
    bgVideo: "kd_vdA2.mp4",
    musicStartFrom: 170, // giây (StartNUMBER)
  },
  {
    id: "10",
    headline: "'Rào cản' không biết nói gì để mà luyện",
    detail: "1/ Anh ta bảo tôi nói gì đi, nói gì cũng được, nói lên thì mới giỏi được. \n2/ Tôi không biết nói gì …. Không phải tôi không biết tiếng … mà tôi không biết nội dung để nói gì cả … tôi lúng túng và ngại ngùng, tôi chán nản tôi bỏ cuộc\n3/ Việc bắt phải 'nghĩ ra nội dung' cũng là một rào cản, vì vậy nên dùng nội dung có sẵn, đừng nên cố gắng sáng tạo ra nội dung nếu mình không giỏi và không thích chuyện này, đơn giản là ghi nhớ và lặp lại trong trường hợp này đỡ tốn não hơn",
    bgVideo: "kd_vdA3.mp4",
    musicStartFrom: 190, // giây (StartNUMBER)
  },
  {
    id: "11",
    headline: "'Học thật nhiều tự vừng - cấu trúc câu' có cần thiết…",
    detail: "1/Trả lời là có cần, tuy nhiên là ở giai đoạn sau, khi đã rành về âm rồi, tự tin là nghe nói được rồi.\n2/ Chuyển qua mở rộng từ vựng và cấu trúc để mở rộng khả năng diễn đạt trong nhiều hoàn cảnh\n3/ Nếu mới bắt đầu, mất gốc luyện lại từ đầu, có ngữ pháp nhưng không nghe nói được,... thì nên tập trung vào 'lõi' âm thanh trước, luyện nghe nói cơ bản, đơn giản trước, xong rồi thì muốn gì thì lại triển khai luyện tiếp. Thời gian là có hạn, hãy tập trung vào LÕI.",
    bgVideo: "kd_videonen001.mp4",
    musicStartFrom: 210, // giây (StartNUMBER)
  },
];

// Metadata xuất file (giữ từ CSK001: INDEXFolder / INDEXName)
export const OUTPUT = { folder: "MKTENDinhVi", namePrefix: "MKTENDinhVi_" };

export default VIDEOS;
