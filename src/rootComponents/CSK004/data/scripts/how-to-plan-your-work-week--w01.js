// Kịch bản video W lần 3 (#110) — "Lập kế hoạch tuần như thế nào cho người đi làm?" · chuỗi "Quản lý thời gian và sắp xếp ưu tiên"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub). Mở đầu hoạt hình từ 📌 chuyện của Ngân (p13): chi tiết bị bỏ qua là khối giờ trống không tên.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-plan-your-work-week--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "busy-workers",
    "slug": "how-to-plan-your-work-week",
    "door": "ky-nang",
    "level": "B1",
    "title": "Lập kế hoạch tuần như thế nào cho người đi làm?",
    "series": "Quản lý thời gian và sắp xếp ưu tiên"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN của Cô Hoa, trưởng phòng kinh doanh (Chủ nhật làm bù, Bé Bin rủ đi chơi → thứ Sáu 15:30 ba mươi phút → 15:45 ba kết quả → 16:00 lịch tuần sau → 16:15 hai hạn trùng, nhắn Bác Bình → “Khoan đã!” thứ Hai 9:00 Dũng đặt họp vào khối trống → thứ Tư việc gấp → thứ Sáu tuần sau khối việc tồn → Chủ nhật công viên với Bé Bin). Nhân vật (mạch chủ đề w145/_series/busy-workers.md): Cô Hoa (gộp Ngân p13, người trùng hạn p15–p16, chị Hằng p21 và người điều phối dự án p8), Dũng (đồng nghiệp đặt họp p13), Bé Bin (con chị Hằng p21); Bác Bình chỉ được nhắc. Cảnh ngắt nhịp: BRK-08 nhìn cả tuần (p2), BRK-02 “Đo tuần bằng thứ đã xong” (p9), BRK-07 “chắc cố được” (p16). Khép vòng: “Việc hôm nay chớ để ngày mai” → việc tuần này xong tuần này. Bản cũ (W lần 3, #110): w145/bak/how-to-plan-your-work-week--w01.js.",
  "narrator": "det",
  "presenter": {
    "side": "left"
  },
  "boards": {
    "bang-trang": {
      "size": [
        9600,
        1860
      ],
      "hand": "det-paw",
      "font": "hand",
      "frames": {
        "A": [
          0,
          0,
          1728,
          770
        ],
        "B": [
          1968,
          0,
          1728,
          770
        ],
        "C": [
          3936,
          0,
          1728,
          770
        ],
        "D": [
          5904,
          0,
          1728,
          770
        ],
        "E": [
          7872,
          0,
          1728,
          770
        ],
        "F": [
          0,
          1090,
          1728,
          770
        ],
        "G": [
          1968,
          1090,
          1728,
          770
        ],
        "H": [
          3936,
          1090,
          1728,
          770
        ],
        "I": [
          5904,
          1090,
          1728,
          770
        ],
        "J": [
          7872,
          1090,
          1728,
          770
        ]
      }
    }
  },
  "scenes": [
    {
      "id": "s00",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "A",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-30",
            "t": "text",
            "text": "30 phút",
            "x": 60,
            "y": 110,
            "size": 170,
            "at": "l1:thirty",
            "color": "accent",
            "hl": [
              {
                "text": "30 phút",
                "at": "l1:minutes"
              }
            ]
          },
          {
            "id": "a-fri",
            "t": "text",
            "text": "chiều thứ Sáu · 3 kết quả",
            "x": 70,
            "y": 330,
            "size": 56,
            "at": "l1:Friday"
          },
          {
            "id": "a-wk",
            "t": "text",
            "text": "Ta quen: cuối tuần ôm máy",
            "x": 70,
            "y": 440,
            "size": 50,
            "at": "l2:weekend",
            "color": "muted"
          },
          {
            "id": "a-wkx",
            "t": "strike",
            "over": "a-wk",
            "at": "l2:laptop+400"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thirty minutes on Friday afternoon. Three results for next week.",
          "sub": "Ba mươi phút chiều thứ Sáu. Ba kết quả cho tuần sau.",
          "keys": [
            "Ba mươi phút",
            "Ba kết quả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That small habit can give you back your weekend, and your laptop a rest.",
          "sub": "Thói quen nhỏ ấy trả lại cho bạn cuối tuần, và cho cái máy tính được nghỉ.",
          "keys": [
            "trả lại cho bạn cuối tuần"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s01",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "A",
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "phone",
                  "face": "worried",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "bin",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Chủ nhật tuần trước",
            "icon": "laptop"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Việc hôm nay chớ để ngày mai”",
            "x": 60,
            "y": 560,
            "size": 50,
            "at": "l5:today",
            "color": "accent",
            "hl": [
              {
                "text": "chớ để ngày mai",
                "at": "l5:tomorrow"
              }
            ]
          },
          {
            "id": "a-sun",
            "t": "text",
            "text": "Cô Hoa: việc tuần để… Chủ nhật",
            "x": 60,
            "y": 660,
            "size": 44,
            "at": "l6:Sunday",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Cô Hoa.",
          "sub": "Đây là Cô Hoa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sales manager, mum, and the person whose calendar everyone else fills.",
          "sub": "Trưởng phòng kinh doanh, một bà mẹ, và là người có cái lịch ai cũng điền giúp.",
          "keys": [
            "ai cũng điền giúp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "Mum, can we go out this Sunday?",
          "sub": "Mẹ ơi, Chủ nhật mình đi chơi nhé?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Clients sent more edits, sweetie. Next week, okay?",
          "sub": "Khách gửi thêm phần sửa rồi con. Tuần sau nhé?",
          "face": "sad",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The old saying goes: never leave today's work for tomorrow.",
          "sub": "Ông bà dặn: “Việc hôm nay chớ để ngày mai.”",
          "keys": [
            "Việc hôm nay chớ để ngày mai"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Cô Hoa's version: leave the whole week's work for Sunday.",
          "sub": "Phiên bản của Cô Hoa: việc cả tuần để dành cho Chủ nhật."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s02",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "A",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "B",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "b-q",
            "t": "text",
            "text": "Lập kế hoạch tuần thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:week",
            "hl": [
              {
                "text": "kế hoạch tuần",
                "at": "l1:week"
              }
            ]
          },
          {
            "id": "b-day",
            "t": "text",
            "text": "Nhìn từng ngày → luôn chọn việc gấp",
            "x": 2028,
            "y": 160,
            "size": 44,
            "at": "l2:day",
            "color": "muted"
          },
          {
            "id": "b-ws",
            "t": "text",
            "text": "Việc 3–4 buổi: hội thảo, quy trình",
            "x": 2028,
            "y": 240,
            "size": 44,
            "at": "l3:sessions"
          },
          {
            "id": "b-late",
            "t": "text",
            "text": "→ chẳng bao giờ “gấp”… đến khi muộn",
            "x": 2028,
            "y": 310,
            "size": 42,
            "at": "l3:late",
            "color": "coral",
            "hl": [
              {
                "text": "đến khi muộn",
                "at": "l3:late"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you plan a week, so big work actually gets done?",
          "sub": "Vậy lên kế hoạch tuần thế nào để việc lớn thật sự xong?",
          "keys": [
            "việc lớn thật sự xong"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Look day by day, and you always pick today's urgent stuff.",
          "sub": "Nhìn từng ngày, bạn luôn chọn việc gấp của hôm nay."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Work that needs three or four sessions, like a workshop or a new process, is never urgent. Until it's too late.",
          "sub": "Việc cần ba bốn buổi, như hội thảo hay quy trình mới, chẳng bao giờ “gấp”. Cho đến khi quá muộn.",
          "keys": [
            "quá muộn"
          ]
        }
      ],
      "ref": "intro,p1"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Nhìn cả tuần",
        "points": [
          {
            "label": "Thứ Ba",
            "sub": "Kín họp, khó viết",
            "illus": "busts-in-silhouette"
          },
          {
            "label": "Thứ Tư",
            "sub": "Xong phần chính",
            "illus": "check-mark-button"
          },
          {
            "label": "Sáng thứ Năm",
            "sub": "Trống: việc khó",
            "illus": "sunrise"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Hạn nộp",
            "illus": "spiral-calendar"
          }
        ],
        "current": 2
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tuesday, meetings. Thursday morning, free for the hard task.",
          "sub": "Thứ Ba kín họp. Sáng thứ Năm trống, dành cho việc khó."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Friday deadline? Main part done by Wednesday.",
          "sub": "Hạn thứ Sáu? Phần chính xong từ thứ Tư.",
          "keys": [
            "xong từ thứ Tư"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s04",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "B",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "b-k",
            "t": "text",
            "text": "Điều phối thời gian, đừng chạy theo",
            "x": 2028,
            "y": 420,
            "size": 44,
            "at": "l1:steer",
            "color": "accent",
            "hl": [
              {
                "text": "Điều phối",
                "at": "l1:steer"
              }
            ]
          },
          {
            "id": "b-30",
            "t": "text",
            "text": "30 phút thứ Sáu:",
            "x": 2028,
            "y": 520,
            "size": 56,
            "at": "l2:thirty"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "chọn 3 · giữ chỗ · báo sớm",
            "x": 2028,
            "y": 600,
            "size": 50,
            "at": "l2:three",
            "hl": [
              {
                "text": "báo sớm",
                "at": "l2:early"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "See the whole week, and you start to steer your time, not chase it.",
          "sub": "Nhìn cả tuần, bạn bắt đầu điều phối thời gian, thay vì chạy theo nó.",
          "keys": [
            "điều phối thời gian"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The recipe: thirty minutes on Friday. Choose three results, book their time first, and report clashes early.",
          "sub": "Công thức: ba mươi phút thứ Sáu. Chọn ba kết quả, giữ chỗ cho chúng trước, trùng hạn thì báo sớm.",
          "keys": [
            "Chọn ba kết quả"
          ]
        }
      ],
      "ref": "p2,intro"
    },
    {
      "id": "s05",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "B",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "C",
            "ms": 900
          },
          {
            "at": "l2",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Sáu 15:30 · Ba câu hỏi",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-calendar",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:thirty",
            "caption": "15:30 thứ Sáu · văn phòng",
            "icon": "spiral-calendar"
          },
          {
            "id": "c-why",
            "t": "text",
            "text": "Còn nhớ việc dở · cuối tuần trọn",
            "x": 3996,
            "y": 170,
            "size": 42,
            "at": "l3:fresh",
            "color": "muted"
          },
          {
            "id": "c-sun",
            "t": "text",
            "text": "Bận? 15 phút tối Chủ nhật",
            "x": 3996,
            "y": 240,
            "size": 42,
            "at": "l3:Sunday",
            "color": "muted"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 340,
            "w": 46,
            "h": 46,
            "at": "l4:back",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 322,
            "size": 58,
            "at": "l4:back+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Nhìn lại: xong gì, dở gì?",
            "x": 4066,
            "y": 332,
            "size": 46,
            "at": "l4:back+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 435,
            "w": 46,
            "h": 46,
            "at": "l4:ahead",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 417,
            "size": 58,
            "at": "l4:ahead+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Nhìn tới: hạn, ai chờ mình?",
            "x": 4066,
            "y": 427,
            "size": 46,
            "at": "l4:ahead+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 530,
            "w": 46,
            "h": 46,
            "at": "l5:Choose",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 512,
            "size": 58,
            "at": "l5:Choose+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Chọn lựa: chỉ 3 việc lớn",
            "x": 4066,
            "y": 522,
            "size": 46,
            "at": "l5:Choose+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Friday, three thirty. Cô Hoa tries the thirty minutes.",
          "sub": "Chặng một: ba rưỡi chiều thứ Sáu. Cô Hoa thử ba mươi phút."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Thirty minutes for next week? Fine. The week owes me one.",
          "sub": "Ba mươi phút cho tuần sau à? Được. Tuần này nợ cô một lần rồi.",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Friday is best: unfinished work is fresh, and the weekend stays free. Too busy? Fifteen minutes on Sunday evening.",
          "sub": "Thứ Sáu là tốt nhất: còn nhớ việc dở, cuối tuần nghỉ trọn. Bận quá? Mười lăm phút tối Chủ nhật.",
          "keys": [
            "Thứ Sáu là tốt nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Look back: what got done, what didn't, and why? Look ahead: deadlines, events, who waits for you?",
          "sub": "Nhìn lại: xong gì, dở gì, vì sao? Nhìn tới: hạn chót, sự kiện, ai đang chờ mình?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Choose: if you could do only three big things, which three?",
          "sub": "Chọn lựa: nếu chỉ làm được ba việc lớn, là ba việc nào?",
          "keys": [
            "ba việc lớn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s06",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "C",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "c-bad",
            "t": "text",
            "text": "“Làm đề xuất”",
            "x": 3996,
            "y": 650,
            "size": 46,
            "at": "l1:work on",
            "color": "muted"
          },
          {
            "id": "c-badx",
            "t": "strike",
            "over": "c-bad",
            "at": "l1:send"
          },
          {
            "id": "c-good",
            "t": "text",
            "text": "Gửi đề xuất đã duyệt",
            "x": 4836,
            "y": 680,
            "size": 48,
            "at": "l1:send",
            "color": "accent",
            "hl": [
              {
                "text": "đã duyệt",
                "at": "l1:approved"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Write each result as something finished. Not: work on the proposal. But: send the approved proposal to the client.",
          "sub": "Viết mỗi kết quả thành “xong cái gì”. Không “làm đề xuất”, mà “gửi bản đề xuất đã duyệt cho khách”.",
          "keys": [
            "xong cái gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then you know exactly when to cross it off.",
          "sub": "Vậy là biết rõ khi nào được gạch đi.",
          "keys": [
            "khi nào được gạch đi"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s07",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "C",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "D",
            "ms": 900
          },
          {
            "at": "l2",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 15:45 · Ba kết quả",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:three"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "clipboard"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:list",
            "caption": "15:45 · danh sách ba mươi dòng",
            "icon": "memo"
          },
          {
            "id": "d-30",
            "t": "text",
            "text": "30 dòng lặt vặt",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l2:thirty",
            "color": "muted"
          },
          {
            "id": "d-30x",
            "t": "strike",
            "over": "d-30",
            "at": "l3:sinks"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "3 kết quả → việc tự vào chỗ",
            "x": 5964,
            "y": 260,
            "size": 48,
            "at": "l4:three",
            "color": "accent",
            "hl": [
              {
                "text": "tự vào chỗ",
                "at": "l4:place"
              }
            ]
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Muốn thêm thứ 4? Bỏ bớt 1",
            "x": 5964,
            "y": 350,
            "size": 46,
            "at": "l5:fourth",
            "hl": [
              {
                "text": "Bỏ bớt 1",
                "at": "l5:drop"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: three forty-five. Her list for next week has thirty lines.",
          "sub": "Chặng hai: bốn giờ kém mười lăm. Danh sách tuần sau của cô dài ba mươi dòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Thirty lines. Very reassuring. Very... long.",
          "sub": "Ba mươi dòng. Nhìn yên tâm ghê. Mà cũng… dài ghê.",
          "face": "worried",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A full list feels safe, but big work sinks among thirty small lines.",
          "sub": "Liệt kê hết thì yên tâm, nhưng việc lớn chìm giữa ba mươi dòng lặt vặt.",
          "keys": [
            "việc lớn chìm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Start from three results, then ask what each needs. Small tasks fall into place.",
          "sub": "Bắt đầu từ ba kết quả, rồi hỏi mỗi cái cần gì. Việc nhỏ tự vào đúng chỗ.",
          "keys": [
            "ba kết quả"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three gives focus without overload. Want a fourth? Drop one. Don't squeeze it into your evenings.",
          "sub": "Ba là có trọng tâm mà không quá tải. Muốn thêm cái thứ tư? Bỏ bớt một, đừng nhồi vào buổi tối.",
          "keys": [
            "Bỏ bớt một"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s08",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "D",
            "move": "cut"
          },
          {
            "at": "l1",
            "fit": [
              "d-r1",
              "d-r2",
              "d-r3"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-r1",
            "t": "text",
            "text": "① Kế hoạch triển khai đã gửi",
            "x": 5964,
            "y": 470,
            "size": 42,
            "at": "l1:plan"
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "② Hợp đồng NCC đã ký",
            "x": 5964,
            "y": 540,
            "size": 42,
            "at": "l1:signed"
          },
          {
            "id": "d-r3",
            "t": "text",
            "text": "③ Báo cáo tiến độ đã nộp",
            "x": 5964,
            "y": 610,
            "size": 42,
            "at": "l1:report"
          },
          {
            "id": "d-need",
            "t": "text",
            "text": "Lịch giai đoạn · nhân sự · buổi duyệt",
            "x": 5964,
            "y": 690,
            "size": 36,
            "at": "l2:schedule",
            "color": "muted"
          },
          {
            "id": "d-am",
            "t": "text",
            "text": "→ các sáng đầu tuần",
            "x": 6804,
            "y": 690,
            "size": 46,
            "at": "l3:mornings",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "Rollout plan sent to the client. Supplier contract signed. Progress report in.",
          "sub": "Kế hoạch triển khai đã gửi khách. Hợp đồng nhà cung cấp đã ký. Báo cáo tiến độ đã nộp.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The plan needs a phase schedule, a staff list, and one review with the team lead.",
          "sub": "Kế hoạch cần lịch từng giai đoạn, danh sách nhân sự, và một buổi trưởng nhóm duyệt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Those go into early week mornings. A short list, and nothing the client waits for is left half done.",
          "sub": "Đặt các việc đó vào những sáng đầu tuần. Danh sách ngắn, mà thứ khách chờ không còn dở dang.",
          "keys": [
            "sáng đầu tuần"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s09",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Đo tuần bằng thứ đã xong",
        "hl": "thứ đã xong",
        "sub": "Đừng đo bằng độ bận"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Measure your week by what is done.",
          "sub": "Đo tuần bằng thứ đã xong.",
          "keys": [
            "thứ đã xong"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not by how busy you were.",
          "sub": "Đừng đo bằng độ bận."
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s10",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "D",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "E",
            "ms": 900
          },
          {
            "at": "l2",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 16:00 · Mở lịch tuần sau",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:calendar"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "point",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-calendar",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:opens",
            "caption": "16:00 · lịch chung của phòng",
            "icon": "spiral-calendar"
          },
          {
            "id": "e-fix",
            "t": "text",
            "text": "Việc cố định vào trước",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l3:fixed",
            "hl": [
              {
                "text": "vào trước",
                "at": "l3:first"
              }
            ]
          },
          {
            "id": "e-fit",
            "t": "text",
            "text": "→ mới biết 3 kết quả có vừa",
            "x": 7932,
            "y": 250,
            "size": 44,
            "at": "l3:fit"
          },
          {
            "id": "e-12",
            "t": "text",
            "text": "Mỗi phần 1–2 giờ",
            "x": 7932,
            "y": 340,
            "size": 50,
            "at": "l4:one",
            "color": "accent",
            "hl": [
              {
                "text": "1–2 giờ",
                "at": "l4:two hours"
              }
            ]
          },
          {
            "id": "e-am",
            "t": "text",
            "text": "Buổi sáng · ngày ít họp",
            "x": 7932,
            "y": 420,
            "size": 46,
            "at": "l4:mornings"
          },
          {
            "id": "e-pm",
            "t": "text",
            "text": "Họp nhỏ gom vào 1 buổi chiều",
            "x": 7932,
            "y": 500,
            "size": 44,
            "at": "l5:afternoon",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: four p.m. She opens next week's calendar.",
          "sub": "Chặng ba: bốn giờ chiều. Cô mở lịch tuần sau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Monday, meetings. Tuesday, meetings. Wednesday, guess what.",
          "sub": "Thứ Hai họp. Thứ Ba họp. Thứ Tư thì… đoán xem.",
          "face": "worried",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Put every fixed meeting, appointment and family event in first. Only then do you see if three results fit.",
          "sub": "Ghi mọi cuộc họp, cuộc hẹn, việc gia đình cố định vào trước. Thấy phần trống mới biết ba kết quả có vừa không.",
          "keys": [
            "vào trước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Split each result into pieces of one to two hours. Place them in mornings and on lighter days.",
          "sub": "Chia mỗi kết quả thành phần một đến hai giờ. Đặt vào buổi sáng và những ngày ít họp.",
          "keys": [
            "một đến hai giờ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "If you can, group small meetings and chats into one afternoon.",
          "sub": "Nếu chủ động được, gom họp nhỏ, trao đổi riêng vào một buổi chiều."
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s11",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "E",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "F",
            "ms": 900
          },
          {
            "at": "l2",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 16:15 · Hai hạn trùng nhau",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:deadlines"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "warning"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Thursday",
            "caption": "16:15 · nhắn Bác Bình, giám đốc",
            "icon": "mobile-phone"
          },
          {
            "id": "f-m1",
            "t": "text",
            "text": "“2 việc cùng hạn thứ Năm,",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l2:Thursday"
          },
          {
            "id": "f-m2",
            "t": "text",
            "text": "mỗi việc khoảng 2 ngày.",
            "x": 60,
            "y": 1330,
            "size": 44,
            "at": "l2:two days"
          },
          {
            "id": "f-m3",
            "t": "text",
            "text": "Anh muốn em ưu tiên việc nào?”",
            "x": 60,
            "y": 1400,
            "size": 44,
            "at": "l3:first",
            "hl": [
              {
                "text": "ưu tiên việc nào",
                "at": "l3:first"
              }
            ]
          },
          {
            "id": "f-good",
            "t": "text",
            "text": "2 việc · thời gian · xin quyết",
            "x": 60,
            "y": 1500,
            "size": 38,
            "at": "l4:names",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: four fifteen. Two deadlines, both on Thursday.",
          "sub": "Chặng bốn: bốn giờ mười lăm. Hai việc, cùng hạn thứ Năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Next week I have two tasks due Thursday. Each needs about two days.",
          "sub": "Tuần sau em có hai việc cùng hạn thứ Năm, mỗi việc cần khoảng hai ngày.",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Which should go first, or can one move to Monday?",
          "sub": "Anh muốn em ưu tiên việc nào, hay lùi một việc sang thứ Hai ạ?",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She texts Bác Bình, the director, on Friday. A good message names both tasks, the time each needs, and asks for a decision.",
          "sub": "Cô nhắn Bác Bình, giám đốc, ngay thứ Sáu. Tin tốt nêu hai việc, thời gian mỗi việc, và xin quyết định.",
          "keys": [
            "xin quyết định"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "“Chắc cố được”: báo ngay, hay đợi xem sao?",
        "illus": "thinking-face"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "But wait.",
          "sub": "Nhưng khoan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "I can probably manage. Tell now, or wait and see?",
          "sub": "“Chắc cố được.” Báo ngay, hay đợi xem sao?",
          "keys": [
            "Báo ngay, hay đợi"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s13",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-q",
            "t": "text",
            "text": "Báo cáo quý + tài liệu đào tạo",
            "x": 60,
            "y": 1590,
            "size": 42,
            "at": "l1:quarterly",
            "color": "muted"
          },
          {
            "id": "f-wed",
            "t": "text",
            "text": "Tối thứ Tư: hết đường lùi",
            "x": 60,
            "y": 1670,
            "size": 46,
            "at": "l2:Wednesday",
            "color": "coral"
          },
          {
            "id": "f-fri",
            "t": "text",
            "text": "Thứ Sáu: còn kịp dời, nhờ người",
            "x": 60,
            "y": 1750,
            "size": 44,
            "at": "l3:Friday",
            "hl": [
              {
                "text": "còn kịp dời",
                "at": "l3:move"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Báo thứ Sáu nhẹ hơn thứ Năm",
            "x": 900,
            "y": 1780,
            "size": 44,
            "at": "l4:easier",
            "color": "accent",
            "hl": [
              {
                "text": "nhẹ hơn",
                "at": "l4:easier"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Say the quarterly report and the training materials both fall on next Thursday.",
          "sub": "Giả sử báo cáo quý và tài liệu đào tạo cùng rơi vào thứ Năm tuần sau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wait until Wednesday night, and the training schedule is already sent. Nothing moves. You stay up with thin materials.",
          "sub": "Đợi đến tối thứ Tư, lịch đào tạo đã gửi cả phòng. Hết đổi. Bạn thức trắng với bộ tài liệu sơ sài."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tell on Friday, and there's still time to move the training, or find help.",
          "sub": "Báo từ thứ Sáu, sếp còn kịp dời lịch đào tạo hoặc nhờ người giúp.",
          "keys": [
            "còn kịp dời"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Telling on Friday is easier than telling on Thursday.",
          "sub": "Báo từ thứ Sáu nhẹ hơn báo vào thứ Năm.",
          "keys": [
            "nhẹ hơn"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "ref": "p12,p13,p14",
      "data": {
        "set": "office",
        "label": "Thứ Hai 9:00",
        "actors": [
          {
            "id": "hoa",
            "side": "left",
            "pose": "stand"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Để trống giờ tập trung, không ghi tên",
          "why": "Khối trống không tên trông như giờ rảnh, người khác dễ đặt họp vào.",
          "rule": "Giờ mình không giữ, người khác sẽ lấy"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Cô Hoa, your Tuesday morning looks free. Can I book the team meeting there?",
          "sub": "Cô ơi, sáng thứ Ba của cô trống, em đặt họp nhóm nhé?",
          "to": "hoa",
          "pose": "point"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "It's empty, so sure, go ahead.",
          "sub": "Trống mà, cứ đặt đi em.",
          "face": "neutral",
          "pose": "shrug",
          "stop": true
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Empty time with no name looks free. Week after week, the big work slips. Rewind!",
          "sub": "Khối trống không tên trông như giờ rảnh. Tuần này qua tuần khác, việc lớn trễ dần. Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Tuesday and Thursday, ninety minutes each morning: tender file, please no meetings.",
          "sub": "Sáng thứ Ba, thứ Năm, mỗi buổi chín mươi phút: “Viết hồ sơ thầu, xin không đặt họp”.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Got it. I'll find another time.",
          "sub": "Dạ, em đặt giờ khác.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      }
    },
    {
      "id": "s15",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "F",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "l3",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Tư 10:00 · Việc gấp",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l2:Wednesday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "red-exclamation-mark",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:urgent",
            "caption": "Thứ Tư 10:00 · khách lớn gọi",
            "icon": "red-exclamation-mark"
          },
          {
            "id": "g-name",
            "t": "text",
            "text": "Khối có tên: “xin không đặt họp”",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "l1:named",
            "hl": [
              {
                "text": "có tên",
                "at": "l1:named"
              }
            ]
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "Giờ không giữ, người khác lấy",
            "x": 2028,
            "y": 1340,
            "size": 46,
            "at": "l1:protect",
            "color": "accent",
            "hl": [
              {
                "text": "người khác lấy",
                "at": "l1:take"
              }
            ]
          },
          {
            "id": "g-do",
            "t": "text",
            "text": "Gấp → cứ xử lý",
            "x": 2028,
            "y": 1440,
            "size": 50,
            "at": "l4:handle"
          },
          {
            "id": "g-ask",
            "t": "text",
            "text": "Kết quả nào lùi? Ai cần biết?",
            "x": 2028,
            "y": 1520,
            "size": 46,
            "at": "l4:moves",
            "hl": [
              {
                "text": "Ai cần biết?",
                "at": "l4:know"
              }
            ]
          },
          {
            "id": "g-say",
            "t": "text",
            "text": "Nói ra, đừng âm thầm gánh",
            "x": 2028,
            "y": 1600,
            "size": 46,
            "at": "l5:say",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Named blocks work. Time you don't protect, someone else will take.",
          "sub": "Khối có tên thì giữ được. Giờ mình không giữ, người khác sẽ lấy.",
          "keys": [
            "người khác sẽ lấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Wednesday, ten a.m. Something urgent lands anyway.",
          "sub": "Chặng năm: mười giờ sáng thứ Tư. Việc gấp vẫn ập tới."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Our biggest client needs us today. There goes my Wednesday.",
          "sub": "Khách lớn nhất cần ngay hôm nay. Thế là thứ Tư bay mất.",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Handle it. Then ask: which result moves later, and who needs to know?",
          "sub": "Cứ xử lý. Rồi hỏi: kết quả nào cần lùi, ai cần biết?",
          "keys": [
            "ai cần biết"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The week plan shows what you're trading away, so you can say it, not carry it alone.",
          "sub": "Kế hoạch tuần cho thấy mình đang đánh đổi gì, để nói ra thay vì âm thầm gánh.",
          "keys": [
            "nói ra"
          ]
        }
      ],
      "ref": "p14,p18"
    },
    {
      "id": "s16",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-eye",
            "t": "illus",
            "name": "eyes",
            "x": 2028,
            "y": 1690,
            "size": 80,
            "at": "l1:minute"
          },
          {
            "id": "g-1m",
            "t": "text",
            "text": "Mỗi sáng: nhìn tuần 1 phút",
            "x": 2128,
            "y": 1705,
            "size": 48,
            "at": "l1:minute",
            "hl": [
              {
                "text": "1 phút",
                "at": "l1:minute"
              }
            ]
          },
          {
            "id": "g-tue",
            "t": "text",
            "text": "Không mở ra → chết thứ Ba",
            "x": 2868,
            "y": 1780,
            "size": 46,
            "at": "l2:Tuesday",
            "color": "coral",
            "hl": [
              {
                "text": "chết thứ Ba",
                "at": "l2:Tuesday"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Every morning, look at the week plan for one minute, before you plan the day.",
          "sub": "Mỗi sáng, nhìn kế hoạch tuần một phút trước khi lập kế hoạch ngày.",
          "keys": [
            "một phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A week plan nobody opens only lives until Tuesday.",
          "sub": "Kế hoạch tuần không ai mở ra xem chỉ sống được đến thứ Ba.",
          "keys": [
            "chỉ sống được đến thứ Ba"
          ]
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s17",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "G",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "H",
            "ms": 900
          },
          {
            "at": "l2",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Sáu sau · 15:00",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "check-mark-button"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:block",
            "caption": "15:00 thứ Sáu · khối việc tồn",
            "icon": "check-mark-button"
          },
          {
            "id": "h-buf",
            "t": "text",
            "text": "Khối nhỏ: việc tồn, phát sinh",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l3:leftovers",
            "hl": [
              {
                "text": "việc tồn",
                "at": "l3:leftovers"
              }
            ]
          },
          {
            "id": "h-free",
            "t": "text",
            "text": "Không cần → học, chuẩn bị tuần sau",
            "x": 3996,
            "y": 1340,
            "size": 40,
            "at": "l3:learn",
            "color": "muted"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1430,
            "w": 46,
            "h": 46,
            "at": "l4:compare",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1412,
            "size": 58,
            "at": "l4:compare+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "So kết quả thật với 3",
            "x": 4066,
            "y": 1422,
            "size": 42,
            "at": "l4:compare+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1505,
            "w": 46,
            "h": 46,
            "at": "l4:lesson",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1487,
            "size": 58,
            "at": "l4:lesson+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Ghi 1 bài học",
            "x": 4066,
            "y": 1497,
            "size": 42,
            "at": "l4:lesson+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1580,
            "w": 46,
            "h": 46,
            "at": "l5:three",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1562,
            "size": 58,
            "at": "l5:three+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Chọn 3 kết quả mới",
            "x": 4066,
            "y": 1572,
            "size": 42,
            "at": "l5:three+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1655,
            "w": 46,
            "h": 46,
            "at": "l5:block",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1637,
            "size": 58,
            "at": "l5:block+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Giữ khối tập trung",
            "x": 4066,
            "y": 1647,
            "size": 42,
            "at": "l5:block+200"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 3996,
            "y": 1730,
            "w": 46,
            "h": 46,
            "at": "l5:close",
            "stroke": 5
          },
          {
            "id": "h-k4",
            "t": "text",
            "text": "✓",
            "x": 4001,
            "y": 1712,
            "size": 58,
            "at": "l5:close+600",
            "color": "accent"
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "Gập máy",
            "x": 4066,
            "y": 1722,
            "size": 42,
            "at": "l5:close+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: the next Friday, three p.m. Cô Hoa kept this block for leftovers.",
          "sub": "Chặng sáu: thứ Sáu tuần sau, ba giờ chiều. Cô Hoa giữ khối này cho việc tồn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "The client's extra edits fit right here. No Sunday shift!",
          "sub": "Phần khách sửa thêm vừa khít chỗ này. Khỏi làm Chủ nhật!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A small Friday block for leftovers and surprises. Not needed? Learn something, or prepare next week.",
          "sub": "Một khối nhỏ chiều thứ Sáu cho việc tồn, việc phát sinh. Không cần đến thì học, hoặc chuẩn bị tuần sau.",
          "keys": [
            "việc tồn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then the review: compare real results with the three you chose, and write one lesson.",
          "sub": "Rồi nhìn lại: so kết quả thật với ba kết quả đã chọn, ghi một bài học.",
          "keys": [
            "một bài học"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Choose three new results, block focus time, and close the laptop. Small lessons add up.",
          "sub": "Chọn ba kết quả mới, giữ khối tập trung, rồi gập máy. Bài học nhỏ cộng dồn, kế hoạch ngày càng sát.",
          "keys": [
            "gập máy"
          ]
        }
      ],
      "ref": "p20,p23"
    },
    {
      "id": "s18",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "H",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "I",
            "ms": 900
          },
          {
            "at": "l2",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Chủ nhật · công viên",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "face": "happy"
                },
                {
                  "id": "bin",
                  "side": "right",
                  "face": "happy",
                  "pose": "wave"
                }
              ],
              "props": [
                "sun"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:park",
            "caption": "Chủ nhật · máy tính ở nhà",
            "icon": "sun"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Cuối tuần là của mình",
            "x": 5964,
            "y": 1260,
            "size": 56,
            "at": "l4:place",
            "color": "accent",
            "hl": [
              {
                "text": "của mình",
                "at": "l4:yours"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "Việc tuần này, xong tuần này",
            "x": 5964,
            "y": 1360,
            "size": 52,
            "at": "l5:week",
            "hl": [
              {
                "text": "xong tuần này",
                "at": "l5:week+300"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sunday. A park. And the laptop? Asleep at home.",
          "sub": "Chủ nhật. Công viên. Còn máy tính? Ngủ ở nhà."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Mum, you came! No laptop this time!",
          "sub": "Mẹ đi thật này! Lần này không mang máy!",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "The edits fit on Friday. Today is ours.",
          "sub": "Phần sửa đã vào chiều thứ Sáu. Hôm nay là của hai mẹ con.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "When leftovers have a place, your weekend is yours.",
          "sub": "Có chỗ cho việc tồn, cuối tuần mới là của mình.",
          "keys": [
            "cuối tuần mới là của mình"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Never leave today's work for tomorrow? Cô Hoa's version now: this week's work, done this week.",
          "sub": "“Việc hôm nay chớ để ngày mai”? Phiên bản mới của Cô Hoa: việc tuần này, xong trong tuần này.",
          "keys": [
            "xong trong tuần này"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p21,p22"
    },
    {
      "id": "s19",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "I",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "J",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Sáu này",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "j-clock",
            "t": "illus",
            "name": "alarm-clock",
            "x": 7932,
            "y": 1260,
            "size": 140,
            "at": "l1:reminder"
          },
          {
            "id": "j-rem",
            "t": "text",
            "text": "Nhắc lịch 30 phút:",
            "x": 8102,
            "y": 1270,
            "size": 56,
            "at": "l1:thirty"
          },
          {
            "id": "j-name",
            "t": "text",
            "text": "“Kế hoạch tuần”",
            "x": 8102,
            "y": 1360,
            "size": 72,
            "at": "l1:called",
            "color": "accent",
            "hl": [
              {
                "text": "Kế hoạch tuần",
                "at": "l1:Weekly"
              }
            ]
          },
          {
            "id": "j-next",
            "t": "text",
            "text": "Việc lớn? → bài chia nhỏ",
            "x": 7932,
            "y": 1530,
            "size": 46,
            "at": "l2:big",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your move: this Friday, set a thirty minute reminder called: Weekly plan.",
          "sub": "Việc làm ngay: thứ Sáu này, đặt nhắc lịch ba mươi phút tên “Kế hoạch tuần”.",
          "keys": [
            "Kế hoạch tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And if one result is a big task with no clear start, the next lesson shows how to break it down.",
          "sub": "Nếu một kết quả là việc lớn chưa biết bắt đầu từ đâu, bài tiếp theo chỉ cách chia nhỏ nó."
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s20",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "J",
            "move": "cut"
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:three",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:protect",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:early",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 340,
            "at": "l1:three"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 170,
            "at": "l2:protect"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 760,
            "y": 1400,
            "at": "l2:early"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: look back, look ahead, and choose three results.",
          "sub": "Tóm lại: nhìn lại, nhìn tới, chọn ba kết quả.",
          "keys": [
            "chọn ba kết quả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Protect their time with named blocks, and report clashes early.",
          "sub": "Giữ chỗ bằng khối có tên, trùng hạn thì báo sớm.",
          "keys": [
            "báo sớm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A week plan keeps big work from drowning in daily urgent jobs, and keeps your weekend for you.",
          "sub": "Kế hoạch tuần giữ việc lớn khỏi bị việc gấp nhấn chìm, và giữ cuối tuần cho bạn.",
          "keys": [
            "giữ cuối tuần cho bạn"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s26",
      "module": "QUIZ-01",
      "ref": "questions[25]",
      "data": {
        "q": "In the deadline clash question, why does telling your manager on Friday help?",
        "options": [
          "There is still time to move the training date or get someone to help",
          "Your manager will do both tasks personally over the weekend",
          "Telling early will not help, since deadlines can never be changed"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Báo sớm thì sếp còn kịp dời lịch hoặc nhờ người hỗ trợ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the deadline clash question, why does telling your manager on Friday help?",
          "sub": "Trong câu hỏi về hai việc trùng hạn, vì sao báo sếp từ thứ Sáu lại có ích?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "There is still time to move the training date or get someone to help.",
          "sub": "Vẫn còn kịp dời lịch đào tạo, hoặc nhờ người giúp."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Wait until Wednesday night, and nothing can move any more.",
          "sub": "Đợi đến tối thứ Tư thì chẳng còn gì dời được nữa."
        }
      ]
    },
    {
      "id": "s27",
      "module": "END-05",
      "data": {
        "text": "Thứ Sáu này: 30 phút “Kế hoạch tuần”",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Forty questions are waiting. Let's plan a good week!",
          "sub": "Bốn mươi câu hỏi đang chờ. Cùng lên một tuần thật gọn!",
          "face": "happy"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
