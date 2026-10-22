// data/videos.js — NỘI DUNG của từng video (mỗi object = 1 video = 1 Composition).
// Chỉ cần sửa/thêm object ở đây. Field không khai báo → lấy mặc định trong templates/<Txx>/config.js.
// template: "T01" (mặc định). Override style 1 video: style: { HEAD: { fontSize: 90 } }
// Được chuyển 1-1 từ CSK001/data_Front_001.json (arr4, ADD_MODEOBJ000).

export const VIDEOS = [
  [
    {
      subject: "CÓ TIỀN LÀ CÓ THỂ MỞ CÔNG TY KHÔNG?",
      detail:
        "Không hẳn. Có tiền chỉ là một điều kiện về nguồn lực, chưa có nghĩa là bạn có thể lập công ty và kinh doanh ngay. Trước khi bắt đầu, cần xác định kinh doanh gì, ai kinh doanh, chọn mô hình nào, hoạt động ở đâu và ngành nghề đó có điều kiện đặc biệt hay không. Đặc biệt, có đăng ký doanh nghiệp không đồng nghĩa với việc được tự động thực hiện mọi hoạt động kinh doanh.",
      subjectTable: "5 điều nên kiểm tra trước khi mở công ty",
      "tb-01": "Nội dung",
      "tb-02": "Câu hỏi cần trả lời",
      "tb-03": "Vì sao cần biết?",
      "tb-04": "Có thể dẫn đến",
      notice:
        "Nhớ rằng: Mở được công ty và được phép thực hiện một hoạt động kinh doanh cụ thể là hai vấn đề khác nhau.",
    },
    {
      subject: null,
      detail: null,
      subjectTable: null,
      "tb-01": "Người kinh doanh",
      "tb-02": "Một người hay nhiều người?",
      "tb-03": "Xác định quyền sở hữu và quản lý",
      "tb-04": "Chọn loại hình phù hợp",
      notice: null,
    },
    {
      subject: null,
      detail: null,
      subjectTable: null,
      "tb-01": "Ngành nghề",
      "tb-02": "Công ty sẽ kinh doanh gì?",
      "tb-03": "Mỗi ngành có yêu cầu khác nhau",
      "tb-04": "Điều kiện/giấy phép",
      notice: null,
    },
    {
      subject: null,
      detail: null,
      subjectTable: null,
      "tb-01": "Mô hình",
      "tb-02": "Cá nhân, hộ kinh doanh hay công ty?",
      "tb-03": "Cơ chế pháp lý khác nhau",
      "tb-04": "Quyền và trách nhiệm khác nhau",
      notice: null,
    },
    {
      subject: null,
      detail: null,
      subjectTable: null,
      "tb-01": "Vốn & tài sản",
      "tb-02": "Có bao nhiêu vốn, tài sản nào?",
      "tb-03": "Xác định nguồn lực và nghĩa vụ góp vốn",
      "tb-04": "Vốn điều lệ, góp vốn",
      notice: null,
    },
    {
      subject: null,
      detail: null,
      subjectTable: null,
      "tb-01": "Hoạt động thực tế",
      "tb-02": "Sau khi đăng ký còn phải làm gì?",
      "tb-03": "Đăng ký công ty chưa phải là hoàn tất",
      "tb-04": "Thuế, hợp đồng, lao động, giấy phép...",
      notice: null,
    },
  ],
  [
    {
      subject: "KINH DOANH NHỎ CÓ NHẤT THIẾT PHẢI THÀNH LẬP CÔNG TY KHÔNG?",
      detail:
        "Không nhất thiết. Việc bạn kinh doanh nhỏ hay lớn không tự động quyết định phải thành lập công ty. Quan trọng là xác định bạn đang kinh doanh dưới hình thức nào, quy mô và ngành nghề ra sao, có thuộc trường hợp phải đăng ký hay phải đáp ứng điều kiện chuyên ngành hay không. Chọn đúng mô hình ngay từ đầu giúp giảm chi phí và tránh phải thay đổi khi hoạt động phát triển.",
      subjectTable: "Cá nhân, hộ kinh doanh hay doanh nghiệp?",
      "tb-01": "Tiêu chí",
      "tb-02": "Cá nhân kinh doanh",
      "tb-03": "Hộ kinh doanh",
      "tb-04": "Công ty",
      notice:
        "Đừng chọn mô hình chỉ vì “ai cũng làm như vậy”. Hãy bắt đầu từ câu hỏi: Tôi kinh doanh gì, quy mô thế nào, có bao nhiêu người cùng tham gia và tôi muốn phát triển đến đâu?",
    },
    {
      subject: null,
      detail: null,
      subjectTable: null,
      "tb-01": "Quy mô",
      "tb-02": "Thường nhỏ, đơn giản",
      "tb-03": "Phù hợp hoạt động kinh doanh quy mô nhỏ/vừa",
      "tb-04": "Phù hợp khi muốn tổ chức và mở rộng",
      notice: null,
    },
    {
      subject: null,
      detail: null,
      subjectTable: null,
      "tb-01": "Chủ thể",
      "tb-02": "Cá nhân",
      "tb-03": "Chủ hộ kinh doanh",
      "tb-04": "Công ty và chủ sở hữu/thành viên/cổ đông",
      notice: null,
    },
    {
      subject: null,
      detail: null,
      subjectTable: null,
      "tb-01": "Quản lý",
      "tb-02": "Đơn giản",
      "tb-03": "Tương đối đơn giản",
      "tb-04": "Có cơ cấu quản trị rõ hơn",
      notice: null,
    },
    {
      subject: null,
      detail: null,
      subjectTable: null,
      "tb-01": "Mở rộng & huy động vốn",
      "tb-02": "Hạn chế",
      "tb-03": "Hạn chế hơn công ty",
      "tb-04": "Có nhiều cơ chế huy động và chuyển nhượng hơn",
      notice: null,
    },
    {
      subject: null,
      detail: null,
      subjectTable: null,
      "tb-01": "Cần quan tâm",
      "tb-02": "Nghĩa vụ đăng ký và điều kiện hoạt động",
      "tb-03": "Đăng ký, thuế và điều kiện kinh doanh",
      "tb-04": "Đăng ký, quản trị, thuế, hợp đồng và tuân thủ",
      notice: null,
    },
  ],
  [
    {
      subject: "MỞ CÔNG TY RỒI CÓ ĐƯỢC KINH DOANH NGAY KHÔNG?",
      detail:
        "Không phải lúc nào cũng được. Đăng ký thành lập doanh nghiệp giúp hình thành tư cách pháp lý của doanh nghiệp, nhưng một số ngành nghề còn yêu cầu doanh nghiệp phải đáp ứng điều kiện hoặc có giấy phép trước khi hoạt động. Vì vậy, trước khi mở công ty, cần kiểm tra cả “đăng ký được không?” và “sau khi đăng ký đã được làm chưa?”",
      subjectTable: "Đăng ký doanh nghiệp và quyền kinh doanh có gì khác nhau?",
      "tb-01": "Bước",
      "tb-02": "Câu hỏi cần kiểm tra",
      "tb-03": "Ví dụ",
      notice:
        "Đừng nhầm “có công ty” với “được kinh doanh mọi thứ”. Trước khi bỏ tiền đầu tư, hãy xác định hoạt động cụ thể → điều kiện → giấy phép → điều kiện duy trì.",
    },
    {
      subject: null,
      detail: null,
      subjectTable: null,
      "tb-01": "1. Thành lập",
      "tb-02": "Doanh nghiệp đã được đăng ký chưa?",
      "tb-03": "Giấy chứng nhận đăng ký doanh nghiệp",
      notice: null,
    },
    {
      subject: null,
      detail: null,
      subjectTable: null,
      "tb-01": "2. Ngành nghề",
      "tb-02": "Hoạt động dự kiến thuộc ngành nào?",
      "tb-03": "Y tế, giáo dục, xây dựng, thương mại...",
      notice: null,
    },
    {
      subject: null,
      detail: null,
      subjectTable: null,
      "tb-01": "3. Điều kiện",
      "tb-02": "Ngành đó có điều kiện kinh doanh không?",
      "tb-03": "Điều kiện về vốn, nhân sự, cơ sở vật chất...",
      notice: null,
    },
    {
      subject: null,
      detail: null,
      subjectTable: null,
      "tb-01": "4. Giấy phép",
      "tb-02": "Có cần giấy phép/chứng nhận chuyên ngành trước khi hoạt động?",
      "tb-03": "Tùy từng lĩnh vực",
      notice: null,
    },
    {
      subject: null,
      detail: null,
      subjectTable: null,
      "tb-01": "5. Vận hành",
      "tb-02": "Sau khi được phép, có phải duy trì điều kiện không?",
      "tb-03": "Nhân sự, cơ sở, thiết bị, báo cáo...",
      notice: null,
    },
  ],
];

// Metadata xuất file (giữ từ CSK001: INDEXFolder / INDEXName)
export const OUTPUT = { folder: "MKTENDinhVi", namePrefix: "MKTENDinhVi_" };

export default VIDEOS;
