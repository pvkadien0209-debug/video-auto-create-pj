// Kịch bản video W lần 3 (#110) — "Làm sao xác định đúng vấn đề thật?" · chuỗi "Giải quyết vấn đề và ra quyết định"
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-define-the-real-problem--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "workplace-problem-solvers",
    "slug": "how-to-define-the-real-problem",
    "door": "ky-nang",
    "level": "B1",
    "title": "Làm sao xác định đúng vấn đề thật trước khi bắt tay vào sửa?",
    "series": "Giải quyết vấn đề và ra quyết định"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT NGÀY THỨ BA của Thảo (8:30 tin Cô Hoa “khách phàn nàn giao hàng chậm, em xử lý đi” → ① 8:35 mười phút đầu, hẹn 15:00 → ② 9:00 triệu chứng/vấn đề thật + nhớ lại chuyện báo cáo tháng trước → ③ 10:00 năm câu hỏi, hỏi Lan (bán hàng) và Dũng (kho) → “Khoan đã!” 11:00 Dũng đòi thuê đơn vị giao hàng → ④ 11:15 lọc theo “ở đâu”: một khu ngoại thành → ⑤ 13:30 viết câu mô tả → ⑥ 14:00 họp “thiếu phần mềm”, Thảo kéo lại → ⑦ 14:30 Cô Hoa giao mẫu báo cáo doanh thu (A/B) → ⑧ 14:55 đọc lại cho Cô Hoa). Nhân vật (mạch chủ đề w145/_series/workplace-problem-solvers.md): Thảo (Khánh p7, Lộc p24, người kéo cuộc họp p28), Dũng (người muốn thuê đơn vị giao hàng p14, người nói “thiếu phần mềm” p20/p28), Lan (người nghe máy p12–p13), Cô Hoa (sếp giao việc, giao mẫu báo cáo). Cảnh ngắt nhịp: BRK-07 “hỏi ai?” (p12), BRK-04 trước/sau câu mô tả (p20), BRK-11 bốn điều trước khi sửa (p29). Khép vòng: “Sai một li, đi một dặm” → đúng từ li đầu, kịp hẹn 15:00. Bản cũ (W lần 3, #112): w145/bak/how-to-define-the-real-problem--w01.js.",
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
            "id": "a-num",
            "t": "text",
            "text": "10 phút đầu",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:ten",
            "color": "accent",
            "hl": [
              {
                "text": "10 phút",
                "at": "l1:minutes"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "để hiểu, chưa để sửa",
            "x": 70,
            "y": 330,
            "size": 60,
            "at": "l1:understanding",
            "hl": [
              {
                "text": "để hiểu",
                "at": "l1:understanding"
              }
            ]
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "Làm ngay cho có trách nhiệm?",
            "x": 70,
            "y": 450,
            "size": 52,
            "at": "l2:something",
            "color": "muted"
          },
          {
            "id": "a-xx",
            "t": "strike",
            "over": "a-x",
            "at": "l2:responsible+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ten minutes. Spend the first ten on understanding what's wrong, not on fixing it.",
          "sub": "Mười phút. Mười phút đầu để hiểu điều gì đang sai, chưa phải để sửa.",
          "keys": [
            "hiểu điều gì đang sai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet we rush to do something, anything, to look responsible.",
          "sub": "Vậy mà ta cứ vội làm một việc gì đó, cho thấy mình có trách nhiệm.",
          "keys": [
            "có trách nhiệm"
          ]
        }
      ],
      "ref": "intro,p1"
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
            "x": 900,
            "y": 120,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone",
                "delivery-truck"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "thao",
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
            "caption": "Thứ Ba 8:30 · tin của Cô Hoa",
            "icon": "mobile-phone"
          },
          {
            "id": "a-msg",
            "t": "text",
            "text": "“Khách phàn nàn giao chậm”",
            "x": 60,
            "y": 560,
            "size": 46,
            "at": "l3:complain",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Sai một li, đi một dặm”",
            "x": 60,
            "y": 665,
            "size": 56,
            "at": "l4:hair",
            "color": "accent",
            "hl": [
              {
                "text": "đi một dặm",
                "at": "l4:mile"
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
          "say": "Meet Thảo, accountant, and Cô Hoa's go-to for messy problems.",
          "sub": "Đây là Thảo, kế toán, cũng là người Cô Hoa hay giao những việc rối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tuesday, eight thirty. A message from Cô Hoa.",
          "sub": "Thứ Ba, tám giờ rưỡi. Tin nhắn của Cô Hoa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Customers complain delivery is slow, please fix it. I must do something now!",
          "sub": "“Khách phàn nàn giao hàng chậm, em xử lý đi.” Phải làm gì đó ngay!",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Easy. As we say: off by a hair, lost by a mile.",
          "sub": "Từ từ. Ông bà dặn: “Sai một li, đi một dặm.”",
          "keys": [
            "Sai một li, đi một dặm"
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
      "ref": "intro"
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
            "text": "Đang sửa đúng vấn đề chưa?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:real problem",
            "hl": [
              {
                "text": "đúng vấn đề",
                "at": "l1:real problem"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: họp, nhắc, đổi ngay",
            "x": 2028,
            "y": 170,
            "size": 48,
            "at": "l2:meeting",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:costs"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: một câu rõ ràng",
            "x": 2028,
            "y": 260,
            "size": 56,
            "at": "l3:sentence",
            "color": "accent",
            "hl": [
              {
                "text": "một câu rõ ràng",
                "at": "l3:clear sentence"
              }
            ]
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "cái gì · ở đâu · khi nào",
            "x": 2058,
            "y": 350,
            "size": 46,
            "at": "l3:where"
          },
          {
            "id": "b-5b",
            "t": "text",
            "text": "lớn cỡ nào · ai bị ảnh hưởng",
            "x": 2058,
            "y": 415,
            "size": 46,
            "at": "l3:how big"
          },
          {
            "id": "b-day",
            "t": "text",
            "text": "1 ngày thứ Ba · 8 chặng",
            "x": 2028,
            "y": 500,
            "size": 50,
            "at": "l4:Tuesday",
            "hl": [
              {
                "text": "8 chặng",
                "at": "l4:eight stops"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l4:eight stops+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2233,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l4:eight stops+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2438,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l4:eight stops+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2643,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l4:eight stops+1000",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2848,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l4:eight stops+1200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3053,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l4:eight stops+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3258,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l4:eight stops+1600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3463,
            "y": 580,
            "w": 180,
            "h": 90,
            "at": "l4:eight stops+1800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "8:35",
            "x": 2053,
            "y": 595,
            "size": 46,
            "at": "l4:eight stops+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "9:00",
            "x": 2258,
            "y": 595,
            "size": 46,
            "at": "l4:eight stops+720"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "10:00",
            "x": 2463,
            "y": 595,
            "size": 46,
            "at": "l4:eight stops+920"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "11:00",
            "x": 2668,
            "y": 595,
            "size": 46,
            "at": "l4:eight stops+1120"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "13:30",
            "x": 2873,
            "y": 595,
            "size": 46,
            "at": "l4:eight stops+1320"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "14:00",
            "x": 3078,
            "y": 595,
            "size": 46,
            "at": "l4:eight stops+1520"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "14:30",
            "x": 3283,
            "y": 595,
            "size": 46,
            "at": "l4:eight stops+1720"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "14:55",
            "x": 3488,
            "y": 595,
            "size": 46,
            "at": "l4:eight stops+1920"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you find the real problem, before looking for solutions?",
          "sub": "Vậy làm sao xác định đúng vấn đề, trước khi tìm giải pháp?",
          "keys": [
            "đúng vấn đề"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a meeting or a new process right away. Fixing the wrong place costs more than fixing late.",
          "sub": "Không phải họp hay đổi quy trình ngay. Sửa nhầm chỗ còn tốn hơn sửa chậm.",
          "keys": [
            "Sửa nhầm chỗ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But one clear sentence: what is wrong, where, since when, how big, and who is hurt.",
          "sub": "Mà là một câu rõ ràng: cái gì sai, ở đâu, từ khi nào, lớn cỡ nào, ai bị ảnh hưởng.",
          "keys": [
            "một câu rõ ràng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Write it, and the rest gets lighter. Thảo's Tuesday, eight stops.",
          "sub": "Viết được câu đó, phần sau nhẹ đi một nửa. Theo Thảo qua ngày thứ Ba, tám chặng."
        }
      ],
      "ref": "p1,intro"
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
          },
          {
            "at": "l4",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 8:35 · Mười phút đầu",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 120,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:pen",
            "caption": "8:35 · giấy bút, chưa họp",
            "icon": "memo"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 165,
            "w": 46,
            "h": 46,
            "at": "l2:word for word",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 149,
            "size": 58,
            "at": "l2:word for word+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Chép nguyên văn",
            "x": 4061,
            "y": 159,
            "size": 48,
            "at": "l2:word for word+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 245,
            "w": 46,
            "h": 46,
            "at": "l2:underline",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 229,
            "size": 58,
            "at": "l2:underline+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Gạch chữ mơ hồ",
            "x": 4061,
            "y": 239,
            "size": 48,
            "at": "l2:underline+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 325,
            "w": 46,
            "h": 46,
            "at": "l3:columns",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 309,
            "size": 58,
            "at": "l3:columns+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Hai cột: chắc / đoán",
            "x": 4061,
            "y": 319,
            "size": 48,
            "at": "l3:columns+200"
          },
          {
            "id": "c-sure",
            "t": "text",
            "text": "Chắc: có cuộc gọi phàn nàn",
            "x": 3996,
            "y": 420,
            "size": 42,
            "at": "l4:sure"
          },
          {
            "id": "c-gu",
            "t": "text",
            "text": "Đoán: tài xế lười?",
            "x": 3996,
            "y": 485,
            "size": 44,
            "at": "l4:guess",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: eight thirty-five. No meeting. Thảo takes a pen.",
          "sub": "Chặng một: tám giờ ba lăm. Không họp. Thảo cầm bút.",
          "keys": [
            "cầm bút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Copy the complaint word for word. Underline vague words: slow, bad, always.",
          "sub": "Chép nguyên văn lời phàn nàn. Gạch chân chữ mơ hồ: “chậm”, “tệ”, “lúc nào cũng”.",
          "keys": [
            "Chép nguyên văn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then two columns: what you know for sure, and what you only guess.",
          "sub": "Rồi chia hai cột: điều biết chắc và điều mới chỉ đoán.",
          "keys": [
            "hai cột"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Sure: the complaint calls. Only a guess: lazy drivers?",
          "sub": "Biết chắc: có cuộc gọi phàn nàn. Mới đoán: tài xế lười?",
          "face": "thinking"
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
            "fit": "C",
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-w1",
            "t": "text",
            "text": "“Khách phàn nàn giao chậm”",
            "x": 3996,
            "y": 560,
            "size": 42,
            "at": "l1:customers"
          },
          {
            "id": "c-w2",
            "t": "text",
            "text": "+ “ở ngoại thành”",
            "x": 3996,
            "y": 620,
            "size": 42,
            "at": "l1:outer",
            "color": "accent",
            "hl": [
              {
                "text": "ngoại thành",
                "at": "l1:outer"
              }
            ]
          },
          {
            "id": "c-diff",
            "t": "text",
            "text": "→ hai việc rất khác nhau",
            "x": 3996,
            "y": 685,
            "size": 44,
            "at": "l1:different"
          },
          {
            "id": "c-rep",
            "t": "text",
            "text": "Hẹn: mô tả rõ trước 15:00",
            "x": 4836,
            "y": 690,
            "size": 42,
            "at": "l3:three",
            "color": "accent",
            "hl": [
              {
                "text": "trước 15:00",
                "at": "l3:three"
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
          "say": "Why word for word? Customers complain, versus customers in the outer districts complain. Very different jobs.",
          "sub": "Vì sao chép nguyên văn? “Khách phàn nàn” khác hẳn “khách ở ngoại thành phàn nàn”. Hai việc rất khác nhau.",
          "keys": [
            "ngoại thành"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Boss waiting? Reply at once, without wild promises.",
          "sub": "Sếp đang chờ? Trả lời ngay một câu, không hứa bừa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Got it. I'll check the data and send you a clear description before three today.",
          "sub": "Em đã nhận, em xem số liệu và gửi chị mô tả rõ vấn đề trước ba giờ chiều nay ạ.",
          "pose": "phone",
          "face": "happy"
        }
      ],
      "ref": "p3,p4"
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
            "text": "② 9:00 · Triệu chứng hay gốc?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second stop"
          },
          {
            "id": "d-sym",
            "t": "text",
            "text": "Triệu chứng: ai cũng thấy",
            "x": 5964,
            "y": 160,
            "size": 50,
            "at": "l1:symptom",
            "hl": [
              {
                "text": "ai cũng thấy",
                "at": "l1:everyone sees"
              }
            ]
          },
          {
            "id": "d-sym2",
            "t": "text",
            "text": "trễ · phàn nàn · doanh số giảm",
            "x": 5994,
            "y": 235,
            "size": 42,
            "at": "l1:late",
            "color": "muted"
          },
          {
            "id": "d-real",
            "t": "text",
            "text": "Vấn đề thật: điều kiện lặp lại",
            "x": 5964,
            "y": 320,
            "size": 48,
            "at": "l2:condition",
            "color": "accent",
            "hl": [
              {
                "text": "điều kiện lặp lại",
                "at": "l2:condition"
              }
            ]
          },
          {
            "id": "d-real2",
            "t": "text",
            "text": "dữ liệu muộn · bỏ một bước kiểm",
            "x": 5994,
            "y": 395,
            "size": 42,
            "at": "l2:late data",
            "color": "muted"
          },
          {
            "id": "d-pill",
            "t": "illus",
            "name": "pill",
            "x": 5964,
            "y": 470,
            "size": 80,
            "at": "l3:fever"
          },
          {
            "id": "d-fev",
            "t": "text",
            "text": "Thuốc hạ sốt ≠ khỏi bệnh",
            "x": 6064,
            "y": 485,
            "size": 48,
            "at": "l3:fever",
            "color": "coral",
            "hl": [
              {
                "text": "≠ khỏi bệnh",
                "at": "l3:sick"
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
          "say": "Second stop: nine a.m. A symptom is what everyone sees: late reports, complaints, falling sales.",
          "sub": "Chặng hai: chín giờ. Triệu chứng là thứ ai cũng thấy: báo cáo trễ, khách phàn nàn, doanh số giảm.",
          "keys": [
            "Triệu chứng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The real problem is the condition behind it, like late data, or a skipped check.",
          "sub": "Vấn đề thật là điều kiện cứ lặp lại sinh ra nó, như dữ liệu đến muộn, một bước kiểm bị bỏ.",
          "keys": [
            "Vấn đề thật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fixed, but the condition remains? It comes back. Like fever pills, without knowing why you're sick.",
          "sub": "“Chữa” xong mà điều kiện còn nguyên? Chuyện sẽ quay lại. Như uống thuốc hạ sốt mà chưa biết vì sao sốt.",
          "keys": [
            "thuốc hạ sốt"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "at": "l2",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 120,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "stern"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold",
                  "face": "worried"
                }
              ],
              "props": [
                "page-facing-up",
                "alarm-clock"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:last month",
            "caption": "Tháng trước · cuộc họp vội",
            "icon": "alarm-clock"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Chưa rõ khâu → đừng thúc ai",
            "x": 5964,
            "y": 600,
            "size": 46,
            "at": "l4:push",
            "color": "accent",
            "hl": [
              {
                "text": "đừng thúc ai",
                "at": "l4:push"
              }
            ]
          },
          {
            "id": "d-thu",
            "t": "text",
            "text": "Số: chiều T5 · Hạn: sáng T6",
            "x": 5964,
            "y": 690,
            "size": 44,
            "at": "l3:Thursday",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo learned this last month, with her late weekly report.",
          "sub": "Thảo từng nếm bài này tháng trước, với bản báo cáo tuần cứ trễ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Everyone, faster! The deadline is one day earlier!",
          "sub": "Mọi người làm nhanh hơn! Hạn nộp dời sớm một ngày!",
          "face": "stern",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Still late, everyone more tired. Then she logged four reports: sales figures came Thursday afternoon, deadline Friday morning.",
          "sub": "Hai tuần sau vẫn trễ, cả nhóm còn mệt hơn. Rồi cô ghi giờ bốn báo cáo: số liệu bán hàng đến chiều thứ Năm, hạn nộp sáng thứ Sáu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Don't push anyone until you know which step is late.",
          "sub": "Chưa biết trễ ở khâu nào, đừng vội thúc ai.",
          "keys": [
            "đừng vội thúc ai"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s07",
      "module": "BRK-07",
      "data": {
        "question": "Hỏi ai: người nghe kể, hay người tận mắt?",
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
          "say": "Who do you ask: someone who heard, or someone who saw?",
          "sub": "Hỏi ai: người nghe kể lại, hay người tận mắt thấy?",
          "keys": [
            "người tận mắt thấy"
          ]
        }
      ],
      "ref": "p12"
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
            "at": 150,
            "fit": "E",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 10:00 · Năm câu hỏi",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third stop"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Cái gì: sản phẩm, công đoạn?",
            "x": 7932,
            "y": 160,
            "size": 44,
            "at": "l2:what"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Ở đâu: chi nhánh, ca, khu?",
            "x": 7932,
            "y": 230,
            "size": 44,
            "at": "l2:where"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Khi nào: từ bao giờ, có lặp?",
            "x": 7932,
            "y": 300,
            "size": 44,
            "at": "l2:when",
            "color": "accent",
            "hl": [
              {
                "text": "Khi nào",
                "at": "l3:unlocks"
              }
            ]
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Bao nhiêu: lệch cỡ nào?",
            "x": 7932,
            "y": 370,
            "size": 44,
            "at": "l2:how much"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "Ai bị ảnh hưởng, thiệt gì?",
            "x": 7932,
            "y": 440,
            "size": 44,
            "at": "l2:who"
          },
          {
            "id": "e-mon",
            "t": "text",
            "text": "Sáng T2? Đổi nhà cung cấp?",
            "x": 7932,
            "y": 520,
            "size": 38,
            "at": "l3:Monday",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: ten a.m. Five small questions fit most problems. No fancy forms, just facts.",
          "sub": "Chặng ba: mười giờ. Năm câu hỏi nhỏ đủ dùng cho hầu hết sự cố. Không cần biểu mẫu, chỉ cần dữ kiện.",
          "keys": [
            "Năm câu hỏi nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What step? Where? Since when? How much, against normal? Who is affected?",
          "sub": "Cái gì, sản phẩm, công đoạn nào? Ở đâu? Khi nào, từ bao giờ? Bao nhiêu, so với bình thường? Và ai bị ảnh hưởng?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "When often unlocks it fastest. Only Monday mornings? Only since a new supplier? Look there first.",
          "sub": "Câu “khi nào” thường mở khoá nhanh nhất. Chỉ sáng thứ Hai? Chỉ từ khi đổi nhà cung cấp? Nhìn chỗ đó trước.",
          "keys": [
            "mở khoá nhanh nhất"
          ]
        }
      ],
      "ref": "p9,p10,p11"
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
            "at": "l2",
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
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 120,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone"
                }
              ],
              "props": [
                "telephone-receiver",
                "memo"
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
                  "shot": "medium",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Lan",
            "caption": "10:00 · hỏi người nghe máy",
            "icon": "telephone-receiver"
          },
          {
            "id": "e-ex",
            "t": "text",
            "text": "“Cho em ví dụ gần nhất?”",
            "x": 7932,
            "y": 600,
            "size": 46,
            "at": "l2:example",
            "color": "accent",
            "hl": [
              {
                "text": "ví dụ gần nhất",
                "at": "l2:most recent"
              }
            ]
          },
          {
            "id": "e-2p",
            "t": "text",
            "text": "Hỏi 2 vị trí: bán hàng + kho",
            "x": 7932,
            "y": 690,
            "size": 44,
            "at": "l4:second",
            "hl": [
              {
                "text": "2 vị trí",
                "at": "l4:second role"
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
          "say": "Ask the person who met the problem, not someone who heard. Lan from sales takes the calls.",
          "sub": "Hỏi người trực tiếp gặp sự cố, không chỉ người nghe kể. Lan bên bán hàng là người nghe máy.",
          "keys": [
            "trực tiếp gặp sự cố"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Lan, can you give me the most recent example? When was it, at which step?",
          "sub": "Lan ơi, cho chị một ví dụ gần nhất được không? Lần đó lúc nào, ở bước nào?",
          "to": "lan",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Yesterday afternoon. A shop on the city edge, waiting again.",
          "sub": "Chiều qua ạ. Một cửa hàng ở rìa thành phố, lại phải chờ.",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then ask a second role, like Dũng in the warehouse. Each sees one corner. One side alone misleads.",
          "sub": "Rồi hỏi thêm một vị trí khác, như Dũng ở kho. Mỗi người thấy một góc. Nghe một phía dễ lạc hướng.",
          "keys": [
            "Nghe một phía"
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
      "ref": "p12,p13"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "shop",
        "label": "11:00 thuê thêm xe?",
        "actors": [
          {
            "id": "dung",
            "side": "right",
            "pose": "point"
          },
          {
            "id": "thao",
            "side": "left"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Thuê ngay đơn vị giao hàng mới",
          "why": "Mất cả tuần thương lượng, tốn thêm tiền, trong khi chỗ hỏng có thể chỉ ở một khu.",
          "rule": "Hỏi ở đâu, khi nào, rồi mới hỏi làm gì"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Every week customers say: too slow! Let's hire another delivery company today!",
          "sub": "Tuần nào khách cũng chê “chậm quá”! Thuê thêm một đơn vị giao hàng ngay hôm nay đi!",
          "face": "stern",
          "pose": "point",
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
          "say": "For the whole city? A week of talks, more cost. Sort the complaints by where first. Rewind!",
          "sub": "Thuê cho cả thành phố? Cả tuần thương lượng, thêm chi phí. Lọc khiếu nại theo “ở đâu” trước đã. Tua lại!",
          "phase": "redo",
          "keys": [
            "theo “ở đâu” trước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Dũng, let's sort this week's complaints by area first.",
          "sub": "Dũng ơi, mình lọc khiếu nại theo khu vực trước nhé.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain",
          "to": "dung"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p14"
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
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 11:15 · Lọc theo “ở đâu”",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth stop"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 1210,
            "w": 720,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "point",
                  "face": "surprised"
                },
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think"
                }
              ],
              "props": [
                "round-pushpin",
                "delivery-truck"
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
            "at": "l1:sorted",
            "caption": "11:15 · kho, bản đồ khiếu nại",
            "icon": "round-pushpin"
          },
          {
            "id": "f-pin",
            "t": "illus",
            "name": "round-pushpin",
            "x": 60,
            "y": 1250,
            "size": 80,
            "at": "l2:outer"
          },
          {
            "id": "f-one",
            "t": "text",
            "text": "Gần hết: 1 khu ngoại thành",
            "x": 150,
            "y": 1265,
            "size": 46,
            "at": "l2:almost all",
            "color": "accent",
            "hl": [
              {
                "text": "1 khu ngoại thành",
                "at": "l2:outer district"
              }
            ]
          },
          {
            "id": "f-hop",
            "t": "text",
            "text": "→ chờ thêm một chặng trung chuyển",
            "x": 90,
            "y": 1345,
            "size": 40,
            "at": "l2:transfer"
          },
          {
            "id": "f-city",
            "t": "text",
            "text": "Thuê cả thành phố? Tốn!",
            "x": 60,
            "y": 1435,
            "size": 40,
            "at": "l3:whole city",
            "color": "coral"
          },
          {
            "id": "f-cx",
            "t": "strike",
            "over": "f-city",
            "at": "l3:one area"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Hỏi ở đâu, khi nào",
            "x": 60,
            "y": 1530,
            "size": 54,
            "at": "l4:where",
            "color": "accent",
            "hl": [
              {
                "text": "ở đâu, khi nào",
                "at": "l4:where and when"
              }
            ]
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "rồi mới hỏi làm gì",
            "x": 60,
            "y": 1610,
            "size": 54,
            "at": "l4:what to do"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: eleven fifteen. The complaints, sorted by where.",
          "sub": "Chặng bốn: mười một giờ mười lăm. Khiếu nại được lọc theo “ở đâu”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Almost all come from one outer district. Goods wait there for an extra transfer stop!",
          "sub": "Gần như tất cả từ một khu ngoại thành. Hàng ở đó phải chờ thêm một chặng trung chuyển!",
          "face": "surprised",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A new company for the whole city, for a problem in one area.",
          "sub": "Thuê đơn vị mới cho cả thành phố, trong khi chỗ hỏng chỉ ở một khu.",
          "keys": [
            "chỉ ở một khu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ask where and when first. Then ask what to do.",
          "sub": "Hỏi đủ ở đâu, khi nào, rồi hãy hỏi làm gì.",
          "keys": [
            "ở đâu, khi nào"
          ]
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s12",
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
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 13:30 · Viết một câu",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:fifth stop"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1210,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:sentence",
            "caption": "13:30 · câu mô tả vấn đề",
            "icon": "memo"
          },
          {
            "id": "g-s1",
            "t": "text",
            "text": "“Từ đầu tháng, đơn ngoại thành",
            "x": 2028,
            "y": 1250,
            "size": 44,
            "at": "l2:since"
          },
          {
            "id": "g-s2",
            "t": "text",
            "text": "đến muộn hơn hẹn,",
            "x": 2028,
            "y": 1315,
            "size": 44,
            "at": "l2:later"
          },
          {
            "id": "g-s3",
            "t": "text",
            "text": "khiếu nại tăng rõ.”",
            "x": 2028,
            "y": 1380,
            "size": 44,
            "at": "l2:complaint",
            "hl": [
              {
                "text": "tăng rõ",
                "at": "l2:clearly up"
              }
            ]
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "Chưa trách ai, chưa nói làm gì",
            "x": 2028,
            "y": 1470,
            "size": 42,
            "at": "l3:blame",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: one thirty. Thảo puts it all into one sentence.",
          "sub": "Chặng năm: một rưỡi chiều. Thảo gom tất cả vào một câu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Since early this month, outer district orders arrive later than promised, and complaint calls are clearly up.",
          "sub": "Từ đầu tháng, đơn giao ở khu ngoại thành đến muộn hơn hẹn, khiến cuộc gọi khiếu nại tăng rõ.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No blame, no fix yet. But it shows exactly where to look.",
          "sub": "Chưa nói ai lỗi, chưa nói làm gì, nhưng chỉ rõ chỗ cần tìm hiểu.",
          "keys": [
            "chỉ rõ chỗ cần tìm hiểu"
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-n1",
            "t": "text",
            "text": "✗ Cài giải pháp: “thiếu phần mềm”",
            "x": 2028,
            "y": 1550,
            "size": 40,
            "at": "l1:software"
          },
          {
            "id": "g-n2",
            "t": "text",
            "text": "✗ Đổ lỗi: “nhân viên cẩu thả”",
            "x": 2028,
            "y": 1615,
            "size": 40,
            "at": "l2:careless"
          },
          {
            "id": "g-n3",
            "t": "text",
            "text": "✗ Quá rộng: “giao tiếp kém”",
            "x": 2028,
            "y": 1680,
            "size": 40,
            "at": "l2:broad"
          },
          {
            "id": "g-def",
            "t": "text",
            "text": "Gắn tên → ai cũng phòng thủ",
            "x": 2028,
            "y": 1760,
            "size": 42,
            "at": "l3:defends",
            "color": "coral",
            "hl": [
              {
                "text": "phòng thủ",
                "at": "l3:defends"
              }
            ]
          },
          {
            "id": "g-nar",
            "t": "text",
            "text": "Thu hẹp: lịch giao không tới kho",
            "x": 2868,
            "y": 1780,
            "size": 40,
            "at": "l4:warehouse",
            "color": "accent",
            "hl": [
              {
                "text": "không tới kho",
                "at": "l4:warehouse"
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
          "say": "Three traps. A built-in fix: the problem is, we lack software.",
          "sub": "Ba cái bẫy. Cài sẵn giải pháp: “vấn đề là thiếu phần mềm”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Blame: new staff are careless. Too broad: our team communicates badly.",
          "sub": "Đổ lỗi: “nhân viên mới cẩu thả”. Quá rộng: “phòng mình giao tiếp kém”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No blame isn't a cover-up. Name a person, everyone defends, and the real details stay hidden.",
          "sub": "Không đổ lỗi chẳng phải bao che. Gắn tên một người là ai cũng phòng thủ, chi tiết thật chẳng ai dám nói.",
          "keys": [
            "chẳng phải bao che"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Too broad, nobody can fix it. Narrow it: schedule changes don't reach the warehouse.",
          "sub": "Quá rộng thì không ai sửa được. Thu về một chỗ: “thông tin đổi lịch giao không đến được kho”.",
          "keys": [
            "Thu về một chỗ"
          ]
        }
      ],
      "ref": "p17,p18,p19"
    },
    {
      "id": "s14",
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 14:00 · Họp, giải pháp bay",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1210,
            "w": 720,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "stand"
                },
                {
                  "id": "lan",
                  "side": "center"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "point"
                }
              ],
              "props": [
                "laptop"
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
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:meeting",
            "caption": "14:00 · phòng họp",
            "icon": "busts-in-silhouette"
          },
          {
            "id": "h-sw",
            "t": "text",
            "text": "“Thiếu phần mềm! Mua đi!”",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l2:software",
            "color": "coral"
          },
          {
            "id": "h-pull",
            "t": "text",
            "text": "“Thống nhất cần sửa gì đã”",
            "x": 3996,
            "y": 1340,
            "size": 46,
            "at": "l3:agree",
            "color": "accent",
            "hl": [
              {
                "text": "cần sửa gì",
                "at": "l3:need to fix"
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
          "say": "Sixth stop: two p.m. A meeting, and solutions start flying.",
          "sub": "Chặng sáu: hai giờ chiều. Vào họp, giải pháp bắt đầu bay tứ tung."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The problem is we have no order software. Let's buy one!",
          "sub": "Vấn đề là phòng mình thiếu phần mềm quản lý đơn. Mua đi!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Before we talk about how, let's agree on exactly what we need to fix.",
          "sub": "Trước khi bàn cách làm, mình thống nhất xem đang cần sửa chính xác điều gì đã nhé.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One light sentence pulls the whole meeting back.",
          "sub": "Một câu nhẹ kéo cả cuộc họp về đúng chỗ.",
          "keys": [
            "Một câu nhẹ"
          ]
        }
      ],
      "ref": "p28"
    },
    {
      "id": "s15",
      "module": "BRK-04",
      "data": {
        "title": "Câu mô tả vấn đề",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Phòng mình thiếu phần mềm quản lý đơn",
        "right": "Một đơn chép tay qua ba bảng tính",
        "wrongIllus": "cross-mark",
        "rightIllus": "memo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: we lack software. Bought it, errors stayed.",
          "sub": "Trước: “thiếu phần mềm quản lý đơn”. Mua rồi, lỗi vẫn còn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: orders copied by hand into three sheets.",
          "sub": "Sau: “một đơn phải chép tay qua ba bảng tính”.",
          "keys": [
            "ba bảng tính"
          ]
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s16",
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
            "id": "h-3",
            "t": "text",
            "text": "Gốc: chép qua ba nơi",
            "x": 3996,
            "y": 1440,
            "size": 48,
            "at": "l1:three places",
            "hl": [
              {
                "text": "ba nơi",
                "at": "l1:three places"
              }
            ]
          },
          {
            "id": "h-o1",
            "t": "text",
            "text": "Gộp bảng tính → nối tự động",
            "x": 3996,
            "y": 1520,
            "size": 42,
            "at": "l2:merge"
          },
          {
            "id": "h-o2",
            "t": "text",
            "text": "→ rồi mới tới phần mềm",
            "x": 3996,
            "y": 1585,
            "size": 42,
            "at": "l2:software",
            "color": "muted"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Câu mô tả không chứa đáp án",
            "x": 3996,
            "y": 1690,
            "size": 48,
            "at": "l3:answer",
            "color": "accent",
            "hl": [
              {
                "text": "không chứa đáp án",
                "at": "l3:answer"
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
          "say": "The after sentence hits the real root, copying in three places, and leaves many fixes open.",
          "sub": "Câu sau chỉ đúng gốc là chép qua ba nơi, và để ngỏ nhiều cách sửa.",
          "keys": [
            "để ngỏ nhiều cách sửa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Merge the sheets, link the data, and only then think about software.",
          "sub": "Gộp bảng tính, nối dữ liệu tự động, rồi mới tính tới phần mềm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A problem statement never holds the answer.",
          "sub": "Câu mô tả vấn đề không chứa sẵn đáp án.",
          "keys": [
            "không chứa sẵn đáp án"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s17",
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
            "at": "a1",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "b3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 14:30 · Sếp chỉ sẵn cách",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "n1:seventh stop"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6804,
            "y": 1210,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao"
                },
                {
                  "id": "hoa",
                  "pose": "hold"
                }
              ],
              "left": {
                "label": "A: làm ngay",
                "ok": false
              },
              "right": {
                "label": "B: hỏi mục đích",
                "ok": true
              }
            },
            "at": "n1:solution",
            "caption": "14:30 · mẫu báo cáo doanh thu",
            "icon": "ledger"
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "A: mẫu đẹp → số vẫn lệch",
            "x": 5964,
            "y": 1250,
            "size": 46,
            "at": "a3:match",
            "color": "coral"
          },
          {
            "id": "i-b",
            "t": "text",
            "text": "B: hỏi “để khắc phục gì?”",
            "x": 5964,
            "y": 1335,
            "size": 46,
            "at": "b1:fix",
            "color": "accent",
            "hl": [
              {
                "text": "khắc phục gì",
                "at": "b1:fix"
              }
            ]
          },
          {
            "id": "i-b2",
            "t": "text",
            "text": "+ dòng nguồn số, ngày chốt",
            "x": 5994,
            "y": 1415,
            "size": 42,
            "at": "b3:source"
          },
          {
            "id": "i-ok",
            "t": "text",
            "text": "→ lần đầu khớp số",
            "x": 5994,
            "y": 1485,
            "size": 46,
            "at": "b3:matched",
            "hl": [
              {
                "text": "khớp số",
                "at": "b3:matched"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "n1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: two thirty. Cô Hoa drops by, with a ready solution.",
          "sub": "Chặng bảy: hai rưỡi. Cô Hoa ghé qua, kèm sẵn một giải pháp."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, please make a new revenue report template.",
          "sub": "Thảo làm giúp chị mẫu báo cáo doanh thu mới nhé.",
          "phase": "a",
          "pose": "explain"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "thao",
          "say": "Sure! Prettier, with clear colours.",
          "sub": "Dạ, em làm mẫu đẹp hơn, rõ màu ạ.",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "a3",
          "lang": "en",
          "who": "det",
          "say": "Sales and accounting numbers still don't match. The root wasn't touched.",
          "sub": "Số hai phòng vẫn lệch như cũ, vì cái gốc chưa được chạm tới.",
          "phase": "a"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "What should the new template help fix, so I get it right?",
          "sub": "Chị muốn mẫu mới giúp khắc phục điều gì ạ, để em làm cho trúng?",
          "phase": "b",
          "face": "thinking"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "hoa",
          "say": "Every month, our two departments have different numbers.",
          "sub": "Tháng nào hai phòng cũng lệch số.",
          "phase": "b"
        },
        {
          "id": "b3",
          "lang": "en",
          "who": "det",
          "say": "She adds a line: each number's source and closing date. That month, the numbers matched.",
          "sub": "Thảo thêm một dòng ghi rõ nguồn số, ngày chốt. Tháng đó lần đầu hai phòng khớp số.",
          "phase": "b",
          "keys": [
            "khớp số"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
      "ref": "p24"
    },
    {
      "id": "s18",
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
            "id": "i-n",
            "t": "text",
            "text": "Hỏi để trúng ý, không để cãi",
            "x": 5964,
            "y": 1580,
            "size": 44,
            "at": "l1:argue",
            "hl": [
              {
                "text": "trúng ý",
                "at": "l1:target"
              }
            ]
          },
          {
            "id": "i-do",
            "t": "text",
            "text": "Vẫn làm phần giao + đề xuất thêm",
            "x": 5964,
            "y": 1655,
            "size": 42,
            "at": "l2:propose"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Nhận giải pháp → hỏi mục đích",
            "x": 5964,
            "y": 1740,
            "size": 48,
            "at": "l3:solution",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi mục đích",
                "at": "l3:for"
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
          "say": "Ask to hit the target, not to argue. Most managers like it: you're thinking about results.",
          "sub": "Hỏi để làm trúng ý, không phải để cãi. Đa số sếp thích, vì bạn nghĩ tới kết quả.",
          "keys": [
            "làm trúng ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Real problem elsewhere? Still do the task if it's harmless, then propose more, with facts.",
          "sub": "Vấn đề thật nằm chỗ khác? Vẫn làm phần được giao nếu không hại, rồi đề xuất thêm kèm dữ kiện."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Given a solution? Ask what it's for.",
          "sub": "Nhận giải pháp thì hỏi kèm mục đích.",
          "keys": [
            "hỏi kèm mục đích"
          ]
        }
      ],
      "ref": "p22,p23,p25"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑧ 14:55 · Đọc lại cho sếp",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:last stop"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1210,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "memo",
                "three-oclock"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao",
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
            "at": "l1:five",
            "caption": "14:55 · sớm năm phút",
            "icon": "three-oclock"
          },
          {
            "id": "j-q",
            "t": "text",
            "text": "“Đúng ý chị không ạ?”",
            "x": 7932,
            "y": 1250,
            "size": 50,
            "at": "l2:mean",
            "color": "accent",
            "hl": [
              {
                "text": "Đúng ý",
                "at": "l2:mean"
              }
            ]
          },
          {
            "id": "j-nod",
            "t": "text",
            "text": "Chỉnh đến khi gật đầu",
            "x": 7932,
            "y": 1335,
            "size": 48,
            "at": "l4:nod",
            "hl": [
              {
                "text": "gật đầu",
                "at": "l4:nod"
              }
            ]
          },
          {
            "id": "j-wk",
            "t": "text",
            "text": "Vài phút > cả tuần lệch hướng",
            "x": 7932,
            "y": 1415,
            "size": 42,
            "at": "l4:week",
            "color": "muted"
          },
          {
            "id": "j-sm",
            "t": "text",
            "text": "Việc nhỏ: vài phút",
            "x": 7932,
            "y": 1500,
            "size": 44,
            "at": "l5:small"
          },
          {
            "id": "j-bg",
            "t": "text",
            "text": "Lặp lại, tốn tiền: xem số thật",
            "x": 7932,
            "y": 1570,
            "size": 42,
            "at": "l5:costly",
            "color": "coral"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Sai một li…” → đúng từ li đầu",
            "x": 7932,
            "y": 1670,
            "size": 48,
            "at": "l6:hair",
            "color": "accent",
            "hl": [
              {
                "text": "đúng từ li đầu",
                "at": "l6:first hair"
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
          "say": "Last stop: two fifty-five. Five minutes before her promise.",
          "sub": "Chặng cuối: ba giờ kém năm. Sớm năm phút so với lời hẹn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Since early this month, outer district orders arrive late, and complaints are up. Is that what you mean?",
          "sub": "Từ đầu tháng, đơn ngoại thành đến muộn hơn hẹn, khiếu nại tăng rõ. Em hiểu như vậy có đúng ý chị không ạ?",
          "to": "hoa"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Exactly. Now we know what we're fixing.",
          "sub": "Đúng rồi. Giờ mình biết đang sửa cái gì.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Adjust until they nod. A few minutes saves a week going the wrong way.",
          "sub": "Chỉnh đến khi họ gật đầu. Vài phút tránh được cả tuần làm lệch hướng.",
          "keys": [
            "gật đầu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Small issue? Minutes. Repeated or costly? Check real data, or every later step goes wrong.",
          "sub": "Việc nhỏ, vài phút là đủ. Lặp lại hay tốn tiền, xem số liệu thật, kẻo mọi bước sau sai theo."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Off by a hair, lost by a mile. Thảo got the first hair right.",
          "sub": "“Sai một li, đi một dặm.” Thảo đúng ngay từ li đầu.",
          "keys": [
            "đúng ngay từ li đầu"
          ]
        }
      ],
      "ref": "p26,p27"
    },
    {
      "id": "s20",
      "module": "BRK-11",
      "data": {
        "title": "Sẵn sàng sửa khi",
        "items": [
          "Một câu rõ, không đổ lỗi",
          "Đã gật, đã tách đoán"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two: they agree, guesses marked.",
          "sub": "Hai: người liên quan đã gật, đã tách điều còn đoán."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: one clear sentence, no blame.",
          "sub": "Một: một câu đủ năm câu hỏi, không đổ lỗi, không cài đáp án.",
          "keys": [
            "một câu"
          ]
        }
      ],
      "ref": "p29"
    },
    {
      "id": "s21",
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
            "at": "l1:ten",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:sentence",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:read",
            "fit": "J",
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
            "x": 4736,
            "y": 165,
            "at": "l1:ten"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 2768,
            "y": 1250,
            "at": "l2:sentence"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8672,
            "y": 1335,
            "at": "l3:read"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: the first ten minutes are for understanding, not fixing.",
          "sub": "Tóm lại: mười phút đầu để hiểu, chưa để sửa.",
          "keys": [
            "để hiểu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five questions, one sentence. No blame, no ready answer.",
          "sub": "Năm câu hỏi, một câu mô tả. Không đổ lỗi, không cài sẵn đáp án.",
          "keys": [
            "một câu mô tả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then read it back, until they nod. Next up: five whys, to dig for the root.",
          "sub": "Rồi đọc lại đến khi họ gật đầu. Bài sau: 5 Why, đào xuống tận gốc.",
          "keys": [
            "5 Why"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s39",
      "module": "QUIZ-01",
      "ref": "questions[28]",
      "data": {
        "q": "In the report template example, what extra line helped the two departments finally agree?",
        "options": [
          "A line showing which source each number came from and on which date it was closed",
          "A line with the manager's signature, so nobody dared to question the totals",
          "A line with bigger fonts and colours, so the important numbers looked clearer"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "ledger",
        "why": "Dòng ghi rõ nguồn và ngày chốt nhắm đúng chỗ lệch, nên tháng đó số mới khớp."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the report template example, what extra line helped the two departments finally agree?",
          "sub": "Trong ví dụ mẫu báo cáo, dòng thêm nào giúp hai phòng lần đầu khớp số?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A line showing which source each number came from and on which date it was closed.",
          "sub": "Dòng ghi rõ mỗi số lấy từ nguồn nào và chốt ngày nào."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s40",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: một câu mô tả vấn đề",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, write one thing that bugs you at work as one such sentence. Then, forty questions!",
          "sub": "Hôm nay, viết một chuyện khó chịu ở chỗ làm thành đúng một câu như thế. Rồi làm bốn mươi câu nhé!"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
