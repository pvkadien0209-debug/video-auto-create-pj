// bar-registration-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-registration-overview--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "bar-trainee-registration",
    "slug": "bar-registration-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Tập sự hành nghề luật sư bắt đầu thế nào?",
    "series": "Bắt đầu tập sự đúng thủ tục — chọn nơi tập sự, luật sư hướng dẫn và đăng ký với Đoàn luật sư"
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
            "text": "12 tháng tính từ hôm nào?",
            "x": 60,
            "y": 90,
            "size": 100,
            "at": "l1:clock",
            "color": "accent",
            "hl": [
              {
                "text": "từ hôm nào",
                "at": "l1:start"
              }
            ]
          },
          {
            "id": "a-bA",
            "t": "box",
            "x": 60,
            "y": 300,
            "w": 720,
            "h": 110,
            "at": "l2:first",
            "stroke": 5
          },
          {
            "id": "a-A",
            "t": "text",
            "text": "A. Ngày đầu đi làm",
            "x": 90,
            "y": 320,
            "size": 58,
            "at": "l2:first+200"
          },
          {
            "id": "a-bB",
            "t": "box",
            "x": 60,
            "y": 450,
            "w": 760,
            "h": 110,
            "at": "l2:registers",
            "stroke": 5
          },
          {
            "id": "a-B",
            "t": "text",
            "text": "B. Ngày Đoàn đăng ký",
            "x": 90,
            "y": 470,
            "size": 58,
            "at": "l2:registers+200"
          },
          {
            "id": "a-Ax",
            "t": "strike",
            "over": "a-A",
            "at": "l3:answer"
          },
          {
            "id": "a-Br",
            "t": "ring",
            "around": [
              "a-B"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:B"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: khoản 1 Điều 10 Thông tư 10/2021/TT-BTP",
            "x": 60,
            "y": 735,
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
          "say": "Quick guess. You start a traineeship. When does the twelve month clock start?",
          "sub": "Đoán nhanh. Bạn bắt đầu tập sự. Đồng hồ mười hai tháng chạy từ hôm nào?",
          "keys": [
            "chạy từ hôm nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: your first day at work. B: the day the bar registers you.",
          "sub": "A: ngày đầu đi làm. B: ngày Đoàn luật sư đăng ký tập sự cho bạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Most people pick A. Under Circular ten, the answer is B.",
          "sub": "Phần đông chọn A. Theo Thông tư 10, đáp án là B.",
          "keys": [
            "đáp án là B"
          ]
        }
      ],
      "ref": "intro,p9,p10"
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
            "y": 110,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "graduation-cap",
                "page-facing-up"
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
            "caption": "Tối thứ Sáu · có giấy tốt nghiệp",
            "icon": "graduation-cap"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Ở đâu? Ai? Từ hôm nào?",
            "x": 900,
            "y": 620,
            "size": 44,
            "at": "l3:where",
            "color": "coral",
            "hl": [
              {
                "text": "Từ hôm nào?",
                "at": "l3:clock"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đi một ngày đàng…”",
            "x": 60,
            "y": 610,
            "size": 52,
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
          "say": "Meet Thảo.",
          "sub": "Đây là Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lawyer training course done, in Hanoi. Certificate in hand, no firm yet.",
          "sub": "Vừa xong lớp đào tạo nghề luật sư ở Hà Nội. Giấy chứng nhận trong tay, chưa có nơi tập sự.",
          "keys": [
            "chưa có nơi tập sự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Write it down first! Where, who guides me, and when does the clock start?",
          "sub": "Ghi lại đã! Tập ở đâu, ai hướng dẫn, và đồng hồ chạy từ hôm nào?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three common worries. Our elders say: travel one day, learn a basket of wisdom.",
          "sub": "Ba nỗi lo quen thuộc. Ông bà dặn: “Đi một ngày đàng, học một sàng khôn.”",
          "keys": [
            "Đi một ngày đàng, học một sàng khôn"
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
            "text": "Tập sự bắt đầu thế nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:start",
            "hl": [
              {
                "text": "bắt đầu",
                "at": "l1:start"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: tìm đại một chỗ",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:any",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:working+300"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: đúng nơi, đúng người",
            "x": 2028,
            "y": 260,
            "size": 56,
            "at": "l3:right",
            "color": "accent",
            "hl": [
              {
                "text": "đúng người",
                "at": "l3:supervisor"
              }
            ]
          },
          {
            "id": "b-yes2",
            "t": "text",
            "text": "+ đăng ký sớm",
            "x": 2868,
            "y": 260,
            "size": 56,
            "at": "l3:early",
            "color": "coral",
            "hl": [
              {
                "text": "đăng ký sớm",
                "at": "l3:early"
              }
            ]
          },
          {
            "id": "b-base",
            "t": "text",
            "text": "Căn cứ: Thông tư 10/2021/TT-BTP · Điều 14 Luật Luật sư (VBHN 03)",
            "x": 2028,
            "y": 350,
            "size": 26,
            "at": "l4:Circular",
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
          "say": "So how does a traineeship really start?",
          "sub": "Vậy tập sự thật sự bắt đầu thế nào?",
          "keys": [
            "bắt đầu thế nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not this: find any office and start working.",
          "sub": "Không phải: tìm đại một chỗ rồi đi làm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But this: the right place, the right supervisor, early registration.",
          "sub": "Mà là: đúng nơi, luật sư hướng dẫn đủ điều kiện, và để Đoàn đăng ký sớm.",
          "keys": [
            "để Đoàn đăng ký sớm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The base: Circular ten of twenty twenty one, and the Law on Lawyers.",
          "sub": "Căn cứ chính: Thông tư 10/2021/TT-BTP và Điều 14 Luật Luật sư."
        }
      ],
      "ref": "intro,outro"
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
            "id": "b-road",
            "t": "text",
            "text": "Lộ trình gọn:",
            "x": 2028,
            "y": 420,
            "size": 50,
            "at": "l1:route",
            "hl": [
              {
                "text": "Lộ trình",
                "at": "l1:route"
              }
            ]
          },
          {
            "id": "b-r0",
            "t": "box",
            "x": 2028,
            "y": 500,
            "w": 300,
            "h": 100,
            "at": "l1:qualify",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r1",
            "t": "box",
            "x": 2358,
            "y": 500,
            "w": 300,
            "h": 100,
            "at": "l1:firm",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r2",
            "t": "box",
            "x": 2688,
            "y": 500,
            "w": 300,
            "h": 100,
            "at": "l1:supervisor",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-r3",
            "t": "box",
            "x": 3018,
            "y": 500,
            "w": 300,
            "h": 100,
            "at": "l2:registers",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-r4",
            "t": "box",
            "x": 3348,
            "y": 500,
            "w": 300,
            "h": 100,
            "at": "l2:test",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-rt0",
            "t": "text",
            "text": "Đủ điều kiện",
            "x": 2046,
            "y": 524,
            "size": 36,
            "at": "l1:qualify+200"
          },
          {
            "id": "b-rt1",
            "t": "text",
            "text": "Tổ chức nhận",
            "x": 2376,
            "y": 524,
            "size": 36,
            "at": "l1:firm+200"
          },
          {
            "id": "b-rt2",
            "t": "text",
            "text": "LS hướng dẫn",
            "x": 2706,
            "y": 524,
            "size": 36,
            "at": "l1:supervisor+200"
          },
          {
            "id": "b-rt3",
            "t": "text",
            "text": "Đoàn đăng ký",
            "x": 3036,
            "y": 524,
            "size": 36,
            "at": "l2:registers+200"
          },
          {
            "id": "b-rt4",
            "t": "text",
            "text": "12 tháng → KT",
            "x": 3366,
            "y": 524,
            "size": 36,
            "at": "l2:test+200"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "Theo Thảo: từng chặng một",
            "x": 2028,
            "y": 650,
            "size": 48,
            "at": "l3:walk",
            "color": "accent",
            "hl": [
              {
                "text": "từng chặng",
                "at": "l3:stage"
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
          "say": "The route: check you qualify, find a firm, get a supervisor.",
          "sub": "Lộ trình: kiểm mình đủ điều kiện, tìm tổ chức nhận, có luật sư hướng dẫn.",
          "keys": [
            "Lộ trình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then the bar registers you, and twelve months later comes the test.",
          "sub": "Rồi Đoàn đăng ký, và mười hai tháng sau là kỳ kiểm tra."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let's walk it with Thảo, stage by stage.",
          "sub": "Mình đi cùng Thảo, từng chặng một.",
          "keys": [
            "từng chặng một"
          ]
        }
      ],
      "ref": "intro,p18"
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
            "text": "① Tối thứ Sáu · Ai được tập?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:First"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 185,
            "w": 46,
            "h": 46,
            "at": "l2:citizen",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 167,
            "size": 58,
            "at": "l2:citizen+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Công dân Việt Nam",
            "x": 4064,
            "y": 175,
            "size": 40,
            "at": "l2:citizen+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 275,
            "w": 46,
            "h": 46,
            "at": "l2:character",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 257,
            "size": 58,
            "at": "l2:character+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Đạo đức tốt, tuân thủ pháp luật",
            "x": 4064,
            "y": 265,
            "size": 40,
            "at": "l2:character+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 365,
            "w": 46,
            "h": 46,
            "at": "l3:bachelor",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 347,
            "size": 58,
            "at": "l3:bachelor+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Bằng cử nhân / thạc sĩ luật",
            "x": 4064,
            "y": 355,
            "size": 40,
            "at": "l3:bachelor+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 455,
            "w": 46,
            "h": 46,
            "at": "l3:certificate",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 437,
            "size": 58,
            "at": "l3:certificate+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Giấy CN tốt nghiệp đào tạo nghề",
            "x": 4064,
            "y": 445,
            "size": 40,
            "at": "l3:certificate+200"
          },
          {
            "id": "c-no",
            "t": "text",
            "text": "Không đủ → chấm dứt, không công nhận",
            "x": 3996,
            "y": 560,
            "size": 40,
            "at": "l4:stop",
            "color": "coral",
            "hl": [
              {
                "text": "không công nhận",
                "at": "l4:recognised"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: khoản 1 Điều 3, Điều 4 Thông tư 10/2021/TT-BTP",
            "x": 3996,
            "y": 735,
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
          "say": "First stop: Friday evening. Can Thảo even be a trainee?",
          "sub": "Chặng một: tối thứ Sáu. Thảo có đủ điều kiện tập sự không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article three: a Vietnamese citizen of good character, who obeys the law.",
          "sub": "Điều 3: công dân Việt Nam, đạo đức tốt, tuân thủ Hiến pháp và pháp luật."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "With a law bachelor or master degree, and the lawyer training certificate.",
          "sub": "Có bằng cử nhân hoặc thạc sĩ luật, và giấy chứng nhận tốt nghiệp đào tạo nghề luật sư.",
          "keys": [
            "giấy chứng nhận tốt nghiệp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Train without qualifying? You must stop, and the time is not recognised.",
          "sub": "Không đủ điều kiện mà vẫn tập thì phải chấm dứt, thời gian đã tập không được công nhận.",
          "keys": [
            "không được công nhận"
          ]
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
            "id": "c-w",
            "t": "text",
            "text": "Tập ở đâu?",
            "x": 4896,
            "y": 170,
            "size": 56,
            "at": "l1:where",
            "hl": [
              {
                "text": "ở đâu",
                "at": "l1:where"
              }
            ]
          },
          {
            "id": "c-p0",
            "t": "text",
            "text": "• Văn phòng luật sư",
            "x": 4896,
            "y": 260,
            "size": 38,
            "at": "l2:offices"
          },
          {
            "id": "c-p1",
            "t": "text",
            "text": "• Công ty luật",
            "x": 4896,
            "y": 330,
            "size": 38,
            "at": "l2:companies"
          },
          {
            "id": "c-p2",
            "t": "text",
            "text": "• Chi nhánh của chúng",
            "x": 4896,
            "y": 400,
            "size": 38,
            "at": "l2:branches"
          },
          {
            "id": "c-p3",
            "t": "text",
            "text": "• Công ty luật nước ngoài tại VN",
            "x": 4896,
            "y": 470,
            "size": 38,
            "at": "l2:foreign"
          },
          {
            "id": "c-x",
            "t": "text",
            "text": "→ cử LS hướng dẫn + Giấy xác nhận",
            "x": 4896,
            "y": 560,
            "size": 38,
            "at": "l3:confirmation",
            "color": "accent",
            "hl": [
              {
                "text": "Giấy xác nhận",
                "at": "l3:confirmation"
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
          "say": "Second question: train where? Only at a law practice organisation.",
          "sub": "Câu thứ hai: tập ở đâu? Chỉ ở một tổ chức hành nghề luật sư.",
          "keys": [
            "tổ chức hành nghề luật sư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Law offices, law companies, their branches, even foreign law companies in Vietnam.",
          "sub": "Văn phòng luật sư, công ty luật, chi nhánh của chúng, cả công ty luật nước ngoài tại Việt Nam."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "You choose. If they accept, they name a supervisor and send an acceptance confirmation.",
          "sub": "Mình tự chọn, tự thoả thuận. Nơi đó đồng ý thì cử luật sư hướng dẫn và gửi Giấy xác nhận nhận tập sự.",
          "keys": [
            "Giấy xác nhận nhận tập sự"
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
          },
          {
            "at": 150,
            "fit": "D",
            "ms": 900
          },
          {
            "at": "l3",
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
            "text": "② Sáng thứ Bảy · Dũng gọi",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Second"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "cross",
                  "face": "sad"
                }
              ],
              "props": [
                "mobile-phone",
                "envelope"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:video",
            "caption": "Sáng thứ Bảy · gọi video từ quê",
            "icon": "mobile-phone"
          },
          {
            "id": "d-2m",
            "t": "text",
            "text": "Hai tháng, chưa nơi nào nhận",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l3:months",
            "color": "muted"
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "Điều 4: nhờ Đoàn giới thiệu",
            "x": 5964,
            "y": 260,
            "size": 40,
            "at": "l4:Article",
            "color": "accent",
            "hl": [
              {
                "text": "nhờ Đoàn giới thiệu",
                "at": "l4:introduce"
              }
            ]
          },
          {
            "id": "d-10",
            "t": "text",
            "text": "10 ngày → phân công",
            "x": 5964,
            "y": 350,
            "size": 60,
            "at": "l5:ten",
            "color": "coral",
            "hl": [
              {
                "text": "10 ngày",
                "at": "l5:ten"
              }
            ]
          },
          {
            "id": "d-who",
            "t": "text",
            "text": "(luật sư đứng đầu tổ chức nhận)",
            "x": 5964,
            "y": 440,
            "size": 36,
            "at": "l5:heads",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: Saturday morning, a video call.",
          "sub": "Chặng hai: sáng thứ Bảy, một cuộc gọi video."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, Thảo's classmate. He sent files everywhere.",
          "sub": "Đây là Dũng, bạn cùng lớp Thảo. Xong sớm hơn, và gửi hồ sơ khắp nơi.",
          "keys": [
            "gửi hồ sơ khắp nơi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Two months of files, and nobody takes me! Just keep sending?",
          "sub": "Hai tháng gửi hồ sơ, chẳng nơi nào nhận! Cứ gửi tiếp à?",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Another door: Article four lets you ask the bar's board to introduce a place.",
          "sub": "Còn một cửa khác. Khoản 2 Điều 4: đề nghị Ban chủ nhiệm Đoàn giới thiệu nơi tập sự.",
          "keys": [
            "giới thiệu nơi tập sự"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Within ten days, the board assigns a lawyer who heads a firm to take him.",
          "sub": "Trong mười ngày, Ban chủ nhiệm phân công một luật sư đứng đầu tổ chức hành nghề nhận người đó.",
          "keys": [
            "mười ngày"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "p3"
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
            "id": "d-key",
            "t": "text",
            "text": "Tự tìm trước, bí thì nhờ Đoàn",
            "x": 5964,
            "y": 620,
            "size": 50,
            "at": "l1:yourself",
            "color": "accent",
            "hl": [
              {
                "text": "bí thì nhờ Đoàn",
                "at": "l1:Stuck"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: khoản 2 Điều 4 Thông tư 10/2021/TT-BTP",
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
          "say": "So: search by yourself first. Stuck? Ask the bar.",
          "sub": "Vậy: tự tìm trước, bí thì nhờ Đoàn giới thiệu.",
          "keys": [
            "bí thì nhờ Đoàn"
          ]
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s08",
      "module": "BRK-07",
      "data": {
        "question": "Có chỗ nhận rồi. Nhưng ai sẽ hướng dẫn mình?",
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
          "say": "A place is not enough. Who will actually guide you?",
          "sub": "Có chỗ nhận chưa đủ. Ai sẽ thật sự hướng dẫn mình?",
          "keys": [
            "Ai sẽ thật sự hướng dẫn"
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
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Chiều thứ Bảy · Ai hướng dẫn?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Third"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
            "w": 780,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                }
              ],
              "props": [
                "hot-beverage",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:coffee",
            "caption": "Chiều thứ Bảy · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "e-14",
            "t": "text",
            "text": "Điều 14 Luật Luật sư:",
            "x": 7932,
            "y": 170,
            "size": 44,
            "at": "l5:fourteen",
            "hl": [
              {
                "text": "Điều 14",
                "at": "l5:fourteen"
              }
            ]
          },
          {
            "id": "e-3y",
            "t": "text",
            "text": "≥ 3 năm hành nghề",
            "x": 7932,
            "y": 245,
            "size": 56,
            "at": "l3:three",
            "color": "accent",
            "hl": [
              {
                "text": "≥ 3 năm",
                "at": "l3:three"
              }
            ]
          },
          {
            "id": "e-kl",
            "t": "text",
            "text": "Không đang bị xem xét kỷ luật",
            "x": 7932,
            "y": 330,
            "size": 40,
            "at": "l4:discipline"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Saturday afternoon, coffee.",
          "sub": "Chặng ba: chiều thứ Bảy, cà phê."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Uncle Bình, Thảo's uncle, a lawyer with a small office.",
          "sub": "Đây là Bác Bình, bác ruột Thảo, luật sư có một văn phòng nhỏ của riêng mình.",
          "keys": [
            "Bác Bình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Slowly now. A supervisor needs at least three years of practice.",
          "sub": "Từ từ, mình xem lại đã. Người hướng dẫn phải hành nghề ít nhất ba năm.",
          "keys": [
            "ít nhất ba năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "And must not be under consideration for discipline.",
          "sub": "Và không phải người đang bị xem xét xử lý kỷ luật."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That is Article fourteen of the law. The circular adds more.",
          "sub": "Đó là Điều 14 Luật Luật sư. Điều 8 Thông tư nói rõ thêm."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p5"
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
          }
        ],
        "items": [
          {
            "id": "e-8",
            "t": "text",
            "text": "Điều 8: đang hành nghề, uy tín",
            "x": 7932,
            "y": 420,
            "size": 40,
            "at": "l1:Practising",
            "hl": [
              {
                "text": "uy tín",
                "at": "l1:standing"
              }
            ]
          },
          {
            "id": "e-1y",
            "t": "text",
            "text": "Từng bị xử phạt → qua 01 năm",
            "x": 7932,
            "y": 495,
            "size": 40,
            "at": "l2:Fined",
            "hl": [
              {
                "text": "01 năm",
                "at": "l2:year"
              }
            ]
          },
          {
            "id": "e-max",
            "t": "text",
            "text": "Tối đa 03 người cùng lúc",
            "x": 7932,
            "y": 580,
            "size": 52,
            "at": "l3:three",
            "color": "coral",
            "hl": [
              {
                "text": "03 người",
                "at": "l3:three"
              }
            ]
          },
          {
            "id": "e-ask",
            "t": "text",
            "text": "Hỏi: ai? hướng dẫn mấy người?",
            "x": 7932,
            "y": 660,
            "size": 40,
            "at": "l4:ask",
            "color": "accent",
            "hl": [
              {
                "text": "mấy người",
                "at": "l4:many"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: khoản 1 Điều 14 Luật Luật sư (VBHN 03) · Điều 8 Thông tư 10/2021/TT-BTP",
            "x": 7932,
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
          "who": "binh",
          "say": "Practising in the firm, of good standing, not under a disciplinary measure.",
          "sub": "Đang hành nghề trong tổ chức, có uy tín, không trong thời gian bị kỷ luật.",
          "keys": [
            "có uy tín"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Fined in practice? Wait one year after serving the penalty.",
          "sub": "Từng bị xử phạt hành chính trong hành nghề? Phải qua một năm kể từ khi chấp hành xong.",
          "keys": [
            "một năm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "And one lawyer guides no more than three trainees at the same time.",
          "sub": "Và một luật sư không hướng dẫn quá ba người tập sự cùng lúc.",
          "keys": [
            "quá ba người"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So ask early: who guides me, and how many do they guide now?",
          "sub": "Nên hỏi sớm: ai hướng dẫn mình, người đó đang hướng dẫn mấy người?",
          "keys": [
            "đang hướng dẫn mấy người"
          ]
        }
      ],
      "ref": "p5,p6"
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
            "at": "l1:accepted",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l1:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Hai · Ngày đầu đi làm",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Fourth"
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
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "briefcase"
              ],
              "camera": [
                {
                  "at": "l1:accepted",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:accepted",
            "caption": "Thứ Hai · công ty luật nhận Thảo",
            "icon": "briefcase"
          },
          {
            "id": "f-gx",
            "t": "text",
            "text": "Giấy xác nhận: có ✓",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l1:confirmation",
            "hl": [
              {
                "text": "Giấy xác nhận",
                "at": "l1:confirmation"
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
          "say": "Fourth stop: Monday. A law company has accepted Thảo. Confirmation in hand.",
          "sub": "Chặng bốn: thứ Hai. Một công ty luật đã nhận Thảo. Giấy xác nhận trong tay.",
          "keys": [
            "Giấy xác nhận"
          ]
        }
      ],
      "ref": "p2,p10"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Hai · ngày đầu đi làm",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Để cuối tháng mới nộp hồ sơ cho Đoàn",
          "why": "Khoản 1 Điều 10 Thông tư 10/2021/TT-BTP: 12 tháng tính từ ngày Ban chủ nhiệm Đoàn đăng ký tập sự.",
          "rule": "Ngày đi làm chưa phải ngày tập sự"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The bar file can wait till month end. My twelve months start today anyway.",
          "sub": "Hồ sơ gửi Đoàn để cuối tháng. Đằng nào mười hai tháng cũng tính từ hôm nay.",
          "pose": "explain",
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
          "say": "Article ten counts from the day the bar registers you.",
          "sub": "Điều 10 tính từ ngày Đoàn đăng ký tập sự, không phải ngày đầu đi làm.",
          "keys": [
            "ngày Đoàn đăng ký tập sự"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Làm lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Then I file with the bar this afternoon.",
          "sub": "Vậy chiều nay em nộp hồ sơ cho Đoàn luôn.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. Your first workday is not your first trainee day.",
          "sub": "Đúng. Ngày đi làm chưa phải ngày tập sự.",
          "phase": "redo",
          "keys": [
            "Ngày đi làm chưa phải ngày tập sự"
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
            "id": "f-go",
            "t": "text",
            "text": "Ngày đi làm",
            "x": 60,
            "y": 1350,
            "size": 50,
            "at": "l1:Weeks",
            "color": "muted"
          },
          {
            "id": "f-gox",
            "t": "strike",
            "over": "f-go",
            "at": "l1:counted"
          },
          {
            "id": "f-mk",
            "t": "text",
            "text": "Mốc: ngày Đoàn đăng ký",
            "x": 60,
            "y": 1435,
            "size": 52,
            "at": "l1:date",
            "color": "accent",
            "hl": [
              {
                "text": "ngày Đoàn đăng ký",
                "at": "l1:date"
              }
            ]
          },
          {
            "id": "f-late",
            "t": "text",
            "text": "Nộp trễ → mốc trễ theo",
            "x": 60,
            "y": 1530,
            "size": 48,
            "at": "l2:late",
            "color": "coral",
            "hl": [
              {
                "text": "mốc trễ theo",
                "at": "l2:slips"
              }
            ]
          },
          {
            "id": "f-now",
            "t": "text",
            "text": "Có Giấy xác nhận → nộp ngay",
            "x": 60,
            "y": 1620,
            "size": 46,
            "at": "l2:now",
            "hl": [
              {
                "text": "nộp ngay",
                "at": "l2:now"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: khoản 1 Điều 10 Thông tư 10/2021/TT-BTP",
            "x": 60,
            "y": 1825,
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
          "say": "Weeks of work before that date are not counted in the twelve months.",
          "sub": "Những tuần làm việc trước mốc đó không nằm trong mười hai tháng.",
          "keys": [
            "không nằm trong"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "File late, and the start slips too. Got the confirmation? File now.",
          "sub": "Nộp trễ thì mốc cũng trễ theo. Có Giấy xác nhận là nộp ngay.",
          "keys": [
            "nộp ngay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One week late to file means one week later to the test.",
          "sub": "Chậm nộp hồ sơ một tuần là lùi ngày dự kiểm tra một tuần.",
          "keys": [
            "lùi ngày dự kiểm tra một tuần"
          ]
        }
      ],
      "ref": "p10,p11,p19"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Chiều thứ Hai · Đoàn nào?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Fifth"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "face": "happy"
                }
              ],
              "props": [
                "file-folder",
                "classical-building"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
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
            "at": "l1:office",
            "caption": "Chiều thứ Hai · văn phòng Đoàn",
            "icon": "classical-building"
          },
          {
            "id": "g-hq",
            "t": "text",
            "text": "Đoàn nơi tổ chức có trụ sở",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l3:head",
            "color": "accent",
            "hl": [
              {
                "text": "có trụ sở",
                "at": "l3:head"
              }
            ]
          },
          {
            "id": "g-not",
            "t": "text",
            "text": "Không phải nơi cư trú, nơi học",
            "x": 2028,
            "y": 1340,
            "size": 40,
            "at": "l4:studied",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Monday afternoon, the bar association office.",
          "sub": "Chặng năm: chiều thứ Hai, văn phòng Đoàn luật sư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Lan, who receives files at the bar office.",
          "sub": "Đây là Lan, cán bộ nhận hồ sơ ở văn phòng Đoàn.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "The right bar is where your firm has its head office, not where you live.",
          "sub": "Dạ, đúng Đoàn là nơi tổ chức nhận tập sự có trụ sở, không phải nơi chị cư trú ạ.",
          "keys": [
            "có trụ sở"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Nor where you studied. That is Article five.",
          "sub": "Cũng không phải nơi học lớp đào tạo nghề. Đó là Điều 5 Thông tư."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p7"
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
          }
        ],
        "items": [
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1435,
            "w": 46,
            "h": 46,
            "at": "l1:request",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1417,
            "size": 58,
            "at": "l1:request+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Giấy đề nghị đăng ký (mẫu)",
            "x": 2096,
            "y": 1425,
            "size": 36,
            "at": "l1:request+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1503,
            "w": 46,
            "h": 46,
            "at": "l1:confirmation",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1485,
            "size": 58,
            "at": "l1:confirmation+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Giấy xác nhận nhận tập sự",
            "x": 2096,
            "y": 1493,
            "size": 36,
            "at": "l1:confirmation+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1571,
            "w": 46,
            "h": 46,
            "at": "l2:degree",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1553,
            "size": 58,
            "at": "l2:degree+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Bản sao bằng cử nhân / thạc sĩ",
            "x": 2096,
            "y": 1561,
            "size": 36,
            "at": "l2:degree+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1639,
            "w": 46,
            "h": 46,
            "at": "l2:certificate",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1621,
            "size": 58,
            "at": "l2:certificate+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Bản sao giấy CN tốt nghiệp",
            "x": 2096,
            "y": 1629,
            "size": 36,
            "at": "l2:certificate+200"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Cấp giấy: 05 ngày làm việc",
            "x": 2028,
            "y": 1730,
            "size": 44,
            "at": "l3:five",
            "color": "coral",
            "hl": [
              {
                "text": "05 ngày làm việc",
                "at": "l3:five"
              }
            ]
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Từ chối: văn bản, lý do",
            "x": 2868,
            "y": 1750,
            "size": 36,
            "at": "l4:refusal"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: Điều 5 Thông tư 10/2021/TT-BTP",
            "x": 2028,
            "y": 1825,
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
          "who": "lan",
          "say": "Your file: a request form for registration, and the acceptance confirmation.",
          "sub": "Hồ sơ: giấy đề nghị đăng ký tập sự theo mẫu, và Giấy xác nhận nhận tập sự."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Plus copies of your law degree and your training certificate.",
          "sub": "Thêm bản sao bằng cử nhân hoặc thạc sĩ luật, và bản sao giấy chứng nhận tốt nghiệp đào tạo nghề ạ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Five working days after a valid file, the board issues a trainee certificate.",
          "sub": "Trong năm ngày làm việc kể từ khi đủ hồ sơ hợp lệ, Ban chủ nhiệm ghi tên và cấp Giấy chứng nhận người tập sự.",
          "keys": [
            "năm ngày làm việc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A refusal comes in writing, with reasons. You may complain.",
          "sub": "Từ chối thì phải bằng văn bản, nêu rõ lý do, và người bị từ chối có quyền khiếu nại.",
          "keys": [
            "bằng văn bản"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s16",
      "module": "BRK-03",
      "data": {
        "value": 12,
        "suffix": " tháng",
        "label": "tính từ ngày Đoàn đăng ký tập sự",
        "illus": "hourglass-not-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now, the big number.",
          "sub": "Giờ đến con số lớn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twelve months, counted from the day the bar registers you.",
          "sub": "Mười hai tháng, tính từ ngày Đoàn đăng ký tập sự.",
          "keys": [
            "Mười hai tháng"
          ]
        }
      ],
      "ref": "p9"
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
            "text": "⑥ Một năm · đếm thế nào?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Sixth"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
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
                "spiral-calendar",
                "notebook"
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
            "at": "l1:year",
            "caption": "Tối thứ Hai · lịch và nhật ký",
            "icon": "spiral-calendar"
          },
          {
            "id": "h-12",
            "t": "text",
            "text": "Ngày Đoàn đăng ký + 12 tháng",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l2:Registration",
            "color": "accent",
            "hl": [
              {
                "text": "+ 12 tháng",
                "at": "l2:twelve"
              }
            ]
          },
          {
            "id": "h-d2",
            "t": "text",
            "text": "Đợt 2/2026: tính như vậy",
            "x": 3996,
            "y": 1340,
            "size": 40,
            "at": "l3:notice"
          },
          {
            "id": "h-dt",
            "t": "text",
            "text": "(quyết định hoặc ngày cấp giấy)",
            "x": 3996,
            "y": 1405,
            "size": 32,
            "at": "l3:decision",
            "color": "muted"
          },
          {
            "id": "h-16",
            "t": "text",
            "text": "Điều 16: giảm còn 04 / 06 tháng",
            "x": 3996,
            "y": 1480,
            "size": 40,
            "at": "l5:four",
            "hl": [
              {
                "text": "04 / 06 tháng",
                "at": "l5:six"
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
          "say": "Sixth stop: the year itself. How to count it?",
          "sub": "Chặng sáu: chính một năm ấy. Thảo đếm thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Write it down first! Registration date, plus twelve months.",
          "sub": "Ghi lại đã! Ngày Đoàn đăng ký, cộng mười hai tháng.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The notice for round two of twenty twenty six agrees: from the decision, or the certificate date.",
          "sub": "Thông báo kỳ kiểm tra đợt 2/2026 cũng tính từ ngày Đoàn quyết định đăng ký, hoặc ngày cấp Giấy chứng nhận."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Some, under Article sixteen of the law, train four or six months.",
          "sub": "Người thuộc khoản 2, khoản 3 Điều 16 Luật Luật sư được giảm còn bốn hoặc sáu tháng.",
          "keys": [
            "bốn hoặc sáu tháng"
          ]
        }
      ],
      "ref": "p9"
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
            "id": "h-20",
            "t": "text",
            "text": "≥ 20 giờ / tuần",
            "x": 3996,
            "y": 1570,
            "size": 64,
            "at": "l1:twenty",
            "color": "coral",
            "hl": [
              {
                "text": "20 giờ",
                "at": "l1:twenty"
              }
            ]
          },
          {
            "id": "h-nk",
            "t": "text",
            "text": "Nhật ký: hai bên xác nhận",
            "x": 3996,
            "y": 1680,
            "size": 40,
            "at": "l2:logbook",
            "hl": [
              {
                "text": "Nhật ký",
                "at": "l2:logbook"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Điều 7, 10, 12 Thông tư 10/2021/TT-BTP · Điều 16 Luật Luật sư · Tạp chí Luật sư Việt Nam 13/8/2026",
            "x": 3996,
            "y": 1825,
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
          "say": "Meanwhile, at least twenty hours of training, every single week.",
          "sub": "Trong năm ấy, tối thiểu hai mươi giờ tập sự mỗi tuần.",
          "keys": [
            "hai mươi giờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And a logbook, confirmed by the supervisor and the firm.",
          "sub": "Và nhật ký tập sự, có xác nhận của luật sư hướng dẫn và tổ chức nhận tập sự.",
          "keys": [
            "nhật ký tập sự"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s19",
      "module": "BRK-04",
      "data": {
        "title": "Giữa năm có biến?",
        "wrong": "Chấm dứt: thời gian đã tập không được tính",
        "right": "Đổi nơi, tạm ngừng: thời gian vẫn được tính",
        "labels": [
          "Chấm dứt",
          "Đổi nơi · tạm ngừng"
        ],
        "wrongIllus": "cross-mark",
        "rightIllus": "hourglass-not-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Terminate the traineeship, and the time served is lost.",
          "sub": "Chấm dứt tập sự thì thời gian đã tập không được tính.",
          "keys": [
            "không được tính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Change place or pause, and it counts.",
          "sub": "Đổi nơi hay tạm ngừng thì vẫn được tính.",
          "keys": [
            "vẫn được tính"
          ]
        }
      ],
      "ref": "p13,p14"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Giữa năm · ⑧ Cuối năm",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Seventh"
          },
          {
            "id": "i-9",
            "t": "text",
            "text": "Đổi nơi (Điều 9):",
            "x": 5964,
            "y": 1265,
            "size": 46,
            "at": "l2:nine",
            "hl": [
              {
                "text": "Đổi nơi",
                "at": "l2:change"
              }
            ]
          },
          {
            "id": "i-9a",
            "t": "text",
            "text": "ngừng hoạt động · chuyển tỉnh",
            "x": 5964,
            "y": 1335,
            "size": 36,
            "at": "l1:closes",
            "color": "muted"
          },
          {
            "id": "i-9b",
            "t": "text",
            "text": "Cộng dồn: mỗi nơi ≥ 02 tháng",
            "x": 5964,
            "y": 1405,
            "size": 42,
            "at": "l2:two",
            "color": "accent",
            "hl": [
              {
                "text": "≥ 02 tháng",
                "at": "l2:two"
              }
            ]
          },
          {
            "id": "i-11",
            "t": "text",
            "text": "Tạm ngừng (Điều 11):",
            "x": 5964,
            "y": 1500,
            "size": 46,
            "at": "l3:pause"
          },
          {
            "id": "i-11a",
            "t": "text",
            "text": "≤ 2 lần · mỗi lần ≤ 03 tháng",
            "x": 5964,
            "y": 1570,
            "size": 42,
            "at": "l3:twice",
            "color": "coral",
            "hl": [
              {
                "text": "≤ 2 lần",
                "at": "l3:twice"
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
          "say": "Seventh stop: the firm closes, or Thảo moves province. Then what?",
          "sub": "Chặng bảy: nếu tổ chức ngừng hoạt động, hoặc Thảo chuyển sang tỉnh khác?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article nine lets you change place. Time adds up if each place lasts two months or more.",
          "sub": "Điều 9 cho đổi nơi tập sự. Thời gian được cộng dồn nếu mỗi nơi ít nhất hai tháng.",
          "keys": [
            "ít nhất hai tháng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article eleven allows a pause: twice at most, three months each at most.",
          "sub": "Điều 11 cho tạm ngừng: tối đa hai lần, mỗi lần không quá ba tháng.",
          "keys": [
            "tối đa hai lần"
          ]
        }
      ],
      "ref": "p13"
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
            "at": "l4",
            "fit": [
              "i-d2",
              "i-d2b"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l6",
            "fit": "I",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "i-rp",
            "t": "text",
            "text": "Báo cáo quá trình tập sự",
            "x": 6864,
            "y": 1265,
            "size": 46,
            "at": "l1:report",
            "hl": [
              {
                "text": "Báo cáo",
                "at": "l1:report"
              }
            ]
          },
          {
            "id": "i-rp2",
            "t": "text",
            "text": "LS hướng dẫn · tổ chức · Đoàn",
            "x": 6864,
            "y": 1335,
            "size": 36,
            "at": "l1:comments",
            "color": "muted"
          },
          {
            "id": "i-gh",
            "t": "text",
            "text": "Chưa đạt: gia hạn ≤ 2 × 06 tháng",
            "x": 6864,
            "y": 1405,
            "size": 38,
            "at": "l3:extensions",
            "hl": [
              {
                "text": "gia hạn",
                "at": "l3:extensions"
              }
            ]
          },
          {
            "id": "i-d2",
            "t": "text",
            "text": "Đợt 2/2026: 20–22/11/2026",
            "x": 6864,
            "y": 1500,
            "size": 46,
            "at": "l4:round",
            "color": "accent",
            "hl": [
              {
                "text": "20–22/11/2026",
                "at": "l4:November"
              }
            ]
          },
          {
            "id": "i-d2a",
            "t": "text",
            "text": "hai bài viết + vấn đáp",
            "x": 6864,
            "y": 1570,
            "size": 32,
            "at": "l5:written",
            "color": "muted"
          },
          {
            "id": "i-d2b",
            "t": "text",
            "text": "Tính tập sự đến hết 20/11/2026",
            "x": 6864,
            "y": 1635,
            "size": 40,
            "at": "l6:end",
            "color": "coral",
            "hl": [
              {
                "text": "hết 20/11/2026",
                "at": "l6:twentieth"
              }
            ]
          },
          {
            "id": "i-key",
            "t": "text",
            "text": "Đếm từ ngày đăng ký, đừng đoán",
            "x": 5964,
            "y": 1700,
            "size": 48,
            "at": "l7:guess",
            "color": "accent",
            "hl": [
              {
                "text": "đừng đoán",
                "at": "l7:guess"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: Điều 7, 9, 10, 11 Thông tư 10/2021/TT-BTP · Tạp chí Luật sư Việt Nam 13/8/2026",
            "x": 5964,
            "y": 1825,
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
          "who": "thao",
          "say": "Twelve months done! Now my report, with my supervisor's comments and the firm's stamp.",
          "sub": "Hết mười hai tháng! Giờ nộp báo cáo quá trình tập sự, kèm nhận xét luật sư hướng dẫn và xác nhận của tổ chức.",
          "keys": [
            "báo cáo quá trình tập sự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not there yet? Up to two extensions, six months each.",
          "sub": "Chưa đạt yêu cầu? Gia hạn tối đa hai lần, mỗi lần sáu tháng.",
          "keys": [
            "Gia hạn tối đa hai lần"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The bar journal plans round two of twenty twenty six for November twenty to twenty two.",
          "sub": "Theo Tạp chí Luật sư Việt Nam, kỳ kiểm tra đợt 2/2026 dự kiến từ 20 đến 22/11/2026.",
          "keys": [
            "20 đến 22/11/2026"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two written papers, plus an oral on a chosen case.",
          "sub": "Gồm hai bài viết và phần thực hành vấn đáp về một vụ việc tự chọn."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Training time counts until November twentieth. Each round has its own notice.",
          "sub": "Thời gian tập sự để dự kỳ này tính đến hết ngày 20/11/2026. Mỗi kỳ có thông báo riêng.",
          "keys": [
            "thông báo riêng"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Count from registration to the cut off. Do not guess.",
          "sub": "Đếm từ ngày Đoàn đăng ký đến mốc của kỳ kiểm tra, đừng đoán.",
          "keys": [
            "đừng đoán"
          ]
        }
      ],
      "ref": "p15,p16,p17"
    },
    {
      "id": "s22",
      "module": "BRK-08",
      "data": {
        "title": "Lộ trình gọn từ hôm nay",
        "points": [
          {
            "label": "Chọn nơi",
            "sub": "hỏi tên LS hướng dẫn",
            "illus": "office-building"
          },
          {
            "label": "Giấy xác nhận",
            "sub": "tổ chức gửi",
            "illus": "page-facing-up"
          },
          {
            "label": "Nộp ngay",
            "sub": "Đoàn nơi có trụ sở",
            "illus": "file-folder"
          },
          {
            "label": "Giấy CN",
            "sub": "ghi ngày đăng ký",
            "illus": "spiral-calendar"
          },
          {
            "label": "+12 tháng",
            "sub": "so mốc kỳ kiểm tra",
            "illus": "hourglass-not-done"
          },
          {
            "label": "Nhật ký",
            "sub": "ghi đều mỗi tuần",
            "illus": "notebook"
          }
        ],
        "current": 2
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Choose, get the confirmation, file at once.",
          "sub": "Chọn nơi, xin Giấy xác nhận, nộp ngay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Note the date, add twelve months, keep the logbook.",
          "sub": "Ghi ngày đăng ký, cộng mười hai tháng, ghi nhật ký đều.",
          "keys": [
            "cộng mười hai tháng"
          ]
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tối thứ Sáu · hai tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday"
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
                  "face": "happy",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "graduation-cap",
                "spiral-calendar"
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
            "caption": "Tối thứ Sáu · cùng chiếc bàn",
            "icon": "spiral-calendar"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1265,
            "w": 46,
            "h": 46,
            "at": "l2:Conditions",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1247,
            "size": 58,
            "at": "l2:Conditions+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Đủ điều kiện ở Điều 3",
            "x": 8000,
            "y": 1255,
            "size": 34,
            "at": "l2:Conditions+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1337,
            "w": 46,
            "h": 46,
            "at": "l2:confirmation",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1319,
            "size": 58,
            "at": "l2:confirmation+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Có tổ chức nhận + Giấy xác nhận",
            "x": 8000,
            "y": 1327,
            "size": 34,
            "at": "l2:confirmation+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1409,
            "w": 46,
            "h": 46,
            "at": "l2:supervisor",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1391,
            "size": 58,
            "at": "l2:supervisor+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Biết tên LS hướng dẫn, đã kiểm",
            "x": 8000,
            "y": 1399,
            "size": 34,
            "at": "l2:supervisor+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1481,
            "w": 46,
            "h": 46,
            "at": "l2:bar",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1463,
            "size": 58,
            "at": "l2:bar+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Nộp hồ sơ đúng Đoàn",
            "x": 8000,
            "y": 1471,
            "size": 34,
            "at": "l2:bar+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1553,
            "w": 46,
            "h": 46,
            "at": "l2:Certificate",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1535,
            "size": 58,
            "at": "l2:Certificate+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Lưu Giấy CN + ngày đăng ký",
            "x": 8000,
            "y": 1543,
            "size": 34,
            "at": "l2:Certificate+200"
          },
          {
            "id": "j-c5",
            "t": "box",
            "x": 7932,
            "y": 1625,
            "w": 46,
            "h": 46,
            "at": "l2:Logbook",
            "stroke": 5
          },
          {
            "id": "j-k5",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1607,
            "size": 58,
            "at": "l2:Logbook+600",
            "color": "accent"
          },
          {
            "id": "j-l5",
            "t": "text",
            "text": "Mở nhật ký tập sự",
            "x": 8000,
            "y": 1615,
            "size": 34,
            "at": "l2:Logbook+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“…học một sàng khôn”",
            "x": 7932,
            "y": 1710,
            "size": 48,
            "at": "l4:learn",
            "color": "accent",
            "hl": [
              {
                "text": "một sàng khôn",
                "at": "l4:basket"
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
          "say": "Friday evening, two weeks later. Same table, same Thảo.",
          "sub": "Tối thứ Sáu, hai tuần sau. Vẫn chiếc bàn ấy, vẫn Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Conditions, confirmation, supervisor: checked. Right bar. Certificate saved. Logbook open.",
          "sub": "Điều kiện, Giấy xác nhận, người hướng dẫn: đã kiểm. Đúng Đoàn. Giấy chứng nhận: đã lưu. Nhật ký: đã mở.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "And the bar found me a place. I should have asked sooner!",
          "sub": "Còn tớ, Đoàn giới thiệu được nơi rồi. Phải chi hỏi sớm hơn!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Travel one day, learn a basket of wisdom. Thảo did it in two weeks.",
          "sub": "“Đi một ngày đàng, học một sàng khôn.” Thảo học trong hai tuần.",
          "keys": [
            "học một sàng khôn"
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
      "ref": "p20"
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
            "at": "l1:supervisor",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:file",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l2:date",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 8692,
            "y": 260,
            "at": "l1:supervisor"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 2788,
            "y": 1280,
            "at": "l2:file"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 820,
            "y": 1455,
            "at": "l2:date"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề, không phải tư vấn vụ việc cụ thể; nhân vật là minh hoạ. Luật Luật sư đang sửa đổi (17/10–21/11/2026).",
            "x": 7932,
            "y": 1825,
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
          "say": "So: right place, a supervisor with three years and a clean record.",
          "sub": "Tóm lại: đúng nơi, và luật sư hướng dẫn đủ ba năm, không vướng kỷ luật.",
          "keys": [
            "đủ ba năm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "File at once with the bar where your firm sits. That date starts the clock.",
          "sub": "Nộp ngay ở Đoàn nơi tổ chức có trụ sở. Ngày Đoàn đăng ký mới là mốc mười hai tháng.",
          "keys": [
            "mốc mười hai tháng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "General knowledge, not advice for your case. The law is changing, so recheck.",
          "sub": "Đây là kiến thức nghề, không phải tư vấn cho trường hợp riêng. Luật Luật sư đang sửa đổi, nhớ kiểm lại.",
          "keys": [
            "nhớ kiểm lại"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p20"
    },
    {
      "id": "s25",
      "module": "QUIZ-01",
      "data": {
        "q": "You start working at a firm a month before registration, does that month count?",
        "options": [
          "Yes, every day spent in the office counts toward the training",
          "No, the twelve months only start from the date the bar registers you",
          "Yes, but only if the supervisor writes a kind note about you"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Khoản 1 Điều 10 Thông tư 10/2021/TT-BTP: 12 tháng tính từ ngày Đoàn đăng ký tập sự, không tính những tuần đi làm trước đó."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You start working at a firm a month before registration, does that month count?",
          "sub": "Anh chị đi làm ở văn phòng một tháng trước khi đăng ký, tháng đó có được tính không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. The twelve months only start from the day the bar registers you.",
          "sub": "Không. Mười hai tháng chỉ tính từ ngày Đoàn đăng ký tập sự."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Your first workday is not your first trainee day.",
          "sub": "Ngày đi làm chưa phải ngày tập sự."
        }
      ],
      "ref": "questions[19]"
    },
    {
      "id": "s26",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi lập danh sách năm nơi muốn gửi hồ sơ tập sự"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, list five law practice organisations you want to apply to.",
          "sub": "Hôm nay, lập danh sách năm tổ chức hành nghề muốn gửi hồ sơ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-21: đoán sai “12 tháng tính từ ngày đi làm hay ngày Đoàn đăng ký?”. Đét trái + bảng 10 ô theo hai tuần (và một năm) của Thảo: tối thứ Sáu có giấy tốt nghiệp → sáng thứ Bảy Dũng gọi (hai tháng chưa ai nhận → Đoàn giới thiệu) → chiều thứ Bảy cà phê Bác Bình (điều kiện luật sư hướng dẫn) → thứ Hai ngày đầu đi làm + “Khoan đã!” để cuối tháng mới nộp → chiều thứ Hai ở Đoàn (Lan) → một năm đếm thế nào → giữa năm có biến / cuối năm, kỳ kiểm tra → tối thứ Sáu hai tuần sau, cùng bàn (khép vòng). Nhân vật theo w145/_series/bar-trainee-registration.md. Số/điều chỉ từ bài: Điều 3, 4, 5, 7, 8, 9, 10, 11, 12 TT 10/2021; Điều 14, 16 Luật Luật sư; 10 ngày, 3 năm, 01 năm, 03 người, 05 ngày làm việc, 12 tháng, 04/06 tháng, 20 giờ, 02 tháng, 2 lần × 03 tháng, 2 × 06 tháng, đợt 2/2026 20–22/11, hết 20/11/2026 (Tạp chí LSVN 13/8/2026); kỳ họp 17/10–21/11/2026. BRK: s08 BRK-07 (rehook), s16 BRK-03 (12 tháng), s19 BRK-04 (chấm dứt vs đổi nơi/tạm ngừng), s22 BRK-08 (lộ trình p18); DLG s12. Câu đố questions[19]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
