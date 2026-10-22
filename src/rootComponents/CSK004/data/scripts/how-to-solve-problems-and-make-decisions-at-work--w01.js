// Kịch bản video W lần 3 (#110, #112) — "Gặp vấn đề ở chỗ làm: tìm gốc, chọn cách và ra quyết định thế nào cho có cơ sở?" · bài tổng chuỗi "Giải quyết vấn đề và ra quyết định"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-solve-problems-and-make-decisions-at-work--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "workplace-problem-solvers",
    "slug": "how-to-solve-problems-and-make-decisions-at-work",
    "door": "ky-nang",
    "level": "B1",
    "title": "Gặp vấn đề ở chỗ làm: tìm gốc, chọn cách và ra quyết định thế nào cho có cơ sở?",
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
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT TUẦN ở công ty bánh kẹo nhỏ, tám chặng = tám mục bài tổng (thứ Hai 8:00 tin nhắn Cô Hoa → ① T2 9:00 Thảo gọi đúng tên → ② T3 7:30 Dũng 5 Why máy đóng gói → ③ T3 14:00 Thảo thêm phương án, hỏi Lan → ④ T4 Dũng cân nhà cung cấp bao bì → “Khoan đã!” T5 15:00 xe hỏng → ⑤ T5 gấp/thiếu tin → ⑥ T6 9:00 biểu mẫu của Lan → ⑦ T6 16:00 họp hội chợ → ⑧ thứ Hai tuần sau 8:00 Dũng nhắn Cô Hoa bốn phần). Nhân vật (mạch chủ đề w145/_series/workplace-problem-solvers.md): Thảo (Khánh p3, Oanh p24), Dũng (tổ máy đóng gói p6 chỉ kể, người chọn bao bì p12, người xe hỏng p16, người nhắn sếp p28), Lan (Phát p20), Cô Hoa (sếp p3/p24/p28). Cảnh ngắt nhịp: BRK-07 “chỉ một cách?” (p9), BRK-04 đếm dòng/cân dòng (p13), BRK-02 câu hỏi chi phí chìm (p22), BRK-01 dừng hình “im cho êm” (p24). Khép vòng: “Có bệnh thì vái tứ phương” → bắt đúng bệnh rồi mới bốc thuốc. Bản cũ (W lần 3, #112): w145/bak/how-to-solve-problems-and-make-decisions-at-work--w01.js.",
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
            "text": "6 bước",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:six",
            "color": "accent",
            "hl": [
              {
                "text": "6 bước",
                "at": "l1:steps"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "đi đúng thứ tự",
            "x": 70,
            "y": 330,
            "size": 60,
            "at": "l1:order",
            "hl": [
              {
                "text": "đúng thứ tự",
                "at": "l1:right order"
              }
            ]
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "Ta tưởng: sếp bảo, làm ngay?",
            "x": 70,
            "y": 450,
            "size": 52,
            "at": "l2:boss",
            "color": "muted"
          },
          {
            "id": "a-xx",
            "t": "strike",
            "over": "a-x",
            "at": "l2:straight"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Six steps, in the right order. That is how a problem at work gets solved.",
          "sub": "Sáu bước, đi đúng thứ tự. Vấn đề ở chỗ làm được giải như thế.",
          "keys": [
            "Sáu bước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet when the boss says fix it, we jump straight into action.",
          "sub": "Vậy mà sếp vừa bảo “xử lý đi”, ta đã lao ngay vào làm.",
          "keys": [
            "lao ngay vào làm"
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
                "page-facing-up"
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
            "caption": "Thứ Hai 8:00 · tin của Cô Hoa",
            "icon": "mobile-phone"
          },
          {
            "id": "a-old",
            "t": "text",
            "text": "2 tuần trước: họp, thúc, dời hạn",
            "x": 60,
            "y": 560,
            "size": 44,
            "at": "l4:ago",
            "color": "muted"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Có bệnh thì vái tứ phương”",
            "x": 60,
            "y": 670,
            "size": 54,
            "at": "l5:pray",
            "color": "accent",
            "hl": [
              {
                "text": "vái tứ phương",
                "at": "l5:four directions"
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
          "say": "Meet Thảo, accountant at a small snack company.",
          "sub": "Đây là Thảo, kế toán ở một công ty bánh kẹo nhỏ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Monday, eight a.m. A message from Cô Hoa, her manager.",
          "sub": "Thứ Hai, tám giờ sáng. Tin nhắn của Cô Hoa, trưởng phòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "The weekly report is late every week, please fix it. Again?",
          "sub": "“Báo cáo tuần nào cũng trễ, em xử lý đi.” Lại nữa à?",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two weeks ago she rushed everyone, moved the deadline. Still late.",
          "sub": "Hai tuần trước, cô đã họp thúc, dời hạn sớm một ngày. Vẫn trễ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Sick? Pray in all four directions!",
          "sub": "Đúng kiểu “có bệnh thì vái tứ phương”.",
          "keys": [
            "vái tứ phương"
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
      "ref": "p3"
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
            "text": "Bước nào trước, bước nào sau?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:first",
            "hl": [
              {
                "text": "Bước nào trước",
                "at": "l1:first"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: họp, thúc ngay",
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
            "id": "b-cost",
            "t": "text",
            "text": "Sửa nhầm chỗ > sửa chậm",
            "x": 2028,
            "y": 255,
            "size": 56,
            "at": "l2:wrong place",
            "color": "coral",
            "hl": [
              {
                "text": "Sửa nhầm chỗ",
                "at": "l2:wrong place"
              }
            ]
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đi đúng thứ tự",
            "x": 2028,
            "y": 355,
            "size": 56,
            "at": "l3:order",
            "color": "accent",
            "hl": [
              {
                "text": "đúng thứ tự",
                "at": "l3:order"
              }
            ]
          },
          {
            "id": "b-map",
            "t": "text",
            "text": "8 chặng · 1 tuần",
            "x": 2028,
            "y": 470,
            "size": 54,
            "at": "l3:eight stops",
            "hl": [
              {
                "text": "8 chặng",
                "at": "l3:eight stops"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 570,
            "w": 180,
            "h": 90,
            "at": "l3:eight stops+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2233,
            "y": 570,
            "w": 180,
            "h": 90,
            "at": "l3:eight stops+700",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2438,
            "y": 570,
            "w": 180,
            "h": 90,
            "at": "l3:eight stops+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2643,
            "y": 570,
            "w": 180,
            "h": 90,
            "at": "l3:eight stops+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2848,
            "y": 570,
            "w": 180,
            "h": 90,
            "at": "l3:eight stops+1300",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3053,
            "y": 570,
            "w": 180,
            "h": 90,
            "at": "l3:eight stops+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3258,
            "y": 570,
            "w": 180,
            "h": 90,
            "at": "l3:eight stops+1700",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3463,
            "y": 570,
            "w": 180,
            "h": 90,
            "at": "l3:eight stops+1900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "1 · T2",
            "x": 2046,
            "y": 585,
            "size": 42,
            "at": "l3:eight stops+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "2 · T3",
            "x": 2251,
            "y": 585,
            "size": 42,
            "at": "l3:eight stops+820"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "3 · T3",
            "x": 2456,
            "y": 585,
            "size": 42,
            "at": "l3:eight stops+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "4 · T4",
            "x": 2661,
            "y": 585,
            "size": 42,
            "at": "l3:eight stops+1220"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "5 · T5",
            "x": 2866,
            "y": 585,
            "size": 42,
            "at": "l3:eight stops+1420"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "6 · T6",
            "x": 3071,
            "y": 585,
            "size": 42,
            "at": "l3:eight stops+1620"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "7 · T6",
            "x": 3276,
            "y": 585,
            "size": 42,
            "at": "l3:eight stops+1820"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "8 · T2",
            "x": 3481,
            "y": 585,
            "size": 42,
            "at": "l3:eight stops+2020"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A problem at work. What comes first?",
          "sub": "Gặp vấn đề ở chỗ làm: bước nào trước, bước nào sau?",
          "keys": [
            "bước nào trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a meeting right away. Fixing the wrong place costs more than fixing late.",
          "sub": "Không phải họp, nhắc nhở ngay. Sửa nhầm chỗ còn tốn hơn sửa chậm.",
          "keys": [
            "Sửa nhầm chỗ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But the right order. Here is the map: eight stops, one week.",
          "sub": "Mà là đi đúng thứ tự. Bản đồ cả chuỗi đây: tám chặng, một tuần.",
          "keys": [
            "đúng thứ tự"
          ]
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
            "at": "l2",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai 9:00 · Gọi đúng tên",
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
                "laptop",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao",
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
            "at": "l1:first stop",
            "caption": "Thứ Hai 9:00 · bàn kế toán",
            "icon": "laptop"
          },
          {
            "id": "c-sym",
            "t": "text",
            "text": "Triệu chứng: báo cáo trễ",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l1:symptom"
          },
          {
            "id": "c-real",
            "t": "text",
            "text": "Vấn đề thật: điều kiện lặp lại",
            "x": 3996,
            "y": 240,
            "size": 46,
            "at": "l1:real problem",
            "color": "accent",
            "hl": [
              {
                "text": "điều kiện lặp lại",
                "at": "l1:causing"
              }
            ]
          },
          {
            "id": "c-data",
            "t": "text",
            "text": "Số liệu: chiều T5",
            "x": 3996,
            "y": 330,
            "size": 50,
            "at": "l3:Thursday",
            "color": "coral",
            "hl": [
              {
                "text": "chiều T5",
                "at": "l3:Thursday afternoon"
              }
            ]
          },
          {
            "id": "c-dl",
            "t": "text",
            "text": "Hạn nộp: sáng T6",
            "x": 3996,
            "y": 400,
            "size": 50,
            "at": "l3:Friday",
            "color": "coral"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Chưa rõ khâu → đừng thúc",
            "x": 3996,
            "y": 490,
            "size": 50,
            "at": "l4:push",
            "color": "accent",
            "hl": [
              {
                "text": "đừng thúc",
                "at": "l4:push"
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
          "say": "First stop. Thảo splits the symptom from the real problem, the condition causing it.",
          "sub": "Chặng một. Thảo tách triệu chứng khỏi vấn đề thật: điều kiện cứ lặp lại sinh ra nó.",
          "keys": [
            "vấn đề thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'll log when each part of the last four reports was done.",
          "sub": "Ghi giờ xong từng phần của bốn báo cáo gần nhất đã.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Look! Sales figures arrive Thursday afternoon. The deadline is Friday morning!",
          "sub": "Ơ! Số liệu bán hàng đến chiều thứ Năm. Mà hạn nộp là sáng thứ Sáu!",
          "face": "surprised",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Don't push anyone before you know which step is late.",
          "sub": "Rút ra: chưa biết trễ ở khâu nào, đừng vội thúc ai.",
          "keys": [
            "đừng vội thúc ai"
          ]
        }
      ],
      "ref": "p1,p3,p4"
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
          }
        ],
        "items": [
          {
            "id": "c-5a",
            "t": "text",
            "text": "Cái gì · Ở đâu · Khi nào",
            "x": 3996,
            "y": 570,
            "size": 46,
            "at": "l1:what",
            "hl": [
              {
                "text": "Khi nào",
                "at": "l1:when"
              }
            ]
          },
          {
            "id": "c-5b",
            "t": "text",
            "text": "Bao nhiêu · Ai bị ảnh hưởng",
            "x": 3996,
            "y": 640,
            "size": 46,
            "at": "l1:how much"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "→ 1 câu, không đổ lỗi",
            "x": 3996,
            "y": 710,
            "size": 42,
            "at": "l2:one sentence",
            "hl": [
              {
                "text": "không đổ lỗi",
                "at": "l2:no blame"
              }
            ]
          },
          {
            "id": "c-nod",
            "t": "text",
            "text": "Đọc lại → Cô Hoa gật",
            "x": 4896,
            "y": 700,
            "size": 42,
            "at": "l3:reads",
            "color": "accent",
            "hl": [
              {
                "text": "gật",
                "at": "l3:nods"
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
          "say": "Five small questions: what, where, when, how much, and who is affected.",
          "sub": "Năm câu hỏi nhỏ: cái gì, ở đâu, khi nào, bao nhiêu, ai bị ảnh hưởng.",
          "keys": [
            "Năm câu hỏi nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One sentence: no blame, no ready-made fix.",
          "sub": "Gom thành một câu: không đổ lỗi, không cài sẵn giải pháp.",
          "keys": [
            "không đổ lỗi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "She reads it to Cô Hoa, and adjusts until she nods.",
          "sub": "Đọc cho Cô Hoa nghe, chỉnh đến khi chị gật đầu.",
          "keys": [
            "gật đầu"
          ]
        }
      ],
      "ref": "p2"
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
            "text": "② Thứ Ba 7:30 · Tìm đúng gốc",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second stop"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 120,
            "w": 720,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "point",
                  "face": "worried"
                }
              ],
              "props": [
                "gear",
                "high-voltage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:packing",
            "caption": "Thứ Ba 7:30 · xưởng đóng gói",
            "icon": "gear"
          },
          {
            "id": "d-fire",
            "t": "text",
            "text": "Thay cầu chì = chữa cháy",
            "x": 5964,
            "y": 160,
            "size": 50,
            "at": "l3:firefighting",
            "color": "coral",
            "hl": [
              {
                "text": "chữa cháy",
                "at": "l3:firefighting"
              }
            ]
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "5 Why → gốc nhóm đổi được",
            "x": 5964,
            "y": 240,
            "size": 46,
            "at": "l4:five whys",
            "hl": [
              {
                "text": "5 Why",
                "at": "l4:five whys"
              }
            ]
          },
          {
            "id": "d-n",
            "t": "text",
            "text": "“5” = đừng dừng sớm",
            "x": 5964,
            "y": 315,
            "size": 44,
            "at": "l4:too early",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: the packing room. Meet Dũng, from the warehouse.",
          "sub": "Chặng hai: sáng thứ Ba, xưởng đóng gói. Đây là Dũng, lo kho kiêm giao hàng.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The machine stopped again. The team leader changed the fuse. Again!",
          "sub": "Máy đóng gói lại dừng. Anh tổ trưởng lại thay cầu chì. Lần nữa!",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A new fuse is firefighting: needed, but not the end.",
          "sub": "Thay cầu chì là chữa cháy: cần làm ngay, nhưng chưa phải là xong.",
          "keys": [
            "chữa cháy"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five whys: keep asking why, on facts, until a cause the team can change. Don't stop too early.",
          "sub": "5 Why: hỏi “tại sao?” nối tiếp trên dữ kiện, tới nguyên nhân nhóm đổi được. Số năm nhắc đừng dừng sớm.",
          "keys": [
            "nhóm đổi được"
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
            "at": "l1",
            "fit": [
              "d-c0",
              "d-c4"
            ],
            "zoom": 1.15,
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
            "id": "d-c0",
            "t": "text",
            "text": "1. Cầu chì cháy",
            "x": 5964,
            "y": 395,
            "size": 42,
            "at": "l1:fuse"
          },
          {
            "id": "d-c1",
            "t": "text",
            "text": "2. Động cơ quá tải",
            "x": 6004,
            "y": 457,
            "size": 42,
            "at": "l1:motor"
          },
          {
            "id": "d-c2",
            "t": "text",
            "text": "3. Ổ trục khô dầu",
            "x": 6044,
            "y": 519,
            "size": 42,
            "at": "l2:oil"
          },
          {
            "id": "d-c3",
            "t": "text",
            "text": "4. Mấy tháng không tra",
            "x": 6084,
            "y": 581,
            "size": 42,
            "at": "l2:unoiled"
          },
          {
            "id": "d-c4",
            "t": "text",
            "text": "5. Lịch không giao lại",
            "x": 6124,
            "y": 643,
            "size": 42,
            "at": "l3:handed",
            "color": "accent",
            "hl": [
              {
                "text": "Lịch không giao lại",
                "at": "l3:handed"
              }
            ]
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "Hỏi tại sao để khỏi cháy lại",
            "x": 5964,
            "y": 712,
            "size": 40,
            "at": "l4:ask why",
            "color": "accent",
            "hl": [
              {
                "text": "khỏi cháy lại",
                "at": "l4:burn again"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Why? Fuse burned. Why? Motor overloaded.",
          "sub": "Vì sao dừng? Cầu chì cháy. Vì sao cháy? Động cơ quá tải.",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Why? Bearing had no oil. Why? Unoiled for months.",
          "sub": "Vì sao? Ổ trục khô dầu. Vì sao khô? Mấy tháng không ai tra."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Why? Its keeper moved, and the schedule was never handed over.",
          "sub": "Vì sao? Người phụ trách cũ chuyển bộ phận, lịch bảo dưỡng không được giao lại.",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fight the fire to keep running. Ask why, so it won't burn again.",
          "sub": "Chữa cháy để chạy tiếp, hỏi tại sao để khỏi cháy lại.",
          "keys": [
            "khỏi cháy lại"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s07",
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
            "id": "d-ask",
            "t": "text",
            "text": "Hỏi: vì đâu xảy ra được?",
            "x": 6804,
            "y": 655,
            "size": 40,
            "at": "l1:allowed",
            "hl": [
              {
                "text": "vì đâu",
                "at": "l1:allowed"
              }
            ]
          },
          {
            "id": "d-sure",
            "t": "text",
            "text": "“Chắc là” → đi kiểm",
            "x": 6804,
            "y": 712,
            "size": 40,
            "at": "l2:probably",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ask what allowed it, not who did it. Stopping at a name is too early.",
          "sub": "Hỏi điều gì khiến việc này xảy ra được, đừng hỏi ai sai. Dừng ở một cái tên là dừng quá sớm.",
          "keys": [
            "dừng quá sớm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Probably? Go and check. Two answers? Follow both branches.",
          "sub": "Nghe “chắc là”? Đi kiểm tận nơi đã. Một câu tại sao có hai đáp án? Đi cả hai nhánh.",
          "keys": [
            "Đi cả hai nhánh"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s08",
      "module": "BRK-07",
      "data": {
        "question": "Tìm ra gốc rồi, sao chỉ nghĩ ra một cách?",
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
          "say": "You found the root. Why does your head offer just one fix?",
          "sub": "Tìm ra gốc rồi. Sao đầu chỉ bật ra đúng một cách sửa?",
          "keys": [
            "đúng một cách"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s09",
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
            "at": "l4",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Ba 14:00 · Thêm phương án",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third stop"
          },
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
                  "at": "l3"
                }
              ],
              "props": [
                "light-bulb",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:idea",
            "caption": "Thứ Ba 14:00 · hỏi người trong cuộc",
            "icon": "light-bulb"
          },
          {
            "id": "e-1st",
            "t": "text",
            "text": "Ý đầu tiên = ý quen nhất",
            "x": 7932,
            "y": 160,
            "size": 48,
            "at": "l1:familiar",
            "color": "coral",
            "hl": [
              {
                "text": "ý quen nhất",
                "at": "l1:familiar"
              }
            ]
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "Bớt: bỏ bước nào?",
            "x": 7932,
            "y": 245,
            "size": 46,
            "at": "l2:remove"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "Thêm: người, công cụ?",
            "x": 7932,
            "y": 315,
            "size": 46,
            "at": "l2:add"
          },
          {
            "id": "e-c",
            "t": "text",
            "text": "Đổi: thứ tự, giờ, kênh",
            "x": 7932,
            "y": 385,
            "size": 46,
            "at": "l2:change"
          },
          {
            "id": "e-h",
            "t": "text",
            "text": "Hỏi: người trong cuộc",
            "x": 7932,
            "y": 455,
            "size": 46,
            "at": "l3:ask",
            "color": "accent",
            "hl": [
              {
                "text": "người trong cuộc",
                "at": "l3:people involved"
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
          "say": "Third stop. Thảo's first idea: remind everyone again. Familiar, not best.",
          "sub": "Chặng ba. Ý đầu của Thảo: lại nhắc mọi người. Ý bật ra đầu là ý quen nhất, chưa chắc hay nhất.",
          "keys": [
            "ý quen nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four directions: remove a step, add a person or tool, change the order, time or channel.",
          "sub": "Bốn hướng: bớt một bước, thêm người hay công cụ, đổi thứ tự, giờ hay kênh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And ask the people involved, like Lan from sales.",
          "sub": "Và hỏi người trong cuộc, như Lan bên bán hàng.",
          "keys": [
            "người trong cuộc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Lan, if you were me, how would you fix this?",
          "sub": "Lan ơi, nếu là em, em sẽ sửa chuyện này thế nào?",
          "to": "lan",
          "face": "thinking"
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 700
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-0",
            "t": "illus",
            "name": "hourglass-not-done",
            "x": 7932,
            "y": 540,
            "size": 64,
            "at": "l1:nothing"
          },
          {
            "id": "e-0t",
            "t": "text",
            "text": "+ “Không làm gì” làm mốc",
            "x": 8012,
            "y": 548,
            "size": 44,
            "at": "l1:nothing+200"
          },
          {
            "id": "e-tr",
            "t": "illus",
            "name": "test-tube",
            "x": 7932,
            "y": 615,
            "size": 64,
            "at": "l1:trial"
          },
          {
            "id": "e-trt",
            "t": "text",
            "text": "+ “Thử nhỏ”: một tuần",
            "x": 8012,
            "y": 623,
            "size": 44,
            "at": "l1:trial+200",
            "hl": [
              {
                "text": "Thử nhỏ",
                "at": "l1:small trial"
              }
            ]
          },
          {
            "id": "e-bs",
            "t": "text",
            "text": "Viết riêng trước, chấm sau",
            "x": 7932,
            "y": 705,
            "size": 42,
            "at": "l2:alone",
            "hl": [
              {
                "text": "Viết riêng trước",
                "at": "l2:alone"
              }
            ]
          },
          {
            "id": "e-35",
            "t": "text",
            "text": "3–5 phương án là vừa",
            "x": 8772,
            "y": 690,
            "size": 44,
            "at": "l3:three",
            "color": "accent",
            "hl": [
              {
                "text": "3–5",
                "at": "l3:three to five"
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
          "say": "Always add doing nothing, as a baseline, and a small trial for one week.",
          "sub": "Luôn thêm “không làm gì” làm mốc so, và “thử nhỏ” một nhóm hay một tuần.",
          "keys": [
            "làm mốc so"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Brainstorm? Write alone first, collect, then score.",
          "sub": "Họp động não? Mỗi người viết ý riêng trước, gom ý, rồi mới chấm điểm.",
          "keys": [
            "viết ý riêng trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three to five real options is about right.",
          "sub": "Ba đến năm phương án đáng cân nhắc là vừa.",
          "keys": [
            "Ba đến năm"
          ]
        }
      ],
      "ref": "p10"
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
            "text": "④ Thứ Tư · Cân để chọn",
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "package",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:packaging",
            "caption": "Thứ Tư · chọn nhà cung cấp bao bì",
            "icon": "package"
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "Bên rẻ: 5 dòng ưu",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l2:five"
          },
          {
            "id": "f-eq",
            "t": "text",
            "text": "Dòng nào cũng như nhau?",
            "x": 60,
            "y": 1330,
            "size": 46,
            "at": "l3:equally",
            "color": "muted"
          },
          {
            "id": "f-sc",
            "t": "illus",
            "name": "balance-scale",
            "x": 60,
            "y": 1410,
            "size": 100,
            "at": "l3:con"
          },
          {
            "id": "f-late",
            "t": "text",
            "text": "1 dòng nhược: hay giao trễ",
            "x": 180,
            "y": 1425,
            "size": 44,
            "at": "l3:late",
            "color": "coral",
            "hl": [
              {
                "text": "hay giao trễ",
                "at": "l3:often late"
              }
            ]
          },
          {
            "id": "f-half",
            "t": "text",
            "text": "→ dây chuyền chờ nửa ngày",
            "x": 180,
            "y": 1495,
            "size": 40,
            "at": "l3:half a day"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Dũng picks a packaging supplier.",
          "sub": "Chặng bốn, thứ Tư: Dũng chọn nhà cung cấp bao bì."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "The cheaper one has five pros! Easy choice!",
          "sub": "Bên rẻ hơn có năm dòng ưu điểm! Dễ chọn!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Every line looks equally important. But one con, often late, can stop the packing line for half a day.",
          "sub": "Dòng nào trông cũng quan trọng như nhau. Nhưng một dòng nhược “hay giao trễ” có thể bắt dây chuyền đứng chờ nửa ngày.",
          "keys": [
            "hay giao trễ"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s12",
      "module": "BRK-04",
      "data": {
        "title": "Danh sách ưu nhược",
        "wrong": "Đếm dòng: nhiều ưu hơn là tốt hơn",
        "right": "Cân dòng: tiền thiệt vượt xa khoản rẻ",
        "wrongIllus": "abacus",
        "rightIllus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "More pros means better? That is counting the lines.",
          "sub": "Nhiều dòng ưu hơn là tốt hơn? Đó là đếm dòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Weigh them instead. The losses beat the savings.",
          "sub": "Hãy cân dòng. Tiền thiệt vượt xa khoản rẻ hơn.",
          "keys": [
            "cân dòng"
          ]
        }
      ],
      "ref": "p12,p13"
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
            "id": "f-c",
            "t": "text",
            "text": "4–6 tiêu chí, viết trước",
            "x": 60,
            "y": 1590,
            "size": 46,
            "at": "l1:criteria",
            "hl": [
              {
                "text": "viết trước",
                "at": "l1:first"
              }
            ]
          },
          {
            "id": "f-c2",
            "t": "text",
            "text": "Tối đa 2 cái nặng ký",
            "x": 60,
            "y": 1660,
            "size": 44,
            "at": "l1:two",
            "color": "muted"
          },
          {
            "id": "f-t3",
            "t": "text",
            "text": "1 tuần · 1 tháng · 1 năm",
            "x": 60,
            "y": 1730,
            "size": 44,
            "at": "l2:week"
          },
          {
            "id": "f-p",
            "t": "text",
            "text": "Giá mua + giá dùng",
            "x": 60,
            "y": 1800,
            "size": 44,
            "at": "l2:using",
            "hl": [
              {
                "text": "giá dùng",
                "at": "l2:using price"
              }
            ]
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "Hỏng thì lùi đường nào?",
            "x": 900,
            "y": 1780,
            "size": 46,
            "at": "l3:step back",
            "color": "accent",
            "hl": [
              {
                "text": "lùi đường nào",
                "at": "l3:step back"
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
          "say": "Write four to six criteria first. At most two weigh heavy.",
          "sub": "Viết trước bốn đến sáu tiêu chí, rồi mới nhìn kỹ phương án. Tối đa hai cái nặng ký.",
          "keys": [
            "bốn đến sáu tiêu chí"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Look a week, a month, a year ahead. Ask the using price too.",
          "sub": "Nhìn ở mốc một tuần, một tháng, một năm. Hỏi giá mua, nhớ hỏi cả giá dùng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "If it fails, how do we step back?",
          "sub": "Trước khi chốt: hỏng thì lùi đường nào?",
          "keys": [
            "lùi đường nào"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "street",
        "label": "Thứ Năm 15:00 xe hỏng",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Cố tìm cho được xe cùng cỡ",
          "why": "Mục tiêu là hàng tới khách đúng giờ, không phải nhất định dùng một chiếc xe tải.",
          "rule": "Giữ mục tiêu, đừng giữ kế hoạch"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "The urgent truck broke down, due by five! I'll find another truck, same size!",
          "sub": "Ba giờ, xe chở đơn gấp hỏng, khách cần trước năm giờ! Gọi khắp nơi tìm xe tải cùng cỡ thôi!",
          "face": "worried",
          "pose": "phone",
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
          "say": "The goal is goods on time. Rewind!",
          "sub": "Mục tiêu là hàng tới đúng giờ, đâu phải xe tải. Tua lại!",
          "phase": "redo",
          "keys": [
            "hàng tới đúng giờ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Split it into small vans, or ask the customer to take the urgent part first.",
          "sub": "Chia hàng sang vài xe nhỏ, hoặc hỏi khách nhận trước phần gấp nhất.",
          "phase": "redo",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Keep the goal, not the plan.",
          "sub": "Giữ mục tiêu, đừng giữ kế hoạch.",
          "phase": "redo",
          "keys": [
            "Giữ mục tiêu"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p16,p17"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Năm · Gấp, hay thiếu tin",
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
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "neutral"
                }
              ],
              "props": [
                "delivery-truck",
                "stopwatch"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "medium",
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
            "at": "l1:pressure",
            "caption": "Thứ Năm 15:05 · sau khi tua lại",
            "icon": "stopwatch"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Thở chậm: giữ điều gì?",
            "x": 2028,
            "y": 1250,
            "size": 48,
            "at": "l1:breathe",
            "hl": [
              {
                "text": "giữ điều gì",
                "at": "l1:matters most"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Hạn thật? Dễ rút lại?",
            "x": 2028,
            "y": 1330,
            "size": 48,
            "at": "l2:deadline"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Hứa với khách → xin 1 giờ",
            "x": 2028,
            "y": 1410,
            "size": 44,
            "at": "l2:promise",
            "color": "coral"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Đủ tốt, chắc làm được",
            "x": 2028,
            "y": 1490,
            "size": 48,
            "at": "l3:good enough",
            "color": "accent",
            "hl": [
              {
                "text": "Đủ tốt",
                "at": "l3:good enough"
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
          "say": "Fifth stop. Under pressure? Breathe twice. What matters most now?",
          "sub": "Chặng năm: bị dồn gấp. Thở chậm hai lần, hỏi điều quan trọng nhất phải giữ lúc này.",
          "keys": [
            "Thở chậm hai lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Real deadline? Easy to undo? A promise to a customer? Ask for one more hour.",
          "sub": "Hỏi hạn thật, có dễ rút lại không. Hứa với khách là khó rút: xin thêm một giờ.",
          "keys": [
            "xin thêm một giờ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pick good enough, ask with a time limit, then report in one line.",
          "sub": "Chọn cách đủ tốt mà chắc làm được, hỏi ý có hạn giờ, quyết xong báo một dòng.",
          "keys": [
            "đủ tốt"
          ]
        }
      ],
      "ref": "p15"
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
            "id": "g-w",
            "t": "text",
            "text": "Chờ mãi = “không làm gì”",
            "x": 2028,
            "y": 1580,
            "size": 46,
            "at": "l1:forever",
            "color": "coral"
          },
          {
            "id": "g-3i",
            "t": "text",
            "text": "≤ 3 tin đổi được lựa chọn",
            "x": 2028,
            "y": 1655,
            "size": 46,
            "at": "l1:three",
            "hl": [
              {
                "text": "đổi được",
                "at": "l1:change"
              }
            ]
          },
          {
            "id": "g-door",
            "t": "illus",
            "name": "door",
            "x": 2028,
            "y": 1720,
            "size": 70,
            "at": "l2:door"
          },
          {
            "id": "g-d1",
            "t": "text",
            "text": "Cửa 1 chiều: chậm",
            "x": 2118,
            "y": 1730,
            "size": 44,
            "at": "l2:one way",
            "color": "coral",
            "hl": [
              {
                "text": "Cửa 1 chiều",
                "at": "l2:one way"
              }
            ]
          },
          {
            "id": "g-d2",
            "t": "text",
            "text": "Cửa 2 chiều: nhanh",
            "x": 2118,
            "y": 1795,
            "size": 44,
            "at": "l2:two way",
            "color": "accent",
            "hl": [
              {
                "text": "Cửa 2 chiều",
                "at": "l2:two way"
              }
            ]
          },
          {
            "id": "g-as",
            "t": "text",
            "text": "Ghi giả định, dấu hiệu đổi",
            "x": 2868,
            "y": 1780,
            "size": 40,
            "at": "l3:assumptions",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Missing facts? Don't wait forever. Seek three facts at most, ones that could change your choice.",
          "sub": "Thiếu dữ kiện? Đừng chờ mãi. Chỉ tìm tin làm đổi được lựa chọn: tối đa khoảng ba, có hạn chót.",
          "keys": [
            "Đừng chờ mãi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One way door, like a long contract? Or two way, like a new meeting time?",
          "sub": "Cửa một chiều, như ký hợp đồng dài hạn? Hay cửa hai chiều, như thử đổi giờ họp?",
          "keys": [
            "cửa hai chiều"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Note your assumptions, and the sign to change course.",
          "sub": "Ghi lại giả định, và dấu hiệu khiến mình đổi hướng."
        }
      ],
      "ref": "p18"
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
            "at": "a1",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "n3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Sáu 9:00 · Biến thành việc",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "n1:sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4836,
            "y": 1210,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "pose": "stand"
                }
              ],
              "left": {
                "label": "A: “từ tuần sau”",
                "ok": false
              },
              "right": {
                "label": "B: có người, có ngày",
                "ok": true
              }
            },
            "at": "n1:form",
            "caption": "Thứ Sáu · nhóm bán hàng của Lan",
            "icon": "memo"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "A: “Từ tuần sau…”",
            "x": 3996,
            "y": 1250,
            "size": 48,
            "at": "a1:next week",
            "color": "coral"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "→ 1 tháng: chưa ai làm",
            "x": 4026,
            "y": 1320,
            "size": 42,
            "at": "n2:month",
            "color": "muted"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: Lan làm, xong thứ Tư",
            "x": 3996,
            "y": 1400,
            "size": 46,
            "at": "b1:Wednesday",
            "color": "accent"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Có ngày bắt đầu = quyết định",
            "x": 3996,
            "y": 1490,
            "size": 46,
            "at": "n3:start date",
            "hl": [
              {
                "text": "ngày bắt đầu",
                "at": "n3:start date"
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
          "say": "Sixth stop: Lan's team picks a shared order form.",
          "sub": "Chặng sáu, thứ Sáu: nhóm bán hàng của Lan chọn nhận đơn qua một biểu mẫu chung, cho bớt sót đơn."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "lan",
          "say": "From next week, let's use the form!",
          "sub": "Từ tuần sau mình chuyển sang biểu mẫu nhé!",
          "phase": "a",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "n2",
          "lang": "en",
          "who": "det",
          "say": "A month later, no form. Orders still go missing.",
          "sub": "Một tháng sau chưa ai làm biểu mẫu, đơn vẫn sót."
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "lan",
          "say": "Form by Wednesday, tell customers Thursday, form only from Monday.",
          "sub": "Mình làm biểu mẫu, xong thứ Tư; thứ Năm báo khách; từ thứ Hai chỉ nhận qua biểu mẫu.",
          "phase": "b",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "n3",
          "lang": "en",
          "who": "det",
          "say": "With a start date, it's a decision. Without one, still a wish.",
          "sub": "Có ngày bắt đầu mới thành quyết định, chưa có thì vẫn là ý định.",
          "keys": [
            "Có ngày bắt đầu"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
      "ref": "p20,p21"
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
          }
        ],
        "items": [
          {
            "id": "h-3",
            "t": "text",
            "text": "Ai · khi nào · đo ở đâu",
            "x": 3996,
            "y": 1580,
            "size": 46,
            "at": "l1:who",
            "hl": [
              {
                "text": "đo ở đâu",
                "at": "l1:worked"
              }
            ]
          },
          {
            "id": "h-rv",
            "t": "text",
            "text": "Hẹn ngày nhìn lại",
            "x": 3996,
            "y": 1655,
            "size": 46,
            "at": "l2:review",
            "color": "accent",
            "hl": [
              {
                "text": "nhìn lại",
                "at": "l2:review"
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
          "say": "Then: who does what, by when, what shows it worked? Note the starting number.",
          "sub": "Rồi trả lời: ai làm gì, xong khi nào, nhìn vào đâu để biết thành công? Ghi con số lúc bắt đầu.",
          "keys": [
            "ai làm gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Review day: expected, happened, why, keep or change.",
          "sub": "Ngày nhìn lại: mong đợi gì, thật sự ra sao, vì sao khác, giữ gì, đổi gì?"
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s20",
      "module": "BRK-02",
      "data": {
        "kicker": "Bẫy chi phí chìm",
        "title": "Hôm nay mới bắt đầu, còn chọn không?",
        "hl": "còn chọn không?",
        "sub": "Đặt điểm dừng ngay từ đầu"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sunk cost check: starting today, would you choose this?",
          "sub": "Soát bẫy chi phí chìm: nếu hôm nay mới bắt đầu, còn chọn việc này không?",
          "keys": [
            "chi phí chìm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Set a stop point early.",
          "sub": "Đặt điểm dừng ngay từ đầu."
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s21",
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
            "at": "l5:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Sáu 16:00 · Họp hội chợ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:seventh stop"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
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
                  "id": "dung",
                  "side": "center"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain",
                  "enter": "walk",
                  "at": "l1"
                }
              ],
              "props": [
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:fair",
            "caption": "Thứ Sáu 16:00 · phòng họp",
            "icon": "busts-in-silhouette"
          },
          {
            "id": "i-peak",
            "t": "text",
            "text": "Trùng tuần giao cao điểm",
            "x": 5964,
            "y": 1250,
            "size": 46,
            "at": "l4:peak",
            "color": "coral",
            "hl": [
              {
                "text": "cao điểm",
                "at": "l4:peak"
              }
            ]
          },
          {
            "id": "i-q",
            "t": "text",
            "text": "Thảo thấy… mà im",
            "x": 5964,
            "y": 1330,
            "size": 50,
            "at": "l5:okay",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: a trade fair meeting.",
          "sub": "Chặng bảy: bốn giờ chiều thứ Sáu, họp chọn tham gia hội chợ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Let's join the trade fair! Everyone agrees, right?",
          "sub": "Mình tham gia hội chợ nhé! Mọi người đồng ý chứ?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Great idea!",
          "sub": "Hay quá ạ!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thảo sees it falls in peak delivery week. But everyone looks happy.",
          "sub": "Thảo để ý hội chợ trùng tuần giao hàng cao điểm. Nhưng ai cũng vui quá."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Um... okay.",
          "sub": "Dạ…",
          "face": "worried"
        }
      ],
      "ref": "p24"
    },
    {
      "id": "s22",
      "module": "BRK-01",
      "data": {
        "illus": "zipper-mouth-face",
        "around": [
          "busts-in-silhouette",
          "spiral-calendar"
        ],
        "label": "Sai ở đây!",
        "note": "Thấy trùng tuần cao điểm mà im"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Freeze.",
          "sub": "Dừng hình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That week: short of staff, late orders, and customers complaining for days.",
          "sub": "Tuần đó: kho thiếu người, đơn trễ, khách phàn nàn suốt mấy ngày.",
          "keys": [
            "kho thiếu người"
          ]
        }
      ],
      "ref": "p24"
    },
    {
      "id": "s23",
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
            "id": "i-k",
            "t": "text",
            "text": "Thấy khác thì hỏi nhẹ",
            "x": 5964,
            "y": 1420,
            "size": 48,
            "at": "l1:gently",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi nhẹ",
                "at": "l1:ask gently"
              }
            ]
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Vội · 1 nguồn · số đông",
            "x": 5964,
            "y": 1500,
            "size": 44,
            "at": "l2:rushing"
          },
          {
            "id": "i-5b",
            "t": "text",
            "text": "Thuận tai · đang nóng",
            "x": 5964,
            "y": 1565,
            "size": 44,
            "at": "l2:pleasant"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "“Vấn đề là… Mình chọn vì…”",
            "x": 5964,
            "y": 1645,
            "size": 42,
            "at": "l3:finish",
            "hl": [
              {
                "text": "Mình chọn vì…",
                "at": "l3:because"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Việc lớn: 3 nguồn độc lập",
            "x": 5964,
            "y": 1720,
            "size": 44,
            "at": "l3:sources"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "See it differently? Ask gently. Don't stay quiet to keep the peace.",
          "sub": "Thấy khác thì hỏi nhẹ, đừng im cho êm.",
          "keys": [
            "hỏi nhẹ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five traps: rushing, one source, the crowd, pleasant news, hot emotions.",
          "sub": "Năm sai lầm quen: quyết vội, tin một nguồn, gật theo số đông, chỉ nghe thuận tai, quyết lúc đang nóng.",
          "keys": [
            "Năm sai lầm quen"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Before deciding, finish: the problem is, we considered, we chose this because. Big ones? Three sources.",
          "sub": "Trước khi chốt, nói trọn ba câu: “Vấn đề là…”, “Mình đã cân nhắc…”, “Mình chọn vì…”. Việc lớn: ba nguồn độc lập."
        }
      ],
      "ref": "p23,p25"
    },
    {
      "id": "s24",
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
            "id": "i-angry",
            "t": "illus",
            "name": "face-with-steam-from-nose",
            "x": 5964,
            "y": 1780,
            "size": 64,
            "at": "l2:angry"
          },
          {
            "id": "i-hot",
            "t": "text",
            "text": "Viết lúc nóng, gửi lúc nguội",
            "x": 6044,
            "y": 1790,
            "size": 44,
            "at": "l2:hot",
            "color": "accent",
            "hl": [
              {
                "text": "gửi lúc nguội",
                "at": "l2:send it cool"
              }
            ]
          },
          {
            "id": "i-like",
            "t": "text",
            "text": "Càng thích, càng soi",
            "x": 6804,
            "y": 1780,
            "size": 44,
            "at": "l2:love",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Love an option? Hunt for reasons against it. Angry? Write it hot, send it cool.",
          "sub": "Càng thích, càng tìm lý do để không chọn. Đang bực? Viết lúc nóng, gửi lúc nguội, sau ít nhất một giờ.",
          "keys": [
            "Viết lúc nóng, gửi lúc nguội"
          ]
        }
      ],
      "ref": "p26"
    },
    {
      "id": "s25",
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
            "text": "⑧ Thứ Hai 8:00 · Báo lên sếp",
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
                  "id": "dung",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone",
                "eight-oclock"
              ]
            },
            "at": "l1:eight",
            "caption": "Thứ Hai tuần sau · 8:00",
            "icon": "e-mail"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "1. Vấn đề: một câu",
            "x": 7932,
            "y": 1250,
            "size": 46,
            "at": "l2:problem"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "2. Nguyên nhân: kiểm / đoán",
            "x": 7932,
            "y": 1320,
            "size": 44,
            "at": "l2:cause",
            "hl": [
              {
                "text": "kiểm / đoán",
                "at": "l2:guess"
              }
            ]
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "3. 2–3 phương án: lợi, hại",
            "x": 7932,
            "y": 1390,
            "size": 44,
            "at": "l3:options"
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "4. Đề xuất + hạn quyết",
            "x": 7932,
            "y": 1460,
            "size": 44,
            "at": "l3:pick",
            "color": "accent",
            "hl": [
              {
                "text": "hạn quyết",
                "at": "l3:deadline"
              }
            ]
          },
          {
            "id": "j-nb",
            "t": "text",
            "text": "Không đổ cho phòng khác",
            "x": 7932,
            "y": 1540,
            "size": 42,
            "at": "l3:blaming",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop: Monday, eight a.m. again.",
          "sub": "Chặng cuối: lại tám giờ sáng thứ Hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Report early, in four parts. The problem, in one sentence. The cause: checked, or a guess.",
          "sub": "Báo sớm, bốn phần. Vấn đề trong một câu. Nguyên nhân: đã kiểm hay còn đoán.",
          "keys": [
            "bốn phần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Options, a plus and a minus each. Your pick, and a deadline. No blaming other teams.",
          "sub": "Hai ba phương án, mỗi cái một lợi một hại. Đề xuất, kèm hạn cần quyết. Đừng đổ cho bộ phận khác."
        }
      ],
      "ref": "p27"
    },
    {
      "id": "s26",
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
            "at": "l1",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-ca",
            "t": "text",
            "text": "Bắt đúng bệnh, rồi bốc thuốc",
            "x": 7932,
            "y": 1650,
            "size": 48,
            "at": "l6:illness",
            "color": "accent",
            "hl": [
              {
                "text": "Bắt đúng bệnh",
                "at": "l6:right illness"
              }
            ]
          },
          {
            "id": "j-r",
            "t": "ring",
            "around": [
              "j-ca"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l6:medicine"
          },
          {
            "id": "j-m",
            "t": "text",
            "text": "Duyệt trước 15:00",
            "x": 8772,
            "y": 1780,
            "size": 44,
            "at": "l4:three",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "The order will be two days late; the supplier sent too little. Confirmed.",
          "sub": "Chị ơi, lô hàng cho khách sẽ trễ hai ngày do nhà cung cấp giao thiếu nguyên liệu, em đã xác nhận.",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Wait for everything, or send what we have now.",
          "sub": "Có hai cách: chờ đủ hàng, hoặc giao trước phần có sẵn rồi bù sau."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I suggest sending first. The customer agreed before.",
          "sub": "Em đề xuất giao trước, vì khách từng đồng ý cách này."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "I need your approval by three.",
          "sub": "Em cần chị duyệt trước ba giờ chiều nay để kịp báo khách.",
          "face": "neutral"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Clear. I can decide now.",
          "sub": "Rõ ràng. Chị quyết được ngay.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "No more praying everywhere. Find the right illness, then the medicine.",
          "sub": "Hết cảnh “vái tứ phương”. Bắt đúng bệnh rồi mới bốc thuốc.",
          "keys": [
            "Bắt đúng bệnh"
          ]
        }
      ],
      "ref": "p28"
    },
    {
      "id": "s27",
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
            "at": "l1:name",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:weigh",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:report",
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
            "y": 240,
            "at": "l1:name"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 800,
            "y": 1590,
            "at": "l2:weigh"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8672,
            "y": 1460,
            "at": "l3:report"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: name the problem, and find its real root.",
          "sub": "Tóm lại: gọi đúng tên vấn đề, tìm đúng gốc.",
          "keys": [
            "gọi đúng tên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Find options, weigh them by criteria, turn the choice into tasks.",
          "sub": "Có vài phương án, cân theo tiêu chí, biến lựa chọn thành việc.",
          "keys": [
            "cân theo tiêu chí"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then report briefly. Solving a problem is walking the steps in order.",
          "sub": "Rồi báo lên gọn. Giải quyết vấn đề là đi đúng thứ tự.",
          "keys": [
            "đi đúng thứ tự"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s51",
      "module": "QUIZ-01",
      "ref": "questions[13]",
      "data": {
        "q": "Why should doing nothing be one of your options?",
        "options": [
          "It is a baseline that shows how much the problem really costs if left alone",
          "It lets you avoid responsibility, because nobody can blame you for doing nothing",
          "It is always the cheapest option, so it should usually be chosen in the end"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "hourglass-not-done",
        "why": "Không làm gì là mốc để so: để yên thiệt nhỏ thì chưa đáng sửa, thiệt lớn dần thì hành động."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why should doing nothing be one of your options?",
          "sub": "Vì sao “không làm gì” nên là một trong các phương án?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It is a baseline that shows how much the problem really costs if left alone.",
          "sub": "Nó là mốc cho thấy để yên thì vấn đề thật sự gây thiệt bao nhiêu."
        }
      ],
      "beats": {
        "after": 600
      }
    },
    {
      "id": "s52",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: viết vấn đề thành một câu",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, write one work problem as one sentence. Then, forty questions!",
          "sub": "Hôm nay, viết một vấn đề ở chỗ làm thành một câu. Rồi làm bốn mươi câu nhé!"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s26"
  }
};
