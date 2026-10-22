// read-your-degree-curriculum--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "read-your-degree-curriculum--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "credit-system-freshmen",
    "slug": "read-your-degree-curriculum",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Đọc chương trình đào tạo của ngành mình thế nào để không đi lạc?",
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
            "fit": [
              "a-sheet"
            ],
            "zoom": 1.25,
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-sheet",
            "t": "box",
            "x": 60,
            "y": 60,
            "w": 770,
            "h": 470,
            "at": 0,
            "stroke": 5
          },
          {
            "id": "a-h",
            "t": "text",
            "text": "CHƯƠNG TRÌNH ĐÀO TẠO",
            "x": 100,
            "y": 80,
            "size": 46,
            "at": 200,
            "color": "muted"
          },
          {
            "id": "a-n0",
            "t": "text",
            "text": "Môn A · 3 TC",
            "x": 100,
            "y": 170,
            "size": 44,
            "at": "l1:codes+0"
          },
          {
            "id": "a-k0",
            "t": "text",
            "text": "bắt buộc",
            "x": 470,
            "y": 170,
            "size": 44,
            "at": "l1:numbers",
            "color": "ink"
          },
          {
            "id": "a-n1",
            "t": "text",
            "text": "Môn B",
            "x": 100,
            "y": 255,
            "size": 44,
            "at": "l1:codes+250"
          },
          {
            "id": "a-k1",
            "t": "text",
            "text": "tiên quyết: A",
            "x": 470,
            "y": 255,
            "size": 44,
            "at": "l2:Prerequisite",
            "color": "coral",
            "hl": [
              {
                "text": "tiên quyết",
                "at": "l2:Prerequisite"
              }
            ]
          },
          {
            "id": "a-n2",
            "t": "text",
            "text": "Nhóm tự chọn",
            "x": 100,
            "y": 340,
            "size": 44,
            "at": "l1:codes+500"
          },
          {
            "id": "a-k2",
            "t": "text",
            "text": "chọn đủ TC",
            "x": 470,
            "y": 340,
            "size": 44,
            "at": "l2:Elective",
            "color": "coral",
            "hl": [
              {
                "text": "chọn đủ TC",
                "at": "l2:Elective"
              }
            ]
          },
          {
            "id": "a-n3",
            "t": "text",
            "text": "Môn C",
            "x": 100,
            "y": 425,
            "size": 44,
            "at": "l1:codes+750"
          },
          {
            "id": "a-k3",
            "t": "text",
            "text": "song hành: B",
            "x": 470,
            "y": 425,
            "size": 44,
            "at": "l2:Co-requisite",
            "color": "coral",
            "hl": [
              {
                "text": "song hành",
                "at": "l2:Co-requisite"
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
          "say": "A sheet of paper. Course codes, credit numbers.",
          "sub": "Một tờ giấy. Mã môn, số tín chỉ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And strange words. Prerequisite. Elective. Co-requisite.",
          "sub": "Và mấy chữ lạ hoắc. Tiên quyết. Tự chọn. Song hành.",
          "keys": [
            "Tiên quyết",
            "Song hành"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "This sheet quietly decides your whole degree.",
          "sub": "Tờ giấy này lặng lẽ quyết định cả khoá học của bạn.",
          "keys": [
            "cả khoá học"
          ]
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
            "fit": [
              "a-sheet"
            ],
            "zoom": 1.25,
            "move": "cut"
          },
          {
            "at": 200,
            "fit": "A",
            "ms": 1400
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
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "surprised"
                }
              ],
              "props": [
                "page-facing-up",
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
            "caption": "Sáng nhập học · bàn tiếp đón",
            "icon": "page-facing-up"
          },
          {
            "id": "a-bp",
            "t": "text",
            "text": "→ cất ba lô",
            "x": 900,
            "y": 690,
            "size": 50,
            "at": "l3:backpack",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nhìn xa trông rộng”",
            "x": 100,
            "y": 610,
            "size": 64,
            "at": "l4:far",
            "color": "accent",
            "hl": [
              {
                "text": "Nhìn xa",
                "at": "l4:far"
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
          "say": "And it belongs to Dũng.",
          "sub": "Và nó thuộc về Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Business freshman, enrolment day, handed this sheet with a pile of forms.",
          "sub": "Tân sinh viên Quản trị kinh doanh. Ngày nhập học, nhận tờ này cùng một chồng giấy tờ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Prerequisite? Co-requisite? Too many words. Into the backpack!",
          "sub": "Tiên quyết? Song hành? Chữ gì mà lắm. Cất ba lô!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: look far, see wide.",
          "sub": "Thành ngữ có câu: “Nhìn xa trông rộng.”",
          "keys": [
            "Nhìn xa trông rộng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Dũng looked far... as far as his backpack.",
          "sub": "Dũng thì nhìn xa… tới tận cái ba lô.",
          "keys": [
            "cái ba lô"
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
            "text": "Đọc chương trình sao khỏi lạc?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:read",
            "hl": [
              {
                "text": "khỏi lạc",
                "at": "l1:lost"
              }
            ]
          },
          {
            "id": "b-s0",
            "t": "text",
            "text": "1. Đọc theo khối",
            "x": 2028,
            "y": 170,
            "size": 48,
            "at": "l3:block",
            "color": "ink"
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "2. Tô bắt buộc, tự chọn",
            "x": 2028,
            "y": 250,
            "size": 48,
            "at": "l3:Colour",
            "color": "ink"
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "3. Ghi điều kiện học trước",
            "x": 2028,
            "y": 330,
            "size": 48,
            "at": "l4:requires",
            "color": "ink"
          },
          {
            "id": "b-s3",
            "t": "text",
            "text": "4. Vẽ bản đồ theo kỳ",
            "x": 2888,
            "y": 170,
            "size": 48,
            "at": "l4:map",
            "color": "accent"
          },
          {
            "id": "b-s4",
            "t": "text",
            "text": "5. Chép chuẩn đầu ra",
            "x": 2888,
            "y": 250,
            "size": 48,
            "at": "l5:standards",
            "color": "ink"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you read your degree program without getting lost?",
          "sub": "Vậy đọc chương trình đào tạo của ngành thế nào để không đi lạc?",
          "keys": [
            "không đi lạc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short answer: five moves.",
          "sub": "Trả lời ngắn: năm bước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Read it block by block. Colour compulsory courses and elective groups.",
          "sub": "Đọc theo từng khối. Tô màu môn bắt buộc và nhóm tự chọn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Note what each course requires first. Then draw a map by semester.",
          "sub": "Ghi điều kiện học trước của từng môn. Rồi chép ra một bản đồ theo học kỳ.",
          "keys": [
            "bản đồ theo học kỳ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And copy the language and computer standards you need to graduate.",
          "sub": "Và ghi rõ chuẩn đầu ra ngoại ngữ, tin học cần để tốt nghiệp."
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
            "id": "b-pr",
            "t": "text",
            "text": "Bước 1: kế hoạch toàn khoá",
            "x": 2028,
            "y": 450,
            "size": 44,
            "at": "l1:planning",
            "color": "muted"
          },
          {
            "id": "b-hk",
            "t": "text",
            "text": "Năm nhất của Dũng · 7 chặng",
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
            "color": "coral",
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
            "color": "ink",
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
            "text": "Tối đầu",
            "x": 2048,
            "y": 660,
            "size": 40,
            "at": "l2:seven stops+400"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "Tuần 1",
            "x": 2283,
            "y": 660,
            "size": 40,
            "at": "l2:seven stops+600"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "Tự chọn",
            "x": 2518,
            "y": 660,
            "size": 40,
            "at": "l2:seven stops+800"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "Cuối kỳ",
            "x": 2753,
            "y": 660,
            "size": 40,
            "at": "l2:seven stops+1000"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Tối T7",
            "x": 2988,
            "y": 660,
            "size": 40,
            "at": "l2:seven stops+1200"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Cố vấn",
            "x": 3223,
            "y": 660,
            "size": 40,
            "at": "l2:seven stops+1400"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "HK2",
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
          "say": "In this series, it's step one to planning your whole degree yourself.",
          "sub": "Trong chuỗi bài, đây là bước đầu để tự lập kế hoạch học toàn khoá.",
          "keys": [
            "kế hoạch học toàn khoá"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Today: Dũng's first year, and that sheet, in seven stops.",
          "sub": "Hôm nay: năm nhất của Dũng và tờ giấy ấy, bảy chặng.",
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
            "id": "c-t",
            "t": "text",
            "text": "① Tối nhập học · Bản nào?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "label": "Nhắn anh khoá trên",
              "actor": {
                "id": "dung",
                "side": "left"
              },
              "contact": {
                "name": "Anh khoá trên",
                "illus": "man-student"
              },
              "messages": [
                {
                  "from": "me",
                  "text": "Anh ơi, cho em xin chương trình ngành mình ạ.",
                  "at": "l2"
                },
                {
                  "from": "them",
                  "text": "Đây, file khoá anh. Y chang!",
                  "at": "l3"
                }
              ]
            },
            "at": "l1:night",
            "caption": "Tối nhập học · phòng trọ",
            "icon": "mobile-phone"
          },
          {
            "id": "c-old",
            "t": "text",
            "text": "Bản khoá trên = bản mình?",
            "x": 3996,
            "y": 160,
            "size": 48,
            "at": "l3:same",
            "color": "muted"
          },
          {
            "id": "c-oldx",
            "t": "strike",
            "over": "c-old",
            "at": "l4:differ"
          },
          {
            "id": "c-ok",
            "t": "text",
            "text": "Lấy đúng bản khoá mình",
            "x": 3996,
            "y": 250,
            "size": 56,
            "at": "l5:own",
            "color": "accent",
            "hl": [
              {
                "text": "đúng bản khoá mình",
                "at": "l5:intake"
              }
            ]
          },
          {
            "id": "c-wh",
            "t": "text",
            "text": "khoa · phòng đào tạo · cổng SV",
            "x": 3996,
            "y": 345,
            "size": 40,
            "at": "l5:faculty"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: enrolment night. Dũng wants the program the easy way.",
          "sub": "Chặng một: tối nhập học. Dũng muốn có chương trình theo lối tắt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I'll ask a senior. He must have the file.",
          "sub": "Hỏi anh khoá trên. Kiểu gì anh ấy cũng có file.",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The senior replies: here's mine, exactly the same!",
          "sub": "Anh khoá trên đáp: “Đây, file khoá anh. Y chang!”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Careful. Programs can be updated between intakes. Courses and credits may differ.",
          "sub": "Cẩn thận. Chương trình có thể cập nhật giữa các khoá. Môn học, số tín chỉ có thể khác.",
          "keys": [
            "cập nhật giữa các khoá"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Get your own intake's version: faculty page, training office, or student portal.",
          "sub": "Lấy đúng bản của khoá mình: trang khoa, phòng đào tạo, hoặc cổng sinh viên.",
          "keys": [
            "đúng bản của khoá mình"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 200
        }
      ],
      "ref": "p1,p3"
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
            "id": "c-in",
            "t": "text",
            "text": "mã môn · tín chỉ · loại · kỳ",
            "x": 3996,
            "y": 440,
            "size": 44,
            "at": "l1:codes"
          },
          {
            "id": "c-120",
            "t": "text",
            "text": "≥ 120 tín chỉ",
            "x": 3996,
            "y": 520,
            "size": 60,
            "at": "l2:hundred",
            "color": "accent",
            "hl": [
              {
                "text": "≥ 120 tín chỉ",
                "at": "l2:twenty"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "khoá tuyển sau 01/01/2022",
            "x": 3996,
            "y": 610,
            "size": 40,
            "at": "l3:intakes",
            "color": "muted"
          },
          {
            "id": "c-lk",
            "t": "text",
            "text": "Môn nối môn: rõ vai trò",
            "x": 4836,
            "y": 705,
            "size": 46,
            "at": "l4:role",
            "hl": [
              {
                "text": "rõ vai trò",
                "at": "l4:role"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: TT 17/2021/TT-BGDĐT",
            "x": 3996,
            "y": 740,
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
          "say": "Inside: course names, codes, credits, compulsory or elective, and a plan by semester.",
          "sub": "Bên trong: tên học phần, mã môn, số tín chỉ, bắt buộc hay tự chọn, kế hoạch gợi ý theo học kỳ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Under Circular seventeen, a bachelor program has at least one hundred twenty credits.",
          "sub": "Theo Thông tư 17/2021, chương trình đại học có tối thiểu 120 tín chỉ.",
          "keys": [
            "120 tín chỉ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Physical and defence education come extra. That applies to intakes after January first, twenty twenty-two.",
          "sub": "Chưa kể giáo dục thể chất, quốc phòng – an ninh. Áp dụng cho khoá tuyển sinh sau 01/01/2022."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It must also show each course's role, and how courses link together.",
          "sub": "Chương trình cũng phải thể hiện rõ vai trò từng học phần và liên kết giữa các học phần."
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
            "at": "l4",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tuần đầu · Các khối",
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
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4",
                  "pose": "explain"
                }
              ],
              "props": [
                "open-book",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
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
            "at": "l1:hall",
            "caption": "Tuần đầu · giảng đường",
            "icon": "open-book"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Đại cương",
            "x": 5964,
            "y": 160,
            "size": 54,
            "at": "l2:general"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "↓ Cơ sở ngành",
            "x": 5964,
            "y": 235,
            "size": 54,
            "at": "l2:foundation"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "↓ Chuyên ngành",
            "x": 5964,
            "y": 310,
            "size": 54,
            "at": "l2:major"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "↓ Thực tập, khoá luận",
            "x": 5964,
            "y": 385,
            "size": 50,
            "at": "l2:graduation"
          },
          {
            "id": "d-ph",
            "t": "text",
            "text": "rộng → hẹp, như cái phễu",
            "x": 5964,
            "y": 480,
            "size": 48,
            "at": "l3:funnel",
            "color": "accent",
            "hl": [
              {
                "text": "cái phễu",
                "at": "l3:funnel"
              }
            ]
          },
          {
            "id": "d-bb",
            "t": "text",
            "text": "Bắt buộc: chính trị, pháp luật",
            "x": 5964,
            "y": 570,
            "size": 42,
            "at": "l4:politics",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: first week, a big lecture hall. Dũng finally unfolds the sheet.",
          "sub": "Chặng hai: tuần đầu, giảng đường lớn. Dũng cuối cùng cũng mở tờ giấy ra."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Programs come in blocks: general education, foundation, major courses, then graduation work.",
          "sub": "Chương trình chia khối: đại cương, cơ sở ngành, chuyên ngành, rồi phần tốt nghiệp như thực tập, khoá luận.",
          "keys": [
            "chia khối"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Names vary by school. But it narrows like a funnel, from a wide base to your field.",
          "sub": "Tên gọi tuỳ trường, nhưng hẹp dần như cái phễu, từ nền chung đến ngành của bạn.",
          "keys": [
            "cái phễu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "General ed always has politics and law. Many schools add English, computing or maths.",
          "sub": "Đại cương bắt buộc có lý luận chính trị, pháp luật. Nhiều trường thêm ngoại ngữ, tin học, toán.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, same major, spreadsheet lover. And the foundation block? Your base for next year.",
          "sub": "Đây là Thảo, cùng ngành, fan cứng trang tính. Còn khối cơ sở ngành? Là nền cho các môn năm sau.",
          "keys": [
            "nền cho các môn năm sau"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 100
        }
      ],
      "ref": "p4,p5"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "campus",
        "label": "Môn đại cương",
        "actors": [
          {
            "id": "dung",
            "side": "center",
            "pose": "shrug"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đại cương là môn phụ",
          "why": "Điểm trung bình tính theo tín chỉ. Môn bắt buộc bị F phải học lại, còn tính khi xét hạng tốt nghiệp.",
          "rule": "Môn nào có tín chỉ, môn đó có trọng lượng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "General ed? Side subjects. Just pass.",
          "sub": "Đại cương à? Môn phụ. Học cho qua.",
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
          "say": "Averages weigh courses by credits. General ones too.",
          "sub": "Điểm trung bình tính theo trọng số tín chỉ. Môn đại cương nhiều tín chỉ điểm thấp cũng kéo xuống y vậy.",
          "keys": [
            "trọng số tín chỉ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A compulsory F means a retake, counted when degrees are ranked.",
          "sub": "Môn bắt buộc bị F phải học lại. Số tín chỉ học lại còn được tính khi xét hạng tốt nghiệp.",
          "keys": [
            "xét hạng tốt nghiệp"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Okay. Every credit gets real study.",
          "sub": "Được rồi. Tín chỉ nào cũng được học thật.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "If it carries credits, it carries weight.",
          "sub": "Môn nào có tín chỉ, môn đó có trọng lượng.",
          "phase": "redo",
          "keys": [
            "có trọng lượng"
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
            "text": "③ Chọn tự chọn đầu tiên",
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
                "label": "Dũng: chọn theo bạn",
                "ok": false
              },
              "right": {
                "label": "Thảo: đọc đề cương",
                "ok": true
              }
            },
            "at": "l4:Same",
            "caption": "Cùng một nhóm tự chọn",
            "icon": "busts-in-silhouette"
          },
          {
            "id": "e-n",
            "t": "text",
            "text": "Tự chọn: cần mấy tín chỉ?",
            "x": 7932,
            "y": 160,
            "size": 48,
            "at": "l2:how many",
            "hl": [
              {
                "text": "mấy tín chỉ",
                "at": "l2:how many"
              }
            ]
          },
          {
            "id": "e-c",
            "t": "text",
            "text": "Tô màu: bắt buộc, từng nhóm",
            "x": 7932,
            "y": 245,
            "size": 46,
            "at": "l3:colour"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "A · theo bạn → lỡ kế hoạch",
            "x": 7932,
            "y": 340,
            "size": 46,
            "at": "a2:Missed",
            "color": "coral"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "B · đọc đề cương → đúng hướng",
            "x": 7932,
            "y": 420,
            "size": 46,
            "at": "b2:plan",
            "color": "accent"
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "Theo hướng đi, không theo bạn",
            "x": 7932,
            "y": 530,
            "size": 54,
            "at": "l5:direction",
            "color": "accent",
            "hl": [
              {
                "text": "Theo hướng đi",
                "at": "l5:direction"
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
          "say": "Stop three: choosing the first elective.",
          "sub": "Chặng ba: đến kỳ chọn môn tự chọn đầu tiên."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For each elective group, read how many credits it needs, and from which list.",
          "sub": "Với nhóm tự chọn, đọc kỹ nhóm cần bao nhiêu tín chỉ và được chọn trong danh sách nào.",
          "keys": [
            "bao nhiêu tín chỉ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Tip: one colour for compulsory, one per elective group. Heavy terms jump right out.",
          "sub": "Mẹo: một màu cho môn bắt buộc, một màu cho từng nhóm tự chọn. Kỳ nào nặng, nhìn là thấy.",
          "keys": [
            "nhìn là thấy"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Same elective group. Two ways.",
          "sub": "Cùng một nhóm tự chọn. Hai cách."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "My friends all picked this one. Done, no need to read!",
          "sub": "Bạn thân đăng ký môn này cả. Chốt, khỏi đọc!",
          "phase": "a",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "dung",
          "say": "A year later: unrelated to my major. The useful one? Missed.",
          "sub": "Một năm sau: chẳng liên quan hướng mình theo. Môn cần thì lỡ kế hoạch rồi.",
          "phase": "a",
          "face": "sad"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "I read each summary. Which one builds the major I like?",
          "sub": "Mình đọc đề cương tóm tắt từng môn. Môn nào là nền cho chuyên ngành mình thích?",
          "phase": "b",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "thao",
          "say": "Next term, my major course follows right on plan.",
          "sub": "Kỳ sau, mình đăng ký tiếp môn chuyên ngành, đúng kế hoạch.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Choose electives by direction, not by friend group.",
          "sub": "Chọn tự chọn theo hướng đi, không theo nhóm bạn.",
          "keys": [
            "theo hướng đi"
          ]
        }
      ],
      "ref": "p8,p9,p10,p11"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Trượt một môn năm nhất: chuyện nhỏ?",
        "illus": "chains"
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
          "say": "Failing one first-year course. No big deal?",
          "sub": "Trượt một môn năm nhất. Chuyện nhỏ?",
          "keys": [
            "Chuyện nhỏ"
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
            "text": "④ Cuối kỳ · Chuỗi tiên quyết",
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
                  "pose": "think",
                  "face": "sad"
                }
              ],
              "props": [
                "laptop",
                "chains"
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
            "at": "l4:Course",
            "caption": "Cuối học kỳ một · phòng trọ",
            "icon": "chains"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Tiên quyết: phải đạt trước",
            "x": 60,
            "y": 1250,
            "size": 48,
            "at": "l2:Prerequisite",
            "hl": [
              {
                "text": "phải đạt",
                "at": "l2:pass"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Học trước: đã học, chưa cần đạt",
            "x": 60,
            "y": 1330,
            "size": 42,
            "at": "l2:Prior"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Song hành: trước hoặc cùng kỳ",
            "x": 60,
            "y": 1400,
            "size": 42,
            "at": "l3:Co-requisite"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "→ xem quy chế trường",
            "x": 100,
            "y": 1470,
            "size": 40,
            "at": "l3:rules",
            "color": "muted"
          },
          {
            "id": "f-ba",
            "t": "box",
            "x": 60,
            "y": 1560,
            "w": 140,
            "h": 90,
            "at": "l5:retake",
            "stroke": 5,
            "color": "coral"
          },
          {
            "id": "f-ta",
            "t": "text",
            "text": "A",
            "x": 110,
            "y": 1568,
            "size": 60,
            "at": "l5:retake+200",
            "color": "coral"
          },
          {
            "id": "f-ab",
            "t": "arrow",
            "from": [
              210,
              1605
            ],
            "to": [
              300,
              1605
            ],
            "at": "l5:unlocks"
          },
          {
            "id": "f-bb",
            "t": "box",
            "x": 310,
            "y": 1560,
            "w": 140,
            "h": 90,
            "at": "l5:unlocks+200",
            "stroke": 5
          },
          {
            "id": "f-tb",
            "t": "text",
            "text": "B",
            "x": 360,
            "y": 1568,
            "size": 60,
            "at": "l5:unlocks+300"
          },
          {
            "id": "f-bc",
            "t": "arrow",
            "from": [
              460,
              1605
            ],
            "to": [
              550,
              1605
            ],
            "at": "l5:C"
          },
          {
            "id": "f-bc2",
            "t": "box",
            "x": 560,
            "y": 1560,
            "w": 140,
            "h": 90,
            "at": "l5:C+200",
            "stroke": 5
          },
          {
            "id": "f-tc",
            "t": "text",
            "text": "C",
            "x": 610,
            "y": 1568,
            "size": 60,
            "at": "l5:C+300"
          },
          {
            "id": "f-fa",
            "t": "text",
            "text": "F",
            "x": 80,
            "y": 1665,
            "size": 54,
            "at": "l4:F",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: end of term one. Next to many courses, a condition.",
          "sub": "Chặng bốn: cuối học kỳ một. Cạnh tên nhiều môn có ghi điều kiện học trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Prerequisite: pass it before the next course. Prior course: taken before, even if not passed.",
          "sub": "Tiên quyết: phải học và đạt trước môn sau. Học trước: phải đã học, dù có thể chưa đạt.",
          "keys": [
            "phải học và đạt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Co-requisite: before, or the same term. Exact meanings? Your school's rules.",
          "sub": "Song hành: học trước hoặc cùng kỳ. Định nghĩa chính xác: xem quy chế trường mình."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Course B needs course A as a prerequisite. And I got an F in A.",
          "sub": "Môn B ghi môn A là tiên quyết. Mà mình dính F môn A.",
          "face": "sad"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then no B next term: retake A first. And if B unlocks C, the chain slides.",
          "sub": "Vậy kỳ sau chưa học được B, phải học lại A trước. Nếu B mở cửa cho C, cả chuỗi lùi theo.",
          "keys": [
            "cả chuỗi lùi theo"
          ]
        }
      ],
      "ref": "p12,p14"
    },
    {
      "id": "s11",
      "module": "BRK-08",
      "data": {
        "title": "Trượt môn đầu chuỗi",
        "current": 3,
        "points": [
          {
            "label": "Kỳ 1",
            "sub": "Môn A: F",
            "illus": "cross-mark"
          },
          {
            "label": "Kỳ 2",
            "sub": "Học lại A",
            "illus": "counterclockwise-arrows-button"
          },
          {
            "label": "Kỳ 3",
            "sub": "Mới học B",
            "illus": "open-book"
          },
          {
            "label": "Kỳ 4",
            "sub": "Mới tới C",
            "illus": "hourglass-not-done"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Term one: an F. Term two: the retake.",
          "sub": "Kỳ một: điểm F. Kỳ hai: học lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "B and C each slide later.",
          "sub": "B và C lần lượt lùi theo."
        }
      ],
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
            "id": "f-pr",
            "t": "text",
            "text": "Ưu tiên môn đứng đầu chuỗi",
            "x": 60,
            "y": 1750,
            "size": 46,
            "at": "l1:head",
            "hl": [
              {
                "text": "đầu chuỗi",
                "at": "l1:head"
              }
            ]
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "Đầu chuỗi trượt, cả chuỗi chờ",
            "x": 900,
            "y": 1790,
            "size": 46,
            "at": "l2:Fail",
            "color": "accent",
            "hl": [
              {
                "text": "cả chuỗi chờ",
                "at": "l2:waits"
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
          "say": "So find the courses that head many chains. Give those first-year foundations real study time.",
          "sub": "Vậy hãy tìm môn đứng đầu nhiều chuỗi. Các môn nền năm nhất đáng được ưu tiên giờ học.",
          "keys": [
            "đứng đầu nhiều chuỗi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fail the head of a chain, and the whole chain waits.",
          "sub": "Trượt môn đầu chuỗi, cả chuỗi phải chờ.",
          "keys": [
            "cả chuỗi phải chờ"
          ]
        }
      ],
      "ref": "p13,p15"
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
            "at": "l3",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Tối thứ Bảy · Bản đồ",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "props": [
                "laptop",
                "world-map"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1:Saturday",
            "caption": "Tối thứ Bảy · quán cơm gần trường",
            "icon": "world-map"
          },
          {
            "id": "g-0",
            "t": "text",
            "text": "Kế hoạch chuẩn → khung đăng ký",
            "x": 2028,
            "y": 1250,
            "size": 42,
            "at": "l2:standard",
            "color": "muted"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "1. Mỗi cột một học kỳ",
            "x": 2028,
            "y": 1320,
            "size": 46,
            "at": "l3:column"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "2. Tô màu",
            "x": 2028,
            "y": 1385,
            "size": 46,
            "at": "l3:colours"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "3. Mũi tên tiên quyết",
            "x": 2028,
            "y": 1450,
            "size": 46,
            "at": "l4:arrows"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "4. Cộng tín chỉ, đối chiếu",
            "x": 2028,
            "y": 1515,
            "size": 46,
            "at": "l4:add"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "5. Cuối kỳ: dời môn trượt",
            "x": 2028,
            "y": 1580,
            "size": 46,
            "at": "l5:move"
          },
          {
            "id": "g-r",
            "t": "text",
            "text": "Một trang đỡ cả khoá lạc",
            "x": 2028,
            "y": 1680,
            "size": 58,
            "at": "l6:page",
            "color": "accent",
            "hl": [
              {
                "text": "cả khoá",
                "at": "l6:whole"
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
          "say": "Stop five: Saturday night. Thảo turns the program into a map.",
          "sub": "Chặng năm: tối thứ Bảy. Thảo biến chương trình thành bản đồ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It starts from the standard plan. The rules even use it to set your registration limits.",
          "sub": "Gốc là kế hoạch học tập chuẩn. Quy chế còn dùng chính nó để tính mức đăng ký tối thiểu, tối đa.",
          "keys": [
            "kế hoạch học tập chuẩn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "One: a column per semester, credits next to each course. Two: colours.",
          "sub": "Một: mỗi cột một học kỳ, ghi tín chỉ cạnh tên môn. Hai: tô màu.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Three: arrows from prerequisites. Four: add up each column, and check the total.",
          "sub": "Ba: mũi tên từ môn tiên quyết. Bốn: cộng tín chỉ từng cột, cả khoá, đối chiếu tổng chương trình.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Five: each term, tick what I passed, move what I failed.",
          "sub": "Năm: cuối mỗi kỳ, đánh dấu môn đạt, dời môn trượt sang cột sau.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One page of map saves a whole degree from getting lost.",
          "sub": "Một trang bản đồ đỡ cả khoá đi lạc.",
          "keys": [
            "đỡ cả khoá đi lạc"
          ]
        }
      ],
      "ref": "p16,p17,p18"
    },
    {
      "id": "s14",
      "module": "BRK-05",
      "data": {
        "title": "Đến đây, mình đã biết",
        "illus": "light-bulb",
        "points": [
          "Lấy đúng bản khoá mình",
          "Môn nào có tín chỉ, có trọng lượng",
          "Đầu chuỗi trượt, cả chuỗi chờ"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Quick recap. Your own intake's version.",
          "sub": "Nhắc nhanh. Đúng bản của khoá mình."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Credits mean weight.",
          "sub": "Có tín chỉ là có trọng lượng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And chains wait for their head.",
          "sub": "Và cả chuỗi chờ môn đầu."
        }
      ],
      "ref": "p3,p7,p15"
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
            "at": "l3",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
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
            "text": "⑥ Gặp cô Hoa · Chuẩn đầu ra",
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
                  "pose": "hold"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                }
              ],
              "props": [
                "world-map",
                "clipboard"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Hoa",
            "caption": "Phòng cố vấn học tập",
            "icon": "clipboard"
          },
          {
            "id": "h-pt",
            "t": "text",
            "text": "Chỉ đúng cột, đúng môn",
            "x": 3996,
            "y": 1250,
            "size": 48,
            "at": "l2:exact",
            "hl": [
              {
                "text": "đúng cột",
                "at": "l2:column"
              }
            ]
          },
          {
            "id": "h-cd",
            "t": "text",
            "text": "Chuẩn đầu ra",
            "x": 3996,
            "y": 1340,
            "size": 60,
            "at": "l3:standard",
            "color": "accent",
            "hl": [
              {
                "text": "Chuẩn đầu ra",
                "at": "l3:standard"
              }
            ]
          },
          {
            "id": "h-nt",
            "t": "text",
            "text": "ngoại ngữ · tin học",
            "x": 3996,
            "y": 1430,
            "size": 46,
            "at": "l5:language"
          },
          {
            "id": "h-vb",
            "t": "text",
            "text": "Mức, chứng chỉ: văn bản trường",
            "x": 3996,
            "y": 1510,
            "size": 42,
            "at": "l5:documents",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six: Dũng brings his own map to Cô Hoa, his academic advisor.",
          "sub": "Chặng sáu: Dũng mang bản đồ của mình đến gặp cô Hoa, cố vấn học tập.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No vague questions now. He points at the exact column, the exact course.",
          "sub": "Không hỏi chung chung nữa. Dũng chỉ vào đúng cột, đúng môn đang vướng.",
          "keys": [
            "đúng cột, đúng môn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Nice map. But where's your language standard? You need it to graduate.",
          "sub": "Bản đồ được đấy. Nhưng chuẩn đầu ra ngoại ngữ đâu em? Muốn tốt nghiệp là cần.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "To graduate: enough courses and credits, other required parts, and the output standards.",
          "sub": "Muốn tốt nghiệp: đủ học phần, đủ tín chỉ, xong các nội dung bắt buộc khác, và đạt chuẩn đầu ra."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Many schools put language and computing there. Levels and certificates are in school documents.",
          "sub": "Nhiều trường đặt ngoại ngữ, tin học vào chuẩn đầu ra. Mức cụ thể, chứng chỉ được chấp nhận: ghi trong văn bản của trường."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p19,p20"
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
          }
        ],
        "items": [
          {
            "id": "h-33",
            "t": "text",
            "text": "Khung mới: TT 33/2026",
            "x": 3996,
            "y": 1600,
            "size": 46,
            "at": "l1:thirty-three",
            "hl": [
              {
                "text": "TT 33/2026",
                "at": "l1:thirty-three"
              }
            ]
          },
          {
            "id": "h-01",
            "t": "text",
            "text": "thay khung 6 bậc (TT 01/2014)",
            "x": 3996,
            "y": 1670,
            "size": 38,
            "at": "l2:six-level",
            "color": "muted"
          },
          {
            "id": "h-ask",
            "t": "text",
            "text": "Hỏi: khoá mình theo khung nào?",
            "x": 3996,
            "y": 1740,
            "size": 46,
            "at": "l3:which",
            "color": "accent",
            "hl": [
              {
                "text": "khung nào",
                "at": "l3:framework"
              }
            ]
          },
          {
            "id": "h-dt",
            "t": "text",
            "text": "Dự thảo: ngoại ngữ + năng lực số",
            "x": 4836,
            "y": 1795,
            "size": 38,
            "at": "l4:draft",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Language levels follow Vietnam's framework. A new one came with Circular thirty-three, twenty twenty-six.",
          "sub": "Mức ngoại ngữ thường ghi theo bậc của khung năng lực dùng cho Việt Nam. Khung mới ban hành bằng Thông tư 33/2026.",
          "keys": [
            "Thông tư 33/2026"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It replaces the six-level framework of Circular zero one, twenty fourteen.",
          "sub": "Khung này thay khung sáu bậc của Thông tư 01/2014."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So ask which framework and conversion apply to your intake.",
          "sub": "Vậy hãy hỏi trường đang áp dụng khung nào, quy đổi thế nào cho khoá mình.",
          "keys": [
            "khung nào"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The June twenty twenty-six draft also lists language and digital skills for graduation. No effective date yet.",
          "sub": "Dự thảo quy chế đăng ngày 10/6/2026 cũng ghi yêu cầu năng lực ngoại ngữ, năng lực số khi tốt nghiệp. Chưa có ngày hiệu lực."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So start in year one. Don't pile both onto the final year.",
          "sub": "Vậy hãy chuẩn bị từ năm nhất, đừng dồn cả hai đến năm cuối.",
          "keys": [
            "từ năm nhất"
          ]
        }
      ],
      "ref": "p21,p22"
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
            "at": "l5",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Đầu học kỳ hai · 5 ô",
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
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "check-mark-button",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:term two",
            "caption": "Đầu học kỳ hai · phòng trọ",
            "icon": "check-mark-button"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 46,
            "h": 46,
            "at": "l2:Download",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1252,
            "size": 58,
            "at": "l2:Download+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Tải đúng bản khoá mình",
            "x": 6032,
            "y": 1260,
            "size": 42,
            "at": "l2:Download+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1360,
            "w": 46,
            "h": 46,
            "at": "l2:Mark",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1342,
            "size": 58,
            "at": "l2:Mark+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Đánh dấu bắt buộc, tự chọn",
            "x": 6032,
            "y": 1350,
            "size": 42,
            "at": "l2:Mark+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1450,
            "w": 46,
            "h": 46,
            "at": "l3:prerequisites",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1432,
            "size": 58,
            "at": "l3:prerequisites+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Ghi tiên quyết, song hành",
            "x": 6032,
            "y": 1440,
            "size": 42,
            "at": "l3:prerequisites+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1540,
            "w": 46,
            "h": 46,
            "at": "l3:map",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1522,
            "size": 58,
            "at": "l3:map+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Lập bản đồ theo kỳ",
            "x": 6032,
            "y": 1530,
            "size": 42,
            "at": "l3:map+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1630,
            "w": 46,
            "h": 46,
            "at": "l4:Copy",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1612,
            "size": 58,
            "at": "l4:Copy+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Chép chuẩn đầu ra, hạn nộp",
            "x": 6032,
            "y": 1620,
            "size": 42,
            "at": "l4:Copy+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven: start of term two. Dũng's checklist, done properly at last.",
          "sub": "Chặng bảy: đầu học kỳ hai. Danh sách của Dũng, lần này làm cho đàng hoàng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Download your own intake's program. Mark compulsory courses and elective groups.",
          "sub": "Tải chương trình đúng khoá. Đánh dấu môn bắt buộc và nhóm tự chọn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Note prerequisites, prior and co-requisite courses. Build the semester map.",
          "sub": "Ghi điều kiện tiên quyết, học trước, song hành. Lập bản đồ theo học kỳ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Copy the language and computing standards, and any certificate deadlines.",
          "sub": "Chép chuẩn đầu ra ngoại ngữ, tin học, và hạn nộp chứng chỉ nếu có."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Five boxes. One evening. I should've done this on day one.",
          "sub": "Năm ô. Mất đúng một tối. Lẽ ra làm từ ngày đầu.",
          "face": "happy"
        }
      ],
      "ref": "p23"
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
            "text": "Một năm sau · bàn tiếp đón",
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
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "give",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "world-map"
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
            "at": "l1:desk",
            "caption": "Ngày nhập học khoá mới · cùng bàn ấy",
            "icon": "page-facing-up"
          },
          {
            "id": "j-s",
            "t": "text",
            "text": "Tờ giấy ấy → một trang bản đồ",
            "x": 7932,
            "y": 1270,
            "size": 48,
            "at": "l2:page",
            "hl": [
              {
                "text": "bản đồ",
                "at": "l2:page"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Nhìn xa trông rộng”",
            "x": 7932,
            "y": 1410,
            "size": 64,
            "at": "l3:far",
            "color": "accent",
            "hl": [
              {
                "text": "trông rộng",
                "at": "l3:wide"
              }
            ]
          },
          {
            "id": "j-tn",
            "t": "text",
            "text": "→ tới ngày tốt nghiệp",
            "x": 7972,
            "y": 1510,
            "size": 48,
            "at": "l3:graduation"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A year later. Same enrolment desk. Now Dũng hands out the sheets.",
          "sub": "Một năm sau. Vẫn bàn tiếp đón ấy. Giờ Dũng là người phát tờ giấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Here's your program. Read it tonight: colours, arrows, one page. Trust me.",
          "sub": "Chương trình của em đây. Tối nay đọc nhé: tô màu, mũi tên, một trang. Tin anh.",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Look far, see wide. Now Dũng looks all the way to graduation.",
          "sub": "“Nhìn xa trông rộng.” Giờ Dũng nhìn xa tới tận ngày tốt nghiệp.",
          "keys": [
            "Nhìn xa trông rộng"
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
      "ref": "p18"
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
            "at": "l1:own",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:weight",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:chain",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4:page",
            "fit": "G",
            "zoom": 0.8
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
            "x": 4696,
            "y": 260,
            "at": "l1:own"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6604,
            "y": 480,
            "at": "l2:weight"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 740,
            "y": 1570,
            "at": "l3:chain"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 2728,
            "y": 1680,
            "at": "l4:page"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Chương trình, quy chế mỗi trường một khác; đối chiếu văn bản trường bạn. Dự thảo mới chờ ban hành.",
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
          "say": "So: get your own intake's program.",
          "sub": "Tóm lại: lấy đúng chương trình của khoá mình.",
          "keys": [
            "đúng chương trình của khoá mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Every course with credits carries weight.",
          "sub": "Môn nào có tín chỉ, môn đó có trọng lượng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fail the head of a chain, and the chain waits.",
          "sub": "Trượt môn đầu chuỗi, cả chuỗi phải chờ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One page of map saves the whole degree.",
          "sub": "Một trang bản đồ đỡ cả khoá đi lạc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Tonight: copy your standard plan into a spreadsheet, one column per term.",
          "sub": "Việc làm ngay: tối nay chép kế hoạch chuẩn của ngành vào trang tính, mỗi cột một học kỳ.",
          "keys": [
            "mỗi cột một học kỳ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Then the next lesson: how many credits for your first term.",
          "sub": "Rồi sang bài tiếp: “Đăng ký môn học kỳ đầu: chọn bao nhiêu tín chỉ là vừa?”"
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s20",
      "module": "QUIZ-01",
      "data": {
        "q": "You fail course A, which is a prerequisite for course B, what happens next term?",
        "options": [
          "You cannot take course B yet, and you must retake course A first",
          "You can take course B anyway, because failing is the same as passing",
          "Course B is removed from your program, so you graduate earlier"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "chains",
        "why": "Tiên quyết hiểu là phải đạt: trượt A thì học lại A trước, B lùi sang kỳ sau."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You fail course A, which is a prerequisite for course B, what happens next term?",
          "sub": "Bạn trượt môn A, là môn tiên quyết của môn B, kỳ sau sẽ ra sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "You cannot take course B yet. Retake course A first.",
          "sub": "Bạn chưa học được B, phải học lại A trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Fail the head, and the chain waits.",
          "sub": "Trượt môn đầu chuỗi, cả chuỗi phải chờ."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[22]"
    },
    {
      "id": "s21",
      "module": "END-05",
      "data": {
        "text": "Tối nay: chép kế hoạch chuẩn vào trang tính",
        "sub": "Rồi thử bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, one column per term. Then try the forty questions below.",
          "sub": "Tối nay, mỗi cột một học kỳ. Rồi thử bốn mươi câu bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi credit-system-freshmen, bài 2) theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + bảng trắng 10 ô theo NĂM NHẤT của Dũng và TỜ CHƯƠNG TRÌNH (HOOK-23 đồ vật: cận tờ giấy rồi kéo ra thấy Dũng ở bàn tiếp đón → tối nhập học nhắn anh khoá trên (SCENE-02) → tuần đầu: các khối + “Khoan đã!” đại cương là môn phụ → chọn tự chọn: Dũng A / Thảo B → cuối HK1: chuỗi tiên quyết (Dũng F môn A) → tối thứ Bảy: bản đồ 5 bước của Thảo → gặp cô Hoa: chuẩn đầu ra, TT 33/2026 → đầu HK2: danh sách 5 ô → một năm sau cùng bàn tiếp đón, Dũng phát tờ giấy cho khoá mới (khép vòng). Nhân vật theo w145/_series/credit-system-freshmen.md: Dũng, Thảo, cô Hoa. Số chỉ từ bài: 120 tín chỉ, 01/01/2022, TT 17/2021, TT 08/2021, TT 33/2026, TT 01/2014 (6 bậc), 10/6/2026. Ngắt nhịp: BRK-07 (s09, p13), BRK-08 chuỗi lùi (s11, p13–p14), BRK-05 nhắc nhanh (s14), DLG s07 (p6–p7). Thành ngữ “Nhìn xa trông rộng” mở/khép. Câu đố questions[22]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
