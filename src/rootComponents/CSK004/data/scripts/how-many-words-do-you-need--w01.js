// how-many-words-do-you-need--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-many-words-do-you-need--w01",
  "hook": "HOOK-20",
  "unit": {
    "audience": "beginner-vocabulary-learners",
    "slug": "how-many-words-do-you-need",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Cần biết bao nhiêu từ để nói chuyện, xem phim, đọc báo?",
    "series": "Học từ vựng không quên — cách chọn từ, ghi nhớ và dùng được, cho người mới học ngoại ngữ"
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
            "id": "a-q",
            "t": "text",
            "text": "Cần bao nhiêu từ?",
            "x": 60,
            "y": 40,
            "size": 72,
            "at": "l1:How many",
            "hl": [
              {
                "text": "bao nhiêu từ",
                "at": "l1:need"
              }
            ]
          },
          {
            "id": "a-n0",
            "t": "text",
            "text": "1.000–2.000",
            "x": 60,
            "y": 170,
            "size": 76,
            "at": "l2:talk",
            "color": "accent"
          },
          {
            "id": "a-w0",
            "t": "text",
            "text": "→ nói chuyện",
            "x": 80,
            "y": 270,
            "size": 50,
            "at": "l2:talk+300"
          },
          {
            "id": "a-n1",
            "t": "text",
            "text": "~6.000 họ từ",
            "x": 900,
            "y": 170,
            "size": 76,
            "at": "l3:films",
            "color": "accent"
          },
          {
            "id": "a-w1",
            "t": "text",
            "text": "→ xem phim",
            "x": 920,
            "y": 270,
            "size": 50,
            "at": "l3:films+300"
          },
          {
            "id": "a-n2",
            "t": "text",
            "text": "8.000–9.000",
            "x": 60,
            "y": 400,
            "size": 76,
            "at": "l4:novels",
            "color": "accent"
          },
          {
            "id": "a-w2",
            "t": "text",
            "text": "→ báo, tiểu thuyết",
            "x": 80,
            "y": 500,
            "size": 50,
            "at": "l4:novels+300"
          },
          {
            "id": "a-n3",
            "t": "text",
            "text": "~120",
            "x": 900,
            "y": 400,
            "size": 76,
            "at": "l5:trip",
            "color": "accent"
          },
          {
            "id": "a-w3",
            "t": "text",
            "text": "→ sắp đi du lịch",
            "x": 920,
            "y": 500,
            "size": 50,
            "at": "l5:trip+300"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: Paul Nation (2014), What do you need to know to learn a foreign language? — ĐH Victoria Wellington",
            "x": 60,
            "y": 720,
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
          "say": "How many words do you need? Here is the answer first.",
          "sub": "Bạn cần bao nhiêu từ? Đáp án trước nhé.",
          "keys": [
            "bao nhiêu từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One to two thousand common words, to talk.",
          "sub": "Một đến hai nghìn từ thông dụng: để nói chuyện.",
          "keys": [
            "để nói chuyện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "About six thousand word families, for films.",
          "sub": "Khoảng sáu nghìn họ từ: để xem phim."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Eight to nine thousand, for newspapers and novels.",
          "sub": "Tám đến chín nghìn: để đọc báo, tiểu thuyết."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And for a trip soon: about a hundred and twenty survival words.",
          "sub": "Còn sắp đi du lịch: khoảng một trăm hai mươi từ “sinh tồn”.",
          "keys": [
            "sinh tồn"
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
            "x": 880,
            "y": 120,
            "w": 800,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "books",
                "speech-balloon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "caption": "Thứ Hai tuần 1 · 7:30 giảng đường",
            "icon": "school"
          },
          {
            "id": "a-more",
            "t": "text",
            "text": "“Càng nhiều càng tốt”?",
            "x": 60,
            "y": 580,
            "size": 44,
            "at": "l3:more",
            "color": "muted"
          },
          {
            "id": "a-morex",
            "t": "strike",
            "over": "a-more",
            "at": "l3:start"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đi một ngày đàng…”",
            "x": 60,
            "y": 652,
            "size": 44,
            "at": "l5:day",
            "color": "accent",
            "hl": [
              {
                "text": "một ngày đàng",
                "at": "l5:day"
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
          "say": "Meet Lan, first week of university. Monday, seven thirty, a lecture hall.",
          "sub": "Đây là Lan, tuần đầu năm nhất. Thứ Hai, bảy rưỡi sáng, ở giảng đường.",
          "keys": [
            "tuần đầu năm nhất"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "How many words before I dare to speak English? Everyone says, the more the better!",
          "sub": "Phải biết bao nhiêu từ mới dám nói tiếng Anh? Ai cũng bảo: càng nhiều càng tốt!",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The more the better. True, and useless. Like a map that just says: walk further. Where do you start?",
          "sub": "Càng nhiều càng tốt. Đúng, mà vô dụng. Như tấm bản đồ chỉ ghi “đi xa nữa”. Bắt đầu từ đâu?",
          "keys": [
            "Bắt đầu từ đâu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Her cousin Thảo has a problem too: a trip abroad in four weeks.",
          "sub": "Chị họ của Lan, Thảo, cũng có chuyện: bốn tuần nữa đi du lịch nước ngoài."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our saying goes: travel one day, learn a basket of wisdom. Let's travel these four weeks.",
          "sub": "Ông bà dặn: “Đi một ngày đàng, học một sàng khôn.” Đi cùng bốn tuần này nhé.",
          "keys": [
            "Đi một ngày đàng, học một sàng khôn"
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
            "text": "Bao nhiêu từ là đủ?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:enough",
            "hl": [
              {
                "text": "đủ",
                "at": "l1:enough"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: càng nhiều càng tốt",
            "x": 2028,
            "y": 170,
            "size": 48,
            "at": "l2:more",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:but"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: mốc theo mục tiêu",
            "x": 2028,
            "y": 260,
            "size": 54,
            "at": "l2:goal",
            "color": "accent",
            "hl": [
              {
                "text": "mốc theo mục tiêu",
                "at": "l2:target"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Ba chỗ hay hiểu sai:",
            "x": 2928,
            "y": 170,
            "size": 50,
            "at": "l3:three",
            "hl": [
              {
                "text": "hiểu sai",
                "at": "l3:wrong"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "• “từ” ở đây là họ từ",
            "x": 2928,
            "y": 250,
            "size": 46,
            "at": "l4:word"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "• hiểu bao nhiêu % là đủ",
            "x": 2928,
            "y": 325,
            "size": 46,
            "at": "l4:percent"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "• chờ đủ từ mới nói",
            "x": 2928,
            "y": 400,
            "size": 46,
            "at": "l4:wait"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how many words are enough?",
          "sub": "Vậy bao nhiêu từ thì đủ?",
          "keys": [
            "đủ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not the more the better, but a target that matches your goal.",
          "sub": "Không phải càng nhiều càng tốt, mà là một mốc khớp với mục tiêu của mình.",
          "keys": [
            "mốc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sounds simple. But there are three things people get wrong.",
          "sub": "Nghe đơn giản. Nhưng có ba chỗ hay hiểu sai."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "What a word means here, how many percent is enough, and the wait before speaking.",
          "sub": "“Từ” ở đây là gì, hiểu bao nhiêu phần trăm là đủ, và việc chờ đủ từ mới dám nói."
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Bốn tuần của Lan và Thảo",
        "points": [
          {
            "label": "Tuần 1",
            "sub": "Họ từ · dám nói",
            "illus": "speech-balloon"
          },
          {
            "label": "Tuần 2",
            "sub": "Đêm xem phim",
            "illus": "clapper-board"
          },
          {
            "label": "Tuần 3",
            "sub": "Bộ từ sinh tồn",
            "illus": "luggage"
          },
          {
            "label": "Tuần 4",
            "sub": "Chọn mốc",
            "illus": "bullseye"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Four weeks, two goals.",
          "sub": "Bốn tuần, hai mục tiêu.",
          "keys": [
            "hai mục tiêu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Lan wants to speak. Thảo wants to travel.",
          "sub": "Lan muốn nói. Thảo muốn đi."
        }
      ],
      "ref": "p20"
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
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Tuần 1 · Họ từ là gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-root",
            "t": "box",
            "x": 3996,
            "y": 180,
            "w": 300,
            "h": 110,
            "at": "l2:base",
            "stroke": 6,
            "color": "accent"
          },
          {
            "id": "c-r",
            "t": "text",
            "text": "help",
            "x": 4036,
            "y": 190,
            "size": 76,
            "at": "l2:help",
            "color": "accent"
          },
          {
            "id": "c-f0",
            "t": "text",
            "text": "helps",
            "x": 4396,
            "y": 210,
            "size": 64,
            "at": "l2:helps"
          },
          {
            "id": "c-f1",
            "t": "text",
            "text": "helped",
            "x": 4776,
            "y": 210,
            "size": 64,
            "at": "l2:helped"
          },
          {
            "id": "c-f2",
            "t": "text",
            "text": "helpful",
            "x": 5156,
            "y": 210,
            "size": 64,
            "at": "l2:helpful"
          },
          {
            "id": "c-fam",
            "t": "text",
            "text": "= một họ từ (word family)",
            "x": 3996,
            "y": 340,
            "size": 52,
            "at": "l3:family",
            "hl": [
              {
                "text": "một họ từ",
                "at": "l3:one"
              }
            ]
          },
          {
            "id": "c-easy",
            "t": "text",
            "text": "Biết gốc → nhận ra dạng kia",
            "x": 3996,
            "y": 430,
            "size": 48,
            "at": "l3:recognise",
            "color": "accent",
            "hl": [
              {
                "text": "nhận ra",
                "at": "l3:recognise"
              }
            ]
          },
          {
            "id": "c-6",
            "t": "text",
            "text": "6.000 họ từ ≠ 6.000 chữ rời",
            "x": 3996,
            "y": 560,
            "size": 54,
            "at": "l4:separate",
            "color": "coral",
            "hl": [
              {
                "text": "≠ 6.000 chữ rời",
                "at": "l4:separate"
              }
            ]
          },
          {
            "id": "c-more",
            "t": "text",
            "text": "→ chữ nhận ra còn nhiều hơn",
            "x": 4036,
            "y": 650,
            "size": 46,
            "at": "l5:more"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, the first thing people get wrong. Nation counts mostly in word families.",
          "sub": "Chặng một, chỗ hiểu sai thứ nhất. Nation đếm phần lớn theo họ từ.",
          "keys": [
            "họ từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A family is a base word and its close forms: help, helps, helped, helpful.",
          "sub": "Một họ từ gồm từ gốc và các dạng biến đổi gần: help, helps, helped, helpful."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Know the base, and you recognise the rest with little effort. One family, one real learning job.",
          "sub": "Biết từ gốc rồi thì nhận ra các dạng kia không tốn mấy công. Đếm theo họ sát với công học thật hơn.",
          "keys": [
            "sát với công học thật"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So six thousand families is not six thousand separate words to memorise.",
          "sub": "Vậy “6.000 họ từ” không phải 6.000 chữ rời phải học thuộc từng cái."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "You will actually recognise many more words than that number.",
          "sub": "Số chữ bạn nhận ra được còn nhiều hơn con số đó."
        }
      ],
      "ref": "p1,p2"
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
            "at": "l3",
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
            "text": "② Tuần 1 · Nói chuyện",
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
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "pose": "cross"
                }
              ],
              "props": [
                "speech-balloon"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "lan",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:Sam",
            "caption": "Thứ Tư tuần 1 · giờ ra chơi",
            "icon": "speech-balloon"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "1.000–2.000 từ hữu ích nhất",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l5:thousand",
            "color": "accent",
            "hl": [
              {
                "text": "1.000–2.000",
                "at": "l5:one"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "→ trò chuyện mức chấp nhận được",
            "x": 6004,
            "y": 250,
            "size": 40,
            "at": "l5:adequate"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "→ làm được phần lớn việc",
            "x": 6004,
            "y": 320,
            "size": 40,
            "at": "l5:most"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, Wednesday break time.",
          "sub": "Chặng hai, giờ ra chơi thứ Tư."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Sam, Lan's classmate from abroad. Very chatty.",
          "sub": "Đây là Sam, bạn nước ngoài cùng lớp với Lan. Rất thích trò chuyện.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Hi Lan! What did you do at the weekend?",
          "sub": "Chào Lan! Cuối tuần bạn làm gì thế?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Sorry, my English is not enough yet. Maybe next year.",
          "sub": "Xin lỗi, tiếng Anh mình chưa đủ. Chắc sang năm.",
          "face": "worried",
          "pose": "cross"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Nation says one to two thousand of the most useful words give adequate conversation and get most things done.",
          "sub": "Theo Nation, một đến hai nghìn từ hữu ích nhất đủ để trò chuyện ở mức chấp nhận được, làm được phần lớn việc cần làm.",
          "keys": [
            "một đến hai nghìn từ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "campus",
        "label": "Thứ Tư tuần 1 · hành lang",
        "actors": [
          {
            "id": "lan",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Chờ cả chục nghìn từ mới nói",
          "why": "Với 1.000–2.000 từ thông dụng đã hỏi đường, gọi món, kể về mình được.",
          "rule": "Vài nghìn từ thông dụng là đủ để bắt đầu nói"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "Real speakers know tens of thousands of words. I'll speak when I have enough.",
          "sub": "Người ta biết cả chục nghìn từ. Bao giờ đủ từ mình mới nói.",
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
          "say": "One to two thousand common words: ask the way, order food, talk about yourself.",
          "sub": "Với một, hai nghìn từ thông dụng, đã hỏi đường, gọi món, kể về bản thân được rồi.",
          "keys": [
            "hỏi đường, gọi món"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Take two.",
          "sub": "Tua lại! Lần nữa nhé.",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Sam! At the weekend I went home and cooked with my mum.",
          "sub": "Sam ơi! Cuối tuần mình về nhà, nấu ăn với mẹ.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Speak now with what you have, and learn more along the way.",
          "sub": "Nói ngay với vốn đang có, rồi học thêm dần.",
          "phase": "redo",
          "keys": [
            "Nói ngay với vốn đang có"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-4",
            "t": "text",
            "text": "Từ thông dụng: mọi chủ đề",
            "x": 5964,
            "y": 420,
            "size": 46,
            "at": "l1:every"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Vài nghìn từ: bắt đầu nói",
            "x": 6804,
            "y": 695,
            "size": 46,
            "at": "l2:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "bắt đầu nói",
                "at": "l2:start"
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
          "say": "These are the most common words. They turn up in almost every topic.",
          "sub": "Đây là những từ thông dụng nhất, xuất hiện ở hầu hết mọi chủ đề."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: a few thousand common words are enough to start speaking. Don't wait for ten thousand.",
          "sub": "Rút ra: vài nghìn từ thông dụng là đủ để bắt đầu nói, đừng chờ đủ cả chục nghìn.",
          "keys": [
            "đừng chờ"
          ]
        }
      ],
      "ref": "p3,p5"
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
            "text": "③ Tuần 2 · Đêm xem phim",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
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
                  "id": "lan",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "popcorn",
                "television"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
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
            "at": "l1:movie",
            "caption": "Thứ Bảy tuần 2 · 20:00 · chiếu phim",
            "icon": "clapper-board"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "~6.000 họ từ → hiểu ~98%",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l3:six",
            "color": "accent",
            "hl": [
              {
                "text": "~98%",
                "at": "l3:ninety"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Phim: < 10.000 chữ thoại",
            "x": 7932,
            "y": 260,
            "size": 46,
            "at": "l4:ten"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "… ~1.000 họ từ khác nhau",
            "x": 7932,
            "y": 335,
            "size": 46,
            "at": "l4:different",
            "hl": [
              {
                "text": "~1.000",
                "at": "l4:different"
              }
            ]
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "Ít nhất ~3.000, tốt hơn ~6.000",
            "x": 7932,
            "y": 430,
            "size": 44,
            "at": "l5:least",
            "color": "coral",
            "hl": [
              {
                "text": "Ít nhất",
                "at": "l5:least"
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
          "say": "Stop three, week two. Saturday movie night, no subtitles.",
          "sub": "Chặng ba, tuần hai. Đêm chiếu phim thứ Bảy, không phụ đề."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "I catch the jokes Sam laughs at... about ten seconds later.",
          "sub": "Sam cười câu đùa nào, mình hiểu câu đó... chậm mười giây.",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "About six thousand word families give you around ninety-eight percent of a film or a casual chat.",
          "sub": "Khoảng sáu nghìn họ từ giúp hiểu chừng 98% số chữ trong một bộ phim hay cuộc trò chuyện thân mật.",
          "keys": [
            "sáu nghìn họ từ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A film usually has under ten thousand words of speech, and about a thousand different word families.",
          "sub": "Một bộ phim thường có dưới mười nghìn chữ lời thoại, và khoảng một nghìn họ từ khác nhau."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "To follow most of a film unprepared: at least three thousand words, better six thousand.",
          "sub": "Muốn theo phần lớn một bộ phim mà không chuẩn bị: ít nhất khoảng ba nghìn từ, tốt hơn là sáu nghìn.",
          "keys": [
            "ít nhất khoảng ba nghìn"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Phim chỉ ~1.000 họ từ, sao cần tới 6.000?",
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
          "say": "A film uses a thousand families. Why do you need six?",
          "sub": "Phim chỉ dùng một nghìn họ từ, sao lại cần tới sáu nghìn?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
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
          }
        ],
        "items": [
          {
            "id": "e-5",
            "t": "text",
            "text": "1.000 của phim ≠ 1.000 thông dụng",
            "x": 7932,
            "y": 520,
            "size": 42,
            "at": "l1:same",
            "hl": [
              {
                "text": "≠",
                "at": "l1:same"
              }
            ]
          },
          {
            "id": "e-6",
            "t": "text",
            "text": "Mỗi phim một bộ từ riêng",
            "x": 7932,
            "y": 600,
            "size": 50,
            "at": "l2:own",
            "color": "accent",
            "hl": [
              {
                "text": "bộ từ riêng",
                "at": "l2:own"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Vốn rộng → xem nhiều phim",
            "x": 8772,
            "y": 695,
            "size": 46,
            "at": "l3:Takeaway",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Because a film's thousand families are not the same as the thousand most common words.",
          "sub": "Vì một nghìn họ từ của một phim không trùng hẳn với một nghìn từ thông dụng nhất."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each film has its own words. A war film needs tanks, a cooking film needs garlic.",
          "sub": "Mỗi phim có những từ riêng theo nội dung: phim chiến tranh cần xe tăng, phim nấu ăn cần tỏi.",
          "keys": [
            "từ riêng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: every film has its own set. A wide vocabulary lets you watch many films.",
          "sub": "Rút ra: mỗi phim một bộ từ riêng, vốn từ rộng mới xem được nhiều phim.",
          "keys": [
            "vốn từ rộng"
          ]
        }
      ],
      "ref": "p7,p8"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 98% dễ cỡ nào?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "98% = ~1 chữ lạ / 50 chữ",
            "x": 60,
            "y": 1260,
            "size": 52,
            "at": "l2:fifty",
            "color": "accent",
            "hl": [
              {
                "text": "1 chữ lạ / 50 chữ",
                "at": "l2:fifty"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "= ≤ 2 từ lạ / 100 chữ",
            "x": 60,
            "y": 1350,
            "size": 48,
            "at": "l3:hundred"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "≈ 1 từ lạ mỗi 5 dòng",
            "x": 60,
            "y": 1430,
            "size": 48,
            "at": "l3:lines",
            "hl": [
              {
                "text": "mỗi 5 dòng",
                "at": "l3:lines"
              }
            ]
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "→ hiểu truyện, đoán được từ lạ",
            "x": 60,
            "y": 1520,
            "size": 44,
            "at": "l4:guess",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, the second thing people get wrong. What does ninety-eight percent feel like?",
          "sub": "Chặng bốn, chỗ hiểu sai thứ hai: hiểu 98% là dễ đến mức nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One unknown word in about every fifty.",
          "sub": "Cứ khoảng năm mươi chữ mới gặp một chữ lạ.",
          "keys": [
            "năm mươi chữ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nation uses that line to choose reading: no more than two unknown words per hundred, about one every five lines.",
          "sub": "Nation dùng chính ngưỡng này khi chọn tài liệu đọc: không quá hai từ lạ trên trăm chữ, khoảng một từ lạ mỗi năm dòng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "You follow the story, and you can guess new words from context.",
          "sub": "Bạn hiểu được câu chuyện, và còn đoán được nghĩa từ lạ nhờ ngữ cảnh."
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s12",
      "module": "BRK-04",
      "data": {
        "title": "Hiểu bao nhiêu thì đủ?",
        "labels": [
          "80%",
          "98%"
        ],
        "wrong": "Cứ 5 chữ vấp 1 chữ lạ: mệt, dễ bỏ",
        "right": "Cứ 50 chữ gặp 1 chữ lạ: hiểu, đoán được",
        "wrongIllus": "face-with-spiral-eyes",
        "rightIllus": "open-book"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "At eighty percent, you trip every fifth word. Easy to quit.",
          "sub": "Ở 80%, cứ năm chữ lại vấp một chữ lạ. Mệt, dễ bỏ cuộc."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "At ninety-eight, you read, and you guess.",
          "sub": "Ở 98%, bạn đọc được, và đoán được.",
          "keys": [
            "đoán được"
          ]
        }
      ],
      "ref": "p10"
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
            "id": "f-k",
            "t": "text",
            "text": "Mốc nào cũng nhắm ~98%",
            "x": 60,
            "y": 1650,
            "size": 56,
            "at": "l1:aims",
            "color": "accent",
            "hl": [
              {
                "text": "~98%",
                "at": "l1:ninety"
              }
            ]
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "không phải chỉ hơn một nửa",
            "x": 100,
            "y": 1740,
            "size": 44,
            "at": "l1:half",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "That's why every vocabulary target aims at about ninety-eight percent, not just over half.",
          "sub": "Vì vậy các mốc vốn từ đều nhắm tới mức hiểu khoảng 98%, không phải chỉ hơn một nửa.",
          "keys": [
            "khoảng 98%"
          ]
        }
      ],
      "ref": "p10"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Báo, tiểu thuyết",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "8.000–9.000 họ từ → 98%",
            "x": 2028,
            "y": 1260,
            "size": 54,
            "at": "l2:eight",
            "color": "accent",
            "hl": [
              {
                "text": "8.000–9.000",
                "at": "l2:eight"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Mốc xa, cho giai đoạn sau",
            "x": 2028,
            "y": 1350,
            "size": 44,
            "at": "l3:later"
          },
          {
            "id": "g-ladder",
            "t": "illus",
            "name": "ladder",
            "x": 3268,
            "y": 1230,
            "size": 260,
            "at": "l4:native"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Bản ngữ: +1.000 từ / năm",
            "x": 2028,
            "y": 1450,
            "size": 48,
            "at": "l4:year",
            "hl": [
              {
                "text": "+1.000 từ / năm",
                "at": "l4:thousand"
              }
            ]
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "lớn lên: gần 20.000",
            "x": 2028,
            "y": 1530,
            "size": 48,
            "at": "l4:twenty"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Đo tiến bộ theo mốc nhỏ",
            "x": 2028,
            "y": 1670,
            "size": 52,
            "at": "l6:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "mốc nhỏ",
                "at": "l6:small"
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
          "say": "Stop five. Newspapers and novels use more words than daily speech.",
          "sub": "Chặng năm. Báo và tiểu thuyết dùng nhiều từ hơn lời nói hằng ngày."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For ninety-eight percent, you need eight to nine thousand word families.",
          "sub": "Muốn hiểu 98%, cần khoảng tám đến chín nghìn họ từ.",
          "keys": [
            "tám đến chín nghìn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A far target, for later, once the common words are solid.",
          "sub": "Đây là mốc xa, dành cho giai đoạn sau, khi đã vững nhóm từ thông dụng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Did you know? Native speakers learn about a thousand words a year, and grow up with nearly twenty thousand.",
          "sub": "Bạn có biết: người bản ngữ học thêm khoảng một nghìn từ mỗi năm, lớn lên có vốn gần hai mươi nghìn.",
          "keys": [
            "một nghìn từ mỗi năm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Even they take years. You don't need the whole road: eight to nine thousand reads most papers and novels.",
          "sub": "Chính họ cũng mất nhiều năm. Bạn không cần đi hết đường ấy: tám, chín nghìn họ từ đã đọc được hầu hết báo, tiểu thuyết."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: measure your progress in small steps.",
          "sub": "Rút ra: hãy đo tiến bộ theo từng mốc nhỏ.",
          "keys": [
            "từng mốc nhỏ"
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
            "text": "⑥ Tuần 3 · Bộ sinh tồn",
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold",
                  "face": "worried"
                }
              ],
              "props": [
                "luggage",
                "orange-book"
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
            "at": "l2:Thảo",
            "caption": "Tuần 3 · còn ít ngày là đi",
            "icon": "luggage"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "Cách 1: giáo trình từ bài 1",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l3:lesson",
            "color": "coral"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "→ mới tới “trường lớp”",
            "x": 4036,
            "y": 1335,
            "size": 44,
            "at": "l3:school",
            "color": "muted"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "Cách 2: bộ ~120 từ, cụm từ",
            "x": 3996,
            "y": 1420,
            "size": 46,
            "at": "l5:hundred",
            "color": "accent",
            "hl": [
              {
                "text": "~120",
                "at": "l5:hundred"
              }
            ]
          },
          {
            "id": "h-b2",
            "t": "text",
            "text": "≈ 4 giờ học có chủ đích",
            "x": 4036,
            "y": 1495,
            "size": 44,
            "at": "l5:hours",
            "hl": [
              {
                "text": "4 giờ",
                "at": "l5:four"
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
          "say": "Stop six, week three.",
          "sub": "Chặng sáu, tuần ba."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Thảo, Lan's cousin. Bags half packed, textbook wide open.",
          "sub": "Đây là Thảo, chị họ của Lan. Vali xếp dở, giáo trình mở toang.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I started from lesson one. Three weeks later, I can talk about... my school classroom.",
          "sub": "Chị học từ bài một. Ba tuần rồi, giờ chị nói được về… lớp học ở trường.",
          "face": "worried"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No ordering food. No asking the way. Lovely for school, useless at the airport.",
          "sub": "Chưa đụng tới gọi món, hỏi đường. Đẹp cho lớp học, vô dụng ở sân bay."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Nation suggests a survival set of about a hundred and twenty words and phrases. About four hours of deliberate study.",
          "sub": "Nation đề xuất bộ “từ vựng sinh tồn” khoảng một trăm hai mươi từ và cụm từ, học có chủ đích mất chừng bốn giờ.",
          "keys": [
            "bốn giờ"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p14,p15"
    },
    {
      "id": "s16",
      "module": "BRK-06",
      "data": {
        "title": "Bộ từ sinh tồn",
        "items": [
          {
            "illus": "waving-hand",
            "text": "Chào, cảm ơn"
          },
          {
            "illus": "fork-and-knife-with-plate",
            "text": "Gọi món"
          },
          {
            "illus": "round-pushpin",
            "text": "Hỏi đường"
          },
          {
            "illus": "hotel",
            "text": "Tìm chỗ ở"
          },
          {
            "illus": "ear",
            "text": "Xin nói chậm"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Greetings, please and thank you, shopping, food, directions, signs, a place to stay.",
          "sub": "Chào hỏi, please và thank you, mua sắm, gọi món, hỏi đường, biển báo, chỗ ở.",
          "keys": [
            "please và thank you"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Plus: please speak slowly, and say it again.",
          "sub": "Thêm: xin nói chậm, xin nhắc lại.",
          "keys": [
            "xin nói chậm"
          ]
        }
      ],
      "ref": "p14"
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
            "id": "h-c",
            "t": "text",
            "text": "Thẻ + nói to cho trôi",
            "x": 3996,
            "y": 1590,
            "size": 50,
            "at": "l1:cards",
            "color": "accent"
          },
          {
            "id": "h-d",
            "t": "text",
            "text": "Danh sách: hơn 20 ngôn ngữ",
            "x": 3996,
            "y": 1670,
            "size": 46,
            "at": "l2:twenty",
            "hl": [
              {
                "text": "hơn 20",
                "at": "l2:twenty"
              }
            ]
          },
          {
            "id": "h-e",
            "t": "text",
            "text": "Chưa có? Nhờ người nói thạo soạn",
            "x": 3996,
            "y": 1740,
            "size": 40,
            "at": "l3:fluent"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Gần ngày đi: sinh tồn trước",
            "x": 4836,
            "y": 1785,
            "size": 46,
            "at": "l4:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "sinh tồn trước",
                "at": "l4:survival"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "So: survival words on cards first, and I practise saying them aloud.",
          "sub": "Vậy chị học bộ sinh tồn trên thẻ trước, luyện nói to cho trôi.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The book says these lists are on Paul Nation's website in over twenty languages.",
          "sub": "Theo cuốn sách, danh sách có trên trang của Paul Nation bằng hơn hai mươi ngôn ngữ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No list for your language? Ask a fluent speaker to build one from the English version.",
          "sub": "Ngôn ngữ của bạn chưa có? Nhờ một người nói thạo dựa vào bản tiếng Anh soạn một bản tương tự."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: trip coming soon? Survival set first, textbook later.",
          "sub": "Rút ra: đi du lịch gần ngày, học bộ sinh tồn trước, giáo trình để sau.",
          "keys": [
            "bộ sinh tồn trước"
          ]
        }
      ],
      "ref": "p15,p16,p17"
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
            "at": "l3",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Tuần 4 · Mốc của mình",
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
                  "id": "lan",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo",
                "bullseye"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:goal",
            "caption": "Tuần 4 · bàn học ký túc",
            "icon": "bullseye"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Thích, sang sống: tiếng nói",
            "x": 5964,
            "y": 1260,
            "size": 44,
            "at": "l3:live"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Du lịch: bộ sinh tồn",
            "x": 5964,
            "y": 1330,
            "size": 44,
            "at": "l3:travel"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Chuyên môn: 20–30% từ ngành",
            "x": 5964,
            "y": 1400,
            "size": 44,
            "at": "l4:technical",
            "color": "coral",
            "hl": [
              {
                "text": "20–30%",
                "at": "l4:twenty"
              }
            ]
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Ôn thi: đề mẫu",
            "x": 5964,
            "y": 1470,
            "size": 44,
            "at": "l4:exam"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven, week four. Lan writes her goal in one line.",
          "sub": "Chặng bảy, tuần bốn. Lan viết mục tiêu của mình trong một dòng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "My goal: chat with Sam and my classmates. So, one to two thousand common words first.",
          "sub": "Mục tiêu: trò chuyện với Sam và các bạn. Vậy trước hết là một, hai nghìn từ thông dụng.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Nation says: know why you learn. For fun or to live abroad, focus on speech. To travel, the survival set.",
          "sub": "Nation nhấn mạnh: biết rõ vì sao học. Học vì thích hay sắp sang sống thì ưu tiên tiếng nói; đi du lịch thì bộ sinh tồn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "For technical reading, specialist words can be twenty to thirty percent of a text. For an exam, practise with its sample tests.",
          "sub": "Đọc tài liệu chuyên môn thì từ chuyên ngành có thể chiếm 20 đến 30% số chữ. Ôn thi thì luyện với đề mẫu."
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
            "fit": "I",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "i-5",
            "t": "text",
            "text": "Bài kiểm tra vốn từ song ngữ",
            "x": 5964,
            "y": 1560,
            "size": 44,
            "at": "l1:test",
            "hl": [
              {
                "text": "song ngữ",
                "at": "l1:bilingual"
              }
            ]
          },
          {
            "id": "i-6",
            "t": "text",
            "text": "Nguyen & Nation, 2011",
            "x": 6004,
            "y": 1625,
            "size": 38,
            "at": "l1:Nguyen",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "i-7",
            "t": "text",
            "text": "Kết quả: để tham khảo",
            "x": 6804,
            "y": 1785,
            "size": 46,
            "at": "l2:reference",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Want your current size? Nation's publications include a bilingual vocabulary test for Vietnamese learners: Nguyen and Nation, twenty eleven.",
          "sub": "Muốn biết vốn từ hiện tại? Danh mục ấn phẩm của Nation có bài kiểm tra vốn từ song ngữ cho người Việt học tiếng Anh, Nguyen và Nation, 2011.",
          "keys": [
            "song ngữ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The score is just a reference. What matters is which target you're near.",
          "sub": "Kết quả chỉ để tham khảo, quan trọng là biết mình đang ở gần mốc nào."
        }
      ],
      "ref": "p19"
    },
    {
      "id": "s20",
      "module": "BRK-11",
      "data": {
        "title": "4 việc làm ngay",
        "items": [
          "Viết mục tiêu một dòng",
          "Chọn mốc của mình",
          "Ước vốn từ hiện có",
          "Mục tiêu nhỏ: 20 từ/tuần"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Four: a small goal, like twenty words a week.",
          "sub": "Bốn: mục tiêu nhỏ mỗi tuần, như hai mươi từ mới, và ghi lại tiến bộ.",
          "keys": [
            "hai mươi từ mới"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three: estimate your size.",
          "sub": "Ba: ước vốn từ hiện có."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Two: choose your target.",
          "sub": "Hai: chọn mốc của mình."
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "One: write your goal.",
          "sub": "Một: viết mục tiêu một dòng."
        }
      ],
      "ref": "p20"
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Hai tuần 5 · 7:30",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:lecture"
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
                  "id": "lan",
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
                "mobile-phone",
                "speech-balloon"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Monday",
            "caption": "Thứ Hai tuần 5 · 7:30 giảng đường",
            "icon": "school"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Lan: nói ngay, học dần",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l2:weekend",
            "color": "accent"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Thảo: gọi món bằng bộ sinh tồn",
            "x": 7932,
            "y": 1350,
            "size": 42,
            "at": "l3:ordered",
            "hl": [
              {
                "text": "bộ sinh tồn",
                "at": "l3:survival"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“… học một sàng khôn”",
            "x": 7932,
            "y": 1470,
            "size": 52,
            "at": "l4:basket",
            "color": "accent",
            "hl": [
              {
                "text": "một sàng khôn",
                "at": "l4:basket"
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
          "say": "Monday, week five. Seven thirty, same lecture hall, same Lan.",
          "sub": "Thứ Hai tuần năm. Bảy rưỡi sáng, vẫn giảng đường ấy, Lan ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Sam, this weekend my cousin sent me photos. Want to see?",
          "sub": "Sam ơi, cuối tuần chị họ mình gửi ảnh về. Xem không?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Wow! She ordered food in English? With survival words?",
          "sub": "Ồ! Chị ấy gọi món bằng tiếng Anh à? Bằng bộ từ sinh tồn?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Travel one day, learn a basket of wisdom. Four weeks, and two baskets.",
          "sub": "“Đi một ngày đàng, học một sàng khôn.” Bốn tuần, hai sàng.",
          "keys": [
            "học một sàng khôn"
          ]
        }
      ],
      "ref": "p15,p4"
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
            "at": "l1:talk",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:films",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:trip",
            "fit": "H",
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
            "x": 6664,
            "y": 170,
            "at": "l1:talk"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 170,
            "at": "l2:films"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 4696,
            "y": 1420,
            "at": "l3:trip"
          },
          {
            "id": "j-do",
            "t": "text",
            "text": "Làm ngay: đánh dấu mốc",
            "x": 7932,
            "y": 1610,
            "size": 50,
            "at": "l4:Try",
            "hl": [
              {
                "text": "mốc",
                "at": "l4:target"
              }
            ]
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi tự học; số liệu theo Paul Nation (2014). Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
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
          "say": "So: one to two thousand common words to talk. Start speaking now.",
          "sub": "Tóm lại: một, hai nghìn từ thông dụng để nói chuyện. Nói ngay từ bây giờ.",
          "keys": [
            "Nói ngay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "About six thousand families for films, eight to nine thousand for papers and novels, aiming at ninety-eight percent.",
          "sub": "Khoảng sáu nghìn họ từ cho phim, tám, chín nghìn cho báo, tiểu thuyết, nhắm mức hiểu 98%."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Trip soon? The survival set first.",
          "sub": "Sắp đi du lịch? Bộ sinh tồn trước."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Try now: tick your target in the checklist.",
          "sub": "Làm ngay: đánh dấu mốc của bạn trong danh sách kiểm.",
          "keys": [
            "đánh dấu mốc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next up: why learn the thousand most common words first, and where to find them.",
          "sub": "Bài tiếp: vì sao nên học một nghìn từ thông dụng nhất trước, và lấy chúng ở đâu."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p20,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "A film uses about a thousand word families, why do you still need more?",
        "options": [
          "Actors speak only rare words that you never meet in daily life",
          "Each film has its own words, and other films use different sets",
          "Films repeat every word many times, so you forget them very quickly"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "clapper-board",
        "why": "Một nghìn họ từ của một phim không trùng hẳn với một nghìn từ thông dụng nhất. Mỗi phim có từ riêng theo nội dung, nên vốn từ rộng giúp bạn sẵn sàng hơn."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A film uses about a thousand word families, why do you still need more?",
          "sub": "Một bộ phim dùng khoảng một nghìn họ từ, vì sao bạn vẫn cần nhiều hơn?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Because a film's words are not the same as the most common thousand.",
          "sub": "Vì họ từ của một phim không trùng hẳn với một nghìn từ thông dụng nhất."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Each film has its own words. A wide vocabulary covers them.",
          "sub": "Mỗi phim có từ riêng; vốn từ rộng mới đón được."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[10]"
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
          "say": "Pick your target, then try the forty questions below.",
          "sub": "Chọn mốc của bạn, rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo BỐN TUẦN ĐẦU NĂM NHẤT của Lan, cũng là bốn tuần trước chuyến đi của Thảo (Thứ Hai tuần 1 7:30 giảng đường → họ từ → Thứ Tư Sam bắt chuyện, “Khoan đã!” chờ đủ từ → Thứ Bảy tuần 2 đêm xem phim → 98% → báo, tiểu thuyết → tuần 3 Thảo bộ sinh tồn → tuần 4 chọn mốc → Thứ Hai tuần 5 7:30 khép vòng). Hook HOOK-20 (đáp án trước: 1.000–2.000 / ~6.000 / 8.000–9.000 / ~120). Nhân vật: Lan, Sam, Thảo — w145/_series/beginner-vocabulary-learners.md. Cảnh ngắt nhịp: BRK-08 (bốn tuần), BRK-07 (rehook phim), BRK-04 (80% vs 98%), BRK-06 (bộ sinh tồn), BRK-11 (4 việc). Tục ngữ: “Đi một ngày đàng, học một sàng khôn”. Câu đố questions[10].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
