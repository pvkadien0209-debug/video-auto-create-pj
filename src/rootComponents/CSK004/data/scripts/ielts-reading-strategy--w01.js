// ielts-reading-strategy--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-reading-strategy--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "ielts-academic-reading-takers",
    "slug": "ielts-reading-strategy",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Ba bài đọc IELTS Academic trong 60 phút: chiến thuật chung là gì?",
    "series": "IELTS Academic Reading trong 60 phút — chiến thuật từng dạng câu hỏi cho thí sinh band 5.5–7"
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
            "fit": "A",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-num",
            "t": "text",
            "text": "60 phút",
            "x": 60,
            "y": 100,
            "size": 150,
            "at": "l1:Sixty",
            "color": "accent",
            "hl": [
              {
                "text": "60",
                "at": "l1:Sixty"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "3 bài đọc · 40 câu",
            "x": 70,
            "y": 320,
            "size": 60,
            "at": "l1:three"
          },
          {
            "id": "a-ac",
            "t": "text",
            "text": "văn bản học thuật",
            "x": 70,
            "y": 420,
            "size": 50,
            "at": "l2:academic",
            "hl": [
              {
                "text": "học thuật",
                "at": "l2:academic"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: British Council — IELTS test format, Reading",
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
          "say": "Sixty minutes. Three passages. Forty questions.",
          "sub": "Sáu mươi phút. Ba bài đọc. Bốn mươi câu hỏi.",
          "keys": [
            "Sáu mươi phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That's IELTS Academic Reading, with texts taken from academic writing, says the British Council.",
          "sub": "Đó là phần Đọc IELTS Academic, bài lấy từ văn bản học thuật, theo British Council.",
          "keys": [
            "văn bản học thuật"
          ]
        }
      ],
      "ref": "p1"
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
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "stopwatch",
                "laptop"
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
            "caption": "Chủ nhật 8:00 · thi thử ở nhà",
            "icon": "stopwatch"
          },
          {
            "id": "a-b3",
            "t": "text",
            "text": "Bài 3: còn… 10 phút",
            "x": 60,
            "y": 520,
            "size": 54,
            "at": "l3:ten",
            "color": "coral",
            "hl": [
              {
                "text": "10 phút",
                "at": "l3:ten"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nước đến chân mới nhảy”",
            "x": 60,
            "y": 630,
            "size": 52,
            "at": "l5:water",
            "color": "accent",
            "hl": [
              {
                "text": "mới nhảy",
                "at": "l5:jump"
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
          "say": "Meet Thảo, twenty-seven, an office worker taking IELTS Academic for a master's application.",
          "sub": "Đây là Thảo, hai mươi bảy tuổi, nhân viên văn phòng, thi IELTS Academic để nộp hồ sơ thạc sĩ.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sunday, eight a.m. A practice test at home, stopwatch on.",
          "sub": "Chủ nhật, tám giờ sáng. Thi thử ở nhà, đồng hồ bấm giờ đã chạy.",
          "keys": [
            "đồng hồ bấm giờ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Last week, passage three got ten minutes. I just guessed the rest!",
          "sub": "Tuần trước, bài ba còn đúng mười phút. Mình khoanh bừa cho xong!",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Like a family dinner where the first guest eats half the pot.",
          "sub": "Như bữa cơm ba người mà người đầu tiên ăn hết nửa nồi.",
          "keys": [
            "hết nửa nồi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our saying: only when water reaches your feet do you jump.",
          "sub": "Ông bà nói: “Nước đến chân mới nhảy.”",
          "keys": [
            "Nước đến chân mới nhảy"
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
      "ref": "intro,p5"
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
            "text": "60 phút chia thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:split",
            "hl": [
              {
                "text": "chia",
                "at": "l1:split"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: đọc nhanh như Tây",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:native",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:speaker+300"
          },
          {
            "id": "b-y1",
            "t": "text",
            "text": "Mà là: chia giờ hợp lý",
            "x": 2028,
            "y": 260,
            "size": 54,
            "at": "l3:time",
            "color": "accent",
            "hl": [
              {
                "text": "chia giờ",
                "at": "l3:time"
              }
            ]
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "đọc kỹ đúng chỗ",
            "x": 2088,
            "y": 345,
            "size": 50,
            "at": "l3:right places"
          },
          {
            "id": "b-y3",
            "t": "text",
            "text": "trả lời mọi câu",
            "x": 2088,
            "y": 420,
            "size": 50,
            "at": "l3:every question"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you split sixty minutes across three passages?",
          "sub": "Vậy chia sáu mươi phút cho ba bài thế nào?",
          "keys": [
            "chia sáu mươi phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not by reading as fast as a native speaker.",
          "sub": "Không phải đọc nhanh như người bản ngữ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But by splitting your time, reading closely in the right places, and answering every question.",
          "sub": "Mà là chia giờ hợp lý, đọc kỹ đúng chỗ, và trả lời mọi câu.",
          "keys": [
            "chia giờ hợp lý"
          ]
        }
      ],
      "ref": "intro"
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
          }
        ],
        "items": [
          {
            "id": "b-k1",
            "t": "text",
            "text": "Mô tả · sự kiện · bàn luận",
            "x": 2928,
            "y": 170,
            "size": 46,
            "at": "l1:describe"
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "Trang trọng, dài hơn General",
            "x": 2928,
            "y": 245,
            "size": 46,
            "at": "l1:formal"
          },
          {
            "id": "b-k3",
            "t": "text",
            "text": "Sách, tạp chí, báo thật",
            "x": 2928,
            "y": 340,
            "size": 48,
            "at": "l2:books",
            "hl": [
              {
                "text": "thật",
                "at": "l2:real"
              }
            ]
          },
          {
            "id": "b-k4",
            "t": "text",
            "text": "cho người đọc không chuyên",
            "x": 2968,
            "y": 415,
            "size": 44,
            "at": "l2:non"
          },
          {
            "id": "b-k5",
            "t": "text",
            "text": "Mọi đáp án nằm trong bài",
            "x": 2928,
            "y": 510,
            "size": 52,
            "at": "l3:inside",
            "color": "accent",
            "hl": [
              {
                "text": "trong bài",
                "at": "l3:inside"
              }
            ]
          },
          {
            "id": "b-k6",
            "t": "text",
            "text": "Nghe → Đọc → Viết: không nghỉ",
            "x": 2028,
            "y": 560,
            "size": 46,
            "at": "l4:no break",
            "color": "coral",
            "hl": [
              {
                "text": "không nghỉ",
                "at": "l4:no break"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: British Council; IDP — Academic Reading",
            "x": 2028,
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
          "say": "The texts may describe, report facts, or argue. More formal and longer than General Training.",
          "sub": "Bài có thể mô tả, trình bày sự kiện hay bàn luận. Trang trọng và dài hơn bản General Training."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IDP says they're real texts from books, journals, magazines and newspapers, chosen for non-specialist readers.",
          "sub": "IDP ghi đó là văn bản thật, từ sách, tạp chí, báo, chọn cho người đọc không chuyên.",
          "keys": [
            "văn bản thật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No biology degree needed. Every answer is inside the passage.",
          "sub": "Chẳng cần bằng sinh học. Mọi đáp án đều nằm trong bài.",
          "keys": [
            "nằm trong bài"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And Listening, Reading and Writing run back to back, no break. Focus needs training too.",
          "sub": "Nghe, Đọc, Viết thi liền, không nghỉ. Sức tập trung cũng phải tập.",
          "keys": [
            "không nghỉ"
          ]
        }
      ],
      "ref": "p1,p2,p3"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Chủ nhật thi thử của Thảo",
        "points": [
          {
            "label": "8:00",
            "sub": "Bấm giờ",
            "illus": "stopwatch"
          },
          {
            "label": "8:30",
            "sub": "Tua lại",
            "illus": "counterclockwise-arrows-button"
          },
          {
            "label": "9:10",
            "sub": "Từng chữ?",
            "illus": "magnifying-glass-tilted-left"
          },
          {
            "label": "9:40",
            "sub": "Thi trên máy",
            "illus": "laptop"
          },
          {
            "label": "10:40",
            "sub": "Ba nhóm việc",
            "illus": "card-index-dividers"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One Sunday morning, five stops.",
          "sub": "Một sáng Chủ nhật, năm chặng.",
          "keys": [
            "Một sáng Chủ nhật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Stopwatch ready. Let's go.",
          "sub": "Đồng hồ sẵn sàng. Bắt đầu."
        }
      ],
      "ref": "intro"
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 8:00 · Cách A: chắc từng câu",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "stopwatch",
                "open-book"
              ],
              "camera": [
                {
                  "at": "l2",
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
            "at": "l1:Stop one",
            "caption": "8:00 · bài 1, câu khó",
            "icon": "open-book"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Câu khó → đọc lại cả đoạn",
            "x": 3996,
            "y": 170,
            "size": 48,
            "at": "l3:whole"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Bài 1: gần 30 phút",
            "x": 3996,
            "y": 260,
            "size": 56,
            "at": "l4:thirty",
            "color": "coral",
            "hl": [
              {
                "text": "30 phút",
                "at": "l4:thirty"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Bài 3: còn 10 phút",
            "x": 3996,
            "y": 350,
            "size": 56,
            "at": "l4:ten",
            "color": "coral"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "→ nhiều câu bỏ trống",
            "x": 4036,
            "y": 435,
            "size": 48,
            "at": "l4:blank",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, eight a.m. Option A: Thảo goes in order, and must be sure of every answer.",
          "sub": "Chặng một, tám giờ. Cách A: Thảo làm lần lượt, câu nào cũng phải chắc.",
          "keys": [
            "Cách A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "This one's tricky. Let me read the whole paragraph again. And again.",
          "sub": "Câu này khó. Đọc lại cả đoạn đã. Thêm lần nữa.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Each hard question, she rereads the whole paragraph until she's sure.",
          "sub": "Gặp câu khó, cô đọc lại cả đoạn cho đến khi chắc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Passage one eats nearly thirty minutes. Passage three gets ten, and many boxes stay blank.",
          "sub": "Bài một ngốn gần ba mươi phút. Bài ba còn mười phút, nhiều câu bỏ trống.",
          "keys": [
            "gần ba mươi phút"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Chủ nhật 8:30 · bài 1",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Câu khó cứ đọc đến khi chắc",
          "why": "Một câu khó ăn mất giờ của bài sau; bài 3 khó nhất lại bị dồn vào mấy phút cuối.",
          "rule": "Đặt mốc giờ cho từng bài"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Eight thirty, still on passage one. Thirty minutes for two passages. Fine, I'll be fast!",
          "sub": "Tám rưỡi, vẫn ở bài một. Còn ba mươi phút cho hai bài. Ổn, mình sẽ làm nhanh!",
          "face": "worried",
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
          "say": "The last passage is the hardest. You're saving the least time for it.",
          "sub": "Bài cuối khó nhất, mà chị lại để ít giờ nhất cho nó.",
          "keys": [
            "ít giờ nhất"
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
          "who": "thao",
          "say": "Option B: fifteen, thirty-five, sixty, on my scratch paper. Unsure? Mark it, move on.",
          "sub": "Cách B: ghi mốc mười lăm, ba mươi lăm, sáu mươi ra nháp. Phân vân thì đánh dấu, đi tiếp.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Time markers first, perfect answers later.",
          "sub": "Đúng. Mốc giờ trước, đáp án hoàn hảo tính sau.",
          "phase": "redo",
          "keys": [
            "Mốc giờ trước"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p4,p5"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Cách B: mốc 15 · 35 · 60",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two",
            "hl": [
              {
                "text": "15 · 35 · 60",
                "at": "l1:markers"
              }
            ]
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 5964,
            "y": 190,
            "w": 450,
            "h": 110,
            "at": "l2:fifteen",
            "stroke": 5
          },
          {
            "id": "d-n1",
            "t": "text",
            "text": "Bài 1 · 15'",
            "x": 6004,
            "y": 210,
            "size": 60,
            "at": "l2:fifteen+200"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 6434,
            "y": 190,
            "w": 560,
            "h": 110,
            "at": "l2:twenty",
            "stroke": 5
          },
          {
            "id": "d-n2",
            "t": "text",
            "text": "Bài 2 · 20'",
            "x": 6484,
            "y": 210,
            "size": 60,
            "at": "l2:twenty+200"
          },
          {
            "id": "d-b3",
            "t": "box",
            "x": 7014,
            "y": 190,
            "w": 560,
            "h": 110,
            "at": "l2:twenty-five",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "d-n3",
            "t": "text",
            "text": "Bài 3 · 25'",
            "x": 7064,
            "y": 210,
            "size": 60,
            "at": "l2:twenty-five+200",
            "color": "accent",
            "hl": [
              {
                "text": "25'",
                "at": "l3:harder"
              }
            ]
          },
          {
            "id": "d-why",
            "t": "text",
            "text": "Mỗi bài khó hơn bài trước",
            "x": 5964,
            "y": 340,
            "size": 50,
            "at": "l3:harder",
            "hl": [
              {
                "text": "khó hơn",
                "at": "l3:harder"
              }
            ]
          },
          {
            "id": "d-avg",
            "t": "text",
            "text": "Trung bình 20', chia lệch",
            "x": 5964,
            "y": 420,
            "size": 46,
            "at": "l4:average",
            "color": "muted"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: British Council — IELTS Reading test format",
            "x": 5964,
            "y": 720,
            "size": 28,
            "at": "l2",
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
          "say": "Stop two: option B, three markers on scratch paper.",
          "sub": "Chặng hai: cách B, ba mốc trên giấy nháp.",
          "keys": [
            "ba mốc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The British Council suggests about fifteen minutes for part one, twenty for part two, twenty-five for part three.",
          "sub": "British Council gợi ý khoảng mười lăm phút cho phần một, hai mươi cho phần hai, hai mươi lăm cho phần ba.",
          "keys": [
            "mười lăm",
            "hai mươi lăm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Why uneven? Each part is harder than the one before.",
          "sub": "Sao chia lệch? Vì mỗi phần khó hơn phần trước.",
          "keys": [
            "khó hơn phần trước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Twenty on average, but tilted, so passage three never gets squeezed.",
          "sub": "Trung bình hai mươi phút một bài, nhưng chia lệch để bài ba không bị dồn."
        }
      ],
      "ref": "p4"
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
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 400,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "stopwatch",
                "memo"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "medium",
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
            "at": "l1:fifteen",
            "caption": "8:15 · sang bài 2",
            "icon": "memo"
          },
          {
            "id": "d-m",
            "t": "text",
            "text": "Phân vân → đánh dấu, quay lại",
            "x": 5964,
            "y": 500,
            "size": 44,
            "at": "l2:mark"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Một câu khó không ăn bài sau",
            "x": 5964,
            "y": 600,
            "size": 46,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "không ăn bài sau",
                "at": "l3:eat"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Eight fifteen. Passage two, even with one question open.",
          "sub": "Tám giờ mười lăm. Sang bài hai, dù còn một câu dở.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Unsure ones get a mark, and she returns if time is left. Passage three gets its full time.",
          "sub": "Câu phân vân được đánh dấu, còn giờ thì quay lại. Bài ba có đủ thời gian.",
          "keys": [
            "đánh dấu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: set a time marker for each passage. Don't let one hard question eat the next.",
          "sub": "Rút ra: đặt mốc giờ cho từng bài, đừng để một câu khó ăn mất bài sau.",
          "keys": [
            "đặt mốc giờ cho từng bài"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "id": "e-t",
            "t": "text",
            "text": "③ 9:10 · Hiểu từng chữ?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "open-book",
                "mobile-phone"
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
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "9:10 · Dũng sang chơi",
            "icon": "mobile-phone"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Dừng tra từng chữ",
            "x": 7932,
            "y": 170,
            "size": 52,
            "at": "l2:every word",
            "color": "coral"
          },
          {
            "id": "e-1x",
            "t": "strike",
            "over": "e-1",
            "at": "l4:few"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Mỗi câu hỏi: vài câu trong bài",
            "x": 7932,
            "y": 260,
            "size": 46,
            "at": "l4:few sentences",
            "color": "accent",
            "hl": [
              {
                "text": "vài câu",
                "at": "l4:few sentences"
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
          "say": "Stop three, nine ten. Meet Dũng, Thảo's cousin, a second-year biology student.",
          "sub": "Chặng ba, chín giờ mười. Đây là Dũng, em họ Thảo, sinh viên năm hai ngành sinh học.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I stop at every word I don't know. I have to understand it all first.",
          "sub": "Em gặp chữ lạ là dừng tra. Phải hiểu hết mới dám chọn.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Me too. I translate each sentence in my head.",
          "sub": "Chị cũng vậy. Câu nào cũng dịch trong đầu.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Common mix-up. Each question needs just a few sentences of the passage.",
          "sub": "Hiểu lầm thường gặp. Mỗi câu hỏi chỉ cần vài câu trong bài.",
          "keys": [
            "vài câu trong bài"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p8"
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
            "id": "e-s1",
            "t": "text",
            "text": "Lướt: ý chính",
            "x": 7932,
            "y": 360,
            "size": 50,
            "at": "l1:skimming",
            "hl": [
              {
                "text": "Lướt",
                "at": "l1:skimming"
              }
            ]
          },
          {
            "id": "e-s2",
            "t": "text",
            "text": "Dò: chi tiết",
            "x": 7932,
            "y": 435,
            "size": 50,
            "at": "l1:scanning",
            "hl": [
              {
                "text": "Dò",
                "at": "l1:scanning"
              }
            ]
          },
          {
            "id": "e-s3",
            "t": "text",
            "text": "Hiểu: quan điểm, thái độ",
            "x": 7932,
            "y": 510,
            "size": 50,
            "at": "l1:attitude"
          },
          {
            "id": "e-nt",
            "t": "text",
            "text": "Không đòi dịch trọn câu",
            "x": 7932,
            "y": 590,
            "size": 46,
            "at": "l2:translate",
            "color": "muted"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Đọc kỹ đúng chỗ, lướt phần khác",
            "x": 8772,
            "y": 690,
            "size": 44,
            "at": "l4:closely",
            "color": "accent",
            "hl": [
              {
                "text": "đúng chỗ",
                "at": "l4:right place"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: British Council — kỹ năng phần Đọc",
            "x": 7932,
            "y": 128,
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
          "say": "The British Council names three skills: skimming for main ideas, scanning for details, reading for opinion and attitude.",
          "sub": "British Council nêu ba kỹ năng: đọc lướt lấy ý chính, đọc dò tìm chi tiết, đọc hiểu quan điểm, thái độ.",
          "keys": [
            "ba kỹ năng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "None of them asks you to translate whole sentences.",
          "sub": "Không kỹ năng nào đòi dịch trọn câu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Skim to know what each paragraph says. Scan for the exact spot. Then read that spot closely.",
          "sub": "Lướt để biết đoạn nào nói gì, dò đúng chỗ có thông tin, rồi mới đọc kỹ chỗ đó.",
          "keys": [
            "đọc kỹ chỗ đó"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "An unknown word outside that spot? Let it go. Read closely in the right place, skim the rest.",
          "sub": "Chữ lạ nằm ngoài chỗ cần đọc? Bỏ qua. Đọc kỹ đúng chỗ, lướt phần còn lại.",
          "keys": [
            "Đọc kỹ đúng chỗ"
          ]
        }
      ],
      "ref": "p7,p8,p9"
    },
    {
      "id": "s11",
      "module": "BRK-03",
      "data": {
        "value": 250,
        "suffix": " từ/phút",
        "label": "đọc thầm lưu loát, hiểu tốt — Paul Nation",
        "illus": "open-book"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Speed can be trained, says Paul Nation.",
          "sub": "Tốc độ đọc tập được, theo Paul Nation."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Fluent silent reading: about two hundred and fifty words a minute.",
          "sub": "Đọc thầm lưu loát: khoảng 250 từ một phút.",
          "keys": [
            "250 từ một phút"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s12",
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
            "id": "e-sp",
            "t": "text",
            "text": "Khoá đọc tăng tốc ngắn:",
            "x": 7932,
            "y": 670,
            "size": 40,
            "at": "l1:courses"
          },
          {
            "id": "e-sp2",
            "t": "text",
            "text": "nhanh hơn ít nhất một nửa",
            "x": 8392,
            "y": 670,
            "size": 40,
            "at": "l1:half",
            "color": "accent",
            "hl": [
              {
                "text": "một nửa",
                "at": "l1:half"
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
          "say": "He adds that short speed-reading courses can make learners read at least half as fast again.",
          "sub": "Ông cho biết khoá đọc tăng tốc ngắn có thể giúp người học đọc nhanh hơn ít nhất một nửa.",
          "keys": [
            "ít nhất một nửa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lesson four of this series shows how to train.",
          "sub": "Bài bốn của chuỗi sẽ nói kỹ cách tập."
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s13",
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
            "at": "l3",
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
            "text": "④ 9:40 · Thi trên máy",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "point",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:laptop",
            "caption": "9:40 · bản thi thử trên máy",
            "icon": "laptop"
          },
          {
            "id": "f-sc",
            "t": "box",
            "x": 60,
            "y": 1265,
            "w": 330,
            "h": 190,
            "at": "l2:splits",
            "stroke": 5
          },
          {
            "id": "f-sc2",
            "t": "box",
            "x": 410,
            "y": 1265,
            "w": 330,
            "h": 190,
            "at": "l2:splits+300",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "f-p",
            "t": "text",
            "text": "Bài đọc",
            "x": 120,
            "y": 1330,
            "size": 46,
            "at": "l2:passage"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "Câu hỏi",
            "x": 470,
            "y": 1330,
            "size": 46,
            "at": "l2:questions",
            "color": "accent"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Chuột phải: tô sáng, ghi chú",
            "x": 60,
            "y": 1490,
            "size": 36,
            "at": "l3:right-click",
            "hl": [
              {
                "text": "tô sáng",
                "at": "l3:highlight"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Dạng nối: kéo thả",
            "x": 60,
            "y": 1560,
            "size": 44,
            "at": "l3:drag"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Có giấy nháp, bút chì",
            "x": 60,
            "y": 1630,
            "size": 44,
            "at": "l4:scratch"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: IDP Việt Nam — IELTS trên máy tính",
            "x": 60,
            "y": 1218,
            "size": 28,
            "at": "l2",
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
          "say": "Stop four, nine forty. In Vietnam, IELTS is taken on computer, so Thảo practises on her laptop.",
          "sub": "Chặng bốn, chín giờ bốn mươi. Ở Việt Nam, IELTS thi trên máy tính, nên Thảo tập luôn trên laptop.",
          "keys": [
            "thi trên máy tính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IDP Vietnam says the screen splits in two: the passage on one side, the questions on the other.",
          "sub": "Theo IDP Việt Nam, màn hình chia đôi: một bên bài đọc, một bên câu hỏi.",
          "keys": [
            "màn hình chia đôi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Select, right-click, highlight or add a note. Matching? Just drag and drop.",
          "sub": "Bôi đen, chuột phải, tô sáng hoặc ghi chú. Dạng nối thì kéo thả.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And you still get scratch paper and a pencil.",
          "sub": "Thí sinh vẫn được phát giấy nháp và bút chì.",
          "keys": [
            "giấy nháp và bút chì"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s14",
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
              "f-l3",
              "f-r"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3:end",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-l1",
            "t": "text",
            "text": "Không bước chép đáp án",
            "x": 60,
            "y": 1710,
            "size": 44,
            "at": "l1:copying",
            "color": "muted"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Nghe: 3 phút soát · Đọc: 0",
            "x": 900,
            "y": 1770,
            "size": 44,
            "at": "l2:three",
            "color": "coral",
            "hl": [
              {
                "text": "Đọc: 0",
                "at": "l2:nothing"
              }
            ]
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "60 phút = đọc + trả lời + soát",
            "x": 60,
            "y": 1780,
            "size": 46,
            "at": "l3:everything",
            "color": "accent",
            "hl": [
              {
                "text": "đọc + trả lời + soát",
                "at": "l3:everything"
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
          "say": "You answer right on the screen, so there's no copying to an answer sheet.",
          "sub": "Đáp án gõ, chọn ngay trên màn hình, nên không có bước chép sang phiếu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The IDP page mentions three minutes for checking at the end of Listening, and nothing extra for Reading.",
          "sub": "Trang IDP chỉ nhắc ba phút soát cuối phần Nghe, không nhắc thêm giờ nào cho phần Đọc.",
          "keys": [
            "ba phút soát cuối phần Nghe"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So sixty minutes is everything: reading, answering, checking.",
          "sub": "Vậy sáu mươi phút là tất cả: đọc, trả lời và soát.",
          "keys": [
            "sáu mươi phút là tất cả"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Còn hai phút, ba ô trống: để trống hay đoán?",
        "illus": "thinking-face"
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
          "say": "Two minutes left, three empty boxes. Leave them, or guess?",
          "sub": "Còn hai phút, ba ô trống. Để trống, hay đoán?",
          "keys": [
            "Để trống, hay đoán"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s16",
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
            "text": "⑤ 10:10 · Ô trống",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "stopwatch",
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
            "at": "l1:Stop five",
            "caption": "10:10 · còn 2 phút",
            "icon": "stopwatch"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Không chắc → để trống?",
            "x": 2028,
            "y": 1260,
            "size": 52,
            "at": "l2:blank",
            "color": "muted"
          },
          {
            "id": "g-1x",
            "t": "strike",
            "over": "g-1",
            "at": "l4:never"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "1 câu đúng = 1 điểm",
            "x": 2028,
            "y": 1360,
            "size": 58,
            "at": "l3:one mark",
            "hl": [
              {
                "text": "1 điểm",
                "at": "l3:one mark"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Câu sai: không trừ điểm",
            "x": 2028,
            "y": 1455,
            "size": 54,
            "at": "l4:never",
            "color": "accent",
            "hl": [
              {
                "text": "không trừ điểm",
                "at": "l4:taken"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: British Council — IELTS Reading test format",
            "x": 2028,
            "y": 1810,
            "size": 28,
            "at": "l3",
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
          "say": "Stop five, ten past ten. Two minutes left, three empty boxes.",
          "sub": "Chặng năm, mười giờ mười. Còn hai phút, ba ô trống."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm not sure about these. Better leave them blank than be wrong.",
          "sub": "Mấy câu này không chắc. Thà để trống còn hơn sai.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The British Council says each correct answer gets one mark.",
          "sub": "British Council ghi mỗi câu đúng được một điểm.",
          "keys": [
            "một điểm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And marks are never taken away for wrong answers. They even advise answering every question.",
          "sub": "Và không bao giờ trừ điểm câu sai. Trang này còn khuyên trả lời mọi câu.",
          "keys": [
            "không bao giờ trừ điểm"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s17",
      "module": "BRK-04",
      "data": {
        "title": "Hai phút cuối",
        "wrong": "Để trống cho chắc",
        "right": "Chọn có cân nhắc, không ô nào trống",
        "wrongIllus": "white-question-mark",
        "rightIllus": "check-box-with-check"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A blank box: zero, guaranteed.",
          "sub": "Ô bỏ trống: chắc chắn không điểm.",
          "keys": [
            "chắc chắn không điểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A careful choice: still a chance.",
          "sub": "Đáp án chọn có cân nhắc: vẫn còn cơ hội đúng.",
          "keys": [
            "vẫn còn cơ hội đúng"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s18",
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
            "id": "g-k",
            "t": "text",
            "text": "Hết giờ: không ô nào trống",
            "x": 2028,
            "y": 1610,
            "size": 50,
            "at": "l1:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "không ô nào trống",
                "at": "l1:empty"
              }
            ]
          },
          {
            "id": "g-tip",
            "t": "text",
            "text": "Mốc 58': điền nốt ô trống",
            "x": 2028,
            "y": 1700,
            "size": 44,
            "at": "l2:fifty-eight"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: before time runs out, leave no box empty.",
          "sub": "Rút ra: trước khi hết giờ, không để ô nào trống.",
          "keys": [
            "không để ô nào trống"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "New marker then: at fifty-eight minutes, I fill every empty box.",
          "sub": "Thêm một mốc: phút năm mươi tám, điền nốt mọi ô trống.",
          "face": "happy"
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s19",
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 10:40 · Ba nhóm việc",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six",
            "hl": [
              {
                "text": "Ba nhóm",
                "at": "l3:three"
              }
            ]
          },
          {
            "id": "h-l",
            "t": "text",
            "text": "T/F/NG · Y/N/NG · trắc nghiệm",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l2:True"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "nối tiêu đề, thông tin, đặc điểm",
            "x": 3996,
            "y": 1325,
            "size": 44,
            "at": "l2:headings"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "điền tóm tắt, câu, bảng, sơ đồ",
            "x": 3996,
            "y": 1390,
            "size": 44,
            "at": "l2:summary"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: British Council; IDP — các dạng câu hỏi",
            "x": 3996,
            "y": 1465,
            "size": 28,
            "at": "l2",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-i1",
            "t": "illus",
            "name": "magnifying-glass-tilted-left",
            "x": 4006,
            "y": 1540,
            "size": 90,
            "at": "l4:Checking"
          },
          {
            "id": "h-g1",
            "t": "text",
            "text": "Đối chiếu: nhận định ↔ bài",
            "x": 4116,
            "y": 1555,
            "size": 48,
            "at": "l4:Checking+200",
            "hl": [
              {
                "text": "Đối chiếu",
                "at": "l4:Checking"
              }
            ]
          },
          {
            "id": "h-i2",
            "t": "illus",
            "name": "link",
            "x": 4006,
            "y": 1650,
            "size": 90,
            "at": "l5:Matching"
          },
          {
            "id": "h-g2",
            "t": "text",
            "text": "Nối: ý chính, ghép thông tin",
            "x": 4116,
            "y": 1665,
            "size": 48,
            "at": "l5:Matching+200",
            "hl": [
              {
                "text": "Nối",
                "at": "l5:Matching"
              }
            ]
          },
          {
            "id": "h-i3",
            "t": "illus",
            "name": "pencil",
            "x": 4006,
            "y": 1755,
            "size": 90,
            "at": "l6:Filling"
          },
          {
            "id": "h-g3",
            "t": "text",
            "text": "Điền: đúng chữ, chép đúng",
            "x": 4116,
            "y": 1770,
            "size": 48,
            "at": "l6:Filling+200",
            "hl": [
              {
                "text": "Điền",
                "at": "l6:Filling"
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
          "say": "Stop six, ten forty. Thảo lists the question types. The list looks endless.",
          "sub": "Chặng sáu, mười giờ bốn mươi. Thảo liệt kê các dạng câu hỏi. Dài như sớ táo quân."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "True False Not Given, Yes No Not Given, multiple choice, matching headings and information, summary, sentence and diagram completion.",
          "sub": "True/False/Not Given, Yes/No/Not Given, trắc nghiệm, nối tiêu đề, nối thông tin, điền tóm tắt, điền câu, điền sơ đồ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Too many? Group them into three jobs.",
          "sub": "Nhiều quá? Gom lại thành ba nhóm việc.",
          "keys": [
            "ba nhóm việc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Checking: compare a statement with the passage, like True False Not Given.",
          "sub": "Đối chiếu: so một nhận định với bài, như True/False/Not Given.",
          "keys": [
            "Đối chiếu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Matching: find the main idea or pair up information, like matching headings.",
          "sub": "Nối: tìm ý chính hoặc ghép thông tin, như nối tiêu đề.",
          "keys": [
            "Nối"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Filling: find the right words and copy them correctly, like summary completion.",
          "sub": "Điền: tìm đúng chữ trong bài và chép đúng, như điền tóm tắt.",
          "keys": [
            "Điền"
          ]
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s20",
      "module": "BRK-11",
      "data": {
        "title": "Lộ trình 4 bài tiếp",
        "items": [
          "True, False hay Not Given",
          "Nối tiêu đề với đoạn văn",
          "Điền tóm tắt, hoàn thành câu",
          "Từ vựng học thuật cho Reading"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Four: academic vocabulary.",
          "sub": "Bốn: từ vựng học thuật."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three: summary completion.",
          "sub": "Ba: điền tóm tắt."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Two: matching headings.",
          "sub": "Hai: nối tiêu đề."
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "One: True, False, Not Given. Start here.",
          "sub": "Một: True, False, Not Given. Bắt đầu từ đây.",
          "keys": [
            "Bắt đầu từ đây"
          ]
        }
      ],
      "ref": "p17,p18"
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
            "at": "l3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Chủ nhật sau · 8:00",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Next Sunday"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "stopwatch",
                "memo"
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
            "at": "l1:Next Sunday",
            "caption": "Chủ nhật sau 8:00 · cùng bàn ấy",
            "icon": "stopwatch"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "8:15 · 8:35 · 9:00 ✓",
            "x": 5964,
            "y": 1260,
            "size": 56,
            "at": "l2:fifteen",
            "color": "accent",
            "hl": [
              {
                "text": "✓",
                "at": "l2:right"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Bài 3: đủ 25 phút",
            "x": 5964,
            "y": 1360,
            "size": 52,
            "at": "l2:twenty-five"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "0 ô trống",
            "x": 5964,
            "y": 1450,
            "size": 56,
            "at": "l3:empty",
            "hl": [
              {
                "text": "0",
                "at": "l3:Zero"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Nước chưa đến chân…”",
            "x": 5964,
            "y": 1570,
            "size": 54,
            "at": "l4:water",
            "color": "accent",
            "hl": [
              {
                "text": "chưa đến chân",
                "at": "l4:reached"
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
          "say": "Next Sunday, eight a.m. Same desk, same stopwatch, same Thảo.",
          "sub": "Chủ nhật tuần sau, tám giờ sáng. Vẫn bàn ấy, đồng hồ ấy, Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Eight fifteen, eight thirty-five, nine o'clock, right on time. Passage three got twenty-five minutes!",
          "sub": "Tám giờ mười lăm, tám ba lăm, chín giờ, đúng mốc. Bài ba có đủ hai mươi lăm phút!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Zero empty boxes.",
          "sub": "Không ô nào trống.",
          "keys": [
            "Không ô nào trống"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "This time she jumped before the water reached her feet.",
          "sub": "Lần này, nước chưa đến chân, Thảo đã sang bài ba.",
          "keys": [
            "nước chưa đến chân"
          ]
        }
      ],
      "ref": "p5,p14"
    },
    {
      "id": "s22",
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
            "at": "l1:end",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: chia giờ, đọc đúng chỗ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:So"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Làm ngay: 1 đề trọn vẹn",
            "x": 7932,
            "y": 1290,
            "size": 52,
            "at": "l5:Try",
            "hl": [
              {
                "text": "1 đề trọn vẹn",
                "at": "l5:full"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "mốc 15 · 35 · 60, ghi chỗ trễ",
            "x": 7972,
            "y": 1375,
            "size": 46,
            "at": "l5:fell"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: True / False / Not Given",
            "x": 7932,
            "y": 1480,
            "size": 48,
            "at": "l6:Next",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7504,
            "y": 40,
            "at": "l2:markers"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 40,
            "at": "l3:closely"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1260,
            "at": "l4:every"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; cấu trúc đề, quy định thi có thể đổi — kiểm lại trang chính thức IELTS. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l6:end",
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
          "say": "So, three passages in sixty minutes don't need native speed.",
          "sub": "Tóm lại, ba bài trong sáu mươi phút không cần tốc độ người bản ngữ.",
          "keys": [
            "không cần tốc độ người bản ngữ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: time markers, fifteen, twenty, twenty-five.",
          "sub": "Một: mốc giờ, mười lăm, hai mươi, hai mươi lăm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: read closely only where the answer lives.",
          "sub": "Hai: chỉ đọc kỹ chỗ có đáp án."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: answer every question. No mark is ever taken away.",
          "sub": "Ba: trả lời mọi câu, không bao giờ bị trừ điểm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: one full Reading test, markers at fifteen, thirty-five, sixty. Note where you fell behind.",
          "sub": "Làm ngay: một đề Đọc trọn vẹn, mốc mười lăm, ba mươi lăm, sáu mươi. Ghi lại bài nào bị trễ.",
          "keys": [
            "một đề Đọc trọn vẹn"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: True, False or Not Given.",
          "sub": "Bài tiếp theo: True, False hay Not Given.",
          "keys": [
            "True, False hay Not Given"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "What time split does the British Council suggest for the three parts?",
        "options": [
          "Exactly twenty minutes for each part, with no flexibility at all",
          "About fifteen, twenty and twenty five minutes, as parts get harder",
          "Most of the hour on the first part, since it carries more marks"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "stopwatch",
        "why": "Trang Reading gợi ý khoảng 15, 20, 25 phút. Mỗi phần khó hơn phần trước nên phần sau cần nhiều giờ hơn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What time split does the British Council suggest for the three parts?",
          "sub": "British Council gợi ý chia giờ thế nào cho ba phần?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "About fifteen, twenty and twenty five minutes, as parts get harder.",
          "sub": "Khoảng mười lăm, hai mươi, hai mươi lăm phút, vì phần sau khó hơn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Tilt your time toward the hardest passage.",
          "sub": "Dồn nhiều giờ hơn cho bài khó nhất."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[7]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Bạn đã xem xong. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stopwatch on, three markers ready. Then try the forty questions below.",
          "sub": "Bấm giờ, ghi ba mốc. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT CHỦ NHẬT THI THỬ của Thảo (8:00 bấm giờ, cách A → 8:30 “Khoan đã!” tua lại → cách B mốc 15·35·60 → 9:10 Dũng “hiểu từng chữ?” → 9:40 thi trên máy → 10:10 ô trống → 10:40 ba nhóm việc → lộ trình → Chủ nhật sau 8:00 khép vòng). Neo mở (HOOK-24): “60 phút · 3 bài · 40 câu” (British Council). Nhân vật: Thảo (chính), Dũng (em họ) — w145/_series/ielts-academic-reading-takers.md. Cảnh ngắt nhịp: BRK-08 (một sáng Chủ nhật), BRK-03 (250 từ/phút, Paul Nation), BRK-07 (rehook ô trống), BRK-04 (để trống / chọn có cân nhắc), BRK-11 (lộ trình 4 bài). Ca dao: “Nước đến chân mới nhảy”. Câu đố questions[7].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
