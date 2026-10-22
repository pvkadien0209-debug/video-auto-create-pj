// marketing-plan-for-new-marketers--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "marketing-plan-for-new-marketers--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "junior-marketers",
    "slug": "marketing-plan-for-new-marketers",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Người mới làm marketing: một bản kế hoạch cần những gì?",
    "series": "Marketing có số liệu — lên kế hoạch và đo hiệu quả cho người mới"
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
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "bar-chart"
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
                  "on": "lan",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Chiều thứ Sáu · cuối tháng 1",
            "icon": "bar-chart"
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "“Ra bao nhiêu…?”",
            "x": 60,
            "y": 150,
            "size": 80,
            "at": "l3:many",
            "color": "coral",
            "hl": [
              {
                "text": "bao nhiêu",
                "at": "l4:Hold"
              }
            ]
          },
          {
            "id": "a-v1",
            "t": "text",
            "text": "Lượt xem: có",
            "x": 60,
            "y": 300,
            "size": 52,
            "at": "l4:pile"
          },
          {
            "id": "a-v2",
            "t": "text",
            "text": "Lượt thích: có",
            "x": 60,
            "y": 380,
            "size": 52,
            "at": "l4:numbers"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Chữ cuối: ???",
            "x": 60,
            "y": 480,
            "size": 60,
            "at": "l4:not that one",
            "color": "accent",
            "hl": [
              {
                "text": "???",
                "at": "l4:not that one"
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
          "say": "Friday afternoon, end of January. Meet Lan, a new marketer at a small cosmetics brand.",
          "sub": "Chiều thứ Sáu cuối tháng Một. Đây là Lan, nhân viên marketing mới của một hãng mỹ phẩm nhỏ.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Chị Thảo, her team leader, with one question.",
          "sub": "Còn đây là chị Thảo, trưởng nhóm của Lan, mang theo một câu hỏi.",
          "keys": [
            "chị Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Lan, this month's campaign. How many did it bring in...",
          "sub": "Lan này, chiến dịch tháng này ra được bao nhiêu...",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Cut! Hold that last word. Lan has a pile of numbers, but not that one.",
          "sub": "Cắt! Giữ lại chữ cuối ấy. Lan có cả đống con số, trừ đúng con số đó.",
          "keys": [
            "trừ đúng con số đó"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 500
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
            "at": 150,
            "fit": "B",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "b-q",
            "t": "text",
            "text": "Kế hoạch cần những gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:actually need",
            "hl": [
              {
                "text": "những gì",
                "at": "l1:need"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Đăng trend trước",
            "x": 2028,
            "y": 160,
            "size": 54,
            "at": "l2:trending",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:But"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Định cách đo trước",
            "x": 2028,
            "y": 250,
            "size": 58,
            "at": "l2:measuring",
            "color": "accent",
            "hl": [
              {
                "text": "cách đo",
                "at": "l2:measuring"
              }
            ]
          },
          {
            "id": "b-ca",
            "t": "text",
            "text": "“Liệu cơm gắp mắm”",
            "x": 2028,
            "y": 360,
            "size": 56,
            "at": "l3:rice",
            "color": "accent",
            "hl": [
              {
                "text": "Liệu cơm",
                "at": "l3:check the rice"
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
          "say": "So what does a first marketing plan actually need?",
          "sub": "Vậy một bản kế hoạch marketing đầu tiên thật ra cần những gì?",
          "keys": [
            "cần những gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a trending video first. But deciding the measuring first.",
          "sub": "Không phải video theo trend trước, mà là định cách đo trước.",
          "keys": [
            "định cách đo trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: check the rice before you pick the side dish.",
          "sub": "Ông bà dặn: “Liệu cơm gắp mắm.”",
          "keys": [
            "Liệu cơm gắp mắm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Marketing too. Plan first, then spend.",
          "sub": "Marketing cũng vậy. Liệu trước, rồi mới chi."
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
            "fit": "B",
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": [
              "b-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "B",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "b-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "explain"
                }
              ],
              "props": [
                "mobile-phone",
                "chart-increasing"
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
                },
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
            "at": "l1",
            "caption": "Tháng 1 · bàn làm việc của Lan",
            "icon": "mobile-phone"
          },
          {
            "id": "b-eye",
            "t": "illus",
            "name": "eye",
            "x": 2028,
            "y": 470,
            "size": 70,
            "at": "l2:views"
          },
          {
            "id": "b-vw",
            "t": "text",
            "text": "Nhiều lượt xem",
            "x": 2118,
            "y": 478,
            "size": 50,
            "at": "l2:views+200"
          },
          {
            "id": "b-ord",
            "t": "text",
            "text": "Cột đơn hàng: không có",
            "x": 2028,
            "y": 580,
            "size": 52,
            "at": "l5:orders",
            "color": "coral",
            "hl": [
              {
                "text": "không có",
                "at": "l5:Not a single"
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
          "say": "Rewind to early January. Lan saw a video style trending, and copied it at once.",
          "sub": "Tua về đầu tháng Một. Lan thấy một kiểu video đang thịnh, làm theo ngay.",
          "keys": [
            "làm theo ngay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Look, so many views! This trend is magic!",
          "sub": "Nhìn này, bao nhiêu là lượt xem! Trend này thần thật!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then, at month end, the full question.",
          "sub": "Rồi cuối tháng, câu hỏi được nói trọn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Lan, this month's campaign. How many orders did it bring in?",
          "sub": "Lan này, chiến dịch tháng này ra được bao nhiêu đơn?",
          "keys": [
            "bao nhiêu đơn"
          ],
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Lan opens the ads page. Views, likes. Not a single column about orders.",
          "sub": "Lan mở trang quảng cáo. Lượt xem, lượt thích. Không một cột nào nói về đơn hàng.",
          "keys": [
            "Không một cột nào"
          ]
        }
      ],
      "ref": "p4"
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "Kế hoạch = sổ chiến thuật",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l2:plan",
            "hl": [
              {
                "text": "sổ chiến thuật",
                "at": "l3:playbook"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Chưa định đo → chưa đăng",
            "x": 3996,
            "y": 160,
            "size": 52,
            "at": "l1:measure",
            "color": "accent",
            "hl": [
              {
                "text": "chưa đăng",
                "at": "l1:rush"
              }
            ]
          },
          {
            "id": "c-ball",
            "t": "illus",
            "name": "soccer-ball",
            "x": 3996,
            "y": 270,
            "size": 80,
            "at": "l3:football"
          },
          {
            "id": "c-st",
            "t": "text",
            "text": "Chia bước · giao người",
            "x": 4096,
            "y": 280,
            "size": 52,
            "at": "l3:steps"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Khách · thương hiệu · doanh thu",
            "x": 3996,
            "y": 380,
            "size": 44,
            "at": "l4:customers",
            "hl": [
              {
                "text": "doanh thu",
                "at": "l4:revenue"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: OpenStax, Principles of Marketing, mục 2.3",
            "x": 3996,
            "y": 720,
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
          "say": "The lesson: if you haven't decided what to measure, don't rush to post.",
          "sub": "Rút ra: chưa định đo gì thì đừng vội đăng gì.",
          "keys": [
            "chưa định đo gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "OpenStax calls the plan one of a firm's most important planning tools.",
          "sub": "Giáo trình của OpenStax gọi kế hoạch marketing là một trong những công cụ lập kế hoạch quan trọng nhất."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Like a football team's playbook: strategy broken into steps, and everyone knows their job.",
          "sub": "Như cuốn sổ chiến thuật của đội bóng: chiến lược chia thành từng bước, ai cũng biết phần mình.",
          "keys": [
            "sổ chiến thuật"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So the team can reach target customers, build brand awareness, and grow revenue.",
          "sub": "Nhờ vậy cả nhóm tiếp cận được khách mục tiêu, xây nhận biết thương hiệu và tăng doanh thu."
        }
      ],
      "ref": "p1,p5"
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
            "id": "c-many",
            "t": "text",
            "text": "Tóm tắt · sứ mệnh · SWOT…",
            "x": 4836,
            "y": 160,
            "size": 44,
            "at": "l1:summary",
            "color": "muted"
          },
          {
            "id": "c-q0",
            "t": "text",
            "text": "1. Bán cho ai?",
            "x": 4836,
            "y": 250,
            "size": 50,
            "at": "l3:sell"
          },
          {
            "id": "c-q1",
            "t": "text",
            "text": "2. Muốn đạt gì?",
            "x": 4836,
            "y": 340,
            "size": 50,
            "at": "l3:want"
          },
          {
            "id": "c-q2",
            "t": "text",
            "text": "3. Nói gì?",
            "x": 4836,
            "y": 430,
            "size": 50,
            "at": "l3:say"
          },
          {
            "id": "c-q3",
            "t": "text",
            "text": "4. Nói ở đâu?",
            "x": 4836,
            "y": 520,
            "size": 50,
            "at": "l3:where"
          },
          {
            "id": "c-q4",
            "t": "text",
            "text": "5. Tốn bao nhiêu?",
            "x": 5236,
            "y": 250,
            "size": 50,
            "at": "l4:cost"
          },
          {
            "id": "c-q5",
            "t": "text",
            "text": "6. Ai làm, khi nào?",
            "x": 5236,
            "y": 340,
            "size": 50,
            "at": "l4:who"
          },
          {
            "id": "c-q6",
            "t": "text",
            "text": "7. Đo bằng gì?",
            "x": 5236,
            "y": 430,
            "size": 50,
            "at": "l4:measure",
            "color": "accent"
          },
          {
            "id": "c-tape",
            "t": "text",
            "text": "Dán cạnh màn hình",
            "x": 4836,
            "y": 640,
            "size": 48,
            "at": "l5:tapes",
            "color": "coral",
            "hl": [
              {
                "text": "cạnh màn hình",
                "at": "l5:screen"
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
          "say": "The textbook lists many parts: summary, mission, SWOT, progress control.",
          "sub": "Giáo trình liệt kê nhiều phần: tóm tắt, sứ mệnh, phân tích SWOT, kiểm soát tiến độ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For a small campaign, squeeze them into seven questions.",
          "sub": "Với chiến dịch nhỏ, gom lại thành bảy câu hỏi.",
          "keys": [
            "bảy câu hỏi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Who do we sell to? What do we want? What do we say? And where?",
          "sub": "Bán cho ai? Muốn đạt gì? Nói gì? Nói ở đâu?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "How much will it cost? Who does what, and when? And how do we measure it?",
          "sub": "Tốn bao nhiêu? Ai làm, khi nào? Và đo bằng gì?",
          "keys": [
            "đo bằng gì"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Lan tapes them by her screen. First week of February: one a day.",
          "sub": "Lan dán bảy câu cạnh màn hình. Tuần đầu tháng Hai: mỗi ngày một câu.",
          "keys": [
            "mỗi ngày một câu"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "text": "① Thứ Hai · Bán cho ai?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Monday",
            "hl": [
              {
                "text": "Bán cho ai",
                "at": "l1:sell"
              }
            ]
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
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "busts-in-silhouette",
                "lotion-bottle"
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
            "at": "l1",
            "caption": "Thứ Hai · tuần đầu tháng 2",
            "icon": "busts-in-silhouette"
          },
          {
            "id": "d-all",
            "t": "text",
            "text": "“Khách: mọi người”",
            "x": 5964,
            "y": 160,
            "size": 54,
            "at": "l2:everyone",
            "color": "muted"
          },
          {
            "id": "d-allx",
            "t": "strike",
            "over": "d-all",
            "at": "l3:Segmentation"
          },
          {
            "id": "d-seg",
            "t": "text",
            "text": "Phân khúc: cùng nhu cầu",
            "x": 5964,
            "y": 250,
            "size": 54,
            "at": "l3:Segmentation",
            "color": "accent",
            "hl": [
              {
                "text": "Phân khúc",
                "at": "l3:Segmentation"
              }
            ]
          },
          {
            "id": "d-rain",
            "t": "text",
            "text": "Tiền khỏi rải sai người",
            "x": 5964,
            "y": 340,
            "size": 52,
            "at": "l4:raining",
            "hl": [
              {
                "text": "rải sai người",
                "at": "l4:never buy"
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
          "say": "Monday. Question one: who do we sell to?",
          "sub": "Thứ Hai. Câu một: bán cho ai?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Easy. Our customers are... everyone!",
          "sub": "Dễ ạ. Khách của mình là... tất cả mọi người!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Segmentation means splitting the market into smaller groups with similar needs, who react alike.",
          "sub": "Phân khúc là chia thị trường thành những nhóm nhỏ, có nhu cầu giống nhau, dễ phản ứng giống nhau.",
          "keys": [
            "Phân khúc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "With a small budget, the right group stops your money raining on people who'll never buy.",
          "sub": "Ngân sách nhỏ, chọn đúng nhóm thì tiền khỏi rải cho người không bao giờ mua.",
          "keys": [
            "chọn đúng nhóm"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s06",
      "module": "BRK-10",
      "data": {
        "quote": "Bạn không thể là mọi thứ cho mọi người",
        "mark": "mọi thứ cho mọi người",
        "by": "OpenStax, Principles of Marketing",
        "illus": "open-book"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The textbook sums it up in one line: you can't be everything to everyone.",
          "sub": "Giáo trình tóm lại trong một câu: bạn không thể là mọi thứ cho mọi người.",
          "keys": [
            "mọi thứ cho mọi người"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "OpenStax, Principles of Marketing.",
          "sub": "OpenStax, giáo trình Principles of Marketing."
        }
      ],
      "ref": "p6"
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
          }
        ],
        "items": [
          {
            "id": "d-w0",
            "t": "illus",
            "name": "round-pushpin",
            "x": 5964,
            "y": 450,
            "size": 56,
            "at": "l1:live"
          },
          {
            "id": "d-wt0",
            "t": "text",
            "text": "Nơi sống",
            "x": 6044,
            "y": 455,
            "size": 44,
            "at": "l1:live+200"
          },
          {
            "id": "d-w1",
            "t": "illus",
            "name": "busts-in-silhouette",
            "x": 5964,
            "y": 525,
            "size": 56,
            "at": "l1:age"
          },
          {
            "id": "d-wt1",
            "t": "text",
            "text": "Tuổi, thu nhập, nghề",
            "x": 6044,
            "y": 530,
            "size": 44,
            "at": "l1:age+200"
          },
          {
            "id": "d-w2",
            "t": "illus",
            "name": "lotion-bottle",
            "x": 5964,
            "y": 600,
            "size": 56,
            "at": "l2:use"
          },
          {
            "id": "d-wt2",
            "t": "text",
            "text": "Cách dùng sản phẩm",
            "x": 6044,
            "y": 605,
            "size": 44,
            "at": "l2:use+200"
          },
          {
            "id": "d-w3",
            "t": "illus",
            "name": "red-heart",
            "x": 5964,
            "y": 675,
            "size": 56,
            "at": "l2:lifestyle"
          },
          {
            "id": "d-wt3",
            "t": "text",
            "text": "Lối sống, giá trị",
            "x": 6044,
            "y": 680,
            "size": 44,
            "at": "l2:lifestyle+200"
          },
          {
            "id": "d-per",
            "t": "text",
            "text": "Chân dung: 1 trang",
            "x": 6804,
            "y": 690,
            "size": 54,
            "at": "l3:persona",
            "color": "accent",
            "hl": [
              {
                "text": "1 trang",
                "at": "l3:one page"
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
          "say": "Four common ways to split: where they live, and traits like age, income and job.",
          "sub": "Bốn cách chia hay dùng: theo nơi sống, theo đặc điểm như tuổi, thu nhập, nghề nghiệp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "How they use the product, and their lifestyle and values.",
          "sub": "Theo cách khách dùng sản phẩm, và theo lối sống, giá trị."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then write a customer persona: one page about your ideal buyer, their needs and motives.",
          "sub": "Rồi viết chân dung khách hàng: một trang về người mua lý tưởng, nhu cầu và động lực của họ.",
          "keys": [
            "chân dung khách hàng"
          ]
        }
      ],
      "ref": "p7"
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
            "text": "② Thứ Ba · Muốn đạt gì?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Tuesday",
            "hl": [
              {
                "text": "Muốn đạt gì",
                "at": "l1:want"
              }
            ]
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "explain"
                }
              ],
              "props": [
                "memo",
                "chart-increasing"
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
            "caption": "Thứ Ba · viết mục tiêu",
            "icon": "memo"
          },
          {
            "id": "e-sm",
            "t": "text",
            "text": "SMART",
            "x": 7932,
            "y": 150,
            "size": 96,
            "at": "l4:SMART",
            "color": "accent",
            "hl": [
              {
                "text": "SMART",
                "at": "l4:SMART"
              }
            ]
          },
          {
            "id": "e-s1",
            "t": "text",
            "text": "cụ thể · đo được · làm được",
            "x": 7932,
            "y": 290,
            "size": 44,
            "at": "l4:specific"
          },
          {
            "id": "e-s2",
            "t": "text",
            "text": "thực tế · có hạn · có người",
            "x": 7932,
            "y": 360,
            "size": 44,
            "at": "l4:realistic",
            "hl": [
              {
                "text": "có người",
                "at": "l5:responsible"
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
          "say": "Tuesday. Question two: what do we want?",
          "sub": "Thứ Ba. Câu hai: muốn đạt gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Done! Grow revenue through social media.",
          "sub": "Xong! Tăng doanh thu nhờ mạng xã hội.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Sounds lovely. But at month end, how will we know if it worked?",
          "sub": "Nghe hay. Nhưng cuối tháng, lấy gì mà biết đạt hay chưa?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "OpenStax says objectives should be SMART: specific, measurable, actionable, realistic, time-bound.",
          "sub": "OpenStax nói mục tiêu nên đạt chuẩn SMART: cụ thể, đo được, hành động được, thực tế, có thời hạn.",
          "keys": [
            "SMART"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Plus someone responsible. Sales, leads, store visits, conversion rate: all fine, if they stay SMART.",
          "sub": "Kèm người chịu trách nhiệm. Doanh số, khách tiềm năng, lượt đến cửa hàng, tỉ lệ chuyển đổi: đều được, miễn SMART."
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s09",
      "module": "BRK-04",
      "data": {
        "title": "Viết lại mục tiêu",
        "wrong": "Tăng doanh thu nhờ mạng xã hội",
        "right": "Đạt [ ] đơn trước ngày [ ], Lan phụ trách, xem mỗi tuần",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrongIllus": "cloud",
        "rightIllus": "bullseye"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before: grow revenue through social.",
          "sub": "Trước: tăng doanh thu nhờ mạng xã hội."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After: set orders, set date, Lan in charge, weekly check.",
          "sub": "Sau: [ ] đơn, trước ngày [ ], Lan phụ trách, xem mỗi tuần.",
          "keys": [
            "Lan phụ trách"
          ]
        }
      ],
      "ref": "p9"
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
            "id": "e-k",
            "t": "text",
            "text": "Không số → không câu trả lời",
            "x": 7932,
            "y": 460,
            "size": 46,
            "at": "l2:without",
            "color": "accent",
            "hl": [
              {
                "text": "không câu trả lời",
                "at": "l2:no answer"
              }
            ]
          },
          {
            "id": "e-van",
            "t": "text",
            "text": "Chỉ số phù phiếm:",
            "x": 7932,
            "y": 560,
            "size": 52,
            "at": "l4:vanity",
            "color": "coral",
            "hl": [
              {
                "text": "phù phiếm",
                "at": "l4:vanity"
              }
            ]
          },
          {
            "id": "e-van2",
            "t": "text",
            "text": "xem · theo dõi · thích",
            "x": 7932,
            "y": 640,
            "size": 44,
            "at": "l3:Views",
            "color": "muted"
          },
          {
            "id": "e-fl",
            "t": "text",
            "text": "Hoa đẹp, không ra quả",
            "x": 8772,
            "y": 690,
            "size": 50,
            "at": "l4:flowers",
            "hl": [
              {
                "text": "không ra quả",
                "at": "l4:no fruit"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: OpenStax 2.3 · HubSpot, Vanity Metrics",
            "x": 7932,
            "y": 720,
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
          "say": "The first can't show success. The second has a number, a deadline, an owner.",
          "sub": "Câu trước không cho biết thế nào là đạt. Câu sau có số, có hạn, có người phụ trách.",
          "keys": [
            "có số, có hạn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A goal without a number leaves the report with no answer.",
          "sub": "Mục tiêu không có số thì báo cáo không có câu trả lời.",
          "keys": [
            "không có câu trả lời"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Pick metrics with care too. Views, followers and likes look pretty.",
          "sub": "Chỉ số cũng phải chọn kỹ. Lượt xem, lượt theo dõi, lượt thích trông đẹp."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "HubSpot calls them vanity metrics when they don't show real results. Pretty flowers, no fruit.",
          "sub": "HubSpot gọi đó là chỉ số phù phiếm khi chúng không nói được hiệu quả thật. Hoa đẹp mà không ra quả.",
          "keys": [
            "chỉ số phù phiếm"
          ]
        }
      ],
      "ref": "p9,p10,p11"
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
            "text": "③ Thứ Tư · Nói gì, ở đâu?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Wednesday",
            "hl": [
              {
                "text": "Nói gì",
                "at": "l1:say"
              }
            ]
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
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "speech-balloon",
                "lotion-bottle"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Tư · một câu thông điệp",
            "icon": "speech-balloon"
          },
          {
            "id": "f-msg",
            "t": "text",
            "text": "Vì sao chọn mình?",
            "x": 60,
            "y": 1250,
            "size": 56,
            "at": "l2:why choose",
            "color": "accent",
            "hl": [
              {
                "text": "chọn mình",
                "at": "l2:choose us"
              }
            ]
          },
          {
            "id": "f-pos",
            "t": "text",
            "text": "= định vị",
            "x": 60,
            "y": 1340,
            "size": 52,
            "at": "l2:positioning"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Viết trong 1 câu",
            "x": 60,
            "y": 1430,
            "size": 54,
            "at": "l3:one clear sentence",
            "hl": [
              {
                "text": "1 câu",
                "at": "l3:one clear sentence"
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
          "say": "Wednesday. Questions three and four: what do we say, and where?",
          "sub": "Thứ Tư. Câu ba và bốn: nói gì, nói ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The message answers: why choose us, not a rival? That's positioning.",
          "sub": "Thông điệp trả lời: vì sao khách chọn mình mà không chọn đối thủ. Đó là định vị.",
          "keys": [
            "định vị"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Write it in one clear sentence, before you even think of videos or posts.",
          "sub": "Viết gọn trong một câu rõ ràng, trước khi nghĩ tới video hay bài đăng.",
          "keys": [
            "một câu rõ ràng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "One sentence... why us? That's harder than shooting ten videos!",
          "sub": "Một câu thôi... vì sao chọn mình? Khó hơn quay mười video!",
          "face": "thinking"
        }
      ],
      "ref": "p12"
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
            "id": "f-b0",
            "t": "box",
            "x": 60,
            "y": 1540,
            "w": 250,
            "h": 150,
            "at": "l1:Paid",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-i0",
            "t": "illus",
            "name": "money-bag",
            "x": 145,
            "y": 1555,
            "size": 70,
            "at": "l1:Paid+200"
          },
          {
            "id": "f-bt0",
            "t": "text",
            "text": "Trả tiền",
            "x": 85,
            "y": 1630,
            "size": 44,
            "at": "l1:Paid+300"
          },
          {
            "id": "f-b1",
            "t": "box",
            "x": 330,
            "y": 1540,
            "w": 250,
            "h": 150,
            "at": "l2:Owned",
            "stroke": 4,
            "color": "accent"
          },
          {
            "id": "f-i1",
            "t": "illus",
            "name": "house",
            "x": 415,
            "y": 1555,
            "size": 70,
            "at": "l2:Owned+200"
          },
          {
            "id": "f-bt1",
            "t": "text",
            "text": "Sở hữu",
            "x": 355,
            "y": 1630,
            "size": 44,
            "at": "l2:Owned+300"
          },
          {
            "id": "f-b2",
            "t": "box",
            "x": 600,
            "y": 1540,
            "w": 250,
            "h": 150,
            "at": "l3:Earned",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "f-i2",
            "t": "illus",
            "name": "megaphone",
            "x": 685,
            "y": 1555,
            "size": 70,
            "at": "l3:Earned+200"
          },
          {
            "id": "f-bt2",
            "t": "text",
            "text": "Lan truyền",
            "x": 625,
            "y": 1630,
            "size": 44,
            "at": "l3:Earned+300"
          },
          {
            "id": "f-dep",
            "t": "text",
            "text": "Quảng cáo cần nội dung hay",
            "x": 900,
            "y": 1780,
            "size": 46,
            "at": "l4:lean",
            "hl": [
              {
                "text": "nội dung hay",
                "at": "l4:good"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: Meltwater, Owned, Earned, Paid & Shared Media",
            "x": 60,
            "y": 1810,
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
          "say": "Channels come in three groups. Paid: ads on someone else's platform.",
          "sub": "Kênh chia ba nhóm. Kênh trả tiền: quảng cáo trên nền tảng của người khác.",
          "keys": [
            "Kênh trả tiền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Owned: your website, newsletter, and your own social accounts.",
          "sub": "Kênh sở hữu: trang web, bản tin, tài khoản mạng xã hội của chính mình.",
          "keys": [
            "Kênh sở hữu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Earned: what others say about you. Reviews, press, posts by customers.",
          "sub": "Kênh lan truyền: điều người khác nói về mình. Đánh giá, bài báo, nội dung khách tự đăng.",
          "keys": [
            "Kênh lan truyền"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Meltwater says they lean on each other: ads only run well when owned content is good.",
          "sub": "Theo Meltwater, ba nhóm dựa vào nhau: quảng cáo chỉ chạy tốt khi nội dung sở hữu đủ hay."
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Một video mới, ngân sách có hạn: dồn hết tiền chạy luôn?",
        "illus": "money-with-wings"
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
          "say": "One new video, a tight budget. Pour all the money in right away?",
          "sub": "Một video mới, ngân sách có hạn. Dồn hết tiền chạy luôn?",
          "keys": [
            "Dồn hết tiền"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p14"
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
            "text": "④ Thứ Năm · Thử trước, trả sau",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Thursday",
            "hl": [
              {
                "text": "Thử trước",
                "at": "l5:promote"
              }
            ]
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
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
                "mobile-phone",
                "money-with-wings"
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
                },
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
            "at": "l1",
            "caption": "Thứ Năm · ngân sách tháng 2",
            "icon": "money-with-wings"
          },
          {
            "id": "g-a",
            "t": "text",
            "text": "A: dồn hết, chưa thử",
            "x": 2028,
            "y": 1250,
            "size": 52,
            "at": "l2:Way A",
            "color": "coral"
          },
          {
            "id": "g-ax",
            "t": "strike",
            "over": "g-a",
            "at": "l3:gone"
          },
          {
            "id": "g-a2",
            "t": "text",
            "text": "→ ít người xem hết",
            "x": 2068,
            "y": 1330,
            "size": 44,
            "at": "l3:Few",
            "color": "muted"
          },
          {
            "id": "g-b",
            "t": "text",
            "text": "B: thử trang mình",
            "x": 2028,
            "y": 1420,
            "size": 52,
            "at": "l4:Way B",
            "color": "accent"
          },
          {
            "id": "g-b2",
            "t": "text",
            "text": "→ chọn video tốt nhất",
            "x": 2068,
            "y": 1500,
            "size": 44,
            "at": "l4:Pick",
            "hl": [
              {
                "text": "tốt nhất",
                "at": "l4:longest"
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
          "say": "Thursday. Two ways to spend February's budget.",
          "sub": "Thứ Năm. Hai cách tiêu ngân sách tháng Hai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Way A: put everything behind my new video. It'll surely fly!",
          "sub": "Cách A: dồn hết tiền cho video mới quay. Chắc chắn bay!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nobody knows if customers like it. Few watch to the end, and the money is gone.",
          "sub": "Chưa biết khách có thích không. Ít người xem hết, tiền thì đã tiêu.",
          "keys": [
            "tiền thì đã tiêu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Way B: post a few on our page first. Pick the one watched longest, with most comments.",
          "sub": "Cách B: đăng vài video trên trang mình trước. Chọn video được xem lâu, nhiều bình luận nhất.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then pay to promote that one.",
          "sub": "Rồi mới bỏ tiền quảng cáo cho video đó.",
          "keys": [
            "Rồi mới bỏ tiền"
          ]
        }
      ],
      "ref": "p14"
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
          }
        ],
        "items": [
          {
            "id": "g-k",
            "t": "text",
            "text": "Kênh mình trước, kênh người sau",
            "x": 2028,
            "y": 1590,
            "size": 46,
            "at": "l1:own channel",
            "color": "accent",
            "hl": [
              {
                "text": "Kênh mình trước",
                "at": "l1:own channel"
              }
            ]
          },
          {
            "id": "g-tt",
            "t": "illus",
            "name": "mobile-phone",
            "x": 2028,
            "y": 1670,
            "size": 70,
            "at": "l2:vertical"
          },
          {
            "id": "g-tt1",
            "t": "text",
            "text": "Video dọc",
            "x": 2118,
            "y": 1680,
            "size": 46,
            "at": "l2:vertical+200"
          },
          {
            "id": "g-tt2",
            "t": "text",
            "text": "Ý chính: vài giây đầu",
            "x": 2868,
            "y": 1780,
            "size": 46,
            "at": "l3:first seconds",
            "hl": [
              {
                "text": "vài giây đầu",
                "at": "l3:first seconds"
              }
            ]
          },
          {
            "id": "g-tt3",
            "t": "text",
            "text": "Kết: kêu gọi rõ",
            "x": 2388,
            "y": 1680,
            "size": 44,
            "at": "l3:call to action"
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: TikTok Ads Help Center, Creative best practices",
            "x": 2028,
            "y": 1810,
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
          "say": "Test on your own channel, then pay for other people's.",
          "sub": "Thử trên kênh mình, rồi mới trả tiền cho kênh người.",
          "keys": [
            "Thử trên kênh mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And each channel has its own style. TikTok advises vertical video.",
          "sub": "Mỗi kênh có cách làm riêng. TikTok khuyên dùng video dọc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The main message in the first seconds, and a clear call to action at the end.",
          "sub": "Thông điệp chính trong vài giây đầu, và kết bằng lời kêu gọi hành động rõ ràng.",
          "keys": [
            "vài giây đầu"
          ]
        }
      ],
      "ref": "p15,p16"
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
            "at": "l4",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑤ Thứ Sáu · Tiền và lịch",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Friday",
            "hl": [
              {
                "text": "Tiền và lịch",
                "at": "l1:cost"
              }
            ]
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "point",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar"
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
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l5:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l4",
            "caption": "Thứ Sáu · họp nhóm",
            "icon": "spiral-calendar"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1260,
            "w": 185,
            "h": 90,
            "at": "l2:what",
            "stroke": 4
          },
          {
            "id": "h-ct0",
            "t": "text",
            "text": "Việc",
            "x": 4011,
            "y": 1280,
            "size": 40,
            "at": "l2:what+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 4196,
            "y": 1260,
            "w": 185,
            "h": 90,
            "at": "l2:when",
            "stroke": 4
          },
          {
            "id": "h-ct1",
            "t": "text",
            "text": "Khi nào",
            "x": 4211,
            "y": 1280,
            "size": 40,
            "at": "l2:when+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 4396,
            "y": 1260,
            "w": 185,
            "h": 90,
            "at": "l2:who",
            "stroke": 4
          },
          {
            "id": "h-ct2",
            "t": "text",
            "text": "Ai",
            "x": 4411,
            "y": 1280,
            "size": 40,
            "at": "l2:who+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 4596,
            "y": 1260,
            "w": 185,
            "h": 90,
            "at": "l2:how much",
            "stroke": 4
          },
          {
            "id": "h-ct3",
            "t": "text",
            "text": "Bao nhiêu",
            "x": 4611,
            "y": 1280,
            "size": 40,
            "at": "l2:how much+200"
          },
          {
            "id": "h-dt",
            "t": "text",
            "text": "Bắt đầu · xem lại · kết thúc",
            "x": 3996,
            "y": 1390,
            "size": 44,
            "at": "l3:start"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Bảng 4 cột là đủ",
            "x": 3996,
            "y": 1470,
            "size": 54,
            "at": "l3:four-column",
            "color": "accent",
            "hl": [
              {
                "text": "4 cột",
                "at": "l3:four-column"
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
          "say": "Friday. Questions five and six: the cost, and who does what, when?",
          "sub": "Thứ Sáu. Câu năm và sáu: tốn bao nhiêu, ai làm gì, khi nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "OpenStax wants an action programme: what, when, who, and how much.",
          "sub": "OpenStax yêu cầu chương trình hành động ghi rõ: việc gì, khi nào, ai làm, tốn bao nhiêu.",
          "keys": [
            "chương trình hành động"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Plus dates to start, review and finish. A simple four-column sheet is enough.",
          "sub": "Kèm mốc bắt đầu, xem lại, kết thúc. Một bảng tính bốn cột là đủ.",
          "keys": [
            "bốn cột"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "So next week, who posts the videos?",
          "sub": "Vậy tuần sau ai đăng video?",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "It's in the table. Me, on Tuesday and Thursday.",
          "sub": "Có trong bảng ạ. Em, thứ Ba và thứ Năm.",
          "face": "happy",
          "pose": "point"
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
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-pl",
            "t": "text",
            "text": "Ngân sách = dự tính lãi lỗ",
            "x": 3996,
            "y": 1560,
            "size": 46,
            "at": "l1:profit",
            "hl": [
              {
                "text": "lãi lỗ",
                "at": "l1:profit and loss"
              }
            ]
          },
          {
            "id": "h-rv",
            "t": "text",
            "text": "Thu: số bán × giá",
            "x": 3996,
            "y": 1635,
            "size": 44,
            "at": "l2:revenue"
          },
          {
            "id": "h-cs",
            "t": "text",
            "text": "Chi: làm, chở, marketing",
            "x": 3996,
            "y": 1700,
            "size": 44,
            "at": "l2:Costs",
            "color": "muted"
          },
          {
            "id": "h-sc",
            "t": "illus",
            "name": "balance-scale",
            "x": 4836,
            "y": 1770,
            "size": 70,
            "at": "l3:beside"
          },
          {
            "id": "h-ad",
            "t": "text",
            "text": "1 đồng quảng cáo ⇄ doanh thu",
            "x": 4926,
            "y": 1780,
            "size": 42,
            "at": "l3:beside",
            "color": "accent",
            "hl": [
              {
                "text": "doanh thu",
                "at": "l3:revenue"
              }
            ]
          },
          {
            "id": "h-ca",
            "t": "text",
            "text": "“Liệu cơm gắp mắm”",
            "x": 3996,
            "y": 1780,
            "size": 50,
            "at": "l4:rice",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The textbook builds the budget like a projected profit and loss statement.",
          "sub": "Giáo trình lập ngân sách như một bản dự tính lãi lỗ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Expected revenue from units sold and price. Costs: production, shipping, marketing.",
          "sub": "Doanh thu dự kiến từ số sản phẩm bán và giá bán. Chi phí: sản xuất, vận chuyển, marketing."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A beginner needn't do it all. Just set every ad dollar beside the revenue it should bring.",
          "sub": "Người mới chưa cần làm đủ. Chỉ cần đặt mỗi đồng quảng cáo cạnh doanh thu nó dự kiến mang về.",
          "keys": [
            "mỗi đồng quảng cáo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Check the rice before picking the side dish, remember?",
          "sub": "Liệu cơm gắp mắm, nhớ chứ?",
          "keys": [
            "Liệu cơm gắp mắm"
          ]
        }
      ],
      "ref": "p18"
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
            "text": "⑥ Giữa tháng · Đo bằng gì?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Mid-February",
            "hl": [
              {
                "text": "Đo bằng gì",
                "at": "l1:measure"
              }
            ]
          },
          {
            "id": "i-kpi",
            "t": "text",
            "text": "KPI = mục tiêu + đích + hạn",
            "x": 5964,
            "y": 1250,
            "size": 50,
            "at": "l2:KPI",
            "color": "accent",
            "hl": [
              {
                "text": "KPI",
                "at": "l2:KPI"
              }
            ]
          },
          {
            "id": "i-b0",
            "t": "box",
            "x": 5964,
            "y": 1350,
            "w": 250,
            "h": 100,
            "at": "l3:goal",
            "stroke": 4
          },
          {
            "id": "i-bt0",
            "t": "text",
            "text": "so mục tiêu",
            "x": 5984,
            "y": 1375,
            "size": 40,
            "at": "l3:goal+200"
          },
          {
            "id": "i-b1",
            "t": "box",
            "x": 6234,
            "y": 1350,
            "w": 250,
            "h": 100,
            "at": "l3:last period",
            "stroke": 4
          },
          {
            "id": "i-bt1",
            "t": "text",
            "text": "so kỳ trước",
            "x": 6254,
            "y": 1375,
            "size": 40,
            "at": "l3:last period+200"
          },
          {
            "id": "i-b2",
            "t": "box",
            "x": 6504,
            "y": 1350,
            "w": 250,
            "h": 100,
            "at": "l3:industry",
            "stroke": 4
          },
          {
            "id": "i-bt2",
            "t": "text",
            "text": "so mức ngành",
            "x": 6524,
            "y": 1375,
            "size": 40,
            "at": "l3:industry+200"
          },
          {
            "id": "i-lone",
            "t": "text",
            "text": "1 con số đứng riêng: nói ít",
            "x": 5964,
            "y": 1490,
            "size": 46,
            "at": "l3:lone",
            "color": "muted"
          },
          {
            "id": "i-root",
            "t": "text",
            "text": "Lệch → tìm nguyên nhân gốc",
            "x": 5964,
            "y": 1570,
            "size": 50,
            "at": "l4:root",
            "color": "coral",
            "hl": [
              {
                "text": "nguyên nhân gốc",
                "at": "l4:root cause"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: OpenStax, mục 2.4 Marketing Plan Progress Using Metrics",
            "x": 5964,
            "y": 1810,
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
          "say": "Mid-February. The last question: how do we measure?",
          "sub": "Giữa tháng Hai. Câu cuối: đo bằng gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A KPI is a metric tied to a business goal, with a target and a deadline.",
          "sub": "KPI là chỉ số gắn với mục tiêu kinh doanh, có đích, có hạn.",
          "keys": [
            "KPI"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Compare each number with the goal, the last period, and the industry. A lone number says little.",
          "sub": "So mỗi con số với mục tiêu, kỳ trước và mức chung của ngành. Con số đứng riêng nói được rất ít.",
          "keys": [
            "Con số đứng riêng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Off the expected range? Find the root cause, then adjust.",
          "sub": "Lệch khỏi khoảng mong muốn? Tìm nguyên nhân gốc rồi điều chỉnh.",
          "keys": [
            "nguyên nhân gốc"
          ]
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s19",
      "module": "BRK-06",
      "data": {
        "title": "Các cột báo cáo quảng cáo",
        "items": [
          {
            "illus": "eye",
            "text": "Hiển thị"
          },
          {
            "illus": "computer-mouse",
            "text": "Lượt nhấp"
          },
          {
            "illus": "bar-chart",
            "text": "Tỉ lệ nhấp"
          },
          {
            "illus": "shopping-cart",
            "text": "Chuyển đổi"
          },
          {
            "illus": "money-bag",
            "text": "Giá / chuyển đổi"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Impressions, clicks, click rate, conversions, cost per conversion.",
          "sub": "Lượt hiển thị, lượt nhấp, tỉ lệ nhấp, chuyển đổi, chi phí mỗi chuyển đổi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The columns of an ad report. A later video reads them one by one.",
          "sub": "Đó là các cột của báo cáo quảng cáo. Một bài sau sẽ đọc từng cột.",
          "keys": [
            "các cột của báo cáo quảng cáo"
          ]
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s20",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Cuối tháng 2 · nháp báo cáo",
        "actors": [
          {
            "id": "lan",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“Lượt xem tăng → thành công!”",
          "why": "Mục tiêu là đơn hàng; đơn đứng yên thì lượt xem chỉ là chỉ số phụ.",
          "rule": "Báo cáo theo mục tiêu, không chọn số đẹp"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Views are up from last month! I'll tell Chị Thảo the campaign was a success.",
          "sub": "Lượt xem tăng so với tháng trước! Em sẽ báo chị Thảo là chiến dịch thành công.",
          "face": "happy",
          "pose": "thumb",
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
          "say": "Orders were the goal, and they stayed flat. Views are just a side number.",
          "sub": "Mục tiêu là đơn hàng, mà đơn đứng yên. Lượt xem chỉ là chỉ số phụ.",
          "keys": [
            "chỉ số phụ"
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
          "who": "lan",
          "say": "Orders against the goal. What we learned. What to test next.",
          "sub": "Số đơn so với mục tiêu. Điều học được. Và đề xuất thử tiếp.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Report against the goal, don't cherry-pick pretty numbers.",
          "sub": "Đúng. Báo cáo theo mục tiêu, không chọn con số đẹp.",
          "phase": "redo",
          "keys": [
            "không chọn con số đẹp"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p22"
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
            "at": "l4:end",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Cuối tháng 2 · Kể cho sếp",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:end of February"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "point",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "props": [
                "bar-chart"
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
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4:end",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Chiều thứ Sáu · cuối tháng 2",
            "icon": "bar-chart"
          },
          {
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l4:goal",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 1246,
            "size": 56,
            "at": "l4:goal+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "So với mục tiêu",
            "x": 7998,
            "y": 1250,
            "size": 46,
            "at": "l4:goal+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1340,
            "w": 44,
            "h": 44,
            "at": "l4:lessons",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 1326,
            "size": 56,
            "at": "l4:lessons+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Bài học rút ra",
            "x": 7998,
            "y": 1330,
            "size": 46,
            "at": "l4:lessons+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1420,
            "w": 44,
            "h": 44,
            "at": "l4:next steps",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 1406,
            "size": 56,
            "at": "l4:next steps+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Đề xuất bước tiếp",
            "x": 7998,
            "y": 1410,
            "size": 46,
            "at": "l4:next steps+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1500,
            "w": 44,
            "h": 44,
            "at": "l4:chart",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7937,
            "y": 1486,
            "size": 56,
            "at": "l4:chart+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "1 biểu đồ đơn giản",
            "x": 7998,
            "y": 1490,
            "size": 46,
            "at": "l4:chart+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Friday afternoon, end of February. Same room, same hour.",
          "sub": "Chiều thứ Sáu cuối tháng Hai. Vẫn phòng ấy, vẫn giờ ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Lan, this month's campaign. How many orders did it bring in?",
          "sub": "Lan này, chiến dịch tháng này ra được bao nhiêu đơn?",
          "keys": [
            "bao nhiêu đơn"
          ],
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Here's the orders column, against our goal. Then what we learned, and what to test next.",
          "sub": "Đây là cột đơn hàng, so với mục tiêu. Rồi điều tụi em học được, và đề xuất thử tiếp.",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Good. Results versus the goal, lessons, next steps, one simple chart. That's a report.",
          "sub": "Tốt. So với mục tiêu, bài học, đề xuất, một biểu đồ đơn giản. Thế mới là báo cáo.",
          "face": "happy"
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s22",
      "module": "BOARD-01",
      "data": {
        "board": "bang-trang",
        "shots": [
          {
            "at": 0,
            "fit": "J",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Liệu cơm… liệu cả số đơn”",
            "x": 7932,
            "y": 1620,
            "size": 50,
            "at": "l1:rice",
            "color": "accent",
            "hl": [
              {
                "text": "số đơn",
                "at": "l1:orders"
              }
            ]
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Theo mục tiêu, không số đẹp",
            "x": 7932,
            "y": 1710,
            "size": 46,
            "at": "l2:goal",
            "hl": [
              {
                "text": "không số đẹp",
                "at": "l2:pretty"
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
          "say": "Check the rice before picking the side dish. This time, Lan checked the orders from day one.",
          "sub": "“Liệu cơm gắp mắm.” Lần này Lan liệu cả số đơn từ đầu.",
          "keys": [
            "liệu cả số đơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Report against the goal, not the pretty numbers.",
          "sub": "Báo cáo theo mục tiêu, không chọn con số đẹp.",
          "keys": [
            "theo mục tiêu"
          ]
        }
      ],
      "ref": "p23"
    },
    {
      "id": "s23",
      "module": "BRK-08",
      "data": {
        "title": "Chuỗi bài, theo thứ tự làm kế hoạch",
        "current": 0,
        "points": [
          {
            "label": "Khách mục tiêu",
            "sub": "Bài 1",
            "illus": "busts-in-silhouette"
          },
          {
            "label": "Mục tiêu, chỉ số",
            "sub": "Bài 2",
            "illus": "bullseye"
          },
          {
            "label": "Kênh, nội dung",
            "sub": "Bài 3",
            "illus": "megaphone"
          },
          {
            "label": "Đọc báo cáo",
            "sub": "Bài 4",
            "illus": "bar-chart"
          },
          {
            "label": "Báo cáo sếp",
            "sub": "Bài 5",
            "illus": "memo"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The series follows the plan in order: target customer, then goals and metrics.",
          "sub": "Chuỗi bài đi đúng thứ tự làm kế hoạch: khách hàng mục tiêu, rồi mục tiêu và chỉ số."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then channels and content, reading reports, and reporting to your boss.",
          "sub": "Rồi kênh và nội dung, đọc báo cáo, và báo cáo cho sếp."
        }
      ],
      "ref": "p24"
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
            "ms": 1200
          },
          {
            "at": "l1",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "G",
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
            "x": 5536,
            "y": 560,
            "at": "l1+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8572,
            "y": 160,
            "at": "l2+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1590,
            "at": "l3+900"
          },
          {
            "id": "z-src",
            "t": "text",
            "text": "Bài để tham khảo; tính năng nền tảng có thể thay đổi, cần thì kiểm lại. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1825,
            "size": 24,
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
          "say": "So: seven questions, and each one must be checkable at month end.",
          "sub": "Tóm lại: bảy câu hỏi, câu nào cũng phải kiểm được cuối kỳ.",
          "keys": [
            "kiểm được cuối kỳ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A goal with a number, a deadline and an owner.",
          "sub": "Mục tiêu có số, có hạn, có người phụ trách."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Test on your own channel first, and report against the goal.",
          "sub": "Thử trên kênh mình trước, và báo cáo theo mục tiêu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next video: defining your target customer.",
          "sub": "Bài sau: xác định khách hàng mục tiêu cho cụ thể."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s25",
      "module": "QUIZ-01",
      "data": {
        "q": "Your post got many likes but no sales, how should you describe the likes?",
        "options": [
          "As a surface signal that does not prove the campaign reached its goal",
          "As clear proof that the campaign has already reached every sales target",
          "As a number that should be hidden from the report completely"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "red-heart",
        "why": "Lượt thích trông đẹp nhưng không chứng minh mục tiêu bán hàng; ghi được, nhưng không thay kết quả chính."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your post got many likes but no sales, how should you describe the likes?",
          "sub": "Bài đăng nhiều lượt thích mà không bán được, bạn nên mô tả lượt thích thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A surface signal. It doesn't prove the goal was reached.",
          "sub": "Chỉ là tín hiệu bề mặt, không chứng minh đã đạt mục tiêu."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Pretty flowers, no fruit.",
          "sub": "Hoa đẹp mà không ra quả."
        }
      ],
      "ref": "questions[18]"
    },
    {
      "id": "s26",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi viết mục tiêu có số, có hạn"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Now, write your next campaign goal as one sentence, with a number and a deadline.",
          "sub": "Giờ, viết mục tiêu chiến dịch sắp tới thành một câu, có số và có hạn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi junior-marketers, bài tổng) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-22 (câu thoại bị cắt): chị Thảo “Chiến dịch tháng này ra được bao nhiêu…” → nói trọn ở s02 (“…bao nhiêu đơn?”). Dòng thời gian: Lan, chiều thứ Sáu cuối tháng 1 → tua về đầu tháng 1 → tuần đầu tháng 2 mỗi ngày một câu (thứ Hai bán cho ai, thứ Ba muốn đạt gì, thứ Tư nói gì/ở đâu, thứ Năm thử trước trả sau, thứ Sáu tiền và lịch) → giữa tháng đo bằng gì → cuối tháng nháp báo cáo “Khoan đã!” (p22) → chiều thứ Sáu cuối tháng 2, cùng câu hỏi, Lan trả lời bằng cột đơn hàng so với mục tiêu. Đổi tên theo w145/_series/junior-marketers.md: Linh → Lan; sếp → chị Thảo. Không bịa số: mục tiêu trước–sau giữ ô [ ] như bài. Ngắt nhịp: BRK-10 s06 (trích OpenStax p6), BRK-04 s09 (trước–sau p9), BRK-07 s13 (rehook p14), BRK-06 s19 (các cột báo cáo p20), DLG-01 s20, BRK-08 s23 (bản đồ chuỗi p24). Tục ngữ: “Liệu cơm gắp mắm” (s01 → khép s22 “liệu cả số đơn”). Lưu ý chung (#133) ở cảnh tóm tắt. Câu đố questions[18].",
  "loop": {
    "open": "s00",
    "close": "s21"
  }
};
