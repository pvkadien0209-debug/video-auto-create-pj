// bar-standards-conditions--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "bar-standards-conditions--w01",
  "hook": "HOOK-20",
  "unit": {
    "audience": "bar-roadmap",
    "slug": "bar-standards-conditions",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Tiêu chuẩn để trở thành luật sư gồm những gì?",
    "series": "Bốn bước thành luật sư — lộ trình theo Luật Luật sư hiện hành cho cử nhân luật"
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
            "id": "a-7",
            "t": "text",
            "text": "7 tiêu chuẩn",
            "x": 60,
            "y": 90,
            "size": 140,
            "at": "l1:Seven",
            "color": "accent",
            "hl": [
              {
                "text": "7 tiêu chuẩn",
                "at": "l1:standards"
              }
            ]
          },
          {
            "id": "a-4",
            "t": "text",
            "text": "4 nhóm · mỗi nhóm một tờ giấy",
            "x": 70,
            "y": 290,
            "size": 52,
            "at": "l1:groups"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "Bằng cử nhân = dòng 1/7",
            "x": 70,
            "y": 380,
            "size": 56,
            "at": "l2:first",
            "color": "coral",
            "hl": [
              {
                "text": "dòng 1/7",
                "at": "l2:first"
              }
            ]
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "Ba chỗ hay sai ↓",
            "x": 70,
            "y": 480,
            "size": 56,
            "at": "l3:three"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Theo Luật Luật sư (VBHN 03/VBHN-VPQH), Điều 10, 11, 17",
            "x": 60,
            "y": 720,
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
          "say": "Seven standards, four groups, and each group proven by a paper.",
          "sub": "Bảy tiêu chuẩn, bốn nhóm, mỗi nhóm chứng minh bằng một loại giấy.",
          "keys": [
            "Bảy tiêu chuẩn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your law degree? Only the first line of seven.",
          "sub": "Bằng cử nhân luật? Chỉ là dòng đầu trong bảy dòng.",
          "keys": [
            "dòng đầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sounds simple. But there are three places where people slip.",
          "sub": "Nghe đơn giản. Nhưng có ba chỗ người ta hay trượt chân.",
          "keys": [
            "ba chỗ"
          ]
        }
      ],
      "ref": "intro,p2"
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
            "y": 40,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "thinking"
                }
              ],
              "props": [
                "page-facing-up",
                "pencil"
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
            "at": "l1",
            "caption": "7 giờ sáng thứ Bảy · tờ giấy trắng",
            "icon": "page-facing-up"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Biết người biết ta…”",
            "x": 900,
            "y": 640,
            "size": 50,
            "at": "l4:yourself",
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
          "say": "Meet Lan again.",
          "sub": "Lại là Lan đây."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fresh law graduate. Last week she mapped four stages on paper. Today, one Saturday and one blank sheet.",
          "sub": "Cử nhân luật mới ra trường. Tuần trước vẽ bốn chặng. Hôm nay, một ngày thứ Bảy và một tờ giấy trắng.",
          "keys": [
            "một tờ giấy trắng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Before I apply for anything, am I even ready to start? Let me write it down.",
          "sub": "Trước khi nộp gì, mình đã đủ điều kiện xuất phát chưa? Để em ghi lại đã.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Know the enemy, know yourself. Today, Lan studies herself.",
          "sub": "“Biết người biết ta, trăm trận trăm thắng.” Hôm nay Lan học về chính mình.",
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
      "ref": "intro,p18"
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
            "text": "Tiêu chuẩn luật sư gồm gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:standards",
            "hl": [
              {
                "text": "gồm gì",
                "at": "l1:standards"
              }
            ]
          },
          {
            "id": "b-10",
            "t": "text",
            "text": "Điều 10: 7 ý",
            "x": 2028,
            "y": 160,
            "size": 56,
            "at": "l2:ten",
            "color": "accent",
            "hl": [
              {
                "text": "Điều 10",
                "at": "l2:ten"
              }
            ]
          },
          {
            "id": "b-10a",
            "t": "text",
            "text": "công dân · trung thành · đạo đức",
            "x": 2028,
            "y": 240,
            "size": 38,
            "at": "l2:citizen"
          },
          {
            "id": "b-10b",
            "t": "text",
            "text": "bằng luật · học nghề · tập sự",
            "x": 2028,
            "y": 295,
            "size": 38,
            "at": "l2:degree"
          },
          {
            "id": "b-g0",
            "t": "box",
            "x": 2028,
            "y": 380,
            "w": 380,
            "h": 100,
            "at": "l3:person",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-g1",
            "t": "box",
            "x": 2438,
            "y": 380,
            "w": 380,
            "h": 100,
            "at": "l3:education",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-g2",
            "t": "box",
            "x": 2848,
            "y": 380,
            "w": 380,
            "h": 100,
            "at": "l3:profession",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-g3",
            "t": "box",
            "x": 3258,
            "y": 380,
            "w": 380,
            "h": 100,
            "at": "l3:health",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-gt0",
            "t": "text",
            "text": "Con người",
            "x": 2058,
            "y": 398,
            "size": 48,
            "at": "l3:person+200"
          },
          {
            "id": "b-gt1",
            "t": "text",
            "text": "Học vấn",
            "x": 2468,
            "y": 398,
            "size": 48,
            "at": "l3:education+200"
          },
          {
            "id": "b-gt2",
            "t": "text",
            "text": "Nghề",
            "x": 2878,
            "y": 398,
            "size": 48,
            "at": "l3:profession+200"
          },
          {
            "id": "b-gt3",
            "t": "text",
            "text": "Sức khoẻ",
            "x": 3288,
            "y": 398,
            "size": 48,
            "at": "l3:health+200"
          },
          {
            "id": "b-11",
            "t": "text",
            "text": "Điều 11: + chứng chỉ + gia nhập Đoàn",
            "x": 2028,
            "y": 540,
            "size": 44,
            "at": "l4:eleven",
            "hl": [
              {
                "text": "+ chứng chỉ",
                "at": "l4:certificate"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Luật Luật sư (VBHN 03/VBHN-VPQH), Điều 10, 11, 17",
            "x": 2028,
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
          "say": "So, what are the standards for becoming a lawyer?",
          "sub": "Vậy tiêu chuẩn để trở thành luật sư gồm những gì?",
          "keys": [
            "gồm những gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article ten: a loyal citizen who obeys the law, good character, a law degree, training, probation, health.",
          "sub": "Điều 10: công dân trung thành, tuân thủ pháp luật, đạo đức tốt, bằng cử nhân luật, đào tạo nghề, tập sự, sức khoẻ.",
          "keys": [
            "Điều 10"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four groups to remember: person, education, profession, health.",
          "sub": "Gom bốn nhóm cho dễ nhớ: con người, học vấn, nghề, sức khoẻ.",
          "keys": [
            "bốn nhóm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And Article eleven: to practise, add a certificate and a bar association.",
          "sub": "Điều 11 nói tiếp: muốn hành nghề, thêm chứng chỉ và gia nhập một Đoàn luật sư.",
          "keys": [
            "chứng chỉ"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 8 giờ · Công dân",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:eight"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 110,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
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
                "identification-card"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:coffee",
            "caption": "8 giờ sáng · cà phê với Bác Bình",
            "icon": "hot-beverage"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Công dân Việt Nam",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l3:citizen",
            "color": "accent",
            "hl": [
              {
                "text": "Công dân",
                "at": "l3:citizen"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Không thường trú tại VN",
            "x": 3996,
            "y": 260,
            "size": 46,
            "at": "l4:permanently",
            "color": "coral"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "→ không cấp chứng chỉ",
            "x": 4036,
            "y": 330,
            "size": 46,
            "at": "l4:granted",
            "color": "coral",
            "hl": [
              {
                "text": "không cấp",
                "at": "l4:granted"
              }
            ]
          },
          {
            "id": "c-cl",
            "t": "text",
            "text": "điểm c khoản 4 Điều 17",
            "x": 4036,
            "y": 400,
            "size": 36,
            "at": "l4:Article",
            "color": "muted"
          },
          {
            "id": "c-k28",
            "t": "text",
            "text": "Khoá 28: công dân, thường trú VN,",
            "x": 3996,
            "y": 500,
            "size": 38,
            "at": "l5:notice"
          },
          {
            "id": "c-k28b",
            "t": "text",
            "text": "có đạo đức tốt",
            "x": 3996,
            "y": 555,
            "size": 38,
            "at": "l5:character"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Thông báo tuyển sinh khoá 28 năm 2026, Học viện Tư pháp",
            "x": 3996,
            "y": 720,
            "size": 26,
            "at": "l5",
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
          "say": "First stop: eight o'clock, coffee with Uncle Bình, her uncle and a lawyer for decades.",
          "sub": "Chặng một: tám giờ, cà phê với Bác Bình, bác ruột Lan, làm luật sư mấy chục năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He reads laws the way others read menus. Slowly, every line.",
          "sub": "Bác đọc luật như người khác đọc thực đơn. Chậm, từng dòng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Line one is easy: you must be a Vietnamese citizen.",
          "sub": "Dòng một dễ: phải là công dân Việt Nam.",
          "keys": [
            "công dân Việt Nam"
          ],
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "But Article seventeen adds a lock. If you do not reside permanently in Vietnam, no certificate is granted.",
          "sub": "Nhưng Điều 17 thêm một chốt: không thường trú tại Việt Nam thì không được cấp chứng chỉ.",
          "keys": [
            "không thường trú"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The academy notice for intake twenty-eight asks the same: citizens residing in Vietnam, with good character.",
          "sub": "Thông báo khoá 28 cũng nhận công dân Việt Nam thường trú tại Việt Nam, có đạo đức tốt."
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
          },
          {
            "at": "l4",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 9 giờ · Phẩm chất",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 110,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "hot-beverage",
                "notebook"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "binh",
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
            "at": "l1:nine",
            "caption": "9 giờ · cốc cà phê thứ hai",
            "icon": "notebook"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Hồ sơ chứng chỉ:",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l2:file"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "phiếu lý lịch tư pháp",
            "x": 6004,
            "y": 240,
            "size": 56,
            "at": "l2:criminal",
            "color": "accent",
            "hl": [
              {
                "text": "lý lịch tư pháp",
                "at": "l2:criminal"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Chủ tịch UBND tỉnh: thẩm tra",
            "x": 5964,
            "y": 350,
            "size": 44,
            "at": "l3:chairman",
            "hl": [
              {
                "text": "thẩm tra",
                "at": "l3:reviews"
              }
            ]
          },
          {
            "id": "d-3b",
            "t": "text",
            "text": "tuân thủ pháp luật · đạo đức",
            "x": 6004,
            "y": 410,
            "size": 40,
            "at": "l3:conduct"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Báo cáo tập sự: nhận xét",
            "x": 5964,
            "y": 500,
            "size": 40,
            "at": "l4:report"
          },
          {
            "id": "d-4b",
            "t": "text",
            "text": "LS hướng dẫn · tổ chức · Đoàn",
            "x": 6004,
            "y": 560,
            "size": 40,
            "at": "l4:supervisor"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Luật Luật sư (VBHN 03/VBHN-VPQH), khoản 1 Điều 17 · NĐ 121/2025/NĐ-CP (theo Tạp chí Luật sư Việt Nam) · Thông tư 10/2021/TT-BTP",
            "x": 5964,
            "y": 720,
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
          "say": "Second stop: nine o'clock, second coffee. Good character. How do you prove that on paper?",
          "sub": "Chặng hai: chín giờ, cốc cà phê thứ hai. Đạo đức tốt. Chứng minh trên giấy kiểu gì?",
          "keys": [
            "Đạo đức tốt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The certificate file includes a criminal record form.",
          "sub": "Hồ sơ cấp chứng chỉ có phiếu lý lịch tư pháp.",
          "keys": [
            "phiếu lý lịch tư pháp"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Under Decree one twenty-one, the provincial chairman reviews your conduct and character, with other agencies.",
          "sub": "Theo Nghị định 121/2025, Chủ tịch UBND cấp tỉnh chủ trì, phối hợp thẩm tra việc tuân thủ pháp luật và đạo đức."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "And during probation, your report carries comments from your supervisor, the firm, and the bar association.",
          "sub": "Trong năm tập sự, báo cáo có nhận xét của luật sư hướng dẫn, xác nhận của tổ chức hành nghề và đánh giá của Đoàn về đạo đức.",
          "keys": [
            "đánh giá của Đoàn"
          ],
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "So my conduct is watched for a whole year, not only on the day I hand in papers.",
          "sub": "Vậy cả năm tập sự người ta đều nhìn, không chỉ ngày nộp hồ sơ.",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Exactly. Character is not a form you fill once. It is a habit people watch.",
          "sub": "Đúng vậy. Phẩm chất không phải tờ khai điền một lần. Nó là thói quen người ta nhìn thấy.",
          "keys": [
            "thói quen"
          ]
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s06",
      "module": "BRK-10",
      "data": {
        "quote": "Đạo đức nghề được chấm từng ngày, không chỉ trên một tờ phiếu",
        "mark": "chấm từng ngày",
        "by": "Rút ra · bài Tiêu chuẩn luật sư",
        "illus": "balance-scale"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ethics is marked every day, not on one sheet.",
          "sub": "Đạo đức nghề được chấm từng ngày, không chỉ trên một tờ phiếu.",
          "keys": [
            "chấm từng ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Write that one down.",
          "sub": "Ghi câu này lại."
        }
      ],
      "ref": "p5,p6"
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
            "at": 150,
            "fit": "E",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 10 giờ · Bằng nào?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:ten"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Cử nhân luật ✓",
            "x": 7932,
            "y": 170,
            "size": 60,
            "at": "l2:bachelor",
            "color": "accent"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Thạc sĩ luật ✓",
            "x": 7932,
            "y": 260,
            "size": 60,
            "at": "l2:master"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "TT 10 Điều 3 · Điều 17",
            "x": 7932,
            "y": 350,
            "size": 40,
            "at": "l2:Circular",
            "color": "muted"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Bằng nước ngoài: cần công nhận",
            "x": 7932,
            "y": 440,
            "size": 46,
            "at": "l3:abroad",
            "color": "coral",
            "hl": [
              {
                "text": "cần công nhận",
                "at": "l3:recognised"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Luật Luật sư (VBHN 03/VBHN-VPQH), Điều 10, 13, 17 · Thông tư 10/2021/TT-BTP · Thông báo khoá 28",
            "x": 7932,
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
          "say": "Third stop: ten o'clock. Which degree counts?",
          "sub": "Chặng ba: mười giờ. Bằng nào được tính?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A bachelor or a master of law. Both Circular ten and Article seventeen accept them.",
          "sub": "Cử nhân luật hoặc thạc sĩ luật. Thông tư 10 và khoản 1 Điều 17 đều nhận.",
          "keys": [
            "thạc sĩ luật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The intake notice adds: a degree from abroad must be recognised.",
          "sub": "Thông báo khoá 28 thêm: bằng do nước ngoài cấp cần được công nhận.",
          "keys": [
            "cần được công nhận"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Lan ticks line two and smiles. Then a dangerous idea walks in.",
          "sub": "Lan đánh dấu dòng hai, mỉm cười. Rồi một ý tưởng nguy hiểm bước vào.",
          "keys": [
            "ý tưởng nguy hiểm"
          ]
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "10 giờ · Lan tính đường tắt",
        "actors": [
          {
            "id": "lan",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Có thạc sĩ luật thì được miễn khoá đào tạo nghề",
          "why": "Điều 13 không có tên thạc sĩ luật trong danh sách miễn.",
          "rule": "Đọc đúng danh sách miễn"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "A master's counts? Then I do one and skip training!",
          "sub": "Thạc sĩ cũng được tính? Vậy em học thạc sĩ cho khỏi học nghề!",
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
          "say": "Article thirteen exempts judges, prosecutors, investigators, law professors, doctors of law.",
          "sub": "Điều 13 miễn cho thẩm phán, kiểm sát viên, điều tra viên, giáo sư, phó giáo sư luật, tiến sĩ luật, một số ngạch cao cấp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Masters of law? Not on the list.",
          "sub": "Thạc sĩ luật? Không có tên.",
          "keys": [
            "Không có tên"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "lan",
          "say": "Okay. A master's counts, but training stays.",
          "sub": "Rồi. Thạc sĩ được tính là bằng, nhưng vẫn phải học nghề.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "A higher degree is not always a shorter road.",
          "sub": "Bằng cao hơn chưa chắc là đường ngắn hơn.",
          "phase": "redo",
          "keys": [
            "chưa chắc là đường ngắn hơn"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p8,p9"
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
            "text": "④ Trưa · Bằng nước ngoài",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:calls"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "lan",
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
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:Dũng",
            "caption": "Trưa thứ Bảy · Dũng gọi video",
            "icon": "world-map"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "Nộp ngay đợt này?",
            "x": 60,
            "y": 1260,
            "size": 54,
            "at": "l2:now",
            "color": "coral"
          },
          {
            "id": "f-b0",
            "t": "badge",
            "n": 1,
            "x": 90,
            "y": 1390,
            "at": "l4:recognition"
          },
          {
            "id": "f-s0",
            "t": "text",
            "text": "Công nhận văn bằng",
            "x": 140,
            "y": 1365,
            "size": 46,
            "at": "l4:recognition+200",
            "color": "accent",
            "hl": [
              {
                "text": "Công nhận",
                "at": "l4:recognition"
              }
            ]
          },
          {
            "id": "f-b1",
            "t": "badge",
            "n": 2,
            "x": 90,
            "y": 1480,
            "at": "l4:certified"
          },
          {
            "id": "f-s1",
            "t": "text",
            "text": "Chứng thực bằng",
            "x": 140,
            "y": 1455,
            "size": 46,
            "at": "l4:certified+200"
          },
          {
            "id": "f-b2",
            "t": "badge",
            "n": 3,
            "x": 90,
            "y": 1570,
            "at": "l4:admission"
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "Nộp hồ sơ xét tuyển",
            "x": 140,
            "y": 1545,
            "size": 46,
            "at": "l4:admission+200"
          },
          {
            "id": "f-key",
            "t": "text",
            "text": "Bằng nước ngoài: công nhận trước",
            "x": 60,
            "y": 1670,
            "size": 44,
            "at": "l5:extra",
            "hl": [
              {
                "text": "công nhận trước",
                "at": "l5:extra"
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
          "say": "Fourth stop: lunch. Her cousin Dũng calls. Law degree from abroad, patience of a microwave.",
          "sub": "Chặng bốn: buổi trưa. Em họ Dũng gọi. Học luật ở nước ngoài, kiên nhẫn ngang lò vi sóng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Sis, I'm sending my admission file right now. This round!",
          "sub": "Chị ơi, em nộp hồ sơ xét tuyển luôn. Ngay đợt này!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Wait. The notice says a foreign degree needs recognition first.",
          "sub": "Khoan. Thông báo ghi bằng nước ngoài cần được công nhận.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So the order is: get the recognition, then a certified copy, then the admission file.",
          "sub": "Vậy thứ tự là: làm thủ tục công nhận văn bằng, rồi chứng thực bằng, rồi mới nộp hồ sơ xét tuyển.",
          "keys": [
            "công nhận văn bằng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A foreign degree needs one extra step before the road begins.",
          "sub": "Bằng nước ngoài cần một bước công nhận trước khi vào lộ trình.",
          "keys": [
            "một bước công nhận"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 1500
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Học xong khoá nghề là xin được chứng chỉ?",
        "illus": "scroll"
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
          "say": "Finish the course, and you can ask for a certificate?",
          "sub": "Học xong khoá nghề là xin được chứng chỉ?",
          "keys": [
            "xin được chứng chỉ"
          ]
        }
      ],
      "ref": "p12,p14"
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
            "text": "⑤ Chiều · Ba tiêu chuẩn nghề",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:afternoon"
          },
          {
            "id": "g-r0",
            "t": "box",
            "x": 2028,
            "y": 1250,
            "w": 380,
            "h": 100,
            "at": "l2:twelve",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "g-r1",
            "t": "box",
            "x": 2438,
            "y": 1250,
            "w": 380,
            "h": 100,
            "at": "l3:fourteen",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "g-r2",
            "t": "box",
            "x": 2848,
            "y": 1250,
            "w": 380,
            "h": 100,
            "at": "l4:test",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "g-r3",
            "t": "box",
            "x": 3258,
            "y": 1250,
            "w": 380,
            "h": 100,
            "at": "l4:certificate",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "g-rt0",
            "t": "text",
            "text": "Đào tạo 12 th",
            "x": 2053,
            "y": 1268,
            "size": 46,
            "at": "l2:twelve+200"
          },
          {
            "id": "g-rt1",
            "t": "text",
            "text": "Tập sự 12 th",
            "x": 2463,
            "y": 1268,
            "size": 46,
            "at": "l3:fourteen+200"
          },
          {
            "id": "g-rt2",
            "t": "text",
            "text": "Kiểm tra",
            "x": 2873,
            "y": 1268,
            "size": 46,
            "at": "l4:test+200"
          },
          {
            "id": "g-rt3",
            "t": "text",
            "text": "Chứng chỉ",
            "x": 3283,
            "y": 1268,
            "size": 46,
            "at": "l4:certificate+200"
          },
          {
            "id": "g-10",
            "t": "text",
            "text": "Điều 10: “đã qua tập sự”",
            "x": 2028,
            "y": 1410,
            "size": 44,
            "at": "l4:only"
          },
          {
            "id": "g-17",
            "t": "text",
            "text": "Điều 17 cần: giấy kiểm tra",
            "x": 2028,
            "y": 1480,
            "size": 44,
            "at": "l4:needs",
            "color": "accent",
            "hl": [
              {
                "text": "giấy kiểm tra",
                "at": "l4:test"
              }
            ]
          },
          {
            "id": "g-16",
            "t": "text",
            "text": "Điều 16: miễn, giảm tập sự",
            "x": 2028,
            "y": 1570,
            "size": 44,
            "at": "l5:sixteen"
          },
          {
            "id": "g-16b",
            "t": "text",
            "text": "giảm 2/3 hoặc 1/2",
            "x": 2028,
            "y": 1635,
            "size": 40,
            "at": "l5:thirds",
            "color": "muted"
          },
          {
            "id": "g-16c",
            "t": "text",
            "text": "miễn tập sự → khỏi kiểm tra",
            "x": 2868,
            "y": 1635,
            "size": 40,
            "at": "l5:skip",
            "color": "muted"
          },
          {
            "id": "g-new",
            "t": "text",
            "text": "Cử nhân mới: thường không thuộc",
            "x": 2028,
            "y": 1710,
            "size": 44,
            "at": "l6:fresh",
            "color": "coral",
            "hl": [
              {
                "text": "thường không thuộc",
                "at": "l6:usually"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Luật Luật sư (VBHN 03/VBHN-VPQH), Điều 10, 12, 14, 15, 16, 17",
            "x": 2028,
            "y": 1810,
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
          "say": "Fifth stop: the afternoon. Three professional standards in a chain.",
          "sub": "Chặng năm: buổi chiều. Ba tiêu chuẩn nghề nối nhau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article twelve: twelve months of training, then a graduation certificate.",
          "sub": "Điều 12: đào tạo nghề mười hai tháng, xong được cấp Giấy chứng nhận tốt nghiệp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article fourteen: twelve months of probation at a law practice.",
          "sub": "Điều 14: tập sự mười hai tháng tại một tổ chức hành nghề luật sư."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Article ten only says probation done. But the file needs the test certificate, so in practice you must pass the test.",
          "sub": "Điều 10 chỉ ghi “đã qua tập sự”. Nhưng hồ sơ cần Giấy chứng nhận kiểm tra, nên thực tế phải đạt kỳ kiểm tra.",
          "keys": [
            "phải đạt kỳ kiểm tra"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Article sixteen exempts some senior people, or cuts probation by two thirds or a half. The exempt skip the test.",
          "sub": "Điều 16 miễn tập sự cho một số người, hoặc giảm hai phần ba, một nửa. Người được miễn tập sự không phải dự kiểm tra."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Fresh graduates usually do not qualify.",
          "sub": "Cử nhân mới tốt nghiệp thường không thuộc các nhóm này.",
          "keys": [
            "thường không thuộc"
          ]
        }
      ],
      "ref": "p12,p13"
    },
    {
      "id": "s12",
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
            "at": "l2:Hoa",
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
            "text": "⑥ Tua nhanh · Ở Đoàn",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:forward"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "file-folder",
                "clipboard"
              ],
              "camera": [
                {
                  "at": "l2:Hoa",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:forward",
            "caption": "Tua nhanh · bàn nhận hồ sơ Đoàn luật sư",
            "icon": "file-folder"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1270,
            "w": 46,
            "h": 46,
            "at": "l2:Degree",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1252,
            "size": 58,
            "at": "l2:Degree+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Bằng cử nhân",
            "x": 4066,
            "y": 1262,
            "size": 42,
            "at": "l2:Degree+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1350,
            "w": 46,
            "h": 46,
            "at": "l2:health",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1332,
            "size": 58,
            "at": "l2:health+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Giấy khám",
            "x": 4066,
            "y": 1342,
            "size": 42,
            "at": "l2:health+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1430,
            "w": 46,
            "h": 46,
            "at": "l2:graduation",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4002,
            "y": 1412,
            "size": 58,
            "at": "l2:graduation+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Giấy tốt nghiệp nghề",
            "x": 4066,
            "y": 1422,
            "size": 42,
            "at": "l2:graduation+200"
          },
          {
            "id": "h-miss",
            "t": "box",
            "x": 3996,
            "y": 1510,
            "w": 46,
            "h": 46,
            "at": "l3:line",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "h-missl",
            "t": "text",
            "text": "Giấy chứng nhận kiểm tra ✗",
            "x": 4066,
            "y": 1502,
            "size": 44,
            "at": "l3:missing",
            "color": "coral",
            "hl": [
              {
                "text": "✗",
                "at": "l3:missing"
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
          "say": "Let's fast forward a year. Lan has her training certificate and walks into the bar association.",
          "sub": "Tua nhanh một năm. Lan có giấy tốt nghiệp đào tạo nghề, bước vào Đoàn luật sư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Degree, health paper, graduation certificate. She asks for a practising certificate. This is Cô Hoa, who takes the files.",
          "sub": "Bằng cử nhân, giấy khám, giấy tốt nghiệp. Lan hỏi nộp hồ sơ cấp chứng chỉ. Đây là cô Hoa, cán bộ nhận hồ sơ.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Right. Article seventeen list. This line is missing: the probation test certificate.",
          "sub": "Rồi. Danh mục Điều 17. Còn thiếu dòng này: bản sao giấy chứng nhận kiểm tra kết quả tập sự.",
          "keys": [
            "Còn thiếu dòng này"
          ],
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "So there is still a year of probation, and a test, ahead of me.",
          "sub": "Vậy phía trước còn một năm tập sự và một kỳ kiểm tra.",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The training certificate opens the door to probation. Not to the practising certificate.",
          "sub": "Giấy tốt nghiệp khoá học mở cửa tập sự, chưa mở cửa chứng chỉ.",
          "keys": [
            "mở cửa tập sự"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 2600
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Giấy tốt nghiệp nghề mở cửa nào?",
        "labels": [
          "Sai",
          "Đúng"
        ],
        "wrong": "Mở cửa chứng chỉ",
        "right": "Mở cửa tập sự",
        "wrongIllus": "scroll",
        "rightIllus": "briefcase"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The certificate door? Not yet.",
          "sub": "Cửa chứng chỉ? Chưa đâu.",
          "keys": [
            "Chưa đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It opens probation.",
          "sub": "Nó mở cửa tập sự.",
          "keys": [
            "cửa tập sự"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s14",
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
            "text": "⑦ Tối · Sức khoẻ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:evening"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "stethoscope",
                "mobile-phone"
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
            "at": "l1:evening",
            "caption": "8 giờ tối · gọi hỏi trước khi khám",
            "icon": "stethoscope"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Điều 10: sức khoẻ hành nghề",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l2:health"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Điều 17: giấy chứng nhận sức khoẻ",
            "x": 5964,
            "y": 1330,
            "size": 44,
            "at": "l2:certificate"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Tiêu chí y khoa: không ghi",
            "x": 5964,
            "y": 1410,
            "size": 44,
            "at": "l2:criteria",
            "color": "muted"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Hỏi trước: loại giấy, thời hạn",
            "x": 5964,
            "y": 1490,
            "size": 46,
            "at": "l3:ask",
            "color": "accent",
            "hl": [
              {
                "text": "Hỏi trước",
                "at": "l3:ask"
              }
            ]
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Mất, hạn chế năng lực hành vi",
            "x": 5964,
            "y": 1590,
            "size": 42,
            "at": "l5:lost"
          },
          {
            "id": "i-5b",
            "t": "text",
            "text": "→ không cấp (điểm e khoản 4)",
            "x": 6004,
            "y": 1650,
            "size": 40,
            "at": "l5:blocked",
            "color": "coral"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Luật Luật sư (VBHN 03/VBHN-VPQH), Điều 10, khoản 1 và điểm e khoản 4 Điều 17",
            "x": 5964,
            "y": 1810,
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
          "say": "Seventh stop: the evening. Health.",
          "sub": "Chặng bảy: buổi tối. Sức khoẻ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Article ten asks for health fit to practise, and the file needs a health certificate. No detailed medical criteria.",
          "sub": "Điều 10 cần sức khoẻ bảo đảm hành nghề, hồ sơ cần giấy chứng nhận sức khoẻ. Không ghi tiêu chí y khoa cụ thể."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Then I ask the office first: which paper, and how long it stays valid. One check-up, not two.",
          "sub": "Vậy em hỏi nơi nhận hồ sơ trước: loại giấy nào, thời hạn bao lâu. Khám một lần, không phải hai.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Smart. One phone call saves a morning in a clinic queue.",
          "sub": "Khôn đấy. Một cuộc gọi đỡ một buổi sáng xếp hàng phòng khám."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Close to health: a person who has lost or has limited civil capacity is blocked. More on that next lesson.",
          "sub": "Gần với sức khoẻ: người mất hoặc bị hạn chế năng lực hành vi dân sự thì không được cấp. Bài sau nói kỹ.",
          "keys": [
            "năng lực hành vi dân sự"
          ]
        }
      ],
      "ref": "p16,p17"
    },
    {
      "id": "s15",
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
            "text": "10 giờ tối · Tờ giấy đã kín",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:night"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1200,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "face": "happy",
                  "pose": "hold"
                }
              ],
              "props": [
                "page-facing-up",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
            "at": "l1:night",
            "caption": "10 giờ tối · cùng tờ giấy buổi sáng",
            "icon": "page-facing-up"
          },
          {
            "id": "j-r0",
            "t": "text",
            "text": "Công dân, thường trú → căn cước",
            "x": 7932,
            "y": 1260,
            "size": 38,
            "at": "l2:citizenship+200"
          },
          {
            "id": "j-r1",
            "t": "text",
            "text": "Bằng cử nhân luật → bằng",
            "x": 7932,
            "y": 1335,
            "size": 38,
            "at": "l2:degree+200"
          },
          {
            "id": "j-r2",
            "t": "text",
            "text": "Phẩm chất → lý lịch tư pháp",
            "x": 7932,
            "y": 1410,
            "size": 38,
            "at": "l2:record+200"
          },
          {
            "id": "j-r3",
            "t": "text",
            "text": "Nghề, sức khoẻ → “sẽ có”",
            "x": 7932,
            "y": 1485,
            "size": 38,
            "at": "l3:will+200"
          },
          {
            "id": "j-r4",
            "t": "text",
            "text": "Cần hỏi: loại giấy khám",
            "x": 7932,
            "y": 1560,
            "size": 38,
            "at": "l4:question+200",
            "color": "coral"
          },
          {
            "id": "j-key",
            "t": "text",
            "text": "Một tờ giấy, một ngày",
            "x": 7932,
            "y": 1660,
            "size": 52,
            "at": "l5:paper",
            "color": "accent",
            "hl": [
              {
                "text": "một ngày",
                "at": "l5:date"
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
          "say": "Ten at night. The sheet from this morning is full.",
          "sub": "Mười giờ tối. Tờ giấy buổi sáng giờ đã kín."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Seven lines. Next to each, its proof: ID for citizenship, my degree, a criminal record form.",
          "sub": "Bảy dòng. Bên cạnh mỗi dòng là giấy chứng minh: căn cước, bằng cử nhân, phiếu lý lịch tư pháp.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Training, test and health: I write, will have.",
          "sub": "Đào tạo nghề, giấy kiểm tra, giấy khám: em ghi “sẽ có”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "And one mark for a question: which health paper.",
          "sub": "Và đánh dấu một dòng cần hỏi: loại giấy khám."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Each standard tied to a paper, and a date you expect to have it. Lan knows herself now.",
          "sub": "Mỗi tiêu chuẩn gắn với một tờ giấy và một ngày dự kiến có nó. Giờ Lan đã biết mình.",
          "keys": [
            "một ngày dự kiến"
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
      "ref": "p18,p19,p20"
    },
    {
      "id": "s155",
      "module": "BRK-11",
      "data": {
        "title": "3 chỗ hay sai",
        "items": [
          "Giấy tốt nghiệp nghề chưa phải chứng chỉ",
          "Thạc sĩ không được miễn học nghề",
          "Bằng nước ngoài: công nhận trước"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three: foreign degrees, recognise first.",
          "sub": "Ba: bằng nước ngoài, công nhận trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two: masters still train.",
          "sub": "Hai: thạc sĩ vẫn học nghề."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: training is not certification.",
          "sub": "Một: học xong nghề chưa phải chứng chỉ.",
          "keys": [
            "chưa phải chứng chỉ"
          ]
        }
      ],
      "ref": "p9,p11,p15"
    },
    {
      "id": "s16",
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
            "at": "l1:groups",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:master",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:test",
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
            "x": 3588,
            "y": 20,
            "at": "l1:groups"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9492,
            "y": 20,
            "at": "l2:master"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3588,
            "y": 1110,
            "at": "l3:test"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài là kiến thức nghề, không phải tư vấn cho vụ việc cụ thể. Nhân vật là minh hoạ. Luật Luật sư đang sửa đổi — kiểm lại sau kỳ họp.",
            "x": 7932,
            "y": 1810,
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
          "say": "So: seven standards in four groups, each with its paper.",
          "sub": "Tóm lại: bảy tiêu chuẩn, bốn nhóm, mỗi nhóm có giấy tờ riêng.",
          "keys": [
            "bốn nhóm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A master's degree counts, but does not skip training. Foreign degrees need recognition.",
          "sub": "Thạc sĩ được tính là bằng, nhưng không miễn học nghề. Bằng nước ngoài cần công nhận.",
          "keys": [
            "không miễn học nghề"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And in practice, the probation test comes before any certificate.",
          "sub": "Và thực tế, phải đạt kỳ kiểm tra rồi mới tới chứng chỉ.",
          "keys": [
            "phải đạt kỳ kiểm tra"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s17",
      "module": "QUIZ-01",
      "data": {
        "q": "Does a master's degree in law exempt someone from vocational training?",
        "options": [
          "Yes, every master's degree holder is exempt from all training and probation",
          "No, the exemption list covers doctors of law, professors and some officials, not masters",
          "Yes, but only when the master's thesis was about the Law on Lawyers"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "graduation-cap",
        "why": "Điều 13 miễn đào tạo cho tiến sĩ luật, giáo sư, phó giáo sư và một số người khác, không có thạc sĩ luật."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Does a master's degree in law exempt someone from vocational training?",
          "sub": "Bằng thạc sĩ luật có được miễn đào tạo nghề luật sư không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No. The exemption list has doctors of law and professors, not masters.",
          "sub": "Không. Danh sách miễn có tiến sĩ, giáo sư, không có thạc sĩ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Read the exemption list, word by word.",
          "sub": "Đọc kỹ danh sách miễn, từng chữ."
        }
      ],
      "ref": "questions[13]"
    },
    {
      "id": "s18",
      "module": "END-05",
      "data": {
        "text": "Bảy dòng, bảy tờ giấy",
        "sub": "Lập bảng tự kiểm · bài sau: ai không được cấp chứng chỉ"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, make your own seven line table, and fill in what you already have.",
          "sub": "Tối nay, lập bảng bảy dòng như Lan, điền những gì đã có.",
          "keys": [
            "bảng bảy dòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: who gets blocked even with the right degree. Now, the forty questions below.",
          "sub": "Bài sau: ai bị chặn dù đủ bằng cấp. Giờ thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (đào sâu 1 chuỗi bar-roadmap) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-20 (đáp án trước): “Bảy tiêu chuẩn, bốn nhóm, mỗi nhóm một tờ giấy — bằng cử nhân chỉ là dòng 1/7” → ba chỗ hay sai (thạc sĩ, bằng nước ngoài, giấy tốt nghiệp nghề ≠ chứng chỉ). Dòng thời gian: một ngày thứ Bảy Lan tự kiểm (7 giờ tờ giấy trắng → 8 giờ cà phê Bác Bình: công dân, thường trú → 9 giờ phẩm chất → 10 giờ bằng nào + “Khoan đã!” thạc sĩ → trưa Dũng gọi: bằng nước ngoài → chiều ba tiêu chuẩn nghề → tua nhanh: Lan ở Đoàn, cô Hoa chỉ dòng thiếu → tối sức khoẻ → 10 giờ tối bảng bảy dòng). Nhân vật theo w145/_series/bar-roadmap.md: Lan, Bác Bình, Dũng (bằng nước ngoài p10), cô Hoa (cán bộ Đoàn p14). Số, điều chỉ từ bài: Điều 10, 11, 12, 13, 14, 15, 16, 17 (điểm c, e khoản 4), 12 + 12 tháng, giảm 2/3 hoặc 1/2, NĐ 121/2025, Thông tư 10/2021, khoá 28. Cảnh ngắt nhịp: BRK-10 s06 (trích đúc kết p6), DLG s08 (thạc sĩ p8), BRK-07 s10, BRK-04 s13 (p15). Câu đố questions[13]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s15"
  }
};
