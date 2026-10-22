// certificate-level-mapping--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "certificate-level-mapping--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "english-certificate-choosers",
    "slug": "certificate-level-mapping",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Đối chiếu IELTS, TOEIC, VSTEP với bậc 3, bậc 4 thế nào cho đúng?",
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
            "id": "a-b1",
            "t": "text",
            "text": "“Tương đương B1”",
            "x": 60,
            "y": 90,
            "size": 96,
            "at": "l1:equivalent",
            "color": "accent",
            "hl": [
              {
                "text": "B1",
                "at": "l1:B one"
              }
            ]
          },
          {
            "id": "a-o1",
            "t": "box",
            "x": 60,
            "y": 300,
            "w": 380,
            "h": 150,
            "at": "l2:first",
            "stroke": 5
          },
          {
            "id": "a-o1t",
            "t": "text",
            "text": "Nơi 1: IELTS 4.0",
            "x": 85,
            "y": 345,
            "size": 46,
            "at": "l2:first+200"
          },
          {
            "id": "a-o2",
            "t": "box",
            "x": 470,
            "y": 300,
            "w": 380,
            "h": 150,
            "at": "l2:second",
            "stroke": 5
          },
          {
            "id": "a-o2t",
            "t": "text",
            "text": "Nơi 2: cao hơn",
            "x": 495,
            "y": 345,
            "size": 46,
            "at": "l2:second+200"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Nơi nào sai?",
            "x": 60,
            "y": 500,
            "size": 64,
            "at": "l3:wrong",
            "color": "coral"
          },
          {
            "id": "a-qx",
            "t": "strike",
            "over": "a-q",
            "at": "l4:Neither"
          },
          {
            "id": "a-ans",
            "t": "text",
            "text": "Không nơi nào sai",
            "x": 60,
            "y": 590,
            "size": 64,
            "at": "l4:Neither",
            "color": "accent",
            "hl": [
              {
                "text": "Không nơi nào",
                "at": "l4:Neither"
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
          "say": "You read two notices. Both say: English equivalent to B one.",
          "sub": "Bạn đọc hai thông báo. Cả hai cùng ghi: tiếng Anh tương đương B1.",
          "keys": [
            "tương đương B1"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The first accepts IELTS four point oh. The second wants a higher IELTS.",
          "sub": "Nơi thứ nhất nhận IELTS 4.0. Nơi thứ hai đòi IELTS cao hơn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So one of them is wrong. Which one? Take a guess.",
          "sub": "Vậy một nơi sai. Nơi nào? Bạn đoán thử.",
          "keys": [
            "Nơi nào"
          ],
          "wait": 1500
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Neither. Both are right. Why? Hold that thought until stop seven.",
          "sub": "Không nơi nào sai cả. Vì sao? Giữ câu hỏi đến chặng bảy.",
          "keys": [
            "Không nơi nào sai"
          ]
        }
      ],
      "ref": "p13"
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
            "at": "l2",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
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
              "set": "campus",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
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
            "at": "l1",
            "caption": "Thứ Hai 7:30 · phòng đào tạo",
            "icon": "school"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Ở bầu thì tròn…”",
            "x": 60,
            "y": 690,
            "size": 50,
            "at": "l3:gourd",
            "color": "accent",
            "hl": [
              {
                "text": "Ở bầu thì tròn",
                "at": "l3:gourd"
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
          "say": "Meet Thảo again, third year student, IELTS result in hand, first in the queue at seven thirty.",
          "sub": "Lại là Thảo, sinh viên năm ba, cầm kết quả IELTS, xếp hàng đầu tiên lúc bảy rưỡi.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "School needs level four. A website says my IELTS equals B two. Done!",
          "sub": "Trường cần bậc 4. Trang mạng bảo IELTS của em tương đương B2. Xong!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In a gourd, water turns round; in a tube, it turns long. Remember that.",
          "sub": "Ông bà dặn: “Ở bầu thì tròn, ở ống thì dài.” Nhớ câu này nhé.",
          "keys": [
            "Ở bầu thì tròn, ở ống thì dài"
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
      "ref": "intro,p10"
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
            "text": "Đối chiếu bậc thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:match",
            "hl": [
              {
                "text": "Đối chiếu",
                "at": "l1:match"
              }
            ]
          },
          {
            "id": "b-a",
            "t": "text",
            "text": "Bậc VN ↔ A1–C2: theo khung",
            "x": 2028,
            "y": 180,
            "size": 48,
            "at": "l2:framework"
          },
          {
            "id": "b-b",
            "t": "text",
            "text": "VSTEP, Cambridge: bảng của đơn vị thi",
            "x": 2028,
            "y": 260,
            "size": 44,
            "at": "l2:VSTEP"
          },
          {
            "id": "b-c",
            "t": "text",
            "text": "IELTS, TOEIC: văn bản nơi nhận",
            "x": 2028,
            "y": 340,
            "size": 48,
            "at": "l3:receiver",
            "color": "accent",
            "hl": [
              {
                "text": "văn bản nơi nhận",
                "at": "l3:document"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: bảng trôi nổi",
            "x": 2028,
            "y": 460,
            "size": 52,
            "at": "l4:floating",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:receiver"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: hỏi đúng câu",
            "x": 2028,
            "y": 550,
            "size": 58,
            "at": "l4:right question",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi đúng câu",
                "at": "l4:right question"
              }
            ]
          },
          {
            "id": "b-ill",
            "t": "illus",
            "name": "balance-scale",
            "x": 3268,
            "y": 220,
            "size": 240,
            "at": "l1:match"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you match IELTS, TOEIC and VSTEP with level three and level four?",
          "sub": "Vậy đối chiếu IELTS, TOEIC, VSTEP với bậc 3, bậc 4 thế nào cho đúng?",
          "keys": [
            "bậc 3, bậc 4"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Vietnam's levels match A one to C two by the framework. VSTEP and Cambridge publish their own tables.",
          "sub": "Bậc Việt Nam khớp A1–C2 theo khung. VSTEP và Cambridge có bảng do chính đơn vị thi công bố."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "IELTS and TOEIC? Equivalence comes from the receiver's document.",
          "sub": "Còn IELTS, TOEIC? Mức “tương đương” lấy theo văn bản của nơi nhận.",
          "keys": [
            "văn bản của nơi nhận"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So, not a floating table online. The right question to the receiver.",
          "sub": "Vậy không phải bảng trôi nổi trên mạng, mà là hỏi đúng câu với nơi nhận.",
          "keys": [
            "hỏi đúng câu"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Thứ Hai nộp hồ sơ",
        "points": [
          {
            "label": "8:00",
            "sub": "Khung 6 bậc",
            "illus": "ladder"
          },
          {
            "label": "9:30",
            "sub": "Khung mới 2026",
            "illus": "page-facing-up"
          },
          {
            "label": "11:30",
            "sub": "VSTEP, Cambridge",
            "illus": "straight-ruler"
          },
          {
            "label": "14:30",
            "sub": "Thảo nộp hồ sơ",
            "illus": "inbox-tray"
          },
          {
            "label": "20:00",
            "sub": "Bốn bước",
            "illus": "check-mark-button"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One Monday, two applications.",
          "sub": "Một ngày thứ Hai, hai bộ hồ sơ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Every level checked against a document.",
          "sub": "Mỗi bậc đều đối chiếu với văn bản.",
          "keys": [
            "đối chiếu với văn bản"
          ]
        }
      ],
      "ref": "intro"
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
            "text": "① 8:00 · Khung 6 bậc",
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
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "ladder",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Hoa",
            "caption": "8:00 · bàn cô Hoa",
            "icon": "ladder"
          },
          {
            "id": "c-r0",
            "t": "box",
            "x": 3996,
            "y": 400,
            "w": 780,
            "h": 90,
            "at": "l3:Elementary",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "c-ra0",
            "t": "text",
            "text": "Sơ cấp",
            "x": 4021,
            "y": 415,
            "size": 42,
            "at": "l3:Elementary+200"
          },
          {
            "id": "c-rb0",
            "t": "text",
            "text": "bậc 1–2 · A1, A2",
            "x": 4316,
            "y": 415,
            "size": 42,
            "at": "l3:Elementary+400"
          },
          {
            "id": "c-r1",
            "t": "box",
            "x": 3996,
            "y": 290,
            "w": 780,
            "h": 90,
            "at": "l3:intermediate",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "c-ra1",
            "t": "text",
            "text": "Trung cấp",
            "x": 4021,
            "y": 305,
            "size": 42,
            "at": "l3:intermediate+200",
            "color": "accent"
          },
          {
            "id": "c-rb1",
            "t": "text",
            "text": "bậc 3–4 · B1, B2",
            "x": 4316,
            "y": 305,
            "size": 42,
            "at": "l3:intermediate+400",
            "hl": [
              {
                "text": "B1, B2",
                "at": "l4:B two"
              }
            ]
          },
          {
            "id": "c-r2",
            "t": "box",
            "x": 3996,
            "y": 180,
            "w": 780,
            "h": 90,
            "at": "l3:advanced",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "c-ra2",
            "t": "text",
            "text": "Cao cấp",
            "x": 4021,
            "y": 195,
            "size": 42,
            "at": "l3:advanced+200"
          },
          {
            "id": "c-rb2",
            "t": "text",
            "text": "bậc 5–6 · C1, C2",
            "x": 4316,
            "y": 195,
            "size": 42,
            "at": "l3:advanced+400"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Bậc 3: ý chính, chủ đề quen",
            "x": 3996,
            "y": 520,
            "size": 44,
            "at": "l5:main points",
            "hl": [
              {
                "text": "ý chính",
                "at": "l5:main points"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Bậc 4: cả văn bản phức tạp",
            "x": 3996,
            "y": 600,
            "size": 44,
            "at": "l6:complex"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Thông tư 01/2014/TT-BGDĐT (hiệu lực 16/3/2014)",
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
          "say": "Stop one, eight a.m. Cô Hoa from the training office opens the window, and the rulebook.",
          "sub": "Chặng một, tám giờ. Cô Hoa phòng đào tạo mở cửa sổ, và mở cả văn bản.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Level four, dear. Do you know what that means on paper?",
          "sub": "Bậc 4 hả con. Biết trên giấy nó nghĩa là gì chưa?",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Circular one of twenty fourteen: six levels in three bands. Elementary, intermediate, advanced.",
          "sub": "Thông tư 01/2014: sáu bậc, ba cấp. Sơ cấp, trung cấp, cao cấp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Matched to Europe's CEFR: level one is A one, up to level six, C two. Level three is B one, level four is B two.",
          "sub": "Tương thích CEFR châu Âu: bậc 1 là A1, đến bậc 6 là C2. Bậc 3 là B1, bậc 4 là B2.",
          "keys": [
            "Bậc 3 là B1, bậc 4 là B2"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Level three can follow the main points of clear, standard speech on familiar topics, and write simple paragraphs.",
          "sub": "Bậc 3 hiểu ý chính của lời nói, bài viết chuẩn mực, rõ ràng về chủ đề quen thuộc; viết được đoạn văn đơn giản."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Level four handles complex texts, concrete or abstract, even technical talk in your own field.",
          "sub": "Bậc 4 hiểu ý chính văn bản phức tạp, cụ thể lẫn trừu tượng, kể cả thảo luận chuyên môn của mình."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p1,p2"
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
            "text": "② 9:30 · Khung mới 2026",
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
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
            "caption": "9:30 · hồ sơ dự tuyển của Dũng",
            "icon": "page-facing-up"
          },
          {
            "id": "d-33",
            "t": "text",
            "text": "TT 33/2026 · từ 31/5/2026",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l3:thirty three",
            "color": "accent",
            "hl": [
              {
                "text": "31/5/2026",
                "at": "l3:May"
              }
            ]
          },
          {
            "id": "d-rep",
            "t": "text",
            "text": "thay Thông tư 01/2014",
            "x": 5964,
            "y": 250,
            "size": 44,
            "at": "l3:replacing"
          },
          {
            "id": "d-pre",
            "t": "text",
            "text": "+ Tiền bậc 1 (tiền A1)",
            "x": 5964,
            "y": 325,
            "size": 46,
            "at": "l4:pre",
            "hl": [
              {
                "text": "Tiền bậc 1",
                "at": "l4:pre"
              }
            ]
          },
          {
            "id": "d-cefr",
            "t": "text",
            "text": "+ theo CEFR bản mới",
            "x": 5964,
            "y": 395,
            "size": 44,
            "at": "l4:edition"
          },
          {
            "id": "d-cjk",
            "t": "text",
            "text": "Trung, Nhật, Hàn: khung nước sở tại",
            "x": 5964,
            "y": 465,
            "size": 38,
            "at": "l5:Chinese",
            "color": "muted"
          },
          {
            "id": "d-ask",
            "t": "text",
            "text": "Giao thời → hỏi văn bản nào",
            "x": 5964,
            "y": 560,
            "size": 50,
            "at": "l6:transition",
            "color": "coral",
            "hl": [
              {
                "text": "hỏi văn bản nào",
                "at": "l6:which document"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Báo Đại biểu Nhân dân, VOH (16/4/2026); hướng dẫn thi tốt nghiệp THPT 2026",
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
          "say": "Stop two, nine thirty. Meet Dũng, Thảo's big brother, an office worker applying for a new post.",
          "sub": "Chặng hai, chín rưỡi. Đây là Dũng, anh trai Thảo, nhân viên văn phòng đang nộp hồ sơ dự tuyển.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l1b",
          "lang": "en",
          "who": "det",
          "say": "His form says: equivalent to level three, six level framework.",
          "sub": "Mẫu dự tuyển ghi: tương đương bậc 3, Khung 6 bậc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Six level framework? Didn't they change it this year?",
          "sub": "Khung 6 bậc á? Năm nay đổi khung rồi mà nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Yes. Papers on April sixteenth reported Circular thirty three, in force from May thirty first, replacing the twenty fourteen one.",
          "sub": "Đúng. Báo ngày 16/4/2026 đưa tin Thông tư 33/2026, hiệu lực từ 31/5/2026, thay Thông tư 01/2014."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It adds a pre level one, around pre A one, and follows the newer CEFR edition.",
          "sub": "Thêm mức “Tiền bậc 1”, tương ứng tiền A1, và cập nhật theo CEFR bản mới.",
          "keys": [
            "Tiền bậc 1"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Chinese, Japanese and Korean may use their home country frameworks.",
          "sub": "Tiếng Trung, Nhật, Hàn được dùng khung năng lực của nước sở tại."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Many papers before May still say six level framework. In the transition, ask which document the receiver applies.",
          "sub": "Nhiều văn bản trước 31/5 vẫn ghi “Khung 6 bậc”. Giai đoạn giao thời, hỏi nơi nhận đang áp dụng văn bản nào.",
          "keys": [
            "văn bản nào"
          ]
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
            "text": "③ 10:30 · Bậc 3 có dời không?",
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
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "mobile-phone",
                "ladder"
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
            "caption": "10:30 · Lan nhắn anh chị",
            "icon": "mobile-phone"
          },
          {
            "id": "e-l0",
            "t": "box",
            "x": 7932,
            "y": 600,
            "w": 380,
            "h": 75,
            "at": "l4:below",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "e-lt0",
            "t": "text",
            "text": "Tiền bậc 1",
            "x": 7957,
            "y": 610,
            "size": 40,
            "at": "l4:below+200",
            "color": "coral"
          },
          {
            "id": "e-l1",
            "t": "box",
            "x": 7932,
            "y": 505,
            "w": 380,
            "h": 75,
            "at": "l5:six",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "e-lt1",
            "t": "text",
            "text": "Bậc 1 · A1",
            "x": 7957,
            "y": 515,
            "size": 40,
            "at": "l5:six+350"
          },
          {
            "id": "e-l2",
            "t": "box",
            "x": 7932,
            "y": 410,
            "w": 380,
            "h": 75,
            "at": "l5:six",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "e-lt2",
            "t": "text",
            "text": "Bậc 2 · A2",
            "x": 7957,
            "y": 420,
            "size": 40,
            "at": "l5:six+500"
          },
          {
            "id": "e-l3",
            "t": "box",
            "x": 7932,
            "y": 315,
            "w": 380,
            "h": 75,
            "at": "l5:six",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "e-lt3",
            "t": "text",
            "text": "Bậc 3 · B1",
            "x": 7957,
            "y": 325,
            "size": 40,
            "at": "l5:six+650",
            "color": "accent"
          },
          {
            "id": "e-l4",
            "t": "box",
            "x": 7932,
            "y": 220,
            "w": 380,
            "h": 75,
            "at": "l5:six",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "e-lt4",
            "t": "text",
            "text": "Bậc 4 · B2",
            "x": 7957,
            "y": 230,
            "size": 40,
            "at": "l5:six+800"
          },
          {
            "id": "e-new",
            "t": "text",
            "text": "← thêm ở dưới",
            "x": 8342,
            "y": 608,
            "size": 42,
            "at": "l4:below+400",
            "color": "coral"
          },
          {
            "id": "e-b1",
            "t": "text",
            "text": "← vẫn là B1",
            "x": 8342,
            "y": 323,
            "size": 42,
            "at": "l6:still",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn là B1",
                "at": "l6:still"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Luật sư Việt Nam (02/12/2025) — giới thiệu dự thảo",
            "x": 7932,
            "y": 735,
            "size": 28,
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
          "say": "Stop three, ten thirty. Meet Lan, the youngest, in grade twelve, texting her siblings in panic.",
          "sub": "Chặng ba, mười rưỡi. Đây là Lan, em út, học lớp 12, nhắn tin cho anh chị trong hoảng hốt.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "A new level was added! So level three is lower now, or higher?",
          "sub": "Thêm một bậc rồi! Vậy bậc 3 giờ thấp hơn hay cao hơn ạ?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Neither, Lan. Breathe.",
          "sub": "Chẳng thấp, chẳng cao đâu Lan. Thở đều nào."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Per the draft as presented, the new stage sits below level one, for beginners like preschool and primary pupils.",
          "sub": "Theo nội dung giới thiệu khi lấy ý kiến dự thảo, mức mới nằm dưới bậc 1, cho người mới làm quen như trẻ mầm non, tiểu học.",
          "keys": [
            "dưới bậc 1"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The other six levels keep their A one to C two structure.",
          "sub": "Sáu bậc kia giữ cấu trúc tương ứng A1 đến C2."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "So level three still reads as B one. Check final details in the issued text.",
          "sub": "Vậy “bậc 3” vẫn nên hiểu là mốc B1; chi tiết cuối cùng kiểm trong văn bản đã ban hành.",
          "keys": [
            "vẫn nên hiểu là mốc B1"
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
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "Khung mới thêm một mức",
        "wrong": "Thêm bậc nên bậc 3 đã đổi",
        "right": "Thêm ở dưới, bậc 3 vẫn là B1",
        "wrongIllus": "red-question-mark",
        "rightIllus": "ladder"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A new level, so level three moved?",
          "sub": "Thêm bậc, vậy bậc 3 đã dời?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Added below, not moved in the middle.",
          "sub": "Thêm bậc ở dưới, không dời mốc ở giữa.",
          "keys": [
            "không dời mốc ở giữa"
          ]
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s08",
      "module": "BRK-07",
      "data": {
        "question": "VSTEP, Cambridge quy ra bậc thế nào?",
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
          "say": "How does a test score become a level?",
          "sub": "Điểm bài thi thành bậc bằng cách nào?",
          "keys": [
            "thành bậc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p7"
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
            "text": "④ 11:30 · Điểm ra bậc",
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "straight-ruler",
                "desktop-computer"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "11:30 · Dũng tra bảng",
            "icon": "straight-ruler"
          },
          {
            "id": "f-vh",
            "t": "text",
            "text": "VSTEP.3-5 (trung bình 4 kỹ năng):",
            "x": 60,
            "y": 1230,
            "size": 36,
            "at": "l1:VSTEP",
            "color": "accent"
          },
          {
            "id": "f-v0",
            "t": "box",
            "x": 60,
            "y": 1290,
            "w": 292,
            "h": 80,
            "at": "l2:below",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-va0",
            "t": "text",
            "text": "< 4,0",
            "x": 70,
            "y": 1305,
            "size": 32,
            "at": "l2:below+150"
          },
          {
            "id": "f-vb0",
            "t": "text",
            "text": "không xét",
            "x": 70,
            "y": 1385,
            "size": 34,
            "at": "l2:below+300",
            "color": "muted"
          },
          {
            "id": "f-v1",
            "t": "box",
            "x": 360,
            "y": 1290,
            "w": 162,
            "h": 80,
            "at": "l2:three",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "f-va1",
            "t": "text",
            "text": "4,0–5,5",
            "x": 370,
            "y": 1305,
            "size": 32,
            "at": "l2:three+150"
          },
          {
            "id": "f-vb1",
            "t": "text",
            "text": "bậc 3",
            "x": 370,
            "y": 1385,
            "size": 34,
            "at": "l2:three+300",
            "color": "accent"
          },
          {
            "id": "f-v2",
            "t": "box",
            "x": 530,
            "y": 1290,
            "w": 182,
            "h": 80,
            "at": "l2:four",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-va2",
            "t": "text",
            "text": "6,0–8,0",
            "x": 540,
            "y": 1305,
            "size": 32,
            "at": "l2:four+150"
          },
          {
            "id": "f-vb2",
            "t": "text",
            "text": "bậc 4",
            "x": 540,
            "y": 1385,
            "size": 34,
            "at": "l2:four+300",
            "color": "muted"
          },
          {
            "id": "f-v3",
            "t": "box",
            "x": 720,
            "y": 1290,
            "w": 112,
            "h": 80,
            "at": "l2:five",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-va3",
            "t": "text",
            "text": "8,5–10",
            "x": 730,
            "y": 1305,
            "size": 32,
            "at": "l2:five+150"
          },
          {
            "id": "f-vb3",
            "t": "text",
            "text": "bậc 5",
            "x": 730,
            "y": 1385,
            "size": 34,
            "at": "l2:five+300",
            "color": "muted"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Một bài thi → một trong ba bậc",
            "x": 60,
            "y": 1455,
            "size": 40,
            "at": "l3:one of three",
            "hl": [
              {
                "text": "ba bậc",
                "at": "l3:three levels"
              }
            ]
          },
          {
            "id": "f-ch",
            "t": "text",
            "text": "Cambridge English Scale:",
            "x": 60,
            "y": 1530,
            "size": 40,
            "at": "l4:Cambridge",
            "color": "accent"
          },
          {
            "id": "f-c1",
            "t": "text",
            "text": "B1 Prelim: 120–139 A2 · 140–159 B1",
            "x": 60,
            "y": 1590,
            "size": 36,
            "at": "l4:one forty"
          },
          {
            "id": "f-c2",
            "t": "text",
            "text": "160–170 → chứng chỉ B2",
            "x": 100,
            "y": 1645,
            "size": 36,
            "at": "l5:one sixty"
          },
          {
            "id": "f-c3",
            "t": "text",
            "text": "B2 First ~160–179 · C1 Advanced 180–190",
            "x": 60,
            "y": 1705,
            "size": 34,
            "at": "l6:First",
            "color": "muted"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: ĐHQGHN — định dạng VSTEP.3-5; Cambridge English — B1 Preliminary results",
            "x": 60,
            "y": 1825,
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
          "say": "Stop four, eleven thirty. Dũng looks up VSTEP, which publishes its table with the format.",
          "sub": "Chặng bốn, mười một rưỡi. Dũng tra VSTEP: bảng quy đổi công bố cùng định dạng đề."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four skill average below four: no level. Four to five point five: level three. Six to eight: level four. Eight point five to ten: level five.",
          "sub": "Trung bình bốn kỹ năng dưới 4,0: không xét bậc. 4,0–5,5: bậc 3. 6,0–8,0: bậc 4. 8,5–10: bậc 5.",
          "keys": [
            "4,0–5,5: bậc 3"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One test, one of three levels, depending on your score.",
          "sub": "Một bài thi có thể cho ra một trong ba bậc, tuỳ điểm bạn đạt.",
          "keys": [
            "một trong ba bậc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Cambridge uses the Cambridge English Scale. On B one Preliminary, one twenty to one thirty nine shows A two; one forty to one fifty nine gives B one.",
          "sub": "Cambridge dùng thang Cambridge English Scale. Với B1 Preliminary: 120–139 là trình độ A2; 140–159 cấp chứng chỉ B1."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One sixty to one seventy earns a certificate at B two.",
          "sub": "160–170 được cấp chứng chỉ ở trình độ B2.",
          "keys": [
            "trình độ B2"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "On the same scale, B two First sits around one sixty to one seventy nine, C one Advanced one eighty to one ninety.",
          "sub": "Trên cùng thang, B2 First khoảng 160–179, C1 Advanced 180–190."
        }
      ],
      "ref": "p7,p8"
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
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 13:30 · IELTS, TOEIC ra bậc mấy?",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up",
                "bowl-with-spoon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:lunch",
            "caption": "13:30 · quán cơm trưa",
            "icon": "bowl-with-spoon"
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Phiếu IELTS, TOEIC: không ghi bậc",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "l3:print"
          },
          {
            "id": "g-doc",
            "t": "text",
            "text": "→ văn bản nơi nhận quy định",
            "x": 2068,
            "y": 1330,
            "size": 44,
            "at": "l3:document",
            "color": "accent",
            "hl": [
              {
                "text": "văn bản nơi nhận",
                "at": "l3:document"
              }
            ]
          },
          {
            "id": "g-ex",
            "t": "text",
            "text": "Bảng miễn thi THPT 2026:",
            "x": 2028,
            "y": 1420,
            "size": 42,
            "at": "l4:high school"
          },
          {
            "id": "g-ex1",
            "t": "text",
            "text": "IELTS 4.0 · TOEIC 4 kỹ năng",
            "x": 2068,
            "y": 1485,
            "size": 40,
            "at": "l4:IELTS"
          },
          {
            "id": "g-ex2",
            "t": "text",
            "text": "cùng dòng khung VN từ bậc 3",
            "x": 2068,
            "y": 1545,
            "size": 38,
            "at": "l5:same table",
            "color": "muted"
          },
          {
            "id": "g-only",
            "t": "text",
            "text": "Chỉ để miễn thi, không phổ quát",
            "x": 2028,
            "y": 1630,
            "size": 46,
            "at": "l6:only",
            "color": "coral",
            "hl": [
              {
                "text": "Chỉ để miễn thi",
                "at": "l6:only"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Công văn 1257/BGDĐT-QLCL (19/3/2026)",
            "x": 2028,
            "y": 1825,
            "size": 28,
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
          "say": "Stop five, half past one. Lan meets Dũng for lunch, waving her exemption table.",
          "sub": "Chặng năm, một rưỡi chiều. Lan ăn trưa với Dũng, tay vẫy bảng miễn thi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "IELTS four point oh is level three here. So it's level three everywhere!",
          "sub": "Ở đây IELTS 4.0 cùng hàng bậc 3. Vậy ở đâu cũng bậc 3!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful. IELTS and TOEIC reports print no Vietnamese level. The receiver's document decides.",
          "sub": "Cẩn thận. Phiếu IELTS, TOEIC không ghi bậc Việt Nam. Văn bản của nơi nhận quyết định.",
          "keys": [
            "Văn bản của nơi nhận quyết định"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The twenty twenty six high school guide puts IELTS from four point oh and four skill TOEIC,",
          "sub": "Hướng dẫn thi tốt nghiệp THPT 2026 xếp IELTS từ 4.0 và TOEIC bốn kỹ năng,"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "with listening and reading two seventy five, speaking and writing one twenty, in the same table as level three certificates.",
          "sub": "với Nghe 275, Đọc 275, Nói 120, Viết 120, vào cùng bảng với chứng chỉ khung Việt Nam từ bậc 3."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "But that table is only for the exam exemption, not a general conversion table.",
          "sub": "Nhưng bảng ấy chỉ dùng cho miễn thi môn Ngoại ngữ, không phải bảng quy đổi chung.",
          "keys": [
            "chỉ dùng cho miễn thi"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "campus",
        "label": "Thảo nộp hồ sơ",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "hoa",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nộp theo bảng quy đổi trên mạng",
          "why": "Quy định của trường đặt mức IELTS cho bậc 4 khác với bảng trên mạng, nên hồ sơ bị trả lại.",
          "rule": "Bảng của nơi nhận mới là bảng tính điểm"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Here's my IELTS. A website says it equals B two, so level four.",
          "sub": "Kết quả IELTS của em ạ. Trang mạng ghi tương đương B2, tức bậc 4.",
          "face": "happy",
          "pose": "give",
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
          "say": "The school's own rule sets a different IELTS score for level four. Back comes the file.",
          "sub": "Quy định của trường đặt mức IELTS cho bậc 4 khác bảng ấy. Hồ sơ bị trả về.",
          "keys": [
            "Hồ sơ bị trả về"
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
          "say": "I found the school's decision. Here's the IELTS line, my score, and a photo of that line.",
          "sub": "Em tìm được quyết định của trường. Đây là dòng IELTS, điểm của em, kèm ảnh chụp đúng dòng đó.",
          "phase": "redo",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Now that's a proper file.",
          "sub": "Vậy mới là hồ sơ đầy đủ.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "text": "⑥ 14:30 · Bảng nào tính điểm?",
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
              "set": "campus",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "camera-with-flash"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Stop six",
            "caption": "14:30 · nộp lại, kèm ảnh chụp",
            "icon": "camera-with-flash"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "A: bảng mạng → bị trả",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l1:online",
            "color": "coral"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: quyết định của trường",
            "x": 3996,
            "y": 1340,
            "size": 48,
            "at": "l2:decision",
            "color": "accent"
          },
          {
            "id": "h-b2",
            "t": "text",
            "text": "dòng IELTS · so điểm · ảnh chụp",
            "x": 4036,
            "y": 1415,
            "size": 40,
            "at": "l2:line"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Bảng nơi nhận mới tính điểm",
            "x": 3996,
            "y": 1510,
            "size": 52,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Bảng nơi nhận",
                "at": "l3:receiver's table"
              }
            ]
          },
          {
            "id": "h-c",
            "t": "text",
            "text": "Bảng trung tâm: không ràng buộc",
            "x": 3996,
            "y": 1610,
            "size": 38,
            "at": "l4:centres"
          },
          {
            "id": "h-y",
            "t": "text",
            "text": "Mỗi nơi một mức, đổi theo năm",
            "x": 3996,
            "y": 1680,
            "size": 42,
            "at": "l4:yearly",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, two thirty. Version A trusted an online table and got bounced.",
          "sub": "Chặng sáu, hai rưỡi. Cách A tin bảng trên mạng, bị trả hồ sơ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Version B found the school's decision, read the IELTS line, compared, and attached a photo of the line.",
          "sub": "Cách B tìm quyết định chuẩn đầu ra của trường, đọc dòng IELTS, so điểm, nộp kèm ảnh chụp đúng dòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: the receiver's table is the one that counts.",
          "sub": "Rút ra: bảng của nơi nhận mới là bảng tính điểm.",
          "keys": [
            "bảng của nơi nhận"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Tables posted by centres or personal pages bind no one. Each school or agency sets its own level, yearly even.",
          "sub": "Bảng do trung tâm hay trang cá nhân đăng không ràng buộc nơi nhận. Mỗi nơi đặt mức riêng, có thể đổi theo năm."
        }
      ],
      "ref": "p10,p11,p12"
    },
    {
      "id": "s13",
      "module": "BRK-10",
      "data": {
        "quote": "Các tổ chức tự đặt yêu cầu riêng về kết quả IELTS họ chấp nhận",
        "mark": "tự đặt yêu cầu riêng",
        "by": "IDP IELTS (ý chính)",
        "illus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Even IDP notes it: organisations set their own requirements for the IELTS results they accept.",
          "sub": "Chính IDP cũng lưu ý: các tổ chức tự đặt yêu cầu riêng về kết quả IELTS họ chấp nhận.",
          "keys": [
            "tự đặt yêu cầu riêng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "IDP IELTS.",
          "sub": "IDP IELTS."
        }
      ],
      "ref": "p12"
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
          },
          {
            "at": "l2",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
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
            "text": "⑦ 17:00 · Hai nơi cùng B1",
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
                  "id": "lan",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-07",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:notices",
            "caption": "17:00 · hai tờ “tương đương B1”",
            "icon": "balance-scale"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Miễn thi THPT: IELTS 4.0",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l2:four point oh"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Trường, công ty: mức riêng",
            "x": 5964,
            "y": 1340,
            "size": 46,
            "at": "l2:own"
          },
          {
            "id": "i-ok",
            "t": "text",
            "text": "Không nơi nào sai",
            "x": 5964,
            "y": 1440,
            "size": 60,
            "at": "l3:Neither",
            "color": "accent",
            "hl": [
              {
                "text": "Không nơi nào sai",
                "at": "l3:Neither"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Ở bầu thì tròn,",
            "x": 5964,
            "y": 1530,
            "size": 46,
            "at": "l4:gourd",
            "color": "accent"
          },
          {
            "id": "i-ca2",
            "t": "text",
            "text": "ở ống thì dài”",
            "x": 6004,
            "y": 1590,
            "size": 46,
            "at": "l4:tube",
            "color": "accent",
            "hl": [
              {
                "text": "ở ống thì dài",
                "at": "l4:tube"
              }
            ]
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Cùng chữ B1, mỗi nơi một mức",
            "x": 5964,
            "y": 1670,
            "size": 50,
            "at": "l5:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "mỗi nơi một mức",
                "at": "l5:each place"
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
          "say": "Stop seven, five p.m. Remember our opening puzzle? Two notices, both B one.",
          "sub": "Chặng bảy, năm giờ chiều. Nhớ câu đố mở đầu không? Hai thông báo, cùng ghi B1."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IELTS four point oh belongs to the high school exemption table. A university or company may set its own level.",
          "sub": "Mức IELTS 4.0 là của bảng miễn thi THPT. Trường đại học hay công ty có quyền đặt mức riêng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Neither is wrong. Each rules for its own purpose. You need the document of the place you apply to.",
          "sub": "Không nơi nào sai. Mỗi nơi quy định trong phạm vi của mình. Thứ bạn cần là văn bản của đúng nơi mình nộp.",
          "keys": [
            "Không nơi nào sai"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In a gourd, water turns round; in a tube, it turns long.",
          "sub": "“Ở bầu thì tròn, ở ống thì dài.”",
          "keys": [
            "Ở bầu thì tròn, ở ống thì dài"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: same B one, each place its own score.",
          "sub": "Rút ra: cùng chữ B1, mỗi nơi một mức.",
          "keys": [
            "mỗi nơi một mức"
          ]
        }
      ],
      "ref": "p13,p14"
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
            "at": "l2",
            "fit": [
              "j-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2:end",
            "fit": "J",
            "ms": 600
          },
          {
            "at": "l6",
            "fit": [
              "j-v"
            ],
            "zoom": 1.3,
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
            "text": "20:00 · Bốn bước của Dũng",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:eight"
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
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:table",
            "caption": "20:00 · cả nhà cùng bàn",
            "icon": "clipboard"
          },
          {
            "id": "j-s0",
            "t": "text",
            "text": "① Văn bản: ngày, căn cứ",
            "x": 7932,
            "y": 1260,
            "size": 42,
            "at": "l2:One"
          },
          {
            "id": "j-s1",
            "t": "text",
            "text": "② Dòng chứng chỉ, mức",
            "x": 7932,
            "y": 1330,
            "size": 42,
            "at": "l3:Two"
          },
          {
            "id": "j-s2",
            "t": "text",
            "text": "③ Điểm tổng hay từng kỹ năng",
            "x": 7932,
            "y": 1400,
            "size": 42,
            "at": "l4:Three"
          },
          {
            "id": "j-s3",
            "t": "text",
            "text": "④ Còn hạn đến ngày nào",
            "x": 7932,
            "y": 1470,
            "size": 42,
            "at": "l4:Four"
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Văn bản, dòng, mức, hạn",
            "x": 7932,
            "y": 1560,
            "size": 52,
            "at": "l5:Document",
            "color": "accent",
            "hl": [
              {
                "text": "Văn bản, dòng, mức, hạn",
                "at": "l5:Document"
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
          "say": "Eight p.m. Back at the family table, like every chapter ends.",
          "sub": "Tám giờ tối. Lại bàn ăn của cả nhà, như mọi chương đều kết."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My form says equivalent to level three. One: get the document, its date and its basis.",
          "sub": "Mẫu của anh ghi tương đương bậc 3. Một: xin văn bản, xem ngày ban hành và căn cứ.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: find the line for the test he plans, and its minimum.",
          "sub": "Hai: tìm dòng ghi chứng chỉ định thi và mức tối thiểu đi kèm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: total score, or each skill? Four: valid until which date?",
          "sub": "Ba: dòng đó tính điểm tổng hay từng kỹ năng? Bốn: chứng chỉ cần còn hạn đến ngày nào?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Document, line, level, date. Four steps, then register.",
          "sub": "Văn bản, dòng, mức, hạn: đủ bốn bước mới đăng ký.",
          "keys": [
            "đủ bốn bước mới đăng ký"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "No document? Ask: which document is your level three based on, and what's the minimum for IELTS, TOEIC or VSTEP?",
          "sub": "Không thấy văn bản? Hỏi: yêu cầu bậc 3 căn cứ văn bản nào, IELTS, TOEIC hay VSTEP thì mức tối thiểu bao nhiêu ạ?",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "And keep the written reply with your file.",
          "sub": "Câu trả lời bằng chữ, lưu cùng hồ sơ.",
          "keys": [
            "lưu cùng hồ sơ"
          ]
        }
      ],
      "ref": "p15,p16,p17"
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
            "at": "l1:framework",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:VSTEP",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:receiver",
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "J",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 300,
            "at": "l1:framework"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1455,
            "at": "l2:VSTEP"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1510,
            "at": "l3:receiver"
          },
          {
            "id": "z-do",
            "t": "text",
            "text": "Làm ngay: chụp đúng dòng",
            "x": 7932,
            "y": 1670,
            "size": 46,
            "at": "l4:Do it",
            "color": "accent",
            "hl": [
              {
                "text": "Làm ngay",
                "at": "l4:Do it"
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
            "at": "l4:end",
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
          "say": "So: by the framework, level three is B one, level four is B two.",
          "sub": "Tóm lại: theo khung, bậc 3 là B1, bậc 4 là B2.",
          "keys": [
            "bậc 3 là B1"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "VSTEP and Cambridge publish their own tables.",
          "sub": "VSTEP, Cambridge có bảng quy ra trình độ của chính đơn vị thi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For IELTS and TOEIC, the receiver's document decides, never a floating table.",
          "sub": "IELTS, TOEIC: văn bản nơi nhận quyết định, không phải bảng trôi nổi.",
          "keys": [
            "văn bản nơi nhận quyết định"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Do it now: find your receiver's document and photograph the line for your test.",
          "sub": "Làm ngay: tìm văn bản của nơi bạn nộp, chụp lại đúng dòng có chứng chỉ bạn định thi.",
          "keys": [
            "Làm ngay"
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
        "q": "Thao's school requires level four, how should she check her IELTS result?",
        "options": [
          "Search for any online table and send the result straight away",
          "Ask her classmates what score they think is close enough",
          "Find the school's own decision, read the IELTS line and compare her score"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "straight-ruler",
        "why": "Ở cách B, Thảo tìm quyết định chuẩn đầu ra của trường và so đúng dòng IELTS. Cô nộp kèm bản chụp dòng quy định."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Thao's school requires level four, how should she check her IELTS result?",
          "sub": "Trường của Thảo yêu cầu bậc 4, cô nên kiểm kết quả IELTS thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Find the school's own decision, read the IELTS line and compare her score.",
          "sub": "Tìm quyết định của trường, đọc dòng IELTS rồi so điểm."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[18]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Đã biết bảng nào tính điểm. Còn bốn mươi câu",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now you know which table counts. Forty questions below. Next: fees, paper or computer, and result times.",
          "sub": "Giờ bạn biết bảng nào tính điểm. Bốn mươi câu bên dưới. Bài sau: lệ phí, thi giấy hay máy, bao lâu có kết quả.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi english-certificate-choosers, bài 2) dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT NGÀY THỨ HAI ĐI NỘP HỒ SƠ (7:30 Thảo xếp hàng phòng đào tạo → ① 8:00 khung 6 bậc, cô Hoa → ② 9:30 khung mới 2026, Dũng → ③ 10:30 Tiền bậc 1, Lan → ④ 11:30 VSTEP, Cambridge quy ra bậc → ⑤ 13:30 IELTS, TOEIC theo nơi nhận → ⑥ 14:30 Thảo nộp hồ sơ + “Khoan đã!” → ⑦ 17:00 hai nơi cùng B1 → 20:00 Dũng bốn bước, cả nhà cùng bàn). HOOK-21: “Hai nơi cùng ghi B1, nơi nào sai?” (p13), giải ở chặng ⑦. Nhân vật: Thảo (p10), cô Hoa, Dũng (p15), Lan (p5, p9) — w145/_series/english-certificate-choosers.md. Cảnh ngắt nhịp: BRK-08 (một ngày), BRK-04 (Tiền bậc 1 không dời mốc), BRK-07 (điểm ra bậc?), BRK-10 (IDP: tổ chức tự đặt yêu cầu — diễn ý). Tục ngữ: “Ở bầu thì tròn, ở ống thì dài”. Câu đố questions[18].",
  "loop": {
    "open": "s01",
    "close": "s15"
  }
};
