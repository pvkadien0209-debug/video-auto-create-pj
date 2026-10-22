// Kịch bản video W lần 3 (#110) — "Phở: lịch sử và cách thưởng thức" · chuỗi "Món Việt nổi tiếng thế giới"
export default {
  "schema": "detpro.video-script/0.2",
  "id": "the-history-of-pho--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "vietnamese-food-lovers",
    "slug": "the-history-of-pho",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Phở: lịch sử và cách thưởng thức",
    "series": "Món Việt nổi tiếng thế giới"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "notes": "#145 dựng lại theo hạt nhân kịch bản (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô (5 × 2) đi theo MỘT THÁNG PHỞ CỦA SAM (6:30 sáng T2 “From Hanoi, I think?” → T2 nồi nước dùng → T3 gọi món → T4 bác Bình nêm mẫu + “Khoan đã!” đổ tương vào bát → T6 tuần sau bác sĩ dặn bớt mặn → tuần 3 Sài Gòn (hai cách) → tuần 4 bát phở chờ → tối CN ghi chú → 6:30 sáng T2 cuối tháng). Nhân vật (w145/_series/vietnamese-food-lovers.md): Thảo (“bạn”), Sam (đồng nghiệp nước ngoài, người được dặn ăn bớt mặn p22), bác Bình (người làm mẫu nêm p18, người quen phở Hà Nội p26). Cảnh ngắt nhịp: BRK-08 (hành trình đầu TK 20 → 1954 → 1975), BRK-04 (Sai/Đúng: phở nặng?), BRK-07 (rehook trước Sài Gòn). Số chỉ từ bài: khoảng một thế kỷ, đầu thế kỷ 20, 1954, 1975. Khép vòng: “From Hanoi, I think?” → câu giới thiệu p30; “Cơm không rau như đau không thuốc” → phở không chuyện để kể. Lưu ý chung cuối bài (#133). Bản cũ: w145/bak/the-history-of-pho--w01.js.",
  "narrator": "det",
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
            "text": "~100 năm",
            "x": 70,
            "y": 60,
            "size": 200,
            "at": "l1:century",
            "color": "accent",
            "hl": [
              {
                "text": "~100 năm",
                "at": "l1:century"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "tuổi của bát phở",
            "x": 90,
            "y": 300,
            "size": 60,
            "at": "l1:pho"
          },
          {
            "id": "a-who",
            "t": "text",
            "text": "Ta tưởng: biết rõ người nấu đầu?",
            "x": 70,
            "y": 420,
            "size": 50,
            "at": "l2:first bowl",
            "color": "muted"
          },
          {
            "id": "a-whox",
            "t": "strike",
            "over": "a-who",
            "at": "l2:Nobody"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "About a century. That's roughly how old pho is.",
          "sub": "Khoảng một thế kỷ. Phở đã có chừng ấy tuổi.",
          "keys": [
            "Khoảng một thế kỷ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And who cooked the very first bowl? Nobody knows. Even the broth keeps quiet.",
          "sub": "Còn ai nấu bát đầu tiên? Không ai biết. Nồi nước dùng cũng im re.",
          "keys": [
            "Không ai biết"
          ]
        }
      ],
      "ref": "p4,outro"
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
            "at": "l2",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "steaming-bowl",
                "six-oclock"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "sam",
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
            "at": "l1",
            "caption": "6:30 sáng thứ Hai · quán phở",
            "icon": "steaming-bowl"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“Where does pho come from?”",
            "x": 60,
            "y": 540,
            "size": 44,
            "at": "l2:Where",
            "font": "base",
            "color": "accent"
          },
          {
            "id": "a-a",
            "t": "text",
            "text": "“From Hanoi, I think?”",
            "x": 60,
            "y": 620,
            "size": 50,
            "at": "l3:think",
            "color": "coral",
            "hl": [
              {
                "text": "I think?",
                "at": "l3:think"
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
          "say": "Meet Thảo again, and Sam, her colleague from abroad, at a pho shop at six thirty a.m.",
          "sub": "Lại là Thảo, và Sam, đồng nghiệp nước ngoài, ở quán phở lúc sáu rưỡi sáng.",
          "keys": [
            "quán phở lúc sáu rưỡi sáng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Where does pho come from?",
          "sub": "Phở từ đâu ra vậy?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "From Hanoi, I think?",
          "sub": "Từ Hà Nội, chắc thế?",
          "face": "thinking",
          "pose": "shrug"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A lifetime of pho, and that's all she's got? Let's fix that this month.",
          "sub": "Ăn phở cả đời, mà chỉ kể được có thế? Tháng này ta sửa nhé.",
          "keys": [
            "Tháng này ta sửa"
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
            "text": "Phở từ đâu ra?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:really",
            "hl": [
              {
                "text": "từ đâu",
                "at": "l1:come from"
              }
            ]
          },
          {
            "id": "b-n",
            "t": "text",
            "text": "Miền Bắc, đầu thế kỷ 20",
            "x": 2028,
            "y": 170,
            "size": 56,
            "at": "l2:north",
            "color": "accent",
            "hl": [
              {
                "text": "đầu thế kỷ 20",
                "at": "l2:twentieth"
              }
            ]
          },
          {
            "id": "b-nd",
            "t": "text",
            "text": "quanh Nam Định, Hà Nội",
            "x": 2068,
            "y": 255,
            "size": 46,
            "at": "l2:Nam"
          },
          {
            "id": "b-who",
            "t": "text",
            "text": "Người nấu đầu tiên: chưa rõ",
            "x": 2028,
            "y": 340,
            "size": 48,
            "at": "l3:record",
            "color": "coral",
            "hl": [
              {
                "text": "chưa rõ",
                "at": "l3:record"
              }
            ]
          },
          {
            "id": "b-salt",
            "t": "text",
            "text": "→ nghe “có chút muối”",
            "x": 2068,
            "y": 420,
            "size": 44,
            "at": "l3:salt",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So where does pho really come from?",
          "sub": "Vậy phở thật ra từ đâu?",
          "keys": [
            "từ đâu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It formed in the north, around the early twentieth century, near Nam Dinh and Hanoi.",
          "sub": "Phở hình thành ở miền Bắc, khoảng đầu thế kỷ 20, quanh Nam Định và Hà Nội.",
          "keys": [
            "miền Bắc, khoảng đầu thế kỷ 20"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No record names the first cook. So take inventor stories with a pinch of salt.",
          "sub": "Không tài liệu nào ghi người nấu đầu tiên. Chuyện “người phát minh” nghe với chút dè dặt.",
          "keys": [
            "chút dè dặt"
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
            "id": "b-nm",
            "t": "text",
            "text": "Tên “phở”: 2 giả thuyết",
            "x": 2928,
            "y": 170,
            "size": 50,
            "at": "l1:theories",
            "hl": [
              {
                "text": "2 giả thuyết",
                "at": "l1:Two"
              }
            ]
          },
          {
            "id": "b-f",
            "t": "text",
            "text": "• “feu” trong pot au feu",
            "x": 2948,
            "y": 245,
            "size": 42,
            "at": "l1:feu"
          },
          {
            "id": "b-c",
            "t": "text",
            "text": "• cách gọi bún bò người Hoa",
            "x": 2948,
            "y": 305,
            "size": 42,
            "at": "l2:Chinese"
          },
          {
            "id": "b-v",
            "t": "text",
            "text": "+ bánh gạo, nước mắm rất Việt",
            "x": 2928,
            "y": 380,
            "size": 42,
            "at": "l3:rice",
            "color": "accent"
          },
          {
            "id": "b-m",
            "t": "text",
            "text": "Chưa chắc → thêm “có lẽ”",
            "x": 2928,
            "y": 460,
            "size": 50,
            "at": "l4:maybe",
            "color": "accent",
            "hl": [
              {
                "text": "“có lẽ”",
                "at": "l4:maybe"
              }
            ]
          },
          {
            "id": "b-mo",
            "t": "text",
            "text": "Một tháng phở của Sam",
            "x": 2028,
            "y": 545,
            "size": 50,
            "at": "l5:month",
            "hl": [
              {
                "text": "Một tháng",
                "at": "l5:month"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 640,
            "w": 240,
            "h": 90,
            "at": "l5:stops+300",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 640,
            "w": 240,
            "h": 90,
            "at": "l5:stops+550",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 640,
            "w": 240,
            "h": 90,
            "at": "l5:stops+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 640,
            "w": 240,
            "h": 90,
            "at": "l5:stops+1050",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 640,
            "w": 240,
            "h": 90,
            "at": "l5:stops+1300",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 640,
            "w": 240,
            "h": 90,
            "at": "l5:stops+1550",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2",
            "x": 2098,
            "y": 653,
            "size": 48,
            "at": "l5:stops+420"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2368,
            "y": 653,
            "size": 48,
            "at": "l5:stops+670"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2638,
            "y": 653,
            "size": 48,
            "at": "l5:stops+920"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T6",
            "x": 2908,
            "y": 653,
            "size": 48,
            "at": "l5:stops+1170"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "Sài Gòn",
            "x": 3128,
            "y": 653,
            "size": 42,
            "at": "l5:stops+1420"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "Tuần 4",
            "x": 3398,
            "y": 653,
            "size": 42,
            "at": "l5:stops+1670"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The name has two theories. Maybe from feu, in the French beef stew pot au feu.",
          "sub": "Tên gọi có hai giả thuyết: gần chữ “feu” trong món bò hầm pot au feu của Pháp,",
          "keys": [
            "hai giả thuyết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Or from a Chinese name for a beef noodle dish.",
          "sub": "hoặc từ cách gọi món bún bò của người Hoa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Many say pho met both, plus very Vietnamese rice noodles, fish sauce and grilled spices.",
          "sub": "Nhiều người cho rằng phở là gặp gỡ của cả hai, cộng bánh gạo, nước mắm, gia vị nướng rất Việt."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not sure? Tell the story, but add maybe.",
          "sub": "Chuyện chưa chắc thì cứ kể, nhưng kèm chữ “có lẽ”.",
          "keys": [
            "kèm chữ “có lẽ”"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Now, Sam's month of pho, in six stops.",
          "sub": "Giờ theo Sam qua một tháng ăn phở, sáu chặng.",
          "keys": [
            "một tháng ăn phở"
          ]
        }
      ],
      "ref": "p2,p4,p5"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Bát phở đi đường dài",
        "points": [
          {
            "label": "Đầu thế kỷ 20",
            "sub": "Gánh rong, rồi có quán",
            "illus": "steaming-bowl"
          },
          {
            "label": "Sau 1954",
            "sub": "Theo người vào Nam",
            "illus": "motor-scooter"
          },
          {
            "label": "Sau 1975",
            "sub": "Ra nhiều nước",
            "illus": "airplane"
          }
        ],
        "current": 2
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Street sellers with carrying poles, then shops.",
          "sub": "Gánh rong trước, quán sau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "South after 1954, the world after 1975.",
          "sub": "Vào Nam sau 1954, ra thế giới sau 1975.",
          "keys": [
            "ra thế giới sau 1975"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
            "text": "① T2 · Nồi nước dùng",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:pot"
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
                  "id": "sam",
                  "side": "left",
                  "face": "surprised",
                  "pose": "point"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "pot-of-food",
                "bone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "sam",
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
            "at": "l1:stares",
            "caption": "Thứ Hai · cạnh nồi nước dùng",
            "icon": "pot-of-food"
          },
          {
            "id": "c-s",
            "t": "text",
            "text": "Hồn phở = nước dùng",
            "x": 3996,
            "y": 170,
            "size": 56,
            "at": "l3:broth",
            "color": "accent",
            "hl": [
              {
                "text": "nước dùng",
                "at": "l3:broth"
              }
            ]
          },
          {
            "id": "c-b",
            "t": "text",
            "text": "Xương bò ninh nhỏ lửa",
            "x": 3996,
            "y": 255,
            "size": 46,
            "at": "l3:simmered"
          },
          {
            "id": "c-g",
            "t": "text",
            "text": "gừng, hành nướng, quế, hồi",
            "x": 3996,
            "y": 325,
            "size": 42,
            "at": "l4:ginger"
          },
          {
            "id": "c-cl",
            "t": "text",
            "text": "Trong, thơm nhẹ ✓",
            "x": 3996,
            "y": 410,
            "size": 48,
            "at": "l5:clear",
            "hl": [
              {
                "text": "Trong",
                "at": "l5:clear"
              }
            ]
          },
          {
            "id": "c-cd",
            "t": "text",
            "text": "Đục, gắt: lửa to, quá tay",
            "x": 3996,
            "y": 480,
            "size": 44,
            "at": "l5:Cloudy",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Monday. Sam stares at a pot the size of a washing machine.",
          "sub": "Chặng một: thứ Hai. Sam nhìn trân trân cái nồi to bằng máy giặt.",
          "keys": [
            "to bằng máy giặt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "What's in that giant pot?",
          "sub": "Trong cái nồi khổng lồ kia có gì thế?",
          "face": "surprised",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "The broth. Beef bones, simmered on low heat for hours.",
          "sub": "Nước dùng đấy. Xương bò ninh nhỏ lửa nhiều giờ.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Cleaned bones, grilled ginger and onion, cinnamon, star anise, black cardamom. Then fish sauce and salt.",
          "sub": "Xương chần sạch, gừng, hành nướng, quế, hồi, thảo quả. Nêm nước mắm và muối."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Good broth is clear and lightly fragrant. Cloudy and harsh? Boiled too hard, or too much spice.",
          "sub": "Nước ngon thì trong, thơm nhẹ. Đục, mùi gắt? Ninh lửa to, hoặc quá tay gia vị.",
          "keys": [
            "trong, thơm nhẹ"
          ]
        }
      ],
      "ref": "p6"
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
            "id": "c-salt",
            "t": "text",
            "text": "Muối: chủ yếu trong nước",
            "x": 3996,
            "y": 570,
            "size": 46,
            "at": "l1:saltiest",
            "color": "coral",
            "hl": [
              {
                "text": "trong nước",
                "at": "l1:broth"
              }
            ]
          },
          {
            "id": "c-in",
            "t": "text",
            "text": "Bánh gạo · bò/gà · hành lá",
            "x": 3996,
            "y": 640,
            "size": 42,
            "at": "l3:rice"
          },
          {
            "id": "c-ca",
            "t": "text",
            "text": "“Cơm không rau như đau không thuốc”",
            "x": 4816,
            "y": 700,
            "size": 40,
            "at": "l4:greens",
            "color": "accent",
            "hl": [
              {
                "text": "không rau",
                "at": "l4:without greens"
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
          "say": "The broth is also the saltiest part, along with the fish sauce people add.",
          "sub": "Nước dùng cũng là phần đậm nhất: muối nằm chủ yếu trong nước, cùng nước mắm nêm thêm.",
          "keys": [
            "muối nằm chủ yếu trong nước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Guest asks “Is pho salty?” Say: the broth is rich. No need to drink it all.",
          "sub": "Khách hỏi “Is pho salty?”: nước dùng khá đậm, ai cần ăn nhạt thì không cần uống cạn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "In the bowl: rice noodles, beef or chicken, and usually just green onion. Northern pho has few greens.",
          "sub": "Trong bát: bánh phở gạo, bò hoặc gà, thường chỉ có hành lá. Phở Bắc vốn ít rau."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: rice without greens is like illness without medicine. More greens, better balance.",
          "sub": "Ông bà dặn: “Cơm không rau như đau không thuốc.” Thêm rau, bát phở cân bằng hơn.",
          "keys": [
            "Cơm không rau như đau không thuốc"
          ]
        }
      ],
      "ref": "p7,p8"
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
            "text": "② T3 · Gọi món",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:menu"
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
                  "id": "sam",
                  "side": "left",
                  "face": "thinking",
                  "pose": "think"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "cut-of-meat",
                "steaming-bowl"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "sam",
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
            "at": "l1:secret",
            "caption": "Thứ Ba · quán phở",
            "icon": "cut-of-meat"
          },
          {
            "id": "d-o",
            "t": "text",
            "text": "“Tái chín, một tô không hành”",
            "x": 5964,
            "y": 170,
            "size": 44,
            "at": "l3:bowls",
            "color": "accent",
            "hl": [
              {
                "text": "Tái chín",
                "at": "l3:well done"
              }
            ]
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "Tái: nạc chần trong bát",
            "x": 5964,
            "y": 260,
            "size": 44,
            "at": "l4:Tai"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "Chín: nạc luộc chín",
            "x": 5964,
            "y": 325,
            "size": 44,
            "at": "l4:Chin"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "Nạm: gân, chút mỡ · Gầu: béo",
            "x": 5964,
            "y": 390,
            "size": 42,
            "at": "l4:flank"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "Gân, sách: để khi tò mò",
            "x": 5964,
            "y": 455,
            "size": 42,
            "at": "l5:Tendon",
            "color": "muted"
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "Không ăn bò → phở gà",
            "x": 5964,
            "y": 520,
            "size": 44,
            "at": "l5:chicken",
            "color": "accent",
            "hl": [
              {
                "text": "phở gà",
                "at": "l5:Chicken"
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
          "say": "Second stop: Tuesday. Sam reads the menu like a secret code.",
          "sub": "Chặng hai: thứ Ba. Sam đọc thực đơn như giải mật mã.",
          "keys": [
            "giải mật mã"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Tai, chin, nam, gau... Which one is safe for me?",
          "sub": "Tái, chín, nạm, gầu... Món nào an toàn cho tôi?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Two bowls of rare and well done beef, one without onion, please!",
          "sub": "Cho em hai tô tái chín, một tô không hành nhé!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Tai is rare lean beef, cooked in the bowl. Chin is well done. Nam is flank. Gau, fatty brisket.",
          "sub": "Tái: nạc chần ngay trong bát. Chín: nạc luộc chín. Nạm có gân, chút mỡ. Gầu: ức béo giòn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Tendon and tripe are chewy fun, for curious days. Chicken pho is clear and light.",
          "sub": "Gân, sách dai giòn, để dành khi tò mò. Không ăn bò thì phở gà, nước trong, vị nhẹ.",
          "keys": [
            "phở gà"
          ]
        }
      ],
      "ref": "p9,p10,p11"
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
            "id": "d-own",
            "t": "text",
            "text": "Gọi theo ý mình: người bán quen",
            "x": 5964,
            "y": 610,
            "size": 40,
            "at": "l1:way",
            "hl": [
              {
                "text": "theo ý mình",
                "at": "l1:own way"
              }
            ]
          },
          {
            "id": "d-q",
            "t": "text",
            "text": "Quẩy: một đĩa ăn chung",
            "x": 6804,
            "y": 700,
            "size": 46,
            "at": "l2:plate",
            "color": "coral",
            "hl": [
              {
                "text": "ăn chung",
                "at": "l2:shared"
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
          "say": "Everyone orders their own way: more onion, fewer noodles, no fat. Sellers are used to it.",
          "sub": "Mỗi người gọi theo ý mình: nhiều hành, ít bánh, không mỡ. Người bán quen rồi.",
          "keys": [
            "theo ý mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Quay, fried dough sticks, are a Hanoi classic. Fried and soaked in salty broth, so one shared plate.",
          "sub": "Quẩy, bột chiên giòn, là món kèm quen ở Hà Nội. Đồ chiên lại thấm nước mặn: một đĩa ăn chung.",
          "keys": [
            "một đĩa ăn chung"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Phở là món “nặng”?",
        "labels": [
          "Sai",
          "Đúng"
        ],
        "wrong": "Phở nặng, muốn ăn nhẹ thì tránh",
        "right": "Gọi tái chín, thêm rau, quẩy vài miếng",
        "wrongIllus": "cross-mark",
        "rightIllus": "leafy-green"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Pho is heavy, so skip it?",
          "sub": "Phở nặng, nên tránh?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. Tai chin, extra greens. How you order decides.",
          "sub": "Không. Tái chín, thêm rau. Cách gọi mới quyết định.",
          "keys": [
            "Cách gọi mới quyết định"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p13,p14"
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
            "at": "l5",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ T4 · Bác Bình nêm mẫu",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Wednesday"
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
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "spoon",
                "lime",
                "hot-pepper"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "binh",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
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
            "at": "l1:Uncle",
            "caption": "Thứ Tư · bác Bình ra tay",
            "icon": "spoon"
          },
          {
            "id": "e-c0",
            "t": "box",
            "x": 7932,
            "y": 180,
            "w": 50,
            "h": 50,
            "at": "l2:spoon",
            "stroke": 5
          },
          {
            "id": "e-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 162,
            "size": 62,
            "at": "l2:spoon+600",
            "color": "accent"
          },
          {
            "id": "e-l0",
            "t": "text",
            "text": "Húp một thìa nước",
            "x": 8007,
            "y": 172,
            "size": 44,
            "at": "l2:spoon+200"
          },
          {
            "id": "e-c1",
            "t": "box",
            "x": 7932,
            "y": 265,
            "w": 50,
            "h": 50,
            "at": "l3:lime",
            "stroke": 5
          },
          {
            "id": "e-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 247,
            "size": 62,
            "at": "l3:lime+600",
            "color": "accent"
          },
          {
            "id": "e-l1",
            "t": "text",
            "text": "Chanh, ớt, nếm lại",
            "x": 8007,
            "y": 257,
            "size": 44,
            "at": "l3:lime+200"
          },
          {
            "id": "e-c2",
            "t": "box",
            "x": 7932,
            "y": 350,
            "w": 50,
            "h": 50,
            "at": "l4:fish",
            "stroke": 5
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 332,
            "size": 62,
            "at": "l4:fish+600",
            "color": "accent"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Nhạt: vài giọt nước mắm",
            "x": 8007,
            "y": 342,
            "size": 44,
            "at": "l4:fish+200"
          },
          {
            "id": "e-c3",
            "t": "box",
            "x": 7932,
            "y": 435,
            "w": 50,
            "h": 50,
            "at": "l5:respects",
            "stroke": 5
          },
          {
            "id": "e-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 417,
            "size": 62,
            "at": "l5:respects+600",
            "color": "accent"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "Tương ra đĩa nhỏ",
            "x": 8007,
            "y": 427,
            "size": 44,
            "at": "l5:respects+200"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Bước hai thường đã vừa",
            "x": 7932,
            "y": 540,
            "size": 48,
            "at": "l5:two",
            "color": "accent",
            "hl": [
              {
                "text": "đã vừa",
                "at": "l5:right"
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
          "say": "Third stop: Wednesday. Meet Uncle Bình, Thảo's uncle, a Hanoi pho lover, and today's teacher.",
          "sub": "Chặng ba: thứ Tư. Đây là bác Bình, bác ruột Thảo, mê phở Hà Nội, hôm nay làm thầy.",
          "keys": [
            "hôm nay làm thầy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Step one: a spoon of broth. Taste the sweetness, the cinnamon and star anise.",
          "sub": "Một: húp một thìa nước, nghe vị ngọt thanh, mùi quế hồi.",
          "pose": "hold",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "binh",
          "say": "Two: a little lime, a few slices of chilli, and taste again.",
          "sub": "Hai: vắt chút chanh, vài lát ớt, rồi nếm lại.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "binh",
          "say": "Still bland? Three: a few drops of fish sauce. Taste again.",
          "sub": "Vẫn nhạt? Ba: vài giọt nước mắm, nếm tiếp.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Tasting first respects the cook. Often, by step two, the bowl is just right.",
          "sub": "Nếm trước là tôn trọng người nấu. Nhiều khi đến bước hai là bát đã vừa.",
          "keys": [
            "tôn trọng người nấu"
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
      "ref": "p15,p18"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "cafe",
        "label": "Thứ Tư · lọ tương trên bàn",
        "actors": [
          {
            "id": "sam",
            "side": "left"
          },
          {
            "id": "binh",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đổ tương thẳng vào bát",
          "why": "Nước dùng đục, thêm mặn, thêm ngọt, mất vị gốc của quán.",
          "rule": "Nếm trước, nêm sau, tương chấm riêng"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Now the fun part. Lots of sauce, straight into the bowl!",
          "sub": "Giờ đến phần vui. Tương đổ thẳng vào bát thật nhiều!",
          "face": "happy",
          "pose": "hold",
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
          "say": "That makes the broth cloudy, saltier and sweeter. Goodbye, shop's own taste.",
          "sub": "Thế là nước đục, thêm mặn, thêm ngọt. Tạm biệt vị gốc của quán.",
          "keys": [
            "Tạm biệt vị gốc của quán"
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
          "who": "binh",
          "say": "Sauces go in a small dish. Dip the meat as you eat.",
          "sub": "Tương rót ra đĩa nhỏ, chấm thịt khi ăn.",
          "phase": "redo",
          "pose": "give",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Taste first, season after, a little at a time.",
          "sub": "Nếm trước, nêm sau, thêm từng chút một.",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb",
          "keys": [
            "Nếm trước, nêm sau"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p16,p19"
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
          }
        ],
        "items": [
          {
            "id": "e-n",
            "t": "text",
            "text": "Chanh, ớt, rau, hành ngâm",
            "x": 7932,
            "y": 620,
            "size": 42,
            "at": "l1:Lime"
          },
          {
            "id": "e-n2",
            "t": "text",
            "text": "→ đậm hương, gần như không muối",
            "x": 7972,
            "y": 685,
            "size": 38,
            "at": "l1:salt",
            "color": "accent",
            "hl": [
              {
                "text": "không muối",
                "at": "l1:no salt"
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
          "say": "Lime, chilli, herbs and pickled onion add flavour with almost no salt.",
          "sub": "Chanh, ớt, rau thơm, hành tây ngâm giấm thêm hương mà gần như không thêm muối.",
          "keys": [
            "gần như không thêm muối"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The bowl gets bolder, and the broth keeps the shop's own taste.",
          "sub": "Bát phở đậm đà hơn, nước dùng vẫn giữ vị gốc của quán."
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ T6 · Bác sĩ dặn bớt mặn",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:doctor"
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
                  "id": "sam",
                  "side": "left",
                  "face": "worried",
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "salt",
                "steaming-bowl"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "sam",
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
            "at": "l1:news",
            "caption": "Thứ Sáu tuần sau · ở công ty",
            "icon": "salt"
          },
          {
            "id": "f-q",
            "t": "text",
            "text": "“Bỏ hẳn phở à?”",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l2:skip",
            "color": "coral"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Bát nhỏ",
            "x": 60,
            "y": 1350,
            "size": 50,
            "at": "l3:small"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Ăn hết bánh, thịt",
            "x": 60,
            "y": 1425,
            "size": 50,
            "at": "l3:noodles"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "Để lại phần lớn nước",
            "x": 60,
            "y": 1500,
            "size": 50,
            "at": "l3:leave",
            "color": "accent",
            "hl": [
              {
                "text": "Để lại",
                "at": "l3:leave"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Ăn hết cái, nước để lại",
            "x": 60,
            "y": 1610,
            "size": 52,
            "at": "l4:Salt",
            "color": "accent",
            "hl": [
              {
                "text": "nước để lại",
                "at": "l4:adds up"
              }
            ]
          },
          {
            "id": "f-doc",
            "t": "text",
            "text": "Huyết áp, thận: theo bác sĩ",
            "x": 60,
            "y": 1700,
            "size": 42,
            "at": "l5:kidney",
            "color": "coral",
            "hl": [
              {
                "text": "theo bác sĩ",
                "at": "l5:doctor"
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
          "say": "Fourth stop: next Friday. Sam has news from his doctor.",
          "sub": "Chặng bốn: thứ Sáu tuần sau. Sam mang tin từ bác sĩ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "My doctor says eat less salt, and pho broth is salty. Should I skip it?",
          "sub": "Bác sĩ dặn tôi ăn bớt mặn, mà nước phở mặn. Hay tôi bỏ hẳn?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "No need! Order a small bowl, eat the noodles and meat, and leave most of the broth.",
          "sub": "Đâu cần! Gọi bát nhỏ, ăn hết bánh và thịt, để lại phần lớn nước.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Healthy people can finish the broth now and then. Eat pho often? Leave some. Salt adds up.",
          "sub": "Người khoẻ thỉnh thoảng uống cạn không sao. Ăn phở thường xuyên thì để lại một phần: muối cộng dồn.",
          "keys": [
            "muối cộng dồn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "High blood pressure or kidney disease? Follow your own doctor, not a video online.",
          "sub": "Huyết áp cao, bệnh thận? Theo bác sĩ của mình, đừng theo video trên mạng.",
          "keys": [
            "Theo bác sĩ của mình"
          ]
        }
      ],
      "ref": "p20,p21,p22,p23"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Phở Hà Nội gặp phở Sài Gòn?",
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
          "say": "What happens when a Hanoi pho lover meets a Saigon bowl?",
          "sub": "Chuyện gì xảy ra khi tín đồ phở Hà Nội gặp bát phở Sài Gòn?",
          "keys": [
            "bát phở Sài Gòn"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p26"
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
            "at": "a1",
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
            "text": "⑤ Tuần 3 · Phở Sài Gòn",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Saigon"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "binh",
                  "side": "center"
                }
              ],
              "left": {
                "label": "Gạt đĩa rau",
                "ok": false
              },
              "right": {
                "label": "Thả rau vào bát",
                "ok": true
              }
            },
            "at": "l1:versions",
            "caption": "Tuần 3 · công tác Sài Gòn",
            "icon": "leafy-green"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: “Ngọt mà lắm rau!”",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "a1:sweet",
            "color": "coral"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "→ quen vị, gần như không rau",
            "x": 2068,
            "y": 1335,
            "size": 40,
            "at": "l4:familiar",
            "color": "muted"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: giá, húng quế, ngò gai",
            "x": 2028,
            "y": 1420,
            "size": 46,
            "at": "b1:sprouts",
            "color": "accent"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "→ thơm, tươi, đủ rau",
            "x": 2068,
            "y": 1495,
            "size": 40,
            "at": "l4:greens",
            "hl": [
              {
                "text": "đủ rau",
                "at": "l4:greens"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Đến đâu ăn theo đó",
            "x": 2028,
            "y": 1590,
            "size": 56,
            "at": "l5:local",
            "color": "accent",
            "hl": [
              {
                "text": "ăn theo đó",
                "at": "l5:local way"
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
          "say": "Fifth stop: week three, a work trip to Saigon. Uncle Bình meets his first Saigon pho. Two versions.",
          "sub": "Chặng năm: tuần thứ ba, công tác Sài Gòn. Bác Bình gặp bát phở Sài Gòn đầu tiên. Hai phiên bản.",
          "keys": [
            "Hai phiên bản"
          ]
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "binh",
          "say": "Too sweet, and so many greens! Take that plate away.",
          "sub": "Ngọt mà lắm rau! Dẹp đĩa này ra.",
          "phase": "a",
          "face": "stern",
          "pose": "cross"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "binh",
          "say": "Fine, the local way. Sprouts, basil, sawtooth herb... Fresh!",
          "sub": "Thôi, ăn theo kiểu ở đây. Giá, húng quế, ngò gai... Thơm hẳn!",
          "phase": "b",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Version A tastes familiar, with almost no greens. Version B gets the greens his usual pho lacks.",
          "sub": "Bản A quen vị nhưng gần như không rau. Bản B có thêm đúng phần rau phở quen vẫn thiếu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Wherever you go, eat the local way. Keep the greens.",
          "sub": "Đến đâu ăn theo đó, rau đi kèm đừng bỏ.",
          "keys": [
            "Đến đâu ăn theo đó"
          ]
        }
      ],
      "ref": "p26,p27"
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
            "id": "g-h",
            "t": "text",
            "text": "Hà Nội: nước thanh, ít rau",
            "x": 2028,
            "y": 1680,
            "size": 40,
            "at": "l1:Hanoi"
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "Nam Định: đậm nước mắm",
            "x": 2028,
            "y": 1740,
            "size": 40,
            "at": "l1:Nam"
          },
          {
            "id": "g-s",
            "t": "text",
            "text": "Sài Gòn: ngọt, nhiều rau",
            "x": 2028,
            "y": 1800,
            "size": 40,
            "at": "l2:Saigon"
          },
          {
            "id": "g-cu",
            "t": "text",
            "text": "Phở cuốn: nhiều rau",
            "x": 2868,
            "y": 1790,
            "size": 46,
            "at": "l3:rolls",
            "color": "accent",
            "hl": [
              {
                "text": "nhiều rau",
                "at": "l3:greens"
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
          "say": "Hanoi pho: clear broth, wide noodles, few greens. Nam Dinh pho: often more fish sauce.",
          "sub": "Phở Hà Nội nước thanh, bánh bản to, ít rau. Phở Nam Định thường đậm nước mắm hơn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Saigon pho: sweeter, with sprouts, basil and sawtooth herb. Only trends: every shop differs.",
          "sub": "Phở Sài Gòn ngọt hơn, nhiều giá, húng quế, ngò gai. Chỉ là xu hướng, mỗi quán mỗi khác.",
          "keys": [
            "mỗi quán mỗi khác"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pho cuon rolls beef and lots of greens in noodle sheets. Fried pho is oilier, for now and then.",
          "sub": "Phở cuốn cuộn thịt bò với nhiều rau sống. Phở xào, phở chiên nhiều dầu hơn, ăn thỉnh thoảng.",
          "keys": [
            "nhiều rau sống"
          ]
        }
      ],
      "ref": "p24,p25,p3"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Tuần 4 · Bát phở chờ",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:four"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone",
                  "face": "sad"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "point",
                  "face": "happy"
                }
              ],
              "props": [
                "steaming-bowl",
                "chopsticks",
                "spoon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "sam",
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
            "at": "l1:call",
            "caption": "Tuần 4 · Thảo mải nghe điện thoại",
            "icon": "mobile-phone"
          },
          {
            "id": "h-q",
            "t": "text",
            "text": "“Bánh phở của bạn đang béo ra!”",
            "x": 3996,
            "y": 1260,
            "size": 40,
            "at": "l2:noodles",
            "color": "coral"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Ăn ngay khi còn nóng",
            "x": 3996,
            "y": 1350,
            "size": 54,
            "at": "l4:hot",
            "color": "accent",
            "hl": [
              {
                "text": "còn nóng",
                "at": "l4:hot"
              }
            ]
          },
          {
            "id": "h-w",
            "t": "text",
            "text": "Để lâu: bánh nở, nhạt",
            "x": 3996,
            "y": 1435,
            "size": 44,
            "at": "l4:swell",
            "color": "muted"
          },
          {
            "id": "h-c",
            "t": "text",
            "text": "Đũa: bánh, thịt · Thìa: nước",
            "x": 3996,
            "y": 1520,
            "size": 44,
            "at": "l5:Chopsticks"
          },
          {
            "id": "h-f",
            "t": "text",
            "text": "Chưa quen đũa → xin dĩa",
            "x": 3996,
            "y": 1600,
            "size": 46,
            "at": "l6:fork",
            "hl": [
              {
                "text": "xin dĩa",
                "at": "l6:fork"
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
          "say": "Sixth stop: week four. Thảo takes a long phone call. The pho waits. And waits.",
          "sub": "Chặng sáu: tuần thứ tư. Thảo mải nghe điện thoại. Bát phở chờ. Và chờ.",
          "keys": [
            "Bát phở chờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Thảo, your noodles are getting fat!",
          "sub": "Thảo ơi, bánh phở của bạn đang béo ra kìa!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Oh no. Pho waits for no one.",
          "sub": "Thôi chết. Phở đâu có chờ ai.",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Eat while it's hot. Left too long, the noodles swell and taste bland.",
          "sub": "Ăn ngay khi còn nóng. Để lâu, bánh phở nở ra và nhạt đi.",
          "keys": [
            "Ăn ngay khi còn nóng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Chopsticks for noodles and meat, the spoon for broth.",
          "sub": "Đũa gắp bánh và thịt, thìa để húp nước."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Guest not ready for chopsticks? Just ask the shop for a fork.",
          "sub": "Khách chưa quen đũa? Cứ xin quán một cái dĩa.",
          "keys": [
            "xin quán một cái dĩa"
          ]
        }
      ],
      "ref": "p29"
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
          },
          {
            "at": "l1",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
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
            "text": "⑦ Chủ nhật · Mang theo",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:list"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "mobile-phone",
                "steaming-bowl"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối Chủ nhật · ghi vào điện thoại",
            "icon": "mobile-phone"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 50,
            "h": 50,
            "at": "l2:north",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1252,
            "size": 62,
            "at": "l2:north+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Gốc gác: Bắc, đầu TK 20",
            "x": 6039,
            "y": 1262,
            "size": 42,
            "at": "l2:north+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1365,
            "w": 50,
            "h": 50,
            "at": "l2:first",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1347,
            "size": 62,
            "at": "l2:first+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Khách lần đầu: tái chín",
            "x": 6039,
            "y": 1357,
            "size": 42,
            "at": "l2:first+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1460,
            "w": 50,
            "h": 50,
            "at": "l3:Taste",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1442,
            "size": 62,
            "at": "l3:Taste+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Nếm trước, tương chấm riêng",
            "x": 6039,
            "y": 1452,
            "size": 42,
            "at": "l3:Taste+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1555,
            "w": 50,
            "h": 50,
            "at": "l3:herbs",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1537,
            "size": 62,
            "at": "l3:herbs+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Thêm rau, quẩy ăn chung",
            "x": 6039,
            "y": 1547,
            "size": 42,
            "at": "l3:herbs+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1650,
            "w": 50,
            "h": 50,
            "at": "l4:salt",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 1632,
            "size": 62,
            "at": "l4:salt+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Ăn nhạt: để lại nước",
            "x": 6039,
            "y": 1642,
            "size": 42,
            "at": "l4:salt+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "My pho list, before Monday.",
          "sub": "Danh sách phở của mình, trước sáng thứ Hai.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One line of history: the north, early twentieth century. Tai chin for first timers.",
          "sub": "Một câu gốc gác: miền Bắc, đầu thế kỷ 20. Khách lần đầu gọi tái chín.",
          "keys": [
            "Một câu gốc gác"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Taste the broth first, sauces on the side, extra herbs, one shared plate of quay.",
          "sub": "Nếm nước trước, tương chấm riêng, thêm đĩa rau, quẩy một đĩa ăn chung."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Anyone eating less salt leaves some broth.",
          "sub": "Ai cần ăn nhạt thì để lại một phần nước."
        }
      ],
      "ref": "p28"
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
            "text": "6:30 sáng T2 · cuối tháng",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:shop"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
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
                  "id": "sam",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "steaming-bowl",
                "six-oclock"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1:six",
            "caption": "6:30 sáng thứ Hai · vẫn quán ấy",
            "icon": "steaming-bowl"
          },
          {
            "id": "j-old",
            "t": "text",
            "text": "“From Hanoi, I think?”",
            "x": 7932,
            "y": 1270,
            "size": 46,
            "at": "l2:Where",
            "color": "muted"
          },
          {
            "id": "j-oldx",
            "t": "strike",
            "over": "j-old",
            "at": "l3:north"
          },
          {
            "id": "j-new",
            "t": "text",
            "text": "Bắc · đầu thế kỷ 20",
            "x": 7932,
            "y": 1360,
            "size": 52,
            "at": "l3:north",
            "color": "accent",
            "hl": [
              {
                "text": "đầu thế kỷ 20",
                "at": "l3:twentieth"
              }
            ]
          },
          {
            "id": "j-so",
            "t": "text",
            "text": "Hồn ở nồi nước dùng",
            "x": 7932,
            "y": 1440,
            "size": 52,
            "at": "l3:soul",
            "color": "accent",
            "hl": [
              {
                "text": "nồi nước dùng",
                "at": "l3:broth"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Phở không rau…",
            "x": 7932,
            "y": 1560,
            "size": 50,
            "at": "l5:greens",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "… không chuyện thì nhạt”",
            "x": 7972,
            "y": 1635,
            "size": 50,
            "at": "l5:story",
            "color": "coral",
            "hl": [
              {
                "text": "không chuyện",
                "at": "l5:story"
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
          "say": "End of the month. Same shop, six thirty, same Sam.",
          "sub": "Cuối tháng. Vẫn quán ấy, sáu rưỡi sáng, vẫn Sam ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "So, one more time. Where does pho come from?",
          "sub": "Hỏi lại lần nữa nhé. Phở từ đâu ra?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "From the north, around the early twentieth century. Its soul is the broth, simmered from bones for hours.",
          "sub": "Từ miền Bắc, khoảng đầu thế kỷ 20. Cái hồn nằm ở nồi nước dùng ninh xương nhiều giờ.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Then let's eat, before the noodles get fat.",
          "sub": "Vậy ăn thôi, kẻo bánh phở béo ra.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rice without greens, illness without medicine. And pho without a story? Just soup.",
          "sub": "“Cơm không rau như đau không thuốc.” Còn phở không chuyện để kể? Chỉ là nước lèo.",
          "keys": [
            "phở không chuyện để kể"
          ]
        }
      ],
      "ref": "p30,outro"
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
            "at": "l1:north",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:soul",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3:Taste",
            "fit": "E",
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
            "x": 2728,
            "y": 180,
            "at": "l1:north"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 4696,
            "y": 180,
            "at": "l2:soul"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8632,
            "y": 560,
            "at": "l3:Taste"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "e-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:after"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo chung; cần ăn nhạt vì bệnh, hỏi bác sĩ.",
            "x": 7932,
            "y": 1810,
            "size": 30,
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
          "say": "So: pho formed in the north, around the early twentieth century. The first cook? Add maybe.",
          "sub": "Tóm lại: phở hình thành ở miền Bắc, khoảng đầu thế kỷ 20. Người nấu đầu tiên? Thêm “có lẽ”.",
          "keys": [
            "miền Bắc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The soul is the broth, and so is most of the salt.",
          "sub": "Hồn phở ở nước dùng, mà phần lớn muối cũng ở đó.",
          "keys": [
            "Hồn phở ở nước dùng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Taste first, season after, and keep the greens.",
          "sub": "Nếm trước, nêm sau, và đừng bỏ rau.",
          "keys": [
            "Nếm trước, nêm sau"
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
      "ref": "questions[14]",
      "data": {
        "q": "What should you do first when a bowl of pho is put in front of you?",
        "options": [
          "Taste a spoon of the broth before adding anything, then decide what it needs",
          "Pour in sauces and fish sauce right away, because every shop makes bland broth",
          "Add lots of chili at once so the soup is ready when it cools"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "spoon",
        "why": "Nếm trước là tôn trọng người nấu, và biết bát phở cần thêm gì."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What should you do first when a bowl of pho is put in front of you?",
          "sub": "Khi bát phở được đặt trước mặt, việc đầu tiên nên làm là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Taste a spoon of the broth before adding anything, then decide what it needs.",
          "sub": "Nếm một thìa nước dùng trước, rồi mới quyết định cần thêm gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "It respects the cook. Often, the broth needs nothing at all.",
          "sub": "Vừa tôn trọng người nấu, mà nhiều khi chẳng cần thêm gì."
        }
      ]
    },
    {
      "id": "s32",
      "module": "END-05",
      "data": {
        "text": "Lần tới ăn phở: kể một câu, nếm một thìa",
        "sub": "Rồi làm bốn mươi câu bên dưới · bài sau: Bánh mì"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Forty questions are waiting below. Enjoy!",
          "sub": "Bốn mươi câu hỏi đang chờ bên dưới. Chúc ngon miệng!"
        }
      ],
      "ref": "outro"
    }
  ],
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
