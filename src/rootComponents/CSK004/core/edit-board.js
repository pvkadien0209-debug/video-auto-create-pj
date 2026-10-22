// edit-board.js — #144 (agent C) danh mục biến thể cho BOARD-01: kiểu khung ảnh (E-FR), kiểu ghi chú (E-NOTE), kiểu nền bảng (E-BD).
// Phần vẽ nằm trong modules/board.jsx; tệp này chỉ là danh mục (core/edit.js gom lại). Không ghi gì → y như cũ (mã -01).

export const EDIT_FRAME = [
  { id: "E-FR-01", name: "Viền tay vẽ", how: 'item vignette: frame "E-FR-01" (mặc định, không cần ghi)', enter: "nét viền vẽ quanh, cảnh hiện dần" },
  { id: "E-FR-02", name: "Ảnh polaroid có băng dính", how: 'item vignette: frame: "E-FR-02" — chú thích nằm trong dải trắng dưới ảnh', enter: "ảnh rơi xuống bảng, nghiêng nhẹ, ảnh “hiện màu”, băng dính dán sau" },
  { id: "E-FR-03", name: "Màn hình TV", how: 'item vignette: frame: "E-FR-03" (vỏ TV cũ, núm vặn bên phải; chiếm thêm ~70 px bên phải)', enter: "bật TV: vạch sáng nở dọc rồi lộ cảnh, có vằn quét" },
  { id: "E-FR-04", name: "Điện thoại (nằm ngang)", how: 'item vignette: frame: "E-FR-04"', enter: "điện thoại trượt lên, xoay về ngang, màn hình sáng dần" },
  { id: "E-FR-05", name: "Laptop", how: 'item vignette: frame: "E-FR-05" (thêm đế bàn phím ~40 px phía dưới — chừa chỗ)', enter: "nắp laptop mở lên, màn hình sáng" },
  { id: "E-FR-06", name: "Khung tròn (bầu dục)", how: 'item vignette: frame: "E-FR-06"', enter: "mống mắt mở từ tâm, vòng tay vẽ quanh" },
  { id: "E-FR-07", name: "Giấy xé mép", how: 'item vignette: frame: "E-FR-07"', enter: "mảnh giấy xé đập vào bảng từ bên trái, có mẩu băng dính" },
  { id: "E-FR-08", name: "Dải phim", how: 'item vignette: frame: "E-FR-08" (dải lỗ phim chiếm thêm ~30 px trên/dưới)', enter: "dải phim kéo từ phải sang, nhấp nháy như máy chiếu" },
  { id: "E-FR-09", name: "Ô truyện tranh", how: 'item vignette: frame: "E-FR-09" — chú thích vào ô vàng ở góc trên trái', enter: "bật ra có nảy, loé trắng" },
  { id: "E-FR-10", name: "Cửa sổ trình duyệt", how: 'item vignette: frame: "E-FR-10", url?: "detpro.vn/…" (cảnh thu vào khung video, viền đen hai bên)', enter: "cửa sổ mở ra, thanh tải chạy rồi lộ cảnh" },
];

export const EDIT_NOTE = [
  { id: "E-NOTE-01", name: "Bút dạ viết tay", how: 'item text/illus: style "E-NOTE-01" (mặc định)' },
  { id: "E-NOTE-02", name: "Giấy nhớ dán", how: 'item text/illus: style: "E-NOTE-02", paper?: "#fff27a" — tờ giấy vàng bật ra, nghiêng nhẹ, chữ viết lên' },
  { id: "E-NOTE-03", name: "Con dấu đóng", how: 'item text/illus: style: "E-NOTE-03" — chữ in hoa trong viền dấu, đập xuống (màu coral nếu không ghi color)' },
  { id: "E-NOTE-04", name: "Bút highlight quét", how: 'item text: style: "E-NOTE-04", hlColor?: "#hex" (mặc định vàng) — dải dạ quang quét trước, chữ mực tối viết theo sau' },
  { id: "E-NOTE-05", name: "Chữ phấn", how: 'item text: style: "E-NOTE-05" — nét phấn lấm tấm, hiện giật theo nhịp 12 hình/giây (hợp bảng đen/xanh)' },
  { id: "E-NOTE-06", name: "Chữ đánh máy", how: 'item text: style: "E-NOTE-06" — dải giấy nhãn, chữ máy gõ từng ký tự có con trỏ (rộng hơn chữ tay ~35%)' },
  { id: "E-NOTE-07", name: "Bong bóng chú thích có đường dẫn", how: 'item text/illus: style: "E-NOTE-07", to: "<id khung ảnh/món>" | [x, y], toAt?: [fx, fy] (vị trí trong khung, mặc định [0.5, 0.5]) — bong bóng + dây chỉ vào nhân vật/đồ vật' },
  { id: "E-NOTE-08", name: "Dải lower-third kiểu Vox (lúc cận)", how: 'scene.data.closeNote: "E-NOTE-08" (hoặc style trên ghi chú) — ghi chú lúc camera cận khung ảnh hiện thành dải dưới màn, không dời camera; trên bảng: nhãn dải có vạch màu' },
  { id: "E-NOTE-09", name: "Thẻ đè góc màn (lúc cận)", how: 'scene.data.closeNote: "E-NOTE-09" — thẻ bật ra ở góc trên phía chỗ ghi thật; trên bảng: thẻ có vạch màu trên' },
  { id: "E-NOTE-10", name: "Bút dạ trên mặt kính (lúc cận)", how: 'scene.data.closeNote: "E-NOTE-10" — kính mờ phủ cảnh, chữ viết thẳng lên kính (có quầng cho dễ đọc) bên phía chỗ ghi thật' },
];
// chế độ ghi chú lúc cận: mặc định "thirds" (#143d: khung ảnh dồn 1/3, chữ ở 2/3). Ghi tên ngắn cũng được.
export const CLOSE_NOTE = { thirds: "thirds", lower3: "lower3", corner: "corner", glass: "glass", "E-NOTE-08": "lower3", "E-NOTE-09": "corner", "E-NOTE-10": "glass" };

// frame = đề xuất cho khung bảng PanelFrame (core/presenter.jsx, agent A): màu viền + khay
export const EDIT_BOARD = [
  { id: "E-BD-01", name: "Bảng trắng", how: 'script.boards[id].style: "E-BD-01" (mặc định) · đổi theo cảnh: scene.edit.board hoặc scene.data.style', dark: false, frame: { border: "#d5dbe3", outline: "#b9c1cc", tray: "#c4cbd4" } },
  { id: "E-BD-02", name: "Bảng đen phấn", how: 'style: "E-BD-02" — mực tự đổi sang phấn trắng, tay Đét cầm phấn', dark: true, frame: { border: "#7a5634", outline: "#5a3d22", tray: "#6b4a2b" } },
  { id: "E-BD-03", name: "Bảng ghim bần (corkboard)", how: 'style: "E-BD-03" — hợp với giấy nhớ (E-NOTE-02) và polaroid (E-FR-02)', dark: false, frame: { border: "#8a6a45", outline: "#6d5032", tray: "#7b5c3a" } },
  { id: "E-BD-04", name: "Giấy kẻ ô vở", how: 'style: "E-BD-04" — ô ly tím kiểu vở học sinh, lề đỏ mỗi ô', dark: false, frame: { border: "#e7e3f3", outline: "#c9c1e6", tray: "#d7d1ee" } },
  { id: "E-BD-05", name: "Giấy kraft", how: 'style: "E-BD-05" — giấy gói nâu có thớ', dark: false, frame: { border: "#a88555", outline: "#8a6a40", tray: "#9a7848" } },
  { id: "E-BD-06", name: "Bản vẽ xanh (blueprint)", how: 'style: "E-BD-06" — lưới trắng mờ, mực trắng', dark: true, frame: { border: "#2c5f9e", outline: "#173f70", tray: "#244f85" } },
  { id: "E-BD-07", name: "Bảng kính tối", how: 'style: "E-BD-07" — kính đen có vệt phản chiếu, mực sáng có quầng', dark: true, frame: { border: "#2a323c", outline: "#11161c", tray: "#1f262e" } },
  { id: "E-BD-08", name: "Sổ tay gáy lò xo", how: 'style: "E-BD-08" — mỗi ô là một trang sổ dòng kẻ có gáy lò xo, nền bàn gỗ', dark: false, frame: { border: "#9b7046", outline: "#7a5434", tray: "#8a603c" } },
  { id: "E-BD-09", name: "Giấy lưới chấm", how: 'style: "E-BD-09" — lưới chấm xám kiểu bullet journal', dark: false, frame: { border: "#e3e5ea", outline: "#c6cad2", tray: "#d3d7de" } },
  { id: "E-BD-10", name: "Bảng xanh lá", how: 'style: "E-BD-10" — bảng phấn xanh lớp học, mực phấn', dark: true, frame: { border: "#8a6440", outline: "#6a4a2c", tray: "#7a5636" } },
];

export const FRAME_IDS = new Set(EDIT_FRAME.map((x) => x.id));
export const NOTE_IDS = new Set(EDIT_NOTE.map((x) => x.id));
export const BOARD_IDS = new Set(EDIT_BOARD.map((x) => x.id));
