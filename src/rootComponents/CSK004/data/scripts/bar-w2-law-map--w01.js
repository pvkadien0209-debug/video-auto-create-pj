// bar-w2-law-map--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-w2-law-map--w01",
  "unit": {
    "audience": "bar-exam-written2-ethics",
    "slug": "bar-w2-law-map",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Bản đồ Luật Luật sư: những chương, điều hay ra đề",
    "series": "Bài viết 2 trong 90 phút — pháp luật về luật sư và Bộ Quy tắc đạo đức cho người ôn kiểm tra tập sự"
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
            "id": "a-q",
            "t": "text",
            "text": "Có mấy hình thức hành nghề?",
            "x": 60,
            "y": 60,
            "size": 54,
            "at": "l1:forms",
            "hl": [
              {
                "text": "hình thức hành nghề",
                "at": "l1:forms"
              }
            ]
          },
          {
            "id": "a-ba",
            "t": "box",
            "x": 60,
            "y": 190,
            "w": 820,
            "h": 130,
            "at": "l2:A",
            "stroke": 5
          },
          {
            "id": "a-a",
            "t": "text",
            "text": "A · Văn phòng + công ty luật",
            "x": 85,
            "y": 220,
            "size": 42,
            "at": "l2:A+200"
          },
          {
            "id": "a-bb",
            "t": "box",
            "x": 60,
            "y": 360,
            "w": 820,
            "h": 130,
            "at": "l2:B",
            "stroke": 5
          },
          {
            "id": "a-b",
            "t": "text",
            "text": "B · Trong tổ chức + cá nhân",
            "x": 85,
            "y": 390,
            "size": 42,
            "at": "l2:B+200"
          },
          {
            "id": "a-g",
            "t": "text",
            "text": "Bạn chọn…?",
            "x": 60,
            "y": 540,
            "size": 56,
            "at": "l3:Pick",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Quick exam question. What forms of practice can a lawyer choose?",
          "sub": "Câu hỏi thi nhanh: luật sư có những hình thức hành nghề nào?",
          "keys": [
            "hình thức hành nghề"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: a law office and a law company. B: inside a practice organisation, or as an individual.",
          "sub": "A: văn phòng luật sư và công ty luật. B: hành nghề trong tổ chức hành nghề, hoặc với tư cách cá nhân."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pick one. Go on, I'll wait.",
          "sub": "Chọn đi. Đét chờ."
        }
      ],
      "beats": {
        "after": 1200
      },
      "ref": "intro,p12"
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
            "x": 920,
            "y": 130,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "books",
                "hot-beverage"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Hai · đề thử ở quán",
            "icon": "hot-beverage"
          },
          {
            "id": "a-xa",
            "t": "strike",
            "over": "a-a",
            "at": "l5:wrong"
          },
          {
            "id": "a-rb",
            "t": "ring",
            "around": [
              "a-b"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l5:B"
          },
          {
            "id": "a-32",
            "t": "text",
            "text": "A = Điều 32 · B = Điều 23",
            "x": 60,
            "y": 640,
            "size": 46,
            "at": "l6:thirty two",
            "color": "coral",
            "hl": [
              {
                "text": "Điều 23",
                "at": "l6:twenty three"
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
          "say": "Meet Dũng, trainee lawyer. Answer: A, without blinking.",
          "sub": "Đây là Dũng, luật sư tập sự. Đáp án: A, không chớp mắt.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Thảo, his study buddy, holding the answer key.",
          "sub": "Còn đây là Thảo, bạn cùng nhóm ôn, đang cầm đáp án."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Easy. Law offices and law companies. Next!",
          "sub": "Dễ ợt. Văn phòng luật sư và công ty luật. Câu tiếp!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Sorry, Dũng. That's not what they asked.",
          "sub": "Tiếc ghê Dũng. Đề đâu có hỏi cái đó.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A is wrong. The answer is B.",
          "sub": "A sai. Đáp án là B.",
          "keys": [
            "Đáp án là B"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A is Article thirty two. The question is twenty three. Neighbours, but different houses.",
          "sub": "A là câu trả lời của Điều 32. Đề hỏi Điều 23. Hàng xóm sát vách, nhưng khác nhà.",
          "keys": [
            "khác nhà"
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
      "ref": "p12,p13"
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
            "text": "Ôn luật thế nào cho khỏi lạc?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:lost",
            "hl": [
              {
                "text": "khỏi lạc",
                "at": "l1:lost"
              }
            ]
          },
          {
            "id": "b-n",
            "t": "text",
            "text": "Đọc lướt cả luật, mong nhớ",
            "x": 2028,
            "y": 180,
            "size": 52,
            "at": "l1:skimming",
            "color": "muted"
          },
          {
            "id": "b-nx",
            "t": "strike",
            "over": "b-n",
            "at": "l1:hoping"
          },
          {
            "id": "b-y",
            "t": "text",
            "text": "Một bản đồ: chương → điều",
            "x": 2028,
            "y": 280,
            "size": 60,
            "at": "l3:map",
            "color": "accent",
            "hl": [
              {
                "text": "bản đồ",
                "at": "l3:map"
              }
            ]
          },
          {
            "id": "b-c",
            "t": "text",
            "text": "“Học thầy không tày học bạn”",
            "x": 2028,
            "y": 400,
            "size": 52,
            "at": "l4:friend",
            "hl": [
              {
                "text": "học bạn",
                "at": "l4:friend"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+300",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2260,
            "y": 600,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+520",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2492,
            "y": 600,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+740",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2724,
            "y": 600,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+960",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2956,
            "y": 600,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+1180",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3188,
            "y": 600,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+1400",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3420,
            "y": 600,
            "w": 212,
            "h": 90,
            "at": "l5:seven stops+1620",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Văn bản",
            "x": 2040,
            "y": 622,
            "size": 34,
            "at": "l5:seven stops+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Chương I",
            "x": 2272,
            "y": 622,
            "size": 34,
            "at": "l5:seven stops+640"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Điều 9",
            "x": 2504,
            "y": 622,
            "size": 34,
            "at": "l5:seven stops+860"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Chương II",
            "x": 2736,
            "y": 622,
            "size": 34,
            "at": "l5:seven stops+1080"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Chương III",
            "x": 2968,
            "y": 622,
            "size": 34,
            "at": "l5:seven stops+1300"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Thù lao",
            "x": 3200,
            "y": 622,
            "size": 34,
            "at": "l5:seven stops+1520"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Kỷ luật",
            "x": 3432,
            "y": 622,
            "size": 34,
            "at": "l5:seven stops+1740"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you study this law without getting lost? Not by skimming and hoping.",
          "sub": "Vậy ôn Luật Luật sư thế nào cho khỏi lạc? Không phải đọc lướt cả luật rồi hy vọng nhớ.",
          "keys": [
            "khỏi lạc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But read it like a map, chapter by chapter, with arrows.",
          "sub": "Mà đọc như một tấm bản đồ: từng chương, từng điều, có mũi tên nối nhau.",
          "keys": [
            "một tấm bản đồ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: learning from a teacher is no match for learning from a friend.",
          "sub": "Ông bà dặn: “Học thầy không tày học bạn.” Thảo sẽ kèm Dũng.",
          "keys": [
            "Học thầy không tày học bạn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One week of Dũng's map, in seven stops.",
          "sub": "Một tuần Dũng kẻ bản đồ, bảy chặng.",
          "keys": [
            "bảy chặng"
          ]
        }
      ],
      "ref": "intro,p18"
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
            "text": "① Đọc theo văn bản nào?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 130,
            "w": 720,
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
                "page-facing-up"
              ]
            },
            "at": "l1:Tuesday",
            "caption": "Tối thứ Ba · bàn học của Dũng",
            "icon": "books"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Luật 2006, đã sửa đổi → VBHN 03",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l3:Consolidated",
            "hl": [
              {
                "text": "VBHN 03",
                "at": "l3:Consolidated"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Ch. I · Quy định chung · Đ1–9",
            "x": 3996,
            "y": 260,
            "size": 44,
            "at": "l4:Chapter one"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Ch. II · Luật sư · Đ10–21",
            "x": 3996,
            "y": 325,
            "size": 44,
            "at": "l4:Chapter two"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Ch. III · Hành nghề · từ Đ22",
            "x": 3996,
            "y": 390,
            "size": 44,
            "at": "l5:Chapter three",
            "color": "accent"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Mục 1: hoạt động · 2: tổ chức",
            "x": 4036,
            "y": 455,
            "size": 38,
            "at": "l5:sections"
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "Sau: thù lao, kỷ luật (Đ85, 89)",
            "x": 3996,
            "y": 530,
            "size": 42,
            "at": "l5:Fees",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Tuesday night, Dũng's desk.",
          "sub": "Chặng một: tối thứ Ba, bàn học của Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Okay. Which version of the law do I even read?",
          "sub": "Rồi. Mà đọc luật theo bản nào đây?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The 2006 law, amended. Read Consolidated Document zero three.",
          "sub": "Luật năm 2006, đã sửa đổi, bổ sung. Dễ đọc nhất: Văn bản hợp nhất 03.",
          "keys": [
            "Văn bản hợp nhất 03"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "The hot zone is three chapters. Chapter one, general rules, articles one to nine. Chapter two, lawyers, ten to twenty one.",
          "sub": "Vùng hay hỏi là ba chương đầu. Chương I quy định chung, Điều 1 đến 9. Chương II luật sư, Điều 10 đến 21.",
          "keys": [
            "ba chương đầu"
          ],
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Chapter three, practice, from twenty two, in two sections. Fees and discipline come later.",
          "sub": "Chương III hành nghề, từ Điều 22, chia hai mục: hoạt động hành nghề và tổ chức hành nghề. Phần sau là thù lao, xử lý vi phạm."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s04",
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
            "id": "c-u",
            "t": "text",
            "text": "01/7/2025: Chủ tịch UBND tỉnh cấp CCHN",
            "x": 4856,
            "y": 650,
            "size": 38,
            "at": "l1:July",
            "color": "accent",
            "hl": [
              {
                "text": "Chủ tịch UBND tỉnh",
                "at": "l1:provincial"
              }
            ]
          },
          {
            "id": "c-d",
            "t": "text",
            "text": "Căn cứ hiệu lực ngày thi",
            "x": 4856,
            "y": 705,
            "size": 38,
            "at": "l2:exam day",
            "color": "coral",
            "hl": [
              {
                "text": "ngày thi",
                "at": "l2:exam day"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Theo Tạp chí Luật sư Việt Nam về Nghị định 121/2025/NĐ-CP",
            "x": 3996,
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
          "say": "It does not update authority: since July first 2025, the provincial chairman issues certificates.",
          "sub": "Nhưng văn bản hợp nhất không tự cập nhật thẩm quyền. Từ 01/7/2025, Chủ tịch UBND cấp tỉnh cấp, cấp lại chứng chỉ hành nghề.",
          "keys": [
            "không tự cập nhật thẩm quyền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So cite what is in force on exam day.",
          "sub": "Vậy ghi căn cứ theo văn bản có hiệu lực vào ngày thi, và nhớ Luật Luật sư đang được sửa đổi.",
          "keys": [
            "ngày thi"
          ]
        }
      ],
      "ref": "p2"
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
            "text": "② Chương I · Điều 5, Điều 9",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second stop"
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "Điều 5: 5 nguyên tắc",
            "x": 5964,
            "y": 160,
            "size": 54,
            "at": "l1:five principles",
            "color": "accent",
            "hl": [
              {
                "text": "5 nguyên tắc",
                "at": "l1:five principles"
              }
            ]
          },
          {
            "id": "d-p0",
            "t": "text",
            "text": "1. Hiến pháp và pháp luật",
            "x": 5984,
            "y": 240,
            "size": 40,
            "at": "l2:Constitution"
          },
          {
            "id": "d-p1",
            "t": "text",
            "text": "2. Quy tắc đạo đức nghề",
            "x": 5984,
            "y": 302,
            "size": 40,
            "at": "l2:code",
            "color": "coral",
            "hl": [
              {
                "text": "Quy tắc đạo đức nghề",
                "at": "l4:brings"
              }
            ]
          },
          {
            "id": "d-p2",
            "t": "text",
            "text": "3. Độc lập, trung thực, khách quan",
            "x": 5984,
            "y": 364,
            "size": 40,
            "at": "l3:independence"
          },
          {
            "id": "d-p3",
            "t": "text",
            "text": "4. Biện pháp hợp pháp, tốt nhất",
            "x": 5984,
            "y": 426,
            "size": 40,
            "at": "l3:lawful"
          },
          {
            "id": "d-p4",
            "t": "text",
            "text": "5. Chịu trách nhiệm nghề nghiệp",
            "x": 5984,
            "y": 488,
            "size": 40,
            "at": "l3:responsibility"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "→ Luật dẫn Bộ Quy tắc vào",
            "x": 5984,
            "y": 560,
            "size": 44,
            "at": "l4:brings",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Wednesday. Article five: five principles of practice.",
          "sub": "Chặng hai: thứ Tư. Chương I mở bằng Điều 5: năm nguyên tắc hành nghề.",
          "keys": [
            "năm nguyên tắc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "One: the Constitution and the law. Two: the code of ethics.",
          "sub": "Một: Hiến pháp và pháp luật. Hai: Quy tắc đạo đức và ứng xử nghề nghiệp.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Three: independence and honesty. Four: lawful means, best for clients. Five: responsibility.",
          "sub": "Độc lập, trung thực, tôn trọng sự thật khách quan. Biện pháp hợp pháp bảo vệ tốt nhất khách hàng. Chịu trách nhiệm trước pháp luật."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Principle two is the hinge: the law itself brings the code in.",
          "sub": "Nguyên tắc thứ hai là bản lề: chính luật dẫn Bộ Quy tắc vào.",
          "keys": [
            "chính luật dẫn Bộ Quy tắc vào"
          ]
        }
      ],
      "ref": "p3"
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
            "at": "l2",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "shrug",
                  "face": "surprised"
                }
              ],
              "props": [
                "prohibited"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Tư · Điều 9",
            "icon": "prohibited"
          },
          {
            "id": "d-9",
            "t": "text",
            "text": "Điều 9.1: luật sư không được",
            "x": 6824,
            "y": 650,
            "size": 44,
            "at": "l2:Clause one",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Article nine is a long list of don'ts!",
          "sub": "Điều 9 là cả danh sách “không được”!",
          "face": "surprised",
          "pose": "shrug"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Clause one: no opposing clients, no false evidence, no leaking client information.",
          "sub": "Khoản 1: không nhận khách có quyền lợi đối lập trong cùng vụ việc, không đưa vật chứng giả, không tiết lộ thông tin khách hàng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "No harassing clients, no extra money, no colluding, no insults, no delaying.",
          "sub": "Không sách nhiễu, lừa dối khách, không đòi thêm tiền ngoài thoả thuận, không móc nối, xúc phạm, trì hoãn tố tụng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And clause two protects lawyers: nobody may obstruct their practice.",
          "sub": "Còn khoản 2 bảo vệ luật sư: cấm mọi cơ quan, tổ chức, cá nhân cản trở hành nghề.",
          "keys": [
            "cản trở hành nghề"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "Điều 9 và Bộ Quy tắc",
        "wrong": "Hai phần ôn tách rời nhau",
        "right": "Một hành vi, hai tầng căn cứ",
        "wrongIllus": "scissors",
        "rightIllus": "link"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two separate subjects?",
          "sub": "Hai phần ôn tách rời?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. One act, two layers.",
          "sub": "Không. Một hành vi, hai tầng căn cứ.",
          "keys": [
            "hai tầng căn cứ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
          },
          {
            "at": "l4",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Điều 9 ↔ Bộ Quy tắc",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third stop"
          },
          {
            "id": "e-a0",
            "t": "text",
            "text": "Đ9.1a · khách đối lập",
            "x": 7932,
            "y": 180,
            "size": 42,
            "at": "l2:Point a"
          },
          {
            "id": "e-r0",
            "t": "arrow",
            "from": [
              8432,
              210
            ],
            "to": [
              8532,
              210
            ],
            "at": "l2:Point a+300"
          },
          {
            "id": "e-b0",
            "t": "text",
            "text": "15.3.1",
            "x": 8552,
            "y": 180,
            "size": 42,
            "at": "l2:Point a+500",
            "color": "accent"
          },
          {
            "id": "e-a1",
            "t": "text",
            "text": "Đ9.1c · tiết lộ thông tin",
            "x": 7932,
            "y": 280,
            "size": 42,
            "at": "l2:point c"
          },
          {
            "id": "e-r1",
            "t": "arrow",
            "from": [
              8432,
              310
            ],
            "to": [
              8532,
              310
            ],
            "at": "l2:point c+300"
          },
          {
            "id": "e-b1",
            "t": "text",
            "text": "QT 7",
            "x": 8552,
            "y": 280,
            "size": 42,
            "at": "l2:point c+500",
            "color": "accent"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "Đ9.1đ · đòi thêm tiền",
            "x": 7932,
            "y": 380,
            "size": 42,
            "at": "l2:point đ"
          },
          {
            "id": "e-r2",
            "t": "arrow",
            "from": [
              8432,
              410
            ],
            "to": [
              8532,
              410
            ],
            "at": "l2:point đ+300"
          },
          {
            "id": "e-b2",
            "t": "text",
            "text": "QT 8, QT 9",
            "x": 8552,
            "y": 380,
            "size": 42,
            "at": "l2:point đ+500",
            "color": "accent"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Điều luật trước, quy tắc sau",
            "x": 7932,
            "y": 520,
            "size": 52,
            "at": "l5:law first",
            "color": "accent",
            "hl": [
              {
                "text": "Điều luật trước",
                "at": "l5:law first"
              }
            ]
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "books"
              ]
            },
            "at": "l4",
            "caption": "Thứ Tư khuya · Thảo kiểm bài",
            "icon": "books"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Article nine has twins in the code.",
          "sub": "Chặng ba: Điều 9 có “anh em sinh đôi” trong Bộ Quy tắc.",
          "keys": [
            "anh em sinh đôi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Point a sits near clause fifteen point three point one, point c near Rule seven, point đ near Rules eight and nine.",
          "sub": "Điểm a, khách đối lập, gần khoản 15.3.1. Điểm c, tiết lộ thông tin, gần Quy tắc 7. Điểm đ, đòi thêm tiền, gần Quy tắc 8 và 9."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Cite both, Dũng. The law first, the rule second.",
          "sub": "Nêu cả hai căn cứ nhé Dũng. Điều luật trước, quy tắc sau.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One act, two layers, law first. The answer gets sturdier.",
          "sub": "Một hành vi, hai tầng căn cứ: điều luật đi trước, quy tắc đi sau. Câu trả lời chắc hơn.",
          "keys": [
            "điều luật đi trước, quy tắc đi sau"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "text": "④ Chương II · Luật sư, tập sự",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth stop"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up"
              ]
            },
            "at": "l1:Uncle",
            "caption": "Thứ Năm · Bác Bình xem bản đồ",
            "icon": "office-building"
          },
          {
            "id": "f-10",
            "t": "text",
            "text": "Đ10: cử nhân, học nghề, tập sự",
            "x": 60,
            "y": 1260,
            "size": 40,
            "at": "l3:law degree",
            "hl": [
              {
                "text": "tập sự",
                "at": "l3:probation"
              }
            ]
          },
          {
            "id": "f-14",
            "t": "text",
            "text": "Đ14: tập sự 12 tháng",
            "x": 60,
            "y": 1350,
            "size": 54,
            "at": "l4:twelve months",
            "color": "accent",
            "hl": [
              {
                "text": "12 tháng",
                "at": "l4:twelve months"
              }
            ]
          },
          {
            "id": "f-14b",
            "t": "text",
            "text": "từ ngày đăng ký tại Đoàn",
            "x": 100,
            "y": 1420,
            "size": 40,
            "at": "l4:registration"
          },
          {
            "id": "f-14c",
            "t": "text",
            "text": "Hướng dẫn ≥ 3 năm hành nghề",
            "x": 60,
            "y": 1490,
            "size": 38,
            "at": "l5:three years",
            "color": "coral",
            "hl": [
              {
                "text": "≥ 3 năm",
                "at": "l5:three years"
              }
            ]
          },
          {
            "id": "f-14d",
            "t": "text",
            "text": "≤ 3 người tập sự cùng lúc",
            "x": 60,
            "y": 1555,
            "size": 42,
            "at": "l5:trainees"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Thursday. Dũng shows his map to Uncle Bình, Thảo's supervisor.",
          "sub": "Chặng bốn: thứ Năm. Dũng mang bản đồ đến hỏi Bác Bình, luật sư hướng dẫn của Thảo.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Chapter two. Who can be a lawyer, Dũng?",
          "sub": "Chương II. Ai được làm luật sư, Dũng?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Article ten: a citizen, good ethics, a law degree, training, probation, good health.",
          "sub": "Điều 10: công dân, đạo đức tốt, có bằng cử nhân luật, đã đào tạo nghề, qua tập sự, đủ sức khoẻ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article fourteen: probation lasts twelve months, from registration at the bar.",
          "sub": "Điều 14: tập sự mười hai tháng, tính từ ngày đăng ký tập sự tại Đoàn luật sư.",
          "keys": [
            "mười hai tháng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "binh",
          "say": "And a supervisor needs three years of practice, no current discipline, three trainees at most.",
          "sub": "Luật sư hướng dẫn: ít nhất ba năm hành nghề, không đang bị kỷ luật, không quá ba người tập sự cùng lúc.",
          "keys": [
            "ít nhất ba năm"
          ],
          "pose": "explain"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-18",
            "t": "text",
            "text": "Đ18: thu hồi chứng chỉ khi…",
            "x": 60,
            "y": 1640,
            "size": 42,
            "at": "l1:Article eighteen",
            "color": "coral"
          },
          {
            "id": "f-18b",
            "t": "text",
            "text": "công chức · 2 năm ngoài Đoàn",
            "x": 60,
            "y": 1700,
            "size": 34,
            "at": "l1:two years",
            "color": "muted"
          },
          {
            "id": "f-21",
            "t": "text",
            "text": "Đ20 vào Đoàn · Đ21 quyền, nghĩa vụ",
            "x": 920,
            "y": 1740,
            "size": 38,
            "at": "l2:Twenty"
          },
          {
            "id": "f-21b",
            "t": "text",
            "text": "bồi dưỡng · trợ giúp pháp lý",
            "x": 920,
            "y": 1795,
            "size": 36,
            "at": "l2:training",
            "hl": [
              {
                "text": "trợ giúp pháp lý",
                "at": "l2:legal aid"
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
          "say": "Article eighteen withdraws certificates, say for a new civil servant, two years outside any bar, or a conviction.",
          "sub": "Điều 18: thu hồi chứng chỉ, như khi được tuyển làm công chức, hai năm không gia nhập Đoàn nào, bị kết án bằng bản án có hiệu lực."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twenty and twenty one: joining the bar, rights and duties, like training and legal aid.",
          "sub": "Điều 20 gia nhập Đoàn luật sư. Điều 21: quyền như hành nghề trên toàn quốc, nghĩa vụ như bồi dưỡng bắt buộc, trợ giúp pháp lý."
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Năm · bàn Bác Bình",
        "actors": [
          {
            "id": "binh",
            "side": "left"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Học xong Điều 14 là xong",
          "why": "Khoản 1 Điều 14: luật sư đang bị kỷ luật theo khoản 1 Điều 85 không được hướng dẫn tập sự.",
          "rule": "Học điều nào, nhìn sang điều nó dẫn chiếu"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Article fourteen, probation. Done! Next article.",
          "sub": "Điều 14, tập sự. Xong! Sang điều khác.",
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
          "say": "Clause one of Article fourteen points straight at Article eighty five, on discipline.",
          "sub": "Khoản 1 Điều 14 chỉ thẳng sang Điều 85 về kỷ luật.",
          "keys": [
            "Điều 85"
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
          "who": "binh",
          "say": "If your supervisor is under discipline, what happens to you?",
          "sub": "Nếu luật sư hướng dẫn đang bị kỷ luật thì cháu sao?",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "He can't supervise me. I draw an arrow from fourteen to eighty five.",
          "sub": "Thì không đủ điều kiện hướng dẫn cháu. Cháu vẽ mũi tên từ Điều 14 sang Điều 85.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p9,p10"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Chương III · Hành nghề",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth stop"
          },
          {
            "id": "g-22",
            "t": "text",
            "text": "Đ22: tố tụng · tư vấn · đại diện…",
            "x": 2028,
            "y": 1255,
            "size": 38,
            "at": "l1:twenty two"
          },
          {
            "id": "g-b23",
            "t": "box",
            "x": 2028,
            "y": 1340,
            "w": 760,
            "h": 210,
            "at": "l2:Article twenty three",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "g-23",
            "t": "text",
            "text": "Đ23 · Hình thức hành nghề",
            "x": 2053,
            "y": 1355,
            "size": 46,
            "at": "l2:Article twenty three+200",
            "color": "accent"
          },
          {
            "id": "g-23a",
            "t": "text",
            "text": "• trong tổ chức hành nghề",
            "x": 2063,
            "y": 1425,
            "size": 40,
            "at": "l2:inside"
          },
          {
            "id": "g-23b",
            "t": "text",
            "text": "• với tư cách cá nhân",
            "x": 2063,
            "y": 1485,
            "size": 40,
            "at": "l2:individual"
          },
          {
            "id": "g-b32",
            "t": "box",
            "x": 2848,
            "y": 1340,
            "w": 790,
            "h": 300,
            "at": "l3:Article thirty two",
            "stroke": 5
          },
          {
            "id": "g-32",
            "t": "text",
            "text": "Đ32 · Tổ chức hành nghề",
            "x": 2873,
            "y": 1355,
            "size": 46,
            "at": "l3:Article thirty two+200"
          },
          {
            "id": "g-33",
            "t": "text",
            "text": "Đ33 văn phòng: 1 LS, DNTN",
            "x": 2883,
            "y": 1430,
            "size": 34,
            "at": "l4:law office"
          },
          {
            "id": "g-34",
            "t": "text",
            "text": "Đ34 công ty: hợp danh, TNHH",
            "x": 2883,
            "y": 1490,
            "size": 34,
            "at": "l5:partnership"
          },
          {
            "id": "g-34b",
            "t": "text",
            "text": "thành viên phải là luật sư",
            "x": 2913,
            "y": 1550,
            "size": 34,
            "at": "l5:members",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Friday, chapter three. Article twenty two sets the scope of practice.",
          "sub": "Chặng năm: thứ Sáu. Chương III. Điều 22: tham gia tố tụng, tư vấn, đại diện ngoài tố tụng, dịch vụ pháp lý khác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article twenty three: two forms of practice. Inside a practice organisation, or as an individual.",
          "sub": "Điều 23: hai hình thức hành nghề. Trong tổ chức hành nghề luật sư, hoặc với tư cách cá nhân.",
          "keys": [
            "hai hình thức hành nghề"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article thirty two asks something else: the organisations.",
          "sub": "Điều 32 là câu hỏi khác: chính các tổ chức hành nghề.",
          "keys": [
            "câu hỏi khác"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A law office: one lawyer, a sole private business.",
          "sub": "Văn phòng luật sư do một luật sư thành lập, theo loại hình doanh nghiệp tư nhân."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A law company: partnership or limited liability, members all lawyers.",
          "sub": "Công ty luật gồm hợp danh và trách nhiệm hữu hạn; thành viên phải là luật sư.",
          "keys": [
            "thành viên phải là luật sư"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s13",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Hành nghề ≠ tổ chức hành nghề",
        "hl": "tổ chức hành nghề",
        "sub": "Điều 23 hỏi người, Điều 32 hỏi tổ chức"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Forms of practice.",
          "sub": "Hình thức hành nghề."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not forms of organisation. Two different questions.",
          "sub": "Khác hình thức tổ chức hành nghề. Hai câu hỏi khác nhau.",
          "keys": [
            "Hai câu hỏi khác nhau"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p12,p13"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Nhận việc, bí mật, thù lao",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth stop"
          },
          {
            "id": "h-24",
            "t": "text",
            "text": "Đ24: không giao người khác làm thay",
            "x": 3996,
            "y": 1255,
            "size": 40,
            "at": "l1:handing"
          },
          {
            "id": "h-24b",
            "t": "text",
            "text": "khách không chịu, trừ bất khả kháng",
            "x": 4036,
            "y": 1315,
            "size": 34,
            "at": "l1:force majeure",
            "color": "muted"
          },
          {
            "id": "h-25",
            "t": "text",
            "text": "Đ25: giữ bí mật thông tin",
            "x": 3996,
            "y": 1380,
            "size": 44,
            "at": "l2:secrets",
            "color": "coral",
            "hl": [
              {
                "text": "bí mật",
                "at": "l2:secrets"
              }
            ]
          },
          {
            "id": "h-26",
            "t": "text",
            "text": "Đ26: hợp đồng bằng văn bản",
            "x": 3996,
            "y": 1460,
            "size": 44,
            "at": "l3:contract",
            "hl": [
              {
                "text": "bằng văn bản",
                "at": "l3:written"
              }
            ]
          },
          {
            "id": "h-26b",
            "t": "text",
            "text": "phạm vi · thù lao · tranh chấp",
            "x": 4036,
            "y": 1525,
            "size": 36,
            "at": "l3:scope",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: Saturday. Article twenty four: no handing a matter over without consent, barring force majeure.",
          "sub": "Chặng sáu: thứ Bảy. Điều 24: không chuyển vụ việc cho luật sư khác làm thay khi khách không đồng ý, trừ bất khả kháng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twenty five: keep secrets, unless the client agrees in writing or a law says otherwise.",
          "sub": "Điều 25: cấm tiết lộ thông tin, trừ khi khách đồng ý bằng văn bản hoặc luật quy định khác; nhân viên cũng phải giữ bí mật.",
          "keys": [
            "đồng ý bằng văn bản"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Twenty six: a written contract, with scope, fee and disputes.",
          "sub": "Điều 26: hợp đồng dịch vụ pháp lý bằng văn bản, có phạm vi, thù lao, chi phí, trách nhiệm vi phạm, giải quyết tranh chấp."
        }
      ],
      "ref": "p14"
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
            "at": "l1",
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
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "money-bag"
              ]
            },
            "at": "l1",
            "caption": "Thứ Bảy · nhóm ôn",
            "icon": "money-bag"
          },
          {
            "id": "h-4m",
            "t": "text",
            "text": "4 cách: giờ · trọn gói · % · cố định",
            "x": 3996,
            "y": 1735,
            "size": 38,
            "at": "l1:hourly",
            "hl": [
              {
                "text": "4 cách",
                "at": "l1:four methods"
              }
            ]
          },
          {
            "id": "h-55",
            "t": "text",
            "text": "3 căn cứ: việc · công · uy tín",
            "x": 3996,
            "y": 1610,
            "size": 40,
            "at": "l2:bases",
            "color": "accent",
            "hl": [
              {
                "text": "3 căn cứ",
                "at": "l2:three bases"
              }
            ]
          },
          {
            "id": "h-55b",
            "t": "text",
            "text": "%: giá ngạch, hợp đồng, dự án",
            "x": 3996,
            "y": 1675,
            "size": 34,
            "at": "l3:percentage",
            "color": "muted"
          },
          {
            "id": "h-26d",
            "t": "text",
            "text": "Đ26.2d: ghi rõ mức thù lao",
            "x": 4856,
            "y": 1760,
            "size": 38,
            "at": "l4:point d",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Three bases, four methods: hourly, flat fee, percentage, long term fixed. Don't mix them up.",
          "sub": "Ba căn cứ, bốn phương thức: theo giờ, trọn gói, theo tỷ lệ phần trăm, dài hạn cố định. Đừng lẫn nhé.",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Clause one gives three bases: the service, the effort, and the lawyer's reputation.",
          "sub": "Khoản 1 Điều 55, ba căn cứ: nội dung, tính chất dịch vụ; thời gian, công sức; kinh nghiệm, uy tín của luật sư.",
          "keys": [
            "ba căn cứ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "And a percentage counts on the claim, the contract or the project value.",
          "sub": "Tỷ lệ phần trăm tính theo giá ngạch vụ kiện, giá trị hợp đồng hoặc giá trị dự án."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And Article twenty six, point d: write the method and the amount.",
          "sub": "Và điểm d khoản 2 Điều 26: hợp đồng ghi phương thức tính, mức thù lao cụ thể, các khoản chi phí nếu có.",
          "keys": [
            "mức thù lao cụ thể"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s17",
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
            "text": "⑦ Xử lý vi phạm",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh stop"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "binh",
                  "side": "center",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "balance-scale"
              ]
            },
            "at": "l1:Uncle",
            "caption": "Sáng Chủ nhật · Bác Bình ôn cùng",
            "icon": "balance-scale"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1280,
            "w": 40,
            "h": 40,
            "at": "l2:reprimand",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1264,
            "size": 50,
            "at": "l2:reprimand+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Khiển trách",
            "x": 6026,
            "y": 1270,
            "size": 44,
            "at": "l2:reprimand+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1355,
            "w": 40,
            "h": 40,
            "at": "l2:warning",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1339,
            "size": 50,
            "at": "l2:warning+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Cảnh cáo",
            "x": 6026,
            "y": 1345,
            "size": 44,
            "at": "l2:warning+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1430,
            "w": 40,
            "h": 40,
            "at": "l2:suspension",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1414,
            "size": 50,
            "at": "l2:suspension+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Tạm đình chỉ 6–24 tháng",
            "x": 6026,
            "y": 1420,
            "size": 44,
            "at": "l2:suspension+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1505,
            "w": 40,
            "h": 40,
            "at": "l2:removal",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1489,
            "size": 50,
            "at": "l2:removal+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Xoá tên khỏi danh sách",
            "x": 6026,
            "y": 1495,
            "size": 44,
            "at": "l2:removal+200"
          },
          {
            "id": "i-bcn",
            "t": "text",
            "text": "Ban chủ nhiệm Đoàn quyết định",
            "x": 5964,
            "y": 1590,
            "size": 44,
            "at": "l3:Executive",
            "hl": [
              {
                "text": "Ban chủ nhiệm Đoàn",
                "at": "l3:Executive"
              }
            ]
          },
          {
            "id": "i-stp",
            "t": "text",
            "text": "Xoá tên → báo Sở Tư pháp",
            "x": 5964,
            "y": 1660,
            "size": 38,
            "at": "l4:Justice",
            "color": "coral",
            "hl": [
              {
                "text": "Sở Tư pháp",
                "at": "l4:Justice"
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
          "say": "Seventh stop: Sunday. Uncle Bình takes violations.",
          "sub": "Chặng bảy: sáng Chủ nhật. Bác Bình phụ trách phần xử lý vi phạm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Article eighty five: reprimand, warning, suspension for six to twenty four months, removal from the bar's list.",
          "sub": "Điều 85: khiển trách, cảnh cáo, tạm đình chỉ từ sáu đến hai mươi bốn tháng, xoá tên khỏi danh sách luật sư của Đoàn.",
          "keys": [
            "Điều 85"
          ],
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The bar's Executive Board decides, on its discipline council's proposal.",
          "sub": "Ban chủ nhiệm Đoàn quyết định, trên cơ sở đề nghị của Hội đồng khen thưởng, kỷ luật."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "After a removal, the bar notifies the Department of Justice.",
          "sub": "Khi xoá tên, Đoàn báo bằng văn bản cho Sở Tư pháp, đề nghị thu hồi chứng chỉ hành nghề và thẻ luật sư.",
          "keys": [
            "Sở Tư pháp"
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
            "fit": "I",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "i-89",
            "t": "text",
            "text": "Đ89: hành chính · hình sự · bồi thường",
            "x": 5964,
            "y": 1730,
            "size": 40,
            "at": "l1:eighty nine",
            "color": "accent",
            "hl": [
              {
                "text": "hình sự",
                "at": "l1:criminal"
              }
            ]
          },
          {
            "id": "i-109",
            "t": "text",
            "text": "Mức phạt: NĐ 109/2026, từ 18/5/2026",
            "x": 6824,
            "y": 1740,
            "size": 38,
            "at": "l2:Decree",
            "hl": [
              {
                "text": "NĐ 109/2026",
                "at": "l2:Decree"
              }
            ]
          },
          {
            "id": "i-chk",
            "t": "text",
            "text": "→ kiểm văn bản hiện hành",
            "x": 6824,
            "y": 1795,
            "size": 36,
            "at": "l2:check",
            "color": "coral"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: Điều 85, 89 Luật Luật sư (VBHN 03)",
            "x": 5964,
            "y": 1805,
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
          "say": "Article eighty nine adds other layers: administrative fines, criminal liability, compensation.",
          "sub": "Điều 89 thêm các tầng khác: xử phạt hành chính, truy cứu trách nhiệm hình sự, bồi thường thiệt hại.",
          "keys": [
            "Điều 89"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fines follow Decree one oh nine of 2026, from May eighteenth. Check before quoting.",
          "sub": "Mức phạt hiện theo Nghị định 109/2026, hiệu lực từ 18/5/2026; kiểm văn bản hiện hành trước khi trích.",
          "keys": [
            "kiểm văn bản hiện hành"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s19",
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Chủ nhật tối · bản đồ một trang",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1250,
            "w": 250,
            "h": 70,
            "at": "l1:three columns",
            "stroke": 4
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 8202,
            "y": 1250,
            "w": 250,
            "h": 70,
            "at": "l1:three columns",
            "stroke": 4
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 8472,
            "y": 1250,
            "w": 250,
            "h": 70,
            "at": "l1:three columns",
            "stroke": 4
          },
          {
            "id": "j-ct0",
            "t": "text",
            "text": "Chương",
            "x": 7947,
            "y": 1262,
            "size": 34,
            "at": "l1:three columns+200",
            "color": "accent"
          },
          {
            "id": "j-ct1",
            "t": "text",
            "text": "Điều",
            "x": 8217,
            "y": 1262,
            "size": 34,
            "at": "l1:three columns+400",
            "color": "accent"
          },
          {
            "id": "j-ct2",
            "t": "text",
            "text": "Hay hỏi gì",
            "x": 8487,
            "y": 1262,
            "size": 34,
            "at": "l1:three columns+600",
            "color": "accent"
          },
          {
            "id": "j-r1",
            "t": "text",
            "text": "I · Đ5, Đ9",
            "x": 7947,
            "y": 1350,
            "size": 38,
            "at": "l1:ask+300"
          },
          {
            "id": "j-r2",
            "t": "text",
            "text": "II · Đ10, 14, 18, 20, 21",
            "x": 7947,
            "y": 1410,
            "size": 38,
            "at": "l1:ask+650"
          },
          {
            "id": "j-r3",
            "t": "text",
            "text": "III · Đ22–28, 32–34",
            "x": 7947,
            "y": 1470,
            "size": 38,
            "at": "l1:ask+1000"
          },
          {
            "id": "j-r4",
            "t": "text",
            "text": "+ Đ55, 85, 89",
            "x": 7947,
            "y": 1530,
            "size": 38,
            "at": "l1:ask+1350"
          },
          {
            "id": "j-qq",
            "t": "text",
            "text": "“Hướng dẫn cần mấy năm?”",
            "x": 7932,
            "y": 1600,
            "size": 40,
            "at": "l4:question",
            "color": "muted"
          },
          {
            "id": "j-ar",
            "t": "arrow",
            "from": [
              8432,
              1430
            ],
            "to": [
              8432,
              1540
            ],
            "at": "l5:arrows",
            "color": "coral"
          },
          {
            "id": "j-ark",
            "t": "text",
            "text": "14 → 85",
            "x": 8462,
            "y": 1470,
            "size": 42,
            "at": "l5:fourteen",
            "color": "coral"
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Một trang > một trăm trang chép",
            "x": 7932,
            "y": 1680,
            "size": 46,
            "at": "l6:one page",
            "color": "accent",
            "hl": [
              {
                "text": "Một trang",
                "at": "l6:one page"
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
          "say": "Sunday night: Dũng's one page map, three columns. Chapter, article, what they ask.",
          "sub": "Tối Chủ nhật: bản đồ một trang của Dũng, ba cột. Chương, điều, “hay hỏi gì”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each article gets one question of its own.",
          "sub": "Mỗi điều tự đặt một câu hỏi, như “luật sư hướng dẫn cần bao nhiêu năm kinh nghiệm?”."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then arrows, like fourteen to eighty five.",
          "sub": "Rồi vẽ mũi tên giữa các điều dẫn chiếu nhau, như từ Điều 14 sang Điều 85.",
          "keys": [
            "mũi tên"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One page remembers longer than a hundred copied pages.",
          "sub": "Bản đồ một trang nhớ lâu hơn một trăm trang chép tay.",
          "keys": [
            "một trang"
          ]
        }
      ],
      "ref": "p17,p18"
    },
    {
      "id": "s20",
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
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "books",
                "hot-beverage"
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Hai tuần sau · vẫn quán ấy",
            "icon": "hot-beverage"
          },
          {
            "id": "j-b",
            "t": "text",
            "text": "B · Đ23 ✓  (A là Đ32)",
            "x": 8792,
            "y": 1740,
            "size": 44,
            "at": "l3:twenty three",
            "color": "accent",
            "hl": [
              {
                "text": "Đ23",
                "at": "l3:twenty three"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“…không tày học bạn”",
            "x": 8792,
            "y": 1800,
            "size": 40,
            "at": "l4:friend",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next Monday. Same café, same question.",
          "sub": "Thứ Hai tuần sau. Vẫn quán ấy, vẫn câu hỏi ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Forms of practice, Dũng?",
          "sub": "Hình thức hành nghề, Dũng?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "B. Article twenty three. Offices and companies are thirty two.",
          "sub": "B. Trong tổ chức hành nghề, hoặc cá nhân. Điều 23. Văn phòng, công ty là Điều 32.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Learning from a teacher is no match for learning from a friend. And a map.",
          "sub": "“Học thầy không tày học bạn.” Thêm một tấm bản đồ nữa.",
          "keys": [
            "học bạn"
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
      "ref": "p12,p19"
    },
    {
      "id": "s21",
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
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "G",
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
            "x": 5496,
            "y": 40,
            "at": "l1:chapters"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l2:law"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3528,
            "y": 1130,
            "at": "l3:practice"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "e-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l2:law+400"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề để ôn thi, không phải tư vấn vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 2028,
            "y": 490,
            "size": 26,
            "at": "l4",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "z-note2",
            "t": "text",
            "text": "Luật Luật sư đang sửa đổi (kỳ họp 17/10–21/11/2026): kiểm lại văn bản mới.",
            "x": 2028,
            "y": 530,
            "size": 26,
            "at": "l4",
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
          "say": "So: chapters one, two and three, then fees and discipline.",
          "sub": "Tóm lại: Chương I nguyên tắc, điều cấm. Chương II luật sư, tập sự. Chương III hành nghề. Rồi thù lao, xử lý vi phạm.",
          "keys": [
            "Chương I",
            "Chương III"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cite the law first, the rule second.",
          "sub": "Điều luật trước, quy tắc sau.",
          "keys": [
            "Điều luật trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And forms of practice are not forms of organisation.",
          "sub": "Và hình thức hành nghề khác hình thức tổ chức hành nghề.",
          "keys": [
            "khác"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Today: draw your own three column map, and check the latest texts.",
          "sub": "Việc làm ngay: kẻ bản đồ ba cột của bạn. Và kiểm lại văn bản mới, vì Luật Luật sư đang sửa đổi.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next: thirty two ethics rules, grouped by relationship.",
          "sub": "Bài tiếp theo: học 32 quy tắc theo nhóm quan hệ."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p19"
    },
    {
      "id": "s22",
      "module": "QUIZ-01",
      "data": {
        "q": "A lawyer with two years of practice offers to supervise you, can she?",
        "options": [
          "Yes, any lawyer with a valid card may supervise as many trainees as wanted",
          "Yes, if the firm pays an extra fee to the bar for the exception",
          "No, a supervising lawyer needs at least three years of practice experience"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "hourglass-done",
        "why": "Luật sư hướng dẫn cần ít nhất ba năm hành nghề."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A lawyer with two years of practice offers to supervise you, can she?",
          "sub": "Một luật sư mới hành nghề hai năm nhận hướng dẫn anh chị, có được không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No, a supervising lawyer needs at least three years of practice experience.",
          "sub": "Không: luật sư hướng dẫn cần ít nhất ba năm kinh nghiệm."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Article fourteen requires at least three years of practice for a supervisor.",
          "sub": "Điều 14: luật sư hướng dẫn cần ít nhất ba năm hành nghề, không đang bị kỷ luật."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[14]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Bản đồ Luật Luật sư"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Your turn. Forty questions are waiting below.",
          "sub": "Đến lượt bạn. Bốn mươi câu hỏi đang chờ ngay bên dưới.",
          "face": "happy"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-21",
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21: câu hỏi để đoán sai (hình thức hành nghề, A = Điều 32 / B = Điều 23, p12). Đét đứng trái + bảng trắng 10 ô theo MỘT TUẦN DŨNG KẺ BẢN ĐỒ LUẬT: tối thứ Hai đề thử ở quán (Dũng chọn A) → thứ Ba chọn văn bản (p1, p2) → thứ Tư Chương I Điều 5, 9 (p3, p4; BRK-04 p5) → Điều 9 ↔ Bộ Quy tắc (p5, p6) → thứ Năm Chương II với Bác Bình (p7, p8; “Khoan đã!” DLG Điều 14 → 85, p9, p10) → thứ Sáu Chương III (p11; BRK-02 “Hành nghề ≠ tổ chức hành nghề” p13) → thứ Bảy Điều 24–26, BRK-06 bốn phương thức thù lao, ba căn cứ (p14, p15) → Chủ nhật Điều 85, 89 (p16) → bản đồ một trang (p17, p18) → thứ Hai tuần sau, cùng quán, Dũng trả lời B (khép vòng “Học thầy không tày học bạn”). Nhân vật: Dũng (chính), Thảo, Bác Bình. Mọi điều, khoản, mốc lấy từ bài; lưu ý chung #133 ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
