// language-self-study-roadmap--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "language-self-study-roadmap--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "beginner-self-study-planners",
    "slug": "language-self-study-roadmap",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Tự học ngoại ngữ từ đầu: làm sao biết mình ở đâu và nên đi tiếp thế nào?",
    "series": "Biết mình ở đâu, đi tới đâu — tự đánh giá trình độ và lập lộ trình học ngoại ngữ theo Khung 6 bậc"
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
            "id": "a-num",
            "t": "text",
            "text": "3 khoá học",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 khoá",
                "at": "l1:courses"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "3 lần bỏ giữa chừng",
            "x": 70,
            "y": 330,
            "size": 58,
            "at": "l1:quit",
            "hl": [
              {
                "text": "bỏ giữa chừng",
                "at": "l1:halfway"
              }
            ]
          },
          {
            "id": "a-lazy",
            "t": "text",
            "text": "Ta tưởng: tại lười?",
            "x": 70,
            "y": 440,
            "size": 54,
            "at": "l2:lazy",
            "color": "muted"
          },
          {
            "id": "a-lx",
            "t": "strike",
            "over": "a-lazy",
            "at": "l2:simpler"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three English courses in a few years. Three times, he quit halfway.",
          "sub": "Ba khoá tiếng Anh trong vài năm. Ba lần bỏ giữa chừng.",
          "keys": [
            "Ba lần bỏ giữa chừng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lazy? That's the easy verdict. The real reason is usually simpler.",
          "sub": "Tại lười? Kết luận dễ nhất. Lý do thật thường đơn giản hơn.",
          "keys": [
            "đơn giản hơn"
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
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4"
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
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "lan",
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
            "caption": "Thứ Hai 21:00 · quán dưới công ty",
            "icon": "books"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "A1 hay B1?",
            "x": 60,
            "y": 715,
            "size": 44,
            "at": "l5:B one",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đi một ngày đàng,",
            "x": 60,
            "y": 560,
            "size": 54,
            "at": "l6:travel",
            "color": "accent",
            "hl": [
              {
                "text": "Đi một ngày đàng",
                "at": "l6:travel"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "học một sàng khôn”",
            "x": 100,
            "y": 640,
            "size": 54,
            "at": "l6:basket",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, a salesman who buys courses faster than he finishes them.",
          "sub": "Đây là Dũng, nhân viên kinh doanh, mua khoá học nhanh hơn học xong.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Monday, nine p.m. Three half-finished course books stare at him like unpaid bills.",
          "sub": "Thứ Hai, chín giờ tối. Ba bộ giáo trình dở dang nhìn anh như ba hoá đơn chưa trả.",
          "keys": [
            "dở dang"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Course number four, here I come! This time is different, I promise.",
          "sub": "Khoá thứ tư đây! Lần này khác, thề luôn.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And this is Lan, his colleague in admin, who keeps a notebook for everything.",
          "sub": "Còn đây là Lan, đồng nghiệp phòng hành chính, việc gì cũng ghi sổ.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "I want to restart English too. But am I A one or B one? I can't even pick a book.",
          "sub": "Em cũng muốn học lại. Mà em A1 hay B1? Đến cuốn sách còn chẳng biết chọn.",
          "face": "worried"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: travel one day, learn a basket of wisdom. But to travel, you need a map.",
          "sub": "Ông bà dạy: “Đi một ngày đàng, học một sàng khôn.” Nhưng muốn đi, trước hết cần bản đồ.",
          "keys": [
            "Đi một ngày đàng"
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
      "ref": "intro,p1"
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
            "text": "Mình ở đâu, đi tới đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:where",
            "hl": [
              {
                "text": "ở đâu",
                "at": "l1:where you are"
              },
              {
                "text": "đi tới đâu",
                "at": "l1:next"
              }
            ]
          },
          {
            "id": "b-why",
            "t": "text",
            "text": "Bỏ dở vì: không rõ bậc",
            "x": 2028,
            "y": 170,
            "size": 48,
            "at": "l2:level"
          },
          {
            "id": "b-why2",
            "t": "text",
            "text": "và không rõ đích",
            "x": 2068,
            "y": 240,
            "size": 48,
            "at": "l2:leads",
            "hl": [
              {
                "text": "không rõ đích",
                "at": "l2:leads"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: mua khoá thứ 4",
            "x": 2028,
            "y": 350,
            "size": 54,
            "at": "l3:another",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:First"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: một thước đo chung",
            "x": 2028,
            "y": 440,
            "size": 60,
            "at": "l3:shared",
            "color": "accent",
            "hl": [
              {
                "text": "thước đo chung",
                "at": "l3:scale"
              }
            ]
          },
          {
            "id": "b-cmp",
            "t": "text",
            "text": "so tài liệu, khoá, kết quả",
            "x": 2028,
            "y": 540,
            "size": 44,
            "at": "l4:compare"
          },
          {
            "id": "b-ruler",
            "t": "illus",
            "name": "straight-ruler",
            "x": 3268,
            "y": 380,
            "size": 220,
            "at": "l3:scale"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, learning a language from scratch: how do you know where you are, and where to go next?",
          "sub": "Vậy tự học ngoại ngữ từ đầu: làm sao biết mình ở đâu, và đi tiếp thế nào?",
          "keys": [
            "mình ở đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Most quitters don't lack willpower. They don't know their level, or where each course leads.",
          "sub": "Phần lớn người bỏ dở không thiếu ý chí. Họ không biết mình ở bậc nào, khoá học dẫn tới đâu.",
          "keys": [
            "không biết mình ở bậc nào"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So, not buying another course. First, finding one shared scale.",
          "sub": "Vậy không phải mua thêm khoá nữa, mà là tìm một thước đo chung trước đã.",
          "keys": [
            "một thước đo chung"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One scale to compare materials, courses and your own test results.",
          "sub": "Một thước đo để so tài liệu, khoá học và kết quả tự kiểm với nhau."
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Tuần học lại của Dũng và Lan",
        "points": [
          {
            "label": "Thứ Ba",
            "sub": "Thước đo",
            "illus": "straight-ruler"
          },
          {
            "label": "Thứ Tư",
            "sub": "Tự kiểm",
            "illus": "memo"
          },
          {
            "label": "Thứ Năm",
            "sub": "Bao lâu?",
            "illus": "hourglass-done"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Bốn mạch",
            "illus": "puzzle-piece"
          },
          {
            "label": "Thứ Bảy",
            "sub": "Giữ sức",
            "illus": "seedling"
          },
          {
            "label": "Chủ nhật",
            "sub": "Lộ trình",
            "illus": "world-map"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One week, six stops.",
          "sub": "Một tuần, sáu chặng."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Pack a notebook. Lan already has one.",
          "sub": "Mang theo cuốn sổ. Lan mang sẵn rồi.",
          "keys": [
            "cuốn sổ"
          ]
        }
      ],
      "ref": "intro"
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Ba · Khung 6 bậc",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one",
            "hl": [
              {
                "text": "Khung 6 bậc",
                "at": "l1:six level"
              }
            ]
          },
          {
            "id": "c-s0",
            "t": "box",
            "x": 3996,
            "y": 470,
            "w": 500,
            "h": 160,
            "at": "l3:Elementary",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "c-st0",
            "t": "text",
            "text": "Sơ cấp",
            "x": 4026,
            "y": 482,
            "size": 54,
            "at": "l3:Elementary+200"
          },
          {
            "id": "c-ss0",
            "t": "text",
            "text": "bậc 1–2 · A1–A2",
            "x": 4026,
            "y": 560,
            "size": 40,
            "at": "l3:Elementary+500"
          },
          {
            "id": "c-s1",
            "t": "box",
            "x": 4556,
            "y": 330,
            "w": 500,
            "h": 160,
            "at": "l3:Intermediate",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "c-st1",
            "t": "text",
            "text": "Trung cấp",
            "x": 4586,
            "y": 342,
            "size": 54,
            "at": "l3:Intermediate+200",
            "color": "accent",
            "hl": [
              {
                "text": "Trung cấp",
                "at": "l3:Intermediate"
              }
            ]
          },
          {
            "id": "c-ss1",
            "t": "text",
            "text": "bậc 3–4 · B1–B2",
            "x": 4586,
            "y": 420,
            "size": 40,
            "at": "l3:Intermediate+500"
          },
          {
            "id": "c-s2",
            "t": "box",
            "x": 5116,
            "y": 190,
            "w": 500,
            "h": 160,
            "at": "l3:Advanced",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "c-st2",
            "t": "text",
            "text": "Cao cấp",
            "x": 5146,
            "y": 202,
            "size": 54,
            "at": "l3:Advanced+200"
          },
          {
            "id": "c-ss2",
            "t": "text",
            "text": "bậc 5–6 · C1–C2",
            "x": 5146,
            "y": 280,
            "size": 40,
            "at": "l3:Advanced+500"
          },
          {
            "id": "c-cefr",
            "t": "text",
            "text": "≈ A1 → C2 (CEFR châu Âu)",
            "x": 3996,
            "y": 200,
            "size": 46,
            "at": "l4:CEFR",
            "hl": [
              {
                "text": "A1 → C2",
                "at": "l4:C two"
              }
            ]
          },
          {
            "id": "c-self",
            "t": "text",
            "text": "Mục đích: người học tự đánh giá",
            "x": 3996,
            "y": 670,
            "size": 44,
            "at": "l5:purpose",
            "color": "accent",
            "hl": [
              {
                "text": "tự đánh giá",
                "at": "l5:assess"
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
          "say": "Stop one, Tuesday lunch. The scale itself: Vietnam's six level framework for foreign languages.",
          "sub": "Chặng một, trưa thứ Ba. Chính cái thước: Khung năng lực ngoại ngữ 6 bậc dùng cho Việt Nam.",
          "keys": [
            "6 bậc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Circular one of twenty fourteen groups the six levels into three bands.",
          "sub": "Thông tư 01/2014 chia sáu bậc thành ba cấp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Elementary: levels one and two. Intermediate: three and four. Advanced: five and six.",
          "sub": "Sơ cấp: bậc 1 và 2. Trung cấp: bậc 3 và 4. Cao cấp: bậc 5 và 6.",
          "keys": [
            "Trung cấp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Together they match A one to C two of the European framework, CEFR.",
          "sub": "Tương ứng A1 đến C2 của Khung tham chiếu chung châu Âu, CEFR.",
          "keys": [
            "A1 đến C2"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And one stated purpose: helping learners assess themselves. That means you, with a notebook.",
          "sub": "Và một mục đích ghi rõ: giúp người học tự đánh giá. Tức là bạn, với một cuốn sổ.",
          "keys": [
            "tự đánh giá"
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
          }
        ],
        "items": [
          {
            "id": "c-new",
            "t": "text",
            "text": "Mới: TT 33/2026 · hiệu lực 31/5/2026",
            "x": 4836,
            "y": 560,
            "size": 40,
            "at": "l1:news",
            "color": "coral",
            "hl": [
              {
                "text": "31/5/2026",
                "at": "l1:thirty first"
              }
            ]
          },
          {
            "id": "c-pre",
            "t": "text",
            "text": "+ Tiền bậc 1",
            "x": 5116,
            "y": 640,
            "size": 50,
            "at": "l2:pre",
            "color": "accent",
            "hl": [
              {
                "text": "Tiền bậc 1",
                "at": "l2:pre"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Thông tư 01/2014/TT-BGDĐT; báo VOH 16/4/2026 (Thông tư 33/2026)",
            "x": 3996,
            "y": 730,
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
          "say": "News flash: Circular thirty three of twenty twenty six took effect on May thirty first.",
          "sub": "Tin mới: Thông tư 33/2026 có hiệu lực từ 31/5/2026.",
          "keys": [
            "Thông tư 33/2026"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It replaces the old one, adds a pre level one for total beginners, and follows the newer CEFR.",
          "sub": "Thay Thông tư 01/2014, thêm Tiền bậc 1 cho người mới bắt đầu, cập nhật theo CEFR bản mới.",
          "keys": [
            "Tiền bậc 1"
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
            "text": "① 12:30 · B1 là bậc mấy?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:still"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "props": [
                "newspaper",
                "bento-box"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:advert",
            "caption": "Thứ Ba 12:30 · giờ nghỉ trưa",
            "icon": "newspaper"
          },
          {
            "id": "d-w",
            "t": "text",
            "text": "B1 = bậc 1 → dễ quá",
            "x": 5964,
            "y": 170,
            "size": 54,
            "at": "l2:lowest",
            "color": "muted"
          },
          {
            "id": "d-wx",
            "t": "strike",
            "over": "d-w",
            "at": "l4:equals"
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "B1 = bậc 3 · trung cấp",
            "x": 5964,
            "y": 270,
            "size": 58,
            "at": "l4:level three",
            "color": "accent",
            "hl": [
              {
                "text": "bậc 3",
                "at": "l4:level three"
              }
            ]
          },
          {
            "id": "d-flo",
            "t": "text",
            "text": "chê tầng giữa, tưởng tầng hầm",
            "x": 5964,
            "y": 380,
            "size": 44,
            "at": "l5:basement",
            "color": "coral",
            "hl": [
              {
                "text": "tầng hầm",
                "at": "l5:basement"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật (30/4/2026)",
            "x": 5964,
            "y": 470,
            "size": 28,
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
          "say": "Still Tuesday. Over lunch, Dũng reads a job advert asking for B one.",
          "sub": "Vẫn thứ Ba. Giờ cơm trưa, Dũng đọc một tin tuyển dụng ghi “B1”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "B one? Level one, the lowest? Too easy. I'll aim much higher.",
          "sub": "B1 á? Bậc 1, thấp nhất? Dễ quá. Anh nhắm cao hơn nhiều.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Are you sure B one means level one?",
          "sub": "Anh chắc B1 là bậc 1 không?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A Vietnamese legal news site says a B one certificate equals level three. Already intermediate.",
          "sub": "Theo Thư viện Pháp luật, chứng chỉ B1 tương đương bậc 3, đã thuộc trung cấp.",
          "keys": [
            "bậc 3"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Dũng just turned down the middle floor, because he thought it was the basement.",
          "sub": "Dũng vừa chê tầng giữa, vì tưởng đó là tầng hầm.",
          "keys": [
            "tầng hầm"
          ]
        }
      ],
      "ref": "p4"
    },
    {
      "id": "s07",
      "module": "BRK-04",
      "data": {
        "title": "B1 là bậc mấy?",
        "wrong": "B1 = bậc 1, thấp nhất",
        "right": "B1 = bậc 3, đã là trung cấp",
        "wrongIllus": "red-question-mark",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "B one, the lowest level?",
          "sub": "B1 là bậc thấp nhất?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. B one is level three, in the intermediate band.",
          "sub": "Không. B1 là bậc 3, thuộc cấp trung cấp.",
          "keys": [
            "bậc 3"
          ]
        }
      ],
      "ref": "p4"
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
            "id": "d-k",
            "t": "text",
            "text": "Chữ, số CEFR ≠ số bậc Việt Nam",
            "x": 5964,
            "y": 560,
            "size": 52,
            "at": "l1:letters",
            "color": "accent",
            "hl": [
              {
                "text": "≠",
                "at": "l1:match"
              }
            ]
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "Tra bảng trước khi đặt đích",
            "x": 5964,
            "y": 660,
            "size": 46,
            "at": "l2:table",
            "hl": [
              {
                "text": "Tra bảng",
                "at": "l2:Check"
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
          "say": "Takeaway: CEFR letters and numbers don't match Vietnam's level numbers.",
          "sub": "Rút ra: chữ và số của CEFR không trùng với số bậc của khung Việt Nam.",
          "keys": [
            "không trùng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check the matching table before setting a goal. The next video walks through every level.",
          "sub": "Tra bảng tương ứng trước khi đặt đích. Video sau đi qua mô tả từng bậc.",
          "keys": [
            "Tra bảng tương ứng"
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
            "text": "② Thứ Tư 20:00 · Tự kiểm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
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
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "notebook"
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
                }
              ]
            },
            "at": "l1:Wednesday",
            "caption": "Thứ Tư 20:00 · nhà Lan",
            "icon": "laptop"
          },
          {
            "id": "e-bc",
            "t": "text",
            "text": "British Council: LearnEnglish",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:British"
          },
          {
            "id": "e-cam",
            "t": "text",
            "text": "Cambridge: Test your English",
            "x": 7932,
            "y": 240,
            "size": 46,
            "at": "l2:Cambridge"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "Trắc nghiệm 3 lựa chọn",
            "x": 7932,
            "y": 330,
            "size": 40,
            "at": "l3:three",
            "hl": [
              {
                "text": "3 lựa chọn",
                "at": "l3:three options"
              }
            ]
          },
          {
            "id": "e-g",
            "t": "text",
            "text": "→ chỉ là gợi ý",
            "x": 7932,
            "y": 420,
            "size": 56,
            "at": "l4:guide",
            "color": "accent",
            "hl": [
              {
                "text": "gợi ý",
                "at": "l4:guide"
              }
            ]
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "gần đúng · không phải bằng chứng",
            "x": 7932,
            "y": 510,
            "size": 40,
            "at": "l5:approximate",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, Wednesday evening. Lan finally asks the big question: where am I?",
          "sub": "Chặng hai, tối thứ Tư. Lan cuối cùng cũng hỏi câu lớn: mình đang ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two free tests are easy to find: British Council's LearnEnglish test, and Cambridge's Test your English.",
          "sub": "Hai bài kiểm tra miễn phí dễ tìm: bài trên LearnEnglish của British Council, và Test your English của Cambridge."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Multiple choice, three options each: grammar, vocabulary, phrasing. And I had to register first.",
          "sub": "Trắc nghiệm, mỗi câu ba lựa chọn: ngữ pháp, từ vựng, cách diễn đạt. Mà phải đăng ký trước đã.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Both sites admit it: the result is only a guide.",
          "sub": "Cả hai trang đều nói thẳng: kết quả chỉ là gợi ý.",
          "keys": [
            "chỉ là gợi ý"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "British Council calls it approximate. Cambridge says it's no official exam, and the score proves nothing.",
          "sub": "British Council gọi là gần đúng. Cambridge ghi đây không phải kỳ thi chính thức, điểm không phải bằng chứng năng lực."
        }
      ],
      "ref": "p6,p7"
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
            "zoom": 1.3,
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
            "id": "e-grid",
            "t": "text",
            "text": "Thêm: bảng tự đánh giá CEFR",
            "x": 7932,
            "y": 630,
            "size": 40,
            "at": "l2:grid",
            "hl": [
              {
                "text": "bảng tự đánh giá",
                "at": "l2:grid"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Điểm + từng kỹ năng",
            "x": 7932,
            "y": 700,
            "size": 48,
            "at": "l4:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "từng kỹ năng",
                "at": "l4:skill"
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
          "say": "But quick tests like these don't measure speaking or writing.",
          "sub": "Nhưng bài test nhanh kiểu này không đo nói và viết.",
          "keys": [
            "không đo nói và viết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So add the CEFR self assessment grid: listening, reading, two kinds of speaking, and writing.",
          "sub": "Nên đọc thêm bảng tự đánh giá CEFR: nghe, đọc, nói tương tác, nói độc thoại, viết.",
          "keys": [
            "bảng tự đánh giá"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Result and date go in my notebook. Now level two: can I do this? Tick. This one? Not yet.",
          "sub": "Kết quả và ngày làm, ghi vào sổ. Giờ đến bậc 2: câu này làm được? Tích. Câu này? Chưa.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: a score plus a skill by skill check beats one lonely number.",
          "sub": "Rút ra: điểm số cộng tự đánh giá từng kỹ năng rõ hơn hẳn một con số đơn độc.",
          "keys": [
            "từng kỹ năng"
          ]
        }
      ],
      "ref": "p8,p9,p10"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Lên bậc kế tiếp thật ra mất bao lâu?",
        "illus": "hourglass-not-done"
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
          "say": "How long does the next level really take?",
          "sub": "Lên bậc kế tiếp thật ra mất bao lâu?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p11"
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
            "at": 150,
            "fit": "F",
            "ms": 900
          },
          {
            "at": "l4",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "③ Thứ Năm · Bao nhiêu giờ?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "surprised"
                }
              ],
              "props": [
                "hourglass-done",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-07",
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
            "at": "l1:Thursday",
            "caption": "Thứ Năm 22:00 · phòng trọ Dũng",
            "icon": "hourglass-done"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "A1",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l2:ninety"
          },
          {
            "id": "f-b0",
            "t": "box",
            "x": 150,
            "y": 1260,
            "w": 80,
            "h": 50,
            "at": "l2:ninety+200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "f-n0",
            "t": "text",
            "text": "90–100 giờ",
            "x": 250,
            "y": 1250,
            "size": 44,
            "at": "l2:ninety+400"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "A2",
            "x": 60,
            "y": 1325,
            "size": 50,
            "at": "l2:eighty"
          },
          {
            "id": "f-b1",
            "t": "box",
            "x": 150,
            "y": 1335,
            "w": 160,
            "h": 50,
            "at": "l2:eighty+200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "f-n1",
            "t": "text",
            "text": "180–200 giờ",
            "x": 330,
            "y": 1325,
            "size": 44,
            "at": "l2:eighty+400"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "B1",
            "x": 60,
            "y": 1400,
            "size": 50,
            "at": "l3:fifty"
          },
          {
            "id": "f-b2",
            "t": "box",
            "x": 150,
            "y": 1410,
            "w": 320,
            "h": 50,
            "at": "l3:fifty+200",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "f-n2",
            "t": "text",
            "text": "350–400 giờ",
            "x": 490,
            "y": 1400,
            "size": 44,
            "at": "l3:fifty+400",
            "color": "accent",
            "hl": [
              {
                "text": "350–400",
                "at": "l3:B one"
              }
            ]
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "B2",
            "x": 60,
            "y": 1475,
            "size": 50,
            "at": "l3:Five"
          },
          {
            "id": "f-b3",
            "t": "box",
            "x": 150,
            "y": 1485,
            "w": 480,
            "h": 50,
            "at": "l3:Five+200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "f-n3",
            "t": "text",
            "text": "500–600 giờ",
            "x": 650,
            "y": 1475,
            "size": 44,
            "at": "l3:Five+400"
          },
          {
            "id": "f-d",
            "t": "text",
            "text": "Dũng: “thêm 400 giờ?!”",
            "x": 60,
            "y": 1550,
            "size": 48,
            "at": "l4:four hundred",
            "color": "muted"
          },
          {
            "id": "f-dx",
            "t": "strike",
            "over": "f-d",
            "at": "l5:totals"
          },
          {
            "id": "f-tot",
            "t": "text",
            "text": "= tổng cộng dồn từ đầu",
            "x": 60,
            "y": 1625,
            "size": 54,
            "at": "l5:totals",
            "color": "accent",
            "hl": [
              {
                "text": "cộng dồn từ đầu",
                "at": "l5:very start"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Cambridge English Support — Guided learning hours (ước tính, chỉ để tham khảo)",
            "x": 60,
            "y": 1825,
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
          "say": "Stop three, Thursday night. Dũng finds Cambridge's guided learning hours, and starts to sweat.",
          "sub": "Chặng ba, tối thứ Năm. Dũng tìm thấy bảng giờ học có hướng dẫn của Cambridge, và bắt đầu toát mồ hôi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "About ninety to a hundred hours for A one. One hundred eighty to two hundred for A two.",
          "sub": "Khoảng 90–100 giờ cho A1. 180–200 giờ cho A2."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three hundred fifty to four hundred for B one. Five to six hundred for B two.",
          "sub": "350–400 giờ cho B1. 500–600 giờ cho B2.",
          "keys": [
            "350–400 giờ cho B1"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "I'm at A two. So four hundred more hours to reach B one? That's forever!",
          "sub": "Anh đang A2. Vậy học thêm 400 giờ nữa mới tới B1? Đến bao giờ!",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Relax. Those are totals counted from the very start, not hours between two levels.",
          "sub": "Bình tĩnh. Đó là tổng cộng dồn từ lúc bắt đầu, không phải số giờ giữa hai bậc.",
          "keys": [
            "cộng dồn từ lúc bắt đầu"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "At A two, Dũng has already climbed part of that staircase.",
          "sub": "Ở A2, Dũng đã leo được một đoạn cầu thang ấy rồi."
        }
      ],
      "ref": "p11,p13"
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
          }
        ],
        "items": [
          {
            "id": "f-dep",
            "t": "text",
            "text": "Tuỳ: nền, nhịp học, tuổi",
            "x": 60,
            "y": 1705,
            "size": 40,
            "at": "l1:depends",
            "color": "muted"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Đích: bậc kế tiếp",
            "x": 60,
            "y": 1760,
            "size": 50,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "bậc kế tiếp",
                "at": "l3:next level"
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
          "say": "Real time also depends on your past learning, how often you study, and your age.",
          "sub": "Thời gian thật còn tuỳ bạn từng học ngoại ngữ chưa, học dày hay thưa, và tuổi tác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And how much English you hear and read outside lessons. Two people at one level can differ a lot.",
          "sub": "Và lượng tiếng Anh nghe, đọc ngoài giờ học. Hai người cùng bậc có thể cần thời gian khác nhau khá nhiều."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: aim for the next level, and treat the hours as a planning estimate, not a promise.",
          "sub": "Rút ra: đặt đích là bậc kế tiếp, coi số giờ là ước tính để lên lịch, không phải lời hứa.",
          "keys": [
            "bậc kế tiếp"
          ]
        }
      ],
      "ref": "p12,p14"
    },
    {
      "id": "s14",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Thứ Sáu 21:00 · lịch tuần",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Cả tuần chỉ làm bài ngữ pháp",
          "why": "Dễ làm một mình nên dồn hết vào ngữ pháp, từ vựng: lệch kỹ năng.",
          "rule": "Chia gần đều cho bốn mạch"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "My new plan: grammar drills, Monday to Sunday. Easy to do alone!",
          "sub": "Kế hoạch mới: thứ Hai đến Chủ nhật, toàn bài tập ngữ pháp. Tự làm một mình được!",
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
          "say": "Self learners love grammar and vocabulary because they're easy alone. But that's one strand of four.",
          "sub": "Người tự học mê ngữ pháp, từ vựng vì dễ làm một mình. Nhưng đó chỉ là một trong bốn mạch.",
          "keys": [
            "một trong bốn mạch"
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
          "say": "Okay. Some listening and reading, some speaking and writing, some grammar, some fluency practice.",
          "sub": "Được. Chút nghe đọc, chút nói viết, chút ngữ pháp, chút luyện trôi chảy.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Better. Roughly equal time for each strand.",
          "sub": "Tốt hơn. Mỗi mạch thời gian gần bằng nhau.",
          "phase": "redo",
          "keys": [
            "gần bằng nhau"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p16"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "④ Thứ Sáu · Bốn mạch",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four",
            "hl": [
              {
                "text": "Bốn mạch",
                "at": "l1:four strands"
              }
            ]
          },
          {
            "id": "g-b0",
            "t": "box",
            "x": 2028,
            "y": 1250,
            "w": 770,
            "h": 230,
            "at": "l2:One",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "g-bt0",
            "t": "text",
            "text": "① Nghe, đọc",
            "x": 2058,
            "y": 1280,
            "size": 56,
            "at": "l2:One+200"
          },
          {
            "id": "g-bs0",
            "t": "text",
            "text": "tiếp nhận có nghĩa",
            "x": 2058,
            "y": 1380,
            "size": 42,
            "at": "l2:One+500",
            "color": "muted"
          },
          {
            "id": "g-b1",
            "t": "box",
            "x": 2868,
            "y": 1250,
            "w": 770,
            "h": 230,
            "at": "l3:Two",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "g-bt1",
            "t": "text",
            "text": "② Nói, viết",
            "x": 2898,
            "y": 1280,
            "size": 56,
            "at": "l3:Two+200"
          },
          {
            "id": "g-bs1",
            "t": "text",
            "text": "diễn đạt có nghĩa",
            "x": 2898,
            "y": 1380,
            "size": 42,
            "at": "l3:Two+500",
            "color": "muted"
          },
          {
            "id": "g-b2",
            "t": "box",
            "x": 2028,
            "y": 1530,
            "w": 770,
            "h": 230,
            "at": "l4:Three",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "g-bt2",
            "t": "text",
            "text": "③ Âm, từ, ngữ pháp",
            "x": 2058,
            "y": 1560,
            "size": 56,
            "at": "l4:Three+200"
          },
          {
            "id": "g-bs2",
            "t": "text",
            "text": "học chú ý vào ngôn ngữ",
            "x": 2058,
            "y": 1660,
            "size": 42,
            "at": "l4:Three+500",
            "color": "muted"
          },
          {
            "id": "g-b3",
            "t": "box",
            "x": 2868,
            "y": 1530,
            "w": 770,
            "h": 230,
            "at": "l5:Four",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "g-bt3",
            "t": "text",
            "text": "④ Trôi chảy",
            "x": 2898,
            "y": 1560,
            "size": 56,
            "at": "l5:Four+200"
          },
          {
            "id": "g-bs3",
            "t": "text",
            "text": "với những gì đã biết",
            "x": 2898,
            "y": 1660,
            "size": 42,
            "at": "l5:Four+500",
            "color": "muted"
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "≈ 1/4",
            "x": 3468,
            "y": 1690,
            "size": 70,
            "at": "l6:quarter",
            "color": "coral",
            "hl": [
              {
                "text": "1/4",
                "at": "l6:quarter"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Paul Nation (2014), Victoria University of Wellington",
            "x": 2028,
            "y": 1820,
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
          "say": "Stop four, Friday night. Linguist Paul Nation splits learning into four strands.",
          "sub": "Chặng bốn, tối thứ Sáu. Nhà ngôn ngữ học Paul Nation chia việc học thành bốn mạch.",
          "keys": [
            "bốn mạch"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: meaning focused input. Listening and reading.",
          "sub": "Một: tiếp nhận có nghĩa. Nghe và đọc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: meaning focused output. Speaking and writing.",
          "sub": "Hai: diễn đạt có nghĩa. Nói và viết."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: language focused learning, like pronunciation, vocabulary and grammar.",
          "sub": "Ba: học chú ý vào ngôn ngữ, như phát âm, từ vựng, ngữ pháp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Four: fluency practice with what you already know.",
          "sub": "Bốn: luyện trôi chảy với những gì mình đã biết."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Strand three should take only about a quarter of your time. A slice, not the whole cake.",
          "sub": "Mạch ba chỉ nên chiếm khoảng một phần tư thời gian. Một miếng, không phải cả cái bánh.",
          "keys": [
            "một phần tư"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "at": "l3:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑤ Thứ Bảy · Giữ sức",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
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
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "notebook",
                "soccer-ball"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Saturday",
            "caption": "Thứ Bảy 9:00 · quán quen",
            "icon": "seedling"
          },
          {
            "id": "h-20",
            "t": "text",
            "text": "Đích ngắn: 20 từ mới",
            "x": 3996,
            "y": 1260,
            "size": 54,
            "at": "l2:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "20 từ mới",
                "at": "l2:twenty"
              }
            ]
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1370,
            "w": 44,
            "h": 44,
            "at": "l3:words",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1352,
            "size": 56,
            "at": "l3:words+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "số từ",
            "x": 4061,
            "y": 1362,
            "size": 44,
            "at": "l3:words+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1445,
            "w": 44,
            "h": 44,
            "at": "l3:pages",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1427,
            "size": 56,
            "at": "l3:pages+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "số trang đọc",
            "x": 4061,
            "y": 1437,
            "size": 44,
            "at": "l3:pages+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1520,
            "w": 44,
            "h": 44,
            "at": "l3:minutes",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1502,
            "size": 56,
            "at": "l3:minutes+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "số phút nghe",
            "x": 4061,
            "y": 1512,
            "size": 44,
            "at": "l3:minutes+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1595,
            "w": 44,
            "h": 44,
            "at": "l3:record",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1577,
            "size": 56,
            "at": "l3:record+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "ghi lại",
            "x": 4061,
            "y": 1587,
            "size": 44,
            "at": "l3:record+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, Saturday morning. Course number four? Dũng still hasn't bought it. Progress!",
          "sub": "Chặng năm, sáng thứ Bảy. Khoá thứ tư? Dũng vẫn chưa mua. Tiến bộ đấy!"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Nation's advice: short goals where progress is visible, like twenty new words.",
          "sub": "Lời khuyên của Nation: đích ngắn thấy được tiến bộ, ví dụ học hai mươi từ mới.",
          "keys": [
            "hai mươi từ mới"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Weekly goals in my notebook: words, pages read, minutes of listening. Then I record what I did.",
          "sub": "Đích tuần ghi vào sổ: số từ, số trang đọc, số phút nghe. Rồi ghi lại mình đã làm được gì.",
          "face": "happy"
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s17",
      "module": "BRK-10",
      "data": {
        "quote": "Muốn học được điều gì thì hãy làm điều đó thật nhiều",
        "mark": "thật nhiều",
        "by": "Paul Nation — nguyên tắc thời gian thực hành",
        "illus": "open-book"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "If you want to learn something, do it a lot.",
          "sub": "Muốn học được điều gì, hãy làm điều đó thật nhiều.",
          "keys": [
            "thật nhiều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Paul Nation's time on task principle.",
          "sub": "Nguyên tắc thời gian thực hành của Paul Nation."
        }
      ],
      "ref": "p17"
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
            "at": "l1",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-st",
            "t": "text",
            "text": "Mạnh nhất: hứng thú của mình",
            "x": 3996,
            "y": 1690,
            "size": 46,
            "at": "l2:strongest",
            "color": "accent",
            "hl": [
              {
                "text": "hứng thú",
                "at": "l2:interest"
              }
            ]
          },
          {
            "id": "h-wk",
            "t": "text",
            "text": "Yếu nhất: bị ép",
            "x": 3996,
            "y": 1770,
            "size": 46,
            "at": "l2:forced",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Football commentary in English? That I would watch every single day.",
          "sub": "Bình luận bóng đá bằng tiếng Anh? Cái này ngày nào anh cũng xem.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Perfect. Nation says the strongest motivation is your own interest. The weakest? Being forced.",
          "sub": "Chuẩn. Nation nói động lực mạnh nhất là hứng thú của chính mình. Yếu nhất? Bị người khác ép.",
          "keys": [
            "hứng thú của chính mình"
          ]
        }
      ],
      "ref": "p18"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑥ Chủ nhật · Lộ trình 4 bài",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six",
            "hl": [
              {
                "text": "Lộ trình",
                "at": "l1:route"
              }
            ]
          },
          {
            "id": "i-b0",
            "t": "box",
            "x": 5964,
            "y": 1290,
            "w": 360,
            "h": 200,
            "at": "l2:One",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "i-n0",
            "t": "text",
            "text": "1",
            "x": 5984,
            "y": 1300,
            "size": 56,
            "at": "l2:One+100",
            "color": "accent"
          },
          {
            "id": "i-bt0",
            "t": "text",
            "text": "Khung 6 bậc",
            "x": 5984,
            "y": 1375,
            "size": 40,
            "at": "l2:One+200"
          },
          {
            "id": "i-bs0",
            "t": "text",
            "text": "thước đo",
            "x": 5984,
            "y": 1430,
            "size": 34,
            "at": "l2:One+400",
            "color": "muted"
          },
          {
            "id": "i-a0",
            "t": "arrow",
            "from": [
              6329,
              1390
            ],
            "to": [
              6379,
              1390
            ],
            "at": "l2:One+600"
          },
          {
            "id": "i-b1",
            "t": "box",
            "x": 6384,
            "y": 1290,
            "w": 360,
            "h": 200,
            "at": "l2:Two",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "i-n1",
            "t": "text",
            "text": "2",
            "x": 6404,
            "y": 1300,
            "size": 56,
            "at": "l2:Two+100",
            "color": "accent"
          },
          {
            "id": "i-bt1",
            "t": "text",
            "text": "Bài test miễn phí",
            "x": 6404,
            "y": 1375,
            "size": 40,
            "at": "l2:Two+200"
          },
          {
            "id": "i-bs1",
            "t": "text",
            "text": "mình ở đâu",
            "x": 6404,
            "y": 1430,
            "size": 34,
            "at": "l2:Two+400",
            "color": "muted"
          },
          {
            "id": "i-a1",
            "t": "arrow",
            "from": [
              6749,
              1390
            ],
            "to": [
              6799,
              1390
            ],
            "at": "l2:Two+600"
          },
          {
            "id": "i-b2",
            "t": "box",
            "x": 6804,
            "y": 1290,
            "w": 360,
            "h": 200,
            "at": "l3:Three",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "i-n2",
            "t": "text",
            "text": "3",
            "x": 6824,
            "y": 1300,
            "size": 56,
            "at": "l3:Three+100",
            "color": "accent"
          },
          {
            "id": "i-bt2",
            "t": "text",
            "text": "Kế hoạch tuần",
            "x": 6824,
            "y": 1375,
            "size": 40,
            "at": "l3:Three+200"
          },
          {
            "id": "i-bs2",
            "t": "text",
            "text": "chia thời gian",
            "x": 6824,
            "y": 1430,
            "size": 34,
            "at": "l3:Three+400",
            "color": "muted"
          },
          {
            "id": "i-a2",
            "t": "arrow",
            "from": [
              7169,
              1390
            ],
            "to": [
              7219,
              1390
            ],
            "at": "l3:Three+600"
          },
          {
            "id": "i-b3",
            "t": "box",
            "x": 7224,
            "y": 1290,
            "w": 360,
            "h": 200,
            "at": "l3:Four",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "i-n3",
            "t": "text",
            "text": "4",
            "x": 7244,
            "y": 1300,
            "size": 56,
            "at": "l3:Four+100",
            "color": "accent"
          },
          {
            "id": "i-bt3",
            "t": "text",
            "text": "Động lực",
            "x": 7244,
            "y": 1375,
            "size": 40,
            "at": "l3:Four+200"
          },
          {
            "id": "i-bs3",
            "t": "text",
            "text": "đi đường dài",
            "x": 7244,
            "y": 1430,
            "size": 34,
            "at": "l3:Four+400",
            "color": "muted"
          },
          {
            "id": "i-lis",
            "t": "text",
            "text": "Nghe “đứng hình”? → chuỗi nghe riêng",
            "x": 5964,
            "y": 1610,
            "size": 46,
            "at": "l5:listening",
            "color": "coral",
            "hl": [
              {
                "text": "chuỗi nghe riêng",
                "at": "l5:separate"
              }
            ]
          },
          {
            "id": "i-ear",
            "t": "illus",
            "name": "ear",
            "x": 7354,
            "y": 1570,
            "size": 140,
            "at": "l4:freeze"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, Sunday evening. Lan maps the route for the coming weeks, in four lessons.",
          "sub": "Chặng sáu, tối Chủ nhật. Lan vẽ lộ trình cho mấy tuần tới, gồm bốn bài.",
          "keys": [
            "bốn bài"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: the six level framework, your scale. Two: the free level test, your starting point.",
          "sub": "Một: Khung 6 bậc, để có thước đo. Hai: bài kiểm tra miễn phí, để biết mình ở đâu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three: the weekly plan, to split your time. Four: motivation, for the long road.",
          "sub": "Ba: kế hoạch tuần, để chia thời gian. Bốn: động lực, để đi đường dài."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "But I read fine and freeze when I listen. Where does that go?",
          "sub": "Nhưng em đọc ổn mà nghe thì đứng hình. Phần đó ở đâu?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "This series doesn't go deep on listening. There's a separate listening series for slow beginners.",
          "sub": "Chuỗi này không đi sâu vào nghe. Có chuỗi riêng: “Nghe được tiếng Anh từ chậm đến nhanh”.",
          "keys": [
            "chuỗi riêng"
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
            "text": "Thứ Hai tuần sau · 21:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "notebook",
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
                  "shot": "E-SHOT-06",
                  "on": "lan",
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
            "caption": "Thứ Hai 21:00 · cùng quán",
            "icon": "notebook"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Đang: khoảng A2",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l2:around"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Đích: B1 = bậc 3",
            "x": 7932,
            "y": 1340,
            "size": 56,
            "at": "l2:goal",
            "color": "accent",
            "hl": [
              {
                "text": "bậc 3",
                "at": "l2:level three"
              }
            ]
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Sổ có ghi ngày → so lại",
            "x": 7932,
            "y": 1430,
            "size": 46,
            "at": "l3:date",
            "hl": [
              {
                "text": "ghi ngày",
                "at": "l3:date"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Đi một ngày đàng…”",
            "x": 7932,
            "y": 1540,
            "size": 54,
            "at": "l4:travel",
            "color": "accent",
            "hl": [
              {
                "text": "Đi một ngày đàng",
                "at": "l4:travel"
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
          "say": "Monday again, nine p.m. Same café, same Dũng, same three old course books.",
          "sub": "Lại thứ Hai, chín giờ tối. Vẫn quán ấy, vẫn Dũng ấy, vẫn ba bộ giáo trình cũ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Me: around A two. My goal: B one, which is level three. The next level, not the top.",
          "sub": "Anh: khoảng A2. Đích: B1, tức bậc 3. Bậc kế tiếp thôi, chưa phải đỉnh.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "And my notebook has the date, so we can compare in a few months.",
          "sub": "Còn sổ của em có ghi ngày, vài tháng nữa so lại.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Travel one day, learn a basket of wisdom. This week, they also drew the map.",
          "sub": "“Đi một ngày đàng, học một sàng khôn.” Tuần này, hai người còn vẽ được tấm bản đồ.",
          "keys": [
            "tấm bản đồ"
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
      "ref": "p9,p14"
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
            "at": "l1:level three",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:skill",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:four",
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
            "x": 6664,
            "y": 280,
            "at": "l1:level three"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8692,
            "y": 700,
            "at": "l2:skill"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3608,
            "y": 1260,
            "at": "l3:four"
          },
          {
            "id": "z-do",
            "t": "text",
            "text": "Làm ngay: đọc mô tả bậc",
            "x": 7932,
            "y": 1690,
            "size": 46,
            "at": "l4:Do it",
            "color": "accent",
            "hl": [
              {
                "text": "Làm ngay",
                "at": "l4:Do it"
              }
            ]
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; quy định có thể thay đổi — khi cần áp dụng, kiểm lại văn bản đang có hiệu lực. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
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
          "say": "So: find your level on one shared scale, and remember, B one is level three.",
          "sub": "Tóm lại: tìm bậc của mình trên một thước đo chung, và nhớ B1 là bậc 3.",
          "keys": [
            "một thước đo chung"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check yourself with a test plus a skill by skill look, then aim for the next level.",
          "sub": "Tự kiểm bằng bài test cộng xem từng kỹ năng, rồi đặt đích bậc kế tiếp.",
          "keys": [
            "bậc kế tiếp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Split each week across four strands, and record your progress.",
          "sub": "Chia mỗi tuần cho bốn mạch, và ghi lại tiến bộ.",
          "keys": [
            "bốn mạch"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Do it now: open the next lesson and read the description of your level.",
          "sub": "Làm ngay: mở bài tiếp theo, đọc mô tả bậc của mình."
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
        "q": "You are at A two and want B one, what is wrong with planning four hundred more hours?",
        "options": [
          "Four hundred hours is far too few, because B one needs several thousand more",
          "That figure is a total from the beginning, so you have already covered part of it",
          "Nothing is wrong, since every level always needs four hundred hours on top"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "hourglass-done",
        "why": "350–400 giờ là tổng cộng dồn từ đầu đến B1. Người đã ở A2 đã đi được một phần quãng đó."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You are at A two and want B one, what is wrong with planning four hundred more hours?",
          "sub": "Bạn đang ở A2 và muốn lên B1. Lên kế hoạch học thêm 400 giờ sai ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "That figure is a total from the beginning, so you have already covered part of it.",
          "sub": "Đó là tổng tính từ đầu, nên bạn đã đi được một phần."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Remember Dũng: part of the staircase is already behind you.",
          "sub": "Nhớ Dũng nhé: một đoạn cầu thang đã ở sau lưng bạn rồi."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[25]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Đã có bản đồ. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "You have the map. Now walk the first stretch: forty questions below.",
          "sub": "Bạn đã có bản đồ. Giờ đi chặng đầu: bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (bài tổng chuỗi beginner-self-study-planners) dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT TUẦN học lại của Dũng và Lan (thứ Hai 21:00 quán dưới công ty, ba bộ giáo trình dở dang → ① thứ Ba khung 6 bậc + “B1 = bậc 1?” → ② thứ Tư Lan tự kiểm → ③ thứ Năm giờ học Cambridge → thứ Sáu “Khoan đã!” lịch toàn ngữ pháp → ④ bốn mạch Nation → ⑤ thứ Bảy giữ sức → ⑥ Chủ nhật lộ trình bốn bài → thứ Hai tuần sau 21:00 cùng quán). HOOK-24 neo “3 khoá học, 3 lần bỏ dở” (intro). Nhân vật: Dũng (anh Hùng trong bài), Lan (chị Lan) — w145/_series/beginner-self-study-planners.md. Cảnh ngắt nhịp: BRK-08 (một tuần), BRK-04 (B1 = bậc 1 / bậc 3), BRK-07 (rehook bao lâu), BRK-10 (Nation: làm thật nhiều). Tục ngữ: “Đi một ngày đàng, học một sàng khôn”. Câu đố questions[25].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
