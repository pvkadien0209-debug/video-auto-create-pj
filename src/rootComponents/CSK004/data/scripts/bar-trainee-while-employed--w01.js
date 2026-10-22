// bar-trainee-while-employed--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-trainee-while-employed--w01",
  "hook": "HOOK-20",
  "unit": {
    "audience": "bar-inhouse-to-lawyer",
    "slug": "bar-trainee-while-employed",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Tập sự 20 giờ mỗi tuần khi vẫn làm toàn thời gian: có làm được không?",
    "series": "Vừa làm pháp chế vừa lấy thẻ luật sư — lộ trình cho người đang đi làm"
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
            "id": "a-yes",
            "t": "text",
            "text": "Làm được.",
            "x": 60,
            "y": 50,
            "size": 140,
            "at": "l1:yes",
            "color": "accent",
            "hl": [
              {
                "text": "Làm được.",
                "at": "l1:yes"
              }
            ]
          },
          {
            "id": "a-20",
            "t": "text",
            "text": "20 giờ/tuần × 12 tháng",
            "x": 60,
            "y": 230,
            "size": 60,
            "at": "l2:twenty",
            "hl": [
              {
                "text": "20 giờ/tuần",
                "at": "l2:twenty"
              }
            ]
          },
          {
            "id": "a-ft",
            "t": "text",
            "text": "+ một việc toàn thời gian",
            "x": 60,
            "y": 310,
            "size": 52,
            "at": "l2:full-time",
            "color": "muted"
          },
          {
            "id": "a-if",
            "t": "text",
            "text": "nếu:",
            "x": 60,
            "y": 400,
            "size": 52,
            "at": "l3:if",
            "color": "coral"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "① cộng giờ trên giấy trước",
            "x": 160,
            "y": 400,
            "size": 44,
            "at": "l3:paper",
            "hl": [
              {
                "text": "trên giấy",
                "at": "l3:paper"
              }
            ]
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "② công ty cùng biết",
            "x": 160,
            "y": 460,
            "size": 44,
            "at": "l3:company"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "③ nhật ký ghi đúng việc",
            "x": 160,
            "y": 520,
            "size": 44,
            "at": "l3:logbook"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Theo Thông tư 10/2021/TT-BTP · Luật Luật sư",
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
          "say": "Can you do a lawyer traineeship while working full time? Yes.",
          "sub": "Vừa làm toàn thời gian vừa tập sự luật sư, có làm được không? Được.",
          "keys": [
            "Được"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twenty hours a week, for twelve months, next to a full-time job.",
          "sub": "Hai mươi giờ mỗi tuần, suốt 12 tháng, bên cạnh một việc toàn thời gian.",
          "keys": [
            "Hai mươi giờ mỗi tuần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "If you count hours on paper first, the company knows, and the logbook records real work.",
          "sub": "Nếu cộng giờ trên giấy trước, công ty cùng biết, và nhật ký ghi đúng việc.",
          "keys": [
            "cộng giờ trên giấy trước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sounds simple. Three spots trip people up.",
          "sub": "Nghe đơn giản. Nhưng có ba chỗ hay vấp."
        }
      ],
      "ref": "intro,outro"
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
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "notebook",
                "balance-scale"
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
                  "on": "binh",
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
            "caption": "Tối đầu tiên · văn phòng luật",
            "icon": "balance-scale"
          },
          {
            "id": "a-cm",
            "t": "text",
            "text": "Chậm mà chắc",
            "x": 60,
            "y": 610,
            "size": 54,
            "at": "l5:slow",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo. Four years in a company legal team, now holding her training certificate.",
          "sub": "Đây là Thảo. Pháp chế bốn năm, giờ đã có giấy chứng nhận tốt nghiệp đào tạo nghề."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Uncle Bình, her uncle, a veteran lawyer, now her supervising lawyer.",
          "sub": "Còn đây là Bác Bình, bác của Thảo, luật sư lâu năm, giờ là luật sư hướng dẫn của chị."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Uncle, twenty hours a week, plus my job. Am I crazy?",
          "sub": "Bác ơi, 20 giờ một tuần, cộng việc công ty. Cháu liều quá không?",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Easy now. Let's look at the rules first.",
          "sub": "Từ từ, mình xem lại luật đã.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Slow but sure. Twelve months start tonight.",
          "sub": "Chậm mà chắc. Mười hai tháng bắt đầu từ tối nay."
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
            "text": "Thông tư đòi tối thiểu gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:minimum",
            "hl": [
              {
                "text": "tối thiểu",
                "at": "l1:minimum"
              }
            ]
          },
          {
            "id": "b-20",
            "t": "text",
            "text": "“tối thiểu 20 giờ trong 01 tuần”",
            "x": 2028,
            "y": 150,
            "size": 56,
            "at": "l2:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "20 giờ",
                "at": "l2:twenty"
              }
            ]
          },
          {
            "id": "b-20s",
            "t": "text",
            "text": "Thông tư 10/2021/TT-BTP, điểm đ khoản 2 Điều 12",
            "x": 2058,
            "y": 225,
            "size": 26,
            "at": "l2",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "b-12",
            "t": "text",
            "text": "12 tháng, từ ngày Đoàn đăng ký",
            "x": 2028,
            "y": 290,
            "size": 46,
            "at": "l3:twelve"
          },
          {
            "id": "b-16",
            "t": "text",
            "text": "Giảm theo Điều 16 Luật: pháp chế thường không",
            "x": 2028,
            "y": 360,
            "size": 28,
            "at": "l4:shorter",
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
          "say": "So what does Circular ten really demand, at minimum?",
          "sub": "Vậy Thông tư 10/2021/TT-BTP đòi tối thiểu những gì?",
          "keys": [
            "tối thiểu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article twelve, in its own words: at least twenty hours in one week.",
          "sub": "Điểm đ khoản 2 Điều 12, nguyên văn: “đảm bảo thời gian tập sự tối thiểu là 20 giờ trong 01 tuần”.",
          "keys": [
            "20 giờ trong 01 tuần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article ten: twelve months, from the day the Bar Association registers you.",
          "sub": "Điều 10: 12 tháng, tính từ ngày Ban chủ nhiệm Đoàn luật sư đăng ký tập sự."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Some people get a shorter period. In-house lawyers usually don't.",
          "sub": "Người được giảm theo Điều 16 Luật Luật sư thì ngắn hơn, nhưng pháp chế doanh nghiệp thường không thuộc diện này."
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
          },
          {
            "at": 150,
            "fit": [
              "b-end",
              "b-ok"
            ],
            "zoom": 1.05,
            "ms": 800
          },
          {
            "at": "l3",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-end",
            "t": "text",
            "text": "Chấm dứt tập sự (Điều 11):",
            "x": 2028,
            "y": 450,
            "size": 44,
            "at": "l1:ends"
          },
          {
            "id": "b-cs",
            "t": "text",
            "text": "công chức, viên chức, sĩ quan…",
            "x": 2058,
            "y": 510,
            "size": 40,
            "at": "l1:civil servant",
            "color": "muted"
          },
          {
            "id": "b-dn",
            "t": "text",
            "text": "làm cho doanh nghiệp: không có",
            "x": 2058,
            "y": 570,
            "size": 44,
            "at": "l2:company",
            "color": "accent",
            "hl": [
              {
                "text": "không có",
                "at": "l2:not"
              }
            ]
          },
          {
            "id": "b-ok",
            "t": "text",
            "text": "Không cấm: đủ giờ, đủ việc",
            "x": 2028,
            "y": 650,
            "size": 56,
            "at": "l3:enough hours",
            "color": "accent",
            "hl": [
              {
                "text": "đủ giờ, đủ việc",
                "at": "l3:enough work"
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
          "say": "What ends a traineeship? Becoming a civil servant, public employee, officer, and a few others.",
          "sub": "Điều gì chấm dứt tập sự? Được tuyển làm cán bộ, công chức, viên chức, sĩ quan, quân nhân chuyên nghiệp, và vài trường hợp khác."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Working for a company is not on that list.",
          "sub": "Đi làm cho doanh nghiệp không có trong danh sách đó.",
          "keys": [
            "không có trong danh sách"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No ban on in-house lawyers. Just enough hours, and enough work.",
          "sub": "Thông tư không cấm pháp chế tập sự. Chỉ đòi đủ giờ và đủ việc.",
          "keys": [
            "đủ giờ và đủ việc"
          ]
        }
      ],
      "ref": "p3"
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
            "text": "① Trước ngày đầu · Đăng ký",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:stop one"
          },
          {
            "id": "c-where",
            "t": "text",
            "text": "Nơi tập sự: tổ chức hành nghề",
            "x": 3996,
            "y": 150,
            "size": 50,
            "at": "l1:law practice",
            "hl": [
              {
                "text": "tổ chức hành nghề",
                "at": "l1:practice"
              }
            ]
          },
          {
            "id": "c-where2",
            "t": "text",
            "text": "văn phòng, công ty luật, chi nhánh, tổ chức nước ngoài tại Việt Nam · khoản 3 Điều 4",
            "x": 4026,
            "y": 215,
            "size": 26,
            "at": "l2:branches",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "c-reg",
            "t": "text",
            "text": "Đăng ký: Đoàn nơi đặt trụ sở",
            "x": 3996,
            "y": 280,
            "size": 46,
            "at": "l3:register"
          },
          {
            "id": "c-file",
            "t": "text",
            "text": "đề nghị · xác nhận nhận tập sự · bản sao bằng luật · giấy tờ liên quan",
            "x": 4026,
            "y": 345,
            "size": 28,
            "at": "l4:request",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "05 ngày làm việc → giấy chứng nhận",
            "x": 3996,
            "y": 420,
            "size": 50,
            "at": "l5:five",
            "color": "accent",
            "hl": [
              {
                "text": "05 ngày làm việc",
                "at": "l5:five working days"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Thông tư 10/2021/TT-BTP, khoản 1 Điều 4, khoản 1 Điều 5",
            "x": 3996,
            "y": 490,
            "size": 26,
            "at": "l3",
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
          "say": "Stop one: before day one. Thảo picks a law practice herself, and agrees with it.",
          "sub": "Chặng một: trước ngày đầu. Thảo tự chọn và thoả thuận với một tổ chức hành nghề luật sư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A law office, a law company, their branches, or a foreign law firm in Vietnam.",
          "sub": "Văn phòng luật sư, công ty luật, chi nhánh của chúng, hoặc tổ chức hành nghề luật sư nước ngoài tại Việt Nam."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "She must register at the Bar Association where that practice is based.",
          "sub": "Chị đăng ký tại Đoàn luật sư nơi tổ chức nhận tập sự đặt trụ sở."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The file: a request, the firm's hosting confirmation, a copy of her law degree, and related papers.",
          "sub": "Hồ sơ gồm giấy đề nghị, giấy xác nhận nhận tập sự, bản sao bằng luật và giấy tờ liên quan."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Within five working days of a complete file, the Bar issues a certificate.",
          "sub": "Trong 05 ngày làm việc kể từ khi nhận đủ hồ sơ hợp lệ, Ban chủ nhiệm Đoàn cấp giấy chứng nhận.",
          "keys": [
            "05 ngày làm việc"
          ]
        }
      ],
      "ref": "p2,p4"
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
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
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
                  "id": "binh",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "phone"
                }
              ],
              "props": [
                "hot-beverage",
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
                  "shot": "E-SHOT-10",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Trước ngày đầu · quán cà phê",
            "icon": "spiral-calendar"
          },
          {
            "id": "c-3y",
            "t": "text",
            "text": "LS hướng dẫn: ≥ 3 năm, ≤ 3 người",
            "x": 3996,
            "y": 580,
            "size": 44,
            "at": "l1:three years",
            "hl": [
              {
                "text": "≤ 3 người",
                "at": "l1:three trainees"
              }
            ]
          },
          {
            "id": "c-hd",
            "t": "text",
            "text": "HĐLĐ với nơi tập sự: quyền, không phải nghĩa vụ",
            "x": 3996,
            "y": 700,
            "size": 28,
            "at": "l4:right",
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
          "say": "Supervisors need three years of practice, a good name, and at most three trainees at once.",
          "sub": "Luật sư hướng dẫn: ít nhất 03 năm hành nghề, có uy tín, cùng lúc không quá 03 người tập sự.",
          "keys": [
            "không quá 03 người tập sự"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Uncle, do you still have a spot? And do you work evenings and Saturdays?",
          "sub": "Bác còn “chỗ” không ạ? Bác có làm buổi tối và thứ Bảy không?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "One spot left. Evenings, yes. Saturdays, all day.",
          "sub": "Còn một chỗ. Buổi tối có. Thứ Bảy, cả ngày.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A job contract with the firm is your right, not a duty. Thảo keeps her company job.",
          "sub": "Ký hợp đồng lao động với nơi tập sự là quyền, không phải nghĩa vụ. Thảo giữ việc ở công ty.",
          "keys": [
            "quyền, không phải nghĩa vụ"
          ]
        }
      ],
      "ref": "p5,p6"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tuần 1 · Cộng giờ trên giấy",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two",
            "hl": [
              {
                "text": "trên giấy",
                "at": "l6:paper"
              }
            ]
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "Thông tư: tối thiểu theo tuần, không ấn định giờ trong ngày",
            "x": 5964,
            "y": 140,
            "size": 28,
            "at": "l1:hours",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "d-c",
            "t": "text",
            "text": "Nội dung Điều 6: hồ sơ, tố tụng, tư vấn…",
            "x": 5964,
            "y": 180,
            "size": 28,
            "at": "l2:content",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "d-b0",
            "t": "box",
            "x": 5964,
            "y": 260,
            "w": 300,
            "h": 200,
            "at": "l3:Tuesday",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "d-d0",
            "t": "text",
            "text": "T3 tối",
            "x": 5989,
            "y": 275,
            "size": 44,
            "at": "l3:Tuesday+150"
          },
          {
            "id": "d-h0",
            "t": "text",
            "text": "3 giờ",
            "x": 5989,
            "y": 350,
            "size": 70,
            "at": "l3:Tuesday+350",
            "color": "accent"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 6294,
            "y": 260,
            "w": 300,
            "h": 200,
            "at": "l3:Wednesday",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "d-d1",
            "t": "text",
            "text": "T4 chiều",
            "x": 6319,
            "y": 275,
            "size": 44,
            "at": "l3:Wednesday+150"
          },
          {
            "id": "d-h1",
            "t": "text",
            "text": "4 giờ",
            "x": 6319,
            "y": 350,
            "size": 70,
            "at": "l3:Wednesday+350",
            "color": "accent"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 6624,
            "y": 260,
            "w": 300,
            "h": 200,
            "at": "l3:Thursday",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "d-d2",
            "t": "text",
            "text": "T5 tối",
            "x": 6649,
            "y": 275,
            "size": 44,
            "at": "l3:Thursday+150"
          },
          {
            "id": "d-h2",
            "t": "text",
            "text": "3 giờ",
            "x": 6649,
            "y": 350,
            "size": 70,
            "at": "l3:Thursday+350",
            "color": "accent"
          },
          {
            "id": "d-b3",
            "t": "box",
            "x": 6954,
            "y": 260,
            "w": 300,
            "h": 200,
            "at": "l5:Friday",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "d-d3",
            "t": "text",
            "text": "T6 trưa",
            "x": 6979,
            "y": 275,
            "size": 44,
            "at": "l5:Friday+150"
          },
          {
            "id": "d-h3",
            "t": "text",
            "text": "2 giờ",
            "x": 6979,
            "y": 350,
            "size": 70,
            "at": "l5:Friday+350",
            "color": "coral"
          },
          {
            "id": "d-b4",
            "t": "box",
            "x": 7284,
            "y": 260,
            "w": 300,
            "h": 200,
            "at": "l3:Saturday",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "d-d4",
            "t": "text",
            "text": "T7",
            "x": 7309,
            "y": 275,
            "size": 44,
            "at": "l3:Saturday+150"
          },
          {
            "id": "d-h4",
            "t": "text",
            "text": "8 giờ",
            "x": 7309,
            "y": 350,
            "size": 70,
            "at": "l3:Saturday+350",
            "color": "accent"
          },
          {
            "id": "d-swap",
            "t": "text",
            "text": "đổi chiều T4 ↔ tối T2",
            "x": 5964,
            "y": 490,
            "size": 40,
            "at": "l3:Monday",
            "color": "muted"
          },
          {
            "id": "d-18",
            "t": "text",
            "text": "= 18 giờ → thiếu 2",
            "x": 5964,
            "y": 560,
            "size": 56,
            "at": "l4:eighteen",
            "color": "coral",
            "hl": [
              {
                "text": "thiếu 2",
                "at": "l4:short"
              }
            ]
          },
          {
            "id": "d-18x",
            "t": "strike",
            "over": "d-18",
            "at": "l5:twenty"
          },
          {
            "id": "d-ok",
            "t": "text",
            "text": "= 20 giờ ✓",
            "x": 6664,
            "y": 560,
            "size": 64,
            "at": "l5:twenty",
            "color": "accent",
            "hl": [
              {
                "text": "20 giờ",
                "at": "l5:twenty"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Thiếu 1 giờ = thiếu cả tuần",
            "x": 5964,
            "y": 660,
            "size": 52,
            "at": "l6:one hour",
            "color": "accent",
            "hl": [
              {
                "text": "thiếu cả tuần",
                "at": "l6:whole week"
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
          "say": "Stop two: week one. The Circular sets a weekly minimum, not the hours of the day.",
          "sub": "Chặng hai: tuần đầu. Thông tư đặt mức tối thiểu theo tuần, không quy định khung giờ trong ngày."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But the hours must be real content: case files, litigation skills, legal advice.",
          "sub": "Nhưng giờ đó phải đúng nội dung Điều 6: nghiên cứu hồ sơ, kỹ năng tố tụng, tư vấn pháp luật."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Free slots: Tuesday and Thursday nights, three each. Saturday, eight. Wednesday afternoon, four, swapped for Monday night at work.",
          "sub": "Giờ trống: tối thứ Ba, thứ Năm, mỗi tối 3 giờ. Thứ Bảy 8 giờ. Chiều thứ Tư 4 giờ, đổi với công ty sang làm tối thứ Hai.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "That's eighteen. Two short.",
          "sub": "Tổng 18 giờ. Còn thiếu 2.",
          "face": "worried",
          "keys": [
            "thiếu 2"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Friday lunch, two hours reading files at the office. Twenty!",
          "sub": "Trưa thứ Sáu, 2 giờ đọc hồ sơ tại văn phòng. Đủ 20!",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Add it up on paper before you promise anyone. One hour short spoils the whole week.",
          "sub": "Cộng giờ trên giấy trước khi hứa với ai; thiếu một giờ là thiếu cả tuần.",
          "keys": [
            "thiếu cả tuần"
          ]
        }
      ],
      "ref": "p7,p8,p9"
    },
    {
      "id": "s07",
      "module": "BRK-03",
      "data": {
        "from": 18,
        "value": 20,
        "suffix": " giờ",
        "label": "gửi lịch cho luật sư hướng dẫn để thống nhất",
        "illus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Eighteen becomes twenty.",
          "sub": "Mười tám thành hai mươi."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Then send the plan to your supervisor to agree.",
          "sub": "Rồi gửi lịch cho luật sư hướng dẫn để thống nhất.",
          "keys": [
            "gửi lịch"
          ]
        }
      ],
      "ref": "p8"
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
            "at": "l2",
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
            "text": "③ Tháng 1 · Phiên toà đầu",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:stop three"
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
                  "id": "binh",
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
                "judge",
                "page-facing-up"
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
                  "shot": "E-SHOT-10",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tháng 1 · trước phiên toà",
            "icon": "judge"
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "Tại toà: không đại diện, bào chữa",
            "x": 7932,
            "y": 160,
            "size": 40,
            "at": "l3:cannot",
            "color": "coral",
            "hl": [
              {
                "text": "không",
                "at": "l3:cannot"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Luật Luật sư, khoản 3 Điều 14",
            "x": 7932,
            "y": 215,
            "size": 26,
            "at": "l3",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-yes",
            "t": "text",
            "text": "Được: giúp luật sư hướng dẫn",
            "x": 7932,
            "y": 280,
            "size": 46,
            "at": "l4:help",
            "color": "accent"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "• soạn hồ sơ",
            "x": 7932,
            "y": 350,
            "size": 44,
            "at": "l4:files"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "• gặp khách cùng luật sư",
            "x": 7932,
            "y": 410,
            "size": 44,
            "at": "l4:clients"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "• dự phiên toà, vai hỗ trợ",
            "x": 7932,
            "y": 470,
            "size": 44,
            "at": "l4:support",
            "hl": [
              {
                "text": "vai hỗ trợ",
                "at": "l4:support"
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
          "say": "Stop three: month one, Thảo's first hearing.",
          "sub": "Chặng ba: tháng đầu, phiên toà đầu tiên của Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Uncle, can I speak for our client today?",
          "sub": "Bác ơi, hôm nay cháu nói thay khách được không ạ?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "No. In court, a trainee cannot represent, defend or protect the client. Article fourteen.",
          "sub": "Không. Tại phiên toà, người tập sự không được đại diện, bào chữa, bảo vệ quyền lợi khách hàng. Khoản 3 Điều 14.",
          "pose": "stop"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So plan hours to help: drafting files, meeting clients with the lawyer, attending hearings in support.",
          "sub": "Vậy lịch nên dành chỗ để giúp: soạn hồ sơ, gặp khách hàng cùng luật sư, dự phiên toà ở vai hỗ trợ.",
          "keys": [
            "vai hỗ trợ"
          ]
        }
      ],
      "ref": "p10"
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
            "at": "l3",
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
            "text": "④ Thoả thuận với công ty",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:stop four"
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
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "handshake",
                "locked-with-key"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao",
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
            "at": "l1",
            "caption": "Phòng pháp chế · gặp Cô Hoa",
            "icon": "handshake"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "• khung giờ được đổi",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l2:slots"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "• cách xử lý việc gấp",
            "x": 60,
            "y": 1325,
            "size": 46,
            "at": "l2:urgent"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "• bảo mật hai chiều",
            "x": 60,
            "y": 1390,
            "size": 46,
            "at": "l2:both ways",
            "color": "accent",
            "hl": [
              {
                "text": "hai chiều",
                "at": "l2:both ways"
              }
            ]
          },
          {
            "id": "f-qt",
            "t": "text",
            "text": "+ Bộ Quy tắc Đạo đức và Ứng xử nghề nghiệp luật sư",
            "x": 60,
            "y": 1460,
            "size": 28,
            "at": "l5:Code",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "Tin không mang qua lại",
            "x": 60,
            "y": 1710,
            "size": 44,
            "at": "l5:never",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: the company. It's not a party to the traineeship, but it owns her hours and information.",
          "sub": "Chặng bốn: công ty. Công ty không phải một bên trong quan hệ tập sự, nhưng lịch tập sự đụng giờ làm và thông tin của công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A clear deal covers: swapped slots, urgent work, and confidentiality both ways.",
          "sub": "Thoả thuận rõ thường gồm: khung giờ được đổi, cách xử lý việc gấp, cam kết bảo mật hai chiều.",
          "keys": [
            "bảo mật hai chiều"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Cô Hoa, I train at Uncle Bình's office, twenty hours a week. I won't use company information there.",
          "sub": "Cô Hoa, em tập sự ở văn phòng Bác Bình, 20 giờ mỗi tuần. Em cam kết không dùng thông tin công ty khi tập sự.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "And if a file touches our partners, tell me at once. Okay!",
          "sub": "Gặp hồ sơ dính tới đối tác công ty thì báo ngay. Rồi, vậy nha!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Trainees follow the lawyers' Code of Ethics. Firm secrets never go home, company secrets never go in.",
          "sub": "Người tập sự tuân thủ Bộ Quy tắc Đạo đức nghề luật sư: tin của văn phòng không mang về công ty, và ngược lại.",
          "keys": [
            "ngược lại"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Meanwhile, meet Dũng, Thảo's desk mate, training at a law company.",
          "sub": "Trong khi đó, đây là Dũng, ngồi cạnh Thảo, đang tập sự ở một công ty luật."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p11,p12,p15"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Tháng 3 · nơi Dũng tập sự",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "think"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Thấy tên đối tác công ty mình, vẫn đọc tiếp",
          "why": "Hồ sơ của văn phòng chạm thông tin đối tác của chính công ty: rủi ro bảo mật cho cả hai bên.",
          "rule": "Thấy tên quen trong hồ sơ, dừng tay và báo trước khi đọc tiếp"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Month three at my law firm. Today I review a distribution contract.",
          "sub": "Tháng thứ ba ở công ty luật. Hôm nay em rà một hợp đồng phân phối.",
          "pose": "think"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Page two. Wait, that's our company's biggest distributor. Interesting. Keep reading!",
          "sub": "Trang hai. Ơ, đây là nhà phân phối lớn của công ty mình. Hay đấy, đọc tiếp!",
          "face": "surprised",
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
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "I'll stop here, tell my supervisor, and ask for another file.",
          "sub": "Em dừng ở đây, báo luật sư hướng dẫn, và xin đổi hồ sơ khác.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "See a familiar name? Stop, and report before reading on.",
          "sub": "Thấy tên quen trong hồ sơ: dừng tay, báo trước khi đọc tiếp.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "dừng tay"
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
      "id": "s11",
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
            "text": "⑤ Hằng tuần · Sổ nhật ký",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:stop five"
          },
          {
            "id": "g-nb",
            "t": "illus",
            "name": "notebook",
            "x": 3218,
            "y": 1120,
            "size": 150,
            "at": "l1:logbook"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Ghi việc thuộc nội dung tập sự",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l2:tasks",
            "hl": [
              {
                "text": "việc",
                "at": "l2:tasks"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Xác nhận: LS hướng dẫn + tổ chức",
            "x": 2028,
            "y": 1325,
            "size": 46,
            "at": "l2:confirmed"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Cuối kỳ: báo cáo Đoàn, văn bản",
            "x": 2028,
            "y": 1400,
            "size": 46,
            "at": "l3:report",
            "color": "accent",
            "hl": [
              {
                "text": "văn bản",
                "at": "l3:written"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Thông tư 10/2021/TT-BTP, Điều 7",
            "x": 2028,
            "y": 1470,
            "size": 26,
            "at": "l2",
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
          "say": "Stop five: every week, the logbook.",
          "sub": "Chặng năm: tuần nào cũng vậy, sổ nhật ký."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article seven: record the training tasks you did, confirmed by your supervisor and the firm at the end.",
          "sub": "Điều 7: ghi các công việc thuộc nội dung tập sự mình làm, có xác nhận của luật sư hướng dẫn và tổ chức nhận tập sự khi kết thúc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "When you finish, a written report goes to the Bar, with your supervisor's comments and signature.",
          "sub": "Khi hoàn thành, báo cáo bằng văn bản cho Đoàn luật sư, có nhận xét và chữ ký của luật sư hướng dẫn."
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s12",
      "module": "BRK-04",
      "data": {
        "title": "Một dòng nhật ký thứ Bảy",
        "wrong": "Làm việc ở văn phòng, 8 giờ",
        "right": "Hồ sơ tranh chấp mua bán: tóm tắt chứng cứ, 8 giờ",
        "wrongIllus": "spiral-calendar",
        "rightIllus": "page-facing-up",
        "labels": [
          "Trước",
          "Sau"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: Saturday, at the office, eight hours.",
          "sub": "Trước: “Thứ Bảy: làm việc ở văn phòng, 8 giờ.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: sales dispute, evidence summary, assigned, eight hours.",
          "sub": "Sau: tranh chấp mua bán, tóm tắt chứng cứ, được giao, 8 giờ.",
          "keys": [
            "tóm tắt chứng cứ"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s13",
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
            "fit": [
              "g-tr",
              "g-k"
            ],
            "zoom": 1.1,
            "ms": 800
          }
        ],
        "items": [
          {
            "id": "g-tr",
            "t": "text",
            "text": "Trước: chỉ chứng minh có mặt",
            "x": 2028,
            "y": 1560,
            "size": 46,
            "at": "l1:showed",
            "color": "muted"
          },
          {
            "id": "g-sa",
            "t": "text",
            "text": "việc · kỹ năng · người giao · thời lượng",
            "x": 2028,
            "y": 1630,
            "size": 40,
            "at": "l1:what"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Ghi việc, kỹ năng, không chỉ giờ",
            "x": 2028,
            "y": 1730,
            "size": 52,
            "at": "l2:skill",
            "color": "accent",
            "hl": [
              {
                "text": "việc, kỹ năng",
                "at": "l2:skill"
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
          "say": "The first only proves you showed up. The second shows what, which skill, who assigned it, how long.",
          "sub": "Bản trước chỉ chứng minh có mặt. Bản sau cho thấy việc gì, kỹ năng nào, ai giao, bao lâu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Record the work and the skill, not just the hours.",
          "sub": "Nhật ký ghi việc và kỹ năng, không chỉ ghi giờ có mặt.",
          "keys": [
            "việc và kỹ năng"
          ]
        }
      ],
      "ref": "p17,p18"
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
            "text": "⑥ Mùa quyết toán · Tạm ngừng",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:stop six"
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
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "bar-chart",
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
            "at": "l1",
            "caption": "Mùa quyết toán · phòng pháp chế",
            "icon": "bar-chart"
          },
          {
            "id": "h-p",
            "t": "text",
            "text": "Tạm ngừng: tối đa 02 lần",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l3:twice",
            "color": "accent",
            "hl": [
              {
                "text": "02 lần",
                "at": "l3:twice"
              }
            ]
          },
          {
            "id": "h-p2",
            "t": "text",
            "text": "mỗi lần ≤ 03 tháng",
            "x": 3996,
            "y": 1330,
            "size": 50,
            "at": "l3:three months",
            "hl": [
              {
                "text": "≤ 03 tháng",
                "at": "l3:three months"
              }
            ]
          },
          {
            "id": "h-p3",
            "t": "text",
            "text": "thoả thuận văn bản + báo Đoàn",
            "x": 3996,
            "y": 1400,
            "size": 42,
            "at": "l3:writing",
            "color": "muted"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Thông tư 10/2021/TT-BTP, khoản 1 Điều 11, khoản 4 Điều 9",
            "x": 3996,
            "y": 1460,
            "size": 26,
            "at": "l3",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "h-ch",
            "t": "text",
            "text": "Đổi nơi: mỗi nơi ≥ 02 tháng",
            "x": 3996,
            "y": 1710,
            "size": 44,
            "at": "l4:two months",
            "hl": [
              {
                "text": "≥ 02 tháng",
                "at": "l4:two months"
              }
            ]
          },
          {
            "id": "h-30",
            "t": "text",
            "text": "quá 30 ngày chưa làm thủ tục → tạm ngừng hoặc chấm dứt · tạm ngừng quá số lần cũng chấm dứt",
            "x": 3996,
            "y": 1780,
            "size": 26,
            "at": "l5:thirty",
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
          "say": "Stop six: audit season at Thảo's company. Late nights everywhere.",
          "sub": "Chặng sáu: mùa quyết toán ở công ty Thảo. Tối nào cũng ở lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I can't keep twenty hours this month. Should I just log fewer?",
          "sub": "Tháng này cháu không giữ nổi 20 giờ. Hay ghi ít đi một chút?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Better: pause. Up to twice, three months each, agreed in writing with the firm and reported to the Bar.",
          "sub": "Tốt hơn: tạm ngừng. Tối đa 02 lần, mỗi lần không quá 03 tháng, thoả thuận bằng văn bản với tổ chức nhận tập sự và báo Đoàn.",
          "keys": [
            "tạm ngừng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Changing firms? Time only adds up if you spent at least two months at each.",
          "sub": "Đổi nơi tập sự? Thời gian chỉ cộng dồn khi mỗi nơi ít nhất 02 tháng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Over thirty days without completing the switch, you pause or stop. Too many pauses also end it.",
          "sub": "Quá 30 ngày chưa làm thủ tục ở nơi mới thì tạm ngừng hoặc chấm dứt; tạm ngừng quá số lần cũng là chấm dứt."
        }
      ],
      "ref": "p19,p20"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Đủ 12 tháng mà bị chấm chưa đạt thì sao?",
        "illus": "anxious-face-with-sweat"
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
          "say": "Twelve months done, and judged not ready. Then what?",
          "sub": "Đủ 12 tháng mà bị chấm chưa đạt thì sao?",
          "keys": [
            "chưa đạt"
          ]
        }
      ],
      "ref": "p21"
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
            "text": "⑦ Tháng 12 · Chưa đạt?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:stop seven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "face": "sad",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "page-facing-up",
                "hourglass-not-done"
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
            "at": "l1",
            "caption": "Tháng 12 · quán cà phê",
            "icon": "hourglass-not-done"
          },
          {
            "id": "i-why",
            "t": "text",
            "text": "giấy tờ, gần như không tố tụng",
            "x": 5964,
            "y": 1260,
            "size": 40,
            "at": "l2:paperwork",
            "color": "coral"
          },
          {
            "id": "i-ext",
            "t": "text",
            "text": "Gia hạn: mỗi lần 06 tháng",
            "x": 5964,
            "y": 1340,
            "size": 50,
            "at": "l3:six months",
            "color": "accent",
            "hl": [
              {
                "text": "06 tháng",
                "at": "l3:six months"
              }
            ]
          },
          {
            "id": "i-ext2",
            "t": "text",
            "text": "tối đa 02 lần",
            "x": 5964,
            "y": 1410,
            "size": 50,
            "at": "l3:twice"
          },
          {
            "id": "i-out",
            "t": "text",
            "text": "lần 2 vẫn không đạt → rút tên",
            "x": 5964,
            "y": 1490,
            "size": 44,
            "at": "l4:removed",
            "color": "coral",
            "hl": [
              {
                "text": "rút tên",
                "at": "l4:removed"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Thông tư 10/2021/TT-BTP, khoản 2, 3 Điều 10",
            "x": 5964,
            "y": 1550,
            "size": 26,
            "at": "l3:twice",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "i-q",
            "t": "text",
            "text": "Mỗi quý hỏi: “em còn thiếu gì?”",
            "x": 5964,
            "y": 1730,
            "size": 52,
            "at": "l5:every quarter",
            "color": "accent",
            "hl": [
              {
                "text": "em còn thiếu gì",
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
          "say": "Stop seven: month twelve. Dũng gets his review.",
          "sub": "Chặng bảy: tháng thứ mười hai. Dũng nhận đánh giá."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Mostly paperwork, almost no litigation, so not ready yet. Is my year wasted?",
          "sub": "Chủ yếu làm giấy tờ, gần như không tham gia tố tụng, nên chưa đạt. Mất trắng một năm à?",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not at once. You can be extended, six months each time, at most twice.",
          "sub": "Không ngay lập tức. Được gia hạn tập sự, mỗi lần 06 tháng, tối đa hai lần.",
          "keys": [
            "gia hạn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plan the missing part with your supervisor. Fail after the second, and your name is removed.",
          "sub": "Cùng luật sư hướng dẫn lập kế hoạch cho phần thiếu. Lần hai vẫn không đạt thì bị rút tên khỏi danh sách.",
          "keys": [
            "rút tên"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So ask your supervisor every quarter: what am I still missing? Don't wait for month twelve.",
          "sub": "Vậy mỗi quý hỏi người hướng dẫn: em còn thiếu gì? Đừng đợi tháng thứ mười hai.",
          "keys": [
            "em còn thiếu gì"
          ]
        }
      ],
      "ref": "p21,p22,p23"
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
            "text": "Tháng 12 · Tối cuối cùng",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:later"
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
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "notebook",
                "balance-scale"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "binh",
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
            "at": "l1:same",
            "caption": "Tối cuối cùng · văn phòng luật",
            "icon": "notebook"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Lịch: cộng trước ✓",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l4:counted"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Công ty: cùng biết ✓",
            "x": 7932,
            "y": 1330,
            "size": 50,
            "at": "l4:company"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "Nhật ký: đúng việc ✓",
            "x": 7932,
            "y": 1400,
            "size": 50,
            "at": "l4:logbook",
            "color": "accent"
          },
          {
            "id": "j-cm",
            "t": "text",
            "text": "Chậm mà chắc… mà tới",
            "x": 7932,
            "y": 1510,
            "size": 50,
            "at": "l5:slow",
            "color": "accent",
            "hl": [
              {
                "text": "mà tới",
                "at": "l5:arrives"
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
          "say": "Twelve months later. Same office, same evening light.",
          "sub": "Mười hai tháng sau. Vẫn văn phòng ấy, vẫn ánh đèn buổi tối ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Logbook signed. Now your written report for the Bar.",
          "sub": "Sổ nhật ký bác ký rồi. Giờ cháu viết báo cáo gửi Đoàn.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Twelve months, twenty hours a week. Crazy? No. Just counted.",
          "sub": "Mười hai tháng, 20 giờ mỗi tuần. Liều à? Không. Chỉ là cộng trước.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hours counted first, company in the loop, logbook full of real work.",
          "sub": "Lịch cộng trước, công ty cùng biết, nhật ký ghi đúng việc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Slow but sure. And it arrives.",
          "sub": "Chậm mà chắc. Và rồi cũng tới.",
          "keys": [
            "Chậm mà chắc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "tich-tac-dai"
        }
      ],
      "ref": "outro,p16"
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
            "at": "l1",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3",
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
            "x": 7464,
            "y": 30,
            "at": "l1"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1560,
            "y": 1120,
            "at": "l2"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3528,
            "y": 1120,
            "at": "l3"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề tham khảo, không phải tư vấn cho trường hợp cụ thể. Luật Luật sư đang sửa đổi; đối chiếu văn bản mới nhất.",
            "x": 7932,
            "y": 1790,
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
          "say": "Step back. Count twenty hours on paper first.",
          "sub": "Lùi lại. Cộng đủ 20 giờ trên giấy trước.",
          "keys": [
            "trên giấy trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Agree slots, urgent work and secrecy with the company.",
          "sub": "Thoả thuận khung giờ, việc gấp, bảo mật với công ty."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And write work and skills in the logbook, not just hours.",
          "sub": "Và nhật ký ghi việc, ghi kỹ năng, không chỉ ghi giờ.",
          "keys": [
            "ghi việc, ghi kỹ năng"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p9,p11,p18"
    },
    {
      "id": "s19",
      "module": "QUIZ-01",
      "data": {
        "q": "Which sentence matches the takeaway about counting hours?",
        "options": [
          "Add the hours on paper before promising, since one missing hour spoils the week",
          "Count only the weekend hours, since weekday hours do not matter",
          "Promise first and count later, because supervisors rarely check the hours"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "spiral-calendar",
        "why": "Dòng Rút ra nhắc cộng giờ trước khi hứa; thiếu một giờ là thiếu mức tối thiểu của cả tuần."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Which sentence matches the takeaway about counting hours?",
          "sub": "Câu nào khớp với điều rút ra về việc cộng giờ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Add the hours on paper before promising, since one missing hour spoils the week.",
          "sub": "Cộng giờ trên giấy trước khi hứa, vì thiếu một giờ là thiếu cả tuần."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Twenty is a weekly minimum.",
          "sub": "Hai mươi giờ là mức tối thiểu của mỗi tuần."
        }
      ],
      "beats": {
        "after": 800
      },
      "ref": "questions[15]"
    },
    {
      "id": "s20",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: viết lịch tuần mẫu của bạn",
        "sub": "Rồi gửi cho một luật sư có thể hướng dẫn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, write your sample week, and send it to a lawyer who could supervise you.",
          "sub": "Hôm nay viết lịch tuần mẫu của mình, gửi một luật sư có thể hướng dẫn.",
          "face": "laugh",
          "keys": [
            "lịch tuần mẫu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "General knowledge, not advice for your case. The law is changing; check the latest text.",
          "sub": "Kiến thức nghề tham khảo, không phải tư vấn cho trường hợp cụ thể. Luật đang sửa, hãy đối chiếu văn bản mới nhất."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI, dựng theo hạt nhân #136 + biến thể #144 (bang-trang-kit). HOOK-20: đáp án trước “Làm được — nếu cộng giờ trên giấy, công ty cùng biết, nhật ký đúng việc” (outro) → ba chỗ hay vấp. Dòng thời gian: năm tập sự của Thảo ở văn phòng Bác Bình — A tối đầu tiên, B Thông tư đòi gì (p1, p3), C ① trước ngày đầu: nơi tập sự, đăng ký, LS hướng dẫn (p2, p4–p6), D ② tuần 1 lịch 18 → 20 giờ (p7–p9) + BRK-03, E ③ tháng 1 phiên toà (p10), F ④ thoả thuận công ty với Cô Hoa (p11, p12, p15), Khoan đã! Dũng gặp tên nhà phân phối (p13–p14), G ⑤ nhật ký (p16) + BRK-04 Trước/Sau (p17) + rút ra (p18), H ⑥ mùa quyết toán: tạm ngừng, đổi nơi (p19–p20), BRK-07 rehook, I ⑦ tháng 12 Dũng chưa đạt: gia hạn (p21–p23), J tối cuối cùng cùng văn phòng (khép vòng, “Chậm mà chắc”). Nhân vật theo w145/_series/bar-inhouse-to-lawyer.md: chị Thảo (p8) giữ; anh Khoa (p22) và ‘một pháp chế’ (p13) → Dũng; luật sư hướng dẫn → Bác Bình; trưởng phòng → Cô Hoa. Số/điều chỉ từ bài: TT 10/2021 điểm đ khoản 2 Điều 12 (20 giờ/01 tuần), Điều 10 (12 tháng; gia hạn 06 tháng × tối đa 02), khoản 1 Điều 5 (05 ngày làm việc), khoản 2 Điều 11, khoản 1, 3 Điều 4, khoản 1 Điều 8 (03 năm, 03 người), điểm a khoản 1 Điều 12, Điều 6, 7, khoản 1 Điều 11 (02 lần × 03 tháng), khoản 4 Điều 9 (02 tháng, 30 ngày); Luật Luật sư Điều 16, khoản 3 Điều 14; lịch 3+4+3+8 = 18 + 2 = 20. Lưu ý chung (#133) ở tóm tắt + END. Câu đố questions[15].",
  "loop": {
    "open": "s01",
    "close": "s17"
  }
};
