// Kịch bản video W lần 3 (#110) — "Cách giới thiệu bản thân bằng tiếng Anh ngắn gọn, tự nhiên" · chuỗi "Giới thiệu bản thân bằng tiếng Anh"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub). HOOK-02: 🔀 hai cách chuẩn bị cho buổi đầu ở câu lạc bộ (p3), SCENE-03.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-introduce-yourself-in-english--w01",
  "unit": {
    "audience": "english-self-introducers",
    "slug": "how-to-introduce-yourself-in-english",
    "door": "ky-nang",
    "level": "B1",
    "title": "Cách giới thiệu bản thân bằng tiếng Anh ngắn gọn, tự nhiên",
    "series": "Giới thiệu bản thân bằng tiếng Anh"
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
            "id": "a-15",
            "t": "text",
            "text": "15 giây",
            "x": 60,
            "y": 120,
            "size": 170,
            "at": "l1:fifteen",
            "color": "accent",
            "hl": [
              {
                "text": "15 giây",
                "at": "l1:seconds"
              }
            ]
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "3 câu + 1 câu hỏi lại",
            "x": 70,
            "y": 340,
            "size": 58,
            "at": "l1:three"
          },
          {
            "id": "a-9",
            "t": "text",
            "text": "Ta tưởng: bài văn 9 câu?",
            "x": 70,
            "y": 450,
            "size": 54,
            "at": "l2:nine",
            "color": "muted"
          },
          {
            "id": "a-9x",
            "t": "strike",
            "over": "a-9",
            "at": "l2:dreams+300"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifteen seconds. Three short lines and one question back. That is a whole introduction.",
          "sub": "Mười lăm giây. Ba câu ngắn, một câu hỏi lại. Thế là trọn một lời giới thiệu.",
          "keys": [
            "Mười lăm giây"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet at school we learned a nine-line essay, from name and age to dreams.",
          "sub": "Vậy mà hồi đi học, ta thuộc cả bài văn chín câu: từ tên, tuổi đến ước mơ.",
          "keys": [
            "bài văn chín câu"
          ]
        }
      ],
      "ref": "p1"
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
            "at": "l5",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l8",
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
                  "id": "thao",
                  "side": "left",
                  "pose": "think"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l4"
                }
              ],
              "props": [
                "speech-balloon"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "medium",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "close",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l8",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "19:00 thứ Năm · CLB tiếng Anh",
            "icon": "speech-balloon"
          },
          {
            "id": "a-c8",
            "t": "text",
            "text": "Đáp bằng… câu 8 trong bài",
            "x": 70,
            "y": 560,
            "size": 46,
            "at": "l7:dream",
            "color": "coral"
          },
          {
            "id": "a-chao",
            "t": "text",
            "text": "“Thuộc như cháo chảy”… cháo đổ",
            "x": 70,
            "y": 660,
            "size": 52,
            "at": "l8:porridge",
            "color": "accent",
            "hl": [
              {
                "text": "cháo đổ",
                "at": "l8:spilled"
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
          "say": "An accountant in Da Nang, and a serious coffee shop hunter.",
          "sub": "Kế toán ở Đà Nẵng, kiêm thợ săn quán cà phê chuyên nghiệp.",
          "keys": [
            "thợ săn quán cà phê"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thursday, seven p.m.: her first English club night.",
          "sub": "Bảy giờ tối thứ Năm: buổi đầu ở câu lạc bộ tiếng Anh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And this is Cô Hoa, who runs the club.",
          "sub": "Còn đây là cô Hoa, người điều phối câu lạc bộ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Hello, my name is Thảo, I am twenty-six, my hometown is...",
          "sub": "Xin chào, tôi tên Thảo, hai mươi sáu tuổi, quê tôi ở...",
          "face": "worried",
          "pose": "think"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "hoa",
          "say": "Lovely. So, what brings you here?",
          "sub": "Hay quá. Vậy điều gì đưa em đến đây?",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "Um... my dream is... to become a good person.",
          "sub": "Ờ... ước mơ của tôi là... trở thành người tốt.",
          "face": "worried"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "She knew it like flowing porridge. Then the porridge spilled.",
          "sub": "Thuộc như cháo chảy. Rồi... cháo đổ.",
          "keys": [
            "cháo đổ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "intro,p3"
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
            "text": "Giới thiệu: cần gì là đủ?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:need",
            "hl": [
              {
                "text": "cần gì",
                "at": "l1:need"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: bài để đọc thuộc",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l2:speech",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:door"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: cánh cửa mở chuyện",
            "x": 2028,
            "y": 250,
            "size": 58,
            "at": "l2:door",
            "color": "accent",
            "hl": [
              {
                "text": "cánh cửa",
                "at": "l2:door+200"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "① Chào + tên",
            "x": 2868,
            "y": 160,
            "size": 54,
            "at": "l3:hello"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "② Bạn làm gì",
            "x": 2868,
            "y": 235,
            "size": 54,
            "at": "l3:what you do"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "③ Một chi tiết riêng",
            "x": 2868,
            "y": 310,
            "size": 54,
            "at": "l3:personal",
            "hl": [
              {
                "text": "chi tiết riêng",
                "at": "l3:detail"
              }
            ]
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "+ 1 câu hỏi lại",
            "x": 2868,
            "y": 400,
            "size": 58,
            "at": "l4:question",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi lại",
                "at": "l4:back"
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
          "say": "So what does a good English introduction really need?",
          "sub": "Vậy một lời giới thiệu tiếng Anh thật ra cần gì?",
          "keys": [
            "thật ra cần gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a speech you recite. A door you open for a conversation.",
          "sub": "Không phải bài để đọc thuộc. Mà là cánh cửa mở ra cuộc trò chuyện.",
          "keys": [
            "cánh cửa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three lines: hello and your name, what you do, one personal detail.",
          "sub": "Ba câu: chào và nói tên, bạn làm gì, một chi tiết riêng.",
          "keys": [
            "Ba câu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then one question back to the other person.",
          "sub": "Rồi một câu hỏi lại người kia.",
          "keys": [
            "hỏi lại"
          ]
        }
      ],
      "ref": "intro,p5"
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
            "text": "1 tuần · 8 chặng",
            "x": 2028,
            "y": 500,
            "size": 54,
            "at": "l1:week",
            "hl": [
              {
                "text": "1 tuần",
                "at": "l1:one week"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 600,
            "w": 185,
            "h": 90,
            "at": "l2:stops+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2233,
            "y": 600,
            "w": 185,
            "h": 90,
            "at": "l2:stops+220",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2438,
            "y": 600,
            "w": 185,
            "h": 90,
            "at": "l2:stops+440",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2643,
            "y": 600,
            "w": 185,
            "h": 90,
            "at": "l2:stops+660",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2848,
            "y": 600,
            "w": 185,
            "h": 90,
            "at": "l2:stops+880",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3053,
            "y": 600,
            "w": 185,
            "h": 90,
            "at": "l2:stops+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3258,
            "y": 600,
            "w": 185,
            "h": 90,
            "at": "l2:stops+1320",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3463,
            "y": 600,
            "w": 185,
            "h": 90,
            "at": "l2:stops+1540",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T5 tối",
            "x": 2043,
            "y": 615,
            "size": 38,
            "at": "l2:stops+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T6",
            "x": 2248,
            "y": 615,
            "size": 46,
            "at": "l2:stops+340"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T7",
            "x": 2453,
            "y": 615,
            "size": 46,
            "at": "l2:stops+560"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "CN",
            "x": 2658,
            "y": 615,
            "size": 46,
            "at": "l2:stops+780"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T2",
            "x": 2863,
            "y": 615,
            "size": 46,
            "at": "l2:stops+1000"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T3",
            "x": 3068,
            "y": 615,
            "size": 46,
            "at": "l2:stops+1220"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T4",
            "x": 3273,
            "y": 615,
            "size": 46,
            "at": "l2:stops+1440"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "T5 sau",
            "x": 3478,
            "y": 615,
            "size": 38,
            "at": "l2:stops+1660"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So Thảo gets one week, until next Thursday's club night.",
          "sub": "Thảo có đúng một tuần, tới buổi câu lạc bộ thứ Năm sau.",
          "keys": [
            "một tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Eight stops. Final stop: an introduction that doesn't spill.",
          "sub": "Tám chặng. Trạm cuối: lời giới thiệu không đổ."
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
            "at": "a1",
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
            "text": "① Tối thứ Năm: nhớ gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:replays"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "left": {
                "label": "Cách A: thuộc chín câu",
                "ok": false
              },
              "right": {
                "label": "Cách B: nhớ ba ý",
                "ok": true
              }
            },
            "at": "l2:two ways",
            "caption": "Cùng một câu hỏi, hai cách chuẩn bị",
            "icon": "thinking-face"
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "A: thuộc 9 câu",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "a1:nine",
            "color": "coral"
          },
          {
            "id": "c-a2",
            "t": "text",
            "text": "→ quên 1 chữ, rơi cả đoạn",
            "x": 4026,
            "y": 250,
            "size": 46,
            "at": "l3:same",
            "color": "muted"
          },
          {
            "id": "c-b",
            "t": "text",
            "text": "B: nhớ 3 từ khoá",
            "x": 3996,
            "y": 350,
            "size": 54,
            "at": "b1:three",
            "color": "accent"
          },
          {
            "id": "c-b2",
            "t": "text",
            "text": "Thảo · accountant · coffee",
            "x": 4026,
            "y": 430,
            "size": 46,
            "at": "b1:coffee",
            "hl": [
              {
                "text": "accountant",
                "at": "b1:accountant"
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
          "say": "First stop: that night, at home. Thảo replays the club in her head.",
          "sub": "Chặng một: tối ấy, ở nhà. Thảo tua lại buổi câu lạc bộ trong đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two ways to prepare.",
          "sub": "Hai cách chuẩn bị."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "Nine sentences, all learned by heart.",
          "sub": "Chín câu, thuộc lòng hết rồi.",
          "phase": "a",
          "pose": "think"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "hoa",
          "say": "So what brings you here?",
          "sub": "Vậy điều gì đưa bạn đến đây?",
          "phase": "a",
          "react": {
            "thao": "worried"
          }
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "Just three key words: Thảo, accountant, coffee.",
          "sub": "Chỉ ba từ khoá: Thảo, kế toán, cà phê.",
          "phase": "b",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "hoa",
          "say": "So what brings you here?",
          "sub": "Vậy điều gì đưa bạn đến đây?",
          "phase": "b",
          "react": {
            "thao": "thinking"
          }
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same question. Only one Thảo still has something to say.",
          "sub": "Cùng câu hỏi. Chỉ một Thảo còn ý để nói.",
          "keys": [
            "còn ý để nói"
          ]
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
            "id": "c-sw",
            "t": "text",
            "text": "Quên 1 từ? thay từ khác",
            "x": 3996,
            "y": 530,
            "size": 46,
            "at": "l1:change",
            "hl": [
              {
                "text": "thay từ khác",
                "at": "l1:every time"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Nhớ 3 ý, đừng nhớ 9 câu",
            "x": 3996,
            "y": 650,
            "size": 64,
            "at": "l3:ideas",
            "color": "accent",
            "hl": [
              {
                "text": "Nhớ 3 ý",
                "at": "l3:three ideas"
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
          "say": "Keep three key words in your head. The sentences can change every time.",
          "sub": "Giữ trong đầu ba từ khoá. Câu chữ mỗi lần nói một khác.",
          "keys": [
            "ba từ khoá"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Remember three ideas, not nine sentences.",
          "sub": "Nhớ ba ý, đừng nhớ chín câu.",
          "keys": [
            "Nhớ ba ý"
          ]
        }
      ],
      "ref": "p2,p4"
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
            "at": "l2",
            "fit": [
              "d-v"
            ],
            "zoom": 1.35,
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
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Sáu: khung ba câu",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:friday"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "hot-beverage",
                "spiral-notepad"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:coffee",
            "caption": "Thứ Sáu · quán cà phê ruột",
            "icon": "hot-beverage"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "① Hi, I'm Thảo.",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l2:hi"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "② I work as an accountant",
            "x": 5964,
            "y": 250,
            "size": 50,
            "at": "l3:work"
          },
          {
            "id": "d-2b",
            "t": "text",
            "text": "in Da Nang.",
            "x": 6014,
            "y": 320,
            "size": 50,
            "at": "l3:nang"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "③ In my free time, I love",
            "x": 5964,
            "y": 400,
            "size": 50,
            "at": "l4:free time"
          },
          {
            "id": "d-3b",
            "t": "text",
            "text": "trying new coffee shops.",
            "x": 6014,
            "y": 470,
            "size": 50,
            "at": "l4:trying",
            "color": "accent",
            "hl": [
              {
                "text": "new coffee shops",
                "at": "l4:shops"
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
          "say": "Second stop: Friday, in Thảo's favourite coffee shop. She builds three lines.",
          "sub": "Chặng hai: thứ Sáu, ở quán cà phê ruột. Thảo dựng ba câu.",
          "keys": [
            "ba câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Hi, I'm Thảo.",
          "sub": "Chào, tôi là Thảo.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I work as an accountant in Da Nang.",
          "sub": "Tôi làm kế toán ở Đà Nẵng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "In my free time, I love trying new coffee shops.",
          "sub": "Lúc rảnh, tôi mê thử quán cà phê mới.",
          "face": "happy"
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
      "id": "s07",
      "module": "BRK-03",
      "data": {
        "value": 15,
        "suffix": " giây",
        "label": "cho ba câu, đủ để người nghe nhớ bạn là ai",
        "illus": "stopwatch"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Now time it.",
          "sub": "Giờ bấm giờ thử."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "About fifteen seconds. Enough for people to remember who you are.",
          "sub": "Chừng mười lăm giây. Đủ để người nghe nhớ bạn là ai.",
          "keys": [
            "mười lăm giây"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "nhan"
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
            "at": "l2",
            "fit": [
              "d-mus",
              "d-gui"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3:end",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-hook",
            "t": "text",
            "text": "Câu ③ = móc câu",
            "x": 5964,
            "y": 545,
            "size": 50,
            "at": "l1:hook",
            "hl": [
              {
                "text": "móc câu",
                "at": "l1:hook"
              }
            ]
          },
          {
            "id": "d-mus",
            "t": "text",
            "text": "I like music.",
            "x": 6504,
            "y": 545,
            "size": 46,
            "at": "l2:music",
            "color": "muted"
          },
          {
            "id": "d-musx",
            "t": "strike",
            "over": "d-mus",
            "at": "l2:catch"
          },
          {
            "id": "d-gui",
            "t": "text",
            "text": "I play guitar in a band",
            "x": 5964,
            "y": 625,
            "size": 46,
            "at": "l3:guitar"
          },
          {
            "id": "d-gui2",
            "t": "text",
            "text": "on weekends.",
            "x": 6554,
            "y": 625,
            "size": 46,
            "at": "l3:guitar",
            "color": "accent",
            "hl": [
              {
                "text": "on weekends",
                "at": "l3:weekends"
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
          "say": "Line three is the hook: a concrete detail people can ask about.",
          "sub": "Câu thứ ba là móc câu: một chi tiết cụ thể để người kia hỏi tiếp.",
          "keys": [
            "móc câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "I like music? Nothing to catch.",
          "sub": "“I like music”? Chẳng có gì để bắt chuyện."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "I play guitar in a small band on weekends? That opens a whole story.",
          "sub": "“I play guitar in a small band on weekends”? Mở ra cả một câu chuyện.",
          "keys": [
            "cả một câu chuyện"
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
            "at": "l2",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Bảy: hội thảo",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:saturday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "hotel",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "walk",
                  "at": "l3"
                }
              ],
              "props": [
                "name-badge"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:conference",
            "caption": "Thứ Bảy · hội thảo logistics",
            "icon": "name-badge"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: Saturday, a logistics conference. Thảo brings her best friend.",
          "sub": "Chặng ba: thứ Bảy, hội thảo ngành logistics. Thảo rủ theo bạn thân."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, a packaging salesman. Fast talker, faster walker.",
          "sub": "Đây là Dũng, bán hàng cho công ty bao bì. Nói nhanh, đi còn nhanh hơn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Sam, from a foreign partner company.",
          "sub": "Còn đây là Sam, người của công ty đối tác nước ngoài."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Hi, I'm Dũng. I work in sales at a packaging company.",
          "sub": "Chào chị, tôi là Dũng, làm kinh doanh ở công ty bao bì.",
          "face": "happy",
          "pose": "wave",
          "to": "sam"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "ref": "p7,p9",
      "data": {
        "set": "hotel",
        "label": "Thứ Bảy · hội thảo",
        "actors": [
          {
            "id": "dung",
            "side": "left"
          },
          {
            "id": "sam",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đáp “Yes”, rồi đứng im chờ",
          "why": "Không có câu nào trao lượt: người kia gật đầu rồi quay sang người khác.",
          "rule": "Nói xong ba câu, nhớ hỏi lại một câu"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Nice to meet you.",
          "sub": "Rất vui được gặp anh.",
          "face": "happy",
          "to": "dung"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Yes.",
          "sub": "Vâng.",
          "face": "neutral",
          "pose": "hold",
          "stop": true
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Wait a second!",
          "sub": "Khoan đã!",
          "face": "stern",
          "pose": "stop"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Yes doesn't match the greeting. And nobody passes the turn, so Sam turns to someone else.",
          "sub": "“Yes” không hợp câu chào. Chẳng ai trao lượt, nên Sam quay sang người khác.",
          "keys": [
            "Chẳng ai trao lượt"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Quay lại cảnh này nhé.",
          "phase": "redo"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "dung",
          "say": "Nice to meet you too. What brings you here today?",
          "sub": "Tôi cũng rất vui được gặp chị. Hôm nay điều gì đưa chị đến đây?",
          "phase": "redo",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "sam",
          "say": "Good question! Let me tell you.",
          "sub": "Câu hỏi hay đấy! Để tôi kể nhé.",
          "phase": "redo",
          "face": "happy"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      }
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
            "at": "l3",
            "fit": [
              "e-ph",
              "e-tr"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l5",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-hay",
            "t": "text",
            "text": "“How about you?”",
            "x": 7932,
            "y": 170,
            "size": 52,
            "at": "l1:how about",
            "color": "accent",
            "hl": [
              {
                "text": "How about you?",
                "at": "l1:you+200"
              }
            ]
          },
          {
            "id": "e-wb",
            "t": "text",
            "text": "“What brings you here today?”",
            "x": 7932,
            "y": 245,
            "size": 44,
            "at": "l1:brings"
          },
          {
            "id": "e-yes",
            "t": "text",
            "text": "Nice to meet you → “Yes”",
            "x": 7932,
            "y": 340,
            "size": 44,
            "at": "l2:never",
            "color": "muted"
          },
          {
            "id": "e-yesx",
            "t": "strike",
            "over": "e-yes",
            "at": "l2:never+400"
          },
          {
            "id": "e-too",
            "t": "text",
            "text": "→ “Nice to meet you too”",
            "x": 7932,
            "y": 410,
            "size": 46,
            "at": "l2:too",
            "hl": [
              {
                "text": "too",
                "at": "l2:too"
              }
            ]
          },
          {
            "id": "e-ph",
            "t": "text",
            "text": "Tên khó: “I'm Phuong. Phuong.”",
            "x": 7932,
            "y": 510,
            "size": 44,
            "at": "l3:phuong"
          },
          {
            "id": "e-tr",
            "t": "text",
            "text": "“You can call me Trang.”",
            "x": 7932,
            "y": 580,
            "size": 44,
            "at": "l3:call me"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "3 câu → hỏi lại 1 câu",
            "x": 7932,
            "y": 680,
            "size": 60,
            "at": "l5:question",
            "color": "accent",
            "hl": [
              {
                "text": "hỏi lại 1 câu",
                "at": "l5:back"
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
          "say": "Pass the ball: How about you? What brings you here today?",
          "sub": "Hãy chuyền bóng: “How about you?”, “What brings you here today?”",
          "keys": [
            "chuyền bóng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Nice to meet you gets nice to meet you too. Never just yes.",
          "sub": "“Nice to meet you” thì đáp “Nice to meet you too”, đừng chỉ “Yes”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hard name? Say it slowly, twice: I'm Phuong. Phuong. Or: you can call me Trang.",
          "sub": "Tên khó đọc? Nói chậm, nhắc lại: “I'm Phuong. Phuong.” Hoặc: “You can call me Trang.”",
          "keys": [
            "Nói chậm, nhắc lại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Three lines, then one question back.",
          "sub": "Nói xong ba câu, nhớ hỏi lại một câu.",
          "keys": [
            "hỏi lại một câu"
          ]
        }
      ],
      "ref": "p7,p8,p10"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Họ hỏi thêm sở thích, công việc, quê thì sao?",
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
          "say": "What if they ask more? Your hobbies, your job, your hometown?",
          "sub": "Nếu họ hỏi thêm: sở thích, công việc, quê thì sao?",
          "keys": [
            "hỏi thêm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p11"
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
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Chủ nhật: được hỏi thêm",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:after"
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
                  "pose": "think"
                }
              ],
              "props": [
                "spiral-notepad"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:sunday",
            "caption": "Chủ nhật · phòng của Thảo",
            "icon": "spiral-notepad"
          },
          {
            "id": "f-c0",
            "t": "box",
            "x": 60,
            "y": 1260,
            "w": 50,
            "h": 50,
            "at": "l3:hobbies",
            "stroke": 5
          },
          {
            "id": "f-k0",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1242,
            "size": 62,
            "at": "l3:hobbies+600",
            "color": "accent"
          },
          {
            "id": "f-l0",
            "t": "text",
            "text": "Sở thích: 1 việc, có chi tiết",
            "x": 135,
            "y": 1252,
            "size": 44,
            "at": "l3:hobbies+200"
          },
          {
            "id": "f-c1",
            "t": "box",
            "x": 60,
            "y": 1355,
            "w": 50,
            "h": 50,
            "at": "l4:work",
            "stroke": 5
          },
          {
            "id": "f-k1",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1337,
            "size": 62,
            "at": "l4:work+600",
            "color": "accent"
          },
          {
            "id": "f-l1",
            "t": "text",
            "text": "Công việc: 2 câu",
            "x": 135,
            "y": 1347,
            "size": 44,
            "at": "l4:work+200"
          },
          {
            "id": "f-c2",
            "t": "box",
            "x": 60,
            "y": 1450,
            "w": 50,
            "h": 50,
            "at": "l5:hometown",
            "stroke": 5
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1432,
            "size": 62,
            "at": "l5:hometown+600",
            "color": "accent"
          },
          {
            "id": "f-l2",
            "t": "text",
            "text": "Quê: 1 câu + mốc vị trí",
            "x": 135,
            "y": 1442,
            "size": 44,
            "at": "l5:hometown+200"
          },
          {
            "id": "f-c3",
            "t": "box",
            "x": 60,
            "y": 1545,
            "w": 50,
            "h": 50,
            "at": "l2:family",
            "stroke": 5
          },
          {
            "id": "f-k3",
            "t": "text",
            "text": "✓",
            "x": 66,
            "y": 1527,
            "size": 62,
            "at": "l2:family+600",
            "color": "accent"
          },
          {
            "id": "f-l3",
            "t": "text",
            "text": "Gia đình: người gần nhất",
            "x": 135,
            "y": 1537,
            "size": 44,
            "at": "l2:family+200"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Mỗi chủ đề: 2–3 câu",
            "x": 60,
            "y": 1650,
            "size": 50,
            "at": "l2:two or three",
            "hl": [
              {
                "text": "2–3 câu",
                "at": "l2:three lines"
              }
            ]
          },
          {
            "id": "f-hn",
            "t": "text",
            "text": "“It's about two hours from Hanoi.”",
            "x": 60,
            "y": 1770,
            "size": 46,
            "at": "l5:two hours",
            "color": "accent",
            "hl": [
              {
                "text": "two hours from Hanoi",
                "at": "l5:hanoi"
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
          "say": "Fourth stop: Sunday. What comes after the first fifteen seconds?",
          "sub": "Chặng bốn: Chủ nhật. Sau mười lăm giây đầu thì sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Usually hobbies, work, hometown, family. Two or three lines each.",
          "sub": "Thường là sở thích, công việc, quê, gia đình. Mỗi chủ đề hai ba câu.",
          "keys": [
            "hai ba câu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hobbies: one thing you really do, with a detail. Not a shopping list.",
          "sub": "Sở thích: một việc bạn thật sự làm, có chi tiết. Đừng liệt kê như danh sách đi chợ.",
          "keys": [
            "có chi tiết"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Work: your job, where you work, and your main daily tasks.",
          "sub": "Công việc: nghề, nơi làm, việc chính hằng ngày."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Hometown: add a landmark, like about two hours from Hanoi, plus what it's famous for.",
          "sub": "Quê: thêm một mốc, như “cách Hà Nội chừng hai tiếng”, rồi một điều quê nổi tiếng.",
          "keys": [
            "thêm một mốc"
          ]
        }
      ],
      "ref": "p11,p12,p13,p14,p15"
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
            "at": "l4",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l8:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Hai: nhóm dự án mới",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "stand"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold"
                }
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
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l8",
                  "shot": "E-SHOT-05",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:project",
            "caption": "Thứ Hai · họp làm quen nhóm",
            "icon": "busts-in-silhouette"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Khung giữ, câu ③ đổi",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l3:line three",
            "hl": [
              {
                "text": "câu ③ đổi",
                "at": "l3:essay"
              }
            ]
          },
          {
            "id": "g-old",
            "t": "text",
            "text": "“I'm 26 and still single.”",
            "x": 2028,
            "y": 1340,
            "size": 46,
            "at": "l4:single",
            "color": "muted"
          },
          {
            "id": "g-oldx",
            "t": "strike",
            "over": "g-old",
            "at": "l6:awkward"
          },
          {
            "id": "g-new",
            "t": "text",
            "text": "“I'll be handling",
            "x": 2028,
            "y": 1430,
            "size": 46,
            "at": "l7:handling",
            "color": "accent"
          },
          {
            "id": "g-new2",
            "t": "text",
            "text": "the data reports…”",
            "x": 2028,
            "y": 1495,
            "size": 46,
            "at": "l7:data",
            "color": "accent",
            "hl": [
              {
                "text": "data reports",
                "at": "l7:reports"
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
          "say": "Fifth stop: Monday. A new project team, and Sam is the team leader.",
          "sub": "Chặng năm: thứ Hai. Nhóm dự án mới, và Sam là trưởng nhóm."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But she grabs line three from an old school essay.",
          "sub": "Nhưng Thảo lôi câu thứ ba từ bài văn mẫu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I'm twenty-six years old and I'm still single.",
          "sub": "Tôi hai mươi sáu tuổi và vẫn còn độc thân.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Oh... okay.",
          "sub": "Ồ… vâng.",
          "face": "surprised",
          "react": {
            "thao": "worried"
          }
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Awkward. Take two.",
          "sub": "Sam chẳng biết đáp gì. Làm lại nào."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "I'll be handling the data reports for this project, so feel free to ask me for any numbers.",
          "sub": "Tôi sẽ lo báo cáo số liệu cho dự án, cần số nào cứ hỏi tôi nhé.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "sam",
          "say": "Great, good to know. Thanks!",
          "sub": "Tuyệt, biết vậy là tốt rồi. Cảm ơn!",
          "face": "happy",
          "pose": "thumb"
        }
      ],
      "ref": "p16,p19"
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
            "id": "g-c",
            "t": "text",
            "text": "Lớp mới → vì sao học",
            "x": 2028,
            "y": 1580,
            "size": 42,
            "at": "l1:class"
          },
          {
            "id": "g-e",
            "t": "text",
            "text": "Sự kiện → lĩnh vực",
            "x": 2438,
            "y": 1580,
            "size": 42,
            "at": "l1:field"
          },
          {
            "id": "g-f",
            "t": "text",
            "text": "“I'm Linh, Mai's colleague.”",
            "x": 2028,
            "y": 1645,
            "size": 42,
            "at": "l1:linh"
          },
          {
            "id": "g-j",
            "t": "text",
            "text": "Ngày đầu: “looking forward to…”",
            "x": 2868,
            "y": 1790,
            "size": 40,
            "at": "l3:first day",
            "hl": [
              {
                "text": "looking forward",
                "at": "l3:forward"
              }
            ]
          },
          {
            "id": "g-pr",
            "t": "text",
            "text": "Tuổi · lương · chồng con",
            "x": 2028,
            "y": 1715,
            "size": 42,
            "at": "l4:age",
            "color": "coral"
          },
          {
            "id": "g-prx",
            "t": "strike",
            "over": "g-pr",
            "at": "l4:usually"
          },
          {
            "id": "g-ca",
            "t": "text",
            "text": "“Lựa lời mà nói”",
            "x": 2028,
            "y": 1790,
            "size": 52,
            "at": "l5:words",
            "color": "accent",
            "hl": [
              {
                "text": "Lựa lời",
                "at": "l5:listener"
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
          "say": "New class: why you learn. Work event: your field. A friend's friend: I'm Linh, Mai's colleague.",
          "sub": "Lớp mới: vì sao học. Sự kiện công việc: lĩnh vực. Bạn của bạn: “I'm Linh, Mai's colleague.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "First day at a new job? Show goodwill: I'm looking forward to working with you all.",
          "sub": "Ngày đầu đi làm? Thể hiện thiện chí: “I'm looking forward to working with you all.”",
          "keys": [
            "thiện chí"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Age, weight, salary, marriage? Usually not in an English introduction.",
          "sub": "Tuổi, cân nặng, lương, chồng con? Thường không có trong lời giới thiệu tiếng Anh.",
          "keys": [
            "Thường không có"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our old saying: words cost nothing, so pick them to please the listener.",
          "sub": "Ông bà dặn: “Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau.”",
          "keys": [
            "lựa lời mà nói"
          ]
        }
      ],
      "ref": "p16,p17,p18,p20"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Ba: họp online",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:tuesday"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
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
            "at": "l1:online",
            "caption": "Thứ Ba · họp với trụ sở của Sam",
            "icon": "laptop"
          },
          {
            "id": "h-on",
            "t": "text",
            "text": "Online: 15–20 giây",
            "x": 3996,
            "y": 1260,
            "size": 54,
            "at": "l2:fifteen",
            "hl": [
              {
                "text": "15–20 giây",
                "at": "l2:twenty"
              }
            ]
          },
          {
            "id": "h-on2",
            "t": "text",
            "text": "tên · vai trò · lý do có mặt",
            "x": 3996,
            "y": 1340,
            "size": 46,
            "at": "l2:role",
            "color": "accent"
          },
          {
            "id": "h-iv",
            "t": "text",
            "text": "Phỏng vấn: ~1 phút",
            "x": 3996,
            "y": 1470,
            "size": 54,
            "at": "l5:one minute",
            "hl": [
              {
                "text": "~1 phút",
                "at": "l5:minute"
              }
            ]
          },
          {
            "id": "h-iv2",
            "t": "text",
            "text": "hiện tại → quá khứ → tương lai",
            "x": 3996,
            "y": 1550,
            "size": 44,
            "at": "l5:present"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: Tuesday, an online meeting with Sam's head office.",
          "sub": "Chặng sáu: thứ Ba, họp trực tuyến với trụ sở của Sam."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Online: name, role, why you're there. Fifteen to twenty seconds.",
          "sub": "Họp trực tuyến: tên, vai trò, lý do có mặt. Mười lăm đến hai mươi giây.",
          "keys": [
            "Tên, vai trò, lý do có mặt"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Hi everyone, I'm Thảo, the project accountant. I'm here for the cost report.",
          "sub": "Chào mọi người, tôi là Thảo, kế toán dự án. Tôi có mặt để trình bày báo cáo chi phí.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A job interview is a different game. Tell me about yourself is a question about work.",
          "sub": "Phỏng vấn xin việc thì khác hẳn: “Tell me about yourself” là câu hỏi về công việc.",
          "keys": [
            "câu hỏi về công việc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Present, past, future, about one minute. Another series.",
          "sub": "Hiện tại, quá khứ, tương lai, khoảng một phút. Chuỗi khác nhé."
        }
      ],
      "ref": "p21,p22"
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
            "id": "h-fam",
            "t": "text",
            "text": "Gia đình: người gần nhất",
            "x": 3996,
            "y": 1660,
            "size": 44,
            "at": "l1:family",
            "hl": [
              {
                "text": "người gần nhất",
                "at": "l1:closest"
              }
            ]
          },
          {
            "id": "h-goal",
            "t": "text",
            "text": "Mục tiêu + việc đang làm",
            "x": 3996,
            "y": 1770,
            "size": 54,
            "at": "l3:goal",
            "color": "accent",
            "hl": [
              {
                "text": "việc đang làm",
                "at": "l3:doing"
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
          "say": "Family? Start with who you live with, or who you're closest to.",
          "sub": "Gia đình? Bắt đầu từ người sống cùng hoặc gần gũi nhất."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One detail per person, and keep it light. Family is quite private.",
          "sub": "Mỗi người một chi tiết, giữ chừng mực, vì đây là chuyện khá riêng.",
          "keys": [
            "giữ chừng mực"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Career goals, with colleagues or a manager? Pair each goal with something you're doing, like a course.",
          "sub": "Mục tiêu nghề nghiệp, khi đã quen đồng nghiệp, quản lý? Mỗi mục tiêu kèm một việc đang làm, như một khoá học.",
          "keys": [
            "một việc đang làm"
          ]
        }
      ],
      "ref": "p23,p24"
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
            "at": "l3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Tư: ghi âm, nghe lại",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:wednesday"
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "studio-microphone"
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
                  "shot": "medium",
                  "on": "thao",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:records",
            "caption": "Tối thứ Tư · tự ghi âm",
            "icon": "studio-microphone"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Lỗi 1: thiếu mạo từ",
            "x": 5964,
            "y": 1260,
            "size": 54,
            "at": "l3:article",
            "color": "coral",
            "hl": [
              {
                "text": "thiếu mạo từ",
                "at": "l3:missing"
              }
            ]
          },
          {
            "id": "i-1b",
            "t": "text",
            "text": "I'm teacher → I'm a teacher",
            "x": 5964,
            "y": 1340,
            "size": 44,
            "at": "l3:teacher#2"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Lỗi 2: bỏ âm cuối",
            "x": 5964,
            "y": 1440,
            "size": 54,
            "at": "l4:final",
            "color": "coral",
            "hl": [
              {
                "text": "bỏ âm cuối",
                "at": "l4:dropping"
              }
            ]
          },
          {
            "id": "i-2b",
            "t": "text",
            "text": "work → “wor”",
            "x": 5964,
            "y": 1520,
            "size": 48,
            "at": "l4:wor"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Wednesday night. Thảo records herself, then listens back.",
          "sub": "Chặng bảy: tối thứ Tư. Thảo tự ghi âm, rồi nghe lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm accountant. I wor... in Da Nang. Wait, what?",
          "sub": "Tôi là kế toán. Tôi làm... ở Đà Nẵng. Ơ, sao nghe lạ thế?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Mistake one for Vietnamese speakers: a missing article. Not I'm teacher, but I'm a teacher.",
          "sub": "Lỗi số một của người Việt: thiếu mạo từ. Không phải “I'm teacher”, mà “I'm a teacher”.",
          "keys": [
            "thiếu mạo từ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Mistake two: dropping final sounds, so work turns into wor.",
          "sub": "Lỗi thứ hai: bỏ âm cuối, nên “work” nghe như “wor”.",
          "keys": [
            "bỏ âm cuối"
          ]
        }
      ],
      "ref": "p25"
    },
    {
      "id": "s20",
      "module": "BRK-04",
      "data": {
        "title": "Câu ② của Thảo",
        "wrong": "I'm accountant. I wor…",
        "right": "I'm an accountant. I work…",
        "wrongIllus": "speaking-head",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "I'm accountant, I wor?",
          "sub": "“I'm accountant, I wor…”?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "I'm an accountant. I work. Say that final k.",
          "sub": "“I'm an accountant. I work.” Đọc rõ âm k cuối.",
          "keys": [
            "âm k cuối"
          ]
        }
      ],
      "ref": "p25"
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
            "id": "i-fix",
            "t": "text",
            "text": "Ghi âm → nghe lại → 2–3 lỗi",
            "x": 5964,
            "y": 1630,
            "size": 46,
            "at": "l1:record",
            "hl": [
              {
                "text": "2–3 lỗi",
                "at": "l1:two or three"
              }
            ]
          },
          {
            "id": "i-wk",
            "t": "text",
            "text": "chỉ sửa chúng · 1 tuần",
            "x": 5964,
            "y": 1700,
            "size": 46,
            "at": "l2:one week"
          },
          {
            "id": "i-op",
            "t": "text",
            "text": "Thái độ cởi mở > lỗi nhỏ",
            "x": 5964,
            "y": 1780,
            "size": 58,
            "at": "l3:open",
            "color": "accent",
            "hl": [
              {
                "text": "cởi mở",
                "at": "l3:open attitude"
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
          "say": "The fix: record, listen back, and mark the two or three mistakes you repeat most.",
          "sub": "Cách sửa: ghi âm, nghe lại, đánh dấu hai ba lỗi lặp nhiều nhất.",
          "keys": [
            "hai ba lỗi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fix only those, for one week.",
          "sub": "Chỉ sửa chúng trong một tuần."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Don't wait to be perfect. People remember an open attitude longer than a small slip.",
          "sub": "Đừng chờ nói hoàn hảo. Người ta nhớ thái độ cởi mở lâu hơn một lỗi ngữ pháp nhỏ.",
          "keys": [
            "thái độ cởi mở"
          ]
        }
      ],
      "ref": "p26,p27,p28"
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
            "at": "l2",
            "fit": [
              "j-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑧ Thứ Năm sau · 19:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "hoa",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "speech-balloon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "hoa",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "E-SHOT-05",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:club",
            "caption": "19:00 thứ Năm · CLB tiếng Anh",
            "icon": "speech-balloon"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "✓ 3 câu, không đọc thuộc",
            "x": 7932,
            "y": 1260,
            "size": 48,
            "at": "l3:hi"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "✓ “How about you?”",
            "x": 7932,
            "y": 1340,
            "size": 48,
            "at": "l4:how about"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "✓ trả lời ngoài kịch bản",
            "x": 7932,
            "y": 1420,
            "size": 48,
            "at": "l6:chat"
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Thuộc ý → chuyện tự chảy",
            "x": 7932,
            "y": 1530,
            "size": 58,
            "at": "l7:ideas",
            "color": "accent",
            "hl": [
              {
                "text": "Thuộc ý",
                "at": "l7:knows the ideas"
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
          "say": "Last stop: next Thursday, seven p.m. Same club.",
          "sub": "Chặng cuối: bảy giờ tối thứ Năm sau. Vẫn câu lạc bộ ấy.",
          "keys": [
            "thứ Năm sau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Welcome back, Thảo! Introduce yourself?",
          "sub": "Thảo quay lại rồi! Giới thiệu chút nhé?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Hi, I'm Thảo. I'm an accountant at a logistics company here in Da Nang.",
          "sub": "Chào cả nhà, em là Thảo, kế toán một công ty logistics ở Đà Nẵng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And I'm always hunting for new coffee shops. How about you?",
          "sub": "Em lúc nào cũng đi săn quán cà phê mới. Còn cô thì sao?",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Ha! Me too. So, what brings you here?",
          "sub": "Ha! Cô cũng thế. Vậy điều gì đưa em đến đây?",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "My new team speaks English. I want to chat, not just send reports.",
          "sub": "Nhóm mới nói tiếng Anh. Em muốn trò chuyện, chứ không chỉ gửi báo cáo."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Last week, the porridge spilled. This week she knows the ideas, and the talk flows.",
          "sub": "Tuần trước cháo đổ. Tuần này thuộc ý, chuyện cứ thế mà chảy.",
          "keys": [
            "thuộc ý"
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
      "ref": "p7,outro"
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
            "at": "l1:remember",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:three lines",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:needs",
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
            "x": 5436,
            "y": 30,
            "at": "l1:remember"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9372,
            "y": 30,
            "at": "l2:three lines"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3468,
            "y": 1120,
            "at": "l3:needs"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: remember three ideas, not nine sentences.",
          "sub": "Tóm lại: nhớ ba ý, đừng nhớ chín câu.",
          "keys": [
            "nhớ ba ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Say three lines, then pass the ball with one question.",
          "sub": "Nói ba câu, rồi chuyền bóng bằng một câu hỏi.",
          "keys": [
            "chuyền bóng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And pick what the listener needs. It's not an exam, it opens a conversation.",
          "sub": "Và chọn điều người nghe cần. Không phải bài thi, mà để mở một cuộc trò chuyện.",
          "keys": [
            "mở một cuộc trò chuyện"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p4,p10,p20,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "ref": "questions[11]",
      "data": {
        "q": "Someone says nice to meet you, and you answer yes, what is wrong?",
        "options": [
          "Yes does not match the greeting, the natural reply is nice to meet you too",
          "Nothing is wrong, because yes shows that you heard and agree with them",
          "You should answer thank you very much, which is the only polite reply"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "speech-balloon",
        "why": "Câu chào cần đáp bằng câu chào tương ứng; thêm “too” là đủ tự nhiên."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Someone says nice to meet you, and you answer yes, what is wrong?",
          "sub": "Có người nói rất vui được gặp bạn, bạn đáp yes, sai ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Yes does not match the greeting, the natural reply is nice to meet you too.",
          "sub": "“Yes” không hợp câu chào; đáp tự nhiên là “Nice to meet you too”."
        }
      ]
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Tối nay: ba từ khoá, nói to năm lần",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight: three key words, said aloud five times. Record the last one. Nice to meet you!",
          "sub": "Tối nay: ba từ khoá, nói to năm lần, ghi âm lần cuối. Rất vui được gặp bạn!",
          "face": "laugh"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 dựng lại theo hạt nhân (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô đi theo MỘT TUẦN của Thảo (CLB tiếng Anh 19:00 thứ Năm → T6 quán cà phê → T7 hội thảo → CN → T2 nhóm dự án → T3 họp online → T4 ghi âm → 19:00 thứ Năm sau). Nhân vật (chuỗi w145/_series/english-self-introducers.md): Thảo (kế toán Đà Nẵng, mê quán cà phê; người học thuộc p3), Cô Hoa (điều phối CLB p3), Dũng (Phúc p9), Sam (kỹ sư/đối tác nước ngoài p9, nhóm dự án p19). Ca dao: “thuộc như cháo chảy… cháo đổ” (mở) → “thuộc ý, chuyện tự chảy” (khép); “Lời nói chẳng mất tiền mua…” (p18–p20). Cảnh ngắt nhịp: BRK-03 (15 giây, p5), BRK-07 rehook (p11), BRK-04 Sai/Đúng (p25). Toàn màn “Khoan đã!” s10 (p7, p9). Bản cũ: w145/bak/how-to-introduce-yourself-in-english--w01.js.",
  "loop": {
    "open": "s01",
    "close": "s22"
  }
};
