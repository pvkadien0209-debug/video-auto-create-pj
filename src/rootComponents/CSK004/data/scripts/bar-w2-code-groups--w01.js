// bar-w2-code-groups--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-w2-code-groups--w01",
  "unit": {
    "audience": "bar-exam-written2-ethics",
    "slug": "bar-w2-code-groups",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Học 32 quy tắc theo nhóm quan hệ thay vì theo số thứ tự",
    "series": "Bài viết 2 trong 90 phút — pháp luật về luật sư và Bộ Quy tắc đạo đức cho người ôn kiểm tra tập sự"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "presenter": {
    "side": "left"
  },
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
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
            "fit": [
              "a-card"
            ],
            "zoom": 1.6,
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 1400
          }
        ],
        "items": [
          {
            "id": "a-card",
            "t": "box",
            "x": 60,
            "y": 40,
            "w": 820,
            "h": 560,
            "at": "l1",
            "stroke": 6
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Ai đứng đối diện?",
            "x": 100,
            "y": 70,
            "size": 72,
            "at": "l1:card",
            "color": "accent",
            "hl": [
              {
                "text": "đối diện",
                "at": "l1:opposite"
              }
            ]
          },
          {
            "id": "a-g0",
            "t": "text",
            "text": "→ Khách hàng",
            "x": 120,
            "y": 190,
            "size": 48,
            "at": "l1:opposite+400"
          },
          {
            "id": "a-g1",
            "t": "text",
            "text": "→ Đồng nghiệp",
            "x": 120,
            "y": 268,
            "size": 48,
            "at": "l1:opposite+650"
          },
          {
            "id": "a-g2",
            "t": "text",
            "text": "→ Toà án",
            "x": 120,
            "y": 346,
            "size": 48,
            "at": "l1:opposite+900"
          },
          {
            "id": "a-g3",
            "t": "text",
            "text": "→ Cơ quan khác",
            "x": 120,
            "y": 424,
            "size": 48,
            "at": "l1:opposite+1150"
          },
          {
            "id": "a-g4",
            "t": "text",
            "text": "→ Báo chí, mạng",
            "x": 120,
            "y": 502,
            "size": 48,
            "at": "l1:opposite+1400"
          },
          {
            "id": "a-ic",
            "t": "illus",
            "name": "card-index",
            "x": 700,
            "y": 470,
            "size": 110,
            "at": "l1"
          },
          {
            "id": "a-32",
            "t": "text",
            "text": "32 quy tắc · 1 tấm thẻ",
            "x": 60,
            "y": 650,
            "size": 54,
            "at": "l2:thirty two",
            "hl": [
              {
                "text": "1 tấm thẻ",
                "at": "l2:one card"
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
          "say": "A small card. One question on top: who stands opposite the lawyer?",
          "sub": "Một tấm thẻ nhỏ. Trên cùng một câu hỏi: ai đứng đối diện luật sư?",
          "keys": [
            "ai đứng đối diện luật sư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thirty two ethics rules, folded into one card.",
          "sub": "Ba mươi hai quy tắc đạo đức, gấp gọn vào một tấm thẻ.",
          "keys": [
            "một tấm thẻ"
          ]
        }
      ],
      "ref": "intro,p17"
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
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "worried",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "card-index",
                "hot-beverage"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Hai · quán nhóm ôn",
            "icon": "card-index"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Ăn có nơi, chơi có chốn”",
            "x": 920,
            "y": 680,
            "size": 48,
            "at": "l5:place",
            "color": "accent",
            "hl": [
              {
                "text": "có nơi",
                "at": "l5:place"
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
          "say": "The card belongs to Thảo, a trainee lawyer preparing for the probation exam.",
          "sub": "Tấm thẻ là của Thảo, luật sư tập sự đang ôn kỳ kiểm tra.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tonight she meets Lan, new to the study group, and quite lost.",
          "sub": "Tối nay Thảo gặp Lan, người mới vào nhóm ôn, đang khá rối."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I learned rules one to thirty two in order. Three days later, gone.",
          "sub": "Em học từ quy tắc 1 đến 32 theo thứ tự. Ba hôm sau, bay sạch.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Numbers fly away. Relationships stay.",
          "sub": "Số thì bay. Quan hệ thì ở lại.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "As the saying goes: everything has its place. So does every rule.",
          "sub": "Ông bà dặn: “Ăn có nơi, chơi có chốn.” Quy tắc cũng thế.",
          "keys": [
            "Ăn có nơi, chơi có chốn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "intro,p3"
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
            "text": "32 quy tắc: nhớ thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:remember",
            "hl": [
              {
                "text": "nhớ thế nào",
                "at": "l1:remember"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "6 chương · 32 quy tắc",
            "x": 2028,
            "y": 170,
            "size": 44,
            "at": "l2:preamble"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Đề kể sự việc, không nêu số",
            "x": 2028,
            "y": 245,
            "size": 48,
            "at": "l3:numbers",
            "color": "coral",
            "hl": [
              {
                "text": "không nêu số",
                "at": "l3:numbers"
              }
            ]
          },
          {
            "id": "b-n",
            "t": "text",
            "text": "Thuộc lòng 32 số thứ tự",
            "x": 2028,
            "y": 335,
            "size": 50,
            "at": "l4:memorising",
            "color": "muted"
          },
          {
            "id": "b-nx",
            "t": "strike",
            "over": "b-n",
            "at": "l4:first"
          },
          {
            "id": "b-y",
            "t": "text",
            "text": "Tìm nhóm trước, tìm số sau",
            "x": 2028,
            "y": 420,
            "size": 60,
            "at": "l5:group first",
            "color": "accent",
            "hl": [
              {
                "text": "Tìm nhóm trước",
                "at": "l5:group first"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l6:six groups+300",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l6:six groups+550",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l6:six groups+800",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l6:six groups+1050",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l6:six groups+1300",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 600,
            "w": 250,
            "h": 90,
            "at": "l6:six groups+1550",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Chung",
            "x": 2043,
            "y": 622,
            "size": 36,
            "at": "l6:six groups+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Khách hàng",
            "x": 2313,
            "y": 622,
            "size": 36,
            "at": "l6:six groups+670"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Đồng nghiệp",
            "x": 2583,
            "y": 622,
            "size": 36,
            "at": "l6:six groups+920"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Tố tụng",
            "x": 2853,
            "y": 622,
            "size": 36,
            "at": "l6:six groups+1170"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Cơ quan khác",
            "x": 3123,
            "y": 622,
            "size": 36,
            "at": "l6:six groups+1420"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Truyền thông",
            "x": 3393,
            "y": 622,
            "size": 36,
            "at": "l6:six groups+1670"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you remember thirty two rules, when the exam never tells you the number?",
          "sub": "Vậy nhớ 32 quy tắc thế nào, khi đề thi chẳng bao giờ đọc số cho bạn?",
          "keys": [
            "nhớ 32 quy tắc thế nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The code has a preamble, six chapters, thirty two rules. Each chapter is one relationship.",
          "sub": "Bộ Quy tắc gồm Lời nói đầu, 6 chương, 32 quy tắc. Mỗi chương ứng với một mối quan hệ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Exam facts tell a story with a client, a colleague or a court. No numbers.",
          "sub": "Đề kể chuyện luật sư với khách hàng, đồng nghiệp hay toà án, không nêu số quy tắc.",
          "keys": [
            "không nêu số"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So memorising thirty two numbers is not the first step.",
          "sub": "Nên thuộc lòng 32 số thứ tự không phải bước đầu tiên."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Find the group first, the number second. Thirty two shrinks to a few.",
          "sub": "Tìm nhóm trước, tìm số sau. Từ 32 quy tắc thu lại còn vài quy tắc.",
          "keys": [
            "Tìm nhóm trước, tìm số sau"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Thảo's week, through six groups.",
          "sub": "Một tuần của Thảo, qua sáu nhóm.",
          "keys": [
            "sáu nhóm"
          ]
        }
      ],
      "ref": "p1,p2,p3"
    },
    {
      "id": "s03",
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Nhóm chung · QT 1–4",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-r0",
            "t": "text",
            "text": "QT1 · Sứ mệnh",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l2:mission"
          },
          {
            "id": "c-r1",
            "t": "text",
            "text": "QT2 · Độc lập, trung thực",
            "x": 3996,
            "y": 245,
            "size": 46,
            "at": "l2:independence"
          },
          {
            "id": "c-r2",
            "t": "text",
            "text": "QT3 · Danh dự, uy tín",
            "x": 3996,
            "y": 320,
            "size": 46,
            "at": "l2:honour"
          },
          {
            "id": "c-r3",
            "t": "text",
            "text": "QT4 · Cộng đồng, trợ giúp pháp lý",
            "x": 3996,
            "y": 395,
            "size": 46,
            "at": "l3:community",
            "color": "accent"
          },
          {
            "id": "c-tg",
            "t": "text",
            "text": "Miễn phí = trách nhiệm như có phí",
            "x": 3996,
            "y": 480,
            "size": 44,
            "at": "l3:free",
            "color": "coral",
            "hl": [
              {
                "text": "như có phí",
                "at": "l3:paid"
              }
            ]
          },
          {
            "id": "c-n",
            "t": "text",
            "text": "→ căn cứ nền khi kết luận",
            "x": 3996,
            "y": 560,
            "size": 46,
            "at": "l4:conclusion",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Tuesday. Chapter one, rules one to four, the general values.",
          "sub": "Chặng một: thứ Ba. Chương I, quy tắc 1 đến 4, những giá trị chung."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The lawyer's mission. Independence and honesty. Honour and reputation.",
          "sub": "Sứ mệnh của luật sư. Độc lập, trung thực, tôn trọng sự thật khách quan. Giữ gìn danh dự, uy tín."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And community work: free legal aid gets the same care as a paid case.",
          "sub": "Và tham gia cộng đồng: trợ giúp pháp lý phải làm với trách nhiệm như vụ việc có thù lao.",
          "keys": [
            "như vụ việc có thù lao"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "This group is your foundation when you write the conclusion.",
          "sub": "Nhóm này thường là căn cứ nền khi viết kết luận.",
          "keys": [
            "căn cứ nền"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s04",
      "module": "BRK-10",
      "data": {
        "quote": "Mỗi luật sư phải lấy Bộ Quy tắc làm khuôn mẫu cho sự ứng xử và tu dưỡng",
        "mark": "khuôn mẫu",
        "by": "Lời nói đầu Bộ Quy tắc",
        "illus": "scroll"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Every lawyer must take the code as the model for conduct and self improvement.",
          "sub": "Mỗi luật sư phải lấy Bộ Quy tắc làm khuôn mẫu cho sự ứng xử và tu dưỡng.",
          "keys": [
            "khuôn mẫu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The preamble.",
          "sub": "Lời nói đầu."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s05",
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Khách hàng · QT 5–16",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-big",
            "t": "text",
            "text": "Nhóm lớn nhất",
            "x": 7004,
            "y": 40,
            "size": 50,
            "at": "l1:biggest",
            "color": "coral"
          },
          {
            "id": "d-b0",
            "t": "box",
            "x": 5964,
            "y": 160,
            "w": 1600,
            "h": 165,
            "at": "l2:Before",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "d-h0",
            "t": "text",
            "text": "1 · Trước khi nhận",
            "x": 5994,
            "y": 175,
            "size": 54,
            "at": "l2:Before+200",
            "color": "accent"
          },
          {
            "id": "d-r0",
            "t": "text",
            "text": "QT 10 · 11 · 15 xung đột",
            "x": 6014,
            "y": 250,
            "size": 42,
            "at": "l2:Before+600"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 5964,
            "y": 350,
            "w": 1600,
            "h": 165,
            "at": "l3:During",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "d-h1",
            "t": "text",
            "text": "2 · Trong khi làm",
            "x": 5994,
            "y": 365,
            "size": 54,
            "at": "l3:During+200",
            "color": "accent"
          },
          {
            "id": "d-r1",
            "t": "text",
            "text": "QT 5 · 6 · 7 · 8 · 9 · 12",
            "x": 6014,
            "y": 440,
            "size": 42,
            "at": "l3:During+600"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 5964,
            "y": 540,
            "w": 1600,
            "h": 165,
            "at": "l4:Ending",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "d-h2",
            "t": "text",
            "text": "3 · Khi dừng, kết thúc",
            "x": 5994,
            "y": 555,
            "size": 54,
            "at": "l4:Ending+200",
            "color": "accent"
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "QT 13 · 14 · 16",
            "x": 6014,
            "y": 630,
            "size": 42,
            "at": "l4:Ending+600"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Wednesday. Chapter two, the client group, rules five to sixteen. The biggest.",
          "sub": "Chặng hai: thứ Tư. Chương II, nhóm khách hàng, quy tắc 5 đến 16. Nhóm lớn nhất.",
          "keys": [
            "Nhóm lớn nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Split it by the life of a matter. Before taking it: rules ten, eleven, and fifteen on conflicts.",
          "sub": "Chia theo vòng đời vụ việc. Trước khi nhận: quy tắc 10 tiếp nhận, 11 phải từ chối, 15 xung đột lợi ích.",
          "keys": [
            "vòng đời vụ việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "During: five, six, seven on secrets, eight on fees, nine, and twelve.",
          "sub": "Trong khi làm: 5 bảo vệ tốt nhất, 6 tôn trọng, 7 bí mật, 8 thù lao, 9 việc không được làm, 12 thực hiện vụ việc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ending: thirteen, refusing to continue, fourteen, terminating, sixteen, reporting results.",
          "sub": "Khi dừng, kết thúc: 13 từ chối tiếp tục, 14 đơn phương chấm dứt, 16 thông báo kết quả."
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s06",
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
            "at": "l3",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ QT 9, QT 10 · Đóng vai",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-91",
            "t": "text",
            "text": "9.1 giữ, dùng tiền của khách",
            "x": 7932,
            "y": 170,
            "size": 42,
            "at": "l1:client money"
          },
          {
            "id": "e-92",
            "t": "text",
            "text": "9.2 gợi ý khách tặng tài sản",
            "x": 7932,
            "y": 235,
            "size": 42,
            "at": "l1:gifts"
          },
          {
            "id": "e-96",
            "t": "text",
            "text": "9.6 ám chỉ quen người tố tụng",
            "x": 7932,
            "y": 300,
            "size": 42,
            "at": "l2:hinting",
            "color": "coral"
          },
          {
            "id": "e-98",
            "t": "text",
            "text": "9.8 hứa chắc kết quả",
            "x": 7932,
            "y": 365,
            "size": 46,
            "at": "l2:promising",
            "color": "coral",
            "hl": [
              {
                "text": "hứa chắc",
                "at": "l2:promising"
              }
            ]
          },
          {
            "id": "e-10",
            "t": "text",
            "text": "QT10: trả lời sớm, ký hợp đồng",
            "x": 7932,
            "y": 455,
            "size": 36,
            "at": "l2:Rule ten"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l3"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l3",
            "caption": "Thứ Năm · nhóm ôn đóng vai",
            "icon": "page-facing-up"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Thursday. Rule nine has ten clauses, like holding client money, or hinting at gifts.",
          "sub": "Chặng ba: thứ Năm. Quy tắc 9 có mười khoản hay ra đề, như giữ, dùng tiền của khách trái thoả thuận, gợi ý khách tặng tài sản."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Or hinting you know the judge, or promising results. Rule ten: answer early, take only what you can, sign a contract.",
          "sub": "Hay ám chỉ quen người tiến hành tố tụng, hứa bảo đảm kết quả. Quy tắc 10: sớm trả lời, chỉ nhận việc trong khả năng, ký hợp đồng.",
          "keys": [
            "hứa bảo đảm kết quả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Role play time. Dũng plays the lawyer. Cô Hoa plays a brand new client.",
          "sub": "Giờ đóng vai. Dũng làm luật sư. Cô Hoa làm khách hàng mới toanh.",
          "keys": [
            "đóng vai"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "So, can you help me?",
          "sub": "Vậy luật sư giúp cô được không?",
          "face": "worried",
          "pose": "hold"
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Năm · đóng vai luật sư",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "hoa",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“Vụ này chắc chắn thắng”",
          "why": "Khoản 9.8 cấm hứa bảo đảm kết quả ngoài khả năng; khoản 9.7 cấm đưa thông tin làm khách nhầm để ký hợp đồng.",
          "rule": "Nói khả năng và kế hoạch, không hứa kết quả"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Sign today. This case is a sure win!",
          "sub": "Ký hôm nay đi cô. Vụ này chắc chắn thắng!",
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
          "say": "Clause nine point eight: no promising results. Nine point seven: no misleading a client into signing.",
          "sub": "Khoản 9.8: cấm hứa bảo đảm kết quả ngoài khả năng. Khoản 9.7: cấm đưa thông tin làm khách nhầm để ký hợp đồng.",
          "keys": [
            "Khoản 9.8"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "I can't promise a result. I can explain your chances, and my plan.",
          "sub": "Cháu không hứa được kết quả. Cháu giải thích được khả năng và kế hoạch.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Honest. I like that.",
          "sub": "Thật thà. Cô thích vậy.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p7"
    },
    {
      "id": "s08",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-s0",
            "t": "text",
            "text": "1. Ai đối diện? → Khách: Ch. II",
            "x": 7932,
            "y": 530,
            "size": 38,
            "at": "l1:opposite"
          },
          {
            "id": "e-s1",
            "t": "text",
            "text": "2. Chặng nào? → Trước khi ký",
            "x": 7932,
            "y": 588,
            "size": 38,
            "at": "l2:stage"
          },
          {
            "id": "e-s2",
            "t": "text",
            "text": "3. Quy tắc nào? → 9.8, 9.7",
            "x": 7932,
            "y": 646,
            "size": 38,
            "at": "l2:rule",
            "color": "coral"
          },
          {
            "id": "e-s3",
            "t": "text",
            "text": "4. Ghi kết luận kèm số khoản",
            "x": 7932,
            "y": 704,
            "size": 38,
            "at": "l3:conclusion"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Ai đối diện? Chặng nào?",
            "x": 8792,
            "y": 660,
            "size": 50,
            "at": "l4:who",
            "color": "accent",
            "hl": [
              {
                "text": "Chặng nào?",
                "at": "l4:which stage"
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
          "say": "Thảo sorts it in four steps. Who stands opposite? A client: chapter two.",
          "sub": "Thảo xếp theo bốn bước. Ai đứng đối diện? Khách hàng: Chương II."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Which stage? Before signing, so intake. Which rule? Nine point eight and nine point seven.",
          "sub": "Chặng nào? Trước khi ký, tức chặng tiếp nhận. Quy tắc nào? Khoản 9.8 và 9.7."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then she writes the conclusion with the clause numbers.",
          "sub": "Rồi ghi kết luận kèm số khoản."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two questions: who stands opposite, and which stage of the matter.",
          "sub": "Hai câu hỏi: ai đứng đối diện, rồi đang ở chặng nào của vụ việc.",
          "keys": [
            "chặng nào của vụ việc"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s09",
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
            "text": "④ Đồng nghiệp · QT 17–25",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-17",
            "t": "text",
            "text": "17–19: đồng nghiệp, cạnh tranh lành mạnh",
            "x": 60,
            "y": 1255,
            "size": 38,
            "at": "l1:fellowship"
          },
          {
            "id": "f-20",
            "t": "text",
            "text": "20 tranh chấp: hoà giải trước",
            "x": 60,
            "y": 1325,
            "size": 38,
            "at": "l2:dispute",
            "hl": [
              {
                "text": "hoà giải",
                "at": "l2:mediate"
              }
            ]
          },
          {
            "id": "f-21",
            "t": "text",
            "text": "21 cấm: vu khống, thông đồng",
            "x": 60,
            "y": 1410,
            "size": 44,
            "at": "l3:slander",
            "color": "coral"
          },
          {
            "id": "f-21b",
            "t": "text",
            "text": "gặp riêng khách bên kia · hoa hồng",
            "x": 100,
            "y": 1475,
            "size": 38,
            "at": "l3:privately",
            "color": "coral"
          },
          {
            "id": "f-21c",
            "t": "text",
            "text": "giành giật khách hàng",
            "x": 100,
            "y": 1535,
            "size": 38,
            "at": "l3:poaching",
            "color": "coral"
          },
          {
            "id": "f-22",
            "t": "text",
            "text": "22 tổ chức hành nghề: liên đới",
            "x": 920,
            "y": 1255,
            "size": 40,
            "at": "l4:firm"
          },
          {
            "id": "f-23",
            "t": "text",
            "text": "23 cá nhân: không làm trái luật",
            "x": 920,
            "y": 1320,
            "size": 34,
            "at": "l6:individually"
          },
          {
            "id": "f-24",
            "t": "text",
            "text": "24 người tập sự",
            "x": 920,
            "y": 1390,
            "size": 52,
            "at": "l5:trainees",
            "color": "accent",
            "hl": [
              {
                "text": "người tập sự",
                "at": "l5:trainees"
              }
            ]
          },
          {
            "id": "f-25",
            "t": "text",
            "text": "25 Đoàn, Liên đoàn",
            "x": 920,
            "y": 1470,
            "size": 40,
            "at": "l5:bar"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Friday. Chapter three, colleagues. Seventeen to nineteen: fellowship, respect, fair competition.",
          "sub": "Chặng bốn: thứ Sáu. Chương III, đồng nghiệp. Quy tắc 17 đến 19: tình đồng nghiệp, tôn trọng, hợp tác, cạnh tranh lành mạnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twenty: a dispute with a colleague? Negotiate and mediate first, and tell both bars before suing.",
          "sub": "Quy tắc 20: tranh chấp với đồng nghiệp thì thương lượng, hoà giải trước, báo Ban Chủ nhiệm Đoàn hai bên trước khi khiếu nại, khởi kiện.",
          "keys": [
            "thương lượng, hoà giải trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Twenty one bans slander, colluding with the other side's lawyer, meeting their client privately, paid referrals, and poaching.",
          "sub": "Quy tắc 21 cấm vu khống, thông đồng với luật sư bên kia, tiếp xúc riêng khách bên kia khi biết họ có luật sư, trả hoa hồng môi giới, giành giật khách.",
          "keys": [
            "tiếp xúc riêng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then the wider circle. Twenty two: in a firm, you share responsibility for a breach you see and don't fix.",
          "sub": "Rồi vòng rộng hơn. 22: trong tổ chức hành nghề, biết vi phạm mà không khắc phục thì liên đới chịu trách nhiệm."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Twenty three: practising individually, no internal rule at work can push you to break the law.",
          "sub": "23: hành nghề cá nhân, không để quy định nội bộ nơi làm việc buộc mình làm trái luật."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Twenty four: trainees. Twenty five: the bar and the federation.",
          "sub": "24: quan hệ với người tập sự. 25: với Đoàn luật sư và Liên đoàn."
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s10",
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
            "at": "l2",
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
            "text": "⑤ Quy tắc 24 · người tập sự",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2888,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "face": "worried",
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "notebook"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Sáu · Lan hỏi nhỏ",
            "icon": "notebook"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "“Đòi tiền mới ký nhật ký?”",
            "x": 2028,
            "y": 1260,
            "size": 52,
            "at": "l2:logbook",
            "color": "coral"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Đọc QT 24 đầu tiên",
            "x": 2028,
            "y": 1650,
            "size": 60,
            "at": "l4:first",
            "color": "accent",
            "hl": [
              {
                "text": "đầu tiên",
                "at": "l4:first"
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
          "say": "Fifth stop: Friday night. Lan asks something quietly.",
          "sub": "Chặng năm: tối thứ Sáu. Lan hỏi nhỏ một chuyện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Dạ, a friend's supervisor wants money before signing her logbook. Is that normal?",
          "sub": "Dạ, cho em hỏi: luật sư hướng dẫn của bạn em đòi tiền mới ký nhật ký tập sự. Vậy có bình thường không?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "No. That is exactly Rule twenty four.",
          "sub": "Không. Đó đúng là Quy tắc 24.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "You live inside Rule twenty four every day. Read it first.",
          "sub": "Người ôn thi đang sống trong Quy tắc 24 mỗi ngày; hãy đọc nó đầu tiên.",
          "keys": [
            "đọc nó đầu tiên"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s11",
      "module": "BRK-11",
      "data": {
        "title": "QT 24: người hướng dẫn không được",
        "items": [
          "Xác nhận sai nhật ký, hồ sơ",
          "Bắt làm việc riêng",
          "Đòi tiền, lợi ích",
          "Phân biệt đối xử"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Four: no favouritism.",
          "sub": "Bốn: phân biệt đối xử."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three: no money.",
          "sub": "Ba: đòi tiền."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: no errands.",
          "sub": "Hai: việc riêng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One: no false signatures.",
          "sub": "Một: xác nhận sai.",
          "keys": [
            "xác nhận sai"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s12",
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
            "at": "a1",
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
            "text": "⑥ Tố tụng · QT 26–28",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth stop"
          },
          {
            "id": "h-26",
            "t": "text",
            "text": "26 nội quy · hợp tác · độc lập",
            "x": 3996,
            "y": 1255,
            "size": 40,
            "at": "l1:Twenty six"
          },
          {
            "id": "h-27",
            "t": "text",
            "text": "27 phiên toà: bình tĩnh",
            "x": 3996,
            "y": 1320,
            "size": 40,
            "at": "l1:calm"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4856,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "dung"
                },
                {
                  "id": "lan",
                  "pose": "stop"
                }
              ],
              "left": {
                "label": "Cách A: bỏ về",
                "ok": false
              },
              "right": {
                "label": "Cách B: kiến nghị",
                "ok": true
              }
            },
            "at": "l2:mock",
            "caption": "Thứ Bảy · phiên toà giả định",
            "icon": "classical-building"
          },
          {
            "id": "h-A",
            "t": "text",
            "text": "A: bỏ về → khoản 28.2",
            "x": 3996,
            "y": 1420,
            "size": 46,
            "at": "a2:walk",
            "color": "coral",
            "hl": [
              {
                "text": "28.2",
                "at": "a2:walk"
              }
            ]
          },
          {
            "id": "h-B",
            "t": "text",
            "text": "B: ghi biên bản, kiến nghị → 27.3",
            "x": 3996,
            "y": 1500,
            "size": 40,
            "at": "b2:record",
            "color": "accent",
            "hl": [
              {
                "text": "27.3",
                "at": "b2:record"
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
          "say": "Sixth stop: Saturday. Chapter four, courts. Twenty six and twenty seven: follow rules and the presiding judge, stay calm.",
          "sub": "Chặng sáu: thứ Bảy. Chương IV, tố tụng. Quy tắc 26, 27: tuân thủ nội quy, theo điều khiển của chủ toạ, giữ bình tĩnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A mock trial. Lan presides. Dũng gets interrupted again and again. Two versions.",
          "sub": "Phiên toà giả định. Lan làm chủ toạ. Dũng bị ngắt lời nhiều lần. Hai phiên bản."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "lan",
          "say": "Counsel, please stop there.",
          "sub": "Luật sư dừng lại ở đây.",
          "phase": "a",
          "pose": "stop"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "dung",
          "say": "Again? Fine, I walk out in protest!",
          "sub": "Lại nữa à? Được, tôi bỏ về để phản đối!",
          "phase": "a",
          "face": "stern"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "lan",
          "say": "Counsel, please stop there.",
          "sub": "Luật sư dừng lại ở đây.",
          "phase": "b",
          "pose": "stop"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "dung",
          "say": "Please put my objection on the record. I make a formal request.",
          "sub": "Đề nghị ghi ý kiến của tôi vào biên bản. Tôi kiến nghị theo thủ tục.",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Walking out falls under clause twenty eight point two. The objection on record follows twenty seven point three.",
          "sub": "Bỏ về rơi đúng khoản 28.2. Đề nghị ghi biên bản, kiến nghị theo thủ tục là khoản 27.3.",
          "keys": [
            "khoản 28.2",
            "khoản 27.3"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s13",
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
            "id": "h-28",
            "t": "text",
            "text": "28: không nói sai trên báo",
            "x": 3996,
            "y": 1590,
            "size": 38,
            "at": "l1:media"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Phản đối bằng thủ tục",
            "x": 4856,
            "y": 1750,
            "size": 50,
            "at": "l2:procedure",
            "color": "accent",
            "hl": [
              {
                "text": "thủ tục",
                "at": "l2:procedure"
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
          "say": "Rule twenty eight also bans false statements to the media meant to cause harm.",
          "sub": "Quy tắc 28 còn cấm phát biểu điều biết rõ là sai sự thật trên truyền thông nhằm gây ảnh hưởng xấu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Protest through procedure, not through the door.",
          "sub": "Phản đối bằng thủ tục, không phản đối bằng cánh cửa.",
          "keys": [
            "Phản đối bằng thủ tục"
          ]
        }
      ],
      "ref": "p13,p15"
    },
    {
      "id": "s14",
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Cơ quan khác · Truyền thông",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh stop"
          },
          {
            "id": "i-29",
            "t": "text",
            "text": "Ch. V · QT 29–30",
            "x": 5964,
            "y": 1255,
            "size": 50,
            "at": "l1:Chapter five",
            "color": "accent"
          },
          {
            "id": "i-29a",
            "t": "text",
            "text": "từ chối móc nối trái luật",
            "x": 5984,
            "y": 1325,
            "size": 38,
            "at": "l2:middleman",
            "color": "coral",
            "hl": [
              {
                "text": "móc nối",
                "at": "l2:connect"
              }
            ]
          },
          {
            "id": "i-29b",
            "t": "text",
            "text": "giải thích khiếu nại, tố cáo",
            "x": 5984,
            "y": 1385,
            "size": 38,
            "at": "l2:Explain"
          },
          {
            "id": "i-30",
            "t": "text",
            "text": "tổ chức, cá nhân khác: đúng mực",
            "x": 5984,
            "y": 1445,
            "size": 38,
            "at": "l3:others"
          },
          {
            "id": "i-31",
            "t": "text",
            "text": "Ch. VI · QT 31 truyền thông",
            "x": 5964,
            "y": 1540,
            "size": 50,
            "at": "l4:Chapter six",
            "color": "accent"
          },
          {
            "id": "i-31a",
            "t": "text",
            "text": "trung thực · không nói xấu đồng nghiệp",
            "x": 5984,
            "y": 1610,
            "size": 38,
            "at": "l4:colleagues"
          },
          {
            "id": "i-32",
            "t": "text",
            "text": "QT 32: cấm quảng cáo gây nhầm",
            "x": 5964,
            "y": 1690,
            "size": 38,
            "at": "l5:advertising",
            "color": "coral",
            "hl": [
              {
                "text": "gây nhầm",
                "at": "l5:misleading"
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
          "say": "Seventh stop: Sunday. Chapter five, rules twenty nine and thirty: other agencies and people.",
          "sub": "Chặng bảy: Chủ nhật. Chương V, quy tắc 29, 30: cơ quan nhà nước khác, tổ chức, cá nhân."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Someone offers to connect you with an official? Refuse every illegal middleman. Explain complaint rules to clients.",
          "sub": "Có người mời “móc nối” với cán bộ? Kiên quyết từ chối trung gian trái luật. Giải thích cho khách quy định khiếu nại, tố cáo.",
          "keys": [
            "Kiên quyết từ chối"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "With others, behave properly.",
          "sub": "Với tổ chức, cá nhân khác thì ứng xử đúng mực."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Chapter six. Rule thirty one: honest and accurate, no bad mouthing colleagues on social media.",
          "sub": "Chương VI. Quy tắc 31: trung thực, chính xác, không nói xấu đồng nghiệp trên báo chí, mạng xã hội."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rule thirty two: no false or misleading advertising.",
          "sub": "Quy tắc 32: không quảng cáo thông tin không có thật hoặc gây hiểu nhầm.",
          "keys": [
            "gây hiểu nhầm"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s15",
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
            "at": "l5",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tối thứ Hai sau · vẫn quán ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Same"
          },
          {
            "id": "j-a0",
            "t": "text",
            "text": "Khách hàng",
            "x": 7932,
            "y": 1250,
            "size": 38,
            "at": "l2:Client"
          },
          {
            "id": "j-b0",
            "t": "text",
            "text": "→ Ch. II",
            "x": 8512,
            "y": 1250,
            "size": 38,
            "at": "l2:Client+300",
            "color": "accent"
          },
          {
            "id": "j-a1",
            "t": "text",
            "text": "Đồng nghiệp, tập sự, Đoàn",
            "x": 7932,
            "y": 1322,
            "size": 38,
            "at": "l2:Colleague"
          },
          {
            "id": "j-b1",
            "t": "text",
            "text": "→ Ch. III",
            "x": 8512,
            "y": 1322,
            "size": 38,
            "at": "l2:Colleague+300",
            "color": "accent"
          },
          {
            "id": "j-a2",
            "t": "text",
            "text": "Toà, điều tra, kiểm sát",
            "x": 7932,
            "y": 1394,
            "size": 38,
            "at": "l3:Court"
          },
          {
            "id": "j-b2",
            "t": "text",
            "text": "→ Ch. IV",
            "x": 8512,
            "y": 1394,
            "size": 38,
            "at": "l3:Court+300",
            "color": "accent"
          },
          {
            "id": "j-a3",
            "t": "text",
            "text": "Cơ quan khác, người khác",
            "x": 7932,
            "y": 1466,
            "size": 38,
            "at": "l3:Other"
          },
          {
            "id": "j-b3",
            "t": "text",
            "text": "→ Ch. V",
            "x": 8512,
            "y": 1466,
            "size": 38,
            "at": "l3:Other+300",
            "color": "accent"
          },
          {
            "id": "j-a4",
            "t": "text",
            "text": "Báo chí, mạng, quảng cáo",
            "x": 7932,
            "y": 1538,
            "size": 38,
            "at": "l4:media"
          },
          {
            "id": "j-b4",
            "t": "text",
            "text": "→ Ch. VI",
            "x": 8512,
            "y": 1538,
            "size": 38,
            "at": "l4:media+300",
            "color": "accent"
          },
          {
            "id": "j-a5",
            "t": "text",
            "text": "Giá trị nền, kết luận",
            "x": 7932,
            "y": 1610,
            "size": 38,
            "at": "l4:values"
          },
          {
            "id": "j-b5",
            "t": "text",
            "text": "→ Ch. I",
            "x": 8512,
            "y": 1610,
            "size": 38,
            "at": "l4:values+300",
            "color": "accent"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "card-index",
                "television"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Hai sau · Lan cầm thẻ",
            "icon": "card-index"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Ăn có nơi, chơi có chốn”",
            "x": 7932,
            "y": 1710,
            "size": 48,
            "at": "l7:place",
            "color": "accent",
            "hl": [
              {
                "text": "chơi có chốn",
                "at": "l7:rule"
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
          "say": "Next Monday. Same café. This time, Lan holds the card.",
          "sub": "Thứ Hai tuần sau. Vẫn quán ấy. Lần này Lan cầm thẻ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Who stands opposite? Client: chapter two. Colleague, firm, trainee, bar: chapter three.",
          "sub": "Ai đứng đối diện? Khách hàng: Chương II. Đồng nghiệp, tổ chức hành nghề, người tập sự, Đoàn: Chương III."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Court, investigator, prosecutor: four. Other agencies and people: five.",
          "sub": "Toà án, điều tra viên, kiểm sát viên: Chương IV. Cơ quan nhà nước khác, người khác: Chương V."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Press, social media, ad viewers: six. Need core values to conclude? Chapter one.",
          "sub": "Báo chí, mạng xã hội, người xem quảng cáo: Chương VI. Cần giá trị nền để kết luận: Chương I."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Test: a lawyer gives a TV interview about his case.",
          "sub": "Thử nhé: luật sư trả lời phỏng vấn truyền hình về vụ mình làm.",
          "pose": "thumb"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "The press stands opposite. Chapter six. And if it's false, rule twenty eight too!",
          "sub": "Báo chí đứng đối diện. Chương VI. Nói sai sự thật thì thêm Quy tắc 28!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Everything has its place. Now every rule does too.",
          "sub": "“Ăn có nơi, chơi có chốn.” Giờ quy tắc nào cũng có chỗ.",
          "keys": [
            "có chỗ"
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
      "ref": "p17,p18"
    },
    {
      "id": "s16",
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
            "at": "l1",
            "fit": "A",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
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
            "x": 1560,
            "y": 40,
            "at": "l1:opposite"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7464,
            "y": 40,
            "at": "l2:stages"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5496,
            "y": 1130,
            "at": "l3:twenty seven"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "h-A",
              "h-B"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:twenty seven+300"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề để ôn thi, không phải tư vấn vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 3996,
            "y": 660,
            "size": 26,
            "at": "l4",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "z-note2",
            "t": "text",
            "text": "Luật Luật sư đang sửa đổi (kỳ họp 17/10–21/11/2026): kiểm lại văn bản mới.",
            "x": 3996,
            "y": 700,
            "size": 26,
            "at": "l4",
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
          "say": "So: ask who stands opposite the lawyer. That gives the group.",
          "sub": "Tóm lại: hỏi ai đứng đối diện luật sư. Câu trả lời cho ra nhóm.",
          "keys": [
            "ai đứng đối diện luật sư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Split clients into three stages.",
          "sub": "Chia nhóm khách hàng theo ba chặng.",
          "keys": [
            "ba chặng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tell twenty seven point three from twenty eight point two, and read Rule twenty four first.",
          "sub": "Phân biệt khoản 27.3 với 28.2, và đọc Quy tắc 24 đầu tiên.",
          "keys": [
            "27.3",
            "28.2"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Today: write the six groups on a card, and sort three situations into them. Check the latest texts too.",
          "sub": "Việc làm ngay: viết sáu nhóm lên một tấm thẻ, xếp thử ba tình huống trong ngày. Và kiểm lại văn bản mới.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next: conflict of interest and confidentiality cases.",
          "sub": "Bài tiếp theo: tình huống xung đột lợi ích và bảo mật."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p18"
    },
    {
      "id": "s17",
      "module": "QUIZ-01",
      "data": {
        "q": "A lawyer tells a new client the case will surely be won, which clauses apply?",
        "options": [
          "The clauses on paying membership fees to the bar association",
          "The clauses on promising results beyond ability and misleading about competence",
          "The clauses on courtroom manners and leaving the hearing room early"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "handshake",
        "why": "9.8 cấm hứa kết quả; 9.7 cấm làm khách nhầm để ký."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A lawyer tells a new client the case will surely be won, which clauses apply?",
          "sub": "Luật sư nói với khách hàng mới chắc chắn thắng, áp dụng khoản nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The clauses on promising results beyond ability and misleading about competence.",
          "sub": "Khoản 9.8 và 9.7 trong nhóm khách hàng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Promising a sure win breaks nine point eight, and misleading a client to sign breaks nine point seven.",
          "sub": "Hứa chắc thắng phạm khoản 9.8; làm khách nhầm để ký hợp đồng phạm khoản 9.7."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[16]"
    },
    {
      "id": "s18",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "32 quy tắc, sáu nhóm quan hệ"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ ngay bên dưới.",
          "face": "happy"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-23",
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23 đồ vật kể chuyện: tấm thẻ “Ai đứng đối diện luật sư?” (việc làm ngay trong outro), máy cận thẻ rồi kéo ra thấy Thảo. Đét đứng trái + bảng trắng 10 ô theo MỘT TUẦN THẢO KÈM NHÓM ÔN XẾP TÌNH HUỐNG VÀO SÁU NHÓM: tối thứ Hai ở quán (Lan học theo số, quên) → câu hỏi chính, tìm nhóm trước (p1–p3) → thứ Ba nhóm chung QT 1–4 (p4; BRK-10 trích Lời nói đầu) → thứ Tư nhóm khách hàng ba chặng (p5) → thứ Năm QT 9, 10 + đóng vai: Dũng hứa “chắc thắng” với cô Hoa (“Khoan đã!” DLG, 9.8/9.7, p6, p7) + bốn bước của Thảo (p8) → thứ Sáu nhóm đồng nghiệp QT 17–25 (p9, p10) → Lan hỏi về QT 24 (p11, p12; BRK-11 bốn điều cấm) → thứ Bảy phiên toà giả định, khung ảnh SCENE-03 Cách A bỏ về 28.2 / Cách B kiến nghị 27.3 (p13–p15) → Chủ nhật QT 29–32 (p16) → thứ Hai sau cùng quán, Lan cầm thẻ tự xếp tình huống phỏng vấn truyền hình (khép vòng “Ăn có nơi, chơi có chốn”, p17, p18). Nhân vật: Thảo, Lan, Dũng, cô Hoa (khách trong vai diễn). Mọi quy tắc, khoản lấy từ bài; lưu ý chung #133 ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s15"
  }
};
