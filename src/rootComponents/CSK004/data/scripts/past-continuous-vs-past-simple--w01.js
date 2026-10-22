// past-continuous-vs-past-simple--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "past-continuous-vs-past-simple--w01",
  "hook": "HOOK-19",
  "unit": {
    "audience": "grammar-a2-past-and-future",
    "slug": "past-continuous-vs-past-simple",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Đang làm gì thì chuyện gì xảy ra: dùng quá khứ tiếp diễn hay quá khứ đơn?",
    "series": "Kể chuyện hôm qua, hẹn chuyện ngày mai — ngữ pháp quá khứ và tương lai cho người học A2"
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
            "fit": "A",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "a-ring",
            "t": "text",
            "text": "Reng… reng…",
            "x": 60,
            "y": 120,
            "size": 110,
            "at": 0,
            "color": "coral"
          },
          {
            "id": "a-ph",
            "t": "illus",
            "name": "mobile-phone",
            "x": 640,
            "y": 110,
            "size": 160,
            "at": "l1:Ring"
          },
          {
            "id": "a-7",
            "t": "text",
            "text": "Thứ Hai · 7:00 sáng",
            "x": 70,
            "y": 300,
            "size": 56,
            "at": "l1:Monday"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Ring, ring. Monday, seven a.m. Somebody's phone, and nobody picks up.",
          "sub": "Reng, reng. Bảy giờ sáng thứ Hai. Điện thoại của ai đó reo, mà chẳng ai nghe.",
          "keys": [
            "chẳng ai nghe"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhac-chuong",
          "offsetMs": 0
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
            "at": "l2",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 900,
            "y": 110,
            "w": 780,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "shrug",
                  "face": "surprised"
                }
              ],
              "props": [
                "shower",
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
            "at": "l1",
            "caption": "Thứ Hai 7:00 · nhà Thảo",
            "icon": "shower"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "đang tắm",
            "x": 60,
            "y": 420,
            "size": 64,
            "at": "l3:shower",
            "hl": [
              {
                "text": "đang tắm",
                "at": "l3:shower"
              }
            ]
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "thì điện thoại reo",
            "x": 300,
            "y": 420,
            "size": 64,
            "at": "l3:rang",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đang yên đang lành…”",
            "x": 60,
            "y": 590,
            "size": 56,
            "at": "l4:peaceful",
            "color": "accent",
            "hl": [
              {
                "text": "Đang yên đang lành",
                "at": "l4:peaceful"
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
          "say": "Meet Thảo, an accountant in Hà Nội. That was her phone. And that was Sam, her foreign partner.",
          "sub": "Đây là Thảo, kế toán ở Hà Nội. Điện thoại của Thảo đấy. Người gọi là chị Sam, đối tác nước ngoài.",
          "keys": [
            "Thảo",
            "chị Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Oh no, I missed Sam's call!",
          "sub": "Thôi chết, lỡ cuộc gọi của chị Sam rồi!",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "She was taking a shower when the phone rang. One thing going on, another cutting in.",
          "sub": "Thảo đang tắm thì điện thoại reo. Một việc đang diễn ra, một việc chen ngang.",
          "keys": [
            "chen ngang"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Everything was peaceful, then suddenly. We say that a lot. English needs two tenses for it.",
          "sub": "“Đang yên đang lành” thì… Kiểu câu ta kể hằng ngày. Tiếng Anh cần hai thì cho nó.",
          "keys": [
            "Đang yên đang lành"
          ]
        }
      ],
      "ref": "intro,p5"
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
            "text": "Việc nào nền, việc nào chen?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:background",
            "hl": [
              {
                "text": "nền",
                "at": "l1:background"
              },
              {
                "text": "chen",
                "at": "l1:cuts"
              }
            ]
          },
          {
            "id": "b-vn",
            "t": "text",
            "text": "“Tôi đang nấu cơm thì mất điện”",
            "x": 2028,
            "y": 170,
            "size": 46,
            "at": "l2:cooking"
          },
          {
            "id": "b-x",
            "t": "text",
            "text": "→ một thì cho cả hai việc?",
            "x": 2068,
            "y": 245,
            "size": 44,
            "at": "l2:one",
            "color": "coral"
          },
          {
            "id": "b-f",
            "t": "text",
            "text": "was / were + V-ing",
            "x": 2028,
            "y": 350,
            "size": 60,
            "at": "l3:Was",
            "color": "accent",
            "hl": [
              {
                "text": "V-ing",
                "at": "l3:ing"
              }
            ]
          },
          {
            "id": "b-f1",
            "t": "text",
            "text": "I · he · she · it → was",
            "x": 2028,
            "y": 440,
            "size": 44,
            "at": "l4:was"
          },
          {
            "id": "b-f2",
            "t": "text",
            "text": "you · we · they → were",
            "x": 2028,
            "y": 505,
            "size": 44,
            "at": "l4:were"
          },
          {
            "id": "b-e",
            "t": "text",
            "text": "She was working.",
            "x": 2028,
            "y": 590,
            "size": 52,
            "at": "l5:working",
            "color": "accent",
            "hl": [
              {
                "text": "was working",
                "at": "l5:working"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Ví dụ: British Council LearnEnglish",
            "x": 2028,
            "y": 680,
            "size": 28,
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
          "say": "So in English, which action is the background, and which one cuts in?",
          "sub": "Vậy trong tiếng Anh, việc nào là nền, việc nào chen ngang?",
          "keys": [
            "việc nào là nền"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "I was cooking when the power went off. Many learners use one tense for both actions.",
          "sub": "“Tôi đang nấu cơm thì mất điện.” Nhiều người dùng một thì cho cả hai việc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The past continuous: was or were, plus a verb with ing.",
          "sub": "Quá khứ tiếp diễn: was hoặc were, cộng động từ thêm ing.",
          "keys": [
            "Quá khứ tiếp diễn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Was with I, he, she, it. Were with you, we, they.",
          "sub": "Was đi với I, he, she, it; were đi với you, we, they."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "British Council's example: she was working.",
          "sub": "Ví dụ của British Council: She was working. Cô ấy đang làm việc."
        }
      ],
      "ref": "intro,p1"
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
            "id": "b-u",
            "t": "text",
            "text": "đang diễn ra ở một lúc",
            "x": 2928,
            "y": 170,
            "size": 48,
            "at": "l1:progress",
            "hl": [
              {
                "text": "ở một lúc",
                "at": "l1:specific"
              }
            ]
          },
          {
            "id": "b-u2",
            "t": "text",
            "text": "hoặc kéo dài một lúc",
            "x": 2928,
            "y": 245,
            "size": 46,
            "at": "l1:while"
          },
          {
            "id": "b-q1",
            "t": "text",
            "text": "What were you doing",
            "x": 2928,
            "y": 340,
            "size": 46,
            "at": "l2:doing",
            "color": "accent",
            "hl": [
              {
                "text": "were you doing",
                "at": "l2:doing"
              }
            ]
          },
          {
            "id": "b-q2",
            "t": "text",
            "text": "this time last year?",
            "x": 2968,
            "y": 405,
            "size": 46,
            "at": "l2:year",
            "color": "accent"
          },
          {
            "id": "b-a",
            "t": "text",
            "text": "At eight o'clock last night,",
            "x": 2928,
            "y": 500,
            "size": 44,
            "at": "l3:eight"
          },
          {
            "id": "b-a2",
            "t": "text",
            "text": "I was having dinner.",
            "x": 2968,
            "y": 565,
            "size": 46,
            "at": "l3:dinner",
            "hl": [
              {
                "text": "was having",
                "at": "l3:having"
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
          "say": "It's for something in progress at a specific past time, or an activity that lasted a while.",
          "sub": "Thì này dùng cho việc đang diễn ra ở một thời điểm cụ thể trong quá khứ, hoặc kéo dài một lúc.",
          "keys": [
            "đang diễn ra"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The sample question: what were you doing this time last year?",
          "sub": "Câu hỏi mẫu: What were you doing this time last year? Giờ này năm ngoái bạn đang làm gì?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And an answer: at eight o'clock last night, I was having dinner.",
          "sub": "Và một câu trả lời: At eight o'clock last night, I was having dinner."
        }
      ],
      "ref": "p2"
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
            "at": "l6",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Trưa thứ Hai · Không did",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one",
            "hl": [
              {
                "text": "Không did",
                "at": "l1:back"
              }
            ]
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "online",
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
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
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
            "at": "l1:back",
            "caption": "Thứ Hai 12:00 · chị Sam gọi lại",
            "icon": "laptop"
          },
          {
            "id": "c-q",
            "t": "text",
            "text": "What were you doing?",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l2:doing",
            "hl": [
              {
                "text": "were you",
                "at": "l2:were"
              }
            ]
          },
          {
            "id": "c-n",
            "t": "text",
            "text": "I wasn't sleeping.",
            "x": 3996,
            "y": 260,
            "size": 50,
            "at": "l5:wasn't",
            "color": "coral",
            "hl": [
              {
                "text": "wasn't",
                "at": "l5:wasn't"
              }
            ]
          },
          {
            "id": "c-n2",
            "t": "text",
            "text": "He wasn't listening.",
            "x": 3996,
            "y": 345,
            "size": 46,
            "at": "l6:listening"
          },
          {
            "id": "c-r",
            "t": "text",
            "text": "phủ định: was/were + not",
            "x": 3996,
            "y": 440,
            "size": 44,
            "at": "l5:not"
          },
          {
            "id": "c-r2",
            "t": "text",
            "text": "câu hỏi: was/were lên trước",
            "x": 3996,
            "y": 510,
            "size": 44,
            "at": "l7:front"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Có was, were → không did",
            "x": 3996,
            "y": 620,
            "size": 50,
            "at": "l8:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "không did",
                "at": "l8:no did"
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
          "say": "Stop one, Monday noon. Sam calls back.",
          "sub": "Chặng một, trưa thứ Hai. Chị Sam gọi lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Thảo! What were you doing at seven? Were you sleeping?",
          "sub": "Thảo ơi! Bảy giờ sáng em đang làm gì thế? Đang ngủ à?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "No, I wasn't. I was taking a shower. Sorry!",
          "sub": "No, I wasn't. I was taking a shower. Em xin lỗi chị!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "No problem!",
          "sub": "Không sao đâu em!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Did you notice? No did anywhere. I wasn't sleeping: just add not.",
          "sub": "Bạn để ý chưa? Chẳng có did nào. I wasn't sleeping: chỉ thêm not.",
          "keys": [
            "chỉ thêm not"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "British Council: I tried to give him some advice, but he wasn't listening.",
          "sub": "British Council: I tried to give him some advice, but he wasn't listening."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Questions move was or were to the front: what were you doing?",
          "sub": "Câu hỏi đưa was, were lên trước chủ ngữ: What were you doing?"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: with was and were, no did, and the verb keeps its ing.",
          "sub": "Rút ra: có was, were thì không dùng did, và động từ giữ nguyên đuôi ing.",
          "keys": [
            "không dùng did"
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
            "text": "② Tối thứ Ba · Mất điện",
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
              "set": "kitchen",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "shrug",
                  "face": "surprised"
                }
              ],
              "props": [
                "cooked-rice",
                "candle"
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
            "at": "l1:Dũng",
            "caption": "Thứ Ba 19:00 · bếp nhà Dũng",
            "icon": "candle"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "B1 · nấu cơm | mất điện",
            "x": 5964,
            "y": 170,
            "size": 46,
            "at": "l3:Split"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "B2 · kéo dài: nấu cơm",
            "x": 5964,
            "y": 250,
            "size": 46,
            "at": "l4:lasting",
            "hl": [
              {
                "text": "kéo dài",
                "at": "l4:lasting"
              }
            ]
          },
          {
            "id": "d-2e",
            "t": "text",
            "text": "I was cooking dinner",
            "x": 6004,
            "y": 320,
            "size": 46,
            "at": "l4:cooking",
            "color": "accent",
            "hl": [
              {
                "text": "was cooking",
                "at": "l4:cooking"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "B3 · chen vào: mất điện",
            "x": 5964,
            "y": 400,
            "size": 46,
            "at": "l5:cuts",
            "color": "coral"
          },
          {
            "id": "d-3e",
            "t": "text",
            "text": "the power went off",
            "x": 6004,
            "y": 470,
            "size": 46,
            "at": "l5:went",
            "color": "coral",
            "hl": [
              {
                "text": "went off",
                "at": "l5:went"
              }
            ]
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "B4 · nối bằng when",
            "x": 5964,
            "y": 550,
            "size": 46,
            "at": "l6:when",
            "hl": [
              {
                "text": "when",
                "at": "l6:when"
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
          "say": "Stop two, Tuesday evening. Meet Dũng, the company's delivery guy, standing in a very dark kitchen.",
          "sub": "Chặng hai, tối thứ Ba. Đây là Dũng, anh giao hàng của công ty, đang đứng trong một gian bếp tối om.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I cook dinner, and the power go off! I cooked when the power was going off?",
          "sub": "I cook dinner, and the power go off! I cooked when the power was going off?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Let's untangle it in four steps. Split the two actions: cooking, and the power cut.",
          "sub": "Gỡ bốn bước. Bước một, tách hai việc: nấu cơm, và mất điện."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Which one was lasting? The cooking. So: I was cooking dinner.",
          "sub": "Bước hai, việc nào đang kéo dài? Nấu cơm. Vậy: I was cooking dinner.",
          "keys": [
            "đang kéo dài"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The power cut cuts in, so past simple: the power went off.",
          "sub": "Bước ba, mất điện là việc chen vào, dùng quá khứ đơn: the power went off."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Join them with when.",
          "sub": "Bước bốn, nối bằng when."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p5,p6"
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
          }
        ],
        "items": [
          {
            "id": "d-ok",
            "t": "text",
            "text": "→ … when the power went off.",
            "x": 5964,
            "y": 615,
            "size": 40,
            "at": "l1:power",
            "color": "accent",
            "hl": [
              {
                "text": "went off",
                "at": "l1:went"
              }
            ]
          },
          {
            "id": "d-ln",
            "t": "line",
            "pts": [
              [
                6864,
                715
              ],
              [
                7584,
                715
              ]
            ],
            "at": "l2:band",
            "stroke": 8
          },
          {
            "id": "d-seg",
            "t": "box",
            "x": 6904,
            "y": 700,
            "w": 600,
            "h": 30,
            "at": "l2:band",
            "color": "accent",
            "stroke": 6
          },
          {
            "id": "d-pt",
            "t": "line",
            "pts": [
              [
                7204,
                665
              ],
              [
                7204,
                765
              ]
            ],
            "at": "l2:dot",
            "stroke": 10,
            "color": "coral"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "dài: was + V-ing · ngắn: V2",
            "x": 5964,
            "y": 690,
            "size": 40,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "V2",
                "at": "l3:simple"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "I was cooking dinner when the power went off.",
          "sub": "I was cooking dinner when the power went off.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "On a line: the long action is a band, the short one is a dot that lands on it.",
          "sub": "Trên dòng thời gian: việc dài là một dải, việc ngắn là một chấm rơi vào giữa dải.",
          "keys": [
            "một chấm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: the long action takes was or were plus ing. The one that cuts in takes past simple.",
          "sub": "Rút ra: việc kéo dài dùng was, were + V-ing, việc chen vào dùng quá khứ đơn.",
          "keys": [
            "việc chen vào dùng quá khứ đơn"
          ]
        }
      ],
      "ref": "p6,p7"
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
            "text": "③ Thứ Tư · When hay while?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-w",
            "t": "text",
            "text": "while + việc đang diễn ra",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l2:while",
            "hl": [
              {
                "text": "while",
                "at": "l2:while"
              }
            ]
          },
          {
            "id": "e-we",
            "t": "text",
            "text": "While I was studying,",
            "x": 7972,
            "y": 250,
            "size": 46,
            "at": "l3:studying",
            "color": "accent"
          },
          {
            "id": "e-we2",
            "t": "text",
            "text": "I suddenly felt sleepy.",
            "x": 8012,
            "y": 315,
            "size": 46,
            "at": "l3:sleepy"
          },
          {
            "id": "e-n",
            "t": "text",
            "text": "when + việc ngắn chen vào",
            "x": 7932,
            "y": 410,
            "size": 50,
            "at": "l4:when",
            "hl": [
              {
                "text": "when",
                "at": "l4:when"
              }
            ]
          },
          {
            "id": "e-ne",
            "t": "text",
            "text": "…when the power went off.",
            "x": 7972,
            "y": 490,
            "size": 46,
            "at": "l4:power",
            "color": "coral"
          },
          {
            "id": "e-c",
            "t": "text",
            "text": "Vế while/when đứng đầu → dấu phẩy",
            "x": 8832,
            "y": 170,
            "size": 40,
            "at": "l6:comma",
            "hl": [
              {
                "text": "dấu phẩy",
                "at": "l6:comma"
              }
            ]
          },
          {
            "id": "e-c1",
            "t": "text",
            "text": "While I was studying, I felt sleepy.",
            "x": 8832,
            "y": 250,
            "size": 38,
            "at": "l6:comma",
            "color": "accent"
          },
          {
            "id": "e-c2",
            "t": "text",
            "text": "I felt sleepy while I was studying.",
            "x": 8832,
            "y": 330,
            "size": 38,
            "at": "l7:after"
          },
          {
            "id": "e-c3",
            "t": "text",
            "text": "→ đứng sau: thường không phẩy",
            "x": 8832,
            "y": 400,
            "size": 40,
            "at": "l7:need",
            "color": "muted"
          },
          {
            "id": "e-ic",
            "t": "illus",
            "name": "sleeping-face",
            "x": 9222,
            "y": 500,
            "size": 180,
            "at": "l3:sleepy"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, Wednesday. Two linking words: while, and when.",
          "sub": "Chặng ba, thứ Tư. Hai chữ nối hay gặp: while và when."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In British Council's examples, while comes before the action in progress.",
          "sub": "Trong các ví dụ của British Council, while đứng trước việc đang diễn ra.",
          "keys": [
            "while đứng trước việc đang diễn ra"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "While I was studying, I suddenly felt sleepy.",
          "sub": "While I was studying, I suddenly felt sleepy. Đang học thì bỗng buồn ngủ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "When usually comes before the short action that cuts in: when the power went off.",
          "sub": "When thường đứng trước việc ngắn chen vào: when the power went off.",
          "keys": [
            "việc ngắn chen vào"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The two halves can swap places, and the meaning stays.",
          "sub": "Hai vế đổi chỗ cho nhau được, nghĩa không đổi."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "When the while or when half comes first, put a comma after it.",
          "sub": "Khi vế có while hay when đứng đầu câu, đặt dấu phẩy sau vế đó.",
          "keys": [
            "đặt dấu phẩy"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "When it comes after, you usually don't need one.",
          "sub": "Khi nó đứng sau thì thường không cần dấu phẩy."
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s08",
      "module": "BRK-07",
      "data": {
        "question": "Thảo viết “While the phone rang…” — ổn không?",
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
          "say": "Thảo just wrote: while the phone rang. Okay?",
          "sub": "Thảo vừa viết: While the phone rang. Ổn không?",
          "keys": [
            "Ổn không?"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s09",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Năm 20:00 · email chị Sam",
        "actors": [
          {
            "id": "thao",
            "side": "left",
            "pose": "hold"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "While the phone rang, I was taking a shower",
          "why": "While nên đứng trước việc kéo dài (đang tắm), không phải việc ngắn.",
          "rule": "while + việc kéo dài"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Read it to me!",
          "sub": "Đọc anh nghe nào!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "While the phone rang, I was taking a shower.",
          "sub": "While the phone rang, I was taking a shower.",
          "face": "happy",
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
          "say": "The shower is long, the ring is short. While goes with the long one.",
          "sub": "Tắm là việc dài, chuông reo là việc ngắn. While phải đi với việc kéo dài.",
          "keys": [
            "While phải đi với việc kéo dài"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "While I was taking a shower, the phone rang.",
          "sub": "While I was taking a shower, the phone rang.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Or when, before the short one.",
          "sub": "Hoặc dùng when trước việc ngắn.",
          "phase": "redo"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p10"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Tối thứ Năm · Sửa email",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-x",
            "t": "text",
            "text": "While the phone rang, I was…",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l1:rang",
            "color": "muted"
          },
          {
            "id": "f-xx",
            "t": "strike",
            "over": "f-x",
            "at": "l2:long"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "While I was taking a shower,",
            "x": 60,
            "y": 1360,
            "size": 46,
            "at": "l2:shower",
            "color": "accent",
            "hl": [
              {
                "text": "While I was taking",
                "at": "l2:shower"
              }
            ]
          },
          {
            "id": "f-1b",
            "t": "text",
            "text": "the phone rang.",
            "x": 100,
            "y": 1430,
            "size": 46,
            "at": "l2:rang"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "I was taking a shower",
            "x": 60,
            "y": 1530,
            "size": 46,
            "at": "l3:when"
          },
          {
            "id": "f-2b",
            "t": "text",
            "text": "when the phone rang.",
            "x": 100,
            "y": 1600,
            "size": 46,
            "at": "l3:short",
            "color": "accent",
            "hl": [
              {
                "text": "when the phone rang",
                "at": "l3:short"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "while: đang diễn ra · when: chen ngang",
            "x": 60,
            "y": 1720,
            "size": 42,
            "at": "l4:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "chen ngang",
                "at": "l4:interruption"
              }
            ]
          },
          {
            "id": "f-ic",
            "t": "illus",
            "name": "envelope",
            "x": 1300,
            "y": 1310,
            "size": 220,
            "at": "l1:email"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, Thursday night. Thảo fixes the email line: while the phone rang, out.",
          "sub": "Chặng bốn, tối thứ Năm. Thảo sửa dòng email: While the phone rang, gạch đi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "While goes with the long action: while I was taking a shower, the phone rang.",
          "sub": "While đi với việc kéo dài: While I was taking a shower, the phone rang."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Or when before the short one: I was taking a shower when the phone rang.",
          "sub": "Hoặc when trước việc ngắn: I was taking a shower when the phone rang."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: while goes with the action in progress, when often goes with the interruption.",
          "sub": "Rút ra: while đi với việc đang diễn ra, when hay đi với việc chen ngang.",
          "keys": [
            "when hay đi với việc chen ngang"
          ]
        }
      ],
      "ref": "p10,p11"
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
            "text": "⑤ Thứ Sáu · Đổi thì, đổi nghĩa",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five",
            "hl": [
              {
                "text": "đổi nghĩa",
                "at": "l1:carefully"
              }
            ]
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "When the guests arrived,",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l2:guests"
          },
          {
            "id": "g-1b",
            "t": "text",
            "text": "Jane was cooking dinner.",
            "x": 2068,
            "y": 1325,
            "size": 46,
            "at": "l2:cooking",
            "color": "accent",
            "hl": [
              {
                "text": "was cooking",
                "at": "l2:cooking"
              }
            ]
          },
          {
            "id": "g-1c",
            "t": "text",
            "text": "→ nấu TRƯỚC khi khách đến",
            "x": 2068,
            "y": 1395,
            "size": 42,
            "at": "l3:before"
          },
          {
            "id": "g-l1",
            "t": "line",
            "pts": [
              [
                2928,
                1360
              ],
              [
                3648,
                1360
              ]
            ],
            "at": "l3:before",
            "stroke": 7
          },
          {
            "id": "g-s1",
            "t": "box",
            "x": 2968,
            "y": 1345,
            "w": 560,
            "h": 30,
            "at": "l3:before",
            "color": "accent",
            "stroke": 6
          },
          {
            "id": "g-p1",
            "t": "line",
            "pts": [
              [
                3268,
                1290
              ],
              [
                3268,
                1430
              ]
            ],
            "at": "l3:arrived",
            "stroke": 9,
            "color": "coral"
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "When the guests arrived,",
            "x": 2028,
            "y": 1510,
            "size": 44,
            "at": "l4:guests"
          },
          {
            "id": "g-2b",
            "t": "text",
            "text": "Jane cooked dinner.",
            "x": 2068,
            "y": 1575,
            "size": 46,
            "at": "l4:cooked",
            "color": "coral",
            "hl": [
              {
                "text": "cooked",
                "at": "l4:cooked"
              }
            ]
          },
          {
            "id": "g-2c",
            "t": "text",
            "text": "→ khách đến rồi mới nấu",
            "x": 2068,
            "y": 1645,
            "size": 42,
            "at": "l5:first"
          },
          {
            "id": "g-l2",
            "t": "line",
            "pts": [
              [
                2928,
                1610
              ],
              [
                3648,
                1610
              ]
            ],
            "at": "l5:first",
            "stroke": 7
          },
          {
            "id": "g-p2",
            "t": "line",
            "pts": [
              [
                3068,
                1540
              ],
              [
                3068,
                1680
              ]
            ],
            "at": "l5:first",
            "stroke": 9,
            "color": "coral"
          },
          {
            "id": "g-s2",
            "t": "box",
            "x": 3128,
            "y": 1595,
            "w": 440,
            "h": 30,
            "at": "l5:began",
            "stroke": 6
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Cặp câu: British Council LearnEnglish",
            "x": 2028,
            "y": 1740,
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
          "say": "Stop five, Friday. Sam arrives tomorrow, so Thảo studies one pair of sentences very carefully.",
          "sub": "Chặng năm, thứ Sáu. Mai chị Sam tới, nên Thảo học kỹ một cặp câu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "British Council: when the guests arrived, Jane was cooking dinner.",
          "sub": "British Council: When the guests arrived, Jane was cooking dinner."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Jane started cooking before the guests arrived.",
          "sub": "Nghĩa là Jane đã bắt đầu nấu trước khi khách đến.",
          "keys": [
            "trước khi khách đến"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Now: when the guests arrived, Jane cooked dinner.",
          "sub": "Còn: When the guests arrived, Jane cooked dinner."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The guests came first, and then Jane began to cook.",
          "sub": "Khách đến trước, rồi Jane mới bắt đầu nấu.",
          "keys": [
            "rồi Jane mới bắt đầu nấu"
          ]
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-m",
            "t": "text",
            "text": "⚖️ “Tiếp diễn chỉ nghe hay hơn”?",
            "x": 2928,
            "y": 1710,
            "size": 40,
            "at": "l1:nicer",
            "color": "muted"
          },
          {
            "id": "g-mx",
            "t": "strike",
            "over": "g-m",
            "at": "l2:order"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Chọn thì = chọn thứ tự",
            "x": 2928,
            "y": 1780,
            "size": 48,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "chọn thứ tự",
                "at": "l3:order"
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
          "say": "Many think the past continuous is just a longer, nicer past simple. Use either one.",
          "sub": "Nhiều người nghĩ quá khứ tiếp diễn chỉ là cách nói dài hơn, hay hơn của quá khứ đơn, dùng thì nào cũng được.",
          "keys": [
            "dài hơn, hay hơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. Change was cooking to cooked, and the listener hears a different order. Wrong tense, wrong story.",
          "sub": "Không phải. Đổi was cooking thành cooked là người nghe hiểu thứ tự khác. Kể sai thì, hiểu sai trình tự.",
          "keys": [
            "hiểu sai trình tự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: choosing a tense means choosing the order of events, not a nicer sound.",
          "sub": "Rút ra: chọn thì là chọn thứ tự xảy ra, không phải chọn cho câu nghe hay.",
          "keys": [
            "chọn thứ tự xảy ra"
          ]
        }
      ],
      "ref": "p13,p14"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Bảy · Khuôn kể chuyện",
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
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "motorcycle",
                "dog",
                "umbrella-with-rain-drops"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:Dũng",
            "caption": "Thứ Bảy 10:00 · Dũng kể chuyện",
            "icon": "motorcycle"
          },
          {
            "id": "h-n",
            "t": "text",
            "text": "NỀN: was / were + V-ing",
            "x": 3996,
            "y": 1260,
            "size": 48,
            "at": "l4:background",
            "color": "accent",
            "hl": [
              {
                "text": "NỀN",
                "at": "l4:background"
              }
            ]
          },
          {
            "id": "h-n1",
            "t": "text",
            "text": "I was riding my motorbike…",
            "x": 4036,
            "y": 1335,
            "size": 42,
            "at": "l4:riding"
          },
          {
            "id": "h-n2",
            "t": "text",
            "text": "It was raining.",
            "x": 4036,
            "y": 1395,
            "size": 42,
            "at": "l4:raining"
          },
          {
            "id": "h-v1",
            "t": "text",
            "text": "VIỆC: quá khứ đơn",
            "x": 3996,
            "y": 1490,
            "size": 48,
            "at": "l5:events",
            "color": "coral",
            "hl": [
              {
                "text": "VIỆC",
                "at": "l5:events"
              }
            ]
          },
          {
            "id": "h-v2",
            "t": "text",
            "text": "a dog ran · I stopped",
            "x": 4036,
            "y": 1565,
            "size": 42,
            "at": "l5:ran"
          },
          {
            "id": "h-v3",
            "t": "text",
            "text": "the dog ran away",
            "x": 4036,
            "y": 1625,
            "size": 42,
            "at": "l5:away"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Mở bằng cảnh, rồi kể việc",
            "x": 3996,
            "y": 1730,
            "size": 48,
            "at": "l6:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Mở bằng cảnh",
                "at": "l6:scene"
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
          "say": "Stop six, Saturday. Sam has landed, and Dũng tells her a story. Watch his tenses.",
          "sub": "Chặng sáu, thứ Bảy. Chị Sam đã tới, Dũng kể chuyện cho chị nghe. Để ý thì của Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Last Saturday, I was riding my motorbike to work. It was raining.",
          "sub": "Last Saturday, I was riding my motorbike to work. It was raining.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Suddenly a dog ran into the road. I stopped quickly, and the dog ran away.",
          "sub": "Suddenly a dog ran into the road. I stopped quickly, and the dog ran away.",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The first two sentences are the background: was riding, was raining.",
          "sub": "Hai câu đầu là nền: was riding, was raining.",
          "keys": [
            "là nền"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Then a chain of events in the past simple: ran, stopped, ran away.",
          "sub": "Sau đó là chuỗi việc xảy ra, ở quá khứ đơn: ran, stopped, ran away."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: open with the scene in the continuous, then tell each event in the past simple.",
          "sub": "Rút ra: mở bằng khung cảnh ở thì tiếp diễn, rồi kể từng việc bằng quá khứ đơn.",
          "keys": [
            "mở bằng khung cảnh"
          ]
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s14",
      "module": "BRK-06",
      "data": {
        "title": "Đang yên đang lành… thì",
        "items": [
          {
            "illus": "shower",
            "text": "Đang tắm"
          },
          {
            "illus": "cooked-rice",
            "text": "Đang nấu cơm"
          },
          {
            "illus": "motorcycle",
            "text": "Đang chạy xe"
          },
          {
            "illus": "books",
            "text": "Đang học"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Showering, cooking, riding, studying.",
          "sub": "Đang tắm, đang nấu cơm, đang chạy xe, đang học."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Then something cuts in.",
          "sub": "Thì một việc chen ngang.",
          "keys": [
            "chen ngang"
          ]
        }
      ],
      "ref": "p5,p8"
    },
    {
      "id": "s15",
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
            "text": "⑦ Thứ Hai · 7:00, lại reo",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:rings"
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
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage",
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
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Monday",
            "caption": "Thứ Hai tuần sau 7:00 · nhà Thảo",
            "icon": "mobile-phone"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "I was making coffee",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:making",
            "color": "accent",
            "hl": [
              {
                "text": "was making",
                "at": "l2:making"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "when you called.",
            "x": 6004,
            "y": 1335,
            "size": 50,
            "at": "l2:called",
            "color": "coral",
            "hl": [
              {
                "text": "called",
                "at": "l2:called"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Làm ngay: kể một lần bị ngắt",
            "x": 5964,
            "y": 1470,
            "size": 42,
            "at": "l5:turn",
            "color": "accent"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "trong ba câu",
            "x": 6004,
            "y": 1535,
            "size": 42,
            "at": "l5:three"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Đang yên đang lành…”",
            "x": 5964,
            "y": 1650,
            "size": 54,
            "at": "l4:peaceful",
            "color": "accent",
            "hl": [
              {
                "text": "Đang yên đang lành",
                "at": "l4:peaceful"
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
          "say": "Next Monday, seven a.m. Same house, and the phone rings again. This time, Thảo picks up.",
          "sub": "Thứ Hai tuần sau, bảy giờ sáng. Vẫn căn nhà ấy, điện thoại lại reo. Lần này Thảo nghe máy.",
          "keys": [
            "Thảo nghe máy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Morning, Sam! I was making coffee when you called. Perfect timing. Got it.",
          "sub": "Morning, Sam! I was making coffee when you called. Chị gọi đúng lúc ghê. Got it.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Background in the continuous. The call cuts in, past simple.",
          "sub": "Nền ở thì tiếp diễn. Cuộc gọi chen ngang, quá khứ đơn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Everything was peaceful, then the phone rang. Now Thảo can say it in English.",
          "sub": "“Đang yên đang lành” thì điện thoại reo. Giờ Thảo nói được bằng tiếng Anh.",
          "keys": [
            "nói được bằng tiếng Anh"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Your turn: tell one interruption from this week, in three sentences.",
          "sub": "Đến lượt bạn: kể lại một lần bị gián đoạn trong tuần này, gói trong ba câu.",
          "keys": [
            "ba câu"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhac-chuong",
          "offsetMs": 600
        }
      ],
      "ref": "p7,outro"
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
            "at": "l1:end",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "G",
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
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: nền và chen ngang",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:week"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7554,
            "y": 40,
            "at": "l2:paints"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1650,
            "y": 1130,
            "at": "l3:While"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3618,
            "y": 1130,
            "at": "l4:Changing"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, after a whole week of interruptions, here's the picture.",
          "sub": "Tóm lại, sau cả một tuần bị ngắt quãng, đây là bức tranh.",
          "keys": [
            "bức tranh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The past continuous paints the scene. The past simple tells what happened, interruptions included.",
          "sub": "Quá khứ tiếp diễn vẽ khung cảnh, quá khứ đơn kể việc xảy ra, kể cả việc chen ngang."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "While usually goes with the long action, when with the short one.",
          "sub": "While thường đi với việc kéo dài, when hay đi với việc ngắn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Changing the tense changes the order of the story.",
          "sub": "Đổi thì là đổi thứ tự câu chuyện."
        }
      ],
      "ref": "p7,p11,p14,outro"
    },
    {
      "id": "s17",
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
            "w": 44,
            "h": 44,
            "at": "l2:scene",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1242,
            "size": 56,
            "at": "l2:scene+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "mở bằng was/were + V-ing?",
            "x": 7997,
            "y": 1252,
            "size": 42,
            "at": "l2:scene+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1345,
            "w": 44,
            "h": 44,
            "at": "l2:simple",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1327,
            "size": 56,
            "at": "l2:simple+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "chen ngang: quá khứ đơn?",
            "x": 7997,
            "y": 1337,
            "size": 42,
            "at": "l2:simple+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1430,
            "w": 44,
            "h": 44,
            "at": "l3:while",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1412,
            "size": 56,
            "at": "l3:while+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "while trước việc kéo dài?",
            "x": 7997,
            "y": 1422,
            "size": 42,
            "at": "l3:while+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1515,
            "w": 44,
            "h": 44,
            "at": "l3:did",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1497,
            "size": 56,
            "at": "l3:did+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "was, were: bỏ did?",
            "x": 7997,
            "y": 1507,
            "size": 42,
            "at": "l3:did+200"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: used to, would",
            "x": 7932,
            "y": 1650,
            "size": 46,
            "at": "l4:Next",
            "color": "accent"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; cách dùng có thể khác theo ngữ cảnh — tra từ điển hoặc hỏi giáo viên. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1780,
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
          "say": "Four checks after every story you tell.",
          "sub": "Soát bốn ô sau mỗi đoạn kể.",
          "keys": [
            "bốn ô"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Does it open with a scene in was or were plus ing? Is the interruption in past simple?",
          "sub": "Câu mở đầu có khung cảnh bằng was, were + V-ing chưa? Việc chen ngang đã ở quá khứ đơn chưa?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Is while before the long action, when before the short? And no did with was or were?",
          "sub": "While đứng trước việc kéo dài, when trước việc ngắn chưa? Câu với was, were đã bỏ did chưa?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "These two tenses tell one specific time. For old habits, like going fishing as a child, next up: used to and would.",
          "sub": "Hai thì này kể một lần cụ thể. Còn thói quen hồi xưa, như hồi nhỏ hay đi câu cá, là bài tiếp theo: used to và would."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p17,p18,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "You want to join I was driving and my phone rang, which word fits before my phone rang?",
        "options": [
          "When, because my phone rang is the short action that interrupts",
          "While, since the ringing was the long background of the drive",
          "So, as the call was a result of being in the car"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "mobile-phone",
        "why": "Điện thoại reo là việc ngắn chen vào. When hay đứng trước việc chen ngang."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You want to join I was driving and my phone rang, which word fits before my phone rang?",
          "sub": "Bạn muốn nối I was driving và my phone rang, chữ nào hợp đứng trước my phone rang?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "When, because my phone rang is the short action that interrupts.",
          "sub": "When, vì điện thoại reo là việc ngắn chen ngang."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "I was driving when my phone rang.",
          "sub": "I was driving when my phone rang."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[36]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Bạn đã xem xong. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "You were watching this video when the questions appeared. Try all forty below.",
          "sub": "Bạn đang xem video thì bốn mươi câu hỏi hiện ra. Thử hết bên dưới nhé.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể #144. HOOK-19 (âm thanh trước hình): tiếng chuông điện thoại (nhac-chuong) trên bảng chỉ có chữ “Reng… reng…”, rồi khung ảnh Thảo vừa tắm xong, lỡ cuộc gọi của chị Sam. Dòng thời gian: một tuần của Thảo (thứ Hai 7:00 → ① trưa thứ Hai chị Sam gọi lại: không did → ② tối thứ Ba Dũng nấu cơm mất điện, bốn bước → ③ thứ Tư when/while, dấu phẩy → “Khoan đã!” thứ Năm 20:00 email “While the phone rang…” → ④ sửa email → ⑤ thứ Sáu Jane: đổi thì là đổi nghĩa → ⑥ thứ Bảy Dũng kể chuyện con chó → thứ Hai tuần sau 7:00 chuông lại reo, Thảo nghe máy: khép vòng). Nhân vật: Thảo (giữ tên p10), chị Sam, Dũng (= anh Tuấn p6, anh Hùng p16) — w145/_series/grammar-a2-past-and-future.md. BRK-07 (rehook), BRK-06 (montage “Đang yên đang lành… thì”). Thành ngữ: “Đang yên đang lành”.",
  "loop": {
    "open": "s01",
    "close": "s15"
  }
};
