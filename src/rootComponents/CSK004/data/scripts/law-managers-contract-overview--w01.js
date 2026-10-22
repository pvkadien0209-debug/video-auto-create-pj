// law-managers-contract-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-managers-contract-overview--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "law-contract-managers",
    "slug": "law-managers-contract-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Quản lý không học luật cần đọc gì trong hợp đồng trước khi ký?",
    "series": "Đọc hợp đồng trước khi ký — cho quản lý không chuyên luật, nhận ra rủi ro và biết lúc nào gọi pháp chế"
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
              "a-doc",
              "a-12"
            ],
            "zoom": 1.5,
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 1400
          }
        ],
        "items": [
          {
            "id": "a-doc",
            "t": "illus",
            "name": "page-facing-up",
            "x": 120,
            "y": 120,
            "size": 300,
            "at": "l1:contract"
          },
          {
            "id": "a-12",
            "t": "text",
            "text": "12 trang",
            "x": 470,
            "y": 140,
            "size": 120,
            "at": "l1:twelve",
            "color": "accent",
            "hl": [
              {
                "text": "12 trang",
                "at": "l1:twelve-page"
              }
            ]
          },
          {
            "id": "a-4",
            "t": "text",
            "text": "16:00 · thứ Năm",
            "x": 480,
            "y": 300,
            "size": 56,
            "at": "l1:four"
          },
          {
            "id": "a-today",
            "t": "text",
            "text": "“Xin ký trong hôm nay”",
            "x": 120,
            "y": 470,
            "size": 56,
            "at": "l2:today",
            "color": "coral",
            "hl": [
              {
                "text": "trong hôm nay",
                "at": "l2:today"
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
          "say": "A twelve-page contract. It lands at four p.m., still warm from the printer.",
          "sub": "Một bản hợp đồng mười hai trang. Đến lúc bốn giờ chiều, còn ấm hơi máy in.",
          "keys": [
            "mười hai trang"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A note from the supplier sits on top: please sign today.",
          "sub": "Kèm lời nhắn của nhà cung cấp: xin ký trong hôm nay.",
          "keys": [
            "ký trong hôm nay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Twelve pages, one afternoon, a mountain of other work. Whose desk is this?",
          "sub": "Mười hai trang, một buổi chiều, cả núi việc khác. Bàn của ai đây?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "intro,p3"
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
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
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
            "at": "l1",
            "caption": "16:00 thứ Năm · phòng mua hàng",
            "icon": "page-facing-up"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 120,
            "y": 590,
            "size": 54,
            "at": "l3:careful",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l3:careful"
              }
            ]
          },
          {
            "id": "a-lan",
            "t": "text",
            "text": "Lan: “Nhanh tay vô áy náy”",
            "x": 120,
            "y": 680,
            "size": 44,
            "at": "l4:fast",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Lan, head of purchasing. No law degree, yet she signs contracts every week.",
          "sub": "Đây là Lan, trưởng phòng mua hàng. Không học luật, nhưng tuần nào cũng ký hợp đồng.",
          "keys": [
            "trưởng phòng mua hàng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "The supplier's contract. Price matches the quote. Can I sign in five minutes?",
          "sub": "Hợp đồng của nhà cung cấp. Giá khớp báo giá. Năm phút ký được không nhỉ?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: better careful than sorry.",
          "sub": "Ông bà dặn: “Cẩn tắc vô áy náy.”",
          "keys": [
            "Cẩn tắc vô áy náy"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lan's version today: better fast than... anything.",
          "sub": "Bản của Lan hôm nay: “Nhanh tay vô áy náy.”",
          "keys": [
            "Nhanh tay vô áy náy"
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
            "text": "Đọc gì trước khi ký?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:read",
            "hl": [
              {
                "text": "Đọc gì",
                "at": "l1:read"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: thành luật sư",
            "x": 2028,
            "y": 160,
            "size": 54,
            "at": "l2:lawyer",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:overnight"
          },
          {
            "id": "b-15",
            "t": "text",
            "text": "Mà là: 15 phút",
            "x": 2028,
            "y": 260,
            "size": 60,
            "at": "l3:fifteen",
            "color": "accent"
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "khoanh 5 điểm rủi ro",
            "x": 2488,
            "y": 260,
            "size": 60,
            "at": "l3:five risk",
            "color": "accent",
            "hl": [
              {
                "text": "5 điểm rủi ro",
                "at": "l3:five risk"
              }
            ]
          },
          {
            "id": "b-ask",
            "t": "text",
            "text": "→ hỏi pháp chế đúng câu",
            "x": 2028,
            "y": 360,
            "size": 54,
            "at": "l4:right questions",
            "hl": [
              {
                "text": "đúng câu",
                "at": "l4:right questions"
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
          "say": "So what should a non-lawyer manager read before signing?",
          "sub": "Vậy quản lý không học luật cần đọc gì trước khi ký?",
          "keys": [
            "đọc gì trước khi ký"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not every page. And not to become a lawyer overnight.",
          "sub": "Không phải đọc hết từng trang, cũng chẳng phải hoá luật sư sau một đêm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But about fifteen minutes, to circle five risk points.",
          "sub": "Mà là khoảng mười lăm phút, để khoanh năm điểm rủi ro.",
          "keys": [
            "năm điểm rủi ro"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then send the legal team the right questions.",
          "sub": "Rồi gửi pháp chế đúng câu hỏi.",
          "keys": [
            "đúng câu hỏi"
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
          },
          {
            "at": 150,
            "fit": [
              "b-d0",
              "b-d5"
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
            "id": "b-wk",
            "t": "text",
            "text": "Một buổi chiều, 6 chặng",
            "x": 2028,
            "y": 480,
            "size": 52,
            "at": "l1:afternoon",
            "hl": [
              {
                "text": "6 chặng",
                "at": "l2:six stops"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 580,
            "w": 240,
            "h": 90,
            "at": "l2:six stops+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 580,
            "w": 240,
            "h": 90,
            "at": "l2:six stops+650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 580,
            "w": 240,
            "h": 90,
            "at": "l2:six stops+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 580,
            "w": 240,
            "h": 90,
            "at": "l2:six stops+1150",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 580,
            "w": 240,
            "h": 90,
            "at": "l2:six stops+1400",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 580,
            "w": 240,
            "h": 90,
            "at": "l2:six stops+1650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "16:05",
            "x": 2060,
            "y": 593,
            "size": 48,
            "at": "l2:six stops+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "16:10",
            "x": 2330,
            "y": 593,
            "size": 48,
            "at": "l2:six stops+770"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "16:15",
            "x": 2600,
            "y": 593,
            "size": 48,
            "at": "l2:six stops+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "16:25",
            "x": 2870,
            "y": 593,
            "size": 48,
            "at": "l2:six stops+1270"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "16:40",
            "x": 3140,
            "y": 593,
            "size": 48,
            "at": "l2:six stops+1520"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "17:00",
            "x": 3410,
            "y": 593,
            "size": 48,
            "at": "l2:six stops+1770"
          },
          {
            "id": "b-pen",
            "t": "illus",
            "name": "pen",
            "x": 3488,
            "y": 440,
            "size": 110,
            "at": "l2:red pen"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Lan's afternoon, from four to half past five.",
          "sub": "Theo Lan qua buổi chiều nay, từ bốn giờ đến năm rưỡi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Six stops. Coffee in one hand, a red pen in the other.",
          "sub": "Sáu chặng. Một tay ly cà phê, một tay cây bút đỏ.",
          "keys": [
            "cây bút đỏ"
          ]
        }
      ],
      "ref": "p17"
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
            "text": "① 16:05 · Ai đọc hợp đồng?",
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
                  "id": "lan",
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
            "at": "l1:thought",
            "caption": "16:05 · định chuyển tiếp",
            "icon": "laptop"
          },
          {
            "id": "c-pc",
            "t": "text",
            "text": "Pháp chế: đọc chữ",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l3:words"
          },
          {
            "id": "c-lan",
            "t": "text",
            "text": "Lan: biết thương vụ",
            "x": 3996,
            "y": 260,
            "size": 54,
            "at": "l3:deal",
            "color": "accent",
            "hl": [
              {
                "text": "biết thương vụ",
                "at": "l3:deal"
              }
            ]
          },
          {
            "id": "c-q1",
            "t": "text",
            "text": "• lô hàng gấp cỡ nào?",
            "x": 3996,
            "y": 360,
            "size": 44,
            "at": "l4:urgent"
          },
          {
            "id": "c-q2",
            "t": "text",
            "text": "• đối tác từng trễ mấy lần?",
            "x": 3996,
            "y": 425,
            "size": 44,
            "at": "l4:late"
          },
          {
            "id": "c-q3",
            "t": "text",
            "text": "• khách cuối chờ ngày nào?",
            "x": 3996,
            "y": 490,
            "size": 44,
            "at": "l4:customer"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, four oh five. Lan has a bright thought.",
          "sub": "Chặng một, bốn giờ năm phút. Lan nảy ra một ý sáng chói."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Reading contracts is the legal team's job, right? I'll just forward it.",
          "sub": "Đọc hợp đồng là việc của pháp chế mà nhỉ? Chuyển tiếp là xong.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Half right. Legal reads the words. You know the deal.",
          "sub": "Đúng một nửa. Pháp chế đọc chữ, còn chị biết thương vụ.",
          "keys": [
            "biết thương vụ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "How urgent the goods are, how often this partner ran late, what date your customer waits for.",
          "sub": "Lô hàng gấp cỡ nào, đối tác từng trễ mấy lần, khách cuối đang chờ ngày nào."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Only the business side knows that. And that decides which clause is truly dangerous.",
          "sub": "Chỉ người kinh doanh, mua hàng mới biết. Mà chính điều đó quyết định điều khoản nào thật sự nguy hiểm.",
          "keys": [
            "điều khoản nào thật sự nguy hiểm"
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
          },
          {
            "at": 150,
            "fit": [
              "c-gate",
              "c-bag"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l2:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-gate",
            "t": "text",
            "text": "Pháp chế = người gác cổng",
            "x": 3996,
            "y": 560,
            "size": 50,
            "at": "l2:gatekeepers",
            "hl": [
              {
                "text": "người gác cổng",
                "at": "l2:gatekeepers"
              }
            ]
          },
          {
            "id": "c-jobs",
            "t": "text",
            "text": "soạn · rà soát · tư vấn · đàm phán",
            "x": 3996,
            "y": 630,
            "size": 36,
            "at": "l1:draft",
            "color": "muted"
          },
          {
            "id": "c-bag",
            "t": "text",
            "text": "→ nói rõ mình mang gì",
            "x": 3996,
            "y": 690,
            "size": 50,
            "at": "l2:bag",
            "color": "accent",
            "hl": [
              {
                "text": "mang gì",
                "at": "l2:bag"
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
          "say": "Legal officers draft and review contracts, advise, negotiate, keep records and handle disputes.",
          "sub": "Pháp chế soạn thảo, rà soát hợp đồng, tư vấn, đàm phán, lưu trữ hồ sơ, giải quyết tranh chấp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fine gatekeepers. But they guard well only when you say what's in your bag.",
          "sub": "Người gác cổng giỏi. Nhưng chỉ gác tốt khi người qua cổng nói rõ mình mang gì.",
          "keys": [
            "nói rõ mình mang gì"
          ]
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
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 16:10 · Năm câu hỏi",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two",
            "hl": [
              {
                "text": "Năm câu hỏi",
                "at": "l1:five questions"
              }
            ]
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
                  "id": "lan",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "pen",
                "spiral-notepad"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:hunting",
            "caption": "16:10 · cầm câu hỏi đi tìm",
            "icon": "pen"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 170,
            "w": 46,
            "h": 46,
            "at": "l2:signing",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 152,
            "size": 58,
            "at": "l2:signing+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Ký với ai, có quyền?",
            "x": 6034,
            "y": 162,
            "size": 46,
            "at": "l2:signing+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 265,
            "w": 46,
            "h": 46,
            "at": "l3:buying",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 247,
            "size": 58,
            "at": "l3:buying+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Mua đúng thứ gì?",
            "x": 6034,
            "y": 257,
            "size": 46,
            "at": "l3:buying+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 360,
            "w": 46,
            "h": 46,
            "at": "l3:how much",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 342,
            "size": 58,
            "at": "l3:how much+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Bao nhiêu, trả khi nào?",
            "x": 6034,
            "y": 352,
            "size": 46,
            "at": "l3:how much+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 455,
            "w": 46,
            "h": 46,
            "at": "l4:delivery",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 437,
            "size": 58,
            "at": "l4:delivery+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Giao khi nào, chậm sao?",
            "x": 6034,
            "y": 447,
            "size": 46,
            "at": "l4:delivery+200"
          },
          {
            "id": "d-c4",
            "t": "box",
            "x": 5964,
            "y": 550,
            "w": 46,
            "h": 46,
            "at": "l4:stop",
            "stroke": 5
          },
          {
            "id": "d-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 532,
            "size": 58,
            "at": "l4:stop+600",
            "color": "accent"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "Dừng, cãi nhau: đi đâu?",
            "x": 6034,
            "y": 542,
            "size": 46,
            "at": "l4:stop+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, four ten. No page one to page twelve. Lan takes five questions hunting.",
          "sub": "Chặng hai, bốn giờ mười. Không đọc từ trang một đến trang mười hai: Lan cầm năm câu hỏi đi săn.",
          "keys": [
            "năm câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "One: who are we signing with, and may their signer sign?",
          "sub": "Một: ký với ai, người ký bên kia có quyền ký không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Two: what exactly are we buying? Three: how much, when, against which papers?",
          "sub": "Hai: mua đúng thứ gì? Ba: bao nhiêu tiền, trả lúc nào, sau khi có giấy tờ gì?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Four: delivery date, and if it's late? Five: how to stop, and where to argue?",
          "sub": "Bốn: giao lúc nào, chậm thì bị gì? Năm: muốn dừng, hay khi cãi nhau, thì đi đâu?"
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
            "fit": [
              "d-fog",
              "d-bone"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l2:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-fog",
            "t": "text",
            "text": "Không có / mơ hồ → khoanh đỏ",
            "x": 5964,
            "y": 650,
            "size": 48,
            "at": "l1:foggy",
            "color": "coral",
            "hl": [
              {
                "text": "khoanh đỏ",
                "at": "l1:red"
              }
            ]
          },
          {
            "id": "d-bone",
            "t": "text",
            "text": "= xương sống cả chuỗi",
            "x": 5964,
            "y": 712,
            "size": 46,
            "at": "l2:backbone",
            "color": "accent",
            "hl": [
              {
                "text": "xương sống",
                "at": "l2:backbone"
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
          "say": "No answer, or a foggy one? That's a risk point. Circle it in red.",
          "sub": "Câu nào không có lời đáp, hay đáp mơ hồ, là một điểm rủi ro. Khoanh đỏ.",
          "keys": [
            "điểm rủi ro"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "These five questions are the backbone of this series. Each lesson digs into one or two.",
          "sub": "Năm câu này là xương sống của cả chuỗi. Mỗi bài đào sâu một, hai câu.",
          "keys": [
            "xương sống"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s08",
      "module": "BRK-07",
      "data": {
        "question": "Chưa có hợp đồng, mà đã cam kết rồi?",
        "illus": "e-mail"
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
          "say": "Could Lan be committed before any contract exists?",
          "sub": "Lan có thể đã cam kết, trước cả khi có hợp đồng?",
          "keys": [
            "trước cả khi có hợp đồng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
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
            "at": "l4:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 16:15 · Hộp thư tuần trước",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "e-mail",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:emails",
            "caption": "16:15 · gọi video với Sam",
            "icon": "e-mail"
          },
          {
            "id": "e-ok",
            "t": "illus",
            "name": "e-mail",
            "x": 7932,
            "y": 170,
            "size": 110,
            "at": "l4:okay"
          },
          {
            "id": "e-okt",
            "t": "text",
            "text": "Lan: “OK”",
            "x": 8062,
            "y": 190,
            "size": 60,
            "at": "l4:okay+200",
            "color": "coral",
            "hl": [
              {
                "text": "“OK”",
                "at": "l4:okay"
              }
            ]
          },
          {
            "id": "e-sam",
            "t": "text",
            "text": "Sam: “thế là chốt!”",
            "x": 7932,
            "y": 310,
            "size": 54,
            "at": "l3:fixed",
            "hl": [
              {
                "text": "chốt",
                "at": "l3:fixed"
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
          "say": "Stop three, four fifteen. Lan scrolls back through last week's emails.",
          "sub": "Chặng ba, bốn giờ mười lăm. Lan lướt lại email tuần trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then a video call. This is Sam, sales rep of a foreign supplier. Polite, precise, always on time.",
          "sub": "Rồi một cuộc gọi video. Đây là chị Sam, đại diện bán hàng của nhà cung cấp nước ngoài. Lịch sự, chính xác, luôn đúng giờ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "As you agreed by email, Lan, this price is fixed!",
          "sub": "Như chị đã đồng ý qua email, giá này là chốt rồi nhé!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Agreed? I only wrote okay...",
          "sub": "Đồng ý á? Em chỉ viết “OK” thôi mà…",
          "face": "worried"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 900
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
              "e-form",
              "e-early"
            ],
            "zoom": 1.05,
            "ms": 800
          },
          {
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-form",
            "t": "text",
            "text": "Lời nói · văn bản · hành vi",
            "x": 7932,
            "y": 420,
            "size": 48,
            "at": "l2:words",
            "hl": [
              {
                "text": "hành vi",
                "at": "l2:conduct"
              }
            ]
          },
          {
            "id": "e-dm",
            "t": "text",
            "text": "Email = văn bản",
            "x": 7932,
            "y": 500,
            "size": 60,
            "at": "l3:email",
            "color": "accent",
            "hl": [
              {
                "text": "= văn bản",
                "at": "l3:writing"
              }
            ]
          },
          {
            "id": "e-early",
            "t": "text",
            "text": "Đọc từ lúc còn email",
            "x": 7932,
            "y": 600,
            "size": 54,
            "at": "l4:before",
            "color": "coral",
            "hl": [
              {
                "text": "lúc còn email",
                "at": "l4:emails"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Bộ luật Dân sự 2015, Điều 119",
            "x": 7932,
            "y": 700,
            "size": 28,
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
          "say": "A contract isn't always paper with signatures.",
          "sub": "Hợp đồng không nhất thiết là tờ giấy có chữ ký.",
          "keys": [
            "không nhất thiết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The Civil Code allows a deal in words, in writing, or by specific conduct.",
          "sub": "Bộ luật Dân sự cho phép giao dịch bằng lời nói, văn bản, hoặc hành vi cụ thể.",
          "keys": [
            "hành vi cụ thể"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a deal by data message, like an email, counts as writing.",
          "sub": "Giao dịch bằng thông điệp dữ liệu, như email, được coi là giao dịch bằng văn bản.",
          "keys": [
            "được coi là giao dịch bằng văn bản"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So reading starts before the contract. Your negotiating emails may already be promises.",
          "sub": "Nên đọc hợp đồng bắt đầu từ trước khi có hợp đồng: email đàm phán cũng có thể thành cam kết.",
          "keys": [
            "email đàm phán"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The next lesson, on emails and chats, digs right into this.",
          "sub": "Bài kế tiếp, về email và tin nhắn, nói kỹ chuyện này."
        }
      ],
      "ref": "p7,p8"
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
            "text": "④ 16:25 · Trang một: người ký",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:stop four",
            "hl": [
              {
                "text": "người ký",
                "at": "l1:signer"
              }
            ]
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
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "magnifying-glass-tilted-left"
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
            "at": "l1:page one",
            "caption": "16:25 · soi trang đầu",
            "icon": "magnifying-glass-tilted-left"
          },
          {
            "id": "f-who",
            "t": "text",
            "text": "Tên · địa chỉ · mã số",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l2:company"
          },
          {
            "id": "f-pgd",
            "t": "text",
            "text": "Người ký: phó giám đốc",
            "x": 60,
            "y": 1340,
            "size": 50,
            "at": "l2:deputy",
            "color": "coral"
          },
          {
            "id": "f-scope",
            "t": "text",
            "text": "Chỉ trong phạm vi đại diện",
            "x": 60,
            "y": 1435,
            "size": 50,
            "at": "l3:scope",
            "color": "accent",
            "hl": [
              {
                "text": "phạm vi đại diện",
                "at": "l3:scope"
              }
            ]
          },
          {
            "id": "f-tell",
            "t": "text",
            "text": "+ phải báo bên kia biết",
            "x": 60,
            "y": 1515,
            "size": 46,
            "at": "l4:tell"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, four twenty-five. Page one: the parties and the signer.",
          "sub": "Chặng bốn, bốn giờ hai lăm. Trang một: các bên và người ký."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Company name, address, tax code... signed by a deputy director.",
          "sub": "Tên công ty, địa chỉ, mã số... người ký là phó giám đốc.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Under the Civil Code, a representative may act only within the scope of representation.",
          "sub": "Theo Bộ luật Dân sự, người đại diện chỉ được giao dịch trong phạm vi đại diện.",
          "keys": [
            "phạm vi đại diện"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And must tell the other side what that scope is.",
          "sub": "Và phải thông báo cho bên giao dịch biết phạm vi đó."
        }
      ],
      "ref": "p9"
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
            "fit": [
              "f-poa",
              "f-mir"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-poa",
            "t": "text",
            "text": "Phó GĐ ký → xin giấy uỷ quyền",
            "x": 60,
            "y": 1650,
            "size": 44,
            "at": "l1:power of attorney",
            "hl": [
              {
                "text": "giấy uỷ quyền",
                "at": "l1:power of attorney"
              }
            ]
          },
          {
            "id": "f-mir",
            "t": "text",
            "text": "Soi gương: mình ký đến đâu?",
            "x": 60,
            "y": 1740,
            "size": 50,
            "at": "l2:mirror",
            "color": "accent",
            "hl": [
              {
                "text": "Soi gương",
                "at": "l2:mirror"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Bộ luật Dân sự 2015, Điều 141",
            "x": 900,
            "y": 1810,
            "size": 28,
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
          "who": "lan",
          "say": "May I ask, Sam: could you send your deputy director's power of attorney?",
          "sub": "Dạ, cho em hỏi: chị Sam gửi giúp em giấy uỷ quyền của phó giám đốc được không?",
          "keys": [
            "giấy uỷ quyền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then the mirror question: how far may Lan herself sign?",
          "sub": "Rồi câu hỏi soi gương: chính Lan được ký đến đâu?",
          "keys": [
            "soi gương"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The lesson on who can sign goes deep into this.",
          "sub": "Bài “Ai trong công ty được ký và ký vượt quyền thì sao?” đi sâu phần này."
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 16:40 · Tiền và thời gian",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:stop five"
          },
          {
            "id": "g-b0",
            "t": "box",
            "x": 2028,
            "y": 1240,
            "w": 250,
            "h": 100,
            "at": "l2:price",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "g-bt0",
            "t": "text",
            "text": "Giá",
            "x": 2048,
            "y": 1255,
            "size": 46,
            "at": "l2:price+200"
          },
          {
            "id": "g-bs0",
            "t": "text",
            "text": "gồm thuế chưa?",
            "x": 2028,
            "y": 1360,
            "size": 30,
            "at": "l3:Tax",
            "color": "muted"
          },
          {
            "id": "g-b1",
            "t": "box",
            "x": 2298,
            "y": 1240,
            "w": 250,
            "h": 100,
            "at": "l2:delivery",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "g-bt1",
            "t": "text",
            "text": "Hạn giao",
            "x": 2318,
            "y": 1255,
            "size": 46,
            "at": "l2:delivery+200"
          },
          {
            "id": "g-bs1",
            "t": "text",
            "text": "tính từ ngày nào?",
            "x": 2298,
            "y": 1360,
            "size": 30,
            "at": "l3:counted",
            "color": "muted"
          },
          {
            "id": "g-b2",
            "t": "box",
            "x": 2568,
            "y": 1240,
            "w": 250,
            "h": 100,
            "at": "l2:payment",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "g-bt2",
            "t": "text",
            "text": "Hạn trả",
            "x": 2588,
            "y": 1255,
            "size": 46,
            "at": "l2:payment+200"
          },
          {
            "id": "g-bs2",
            "t": "text",
            "text": "mốc nào, hồ sơ gì?",
            "x": 2568,
            "y": 1360,
            "size": 30,
            "at": "l3:milestone",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, four forty. Page two: money and time.",
          "sub": "Chặng năm, bốn giờ bốn mươi. Trang hai: tiền và thời gian."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three numbers to squint at: price, delivery deadline, payment deadline.",
          "sub": "Ba con số phải nheo mắt soi: giá, hạn giao, hạn thanh toán.",
          "keys": [
            "giá, hạn giao, hạn thanh toán"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tax included? Delivery counted from which day? Paid at which milestone, with which papers?",
          "sub": "Giá đã gồm thuế chưa? Hạn giao tính từ ngày nào? Tiền trả theo mốc nào, cần hồ sơ gì?"
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "16:45 · phòng mua hàng",
        "actors": [
          {
            "id": "lan",
            "side": "center",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Giá khớp báo giá thì ký luôn",
          "why": "Hai tháng sau hàng về trễ, mới thấy hợp đồng không có điều nào nói giao chậm thì xử lý ra sao.",
          "rule": "Giá đúng chưa đủ: hỏi nếu trục trặc thì sao"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Price matches the quote. Good enough. Sign it!",
          "sub": "Giá khớp báo giá. Vậy là ổn. Ký thôi!",
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
          "say": "Fast forward two months. The goods arrive late. Which clause says what happens now?",
          "sub": "Tua nhanh hai tháng: hàng về trễ. Điều nào nói giao chậm thì xử lý ra sao?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "None. The price was right, but nobody asked: what if something goes wrong?",
          "sub": "Chẳng có điều nào. Giá đúng, nhưng chưa ai hỏi: nếu có gì trục trặc thì sao?",
          "keys": [
            "nếu có gì trục trặc thì sao"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "Price, checked. Now, if delivery is late, what happens?",
          "sub": "Giá xong rồi. Giờ: nếu giao chậm thì sao?",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. A correct price is not enough.",
          "sub": "Đúng. Giá đúng chưa đủ.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "Giá đúng chưa đủ"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p3,p4"
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
            "id": "g-8",
            "t": "text",
            "text": "Phạt ≤ 8% phần vi phạm",
            "x": 2028,
            "y": 1440,
            "size": 52,
            "at": "l1:eight",
            "color": "accent",
            "hl": [
              {
                "text": "≤ 8%",
                "at": "l1:eight"
              }
            ]
          },
          {
            "id": "g-ex",
            "t": "text",
            "text": "trừ khi luật quy định riêng",
            "x": 2028,
            "y": 1520,
            "size": 40,
            "at": "l2:unless",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now the penalty. Parties agree the rate, but the total cap is eight percent...",
          "sub": "Giờ đến tiền phạt. Các bên thoả thuận mức phạt, nhưng tổng mức phạt không quá 8%...",
          "keys": [
            "không quá 8%"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "...of the breached part of the obligation, unless a law says otherwise.",
          "sub": "...giá trị phần nghĩa vụ bị vi phạm, trừ trường hợp luật quy định riêng."
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s16",
      "module": "BRK-03",
      "data": {
        "value": 8,
        "suffix": "%",
        "label": "mức trần phạt, tính trên phần nghĩa vụ bị vi phạm",
        "illus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Eight percent: the cap in the Commercial Law.",
          "sub": "Tám phần trăm: mức trần theo Luật Thương mại 2005.",
          "keys": [
            "mức trần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A draft may change it. Check after the October session.",
          "sub": "Dự thảo sửa đổi đang trình. Kiểm lại sau kỳ họp tháng 10/2026.",
          "keys": [
            "Kiểm lại sau kỳ họp"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p10"
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
            "at": "l2",
            "fit": [
              "g-s0",
              "g-s3"
            ],
            "zoom": 1.15,
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
            "id": "g-3m",
            "t": "text",
            "text": "Đọc điều phạt: 3 phút",
            "x": 2868,
            "y": 1240,
            "size": 54,
            "at": "l1:three-minute",
            "color": "accent",
            "hl": [
              {
                "text": "3 phút",
                "at": "l1:three-minute"
              }
            ]
          },
          {
            "id": "g-s0",
            "t": "text",
            "text": "1. Tìm “phạt”, “bồi thường”",
            "x": 2868,
            "y": 1330,
            "size": 42,
            "at": "l2:penalty"
          },
          {
            "id": "g-s1",
            "t": "text",
            "text": "2. Tính trên phần nào?",
            "x": 2868,
            "y": 1395,
            "size": 38,
            "at": "l2:whole"
          },
          {
            "id": "g-s2",
            "t": "text",
            "text": "3. Vừa phạt vừa bồi thường?",
            "x": 2868,
            "y": 1460,
            "size": 42,
            "at": "l3:both"
          },
          {
            "id": "g-s3",
            "t": "text",
            "text": "4. Ghi vào lề",
            "x": 2868,
            "y": 1525,
            "size": 42,
            "at": "l3:margin"
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Không ghi phạt → chỉ bồi thường",
            "x": 2028,
            "y": 1610,
            "size": 44,
            "at": "l4:no penalty"
          },
          {
            "id": "g-yes",
            "t": "text",
            "text": "Có ghi phạt → phạt + bồi thường",
            "x": 2028,
            "y": 1680,
            "size": 44,
            "at": "l4:agreed",
            "hl": [
              {
                "text": "phạt + bồi thường",
                "at": "l4:both"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Luật Thương mại 2005, Điều 301, 307",
            "x": 2028,
            "y": 1740,
            "size": 28,
            "at": "l4+900",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "g-3y",
            "t": "text",
            "text": "Mức phạt · cơ sở tính · bồi thường",
            "x": 2868,
            "y": 1780,
            "size": 40,
            "at": "l5:rate",
            "color": "accent",
            "hl": [
              {
                "text": "cơ sở tính",
                "at": "l5:base"
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
          "say": "Lan tries a three-minute drill on the late-delivery penalty.",
          "sub": "Lan thử bài tập ba phút với điều phạt chậm giao.",
          "keys": [
            "ba phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Step one: find penalty and damages. Step two: charged on the late part, or the whole contract?",
          "sub": "Bước một: tìm chữ “phạt” và “bồi thường”. Bước hai: tính trên phần vi phạm hay toàn hợp đồng?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Step three: penalty and damages both? Step four: note it in the margin.",
          "sub": "Bước ba: có câu vừa phạt vừa đòi bồi thường không? Bước bốn: ghi vào lề."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The rule: no penalty agreed, claim only damages. Penalty agreed, claim both.",
          "sub": "Luật Thương mại: không thoả thuận phạt thì chỉ đòi bồi thường; có thoả thuận phạt thì vừa phạt vừa đòi bồi thường.",
          "keys": [
            "vừa phạt vừa đòi bồi thường"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A penalty clause is read only when you know three things: rate, base, and link with damages.",
          "sub": "Một điều phạt chỉ đọc xong khi biết ba ý: mức phạt, cơ sở tính, quan hệ với bồi thường.",
          "keys": [
            "cơ sở tính"
          ]
        }
      ],
      "ref": "p11,p12"
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
            "fit": "H",
            "ms": 900
          },
          {
            "at": "l3",
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
          },
          {
            "at": "l5",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 600
          },
          {
            "at": "l6",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 17:00 · Trang cuối",
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
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "door"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-07",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:last page",
            "caption": "17:00 · trang cuối",
            "icon": "door"
          },
          {
            "id": "h-exit",
            "t": "text",
            "text": "= sơ đồ cửa thoát hiểm",
            "x": 3996,
            "y": 1250,
            "size": 50,
            "at": "l2:exit",
            "color": "accent",
            "hl": [
              {
                "text": "cửa thoát hiểm",
                "at": "l2:exit"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Chấm dứt · bất khả kháng · tranh chấp",
            "x": 3996,
            "y": 1340,
            "size": 38,
            "at": "l3:Termination"
          },
          {
            "id": "h-ways",
            "t": "text",
            "text": "Thương lượng → hoà giải",
            "x": 3996,
            "y": 1420,
            "size": 46,
            "at": "l4:negotiation"
          },
          {
            "id": "h-ways2",
            "t": "text",
            "text": "→ trọng tài hoặc toà án",
            "x": 3996,
            "y": 1490,
            "size": 46,
            "at": "l4:arbitration",
            "hl": [
              {
                "text": "trọng tài hoặc toà án",
                "at": "l4:court"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Luật Thương mại 2005, Điều 317",
            "x": 3996,
            "y": 1560,
            "size": 28,
            "at": "l4",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "h-far",
            "t": "text",
            "text": "Trọng tài nước ngoài → hỏi pháp chế",
            "x": 3996,
            "y": 1730,
            "size": 44,
            "at": "l6:Foreign",
            "color": "coral",
            "hl": [
              {
                "text": "hỏi pháp chế",
                "at": "l6:legal"
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
          "say": "Stop six, five p.m. The last page, the one everybody flips past fastest.",
          "sub": "Chặng sáu, năm giờ chiều. Trang cuối, trang ai cũng lật qua nhanh nhất."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet it's the page you need when everything breaks. Your emergency exit map.",
          "sub": "Vậy mà đó là trang cần nhất khi mọi thứ đổ vỡ. Tấm sơ đồ cửa thoát hiểm.",
          "keys": [
            "cửa thoát hiểm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Termination, force majeure, dispute resolution. All three are here.",
          "sub": "Chấm dứt hợp đồng, bất khả kháng, giải quyết tranh chấp. Đủ cả ba.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The Commercial Law lists negotiation, mediation by a chosen go-between, then arbitration or court.",
          "sub": "Luật Thương mại liệt kê: thương lượng, hoà giải qua trung gian các bên chọn, trọng tài hoặc toà án.",
          "keys": [
            "trọng tài hoặc toà án"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Wait. Arbitration... abroad?",
          "sub": "Ơ. Trọng tài... ở nước ngoài?",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Foreign arbitration? That's a certain call to legal.",
          "sub": "Trọng tài ở nước ngoài? Chắc chắn phải hỏi pháp chế.",
          "keys": [
            "Chắc chắn phải hỏi pháp chế"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s19",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Bất khả kháng thì tự được miễn, khỏi cần ghi",
        "right": "Bên vi phạm phải chứng minh trường hợp miễn trách",
        "wrongIllus": "shushing-face",
        "rightIllus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Force majeure frees you automatically? A common myth.",
          "sub": "Bất khả kháng thì tự được miễn? Hiểu lầm thường gặp."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The party in breach must prove it.",
          "sub": "Bên vi phạm phải chứng minh.",
          "keys": [
            "phải chứng minh"
          ]
        }
      ],
      "ref": "p14"
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
              "h-list",
              "h-door"
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
            "id": "h-list",
            "t": "text",
            "text": "Ghi rõ sự kiện, hạn báo",
            "x": 3996,
            "y": 1635,
            "size": 46,
            "at": "l1:events",
            "hl": [
              {
                "text": "hạn báo",
                "at": "l1:notify"
              }
            ]
          },
          {
            "id": "h-door",
            "t": "text",
            "text": "Miễn trách không tự gõ cửa",
            "x": 4836,
            "y": 1780,
            "size": 46,
            "at": "l2:knocks",
            "color": "accent",
            "hl": [
              {
                "text": "không tự gõ cửa",
                "at": "l2:knocks"
              }
            ]
          },
          {
            "id": "h-src2",
            "t": "text",
            "text": "Luật Thương mại 2005, Điều 294",
            "x": 3996,
            "y": 1810,
            "size": 28,
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
          "say": "A clause listing which events count, and how fast to notify, makes proving much easier.",
          "sub": "Hợp đồng ghi rõ sự kiện nào được tính, thông báo trong bao lâu, thì chứng minh dễ hơn nhiều.",
          "keys": [
            "thông báo trong bao lâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Exemption never knocks on your door. Prepare the clause and the papers early.",
          "sub": "Miễn trách không tự gõ cửa. Điều khoản và giấy tờ phải chuẩn bị từ trước.",
          "keys": [
            "không tự gõ cửa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A later lesson, on exit clauses, explains each one.",
          "sub": "Bài “Lỡ muốn dừng hợp đồng thì điều khoản nào cứu mình?” giải thích từng điều."
        }
      ],
      "ref": "p14,p15"
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
          },
          {
            "at": "l5",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
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
            "text": "17:15 · Sang phòng pháp chế",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Five fifteen"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "page-facing-up",
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
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:legal",
            "caption": "17:15 · phòng pháp chế",
            "icon": "clipboard"
          },
          {
            "id": "i-split",
            "t": "text",
            "text": "Lan phát hiện · Thảo đánh giá",
            "x": 5964,
            "y": 1240,
            "size": 42,
            "at": "l2:spot",
            "hl": [
              {
                "text": "phát hiện",
                "at": "l2:spot"
              }
            ]
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1340,
            "w": 46,
            "h": 46,
            "at": "l3:signer",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1322,
            "size": 58,
            "at": "l3:signer+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Người ký chưa rõ quyền",
            "x": 6034,
            "y": 1332,
            "size": 42,
            "at": "l3:signer+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1420,
            "w": 46,
            "h": 46,
            "at": "l3:penalties",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1402,
            "size": 58,
            "at": "l3:penalties+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Phạt, bồi thường lạ",
            "x": 6034,
            "y": 1412,
            "size": 42,
            "at": "l3:penalties+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1500,
            "w": 46,
            "h": 46,
            "at": "l4:termination",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1482,
            "size": 58,
            "at": "l4:termination+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Chỉ họ được chấm dứt",
            "x": 6034,
            "y": 1492,
            "size": 42,
            "at": "l4:termination+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1580,
            "w": 46,
            "h": 46,
            "at": "l4:Foreign",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1562,
            "size": 58,
            "at": "l4:Foreign+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Trọng tài nước ngoài",
            "x": 6034,
            "y": 1572,
            "size": 42,
            "at": "l4:Foreign+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1660,
            "w": 46,
            "h": 46,
            "at": "l4:template",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1642,
            "size": 58,
            "at": "l4:template+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Mẫu lạ của đối tác",
            "x": 6034,
            "y": 1652,
            "size": 42,
            "at": "l4:template+200"
          },
          {
            "id": "i-ctx",
            "t": "text",
            "text": "+ bối cảnh, hạn trả lời",
            "x": 5964,
            "y": 1750,
            "size": 48,
            "at": "l5:context",
            "color": "accent",
            "hl": [
              {
                "text": "bối cảnh",
                "at": "l5:context"
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
          "say": "Five fifteen. Lan walks to legal. This is Thảo, in-house counsel for four years, famously tidy.",
          "sub": "Năm giờ mười lăm. Lan sang phòng pháp chế. Đây là Thảo, pháp chế bốn năm, ngăn nắp nổi tiếng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "First: you read to spot. I read to assess and fix the wording.",
          "sub": "Thứ nhất: chị đọc để phát hiện. Em đọc để đánh giá và sửa câu chữ.",
          "keys": [
            "đọc để phát hiện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "What goes to legal? An unclear signer. Unusual penalties or damages.",
          "sub": "Gửi pháp chế những gì? Người ký không rõ thẩm quyền. Mức phạt, bồi thường bất thường."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Termination rights only for them. Foreign arbitration or courts. A partner template you've never used.",
          "sub": "Đối tác được đơn phương chấm dứt mà mình không. Trọng tài, toà án nước ngoài. Mẫu của đối tác chưa từng dùng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "And send the deal context, plus when you need an answer.",
          "sub": "Gửi kèm bối cảnh thương vụ, và hạn cần trả lời nhé.",
          "keys": [
            "bối cảnh thương vụ"
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
      "ref": "p16"
    },
    {
      "id": "s22",
      "module": "BRK-08",
      "data": {
        "title": "Lộ trình của chuỗi",
        "points": [
          {
            "label": "Email",
            "sub": "cam kết sớm nhất",
            "illus": "e-mail"
          },
          {
            "label": "Người ký",
            "sub": "ai được ký",
            "illus": "fountain-pen"
          },
          {
            "label": "Ba con số",
            "sub": "tiền và thời gian",
            "illus": "money-bag"
          },
          {
            "label": "Lối thoát",
            "sub": "khi muốn dừng",
            "illus": "door"
          },
          {
            "label": "Pháp chế",
            "sub": "gửi kèm gì",
            "illus": "briefcase"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The series follows a deal: emails, signer, three numbers, exits, then working with legal.",
          "sub": "Chuỗi đi theo một thương vụ: email, người ký, ba con số, lối thoát, rồi làm việc với pháp chế.",
          "keys": [
            "đi theo một thương vụ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Each lesson: a story, sample lines, and questions to ask before signing.",
          "sub": "Mỗi bài có tình huống, câu mẫu, và những câu nên hỏi đối tác trước khi ký."
        }
      ],
      "ref": "p17"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "17:30 · Vẫn 12 trang ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Five thirty"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "page-facing-up",
                "pen"
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
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same",
            "caption": "17:30 · gọi lại cho Sam",
            "icon": "pen"
          },
          {
            "id": "j-doc",
            "t": "illus",
            "name": "page-facing-up",
            "x": 7982,
            "y": 1280,
            "size": 140,
            "at": "l1:twelve"
          },
          {
            "id": "j-5",
            "t": "text",
            "text": "5 vòng đỏ",
            "x": 8172,
            "y": 1300,
            "size": 64,
            "at": "l1:circles",
            "color": "coral",
            "hl": [
              {
                "text": "5 vòng đỏ",
                "at": "l1:red circles"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 7932,
            "y": 1490,
            "size": 54,
            "at": "l4:careful",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l4:careful"
              }
            ]
          },
          {
            "id": "j-lan",
            "t": "text",
            "text": "Nhanh tay vô áy náy",
            "x": 7932,
            "y": 1580,
            "size": 44,
            "at": "l4:old way",
            "color": "muted"
          },
          {
            "id": "j-lanx",
            "t": "strike",
            "over": "j-lan",
            "at": "l4:old way+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five thirty. Same desk, same twelve pages. Now with five red circles.",
          "sub": "Năm rưỡi. Vẫn bàn ấy, vẫn mười hai trang ấy. Giờ thêm năm vòng đỏ.",
          "keys": [
            "năm vòng đỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Sam, our legal team replies by tomorrow noon. We'll sign right after.",
          "sub": "Chị Sam, pháp chế bên em trả lời trước trưa mai. Mình ký ngay sau đó nhé.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "No problem. Better one day late than a year of arguing!",
          "sub": "Không sao. Chậm một ngày còn hơn cãi nhau cả năm!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Better careful than sorry. Today Lan finally says it the old way.",
          "sub": "“Cẩn tắc vô áy náy.” Hôm nay Lan nói đúng bản gốc.",
          "keys": [
            "Cẩn tắc vô áy náy"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "outro,p4"
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
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "I",
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
            "x": 3528,
            "y": 1120,
            "at": "l2"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7464,
            "y": 1120,
            "at": "l3"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Kiến thức tham khảo để học, không phải tư vấn cho hợp đồng cụ thể. Quy định có thể thay đổi.",
            "x": 7932,
            "y": 1790,
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
          "say": "Step back. Five questions, not twelve pages.",
          "sub": "Lùi lại. Năm câu hỏi, không phải mười hai trang.",
          "keys": [
            "Năm câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A right price isn't enough: ask what happens if something goes wrong.",
          "sub": "Giá đúng chưa đủ: hỏi nếu có gì trục trặc thì sao.",
          "keys": [
            "nếu có gì trục trặc thì sao"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "You spot, legal assesses. Send the context and a deadline.",
          "sub": "Mình phát hiện, pháp chế đánh giá. Gửi kèm bối cảnh và hạn trả lời.",
          "keys": [
            "bối cảnh và hạn trả lời"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p6,p4,p16"
    },
    {
      "id": "s25",
      "module": "QUIZ-01",
      "data": {
        "q": "You see the price is right but find no remedy for delays, what should you do?",
        "options": [
          "Mark it as a risk and raise it before the contract is signed.",
          "Sign anyway, because a correct price covers every other problem later.",
          "Ignore it, since delays are always forgiven under the law."
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "page-facing-up",
        "why": "Thiếu chế tài khi chậm giao là một điểm rủi ro cần khoanh lại. Nêu ra trước khi ký thì còn đàm phán được."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You see the price is right, but no remedy for delays. What should you do?",
          "sub": "Giá đúng, nhưng không thấy chế tài khi chậm giao. Bạn nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Mark it as a risk and raise it before the contract is signed.",
          "sub": "Khoanh lại là điểm rủi ro, và nêu ra trước khi ký."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Raised before signing, it can still be negotiated.",
          "sub": "Nêu trước khi ký thì còn đàm phán được."
        }
      ],
      "beats": {
        "after": 800
      },
      "ref": "questions[7]"
    },
    {
      "id": "s26",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: cầm 5 câu hỏi đọc một hợp đồng",
        "sub": "Rồi đọc bài 1: email có thành hợp đồng?"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, take the five questions to one real contract. Then read lesson one, on emails.",
          "sub": "Hôm nay, cầm năm câu hỏi đọc thử một hợp đồng thật. Rồi đọc bài 1: hứa qua email có thành hợp đồng?",
          "face": "laugh",
          "keys": [
            "năm câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "General knowledge for learning, not advice on your contract. Rules change; ask legal when you apply them.",
          "sub": "Kiến thức tham khảo để học, không phải tư vấn cho hợp đồng cụ thể. Quy định có thể thay đổi; khi áp dụng, hỏi pháp chế hoặc luật sư."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI, dựng theo hạt nhân #136 + biến thể #144 (bang-trang-kit). HOOK-23: đồ vật — bản hợp đồng 12 trang đến lúc 16:00, trở lại ở ô J với 5 vòng đỏ. Dòng thời gian: một chiều thứ Năm của Lan (trưởng phòng mua hàng, = chị Hương p3): A 16:00 hợp đồng + Lan, B câu hỏi chính + dải 6 chặng, C ① 16:05 vì sao tự đọc (p1–p2), D ② 16:10 năm câu hỏi (p5–p6), BRK-07 rehook, E ③ 16:15 email với Sam (p7–p8), F ④ 16:25 trang một: người ký (p9), G ⑤ 16:40 tiền và thời gian (p10) + Khoan đã! 16:45 giá khớp thì ký luôn → tua hai tháng (p3–p4) + 8% (p10, BRK-03) + làm mẫu 3 phút (p11–p12), H ⑥ 17:00 trang cuối (p13) + BRK-04 bất khả kháng (p14–p15), I 17:15 Thảo: gửi pháp chế gì (p16) + BRK-08 lộ trình chuỗi (p17), J 17:30 khép vòng “Cẩn tắc vô áy náy”. Nhân vật theo w145/_series/law-contract-managers.md. Điều luật chỉ từ bài: BLDS 2015 Điều 119, 141; LTM 2005 Điều 294, 301, 307, 317; 8%; dự thảo kỳ họp 10/2026. Không nêu tên doanh nghiệp/trang nguồn. Lưu ý chung (#133) ở tóm tắt + END. Câu đố questions[7].",
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
