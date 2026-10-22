// Kịch bản video W lần 3 (#110) — "Nói về sở thích của bạn bằng tiếng Anh" · chuỗi "Giới thiệu bản thân bằng tiếng Anh"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub). HOOK-14: chuyện của Hiền (📌 p11) bỏ lửng ở cảnh 1, đóng ở DLG-01 chương 3, nhắc lại ở kết.
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-talk-about-your-hobbies-in-english--w01",
  "unit": {
    "audience": "english-self-introducers",
    "slug": "how-to-talk-about-your-hobbies-in-english",
    "door": "ky-nang",
    "level": "B1",
    "title": "Nói về sở thích của bạn bằng tiếng Anh",
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
            "id": "a-5",
            "t": "text",
            "text": "5 sở thích",
            "x": 60,
            "y": 120,
            "size": 160,
            "at": "l1:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 sở thích",
                "at": "l1:hobbies"
              }
            ]
          },
          {
            "id": "a-0",
            "t": "text",
            "text": "= 0 câu hỏi tiếp",
            "x": 70,
            "y": 330,
            "size": 64,
            "at": "l1:zero",
            "color": "coral",
            "hl": [
              {
                "text": "0 câu hỏi",
                "at": "l1:questions"
              }
            ]
          },
          {
            "id": "a-my",
            "t": "text",
            "text": "Ta tưởng: “My hobby is…” là xong?",
            "x": 70,
            "y": 450,
            "size": 50,
            "at": "l2:hobby",
            "color": "muted"
          },
          {
            "id": "a-myx",
            "t": "strike",
            "over": "a-my",
            "at": "l2:dead end"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five hobbies in one breath. Zero questions back.",
          "sub": "Năm sở thích trong một hơi. Không một câu hỏi tiếp.",
          "keys": [
            "Không một câu hỏi tiếp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And the school favourite, my hobby is, often leads to a dead end.",
          "sub": "Còn câu ruột thời đi học, “My hobby is…”, thường dẫn vào ngõ cụt.",
          "keys": [
            "ngõ cụt"
          ]
        }
      ],
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
            "at": "l4",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "walk",
                  "at": "l3"
                }
              ],
              "props": [
                "fork-and-knife-with-plate"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "E-SHOT-05",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai, 12:00 · bữa trưa với nhóm mới",
            "icon": "fork-and-knife-with-plate"
          },
          {
            "id": "a-nice",
            "t": "text",
            "text": "“Oh, nice.” … im lặng",
            "x": 70,
            "y": 570,
            "size": 50,
            "at": "l6:nice",
            "color": "coral"
          },
          {
            "id": "a-cd",
            "t": "text",
            "text": "“Một nghề cho chín…”",
            "x": 70,
            "y": 670,
            "size": 52,
            "at": "l7:craft",
            "color": "accent",
            "hl": [
              {
                "text": "cho chín",
                "at": "l7:mastered"
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
          "say": "Meet Thảo, an accountant in Da Nang. Monday: day one on a new project team.",
          "sub": "Đây là Thảo, kế toán ở Đà Nẵng. Thứ Hai: ngày đầu vào nhóm dự án mới.",
          "keys": [
            "ngày đầu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Sam, the team leader, from the foreign partner company.",
          "sub": "Còn đây là Sam, trưởng nhóm, người của công ty đối tác nước ngoài."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "So, what do you do for fun, Thảo?",
          "sub": "Vậy lúc rảnh Thảo hay làm gì?",
          "face": "happy",
          "to": "thao"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "I like reading, cooking, travelling, music and sports.",
          "sub": "Tôi thích đọc sách, nấu ăn, du lịch, âm nhạc và thể thao.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "sam",
          "say": "Oh, nice.",
          "sub": "Ồ, hay đấy.",
          "face": "neutral",
          "react": {
            "thao": "worried"
          }
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: one craft mastered beats nine half learned. Thảo served five half-cooked.",
          "sub": "Ông bà dặn: “Một nghề cho chín, còn hơn chín nghề.” Thảo bày ra năm món… món nào cũng tái.",
          "keys": [
            "Một nghề cho chín"
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
      "ref": "p3"
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
            "text": "Kể sở thích sao cho có chuyện?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:story"
          },
          {
            "id": "b-hb",
            "t": "text",
            "text": "“My hobby is reading books.”",
            "x": 2028,
            "y": 160,
            "size": 46,
            "at": "l2:reading",
            "color": "muted"
          },
          {
            "id": "b-hbx",
            "t": "strike",
            "over": "b-hb",
            "at": "l2:textbook"
          },
          {
            "id": "b-do",
            "t": "text",
            "text": "Kể việc đang làm, đừng gọi tên",
            "x": 2028,
            "y": 245,
            "size": 46,
            "at": "l3:doing",
            "color": "accent",
            "hl": [
              {
                "text": "việc đang làm",
                "at": "l3:doing"
              }
            ]
          },
          {
            "id": "b-cr",
            "t": "text",
            "text": "I've been reading a lot",
            "x": 2868,
            "y": 160,
            "size": 46,
            "at": "l4:crime"
          },
          {
            "id": "b-cr2",
            "t": "text",
            "text": "of crime novels lately.",
            "x": 2868,
            "y": 225,
            "size": 46,
            "at": "l4:lately",
            "hl": [
              {
                "text": "lately",
                "at": "l4:lately"
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
          "say": "So how do you talk about hobbies and actually get a story going?",
          "sub": "Vậy kể sở thích thế nào để thật sự có chuyện mà nói?",
          "keys": [
            "có chuyện mà nói"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "My hobby is reading books. Not wrong, just textbook. Nothing to ask about.",
          "sub": "“My hobby is reading books.” Không sai, chỉ là sách giáo khoa. Chẳng có gì để hỏi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "English speakers tell what they are doing, not the name of a hobby.",
          "sub": "Người nói tiếng Anh hay kể việc mình đang làm, hơn là gọi tên sở thích.",
          "keys": [
            "việc mình đang làm"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Like: I've been reading a lot of crime novels lately.",
          "sub": "Kiểu: “I've been reading a lot of crime novels lately.”"
        }
      ],
      "ref": "p1,p2"
    },
    {
      "id": "s03",
      "module": "BRK-06",
      "data": {
        "title": "Mở lời tự nhiên",
        "items": [
          {
            "illus": "camera-with-flash",
            "text": "I'm really into…"
          },
          {
            "illus": "national-park",
            "text": "I enjoy…"
          },
          {
            "illus": "sunset",
            "text": "In my free time…"
          },
          {
            "illus": "television",
            "text": "Big fan of…"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Really into. Enjoy. Free time. Big fan.",
          "sub": "“I'm really into…”, “I enjoy…”, “In my free time…”, “I'm a big fan of…”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Hobby is fine. Just don't stop there.",
          "sub": "Dùng “hobby” vẫn được, chỉ đừng dừng ở đó.",
          "keys": [
            "đừng dừng ở đó"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
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
          }
        ],
        "items": [
          {
            "id": "b-wk",
            "t": "text",
            "text": "Tuần đầu ở nhóm mới · 8 chặng",
            "x": 2028,
            "y": 500,
            "size": 50,
            "at": "l1:first week",
            "hl": [
              {
                "text": "8 chặng",
                "at": "l1:eight"
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
            "at": "l1:eight+0",
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
            "at": "l1:eight+220",
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
            "at": "l1:eight+440",
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
            "at": "l1:eight+660",
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
            "at": "l1:eight+880",
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
            "at": "l1:eight+1100",
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
            "at": "l1:eight+1320",
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
            "at": "l1:eight+1540",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 tối",
            "x": 2043,
            "y": 615,
            "size": 38,
            "at": "l1:eight+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2248,
            "y": 615,
            "size": 46,
            "at": "l1:eight+340"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2453,
            "y": 615,
            "size": 46,
            "at": "l1:eight+560"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T5",
            "x": 2658,
            "y": 615,
            "size": 46,
            "at": "l1:eight+780"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6 tối",
            "x": 2863,
            "y": 615,
            "size": 38,
            "at": "l1:eight+1000"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "T7",
            "x": 3068,
            "y": 615,
            "size": 46,
            "at": "l1:eight+1220"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "CN",
            "x": 3273,
            "y": 615,
            "size": 46,
            "at": "l1:eight+1440"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "T2 sau",
            "x": 3478,
            "y": 615,
            "size": 38,
            "at": "l1:eight+1660"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Let's follow Thảo's first week on the team, in eight stops, back to next Monday's lunch.",
          "sub": "Theo Thảo qua tuần đầu ở nhóm mới, tám chặng, về lại bữa trưa thứ Hai sau.",
          "keys": [
            "tám chặng"
          ]
        }
      ],
      "ref": "intro"
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
            "text": "① Tối thứ Hai: viết lại",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "left": {
                "label": "Trước: kể năm thứ",
                "ok": false
              },
              "right": {
                "label": "Sau: một thứ, kể kỹ",
                "ok": true
              }
            },
            "at": "l2:two",
            "caption": "Trước: kể năm thứ · Sau: một thứ, kể kỹ",
            "icon": "cooking"
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "Trước: 5 cái tên",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l3:five",
            "color": "coral"
          },
          {
            "id": "c-b",
            "t": "text",
            "text": "Sau: 1 món, kể kỹ",
            "x": 3996,
            "y": 260,
            "size": 46,
            "at": "l3:one dish",
            "color": "accent"
          },
          {
            "id": "c-b2",
            "t": "text",
            "text": "Thai green curry",
            "x": 4026,
            "y": 340,
            "size": 54,
            "at": "l3:dish+300",
            "hl": [
              {
                "text": "Thai green curry",
                "at": "l3:next"
              }
            ]
          },
          {
            "id": "c-b3",
            "t": "text",
            "text": "→ “How did it turn out?”",
            "x": 4026,
            "y": 420,
            "size": 46,
            "at": "l3:asks"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: Monday night. Thảo replays lunch, and rewrites her answer.",
          "sub": "Chặng một: tối thứ Hai. Thảo tua lại bữa trưa, viết lại câu trả lời."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two versions, same question.",
          "sub": "Hai phiên bản, cùng một câu hỏi."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "thao",
          "say": "I like reading, cooking, travelling, music and sports.",
          "sub": "Tôi thích đọc sách, nấu ăn, du lịch, âm nhạc và thể thao.",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "sam",
          "say": "Oh, nice.",
          "sub": "Ồ, hay đấy.",
          "phase": "a",
          "face": "neutral"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "thao",
          "say": "I'm really into cooking. I try a new dish every weekend, and last week it was Thai green curry.",
          "sub": "Tôi rất mê nấu ăn. Cuối tuần nào cũng thử món mới, tuần trước là cà ri xanh Thái.",
          "phase": "b",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "sam",
          "say": "How did it turn out?",
          "sub": "Món đó thế nào?",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Five names, and Sam has nothing to grab. One dish, and the next question asks itself.",
          "sub": "Năm cái tên, Sam chẳng biết bám vào đâu. Một món ăn, câu hỏi sau tự đến.",
          "keys": [
            "câu hỏi sau tự đến"
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
            "id": "c-k",
            "t": "text",
            "text": "1 kể kỹ > 5 kể tên",
            "x": 3996,
            "y": 640,
            "size": 72,
            "at": "l1:one hobby",
            "color": "accent",
            "hl": [
              {
                "text": "1 kể kỹ",
                "at": "l1:told well"
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
          "say": "One hobby told well beats five hobbies named.",
          "sub": "Một sở thích kể kỹ hơn năm sở thích kể tên.",
          "keys": [
            "Một sở thích kể kỹ"
          ]
        }
      ],
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
            "at": "l4:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Ba: thêm chi tiết",
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
              "set": "kitchen",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "curry-rice",
                "spiral-notepad"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:kitchen",
            "caption": "Tối thứ Ba · bếp nhà Thảo",
            "icon": "curry-rice"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 170,
            "w": 50,
            "h": 50,
            "at": "l2:what",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 152,
            "size": 62,
            "at": "l2:what+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Làm gì",
            "x": 6039,
            "y": 162,
            "size": 50,
            "at": "l2:what+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 260,
            "w": 50,
            "h": 50,
            "at": "l2:how often",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 242,
            "size": 62,
            "at": "l2:how often+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Bao lâu một lần",
            "x": 6039,
            "y": 252,
            "size": 50,
            "at": "l2:how often+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 350,
            "w": 50,
            "h": 50,
            "at": "l2:who",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 332,
            "size": 62,
            "at": "l2:who+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Ở đâu, với ai",
            "x": 6039,
            "y": 342,
            "size": 50,
            "at": "l2:who+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 440,
            "w": 50,
            "h": 50,
            "at": "l3:reason",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5970,
            "y": 422,
            "size": 62,
            "at": "l3:reason+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Vì sao thích",
            "x": 6039,
            "y": 432,
            "size": 50,
            "at": "l3:reason+200"
          },
          {
            "id": "d-23",
            "t": "text",
            "text": "Chọn 2–3 ô là đủ",
            "x": 5964,
            "y": 540,
            "size": 52,
            "at": "l3:two or three",
            "color": "accent",
            "hl": [
              {
                "text": "2–3 ô",
                "at": "l3:boxes"
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
          "say": "Second stop: Tuesday, in Thảo's kitchen. She adds detail.",
          "sub": "Chặng hai: thứ Ba, trong bếp nhà Thảo. Thêm chi tiết nào."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four boxes: what you do, how often, where and with who.",
          "sub": "Bốn ô: làm gì, bao lâu một lần, ở đâu và với ai.",
          "keys": [
            "Bốn ô"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Plus one reason. Tick two or three boxes, not always all four.",
          "sub": "Thêm một lý do. Chọn hai ba ô là đủ, không cần đủ cả bốn.",
          "keys": [
            "hai ba ô"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I cook a new dish every weekend, on my own. It helps me relax after work.",
          "sub": "Cuối tuần nào tôi cũng tự nấu một món mới. Nó giúp tôi thư giãn sau giờ làm.",
          "face": "happy"
        }
      ],
      "ref": "p5,p6,p8"
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
              "d-f1",
              "d-f2",
              "d-f3"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "D",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "d-r",
            "t": "text",
            "text": "Lý do → thành câu chuyện",
            "x": 6804,
            "y": 690,
            "size": 46,
            "at": "l1:story",
            "hl": [
              {
                "text": "câu chuyện",
                "at": "l1:story"
              }
            ]
          },
          {
            "id": "d-f1",
            "t": "text",
            "text": "I play football with my colleagues",
            "x": 5964,
            "y": 620,
            "size": 40,
            "at": "l2:football"
          },
          {
            "id": "d-f2",
            "t": "text",
            "text": "every Thursday evening.",
            "x": 5964,
            "y": 680,
            "size": 40,
            "at": "l2:thursday",
            "hl": [
              {
                "text": "every Thursday evening",
                "at": "l2:evening"
              }
            ]
          },
          {
            "id": "d-f3",
            "t": "text",
            "text": "Best way to forget work.",
            "x": 5964,
            "y": 740,
            "size": 36,
            "at": "l2:forget",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A reason turns facts into a story: it keeps me fit, it's a great way to meet people.",
          "sub": "Lý do biến thông tin thành câu chuyện: “It keeps me fit”, “It's a great way to meet people”.",
          "keys": [
            "thành câu chuyện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two lines: I play football with my colleagues every Thursday evening. Best way to forget about work.",
          "sub": "Hai câu: đá bóng với đồng nghiệp mỗi tối thứ Năm, cách tuyệt nhất để quên việc."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the listener already sees a slice of your life.",
          "sub": "Người nghe đã thấy một lát cắt cuộc sống của bạn.",
          "keys": [
            "một lát cắt"
          ]
        }
      ],
      "ref": "p6,p7"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Tư: họp nhóm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "e-sw",
            "t": "illus",
            "name": "droplet",
            "x": 9072,
            "y": 200,
            "size": 220,
            "at": "l2:swimming"
          },
          {
            "id": "e-3y",
            "t": "text",
            "text": "3 năm chưa xuống nước",
            "x": 8772,
            "y": 500,
            "size": 50,
            "at": "l2:three years",
            "color": "coral",
            "hl": [
              {
                "text": "3 năm",
                "at": "l2:three years"
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
          "say": "Third stop: Wednesday. Sam asks everyone for one hobby. Thảo panics.",
          "sub": "Chặng ba: thứ Tư. Sam bảo mỗi người kể một sở thích. Thảo cuống."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She picks swimming. She hasn't been in a pool for three years.",
          "sub": "Cô chọn bơi. Ba năm nay cô chưa xuống hồ bơi lần nào.",
          "keys": [
            "Ba năm"
          ]
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "ref": "p10,p11,p12",
      "data": {
        "set": "office",
        "label": "Thứ Tư · họp nhóm",
        "actors": [
          {
            "id": "thao",
            "side": "left",
            "face": "happy"
          },
          {
            "id": "sam",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“My hobby is swimming” dù đã bỏ ba năm",
          "why": "Nói như đang làm: Sam rủ đi bơi sáng thứ Bảy, Thảo phải tìm cớ từ chối.",
          "rule": "Đã bỏ thì nói “used to”"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "My hobby is swimming.",
          "sub": "Sở thích của tôi là bơi.",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Come swimming with us on Saturday morning!",
          "sub": "Sáng thứ Bảy đi bơi cùng cả nhóm nhé!",
          "face": "happy",
          "to": "thao",
          "react": {
            "thao": "worried"
          },
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
          "say": "Talk like you still do it, and you get invited.",
          "sub": "Nói như đang làm thì bị rủ thật, giờ phải tìm cớ từ chối.",
          "keys": [
            "tìm cớ từ chối"
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
          "who": "thao",
          "say": "I used to swim a lot, but I don't have much time now.",
          "sub": "Trước tôi bơi nhiều, giờ không có mấy thời gian.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "sam",
          "say": "Oh, maybe one day you can join us!",
          "sub": "Ồ, hôm nào rảnh đi cùng nhé!",
          "phase": "redo",
          "face": "happy",
          "to": "thao"
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
          }
        ],
        "items": [
          {
            "id": "e-n",
            "t": "text",
            "text": "Mới bắt đầu:",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l1:started",
            "color": "muted"
          },
          {
            "id": "e-n2",
            "t": "text",
            "text": "I've recently taken up yoga.",
            "x": 7932,
            "y": 230,
            "size": 46,
            "at": "l1:taken up",
            "hl": [
              {
                "text": "taken up",
                "at": "l1:taken up"
              }
            ]
          },
          {
            "id": "e-l",
            "t": "text",
            "text": "Đã lâu:",
            "x": 7932,
            "y": 320,
            "size": 46,
            "at": "l2:years",
            "color": "muted"
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "I've been playing the guitar",
            "x": 7932,
            "y": 380,
            "size": 46,
            "at": "l2:playing"
          },
          {
            "id": "e-l3",
            "t": "text",
            "text": "since high school.",
            "x": 7962,
            "y": 440,
            "size": 46,
            "at": "l2:since",
            "hl": [
              {
                "text": "since",
                "at": "l2:since"
              }
            ]
          },
          {
            "id": "e-u",
            "t": "text",
            "text": "Đã bỏ:",
            "x": 7932,
            "y": 530,
            "size": 46,
            "at": "l3:stopped",
            "color": "muted"
          },
          {
            "id": "e-u2",
            "t": "text",
            "text": "I used to swim a lot.",
            "x": 7932,
            "y": 590,
            "size": 50,
            "at": "l3:used to",
            "color": "accent",
            "hl": [
              {
                "text": "used to",
                "at": "l3:used to"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Đã bỏ thì “used to”",
            "x": 8772,
            "y": 690,
            "size": 54,
            "at": "l4:used to",
            "color": "accent",
            "hl": [
              {
                "text": "used to",
                "at": "l4:used to"
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
          "say": "Just started? I've recently taken up yoga.",
          "sub": "Mới bắt đầu? “I've recently taken up yoga.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "For years? I've been playing the guitar since high school.",
          "sub": "Đã lâu? “I've been playing the guitar since high school.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Stopped? I used to swim a lot. The right time tells people how much you really do it.",
          "sub": "Đã bỏ? “I used to swim a lot.” Nói đúng thời gian, người nghe hiểu đúng mức độ.",
          "keys": [
            "hiểu đúng mức độ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "If you quit it, say used to. Don't talk as if you still do it.",
          "sub": "Đã bỏ thì nói “used to”, đừng nói như đang làm.",
          "keys": [
            "used to"
          ]
        }
      ],
      "ref": "p9,p10,p12"
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm: buồn hay nhạt?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:weekend"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "shrug"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "couch-and-lamp"
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
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:asks",
            "caption": "Thứ Năm · bàn làm việc",
            "icon": "yawning-face"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "I'm very boring at weekends.",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l2:boring",
            "color": "coral"
          },
          {
            "id": "f-b2",
            "t": "text",
            "text": "→ tự nhận mình nhạt",
            "x": 90,
            "y": 1330,
            "size": 46,
            "at": "l4:dull",
            "hl": [
              {
                "text": "nhạt",
                "at": "l4:dull"
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
          "say": "Fourth stop: Thursday. Sam asks about Thảo's weekend plans.",
          "sub": "Chặng bốn: thứ Năm. Sam hỏi cuối tuần Thảo làm gì."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Nothing much. I'm very boring at weekends.",
          "sub": "Chẳng có gì. Cuối tuần tôi buồn lắm.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Oh, I'm sure you're not boring!",
          "sub": "Ồ, chắc chắn Thảo không nhạt đâu!",
          "face": "happy",
          "react": {
            "thao": "surprised"
          }
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She meant bored. She said she's a dull person.",
          "sub": "Cô định nói “bored”, mà lại tự nhận mình là người nhạt nhẽo.",
          "keys": [
            "người nhạt nhẽo"
          ]
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Cuối tuần ở nhà buồn",
        "wrong": "I'm very boring at weekends.",
        "right": "I'm usually bored at weekends.",
        "wrongIllus": "face-with-rolling-eyes",
        "rightIllus": "yawning-face"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "I'm very boring at weekends?",
          "sub": "“I'm very boring at weekends”?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "I'm usually bored at weekends. You feel it: ed.",
          "sub": "“I'm usually bored at weekends.” Mình cảm thấy thì “-ed”.",
          "keys": [
            "-ed"
          ]
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
            "fit": "F",
            "move": "cut"
          },
          {
            "at": "l3",
            "fit": [
              "f-p",
              "f-g",
              "f-d"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-ed",
            "t": "text",
            "text": "Cảm thấy: -ed · gây ra: -ing",
            "x": 60,
            "y": 1430,
            "size": 46,
            "at": "l1:feel",
            "color": "accent",
            "hl": [
              {
                "text": "-ed",
                "at": "l1:feel"
              },
              {
                "text": "-ing",
                "at": "l1:causes"
              }
            ]
          },
          {
            "id": "f-in",
            "t": "text",
            "text": "interested in · interesting",
            "x": 60,
            "y": 1510,
            "size": 44,
            "at": "l1:interested"
          },
          {
            "id": "f-en",
            "t": "text",
            "text": "enjoy cooking ✓ · enjoy to cook ✗",
            "x": 60,
            "y": 1590,
            "size": 40,
            "at": "l2:enjoy"
          },
          {
            "id": "f-p",
            "t": "text",
            "text": "play tennis",
            "x": 60,
            "y": 1690,
            "size": 44,
            "at": "l3:play"
          },
          {
            "id": "f-g",
            "t": "text",
            "text": "go swimming",
            "x": 400,
            "y": 1690,
            "size": 44,
            "at": "l3:go"
          },
          {
            "id": "f-d",
            "t": "text",
            "text": "do yoga",
            "x": 740,
            "y": 1690,
            "size": 44,
            "at": "l3:do for"
          },
          {
            "id": "f-v2",
            "t": "text",
            "text": "I very like",
            "x": 60,
            "y": 1790,
            "size": 44,
            "at": "l4:very",
            "color": "muted"
          },
          {
            "id": "f-vx",
            "t": "strike",
            "over": "f-v2",
            "at": "l4:really"
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "→ I really like travelling",
            "x": 330,
            "y": 1790,
            "size": 44,
            "at": "l4:really",
            "hl": [
              {
                "text": "really",
                "at": "l4:really"
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
          "say": "You feel it: ed. The thing causes it: ing. I'm interested in photography. Photography is interesting.",
          "sub": "Mình cảm thấy: “-ed”. Thứ gây ra: “-ing”. “I'm interested in photography”, “Photography is interesting”.",
          "keys": [
            "-ed",
            "-ing"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "After enjoy, only ing: I enjoy cooking. With like and love, both forms work.",
          "sub": "Sau “enjoy” chỉ dùng “-ing”: “I enjoy cooking”. Với “like”, “love” thì cả hai dạng đều được."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Play for ball games, go for ing activities, do for most others. A rule of thumb, with exceptions.",
          "sub": "“Play” cho môn có bóng, “go” cho hoạt động đuôi “-ing”, “do” cho phần lớn môn còn lại. Quy tắc tham khảo, có ngoại lệ.",
          "keys": [
            "Quy tắc tham khảo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And very never sits before a verb. Say I really like travelling.",
          "sub": "Và “very” không đứng trước động từ: nói “I really like travelling”.",
          "keys": [
            "I really like travelling"
          ]
        }
      ],
      "ref": "p13,p14,p15,p16,p18"
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
            "at": "l4",
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
            "text": "⑤ Tối thứ Sáu: tiếp khách",
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
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l3"
                }
              ],
              "props": [
                "fishing-pole"
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
                  "shot": "E-SHOT-10",
                  "on": "binh",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-05",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:dinner",
            "caption": "Tối thứ Sáu · bữa tối tiếp khách",
            "icon": "fishing-pole"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "5 phút câu cá",
            "x": 2028,
            "y": 1260,
            "size": 54,
            "at": "l4:fishing",
            "color": "coral",
            "hl": [
              {
                "text": "5 phút",
                "at": "l5:five minutes"
              }
            ]
          },
          {
            "id": "g-ey",
            "t": "text",
            "text": "→ khách nhìn quanh bàn",
            "x": 2058,
            "y": 1340,
            "size": 46,
            "at": "l5:looks around",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fifth stop: Friday night, a client dinner. Thảo watches her best friend.",
          "sub": "Chặng năm: tối thứ Sáu, bữa tối tiếp khách. Thảo ngồi xem bạn thân trổ tài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, a salesman, and a fishing fanatic.",
          "sub": "Đây là Dũng, dân kinh doanh, mê câu cá như điếu đổ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Bác Bình, their calm, polite client.",
          "sub": "Còn đây là bác Bình, vị khách điềm tĩnh, lịch sự."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Fishing! The rods, the bait, which lakes have the most fish...",
          "sub": "Câu cá! Loại cần, loại mồi, hồ nào nhiều cá…",
          "face": "happy",
          "pose": "explain",
          "to": "binh"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Five minutes later, the client nods politely, and looks around the table.",
          "sub": "Năm phút sau, vị khách gật gù lịch sự, mắt nhìn quanh bàn.",
          "react": {
            "binh": "neutral"
          }
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "When Dũng stops, Bác Bình turns to ask someone else about their trip.",
          "sub": "Dũng vừa dừng, bác Bình quay sang hỏi người bên cạnh về chuyến đi của họ."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 300
        }
      ],
      "ref": "p21"
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
            "id": "g-23",
            "t": "text",
            "text": "Kể 2–3 câu → trao lượt",
            "x": 2028,
            "y": 1450,
            "size": 54,
            "at": "l1:two or three",
            "color": "accent",
            "hl": [
              {
                "text": "trao lượt",
                "at": "l1:pass"
              }
            ]
          },
          {
            "id": "g-q1",
            "t": "text",
            "text": "“What do you like to do",
            "x": 2028,
            "y": 1540,
            "size": 44,
            "at": "l2:like to do"
          },
          {
            "id": "g-q2",
            "t": "text",
            "text": "in your free time?”",
            "x": 2058,
            "y": 1600,
            "size": 44,
            "at": "l2:free time"
          },
          {
            "id": "g-q3",
            "t": "text",
            "text": "“How did you get into that?”",
            "x": 2028,
            "y": 1690,
            "size": 44,
            "at": "l3:get into",
            "hl": [
              {
                "text": "get into",
                "at": "l3:get into"
              }
            ]
          },
          {
            "id": "g-q4",
            "t": "text",
            "text": "“Where do you usually go?”",
            "x": 2028,
            "y": 1770,
            "size": 44,
            "at": "l3:usually go"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two or three lines, then pass the ball.",
          "sub": "Kể hai ba câu, rồi trao lượt.",
          "keys": [
            "trao lượt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What do you like to do in your free time? Are you into sports? Find common ground, and the talk runs itself.",
          "sub": "“What do you like to do in your free time?” “Are you into sports?” Tìm được điểm chung là chuyện tự chạy.",
          "keys": [
            "điểm chung"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "When they share, ask one more detail: How did you get into that? Where do you usually go?",
          "sub": "Khi họ kể, hỏi thêm một chi tiết: “How did you get into that?”, “Where do you usually go?”",
          "keys": [
            "hỏi thêm một chi tiết"
          ]
        }
      ],
      "ref": "p19,p20,p22"
    },
    {
      "id": "s17",
      "module": "BRK-07",
      "data": {
        "question": "Phỏng vấn hỏi lúc rảnh làm gì thì chọn gì?",
        "illus": "briefcase"
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
          "say": "What if the question comes in a job interview?",
          "sub": "Nếu câu hỏi ấy đến trong buổi phỏng vấn xin việc thì sao?",
          "keys": [
            "phỏng vấn xin việc"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
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
            "text": "⑥ Thứ Bảy: tập phỏng vấn",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:saturday"
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
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
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
                  "shot": "E-SHOT-05",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:interview",
            "caption": "Thứ Bảy · Thảo đóng vai phỏng vấn",
            "icon": "briefcase"
          },
          {
            "id": "h-q",
            "t": "text",
            "text": "Sở thích = một phẩm chất",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l4:quality",
            "color": "accent",
            "hl": [
              {
                "text": "phẩm chất",
                "at": "l4:quality"
              }
            ]
          },
          {
            "id": "h-q2",
            "t": "text",
            "text": "bền bỉ · ham học · làm nhóm",
            "x": 3996,
            "y": 1340,
            "size": 44,
            "at": "l4:persistence"
          },
          {
            "id": "h-12",
            "t": "text",
            "text": "1–2 câu là đủ",
            "x": 3996,
            "y": 1430,
            "size": 50,
            "at": "l5:one or two",
            "hl": [
              {
                "text": "1–2 câu",
                "at": "l5:sentences"
              }
            ]
          },
          {
            "id": "h-real",
            "t": "text",
            "text": "Chỉ kể sở thích thật",
            "x": 3996,
            "y": 1530,
            "size": 50,
            "at": "l6:real"
          },
          {
            "id": "h-bet",
            "t": "text",
            "text": "Chơi bài ăn tiền",
            "x": 3996,
            "y": 1610,
            "size": 46,
            "at": "l6:gambling",
            "color": "coral"
          },
          {
            "id": "h-betx",
            "t": "strike",
            "over": "h-bet",
            "at": "l6:gambling+500"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: Saturday. Dũng has a job interview next week. Thảo plays the interviewer.",
          "sub": "Chặng sáu: thứ Bảy. Tuần sau Dũng đi phỏng vấn. Thảo đóng vai người phỏng vấn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "What do you do in your free time?",
          "sub": "Lúc rảnh anh thường làm gì?",
          "face": "stern"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I run three times a week, and I'm training for my first half marathon. It's taught me a lot about setting goals.",
          "sub": "Tôi chạy ba buổi một tuần, đang tập cho giải bán marathon đầu tiên. Nó dạy tôi nhiều về đặt mục tiêu.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In an interview, a hobby shows a quality: persistence, curiosity, teamwork.",
          "sub": "Khi phỏng vấn, sở thích là cơ hội cho thấy một phẩm chất: bền bỉ, ham học, làm việc nhóm.",
          "keys": [
            "một phẩm chất"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Keep it to one or two sentences.",
          "sub": "Một hai câu là đủ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Only real hobbies you can answer questions about. And skip anything risky, like gambling at cards.",
          "sub": "Chỉ kể sở thích thật, hỏi tiếp vẫn trả lời được. Tránh thứ dễ hiểu lầm, như chơi bài ăn tiền.",
          "keys": [
            "sở thích thật"
          ]
        }
      ],
      "ref": "p23,p24,p25"
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
            "at": "l3",
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
            "text": "⑦ Chủ nhật: chẳng có gì?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:special"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "park",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "stand"
                }
              ],
              "props": [
                "sunset"
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
            "at": "l1:evening",
            "caption": "Chủ nhật · bờ hồ sau bữa tối",
            "icon": "sunset"
          },
          {
            "id": "i-n",
            "t": "text",
            "text": "Việc thường + chi tiết = hay",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l2:ordinary",
            "color": "accent",
            "hl": [
              {
                "text": "chi tiết",
                "at": "l2:detail"
              }
            ]
          },
          {
            "id": "i-w",
            "t": "text",
            "text": "I usually walk around the lake",
            "x": 5964,
            "y": 1350,
            "size": 42,
            "at": "l3:walk"
          },
          {
            "id": "i-w2",
            "t": "text",
            "text": "after dinner.",
            "x": 5994,
            "y": 1410,
            "size": 42,
            "at": "l3:dinner"
          },
          {
            "id": "i-hb",
            "t": "text",
            "text": "Hobby: việc chủ động làm",
            "x": 5964,
            "y": 1520,
            "size": 46,
            "at": "l4:hobby"
          },
          {
            "id": "i-in",
            "t": "text",
            "text": "Interest: chủ đề quan tâm",
            "x": 5964,
            "y": 1600,
            "size": 46,
            "at": "l4:interest",
            "hl": [
              {
                "text": "Interest",
                "at": "l4:interest"
              }
            ]
          },
          {
            "id": "i-hi",
            "t": "text",
            "text": "I'm interested in history, so I watch",
            "x": 5964,
            "y": 1700,
            "size": 40,
            "at": "l5:history"
          },
          {
            "id": "i-hi2",
            "t": "text",
            "text": "a lot of documentaries.",
            "x": 5994,
            "y": 1760,
            "size": 40,
            "at": "l5:documentaries"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Sunday evening. Thảo thinks: what if I have no special hobby?",
          "sub": "Chặng bảy: tối Chủ nhật. Thảo nghĩ: lỡ mình chẳng có sở thích gì đặc biệt thì sao?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ordinary things with a detail are lovely: evening walks, movies with family, weekend cooking.",
          "sub": "Việc bình thường kể có chi tiết vẫn rất hay: đi dạo tối, xem phim với gia đình, nấu cơm cuối tuần.",
          "keys": [
            "có chi tiết"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I usually walk around the lake after dinner. It's the quietest part of my day.",
          "sub": "Tối nào tôi cũng đi dạo quanh hồ sau bữa tối. Đó là lúc yên tĩnh nhất trong ngày.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A hobby is something you actively do. An interest is wider: a topic you care about.",
          "sub": "“Hobby” là việc bạn chủ động làm thường xuyên; “interest” rộng hơn, là chủ đề bạn quan tâm.",
          "keys": [
            "chủ đề bạn quan tâm"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So: I'm interested in history, so I watch a lot of documentaries.",
          "sub": "Nên cứ nói: “I'm interested in history, so I watch a lot of documentaries.”"
        }
      ],
      "ref": "p26,p27"
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
            "at": "l6",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑧ Thứ Hai sau · 12:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:monday"
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
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "curry-rice"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
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
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-05",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:lunch",
            "caption": "Thứ Hai, 12:00 · bữa trưa",
            "icon": "curry-rice"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "✓ 1 sở thích + chi tiết",
            "x": 7932,
            "y": 1260,
            "size": 48,
            "at": "l3:really into"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "✓ “What about you?”",
            "x": 7932,
            "y": 1340,
            "size": 48,
            "at": "l3:what about"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "✓ câu hỏi tiếp tự đến",
            "x": 7932,
            "y": 1420,
            "size": 48,
            "at": "l4:turn out"
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Một nghề cho chín ✓",
            "x": 7932,
            "y": 1540,
            "size": 62,
            "at": "l6:mastered",
            "color": "accent",
            "hl": [
              {
                "text": "cho chín",
                "at": "l6:mastered"
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
          "say": "Last stop: next Monday, lunch again. Same table, same Sam.",
          "sub": "Chặng cuối: thứ Hai tuần sau, lại bữa trưa. Vẫn bàn ấy, vẫn Sam ấy.",
          "keys": [
            "thứ Hai tuần sau"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "So, Thảo, any plans this weekend?",
          "sub": "Cuối tuần này Thảo có kế hoạch gì không?",
          "face": "happy",
          "to": "thao"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I'm really into cooking. Last weekend it was Thai green curry. What about you?",
          "sub": "Tôi mê nấu ăn lắm. Cuối tuần rồi là cà ri xanh Thái. Còn chị thì sao?",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Thai curry? How did it turn out?",
          "sub": "Cà ri Thái á? Món đó thế nào?",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "A bit too spicy. Want to try it next time?",
          "sub": "Hơi cay quá. Lần sau chị thử không?",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "One craft mastered beats nine half learned. This time, one dish, cooked through.",
          "sub": "“Một nghề cho chín…” Lần này chỉ một món, mà chín tới.",
          "keys": [
            "chín tới"
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
      "ref": "p3,p19,outro"
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
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:one",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:used to",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:pass",
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
            "at": "l1:one"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9372,
            "y": 30,
            "at": "l2:used to"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3468,
            "y": 1120,
            "at": "l3:pass"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: one real hobby, with one detail.",
          "sub": "Tóm lại: một sở thích thật, kèm một chi tiết.",
          "keys": [
            "một chi tiết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Say used to for what you quit.",
          "sub": "Đã bỏ thì nói “used to”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two or three lines, then pass the ball: What about you?",
          "sub": "Hai ba câu, rồi trao lượt: “What about you?”",
          "keys": [
            "trao lượt"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p4,p12,p22,outro"
    },
    {
      "id": "s32",
      "module": "QUIZ-01",
      "ref": "questions[24]",
      "data": {
        "q": "What does I'm very boring at weekends actually say about the speaker?",
        "options": [
          "It says you are a dull person, when you mean you feel bored",
          "It says your weekends are full of exciting and interesting activities",
          "It says your colleague is boring, which can make him quite upset"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "yawning-face",
        "why": "“Boring” mô tả thứ gây chán, nên câu này vô tình tự nhận mình nhạt nhẽo."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What does I'm very boring at weekends actually say about the speaker?",
          "sub": "Câu “I'm very boring at weekends” thật ra nói gì về người nói?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It says you are a dull person, when you mean you feel bored.",
          "sub": "Nó nói bạn là người nhạt nhẽo, trong khi bạn chỉ muốn nói mình thấy chán."
        }
      ]
    },
    {
      "id": "s33",
      "module": "END-05",
      "data": {
        "text": "Tối nay: hai câu về một sở thích thật",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight: two lines about one real hobby, plus What about you? Bored? Not with forty questions below!",
          "sub": "Tối nay: hai câu về một sở thích thật, kèm “What about you?” Chán ư? Còn bốn mươi câu hỏi bên dưới!",
          "face": "laugh"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 dựng lại theo hạt nhân (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô đi theo TUẦN ĐẦU Thảo vào nhóm dự án của Sam (bữa trưa thứ Hai → T2 tối viết lại → T3 bếp → T4 họp nhóm “Khoan đã!” → T5 bored/boring → T6 tối tiếp khách → T7 tập phỏng vấn → CN bờ hồ → bữa trưa thứ Hai sau). Nhân vật (w145/_series/english-self-introducers.md): Thảo (người kể năm sở thích p3, Hiền p11, người than cuối tuần p17), Sam (đồng nghiệp ở bữa trưa p3, trưởng nhóm rủ bơi p11), Dũng (Đạt câu cá p21; người phỏng vấn p24), Bác Bình (vị khách p21). Ca dao: “Một nghề cho chín, còn hơn chín nghề” (mở: năm món đều tái → khép: một món chín tới). Cảnh ngắt nhịp: BRK-06 montage mở lời (p2), BRK-04 Sai/Đúng boring/bored (p17), BRK-07 rehook phỏng vấn (p23). Bản cũ: w145/bak/how-to-talk-about-your-hobbies-in-english--w01.js.",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
