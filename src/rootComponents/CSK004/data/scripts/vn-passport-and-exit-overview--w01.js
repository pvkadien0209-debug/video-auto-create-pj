// vn-passport-and-exit-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "vn-passport-and-exit-overview--w01",
  "unit": {
    "audience": "emigrants-passport-and-exit",
    "slug": "vn-passport-and-exit-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Sắp ra nước ngoài sống lâu dài: cần lo những gì về hộ chiếu và xuất cảnh?",
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
            "fit": [
              "a-pp",
              "a-4"
            ],
            "move": "cut",
            "zoom": 1.3
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "a-pp",
            "t": "illus",
            "name": "blue-book",
            "x": 70,
            "y": 140,
            "size": 250,
            "at": "l1:small book"
          },
          {
            "id": "a-exp",
            "t": "text",
            "text": "Ngày hết hạn:",
            "x": 360,
            "y": 150,
            "size": 58,
            "at": "l2:expiry"
          },
          {
            "id": "a-4",
            "t": "text",
            "text": "còn 4 tháng",
            "x": 360,
            "y": 230,
            "size": 110,
            "at": "l2:four months",
            "color": "coral",
            "hl": [
              {
                "text": "4 tháng",
                "at": "l2:four months"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Đủ để đi xa nhiều năm?",
            "x": 70,
            "y": 430,
            "size": 52,
            "at": "l3:enough",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A small book on a living room table. Ten years of journeys fit inside it.",
          "sub": "Một cuốn sổ nhỏ trên bàn phòng khách. Mười năm đi lại nằm gọn trong đó."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But tonight only one line matters: the expiry date. Four months left.",
          "sub": "Nhưng tối nay chỉ một dòng là đáng kể: ngày hết hạn. Còn bốn tháng.",
          "keys": [
            "Còn bốn tháng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Is that enough to fly away and live abroad for years?",
          "sub": "Vậy có đủ để bay đi sống ở nước ngoài nhiều năm không?",
          "keys": [
            "nhiều năm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 200
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
            "at": "l1",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l9",
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
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l4"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l7",
                  "pose": "explain"
                }
              ],
              "props": [
                "blue-book"
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
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l8",
                  "shot": "E-SHOT-05",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l9",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối Chủ nhật · phòng khách",
            "icon": "house"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Thuận buồm xuôi gió”",
            "x": 70,
            "y": 560,
            "size": 58,
            "at": "l9:smooth",
            "color": "accent",
            "hl": [
              {
                "text": "xuôi gió",
                "at": "l9:fair wind"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "→ giấy tờ phải xuôi trước",
            "x": 70,
            "y": 650,
            "size": 46,
            "at": "l9:papers"
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
          "say": "Champion list maker, about to join her husband abroad. For good.",
          "sub": "Vô địch lập danh sách, sắp sang nước ngoài đoàn tụ với chồng. Đi lâu dài.",
          "keys": [
            "đoàn tụ với chồng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "My passport has four months left. That's a problem, isn't it?",
          "sub": "Hộ chiếu em còn bốn tháng. Có sao không nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next to her, Dũng, her cousin, off to work abroad on a long contract.",
          "sub": "Bên cạnh là Dũng, em họ Thảo, sắp ra nước ngoài làm việc dài hạn theo hợp đồng."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Contract signed. Okay, let's go!",
          "sub": "Hợp đồng ký rồi. Ok, đi luôn!",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "And Ms Hoa, Thảo's mother, is moving abroad to settle, with little Bin.",
          "sub": "Còn cô Hoa, mẹ Thảo, sắp đi định cư cùng bé Bin.",
          "keys": [
            "định cư"
          ]
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "hoa",
          "say": "Right. Passports first, suitcases later!",
          "sub": "Rồi, hộ chiếu trước, vali tính sau nha!",
          "pose": "explain"
        },
        {
          "id": "l9",
          "lang": "en",
          "who": "det",
          "say": "Everyone wishes them smooth sails and a fair wind. But the papers must sail smoothly first.",
          "sub": "Ai cũng chúc “thuận buồm xuôi gió”. Nhưng muốn buồm xuôi, giấy tờ phải xuôi trước.",
          "keys": [
            "giấy tờ phải xuôi trước"
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
      "ref": "intro,p7"
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
            "text": "Đi xa lâu dài: lo gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:sort out",
            "hl": [
              {
                "text": "lo gì",
                "at": "l1:sort out"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: có hộ chiếu là xong",
            "x": 2028,
            "y": 170,
            "size": 54,
            "at": "l2:passport",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:done"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: 4 chặng",
            "x": 2028,
            "y": 270,
            "size": 64,
            "at": "l3:four stops",
            "color": "accent",
            "hl": [
              {
                "text": "4 chặng",
                "at": "l3:four stops"
              }
            ]
          },
          {
            "id": "b-s0b",
            "t": "box",
            "x": 2028,
            "y": 400,
            "w": 380,
            "h": 110,
            "at": "l3:passport",
            "color": "coral",
            "stroke": 5
          },
          {
            "id": "b-s1b",
            "t": "box",
            "x": 2438,
            "y": 400,
            "w": 380,
            "h": 110,
            "at": "l3:conditions",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s2b",
            "t": "box",
            "x": 2848,
            "y": 400,
            "w": 380,
            "h": 110,
            "at": "l3:suspension",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s3b",
            "t": "box",
            "x": 3258,
            "y": 400,
            "w": 380,
            "h": 110,
            "at": "l3:abroad",
            "color": "ink",
            "stroke": 5
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "① Hộ chiếu",
            "x": 2053,
            "y": 425,
            "size": 46,
            "at": "l3:passport+200"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "② Điều kiện",
            "x": 2463,
            "y": 425,
            "size": 46,
            "at": "l3:conditions+200"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "③ Tạm hoãn",
            "x": 2873,
            "y": 425,
            "size": 46,
            "at": "l3:suspension+200"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "④ Ở nước ngoài",
            "x": 3283,
            "y": 425,
            "size": 46,
            "at": "l3:abroad+200"
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "1 nhà, 3 lý do đi xa",
            "x": 2028,
            "y": 570,
            "size": 56,
            "at": "l4:one family",
            "hl": [
              {
                "text": "3 lý do",
                "at": "l4:three reasons"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: các bài giải đáp của Thư viện Pháp luật, Hệ thống Pháp luật",
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
          "say": "So, moving abroad for years: what do you sort out about your passport and exit?",
          "sub": "Vậy ra nước ngoài sống lâu dài thì phải lo gì về hộ chiếu và xuất cảnh?",
          "keys": [
            "hộ chiếu và xuất cảnh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not just: I have a passport, done.",
          "sub": "Không phải cứ có hộ chiếu là xong."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But four stops: the passport, exit conditions, exit suspension, and life abroad.",
          "sub": "Mà là bốn chặng: hộ chiếu, điều kiện xuất cảnh, tạm hoãn xuất cảnh, và khi đã ở nước ngoài.",
          "keys": [
            "bốn chặng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One week, one family, three reasons to leave. Seatbelts on.",
          "sub": "Một tuần, một nhà, ba lý do đi xa. Thắt dây an toàn."
        }
      ],
      "ref": "intro,p15"
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
            "text": "① Thứ Hai · Cuốn hộ chiếu",
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
                  "pose": "hold"
                },
                {
                  "id": "bin",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "blue-book"
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
            "caption": "Thứ Hai · phòng khách",
            "icon": "blue-book"
          },
          {
            "id": "c-pt",
            "t": "text",
            "text": "Hộ chiếu phổ thông",
            "x": 3996,
            "y": 160,
            "size": 56,
            "at": "l2:most",
            "hl": [
              {
                "text": "phổ thông",
                "at": "l1:ordinary"
              }
            ]
          },
          {
            "id": "c-10",
            "t": "text",
            "text": "Từ đủ 14 tuổi: 10 năm",
            "x": 3996,
            "y": 250,
            "size": 50,
            "at": "l5:ten",
            "hl": [
              {
                "text": "10 năm",
                "at": "l5:ten"
              }
            ]
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Dưới 14 tuổi: 5 năm",
            "x": 3996,
            "y": 330,
            "size": 50,
            "at": "l5:five",
            "hl": [
              {
                "text": "5 năm",
                "at": "l5:five"
              }
            ]
          },
          {
            "id": "c-rg",
            "t": "text",
            "text": "Rút gọn: ≤ 12 tháng",
            "x": 3996,
            "y": 410,
            "size": 50,
            "at": "l6:twelve",
            "color": "coral"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Luật XNC của công dân VN 2019 (TVPL dẫn lại)",
            "x": 3996,
            "y": 480,
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
          "say": "Monday. Stop one: understand your ordinary passport.",
          "sub": "Thứ Hai. Chặng một: hiểu cuốn hộ chiếu phổ thông.",
          "keys": [
            "hộ chiếu phổ thông"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Most Vietnamese use it to live or work abroad.",
          "sub": "Phần lớn người Việt dùng nó để sống, làm việc ở nước ngoài."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Here comes Bin, Ms Hoa's youngest. Nine, with more questions than hairs.",
          "sub": "Đây là bé Bin, con út cô Hoa. Chín tuổi, câu hỏi nhiều hơn tóc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "bin",
          "say": "Why does my passport last five years, but yours lasts ten?",
          "sub": "Sao hộ chiếu của con năm năm, còn của chị mười năm ạ?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The twenty nineteen exit and entry law: fourteen or older, ten years. Under fourteen, five years.",
          "sub": "Luật Xuất cảnh, nhập cảnh năm 2019: từ đủ 14 tuổi, 10 năm. Chưa đủ 14 tuổi, 5 năm.",
          "keys": [
            "10 năm",
            "5 năm"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And one issued by shortened procedure? No more than twelve months.",
          "sub": "Còn hộ chiếu cấp theo thủ tục rút gọn? Không quá 12 tháng.",
          "keys": [
            "Không quá 12 tháng"
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
            "text": "Từ 15/8/2023: thêm mục nơi sinh",
            "x": 3996,
            "y": 560,
            "size": 46,
            "at": "l1:place of birth",
            "hl": [
              {
                "text": "nơi sinh",
                "at": "l1:place of birth"
              }
            ]
          },
          {
            "id": "c-chip",
            "t": "text",
            "text": "Chip: được chọn, từ đủ 14",
            "x": 3996,
            "y": 630,
            "size": 44,
            "at": "l2:chip"
          },
          {
            "id": "c-fee",
            "t": "text",
            "text": "Cấp mới 200.000 đ",
            "x": 4836,
            "y": 672,
            "size": 44,
            "at": "l3:two hundred",
            "color": "accent",
            "hl": [
              {
                "text": "200.000 đ",
                "at": "l3:two hundred"
              }
            ]
          },
          {
            "id": "c-fs",
            "t": "text",
            "text": "hỏng, mất 400.000 đ · TT 28/2026",
            "x": 4836,
            "y": 728,
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
          "say": "Since August fifteenth, twenty twenty-three, the new model adds a place of birth.",
          "sub": "Từ 15/8/2023, mẫu hộ chiếu mới thêm mục nơi sinh.",
          "keys": [
            "nơi sinh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "From fourteen, you choose: with an electronic chip, or without.",
          "sub": "Từ đủ 14 tuổi, được chọn loại có gắn chip điện tử hoặc không."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The fee from April twenty twenty-six: two hundred thousand dong for a new one, four hundred thousand if damaged or lost.",
          "sub": "Lệ phí từ 01/4/2026: cấp mới 200.000 đồng, cấp lại do hỏng hoặc mất 400.000 đồng.",
          "keys": [
            "200.000 đồng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Chip or not, same price. Lose it, pay double. Guard it like grandma's gold ring.",
          "sub": "Chip hay không, giá như nhau. Làm mất tốn gấp đôi: giữ như nhẫn vàng của bà.",
          "keys": [
            "gấp đôi"
          ]
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "“Gia hạn hộ chiếu” là gì?",
        "wrong": "Đóng thêm dấu, kéo dài cuốn cũ",
        "right": "Nộp hồ sơ, xin cấp một cuốn mới",
        "wrongIllus": "blue-book",
        "rightIllus": "page-facing-up"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Renewing? Not a stamp on the old one.",
          "sub": "“Gia hạn”? Không phải đóng dấu cuốn cũ."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Not extendable. You apply for a new one.",
          "sub": "Không được gia hạn: xin cấp cuốn mới.",
          "keys": [
            "Không được gia hạn"
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
            "at": "l1",
            "fit": [
              "c-take"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-take",
            "t": "text",
            "text": "Xem hạn ngay hôm nay",
            "x": 3996,
            "y": 695,
            "size": 54,
            "at": "l2:today",
            "color": "accent",
            "hl": [
              {
                "text": "ngay hôm nay",
                "at": "l2:today"
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
          "say": "A passport is like a carton of milk. Past the date, you buy a new one.",
          "sub": "Hộ chiếu như hộp sữa: quá hạn thì mua hộp mới.",
          "keys": [
            "mua hộp mới"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So check the expiry date today, and plan time for a new one.",
          "sub": "Vậy hãy xem ngày hết hạn ngay hôm nay, rồi tính thời gian làm cuốn mới.",
          "keys": [
            "ngay hôm nay"
          ]
        }
      ],
      "ref": "p4"
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
            "text": "② Thứ Ba · Điều kiện xuất cảnh",
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
            "at": "l1:tuesday",
            "caption": "Thứ Ba · giờ nghỉ trưa",
            "icon": "mobile-phone"
          },
          {
            "id": "d-33",
            "t": "text",
            "text": "Điều 33: đủ 3 điều kiện",
            "x": 5964,
            "y": 160,
            "size": 50,
            "at": "l2:three",
            "hl": [
              {
                "text": "3 điều kiện",
                "at": "l2:three conditions"
              }
            ]
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 260,
            "w": 44,
            "h": 44,
            "at": "l3:intact",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 242,
            "size": 56,
            "at": "l3:intact+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Giấy tờ nguyên vẹn, còn hạn",
            "x": 6034,
            "y": 252,
            "size": 46,
            "at": "l3:intact+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 360,
            "w": 44,
            "h": 44,
            "at": "l4:visa",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 342,
            "size": 56,
            "at": "l4:visa+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Thị thực / giấy cho nhập cảnh",
            "x": 6034,
            "y": 352,
            "size": 46,
            "at": "l4:visa+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 460,
            "w": 44,
            "h": 44,
            "at": "l5:banned",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 442,
            "size": 56,
            "at": "l5:banned+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Không bị cấm, tạm hoãn",
            "x": 6034,
            "y": 452,
            "size": 46,
            "at": "l5:banned+200"
          },
          {
            "id": "d-mien",
            "t": "text",
            "text": "(điều kiện 2: trừ khi được miễn thị thực)",
            "x": 5964,
            "y": 530,
            "size": 28,
            "at": "l4:exempt",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "d-take",
            "t": "text",
            "text": "Thiếu 1 điều kiện = ở nhà",
            "x": 5964,
            "y": 640,
            "size": 58,
            "at": "l6:missing",
            "color": "accent",
            "hl": [
              {
                "text": "ở nhà",
                "at": "l6:home"
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
          "say": "Tuesday, lunch break. Thảo reads the exit rules on her phone.",
          "sub": "Thứ Ba, giờ nghỉ trưa. Thảo đọc quy định xuất cảnh trên điện thoại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Article thirty-three, amended in twenty twenty-three. Three conditions. Let me tick them.",
          "sub": "Điều 33, sửa đổi năm 2023. Ba điều kiện. Để em soát từng cái.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One: an intact passport or travel document that is still valid.",
          "sub": "Một: giấy tờ xuất nhập cảnh còn nguyên vẹn, còn thời hạn sử dụng.",
          "keys": [
            "còn nguyên vẹn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Two: a visa, or proof the destination lets you in, unless you are visa exempt.",
          "sub": "Hai: có thị thực hoặc giấy tờ chứng minh nước đến cho nhập cảnh, trừ trường hợp được miễn thị thực."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three: not banned, not barred from leaving, and not under exit suspension.",
          "sub": "Ba: không thuộc diện bị cấm, không được xuất cảnh, hay bị tạm hoãn xuất cảnh.",
          "keys": [
            "tạm hoãn xuất cảnh"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One missing, and your suitcase stays home with you.",
          "sub": "Thiếu một, thì vali ở nhà cùng bạn.",
          "keys": [
            "ở nhà"
          ]
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
            "text": "Ba cánh cửa",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l2:three doors",
            "hl": [
              {
                "text": "Ba cánh cửa",
                "at": "l2:three doors"
              }
            ]
          },
          {
            "id": "e-old",
            "t": "text",
            "text": "Trước: còn đủ 6 tháng",
            "x": 7932,
            "y": 140,
            "size": 50,
            "at": "l1:six",
            "color": "muted"
          },
          {
            "id": "e-oldx",
            "t": "strike",
            "over": "e-old",
            "at": "l1:gone"
          },
          {
            "id": "e-new",
            "t": "text",
            "text": "Nay: chỉ cần còn hạn",
            "x": 8872,
            "y": 140,
            "size": 50,
            "at": "l1:gone+300",
            "color": "accent"
          },
          {
            "id": "e-d0b",
            "t": "box",
            "x": 7932,
            "y": 250,
            "w": 500,
            "h": 230,
            "at": "l2:exit",
            "color": "accent",
            "stroke": 6
          },
          {
            "id": "e-d1b",
            "t": "box",
            "x": 8492,
            "y": 250,
            "w": 500,
            "h": 230,
            "at": "l2:airline",
            "color": "ink",
            "stroke": 6
          },
          {
            "id": "e-d2b",
            "t": "box",
            "x": 9052,
            "y": 250,
            "w": 500,
            "h": 230,
            "at": "l2:destination",
            "color": "ink",
            "stroke": 6
          },
          {
            "id": "e-d0a",
            "t": "text",
            "text": "Cửa 1",
            "x": 7972,
            "y": 275,
            "size": 48,
            "at": "l2:exit+200",
            "color": "muted"
          },
          {
            "id": "e-d1a",
            "t": "text",
            "text": "Cửa 2",
            "x": 8532,
            "y": 275,
            "size": 48,
            "at": "l2:airline+200",
            "color": "muted"
          },
          {
            "id": "e-d2a",
            "t": "text",
            "text": "Cửa 3",
            "x": 9092,
            "y": 275,
            "size": 48,
            "at": "l2:destination+200",
            "color": "muted"
          },
          {
            "id": "e-d0",
            "t": "text",
            "text": "Xuất cảnh VN",
            "x": 7972,
            "y": 360,
            "size": 60,
            "at": "l2:exit+300"
          },
          {
            "id": "e-d1",
            "t": "text",
            "text": "Hãng bay",
            "x": 8532,
            "y": 360,
            "size": 60,
            "at": "l2:airline+300"
          },
          {
            "id": "e-d2",
            "t": "text",
            "text": "Nước đến",
            "x": 9092,
            "y": 360,
            "size": 60,
            "at": "l2:destination+300"
          },
          {
            "id": "e-n3",
            "t": "text",
            "text": "Đa số: ≥ 6 tháng",
            "x": 9052,
            "y": 510,
            "size": 44,
            "at": "l3:most",
            "hl": [
              {
                "text": "≥ 6 tháng",
                "at": "l3:six months"
              }
            ]
          },
          {
            "id": "e-n3b",
            "t": "text",
            "text": "có nước nhận 3 tháng",
            "x": 9052,
            "y": 570,
            "size": 30,
            "at": "l3:three",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "e-n2",
            "t": "text",
            "text": "Có thể không cho bay",
            "x": 8492,
            "y": 510,
            "size": 44,
            "at": "l4:refuse",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before the amendment, the law wanted six full months of validity. That line is gone.",
          "sub": "Trước lần sửa đổi, luật đòi hộ chiếu còn hạn từ đủ 6 tháng. Mốc ấy đã bỏ.",
          "keys": [
            "đã bỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But picture three doors: Vietnam's exit, the airline, and the destination.",
          "sub": "Nhưng hãy hình dung ba cánh cửa: cửa xuất cảnh Việt Nam, hãng bay, và nước đến.",
          "keys": [
            "ba cánh cửa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Most destinations still want at least six months. Some accept three.",
          "sub": "Đa số nước đến vẫn đòi hộ chiếu còn hạn ít nhất 6 tháng; một số nước nhận 3 tháng.",
          "keys": [
            "ít nhất 6 tháng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the airline can refuse to board you if your passport fails the destination's rules.",
          "sub": "Và hãng bay có thể từ chối cho lên máy bay nếu hộ chiếu không đạt yêu cầu của điểm đến."
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Ba · đọc tin trên mạng",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Luật bỏ mốc 6 tháng, cứ để nguyên mà đi",
          "why": "Luật Việt Nam chỉ quyết định có ra khỏi Việt Nam được không; lên máy bay, vào nước đến tuỳ nước đó và hãng bay.",
          "rule": "Qua cửa xuất cảnh Việt Nam chưa đủ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "The law dropped six months. Mine has four. I'll just go!",
          "sub": "Luật bỏ mốc 6 tháng rồi. Cuốn em còn 4 tháng. Cứ thế mà đi!",
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
          "say": "Vietnamese law only decides whether you may leave Vietnam.",
          "sub": "Luật Việt Nam chỉ quyết định chị có ra khỏi Việt Nam được hay không.",
          "keys": [
            "ra khỏi Việt Nam"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Boarding and entering? That's up to the destination and the airline.",
          "sub": "Còn được lên máy bay và vào nước đến hay không: tuỳ quy định nước đó và hãng bay."
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
          "who": "thao",
          "say": "I'll check my destination's rules, and start a new passport.",
          "sub": "Em sẽ xem nước đến yêu cầu gì, và bắt tay làm cuốn mới.",
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
            "at": "l1",
            "fit": [
              "e-take"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l2",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-r",
            "t": "ring",
            "around": [
              "e-d1b",
              "e-d2b"
            ],
            "color": "coral",
            "stroke": 8,
            "at": "l2:also"
          },
          {
            "id": "e-take",
            "t": "text",
            "text": "Qua cửa 1 chưa đủ",
            "x": 7932,
            "y": 620,
            "size": 64,
            "at": "l1:not enough",
            "color": "accent",
            "hl": [
              {
                "text": "chưa đủ",
                "at": "l1:not enough"
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
          "say": "Lesson learned: passing Vietnam's exit is not enough.",
          "sub": "Rút ra: qua được cửa xuất cảnh Việt Nam chưa đủ.",
          "keys": [
            "chưa đủ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The passport must also suit the country you are going to. Three doors, three keys.",
          "sub": "Hộ chiếu còn phải hợp với yêu cầu của nước đến. Ba cánh cửa, ba chìa khoá.",
          "keys": [
            "yêu cầu của nước đến"
          ]
        }
      ],
      "ref": "p8"
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
            "text": "③ Thứ Tư · Tạm hoãn xuất cảnh",
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "luggage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:wednesday",
            "caption": "Thứ Tư · phòng Dũng",
            "icon": "luggage"
          },
          {
            "id": "f-36",
            "t": "text",
            "text": "Điều 36: 9 nhóm trường hợp",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l3:nine",
            "hl": [
              {
                "text": "9 nhóm",
                "at": "l3:nine groups"
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
          "say": "Wednesday. Stop three: could you be stopped from leaving at all?",
          "sub": "Thứ Tư. Chặng ba: liệu mình có bị chặn, không cho xuất cảnh?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Me? I've never been near a court. Exit suspension isn't my thing!",
          "sub": "Em á? Em có dính dáng gì toà án đâu. Tạm hoãn xuất cảnh chẳng liên quan!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article thirty-six lists nine groups of cases. Some are far less dramatic than court.",
          "sub": "Điều 36 liệt kê 9 nhóm trường hợp. Có nhóm chẳng kịch tính như toà án đâu.",
          "keys": [
            "9 nhóm"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s12",
      "module": "BRK-03",
      "data": {
        "value": 9,
        "suffix": " nhóm",
        "label": "trường hợp bị tạm hoãn xuất cảnh (Điều 36)",
        "illus": "prohibited"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Count them in the law.",
          "sub": "Đếm trong luật."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Nine groups of exit suspension cases.",
          "sub": "Chín nhóm trường hợp bị tạm hoãn xuất cảnh.",
          "keys": [
            "Chín nhóm"
          ]
        }
      ],
      "ref": "p9"
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
            "id": "f-1",
            "t": "text",
            "text": "• bị điều tra, truy tố, xét xử hình sự",
            "x": 60,
            "y": 1330,
            "size": 34,
            "at": "l1:criminal",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "• nghĩa vụ dân sự, thi hành án dân sự",
            "x": 60,
            "y": 1385,
            "size": 34,
            "at": "l1:civil",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "• bị cưỡng chế quyết định xử phạt hành chính",
            "x": 60,
            "y": 1440,
            "size": 34,
            "at": "l2:administrative",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "• chưa hoàn thành nghĩa vụ thuế",
            "x": 60,
            "y": 1495,
            "size": 40,
            "at": "l2:tax",
            "color": "coral",
            "hl": [
              {
                "text": "nghĩa vụ thuế",
                "at": "l2:tax duties"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "• bệnh truyền nhiễm nguy hiểm",
            "x": 60,
            "y": 1555,
            "size": 34,
            "at": "l3:infectious",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "• lý do quốc phòng, an ninh",
            "x": 60,
            "y": 1610,
            "size": 34,
            "at": "l3:defence",
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
          "say": "Under criminal investigation, prosecution or trial. Duties in a civil case or civil judgment.",
          "sub": "Đang bị điều tra, truy tố, xét xử hình sự. Có nghĩa vụ trong vụ việc dân sự, thi hành án dân sự."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Forced to carry out an administrative fine. Tax duties not yet done.",
          "sub": "Bị cưỡng chế thi hành quyết định xử phạt hành chính. Chưa hoàn thành nghĩa vụ thuế.",
          "keys": [
            "nghĩa vụ thuế"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A dangerous infectious disease. Or reasons of defence and security.",
          "sub": "Mắc bệnh truyền nhiễm nguy hiểm. Hoặc vì lý do quốc phòng, an ninh."
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
          },
          {
            "at": "l1",
            "fit": [
              "f-hk",
              "f-dc"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
            "ms": 600
          },
          {
            "at": "l4:end",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-hk",
            "t": "text",
            "text": "Hộ KD: nợ ≥ 50 triệu",
            "x": 60,
            "y": 1680,
            "size": 46,
            "at": "l2:fifty",
            "hl": [
              {
                "text": "50 triệu",
                "at": "l2:fifty million"
              }
            ]
          },
          {
            "id": "f-hk2",
            "t": "text",
            "text": "quá hạn trên 120 ngày, đang bị cưỡng chế",
            "x": 60,
            "y": 1740,
            "size": 28,
            "at": "l2:overdue",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "f-dc",
            "t": "text",
            "text": "Đi định cư: không mức tối thiểu",
            "x": 60,
            "y": 1785,
            "size": 46,
            "at": "l3:settle",
            "color": "coral",
            "hl": [
              {
                "text": "không mức tối thiểu",
                "at": "l3:no minimum"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nghị định 49/2025/NĐ-CP",
            "x": 1100,
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
          "say": "On tax, Decree forty-nine of twenty twenty-five sets a bar for business owners.",
          "sub": "Về thuế, Nghị định 49/2025 đặt ngưỡng cho cá nhân kinh doanh, chủ hộ kinh doanh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fifty million dong or more, over one hundred twenty days overdue, and under enforcement.",
          "sub": "Nợ từ 50 triệu đồng, quá hạn trên 120 ngày và đang bị cưỡng chế.",
          "keys": [
            "50 triệu đồng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Leaving to settle abroad? Any overdue tax not fully paid counts. No minimum.",
          "sub": "Còn xuất cảnh để định cư? Còn tiền thuế quá hạn chưa nộp xong là thuộc diện, không có mức tối thiểu.",
          "keys": [
            "không có mức tối thiểu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Hang on. I once had a small household business. In my name!",
          "sub": "Ơ khoan. Em từng đứng tên một hộ kinh doanh nhỏ!",
          "face": "surprised"
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
            "at": "l2",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "③ Tối thứ Tư · Tự tra trước",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:wednesday night"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 780,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "receipt"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:wednesday night",
            "caption": "Tối thứ Tư · trước khi đặt vé",
            "icon": "mobile-phone"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1270,
            "w": 44,
            "h": 44,
            "at": "l1:etax",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1252,
            "size": 56,
            "at": "l1:etax+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Mở eTax Mobile",
            "x": 2098,
            "y": 1262,
            "size": 38,
            "at": "l1:etax+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1360,
            "w": 44,
            "h": 44,
            "at": "l2:lookup",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1342,
            "size": 56,
            "at": "l2:lookup+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "“Tra cứu thông báo”",
            "x": 2098,
            "y": 1352,
            "size": 38,
            "at": "l2:lookup+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1450,
            "w": 44,
            "h": 44,
            "at": "l2:exit suspension",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1432,
            "size": 56,
            "at": "l2:exit suspension+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "“Thông báo tạm hoãn xuất cảnh”",
            "x": 2098,
            "y": 1442,
            "size": 38,
            "at": "l2:exit suspension+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1540,
            "w": 44,
            "h": 44,
            "at": "l3:no data",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1522,
            "size": 56,
            "at": "l3:no data+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Không có dữ liệu",
            "x": 2098,
            "y": 1532,
            "size": 38,
            "at": "l3:no data+200"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "Không có thông báo vì thuế",
            "x": 2028,
            "y": 1630,
            "size": 46,
            "at": "l3:means",
            "color": "accent",
            "hl": [
              {
                "text": "Không có thông báo",
                "at": "l3:no tax"
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
          "say": "Wednesday night. Before booking a ticket, Dũng opens the eTax Mobile app.",
          "sub": "Tối thứ Tư. Trước khi đặt vé, Dũng mở ứng dụng eTax Mobile.",
          "keys": [
            "eTax Mobile"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Notice lookup, then the notice about exit suspension. Tap!",
          "sub": "Tra cứu thông báo, rồi Thông báo về việc tạm hoãn xuất cảnh. Bấm!",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No data shows up. That means no tax notice about exit suspension for him.",
          "sub": "Ứng dụng không hiện dữ liệu nào: anh không có thông báo tạm hoãn xuất cảnh vì thuế.",
          "keys": [
            "không hiện dữ liệu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Screenshot saved, next to my old tax receipts. Done!",
          "sub": "Chụp màn hình, lưu cùng chứng từ nộp thuế cũ. Xong!",
          "face": "happy"
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
            "id": "g-w",
            "t": "text",
            "text": "Tra trước vài tuần: kịp",
            "x": 2028,
            "y": 1730,
            "size": 50,
            "at": "l1:weeks",
            "color": "accent",
            "hl": [
              {
                "text": "vài tuần",
                "at": "l1:few weeks"
              }
            ]
          },
          {
            "id": "g-ap",
            "t": "text",
            "text": "Ở sân bay: đã muộn",
            "x": 2868,
            "y": 1760,
            "size": 50,
            "at": "l2:airport",
            "color": "coral",
            "hl": [
              {
                "text": "đã muộn",
                "at": "l2:too late"
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
          "say": "Check a few weeks ahead, and there is still time to fix things.",
          "sub": "Tự tra trước vài tuần thì còn thời gian xử lý.",
          "keys": [
            "trước vài tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Find out at the airport, and it's too late. Like checking the fuel mid-highway.",
          "sub": "Phát hiện ở sân bay thì đã muộn. Như ra giữa cao tốc mới xem bình xăng.",
          "keys": [
            "đã muộn"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s17",
      "module": "BRK-07",
      "data": {
        "question": "Đã sống bên kia rồi, làm hộ chiếu ở đâu?",
        "illus": "globe-with-meridians"
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
          "say": "Once you live abroad, where do you get a passport?",
          "sub": "Đã sống ở nước ngoài rồi thì làm hộ chiếu ở đâu?",
          "keys": [
            "làm hộ chiếu ở đâu"
          ]
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
            "text": "④ Thứ Năm · Ở nước ngoài",
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
              "set": "home",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "bin",
                  "side": "right"
                }
              ],
              "props": [
                "globe-with-meridians"
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
            "at": "l1:thursday",
            "caption": "Thứ Năm · phòng khách",
            "icon": "globe-with-meridians"
          },
          {
            "id": "h-16",
            "t": "text",
            "text": "Điều 16:",
            "x": 3996,
            "y": 1250,
            "size": 50,
            "at": "l3:sixteen"
          },
          {
            "id": "h-cq",
            "t": "text",
            "text": "tại cơ quan đại diện Việt Nam",
            "x": 4216,
            "y": 1262,
            "size": 30,
            "at": "l3:mission",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Lần đầu: nơi cư trú",
            "x": 3996,
            "y": 1325,
            "size": 46,
            "at": "l3:first",
            "hl": [
              {
                "text": "nơi cư trú",
                "at": "l3:residence"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Từ lần 2: nơi thuận lợi",
            "x": 3996,
            "y": 1395,
            "size": 46,
            "at": "l4:second",
            "hl": [
              {
                "text": "nơi thuận lợi",
                "at": "l4:convenient"
              }
            ]
          },
          {
            "id": "h-tk",
            "t": "text",
            "text": "TK02 (≥ 14) · TK02a (< 14)",
            "x": 3996,
            "y": 1475,
            "size": 44,
            "at": "l5:forms",
            "color": "accent",
            "hl": [
              {
                "text": "TK02a",
                "at": "l5:children"
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
          "say": "Thursday evening. Ms Hoa worries ahead, as usual.",
          "sub": "Tối thứ Năm. Cô Hoa lại lo xa, như thường lệ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Years from now, over there, Bin's passport runs out. Where do we go?",
          "sub": "Vài năm nữa, ở bên ấy, hộ chiếu của Bin hết hạn. Mình đi đâu làm?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Article sixteen: a first passport abroad comes from the Vietnamese mission in your country of residence.",
          "sub": "Điều 16: ở nước ngoài, cấp lần đầu tại cơ quan đại diện Việt Nam ở nước mình cư trú.",
          "keys": [
            "cơ quan đại diện Việt Nam"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "From the second one, at any Vietnamese mission that is convenient.",
          "sub": "Từ lần thứ hai, nộp tại cơ quan đại diện Việt Nam ở nơi thuận lợi.",
          "keys": [
            "nơi thuận lợi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The forms: TK two from age fourteen, TK two A for children like Bin.",
          "sub": "Tờ khai: TK02 cho người từ đủ 14 tuổi, TK02a cho trẻ dưới 14 tuổi như Bin."
        }
      ],
      "ref": "p13"
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
            "at": "l2",
            "fit": [
              "h-rg",
              "h-1x"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 600
          },
          {
            "at": "l4:end",
            "fit": "H",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "h-rg",
            "t": "text",
            "text": "Mất, cần về ngay: rút gọn",
            "x": 3996,
            "y": 1700,
            "size": 46,
            "at": "l2:shortened",
            "hl": [
              {
                "text": "rút gọn",
                "at": "l2:shortened"
              }
            ]
          },
          {
            "id": "h-1x",
            "t": "text",
            "text": "≤ 12 tháng · dùng 1 lần",
            "x": 3996,
            "y": 1780,
            "size": 50,
            "at": "l3:one use",
            "color": "coral",
            "hl": [
              {
                "text": "dùng 1 lần",
                "at": "l3:one use"
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
          "say": "And if a passport is lost, and you need to go home right away?",
          "sub": "Còn nếu bị mất hộ chiếu mà muốn về nước ngay?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The mission can issue one by shortened procedure. No more than twelve months, no extension.",
          "sub": "Cơ quan đại diện có thể cấp hộ chiếu theo thủ tục rút gọn. Không quá 12 tháng, không gia hạn.",
          "keys": [
            "thủ tục rút gọn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And it is a one-way ticket: one use, to leave or to enter Vietnam.",
          "sub": "Và nó như vé một chiều: chỉ dùng một lần để xuất cảnh hoặc nhập cảnh Việt Nam.",
          "keys": [
            "dùng một lần"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Right. Bin, hold your passport like your teddy bear!",
          "sub": "Rồi, Bin ơi, giữ hộ chiếu như giữ gấu bông nha!",
          "face": "happy",
          "pose": "point"
        }
      ],
      "ref": "p14"
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑤ Thứ Sáu · Cuốn mẫu cũ",
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "blue-book"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:friday",
            "caption": "Thứ Sáu · phòng khách",
            "icon": "blue-book"
          },
          {
            "id": "i-old",
            "t": "text",
            "text": "Mẫu cũ: chưa có nơi sinh, còn > 2 năm",
            "x": 5964,
            "y": 1250,
            "size": 38,
            "at": "l1:old-style",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "i-must",
            "t": "text",
            "text": "Bắt buộc đổi?",
            "x": 5964,
            "y": 1320,
            "size": 56,
            "at": "l2:must",
            "color": "muted"
          },
          {
            "id": "i-mustx",
            "t": "strike",
            "over": "i-must",
            "at": "l4:not required"
          },
          {
            "id": "i-no",
            "t": "text",
            "text": "Không: dùng đến khi hết hạn",
            "x": 5964,
            "y": 1410,
            "size": 50,
            "at": "l4:until",
            "color": "accent",
            "hl": [
              {
                "text": "đến khi hết hạn",
                "at": "l4:until it expires"
              }
            ]
          },
          {
            "id": "i-why",
            "t": "text",
            "text": "Đổi khi có nhu cầu riêng (vd. từng khó xin thị thực)",
            "x": 5964,
            "y": 1490,
            "size": 30,
            "at": "l5:own reason",
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
          "say": "Friday. Ms Hoa holds her old-style passport: no place of birth, over two years left.",
          "sub": "Thứ Sáu. Cô Hoa cầm cuốn hộ chiếu mẫu cũ: chưa có mục nơi sinh, còn hạn hơn hai năm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "There's a new model now. Must I change mine before we go?",
          "sub": "Có mẫu mới rồi. Cô có bắt buộc phải đổi trước khi đi không?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not required. An old-style passport still works until it expires.",
          "sub": "Không bắt buộc. Hộ chiếu mẫu cũ còn hạn vẫn dùng được đến khi hết hạn.",
          "keys": [
            "Không bắt buộc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Change it only for your own reason, like visa trouble because the place of birth was missing.",
          "sub": "Chỉ đổi khi có nhu cầu riêng, chẳng hạn từng gặp khó khi xin thị thực vì thiếu nơi sinh."
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
            "fit": "I",
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
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
            "text": "Đổi theo hạn còn lại + nước đến",
            "x": 5964,
            "y": 1700,
            "size": 52,
            "at": "l1:remaining",
            "color": "accent",
            "hl": [
              {
                "text": "hạn còn lại",
                "at": "l1:remaining validity"
              }
            ]
          },
          {
            "id": "i-vn",
            "t": "text",
            "text": "Làm trực tuyến: VNeID mức 2",
            "x": 5964,
            "y": 1780,
            "size": 46,
            "at": "l3:level two",
            "hl": [
              {
                "text": "VNeID mức 2",
                "at": "l3:vneid"
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
          "say": "So base any change on remaining validity and the destination, not on rumours of a new design.",
          "sub": "Vậy đổi hay không dựa vào hạn còn lại và yêu cầu nước đến, không phải vì nghe nói có mẫu mới.",
          "keys": [
            "hạn còn lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "And my new one? I'll apply online while I'm still in Vietnam.",
          "sub": "Còn cuốn mới của em? Em làm trực tuyến khi còn ở trong nước.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then you need a level two electronic identity account on VNeID.",
          "sub": "Vậy cần tài khoản định danh điện tử mức 2 trên VNeID.",
          "keys": [
            "mức 2"
          ]
        }
      ],
      "ref": "p17,p15"
    },
    {
      "id": "s22",
      "module": "BRK-08",
      "data": {
        "title": "Lộ trình cả chuỗi",
        "points": [
          {
            "label": "Hiểu hộ chiếu",
            "sub": "không gia hạn",
            "illus": "blue-book"
          },
          {
            "label": "Hạn còn lại",
            "sub": "so với nước đến",
            "illus": "spiral-calendar"
          },
          {
            "label": "Tạm hoãn",
            "sub": "tự tra trước",
            "illus": "magnifying-glass-tilted-left"
          },
          {
            "label": "Ở nước ngoài",
            "sub": "cơ quan đại diện",
            "illus": "globe-with-meridians"
          }
        ],
        "current": 3
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "The passport, remaining validity, a suspension check,",
          "sub": "Hiểu hộ chiếu, tính hạn còn lại, tự kiểm tạm hoãn,"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "then life abroad. In that order.",
          "sub": "rồi đến đời sống ở nước ngoài. Đúng thứ tự ấy.",
          "keys": [
            "Đúng thứ tự ấy"
          ]
        }
      ],
      "ref": "p15"
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
            "text": "Tối Chủ nhật tuần sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:next sunday"
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
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "center",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
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
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
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
            "at": "l1:next sunday",
            "caption": "Tối Chủ nhật tuần sau · phòng khách",
            "icon": "house"
          },
          {
            "id": "j-pp",
            "t": "illus",
            "name": "blue-book",
            "x": 7942,
            "y": 1250,
            "size": 130,
            "at": "l1:small book"
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "còn 4 tháng → cuốn mới ✓",
            "x": 8102,
            "y": 1280,
            "size": 46,
            "at": "l2:applied",
            "hl": [
              {
                "text": "cuốn mới",
                "at": "l2:new one"
              }
            ]
          },
          {
            "id": "j-tx",
            "t": "text",
            "text": "Tra tạm hoãn ✓",
            "x": 7942,
            "y": 1420,
            "size": 46,
            "at": "l3:clean"
          },
          {
            "id": "j-old",
            "t": "text",
            "text": "Mẫu cũ: giữ ✓",
            "x": 7942,
            "y": 1490,
            "size": 46,
            "at": "l4:stays"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Thuận buồm xuôi gió…",
            "x": 7942,
            "y": 1610,
            "size": 50,
            "at": "l5:smooth",
            "color": "muted"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "…vì giấy tờ đã xuôi trước",
            "x": 7942,
            "y": 1680,
            "size": 50,
            "at": "l5:papers",
            "color": "accent",
            "hl": [
              {
                "text": "đã xuôi trước",
                "at": "l5:first"
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
          "say": "Next Sunday night. Same table, same small book.",
          "sub": "Tối Chủ nhật tuần sau. Vẫn bàn ấy, vẫn cuốn sổ nhỏ ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The old one still has four months. But the new one is already applied for!",
          "sub": "Cuốn cũ vẫn còn bốn tháng. Nhưng hồ sơ cuốn mới em nộp rồi!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Suspension check: clean. Screenshot saved!",
          "sub": "Tra tạm hoãn: sạch. Ảnh chụp đã lưu!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "And my old-style one stays. Right, that's settled!",
          "sub": "Còn cuốn mẫu cũ của cô: giữ nguyên. Rồi, vậy nha!",
          "pose": "hold"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Smooth sails and a fair wind, because the papers sailed smoothly first.",
          "sub": "Thuận buồm xuôi gió, vì giấy tờ đã xuôi trước.",
          "keys": [
            "giấy tờ đã xuôi trước"
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
      "ref": "p4,p8"
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
            "at": "l1:extended",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:destination",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:suspension",
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
            "x": 5536,
            "y": 20,
            "at": "l1:extended"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9432,
            "y": 620,
            "at": "l2:destination"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3568,
            "y": 1110,
            "at": "l3:suspension"
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
          "say": "So: an ordinary passport can't be extended. Renewing means a new one.",
          "sub": "Tóm lại: hộ chiếu phổ thông không được gia hạn; “gia hạn” là làm cuốn mới.",
          "keys": [
            "làm cuốn mới"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check its validity against the destination, not only against Vietnamese law.",
          "sub": "Đối chiếu hạn còn lại với yêu cầu nước đến, không chỉ với luật Việt Nam.",
          "keys": [
            "yêu cầu nước đến"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check exit suspension yourself, and know where to apply once abroad.",
          "sub": "Tự tra tạm hoãn xuất cảnh, và biết nơi làm hộ chiếu khi đã ở nước ngoài.",
          "keys": [
            "Tự tra tạm hoãn xuất cảnh"
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
        "q": "What is the key lesson about passing Vietnamese exit control?",
        "options": [
          "Passing it is not enough, the passport must also suit the destination",
          "Passing it guarantees entry to every country that accepts Vietnamese visitors",
          "Passing it means the airline can never refuse you at the gate"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "passport-control",
        "why": "Dòng Rút ra nói qua cửa xuất cảnh chưa đủ. Hộ chiếu còn phải hợp yêu cầu của nước đến."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the key lesson about passing Vietnamese exit control?",
          "sub": "Bài học chính về việc qua cửa xuất cảnh Việt Nam là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Passing Vietnam's exit is not enough. The passport must also suit the destination.",
          "sub": "Qua cửa xuất cảnh Việt Nam chưa đủ; hộ chiếu còn phải hợp yêu cầu nước đến."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[18]"
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
          "say": "Right now: open your passport and look at the expiry date.",
          "sub": "Việc làm ngay: mở hộ chiếu, xem ngày hết hạn.",
          "keys": [
            "xem ngày hết hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Next lesson: the ordinary passport, up close. Now, forty questions below!",
          "sub": "Bài sau: soi kỹ hộ chiếu phổ thông. Giờ thì, bốn mươi câu hỏi bên dưới!"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-23",
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể edit (#144). HOOK-23 (đồ vật kể chuyện): cận cuốn hộ chiếu, dòng “ngày hết hạn: còn 4 tháng” → kéo ra thấy cả nhà quanh bàn tối Chủ nhật; cuốn sổ trở lại ở cảnh khép vòng s23. Dòng thời gian: MỘT TUẦN của nhà Thảo (tối CN họp → T2 hiểu hộ chiếu p1–p4 → T3 ba điều kiện p5, ba cánh cửa p6, “Khoan đã!” Thảo 4 tháng p7–p8 → T4 tạm hoãn p9–p10, tối T4 Dũng tra eTax p11–p12 → T5 cô Hoa hỏi khi đã ở nước ngoài p13–p14 → T6 cuốn mẫu cũ p16–p17, VNeID, lộ trình p15 → tối CN sau khép vòng). Đổi tên (w145/_series/emigrants-passport-and-exit.md): chị Lan → Thảo, anh Hùng → Dũng, chị Mai → cô Hoa (con = bé Bin). Tục ngữ mở/khép: “Thuận buồm xuôi gió”. BRK: 04 (gia hạn Sai/Đúng p3), 03 (9 nhóm p9), 07 (rehook trước chặng 4), 08 (lộ trình p15). Số chỉ lấy từ bài: 10/5 năm, ≤ 12 tháng, 15/8/2023, 200.000/400.000 đ (TT 28/2026, từ 01/4/2026), Đ33, 6/3 tháng, Đ36 9 nhóm, NĐ 49/2025 50 triệu/120 ngày, Đ16, TK02/TK02a. Câu đố questions[18].",
  "loop": {
    "open": "s01",
    "close": "s23"
  }
};
