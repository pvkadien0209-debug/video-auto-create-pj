// choose-english-certificate--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "choose-english-certificate--w01",
  "hook": "HOOK-20",
  "unit": {
    "audience": "english-certificate-choosers",
    "slug": "choose-english-certificate",
    "door": "kien-thuc",
    "level": "B1",
    "title": "IELTS, TOEIC, VSTEP hay Cambridge: nên thi chứng chỉ nào?",
    "series": "Chọn đúng chứng chỉ tiếng Anh — so IELTS, TOEIC, VSTEP, Cambridge theo mục đích, chi phí và cách thi"
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
            "id": "a-best",
            "t": "text",
            "text": "“Tốt nhất”?",
            "x": 60,
            "y": 90,
            "size": 120,
            "at": "l1:best",
            "color": "ink"
          },
          {
            "id": "a-bx",
            "t": "strike",
            "over": "a-best",
            "at": "l1:none"
          },
          {
            "id": "a-no",
            "t": "text",
            "text": "không có cho mọi người",
            "x": 60,
            "y": 250,
            "size": 52,
            "at": "l1:everyone",
            "color": "muted"
          },
          {
            "id": "a-ask",
            "t": "text",
            "text": "Hỏi nơi nhận trước",
            "x": 60,
            "y": 340,
            "size": 72,
            "at": "l2:ask",
            "color": "accent",
            "hl": [
              {
                "text": "nơi nhận",
                "at": "l2:receive"
              }
            ]
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "loại nào · mức nào · hạn nào",
            "x": 60,
            "y": 450,
            "size": 44,
            "at": "l2:which"
          },
          {
            "id": "a-slip",
            "t": "text",
            "text": "3 chỗ hay trượt",
            "x": 60,
            "y": 540,
            "size": 52,
            "at": "l3:three",
            "color": "coral",
            "hl": [
              {
                "text": "3 chỗ",
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
          "say": "Which English certificate is best for you? Short answer: none is best for everyone.",
          "sub": "Chứng chỉ tiếng Anh nào tốt nhất cho bạn? Trả lời ngắn: chẳng cái nào tốt nhất cho mọi người.",
          "keys": [
            "tốt nhất cho mọi người"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First ask who will receive it: which certificates, what level, valid until when.",
          "sub": "Trước hết hỏi nơi nhận: chứng chỉ nào, mức bao nhiêu, còn hạn đến ngày nào.",
          "keys": [
            "hỏi nơi nhận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Simple? Yet people slip on three things: skills, levels, dates.",
          "sub": "Đơn giản? Vậy mà người ta hay trượt ở ba chỗ: kỹ năng, bậc, ngày tháng.",
          "keys": [
            "ba chỗ"
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
            "at": "l6",
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
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "page-facing-up",
                "bowl-with-spoon"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Chủ nhật 19:00 · bữa cơm",
            "icon": "bowl-with-spoon"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đo bò làm chuồng”",
            "x": 60,
            "y": 640,
            "size": 56,
            "at": "l6:cow",
            "color": "accent",
            "hl": [
              {
                "text": "Đo bò làm chuồng",
                "at": "l6:barn"
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
          "say": "Meet one family at Sunday dinner. Dũng, the eldest, office worker.",
          "sub": "Đây là một nhà ba anh em, bữa cơm tối Chủ nhật. Dũng, anh cả, nhân viên văn phòng.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo, a third year student. And Lan, the youngest, in grade twelve.",
          "sub": "Thảo, sinh viên năm ba. Và Lan, em út, học lớp 12.",
          "keys": [
            "Thảo",
            "Lan"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "My company wants a certificate in three weeks. I'll book whatever's quickest!",
          "sub": "Công ty anh đòi chứng chỉ trong ba tuần. Thi cái gì nhanh nhất là được!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "My friends all say IELTS, to be safe. I'm signing up with them.",
          "sub": "Bạn em bảo cứ thi IELTS cho chắc. Em đăng ký theo luôn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "My school list has TOEIC. So any TOEIC works, right?",
          "sub": "Danh sách của trường em có TOEIC. Vậy TOEIC nào chẳng được, nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Book first, read later? Grandparents call it measuring the cow after the barn.",
          "sub": "Đăng ký trước, đọc yêu cầu sau? Ông bà gọi là “đo bò làm chuồng”.",
          "keys": [
            "đo bò làm chuồng"
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
      "ref": "intro,p8"
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
            "text": "Nên thi chứng chỉ nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:take",
            "hl": [
              {
                "text": "chứng chỉ nào",
                "at": "l1:certificate"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "illus",
            "name": "books",
            "x": 3268,
            "y": 180,
            "size": 200,
            "at": "l1:IELTS"
          },
          {
            "id": "b-4t",
            "t": "text",
            "text": "IELTS · TOEIC · VSTEP · Cambridge",
            "x": 2868,
            "y": 420,
            "size": 44,
            "at": "l1:IELTS+400"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: tên nổi nhất",
            "x": 2028,
            "y": 180,
            "size": 56,
            "at": "l2:famous",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:accepts"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: nơi nhận chấp nhận",
            "x": 2028,
            "y": 280,
            "size": 58,
            "at": "l2:accepts",
            "color": "accent",
            "hl": [
              {
                "text": "nơi nhận chấp nhận",
                "at": "l2:accepts"
              }
            ]
          },
          {
            "id": "b-lv",
            "t": "text",
            "text": "đúng mức · kịp hạn",
            "x": 2028,
            "y": 380,
            "size": 52,
            "at": "l2:level"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Một tuần, bảy chặng",
            "x": 2028,
            "y": 560,
            "size": 56,
            "at": "l3:seven",
            "hl": [
              {
                "text": "bảy chặng",
                "at": "l3:seven"
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
          "say": "So which certificate should you take: IELTS, TOEIC, VSTEP or Cambridge?",
          "sub": "Vậy nên thi chứng chỉ nào: IELTS, TOEIC, VSTEP hay Cambridge?",
          "keys": [
            "nên thi chứng chỉ nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not the most famous name. The one your receiver accepts, at their level, before their deadline.",
          "sub": "Không phải cái tên nổi tiếng nhất, mà là cái nơi nhận chấp nhận, đúng mức, kịp hạn.",
          "keys": [
            "nơi nhận chấp nhận"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One week, seven stops.",
          "sub": "Một tuần, bảy chặng."
        }
      ],
      "ref": "intro,p7"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Một tuần chọn chứng chỉ",
        "points": [
          {
            "label": "Thứ Hai",
            "sub": "Bốn bài thi",
            "illus": "books"
          },
          {
            "label": "Thứ Ba",
            "sub": "Chữ “4 kỹ năng”",
            "illus": "page-facing-up"
          },
          {
            "label": "Thứ Năm",
            "sub": "Bậc 3 hay B1",
            "illus": "ladder"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Ngày thi",
            "illus": "spiral-calendar"
          },
          {
            "label": "Chủ nhật",
            "sub": "Bảng kiểm",
            "illus": "clipboard"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One family, three receivers.",
          "sub": "Một nhà, ba nơi nhận.",
          "keys": [
            "ba nơi nhận"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A week to choose right, not just choose fast.",
          "sub": "Một tuần để chọn cho đúng, không chỉ chọn cho nhanh."
        }
      ],
      "ref": "p20"
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
            "text": "① Thứ Hai · Bốn bài thi",
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
              "set": "home",
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
                "books"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:Thảo",
            "caption": "Thứ Hai 20:00 · bốn tab",
            "icon": "laptop"
          },
          {
            "id": "c-i1",
            "t": "text",
            "text": "IELTS: 4 kỹ năng · 2g45",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l3:four skills",
            "hl": [
              {
                "text": "4 kỹ năng",
                "at": "l3:four skills"
              }
            ]
          },
          {
            "id": "c-i2",
            "t": "text",
            "text": "Academic ≠ General: Đọc, Viết",
            "x": 3996,
            "y": 250,
            "size": 42,
            "at": "l4:differ"
          },
          {
            "id": "c-i3",
            "t": "text",
            "text": "Dạng nào? Nơi nhận quyết",
            "x": 3996,
            "y": 325,
            "size": 46,
            "at": "l5:receiver",
            "color": "accent",
            "hl": [
              {
                "text": "Nơi nhận quyết",
                "at": "l5:decides"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: British Council; ETS; ĐHQGHN (VSTEP.3-5); Cambridge English",
            "x": 3996,
            "y": 735,
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
          "say": "Stop one, Monday night. Thảo opens four test websites at once, like four tabs of hot gossip.",
          "sub": "Chặng một, tối thứ Hai. Thảo mở bốn trang thi cùng lúc, như bốn tab tin nóng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "IELTS, TOEIC, VSTEP, Cambridge. Aren't they all just English tests?",
          "sub": "IELTS, TOEIC, VSTEP, Cambridge. Chẳng phải đều là thi tiếng Anh sao?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same language, different rulers. IELTS tests all four skills, in about two hours forty five minutes.",
          "sub": "Cùng tiếng Anh, khác cây thước. IELTS thi đủ bốn kỹ năng, tổng khoảng 2 giờ 45 phút.",
          "keys": [
            "đủ bốn kỹ năng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Academic and General Training differ only in reading and writing.",
          "sub": "Hai dạng Academic và General Training chỉ khác ở Đọc và Viết."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Which one? The receiver decides, not your mood.",
          "sub": "Chọn dạng nào? Nơi nhận quyết, không phải tâm trạng bạn.",
          "keys": [
            "Nơi nhận quyết"
          ]
        }
      ],
      "ref": "p1"
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
          }
        ],
        "items": [
          {
            "id": "c-t1",
            "t": "text",
            "text": "TOEIC Nghe–Đọc: 200 câu, 2 giờ",
            "x": 3996,
            "y": 430,
            "size": 44,
            "at": "l1:two hundred",
            "hl": [
              {
                "text": "200 câu",
                "at": "l1:two hundred"
              }
            ]
          },
          {
            "id": "c-t2",
            "t": "text",
            "text": "5–495 mỗi phần · 10–990",
            "x": 3996,
            "y": 500,
            "size": 40,
            "at": "l2:five"
          },
          {
            "id": "c-t3",
            "t": "text",
            "text": "Nói–Viết: bài riêng, 0–200",
            "x": 3996,
            "y": 570,
            "size": 46,
            "at": "l3:separate",
            "color": "accent",
            "hl": [
              {
                "text": "bài riêng",
                "at": "l3:separate"
              }
            ]
          },
          {
            "id": "c-v1",
            "t": "text",
            "text": "VSTEP: 4 kỹ năng → bậc 3–5",
            "x": 3996,
            "y": 640,
            "size": 40,
            "at": "l4:VSTEP"
          },
          {
            "id": "c-c1",
            "t": "text",
            "text": "Cambridge: mỗi kỳ một trình độ",
            "x": 4836,
            "y": 695,
            "size": 42,
            "at": "l5:Cambridge"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The famous TOEIC is usually Listening and Reading: two hundred questions in two hours.",
          "sub": "TOEIC hay được nhắc thường là bài Nghe–Đọc: 200 câu trong 2 giờ.",
          "keys": [
            "Nghe–Đọc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five to four ninety five per part, ten to nine ninety in total. Work and daily English.",
          "sub": "Mỗi phần 5 đến 495, tổng 10 đến 990. Theo ETS: tiếng Anh nơi làm việc và đời sống."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Speaking and writing? A separate test, each scored zero to two hundred.",
          "sub": "Nói và Viết? Là bài thi khác, mỗi bài thang 0 đến 200.",
          "keys": [
            "bài thi khác"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "VSTEP: four skills, a ten point average turned into level three, four or five.",
          "sub": "VSTEP: bốn kỹ năng, điểm trung bình thang 10 quy ra bậc 3, 4 hoặc 5."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Cambridge: one exam per level, like A two Key or B one Preliminary. Four skills too.",
          "sub": "Cambridge: mỗi kỳ thi một trình độ, như A2 Key, B1 Preliminary. Cũng đủ bốn kỹ năng."
        }
      ],
      "ref": "p2,p3"
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
            "text": "② Thứ Ba · Chữ “4 kỹ năng”",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Lan",
            "caption": "Thứ Ba 21:00 · góc học của Lan",
            "icon": "page-facing-up"
          },
          {
            "id": "d-h",
            "t": "text",
            "text": "TOEIC “4 kỹ năng”:",
            "x": 5964,
            "y": 160,
            "size": 52,
            "at": "l3:four skills",
            "color": "accent",
            "hl": [
              {
                "text": "4 kỹ năng",
                "at": "l3:four skills"
              }
            ]
          },
          {
            "id": "d-b0",
            "t": "box",
            "x": 5964,
            "y": 250,
            "w": 340,
            "h": 80,
            "at": "l4:Listening",
            "stroke": 4
          },
          {
            "id": "d-bt0",
            "t": "text",
            "text": "Nghe 275",
            "x": 5994,
            "y": 258,
            "size": 48,
            "at": "l4:Listening+200"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 6344,
            "y": 250,
            "w": 340,
            "h": 80,
            "at": "l4:reading",
            "stroke": 4
          },
          {
            "id": "d-bt1",
            "t": "text",
            "text": "Đọc 275",
            "x": 6374,
            "y": 258,
            "size": 48,
            "at": "l4:reading+200"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 5964,
            "y": 350,
            "w": 340,
            "h": 80,
            "at": "l4:speaking",
            "stroke": 4
          },
          {
            "id": "d-bt2",
            "t": "text",
            "text": "Nói 120",
            "x": 5994,
            "y": 358,
            "size": 48,
            "at": "l4:speaking+200"
          },
          {
            "id": "d-b3",
            "t": "box",
            "x": 6344,
            "y": 350,
            "w": 340,
            "h": 80,
            "at": "l4:writing",
            "stroke": 4
          },
          {
            "id": "d-bt3",
            "t": "text",
            "text": "Viết 120",
            "x": 6374,
            "y": 358,
            "size": 48,
            "at": "l4:writing+200"
          },
          {
            "id": "d-lr",
            "t": "text",
            "text": "Chỉ Nghe–Đọc → chưa khớp",
            "x": 5964,
            "y": 470,
            "size": 48,
            "at": "l5:still",
            "color": "coral",
            "hl": [
              {
                "text": "chưa khớp",
                "at": "l5:match"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Công văn 1257/BGDĐT-QLCL (19/3/2026) — bảng miễn thi Ngoại ngữ, tốt nghiệp THPT 2026",
            "x": 5964,
            "y": 735,
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
          "say": "Stop two, Tuesday night. Lan reads the exam exemption list like a menu.",
          "sub": "Chặng hai, tối thứ Ba. Lan đọc bảng miễn thi Ngoại ngữ như đọc thực đơn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "TOEIC is on the list. So any TOEIC score works, right?",
          "sub": "Có TOEIC trong danh sách. Vậy điểm TOEIC nào cũng được, đúng không?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Look closer. In the Ministry's guide, the TOEIC line says four skills.",
          "sub": "Nhìn kỹ đi. Trong hướng dẫn của Bộ, dòng TOEIC ghi “4 kỹ năng”.",
          "keys": [
            "4 kỹ năng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Listening two seventy five, reading two seventy five, speaking one twenty, writing one twenty.",
          "sub": "Nghe 275, Đọc 275, Nói 120, Viết 120."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A listening and reading report, however high, still doesn't match.",
          "sub": "Phiếu chỉ có Nghe và Đọc, tổng cao mấy, vẫn chưa khớp.",
          "keys": [
            "vẫn chưa khớp"
          ]
        }
      ],
      "ref": "p4"
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
          },
          {
            "at": "l2",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2:end",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-k",
            "t": "text",
            "text": "Đọc chữ “bốn kỹ năng” trước",
            "x": 5964,
            "y": 570,
            "size": 56,
            "at": "l1:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "bốn kỹ năng",
                "at": "l1:four skills"
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
          "say": "Takeaway: read the words four skills before you click register.",
          "sub": "Rút ra: đọc kỹ chữ “bốn kỹ năng” trước khi bấm đăng ký.",
          "keys": [
            "bốn kỹ năng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Four skills. Got it. I'm underlining it twice.",
          "sub": "Bốn kỹ năng. Em hiểu rồi. Gạch chân hai lần luôn.",
          "face": "happy"
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s08",
      "module": "BRK-04",
      "data": {
        "title": "“Chứng chỉ TOEIC”",
        "wrong": "Có điểm TOEIC là đủ mọi yêu cầu",
        "right": "Nhiều nơi ghi rõ số kỹ năng, mức từng kỹ năng",
        "wrongIllus": "red-question-mark",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Any TOEIC score fits every request?",
          "sub": "Có điểm TOEIC là đủ mọi yêu cầu “TOEIC”?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. Many name the skills, with a minimum each.",
          "sub": "Không. Nhiều nơi ghi rõ số kỹ năng, mức từng kỹ năng.",
          "keys": [
            "số kỹ năng"
          ]
        }
      ],
      "ref": "p4"
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
            "at": "a1",
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
            "text": "③ Thứ Tư · Hai cách của Thảo",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "thao"
                }
              ],
              "left": {
                "label": "Cách A: theo nhóm bạn",
                "ok": false
              },
              "right": {
                "label": "Cách B: đọc thông báo trước",
                "ok": true
              }
            },
            "at": "l1:versions",
            "caption": "Cùng một yêu cầu tốt nghiệp",
            "icon": "graduation-cap"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "A: thi theo nhóm, ôn mấy tháng",
            "x": 7932,
            "y": 170,
            "size": 44,
            "at": "a1:IELTS",
            "color": "coral"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "→ nhắm cao quá xa",
            "x": 7972,
            "y": 240,
            "size": 44,
            "at": "a2:high",
            "color": "muted"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "B: đọc thông báo trước",
            "x": 7932,
            "y": 320,
            "size": 48,
            "at": "b1:notice",
            "color": "accent"
          },
          {
            "id": "e-b2",
            "t": "text",
            "text": "→ kịp hạn, đúng mức",
            "x": 7972,
            "y": 395,
            "size": 44,
            "at": "b2:time",
            "hl": [
              {
                "text": "đúng mức",
                "at": "b2:level"
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
          "say": "Stop three, Wednesday. Thảo needs a certificate to graduate. Two versions.",
          "sub": "Chặng ba, thứ Tư. Thảo cần chứng chỉ để tốt nghiệp. Hai phiên bản."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "My whole group booked IELTS. I'll join them and study for months!",
          "sub": "Cả nhóm đăng ký IELTS rồi. Em theo luôn, ôn mấy tháng!",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "thao",
          "say": "Wait. The school takes a whole list, and I'm aiming way too high.",
          "sub": "Ơ, trường nhận cả danh sách, mà em nhắm cao hơn yêu cầu khá xa.",
          "phase": "a",
          "face": "surprised"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "School notice first. Photo of the list, the minimum levels, the deadline.",
          "sub": "Đọc thông báo của trường trước. Chụp danh sách, mức tối thiểu, hạn nộp.",
          "phase": "b",
          "face": "thinking"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "thao",
          "say": "Now compare test dates. This one is in time, at the level I need.",
          "sub": "Giờ so lịch thi. Kỳ này kịp hạn, ôn đúng mức cần.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Version A is the cow and barn: test first, read later.",
          "sub": "Cách A đúng kiểu “đo bò làm chuồng”: thi trước, đọc sau.",
          "keys": [
            "đo bò làm chuồng"
          ]
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
            "id": "e-p",
            "t": "text",
            "text": "Mỗi mục đích, một danh sách",
            "x": 7932,
            "y": 470,
            "size": 44,
            "at": "l1:purpose",
            "hl": [
              {
                "text": "một danh sách",
                "at": "l1:own list"
              }
            ]
          },
          {
            "id": "e-thpt",
            "t": "text",
            "text": "THPT: IELTS 4.0 · TOEFL iBT 45",
            "x": 7932,
            "y": 535,
            "size": 40,
            "at": "l2:IELTS"
          },
          {
            "id": "e-thpt2",
            "t": "text",
            "text": "B1 Preliminary · khung VN bậc 3",
            "x": 7932,
            "y": 595,
            "size": 40,
            "at": "l3:Preliminary"
          },
          {
            "id": "e-uni",
            "t": "text",
            "text": "ĐH, công ty: tự đặt",
            "x": 7932,
            "y": 655,
            "size": 40,
            "at": "l4:University",
            "color": "muted"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Hỏi nơi nhận trước, chọn sau",
            "x": 8772,
            "y": 690,
            "size": 46,
            "at": "l6:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Hỏi nơi nhận trước",
                "at": "l6:ask"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Công văn 1257/BGDĐT-QLCL ngày 19/3/2026",
            "x": 7932,
            "y": 735,
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
          "say": "Each purpose has its own list.",
          "sub": "Mỗi mục đích có một danh sách riêng.",
          "keys": [
            "một danh sách riêng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The twenty twenty six high school exam: IELTS from four point oh, TOEFL iBT from forty five,",
          "sub": "Tốt nghiệp THPT 2026: IELTS từ 4.0, TOEFL iBT từ 45,"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "B one Preliminary, or a framework certificate from level three, still valid on registration day.",
          "sub": "B1 Preliminary, hay chứng chỉ khung Việt Nam từ bậc 3, còn giá trị đến ngày làm thủ tục.",
          "keys": [
            "còn giá trị"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "University, jobs, study abroad? Each receiver sets its own list, changing yearly.",
          "sub": "Đại học, tuyển dụng, du học? Nơi nhận tự đặt danh sách, có thể đổi theo năm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So don't ask which is best. Ask which ones my receiver accepts, at what level.",
          "sub": "Vậy đừng hỏi “cái nào tốt nhất”, mà hỏi “nơi nhận chấp nhận cái nào, ở mức nào”.",
          "keys": [
            "nơi nhận chấp nhận cái nào"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: ask the receiver first, choose the certificate second.",
          "sub": "Rút ra: hỏi nơi nhận trước, chọn chứng chỉ sau.",
          "keys": [
            "hỏi nơi nhận trước"
          ]
        }
      ],
      "ref": "p6,p7,p9"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "“Bậc 3” và “B1” có phải là một?",
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
          "say": "One notice says level three, another says B one. Same thing?",
          "sub": "Chỗ ghi “bậc 3”, chỗ ghi “B1”. Có phải là một?",
          "keys": [
            "bậc 3"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
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
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm · Bậc 3 hay B1?",
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
              "set": "campus",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up",
                "ladder"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Stop four",
            "caption": "Thứ Năm · phòng đào tạo",
            "icon": "school"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Sơ cấp: bậc 1–2",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l5:six levels"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Trung cấp: bậc 3–4",
            "x": 60,
            "y": 1320,
            "size": 44,
            "at": "l5:six levels+400",
            "color": "accent"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Cao cấp: bậc 5–6",
            "x": 60,
            "y": 1380,
            "size": 44,
            "at": "l5:six levels+800"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "bậc 3 = B1 · bậc 4 = B2",
            "x": 60,
            "y": 1460,
            "size": 52,
            "at": "l5:level three",
            "color": "accent",
            "hl": [
              {
                "text": "bậc 3 = B1",
                "at": "l5:B one"
              }
            ]
          },
          {
            "id": "f-new",
            "t": "text",
            "text": "TT 33/2026: + Tiền bậc 1",
            "x": 60,
            "y": 1545,
            "size": 44,
            "at": "l6:pre",
            "hl": [
              {
                "text": "Tiền bậc 1",
                "at": "l6:pre"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: TT 01/2014/TT-BGDĐT; TT 33/2026/TT-BGDĐT (hiệu lực 31/5/2026)",
            "x": 60,
            "y": 1825,
            "size": 28,
            "at": "l5",
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
          "say": "Stop four, Thursday. One notice says level three, another says B one.",
          "sub": "Chặng bốn, thứ Năm. Thảo thấy chỗ ghi “bậc 3”, chỗ ghi “B1”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Cô Hoa, the training office. Short sentences, long experience.",
          "sub": "Đây là cô Hoa, phòng đào tạo của trường. Câu ngắn, kinh nghiệm dài.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Excuse me, is level three the same as B one?",
          "sub": "Cô ơi, bậc 3 với B1 là một ạ?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "They match. But always ask which document a level is based on.",
          "sub": "Khớp nhau. Nhưng luôn hỏi: bậc đó căn cứ văn bản nào.",
          "face": "neutral"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Circular one of twenty fourteen: six levels, three bands, matching CEFR. Level three is B one, four is B two.",
          "sub": "Thông tư 01/2014: sáu bậc, ba cấp, tương thích CEFR. Bậc 3 là B1, bậc 4 là B2.",
          "keys": [
            "Bậc 3 là B1"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Since May thirty first, twenty twenty six, Circular thirty three replaces it, adding pre level one.",
          "sub": "Từ 31/5/2026, Thông tư 33/2026 thay thế, bổ sung “Tiền bậc 1”.",
          "keys": [
            "Tiền bậc 1"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-vs",
            "t": "text",
            "text": "VSTEP: 4,0–5,5 → bậc 3",
            "x": 60,
            "y": 1635,
            "size": 44,
            "at": "l1:VSTEP",
            "hl": [
              {
                "text": "bậc 3",
                "at": "l1:level three"
              }
            ]
          },
          {
            "id": "f-vs2",
            "t": "text",
            "text": "6,0–8,0 → bậc 4",
            "x": 100,
            "y": 1700,
            "size": 44,
            "at": "l1:six"
          },
          {
            "id": "f-cb",
            "t": "text",
            "text": "B1 Preliminary: 140–159 → B1",
            "x": 60,
            "y": 1765,
            "size": 40,
            "at": "l2:one forty"
          },
          {
            "id": "f-it",
            "t": "text",
            "text": "IELTS, TOEIC: theo nơi nhận",
            "x": 900,
            "y": 1780,
            "size": 44,
            "at": "l3:receiver",
            "color": "accent",
            "hl": [
              {
                "text": "theo nơi nhận",
                "at": "l3:receiver"
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
          "say": "Each test has its own scale. VSTEP: four to five point five is level three, six to eight is level four.",
          "sub": "Mỗi chứng chỉ một thang. VSTEP: trung bình 4,0–5,5 là bậc 3; 6,0–8,0 là bậc 4.",
          "keys": [
            "4,0–5,5 là bậc 3"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "B one Preliminary: one forty to one fifty nine on the Cambridge scale gives B one.",
          "sub": "B1 Preliminary: đạt 140–159 thang Cambridge thì cấp chứng chỉ B1."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "IELTS and TOEIC print no Vietnamese level. Equivalence comes from the receiver's own document.",
          "sub": "IELTS, TOEIC không ghi bậc Việt Nam. Mức “tương đương” lấy theo văn bản của nơi nhận.",
          "keys": [
            "văn bản của nơi nhận"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not a table drifting online like a lost slipper.",
          "sub": "Không phải bảng trôi nổi trên mạng như chiếc dép lạc."
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
            "text": "⑤ Thứ Sáu · Chờ kết quả",
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "desktop-computer",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:Dũng",
            "caption": "Thứ Sáu · công ty Dũng",
            "icon": "office-building"
          },
          {
            "id": "g-i",
            "t": "text",
            "text": "IELTS: thi máy · ~2 ngày",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l3:computer",
            "hl": [
              {
                "text": "~2 ngày",
                "at": "l3:two days"
              }
            ]
          },
          {
            "id": "g-tc",
            "t": "text",
            "text": "TOEIC Nghe–Đọc: 7 ngày làm việc",
            "x": 2028,
            "y": 1340,
            "size": 42,
            "at": "l4:seven",
            "color": "coral",
            "hl": [
              {
                "text": "7 ngày làm việc",
                "at": "l4:seven working days"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: IDP IELTS Việt Nam; IIG Việt Nam (2026)",
            "x": 2028,
            "y": 1825,
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
          "say": "Stop five, Friday, at Dũng's office. Deadline: three weeks.",
          "sub": "Chặng năm, thứ Sáu, ở công ty Dũng. Hạn nộp: ba tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Paper or computer, who cares? Results come out the same day, surely.",
          "sub": "Thi giấy hay máy kệ đi. Chắc thi xong là có kết quả luôn.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Since late March twenty twenty five, every IELTS in Vietnam is on computer. Results in about two days.",
          "sub": "Từ sau 29/3/2025, mọi kỳ IELTS ở Việt Nam thi trên máy, kết quả khoảng 2 ngày.",
          "keys": [
            "khoảng 2 ngày"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "TOEIC Listening and Reading? IIG Vietnam says the report comes within seven working days.",
          "sub": "TOEIC Nghe–Đọc? IIG Việt Nam ghi phiếu điểm gửi trong 7 ngày làm việc.",
          "keys": [
            "7 ngày làm việc"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s15",
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
            "id": "g-cb",
            "t": "text",
            "text": "B1 Preliminary: số và giấy",
            "x": 2028,
            "y": 1420,
            "size": 44,
            "at": "l1:digital"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "A2 Key giấy: ngừng sau 12/2026",
            "x": 2028,
            "y": 1485,
            "size": 42,
            "at": "l1:paper",
            "color": "muted"
          },
          {
            "id": "g-fee",
            "t": "text",
            "text": "Lệ phí: xem trang chính thức",
            "x": 2028,
            "y": 1560,
            "size": 48,
            "at": "l3:official",
            "color": "accent",
            "hl": [
              {
                "text": "trang chính thức",
                "at": "l3:official page"
              }
            ]
          },
          {
            "id": "g-mxh",
            "t": "text",
            "text": "giá chép trên mạng",
            "x": 2068,
            "y": 1630,
            "size": 40,
            "at": "l3:copied",
            "color": "muted"
          },
          {
            "id": "g-mxhx",
            "t": "strike",
            "over": "g-mxh",
            "at": "l3:skip"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "B one Preliminary: digital or paper, same format. Paper A two Key ends after December twenty twenty six.",
          "sub": "B1 Preliminary: bản số, bản giấy cùng định dạng. A2 Key bản giấy ngừng sau tháng 12/2026."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fees? Each organiser sets them, and they change.",
          "sub": "Lệ phí? Mỗi đơn vị tự công bố, có thể đổi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So skip prices copied on social media. Check the official page when you register.",
          "sub": "Vậy đừng dựa vào con số chép trên mạng xã hội; xem trang chính thức đúng lúc đăng ký.",
          "keys": [
            "xem trang chính thức"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s16",
      "module": "BRK-03",
      "data": {
        "value": 7,
        "suffix": " ngày",
        "label": "làm việc chờ phiếu điểm TOEIC Nghe–Đọc",
        "illus": "hourglass-not-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Test day is not result day.",
          "sub": "Ngày thi chưa phải ngày có kết quả.",
          "keys": [
            "chưa phải ngày có kết quả"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Up to seven working days for a TOEIC report.",
          "sub": "Phiếu TOEIC cần tới 7 ngày làm việc."
        }
      ],
      "ref": "p12,p14"
    },
    {
      "id": "s17",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Sáu · Dũng chọn ngày",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Thi cuối tuần thứ ba cho thêm giờ ôn",
          "why": "Kết quả không có ngay: IELTS khoảng 2 ngày, phiếu TOEIC tới 7 ngày làm việc; cần bản giấy thì còn lâu hơn.",
          "rule": "Tính ngược từ hạn nộp"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Three weeks left. I'll test at the end of week three. Max study time!",
          "sub": "Ba tuần nữa hết hạn. Anh thi vào cuối tuần thứ ba. Ôn được tối đa!",
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
          "say": "Results don't come on test day. Paper copies take time too.",
          "sub": "Kết quả đâu có ngay trong ngày thi. Bản giấy còn phải tính thời gian nhận, nộp.",
          "keys": [
            "đâu có ngay"
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
          "say": "Deadline, minus results, minus paperwork. Week one or two, then.",
          "sub": "Hạn nộp, trừ ngày chờ kết quả, trừ giấy tờ. Vậy thi tuần một hoặc hai.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Count backward from the deadline.",
          "sub": "Đúng. Tính ngược từ hạn nộp.",
          "phase": "redo",
          "keys": [
            "Tính ngược từ hạn nộp"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p14,p15"
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
            "id": "g-dl",
            "t": "box",
            "x": 3348,
            "y": 1780,
            "w": 280,
            "h": 70,
            "at": "l2:deadline",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "g-dlt",
            "t": "text",
            "text": "Hạn nộp",
            "x": 3378,
            "y": 1786,
            "size": 44,
            "at": "l2:deadline+200",
            "color": "coral"
          },
          {
            "id": "g-ar",
            "t": "arrow",
            "from": [
              3328,
              1815
            ],
            "to": [
              3048,
              1815
            ],
            "at": "l2:backward",
            "color": "accent"
          },
          {
            "id": "g-dt",
            "t": "text",
            "text": "Ngày thi",
            "x": 2848,
            "y": 1786,
            "size": 44,
            "at": "l2:free"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Tính ngược, đừng tính xuôi",
            "x": 2028,
            "y": 1730,
            "size": 52,
            "at": "l2:backward",
            "color": "accent",
            "hl": [
              {
                "text": "Tính ngược",
                "at": "l2:backward"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: count backward from the deadline, not forward from your free day.",
          "sub": "Rút ra: tính ngược từ hạn nộp, đừng tính xuôi từ ngày rảnh.",
          "keys": [
            "tính ngược từ hạn nộp"
          ]
        }
      ],
      "ref": "p15"
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
            "text": "⑥ Thứ Bảy · Còn hạn đến đâu?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "scroll",
                "card-file-box"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:digs",
            "caption": "Thứ Bảy · ngăn tủ cũ",
            "icon": "scroll"
          },
          {
            "id": "h-cb",
            "t": "text",
            "text": "Cambridge: không hết hạn",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l3:expire"
          },
          {
            "id": "h-cb2",
            "t": "text",
            "text": "→ nơi nhận tự quyết bao lâu",
            "x": 4036,
            "y": 1330,
            "size": 42,
            "at": "l3:decides",
            "color": "coral",
            "hl": [
              {
                "text": "tự quyết",
                "at": "l3:decides"
              }
            ]
          },
          {
            "id": "h-ie",
            "t": "text",
            "text": "IELTS: công nhận 2 năm",
            "x": 3996,
            "y": 1410,
            "size": 48,
            "at": "l4:two years",
            "hl": [
              {
                "text": "2 năm",
                "at": "l4:two years"
              }
            ]
          },
          {
            "id": "h-tc",
            "t": "text",
            "text": "TOEIC: quá 2 năm không cấp lại",
            "x": 3996,
            "y": 1485,
            "size": 38,
            "at": "l5:reissue"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "“Còn hạn” theo mốc nơi nhận",
            "x": 3996,
            "y": 1580,
            "size": 52,
            "at": "l6:receiver",
            "color": "accent",
            "hl": [
              {
                "text": "mốc nơi nhận",
                "at": "l6:receiver's date"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: IDP IELTS Việt Nam; ETS (TOEIC); Cambridge English — FAQs",
            "x": 3996,
            "y": 1825,
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
          "say": "Stop six, Saturday. Dũng digs out an old Cambridge certificate.",
          "sub": "Chặng sáu, thứ Bảy. Dũng lục ra tờ chứng chỉ Cambridge cũ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Cambridge certificates never expire. Problem solved!",
          "sub": "Chứng chỉ Cambridge không hết hạn. Xong rồi!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "True, they don't expire. But each receiver decides how long it accepts results.",
          "sub": "Đúng, không hết hạn. Nhưng trường, nhà tuyển dụng tự quyết nhận kết quả trong bao lâu.",
          "keys": [
            "tự quyết"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "IELTS, says IDP: recognised two years from the test date, though some accept longer.",
          "sub": "Theo IDP, IELTS được công nhận 2 năm kể từ ngày thi, có nơi nhận lâu hơn.",
          "keys": [
            "2 năm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A TOEIC report shows its valid date; no reissue after two years.",
          "sub": "Phiếu TOEIC ghi ngày còn hiệu lực; quá 2 năm, ETS không cấp lại."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And valid means valid on the receiver's date, like the application day, not your test day.",
          "sub": "Và “còn hạn” tính tại mốc của nơi nhận, như ngày nộp hồ sơ, không phải ngày thi.",
          "keys": [
            "mốc của nơi nhận"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s20",
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
            "at": "l5",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Chủ nhật sáng · Bảng kiểm",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop seven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "clipboard",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Thảo",
            "caption": "Chủ nhật 9:00 · năm ô kiểm",
            "icon": "clipboard"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:Purpose",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1242,
            "size": 56,
            "at": "l2:Purpose+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Mục đích gì, nộp ai",
            "x": 6029,
            "y": 1252,
            "size": 42,
            "at": "l2:Purpose+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1340,
            "w": 44,
            "h": 44,
            "at": "l2:Accepted",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1322,
            "size": 56,
            "at": "l2:Accepted+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Nơi nhận nhận loại nào",
            "x": 6029,
            "y": 1332,
            "size": 42,
            "at": "l2:Accepted+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1420,
            "w": 44,
            "h": 44,
            "at": "l3:Minimum",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1402,
            "size": 56,
            "at": "l3:Minimum+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Mức tối thiểu, đủ 4 kỹ năng?",
            "x": 6029,
            "y": 1412,
            "size": 42,
            "at": "l3:Minimum+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1500,
            "w": 44,
            "h": 44,
            "at": "l4:Deadline",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1482,
            "size": 56,
            "at": "l4:Deadline+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Hạn nộp, còn hạn tới đâu",
            "x": 6029,
            "y": 1492,
            "size": 42,
            "at": "l4:Deadline+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1580,
            "w": 44,
            "h": 44,
            "at": "l4:Schedule",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1562,
            "size": 56,
            "at": "l4:Schedule+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Lịch, hình thức, lệ phí",
            "x": 6029,
            "y": 1572,
            "size": 42,
            "at": "l4:Schedule+200"
          },
          {
            "id": "i-msg",
            "t": "text",
            "text": "Không rõ? Nhắn hỏi thẳng",
            "x": 5964,
            "y": 1690,
            "size": 50,
            "at": "l6:message",
            "color": "accent",
            "hl": [
              {
                "text": "Nhắn hỏi thẳng",
                "at": "l6:message"
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
          "say": "Stop seven, Sunday morning. Thảo squeezes the week into five boxes.",
          "sub": "Chặng bảy, sáng Chủ nhật. Thảo gói cả tuần vào năm ô kiểm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Purpose and receiver. Accepted certificates.",
          "sub": "Mục đích gì, nộp cho ai. Nơi nhận chấp nhận chứng chỉ nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Minimum level, and whether all four skills are needed.",
          "sub": "Mức tối thiểu, có cần đủ bốn kỹ năng không."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Deadline and validity. Schedule, format and fee, on the official page.",
          "sub": "Hạn nộp, còn hạn đến đâu. Lịch thi, hình thức, lệ phí trên trang chính thức."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Which English certificates do you accept, what's the minimum, and valid until when?",
          "sub": "Cho em hỏi, phòng mình chấp nhận những chứng chỉ tiếng Anh nào, mức tối thiểu bao nhiêu, và cần còn hạn đến ngày nào ạ?",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Notice unclear? Send one short message like that.",
          "sub": "Thông báo chưa rõ? Nhắn hỏi thẳng một tin ngắn như thế.",
          "keys": [
            "Nhắn hỏi thẳng"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s21",
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
            "at": "l5",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tối Chủ nhật · Cùng bàn ăn",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "center",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "clipboard",
                "bowl-with-spoon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same",
            "caption": "Chủ nhật 19:00 · tuần sau",
            "icon": "bowl-with-spoon"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Đo trước, làm sau",
            "x": 7932,
            "y": 1260,
            "size": 64,
            "at": "l5:measured",
            "color": "accent",
            "hl": [
              {
                "text": "Đo trước",
                "at": "l5:measured first"
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
          "say": "Sunday evening again. Same table, same three notices.",
          "sub": "Lại tối Chủ nhật. Vẫn bàn ăn ấy, vẫn ba tờ thông báo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My test date counts back from the deadline. Results arrive in time.",
          "sub": "Ngày thi của anh tính ngược từ hạn nộp. Kết quả về kịp.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Four skills, each minimum. Underlined twice.",
          "sub": "Đủ bốn kỹ năng, mức từng kỹ năng. Em gạch chân hai lần rồi.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I read the school list first. Right level, right date.",
          "sub": "Em đọc danh sách của trường trước. Đúng mức, kịp hạn.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "No more cow and barn. This family measured first, then built.",
          "sub": "Hết cảnh “đo bò làm chuồng”. Nhà này đo trước, làm sau.",
          "keys": [
            "đo trước, làm sau"
          ]
        }
      ],
      "ref": "p9,p15"
    },
    {
      "id": "s22",
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
            "at": "l1:receiver",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:skills",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:backward",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "J",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 9512,
            "y": 690,
            "at": "l1:receiver"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6644,
            "y": 650,
            "at": "l2:skills"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1730,
            "at": "l2:backward"
          },
          {
            "id": "z-do",
            "t": "text",
            "text": "Làm ngay: hỏi nơi nhận",
            "x": 7932,
            "y": 1650,
            "size": 44,
            "at": "l3:Do it",
            "color": "accent",
            "hl": [
              {
                "text": "Làm ngay",
                "at": "l3:Do it"
              }
            ]
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo; quy định, lệ phí có thể đổi — kiểm lại trang chính thức, văn bản nơi nhận. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l3:end",
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
          "say": "So: no certificate is best for everyone. Ask the receiver: which, what level, valid until when.",
          "sub": "Tóm lại: không có chứng chỉ tốt nhất cho mọi người. Hỏi nơi nhận: loại nào, mức nào, hạn đến đâu.",
          "keys": [
            "Hỏi nơi nhận"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Count the skills, check the level's document, count backward from the deadline.",
          "sub": "Đếm đủ kỹ năng, hỏi bậc theo văn bản nào, tính ngược từ hạn nộp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Do it now: send that question to your receiver.",
          "sub": "Làm ngay: gửi câu hỏi mẫu cho nơi bạn cần nộp.",
          "keys": [
            "Làm ngay"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p20"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "Dung plans his test date at the end of the third week, why is that risky?",
        "options": [
          "Tests at the end of a week are always harder than other tests",
          "The company will not accept any result from a weekend test",
          "Results take days to arrive, so he may miss the company deadline"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "IELTS trên máy cần khoảng 2 ngày, phiếu điểm TOEIC cần tới 7 ngày làm việc. Thi sát hạn thì kết quả có thể về sau hạn nộp."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Dung plans his test date at the end of the third week, why is that risky?",
          "sub": "Dũng định thi vào cuối tuần thứ ba, vì sao như vậy là rủi ro?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Results take days to arrive, so he may miss the company deadline.",
          "sub": "Kết quả cần vài ngày mới có, nên có thể trễ hạn nộp của công ty."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[25]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Đã có bản đồ. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "You have the map. Forty questions below. Next: which tests cover all four skills.",
          "sub": "Bạn đã có bản đồ. Bốn mươi câu bên dưới. Bài sau: chứng chỉ nào thi đủ bốn kỹ năng.",
          "face": "wink"
        }
      ],
      "ref": "outro,p20"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi english-certificate-choosers, bài tổng) dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT TUẦN của nhà ba anh em (tối Chủ nhật ba tờ thông báo → ① thứ Hai bốn bài thi → ② thứ Ba chữ “4 kỹ năng” của Lan → ③ thứ Tư hai cách của Thảo → ④ thứ Năm bậc 3 hay B1, cô Hoa phòng đào tạo → ⑤ thứ Sáu kết quả, lệ phí + “Khoan đã!” Dũng chọn ngày thi → ⑥ thứ Bảy còn hạn → ⑦ sáng Chủ nhật bảng kiểm + tin nhắn → tối Chủ nhật cùng bàn ăn). HOOK-20: đáp án trước (intro in đậm). Nhân vật: Dũng (p14), Thảo (p8, p19), Lan (p4 — học sinh lớp 12), cô Hoa — w145/_series/english-certificate-choosers.md. Cảnh ngắt nhịp: BRK-08 (một tuần), BRK-04 (TOEIC nào cũng được?), BRK-07 (bậc 3 hay B1?), BRK-03 (7 ngày làm việc). Tục ngữ: “Đo bò làm chuồng”. Câu đố questions[25].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
