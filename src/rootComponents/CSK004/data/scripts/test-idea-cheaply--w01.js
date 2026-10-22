// test-idea-cheaply--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "test-idea-cheaply--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "first-time-founders-after-35",
    "slug": "test-idea-cheaply",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Thử ý tưởng với ít tiền nhất bằng cách nào?",
    "series": "Khởi nghiệp lần đầu khi đã có gia đình — cho người rời công sở để làm chủ"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
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
            "id": "a-q",
            "t": "text",
            "text": "Đoán nhanh: cái nào bán chạy?",
            "x": 60,
            "y": 40,
            "size": 60,
            "at": "l1:guess",
            "hl": [
              {
                "text": "Đoán nhanh",
                "at": "l1:guess"
              }
            ]
          },
          {
            "id": "a-ba",
            "t": "box",
            "x": 60,
            "y": 150,
            "w": 760,
            "h": 250,
            "at": "l2:A",
            "stroke": 5
          },
          {
            "id": "a-ia",
            "t": "illus",
            "name": "books",
            "x": 90,
            "y": 180,
            "size": 110,
            "at": "l2:A"
          },
          {
            "id": "a-ta",
            "t": "text",
            "text": "A · Bản dày, đủ chi tiết",
            "x": 220,
            "y": 200,
            "size": 46,
            "at": "l2:A+200"
          },
          {
            "id": "a-bb",
            "t": "box",
            "x": 900,
            "y": 150,
            "w": 760,
            "h": 250,
            "at": "l2:B",
            "stroke": 5
          },
          {
            "id": "a-ib",
            "t": "illus",
            "name": "ticket",
            "x": 930,
            "y": 180,
            "size": 110,
            "at": "l2:B"
          },
          {
            "id": "a-tb",
            "t": "text",
            "text": "B · Bản gọn, nói vé rẻ",
            "x": 1060,
            "y": 200,
            "size": 46,
            "at": "l2:B+200"
          },
          {
            "id": "a-na",
            "t": "text",
            "text": "100 bản",
            "x": 220,
            "y": 290,
            "size": 72,
            "at": "l3:hundred",
            "color": "coral"
          },
          {
            "id": "a-nb",
            "t": "text",
            "text": "500 bản",
            "x": 1060,
            "y": 290,
            "size": 72,
            "at": "l3:five hundred",
            "color": "accent",
            "hl": [
              {
                "text": "500 bản",
                "at": "l3:five hundred"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Chris Guillebeau, How to Test Your Business Idea",
            "x": 60,
            "y": 720,
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
          "say": "Quick guess for you. Same author, two travel products. Which sold more on launch day?",
          "sub": "Đoán nhanh nhé bạn. Cùng tác giả, hai sản phẩm du lịch. Cái nào bán chạy hơn ngày ra mắt?",
          "keys": [
            "Đoán nhanh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: packed with detail on how airlines work. B: simple, all about cheap tickets.",
          "sub": "A: dày đặc chi tiết cách hãng bay vận hành. B: gọn, chỉ nói chuyện vé rẻ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Detailed Travel Ninja: one hundred. Simple Frequent Flyer Master: five hundred.",
          "sub": "Travel Ninja dày đặc: 100 bản. Frequent Flyer Master gọn gàng: 500 bản.",
          "keys": [
            "500 bản"
          ],
          "wait": 1500
        }
      ],
      "ref": "p8"
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
                "wrench",
                "crescent-moon"
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
            "caption": "Tối ngày 0 · ở nhà",
            "icon": "crescent-moon"
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "Khách mua kết quả",
            "x": 60,
            "y": 440,
            "size": 64,
            "at": "l3:results",
            "color": "accent",
            "hl": [
              {
                "text": "kết quả",
                "at": "l3:results"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Lửa thử vàng”",
            "x": 60,
            "y": 560,
            "size": 60,
            "at": "l4:Fire",
            "color": "accent",
            "hl": [
              {
                "text": "thử vàng",
                "at": "l4:tests gold"
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
          "say": "Meet Dũng. Forty, a maintenance engineer, with a problem worth solving: machines stopping all day.",
          "sub": "Đây là Dũng. 40 tuổi, kỹ sư bảo trì, đã có một vấn đề đáng giải: máy xưởng ngừng cả ngày.",
          "keys": [
            "máy xưởng ngừng cả ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My offer: page after page. Every bolt, every step!",
          "sub": "Lời chào của tôi: trang nối trang. Từng con ốc, từng bước một!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful, Dũng. Customers buy results, not thickness.",
          "sub": "Cẩn thận, Dũng. Khách mua kết quả, không mua độ dày.",
          "keys": [
            "Khách mua kết quả"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: fire tests gold. And money tests an idea.",
          "sub": "Ông bà nói: “Lửa thử vàng.” Còn tiền thật thì thử ý tưởng.",
          "keys": [
            "Lửa thử vàng"
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
      "ref": "intro,p9"
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
            "text": "Thử thế nào cho rẻ nhất?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:least",
            "hl": [
              {
                "text": "rẻ nhất",
                "at": "l1:least money"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Làm xong rồi mới bán",
            "x": 2028,
            "y": 160,
            "size": 54,
            "at": "l2:build",
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
            "text": "Thị trường trước, sản xuất sau",
            "x": 2028,
            "y": 250,
            "size": 54,
            "at": "l2:market",
            "color": "accent",
            "hl": [
              {
                "text": "Thị trường trước",
                "at": "l2:market"
              }
            ]
          },
          {
            "id": "b-fam",
            "t": "text",
            "text": "Tránh vài tuần, một khoản tiền",
            "x": 2028,
            "y": 345,
            "size": 46,
            "at": "l3:weeks"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you test a business idea with the least money, before the family savings go in?",
          "sub": "Vậy thử ý tưởng kinh doanh với ít tiền nhất thế nào, trước khi dồn tiền tiết kiệm của nhà?",
          "keys": [
            "ít tiền nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not build first, sell later. But market first, manufacturing later.",
          "sub": "Không phải làm xong rồi mới bán. Mà là thị trường trước, sản xuất sau.",
          "keys": [
            "thị trường trước, sản xuất sau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "If nobody pays, you save weeks of work, and money the family didn't need to spend.",
          "sub": "Nếu không ai trả tiền, bạn tránh được vài tuần công sức, và một khoản tiền nhà chưa cần chi."
        }
      ],
      "ref": "intro,p1"
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
            "id": "b-t",
            "t": "text",
            "text": "Thử: có đáng theo đuổi?",
            "x": 2028,
            "y": 450,
            "size": 50,
            "at": "l1:Testing",
            "hl": [
              {
                "text": "Thử",
                "at": "l1:Testing"
              }
            ]
          },
          {
            "id": "b-v",
            "t": "text",
            "text": "Kiểm chứng: có bằng chứng trả tiền",
            "x": 2028,
            "y": 530,
            "size": 50,
            "at": "l1:validating",
            "color": "accent",
            "hl": [
              {
                "text": "bằng chứng",
                "at": "l1:proof"
              }
            ]
          },
          {
            "id": "b-12",
            "t": "text",
            "text": "1–2 tuần · việc nhỏ · hạn chót",
            "x": 2028,
            "y": 630,
            "size": 46,
            "at": "l2:week",
            "color": "coral",
            "hl": [
              {
                "text": "hạn chót",
                "at": "l3:deadline"
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
          "say": "Guillebeau splits two words. Testing asks: is it worth pursuing? Validating needs proof that people pay.",
          "sub": "Guillebeau tách hai chữ. Thử là xem có đáng theo đuổi không. Kiểm chứng đòi bằng chứng người ta trả tiền.",
          "keys": [
            "bằng chứng người ta trả tiền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A test takes a week or two at most, and not every step is required.",
          "sub": "Một phép thử thường chỉ nhiều nhất một hai tuần, không phải bước nào cũng bắt buộc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not a long project. A few small tasks with a deadline. Dũng's clock starts now.",
          "sub": "Không phải dự án dài, mà là vài việc nhỏ có hạn chót. Đồng hồ của Dũng bắt đầu chạy.",
          "keys": [
            "vài việc nhỏ có hạn chót"
          ]
        }
      ],
      "ref": "p2"
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
            "at": "l5",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "Ngày 1 · Thử gần như 0 đồng",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Day one",
            "hl": [
              {
                "text": "0 đồng",
                "at": "l1:nothing"
              }
            ]
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
                  "side": "center",
                  "pose": "think",
                  "face": "surprised"
                }
              ],
              "props": [
                "laptop",
                "magnifying-glass-tilted-left"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3",
            "caption": "Ngày 1 · tối · máy tính",
            "icon": "laptop"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "① Hỏi ~10 người đúng khách",
            "x": 3996,
            "y": 160,
            "size": 48,
            "at": "l2:ten",
            "hl": [
              {
                "text": "10 người",
                "at": "l2:ten"
              }
            ]
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "đang làm sao? trả bao nhiêu?",
            "x": 4046,
            "y": 230,
            "size": 38,
            "at": "l2:handle",
            "color": "muted"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "② Gõ từ khách sẽ tìm",
            "x": 3996,
            "y": 310,
            "size": 48,
            "at": "l3:type"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "gợi ý tự động, từ khoá free",
            "x": 4046,
            "y": 380,
            "size": 38,
            "at": "l3:suggestions",
            "color": "muted"
          },
          {
            "id": "c-ad",
            "t": "text",
            "text": "Có quảng cáo = có người trả tiền",
            "x": 3996,
            "y": 470,
            "size": 44,
            "at": "l5:ad",
            "color": "accent",
            "hl": [
              {
                "text": "có người trả tiền",
                "at": "l5:pay"
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
          "say": "Day one. Two tests that cost almost nothing.",
          "sub": "Ngày 1. Hai phép thử gần như không tốn đồng nào.",
          "keys": [
            "gần như không tốn đồng nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask about ten people who fit your customer how they handle it now, and what they'd pay for better.",
          "sub": "Hỏi khoảng mười người đúng chân dung khách: đang xử lý thế nào, sẽ trả bao nhiêu cho cách tốt hơn.",
          "keys": [
            "mười người"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then type the words they would search, read the suggestions, try free keyword tools.",
          "sub": "Rồi gõ những từ họ sẽ tìm, xem gợi ý tự động, dùng công cụ từ khoá miễn phí."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Look, there are ads for machine maintenance on the results page!",
          "sub": "Ơ, trang kết quả có cả quảng cáo dịch vụ bảo trì máy!",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Good news. An ad there means businesses already pay to reach those searchers.",
          "sub": "Tin vui. Có quảng cáo nghĩa là đã có doanh nghiệp trả tiền để tiếp cận người đang tìm.",
          "keys": [
            "trả tiền để tiếp cận"
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
            "text": "Ngày 2 · Phép thử mạnh nhất",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Day two",
            "hl": [
              {
                "text": "mạnh nhất",
                "at": "l1:strongest"
              }
            ]
          },
          {
            "id": "d-pre",
            "t": "text",
            "text": "Mời mua trước, giá thật",
            "x": 5964,
            "y": 160,
            "size": 56,
            "at": "l1:pre-order",
            "color": "accent",
            "hl": [
              {
                "text": "giá thật",
                "at": "l1:real price"
              }
            ]
          },
          {
            "id": "d-chua",
            "t": "text",
            "text": "khi sản phẩm chưa xong",
            "x": 5964,
            "y": 245,
            "size": 44,
            "at": "l1:finished",
            "color": "muted"
          },
          {
            "id": "d-khen",
            "t": "text",
            "text": "Lời khen: 0 đồng",
            "x": 5964,
            "y": 340,
            "size": 52,
            "at": "l2:Praise",
            "color": "muted"
          },
          {
            "id": "d-coc",
            "t": "text",
            "text": "Tiền đặt trước: tiền thật",
            "x": 5964,
            "y": 420,
            "size": 52,
            "at": "l2:prepayment",
            "color": "coral",
            "hl": [
              {
                "text": "tiền thật",
                "at": "l2:real money"
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
          "say": "Day two. The strongest test: invite a pre-order at a real price, before the product is finished.",
          "sub": "Ngày 2. Phép thử mạnh nhất: mời mua trước với giá thật, khi sản phẩm còn chưa xong.",
          "keys": [
            "mời mua trước với giá thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Praise costs the speaker nothing. A prepayment costs real money.",
          "sub": "Lời khen không tốn gì của người nói. Tiền đặt trước thì tốn tiền thật.",
          "keys": [
            "Tiền đặt trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That's why it comes closest to real validation.",
          "sub": "Vì vậy, nó gần nhất với kiểm chứng thật."
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s06",
      "module": "BRK-08",
      "data": {
        "title": "Bán trước khi viết một chữ",
        "points": [
          {
            "label": "Quảng cáo",
            "sub": "trước khi viết",
            "illus": "newspaper"
          },
          {
            "label": "2 người đặt",
            "sub": "mua trước",
            "illus": "money-bag"
          },
          {
            "label": "Chờ 30 ngày",
            "sub": "kèm hoàn tiền",
            "illus": "spiral-calendar"
          },
          {
            "label": "Viết xong",
            "sub": "trong tháng đó",
            "illus": "open-book"
          },
          {
            "label": "+10 bản",
            "sub": "những tháng sau",
            "illus": "chart-increasing"
          }
        ],
        "current": 4
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A friend of Guillebeau advertised a luxury car guide before writing a word. Two ordered.",
          "sub": "Bạn của Guillebeau quảng cáo cuốn hướng dẫn xe hơi cao cấp trước khi viết chữ nào. Hai người đặt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "They waited thirty days, refund promised. He finished, then sold ten more.",
          "sub": "Họ chờ ba mươi ngày, có quyền hoàn tiền. Anh viết xong, rồi bán thêm mười bản.",
          "keys": [
            "ba mươi ngày"
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
            "at": "l2",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2:end",
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
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "money-bag",
                "notebook"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l2:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Ngày 2 · tối",
            "icon": "money-bag"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Đặt trước = trả lời rõ nhất",
            "x": 5964,
            "y": 540,
            "size": 44,
            "at": "l1:clearest",
            "color": "accent",
            "hl": [
              {
                "text": "rõ nhất",
                "at": "l1:clearest"
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
          "say": "Money paid in advance is the clearest answer to: will anyone buy?",
          "sub": "Khách đặt tiền trước là câu trả lời rõ nhất cho câu hỏi “có ai mua không”.",
          "keys": [
            "câu trả lời rõ nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "So my test needs a price, and a deposit. Not just a smile.",
          "sub": "Vậy phép thử của tôi cần giá, cần tiền cọc. Không chỉ một nụ cười.",
          "face": "thinking"
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
            "text": "Ngày 3 · Bản đầu nhỏ cỡ nào?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Day three",
            "hl": [
              {
                "text": "nhỏ",
                "at": "l1:small"
              }
            ]
          },
          {
            "id": "e-out",
            "t": "text",
            "text": "Dàn ý cho nhóm nhỏ",
            "x": 7932,
            "y": 160,
            "size": 52,
            "at": "l2:outline"
          },
          {
            "id": "e-swap",
            "t": "text",
            "text": "dùng free ↔ góp ý, giữ bí mật",
            "x": 7972,
            "y": 240,
            "size": 40,
            "at": "l2:feedback",
            "color": "muted"
          },
          {
            "id": "e-fan",
            "t": "text",
            "text": "→ thành người ủng hộ",
            "x": 7972,
            "y": 305,
            "size": 44,
            "at": "l3:supporters",
            "color": "accent",
            "hl": [
              {
                "text": "ủng hộ",
                "at": "l3:supporters"
              }
            ]
          },
          {
            "id": "e-svc",
            "t": "text",
            "text": "Dịch vụ: gói thử, khách quen",
            "x": 7932,
            "y": 400,
            "size": 44,
            "at": "l4:service",
            "hl": [
              {
                "text": "gói thử",
                "at": "l4:trial"
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
          "say": "Day three. How small should the first version be?",
          "sub": "Ngày 3. Bản đầu tiên nên nhỏ đến mức nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Share an outline with a small group from your community: free access, for feedback and confidentiality.",
          "sub": "Chia sẻ dàn ý với một nhóm nhỏ trong cộng đồng: dùng thử miễn phí, đổi lại góp ý và giữ bí mật."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "These people often become your supporters at launch.",
          "sub": "Những người này thường thành người ủng hộ khi bạn ra mắt.",
          "keys": [
            "người ủng hộ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "For a service, it can be a trial package for a few familiar clients.",
          "sub": "Với dịch vụ, bản đầu có thể chỉ là một gói làm thử cho vài khách quen.",
          "keys": [
            "gói làm thử"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Sản phẩm càng đầy đủ, càng chi tiết thì càng bán được",
        "right": "Khách mua kết quả, không mua độ dày",
        "wrongIllus": "books",
        "rightIllus": "ticket"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The fuller and more detailed, the better it sells?",
          "sub": "Càng đầy đủ, càng chi tiết thì càng bán được?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. Customers buy results, not thickness.",
          "sub": "Không. Khách mua kết quả, không mua độ dày.",
          "keys": [
            "không mua độ dày"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
            "at": "l3",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
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
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "scissors"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3",
            "caption": "Ngày 3 · cắt lời chào",
            "icon": "scissors"
          },
          {
            "id": "e-tn",
            "t": "text",
            "text": "Travel Ninja: quá chi tiết → 100",
            "x": 7932,
            "y": 500,
            "size": 40,
            "at": "l1:Travel",
            "color": "muted"
          },
          {
            "id": "e-ff",
            "t": "text",
            "text": "FFM: gọn → 500 · > 50.000 đô năm đầu",
            "x": 7932,
            "y": 570,
            "size": 40,
            "at": "l2:fifty",
            "color": "accent",
            "hl": [
              {
                "text": "50.000 đô",
                "at": "l2:fifty thousand"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: Guillebeau · FFM = Frequent Flyer Master",
            "x": 7932,
            "y": 720,
            "size": 24,
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
          "say": "Travel Ninja explained airlines in detail, but buyers just wanted cheap tickets.",
          "sub": "Travel Ninja giảng kỹ cách hãng bay vận hành, mà khách chỉ muốn vé rẻ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A year later, a simple pitch: five hundred on day one, over fifty thousand dollars net in year one.",
          "sub": "Một năm sau, lời giới thiệu gọn: 500 bản ngày đầu, hơn 50.000 đô la thu nhập ròng năm đầu.",
          "keys": [
            "50.000 đô la"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Fine. Half a page: fewer machine stoppages. Bolts can wait.",
          "sub": "Được rồi. Nửa trang thôi: máy ít ngừng hơn. Con ốc để sau.",
          "face": "happy"
        }
      ],
      "ref": "p8,p9"
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
            "at": "l5:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "Ngày 4 · Đo bằng con số",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Day four",
            "hl": [
              {
                "text": "con số",
                "at": "l1:numbers"
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "bar-chart",
                "envelope"
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
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:five",
            "caption": "Ngày 4 · bàn làm việc",
            "icon": "bar-chart"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l2:half",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 65,
            "y": 1246,
            "size": 56,
            "at": "l2:half+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Nửa trang: việc, kết quả, giá thật",
            "x": 126,
            "y": 1250,
            "size": 42,
            "at": "l2:half+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1345,
            "w": 44,
            "h": 44,
            "at": "l2:ten",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 65,
            "y": 1331,
            "size": 56,
            "at": "l2:ten+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Gửi ~10 chủ xưởng đúng chân dung",
            "x": 126,
            "y": 1335,
            "size": 42,
            "at": "l2:ten+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1430,
            "w": 44,
            "h": 44,
            "at": "l3:table",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 65,
            "y": 1416,
            "size": 56,
            "at": "l3:table+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Bảng: trả lời · hỏi giá · đặt cọc",
            "x": 126,
            "y": 1420,
            "size": 42,
            "at": "l3:table+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1515,
            "w": 44,
            "h": 44,
            "at": "l4:reason",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 65,
            "y": 1501,
            "size": 56,
            "at": "l4:reason+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Người từ chối: ghi đúng lời họ",
            "x": 126,
            "y": 1505,
            "size": 42,
            "at": "l4:reason+200"
          },
          {
            "id": "f-c4",
            "t": "box",
            "x": 60,
            "y": 1600,
            "w": 44,
            "h": 44,
            "at": "l5:deadline",
            "stroke": 5
          },
          {
            "id": "f-k4",
            "t": "text",
            "text": "✓",
            "x": 65,
            "y": 1586,
            "size": 56,
            "at": "l5:deadline+600",
            "color": "accent"
          },
          {
            "id": "f-l4",
            "t": "text",
            "text": "Hạn chót 2 tuần, rồi mới quyết",
            "x": 126,
            "y": 1590,
            "size": 42,
            "at": "l5:deadline+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Day four. Measure feedback with numbers, not feelings. Dũng's five steps.",
          "sub": "Ngày 4. Đo phản hồi bằng con số, không bằng cảm giác. Năm bước của Dũng.",
          "keys": [
            "bằng con số"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "One: a half page with the work, the result, a real price. Two: send it to, say, ten owners.",
          "sub": "Một: nửa trang gồm việc làm, kết quả, giá thật. Hai: gửi cho, giả sử, mười chủ xưởng.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Three: a table with three numbers. Replies, people asking the price, people agreeing to a deposit.",
          "sub": "Ba: một bảng ba con số. Bao nhiêu người trả lời, hỏi kỹ giá, đồng ý đặt cọc.",
          "keys": [
            "đồng ý đặt cọc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Four: for every no, the reason in their own words.",
          "sub": "Bốn: ai từ chối, ghi lý do bằng chính lời họ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Five: a two-week deadline. I look at the table only then.",
          "sub": "Năm: hạn chót hai tuần. Tới hạn mới nhìn bảng mà quyết.",
          "keys": [
            "hạn chót hai tuần"
          ],
          "face": "happy"
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Ngày 9 · tối",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "thumb",
            "face": "happy"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đếm người nói “hay đấy”",
          "why": "Lời khen không tốn gì; chưa ai đặt cọc thì chưa có bằng chứng khách sẽ mua.",
          "rule": "Ghi số người đặt cọc"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Lots of owners said it sounds nice! Success!",
          "sub": "Nhiều chủ xưởng khen “hay đấy”! Thành công rồi!",
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
          "say": "Compliments are free. How many paid a deposit?",
          "sub": "Lời khen thì miễn phí. Mấy người đặt cọc?",
          "keys": [
            "đặt cọc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Replies, price questions, deposits. I count the deposit column.",
          "sub": "Trả lời, hỏi giá, đặt cọc. Tôi đếm cột đặt cọc.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Count deposits, not 'sounds nice'.",
          "sub": "Đúng. Ghi số người đặt cọc, đừng ghi số người nói “hay đấy”.",
          "phase": "redo",
          "keys": [
            "Ghi số người đặt cọc"
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
            "text": "Nhiều ý? Chấm 1–5",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:scores",
            "hl": [
              {
                "text": "1–5",
                "at": "l1:five"
              }
            ]
          },
          {
            "id": "g-c0",
            "t": "text",
            "text": "• Tác động",
            "x": 2028,
            "y": 1250,
            "size": 46,
            "at": "l2:impact"
          },
          {
            "id": "g-c1",
            "t": "text",
            "text": "• Công sức (chấm ngược)",
            "x": 2028,
            "y": 1320,
            "size": 46,
            "at": "l2:effort",
            "color": "coral"
          },
          {
            "id": "g-c2",
            "t": "text",
            "text": "• Khả năng sinh lời",
            "x": 2028,
            "y": 1390,
            "size": 46,
            "at": "l3:profitability"
          },
          {
            "id": "g-c3",
            "t": "text",
            "text": "• Hợp hướng đi",
            "x": 2028,
            "y": 1460,
            "size": 46,
            "at": "l3:fit"
          },
          {
            "id": "g-rev",
            "t": "text",
            "text": "tốn công: 1 · gần như 0: 5",
            "x": 2068,
            "y": 1550,
            "size": 36,
            "at": "l2:reverse",
            "color": "muted"
          },
          {
            "id": "g-sum",
            "t": "text",
            "text": "Cộng điểm → ý cao làm trước",
            "x": 2028,
            "y": 1630,
            "size": 48,
            "at": "l4:highest",
            "color": "accent",
            "hl": [
              {
                "text": "làm trước",
                "at": "l4:first"
              }
            ]
          },
          {
            "id": "g-ws",
            "t": "text",
            "text": "2011: hội thảo trực tiếp = 10 điểm",
            "x": 2028,
            "y": 1720,
            "size": 42,
            "at": "l5:workshops",
            "hl": [
              {
                "text": "10 điểm",
                "at": "l5:ten points"
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
          "say": "Many ideas at once? Guillebeau scores each from one to five.",
          "sub": "Nhiều ý cùng lúc? Guillebeau chấm mỗi ý từ 1 đến 5."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "On impact, and on effort, scored in reverse: lots of work gets one.",
          "sub": "Theo tác động, và công sức, chấm ngược: rất tốn công thì 1 điểm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then profitability compared with other ideas, and fit with your overall direction.",
          "sub": "Rồi khả năng sinh lời so với các ý khác, và độ hợp với hướng đi chung."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Add them up. The highest goes first.",
          "sub": "Cộng điểm, ý cao nhất làm trước.",
          "keys": [
            "ý cao nhất làm trước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "In his 2011 table, live workshops got just ten points: lots of work, little return.",
          "sub": "Trong bảng năm 2011 của ông, hội thảo trực tiếp chỉ được 10 điểm: tốn nhiều công mà ít lợi.",
          "keys": [
            "10 điểm"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Đã có người đặt cọc. Thử thêm cho chắc, hay làm luôn?",
        "illus": "hourglass-not-done"
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
          "say": "Someone paid a deposit. Test more to be safe, or start for real?",
          "sub": "Đã có người đặt cọc. Thử thêm cho chắc, hay làm thật luôn?",
          "keys": [
            "làm thật luôn"
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
            "text": "Ngày 14 · Thử là đủ chưa?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:enough",
            "hl": [
              {
                "text": "đủ",
                "at": "l1:enough"
              }
            ]
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "Thử mãi = cớ trì hoãn",
            "x": 3996,
            "y": 1250,
            "size": 52,
            "at": "l1:excuse",
            "color": "coral",
            "hl": [
              {
                "text": "trì hoãn",
                "at": "l1:delay"
              }
            ]
          },
          {
            "id": "h-thc",
            "t": "text",
            "text": "Travel Hacking Cartel: theo yêu cầu khách",
            "x": 3996,
            "y": 1340,
            "size": 40,
            "at": "l2:Cartel"
          },
          {
            "id": "h-3k",
            "t": "text",
            "text": "> 3.000 khách ngày đầu",
            "x": 3996,
            "y": 1410,
            "size": 56,
            "at": "l2:three thousand",
            "color": "accent",
            "hl": [
              {
                "text": "3.000 khách",
                "at": "l2:three thousand"
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
          "say": "When is testing enough? Guillebeau warns: don't let it become an excuse to delay.",
          "sub": "Khi nào thử là đủ? Guillebeau nhắc: đừng để phép thử thành cớ trì hoãn.",
          "keys": [
            "cớ trì hoãn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "His Travel Hacking Cartel was built on customer requests, and had over three thousand members on day one.",
          "sub": "Travel Hacking Cartel của ông dựng từ chính yêu cầu của khách, có hơn 3.000 khách ngay ngày đầu.",
          "keys": [
            "3.000 khách"
          ]
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
            "fit": "H",
            "move": "cut"
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
            "at": "l2:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
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
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "ledger",
                "hot-beverage"
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
                }
              ]
            },
            "at": "l1:Thảo",
            "caption": "Sáng thứ Bảy · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "h-mai",
            "t": "text",
            "text": "Thảo: vài hộ đồng ý trả tiền",
            "x": 3996,
            "y": 1520,
            "size": 46,
            "at": "l2:agreed",
            "hl": [
              {
                "text": "đồng ý trả tiền",
                "at": "l2:agreed to pay"
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
          "say": "Saturday coffee. Meet Thảo, Dũng's old classmate, an accountant with a bookkeeping package.",
          "sub": "Cà phê sáng thứ Bảy. Còn đây là Thảo, bạn học cũ của Dũng, kế toán, đang thử gói ghi sổ.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "After two weeks, a few shop owners agreed to pay monthly. Now what?",
          "sub": "Sau hai tuần, vài hộ kinh doanh đã đồng ý trả tiền hằng tháng. Giờ sao đây?",
          "face": "thinking"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s17",
      "module": "BRK-04",
      "data": {
        "title": "Hai lựa chọn của Thảo",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Khảo sát thêm một tháng, chưa nhận ai",
        "right": "Làm thật một tháng cho đúng những hộ đã đồng ý",
        "wrongIllus": "hourglass-not-done",
        "rightIllus": "ledger"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A: survey another month, accept no one.",
          "sub": "Cách A: khảo sát thêm tháng nữa, chưa nhận ai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "B: serve those who agreed, for a month.",
          "sub": "Cách B: làm thật một tháng cho những hộ đã đồng ý.",
          "keys": [
            "làm thật một tháng"
          ]
        }
      ],
      "ref": "p14"
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
            "at": "l2",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-a",
            "t": "text",
            "text": "A: khách chờ, chưa rõ giờ làm",
            "x": 3996,
            "y": 1630,
            "size": 38,
            "at": "l1:wait",
            "color": "muted"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "B: số liệu thật, sửa giá, gói",
            "x": 3996,
            "y": 1700,
            "size": 42,
            "at": "l2:hours",
            "color": "accent",
            "hl": [
              {
                "text": "số liệu thật",
                "at": "l2:real data"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Có người trả → làm thật cho họ",
            "x": 3996,
            "y": 1780,
            "size": 46,
            "at": "l3:next test",
            "color": "accent",
            "hl": [
              {
                "text": "làm thật",
                "at": "l3:deliver"
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
          "say": "With A, the shop owners wait, and she still doesn't know how many hours it takes.",
          "sub": "Cách A: các hộ phải chờ, mà chị vẫn chưa biết gói này thực tế tốn bao nhiêu giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "With B, I log my hours and their questions. Real data to fix my price and package.",
          "sub": "Cách B: mình ghi giờ làm, câu hỏi của khách. Có số liệu thật để sửa giá và nội dung gói.",
          "keys": [
            "số liệu thật"
          ],
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Once people pay, the next test is to deliver, for those same people.",
          "sub": "Khi đã có người trả tiền, bước thử tiếp theo là làm thật cho chính họ.",
          "keys": [
            "làm thật cho chính họ"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "at": 150,
            "fit": "I",
            "ms": 900
          },
          {
            "at": "l3",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
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
            "text": "Tháng sau · Ghi lại hết",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:logs",
            "hl": [
              {
                "text": "Ghi lại",
                "at": "l1:logs"
              }
            ]
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "ledger",
                "receipt"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2",
            "caption": "Quán cô Hoa · khách tháng đầu",
            "icon": "ledger"
          },
          {
            "id": "i-sba",
            "t": "text",
            "text": "SBA: hỏi thẳng khách",
            "x": 5964,
            "y": 1250,
            "size": 48,
            "at": "l4:SBA"
          },
          {
            "id": "i-q0",
            "t": "text",
            "text": "1. Phản ứng với lời chào?",
            "x": 5964,
            "y": 1325,
            "size": 40,
            "at": "l4:react"
          },
          {
            "id": "i-q1",
            "t": "text",
            "text": "2. Muốn mua tốt hơn ở đâu?",
            "x": 5964,
            "y": 1390,
            "size": 40,
            "at": "l5:better"
          },
          {
            "id": "i-q2",
            "t": "text",
            "text": "3. Không chọn bạn thì đi đâu?",
            "x": 5964,
            "y": 1455,
            "size": 40,
            "at": "l5:instead"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The month after. Thảo serves her first clients and logs everything.",
          "sub": "Tháng sau. Thảo làm thật cho những khách đầu tiên, và ghi lại hết.",
          "keys": [
            "ghi lại hết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Like Cô Hoa, who runs the food stall at the top of the alley.",
          "sub": "Như cô Hoa, chủ quán ăn đầu hẻm.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, could you also remind me of the filing deadlines?",
          "sub": "Thảo ơi, nhắc cô luôn hạn kê khai được không?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The SBA says direct research fits questions about your own business: how do customers react to your offer?",
          "sub": "SBA nói nghiên cứu trực tiếp hợp với câu hỏi về chính doanh nghiệp của bạn: khách phản ứng thế nào với lời chào?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Where do they want a better buying experience? And where would they go instead?",
          "sub": "Họ muốn trải nghiệm mua tốt hơn ở đâu? Và họ sẽ đi đâu nếu không chọn bạn?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p16"
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
          }
        ],
        "items": [
          {
            "id": "i-box",
            "t": "text",
            "text": "→ ô Khách · Giá trị · Doanh thu",
            "x": 5964,
            "y": 1560,
            "size": 48,
            "at": "l1:boxes",
            "color": "accent",
            "hl": [
              {
                "text": "Giá trị",
                "at": "l1:value"
              }
            ]
          },
          {
            "id": "i-nx",
            "t": "text",
            "text": "→ bài: mô hình một trang",
            "x": 5964,
            "y": 1650,
            "size": 40,
            "at": "l2:next",
            "color": "muted"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: U.S. SBA, Market research and competitive analysis",
            "x": 5964,
            "y": 1810,
            "size": 24,
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
          "say": "Write the answers down, and you have material for the customer, value and revenue boxes.",
          "sub": "Ghi các câu trả lời lại, bạn đã có nguyên liệu cho các ô khách hàng, giá trị và doanh thu.",
          "keys": [
            "khách hàng, giá trị và doanh thu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Our next video draws them on one page.",
          "sub": "Bài tiếp theo vẽ chúng lên một trang."
        }
      ],
      "ref": "p16"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tối ngày 14 · cùng cái bàn",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:fourteen"
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
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "bar-chart",
                "crescent-moon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "caption": "Tối ngày 14 · ở nhà",
            "icon": "crescent-moon"
          },
          {
            "id": "j-b0",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 240,
            "h": 110,
            "at": "l2:replies",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "j-bt0",
            "t": "text",
            "text": "Trả lời",
            "x": 7957,
            "y": 1290,
            "size": 44,
            "at": "l2:replies+200"
          },
          {
            "id": "j-b1",
            "t": "box",
            "x": 8192,
            "y": 1260,
            "w": 240,
            "h": 110,
            "at": "l2:price",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "j-bt1",
            "t": "text",
            "text": "Hỏi giá",
            "x": 8217,
            "y": 1290,
            "size": 44,
            "at": "l2:price+200"
          },
          {
            "id": "j-b2",
            "t": "box",
            "x": 8452,
            "y": 1260,
            "w": 240,
            "h": 110,
            "at": "l2:deposit",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "j-bt2",
            "t": "text",
            "text": "Đặt cọc",
            "x": 8477,
            "y": 1290,
            "size": 44,
            "at": "l2:deposit+200"
          },
          {
            "id": "j-bb",
            "t": "text",
            "text": "Cột đặt cọc: bác Bình ✓",
            "x": 7932,
            "y": 1410,
            "size": 46,
            "at": "l3:Bác",
            "color": "accent",
            "hl": [
              {
                "text": "bác Bình",
                "at": "l3:Bác"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Lửa thử vàng, cọc thử ý”",
            "x": 7932,
            "y": 1520,
            "size": 56,
            "at": "l4:gold",
            "color": "accent",
            "hl": [
              {
                "text": "cọc thử ý",
                "at": "l4:deposits"
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
          "say": "Night of day fourteen. Same desk as day zero. The deadline is here.",
          "sub": "Tối ngày 14. Vẫn cái bàn hôm ngày 0. Hạn chót đã tới."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Half a page, a real price. And the table: replies, price questions, deposit.",
          "sub": "Nửa trang, giá thật. Và cái bảng: trả lời, hỏi giá, đặt cọc.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "In the deposit column: Bác Bình. He wants checks before machines break.",
          "sub": "Cột đặt cọc có bác Bình. Bác muốn kiểm tra máy trước khi hỏng.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fire tests gold, and deposits test ideas. Dũng's passed the first heat.",
          "sub": "“Lửa thử vàng”, còn tiền cọc thử ý tưởng. Ý của Dũng đã qua lửa đầu.",
          "keys": [
            "tiền cọc thử ý tưởng"
          ]
        }
      ],
      "ref": "p10,outro"
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
            "ms": 1200
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
            "fit": "H",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 6604,
            "y": 160,
            "at": "l1+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1450,
            "at": "l2+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4676,
            "y": 1780,
            "at": "l3+400"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Bài để tham khảo; quy định có thể thay đổi, cần thì hỏi cơ quan/chuyên gia. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1825,
            "size": 24,
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
          "say": "So: invite a pre-order at a real price.",
          "sub": "Tóm lại: mời mua trước với giá thật.",
          "keys": [
            "giá thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Count deposits, with a two-week deadline.",
          "sub": "Đếm tiền cọc, có hạn chót hai tuần."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "When people pay, deliver for real, and log what it takes.",
          "sub": "Có người trả tiền thì làm thật, và ghi lại mọi thứ.",
          "keys": [
            "làm thật"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next video: a business model on one page.",
          "sub": "Bài sau: mô hình kinh doanh trên một trang."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p4,p11,p15,outro"
    },
    {
      "id": "s23",
      "module": "QUIZ-01",
      "data": {
        "q": "Your table shows many compliments and no deposits, how should you read it?",
        "options": [
          "The idea has not yet shown real demand, so change it or test again",
          "The table must be wrong, so throw it away and trust your feelings",
          "The idea is proven, because compliments matter more than any deposit"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "bar-chart",
        "why": "Nhiều lời khen mà không ai đặt cọc: ý tưởng chưa chứng minh được nhu cầu thật."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your table shows many compliments and no deposits, how should you read it?",
          "sub": "Bảng của bạn có nhiều lời khen mà không có khoản đặt cọc nào, bạn nên hiểu thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Many compliments, zero deposits: demand isn't proven yet. Change the offer, or test again.",
          "sub": "Nhiều lời khen, không ai đặt cọc: nhu cầu chưa được chứng minh."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Count the deposit column.",
          "sub": "Hãy đếm cột đặt cọc."
        }
      ],
      "ref": "questions[27]"
    },
    {
      "id": "s24",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi viết nửa trang cho gói nhỏ nhất"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, write half a page for your smallest package, with a real price and a two-week deadline.",
          "sub": "Tối nay, viết nửa trang cho gói nhỏ nhất của bạn, kèm giá thật và hạn chót hai tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi first-time-founders-after-35, bài 2) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21 (đoán sai): cùng tác giả, bản dày (Travel Ninja, 100 bản) hay bản gọn (Frequent Flyer Master, 500 bản) bán chạy hơn ngày ra mắt (p8) → Dũng đang viết lời chào dày đặc kỹ thuật. Dòng thời gian: HAI TUẦN THỬ của Dũng (tối ngày 0 ở bàn → ngày 1 hỏi 10 người + gợi ý tìm kiếm → ngày 2 mời đặt trước, chuyện cuốn hướng dẫn → ngày 3 bản đầu nhỏ, cắt lời chào còn nửa trang → ngày 4 bảng ba con số → ngày 9 “Khoan đã!” đếm lời khen → ngày 5 bảng chấm điểm → ngày 14 khi nào đủ, Thảo hai lựa chọn → tháng sau Thảo làm thật, cô Hoa → tối ngày 14 cùng cái bàn, cột đặt cọc có bác Bình). Đổi tên theo w145/_series/first-time-founders-after-35.md: anh Hùng p10 → Dũng; chị Mai p14 → Thảo; khách tháng đầu → cô Hoa (minh hoạ p16); người đặt cọc → bác Bình (minh hoạ cho bảng p10, không phải số liệu bài). Số chỉ từ bài: 10 người, 1–2 tuần, 2 người đặt, 30 ngày, 10 bản, 100/500 bản, > 50.000 đô, 1–5 điểm, 2011, 10 điểm, > 3.000 khách, 2 tuần. Ngắt nhịp: BRK-08 s06 (chuyện cuốn hướng dẫn p5), BRK-04 s09 (hiểu lầm p8), BRK-07 s14 (rehook “thử thêm hay làm luôn”), BRK-04 s17 (hai lựa chọn p14, nhãn Cách A/Cách B), DLG-01 s12 (p11). Tục ngữ: “Lửa thử vàng” (mở) → “tiền cọc thử ý tưởng” (khép). Lưu ý chung (#133) ở cảnh tóm tắt. Câu đố questions[27].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
