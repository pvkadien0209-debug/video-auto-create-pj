// credit-system-how-university-works--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "credit-system-how-university-works--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "credit-system-freshmen",
    "slug": "credit-system-how-university-works",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Học theo tín chỉ ở đại học khác phổ thông thế nào?",
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
            "id": "a-q",
            "t": "text",
            "text": "1 tín chỉ =",
            "x": 60,
            "y": 90,
            "size": 120,
            "at": "l1:credit",
            "color": "ink"
          },
          {
            "id": "a-b15",
            "t": "box",
            "x": 60,
            "y": 270,
            "w": 300,
            "h": 130,
            "at": "l2:Fifteen",
            "stroke": 6
          },
          {
            "id": "a-15",
            "t": "text",
            "text": "15 giờ",
            "x": 95,
            "y": 285,
            "size": 86,
            "at": "l2:Fifteen+200"
          },
          {
            "id": "a-b50",
            "t": "box",
            "x": 440,
            "y": 270,
            "w": 300,
            "h": 130,
            "at": "l2:fifty",
            "stroke": 6
          },
          {
            "id": "a-50",
            "t": "text",
            "text": "50 giờ",
            "x": 475,
            "y": 285,
            "size": 86,
            "at": "l2:fifty+200",
            "color": "accent",
            "hl": [
              {
                "text": "50 giờ",
                "at": "l3:fifty"
              }
            ]
          },
          {
            "id": "a-15x",
            "t": "strike",
            "over": "a-15",
            "at": "l3:Wrong"
          },
          {
            "id": "a-50r",
            "t": "ring",
            "around": [
              "a-b50"
            ],
            "color": "accent",
            "stroke": 9,
            "at": "l3:fifty"
          },
          {
            "id": "a-def",
            "t": "text",
            "text": "giờ học tập định mức",
            "x": 60,
            "y": 440,
            "size": 50,
            "at": "l4:standard",
            "color": "muted"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Thông tư 17/2021/TT-BGDĐT (chuẩn chương trình đào tạo)",
            "x": 60,
            "y": 735,
            "size": 26,
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
          "say": "Quick guess. One university credit equals how many hours of study?",
          "sub": "Đoán nhanh: một tín chỉ đại học bằng bao nhiêu giờ học?",
          "keys": [
            "bao nhiêu giờ học"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fifteen hours? Or fifty?",
          "sub": "Mười lăm giờ? Hay năm mươi?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fifteen sounds right. Wrong. The answer is fifty.",
          "sub": "Mười lăm nghe rất xuôi tai. Sai rồi. Đáp án là năm mươi.",
          "keys": [
            "năm mươi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Fifty standard hours per credit, under Circular seventeen of twenty twenty-one.",
          "sub": "Năm mươi giờ học tập định mức cho mỗi tín chỉ, theo Thông tư 17/2021.",
          "keys": [
            "Năm mươi giờ học tập định mức"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
      "ref": "intro,p1"
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
              "set": "campus",
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
                "school",
                "backpack"
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
            "caption": "Sáng nhập học · hội trường",
            "icon": "school"
          },
          {
            "id": "a-gu",
            "t": "text",
            "text": "“Giờ trên lớp = giờ học?”",
            "x": 60,
            "y": 520,
            "size": 46,
            "at": "l3:class time",
            "color": "coral",
            "hl": [
              {
                "text": "giờ học",
                "at": "l3:study time"
              }
            ]
          },
          {
            "id": "a-ca1",
            "t": "text",
            "text": "“Muốn biết phải hỏi,",
            "x": 60,
            "y": 600,
            "size": 52,
            "at": "l4:ask",
            "color": "accent",
            "hl": [
              {
                "text": "phải hỏi",
                "at": "l4:ask"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "muốn giỏi phải học”",
            "x": 110,
            "y": 670,
            "size": 52,
            "at": "l4:study",
            "color": "accent",
            "hl": [
              {
                "text": "phải học",
                "at": "l4:study"
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
          "say": "A business freshman, fresh from the countryside, and a champion guesser.",
          "sub": "Tân sinh viên Quản trị kinh doanh, mới từ quê lên, vô địch đoán mò.",
          "keys": [
            "vô địch đoán mò"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Fifteen, easy! At university, class time is study time. Right?",
          "sub": "Mười lăm chứ gì! Lên đại học, giờ trên lớp là giờ học. Đúng không?",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: to know, you ask; to be good, you study.",
          "sub": "Ông bà dặn: “Muốn biết phải hỏi, muốn giỏi phải học.”",
          "keys": [
            "Muốn biết phải hỏi"
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
            "text": "Tín chỉ khác phổ thông ở đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:different",
            "hl": [
              {
                "text": "khác phổ thông",
                "at": "l1:different"
              }
            ]
          },
          {
            "id": "b-pt",
            "t": "text",
            "text": "Phổ thông: lịch có sẵn",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:High school",
            "color": "muted"
          },
          {
            "id": "b-dh",
            "t": "text",
            "text": "Đại học: tín chỉ + tự đăng ký",
            "x": 2028,
            "y": 245,
            "size": 56,
            "at": "l3:University",
            "color": "accent",
            "hl": [
              {
                "text": "tự đăng ký",
                "at": "l3:register"
              }
            ]
          },
          {
            "id": "b-bf",
            "t": "text",
            "text": "cơm phần → buffet có luật",
            "x": 2028,
            "y": 340,
            "size": 50,
            "at": "l4:buffet",
            "hl": [
              {
                "text": "buffet có luật",
                "at": "l4:rules"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: trường lái hộ",
            "x": 2028,
            "y": 440,
            "size": 50,
            "at": "l5:not",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l5:But"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: bạn cầm lái",
            "x": 2028,
            "y": 525,
            "size": 62,
            "at": "l5:you steer",
            "color": "accent",
            "hl": [
              {
                "text": "bạn cầm lái",
                "at": "l5:you steer"
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
          "say": "So how is credit-based study different from high school?",
          "sub": "Vậy học theo tín chỉ khác phổ thông ở chỗ nào?",
          "keys": [
            "khác phổ thông"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "High school: a ready-made timetable, same subjects for everyone.",
          "sub": "Phổ thông: thời khoá biểu có sẵn, cả lớp học cùng môn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "University: a program counted in credits, and you register courses yourself each term.",
          "sub": "Đại học: chương trình tính bằng tín chỉ, và bạn tự đăng ký môn mỗi học kỳ.",
          "keys": [
            "tự đăng ký môn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No more set menu. It's a buffet now, with rules.",
          "sub": "Không còn cơm phần nữa. Giờ là buffet, nhưng có luật.",
          "keys": [
            "buffet"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not: the school steers for you. But: you steer, inside its frame.",
          "sub": "Vậy không phải trường lái hộ, mà là bạn tự cầm lái, trong khung trường cho phép.",
          "keys": [
            "bạn tự cầm lái"
          ]
        }
      ],
      "ref": "intro,p7"
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
            "id": "b-m1",
            "t": "text",
            "text": "Tín chỉ: đo khối lượng học",
            "x": 2968,
            "y": 160,
            "size": 44,
            "at": "l1:measure"
          },
          {
            "id": "b-m2",
            "t": "text",
            "text": "Chương trình: phải tích luỹ gì",
            "x": 2968,
            "y": 230,
            "size": 44,
            "at": "l1:program"
          },
          {
            "id": "b-m3",
            "t": "text",
            "text": "Mỗi kỳ: tự chọn, tự chịu",
            "x": 2968,
            "y": 300,
            "size": 44,
            "at": "l1:choose",
            "color": "accent",
            "hl": [
              {
                "text": "tự chịu",
                "at": "l1:own"
              }
            ]
          },
          {
            "id": "b-map",
            "t": "text",
            "text": "Bản đồ chuỗi · mỗi chặng một bài",
            "x": 2968,
            "y": 400,
            "size": 36,
            "at": "l3:Today",
            "color": "muted"
          },
          {
            "id": "b-hk",
            "t": "text",
            "text": "Học kỳ một của Dũng · 7 chặng",
            "x": 2028,
            "y": 618,
            "size": 40,
            "at": "l3:seven",
            "hl": [
              {
                "text": "7 chặng",
                "at": "l3:seven stops"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 680,
            "w": 215,
            "h": 80,
            "at": "l3:seven stops+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 680,
            "w": 215,
            "h": 80,
            "at": "l3:seven stops+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 680,
            "w": 215,
            "h": 80,
            "at": "l3:seven stops+700",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 680,
            "w": 215,
            "h": 80,
            "at": "l3:seven stops+900",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 680,
            "w": 215,
            "h": 80,
            "at": "l3:seven stops+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 680,
            "w": 215,
            "h": 80,
            "at": "l3:seven stops+1300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 680,
            "w": 215,
            "h": 80,
            "at": "l3:seven stops+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "Tối đầu",
            "x": 2048,
            "y": 690,
            "size": 40,
            "at": "l3:seven stops+400"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "KTX",
            "x": 2283,
            "y": 690,
            "size": 40,
            "at": "l3:seven stops+600"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Đăng ký",
            "x": 2518,
            "y": 690,
            "size": 40,
            "at": "l3:seven stops+800"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Giữa kỳ",
            "x": 2753,
            "y": 690,
            "size": 40,
            "at": "l3:seven stops+1000"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Cuối kỳ",
            "x": 2988,
            "y": 690,
            "size": 40,
            "at": "l3:seven stops+1200"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Cố vấn",
            "x": 3223,
            "y": 690,
            "size": 40,
            "at": "l3:seven stops+1400"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "Gọi về",
            "x": 3458,
            "y": 690,
            "size": 40,
            "at": "l3:seven stops+1600"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Credits measure workload. The program says what to collect. Each term, you choose, and you own the result.",
          "sub": "Tín chỉ đo khối lượng học. Chương trình cho biết phải tích luỹ gì. Mỗi kỳ bạn tự chọn, tự chịu kết quả.",
          "keys": [
            "tự chịu kết quả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Today: Dũng's first semester, in seven stops.",
          "sub": "Hôm nay: học kỳ một của Dũng, bảy chặng.",
          "keys": [
            "học kỳ một của Dũng"
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
          },
          {
            "at": "l6",
            "fit": [
              "c-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tối đầu · Tín chỉ là gì?",
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
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
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:night",
            "caption": "Tối đầu tiên · phòng trọ",
            "icon": "spiral-calendar"
          },
          {
            "id": "c-lt",
            "t": "text",
            "text": "“Mỗi tuần 1 buổi: nhẹ hều!”",
            "x": 3996,
            "y": 160,
            "size": 46,
            "at": "l2:light",
            "color": "coral"
          },
          {
            "id": "c-kl",
            "t": "text",
            "text": "Tín chỉ = khối lượng học",
            "x": 3996,
            "y": 245,
            "size": 56,
            "at": "l3:measures",
            "color": "accent",
            "hl": [
              {
                "text": "khối lượng học",
                "at": "l3:workload"
              }
            ]
          },
          {
            "id": "c-15",
            "t": "text",
            "text": "≥ 15 giờ giảng / 30 thực hành",
            "x": 3996,
            "y": 340,
            "size": 44,
            "at": "l4:fifteen",
            "hl": [
              {
                "text": "≥ 15 giờ giảng",
                "at": "l4:lecture"
              }
            ]
          },
          {
            "id": "c-50p",
            "t": "text",
            "text": "1 giờ trên lớp = 50 phút",
            "x": 3996,
            "y": 410,
            "size": 40,
            "at": "l5:minutes",
            "color": "muted"
          },
          {
            "id": "c-out",
            "t": "text",
            "text": "Phần còn lại: ngoài lớp",
            "x": 3996,
            "y": 480,
            "size": 54,
            "at": "l5:Outside",
            "color": "accent",
            "hl": [
              {
                "text": "ngoài lớp",
                "at": "l5:Outside"
              }
            ]
          },
          {
            "id": "c-wh",
            "t": "text",
            "text": "“Giờ còn lại đi đâu?”",
            "x": 3996,
            "y": 560,
            "size": 46,
            "at": "l6:other hours",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: first night. Dũng plans his week.",
          "sub": "Chặng một: tối đầu tiên ở phòng trọ. Dũng lên lịch tuần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Three credits, one class a week. So light! Evenings free for shop shifts.",
          "sub": "Ba tín chỉ, mỗi tuần một buổi. Nhẹ hều! Tối rảnh đi làm ca.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A credit measures study workload. Not just seats in a classroom.",
          "sub": "Tín chỉ đo khối lượng học tập. Không chỉ là giờ ngồi lớp.",
          "keys": [
            "khối lượng học tập"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each credit needs at least fifteen lecture hours, or thirty practice hours.",
          "sub": "Mỗi tín chỉ cần tối thiểu 15 giờ giảng, hoặc 30 giờ thực hành, thí nghiệm, thảo luận.",
          "keys": [
            "15 giờ giảng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A class hour is fifty minutes. The rest? Outside class.",
          "sub": "Một giờ trên lớp tính bằng 50 phút. Phần còn lại của 50 giờ? Nằm ngoài lớp.",
          "keys": [
            "Nằm ngoài lớp"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Fifty hours per credit? Where do the other hours go?",
          "sub": "Mỗi tín chỉ 50 giờ? Thế số giờ còn lại đi đâu?",
          "face": "surprised"
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s05",
      "module": "BRK-03",
      "data": {
        "value": 150,
        "suffix": " giờ",
        "label": "một môn 3 tín chỉ, cả học kỳ",
        "illus": "hourglass-not-done"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's do the maths for his three-credit course.",
          "sub": "Làm phép tính cho môn ba tín chỉ của Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One hundred and fifty standard hours.",
          "sub": "Một trăm năm mươi giờ học tập định mức.",
          "keys": [
            "Một trăm năm mươi giờ"
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
          }
        ],
        "items": [
          {
            "id": "c-150",
            "t": "text",
            "text": "3 tín chỉ = 150 giờ",
            "x": 3996,
            "y": 630,
            "size": 46,
            "at": "l1:Lectures",
            "hl": [
              {
                "text": "150 giờ",
                "at": "l1:Lectures"
              }
            ]
          },
          {
            "id": "c-ice",
            "t": "text",
            "text": "Tảng băng: chìm ở tự học",
            "x": 3996,
            "y": 700,
            "size": 46,
            "at": "l2:iceberg",
            "hl": [
              {
                "text": "chìm ở tự học",
                "at": "l2:sinks"
              }
            ]
          },
          {
            "id": "c-r",
            "t": "text",
            "text": "Đếm cả giờ tự học",
            "x": 4836,
            "y": 700,
            "size": 50,
            "at": "l4:Credits count",
            "color": "accent",
            "hl": [
              {
                "text": "giờ tự học",
                "at": "l4:alone"
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
          "say": "Lectures: forty-five hours minimum. The rest: reading, homework, revision.",
          "sub": "Giờ giảng tối thiểu 45 giờ. Phần lớn còn lại: đọc tài liệu, làm bài, ôn thi.",
          "keys": [
            "Phần lớn còn lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A credit is an iceberg: a little shows in class, most sinks into self-study.",
          "sub": "Tín chỉ như tảng băng: nổi trên lớp một ít, phần chìm là giờ tự học.",
          "keys": [
            "tảng băng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Credits count both the hours in class and the hours you study alone.",
          "sub": "Rút ra: tín chỉ đếm cả giờ ngồi lớp lẫn giờ tự ngồi học.",
          "keys": [
            "giờ tự ngồi học"
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
            "text": "② Ký túc xá · Chương trình",
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "books",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
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
            "at": "l1:dorm",
            "caption": "Tối hôm sau · ký túc xá Thảo",
            "icon": "books"
          },
          {
            "id": "d-df",
            "t": "text",
            "text": "Cùng ngành, khác môn?",
            "x": 5964,
            "y": 160,
            "size": 52,
            "at": "l2:different",
            "color": "coral",
            "hl": [
              {
                "text": "khác môn",
                "at": "l2:different"
              }
            ]
          },
          {
            "id": "d-rg",
            "t": "text",
            "text": "→ mỗi người tự đăng ký",
            "x": 6004,
            "y": 240,
            "size": 46,
            "at": "l3:registers",
            "hl": [
              {
                "text": "tự đăng ký",
                "at": "l3:registers"
              }
            ]
          },
          {
            "id": "d-ct",
            "t": "text",
            "text": "Chương trình đào tạo:",
            "x": 5964,
            "y": 330,
            "size": 50,
            "at": "l4:program",
            "color": "accent"
          },
          {
            "id": "d-ct2",
            "t": "text",
            "text": "môn · tín chỉ · thứ tự",
            "x": 5964,
            "y": 400,
            "size": 44,
            "at": "l4:order"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: the dorm. Meet Thảo, same major, spreadsheet lover.",
          "sub": "Chặng hai: ký túc xá. Đây là Thảo, cùng ngành, fan cứng của trang tính.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "My roommate is in our major, but her timetable is different from mine!",
          "sub": "Bạn cùng phòng tớ cùng ngành, mà thời khoá biểu khác hẳn tớ!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Of course. Everyone registers their own courses.",
          "sub": "Thì mỗi người tự đăng ký môn mà.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Each major has a program: the courses, the credits, a suggested order by term.",
          "sub": "Mỗi ngành có chương trình đào tạo: danh sách học phần, số tín chỉ, thứ tự gợi ý theo học kỳ.",
          "keys": [
            "chương trình đào tạo"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 800
        }
      ],
      "ref": "p5,p7"
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
            "id": "d-120",
            "t": "text",
            "text": "≥ 120 tín chỉ",
            "x": 5964,
            "y": 480,
            "size": 56,
            "at": "l1:hundred",
            "color": "accent",
            "hl": [
              {
                "text": "≥ 120 tín chỉ",
                "at": "l1:twenty"
              }
            ]
          },
          {
            "id": "d-120b",
            "t": "text",
            "text": "chưa kể thể chất, quốc phòng",
            "x": 5964,
            "y": 560,
            "size": 36,
            "at": "l1:physical",
            "color": "muted"
          },
          {
            "id": "d-bb",
            "t": "text",
            "text": "Bắt buộc: ai cũng phải đạt",
            "x": 5964,
            "y": 620,
            "size": 44,
            "at": "l3:Compulsory",
            "hl": [
              {
                "text": "Bắt buộc",
                "at": "l3:Compulsory"
              }
            ]
          },
          {
            "id": "d-tc",
            "t": "text",
            "text": "Tự chọn: chọn, không bỏ",
            "x": 5964,
            "y": 690,
            "size": 44,
            "at": "l4:skipping",
            "color": "coral",
            "hl": [
              {
                "text": "không bỏ",
                "at": "l4:skipping"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: TT 17/2021, TT 08/2021/TT-BGDĐT",
            "x": 6804,
            "y": 740,
            "size": 24,
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
          "say": "A bachelor program: at least one hundred twenty credits, not counting physical and defence education.",
          "sub": "Chương trình đại học tối thiểu 120 tín chỉ, chưa kể giáo dục thể chất và quốc phòng – an ninh.",
          "keys": [
            "120 tín chỉ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "General education must include politics and law.",
          "sub": "Phần đại cương bắt buộc có lý luận chính trị và pháp luật."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Compulsory courses, everyone must pass. Electives, you choose from a group.",
          "sub": "Học phần bắt buộc thì ai cũng phải đạt; tự chọn thì chọn trong một nhóm.",
          "keys": [
            "bắt buộc",
            "tự chọn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Electives still need enough credits. Choosing is free, skipping is not.",
          "sub": "Tự chọn vẫn phải đủ số tín chỉ. Được chọn, không được bỏ.",
          "keys": [
            "không được bỏ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Blocks and prerequisites: next lesson, reading your curriculum.",
          "sub": "Khối kiến thức, môn tiên quyết: có ở bài “Đọc chương trình đào tạo”."
        }
      ],
      "ref": "p5,p6,p9"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Tuần đăng ký môn",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "phone"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Hệ thống không nhắc là ổn",
          "why": "Hệ thống có thể không nhắc ngay. Đến lúc xét tốt nghiệp, môn bắt buộc bỏ sót vẫn phải học bù.",
          "rule": "Chương trình là bản đồ, người cầm lái là bạn"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Law course? Boring. Skip! The system didn't even warn me.",
          "sub": "Môn pháp luật à? Chán. Bỏ! Hệ thống có nhắc gì đâu.",
          "pose": "cross",
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
          "say": "The system may stay quiet. At graduation, a missing course is still missing.",
          "sub": "Hệ thống có thể im lặng. Đến lúc xét tốt nghiệp, môn thiếu vẫn là môn thiếu.",
          "keys": [
            "môn thiếu vẫn là môn thiếu"
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
          "say": "Compulsory courses first, ticked one by one.",
          "sub": "Môn bắt buộc trước, đánh dấu từng môn.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The program is the map. You are the one who steers.",
          "sub": "Chương trình là bản đồ, còn người cầm lái là bạn.",
          "phase": "redo",
          "keys": [
            "người cầm lái là bạn"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Tuần đăng ký · Bao nhiêu?",
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
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "left"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "left": {
                "label": "Dũng: gần mức tối đa",
                "ok": false
              },
              "right": {
                "label": "Thảo: đúng kế hoạch chuẩn",
                "ok": true
              }
            },
            "at": "l3:choices",
            "caption": "Cùng một tuần đăng ký",
            "icon": "laptop"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Khung: ⅔ → 3/2 khối lượng TB",
            "x": 7932,
            "y": 160,
            "size": 48,
            "at": "l2:frame",
            "hl": [
              {
                "text": "⅔ → 3/2",
                "at": "l2:halves"
              }
            ]
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "Con số cụ thể: trường công bố",
            "x": 7932,
            "y": 240,
            "size": 40,
            "at": "l3:announces",
            "color": "muted"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "A · gần tối đa → đuối",
            "x": 7932,
            "y": 330,
            "size": 46,
            "at": "a2:behind",
            "color": "coral"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "B · kế hoạch chuẩn → biết nhịp",
            "x": 7932,
            "y": 410,
            "size": 46,
            "at": "b2:my pace",
            "color": "accent"
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "Kỳ đầu: biết sức mình",
            "x": 7932,
            "y": 510,
            "size": 60,
            "at": "l5:pace",
            "color": "accent",
            "hl": [
              {
                "text": "biết sức mình",
                "at": "l5:own pace"
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
          "say": "Stop three: registration week. How many credits per term?",
          "sub": "Chặng ba: tuần đăng ký môn. Mỗi kỳ đăng ký bao nhiêu tín chỉ?",
          "keys": [
            "bao nhiêu tín chỉ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The rule's frame: at least two thirds, at most three halves of the average term load.",
          "sub": "Quy chế đặt khung: không dưới hai phần ba, không quá ba phần hai khối lượng trung bình một kỳ.",
          "keys": [
            "hai phần ba",
            "ba phần hai"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The exact number? Your university announces it. Now, two choices.",
          "sub": "Con số cụ thể? Trường bạn tính và công bố. Giờ, hai lựa chọn."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "Near the maximum, plus next year's hard courses. Graduate early!",
          "sub": "Gần mức tối đa, cả môn khó năm sau. Ra trường sớm!",
          "phase": "a",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "dung",
          "say": "Mid-term: all deadlines in one week. I'm behind everywhere.",
          "sub": "Giữa kỳ. Hạn nộp dồn cùng một tuần. Môn nào cũng đuối.",
          "phase": "a",
          "face": "sad"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "Just term one of the standard plan. Free hours for the library.",
          "sub": "Đúng các môn học kỳ một theo kế hoạch chuẩn. Giờ trống để làm quen thư viện.",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "thao",
          "say": "Now I know my pace, and where to add next term.",
          "sub": "Giờ mình nắm được nhịp học, biết kỳ sau tăng ở đâu.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "First term: learn your own pace. It's not a race yet.",
          "sub": "Kỳ đầu học để biết sức mình, chưa phải để chạy đua.",
          "keys": [
            "biết sức mình"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Deadlines, clashes, full classes: see the registration lesson.",
          "sub": "Lịch đăng ký, huỷ môn, trùng lịch, lớp đầy: có ở bài “Đăng ký môn học kỳ đầu”."
        }
      ],
      "ref": "p10,p11,p12,p13"
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
            "text": "④ Giữa kỳ · Điểm tính sao?",
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
              "set": "campus",
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
                "memo"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-07",
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
            "at": "l1:scores",
            "caption": "Giữa kỳ · bảng điểm thành phần",
            "icon": "memo"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "≥ 2 điểm thành phần · thang 10",
            "x": 60,
            "y": 1250,
            "size": 42,
            "at": "l3:component",
            "hl": [
              {
                "text": "≥ 2 điểm thành phần",
                "at": "l3:two"
              }
            ]
          },
          {
            "id": "f-g0",
            "t": "text",
            "text": "A ≥ 8,5",
            "x": 60,
            "y": 1330,
            "size": 50,
            "at": "l4:letter",
            "color": "ink"
          },
          {
            "id": "f-g1",
            "t": "text",
            "text": "B ≥ 7,0",
            "x": 60,
            "y": 1400,
            "size": 50,
            "at": "l4:letter",
            "color": "ink"
          },
          {
            "id": "f-g2",
            "t": "text",
            "text": "C ≥ 5,5",
            "x": 60,
            "y": 1470,
            "size": 50,
            "at": "l5:five",
            "color": "ink"
          },
          {
            "id": "f-g3",
            "t": "text",
            "text": "D ≥ 4,0",
            "x": 60,
            "y": 1540,
            "size": 50,
            "at": "l5:five",
            "color": "ink"
          },
          {
            "id": "f-g4",
            "t": "text",
            "text": "F < 4,0",
            "x": 60,
            "y": 1610,
            "size": 50,
            "at": "l5:five",
            "color": "coral"
          },
          {
            "id": "f-nd",
            "t": "text",
            "text": "không đạt",
            "x": 440,
            "y": 1620,
            "size": 42,
            "at": "l5:passed",
            "color": "coral",
            "hl": [
              {
                "text": "không đạt",
                "at": "l5:passed"
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
          "say": "Stop four: mid-term. Dũng's first scores arrive.",
          "sub": "Chặng bốn: giữa kỳ. Những con điểm đầu tiên của Dũng về."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Several scores for one course? High school was simpler!",
          "sub": "Một môn mà mấy cột điểm? Phổ thông đơn giản hơn nhiều!",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Each course has at least two component scores, out of ten.",
          "sub": "Mỗi học phần có ít nhất hai điểm thành phần, thang 10 (môn dưới 2 tín chỉ có thể chỉ một).",
          "keys": [
            "hai điểm thành phần"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then a letter grade. A from eight point five, B from seven.",
          "sub": "Điểm học phần quy ra điểm chữ: A từ 8,5; B từ 7,0.",
          "keys": [
            "điểm chữ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "C from five point five, D from four. Below four is F: not passed.",
          "sub": "C từ 5,5; D từ 4,0. Dưới 4,0 là F: không đạt.",
          "keys": [
            "không đạt"
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
      "ref": "p14"
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
            "id": "f-n0",
            "t": "text",
            "text": "→ 4",
            "x": 280,
            "y": 1330,
            "size": 50,
            "at": "l1:four,",
            "color": "accent"
          },
          {
            "id": "f-n1",
            "t": "text",
            "text": "→ 3",
            "x": 280,
            "y": 1400,
            "size": 50,
            "at": "l1:three,",
            "color": "accent"
          },
          {
            "id": "f-n2",
            "t": "text",
            "text": "→ 2",
            "x": 280,
            "y": 1470,
            "size": 50,
            "at": "l1:two,",
            "color": "accent"
          },
          {
            "id": "f-n3",
            "t": "text",
            "text": "→ 1",
            "x": 280,
            "y": 1540,
            "size": 50,
            "at": "l1:one,",
            "color": "accent"
          },
          {
            "id": "f-n4",
            "t": "text",
            "text": "→ 0",
            "x": 280,
            "y": 1610,
            "size": 50,
            "at": "l1:zero",
            "color": "accent"
          },
          {
            "id": "f-w",
            "t": "text",
            "text": "Trung bình theo trọng số tín chỉ",
            "x": 60,
            "y": 1710,
            "size": 46,
            "at": "l2:weighted",
            "hl": [
              {
                "text": "trọng số tín chỉ",
                "at": "l2:credits"
              }
            ]
          },
          {
            "id": "f-bb",
            "t": "text",
            "text": "Môn nặng kéo mạnh hơn",
            "x": 60,
            "y": 1780,
            "size": 54,
            "at": "l3:seesaw",
            "color": "accent",
            "hl": [
              {
                "text": "kéo mạnh hơn",
                "at": "l3:pulls harder"
              }
            ]
          },
          {
            "id": "f-gpa",
            "t": "text",
            "text": "→ bài “GPA tính thế nào”",
            "x": 900,
            "y": 1795,
            "size": 40,
            "at": "l3:end",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "For the average, letters become points: A four, B three, C two, D one, F zero.",
          "sub": "Để tính trung bình, điểm chữ đổi sang thang 4: A là 4, B 3, C 2, D 1, F 0.",
          "keys": [
            "thang 4"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then a weighted average, weighted by credits.",
          "sub": "Rồi lấy trung bình có trọng số là số tín chỉ.",
          "keys": [
            "trọng số là số tín chỉ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Like a seesaw: a heavy course pulls harder than a light one.",
          "sub": "Như bập bênh: môn nhiều tín chỉ kéo điểm trung bình mạnh hơn môn ít tín chỉ.",
          "keys": [
            "mạnh hơn"
          ]
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Mới học kỳ đầu, đã có thể bị cảnh báo?",
        "illus": "warning"
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
          "say": "Can you get an academic warning in your very first term?",
          "sub": "Mới học kỳ đầu, đã có thể bị cảnh báo học tập?",
          "keys": [
            "cảnh báo học tập"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p18"
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
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Cuối kỳ · Cảnh báo học tập",
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "laptop",
                "warning"
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
            "at": "l1:Results",
            "caption": "Cuối kỳ · kết quả lên cổng",
            "icon": "warning"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "“Trung bình tạm → khỏi lo?”",
            "x": 2028,
            "y": 1250,
            "size": 44,
            "at": "l2:okay",
            "color": "muted"
          },
          {
            "id": "g-okx",
            "t": "strike",
            "over": "g-ok",
            "at": "l3:so fast"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "• TB học kỳ < 0,8",
            "x": 2028,
            "y": 1330,
            "size": 52,
            "at": "l4:zero",
            "color": "coral",
            "hl": [
              {
                "text": "< 0,8",
                "at": "l4:eight"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "• tín chỉ trượt > ½ đăng ký",
            "x": 2028,
            "y": 1410,
            "size": 46,
            "at": "l5:half",
            "color": "coral",
            "hl": [
              {
                "text": "> ½",
                "at": "l5:half"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Quá mức → buộc thôi học",
            "x": 2028,
            "y": 1490,
            "size": 46,
            "at": "l6:dismissal",
            "hl": [
              {
                "text": "buộc thôi học",
                "at": "l6:dismissal"
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
          "say": "Stop five: end of term. Results are on the portal.",
          "sub": "Chặng năm: cuối kỳ. Kết quả đã lên cổng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "A few F's in the hard courses. But my average looks okay. Safe, right?",
          "sub": "Mấy môn khó dính F. Nhưng trung bình trông cũng tạm. Ổn nhỉ?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not so fast. A warning can come in the very first term.",
          "sub": "Chưa chắc. Cảnh báo có thể đến ngay học kỳ đầu.",
          "keys": [
            "ngay học kỳ đầu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "For example, a term average below zero point eight.",
          "sub": "Ví dụ: điểm trung bình học kỳ dưới 0,8.",
          "keys": [
            "dưới 0,8"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Or failing over half your registered credits, whatever your average.",
          "sub": "Hoặc số tín chỉ không đạt vượt một nửa khối lượng đã đăng ký, dù trung bình ổn.",
          "keys": [
            "vượt một nửa"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Too many warnings can mean dismissal.",
          "sub": "Bị cảnh báo quá số lần hoặc quá mức trường quy định có thể bị buộc thôi học.",
          "keys": [
            "buộc thôi học"
          ]
        }
      ],
      "ref": "p18"
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
            "id": "g-xl",
            "t": "text",
            "text": "Xếp loại theo TB tích luỹ:",
            "x": 2028,
            "y": 1560,
            "size": 44,
            "at": "l1:ranking",
            "hl": [
              {
                "text": "Xếp loại",
                "at": "l1:ranking"
              }
            ]
          },
          {
            "id": "g-r0",
            "t": "text",
            "text": "≥ 3,6 xuất sắc",
            "x": 2028,
            "y": 1635,
            "size": 44,
            "at": "l2:Three point six"
          },
          {
            "id": "g-r1",
            "t": "text",
            "text": "≥ 3,2 giỏi",
            "x": 2448,
            "y": 1635,
            "size": 44,
            "at": "l2:Three point two"
          },
          {
            "id": "g-r2",
            "t": "text",
            "text": "≥ 2,5 khá",
            "x": 2028,
            "y": 1705,
            "size": 44,
            "at": "l2:Two point five"
          },
          {
            "id": "g-r3",
            "t": "text",
            "text": "≥ 2,0 trung bình",
            "x": 2448,
            "y": 1705,
            "size": 44,
            "at": "l2:Two point zero"
          },
          {
            "id": "g-tn",
            "t": "text",
            "text": "Tốt nghiệp: TB ≥ 2,0",
            "x": 2028,
            "y": 1780,
            "size": 50,
            "at": "l3:graduate",
            "color": "accent",
            "hl": [
              {
                "text": "≥ 2,0",
                "at": "l3:two point zero"
              }
            ]
          },
          {
            "id": "g-tn2",
            "t": "text",
            "text": "+ đủ học phần, chuẩn đầu ra",
            "x": 2868,
            "y": 1795,
            "size": 38,
            "at": "l3:standards",
            "color": "muted"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: TT 08/2021/TT-BGDĐT",
            "x": 3318,
            "y": 1830,
            "size": 24,
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
          "say": "The cumulative average also sets your ranking, on the four-point scale.",
          "sub": "Điểm trung bình tích luỹ còn dùng để xếp loại học lực, trên thang 4.",
          "keys": [
            "xếp loại học lực"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Three point six, excellent. Three point two, very good. Two point five, good. Two point zero, average.",
          "sub": "Từ 3,6 xuất sắc; từ 3,2 giỏi; từ 2,5 khá; từ 2,0 trung bình."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "To graduate: at least two point zero overall, enough courses, and the output standards.",
          "sub": "Muốn tốt nghiệp: trung bình tích luỹ toàn khoá từ 2,0, đủ học phần và đạt chuẩn đầu ra.",
          "keys": [
            "từ 2,0"
          ]
        }
      ],
      "ref": "p17"
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
            "text": "⑥ Gặp cô Hoa · Hỏi ai?",
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "face": "worried"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                }
              ],
              "props": [
                "laptop",
                "clipboard"
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
            "at": "l1:Hoa",
            "caption": "Phòng cố vấn · đầu kỳ nghỉ",
            "icon": "clipboard"
          },
          {
            "id": "h-nb",
            "t": "text",
            "text": "“Có ai nói em đâu”",
            "x": 3996,
            "y": 1250,
            "size": 46,
            "at": "l2:nobody",
            "color": "muted"
          },
          {
            "id": "h-nbx",
            "t": "strike",
            "over": "h-nb",
            "at": "l2:told"
          },
          {
            "id": "h-cv",
            "t": "text",
            "text": "Cố vấn: hướng dẫn quy chế",
            "x": 3996,
            "y": 1330,
            "size": 50,
            "at": "l5:advisors",
            "color": "accent",
            "hl": [
              {
                "text": "Cố vấn",
                "at": "l5:advisors"
              }
            ]
          },
          {
            "id": "h-qt",
            "t": "text",
            "text": "Bạn: quyền được biết thông tin",
            "x": 3996,
            "y": 1410,
            "size": 44,
            "at": "l6:right",
            "hl": [
              {
                "text": "quyền được biết",
                "at": "l6:right"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: TT 10/2016/TT-BGDĐT",
            "x": 3996,
            "y": 1828,
            "size": 24,
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
          "say": "Stop six: time to ask. Meet Cô Hoa, Dũng's academic advisor.",
          "sub": "Chặng sáu: Dũng làm phần “phải hỏi”. Đây là cô Hoa, cố vấn học tập của lớp.",
          "keys": [
            "cố vấn học tập"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Warm, direct, allergic to one sentence: nobody told me.",
          "sub": "Ấm áp, thẳng thắn, và dị ứng đúng một câu: “Có ai nói em đâu.”",
          "keys": [
            "Có ai nói em đâu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Teacher, I overloaded, failed some courses, and I'm lost.",
          "sub": "Cô ơi, em ôm nhiều quá, trượt vài môn, giờ rối quá ạ.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "Open your portal. We'll check results and plan next term together.",
          "sub": "Em mở cổng sinh viên ra. Cô với em xem kết quả rồi tính kỳ sau.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "By the student affairs rule, lecturers are assigned as advisors to guide you.",
          "sub": "Theo Quy chế công tác sinh viên, trường phân công giảng viên làm cố vấn, hướng dẫn bạn thực hiện quy chế đào tạo.",
          "keys": [
            "làm cố vấn"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And you have a right to full information about your studies.",
          "sub": "Bạn cũng có quyền được cung cấp đầy đủ thông tin về việc học của mình.",
          "keys": [
            "quyền được cung cấp"
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
            "id": "h-ck",
            "t": "text",
            "text": "Tuần đầu, làm ngay:",
            "x": 3996,
            "y": 1500,
            "size": 46,
            "at": "l1:checklist",
            "hl": [
              {
                "text": "làm ngay",
                "at": "l1:checklist"
              }
            ]
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1590,
            "w": 46,
            "h": 46,
            "at": "l1:Save",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1572,
            "size": 58,
            "at": "l1:Save+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Lưu liên lạc cố vấn",
            "x": 4064,
            "y": 1580,
            "size": 40,
            "at": "l1:Save+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1654,
            "w": 46,
            "h": 46,
            "at": "l3:portal",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1636,
            "size": 58,
            "at": "l3:portal+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Cổng SV: xem môn đã đăng ký",
            "x": 4064,
            "y": 1644,
            "size": 40,
            "at": "l3:portal+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1718,
            "w": 46,
            "h": 46,
            "at": "l4:regulation",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1700,
            "size": 58,
            "at": "l4:regulation+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Tải quy chế của trường",
            "x": 4064,
            "y": 1708,
            "size": 40,
            "at": "l4:regulation+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1782,
            "w": 46,
            "h": 46,
            "at": "l4:program",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1764,
            "size": 58,
            "at": "l4:program+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "Lưu chương trình ngành",
            "x": 4064,
            "y": 1772,
            "size": 40,
            "at": "l4:program+200"
          },
          {
            "id": "h-nx",
            "t": "text",
            "text": "→ bài cuối chuỗi",
            "x": 4836,
            "y": 1795,
            "size": 40,
            "at": "l4:end",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Cô Hoa's checklist. Save your advisor's contact.",
          "sub": "Danh sách của cô Hoa. Lưu tên, cách liên lạc cố vấn học tập."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Log in to the portal and check your registered courses.",
          "sub": "Đăng nhập cổng sinh viên, xem kết quả đăng ký môn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Download the school's regulation, and save your program.",
          "sub": "Tải quy chế đào tạo của trường. Lưu chương trình đào tạo của ngành."
        }
      ],
      "ref": "p21,p22"
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
            "text": "⑦ Tối Chủ nhật · Quy định nào?",
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
            "at": "l1:call",
            "caption": "Tối Chủ nhật · gọi về quê",
            "icon": "telephone-receiver"
          },
          {
            "id": "i-ab",
            "t": "text",
            "text": "Trường A ≠ trường B?",
            "x": 5964,
            "y": 1250,
            "size": 52,
            "at": "l2:different",
            "color": "coral"
          },
          {
            "id": "i-bo",
            "t": "text",
            "text": "Bộ: khung chung",
            "x": 5964,
            "y": 1340,
            "size": 52,
            "at": "l4:frame",
            "hl": [
              {
                "text": "khung chung",
                "at": "l4:frame"
              }
            ]
          },
          {
            "id": "i-tr",
            "t": "text",
            "text": "Trường: quy chế riêng",
            "x": 5964,
            "y": 1420,
            "size": 52,
            "at": "l4:own",
            "color": "accent"
          },
          {
            "id": "i-tq",
            "t": "text",
            "text": "vd. mấy lần cảnh báo",
            "x": 5964,
            "y": 1500,
            "size": 42,
            "at": "l5:warnings",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven: Sunday night, a call home. This is Bác Bình, Dũng's dad.",
          "sub": "Chặng bảy: tối Chủ nhật, Dũng gọi về quê. Đây là bác Bình, bố Dũng.",
          "keys": [
            "bác Bình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Your cousin's university has different rules. Someone's wrong, son.",
          "sub": "Trường em họ con nói quy định khác trường con. Chắc ai nói sai rồi.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Maybe both are right, Dad. Let me explain.",
          "sub": "Có khi cả hai đều đúng đấy bố. Để con nói.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The ministry sets a general frame. Each university issues its own rules on it.",
          "sub": "Quy chế của Bộ là khung chung. Mỗi trường ban hành quy chế riêng dựa trên khung đó.",
          "keys": [
            "khung chung"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Some points are left to schools, like how many warnings mean dismissal.",
          "sub": "Một số điểm để trường tự quyết, như bị cảnh báo mấy lần thì buộc thôi học."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p23"
    },
    {
      "id": "s20",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Khung của Bộ, chi tiết của trường",
        "hl": "chi tiết của trường",
        "sub": "Đọc cả hai"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The ministry sets the frame. The school sets the details.",
          "sub": "Khung của Bộ, chi tiết của trường.",
          "keys": [
            "chi tiết của trường"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So read both.",
          "sub": "Vậy hãy đọc cả hai."
        }
      ],
      "ref": "p24"
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
          }
        ],
        "items": [
          {
            "id": "i-08",
            "t": "text",
            "text": "Đang áp dụng: TT 08/2021",
            "x": 5964,
            "y": 1590,
            "size": 46,
            "at": "l1:Circular"
          },
          {
            "id": "i-dt",
            "t": "text",
            "text": "Dự thảo 10/6/2026: chưa hiệu lực",
            "x": 5964,
            "y": 1670,
            "size": 44,
            "at": "l2:draft",
            "color": "coral",
            "hl": [
              {
                "text": "chưa hiệu lực",
                "at": "l3:effective"
              }
            ]
          },
          {
            "id": "i-kl",
            "t": "text",
            "text": "Văn bản mới → kiểm lại số",
            "x": 5964,
            "y": 1760,
            "size": 56,
            "at": "l4:recheck",
            "color": "accent",
            "hl": [
              {
                "text": "kiểm lại số",
                "at": "l4:numbers"
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
          "say": "This series follows Circular zero eight of twenty twenty-one, in force when written.",
          "sub": "Chuỗi bài dựa trên Thông tư 08/2021, văn bản đang áp dụng khi viết."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A draft to replace it was posted on June tenth, twenty twenty-six.",
          "sub": "Ngày 10/6/2026, Cổng thông tin Chính phủ đăng dự thảo thông tư mới, dự kiến thay Thông tư 08.",
          "keys": [
            "dự thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No effective date yet, and some limits change.",
          "sub": "Dự thảo để trống ngày hiệu lực, đổi một số mức như thời gian học tối đa."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "When it's issued, recheck the numbers, and your school's rules.",
          "sub": "Khi văn bản mới ban hành, kiểm lại các con số theo văn bản hiện hành và quy chế trường.",
          "keys": [
            "kiểm lại các con số"
          ]
        }
      ],
      "ref": "p25"
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
            "at": "l3",
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
            "text": "Học kỳ hai · cùng hội trường",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Second"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "school",
                "books"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:hall",
            "caption": "Đầu học kỳ hai · hội trường",
            "icon": "school"
          },
          {
            "id": "j-50",
            "t": "text",
            "text": "1 tín chỉ = 50 giờ ✓",
            "x": 7932,
            "y": 1260,
            "size": 62,
            "at": "l3:Fifty",
            "color": "accent",
            "hl": [
              {
                "text": "50 giờ",
                "at": "l3:Fifty"
              }
            ]
          },
          {
            "id": "j-kh",
            "t": "text",
            "text": "Kế hoạch chuẩn · số cố vấn",
            "x": 7932,
            "y": 1370,
            "size": 46,
            "at": "l4:standard"
          },
          {
            "id": "j-ca1",
            "t": "text",
            "text": "“Muốn biết phải hỏi,",
            "x": 7932,
            "y": 1510,
            "size": 52,
            "at": "l5:ask",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "muốn giỏi phải học”",
            "x": 7982,
            "y": 1580,
            "size": 52,
            "at": "l5:study",
            "color": "accent",
            "hl": [
              {
                "text": "phải học",
                "at": "l5:study"
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
          "say": "Second semester. Same hall, same Dũng. Same question.",
          "sub": "Học kỳ hai. Vẫn hội trường ấy, vẫn Dũng ấy. Vẫn câu hỏi ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng, one credit equals how many hours?",
          "sub": "Dũng ơi, một tín chỉ bằng bao nhiêu giờ?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Fifty. Class is just the tip. The rest is me and the library.",
          "sub": "Năm mươi. Trên lớp chỉ là phần nổi. Còn lại là mình với thư viện.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "This term: the standard plan. Advisor's number saved.",
          "sub": "Kỳ này: đúng kế hoạch chuẩn. Số cô cố vấn lưu rồi.",
          "pose": "phone"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "To know, you ask; to be good, you study. Dũng did both.",
          "sub": "“Muốn biết phải hỏi, muốn giỏi phải học.” Dũng đã làm cả hai.",
          "keys": [
            "Dũng đã làm cả hai"
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
      "ref": "p4,p8,p12"
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
            "at": "l1:Credits",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:map",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:pace",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 480,
            "at": "l1:Credits"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6604,
            "y": 600,
            "at": "l2:map"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8572,
            "y": 520,
            "at": "l3:pace"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Theo TT 08/2021 khi viết; số áp dụng cho bạn: quy chế trường bạn. Dự thảo mới chờ ban hành.",
            "x": 7932,
            "y": 1805,
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
          "say": "So: credits count class hours and self-study. Fifty hours each.",
          "sub": "Tóm lại: tín chỉ đếm cả giờ lớp lẫn giờ tự học. Năm mươi giờ mỗi tín chỉ.",
          "keys": [
            "Năm mươi giờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The program is the map. You steer, compulsory courses first.",
          "sub": "Chương trình là bản đồ. Bạn cầm lái, môn bắt buộc trước.",
          "keys": [
            "bản đồ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First term: learn your pace. And meet your advisor early.",
          "sub": "Kỳ đầu: biết sức mình. Và gặp cố vấn sớm.",
          "keys": [
            "biết sức mình"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Right now: download your program, then open the curriculum lesson.",
          "sub": "Việc làm ngay: tải chương trình đào tạo của ngành, rồi mở bài “Đọc chương trình đào tạo”.",
          "keys": [
            "tải chương trình đào tạo"
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
        "q": "What happens if you miss a compulsory course and nobody reminds you?",
        "options": [
          "You still must pass it before graduation, so the missing course remains a problem",
          "You can replace it with any elective course you like at the end",
          "The course is removed from your program after one term without registration"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "graduation-cap",
        "why": "Môn bắt buộc bỏ sót vẫn phải học bù trước khi xét tốt nghiệp."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What happens if you miss a compulsory course and nobody reminds you?",
          "sub": "Nếu bạn bỏ sót một môn bắt buộc mà không ai nhắc thì sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "You must still pass it before graduation.",
          "sub": "Bạn vẫn phải đạt môn đó trước khi tốt nghiệp."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "The system may stay quiet. Your program won't.",
          "sub": "Hệ thống có thể im lặng. Chương trình thì không."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[13]"
    },
    {
      "id": "s25",
      "module": "END-05",
      "data": {
        "text": "Tối nay: tải chương trình đào tạo ngành mình",
        "sub": "Rồi thử bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, download your program. Then try the forty questions below.",
          "sub": "Tối nay tải chương trình đào tạo của ngành. Rồi thử bốn mươi câu bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (bài tổng chuỗi credit-system-freshmen) theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô theo HỌC KỲ MỘT của Dũng (sáng nhập học ở hội trường → tối đầu phòng trọ: tín chỉ → ký túc xá Thảo–Lan: chương trình → “Khoan đã!” bỏ sót môn bắt buộc → tuần đăng ký: Dũng A / Thảo B → giữa kỳ: điểm → cuối kỳ: cảnh báo, xếp loại → gặp cô Hoa cố vấn → tối Chủ nhật gọi bác Bình: khung Bộ / quy chế trường, dự thảo → đầu học kỳ hai, cùng hội trường). Hook HOOK-21 (đoán sai: 15 giờ hay 50 giờ? — 15 giờ là giờ giảng tối thiểu, 50 giờ là định mức, TT 17/2021). Nhân vật theo w145/_series/credit-system-freshmen.md. Số chỉ từ bài: 50 giờ, 15/30 giờ, 50 phút, 150/45 giờ, 120 tín chỉ, 2/3–3/2, thang điểm 8,5/7,0/5,5/4,0, thang 4, 3,6/3,2/2,5/2,0, 0,8, ½, 10/6/2026. Ngắt nhịp: BRK-03 (150 giờ, p3), BRK-07 (cảnh báo kỳ đầu, p18), BRK-02 (Khung của Bộ, chi tiết của trường, p24), DLG s09 (p7). Ca dao khép vòng: “Muốn biết phải hỏi, muốn giỏi phải học”. Câu đố questions[13]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
