// law-standard-terms-registration--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "law-standard-terms-registration--w01",
  "hook": "HOOK-20",
  "unit": {
    "audience": "law-consumer-contracts",
    "slug": "law-standard-terms-registration",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Hợp đồng theo mẫu nào phải đăng ký với cơ quan quản lý?",
    "series": "Bán cho người tiêu dùng đúng luật — hợp đồng theo mẫu và điều kiện giao dịch chung cho pháp chế bán lẻ"
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
            "id": "a-ans",
            "t": "text",
            "text": "Đăng ký theo SẢN PHẨM",
            "x": 60,
            "y": 60,
            "size": 66,
            "at": "l1:product",
            "color": "accent",
            "hl": [
              {
                "text": "SẢN PHẨM",
                "at": "l1:product"
              }
            ]
          },
          {
            "id": "a-no",
            "t": "text",
            "text": "không theo quy mô công ty",
            "x": 60,
            "y": 160,
            "size": 50,
            "at": "l1:size",
            "color": "muted"
          },
          {
            "id": "a-8",
            "t": "text",
            "text": "8 loại",
            "x": 60,
            "y": 250,
            "size": 150,
            "at": "l2:eight",
            "color": "coral",
            "hl": [
              {
                "text": "8 loại",
                "at": "l2:eight"
              }
            ]
          },
          {
            "id": "a-8s",
            "t": "text",
            "text": "trong danh mục",
            "x": 420,
            "y": 320,
            "size": 50,
            "at": "l2:list"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Ba chỗ hay sai: ① ② ③",
            "x": 60,
            "y": 470,
            "size": 50,
            "at": "l3:three",
            "hl": [
              {
                "text": "Ba chỗ hay sai",
                "at": "l3:three"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Luật BVQLNTD 2023 (19/2023/QH15), khoản 1 Điều 28 · danh mục theo Tạp chí Luật sư Việt Nam (26/6/2025)",
            "x": 60,
            "y": 720,
            "size": 26,
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
          "say": "The answer first. Registration depends on the product, not on the size of the company.",
          "sub": "Đáp án trước: phải đăng ký hay không là theo sản phẩm, không theo quy mô công ty.",
          "keys": [
            "theo sản phẩm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Eight types on the current list.",
          "sub": "Danh mục hiện có 8 loại.",
          "keys": [
            "8 loại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sounds simple. But there are three spots where people trip.",
          "sub": "Nghe đơn giản. Nhưng có ba chỗ hay vấp.",
          "keys": [
            "ba chỗ hay vấp"
          ]
        }
      ],
      "ref": "intro,outro"
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
            "y": 40,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "thinking"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "television"
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
                  "on": "lan",
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
            "caption": "8 giờ sáng thứ Hai · bàn Lan",
            "icon": "television"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đi đâu mà vội mà vàng”",
            "x": 900,
            "y": 640,
            "size": 48,
            "at": "l5:hurry",
            "color": "accent",
            "hl": [
              {
                "text": "vội mà vàng",
                "at": "l5:hurry"
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
          "say": "Lan, legal counsel at a retail group. Eight a.m., Monday.",
          "sub": "Lan, pháp chế một tập đoàn bán lẻ. Tám giờ sáng thứ Hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Dũng, the group's product lead, who never walks when he can run.",
          "sub": "Và Dũng, trưởng nhóm sản phẩm của tập đoàn, đi được thì chạy.",
          "keys": [
            "đi được thì chạy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "This week, a new pay TV package. We're a big company, so we register everything? Fast, please!",
          "sub": "Tuần này làm gói truyền hình trả tiền mới. Công ty mình to, chắc cái gì cũng phải đăng ký? Nhanh nhé!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Big or small isn't the test. Let me write that down first.",
          "sub": "To hay nhỏ không phải tiêu chí. Để em ghi lại đã.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Why hurry so, our elders sing, only to trip on stones and tangle in vines.",
          "sub": "Ca dao: “Đi đâu mà vội mà vàng, mà vấp phải đá, mà quàng phải dây.”",
          "keys": [
            "Đi đâu mà vội mà vàng"
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
            "text": "Văn bản nào phải đăng ký?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:registered",
            "hl": [
              {
                "text": "phải đăng ký",
                "at": "l1:registered"
              }
            ]
          },
          {
            "id": "b-c0",
            "t": "text",
            "text": "Tiêu chí, khoản 1 Điều 28:",
            "x": 2028,
            "y": 150,
            "size": 44,
            "at": "l2:criteria"
          },
          {
            "id": "b-c1",
            "t": "text",
            "text": "• số lượng lớn NTD",
            "x": 2028,
            "y": 220,
            "size": 46,
            "at": "l2:many"
          },
          {
            "id": "b-c2",
            "t": "text",
            "text": "• dùng thường xuyên, liên tục",
            "x": 2028,
            "y": 290,
            "size": 46,
            "at": "l2:regularly"
          },
          {
            "id": "b-c3",
            "t": "text",
            "text": "• tác động trực tiếp, lâu dài",
            "x": 2028,
            "y": 360,
            "size": 46,
            "at": "l3:direct",
            "hl": [
              {
                "text": "lâu dài",
                "at": "l3:lasting"
              }
            ]
          },
          {
            "id": "b-bef",
            "t": "text",
            "text": "→ đăng ký TRƯỚC khi dùng",
            "x": 2028,
            "y": 450,
            "size": 54,
            "at": "l4:before",
            "color": "coral",
            "hl": [
              {
                "text": "TRƯỚC",
                "at": "l4:before"
              }
            ]
          },
          {
            "id": "b-list",
            "t": "text",
            "text": "+ một danh mục cụ thể",
            "x": 2868,
            "y": 450,
            "size": 50,
            "at": "l4:list",
            "color": "accent"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Luật BVQLNTD 2023 (19/2023/QH15), khoản 1 Điều 28",
            "x": 2028,
            "y": 720,
            "size": 26,
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
          "say": "So which standard form contracts must be registered with the regulator?",
          "sub": "Vậy hợp đồng theo mẫu nào phải đăng ký với cơ quan quản lý?",
          "keys": [
            "phải đăng ký"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Clause one of Article twenty-eight sets the criteria: many consumers, buying regularly, continuously.",
          "sub": "Khoản 1 Điều 28 đặt tiêu chí: số lượng lớn người tiêu dùng mua, sử dụng thường xuyên, liên tục."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "With a direct, lasting impact on them.",
          "sub": "Và có tác động trực tiếp, lâu dài đến người tiêu dùng.",
          "keys": [
            "trực tiếp, lâu dài"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then you register before use, and the duty is tied to a specific list.",
          "sub": "Khi đó phải đăng ký trước khi sử dụng, và nghĩa vụ gắn với một danh mục cụ thể.",
          "keys": [
            "trước khi sử dụng"
          ]
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
          }
        ],
        "items": [
          {
            "id": "b-2010",
            "t": "text",
            "text": "Luật 2010: chỉ “thiết yếu”,",
            "x": 2028,
            "y": 550,
            "size": 44,
            "at": "l1:essential",
            "color": "muted"
          },
          {
            "id": "b-2010b",
            "t": "text",
            "text": "không nói thế nào là thiết yếu",
            "x": 2028,
            "y": 610,
            "size": 40,
            "at": "l1:means",
            "color": "muted"
          },
          {
            "id": "b-2023",
            "t": "text",
            "text": "2023: thêm tiêu chí",
            "x": 2868,
            "y": 550,
            "size": 48,
            "at": "l2:criteria",
            "color": "accent"
          },
          {
            "id": "b-tra",
            "t": "text",
            "text": "Nghĩa vụ: tra danh mục hiệu lực",
            "x": 2868,
            "y": 620,
            "size": 40,
            "at": "l3:force",
            "hl": [
              {
                "text": "tra danh mục",
                "at": "l3:list"
              }
            ]
          },
          {
            "id": "b-src2",
            "t": "text",
            "text": "Theo Bộ Công Thương (21/6/2024)",
            "x": 2868,
            "y": 720,
            "size": 26,
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
          "say": "The twenty ten law only used a list of essential goods, and never said what essential means.",
          "sub": "Luật 2010 chỉ dựa vào danh mục hàng hoá, dịch vụ thiết yếu, mà không nói thế nào là thiết yếu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The twenty twenty-three law adds the criteria. They explain why a sector joins the list.",
          "sub": "Luật 2023 bổ sung tiêu chí. Tiêu chí giúp hiểu vì sao một lĩnh vực vào danh mục."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But the actual duty? You still check the list in force.",
          "sub": "Nhưng nghĩa vụ cụ thể? Vẫn tra theo danh mục đang có hiệu lực.",
          "keys": [
            "danh mục đang có hiệu lực"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s04",
      "module": "BRK-04",
      "data": {
        "title": "Chỗ vấp ①",
        "wrong": "Công ty lớn, nhiều khách → đăng ký hết",
        "right": "Tra danh mục theo sản phẩm",
        "wrongIllus": "office-building",
        "rightIllus": "magnifying-glass-tilted-left"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Trip one: big company, so register everything?",
          "sub": "Chỗ vấp một: công ty lớn thì đăng ký hết?",
          "keys": [
            "Chỗ vấp một"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. Check the list by product.",
          "sub": "Không. Tra danh mục theo sản phẩm.",
          "keys": [
            "theo sản phẩm"
          ]
        }
      ],
      "ref": "p3,p4"
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 9 giờ · To chưa chắc thuộc",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "c-i1",
            "t": "illus",
            "name": "shopping-bags",
            "x": 3996,
            "y": 170,
            "size": 120,
            "at": "l2:fashion"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Chuỗi thời trang, triệu khách",
            "x": 4136,
            "y": 180,
            "size": 44,
            "at": "l2:fashion"
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "→ có thể KHÔNG thuộc",
            "x": 4176,
            "y": 245,
            "size": 46,
            "at": "l2:not",
            "color": "muted"
          },
          {
            "id": "c-i2",
            "t": "illus",
            "name": "cityscape",
            "x": 3996,
            "y": 340,
            "size": 120,
            "at": "l3:apartments"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Doanh nghiệp nhỏ bán căn hộ",
            "x": 4136,
            "y": 350,
            "size": 44,
            "at": "l3:small"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "→ THUỘC diện",
            "x": 4176,
            "y": 415,
            "size": 50,
            "at": "l3:covered",
            "color": "coral",
            "hl": [
              {
                "text": "THUỘC",
                "at": "l3:covered"
              }
            ]
          },
          {
            "id": "c-key",
            "t": "text",
            "text": "Theo sản phẩm, không theo quy mô",
            "x": 3996,
            "y": 560,
            "size": 50,
            "at": "l4:size",
            "color": "accent",
            "hl": [
              {
                "text": "không theo quy mô",
                "at": "l4:size"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Luật BVQLNTD 2023 (19/2023/QH15), Điều 28",
            "x": 3996,
            "y": 720,
            "size": 26,
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
          "say": "Nine o'clock. Lan writes two examples for Dũng.",
          "sub": "Chín giờ. Lan viết cho Dũng hai ví dụ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A fashion chain with millions of customers may not be covered at all.",
          "sub": "Một chuỗi thời trang hàng triệu khách vẫn có thể không thuộc diện."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "While a small firm selling apartments is covered.",
          "sub": "Trong khi một doanh nghiệp nhỏ bán căn hộ chung cư lại thuộc diện.",
          "keys": [
            "lại thuộc diện"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Check the list by product. Don't guess by size.",
          "sub": "Tra danh mục theo sản phẩm, đừng đoán theo quy mô.",
          "keys": [
            "đừng đoán theo quy mô"
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
            "text": "② 10 giờ · Danh mục 8 loại",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:ten",
            "hl": [
              {
                "text": "8 loại",
                "at": "l1:eight"
              }
            ]
          },
          {
            "id": "d-who",
            "t": "text",
            "text": "Thủ tướng → Bộ Công Thương, 01/7/2025",
            "x": 5964,
            "y": 140,
            "size": 38,
            "at": "l2:Ministry",
            "color": "muted"
          },
          {
            "id": "d-i0",
            "t": "illus",
            "name": "high-voltage",
            "x": 5964,
            "y": 210,
            "size": 80,
            "at": "l3:electricity"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "1. Điện sinh hoạt",
            "x": 6064,
            "y": 220,
            "size": 44,
            "at": "l3:electricity+200"
          },
          {
            "id": "d-i1",
            "t": "illus",
            "name": "potable-water",
            "x": 5964,
            "y": 315,
            "size": 80,
            "at": "l3:water"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "2. Nước sinh hoạt",
            "x": 6064,
            "y": 325,
            "size": 44,
            "at": "l3:water+200"
          },
          {
            "id": "d-i2",
            "t": "illus",
            "name": "television",
            "x": 5964,
            "y": 420,
            "size": 80,
            "at": "l3:pay"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "3. Truyền hình trả tiền",
            "x": 6064,
            "y": 430,
            "size": 44,
            "at": "l3:pay+200",
            "color": "coral"
          },
          {
            "id": "d-i3",
            "t": "illus",
            "name": "mobile-phone",
            "x": 5964,
            "y": 525,
            "size": 80,
            "at": "l4:mobile"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "4. Di động mặt đất",
            "x": 6064,
            "y": 535,
            "size": 44,
            "at": "l4:mobile+200"
          },
          {
            "id": "d-i4",
            "t": "illus",
            "name": "telephone",
            "x": 6784,
            "y": 210,
            "size": 80,
            "at": "l4:fixed"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "5. Cố định mặt đất",
            "x": 6884,
            "y": 220,
            "size": 44,
            "at": "l4:fixed+200"
          },
          {
            "id": "d-i5",
            "t": "illus",
            "name": "airplane",
            "x": 6784,
            "y": 315,
            "size": 80,
            "at": "l5:air"
          },
          {
            "id": "d-l5",
            "t": "text",
            "text": "6. Hàng không (khách)",
            "x": 6884,
            "y": 325,
            "size": 44,
            "at": "l5:air+200"
          },
          {
            "id": "d-i6",
            "t": "illus",
            "name": "train",
            "x": 6784,
            "y": 420,
            "size": 80,
            "at": "l5:rail"
          },
          {
            "id": "d-l6",
            "t": "text",
            "text": "7. Đường sắt (khách)",
            "x": 6884,
            "y": 430,
            "size": 44,
            "at": "l5:rail+200"
          },
          {
            "id": "d-i7",
            "t": "illus",
            "name": "cityscape",
            "x": 6784,
            "y": 525,
            "size": 80,
            "at": "l5:apartment"
          },
          {
            "id": "d-l7",
            "t": "text",
            "text": "8. Căn hộ chung cư",
            "x": 6884,
            "y": 535,
            "size": 44,
            "at": "l5:apartment+200",
            "color": "coral"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Thông tư 42/2025/TT-BCT · theo Tạp chí Luật sư Việt Nam (26/6/2025)",
            "x": 5964,
            "y": 720,
            "size": 26,
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
          "say": "Ten o'clock. The list itself. Eight types.",
          "sub": "Mười giờ. Chính danh mục. Tám loại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The law says the Prime Minister issues it. Since July first, twenty twenty-five, the Ministry of Industry and Trade does, under Circular forty-two.",
          "sub": "Luật ghi Thủ tướng ban hành. Từ 01/7/2025, Bộ Công Thương ban hành thay, theo Thông tư 42/2025/TT-BCT.",
          "keys": [
            "Bộ Công Thương ban hành thay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Household electricity. Household water. Pay television.",
          "sub": "Điện sinh hoạt. Nước sinh hoạt. Truyền hình trả tiền."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Ground mobile telecoms, and fixed line telecoms.",
          "sub": "Viễn thông di động mặt đất, và viễn thông cố định mặt đất."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Passenger air transport, passenger rail. And apartment sales.",
          "sub": "Vận chuyển hành khách hàng không, đường sắt. Và mua bán căn hộ chung cư."
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
            "at": "l1",
            "fit": [
              "d-r1",
              "d-r3"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3:end",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-r1",
            "t": "text",
            "text": "Quần áo, điện máy, thực phẩm: không",
            "x": 5964,
            "y": 600,
            "size": 38,
            "at": "l1:clothes",
            "color": "muted"
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "Viễn thông, truyền hình, căn hộ: CÓ",
            "x": 6804,
            "y": 600,
            "size": 38,
            "at": "l2:pay",
            "color": "coral",
            "hl": [
              {
                "text": "CÓ",
                "at": "l2:covered"
              }
            ]
          },
          {
            "id": "d-r3",
            "t": "text",
            "text": "Bán kèm: văn bản của ai?",
            "x": 5964,
            "y": 655,
            "size": 40,
            "at": "l3:whose",
            "hl": [
              {
                "text": "của ai",
                "at": "l3:whose"
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
          "say": "For retail, that means clothes, appliances, ordinary food: not on the list.",
          "sub": "Với bán lẻ: quần áo, điện máy, thực phẩm thông thường không nằm trong 8 loại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But if the group runs telecoms, pay TV or apartments, those documents are covered.",
          "sub": "Nhưng tập đoàn có mảng viễn thông, truyền hình trả tiền hay căn hộ chung cư thì văn bản của các mảng đó thuộc diện.",
          "keys": [
            "thuộc diện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Selling someone else's service alongside? First ask: whose document is it?",
          "sub": "Bán kèm dịch vụ của bên khác? Hỏi trước: văn bản nào của mình, văn bản nào của nhà cung cấp?",
          "keys": [
            "văn bản nào của mình"
          ]
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
          },
          {
            "at": "l1",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 2 giờ · Ba văn bản",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:two"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 110,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "card-file-box"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:two",
            "caption": "2 giờ chiều · ba tập hồ sơ",
            "icon": "card-file-box"
          },
          {
            "id": "e-d0",
            "t": "text",
            "text": "Điều kiện bán hàng điện máy",
            "x": 7932,
            "y": 170,
            "size": 40,
            "at": "l2:appliance"
          },
          {
            "id": "e-v0",
            "t": "text",
            "text": "→ Không",
            "x": 7972,
            "y": 220,
            "size": 44,
            "at": "l2:appliance+700",
            "color": "muted"
          },
          {
            "id": "e-d1",
            "t": "text",
            "text": "HĐ thuê bao truyền hình",
            "x": 7932,
            "y": 290,
            "size": 40,
            "at": "l3:subscription"
          },
          {
            "id": "e-v1",
            "t": "text",
            "text": "→ Có",
            "x": 7972,
            "y": 340,
            "size": 44,
            "at": "l3:subscription+700",
            "color": "coral"
          },
          {
            "id": "e-d2",
            "t": "text",
            "text": "HĐ mua bán căn hộ",
            "x": 7932,
            "y": 410,
            "size": 40,
            "at": "l3:apartment"
          },
          {
            "id": "e-v2",
            "t": "text",
            "text": "→ Có",
            "x": 7972,
            "y": 460,
            "size": 44,
            "at": "l3:apartment+700",
            "color": "coral"
          },
          {
            "id": "e-still",
            "t": "text",
            "text": "Không đăng ký ≠ không bị soi",
            "x": 7932,
            "y": 540,
            "size": 46,
            "at": "l4:controlled",
            "color": "accent",
            "hl": [
              {
                "text": "không bị soi",
                "at": "l4:controlled"
              }
            ]
          },
          {
            "id": "e-key",
            "t": "text",
            "text": "Một tập đoàn: vừa thuộc, vừa không",
            "x": 8752,
            "y": 640,
            "size": 40,
            "at": "l5:document",
            "hl": [
              {
                "text": "vừa thuộc, vừa không",
                "at": "l5:document"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Two o'clock. Three files on my desk, three answers.",
          "sub": "Hai giờ. Ba tập hồ sơ trên bàn em, ba câu trả lời.",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Sales terms for the appliance chain: not on the list.",
          "sub": "Điều kiện bán hàng của chuỗi điện máy: không thuộc danh mục."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "The pay TV subscription contract, and the apartment sale contract for our project: both covered.",
          "sub": "Hợp đồng thuê bao truyền hình trả tiền, và hợp đồng mua bán căn hộ của dự án: cả hai thuộc diện."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But the appliance terms still follow the law, and can still be controlled.",
          "sub": "Nhưng điều kiện bán điện máy vẫn phải đáp ứng yêu cầu chung của Luật, và vẫn có thể bị kiểm soát.",
          "keys": [
            "vẫn có thể bị kiểm soát"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One group can be covered and not covered, document by document.",
          "sub": "Một tập đoàn có thể vừa thuộc diện vừa không, tuỳ từng văn bản.",
          "keys": [
            "tuỳ từng văn bản"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Thuộc diện rồi: nộp ở đâu, chờ bao lâu?",
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
          "say": "Covered. So where do you file, and how long do you wait?",
          "sub": "Thuộc diện rồi. Nộp ở đâu, chờ bao lâu?",
          "keys": [
            "chờ bao lâu"
          ]
        }
      ],
      "ref": "p9"
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
            "text": "④ Thứ Ba · Nộp ở đâu?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Tuesday"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Chỉ dùng khi ĐÃ hoàn thành",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l2:completed",
            "color": "coral",
            "hl": [
              {
                "text": "ĐÃ hoàn thành",
                "at": "l2:completed"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Có đặt cọc, trả trước?",
            "x": 60,
            "y": 1330,
            "size": 44,
            "at": "l3:deposit"
          },
          {
            "id": "f-2b",
            "t": "text",
            "text": "→ xong đăng ký + công khai trước",
            "x": 100,
            "y": 1390,
            "size": 40,
            "at": "l3:before"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Báo cáo năm: trước 31/01",
            "x": 60,
            "y": 1470,
            "size": 44,
            "at": "l4:January",
            "hl": [
              {
                "text": "31/01",
                "at": "l4:January"
              }
            ]
          },
          {
            "id": "f-3b",
            "t": "text",
            "text": "Mẫu số 01",
            "x": 100,
            "y": 1530,
            "size": 38,
            "at": "l4:Form",
            "color": "muted"
          },
          {
            "id": "f-h1",
            "t": "text",
            "text": "Lúc ban hành (Điều 14):",
            "x": 900,
            "y": 1250,
            "size": 42,
            "at": "l5:originally"
          },
          {
            "id": "f-h2",
            "t": "text",
            "text": "≥ 2 tỉnh → Bộ Công Thương",
            "x": 900,
            "y": 1315,
            "size": 40,
            "at": "l5:provinces"
          },
          {
            "id": "f-h3",
            "t": "text",
            "text": "1 tỉnh → UBND tỉnh",
            "x": 900,
            "y": 1375,
            "size": 40,
            "at": "l5:one"
          },
          {
            "id": "f-h4",
            "t": "text",
            "text": "Từ 01/7/2025:",
            "x": 900,
            "y": 1470,
            "size": 48,
            "at": "l6:July",
            "color": "accent"
          },
          {
            "id": "f-h5",
            "t": "text",
            "text": "Sở Công Thương",
            "x": 900,
            "y": 1535,
            "size": 60,
            "at": "l6:Department",
            "color": "accent",
            "hl": [
              {
                "text": "Sở Công Thương",
                "at": "l6:Department"
              }
            ]
          },
          {
            "id": "f-h6",
            "t": "text",
            "text": "UB Cạnh tranh QG dừng nhận",
            "x": 900,
            "y": 1625,
            "size": 38,
            "at": "l6:stopped",
            "color": "muted"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "NĐ 55/2024/NĐ-CP, Điều 7, 14 · NĐ 146/2025/NĐ-CP (theo Tạp chí Luật sư Việt Nam)",
            "x": 60,
            "y": 1810,
            "size": 26,
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
          "say": "Tuesday. Trip two hides in Article seven of Decree fifty-five.",
          "sub": "Thứ Ba. Chỗ vấp hai nằm ở Điều 7 Nghị định 55."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Register before use, and you may use it only once registration is completed. Filed is not finished.",
          "sub": "Đăng ký trước khi dùng, và chỉ được dùng khi đã hoàn thành đăng ký. Nộp rồi chưa phải xong.",
          "keys": [
            "chỉ được dùng khi đã hoàn thành"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Customers pay a deposit before signing? Complete registration and publish before that step.",
          "sub": "Khách phải đặt cọc, thanh toán trước? Phải hoàn thành đăng ký và công khai trước bước đó."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Every year, before January thirty-first, covered businesses report on Form zero one.",
          "sub": "Hằng năm, trước ngày 31 tháng 01, doanh nghiệp thuộc diện gửi báo cáo theo Mẫu số 01."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Where to file? Originally, Article fourteen split it: two provinces or more, the ministry. One province, the provincial committee.",
          "sub": "Nộp ở đâu? Lúc ban hành, Điều 14 chia: từ hai tỉnh trở lên thì cơ quan thuộc Bộ Công Thương, trong một tỉnh thì Ủy ban nhân dân tỉnh."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Since July first, twenty twenty-five, the national competition commission stopped. Files go to the provincial Department of Industry and Trade.",
          "sub": "Từ 01/7/2025, Ủy ban Cạnh tranh Quốc gia dừng tiếp nhận; hồ sơ nộp tại Ủy ban nhân dân cấp tỉnh, cụ thể là Sở Công Thương.",
          "keys": [
            "Sở Công Thương"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s11",
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Tư · Chờ bao lâu?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
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
            "at": "l1:Hoa",
            "caption": "Thứ Tư · Sở Công Thương",
            "icon": "spiral-calendar"
          },
          {
            "id": "g-30",
            "t": "text",
            "text": "30 ngày thẩm định",
            "x": 2028,
            "y": 1260,
            "size": 56,
            "at": "l2:thirty",
            "color": "accent",
            "hl": [
              {
                "text": "30 ngày",
                "at": "l2:thirty"
              }
            ]
          },
          {
            "id": "g-30b",
            "t": "text",
            "text": "từ ngày hồ sơ hợp lệ",
            "x": 2028,
            "y": 1340,
            "size": 42,
            "at": "l2:valid"
          },
          {
            "id": "g-ext",
            "t": "text",
            "text": "+ tối đa 30 ngày gia hạn",
            "x": 2028,
            "y": 1420,
            "size": 48,
            "at": "l3:extend",
            "color": "coral"
          },
          {
            "id": "g-why",
            "t": "text",
            "text": "báo thời gian, lý do",
            "x": 2068,
            "y": 1490,
            "size": 40,
            "at": "l3:why",
            "color": "muted"
          },
          {
            "id": "g-exp",
            "t": "text",
            "text": "Có thể yêu cầu giải trình",
            "x": 2028,
            "y": 1570,
            "size": 44,
            "at": "l4:explain"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "NĐ 55/2024/NĐ-CP, Điều 10",
            "x": 2028,
            "y": 1810,
            "size": 26,
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
          "say": "Wednesday, at the Department. This is Cô Hoa, who receives the files. Brisk, finger on every line.",
          "sub": "Thứ Tư, ở Sở Công Thương. Đây là cô Hoa, cán bộ nhận hồ sơ. Dứt khoát, ngón tay dò từng dòng.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Thirty days of review, counted from a valid file. Right, one line missing here.",
          "sub": "Thẩm định 30 ngày, tính từ ngày nhận hồ sơ hợp lệ. Rồi, còn thiếu dòng này.",
          "face": "neutral"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Complex case? We may extend up to thirty more days, and we tell you how long and why.",
          "sub": "Trường hợp phức tạp? Có thể gia hạn tối đa 30 ngày, và cơ quan báo rõ thời gian, lý do."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "During review, they may ask the business to explain.",
          "sub": "Trong lúc thẩm định, cơ quan có thể yêu cầu doanh nghiệp giải trình."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s12",
      "module": "BRK-03",
      "data": {
        "value": 60,
        "suffix": " ngày",
        "label": "có thể phải chờ, chưa kể soạn hồ sơ",
        "illus": "hourglass-not-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thirty plus thirty.",
          "sub": "Ba mươi cộng ba mươi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Plan for up to sixty days, before the paperwork.",
          "sub": "Kế hoạch nên tính tới 60 ngày, chưa kể soạn hồ sơ.",
          "keys": [
            "60 ngày"
          ]
        }
      ],
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
            "text": "⑥ Chiều thứ Tư · Lịch ngược",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "h-b0",
            "t": "badge",
            "n": 1,
            "x": 4026,
            "y": 1290,
            "at": "l2:mobile"
          },
          {
            "id": "h-s0",
            "t": "text",
            "text": "Xác định: viễn thông di động",
            "x": 4076,
            "y": 1265,
            "size": 42,
            "at": "l2:mobile+200"
          },
          {
            "id": "h-b1",
            "t": "badge",
            "n": 2,
            "x": 4026,
            "y": 1375,
            "at": "l2:Article"
          },
          {
            "id": "h-s1",
            "t": "text",
            "text": "Hoàn thiện Điều 23, rà Điều 25",
            "x": 4076,
            "y": 1350,
            "size": 42,
            "at": "l2:Article+200"
          },
          {
            "id": "h-b2",
            "t": "badge",
            "n": 3,
            "x": 4026,
            "y": 1460,
            "at": "l3:file"
          },
          {
            "id": "h-s2",
            "t": "text",
            "text": "Nộp tại Sở Công Thương",
            "x": 4076,
            "y": 1435,
            "size": 42,
            "at": "l3:file+200"
          },
          {
            "id": "h-b3",
            "t": "badge",
            "n": 4,
            "x": 4026,
            "y": 1545,
            "at": "l3:thirty"
          },
          {
            "id": "h-s3",
            "t": "text",
            "text": "30 ngày + dự phòng 30",
            "x": 4076,
            "y": 1520,
            "size": 42,
            "at": "l3:thirty+200"
          },
          {
            "id": "h-b4",
            "t": "badge",
            "n": 5,
            "x": 4026,
            "y": 1630,
            "at": "l4:sales"
          },
          {
            "id": "h-s4",
            "t": "text",
            "text": "Có thông báo + công khai → mở bán",
            "x": 4076,
            "y": 1605,
            "size": 42,
            "at": "l4:sales+200",
            "color": "coral"
          },
          {
            "id": "h-ar",
            "t": "arrow",
            "from": [
              5586,
              1690
            ],
            "to": [
              4986,
              1690
            ],
            "at": "l5:backwards",
            "color": "accent"
          },
          {
            "id": "h-key",
            "t": "text",
            "text": "Tính ngược từ ngày hoàn thành",
            "x": 4836,
            "y": 1730,
            "size": 44,
            "at": "l5:backwards",
            "color": "accent",
            "hl": [
              {
                "text": "Tính ngược",
                "at": "l5:backwards"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Luật BVQLNTD 2023 (19/2023/QH15), Điều 23, 25 · NĐ 55/2024/NĐ-CP, Điều 7, 10",
            "x": 3996,
            "y": 1810,
            "size": 26,
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
          "say": "Wednesday afternoon. The group's telecom arm wants a new mobile plan. Lan plans it.",
          "sub": "Chiều thứ Tư. Mảng viễn thông của tập đoàn muốn ra gói cước mới. Lan lập lịch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "One: it's ground mobile telecoms, on the list. Two: finish it under Article twenty-three, check Article twenty-five before filing.",
          "sub": "Một: thuộc nhóm viễn thông di động trong danh mục. Hai: hoàn thiện theo Điều 23, rà Điều 25 trước khi nộp.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Because they review the content. Three: file at the Department. Four: thirty days, plus thirty spare.",
          "sub": "Vì cơ quan thẩm định cả nội dung. Ba: nộp tại Sở Công Thương. Bốn: tính 30 ngày, dự phòng thêm 30."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Five: open sales and pre orders only after the completion notice, with the terms published.",
          "sub": "Năm: chỉ mở bán, nhận đặt trước sau khi có thông báo hoàn thành đăng ký và đã công khai văn bản."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Count the launch date backwards from completion, not forwards from the draft.",
          "sub": "Ngày ra mắt tính ngược từ ngày hoàn thành đăng ký, không tính xuôi từ ngày soạn xong.",
          "keys": [
            "tính ngược"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Năm · Dũng ghé bàn",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Dùng bản sửa ngay, đăng ký bổ sung sau",
          "why": "Văn bản đang dùng thành văn bản chưa hoàn thành đăng ký.",
          "rule": "Sửa là đăng ký lại"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Pay TV contract is registered, right? I'll add a wallet promo and apply it next week. Register the extra bit later!",
          "sub": "Hợp đồng truyền hình đăng ký rồi mà? Anh thêm khuyến mãi trả qua ví, tuần sau áp luôn. Đăng ký bổ sung sau!",
          "pose": "explain",
          "face": "happy",
          "stop": true
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Option A turns the contract in use into one that has not completed registration.",
          "sub": "Cách A biến văn bản đang dùng thành văn bản chưa hoàn thành đăng ký.",
          "keys": [
            "chưa hoàn thành đăng ký"
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
          "who": "dung",
          "say": "Option B, then. We file to re-register, and keep using the registered version meanwhile.",
          "sub": "Vậy Cách B. Nộp đăng ký lại, trong lúc chờ vẫn dùng bản đã đăng ký.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Slower, but no breach.",
          "sub": "Chậm hơn, nhưng không vi phạm.",
          "phase": "redo",
          "keys": [
            "không vi phạm"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "fit": "H",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "I",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Năm · Sửa = đăng ký lại",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday",
            "hl": [
              {
                "text": "đăng ký lại",
                "at": "l1:re"
              }
            ]
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "• luật đổi → nội dung đổi",
            "x": 5964,
            "y": 1260,
            "size": 42,
            "at": "l2:law"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "• doanh nghiệp tự sửa",
            "x": 5964,
            "y": 1320,
            "size": 42,
            "at": "l2:itself",
            "color": "coral"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "• cơ quan yêu cầu huỷ, sửa",
            "x": 5964,
            "y": 1380,
            "size": 42,
            "at": "l2:demands"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Thủ tục như lần đầu → công khai",
            "x": 5964,
            "y": 1450,
            "size": 40,
            "at": "l3:first"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "NĐ 55/2024/NĐ-CP, Điều 13",
            "x": 5964,
            "y": 1520,
            "size": 26,
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
          "say": "Thursday. Trip three: editing a registered document. Article thirteen says re-register.",
          "sub": "Thứ Năm. Chỗ vấp ba: sửa văn bản đã đăng ký. Điều 13 yêu cầu đăng ký lại.",
          "keys": [
            "Chỗ vấp ba"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "When the law changes the content, when the business itself changes it, or when the regulator demands a change.",
          "sub": "Khi pháp luật thay đổi làm đổi nội dung, khi doanh nghiệp tự thay đổi, hoặc khi bị cơ quan yêu cầu huỷ, sửa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same procedure as the first time, then publish. Every edit is one more registration.",
          "sub": "Thủ tục như lần đầu, xong thì công khai. Mỗi lần sửa là một lần đăng ký lại.",
          "keys": [
            "Mỗi lần sửa là một lần đăng ký lại"
          ]
        }
      ],
      "ref": "p14,p16"
    },
    {
      "id": "s16",
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
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "lan",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "mobile-phone",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:calls",
            "caption": "Tối thứ Năm · Bác Bình gọi",
            "icon": "balance-scale"
          },
          {
            "id": "i-c1",
            "t": "text",
            "text": "Soi cả văn bản KHÔNG đăng ký",
            "x": 5964,
            "y": 1565,
            "size": 40,
            "at": "l3:outside",
            "color": "coral",
            "hl": [
              {
                "text": "KHÔNG đăng ký",
                "at": "l3:outside"
              }
            ]
          },
          {
            "id": "i-c2",
            "t": "text",
            "text": "Bị yêu cầu: sửa trong 30 ngày",
            "x": 5964,
            "y": 1620,
            "size": 40,
            "at": "l4:thirty",
            "hl": [
              {
                "text": "30 ngày",
                "at": "l4:thirty"
              }
            ]
          },
          {
            "id": "i-c3",
            "t": "text",
            "text": "phức tạp: tối đa 90 ngày",
            "x": 6004,
            "y": 1672,
            "size": 36,
            "at": "l4:ninety",
            "color": "muted"
          },
          {
            "id": "i-c4",
            "t": "text",
            "text": "05 ngày LV: niêm yết, báo khách",
            "x": 5964,
            "y": 1722,
            "size": 38,
            "at": "l5:five"
          },
          {
            "id": "i-c5",
            "t": "text",
            "text": "Chưa xong đăng ký = chưa được dùng",
            "x": 6784,
            "y": 1730,
            "size": 38,
            "at": "l6:not yet",
            "color": "coral"
          },
          {
            "id": "i-src2",
            "t": "text",
            "text": "Luật BVQLNTD 2023 (19/2023/QH15), khoản 2, 3 Điều 28 · NĐ 55/2024/NĐ-CP, Điều 7, 14, 15",
            "x": 5964,
            "y": 1810,
            "size": 26,
            "at": "l3:list",
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
          "say": "Thursday night. Uncle Bình calls, Lan's uncle, a lawyer for decades.",
          "sub": "Tối thứ Năm. Bác Bình gọi, bác ruột Lan, làm luật sư mấy chục năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. Read the law first. Not registering does not mean nobody looks.",
          "sub": "Từ từ, đọc điều luật đã. Không phải đăng ký không có nghĩa là không bị soi.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Clause two: the regulator, on its own or at the request of consumers or social groups, can demand cancellation or amendment, even for terms outside the list.",
          "sub": "Khoản 2 Điều 28: cơ quan tự mình hoặc theo đề nghị của người tiêu dùng, tổ chức xã hội yêu cầu huỷ, sửa; kiểm soát cả văn bản không thuộc diện đăng ký.",
          "keys": [
            "kiểm soát cả văn bản không thuộc diện"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then the business fixes it within thirty days, extendable to ninety in complex cases.",
          "sub": "Khi đó doanh nghiệp sửa, huỷ trong 30 ngày; trường hợp phức tạp có thể gia hạn tối đa 90 ngày."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Within five working days: post the new version online and in store, notify customers, and re-sign if they ask.",
          "sub": "Trong 05 ngày làm việc: niêm yết, đăng web, ứng dụng, báo khách đã giao kết, và giao kết lại nếu khách yêu cầu."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "binh",
          "say": "And a covered document not yet registered? Not yet usable. For the fine, check the sanctions decree in force.",
          "sub": "Còn văn bản thuộc diện mà chưa xong đăng ký? Chưa được dùng. Mức phạt thì tra nghị định xử phạt đang hiệu lực.",
          "face": "neutral"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p17,p18,p19"
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
            "text": "Thứ Sáu · Bảng bốn cột",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "face": "happy",
                  "pose": "thumb"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "clipboard",
                "spiral-calendar"
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
                  "shot": "E-SHOT-05",
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
            "at": "l1:Friday",
            "caption": "8 giờ sáng thứ Sáu · cùng bàn hôm thứ Hai",
            "icon": "clipboard"
          },
          {
            "id": "j-c0",
            "t": "text",
            "text": "1. Sản phẩm, dịch vụ",
            "x": 7932,
            "y": 1260,
            "size": 42,
            "at": "l2:four+0"
          },
          {
            "id": "j-c1",
            "t": "text",
            "text": "2. Có trong danh mục?",
            "x": 7932,
            "y": 1335,
            "size": 42,
            "at": "l2:four+300"
          },
          {
            "id": "j-c2",
            "t": "text",
            "text": "3. Ngày hoàn thành ĐK",
            "x": 7932,
            "y": 1410,
            "size": 42,
            "at": "l2:four+600"
          },
          {
            "id": "j-c3",
            "t": "text",
            "text": "4. Sửa sau đó: ĐK lại?",
            "x": 7932,
            "y": 1485,
            "size": 42,
            "at": "l2:four+900"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Không vấp đá, không quàng dây",
            "x": 7932,
            "y": 1610,
            "size": 46,
            "at": "l4:stones",
            "color": "accent",
            "hl": [
              {
                "text": "không quàng dây",
                "at": "l4:vines"
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
          "say": "Friday, eight a.m. Same desk as Monday.",
          "sub": "Tám giờ sáng thứ Sáu. Vẫn chiếc bàn hôm thứ Hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "My four columns: product, on the list or not, date registration was completed, and whether later edits were re-registered.",
          "sub": "Bảng bốn cột của em: sản phẩm, dịch vụ; có trong danh mục không; ngày hoàn thành đăng ký gần nhất; các lần sửa đã đăng ký lại chưa.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "So the TV package launches in two months, not this week. Fine. Counted backwards.",
          "sub": "Vậy gói truyền hình hai tháng nữa mới ra, không phải tuần này. Được. Tính ngược mà.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Why hurry so? This time, no stones tripped on, no vines tangled.",
          "sub": "“Đi đâu mà vội mà vàng?” Lần này không vấp đá, không quàng dây.",
          "keys": [
            "không vấp đá, không quàng dây"
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
      "ref": "outro"
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
            "at": "l1:product",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:completed",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:edit",
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
            "x": 5556,
            "y": 20,
            "at": "l1:product"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1620,
            "y": 1110,
            "at": "l2:completed"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 7524,
            "y": 1110,
            "at": "l3:edit"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Bài để tham khảo, không phải tư vấn cho vụ việc cụ thể. Nhân vật là minh hoạ. Quy định có thể thay đổi — kiểm lại với cơ quan/chuyên gia.",
            "x": 7932,
            "y": 1810,
            "size": 24,
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
          "say": "So: registration is a question about the product, not the company size.",
          "sub": "Tóm lại: đăng ký là câu hỏi về sản phẩm, không phải quy mô công ty.",
          "keys": [
            "về sản phẩm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Use it only once registration is completed. Allow up to sixty days.",
          "sub": "Chỉ dùng khi đã hoàn thành đăng ký. Tính tới 60 ngày chờ.",
          "keys": [
            "đã hoàn thành đăng ký"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And every edit means registering again.",
          "sub": "Và mỗi lần sửa là một lần đăng ký lại.",
          "keys": [
            "đăng ký lại"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s19",
      "module": "QUIZ-01",
      "data": {
        "q": "Is every large retailer with many customers required to register its terms?",
        "options": [
          "No, the duty depends on whether the product is on the list, not company size",
          "Yes, but only for terms written in a foreign language for tourists",
          "Yes, any retailer with more than a million customers must always register"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "office-building",
        "why": "Nghĩa vụ đăng ký gắn với sản phẩm, dịch vụ trong danh mục, không gắn với quy mô công ty."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Is every large retailer with many customers required to register its terms?",
          "sub": "Mọi doanh nghiệp bán lẻ lớn, nhiều khách có phải đăng ký điều khoản không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. The duty depends on whether the product is on the list.",
          "sub": "Không. Nghĩa vụ tuỳ sản phẩm có trong danh mục hay không."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Check by product, not by size.",
          "sub": "Tra theo sản phẩm, không theo quy mô."
        }
      ],
      "ref": "questions[4]"
    },
    {
      "id": "s20",
      "module": "END-05",
      "data": {
        "text": "Bảng bốn cột cho mọi văn bản",
        "sub": "Bài sau: điều khoản nào không có hiệu lực"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, make the four column table for every document you use.",
          "sub": "Hôm nay, lập bảng bốn cột cho mọi văn bản đang dùng.",
          "keys": [
            "bảng bốn cột"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next: which terms have no effect. Now, the forty questions below.",
          "sub": "Bài sau: điều khoản nào bị coi là không có hiệu lực. Giờ thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (đào sâu 1 chuỗi law-consumer-contracts) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-20 (đáp án trước): “Đăng ký theo SẢN PHẨM, không theo quy mô · 8 loại · ba chỗ hay vấp”. Dòng thời gian: một tuần của Lan (8 giờ sáng thứ Hai Dũng: gói truyền hình, “to thì đăng ký hết?” → Ô B tiêu chí p1–p2 → BRK-04 chỗ vấp ① + 9 giờ hai ví dụ p3–p4 → 10 giờ danh mục 8 loại p5–p6 → 2 giờ ba văn bản (Lan đóng chị Hạnh p7–p8) → BRK-07 → thứ Ba chỗ vấp ② chỉ dùng khi hoàn thành + nơi nộp p9–p10 → thứ Tư Sở Công Thương, Cô Hoa: 30 + 30 ngày p11 + BRK-03 60 ngày → chiều thứ Tư lịch ngược (Lan đóng anh Tuấn p12–p13) → thứ Năm “Khoan đã!” khuyến mãi Cách A/B p15 → chỗ vấp ③ đăng ký lại p14, p16 → tối thứ Năm Bác Bình gọi: kiểm soát, 30/90 ngày, 05 ngày LV p17–p19 → 8 giờ sáng thứ Sáu bảng bốn cột (outro)). Nhân vật theo w145/_series/law-consumer-contracts.md: Lan, Dũng, Cô Hoa, Bác Bình. Số, điều chỉ từ bài: khoản 1, 2, 3 Điều 28, Điều 23, 25 Luật 19/2023/QH15; Điều 7, 10, 13, 14, 15 NĐ 55/2024; 8 loại; 01/7/2025; TT 42/2025/TT-BCT; NĐ 146/2025; 30 + 30 ngày; 31/01, Mẫu số 01; 30/90 ngày; 05 ngày làm việc. Ca dao “Đi đâu mà vội mà vàng…” mở/khép vòng. Câu đố questions[4]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s17"
  }
};
