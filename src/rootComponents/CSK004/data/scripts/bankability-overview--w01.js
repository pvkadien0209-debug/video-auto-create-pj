// bankability-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bankability-overview--w01",
  "unit": {
    "audience": "epc-lender",
    "slug": "bankability-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Ngân hàng đọc hợp đồng EPC để biết dự án có trả nợ được không?",
    "series": "Hợp đồng EPC dưới mắt bên cho vay — cho ngân hàng và bên tài trợ, biết dự án có trả nợ được và giữ quyền can thiệp"
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
              "a-1",
              "a-2"
            ],
            "move": "cut",
            "zoom": 1.25
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "a-1",
            "t": "text",
            "text": "Ngân hàng không ký",
            "x": 60,
            "y": 110,
            "size": 78,
            "at": "l1:never"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "hợp đồng EPC…",
            "x": 60,
            "y": 210,
            "size": 78,
            "at": "l1:EPC"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "…nhưng khoản vay sống nhờ",
            "x": 60,
            "y": 330,
            "size": 56,
            "at": "l2:lives",
            "color": "accent",
            "hl": [
              {
                "text": "sống nhờ",
                "at": "l2:lives"
              }
            ]
          },
          {
            "id": "a-4",
            "t": "text",
            "text": "từng câu trong đó",
            "x": 60,
            "y": 405,
            "size": 56,
            "at": "l2:every sentence",
            "color": "accent"
          },
          {
            "id": "a-r1",
            "t": "text",
            "text": "• COD gia hạn quá dễ",
            "x": 60,
            "y": 520,
            "size": 42,
            "at": "l3:easy"
          },
          {
            "id": "a-r2",
            "t": "text",
            "text": "• phạt chậm quá thấp",
            "x": 60,
            "y": 580,
            "size": 42,
            "at": "l3:low"
          },
          {
            "id": "a-r3",
            "t": "text",
            "text": "• bảo lãnh không chuyển được",
            "x": 60,
            "y": 640,
            "size": 42,
            "at": "l3:stuck",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A bank never signs the EPC contract for a power plant.",
          "sub": "Ngân hàng không bao giờ ký hợp đồng EPC của nhà máy điện.",
          "keys": [
            "không bao giờ ký"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet its loan lives on every sentence inside it.",
          "sub": "Vậy mà khoản vay sống nhờ từng câu trong đó.",
          "keys": [
            "sống nhờ từng câu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "An easy extension, a low penalty, a stuck guarantee: each can sink it.",
          "sub": "Gia hạn dễ, phạt thấp, bảo lãnh kẹt: chi tiết nào cũng làm chìm được khoản vay.",
          "keys": [
            "làm chìm"
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
            "at": "l1",
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
            "x": 900,
            "y": 90,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "explain"
                }
              ],
              "props": [
                "file-cabinet",
                "page-facing-up"
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
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
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
            "caption": "Sáng thứ Hai · phòng tài trợ dự án",
            "icon": "bank"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Mất bò mới lo làm chuồng”",
            "x": 900,
            "y": 612,
            "size": 44,
            "at": "l6:cow",
            "color": "muted"
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "→ cho vay: làm chuồng trước",
            "x": 900,
            "y": 680,
            "size": 44,
            "at": "l6:first",
            "color": "accent",
            "hl": [
              {
                "text": "làm chuồng trước",
                "at": "l6:barn first"
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
          "say": "Meet Thảo.",
          "sub": "Đây là Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Project finance analyst at a bank. Champion list maker.",
          "sub": "Chuyên viên thẩm định tín dụng dự án ở ngân hàng. Vô địch lập danh sách.",
          "keys": [
            "thẩm định tín dụng dự án"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And Ms Hoa, her boss, head of project finance.",
          "sub": "Còn đây là cô Hoa, sếp Thảo, trưởng phòng tài trợ dự án."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "A wind farm loan. Here's the EPC contract. Can this plant repay us?",
          "sub": "Khoản vay nhà máy điện gió. Hợp đồng EPC đây. Nhà máy này trả nợ được không?",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "First, I'll read it like a lender. Every sentence.",
          "sub": "Thứ nhất, em đọc bằng mắt người cho vay. Từng câu ạ.",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "People fix the barn after losing the cow. Lenders build the barn first.",
          "sub": "“Mất bò mới lo làm chuồng.” Nghề cho vay thì làm chuồng trước.",
          "keys": [
            "làm chuồng trước"
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
            "text": "Nhà máy trả nợ được không?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:repay",
            "hl": [
              {
                "text": "trả nợ",
                "at": "l1:repay"
              }
            ]
          },
          {
            "id": "b-q2",
            "t": "text",
            "text": "Đổ vỡ: có quyền can thiệp?",
            "x": 2028,
            "y": 140,
            "size": 52,
            "at": "l2:step in",
            "hl": [
              {
                "text": "can thiệp",
                "at": "l2:step in"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: chỉ xem tổng giá",
            "x": 2028,
            "y": 240,
            "size": 50,
            "at": "l3:Not",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:schedule"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đọc theo dòng tiền",
            "x": 2028,
            "y": 330,
            "size": 60,
            "at": "l3:cash flow",
            "color": "accent",
            "hl": [
              {
                "text": "dòng tiền",
                "at": "l3:cash flow"
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
          "say": "So the real question: will this plant run on time and on budget, enough to repay?",
          "sub": "Vậy câu hỏi thật: nhà máy có chạy đúng hạn, đúng giá để trả nợ không?",
          "keys": [
            "trả nợ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And if one side collapses, can the lender step in?",
          "sub": "Và nếu một bên đổ vỡ, bên cho vay có quyền can thiệp không?",
          "keys": [
            "quyền can thiệp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not just price and schedule. We read along the cash flow.",
          "sub": "Không phải chỉ xem tổng giá, tiến độ, mà là đọc theo dòng tiền.",
          "keys": [
            "đọc theo dòng tiền"
          ]
        }
      ],
      "ref": "intro,p3"
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
            "id": "b-hv",
            "t": "illus",
            "name": "high-voltage",
            "x": 2928,
            "y": 140,
            "size": 110,
            "at": "l1:power sales"
          },
          {
            "id": "b-cf",
            "t": "text",
            "text": "Vay trả bằng tiền bán điện",
            "x": 3058,
            "y": 160,
            "size": 44,
            "at": "l1:power sales",
            "hl": [
              {
                "text": "tiền bán điện",
                "at": "l1:power sales"
              }
            ]
          },
          {
            "id": "b-cod",
            "t": "text",
            "text": "Chậm COD = mất tiền điện",
            "x": 2928,
            "y": 300,
            "size": 50,
            "at": "l2:Late",
            "color": "coral",
            "hl": [
              {
                "text": "mất tiền điện",
                "at": "l2:lost"
              }
            ]
          },
          {
            "id": "b-cod2",
            "t": "text",
            "text": "có thể lỡ mốc giá, mốc pháp lý",
            "x": 2928,
            "y": 375,
            "size": 30,
            "at": "l2:tariff",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "1 tuần thẩm định, 7 chặng",
            "x": 2028,
            "y": 470,
            "size": 46,
            "at": "l3:week",
            "hl": [
              {
                "text": "7 chặng",
                "at": "l3:seven"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l3:seven+400",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l3:seven+650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l3:seven+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l3:seven+1150",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l3:seven+1400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l3:seven+1650",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 560,
            "w": 215,
            "h": 90,
            "at": "l3:seven+1900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Bankable",
            "x": 2043,
            "y": 580,
            "size": 34,
            "at": "l3:seven+520"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Chuỗi HĐ",
            "x": 2278,
            "y": 580,
            "size": 34,
            "at": "l3:seven+770"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "CP, phạt",
            "x": 2513,
            "y": 580,
            "size": 34,
            "at": "l3:seven+1020"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Bảo lãnh",
            "x": 2748,
            "y": 580,
            "size": 34,
            "at": "l3:seven+1270"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Can thiệp",
            "x": 2983,
            "y": 580,
            "size": 34,
            "at": "l3:seven+1520"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Bảo hiểm",
            "x": 3218,
            "y": 580,
            "size": 34,
            "at": "l3:seven+1770"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Cách đọc",
            "x": 3453,
            "y": 580,
            "size": 34,
            "at": "l3:seven+2020"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "In project finance, the loan is repaid mainly from the plant's own power sales.",
          "sub": "Trong tài trợ dự án, khoản vay được trả chủ yếu bằng tiền bán điện của chính nhà máy.",
          "keys": [
            "tiền bán điện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Late COD means lost power revenue, maybe a missed tariff or legal milestone.",
          "sub": "Chậm vận hành thương mại, COD, là mất tiền điện, có khi lỡ cả mốc giá hay mốc pháp lý.",
          "keys": [
            "mất tiền điện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So, one appraisal week with Thảo, in seven stops.",
          "sub": "Vậy theo Thảo qua một tuần thẩm định, bảy chặng.",
          "keys": [
            "bảy chặng"
          ]
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s04",
      "module": "BRK-04",
      "data": {
        "title": "Ngân hàng đọc hợp đồng EPC",
        "wrong": "Chỉ xem tổng giá và tiến độ",
        "right": "Soi mốc COD, phạt chậm, bảo lãnh",
        "wrongIllus": "money-bag",
        "rightIllus": "magnifying-glass-tilted-left"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Just the total price and the schedule?",
          "sub": "Chỉ xem tổng giá và tiến độ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. Lenders ask for changes before drawdown.",
          "sub": "Không. Bên cho vay đòi sửa điều khoản trước khi giải ngân.",
          "keys": [
            "trước khi giải ngân"
          ]
        }
      ],
      "ref": "p3"
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
            "at": "l3",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai · Bankable là gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 150,
            "w": 780,
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
                "memo",
                "pen"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Monday",
            "caption": "Thứ Hai · bàn của Thảo",
            "icon": "memo"
          },
          {
            "id": "c-def",
            "t": "text",
            "text": "Đủ vững để chịu cấp vốn",
            "x": 3996,
            "y": 150,
            "size": 50,
            "at": "l2:solid",
            "hl": [
              {
                "text": "chịu cấp vốn",
                "at": "l2:fund"
              }
            ]
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 260,
            "w": 44,
            "h": 44,
            "at": "l3:one party",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 242,
            "size": 56,
            "at": "l3:one party+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Một đầu mối chịu trách nhiệm",
            "x": 4066,
            "y": 252,
            "size": 42,
            "at": "l3:one party+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 340,
            "w": 44,
            "h": 44,
            "at": "l4:price",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 322,
            "size": 56,
            "at": "l4:price+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Giá chắc",
            "x": 4066,
            "y": 332,
            "size": 42,
            "at": "l4:price+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 420,
            "w": 44,
            "h": 44,
            "at": "l4:date",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 402,
            "size": 56,
            "at": "l4:date+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Mốc COD chắc",
            "x": 4066,
            "y": 412,
            "size": 42,
            "at": "l4:date+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 500,
            "w": 44,
            "h": 44,
            "at": "l4:cap",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 482,
            "size": 56,
            "at": "l4:cap+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Phạt, trần đủ để bù",
            "x": 4066,
            "y": 492,
            "size": 42,
            "at": "l4:cap+200"
          },
          {
            "id": "c-tbl",
            "t": "text",
            "text": "4 chân bàn",
            "x": 3996,
            "y": 590,
            "size": 56,
            "at": "l5:table",
            "color": "accent",
            "hl": [
              {
                "text": "4 chân bàn",
                "at": "l5:Four legs"
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
          "say": "Stop one, Monday. What makes an EPC contract bankable?",
          "sub": "Chặng một, thứ Hai. Thế nào là hợp đồng EPC “bankable”?",
          "keys": [
            "bankable"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Solid enough that lenders and investors will fund it.",
          "sub": "Là đủ vững để bên cho vay và nhà đầu tư chịu cấp vốn.",
          "keys": [
            "chịu cấp vốn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "First: one party responsible, from design to interfaces.",
          "sub": "Thứ nhất: một đầu mối chịu trách nhiệm, từ thiết kế tới giao diện.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Then a firm price, a firm COD date, and damages with a cap that really covers.",
          "sub": "Rồi giá chắc, mốc COD chắc, phạt và trần đủ để bù khi có sự cố."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Four legs of a table. Pull one, and the loan wobbles.",
          "sub": "Bốn chân bàn. Rút một chân, khoản vay lung lay.",
          "keys": [
            "Bốn chân bàn"
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
            "fit": "C",
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": [
              "c-eq",
              "c-tbl"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-d",
            "t": "text",
            "text": "Gia hạn: hẹp, rõ",
            "x": 4356,
            "y": 595,
            "size": 36,
            "at": "l1:narrow",
            "hl": [
              {
                "text": "hẹp, rõ",
                "at": "l1:narrow"
              }
            ]
          },
          {
            "id": "c-eq",
            "t": "text",
            "text": "Xa yêu cầu → thêm vốn chủ",
            "x": 4356,
            "y": 650,
            "size": 36,
            "at": "l3:equity",
            "color": "coral",
            "hl": [
              {
                "text": "thêm vốn chủ",
                "at": "l3:equity"
              }
            ]
          },
          {
            "id": "c-nd",
            "t": "text",
            "text": "Trọn gói: phổ biến, không bắt buộc",
            "x": 4836,
            "y": 685,
            "size": 36,
            "at": "l4:common",
            "hl": [
              {
                "text": "không bắt buộc",
                "at": "l4:not mandatory"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "NĐ 210/2026/NĐ-CP, Điều 11",
            "x": 3996,
            "y": 700,
            "size": 28,
            "at": "l4:Decree",
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
          "say": "Firm price changes only through Variations or new law. Extension events stay narrow and clear.",
          "sub": "Giá chỉ đổi qua Thay đổi hoặc luật mới. Sự kiện gia hạn phải hẹp và rõ.",
          "keys": [
            "hẹp và rõ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lenders rely on a fixed price, a certain date, and a financially strong contractor.",
          "sub": "Bên cho vay dựa vào giá cố định, ngày hoàn thành chắc chắn, nhà thầu đủ năng lực tài chính.",
          "keys": [
            "giá cố định"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The further terms drift from that, the more equity the owner must add.",
          "sub": "Điều khoản càng xa yêu cầu ấy, Chủ đầu tư càng phải góp nhiều vốn chủ sở hữu.",
          "keys": [
            "vốn chủ sở hữu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Decree two-ten of twenty twenty-six calls lump sum common for EPC, not mandatory. Lenders usually demand it.",
          "sub": "Nghị định 210/2026 ghi trọn gói “áp dụng phổ biến” cho EPC, không bắt buộc; bên cho vay thường đòi.",
          "keys": [
            "không bắt buộc"
          ]
        }
      ],
      "ref": "p2,p6,p7"
    },
    {
      "id": "s08",
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
            "text": "② Thứ Ba · Chuỗi hợp đồng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday"
          },
          {
            "id": "d-up",
            "t": "text",
            "text": "Trên: giấy phép, PPA, HĐ vay",
            "x": 5964,
            "y": 150,
            "size": 44,
            "at": "l2:Above"
          },
          {
            "id": "d-epcb",
            "t": "box",
            "x": 5964,
            "y": 230,
            "w": 480,
            "h": 90,
            "at": "l1:middle",
            "color": "accent",
            "stroke": 6
          },
          {
            "id": "d-epc",
            "t": "text",
            "text": "Hợp đồng EPC",
            "x": 6004,
            "y": 245,
            "size": 56,
            "at": "l1:middle+200",
            "color": "accent"
          },
          {
            "id": "d-dn",
            "t": "text",
            "text": "Dưới: thầu phụ, thiết bị chính",
            "x": 5964,
            "y": 350,
            "size": 44,
            "at": "l2:Below"
          },
          {
            "id": "d-om",
            "t": "text",
            "text": "Sau: vận hành, bảo dưỡng",
            "x": 5964,
            "y": 415,
            "size": 44,
            "at": "l2:behind"
          },
          {
            "id": "d-b2b",
            "t": "text",
            "text": "Back-to-back",
            "x": 6524,
            "y": 245,
            "size": 52,
            "at": "l3:back-to-back",
            "hl": [
              {
                "text": "Back-to-back",
                "at": "l3:back-to-back"
              }
            ]
          },
          {
            "id": "d-b2b2",
            "t": "text",
            "text": "PPA → Yêu cầu CĐT",
            "x": 6524,
            "y": 325,
            "size": 38,
            "at": "l3:Requirements"
          },
          {
            "id": "d-b2b3",
            "t": "text",
            "text": "phạt chậm bám PPA, vay",
            "x": 6524,
            "y": 385,
            "size": 38,
            "at": "l4:track",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, Tuesday. The EPC contract sits in the middle of a chain.",
          "sub": "Chặng hai, thứ Ba. Hợp đồng EPC nằm giữa một chuỗi hợp đồng.",
          "keys": [
            "giữa một chuỗi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Above it: permits, the PPA, the loan. Below: subcontractors. Behind: operation and maintenance.",
          "sub": "Trên: giấy phép, PPA, hợp đồng vay. Dưới: thầu phụ. Sau: vận hành, bảo dưỡng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Back-to-back: PPA technical duties go into the Employer's Requirements.",
          "sub": "Back-to-back: nghĩa vụ kỹ thuật trong PPA phải đi vào Yêu cầu của Chủ đầu tư.",
          "keys": [
            "Back-to-back"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And delay damages should track losses under the PPA and the loan.",
          "sub": "Còn mức phạt chậm nên bám thiệt hại theo PPA và hợp đồng vay."
        }
      ],
      "ref": "p8"
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
            "x": 7044,
            "y": 110,
            "w": 560,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up"
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
            "at": "l1",
            "caption": "Thứ Ba · họp với Chủ đầu tư",
            "icon": "handshake"
          },
          {
            "id": "d-law",
            "t": "text",
            "text": "Mốc tiến độ: ghi trong GCN đăng ký đầu tư",
            "x": 5964,
            "y": 480,
            "size": 30,
            "at": "l3:Electricity",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-qh",
            "t": "text",
            "text": "Quy hoạch điện VIII điều chỉnh",
            "x": 5964,
            "y": 530,
            "size": 30,
            "at": "l3:Plan",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-qh2",
            "t": "text",
            "text": "QĐ 768/QĐ-TTg · QĐ 1509/QĐ-BCT",
            "x": 5964,
            "y": 575,
            "size": 28,
            "at": "l3:Plan",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-cur",
            "t": "text",
            "text": "Kiểm văn bản hiện hành",
            "x": 5964,
            "y": 630,
            "size": 44,
            "at": "l3:current",
            "color": "coral",
            "hl": [
              {
                "text": "hiện hành",
                "at": "l3:current"
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
          "say": "Here comes Dũng, the owner's young financing officer. Allergic to footnotes.",
          "sub": "Đây là Dũng, chuyên viên thu xếp vốn trẻ bên Chủ đầu tư. Dị ứng với chú thích.",
          "keys": [
            "thu xếp vốn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Permits are fine! The milestones are in the investment certificate.",
          "sub": "Giấy tờ ổn hết! Mốc tiến độ có trong giấy chứng nhận đầu tư rồi.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Right, as the Electricity Law twenty twenty-four requires. Lenders also check the adjusted Power Plan Eight, in its current version.",
          "sub": "Đúng như Luật Điện lực 2024 yêu cầu. Bên cho vay còn kiểm Quy hoạch điện VIII điều chỉnh, theo văn bản hiện hành.",
          "keys": [
            "văn bản hiện hành"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "Thứ Ba · phòng họp",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Mốc EPC muộn hơn mốc PPA một chút cũng được",
          "why": "Chậm quá mốc PPA, Bên mua điện có quyền chấm dứt: mất toàn bộ doanh thu.",
          "rule": "Mốc EPC đến trước mốc PPA, có khoảng đệm"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "The PPA deadline comes before the EPC's COD date. Small gap. Let's sign!",
          "sub": "Mốc PPA đến trước mốc COD của EPC. Lệch chút xíu. Ký luôn!",
          "pose": "thumb",
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
          "say": "Miss the PPA date, and the buyer may terminate. All revenue gone. Who loses most? The lender.",
          "sub": "Chậm quá mốc PPA, Bên mua điện có quyền chấm dứt, mất toàn bộ doanh thu. Ai thiệt nhất? Bên cho vay.",
          "keys": [
            "mất toàn bộ doanh thu"
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
          "who": "dung",
          "say": "EPC date first, then a buffer, then the PPA date.",
          "sub": "Mốc EPC trước, rồi khoảng đệm, rồi mới đến mốc PPA.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
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
      "id": "s11",
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
              "d-tl0",
              "d-tl2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l1:end",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-tl0",
            "t": "text",
            "text": "Mốc EPC",
            "x": 6804,
            "y": 540,
            "size": 44,
            "at": "l1:EPC",
            "color": "accent"
          },
          {
            "id": "d-ar",
            "t": "arrow",
            "from": [
              7004,
              570
            ],
            "to": [
              7184,
              570
            ],
            "at": "l1:gap"
          },
          {
            "id": "d-tl1",
            "t": "text",
            "text": "đệm",
            "x": 7054,
            "y": 500,
            "size": 36,
            "at": "l1:gap",
            "color": "muted"
          },
          {
            "id": "d-tl2",
            "t": "text",
            "text": "Mốc PPA",
            "x": 7204,
            "y": 540,
            "size": 44,
            "at": "l1:PPA",
            "color": "coral"
          },
          {
            "id": "d-take",
            "t": "text",
            "text": "Khoảng hở = rủi ro người cho vay",
            "x": 6804,
            "y": 650,
            "size": 40,
            "at": "l1:risk",
            "color": "accent",
            "hl": [
              {
                "text": "rủi ro người cho vay",
                "at": "l1:risk"
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
          "say": "Takeaway: the gap between the EPC date and the PPA date is the lender's risk.",
          "sub": "Rút ra: khoảng hở giữa mốc EPC và mốc PPA là rủi ro của người cho vay.",
          "keys": [
            "rủi ro của người cho vay"
          ]
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s12",
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
            "at": "l4",
            "fit": "E",
            "ms": 700
          },
          {
            "at": "l5",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Tư · CP, NTP, phạt chậm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l5",
                  "pose": "explain"
                }
              ],
              "props": [
                "abacus",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Wednesday",
            "caption": "Thứ Tư · bàn của Thảo",
            "icon": "abacus"
          },
          {
            "id": "e-sg",
            "t": "text",
            "text": "Ký xong ≠ chạy ngay",
            "x": 7932,
            "y": 150,
            "size": 52,
            "at": "l1:start",
            "hl": [
              {
                "text": "≠ chạy ngay",
                "at": "l1:start"
              }
            ]
          },
          {
            "id": "e-cp",
            "t": "text",
            "text": "Đủ CP → NTP",
            "x": 7932,
            "y": 240,
            "size": 56,
            "at": "l2:notice",
            "color": "accent",
            "hl": [
              {
                "text": "NTP",
                "at": "l2:notice"
              }
            ]
          },
          {
            "id": "e-cpl",
            "t": "text",
            "text": "bảo lãnh, bảo hiểm, giấy phép, ý kiến pháp lý, tạm ứng",
            "x": 7932,
            "y": 320,
            "size": 28,
            "at": "l2:guarantees",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-risk",
            "t": "text",
            "text": "CP lệch giải ngân → vốn chưa sẵn",
            "x": 7932,
            "y": 380,
            "size": 40,
            "at": "l3:drawdown",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, Wednesday. A signed EPC contract usually doesn't start running yet.",
          "sub": "Chặng ba, thứ Tư. Hợp đồng EPC ký xong thường chưa chạy ngay.",
          "keys": [
            "chưa chạy ngay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Conditions precedent come first: guarantees, insurance, permits. Then the notice to proceed, NTP.",
          "sub": "Phải đủ điều kiện tiên quyết, CP: bảo lãnh, bảo hiểm, giấy phép… Rồi mới có Thông báo khởi công, NTP.",
          "keys": [
            "điều kiện tiên quyết"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "If CPs aren't tied to drawdown, the site could start before the money is ready.",
          "sub": "Nếu CP không gắn với điều kiện giải ngân, công trường có thể khởi công khi vốn chưa sẵn.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Exactly. That's our next lesson.",
          "sub": "Chính xác. Đó là bài sau của chuỗi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Delay damages. Does the daily rate cover our debt service and fixed costs? For how many days?",
          "sub": "Phạt chậm. Mức phạt ngày có đủ bù trả nợ và chi phí cố định không? Trần đủ cho bao nhiêu ngày?",
          "pose": "point"
        }
      ],
      "sfx": [
        {
          "at": "l5",
          "key": "pop",
          "offsetMs": 200
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
            "fit": "E",
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": [
              "e-12",
              "e-8"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-ld",
            "t": "text",
            "text": "Phạt chậm: mỗi ngày chậm COD",
            "x": 7932,
            "y": 460,
            "size": 40,
            "at": "l1:each day",
            "hl": [
              {
                "text": "mỗi ngày",
                "at": "l1:each day"
              }
            ]
          },
          {
            "id": "e-12",
            "t": "text",
            "text": "Trần 12%: chỉ đầu tư công, PPP",
            "x": 7932,
            "y": 540,
            "size": 40,
            "at": "l2:twelve",
            "hl": [
              {
                "text": "12%",
                "at": "l2:twelve"
              }
            ]
          },
          {
            "id": "e-8",
            "t": "text",
            "text": "Vốn tư nhân: rủi ro trần 8%",
            "x": 7932,
            "y": 610,
            "size": 40,
            "at": "l2:eight",
            "color": "coral",
            "hl": [
              {
                "text": "8%",
                "at": "l2:eight"
              }
            ]
          },
          {
            "id": "e-dr",
            "t": "text",
            "text": "Dự thảo bỏ trần: chưa thông qua",
            "x": 7932,
            "y": 680,
            "size": 40,
            "at": "l3:draft",
            "color": "muted"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Luật Xây dựng 2025 · Luật Thương mại",
            "x": 8772,
            "y": 690,
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
          "say": "Delay damages: what the contractor pays for each day COD is late.",
          "sub": "Phạt chậm là khoản Nhà thầu trả cho mỗi ngày chậm COD."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The Construction Law twenty twenty-five caps penalties at twelve percent only for public investment and PPP. Private projects risk the Commercial Law's eight percent.",
          "sub": "Luật Xây dựng 2025: trần 12% chỉ cho đầu tư công, PPP. Dự án tư nhân có rủi ro bị cắt về trần 8% của Luật Thương mại.",
          "keys": [
            "trần 8%"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A draft removing that cap hasn't passed. Check current law.",
          "sub": "Dự thảo bỏ trần này chưa được thông qua, cần kiểm văn bản hiện hành.",
          "keys": [
            "chưa được thông qua"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Nhà thầu đổ vỡ: ngân hàng cầm được gì?",
        "illus": "broken-chain"
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
          "say": "If the contractor collapses, what does the lender actually hold?",
          "sub": "Nếu Nhà thầu đổ vỡ, bên cho vay cầm được gì trong tay?",
          "keys": [
            "cầm được gì"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s15",
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          },
          {
            "at": "l5",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm · Nhà thầu đổ vỡ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:morning"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up",
                "shield"
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
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Thursday",
            "caption": "Sáng thứ Năm · họp ba bên",
            "icon": "shield"
          },
          {
            "id": "f-g",
            "t": "text",
            "text": "Bảo lãnh tạm ứng, thực hiện,",
            "x": 60,
            "y": 1240,
            "size": 42,
            "at": "l3:advance"
          },
          {
            "id": "f-g2",
            "t": "text",
            "text": "bảo hành, công ty mẹ",
            "x": 60,
            "y": 1300,
            "size": 42,
            "at": "l3:warranty"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1410,
            "w": 44,
            "h": 44,
            "at": "l5:assigned",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1392,
            "size": 56,
            "at": "l5:assigned+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Chuyển nhượng cho ngân hàng",
            "x": 130,
            "y": 1402,
            "size": 42,
            "at": "l5:assigned+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1495,
            "w": 44,
            "h": 44,
            "at": "l5:Valid",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1477,
            "size": 56,
            "at": "l5:Valid+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Hiệu lực đến hết nghĩa vụ",
            "x": 130,
            "y": 1487,
            "size": 42,
            "at": "l5:Valid+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1580,
            "w": 44,
            "h": 44,
            "at": "l5:Issued",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 64,
            "y": 1562,
            "size": 56,
            "at": "l5:Issued+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Bên phát hành đủ tài chính",
            "x": 130,
            "y": 1572,
            "size": 42,
            "at": "l5:Issued+200"
          },
          {
            "id": "f-um",
            "t": "text",
            "text": "thiếu 1 = ô thủng",
            "x": 60,
            "y": 1690,
            "size": 56,
            "at": "l6:umbrella",
            "color": "coral",
            "hl": [
              {
                "text": "ô thủng",
                "at": "l6:umbrella"
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
          "say": "Stop four, Thursday morning. What if the contractor goes under?",
          "sub": "Chặng bốn, sáng thứ Năm. Nếu Nhà thầu mất khả năng thì sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Sam, commercial manager for the EPC contractor. Polite, precise, never in a hurry.",
          "sub": "Đây là Sam, đại diện thương mại của Nhà thầu EPC. Lịch sự, chính xác, không bao giờ vội.",
          "keys": [
            "Nhà thầu EPC"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Our package is standard: advance payment, performance, warranty, and a parent company guarantee.",
          "sub": "Bộ bảo lãnh của chúng tôi là chuẩn: tạm ứng, thực hiện, bảo hành, và bảo lãnh công ty mẹ.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That's where the backup money sits. But only if three things hold.",
          "sub": "Tiền dự phòng nằm ở đó. Nhưng chỉ có ích khi đủ ba điều.",
          "keys": [
            "ba điều"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Assigned to the lender. Valid until every obligation ends. Issued by someone financially strong.",
          "sub": "Chuyển nhượng được cho bên cho vay. Còn hiệu lực đến hết nghĩa vụ. Bên phát hành đủ năng lực tài chính.",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Miss one, and it's an umbrella with holes: pretty in sunshine, useless in rain.",
          "sub": "Thiếu một, bảo lãnh thành cái ô thủng: đẹp lúc nắng, vô dụng lúc mưa.",
          "keys": [
            "cái ô thủng"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
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
            "text": "⑤ Thứ Năm · CĐT đổ vỡ",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone"
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
            "at": "l1:afternoon",
            "caption": "Chiều thứ Năm · Dũng gọi điện",
            "icon": "mobile-phone"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "CĐT chậm trả → Nhà thầu ngừng",
            "x": 2028,
            "y": 1240,
            "size": 42,
            "at": "l1:pays late"
          },
          {
            "id": "g-dir",
            "t": "text",
            "text": "Thỏa thuận trực tiếp ba bên",
            "x": 2028,
            "y": 1330,
            "size": 46,
            "at": "l3:three-party",
            "color": "accent",
            "hl": [
              {
                "text": "ba bên",
                "at": "l3:three-party"
              }
            ]
          },
          {
            "id": "g-dir2",
            "t": "text",
            "text": "báo trước · khắc phục · step-in · novation",
            "x": 2028,
            "y": 1405,
            "size": 30,
            "at": "l3:notice",
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
          "say": "Stop five, Thursday afternoon. The reverse: the owner pays late, the contractor may stop or terminate.",
          "sub": "Chặng năm, chiều thứ Năm. Ngược lại: Chủ đầu tư chậm trả, Nhà thầu được tạm ngừng hoặc chấm dứt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "A direct agreement? We'll sign it when someone asks. No rush!",
          "sub": "Thỏa thuận trực tiếp à? Khi nào được yêu cầu thì ký. Từ từ!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Yet the three-party direct agreement is the lender's tool: notice, cure time, step-in.",
          "sub": "Nhưng thỏa thuận trực tiếp ba bên là công cụ của bên cho vay: báo trước, thời gian khắc phục, quyền tiếp nhận.",
          "keys": [
            "thỏa thuận trực tiếp ba bên"
          ]
        }
      ],
      "ref": "p16"
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
            "at": "l1",
            "fit": [
              "g-a",
              "g-a2"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": [
              "g-b",
              "g-b2"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "G",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "g-a",
            "t": "text",
            "text": "Cách A: “ký khi được yêu cầu”",
            "x": 2028,
            "y": 1490,
            "size": 40,
            "at": "l1:when asked",
            "color": "coral"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "→ biết tin khi công trường dừng",
            "x": 2058,
            "y": 1550,
            "size": 36,
            "at": "l2:stopped",
            "color": "muted"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "Cách B: ký trước giải ngân",
            "x": 2028,
            "y": 1630,
            "size": 40,
            "at": "l3:before drawdown",
            "color": "accent"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "→ báo trước, khắc phục, chạy tiếp",
            "x": 2058,
            "y": 1690,
            "size": 36,
            "at": "l3:warned"
          },
          {
            "id": "g-take",
            "t": "text",
            "text": "Quyền can thiệp: ký trước",
            "x": 2868,
            "y": 1770,
            "size": 48,
            "at": "l4:signed",
            "color": "accent",
            "hl": [
              {
                "text": "ký trước",
                "at": "l4:before"
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
          "say": "Way A: the contract only says the contractor will sign one when asked. It never gets signed.",
          "sub": "Cách A: hợp đồng chỉ ghi Nhà thầu “sẽ ký khi được yêu cầu”. Rồi chẳng bao giờ ký."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The contractor terminates, and the lender hears when the site has already stopped. Cow gone, barn later.",
          "sub": "Nhà thầu chấm dứt; bên cho vay biết tin khi công trường đã dừng. Mất bò rồi mới lo chuồng.",
          "keys": [
            "công trường đã dừng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Way B: signed before drawdown. The lender gets warned, cures the debt, and work goes on.",
          "sub": "Cách B: ký trước giải ngân. Bên cho vay được báo trước, xử lý nợ, công trường chạy tiếp.",
          "keys": [
            "ký trước giải ngân"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Step-in rights must be signed before the day you need them.",
          "sub": "Quyền can thiệp phải ký trước ngày cần dùng.",
          "keys": [
            "ký trước ngày cần dùng"
          ]
        }
      ],
      "ref": "p17,p18,p19"
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
            "at": "l1",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "H",
            "ms": 700
          },
          {
            "at": "l3",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
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
            "text": "⑥ Thứ Sáu · Bảo hiểm",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "umbrella",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                },
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
            "at": "l1:Friday",
            "caption": "Thứ Sáu · cô Hoa ghé bàn",
            "icon": "umbrella"
          },
          {
            "id": "h-ins",
            "t": "text",
            "text": "Bảo hiểm công trình + DSU",
            "x": 3996,
            "y": 1240,
            "size": 46,
            "at": "l2:start-up",
            "hl": [
              {
                "text": "DSU",
                "at": "l2:DSU"
              }
            ]
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1350,
            "w": 44,
            "h": 44,
            "at": "l3:additional",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1332,
            "size": 56,
            "at": "l3:additional+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Được bảo hiểm bổ sung",
            "x": 4066,
            "y": 1342,
            "size": 42,
            "at": "l3:additional+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1435,
            "w": 44,
            "h": 44,
            "at": "l3:subrogation",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1417,
            "size": 56,
            "at": "l3:subrogation+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Từ bỏ quyền thế quyền",
            "x": 4066,
            "y": 1427,
            "size": 42,
            "at": "l3:subrogation+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1520,
            "w": 44,
            "h": 44,
            "at": "l3:account",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1502,
            "size": 56,
            "at": "l3:account+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Tiền về tài khoản thỏa thuận",
            "x": 4066,
            "y": 1512,
            "size": 42,
            "at": "l3:account+200"
          },
          {
            "id": "h-law",
            "t": "text",
            "text": "Luật XD 2025: CĐT mua, có thể giao Nhà thầu",
            "x": 3996,
            "y": 1620,
            "size": 28,
            "at": "l4:Construction",
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
          "who": "hoa",
          "say": "Friday. Fire, flood, damaged equipment. Where is our name in the insurance?",
          "sub": "Thứ Sáu rồi. Cháy, lũ, hỏng thiết bị. Tên mình nằm ở đâu trong bảo hiểm?",
          "pose": "point"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Stop six. Construction insurance and delay in start-up cover, DSU, protect against physical loss.",
          "sub": "Chặng sáu. Bảo hiểm công trình và bảo hiểm chậm khởi động, DSU, che tổn thất vật chất.",
          "keys": [
            "DSU"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "We become an additional insured, the insurer waives subrogation, and claims go to the agreed account.",
          "sub": "Mình được ghi là người được bảo hiểm bổ sung, bên bảo hiểm từ bỏ thế quyền, tiền về tài khoản đã thỏa thuận.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "By the Construction Law twenty twenty-five, the owner buys it, or hands that to the contractor.",
          "sub": "Luật Xây dựng 2025 giao Chủ đầu tư mua bảo hiểm công trình, có quyền giao Nhà thầu mua."
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s19",
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
            "at": "l1",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": "H",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "h-am",
            "t": "text",
            "text": "Sửa giữa chừng:",
            "x": 3996,
            "y": 1690,
            "size": 44,
            "at": "l2:edits"
          },
          {
            "id": "h-am1",
            "t": "text",
            "text": "COD đã qua, giá đổi, lãi tham chiếu, bên bảo lãnh",
            "x": 3996,
            "y": 1745,
            "size": 28,
            "at": "l2:passed",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-am2",
            "t": "text",
            "text": "Hiệu lực: cần ngân hàng chấp thuận",
            "x": 3996,
            "y": 1790,
            "size": 40,
            "at": "l3:consent",
            "color": "accent",
            "hl": [
              {
                "text": "chấp thuận",
                "at": "l3:consent"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "And my fear: they amend it, and we never hear.",
          "sub": "Còn cô sợ nhất: hai bên sửa hợp đồng mà mình không biết.",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Mid-way edits happen: COD passed, price changed, a new guarantor.",
          "sub": "Sửa giữa chừng là chuyện thường: COD đã qua, giá đổi, bên bảo lãnh đổi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A good amendment makes lender consent a condition to take effect, plus the credit insurer's if any.",
          "sub": "Phụ lục tốt ghi rõ điều kiện hiệu lực, gồm chấp thuận của bên cho vay và bên bảo hiểm tín dụng nếu có.",
          "keys": [
            "chấp thuận của bên cho vay"
          ]
        }
      ],
      "ref": "p21"
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
            "at": "l4",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Chiều thứ Sáu · Đọc từ đâu?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1240,
            "w": 780,
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
                "magnifying-glass-tilted-left"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Friday",
            "caption": "Chiều thứ Sáu · bàn của Thảo",
            "icon": "magnifying-glass-tilted-left"
          },
          {
            "id": "i-ie",
            "t": "text",
            "text": "Tư vấn kỹ thuật độc lập",
            "x": 5964,
            "y": 1235,
            "size": 44,
            "at": "l2:independent",
            "hl": [
              {
                "text": "độc lập",
                "at": "l2:independent"
              }
            ]
          },
          {
            "id": "i-ie2",
            "t": "text",
            "text": "theo dõi tiến độ, chất lượng; kiểm sau hoàn thành cơ khí",
            "x": 5964,
            "y": 1295,
            "size": 28,
            "at": "l2:quality",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1390,
            "w": 44,
            "h": 44,
            "at": "l4:one",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1372,
            "size": 56,
            "at": "l4:one+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "COD, tiến độ ↔ mốc PPA",
            "x": 6034,
            "y": 1382,
            "size": 40,
            "at": "l4:one+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1470,
            "w": 44,
            "h": 44,
            "at": "l4:two",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1452,
            "size": 56,
            "at": "l4:two+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "CP, NTP ↔ giải ngân",
            "x": 6034,
            "y": 1462,
            "size": 40,
            "at": "l4:two+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1550,
            "w": 44,
            "h": 44,
            "at": "l5:three",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1532,
            "size": 56,
            "at": "l5:three+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Phạt chậm, trần, chấm dứt",
            "x": 6034,
            "y": 1542,
            "size": 40,
            "at": "l5:three+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1630,
            "w": 44,
            "h": 44,
            "at": "l5:four",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1612,
            "size": 56,
            "at": "l5:four+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Bảo đảm, can thiệp, sửa đổi",
            "x": 6034,
            "y": 1622,
            "size": 40,
            "at": "l5:four+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, Friday afternoon. Where do you start reading?",
          "sub": "Chặng bảy, chiều thứ Sáu. Đọc từ đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An independent engineer tracks progress and quality for the lender.",
          "sub": "Tư vấn kỹ thuật độc lập theo dõi tiến độ, chất lượng cho bên cho vay.",
          "keys": [
            "Tư vấn kỹ thuật độc lập"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But the clauses, the analyst reads herself, in a fixed order.",
          "sub": "Còn điều khoản thì chuyên viên tự đọc, theo thứ tự cố định.",
          "keys": [
            "thứ tự cố định"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Step one: COD and schedule, beside the PPA date. Step two: CPs and NTP, against drawdown.",
          "sub": "Bước một: COD, tiến độ, đặt cạnh mốc PPA. Bước hai: CP, NTP, so với điều kiện giải ngân.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Step three: damages, cap, termination. Step four: guarantees, direct agreement, insurance, amendments.",
          "sub": "Bước ba: phạt chậm, trần, chấm dứt. Bước bốn: bảo lãnh, thỏa thuận trực tiếp, bảo hiểm, sửa đổi."
        }
      ],
      "ref": "p22,p23"
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
            "at": "l2",
            "fit": [
              "i-take"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "I",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "i-list",
            "t": "text",
            "text": "Điểm vênh → đề nghị sửa",
            "x": 5964,
            "y": 1710,
            "size": 44,
            "at": "l1:mismatch",
            "hl": [
              {
                "text": "đề nghị sửa",
                "at": "l1:changes"
              }
            ]
          },
          {
            "id": "i-take",
            "t": "text",
            "text": "Mốc → phạt → bảo đảm → can thiệp",
            "x": 5964,
            "y": 1790,
            "size": 42,
            "at": "l2:milestones",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Every mismatch goes on a list of changes before drawdown.",
          "sub": "Mỗi điểm vênh vào danh sách đề nghị sửa trước giải ngân.",
          "keys": [
            "đề nghị sửa trước giải ngân"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read along the cash flow: milestones, damages, security, then step-in rights.",
          "sub": "Đọc theo dòng tiền: mốc, phạt, bảo đảm, rồi quyền can thiệp.",
          "keys": [
            "Đọc theo dòng tiền"
          ]
        }
      ],
      "ref": "p23,p24"
    },
    {
      "id": "s22",
      "module": "BRK-08",
      "data": {
        "title": "Sáu bài đào sâu",
        "points": [
          {
            "label": "CP · NTP",
            "sub": "khớp giải ngân",
            "illus": "check-box-with-check"
          },
          {
            "label": "Phạt chậm",
            "sub": "trần, số ngày",
            "illus": "stopwatch"
          },
          {
            "label": "Bảo lãnh",
            "sub": "chuyển nhượng",
            "illus": "shield"
          },
          {
            "label": "TT trực tiếp",
            "sub": "step-in",
            "illus": "handshake"
          },
          {
            "label": "Bảo hiểm",
            "sub": "đứng tên",
            "illus": "umbrella"
          },
          {
            "label": "Sửa đổi",
            "sub": "chấp thuận",
            "illus": "memo"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Six deep dives: conditions precedent, delay damages, guarantees,",
          "sub": "Sáu bài đào sâu: điều kiện tiên quyết, phạt chậm, bảo lãnh,"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "direct agreements, insurance, and mid-way amendments.",
          "sub": "thỏa thuận trực tiếp, bảo hiểm, rồi sửa hợp đồng giữa chừng.",
          "keys": [
            "sửa hợp đồng giữa chừng"
          ]
        }
      ],
      "ref": "p25"
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
            "text": "Sáng thứ Hai tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Next Monday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "office",
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
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "file-cabinet",
                "memo"
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
                  "shot": "E-SHOT-05",
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
            "at": "l1:Next Monday",
            "caption": "Sáng thứ Hai tuần sau · cùng bàn",
            "icon": "bank"
          },
          {
            "id": "j-memo",
            "t": "illus",
            "name": "memo",
            "x": 7932,
            "y": 1250,
            "size": 110,
            "at": "l2:list"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "COD ↔ PPA ↔ lịch trả nợ ✓",
            "x": 8062,
            "y": 1265,
            "size": 40,
            "at": "l2:repayment"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Danh sách đề nghị sửa ✓",
            "x": 8062,
            "y": 1335,
            "size": 40,
            "at": "l2:list"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Mất bò mới lo làm chuồng?",
            "x": 7932,
            "y": 1490,
            "size": 48,
            "at": "l4:cow",
            "color": "muted"
          },
          {
            "id": "j-cax",
            "t": "strike",
            "over": "j-ca",
            "at": "l4:This time"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "Chuồng xong trước giải ngân",
            "x": 7932,
            "y": 1580,
            "size": 56,
            "at": "l4:barn",
            "color": "accent",
            "hl": [
              {
                "text": "trước giải ngân",
                "at": "l4:money leaves"
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
          "say": "Next Monday morning. Same desk, same pile of contracts.",
          "sub": "Sáng thứ Hai tuần sau. Vẫn bàn ấy, vẫn chồng hợp đồng ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "COD next to the PPA date and the repayment schedule. The change list is ready.",
          "sub": "Mốc COD đặt cạnh mốc PPA và lịch trả nợ. Danh sách đề nghị sửa xong rồi ạ.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Right. Send it before drawdown!",
          "sub": "Rồi, gửi trước giải ngân nha!",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No losing the cow first. This time the barn is built before the money leaves.",
          "sub": "Không đợi mất bò. Lần này chuồng dựng xong trước khi tiền rời ngân hàng.",
          "keys": [
            "chuồng dựng xong"
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
      "ref": "p4,outro"
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
            "at": "l1:bankable",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:PPA",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:step-in",
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
            "x": 5536,
            "y": 20,
            "at": "l1:bankable"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7504,
            "y": 20,
            "at": "l2:PPA"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3568,
            "y": 1110,
            "at": "l3:step-in+900"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung, không phải tư vấn pháp lý; tình huống là minh hoạ, không lấy từ hợp đồng hay dự án cụ thể nào.",
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
          "say": "So: a bankable EPC keeps milestones, price, damages and security firm, so repayment never breaks.",
          "sub": "Tóm lại: EPC bankable có mốc, giá, phạt, bảo đảm đủ chắc để dòng tiền trả nợ không đứt.",
          "keys": [
            "dòng tiền trả nợ không đứt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Keep the EPC date ahead of the PPA date.",
          "sub": "Giữ mốc EPC đến trước mốc PPA.",
          "keys": [
            "trước mốc PPA"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And sign step-in rights before you ever need them.",
          "sub": "Và ký quyền can thiệp trước ngày cần dùng.",
          "keys": [
            "quyền can thiệp"
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
        "q": "The power purchase deadline comes before the EPC operation date, who faces the biggest risk?",
        "options": [
          "Nobody, because the two contracts are separate and never affect each other",
          "The contractor, because it must pay a fine to the power buyer directly",
          "The lender, because the project may lose its power contract and all revenue"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "high-voltage",
        "why": "Nhà thầu chưa vi phạm hợp đồng EPC, nhưng dự án đã có thể mất PPA. Mối lo được các hãng luật nhấn mạnh: với bên cho vay, chậm dẫn tới PPA bị chấm dứt và mất toàn bộ doanh thu."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The power purchase deadline comes before the EPC operation date, who faces the biggest risk?",
          "sub": "Mốc PPA đến trước mốc COD của hợp đồng EPC, ai chịu rủi ro lớn nhất?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The lender. A missed PPA date can end all revenue.",
          "sub": "Bên cho vay. Lỡ mốc PPA có thể mất toàn bộ doanh thu."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[17]"
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Right now: put the COD date next to the PPA date and the repayment schedule.",
          "sub": "Việc làm ngay: đặt mốc COD cạnh mốc PPA và lịch trả nợ.",
          "keys": [
            "mốc COD cạnh mốc PPA"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: conditions precedent and drawdown. Now, forty questions below!",
          "sub": "Bài sau: điều kiện tiên quyết và giải ngân. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-20",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-20 (đáp án trước): “Ngân hàng không ký hợp đồng EPC, nhưng khoản vay sống nhờ từng câu trong đó” + ba chi tiết hay sai (p3) → Thảo, cô Hoa sáng thứ Hai. Dòng thời gian: MỘT TUẦN THẨM ĐỊNH của Thảo (T2 nhận hồ sơ → ① T2 bankable p5–p7, p2 → ② T3 chuỗi hợp đồng p8–p9, “Khoan đã!” Dũng lệch mốc EPC/PPA p10–p11 → ③ T4 CP/NTP p12, phạt chậm p13–p14 → ④ sáng T5 bảo lãnh, Sam p15 → ⑤ chiều T5 thỏa thuận trực tiếp Cách A/B p16–p19 → ⑥ T6 bảo hiểm p20, sửa đổi p21 → ⑦ chiều T6 bốn bước đọc p22–p24, lộ trình p25 → sáng T2 sau khép vòng). Nhân vật: w145/_series/epc-lender.md (Thảo thẩm định, cô Hoa trưởng phòng, Dũng bên Chủ đầu tư, Sam bên Nhà thầu). Không nêu tên hãng luật (bài dẫn → nói chung). Tục ngữ mở/khép: “Mất bò mới lo làm chuồng” (lật: làm chuồng trước giải ngân). BRK: 04 (hiểu lầm p3), 07 (rehook trước ④), 08 (sáu bài đào sâu p25). Số chỉ lấy từ bài: NĐ 210/2026, Luật Điện lực 2024, QĐ 768/QĐ-TTg, 1509/QĐ-BCT, Luật Xây dựng 2025 trần 12%, LTM trần 8%. Câu đố questions[17].",
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
