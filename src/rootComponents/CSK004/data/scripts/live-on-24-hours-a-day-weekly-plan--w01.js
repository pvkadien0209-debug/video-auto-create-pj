// Kịch bản video W lần 3 (#110) — "Sống trọn 24 giờ: kế hoạch 7 tiếng rưỡi mỗi tuần cho người đi làm" · chuỗi "Sống trọn 24 giờ — dùng giờ ngoài công sở cho chính mình"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub); nhân vật hoạt hình + thẻ. Đủ ý để làm 40 câu.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "live-on-24-hours-a-day-weekly-plan--w01",
  "unit": {
    "audience": "office-workers-own-time",
    "slug": "live-on-24-hours-a-day-weekly-plan",
    "door": "ky-nang",
    "level": "B1",
    "title": "Sống trọn 24 giờ: kế hoạch 7 tiếng rưỡi mỗi tuần cho người đi làm",
    "series": "Sống trọn 24 giờ — dùng giờ ngoài công sở cho chính mình"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
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
            "id": "a-n",
            "t": "text",
            "text": "7,5 giờ",
            "x": 60,
            "y": 130,
            "size": 200,
            "at": "l1:seven",
            "color": "accent",
            "hl": [
              {
                "text": "7,5 giờ",
                "at": "l1:week"
              }
            ]
          },
          {
            "id": "a-nb",
            "t": "text",
            "text": "mỗi tuần, ngoài giờ làm",
            "x": 70,
            "y": 380,
            "size": 56,
            "at": "l1:busy"
          },
          {
            "id": "a-wait",
            "t": "text",
            "text": "Ta tưởng: phải đổi đời?",
            "x": 70,
            "y": 480,
            "size": 52,
            "at": "l2:new life",
            "color": "muted"
          },
          {
            "id": "a-waitx",
            "t": "strike",
            "over": "a-wait",
            "at": "l2:end"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Arnold Bennett, How to Live on 24 Hours a Day (1908), chương I–VI, XII",
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
          "say": "Seven and a half hours a week. That's all Arnold Bennett asks of a busy office worker.",
          "sub": "Bảy tiếng rưỡi mỗi tuần. Arnold Bennett chỉ xin người đi làm bận rộn chừng ấy.",
          "keys": [
            "Bảy tiếng rưỡi mỗi tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet we think we need a whole new life, or at least a quieter year.",
          "sub": "Vậy mà ta cứ tưởng phải đổi cả cuộc đời, hay ít nhất đợi một năm bớt bận.",
          "keys": [
            "đổi cả cuộc đời"
          ]
        }
      ],
      "ref": "intro,p14"
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
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "enter": "pop",
                  "at": "l1"
                }
              ],
              "props": [
                "spiral-calendar"
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
            "caption": "Chủ nhật, 21:00 · lịch trống",
            "icon": "spiral-calendar"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "“Khi nào đỡ bận…”",
            "x": 920,
            "y": 650,
            "size": 52,
            "at": "l4:less busy",
            "color": "coral",
            "hl": [
              {
                "text": "đỡ bận",
                "at": "l4:never"
              }
            ]
          },
          {
            "id": "a-24",
            "t": "text",
            "text": "→ ngày vẫn 24 giờ",
            "x": 70,
            "y": 560,
            "size": 48,
            "at": "l5:twenty",
            "hl": [
              {
                "text": "24 giờ",
                "at": "l5:twenty four"
              }
            ]
          },
          {
            "id": "a-cd",
            "t": "text",
            "text": "“Năng nhặt chặt bị”",
            "x": 70,
            "y": 640,
            "size": 56,
            "at": "l6:little",
            "color": "accent",
            "hl": [
              {
                "text": "Năng nhặt",
                "at": "l6:little by little"
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
          "say": "Meet Thảo.",
          "sub": "Đây là Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Office worker, owner of a very empty calendar. Sunday, nine p.m.",
          "sub": "Nhân viên văn phòng, chủ một cuốn lịch trống trơn. Chín giờ tối Chủ nhật.",
          "keys": [
            "lịch trống trơn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I want to learn, to read, to exercise. When work gets less busy.",
          "sub": "Mình muốn học, đọc sách, tập thể dục. Khi nào công việc đỡ bận.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "When work gets less busy: the most popular date that never comes.",
          "sub": "“Khi nào đỡ bận”: cái hẹn đông khách nhất mà chẳng bao giờ tới.",
          "keys": [
            "chẳng bao giờ tới"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Bennett calls it an illusion. Next year, a day still has twenty four hours.",
          "sub": "Bennett gọi đó là ảo tưởng. Sang năm, ngày vẫn chỉ có 24 giờ.",
          "keys": [
            "ảo tưởng"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: pick up little by little, and the bag gets full.",
          "sub": "Ông bà dặn: “Năng nhặt chặt bị.”",
          "keys": [
            "Năng nhặt chặt bị"
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
      "ref": "intro,p2"
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
            "text": "7,5 giờ lấy đâu ra?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:come from",
            "hl": [
              {
                "text": "lấy đâu ra",
                "at": "l1:come from"
              }
            ]
          },
          {
            "id": "b-24",
            "t": "text",
            "text": "Sáng nào ai cũng: 24 giờ",
            "x": 2028,
            "y": 160,
            "size": 54,
            "at": "l2:everyone",
            "hl": [
              {
                "text": "24 giờ",
                "at": "l2:twenty four"
              }
            ]
          },
          {
            "id": "b-coin",
            "t": "illus",
            "name": "money-bag",
            "x": 2868,
            "y": 150,
            "size": 90,
            "at": "l2:rich"
          },
          {
            "id": "b-rich",
            "t": "text",
            "text": "Giàu: không mua thêm",
            "x": 2978,
            "y": 150,
            "size": 44,
            "at": "l2:rich"
          },
          {
            "id": "b-poor",
            "t": "text",
            "text": "Nghèo: không bị bớt",
            "x": 2978,
            "y": 215,
            "size": 44,
            "at": "l2:poor"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: có bao nhiêu giờ",
            "x": 2028,
            "y": 270,
            "size": 52,
            "at": "l4:how many",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:truly"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: sống trọn bao nhiêu giờ",
            "x": 2028,
            "y": 360,
            "size": 58,
            "at": "l4:truly",
            "color": "accent",
            "hl": [
              {
                "text": "sống trọn",
                "at": "l4:live"
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
          "say": "So where do seven and a half free hours come from?",
          "sub": "Vậy bảy tiếng rưỡi ấy lấy đâu ra?",
          "keys": [
            "lấy đâu ra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Bennett says every morning, everyone gets exactly twenty four hours. The rich can't buy more, the poor don't get less.",
          "sub": "Bennett nói sáng nào ai cũng nhận đúng 24 giờ. Người giàu không mua thêm, người nghèo không bị bớt.",
          "keys": [
            "đúng 24 giờ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So the question isn't how many hours you have, but how many you truly live.",
          "sub": "Nên câu hỏi không phải mình có bao nhiêu giờ, mà là sống trọn được bao nhiêu giờ.",
          "keys": [
            "sống trọn"
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
            "id": "b-wk",
            "t": "text",
            "text": "3 tuần đầu của Thảo · 8 chặng",
            "x": 2028,
            "y": 470,
            "size": 52,
            "at": "l1:three weeks",
            "hl": [
              {
                "text": "3 tuần đầu",
                "at": "l1:first three"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2233,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2438,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+400",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2643,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2848,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3053,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+1000",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3258,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+1200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3463,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+1400",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "CN 21:00",
            "x": 2040,
            "y": 588,
            "size": 34,
            "at": "l2+100"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T2 9:00",
            "x": 2245,
            "y": 588,
            "size": 34,
            "at": "l2+300"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T2 20:30",
            "x": 2450,
            "y": 588,
            "size": 34,
            "at": "l2+500"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T3 6:30",
            "x": 2655,
            "y": 588,
            "size": 34,
            "at": "l2+700"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T3 21:00",
            "x": 2860,
            "y": 588,
            "size": 34,
            "at": "l2+900"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T4 20:30",
            "x": 3065,
            "y": 588,
            "size": 34,
            "at": "l2+1100"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "CN",
            "x": 3270,
            "y": 588,
            "size": 44,
            "at": "l2+1300"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "Tuần 3",
            "x": 3475,
            "y": 588,
            "size": 44,
            "at": "l2+1500"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's first three weeks on Bennett's plan.",
          "sub": "Mình theo ba tuần đầu Thảo làm theo kế hoạch của Bennett.",
          "keys": [
            "ba tuần đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Eight stops, one stormy week. Bring a pen.",
          "sub": "Tám chặng, có một tuần đầy sóng gió. Cầm bút theo nhé."
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
            "text": "① CN 21:00 · Phép tính",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:first"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think"
                }
              ],
              "props": [
                "spiral-notepad"
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
            "at": "l1:sunday",
            "caption": "Chủ nhật, 21:00 · tờ giấy nháp",
            "icon": "spiral-notepad"
          },
          {
            "id": "c-sum",
            "t": "text",
            "text": "8 + 7 + 2 = 17",
            "x": 3996,
            "y": 160,
            "size": 80,
            "at": "l2:work",
            "hl": [
              {
                "text": "17",
                "at": "l3:seventeen"
              }
            ]
          },
          {
            "id": "c-left",
            "t": "text",
            "text": "24 − 17 = 7 giờ ?",
            "x": 3996,
            "y": 280,
            "size": 72,
            "at": "l3:seven hours",
            "color": "coral",
            "hl": [
              {
                "text": "7 giờ ?",
                "at": "l3:where"
              }
            ]
          },
          {
            "id": "c-gone",
            "t": "text",
            "text": "chờ cơm · lướt mạng · thêm 1 tập",
            "x": 3996,
            "y": 400,
            "size": 44,
            "at": "l4:waiting",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Sunday, nine p.m. Thảo does the maths.",
          "sub": "Chặng một: chín giờ tối Chủ nhật. Thảo làm phép tính."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Work eight hours. Sleep seven. Bus and meals, about two.",
          "sub": "Làm tám tiếng. Ngủ bảy. Đi xe với ăn uống chừng hai.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "That's seventeen. So seven hours are left. Where did they go?",
          "sub": "Là mười bảy. Vậy còn bảy tiếng. Đi đâu mất rồi?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Mostly nowhere. Waiting for dinner, scrolling, one more episode you never planned.",
          "sub": "Chẳng đi đâu cả: chờ cơm, lướt mạng, xem thêm một tập phim không định xem."
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
          }
        ],
        "items": [
          {
            "id": "c-whole",
            "t": "text",
            "text": "Giờ làm = cả ngày?",
            "x": 3996,
            "y": 470,
            "size": 46,
            "at": "l1:whole day",
            "color": "muted"
          },
          {
            "id": "c-wholex",
            "t": "strike",
            "over": "c-whole",
            "at": "l2:serves"
          },
          {
            "id": "c-own",
            "t": "text",
            "text": "Không thiếu giờ, thiếu giờ có chủ",
            "x": 3996,
            "y": 560,
            "size": 46,
            "at": "l3:owner",
            "color": "accent",
            "hl": [
              {
                "text": "giờ có chủ",
                "at": "l3:owner"
              }
            ]
          },
          {
            "id": "c-day",
            "t": "text",
            "text": "Tan làm → sáng mai: ngày của bạn",
            "x": 3996,
            "y": 660,
            "size": 44,
            "at": "l4:day within",
            "hl": [
              {
                "text": "ngày của bạn",
                "at": "l4:yours"
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
          "say": "Many treat office hours as the whole day, and the rest as leftovers.",
          "sub": "Nhiều người coi giờ ở công ty là cả ngày, phần còn lại là đồ thừa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So the bigger part of life serves the smaller one.",
          "sub": "Thế là phần lớn cuộc đời đứng sau phục vụ phần nhỏ hơn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "You're not short of hours. You're short of hours with an owner.",
          "sub": "Bạn không thiếu giờ. Chỉ thiếu giờ có chủ.",
          "keys": [
            "thiếu giờ có chủ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Bennett calls the time from leaving work to the next morning a day within a day. Yours.",
          "sub": "Bennett gọi quãng từ lúc tan làm tới sáng hôm sau là “một ngày bên trong một ngày”. Của riêng bạn.",
          "keys": [
            "một ngày bên trong một ngày"
          ]
        }
      ],
      "ref": "p3,p5,p6"
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
            "at": "l3",
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
            "text": "② T2 9:00 · Kế hoạch của Dũng",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:second"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "thao",
                  "side": "right"
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
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:office",
            "caption": "Thứ Hai, 9:00 · công ty",
            "icon": "office-building"
          },
          {
            "id": "d-p",
            "t": "text",
            "text": "5:00 chạy · 1 giờ tiếng Anh",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l3:five"
          },
          {
            "id": "d-p2",
            "t": "text",
            "text": "+ 2 giờ đọc sách mỗi tối",
            "x": 5964,
            "y": 240,
            "size": 46,
            "at": "l3:books"
          },
          {
            "id": "d-f0",
            "t": "text",
            "text": "3 ngày ✓",
            "x": 5964,
            "y": 380,
            "size": 44,
            "at": "l6:three days",
            "color": "ink"
          },
          {
            "id": "d-f1",
            "t": "text",
            "text": "T5 tiệc",
            "x": 6234,
            "y": 380,
            "size": 44,
            "at": "l6:party",
            "color": "coral"
          },
          {
            "id": "d-f2",
            "t": "text",
            "text": "T6 ngủ quên",
            "x": 6504,
            "y": 380,
            "size": 44,
            "at": "l6:oversleeps",
            "color": "coral"
          },
          {
            "id": "d-end",
            "t": "text",
            "text": "CN: nằm im trong ghi chú",
            "x": 5964,
            "y": 470,
            "size": 52,
            "at": "l7:lying",
            "color": "coral",
            "hl": [
              {
                "text": "nằm im",
                "at": "l7:quietly"
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
          "say": "Second stop: Monday, nine a.m., at the office.",
          "sub": "Chặng hai: chín giờ sáng thứ Hai, ở công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, Thảo's desk neighbour. He just watched a morning habits video. Danger.",
          "sub": "Còn đây là Dũng, bàn bên Thảo. Vừa xem video thói quen buổi sáng. Nguy hiểm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "From tomorrow: up at five to run, English for an hour, two hours of books a night!",
          "sub": "Từ mai: năm giờ dậy chạy bộ, học tiếng Anh một tiếng, tối đọc sách hai tiếng!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "All of it? Starting tomorrow?",
          "sub": "Tất cả? Ngay từ mai?",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Peek ahead. Three days, he does it all. Thursday, an office party. Friday, he oversleeps.",
          "sub": "Thử nhìn trước nhé. Ba ngày đầu làm đủ. Thứ Năm tiệc công ty. Thứ Sáu ngủ quên."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "By Sunday, the plan is lying quietly in his phone notes.",
          "sub": "Đến Chủ nhật, kế hoạch nằm im trong ghi chú điện thoại.",
          "keys": [
            "nằm im"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Hai, 9:05 · tua lại",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đổi hẳn lịch sống từ tuần đầu",
          "why": "Hăng quá thì nhanh tắt; thất bại sớm lấy đi lòng tự tin.",
          "rule": "Bắt đầu thật ít, chậm mà đều"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Decided! Tomorrow, a brand new me!",
          "sub": "Chốt! Từ mai, một tôi hoàn toàn mới!",
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
          "say": "No secret makes it easy, says Bennett. Accept that, then jump in like cold water.",
          "sub": "Bennett bảo chẳng bí quyết nào làm nó dễ. Chấp nhận, rồi nhảy xuống như xuống nước lạnh.",
          "keys": [
            "nước lạnh"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But begin small. A small success beats a big failure, which steals your confidence.",
          "sub": "Nhưng bắt đầu thật ít. Thành công nhỏ hơn thất bại lớn, vì thất bại lấy mất tự tin.",
          "keys": [
            "Thành công nhỏ"
          ]
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
          "who": "dung",
          "say": "Fine. Two short evenings this week, funny slow.",
          "sub": "Thôi được. Tuần này hai buổi tối ngắn, chậm đến buồn cười.",
          "phase": "redo",
          "face": "thinking",
          "pose": "think"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Too hot burns out fast. Steady goes far.",
          "sub": "Hăng quá thì nhanh tắt. Đi ít mà đều mới đi xa.",
          "phase": "redo",
          "keys": [
            "Đi ít mà đều"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "sfx": [
        {
          "at": "l2",
          "key": "whoosh"
        }
      ],
      "ref": "p7,p9,p10"
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
            "at": "l3",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ T2 20:30 · Buổi tối đầu",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:third"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "stand",
                  "face": "sad"
                }
              ],
              "props": [
                "bowl-with-spoon"
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
            "at": "l1:monday",
            "caption": "Thứ Hai, 20:30 · vừa ăn tối",
            "icon": "bowl-with-spoon"
          },
          {
            "id": "e-tired",
            "t": "text",
            "text": "“Tan làm là hết sức”",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l2:energy",
            "color": "muted"
          },
          {
            "id": "e-film",
            "t": "illus",
            "name": "clapper-board",
            "x": 7932,
            "y": 250,
            "size": 80,
            "at": "l3:movie"
          },
          {
            "id": "e-date",
            "t": "text",
            "text": "Hẹn xem phim → khoẻ re",
            "x": 8032,
            "y": 265,
            "size": 50,
            "at": "l3:movie+300",
            "hl": [
              {
                "text": "khoẻ re",
                "at": "l3:suddenly"
              }
            ]
          },
          {
            "id": "e-cut",
            "t": "text",
            "text": "Bữa tối đừng cắt đôi buổi tối",
            "x": 7932,
            "y": 380,
            "size": 46,
            "at": "l4:cut",
            "color": "accent",
            "hl": [
              {
                "text": "cắt đôi",
                "at": "l4:half"
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
          "say": "Third stop: Monday, eight thirty p.m. Thảo's first evening.",
          "sub": "Chặng ba: tám rưỡi tối thứ Hai. Buổi tối đầu tiên của Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Honestly, after work I have no energy left.",
          "sub": "Nói thật, tan làm là mình hết sạch sức.",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Bennett smiles. A movie date with someone you like, and suddenly you're full of energy.",
          "sub": "Bennett cười: có hẹn xem phim với người mình thích là tự nhiên khoẻ re.",
          "keys": [
            "khoẻ re"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Evenings vanish like a dream. So don't let dinner cut the evening in half. Keep one long block.",
          "sub": "Buổi tối tan như giấc mơ. Nên đừng để bữa tối cắt đôi buổi tối. Giữ một khoảng liền.",
          "keys": [
            "cắt đôi buổi tối"
          ]
        }
      ],
      "ref": "p11"
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
          }
        ],
        "items": [
          {
            "id": "e-bar",
            "t": "box",
            "x": 7932,
            "y": 620,
            "w": 1600,
            "h": 60,
            "at": "l1:room",
            "stroke": 4
          },
          {
            "id": "e-90",
            "t": "box",
            "x": 7932,
            "y": 620,
            "w": 1000,
            "h": 60,
            "at": "l1:ninety",
            "hatch": true,
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "e-90t",
            "t": "text",
            "text": "90 phút",
            "x": 8292,
            "y": 625,
            "size": 40,
            "at": "l1:ninety+300"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "20:30",
            "x": 7932,
            "y": 695,
            "size": 40,
            "at": "l2:half past eight"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "23:00",
            "x": 9412,
            "y": 695,
            "size": 40,
            "at": "l2:eleven"
          },
          {
            "id": "e-ben",
            "t": "text",
            "text": "Bennett: 21:00–23:30",
            "x": 8512,
            "y": 695,
            "size": 36,
            "at": "l2:nine",
            "color": "muted"
          },
          {
            "id": "e-race",
            "t": "text",
            "text": "Khỏi chạy đua với đồng hồ",
            "x": 7932,
            "y": 470,
            "size": 46,
            "at": "l3:racing",
            "color": "accent",
            "hl": [
              {
                "text": "chạy đua",
                "at": "l3:racing"
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
          "say": "And leave extra room. A ninety minute task gets a wider slot.",
          "sub": "Và để dư giờ. Việc chín mươi phút thì xếp một khoảng rộng hơn.",
          "keys": [
            "để dư giờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Bennett used nine to half past eleven. For Thảo, half past eight to eleven.",
          "sub": "Bennett dùng chín giờ đến mười một rưỡi. Với Thảo: tám rưỡi đến mười một giờ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A late call or dishes, and she's still not racing the clock.",
          "sub": "Lỡ cuộc gọi, chồng bát, cô vẫn không phải chạy đua với đồng hồ.",
          "keys": [
            "chạy đua với đồng hồ"
          ]
        }
      ],
      "ref": "p15"
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
            "text": "④ T3 6:30 · Nửa tiếng buổi sáng",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:fourth"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage",
                "sunrise"
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
            "at": "l1:tuesday",
            "caption": "Thứ Ba, 6:30 · dậy sớm hơn chút",
            "icon": "sunrise"
          },
          {
            "id": "f-cup",
            "t": "illus",
            "name": "hot-beverage",
            "x": 60,
            "y": 1250,
            "size": 90,
            "at": "l3:trick"
          },
          {
            "id": "f-prep",
            "t": "text",
            "text": "Pha sẵn từ tối",
            "x": 170,
            "y": 1270,
            "size": 54,
            "at": "l3:night before",
            "hl": [
              {
                "text": "từ tối",
                "at": "l3:night before"
              }
            ]
          },
          {
            "id": "f-habit",
            "t": "text",
            "text": "Ngủ: một phần do thói quen",
            "x": 60,
            "y": 1390,
            "size": 48,
            "at": "l4:habit"
          },
          {
            "id": "f-you",
            "t": "text",
            "text": "cần bao nhiêu: tuỳ người",
            "x": 60,
            "y": 1465,
            "size": 48,
            "at": "l4:depends",
            "color": "muted"
          },
          {
            "id": "f-short",
            "t": "text",
            "text": "Thiếu ngủ? Đừng cắt vào giấc",
            "x": 60,
            "y": 1570,
            "size": 50,
            "at": "l5:short",
            "color": "coral",
            "hl": [
              {
                "text": "Đừng cắt",
                "at": "l5:don't cut"
              }
            ]
          },
          {
            "id": "f-bus",
            "t": "illus",
            "name": "bus",
            "x": 60,
            "y": 1660,
            "size": 80,
            "at": "l5:bus"
          },
          {
            "id": "f-bust",
            "t": "text",
            "text": "→ nửa tiếng trên xe buýt",
            "x": 160,
            "y": 1675,
            "size": 46,
            "at": "l5:bus+300",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Tuesday, six thirty a.m. Thảo got up a little earlier.",
          "sub": "Chặng bốn: sáu rưỡi sáng thứ Ba. Thảo dậy sớm hơn một chút."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Coffee's ready. I set everything out last night.",
          "sub": "Cà phê sẵn rồi. Mình bày sẵn từ tối qua.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Bennett's trick: set out the tea the night before. The morning starts itself.",
          "sub": "Mẹo của Bennett, ông dùng trà: chuẩn bị từ tối, sáng ra tự khắc vào việc.",
          "keys": [
            "chuẩn bị từ tối"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sleep is partly habit, he thinks. But your need depends on you.",
          "sub": "Ông cho rằng ngủ một phần do thói quen. Nhưng cần bao nhiêu thì tuỳ người."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Already short of sleep? Don't cut it. Take your half hour on the bus instead.",
          "sub": "Vốn đã thiếu ngủ? Đừng cắt vào giấc. Lấy nửa tiếng trên xe buýt thay vào.",
          "keys": [
            "Đừng cắt vào giấc"
          ]
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
            "text": "⑤ T3 21:00 · Lịch bốn bước",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:fifth"
          },
          {
            "id": "g-d0",
            "t": "text",
            "text": "T2",
            "x": 2088,
            "y": 1240,
            "size": 44,
            "at": "l1:week+0"
          },
          {
            "id": "g-d1",
            "t": "text",
            "text": "T3",
            "x": 2308,
            "y": 1240,
            "size": 44,
            "at": "l1:week+120"
          },
          {
            "id": "g-d2",
            "t": "text",
            "text": "T4",
            "x": 2528,
            "y": 1240,
            "size": 44,
            "at": "l1:week+240"
          },
          {
            "id": "g-d3",
            "t": "text",
            "text": "T5",
            "x": 2748,
            "y": 1240,
            "size": 44,
            "at": "l1:week+360"
          },
          {
            "id": "g-d4",
            "t": "text",
            "text": "T6",
            "x": 2968,
            "y": 1240,
            "size": 44,
            "at": "l1:week+480"
          },
          {
            "id": "g-d5",
            "t": "text",
            "text": "T7",
            "x": 3188,
            "y": 1240,
            "size": 44,
            "at": "l1:week+600"
          },
          {
            "id": "g-d6",
            "t": "text",
            "text": "CN",
            "x": 3408,
            "y": 1240,
            "size": 44,
            "at": "l1:week+720"
          },
          {
            "id": "g-ms",
            "t": "text",
            "text": "sáng",
            "x": 3508,
            "y": 1320,
            "size": 30,
            "at": "l2:mornings",
            "color": "muted"
          },
          {
            "id": "g-m0",
            "t": "box",
            "x": 2068,
            "y": 1310,
            "w": 180,
            "h": 70,
            "at": "l2:mornings+0",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "g-m1",
            "t": "box",
            "x": 2288,
            "y": 1310,
            "w": 180,
            "h": 70,
            "at": "l2:mornings+150",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "g-m2",
            "t": "box",
            "x": 2508,
            "y": 1310,
            "w": 180,
            "h": 70,
            "at": "l2:mornings+300",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "g-m3",
            "t": "box",
            "x": 2728,
            "y": 1310,
            "w": 180,
            "h": 70,
            "at": "l2:mornings+450",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "g-m4",
            "t": "box",
            "x": 2948,
            "y": 1310,
            "w": 180,
            "h": 70,
            "at": "l2:mornings+600",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "g-m5",
            "t": "box",
            "x": 3168,
            "y": 1310,
            "w": 180,
            "h": 70,
            "at": "l2:mornings+750",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "g-mt0",
            "t": "text",
            "text": "30′",
            "x": 2118,
            "y": 1320,
            "size": 40,
            "at": "l2:half+0"
          },
          {
            "id": "g-mt1",
            "t": "text",
            "text": "30′",
            "x": 2338,
            "y": 1320,
            "size": 40,
            "at": "l2:half+120"
          },
          {
            "id": "g-mt2",
            "t": "text",
            "text": "30′",
            "x": 2558,
            "y": 1320,
            "size": 40,
            "at": "l2:half+240"
          },
          {
            "id": "g-mt3",
            "t": "text",
            "text": "30′",
            "x": 2778,
            "y": 1320,
            "size": 40,
            "at": "l2:half+360"
          },
          {
            "id": "g-mt4",
            "t": "text",
            "text": "30′",
            "x": 2998,
            "y": 1320,
            "size": 40,
            "at": "l2:half+480"
          },
          {
            "id": "g-mt5",
            "t": "text",
            "text": "30′",
            "x": 3218,
            "y": 1320,
            "size": 40,
            "at": "l2:half+600"
          },
          {
            "id": "g-e0",
            "t": "box",
            "x": 2068,
            "y": 1410,
            "w": 180,
            "h": 110,
            "at": "l3:Monday",
            "hatch": true,
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "g-e2",
            "t": "box",
            "x": 2508,
            "y": 1410,
            "w": 180,
            "h": 110,
            "at": "l3:Wednesday",
            "hatch": true,
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "g-e4",
            "t": "box",
            "x": 2948,
            "y": 1410,
            "w": 180,
            "h": 110,
            "at": "l3:Friday",
            "hatch": true,
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "g-et0",
            "t": "text",
            "text": "90′",
            "x": 2108,
            "y": 1435,
            "size": 48,
            "at": "l3:ninety+0"
          },
          {
            "id": "g-et2",
            "t": "text",
            "text": "90′",
            "x": 2548,
            "y": 1435,
            "size": 48,
            "at": "l3:ninety+150"
          },
          {
            "id": "g-et4",
            "t": "text",
            "text": "90′",
            "x": 2988,
            "y": 1435,
            "size": 48,
            "at": "l3:ninety+300"
          },
          {
            "id": "g-f1",
            "t": "text",
            "text": "trống",
            "x": 2308,
            "y": 1440,
            "size": 38,
            "at": "l5:Tuesday+0",
            "color": "muted"
          },
          {
            "id": "g-f3",
            "t": "text",
            "text": "trống",
            "x": 2748,
            "y": 1440,
            "size": 38,
            "at": "l5:Tuesday+200",
            "color": "muted"
          },
          {
            "id": "g-f6",
            "t": "text",
            "text": "trống",
            "x": 3408,
            "y": 1440,
            "size": 38,
            "at": "l5:Tuesday+400",
            "color": "muted"
          },
          {
            "id": "g-sum1",
            "t": "text",
            "text": "6 × 30′ = 3 giờ",
            "x": 2028,
            "y": 1580,
            "size": 52,
            "at": "l4:six half"
          },
          {
            "id": "g-sum2",
            "t": "text",
            "text": "3 × 90′ = 4,5 giờ",
            "x": 2028,
            "y": 1660,
            "size": 52,
            "at": "l4:three times"
          },
          {
            "id": "g-tot",
            "t": "text",
            "text": "= 7,5 giờ",
            "x": 2528,
            "y": 1610,
            "size": 90,
            "at": "l5:total",
            "color": "accent",
            "hl": [
              {
                "text": "7,5 giờ",
                "at": "l5:seven and a half"
              }
            ]
          },
          {
            "id": "g-free",
            "t": "text",
            "text": "Tối trống: gia đình, bạn bè, nghỉ",
            "x": 2028,
            "y": 1770,
            "size": 44,
            "at": "l6:family",
            "hl": [
              {
                "text": "nghỉ",
                "at": "l6:nothing"
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
          "say": "Fifth stop: Tuesday night. Thảo builds her week in four steps.",
          "sub": "Chặng năm: tối thứ Ba. Thảo mở lịch, dựng tuần trong bốn bước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Step one: six mornings, Monday to Saturday, half an hour each, on the bus.",
          "sub": "Bước một: sáu buổi sáng, thứ Hai đến thứ Bảy, mỗi sáng nửa tiếng, trên xe buýt."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Step two: Monday, Wednesday and Friday evenings. Ninety minutes, from half past eight.",
          "sub": "Bước hai: tối thứ Hai, thứ Tư, thứ Sáu. Chín mươi phút, từ tám rưỡi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Step three: six half hours make three. Three times ninety, four and a half.",
          "sub": "Bước ba: sáu lần nửa tiếng là ba tiếng. Ba lần chín mươi phút là bốn tiếng rưỡi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Total, seven and a half. Step four: Tuesday, Thursday and Sunday evenings stay free.",
          "sub": "Tổng: bảy tiếng rưỡi. Bước bốn: tối thứ Ba, thứ Năm, Chủ nhật để trống.",
          "face": "happy",
          "keys": [
            "bảy tiếng rưỡi"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "For family, friends, and officially doing nothing.",
          "sub": "Cho gia đình, bạn bè, và chính thức... chẳng làm gì."
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s12",
      "module": "BRK-12",
      "data": {
        "word": "7,5 / 168",
        "sub": "Nhỏ so với cả tuần, mà đủ đổi cả tuần",
        "from": [
          700,
          560
        ],
        "others": [
          "3 giờ",
          "4,5 giờ",
          "trống"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Seven and a half, out of one sixty eight.",
          "sub": "Bảy tiếng rưỡi, trong một trăm sáu mươi tám."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Small, but enough to change the week.",
          "sub": "Nhỏ, mà đủ đổi cả tuần.",
          "keys": [
            "đủ đổi cả tuần"
          ]
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
            "text": "⑥ T4 20:30 · Dùng vào gì?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sixth"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think"
                }
              ],
              "props": [
                "books",
                "classical-building"
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
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:wednesday",
            "caption": "Thứ Tư, 20:30 · 90 phút đầu",
            "icon": "books"
          },
          {
            "id": "h-want",
            "t": "text",
            "text": "Muốn “cho mình” = muốn hiểu biết",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l3:understand",
            "hl": [
              {
                "text": "hiểu biết",
                "at": "l3:understand"
              }
            ]
          },
          {
            "id": "h-lit",
            "t": "text",
            "text": "Văn chương: không duy nhất",
            "x": 3996,
            "y": 1340,
            "size": 44,
            "at": "l3:literature",
            "color": "muted"
          },
          {
            "id": "h-i1",
            "t": "illus",
            "name": "speech-balloon",
            "x": 3996,
            "y": 1420,
            "size": 80,
            "at": "l5:language"
          },
          {
            "id": "h-i2",
            "t": "illus",
            "name": "musical-note",
            "x": 4116,
            "y": 1420,
            "size": 80,
            "at": "l5:music"
          },
          {
            "id": "h-i3",
            "t": "illus",
            "name": "classical-building",
            "x": 4236,
            "y": 1420,
            "size": 80,
            "at": "l5:history"
          },
          {
            "id": "h-pick",
            "t": "text",
            "text": "Thảo: lịch sử phố cũ",
            "x": 3996,
            "y": 1540,
            "size": 50,
            "at": "l6:history",
            "color": "accent"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Tò mò thật > “nên học”",
            "x": 3996,
            "y": 1650,
            "size": 58,
            "at": "l7:curiosity",
            "color": "accent",
            "hl": [
              {
                "text": "Tò mò thật",
                "at": "l7:curiosity"
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
          "say": "Sixth stop: Wednesday night. Ninety minutes. But for what?",
          "sub": "Chặng sáu: tối thứ Tư. Chín mươi phút. Nhưng để làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Should I read the classics? Everyone says so.",
          "sub": "Mình có nên đọc sách kinh điển không? Ai cũng bảo nên.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Bennett says that wish is really a wish to understand more. And literature isn't the only road.",
          "sub": "Bennett nói mong ấy thật ra là mong hiểu biết thêm. Và văn chương không phải đường duy nhất.",
          "keys": [
            "hiểu biết thêm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Start with what you naturally enjoy: a language, music, the history of your city.",
          "sub": "Bắt đầu từ thứ mình thích tự nhiên: một ngoại ngữ, một loại nhạc, lịch sử nơi mình sống."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Then this city's history. I'm curious about the old streets.",
          "sub": "Vậy thì lịch sử thành phố này. Mình tò mò mấy con phố cũ.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Real curiosity is easier to keep than what you should learn.",
          "sub": "Thứ tò mò thật dễ giữ hơn thứ “nên học”.",
          "keys": [
            "tò mò thật"
          ]
        }
      ],
      "ref": "p19,p20"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Chủ nhật · Ngày nghỉ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:seventh"
          },
          {
            "id": "i-b",
            "t": "illus",
            "name": "open-book",
            "x": 5964,
            "y": 1250,
            "size": 90,
            "at": "l2:Bennett"
          },
          {
            "id": "i-40",
            "t": "text",
            "text": "Bennett: 7 ngày/tuần tới gần 40 tuổi",
            "x": 6074,
            "y": 1270,
            "size": 44,
            "at": "l2:seven days"
          },
          {
            "id": "i-6",
            "t": "text",
            "text": "→ kế hoạch chỉ tính 6 ngày",
            "x": 5964,
            "y": 1380,
            "size": 54,
            "at": "l3:six days",
            "hl": [
              {
                "text": "6 ngày",
                "at": "l3:six days"
              }
            ]
          },
          {
            "id": "i-7",
            "t": "text",
            "text": "Ngày thứ 7 = phần thêm",
            "x": 5964,
            "y": 1470,
            "size": 50,
            "at": "l3:bonus",
            "color": "accent",
            "hl": [
              {
                "text": "phần thêm",
                "at": "l3:bonus"
              }
            ]
          },
          {
            "id": "i-duty",
            "t": "text",
            "text": "≠ bổn phận",
            "x": 6544,
            "y": 1470,
            "size": 50,
            "at": "l3:duty",
            "color": "muted"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: Bennett, chương VI",
            "x": 5964,
            "y": 1560,
            "size": 28,
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
          "say": "Seventh stop: Sunday. Thảo's plan has no Sunday at all.",
          "sub": "Chặng bảy: Chủ nhật. Lịch của Thảo không có Chủ nhật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Bennett worked all seven days a week until nearly forty. Later he treasured one regular day off.",
          "sub": "Bennett từng làm cả bảy ngày một tuần tới gần bốn mươi tuổi. Về sau ông quý một ngày nghỉ đều đặn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So his plan counts only six days. A seventh day of work is a bonus, not a duty.",
          "sub": "Nên kế hoạch ông chỉ tính sáu ngày. Làm thêm ngày thứ bảy là phần thêm, không phải bổn phận.",
          "keys": [
            "phần thêm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A plan with a rest day is a plan that lasts.",
          "sub": "Kế hoạch có ngày nghỉ mới là kế hoạch dùng được lâu.",
          "keys": [
            "dùng được lâu"
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
                  "pose": "phone"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "hot-beverage"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
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
            "at": "l1:coffee",
            "caption": "Chủ nhật · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "i-post",
            "t": "text",
            "text": "“Đăng lên mạng đi!”",
            "x": 5964,
            "y": 1630,
            "size": 46,
            "at": "l2:online",
            "color": "coral"
          },
          {
            "id": "i-postx",
            "t": "strike",
            "over": "i-post",
            "at": "l4:quietly"
          },
          {
            "id": "i-q",
            "t": "text",
            "text": "Lặng lẽ ~3 tháng → hát to hơn",
            "x": 5964,
            "y": 1710,
            "size": 48,
            "at": "l4:three months",
            "color": "accent",
            "hl": [
              {
                "text": "hát to hơn",
                "at": "l4:louder"
              }
            ]
          },
          {
            "id": "i-busy",
            "t": "text",
            "text": "Kể sớm → áp lực",
            "x": 5964,
            "y": 1790,
            "size": 44,
            "at": "l5:pressure",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sunday coffee with Dũng, full of ideas as usual.",
          "sub": "Cà phê Chủ nhật với Dũng, ý tưởng đầy túi như mọi khi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Post your plan online! Tell everyone! More likes, more motivation!",
          "sub": "Đăng kế hoạch lên mạng đi! Khoe cả làng! Nhiều like, nhiều động lực!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Not yet. I'm keeping it quiet for now.",
          "sub": "Chưa đâu. Giờ mình cứ lặng lẽ đã.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Bennett agrees: start quietly. Keep steady about three months, then sing louder.",
          "sub": "Bennett đồng ý: bắt đầu lặng lẽ. Giữ đều chừng ba tháng rồi hãy hát to hơn.",
          "keys": [
            "hát to hơn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Telling too early becomes pressure. And saying I'm busy to friends is hard already.",
          "sub": "Kể sớm dễ thành áp lực. Mà nói “mình bận” với bạn bè vốn chẳng dễ."
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
            "at": "l3:end",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑧ Tuần 3 · Dự án gấp",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:last"
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:this is",
            "caption": "Thứ Hai tuần 3 · công ty",
            "icon": "office-building"
          },
          {
            "id": "j-urg",
            "t": "text",
            "text": "“Gấp. Cả tuần.”",
            "x": 7932,
            "y": 1260,
            "size": 56,
            "at": "l2:urgent",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop: week three, Monday. And this is Cô Hoa, head of the department.",
          "sub": "Chặng cuối: thứ Hai tuần thứ ba. Còn đây là Cô Hoa, trưởng phòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, this project is urgent. All week.",
          "sub": "Thảo, dự án này gấp. Cả tuần đấy.",
          "face": "stern"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "There goes my schedule.",
          "sub": "Thế là đi tong lịch của mình.",
          "face": "worried"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s17",
      "module": "BRK-04",
      "data": {
        "title": "Tuần dự án gấp",
        "wrong": "Coi như hỏng, tháng sau làm lại kế hoạch dày hơn",
        "right": "Giữ lịch, tạm làm ít: hai tối thay vì ba",
        "labels": [
          "Cách A",
          "Cách B"
        ],
        "wrongIllus": "wastebasket",
        "rightIllus": "spiral-calendar"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Option A: restart next month, bigger. It never starts.",
          "sub": "Cách A: tháng sau làm lại, dày hơn. Rồi chẳng bắt đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Option B: do less. Two evenings, not three.",
          "sub": "Cách B: làm ít đi. Hai tối thay vì ba.",
          "keys": [
            "Hai tối thay vì ba"
          ]
        }
      ],
      "ref": "p22"
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
          }
        ],
        "items": [
          {
            "id": "j-b",
            "t": "text",
            "text": "Chọn B → về nhịp cũ",
            "x": 7932,
            "y": 1340,
            "size": 50,
            "at": "l1:picks",
            "color": "accent"
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Quá tải: xếp lại, đừng vứt",
            "x": 7932,
            "y": 1420,
            "size": 54,
            "at": "l2:rearrange",
            "hl": [
              {
                "text": "xếp lại",
                "at": "l2:rearrange"
              }
            ]
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "4 cái bẫy:",
            "x": 7932,
            "y": 1510,
            "size": 46,
            "at": "l3:four traps"
          },
          {
            "id": "j-tr0",
            "t": "text",
            "text": "1. Ra vẻ",
            "x": 7932,
            "y": 1575,
            "size": 40,
            "at": "l3:preaching"
          },
          {
            "id": "j-tr1",
            "t": "text",
            "text": "2. Nô lệ lịch",
            "x": 8332,
            "y": 1575,
            "size": 40,
            "at": "l3:slavery"
          },
          {
            "id": "j-tr2",
            "t": "text",
            "text": "3. Luôn vội",
            "x": 7932,
            "y": 1640,
            "size": 40,
            "at": "l3:rushing"
          },
          {
            "id": "j-tr3",
            "t": "text",
            "text": "4. Bỏ cuộc sớm",
            "x": 8332,
            "y": 1640,
            "size": 40,
            "at": "l4:quitting",
            "color": "coral"
          },
          {
            "id": "j-ring",
            "t": "ring",
            "around": [
              "j-tr3"
            ],
            "color": "coral",
            "stroke": 8,
            "at": "l4:biggest"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo picks B. The project ends, and she's back in rhythm.",
          "sub": "Thảo chọn B. Dự án xong, cô về lại nhịp cũ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "When the schedule is too full, rearrange it. Don't throw it away.",
          "sub": "Lịch quá tải thì xếp lại, đừng vứt đi.",
          "keys": [
            "xếp lại, đừng vứt đi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Bennett names four traps: preaching to others, slavery to your timetable, always rushing.",
          "sub": "Bennett kể bốn cái bẫy: ra vẻ giảng người khác, làm nô lệ thời khoá biểu, lúc nào cũng vội."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And the biggest one, quitting too early.",
          "sub": "Và cái lớn nhất: bỏ cuộc sớm.",
          "keys": [
            "bỏ cuộc sớm"
          ]
        }
      ],
      "ref": "p21,p23"
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
            "at": "l1",
            "fit": [
              "j-v2"
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
            "id": "j-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar",
                "open-book"
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
            "caption": "Chủ nhật, 21:00 · ba tuần sau",
            "icon": "spiral-calendar"
          },
          {
            "id": "j-full",
            "t": "text",
            "text": "Vẫn bận · vẫn 7,5 giờ của mình",
            "x": 8772,
            "y": 1780,
            "size": 44,
            "at": "l3:still",
            "color": "accent",
            "hl": [
              {
                "text": "của mình",
                "at": "l3:mine"
              }
            ]
          },
          {
            "id": "j-cd",
            "t": "text",
            "text": "Năng nhặt… từng nửa tiếng",
            "x": 7932,
            "y": 1780,
            "size": 50,
            "at": "l4:little",
            "color": "accent",
            "hl": [
              {
                "text": "từng nửa tiếng",
                "at": "l4:time"
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
          "say": "Sunday, nine p.m., three weeks later. Same room, same calendar.",
          "sub": "Chín giờ tối Chủ nhật, ba tuần sau. Vẫn phòng ấy, cuốn lịch ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But now it's full of small blocks with her name.",
          "sub": "Nhưng giờ nó kín những ô nhỏ mang tên cô."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Still busy. Still seven and a half hours, all mine.",
          "sub": "Vẫn bận. Vẫn có bảy tiếng rưỡi, của mình.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Pick up little by little, and the bag gets full. Half an hour at a time.",
          "sub": "“Năng nhặt chặt bị”: nhặt từng nửa tiếng một.",
          "keys": [
            "từng nửa tiếng"
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
      "ref": "outro"
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
            "at": "l1:extra",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:take back",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3:rearrange",
            "fit": "J",
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
            "x": 4636,
            "y": 280,
            "at": "l1:extra"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 3068,
            "y": 1560,
            "at": "l2:take back"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8632,
            "y": 1420,
            "at": "l3:rearrange"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: no extra time is coming. Every day is twenty four hours.",
          "sub": "Tóm lại: sẽ không có thêm giờ. Ngày nào cũng 24 giờ.",
          "keys": [
            "không có thêm giờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Take back seven and a half a week: six mornings, three evenings.",
          "sub": "Lấy lại bảy tiếng rưỡi mỗi tuần: sáu buổi sáng, ba buổi tối.",
          "keys": [
            "bảy tiếng rưỡi mỗi tuần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Start small, keep a rest day, and when the week breaks, rearrange.",
          "sub": "Bắt đầu nhỏ, giữ ngày nghỉ, tuần vỡ thì xếp lại.",
          "keys": [
            "xếp lại"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p2,p13,p23,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "ref": "questions[16]",
      "data": {
        "q": "How fast should you go in the first weeks, according to Bennett?",
        "options": [
          "Slowly, almost funny slowly, as long as you keep going regularly",
          "As fast as possible, to see big results before your motivation fades",
          "At a different speed every week, depending on what your friends are doing"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "turtle",
        "why": "Lúc đầu cần giữ nhịp, chưa cần kết quả."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How fast should you go in the first weeks, according to Bennett?",
          "sub": "Theo Bennett, những tuần đầu nên đi nhanh hay chậm?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Slowly, almost funny slowly, as long as you keep going regularly.",
          "sub": "Thật chậm, chậm đến buồn cười, miễn là đều."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "At first, keep the rhythm. Results come later.",
          "sub": "Lúc đầu cần giữ nhịp, chưa cần kết quả."
        }
      ]
    },
    {
      "id": "s30",
      "module": "END-05",
      "ref": "outro",
      "data": {
        "text": "Tối nay: ba tối, mỗi tối 90 phút",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, open your calendar and mark three evenings of ninety minutes. Then try the forty questions below!",
          "sub": "Tối nay mở lịch, đánh dấu ba buổi tối, mỗi tối chín mươi phút. Rồi thử bốn mươi câu bên dưới nhé!",
          "face": "laugh"
        }
      ]
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 (hạt nhân #136 + biến thể #144): Đét đứng trái + bảng trắng 10 ô theo BA TUẦN ĐẦU của Thảo: CN 21:00 lịch trống “khi nào đỡ bận” (A) → 24 giờ công bằng (B) → ① CN 21:00 phép tính 8+7+2=17 (C) → ② T2 9:00 kế hoạch to của Dũng (D) → “Khoan đã!” tua lại → ③ T2 20:30 buổi tối, khung 20:30–23:00 (E) → ④ T3 6:30 nửa tiếng sáng (F) → ⑤ T3 21:00 lịch bốn bước = 7,5 giờ (G) + BRK-12 “7,5 / 168” → ⑥ T4 20:30 dùng vào gì (H) → ⑦ CN nghỉ, lặng lẽ ba tháng (I) → ⑧ tuần 3 Cô Hoa giao dự án gấp, BRK-04 Cách A/B, bốn cái bẫy (J) → CN 21:00 ba tuần sau (khép vòng “Năng nhặt chặt bị”). Đổi tên: anh Khải (p8) → Dũng; chị Ngân (p13) → Thảo; sếp (p22) → Cô Hoa. Bản cũ: w145/bak/live-on-24-hours-a-day-weekly-plan--w01.js.",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
