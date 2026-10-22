// bar-w1-civ-jurisdiction--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-w1-civ-jurisdiction--w01",
  "unit": {
    "audience": "bar-exam-written1-civil",
    "slug": "bar-w1-civ-jurisdiction",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Thẩm quyền toà và thời hiệu: hai chỗ hay mất điểm sau sửa đổi 2025",
    "series": "Bài viết 1 phần dân sự — xác định quan hệ tranh chấp, chứng cứ và hướng bảo vệ cho người ôn kiểm tra tập sự"
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
              "set": "cafe",
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
                "globe-showing-asia-australia"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai 19:00 · quán quen",
            "icon": "globe-showing-asia-australia"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Đương sự ở nước ngoài:",
            "x": 60,
            "y": 110,
            "size": 62,
            "at": "l2:abroad",
            "hl": [
              {
                "text": "nước ngoài",
                "at": "l2:abroad"
              }
            ]
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "toà nào xử sơ thẩm?",
            "x": 60,
            "y": 190,
            "size": 62,
            "at": "l2:first instance"
          },
          {
            "id": "a-b1",
            "t": "box",
            "x": 60,
            "y": 300,
            "w": 360,
            "h": 110,
            "at": "l2:provincial",
            "stroke": 5
          },
          {
            "id": "a-o1",
            "t": "text",
            "text": "Toà tỉnh",
            "x": 110,
            "y": 318,
            "size": 64,
            "at": "l2:provincial"
          },
          {
            "id": "a-b2",
            "t": "box",
            "x": 460,
            "y": 300,
            "w": 380,
            "h": 110,
            "at": "l2:regional",
            "stroke": 5
          },
          {
            "id": "a-o2",
            "t": "text",
            "text": "Toà khu vực",
            "x": 490,
            "y": 318,
            "size": 64,
            "at": "l2:regional"
          },
          {
            "id": "a-x",
            "t": "strike",
            "over": "a-o1",
            "at": "l4:regional"
          },
          {
            "id": "a-r",
            "t": "ring",
            "around": [
              "a-b2"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l4:regional"
          },
          {
            "id": "a-d",
            "t": "text",
            "text": "từ 01/7/2025",
            "x": 490,
            "y": 440,
            "size": 48,
            "at": "l4:July",
            "color": "accent",
            "hl": [
              {
                "text": "01/7/2025",
                "at": "l4:July"
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
          "say": "Meet Dũng, trainee lawyer, sure of everything since breakfast.",
          "sub": "Đây là Dũng, luật sư tập sự, chắc chắn mọi thứ từ sáng sớm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Quick quiz. A party lives abroad. First instance: provincial court, or regional court?",
          "sub": "Đố nhanh: đương sự ở nước ngoài. Sơ thẩm: toà tỉnh hay toà khu vực?",
          "keys": [
            "toà tỉnh hay toà khu vực"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Provincial, obviously! Foreign element goes up a level.",
          "sub": "Toà tỉnh, chắc luôn! Có yếu tố nước ngoài là lên tỉnh.",
          "face": "happy",
          "wait": 1500
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Wrong. Since July first, twenty twenty-five, it starts at the regional court.",
          "sub": "Sai. Từ 01/7/2025, vụ ấy bắt đầu ở toà khu vực.",
          "keys": [
            "toà khu vực"
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
      "ref": "p3,p4"
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
              "a-v2"
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
            "id": "a-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "shrug"
                }
              ],
              "props": [
                "closed-book"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l2",
            "caption": "Thứ Hai 19:00 · bản luật in cũ",
            "icon": "closed-book"
          },
          {
            "id": "a-why",
            "t": "text",
            "text": "Sách ôn soạn trước mốc ấy",
            "x": 60,
            "y": 520,
            "size": 46,
            "at": "l1:books",
            "color": "muted"
          },
          {
            "id": "a-ve",
            "t": "text",
            "text": "Nước ngoài ≠ vé lên toà tỉnh",
            "x": 60,
            "y": 600,
            "size": 56,
            "at": "l5:ticket",
            "color": "accent",
            "hl": [
              {
                "text": "vé lên toà tỉnh",
                "at": "l5:ticket"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Theo bài học: BLTTDS 2015 sửa bởi Luật 85/2025/QH15 · BLDS 2015 · Tạp chí Toà án · văn bản có hiệu lực tại 10/2026",
            "x": 60,
            "y": 740,
            "size": 22,
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
          "say": "Don't laugh. Many prep books, written before that date, still say provincial.",
          "sub": "Đừng cười. Nhiều đề giải sẵn, sách ôn soạn trước mốc ấy vẫn ghi toà tỉnh.",
          "keys": [
            "soạn trước mốc ấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Thảo, holding her trusty printed code from years ago.",
          "sub": "Còn đây là Thảo, ôm cuốn bộ luật in từ mấy năm trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "My printed code still says district level court. Is that a problem?",
          "sub": "Bản in của em vẫn ghi “toà cấp huyện”. Có sao không nhỉ?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One such line, and the marker knows your wording is outdated.",
          "sub": "Một dòng như thế, người chấm biết ngay bài làm dựa trên luật đã bị sửa."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A foreign element is no longer a ticket to the provincial court.",
          "sub": "Yếu tố nước ngoài không còn là vé lên toà tỉnh.",
          "keys": [
            "vé lên toà tỉnh"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p4,p5,p21"
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
            "text": "Hai chỗ hay mất điểm",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:lose",
            "hl": [
              {
                "text": "mất điểm",
                "at": "l1:lose"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Ghi nhầm tên toà theo luật cũ",
            "x": 2028,
            "y": 180,
            "size": 54,
            "at": "l2:old"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Quên: toà không tự áp thời hiệu",
            "x": 2028,
            "y": 270,
            "size": 54,
            "at": "l2:forgetting",
            "color": "coral",
            "hl": [
              {
                "text": "không tự",
                "at": "l2:itself"
              }
            ]
          },
          {
            "id": "b-ga",
            "t": "text",
            "text": "“Bút sa gà chết”",
            "x": 2028,
            "y": 380,
            "size": 66,
            "at": "l3:pen",
            "color": "accent",
            "hl": [
              {
                "text": "gà chết",
                "at": "l3:chicken"
              }
            ]
          },
          {
            "id": "b-i1",
            "t": "illus",
            "name": "classical-building",
            "x": 3018,
            "y": 180,
            "size": 110,
            "at": "l4:court"
          },
          {
            "id": "b-c",
            "t": "text",
            "text": "Toà: theo cấp + theo lãnh thổ",
            "x": 3138,
            "y": 200,
            "size": 46,
            "at": "l4:level"
          },
          {
            "id": "b-i2",
            "t": "illus",
            "name": "hourglass-not-done",
            "x": 3018,
            "y": 330,
            "size": 110,
            "at": "l4:time limit"
          },
          {
            "id": "b-tl",
            "t": "text",
            "text": "Thời hiệu: tính đúng, dùng đúng",
            "x": 3138,
            "y": 350,
            "size": 46,
            "at": "l4:time limit"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, two places where good answers lose marks.",
          "sub": "Vậy là có hai chỗ bài hay vẫn mất điểm.",
          "keys": [
            "mất điểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An old court name. And forgetting the court won't apply time limits by itself.",
          "sub": "Ghi tên toà theo luật cũ. Và quên rằng toà không tự áp dụng thời hiệu.",
          "keys": [
            "không tự áp dụng thời hiệu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "As they say: once the pen drops, the chicken is dead. One written line counts.",
          "sub": "Như người xưa nói: “Bút sa gà chết.” Đã viết là tính điểm.",
          "keys": [
            "Bút sa gà chết"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "This week: the court, by level and territory. Then the time limit, counted and used right.",
          "sub": "Tuần này: toà theo cấp và theo lãnh thổ, rồi thời hiệu, tính đúng và dùng đúng."
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Tuần cuối trước kỳ thi",
        "current": 0,
        "points": [
          {
            "label": "Thứ Hai",
            "sub": "Toà khu vực",
            "illus": "classical-building"
          },
          {
            "label": "Thứ Tư",
            "sub": "Lãnh thổ",
            "illus": "world-map"
          },
          {
            "label": "Thứ Năm",
            "sub": "Tính thời hiệu",
            "illus": "hourglass-not-done"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Ai yêu cầu",
            "illus": "balance-scale"
          },
          {
            "label": "Chủ nhật",
            "sub": "Soát bản luật",
            "illus": "books"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One week left. Courts first.",
          "sub": "Còn một tuần. Toà trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Then time limits, then the codes.",
          "sub": "Rồi thời hiệu, rồi soát bộ luật."
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai · Toà nào sơ thẩm?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "c-85",
            "t": "text",
            "text": "Luật 85/2025/QH15",
            "x": 3996,
            "y": 170,
            "size": 56,
            "at": "l2:eighty-five",
            "color": "accent"
          },
          {
            "id": "c-85b",
            "t": "text",
            "text": "thông qua 25/6/2025 · hiệu lực 01/7/2025",
            "x": 3996,
            "y": 245,
            "size": 40,
            "at": "l2:June",
            "hl": [
              {
                "text": "01/7/2025",
                "at": "l2:July"
              }
            ]
          },
          {
            "id": "c-35",
            "t": "text",
            "text": "Điều 35: toà khu vực sơ thẩm",
            "x": 3996,
            "y": 340,
            "size": 52,
            "at": "l3:thirty-five",
            "hl": [
              {
                "text": "toà khu vực",
                "at": "l3:regional"
              }
            ]
          },
          {
            "id": "c-26",
            "t": "text",
            "text": "tranh chấp Điều 26, 28, 30, 32",
            "x": 4016,
            "y": 410,
            "size": 40,
            "at": "l3:twenty-six",
            "color": "muted"
          },
          {
            "id": "c-36",
            "t": "text",
            "text": "Điều 36 · toà chuyên trách:",
            "x": 3996,
            "y": 500,
            "size": 50,
            "at": "l4:specialised"
          },
          {
            "id": "c-ds",
            "t": "text",
            "text": "Toà Dân sự = dân sự + lao động",
            "x": 4016,
            "y": 570,
            "size": 44,
            "at": "l4:labour",
            "color": "coral",
            "hl": [
              {
                "text": "lao động",
                "at": "l4:labour"
              }
            ]
          },
          {
            "id": "c-kt",
            "t": "text",
            "text": "Kinh tế · Sở hữu trí tuệ",
            "x": 4016,
            "y": 630,
            "size": 44,
            "at": "l5:economic"
          },
          {
            "id": "c-gd",
            "t": "text",
            "text": "Gia đình và người chưa thành niên",
            "x": 4016,
            "y": 690,
            "size": 44,
            "at": "l5:family"
          },
          {
            "id": "c-i",
            "t": "illus",
            "name": "classical-building",
            "x": 5186,
            "y": 170,
            "size": 260,
            "at": "l3:regional"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday. Which court hears the case first?",
          "sub": "Thứ Hai. Toà nào xử sơ thẩm?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Law eighty-five, passed in June, in force July first, twenty twenty-five, amended the procedure code.",
          "sub": "Luật 85/2025/QH15: thông qua 25/6/2025, hiệu lực 01/7/2025, sửa Bộ luật Tố tụng dân sự.",
          "keys": [
            "01/7/2025"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Amended Article thirty-five: regional courts hear first instance disputes, Articles twenty-six to thirty-two.",
          "sub": "Điều 35 sửa đổi: toà khu vực sơ thẩm các tranh chấp ở Điều 26, 28, 30, 32.",
          "keys": [
            "toà khu vực"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article thirty-six adds specialised courts. The civil one now takes labour too.",
          "sub": "Điều 36 có các toà chuyên trách. Toà Dân sự nay giải quyết cả việc lao động.",
          "keys": [
            "cả việc lao động"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Plus economic, intellectual property, family and juveniles.",
          "sub": "Cùng Kinh tế, Sở hữu trí tuệ, Gia đình và người chưa thành niên."
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
            "text": "② Thứ Ba · Toà tỉnh làm gì?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
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
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "scroll"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Cô Hoa",
            "caption": "Thứ Ba · văn phòng Cô Hoa",
            "icon": "scroll"
          },
          {
            "id": "d-37",
            "t": "text",
            "text": "Điều 37 · toà tỉnh:",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l3:thirty-seven"
          },
          {
            "id": "d-37b",
            "t": "text",
            "text": "phúc thẩm · giám đốc thẩm · tái thẩm",
            "x": 5984,
            "y": 240,
            "size": 42,
            "at": "l3:appeals",
            "color": "accent"
          },
          {
            "id": "d-tt",
            "t": "text",
            "text": "Toà tỉnh: phán quyết trọng tài",
            "x": 5964,
            "y": 320,
            "size": 40,
            "at": "l4:arbitral",
            "hl": [
              {
                "text": "trọng tài",
                "at": "l4:arbitral"
              }
            ]
          },
          {
            "id": "d-tt2",
            "t": "text",
            "text": "huỷ, đăng ký · Hà Nội, Đà Nẵng, TP HCM",
            "x": 5984,
            "y": 380,
            "size": 24,
            "at": "l4:Da Nang",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "d-tt3",
            "t": "text",
            "text": "Luật Trọng tài thương mại đang sửa: kiểm lại sau kỳ họp",
            "x": 5984,
            "y": 415,
            "size": 24,
            "at": "l4:amended",
            "font": "base",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tuesday. Cô Hoa, Thảo's supervising lawyer, quizzes her.",
          "sub": "Thứ Ba, ở văn phòng. Cô Hoa, luật sư hướng dẫn của Thảo, hỏi bài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "If regional courts hear everything first, what's left for provincial courts?",
          "sub": "Toà khu vực xử sơ thẩm hết, vậy toà tỉnh còn làm gì?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article thirty-seven: appeals, cassation, reopening.",
          "sub": "Điều 37: phúc thẩm, giám đốc thẩm, tái thẩm.",
          "keys": [
            "phúc thẩm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Some handle arbitral awards: Hanoi, Da Nang, Ho Chi Minh City, per the Court Journal. That law is being amended.",
          "sub": "Một số toà tỉnh huỷ, đăng ký phán quyết trọng tài: theo Tạp chí Toà án là Hà Nội, Đà Nẵng, TP Hồ Chí Minh. Luật này đang sửa."
        }
      ],
      "ref": "p2"
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
            "id": "d-41",
            "t": "text",
            "text": "Điều 41 · tranh chấp thẩm quyền:",
            "x": 5964,
            "y": 500,
            "size": 46,
            "at": "l1:forty-one"
          },
          {
            "id": "d-41a",
            "t": "text",
            "text": "trong một tỉnh → Chánh án toà tỉnh",
            "x": 5984,
            "y": 570,
            "size": 44,
            "at": "l1:province",
            "color": "accent"
          },
          {
            "id": "d-41b",
            "t": "text",
            "text": "giữa các tỉnh → Chánh án TANDTC",
            "x": 5984,
            "y": 640,
            "size": 44,
            "at": "l2:provinces",
            "hl": [
              {
                "text": "TANDTC",
                "at": "l2:Supreme"
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
          "say": "And if two regional courts in one province argue? Article forty-one: the provincial chief judge decides.",
          "sub": "Hai toà khu vực cùng tỉnh tranh chấp thẩm quyền? Điều 41: Chánh án toà tỉnh giải quyết.",
          "keys": [
            "Chánh án toà tỉnh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Between provinces, the Chief Justice of the Supreme People's Court.",
          "sub": "Giữa các tỉnh: Chánh án Toà án nhân dân tối cao."
        }
      ],
      "ref": "p3"
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
            "text": "③ Thứ Tư · Toà khu vực nào?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "think",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "world-map",
                "package"
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
            "at": "l1:Lan",
            "caption": "Thứ Tư · đề của Dũng",
            "icon": "world-map"
          },
          {
            "id": "e-39",
            "t": "text",
            "text": "Điều 39 khoản 1:",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l3:thirty-nine"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "a · nơi bị đơn ở, trụ sở",
            "x": 7952,
            "y": 240,
            "size": 42,
            "at": "l3:defendant",
            "color": "accent",
            "hl": [
              {
                "text": "nơi bị đơn",
                "at": "l3:defendant"
              }
            ]
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "b · thoả thuận: nơi nguyên đơn",
            "x": 7952,
            "y": 305,
            "size": 42,
            "at": "l4:agree"
          },
          {
            "id": "e-c",
            "t": "text",
            "text": "c · bất động sản: nơi có nó",
            "x": 7952,
            "y": 370,
            "size": 42,
            "at": "l4:real estate",
            "color": "coral",
            "hl": [
              {
                "text": "nơi có nó",
                "at": "l4:only"
              }
            ]
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "k3 · đã thụ lý đúng: giữ nguyên dù chuyển nhà",
            "x": 7932,
            "y": 445,
            "size": 30,
            "at": "l5:moves",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Wednesday, back at the café. And this is Lan, who reads every word twice.",
          "sub": "Thứ Tư, lại ở quán. Còn đây là Lan, chữ nào cũng soi hai lần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Company A sells goods to B, delivered at A's warehouse. B is in another province and pays late.",
          "sub": "Công ty A bán hàng cho B, giao tại kho của A. B ở tỉnh khác, chậm trả tiền.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article thirty-nine, point a: the court where the defendant lives, works or has its office.",
          "sub": "Điểm a khoản 1 Điều 39: toà nơi bị đơn cư trú, làm việc, hoặc có trụ sở.",
          "keys": [
            "nơi bị đơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Point b: the parties may agree in writing on the plaintiff's court. Point c: real estate, only where it sits.",
          "sub": "Điểm b: thoả thuận bằng văn bản chọn toà nơi nguyên đơn. Điểm c: bất động sản, chỉ toà nơi có nó.",
          "keys": [
            "chỉ toà nơi có nó"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Clause three: a case rightly accepted stays put, even if someone moves.",
          "sub": "Khoản 3: toà đã thụ lý đúng thì giải quyết tiếp, dù đương sự đổi nơi cư trú."
        }
      ],
      "ref": "p6,p9"
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
            "id": "e-40",
            "t": "text",
            "text": "Điều 40 · điểm g khoản 1:",
            "x": 7932,
            "y": 520,
            "size": 46,
            "at": "l1:forty"
          },
          {
            "id": "e-40b",
            "t": "text",
            "text": "nơi hợp đồng được thực hiện",
            "x": 7952,
            "y": 585,
            "size": 46,
            "at": "l1:performed",
            "color": "accent",
            "hl": [
              {
                "text": "được thực hiện",
                "at": "l1:performed"
              }
            ]
          },
          {
            "id": "e-dk",
            "t": "text",
            "text": "2 điều kiện: hợp đồng + đúng lãnh thổ",
            "x": 7952,
            "y": 650,
            "size": 26,
            "at": "l2:conditions",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-cong",
            "t": "text",
            "text": "Viết công thức, đừng đoán tên toà",
            "x": 7932,
            "y": 700,
            "size": 48,
            "at": "l4:guess",
            "color": "coral",
            "hl": [
              {
                "text": "đừng đoán",
                "at": "l4:guess"
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
          "say": "Article forty adds options. Point g: for contract disputes, the court where the contract was performed.",
          "sub": "Điều 40 cho thêm lựa chọn. Điểm g khoản 1: tranh chấp hợp đồng, chọn toà nơi hợp đồng được thực hiện.",
          "keys": [
            "nơi hợp đồng được thực hiện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The Court Journal sets two conditions: a contract dispute, and that place within the chosen court's territory.",
          "sub": "Bài trên Tạp chí Toà án nêu hai điều kiện: tranh chấp về hợp đồng, và nơi thực hiện thuộc lãnh thổ toà được chọn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Once the plaintiff chooses, that choice must be respected.",
          "sub": "Nguyên đơn đã chọn thì lựa chọn đó phải được tôn trọng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Write the formula, like regional court where the defendant has its office. Never guess a court's name.",
          "sub": "Viết theo công thức, như “toà khu vực nơi bị đơn có trụ sở”. Đề không cho thì đừng đoán tên toà.",
          "keys": [
            "đừng đoán tên toà"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Hai cách của Dũng",
        "wrong": "Chỉ toà nơi Công ty B có trụ sở",
        "right": "Thêm toà nơi thực hiện hợp đồng, nói vì sao",
        "wrongIllus": "office-building",
        "rightIllus": "package",
        "labels": [
          "Cách A",
          "Cách B"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A: correct, but one option.",
          "sub": "A: đúng, nhưng thiếu lựa chọn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "B: plus Article forty, and why.",
          "sub": "B: thêm điểm g Điều 40, và vì sao chọn.",
          "keys": [
            "vì sao chọn"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s10",
      "module": "BRK-10",
      "data": {
        "quote": "Nêu quy tắc chung, nêu lựa chọn, rồi nói vì sao chọn",
        "mark": "vì sao chọn",
        "by": "Rút ra từ bài học",
        "illus": "light-bulb"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "General rule, the option, then why you choose it.",
          "sub": "Nêu quy tắc chung, nêu lựa chọn, rồi nói vì sao chọn.",
          "keys": [
            "vì sao chọn"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm · Thời hiệu",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday"
          },
          {
            "id": "f-149",
            "t": "text",
            "text": "k1 Điều 149: hết hạn → hậu quả",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:consequences"
          },
          {
            "id": "f-429",
            "t": "text",
            "text": "Hợp đồng: 03 năm (Điều 429)",
            "x": 60,
            "y": 1340,
            "size": 56,
            "at": "l3:three years",
            "color": "accent",
            "hl": [
              {
                "text": "03 năm",
                "at": "l3:three years"
              }
            ]
          },
          {
            "id": "f-tu",
            "t": "text",
            "text": "từ ngày biết, phải biết",
            "x": 80,
            "y": 1420,
            "size": 40,
            "at": "l3:knew"
          },
          {
            "id": "f-ky",
            "t": "text",
            "text": "Ngày ký hợp đồng",
            "x": 60,
            "y": 1490,
            "size": 48,
            "at": "l4:signing",
            "color": "muted"
          },
          {
            "id": "f-kyx",
            "t": "strike",
            "over": "f-ky",
            "at": "l4:signing+400"
          },
          {
            "id": "f-155",
            "t": "text",
            "text": "Điều 155 · không áp dụng thời hiệu:",
            "x": 60,
            "y": 1570,
            "size": 44,
            "at": "l5:fifty-five",
            "color": "coral"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "quyền nhân thân không gắn tài sản",
            "x": 80,
            "y": 1630,
            "size": 38,
            "at": "l5:personal"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "quyền sở hữu (trừ luật khác)",
            "x": 80,
            "y": 1680,
            "size": 38,
            "at": "l5:ownership"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "đất, theo Luật Đất đai",
            "x": 80,
            "y": 1730,
            "size": 38,
            "at": "l6:land"
          },
          {
            "id": "f-oth",
            "t": "text",
            "text": "Ngoài hợp đồng, thừa kế: điều riêng",
            "x": 900,
            "y": 1780,
            "size": 40,
            "at": "l7:inheritance",
            "hl": [
              {
                "text": "điều riêng",
                "at": "l7:own article"
              }
            ]
          },
          {
            "id": "f-i",
            "t": "illus",
            "name": "hourglass-not-done",
            "x": 1300,
            "y": 1260,
            "size": 240,
            "at": "l1:Thursday"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday. The time limit.",
          "sub": "Thứ Năm. Thời hiệu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article one forty-nine: a legal period; when it ends, consequences follow.",
          "sub": "Khoản 1 Điều 149 Bộ luật Dân sự: thời hiệu là thời hạn luật định, hết thì phát sinh hậu quả pháp lý."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For contracts, Article four twenty-nine: three years, from when the claimant knew or should have known of the infringement.",
          "sub": "Hợp đồng, Điều 429: 03 năm, từ ngày người có quyền biết hoặc phải biết bị xâm phạm.",
          "keys": [
            "03 năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not from the signing date.",
          "sub": "Không phải từ ngày ký hợp đồng.",
          "keys": [
            "Không phải từ ngày ký"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Article one fifty-five: no time limit for personal rights without property, or ownership, barring other laws.",
          "sub": "Điều 155: không áp dụng thời hiệu với quyền nhân thân không gắn tài sản, quyền sở hữu, trừ luật khác."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Nor for land use right disputes under the Land Law, and other cases by law.",
          "sub": "Tranh chấp quyền sử dụng đất theo Luật Đất đai, và trường hợp luật định khác."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Torts or inheritance? Each has its own article. Don't default to three years.",
          "sub": "Bồi thường ngoài hợp đồng, thừa kế có điều riêng. Đừng mặc định ba năm.",
          "keys": [
            "Đừng mặc định ba năm"
          ]
        }
      ],
      "ref": "p11,p12"
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
            "text": "⑤ Tối thứ Năm · Lan tính",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:counts"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-calendar",
                "abacus"
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
            "caption": "21:00 · Lan ở nhà",
            "icon": "spiral-calendar"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "1 · Vay → Điều 429",
            "x": 2028,
            "y": 1255,
            "size": 44,
            "at": "l3:loan"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "2 · Mốc: ngày đến hạn không trả",
            "x": 2028,
            "y": 1325,
            "size": 44,
            "at": "l3:due",
            "hl": [
              {
                "text": "ngày đến hạn",
                "at": "l3:due date"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "3 · So với ngày nộp đơn",
            "x": 2028,
            "y": 1395,
            "size": 44,
            "at": "l4:filing"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "4 · Giấy hẹn trả? Thừa nhận nợ?",
            "x": 2028,
            "y": 1465,
            "size": 44,
            "at": "l4:promise",
            "color": "coral"
          },
          {
            "id": "g-4b",
            "t": "text",
            "text": "đối chiếu: thời gian không tính, bắt đầu lại",
            "x": 2058,
            "y": 1522,
            "size": 24,
            "at": "l4:restart",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "5 · Còn hay hết? Ai được lợi?",
            "x": 2028,
            "y": 1570,
            "size": 44,
            "at": "l5:benefits"
          },
          {
            "id": "g-r",
            "t": "text",
            "text": "Phép tính có mốc, đừng ước chừng",
            "x": 2028,
            "y": 1710,
            "size": 56,
            "at": "l6:guess",
            "color": "accent",
            "hl": [
              {
                "text": "đừng ước chừng",
                "at": "l6:guess"
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
          "say": "Thursday night. Lan counts a loan case, step by step.",
          "sub": "Tối thứ Năm. Lan tính thời hiệu một đề vay, từng bước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Mr A lent to Ms B. When did he learn his rights were hit?",
          "sub": "Ông A cho bà B vay. Lúc nào ông A biết quyền mình bị xâm phạm?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: a loan, so Article four twenty-nine. Two: the missed due date is usually the start. She writes why.",
          "sub": "Một: hợp đồng vay, Điều 429. Hai: ngày đến hạn không trả thường là mốc; Lan ghi rõ vì sao chọn.",
          "keys": [
            "ngày đến hạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: compare the filing date. Four: a repayment promise, an admitted debt? Check pause and restart rules.",
          "sub": "Ba: so với ngày nộp đơn. Bốn: có giấy hẹn trả, thừa nhận nợ không? Đối chiếu các điều về tạm ngưng, bắt đầu lại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Five: still running or expired, and who benefits.",
          "sub": "Năm: còn hay hết thời hiệu, bên nào được lợi."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A time limit is a calculation with a start date. Don't guess.",
          "sub": "Thời hiệu là phép tính có mốc, đừng ước chừng.",
          "keys": [
            "đừng ước chừng"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Hết thời hiệu thì toà tự bác đơn?",
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
          "say": "Time's up. Does the court reject the claim by itself?",
          "sub": "Hết thời hiệu thì toà tự bác đơn?",
          "keys": [
            "tự bác đơn"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Thứ Sáu 19:00 · nháp của Dũng",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "lan",
            "side": "right",
            "pose": "think"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“Hết thời hiệu nên Toà trả lại đơn”",
          "why": "Đề không nói bị đơn có yêu cầu áp dụng thời hiệu. Toà không tự áp dụng.",
          "rule": "Thời hiệu là quyền của đương sự, không phải nút bấm của toà"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Over three years. Time limit expired, so the court returns the claim. Done!",
          "sub": "Quá ba năm. Hết thời hiệu nên Toà trả lại đơn khởi kiện. Xong!",
          "face": "happy",
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
          "who": "lan",
          "say": "Did the defendant ask for the time limit to apply?",
          "sub": "Bị đơn đã yêu cầu áp dụng thời hiệu chưa?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Let me reread. The facts say nothing about that request.",
          "sub": "Đọc lại đã. Đề không nói gì về yêu cầu đó.",
          "phase": "redo",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The time limit belongs to the parties. It's not the court's button.",
          "sub": "Thời hiệu là quyền của đương sự, không phải nút bấm của toà.",
          "phase": "redo",
          "keys": [
            "không phải nút bấm của toà"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p17,p18"
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
            "text": "⑥ Thứ Sáu · Ai yêu cầu?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday",
            "hl": [
              {
                "text": "Ai yêu cầu",
                "at": "l1:who"
              }
            ]
          },
          {
            "id": "h-149",
            "t": "text",
            "text": "k2 Điều 149 BLDS",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l2:forty-nine"
          },
          {
            "id": "h-184",
            "t": "text",
            "text": "k2 Điều 184 BLTTDS",
            "x": 3996,
            "y": 1325,
            "size": 48,
            "at": "l2:eighty-four"
          },
          {
            "id": "h-ask",
            "t": "text",
            "text": "→ chỉ áp dụng khi có yêu cầu",
            "x": 3996,
            "y": 1400,
            "size": 50,
            "at": "l2:only",
            "color": "accent",
            "hl": [
              {
                "text": "có yêu cầu",
                "at": "l2:asks"
              }
            ]
          },
          {
            "id": "h-bf",
            "t": "text",
            "text": "trước khi sơ thẩm ra bản án",
            "x": 4016,
            "y": 1475,
            "size": 44,
            "at": "l3:before"
          },
          {
            "id": "h-tc",
            "t": "text",
            "text": "Được từ chối, trừ trốn nghĩa vụ",
            "x": 3996,
            "y": 1550,
            "size": 42,
            "at": "l4:refuse",
            "color": "muted"
          },
          {
            "id": "h-new",
            "t": "text",
            "text": "Điểm mới so với BLTTDS 2004 (ThS. Thân Văn Nhường)",
            "x": 4016,
            "y": 1605,
            "size": 26,
            "at": "l5:new",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "h-b1",
            "t": "box",
            "x": 3996,
            "y": 1660,
            "w": 760,
            "h": 150,
            "at": "l6:asks",
            "stroke": 4
          },
          {
            "id": "h-y",
            "t": "text",
            "text": "Có yêu cầu + đã hết",
            "x": 4026,
            "y": 1675,
            "size": 44,
            "at": "l6:asks"
          },
          {
            "id": "h-y2",
            "t": "text",
            "text": "→ đình chỉ (Điều 217)",
            "x": 4026,
            "y": 1735,
            "size": 48,
            "at": "l6:terminates",
            "color": "accent",
            "hl": [
              {
                "text": "đình chỉ",
                "at": "l6:terminates"
              }
            ]
          },
          {
            "id": "h-b2",
            "t": "box",
            "x": 4836,
            "y": 1660,
            "w": 760,
            "h": 150,
            "at": "l7:nobody",
            "stroke": 4
          },
          {
            "id": "h-n",
            "t": "text",
            "text": "Không ai yêu cầu",
            "x": 4866,
            "y": 1675,
            "size": 44,
            "at": "l7:nobody"
          },
          {
            "id": "h-n2",
            "t": "text",
            "text": "→ xử tiếp như thường",
            "x": 4866,
            "y": 1735,
            "size": 48,
            "at": "l7:continues",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday. So who asks, and when?",
          "sub": "Thứ Sáu. Vậy ai yêu cầu, và lúc nào?",
          "keys": [
            "lúc nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article one forty-nine and Article one eighty-four, clause two each: only when a party asks.",
          "sub": "Khoản 2 Điều 149 Bộ luật Dân sự và khoản 2 Điều 184 Bộ luật Tố tụng dân sự: chỉ khi có bên yêu cầu.",
          "keys": [
            "chỉ khi có bên yêu cầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And before the first instance court rules.",
          "sub": "Và trước khi toà sơ thẩm ra bản án, quyết định."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The person who benefits may refuse it, unless refusing dodges an obligation.",
          "sub": "Người được lợi có quyền từ chối, trừ khi từ chối để trốn tránh nghĩa vụ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The Court Journal calls this new since the twenty oh four code.",
          "sub": "Bài trên Tạp chí Toà án nhận xét đây là điểm mới so với Bộ luật 2004."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Someone asks in time, and it has expired? The court terminates the case: Article two seventeen, point e.",
          "sub": "Có yêu cầu kịp lúc, thời hiệu đã hết: toà đình chỉ theo điểm e khoản 1 Điều 217.",
          "keys": [
            "đình chỉ"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Nobody asks? The case continues as usual. So always ask: who asked, and when?",
          "sub": "Không ai yêu cầu: toà xử tiếp theo thủ tục chung. Vậy luôn hỏi: ai yêu cầu, lúc nào?",
          "keys": [
            "ai yêu cầu, lúc nào"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "text": "⑦ Thứ Bảy · Viết theo vai",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "point"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "balance-scale"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Cô Hoa",
            "caption": "Thứ Bảy · văn phòng",
            "icon": "balance-scale"
          },
          {
            "id": "i-bd",
            "t": "text",
            "text": "Luật sư bị đơn:",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l3:defendant",
            "color": "accent"
          },
          {
            "id": "i-bd1",
            "t": "text",
            "text": "ghi rõ yêu cầu áp dụng",
            "x": 5984,
            "y": 1330,
            "size": 42,
            "at": "l3:request"
          },
          {
            "id": "i-bd2",
            "t": "text",
            "text": "đưa sớm, trước bản án sơ thẩm",
            "x": 5984,
            "y": 1390,
            "size": 42,
            "at": "l3:early",
            "hl": [
              {
                "text": "đưa sớm",
                "at": "l3:early"
              }
            ]
          },
          {
            "id": "i-nd",
            "t": "text",
            "text": "Luật sư nguyên đơn:",
            "x": 5964,
            "y": 1480,
            "size": 50,
            "at": "l4:plaintiff",
            "color": "accent"
          },
          {
            "id": "i-nd1",
            "t": "text",
            "text": "kiểm thời hiệu trước khi kiện",
            "x": 5984,
            "y": 1550,
            "size": 42,
            "at": "l4:before filing"
          },
          {
            "id": "i-nd2",
            "t": "text",
            "text": "lập luận mốc bắt đầu tính",
            "x": 5984,
            "y": 1610,
            "size": 42,
            "at": "l4:start"
          },
          {
            "id": "i-nd3",
            "t": "text",
            "text": "tình tiết đổi cách tính",
            "x": 5984,
            "y": 1670,
            "size": 42,
            "at": "l4:change"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Saturday. Cô Hoa sets one last drill.",
          "sub": "Thứ Bảy. Cô Hoa ra bài tập cuối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Write by role. Whose lawyer are you?",
          "sub": "Viết theo vai. Em là luật sư của ai?",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For the defendant: request the time limit clearly, and early, before the first instance ruling.",
          "sub": "Luật sư bị đơn: ghi rõ yêu cầu áp dụng thời hiệu, đưa sớm, trước khi toà sơ thẩm ra bản án.",
          "keys": [
            "đưa sớm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "For the plaintiff: check it before filing, argue the start date, flag facts that change the count.",
          "sub": "Luật sư nguyên đơn: kiểm thời hiệu trước khi kiện, lập luận về mốc bắt đầu, nêu tình tiết có thể đổi cách tính."
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
            "text": "Chủ nhật 19:00 · Soát bản luật",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "books"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same café",
            "caption": "Chủ nhật 19:00 · cùng quán",
            "icon": "books"
          },
          {
            "id": "j-old",
            "t": "text",
            "text": "Bản in cũ: “cấp huyện”",
            "x": 7932,
            "y": 1260,
            "size": 48,
            "at": "l2:district",
            "color": "muted"
          },
          {
            "id": "j-oldx",
            "t": "strike",
            "over": "j-old",
            "at": "l2:consolidated"
          },
          {
            "id": "j-new",
            "t": "text",
            "text": "Bản hợp nhất: “khu vực” ✓",
            "x": 7932,
            "y": 1340,
            "size": 52,
            "at": "l2:regional",
            "color": "accent",
            "hl": [
              {
                "text": "khu vực",
                "at": "l2:regional"
              }
            ]
          },
          {
            "id": "j-ve",
            "t": "text",
            "text": "Nước ngoài? Vẫn toà khu vực",
            "x": 7932,
            "y": 1430,
            "size": 48,
            "at": "l3:abroad",
            "hl": [
              {
                "text": "toà khu vực",
                "at": "l3:regional"
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
          "say": "Sunday, seven p.m. Same café as Monday.",
          "sub": "Chủ nhật, bảy giờ tối. Vẫn quán của thứ Hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Old printout says district. The consolidated text says regional. The old one stays home.",
          "sub": "Bản in cũ ghi “cấp huyện”. Bản hợp nhất ghi “khu vực”. Bản cũ để ở nhà.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Ask me again. Party abroad? Regional court!",
          "sub": "Hỏi lại đi. Ở nước ngoài? Toà khu vực!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Once the pen drops, the chicken is dead. This week, the pen drops on the right line.",
          "sub": "“Bút sa gà chết.” Tuần này, bút sa đúng dòng.",
          "keys": [
            "bút sa đúng dòng"
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
            "fit": "J",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1520,
            "w": 38,
            "h": 38,
            "at": "l1:name",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1502,
            "size": 50,
            "at": "l1:name+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Tên: “Toà án nhân dân khu vực”",
            "x": 7990,
            "y": 1512,
            "size": 32,
            "at": "l1:name+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1574,
            "w": 38,
            "h": 38,
            "at": "l1:type",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1556,
            "size": 50,
            "at": "l1:type+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Loại việc: Điều 26 hoặc 30",
            "x": 7990,
            "y": 1566,
            "size": 32,
            "at": "l1:type+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1628,
            "w": 38,
            "h": 38,
            "at": "l1:level",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1610,
            "size": 50,
            "at": "l1:level+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Cấp: Điều 35 (Luật 85/2025)",
            "x": 7990,
            "y": 1620,
            "size": 32,
            "at": "l1:level+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1682,
            "w": 38,
            "h": 38,
            "at": "l2:territory",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1664,
            "size": 50,
            "at": "l2:territory+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Lãnh thổ: Điều 39, có thể 40",
            "x": 7990,
            "y": 1674,
            "size": 32,
            "at": "l2:territory+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1736,
            "w": 38,
            "h": 38,
            "at": "l2:time limit",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1718,
            "size": 50,
            "at": "l2:time limit+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Thời hiệu: Điều 429 hoặc điều riêng",
            "x": 7990,
            "y": 1728,
            "size": 32,
            "at": "l2:time limit+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1790,
            "w": 38,
            "h": 38,
            "at": "l3:applied",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1772,
            "size": 50,
            "at": "l3:applied+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "Áp dụng: k2 Đ149, k2 Đ184",
            "x": 7990,
            "y": 1782,
            "size": 32,
            "at": "l3:applied+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The checklist: regional court name, case type, Article thirty-five for level.",
          "sub": "Bảng soát: tên toà khu vực, loại việc Điều 26 hoặc 30, cấp theo Điều 35.",
          "keys": [
            "Bảng soát"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Territory under thirty-nine and forty, the time limit article.",
          "sub": "Lãnh thổ theo Điều 39, 40; điều thời hiệu cho đúng loại tranh chấp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And how it's applied: one forty-nine and one eighty-four, clause two.",
          "sub": "Và cách áp dụng: khoản 2 Điều 149, khoản 2 Điều 184."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Land, Commercial, Arbitration laws: amended until November twenty-first. Check after.",
          "sub": "Luật Đất đai, Thương mại, Trọng tài thương mại đang sửa đến 21/11/2026: kiểm lại sau kỳ họp."
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s19",
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
            "at": "l1:regional",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:formula",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:asked",
            "fit": "H",
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
            "x": 4836,
            "y": 340,
            "at": "l1:regional"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 700,
            "at": "l2:formula"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5436,
            "y": 1400,
            "at": "l3:asked"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài là kiến thức nghề để ôn thi, không phải tư vấn cho vụ việc cụ thể; luật đang sửa đổi, đối chiếu văn bản hiện hành.",
            "x": 7932,
            "y": 1830,
            "size": 22,
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
          "say": "So: first instance goes to the regional court, foreign element or not.",
          "sub": "Tóm lại: sơ thẩm ở toà khu vực, có yếu tố nước ngoài cũng vậy.",
          "keys": [
            "toà khu vực"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Territory: write the formula, the rule, the option and why.",
          "sub": "Lãnh thổ: viết theo công thức, quy tắc, lựa chọn và vì sao."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the time limit: count from a date, then check who asked, and when.",
          "sub": "Và thời hiệu: tính từ một mốc, rồi hỏi ai yêu cầu, lúc nào.",
          "keys": [
            "ai yêu cầu, lúc nào"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "data": {
        "q": "A party asks for limitation in time and the period has expired, what happens?",
        "options": [
          "The court sends the file to the police for a criminal investigation",
          "The court doubles the claim as a penalty for the late filing",
          "The court terminates the case under the rule on termination of proceedings"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "hourglass-done",
        "why": "Theo bài trên Tạp chí Toà án, toà đình chỉ giải quyết vụ án theo điểm e khoản 1 Điều 217. Nếu không ai yêu cầu, toà tiếp tục giải quyết theo thủ tục chung."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A party asks for limitation in time and the period has expired, what happens?",
          "sub": "Một bên yêu cầu áp dụng thời hiệu kịp lúc và thời hiệu đã hết, điều gì xảy ra?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The court terminates the case, under Article two seventeen.",
          "sub": "Toà đình chỉ giải quyết vụ án, theo điểm e khoản 1 Điều 217."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[30]"
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Mở bộ luật của bạn, tìm Điều 35",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your move: open the code you'll bring, find Article thirty-five. Regional court? Then the forty questions below!",
          "sub": "Việc làm ngay: mở bộ luật, tìm Điều 35, xem đã ghi toà khu vực chưa. Rồi thử bốn mươi câu bên dưới!",
          "face": "laugh"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-21",
  "notes": "#145 dựng mới theo hạt nhân #136 + biến thể #144 (bang-trang-kit): Đét đứng trái + một bảng trắng 10 ô theo TUẦN CUỐI TRƯỚC KỲ THI của nhóm Thảo (thứ Hai 19:00 ở quán: Dũng đoán “toà tỉnh”, Thảo ôm bản luật in cũ còn chữ “cấp huyện” → thứ Hai toà khu vực, toà chuyên trách → thứ Ba Cô Hoa hỏi toà tỉnh làm gì → thứ Tư lãnh thổ (đề Công ty A/B của Dũng) → thứ Năm thời hiệu → tối thứ Năm Lan làm mẫu → thứ Sáu Khoan đã! “trả lại đơn” + ai yêu cầu, lúc nào → thứ Bảy viết theo vai → Chủ nhật 19:00 cùng quán, bản hợp nhất “khu vực”, khép vòng với câu đố mở đầu và “Bút sa gà chết”). Mở HOOK-21 (câu hỏi để đoán sai: yếu tố nước ngoài → toà tỉnh hay khu vực, lặng 1,5 s rồi lật — p3, p4). Nhân vật (4): Thảo, Dũng (thay Tuấn p9, p17), Lan (thay Ngân p13, p17), Cô Hoa — xem w145/_series/bar-exam-written1-civil.md. Ngắt nhịp: BRK-08 (tuần cuối), BRK-04 (hai cách của Dũng, p9), BRK-10 (rút ra p10), BRK-07 (rehook: toà tự bác đơn?). Điều luật, mốc chỉ lấy từ bài: Luật 85/2025/QH15 (25/6/2025, 01/7/2025); Đ26, 28, 30, 32, 35, 36, 37, 39, 40 điểm g, 41, 184 k2, 217 điểm e BLTTDS; Đ149, 155, 429 BLDS; Hà Nội, Đà Nẵng, TP HCM (trọng tài); kỳ họp đến 21/11/2026. Câu đố questions[30]. Lưu ý chung cuối bài (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s17"
  }
};
