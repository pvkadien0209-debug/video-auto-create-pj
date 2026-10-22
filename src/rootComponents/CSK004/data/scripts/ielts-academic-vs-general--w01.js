// ielts-academic-vs-general--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-academic-vs-general--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "ielts-first-time-takers",
    "slug": "ielts-academic-vs-general",
    "door": "kien-thuc",
    "level": "B1",
    "title": "IELTS Academic hay General Training: mình nên thi loại nào?",
    "series": "IELTS lần đầu không bỡ ngỡ — cho học sinh, sinh viên hiểu bài thi, chọn loại thi và đăng ký đúng"
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
            "text": "30/40",
            "x": 60,
            "y": 90,
            "size": 150,
            "at": "l1:thirty",
            "color": "accent",
            "hl": [
              {
                "text": "30/40",
                "at": "l1:forty"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "câu Đọc đúng",
            "x": 520,
            "y": 150,
            "size": 60,
            "at": "l1:Reading"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Band nào cao hơn?",
            "x": 60,
            "y": 300,
            "size": 64,
            "at": "l2:higher",
            "hl": [
              {
                "text": "cao hơn",
                "at": "l2:higher"
              }
            ]
          },
          {
            "id": "a-b1",
            "t": "box",
            "x": 60,
            "y": 420,
            "w": 520,
            "h": 110,
            "at": "l2:Academic",
            "stroke": 5
          },
          {
            "id": "a-o1",
            "t": "text",
            "text": "Academic",
            "x": 100,
            "y": 438,
            "size": 60,
            "at": "l2:Academic+200"
          },
          {
            "id": "a-b2",
            "t": "box",
            "x": 640,
            "y": 420,
            "w": 700,
            "h": 110,
            "at": "l2:General",
            "stroke": 5
          },
          {
            "id": "a-o2",
            "t": "text",
            "text": "General Training",
            "x": 680,
            "y": 438,
            "size": 60,
            "at": "l2:General+200"
          },
          {
            "id": "a-g",
            "t": "text",
            "text": "Đoán thử…",
            "x": 1380,
            "y": 445,
            "size": 56,
            "at": "l3:guess",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "You get thirty out of forty right in IELTS Reading.",
          "sub": "Bạn làm đúng 30 trên 40 câu Đọc IELTS.",
          "keys": [
            "30 trên 40 câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Academic or General Training: which one gives the higher band? Most people bet on General.",
          "sub": "Academic hay General Training: loại nào cho band cao hơn? Đa số đặt cược vào General.",
          "keys": [
            "band cao hơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Take a guess.",
          "sub": "Đoán thử xem."
        }
      ],
      "beats": {
        "after": 1500
      },
      "ref": "p4"
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
          }
        ],
        "items": [
          {
            "id": "a-r1",
            "t": "text",
            "text": "≈ band 7",
            "x": 140,
            "y": 545,
            "size": 52,
            "at": "l1:seven",
            "color": "accent",
            "hl": [
              {
                "text": "band 7",
                "at": "l1:seven"
              }
            ]
          },
          {
            "id": "a-r2",
            "t": "text",
            "text": "≈ band 6",
            "x": 760,
            "y": 545,
            "size": 52,
            "at": "l1:six",
            "color": "muted"
          },
          {
            "id": "a-gx",
            "t": "strike",
            "over": "a-g",
            "at": "l1:table"
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "Đề dễ hơn → thang chặt hơn",
            "x": 60,
            "y": 640,
            "size": 52,
            "at": "l2:stricter",
            "color": "coral",
            "hl": [
              {
                "text": "thang chặt hơn",
                "at": "l2:stricter"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: IELTS.org — IELTS scoring in detail (bảng tham khảo)",
            "x": 60,
            "y": 725,
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
          "say": "On the IELTS reference table: about band seven in Academic, only about band six in General Training.",
          "sub": "Theo bảng tham khảo trên trang IELTS: khoảng band 7 ở Academic, chỉ khoảng band 6 ở General Training.",
          "keys": [
            "khoảng band 7"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Easier texts, stricter scale. More on that at stop two.",
          "sub": "Đề dễ hơn thì thang chặt hơn. Chặng hai sẽ nói rõ.",
          "keys": [
            "thang chặt hơn"
          ]
        }
      ],
      "ref": "p4,p5"
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
          },
          {
            "at": "l3",
            "fit": [
              "b-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 120,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "surprised"
                }
              ],
              "props": [
                "laptop",
                "memo"
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
            "caption": "Thứ Hai 19:00 · nhà Thảo",
            "icon": "laptop"
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "5 cánh cửa",
            "x": 2028,
            "y": 120,
            "size": 72,
            "at": "l3:Five",
            "color": "coral",
            "hl": [
              {
                "text": "5 cánh cửa",
                "at": "l3:Five doors"
              }
            ]
          },
          {
            "id": "b-d1",
            "t": "text",
            "text": "Academic · General Training",
            "x": 2028,
            "y": 230,
            "size": 40,
            "at": "l3:Academic"
          },
          {
            "id": "b-d2",
            "t": "text",
            "text": "UKVI Academic · UKVI General",
            "x": 2028,
            "y": 295,
            "size": 40,
            "at": "l3:UKVI"
          },
          {
            "id": "b-d3",
            "t": "text",
            "text": "Life Skills",
            "x": 2028,
            "y": 360,
            "size": 40,
            "at": "l3:Life"
          },
          {
            "id": "b-ca",
            "t": "text",
            "text": "“Nhập gia tuỳ tục”",
            "x": 2028,
            "y": 450,
            "size": 60,
            "at": "l4:customs",
            "color": "accent",
            "hl": [
              {
                "text": "Nhập gia tuỳ tục",
                "at": "l4:customs"
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
          "say": "Meet Dũng, second year student, first time IELTS taker.",
          "sub": "Đây là Dũng, sinh viên năm hai, lần đầu thi IELTS.",
          "keys": [
            "lần đầu thi IELTS"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Monday, seven p.m., at his cousin's place. He opens the booking page and freezes.",
          "sub": "Bảy giờ tối thứ Hai, ở nhà chị họ. Cậu mở trang đăng ký và đứng hình."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Academic, General Training, UKVI Academic, UKVI General, Life Skills. Five doors!",
          "sub": "Academic, General Training, UKVI Academic, UKVI General, Life Skills. Năm cánh cửa!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Wrong door means lost money and time. The elders say: enter a house, follow its customs.",
          "sub": "Chọn nhầm là mất cả tiền lẫn thời gian. Ông bà dặn: “Nhập gia tuỳ tục.”",
          "keys": [
            "Nhập gia tuỳ tục"
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
            "id": "b-q",
            "t": "text",
            "text": "Academic hay General?",
            "x": 2028,
            "y": 535,
            "size": 52,
            "at": "l1:which",
            "hl": [
              {
                "text": "hay",
                "at": "l1:or"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "đề đồn dễ hơn",
            "x": 2028,
            "y": 615,
            "size": 44,
            "at": "l2:rumoured",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:receiver"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "→ loại nơi nhận yêu cầu",
            "x": 2348,
            "y": 615,
            "size": 44,
            "at": "l2:receiver",
            "color": "accent",
            "hl": [
              {
                "text": "nơi nhận",
                "at": "l2:receiver"
              }
            ]
          },
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 692,
            "w": 215,
            "h": 66,
            "at": "l3:seven+400",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2263,
            "y": 692,
            "w": 215,
            "h": 66,
            "at": "l3:seven+650",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2498,
            "y": 692,
            "w": 215,
            "h": 66,
            "at": "l3:seven+900",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 2733,
            "y": 692,
            "w": 215,
            "h": 66,
            "at": "l3:seven+1150",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-s4",
            "t": "box",
            "x": 2968,
            "y": 692,
            "w": 215,
            "h": 66,
            "at": "l3:seven+1400",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s5",
            "t": "box",
            "x": 3203,
            "y": 692,
            "w": 215,
            "h": 66,
            "at": "l3:seven+1650",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-s6",
            "t": "box",
            "x": 3438,
            "y": 692,
            "w": 215,
            "h": 66,
            "at": "l3:seven+1900",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "19:15",
            "x": 2056,
            "y": 700,
            "size": 40,
            "at": "l3:seven+520"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "19:45",
            "x": 2291,
            "y": 700,
            "size": 40,
            "at": "l3:seven+770"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "20:15",
            "x": 2526,
            "y": 700,
            "size": 40,
            "at": "l3:seven+1020"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "21:00",
            "x": 2761,
            "y": 700,
            "size": 40,
            "at": "l3:seven+1270"
          },
          {
            "id": "b-st4",
            "t": "text",
            "text": "21:30",
            "x": 2996,
            "y": 700,
            "size": 40,
            "at": "l3:seven+1520"
          },
          {
            "id": "b-st5",
            "t": "text",
            "text": "22:00",
            "x": 3231,
            "y": 700,
            "size": 40,
            "at": "l3:seven+1770"
          },
          {
            "id": "b-st6",
            "t": "text",
            "text": "22:30",
            "x": 3466,
            "y": 700,
            "size": 40,
            "at": "l3:seven+2020"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So which one should you take: Academic or General Training?",
          "sub": "Vậy nên thi loại nào: Academic hay General Training?",
          "keys": [
            "nên thi loại nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not the one rumoured easier. The one your receiver asks for. Their house, their customs.",
          "sub": "Không phải loại đồn là dễ hơn, mà là loại nơi nhận yêu cầu. Nhà người ta, tục người ta.",
          "keys": [
            "loại nơi nhận yêu cầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One evening, seven stops, before Dũng pays a single dong.",
          "sub": "Một buổi tối, bảy chặng, trước khi Dũng trả một đồng nào."
        }
      ],
      "ref": "intro,p8"
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
            "text": "① 19:15 · Giống và khác",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 150,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "laptop",
                "books"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Thảo",
            "caption": "19:15 · bàn học nhà Thảo",
            "icon": "books"
          },
          {
            "id": "c-s",
            "t": "text",
            "text": "Nghe, Nói: là một",
            "x": 3996,
            "y": 170,
            "size": 52,
            "at": "l2:same",
            "hl": [
              {
                "text": "là một",
                "at": "l2:same"
              }
            ]
          },
          {
            "id": "c-d",
            "t": "text",
            "text": "Đọc, Viết: khác",
            "x": 3996,
            "y": 250,
            "size": 52,
            "at": "l2:differ",
            "color": "coral",
            "hl": [
              {
                "text": "khác",
                "at": "l2:differ"
              }
            ]
          },
          {
            "id": "c-tm",
            "t": "text",
            "text": "Đọc 60 phút · Viết 60 phút",
            "x": 3996,
            "y": 330,
            "size": 44,
            "at": "l3:sixty"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: British Council — IELTS test format",
            "x": 4836,
            "y": 725,
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
          "say": "Stop one, seven fifteen. Meet Thảo, Dũng's cousin, already preparing IELTS Academic.",
          "sub": "Chặng một, bảy giờ mười lăm. Đây là Thảo, chị họ Dũng, đang luyện IELTS Academic.",
          "keys": [
            "chị họ Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First: listening and speaking are the same in both. Only reading and writing differ.",
          "sub": "Thứ nhất: Nghe và Nói hai loại là một. Chỉ Đọc và Viết khác.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same timing too: reading sixty minutes, writing sixty minutes.",
          "sub": "Thời gian cũng như nhau: Đọc 60 phút, Viết 60 phút."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
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
            "id": "c-h1",
            "t": "text",
            "text": "Academic",
            "x": 3996,
            "y": 420,
            "size": 46,
            "at": "l1:Academic",
            "color": "accent"
          },
          {
            "id": "c-h2",
            "t": "text",
            "text": "General Training",
            "x": 4396,
            "y": 420,
            "size": 46,
            "at": "l2:General",
            "color": "accent"
          },
          {
            "id": "c-r1",
            "t": "text",
            "text": "3 bài học thuật",
            "x": 3996,
            "y": 490,
            "size": 40,
            "at": "l1:three",
            "hl": [
              {
                "text": "3 bài",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "c-r2",
            "t": "text",
            "text": "5–6 bài ngắn",
            "x": 4396,
            "y": 490,
            "size": 40,
            "at": "l2:five",
            "hl": [
              {
                "text": "5–6 bài",
                "at": "l2:five"
              }
            ]
          },
          {
            "id": "c-w1",
            "t": "text",
            "text": "báo cáo + luận",
            "x": 3996,
            "y": 570,
            "size": 40,
            "at": "l3:report"
          },
          {
            "id": "c-w2",
            "t": "text",
            "text": "thư + luận",
            "x": 4396,
            "y": 570,
            "size": 40,
            "at": "l4:letter",
            "hl": [
              {
                "text": "thư",
                "at": "l4:letter"
              }
            ]
          },
          {
            "id": "c-40",
            "t": "text",
            "text": "Đọc 40 câu · Viết 2 bài",
            "x": 3996,
            "y": 650,
            "size": 38,
            "at": "l1:forty",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Reading: forty questions in both. Academic gives three passages from academic texts.",
          "sub": "Đọc: cả hai đều 40 câu. Academic gồm ba bài đọc từ văn bản học thuật.",
          "keys": [
            "ba bài đọc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "General Training gives five or six short everyday texts: notices, adverts, workplace papers.",
          "sub": "General Training gồm năm đến sáu văn bản ngắn đời thường: thông báo, quảng cáo, tài liệu nơi làm việc.",
          "keys": [
            "năm đến sáu văn bản ngắn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Writing: two tasks in both. Academic: a report style task and a formal essay.",
          "sub": "Viết: cả hai đều hai bài. Academic: một bài dạng báo cáo và một bài luận trang trọng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "General Training: a letter and a formal essay.",
          "sub": "General Training: một lá thư và một bài luận trang trọng.",
          "keys": [
            "một lá thư"
          ]
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
            "text": "② 19:45 · Vì sao khác band?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "books",
                "red-question-mark"
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
            "at": "l1:puzzle",
            "caption": "19:45 · câu đố mở đầu",
            "icon": "red-question-mark"
          },
          {
            "id": "d-e",
            "t": "text",
            "text": "Văn bản dễ hơn",
            "x": 5964,
            "y": 170,
            "size": 52,
            "at": "l3:Easier"
          },
          {
            "id": "d-m",
            "t": "text",
            "text": "→ phải đúng nhiều câu hơn",
            "x": 5964,
            "y": 250,
            "size": 48,
            "at": "l3:more",
            "color": "coral",
            "hl": [
              {
                "text": "nhiều câu hơn",
                "at": "l3:more correct"
              }
            ]
          },
          {
            "id": "d-a",
            "t": "text",
            "text": "30 câu: Academic ≈ 7",
            "x": 5964,
            "y": 350,
            "size": 50,
            "at": "l4:Academic",
            "color": "accent"
          },
          {
            "id": "d-g",
            "t": "text",
            "text": "30 câu: General ≈ 6",
            "x": 5964,
            "y": 430,
            "size": 50,
            "at": "l4:General"
          },
          {
            "id": "d-sh",
            "t": "text",
            "text": "ngưỡng có thể lệch đôi chút",
            "x": 5964,
            "y": 510,
            "size": 40,
            "at": "l4:shift",
            "color": "muted"
          },
          {
            "id": "d-run",
            "t": "text",
            "text": "đường bằng → phải chạy nhanh hơn",
            "x": 5964,
            "y": 600,
            "size": 42,
            "at": "l5:flat",
            "color": "accent",
            "hl": [
              {
                "text": "chạy nhanh hơn",
                "at": "l5:faster"
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
          "say": "Stop two, seven forty five. Back to our opening puzzle.",
          "sub": "Chặng hai, bảy giờ bốn lăm. Quay lại câu đố mở đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "General texts are easier. So General is easier to score high, right?",
          "sub": "Đề General dễ đọc hơn. Vậy General dễ lấy band cao hơn, đúng không?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Easier texts mean you need more correct answers for the same band.",
          "sub": "Văn bản dễ hơn thì phải đúng nhiều câu hơn mới được cùng band.",
          "keys": [
            "đúng nhiều câu hơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thirty right: about seven in Academic, about six in General. Exact cut offs can shift a little between tests.",
          "sub": "Đúng 30 câu: khoảng 7 ở Academic, khoảng 6 ở General. Ngưỡng cụ thể có thể lệch đôi chút giữa các đề."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Like a race on a flat road: an easier course, so you must run faster for the same medal.",
          "sub": "Như chạy trên đường bằng: đường dễ hơn thì phải chạy nhanh hơn mới cùng huy chương.",
          "keys": [
            "chạy nhanh hơn"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "Đọc General",
        "wrong": "General dễ lấy band cao",
        "right": "Đề dễ hơn thì thang chặt hơn",
        "wrongIllus": "money-with-wings",
        "rightIllus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "General Training, the easy band?",
          "sub": "General Training dễ lấy band?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Easier texts, stricter scale.",
          "sub": "Đề dễ hơn thì thang chặt hơn.",
          "keys": [
            "thang chặt hơn"
          ]
        }
      ],
      "ref": "p5"
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
            "text": "③ 20:15 · Mục đích nào, loại nào?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-ac",
            "t": "text",
            "text": "Đại học, sau đại học → Academic",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:university",
            "color": "accent",
            "hl": [
              {
                "text": "Academic",
                "at": "l2:Academic"
              }
            ]
          },
          {
            "id": "e-gt",
            "t": "text",
            "text": "Đi làm, định cư → thường General",
            "x": 7932,
            "y": 250,
            "size": 46,
            "at": "l3:migration"
          },
          {
            "id": "e-gv",
            "t": "text",
            "text": "nhiều chính phủ nhận cho định cư",
            "x": 7972,
            "y": 320,
            "size": 38,
            "at": "l3:governments",
            "color": "muted"
          },
          {
            "id": "e-hc",
            "t": "text",
            "text": "Ngành y tế: có thể đòi Academic",
            "x": 7932,
            "y": 400,
            "size": 44,
            "at": "l4:healthcare",
            "color": "coral",
            "hl": [
              {
                "text": "y tế",
                "at": "l4:healthcare"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: British Council — test types",
            "x": 7932,
            "y": 725,
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
          "say": "Stop three, eight fifteen. Which purpose fits which type?",
          "sub": "Chặng ba, tám giờ mười lăm. Mục đích nào hợp loại nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "British Council: for university or postgraduate study in English, take Academic.",
          "sub": "British Council hướng dẫn: học đại học, sau đại học bằng tiếng Anh thì thi Academic.",
          "keys": [
            "thi Academic"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Work abroad, migration, study below degree level: usually General Training. Many governments accept it for migration.",
          "sub": "Đi làm nước ngoài, định cư, học dưới bậc đại học: thường là General Training; nhiều chính phủ nhận cho hồ sơ định cư."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But some employers and professional bodies, like healthcare, may ask for Academic.",
          "sub": "Nhưng một số nhà tuyển dụng, tổ chức nghề nghiệp, như ngành y tế, có thể yêu cầu Academic.",
          "keys": [
            "ngành y tế"
          ]
        }
      ],
      "ref": "p6"
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
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 8772,
            "y": 150,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung"
                }
              ],
              "left": {
                "label": "Cách A: chọn General",
                "ok": false
              },
              "right": {
                "label": "Cách B: đọc yêu cầu trước",
                "ok": true
              }
            },
            "at": "l1:versions",
            "caption": "Cùng một hồ sơ du học",
            "icon": "graduation-cap"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "A: General → thi lại từ đầu",
            "x": 7932,
            "y": 490,
            "size": 44,
            "at": "a2:again",
            "color": "coral"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "B: đọc trang tuyển sinh trước",
            "x": 7932,
            "y": 560,
            "size": 44,
            "at": "b1:Admission",
            "color": "accent"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Đọc yêu cầu trước, chọn sau",
            "x": 7932,
            "y": 640,
            "size": 52,
            "at": "l4:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Đọc yêu cầu trước",
                "at": "l4:requirements first"
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
          "say": "Dũng wants to study a degree abroad next year. Two versions.",
          "sub": "Dũng muốn sang năm học tiếp đại học ở nước ngoài. Hai phiên bản."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "General reading is lighter. I'll take General and practise letters!",
          "sub": "Đọc General nhẹ hơn. Em thi General, ôn viết thư!",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "dung",
          "say": "Wait. The university says IELTS Academic. I have to book it all again!",
          "sub": "Ơ, trường ghi rõ IELTS Academic. Em phải đăng ký thi lại từ đầu!",
          "phase": "a",
          "face": "surprised"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "Admission page first. It says Academic, so I practise only Academic reading and writing.",
          "sub": "Mở trang tuyển sinh trước. Trường cần Academic, em chỉ ôn đúng Đọc, Viết Academic.",
          "phase": "b",
          "face": "thinking"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "dung",
          "say": "And my first result goes straight into my application.",
          "sub": "Và kết quả lần đầu dùng ngay cho hồ sơ.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: read the requirements first, choose the type second.",
          "sub": "Rút ra: đọc yêu cầu trước, chọn loại thi sau.",
          "keys": [
            "đọc yêu cầu trước"
          ]
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
            "text": "④ 21:00 · Hỏi nơi nhận",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-who",
            "t": "text",
            "text": "Trường · học bổng · công ty · thị thực",
            "x": 60,
            "y": 1230,
            "size": 40,
            "at": "l1:university",
            "color": "muted"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1320,
            "w": 44,
            "h": 44,
            "at": "l3:type",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1302,
            "size": 56,
            "at": "l3:type+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Academic hay General",
            "x": 125,
            "y": 1312,
            "size": 40,
            "at": "l3:type+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1395,
            "w": 44,
            "h": 44,
            "at": "l3:UKVI",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1377,
            "size": 56,
            "at": "l3:UKVI+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Có cần UKVI không",
            "x": 125,
            "y": 1387,
            "size": 40,
            "at": "l3:UKVI+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1470,
            "w": 44,
            "h": 44,
            "at": "l3:overall",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1452,
            "size": 56,
            "at": "l3:overall+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Band Overall tối thiểu",
            "x": 125,
            "y": 1462,
            "size": 40,
            "at": "l3:overall+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1545,
            "w": 44,
            "h": 44,
            "at": "l3:per skill",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1527,
            "size": 56,
            "at": "l3:per skill+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Band từng kỹ năng",
            "x": 125,
            "y": 1537,
            "size": 40,
            "at": "l3:per skill+200"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 900,
            "y": 1320,
            "w": 44,
            "h": 44,
            "at": "l4:valid",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 904,
            "y": 1302,
            "size": 56,
            "at": "l4:valid+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Kết quả còn bao lâu",
            "x": 965,
            "y": 1312,
            "size": 40,
            "at": "l4:valid+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 900,
            "y": 1395,
            "w": 44,
            "h": 44,
            "at": "l4:Retake",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 904,
            "y": 1377,
            "size": 56,
            "at": "l4:Retake+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Nhận One Skill Retake?",
            "x": 965,
            "y": 1387,
            "size": 40,
            "at": "l4:Retake+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 900,
            "y": 1470,
            "w": 44,
            "h": 44,
            "at": "l4:deadline",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 904,
            "y": 1452,
            "size": 56,
            "at": "l4:deadline+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Hạn cuối nộp kết quả",
            "x": 965,
            "y": 1462,
            "size": 40,
            "at": "l4:deadline+200"
          },
          {
            "id": "f-ask",
            "t": "text",
            "text": "Không rõ? Hỏi thẳng phòng tuyển sinh",
            "x": 60,
            "y": 1650,
            "size": 44,
            "at": "l2:Unclear",
            "color": "accent",
            "hl": [
              {
                "text": "Hỏi thẳng",
                "at": "l2:directly"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: British Council — test types (kiểm trang chính thức trước khi đặt lịch)",
            "x": 60,
            "y": 1815,
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
          "say": "Stop four, nine p.m. Who receives your result? A university here or abroad, a scholarship, an employer, a visa office.",
          "sub": "Chặng bốn, chín giờ tối. Nơi nhận là ai? Trường trong, ngoài nước, học bổng, nhà tuyển dụng, cơ quan thị thực."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "British Council advises: check the official page before booking. Unclear? Ask admissions directly.",
          "sub": "British Council khuyên: xem trang chính thức trước khi đặt lịch. Không rõ thì hỏi thẳng phòng tuyển sinh.",
          "keys": [
            "hỏi thẳng phòng tuyển sinh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Seven things to ask: the type, UKVI or not, the overall band, the band per skill,",
          "sub": "Bảy điều cần hỏi: loại thi, có cần UKVI không, band Overall, band từng kỹ năng,"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "how long results must stay valid, whether they accept One Skill Retake, and the final deadline.",
          "sub": "kết quả phải còn trong bao lâu, có nhận One Skill Retake không, và hạn cuối nộp kết quả."
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "21:15 · Dũng viết email",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“Trường có nhận IELTS không ạ?”",
          "why": "Câu này chỉ nhận về chữ “Có”. Hỏi đủ: loại thi, band Overall và từng kỹ năng, hạn hiệu lực, One Skill Retake.",
          "rule": "Hỏi một câu đủ ý, đỡ hỏi lại năm lần"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Email to admissions: do you accept IELTS? Send!",
          "sub": "Email gửi phòng tuyển sinh: “Trường có nhận IELTS không ạ?” Gửi!",
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
          "say": "That question buys you one word back: yes.",
          "sub": "Câu đó chỉ đổi về đúng một chữ: “Có”.",
          "keys": [
            "một chữ"
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
          "say": "Academic or General? Minimum bands? Valid until when? Do you accept One Skill Retake?",
          "sub": "Cần Academic hay General? Band tối thiểu? Còn hiệu lực đến khi nào? Có nhận One Skill Retake không ạ?",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. One complete question saves asking five times.",
          "sub": "Đúng. Hỏi một câu đủ ý, đỡ hỏi lại năm lần.",
          "phase": "redo",
          "keys": [
            "Hỏi một câu đủ ý"
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
            "text": "⑤ 21:30 · Trong nước thì sao?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right"
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
            "at": "l1:university",
            "caption": "21:30 · thông báo của trường",
            "icon": "school"
          },
          {
            "id": "g-r",
            "t": "text",
            "text": "Quy chế Bộ + đề án từng trường",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l3:rules"
          },
          {
            "id": "g-y",
            "t": "text",
            "text": "có thể đổi theo năm",
            "x": 2068,
            "y": 1335,
            "size": 44,
            "at": "l3:yearly",
            "color": "coral",
            "hl": [
              {
                "text": "đổi theo năm",
                "at": "l3:yearly"
              }
            ]
          },
          {
            "id": "g-c",
            "t": "text",
            "text": "Đọc bản hiện hành",
            "x": 2028,
            "y": 1420,
            "size": 48,
            "at": "l4:this year",
            "color": "accent"
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "không ghi loại → email hỏi",
            "x": 2028,
            "y": 1500,
            "size": 44,
            "at": "l4:Type"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Cả hai cùng nhận Academic",
            "x": 2028,
            "y": 1590,
            "size": 46,
            "at": "l5:both accept",
            "hl": [
              {
                "text": "Academic",
                "at": "l5:Academic"
              }
            ]
          },
          {
            "id": "g-2b",
            "t": "text",
            "text": "→ một lần thi, hai việc",
            "x": 2068,
            "y": 1665,
            "size": 46,
            "at": "l5:serve",
            "color": "accent",
            "hl": [
              {
                "text": "một lần thi",
                "at": "l5:one test"
              }
            ]
          },
          {
            "id": "g-v2",
            "t": "text",
            "text": "miễn còn hạn ở mỗi nơi",
            "x": 2068,
            "y": 1740,
            "size": 40,
            "at": "l5:valid",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, nine thirty. Dũng's own university also takes IELTS for its foreign language exemption.",
          "sub": "Chặng năm, chín rưỡi. Trường của Dũng cũng nhận IELTS để miễn thi ngoại ngữ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Does my school care which type? The notice just says IELTS.",
          "sub": "Trường em có quan tâm loại nào không? Thông báo chỉ ghi IELTS.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "At home, the education ministry's rules and each school's admission plan decide, and they can change yearly.",
          "sub": "Trong nước: quy chế của Bộ Giáo dục và Đào tạo, đề án của từng trường quyết định, có thể đổi theo năm.",
          "keys": [
            "có thể đổi theo năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Read the version for this year. Type not written? Ask with that same email.",
          "sub": "Đọc bản hiện hành của năm bạn nộp. Không ghi loại IELTS? Hỏi bằng email như mẫu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Need both, here and abroad? If both accept Academic, one test can serve both, if still valid for each.",
          "sub": "Cần cả trong nước lẫn du học? Nếu cả hai cùng nhận Academic, một lần thi dùng được cho cả hai, miễn còn hạn ở mỗi nơi.",
          "keys": [
            "một lần thi dùng được cho cả hai"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s13",
      "module": "BRK-05",
      "data": {
        "title": "Đến đây, Dũng đã biết",
        "points": [
          "Nghe, Nói chung; Đọc, Viết riêng",
          "Nơi nhận chọn loại thi",
          "Hỏi một câu đủ ý"
        ],
        "illus": "light-bulb"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Quick recap.",
          "sub": "Nhắc nhanh."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Listening and speaking shared. Reading and writing separate.",
          "sub": "Nghe, Nói chung; Đọc, Viết riêng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The receiver picks the type.",
          "sub": "Nơi nhận chọn loại thi.",
          "keys": [
            "Nơi nhận chọn loại thi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "Ask one complete question.",
          "sub": "Hỏi một câu đủ ý."
        }
      ],
      "ref": "p1,p8,p12"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 22:00 · IELTS for UKVI",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "surprised"
                }
              ],
              "props": [
                "passport-control",
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:door",
            "caption": "22:00 · cánh cửa thứ ba",
            "icon": "passport-control"
          },
          {
            "id": "h-w",
            "t": "text",
            "text": "Cho thị thực Vương quốc Anh",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l3:visa"
          },
          {
            "id": "h-s",
            "t": "text",
            "text": "Đề, định dạng: giống hệt",
            "x": 3996,
            "y": 1340,
            "size": 50,
            "at": "l4:Same",
            "color": "accent",
            "hl": [
              {
                "text": "giống hệt",
                "at": "l4:Same"
              }
            ]
          },
          {
            "id": "h-c",
            "t": "text",
            "text": "Khác: điểm thi UKVI, an ninh",
            "x": 3996,
            "y": 1420,
            "size": 44,
            "at": "l4:centre"
          },
          {
            "id": "h-ls",
            "t": "text",
            "text": "Life Skills: chỉ Nghe, Nói",
            "x": 3996,
            "y": 1500,
            "size": 44,
            "at": "l5:Life"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: British Council — test types",
            "x": 3996,
            "y": 1815,
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
          "say": "Stop six, ten p.m. Dũng stares at door number three: IELTS for UKVI.",
          "sub": "Chặng sáu, mười giờ tối. Dũng nhìn chằm chằm cánh cửa thứ ba: IELTS for UKVI."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "UKVI sounds serious. Is it a harder exam?",
          "sub": "UKVI nghe nghiêm trọng quá. Có phải đề khó hơn không?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It's the IELTS version for UK visa applications, Academic or General Training, at official UKVI centres.",
          "sub": "Đó là phiên bản IELTS cho hồ sơ thị thực Vương quốc Anh, có Academic và General Training, thi tại điểm UKVI chính thức."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Same content, same format. The difference is the centre, with extra security steps.",
          "sub": "Nội dung, định dạng giống hệt. Khác ở điểm thi, với quy trình an ninh bổ sung.",
          "keys": [
            "giống hệt"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Some visa types need only IELTS Life Skills, which tests listening and speaking.",
          "sub": "Một số loại thị thực chỉ cần IELTS Life Skills, chỉ kiểm tra Nghe và Nói."
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s15",
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
            "id": "h-f1",
            "t": "text",
            "text": "UKVI: 5.252.000 đ",
            "x": 3996,
            "y": 1590,
            "size": 56,
            "at": "l2:five million",
            "color": "coral",
            "hl": [
              {
                "text": "5.252.000 đ",
                "at": "l2:fifty two"
              }
            ]
          },
          {
            "id": "h-f2",
            "t": "text",
            "text": "Bài thường: 4.664.000 đ",
            "x": 3996,
            "y": 1670,
            "size": 48,
            "at": "l2:four million"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Không khó hơn, chỉ khác chỗ",
            "x": 4836,
            "y": 1780,
            "size": 46,
            "at": "l3:harder",
            "color": "accent",
            "hl": [
              {
                "text": "Không khó hơn",
                "at": "l3:Not harder"
              }
            ]
          },
          {
            "id": "h-src2",
            "t": "text",
            "text": "IDP Việt Nam, ngày thi đến 31/12/2026",
            "x": 3996,
            "y": 1750,
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
          "say": "The fee differs too. IDP's table, for test dates up to December thirty first, twenty twenty six:",
          "sub": "Lệ phí cũng khác. Bảng phí IDP, ngày thi đến 31/12/2026:"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "five million, two hundred fifty two thousand dong for UKVI, versus four million, six hundred sixty four thousand for the normal test.",
          "sub": "5.252.000 đồng cho UKVI, so với 4.664.000 đồng cho bài thường.",
          "keys": [
            "5.252.000 đồng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So choose UKVI only when your application truly asks for it. Not harder, just a different room and price.",
          "sub": "Vậy chỉ chọn UKVI khi hồ sơ thật sự yêu cầu. Không khó hơn, chỉ khác nơi thi và lệ phí.",
          "keys": [
            "Không khó hơn"
          ]
        }
      ],
      "ref": "p16,p17"
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
            "text": "⑦ 22:30 · Ôn cho đúng dạng",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop seven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1240,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "books",
                "memo"
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
            "at": "l1:plan",
            "caption": "22:30 · lịch ôn hai chị em",
            "icon": "books"
          },
          {
            "id": "i-c",
            "t": "text",
            "text": "Nghe, Nói: ôn chung",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:together"
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "Academic: bài dài + báo cáo",
            "x": 5964,
            "y": 1340,
            "size": 44,
            "at": "l3:Academic"
          },
          {
            "id": "i-g",
            "t": "text",
            "text": "General: bài ngắn + thư",
            "x": 5964,
            "y": 1415,
            "size": 44,
            "at": "l3:General"
          },
          {
            "id": "i-x",
            "t": "text",
            "text": "Luyện nhầm dạng = tốn nhất",
            "x": 5964,
            "y": 1500,
            "size": 48,
            "at": "l4:wrong type",
            "color": "coral",
            "hl": [
              {
                "text": "Luyện nhầm dạng",
                "at": "l4:wrong type"
              }
            ]
          },
          {
            "id": "i-n",
            "t": "text",
            "text": "Tiếp: làm quen thi máy",
            "x": 5964,
            "y": 1590,
            "size": 46,
            "at": "l5:computer",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, ten thirty. Type chosen, so the study plan changes too.",
          "sub": "Chặng bảy, mười rưỡi. Chọn xong loại thi, kế hoạch ôn cũng đổi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Listening and speaking, we practise together. Reading and writing, you go Academic.",
          "sub": "Nghe và Nói, hai chị em ôn chung. Đọc và Viết, em ôn đúng dạng Academic.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Academic: long academic passages and report writing. General Training: short everyday texts and letters.",
          "sub": "Academic: đọc bài dài học thuật, tập viết báo cáo. General Training: đọc văn bản ngắn đời thường, tập viết thư."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Practising the wrong type wastes the most time for first timers.",
          "sub": "Luyện nhầm dạng là lỗi tốn thời gian nhất của người thi lần đầu.",
          "keys": [
            "Luyện nhầm dạng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next step: get used to the computer test, because in Vietnam that's how you'll sit it.",
          "sub": "Bước kế tiếp: làm quen thi trên máy, vì ở Việt Nam bạn sẽ làm bài trên máy tính."
        }
      ],
      "ref": "p18,p19"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "23:00 · Năm cánh cửa",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Eleven"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
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
            "caption": "Thứ Hai 23:00 · trang đăng ký",
            "icon": "laptop"
          },
          {
            "id": "j-ac",
            "t": "text",
            "text": "✓ Academic",
            "x": 7932,
            "y": 1260,
            "size": 64,
            "at": "l2:Academic",
            "color": "accent",
            "hl": [
              {
                "text": "Academic",
                "at": "l2:Academic it is"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Nhập gia tuỳ tục”",
            "x": 7932,
            "y": 1370,
            "size": 56,
            "at": "l3:customs",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Eleven p.m. Same booking page, same five doors.",
          "sub": "Mười một giờ đêm. Vẫn trang đăng ký ấy, vẫn năm cánh cửa ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Email sent. The university says Academic, so Academic it is. Not UKVI, not Life Skills.",
          "sub": "Email đã gửi. Trường ghi Academic, vậy chọn Academic. Không UKVI, không Life Skills.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Enter a house, follow its customs. Dũng finally knocks on the right door.",
          "sub": "“Nhập gia tuỳ tục.” Cuối cùng Dũng gõ đúng cửa.",
          "keys": [
            "gõ đúng cửa"
          ]
        }
      ],
      "ref": "p8"
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
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:Reading",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:receiver",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:UKVI",
            "fit": "H",
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
            "x": 4736,
            "y": 245,
            "at": "l1:Reading"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8652,
            "y": 640,
            "at": "l2:receiver"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4716,
            "y": 1340,
            "at": "l2:UKVI"
          },
          {
            "id": "z-do",
            "t": "text",
            "text": "Làm ngay: email hỏi nơi nhận",
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
            "text": "Bài để tham khảo; đề, lệ phí, lịch có thể đổi — kiểm lại trang IELTS, British Council, IDP. Nhân vật là minh hoạ.",
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
          "say": "So: listening and speaking are shared. Reading and writing differ, and so does the scale.",
          "sub": "Tóm lại: Nghe, Nói chung; Đọc, Viết khác, thang điểm cũng khác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The receiver picks the type. Ask one complete question. UKVI is not harder, just different.",
          "sub": "Nơi nhận chọn loại thi. Hỏi một câu đủ ý. UKVI không khó hơn, chỉ khác nơi thi.",
          "keys": [
            "Nơi nhận chọn loại thi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Do it now: email your receiver, using the sample in this lesson.",
          "sub": "Làm ngay: viết email hỏi nơi bạn nộp, theo mẫu trong bài.",
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
        "q": "A friend says General Training is easier to score high, what is the catch?",
        "options": [
          "You need more correct answers in reading to reach the same band",
          "You must take a longer speaking test that lasts more than an hour",
          "You cannot use the result for any purpose except a holiday visa"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "balance-scale",
        "why": "Đề General Training dễ đọc hơn nhưng thang quy đổi chặt hơn. Lời đồn “dễ điểm cao” bỏ qua chi tiết này."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A friend says General Training is easier to score high, what is the catch?",
          "sub": "Bạn bè nói General Training dễ được điểm cao, điểm cần lưu ý là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "You need more correct answers in reading to reach the same band.",
          "sub": "Phải trả lời đúng nhiều câu Đọc hơn mới đạt cùng band."
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
        "text": "Đã chọn đúng cửa. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Right door chosen. Forty questions below. Next: IELTS on computer in Vietnam.",
          "sub": "Đã chọn đúng cửa. Bốn mươi câu bên dưới. Bài sau: thi IELTS trên máy tính ở Việt Nam.",
          "face": "wink"
        }
      ],
      "ref": "outro,p19"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi ielts-first-time-takers, bài 1) dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT TỐI THỨ HAI ở nhà Thảo (19:00 trang đăng ký năm cánh cửa → ① 19:15 giống/khác → ② 19:45 vì sao 30/40 khác band → ③ 20:15 mục đích + hai cách của Dũng (p7) → ④ 21:00 hỏi nơi nhận + “Khoan đã!” email một câu (p11) → ⑤ 21:30 trong nước → ⑥ 22:00 UKVI → ⑦ 22:30 ôn đúng dạng → 23:00 chọn Academic, khép vòng). HOOK-21: “30/40 câu Đọc — loại nào band cao hơn?” lặng 1,5 s rồi lật (p4). Nhân vật: Dũng, Thảo — w145/_series/ielts-first-time-takers.md. Cảnh ngắt nhịp: BRK-04 (General dễ lấy band?), BRK-05 (nhắc nhanh). Tục ngữ: “Nhập gia tuỳ tục”. Câu đố questions[7].",
  "loop": {
    "open": "s02",
    "close": "s17"
  }
};
