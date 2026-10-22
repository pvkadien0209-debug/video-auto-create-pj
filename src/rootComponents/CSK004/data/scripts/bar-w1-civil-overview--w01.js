// bar-w1-civil-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-w1-civil-overview--w01",
  "unit": {
    "audience": "bar-exam-written1-civil",
    "slug": "bar-w1-civil-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Câu dân sự trong bài viết 1 kiểm tra những kỹ năng nào?",
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
          }
        ],
        "items": [
          {
            "id": "a-5",
            "t": "text",
            "text": "5 việc nối nhau",
            "x": 60,
            "y": 110,
            "size": 130,
            "at": "l1:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 việc",
                "at": "l1:five linked"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "= câu dân sự, bài viết 1",
            "x": 70,
            "y": 300,
            "size": 54,
            "at": "l1:civil question"
          },
          {
            "id": "a-k1",
            "t": "text",
            "text": "quan hệ · toà · chứng cứ",
            "x": 70,
            "y": 390,
            "size": 48,
            "at": "l2:parties",
            "color": "muted"
          },
          {
            "id": "a-k2",
            "t": "text",
            "text": "bảo vệ · đồng hồ",
            "x": 70,
            "y": 455,
            "size": 48,
            "at": "l2:defence",
            "color": "muted"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Hay trượt: toà cũ, đề nghị suông",
            "x": 70,
            "y": 560,
            "size": 46,
            "at": "l3:slip",
            "color": "coral",
            "hl": [
              {
                "text": "toà cũ",
                "at": "l3:old court"
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
          "say": "The civil question in written paper one tests five linked jobs. That's the answer, served first.",
          "sub": "Câu dân sự trong bài viết 1 kiểm tra năm việc nối nhau. Đáp án đây, dọn ra trước.",
          "keys": [
            "năm việc nối nhau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Parties, court and time limit, evidence, the defence, and writing against the clock.",
          "sub": "Quan hệ và đương sự, toà và thời hiệu, chứng cứ, hướng bảo vệ, và viết kịp đồng hồ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sounds simple. Yet people slip on old court names, vague requests, and that clock.",
          "sub": "Nghe đơn giản. Vậy mà vẫn trượt chân ở tên toà cũ, lời đề nghị mơ hồ, và cái đồng hồ.",
          "keys": [
            "tên toà cũ"
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
            "y": 110,
            "w": 800,
            "data": {
              "set": "meeting",
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
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "alarm-clock",
                "books"
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
            "caption": "8:00 thứ Bảy · thi thử",
            "icon": "alarm-clock"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nói có sách, mách có chứng”",
            "x": 60,
            "y": 650,
            "size": 54,
            "at": "l5:books",
            "color": "accent",
            "hl": [
              {
                "text": "có sách",
                "at": "l5:books"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Theo bài học: Thông tư 10/2021/TT-BTP · Giáo trình kỹ năng dân sự, Học viện Tư pháp · BLDS 2015 · BLTTDS 2015 sửa bởi Luật 85/2025/QH15",
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
          "say": "Meet Thảo, a trainee lawyer at Cô Hoa's law office.",
          "sub": "Đây là Thảo, luật sư tập sự ở văn phòng luật của Cô Hoa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Saturday, eight a.m. Cô Hoa, her supervising lawyer, runs a mock exam. Timer on the table.",
          "sub": "Tám giờ sáng thứ Bảy. Cô Hoa, luật sư hướng dẫn, cho thi thử. Đồng hồ đặt trên bàn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Half a page of facts. Every answer needs the article and the clause!",
          "sub": "Đề nửa trang. Câu nào cũng phải có điều mấy, khoản mấy!",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I brought every code. What could go wrong?",
          "sub": "Em mang đủ bộ luật rồi. Còn sợ gì nữa ạ?",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "As they say: speak with books, accuse with proof. Thảo has the books. The road?",
          "sub": "Ông bà dặn: “Nói có sách, mách có chứng.” Sách thì Thảo có. Còn đường đi?",
          "keys": [
            "Nói có sách, mách có chứng"
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
            "text": "Bài viết 1 chấm thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:paper",
            "hl": [
              {
                "text": "chấm thế nào",
                "at": "l1:exactly"
              }
            ]
          },
          {
            "id": "b-i1",
            "t": "illus",
            "name": "stopwatch",
            "x": 2028,
            "y": 160,
            "size": 90,
            "at": "l2:skills"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Bài 1 · kỹ năng: 180 phút",
            "x": 2138,
            "y": 165,
            "size": 58,
            "at": "l2:skills",
            "color": "accent",
            "hl": [
              {
                "text": "180 phút",
                "at": "l2:hundred and eighty"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Bài 2 · đạo đức nghề: 90 phút",
            "x": 2138,
            "y": 255,
            "size": 50,
            "at": "l3:ethics"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Thang 100 · hai người chấm độc lập",
            "x": 2028,
            "y": 360,
            "size": 50,
            "at": "l4:hundred"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Đạt: mỗi bài từ 50 điểm",
            "x": 2028,
            "y": 445,
            "size": 58,
            "at": "l4:fifty",
            "color": "accent",
            "hl": [
              {
                "text": "mỗi bài",
                "at": "l4:each paper"
              }
            ]
          },
          {
            "id": "b-i2",
            "t": "illus",
            "name": "books",
            "x": 3048,
            "y": 150,
            "size": 110,
            "at": "l5:bring"
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "Bài kỹ năng: được mang",
            "x": 3018,
            "y": 280,
            "size": 46,
            "at": "l5:bring"
          },
          {
            "id": "b-6",
            "t": "text",
            "text": "văn bản luật vào phòng",
            "x": 3018,
            "y": 340,
            "size": 46,
            "at": "l5:room",
            "hl": [
              {
                "text": "văn bản luật",
                "at": "l5:legal documents"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Thông tư 10/2021/TT-BTP (10/12/2021): điểm a khoản 2 Điều 17 · khoản 2 Điều 23 · Điều 25",
            "x": 2028,
            "y": 730,
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
          "say": "First, what is this paper, exactly?",
          "sub": "Trước hết, bài viết 1 rốt cuộc là gì?",
          "keys": [
            "bài viết 1"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Circular ten of twenty twenty-one sets two written papers. Paper one, on skills: one hundred and eighty minutes.",
          "sub": "Thông tư 10/2021 quy định hai bài viết. Bài một về kỹ năng: 180 phút.",
          "keys": [
            "180 phút"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Paper two, on the law on lawyers and professional ethics: ninety minutes.",
          "sub": "Bài hai, về pháp luật luật sư và đạo đức nghề nghiệp: 90 phút."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each is marked out of a hundred by two independent markers. You pass with fifty on each paper.",
          "sub": "Mỗi bài chấm thang 100, hai người chấm độc lập. Đạt khi mỗi bài từ 50 điểm.",
          "keys": [
            "mỗi bài từ 50 điểm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And for the skills paper, you may bring legal documents into the room.",
          "sub": "Và bài kỹ năng được mang văn bản quy phạm pháp luật vào phòng.",
          "keys": [
            "văn bản quy phạm pháp luật"
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
            "id": "b-m",
            "t": "text",
            "text": "Mang luật rồi → khỏi ôn",
            "x": 2028,
            "y": 540,
            "size": 52,
            "at": "l1:no need",
            "color": "muted"
          },
          {
            "id": "b-mx",
            "t": "strike",
            "over": "b-m",
            "at": "l1:wrong"
          },
          {
            "id": "b-flip",
            "t": "text",
            "text": "→ hết giờ vì lật sách",
            "x": 2668,
            "y": 545,
            "size": 48,
            "at": "l2:flipping",
            "color": "coral",
            "hl": [
              {
                "text": "lật sách",
                "at": "l2:flipping"
              }
            ]
          },
          {
            "id": "b-road",
            "t": "text",
            "text": "Luật trong túi, đường đi trong đầu",
            "x": 2028,
            "y": 625,
            "size": 62,
            "at": "l3:road",
            "color": "accent",
            "hl": [
              {
                "text": "đường đi trong đầu",
                "at": "l3:head"
              }
            ]
          },
          {
            "id": "b-old",
            "t": "text",
            "text": "Dạng đề tuỳ kỳ → xem đề cũ",
            "x": 3018,
            "y": 440,
            "size": 38,
            "at": "l4:past papers",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So codes allowed means no need to study? Tempting. And wrong.",
          "sub": "Vậy được mang luật thì khỏi ôn? Nghe bùi tai. Mà sai.",
          "keys": [
            "khỏi ôn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Those minutes cover several skill parts. Don't know where an article lives? They vanish in page flipping.",
          "sub": "Từng ấy phút chia cho nhiều phần kỹ năng. Không biết điều nào nằm đâu thì thời gian trôi theo trang lật.",
          "keys": [
            "trang lật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Law in the bag, the road in your head.",
          "sub": "Luật trong túi, đường đi trong đầu.",
          "keys": [
            "đường đi trong đầu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Question type and marks vary by sitting, so study past papers.",
          "sub": "Dạng đề, số điểm tuỳ từng kỳ: hãy xem đề cũ.",
          "keys": [
            "xem đề cũ"
          ]
        }
      ],
      "ref": "p2,p4,p5"
    },
    {
      "id": "s04",
      "module": "BRK-09",
      "data": {
        "kind": "Lưu ý",
        "title": "Luật Luật sư đang được sửa",
        "detail": "Kỳ họp Quốc hội 17/10 – 21/11/2026",
        "illus": "classical-building",
        "around": [
          "scroll",
          "spiral-calendar"
        ],
        "icon": "calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "And the Law on Lawyers is being amended.",
          "sub": "Và Luật Luật sư, nền của Thông tư, đang được sửa đổi.",
          "keys": [
            "đang được sửa đổi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Session ends November twenty-first. Check the rules in force.",
          "sub": "Kỳ họp đến 21/11/2026. Hãy đối chiếu văn bản đang có hiệu lực."
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s05",
      "module": "BRK-08",
      "data": {
        "title": "Năm bước, một buổi sáng",
        "current": 0,
        "points": [
          {
            "label": "Bước 1",
            "sub": "Quan hệ, đương sự",
            "illus": "busts-in-silhouette"
          },
          {
            "label": "Bước 2",
            "sub": "Toà, thời hiệu",
            "illus": "classical-building"
          },
          {
            "label": "Bước 3",
            "sub": "Chứng cứ",
            "illus": "magnifying-glass-tilted-left"
          },
          {
            "label": "Bước 4",
            "sub": "Hướng bảo vệ",
            "illus": "balance-scale"
          },
          {
            "label": "Bước 5",
            "sub": "Đồng hồ",
            "illus": "stopwatch"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Five steps, in exam order: who, which court, what proof.",
          "sub": "Năm bước, đúng thứ tự làm bài: ai với ai, toà nào, chứng cứ gì.",
          "keys": [
            "đúng thứ tự làm bài"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Then the defence, and the clock.",
          "sub": "Rồi hướng bảo vệ, và đồng hồ."
        }
      ],
      "ref": "intro,p21"
    },
    {
      "id": "s06",
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
            "text": "① 8:05 · Ai với ai?",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "pencil"
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
            "at": "l1:reads",
            "caption": "8:05 · đọc đề",
            "icon": "page-facing-up"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Đề bài = buổi gặp khách hàng",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l3:replace",
            "hl": [
              {
                "text": "buổi gặp khách hàng",
                "at": "l3:client meeting"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Trước hết: khách hàng là ai?",
            "x": 3996,
            "y": 245,
            "size": 50,
            "at": "l4:first",
            "color": "accent",
            "hl": [
              {
                "text": "Trước hết",
                "at": "l4:first"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "rồi: quan hệ · toà · thời hiệu",
            "x": 3996,
            "y": 330,
            "size": 44,
            "at": "l4:relationship",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: eight oh five. Thảo reads the facts.",
          "sub": "Chặng một: tám giờ năm phút. Thảo đọc đề."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Mr A lent Ms B money, with a handwritten note. When it fell due, she didn't pay.",
          "sub": "Ông A cho bà B vay tiền, có giấy viết tay. Đến hạn bà B không trả.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In the exam room, the facts replace the client meeting.",
          "sub": "Trong phòng thi, đề bài thay cho buổi gặp khách hàng.",
          "keys": [
            "buổi gặp khách hàng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The Judicial Academy textbook: first, your client's standing. Then relationship, court, time limit.",
          "sub": "Giáo trình Học viện Tư pháp: trước hết là tư cách khách hàng; rồi quan hệ, toà, thời hiệu.",
          "keys": [
            "trước hết"
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
            "id": "c-68",
            "t": "text",
            "text": "Điều 68 BLTTDS · đương sự:",
            "x": 3996,
            "y": 440,
            "size": 48,
            "at": "l1:sixty-eight",
            "hl": [
              {
                "text": "Điều 68",
                "at": "l1:sixty-eight"
              }
            ]
          },
          {
            "id": "c-p1",
            "t": "text",
            "text": "Nguyên đơn: ai kiện",
            "x": 4016,
            "y": 510,
            "size": 46,
            "at": "l2:who sues"
          },
          {
            "id": "c-p2",
            "t": "text",
            "text": "Bị đơn: ai bị kiện",
            "x": 4016,
            "y": 570,
            "size": 46,
            "at": "l2:who is sued"
          },
          {
            "id": "c-p3",
            "t": "text",
            "text": "Người liên quan: bản án chạm tới",
            "x": 4016,
            "y": 630,
            "size": 46,
            "at": "l2:judgment",
            "color": "coral",
            "hl": [
              {
                "text": "chạm tới",
                "at": "l2:hit"
              }
            ]
          },
          {
            "id": "c-ans",
            "t": "text",
            "text": "Vay tài sản · A kiện B",
            "x": 4836,
            "y": 690,
            "size": 52,
            "at": "l3:loan",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Article sixty-eight of the procedure code. Parties: plaintiff, defendant, and persons with related rights and obligations.",
          "sub": "Điều 68 Bộ luật Tố tụng dân sự: đương sự gồm nguyên đơn, bị đơn, người có quyền lợi, nghĩa vụ liên quan.",
          "keys": [
            "Điều 68"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So underline three groups: who sues, who is sued, and who stays quiet but could be hit by the judgment.",
          "sub": "Vậy gạch chân ba nhóm: ai kiện, ai bị kiện, và ai không kiện nhưng bản án có thể chạm tới.",
          "keys": [
            "gạch chân ba nhóm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo writes: a dispute over a loan contract. Plaintiff, Mr A. Defendant, Ms B. Step one, done.",
          "sub": "Thảo ghi: tranh chấp hợp đồng vay tài sản. Nguyên đơn ông A, bị đơn bà B. Xong bước một.",
          "keys": [
            "tranh chấp hợp đồng vay tài sản"
          ]
        }
      ],
      "ref": "p7,p19"
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
            "at": "l3:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 8:30 · Toà nào?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
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
                  "at": "l2",
                  "pose": "think"
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
            "at": "l1:court",
            "caption": "8:30 · bàn bên cạnh",
            "icon": "classical-building"
          },
          {
            "id": "d-old",
            "t": "text",
            "text": "Bài giải mẫu cũ trong túi",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l3:old model",
            "color": "muted"
          },
          {
            "id": "d-i",
            "t": "illus",
            "name": "scroll",
            "x": 5964,
            "y": 250,
            "size": 90,
            "at": "l3:old model+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: eight thirty. Which court?",
          "sub": "Chặng hai: tám giờ rưỡi. Toà nào giải quyết?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Dũng, Thảo's study buddy, sitting the same mock exam at the next desk.",
          "sub": "Còn đây là Dũng, bạn cùng nhóm ôn của Thảo, thi thử ngay bàn bên."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Easy. My old model answer has this exact case.",
          "sub": "Dễ. Bài giải mẫu cũ của em có đúng dạng này.",
          "face": "happy"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "8:35 · chép bài giải mẫu",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "dung",
            "side": "right",
            "pose": "think"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“Toà án nhân dân quận nơi bị đơn cư trú”",
          "why": "Bài giải mẫu soạn trước sửa đổi 2025; Điều 35 bản mới đã ghi Toà án nhân dân khu vực.",
          "rule": "Bài giải mẫu có thể cũ, điều luật phải mới"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "District people's court where the defendant lives. Copied, done!",
          "sub": "Toà án nhân dân quận nơi bị đơn cư trú. Chép xong!",
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
          "who": "dung",
          "say": "Psst. Thảo. Do districts even have courts now?",
          "sub": "Ê Thảo. Bây giờ quận còn toà không?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Open the new code, not the old answer.",
          "sub": "Tua lại! Mở bộ luật bản mới, đừng mở bài giải cũ.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Article thirty-five, amended. It says regional people's court.",
          "sub": "Điều 35, bản sửa đổi. Ghi Toà án nhân dân khu vực.",
          "phase": "redo",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. A model answer can be old. The article must be new.",
          "sub": "Đúng. Bài giải mẫu có thể cũ, điều luật phải mới.",
          "phase": "redo",
          "keys": [
            "điều luật phải mới"
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
      "id": "s10",
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
            "id": "d-85",
            "t": "text",
            "text": "Luật 85/2025/QH15",
            "x": 5964,
            "y": 380,
            "size": 52,
            "at": "l1:eighty-five",
            "hl": [
              {
                "text": "85/2025",
                "at": "l1:eighty-five"
              }
            ]
          },
          {
            "id": "d-85b",
            "t": "text",
            "text": "thông qua 25/6/2025 · hiệu lực 01/7/2025",
            "x": 5964,
            "y": 450,
            "size": 38,
            "at": "l1:July",
            "color": "muted"
          },
          {
            "id": "d-35",
            "t": "text",
            "text": "Sơ thẩm: TAND khu vực (Điều 35)",
            "x": 5964,
            "y": 520,
            "size": 52,
            "at": "l2:regional",
            "color": "accent",
            "hl": [
              {
                "text": "TAND khu vực",
                "at": "l2:regional"
              }
            ]
          },
          {
            "id": "d-26",
            "t": "text",
            "text": "Điều 26, 28, 30, 32",
            "x": 5984,
            "y": 590,
            "size": 40,
            "at": "l2:twenty-six",
            "color": "muted"
          },
          {
            "id": "d-tinh",
            "t": "text",
            "text": "Tỉnh: phúc thẩm, giám đốc thẩm…",
            "x": 5964,
            "y": 650,
            "size": 44,
            "at": "l3:appeals"
          },
          {
            "id": "d-nn",
            "t": "text",
            "text": "Có yếu tố nước ngoài: cũng vậy",
            "x": 6804,
            "y": 690,
            "size": 40,
            "at": "l4:abroad",
            "color": "coral",
            "hl": [
              {
                "text": "cũng vậy",
                "at": "l4:too"
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
          "say": "Law eighty-five of twenty twenty-five amended the procedure code, from July first that year.",
          "sub": "Luật 85/2025/QH15 sửa Bộ luật Tố tụng dân sự, có hiệu lực từ 01/7/2025.",
          "keys": [
            "01/7/2025"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Amended Article thirty-five: regional courts hear first instance disputes under Articles twenty-six, twenty-eight, thirty, thirty-two.",
          "sub": "Điều 35 sửa đổi: Toà án nhân dân khu vực giải quyết sơ thẩm tranh chấp ở Điều 26, 28, 30, 32.",
          "keys": [
            "Toà án nhân dân khu vực"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Provincial courts take appeals, cassation and reopening.",
          "sub": "Toà cấp tỉnh: phúc thẩm, giám đốc thẩm, tái thẩm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Per the Court Journal, cases with parties or assets abroad now start there too.",
          "sub": "Theo Tạp chí Toà án, vụ có đương sự hoặc tài sản ở nước ngoài nay cũng về toà khu vực.",
          "keys": [
            "cũng về toà khu vực"
          ]
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
            "text": "③ 9:00 · Còn thời hiệu không?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "spiral-calendar",
                "page-facing-up"
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
            "at": "l1:second",
            "caption": "9:00 · ngày đến hạn",
            "icon": "spiral-calendar"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Hợp đồng: 03 năm (Điều 429 BLDS)",
            "x": 7932,
            "y": 170,
            "size": 46,
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
            "id": "e-k",
            "t": "text",
            "text": "từ ngày biết / phải biết",
            "x": 7932,
            "y": 250,
            "size": 46,
            "at": "l4:knew"
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "quyền lợi bị xâm phạm",
            "x": 7932,
            "y": 315,
            "size": 46,
            "at": "l4:infringed",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Nine o'clock. The time limit, the second place people slip.",
          "sub": "Chín giờ. Vẫn bước hai: thời hiệu, chỗ thứ hai hay sót.",
          "keys": [
            "chỗ thứ hai hay sót"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The due date is in the facts. I'll note it, to count the time limit.",
          "sub": "Đề có ngày đến hạn. Em ghi lại để tính thời hiệu.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article four twenty-nine of the Civil Code: for contract disputes, three years.",
          "sub": "Điều 429 Bộ luật Dân sự 2015: tranh chấp hợp đồng, thời hiệu khởi kiện 03 năm.",
          "keys": [
            "03 năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Counted from when the claimant knew, or should have known, their rights were infringed.",
          "sub": "Tính từ ngày người có quyền yêu cầu biết hoặc phải biết quyền lợi của mình bị xâm phạm."
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-alarm",
            "t": "illus",
            "name": "alarm-clock",
            "x": 7932,
            "y": 420,
            "size": 90,
            "at": "l1:alarm"
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "Toà tự bấm chuông hết giờ",
            "x": 8042,
            "y": 430,
            "size": 48,
            "at": "l1:alarm",
            "color": "muted"
          },
          {
            "id": "e-nox",
            "t": "strike",
            "over": "e-no",
            "at": "l2:only"
          },
          {
            "id": "e-149",
            "t": "text",
            "text": "Chỉ khi có bên yêu cầu",
            "x": 7932,
            "y": 530,
            "size": 52,
            "at": "l2:only",
            "color": "accent",
            "hl": [
              {
                "text": "có bên yêu cầu",
                "at": "l2:asks"
              }
            ]
          },
          {
            "id": "e-149b",
            "t": "text",
            "text": "khoản 2 Điều 149 BLDS",
            "x": 7932,
            "y": 595,
            "size": 34,
            "at": "l2:clause",
            "color": "muted"
          },
          {
            "id": "e-sth",
            "t": "text",
            "text": "trước khi sơ thẩm ra bản án",
            "x": 7932,
            "y": 660,
            "size": 44,
            "at": "l3:before"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "But a time limit is no alarm clock that rings by itself.",
          "sub": "Nhưng thời hiệu không phải chuông báo thức tự reo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article one forty-nine, clause two: the court applies it only when a party asks.",
          "sub": "Khoản 2 Điều 149: toà chỉ áp dụng thời hiệu khi có bên yêu cầu.",
          "keys": [
            "có bên yêu cầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And asks before the first instance court rules.",
          "sub": "Và yêu cầu trước khi sơ thẩm ra bản án."
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Viết “cần thu thập chứng cứ” là đủ điểm chưa?",
        "illus": "magnifying-glass-tilted-left"
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
          "say": "Is writing “evidence must be collected” enough to earn the marks?",
          "sub": "Viết “cần thu thập chứng cứ” là đủ điểm chưa?",
          "keys": [
            "đủ điểm chưa"
          ]
        }
      ],
      "ref": "p12"
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
            "text": "④ 9:20 · Chứng cứ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:twenty"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "hold"
                }
              ],
              "props": [
                "memo",
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
            "at": "l1:step three",
            "caption": "9:20 · có gì, thiếu gì",
            "icon": "magnifying-glass-tilted-left"
          },
          {
            "id": "f-91",
            "t": "text",
            "text": "Điều 91: ai yêu cầu, chứng minh",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l3:ninety-one",
            "hl": [
              {
                "text": "chứng minh",
                "at": "l3:prove"
              }
            ]
          },
          {
            "id": "f-pd",
            "t": "text",
            "text": "Bên phản đối: văn bản + chứng cứ",
            "x": 60,
            "y": 1330,
            "size": 44,
            "at": "l4:objects"
          },
          {
            "id": "f-hq",
            "t": "text",
            "text": "Thiếu chứng cứ → chịu hậu quả",
            "x": 60,
            "y": 1400,
            "size": 44,
            "at": "l5:consequences",
            "color": "coral",
            "hl": [
              {
                "text": "chịu hậu quả",
                "at": "l5:consequences"
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
          "say": "Nine twenty. Step three: evidence.",
          "sub": "Chín giờ hai mươi. Bước ba: chứng cứ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I have the loan note and the debt reminder messages. What's missing?",
          "sub": "Có giấy vay và tin nhắn đòi nợ. Còn thiếu gì đây?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article ninety-one: whoever makes a claim must prove it.",
          "sub": "Điều 91: bên đưa ra yêu cầu phải chứng minh yêu cầu đó.",
          "keys": [
            "phải chứng minh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Whoever objects must object in writing, with evidence.",
          "sub": "Bên phản đối phải có văn bản phản đối kèm chứng cứ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Short on evidence? You bear the consequences; the court decides on the file.",
          "sub": "Thiếu chứng cứ thì chịu hậu quả, toà giải quyết theo chứng cứ đã có trong hồ sơ.",
          "keys": [
            "chịu hậu quả"
          ]
        }
      ],
      "ref": "p12,p19"
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
            "id": "f-gen",
            "t": "text",
            "text": "“Cần thu thập chứng cứ”",
            "x": 60,
            "y": 1490,
            "size": 46,
            "at": "l1:evidence",
            "color": "muted"
          },
          {
            "id": "f-genx",
            "t": "strike",
            "over": "f-gen",
            "at": "l1:stop"
          },
          {
            "id": "f-map",
            "t": "text",
            "text": "Chứng cứ nào → tình tiết nào",
            "x": 60,
            "y": 1560,
            "size": 54,
            "at": "l1:which fact",
            "color": "accent",
            "hl": [
              {
                "text": "tình tiết nào",
                "at": "l1:which fact"
              }
            ]
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "Điều 6: tự thu thập, giao nộp",
            "x": 60,
            "y": 1650,
            "size": 42,
            "at": "l2:six"
          },
          {
            "id": "f-106",
            "t": "text",
            "text": "Điều 106: nhờ toà hỏi người giữ",
            "x": 60,
            "y": 1715,
            "size": 42,
            "at": "l3:hundred and six",
            "hl": [
              {
                "text": "người giữ",
                "at": "l3:holder"
              }
            ]
          },
          {
            "id": "f-don",
            "t": "text",
            "text": "Đơn: cần chứng minh gì · chứng cứ gì · vì sao không tự lấy · tên, địa chỉ người giữ",
            "x": 60,
            "y": 1790,
            "size": 26,
            "at": "l3:holder+400",
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
          "say": "So don't stop at “collect evidence”. Say which evidence proves which fact.",
          "sub": "Đừng dừng ở “cần thu thập chứng cứ”: chứng cứ nào chứng minh tình tiết nào?",
          "keys": [
            "tình tiết nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article six: parties collect and submit evidence themselves.",
          "sub": "Điều 6: đương sự tự thu thập, giao nộp chứng cứ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Can't get it? Article one hundred and six: ask the court to order the holder to provide it.",
          "sub": "Không tự lấy được? Điều 106: đề nghị toà yêu cầu người đang giữ cung cấp.",
          "keys": [
            "người đang giữ"
          ]
        }
      ],
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
            "text": "⑤ 9:50 · Hướng bảo vệ",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Step four"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "point"
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
            "at": "l1:walks",
            "caption": "9:50 · Cô Hoa đi ngang",
            "icon": "balance-scale"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1260,
            "w": 50,
            "h": 50,
            "at": "l3:argument",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1242,
            "size": 62,
            "at": "l3:argument+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Luận điểm: quan hệ + điều luật",
            "x": 2103,
            "y": 1252,
            "size": 42,
            "at": "l3:argument+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1345,
            "w": 50,
            "h": 50,
            "at": "l3:evidence",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1327,
            "size": 62,
            "at": "l3:evidence+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Chứng cứ đỡ luận điểm",
            "x": 2103,
            "y": 1337,
            "size": 42,
            "at": "l3:evidence+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1430,
            "w": 50,
            "h": 50,
            "at": "l3:rebuttal",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1412,
            "size": 62,
            "at": "l3:rebuttal+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Phản bác lý lẽ bên kia",
            "x": 2103,
            "y": 1422,
            "size": 42,
            "at": "l3:rebuttal+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1515,
            "w": 50,
            "h": 50,
            "at": "l3:request",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1497,
            "size": 62,
            "at": "l3:request+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Đề nghị cụ thể gửi toà",
            "x": 2103,
            "y": 1507,
            "size": 42,
            "at": "l3:request+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Nine fifty. Step four, the defence. Cô Hoa walks by and peeks.",
          "sub": "Chín giờ năm mươi. Bước bốn, hướng bảo vệ. Cô Hoa đi ngang, liếc nháp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Request what, under which article? Write it like a lawyer, not a well-wisher.",
          "sub": "Đề nghị gì, theo điều nào? Viết như luật sư, đừng viết như lời chúc.",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The defence ties it together: argument, evidence, a rebuttal of the other side, and a request.",
          "sub": "Hướng bảo vệ nối các bước: luận điểm, chứng cứ đỡ, phần phản bác bên kia, và đề nghị cụ thể gửi toà.",
          "keys": [
            "đề nghị cụ thể"
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-ex",
            "t": "text",
            "text": "Hết thời hiệu + bị đơn yêu cầu",
            "x": 2028,
            "y": 1610,
            "size": 42,
            "at": "l1:defendant"
          },
          {
            "id": "g-217",
            "t": "text",
            "text": "→ đình chỉ (Điều 217)",
            "x": 2028,
            "y": 1675,
            "size": 48,
            "at": "l1:terminates",
            "color": "accent",
            "hl": [
              {
                "text": "đình chỉ",
                "at": "l1:terminates"
              }
            ]
          },
          {
            "id": "g-vague",
            "t": "text",
            "text": "Đề nghị mơ hồ → điểm mơ hồ",
            "x": 2868,
            "y": 1780,
            "size": 46,
            "at": "l3:vague",
            "color": "coral",
            "hl": [
              {
                "text": "điểm mơ hồ",
                "at": "l3:vague marks"
              }
            ]
          },
          {
            "id": "g-truc",
            "t": "text",
            "text": "Khởi kiện → chứng cứ → sơ thẩm",
            "x": 2028,
            "y": 1760,
            "size": 44,
            "at": "l2:filing",
            "hl": [
              {
                "text": "sơ thẩm",
                "at": "l2:first instance"
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
          "say": "Client is the defendant, time ran out, request made in time? The court terminates the case, Article two seventeen.",
          "sub": "Khách là bị đơn, thời hiệu đã hết, có yêu cầu đúng lúc: toà đình chỉ theo điểm e khoản 1 Điều 217.",
          "keys": [
            "đình chỉ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The textbook follows procedure: filing, evidence, first instance, appeal. Write along that same line.",
          "sub": "Giáo trình đi theo tố tụng: khởi kiện, chứng cứ, sơ thẩm, phúc thẩm. Bài làm đi cùng trục ấy.",
          "keys": [
            "cùng trục"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the request must be concrete. Vague request, vague marks.",
          "sub": "Và đề nghị phải cụ thể. Đề nghị mơ hồ thì điểm cũng mơ hồ.",
          "keys": [
            "điểm cũng mơ hồ"
          ]
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s18",
      "module": "BRK-04",
      "data": {
        "title": "Câu đề nghị",
        "wrong": "Xem xét giải quyết theo đúng pháp luật",
        "right": "Áp dụng thời hiệu, đình chỉ vụ án (Điều 217)",
        "wrongIllus": "thinking-face",
        "rightIllus": "balance-scale",
        "labels": [
          "Trước",
          "Sau"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: just decide by law.",
          "sub": "Trước: “Xem xét theo đúng pháp luật.” Rỗng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: apply time limit, terminate.",
          "sub": "Sau: áp dụng thời hiệu, đình chỉ vụ án.",
          "keys": [
            "đình chỉ"
          ]
        }
      ],
      "ref": "p16,p17"
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
            "text": "⑥ 10:30 · Một trang nháp",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:ten thirty",
            "hl": [
              {
                "text": "Một trang nháp",
                "at": "l1:one draft page"
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
              "set": "meeting",
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
                "pencil"
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
            "at": "l1:draft",
            "caption": "10:30 · soát nháp",
            "icon": "memo"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "1 · Vay tài sản: A kiện B",
            "x": 3996,
            "y": 1255,
            "size": 42,
            "at": "l3:one"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "2 · Toà khu vực nơi B ở",
            "x": 3996,
            "y": 1320,
            "size": 42,
            "at": "l3:two"
          },
          {
            "id": "h-2b",
            "t": "text",
            "text": "Điều 35 + điểm a khoản 1 Điều 39 · ngày đến hạn (Điều 429)",
            "x": 4026,
            "y": 1380,
            "size": 26,
            "at": "l3:thirty-nine",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "3 · Giấy vay, tin nhắn, chỗ thiếu",
            "x": 3996,
            "y": 1430,
            "size": 42,
            "at": "l4:three"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "4 · Luận điểm + đề nghị",
            "x": 3996,
            "y": 1495,
            "size": 42,
            "at": "l4:four"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "5 · Soát từng số điều",
            "x": 3996,
            "y": 1560,
            "size": 42,
            "at": "l4:Five",
            "color": "accent",
            "hl": [
              {
                "text": "số điều",
                "at": "l4:article"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Năm bước trên một trang nháp",
            "x": 3996,
            "y": 1710,
            "size": 58,
            "at": "l6:five steps",
            "color": "accent",
            "hl": [
              {
                "text": "một trang nháp",
                "at": "l6:one draft page"
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
          "say": "Ten thirty. Thảo checks one draft page.",
          "sub": "Mười giờ rưỡi. Thảo soát lại một trang nháp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Five steps, one line each. Let me read it back.",
          "sub": "Năm bước, mỗi bước một dòng. Đọc lại nào.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: loan, A against B. Two: regional court where B lives, Articles thirty-five and thirty-nine, plus the due date.",
          "sub": "Một: vay tài sản, A kiện B. Hai: toà khu vực nơi B cư trú, Điều 35 và điểm a khoản 1 Điều 39; cộng ngày đến hạn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: note, messages, gaps marked. Four: argument and request. Five: check every article number.",
          "sub": "Ba: giấy vay, tin nhắn, đánh dấu chỗ thiếu. Bốn: luận điểm và đề nghị. Năm: soát từng số điều.",
          "keys": [
            "soát từng số điều"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Five steps on one draft page. No marking point left behind.",
          "sub": "Năm bước trên một trang nháp, không sót chỗ chấm điểm.",
          "keys": [
            "không sót chỗ chấm điểm"
          ]
        }
      ],
      "ref": "p19,p20"
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
            "text": "⑦ 10:50 · Đồng hồ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "shrug",
                  "face": "worried"
                }
              ],
              "props": [
                "alarm-clock"
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
            "at": "l1:next desk",
            "caption": "10:50 · bàn bên",
            "icon": "alarm-clock"
          },
          {
            "id": "i-180",
            "t": "text",
            "text": "180 phút cho cả bài kỹ năng",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l3:whole",
            "hl": [
              {
                "text": "cả bài kỹ năng",
                "at": "l3:whole skills paper"
              }
            ]
          },
          {
            "id": "i-est",
            "t": "text",
            "text": "→ ước giờ phần dân sự trước",
            "x": 5964,
            "y": 1340,
            "size": 42,
            "at": "l3:estimate",
            "color": "accent"
          },
          {
            "id": "i-loop",
            "t": "text",
            "text": "Dàn ý · tự chấm · ghi lỗi",
            "x": 5964,
            "y": 1430,
            "size": 44,
            "at": "l3:estimate+900"
          },
          {
            "id": "i-not",
            "t": "text",
            "text": "Kinh nghiệm chung, không phải quy định",
            "x": 5964,
            "y": 1520,
            "size": 40,
            "at": "l5:not a rule",
            "color": "coral",
            "hl": [
              {
                "text": "không phải quy định",
                "at": "l5:not a rule"
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
          "say": "Ten fifty. Meanwhile, at the next desk...",
          "sub": "Mười giờ năm mươi. Trong khi đó, ở bàn bên..."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Ten minutes left and I'm still on step two!",
          "sub": "Còn mười phút mà tôi vẫn ở bước hai!",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One hundred and eighty minutes cover the whole skills paper. So estimate your civil time before you write.",
          "sub": "180 phút cho cả bài kỹ năng: ước giờ phần dân sự trước khi viết.",
          "keys": [
            "ước giờ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That's general study advice, not a rule of the circular.",
          "sub": "Đó là kinh nghiệm ôn tập chung, không phải quy định của Thông tư.",
          "keys": [
            "không phải quy định"
          ]
        }
      ],
      "ref": "p18"
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
            "text": "11:00 · Nộp bài",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:eleven"
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
                "alarm-clock",
                "page-facing-up"
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
            "at": "l1:same room",
            "caption": "11:00 · cùng phòng, cùng đồng hồ",
            "icon": "alarm-clock"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Nói có sách, mách có chứng”",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l4:books",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "+ có cả đường đi",
            "x": 7932,
            "y": 1335,
            "size": 50,
            "at": "l4:road",
            "hl": [
              {
                "text": "đường đi",
                "at": "l4:road"
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
          "say": "Eleven o'clock. Same room, same timer.",
          "sub": "Mười một giờ. Vẫn phòng ấy, vẫn đồng hồ ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Time! Article and clause on every line?",
          "sub": "Hết giờ! Dòng nào cũng có điều mấy, khoản mấy chứ?",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Every one. And all from the new code.",
          "sub": "Đủ cả cô ạ. Và đều theo bản mới.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Speak with books, accuse with proof. This time Thảo also brought the road.",
          "sub": "“Nói có sách, mách có chứng.” Lần này Thảo mang theo cả đường đi.",
          "keys": [
            "cả đường đi"
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
      "ref": "outro"
    },
    {
      "id": "s23",
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
            "at": "l1:Five steps",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:court",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:request",
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
            "x": 4696,
            "y": 440,
            "at": "l1:Five steps"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 520,
            "at": "l2:court"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1260,
            "at": "l3:request"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài là kiến thức nghề để ôn thi, không phải tư vấn cho vụ việc cụ thể; luật đang sửa đổi, đối chiếu văn bản hiện hành.",
            "x": 7932,
            "y": 1825,
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
          "say": "So: no need to memorise the code. Five steps, in order.",
          "sub": "Tóm lại: chẳng cần thuộc lòng bộ luật. Năm bước, theo thứ tự.",
          "keys": [
            "Năm bước, theo thứ tự"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cite the law in force: regional court, not the old district court.",
          "sub": "Dẫn đúng luật hiện hành: toà khu vực, không phải toà quận cũ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And end with a concrete request, article and clause included.",
          "sub": "Và kết bằng đề nghị cụ thể, có điều, có khoản.",
          "keys": [
            "đề nghị cụ thể"
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
        "q": "Your client's dispute involves assets abroad, which level of court is now the starting point?",
        "options": [
          "The provincial court, because foreign elements always skip the first level",
          "The regional court, because foreign element cases moved down from provincial courts",
          "A foreign court, because Vietnamese courts cannot hear such disputes at all"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "globe-showing-asia-australia",
        "why": "Theo Tạp chí Toà án, vụ có đương sự hoặc tài sản ở nước ngoài trước thuộc toà cấp tỉnh nay về toà khu vực. Đây là thay đổi dễ sót nếu học theo tài liệu cũ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your client's dispute involves assets abroad, which level of court is now the starting point?",
          "sub": "Tranh chấp của khách hàng có tài sản ở nước ngoài, nay bắt đầu từ cấp toà nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The regional court. Foreign element cases moved down from provincial courts.",
          "sub": "Toà khu vực: vụ có yếu tố nước ngoài đã chuyển từ toà tỉnh về."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[13]"
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Lấy một đề cũ, gạch chân ba nhóm đương sự",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your move: take an old paper, underline plaintiff, defendant, related persons. Then try the forty questions below!",
          "sub": "Việc làm ngay: lấy một đề cũ, chỉ gạch chân nguyên đơn, bị đơn, người liên quan. Rồi thử bốn mươi câu bên dưới nhé!",
          "face": "laugh"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-20",
  "notes": "#145 dựng mới theo hạt nhân #136 + biến thể #144 (bang-trang-kit): Đét đứng trái + một bảng trắng 10 ô theo BUỔI THI THỬ SÁNG THỨ BẢY của Thảo ở phòng họp văn phòng Cô Hoa (8:00 phát đề → 8:05 đọc đề → 8:30 toà nào, Khoan đã! chép “toà quận” → 9:00 thời hiệu → 9:20 chứng cứ → 9:50 hướng bảo vệ → 10:30 một trang nháp → 10:50 đồng hồ → 11:00 nộp bài, khép vòng cùng phòng, cùng đồng hồ, câu “Nói có sách, mách có chứng” → “có cả đường đi”). Mở HOOK-20 (đáp án trước: năm việc nối nhau). Nhân vật (3): Thảo, Dũng (thay Khoa p10), Cô Hoa (luật sư hướng dẫn) — xem w145/_series/bar-exam-written1-civil.md. Đề mẫu ông A/bà B (p19) chỉ là chữ trên bảng. Ngắt nhịp: BRK-09 (Luật Luật sư đang sửa, p3), BRK-08 (năm bước), BRK-07 (rehook chứng cứ), BRK-04 (câu đề nghị trước/sau, p16). Điều luật, mốc chỉ lấy từ bài: 180/90 phút, thang 100, từ 50 điểm, Đ17/23/25 TT 10/2021; Đ68, 35, 26/28/30/32, 39, 91, 6, 106, 217 BLTTDS; Đ429, 149 BLDS; Luật 85/2025/QH15 (25/6/2025, 01/7/2025); kỳ họp 17/10–21/11/2026. Câu đố questions[13]. Lưu ý chung cuối bài (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
