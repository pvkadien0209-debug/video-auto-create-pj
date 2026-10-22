// graded-readers-extensive-reading--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "graded-readers-extensive-reading--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "beginner-vocabulary-learners",
    "slug": "graded-readers-extensive-reading",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Đọc sách phân cấp (graded readers) giúp nhớ từ thế nào?",
    "series": "Học từ vựng không quên — cách chọn từ, ghi nhớ và dùng được, cho người mới học ngoại ngữ"
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
              "a-bk"
            ],
            "zoom": 1.6,
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-bk",
            "t": "illus",
            "name": "green-book",
            "x": 120,
            "y": 90,
            "size": 300,
            "at": "l1"
          },
          {
            "id": "a-num",
            "t": "text",
            "text": "400 từ",
            "x": 470,
            "y": 110,
            "size": 150,
            "at": "l1:four",
            "color": "accent",
            "hl": [
              {
                "text": "400 từ",
                "at": "l1:hundred"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "cả cuốn truyện, cấp 1",
            "x": 480,
            "y": 300,
            "size": 54,
            "at": "l2:whole"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Tưởng: vài nghìn từ?",
            "x": 60,
            "y": 430,
            "size": 54,
            "at": "l3:thousands",
            "color": "muted"
          },
          {
            "id": "a-qx",
            "t": "strike",
            "over": "a-q",
            "at": "l3:Wrong"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Paul Nation (2014), What do you need to know to learn a foreign language? — ĐH Victoria Wellington",
            "x": 60,
            "y": 720,
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
          "say": "This thin little book uses only four hundred different words.",
          "sub": "Cuốn sách mỏng này chỉ dùng đúng bốn trăm từ khác nhau.",
          "keys": [
            "bốn trăm từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet it tells a whole story, from the first page to the last.",
          "sub": "Vậy mà nó kể trọn một câu chuyện, từ trang đầu tới trang cuối."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "We think you need thousands of words to finish a book. Wrong.",
          "sub": "Ta cứ tưởng phải biết vài nghìn từ mới đọc hết một cuốn. Sai rồi.",
          "keys": [
            "vài nghìn từ"
          ]
        }
      ],
      "ref": "p2"
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
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "card-index",
                "books"
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
            "caption": "Thứ Bảy 19:00 · quán cà phê sách",
            "icon": "books"
          },
          {
            "id": "a-dead",
            "t": "text",
            "text": "Thẻ thuộc, gặp câu thật: quên",
            "x": 60,
            "y": 540,
            "size": 46,
            "at": "l3:real",
            "color": "coral",
            "hl": [
              {
                "text": "quên",
                "at": "l3:blank"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Trăm hay không bằng tay quen”",
            "x": 60,
            "y": 630,
            "size": 50,
            "at": "l5:hundred",
            "color": "accent",
            "hl": [
              {
                "text": "tay quen",
                "at": "l5:familiar"
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
          "say": "Meet Lan, a first-year student. She studies word cards every day.",
          "sub": "Đây là Lan, sinh viên năm nhất. Ngày nào Lan cũng học thẻ từ.",
          "keys": [
            "thẻ từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Saturday, seven p.m., at Cô Hoa's book café.",
          "sub": "Thứ Bảy, bảy giờ tối, ở quán cà phê sách của cô Hoa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "I know these words on cards. But in a real sentence, my mind goes blank!",
          "sub": "Trên thẻ thì thuộc. Gặp trong câu thật là đầu óc trống trơn!",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Her words lie still, like noodles in a packet. Never cooked.",
          "sub": "Từ của Lan nằm im, như mì trong gói. Chưa từng được nấu.",
          "keys": [
            "mì trong gói"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our saying goes: a hundred clever tricks lose to a familiar hand. Practice beats talent.",
          "sub": "Ông bà dặn: “Trăm hay không bằng tay quen.”",
          "keys": [
            "Trăm hay không bằng tay quen"
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
            "text": "Sách dễ giúp nhớ từ?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:remember",
            "hl": [
              {
                "text": "nhớ từ",
                "at": "l1:remember"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Thẻ: nhớ nghĩa",
            "x": 2028,
            "y": 165,
            "size": 52,
            "at": "l2:meaning"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Từ sống nhờ gặp lại",
            "x": 2028,
            "y": 245,
            "size": 48,
            "at": "l2:alive",
            "color": "accent",
            "hl": [
              {
                "text": "gặp lại",
                "at": "l2:again"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: sách khó",
            "x": 2028,
            "y": 345,
            "size": 46,
            "at": "l3:hard",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:but"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: sách đủ dễ",
            "x": 2028,
            "y": 430,
            "size": 52,
            "at": "l3:graded",
            "color": "accent",
            "hl": [
              {
                "text": "đủ dễ",
                "at": "l3:easy"
              }
            ]
          },
          {
            "id": "b-r1",
            "t": "text",
            "text": "≤ 2 từ lạ / 100 chữ",
            "x": 2928,
            "y": 170,
            "size": 50,
            "at": "l4:two",
            "hl": [
              {
                "text": "≤ 2 từ lạ",
                "at": "l4:two"
              }
            ]
          },
          {
            "id": "b-r2",
            "t": "text",
            "text": "≈ 1 cuốn / tuần",
            "x": 2928,
            "y": 250,
            "size": 50,
            "at": "l4:week"
          },
          {
            "id": "b-r3",
            "t": "text",
            "text": "có đọc lại",
            "x": 2928,
            "y": 330,
            "size": 50,
            "at": "l4:rereading"
          },
          {
            "id": "b-r4",
            "t": "text",
            "text": "chép từ ra thẻ",
            "x": 2928,
            "y": 410,
            "size": 50,
            "at": "l4:cards",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do easy books help you remember words?",
          "sub": "Vậy sách dễ giúp mình nhớ từ thế nào?",
          "keys": [
            "nhớ từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cards help you remember the meaning. But a word only comes alive when you meet it again and again.",
          "sub": "Thẻ giúp nhớ nghĩa. Nhưng từ chỉ sống khi được gặp lại nhiều lần trong câu.",
          "keys": [
            "gặp lại nhiều lần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not hard books for more new words, but graded readers, easy enough to enjoy.",
          "sub": "Không phải đọc sách khó cho nhiều từ mới, mà là sách phân cấp, đủ dễ để đọc vui.",
          "keys": [
            "sách phân cấp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two new words per hundred at most, a book a week, some rereading, and cards.",
          "sub": "Không quá hai từ lạ trên trăm chữ, khoảng một cuốn mỗi tuần, có đọc lại, và chép từ đáng học ra thẻ."
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Một tuần đọc của Lan",
        "points": [
          {
            "label": "Thứ Bảy",
            "sub": "Chọn đúng cấp",
            "illus": "books"
          },
          {
            "label": "Chủ nhật",
            "sub": "Một chương mỗi ngày",
            "illus": "open-book"
          },
          {
            "label": "Thứ Ba",
            "sub": "Dũng đổi cách đọc",
            "illus": "newspaper"
          },
          {
            "label": "Thứ Tư",
            "sub": "Đọc lại, đọc mới",
            "illus": "counterclockwise-arrows-button"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Nối với thẻ từ",
            "illus": "card-index"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One week, one reading habit.",
          "sub": "Một tuần, một thói quen đọc.",
          "keys": [
            "Một tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Let's follow Lan, page by page.",
          "sub": "Theo chân Lan, từng trang một."
        }
      ],
      "ref": "p16"
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
            "at": "l5",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 19:10 · Kệ sách",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l2:owner"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "props": [
                "books",
                "green-book"
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
            "at": "l2:Cô Hoa",
            "caption": "19:10 · kệ sách của cô Hoa",
            "icon": "books"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Viết cho người học",
            "x": 3996,
            "y": 165,
            "size": 48,
            "at": "l5:written"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Vốn từ kiểm soát theo cấp",
            "x": 3996,
            "y": 235,
            "size": 48,
            "at": "l5:controlled",
            "color": "accent",
            "hl": [
              {
                "text": "kiểm soát",
                "at": "l5:controlled"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Oxford Bookworms · Cambridge Readers",
            "x": 3996,
            "y": 305,
            "size": 36,
            "at": "l6:Oxford"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Penguin · Heinemann · National Geographic",
            "x": 3996,
            "y": 350,
            "size": 36,
            "at": "l6:Penguin",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Stop one. This is Cô Hoa, the café owner. She runs an English reading club.",
          "sub": "Chặng một. Đây là cô Hoa, chủ quán. Cô lập một câu lạc bộ đọc tiếng Anh ngay tại đây.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Try this one, Lan. Level one. Four hundred words, the whole book.",
          "sub": "Thử cuốn này đi Lan. Cấp một. Bốn trăm từ, cả cuốn.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Four hundred? I already know that many!",
          "sub": "Bốn trăm thôi á? Con biết ngần ấy rồi!",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Graded readers are written for language learners, with a controlled vocabulary at each level.",
          "sub": "Sách phân cấp viết cho người học ngoại ngữ, chỉ dùng vốn từ có kiểm soát ở mỗi cấp.",
          "keys": [
            "vốn từ có kiểm soát"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Nation names Oxford Bookworms, Cambridge English Readers, Penguin, Heinemann, National Geographic.",
          "sub": "Nation kể tên Oxford Bookworms, Cambridge English Readers, các bộ của Penguin, Heinemann, National Geographic."
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
            "id": "c-ob",
            "t": "text",
            "text": "Oxford Bookworms: 6 cấp",
            "x": 3996,
            "y": 460,
            "size": 42,
            "at": "l1:six",
            "hl": [
              {
                "text": "6 cấp",
                "at": "l1:six"
              }
            ]
          },
          {
            "id": "c-b0",
            "t": "box",
            "x": 3996,
            "y": 600,
            "w": 120,
            "h": 60,
            "at": "l1:levels+300",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "c-b1",
            "t": "box",
            "x": 4136,
            "y": 578,
            "w": 120,
            "h": 82,
            "at": "l1:levels+550",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "c-b2",
            "t": "box",
            "x": 4276,
            "y": 556,
            "w": 120,
            "h": 104,
            "at": "l1:levels+800",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "c-b3",
            "t": "box",
            "x": 4416,
            "y": 534,
            "w": 120,
            "h": 126,
            "at": "l1:levels+1050",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "c-b4",
            "t": "box",
            "x": 4556,
            "y": 512,
            "w": 120,
            "h": 148,
            "at": "l1:levels+1300",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "c-b5",
            "t": "box",
            "x": 4696,
            "y": 490,
            "w": 120,
            "h": 170,
            "at": "l1:levels+1550",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "c-n0",
            "t": "text",
            "text": "400",
            "x": 4002,
            "y": 690,
            "size": 30,
            "at": "l1:levels+400",
            "font": "base"
          },
          {
            "id": "c-n1",
            "t": "text",
            "text": "700",
            "x": 4142,
            "y": 690,
            "size": 30,
            "at": "l1:levels+650",
            "font": "base"
          },
          {
            "id": "c-n2",
            "t": "text",
            "text": "1.000",
            "x": 4282,
            "y": 690,
            "size": 30,
            "at": "l1:levels+900",
            "font": "base"
          },
          {
            "id": "c-n3",
            "t": "text",
            "text": "1.400",
            "x": 4422,
            "y": 690,
            "size": 30,
            "at": "l1:levels+1150",
            "font": "base"
          },
          {
            "id": "c-n4",
            "t": "text",
            "text": "1.800",
            "x": 4562,
            "y": 690,
            "size": 30,
            "at": "l1:levels+1400",
            "font": "base"
          },
          {
            "id": "c-n5",
            "t": "text",
            "text": "2.500",
            "x": 4702,
            "y": 690,
            "size": 30,
            "at": "l1:levels+1650",
            "font": "base"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Vài trăm từ: đọc trọn",
            "x": 4836,
            "y": 695,
            "size": 46,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Vài trăm từ",
                "at": "l3:hundred"
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
          "say": "Oxford Bookworms has six levels, from four hundred words up to twenty-five hundred.",
          "sub": "Oxford Bookworms có sáu cấp: 400, 700, 1.000, 1.400, 1.800 và 2.500 từ.",
          "keys": [
            "sáu cấp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Level one is fully rewritten inside four hundred words, not chopped at random. So beginners finish it.",
          "sub": "Cấp một được viết lại hoàn toàn trong bốn trăm từ, không rút gọn bừa. Nên người mới đọc xong được."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: a few hundred words is enough for a first whole book, at the right level.",
          "sub": "Rút ra: vài trăm từ đã đủ đọc trọn cuốn đầu tiên, nếu chọn đúng cấp.",
          "keys": [
            "đúng cấp"
          ]
        }
      ],
      "ref": "p1,p2,p3"
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
            "at": "l1",
            "fit": [
              "c-mid"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-mid",
            "t": "text",
            "text": "Sau ~3.000 từ: mid-frequency readers",
            "x": 3996,
            "y": 398,
            "size": 36,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "mid-frequency readers",
                "at": "l1:mid"
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
          "say": "Most series stop near three thousand words. After that, Nation suggests mid-frequency readers.",
          "sub": "Các bộ thường dừng ở khoảng ba nghìn từ. Vượt mốc đó, Nation giới thiệu sách tần suất trung bình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four, six and eight thousand word levels, free to download.",
          "sub": "Các mức bốn, sáu và tám nghìn từ, tải miễn phí."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Learning another language? Try readers for native children, or a children's encyclopedia.",
          "sub": "Học thứ tiếng khác? Thử sách tập đọc cho trẻ bản ngữ, hoặc bách khoa thư thiếu nhi.",
          "keys": [
            "sách tập đọc cho trẻ bản ngữ"
          ]
        }
      ],
      "ref": "p4"
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
            "text": "② 19:30 · Cấp nào?",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "blue-book",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:thick",
            "caption": "19:30 · cuốn cấp cao, “cho nhiều từ”",
            "icon": "blue-book"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Dòng nào cũng gạch",
            "x": 5964,
            "y": 165,
            "size": 48,
            "at": "l2:underline",
            "color": "coral",
            "hl": [
              {
                "text": "Dòng nào cũng",
                "at": "l2:every line"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Một trang… mất rất lâu",
            "x": 5964,
            "y": 245,
            "size": 48,
            "at": "l2:forever",
            "color": "muted"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "→ xuống 1–2 cấp",
            "x": 5964,
            "y": 330,
            "size": 48,
            "at": "l4:down",
            "color": "accent",
            "hl": [
              {
                "text": "xuống 1–2 cấp",
                "at": "l4:down"
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
          "say": "Stop two. But Lan has her own plan: a thick, high-level book, to learn more words.",
          "sub": "Chặng hai. Nhưng Lan có kế riêng: một cuốn cấp cao dày cộp, cho “học được nhiều từ”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "I underline a few words in every line. One page takes forever!",
          "sub": "Dòng nào con cũng gạch vài từ. Một trang mất cả buổi!",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That's not reading. That's digging a well with a teaspoon.",
          "sub": "Thế không phải đọc. Thế là đào giếng bằng thìa cà phê.",
          "keys": [
            "đào giếng bằng thìa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The book is too hard. Go down one or two levels.",
          "sub": "Sách quá khó. Hãy xuống một, hai cấp.",
          "keys": [
            "xuống một, hai cấp"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s08",
      "module": "BRK-03",
      "data": {
        "value": 2,
        "suffix": " từ lạ",
        "label": "trên 100 chữ — khoảng 1 từ lạ mỗi 5 dòng",
        "illus": "magnifying-glass-tilted-left"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Nation's rule for easy reading.",
          "sub": "Quy tắc đọc dễ của Nation."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No more than two unknown words per hundred. About one every five lines.",
          "sub": "Không quá hai từ lạ trên một trăm chữ. Khoảng một từ lạ mỗi năm dòng.",
          "keys": [
            "hai từ lạ"
          ]
        }
      ],
      "ref": "p5"
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
            "id": "d-v0",
            "t": "text",
            "text": "Dưới 1.000 từ",
            "x": 5964,
            "y": 430,
            "size": 42,
            "at": "l1:Under"
          },
          {
            "id": "d-w0",
            "t": "text",
            "text": "→ cấp đầu",
            "x": 6324,
            "y": 430,
            "size": 42,
            "at": "l1:Under+300",
            "color": "ink"
          },
          {
            "id": "d-v1",
            "t": "text",
            "text": "1.000 – 2.000",
            "x": 5964,
            "y": 502,
            "size": 42,
            "at": "l2:one to two"
          },
          {
            "id": "d-w1",
            "t": "text",
            "text": "→ cấp giữa",
            "x": 6324,
            "y": 502,
            "size": 42,
            "at": "l2:one to two+300",
            "color": "ink"
          },
          {
            "id": "d-v2",
            "t": "text",
            "text": "2.000 – 4.000",
            "x": 5964,
            "y": 574,
            "size": 42,
            "at": "l2:two to four"
          },
          {
            "id": "d-w2",
            "t": "text",
            "text": "→ cấp sau",
            "x": 6324,
            "y": 574,
            "size": 42,
            "at": "l2:two to four+300",
            "color": "ink"
          },
          {
            "id": "d-v3",
            "t": "text",
            "text": "Trên 4.000",
            "x": 5964,
            "y": 646,
            "size": 42,
            "at": "l3:Over"
          },
          {
            "id": "d-w3",
            "t": "text",
            "text": "→ tần suất trung bình",
            "x": 6324,
            "y": 646,
            "size": 42,
            "at": "l3:Over+300",
            "color": "accent"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Gạch kín trang = xuống cấp",
            "x": 6804,
            "y": 695,
            "size": 46,
            "at": "l5:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "xuống cấp",
                "at": "l5:step down"
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
          "say": "Choose by your vocabulary. Under a thousand words? The early levels.",
          "sub": "Chọn theo vốn từ. Dưới một nghìn từ? Các cấp đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One to two thousand, the middle levels. Two to four thousand, the later levels.",
          "sub": "Một đến hai nghìn từ: cấp giữa. Hai đến bốn nghìn: các cấp sau."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Over four thousand? Move on to mid-frequency readers.",
          "sub": "Trên bốn nghìn? Chuyển sang sách tần suất trung bình."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lan steps down. Now she finishes the story, guesses meanings, and meets old words more often.",
          "sub": "Lan xuống cấp. Giờ Lan đọc trọn truyện, đoán được nghĩa, gặp lại từ cũ nhiều hơn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: if every line is underlined, the book is too hard. Step down.",
          "sub": "Rút ra: dòng nào cũng gạch chân là sách quá khó, hãy xuống cấp.",
          "keys": [
            "hãy xuống cấp"
          ]
        }
      ],
      "ref": "p5,p6,p7"
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
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Chủ nhật · Bao nhiêu?",
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
              "set": "street",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "green-book",
                "bus"
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
            "at": "l1:bus",
            "caption": "Thứ Hai 7:00 · trên xe buýt",
            "icon": "bus"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "≈ 1 cuốn mỗi tuần",
            "x": 7932,
            "y": 165,
            "size": 56,
            "at": "l3:one book",
            "color": "accent",
            "hl": [
              {
                "text": "1 cuốn",
                "at": "l3:one book"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "ít nhất 1–2 giờ / tuần",
            "x": 7932,
            "y": 255,
            "size": 48,
            "at": "l3:hours"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Người mới: 30–60 phút",
            "x": 7932,
            "y": 340,
            "size": 44,
            "at": "l4:beginners",
            "hl": [
              {
                "text": "30–60 phút",
                "at": "l4:thirty"
              }
            ]
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "→ rồi tăng dần",
            "x": 7972,
            "y": 410,
            "size": 44,
            "at": "l4:grow",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three. Sunday night, one chapter. Monday morning, another on the bus.",
          "sub": "Chặng ba. Tối Chủ nhật một chương. Sáng thứ Hai thêm một chương trên xe buýt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Wait, I just read a whole chapter without stopping?",
          "sub": "Ơ, mình vừa đọc hết một chương mà không dừng lần nào?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nation suggests about one book a week, at least one to two hours of reading.",
          "sub": "Nation gợi ý khoảng một cuốn mỗi tuần, ít nhất một đến hai giờ đọc.",
          "keys": [
            "một cuốn mỗi tuần"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Complete beginners: thirty minutes to an hour a week of meaningful reading and listening, then grow.",
          "sub": "Người mới hẳn có thể bắt đầu với ba mươi phút đến một giờ mỗi tuần nghe và đọc có nghĩa, rồi tăng dần."
        }
      ],
      "ref": "p8"
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
          }
        ],
        "items": [
          {
            "id": "e-pie1",
            "t": "box",
            "x": 7932,
            "y": 520,
            "w": 460,
            "h": 90,
            "at": "l1:two thirds",
            "fill": "#f2d64b",
            "stroke": 4
          },
          {
            "id": "e-pie2",
            "t": "box",
            "x": 8402,
            "y": 520,
            "w": 230,
            "h": 90,
            "at": "l2:one third",
            "stroke": 4
          },
          {
            "id": "e-p1",
            "t": "text",
            "text": "2/3: có vài từ lạ",
            "x": 7952,
            "y": 630,
            "size": 42,
            "at": "l1:two thirds+200",
            "hl": [
              {
                "text": "vài từ lạ",
                "at": "l1:few"
              }
            ]
          },
          {
            "id": "e-p2",
            "t": "text",
            "text": "1/3: rất dễ, đọc nhanh",
            "x": 8342,
            "y": 690,
            "size": 38,
            "at": "l2:one third+200",
            "color": "accent",
            "hl": [
              {
                "text": "đọc nhanh",
                "at": "l2:quickly"
              }
            ]
          },
          {
            "id": "e-p3",
            "t": "text",
            "text": "→ luyện trôi chảy",
            "x": 8772,
            "y": 690,
            "size": 44,
            "at": "l2:fluency",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Split your time: about two thirds on books with a few new words.",
          "sub": "Chia thời gian: khoảng hai phần ba cho sách có vài từ lạ.",
          "keys": [
            "hai phần ba"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One third reading very easy things quickly, just for fluency. Like jogging, not sprinting.",
          "sub": "Một phần ba đọc nhanh những thứ rất dễ, để luyện trôi chảy. Như chạy bộ thư thả, không phải chạy nước rút.",
          "keys": [
            "luyện trôi chảy"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Đọc truyện dễ thế, có phí thời gian không?",
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
          "say": "Easy stories? Isn't that a waste of time?",
          "sub": "Truyện dễ thế, có phí thời gian không?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Ba · Báo khó",
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
                  "enter": "pop",
                  "at": "l2",
                  "pose": "cross"
                }
              ],
              "props": [
                "newspaper",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
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
            "at": "l2:Dũng",
            "caption": "Thứ Ba 12:00 · giờ nghỉ trưa",
            "icon": "newspaper"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Chỉ bài báo khó",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l3:hard",
            "color": "muted"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "→ vài đoạn mỗi tuần",
            "x": 100,
            "y": 1340,
            "size": 48,
            "at": "l4:paragraphs",
            "color": "coral",
            "hl": [
              {
                "text": "vài đoạn",
                "at": "l4:paragraphs"
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
          "say": "Stop four, Tuesday lunch break.",
          "sub": "Chặng bốn, giờ nghỉ trưa thứ Ba."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, Lan's friend from the reading club. He just started an office job.",
          "sub": "Đây là Dũng, bạn của Lan ở câu lạc bộ đọc. Dũng mới đi làm văn phòng.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Kids' stories? No thanks. Real learners read hard articles.",
          "sub": "Truyện trẻ con á? Thôi. Người học thật phải đọc báo khó.",
          "pose": "cross"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "His result: a few paragraphs a week. Slow as a buffalo in deep mud.",
          "sub": "Kết quả: mỗi tuần vài đoạn. Chậm như trâu sa lầy.",
          "keys": [
            "vài đoạn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Ba 12:30 · bàn làm việc",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đọc truyện dễ là phí thời gian",
          "why": "Sách dễ cho gặp lại từ vừa học rất nhiều lần, trong những câu khác nhau.",
          "rule": "Đọc dễ mà đọc nhiều, từ cũ mới quay lại"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Easy books are a waste of time. Only hard texts teach you words.",
          "sub": "Sách dễ là phí thời gian. Chỉ sách khó mới dạy được từ.",
          "pose": "cross",
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
          "say": "Easy books let you meet new words again and again, in different sentences. That's how they stick.",
          "sub": "Sách dễ cho gặp lại từ vừa học nhiều lần, trong những câu khác nhau. Thế mới nhớ lâu.",
          "keys": [
            "gặp lại"
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
          "say": "Fine. One graded reader a week. Let's see.",
          "sub": "Được. Mỗi tuần một cuốn truyện phân cấp. Để xem.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Now he reads far more words, and old words keep coming back.",
          "sub": "Giờ Dũng đọc nhiều chữ hơn hẳn, từ cũ quay lại liên tục.",
          "phase": "redo",
          "keys": [
            "từ cũ quay lại"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p9"
    },
    {
      "id": "s15",
      "module": "BRK-04",
      "data": {
        "title": "Một tuần của Dũng",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Bài báo khó: vài đoạn mỗi tuần",
        "right": "Một cuốn truyện mỗi tuần: từ cũ gặp lại liên tục",
        "wrongIllus": "newspaper",
        "rightIllus": "green-book"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: a few hard paragraphs a week.",
          "sub": "Trước: mỗi tuần vài đoạn báo khó."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: one easy book a week, and old words everywhere.",
          "sub": "Sau: mỗi tuần một cuốn dễ, từ cũ gặp lại khắp nơi.",
          "keys": [
            "một cuốn dễ"
          ]
        }
      ],
      "ref": "p9"
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
          }
        ],
        "items": [
          {
            "id": "f-k",
            "t": "text",
            "text": "Đọc dễ mà đọc nhiều",
            "x": 60,
            "y": 1560,
            "size": 64,
            "at": "l2:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "đọc nhiều",
                "at": "l2:lots"
              }
            ]
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "→ từ cũ quay lại đủ lần",
            "x": 100,
            "y": 1660,
            "size": 50,
            "at": "l2:enough"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: read easy, read lots, and old words come back enough times.",
          "sub": "Rút ra: đọc dễ mà đọc nhiều, từ cũ mới quay lại đủ lần.",
          "keys": [
            "đọc dễ mà đọc nhiều"
          ]
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
            "fit": "F",
            "move": "cut"
          },
          {
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "l3",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Tư · Đọc lại?",
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
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "books",
                "hot-beverage"
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
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:Thảo",
            "caption": "Thứ Tư 20:00 · quán cô Hoa",
            "icon": "books"
          },
          {
            "id": "g-th",
            "t": "text",
            "text": "Thảo: chỉ cuốn mới",
            "x": 2028,
            "y": 1255,
            "size": 50,
            "at": "l3:new",
            "color": "coral"
          },
          {
            "id": "g-th2",
            "t": "text",
            "text": "→ từ cũ ít được ôn",
            "x": 2068,
            "y": 1330,
            "size": 44,
            "at": "l5:rarely",
            "color": "muted"
          },
          {
            "id": "g-du",
            "t": "text",
            "text": "Dũng: xen đọc lại",
            "x": 2028,
            "y": 1420,
            "size": 46,
            "at": "l4:reread",
            "color": "accent"
          },
          {
            "id": "g-du2",
            "t": "text",
            "text": "→ từ cũ: nhận ra ngay",
            "x": 2068,
            "y": 1495,
            "size": 44,
            "at": "l4:spot",
            "hl": [
              {
                "text": "nhận ra ngay",
                "at": "l4:spot"
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
          "say": "Stop five, Wednesday night, back at the café.",
          "sub": "Chặng năm, tối thứ Tư, lại ở quán cà phê."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Thảo, Lan's cousin. She reads fast and loves fresh books.",
          "sub": "Còn đây là Thảo, chị họ của Lan. Đọc nhanh, mê sách mới.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Reread? Never. I finish a book, I shelve it. New book, new words!",
          "sub": "Đọc lại á? Không bao giờ. Xong cuốn nào cất cuốn đó. Sách mới, từ mới!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "I reread an old one last night. Faster, easier, and I spot my old underlined words.",
          "sub": "Tối qua tôi đọc lại một cuốn cũ. Nhanh hơn, dễ hơn, mấy từ từng gạch chân giờ nhận ra ngay.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Thảo gets many new words. But words from her last book are rarely reviewed.",
          "sub": "Thảo gặp nhiều từ mới. Nhưng từ của cuốn trước thì ít khi được ôn lại."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p12"
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
          }
        ],
        "items": [
          {
            "id": "g-r",
            "t": "text",
            "text": "Đọc lại: 5 cái lợi",
            "x": 2028,
            "y": 1570,
            "size": 46,
            "at": "l1:five",
            "hl": [
              {
                "text": "5 cái lợi",
                "at": "l1:five"
              }
            ]
          },
          {
            "id": "g-r0",
            "t": "text",
            "text": "1. dễ hơn",
            "x": 2028,
            "y": 1635,
            "size": 38,
            "at": "l1:easier"
          },
          {
            "id": "g-r1",
            "t": "text",
            "text": "2. chắc được lặp lại",
            "x": 2428,
            "y": 1635,
            "size": 38,
            "at": "l1:repetition"
          },
          {
            "id": "g-r2",
            "t": "text",
            "text": "3. dịp tự nhớ lại",
            "x": 2028,
            "y": 1697,
            "size": 38,
            "at": "l1:recall"
          },
          {
            "id": "g-r3",
            "t": "text",
            "text": "4. luyện trôi chảy",
            "x": 2428,
            "y": 1697,
            "size": 38,
            "at": "l1:fluency"
          },
          {
            "id": "g-r4",
            "t": "text",
            "text": "5. ít tốn thời gian",
            "x": 2028,
            "y": 1759,
            "size": 38,
            "at": "l1:less time"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Mới + cũ: đọc xen",
            "x": 2868,
            "y": 1785,
            "size": 46,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "đọc xen",
                "at": "l3:Mix"
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
          "say": "Rereading has five benefits: easier, certain repetition, a chance to recall, fluency, and less time.",
          "sub": "Đọc lại có năm cái lợi: dễ hơn, chắc chắn được lặp lại, có dịp tự nhớ lại, luyện trôi chảy, và tốn ít thời gian hơn.",
          "keys": [
            "năm cái lợi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "New books give two: old words in new contexts, and plenty of new words. Nation says combine both.",
          "sub": "Sách mới có hai cái lợi: từ đã học hiện lại trong ngữ cảnh khác, và nhiều từ mới. Nation khuyên kết hợp cả hai."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: new books bring new words, old books keep old words. Mix them.",
          "sub": "Rút ra: sách mới cho từ mới, sách cũ giữ từ cũ, nên đọc xen cả hai.",
          "keys": [
            "đọc xen cả hai"
          ]
        }
      ],
      "ref": "p11,p13"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Năm · Đọc hẹp",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six",
            "hl": [
              {
                "text": "Đọc hẹp",
                "at": "l3:narrow"
              }
            ]
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
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "books",
                "detective"
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
            "at": "l1:detective",
            "caption": "Thứ Năm 21:00 · phòng ký túc",
            "icon": "detective"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Một chủ đề, nhiều cuốn",
            "x": 3996,
            "y": 1255,
            "size": 52,
            "at": "l3:topic",
            "color": "accent"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "• ít từ khác nhau hơn",
            "x": 3996,
            "y": 1340,
            "size": 46,
            "at": "l4:fewer"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "• có kiến thức nền",
            "x": 3996,
            "y": 1410,
            "size": 46,
            "at": "l4:background"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "• đoán nghĩa dễ hơn",
            "x": 3996,
            "y": 1480,
            "size": 46,
            "at": "l4:guessing",
            "hl": [
              {
                "text": "đoán nghĩa",
                "at": "l4:guessing"
              }
            ]
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Trên ~6.000–7.000 từ: đọc rộng",
            "x": 3996,
            "y": 1780,
            "size": 44,
            "at": "l5:wide",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, Thursday. Lan is hooked on detective stories. Three in a row!",
          "sub": "Chặng sáu, thứ Năm. Lan mê truyện trinh thám. Ba cuốn liền!"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Clue, suspect, alibi. They're in every book. I don't even need my dictionary now.",
          "sub": "Clue, suspect, alibi. Cuốn nào cũng có. Giờ khỏi cần từ điển luôn.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nation calls this narrow reading: staying inside one topic, like following one story through many articles.",
          "sub": "Nation gọi đây là đọc hẹp: đọc trong một chủ đề, như theo một câu chuyện qua nhiều bài báo.",
          "keys": [
            "đọc hẹp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fewer different words, more background knowledge, and easier guessing from context.",
          "sub": "Gặp ít từ khác nhau hơn, có thêm kiến thức nền, đoán nghĩa từ ngữ cảnh dễ hơn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Once you pass about six to seven thousand words, reading wide across topics may help more.",
          "sub": "Khi vốn từ đã vượt khoảng sáu đến bảy nghìn, đọc rộng nhiều chủ đề có thể lợi hơn."
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
            "text": "⑦ Thứ Sáu · Sang thẻ",
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
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "card-index",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:cards",
            "caption": "Thứ Sáu 22:00 · bàn học",
            "icon": "card-index"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Hầu hết từ: đáng học",
            "x": 5964,
            "y": 1255,
            "size": 50,
            "at": "l3:worth",
            "hl": [
              {
                "text": "đáng học",
                "at": "l3:worth"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "cry = khóc · cry = kêu to",
            "x": 5964,
            "y": 1340,
            "size": 50,
            "at": "l4:cry",
            "color": "accent",
            "hl": [
              {
                "text": "kêu to",
                "at": "l4:shout"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "→ nhiều ngữ cảnh: hiểu sâu",
            "x": 5964,
            "y": 1420,
            "size": 40,
            "at": "l4:deeper"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, Friday night. Books become cards.",
          "sub": "Chặng bảy, tối thứ Sáu. Đến lúc biến sách thành thẻ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "This word appeared only once. Is it still worth a card?",
          "sub": "Từ này chỉ xuất hiện một lần. Có đáng làm thẻ không nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In graded readers, almost every word is worth learning, even unrepeated ones. They were chosen for that level.",
          "sub": "Trong sách phân cấp, hầu như từ nào cũng đáng học, kể cả khi không lặp lại, vì từ đã được chọn cho từng cấp.",
          "keys": [
            "hầu như từ nào cũng đáng học"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One word, many contexts: cry can mean weep, or shout. Deeper meaning.",
          "sub": "Gặp một từ ở nhiều dạng, nhiều ngữ cảnh giúp hiểu sâu hơn: cry là khóc, mà cũng là kêu to."
        }
      ],
      "ref": "p15"
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
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1530,
            "w": 44,
            "h": 44,
            "at": "l1:Day one",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1512,
            "size": 56,
            "at": "l1:Day one+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Thử 1 trang: ≤ 2/100",
            "x": 6029,
            "y": 1522,
            "size": 40,
            "at": "l1:Day one+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1602,
            "w": 44,
            "h": 44,
            "at": "l2:chapter",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1584,
            "size": 56,
            "at": "l2:chapter+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "1 chương/ngày, gạch nhẹ",
            "x": 6029,
            "y": 1594,
            "size": 40,
            "at": "l2:chapter+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1674,
            "w": 44,
            "h": 44,
            "at": "l3:end",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1656,
            "size": 56,
            "at": "l3:end+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Vài từ → thẻ + câu",
            "x": 6029,
            "y": 1666,
            "size": 40,
            "at": "l3:end+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1746,
            "w": 44,
            "h": 44,
            "at": "l4:weekend",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1728,
            "size": 56,
            "at": "l4:weekend+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Cuối tuần: ôn, đọc lại",
            "x": 6029,
            "y": 1738,
            "size": 40,
            "at": "l4:weekend+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Day one: test one page. No more than two unknown words per hundred?",
          "sub": "Ngày đầu: đọc thử một trang. Không quá hai từ lạ trên trăm chữ chứ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each day, one chapter. Underline lightly, don't stop to look up. Guess from context.",
          "sub": "Mỗi ngày một chương. Gạch chân nhẹ từ lạ, đừng dừng lại tra ngay, cố đoán theo ngữ cảnh.",
          "keys": [
            "đừng dừng lại tra ngay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "At the end of each chapter, a few frequent or key words go onto cards, with the book's sentence.",
          "sub": "Cuối mỗi chương, chọn vài từ gặp nhiều hoặc cần cho câu chuyện, chép ra thẻ kèm câu trong sách."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "On the weekend, review that pack spaced out, and skim a favourite chapter again.",
          "sub": "Cuối tuần, ôn xấp thẻ ấy theo lịch giãn cách, và đọc lướt lại một chương yêu thích."
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s23",
      "module": "BRK-10",
      "data": {
        "quote": "Sách cho từ ngữ cảnh, thẻ giữ từ lâu, hai việc nối vào nhau",
        "mark": "nối vào nhau",
        "by": "Rút ra cho Lan",
        "illus": "open-book"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Books give context. Cards keep words.",
          "sub": "Sách cho từ ngữ cảnh, thẻ giữ từ lâu.",
          "keys": [
            "thẻ giữ từ lâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Join the two.",
          "sub": "Nối hai việc vào nhau."
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s24",
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
            "text": "Thứ Bảy sau · 19:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:shelf"
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
                  "id": "lan",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "green-book",
                "books"
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
            "at": "l1:shelf",
            "caption": "Thứ Bảy sau 19:00 · cùng kệ sách",
            "icon": "green-book"
          },
          {
            "id": "j-bk",
            "t": "illus",
            "name": "green-book",
            "x": 7932,
            "y": 1240,
            "size": 130,
            "at": "l2:finished"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Cuốn 400 từ: xong ✓",
            "x": 8092,
            "y": 1265,
            "size": 50,
            "at": "l2:finished",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Cấp 2: 1 từ lạ/5 dòng",
            "x": 7932,
            "y": 1410,
            "size": 48,
            "at": "l3:five lines",
            "hl": [
              {
                "text": "1 từ lạ/5 dòng",
                "at": "l3:one"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Trăm hay không bằng tay quen”",
            "x": 7932,
            "y": 1540,
            "size": 48,
            "at": "l5:hand",
            "color": "accent",
            "hl": [
              {
                "text": "tay quen",
                "at": "l5:familiar"
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
          "say": "Next Saturday, seven p.m. Same shelf, same Lan.",
          "sub": "Thứ Bảy tuần sau, bảy giờ tối. Vẫn kệ sách ấy, quán ấy, Lan ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Finished! And the words from my cards were all over the story.",
          "sub": "Xong rồi! Mấy từ trên thẻ của con hiện khắp câu chuyện.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Then try level two. Count first: about one new word every five lines?",
          "sub": "Vậy thử cấp hai. Đếm trước đã: khoảng một từ lạ mỗi năm dòng chứ?",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The thin book comes home. The words came alive.",
          "sub": "Cuốn sách mỏng về lại kệ. Còn những từ thì đã sống dậy.",
          "keys": [
            "sống dậy"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A hundred tricks lose to a familiar hand. Familiar words come from meeting them again.",
          "sub": "“Trăm hay không bằng tay quen.” Từ quen là từ được gặp lại nhiều lần.",
          "keys": [
            "gặp lại nhiều lần"
          ]
        }
      ],
      "ref": "p5,p18"
    },
    {
      "id": "s25",
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
            "at": "l1:level",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:week",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:cards",
            "fit": "I",
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
            "x": 6664,
            "y": 170,
            "at": "l1:level"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 170,
            "at": "l2:week"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6664,
            "y": 1260,
            "at": "l3:cards"
          },
          {
            "id": "j-do",
            "t": "text",
            "text": "Làm ngay: đếm từ lạ",
            "x": 7932,
            "y": 1650,
            "size": 50,
            "at": "l4:Try",
            "hl": [
              {
                "text": "đếm từ lạ",
                "at": "l4:count"
              }
            ]
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi tự học; số liệu theo Paul Nation (2014). Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l5:end",
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
          "say": "So: choose a level with no more than two unknown words per hundred.",
          "sub": "Tóm lại: chọn cấp không quá hai từ lạ trên trăm chữ.",
          "keys": [
            "hai từ lạ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read about a book a week, and mix new books with rereading.",
          "sub": "Đọc khoảng một cuốn mỗi tuần, xen sách mới với đọc lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Try narrow reading, and copy good words onto cards with their sentence.",
          "sub": "Thử đọc hẹp, và chép từ đáng học ra thẻ kèm câu trong sách.",
          "keys": [
            "kèm câu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Try now: find a level one or two reader, read one page, and count the unknown words.",
          "sub": "Làm ngay: tìm một cuốn cấp một hoặc hai, đọc thử một trang và đếm số từ lạ.",
          "keys": [
            "đếm số từ lạ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next up: how to use new words fluently.",
          "sub": "Bài tiếp: biết nghĩa rồi mà nói không ra, luyện dùng từ trôi chảy thế nào."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p18,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "Lan underlines several words in every line of her book, what should she do?",
        "options": [
          "Buy an even harder book so that she learns more words faster",
          "Keep going with the same book and look up every word she meets",
          "Move down a level or two until unknown words become much rarer"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "blue-book",
        "why": "Cuốn sách quá khó so với mức không quá 2 từ lạ trên 100 chữ. Lan nên xuống một hai cấp tới khi chỉ còn khoảng một từ lạ mỗi năm dòng."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Lan underlines several words in every line of her book, what should she do?",
          "sub": "Lan gạch chân vài từ ở mọi dòng trong sách, Lan nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Move down a level or two until unknown words become much rarer.",
          "sub": "Xuống một hai cấp, tới khi chỉ còn khoảng một từ lạ mỗi năm dòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Then she can finish the story and guess new words.",
          "sub": "Khi đó Lan đọc trọn truyện và đoán được nghĩa từ lạ."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[11]"
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
          "say": "One thin book, one page. Then try the forty questions below.",
          "sub": "Một cuốn mỏng, một trang. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT TUẦN ĐỌC của Lan (Thứ Bảy 19:00 quán cà phê sách cô Hoa → 19:10 kệ sách phân cấp → 19:30 sách quá khó → Chủ nhật/thứ Hai một chương mỗi ngày → Thứ Ba Dũng “Khoan đã!” sách dễ phí thời gian → Thứ Tư Thảo chỉ đọc mới vs Dũng đọc lại → Thứ Năm đọc hẹp truyện trinh thám → Thứ Sáu từ sách sang thẻ → Thứ Bảy sau 19:00 khép vòng ở kệ sách). Hook HOOK-23 (đồ vật kể chuyện): cuốn cấp 1 mỏng 400 từ, trở lại ở kết. Nhân vật: Lan, Cô Hoa, Dũng, Thảo — w145/_series/beginner-vocabulary-learners.md. Cảnh ngắt nhịp: BRK-08 (một tuần), BRK-03 (2 từ lạ/100 chữ), BRK-07 (rehook), BRK-04 (trước–sau của Dũng), BRK-10 (rút ra). Tục ngữ: “Trăm hay không bằng tay quen”. Câu đố questions[11].",
  "loop": {
    "open": "s01",
    "close": "s24"
  }
};
