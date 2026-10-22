// household-to-company-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "household-to-company-overview--w01",
  "unit": {
    "audience": "household-business-owners-upgrading",
    "slug": "household-to-company-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Hộ kinh doanh có nên lên doanh nghiệp không, và cân nhắc những gì?",
    "series": "Từ hộ kinh doanh lên công ty — cho chủ hộ cân nhắc đổi mô hình khi quy định thuế đổi"
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
            "id": "a-q1",
            "t": "text",
            "text": "Bỏ thuế khoán",
            "x": 60,
            "y": 70,
            "size": 84,
            "at": "l1:presumptive",
            "color": "accent"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "→ phải lên công ty ngay?",
            "x": 60,
            "y": 190,
            "size": 60,
            "at": "l2:company"
          },
          {
            "id": "a-o1",
            "t": "box",
            "x": 60,
            "y": 320,
            "w": 760,
            "h": 100,
            "at": "l3:A",
            "stroke": 5
          },
          {
            "id": "a-o1t",
            "t": "text",
            "text": "A. Đúng, mở cho kịp",
            "x": 90,
            "y": 338,
            "size": 52,
            "at": "l3:A+200"
          },
          {
            "id": "a-o2",
            "t": "box",
            "x": 60,
            "y": 450,
            "w": 760,
            "h": 100,
            "at": "l3:B",
            "stroke": 5
          },
          {
            "id": "a-o2t",
            "t": "text",
            "text": "B. Không bắt buộc",
            "x": 90,
            "y": 468,
            "size": 52,
            "at": "l3:B+200"
          },
          {
            "id": "a-o1x",
            "t": "strike",
            "over": "a-o1t",
            "at": "l4:not"
          },
          {
            "id": "a-r",
            "t": "ring",
            "around": [
              "a-o2t"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l4:B"
          },
          {
            "id": "a-k",
            "t": "text",
            "text": "Chỉ đổi cách nộp thuế",
            "x": 60,
            "y": 600,
            "size": 56,
            "at": "l5:changes",
            "color": "accent",
            "hl": [
              {
                "text": "đổi cách nộp",
                "at": "l5:how you pay"
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
          "say": "You paid presumptive tax for years. Now it is gone.",
          "sub": "Bạn nộp thuế khoán bao năm. Nay khoán bị bỏ.",
          "keys": [
            "thuế khoán"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So must every household business become a company, right now?",
          "sub": "Vậy mọi hộ kinh doanh phải lên công ty, ngay bây giờ?",
          "keys": [
            "lên công ty"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A: yes, hurry up. B: no, not required. Take a guess.",
          "sub": "A: đúng, mau lên. B: không bắt buộc. Đoán thử xem.",
          "keys": [
            "Đoán thử xem"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not A. The answer is B.",
          "sub": "Không phải A. Đáp án là B.",
          "wait": 1500,
          "keys": [
            "Đáp án là B"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Ending presumptive tax only changes how you pay tax.",
          "sub": "Bỏ khoán chỉ đổi cách nộp thuế thôi.",
          "keys": [
            "đổi cách nộp thuế"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop"
        }
      ],
      "ref": "intro,p4"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "steaming-bowl",
                "newspaper"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · quán bún đầu chợ",
            "icon": "steaming-bowl"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Liệu cơm gắp mắm”",
            "x": 920,
            "y": 620,
            "size": 56,
            "at": "l6:rice",
            "color": "accent",
            "hl": [
              {
                "text": "Liệu cơm",
                "at": "l6:rice"
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
          "say": "Meet Cô Hoa. Her noodle stall sits at the market gate, presumptive tax paid for many years.",
          "sub": "Đây là Cô Hoa. Quán bún đầu chợ, nộp thuế khoán đã nhiều năm.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "No more presumptive tax? Then what do I pay, and how?",
          "sub": "Bỏ khoán à? Thế giờ cô nộp gì, nộp thế nào?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Dũng, owner of a small carpentry workshop, eating his breakfast here.",
          "sub": "Còn đây là Dũng, chủ xưởng mộc nhỏ, đang ăn sáng ở quán.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Easy! Open a company right away, Cô Hoa. Done!",
          "sub": "Dễ mà! Lên công ty luôn đi cô. Xong!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Dũng answers faster than the noodles cook.",
          "sub": "Dũng trả lời còn nhanh hơn nồi bún chín."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Grandma would say: check the rice before you pick the sauce.",
          "sub": "Ông bà dặn: “Liệu cơm gắp mắm.”",
          "keys": [
            "Liệu cơm gắp mắm"
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
      "ref": "p3"
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
            "text": "Có nên lên công ty?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:company",
            "hl": [
              {
                "text": "lên công ty",
                "at": "l1:company"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: nghe tin đồn",
            "x": 2028,
            "y": 180,
            "size": 50,
            "at": "l2:rumours",
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
            "text": "Mà là: đo bằng số của mình",
            "x": 2028,
            "y": 270,
            "size": 50,
            "at": "l3:numbers",
            "color": "accent",
            "hl": [
              {
                "text": "số của mình",
                "at": "l3:own"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Thuế → sổ → so → chuyển đổi",
            "x": 2028,
            "y": 370,
            "size": 48,
            "at": "l4:tax",
            "hl": [
              {
                "text": "chuyển đổi",
                "at": "l4:convert"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Một tuần của cô Hoa",
            "x": 2028,
            "y": 480,
            "size": 46,
            "at": "l5:week"
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 570,
            "w": 240,
            "h": 90,
            "at": "l5:week+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 570,
            "w": 240,
            "h": 90,
            "at": "l5:week+750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 570,
            "w": 240,
            "h": 90,
            "at": "l5:week+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 570,
            "w": 240,
            "h": 90,
            "at": "l5:week+1250",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 570,
            "w": 240,
            "h": 90,
            "at": "l5:week+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 570,
            "w": 240,
            "h": 90,
            "at": "l5:week+1750",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2",
            "x": 2088,
            "y": 585,
            "size": 50,
            "at": "l5:week+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2358,
            "y": 585,
            "size": 50,
            "at": "l5:week+870"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2628,
            "y": 585,
            "size": 50,
            "at": "l5:week+1120"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T5",
            "x": 2898,
            "y": 585,
            "size": 50,
            "at": "l5:week+1370"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6",
            "x": 3168,
            "y": 585,
            "size": 50,
            "at": "l5:week+1620"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "CN",
            "x": 3438,
            "y": 585,
            "size": 50,
            "at": "l5:week+1870"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, should a household business become a company? And what should you weigh?",
          "sub": "Vậy hộ kinh doanh có nên lên công ty? Cân nhắc những gì?",
          "keys": [
            "lên công ty"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not by market rumours.",
          "sub": "Không phải nghe tin đồn ngoài chợ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But by your own numbers.",
          "sub": "Mà là đo bằng con số của chính mình.",
          "keys": [
            "con số của chính mình"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Understand the tax change, keep books, compare, and only then decide to convert.",
          "sub": "Hiểu thay đổi về thuế, ghi sổ, so sánh, rồi mới tính chuyện chuyển đổi.",
          "keys": [
            "rồi mới tính chuyện chuyển đổi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Cô Hoa for one week.",
          "sub": "Cùng theo cô Hoa trong một tuần."
        }
      ],
      "ref": "intro,p17"
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai · Vì sao đổi?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Nghị quyết 198/2025/QH15",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l2:Resolution",
            "hl": [
              {
                "text": "198/2025",
                "at": "l2:one nine eight"
              }
            ]
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "thông qua 17/5/2025",
            "x": 4036,
            "y": 250,
            "size": 42,
            "at": "l2:May"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Từ 01/01/2026: bỏ khoán",
            "x": 3996,
            "y": 330,
            "size": 52,
            "at": "l3:January",
            "color": "accent",
            "hl": [
              {
                "text": "bỏ khoán",
                "at": "l3:presumptive"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Lệ phí môn bài: chấm dứt",
            "x": 3996,
            "y": 410,
            "size": 48,
            "at": "l4:licence"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Luật QLT 108: từ 01/7/2026",
            "x": 3996,
            "y": 490,
            "size": 48,
            "at": "l5:July"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Điều 10 Nghị quyết 198/2025/QH15; Luật Quản lý thuế 108/2025/QH15 (theo Thư viện Pháp luật)",
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
          "say": "First stop: Monday. Why is everyone at the market talking tax?",
          "sub": "Chặng một: thứ Hai. Sao cả chợ bàn chuyện thuế?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Resolution one nine eight of twenty twenty five, passed on the seventeenth of May.",
          "sub": "Nghị quyết 198/2025/QH15, Quốc hội thông qua ngày 17/5/2025.",
          "keys": [
            "Nghị quyết 198/2025/QH15"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article ten: from the first of January twenty twenty six, no more presumptive tax.",
          "sub": "Điều 10: từ 01/01/2026, hộ kinh doanh không áp dụng khoán thuế nữa.",
          "keys": [
            "không áp dụng khoán thuế"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The business licence fee also ends from that day.",
          "sub": "Lệ phí môn bài cũng chấm dứt từ ngày đó.",
          "keys": [
            "Lệ phí môn bài"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then the Tax Administration Law, number one oh eight, took effect on the first of July twenty twenty six.",
          "sub": "Rồi Luật Quản lý thuế 108/2025/QH15 có hiệu lực từ 01/7/2026."
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
            "id": "c-il",
            "t": "illus",
            "name": "receipt",
            "x": 4896,
            "y": 160,
            "size": 110,
            "at": "l1:declare"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Tự khai doanh thu theo kỳ",
            "x": 5026,
            "y": 170,
            "size": 44,
            "at": "l1:declare",
            "hl": [
              {
                "text": "Tự khai",
                "at": "l1:declare"
              }
            ]
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "Giữ chứng từ",
            "x": 5026,
            "y": 250,
            "size": 44,
            "at": "l2:documents"
          },
          {
            "id": "c-7",
            "t": "text",
            "text": "Tự theo dõi hạn nộp",
            "x": 5026,
            "y": 330,
            "size": 44,
            "at": "l2:deadlines"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Vé tháng hết, xe buýt vẫn chạy",
            "x": 4896,
            "y": 450,
            "size": 40,
            "at": "l3:bus",
            "color": "coral",
            "hl": [
              {
                "text": "xe buýt vẫn chạy",
                "at": "l3:bus"
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
          "say": "Before, one fixed amount a year. Now you declare your revenue each period.",
          "sub": "Trước, mỗi năm một mức khoán. Nay phải tự khai doanh thu theo kỳ.",
          "keys": [
            "tự khai doanh thu theo kỳ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "You keep your documents, and you watch the deadlines yourself.",
          "sub": "Tự giữ chứng từ, tự theo dõi hạn nộp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Like losing your monthly bus pass. The bus still runs, you just pay each ride.",
          "sub": "Như mất vé tháng: xe buýt vẫn chạy, chỉ là trả từng chuyến.",
          "keys": [
            "xe buýt vẫn chạy"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "Bỏ khoán nghĩa là gì?",
        "wrong": "Lệnh buộc hộ lên công ty",
        "right": "Đổi cách nộp thuế, mô hình do bạn chọn",
        "wrongIllus": "office-building",
        "rightIllus": "receipt"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "No presumptive tax means: become a company? No.",
          "sub": "Bỏ khoán là phải lên công ty? Không.",
          "keys": [
            "phải lên công ty"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It changes how you pay. The model is your choice.",
          "sub": "Chỉ đổi cách nộp thuế. Mô hình do bạn chọn.",
          "keys": [
            "do bạn chọn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p4"
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba · Cộng doanh thu",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday",
            "hl": [
              {
                "text": "Cộng doanh thu",
                "at": "l3:add up"
              }
            ]
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 130,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "think"
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
                "abacus",
                "notebook"
              ]
            },
            "at": "l1:Thảo",
            "caption": "Thứ Ba · quán vãn khách",
            "icon": "abacus"
          },
          {
            "id": "d-12",
            "t": "text",
            "text": "12 tháng → 1 con số",
            "x": 5964,
            "y": 170,
            "size": 56,
            "at": "l3:whole year",
            "color": "accent",
            "hl": [
              {
                "text": "1 con số",
                "at": "l4:one number"
              }
            ]
          },
          {
            "id": "d-c",
            "t": "text",
            "text": "“Cái cân của chợ”",
            "x": 5964,
            "y": 260,
            "size": 48,
            "at": "l4:scale",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Tuesday. Enter Thảo, the accountant next door, with a calculator.",
          "sub": "Chặng hai: thứ Ba. Đây là Thảo, hàng xóm làm kế toán, kè kè máy tính.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, should I open a company right away, to keep up?",
          "sub": "Thảo ơi, cô có nên mở công ty ngay cho kịp không?",
          "face": "worried",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "First, let's add up your stall's revenue for the whole year.",
          "sub": "Trước hết, mình cộng doanh thu cả năm của quán đã cô.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One number, like the scale at the market. Everything else weighs on it.",
          "sub": "Một con số, như cái cân của chợ. Mọi lựa chọn sau đều đặt lên đó.",
          "keys": [
            "Một con số"
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
      "ref": "p3,p8"
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
              "d-g1",
              "d-g3"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-b1",
            "t": "box",
            "x": 5964,
            "y": 340,
            "w": 820,
            "h": 90,
            "at": "l1:five hundred",
            "stroke": 4
          },
          {
            "id": "d-g1",
            "t": "text",
            "text": "≤ 500 triệu: không nộp",
            "x": 5994,
            "y": 352,
            "size": 50,
            "at": "l1:five hundred+200",
            "hl": [
              {
                "text": "không nộp",
                "at": "l1:neither"
              }
            ]
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 5964,
            "y": 450,
            "w": 820,
            "h": 90,
            "at": "l2:three billion",
            "stroke": 4
          },
          {
            "id": "d-g2",
            "t": "text",
            "text": "500 triệu – 3 tỷ: tỷ lệ",
            "x": 5994,
            "y": 462,
            "size": 50,
            "at": "l2:three billion+200"
          },
          {
            "id": "d-b3",
            "t": "box",
            "x": 5964,
            "y": 560,
            "w": 820,
            "h": 90,
            "at": "l3:above",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "d-g3",
            "t": "text",
            "text": "> 3 tỷ: 17% thu nhập",
            "x": 5994,
            "y": 572,
            "size": 50,
            "at": "l3:above+200",
            "color": "coral",
            "hl": [
              {
                "text": "17%",
                "at": "l3:seventeen"
              }
            ]
          },
          {
            "id": "d-p4",
            "t": "text",
            "text": "= doanh thu − chi phí hợp lý",
            "x": 6864,
            "y": 670,
            "size": 40,
            "at": "l4:minus"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, giải đáp 02/01/2026",
            "x": 5964,
            "y": 735,
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
          "say": "From twenty twenty six, five hundred million a year or less: neither income tax nor VAT.",
          "sub": "Từ 2026, doanh thu từ 500 triệu/năm trở xuống: không nộp thuế thu nhập cá nhân lẫn thuế giá trị gia tăng.",
          "keys": [
            "500 triệu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Above that, up to three billion: a rate on the part above five hundred million, or deduction if eligible.",
          "sub": "Trên đó đến 3 tỷ: tính theo tỷ lệ trên phần vượt 500 triệu, hoặc khấu trừ nếu đủ điều kiện.",
          "keys": [
            "phần vượt 500 triệu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And above three billion: seventeen percent of taxable income.",
          "sub": "Còn trên 3 tỷ: thuế thu nhập cá nhân bằng 17% thu nhập tính thuế.",
          "keys": [
            "17%"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That is revenue minus reasonable costs, and VAT must use the deduction method.",
          "sub": "Tức doanh thu trừ chi phí hợp lý, và thuế giá trị gia tăng bắt buộc theo phương pháp khấu trừ.",
          "keys": [
            "chi phí hợp lý"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So at the top, every cost you write down really counts.",
          "sub": "Nên ở nhóm này, ghi chép chi phí đầy đủ ảnh hưởng trực tiếp đến số thuế.",
          "keys": [
            "ghi chép chi phí đầy đủ"
          ]
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s08",
      "module": "BRK-03",
      "data": {
        "value": 500,
        "from": 100,
        "suffix": " triệu",
        "label": "gấp năm lần ngưỡng cũ 100 triệu đồng/năm",
        "illus": "money-bag"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The old line? One hundred million a year.",
          "sub": "Ngưỡng cũ? 100 triệu đồng/năm.",
          "keys": [
            "100 triệu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Now five hundred million. Five times higher.",
          "sub": "Nay là 500 triệu, cao gấp năm lần.",
          "keys": [
            "gấp năm lần"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "whoosh"
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
            "id": "d-k",
            "t": "text",
            "text": "Biết doanh thu năm trước đã",
            "x": 6864,
            "y": 720,
            "size": 36,
            "at": "l3:first",
            "color": "accent",
            "hl": [
              {
                "text": "doanh thu năm",
                "at": "l3:revenue"
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
          "say": "So under the line, I may pay nothing. But I still track sales?",
          "sub": "Vậy dưới ngưỡng thì có khi cô chẳng nộp. Mà vẫn phải theo dõi doanh thu à?",
          "face": "surprised"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Yes, Cô Hoa. Every year, to know which group you are in.",
          "sub": "Vâng cô. Năm nào cũng theo dõi, để biết mình ở nhóm nào.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So the first job is to know your yearly revenue. Every later choice rests on it.",
          "sub": "Việc đầu tiên là biết doanh thu cả năm, vì mọi lựa chọn sau đều dựa vào đó.",
          "keys": [
            "biết doanh thu cả năm"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Tư · Sổ và hoá đơn",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8792,
            "y": 130,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "ledger",
                "receipt"
              ]
            },
            "at": "l1:books",
            "caption": "Thứ Tư · tối ở nhà cô Hoa",
            "icon": "ledger"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Thông tư 152/2025/TT-BTC",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l4:Circular",
            "hl": [
              {
                "text": "152/2025",
                "at": "l4:one five two"
              }
            ]
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "ký 31/12/2025, hiệu lực 01/01/2026",
            "x": 7972,
            "y": 245,
            "size": 34,
            "at": "l4:effect"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Sổ S1a-HKD: hộ không nộp",
            "x": 7932,
            "y": 310,
            "size": 48,
            "at": "l5:S one a",
            "color": "accent",
            "hl": [
              {
                "text": "S1a-HKD",
                "at": "l5:S one a"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Sổ chi tiết: thu, chi, hàng, tiền",
            "x": 7932,
            "y": 390,
            "size": 42,
            "at": "l6:revenue"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: TT 152/2025/TT-BTC (Thư viện Pháp luật)",
            "x": 7932,
            "y": 460,
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
          "say": "Third stop: Wednesday night. New homework: books and invoices.",
          "sub": "Chặng ba: tối thứ Tư. Bài tập mới: sổ sách và hoá đơn.",
          "keys": [
            "sổ sách và hoá đơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Lan, Cô Hoa's helper at the stall. She writes faster than she talks.",
          "sub": "Còn đây là Lan, phụ quán cô Hoa. Viết nhanh hơn nói.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Excuse me, Cô Hoa. Which notebook do we use now?",
          "sub": "Dạ, cho cháu hỏi, giờ mình ghi vào sổ nào ạ?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Circular one five two, issued at the end of twenty twenty five, in effect from January twenty twenty six.",
          "sub": "Thông tư 152/2025/TT-BTC, ban hành 31/12/2025, hiệu lực từ 01/01/2026.",
          "keys": [
            "Thông tư 152/2025/TT-BTC"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Households paying neither tax use book S one a, the simplest one.",
          "sub": "Hộ không nộp cả hai thuế dùng sổ S1a-HKD, loại đơn giản nhất.",
          "keys": [
            "sổ S1a-HKD"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Other books track revenue, costs, goods and cash in detail.",
          "sub": "Các sổ khác ghi chi tiết doanh thu, chi phí, hàng hoá và tiền."
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
            "id": "e-il",
            "t": "illus",
            "name": "receipt",
            "x": 7932,
            "y": 510,
            "size": 90,
            "at": "l1:invoices"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Từ 01/7/2026: NĐ 254, TT 91",
            "x": 8042,
            "y": 520,
            "size": 46,
            "at": "l1:July"
          },
          {
            "id": "e-4b",
            "t": "text",
            "text": "thay NĐ 123/2020, NĐ 70/2025",
            "x": 8042,
            "y": 590,
            "size": 36,
            "at": "l1:replace",
            "color": "muted"
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "Trên 1 tỷ: hoá đơn điện tử",
            "x": 8832,
            "y": 660,
            "size": 46,
            "at": "l2:billion",
            "color": "coral",
            "hl": [
              {
                "text": "hoá đơn điện tử",
                "at": "l2:electronic"
              }
            ]
          },
          {
            "id": "e-5b",
            "t": "text",
            "text": "có mã thuế / máy tính tiền",
            "x": 8832,
            "y": 722,
            "size": 34,
            "at": "l3:cash register"
          },
          {
            "id": "e-src2",
            "t": "text",
            "text": "Nguồn: NĐ 254/2026/NĐ-CP, TT 91/2026/TT-BTC (giải đáp 7/2026)",
            "x": 7932,
            "y": 690,
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
          "say": "Invoices: from July twenty twenty six, Decree two five four and Circular ninety one replace the old decrees.",
          "sub": "Hoá đơn: từ 01/7/2026, Nghị định 254/2026 và Thông tư 91/2026 thay cho Nghị định 123/2020, 70/2025.",
          "keys": [
            "Nghị định 254/2026"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Households above one billion a year must use electronic invoices.",
          "sub": "Hộ có doanh thu năm trên 1 tỷ đồng phải dùng hoá đơn điện tử.",
          "keys": [
            "trên 1 tỷ đồng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "With a tax office code, or generated from a cash register.",
          "sub": "Có mã của cơ quan thuế, hoặc khởi tạo từ máy tính tiền."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "How to write the books, and when to issue invoices? That is lesson two of this series.",
          "sub": "Ghi sổ ra sao, lúc nào lập hoá đơn? Có ở bài thứ hai của chuỗi.",
          "keys": [
            "bài thứ hai"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Lên công ty là hết rắc rối thuế?",
        "illus": "thinking-face"
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
          "say": "Become a company, and all the tax trouble is gone?",
          "sub": "Lên công ty là hết rắc rối thuế?",
          "keys": [
            "hết rắc rối thuế"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p13"
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
            "text": "④ Thứ Năm · Hộ hay công ty?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:workshop"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 920,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "shop",
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
              "props": [
                "carpentry-saw",
                "wood"
              ]
            },
            "at": "l1:workshop",
            "caption": "Thứ Năm · xưởng mộc của Dũng",
            "icon": "carpentry-saw"
          },
          {
            "id": "f-h",
            "t": "text",
            "text": "Hộ: toàn bộ tài sản",
            "x": 60,
            "y": 1260,
            "size": 52,
            "at": "l3:all",
            "color": "coral",
            "hl": [
              {
                "text": "toàn bộ tài sản",
                "at": "l3:all"
              }
            ]
          },
          {
            "id": "f-c",
            "t": "text",
            "text": "TNHH, cổ phần: vốn đã góp",
            "x": 60,
            "y": 1350,
            "size": 48,
            "at": "l4:capital",
            "color": "accent",
            "hl": [
              {
                "text": "vốn đã góp",
                "at": "l4:contributed"
              }
            ]
          },
          {
            "id": "f-cn",
            "t": "text",
            "text": "+ chi nhánh, văn phòng",
            "x": 60,
            "y": 1430,
            "size": 44,
            "at": "l5:branches"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: giải đáp dẫn Nghị định 168/2025/NĐ-CP",
            "x": 60,
            "y": 1500,
            "size": 26,
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
          "say": "Fourth stop: Thursday, at Dũng's carpentry workshop. Thảo drops by.",
          "sub": "Chặng bốn: thứ Năm, ở xưởng mộc của Dũng. Thảo ghé qua."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Orders for wardrobes keep coming. A company sounds grander, right?",
          "sub": "Đơn đóng tủ về đều. Lên công ty nghe oai hơn chứ?",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The real difference: a household owner answers with all their assets.",
          "sub": "Khác biệt thật: chủ hộ chịu trách nhiệm bằng toàn bộ tài sản của mình.",
          "keys": [
            "toàn bộ tài sản"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In a limited liability or joint stock company, only up to the capital contributed.",
          "sub": "Công ty trách nhiệm hữu hạn, cổ phần: chỉ trong phạm vi số vốn đã góp.",
          "keys": [
            "số vốn đã góp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A company can also open branches and offices to grow.",
          "sub": "Doanh nghiệp còn lập được chi nhánh, văn phòng để mở rộng."
        }
      ],
      "ref": "p11"
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
          }
        ],
        "items": [
          {
            "id": "f-hh",
            "t": "text",
            "text": "Hộ: thuế bớt phức tạp",
            "x": 60,
            "y": 1570,
            "size": 48,
            "at": "l1:simpler",
            "hl": [
              {
                "text": "bớt phức tạp",
                "at": "l1:simpler"
              }
            ]
          },
          {
            "id": "f-hh2",
            "t": "text",
            "text": "hợp quy mô nhỏ, đơn giản",
            "x": 100,
            "y": 1635,
            "size": 40,
            "at": "l1:small",
            "color": "muted"
          },
          {
            "id": "f-dn",
            "t": "text",
            "text": "Doanh nghiệp: vừa và lớn",
            "x": 60,
            "y": 1700,
            "size": 48,
            "at": "l2:medium"
          },
          {
            "id": "f-dn2",
            "t": "text",
            "text": "cần cơ cấu chặt chẽ",
            "x": 100,
            "y": 1765,
            "size": 40,
            "at": "l2:tight",
            "color": "muted"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Áo mưa hay áo giáp?",
            "x": 960,
            "y": 1770,
            "size": 50,
            "at": "l3:raincoat",
            "color": "coral",
            "hl": [
              {
                "text": "Áo mưa",
                "at": "l3:raincoat"
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
          "say": "In return, a household's tax duties are simpler. It fits a small, simple setup.",
          "sub": "Đổi lại, thủ tục thuế của hộ bớt phức tạp, hợp với quy mô nhỏ, cơ cấu đơn giản.",
          "keys": [
            "bớt phức tạp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A company suits medium and large businesses that need a tight structure.",
          "sub": "Doanh nghiệp hợp quy mô vừa và lớn, cần cơ cấu tổ chức chặt chẽ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Limited liability is a raincoat, not armour. And a raincoat needs folding.",
          "sub": "Trách nhiệm hữu hạn là áo mưa, không phải áo giáp. Mà áo mưa cũng phải gấp cất.",
          "keys": [
            "áo mưa, không phải áo giáp"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s15",
      "module": "DLG-01",
      "data": {
        "set": "shop",
        "label": "Thứ Năm · xưởng mộc",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "thao",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Lên công ty cho đỡ rắc rối thuế",
          "why": "Công ty có ưu điểm về giới hạn trách nhiệm, mở rộng, nhưng kéo theo thủ tục, sổ sách riêng.",
          "rule": "So trên quy mô và kế hoạch của chính mình"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Company means professional, and no more tax headaches. I'm registering today!",
          "sub": "Công ty là bài bản, hết đau đầu thuế. Em đăng ký luôn hôm nay!",
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
          "say": "A company has its own procedures and its own books. No free lunch at this market.",
          "sub": "Công ty có thủ tục riêng, sổ sách riêng. Chợ này không có bữa trưa miễn phí.",
          "keys": [
            "thủ tục riêng, sổ sách riêng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "First my revenue, my plans, my risk. Then I choose.",
          "sub": "Trước hết xem doanh thu, kế hoạch, rủi ro của em. Rồi mới chọn.",
          "phase": "redo",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Compare on your own size and plans, not on rumours.",
          "sub": "Đúng. So trên quy mô và kế hoạch của mình, đừng theo tin đồn.",
          "phase": "redo",
          "keys": [
            "đừng theo tin đồn"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "text": "⑤ Thứ Sáu · Nếu chuyển đổi",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2888,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up",
                "classical-building"
              ]
            },
            "at": "l1:Friday",
            "caption": "Thứ Sáu · bàn làm việc của Thảo",
            "icon": "page-facing-up"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Điều 27 NĐ 168/2025",
            "x": 2028,
            "y": 1260,
            "size": 52,
            "at": "l3:Article",
            "hl": [
              {
                "text": "Điều 27",
                "at": "l3:twenty seven"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Nộp: đăng ký kinh doanh tỉnh",
            "x": 2028,
            "y": 1340,
            "size": 44,
            "at": "l3:provincial"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "+ bản sao giấy đăng ký hộ",
            "x": 2028,
            "y": 1410,
            "size": 44,
            "at": "l4:copy"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Có giấy doanh nghiệp → hộ dừng",
            "x": 2028,
            "y": 1490,
            "size": 42,
            "at": "l5:stop",
            "color": "coral",
            "hl": [
              {
                "text": "hộ dừng",
                "at": "l5:stop"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Điều 27 Nghị định 168/2025/NĐ-CP về đăng ký doanh nghiệp",
            "x": 2028,
            "y": 1560,
            "size": 26,
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
          "say": "Fifth stop: Friday. Dũng asks Thảo: if I do convert, how?",
          "sub": "Chặng năm: thứ Sáu. Dũng hỏi Thảo: nếu chuyển thật thì làm sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "There's an article for that, Dũng. Let me show you.",
          "sub": "Có điều luật riêng đấy Dũng. Chị chỉ cho.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article twenty seven of Decree one six eight: file at the provincial business registration office.",
          "sub": "Điều 27 Nghị định 168/2025: nộp hồ sơ tại cơ quan đăng ký kinh doanh cấp tỉnh, nơi đặt trụ sở chính.",
          "keys": [
            "Điều 27 Nghị định 168/2025"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Attach a copy of the household business registration certificate.",
          "sub": "Kèm bản sao Giấy chứng nhận đăng ký hộ kinh doanh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Once the company certificate is issued, the household business must stop.",
          "sub": "Khi doanh nghiệp được cấp giấy chứng nhận, hộ kinh doanh không được tiếp tục hoạt động.",
          "keys": [
            "không được tiếp tục hoạt động"
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-il",
            "t": "illus",
            "name": "shield",
            "x": 2028,
            "y": 1600,
            "size": 90,
            "at": "l1:exempts"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Miễn thuế TNDN 3 năm",
            "x": 2138,
            "y": 1610,
            "size": 48,
            "at": "l1:three years",
            "color": "accent",
            "hl": [
              {
                "text": "3 năm",
                "at": "l1:three years"
              }
            ]
          },
          {
            "id": "g-5b",
            "t": "text",
            "text": "DN nhỏ và vừa, từ lần đầu",
            "x": 2138,
            "y": 1680,
            "size": 40,
            "at": "l1:first"
          },
          {
            "id": "g-6",
            "t": "text",
            "text": "Loại hình, vốn, tên → chuỗi thành lập",
            "x": 2028,
            "y": 1770,
            "size": 40,
            "at": "l2:series",
            "color": "muted"
          },
          {
            "id": "g-src2",
            "t": "text",
            "text": "Nguồn: Nghị quyết 198/2025/QH15",
            "x": 2928,
            "y": 1780,
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
          "say": "Resolution one nine eight also exempts small and medium firms from corporate tax for three years, from first registration.",
          "sub": "Nghị quyết 198 còn miễn thuế thu nhập doanh nghiệp 3 năm cho doanh nghiệp nhỏ và vừa, từ lần đầu được cấp giấy.",
          "keys": [
            "miễn thuế thu nhập doanh nghiệp 3 năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Company type, capital and name? See our series on registering a company.",
          "sub": "Chọn loại hình, vốn điều lệ, tên công ty: xem chuỗi thành lập công ty.",
          "keys": [
            "chuỗi thành lập công ty"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s18",
      "module": "BRK-08",
      "data": {
        "title": "Đi đúng thứ tự",
        "points": [
          {
            "label": "Bước 1",
            "sub": "Hiểu thay đổi thuế",
            "illus": "receipt"
          },
          {
            "label": "Bước 2",
            "sub": "Ghi sổ, hoá đơn",
            "illus": "ledger"
          },
          {
            "label": "Bước 3",
            "sub": "So hộ với công ty",
            "illus": "balance-scale"
          },
          {
            "label": "Bước 4",
            "sub": "Thủ tục chuyển đổi",
            "illus": "office-building"
          }
        ],
        "current": 1
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sunday: map the road. Tax changes, then books and invoices.",
          "sub": "Chủ nhật: vẽ lộ trình. Hiểu thuế, rồi ghi sổ và hoá đơn.",
          "keys": [
            "vẽ lộ trình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then compare household and company, and only then the conversion steps.",
          "sub": "Rồi so hộ với công ty, sau cùng mới đến thủ tục chuyển đổi."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p17"
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
            "text": "⑥ Chủ nhật · Chọn đường",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sunday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4856,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "spiral-calendar",
                "ledger"
              ]
            },
            "at": "l1:Sunday",
            "caption": "Chủ nhật · nhà cô Hoa",
            "icon": "spiral-calendar"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Hộ nhỏ: làm tốt 2 bước đầu",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l4:first two",
            "color": "accent",
            "hl": [
              {
                "text": "2 bước đầu",
                "at": "l4:first two"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Lớn, muốn mở rộng:",
            "x": 3996,
            "y": 1350,
            "size": 46,
            "at": "l5:expand"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "đọc tiếp bước 3, 4",
            "x": 4036,
            "y": 1420,
            "size": 46,
            "at": "l5:three and four",
            "hl": [
              {
                "text": "bước 3, 4",
                "at": "l5:three and four"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "giới hạn trách nhiệm bằng vốn",
            "x": 3996,
            "y": 1500,
            "size": 40,
            "at": "l5:limit",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sunday. Cô Hoa and Thảo look at the road map together.",
          "sub": "Chủ nhật. Cô Hoa và Thảo cùng xem lộ trình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "My stall is small, and I'm not opening a second one. So which steps?",
          "sub": "Quán cô nhỏ, cũng chưa định mở thêm. Vậy cô cần bước nào?",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "For you, the first two. Know the tax, and keep good books.",
          "sub": "Với cô, hai bước đầu. Nắm thuế, ghi sổ cho tốt.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Many small households only need to do the first two steps well.",
          "sub": "Nhiều hộ nhỏ chỉ cần làm tốt hai bước đầu.",
          "keys": [
            "hai bước đầu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Big revenue, plans to expand, or want to limit liability? Read steps three and four before deciding.",
          "sub": "Doanh thu lớn, muốn mở rộng, hay muốn giới hạn trách nhiệm bằng vốn góp? Đọc tiếp bước ba, bốn rồi hãy quyết.",
          "keys": [
            "bước ba, bốn"
          ]
        }
      ],
      "ref": "p17"
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
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Thứ Hai sau · Quán bún",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6824,
            "y": 1220,
            "w": 720,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "steaming-bowl",
                "notebook"
              ]
            },
            "at": "l1:Monday",
            "caption": "Thứ Hai sau · quán bún đầu chợ",
            "icon": "steaming-bowl"
          },
          {
            "id": "i-nb",
            "t": "illus",
            "name": "notebook",
            "x": 5964,
            "y": 1250,
            "size": 110,
            "at": "l2:twelve"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "12 tháng: đã cộng ✓",
            "x": 6094,
            "y": 1265,
            "size": 52,
            "at": "l2:twelve",
            "color": "accent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Biết nhóm của mình",
            "x": 6094,
            "y": 1350,
            "size": 46,
            "at": "l3:group"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Liệu doanh thu, gắp mô hình”",
            "x": 5964,
            "y": 1490,
            "size": 50,
            "at": "l5:revenue",
            "color": "accent",
            "hl": [
              {
                "text": "Liệu doanh thu",
                "at": "l5:revenue"
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
          "say": "Monday again. Same market gate, same noodle stall.",
          "sub": "Lại thứ Hai. Vẫn đầu chợ ấy, quán bún ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Twelve months of sales, added up from my notebook and bank statements.",
          "sub": "Doanh thu mười hai tháng, cô cộng đủ từ sổ tay và sao kê rồi.",
          "face": "happy",
          "pose": "hold"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Now I know my group. No company yet, but I'm not guessing anymore.",
          "sub": "Giờ cô biết mình ở nhóm nào. Chưa lên công ty, nhưng hết đoán mò.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "And I'll weigh my workshop first, before any company.",
          "sub": "Còn em sẽ cân xưởng của em trước, rồi mới tính công ty.",
          "pose": "think"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Check the rice before the sauce. Here: check the revenue, then pick the model.",
          "sub": "“Liệu cơm gắp mắm.” Ở đây: liệu doanh thu, rồi mới gắp mô hình.",
          "keys": [
            "liệu doanh thu"
          ]
        }
      ],
      "ref": "p3,p8"
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
            "at": "l1:three",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2",
            "fit": "D",
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
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Ba điều · làm ngay",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7464,
            "y": 40,
            "at": "l2:revenue"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 40,
            "at": "l3:books"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1560,
            "y": 1130,
            "at": "l4:compare"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Cộng doanh thu 12 tháng",
            "x": 7932,
            "y": 1270,
            "size": 52,
            "at": "l5:twelve",
            "color": "accent",
            "hl": [
              {
                "text": "12 tháng",
                "at": "l5:twelve"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "từ sổ tay hoặc sao kê",
            "x": 7972,
            "y": 1350,
            "size": 44,
            "at": "l5:statements"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Đọc bài: thuế từ 2026",
            "x": 7932,
            "y": 1440,
            "size": 46,
            "at": "l6:next"
          },
          {
            "id": "j-src1",
            "t": "text",
            "text": "Bài để tham khảo, nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1730,
            "size": 26,
            "at": "l6",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "j-src2",
            "t": "text",
            "text": "Quy định thuế, hoá đơn, đăng ký có thể đã được sửa đổi — kiểm văn bản mới nhất trước khi áp dụng.",
            "x": 7932,
            "y": 1770,
            "size": 26,
            "at": "l6",
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
          "say": "So, three things.",
          "sub": "Tóm lại, ba điều."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: ending presumptive tax changes how you pay. Your yearly revenue sets your group.",
          "sub": "Một: bỏ khoán là đổi cách nộp thuế. Doanh thu cả năm quyết định nhóm của bạn.",
          "keys": [
            "Doanh thu cả năm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: learn the books and invoices.",
          "sub": "Hai: tập ghi sổ và lập hoá đơn.",
          "keys": [
            "ghi sổ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: compare household and company on your own size, then decide.",
          "sub": "Ba: so hộ với công ty trên quy mô của mình, rồi mới quyết.",
          "keys": [
            "quy mô của mình"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Today: add up the last twelve months of sales from your notebook or bank statements.",
          "sub": "Việc làm ngay: cộng doanh thu mười hai tháng gần nhất từ sổ tay hoặc sao kê.",
          "keys": [
            "Việc làm ngay"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next: what changes in household tax. Rules may have changed since, so check the latest texts.",
          "sub": "Bài tiếp: thuế hộ kinh doanh thay đổi gì. Quy định có thể đã sửa đổi, hãy kiểm văn bản mới nhất.",
          "keys": [
            "kiểm văn bản mới nhất"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s22",
      "module": "QUIZ-01",
      "data": {
        "q": "A neighbour says presumptive tax ending means everyone needs a company, how should you reply?",
        "options": [
          "Explain that the change is about tax declaration, and the model is your choice",
          "Tell him that households will be banned from selling food from next year",
          "Agree and register a company tomorrow without checking your yearly revenue"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "thinking-face",
        "why": "Bỏ khoán là chuyện khai thuế; mô hình do bạn chọn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A neighbour says presumptive tax ending means everyone needs a company, how should you reply?",
          "sub": "Một người hàng xóm nói bỏ khoán thì ai cũng phải lập công ty, bạn nên đáp thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Explain that the change is about tax declaration, and the model is your choice.",
          "sub": "Giải thích rằng thay đổi là về cách khai thuế, còn mô hình do mình chọn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Presumptive tax ending is not an order to open a company.",
          "sub": "Bỏ khoán không phải lệnh buộc lên công ty."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[9]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Hộ kinh doanh có nên lên công ty?"
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
  "notes": "#145 bài MỚI (bài tổng chuỗi household-business-owners-upgrading) theo hạt nhân (#136) + biến thể edit (#144). HOOK-21 (đoán sai): “Bỏ khoán → phải lên công ty ngay?” A/B, lặng 1,5 s rồi lật (p4). Dòng thời gian: MỘT TUẦN của cô Hoa (quán bún đầu chợ, vai chị Hồng p3): T2 nghe tin, Dũng “lên công ty luôn” → T2 vì sao (p1, p2; BRK-04 p4) → T3 Thảo cộng doanh thu (p3, p5, p6, p8; BRK-03 500/100 triệu p7) → T4 sổ, hoá đơn với Lan (p9, p10) → BRK-07 rehook → T5 xưởng mộc của Dũng: hộ/công ty (p11, p12), “Khoan đã!” (p13, p14) → T6 Điều 27 NĐ 168, miễn TNDN 3 năm (p15, p16) → CN BRK-08 lộ trình + chọn đường (p17) → T2 sau khép vòng → tóm tắt + lưu ý #133. Nhân vật (w145/_series/household-business-owners-upgrading.md): Cô Hoa, Dũng, Thảo, Lan. Ca dao neo: “Liệu cơm gắp mắm” → “liệu doanh thu, gắp mô hình”. Số chỉ từ bài: NQ 198/2025/QH15 (17/5/2025, Đ10, 01/01/2026), Luật QLT 108/2025/QH15 (01/7/2026), 500 triệu, 3 tỷ, 17%, 100 triệu, TT 152/2025 (31/12/2025), S1a-HKD, NĐ 254/2026, TT 91/2026, NĐ 123/2020, NĐ 70/2025, 1 tỷ, Đ27 NĐ 168/2025, 3 năm. Câu đố questions[9].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
