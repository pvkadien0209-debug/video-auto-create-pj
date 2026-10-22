// vietnam-six-level-framework--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "vietnam-six-level-framework--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "beginner-self-study-planners",
    "slug": "vietnam-six-level-framework",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Khung năng lực ngoại ngữ 6 bậc của Việt Nam nói gì về từng bậc?",
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
            "id": "a-b2",
            "t": "text",
            "text": "“Tiếng Anh B2”",
            "x": 60,
            "y": 100,
            "size": 120,
            "at": "l1:B two",
            "color": "accent",
            "hl": [
              {
                "text": "B2",
                "at": "l1:B two"
              }
            ]
          },
          {
            "id": "a-o1",
            "t": "box",
            "x": 60,
            "y": 330,
            "w": 360,
            "h": 130,
            "at": "l2:two",
            "stroke": 5
          },
          {
            "id": "a-o1t",
            "t": "text",
            "text": "bậc 2?",
            "x": 110,
            "y": 350,
            "size": 70,
            "at": "l2:two+200"
          },
          {
            "id": "a-o2",
            "t": "box",
            "x": 500,
            "y": 330,
            "w": 360,
            "h": 130,
            "at": "l2:four",
            "stroke": 5
          },
          {
            "id": "a-o2t",
            "t": "text",
            "text": "bậc 4?",
            "x": 550,
            "y": 350,
            "size": 70,
            "at": "l2:four+200"
          },
          {
            "id": "a-o1x",
            "t": "strike",
            "over": "a-o1t",
            "at": "l3:four"
          },
          {
            "id": "a-r",
            "t": "ring",
            "around": [
              "a-o2"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:four"
          },
          {
            "id": "a-why",
            "t": "text",
            "text": "Vì sao? Giữ câu hỏi lại",
            "x": 60,
            "y": 520,
            "size": 48,
            "at": "l3:Why",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "You see a job advert: English, B two.",
          "sub": "Bạn đọc một tin tuyển dụng ghi: tiếng Anh B2.",
          "keys": [
            "B2"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In Vietnam's six level framework, is that level two, or level four? Make your guess.",
          "sub": "Trên Khung 6 bậc của Việt Nam, đó là bậc 2 hay bậc 4? Bạn đoán thử.",
          "keys": [
            "bậc 2 hay bậc 4"
          ],
          "wait": 1500
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Most people say two. The answer is four. Why? Hold that thought.",
          "sub": "Đa số đoán bậc 2. Đáp án: bậc 4. Vì sao? Giữ câu hỏi đó lại.",
          "keys": [
            "Đáp án: bậc 4"
          ]
        }
      ],
      "ref": "p5"
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "briefcase"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "caption": "Thứ Bảy 9:00 · nhà Lan",
            "icon": "mobile-phone"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Biết người biết ta…”",
            "x": 60,
            "y": 620,
            "size": 54,
            "at": "l5:know",
            "color": "accent",
            "hl": [
              {
                "text": "Biết người biết ta",
                "at": "l5:know"
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
          "say": "Meet Thảo, Lan's cousin, hunting for a job at a foreign company.",
          "sub": "Đây là Thảo, em họ của Lan, đang tìm việc ở công ty nước ngoài.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Saturday, nine a.m., on Lan's sofa. She reads job adverts like other people read gossip.",
          "sub": "Chín giờ sáng thứ Bảy, trên ghế nhà Lan. Thảo đọc tin tuyển dụng như người ta đọc tin showbiz."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "B two? That's only level two. Easy. I'm applying right now!",
          "sub": "B2 á? Mới bậc 2 thôi. Dễ. Em nộp đơn luôn!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hold the send button. One letter, one number, one big misunderstanding.",
          "sub": "Khoan bấm gửi. Một chữ cái, một con số, một hiểu lầm to đùng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Sun Tzu said: know the enemy, know yourself, win every battle. First, know the scale.",
          "sub": "Binh pháp dạy: “Biết người biết ta, trăm trận trăm thắng.” Trước hết, biết cái thước đã.",
          "keys": [
            "Biết người biết ta"
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
      "ref": "intro,p5"
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
            "text": "Mỗi bậc nói gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:each level",
            "hl": [
              {
                "text": "Mỗi bậc",
                "at": "l1:each level"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: đoán theo mã",
            "x": 2028,
            "y": 180,
            "size": 56,
            "at": "l2:guessing",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:reading"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đọc “có thể làm gì”",
            "x": 2028,
            "y": 280,
            "size": 60,
            "at": "l2:reading",
            "color": "accent",
            "hl": [
              {
                "text": "có thể làm gì",
                "at": "l2:can do"
              }
            ]
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "mục đích · cấp bậc · mô tả",
            "x": 2028,
            "y": 400,
            "size": 46,
            "at": "l3:purpose"
          },
          {
            "id": "b-6",
            "t": "text",
            "text": "bậc hay gặp · khung 2026",
            "x": 2028,
            "y": 470,
            "size": 46,
            "at": "l3:often"
          },
          {
            "id": "b-ill",
            "t": "illus",
            "name": "magnifying-glass-tilted-left",
            "x": 3268,
            "y": 250,
            "size": 220,
            "at": "l2:reading"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what does Vietnam's six level framework actually say about each level?",
          "sub": "Vậy Khung năng lực ngoại ngữ 6 bậc của Việt Nam nói gì về từng bậc?",
          "keys": [
            "nói gì về từng bậc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So, not guessing from codes. Reading what each level can do.",
          "sub": "Vậy không phải đoán theo mã chữ, mà là đọc xem mỗi bậc có thể làm gì.",
          "keys": [
            "có thể làm gì"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Its purpose, the bands, the descriptions, the levels people often ask for, and what's new in twenty twenty six.",
          "sub": "Mục đích, các cấp, mô tả từng bậc, bậc hay được yêu cầu, và điểm mới năm 2026."
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Thứ Bảy ở nhà Lan",
        "points": [
          {
            "label": "9:00",
            "sub": "Tin “B2”",
            "illus": "mobile-phone"
          },
          {
            "label": "10:00",
            "sub": "Ba cấp",
            "illus": "ladder"
          },
          {
            "label": "14:00",
            "sub": "Dũng tự xếp",
            "illus": "memo"
          },
          {
            "label": "18:00",
            "sub": "Tin “bậc 3”",
            "illus": "briefcase"
          },
          {
            "label": "21:00",
            "sub": "Đọc lại tin",
            "illus": "check-mark-button"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One Saturday, one living room.",
          "sub": "Một ngày thứ Bảy, một phòng khách."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three learners, one scale.",
          "sub": "Ba người học, một cái thước.",
          "keys": [
            "một cái thước"
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
            "text": "① 9:30 · Khung để làm gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-base",
            "t": "text",
            "text": "Căn cứ chung cho mọi ngoại ngữ",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l2:shared",
            "color": "accent",
            "hl": [
              {
                "text": "mọi ngoại ngữ",
                "at": "l2:every"
              }
            ]
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 270,
            "w": 44,
            "h": 44,
            "at": "l3:programmes",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 252,
            "size": 56,
            "at": "l3:programmes+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "xây chương trình, giáo trình",
            "x": 4061,
            "y": 262,
            "size": 44,
            "at": "l3:programmes+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 345,
            "w": 44,
            "h": 44,
            "at": "l3:tests",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 327,
            "size": 56,
            "at": "l3:tests+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "ra đề kiểm tra",
            "x": 4061,
            "y": 337,
            "size": 44,
            "at": "l3:tests+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 420,
            "w": 44,
            "h": 44,
            "at": "l4:teachers",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 402,
            "size": 56,
            "at": "l4:teachers+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "giáo viên chọn cách dạy",
            "x": 4061,
            "y": 412,
            "size": 44,
            "at": "l4:teachers+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 495,
            "w": 44,
            "h": 44,
            "at": "l4:learners",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 477,
            "size": 56,
            "at": "l4:learners+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "người học tự đánh giá",
            "x": 4061,
            "y": 487,
            "size": 44,
            "at": "l4:learners+200"
          },
          {
            "id": "c-c4",
            "t": "box",
            "x": 3996,
            "y": 570,
            "w": 44,
            "h": 44,
            "at": "l5:recognise",
            "stroke": 5
          },
          {
            "id": "c-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 552,
            "size": 56,
            "at": "l5:recognise+600",
            "color": "accent"
          },
          {
            "id": "c-l4",
            "t": "text",
            "text": "công nhận chứng chỉ",
            "x": 4061,
            "y": 562,
            "size": 44,
            "at": "l5:recognise+200"
          },
          {
            "id": "c-hl",
            "t": "text",
            "text": "← bạn ở đây",
            "x": 4796,
            "y": 482,
            "size": 46,
            "at": "l4:you",
            "color": "coral"
          },
          {
            "id": "c-gl",
            "t": "illus",
            "name": "globe-showing-asia-australia",
            "x": 5286,
            "y": 200,
            "size": 200,
            "at": "l6:new"
          },
          {
            "id": "c-cjk",
            "t": "text",
            "text": "Trung, Nhật, Hàn: được dùng",
            "x": 4936,
            "y": 590,
            "size": 40,
            "at": "l7:Chinese"
          },
          {
            "id": "c-cjk2",
            "t": "text",
            "text": "khung của nước sở tại",
            "x": 4976,
            "y": 650,
            "size": 40,
            "at": "l7:home"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: Thông tư 01/2014/TT-BGDĐT; báo VOH 16/4/2026",
            "x": 3996,
            "y": 735,
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
          "say": "Stop one, nine thirty. Lan brings coffee and a printout of Circular one of twenty fourteen.",
          "sub": "Chặng một, chín rưỡi. Lan mang cà phê và bản in Thông tư 01/2014."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The framework is one shared basis for ability requirements, for every foreign language in the national education system.",
          "sub": "Khung là căn cứ thống nhất về yêu cầu năng lực cho mọi ngoại ngữ trong hệ thống giáo dục quốc dân.",
          "keys": [
            "căn cứ thống nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It's used to build programmes and textbooks, and to write tests.",
          "sub": "Khung dùng để xây chương trình, biên soạn giáo trình, ra đề kiểm tra."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It helps teachers choose methods, and helps learners assess themselves. That's you.",
          "sub": "Giúp giáo viên chọn phương pháp, giúp người học tự đánh giá. Là bạn đấy.",
          "keys": [
            "tự đánh giá"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And it helps recognise certificates with countries that use CEFR.",
          "sub": "Và tạo điều kiện công nhận văn bằng, chứng chỉ với các nước dùng CEFR."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Because it covers every language, it works for English or a brand new one. And there's news.",
          "sub": "Vì dùng chung cho mọi ngoại ngữ, nó hợp cả tiếng Anh lẫn một tiếng mới tinh. Và có tin mới."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Under the twenty twenty six framework, Chinese, Japanese and Korean may use their home country frameworks.",
          "sub": "Theo khung mới năm 2026, tiếng Trung, Nhật, Hàn được dùng khung năng lực của nước sở tại."
        }
      ],
      "ref": "p1,p2"
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
            "text": "② 10:00 · Ba cấp, sáu bậc",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two",
            "hl": [
              {
                "text": "Ba cấp",
                "at": "l1:three bands"
              }
            ]
          },
          {
            "id": "d-s0",
            "t": "box",
            "x": 5964,
            "y": 540,
            "w": 500,
            "h": 170,
            "at": "l2:Elementary",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "d-st0",
            "t": "text",
            "text": "Sơ cấp",
            "x": 5994,
            "y": 552,
            "size": 52,
            "at": "l2:Elementary+200"
          },
          {
            "id": "d-ss0",
            "t": "text",
            "text": "1 = A1 · 2 = A2",
            "x": 5994,
            "y": 635,
            "size": 42,
            "at": "l2:Elementary+600"
          },
          {
            "id": "d-sg0",
            "t": "text",
            "text": "người dùng cơ bản",
            "x": 5994,
            "y": 485,
            "size": 34,
            "at": "l4:basic",
            "color": "muted"
          },
          {
            "id": "d-s1",
            "t": "box",
            "x": 6524,
            "y": 390,
            "w": 500,
            "h": 170,
            "at": "l2:Intermediate",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "d-st1",
            "t": "text",
            "text": "Trung cấp",
            "x": 6554,
            "y": 402,
            "size": 52,
            "at": "l2:Intermediate+200",
            "color": "accent"
          },
          {
            "id": "d-ss1",
            "t": "text",
            "text": "3 = B1 · 4 = B2",
            "x": 6554,
            "y": 485,
            "size": 42,
            "at": "l2:Intermediate+600",
            "hl": [
              {
                "text": "4 = B2",
                "at": "l5:four"
              }
            ]
          },
          {
            "id": "d-sg1",
            "t": "text",
            "text": "người dùng độc lập",
            "x": 6554,
            "y": 335,
            "size": 34,
            "at": "l4:independent",
            "color": "muted"
          },
          {
            "id": "d-s2",
            "t": "box",
            "x": 7084,
            "y": 240,
            "w": 500,
            "h": 170,
            "at": "l3:Advanced",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "d-st2",
            "t": "text",
            "text": "Cao cấp",
            "x": 7114,
            "y": 252,
            "size": 52,
            "at": "l3:Advanced+200"
          },
          {
            "id": "d-ss2",
            "t": "text",
            "text": "5 = C1 · 6 = C2",
            "x": 7114,
            "y": 335,
            "size": 42,
            "at": "l3:Advanced+600"
          },
          {
            "id": "d-sg2",
            "t": "text",
            "text": "người dùng thành thạo",
            "x": 7114,
            "y": 185,
            "size": 34,
            "at": "l4:proficient",
            "color": "muted"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Thông tư 01/2014; Council of Europe — CEFR Table 1 (global scale)",
            "x": 5964,
            "y": 220,
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
          "say": "Stop two, ten a.m. The framework puts six levels into three bands.",
          "sub": "Chặng hai, mười giờ. Khung chia sáu bậc thành ba cấp.",
          "keys": [
            "ba cấp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Elementary: level one, A one, and level two, A two. Intermediate: level three, B one, and level four, B two.",
          "sub": "Sơ cấp: bậc 1 là A1, bậc 2 là A2. Trung cấp: bậc 3 là B1, bậc 4 là B2."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Advanced: level five, C one, and level six, C two.",
          "sub": "Cao cấp: bậc 5 là C1, bậc 6 là C2."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Europe's CEFR also has three groups: basic, independent and proficient users. They line up neatly.",
          "sub": "CEFR của Hội đồng châu Âu cũng có ba nhóm: người dùng cơ bản, độc lập, thành thạo. Khớp đúng ba cấp.",
          "keys": [
            "Khớp đúng ba cấp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So, Thảo's B two? Level four. The upper half of intermediate.",
          "sub": "Vậy B2 của Thảo? Bậc 4. Nửa trên của cấp trung cấp.",
          "keys": [
            "Bậc 4"
          ]
        }
      ],
      "ref": "p3,p4,p5"
    },
    {
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "Tin tuyển dụng ghi “B2”",
        "wrong": "B2 = bậc 2, sơ cấp, nộp ngay",
        "right": "B2 = bậc 4, mức cao của trung cấp",
        "wrongIllus": "red-question-mark",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "B two, level two, apply now?",
          "sub": "B2 là bậc 2, nộp đơn ngay?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. B two is level four, the higher intermediate level.",
          "sub": "Không. B2 là bậc 4, mức cao hơn của trung cấp.",
          "keys": [
            "bậc 4"
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
          }
        ],
        "items": [
          {
            "id": "d-k",
            "t": "text",
            "text": "Gặp mã chữ → đổi ra số bậc",
            "x": 5964,
            "y": 130,
            "size": 46,
            "at": "l1:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "đổi ra số bậc",
                "at": "l1:convert"
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
          "say": "Takeaway: meet a letter code like B two? Convert it to a level number first, then compare yourself.",
          "sub": "Rút ra: gặp mã chữ như B2, đổi sang số bậc theo bảng rồi mới so với mình.",
          "keys": [
            "đổi sang số bậc"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 11:00 · Mỗi bậc làm được gì",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Bậc 1: tự giới thiệu",
            "x": 7932,
            "y": 180,
            "size": 50,
            "at": "l2:one"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Bậc 2: chuyện quen hằng ngày",
            "x": 7932,
            "y": 290,
            "size": 50,
            "at": "l3:two"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Bậc 3: viết đoạn đơn giản",
            "x": 7932,
            "y": 400,
            "size": 50,
            "at": "l4:three",
            "color": "accent",
            "hl": [
              {
                "text": "viết đoạn",
                "at": "l4:paragraphs"
              }
            ]
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Bậc 4: trôi chảy, tự nhiên",
            "x": 8772,
            "y": 180,
            "size": 50,
            "at": "l5:four"
          },
          {
            "id": "e-l4",
            "t": "text",
            "text": "Bậc 5: không phải tìm từ",
            "x": 8772,
            "y": 290,
            "size": 50,
            "at": "l6:five"
          },
          {
            "id": "e-l5",
            "t": "text",
            "text": "Bậc 6: hiểu dễ hầu hết",
            "x": 8772,
            "y": 400,
            "size": 50,
            "at": "l7:six"
          },
          {
            "id": "e-can",
            "t": "text",
            "text": "viết kiểu “có thể…”",
            "x": 7932,
            "y": 540,
            "size": 54,
            "at": "l1:can",
            "color": "coral",
            "hl": [
              {
                "text": "có thể",
                "at": "l1:can"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Trích mô tả tổng quát, Thông tư 01/2014/TT-BGDĐT",
            "x": 7932,
            "y": 735,
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
          "say": "Stop three, eleven a.m. The circular describes each level as what you can do.",
          "sub": "Chặng ba, mười một giờ. Thông tư mô tả mỗi bậc theo kiểu “có thể làm gì”.",
          "keys": [
            "có thể làm gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Level one: understand familiar everyday structures, introduce yourself, answer basic questions.",
          "sub": "Bậc 1: hiểu, dùng cấu trúc quen thuộc thường nhật, giới thiệu bản thân, trả lời thông tin cơ bản."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Level two: exchange information on simple, familiar daily topics, and describe your surroundings.",
          "sub": "Bậc 2: trao đổi thông tin về chủ đề đơn giản, quen thuộc hằng ngày, mô tả bản thân và xung quanh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Level three: write simple paragraphs on familiar topics, and handle most situations.",
          "sub": "Bậc 3: viết đoạn văn đơn giản về chủ đề quen thuộc, xử lý được hầu hết tình huống.",
          "keys": [
            "viết đoạn văn đơn giản"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Level four: communicate fluently and naturally with native speakers, and write clear, detailed texts.",
          "sub": "Bậc 4: giao tiếp trôi chảy, tự nhiên với người bản ngữ, viết văn bản rõ ràng, chi tiết."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Level five: express yourself fluently, at once, without searching for words.",
          "sub": "Bậc 5: diễn đạt trôi chảy, tức thì, không phải tìm từ."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Level six: understand almost everything easily, and say it very precisely. The summit, with a view.",
          "sub": "Bậc 6: hiểu dễ dàng hầu hết văn nói, viết, diễn đạt rất chính xác. Đỉnh núi, có view."
        }
      ],
      "ref": "p7,p8,p9"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Mỗi kỹ năng của bạn đang ở bậc nào?",
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
          "say": "Is every one of your skills at the same level?",
          "sub": "Mọi kỹ năng của bạn có cùng một bậc không?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p14"
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
            "text": "④ 14:00 · Nói và viết",
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo",
                "pencil"
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
            "at": "l2:Dũng",
            "caption": "14:00 · Dũng ghé chơi",
            "icon": "memo"
          },
          {
            "id": "f-w1",
            "t": "text",
            "text": "Viết 1: câu ngắn về mình",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l3:one"
          },
          {
            "id": "f-w2",
            "t": "text",
            "text": "Viết 2: nối and, but, because",
            "x": 60,
            "y": 1335,
            "size": 46,
            "at": "l3:two",
            "color": "accent",
            "hl": [
              {
                "text": "and, but, because",
                "at": "l3:because"
              }
            ]
          },
          {
            "id": "f-w3",
            "t": "text",
            "text": "Viết 3: bài có liên kết",
            "x": 60,
            "y": 1410,
            "size": 46,
            "at": "l3:three"
          },
          {
            "id": "f-i",
            "t": "text",
            "text": "Nói tương tác: 1 → 2 → 3",
            "x": 60,
            "y": 1510,
            "size": 44,
            "at": "l5:interaction"
          },
          {
            "id": "f-me",
            "t": "text",
            "text": "Dũng: viết bậc 2 ✓",
            "x": 60,
            "y": 1610,
            "size": 50,
            "at": "l6:level two",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, two p.m. Beyond the general picture, the framework details four skills, each with smaller parts.",
          "sub": "Chặng bốn, hai giờ chiều. Ngoài mô tả chung, khung mô tả chi tiết bốn kỹ năng, mỗi kỹ năng nhiều tiểu mục."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And here's Dũng, Lan's colleague, who dropped by for coffee and stayed for homework.",
          "sub": "Và đây là Dũng, đồng nghiệp của Lan, ghé uống cà phê rồi ở lại làm bài.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Writing: level one, short sentences about yourself. Level two, linked with and, but, because. Level three, connected texts.",
          "sub": "Viết: bậc 1 câu ngắn về bản thân. Bậc 2 nối bằng “và, nhưng, vì”. Bậc 3 viết bài có liên kết."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Five sentences about my job. Short ones, joined with and, but, because. No real connected text yet.",
          "sub": "Năm câu về công việc. Câu ngắn, nối bằng and, but, because. Chưa viết được bài liên kết.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Spoken interaction: level one, simple statements. Level two, simple and direct. Level three, fairly confident.",
          "sub": "Nói tương tác: bậc 1 nhận định đơn giản. Bậc 2 giao tiếp đơn giản, trực tiếp. Bậc 3 tương đối tự tin."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "So Dũng's writing sits at level two. Quite fair.",
          "sub": "Vậy kỹ năng viết của Dũng ở bậc 2. Khá công bằng."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p10,p11,p12,p13"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "14:30 · Dũng tự xếp bậc",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "lan",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Viết bậc 2 nên mọi kỹ năng bậc 2",
          "why": "Mỗi kỹ năng có thể ở một bậc khác: nói tương tác của Dũng mới bậc 1.",
          "rule": "Đo riêng từng kỹ năng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Writing, level two. So I'm level two at everything. Done!",
          "sub": "Viết bậc 2. Vậy cái gì anh cũng bậc 2. Xong!",
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
          "say": "One skill is not all skills. Try speaking with Lan first.",
          "sub": "Một kỹ năng đâu phải mọi kỹ năng. Thử nói với Lan trước đã.",
          "keys": [
            "đâu phải mọi kỹ năng"
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
          "say": "So, Dũng, tell me about your weekend.",
          "sub": "Nào anh Dũng, kể về cuối tuần đi.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Uh... weekend... good. Football. Yes. Writing: level two. Speaking: level one.",
          "sub": "Ờ... cuối tuần... tốt. Bóng đá. Vâng. Viết: bậc 2. Nói: bậc 1.",
          "phase": "redo",
          "face": "worried"
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
      "id": "s12",
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
            "id": "f-sp",
            "t": "text",
            "text": "Nói tương tác: bậc 1",
            "x": 60,
            "y": 1690,
            "size": 50,
            "at": "l1:speaking",
            "color": "coral"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Đo riêng từng kỹ năng",
            "x": 60,
            "y": 1770,
            "size": 58,
            "at": "l2:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "từng kỹ năng",
                "at": "l2:each skill"
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
          "say": "Writing, level two. Speaking, level one. Same Dũng, same Saturday.",
          "sub": "Viết bậc 2. Nói tương tác bậc 1. Vẫn Dũng ấy, vẫn thứ Bảy ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: one person can stand at different levels for different skills. Measure each skill separately.",
          "sub": "Rút ra: một người có thể đứng ở các bậc khác nhau cho từng kỹ năng, nên hãy đo riêng từng kỹ năng.",
          "keys": [
            "đo riêng từng kỹ năng"
          ]
        }
      ],
      "ref": "p13,p14"
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
            "text": "⑤ 16:00 · Nghe ở bậc thấp",
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
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "headphone",
                "radio"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Lan",
            "caption": "16:00 · Lan tập nghe",
            "icon": "headphone"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "1: rất chậm, dừng lâu",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l3:slow",
            "hl": [
              {
                "text": "rất chậm",
                "at": "l3:very slow"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "2: rõ, chậm, việc cụ thể",
            "x": 2028,
            "y": 1350,
            "size": 48,
            "at": "l4:clear"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "3: chủ đề hằng ngày, công việc",
            "x": 2028,
            "y": 1440,
            "size": 44,
            "at": "l5:everyday"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "4: chuẩn mực, kể cả phát thanh",
            "x": 2028,
            "y": 1530,
            "size": 44,
            "at": "l6:radio"
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "tạp âm, thành ngữ → khó",
            "x": 2068,
            "y": 1605,
            "size": 40,
            "at": "l6:noise",
            "color": "coral"
          },
          {
            "id": "g-s",
            "t": "text",
            "text": "→ chuỗi luyện nghe riêng",
            "x": 2028,
            "y": 1700,
            "size": 50,
            "at": "l7:listening series",
            "color": "accent",
            "hl": [
              {
                "text": "chuỗi luyện nghe",
                "at": "l7:listening series"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật (30/4/2026), mô tả nghe theo Thông tư 33/2026",
            "x": 2028,
            "y": 1825,
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
          "say": "Stop five, four p.m. Lan puts on headphones. Reading she can do. Listening? Frozen like an ice cube.",
          "sub": "Chặng năm, bốn giờ chiều. Lan đeo tai nghe. Đọc thì được. Nghe à? Đứng hình như cục đá."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "If they spoke slowly, with long pauses, I'd catch everything.",
          "sub": "Giá người ta nói chậm, dừng lâu, chắc em nghe được hết.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That's level one exactly: speech that is very slow, careful, with long pauses.",
          "sub": "Đúng mô tả bậc 1: lời nói rất chậm, cẩn thận và dừng lâu.",
          "keys": [
            "rất chậm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Level two: clear, slow speech about concrete needs, like personal details, shopping, local places and work.",
          "sub": "Bậc 2: lời rõ, chậm, đủ cho nhu cầu cụ thể như thông tin cá nhân, mua sắm, địa lý địa phương, việc làm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Level three: simple factual information on everyday or work topics.",
          "sub": "Bậc 3: hiểu thông tin thực tế, đơn giản về chủ đề hằng ngày hoặc công việc."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Level four: standard speech, live or on radio, though loud noise and idioms make it harder.",
          "sub": "Bậc 4: ngôn ngữ nói chuẩn mực, trực tiếp hay trên phát thanh, nhưng giảm khi có tạp âm lớn, thành ngữ."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Step by step practice lives in a separate listening series, from slow to fast.",
          "sub": "Cách luyện từng bước có ở chuỗi luyện nghe riêng: “Nghe được tiếng Anh từ chậm đến nhanh”.",
          "keys": [
            "chuỗi luyện nghe riêng"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "text": "⑥ 18:00 · Bậc hay được yêu cầu",
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
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "laptop",
                "briefcase"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Lan",
            "caption": "18:00 · tin tuyển dụng của Lan",
            "icon": "briefcase"
          },
          {
            "id": "h-b1",
            "t": "text",
            "text": "B1 = bậc 3",
            "x": 3996,
            "y": 1260,
            "size": 70,
            "at": "l3:B one",
            "color": "accent",
            "hl": [
              {
                "text": "bậc 3",
                "at": "l3:level three"
              }
            ]
          },
          {
            "id": "h-mat",
            "t": "text",
            "text": "→ tài liệu ghi B1",
            "x": 3996,
            "y": 1380,
            "size": 50,
            "at": "l4:marked"
          },
          {
            "id": "h-self",
            "t": "text",
            "text": "→ tự kiểm đã gần B1?",
            "x": 3996,
            "y": 1460,
            "size": 50,
            "at": "l4:close"
          },
          {
            "id": "h-old",
            "t": "text",
            "text": "Ví dụ cũ 2019: giáo viên",
            "x": 3996,
            "y": 1560,
            "size": 40,
            "at": "l5:twenty nineteen",
            "color": "muted"
          },
          {
            "id": "h-may",
            "t": "text",
            "text": "bậc 1–3, có thể đã đổi",
            "x": 4036,
            "y": 1620,
            "size": 40,
            "at": "l5:changed",
            "color": "coral"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật (30/4/2026); Hệ thống pháp luật (05/4/2019) — chỉ để minh hoạ",
            "x": 3996,
            "y": 1825,
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
          "say": "Stop six, six p.m. Now Lan finds an advert of her own: foreign language, level three.",
          "sub": "Chặng sáu, sáu giờ chiều. Giờ đến lượt Lan thấy một tin: ngoại ngữ bậc 3."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Level three. So which books, which test? Everything online says A, B, C!",
          "sub": "Bậc 3. Vậy sách nào, bài test nào? Trên mạng toàn ghi A, B, C!",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "According to a Vietnamese legal news site, a B one certificate equals level three. A very common requirement.",
          "sub": "Theo Thư viện Pháp luật, chứng chỉ B1 tương đương bậc 3. Mốc rất hay gặp.",
          "keys": [
            "B1 tương đương bậc 3"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So Lan looks for materials marked B one, and checks if her own result is close.",
          "sub": "Vậy Lan tìm tài liệu ghi B1, và xem kết quả tự kiểm của mình đã gần B1 chưa."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "An old example from twenty nineteen: teacher ranks needed levels one to three. Rules may have changed since.",
          "sub": "Một ví dụ cũ năm 2019: chức danh giáo viên khi đó cần bậc 1 đến 3. Quy định có thể đã đổi, chỉ đọc như minh hoạ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: convert the required level to a CEFR code, then pick the right materials and test.",
          "sub": "Rút ra: đổi bậc được yêu cầu sang mã CEFR để chọn đúng tài liệu, đúng bài kiểm tra.",
          "keys": [
            "đổi bậc được yêu cầu sang mã CEFR"
          ]
        }
      ],
      "ref": "p17,p18,p19,p20"
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
            "text": "⑦ 20:00 · Khung mới 2026",
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
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "props": [
                "page-facing-up",
                "spiral-calendar"
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
            "at": "l1:Hoa",
            "caption": "20:00 · cô Hoa sang chơi",
            "icon": "page-facing-up"
          },
          {
            "id": "i-tt",
            "t": "text",
            "text": "TT 33/2026 · từ 31/5/2026",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l3:effect",
            "color": "accent",
            "hl": [
              {
                "text": "31/5/2026",
                "at": "l3:thirty first"
              }
            ]
          },
          {
            "id": "i-rep",
            "t": "text",
            "text": "thay Thông tư 01/2014",
            "x": 5964,
            "y": 1340,
            "size": 46,
            "at": "l3:replacing"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1430,
            "w": 44,
            "h": 44,
            "at": "l4:pre",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1412,
            "size": 56,
            "at": "l4:pre+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "+ Tiền bậc 1",
            "x": 6029,
            "y": 1422,
            "size": 44,
            "at": "l4:pre+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1505,
            "w": 44,
            "h": 44,
            "at": "l4:edition",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1487,
            "size": 56,
            "at": "l4:edition+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "theo CEFR bản mới",
            "x": 6029,
            "y": 1497,
            "size": 44,
            "at": "l4:edition+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1580,
            "w": 44,
            "h": 44,
            "at": "l4:situations",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1562,
            "size": 56,
            "at": "l4:situations+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "mô tả gắn tình huống",
            "x": 6029,
            "y": 1572,
            "size": 44,
            "at": "l4:situations+200"
          },
          {
            "id": "i-6",
            "t": "text",
            "text": "Vẫn 6 bậc, 3 cấp",
            "x": 5964,
            "y": 1670,
            "size": 54,
            "at": "l5:still",
            "color": "accent",
            "hl": [
              {
                "text": "6 bậc, 3 cấp",
                "at": "l5:six levels"
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
          "say": "Stop seven, eight p.m. Cô Hoa from next door drops in, a retired English teacher.",
          "sub": "Chặng bảy, tám giờ tối. Cô Hoa nhà bên sang chơi, cô giáo tiếng Anh đã nghỉ hưu.",
          "keys": [
            "Cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "That printout is from twenty fourteen, dear. Have you read the new one?",
          "sub": "Bản in ấy năm 2014 rồi cháu. Đọc văn bản mới chưa?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "VOH reports Circular thirty three of twenty twenty six took effect on May thirty first, replacing the old one.",
          "sub": "Theo báo VOH, Thông tư 33/2026 có hiệu lực từ 31/5/2026, thay Thông tư 01/2014."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It adds a pre level one, follows the twenty twenty edition of CEFR, and ties skills to real situations.",
          "sub": "Khung mới thêm Tiền bậc 1, cập nhật theo CEFR bản 2020–2021, mô tả kỹ năng gắn với tình huống thực tế.",
          "keys": [
            "Tiền bậc 1"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Still six levels in three bands, with the pre level sitting below level one in listening.",
          "sub": "Vẫn sáu bậc, ba cấp; bảng mô tả nghe có thêm Tiền bậc 1 nằm dưới bậc 1.",
          "keys": [
            "Vẫn sáu bậc, ba cấp"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p21,p22"
    },
    {
      "id": "s16",
      "module": "BRK-09",
      "data": {
        "kind": "Nguồn",
        "title": "Thông tư 33/2026/TT-BGDĐT",
        "detail": "Hiệu lực 31/5/2026, thay Thông tư 01/2014",
        "illus": "page-facing-up",
        "around": [
          "spiral-calendar",
          "ladder"
        ],
        "icon": "book-open"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The old can do lines still help.",
          "sub": "Mô tả “có thể làm gì” cũ vẫn có ích."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "For official papers, read the document in force.",
          "sub": "Còn hồ sơ chính thức thì đọc văn bản đang có hiệu lực.",
          "keys": [
            "văn bản đang có hiệu lực"
          ]
        }
      ],
      "ref": "p23,p24"
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
            "text": "21:00 · Đọc lại tin “B2”",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:nine"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "notebook"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:same",
            "caption": "21:00 · cùng ghế, cùng tin",
            "icon": "mobile-phone"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "B2 = bậc 4",
            "x": 7932,
            "y": 1260,
            "size": 64,
            "at": "l2:level four",
            "color": "accent",
            "hl": [
              {
                "text": "bậc 4",
                "at": "l2:level four"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Đích trước: B1 = bậc 3",
            "x": 7932,
            "y": 1360,
            "size": 50,
            "at": "l3:first"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Biết người biết ta”",
            "x": 7932,
            "y": 1470,
            "size": 54,
            "at": "l4:know",
            "color": "accent",
            "hl": [
              {
                "text": "biết ta",
                "at": "l4:yourself"
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
          "say": "Nine p.m. Same sofa, same advert, same Thảo.",
          "sub": "Chín giờ tối. Vẫn ghế ấy, tin ấy, Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "B two is level four. Upper intermediate. Not a quick click after all.",
          "sub": "B2 là bậc 4. Mức cao của trung cấp. Hoá ra không phải bấm gửi cho nhanh.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "First goal: B one, level three. Then this advert, next year.",
          "sub": "Đích trước: B1, bậc 3. Rồi tin này, năm sau.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Know the enemy, know yourself. Tonight Thảo knows both: the advert, and her own level.",
          "sub": "“Biết người biết ta.” Tối nay Thảo biết cả hai: tin tuyển dụng, và bậc của chính mình.",
          "keys": [
            "Biết người biết ta"
          ]
        }
      ],
      "ref": "p5,p19"
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
            "at": "l1:matching",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:can do",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:skill",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7544,
            "y": 200,
            "at": "l1:matching+300"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9512,
            "y": 170,
            "at": "l2:can do"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 760,
            "y": 1770,
            "at": "l3:skill"
          },
          {
            "id": "z-do",
            "t": "text",
            "text": "Làm ngay: chép mô tả bậc 1–3",
            "x": 7932,
            "y": 1670,
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
          "say": "So: three bands, six levels, matching A one to C two. B one is three, B two is four.",
          "sub": "Tóm lại: ba cấp, sáu bậc, ứng với A1 đến C2. B1 là bậc 3, B2 là bậc 4.",
          "keys": [
            "ba cấp, sáu bậc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each level is a list of can do statements, not a mystery code.",
          "sub": "Mỗi bậc là danh sách “có thể làm gì”, không phải mật mã.",
          "keys": [
            "có thể làm gì"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Measure each skill on its own, and read the document in force for anything official.",
          "sub": "Đo riêng từng kỹ năng, và đọc văn bản đang có hiệu lực cho việc chính thức."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Do it now: copy the speaking and writing lines for levels one to three, and tick what you can do.",
          "sub": "Làm ngay: chép mô tả nói và viết bậc 1 đến 3, đánh dấu câu mình làm được."
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
        "q": "Why convert a required level into a CEFR code?",
        "options": [
          "It proves to employers that you already hold the required certificate",
          "It makes the requirement disappear, so you no longer need to study",
          "It helps you choose the right study materials and the right level test"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "straight-ruler",
        "why": "Nhiều tài liệu và bài test ghi theo mã CEFR. Đổi bậc sang mã CEFR giúp chọn đúng thứ cần học."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why convert a required level into a CEFR code?",
          "sub": "Vì sao nên đổi bậc được yêu cầu sang mã CEFR?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It helps you choose the right study materials and the right level test.",
          "sub": "Giúp chọn đúng tài liệu và đúng bài kiểm tra."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Level three becomes B one, and B one is on the book cover.",
          "sub": "Bậc 3 đổi thành B1, và B1 in ngay trên bìa sách."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[35]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Đã có thước đo. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "You know the scale now. Measure yourself on forty questions below. Next: the free level test.",
          "sub": "Giờ bạn đã biết cái thước. Thử sức với bốn mươi câu bên dưới. Bài sau: làm bài test miễn phí.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi beginner-self-study-planners, bài 1) dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT NGÀY THỨ BẢY ở nhà Lan (9:00 Thảo đọc tin “B2” → ① 9:30 khung để làm gì → ② 10:00 ba cấp sáu bậc → ③ 11:00 mỗi bậc làm được gì → ④ 14:00 Dũng tự xếp bậc viết/nói + “Khoan đã!” → ⑤ 16:00 nghe ở bậc thấp → ⑥ 18:00 Lan thấy “bậc 3” → ⑦ 20:00 cô Hoa, khung mới 2026 → 21:00 Thảo đọc lại tin, cùng ghế). HOOK-21: “B2 = bậc 2 hay bậc 4?” (p5). Nhân vật: Thảo (chị Thảo), Dũng (anh Minh), Lan (chị Hương), cô Hoa — w145/_series/beginner-self-study-planners.md. Cảnh ngắt nhịp: BRK-08 (một ngày), BRK-04 (B2 = bậc 2 / bậc 4), BRK-07 (rehook từng kỹ năng), BRK-09 (nguồn Thông tư 33/2026). Tục ngữ: “Biết người biết ta, trăm trận trăm thắng”. Câu đố questions[35].",
  "loop": {
    "open": "s01",
    "close": "s17"
  }
};
