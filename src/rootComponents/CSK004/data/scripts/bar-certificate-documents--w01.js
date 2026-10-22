// bar-certificate-documents--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-certificate-documents--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "bar-practising-certificate",
    "slug": "bar-certificate-documents",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Hồ sơ đề nghị cấp chứng chỉ hành nghề gồm những gì?",
    "series": "Xin chứng chỉ hành nghề luật sư sau khi đạt kiểm tra — hồ sơ, thẩm quyền mới và khi bị từ chối"
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
            "fit": [
              "a-ob"
            ],
            "move": "cut",
            "zoom": 1.3
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-ob",
            "t": "illus",
            "name": "page-with-curl",
            "x": 120,
            "y": 110,
            "size": 300,
            "at": "l1:form"
          },
          {
            "id": "a-obt",
            "t": "text",
            "text": "Phiếu lý lịch tư pháp",
            "x": 460,
            "y": 160,
            "size": 64,
            "at": "l1:record",
            "hl": [
              {
                "text": "lý lịch tư pháp",
                "at": "l1:record"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Một buổi sáng xếp hàng",
            "x": 460,
            "y": 270,
            "size": 50,
            "at": "l2:queue",
            "color": "coral",
            "hl": [
              {
                "text": "xếp hàng",
                "at": "l2:queue"
              }
            ]
          },
          {
            "id": "a-why",
            "t": "text",
            "text": "Để làm gì?",
            "x": 460,
            "y": 360,
            "size": 56,
            "at": "l3:who",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Look closely. One judicial record form, still warm from the printer.",
          "sub": "Nhìn kỹ nhé. Một tờ phiếu lý lịch tư pháp, còn ấm hơi máy in.",
          "keys": [
            "phiếu lý lịch tư pháp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It cost someone a whole morning in a queue.",
          "sub": "Nó tốn của một người nguyên buổi sáng xếp hàng.",
          "keys": [
            "nguyên buổi sáng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And who asked for it? Hold that thought.",
          "sub": "Mà ai đòi tờ này? Giữ câu hỏi đó nhé."
        }
      ],
      "ref": "p8,p9"
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
            "module": "SCENE-03",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "street",
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
                "page-with-curl",
                "classical-building"
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
            "caption": "Ngày 1 · sáng thứ Hai",
            "icon": "page-with-curl"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 60,
            "y": 520,
            "size": 58,
            "at": "l4:careful",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l4:careful"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "… nhưng cẩn tắc đúng chỗ?",
            "x": 60,
            "y": 610,
            "size": 46,
            "at": "l4:place",
            "color": "muted"
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
          "say": "She passed the probation test last week. Today, day one of building her certificate file.",
          "sub": "Tuần trước cô đạt kỳ kiểm tra tập sự. Hôm nay, ngày đầu làm hồ sơ xin chứng chỉ.",
          "keys": [
            "ngày đầu làm hồ sơ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Judicial record form, done first! Better safe than sorry.",
          "sub": "Phiếu lý lịch tư pháp, xong trước! Cẩn tắc vô áy náy.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Careful is good. But careful in the right place?",
          "sub": "Cẩn tắc thì tốt. Nhưng có cẩn tắc đúng chỗ không?",
          "keys": [
            "đúng chỗ"
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
      "ref": "intro,p9"
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
            "text": "Hồ sơ gồm những gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:file",
            "hl": [
              {
                "text": "những gì",
                "at": "l1:what"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: càng nhiều càng chắc",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:more",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:safer+400"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: 01 bộ, 4 giấy",
            "x": 2028,
            "y": 260,
            "size": 60,
            "at": "l3:one",
            "color": "accent",
            "hl": [
              {
                "text": "01 bộ, 4 giấy",
                "at": "l3:four"
              }
            ]
          },
          {
            "id": "b-f0",
            "t": "box",
            "x": 2028,
            "y": 400,
            "w": 390,
            "h": 110,
            "at": "l3:request",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-f1",
            "t": "box",
            "x": 2448,
            "y": 400,
            "w": 390,
            "h": 110,
            "at": "l3:health",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "b-f2",
            "t": "box",
            "x": 2868,
            "y": 400,
            "w": 390,
            "h": 110,
            "at": "l4:degree",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-f3",
            "t": "box",
            "x": 3288,
            "y": 400,
            "w": 390,
            "h": 110,
            "at": "l4:test",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "b-ft0",
            "t": "text",
            "text": "Văn bản đề nghị",
            "x": 2053,
            "y": 428,
            "size": 40,
            "at": "l3:request+200"
          },
          {
            "id": "b-ft1",
            "t": "text",
            "text": "Giấy khám sức khoẻ",
            "x": 2473,
            "y": 428,
            "size": 40,
            "at": "l3:health+200"
          },
          {
            "id": "b-ft2",
            "t": "text",
            "text": "Bản sao bằng luật",
            "x": 2893,
            "y": 428,
            "size": 40,
            "at": "l4:degree+200"
          },
          {
            "id": "b-ft3",
            "t": "text",
            "text": "Bản sao Giấy CN",
            "x": 3313,
            "y": 428,
            "size": 40,
            "at": "l4:test+200"
          },
          {
            "id": "b-e",
            "t": "text",
            "text": "Bản chính hoặc bản điện tử",
            "x": 2028,
            "y": 560,
            "size": 44,
            "at": "l5:electronic",
            "hl": [
              {
                "text": "bản điện tử",
                "at": "l5:electronic"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: NĐ 121/2025, Mục I Phụ lục III",
            "x": 2028,
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
          "say": "So what goes into the file for a practising certificate?",
          "sub": "Vậy hồ sơ xin chứng chỉ hành nghề gồm những gì?",
          "keys": [
            "gồm những gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not this: more paper, safer file.",
          "sub": "Không phải: càng nhiều giấy càng chắc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But this: one set, four parts. A request letter and a health certificate.",
          "sub": "Mà là: một bộ, bốn thành phần. Văn bản đề nghị, giấy chứng nhận sức khoẻ.",
          "keys": [
            "một bộ, bốn thành phần"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A copy of your law degree, bachelor or master, and a copy of the test certificate.",
          "sub": "Bản sao bằng cử nhân hoặc thạc sĩ luật, bản sao Giấy chứng nhận kiểm tra."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The health paper can be the original or electronic. The copies can be electronic copies.",
          "sub": "Giấy khám là bản chính hoặc bản điện tử. Các bản sao có thể là bản sao điện tử.",
          "keys": [
            "bản điện tử"
          ]
        }
      ],
      "ref": "p1"
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
            "id": "b-dept",
            "t": "text",
            "text": "Sở kiểm tra, xác minh khi cần",
            "x": 2028,
            "y": 610,
            "size": 44,
            "at": "l1:verifies",
            "hl": [
              {
                "text": "xác minh",
                "at": "l1:verifies"
              }
            ]
          },
          {
            "id": "b-up",
            "t": "text",
            "text": "→ trình Chủ tịch tỉnh",
            "x": 2868,
            "y": 610,
            "size": 44,
            "at": "l1:chair"
          },
          {
            "id": "b-10",
            "t": "text",
            "text": "Theo Thảo: mười ngày",
            "x": 2868,
            "y": 680,
            "size": 44,
            "at": "l2:ten",
            "color": "accent",
            "hl": [
              {
                "text": "mười ngày",
                "at": "l2:ten"
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
          "say": "The justice department checks it, verifies when needed, then sends it to the provincial chair.",
          "sub": "Sở Tư pháp kiểm tra, xác minh khi cần, rồi trình Chủ tịch Uỷ ban nhân dân cấp tỉnh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's ten days, paper by paper.",
          "sub": "Mình theo Thảo mười ngày, từng tờ một.",
          "keys": [
            "mười ngày"
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
              "c-old",
              "c-new"
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
            "id": "c-t",
            "t": "text",
            "text": "① Ngày 1 · Phiếu lý lịch?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:form"
          },
          {
            "id": "c-ic",
            "t": "illus",
            "name": "page-with-curl",
            "x": 5336,
            "y": 160,
            "size": 200,
            "at": "l1:form"
          },
          {
            "id": "c-old",
            "t": "text",
            "text": "Luật (khoản 1 Điều 17): có phiếu",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l2:law",
            "color": "muted"
          },
          {
            "id": "c-new",
            "t": "text",
            "text": "Thủ tục mới: không có",
            "x": 3996,
            "y": 260,
            "size": 54,
            "at": "l3:new",
            "color": "coral",
            "hl": [
              {
                "text": "không có",
                "at": "l3:not"
              }
            ]
          },
          {
            "id": "c-ag",
            "t": "text",
            "text": "Cơ quan lý lịch tư pháp → Sở",
            "x": 3996,
            "y": 360,
            "size": 46,
            "at": "l4:agency",
            "hl": [
              {
                "text": "→ Sở",
                "at": "l4:department"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "03 ngày làm việc, không tính",
            "x": 3996,
            "y": 440,
            "size": 46,
            "at": "l5:three",
            "color": "accent",
            "hl": [
              {
                "text": "không tính",
                "at": "l5:counted"
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
          "say": "Day one, that form. Did Thảo need it?",
          "sub": "Ngày một, tờ phiếu ấy. Thảo có cần nó không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The law's old list, in Article seventeen, did include a judicial record form.",
          "sub": "Danh mục cũ ở khoản 1 Điều 17 Luật Luật sư đúng là có phiếu lý lịch tư pháp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The new list does not.",
          "sub": "Danh mục theo thủ tục mới thì không có.",
          "keys": [
            "không có"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The agency managing the record database sends the information to the justice department itself.",
          "sub": "Cơ quan quản lý cơ sở dữ liệu lý lịch tư pháp tự cung cấp thông tin cho Sở Tư pháp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "In three working days, and those days are not counted in the deadline.",
          "sub": "Trong ba ngày làm việc, và thời gian này không tính vào thời hạn giải quyết.",
          "keys": [
            "không tính vào thời hạn"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s06",
      "module": "BRK-04",
      "data": {
        "title": "Phiếu lý lịch tư pháp",
        "labels": [
          "Tưởng",
          "Thật ra"
        ],
        "wrong": "Phải tự đi xin trước, như danh mục cũ",
        "right": "Nhà nước tự tra; phiếu chỉ quay lại khi vào Đoàn",
        "wrongIllus": "page-with-curl",
        "rightIllus": "magnifying-glass-tilted-left"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Many think: queue for it first, like the old list.",
          "sub": "Nhiều người tưởng: phải xếp hàng xin trước, như danh mục cũ.",
          "keys": [
            "xếp hàng xin trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Actually, the state looks it up for you.",
          "sub": "Thật ra, cơ quan nhà nước tự tra giúp bạn.",
          "keys": [
            "tự tra"
          ]
        }
      ],
      "ref": "p9"
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
            "id": "c-doan",
            "t": "text",
            "text": "Khi vào Đoàn (Điều 20):",
            "x": 3996,
            "y": 540,
            "size": 46,
            "at": "l1:join"
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "nộp quá 6 tháng → cần phiếu",
            "x": 3996,
            "y": 610,
            "size": 46,
            "at": "l1:six",
            "color": "coral",
            "hl": [
              {
                "text": "quá 6 tháng",
                "at": "l1:six months"
              }
            ]
          },
          {
            "id": "c-key",
            "t": "text",
            "text": "Nhà nước tra được → khỏi xin trước",
            "x": 3996,
            "y": 690,
            "size": 44,
            "at": "l2:state",
            "color": "accent",
            "hl": [
              {
                "text": "khỏi xin trước",
                "at": "l2:queue"
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
          "say": "The form only returns when you join a bar association more than six months after the certificate.",
          "sub": "Phiếu chỉ quay lại khi nộp hồ sơ gia nhập Đoàn quá sáu tháng kể từ ngày được cấp chứng chỉ.",
          "keys": [
            "quá sáu tháng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "If the state can look a paper up, don't queue for it first.",
          "sub": "Giấy Nhà nước tự tra được thì đừng xếp hàng xin trước.",
          "keys": [
            "đừng xếp hàng xin trước"
          ]
        }
      ],
      "ref": "p9,p10"
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
            "text": "② Ngày 2 · Đối chiếu danh mục",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:lunch"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "magnifying-glass-tilted-left"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:office",
            "caption": "Ngày 2 · giờ nghỉ trưa",
            "icon": "laptop"
          },
          {
            "id": "d-18",
            "t": "text",
            "text": "NĐ 18/2026 bãi bỏ một điểm",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l2:decree",
            "hl": [
              {
                "text": "bãi bỏ",
                "at": "l2:removed"
              }
            ]
          },
          {
            "id": "d-which",
            "t": "text",
            "text": "… nhưng điểm nào?",
            "x": 5964,
            "y": 250,
            "size": 54,
            "at": "l3:which",
            "color": "coral",
            "hl": [
              {
                "text": "điểm nào",
                "at": "l3:which"
              }
            ]
          },
          {
            "id": "d-do",
            "t": "text",
            "text": "→ xem trang thủ tục của Sở",
            "x": 5964,
            "y": 350,
            "size": 46,
            "at": "l4:page",
            "color": "accent",
            "hl": [
              {
                "text": "trang thủ tục",
                "at": "l4:page"
              }
            ]
          },
          {
            "id": "d-do2",
            "t": "text",
            "text": "→ hoặc hỏi bộ phận tiếp nhận",
            "x": 5964,
            "y": 425,
            "size": 46,
            "at": "l4:desk"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Thư viện Pháp luật, bài tháng 4/2026",
            "x": 5964,
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
          "say": "Day two, lunch break at the office. Thảo reads the list online.",
          "sub": "Ngày hai, giờ nghỉ trưa ở văn phòng. Thảo đọc danh mục trên mạng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An April twenty twenty-six article notes: Decree eighteen of twenty twenty-six removed one point of that procedure.",
          "sub": "Một bài tháng 4/2026 lưu ý: Nghị định 18/2026 đã bãi bỏ một điểm của thủ tục.",
          "keys": [
            "bãi bỏ một điểm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Which point, though? The article doesn't say!",
          "sub": "Mà điểm nào? Bài không nói!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So before submitting, compare with the justice department's procedure page, or ask the receiving desk.",
          "sub": "Vậy trước khi nộp, đối chiếu trang thủ tục của Sở Tư pháp, hoặc hỏi bộ phận tiếp nhận.",
          "keys": [
            "đối chiếu"
          ]
        }
      ],
      "ref": "p2"
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
            "text": "③ Ngày 3 · Văn bản đề nghị",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:request"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
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
            "at": "l2:Dũng",
            "caption": "Ngày 3 · tối, gọi video",
            "icon": "mobile-phone"
          },
          {
            "id": "e-law",
            "t": "text",
            "text": "Luật: mẫu của Bộ Tư pháp",
            "x": 7932,
            "y": 170,
            "size": 42,
            "at": "l4:template"
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "Hướng dẫn mới: không nêu số mẫu",
            "x": 7932,
            "y": 250,
            "size": 42,
            "at": "l4:number",
            "color": "muted",
            "hl": [
              {
                "text": "không nêu",
                "at": "l4:number"
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
          "say": "Day three, evening: the request letter.",
          "sub": "Ngày ba, buổi tối: văn bản đề nghị."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Enter Dũng, Thảo's classmate from probation. Fast as instant noodles.",
          "sub": "Đây là Dũng, bạn cùng khoá tập sự của Thảo. Nhanh như mì ăn liền.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Done already! I found a request form on some forum and filled it in.",
          "sub": "Em xong rồi! Tải được mẫu đơn trên một diễn đàn, điền luôn.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The law says a template from the ministry. New guides don't give the template number.",
          "sub": "Luật ghi mẫu do Bộ Tư pháp ban hành. Hướng dẫn mới không nêu số hiệu mẫu."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "online",
        "label": "Ngày 3 · mẫu trên mạng",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Mẫu đơn tải trên diễn đàn",
          "why": "Có thể là mẫu cũ; tên trên đơn lại lệch với căn cước.",
          "rule": "Mẫu lấy ở Sở, thông tin khớp giấy tờ"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Form from a forum, my nickname spelling, sent tomorrow. Easy!",
          "sub": "Mẫu trên diễn đàn, tên viết theo kiểu em quen, mai gửi. Dễ!",
          "pose": "thumb",
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
          "say": "Take the form the justice department uses now, from its portal or one-stop desk.",
          "sub": "Lấy đúng mẫu Sở Tư pháp đang dùng, trên cổng dịch vụ công hoặc ở bộ phận một cửa.",
          "keys": [
            "mẫu Sở Tư pháp đang dùng"
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
          "who": "dung",
          "say": "Okay. Official form, and my name exactly as on my ID card and degree.",
          "sub": "Rồi. Mẫu của Sở, tên đúng như căn cước và bằng luật.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. Official form, matching details.",
          "sub": "Đúng. Mẫu chính thức, thông tin khớp nhau.",
          "phase": "redo",
          "keys": [
            "thông tin khớp nhau"
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
            "id": "e-src",
            "t": "text",
            "text": "Mẫu: cổng dịch vụ công / một cửa",
            "x": 7932,
            "y": 350,
            "size": 42,
            "at": "l1",
            "color": "accent"
          },
          {
            "id": "e-match",
            "t": "text",
            "text": "Khớp: căn cước · bằng · Giấy CN",
            "x": 7932,
            "y": 440,
            "size": 42,
            "at": "l1:match"
          },
          {
            "id": "e-sup",
            "t": "text",
            "text": "Lệch → Sở hướng dẫn bổ sung",
            "x": 7932,
            "y": 530,
            "size": 44,
            "at": "l2:supplement",
            "color": "coral",
            "hl": [
              {
                "text": "bổ sung",
                "at": "l2:supplement"
              }
            ]
          },
          {
            "id": "e-lost",
            "t": "text",
            "text": "chờ bổ sung = thời gian tự mất",
            "x": 7932,
            "y": 610,
            "size": 44,
            "at": "l3:lose",
            "hl": [
              {
                "text": "tự mất",
                "at": "l3:lose"
              }
            ]
          },
          {
            "id": "e-s",
            "t": "text",
            "text": "Nguồn: Tạp chí Luật sư Việt Nam, 8/2025",
            "x": 8772,
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
          "say": "Details should match your ID card, your law degree and your test certificate.",
          "sub": "Thông tin nên khớp với căn cước, bằng luật và Giấy chứng nhận kiểm tra.",
          "keys": [
            "khớp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A missing paper or a mismatch, and the department asks you to supplement.",
          "sub": "Thiếu giấy hay thông tin chưa thống nhất, Sở hướng dẫn bổ sung.",
          "keys": [
            "bổ sung"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And every day waiting to supplement is a day you lose yourself.",
          "sub": "Mà thời gian chờ bổ sung là thời gian anh chị tự đánh mất.",
          "keys": [
            "tự đánh mất"
          ]
        }
      ],
      "ref": "p4"
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
            "text": "④ Ngày 4 · Giấy khám sức khoẻ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Four"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "telephone-receiver",
                "stethoscope"
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
            "at": "l1:health",
            "caption": "Ngày 4 · sáng sớm",
            "icon": "stethoscope"
          },
          {
            "id": "f-10",
            "t": "text",
            "text": "Điều 10: đủ sức khoẻ hành nghề",
            "x": 60,
            "y": 1260,
            "size": 40,
            "at": "l2:Article"
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "Nguồn không nêu: tiêu chí, thời hạn",
            "x": 60,
            "y": 1340,
            "size": 40,
            "at": "l3:criteria",
            "color": "coral",
            "hl": [
              {
                "text": "không nêu",
                "at": "l3:criteria"
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
          "say": "Day four: the health certificate.",
          "sub": "Ngày bốn: giấy chứng nhận sức khoẻ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article ten asks for health fit to practise. The procedure takes the original or an electronic version.",
          "sub": "Điều 10 đòi sức khoẻ bảo đảm hành nghề. Thủ tục nhận bản chính hoặc bản điện tử."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But the sources don't list medical criteria, or how long the paper stays valid.",
          "sub": "Nhưng các nguồn không nêu tiêu chí y khoa, cũng không nêu thời hạn của giấy khám.",
          "keys": [
            "không nêu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Write it down first! So, do I book the clinic now, or call first?",
          "sub": "Ghi lại đã! Vậy đặt lịch khám luôn, hay gọi hỏi trước?",
          "face": "thinking"
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Hai cách của Thảo",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrong": "Khám ngay chỗ quen, rồi mới hỏi loại giấy",
        "right": "Gọi hỏi loại giấy, thời hạn, rồi mới khám",
        "wrongIllus": "hospital",
        "rightIllus": "telephone-receiver"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Option A: clinic first. Wrong paper? Go again.",
          "sub": "Cách A: khám trước. Sai loại giấy? Khám lại.",
          "keys": [
            "Cách A"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Option B: ask first, then book.",
          "sub": "Cách B: hỏi trước, rồi mới hẹn khám.",
          "keys": [
            "Cách B"
          ]
        }
      ],
      "ref": "p6"
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
            "at": "l1",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-q",
            "t": "text",
            "text": "Hỏi: loại giấy nào? thời hạn?",
            "x": 60,
            "y": 1450,
            "size": 44,
            "at": "l1:accept",
            "hl": [
              {
                "text": "loại giấy nào",
                "at": "l1:accept"
              }
            ]
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "Cách B: khám một lần, nộp ngay",
            "x": 60,
            "y": 1540,
            "size": 44,
            "at": "l2:once",
            "color": "accent",
            "hl": [
              {
                "text": "một lần",
                "at": "l2:once"
              }
            ]
          },
          {
            "id": "f-key",
            "t": "text",
            "text": "Hỏi trước một cuộc gọi",
            "x": 60,
            "y": 1650,
            "size": 52,
            "at": "l3:call",
            "color": "accent",
            "hl": [
              {
                "text": "một cuộc gọi",
                "at": "l3:call"
              }
            ]
          },
          {
            "id": "f-key2",
            "t": "text",
            "text": "khỏi khám lại một buổi",
            "x": 60,
            "y": 1730,
            "size": 52,
            "at": "l3:morning",
            "hl": [
              {
                "text": "khám lại",
                "at": "l3:clinic"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Option B. I'll ask which health certificate they accept, and how recent it must be.",
          "sub": "Cách B. Em hỏi Sở nhận loại giấy khám nào, khám cách bao lâu thì được.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One check-up, booked close to the day she submits, once the other papers are ready.",
          "sub": "Khám một lần, hẹn sát ngày nộp, khi các giấy khác đã đủ.",
          "keys": [
            "Khám một lần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One phone call first saves a whole morning back at the clinic.",
          "sub": "Hỏi trước một cuộc gọi, khỏi khám lại một buổi.",
          "keys": [
            "Hỏi trước một cuộc gọi"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "text": "⑤ Ngày 6 · Bản sao",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:copies"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "printer",
                "graduation-cap"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
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
            "at": "l1:copies",
            "caption": "Ngày 6 · tối, ở nhà",
            "icon": "printer"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Nộp giấy, bưu chính → bản sao giấy",
            "x": 2028,
            "y": 1260,
            "size": 40,
            "at": "l2:post"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Nộp trực tuyến → bản sao điện tử",
            "x": 2028,
            "y": 1335,
            "size": 40,
            "at": "l3:online",
            "hl": [
              {
                "text": "bản sao điện tử",
                "at": "l3:electronic"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Bằng cử nhân hoặc thạc sĩ luật",
            "x": 2028,
            "y": 1410,
            "size": 40,
            "at": "l1:bachelor",
            "color": "muted"
          },
          {
            "id": "g-orig",
            "t": "text",
            "text": "Bản gốc Giấy CN: cất kỹ!",
            "x": 2028,
            "y": 1510,
            "size": 54,
            "at": "l4:original",
            "color": "coral",
            "hl": [
              {
                "text": "cất kỹ",
                "at": "l4:safe"
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
          "say": "Day six: copies. Of a bachelor or master of law degree, and of the test certificate.",
          "sub": "Ngày sáu: bản sao. Bằng cử nhân hoặc thạc sĩ luật, và Giấy chứng nhận kiểm tra."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Submitting in person or by post? Paper copies.",
          "sub": "Nộp trực tiếp hay qua bưu chính? Chuẩn bị bản sao giấy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Online on the national portal? Electronic copies, following the portal's guide.",
          "sub": "Nộp trực tuyến trên Cổng dịch vụ công quốc gia? Bản sao điện tử theo hướng dẫn của cổng.",
          "keys": [
            "bản sao điện tử"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And the original certificate goes in a safe place. Not in the file!",
          "sub": "Còn bản gốc giấy chứng nhận thì cất chỗ an toàn. Không bỏ vào hồ sơ!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Wise. The sources don't describe any way to reissue it if lost.",
          "sub": "Khôn đấy. Các nguồn đã đọc không nêu thủ tục cấp lại giấy này khi bị mất.",
          "keys": [
            "không nêu thủ tục cấp lại"
          ]
        }
      ],
      "ref": "p11,p12"
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
            "id": "g-hab",
            "t": "text",
            "text": "Nhận giấy: chụp · lưu · ghi ngày cấp",
            "x": 2028,
            "y": 1630,
            "size": 42,
            "at": "l1:photo",
            "color": "accent",
            "hl": [
              {
                "text": "ghi ngày cấp",
                "at": "l1:issue"
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
          "say": "A tidy habit: the day you receive it, take a photo, keep an electronic copy, note the issue date.",
          "sub": "Một thói quen gọn: ngày nhận giấy, chụp lại, lưu bản điện tử, ghi ngày cấp.",
          "keys": [
            "ghi ngày cấp"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s17",
      "module": "BRK-07",
      "data": {
        "question": "Cùng văn phòng, gửi chung một bộ được không?",
        "illus": "busts-in-silhouette"
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
          "say": "Two people, one office. Why not one shared file?",
          "sub": "Hai người, một văn phòng. Sao không gửi chung một bộ?",
          "keys": [
            "gửi chung một bộ"
          ]
        }
      ],
      "ref": "p14"
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
            "at": "l3",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Ngày 7 · Gửi chung?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Seven"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "cross"
                }
              ],
              "props": [
                "file-folder",
                "graduation-cap"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:office",
            "caption": "Ngày 7 · văn phòng của Dũng",
            "icon": "file-folder"
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "Gửi chung một bộ",
            "x": 3996,
            "y": 1260,
            "size": 54,
            "at": "l3:together",
            "color": "muted"
          },
          {
            "id": "h-nox",
            "t": "strike",
            "over": "h-no",
            "at": "l5:No"
          },
          {
            "id": "h-own",
            "t": "text",
            "text": "Mỗi người một bộ riêng",
            "x": 3996,
            "y": 1350,
            "size": 54,
            "at": "l5:own",
            "color": "accent",
            "hl": [
              {
                "text": "bộ riêng",
                "at": "l5:own"
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
          "say": "Day seven, at Dũng's office.",
          "sub": "Ngày bảy, ở văn phòng của Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Cô Hoa, a doctor of law who works with Dũng. She is exempt from probation.",
          "sub": "Đây là cô Hoa, tiến sĩ luật, làm cùng văn phòng với Dũng. Cô thuộc diện miễn tập sự.",
          "keys": [
            "miễn tập sự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Cô Hoa, let's send our papers together in one envelope. Saves postage!",
          "sub": "Cô Hoa ơi, mình gửi chung một bộ cho tiện. Đỡ tiền tem!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Together? Let's read the rules first, then decide.",
          "sub": "Gửi chung á? Đọc quy định trước đã, rồi tính.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "No. Each person makes their own set, and the doors may differ.",
          "sub": "Không được. Mỗi người lập một bộ riêng, mà cửa nộp cũng có thể khác.",
          "keys": [
            "một bộ riêng"
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
            "at": "l1",
            "fit": [
              "h-d",
              "h-h"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "H",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "h-d",
            "t": "text",
            "text": "Dũng: Sở nơi tập sự",
            "x": 3996,
            "y": 1450,
            "size": 48,
            "at": "l1:trained"
          },
          {
            "id": "h-h",
            "t": "text",
            "text": "Cô Hoa: Sở nơi thường trú",
            "x": 3996,
            "y": 1530,
            "size": 48,
            "at": "l2:permanently",
            "color": "coral",
            "hl": [
              {
                "text": "nơi thường trú",
                "at": "l2:permanently"
              }
            ]
          },
          {
            "id": "h-x1",
            "t": "text",
            "text": "+ giấy chứng minh diện miễn",
            "x": 3996,
            "y": 1610,
            "size": 42,
            "at": "l2:proving"
          },
          {
            "id": "h-x2",
            "t": "text",
            "text": "GS, PGS, TS: khỏi bản sao",
            "x": 3996,
            "y": 1685,
            "size": 38,
            "at": "l3:professors",
            "hl": [
              {
                "text": "khỏi bản sao",
                "at": "l3:copy"
              }
            ]
          },
          {
            "id": "h-key",
            "t": "text",
            "text": "Cùng văn phòng ≠ cùng cửa nộp",
            "x": 3996,
            "y": 1770,
            "size": 46,
            "at": "l4:door",
            "color": "accent",
            "hl": [
              {
                "text": "cùng cửa nộp",
                "at": "l4:door"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: khoản 1 Điều 16 Luật Luật sư; NĐ 121/2025",
            "x": 4836,
            "y": 1825,
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
          "say": "Dũng passed the test, so he submits where he trained.",
          "sub": "Dũng đạt kiểm tra, nên nộp ở Sở Tư pháp nơi tập sự."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cô Hoa submits where she permanently lives, adding copies of papers proving her exemption, but no test certificate.",
          "sub": "Cô Hoa nộp ở Sở nơi thường trú, kèm bản sao giấy tờ chứng minh diện miễn, không nộp Giấy chứng nhận kiểm tra.",
          "keys": [
            "nơi thường trú"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And law professors, associate professors and doctors of law skip the degree copy.",
          "sub": "Giáo sư, phó giáo sư luật và tiến sĩ luật khỏi nộp bản sao bằng cử nhân hoặc thạc sĩ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Same office doesn't mean same file, let alone the same door.",
          "sub": "Cùng văn phòng chưa chắc cùng hồ sơ, càng chưa chắc cùng cửa nộp.",
          "keys": [
            "cùng cửa nộp"
          ]
        }
      ],
      "ref": "p13,p14,p15"
    },
    {
      "id": "s20",
      "module": "BRK-03",
      "data": {
        "value": 900000,
        "suffix": " đ",
        "label": "phí thẩm định theo bài 8/2025 — kiểm mức hiện hành",
        "illus": "money-bag"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And one more number before you submit.",
          "sub": "Và một con số trước khi nộp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Nine hundred thousand dong, an appraisal fee.",
          "sub": "Chín trăm nghìn đồng, phí thẩm định.",
          "keys": [
            "Chín trăm nghìn đồng"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s21",
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
            "at": "l3",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Ngày 9 · Nộp hồ sơ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:submits"
          },
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
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "classical-building",
                "receipt"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:submits",
            "caption": "Ngày 9 · trước cửa Sở",
            "icon": "classical-building"
          },
          {
            "id": "i-fee",
            "t": "text",
            "text": "Phí: 900.000 đ (TT 220/2016)",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l2:fee",
            "hl": [
              {
                "text": "900.000 đ",
                "at": "l2:fee"
              }
            ]
          },
          {
            "id": "i-64",
            "t": "text",
            "text": "còn dẫn TT 64/2025 → hỏi mức",
            "x": 5964,
            "y": 1335,
            "size": 40,
            "at": "l2:check",
            "color": "coral"
          },
          {
            "id": "i-b0",
            "t": "badge",
            "n": 1,
            "x": 5994,
            "y": 1470,
            "at": "l3:Download"
          },
          {
            "id": "i-s0",
            "t": "text",
            "text": "Tải mẫu của Sở, điền khớp",
            "x": 6044,
            "y": 1447,
            "size": 38,
            "at": "l3:Download+200"
          },
          {
            "id": "i-b1",
            "t": "badge",
            "n": 2,
            "x": 5994,
            "y": 1555,
            "at": "l3:ask"
          },
          {
            "id": "i-s1",
            "t": "text",
            "text": "Hỏi loại giấy, rồi khám",
            "x": 6044,
            "y": 1532,
            "size": 38,
            "at": "l3:ask+200"
          },
          {
            "id": "i-b2",
            "t": "badge",
            "n": 3,
            "x": 5994,
            "y": 1640,
            "at": "l4:copies"
          },
          {
            "id": "i-s2",
            "t": "text",
            "text": "Bản sao bằng, Giấy CN",
            "x": 6044,
            "y": 1617,
            "size": 38,
            "at": "l4:copies+200"
          },
          {
            "id": "i-b3",
            "t": "badge",
            "n": 4,
            "x": 5994,
            "y": 1725,
            "at": "l4:compare"
          },
          {
            "id": "i-s3",
            "t": "text",
            "text": "Đối chiếu, hỏi phí, nộp",
            "x": 6044,
            "y": 1702,
            "size": 38,
            "at": "l4:compare+200"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: Tạp chí Luật sư Việt Nam, 8/2025",
            "x": 6804,
            "y": 1825,
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
          "say": "Day nine: Thảo submits. In person, by post or online, all accepted.",
          "sub": "Ngày chín: Thảo đi nộp. Trực tiếp, bưu chính hay trực tuyến đều được."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "An August twenty twenty-five guide cites the fee under Circular two twenty of twenty sixteen. Another circular now applies too, so check the current rate.",
          "sub": "Bài hướng dẫn tháng 8/2025 dẫn mức phí theo Thông tư 220/2016; việc thu phí còn dẫn Thông tư 64/2025, nên kiểm mức đang áp dụng.",
          "keys": [
            "kiểm mức đang áp dụng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "My four steps: Download the department's form and match my ID. Ask about the health paper, then the check-up.",
          "sub": "Bốn bước của em: tải mẫu của Sở, điền khớp căn cước. Hỏi loại giấy khám rồi mới khám.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Copies of my degree and certificate, original at home. Then compare the list, ask the fee, and hand it in.",
          "sub": "Bản sao bằng và giấy chứng nhận, bản gốc cất nhà. Rồi đối chiếu danh mục, hỏi phí, nộp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And keep the receipt. A last check costs less than a supplement later.",
          "sub": "Và giữ giấy biên nhận. Đối chiếu lần cuối rẻ hơn một lần bổ sung.",
          "keys": [
            "rẻ hơn một lần bổ sung"
          ]
        }
      ],
      "ref": "p16,p17,p18"
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
            "text": "Ngày 10 · Tờ phiếu ấy",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Evening"
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
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "page-with-curl",
                "receipt"
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
            "at": "l1:Ten",
            "caption": "Ngày 10 · tối, ở nhà",
            "icon": "page-with-curl"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1265,
            "w": 46,
            "h": 46,
            "at": "l3:form",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1247,
            "size": 58,
            "at": "l3:form+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Đơn đúng mẫu Sở",
            "x": 8000,
            "y": 1255,
            "size": 38,
            "at": "l3:form+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1345,
            "w": 46,
            "h": 46,
            "at": "l3:health",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1327,
            "size": 58,
            "at": "l3:health+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Giấy khám đúng loại",
            "x": 8000,
            "y": 1335,
            "size": 38,
            "at": "l3:health+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1425,
            "w": 46,
            "h": 46,
            "at": "l3:degree",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1407,
            "size": 58,
            "at": "l3:degree+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Bản sao bằng luật",
            "x": 8000,
            "y": 1415,
            "size": 38,
            "at": "l3:degree+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1505,
            "w": 46,
            "h": 46,
            "at": "l3:original",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1487,
            "size": 58,
            "at": "l3:original+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Bản sao Giấy CN, gốc cất riêng",
            "x": 8000,
            "y": 1495,
            "size": 38,
            "at": "l3:original+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1585,
            "w": 46,
            "h": 46,
            "at": "l3:receipt",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1567,
            "size": 58,
            "at": "l3:receipt+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Hỏi phí, giữ biên nhận",
            "x": 8000,
            "y": 1575,
            "size": 38,
            "at": "l3:receipt+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Cẩn tắc… đúng chỗ",
            "x": 7932,
            "y": 1700,
            "size": 58,
            "at": "l4:right place",
            "color": "accent",
            "hl": [
              {
                "text": "đúng chỗ",
                "at": "l4:right place"
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
          "say": "Day ten. Evening. That judicial record form is back on the table.",
          "sub": "Ngày mười. Buổi tối. Tờ phiếu lý lịch tư pháp lại nằm trên bàn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "My morning in the queue. Into the drawer, as a souvenir.",
          "sub": "Buổi sáng xếp hàng của em. Cất ngăn kéo, làm kỷ niệm.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Her checklist: official form, right health paper, degree copy, certificate copy with the original at home, fee asked, receipt kept.",
          "sub": "Danh sách của cô: đơn đúng mẫu, giấy khám đúng loại, bản sao bằng, bản sao giấy chứng nhận, gốc cất riêng, đã hỏi phí, giữ biên nhận."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Better safe than sorry, yes. But careful in the right place.",
          "sub": "Cẩn tắc vô áy náy, đúng. Nhưng cẩn tắc cho đúng chỗ.",
          "keys": [
            "đúng chỗ"
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
      "ref": "p19"
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
            "at": "l1:four",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:form",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:exempt",
            "fit": "H",
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
            "x": 3668,
            "y": 300,
            "at": "l1:four"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8652,
            "y": 360,
            "at": "l2:form"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4716,
            "y": 1350,
            "at": "l3:exempt"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề, không phải tư vấn vụ việc cụ thể; nhân vật là minh hoạ. Luật Luật sư đang sửa đổi.",
            "x": 7932,
            "y": 1825,
            "size": 26,
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
          "say": "So: one set, four papers. No judicial record form to chase.",
          "sub": "Tóm lại: một bộ, bốn giấy. Không phải đi xin phiếu lý lịch tư pháp.",
          "keys": [
            "một bộ, bốn giấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Take the department's form, ask about the health paper first, keep the original safe.",
          "sub": "Lấy mẫu của Sở, hỏi loại giấy khám trước, cất kỹ bản gốc.",
          "keys": [
            "hỏi loại giấy khám trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Exempt colleague? Own file, own door. And the law is being amended, so recheck.",
          "sub": "Đồng nghiệp diện miễn? Hồ sơ riêng, cửa riêng. Luật đang sửa đổi, nhớ kiểm lại.",
          "keys": [
            "Hồ sơ riêng, cửa riêng"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s24",
      "module": "QUIZ-01",
      "data": {
        "q": "What do many applicants wrongly believe about the judicial record form?",
        "options": [
          "That it must be translated into English before being submitted",
          "That they must obtain it first, as the old list in the law required",
          "That it is needed only by foreign lawyers working in the country"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "page-with-curl",
        "why": "Theo thủ tục mới, cơ quan nhà nước tự lấy thông tin lý lịch tư pháp; phiếu chỉ cần khi gia nhập Đoàn quá sáu tháng."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What do many applicants wrongly believe about the judicial record form?",
          "sub": "Nhiều người hiểu lầm điều gì về phiếu lý lịch tư pháp?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "That they must get it first, as the old list required. The state now looks it up.",
          "sub": "Tưởng phải tự xin trước như danh mục cũ. Nay Nhà nước tự tra."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Don't queue for what the state can look up.",
          "sub": "Giấy Nhà nước tự tra được, đừng xếp hàng xin trước."
        }
      ],
      "ref": "questions[16]"
    },
    {
      "id": "s25",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi mở trang thủ tục của Sở, đối chiếu danh mục"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, open your justice department's procedure page and compare the list.",
          "sub": "Hôm nay, mở trang thủ tục của Sở Tư pháp nơi tập sự, đối chiếu danh mục."
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
  "notes": "#145 bài MỚI theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): tờ phiếu lý lịch tư pháp Thảo xếp hàng xin → hoá ra thủ tục mới không cần → ngày 10 cất ngăn kéo. Bảng 10 ô theo MƯỜI NGÀY làm hồ sơ của Thảo: ngày 1 phiếu LLTP → ngày 2 đối chiếu danh mục (NĐ 18/2026) → ngày 3 văn bản đề nghị (Dũng, “Khoan đã!” mẫu trên diễn đàn) → ngày 4 giấy khám (BRK-04 Cách A/B) → ngày 6 bản sao → ngày 7 Dũng + cô Hoa (diện miễn) → ngày 9 nộp, phí → ngày 10 khép vòng. Nhân vật theo w145/_series/bar-practising-certificate.md: Thảo (p6, p17), Dũng (p14), cô Hoa (người miễn tập sự p14). Số/điều chỉ từ bài: Điều 10, 16, 17, 20 Luật Luật sư; 01 bộ, 4 thành phần; 03 ngày làm việc; 6 tháng; NĐ 18/2026; 900.000 đ (TT 220/2016, TT 64/2025). BRK: s06 BRK-04 (Tưởng/Thật ra), s13 BRK-04 (Cách A/B), s17 BRK-07, s20 BRK-03. Câu đố questions[16]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
