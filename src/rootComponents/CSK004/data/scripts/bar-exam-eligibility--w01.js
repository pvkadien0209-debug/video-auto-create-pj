// bar-exam-eligibility--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-exam-eligibility--w01",
  "unit": {
    "audience": "bar-exam-overview",
    "slug": "bar-exam-eligibility",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Điều kiện dự kiểm tra và hồ sơ Đoàn luật sư xác nhận",
    "series": "Kỳ kiểm tra kết quả tập sự từ A đến Z — cấu trúc, điều kiện, lịch và cách chấm"
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
            "id": "a-12",
            "t": "text",
            "text": "Đủ 12 tháng",
            "x": 60,
            "y": 110,
            "size": 130,
            "at": "l1:twelve",
            "color": "accent"
          },
          {
            "id": "a-no",
            "t": "text",
            "text": "≠ được dự kiểm tra",
            "x": 70,
            "y": 290,
            "size": 70,
            "at": "l1:not enough",
            "color": "coral",
            "hl": [
              {
                "text": "≠",
                "at": "l1:not enough"
              }
            ]
          },
          {
            "id": "a-plus",
            "t": "text",
            "text": "+ hồ sơ đủ ký + Đoàn đề nghị",
            "x": 70,
            "y": 410,
            "size": 48,
            "at": "l2:file"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Hay vấp: ngày · chữ ký · cửa nộp",
            "x": 70,
            "y": 500,
            "size": 48,
            "at": "l3:three places",
            "hl": [
              {
                "text": "cửa nộp",
                "at": "l3:door"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Căn cứ: Điều 7, 15, 18 Thông tư 10/2021/TT-BTP · Điều 14 Luật Luật sư · Thông báo đợt 2/2026",
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
          "say": "Short answer first: twelve months of training is not enough for you to sit the assessment.",
          "sub": "Nói đáp án trước: đủ mười hai tháng tập sự chưa đủ để bạn được dự kiểm tra.",
          "keys": [
            "chưa đủ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "You also need a complete file, and your bar's proposal, on time.",
          "sub": "Còn cần hồ sơ đủ chữ ký, và được Đoàn luật sư đề nghị đúng hạn.",
          "keys": [
            "Đoàn luật sư đề nghị"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sounds simple. Yet people trip in three places: dates, signatures, and the door.",
          "sub": "Nghe đơn giản, nhưng hay vấp ở ba chỗ: ngày tháng, chữ ký, và cửa nộp.",
          "keys": [
            "ba chỗ"
          ]
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
            "at": "l1",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
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
            "at": "l1",
            "caption": "Một tối · cầm quyết định tập sự",
            "icon": "page-facing-up"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 900,
            "y": 640,
            "size": 54,
            "at": "l3:careful",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l3:careful"
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
          "say": "Meet Thảo, a trainee lawyer, registration decision in hand.",
          "sub": "Đây là Thảo, luật sư tập sự, tay cầm quyết định đăng ký tập sự."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Am I in for round two? Before revising, I want to be sure I'm eligible.",
          "sub": "Mình có được thi đợt 2 không? Trước khi ôn, phải biết chắc mình đủ điều kiện.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Careful now, no regrets later. Check the door is open before buying the books.",
          "sub": "“Cẩn tắc vô áy náy.” Xem cửa mở chưa rồi hãy mua sách.",
          "keys": [
            "Cẩn tắc vô áy náy"
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
            "text": "Mình có đủ điều kiện dự?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:eligible",
            "hl": [
              {
                "text": "đủ điều kiện",
                "at": "l1:eligible"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Thời gian · hồ sơ · Đoàn đề nghị",
            "x": 2028,
            "y": 170,
            "size": 54,
            "at": "l2:time",
            "color": "accent",
            "hl": [
              {
                "text": "Đoàn đề nghị",
                "at": "l2:proposal"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: hỏi chung chung",
            "x": 2028,
            "y": 290,
            "size": 52,
            "at": "l3:asking around",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:checking"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: tự kiểm từng giấy",
            "x": 2028,
            "y": 370,
            "size": 58,
            "at": "l3:checking",
            "color": "accent",
            "hl": [
              {
                "text": "từng giấy",
                "at": "l3:paper"
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
          "say": "So how do you know for sure you are eligible?",
          "sub": "Vậy làm sao biết chắc mình đủ điều kiện dự kiểm tra?",
          "keys": [
            "đủ điều kiện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three things: enough time, a signed file, and the bar's proposal.",
          "sub": "Ba việc: đủ thời gian, hồ sơ đủ chữ ký, và được Đoàn đề nghị.",
          "keys": [
            "Ba việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So, not asking around. Checking each paper yourself.",
          "sub": "Không phải hỏi chung chung, mà là tự kiểm từng giấy tờ.",
          "keys": [
            "tự kiểm từng giấy tờ"
          ]
        }
      ],
      "ref": "intro,p4"
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
            "id": "b-wk",
            "t": "text",
            "text": "7 chặng · trước khi Đoàn chốt",
            "x": 2028,
            "y": 530,
            "size": 50,
            "at": "l1:seven stops",
            "hl": [
              {
                "text": "Đoàn chốt",
                "at": "l1:closes"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+260",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+520",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+780",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+1040",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 615,
            "w": 215,
            "h": 90,
            "at": "l1:seven+1560",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "3 nhóm",
            "x": 2048,
            "y": 630,
            "size": 40,
            "at": "l1:seven+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Đề nghị",
            "x": 2283,
            "y": 630,
            "size": 40,
            "at": "l1:seven+380"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Đếm ngày",
            "x": 2518,
            "y": 630,
            "size": 40,
            "at": "l1:seven+640"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Chữ ký",
            "x": 2753,
            "y": 630,
            "size": 40,
            "at": "l1:seven+900"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Hồ sơ",
            "x": 2988,
            "y": 630,
            "size": 40,
            "at": "l1:seven+1160"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Hỏi Đoàn",
            "x": 3223,
            "y": 630,
            "size": 40,
            "at": "l1:seven+1420"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Hết hạn",
            "x": 3458,
            "y": 630,
            "size": 40,
            "at": "l1:seven+1680"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seven stops with Thảo, in the weeks before her bar closes its list.",
          "sub": "Bảy chặng cùng Thảo, những tuần trước khi Đoàn chốt danh sách.",
          "keys": [
            "Bảy chặng"
          ]
        }
      ],
      "ref": "intro"
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
          },
          {
            "at": "l4",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Ba nhóm được dự",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first stop"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
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
                  "at": "l4",
                  "pose": "explain"
                }
              ],
              "props": [
                "open-book",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:who",
            "caption": "Văn phòng · đọc khoản 2",
            "icon": "open-book"
          },
          {
            "id": "c-g1",
            "t": "text",
            "text": "1. Hết thời gian tập sự",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l2:finished"
          },
          {
            "id": "c-g2",
            "t": "text",
            "text": "2. Không đạt kỳ trước",
            "x": 3996,
            "y": 240,
            "size": 46,
            "at": "l2:failed"
          },
          {
            "id": "c-g3",
            "t": "text",
            "text": "3. Giấy chứng nhận hết hiệu lực",
            "x": 3996,
            "y": 310,
            "size": 44,
            "at": "l2:expired"
          },
          {
            "id": "c-g4",
            "t": "text",
            "text": "+ được hoãn (đợt 2/2026)",
            "x": 3996,
            "y": 380,
            "size": 40,
            "at": "l3:postpone",
            "color": "muted"
          },
          {
            "id": "c-x",
            "t": "text",
            "text": "Không đủ: gian dối hồ sơ…",
            "x": 3996,
            "y": 480,
            "size": 46,
            "at": "l6:dishonest",
            "color": "coral",
            "hl": [
              {
                "text": "gian dối",
                "at": "l6:dishonest"
              }
            ]
          },
          {
            "id": "c-kl",
            "t": "text",
            "text": "Từng bị kỷ luật? Hỏi Đoàn",
            "x": 3996,
            "y": 560,
            "size": 46,
            "at": "l7:disciplined",
            "color": "accent",
            "hl": [
              {
                "text": "Hỏi Đoàn",
                "at": "l7:ask"
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
          "say": "First stop: who may sit? Clause one, Article fifteen of Circular ten names three groups.",
          "sub": "Chặng một: ai được dự? Khoản 1 Điều 15 Thông tư 10/2021/TT-BTP nêu ba nhóm.",
          "keys": [
            "ba nhóm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Finished training. Failed an earlier round. Or holding an expired certificate.",
          "sub": "Người đã hết thời gian tập sự. Người không đạt kỳ trước. Người có Giấy chứng nhận đã hết hiệu lực."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The round two notice adds those allowed to postpone before.",
          "sub": "Thông báo đợt 2/2026 thêm: người đủ điều kiện đã được Hội đồng cho hoãn ở các kỳ trước."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, Thảo's supervising lawyer.",
          "sub": "Còn đây là cô Hoa, luật sư hướng dẫn của Thảo."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Read the original, Thảo. Clause two lists who is not eligible.",
          "sub": "Đọc nguyên văn đi em. Khoản 2 nêu những trường hợp không đủ điều kiện.",
          "face": "stern"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Like someone who failed the registration conditions, or was dishonest in the file.",
          "sub": "Như người không đáp ứng điều kiện đăng ký tập sự, người gian dối trong hồ sơ.",
          "keys": [
            "gian dối trong hồ sơ"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "It also covers discipline. Ever disciplined in training? Ask your bar first.",
          "sub": "Khoản này còn nhắc thời hạn xử lý kỷ luật. Từng bị kỷ luật? Đọc nguyên văn, hỏi Đoàn trước."
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "ref": "p1,p2"
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
            "at": "l1",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 12 tháng ≠ có tên",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second stop"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l2:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:coffee",
            "caption": "Cà phê với Dũng",
            "icon": "hot-beverage"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: coffee with Dũng, who passed his assessment years ago and loves giving advice.",
          "sub": "Chặng hai: cà phê với Dũng, người đạt kiểm tra từ lâu và rất thích cho lời khuyên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Free advice, like free coffee, is sometimes cold.",
          "sub": "Lời khuyên miễn phí, như cà phê miễn phí, đôi khi nguội ngắt."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Quán cà phê · cuối tuần",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đủ 12 tháng là tên tự có trong danh sách",
          "why": "Khoản 3 Điều 15: Ban chủ nhiệm Đoàn lập danh sách và đề nghị cho người tập sự dự kiểm tra.",
          "rule": "Đoàn đề nghị mới đưa tên đi tiếp"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Twelve months done? Your name goes on the list automatically. Trust me!",
          "sub": "Đủ mười hai tháng là tên tự có trong danh sách. Tin anh đi!",
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
          "say": "Clause three, Article fifteen: the bar's executive board draws up the list and proposes you.",
          "sub": "Khoản 3 Điều 15: Ban chủ nhiệm Đoàn lập danh sách và đề nghị.",
          "keys": [
            "lập danh sách và đề nghị"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Time done, file fully signed, and the bar's proposal. Then you're listed.",
          "sub": "Đủ thời gian, hồ sơ đủ chữ ký, được Đoàn đề nghị. Lúc đó mới có tên.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Time is one condition. The proposal moves your name.",
          "sub": "Đủ thời gian mới là một điều kiện; Đoàn đề nghị mới đưa tên đi tiếp.",
          "phase": "redo",
          "keys": [
            "Đoàn đề nghị mới đưa tên đi tiếp"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p3,p4"
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
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 180,
            "w": 46,
            "h": 46,
            "at": "l1:time",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 162,
            "size": 58,
            "at": "l1:time+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Hết thời gian tập sự",
            "x": 6034,
            "y": 172,
            "size": 44,
            "at": "l1:time+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 265,
            "w": 46,
            "h": 46,
            "at": "l1:report",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 247,
            "size": 58,
            "at": "l1:report+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Báo cáo + sổ đủ chữ ký",
            "x": 6034,
            "y": 257,
            "size": 44,
            "at": "l1:report+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 350,
            "w": 46,
            "h": 46,
            "at": "l2:proposal",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 332,
            "size": 58,
            "at": "l2:proposal+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Ban chủ nhiệm Đoàn đề nghị",
            "x": 6034,
            "y": 342,
            "size": 44,
            "at": "l2:proposal+200"
          },
          {
            "id": "d-miss",
            "t": "text",
            "text": "Thiếu 1 giấy → dừng ở Đoàn",
            "x": 5964,
            "y": 480,
            "size": 50,
            "at": "l2:missing",
            "color": "coral",
            "hl": [
              {
                "text": "dừng ở Đoàn",
                "at": "l2:stops"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Thông báo 01/TB-HĐKT đợt 2/2026",
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
          "say": "The round two notice lists it: time done, report and logbook with every comment and confirmation...",
          "sub": "Thông báo đợt 2/2026 ghi: hoàn thành thời gian tập sự, báo cáo và sổ nhật ký đủ nhận xét, xác nhận…"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "...and the bar's confirmation and proposal. One paper missing, and the file stops at the bar.",
          "sub": "…và được Ban chủ nhiệm Đoàn xác nhận, đề nghị. Thiếu một giấy tờ là hồ sơ dừng ở Đoàn.",
          "keys": [
            "dừng ở Đoàn"
          ]
        }
      ],
      "ref": "p3"
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
            "text": "③ Đếm 12 tháng",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third stop"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "spiral-calendar",
                "page-facing-up"
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
            "at": "l1:counting",
            "caption": "Tối ở nhà · đếm lịch",
            "icon": "spiral-calendar"
          },
          {
            "id": "e-from",
            "t": "text",
            "text": "Từ ngày quyết định đăng ký",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:decision"
          },
          {
            "id": "e-to",
            "t": "text",
            "text": "→ hết ngày 20/11/2026",
            "x": 7932,
            "y": 240,
            "size": 54,
            "at": "l2:twentieth",
            "color": "accent",
            "hl": [
              {
                "text": "20/11/2026",
                "at": "l2:twentieth"
              }
            ]
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "10/11/2025 → 09/11/2026 ✓",
            "x": 7932,
            "y": 340,
            "size": 48,
            "at": "l4:ninth"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "01/12/2025 → 30/11/2026 ✗",
            "x": 7932,
            "y": 420,
            "size": 48,
            "at": "l5:thirtieth",
            "color": "coral"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Điều 14 Luật Luật sư · Thông báo đợt 2/2026",
            "x": 7932,
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
          "say": "Third stop: counting. Article fourteen of the Law on Lawyers: twelve months of training.",
          "sub": "Chặng ba: đếm ngày. Điều 14 Luật Luật sư: thời gian tập sự là mười hai tháng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Round two counts from the bar's registration decision to the end of November twentieth, twenty twenty six.",
          "sub": "Đợt 2/2026 tính từ ngày Đoàn ra quyết định đăng ký tập sự đến hết ngày 20/11/2026.",
          "keys": [
            "hết ngày 20/11/2026"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Say my decision is dated November tenth, twenty twenty five. Plus twelve months...",
          "sub": "Giả sử quyết định của mình ghi 10/11/2025. Cộng mười hai tháng…",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "...ends November ninth, twenty twenty six. Before the cut off. In time.",
          "sub": "…kết thúc 09/11/2026. Trước mốc. Kịp đợt 2.",
          "keys": [
            "Kịp đợt 2"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A decision dated December first runs to November thirtieth. After the cut off: next round.",
          "sub": "Quyết định ghi 01/12/2025 thì kéo đến hết 30/11/2026, sau mốc: chờ đợt sau.",
          "keys": [
            "chờ đợt sau"
          ]
        }
      ],
      "ref": "p5,p6"
    },
    {
      "id": "s09b",
      "module": "BRK-12",
      "data": {
        "word": "Từ ngày quyết định",
        "sub": "Không đếm từ ngày bắt đầu đi làm",
        "from": [
          600,
          200
        ],
        "others": [
          "20/11/2026",
          "12 tháng",
          "…"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "From the date on the decision.",
          "sub": "Từ ngày ghi trên quyết định."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Not from your first day at work.",
          "sub": "Không đếm từ ngày bắt đầu đi làm.",
          "keys": [
            "Không đếm từ ngày bắt đầu đi làm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "fit": "E",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "e-cut",
            "t": "text",
            "text": "Được giảm thời gian? Kèm bản sao",
            "x": 7932,
            "y": 520,
            "size": 44,
            "at": "l1:shortened",
            "hl": [
              {
                "text": "Kèm bản sao",
                "at": "l1:proof"
              }
            ]
          },
          {
            "id": "e-rut",
            "t": "text",
            "text": "Đếm từ quyết định",
            "x": 8772,
            "y": 680,
            "size": 54,
            "at": "l2:date",
            "color": "accent",
            "hl": [
              {
                "text": "quyết định",
                "at": "l2:decision"
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
          "say": "Training shortened? Then the file needs proof copies, under Article eighteen.",
          "sub": "Được giảm thời gian tập sự? Hồ sơ phải kèm bản sao giấy tờ chứng minh, theo điểm đ khoản 2 Điều 18."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Count from the date on the decision. Your first coffee at the firm doesn't count.",
          "sub": "Đếm từ ngày ghi trên quyết định. Ly cà phê đầu tiên ở công ty không tính.",
          "keys": [
            "ngày ghi trên quyết định"
          ]
        }
      ],
      "ref": "p5,p7"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Ai phải ký?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth stop"
          },
          {
            "id": "f-so",
            "t": "text",
            "text": "Sổ nhật ký (Điều 7.1)",
            "x": 60,
            "y": 1260,
            "size": 48,
            "at": "l1:logbook"
          },
          {
            "id": "f-so2",
            "t": "text",
            "text": "→ luật sư hướng dẫn + tổ chức",
            "x": 60,
            "y": 1330,
            "size": 42,
            "at": "l2:supervising",
            "color": "muted"
          },
          {
            "id": "f-bc",
            "t": "text",
            "text": "Báo cáo (Điều 7.2) → nộp Đoàn",
            "x": 60,
            "y": 1410,
            "size": 46,
            "at": "l3:report"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "3 bên: luật sư · tổ chức · Đoàn",
            "x": 60,
            "y": 1490,
            "size": 48,
            "at": "l4:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 bên",
                "at": "l4:three"
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
          "say": "Fourth stop: signatures. Article seven, clause one: a logbook on the official form, of every task.",
          "sub": "Chặng bốn: chữ ký. Khoản 1 Điều 7: sổ nhật ký theo mẫu, ghi các công việc đã làm khi tập sự."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "At the end, your supervising lawyer and the host firm confirm it.",
          "sub": "Kết thúc tập sự, sổ có xác nhận của luật sư hướng dẫn và tổ chức hành nghề nhận tập sự."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Clause two: a written report to your bar, with your supervisor's comments and signature.",
          "sub": "Khoản 2: báo cáo bằng văn bản nộp Đoàn, có nhận xét và chữ ký của luật sư hướng dẫn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plus the firm's confirmation, and the bar's assessment of your ethics. Three parties check it.",
          "sub": "Kèm xác nhận của tổ chức và đánh giá của Đoàn về tư cách đạo đức, ý thức tuân thủ pháp luật. Ba bên xem hồ sơ.",
          "keys": [
            "Ba bên"
          ]
        }
      ],
      "ref": "p8,p9"
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
            "at": "l2",
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
                  "id": "thao",
                  "side": "left",
                  "pose": "think",
                  "face": "worried"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "notebook",
                "file-folder"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "medium",
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
            "at": "l1:confession",
            "caption": "Tuần cuối tập sự · ghi sổ dồn",
            "icon": "notebook"
          },
          {
            "id": "f-2w",
            "t": "text",
            "text": "Đối chiếu ~2 tuần, sát hạn",
            "x": 60,
            "y": 1590,
            "size": 46,
            "at": "l4:two weeks",
            "color": "coral",
            "hl": [
              {
                "text": "sát hạn",
                "at": "l4:deadline"
              }
            ]
          },
          {
            "id": "f-wk",
            "t": "text",
            "text": "Ghi theo tuần → ký nhẹ tênh",
            "x": 60,
            "y": 1670,
            "size": 48,
            "at": "l5:weekly",
            "color": "accent",
            "hl": [
              {
                "text": "theo tuần",
                "at": "l5:weekly"
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
          "say": "Now, a confession. Busy with cases, Thảo left her logbook to the last week.",
          "sub": "Giờ là chuyện thật thà. Bận theo vụ việc, Thảo để dồn sổ nhật ký đến tuần cuối."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "So many tasks, and I can't remember the dates!",
          "sub": "Bao nhiêu việc, mà mình chẳng nhớ ngày nào nữa!",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Check each entry against the case files before I sign, Thảo.",
          "sub": "Đối chiếu lại với hồ sơ từng vụ rồi cô mới ký nhận xét.",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That checking took nearly two weeks, close to the bar's deadline for its list.",
          "sub": "Việc đối chiếu kéo dài gần hai tuần, sát hạn Đoàn gửi danh sách.",
          "keys": [
            "gần hai tuần"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Write it weekly, and the final signature is just a formality.",
          "sub": "Ghi sổ theo tuần thì chữ ký cuối kỳ chỉ còn là thủ tục.",
          "keys": [
            "Ghi sổ theo tuần"
          ]
        }
      ],
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
            "text": "⑤ Bộ hồ sơ",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:fifth stop"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l2:form",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1242,
            "size": 58,
            "at": "l2:form+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Giấy đề nghị (mẫu TP-LS-06)",
            "x": 2098,
            "y": 1252,
            "size": 38,
            "at": "l2:form+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1332,
            "w": 46,
            "h": 46,
            "at": "l2:trainee certificate",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1314,
            "size": 58,
            "at": "l2:trainee certificate+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Bản sao Giấy chứng nhận tập sự",
            "x": 2098,
            "y": 1324,
            "size": 38,
            "at": "l2:trainee certificate+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1404,
            "w": 46,
            "h": 46,
            "at": "l2:degree",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1386,
            "size": 58,
            "at": "l2:degree+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Bản sao bằng luật",
            "x": 2098,
            "y": 1396,
            "size": 38,
            "at": "l2:degree+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1476,
            "w": 46,
            "h": 46,
            "at": "l3:report",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1458,
            "size": 58,
            "at": "l3:report+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Báo cáo + sổ nhật ký",
            "x": 2098,
            "y": 1468,
            "size": 38,
            "at": "l3:report+200"
          },
          {
            "id": "g-c4",
            "t": "box",
            "x": 2028,
            "y": 1548,
            "w": 46,
            "h": 46,
            "at": "l3:shortened",
            "stroke": 5
          },
          {
            "id": "g-k4",
            "t": "text",
            "text": "✓",
            "x": 2034,
            "y": 1530,
            "size": 58,
            "at": "l3:shortened+600",
            "color": "accent"
          },
          {
            "id": "g-l4",
            "t": "text",
            "text": "Giấy tờ giảm thời gian",
            "x": 2098,
            "y": 1540,
            "size": 38,
            "at": "l3:shortened+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: the file itself. Article eighteen, clause two, lists five items.",
          "sub": "Chặng năm: bộ hồ sơ. Khoản 2 Điều 18 liệt kê năm thứ.",
          "keys": [
            "năm thứ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The application form, a copy of your trainee certificate, a copy of your law degree.",
          "sub": "Giấy đề nghị theo mẫu, bản sao Giấy chứng nhận người tập sự, bản sao bằng cử nhân hoặc thạc sĩ luật."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The report with the logbook, and proof if your training was shortened.",
          "sub": "Báo cáo kèm sổ nhật ký, và giấy tờ chứng minh nếu được giảm thời gian tập sự. Mẫu dẫn theo Phụ lục TP-LS-06."
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
            "fit": "G",
            "move": "cut"
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
                  "id": "binh",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "file-cabinet",
                "card-file-box"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1",
            "caption": "Văn phòng Đoàn luật sư",
            "icon": "file-cabinet"
          },
          {
            "id": "g-15",
            "t": "text",
            "text": "Chậm nhất ngày 15, tháng cuối quý",
            "x": 2028,
            "y": 1635,
            "size": 42,
            "at": "l2:fifteenth",
            "hl": [
              {
                "text": "ngày 15",
                "at": "l2:fifteenth"
              }
            ]
          },
          {
            "id": "g-20",
            "t": "text",
            "text": "Đợt 2: HĐ báo trước 20/10/2026",
            "x": 2028,
            "y": 1705,
            "size": 42,
            "at": "l3:october",
            "color": "accent",
            "hl": [
              {
                "text": "20/10/2026",
                "at": "l3:october"
              }
            ]
          },
          {
            "id": "g-bn",
            "t": "text",
            "text": "Hà Nội · TP.HCM (cơ sở 2)",
            "x": 2848,
            "y": 1780,
            "size": 38,
            "at": "l4:north"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And this is Bác Bình, at the bar's office, where every file passes.",
          "sub": "Còn đây là bác Bình, ở văn phòng Đoàn luật sư, nơi mọi hồ sơ đi qua."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "We send our list to the Federation and the justice department, by the fifteenth of the quarter's last month.",
          "sub": "Đoàn gửi danh sách cho Liên đoàn và Sở Tư pháp, chậm nhất ngày 15 của tháng cuối quý."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For round two, the council planned to tell bars who's eligible before October twentieth.",
          "sub": "Đợt 2/2026, Hội đồng hẹn báo danh sách đủ, không đủ điều kiện cho các Đoàn trước ngày 20/10/2026.",
          "keys": [
            "trước ngày 20/10/2026"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Files go to Hanoi for the north, or Ho Chi Minh City for the south.",
          "sub": "Hồ sơ gửi về Liên đoàn ở Hà Nội cho phía Bắc, văn phòng cơ sở 2 ở Thành phố Hồ Chí Minh cho phía Nam."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Chưa nghe Đoàn báo gì: ngồi chờ hay hỏi?",
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
          "say": "Heard nothing from your bar? Wait, or ask?",
          "sub": "Chưa nghe Đoàn báo gì? Ngồi chờ, hay hỏi?",
          "keys": [
            "Ngồi chờ, hay hỏi"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p13"
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
          },
          {
            "at": "l4",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Hỏi Đoàn cho đúng",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth stop"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "e-mail",
                "laptop"
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
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:asking",
            "caption": "Viết thư gửi Đoàn",
            "icon": "e-mail"
          },
          {
            "id": "h-bad",
            "t": "text",
            "text": "“Em có được thi không ạ?”",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l2:sit",
            "color": "muted"
          },
          {
            "id": "h-badx",
            "t": "strike",
            "over": "h-bad",
            "at": "l3:search"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Họ tên · tổ chức tập sự",
            "x": 3996,
            "y": 1360,
            "size": 44,
            "at": "l4:name"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Số, ngày quyết định",
            "x": 3996,
            "y": 1430,
            "size": 44,
            "at": "l4:decision"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Ngày nộp báo cáo, sổ",
            "x": 3996,
            "y": 1500,
            "size": 44,
            "at": "l4:filed"
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Có tên chưa? Thiếu gì?",
            "x": 3996,
            "y": 1570,
            "size": 48,
            "at": "l5:missing",
            "color": "accent",
            "hl": [
              {
                "text": "Thiếu gì?",
                "at": "l5:missing"
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
          "say": "Sixth stop: asking your bar. Thảo's first draft was one line.",
          "sub": "Chặng sáu: hỏi Đoàn. Bản nháp đầu của Thảo chỉ có một dòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Can I sit this round, please?",
          "sub": "Em hỏi em có được thi đợt này không ạ?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Bác Bình can't search that. Give him details.",
          "sub": "Câu đó bác Bình chẳng tra được gì. Hãy đưa thông tin để tra."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Dear board: my name, my host firm, my decision number and date, and when I filed.",
          "sub": "Kính gửi Ban chủ nhiệm: họ tên, tổ chức tập sự, số và ngày quyết định, ngày đã nộp báo cáo, sổ nhật ký.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Is my file on the proposal list for this round, and is anything missing?",
          "sub": "Hồ sơ của em đã có trong danh sách đề nghị đợt này chưa, còn thiếu giấy tờ gì?"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Now the bar can check right away.",
          "sub": "Câu sau cho Đoàn đủ thông tin để tra ngay.",
          "keys": [
            "tra ngay"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s17",
      "module": "BRK-04",
      "data": {
        "labels": [
          "Trước",
          "Sau"
        ],
        "title": "Hỏi Đoàn",
        "wrong": "Em có được thi đợt này không ạ?",
        "right": "Số quyết định, ngày nộp: có tên chưa, thiếu gì?",
        "wrongIllus": "thinking-face",
        "rightIllus": "e-mail"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Vague questions get vague answers.",
          "sub": "Hỏi chung chung, đáp chung chung."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Ask with your decision number and filing date.",
          "sub": "Hỏi bằng số quyết định và ngày nộp.",
          "keys": [
            "số quyết định và ngày nộp"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
        }
      ],
      "ref": "p14,p15"
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
            "at": 150,
            "fit": "I",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Giấy hết hạn: cửa nào?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:seventh"
          },
          {
            "id": "i-15",
            "t": "text",
            "text": "Đoàn lập danh sách: nhóm 1 + 2",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l2:lists"
          },
          {
            "id": "i-18",
            "t": "text",
            "text": "Nhóm 3 → tự nộp Liên đoàn",
            "x": 5964,
            "y": 1340,
            "size": 48,
            "at": "l3:federation",
            "color": "accent",
            "hl": [
              {
                "text": "tự nộp",
                "at": "l3:themselves"
              }
            ]
          },
          {
            "id": "i-18b",
            "t": "text",
            "text": "giấy đề nghị + giấy hết hiệu lực",
            "x": 5964,
            "y": 1410,
            "size": 40,
            "at": "l3:form",
            "color": "muted"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Khoản 3 Điều 15, khoản 3 Điều 18 Thông tư 10/2021/TT-BTP",
            "x": 5964,
            "y": 1810,
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
          "say": "Seventh stop: Dũng's own story. He passed long ago, never applied for a licence, and now his certificate has expired.",
          "sub": "Chặng bảy: chuyện của chính Dũng. Đạt từ lâu, chưa xin chứng chỉ, nay Giấy chứng nhận đã hết hiệu lực."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Under Article fifteen, the bar lists only those who finished training, and those who failed before.",
          "sub": "Khoản 3 Điều 15: Đoàn lập danh sách cho người đã hoàn thành tập sự và người không đạt kỳ trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Expired holders file themselves with the Federation: the form, plus the expired certificate.",
          "sub": "Người có giấy hết hiệu lực tự nộp cho Liên đoàn: giấy đề nghị theo mẫu và Giấy chứng nhận đã hết hiệu lực.",
          "keys": [
            "tự nộp cho Liên đoàn"
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
            "at": "a1",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center"
                }
              ],
              "left": {
                "label": "Nộp lại cho Đoàn",
                "ok": false
              },
              "right": {
                "label": "Gửi thẳng Liên đoàn",
                "ok": true
              }
            },
            "at": "l1:versions",
            "caption": "Dũng · giấy đã hết hiệu lực",
            "icon": "envelope"
          },
          {
            "id": "i-a",
            "t": "text",
            "text": "A: hồ sơ nằm chờ ở Đoàn",
            "x": 5964,
            "y": 1510,
            "size": 44,
            "at": "l4:waits",
            "color": "muted"
          },
          {
            "id": "i-b",
            "t": "text",
            "text": "B: đến đúng nơi xét",
            "x": 5964,
            "y": 1590,
            "size": 48,
            "at": "b1:federation",
            "color": "accent",
            "hl": [
              {
                "text": "đúng nơi",
                "at": "l5:right door"
              }
            ]
          },
          {
            "id": "i-3k",
            "t": "text",
            "text": "Trượt 3 kỳ → tập sự lại",
            "x": 5964,
            "y": 1670,
            "size": 38,
            "at": "l5:three",
            "color": "coral"
          },
          {
            "id": "i-rut",
            "t": "text",
            "text": "Mỗi nhóm một cửa",
            "x": 6804,
            "y": 1770,
            "size": 54,
            "at": "l6:door",
            "color": "accent",
            "hl": [
              {
                "text": "một cửa",
                "at": "l6:own door"
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
          "say": "Two versions of Dũng.",
          "sub": "Hai phiên bản của Dũng."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "Same as last time. I'll hand my file to the bar and wait.",
          "sub": "Như lần đầu thôi. Nộp lại hồ sơ cho Đoàn rồi chờ.",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But the bar doesn't list this group. The file just waits.",
          "sub": "Nhưng Đoàn không lập danh sách cho nhóm này, hồ sơ có thể nằm chờ."
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "Article eighteen, clause three. Form and old certificate, straight to the Federation.",
          "sub": "Khoản 3 Điều 18. Giấy đề nghị và giấy cũ, gửi thẳng Liên đoàn.",
          "phase": "b",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Right door. Note: three failed rounds since round two, twenty twenty two, means training again.",
          "sub": "Đúng cửa. Lưu ý: không đạt 3 kỳ tính từ đợt 2/2022 thì không được dự, phải đăng ký tập sự lại."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Each group has its own door. Know yours before you send anything.",
          "sub": "Mỗi nhóm có một cửa nộp riêng; xác định mình thuộc nhóm nào trước khi gửi.",
          "keys": [
            "một cửa nộp riêng"
          ]
        }
      ],
      "ref": "p16,p17,p18"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Cùng chiếc bàn · tự kiểm",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:same desk"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
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
                "check-mark-button"
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
            "at": "l1:same desk",
            "caption": "Trước khi Đoàn chốt danh sách",
            "icon": "check-mark-button"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1240,
            "w": 46,
            "h": 46,
            "at": "l2:decision",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1222,
            "size": 58,
            "at": "l2:decision+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Quyết định + 12 tháng < mốc",
            "x": 8002,
            "y": 1232,
            "size": 40,
            "at": "l2:decision+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1320,
            "w": 46,
            "h": 46,
            "at": "l3:logbook",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1302,
            "size": 58,
            "at": "l3:logbook+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Sổ: 2 xác nhận",
            "x": 8002,
            "y": 1312,
            "size": 40,
            "at": "l3:logbook+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1400,
            "w": 46,
            "h": 46,
            "at": "l3:report",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1382,
            "size": 58,
            "at": "l3:report+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Báo cáo: đủ, đã nộp",
            "x": 8002,
            "y": 1392,
            "size": 40,
            "at": "l3:report+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1480,
            "w": 46,
            "h": 46,
            "at": "l4:copies",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1462,
            "size": 58,
            "at": "l4:copies+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Bản sao giấy, bằng luật",
            "x": 8002,
            "y": 1472,
            "size": 40,
            "at": "l4:copies+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1560,
            "w": 46,
            "h": 46,
            "at": "l4:asked",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1542,
            "size": 58,
            "at": "l4:asked+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Đã hỏi Đoàn",
            "x": 8002,
            "y": 1552,
            "size": 40,
            "at": "l4:asked+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 7932,
            "y": 1690,
            "size": 50,
            "at": "l5:careful",
            "color": "accent",
            "hl": [
              {
                "text": "vô áy náy",
                "at": "l5:regrets"
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
          "say": "Back at the same desk, the same decision paper. This time, with a checklist.",
          "sub": "Trở lại chiếc bàn ấy, vẫn tờ quyết định ấy. Lần này có danh sách tự kiểm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Decision date plus twelve months, before the cut off. Check.",
          "sub": "Ngày quyết định cộng mười hai tháng, trước mốc của đợt. Xong.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Logbook confirmed by supervisor and firm. Report signed and filed.",
          "sub": "Sổ nhật ký có xác nhận của luật sư hướng dẫn và tổ chức. Báo cáo đủ chữ ký, đã nộp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Copies of the trainee certificate and law degree. And she has asked her bar.",
          "sub": "Bản sao Giấy chứng nhận người tập sự và bằng luật. Và đã hỏi Đoàn tên mình có chưa.",
          "keys": [
            "đã hỏi Đoàn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Careful now, no regrets later.",
          "sub": "“Cẩn tắc vô áy náy.”",
          "keys": [
            "Cẩn tắc vô áy náy"
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
      "ref": "p19"
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
            "at": "l1:time",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l1:signature",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l1:proposal",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 8632,
            "y": 240,
            "at": "l1:time"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1490,
            "at": "l1:signature"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6664,
            "y": 480,
            "at": "l1:proposal"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài là kiến thức nghề, không phải tư vấn cho vụ việc cụ thể. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 30,
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
          "say": "So: time counted from the decision, a file with every signature, and the bar's proposal on time.",
          "sub": "Tóm lại: đủ thời gian tính từ quyết định, hồ sơ đủ chữ ký, được Đoàn đề nghị đúng hạn.",
          "keys": [
            "được Đoàn đề nghị đúng hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Do it now: take out your decision, count twelve months, compare with the nearest round.",
          "sub": "Việc làm ngay: lấy quyết định ra, đếm lại mười hai tháng, so với mốc của đợt gần nhất.",
          "keys": [
            "đếm lại mười hai tháng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "This is professional knowledge, not advice on any specific case.",
          "sub": "Bài là kiến thức nghề, không phải tư vấn cho vụ việc cụ thể."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s30",
      "module": "QUIZ-01",
      "data": {
        "q": "Does finishing twelve months automatically put your name on the list?",
        "options": [
          "Yes, the national council reads every registration and adds names by itself",
          "Yes, as long as your supervisor sends a short text to the council",
          "No, the bar's executive board must list and propose you after checking documents"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "clipboard",
        "why": "Khoản 3 Điều 15: Ban chủ nhiệm Đoàn lập danh sách và đề nghị."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Does finishing twelve months automatically put your name on the list?",
          "sub": "Đủ 12 tháng có tự động đưa tên bạn vào danh sách không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No, the bar's executive board must list and propose you after checking documents.",
          "sub": "Không, Ban chủ nhiệm Đoàn phải lập danh sách và đề nghị sau khi xem hồ sơ."
        }
      ],
      "beats": {
        "after": 500
      },
      "ref": "questions[5]"
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu về điều kiện dự kiểm tra",
        "sub": "Đếm từ quyết định, hỏi đúng cửa"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Forty questions are below. Knock on the right door.",
          "sub": "Bốn mươi câu hỏi ở bên dưới. Gõ đúng cửa nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-20",
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-20 (đáp án trước, lý do sau): “Đủ 12 tháng chưa đủ để được dự kiểm tra” + ba chỗ hay vấp (ngày, chữ ký, cửa nộp). Dòng thời gian: những tuần trước khi Đoàn chốt danh sách đợt 2/2026 của Thảo (một tối cầm quyết định → 7 chặng → cùng chiếc bàn, tự kiểm p19). Nhân vật (w145/_series/bar-exam-overview.md): Thảo (chính; ghi sổ dồn p10 đúng như bài; ngày 10/11/2025 của phần làm mẫu p6 gán cho Thảo như giả sử), Cô Hoa (luật sư hướng dẫn: đọc khoản 2 p2, đòi đối chiếu p10), Dũng (người đạt từ lâu, giấy hết hiệu lực — đúng vai p17; lời khuyên “tự có tên” ở DLG là ngộ nhận p3), Bác Bình (văn phòng Đoàn: hạn gửi danh sách p13, người đọc thư p14). Cảnh ngắt nhịp: BRK-12 “Từ ngày quyết định” (p7), BRK-07 rehook (p13→p14), BRK-04 Trước/Sau thư hỏi Đoàn (p14). Mọi mốc lấy từ bài. Lưu ý chung #133 ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
