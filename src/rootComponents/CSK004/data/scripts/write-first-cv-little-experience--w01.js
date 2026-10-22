// Kịch bản video W lần 3 (#110) — "Viết CV đầu tiên khi chưa có nhiều kinh nghiệm" · chuỗi "Từ giảng đường đến công việc đầu tiên"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub), chữ trên thẻ tiếng Việt. Đủ ý để làm 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "write-first-cv-little-experience--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "final-year-students",
    "slug": "write-first-cv-little-experience",
    "door": "ky-nang",
    "level": "B1",
    "title": "Viết CV đầu tiên khi chưa có nhiều kinh nghiệm",
    "series": "Từ giảng đường đến công việc đầu tiên"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN VIẾT CV của Dũng (tối thứ Hai “Kinh nghiệm: chưa có” → T3 căng tin với Lan → T4 một dòng có sức nặng → T5 kỹ năng, “Khoan đã!” thành thạo tất cả → T6 khung CV, dòng giới thiệu của Lan → T7 hai vị trí → CN chị Thảo soát → hai tuần sau im lặng → lại tối thứ Hai 22:00, có lịch phỏng vấn). Nhân vật (theo w145/_series/final-year-students.md): Dũng (Huy p6, Đạt p19, “bạn”), Lan (bạn khoa kế toán: liệt kê kinh nghiệm p3–p4; dòng giới thiệu kế toán p16 là của Lan), chị Thảo (người đọc lại p23, phát hiện sót tên công ty cũ p24, nói theo thứ tự “Thứ nhất…”), Cô Hoa (người tuyển dụng trong SCENE-03 p19, câu có trong bài). Số neo “≈ 7 giây” lấy từ nguồn của bài (HR Dive 2018, Ladders eye-tracking), ghi nguồn nhỏ trên bảng. Tục ngữ: “Tốt gỗ hơn tốt nước sơn” (mở/khép vòng), “Biết thì thưa thốt, không biết thì dựa cột mà nghe” (p11–p12). Ngắt nhịp: BRK-04 Trước/Sau p6, BRK-07 rehook p17, BRK-02 p25. Bản cũ (W lần 3, #110): w145/bak/write-first-cv-little-experience--w01.js.",
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
      "id": "c00",
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
            "id": "a-num",
            "t": "text",
            "text": "≈ 7 giây",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:Seven",
            "color": "accent",
            "hl": [
              {
                "text": "7 giây",
                "at": "l1:seconds"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "lần lướt đầu một CV",
            "x": 70,
            "y": 300,
            "size": 54,
            "at": "l1:first look"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: HR Dive (2018), nghiên cứu theo dõi mắt của Ladders — nhà tuyển dụng lướt CV khoảng 7 giây",
            "x": 60,
            "y": 720,
            "size": 28,
            "at": "l1",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seven seconds. Roughly a recruiter's first look at a CV, says one eye-tracking study.",
          "sub": "Bảy giây. Theo một nghiên cứu theo dõi mắt, đó là khoảng thời gian lướt đầu tiên trên một CV.",
          "keys": [
            "Bảy giây"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Seven seconds. Not even one sip of iced coffee.",
          "sub": "Bảy giây. Chưa kịp hút một ngụm cà phê sữa đá."
        }
      ],
      "ref": "p2"
    },
    {
      "id": "c01",
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
            "at": "l1",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "memo"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Hai · 22:00 · phòng trọ",
            "icon": "laptop"
          },
          {
            "id": "a-cv",
            "t": "text",
            "text": "“Kinh nghiệm: chưa có”",
            "x": 70,
            "y": 400,
            "size": 56,
            "at": "l3:none",
            "color": "coral"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Đồ án đâu rồi?",
            "x": 70,
            "y": 520,
            "size": 64,
            "at": "l5:where",
            "color": "accent",
            "hl": [
              {
                "text": "Đồ án",
                "at": "l5:thesis"
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
          "say": "Meet Dũng.",
          "sub": "Đây là Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Final year, mechanical engineering. Monday night, his very first CV.",
          "sub": "Năm cuối ngành cơ khí. Tối thứ Hai, bản CV đầu tiên trong đời."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Experience: none. Average grade: good. Done! Send!",
          "sub": "Kinh nghiệm: chưa có. Điểm trung bình: khá. Xong! Gửi luôn!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Seven seconds on that, and the recruiter sees... nothing.",
          "sub": "Bảy giây cho mấy chữ ấy, người tuyển dụng thấy... chẳng có gì.",
          "keys": [
            "chẳng có gì"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Yet Dũng designed and tested a machine part in his thesis. Where did it go?",
          "sub": "Vậy mà trong đồ án, Dũng từng thiết kế và chạy thử một bộ phận máy. Nó đi đâu rồi?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p6"
    },
    {
      "id": "c02",
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
            "text": "Chưa có kinh nghiệm, viết gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:little",
            "hl": [
              {
                "text": "viết gì",
                "at": "l1:first CV"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Nhiều năm đi làm",
            "x": 2028,
            "y": 160,
            "size": 54,
            "at": "l2:years",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:want"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Bạn đã làm được gì",
            "x": 2028,
            "y": 250,
            "size": 60,
            "at": "l2:done",
            "color": "accent",
            "hl": [
              {
                "text": "làm được gì",
                "at": "l2:done"
              }
            ]
          },
          {
            "id": "b-wh",
            "t": "text",
            "text": "đồ án · câu lạc bộ · làm thêm",
            "x": 2028,
            "y": 340,
            "size": 44,
            "at": "l3:thesis"
          },
          {
            "id": "b-go",
            "t": "text",
            "text": "“Tốt gỗ hơn tốt nước sơn”",
            "x": 2028,
            "y": 440,
            "size": 54,
            "at": "l4:wood",
            "hl": [
              {
                "text": "Tốt gỗ",
                "at": "l4:good wood"
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
          "say": "So how do you write a first CV with little experience?",
          "sub": "Vậy chưa có nhiều kinh nghiệm thì viết CV đầu tiên thế nào?",
          "keys": [
            "CV đầu tiên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Good news: beginner roles don't expect years of work. They want to see what you've done.",
          "sub": "Tin tốt: vị trí cho người mới không chờ bạn đi làm nhiều năm. Họ muốn thấy bạn đã làm được gì.",
          "keys": [
            "đã làm được gì"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In a thesis, a club, or a part-time job.",
          "sub": "Dù trong đồ án, câu lạc bộ hay việc làm thêm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "As Grandma says: good wood beats good paint.",
          "sub": "Ông bà dặn: tốt gỗ hơn tốt nước sơn.",
          "keys": [
            "tốt gỗ hơn tốt nước sơn"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "c03",
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
            "id": "b-3",
            "t": "text",
            "text": "Người đọc tìm 3 điều:",
            "x": 2968,
            "y": 160,
            "size": 50,
            "at": "l1:three"
          },
          {
            "id": "b-31",
            "t": "text",
            "text": "Hiểu việc? · Từng làm gần giống?",
            "x": 2968,
            "y": 235,
            "size": 40,
            "at": "l2:similar"
          },
          {
            "id": "b-32",
            "t": "text",
            "text": "Có cẩn thận không?",
            "x": 2968,
            "y": 295,
            "size": 40,
            "at": "l2:careful",
            "hl": [
              {
                "text": "cẩn thận",
                "at": "l2:careful"
              }
            ]
          },
          {
            "id": "b-top",
            "t": "text",
            "text": "Ý chính: nửa trên trang đầu",
            "x": 2968,
            "y": 385,
            "size": 46,
            "at": "l3:top half",
            "color": "accent",
            "hl": [
              {
                "text": "nửa trên",
                "at": "l3:top half"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l4:week+100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l4:week+200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l4:week+300",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l4:week+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l4:week+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 615,
            "w": 205,
            "h": 90,
            "at": "l4:week+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 615,
            "w": 230,
            "h": 90,
            "at": "l4:week+700",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T3",
            "x": 2083,
            "y": 628,
            "size": 46,
            "at": "l4:week+200"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T4",
            "x": 2318,
            "y": 628,
            "size": 46,
            "at": "l4:week+300"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T5",
            "x": 2553,
            "y": 628,
            "size": 46,
            "at": "l4:week+400"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T6",
            "x": 2788,
            "y": 628,
            "size": 46,
            "at": "l4:week+500"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T7",
            "x": 3023,
            "y": 628,
            "size": 46,
            "at": "l4:week+600"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "CN",
            "x": 3258,
            "y": 628,
            "size": 46,
            "at": "l4:week+700"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "+2 tuần",
            "x": 3458,
            "y": 628,
            "size": 46,
            "at": "l4:week+800"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A recruiter reading a student CV wants three things.",
          "sub": "Người đọc CV sinh viên thường muốn biết ba điều."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Do you understand the job? Have you done something similar? Are you careful?",
          "sub": "Bạn hiểu việc này cần gì không? Đã làm gì gần giống chưa? Có cẩn thận không?",
          "keys": [
            "cẩn thận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And since that first scan is fast, the key stuff sits in the top half of page one.",
          "sub": "Lần lướt đầu rất nhanh, nên điều quan trọng nhất nằm ở nửa trên trang đầu, ngắn, dễ thấy.",
          "keys": [
            "nửa trên trang đầu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Now, Dũng's CV week, in seven stops.",
          "sub": "Giờ theo Dũng một tuần viết CV, bảy chặng."
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "c04",
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
            "at": "l5:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Ba · Lấy gì ghi?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:stop one"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                }
              ]
            },
            "at": "l1:canteen",
            "caption": "Căng tin trường",
            "icon": "fork-and-knife-with-plate"
          },
          {
            "id": "c-ex",
            "t": "text",
            "text": "Kinh nghiệm ≠ chỉ việc có lương",
            "x": 3996,
            "y": 160,
            "size": 46,
            "at": "l2:paid",
            "hl": [
              {
                "text": "≠ chỉ việc có lương",
                "at": "l2:paid"
              }
            ]
          },
          {
            "id": "c-l",
            "t": "text",
            "text": "đồ án · bài nhóm · cuộc thi · CLB",
            "x": 3996,
            "y": 235,
            "size": 40,
            "at": "l2:contests"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "tình nguyện · gia sư · shop nhỏ",
            "x": 3996,
            "y": 290,
            "size": 40,
            "at": "l3:shop"
          },
          {
            "id": "c-real",
            "t": "text",
            "text": "miễn là thật sự làm",
            "x": 3996,
            "y": 370,
            "size": 50,
            "at": "l4:really",
            "color": "accent",
            "hl": [
              {
                "text": "thật sự làm",
                "at": "l4:really"
              }
            ]
          },
          {
            "id": "c-own",
            "t": "text",
            "text": "Phần nào của mình? Làm ra gì?",
            "x": 3996,
            "y": 455,
            "size": 46,
            "at": "l5:part"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: Tuesday, the canteen. And this is Lan, Dũng's friend from accounting.",
          "sub": "Chặng một: thứ Ba, căng tin trường. Còn đây là Lan, bạn cùng khoá bên kế toán.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Experience isn't only paid work. Thesis, group projects, contests, clubs, volunteering, tutoring!",
          "sub": "Kinh nghiệm đâu chỉ là việc có lương. Đồ án, bài nhóm lớn, cuộc thi, câu lạc bộ, tình nguyện, gia sư!",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Even my tiny online shop?",
          "sub": "Cả cái shop online bé tí của mình à?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Even that, as long as you really did the work.",
          "sub": "Cả nó, miễn là bạn đã thật sự làm việc ở đó.",
          "keys": [
            "thật sự làm việc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "For your thesis, ask: which part was mine, and what did I make?",
          "sub": "Đồ án thì tự hỏi: mình phụ trách phần nào, làm ra cái gì?",
          "face": "happy"
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
      "id": "c05",
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
            "id": "c-name",
            "t": "text",
            "text": "“Dự án và hoạt động”",
            "x": 3996,
            "y": 560,
            "size": 54,
            "at": "l1:Projects",
            "color": "accent",
            "hl": [
              {
                "text": "Dự án và hoạt động",
                "at": "l1:activities"
              }
            ]
          },
          {
            "id": "c-name2",
            "t": "text",
            "text": "tên mục < nội dung",
            "x": 4036,
            "y": 650,
            "size": 44,
            "at": "l1:inside",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "\"Work experience\" sounds too heavy? Call it \"Projects and activities\". What's inside matters more.",
          "sub": "Thấy chữ “Kinh nghiệm làm việc” nặng quá? Đặt tên mục là “Dự án và hoạt động”. Nội dung mới quan trọng.",
          "keys": [
            "Dự án và hoạt động"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So Dũng rewrites Monday.",
          "sub": "Thế là Dũng viết lại dòng tối thứ Hai."
        }
      ],
      "ref": "p5"
    },
    {
      "id": "c06",
      "module": "BRK-04",
      "data": {
        "title": "Mục kinh nghiệm của Dũng",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "“Kinh nghiệm: chưa có. Điểm trung bình: khá.”",
        "right": "“Đồ án: thiết kế, chạy thử cơ cấu cấp phôi tự động”",
        "wrongIllus": "cross-mark",
        "rightIllus": "gear"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: experience, none.",
          "sub": "Trước: “Kinh nghiệm: chưa có.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: thesis, designed and tested an automatic feeding mechanism.",
          "sub": "Sau: “Đồ án: thiết kế và chạy thử cơ cấu cấp phôi tự động.”"
        }
      ],
      "ref": "p6"
    },
    {
      "id": "c07",
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
            "id": "c-part",
            "t": "text",
            "text": "+ bản vẽ kỹ thuật, đo kiểm",
            "x": 4836,
            "y": 690,
            "size": 46,
            "at": "l1:drawings"
          },
          {
            "id": "c-ring",
            "t": "ring",
            "around": [
              "c-name"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l2:top"
          },
          {
            "id": "c-rule",
            "t": "text",
            "text": "Làm mà không ghi = chưa làm",
            "x": 3996,
            "y": 720,
            "size": 40,
            "at": "l2:never",
            "color": "coral",
            "hl": [
              {
                "text": "chưa làm",
                "at": "l2:never happened"
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
          "say": "Plus his part: technical drawings, and checks after assembly. Real work, usable skills.",
          "sub": "Kèm phần mình phụ trách: bản vẽ kỹ thuật, đo kiểm sau lắp ráp. Việc thật, kỹ năng dùng được ngay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The thesis goes on top. Did it but never wrote it? Then it never happened.",
          "sub": "Đồ án lên đầu. Làm mà không ghi, coi như chưa làm.",
          "keys": [
            "coi như chưa làm"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "c08",
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
            "at": "l3",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Tư · Dòng có sức nặng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-07",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:Wednesday",
            "caption": "Thứ Tư · sửa từng dòng",
            "icon": "pencil"
          },
          {
            "id": "d-f",
            "t": "text",
            "text": "Động từ → làm gì",
            "x": 5964,
            "y": 160,
            "size": 50,
            "at": "l2:verb"
          },
          {
            "id": "d-f2",
            "t": "text",
            "text": "→ bằng cách nào → kết quả",
            "x": 5964,
            "y": 235,
            "size": 50,
            "at": "l2:how",
            "color": "accent",
            "hl": [
              {
                "text": "kết quả",
                "at": "l2:result"
              }
            ]
          },
          {
            "id": "d-old",
            "t": "text",
            "text": "“Tham gia CLB tiếng Anh”",
            "x": 5964,
            "y": 335,
            "size": 48,
            "at": "l3:joined",
            "color": "muted"
          },
          {
            "id": "d-oldx",
            "t": "strike",
            "over": "d-old",
            "at": "l4:nothing"
          },
          {
            "id": "d-new",
            "t": "text",
            "text": "Tổ chức nói chuyện hằng tháng",
            "x": 5964,
            "y": 420,
            "size": 48,
            "at": "l5:Organised",
            "color": "accent"
          },
          {
            "id": "d-new2",
            "t": "text",
            "text": "lập nhóm, nhắc lịch thành viên",
            "x": 5964,
            "y": 485,
            "size": 42,
            "at": "l5:group chat"
          },
          {
            "id": "d-sk",
            "t": "text",
            "text": "→ lên kế hoạch, duy trì việc",
            "x": 5964,
            "y": 560,
            "size": 46,
            "at": "l6:planning",
            "hl": [
              {
                "text": "lên kế hoạch",
                "at": "l6:planning"
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
          "say": "Stop two: Wednesday. How do you make one line heavy?",
          "sub": "Chặng hai: thứ Tư. Viết một dòng thế nào cho có sức nặng?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Start with an action verb. Then what you did, how, and the result.",
          "sub": "Mở đầu bằng động từ chỉ việc đã làm. Rồi làm gì, bằng cách nào, kết quả ra sao.",
          "keys": [
            "kết quả ra sao"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "My club line says: joined the English club.",
          "sub": "Dòng câu lạc bộ của mình ghi: “Tham gia câu lạc bộ tiếng Anh.”",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That says nothing. Joined, then sat in the back row?",
          "sub": "Câu đó chẳng nói gì. Tham gia, rồi sao? Ngồi hàng cuối?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Organised monthly English talks, set up a group chat, reminded members.",
          "sub": "Tổ chức các buổi nói chuyện tiếng Anh hằng tháng, lập nhóm nhắn tin và nhắc lịch cho thành viên.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Now we see planning, and keeping things going.",
          "sub": "Giờ thì thấy rõ: biết lên kế hoạch và duy trì công việc.",
          "keys": [
            "lên kế hoạch"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "c09",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-num",
            "t": "text",
            "text": "Số thật → đưa vào",
            "x": 5964,
            "y": 650,
            "size": 50,
            "at": "l1:Real",
            "color": "accent"
          },
          {
            "id": "d-fake",
            "t": "text",
            "text": "Số bịa → bị hỏi là lộ",
            "x": 6804,
            "y": 690,
            "size": 50,
            "at": "l2:invent",
            "color": "coral",
            "hl": [
              {
                "text": "lộ",
                "at": "l2:dig"
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
          "say": "Real numbers? Put them in: people who joined, products made, time saved.",
          "sub": "Có con số thật thì đưa vào: số người tham gia, số sản phẩm, thời gian rút ngắn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No numbers? Describe the result in words. Never invent one. Interviewers dig.",
          "sub": "Không có số thì tả kết quả bằng lời. Đừng bịa số: người phỏng vấn sẽ hỏi lại chi tiết.",
          "keys": [
            "Đừng bịa số"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "c11",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Thứ Năm · mục kỹ năng",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Ghi “thành thạo” mọi thứ",
          "why": "Người phỏng vấn đưa máy, bảo làm thử một bảng tính nhỏ: vài phút là biết bạn ở mức nào.",
          "rule": "Ghi cái mình làm được, đừng ghi cái mình mong được"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Thursday, skills. Expert in Excel, expert in AutoCAD, expert in everything!",
          "sub": "Thứ Năm, mục kỹ năng. Thành thạo Excel, thành thạo AutoCAD, thành thạo tất cả!",
          "face": "happy",
          "pose": "thumb",
          "stop": true
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The interviewer hands you a laptop: a quick spreadsheet. Minutes later, your level shows.",
          "sub": "Người phỏng vấn đưa máy: làm thử một bảng tính nhỏ ngay tại chỗ. Vài phút là biết bạn ở mức nào.",
          "keys": [
            "Vài phút là biết"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "AutoCAD: expert, I can show you. Excel: basic. Python: learning.",
          "sub": "AutoCAD: thành thạo, làm được trước mặt người khác. Excel: cơ bản. Python: đang học.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Write what you can do, not what you wish you could.",
          "sub": "Ghi cái mình làm được, đừng ghi cái mình mong được.",
          "phase": "redo",
          "keys": [
            "Ghi cái mình làm được"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p11,p12"
    },
    {
      "id": "c12",
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Năm · Kỹ năng",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Basic"
          },
          {
            "id": "e-all",
            "t": "text",
            "text": "Thành thạo… tất cả?",
            "x": 7932,
            "y": 170,
            "size": 60,
            "at": "l1:Basic",
            "color": "coral"
          },
          {
            "id": "e-allx",
            "t": "strike",
            "over": "e-all",
            "at": "l1:honest"
          },
          {
            "id": "e-ok",
            "t": "text",
            "text": "“Cơ bản” · “đang học”: vẫn tốt",
            "x": 7932,
            "y": 270,
            "size": 50,
            "at": "l1:Basic",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn tốt",
                "at": "l1:valued"
              }
            ]
          },
          {
            "id": "e-ex",
            "t": "text",
            "text": "Thành thạo = làm được trước mặt người",
            "x": 7932,
            "y": 355,
            "size": 42,
            "at": "l1:honest"
          },
          {
            "id": "e-cd",
            "t": "text",
            "text": "“Biết thì thưa thốt…”",
            "x": 7932,
            "y": 450,
            "size": 56,
            "at": "l2:know",
            "hl": [
              {
                "text": "Biết thì thưa thốt",
                "at": "l2:speak up"
              }
            ]
          },
          {
            "id": "e-cd2",
            "t": "text",
            "text": "“…không biết thì dựa cột mà nghe”",
            "x": 7972,
            "y": 530,
            "size": 44,
            "at": "l2:pillar"
          },
          {
            "id": "e-pr",
            "t": "text",
            "text": "Mỗi kỹ năng: 1 dòng bằng chứng",
            "x": 8772,
            "y": 220,
            "size": 50,
            "at": "l3:proof",
            "color": "accent",
            "hl": [
              {
                "text": "1 dòng bằng chứng",
                "at": "l3:proof"
              }
            ]
          },
          {
            "id": "e-pr2",
            "t": "text",
            "text": "đặt ở mục kinh nghiệm phía trên",
            "x": 8772,
            "y": 300,
            "size": 40,
            "at": "l3:above",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "\"Basic\" or \"learning\" is honest, and still valued, especially from new graduates.",
          "sub": "Ghi đúng mức như “cơ bản”, “đang học” vẫn được đánh giá tốt, nhất là với người mới ra trường.",
          "keys": [
            "đúng mức"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "If you know, speak up. If not, lean on the pillar and listen.",
          "sub": "Biết thì thưa thốt, không biết thì dựa cột mà nghe.",
          "keys": [
            "Biết thì thưa thốt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And each skill needs at least one experience line above it, as proof.",
          "sub": "Và mỗi kỹ năng nên có ít nhất một dòng kinh nghiệm phía trên làm bằng chứng.",
          "keys": [
            "làm bằng chứng"
          ]
        }
      ],
      "ref": "p11,p12,p14"
    },
    {
      "id": "c13",
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Sáu · Dựng khung CV",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:stop four"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "1. Họ tên, liên lạc, thành phố",
            "x": 60,
            "y": 1250,
            "size": 42,
            "at": "l2:Name"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "2. Vài dòng giới thiệu",
            "x": 60,
            "y": 1310,
            "size": 42,
            "at": "l2:intro"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "3. Học vấn",
            "x": 60,
            "y": 1370,
            "size": 42,
            "at": "l2:Education"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "4. Dự án và kinh nghiệm",
            "x": 60,
            "y": 1430,
            "size": 46,
            "at": "l2:Projects",
            "color": "accent",
            "hl": [
              {
                "text": "Dự án",
                "at": "l3:right after"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "5. Kỹ năng · 6. Hoạt động",
            "x": 60,
            "y": 1495,
            "size": 42,
            "at": "l2:Skills"
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "✗ Số căn cước · hôn nhân · địa chỉ",
            "x": 60,
            "y": 1580,
            "size": 40,
            "at": "l4:ID",
            "color": "coral"
          },
          {
            "id": "f-ph",
            "t": "text",
            "text": "Ảnh: tuỳ ngành, rõ mặt, gọn gàng",
            "x": 60,
            "y": 1640,
            "size": 40,
            "at": "l4:Photo",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: Friday. Building the frame.",
          "sub": "Chặng bốn: thứ Sáu. Dựng khung CV."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Name and contacts. A short intro. Education. Projects and experience. Skills. Activities.",
          "sub": "Họ tên, liên lạc. Vài dòng giới thiệu. Học vấn. Dự án và kinh nghiệm. Kỹ năng. Hoạt động."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For final-year students, projects go right after education, before skills.",
          "sub": "Với sinh viên năm cuối, dự án và kinh nghiệm đặt ngay sau học vấn, trước kỹ năng.",
          "keys": [
            "ngay sau học vấn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Skip your ID number, marital status, full address, unless asked. Photo? Depends on the field.",
          "sub": "Không cần số căn cước, tình trạng hôn nhân, địa chỉ chi tiết, trừ khi được yêu cầu. Ảnh thì tuỳ ngành.",
          "keys": [
            "trừ khi được yêu cầu"
          ]
        }
      ],
      "ref": "p13,p14,p15"
    },
    {
      "id": "c14",
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
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "left"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Dòng giới thiệu",
            "icon": "memo"
          },
          {
            "id": "f-vag",
            "t": "text",
            "text": "“môi trường năng động…”",
            "x": 60,
            "y": 1715,
            "size": 46,
            "at": "l3:Anyone",
            "color": "muted"
          },
          {
            "id": "f-vagx",
            "t": "strike",
            "over": "f-vag",
            "at": "l4:Specific"
          },
          {
            "id": "f-sp",
            "t": "text",
            "text": "Bạn là ai + muốn làm gì",
            "x": 880,
            "y": 1780,
            "size": 50,
            "at": "l4:who you are",
            "color": "accent",
            "hl": [
              {
                "text": "muốn làm gì",
                "at": "l4:what you want"
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
          "say": "Then the intro line. Dũng peeks at Lan's.",
          "sub": "Rồi đến dòng giới thiệu. Dũng ngó sang bản của Lan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Mine: eager to work in a dynamic environment to develop myself.",
          "sub": "Của mình: “Mong muốn làm việc trong môi trường năng động để phát triển bản thân.”",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Anyone could write that! Mine: accounting student, two years keeping my family shop's books, aiming for general accountant.",
          "sub": "Ai viết chẳng được! Của mình: “Sinh viên năm cuối kế toán, đã làm sổ sách cửa hàng gia đình hai năm, muốn làm kế toán tổng hợp.”",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Specific: who you are, what you want. Written for the role.",
          "sub": "Cụ thể: bạn là ai, muốn làm gì. Viết đúng cho vị trí.",
          "keys": [
            "Viết đúng cho vị trí"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "c15",
      "module": "BRK-07",
      "data": {
        "question": "Một CV gửi cho mọi nơi có được không?",
        "illus": "e-mail"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "But wait.",
          "sub": "Nhưng khoan."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Can one CV go everywhere?",
          "sub": "Một CV gửi cho mọi nơi có được không?"
        }
      ],
      "ref": "p17"
    },
    {
      "id": "c16",
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
            "at": "a1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l1",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Bảy · Hai vị trí",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l0:stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "farleft"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "left": {
                "label": "Cách A: gửi y nguyên",
                "ok": false
              },
              "right": {
                "label": "Cách B: sửa từng bản",
                "ok": true
              }
            },
            "at": "l0:two",
            "caption": "Cùng Dũng, hai cách gửi",
            "icon": "e-mail"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: một CV y nguyên",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "a1:Same",
            "color": "coral"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "→ “Bạn ứng tuyển vị trí nào?”",
            "x": 2068,
            "y": 1340,
            "size": 42,
            "at": "a2:Which",
            "color": "muted"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: sửa giới thiệu, đổi thứ tự",
            "x": 2028,
            "y": 1430,
            "size": 42,
            "at": "b1:intro",
            "color": "accent"
          },
          {
            "id": "g-r",
            "t": "text",
            "text": "Gửi cho ai, viết cho người đó",
            "x": 2028,
            "y": 1530,
            "size": 50,
            "at": "l1:Write",
            "hl": [
              {
                "text": "viết cho người đó",
                "at": "l1:whoever"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "Stop five: Saturday. Dũng tries two directions: software testing, and customer support.",
          "sub": "Chặng năm: thứ Bảy. Dũng thử hai hướng: kiểm thử phần mềm và hỗ trợ khách hàng."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "Same CV for both: “I want to become a programmer.”",
          "sub": "Gửi y nguyên một CV: “Mong muốn trở thành lập trình viên.”",
          "phase": "a",
          "pose": "give"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "hoa",
          "say": "Which position are you applying for?",
          "sub": "Bạn đang ứng tuyển vị trí nào vậy?",
          "phase": "a",
          "face": "thinking"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "For support: my intro names the role, and my club information desk work comes first.",
          "sub": "Bản hỗ trợ khách hàng: giới thiệu đúng vị trí, việc trực quầy thông tin ở câu lạc bộ lên đầu.",
          "phase": "b",
          "pose": "give",
          "face": "happy"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "hoa",
          "say": "Thank you. Let's talk.",
          "sub": "Cảm ơn bạn. Mình hẹn trao đổi nhé.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "For testing, his testing assignment goes first. Write it for whoever reads it.",
          "sub": "Bản kiểm thử thì bài tập kiểm thử lên đầu. Gửi cho ai, viết cho người đó.",
          "keys": [
            "Gửi cho ai, viết cho người đó"
          ]
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "c17",
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
            "id": "g-u",
            "t": "text",
            "text": "Gạch chân từ tin nhắc nhiều",
            "x": 2028,
            "y": 1630,
            "size": 46,
            "at": "l1:underline",
            "hl": [
              {
                "text": "Gạch chân",
                "at": "l1:underline"
              }
            ]
          },
          {
            "id": "g-m",
            "t": "text",
            "text": "1 CV gốc → sao, chỉnh vài chỗ",
            "x": 2028,
            "y": 1710,
            "size": 46,
            "at": "l2:master",
            "color": "accent",
            "hl": [
              {
                "text": "CV gốc",
                "at": "l2:master"
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
          "say": "Underline the words the post repeats. Move matching experience up, and use their words, if true.",
          "sub": "Đọc kỹ tin, gạch chân từ họ nhắc nhiều, đưa kinh nghiệm hợp lên trên, dùng đúng từ đó nếu đúng với bạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No need to start over. Keep a master CV, copy it, adjust the intro, project order, a few skills.",
          "sub": "Không cần viết lại từ đầu. Giữ một bản CV gốc, sao ra rồi chỉnh dòng giới thiệu, thứ tự dự án, vài kỹ năng.",
          "keys": [
            "bản CV gốc"
          ]
        }
      ],
      "ref": "p17,p18"
    },
    {
      "id": "c18",
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          },
          {
            "at": "l5",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Chủ nhật · Soát trước khi gửi",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:stop six"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:Thảo",
            "caption": "Chủ nhật · chị Thảo đọc giúp",
            "icon": "magnifying-glass-tilted-left"
          },
          {
            "id": "h-old",
            "t": "text",
            "text": "Sót tên công ty cũ!",
            "x": 3996,
            "y": 1250,
            "size": 56,
            "at": "l2:old",
            "color": "coral",
            "hl": [
              {
                "text": "tên công ty cũ",
                "at": "l2:old company"
              }
            ]
          },
          {
            "id": "h-fr",
            "t": "text",
            "text": "Người đọc mới thấy ngay lỗi",
            "x": 3996,
            "y": 1340,
            "size": 46,
            "at": "l4:fresh"
          },
          {
            "id": "h-s1",
            "t": "text",
            "text": "1. Tìm tên công ty cũ",
            "x": 3996,
            "y": 1430,
            "size": 44,
            "at": "l5:search"
          },
          {
            "id": "h-s2",
            "t": "text",
            "text": "2. Đọc lại giới thiệu, vị trí",
            "x": 3996,
            "y": 1490,
            "size": 44,
            "at": "l5:intro"
          },
          {
            "id": "h-s3",
            "t": "text",
            "text": "3. Mở PDF: đúng tệp, đúng tên",
            "x": 3996,
            "y": 1550,
            "size": 44,
            "at": "l6:PDF"
          },
          {
            "id": "h-s4",
            "t": "text",
            "text": "4. Gửi thử cho chính mình",
            "x": 3996,
            "y": 1610,
            "size": 44,
            "at": "l6:yourself"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: Sunday. Dũng asks Thảo, a working senior, to read it.",
          "sub": "Chặng sáu: Chủ nhật. Trước khi gửi, Dũng nhờ chị Thảo, chị khoá trên đã đi làm, đọc giúp.",
          "keys": [
            "chị Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First: the old company's name is still in here. This CV is for a new one!",
          "sub": "Thứ nhất: tên công ty cũ vẫn còn đây. CV này gửi công ty mới mà!",
          "face": "surprised",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Oh no. They'd think I mass-send without reading!",
          "sub": "Chết. Người ta sẽ nghĩ mình gửi hàng loạt mà không đọc lại!",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A fresh reader spots in seconds what you missed after ten reads.",
          "sub": "Người đọc lần đầu thấy ngay lỗi mà bạn đọc mười lần vẫn sót.",
          "keys": [
            "thấy ngay lỗi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Second: search for the old name, then reread the intro, role and company.",
          "sub": "Thứ hai: tìm kiếm tên công ty cũ trong tệp. Rồi đọc lại dòng giới thiệu, tên vị trí, tên công ty mới.",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Third: open the PDF you exported. Fourth: send it to yourself.",
          "sub": "Thứ ba: mở tệp PDF đã xuất, xem đúng tệp, đúng tên. Thứ tư: gửi thử cho chính mình một lần."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p23,p24"
    },
    {
      "id": "c19",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-k-c0",
            "t": "box",
            "x": 3996,
            "y": 1675,
            "w": 46,
            "h": 46,
            "at": "l1:typos",
            "stroke": 5
          },
          {
            "id": "h-k-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1657,
            "size": 58,
            "at": "l1:typos+600",
            "color": "accent"
          },
          {
            "id": "h-k-l0",
            "t": "text",
            "text": "Chính tả, tên công ty, vị trí",
            "x": 4066,
            "y": 1667,
            "size": 38,
            "at": "l1:typos+200"
          },
          {
            "id": "h-k-c1",
            "t": "box",
            "x": 3996,
            "y": 1739,
            "w": 46,
            "h": 46,
            "at": "l1:PDF",
            "stroke": 5
          },
          {
            "id": "h-k-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1721,
            "size": 58,
            "at": "l1:PDF+600",
            "color": "accent"
          },
          {
            "id": "h-k-l1",
            "t": "text",
            "text": "PDF · tên tệp: họ tên + vị trí",
            "x": 4066,
            "y": 1731,
            "size": 38,
            "at": "l1:PDF+200"
          },
          {
            "id": "h-k-c2",
            "t": "box",
            "x": 3996,
            "y": 1803,
            "w": 46,
            "h": 46,
            "at": "l2:Phone",
            "stroke": 5
          },
          {
            "id": "h-k-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1785,
            "size": 58,
            "at": "l2:Phone+600",
            "color": "accent"
          },
          {
            "id": "h-k-l2",
            "t": "text",
            "text": "Điện thoại, email đúng · 1 trang",
            "x": 4066,
            "y": 1795,
            "size": 38,
            "at": "l2:Phone+200"
          },
          {
            "id": "h-em",
            "t": "text",
            "text": "Email: tên thật, không biệt danh",
            "x": 4816,
            "y": 1780,
            "size": 46,
            "at": "l3:real name",
            "color": "accent",
            "hl": [
              {
                "text": "tên thật",
                "at": "l3:real name"
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
          "say": "Final checks: no typos, especially names. A PDF, named with your name and the role.",
          "sub": "Soát lần cuối: không lỗi chính tả, nhất là tên công ty, vị trí. Lưu PDF. Tên tệp có họ tên và vị trí."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Phone and email correct. One page.",
          "sub": "Số điện thoại, email đúng. Gọn một trang."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Email from your real name, not your high-school nickname. Message: who you are, the role, CV attached, thanks.",
          "sub": "Email mang tên thật, không phải biệt danh thời đi học. Nội dung: em là ai, ứng tuyển vị trí gì, gửi kèm CV, cảm ơn.",
          "keys": [
            "tên thật"
          ]
        }
      ],
      "ref": "p21,p22"
    },
    {
      "id": "c20",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Bấm gửi chậm một phút",
        "hl": "chậm một phút",
        "sub": "Đỡ tiếc cả tuần"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Click send one minute later...",
          "sub": "Bấm gửi chậm một phút..."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "...and save a week of regret.",
          "sub": "...đỡ tiếc cả tuần."
        }
      ],
      "ref": "p25"
    },
    {
      "id": "c21",
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
            "at": "l3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Hai tuần sau · Im lặng",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:stop seven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "sad"
                }
              ],
              "props": [
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-07",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Silence",
            "caption": "Hai tuần sau · phòng trọ",
            "icon": "mobile-phone"
          },
          {
            "id": "i-no",
            "t": "text",
            "text": "Im lặng ≠ CV tệ",
            "x": 5964,
            "y": 1250,
            "size": 56,
            "at": "l3:necessarily",
            "hl": [
              {
                "text": "≠ CV tệ",
                "at": "l3:necessarily"
              }
            ]
          },
          {
            "id": "i-f",
            "t": "text",
            "text": "1–2 tuần: email hỏi thăm ngắn",
            "x": 5964,
            "y": 1345,
            "size": 46,
            "at": "l4:email",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi thăm",
                "at": "l4:polite"
              }
            ]
          },
          {
            "id": "i-f2",
            "t": "text",
            "text": "lịch sự, không trách móc",
            "x": 6004,
            "y": 1420,
            "size": 40,
            "at": "l4:blaming",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven: two weeks later. Silence. Dũng's phone is quieter than a library.",
          "sub": "Chặng bảy: hai tuần sau. Im lặng. Điện thoại Dũng còn yên hơn thư viện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Nobody called. Is my CV terrible?",
          "sub": "Chẳng ai gọi. CV mình tệ lắm à?",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not necessarily. Many places get piles of applications and don't answer each one.",
          "sub": "Chưa chắc. Nhiều nơi nhận rất nhiều hồ sơ, không trả lời từng người."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "After one or two weeks, send a short, polite email about your application. No blaming.",
          "sub": "Sau một, hai tuần, gửi email ngắn hỏi tình trạng hồ sơ, lịch sự, không trách móc.",
          "keys": [
            "không trách móc"
          ]
        }
      ],
      "ref": "p26"
    },
    {
      "id": "c22",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "I",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "i-sig",
            "t": "text",
            "text": "Không ai gọi = tín hiệu sửa CV",
            "x": 5964,
            "y": 1520,
            "size": 48,
            "at": "l1:signal",
            "color": "coral",
            "hl": [
              {
                "text": "sửa CV",
                "at": "l1:fix"
              }
            ]
          },
          {
            "id": "i-c",
            "t": "text",
            "text": "Đúng vị trí cho người mới?",
            "x": 5964,
            "y": 1600,
            "size": 44,
            "at": "l2:beginner"
          },
          {
            "id": "i-c2",
            "t": "text",
            "text": "Mỗi dòng: việc + kết quả?",
            "x": 5964,
            "y": 1665,
            "size": 44,
            "at": "l2:task"
          },
          {
            "id": "i-w",
            "t": "text",
            "text": "Chờ: làm thêm 1 dự án nhỏ",
            "x": 6784,
            "y": 1780,
            "size": 48,
            "at": "l3:project",
            "color": "accent",
            "hl": [
              {
                "text": "1 dự án nhỏ",
                "at": "l3:small project"
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
          "say": "Many applications, almost no calls? That's a signal to fix the CV.",
          "sub": "Gửi nhiều nơi mà hầu như không ai gọi? Đó là tín hiệu để sửa CV.",
          "keys": [
            "tín hiệu để sửa CV"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask a pro to read it. Are these beginner roles? Does each line show a task and result?",
          "sub": "Nhờ người trong nghề đọc. Có đang nộp đúng vị trí cho người mới? Mỗi dòng đã có việc, có kết quả chưa?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Meanwhile, build a small project or learn a skill posts mention.",
          "sub": "Trong lúc chờ, làm thêm một dự án nhỏ hoặc học một kỹ năng tin tuyển dụng hay nhắc: lần sau có thêm dòng để ghi."
        }
      ],
      "ref": "p27,p28"
    },
    {
      "id": "c23",
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
          },
          {
            "at": "l2",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Lại tối thứ Hai · 22:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "e-mail"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same",
            "caption": "Vẫn phòng ấy, vẫn laptop ấy",
            "icon": "e-mail"
          },
          {
            "id": "j-old",
            "t": "text",
            "text": "“Kinh nghiệm: chưa có”",
            "x": 7932,
            "y": 1250,
            "size": 48,
            "at": "l1:Monday",
            "color": "muted"
          },
          {
            "id": "j-oldx",
            "t": "strike",
            "over": "j-old",
            "at": "l2:interview"
          },
          {
            "id": "j-new",
            "t": "text",
            "text": "Lịch phỏng vấn ✓",
            "x": 7932,
            "y": 1340,
            "size": 60,
            "at": "l2:interview",
            "color": "accent",
            "hl": [
              {
                "text": "Lịch phỏng vấn",
                "at": "l2:invitation"
              }
            ]
          },
          {
            "id": "j-go",
            "t": "text",
            "text": "Tốt gỗ: cho người ta thấy gỗ",
            "x": 7932,
            "y": 1450,
            "size": 48,
            "at": "l4:wood",
            "hl": [
              {
                "text": "thấy gỗ",
                "at": "l4:just wood"
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
          "say": "Monday night again, ten p.m. Same room, same laptop.",
          "sub": "Lại tối thứ Hai, mười giờ. Vẫn phòng ấy, vẫn chiếc laptop ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "An interview invitation! For the job where my thesis came first!",
          "sub": "Thư mời phỏng vấn! Đúng chỗ mình đưa đồ án lên đầu!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Seven seconds, and this time the recruiter saw something.",
          "sub": "Vẫn bảy giây, nhưng lần này người tuyển dụng đã thấy.",
          "keys": [
            "đã thấy"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Good wood beats good paint. No paint, just wood.",
          "sub": "Tốt gỗ hơn tốt nước sơn. Chẳng sơn phết gì, chỉ cho người ta thấy gỗ.",
          "keys": [
            "thấy gỗ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "to": "l1",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "p6"
    },
    {
      "id": "c24",
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
            "at": "l1:task",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:Honest",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:Tailored",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:checked",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6664,
            "y": 235,
            "at": "l1:task"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 270,
            "at": "l2:Honest"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1530,
            "at": "l3:role"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 4696,
            "y": 1250,
            "at": "l3:checked"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: each line has a task, a method and a result.",
          "sub": "Tóm lại: mỗi dòng có việc, cách làm và kết quả.",
          "keys": [
            "việc, cách làm và kết quả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Honest levels, no inflating.",
          "sub": "Ghi đúng mức, không thổi phồng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tailored to each role, names and spelling checked.",
          "sub": "Chỉnh theo từng vị trí. Soát tên công ty và chính tả."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Today: open your CV and rewrite one line about your thesis.",
          "sub": "Hôm nay: mở CV, viết lại một dòng về đồ án của bạn.",
          "keys": [
            "viết lại một dòng"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p29,outro"
    },
    {
      "id": "s34",
      "module": "QUIZ-01",
      "ref": "questions[27]",
      "data": {
        "q": "Before you click send, which checks matter most?",
        "options": [
          "Check only the photo, because a nice picture matters more than any text inside",
          "Check spelling and company names, save as a PDF, and name the file clearly",
          "Send it at once, since checking again will only make you more nervous"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "magnifying-glass-tilted-left",
        "why": "Lỗi chính tả, sai tên công ty là lỗi người đọc thấy ngay. PDF giữ đúng định dạng."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before you click send, which checks matter most?",
          "sub": "Trước khi bấm gửi, những bước soát nào quan trọng nhất?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Check spelling and company names, save as a PDF, and name the file clearly.",
          "sub": "Soát chính tả, tên công ty, lưu PDF, đặt tên tệp rõ ràng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A few minutes of checking can save your CV.",
          "sub": "Vài phút soát kỹ có thể cứu cả bản CV."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s35",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Viết CV đầu tiên"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ.",
          "face": "happy"
        }
      ]
    }
  ],
  "loop": {
    "open": "c01",
    "close": "c23"
  }
};
