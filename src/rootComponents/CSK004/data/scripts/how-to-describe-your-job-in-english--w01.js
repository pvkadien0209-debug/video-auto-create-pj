// Kịch bản video W lần 3 (#110) — "Giới thiệu công việc hiện tại bằng tiếng Anh" · chuỗi "Giới thiệu bản thân bằng tiếng Anh"
// Giọng đọc tiếng Anh (say), phụ đề tiếng Việt (sub). HOOK-03: ❓ “What do you do?” khi đang cầm ly cà phê (p4).
const L = (id, who, say, sub, x = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...x });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-describe-your-job-in-english--w01",
  "unit": {
    "audience": "english-self-introducers",
    "slug": "how-to-describe-your-job-in-english",
    "door": "ky-nang",
    "level": "B1",
    "title": "Giới thiệu công việc hiện tại bằng tiếng Anh",
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
            "id": "a-2",
            "t": "text",
            "text": "2 việc chính",
            "x": 60,
            "y": 120,
            "size": 150,
            "at": "l1:two",
            "color": "accent",
            "hl": [
              {
                "text": "2 việc",
                "at": "l1:tasks"
              }
            ]
          },
          {
            "id": "a-10",
            "t": "text",
            "text": "nhớ được 2, không nổi 10",
            "x": 70,
            "y": 330,
            "size": 46,
            "at": "l1:ten"
          },
          {
            "id": "a-jd",
            "t": "text",
            "text": "Ta tưởng: đọc nguyên bản mô tả?",
            "x": 70,
            "y": 430,
            "size": 46,
            "at": "l2:job description",
            "color": "muted"
          },
          {
            "id": "a-jdx",
            "t": "strike",
            "over": "a-jd",
            "at": "l2:hostage+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two main tasks. People remember two things about your job, not ten.",
          "sub": "Hai việc chính. Người nghe nhớ được hai việc của bạn, không nhớ nổi mười.",
          "keys": [
            "Hai việc chính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet some of us read out the whole job description, like a hostage statement.",
          "sub": "Vậy mà có người đọc nguyên bản mô tả công việc, như đọc bản tường trình.",
          "keys": [
            "bản mô tả công việc"
          ]
        }
      ],
      "ref": "p15"
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
              "set": "hotel",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "walk",
                  "at": "l3"
                }
              ],
              "props": [
                "hot-beverage"
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
            "caption": "8:30 · quầy cà phê hội chợ",
            "icon": "hot-beverage"
          },
          {
            "id": "a-dc",
            "t": "text",
            "text": "“I'm drinking coffee?”",
            "x": 70,
            "y": 560,
            "size": 50,
            "at": "l5:drinking",
            "color": "coral"
          },
          {
            "id": "a-cd",
            "t": "text",
            "text": "“Hỏi một đằng, trả lời một nẻo”",
            "x": 70,
            "y": 660,
            "size": 48,
            "at": "l7:asked",
            "color": "accent",
            "hl": [
              {
                "text": "một nẻo",
                "at": "l7:another"
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
          "say": "Meet Thảo, an accountant at a logistics company in Da Nang.",
          "sub": "Đây là Thảo, kế toán một công ty logistics ở Đà Nẵng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Eight thirty, a logistics trade fair. Coffee in hand, name badge on.",
          "sub": "Tám rưỡi sáng, hội chợ ngành logistics. Tay cầm cà phê, ngực đeo thẻ tên."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Sam, from a foreign company looking for partners.",
          "sub": "Còn đây là Sam, người của một công ty nước ngoài đang tìm đối tác."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Hi! So, what do you do?",
          "sub": "Chào chị! Vậy chị làm nghề gì?",
          "face": "happy",
          "to": "thao"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Um... I'm drinking coffee?",
          "sub": "Ờ… tôi đang uống cà phê?",
          "face": "worried"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "sam",
          "say": "Ha! I mean, your job.",
          "sub": "Ha! Ý tôi là công việc của chị cơ.",
          "face": "surprised"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Asked one way, answered another. Hold that coffee, we'll come back.",
          "sub": "“Hỏi một đằng, trả lời một nẻo.” Giữ ly cà phê đấy, lát ta quay lại.",
          "keys": [
            "Hỏi một đằng, trả lời một nẻo"
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
      "ref": "intro,p4"
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
            "text": "“What do you do?” hỏi gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:asking"
          },
          {
            "id": "b-do",
            "t": "text",
            "text": "What do you do? → nghề",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:job",
            "color": "accent",
            "hl": [
              {
                "text": "nghề",
                "at": "l2:job"
              }
            ]
          },
          {
            "id": "b-ing",
            "t": "text",
            "text": "What are you doing? → lúc này",
            "x": 2028,
            "y": 240,
            "size": 50,
            "at": "l2:right now",
            "color": "muted"
          },
          {
            "id": "b-ps",
            "t": "text",
            "text": "I work in sales. ✓ thường xuyên",
            "x": 2868,
            "y": 160,
            "size": 46,
            "at": "l3:work in sales",
            "hl": [
              {
                "text": "I work",
                "at": "l3:simple"
              }
            ]
          },
          {
            "id": "b-pc",
            "t": "text",
            "text": "I'm working in sales. → tạm thời",
            "x": 2868,
            "y": 240,
            "size": 46,
            "at": "l4:working",
            "color": "muted"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Nghề · nơi làm · việc hằng ngày",
            "x": 2028,
            "y": 360,
            "size": 54,
            "at": "l5:three layers",
            "color": "accent",
            "hl": [
              {
                "text": "việc hằng ngày",
                "at": "l5:every day"
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
          "say": "So what is that question really asking?",
          "sub": "Vậy câu hỏi ấy thật ra hỏi gì?",
          "keys": [
            "thật ra hỏi gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What do you do asks about your job. What are you doing asks about right now.",
          "sub": "“What do you do?” hỏi nghề. “What are you doing?” mới hỏi lúc này.",
          "keys": [
            "hỏi nghề"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Answer in the present simple: I work in sales. A job is something you do again and again.",
          "sub": "Trả lời bằng hiện tại đơn: “I work in sales”, vì công việc là điều lặp lại thường xuyên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "I'm working in sales sounds temporary, or brand new.",
          "sub": "“I'm working in sales” nghe như việc tạm thời, hoặc mới bắt đầu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So answer in three layers: your job, where you work, and what you do every day.",
          "sub": "Vậy trả lời theo ba lớp: nghề gì, làm ở đâu, hằng ngày làm việc gì.",
          "keys": [
            "ba lớp"
          ]
        }
      ],
      "ref": "p1,p3,p5"
    },
    {
      "id": "s03",
      "module": "BRK-06",
      "data": {
        "title": "Cùng một câu trả lời",
        "items": [
          {
            "illus": "briefcase",
            "text": "What do you do?"
          },
          {
            "illus": "money-bag",
            "text": "For a living?"
          },
          {
            "illus": "office-building",
            "text": "Line of work?"
          },
          {
            "illus": "round-pushpin",
            "text": "Where do you work?"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "For a living? Line of work? Where do you work?",
          "sub": "“For a living?” “Line of work?” “Where do you work?”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Same question. Same answer.",
          "sub": "Cùng một ý hỏi. Cùng một câu trả lời.",
          "keys": [
            "Cùng một câu trả lời"
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
            "id": "b-day",
            "t": "text",
            "text": "1 ngày hội chợ · 8 chặng",
            "x": 2028,
            "y": 500,
            "size": 50,
            "at": "l1:one day",
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
            "text": "9:00",
            "x": 2048,
            "y": 615,
            "size": 46,
            "at": "l1:eight+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "10:30",
            "x": 2253,
            "y": 615,
            "size": 46,
            "at": "l1:eight+340"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "12:00",
            "x": 2458,
            "y": 615,
            "size": 46,
            "at": "l1:eight+560"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "14:00",
            "x": 2663,
            "y": 615,
            "size": 46,
            "at": "l1:eight+780"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "15:30",
            "x": 2868,
            "y": 615,
            "size": 46,
            "at": "l1:eight+1000"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "17:00",
            "x": 3073,
            "y": 615,
            "size": 46,
            "at": "l1:eight+1220"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "18:00",
            "x": 3278,
            "y": 615,
            "size": 46,
            "at": "l1:eight+1440"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "18:30",
            "x": 3483,
            "y": 615,
            "size": 46,
            "at": "l1:eight+1660"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One day at the fair, eight stops, back to the coffee counter at six thirty.",
          "sub": "Một ngày ở hội chợ, tám chặng, về lại quầy cà phê lúc sáu rưỡi chiều.",
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
            "at": "l4",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 9:00: nói nghề",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "explain"
                }
              ],
              "props": [
                "name-badge"
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
            "at": "l1:booth",
            "caption": "9:00 · quầy công ty Thảo",
            "icon": "name-badge"
          },
          {
            "id": "c-ti",
            "t": "text",
            "text": "Chức danh:",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l2:title",
            "color": "muted"
          },
          {
            "id": "c-ti2",
            "t": "text",
            "text": "I'm a graphic designer.",
            "x": 3996,
            "y": 230,
            "size": 46,
            "at": "l2:designer"
          },
          {
            "id": "c-fi",
            "t": "text",
            "text": "Lĩnh vực:",
            "x": 3996,
            "y": 320,
            "size": 46,
            "at": "l3:field",
            "color": "muted"
          },
          {
            "id": "c-fi2",
            "t": "text",
            "text": "I work in human resources.",
            "x": 3996,
            "y": 380,
            "size": 46,
            "at": "l3:human"
          },
          {
            "id": "c-an",
            "t": "text",
            "text": "an engineer · a driver",
            "x": 3996,
            "y": 480,
            "size": 50,
            "at": "l5:engineer",
            "color": "accent",
            "hl": [
              {
                "text": "an",
                "at": "l5:engineer"
              },
              {
                "text": "a",
                "at": "l5:driver"
              }
            ]
          },
          {
            "id": "c-mk",
            "t": "text",
            "text": "in marketing (không mạo từ)",
            "x": 3996,
            "y": 560,
            "size": 44,
            "at": "l5:marketing"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "First stop: nine a.m., Thảo's company booth.",
          "sub": "Chặng một: chín giờ, quầy của công ty Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two ways to say your job. By title: I'm a graphic designer, I work as a project manager.",
          "sub": "Hai cách nói nghề. Theo chức danh: “I'm a graphic designer”, “I work as a project manager”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Or by field: I work in human resources, I'm in finance. Pick the clearer one.",
          "sub": "Hoặc theo lĩnh vực: “I work in human resources”, “I'm in finance”. Chọn cách dễ hiểu hơn.",
          "keys": [
            "dễ hiểu hơn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I'm an accountant. I work in finance, at a logistics company.",
          "sub": "Tôi là kế toán, làm mảng tài chính ở một công ty logistics.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Mind the article: an engineer, a driver. Fields need none: in marketing.",
          "sub": "Nhớ mạo từ: “an engineer”, “a driver”. Lĩnh vực thì không cần: “in marketing”.",
          "keys": [
            "Nhớ mạo từ"
          ]
        }
      ],
      "ref": "p6,p7"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 10:30: “an office staff”",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:ten thirty"
          },
          {
            "id": "d-ic",
            "t": "illus",
            "name": "office-building",
            "x": 7154,
            "y": 200,
            "size": 200,
            "at": "l2:purchasing"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Second stop: ten thirty. Thảo's boss meets Sam.",
          "sub": "Chặng hai: mười rưỡi. Sếp của Thảo gặp Sam."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Cô Hoa, who handles every purchasing contract in the company. Exactly what Sam needs.",
          "sub": "Đây là cô Hoa, người lo toàn bộ hợp đồng mua hàng của công ty. Đúng thứ Sam đang cần.",
          "keys": [
            "toàn bộ hợp đồng mua hàng"
          ]
        }
      ],
      "ref": "p9"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "ref": "p8,p9",
      "data": {
        "set": "hotel",
        "label": "10:30 · hội chợ",
        "actors": [
          {
            "id": "hoa",
            "side": "left"
          },
          {
            "id": "sam",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“I'm an office staff”, “Office”",
          "why": "“Staff” là cả tập thể; “office” chỉ nói chỗ ngồi, không nói việc mình làm.",
          "rule": "Nói “a staff member”, hoặc nói rõ mảng việc"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "hoa",
          "say": "I'm an office staff.",
          "sub": "Tôi là nhân viên văn phòng.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Which department?",
          "sub": "Phòng nào vậy?",
          "to": "hoa"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Office.",
          "sub": "Văn phòng.",
          "face": "neutral",
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
          "say": "Staff means all the workers together. And office is where she sits, not what she does.",
          "sub": "“Staff” là cả tập thể. Còn “office” là chỗ ngồi, không phải việc cô làm.",
          "keys": [
            "chỗ ngồi"
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
          "who": "hoa",
          "say": "I work in purchasing. I handle all our purchasing contracts.",
          "sub": "Tôi làm mảng mua hàng, lo toàn bộ hợp đồng mua hàng của công ty.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain",
          "react": {
            "sam": "surprised"
          }
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "sam",
          "say": "Really? Then we should talk!",
          "sub": "Thật à? Vậy mình nên nói chuyện nhé!",
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
            "id": "d-st",
            "t": "text",
            "text": "I'm a staff.",
            "x": 5964,
            "y": 170,
            "size": 50,
            "at": "l1:staff",
            "color": "muted"
          },
          {
            "id": "d-stx",
            "t": "strike",
            "over": "d-st",
            "at": "l1:whole group"
          },
          {
            "id": "d-sm",
            "t": "text",
            "text": "→ I'm a staff member.",
            "x": 5964,
            "y": 250,
            "size": 50,
            "at": "l1:staff member",
            "hl": [
              {
                "text": "staff member",
                "at": "l1:member"
              }
            ]
          },
          {
            "id": "d-ad",
            "t": "text",
            "text": "→ I work in the admin department.",
            "x": 5964,
            "y": 330,
            "size": 44,
            "at": "l2:admin"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Nói việc mình làm,",
            "x": 5964,
            "y": 560,
            "size": 62,
            "at": "l3:what you do",
            "color": "accent"
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "đừng nói chỗ mình ngồi",
            "x": 5964,
            "y": 650,
            "size": 62,
            "at": "l3:sit",
            "color": "accent",
            "hl": [
              {
                "text": "chỗ mình ngồi",
                "at": "l3:sit"
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
          "say": "Staff is the whole group, so say I'm a staff member.",
          "sub": "“Staff” là cả tập thể, nên nói “I'm a staff member”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Better still, name your area: I work in the admin department.",
          "sub": "Tốt hơn nữa, nói rõ mảng việc: “I work in the admin department”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Say what you do, not where you sit.",
          "sub": "Nói việc mình làm, đừng chỉ nói chỗ mình ngồi.",
          "keys": [
            "Nói việc mình làm"
          ]
        }
      ],
      "ref": "p8,p10"
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
            "at": "l5",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 12:00: at, for hay in?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:noon"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "takeout-box"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-05",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:lunch",
            "caption": "12:00 · bữa trưa ở hội chợ",
            "icon": "takeout-box"
          },
          {
            "id": "e-at",
            "t": "text",
            "text": "at a bank → nơi đến làm",
            "x": 7932,
            "y": 170,
            "size": 42,
            "at": "l3:bank",
            "hl": [
              {
                "text": "at",
                "at": "l3:at"
              }
            ]
          },
          {
            "id": "e-for",
            "t": "text",
            "text": "for a company → người của",
            "x": 7932,
            "y": 250,
            "size": 40,
            "at": "l3:for"
          },
          {
            "id": "e-in",
            "t": "text",
            "text": "in a hospital · in marketing",
            "x": 7932,
            "y": 330,
            "size": 42,
            "at": "l4:hospital",
            "hl": [
              {
                "text": "in",
                "at": "l4:in"
              }
            ]
          },
          {
            "id": "e-pk",
            "t": "text",
            "text": "We make packaging for food producers.",
            "x": 7932,
            "y": 430,
            "size": 38,
            "at": "l5:packaging",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Third stop: noon, lunch boxes at the fair. Sam sits next to Thảo's best friend.",
          "sub": "Chặng ba: giữa trưa, cơm hộp ở hội chợ. Sam ngồi cạnh bạn thân của Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Dũng, a salesman at a small packaging company. Fast talker.",
          "sub": "Đây là Dũng, nhân viên kinh doanh công ty bao bì nhỏ. Nói nhanh như gió."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "At is where you go: at a bank in Hanoi. For is whose team you're on: for a logistics company.",
          "sub": "“At” là nơi bạn đến làm: “at a bank in Hanoi”. “For”: bạn là người của công ty nào."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In goes with a type of place or a field: in a hospital, in marketing.",
          "sub": "“In” đi với loại nơi làm hoặc lĩnh vực: “in a hospital”, “in marketing”.",
          "keys": [
            "loại nơi làm hoặc lĩnh vực"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "I work for a small company. We make packaging for food producers.",
          "sub": "Tôi làm cho một công ty nhỏ. Bên tôi làm bao bì cho các nhà sản xuất thực phẩm.",
          "face": "happy",
          "to": "sam"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Unknown company? Add one line on what it makes. New friends just need the type, like a big bank.",
          "sub": "Công ty không nổi tiếng? Thêm một câu nó làm gì. Người mới quen chỉ cần loại công ty, tên để dành sau.",
          "keys": [
            "Thêm một câu"
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
      "ref": "p11,p12,p13"
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
            "text": "④ 14:00: hằng ngày làm gì?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:notes"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "hotel",
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
                  "at": "l4",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:quiet",
            "caption": "14:00 · góc nghỉ của hội chợ",
            "icon": "spiral-notepad"
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "I'm responsible for managing…",
            "x": 60,
            "y": 1260,
            "size": 42,
            "at": "l2:responsible",
            "hl": [
              {
                "text": "responsible for",
                "at": "l2:responsible"
              }
            ]
          },
          {
            "id": "f-c",
            "t": "text",
            "text": "I'm in charge of the team.",
            "x": 60,
            "y": 1330,
            "size": 42,
            "at": "l2:charge"
          },
          {
            "id": "f-d",
            "t": "text",
            "text": "I deal with complaints.",
            "x": 60,
            "y": 1400,
            "size": 42,
            "at": "l2:deal"
          },
          {
            "id": "f-i",
            "t": "text",
            "text": "My job involves travelling.",
            "x": 60,
            "y": 1470,
            "size": 42,
            "at": "l2:involves"
          },
          {
            "id": "f-ing",
            "t": "text",
            "text": "for / involve + -ing",
            "x": 60,
            "y": 1550,
            "size": 50,
            "at": "l3:ing",
            "color": "accent",
            "hl": [
              {
                "text": "-ing",
                "at": "l3:ing"
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
          "say": "Fourth stop: two p.m. Thảo makes notes in a quiet corner.",
          "sub": "Chặng bốn: hai giờ chiều. Thảo ngồi góc yên tĩnh ghi chép."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Daily tasks: I'm responsible for, I'm in charge of, I deal with, my job involves.",
          "sub": "Việc hằng ngày: “I'm responsible for…”, “I'm in charge of…”, “I deal with…”, “My job involves…”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "After responsible for and involve, use ing.",
          "sub": "Sau “responsible for” và “involve” là dạng “-ing”.",
          "keys": [
            "-ing"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "I'm mainly responsible for paying our suppliers, and I deal with customer invoices.",
          "sub": "Tôi chủ yếu lo thanh toán cho nhà cung cấp, và xử lý hoá đơn của khách hàng.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two or three main tasks. Don't read your job description aloud.",
          "sub": "Hai đến ba việc chính. Đừng đọc lại cả bản mô tả công việc.",
          "keys": [
            "Hai đến ba việc chính"
          ]
        }
      ],
      "ref": "p14,p15,p16"
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
          }
        ],
        "items": [
          {
            "id": "f-hr",
            "t": "text",
            "text": "an HR executive at a garment factory",
            "x": 900,
            "y": 1780,
            "size": 36,
            "at": "l1:garment"
          },
          {
            "id": "f-b1",
            "t": "text",
            "text": "☐ Nghề  ☐ Nơi làm + giới từ",
            "x": 60,
            "y": 1650,
            "size": 46,
            "at": "l2:place"
          },
          {
            "id": "f-b2",
            "t": "text",
            "text": "☐ 2 việc chính  ☐ 1 cảm nhận",
            "x": 60,
            "y": 1730,
            "size": 46,
            "at": "l2:feeling",
            "hl": [
              {
                "text": "2 việc chính",
                "at": "l2:tasks"
              }
            ]
          },
          {
            "id": "f-b3",
            "t": "text",
            "text": "Viết 1 lần, dùng rất lâu",
            "x": 60,
            "y": 1810,
            "size": 40,
            "at": "l2:write",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Like: I'm an HR executive at a garment factory, mainly responsible for recruitment.",
          "sub": "Ví dụ: “I'm an HR executive at a garment factory. I'm mainly responsible for recruitment.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Four boxes: job, place with the right preposition, two main tasks, one feeling. Write them once, use them for years.",
          "sub": "Bốn ô: nghề, nơi làm đúng giới từ, hai việc chính, một câu cảm nhận. Viết một lần, dùng rất lâu.",
          "keys": [
            "Viết một lần, dùng rất lâu"
          ]
        }
      ],
      "ref": "p16,p17"
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 15:30: người ngoài ngành",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:outside"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "hotel",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
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
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:half past",
            "caption": "15:30 · gặp lại Sam",
            "icon": "handshake"
          },
          {
            "id": "g-qa",
            "t": "text",
            "text": "QA engineer = ?",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:engineer",
            "color": "muted"
          },
          {
            "id": "g-te",
            "t": "text",
            "text": "→ “I test apps before they're released.”",
            "x": 2028,
            "y": 1340,
            "size": 38,
            "at": "l2:test",
            "color": "accent"
          },
          {
            "id": "g-ba",
            "t": "text",
            "text": "Basically, I… / In simple terms…",
            "x": 2028,
            "y": 1440,
            "size": 42,
            "at": "l3:basically",
            "hl": [
              {
                "text": "Basically",
                "at": "l3:basically"
              }
            ]
          },
          {
            "id": "g-ex",
            "t": "text",
            "text": "1 ví dụ nhỏ > mọi định nghĩa",
            "x": 2028,
            "y": 1540,
            "size": 46,
            "at": "l5:example",
            "hl": [
              {
                "text": "1 ví dụ nhỏ",
                "at": "l5:example"
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
          "say": "Fifth stop: half past three. Sam is back, and Sam works outside finance.",
          "sub": "Chặng năm: ba rưỡi. Sam quay lại, mà Sam không làm ngành tài chính."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Titles like QA engineer paint no picture. Explain the result: I test apps before they're released.",
          "sub": "Chức danh như “QA engineer” chẳng gợi hình ảnh gì. Hãy nói kết quả: “I test apps before they're released.”",
          "keys": [
            "nói kết quả"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Basically, I make sure our suppliers get paid on time. Last week I helped a client fix a payment problem in an hour.",
          "sub": "Nói đơn giản, tôi lo cho nhà cung cấp được trả tiền đúng hạn. Tuần trước tôi giúp một khách sửa lỗi thanh toán trong một giờ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "In an hour? Impressive!",
          "sub": "Trong một giờ á? Giỏi thật!",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Basically warns them: simple version coming. And one small example beats every definition.",
          "sub": "“Basically” báo trước: sắp nói đơn giản. Một ví dụ nhỏ dễ nhớ hơn mọi định nghĩa.",
          "keys": [
            "Một ví dụ nhỏ"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s13",
      "module": "BRK-04",
      "data": {
        "title": "Kỹ sư kiểm thử, ở đám cưới",
        "wrong": "I do regression testing and maintain the automation pipeline.",
        "right": "Basically, I check apps for problems before people use them.",
        "wrongIllus": "face-with-rolling-eyes",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "At a wedding: I do regression testing...",
          "sub": "Ở đám cưới: “I do regression testing…”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Basically, I check apps for problems before people use them.",
          "sub": "“Basically, I check apps for problems before people use them.”",
          "keys": [
            "Basically"
          ]
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s14",
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
            "text": "Ngoài ngành nghe kết quả,",
            "x": 2028,
            "y": 1650,
            "size": 54,
            "at": "l1:outsiders",
            "color": "accent",
            "hl": [
              {
                "text": "kết quả",
                "at": "l1:results"
              }
            ]
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "không nghe thuật ngữ",
            "x": 2028,
            "y": 1740,
            "size": 54,
            "at": "l1:jargon",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "All correct, all jargon, and the guest switches to the food. Outsiders hear results, not jargon.",
          "sub": "Đúng hết mà toàn thuật ngữ, khách chuyển sang chuyện món ăn. Người ngoài ngành nghe kết quả, không nghe thuật ngữ.",
          "keys": [
            "nghe kết quả, không nghe thuật ngữ"
          ]
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Kể công việc mà than thì sao?",
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
          "say": "What if your job is a pain, and you say so?",
          "sub": "Nếu công việc đang mệt, và bạn kể thật thì sao?",
          "keys": [
            "kể thật"
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
            "text": "⑥ 17:00: than hay kể?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:five"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "shrug"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold"
                }
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
            "at": "l1:stand",
            "caption": "17:00 · gian hàng bao bì",
            "icon": "package"
          },
          {
            "id": "h-c",
            "t": "text",
            "text": "Sếp khó · lương thấp · việc nhiều",
            "x": 3996,
            "y": 1260,
            "size": 44,
            "at": "l2:boss",
            "color": "coral"
          },
          {
            "id": "h-s",
            "t": "text",
            "text": "Sam: đang tìm nhà cung cấp",
            "x": 3996,
            "y": 1350,
            "size": 40,
            "at": "l4:purchasing",
            "color": "accent",
            "hl": [
              {
                "text": "nhà cung cấp",
                "at": "l4:suppliers"
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
          "say": "Sixth stop: five p.m. at Dũng's stand. Sam asks Dũng about his job.",
          "sub": "Chặng sáu: năm giờ chiều, gian hàng của Dũng. Sam hỏi Dũng về công việc.",
          "keys": [
            "năm giờ chiều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My boss is difficult, the pay is low, and there's too much work...",
          "sub": "Sếp khó, lương thấp, việc thì nhiều…",
          "face": "sad",
          "pose": "shrug",
          "to": "sam"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "I see... Excuse me, I have to go.",
          "sub": "Vậy à… Xin phép, tôi phải đi rồi.",
          "face": "worried",
          "react": {
            "dung": "neutral"
          }
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A month later, Dũng learns: Sam was a purchasing manager looking for suppliers. Of packaging.",
          "sub": "Tháng sau Dũng mới biết: Sam là quản lý mua hàng đang tìm nhà cung cấp. Bao bì hẳn hoi.",
          "keys": [
            "Bao bì hẳn hoi"
          ]
        }
      ],
      "ref": "p24"
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
            "id": "h-y",
            "t": "text",
            "text": "I've been working there for 3 years.",
            "x": 3996,
            "y": 1470,
            "size": 40,
            "at": "l1:working there",
            "hl": [
              {
                "text": "for",
                "at": "l1:for"
              }
            ]
          },
          {
            "id": "h-j",
            "t": "text",
            "text": "I joined the company last year.",
            "x": 3996,
            "y": 1540,
            "size": 40,
            "at": "l1:joined"
          },
          {
            "id": "h-f",
            "t": "text",
            "text": "It's challenging, but I really enjoy it.",
            "x": 3996,
            "y": 1630,
            "size": 38,
            "at": "l2:challenging",
            "color": "accent",
            "hl": [
              {
                "text": "really enjoy",
                "at": "l2:enjoy"
              }
            ]
          },
          {
            "id": "h-cd",
            "t": "text",
            "text": "“Tốt đẹp phô ra…”",
            "x": 3996,
            "y": 1750,
            "size": 56,
            "at": "l4:good",
            "color": "accent",
            "hl": [
              {
                "text": "phô ra",
                "at": "l4:show"
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
          "say": "Add time: I've been working there for three years, or I joined the company last year.",
          "sub": "Thêm thời gian: “I've been working there for three years”, hay “I joined the company last year”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Add one feeling: It's challenging, but I really enjoy it. The best part is working with kids.",
          "sub": "Thêm một câu cảm nhận: “It's challenging, but I really enjoy it.” “The best part is working with kids.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Keep it positive or neutral, especially with new people. Save the complaints for close friends.",
          "sub": "Giữ giọng tích cực hoặc trung tính, nhất là với người mới quen. Than phiền để dành cho bạn thân.",
          "keys": [
            "Than phiền để dành cho bạn thân"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "As the old saying goes: show the good, cover the bad.",
          "sub": "Ông bà dặn: “Tốt đẹp phô ra, xấu xa đậy lại.”"
        }
      ],
      "ref": "p22,p23,p25"
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
            "at": "l2:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 18:00: chưa có việc?",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:six"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "shop",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think"
                }
              ],
              "props": [
                "package"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                }
              ]
            },
            "at": "l1:packs",
            "caption": "18:00 · dọn gian hàng",
            "icon": "package"
          },
          {
            "id": "i-b",
            "t": "text",
            "text": "I'm between jobs at the moment.",
            "x": 5964,
            "y": 1260,
            "size": 40,
            "at": "l3:between"
          },
          {
            "id": "i-l",
            "t": "text",
            "text": "I'm looking for a new role",
            "x": 5964,
            "y": 1330,
            "size": 40,
            "at": "l3:looking"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "in logistics.",
            "x": 5994,
            "y": 1390,
            "size": 40,
            "at": "l3:logistics"
          },
          {
            "id": "i-ok",
            "t": "text",
            "text": "Bình thản → bình thường",
            "x": 5964,
            "y": 1470,
            "size": 48,
            "at": "l4:normal",
            "color": "accent",
            "hl": [
              {
                "text": "bình thường",
                "at": "l4:normal"
              }
            ]
          },
          {
            "id": "i-run",
            "t": "text",
            "text": "I run a small restaurant → điều hành",
            "x": 5964,
            "y": 1580,
            "size": 38,
            "at": "l5:run"
          },
          {
            "id": "i-own",
            "t": "text",
            "text": "I own a noodle shop → sở hữu",
            "x": 5964,
            "y": 1650,
            "size": 38,
            "at": "l5:own",
            "hl": [
              {
                "text": "own",
                "at": "l5:own"
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
          "say": "Seventh stop: six p.m. Dũng packs up his stand, a bit shaken.",
          "sub": "Chặng bảy: sáu giờ chiều. Dũng dọn gian hàng, hơi run."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "If my boss hears about today, what do I say next time? I'm jobless?",
          "sub": "Sếp mà biết chuyện hôm nay, lần sau mình nói gì? “Thất nghiệp”?",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Between jobs? Say it calmly: I'm between jobs at the moment, or I'm looking for a new role in logistics.",
          "sub": "Đang nghỉ hay tìm việc? Cứ nói thẳng, bình thản: “I'm between jobs at the moment”, “I'm looking for a new role in logistics”.",
          "keys": [
            "bình thản"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That's completely normal.",
          "sub": "Đó là chuyện rất bình thường."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Self-employed? I run a small restaurant stresses the daily work. I own a noodle shop stresses ownership.",
          "sub": "Tự kinh doanh? “I run a small restaurant” nhấn việc điều hành hằng ngày, “I own a noodle shop” nhấn quyền sở hữu.",
          "keys": [
            "quyền sở hữu"
          ]
        }
      ],
      "ref": "p26,p27"
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
            "at": "l6",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑧ 18:30 · quầy cà phê",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:counter"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "hotel",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "hot-beverage"
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
            "at": "l1:coffee",
            "caption": "18:30 · quầy cà phê hội chợ",
            "icon": "hot-beverage"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "✓ nghề + nơi làm",
            "x": 7932,
            "y": 1260,
            "size": 48,
            "at": "l3:accountant"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "✓ việc chính, nói đơn giản",
            "x": 7932,
            "y": 1340,
            "size": 48,
            "at": "l3:basically"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "✓ cảm nhận + hỏi lại",
            "x": 7932,
            "y": 1420,
            "size": 48,
            "at": "l5:enjoy"
          },
          {
            "id": "j-k",
            "t": "text",
            "text": "Hỏi đằng nào, đáp đằng ấy",
            "x": 7932,
            "y": 1540,
            "size": 56,
            "at": "l6:asked",
            "color": "accent",
            "hl": [
              {
                "text": "đáp đằng ấy",
                "at": "l6:answered"
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
          "say": "Last stop: six thirty, the same coffee counter. Same Sam, same question.",
          "sub": "Chặng cuối: sáu rưỡi chiều, vẫn quầy cà phê ấy. Vẫn Sam, vẫn câu hỏi ấy.",
          "keys": [
            "vẫn quầy cà phê ấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "So, let's try again. What do you do?",
          "sub": "Nào, thử lại nhé. Chị làm nghề gì?",
          "face": "happy",
          "to": "thao"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I'm an accountant at a logistics company. Basically, I make sure our suppliers get paid on time.",
          "sub": "Tôi là kế toán một công ty logistics. Nói đơn giản, tôi lo cho nhà cung cấp được trả tiền đúng hạn.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Oh, logistics! How do you like it?",
          "sub": "Ồ, logistics à! Chị thấy công việc thế nào?",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "It's challenging, but I really enjoy it. How about you?",
          "sub": "Cũng thử thách, nhưng tôi rất thích. Còn chị?",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "This morning: asked one way, answered another. Tonight: asked about the job, answered about the job. Coffee included.",
          "sub": "Sáng: hỏi một đằng, trả lời một nẻo. Tối: hỏi đằng nào, đáp đằng ấy. Cà phê vẫn trên tay.",
          "keys": [
            "hỏi đằng nào, đáp đằng ấy"
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
      "ref": "p4,p5,p23,outro"
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
            "at": "l1:job",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l2:sit",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l3:results",
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
            "x": 3468,
            "y": 30,
            "at": "l1:job"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7404,
            "y": 30,
            "at": "l2:sit"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3468,
            "y": 1120,
            "at": "l3:results"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: what do you do asks about your job. Answer in three layers.",
          "sub": "Tóm lại: “What do you do?” hỏi nghề. Trả lời theo ba lớp.",
          "keys": [
            "ba lớp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Say what you do, not where you sit.",
          "sub": "Nói việc mình làm, đừng nói chỗ mình ngồi."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And for outsiders, results, not jargon. Keep the tone positive.",
          "sub": "Với người ngoài ngành: kết quả, không thuật ngữ. Giữ giọng tích cực.",
          "keys": [
            "kết quả, không thuật ngữ"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p5,p10,p21,outro"
    },
    {
      "id": "s30",
      "module": "QUIZ-01",
      "ref": "questions[6]",
      "data": {
        "q": "In the think about it question, why is I'm drinking coffee the wrong answer?",
        "options": [
          "What do you do asks about your regular job, not about that moment",
          "The guest wanted to buy coffee and needed to know where to get it",
          "Drinking coffee at work events is impolite, so you should never mention it"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "hot-beverage",
        "why": "“What do you do?” hỏi nghề, dù bạn đang cầm gì trên tay."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the think about it question, why is I'm drinking coffee the wrong answer?",
          "sub": "Trong phần thử nghĩ xem, vì sao “I'm drinking coffee” là câu trả lời sai?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "What do you do asks about your regular job, not about that moment.",
          "sub": "“What do you do” hỏi công việc thường ngày, không hỏi lúc đó."
        }
      ]
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Tối nay: điền bốn ô, đọc to hai lần",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight: fill in your four boxes in English and read them aloud twice. What do I do? I bring you forty questions!",
          "sub": "Tối nay: điền bốn ô bằng tiếng Anh, đọc to hai lần. Đét làm nghề gì à? Mang đến bốn mươi câu hỏi!",
          "face": "laugh"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 dựng lại theo hạt nhân (#136) + biến thể edit (#144): Đét đứng trái + một bảng trắng 10 ô đi theo MỘT NGÀY HỘI CHỢ LOGISTICS ở Đà Nẵng (8:30 quầy cà phê → 9:00 quầy công ty → 10:30 “Khoan đã!” → 12:00 bữa trưa → 14:00 → 15:30 → 17:00 → 18:00 → 18:30 quầy cà phê). Nhân vật (w145/_series/english-self-introducers.md): Thảo (“bạn” ở ❓ p4, kế toán), Sam (vị khách p4, đối tác p9, quản lý mua hàng p24), Cô Hoa (Vân p9), Dũng (công ty bao bì p12, Quang p24). Kỹ sư kiểm thử ở đám cưới (p20) để ở cảnh ngắt BRK-04, không gắn nhân vật. Thành ngữ: “Hỏi một đằng, trả lời một nẻo” (mở) → “hỏi đằng nào, đáp đằng ấy” (khép); ca dao “Tốt đẹp phô ra, xấu xa đậy lại” (p25). Cảnh ngắt nhịp: BRK-06 montage bốn cách hỏi (p2), BRK-04 Sai/Đúng thuật ngữ (p20), BRK-07 rehook than phiền (p23). Bản cũ: w145/bak/how-to-describe-your-job-in-english--w01.js.",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
