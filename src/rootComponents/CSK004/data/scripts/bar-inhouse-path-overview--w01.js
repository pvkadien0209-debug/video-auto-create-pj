// bar-inhouse-path-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-inhouse-path-overview--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "bar-inhouse-to-lawyer",
    "slug": "bar-inhouse-path-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Pháp chế đang đi làm lấy thẻ luật sư theo lộ trình nào?",
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
            "id": "a-q",
            "t": "text",
            "text": "Không nghỉ việc: mất bao lâu?",
            "x": 60,
            "y": 40,
            "size": 60,
            "at": "l2:how long",
            "hl": [
              {
                "text": "bao lâu",
                "at": "l2:how long"
              }
            ]
          },
          {
            "id": "a-b1",
            "t": "box",
            "x": 60,
            "y": 150,
            "w": 640,
            "h": 130,
            "at": "l3:twelve",
            "stroke": 6
          },
          {
            "id": "a-12",
            "t": "text",
            "text": "12 tháng?",
            "x": 110,
            "y": 160,
            "size": 90,
            "at": "l3:twelve+200"
          },
          {
            "id": "a-b2",
            "t": "box",
            "x": 60,
            "y": 310,
            "w": 640,
            "h": 130,
            "at": "l3:more than",
            "stroke": 6
          },
          {
            "id": "a-2y",
            "t": "text",
            "text": "Hơn 2 năm?",
            "x": 110,
            "y": 320,
            "size": 90,
            "at": "l3:more than+200",
            "color": "accent"
          },
          {
            "id": "a-12x",
            "t": "strike",
            "over": "a-12",
            "at": "l4:answer"
          },
          {
            "id": "a-ring",
            "t": "ring",
            "around": [
              "a-2y"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l4:two years"
          },
          {
            "id": "a-wait",
            "t": "text",
            "text": "chưa kể: chờ khai giảng,",
            "x": 60,
            "y": 470,
            "size": 40,
            "at": "l4:waiting",
            "color": "muted"
          },
          {
            "id": "a-wait2",
            "t": "text",
            "text": "chờ kiểm tra, làm hồ sơ",
            "x": 60,
            "y": 520,
            "size": 40,
            "at": "l4:exams",
            "color": "muted"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Theo Luật Luật sư (VBHN 03/VBHN-VPQH) và Thông tư 10/2021/TT-BTP",
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
          "say": "You work in a legal department. Your company wants you to hold a lawyer's card.",
          "sub": "Bạn làm pháp chế. Công ty muốn bạn có thẻ luật sư.",
          "keys": [
            "thẻ luật sư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Quick guess. Without quitting your job, how long does it take?",
          "sub": "Đoán nhanh: không nghỉ việc thì mất bao lâu?",
          "keys": [
            "mất bao lâu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Twelve months, like the training course? Or more than two years?",
          "sub": "Mười hai tháng, bằng lớp đào tạo? Hay hơn hai năm?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The answer: usually more than two years, before waiting for intakes, exams and paperwork.",
          "sub": "Đáp án: thường hơn hai năm, chưa kể chờ khai giảng, chờ kỳ kiểm tra, làm hồ sơ.",
          "keys": [
            "hơn hai năm"
          ]
        }
      ],
      "ref": "intro,p3"
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
                  "id": "hoa",
                  "side": "right",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                }
              ],
              "props": [
                "hot-beverage",
                "briefcase"
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
            "caption": "Sáng thứ Hai · phòng pháp chế",
            "icon": "briefcase"
          },
          {
            "id": "a-worry",
            "t": "text",
            "text": "Nỗi lo số 1: thời gian",
            "x": 60,
            "y": 610,
            "size": 52,
            "at": "l5:time",
            "color": "coral",
            "hl": [
              {
                "text": "thời gian",
                "at": "l5:time"
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
          "say": "Meet Thảo. Four years in legal, tidy notes, coffee in hand.",
          "sub": "Đây là Thảo. Pháp chế bốn năm, sổ sách ngăn nắp, tay luôn cầm ly cà phê."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, head of legal.",
          "sub": "Còn đây là Cô Hoa, trưởng phòng pháp chế, sếp của Thảo."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, we want our own lawyer's card for disputes. Okay?",
          "sub": "Thảo, công ty muốn có người có thẻ luật sư để tự đại diện khi tranh chấp. Rồi, vậy nha?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "But I work full time. When would I study?",
          "sub": "Nhưng em làm toàn thời gian. Học lúc nào ạ?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One giant worry: time.",
          "sub": "Một nỗi lo khổng lồ: thời gian.",
          "keys": [
            "thời gian"
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
            "text": "Lộ trình nào, khi vẫn đi làm?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:which path",
            "hl": [
              {
                "text": "vẫn đi làm",
                "at": "l1:employed"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: nghỉ việc đi học",
            "x": 2028,
            "y": 150,
            "size": 50,
            "at": "l2:quitting",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:but"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: 4 chặng nối tiếp",
            "x": 2788,
            "y": 150,
            "size": 56,
            "at": "l2:four stages",
            "color": "accent",
            "hl": [
              {
                "text": "4 chặng",
                "at": "l2:four stages"
              }
            ]
          },
          {
            "id": "b-d10",
            "t": "text",
            "text": "Điều 10 — làm luật sư cần:",
            "x": 2028,
            "y": 250,
            "size": 48,
            "at": "l3:article ten"
          },
          {
            "id": "b-d10a",
            "t": "text",
            "text": "bằng · đào tạo · tập sự · sức khoẻ",
            "x": 2058,
            "y": 315,
            "size": 44,
            "at": "l3:degree",
            "hl": [
              {
                "text": "đào tạo",
                "at": "l3:training"
              },
              {
                "text": "tập sự",
                "at": "l3:traineeship"
              }
            ]
          },
          {
            "id": "b-d11",
            "t": "text",
            "text": "Điều 11 — hành nghề cần thêm:",
            "x": 2028,
            "y": 400,
            "size": 48,
            "at": "l4:article eleven"
          },
          {
            "id": "b-d11a",
            "t": "text",
            "text": "Chứng chỉ hành nghề + một Đoàn",
            "x": 2058,
            "y": 465,
            "size": 44,
            "at": "l4:certificate",
            "color": "accent",
            "hl": [
              {
                "text": "Chứng chỉ hành nghề",
                "at": "l4:certificate"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Luật Luật sư, Điều 10, 11",
            "x": 2028,
            "y": 530,
            "size": 28,
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
          "say": "So which path takes an employed in-house lawyer to the card?",
          "sub": "Vậy pháp chế đang đi làm lấy thẻ theo lộ trình nào?",
          "keys": [
            "lộ trình nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not quitting your job. But four stages, one after another.",
          "sub": "Không phải nghỉ việc. Mà là bốn chặng, nối tiếp nhau.",
          "keys": [
            "bốn chặng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article ten of the Law on Lawyers: a law degree, training, a traineeship, and good health.",
          "sub": "Điều 10 Luật Luật sư: bằng cử nhân luật, đào tạo nghề, tập sự, sức khoẻ bảo đảm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article eleven adds two keys: a practising certificate, and a Bar Association.",
          "sub": "Điều 11 thêm hai chìa khoá: Chứng chỉ hành nghề, và gia nhập một Đoàn luật sư.",
          "keys": [
            "Chứng chỉ hành nghề"
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
          },
          {
            "at": 150,
            "fit": [
              "b-s0",
              "b-s3"
            ],
            "zoom": 1.05,
            "ms": 800
          },
          {
            "at": "l5:end",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-s0",
            "t": "box",
            "x": 2028,
            "y": 580,
            "w": 370,
            "h": 150,
            "at": "l1:one",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "b-st0",
            "t": "text",
            "text": "① Lớp",
            "x": 2053,
            "y": 590,
            "size": 46,
            "at": "l1:one+200"
          },
          {
            "id": "b-sb0",
            "t": "text",
            "text": "12 tháng",
            "x": 2053,
            "y": 655,
            "size": 36,
            "at": "l1:one+400",
            "color": "muted"
          },
          {
            "id": "b-s1",
            "t": "box",
            "x": 2438,
            "y": 580,
            "w": 370,
            "h": 150,
            "at": "l2:two",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "b-st1",
            "t": "text",
            "text": "② Tập sự",
            "x": 2463,
            "y": 590,
            "size": 46,
            "at": "l2:two+200"
          },
          {
            "id": "b-sb1",
            "t": "text",
            "text": "12 tháng",
            "x": 2463,
            "y": 655,
            "size": 36,
            "at": "l2:two+400",
            "color": "muted"
          },
          {
            "id": "b-s2",
            "t": "box",
            "x": 2848,
            "y": 580,
            "w": 370,
            "h": 150,
            "at": "l3:three",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "b-st2",
            "t": "text",
            "text": "③ Kiểm tra",
            "x": 2873,
            "y": 590,
            "size": 46,
            "at": "l3:three+200"
          },
          {
            "id": "b-sb2",
            "t": "text",
            "text": "Chứng chỉ · Đoàn",
            "x": 2873,
            "y": 655,
            "size": 36,
            "at": "l3:three+400",
            "color": "muted"
          },
          {
            "id": "b-s3",
            "t": "box",
            "x": 3258,
            "y": 580,
            "w": 370,
            "h": 150,
            "at": "l4:four",
            "stroke": 5,
            "color": "ink"
          },
          {
            "id": "b-st3",
            "t": "text",
            "text": "④ Đăng ký",
            "x": 3283,
            "y": 590,
            "size": 46,
            "at": "l4:four+200"
          },
          {
            "id": "b-sb3",
            "t": "text",
            "text": "cá nhân",
            "x": 3283,
            "y": 655,
            "size": 36,
            "at": "l4:four+400",
            "color": "muted"
          },
          {
            "id": "b-line",
            "t": "text",
            "text": "① + ② nối đuôi → hơn 2 năm",
            "x": 2788,
            "y": 525,
            "size": 40,
            "at": "l5:in a line",
            "color": "coral",
            "hl": [
              {
                "text": "hơn 2 năm",
                "at": "l5:two years"
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
          "say": "Here's the map. Stage one: a twelve-month training class.",
          "sub": "Đây là bản đồ. Chặng một: lớp đào tạo nghề 12 tháng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Stage two: a twelve-month traineeship at a law practice.",
          "sub": "Chặng hai: tập sự 12 tháng tại một tổ chức hành nghề luật sư."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Stage three: pass the exam, get the certificate, join a Bar Association.",
          "sub": "Chặng ba: đạt kỳ kiểm tra kết quả tập sự, được cấp Chứng chỉ, gia nhập Đoàn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Stage four: practise as an individual, under your job contract with your own company.",
          "sub": "Chặng bốn: hành nghề với tư cách cá nhân, theo hợp đồng lao động với chính công ty."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One and two run in a line, not side by side. Hence two years plus.",
          "sub": "Chặng một, hai nối đuôi, không chồng lên nhau, nên mới hơn hai năm.",
          "keys": [
            "nối đuôi"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "text": "① Tối thứ Hai · Lớp đào tạo",
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
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
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:notice",
            "caption": "Tối thứ Hai · nhà Thảo",
            "icon": "laptop"
          },
          {
            "id": "c-12",
            "t": "text",
            "text": "12 tháng · 36 tín chỉ",
            "x": 3996,
            "y": 160,
            "size": 58,
            "at": "l2:twelve",
            "color": "accent",
            "hl": [
              {
                "text": "12 tháng",
                "at": "l3:article twelve"
              }
            ]
          },
          {
            "id": "c-city",
            "t": "text",
            "text": "Hà Nội · TP. Hồ Chí Minh",
            "x": 3996,
            "y": 245,
            "size": 46,
            "at": "l2:Hanoi"
          },
          {
            "id": "c-h",
            "t": "text",
            "text": "Ba hệ:",
            "x": 3996,
            "y": 330,
            "size": 50,
            "at": "l3:three types"
          },
          {
            "id": "c-h1",
            "t": "text",
            "text": "• ngày, thứ Hai – thứ Sáu",
            "x": 3996,
            "y": 395,
            "size": 44,
            "at": "l3:types+300"
          },
          {
            "id": "c-h2",
            "t": "text",
            "text": "• tối, thứ Hai – thứ Sáu",
            "x": 3996,
            "y": 455,
            "size": 44,
            "at": "l3:types+700",
            "hl": [
              {
                "text": "tối",
                "at": "l3:class"
              }
            ]
          },
          {
            "id": "c-h3",
            "t": "text",
            "text": "• ngày, thứ Bảy – Chủ nhật",
            "x": 3996,
            "y": 515,
            "size": 44,
            "at": "l3:types+1100"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Luật Luật sư, Điều 12 · Thông báo tuyển sinh khoá 28 lần 1/2026, Học viện Tư pháp",
            "x": 3996,
            "y": 725,
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
          "say": "Stop one: Monday night. Thảo opens the Judicial Academy's intake notice.",
          "sub": "Chặng một: tối thứ Hai. Thảo mở thông báo tuyển sinh khoá 28 lần 1 năm 2026 của Học viện Tư pháp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Twelve months, thirty-six credits. In Hanoi or Ho Chi Minh City.",
          "sub": "Mười hai tháng, 36 tín chỉ. Học ở Hà Nội hoặc TP. Hồ Chí Minh.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article twelve fixes twelve months. Three types of class: weekday daytime, weekday evening, weekend daytime.",
          "sub": "Điều 12 định 12 tháng. Ba hệ: ngày thường, tối thường, ban ngày cuối tuần.",
          "keys": [
            "Ba hệ"
          ]
        }
      ],
      "ref": "p4"
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
            "fit": [
              "c-f1",
              "c-f2"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l3:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-f1",
            "t": "text",
            "text": "Tối / cuối tuần: 36.600.000 đ",
            "x": 3996,
            "y": 600,
            "size": 50,
            "at": "l2:thirty-six",
            "color": "accent",
            "hl": [
              {
                "text": "36.600.000 đ",
                "at": "l2:thirty-six"
              }
            ]
          },
          {
            "id": "c-f2",
            "t": "text",
            "text": "Ban ngày: 29.280.000 đ",
            "x": 3996,
            "y": 665,
            "size": 44,
            "at": "l3:twenty-nine",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Working people usually pick evening or weekend.",
          "sub": "Người đi làm thường chọn hệ buổi tối hoặc cuối tuần.",
          "keys": [
            "buổi tối hoặc cuối tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Both cost thirty-six million six hundred thousand dong per course.",
          "sub": "Hai hệ này cùng học phí 36.600.000 đồng mỗi khoá.",
          "keys": [
            "36.600.000 đồng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Daytime is twenty-nine million two hundred eighty thousand. Night lessons cost more, like late-night phở.",
          "sub": "Hệ ban ngày 29.280.000 đồng. Học đêm đắt hơn, như phở đêm vậy."
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Tối thứ Ba · nhà Thảo",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "explain"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Vừa học lớp, vừa đăng ký tập sự",
          "why": "Điều 3 Thông tư 10/2021/TT-BTP: đăng ký tập sự phải có giấy chứng nhận tốt nghiệp đào tạo nghề, trừ người được miễn.",
          "rule": "Học xong mới tập sự; tìm nơi tập sự thì bắt đầu sớm"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Tuesday night, genius plan: study and register my traineeship at once!",
          "sub": "Tối thứ Ba, kế hay: vừa học lớp, vừa đăng ký tập sự luôn!",
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
          "say": "Circular ten, Article three: registering needs your training graduation certificate, unless you're exempt.",
          "sub": "Điều 3 Thông tư 10/2021/TT-BTP: đăng ký tập sự phải có giấy chứng nhận tốt nghiệp đào tạo nghề, trừ người được miễn.",
          "keys": [
            "giấy chứng nhận tốt nghiệp"
          ]
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
          "who": "thao",
          "say": "Then I'll find a law firm now, and register after I graduate.",
          "sub": "Vậy em tìm nơi tập sự từ bây giờ, tốt nghiệp rồi mới đăng ký.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Class first, traineeship after. But hunt for the firm early.",
          "sub": "Học xong mới tập sự, nhưng tìm nơi tập sự thì bắt đầu sớm.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "tìm nơi tập sự thì bắt đầu sớm"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p6,p7"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Trưa thứ Tư · Tập sự",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:stop two"
          },
          {
            "id": "d-12",
            "t": "text",
            "text": "12 tháng, từ ngày đăng ký",
            "x": 5964,
            "y": 150,
            "size": 52,
            "at": "l2:counted",
            "hl": [
              {
                "text": "từ ngày đăng ký",
                "at": "l2:registration"
              }
            ]
          },
          {
            "id": "d-where",
            "t": "text",
            "text": "Đoàn nơi tổ chức đặt trụ sở",
            "x": 5994,
            "y": 220,
            "size": 40,
            "at": "l2:based",
            "color": "muted"
          },
          {
            "id": "d-ok",
            "t": "text",
            "text": "✓ Văn phòng luật sư, công ty luật",
            "x": 5964,
            "y": 290,
            "size": 46,
            "at": "l3:law office",
            "color": "accent"
          },
          {
            "id": "d-no",
            "t": "text",
            "text": "Phòng pháp chế doanh nghiệp",
            "x": 6004,
            "y": 360,
            "size": 46,
            "at": "l3:legal department",
            "color": "muted"
          },
          {
            "id": "d-nox",
            "t": "strike",
            "over": "d-no",
            "at": "l3:doesn't count"
          },
          {
            "id": "d-20",
            "t": "text",
            "text": "≥ 20 giờ/tuần + sổ nhật ký",
            "x": 5964,
            "y": 450,
            "size": 56,
            "at": "l4:twenty hours",
            "color": "coral",
            "hl": [
              {
                "text": "20 giờ/tuần",
                "at": "l4:twenty hours"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Luật Luật sư, Điều 14 · Thông tư 10/2021/TT-BTP, Điều 10, điểm đ khoản 2 Điều 12",
            "x": 5964,
            "y": 530,
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
          "say": "Stop two: Wednesday lunch. The traineeship.",
          "sub": "Chặng hai: trưa thứ Tư. Chặng tập sự."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twelve months, counted from registration at the Bar where the firm is based.",
          "sub": "Mười hai tháng, tính từ ngày đăng ký tại Đoàn luật sư nơi tổ chức nhận tập sự đặt trụ sở."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Where? A law office or law company. Your own legal department doesn't count.",
          "sub": "Ở đâu? Văn phòng luật sư, công ty luật. Phòng pháp chế doanh nghiệp không phải nơi nhận tập sự.",
          "keys": [
            "không phải nơi nhận tập sự"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And at least twenty hours a week, in a logbook your supervising lawyer confirms.",
          "sub": "Và tối thiểu 20 giờ mỗi tuần, ghi sổ nhật ký có xác nhận của luật sư hướng dẫn.",
          "keys": [
            "20 giờ mỗi tuần"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s08",
      "module": "BRK-03",
      "data": {
        "value": 20,
        "suffix": " giờ",
        "label": "mỗi tuần tập sự, tối thiểu, suốt 12 tháng",
        "illus": "hourglass-not-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "On top of a full-time job, every single week.",
          "sub": "Cộng thêm vào việc toàn thời gian, tuần nào cũng vậy."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Twenty hours. For twelve months.",
          "sub": "Hai mươi giờ. Suốt mười hai tháng.",
          "keys": [
            "Hai mươi giờ"
          ]
        }
      ],
      "ref": "p9"
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
            "at": "a1",
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
            "module": "SCENE-03",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "pose": "explain"
                },
                {
                  "id": "hoa",
                  "pose": "hold"
                }
              ],
              "left": {
                "label": "Cách A: giấu công ty",
                "ok": false
              },
              "right": {
                "label": "Cách B: báo trưởng phòng",
                "ok": true
              }
            },
            "at": "l1:two ways",
            "caption": "Trưa thứ Tư · Dũng tính hai cách",
            "icon": "thinking-face"
          },
          {
            "id": "d-a",
            "t": "text",
            "text": "A: tối + thứ Bảy, không báo",
            "x": 5964,
            "y": 600,
            "size": 40,
            "at": "l2:packed",
            "color": "coral"
          },
          {
            "id": "d-a2",
            "t": "text",
            "text": "→ họp tối, bỏ buổi, thiếu giờ",
            "x": 5964,
            "y": 660,
            "size": 36,
            "at": "l2:short",
            "color": "muted"
          },
          {
            "id": "d-b",
            "t": "text",
            "text": "B: báo sớm, đổi giờ",
            "x": 6804,
            "y": 690,
            "size": 40,
            "at": "l2:steadier",
            "color": "accent",
            "hl": [
              {
                "text": "báo sớm",
                "at": "l3:company knows"
              }
            ]
          },
          {
            "id": "d-rule",
            "t": "text",
            "text": "Công ty biết → 20 giờ dễ giữ",
            "x": 5964,
            "y": 720,
            "size": 36,
            "at": "l3:company knows",
            "color": "accent",
            "hl": [
              {
                "text": "Công ty biết",
                "at": "l3:company knows"
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
          "say": "Meet Dũng, Thảo's desk mate, five years in legal. Two ways to do it.",
          "sub": "Đây là Dũng, ngồi cạnh Thảo, pháp chế năm năm. Hai cách làm."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "A law office near home, evenings and Saturdays. The boss needn't know!",
          "sub": "Văn phòng gần nhà, tối và thứ Bảy. Sếp không cần biết!",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "dung",
          "say": "Evening meeting again? Skip the traineeship, then.",
          "sub": "Lại họp tối? Thôi, bỏ buổi tập sự vậy.",
          "phase": "a",
          "face": "sad"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "Cô Hoa, may I move two afternoons a week to evenings?",
          "sub": "Cô Hoa, cho em đổi hai buổi chiều mỗi tuần sang làm tối được không ạ?",
          "phase": "b",
          "to": "hoa"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "hoa",
          "say": "Fine. Pick a firm with no clients among our partners. Okay!",
          "sub": "Được. Chọn công ty luật không có khách là đối tác của mình. Rồi, vậy nha!",
          "phase": "b"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A: packed, but the logbook runs short. B: steadier, fewer secrecy worries.",
          "sub": "A: lịch kín, nhưng sổ nhật ký thiếu giờ. B: lịch ổn định hơn, ít lo bảo mật."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Twenty hours are easier when the company knows.",
          "sub": "Hai mươi giờ dễ giữ hơn khi công ty biết và cùng sắp lịch.",
          "keys": [
            "công ty biết"
          ]
        }
      ],
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
            "text": "③ Tối thứ Năm · Kiểm tra",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "binh",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "hot-beverage",
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
            "at": "l1:coffee",
            "caption": "Tối thứ Năm · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "e-6",
            "t": "text",
            "text": "≥ 1 lần / 6 tháng",
            "x": 7932,
            "y": 160,
            "size": 56,
            "at": "l2:six months",
            "hl": [
              {
                "text": "6 tháng",
                "at": "l2:six months"
              }
            ]
          },
          {
            "id": "e-wr",
            "t": "text",
            "text": "viết + thực hành",
            "x": 7932,
            "y": 240,
            "size": 50,
            "at": "l3:written"
          },
          {
            "id": "e-50",
            "t": "text",
            "text": "mỗi bài ≥ 50 điểm",
            "x": 7932,
            "y": 320,
            "size": 60,
            "at": "l3:fifty",
            "color": "accent",
            "hl": [
              {
                "text": "≥ 50 điểm",
                "at": "l3:fifty points"
              }
            ]
          },
          {
            "id": "e-cc",
            "t": "text",
            "text": "→ hồ sơ xin Chứng chỉ",
            "x": 7932,
            "y": 420,
            "size": 48,
            "at": "l4:certificate"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Thông tư 10/2021/TT-BTP, Điều 18 · Luật Luật sư, Điều 17",
            "x": 7932,
            "y": 500,
            "size": 26,
            "at": "l4",
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
          "say": "Stop three, Thursday evening: coffee with Uncle Bình, Thảo's uncle and a veteran lawyer.",
          "sub": "Chặng ba: tối thứ Năm, cà phê với Bác Bình, bác của Thảo, luật sư hành nghề lâu năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Easy now. After the traineeship comes an exam, at least once every six months.",
          "sub": "Từ từ, mình xem lại đã. Tập sự xong là kỳ kiểm tra, ít nhất sáu tháng một lần.",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "A written part and a practical part. Each needs fifty points or more.",
          "sub": "Có kiểm tra viết và thực hành. Mỗi bài phải từ 50 điểm trở lên.",
          "keys": [
            "50 điểm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article eighteen of Circular ten. Pass, then apply for the practising certificate.",
          "sub": "Điều 18 Thông tư 10. Đạt thì nộp hồ sơ đề nghị cấp Chứng chỉ hành nghề, theo Điều 17 Luật Luật sư.",
          "keys": [
            "Chứng chỉ hành nghề"
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
      "ref": "p12"
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
            "fit": [
              "e-who",
              "e-nd"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-who",
            "t": "text",
            "text": "Từ 01/7/2025: Chủ tịch UBND tỉnh cấp",
            "x": 7932,
            "y": 590,
            "size": 46,
            "at": "l1:July",
            "color": "coral",
            "hl": [
              {
                "text": "Chủ tịch UBND tỉnh",
                "at": "l1:chair"
              }
            ]
          },
          {
            "id": "e-nd",
            "t": "text",
            "text": "Nghị định 121/2025/NĐ-CP",
            "x": 7932,
            "y": 650,
            "size": 28,
            "at": "l1:decree",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "e-doan",
            "t": "text",
            "text": "→ chọn một Đoàn (Điều 20)",
            "x": 7932,
            "y": 700,
            "size": 44,
            "at": "l2:join",
            "hl": [
              {
                "text": "một Đoàn",
                "at": "l2:one Bar"
              }
            ]
          },
          {
            "id": "e-cham",
            "t": "text",
            "text": "Chậm mà chắc",
            "x": 8872,
            "y": 700,
            "size": 46,
            "at": "l3:slow",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Who signs it? Since July first, twenty twenty-five, under a new decree, the provincial People's Committee chair.",
          "sub": "Ai cấp? Từ 01/7/2025, theo Nghị định 121/2025/NĐ-CP, Chủ tịch UBND cấp tỉnh cấp Chứng chỉ.",
          "keys": [
            "Chủ tịch UBND cấp tỉnh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Certificate in hand, you choose and join one Bar Association, Article twenty.",
          "sub": "Có Chứng chỉ rồi, chọn gia nhập một Đoàn luật sư theo Điều 20.",
          "keys": [
            "một Đoàn luật sư"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Exam, certificate, Bar. Slow but sure, Uncle?",
          "sub": "Kiểm tra, Chứng chỉ, Đoàn. Chậm mà chắc hả Bác?",
          "face": "happy"
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Có thẻ rồi, cuối tuần nhận thêm khách ngoài được không?",
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
          "say": "Card in hand, can you take outside clients on weekends?",
          "sub": "Có thẻ rồi, cuối tuần nhận thêm khách ngoài được không?",
          "keys": [
            "nhận thêm khách ngoài"
          ]
        }
      ],
      "ref": "p15"
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
            "at": "l4",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Sáu · Luật sư nội bộ",
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
                  "id": "dung",
                  "side": "left",
                  "pose": "thumb"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "identification-card"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Friday",
            "caption": "Chiều thứ Sáu · phòng pháp chế",
            "icon": "identification-card"
          },
          {
            "id": "f-23",
            "t": "text",
            "text": "Điều 23: hai hình thức",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l2:twenty-three"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "1. trong tổ chức hành nghề",
            "x": 60,
            "y": 1320,
            "size": 44,
            "at": "l2:inside"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "2. cá nhân, theo HĐLĐ (Điều 49)",
            "x": 60,
            "y": 1385,
            "size": 44,
            "at": "l2:individual",
            "color": "accent",
            "hl": [
              {
                "text": "cá nhân",
                "at": "l2:individual"
              }
            ]
          },
          {
            "id": "f-50",
            "t": "text",
            "text": "→ đăng ký ở Sở Tư pháp",
            "x": 60,
            "y": 1470,
            "size": 44,
            "at": "l3:Department of Justice",
            "hl": [
              {
                "text": "Sở Tư pháp",
                "at": "l3:Department of Justice"
              }
            ]
          },
          {
            "id": "f-50s",
            "t": "text",
            "text": "Luật Luật sư, Điều 23, 49, 50",
            "x": 60,
            "y": 1530,
            "size": 26,
            "at": "l3",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "f-dung",
            "t": "text",
            "text": "Dũng: “cuối tuần nhận khách!”",
            "x": 60,
            "y": 1710,
            "size": 44,
            "at": "l4:outside clients",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: Friday. Thảo pictures the card in her pocket.",
          "sub": "Chặng bốn: chiều thứ Sáu. Thảo hình dung tấm thẻ đã nằm trong túi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article twenty-three: practise inside a law practice, or as an individual on a job contract.",
          "sub": "Điều 23: hành nghề trong tổ chức hành nghề luật sư, hoặc cá nhân theo Điều 49, làm theo hợp đồng lao động cho tổ chức khác."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In-house lawyers who stay take form two, and register with the Department of Justice.",
          "sub": "Pháp chế ở lại công ty đi hình thức hai, đăng ký tại Sở Tư pháp theo Điều 50.",
          "keys": [
            "Sở Tư pháp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Card in hand, I'll take outside clients on weekends. Okay, let's go!",
          "sub": "Có thẻ rồi, cuối tuần anh nhận thêm khách ngoài. Ok, làm luôn!",
          "face": "happy"
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu lầm thường gặp",
        "wrong": "Có thẻ pháp chế, cuối tuần nhận khách ngoài",
        "right": "Chỉ phục vụ đơn vị đã ký hợp đồng lao động",
        "wrongIllus": "briefcase",
        "rightIllus": "office-building"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Weekend clients on an in-house card? A common myth.",
          "sub": "Thẻ pháp chế, cuối tuần nhận khách? Hiểu lầm thường gặp."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Article forty-nine, clause three: only your employer.",
          "sub": "Khoản 3 Điều 49: chỉ đơn vị đã ký hợp đồng lao động.",
          "keys": [
            "chỉ đơn vị đã ký hợp đồng lao động"
          ]
        }
      ],
      "ref": "p15"
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
            "fit": [
              "f-ex",
              "f-one"
            ],
            "zoom": 1.1,
            "ms": 800
          },
          {
            "at": "l3",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-dx",
            "t": "strike",
            "over": "f-dung",
            "at": "l1"
          },
          {
            "id": "f-one",
            "t": "text",
            "text": "1 thẻ = 1 khách: chính công ty",
            "x": 60,
            "y": 1600,
            "size": 52,
            "at": "l2:one client",
            "color": "accent",
            "hl": [
              {
                "text": "chính công ty",
                "at": "l2:company itself"
              }
            ]
          },
          {
            "id": "f-ex",
            "t": "text",
            "text": "Ngoại lệ: tố tụng hình sự theo yêu cầu cơ quan tiến hành tố tụng · trợ giúp pháp lý do Đoàn phân công",
            "x": 60,
            "y": 1780,
            "size": 26,
            "at": "l1:exceptions",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "f-firm",
            "t": "text",
            "text": "Khách riêng → vào tổ chức hành nghề",
            "x": 60,
            "y": 1825,
            "size": 26,
            "at": "l1:private",
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
          "say": "Few exceptions: criminal cases on request, legal aid from the Bar. Private clients? Join a law practice.",
          "sub": "Vài ngoại lệ: tố tụng hình sự theo yêu cầu cơ quan tiến hành tố tụng, trợ giúp pháp lý do Đoàn phân công. Muốn khách riêng thì vào tổ chức hành nghề."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So an in-house card serves one client: the company itself.",
          "sub": "Thẻ trong túi pháp chế là thẻ phục vụ một khách hàng: chính công ty.",
          "keys": [
            "chính công ty"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Registration, and clashes like secrecy or pressure from above, get later lessons.",
          "sub": "Thủ tục đăng ký, và chỗ hai vai va nhau như bảo mật, sức ép cấp trên: có bài riêng."
        }
      ],
      "ref": "p15,p16,p17"
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
            "text": "⑤ Thứ Bảy · Thẻ đáng giá gì?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:stop five"
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
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "balance-scale",
                "notebook"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
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
            "at": "l1:Saturday",
            "caption": "Sáng thứ Bảy · nhà Thảo",
            "icon": "balance-scale"
          },
          {
            "id": "g-22",
            "t": "text",
            "text": "Điều 22: đại diện khách hàng",
            "x": 2028,
            "y": 1250,
            "size": 44,
            "at": "l2:represent"
          },
          {
            "id": "g-22a",
            "t": "text",
            "text": "dân sự · KDTM · lao động · hành chính",
            "x": 2028,
            "y": 1315,
            "size": 40,
            "at": "l2:civil",
            "color": "muted"
          },
          {
            "id": "g-22b",
            "t": "text",
            "text": "+ tư vấn pháp luật",
            "x": 2028,
            "y": 1375,
            "size": 40,
            "at": "l2:advise"
          },
          {
            "id": "g-8",
            "t": "text",
            "text": "Giữ thẻ: bồi dưỡng ≥ 8 giờ/năm",
            "x": 2028,
            "y": 1470,
            "size": 46,
            "at": "l3:eight hours",
            "color": "coral",
            "hl": [
              {
                "text": "≥ 8 giờ/năm",
                "at": "l3:eight hours"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Luật Luật sư, Điều 22, khoản 2 Điều 21 · TT 02/2019/TT-BTP",
            "x": 2028,
            "y": 1540,
            "size": 26,
            "at": "l3",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "g-sat",
            "t": "text",
            "text": "chưa hết một ngày thứ Bảy",
            "x": 2028,
            "y": 1710,
            "size": 46,
            "at": "l4:Saturday",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: Saturday. What's the card worth, and what does keeping it cost?",
          "sub": "Chặng năm: sáng thứ Bảy. Thẻ đáng giá gì, và giữ thẻ tốn gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lawyers represent clients in civil, business, labour and administrative cases, and advise.",
          "sub": "Điều 22: luật sư đại diện khách hàng trong vụ án dân sự, kinh doanh thương mại, lao động, hành chính, và tư vấn pháp luật."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In return, compulsory training. Circular two of twenty nineteen: at least eight hours a year.",
          "sub": "Đổi lại là bồi dưỡng bắt buộc. Thông tư 02/2019/TT-BTP: tối thiểu 8 giờ mỗi năm.",
          "keys": [
            "8 giờ mỗi năm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Eight hours a year. Less than one Saturday!",
          "sub": "Tám giờ một năm. Chưa hết một ngày thứ Bảy!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Its career value? A later lesson.",
          "sub": "Thẻ giúp gì đường lên trưởng phòng, chi phí duy trì: có bài riêng."
        }
      ],
      "ref": "p18,p19"
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
            "at": "l3",
            "fit": [
              "h-4",
              "h-2"
            ],
            "zoom": 1.1,
            "ms": 800
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
            "text": "⑥ Chủ nhật · Luật đang sửa",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:stop six",
            "hl": [
              {
                "text": "Luật đang sửa",
                "at": "l1:amended"
              }
            ]
          },
          {
            "id": "h-cl",
            "t": "illus",
            "name": "classical-building",
            "x": 5386,
            "y": 1130,
            "size": 180,
            "at": "l2:session"
          },
          {
            "id": "h-kh",
            "t": "text",
            "text": "Kiểm lại sau kỳ họp 17/10 – 21/11/2026",
            "x": 3996,
            "y": 1250,
            "size": 50,
            "at": "l2:check",
            "color": "coral",
            "hl": [
              {
                "text": "17/10 – 21/11/2026",
                "at": "l2:October"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Dự thảo: 4 bước",
            "x": 3996,
            "y": 1370,
            "size": 60,
            "at": "l3:four"
          },
          {
            "id": "h-ar",
            "t": "arrow",
            "from": [
              4496,
              1410
            ],
            "to": [
              4696,
              1410
            ],
            "at": "l3:two",
            "stroke": 6
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "2 bước",
            "x": 4736,
            "y": 1370,
            "size": 60,
            "at": "l3:two",
            "color": "accent",
            "hl": [
              {
                "text": "2 bước",
                "at": "l3:two"
              }
            ]
          },
          {
            "id": "h-ex",
            "t": "text",
            "text": "kiểm tra + Chứng chỉ → thi quốc gia",
            "x": 3996,
            "y": 1480,
            "size": 46,
            "at": "l3:merging",
            "hl": [
              {
                "text": "thi quốc gia",
                "at": "l3:national exam"
              }
            ]
          },
          {
            "id": "h-now",
            "t": "text",
            "text": "Chuỗi bài: văn bản hiệu lực 10/2026",
            "x": 3996,
            "y": 1580,
            "size": 42,
            "at": "l4:in force",
            "color": "muted"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Tạp chí Dân chủ và Pháp luật, 29/8/2026",
            "x": 3996,
            "y": 1660,
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
          "say": "Stop six: Sunday. A twist: the Law on Lawyers is being amended.",
          "sub": "Chặng sáu: Chủ nhật. Một khúc quanh: Luật Luật sư đang được sửa đổi.",
          "keys": [
            "đang được sửa đổi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check again after the Assembly session, October seventeen to November twenty-one.",
          "sub": "Cần kiểm lại sau kỳ họp Quốc hội từ 17/10 đến 21/11/2026."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A press report says the draft cuts four steps to two, merging exam and certificate into a national exam.",
          "sub": "Theo Tạp chí Dân chủ và Pháp luật (29/8/2026), dự thảo đề xuất rút bốn bước xuống hai, gộp kiểm tra tập sự và cấp Chứng chỉ thành kỳ thi quốc gia.",
          "keys": [
            "kỳ thi quốc gia"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "This series uses the rules in force in October twenty twenty-six.",
          "sub": "Các con số trong chuỗi này theo văn bản đang có hiệu lực tại tháng 10/2026."
        }
      ],
      "ref": "p20"
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
            "text": "Tối Chủ nhật · 5 việc bắt đầu",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:five",
            "hl": [
              {
                "text": "5 việc",
                "at": "l1:five"
              }
            ]
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l2:check",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1242,
            "size": 58,
            "at": "l2:check+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Kiểm bằng luật, hạn hồ sơ",
            "x": 6034,
            "y": 1252,
            "size": 50,
            "at": "l2:check+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1370,
            "w": 46,
            "h": 46,
            "at": "l2:schedules",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1352,
            "size": 58,
            "at": "l2:schedules+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Nói với trưởng phòng về lịch",
            "x": 6034,
            "y": 1362,
            "size": 50,
            "at": "l2:schedules+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1480,
            "w": 46,
            "h": 46,
            "at": "l4:list",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1462,
            "size": 58,
            "at": "l4:list+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Danh sách nơi nhận tập sự",
            "x": 6034,
            "y": 1472,
            "size": 50,
            "at": "l4:list+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1590,
            "w": 46,
            "h": 46,
            "at": "l4:budget",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1572,
            "size": 58,
            "at": "l4:budget+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Dự trù học phí, phí giữ thẻ",
            "x": 6034,
            "y": 1582,
            "size": 50,
            "at": "l4:budget+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1700,
            "w": 46,
            "h": 46,
            "at": "l6",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1682,
            "size": 58,
            "at": "l6+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Theo dõi Luật sửa đổi",
            "x": 6034,
            "y": 1692,
            "size": 50,
            "at": "l6+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sunday night: five tasks.",
          "sub": "Tối Chủ nhật: năm việc.",
          "keys": [
            "năm việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "One: check my degree and the deadline. Two: talk schedules with Cô Hoa.",
          "sub": "Một: kiểm bằng cử nhân luật, hạn nộp hồ sơ. Hai: nói với Cô Hoa về lịch học, lịch tập sự."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Three: list possible firms. Four: budget fees and card costs.",
          "sub": "Ba: lập danh sách văn phòng, công ty luật có thể nhận tập sự. Bốn: dự trù học phí, chi phí giữ thẻ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Five: follow the amended law.",
          "sub": "Năm: theo dõi Luật Luật sư sửa đổi sau kỳ họp."
        }
      ],
      "ref": "p21"
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
            "text": "Sáng thứ Hai tuần sau",
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
              "set": "office",
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
                  "pose": "thumb"
                }
              ],
              "props": [
                "hot-beverage",
                "clipboard"
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
            "at": "l1:same",
            "caption": "Sáng thứ Hai tuần sau · phòng pháp chế",
            "icon": "clipboard"
          },
          {
            "id": "j-12",
            "t": "text",
            "text": "12 tháng?",
            "x": 7932,
            "y": 1260,
            "size": 70,
            "at": "l4:twelve",
            "color": "muted"
          },
          {
            "id": "j-12x",
            "t": "strike",
            "over": "j-12",
            "at": "l4:or"
          },
          {
            "id": "j-2y",
            "t": "text",
            "text": "Hơn 2 năm · 4 chặng",
            "x": 7932,
            "y": 1360,
            "size": 64,
            "at": "l4:more than",
            "color": "accent",
            "hl": [
              {
                "text": "4 chặng",
                "at": "l4:four stages"
              }
            ]
          },
          {
            "id": "j-ok",
            "t": "text",
            "text": "Công ty cùng biết, cùng sắp lịch",
            "x": 7932,
            "y": 1470,
            "size": 44,
            "at": "l3:calendar",
            "hl": [
              {
                "text": "cùng sắp lịch",
                "at": "l3:calendar"
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
          "say": "Monday again. Same office, same coffee.",
          "sub": "Lại sáng thứ Hai. Vẫn phòng ấy, vẫn ly cà phê ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Cô Hoa, four stages, over two years. Please help me plan my schedule.",
          "sub": "Cô Hoa, bốn chặng, hơn hai năm. Em cần cô cùng sắp lịch ạ.",
          "face": "happy",
          "to": "hoa"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Good. Put it on my calendar. Okay!",
          "sub": "Tốt. Đưa lịch cho cô. Rồi, vậy nha!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Twelve months, or more than two years? Four stages. Slow but sure, and the boss knows.",
          "sub": "Mười hai tháng hay hơn hai năm? Bốn chặng. Chậm mà chắc, và sếp cũng biết.",
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
      "ref": "outro,p2"
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
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
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
            "x": 3528,
            "y": 30,
            "at": "l1"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7464,
            "y": 30,
            "at": "l2"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1560,
            "y": 1120,
            "at": "l3"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Kiến thức nghề tham khảo, không phải tư vấn cho trường hợp riêng. Luật Luật sư đang sửa đổi; đối chiếu văn bản mới nhất.",
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
          "say": "Step back. Four stages in a line.",
          "sub": "Lùi lại. Bốn chặng nối đuôi nhau.",
          "keys": [
            "Bốn chặng nối đuôi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twenty hours a week are easier when the company knows.",
          "sub": "Hai mươi giờ một tuần dễ giữ hơn khi công ty cùng biết.",
          "keys": [
            "công ty cùng biết"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the in-house card serves one client: your company.",
          "sub": "Và thẻ của pháp chế phục vụ một khách hàng: chính công ty.",
          "keys": [
            "chính công ty"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p2,p11,p16"
    },
    {
      "id": "s21",
      "module": "QUIZ-01",
      "data": {
        "q": "A friend asks you, an in house lawyer, to handle a weekend case, what applies?",
        "options": [
          "You generally cannot serve outside clients, apart from a few legal exceptions",
          "You may accept it freely, because weekends are outside the employment contract",
          "You may accept it if your manager signs a short note of consent"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "briefcase",
        "why": "Khoản 3 Điều 49 không cho luật sư hành nghề cá nhân cung cấp dịch vụ cho người khác; ngoại lệ chỉ vài trường hợp như trợ giúp pháp lý do Đoàn phân công."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A friend asks you, an in-house lawyer, to handle a weekend case. What applies?",
          "sub": "Bạn bè nhờ bạn, luật sư hành nghề cá nhân, lo một vụ cuối tuần. Quy định nào áp dụng?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "You generally cannot serve outside clients, apart from a few legal exceptions.",
          "sub": "Nói chung không được phục vụ khách ngoài, trừ vài ngoại lệ luật định."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Article forty-nine, clause three: one client, even on weekends.",
          "sub": "Khoản 3 Điều 49: một khách hàng, cả cuối tuần."
        }
      ],
      "beats": {
        "after": 800
      },
      "ref": "questions[25]"
    },
    {
      "id": "s22",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: mở thông báo tuyển sinh mới nhất",
        "sub": "Rồi đọc bài 1: lớp buổi tối hay cuối tuần?"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, open the latest intake notice, then read lesson one.",
          "sub": "Hôm nay mở thông báo tuyển sinh mới nhất của Học viện Tư pháp, rồi đọc bài 1: học buổi tối hay cuối tuần?",
          "face": "laugh",
          "keys": [
            "thông báo tuyển sinh mới nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "General knowledge, not advice for your case. The law is changing; check the latest text.",
          "sub": "Kiến thức nghề tham khảo, không phải tư vấn cho trường hợp riêng. Luật đang sửa, hãy đối chiếu văn bản mới nhất."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI, dựng theo hạt nhân #136 + biến thể #144 (bang-trang-kit). HOOK-21: đoán sai “12 tháng hay hơn 2 năm?” (p3) → lật ngay, nhắc lại ở khép vòng. Dòng thời gian: một tuần Thảo lập lộ trình — A sáng thứ Hai (Cô Hoa gợi ý), B câu hỏi + Điều 10, 11 + bản đồ 4 chặng (p1–p3), C ① tối thứ Hai lớp đào tạo (p4–p5), Khoan đã! tối thứ Ba vừa học vừa đăng ký tập sự (p6–p7), D ② trưa thứ Tư tập sự (p8–p9) + BRK-03 20 giờ + Dũng hai cách (p10–p11), E ③ tối thứ Năm Bác Bình: kiểm tra, Chứng chỉ, Đoàn (p12–p13), BRK-07 rehook, F ④ thứ Sáu hành nghề cá nhân (p14) + BRK-04 hiểu lầm khách ngoài (p15–p17), G ⑤ thứ Bảy giá trị + 8 giờ bồi dưỡng (p18–p19), H ⑥ Chủ nhật luật đang sửa (p20), I tối Chủ nhật 5 việc (p21), J sáng thứ Hai tuần sau khép vòng, tóm tắt lùi xa. Nhân vật theo w145/_series/bar-inhouse-to-lawyer.md: chị Thảo (p6) giữ; anh Khoa (p10) → Dũng. Số/điều chỉ từ bài: Điều 10, 11, 12, 14, 17, 20, 21, 22, 23, 49, 50 Luật Luật sư; TT 10/2021 Điều 3, 10, 12, 18; NĐ 121/2025 (01/7/2025); TT 02/2019 (8 giờ/năm); học phí 36.600.000 / 29.280.000 đồng; ≥ 50 điểm; 6 tháng; kỳ họp 17/10–21/11/2026; 29/8/2026. Lưu ý chung (#133) ở tóm tắt + END. Câu đố questions[25].",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
