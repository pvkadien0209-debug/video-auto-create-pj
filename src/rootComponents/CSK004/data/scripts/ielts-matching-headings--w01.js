// ielts-matching-headings--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-matching-headings--w01",
  "hook": "HOOK-20",
  "unit": {
    "audience": "ielts-academic-reading-takers",
    "slug": "ielts-matching-headings",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Nối tiêu đề với đoạn văn: đọc gì trong mỗi đoạn?",
    "series": "IELTS Academic Reading trong 60 phút — chiến thuật từng dạng câu hỏi cho thí sinh band 5.5–7"
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
            "id": "a-1",
            "t": "text",
            "text": "Tiêu đề đúng = ý chính cả đoạn",
            "x": 60,
            "y": 90,
            "size": 70,
            "at": "l1:heading",
            "color": "accent",
            "hl": [
              {
                "text": "ý chính cả đoạn",
                "at": "l1:whole"
              }
            ]
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "không phải một chi tiết",
            "x": 100,
            "y": 210,
            "size": 54,
            "at": "l1:detail",
            "color": "muted"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Luôn thừa tiêu đề → có bẫy",
            "x": 60,
            "y": 310,
            "size": 56,
            "at": "l2:more",
            "color": "coral",
            "hl": [
              {
                "text": "có bẫy",
                "at": "l2:trap"
              }
            ]
          },
          {
            "id": "a-4",
            "t": "text",
            "text": "3 chỗ hay sai:",
            "x": 60,
            "y": 420,
            "size": 52,
            "at": "l3:three"
          },
          {
            "id": "a-5",
            "t": "text",
            "text": "bắt chữ · tin câu đầu · thứ tự",
            "x": 100,
            "y": 495,
            "size": 46,
            "at": "l3:three+400"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: IDP — A quick look at the IELTS Academic Reading test",
            "x": 60,
            "y": 720,
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
          "say": "Answer first. The right heading sums up the whole paragraph, not one detail in it.",
          "sub": "Đáp án trước: tiêu đề đúng tóm được ý chính của cả đoạn, không phải một chi tiết.",
          "keys": [
            "ý chính của cả đoạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And there are always more headings than paragraphs. The extras are there to trap you.",
          "sub": "Và luôn có nhiều tiêu đề hơn số đoạn. Tiêu đề thừa có mặt để gài bẫy.",
          "keys": [
            "gài bẫy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sounds simple. But there are three places people slip.",
          "sub": "Nghe đơn giản. Nhưng có ba chỗ hay trượt chân.",
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
            "x": 900,
            "y": 360,
            "w": 740,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "laptop",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "lan",
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
            "caption": "Thứ Bảy 8:30 · quán nhóm tự học",
            "icon": "hot-beverage"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Thấy cây mà chẳng thấy rừng”",
            "x": 60,
            "y": 600,
            "size": 50,
            "at": "l5:trees",
            "color": "accent",
            "hl": [
              {
                "text": "chẳng thấy rừng",
                "at": "l5:forest"
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
          "say": "Meet Lan, twenty, from Thảo's weekend IELTS study group at a café.",
          "sub": "Đây là Lan, hai mươi tuổi, trong nhóm tự học IELTS cuối tuần của Thảo ở quán cà phê.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Saturday, eight thirty. A matching headings task is open on her laptop.",
          "sub": "Thứ Bảy, tám rưỡi sáng. Trên laptop là một bài nối tiêu đề."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "More headings than paragraphs, and every one looks related!",
          "sub": "Tiêu đề nhiều hơn số đoạn, mà cái nào cũng thấy liên quan!",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So she matches whichever word repeats. Like picking a husband by his surname.",
          "sub": "Thế là Lan nối theo chữ nào trùng. Như chọn chồng theo… họ.",
          "keys": [
            "chọn chồng theo… họ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our saying: seeing the trees but not the forest.",
          "sub": "Ông bà gọi là: “Thấy cây mà chẳng thấy rừng.”",
          "keys": [
            "Thấy cây mà chẳng thấy rừng"
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
            "text": "Đọc gì trong mỗi đoạn?",
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
            "id": "b-1",
            "t": "text",
            "text": "Danh sách tiêu đề → đoạn / phần",
            "x": 2028,
            "y": 170,
            "size": 48,
            "at": "l2:list"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Tiêu đề > số đoạn: có cái thừa",
            "x": 2028,
            "y": 250,
            "size": 48,
            "at": "l3:more",
            "color": "coral",
            "hl": [
              {
                "text": "có cái thừa",
                "at": "l3:never"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Có đoạn không nằm trong câu hỏi",
            "x": 2028,
            "y": 330,
            "size": 44,
            "at": "l3:paragraphs"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Trên máy: kéo thả tiêu đề",
            "x": 2028,
            "y": 420,
            "size": 42,
            "at": "l4:drag",
            "hl": [
              {
                "text": "kéo thả",
                "at": "l4:drag"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: IDP; IDP Việt Nam — IELTS trên máy tính",
            "x": 2028,
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
          "say": "So what should you read in each paragraph?",
          "sub": "Vậy trong mỗi đoạn, nên đọc gì?",
          "keys": [
            "nên đọc gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IDP describes it: a list of headings, and you match each one to a paragraph or section.",
          "sub": "Theo IDP: đề cho một danh sách tiêu đề, bạn ghép mỗi tiêu đề với một đoạn hoặc một phần."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "There are more headings than paragraphs, so some are never used. Some paragraphs may not be asked about.",
          "sub": "Tiêu đề luôn nhiều hơn số đoạn, nên có cái không dùng đến. Cũng có đoạn không nằm trong câu hỏi.",
          "keys": [
            "không dùng đến"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "On computer, you drag a heading into the paragraph's box. Change your mind? Drag another in.",
          "sub": "Trên máy, bạn kéo tiêu đề vào ô của đoạn. Đổi ý thì kéo tiêu đề khác vào thay.",
          "keys": [
            "kéo tiêu đề"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "id": "b-h",
            "t": "text",
            "text": "Nối tiêu đề: ý chính cả đoạn",
            "x": 2928,
            "y": 170,
            "size": 46,
            "at": "l1:headings",
            "color": "accent",
            "hl": [
              {
                "text": "ý chính",
                "at": "l1:main"
              }
            ]
          },
          {
            "id": "b-i",
            "t": "text",
            "text": "Nối thông tin: chi tiết ở đâu",
            "x": 2928,
            "y": 250,
            "size": 46,
            "at": "l1:information"
          },
          {
            "id": "b-i2",
            "t": "text",
            "text": "(một đoạn có thể dùng lại)",
            "x": 2968,
            "y": 320,
            "size": 40,
            "at": "l2:more than once",
            "color": "muted"
          },
          {
            "id": "b-m",
            "t": "text",
            "text": "Chuột nhanh, dành giờ cho ý chính",
            "x": 2028,
            "y": 520,
            "size": 46,
            "at": "l3:mouse",
            "hl": [
              {
                "text": "ý chính",
                "at": "l3:main ideas"
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
          "say": "Don't confuse it with matching information. Headings ask the main idea. Information asks where a detail is.",
          "sub": "Đừng nhầm với nối thông tin. Nối tiêu đề hỏi ý chính cả đoạn, nối thông tin hỏi chi tiết nằm ở đâu.",
          "keys": [
            "chi tiết nằm ở đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "There, one paragraph can be used more than once, if the task allows.",
          "sub": "Ở dạng đó, một đoạn có thể dùng nhiều lần, nếu đề cho phép."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Dragging is quick. Spend your time on main ideas, not the mouse.",
          "sub": "Kéo thả nhanh thôi. Dành giờ cho ý chính, đừng loay hoay với chuột.",
          "keys": [
            "Dành giờ cho ý chính"
          ]
        }
      ],
      "ref": "p3,p2"
    },
    {
      "id": "s04",
      "module": "BRK-02",
      "data": {
        "kicker": "Chặng một",
        "title": "Ý chính, không phải chi tiết",
        "hl": "không phải chi tiết",
        "sub": "Ví dụ, số liệu, lời kể chỉ để chứng minh"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Main idea, not detail.",
          "sub": "Ý chính, không phải chi tiết.",
          "keys": [
            "Ý chính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Examples, numbers and stories only prove the point.",
          "sub": "Ví dụ, số liệu, lời kể chỉ để chứng minh.",
          "keys": [
            "chứng minh"
          ]
        }
      ],
      "ref": "p4"
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
            "text": "① 8:45 · Cả đoạn nói gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-card",
            "t": "box",
            "x": 4836,
            "y": 150,
            "w": 780,
            "h": 470,
            "at": "l2:practice",
            "stroke": 4
          },
          {
            "id": "c-lb",
            "t": "text",
            "text": "Đoạn luyện (tự soạn, không phải đề thật)",
            "x": 4856,
            "y": 110,
            "size": 28,
            "at": "l2:practice",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "c-p0",
            "t": "text",
            "text": "In many crowded cities, flat roofs",
            "x": 4866,
            "y": 175,
            "size": 34,
            "at": "l3:flat"
          },
          {
            "id": "c-p1",
            "t": "text",
            "text": "are being turned into gardens.",
            "x": 4866,
            "y": 235,
            "size": 34,
            "at": "l3:flat"
          },
          {
            "id": "c-p2",
            "t": "text",
            "text": "The plants absorb heat during the day,",
            "x": 4866,
            "y": 295,
            "size": 34,
            "at": "l4:absorb"
          },
          {
            "id": "c-p3",
            "t": "text",
            "text": "so the rooms below need less",
            "x": 4866,
            "y": 355,
            "size": 34,
            "at": "l4:absorb"
          },
          {
            "id": "c-p4",
            "t": "text",
            "text": "air conditioning. Residents said their",
            "x": 4866,
            "y": 415,
            "size": 34,
            "at": "l4:absorb"
          },
          {
            "id": "c-p5",
            "t": "text",
            "text": "top-floor flats felt cooler in summer.",
            "x": 4866,
            "y": 475,
            "size": 34,
            "at": "l4:absorb"
          },
          {
            "id": "c-p6",
            "t": "text",
            "text": "The plants also catch rainwater…",
            "x": 4866,
            "y": 535,
            "size": 34,
            "at": "l5:rainwater"
          },
          {
            "id": "c-h1",
            "t": "text",
            "text": "i. Vườn trên mái giúp nhà, phố",
            "x": 3996,
            "y": 170,
            "size": 44,
            "at": "l6:i",
            "color": "accent"
          },
          {
            "id": "c-h2",
            "t": "text",
            "text": "ii. Điều hoà ở chung cư",
            "x": 3996,
            "y": 245,
            "size": 44,
            "at": "l6:air"
          },
          {
            "id": "c-h3",
            "t": "text",
            "text": "iii. Chi phí làm vườn mái",
            "x": 3996,
            "y": 320,
            "size": 44,
            "at": "l6:three"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, eight forty-five. IDP's advice: find the main idea of each paragraph, not the supporting details.",
          "sub": "Chặng một, chín giờ kém mười lăm. IDP khuyên: tìm ý chính của mỗi đoạn, không phải chi tiết hỗ trợ.",
          "keys": [
            "ý chính của mỗi đoạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Here's a practice paragraph, written for learning.",
          "sub": "Đây là đoạn luyện, tự soạn để học."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In crowded cities, flat roofs are becoming gardens.",
          "sub": "Ở nhiều thành phố đông đúc, mái bằng đang thành vườn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plants absorb heat, so rooms below need less air conditioning. Top-floor flats felt cooler.",
          "sub": "Cây hút nhiệt, phòng bên dưới bớt điều hoà. Căn hộ tầng trên mát hơn vào mùa hè."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The plants also catch rainwater that would rush into the drains.",
          "sub": "Cây còn giữ nước mưa, khỏi dồn hết xuống cống."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Three headings: i, how rooftop gardens help buildings and cities. Two, air conditioning in apartments. Three, the cost.",
          "sub": "Ba tiêu đề: i, vườn trên mái giúp nhà và phố thế nào. ii, điều hoà ở chung cư. iii, chi phí làm vườn mái."
        }
      ],
      "ref": "p4,p5"
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
          }
        ],
        "items": [
          {
            "id": "c-s1",
            "t": "text",
            "text": "B1: lợi ích của vườn mái",
            "x": 3996,
            "y": 420,
            "size": 44,
            "at": "l2:benefits",
            "hl": [
              {
                "text": "lợi ích",
                "at": "l2:benefits"
              }
            ]
          },
          {
            "id": "c-s2",
            "t": "text",
            "text": "B2: điều hoà = ví dụ",
            "x": 3996,
            "y": 490,
            "size": 44,
            "at": "l3:examples"
          },
          {
            "id": "c-s3",
            "t": "text",
            "text": "B3: chi phí không nhắc → i",
            "x": 3996,
            "y": 560,
            "size": 44,
            "at": "l4:cost",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "What is the whole paragraph about? Not which words it has.",
          "sub": "Cả đoạn nói về gì? Chứ không phải đoạn có chữ gì.",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Step one: the benefits of rooftop gardens.",
          "sub": "Bước một: cả đoạn nói về lợi ích của vườn trên mái.",
          "keys": [
            "lợi ích"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step two: air conditioning and top-floor flats are just examples.",
          "sub": "Bước hai: điều hoà, căn hộ tầng trên chỉ là ví dụ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Step three: the cost is never mentioned. Choose i.",
          "sub": "Bước ba: chi phí không được nhắc. Chọn i.",
          "keys": [
            "Chọn i"
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
            "fit": "C",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "c-k",
            "t": "text",
            "text": "Hỏi ý cả đoạn, không hỏi chữ",
            "x": 3996,
            "y": 660,
            "size": 50,
            "at": "l1:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "ý cả đoạn",
                "at": "l1:whole"
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
          "say": "Takeaway: ask what the whole paragraph is about, not which words it contains.",
          "sub": "Rút ra: hỏi cả đoạn nói về gì, đừng hỏi đoạn có chữ gì.",
          "keys": [
            "cả đoạn nói về gì"
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
            "text": "② 9:15 · Đầu, giữa, cuối",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-sk",
            "t": "text",
            "text": "Đọc lướt = nắm ý chính",
            "x": 5964,
            "y": 165,
            "size": 50,
            "at": "l1:skimming",
            "hl": [
              {
                "text": "nắm ý chính",
                "at": "l1:main ideas"
              }
            ]
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 5964,
            "y": 260,
            "w": 1000,
            "h": 80,
            "at": "l2:first",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Câu đầu: đọc kỹ",
            "x": 5994,
            "y": 270,
            "size": 44,
            "at": "l2:first+200"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 5964,
            "y": 360,
            "w": 1000,
            "h": 160,
            "at": "l2:middle",
            "stroke": 3,
            "hatch": true
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Giữa: lướt",
            "x": 5994,
            "y": 410,
            "size": 48,
            "at": "l2:middle+200",
            "color": "muted"
          },
          {
            "id": "d-b3",
            "t": "box",
            "x": 5964,
            "y": 540,
            "w": 1000,
            "h": 80,
            "at": "l2:last",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Câu cuối: chốt hoặc chuyển ý",
            "x": 5994,
            "y": 550,
            "size": 44,
            "at": "l3:wrap"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: British Council — kỹ năng đọc lướt",
            "x": 5964,
            "y": 720,
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
          "say": "Stop two, nine fifteen. The British Council calls skimming reading for main ideas. Exactly what headings need.",
          "sub": "Chặng hai, chín giờ mười lăm. British Council gọi đọc lướt là đọc để nắm ý chính, đúng thứ dạng này cần.",
          "keys": [
            "nắm ý chính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A common method: read the first sentence closely, skim the middle, then read the last.",
          "sub": "Một cách hay dùng: đọc kỹ câu đầu, lướt phần giữa, rồi đọc câu cuối.",
          "keys": [
            "đọc kỹ câu đầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The first often introduces the topic. The last may wrap up, or turn the corner.",
          "sub": "Câu đầu thường giới thiệu chủ đề, câu cuối có khi chốt lại hoặc chuyển ý."
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-w",
            "t": "text",
            "text": "Mở bằng ví dụ, câu hỏi",
            "x": 7004,
            "y": 270,
            "size": 36,
            "at": "l1:example",
            "color": "coral"
          },
          {
            "id": "d-w2",
            "t": "text",
            "text": "ý chính nằm giữa đoạn",
            "x": 7024,
            "y": 330,
            "size": 36,
            "at": "l1:question"
          },
          {
            "id": "d-hw",
            "t": "text",
            "text": "However… = đổi hướng",
            "x": 7004,
            "y": 430,
            "size": 44,
            "at": "l2:However",
            "color": "coral",
            "hl": [
              {
                "text": "đổi hướng",
                "at": "l2:turning"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Đầu gợi ý, cả đoạn quyết định",
            "x": 7004,
            "y": 560,
            "size": 36,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "cả đoạn quyết định",
                "at": "l3:decides"
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
          "say": "But did you know? Not every paragraph puts its main idea first. Some open with an example or a question.",
          "sub": "Nhưng bạn có biết: không phải đoạn nào cũng đặt ý chính ở câu đầu. Có đoạn mở bằng ví dụ hay câu hỏi.",
          "keys": [
            "không phải đoạn nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Some start with However, turning away from the paragraph before.",
          "sub": "Có đoạn bắt đầu bằng However, tức là đổi hướng so với đoạn trước.",
          "keys": [
            "đổi hướng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: the first sentence hints, the whole paragraph decides. Skim it all to be sure.",
          "sub": "Rút ra: câu đầu gợi ý, cả đoạn mới quyết định. Lướt hết để chắc các câu cùng hướng.",
          "keys": [
            "cả đoạn mới quyết định"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s10",
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
            "at": "l2:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 9:45 · Bẫy từ khoá",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three",
            "hl": [
              {
                "text": "Bẫy",
                "at": "l1:trap"
              }
            ]
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
                  "id": "lan",
                  "side": "center",
                  "pose": "point",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "lan",
                  "move": "push"
                }
              ]
            },
            "at": "l1:trap",
            "caption": "9:45 · đoạn vườn trên mái",
            "icon": "laptop"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "ii. Air conditioning in",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l2:air",
            "color": "coral"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "apartment blocks",
            "x": 7972,
            "y": 245,
            "size": 50,
            "at": "l2:apartment",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, nine forty-five. The keyword trap.",
          "sub": "Chặng ba, mười giờ kém mười lăm. Cái bẫy từ khoá.",
          "keys": [
            "bẫy từ khoá"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Heading two has air conditioning and apartment block. Both are in the paragraph! Must be it.",
          "sub": "Tiêu đề hai có air conditioning và apartment block, đều có trong đoạn! Chắc chắn là nó.",
          "face": "happy",
          "stop": true
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Thứ Bảy 9:45",
        "actors": [
          {
            "id": "lan",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Trùng nhiều chữ nhất là đúng",
          "why": "Điều hoà, căn hộ tầng trên chỉ là ví dụ; người ra đề cố ý dùng lại chữ của một chi tiết.",
          "rule": "Trùng chữ chưa phải trùng ý"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Most matching words wins. Heading two!",
          "sub": "Trùng nhiều chữ nhất thì thắng. Tiêu đề hai!",
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
          "say": "Those words come from one example. The setter reused them on purpose.",
          "sub": "Mấy chữ đó lấy từ một ví dụ. Người ra đề cố ý dùng lại.",
          "keys": [
            "cố ý dùng lại"
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
          "who": "lan",
          "say": "Heading one says helps buildings, new words for absorbs heat and catches rainwater. It covers it all.",
          "sub": "Tiêu đề một nói helps buildings, chữ khác để tóm hút nhiệt và giữ nước mưa. Bao được cả đoạn.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Same idea, different words.",
          "sub": "Đúng. Cùng ý, khác chữ.",
          "phase": "redo",
          "keys": [
            "Cùng ý, khác chữ"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p10,p11"
    },
    {
      "id": "s12",
      "module": "BRK-04",
      "data": {
        "title": "Chọn tiêu đề",
        "wrong": "Trùng nhiều chữ nhất là đúng",
        "right": "Tiêu đề đúng hay dùng chữ khác để tóm ý",
        "wrongIllus": "label",
        "rightIllus": "light-bulb"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Most shared words? Often the trap.",
          "sub": "Trùng chữ nhiều nhất? Hay lại là bẫy.",
          "keys": [
            "Hay lại là bẫy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The right heading uses new words to sum up.",
          "sub": "Tiêu đề đúng hay dùng chữ khác để tóm ý.",
          "keys": [
            "chữ khác để tóm ý"
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-t1",
            "t": "text",
            "text": "Bẫy: lặp chữ của đoạn",
            "x": 7932,
            "y": 400,
            "size": 46,
            "at": "l1:repeats",
            "hl": [
              {
                "text": "lặp chữ",
                "at": "l1:repeats"
              }
            ]
          },
          {
            "id": "e-t2",
            "t": "text",
            "text": "• chỉ một chi tiết nhỏ",
            "x": 7972,
            "y": 470,
            "size": 42,
            "at": "l1:small"
          },
          {
            "id": "e-t3",
            "t": "text",
            "text": "• rộng hơn / hẹp hơn đoạn",
            "x": 7972,
            "y": 530,
            "size": 42,
            "at": "l2:wider"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Trùng chữ chưa phải trùng ý",
            "x": 8772,
            "y": 690,
            "size": 48,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "trùng ý",
                "at": "l3:ideas"
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
          "say": "A trap heading usually repeats a word from the paragraph, but covers only a small detail.",
          "sub": "Tiêu đề bẫy thường lặp lại một chữ trong đoạn, nhưng chỉ nói về một chi tiết nhỏ.",
          "keys": [
            "chi tiết nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Or it's wider, or narrower, than what the paragraph says.",
          "sub": "Hoặc nói rộng hơn, hẹp hơn nội dung đoạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: matching words isn't matching ideas. Compare the idea of the whole paragraph.",
          "sub": "Rút ra: trùng chữ chưa phải trùng ý, hãy so ý của cả đoạn.",
          "keys": [
            "trùng chữ chưa phải trùng ý"
          ]
        }
      ],
      "ref": "p10,p12"
    },
    {
      "id": "s14",
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
            "at": "l6",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 10:15 · Làm dạng nào trước?",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "left"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "laptop",
                "memo"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:passage",
            "caption": "10:15 · tiêu đề + T/F/NG",
            "icon": "memo"
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "Không luật cứng: đỡ đọc lại",
            "x": 60,
            "y": 1260,
            "size": 34,
            "at": "l2:rule"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "A: T/F/NG trước → đọc lại cả bài",
            "x": 60,
            "y": 1350,
            "size": 40,
            "at": "l4:rereads",
            "color": "muted"
          },
          {
            "id": "f-ax",
            "t": "strike",
            "over": "f-a",
            "at": "l5:skim"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "B: lướt chọn tiêu đề trước",
            "x": 60,
            "y": 1440,
            "size": 44,
            "at": "l5:headings first",
            "color": "accent",
            "hl": [
              {
                "text": "tiêu đề trước",
                "at": "l5:headings first"
              }
            ]
          },
          {
            "id": "f-b2",
            "t": "text",
            "text": "nháp: ý chính mỗi đoạn, vài chữ",
            "x": 100,
            "y": 1515,
            "size": 38,
            "at": "l5:few words"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, ten fifteen. A passage with matching headings and True False Not Given.",
          "sub": "Chặng bốn, mười giờ mười lăm. Một bài có cả nối tiêu đề lẫn True/False/Not Given."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No rule says which comes first. And here is Thảo, the office worker of the group, joining the table.",
          "sub": "Không có quy định làm dạng nào trước. Còn đây là Thảo, chị nhân viên văn phòng trong nhóm, ngồi vào bàn.",
          "keys": [
            "Không có quy định"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Option A: True False Not Given first, reading every small spot closely.",
          "sub": "Cách A: làm True/False/Not Given trước, đọc kỹ từng chỗ nhỏ.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then back to headings, she rereads nearly the whole passage. No paragraph ideas noted.",
          "sub": "Quay sang tiêu đề, Lan phải đọc lại gần hết bài, vì chưa nắm ý từng đoạn.",
          "keys": [
            "đọc lại gần hết bài"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Option B: skim for headings first, and write each paragraph's idea in a few words on scratch paper.",
          "sub": "Cách B: lướt chọn tiêu đề trước, ghi ý chính mỗi đoạn vài chữ ra nháp.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "lan",
          "say": "Then for True False Not Given, I know exactly which paragraph to read closely!",
          "sub": "Rồi làm True/False/Not Given, biết ngay đoạn nào cần đọc kỹ!",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 900
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-k",
            "t": "text",
            "text": "Lướt một lần, dùng cho hai việc",
            "x": 60,
            "y": 1650,
            "size": 52,
            "at": "l1:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Lướt một lần",
                "at": "l1:once"
              }
            ]
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "Một công đôi việc",
            "x": 60,
            "y": 1740,
            "size": 46,
            "at": "l2:two baskets"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: skim the passage once for both tasks. Don't read it again from the top.",
          "sub": "Rút ra: lướt bài một lần cho cả hai việc, đừng đọc lại từ đầu.",
          "keys": [
            "lướt bài một lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One trip to the market, two baskets of shopping.",
          "sub": "Một chuyến đi chợ, hai giỏ đồ. Một công đôi việc."
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s16",
      "module": "BRK-07",
      "data": {
        "question": "Còn đúng hai tiêu đề, cái nào cũng có vẻ hợp?",
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
          "say": "Two headings left, and both seem to fit?",
          "sub": "Còn hai tiêu đề, cái nào cũng có vẻ hợp?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
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
            "text": "⑤ 10:45 · Phân vân hai tiêu đề",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1280,
            "w": 44,
            "h": 44,
            "at": "l2:easy",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1262,
            "size": 56,
            "at": "l2:easy+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Làm đoạn dễ trước",
            "x": 2093,
            "y": 1272,
            "size": 48,
            "at": "l2:easy+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1375,
            "w": 44,
            "h": 44,
            "at": "l2:cross",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1357,
            "size": 56,
            "at": "l2:cross+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Gạch tiêu đề đã dùng",
            "x": 2093,
            "y": 1367,
            "size": 48,
            "at": "l2:cross+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1470,
            "w": 44,
            "h": 44,
            "at": "l3:covers",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1452,
            "size": 56,
            "at": "l3:covers+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Bao nhiều câu hơn → chọn",
            "x": 2093,
            "y": 1462,
            "size": 48,
            "at": "l3:covers+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1565,
            "w": 44,
            "h": 44,
            "at": "l4:one sentence",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1547,
            "size": 56,
            "at": "l4:one sentence+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Khớp đúng 1 câu → chi tiết",
            "x": 2093,
            "y": 1557,
            "size": 48,
            "at": "l4:one sentence+200"
          },
          {
            "id": "g-ex",
            "t": "text",
            "text": "Ví dụ mẫu: đọc hướng dẫn,",
            "x": 2868,
            "y": 1280,
            "size": 44,
            "at": "l5:example"
          },
          {
            "id": "g-ex2",
            "t": "text",
            "text": "không dùng lại → gạch ngay",
            "x": 2908,
            "y": 1350,
            "size": 44,
            "at": "l5:cross it out",
            "color": "accent",
            "hl": [
              {
                "text": "gạch ngay",
                "at": "l5:cross it out"
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
          "say": "Stop five, ten forty-five. Two headings, one paragraph.",
          "sub": "Chặng năm, mười một giờ kém mười lăm. Hai tiêu đề, một đoạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Do the easy paragraphs first, and cross out headings you've used. The list gets shorter.",
          "sub": "Làm đoạn dễ trước, gạch các tiêu đề đã dùng để danh sách ngắn lại.",
          "keys": [
            "Làm đoạn dễ trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For the hard one, ask: which heading covers more sentences in the paragraph?",
          "sub": "Với đoạn khó, hỏi: tiêu đề nào bao được nhiều câu trong đoạn hơn?",
          "keys": [
            "nhiều câu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A heading that fits only one sentence is usually a detail.",
          "sub": "Tiêu đề chỉ khớp một câu thường là chi tiết."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "If there's an example already matched, check the instructions. If that heading can't be reused, cross it out now.",
          "sub": "Đề có ví dụ mẫu nối sẵn? Đọc kỹ hướng dẫn, tiêu đề ấy không được dùng lại thì gạch ngay.",
          "keys": [
            "gạch ngay"
          ]
        }
      ],
      "ref": "p16,p17"
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
            "text": "⑥ 11:00 · Tự đặt tiêu đề",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:Stop six",
            "caption": "11:00 · bài đọc bất kỳ",
            "icon": "pencil"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Sau mỗi đoạn: viết tiêu đề",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l1:after"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "dưới 10 chữ",
            "x": 4036,
            "y": 1340,
            "size": 60,
            "at": "l1:ten",
            "color": "accent",
            "hl": [
              {
                "text": "dưới 10 chữ",
                "at": "l1:ten"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "→ so với danh sách đề",
            "x": 4036,
            "y": 1430,
            "size": 46,
            "at": "l3:compare"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "“Rooftop gardens cool and drain”",
            "x": 3996,
            "y": 1530,
            "size": 40,
            "at": "l2:cool"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, eleven. After each paragraph, Lan writes her own heading in under ten words.",
          "sub": "Chặng sáu, mười một giờ. Sau mỗi đoạn, Lan tự viết một tiêu đề dưới mười chữ.",
          "keys": [
            "dưới mười chữ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Rooftop gardens cool and drain. Five words. Done.",
          "sub": "Rooftop gardens cool and drain. Năm chữ. Xong.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then compare it with the list. The closest heading in meaning wins.",
          "sub": "Rồi so với danh sách của đề. Tiêu đề gần ý nhất thắng.",
          "keys": [
            "gần ý nhất"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Your own heading is the compass. The list just shows which road has a name.",
          "sub": "Tiêu đề tự viết là la bàn. Danh sách của đề chỉ cho biết đường nào có tên."
        }
      ],
      "ref": "outro"
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
            "text": "11:30 · Cùng bàn ấy",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:same"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "hot-beverage"
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
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same",
            "caption": "11:30 · quán nhóm tự học",
            "icon": "hot-beverage"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Nối theo ý, không theo chữ",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:ideas",
            "color": "accent",
            "hl": [
              {
                "text": "theo ý",
                "at": "l2:ideas"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Tiêu đề thừa: gạch, bỏ",
            "x": 5964,
            "y": 1350,
            "size": 48,
            "at": "l3:extra"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Thấy cây… và thấy cả rừng”",
            "x": 5964,
            "y": 1470,
            "size": 52,
            "at": "l4:forest",
            "color": "accent",
            "hl": [
              {
                "text": "thấy cả rừng",
                "at": "l4:forest"
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
          "say": "Eleven thirty. Same café, same table, same Lan.",
          "sub": "Mười một rưỡi. Vẫn quán ấy, bàn ấy, Lan ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "This time I matched by ideas, not by words. Every heading right!",
          "sub": "Lần này mình nối theo ý, không theo chữ. Tiêu đề nào cũng đúng!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "And the extra headings? Crossed out, left behind.",
          "sub": "Còn tiêu đề thừa? Gạch đi, bỏ lại.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She sees the trees, and now the forest too.",
          "sub": "Lan thấy cây, và giờ thấy cả rừng.",
          "keys": [
            "thấy cả rừng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And no more picking a husband by his surname.",
          "sub": "Và hết cảnh chọn chồng theo… họ."
        }
      ],
      "ref": "p12"
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
            "at": "l1:end",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: tóm mỗi đoạn vài chữ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:So"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Làm ngay: tự đặt tiêu đề",
            "x": 7932,
            "y": 1290,
            "size": 50,
            "at": "l5:Try",
            "hl": [
              {
                "text": "tự đặt tiêu đề",
                "at": "l5:own"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "dưới 10 chữ, rồi so danh sách",
            "x": 7972,
            "y": 1375,
            "size": 46,
            "at": "l5:compare"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: điền tóm tắt",
            "x": 7932,
            "y": 1480,
            "size": 50,
            "at": "l6:Next",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5536,
            "y": 40,
            "at": "l2:whole"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 40,
            "at": "l3:words"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1600,
            "y": 1130,
            "at": "l4:once"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; cấu trúc đề, quy định thi có thể đổi — kiểm lại trang chính thức IELTS. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l6:end",
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
          "say": "So matching headings isn't word hunting. It's summing up each paragraph in a few words.",
          "sub": "Tóm lại, nối tiêu đề không phải trò bắt chữ, mà là tóm mỗi đoạn trong vài từ.",
          "keys": [
            "tóm mỗi đoạn trong vài từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: ask what the whole paragraph is about.",
          "sub": "Một: hỏi cả đoạn nói về gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: shared words aren't shared ideas.",
          "sub": "Hai: trùng chữ chưa phải trùng ý."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: skim once, for headings and details.",
          "sub": "Ba: lướt một lần, dùng cho cả tiêu đề lẫn chi tiết."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: take any passage, write your own heading under ten words for each paragraph, then compare.",
          "sub": "Làm ngay: lấy một bài đọc bất kỳ, sau mỗi đoạn tự viết tiêu đề dưới mười chữ, rồi so với danh sách.",
          "keys": [
            "tự viết tiêu đề"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: summary and sentence completion.",
          "sub": "Bài tiếp theo: điền tóm tắt, hoàn thành câu.",
          "keys": [
            "điền tóm tắt"
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
        "q": "What is the common misunderstanding about headings?",
        "options": [
          "Thinking that headings are marked more strictly than other questions",
          "Thinking the heading sharing the most words with the paragraph is right",
          "Thinking that every heading in the list must be used at least once"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "label",
        "why": "Nhiều bạn nghĩ tiêu đề trùng nhiều chữ nhất là đúng. Thực ra tiêu đề đúng hay dùng từ khác để tóm ý."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the common misunderstanding about headings?",
          "sub": "Hiểu lầm thường gặp về tiêu đề là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Thinking the heading sharing the most words with the paragraph is right.",
          "sub": "Nghĩ rằng tiêu đề trùng nhiều chữ nhất với đoạn là đúng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Shared words are often the trap.",
          "sub": "Trùng chữ nhiều khi lại là bẫy."
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
        "text": "Bạn đã xem xong. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "See the forest, not just the trees. Then try the forty questions below.",
          "sub": "Thấy cả rừng, đừng chỉ thấy cây. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT SÁNG THỨ BẢY ở quán nhóm tự học (8:30 Lan mở đề → 8:45 ý chính / chi tiết, đoạn vườn trên mái → 9:15 câu đầu, câu cuối → 9:45 bẫy từ khoá + “Khoan đã!” → 10:15 thứ tự làm (Lan vai Vy, Thảo) → 10:45 phân vân hai tiêu đề → 11:00 tự đặt tiêu đề → 11:30 cùng bàn khép vòng). HOOK-20: đáp án trước. Nhân vật: Lan, Thảo — w145/_series/ielts-academic-reading-takers.md. Đoạn luyện vườn trên mái là đoạn tự soạn của bài, ghi rõ trên bảng. Cảnh ngắt nhịp: BRK-02 (ý chính, không phải chi tiết), BRK-04 (trùng chữ / chữ khác để tóm ý), BRK-07 (rehook hai tiêu đề). Ca dao: “Thấy cây mà chẳng thấy rừng”. Câu đố questions[18].",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
