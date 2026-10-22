// certificate-skills-tested--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "certificate-skills-tested--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "english-certificate-choosers",
    "slug": "certificate-skills-tested",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Chứng chỉ nào thi đủ bốn kỹ năng, chứng chỉ nào chỉ thi Nghe–Đọc?",
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
            "fit": [
              "a-card"
            ],
            "move": "cut",
            "zoom": 1.25
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
            "y": 110,
            "w": 640,
            "h": 330,
            "at": 0,
            "stroke": 6
          },
          {
            "id": "a-h",
            "t": "text",
            "text": "PHIẾU ĐIỂM TOEIC",
            "x": 100,
            "y": 130,
            "size": 52,
            "at": 200
          },
          {
            "id": "a-n",
            "t": "text",
            "text": "Nghe ✓",
            "x": 100,
            "y": 230,
            "size": 60,
            "at": "l1:listening",
            "color": "accent"
          },
          {
            "id": "a-d",
            "t": "text",
            "text": "Đọc ✓",
            "x": 400,
            "y": 230,
            "size": 60,
            "at": "l1:reading",
            "color": "accent"
          },
          {
            "id": "a-s",
            "t": "text",
            "text": "Nói ?   Viết ?",
            "x": 100,
            "y": 340,
            "size": 56,
            "at": "l3:four",
            "color": "coral"
          },
          {
            "id": "a-tb",
            "t": "text",
            "text": "Thông báo: “bốn kỹ năng”",
            "x": 60,
            "y": 500,
            "size": 56,
            "at": "l2:four skills",
            "hl": [
              {
                "text": "bốn kỹ năng",
                "at": "l2:four skills"
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
          "say": "One score report. Two columns: listening, reading. A lovely total.",
          "sub": "Một tờ phiếu điểm. Hai cột: Nghe, Đọc. Tổng điểm rất đẹp.",
          "keys": [
            "Hai cột"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Beside it, a notice: English certificate, four skills.",
          "sub": "Bên cạnh là tờ thông báo: chứng chỉ tiếng Anh bốn kỹ năng.",
          "keys": [
            "bốn kỹ năng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two columns, four skills. Can you hand it in?",
          "sub": "Hai cột, bốn kỹ năng. Nộp được không?",
          "keys": [
            "Nộp được không"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "hot-beverage"
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
            "at": "l1",
            "caption": "Thứ Bảy 8:00 · nhà ba anh em",
            "icon": "page-facing-up"
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "Tổng điểm ≠ danh sách kỹ năng",
            "x": 60,
            "y": 630,
            "size": 48,
            "at": "l3:total",
            "color": "accent",
            "hl": [
              {
                "text": "danh sách kỹ năng",
                "at": "l3:list"
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
          "say": "The report belongs to Dũng, the eldest of three, office worker, champion of doing it right now.",
          "sub": "Tờ phiếu là của Dũng, anh cả trong nhà, nhân viên văn phòng, vô địch môn “làm luôn”.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Company wants TOEIC, four skills. My total looks great. That's enough, right?",
          "sub": "Công ty đòi TOEIC bốn kỹ năng. Tổng điểm anh đẹp thế này. Đủ rồi nhỉ?",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A great total, sure. But a total is not a list of skills.",
          "sub": "Tổng đẹp thật. Nhưng tổng điểm đâu phải danh sách kỹ năng.",
          "keys": [
            "danh sách kỹ năng"
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
      "ref": "intro,p1"
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
            "text": "Bài nào đủ 4 kỹ năng?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:all four",
            "hl": [
              {
                "text": "đủ 4 kỹ năng",
                "at": "l1:all four"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "IELTS · VSTEP · Cambridge: một kỳ",
            "x": 2028,
            "y": 180,
            "size": 48,
            "at": "l2:IELTS",
            "color": "accent"
          },
          {
            "id": "b-1b",
            "t": "text",
            "text": "Nghe, Đọc, Viết, Nói",
            "x": 2068,
            "y": 255,
            "size": 44,
            "at": "l2:one sitting"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "TOEIC: hai bài riêng",
            "x": 2028,
            "y": 345,
            "size": 52,
            "at": "l3:splits",
            "color": "coral",
            "hl": [
              {
                "text": "hai bài riêng",
                "at": "l3:two tests"
              }
            ]
          },
          {
            "id": "b-ill",
            "t": "illus",
            "name": "page-facing-up",
            "x": 3218,
            "y": 170,
            "size": 170,
            "at": "l3:two"
          },
          {
            "id": "b-ill2",
            "t": "illus",
            "name": "page-facing-up",
            "x": 3418,
            "y": 210,
            "size": 170,
            "at": "l3:two+300"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: nhìn tên",
            "x": 2028,
            "y": 460,
            "size": 52,
            "at": "l4:name",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:Counting"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đếm kỹ năng",
            "x": 2028,
            "y": 550,
            "size": 60,
            "at": "l4:Counting",
            "color": "accent",
            "hl": [
              {
                "text": "đếm kỹ năng",
                "at": "l4:skills"
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
          "say": "So which certificates test all four skills, and which test only listening and reading?",
          "sub": "Vậy chứng chỉ nào thi đủ bốn kỹ năng, chứng chỉ nào chỉ thi Nghe–Đọc?",
          "keys": [
            "đủ bốn kỹ năng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IELTS, VSTEP, and Cambridge exams like A two Key or B one Preliminary test all four in one sitting.",
          "sub": "IELTS, VSTEP và các kỳ Cambridge như A2 Key, B1 Preliminary thi đủ bốn kỹ năng trong một kỳ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "TOEIC splits into two tests. Four skills means two results.",
          "sub": "TOEIC tách làm hai bài riêng. Muốn đủ bốn kỹ năng, phải có kết quả cả hai.",
          "keys": [
            "hai bài riêng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So, not reading the name on the paper. Counting the skills on it.",
          "sub": "Vậy không phải nhìn tên chứng chỉ, mà là đếm kỹ năng trên đó.",
          "keys": [
            "đếm kỹ năng"
          ]
        }
      ],
      "ref": "intro,p18"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Một ngày thứ Bảy",
        "points": [
          {
            "label": "8:00",
            "sub": "Phiếu hai cột",
            "illus": "page-facing-up"
          },
          {
            "label": "9:30",
            "sub": "IELTS",
            "illus": "stopwatch"
          },
          {
            "label": "13:00",
            "sub": "Kiềng ba chân",
            "illus": "pot-of-food"
          },
          {
            "label": "14:00",
            "sub": "TOEIC hai bài",
            "illus": "card-index-dividers"
          },
          {
            "label": "19:00",
            "sub": "Thảo gạch chân",
            "illus": "pencil"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One Saturday, one dining table.",
          "sub": "Một ngày thứ Bảy, một bàn ăn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Count every skill, one test at a time.",
          "sub": "Đếm từng kỹ năng, từng bài thi một.",
          "keys": [
            "Đếm từng kỹ năng"
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
            "at": "l3",
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
            "text": "① 8:30 · Vì sao đếm kỹ năng?",
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
                  "id": "dung",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Breakfast",
            "caption": "8:30 · bàn ăn sáng",
            "icon": "pencil"
          },
          {
            "id": "c-h",
            "t": "text",
            "text": "Nơi nhận hay ghi kèm:",
            "x": 3996,
            "y": 160,
            "size": 48,
            "at": "l4:conditions",
            "hl": [
              {
                "text": "ghi kèm",
                "at": "l4:conditions"
              }
            ]
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 245,
            "w": 44,
            "h": 44,
            "at": "l4:four",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 227,
            "size": 56,
            "at": "l4:four+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "đủ 4 kỹ năng",
            "x": 4061,
            "y": 237,
            "size": 44,
            "at": "l4:four+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 315,
            "w": 44,
            "h": 44,
            "at": "l4:minimum",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 297,
            "size": 56,
            "at": "l4:minimum+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "mức từng kỹ năng",
            "x": 4061,
            "y": 307,
            "size": 44,
            "at": "l4:minimum+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 385,
            "w": 44,
            "h": 44,
            "at": "l4:total",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 367,
            "size": 56,
            "at": "l4:total+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "hoặc một điểm tổng",
            "x": 4061,
            "y": 377,
            "size": 44,
            "at": "l4:total+200"
          },
          {
            "id": "c-sk",
            "t": "text",
            "text": "Đọc lướt → thi thiếu",
            "x": 3996,
            "y": 470,
            "size": 50,
            "at": "l5:Skim",
            "color": "coral",
            "hl": [
              {
                "text": "thi thiếu",
                "at": "l5:short"
              }
            ]
          },
          {
            "id": "c-st",
            "t": "text",
            "text": "Trắc nghiệm ≠ Viết, Nói",
            "x": 3996,
            "y": 570,
            "size": 48,
            "at": "l6:multiple choice"
          },
          {
            "id": "c-st2",
            "t": "text",
            "text": "→ chia giờ ôn khác nhau",
            "x": 4036,
            "y": 640,
            "size": 42,
            "at": "l6:prep",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, eight thirty. Breakfast.",
          "sub": "Chặng một, tám rưỡi. Bữa sáng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, Dũng's sister, a third year student with more highlighters than socks.",
          "sub": "Đây là Thảo, em gái Dũng, sinh viên năm ba, có nhiều bút dạ hơn tất.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Two reports can both say TOEIC, and still test different skills.",
          "sub": "Hai phiếu cùng tên TOEIC mà số kỹ năng vẫn khác hẳn đấy anh.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Right. Receivers add conditions: all four skills, a minimum per skill, or one total.",
          "sub": "Đúng. Nơi nhận hay ghi kèm điều kiện: đủ bốn kỹ năng, mức từng kỹ năng, hoặc một điểm tổng.",
          "keys": [
            "ghi kèm điều kiện"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Skim it, and you may test one skill short.",
          "sub": "Đọc lướt là dễ thi thiếu.",
          "keys": [
            "thi thiếu"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "It shapes your study too: multiple choice listening and reading needs different prep from live writing and speaking.",
          "sub": "Số kỹ năng còn quyết cách ôn: trắc nghiệm Nghe–Đọc khác hẳn Viết, Nói trực tiếp."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
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
            "at": "l4",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 9:30 · IELTS thi gì?",
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
                "stopwatch"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Thảo",
            "caption": "9:30 · trang IELTS",
            "icon": "laptop"
          },
          {
            "id": "d-b0",
            "t": "box",
            "x": 5964,
            "y": 170,
            "w": 160,
            "h": 90,
            "at": "l2:Listening",
            "stroke": 4
          },
          {
            "id": "d-t0",
            "t": "text",
            "text": "Nghe 30'",
            "x": 5978,
            "y": 190,
            "size": 40,
            "at": "l2:Listening+200"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 6134,
            "y": 170,
            "w": 200,
            "h": 90,
            "at": "l2:reading",
            "stroke": 4
          },
          {
            "id": "d-t1",
            "t": "text",
            "text": "Đọc 60'",
            "x": 6148,
            "y": 190,
            "size": 40,
            "at": "l2:reading+200"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 6344,
            "y": 170,
            "w": 200,
            "h": 90,
            "at": "l2:writing",
            "stroke": 4
          },
          {
            "id": "d-t2",
            "t": "text",
            "text": "Viết 60'",
            "x": 6358,
            "y": 190,
            "size": 40,
            "at": "l2:writing+200"
          },
          {
            "id": "d-b3",
            "t": "box",
            "x": 6554,
            "y": 170,
            "w": 170,
            "h": 90,
            "at": "l2:speaking",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "d-t3",
            "t": "text",
            "text": "Nói",
            "x": 6568,
            "y": 190,
            "size": 40,
            "at": "l2:speaking+200",
            "color": "accent"
          },
          {
            "id": "d-tot",
            "t": "text",
            "text": "≈ 2 giờ 45 phút",
            "x": 5964,
            "y": 290,
            "size": 54,
            "at": "l2:two hours",
            "hl": [
              {
                "text": "2 giờ 45 phút",
                "at": "l2:forty five"
              }
            ]
          },
          {
            "id": "d-n",
            "t": "text",
            "text": "Nghe: 4 đoạn, 40 câu",
            "x": 5964,
            "y": 380,
            "size": 44,
            "at": "l3:forty"
          },
          {
            "id": "d-s",
            "t": "text",
            "text": "Nói: giới thiệu, độc thoại, thảo luận",
            "x": 5964,
            "y": 445,
            "size": 38,
            "at": "l3:introduction"
          },
          {
            "id": "d-ag",
            "t": "text",
            "text": "Academic ↔ General: khác Đọc, Viết",
            "x": 5964,
            "y": 530,
            "size": 42,
            "at": "l5:Same",
            "color": "accent",
            "hl": [
              {
                "text": "khác Đọc, Viết",
                "at": "l5:Academic"
              }
            ]
          },
          {
            "id": "d-w",
            "t": "text",
            "text": "Viết: luận + báo cáo / thư",
            "x": 5964,
            "y": 600,
            "size": 42,
            "at": "l6:essay"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: British Council — IELTS test format",
            "x": 5964,
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
          "say": "Stop two, nine thirty. Thảo opens the British Council page on IELTS.",
          "sub": "Chặng hai, chín rưỡi. Thảo mở trang IELTS của British Council."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Listening thirty minutes, reading sixty, writing sixty, speaking eleven to fourteen. About two hours forty five.",
          "sub": "Nghe 30 phút, Đọc 60, Viết 60, Nói 11–14 phút. Tổng khoảng 2 giờ 45 phút.",
          "keys": [
            "2 giờ 45 phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Listening: four sections, forty questions. Speaking: an introduction, a solo talk, then a discussion.",
          "sub": "Nghe bốn đoạn, 40 câu. Nói gồm giới thiệu, một lượt nói một mình, rồi thảo luận."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And Academic versus General Training?",
          "sub": "Còn Academic với General Training thì sao nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Same listening and speaking. Academic reads three academic texts; General Training, short everyday ones.",
          "sub": "Giống Nghe và Nói. Đọc: Academic ba bài học thuật; General Training văn bản ngắn đời thường.",
          "keys": [
            "Giống Nghe và Nói"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Writing: both have a formal essay; the other task is an academic report, or a letter.",
          "sub": "Viết: cả hai có một bài luận trang trọng; bài kia là báo cáo kiểu học thuật, hoặc một lá thư."
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
          }
        ],
        "items": [
          {
            "id": "d-day",
            "t": "text",
            "text": "Nghe, Đọc, Viết: liền một buổi",
            "x": 5964,
            "y": 665,
            "size": 40,
            "at": "l1:back to back",
            "color": "muted"
          },
          {
            "id": "d-7",
            "t": "text",
            "text": "Nói: cùng ngày hoặc ±7 ngày",
            "x": 6804,
            "y": 690,
            "size": 44,
            "at": "l2:seven",
            "color": "accent",
            "hl": [
              {
                "text": "±7 ngày",
                "at": "l2:seven days"
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
          "say": "Listening, reading and writing run back to back, no breaks.",
          "sub": "Nghe, Đọc, Viết thi liền một buổi, không nghỉ giữa các phần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Speaking may be the same day, or within seven days before or after, depending on the centre.",
          "sub": "Nói có thể cùng ngày, hoặc trong vòng 7 ngày trước hay sau, tuỳ trung tâm.",
          "keys": [
            "7 ngày"
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
            "text": "③ 11:00 · VSTEP và B1 Preliminary",
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
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "worried"
                }
              ],
              "props": [
                "page-facing-up",
                "speaking-head"
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
            "caption": "11:00 · tờ rơi VSTEP",
            "icon": "page-facing-up"
          },
          {
            "id": "e-vh",
            "t": "text",
            "text": "VSTEP.3-5:",
            "x": 7932,
            "y": 160,
            "size": 50,
            "at": "l3:format",
            "color": "accent"
          },
          {
            "id": "e-v1",
            "t": "text",
            "text": "Nghe ~40': 3 phần, 35 câu",
            "x": 7932,
            "y": 235,
            "size": 42,
            "at": "l3:forty"
          },
          {
            "id": "e-v2",
            "t": "text",
            "text": "Đọc 60': 4 bài, 40 câu",
            "x": 7932,
            "y": 300,
            "size": 42,
            "at": "l4:Reading"
          },
          {
            "id": "e-v3",
            "t": "text",
            "text": "Viết 60': thư ~120 từ, luận ~250",
            "x": 7932,
            "y": 365,
            "size": 40,
            "at": "l4:letter"
          },
          {
            "id": "e-v4",
            "t": "text",
            "text": "Nói 12': 3 phần",
            "x": 7932,
            "y": 430,
            "size": 42,
            "at": "l5:Speaking"
          },
          {
            "id": "e-vb",
            "t": "text",
            "text": "→ trung bình quy ra bậc",
            "x": 7972,
            "y": 495,
            "size": 42,
            "at": "l5:average",
            "hl": [
              {
                "text": "quy ra bậc",
                "at": "l5:level"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: ĐHQGHN — định dạng đề VSTEP.3-5; Cambridge English — B1 Preliminary format",
            "x": 7932,
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
          "say": "Stop three, eleven a.m. Meet Lan, the youngest, in grade twelve, holding a VSTEP flyer.",
          "sub": "Chặng ba, mười một giờ. Đây là Lan, em út, học lớp 12, cầm tờ rơi VSTEP.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "VSTEP has speaking too? I was hoping it didn't.",
          "sub": "VSTEP cũng thi Nói ạ? Em cứ mong là không.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sorry, Lan. The VNU format: listening about forty minutes, three parts, thirty five questions.",
          "sub": "Tiếc quá. Định dạng của ĐHQGHN: Nghe khoảng 40 phút, ba phần, 35 câu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Reading sixty minutes, four texts, forty questions. Writing sixty: a letter of about one twenty words, an essay of about two fifty.",
          "sub": "Đọc 60 phút, bốn bài, 40 câu. Viết 60 phút: thư khoảng 120 từ, bài luận khoảng 250 từ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Speaking twelve minutes, three parts. The four skill average becomes a level.",
          "sub": "Nói 12 phút, ba phần. Điểm trung bình bốn kỹ năng quy ra bậc.",
          "keys": [
            "quy ra bậc"
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
      "ref": "p6"
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
            "id": "e-ph",
            "t": "text",
            "text": "B1 Preliminary: 4 bài × 25%",
            "x": 7932,
            "y": 580,
            "size": 46,
            "at": "l1:four papers",
            "color": "accent",
            "hl": [
              {
                "text": "4 bài × 25%",
                "at": "l2:twenty five"
              }
            ]
          },
          {
            "id": "e-p1",
            "t": "text",
            "text": "Đọc 45' · Viết 45' · Nghe 30'",
            "x": 7932,
            "y": 650,
            "size": 40,
            "at": "l1:Reading"
          },
          {
            "id": "e-p2",
            "t": "text",
            "text": "Nói: theo cặp, 2 giám khảo",
            "x": 8772,
            "y": 690,
            "size": 44,
            "at": "l3:live",
            "hl": [
              {
                "text": "2 giám khảo",
                "at": "l3:two examiners"
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
          "say": "Cambridge B one Preliminary has four papers. Reading forty five minutes, writing forty five, listening thirty.",
          "sub": "B1 Preliminary của Cambridge có bốn bài. Đọc 45 phút, Viết 45, Nghe 30."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Speaking ten to twelve minutes per pair. Each paper counts twenty five percent.",
          "sub": "Nói khoảng 10–12 phút mỗi cặp. Mỗi bài chiếm 25% tổng điểm.",
          "keys": [
            "25%"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Speaking is live, with one or two other candidates, before two examiners.",
          "sub": "Phần Nói thi trực tiếp cùng một hoặc hai thí sinh khác, trước hai giám khảo."
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "A2 Key chỉ ba bài — có thiếu một kỹ năng?",
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
          "say": "A two Key has only three papers. Is a skill missing?",
          "sub": "A2 Key chỉ có ba bài. Vậy là thiếu một kỹ năng?",
          "keys": [
            "thiếu một kỹ năng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
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
            "text": "④ 13:00 · A2 Key: ba bài",
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
                  "id": "lan",
                  "side": "center",
                  "pose": "point",
                  "face": "surprised"
                }
              ],
              "props": [
                "page-facing-up",
                "pot-of-food"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "caption": "13:00 · góc học của Lan",
            "icon": "pot-of-food"
          },
          {
            "id": "f-b0",
            "t": "box",
            "x": 60,
            "y": 1260,
            "w": 780,
            "h": 100,
            "at": "l3:one paper",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "f-t0",
            "t": "text",
            "text": "Đọc + Viết · 1 giờ · 50%",
            "x": 90,
            "y": 1280,
            "size": 50,
            "at": "l3:one paper+200",
            "color": "accent",
            "hl": [
              {
                "text": "50%",
                "at": "l3:fifty"
              }
            ]
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "5 phần đọc · 2 phần viết",
            "x": 90,
            "y": 1390,
            "size": 42,
            "at": "l4:five"
          },
          {
            "id": "f-w",
            "t": "text",
            "text": "email, ghi chú · truyện theo tranh",
            "x": 90,
            "y": 1450,
            "size": 38,
            "at": "l4:story"
          },
          {
            "id": "f-b1",
            "t": "box",
            "x": 60,
            "y": 1530,
            "w": 380,
            "h": 90,
            "at": "l5:Listening",
            "stroke": 4
          },
          {
            "id": "f-t1",
            "t": "text",
            "text": "Nghe 30' · 25%",
            "x": 85,
            "y": 1548,
            "size": 44,
            "at": "l5:Listening+200"
          },
          {
            "id": "f-b2",
            "t": "box",
            "x": 460,
            "y": 1530,
            "w": 380,
            "h": 90,
            "at": "l5:speaking",
            "stroke": 4
          },
          {
            "id": "f-t2",
            "t": "text",
            "text": "Nói 8–10' · 25%",
            "x": 485,
            "y": 1548,
            "size": 44,
            "at": "l5:speaking+200"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Cambridge English — A2 Key format",
            "x": 60,
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
          "say": "Stop four, one p.m. Lan finds the A two Key page.",
          "sub": "Chặng bốn, một giờ chiều. Lan tìm thấy trang A2 Key."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Only three papers! So one skill is missing. Easy exam!",
          "sub": "Chỉ có ba bài! Vậy là thiếu một kỹ năng. Dễ rồi!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Look again. Reading and writing share one paper: one hour, fifty percent of the total.",
          "sub": "Nhìn lại đi. Đọc và Viết gộp chung một bài: 1 giờ, chiếm 50% tổng điểm.",
          "keys": [
            "gộp chung một bài"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five reading parts, two writing parts: an email or note, and a story from pictures.",
          "sub": "Năm phần đọc, hai phần viết: email hoặc ghi chú, và viết truyện theo tranh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then listening, thirty minutes, and speaking, eight to ten per pair. Twenty five percent each.",
          "sub": "Rồi Nghe 30 phút, Nói 8–10 phút mỗi cặp. Mỗi bài 25%."
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s11",
      "module": "BRK-01",
      "data": {
        "illus": "page-facing-up",
        "around": [
          "pot-of-food",
          "pencil"
        ],
        "label": "Sai ở đây!",
        "note": "Đếm số bài thi thay vì đếm kỹ năng",
        "tone": "bad"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Stop right there.",
          "sub": "Dừng lại đã."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Lan counted papers, not skills.",
          "sub": "Lan đếm số bài, không đếm kỹ năng.",
          "keys": [
            "không đếm kỹ năng"
          ]
        }
      ],
      "ref": "p8,p9"
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
          }
        ],
        "items": [
          {
            "id": "f-ki",
            "t": "text",
            "text": "“Kiềng ba chân”",
            "x": 60,
            "y": 1650,
            "size": 56,
            "at": "l1:three legged",
            "color": "accent",
            "hl": [
              {
                "text": "Kiềng ba chân",
                "at": "l1:three legged"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Đếm kỹ năng, đừng đếm bài",
            "x": 900,
            "y": 1780,
            "size": 46,
            "at": "l2:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Đếm kỹ năng",
                "at": "l2:Count skills"
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
          "say": "Like a three legged cooking stand: three legs, still holding the whole pot. Three papers, still four skills.",
          "sub": "Như cái kiềng ba chân: ba chân vẫn đỡ cả nồi. Ba bài vẫn đủ bốn kỹ năng.",
          "keys": [
            "kiềng ba chân"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: Count skills, not papers.",
          "sub": "Rút ra: đếm kỹ năng, đừng đếm số bài thi.",
          "keys": [
            "đếm kỹ năng"
          ]
        }
      ],
      "ref": "p9"
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
          },
          {
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "l2",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 14:00 · TOEIC: hai bài",
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "laptop"
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
            "caption": "14:00 · lại tờ phiếu",
            "icon": "page-facing-up"
          },
          {
            "id": "g-h",
            "t": "text",
            "text": "Nghe–Đọc: 200 câu, 2 giờ",
            "x": 2028,
            "y": 1250,
            "size": 48,
            "at": "l2:two hundred",
            "color": "accent",
            "hl": [
              {
                "text": "200 câu",
                "at": "l2:two hundred"
              }
            ]
          },
          {
            "id": "g-b0",
            "t": "box",
            "x": 2028,
            "y": 1330,
            "w": 370,
            "h": 80,
            "at": "l2:Listening",
            "stroke": 4
          },
          {
            "id": "g-t0",
            "t": "text",
            "text": "Nghe 100 · ~45'",
            "x": 2042,
            "y": 1350,
            "size": 38,
            "at": "l2:Listening+200"
          },
          {
            "id": "g-b1",
            "t": "box",
            "x": 2408,
            "y": 1330,
            "w": 390,
            "h": 80,
            "at": "l3:Reading",
            "stroke": 4
          },
          {
            "id": "g-t1",
            "t": "text",
            "text": "Đọc 100 · 75'",
            "x": 2422,
            "y": 1350,
            "size": 38,
            "at": "l3:Reading+200"
          },
          {
            "id": "g-sc",
            "t": "text",
            "text": "5–495 mỗi phần · 10–990",
            "x": 2028,
            "y": 1435,
            "size": 40,
            "at": "l3:five"
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Không Nói, không Viết",
            "x": 2028,
            "y": 1500,
            "size": 48,
            "at": "l4:no speaking",
            "color": "coral",
            "hl": [
              {
                "text": "Không Nói, không Viết",
                "at": "l4:no speaking"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: ETS — TOEIC L&R Examinee Handbook; TOEIC Speaking and Writing",
            "x": 2028,
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
          "say": "Stop five, two p.m. Back to Dũng's report.",
          "sub": "Chặng năm, hai giờ chiều. Quay lại tờ phiếu của Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "TOEIC Listening and Reading: two hundred questions, two hours. Listening, one hundred in four parts, about forty five minutes.",
          "sub": "TOEIC Nghe–Đọc: 200 câu, 2 giờ. Nghe 100 câu, bốn phần, khoảng 45 phút."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Reading, one hundred in three parts, seventy five minutes. Five to four ninety five each, ten to nine ninety total.",
          "sub": "Đọc 100 câu, ba phần, 75 phút. Mỗi phần 5–495, tổng 10–990."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And no speaking or writing at all.",
          "sub": "Và không hề có phần Nói hay Viết.",
          "keys": [
            "không hề có phần Nói hay Viết"
          ]
        }
      ],
      "ref": "p10"
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
          }
        ],
        "items": [
          {
            "id": "g-sw",
            "t": "text",
            "text": "Nói–Viết: bài thi khác",
            "x": 2028,
            "y": 1580,
            "size": 48,
            "at": "l1:another test",
            "color": "accent",
            "hl": [
              {
                "text": "bài thi khác",
                "at": "l1:another test"
              }
            ]
          },
          {
            "id": "g-s",
            "t": "text",
            "text": "Nói: 11 câu, ~20'",
            "x": 2028,
            "y": 1650,
            "size": 42,
            "at": "l1:eleven"
          },
          {
            "id": "g-w",
            "t": "text",
            "text": "Viết: 8 câu, ~60'",
            "x": 2388,
            "y": 1650,
            "size": 42,
            "at": "l2:eight"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "mỗi bài 0–200 · chung hay riêng",
            "x": 2028,
            "y": 1720,
            "size": 40,
            "at": "l3:zero"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Nghe–Đọc + Nói–Viết = 4",
            "x": 2868,
            "y": 1780,
            "size": 46,
            "at": "l4:all four",
            "color": "accent",
            "hl": [
              {
                "text": "= 4",
                "at": "l4:all four"
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
          "say": "TOEIC Speaking and Writing is another test. Speaking: eleven questions, about twenty minutes. Read aloud, describe a picture, give opinions.",
          "sub": "TOEIC Nói–Viết là bài thi khác. Nói: 11 câu, khoảng 20 phút: đọc to, tả tranh, trả lời, nêu ý kiến.",
          "keys": [
            "bài thi khác"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Writing: eight questions, about sixty minutes. Sentences from pictures, an email reply, an opinion essay.",
          "sub": "Viết: 8 câu, khoảng 60 phút: viết câu theo tranh, trả lời email, bài luận nêu ý kiến."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Each scored zero to two hundred. Take them together or separately.",
          "sub": "Mỗi bài thang 0–200. Thi chung hay riêng đều được."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Add Listening and Reading, says ETS, and you cover all four skills.",
          "sub": "Theo ETS, cộng thêm Nghe–Đọc thì đo được đủ bốn kỹ năng.",
          "keys": [
            "đủ bốn kỹ năng"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s15",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Dũng đăng ký thi",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chỉ thi Nghe–Đọc vì tổng điểm cao",
          "why": "Nhận hồ sơ xong, tuyển dụng nhắn xin bổ sung điểm Nói, Viết, mà hạn chót đã gần.",
          "rule": "Hỏi mức từng kỹ năng, thi cả hai bài"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Listening and Reading only. A high total covers it. Registered!",
          "sub": "Chỉ Nghe–Đọc thôi. Tổng cao là đủ. Đăng ký xong!",
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
          "say": "HR will write back asking for speaking and writing scores, with the deadline close.",
          "sub": "Tuyển dụng sẽ nhắn xin bổ sung điểm Nói, Viết, mà hạn chót đã gần.",
          "keys": [
            "bổ sung điểm Nói, Viết"
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
          "say": "First I ask HR the minimum per skill. Then I book both tests and send both reports together.",
          "sub": "Hỏi tuyển dụng mức từng kỹ năng trước. Rồi đăng ký cả hai bài, nộp đủ hai phiếu cùng lúc.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Four TOEIC skills live on two score reports.",
          "sub": "Bốn kỹ năng của TOEIC nằm trên hai phiếu điểm.",
          "phase": "redo",
          "keys": [
            "hai phiếu điểm"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p12,p13"
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
            "text": "⑥ 16:00 · Bảng miễn thi",
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
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "school"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "caption": "16:00 · phiếu Nghe–Đọc của Lan",
            "icon": "school"
          },
          {
            "id": "h-ie",
            "t": "text",
            "text": "IELTS: một mức 4.0",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l3:IELTS"
          },
          {
            "id": "h-tc",
            "t": "text",
            "text": "TOEIC “4 kỹ năng”:",
            "x": 3996,
            "y": 1340,
            "size": 50,
            "at": "l4:TOEIC",
            "color": "accent",
            "hl": [
              {
                "text": "4 kỹ năng",
                "at": "l4:four skills"
              }
            ]
          },
          {
            "id": "h-b0",
            "t": "box",
            "x": 3996,
            "y": 1420,
            "w": 340,
            "h": 75,
            "at": "l4:Listening",
            "stroke": 4
          },
          {
            "id": "h-bt0",
            "t": "text",
            "text": "Nghe 275",
            "x": 4026,
            "y": 1426,
            "size": 46,
            "at": "l4:Listening+200"
          },
          {
            "id": "h-b1",
            "t": "box",
            "x": 4376,
            "y": 1420,
            "w": 340,
            "h": 75,
            "at": "l4:reading",
            "stroke": 4
          },
          {
            "id": "h-bt1",
            "t": "text",
            "text": "Đọc 275",
            "x": 4406,
            "y": 1426,
            "size": 46,
            "at": "l4:reading+200"
          },
          {
            "id": "h-b2",
            "t": "box",
            "x": 3996,
            "y": 1515,
            "w": 340,
            "h": 75,
            "at": "l4:speaking",
            "stroke": 4
          },
          {
            "id": "h-bt2",
            "t": "text",
            "text": "Nói 120",
            "x": 4026,
            "y": 1521,
            "size": 46,
            "at": "l4:speaking+200"
          },
          {
            "id": "h-b3",
            "t": "box",
            "x": 4376,
            "y": 1515,
            "w": 340,
            "h": 75,
            "at": "l4:writing",
            "stroke": 4
          },
          {
            "id": "h-bt3",
            "t": "text",
            "text": "Viết 120",
            "x": 4406,
            "y": 1521,
            "size": 46,
            "at": "l4:writing+200"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Công văn 1257/BGDĐT-QLCL (19/3/2026) — miễn thi Ngoại ngữ THPT 2026",
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
          "say": "Stop six, four p.m. Lan took TOEIC Listening and Reading, with a pretty high total.",
          "sub": "Chặng sáu, bốn giờ chiều. Lan đã thi TOEIC Nghe–Đọc, tổng điểm khá cao."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Can I use it for the English exam exemption?",
          "sub": "Em dùng phiếu này xin miễn thi Ngoại ngữ được không ạ?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check the twenty twenty six exemption table. IELTS has one line: four point oh.",
          "sub": "Xem bảng miễn thi năm 2026. IELTS chỉ ghi một mức: 4.0."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "TOEIC says four skills: listening two seventy five, reading two seventy five, speaking one twenty, writing one twenty.",
          "sub": "TOEIC ghi “4 kỹ năng”: Nghe 275, Đọc 275, Nói 120, Viết 120.",
          "keys": [
            "4 kỹ năng"
          ]
        }
      ],
      "ref": "p14,p15"
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
          }
        ],
        "items": [
          {
            "id": "h-no",
            "t": "text",
            "text": "Phiếu Lan: chưa đủ",
            "x": 3996,
            "y": 1620,
            "size": 52,
            "at": "l1:Not",
            "color": "coral",
            "hl": [
              {
                "text": "chưa đủ",
                "at": "l1:Not enough"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Tổng cao không bù kỹ năng thiếu",
            "x": 3996,
            "y": 1705,
            "size": 46,
            "at": "l2:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "không bù",
                "at": "l2:replace"
              }
            ]
          },
          {
            "id": "h-b1",
            "t": "text",
            "text": "“Tương đương B1”? Hỏi lại",
            "x": 4836,
            "y": 1780,
            "size": 44,
            "at": "l3:equivalent",
            "hl": [
              {
                "text": "Hỏi lại",
                "at": "l4:Ask"
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
          "say": "Not enough. Speaking and writing are missing, and a high total can't stand in for them.",
          "sub": "Chưa đủ. Còn thiếu Nói và Viết, tổng điểm cao cũng không thay được.",
          "keys": [
            "Chưa đủ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: a high total doesn't replace a missing skill. Check each line, or ask the school.",
          "sub": "Rút ra: tổng điểm cao không bù được kỹ năng còn thiếu. Đối chiếu từng dòng, hoặc hỏi nhà trường.",
          "keys": [
            "không bù được kỹ năng còn thiếu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And if a notice only says equivalent to B one? Don't guess.",
          "sub": "Còn nếu thông báo chỉ ghi “tương đương B1”? Đừng tự đoán.",
          "keys": [
            "Đừng tự đoán"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ask: are all four skills needed, and is there a minimum per skill?",
          "sub": "Hỏi lại: có cần đủ bốn kỹ năng không, có mức tối thiểu từng kỹ năng không?"
        }
      ],
      "ref": "p15,p16,p17"
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
            "at": "l3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 19:00 · Thảo làm mẫu",
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
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "pencil",
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
            "at": "l1:Thảo",
            "caption": "19:00 · bút dạ vàng",
            "icon": "pencil"
          },
          {
            "id": "i-n",
            "t": "text",
            "text": "“bốn kỹ năng” · “bậc 3”",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:four skills",
            "hl": [
              {
                "text": "bốn kỹ năng",
                "at": "l2:four skills"
              },
              {
                "text": "bậc 3",
                "at": "l2:level three"
              }
            ]
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "① Gạch chân hai cụm",
            "x": 5964,
            "y": 1350,
            "size": 44,
            "at": "l3:One"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "② Loại TOEIC chỉ Nghe–Đọc",
            "x": 5964,
            "y": 1420,
            "size": 44,
            "at": "l3:Two"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "③ So với danh sách",
            "x": 5964,
            "y": 1490,
            "size": 44,
            "at": "l4:Three"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "④ Nhắn hỏi mức điểm",
            "x": 5964,
            "y": 1560,
            "size": 44,
            "at": "l4:Four"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Gạch chân yêu cầu trước",
            "x": 5964,
            "y": 1660,
            "size": 52,
            "at": "l5:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "yêu cầu trước",
                "at": "l5:requirement"
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
          "say": "Stop seven, seven p.m. Thảo's own notice, highlighter ready.",
          "sub": "Chặng bảy, bảy giờ tối. Thông báo của chính Thảo, bút dạ đã sẵn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Four skills, equivalent to level three. Underline both.",
          "sub": "Bốn kỹ năng, tương đương bậc 3. Gạch chân cả hai.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: underline the two phrases. Two: cross out TOEIC Listening and Reading alone, no speaking or writing.",
          "sub": "Một: gạch chân hai cụm. Hai: loại phương án chỉ thi TOEIC Nghe–Đọc, vì thiếu Nói và Viết."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: compare the rest with the notice's list. Four: message the training office for the exact score.",
          "sub": "Ba: so các chứng chỉ còn lại với danh sách. Bốn: nhắn phòng đào tạo hỏi mức điểm cụ thể."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: underline the requirement first, then cross out certificate names.",
          "sub": "Rút ra: gạch chân yêu cầu, rồi mới gạch tên chứng chỉ.",
          "keys": [
            "gạch chân yêu cầu"
          ]
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "s19",
      "module": "BRK-05",
      "data": {
        "title": "So nhanh số kỹ năng",
        "points": [
          "IELTS, VSTEP, B1 Preliminary: đủ 4",
          "A2 Key: 3 bài, vẫn đủ 4",
          "TOEIC: hai bài riêng"
        ],
        "illus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Quick check. IELTS, VSTEP, B one Preliminary: four skills, one exam.",
          "sub": "So nhanh. IELTS, VSTEP, B1 Preliminary: đủ bốn kỹ năng, một kỳ thi."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A two Key: three papers, still four skills.",
          "sub": "A2 Key: ba bài, vẫn đủ bốn kỹ năng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "TOEIC: two separate tests.",
          "sub": "TOEIC: hai bài thi riêng.",
          "keys": [
            "hai bài thi riêng"
          ]
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s20",
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
            "text": "21:00 · Hai tờ phiếu",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Nine"
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
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "happy"
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
            "at": "l1:same",
            "caption": "21:00 · cùng bàn ăn",
            "icon": "page-facing-up"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 360,
            "h": 150,
            "at": "l2:Listening",
            "stroke": 5
          },
          {
            "id": "j-c1t",
            "t": "text",
            "text": "Nghe · Đọc",
            "x": 7962,
            "y": 1305,
            "size": 50,
            "at": "l2:Listening+200",
            "color": "accent"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 8322,
            "y": 1260,
            "w": 360,
            "h": 150,
            "at": "l2:Speaking",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "j-c2t",
            "t": "text",
            "text": "Nói · Viết",
            "x": 8352,
            "y": 1305,
            "size": 50,
            "at": "l2:Speaking+200",
            "color": "accent"
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "Hai phiếu = 4 kỹ năng",
            "x": 7932,
            "y": 1460,
            "size": 56,
            "at": "l3:two reports",
            "color": "accent",
            "hl": [
              {
                "text": "4 kỹ năng",
                "at": "l3:four skills"
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
          "say": "Nine p.m. Same table, same report. But not alone anymore.",
          "sub": "Chín giờ tối. Vẫn bàn ấy, tờ phiếu ấy. Nhưng không còn lẻ bóng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Listening and Reading, done. Speaking and Writing, booked. HR has the minimums.",
          "sub": "Nghe–Đọc xong rồi. Nói–Viết đăng ký rồi. Mức từng kỹ năng, đã hỏi tuyển dụng.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "This morning, two columns. Tonight, two reports and four skills.",
          "sub": "Sáng nay, hai cột. Tối nay, hai phiếu, đủ bốn kỹ năng.",
          "keys": [
            "hai phiếu, đủ bốn kỹ năng"
          ]
        }
      ],
      "ref": "p13,outro"
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
            "at": "l1:IELTS",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:papers",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:total",
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
            "x": 2828,
            "y": 180,
            "at": "l1:IELTS"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 780,
            "y": 1650,
            "at": "l2:papers"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4716,
            "y": 1705,
            "at": "l3:total"
          },
          {
            "id": "z-do",
            "t": "text",
            "text": "Làm ngay: gạch chân thông báo",
            "x": 7932,
            "y": 1650,
            "size": 44,
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
          "say": "So: IELTS, VSTEP and Cambridge test four skills in one exam. TOEIC needs two tests.",
          "sub": "Tóm lại: IELTS, VSTEP, Cambridge thi đủ bốn kỹ năng trong một kỳ. TOEIC cần hai bài.",
          "keys": [
            "TOEIC cần hai bài"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Count skills, not papers.",
          "sub": "Đếm kỹ năng, đừng đếm số bài."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a high total never replaces a missing skill.",
          "sub": "Và tổng điểm cao không bù được kỹ năng còn thiếu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Do it now: underline every word about skills in your notice.",
          "sub": "Làm ngay: gạch chân mọi chữ nói về số kỹ năng trong thông báo.",
          "keys": [
            "Làm ngay"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p9,p16"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "Dung must show TOEIC with four skills, what should he register for?",
        "options": [
          "Only the speaking test, because it is the shortest and the cheapest",
          "Both the listening and reading test and the speaking and writing test",
          "Just the two hour multiple choice paper, then explain his strong speaking later"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "page-facing-up",
        "why": "Ở cách B, Dũng hỏi mức từng kỹ năng rồi đăng ký cả hai bài. Anh nộp đủ hai phiếu điểm cùng lúc."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Dung must show TOEIC with four skills, what should he register for?",
          "sub": "Dũng phải nộp TOEIC đủ bốn kỹ năng, anh nên đăng ký bài nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Both the listening and reading test and the speaking and writing test.",
          "sub": "Cả bài Nghe–Đọc lẫn bài Nói–Viết."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[21]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Đã đếm đủ kỹ năng. Còn bốn mươi câu",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Skills counted. Forty questions below. Next: matching tests to level three and four.",
          "sub": "Đếm đủ kỹ năng rồi. Bốn mươi câu bên dưới. Bài sau: đối chiếu với bậc 3, bậc 4.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi english-certificate-choosers, bài 1) dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT NGÀY THỨ BẢY ở nhà ba anh em (8:00 phiếu điểm hai cột của Dũng → ① 8:30 vì sao đếm kỹ năng → ② 9:30 IELTS → ③ 11:00 VSTEP, B1 Preliminary → ④ 13:00 A2 Key “kiềng ba chân” → ⑤ 14:00 TOEIC hai bài + “Khoan đã!” → ⑥ 16:00 Lan và bảng miễn thi → ⑦ 19:00 Thảo làm mẫu → 21:00 hai phiếu trên bàn). HOOK-23: đồ vật kể chuyện (tờ phiếu TOEIC Nghe–Đọc). Nhân vật: Dũng (p12), Thảo (p19), Lan (p15, học sinh lớp 12) — w145/_series/english-certificate-choosers.md. Cảnh ngắt nhịp: BRK-08 (một ngày), BRK-07 (A2 Key thiếu kỹ năng?), BRK-01 (đếm bài thay vì đếm kỹ năng), BRK-05 (so nhanh). Tục ngữ: “Kiềng ba chân”. Câu đố questions[21].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
