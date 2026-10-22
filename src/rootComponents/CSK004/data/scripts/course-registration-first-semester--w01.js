// course-registration-first-semester--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "course-registration-first-semester--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "credit-system-freshmen",
    "slug": "course-registration-first-semester",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Đăng ký môn học kỳ đầu: chọn bao nhiêu tín chỉ là vừa?",
    "series": "Tín chỉ, GPA và học vụ — hiểu luật chơi đại học ngay học kỳ đầu"
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
            "id": "a-num",
            "t": "text",
            "text": "10 – 22",
            "x": 60,
            "y": 80,
            "size": 170,
            "at": "l1:Ten",
            "color": "accent",
            "hl": [
              {
                "text": "10 – 22",
                "at": "l1:twenty-two"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "tín chỉ mỗi kỳ",
            "x": 70,
            "y": 300,
            "size": 60,
            "at": "l2:credits"
          },
          {
            "id": "a-gs",
            "t": "text",
            "text": "Giả sử: 120 tín chỉ / 8 kỳ",
            "x": 70,
            "y": 400,
            "size": 44,
            "at": "l3:hundred",
            "color": "muted"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Ví dụ trong bài, theo khung TT 08/2021/TT-BGDĐT; số thật do trường công bố",
            "x": 60,
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
          "say": "Ten to twenty-two.",
          "sub": "Mười đến hai mươi hai.",
          "keys": [
            "Mười đến hai mươi hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In the lesson's example, that's how many credits you may register in one term.",
          "sub": "Trong ví dụ của bài, đó là số tín chỉ bạn được đăng ký trong một kỳ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Say, a program of one hundred twenty credits, over eight main terms.",
          "sub": "Giả sử chương trình 120 tín chỉ, chia cho 8 học kỳ chính."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But one detail matters more than the numbers.",
          "sub": "Nhưng có một chi tiết quan trọng hơn mọi con số.",
          "keys": [
            "quan trọng hơn mọi con số"
          ]
        }
      ],
      "ref": "p2"
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
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "convenience-store",
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1",
            "caption": "Tối thứ Hai · ca làm ở cửa hàng",
            "icon": "convenience-store"
          },
          {
            "id": "a-mx",
            "t": "text",
            "text": "“Chơi tối đa!”",
            "x": 900,
            "y": 645,
            "size": 50,
            "at": "l3:Max",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Liệu cơm gắp mắm”",
            "x": 70,
            "y": 520,
            "size": 64,
            "at": "l4:rice",
            "color": "accent",
            "hl": [
              {
                "text": "Liệu cơm",
                "at": "l4:rice"
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
          "say": "Meet Dũng.",
          "sub": "Đây là Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Freshman by day, convenience store clerk by night. Registration opens this week.",
          "sub": "Ngày là tân sinh viên, tối là nhân viên cửa hàng tiện lợi. Tuần này mở đăng ký môn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Max it out, like my roommate! More credits, faster degree!",
          "sub": "Chơi tối đa như bạn cùng phòng! Càng nhiều tín chỉ, càng nhanh ra trường!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: measure your rice before you pour the sauce.",
          "sub": "Ông bà dặn: “Liệu cơm gắp mắm.”",
          "keys": [
            "Liệu cơm gắp mắm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Dũng's rice bowl: classes by day, shifts by night. Let's measure it.",
          "sub": "Bát cơm của Dũng: ngày đi học, tối đi làm. Cùng đong thử xem."
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
            "text": "Kỳ đầu: bao nhiêu là vừa?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:right",
            "hl": [
              {
                "text": "bao nhiêu",
                "at": "l1:how many"
              }
            ]
          },
          {
            "id": "b-n1",
            "t": "text",
            "text": "Càng nhiều càng tốt",
            "x": 2028,
            "y": 165,
            "size": 48,
            "at": "l2:many",
            "color": "muted"
          },
          {
            "id": "b-n2",
            "t": "text",
            "text": "Càng ít càng nhẹ",
            "x": 2528,
            "y": 165,
            "size": 48,
            "at": "l2:few",
            "color": "muted"
          },
          {
            "id": "b-n1x",
            "t": "strike",
            "over": "b-n1",
            "at": "l2:many+300"
          },
          {
            "id": "b-n2x",
            "t": "strike",
            "over": "b-n2",
            "at": "l2:few+300"
          },
          {
            "id": "b-y1",
            "t": "text",
            "text": "Bám kế hoạch chuẩn, trong khung",
            "x": 2028,
            "y": 260,
            "size": 52,
            "at": "l3:standard",
            "color": "accent",
            "hl": [
              {
                "text": "kế hoạch chuẩn",
                "at": "l3:standard plan"
              }
            ]
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "Không trùng · có dự phòng",
            "x": 2028,
            "y": 345,
            "size": 50,
            "at": "l3:clashes"
          },
          {
            "id": "b-y3",
            "t": "text",
            "text": "Đăng ký xong: kiểm lại",
            "x": 2028,
            "y": 425,
            "size": 50,
            "at": "l4:check"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how many credits is right for your first term?",
          "sub": "Vậy kỳ đầu chọn bao nhiêu tín chỉ là vừa?",
          "keys": [
            "bao nhiêu tín chỉ là vừa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not: as many as possible. Not: as few as possible.",
          "sub": "Không phải: càng nhiều càng tốt. Cũng không phải: càng ít càng nhẹ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But: follow the standard plan, inside the school's frame, no clashes, with a backup.",
          "sub": "Mà là: bám kế hoạch chuẩn, trong khung trường công bố, không trùng lịch, có phương án dự phòng.",
          "keys": [
            "bám kế hoạch chuẩn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then check everything after you register.",
          "sub": "Rồi kiểm lại sau khi đăng ký."
        }
      ],
      "ref": "intro"
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
            "id": "b-ch",
            "t": "text",
            "text": "Sau bài “Đọc chương trình”",
            "x": 2968,
            "y": 170,
            "size": 40,
            "at": "l1:curriculum",
            "color": "muted"
          },
          {
            "id": "b-hk",
            "t": "text",
            "text": "Tuần đăng ký của Dũng · 7 chặng",
            "x": 2028,
            "y": 560,
            "size": 44,
            "at": "l2:seven",
            "hl": [
              {
                "text": "7 chặng",
                "at": "l2:seven stops"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 650,
            "w": 215,
            "h": 80,
            "at": "l2:seven stops+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 650,
            "w": 215,
            "h": 80,
            "at": "l2:seven stops+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 650,
            "w": 215,
            "h": 80,
            "at": "l2:seven stops+700",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 650,
            "w": 215,
            "h": 80,
            "at": "l2:seven stops+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 650,
            "w": 215,
            "h": 80,
            "at": "l2:seven stops+1100",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 650,
            "w": 215,
            "h": 80,
            "at": "l2:seven stops+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 650,
            "w": 215,
            "h": 80,
            "at": "l2:seven stops+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 tối",
            "x": 2048,
            "y": 660,
            "size": 40,
            "at": "l2:seven stops+400"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3 tối",
            "x": 2283,
            "y": 660,
            "size": 40,
            "at": "l2:seven stops+600"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Thứ Tư",
            "x": 2518,
            "y": 660,
            "size": 40,
            "at": "l2:seven stops+800"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T4 tối",
            "x": 2753,
            "y": 660,
            "size": 40,
            "at": "l2:seven stops+1000"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T5 sáng",
            "x": 2988,
            "y": 660,
            "size": 40,
            "at": "l2:seven stops+1200"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T5 chiều",
            "x": 3223,
            "y": 660,
            "size": 40,
            "at": "l2:seven stops+1400"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Tuần 3",
            "x": 3458,
            "y": 660,
            "size": 40,
            "at": "l2:seven stops+1600"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "You've read your curriculum. Now comes registering the right courses.",
          "sub": "Bạn đã đọc xong chương trình đào tạo. Giờ đến bước đăng ký môn cho đúng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng's registration week, in seven stops. Phone charged?",
          "sub": "Tuần đăng ký của Dũng, bảy chặng. Sạc pin điện thoại chưa?",
          "keys": [
            "bảy chặng"
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
            "text": "① Tối thứ Hai · Tính khung",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
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
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "laptop",
                "abacus"
              ],
              "camera": [
                {
                  "at": "l3",
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
            "at": "l1:Thảo",
            "caption": "Tối thứ Hai · quán cơm gần trường",
            "icon": "abacus"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Khung: ⅔ → 3/2 khối lượng TB",
            "x": 3996,
            "y": 160,
            "size": 46,
            "at": "l2:frame",
            "hl": [
              {
                "text": "⅔ → 3/2",
                "at": "l2:halves"
              }
            ]
          },
          {
            "id": "c-tb",
            "t": "text",
            "text": "120 / 8 = 15 tín chỉ/kỳ",
            "x": 3996,
            "y": 245,
            "size": 48,
            "at": "l3:Fifteen"
          },
          {
            "id": "c-mn",
            "t": "text",
            "text": "Tối thiểu: 15 × ⅔ = 10",
            "x": 3996,
            "y": 330,
            "size": 48,
            "at": "l4:ten"
          },
          {
            "id": "c-mx",
            "t": "text",
            "text": "Tối đa: 15 × 3/2 = 22,5",
            "x": 3996,
            "y": 410,
            "size": 48,
            "at": "l4:point five"
          },
          {
            "id": "c-22",
            "t": "text",
            "text": "→ không quá 22",
            "x": 4036,
            "y": 490,
            "size": 54,
            "at": "l5:twenty-two",
            "color": "accent",
            "hl": [
              {
                "text": "không quá 22",
                "at": "l5:twenty-two"
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
          "say": "Stop one: Monday night. Meet Thảo, Dũng's classmate and spreadsheet queen.",
          "sub": "Chặng một: tối thứ Hai. Đây là Thảo, bạn cùng ngành của Dũng, nữ hoàng trang tính.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The rule's frame: at least two thirds, at most three halves of the average term load.",
          "sub": "Khung của quy chế: không dưới hai phần ba, không quá ba phần hai khối lượng trung bình một kỳ.",
          "keys": [
            "hai phần ba",
            "ba phần hai"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Say one hundred twenty credits, eight main terms. Fifteen a term on average.",
          "sub": "Giả sử 120 tín chỉ, 8 học kỳ chính. Trung bình 15 tín chỉ một kỳ.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Fifteen times two thirds: ten. Times three halves: twenty-two point five.",
          "sub": "Mười lăm nhân hai phần ba: mười. Nhân ba phần hai: hai mươi hai phẩy năm.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So no more than twenty-two, in whole credits.",
          "sub": "Vậy không quá 22 tín chỉ, nếu tính theo số nguyên.",
          "keys": [
            "không quá 22"
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
      "ref": "p1,p2"
    },
    {
      "id": "s05",
      "module": "BRK-03",
      "data": {
        "value": 22.5,
        "decimals": 1,
        "suffix": " tín chỉ",
        "label": "tối đa trong ví dụ, tính số nguyên là 22",
        "illus": "abacus"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three halves of fifteen.",
          "sub": "Ba phần hai của mười lăm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Twenty-two point five. In whole credits, twenty-two.",
          "sub": "Hai mươi hai phẩy năm. Tính số nguyên: hai mươi hai."
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
            "id": "c-tb2",
            "t": "text",
            "text": "Đối chiếu thông báo trường",
            "x": 3996,
            "y": 580,
            "size": 44,
            "at": "l1:notice",
            "hl": [
              {
                "text": "thông báo trường",
                "at": "l1:notice"
              }
            ]
          },
          {
            "id": "c-r",
            "t": "text",
            "text": "Tính khung trước, chọn môn sau",
            "x": 3996,
            "y": 660,
            "size": 54,
            "at": "l2:limits",
            "color": "accent",
            "hl": [
              {
                "text": "Tính khung trước",
                "at": "l2:limits"
              }
            ]
          },
          {
            "id": "c-dt",
            "t": "text",
            "text": "Dự thảo: ngoại lệ, chưa hiệu lực",
            "x": 4836,
            "y": 705,
            "size": 40,
            "at": "l3:draft",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Then check your school's notice. It may round, or have its own rules.",
          "sub": "Rồi đối chiếu thông báo đăng ký của trường, vì trường có thể làm tròn hoặc có quy định riêng.",
          "keys": [
            "thông báo đăng ký của trường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Work out your limits first, then choose courses.",
          "sub": "Tính khung trước, chọn môn sau.",
          "keys": [
            "Tính khung trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A June twenty twenty-six draft keeps this frame and adds exceptions.",
          "sub": "Dự thảo quy chế mới đăng ngày 10/6/2026 giữ khung này, thêm ngoại lệ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No minimum in the final term or special cases. Good students may get their own maximum.",
          "sub": "Mức tối thiểu không áp dụng cho kỳ cuối khoá, trường hợp đặc biệt. Sinh viên khá trở lên có thể có mức tối đa riêng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "But it's a draft. Follow your school's current rules.",
          "sub": "Nhưng dự thảo chưa có hiệu lực: theo quy chế trường đang áp dụng.",
          "keys": [
            "chưa có hiệu lực"
          ]
        }
      ],
      "ref": "p2,p3,p4"
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tối thứ Ba · Bao nhiêu?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1"
                }
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
            "at": "l1:calls",
            "caption": "Tối thứ Ba · gọi về quê",
            "icon": "telephone-receiver"
          },
          {
            "id": "d-mx",
            "t": "text",
            "text": "Bạn cùng phòng: tối đa",
            "x": 5964,
            "y": 160,
            "size": 46,
            "at": "l3:most",
            "color": "muted"
          },
          {
            "id": "d-mn",
            "t": "text",
            "text": "Bố: tối thiểu",
            "x": 5964,
            "y": 230,
            "size": 46,
            "at": "l3:least",
            "color": "muted"
          },
          {
            "id": "d-ok",
            "t": "text",
            "text": "Kỳ đầu: đúng kế hoạch chuẩn",
            "x": 5964,
            "y": 320,
            "size": 52,
            "at": "l4:standard",
            "color": "accent",
            "hl": [
              {
                "text": "đúng kế hoạch chuẩn",
                "at": "l4:standard plan"
              }
            ]
          },
          {
            "id": "d-td",
            "t": "text",
            "text": "= đúng tiến độ thiết kế",
            "x": 6004,
            "y": 400,
            "size": 44,
            "at": "l5:pace"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: Tuesday night. Dũng calls home. This is Bác Bình, his dad.",
          "sub": "Chặng hai: tối thứ Ba, Dũng gọi về quê. Đây là bác Bình, bố Dũng.",
          "keys": [
            "bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Take the fewest credits, son. Go easy on yourself.",
          "sub": "Đăng ký ít nhất thôi con, cho nhẹ người.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "My roommate says take the most. Dad says take the least!",
          "sub": "Bạn cùng phòng bảo lấy tối đa. Bố bảo lấy tối thiểu!",
          "face": "worried",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Safest first term: exactly the term-one courses in the standard plan.",
          "sub": "Kỳ đầu an toàn nhất: đăng ký đúng các môn kế hoạch chuẩn gợi ý cho học kỳ một.",
          "keys": [
            "kế hoạch chuẩn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That's the pace the program was designed for, without next term's load.",
          "sub": "Đó là tiến độ chương trình đã thiết kế, chưa phải gánh thêm môn kỳ sau."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
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
            "id": "d-low",
            "t": "text",
            "text": "Sát tối thiểu: trượt vài môn →",
            "x": 5964,
            "y": 500,
            "size": 44,
            "at": "l1:minimum",
            "color": "coral"
          },
          {
            "id": "d-low2",
            "t": "text",
            "text": "tín chỉ tụt sau kế hoạch",
            "x": 6004,
            "y": 570,
            "size": 44,
            "at": "l1:behind",
            "color": "coral"
          },
          {
            "id": "d-yr",
            "t": "text",
            "text": "Năm học theo tín chỉ tích luỹ",
            "x": 5964,
            "y": 650,
            "size": 42,
            "at": "l2:earned",
            "hl": [
              {
                "text": "tín chỉ tích luỹ",
                "at": "l2:earned"
              }
            ]
          },
          {
            "id": "d-yr2",
            "t": "text",
            "text": "bạn năm hai, mình năm nhất",
            "x": 6804,
            "y": 705,
            "size": 38,
            "at": "l2:friends",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And the minimum isn't so easy. Fail a few courses, and you fall behind the plan.",
          "sub": "Đăng ký sát tối thiểu cũng chẳng nhẹ. Trượt vài môn, tín chỉ tích luỹ tụt lại so với kế hoạch.",
          "keys": [
            "tụt lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Year level follows credits earned. You could stay a first-year while friends move up.",
          "sub": "Năm học xếp theo số tín chỉ tích luỹ. Bạn có thể vẫn năm nhất khi bạn cùng khoá đã lên năm hai.",
          "keys": [
            "vẫn năm nhất"
          ]
        }
      ],
      "ref": "p6"
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
            "at": "a1",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Tư · Lịch sống",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "center"
                }
              ],
              "left": {
                "label": "Cách A: như bạn cùng phòng",
                "ok": false
              },
              "right": {
                "label": "Cách B: ghi ca làm trước",
                "ok": true
              }
            },
            "at": "l1:ways",
            "caption": "Ca làm buổi tối · hai cách",
            "icon": "convenience-store"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "A · trùng ca → nghỉ học",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "a2:missing",
            "color": "coral"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "→ bị nhắc ở chỗ làm",
            "x": 7972,
            "y": 250,
            "size": 42,
            "at": "a2:warnings",
            "color": "muted"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "B · ca làm vào lịch trước",
            "x": 7932,
            "y": 340,
            "size": 48,
            "at": "b1:calendar",
            "color": "accent"
          },
          {
            "id": "e-b2",
            "t": "text",
            "text": "→ học đều, giữ việc",
            "x": 7972,
            "y": 420,
            "size": 42,
            "at": "b2:kept"
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "Lịch đăng ký khớp lịch sống",
            "x": 7932,
            "y": 530,
            "size": 58,
            "at": "l2:fit",
            "color": "accent",
            "hl": [
              {
                "text": "khớp lịch sống",
                "at": "l2:life"
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
          "say": "Stop three: Wednesday, on shift. Two ways to register with a job.",
          "sub": "Chặng ba: thứ Tư, giữa ca làm. Hai cách đăng ký khi có việc làm thêm."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "Same as my roommate: lots of credits. Two night classes clash with shifts? I'll take leave.",
          "sub": "Đăng ký giống bạn cùng phòng, thật nhiều. Hai buổi tối trùng ca? Khi nào cần thì xin nghỉ.",
          "phase": "a",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "dung",
          "say": "Mid-term: I'm missing classes, and getting warnings at work.",
          "sub": "Giữa kỳ: vừa nghỉ học, vừa bị nhắc ở chỗ làm.",
          "phase": "a",
          "face": "sad"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "Shifts go in my calendar first. Only classes that don't touch them.",
          "sub": "Ghi giờ làm vào lịch trước. Chỉ chọn lớp không đụng ca.",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "dung",
          "say": "All my term-one courses, steady classes, and I kept my job.",
          "sub": "Đủ môn kế hoạch chuẩn kỳ một, đi học đều, mà vẫn giữ được việc.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your registration timetable must fit your life.",
          "sub": "Lịch đăng ký phải khớp với lịch sống.",
          "keys": [
            "khớp với lịch sống"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "text": "④ Tối thứ Tư · Giấy và bút",
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
                "spiral-calendar",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
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
            "at": "l1:night",
            "caption": "Tối thứ Tư · phòng trọ",
            "icon": "spiral-calendar"
          },
          {
            "id": "f-m",
            "t": "text",
            "text": "Mở · đóng · điều chỉnh · rút",
            "x": 60,
            "y": 1250,
            "size": 46,
            "at": "l2:open"
          },
          {
            "id": "f-n",
            "t": "text",
            "text": "Nguồn đúng: phòng đào tạo, cổng",
            "x": 60,
            "y": 1330,
            "size": 42,
            "at": "l3:office",
            "hl": [
              {
                "text": "Nguồn đúng",
                "at": "l3:Trust"
              }
            ]
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "Nhắc trước 1 ngày",
            "x": 60,
            "y": 1410,
            "size": 52,
            "at": "l4:reminder",
            "color": "accent",
            "hl": [
              {
                "text": "trước 1 ngày",
                "at": "l4:day before"
              }
            ]
          },
          {
            "id": "f-x",
            "t": "text",
            "text": "Lỡ hạn → mất môn cần học",
            "x": 60,
            "y": 1490,
            "size": 44,
            "at": "l5:Miss",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: Wednesday night. Paper, pencil, and the school's calendar.",
          "sub": "Chặng bốn: tối thứ Tư. Giấy, bút, và lịch của trường."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each school posts its own dates: open, close, adjustment rounds, withdrawal deadline.",
          "sub": "Mỗi trường công bố lịch riêng: ngày mở, ngày đóng, các đợt điều chỉnh, hạn rút học phần."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The ministry rule sets no dates. Trust the training office and the portal.",
          "sub": "Quy chế của Bộ không ghi ngày cụ thể. Nguồn đúng là phòng đào tạo và cổng sinh viên.",
          "keys": [
            "phòng đào tạo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Every date into my phone, with a reminder the day before.",
          "sub": "Mọi mốc vào lịch điện thoại, nhắc trước một ngày.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Miss registration, and you may lose a course you need this term.",
          "sub": "Lỡ hạn đăng ký là lỗi khó gỡ: có thể mất môn cần học trong kỳ.",
          "keys": [
            "lỗi khó gỡ"
          ]
        }
      ],
      "ref": "p9,p10"
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
          }
        ],
        "items": [
          {
            "id": "f-h",
            "t": "text",
            "text": "6:00–20:00 · thứ Hai → thứ Bảy",
            "x": 60,
            "y": 1570,
            "size": 40,
            "at": "l1:six",
            "color": "muted"
          },
          {
            "id": "f-g0",
            "t": "box",
            "x": 60,
            "y": 1650,
            "w": 110,
            "h": 52,
            "at": "l2:box+0",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-g1",
            "t": "box",
            "x": 180,
            "y": 1650,
            "w": 110,
            "h": 52,
            "at": "l2:box+150",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-g2",
            "t": "box",
            "x": 300,
            "y": 1710,
            "w": 110,
            "h": 52,
            "at": "l2:box+300",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-g3",
            "t": "box",
            "x": 60,
            "y": 1770,
            "w": 110,
            "h": 52,
            "at": "l2:box+450",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-g4",
            "t": "box",
            "x": 180,
            "y": 1770,
            "w": 110,
            "h": 52,
            "at": "l2:box+600",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-g5",
            "t": "box",
            "x": 420,
            "y": 1710,
            "w": 110,
            "h": 52,
            "at": "l2:box+750",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "f-gx",
            "t": "box",
            "x": 400,
            "y": 1690,
            "w": 110,
            "h": 52,
            "at": "l2:overlaps",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "f-tr",
            "t": "text",
            "text": "ô chồng?",
            "x": 530,
            "y": 1690,
            "size": 44,
            "at": "l2:overlaps+200",
            "color": "coral"
          },
          {
            "id": "f-hv",
            "t": "text",
            "text": "Môn nặng: chia ra các kỳ",
            "x": 900,
            "y": 1790,
            "size": 44,
            "at": "l3:heavy",
            "hl": [
              {
                "text": "chia ra các kỳ",
                "at": "l3:stack"
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
          "say": "Regular classes run six a.m. to eight p.m., Monday to Saturday.",
          "sub": "Quy chế ghi giờ học chính quy từ 6 giờ đến 20 giờ, thứ Hai đến thứ Bảy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sketch it on paper. One box per class. Any overlaps? A day packed from dawn to dark?",
          "sub": "Xếp thử trên giấy, mỗi lớp một ô. Có ô nào chồng nhau? Có ngày nào học kín từ sáng tới tối?",
          "keys": [
            "Xếp thử trên giấy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Ask seniors which courses are heavy. Don't stack project courses in one term.",
          "sub": "Hỏi anh chị khoá trên môn nào nặng. Đừng dồn nhiều môn nặng, môn đồ án vào một kỳ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Their deadlines and exams pile up at the end. Also read each course's prerequisites.",
          "sub": "Hạn nộp và lịch thi các môn này thường dồn về cuối kỳ. Đọc cả điều kiện tiên quyết của từng môn."
        }
      ],
      "ref": "p13,p14,p15"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Đến giờ mở cổng, lớp đã đầy. Làm sao?",
        "illus": "anxious-face-with-sweat"
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
          "say": "The portal opens, and your class is already full. Now what?",
          "sub": "Đến giờ mở cổng, lớp đã đầy. Giờ làm sao?",
          "keys": [
            "lớp đã đầy"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p16"
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Sáng thứ Năm · Lớp đầy",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "campus",
              "label": "Nhóm lớp",
              "actor": {
                "id": "thao",
                "side": "left"
              },
              "contact": {
                "name": "Nhóm lớp",
                "illus": "busts-in-silhouette"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Ai cần chỗ lớp này, chuyển khoản mình nhường.",
                  "at": "l3"
                },
                {
                  "from": "me",
                  "text": "Không chuyển tiền. Mình đăng ký lớp dự phòng rồi.",
                  "at": "l5"
                }
              ]
            },
            "at": "l1:opens",
            "caption": "Sáng thứ Năm · giờ mở cổng",
            "icon": "admission-tickets"
          },
          {
            "id": "g-cq",
            "t": "text",
            "text": "“Chuyển khoản, mình nhường”",
            "x": 2028,
            "y": 1250,
            "size": 46,
            "at": "l3:Transfer",
            "color": "coral"
          },
          {
            "id": "g-cqx",
            "t": "strike",
            "over": "g-cq",
            "at": "l4:No"
          },
          {
            "id": "g-ht",
            "t": "text",
            "text": "Chỉ trên hệ thống trường",
            "x": 2028,
            "y": 1335,
            "size": 54,
            "at": "l4:system",
            "color": "accent",
            "hl": [
              {
                "text": "hệ thống trường",
                "at": "l4:system"
              }
            ]
          },
          {
            "id": "g-ss",
            "t": "text",
            "text": "Dự phòng · chụp màn hình · hỏi",
            "x": 2028,
            "y": 1430,
            "size": 44,
            "at": "l5:Backup"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: Thursday morning. The portal opens. Classes vanish like concert tickets.",
          "sub": "Chặng năm: sáng thứ Năm. Cổng mở. Lớp hết chỗ nhanh như vé concert.",
          "keys": [
            "vé concert"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "My compulsory class is full! And there's a message in the class group.",
          "sub": "Lớp môn bắt buộc của mình đầy rồi! Mà nhóm lớp có tin nhắn.",
          "face": "surprised",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It says: need a seat in this class? Transfer money, and I'll give you mine.",
          "sub": "Tin nhắn viết: “Ai cần chỗ lớp này, chuyển khoản mình nhường.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No transfer. Official registration only happens on the school's system.",
          "sub": "Không chuyển tiền. Đăng ký chính thức chỉ diễn ra trên hệ thống của trường.",
          "keys": [
            "hệ thống của trường"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Backup class, done. Screenshot of the full class. Now I ask the training office.",
          "sub": "Lớp dự phòng, xong. Chụp lại lớp đầy. Giờ hỏi phòng đào tạo về đợt điều chỉnh.",
          "face": "happy",
          "pose": "phone"
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 200
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
          }
        ],
        "items": [
          {
            "id": "g-ab",
            "t": "text",
            "text": "Trước giờ mở: lớp chính + lớp B",
            "x": 2028,
            "y": 1540,
            "size": 44,
            "at": "l1:two options",
            "hl": [
              {
                "text": "lớp B",
                "at": "l1:another"
              }
            ]
          },
          {
            "id": "g-sw",
            "t": "text",
            "text": "Đầy → chuyển ngay, đừng tải lại",
            "x": 2028,
            "y": 1620,
            "size": 44,
            "at": "l2:Switch"
          },
          {
            "id": "g-all",
            "t": "text",
            "text": "Đầy hết → phòng đào tạo, cố vấn",
            "x": 2028,
            "y": 1700,
            "size": 42,
            "at": "l3:everywhere",
            "color": "muted"
          },
          {
            "id": "g-r",
            "t": "text",
            "text": "Có dự phòng, không hoảng",
            "x": 2868,
            "y": 1790,
            "size": 50,
            "at": "l4:backup",
            "color": "accent",
            "hl": [
              {
                "text": "không hoảng",
                "at": "l4:panic"
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
          "say": "Before opening time, prepare two options: your main class, and another class or course in the same group.",
          "sub": "Trước giờ mở, chuẩn bị hai phương án: lớp chính, và một lớp khác cùng môn hoặc môn khác cùng nhóm tự chọn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Class full? Switch to plan B. Don't sit refreshing the page.",
          "sub": "Lớp đầy? Chuyển ngay sang phương án dự phòng, đừng ngồi tải lại trang.",
          "keys": [
            "phương án dự phòng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Compulsory course full everywhere? Ask the training office or your advisor about adjustments.",
          "sub": "Môn bắt buộc hết chỗ mọi lớp? Hỏi phòng đào tạo hoặc cố vấn về đợt điều chỉnh, lớp mở thêm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "With a backup plan, a full class never turns into panic.",
          "sub": "Có phương án dự phòng thì lớp đầy không thành hoảng loạn.",
          "keys": [
            "không thành hoảng loạn"
          ]
        }
      ],
      "ref": "p16,p17,p19"
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
          },
          {
            "at": 150,
            "fit": "H",
            "ms": 900
          },
          {
            "at": "l6",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Chiều thứ Năm · Kiểm lại",
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "camera-with-flash"
              ],
              "camera": [
                {
                  "at": "l6",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:afternoon",
            "caption": "Chiều thứ Năm · cổng sinh viên",
            "icon": "laptop"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1260,
            "w": 46,
            "h": 46,
            "at": "l2:successfully",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1242,
            "size": 58,
            "at": "l2:successfully+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Môn đăng ký thành công",
            "x": 4064,
            "y": 1250,
            "size": 44,
            "at": "l2:successfully+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1340,
            "w": 46,
            "h": 46,
            "at": "l3:limits",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1322,
            "size": 58,
            "at": "l3:limits+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Tín chỉ trong khung",
            "x": 4064,
            "y": 1330,
            "size": 44,
            "at": "l3:limits+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1420,
            "w": 46,
            "h": 46,
            "at": "l3:clashes",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1402,
            "size": 58,
            "at": "l3:clashes+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Không trùng lịch học, thi",
            "x": 4064,
            "y": 1410,
            "size": 44,
            "at": "l3:clashes+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1500,
            "w": 46,
            "h": 46,
            "at": "l4:screenshot",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1482,
            "size": 58,
            "at": "l4:screenshot+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Chụp màn hình",
            "x": 4064,
            "y": 1490,
            "size": 44,
            "at": "l4:screenshot+200"
          },
          {
            "id": "h-c4",
            "t": "box",
            "x": 3996,
            "y": 1580,
            "w": 46,
            "h": 46,
            "at": "l5:tuition",
            "stroke": 5
          },
          {
            "id": "h-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1562,
            "size": 58,
            "at": "l5:tuition+600",
            "color": "accent"
          },
          {
            "id": "h-l4",
            "t": "text",
            "text": "Học phí, hạn đóng",
            "x": 4064,
            "y": 1570,
            "size": 44,
            "at": "l5:tuition+200"
          },
          {
            "id": "h-dc",
            "t": "text",
            "text": "Thiếu, sai lớp → báo, kèm ảnh",
            "x": 3996,
            "y": 1680,
            "size": 46,
            "at": "l7:round",
            "color": "accent",
            "hl": [
              {
                "text": "kèm ảnh",
                "at": "l7:screenshot"
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
          "say": "Stop six: Thursday afternoon. Registered? Not done yet. Check.",
          "sub": "Chặng sáu: chiều thứ Năm. Đăng ký xong? Chưa xong đâu. Kiểm lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Open the portal and see which courses registered successfully.",
          "sub": "Mở cổng sinh viên, xem danh sách môn đã đăng ký thành công."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Compare credits with your limits. Check for clashes in classes and exams.",
          "sub": "So số tín chỉ với khung tối thiểu, tối đa. Kiểm không trùng lịch học, lịch thi nếu có."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Take a screenshot of the result.",
          "sub": "Chụp màn hình kết quả."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And look at the tuition to pay, and the deadline.",
          "sub": "Và xem học phí phải đóng, hạn đóng."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Wait. One course is missing!",
          "sub": "Ơ. Thiếu mất một môn!",
          "face": "surprised"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Report it in the adjustment round, with your screenshot.",
          "sub": "Báo phòng đào tạo trong đợt điều chỉnh, kèm ảnh chụp màn hình.",
          "keys": [
            "kèm ảnh chụp màn hình"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s16",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Tuần thứ ba",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "shrug"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Nghỉ học là bỏ môn",
          "why": "Chưa huỷ trên hệ thống, môn vẫn trong khối lượng đăng ký. Vắng thi không lý do: điểm 0, dễ thành F.",
          "rule": "Muốn bỏ môn thì bỏ trên hệ thống"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Week three. I hate this elective. I'll just stop going.",
          "sub": "Tuần thứ ba. Ngán môn tự chọn này. Thôi nghỉ luôn.",
          "pose": "shrug",
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
          "say": "Not cancelled on the system? It's still in your load. Skip the exam without reason: zero.",
          "sub": "Chưa huỷ trên hệ thống thì môn vẫn nằm trong khối lượng đăng ký. Vắng thi không lý do chính đáng: điểm 0.",
          "keys": [
            "điểm 0"
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
          "say": "Withdraw on the system, before the deadline. Screenshot.",
          "sub": "Rút trên hệ thống, trước hạn. Chụp màn hình.",
          "phase": "redo",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Drop a course on the system, not by vanishing.",
          "sub": "Muốn bỏ môn thì bỏ trên hệ thống, đừng bỏ bằng cách vắng mặt.",
          "phase": "redo",
          "keys": [
            "bỏ trên hệ thống"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p11,p12"
    },
    {
      "id": "s17",
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
            "at": "l1",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tuần 3 · Bỏ môn đúng cách",
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "check-mark-button"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Stop seven",
            "caption": "Tuần thứ ba · rút trên cổng",
            "icon": "check-mark-button"
          },
          {
            "id": "i-no",
            "t": "text",
            "text": "Nghỉ học = bỏ môn",
            "x": 5964,
            "y": 1250,
            "size": 54,
            "at": "l2:absent",
            "color": "muted"
          },
          {
            "id": "i-nox",
            "t": "strike",
            "over": "i-no",
            "at": "l2:absent+400"
          },
          {
            "id": "i-0",
            "t": "text",
            "text": "Vắng thi không lý do → 0 → F",
            "x": 5964,
            "y": 1340,
            "size": 46,
            "at": "l3:zero",
            "color": "coral",
            "hl": [
              {
                "text": "0 → F",
                "at": "l3:F"
              }
            ]
          },
          {
            "id": "i-cb",
            "t": "text",
            "text": "Tín chỉ trượt > ½ → cảnh báo",
            "x": 5964,
            "y": 1425,
            "size": 46,
            "at": "l4:half",
            "color": "coral",
            "hl": [
              {
                "text": "cảnh báo",
                "at": "l4:warnings"
              }
            ]
          },
          {
            "id": "i-r",
            "t": "text",
            "text": "Bỏ trên hệ thống, đúng hạn",
            "x": 5964,
            "y": 1540,
            "size": 58,
            "at": "l5:system",
            "color": "accent",
            "hl": [
              {
                "text": "trên hệ thống",
                "at": "l5:system"
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
          "say": "Stop seven: week three. Dũng withdrew properly. Here's why it matters.",
          "sub": "Chặng bảy: tuần thứ ba. Dũng đã rút môn đúng cách. Vì sao quan trọng?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Being absent is not dropping. The course stays on your record.",
          "sub": "Vắng mặt không phải là bỏ môn. Môn vẫn nằm trong khối lượng đăng ký."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Missed exams without good reason get zero, so the course easily becomes an F.",
          "sub": "Vắng thi, đánh giá không lý do chính đáng: điểm 0, môn dễ thành F."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And failed credits count for warnings, for example over half your term's load.",
          "sub": "Tín chỉ không đạt còn tính khi xét cảnh báo học tập, như khi vượt một nửa khối lượng đăng ký trong kỳ.",
          "keys": [
            "cảnh báo học tập"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So drop on the system, on time.",
          "sub": "Vậy: bỏ trên hệ thống, đúng hạn.",
          "keys": [
            "bỏ trên hệ thống"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s18",
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
            "text": "Tối thứ Hai sau · cùng ca làm",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Same"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "convenience-store",
                "spiral-calendar"
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
            "at": "l1:shop",
            "caption": "Tối thứ Hai tuần sau · cửa hàng",
            "icon": "convenience-store"
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Đúng kế hoạch chuẩn · không trùng ca",
            "x": 7932,
            "y": 1270,
            "size": 44,
            "at": "l2:standard",
            "hl": [
              {
                "text": "không trùng ca",
                "at": "l2:clashes"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Liệu cơm gắp mắm”",
            "x": 7932,
            "y": 1410,
            "size": 64,
            "at": "l3:rice",
            "color": "accent",
            "hl": [
              {
                "text": "Liệu cơm",
                "at": "l3:rice"
              }
            ]
          },
          {
            "id": "j-ok",
            "t": "text",
            "text": "→ bát vừa đủ ăn",
            "x": 7972,
            "y": 1510,
            "size": 50,
            "at": "l3:bowl"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Monday night, a week later. Same shop, same Dũng.",
          "sub": "Tối thứ Hai tuần sau. Vẫn cửa hàng ấy, vẫn Dũng ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Term-one courses from the standard plan. Not one class clashes with my shifts.",
          "sub": "Đúng các môn kế hoạch chuẩn kỳ một. Không lớp nào trùng ca làm.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Measure your rice before you pour the sauce. This time, Dũng's bowl is just right.",
          "sub": "“Liệu cơm gắp mắm.” Lần này, bát cơm của Dũng vừa đủ ăn.",
          "keys": [
            "vừa đủ ăn"
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
      "ref": "p5,p8"
    },
    {
      "id": "s19",
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
            "at": "l1:limits",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "G",
            "zoom": 0.8,
            "ms": 700
          },
          {
            "at": "l4",
            "fit": "I",
            "zoom": 0.8,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4736,
            "y": 650,
            "at": "l1:limits"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8652,
            "y": 530,
            "at": "l2:fit"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2668,
            "y": 1330,
            "at": "l3:ready"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 6664,
            "y": 1540,
            "at": "l4:system"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Khung theo TT 08/2021; số thật do trường bạn công bố. Dự thảo mới chưa có hiệu lực.",
            "x": 7932,
            "y": 1805,
            "size": 28,
            "at": "l5:end",
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
          "say": "So: work out your limits first.",
          "sub": "Tóm lại: tính khung trước.",
          "keys": [
            "tính khung trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Make your registration timetable fit your real life, shifts and all.",
          "sub": "Lịch đăng ký phải khớp lịch sống thật, kể cả ca làm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Keep a backup class ready, because popular classes fill up fast.",
          "sub": "Chuẩn bị sẵn lớp dự phòng, vì lớp đông người chọn đầy rất nhanh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Drop courses on the system, never by vanishing.",
          "sub": "Bỏ môn trên hệ thống, đừng bỏ bằng cách vắng mặt."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Right now: work out your frame and sketch a paper timetable. Then: the GPA lesson.",
          "sub": "Việc làm ngay: tính khung, xếp thử thời khoá biểu trên giấy. Rồi đọc bài “GPA tính thế nào”.",
          "keys": [
            "xếp thử thời khoá biểu trên giấy"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p21"
    },
    {
      "id": "s20",
      "module": "QUIZ-01",
      "data": {
        "q": "Thao sees a message offering a class seat for a bank transfer, what should she do?",
        "options": [
          "Transfer the money quickly before another student takes the seat",
          "Not transfer money, register the backup class, and ask the training office",
          "Ask the sender for a discount and share the offer with friends"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "money-with-wings",
        "why": "Không chuyển tiền; đăng ký lớp dự phòng, hỏi phòng đào tạo. Chỗ học thật chỉ ghi trên hệ thống trường."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Thao sees a message offering a class seat for a bank transfer, what should she do?",
          "sub": "Thảo thấy tin nhắn nhường chỗ lớp nếu chuyển khoản, Thảo nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No transfer. Register the backup class and ask the training office.",
          "sub": "Không chuyển tiền. Đăng ký lớp dự phòng, hỏi phòng đào tạo."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Real seats live only on the school's system.",
          "sub": "Chỗ học thật chỉ có trên hệ thống của trường."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[30]"
    },
    {
      "id": "s21",
      "module": "END-05",
      "data": {
        "text": "Tối nay: tính khung, xếp lịch trên giấy",
        "sub": "Rồi thử bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, your frame and a paper timetable. Then try the forty questions below.",
          "sub": "Tối nay: tính khung và xếp lịch trên giấy. Rồi thử bốn mươi câu bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi credit-system-freshmen, bài 3) theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô theo TUẦN ĐĂNG KÝ MÔN của Dũng (HOOK-24 neo số “10 – 22 tín chỉ” từ ví dụ p2 → tối thứ Hai ca làm ở cửa hàng “chơi tối đa” → tối thứ Hai Thảo tính khung → tối thứ Ba bác Bình “lấy tối thiểu” → thứ Tư Dũng A/B với ca làm → tối thứ Tư mốc lịch + xếp thử trên giấy → sáng thứ Năm cổng mở, lớp đầy, tin nhắn “chuyển khoản mình nhường” (Thảo) → chiều thứ Năm kiểm lại → “Khoan đã!” tuần 3 nghỉ học ≠ bỏ môn → tối thứ Hai tuần sau, cùng ca làm (khép vòng). Nhân vật theo w145/_series/credit-system-freshmen.md: Dũng, Thảo, bác Bình. Số chỉ từ bài: ⅔–3/2, 120/8/15/10/22,5/22 (ví dụ giả sử của bài), 10/6/2026, 6–20 giờ thứ Hai–thứ Bảy, điểm 0, ½. Ngắt nhịp: BRK-03 22,5 (s05, p2), BRK-07 lớp đầy (s12, p16), DLG s16 (p11–p12). Tục ngữ “Liệu cơm gắp mắm” mở/khép. Câu đố questions[30]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
