// vn-ordinary-passport-rules--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "vn-ordinary-passport-rules--w01",
  "unit": {
    "audience": "emigrants-passport-and-exit",
    "slug": "vn-ordinary-passport-rules",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Hộ chiếu phổ thông theo luật hiện hành có thời hạn và đặc điểm gì?",
    "series": "Hộ chiếu và xuất cảnh trước ngày đi xa — cho người Việt sắp ra nước ngoài sống, làm việc dài hạn"
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
          },
          {
            "at": "l2",
            "fit": [
              "a-ab",
              "a-bb"
            ],
            "zoom": 1.2,
            "ms": 700
          },
          {
            "at": "l3:end",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-q1",
            "t": "text",
            "text": "Hộ chiếu phổ thông 10 năm:",
            "x": 60,
            "y": 150,
            "size": 52,
            "at": "l1:ten-year"
          },
          {
            "id": "a-q2",
            "t": "text",
            "text": "gia hạn mấy lần?",
            "x": 60,
            "y": 225,
            "size": 70,
            "at": "l1:how many",
            "color": "accent",
            "hl": [
              {
                "text": "mấy lần",
                "at": "l1:how many times"
              }
            ]
          },
          {
            "id": "a-ab",
            "t": "box",
            "x": 60,
            "y": 340,
            "w": 760,
            "h": 100,
            "at": "l2:once",
            "stroke": 5
          },
          {
            "id": "a-a",
            "t": "text",
            "text": "A · Một lần, ≤ 3 năm",
            "x": 90,
            "y": 358,
            "size": 50,
            "at": "l2:once+200"
          },
          {
            "id": "a-bb",
            "t": "box",
            "x": 60,
            "y": 470,
            "w": 760,
            "h": 100,
            "at": "l2:not even",
            "stroke": 5
          },
          {
            "id": "a-b",
            "t": "text",
            "text": "B · Không lần nào",
            "x": 90,
            "y": 488,
            "size": 50,
            "at": "l2:not even+200"
          },
          {
            "id": "a-th",
            "t": "illus",
            "name": "thinking-face",
            "x": 700,
            "y": 610,
            "size": 90,
            "at": "l3:lock"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A ten-year ordinary passport. How many times can you extend it?",
          "sub": "Hộ chiếu phổ thông mười năm. Được gia hạn mấy lần?",
          "keys": [
            "mấy lần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: once, for up to three years. B: not even once.",
          "sub": "A: một lần, tối đa ba năm. B: không lần nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Lock in your answer. We'll flip it in a minute.",
          "sub": "Chốt đáp án đi. Lát nữa ta lật.",
          "keys": [
            "Chốt đáp án"
          ]
        }
      ],
      "beats": {
        "after": 1200
      },
      "ref": "p1,p2"
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "blue-book"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
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
            "at": "l1",
            "caption": "Tối thứ Hai · phòng khách",
            "icon": "laptop"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Tốt gỗ hơn tốt nước sơn”",
            "x": 60,
            "y": 640,
            "size": 52,
            "at": "l5:good wood",
            "color": "accent",
            "hl": [
              {
                "text": "Tốt gỗ",
                "at": "l5:good wood"
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
          "say": "She's joining her husband abroad, and her passport has four months left.",
          "sub": "Thảo sắp sang nước ngoài đoàn tụ với chồng; hộ chiếu chỉ còn bốn tháng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Tonight I start a new passport. But chip or no chip? New model or old?",
          "sub": "Tối nay em làm cuốn mới. Mà có chip hay không? Mẫu mới hay cũ?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Questions pile up like unfolded laundry. Let's fold them one by one.",
          "sub": "Câu hỏi chất đống như quần áo chưa gấp. Gấp từng cái nào."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: good wood beats good paint. Keep that for later.",
          "sub": "Ông bà dặn: “Tốt gỗ hơn tốt nước sơn.” Giữ câu này, lát dùng.",
          "keys": [
            "Tốt gỗ hơn tốt nước sơn"
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
            "text": "Thời hạn và đặc điểm gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:validity",
            "hl": [
              {
                "text": "đặc điểm",
                "at": "l1:features"
              }
            ]
          },
          {
            "id": "b-ans",
            "t": "text",
            "text": "Đáp án: B · Không lần nào",
            "x": 2028,
            "y": 160,
            "size": 60,
            "at": "l2:answer",
            "color": "accent",
            "hl": [
              {
                "text": "Không lần nào",
                "at": "l2:not even once"
              }
            ]
          },
          {
            "id": "b-a",
            "t": "text",
            "text": "A là của loại hộ chiếu khác",
            "x": 2028,
            "y": 260,
            "size": 46,
            "at": "l3:another",
            "color": "muted"
          },
          {
            "id": "b-s0b",
            "t": "box",
            "x": 2028,
            "y": 400,
            "w": 300,
            "h": 110,
            "at": "l4:validity",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-s1b",
            "t": "box",
            "x": 2358,
            "y": 400,
            "w": 300,
            "h": 110,
            "at": "l4:model",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s2b",
            "t": "box",
            "x": 2688,
            "y": 400,
            "w": 300,
            "h": 110,
            "at": "l4:chip",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s3b",
            "t": "box",
            "x": 3018,
            "y": 400,
            "w": 300,
            "h": 110,
            "at": "l4:applying",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s4b",
            "t": "box",
            "x": 3348,
            "y": 400,
            "w": 300,
            "h": 110,
            "at": "l4:fee",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "① Thời hạn",
            "x": 2048,
            "y": 428,
            "size": 42,
            "at": "l4:validity+200"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "② Mẫu mới",
            "x": 2378,
            "y": 428,
            "size": 42,
            "at": "l4:model+200"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "③ Chip",
            "x": 2708,
            "y": 428,
            "size": 42,
            "at": "l4:chip+200"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "④ Nộp hồ sơ",
            "x": 3038,
            "y": 428,
            "size": 42,
            "at": "l4:applying+200"
          },
          {
            "id": "b-s4",
            "t": "text",
            "text": "⑤ Lệ phí",
            "x": 3368,
            "y": 428,
            "size": 42,
            "at": "l4:fee+200"
          },
          {
            "id": "b-tl",
            "t": "text",
            "text": "Theo Thảo: 2 tuần",
            "x": 2028,
            "y": 570,
            "size": 56,
            "at": "l5:two weeks",
            "hl": [
              {
                "text": "2 tuần",
                "at": "l5:two weeks"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, Hệ thống Pháp luật (bài giải đáp)",
            "x": 2028,
            "y": 700,
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
          "say": "So what are the validity and features of an ordinary passport under current law?",
          "sub": "Vậy hộ chiếu phổ thông theo luật hiện hành có thời hạn và đặc điểm gì?",
          "keys": [
            "thời hạn và đặc điểm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "First, the quiz. The answer is B: not even once.",
          "sub": "Trước hết, câu đố. Đáp án là B: không lần nào.",
          "keys": [
            "không lần nào"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Option A belongs to another kind of passport. We'll meet it soon.",
          "sub": "Phương án A là của một loại hộ chiếu khác. Lát nữa sẽ gặp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five stops: validity, the new model, the chip, applying, and the fee.",
          "sub": "Năm chặng: thời hạn, mẫu mới, chip, nộp hồ sơ, và lệ phí.",
          "keys": [
            "Năm chặng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "We'll follow Thảo for two weeks, until the new book arrives.",
          "sub": "Ta theo Thảo hai tuần, cho tới ngày cuốn mới về tay."
        }
      ],
      "ref": "intro,p2"
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
            "text": "① Tối thứ Hai · Thời hạn",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 150,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "bin",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:monday",
            "caption": "Tối thứ Hai · phòng khách",
            "icon": "laptop"
          },
          {
            "id": "c-10",
            "t": "text",
            "text": "Từ đủ 14 tuổi: 10 năm",
            "x": 3996,
            "y": 160,
            "size": 50,
            "at": "l2:ten",
            "hl": [
              {
                "text": "10 năm",
                "at": "l2:ten years"
              }
            ]
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Dưới 14 tuổi: 5 năm",
            "x": 3996,
            "y": 240,
            "size": 50,
            "at": "l5:five",
            "hl": [
              {
                "text": "5 năm",
                "at": "l5:five years"
              }
            ]
          },
          {
            "id": "c-ng",
            "t": "text",
            "text": "Cả hai: không được gia hạn",
            "x": 3996,
            "y": 320,
            "size": 50,
            "at": "l5:no extension",
            "color": "coral"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Khoản 2 Điều 7 Luật XNC 2019",
            "x": 3996,
            "y": 395,
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
          "say": "Stop one, Monday night: three levels of validity.",
          "sub": "Chặng một, tối thứ Hai: ba mức thời hạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article seven, clause two: fourteen or older, ten years. The longest there is.",
          "sub": "Khoản 2 Điều 7: từ đủ 14 tuổi, 10 năm, là thời hạn dài nhất.",
          "keys": [
            "10 năm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Bin, Thảo's little brother, nine years old, peeks at the screen.",
          "sub": "Bé Bin, em trai Thảo, chín tuổi, ghé mắt vào màn hình."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "bin",
          "say": "And mine? Ten years too?",
          "sub": "Còn của con? Cũng mười năm ạ?",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Under fourteen: five years. And both say clearly: no extension.",
          "sub": "Chưa đủ 14 tuổi: 5 năm. Cả hai đều ghi rõ: không được gia hạn.",
          "keys": [
            "không được gia hạn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s04",
      "module": "BRK-10",
      "data": {
        "quote": "Hộ chiếu phổ thông: 10 năm hoặc 5 năm, không được gia hạn",
        "mark": "không được gia hạn",
        "by": "Điều 7 Luật XNC 2019 (tóm ý)",
        "illus": "blue-book"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Ten years or five. No extension.",
          "sub": "Mười năm hoặc năm năm. Không được gia hạn.",
          "keys": [
            "Không được gia hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Article seven, in short.",
          "sub": "Điều 7, tóm ý."
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
            "at": "l2",
            "fit": [
              "c-ng2",
              "c-gh"
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
            "id": "c-ng2",
            "t": "text",
            "text": "Ngoại giao, công vụ: 1–5 năm",
            "x": 3996,
            "y": 470,
            "size": 44,
            "at": "l1:diplomatic"
          },
          {
            "id": "c-gh",
            "t": "text",
            "text": "gia hạn 1 lần, ≤ 3 năm",
            "x": 3996,
            "y": 535,
            "size": 46,
            "at": "l2:once",
            "color": "accent",
            "hl": [
              {
                "text": "1 lần, ≤ 3 năm",
                "at": "l2:three years"
              }
            ]
          },
          {
            "id": "c-gth",
            "t": "text",
            "text": "Giấy thông hành: ≤ 12 tháng",
            "x": 3996,
            "y": 605,
            "size": 40,
            "at": "l3:border pass"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now the mystery option A. Diplomatic and official passports: one to five years.",
          "sub": "Giờ đến phương án A bí ẩn. Hộ chiếu ngoại giao, công vụ: 1 đến 5 năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "They can be extended once, for no more than three years. That's where A came from.",
          "sub": "Được gia hạn một lần, không quá 3 năm. Phương án A từ đây mà ra.",
          "keys": [
            "gia hạn một lần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A border pass: no more than twelve months.",
          "sub": "Giấy thông hành: không quá 12 tháng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So only passports for state work get extensions. Emigrants and workers need a new book.",
          "sub": "Vậy chỉ hộ chiếu cho công việc nhà nước mới có chuyện gia hạn; người đi định cư, đi làm phải làm cuốn mới.",
          "keys": [
            "làm cuốn mới"
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
          }
        ],
        "items": [
          {
            "id": "c-rg",
            "t": "text",
            "text": "Rút gọn: dùng 1 lần",
            "x": 4836,
            "y": 682,
            "size": 40,
            "at": "l2:one exit",
            "color": "coral",
            "hl": [
              {
                "text": "dùng 1 lần",
                "at": "l2:one exit"
              }
            ]
          },
          {
            "id": "c-rgs",
            "t": "text",
            "text": "≤ 12 tháng · luật sửa đổi 2025",
            "x": 4836,
            "y": 732,
            "size": 28,
            "at": "l1",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-take",
            "t": "text",
            "text": "Gia hạn = cuốn mới",
            "x": 3996,
            "y": 680,
            "size": 56,
            "at": "l3:new book",
            "color": "accent",
            "hl": [
              {
                "text": "cuốn mới",
                "at": "l3:new book"
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
          "say": "A passport by shortened procedure: no more than twelve months, no extension.",
          "sub": "Hộ chiếu cấp theo thủ tục rút gọn: không quá 12 tháng, không được gia hạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And after a twenty twenty-five law amending ten security laws, it's good for one exit or entry only.",
          "sub": "Theo luật sửa đổi 10 luật liên quan đến an ninh, trật tự năm 2025, loại này chỉ dùng một lần khi xuất cảnh hoặc nhập cảnh Việt Nam.",
          "keys": [
            "chỉ dùng một lần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So for an ordinary passport, renewing always means a new book. Count the paperwork time.",
          "sub": "Vậy với hộ chiếu phổ thông, “gia hạn” luôn là xin cuốn mới. Hãy tính thời gian làm hồ sơ.",
          "keys": [
            "xin cuốn mới"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "text": "② Thứ Ba · Mẫu mới",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "blue-book"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:tuesday",
            "caption": "Thứ Ba · phòng khách",
            "icon": "blue-book"
          },
          {
            "id": "d-date",
            "t": "text",
            "text": "Từ 15/8/2023",
            "x": 5964,
            "y": 160,
            "size": 60,
            "at": "l3:august",
            "color": "accent",
            "hl": [
              {
                "text": "15/8/2023",
                "at": "l3:fifteenth"
              }
            ]
          },
          {
            "id": "d-tt",
            "t": "text",
            "text": "Thông tư 31/2023/TT-BCA",
            "x": 5964,
            "y": 245,
            "size": 30,
            "at": "l3:circular",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-icao",
            "t": "text",
            "text": "Chuẩn hàng không dân dụng quốc tế",
            "x": 5964,
            "y": 295,
            "size": 40,
            "at": "l4:standards"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tuesday. Ms Hoa, Thảo's mother, brings out her old passport to compare.",
          "sub": "Thứ Ba. Cô Hoa, mẹ Thảo, mang cuốn hộ chiếu cũ ra so."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Mine looks so plain. What's new in the new one?",
          "sub": "Cuốn của cô trông đơn sơ quá. Mẫu mới có gì mới?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "From August fifteenth, twenty twenty-three, under Circular thirty-one, the Ministry of Public Security uses a new model.",
          "sub": "Từ 15/8/2023, theo Thông tư 31/2023/TT-BCA, Bộ Công an áp dụng mẫu hộ chiếu mới.",
          "keys": [
            "15/8/2023"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It meets the standards of the International Civil Aviation Organization.",
          "sub": "Mẫu này đáp ứng tiêu chuẩn của Tổ chức Hàng không dân dụng quốc tế."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
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
          }
        ],
        "items": [
          {
            "id": "d-laser",
            "t": "text",
            "text": "Số hộ chiếu đục laser xuyên sổ",
            "x": 5964,
            "y": 390,
            "size": 44,
            "at": "l1:laser",
            "hl": [
              {
                "text": "đục laser",
                "at": "l1:laser"
              }
            ]
          },
          {
            "id": "d-laser2",
            "t": "text",
            "text": "trang 1 → bìa sau · hạn chế làm giả, tẩy xoá",
            "x": 5964,
            "y": 450,
            "size": 28,
            "at": "l1:forging",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-pob",
            "t": "text",
            "text": "+ mục nơi sinh",
            "x": 5964,
            "y": 530,
            "size": 60,
            "at": "l2:place of birth",
            "color": "accent",
            "hl": [
              {
                "text": "nơi sinh",
                "at": "l2:place of birth"
              }
            ]
          },
          {
            "id": "d-sch",
            "t": "text",
            "text": "thiếu mục này từng gây khó xin thị thực khối Schengen",
            "x": 5964,
            "y": 610,
            "size": 28,
            "at": "l2:schengen",
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
          "say": "The number is laser-punched from page one through the back cover, to stop forging and erasing.",
          "sub": "Số hộ chiếu được đục laser xuyên từ trang 1 đến bìa sau, để hạn chế làm giả, tẩy xoá.",
          "keys": [
            "đục laser"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And there's a new place of birth field. Without it, some Schengen visas used to be harder.",
          "sub": "Và có thêm mục nơi sinh; trước đây thiếu mục này từng gây khó khi xin thị thực vào một số nước khối Schengen.",
          "keys": [
            "mục nơi sinh"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s09",
      "module": "BRK-06",
      "data": {
        "title": "Nhìn màu bìa là biết loại",
        "items": [
          {
            "illus": "blue-book",
            "text": "Phổ thông: xanh tím"
          },
          {
            "illus": "notebook",
            "text": "Rút gọn: đen"
          },
          {
            "illus": "closed-book",
            "text": "Ngoại giao: nâu đỏ"
          },
          {
            "illus": "green-book",
            "text": "Công vụ: xanh lá"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Purple-blue, black, red-brown, dark green.",
          "sub": "Xanh tím, đen, nâu đỏ, xanh lá đậm."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "One look at the cover tells the type.",
          "sub": "Nhìn màu bìa là biết loại.",
          "keys": [
            "màu bìa"
          ]
        }
      ],
      "ref": "p6"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "② Màu bìa",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:ordinary"
          },
          {
            "id": "e-s0",
            "t": "box",
            "x": 7932,
            "y": 150,
            "w": 120,
            "h": 70,
            "at": "l1:ordinary",
            "fill": "#4b3f8f",
            "color": "#4b3f8f",
            "stroke": 4
          },
          {
            "id": "e-c0",
            "t": "text",
            "text": "Phổ thông: xanh tím",
            "x": 8092,
            "y": 152,
            "size": 48,
            "at": "l1:ordinary+200",
            "hl": [
              {
                "text": "xanh tím",
                "at": "l1:purple-blue"
              }
            ]
          },
          {
            "id": "e-s1",
            "t": "box",
            "x": 7932,
            "y": 245,
            "w": 120,
            "h": 70,
            "at": "l1:shortened",
            "fill": "#222222",
            "color": "#222222",
            "stroke": 4
          },
          {
            "id": "e-c1",
            "t": "text",
            "text": "Rút gọn: đen",
            "x": 8092,
            "y": 247,
            "size": 48,
            "at": "l1:shortened+200"
          },
          {
            "id": "e-s2",
            "t": "box",
            "x": 7932,
            "y": 340,
            "w": 120,
            "h": 70,
            "at": "l1:diplomatic",
            "fill": "#8b2e1f",
            "color": "#8b2e1f",
            "stroke": 4
          },
          {
            "id": "e-c2",
            "t": "text",
            "text": "Ngoại giao: nâu đỏ",
            "x": 8092,
            "y": 342,
            "size": 48,
            "at": "l1:diplomatic+200"
          },
          {
            "id": "e-s3",
            "t": "box",
            "x": 7932,
            "y": 435,
            "w": 120,
            "h": 70,
            "at": "l1:official",
            "fill": "#1f5a33",
            "color": "#1f5a33",
            "stroke": 4
          },
          {
            "id": "e-c3",
            "t": "text",
            "text": "Công vụ: xanh lá đậm",
            "x": 8092,
            "y": 437,
            "size": 48,
            "at": "l1:official+200"
          },
          {
            "id": "e-den",
            "t": "text",
            "text": "bìa đen = rút gọn, dùng 1 lần",
            "x": 7932,
            "y": 540,
            "size": 30,
            "at": "l2:black",
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
          "say": "Ordinary: purple-blue. Shortened: black. Diplomatic: red-brown. Official: dark green.",
          "sub": "Phổ thông: xanh tím. Rút gọn: đen. Ngoại giao: nâu đỏ. Công vụ: xanh lá đậm.",
          "keys": [
            "xanh tím"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Handy if someone once got a shortened passport abroad. Black means the one-use kind.",
          "sub": "Tiện khi ai từng được cấp hộ chiếu rút gọn ở nước ngoài: bìa đen là loại dùng một lần."
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Ba · phòng khách",
        "actors": [
          {
            "id": "hoa",
            "side": "center",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Có mẫu mới, cuốn cũ hết giá trị",
          "why": "Hộ chiếu mẫu cũ còn hạn vẫn dùng được đến khi hết hạn; không bắt buộc đổi, trừ khi có nhu cầu riêng.",
          "rule": "Mẫu mới không làm mất giá trị cuốn cũ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "A new model? Then my old one is worthless. I'll change it tomorrow!",
          "sub": "Có mẫu mới à? Vậy cuốn cũ của cô hết giá trị. Mai đi đổi ngay!",
          "face": "worried",
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
          "say": "An old-style passport that is still valid works until it expires.",
          "sub": "Hộ chiếu mẫu cũ còn hạn vẫn dùng được đến khi hết hạn.",
          "keys": [
            "đến khi hết hạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No need to change, unless you have your own reason.",
          "sub": "Không bắt buộc đổi, trừ khi có nhu cầu riêng."
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
          "who": "hoa",
          "say": "Fine. I keep mine, and keep an eye on the expiry date.",
          "sub": "Thôi được. Cô giữ cuốn cũ, để mắt tới ngày hết hạn.",
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
      "ref": "p7"
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
          },
          {
            "at": "l1",
            "fit": [
              "e-ca",
              "e-paint",
              "e-wood"
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
            "id": "e-old",
            "t": "text",
            "text": "Mẫu cũ còn hạn: vẫn dùng",
            "x": 7932,
            "y": 620,
            "size": 56,
            "at": "l3:old-style",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn dùng",
                "at": "l3:still"
              }
            ]
          },
          {
            "id": "e-ca",
            "t": "text",
            "text": "“Tốt gỗ hơn tốt nước sơn”",
            "x": 8772,
            "y": 160,
            "size": 54,
            "at": "l1:good wood",
            "color": "accent"
          },
          {
            "id": "e-paint",
            "t": "text",
            "text": "Nước sơn = mẫu mã",
            "x": 8772,
            "y": 260,
            "size": 50,
            "at": "l1:paint",
            "color": "muted"
          },
          {
            "id": "e-wood",
            "t": "text",
            "text": "Gỗ = hạn còn lại + nước đến",
            "x": 8772,
            "y": 340,
            "size": 50,
            "at": "l2:wood",
            "hl": [
              {
                "text": "hạn còn lại",
                "at": "l2:remaining"
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
          "say": "Good wood beats good paint. The model is just the paint.",
          "sub": "“Tốt gỗ hơn tốt nước sơn.” Mẫu mã chỉ là nước sơn.",
          "keys": [
            "nước sơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The wood is the remaining validity, and what your destination requires.",
          "sub": "Gỗ là hạn còn lại và yêu cầu của nơi mình sắp đến.",
          "keys": [
            "hạn còn lại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A new design does not cancel the old-style book. It's still good.",
          "sub": "Mẫu mới không làm mất giá trị cuốn mẫu cũ. Vẫn dùng tốt.",
          "keys": [
            "Vẫn dùng tốt"
          ]
        }
      ],
      "ref": "p8"
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
            "text": "③ Thứ Tư · Con chip",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 1240,
            "w": 780,
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
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:wednesday",
            "caption": "Thứ Tư · giờ nghỉ trưa",
            "icon": "mobile-phone"
          },
          {
            "id": "f-chip",
            "t": "text",
            "text": "Chip: thông tin mã hoá",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l3:encrypted",
            "hl": [
              {
                "text": "mã hoá",
                "at": "l3:encrypted"
              }
            ]
          },
          {
            "id": "f-sig",
            "t": "text",
            "text": "+ chữ ký số cơ quan cấp",
            "x": 60,
            "y": 1325,
            "size": 46,
            "at": "l3:signature"
          },
          {
            "id": "f-pos",
            "t": "text",
            "text": "chip ẩn trong bìa sau · biểu tượng chip ở bìa trước",
            "x": 60,
            "y": 1400,
            "size": 28,
            "at": "l4:back cover",
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
          "say": "Wednesday, lunch break. Thảo studies the chip.",
          "sub": "Thứ Tư, giờ nghỉ trưa. Thảo tìm hiểu con chip."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "A chip in a passport? What does it even keep?",
          "sub": "Hộ chiếu mà có chip? Nó giữ gì trong đó vậy?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Encrypted information about the holder, plus the issuing body's digital signature.",
          "sub": "Thông tin đã mã hoá của người mang hộ chiếu, và chữ ký số của cơ quan cấp.",
          "keys": [
            "chữ ký số"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The chip hides in the back cover. The chip symbol sits on the front.",
          "sub": "Chip nằm ẩn trong bìa sau; biểu tượng chip in ở bìa trước."
        }
      ],
      "ref": "p9"
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
            "id": "f-ch",
            "t": "text",
            "text": "Từ đủ 14: tự chọn",
            "x": 60,
            "y": 1490,
            "size": 50,
            "at": "l1:choose"
          },
          {
            "id": "f-fee",
            "t": "text",
            "text": "Lệ phí: như nhau",
            "x": 60,
            "y": 1570,
            "size": 60,
            "at": "l2:same",
            "color": "accent",
            "hl": [
              {
                "text": "như nhau",
                "at": "l2:same"
              }
            ]
          },
          {
            "id": "f-tt",
            "t": "text",
            "text": "Thông tư 28/2026/TT-BTC",
            "x": 60,
            "y": 1650,
            "size": 28,
            "at": "l2:circular",
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
          "say": "From fourteen, you choose: chip or no chip.",
          "sub": "Từ đủ 14 tuổi, được chọn có chip hoặc không chip."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And under Circular twenty-eight of twenty twenty-six, the fee is the same for both.",
          "sub": "Theo Thông tư 28/2026/TT-BTC, mức lệ phí như nhau cho cả hai loại.",
          "keys": [
            "như nhau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Your choice won't change the bill by a single dong.",
          "sub": "Chọn loại nào, số tiền phải nộp cũng không đổi một đồng."
        }
      ],
      "ref": "p10"
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
            "at": "l4",
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
            "text": "③ Tối thứ Tư · Hai lựa chọn",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:two options"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
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
            "at": "l1:two options",
            "caption": "Tối thứ Tư · ở nhà",
            "icon": "laptop"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "Cách A: có chip",
            "x": 2028,
            "y": 1250,
            "size": 54,
            "at": "l2:option a"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "thông tin mã hoá + chữ ký số",
            "x": 2028,
            "y": 1318,
            "size": 28,
            "at": "l2:encrypted",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "Cách B: không chip",
            "x": 2028,
            "y": 1390,
            "size": 54,
            "at": "l3:option b"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "vẫn là hộ chiếu phổ thông hợp lệ, cùng 10 năm",
            "x": 2028,
            "y": 1458,
            "size": 28,
            "at": "l3:valid",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "✓",
            "x": 2488,
            "y": 1230,
            "size": 80,
            "at": "l4:take a",
            "color": "accent"
          },
          {
            "id": "g-note",
            "t": "text",
            "text": "lựa chọn, không bắt buộc",
            "x": 2028,
            "y": 1540,
            "size": 44,
            "at": "l5:choice",
            "color": "muted",
            "hl": [
              {
                "text": "không bắt buộc",
                "at": "l5:not a must"
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
          "say": "Wednesday night. Two options for Thảo.",
          "sub": "Tối thứ Tư. Hai lựa chọn cho Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option A: a chip passport, with encrypted data and a digital signature.",
          "sub": "Cách A: hộ chiếu gắn chip, có thông tin mã hoá và chữ ký số của cơ quan cấp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Option B: no chip. Still a valid ordinary passport, with the same ten years.",
          "sub": "Cách B: không gắn chip, vẫn là hộ chiếu phổ thông hợp lệ, cùng thời hạn 10 năm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Same fee? Then I'll take A.",
          "sub": "Lệ phí như nhau? Vậy em chọn A.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "And a note to self: it's a choice, not a must.",
          "sub": "Và ghi chú: đây là lựa chọn, không phải bắt buộc.",
          "pose": "explain"
        }
      ],
      "ref": "p11"
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
          }
        ],
        "items": [
          {
            "id": "g-take",
            "t": "text",
            "text": "Chip: cùng phí, cùng hạn",
            "x": 2028,
            "y": 1740,
            "size": 56,
            "at": "l1:same fee",
            "color": "accent",
            "hl": [
              {
                "text": "cùng phí, cùng hạn",
                "at": "l1:same validity"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Không chip ≠ hạng hai",
            "x": 2868,
            "y": 1774,
            "size": 46,
            "at": "l2:second class",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So the chip is an option from fourteen. Same fee, same validity.",
          "sub": "Rút ra: chip là lựa chọn cho người từ đủ 14 tuổi; cùng lệ phí, cùng thời hạn.",
          "keys": [
            "cùng lệ phí, cùng thời hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And no chip doesn't make you a second-class traveller.",
          "sub": "Và không chip cũng chẳng phải hành khách hạng hai."
        }
      ],
      "ref": "p12"
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
            "text": "④ Thứ Năm · Nộp ở đâu?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 1240,
            "w": 780,
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
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think"
                }
              ],
              "props": [
                "hot-beverage"
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
            "at": "l1:thursday",
            "caption": "Thứ Năm · quán nước",
            "icon": "hot-beverage"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Từ lần 2: nơi thuận lợi",
            "x": 3996,
            "y": 1250,
            "size": 50,
            "at": "l3:second",
            "hl": [
              {
                "text": "nơi thuận lợi",
                "at": "l3:convenient"
              }
            ]
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "XNC Công an cấp tỉnh, hoặc Bộ Công an",
            "x": 3996,
            "y": 1315,
            "size": 28,
            "at": "l3:ministry",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-tk",
            "t": "text",
            "text": "TK01 (≥ 14) · TK01a (< 14)",
            "x": 3996,
            "y": 1375,
            "size": 44,
            "at": "l4:forms"
          },
          {
            "id": "h-8",
            "t": "text",
            "text": "Tỉnh: 8 ngày làm việc",
            "x": 3996,
            "y": 1455,
            "size": 48,
            "at": "l5:eight",
            "color": "accent",
            "hl": [
              {
                "text": "8 ngày",
                "at": "l5:eight"
              }
            ]
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Bộ: 5 ngày làm việc",
            "x": 3996,
            "y": 1525,
            "size": 48,
            "at": "l5:five"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thursday. Dũng, Thảo's cousin, also leaving soon, joins the planning.",
          "sub": "Thứ Năm. Dũng, em họ Thảo, cũng sắp đi xa, nhập hội lên kế hoạch."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Do we have to go back to our hometown office?",
          "sub": "Phải về đúng công an quê mình nộp à chị?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "From the second time, apply at a convenient provincial immigration office, or at the Ministry's.",
          "sub": "Từ lần thứ hai, nộp tại cơ quan quản lý xuất nhập cảnh Công an cấp tỉnh nơi thuận lợi, hoặc của Bộ Công an.",
          "keys": [
            "nơi thuận lợi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Forms in Vietnam: TK one from fourteen, TK one A for children.",
          "sub": "Tờ khai trong nước: TK01 cho người từ đủ 14 tuổi, TK01a cho trẻ dưới 14 tuổi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Results: eight working days at the province, five at the Ministry.",
          "sub": "Trả kết quả: Công an tỉnh 8 ngày làm việc, Bộ Công an 5 ngày làm việc.",
          "keys": [
            "8 ngày làm việc"
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
      "ref": "p13"
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
          }
        ],
        "items": [
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1620,
            "w": 44,
            "h": 44,
            "at": "l2:level two",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1602,
            "size": 56,
            "at": "l2:level two+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "VNeID mức 2 đã xác thực",
            "x": 4066,
            "y": 1612,
            "size": 38,
            "at": "l2:level two+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1690,
            "w": 44,
            "h": 44,
            "at": "l2:phone",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1672,
            "size": 56,
            "at": "l2:phone+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Điện thoại có VNeID mới",
            "x": 4066,
            "y": 1682,
            "size": 38,
            "at": "l2:phone+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1760,
            "w": 44,
            "h": 44,
            "at": "l3:white",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1742,
            "size": 56,
            "at": "l3:white+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Ảnh: nền trắng, nhìn thẳng",
            "x": 4066,
            "y": 1752,
            "size": 38,
            "at": "l3:white+200"
          },
          {
            "id": "h-cc",
            "t": "text",
            "text": "kèm ảnh 2 mặt căn cước gắn chip",
            "x": 4836,
            "y": 1780,
            "size": 28,
            "at": "l4:both sides",
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
          "say": "Online, on the Ministry's public service portal? Bring three things.",
          "sub": "Nộp trực tuyến trên Cổng dịch vụ công Bộ Công an? Cần ba thứ.",
          "keys": [
            "ba thứ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A verified level two electronic ID account. A phone with the latest VNeID app.",
          "sub": "Tài khoản định danh điện tử mức 2 đã xác thực. Điện thoại cài ứng dụng VNeID bản mới."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a proper portrait: white background, facing forward, no tinted glasses.",
          "sub": "Và ảnh chân dung đạt chuẩn: nền trắng, nhìn thẳng, không đeo kính màu.",
          "keys": [
            "ảnh chân dung đạt chuẩn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plus photos of both sides of your chip ID card.",
          "sub": "Kèm ảnh hai mặt thẻ căn cước gắn chip."
        }
      ],
      "ref": "p14"
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
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "④ Tối thứ Sáu · Nộp trực tuyến",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "camera-with-flash"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "close",
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
            "at": "l1:friday",
            "caption": "Tối thứ Sáu · ở nhà",
            "icon": "laptop"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l1:vneid",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1242,
            "size": 56,
            "at": "l1:vneid+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Đăng nhập bằng VNeID",
            "x": 6034,
            "y": 1252,
            "size": 38,
            "at": "l1:vneid+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1332,
            "w": 44,
            "h": 44,
            "at": "l2:issue",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1314,
            "size": 56,
            "at": "l2:issue+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Cấp hộ chiếu ở trong nước",
            "x": 6034,
            "y": 1324,
            "size": 38,
            "at": "l2:issue+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1404,
            "w": 44,
            "h": 44,
            "at": "l3:photo",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1386,
            "size": 56,
            "at": "l3:photo+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Ảnh 4x6 + ảnh căn cước",
            "x": 6034,
            "y": 1396,
            "size": 38,
            "at": "l3:photo+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1476,
            "w": 44,
            "h": 44,
            "at": "l4:post",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1458,
            "size": 56,
            "at": "l4:post+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Nhận qua bưu điện",
            "x": 6034,
            "y": 1468,
            "size": 38,
            "at": "l4:post+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1548,
            "w": 44,
            "h": 44,
            "at": "l5:code",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1530,
            "size": 56,
            "at": "l5:code+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Tra tiến độ: mã hồ sơ",
            "x": 6034,
            "y": 1540,
            "size": 38,
            "at": "l5:code+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday night. Thảo logs into the portal with VNeID.",
          "sub": "Tối thứ Sáu. Thảo đăng nhập Cổng dịch vụ công bằng VNeID."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Issue an ordinary passport in Vietnam. Pick the office, then eight working days.",
          "sub": "Cấp hộ chiếu phổ thông ở trong nước. Chọn cơ quan giải quyết, rồi tám ngày làm việc.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "She uploads a four by six photo and her ID card photos, then fills in the starred fields.",
          "sub": "Thảo tải ảnh 4x6 và ảnh căn cước, khai các mục có dấu sao."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Delivery by post. Send!",
          "sub": "Nhận qua bưu điện. Gửi!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then she uses the file code to track progress on the same portal.",
          "sub": "Sau đó Thảo dùng mã hồ sơ để tra tiến độ ngay trên cổng này.",
          "keys": [
            "mã hồ sơ"
          ]
        }
      ],
      "ref": "p15"
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
            "at": "l2",
            "fit": [
              "i-fee",
              "i-fee2"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "I",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "i-take",
            "t": "text",
            "text": "VNeID, ảnh chuẩn: có trước",
            "x": 5964,
            "y": 1650,
            "size": 48,
            "at": "l1:ready",
            "color": "accent",
            "hl": [
              {
                "text": "có trước",
                "at": "l1:first"
              }
            ]
          },
          {
            "id": "i-mien",
            "t": "text",
            "text": "Miễn: trục xuất, về theo điều ước, nhân đạo",
            "x": 5964,
            "y": 1720,
            "size": 28,
            "at": "l3:free",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-fee",
            "t": "text",
            "text": "Cấp mới 200.000 đ",
            "x": 6804,
            "y": 1758,
            "size": 46,
            "at": "l2:two hundred",
            "hl": [
              {
                "text": "200.000 đ",
                "at": "l2:two hundred"
              }
            ]
          },
          {
            "id": "i-fee2",
            "t": "text",
            "text": "cấp lại (hỏng, mất) 400.000 đ · từ 01/4/2026",
            "x": 6804,
            "y": 1816,
            "size": 28,
            "at": "l2:four hundred",
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
          "say": "Online saves trips, but VNeID level two and a proper photo must be ready first.",
          "sub": "Nộp trực tuyến đỡ công đi lại, nhưng phải có VNeID mức 2 và ảnh đạt chuẩn từ trước.",
          "keys": [
            "từ trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The fee from April twenty twenty-six: two hundred thousand dong new, four hundred thousand if damaged or lost.",
          "sub": "Lệ phí từ 01/4/2026: cấp mới 200.000 đồng; cấp lại do hỏng, mất 400.000 đồng.",
          "keys": [
            "200.000 đồng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It's free for some people abroad without a passport: deported, or sent home by treaty or for humanitarian reasons.",
          "sub": "Miễn lệ phí cho người ở nước ngoài không có hộ chiếu mà bị trục xuất, về nước theo điều ước, thoả thuận quốc tế hay vì lý do nhân đạo."
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s21",
      "module": "BRK-11",
      "data": {
        "title": "Điều 21: chưa được cấp khi",
        "items": [
          "Chưa xong xử phạt khai sai, làm giả",
          "Đang bị tạm hoãn xuất cảnh",
          "Lý do quốc phòng, an ninh"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three: defence or security reasons.",
          "sub": "Ba: lý do quốc phòng, an ninh."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two: under exit suspension, with some exceptions.",
          "sub": "Hai: đang bị tạm hoãn xuất cảnh, trừ một số trường hợp."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "One: an unfinished penalty for false info or fake papers.",
          "sub": "Một: chưa chấp hành xong xử phạt vì khai sai, làm giả giấy tờ.",
          "keys": [
            "khai sai"
          ]
        }
      ],
      "ref": "p18"
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
            "id": "i-half",
            "t": "text",
            "text": "Làm xong = mới một nửa",
            "x": 5964,
            "y": 1790,
            "size": 48,
            "at": "l1:half",
            "color": "accent",
            "hl": [
              {
                "text": "một nửa",
                "at": "l1:half"
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
          "say": "Unfinished penalties for illegal border crossing count too. So getting a passport is only half the job.",
          "sub": "Chưa chấp hành xong xử phạt vì xuất nhập cảnh trái phép cũng tính. Vậy làm xong hộ chiếu mới chỉ là một nửa.",
          "keys": [
            "một nửa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The other half: how much validity you need when you leave. That's the next lesson.",
          "sub": "Nửa kia: hạn còn lại khi đi. Bài sau bàn."
        }
      ],
      "ref": "p18"
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
            "text": "Hai tuần sau · tối thứ Hai",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:two weeks"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "bin",
                  "side": "right"
                }
              ],
              "props": [
                "package",
                "blue-book"
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
                  "shot": "E-SHOT-06",
                  "on": "bin",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
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
            "at": "l1:two weeks",
            "caption": "Hai tuần sau · tối thứ Hai",
            "icon": "package"
          },
          {
            "id": "j-new",
            "t": "text",
            "text": "Cuốn mới ✓",
            "x": 7932,
            "y": 1250,
            "size": 64,
            "at": "l2:purple-blue",
            "color": "accent"
          },
          {
            "id": "j-col",
            "t": "text",
            "text": "xanh tím · chip · nơi sinh",
            "x": 7932,
            "y": 1350,
            "size": 46,
            "at": "l2:place of birth"
          },
          {
            "id": "j-B",
            "t": "text",
            "text": "Gia hạn? Không lần nào",
            "x": 7932,
            "y": 1450,
            "size": 54,
            "at": "l4:not even",
            "hl": [
              {
                "text": "Không lần nào",
                "at": "l4:not even once"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Gỗ tốt, nước sơn cũng tốt",
            "x": 7932,
            "y": 1570,
            "size": 50,
            "at": "l5:good wood",
            "color": "accent",
            "hl": [
              {
                "text": "Gỗ tốt",
                "at": "l5:good wood"
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
          "say": "Two weeks later. Monday night again. A parcel from the post office.",
          "sub": "Hai tuần sau. Lại tối thứ Hai. Bưu điện giao một gói nhỏ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Purple-blue cover, chip symbol on the front, place of birth inside!",
          "sub": "Bìa xanh tím, biểu tượng chip ở bìa trước, có cả mục nơi sinh!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "bin",
          "say": "So can you extend this one later?",
          "sub": "Vậy cuốn này sau này gia hạn được không chị?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Not even once, Bin. In ten years, I make a new one.",
          "sub": "Không lần nào đâu Bin. Mười năm nữa, chị làm cuốn mới.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Answer B, straight from Thảo. And this time, good wood and good paint too.",
          "sub": "Đáp án B, từ chính miệng Thảo. Lần này gỗ tốt, nước sơn cũng tốt.",
          "keys": [
            "gỗ tốt, nước sơn cũng tốt"
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
      "ref": "p1,p6,p9"
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
            "at": "l1:ten",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:old-style",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:fee",
            "fit": "F",
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
            "at": "l1:ten"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 620,
            "at": "l2:old-style"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1600,
            "y": 1110,
            "at": "l3:fee"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; quy định có thể thay đổi, kiểm lại với cơ quan có thẩm quyền. Nhân vật là minh hoạ.",
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
          "say": "So: ten years from fourteen, five for children, and no extension.",
          "sub": "Tóm lại: từ đủ 14 tuổi 10 năm, trẻ em 5 năm, và không được gia hạn.",
          "keys": [
            "không được gia hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The new model adds a place of birth; old-style books still work until they expire.",
          "sub": "Mẫu mới có nơi sinh; cuốn mẫu cũ vẫn dùng đến khi hết hạn.",
          "keys": [
            "vẫn dùng đến khi hết hạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The chip is a choice, and the fee for a new one is two hundred thousand dong.",
          "sub": "Chip là lựa chọn; lệ phí cấp mới 200.000 đồng.",
          "keys": [
            "Chip là lựa chọn"
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
        "q": "How does the fee differ between chip and non chip passports?",
        "options": [
          "It does not differ, the same fee applies to both types",
          "The non chip passport is completely free for people over sixty",
          "The chip passport costs twice as much as the other type"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "blue-book",
        "why": "Theo Thông tư 28/2026/TT-BTC, mức lệ phí như nhau cho hai loại. Chọn loại nào cũng nộp cùng số tiền."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How does the fee differ between chip and non chip passports?",
          "sub": "Lệ phí hộ chiếu có chip và không chip khác nhau thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Chip or no chip, the fee is the same.",
          "sub": "Có chip hay không, lệ phí như nhau."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[21]"
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
          "say": "Right now: check how much time your passport has left.",
          "sub": "Việc làm ngay: kiểm tra hạn còn lại của hộ chiếu.",
          "keys": [
            "hạn còn lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: how much validity you need before you go. Now, forty questions below!",
          "sub": "Bài sau: hộ chiếu còn bao lâu thì nên làm mới trước khi đi. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-21",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-21 (câu hỏi để đoán sai): “Hộ chiếu phổ thông 10 năm gia hạn mấy lần? A một lần ≤ 3 năm / B không lần nào”, lặng 1,2 s, lật ở s02 (A là của hộ chiếu ngoại giao, công vụ, p2 ở s05); Bin hỏi lại ở cảnh khép vòng s23. Dòng thời gian: HAI TUẦN Thảo làm cuốn mới (tối T2 thời hạn p1–p4 → T3 mẫu mới, màu bìa p5–p6, “Khoan đã!” cô Hoa tưởng cuốn cũ hết giá trị p7–p8 → T4 chip p9–p10, tối T4 hai lựa chọn p11–p12 → T5 Dũng hỏi nộp ở đâu p13–p14 → tối T6 nộp trực tuyến p15–p16, lệ phí p17, Điều 21 p18 → hai tuần sau tối T2 nhận qua bưu điện). Đổi tên (w145/_series/emigrants-passport-and-exit.md): chị Hương → Thảo (cấp lần hai, không phải lần đầu), anh Tuấn → cô Hoa. Tục ngữ mở/khép: “Tốt gỗ hơn tốt nước sơn” (mẫu mã = nước sơn, hạn còn lại = gỗ). BRK: 10 (Điều 7 tóm ý), 06 (màu bìa p6), 11 (Điều 21 p18). Số chỉ lấy từ bài: 10/5 năm, 1–5 năm + gia hạn 1 lần ≤ 3 năm, ≤ 12 tháng, 15/8/2023 TT 31/2023, 8/5 ngày làm việc, TK01/TK01a, 200.000/400.000 đ (TT 28/2026, 01/4/2026). Câu đố questions[21].",
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
