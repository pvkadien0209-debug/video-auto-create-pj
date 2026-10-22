// Kịch bản video W lần 3 (#110) — "Trả lời câu "Tell me about yourself" thế nào?" · chuỗi "Trả lời phỏng vấn bằng tiếng Anh"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-answer-tell-me-about-yourself--w01",
  "unit": {
    "audience": "english-interview-candidates",
    "slug": "how-to-answer-tell-me-about-yourself",
    "door": "ky-nang",
    "level": "B1",
    "title": "Trả lời câu \"Tell me about yourself\" thế nào?",
    "series": "Trả lời phỏng vấn bằng tiếng Anh"
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
            "id": "a-1",
            "t": "text",
            "text": "1 phút",
            "x": 60,
            "y": 140,
            "size": 200,
            "at": "l1:one minute",
            "color": "accent",
            "hl": [
              {
                "text": "1 phút",
                "at": "l1:one minute+500"
              }
            ]
          },
          {
            "id": "a-1b",
            "t": "text",
            "text": "cho câu hỏi đầu tiên",
            "x": 70,
            "y": 400,
            "size": 56,
            "at": "l1:first"
          },
          {
            "id": "a-life",
            "t": "text",
            "text": "Ta tưởng: cả cuốn tự truyện?",
            "x": 70,
            "y": 500,
            "size": 50,
            "at": "l2:whole",
            "color": "muted"
          },
          {
            "id": "a-lifex",
            "t": "strike",
            "over": "a-life",
            "at": "l2:story+300"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Brandeis University; NIU Career Services",
            "x": 60,
            "y": 730,
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
          "say": "One minute. That is about how long your answer to the first interview question should be.",
          "sub": "Một phút. Đó là chừng thời gian cho câu trả lời đầu tiên của buổi phỏng vấn.",
          "keys": [
            "Một phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet many of us try to squeeze our whole life story into it.",
          "sub": "Vậy mà nhiều người cố nhét cả cuốn tự truyện vào đó.",
          "keys": [
            "cả cuốn tự truyện"
          ]
        }
      ],
      "ref": "intro,p13"
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
            "at": "l7",
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
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l3"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "push"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai, 9:00 · phòng phỏng vấn",
            "icon": "office-building"
          },
          {
            "id": "a-chao",
            "t": "text",
            "text": "“Lời chào cao hơn mâm cỗ”",
            "x": 70,
            "y": 600,
            "size": 50,
            "at": "l7:greeting",
            "color": "accent",
            "hl": [
              {
                "text": "Lời chào",
                "at": "l7:greeting+300"
              }
            ]
          },
          {
            "id": "a-rw",
            "t": "text",
            "text": "⟲ Tua lại 7 ngày",
            "x": 900,
            "y": 690,
            "size": 46,
            "at": "l8:rewind",
            "color": "coral"
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
          "say": "A sales executive. Next Monday at nine: her first job interview in English.",
          "sub": "Nhân viên kinh doanh. Chín giờ thứ Hai tới: buổi phỏng vấn tiếng Anh đầu tiên.",
          "keys": [
            "phỏng vấn tiếng Anh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, the interviewer.",
          "sub": "Còn đây là cô Hoa, người phỏng vấn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "hoa",
          "say": "So, tell me about yourself.",
          "sub": "Vậy, em giới thiệu về bản thân nhé.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Um... my name is Thảo. I was born in...",
          "sub": "Ờ... em tên Thảo. Em sinh ra ở...",
          "face": "worried"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "They say a greeting is worth more than a feast. This one is trembling.",
          "sub": "“Lời chào cao hơn mâm cỗ.” Mà lời chào này đang run."
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Let's rewind seven days.",
          "sub": "Tua lại bảy ngày nào.",
          "keys": [
            "Tua lại bảy ngày"
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
      "ref": "intro,p16"
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
            "text": "Họ thật ra muốn nghe gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:what",
            "hl": [
              {
                "text": "muốn nghe gì",
                "at": "l1:hear"
              }
            ]
          },
          {
            "id": "b-hs",
            "t": "illus",
            "name": "speech-balloon",
            "x": 2028,
            "y": 150,
            "size": 90,
            "at": "l2:handshake"
          },
          {
            "id": "b-hs2",
            "t": "text",
            "text": "Cái bắt tay bằng lời",
            "x": 2138,
            "y": 170,
            "size": 54,
            "at": "l2:handshake+200"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: tiểu sử",
            "x": 2028,
            "y": 280,
            "size": 54,
            "at": "l3:biography",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:who you are"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: bạn trong công việc",
            "x": 2028,
            "y": 370,
            "size": 58,
            "at": "l3:who you are",
            "color": "accent",
            "hl": [
              {
                "text": "bạn trong công việc",
                "at": "l3:at work"
              }
            ]
          },
          {
            "id": "b-en",
            "t": "text",
            "text": "+ tiếng Anh: rõ, mạch lạc?",
            "x": 2028,
            "y": 470,
            "size": 50,
            "at": "l3:end+200"
          },
          {
            "id": "b-hook",
            "t": "text",
            "text": "Cái móc → câu hỏi tiếp",
            "x": 2868,
            "y": 170,
            "size": 54,
            "at": "l5:hook",
            "hl": [
              {
                "text": "Cái móc",
                "at": "l5:hook+300"
              }
            ]
          },
          {
            "id": "b-you",
            "t": "text",
            "text": "Bạn chọn chủ đề",
            "x": 2868,
            "y": 270,
            "size": 58,
            "at": "l6:choose",
            "color": "accent",
            "hl": [
              {
                "text": "Bạn chọn",
                "at": "l6:you choose"
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
          "say": "So what do interviewers really want to hear?",
          "sub": "Vậy người phỏng vấn thật ra muốn nghe gì?",
          "keys": [
            "thật ra muốn nghe gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It is usually the first question: a handshake made of words.",
          "sub": "Thường là câu đầu tiên: cái bắt tay bằng lời.",
          "keys": [
            "cái bắt tay bằng lời"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not your biography. They want to know who you are at work.",
          "sub": "Không phải tiểu sử. Họ cần biết bạn trong công việc.",
          "keys": [
            "bạn trong công việc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And they fish for a hook. Mention a project, and the next question swims to it.",
          "sub": "Họ thả câu tìm “cái móc”: nhắc dự án nào, câu sau bơi về đó.",
          "keys": [
            "cái móc"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "So you choose the topic for the rest of the interview.",
          "sub": "Nghĩa là chính bạn chọn chủ đề cho cả buổi.",
          "keys": [
            "chính bạn chọn chủ đề"
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
          }
        ],
        "items": [
          {
            "id": "b-wk",
            "t": "text",
            "text": "7 chặng · 1 tuần của Thảo",
            "x": 2868,
            "y": 400,
            "size": 54,
            "at": "l1:one week",
            "hl": [
              {
                "text": "1 tuần",
                "at": "l1:one week+200"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 570,
            "w": 210,
            "h": 100,
            "at": "l2+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 570,
            "w": 210,
            "h": 100,
            "at": "l2+220",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 570,
            "w": 210,
            "h": 100,
            "at": "l2+440",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 570,
            "w": 210,
            "h": 100,
            "at": "l2+660",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 570,
            "w": 210,
            "h": 100,
            "at": "l2+880",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 570,
            "w": 210,
            "h": 100,
            "at": "l2+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 570,
            "w": 210,
            "h": 100,
            "at": "l2+1320",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 tối",
            "x": 2046,
            "y": 590,
            "size": 40,
            "at": "l2+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2281,
            "y": 590,
            "size": 48,
            "at": "l2+340"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2516,
            "y": 590,
            "size": 48,
            "at": "l2+560"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T5",
            "x": 2751,
            "y": 590,
            "size": 48,
            "at": "l2+780"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6",
            "x": 2986,
            "y": 590,
            "size": 48,
            "at": "l2+1000"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "CN",
            "x": 3221,
            "y": 590,
            "size": 48,
            "at": "l2+1220"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T2 9:00",
            "x": 3456,
            "y": 590,
            "size": 40,
            "at": "l2+1440"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Thảo's plan: one week, from tonight to next Monday at nine.",
          "sub": "Kế hoạch: một tuần, từ tối nay tới chín giờ thứ Hai sau.",
          "keys": [
            "một tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Seven stops, like a bus route. The last stop is a job.",
          "sub": "Bảy chặng như tuyến xe buýt, trạm cuối là việc làm."
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
            "at": "l8",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tối thứ Hai: chuyện của Dũng",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
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
                  "id": "dung",
                  "side": "left",
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
                  "at": "l4",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l8",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:cafe",
            "caption": "Tối thứ Hai · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "c-bio",
            "t": "text",
            "text": "Tên, quê, em gái, cấp ba…",
            "x": 3996,
            "y": 190,
            "size": 50,
            "at": "l4:younger",
            "color": "muted"
          },
          {
            "id": "c-biox",
            "t": "strike",
            "over": "c-bio",
            "at": "l5:cut in"
          },
          {
            "id": "c-cut",
            "t": "text",
            "text": "“Let's talk about your work.”",
            "x": 3996,
            "y": 290,
            "size": 46,
            "at": "l6:talk",
            "color": "coral"
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "Hỏi về bạn",
            "x": 3996,
            "y": 430,
            "size": 60,
            "at": "l8:about you"
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "→ nghe về công việc",
            "x": 3996,
            "y": 520,
            "size": 60,
            "at": "l8:want",
            "color": "accent",
            "hl": [
              {
                "text": "công việc",
                "at": "l8:your work"
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
          "say": "First stop: Monday night, at a cafe.",
          "sub": "Chặng một: tối thứ Hai, quán cà phê.",
          "keys": [
            "tối thứ Hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, her friend. His English interview was last week.",
          "sub": "Đây là Dũng, bạn Thảo. Tuần trước cậu vừa phỏng vấn tiếng Anh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "So, what did you say first?",
          "sub": "Câu đầu cậu nói gì?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "My name is Dũng, I was born in Nam Dinh, I have one younger sister...",
          "sub": "Em tên Dũng, quê Nam Định, em có một em gái...",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Then, before high school, she cut in.",
          "sub": "Chưa tới chuyện cấp ba, cô ấy ngắt lời.",
          "face": "worried"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Let's talk about your work. And my mind went blank.",
          "sub": "“Nói về công việc của em nhé.” Mình đứng hình.",
          "face": "sad"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "They ask about you, but they want to hear about your work.",
          "sub": "Hỏi về bạn, nhưng muốn nghe công việc của bạn.",
          "keys": [
            "công việc của bạn"
          ]
        }
      ],
      "ref": "p3,p4"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Tối thứ Ba: khung ba phần",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
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
                  "at": "l1",
                  "shot": "medium",
                  "on": "thao"
                }
              ]
            },
            "at": "l1:frame",
            "caption": "Tối thứ Ba · bàn của Thảo",
            "icon": "spiral-notepad"
          },
          {
            "id": "d-p",
            "t": "text",
            "text": "Hiện tại",
            "x": 5964,
            "y": 160,
            "size": 54,
            "at": "l2:present",
            "hl": [
              {
                "text": "Hiện tại",
                "at": "l2:now"
              }
            ]
          },
          {
            "id": "d-pa",
            "t": "text",
            "text": "→ Quá khứ",
            "x": 6204,
            "y": 160,
            "size": 54,
            "at": "l3:past",
            "hl": [
              {
                "text": "Quá khứ",
                "at": "l3:brought"
              }
            ]
          },
          {
            "id": "d-f",
            "t": "text",
            "text": "→ Tương lai",
            "x": 6494,
            "y": 160,
            "size": 54,
            "at": "l4:future",
            "hl": [
              {
                "text": "Tương lai",
                "at": "l4:why"
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
          "say": "Second stop: Tuesday. Thảo draws a frame with three parts.",
          "sub": "Chặng hai: thứ Ba. Thảo kẻ một khung ba phần.",
          "keys": [
            "khung ba phần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Present: what you do now, and what you do well.",
          "sub": "Hiện tại: bạn đang làm gì, làm tốt điều gì.",
          "keys": [
            "Hiện tại"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Past: one or two experiences that brought you here.",
          "sub": "Quá khứ: một hai kinh nghiệm đưa bạn tới đây.",
          "keys": [
            "Quá khứ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Future: why you are in this room today.",
          "sub": "Tương lai: vì sao hôm nay bạn ở phòng này.",
          "keys": [
            "Tương lai"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s06",
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
            "at": "l4",
            "fit": [
              "d-s1",
              "d-s2",
              "d-s3"
            ],
            "zoom": 1.2,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "spiral-notepad"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "medium",
                  "on": "thao"
                }
              ]
            },
            "at": "l1",
            "caption": "",
            "icon": "spiral-notepad"
          },
          {
            "id": "d-name",
            "t": "text",
            "text": "“My name is…”",
            "x": 5964,
            "y": 250,
            "size": 50,
            "at": "l1:skip",
            "color": "muted"
          },
          {
            "id": "d-namex",
            "t": "strike",
            "over": "d-name",
            "at": "l1:already"
          },
          {
            "id": "d-im",
            "t": "text",
            "text": "→ “I'm a…”",
            "x": 5964,
            "y": 320,
            "size": 44,
            "at": "l3:start",
            "color": "accent"
          },
          {
            "id": "d-im2",
            "t": "text",
            "text": "“I currently work as…”",
            "x": 6234,
            "y": 320,
            "size": 44,
            "at": "l3:currently",
            "color": "accent"
          },
          {
            "id": "d-s1",
            "t": "text",
            "text": "I'm currently a sales executive",
            "x": 5964,
            "y": 420,
            "size": 46,
            "at": "l4:currently",
            "hl": [
              {
                "text": "sales executive",
                "at": "l4:sales"
              }
            ]
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "at a furniture company, where I",
            "x": 5964,
            "y": 490,
            "size": 46,
            "at": "l4:furniture"
          },
          {
            "id": "d-s3",
            "t": "text",
            "text": "look after our business clients.",
            "x": 5964,
            "y": 560,
            "size": 46,
            "at": "l4:look after"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Skip my name is. They already know your name from the CV.",
          "sub": "Bỏ “My name is…”: tên bạn họ đã thấy trên CV."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Start straight with I'm a, or I currently work as.",
          "sub": "Vào thẳng: “I'm a…” hay “I currently work as…”.",
          "keys": [
            "Vào thẳng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I'm currently a sales executive at a furniture company, where I look after our business clients.",
          "sub": "Em là nhân viên kinh doanh công ty nội thất, lo khách doanh nghiệp.",
          "face": "happy"
        }
      ],
      "ref": "p6,p16"
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
            "text": "③ Tối thứ Tư: quá khứ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:wednesday"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Wednesday. Dũng comes to practise for his next interview.",
          "sub": "Chặng ba: thứ Tư. Dũng sang tập cho buổi phỏng vấn tới."
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "ref": "p9,p10",
      "data": {
        "set": "home",
        "label": "Thứ Tư, tập thử",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chỉ nói tên và chức danh",
          "why": "Đúng nhưng ngắn quá, người nghe không có gì để hỏi tiếp, không khí chùng xuống.",
          "rule": "Ngắn quá thì người nghe không có gì để hỏi tiếp"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Tell me about yourself.",
          "sub": "Giới thiệu bản thân đi.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I'm Dũng. I'm an accountant. I have three years of experience.",
          "sub": "Em là Dũng, kế toán, có ba năm kinh nghiệm.",
          "face": "happy",
          "stop": true
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Correct, but it stops at the job title.",
          "sub": "Đúng, nhưng dừng ở chức danh."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "I'm an accountant at a trading company. Most of my work is monthly reports.",
          "sub": "Em là kế toán ở công ty thương mại, chủ yếu làm báo cáo tháng.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "dung",
          "say": "Last year I helped close the books two days faster.",
          "sub": "Năm ngoái em giúp chốt sổ sớm hai ngày.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "thao",
          "say": "How did you do that?",
          "sub": "Làm thế nào vậy?",
          "phase": "redo",
          "face": "surprised"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      }
    },
    {
      "id": "s08",
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
            "at": "l4",
            "fit": [
              "e-s1",
              "e-s2",
              "e-s3",
              "e-s4",
              "e-s5",
              "e-s6"
            ],
            "zoom": 1.15,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-short",
            "t": "text",
            "text": "Ngắn quá → hết chuyện để hỏi",
            "x": 7932,
            "y": 160,
            "size": 48,
            "at": "l1:too short",
            "color": "coral",
            "hl": [
              {
                "text": "hết chuyện để hỏi",
                "at": "l1:nothing"
              }
            ]
          },
          {
            "id": "e-adj",
            "t": "text",
            "text": "Tính từ → quên nhanh",
            "x": 7932,
            "y": 250,
            "size": 48,
            "at": "l3:adjectives",
            "color": "muted"
          },
          {
            "id": "e-res",
            "t": "text",
            "text": "Kết quả → nhớ lâu",
            "x": 7932,
            "y": 320,
            "size": 52,
            "at": "l3:results",
            "color": "accent",
            "hl": [
              {
                "text": "nhớ lâu",
                "at": "l3:long time"
              }
            ]
          },
          {
            "id": "e-s1",
            "t": "text",
            "text": "Before that, I spent two years",
            "x": 8772,
            "y": 160,
            "size": 46,
            "at": "l4:before"
          },
          {
            "id": "e-s2",
            "t": "text",
            "text": "in customer service, so I learned",
            "x": 8772,
            "y": 225,
            "size": 46,
            "at": "l4:customer service"
          },
          {
            "id": "e-s3",
            "t": "text",
            "text": "how to calm down unhappy customers.",
            "x": 8772,
            "y": 290,
            "size": 46,
            "at": "l4:calm"
          },
          {
            "id": "e-s4",
            "t": "text",
            "text": "I helped my team cut",
            "x": 8772,
            "y": 380,
            "size": 46,
            "at": "l5:helped"
          },
          {
            "id": "e-s5",
            "t": "text",
            "text": "the monthly report",
            "x": 8772,
            "y": 445,
            "size": 46,
            "at": "l5:monthly"
          },
          {
            "id": "e-s6",
            "t": "text",
            "text": "from five days to three.",
            "x": 8772,
            "y": 510,
            "size": 46,
            "at": "l5:five",
            "color": "accent",
            "hl": [
              {
                "text": "five days to three",
                "at": "l5:three"
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
          "say": "Too short, and they have nothing to ask next.",
          "sub": "Ngắn quá thì không có gì để hỏi tiếp.",
          "keys": [
            "không có gì để hỏi tiếp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So plant one concrete result in the past part.",
          "sub": "Vậy cài một kết quả cụ thể vào phần quá khứ.",
          "keys": [
            "một kết quả cụ thể"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "People forget adjectives fast, but remember results for a long time.",
          "sub": "Tính từ quên nhanh, kết quả nhớ lâu.",
          "keys": [
            "kết quả nhớ lâu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Before that, I spent two years in customer service, so I learned how to calm down unhappy customers.",
          "sub": "Trước đó em làm chăm sóc khách hàng hai năm, học cách làm dịu khách."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "And I helped my team cut the monthly report from five days to three.",
          "sub": "Em giúp nhóm rút báo cáo tháng từ năm xuống ba ngày.",
          "keys": [
            "năm xuống ba ngày"
          ]
        }
      ],
      "ref": "p6,p7,p10"
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
            "id": "e-g1",
            "t": "text",
            "text": "I work in sales three years",
            "x": 7932,
            "y": 430,
            "size": 44,
            "at": "l2:not",
            "color": "muted"
          },
          {
            "id": "e-g1x",
            "t": "strike",
            "over": "e-g1",
            "at": "l2:not+600"
          },
          {
            "id": "e-g2",
            "t": "text",
            "text": "I've worked in sales for three years",
            "x": 7932,
            "y": 500,
            "size": 44,
            "at": "l2:say",
            "color": "accent",
            "hl": [
              {
                "text": "I've worked",
                "at": "l2:worked"
              }
            ]
          },
          {
            "id": "e-g0",
            "t": "text",
            "text": "Đến nay → hiện tại hoàn thành",
            "x": 7932,
            "y": 580,
            "size": 42,
            "at": "l1:present perfect",
            "hl": [
              {
                "text": "hiện tại hoàn thành",
                "at": "l1:perfect"
              }
            ]
          },
          {
            "id": "e-new",
            "t": "text",
            "text": "Mới ra trường: thực tập, đồ án",
            "x": 8772,
            "y": 600,
            "size": 44,
            "at": "l4:graduated",
            "hl": [
              {
                "text": "thực tập",
                "at": "l4:internship"
              }
            ]
          },
          {
            "id": "e-new2",
            "t": "text",
            "text": "I recently graduated in logistics…",
            "x": 8772,
            "y": 670,
            "size": 40,
            "at": "l5:recently",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Grammar tip: experience up to now takes the present perfect.",
          "sub": "Kinh nghiệm kéo đến nay: thì hiện tại hoàn thành.",
          "keys": [
            "hiện tại hoàn thành"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Say I've worked in sales for three years, not I work in sales three years.",
          "sub": "Nói “I've worked…”, đừng nói “I work… three years”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Just graduated? Present: your major and internship. Past: a project or part-time job.",
          "sub": "Mới ra trường? Hiện tại: ngành, kỳ thực tập. Quá khứ: đồ án, việc làm thêm.",
          "keys": [
            "kỳ thực tập"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Like: I recently graduated in logistics, with an internship tracking overseas orders.",
          "sub": "Như: “Vừa tốt nghiệp logistics, thực tập theo dõi đơn nước ngoài.”"
        }
      ],
      "ref": "p17,p8"
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
            "at": "a1",
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
          },
          {
            "at": "b1",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "b1:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm: tương lai",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung"
                },
                {
                  "id": "thao"
                }
              ],
              "left": {
                "label": "Cách A: câu chung",
                "ok": false
              },
              "right": {
                "label": "Cách B: câu riêng",
                "ok": true
              }
            },
            "at": "l2:five",
            "caption": "Cách A ✗ · Cách B ✓",
            "icon": "love-letter"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "Cách A: một câu cho 5 nơi",
            "x": 60,
            "y": 1250,
            "size": 48,
            "at": "l2:same ending",
            "color": "muted"
          },
          {
            "id": "f-ax",
            "t": "strike",
            "over": "f-a",
            "at": "l4:nothing"
          },
          {
            "id": "f-why",
            "t": "text",
            "text": "“Develop what? Why here?”",
            "x": 60,
            "y": 1330,
            "size": 46,
            "at": "l3:develop",
            "color": "coral"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "Cách B: kỹ năng họ cần nhất",
            "x": 60,
            "y": 1420,
            "size": 48,
            "at": "l5:skill",
            "color": "accent",
            "hl": [
              {
                "text": "cần nhất",
                "at": "l5:need most"
              }
            ]
          },
          {
            "id": "f-s1",
            "t": "text",
            "text": "Now I'd like to move",
            "x": 60,
            "y": 1510,
            "size": 44,
            "at": "b1:move"
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "into account management,",
            "x": 60,
            "y": 1570,
            "size": 44,
            "at": "b1:account",
            "hl": [
              {
                "text": "account management",
                "at": "b1:management"
              }
            ]
          },
          {
            "id": "f-s3",
            "t": "text",
            "text": "and that's why this role",
            "x": 60,
            "y": 1630,
            "size": 44,
            "at": "b1:why"
          },
          {
            "id": "f-s4",
            "t": "text",
            "text": "caught my eye.",
            "x": 60,
            "y": 1690,
            "size": 44,
            "at": "b1:caught"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: Thursday. The future part.",
          "sub": "Chặng bốn: thứ Năm. Phần tương lai.",
          "keys": [
            "tương lai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng will use one introduction for five interviews, same ending each time.",
          "sub": "Dũng dùng một bài cho năm buổi phỏng vấn, câu kết y nguyên."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "I want to develop myself in a professional environment.",
          "sub": "Em muốn phát triển bản thân trong môi trường chuyên nghiệp.",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sounds lovely. Until they ask: Develop what, exactly? And why here?",
          "sub": "Êm tai, cho tới khi họ hỏi: “Phát triển gì? Sao lại ở đây?”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That line fits any company on Earth, so it says nothing.",
          "sub": "Câu ấy gửi công ty nào cũng được, nên chẳng nói gì.",
          "keys": [
            "chẳng nói gì"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Thảo reads the job description and picks the skill they need most.",
          "sub": "Thảo đọc mô tả công việc, chọn kỹ năng họ cần nhất.",
          "keys": [
            "kỹ năng họ cần nhất"
          ]
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "Now I'd like to move into account management, and that's why this role caught my eye.",
          "sub": "Em muốn chuyển sang quản lý khách hàng, nên vị trí này thu hút em.",
          "phase": "b",
          "face": "happy"
        }
      ],
      "ref": "p6,p20,p21"
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
            "id": "f-k",
            "t": "text",
            "text": "Khung dùng lại, câu cuối riêng",
            "x": 60,
            "y": 1780,
            "size": 46,
            "at": "l1:frame",
            "hl": [
              {
                "text": "câu cuối riêng",
                "at": "l1:love letter"
              }
            ]
          },
          {
            "id": "f-h",
            "t": "text",
            "text": "Sở thích: 1 câu, ở cuối",
            "x": 900,
            "y": 1780,
            "size": 44,
            "at": "l2:hobbies",
            "color": "muted",
            "hl": [
              {
                "text": "1 câu, ở cuối",
                "at": "l2:one sentence"
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
          "say": "The frame can be reused. The last line is like a love letter: never send one copy to five people.",
          "sub": "Khung dùng lại được. Câu cuối như thư tình: đừng gửi một bản cho năm người.",
          "keys": [
            "Câu cuối như thư tình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Hobbies? One sentence at the end, only if it fits the job, like organising weekend races.",
          "sub": "Sở thích? Một câu ở cuối, chỉ khi hợp việc, như tổ chức giải chạy cuối tuần.",
          "keys": [
            "Một câu ở cuối"
          ]
        }
      ],
      "ref": "p22,p23"
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
            "at": "l5",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Sáu: ghi âm, bấm giờ",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "stopwatch"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "medium",
                  "on": "thao"
                }
              ]
            },
            "at": "l3:three lines",
            "caption": "Tối thứ Sáu · phòng Thảo",
            "icon": "studio-microphone"
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Thuộc từng chữ → đứng hình",
            "x": 2028,
            "y": 1250,
            "size": 46,
            "at": "l2:word by word",
            "color": "muted",
            "hl": [
              {
                "text": "đứng hình",
                "at": "l2:freeze"
              }
            ]
          },
          {
            "id": "g-c1",
            "t": "text",
            "text": "☐ 3 dòng: ý + từ khoá",
            "x": 2028,
            "y": 1335,
            "size": 46,
            "at": "l3:three lines"
          },
          {
            "id": "g-c2",
            "t": "text",
            "text": "☐ 1 kết quả cụ thể",
            "x": 2028,
            "y": 1400,
            "size": 46,
            "at": "l4:result"
          },
          {
            "id": "g-c3",
            "t": "text",
            "text": "☐ before that · that's why",
            "x": 2028,
            "y": 1465,
            "size": 46,
            "at": "l4:linking"
          },
          {
            "id": "g-c4",
            "t": "text",
            "text": "☐ câu kết cho vị trí này",
            "x": 2028,
            "y": 1530,
            "size": 46,
            "at": "l4:closing"
          },
          {
            "id": "g-min",
            "t": "text",
            "text": "1 – 1,5 phút",
            "x": 2028,
            "y": 1630,
            "size": 72,
            "at": "l7:one minute",
            "color": "accent",
            "hl": [
              {
                "text": "1 – 1,5 phút",
                "at": "l7:half"
              }
            ]
          },
          {
            "id": "g-cut",
            "t": "text",
            "text": "Dài? cắt phần quá khứ trước",
            "x": 2028,
            "y": 1750,
            "size": 46,
            "at": "l7:cut",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Friday. Learn it by heart, like a school poem?",
          "sub": "Chặng năm: thứ Sáu. Học thuộc như bài thơ trả bài?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. Word by word sounds like reading. Forget one word, you freeze.",
          "sub": "Không. Thuộc từng chữ nghe như đọc; quên một từ là đứng hình.",
          "keys": [
            "đứng hình"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Just three lines: ideas and a few English keywords.",
          "sub": "Chỉ ba dòng: ý chính, vài từ khoá tiếng Anh.",
          "keys": [
            "ba dòng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plus one result, linking words like before that, and a closing line.",
          "sub": "Thêm một kết quả, từ nối như “before that”, và câu kết."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Okay. Record, listen back, and time it.",
          "sub": "Rồi. Ghi âm, nghe lại, bấm giờ.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "One minute to one and a half is right. Cut past details first.",
          "sub": "Một phút đến một phút rưỡi là vừa. Cắt chi tiết quá khứ trước.",
          "keys": [
            "Một phút đến một phút rưỡi"
          ]
        }
      ],
      "ref": "p11,p12,p13"
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
            "text": "⑥ Chủ nhật: tập nói",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:sunday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "close",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:interviewer",
            "caption": "Chủ nhật · Dũng đóng vai",
            "icon": "speaking-head"
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "Quên ý? Đừng bắt đầu lại",
            "x": 3996,
            "y": 1250,
            "size": 50,
            "at": "l4:back",
            "color": "coral",
            "hl": [
              {
                "text": "Đừng bắt đầu lại",
                "at": "l4:start"
              }
            ]
          },
          {
            "id": "h-sis",
            "t": "text",
            "text": "“So, in short…”",
            "x": 3996,
            "y": 1340,
            "size": 70,
            "at": "l5:so in short",
            "color": "accent",
            "hl": [
              {
                "text": "So, in short…",
                "at": "l5:short+300"
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
          "say": "Sixth stop: Sunday. Dũng plays a tax-officer-serious interviewer.",
          "sub": "Chặng sáu: Chủ nhật. Dũng đóng vai phỏng vấn, nghiêm như cán bộ thuế."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "So, tell me about yourself.",
          "sub": "Giới thiệu bản thân đi.",
          "face": "stern"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I'm a sales executive. Before that... um... I forgot.",
          "sub": "Em là nhân viên kinh doanh. Trước đó... ờ... quên rồi.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Don't go back to the start, like rewinding a cassette in front of guests.",
          "sub": "Đừng quay lại từ đầu, như tua băng cát-xét trước mặt khách.",
          "keys": [
            "Đừng quay lại từ đầu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Say: So, in short. Then jump ahead.",
          "sub": "Nói “So, in short…” rồi nhảy sang phần sau.",
          "keys": [
            "So, in short…"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "So, in short, I'd like to move into account management.",
          "sub": "Tóm lại, em muốn sang quản lý khách hàng.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Nobody knows what you skipped. Everybody notices a restart.",
          "sub": "Không ai biết bạn bỏ câu nào; ai cũng thấy bạn làm lại."
        }
      ],
      "ref": "p19"
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
            "id": "h-slow",
            "t": "text",
            "text": "Chậm hơn · dừng giữa 3 phần",
            "x": 3996,
            "y": 1460,
            "size": 48,
            "at": "l1:slower",
            "hl": [
              {
                "text": "dừng giữa 3 phần",
                "at": "l1:pause"
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
          "say": "Speak a little slower, and pause between the three parts. They follow, you breathe.",
          "sub": "Nói chậm hơn chút, dừng ngắn giữa ba phần: họ theo kịp, bạn kịp thở.",
          "keys": [
            "dừng ngắn giữa ba phần"
          ]
        }
      ],
      "ref": "p18"
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
            "id": "h-cv",
            "t": "text",
            "text": "Đọc lại CV từng dòng",
            "x": 3996,
            "y": 1550,
            "size": 50,
            "at": "l1:line by line",
            "color": "muted"
          },
          {
            "id": "h-cvx",
            "t": "strike",
            "over": "h-cv",
            "at": "l2:already"
          },
          {
            "id": "h-cv3",
            "t": "text",
            "text": "2–3 điểm đáng nói",
            "x": 3996,
            "y": 1640,
            "size": 50,
            "at": "l5:two or three",
            "hl": [
              {
                "text": "2–3 điểm",
                "at": "l5:points"
              }
            ]
          },
          {
            "id": "h-cv4",
            "t": "text",
            "text": "Kể điều CV không nói được",
            "x": 3996,
            "y": 1730,
            "size": 54,
            "at": "l6:cannot",
            "color": "accent",
            "hl": [
              {
                "text": "CV không nói được",
                "at": "l6:cannot+200"
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
          "say": "One more trap: reading your CV line by line, to be safe.",
          "sub": "Thêm một bẫy: đọc lại CV từng dòng cho “an toàn”.",
          "keys": [
            "đọc lại CV từng dòng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "But they already have your CV, often read before you arrive.",
          "sub": "Nhưng họ có CV trong tay, thường đọc trước rồi."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Pick two or three points, and say why they lead you here.",
          "sub": "Chọn hai ba điểm đáng nói, và vì sao chúng dẫn bạn tới đây."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Tell them what your CV cannot say.",
          "sub": "Hãy kể điều CV không nói được.",
          "keys": [
            "điều CV không nói được"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "at": "l2",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Hai, 9:00: phút đầu",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "close",
                  "on": "hoa",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same room",
            "caption": "Thứ Hai, 9:00 · phòng phỏng vấn",
            "icon": "office-building"
          },
          {
            "id": "i-p1",
            "t": "text",
            "text": "✓ Hiện tại",
            "x": 5964,
            "y": 1260,
            "size": 52,
            "at": "l3:currently"
          },
          {
            "id": "i-p2",
            "t": "text",
            "text": "✓ Quá khứ + kết quả",
            "x": 5964,
            "y": 1335,
            "size": 52,
            "at": "l4:before"
          },
          {
            "id": "i-p3",
            "t": "text",
            "text": "✓ Tương lai: vị trí này",
            "x": 5964,
            "y": 1410,
            "size": 52,
            "at": "l6:now"
          },
          {
            "id": "i-seed",
            "t": "text",
            "text": "Gieo: 5 ngày → 3 ngày",
            "x": 5964,
            "y": 1520,
            "size": 52,
            "at": "l5:five",
            "hl": [
              {
                "text": "5 ngày → 3 ngày",
                "at": "l7:five"
              }
            ]
          },
          {
            "id": "i-ask",
            "t": "text",
            "text": "→ “How did you do that?”",
            "x": 5964,
            "y": 1600,
            "size": 48,
            "at": "l7:how",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop: Monday, nine a.m. Same room, same question.",
          "sub": "Chặng cuối: chín giờ thứ Hai. Vẫn phòng ấy, câu hỏi ấy.",
          "keys": [
            "chín giờ thứ Hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "So, tell me about yourself.",
          "sub": "Vậy, em giới thiệu về bản thân nhé.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I'm currently a sales executive at a furniture company, where I look after our business clients.",
          "sub": "Em là nhân viên kinh doanh công ty nội thất, lo khách doanh nghiệp.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Before that, I spent two years in customer service, so I learned how to calm down unhappy customers.",
          "sub": "Trước đó em làm chăm sóc khách hàng hai năm, học cách làm dịu khách."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "I also helped my team cut the monthly report from five days to three.",
          "sub": "Em giúp nhóm rút báo cáo tháng từ năm xuống ba ngày."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "Now I'd like to move into account management, and that's why this role caught my eye.",
          "sub": "Em muốn chuyển sang quản lý khách hàng, nên vị trí này thu hút em.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "hoa",
          "say": "Five days to three? How did you do that?",
          "sub": "Năm xuống ba ngày? Em làm thế nào?",
          "face": "surprised"
        }
      ],
      "ref": "p6,p24"
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
          }
        ],
        "items": [
          {
            "id": "i-k",
            "t": "text",
            "text": "Gieo gì → họ hỏi nấy",
            "x": 5964,
            "y": 1690,
            "size": 58,
            "at": "l1:plant",
            "color": "accent",
            "hl": [
              {
                "text": "họ hỏi nấy",
                "at": "l1:ask"
              }
            ]
          },
          {
            "id": "i-chao",
            "t": "text",
            "text": "Lời chào = mâm cỗ",
            "x": 6804,
            "y": 1780,
            "size": 50,
            "at": "l2:feast",
            "color": "accent",
            "hl": [
              {
                "text": "mâm cỗ",
                "at": "l2:feast#2"
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
          "say": "She planted that detail on purpose. Plant a detail, and that is what they ask next.",
          "sub": "Thảo cố ý gieo chi tiết ấy. Gieo gì, họ hỏi nấy.",
          "keys": [
            "Gieo gì, họ hỏi nấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A greeting worth more than a feast? This time, the greeting is the feast.",
          "sub": "“Lời chào cao hơn mâm cỗ”? Lần này lời chào chính là mâm cỗ."
        }
      ],
      "ref": "p25"
    },
    {
      "id": "s20",
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
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Hành trang ngày phỏng vấn",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:cousin"
          },
          {
            "id": "j-w",
            "t": "text",
            "text": "“Walk me through your resume”",
            "x": 8772,
            "y": 1260,
            "size": 44,
            "at": "l1:walk"
          },
          {
            "id": "j-w2",
            "t": "text",
            "text": "theo thời gian: quá khứ trước",
            "x": 8772,
            "y": 1340,
            "size": 44,
            "at": "l2:time order",
            "color": "accent",
            "hl": [
              {
                "text": "quá khứ trước",
                "at": "l2:past"
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
          "say": "Its cousin: Walk me through your resume.",
          "sub": "Anh em họ của nó: “Walk me through your resume.”",
          "keys": [
            "Walk me through your resume"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Same ideas, in time order: past first.",
          "sub": "Ý vẫn vậy, theo thời gian: quá khứ trước."
        }
      ],
      "ref": "p26"
    },
    {
      "id": "s21",
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
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 56,
            "h": 56,
            "at": "l1:frame",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1240,
            "size": 70,
            "at": "l1:frame+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "Khung ba phần",
            "x": 8012,
            "y": 1260,
            "size": 48,
            "at": "l1:frame+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1370,
            "w": 56,
            "h": 56,
            "at": "l2:result",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1350,
            "size": 70,
            "at": "l2:result+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "Một kết quả cụ thể",
            "x": 8012,
            "y": 1370,
            "size": 48,
            "at": "l2:result+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1480,
            "w": 56,
            "h": 56,
            "at": "l2:recorded",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1460,
            "size": 70,
            "at": "l2:recorded+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "Đã ghi âm, bấm giờ",
            "x": 8012,
            "y": 1480,
            "size": 48,
            "at": "l2:recorded+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1590,
            "w": 56,
            "h": 56,
            "at": "l4",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1570,
            "size": 70,
            "at": "l4+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "Câu cuối riêng cho nơi này",
            "x": 8012,
            "y": 1590,
            "size": 48,
            "at": "l4+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1700,
            "w": 56,
            "h": 56,
            "at": "l5",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7938,
            "y": 1680,
            "size": 70,
            "at": "l5+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "Câu cứu nguy: So, in short…",
            "x": 8012,
            "y": 1700,
            "size": 48,
            "at": "l5+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Pack for interview day: the three-part frame.",
          "sub": "Hành trang: khung ba phần."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One concrete result. Recorded and timed.",
          "sub": "Một kết quả cụ thể; đã ghi âm, bấm giờ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A last line written for this company.",
          "sub": "Câu cuối viết riêng cho công ty này."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And a rescue line: So, in short.",
          "sub": "Và câu cứu nguy: “So, in short…”",
          "keys": [
            "So, in short…"
          ]
        }
      ],
      "ref": "p27"
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
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2:one",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3:two",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4:three",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5436,
            "y": 30,
            "at": "l2:one"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9372,
            "y": 30,
            "at": "l3:two"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1500,
            "y": 1120,
            "at": "l4:three"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "e-s6"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l3:result"
          }
        ]
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: they ask about you, but they want to hear about your work.",
          "sub": "Một: hỏi về bạn, nhưng muốn nghe công việc của bạn.",
          "keys": [
            "công việc của bạn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: present, past, future, with one concrete result inside.",
          "sub": "Hai: hiện tại, quá khứ, tương lai, cài một kết quả cụ thể.",
          "keys": [
            "một kết quả cụ thể"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: reuse the frame, but write the last line fresh.",
          "sub": "Ba: khung dùng lại, câu cuối viết riêng.",
          "keys": [
            "câu cuối viết riêng"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p4,p7,p22,outro"
    },
    {
      "id": "s29",
      "module": "QUIZ-01",
      "ref": "questions[15]",
      "data": {
        "q": "Should you begin your answer by saying my name is and your full name?",
        "options": [
          "Yes, and add your date of birth and hometown before talking about work",
          "No, they already know your name, so start with what you do now",
          "Yes, always say your full name twice so they can write it correctly"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "name-badge",
        "why": "Họ đã biết tên bạn. Hãy mở đầu bằng “I'm a…”."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Should you begin your answer by saying my name is and your full name?",
          "sub": "Có nên mở đầu câu trả lời bằng “My name is” và họ tên đầy đủ không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No, they already know your name, so start with what you do now.",
          "sub": "Không, họ đã biết tên bạn, hãy bắt đầu bằng việc bạn đang làm."
        }
      ]
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Tối nay: viết ba dòng, ghi âm một lần",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, write your three lines and record them once. Then try the forty questions below!",
          "sub": "Tối nay viết ba dòng, ghi âm một lần. Rồi thử bốn mươi câu hỏi bên dưới nhé!",
          "face": "laugh"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#143 (hạt nhân #136): Đét đứng trái + một bảng trắng 10 ô đi theo tuần chuẩn bị của Thảo (tối thứ Hai → 9:00 thứ Hai sau, phút đầu buổi phỏng vấn). Câu trả lời mẫu p6 viết dần trên bảng: Hiện tại (D) → Quá khứ + kết quả (E) → Tương lai (F) → nói trọn (I). Đổi tên: Hiếu (p3) và Đạt (p9) → Dũng; Phương (p24) → Thảo; người phỏng vấn → Cô Hoa. Toàn màn: “Khoan đã!” (s10, trước – sau p9), câu đố, kết. Bản cũ: w143/bak/how-to-answer-tell-me-about-yourself--w01.js.",
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
