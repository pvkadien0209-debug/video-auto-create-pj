// law-arbitration-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-arbitration-overview--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "law-arbitration-inhouse",
    "slug": "law-arbitration-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Vì sao chọn trọng tài thay toà án và quy trình đi thế nào?",
    "series": "Đi trọng tài thương mại từ điều khoản đến phán quyết — cho pháp chế doanh nghiệp theo Quy tắc VIAC 2026"
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
              "a-env"
            ],
            "zoom": 1.6,
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-env",
            "t": "illus",
            "name": "envelope",
            "x": 120,
            "y": 120,
            "size": 300,
            "at": "l1:envelope"
          },
          {
            "id": "a-t8",
            "t": "text",
            "text": "8:00 · thứ Hai",
            "x": 480,
            "y": 140,
            "size": 60,
            "at": "l1:eight"
          },
          {
            "id": "a-tb",
            "t": "text",
            "text": "Thông báo khởi kiện",
            "x": 480,
            "y": 240,
            "size": 64,
            "at": "l2:notice",
            "color": "coral",
            "hl": [
              {
                "text": "khởi kiện",
                "at": "l2:claim"
              }
            ]
          },
          {
            "id": "a-viac",
            "t": "text",
            "text": "VIAC",
            "x": 480,
            "y": 340,
            "size": 72,
            "at": "l2:VIAC",
            "color": "accent"
          },
          {
            "id": "a-day",
            "t": "text",
            "text": "Phong bì mỏng, chuyện dày",
            "x": 60,
            "y": 470,
            "size": 50,
            "at": "l3:thin",
            "hl": [
              {
                "text": "chuyện dày",
                "at": "l3:thick"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "VIAC: Trung tâm Trọng tài Quốc tế Việt Nam",
            "x": 60,
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
          "say": "Monday, eight a.m. A thin envelope lands on a desk.",
          "sub": "Tám giờ sáng thứ Hai. Một phong bì mỏng đáp xuống bàn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Inside: a notice of claim from VIAC, the Vietnam International Arbitration Centre.",
          "sub": "Bên trong: thông báo khởi kiện từ VIAC, Trung tâm Trọng tài Quốc tế Việt Nam.",
          "keys": [
            "thông báo khởi kiện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thin envelope, thick trouble. So who opens it?",
          "sub": "Phong bì thì mỏng, chuyện thì dày. Ai mở đây?",
          "keys": [
            "chuyện thì dày"
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
            "at": "l5",
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
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "envelope",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
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
            "at": "l1",
            "caption": "8:05 · phòng pháp chế",
            "icon": "envelope"
          },
          {
            "id": "a-3q",
            "t": "text",
            "text": "Vì sao? · Bao lâu? · Có chắc?",
            "x": 60,
            "y": 530,
            "size": 50,
            "at": "l3:why",
            "color": "coral",
            "hl": [
              {
                "text": "Có chắc?",
                "at": "l3:certain"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đi một ngày đàng,",
            "x": 60,
            "y": 598,
            "size": 46,
            "at": "l5:travel",
            "color": "accent"
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "học một sàng khôn”",
            "x": 100,
            "y": 652,
            "size": 46,
            "at": "l5:basket",
            "color": "accent",
            "hl": [
              {
                "text": "học một sàng khôn",
                "at": "l5:wisdom"
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
          "say": "Meet Thảo. Four years in legal, tidy notes, first arbitration case.",
          "sub": "Đây là Thảo. Pháp chế bốn năm, ngăn nắp, lần đầu theo vụ trọng tài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, head of legal, with three questions from the board.",
          "sub": "Còn đây là Cô Hoa, trưởng phòng pháp chế, mang ba câu hỏi của Ban giám đốc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Why arbitration? How long? Is the award certain? By six tonight. Okay!",
          "sub": "Vì sao trọng tài? Bao lâu? Phán quyết có chắc không? Sáu giờ chiều nay nhé. Rồi, vậy nha!",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Three questions, one day. First, I read the law.",
          "sub": "Ba câu hỏi, một ngày. Thứ nhất, em đọc luật đã.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "As the proverb goes: travel one day, gain a basket of wisdom.",
          "sub": "Ông bà nói: “Đi một ngày đàng, học một sàng khôn.”",
          "keys": [
            "học một sàng khôn"
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
            "text": "Vì sao trọng tài? Đi thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:courts",
            "hl": [
              {
                "text": "Đi thế nào?",
                "at": "l1:run"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: toà án giá rẻ",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l2:cheaper",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:But"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: chuyến đi một chiều",
            "x": 2028,
            "y": 250,
            "size": 58,
            "at": "l2:one-way",
            "color": "accent",
            "hl": [
              {
                "text": "một chiều",
                "at": "l2:one-way"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "nhanh · kín · không vé quay lại",
            "x": 2058,
            "y": 340,
            "size": 46,
            "at": "l2:fast"
          },
          {
            "id": "b-law",
            "t": "text",
            "text": "Luật 54/2010/QH12 · từ 01/01/2011",
            "x": 2028,
            "y": 430,
            "size": 46,
            "at": "l3:fifty-four",
            "hl": [
              {
                "text": "54/2010/QH12",
                "at": "l3:fifty-four"
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
          "say": "So why choose arbitration over the courts, and how does a case run?",
          "sub": "Vậy vì sao chọn trọng tài thay toà án, và một vụ đi thế nào?",
          "keys": [
            "một vụ đi thế nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a cheaper court. But a one-way trip: fast, private, no return ticket.",
          "sub": "Không phải toà án giá rẻ. Mà là chuyến đi một chiều: nhanh, kín, không vé quay lại.",
          "keys": [
            "chuyến đi một chiều"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The map: arbitration law fifty-four, in force since twenty eleven.",
          "sub": "Bản đồ: Luật Trọng tài thương mại 54/2010/QH12, hiệu lực từ 01/01/2011."
        }
      ],
      "ref": "p1"
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
            "fit": [
              "b-d0",
              "b-d6"
            ],
            "zoom": 1.05,
            "ms": 800
          },
          {
            "at": "l2:end",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-day",
            "t": "text",
            "text": "Một ngày của Thảo · 7 chặng",
            "x": 2028,
            "y": 530,
            "size": 50,
            "at": "l1:seven",
            "hl": [
              {
                "text": "7 chặng",
                "at": "l1:seven"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 610,
            "w": 205,
            "h": 90,
            "at": "l1:seven+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2258,
            "y": 610,
            "w": 205,
            "h": 90,
            "at": "l1:seven+850",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2488,
            "y": 610,
            "w": 205,
            "h": 90,
            "at": "l1:seven+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2718,
            "y": 610,
            "w": 205,
            "h": 90,
            "at": "l1:seven+1350",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2948,
            "y": 610,
            "w": 205,
            "h": 90,
            "at": "l1:seven+1600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3178,
            "y": 610,
            "w": 205,
            "h": 90,
            "at": "l1:seven+1850",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3408,
            "y": 610,
            "w": 205,
            "h": 90,
            "at": "l1:seven+2100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "9:00",
            "x": 2048,
            "y": 625,
            "size": 44,
            "at": "l1:seven+720"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "10:00",
            "x": 2278,
            "y": 625,
            "size": 44,
            "at": "l1:seven+970"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "11:00",
            "x": 2508,
            "y": 625,
            "size": 44,
            "at": "l1:seven+1220"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "13:30",
            "x": 2738,
            "y": 625,
            "size": 44,
            "at": "l1:seven+1470"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "15:00",
            "x": 2968,
            "y": 625,
            "size": 44,
            "at": "l1:seven+1720"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "16:30",
            "x": 3198,
            "y": 625,
            "size": 44,
            "at": "l1:seven+1970"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "17:30",
            "x": 3428,
            "y": 625,
            "size": 44,
            "at": "l1:seven+2220"
          },
          {
            "id": "b-end",
            "t": "text",
            "text": "18:00 · trình Cô Hoa",
            "x": 2968,
            "y": 520,
            "size": 44,
            "at": "l2:six",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now Thảo's day, in seven stops. Fasten your seatbelt.",
          "sub": "Giờ theo Thảo qua một ngày, bảy chặng. Thắt dây an toàn nhé.",
          "keys": [
            "bảy chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Finish line: six p.m., in Cô Hoa's office.",
          "sub": "Đích đến: sáu giờ chiều, phòng Cô Hoa."
        }
      ],
      "ref": "p23"
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
            "text": "① 9:00 · Khác toà ở đâu?",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "open-book",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
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
            "at": "l1:opens",
            "caption": "9:00 · bàn của Thảo",
            "icon": "open-book"
          },
          {
            "id": "c-d2",
            "t": "text",
            "text": "Điều 2: tranh chấp thương mại",
            "x": 3996,
            "y": 160,
            "size": 46,
            "at": "l2:article two"
          },
          {
            "id": "c-d2b",
            "t": "text",
            "text": "hoặc ≥ 1 bên hoạt động thương mại",
            "x": 4026,
            "y": 225,
            "size": 38,
            "at": "l2:trades",
            "color": "muted"
          },
          {
            "id": "c-d5",
            "t": "text",
            "text": "Điều 5: phải có thoả thuận",
            "x": 3996,
            "y": 300,
            "size": 50,
            "at": "l3:must-have",
            "color": "accent",
            "hl": [
              {
                "text": "thoả thuận",
                "at": "l3:agreement"
              }
            ]
          },
          {
            "id": "c-d5b",
            "t": "text",
            "text": "lập trước hoặc sau tranh chấp",
            "x": 4026,
            "y": 370,
            "size": 40,
            "at": "l3:before"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, nine a.m. Thảo opens the arbitration law.",
          "sub": "Chặng một, chín giờ. Thảo mở Luật Trọng tài thương mại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article two: disputes from trade, where at least one side trades, or as the law allows.",
          "sub": "Điều 2: tranh chấp thương mại, có ít nhất một bên hoạt động thương mại, hoặc luật cho phép."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article five: the must-have is an arbitration agreement, made before or after the dispute.",
          "sub": "Điều 5: bắt buộc có thoả thuận trọng tài, lập trước hay sau tranh chấp đều được.",
          "keys": [
            "thoả thuận trọng tài"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "No agreement, no arbitration. Noted.",
          "sub": "Không có thoả thuận thì không có trọng tài. Ghi lại.",
          "face": "thinking"
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
            "fit": [
              "c-s1",
              "c-s3"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l3:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-s1",
            "t": "text",
            "text": "1. Kín: không công khai",
            "x": 3996,
            "y": 460,
            "size": 48,
            "at": "l1:private",
            "hl": [
              {
                "text": "không công khai",
                "at": "l1:private"
              }
            ]
          },
          {
            "id": "c-s2",
            "t": "text",
            "text": "2. Chọn trọng tài viên, ngôn ngữ",
            "x": 3996,
            "y": 540,
            "size": 44,
            "at": "l2:choose"
          },
          {
            "id": "c-s3",
            "t": "text",
            "text": "3. Chung thẩm, hiệu lực ngay",
            "x": 3996,
            "y": 620,
            "size": 48,
            "at": "l3:final",
            "color": "accent",
            "hl": [
              {
                "text": "Chung thẩm",
                "at": "l3:final"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Luật TTTM: khoản 4 Điều 4, Điều 55 · Điều 10, 11 · khoản 5 Điều 61",
            "x": 3996,
            "y": 715,
            "size": 26,
            "at": "l1",
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
          "say": "The strengths. One: proceedings are private, unless the parties agree otherwise.",
          "sub": "Điểm mạnh. Một: tố tụng không công khai, trừ khi các bên thoả thuận khác.",
          "keys": [
            "không công khai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: you choose arbitrators and venue, and in foreign cases, even the language.",
          "sub": "Hai: các bên chọn trọng tài viên, địa điểm; tranh chấp có yếu tố nước ngoài, chọn cả ngôn ngữ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: the award is final, effective from the day it is issued.",
          "sub": "Ba: phán quyết là chung thẩm, có hiệu lực từ ngày ban hành.",
          "keys": [
            "chung thẩm"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s06",
      "module": "BRK-02",
      "data": {
        "kicker": "Mặt trái",
        "title": "Không có vé quay lại",
        "hl": "vé quay lại",
        "sub": "Không có cấp phúc thẩm xét lại nội dung"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "But a one-way trip has no return ticket.",
          "sub": "Nhưng chuyến một chiều thì không có vé quay lại.",
          "keys": [
            "không có vé quay lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No appeal court reviews the merits.",
          "sub": "Không có cấp phúc thẩm xét lại nội dung."
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
            "text": "② 10:00 · Mặt kia đồng xu",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Toà chỉ xét huỷ, căn cứ hẹp",
            "x": 5964,
            "y": 160,
            "size": 48,
            "at": "l2:narrow",
            "hl": [
              {
                "text": "căn cứ hẹp",
                "at": "l2:narrow"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Phí nộp ngay khi kiện",
            "x": 5964,
            "y": 245,
            "size": 48,
            "at": "l3:upfront"
          },
          {
            "id": "d-2b",
            "t": "text",
            "text": "trễ hạn → đơn coi như đã rút",
            "x": 5994,
            "y": 315,
            "size": 44,
            "at": "l3:withdrawn",
            "color": "coral",
            "hl": [
              {
                "text": "coi như đã rút",
                "at": "l3:withdrawn"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Thua không trả → nhờ thi hành án",
            "x": 5964,
            "y": 400,
            "size": 46,
            "at": "l4:enforcement"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Quy tắc VIAC 2026 (theo các bài phân tích công khai)",
            "x": 5964,
            "y": 470,
            "size": 26,
            "at": "l3",
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
          "say": "Stop two, ten a.m. The other side of the coin.",
          "sub": "Chặng hai, mười giờ. Mặt kia của đồng xu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No appeal on the merits. Courts only set awards aside, on narrow grounds.",
          "sub": "Không có phúc thẩm nội dung; toà chỉ xét huỷ theo vài căn cứ hẹp.",
          "keys": [
            "vài căn cứ hẹp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fees are paid upfront. Under the 2026 Rules, pay late and the claim counts as withdrawn.",
          "sub": "Phí nộp ngay khi kiện; theo Quy tắc VIAC 2026, nộp không đủ, đúng hạn thì đơn coi như đã rút.",
          "keys": [
            "coi như đã rút"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And if the loser won't pay, you still need civil enforcement.",
          "sub": "Bên thua không tự nguyện thì vẫn phải nhờ thi hành án dân sự."
        }
      ],
      "ref": "p3"
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
            "at": "a1",
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
            "id": "d-6",
            "t": "text",
            "text": "Điều 6: toà phải từ chối",
            "x": 5964,
            "y": 550,
            "size": 44,
            "at": "l1:article six",
            "hl": [
              {
                "text": "từ chối",
                "at": "l1:refuse"
              }
            ]
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "pose": "hold"
                }
              ],
              "left": {
                "label": "Cách A: “toà án có thẩm quyền”",
                "ok": false
              },
              "right": {
                "label": "Cách B: VIAC, theo Quy tắc VIAC",
                "ok": true
              }
            },
            "at": "l2:Dũng",
            "caption": "10:30 · hợp đồng mua thiết bị",
            "icon": "handshake"
          },
          {
            "id": "d-a",
            "t": "text",
            "text": "A: công khai, nhiều cấp",
            "x": 5964,
            "y": 630,
            "size": 42,
            "at": "a2:public",
            "color": "coral"
          },
          {
            "id": "d-b",
            "t": "text",
            "text": "B: kín, chung thẩm, không xét lại",
            "x": 5964,
            "y": 700,
            "size": 42,
            "at": "b2:Private",
            "color": "accent"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Đổi kháng cáo lấy kín + nhanh",
            "x": 6804,
            "y": 690,
            "size": 44,
            "at": "l3:trades",
            "color": "accent",
            "hl": [
              {
                "text": "kín + nhanh",
                "at": "l3:privacy"
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
          "say": "Article six: with an agreement, a court must refuse the case, unless it's void or unworkable.",
          "sub": "Điều 6: có thoả thuận trọng tài thì toà phải từ chối thụ lý, trừ khi vô hiệu hoặc không thực hiện được.",
          "keys": [
            "toà phải từ chối thụ lý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So wording decides the road. Meet Dũng, Thảo's desk mate, closing a deal with a foreign supplier.",
          "sub": "Câu chữ quyết định đường đi. Đây là Dũng, ngồi cạnh Thảo, đang chốt hợp đồng thiết bị với nhà cung cấp nước ngoài."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "Way A: just write the competent court. Okay, done!",
          "sub": "Cách A: ghi “toà án có thẩm quyền” cho gọn. Ok, làm luôn!",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "hoa",
          "say": "Then disputes go public, maybe through several levels.",
          "sub": "Vậy có chuyện là xét công khai, có thể nhiều cấp.",
          "phase": "a"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "Way B: VIAC under its Rules, plus language and number of arbitrators.",
          "sub": "Cách B: VIAC theo Quy tắc VIAC, chọn ngôn ngữ, số trọng tài viên.",
          "phase": "b",
          "to": "hoa"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "hoa",
          "say": "Private and final. Lose, and no second look. Okay!",
          "sub": "Kín, chung thẩm. Thua thì không xét lại. Rồi, vậy nha!",
          "phase": "b"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Arbitration trades appeal for privacy and speed.",
          "sub": "Rút ra: chọn trọng tài là đổi cơ hội kháng cáo lấy kín đáo và tốc độ.",
          "keys": [
            "đổi cơ hội kháng cáo"
          ]
        }
      ],
      "ref": "p4,p5,p6"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 11:00 · Một vụ đi thế nào?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Nộp đơn → trung tâm nhận: bắt đầu",
            "x": 7932,
            "y": 160,
            "size": 46,
            "at": "l2:files",
            "hl": [
              {
                "text": "bắt đầu",
                "at": "l2:start"
              }
            ]
          },
          {
            "id": "e-1s",
            "t": "text",
            "text": "Điều 30, 31",
            "x": 8872,
            "y": 170,
            "size": 30,
            "at": "l2:files",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "30 ngày: tự bảo vệ, kiện lại",
            "x": 7932,
            "y": 245,
            "size": 46,
            "at": "l3:thirty",
            "color": "coral",
            "hl": [
              {
                "text": "30 ngày",
                "at": "l3:thirty"
              }
            ]
          },
          {
            "id": "e-2s",
            "t": "text",
            "text": "Điều 35, 36",
            "x": 8872,
            "y": 255,
            "size": 30,
            "at": "l3:thirty",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Không thoả thuận → 3 trọng tài viên",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "l4:three",
            "hl": [
              {
                "text": "3 trọng tài viên",
                "at": "l4:three"
              }
            ]
          },
          {
            "id": "e-3s",
            "t": "text",
            "text": "Điều 39",
            "x": 8872,
            "y": 340,
            "size": 30,
            "at": "l4:three",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-ill",
            "t": "illus",
            "name": "balance-scale",
            "x": 9222,
            "y": 150,
            "size": 220,
            "at": "l2:files"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, eleven a.m. How does a case run?",
          "sub": "Chặng ba, mười một giờ. Một vụ đi qua những bước nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The claimant files with the centre. Proceedings start when the centre receives it.",
          "sub": "Nguyên đơn nộp đơn kèm thoả thuận; tố tụng bắt đầu khi trung tâm nhận đơn.",
          "keys": [
            "trung tâm nhận đơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The respondent has thirty days for its defence, and files any counterclaim with it.",
          "sub": "Bị đơn có 30 ngày gửi bản tự bảo vệ, và nộp đơn kiện lại cùng lúc.",
          "keys": [
            "30 ngày"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No agreement on numbers? The tribunal has three arbitrators.",
          "sub": "Không thoả thuận số lượng thì Hội đồng có ba trọng tài viên.",
          "keys": [
            "ba trọng tài viên"
          ]
        }
      ],
      "ref": "p7"
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
            "fit": [
              "e-4",
              "e-6"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-4",
            "t": "text",
            "text": "Trước nội dung: xét thẩm quyền",
            "x": 7932,
            "y": 430,
            "size": 46,
            "at": "l1:jurisdiction",
            "hl": [
              {
                "text": "thẩm quyền",
                "at": "l1:jurisdiction"
              }
            ]
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "Triệu tập: ≥ 30 ngày trước họp",
            "x": 7932,
            "y": 510,
            "size": 46,
            "at": "l2:summons"
          },
          {
            "id": "e-6",
            "t": "text",
            "text": "Phán quyết: ≤ 30 ngày sau họp cuối",
            "x": 7932,
            "y": 590,
            "size": 46,
            "at": "l3:award",
            "color": "accent"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Luật TTTM, Điều 43, 54, khoản 3 Điều 61",
            "x": 7932,
            "y": 660,
            "size": 26,
            "at": "l1",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-30",
            "t": "text",
            "text": "30 · 30 · 30",
            "x": 8972,
            "y": 470,
            "size": 90,
            "at": "l4:thirty",
            "color": "coral",
            "hl": [
              {
                "text": "30 · 30 · 30",
                "at": "l4:More"
              }
            ]
          },
          {
            "id": "e-more",
            "t": "text",
            "text": "Đơn, trọng tài viên: bài 3, 4",
            "x": 8772,
            "y": 690,
            "size": 36,
            "at": "l4:lessons",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before the merits, the tribunal checks the agreement and its own jurisdiction.",
          "sub": "Trước khi xét nội dung, Hội đồng xem hiệu lực thoả thuận và thẩm quyền của mình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Summons go out at least thirty days before the hearing.",
          "sub": "Giấy triệu tập gửi chậm nhất 30 ngày trước phiên họp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The award comes at the hearing, or within thirty days after the last one.",
          "sub": "Phán quyết tuyên tại phiên họp, hoặc chậm nhất 30 ngày sau phiên cuối."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thirty, thirty, thirty. More in lessons three and four.",
          "sub": "Ba mươi, ba mươi, ba mươi. Đơn, trọng tài viên: bài 3, 4.",
          "keys": [
            "Ba mươi, ba mươi, ba mươi"
          ]
        }
      ],
      "ref": "p8,p12"
    },
    {
      "id": "s11",
      "module": "BRK-08",
      "data": {
        "title": "Một vụ trọng tài",
        "current": 4,
        "points": [
          {
            "label": "Nhận đơn",
            "sub": "tố tụng bắt đầu",
            "illus": "incoming-envelope"
          },
          {
            "label": "30 ngày",
            "sub": "bản tự bảo vệ",
            "illus": "page-facing-up"
          },
          {
            "label": "Hội đồng",
            "sub": "3 trọng tài viên",
            "illus": "balance-scale"
          },
          {
            "label": "≥ 30 ngày",
            "sub": "triệu tập trước họp",
            "illus": "spiral-calendar"
          },
          {
            "label": "≤ 30 ngày",
            "sub": "phán quyết",
            "illus": "scroll"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Filing, defence, tribunal, hearing.",
          "sub": "Nhận đơn, bản tự bảo vệ, Hội đồng, phiên họp."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Then the award. Final.",
          "sub": "Rồi phán quyết. Chung thẩm.",
          "keys": [
            "Chung thẩm"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "12:00 · giờ nghỉ trưa",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "explain"
          },
          {
            "id": "thao",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Viết lý lẽ trước, tính ngày sau",
          "why": "Lý lẽ hay đến mấy mà nộp trễ hạn thì vô ích; quá hạn còn có thể mất quyền phản đối.",
          "rule": "Bị kiện: việc đầu tiên là lập sổ thời hạn"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Lunch plan: a killer defence now, dates later. Okay, let's go!",
          "sub": "Trưa nay viết bản tự bảo vệ thật đanh, ngày tính sau. Ok, làm luôn!",
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
          "who": "det",
          "say": "A brilliant argument filed late is a love letter sent after the wedding.",
          "sub": "Lý lẽ hay mà nộp trễ thì như thư tình gửi sau đám cưới.",
          "keys": [
            "nộp trễ"
          ]
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
          "who": "thao",
          "say": "First, the deadline log. Arguments come after.",
          "sub": "Việc đầu tiên: lập sổ thời hạn. Lý lẽ viết sau.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "When you're sued, the first job is a deadline log, not arguments.",
          "sub": "Bị kiện thì việc đầu tiên là lập sổ thời hạn, không phải viết lý lẽ.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "lập sổ thời hạn"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p11"
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
            "at": "l2",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
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
            "text": "④ 13:30 · Sổ thời hạn",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:stop four",
            "hl": [
              {
                "text": "Sổ thời hạn",
                "at": "l1:deadline"
              }
            ]
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 1040,
            "y": 1230,
            "w": 640,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-calendar",
                "clipboard"
              ],
              "camera": [
                {
                  "at": "l2",
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
            "at": "l1:builds",
            "caption": "13:30 · sổ thời hạn",
            "icon": "spiral-calendar"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "1. Ghi ngày nhận thông báo",
            "x": 60,
            "y": 1240,
            "size": 42,
            "at": "l2:log"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "2. +30 ngày: bản tự bảo vệ",
            "x": 60,
            "y": 1305,
            "size": 42,
            "at": "l2:thirty",
            "hl": [
              {
                "text": "+30 ngày",
                "at": "l2:thirty"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "3. Phản đối thoả thuận: ngay",
            "x": 60,
            "y": 1370,
            "size": 42,
            "at": "l3:object"
          },
          {
            "id": "f-3b",
            "t": "text",
            "text": "trễ → mất quyền phản đối",
            "x": 100,
            "y": 1430,
            "size": 38,
            "at": "l3:lose",
            "color": "coral",
            "hl": [
              {
                "text": "mất quyền",
                "at": "l3:right"
              }
            ]
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "4. Kiện lại: nộp cùng lúc",
            "x": 60,
            "y": 1490,
            "size": 42,
            "at": "l5:counterclaim"
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "5. Trọng tài viên: 30 ngày",
            "x": 60,
            "y": 1555,
            "size": 42,
            "at": "l5:arbitrator"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Quy tắc VIAC 2026: khoản 1, 3 Điều 9 · Điều 13",
            "x": 60,
            "y": 1615,
            "size": 26,
            "at": "l2",
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
          "say": "Stop four, one thirty. Thảo builds the deadline log.",
          "sub": "Chặng bốn, một rưỡi chiều. Thảo lập sổ thời hạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One: log the day we got the notice. Two: thirty days for the defence.",
          "sub": "Một: ghi ngày nhận thông báo. Hai: 30 ngày gửi bản tự bảo vệ, khoản 1 Điều 9 Quy tắc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Three: object within that time, or you may lose the right.",
          "sub": "Ba: phản đối thoả thuận trong hạn đó, trễ có thể mất quyền phản đối.",
          "keys": [
            "mất quyền phản đối"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Four: counterclaim with the defence. Five: our arbitrator within thirty days.",
          "sub": "Bốn: kiện lại nộp cùng bản tự bảo vệ. Năm: chọn trọng tài viên trong 30 ngày."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Miss it, and the VIAC President appoints one.",
          "sub": "Lỡ hạn thì Chủ tịch VIAC chỉ định thay, Điều 13 Quy tắc.",
          "keys": [
            "Chủ tịch VIAC chỉ định thay"
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
            "fit": "F",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": [
              "f-b-c0",
              "f-b-l5"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l3:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-b-c0",
            "t": "box",
            "x": 60,
            "y": 1700,
            "w": 40,
            "h": 40,
            "at": "l2:original",
            "stroke": 5
          },
          {
            "id": "f-b-k0",
            "t": "text",
            "text": "✓",
            "x": 62,
            "y": 1682,
            "size": 50,
            "at": "l2:original+600",
            "color": "accent"
          },
          {
            "id": "f-b-l0",
            "t": "text",
            "text": "Bản chính hợp đồng",
            "x": 120,
            "y": 1694,
            "size": 36,
            "at": "l2:original+200"
          },
          {
            "id": "f-b-c1",
            "t": "box",
            "x": 620,
            "y": 1700,
            "w": 40,
            "h": 40,
            "at": "l2:signer",
            "stroke": 5
          },
          {
            "id": "f-b-k1",
            "t": "text",
            "text": "✓",
            "x": 622,
            "y": 1682,
            "size": 50,
            "at": "l2:signer+600",
            "color": "accent"
          },
          {
            "id": "f-b-l1",
            "t": "text",
            "text": "Người ký có thẩm quyền",
            "x": 680,
            "y": 1694,
            "size": 36,
            "at": "l2:signer+200"
          },
          {
            "id": "f-b-c2",
            "t": "box",
            "x": 1180,
            "y": 1700,
            "w": 40,
            "h": 40,
            "at": "l2:limitation",
            "stroke": 5
          },
          {
            "id": "f-b-k2",
            "t": "text",
            "text": "✓",
            "x": 1182,
            "y": 1682,
            "size": 50,
            "at": "l2:limitation+600",
            "color": "accent"
          },
          {
            "id": "f-b-l2",
            "t": "text",
            "text": "Thời hiệu: thường 2 năm",
            "x": 1240,
            "y": 1694,
            "size": 36,
            "at": "l2:limitation+200",
            "hl": [
              {
                "text": "2 năm",
                "at": "l2:two years"
              }
            ]
          },
          {
            "id": "f-b-c3",
            "t": "box",
            "x": 60,
            "y": 1772,
            "w": 40,
            "h": 40,
            "at": "l3:evidence",
            "stroke": 5
          },
          {
            "id": "f-b-k3",
            "t": "text",
            "text": "✓",
            "x": 62,
            "y": 1754,
            "size": 50,
            "at": "l3:evidence+600",
            "color": "accent"
          },
          {
            "id": "f-b-l3",
            "t": "text",
            "text": "Chứng cứ đã gom",
            "x": 120,
            "y": 1766,
            "size": 36,
            "at": "l3:evidence+200"
          },
          {
            "id": "f-b-c4",
            "t": "box",
            "x": 620,
            "y": 1772,
            "w": 40,
            "h": 40,
            "at": "l3:budget",
            "stroke": 5
          },
          {
            "id": "f-b-k4",
            "t": "text",
            "text": "✓",
            "x": 622,
            "y": 1754,
            "size": 50,
            "at": "l3:budget+600",
            "color": "accent"
          },
          {
            "id": "f-b-l4",
            "t": "text",
            "text": "Ngân sách phí, luật sư",
            "x": 680,
            "y": 1766,
            "size": 36,
            "at": "l3:budget+200"
          },
          {
            "id": "f-b-c5",
            "t": "box",
            "x": 1180,
            "y": 1772,
            "w": 40,
            "h": 40,
            "at": "l3:person",
            "stroke": 5
          },
          {
            "id": "f-b-k5",
            "t": "text",
            "text": "✓",
            "x": 1182,
            "y": 1754,
            "size": 50,
            "at": "l3:person+600",
            "color": "accent"
          },
          {
            "id": "f-b-l5",
            "t": "text",
            "text": "Người theo dõi hạn",
            "x": 1240,
            "y": 1766,
            "size": 36,
            "at": "l3:person+200"
          },
          {
            "id": "f-b-src",
            "t": "text",
            "text": "Luật TTTM, Điều 33",
            "x": 1300,
            "y": 1830,
            "size": 24,
            "at": "l2:limitation",
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
          "say": "And before you ever file, six boxes to tick.",
          "sub": "Còn trước khi khởi kiện, có sáu ô cần đánh dấu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The original contract with the clause. A signer with authority. A limitation period still open, usually two years.",
          "sub": "Bản chính hợp đồng có điều khoản trọng tài. Người ký có thẩm quyền. Thời hiệu còn, thường là hai năm.",
          "keys": [
            "hai năm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Evidence gathered. A budget. And one person watching deadlines.",
          "sub": "Chứng cứ đã gom. Ngân sách phí, luật sư. Và một người theo dõi thời hạn.",
          "keys": [
            "một người theo dõi thời hạn"
          ]
        }
      ],
      "ref": "p9"
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
          },
          {
            "at": "l5",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 15:00 · Hợp đồng cũ",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:stop five"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "surprised"
                }
              ],
              "props": [
                "file-cabinet",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l5",
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
            "at": "l1:old",
            "caption": "15:00 · tủ hồ sơ",
            "icon": "file-cabinet"
          },
          {
            "id": "g-16",
            "t": "text",
            "text": "Đ16: văn bản, kể cả email, fax",
            "x": 2028,
            "y": 1245,
            "size": 44,
            "at": "l2:sixteen",
            "hl": [
              {
                "text": "email, fax",
                "at": "l2:emails"
              }
            ]
          },
          {
            "id": "g-19",
            "t": "text",
            "text": "Đ19: độc lập với hợp đồng",
            "x": 2028,
            "y": 1315,
            "size": 46,
            "at": "l4:nineteen",
            "color": "accent",
            "hl": [
              {
                "text": "độc lập",
                "at": "l4:alone"
              }
            ]
          },
          {
            "id": "g-wr",
            "t": "text",
            "text": "Ghi sai tên trung tâm?!",
            "x": 2028,
            "y": 1410,
            "size": 46,
            "at": "l5:wrongly",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, three p.m. Will the clause in an old contract hold the case?",
          "sub": "Chặng năm, ba giờ chiều. Điều khoản trong hợp đồng cũ có giữ được vụ kiện không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article sixteen: it must be written, and emails or faxes count as writing.",
          "sub": "Điều 16: thoả thuận phải bằng văn bản; thư điện tử, fax cũng được coi là văn bản.",
          "keys": [
            "thư điện tử, fax"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article nineteen: the clause stands alone. A void contract doesn't drag it down.",
          "sub": "Điều 19: thoả thuận trọng tài độc lập; hợp đồng vô hiệu không kéo nó theo.",
          "keys": [
            "độc lập"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Uh oh. This old one names the centre wrongly!",
          "sub": "Ối. Hợp đồng cũ này ghi sai tên trung tâm!",
          "face": "surprised"
        }
      ],
      "ref": "p13,p14"
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
            "fit": [
              "g-np",
              "g-new"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-np",
            "t": "text",
            "text": "→ “không thực hiện được” → về toà",
            "x": 2028,
            "y": 1520,
            "size": 40,
            "at": "l1:unworkable",
            "color": "coral",
            "hl": [
              {
                "text": "về toà",
                "at": "l2:court"
              }
            ]
          },
          {
            "id": "g-src2",
            "t": "text",
            "text": "Điều 4 Nghị quyết 01/2014/NQ-HĐTP",
            "x": 2058,
            "y": 1575,
            "size": 26,
            "at": "l1:Resolution",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "g-qt",
            "t": "text",
            "text": "Quy tắc VIAC 2026: từ 01/7/2026",
            "x": 2028,
            "y": 1620,
            "size": 46,
            "at": "l3:July",
            "hl": [
              {
                "text": "01/7/2026",
                "at": "l3:July"
              }
            ]
          },
          {
            "id": "g-new",
            "t": "text",
            "text": "Mới: nhập vụ, gộp vụ, rút gọn",
            "x": 2028,
            "y": 1690,
            "size": 40,
            "at": "l4:joinder"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A common fear. An unidentifiable centre may make it unworkable, under Resolution zero one, twenty fourteen.",
          "sub": "Nỗi lo hay gặp: tên không xác định được trung tâm có thể thành “không thực hiện được”, Điều 4 Nghị quyết 01/2014."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And that group sends the dispute back to court. Rewriting it is lesson one.",
          "sub": "Nhóm này khiến tranh chấp quay về toà. Cách viết lại: ở bài 1.",
          "keys": [
            "quay về toà"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Meanwhile, the VIAC 2026 Rules took effect on July first, twenty twenty-six, replacing the 2017 Rules.",
          "sub": "Trong khi đó, Quy tắc VIAC 2026 có hiệu lực từ 01/7/2026, thay Quy tắc 2017.",
          "keys": [
            "01/7/2026"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "For cases starting then. New: joinder, consolidation, wider expedited track.",
          "sub": "Cho vụ bắt đầu từ ngày đó. Mới: nhập vụ, gộp vụ, rút gọn mở rộng."
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s17",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Từ 01/7/2026, mọi vụ VIAC tự chạy rút gọn",
        "right": "Chọn VIAC là đồng ý khả năng; Chủ tịch VIAC quyết định",
        "wrongIllus": "rocket",
        "rightIllus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Myth: every VIAC case now runs expedited.",
          "sub": "Hiểu lầm: mọi vụ VIAC giờ tự chạy rút gọn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Truth: only possible. The VIAC President decides.",
          "sub": "Thật ra: chỉ là khả năng. Chủ tịch VIAC quyết định.",
          "keys": [
            "Chủ tịch VIAC quyết định"
          ]
        }
      ],
      "ref": "p16"
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
          },
          {
            "at": 150,
            "fit": [
              "g-ex",
              "g-sil"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-ex",
            "t": "text",
            "text": "Loại trừ: văn bản rõ ràng",
            "x": 2028,
            "y": 1760,
            "size": 40,
            "at": "l2:opt out",
            "hl": [
              {
                "text": "văn bản rõ ràng",
                "at": "l2:written"
              }
            ]
          },
          {
            "id": "g-sil",
            "t": "text",
            "text": "Im lặng = một lựa chọn",
            "x": 2868,
            "y": 1790,
            "size": 46,
            "at": "l3:silence",
            "color": "accent",
            "hl": [
              {
                "text": "một lựa chọn",
                "at": "l3:choice"
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
          "say": "Article twenty-four. For older clauses, only if both parties agree.",
          "sub": "Điều 24 Quy tắc. Thoả thuận lập trước 01/7/2026: chỉ khi các bên cùng đồng ý."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "To opt out, you need a clear written agreement.",
          "sub": "Muốn loại trừ phải có thoả thuận rõ ràng bằng văn bản.",
          "keys": [
            "rõ ràng bằng văn bản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Default isn't mandatory. But silence is also a choice.",
          "sub": "Mặc định không phải bắt buộc, nhưng im lặng cũng là một lựa chọn.",
          "keys": [
            "im lặng cũng là một lựa chọn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The threshold, the two-month limit and contract review: lesson two.",
          "sub": "Ngưỡng giá trị, thời hạn hai tháng, cách rà hợp đồng: ở bài 2."
        }
      ],
      "ref": "p16,p17,p18"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 16:30 · Phán quyết rồi thì sao?",
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
                  "id": "binh",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "telephone-receiver",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Uncle",
            "caption": "16:30 · gọi Bác Bình",
            "icon": "telephone-receiver"
          },
          {
            "id": "h-30",
            "t": "text",
            "text": "Yêu cầu huỷ: 30 ngày",
            "x": 3996,
            "y": 1250,
            "size": 52,
            "at": "l2:thirty",
            "color": "coral",
            "hl": [
              {
                "text": "30 ngày",
                "at": "l2:thirty"
              }
            ]
          },
          {
            "id": "h-30b",
            "t": "text",
            "text": "từ ngày nhận phán quyết (Đ69)",
            "x": 4026,
            "y": 1325,
            "size": 38,
            "at": "l2:receiving",
            "color": "muted"
          },
          {
            "id": "h-68",
            "t": "text",
            "text": "Căn cứ hẹp: khoản 2 Điều 68",
            "x": 3996,
            "y": 1400,
            "size": 44,
            "at": "l3:sixty-eight"
          },
          {
            "id": "h-68b",
            "t": "text",
            "text": "như: thoả thuận, thủ tục, nguyên tắc",
            "x": 3996,
            "y": 1465,
            "size": 36,
            "at": "l3:procedure",
            "color": "muted"
          },
          {
            "id": "h-tinh",
            "t": "text",
            "text": "Từ 01/7/2025: toà cấp tỉnh",
            "x": 3996,
            "y": 1540,
            "size": 46,
            "at": "l4:provincial",
            "color": "accent",
            "hl": [
              {
                "text": "toà cấp tỉnh",
                "at": "l4:provincial"
              }
            ]
          },
          {
            "id": "h-src2",
            "t": "text",
            "text": "Luật 85/2025/QH15",
            "x": 4026,
            "y": 1605,
            "size": 26,
            "at": "l4",
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
          "say": "Stop six, four thirty. Thảo calls Uncle Bình, a veteran lawyer nearby.",
          "sub": "Chặng sáu, bốn rưỡi. Thảo gọi Bác Bình, luật sư hành nghề lâu năm gần công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Easy now. Final isn't untouchable. Within thirty days of receiving it, you can ask a court to set it aside.",
          "sub": "Từ từ, mình xem lại đã. Chung thẩm chưa phải bất khả xâm phạm: 30 ngày từ ngày nhận để yêu cầu toà huỷ.",
          "keys": [
            "30 ngày"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Only on Article sixty-eight grounds: no agreement, wrong procedure, breaking basic legal principles.",
          "sub": "Chỉ theo khoản 2 Điều 68: như không có thoả thuận, sai thủ tục, trái nguyên tắc cơ bản của pháp luật."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Since July twenty twenty-five, under Law eighty-five, provincial courts hear these.",
          "sub": "Từ 01/7/2025, theo Luật 85/2025/QH15, việc này thuộc toà án nhân dân cấp tỉnh.",
          "keys": [
            "cấp tỉnh"
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
      "ref": "p19"
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
            "fit": [
              "h-nn",
              "h-ny"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-nn",
            "t": "text",
            "text": "Phán quyết nước ngoài: công nhận",
            "x": 3996,
            "y": 1670,
            "size": 44,
            "at": "l1:foreign"
          },
          {
            "id": "h-3y",
            "t": "text",
            "text": "thời hiệu 3 năm (Đ451 BLTTDS)",
            "x": 4026,
            "y": 1735,
            "size": 40,
            "at": "l1:three years",
            "color": "coral",
            "hl": [
              {
                "text": "3 năm",
                "at": "l1:three years"
              }
            ]
          },
          {
            "id": "h-ny",
            "t": "text",
            "text": "Công ước New York: 12/9/1995",
            "x": 3996,
            "y": 1800,
            "size": 38,
            "at": "l2:New York"
          },
          {
            "id": "h-log",
            "t": "text",
            "text": "30 ngày · 3 năm → vào sổ!",
            "x": 4936,
            "y": 1805,
            "size": 40,
            "at": "l3:log",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "binh",
          "say": "A foreign award needs recognition here: three years from when it takes effect.",
          "sub": "Phán quyết nước ngoài muốn thi hành ở Việt Nam phải được công nhận; thời hiệu ba năm.",
          "keys": [
            "thời hiệu ba năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Civil Procedure Code, Article four fifty-one. The New York Convention binds Vietnam since nineteen ninety-five.",
          "sub": "Điều 451 BLTTDS 2015. Công ước New York 1958 có hiệu lực với Việt Nam từ 12/9/1995."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Thirty days, three years. Into the log!",
          "sub": "Ba mươi ngày, ba năm. Vào sổ thời hạn luôn!",
          "face": "happy"
        }
      ],
      "ref": "p20"
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
            "at": "l3",
            "fit": [
              "i-kh",
              "i-same"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 17:30 · Luật đang sửa",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:stop seven",
            "hl": [
              {
                "text": "Luật đang sửa",
                "at": "l1:amended"
              }
            ]
          },
          {
            "id": "i-cl",
            "t": "illus",
            "name": "classical-building",
            "x": 7354,
            "y": 1130,
            "size": 180,
            "at": "l2:Assembly"
          },
          {
            "id": "i-kh",
            "t": "text",
            "text": "Kỳ họp thứ 2, khoá XVI · 10/2026",
            "x": 5964,
            "y": 1250,
            "size": 46,
            "at": "l2:second",
            "color": "coral",
            "hl": [
              {
                "text": "10/2026",
                "at": "l2:October"
              }
            ]
          },
          {
            "id": "i-btp",
            "t": "text",
            "text": "Bộ Tư pháp chủ trì",
            "x": 5964,
            "y": 1320,
            "size": 40,
            "at": "l3:Ministry",
            "color": "muted"
          },
          {
            "id": "i-same",
            "t": "text",
            "text": "Kèm Luật Thương mại, Luật Luật sư",
            "x": 5964,
            "y": 1380,
            "size": 40,
            "at": "l3:Lawyers"
          },
          {
            "id": "i-base",
            "t": "text",
            "text": "Nền: Luật 54, Quy tắc 2026",
            "x": 5964,
            "y": 1445,
            "size": 40,
            "at": "l4:Until"
          },
          {
            "id": "i-date",
            "t": "text",
            "text": "Trích điều nào: ghi ngày kiểm",
            "x": 5964,
            "y": 1510,
            "size": 46,
            "at": "l4:check date",
            "color": "accent",
            "hl": [
              {
                "text": "ghi ngày kiểm",
                "at": "l4:check date"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Danh mục luật dự kiến trình Kỳ họp thứ 2, Quốc hội khoá XVI",
            "x": 5964,
            "y": 1570,
            "size": 26,
            "at": "l2",
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
          "say": "Stop seven, five thirty. A twist: the arbitration law is being amended.",
          "sub": "Chặng bảy, năm rưỡi chiều. Một khúc quanh: Luật Trọng tài thương mại đang được sửa đổi.",
          "keys": [
            "đang được sửa đổi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It's listed for the Assembly's second session, October twenty twenty-six.",
          "sub": "Luật có trong danh mục dự kiến trình Kỳ họp thứ 2, Quốc hội khoá XVI, tháng 10/2026."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Led by the Ministry of Justice, details unpublished. Same list: the Law on Lawyers.",
          "sub": "Bộ Tư pháp chủ trì, nội dung chưa công bố. Cùng danh mục: Luật Thương mại, Luật Luật sư."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Until then: Law fifty-four, Resolution zero one, the Civil Procedure Code, the 2026 Rules. Note your check date.",
          "sub": "Đến khi có luật mới: Luật 54/2010, Nghị quyết 01/2014, BLTTDS 2015 đã sửa, Quy tắc VIAC 2026. Trích điều nào, ghi kèm ngày kiểm.",
          "keys": [
            "ghi kèm ngày kiểm"
          ]
        }
      ],
      "ref": "p21,p22"
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
          }
        ],
        "items": [
          {
            "id": "i-road",
            "t": "text",
            "text": "Lộ trình: vòng đời một vụ",
            "x": 5964,
            "y": 1610,
            "size": 44,
            "at": "l1:life",
            "hl": [
              {
                "text": "vòng đời một vụ",
                "at": "l1:life"
              }
            ]
          },
          {
            "id": "i-r0",
            "t": "text",
            "text": "1 · Điều khoản",
            "x": 5964,
            "y": 1680,
            "size": 38,
            "at": "l1:One",
            "color": "accent"
          },
          {
            "id": "i-r1",
            "t": "text",
            "text": "2 · VIAC 2026",
            "x": 6524,
            "y": 1680,
            "size": 38,
            "at": "l1:Two",
            "color": "accent"
          },
          {
            "id": "i-r2",
            "t": "text",
            "text": "3 · Đơn, bản tự bảo vệ",
            "x": 7084,
            "y": 1680,
            "size": 38,
            "at": "l2:Three"
          },
          {
            "id": "i-r3",
            "t": "text",
            "text": "4 · Trọng tài viên",
            "x": 5964,
            "y": 1755,
            "size": 38,
            "at": "l3:Four"
          },
          {
            "id": "i-r4",
            "t": "text",
            "text": "5 · Huỷ phán quyết",
            "x": 6524,
            "y": 1755,
            "size": 38,
            "at": "l3:Five"
          },
          {
            "id": "i-r5",
            "t": "text",
            "text": "6 · Phán quyết ngoài",
            "x": 7084,
            "y": 1755,
            "size": 38,
            "at": "l3:Six"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The series follows a case's life. One: a clause that holds. Two: the 2026 Rules.",
          "sub": "Chuỗi đi theo vòng đời một vụ. Bài 1: điều khoản không vô hiệu. Bài 2: Quy tắc VIAC 2026, rút gọn.",
          "keys": [
            "vòng đời một vụ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three: the claim, the defence, the counterclaim.",
          "sub": "Bài 3: đơn khởi kiện, bản tự bảo vệ, đơn kiện lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four: arbitrators and outside lawyers. Five: setting aside, prevented early. Six: foreign awards.",
          "sub": "Bài 4: trọng tài viên, luật sư ngoài. Bài 5: căn cứ huỷ, phòng từ đầu. Bài 6: phán quyết nước ngoài."
        }
      ],
      "ref": "p23,p24"
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
            "text": "18:00 · Vẫn phong bì ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:six"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "envelope",
                "clipboard"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:envelope",
            "caption": "18:00 · phòng Cô Hoa",
            "icon": "envelope"
          },
          {
            "id": "j-env",
            "t": "illus",
            "name": "envelope",
            "x": 7932,
            "y": 1240,
            "size": 120,
            "at": "l1:envelope"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Vì sao? Kín, chung thẩm",
            "x": 7932,
            "y": 1390,
            "size": 46,
            "at": "l2:Private"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Bao lâu? Mốc 30 ngày, vào sổ",
            "x": 7932,
            "y": 1460,
            "size": 42,
            "at": "l2:log"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Có chắc? Điều khoản đúng + giữ hạn",
            "x": 7932,
            "y": 1530,
            "size": 42,
            "at": "l3:certain",
            "color": "accent",
            "hl": [
              {
                "text": "giữ hạn",
                "at": "l3:deadline"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“…học một sàng khôn”",
            "x": 7932,
            "y": 1650,
            "size": 50,
            "at": "l5:wisdom",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Six p.m. Same envelope, same desk.",
          "sub": "Sáu giờ chiều. Vẫn phong bì ấy, vẫn bàn ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Why arbitration? Private and final. How long? Thirty-day steps, all in the log.",
          "sub": "Vì sao trọng tài? Kín và chung thẩm. Bao lâu? Các mốc 30 ngày, đã vào sổ.",
          "face": "happy",
          "to": "hoa"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Is the award certain? Only if the clause is right and we keep every deadline.",
          "sub": "Có chắc không? Chắc khi điều khoản đúng và giữ đúng mọi thời hạn.",
          "keys": [
            "giữ đúng mọi thời hạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Good. Tomorrow, copy the clauses of our three biggest contracts. Okay!",
          "sub": "Tốt. Mai chép điều khoản tranh chấp của ba hợp đồng lớn nhất. Rồi, vậy nha!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One day of travel, a basket of wisdom. Plus a deadline log.",
          "sub": "Đi một ngày đàng, học một sàng khôn. Kèm một sổ thời hạn.",
          "keys": [
            "một sổ thời hạn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s24",
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
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "G",
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
            "x": 7464,
            "y": 30,
            "at": "l1"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1600,
            "y": 1120,
            "at": "l2"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3528,
            "y": 1120,
            "at": "l3"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Kiến thức nghề tham khảo, không phải tư vấn cho vụ việc cụ thể. Luật Trọng tài thương mại đang sửa đổi; đối chiếu văn bản mới nhất.",
            "x": 7932,
            "y": 1790,
            "size": 26,
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
          "say": "Step back. Arbitration trades appeal for privacy and speed.",
          "sub": "Lùi lại. Trọng tài đổi kháng cáo lấy kín đáo và tốc độ.",
          "keys": [
            "kín đáo và tốc độ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sued? The deadline log comes first.",
          "sub": "Bị kiện? Sổ thời hạn đi trước.",
          "keys": [
            "Sổ thời hạn đi trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the clause decides everything. Silence is a choice too.",
          "sub": "Và điều khoản quyết định tất cả. Im lặng cũng là một lựa chọn.",
          "keys": [
            "Im lặng cũng là một lựa chọn"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p6,p11,p17"
    },
    {
      "id": "s25",
      "module": "QUIZ-01",
      "data": {
        "q": "According to the lesson, what is the first job when you are sued?",
        "options": [
          "Writing a long defence before checking any dates at all",
          "Choosing a famous lawyer before even reading the notice itself carefully",
          "Building a deadline log before writing any of the legal arguments"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Lý lẽ hay đến mấy cũng vô ích nếu nộp trễ; việc đầu tiên khi bị kiện là lập sổ thời hạn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "According to the lesson, what is the first job when you are sued?",
          "sub": "Theo bài học, việc đầu tiên khi bị kiện là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Building a deadline log, before writing any legal arguments.",
          "sub": "Lập sổ thời hạn, trước khi viết bất kỳ lý lẽ nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "A great argument filed late is worth nothing.",
          "sub": "Lý lẽ hay mà nộp trễ thì cũng bằng không."
        }
      ],
      "beats": {
        "after": 800
      },
      "ref": "questions[20]"
    },
    {
      "id": "s26",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: chép điều khoản của ba hợp đồng lớn nhất",
        "sub": "Rồi đọc bài 1: viết điều khoản không vô hiệu"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, copy the dispute clauses of your three biggest contracts, then read lesson one.",
          "sub": "Hôm nay chép điều khoản tranh chấp của ba hợp đồng lớn nhất, ghi ngày ký, tên trung tâm, rồi đọc bài 1.",
          "face": "laugh",
          "keys": [
            "ba hợp đồng lớn nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "General knowledge, not advice for your case. The law is changing; check the latest text.",
          "sub": "Kiến thức nghề tham khảo, không phải tư vấn cho vụ việc cụ thể. Luật đang sửa, hãy đối chiếu văn bản mới nhất."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI, dựng theo hạt nhân #136 + biến thể #144 (bang-trang-kit). HOOK-23: đồ vật kể chuyện — phong bì thông báo khởi kiện của VIAC trên bàn Thảo (cận vật rồi kéo ra), trở lại ở khép vòng 18:00. Dòng thời gian: MỘT NGÀY thứ Hai — A 8:00 phong bì + Cô Hoa mang ba câu hỏi của Ban giám đốc, B câu hỏi chính + dải 7 chặng, C ① 9:00 khác toà (p1–p2), BRK-02 mặt trái, D ② 10:00 mặt trái + Điều 6 (p3–p4) + Dũng hai cách (p5–p6), E ③ 11:00 các bước (p7–p8, p12) + BRK-08 dòng thời gian, Khoan đã! 12:00 Dũng viết lý lẽ trước (p11), F ④ 13:30 sổ thời hạn (p10) + 6 ô kiểm (p9), G ⑤ 15:00 hợp đồng cũ (p13–p14) + Quy tắc 2026 (p15) + BRK-04 hiểu lầm rút gọn (p16) + im lặng là lựa chọn (p17–p18), H ⑥ 16:30 Bác Bình: huỷ phán quyết, phán quyết nước ngoài (p19–p20), I ⑦ 17:30 luật đang sửa (p21–p22) + lộ trình 6 bài (p23–p24), J 18:00 trình Cô Hoa (khép vòng), tóm tắt lùi xa. Nhân vật theo w145/_series/law-arbitration-inhouse.md: anh Tuấn (p10) → Thảo. Không nêu tên hãng luật/blog trong nguồn bài; chỉ VIAC và văn bản. Số/điều chỉ từ bài. Lưu ý chung (#133) ở tóm tắt + END. Câu đố questions[20].",
  "loop": {
    "open": "s00",
    "close": "s23"
  }
};
