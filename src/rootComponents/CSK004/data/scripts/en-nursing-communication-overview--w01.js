// en-nursing-communication-overview--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-nursing-communication-overview--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "en-nurses-foreign-patients",
    "slug": "en-nursing-communication-overview",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Điều dưỡng cần nói tiếng Anh những gì với bệnh nhân nước ngoài?",
    "series": "Tiếng Anh cho điều dưỡng — hỏi, giải thích, trấn an bệnh nhân nước ngoài đúng và đủ"
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
            "id": "a-n",
            "t": "text",
            "text": "9 tiêu chí OET",
            "x": 60,
            "y": 60,
            "size": 84,
            "at": "l1:nine",
            "color": "accent"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "A. Giao tiếp: 1–2 tiêu chí?",
            "x": 70,
            "y": 200,
            "size": 54,
            "at": "l2:one"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "B. Giao tiếp: 5 tiêu chí?",
            "x": 70,
            "y": 290,
            "size": 54,
            "at": "l2:five"
          },
          {
            "id": "a-1x",
            "t": "strike",
            "over": "a-1",
            "at": "l3:Five"
          },
          {
            "id": "a-2r",
            "t": "ring",
            "around": [
              "a-2"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l3:out of"
          },
          {
            "id": "a-ans",
            "t": "text",
            "text": "= 5 / 9",
            "x": 70,
            "y": 370,
            "size": 96,
            "at": "l3:nine",
            "color": "accent",
            "hl": [
              {
                "text": "5 / 9",
                "at": "l3:nine"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: OET — Speaking: overview of criteria for the test",
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
          "say": "Quick guess. OET, the English test for health workers, scores speaking with nine criteria.",
          "sub": "Đoán nhanh: OET, kỳ thi tiếng Anh cho người làm y tế, chấm phần nói bằng chín tiêu chí.",
          "keys": [
            "chín tiêu chí"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "How many judge how you communicate with the patient? One or two? Or five?",
          "sub": "Bao nhiêu tiêu chí chấm cách bạn giao tiếp với bệnh nhân? Một, hai? Hay năm?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Five out of nine. Only four are about language itself.",
          "sub": "Năm trên chín. Chỉ bốn tiêu chí là chấm riêng ngôn ngữ.",
          "keys": [
            "Năm trên chín"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
      "ref": "p4"
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
            "at": "l3",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
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
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l3",
                  "face": "worried"
                }
              ],
              "props": [
                "bed",
                "hospital"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
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
            "at": "l1",
            "caption": "Ngày 1 · 8:00 · phòng 305",
            "icon": "hospital"
          },
          {
            "id": "a-nod",
            "t": "text",
            "text": "Chỉ cười + gật đầu?!",
            "x": 60,
            "y": 520,
            "size": 50,
            "at": "l5:nods",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Lời nói chẳng mất tiền mua”",
            "x": 60,
            "y": 610,
            "size": 52,
            "at": "l6:words",
            "color": "accent",
            "hl": [
              {
                "text": "chẳng mất tiền mua",
                "at": "l6:cost nothing"
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
          "say": "Meet Thảo, a nurse on a medical ward. Steady hands, sharp eyes.",
          "sub": "Đây là Thảo, điều dưỡng khoa nội. Tay vững, mắt tinh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Drips? Easy. Speaking English? Her knees start to shake.",
          "sub": "Truyền dịch? Dễ ợt. Nói tiếng Anh? Run cả đầu gối.",
          "keys": [
            "Run cả đầu gối"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Day one, eight a.m. And this is Sam, a patient from Australia, just arriving.",
          "sub": "Ngày 1, tám giờ sáng. Còn đây là Sam, bệnh nhân người Úc, vừa lên khoa.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Hi. Um, is this going to hurt?",
          "sub": "Chào cô. Ừm, cái này có đau không?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Thảo just smiles and nods. A nod? Sam turns pale.",
          "sub": "Thảo chỉ cười, gật đầu. Gật là… có đau? Sam tái mặt."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents said: words cost nothing, so choose them to please each other.",
          "sub": "Ông bà dặn: “Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau.”",
          "keys": [
            "Lời nói chẳng mất tiền mua"
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
            "text": "Nói tiếng Anh những gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:need",
            "hl": [
              {
                "text": "những gì",
                "at": "l1:actually"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: câu dài, từ khó",
            "x": 2028,
            "y": 165,
            "size": 52,
            "at": "l2:long",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:But"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: mỗi chặng một bộ câu",
            "x": 2028,
            "y": 255,
            "size": 54,
            "at": "l3:each stage",
            "color": "accent",
            "hl": [
              {
                "text": "mỗi chặng",
                "at": "l3:each stage"
              }
            ]
          },
          {
            "id": "b-st",
            "t": "text",
            "text": "chào · hỏi · giải thích · trấn an · dặn",
            "x": 2028,
            "y": 345,
            "size": 44,
            "at": "l4:greet"
          },
          {
            "id": "b-chk",
            "t": "text",
            "text": "+ luôn kiểm tra đã hiểu",
            "x": 2028,
            "y": 425,
            "size": 50,
            "at": "l4:always",
            "hl": [
              {
                "text": "kiểm tra",
                "at": "l4:check"
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
          "say": "So what do nurses actually need to say in English?",
          "sub": "Vậy điều dưỡng thật sự cần nói tiếng Anh những gì?",
          "keys": [
            "những gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not long sentences, and not a fat dictionary of medical terms.",
          "sub": "Không phải câu dài, cũng chẳng phải cuốn từ điển thuật ngữ dày cộp."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But a set of sentences for each stage of care, from hello to goodbye.",
          "sub": "Mà là một bộ câu cho từng chặng chăm sóc, từ lúc chào đến lúc dặn dò.",
          "keys": [
            "từng chặng chăm sóc"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Greet, ask, explain, reassure, advise. And always check the patient understood.",
          "sub": "Chào, hỏi, giải thích, trấn an, dặn dò. Và luôn kiểm tra bệnh nhân đã hiểu.",
          "keys": [
            "luôn kiểm tra"
          ]
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
            "id": "b-oet",
            "t": "text",
            "text": "OET: 2 vai diễn, ~5 phút",
            "x": 2928,
            "y": 165,
            "size": 46,
            "at": "l1:two role plays",
            "hl": [
              {
                "text": "2 vai diễn",
                "at": "l1:role plays"
              }
            ]
          },
          {
            "id": "b-oet2",
            "t": "text",
            "text": "bạn = chính mình · giám khảo = bệnh nhân",
            "x": 2928,
            "y": 240,
            "size": 34,
            "at": "l2:examiner",
            "color": "muted"
          },
          {
            "id": "b-pl",
            "t": "text",
            "text": "Thuật ngữ → lời đơn giản",
            "x": 2928,
            "y": 320,
            "size": 46,
            "at": "l3:plain",
            "color": "accent",
            "hl": [
              {
                "text": "lời đơn giản",
                "at": "l3:plain words"
              }
            ]
          },
          {
            "id": "b-li",
            "t": "text",
            "text": "+ lắng nghe",
            "x": 2928,
            "y": 395,
            "size": 46,
            "at": "l3:listen"
          },
          {
            "id": "b-cam",
            "t": "text",
            "text": "Cambridge: tình huống thật",
            "x": 2928,
            "y": 470,
            "size": 44,
            "at": "l4:Cambridge"
          },
          {
            "id": "b-stg",
            "t": "text",
            "text": "→ học theo chặng",
            "x": 2968,
            "y": 545,
            "size": 36,
            "at": "l4:stage by stage",
            "color": "accent"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: OET — Speaking and your healthcare career · Cambridge English for Nursing",
            "x": 2028,
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
          "say": "Why do skilled nurses freeze? OET's speaking test is two role plays, about five minutes each.",
          "sub": "Vì sao giỏi nghề mà vẫn đứng hình? Phần nói của OET là hai vai diễn, mỗi vai khoảng năm phút."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Everyday healthcare situations. You play yourself, the examiner plays the patient or a relative.",
          "sub": "Tình huống y tế hằng ngày. Bạn đóng chính mình, giám khảo đóng bệnh nhân hoặc người nhà."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "OET stresses two things: turn medical terms into plain words, and listen.",
          "sub": "OET nhấn mạnh hai việc: chuyển thuật ngữ y khoa thành lời đơn giản, và lắng nghe.",
          "keys": [
            "lời đơn giản"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Cambridge nursing courses use real situations too. So we learn stage by stage, not word lists.",
          "sub": "Giáo trình Cambridge cũng xây quanh tình huống thật. Nên ta học theo chặng, không theo danh sách từ.",
          "keys": [
            "theo chặng"
          ]
        }
      ],
      "ref": "p1,p2,p3"
    },
    {
      "id": "s04",
      "module": "BRK-10",
      "data": {
        "quote": "Phần nói không chỉ là nói, mà còn là nghe",
        "mark": "còn là nghe",
        "by": "OET — Speaking and your healthcare career",
        "illus": "ear"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "It's not just about speaking. It's also about listening.",
          "sub": "Không chỉ là nói. Mà còn là nghe.",
          "keys": [
            "còn là nghe"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "That's OET, about its own speaking test.",
          "sub": "Đó là lời OET, nói về chính phần thi nói của họ."
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s05",
      "module": "BRK-08",
      "data": {
        "title": "Bốn ngày nằm viện của Sam",
        "points": [
          {
            "label": "Ngày 1 · 8:30",
            "sub": "Tiếp nhận",
            "illus": "clipboard"
          },
          {
            "label": "Ngày 1 · 14:00",
            "sub": "Hỏi đau",
            "illus": "face-with-head-bandage"
          },
          {
            "label": "Ngày 2 · 7:00",
            "sub": "Lấy máu",
            "illus": "drop-of-blood"
          },
          {
            "label": "Ngày 3 · 18:00",
            "sub": "Tập vai",
            "illus": "speaking-head"
          },
          {
            "label": "Ngày 4 · 8:00",
            "sub": "Thuốc, ra viện",
            "illus": "pill"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One patient, four days, from admission to going home.",
          "sub": "Một bệnh nhân, bốn ngày, từ lúc nhập viện đến lúc về nhà.",
          "keys": [
            "bốn ngày"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Let's walk the ward with Thảo.",
          "sub": "Theo Thảo đi một vòng khoa nào."
        }
      ],
      "ref": "p24"
    },
    {
      "id": "s06",
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Ngày 1 · 8:15 · 5 tiêu chí",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "hoa",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
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
            "at": "l1:station",
            "caption": "Ngày 1 · 8:15 · quầy điều dưỡng",
            "icon": "clipboard"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "4 ngôn ngữ + 5 giao tiếp",
            "x": 3996,
            "y": 165,
            "size": 48,
            "at": "l4:frame",
            "hl": [
              {
                "text": "5 giao tiếp",
                "at": "l4:clinical"
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
          "say": "Stop one, eight fifteen, the nurses' station. Meet Cô Hoa, the head nurse.",
          "sub": "Chặng một, tám giờ mười lăm, quầy điều dưỡng. Đây là cô Hoa, điều dưỡng trưởng khoa.",
          "keys": [
            "cô Hoa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Thảo, forget perfect grammar for a second. Here are the five things OET listens for.",
          "sub": "Thảo này, quên ngữ pháp hoàn hảo một chút. Đây là năm điều OET để ý.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five clinical criteria. A good frame for writing sentences at every stage.",
          "sub": "Năm tiêu chí giao tiếp lâm sàng: bộ khung tốt để soạn câu cho mọi chặng.",
          "keys": [
            "bộ khung"
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
          }
        ],
        "items": [
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 250,
            "w": 44,
            "h": 44,
            "at": "l1:relationship",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 232,
            "size": 56,
            "at": "l1:relationship+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Xây quan hệ: chào, tôn trọng",
            "x": 4061,
            "y": 242,
            "size": 40,
            "at": "l1:relationship+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 326,
            "w": 44,
            "h": 44,
            "at": "l2:view",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 308,
            "size": 56,
            "at": "l2:view+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Góc nhìn: hỏi điều họ lo",
            "x": 4061,
            "y": 318,
            "size": 40,
            "at": "l2:view+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 402,
            "w": 44,
            "h": 44,
            "at": "l3:structure",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 384,
            "size": 56,
            "at": "l3:structure+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Cấu trúc: báo khi chuyển ý",
            "x": 4061,
            "y": 394,
            "size": 40,
            "at": "l3:structure+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 478,
            "w": 44,
            "h": 44,
            "at": "l4:gather",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 460,
            "size": 56,
            "at": "l4:gather+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Thu thập: mở → cụ thể → tóm",
            "x": 4061,
            "y": 470,
            "size": 40,
            "at": "l4:gather+200"
          },
          {
            "id": "c-c4",
            "t": "box",
            "x": 3996,
            "y": 554,
            "w": 44,
            "h": 44,
            "at": "l5:give",
            "stroke": 5
          },
          {
            "id": "c-k4",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 536,
            "size": 56,
            "at": "l5:give+600",
            "color": "accent"
          },
          {
            "id": "c-l4",
            "t": "text",
            "text": "Cung cấp: dừng, kiểm tra hiểu",
            "x": 4061,
            "y": 546,
            "size": 40,
            "at": "l5:give+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One, build the relationship: friendly, respectful, no judging.",
          "sub": "Một, xây dựng quan hệ: thân thiện, tôn trọng, không phán xét."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two, the patient's view: what they think, fear and want.",
          "sub": "Hai, góc nhìn bệnh nhân: họ nghĩ gì, lo gì, muốn gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three, structure: say when you change topic.",
          "sub": "Ba, tạo cấu trúc: báo rõ khi chuyển ý."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four, gather information: open questions first, then specific, then summarise.",
          "sub": "Bốn, thu thập thông tin: hỏi mở trước, cụ thể sau, rồi tóm tắt.",
          "keys": [
            "hỏi mở trước"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Five, give information: pause and check they follow.",
          "sub": "Năm, cung cấp thông tin: dừng lại kiểm tra họ hiểu."
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s08",
      "module": "BRK-04",
      "data": {
        "title": "Câu nào được điểm?",
        "wrong": "Câu dài, chuẩn ngữ pháp, đầy thuật ngữ",
        "right": "“What worries you most about this?”",
        "wrongIllus": "books",
        "rightIllus": "speech-balloon"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "A long, perfect sentence, packed with medical terms?",
          "sub": "Câu dài, chuẩn ngữ pháp, đầy thuật ngữ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Or: what worries you most about this?",
          "sub": "Hay: “Điều gì làm anh chị lo nhất?”",
          "keys": [
            "lo nhất"
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
            "fit": "C",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "c-k",
            "t": "text",
            "text": "Đơn giản, đúng lúc > câu hay",
            "x": 3996,
            "y": 660,
            "size": 52,
            "at": "l2:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "đúng lúc",
                "at": "l2:right moment"
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
          "say": "Many think grammar is everything. Yet that short question hits the patient's view.",
          "sub": "Nhiều người tưởng ngữ pháp là tất cả. Vậy mà câu ngắn kia chạm đúng góc nhìn bệnh nhân."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: a simple sentence at the right moment beats a fancy one the patient can't follow.",
          "sub": "Rút ra: câu đơn giản mà đúng người, đúng lúc vẫn hơn câu hay mà bệnh nhân không hiểu.",
          "keys": [
            "đúng người, đúng lúc"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s10",
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
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Ngày 1 · 8:30 · Tiếp nhận",
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
              "set": "room",
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
              "props": [
                "bed",
                "hospital"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:room",
            "caption": "Ngày 1 · 8:30 · phòng 305",
            "icon": "clipboard"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "1. Tên + vai trò",
            "x": 5964,
            "y": 165,
            "size": 50,
            "at": "l5:role",
            "hl": [
              {
                "text": "vai trò",
                "at": "l5:role"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "2. Bệnh nhân TỰ nói tên",
            "x": 5964,
            "y": 250,
            "size": 44,
            "at": "l5:patient",
            "color": "accent",
            "hl": [
              {
                "text": "TỰ nói",
                "at": "l5:says"
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
          "say": "Stop two, eight thirty, room three oh five. Admission, and Thảo starts again.",
          "sub": "Chặng hai, tám rưỡi, phòng 305. Tiếp nhận bệnh nhân, Thảo làm lại từ đầu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Hello, I'm one of the nurses on this ward, and I'll be looking after you today.",
          "sub": "Chào chị, tôi là điều dưỡng của khoa, hôm nay tôi sẽ chăm sóc chị.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Could you tell me your full name and date of birth, please?",
          "sub": "Chị vui lòng cho tôi biết họ tên đầy đủ và ngày sinh nhé?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Sure. Sam Miller. M, I, double L, E, R.",
          "sub": "Được. Sam Miller. M-I-L-L-E-R.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Name and role first. Then the patient says who they are, not you.",
          "sub": "Tên và vai trò trước. Rồi để bệnh nhân tự nói mình là ai, chứ không phải bạn đọc.",
          "keys": [
            "tự nói"
          ]
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s11",
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
            "id": "d-nhs",
            "t": "text",
            "text": "NHS: trước MỖI can thiệp",
            "x": 5964,
            "y": 340,
            "size": 48,
            "at": "l1:before every",
            "hl": [
              {
                "text": "MỖI",
                "at": "l1:every"
              }
            ]
          },
          {
            "id": "d-i1",
            "t": "illus",
            "name": "pill",
            "x": 5964,
            "y": 425,
            "size": 70,
            "at": "l2:allergies"
          },
          {
            "id": "d-i2",
            "t": "illus",
            "name": "bellhop-bell",
            "x": 6054,
            "y": 425,
            "size": 70,
            "at": "l2:call bell"
          },
          {
            "id": "d-l",
            "t": "text",
            "text": "dị ứng · thuốc · vòng tay · chuông",
            "x": 6154,
            "y": 440,
            "size": 38,
            "at": "l2:medicines"
          },
          {
            "id": "d-nx",
            "t": "text",
            "text": "→ Bài 1: Tiếp nhận",
            "x": 5964,
            "y": 530,
            "size": 46,
            "at": "l2:admission",
            "color": "accent"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: NHS Borders — Patient Identification Policy",
            "x": 5964,
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
          "say": "The NHS identification policy asks patients to state their full name and date of birth before every intervention.",
          "sub": "Chính sách nhận dạng của NHS: bệnh nhân tự nói họ tên, ngày sinh trước mỗi can thiệp.",
          "keys": [
            "trước mỗi can thiệp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Allergies, medicines, identity band, call bell: all in the admission lesson, next up.",
          "sub": "Dị ứng, thuốc đang dùng, vòng tay, chuông gọi: có cả ở bài “Tiếp nhận”, bài kế tiếp."
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s12",
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
          },
          {
            "at": "l5",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
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
            "id": "e-t",
            "t": "text",
            "text": "③ Ngày 1 · 14:00 · Hỏi đau",
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
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "left"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "sad",
                  "pose": "hold"
                }
              ],
              "props": [
                "bed",
                "hospital"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:bell",
            "caption": "Ngày 1 · 14:00 · chuông gọi",
            "icon": "face-with-head-bandage"
          },
          {
            "id": "e-bad",
            "t": "text",
            "text": "“Big pain or small pain?”",
            "x": 7932,
            "y": 165,
            "size": 48,
            "at": "l3:Big",
            "color": "muted"
          },
          {
            "id": "e-badx",
            "t": "strike",
            "over": "e-bad",
            "at": "l4:nothing"
          },
          {
            "id": "e-nil",
            "t": "text",
            "text": "→ chỉ được “big”: không chỗ, không số",
            "x": 7972,
            "y": 245,
            "size": 36,
            "at": "l4:only"
          },
          {
            "id": "e-good",
            "t": "text",
            "text": "Chỉ chỗ đau + thang 0–10",
            "x": 7932,
            "y": 320,
            "size": 52,
            "at": "l5:show",
            "color": "accent",
            "hl": [
              {
                "text": "thang 0–10",
                "at": "l5:scale"
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
          "say": "Stop three, two p.m. Sam presses the call bell.",
          "sub": "Chặng ba, hai giờ chiều. Sam bấm chuông gọi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "It hurts. Here.",
          "sub": "Đau. Chỗ này.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The old Thảo would ask: pain? Big pain or small pain?",
          "sub": "Thảo ngày trước sẽ hỏi: “Pain? Big pain or small pain?”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Sam can only say big. No place, no number, nothing to write down.",
          "sub": "Sam chỉ đáp được “big”. Không vị trí, không con số, chẳng có gì ghi hồ sơ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Can you show me where it hurts? And on a scale of zero to ten, how bad is it now?",
          "sub": "Chị chỉ cho tôi chỗ đau nhé? Và theo thang 0 đến 10, giờ đau mức nào?"
        }
      ],
      "ref": "p10,p11"
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
          }
        ],
        "items": [
          {
            "id": "e-o",
            "t": "text",
            "text": "Mở → ở đâu → khi nào → kiểu gì",
            "x": 7932,
            "y": 405,
            "size": 42,
            "at": "l2:where",
            "hl": [
              {
                "text": "Mở",
                "at": "l1:open"
              }
            ]
          },
          {
            "id": "e-0",
            "t": "text",
            "text": "0 = không đau",
            "x": 7932,
            "y": 480,
            "size": 48,
            "at": "l3:no pain"
          },
          {
            "id": "e-10",
            "t": "text",
            "text": "10 = đau nhất tưởng tượng được",
            "x": 7932,
            "y": 550,
            "size": 44,
            "at": "l3:worst",
            "color": "coral"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Hỏi rõ 1 lần, khỏi đoán",
            "x": 7932,
            "y": 650,
            "size": 50,
            "at": "l4:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "khỏi đoán",
                "at": "l4:guessing"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: U.S. VA — Pain Numeric Rating Scale",
            "x": 8772,
            "y": 700,
            "size": 28,
            "at": "l3",
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
          "say": "OET's way: open first. Can you tell me about the pain?",
          "sub": "Cách của OET: mở trước. “Can you tell me about the pain?”",
          "keys": [
            "mở trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then specific: where it is, when it started, what it feels like.",
          "sub": "Rồi cụ thể: đau ở đâu, bắt đầu khi nào, đau kiểu gì."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then the scale: zero is no pain, ten is the worst pain you can imagine.",
          "sub": "Rồi thang điểm: 0 là không đau, 10 là đau nhất có thể tưởng tượng.",
          "keys": [
            "0 là không đau"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: ask clearly once, and skip a whole shift of guessing. Full order in the pain lesson.",
          "sub": "Rút ra: hỏi rõ một lần, đỡ đoán mò cả ca. Thứ tự đầy đủ ở bài hỏi đau.",
          "keys": [
            "đỡ đoán mò cả ca"
          ]
        }
      ],
      "ref": "p10,p12,p13"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Hỏi đau đã rõ. Sao có bệnh nhân vẫn rụt tay?",
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
          "say": "Clear words for pain. So why would a patient pull their arm away?",
          "sub": "Hỏi đau đã rõ. Vậy sao có bệnh nhân vẫn rụt tay lại?"
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
      "id": "s15",
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
            "at": "l3",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Ngày 2 · 7:00 · Lấy máu",
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
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right"
                }
              ],
              "props": [
                "bed",
                "drop-of-blood"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:blood",
            "caption": "Ngày 2 · 7:00 · phòng 305",
            "icon": "drop-of-blood"
          },
          {
            "id": "f-v1",
            "t": "text",
            "text": "“venepuncture”",
            "x": 60,
            "y": 1255,
            "size": 56,
            "at": "l3:venepuncture",
            "color": "coral"
          },
          {
            "id": "f-v2",
            "t": "text",
            "text": "nói to hơn ≠ dễ hiểu hơn",
            "x": 60,
            "y": 1350,
            "size": 46,
            "at": "l6:louder",
            "hl": [
              {
                "text": "≠ dễ hiểu hơn",
                "at": "l6:translator"
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
          "say": "Stop four, day two, seven a.m. A blood test.",
          "sub": "Chặng bốn, Ngày 2, bảy giờ sáng. Xét nghiệm máu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, a newly qualified nurse. Fast hands, even faster mouth.",
          "sub": "Đây là Dũng, điều dưỡng mới ra trường. Tay nhanh, miệng còn nhanh hơn.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Good morning. I will do venepuncture now.",
          "sub": "Chào chị. Giờ tôi làm venepuncture nhé.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Sorry, do what?",
          "sub": "Xin lỗi, làm gì cơ?",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "I will do venepuncture now!",
          "sub": "TÔI LÀM VENEPUNCTURE NHÉ!",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Same sentence, only louder. As if volume were a translator.",
          "sub": "Vẫn câu đó, chỉ to hơn. Cứ như âm lượng là phiên dịch viên.",
          "keys": [
            "âm lượng là phiên dịch viên"
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
      "ref": "p15"
    },
    {
      "id": "s16",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Ngày 2 · 7:01 · phòng 305",
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
          "label": "Nói thuật ngữ, rồi nói to hơn",
          "why": "Sam không biết “venepuncture”; nói to chỉ làm bệnh nhân căng thẳng thêm, phải chờ người khác giải thích.",
          "rule": "Thuật ngữ để ghi hồ sơ, lời thường để nói"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Still lost? Even louder, then!",
          "sub": "Vẫn ngơ ngác? Thì nói to thêm!",
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
          "say": "Sam pulled her arm back. No understanding, no real consent.",
          "sub": "Sam rụt tay rồi. Không hiểu lời thì đâu thể thật sự đồng ý."
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
          "who": "dung",
          "say": "I need to take a small blood sample from your arm. Is that OK with you?",
          "sub": "Tôi cần lấy một ít máu ở tay chị. Chị đồng ý chứ?",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "sam",
          "say": "Oh, a blood test. Sure.",
          "sub": "À, lấy máu. Được thôi.",
          "phase": "redo",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. Medical terms are for the notes. Everyday words are for the patient.",
          "sub": "Đúng. Thuật ngữ để ghi hồ sơ, lời thường để nói với người bệnh.",
          "phase": "redo",
          "keys": [
            "lời thường để nói với người bệnh"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p14,p15,p16"
    },
    {
      "id": "s17",
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
            "id": "f-n",
            "t": "text",
            "text": "Thuật ngữ: ghi hồ sơ",
            "x": 60,
            "y": 1430,
            "size": 46,
            "at": "l1",
            "color": "muted"
          },
          {
            "id": "f-w",
            "t": "text",
            "text": "Lời thường: nói với người bệnh",
            "x": 60,
            "y": 1500,
            "size": 44,
            "at": "l1",
            "color": "accent"
          },
          {
            "id": "f-ok",
            "t": "text",
            "text": "Đồng ý: lời hoặc đưa tay",
            "x": 60,
            "y": 1590,
            "size": 44,
            "at": "l2:holding",
            "hl": [
              {
                "text": "Đồng ý",
                "at": "l2:Consent"
              }
            ]
          },
          {
            "id": "f-em",
            "t": "text",
            "text": "Lo? Cảm xúc trước, giải thích sau",
            "x": 60,
            "y": 1680,
            "size": 44,
            "at": "l3:feeling",
            "color": "accent",
            "hl": [
              {
                "text": "Cảm xúc trước",
                "at": "l3:feeling first"
              }
            ]
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: NHS — Consent to treatment",
            "x": 900,
            "y": 1790,
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
          "say": "The NHS says: ask permission before any treatment, test or examination.",
          "sub": "Theo NHS: phải xin phép trước mọi điều trị, xét nghiệm hay thăm khám.",
          "keys": [
            "xin phép"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Consent can be spoken, or silent, like holding out an arm for a blood test.",
          "sub": "Đồng ý có thể bằng lời, hoặc không lời, như đưa tay ra để lấy máu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And if the patient looks anxious? Name the feeling first, explain second.",
          "sub": "Còn nếu bệnh nhân lo? Ghi nhận cảm xúc trước, giải thích sau.",
          "keys": [
            "Ghi nhận cảm xúc trước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Like: it's perfectly understandable that you'd feel anxious about this.",
          "sub": "Như: “Lo lắng về chuyện này là hoàn toàn dễ hiểu.” Hai bài sau đào sâu."
        }
      ],
      "ref": "p14,p17"
    },
    {
      "id": "s18",
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
            "at": "l4",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Ngày 3 · 18:00 · Tập vai",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "props": [
                "speaking-head",
                "notebook"
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
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:shift",
            "caption": "Ngày 3 · 18:00 · phòng giao ban",
            "icon": "speaking-head"
          },
          {
            "id": "g-c",
            "t": "text",
            "text": "Cambridge: thứ tự tuỳ ý",
            "x": 2028,
            "y": 1255,
            "size": 46,
            "at": "l4:any order"
          },
          {
            "id": "g-c2",
            "t": "text",
            "text": "nghe nhiều lần → rồi mới đọc",
            "x": 2028,
            "y": 1325,
            "size": 40,
            "at": "l4:several",
            "color": "muted"
          },
          {
            "id": "g-st",
            "t": "text",
            "text": "Học trước chặng hay gặp nhất",
            "x": 2028,
            "y": 1405,
            "size": 46,
            "at": "l5:stage",
            "color": "accent",
            "hl": [
              {
                "text": "hay gặp nhất",
                "at": "l5:most"
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
          "say": "Stop five, day three, six p.m. Shift over, but Thảo and Dũng stay back.",
          "sub": "Chặng năm, Ngày 3, sáu giờ chiều. Hết ca, Thảo và Dũng nán lại."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "You be the patient for five minutes. Then we switch.",
          "sub": "Em đóng bệnh nhân năm phút nhé. Rồi mình đổi vai.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Okay. Ow, my stomach! Doctor! I mean, nurse!",
          "sub": "Được. Ui, bụng em! Bác sĩ ơi! À nhầm, chị điều dưỡng!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Cambridge tip for self-study: any order, listen several times, then read the script.",
          "sub": "Cambridge gợi ý tự học: thứ tự tuỳ ý, nghe nhiều lần rồi mới đọc lời thoại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So start with the stage you meet most in your own shifts.",
          "sub": "Vậy hãy học trước chặng bạn gặp nhiều nhất trong ca của mình.",
          "keys": [
            "gặp nhiều nhất"
          ]
        }
      ],
      "ref": "p22"
    },
    {
      "id": "s19",
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
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1510,
            "w": 44,
            "h": 44,
            "at": "l1:copy",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1492,
            "size": 56,
            "at": "l1:copy+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "Chép 5 câu mẫu vào sổ",
            "x": 2093,
            "y": 1502,
            "size": 40,
            "at": "l1:copy+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1582,
            "w": 44,
            "h": 44,
            "at": "l2:Read",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1564,
            "size": 56,
            "at": "l2:Read+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "Đọc to, ghi âm, nghe lại",
            "x": 2093,
            "y": 1574,
            "size": 40,
            "at": "l2:Read+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1654,
            "w": 44,
            "h": 44,
            "at": "l3:Role",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1636,
            "size": 56,
            "at": "l3:Role+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "Tập vai ~5 phút với bạn",
            "x": 2093,
            "y": 1646,
            "size": 40,
            "at": "l3:Role+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1726,
            "w": 44,
            "h": 44,
            "at": "l4:check",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1708,
            "size": 56,
            "at": "l4:check+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "Tự hỏi: đã kiểm tra hiểu?",
            "x": 2093,
            "y": 1718,
            "size": 40,
            "at": "l4:check+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Their routine: copy five sample sentences into a notebook.",
          "sub": "Lịch tập: chép năm câu mẫu vào sổ tay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read them aloud, record yourself, and listen to your own speed.",
          "sub": "Đọc to, ghi âm, nghe lại tốc độ của mình."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Role play with a colleague for about five minutes, like an OET task.",
          "sub": "Tập vai với đồng nghiệp khoảng năm phút, như bài thi OET."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "After each round: did I check the patient understood?",
          "sub": "Sau mỗi lượt, tự hỏi: mình đã kiểm tra bệnh nhân hiểu chưa?",
          "keys": [
            "kiểm tra bệnh nhân hiểu chưa"
          ]
        }
      ],
      "ref": "p23"
    },
    {
      "id": "s20",
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
            "at": "l5",
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
            "text": "⑥ Ngày 4 · 7:45 · Thuốc mang về",
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
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "give"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "bed",
                "pill"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:home",
            "caption": "Ngày 4 · 7:45 · ngày ra viện",
            "icon": "pill"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Để làm gì? Liều bao nhiêu?",
            "x": 3996,
            "y": 1255,
            "size": 46,
            "at": "l3:for"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Dùng thế nào? Tác dụng phụ?",
            "x": 3996,
            "y": 1330,
            "size": 46,
            "at": "l3:side effects"
          },
          {
            "id": "h-pl",
            "t": "text",
            "text": "Lời đơn giản · chia nhỏ · nhắc lại",
            "x": 3996,
            "y": 1410,
            "size": 40,
            "at": "l4:Plain",
            "color": "accent",
            "hl": [
              {
                "text": "chia nhỏ",
                "at": "l4:small chunks"
              }
            ]
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: AHRQ — IDEAL Discharge Planning",
            "x": 3996,
            "y": 1485,
            "size": 28,
            "at": "l3",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "h-a",
            "t": "text",
            "text": "A: “Do you understand?”",
            "x": 3996,
            "y": 1570,
            "size": 46,
            "at": "l7:Option",
            "color": "coral"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "→ “Yes, yes” = chữ ký khống",
            "x": 4036,
            "y": 1650,
            "size": 42,
            "at": "l8:blank",
            "hl": [
              {
                "text": "chữ ký khống",
                "at": "l8:blank signature"
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
          "say": "Stop six, day four. Sam goes home today, with medicines: where patients misunderstand most.",
          "sub": "Chặng sáu, Ngày 4. Sam ra viện, mang thuốc về: chỗ bệnh nhân dễ hiểu sai nhất.",
          "keys": [
            "dễ hiểu sai nhất"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "AHRQ's IDEAL guide: what each medicine is for, the dose, how to take it, side effects.",
          "sub": "Hướng dẫn IDEAL của AHRQ: mỗi thuốc để làm gì, liều, cách dùng, tác dụng phụ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In plain words, small chunks, key points repeated.",
          "sub": "Lời đơn giản, chia nhỏ, nhắc lại ý chính."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "That's everything. Do you understand?",
          "sub": "Vậy là xong. Chị hiểu chưa?"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "sam",
          "say": "Yes, yes.",
          "sub": "Rồi, rồi.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Option A. Sam nods. How much will she remember at home? Nobody knows.",
          "sub": "Cách A. Sam gật. Nhưng về nhà chị nhớ được bao nhiêu? Không ai biết."
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "That yes, yes is a blank signature.",
          "sub": "Chữ “yes, yes” ấy là một chữ ký khống.",
          "keys": [
            "chữ ký khống"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s21",
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
            "text": "Ngày 4 · 8:00 · Cách B",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Option B"
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
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "face": "thinking"
                }
              ],
              "props": [
                "bed",
                "pill"
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
            "at": "l1:eight",
            "caption": "Ngày 4 · 8:00 · phòng 305",
            "icon": "hospital"
          },
          {
            "id": "i-b",
            "t": "text",
            "text": "B: “Kể lại cách dùng ở nhà?”",
            "x": 5964,
            "y": 1255,
            "size": 46,
            "at": "l2:tell me",
            "color": "accent"
          },
          {
            "id": "i-w",
            "t": "text",
            "text": "→ nói lại, lộ chỗ nhầm giờ",
            "x": 6004,
            "y": 1340,
            "size": 42,
            "at": "l4:Wrong",
            "hl": [
              {
                "text": "nhầm giờ",
                "at": "l4:Wrong time"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "Ngày 1: gật · Ngày 4: lời",
            "x": 5964,
            "y": 1430,
            "size": 50,
            "at": "l5:Day one",
            "color": "accent",
            "hl": [
              {
                "text": "lời",
                "at": "l5:words"
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
          "say": "Option B, eight a.m., the same hour Sam arrived on day one.",
          "sub": "Cách B, tám giờ sáng: đúng giờ Sam đến khoa hôm Ngày 1."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Just so I know I've explained it clearly, can you tell me how you'll take this at home?",
          "sub": "Để tôi biết mình giải thích rõ chưa, chị kể lại xem ở nhà chị dùng thuốc này thế nào?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Um, I take it, at night?",
          "sub": "Ừm, tôi uống… buổi tối?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Wrong time! And Thảo catches it right there, at the bedside.",
          "sub": "Nhầm giờ! Và Thảo kịp giải thích lại ngay tại giường.",
          "keys": [
            "ngay tại giường"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Day one, a silent nod. Day four, words chosen to please each other.",
          "sub": "Ngày 1: cái gật đầu không lời. Ngày 4: lời được lựa “cho vừa lòng nhau”.",
          "keys": [
            "cho vừa lòng nhau"
          ]
        }
      ],
      "ref": "p19,p20"
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
          }
        ],
        "items": [
          {
            "id": "i-tb",
            "t": "text",
            "text": "Teach-back = mời nói lại",
            "x": 5964,
            "y": 1540,
            "size": 50,
            "at": "l1:teach-back",
            "color": "accent",
            "hl": [
              {
                "text": "mời nói lại",
                "at": "l1:teach-back"
              }
            ]
          },
          {
            "id": "i-c1",
            "t": "text",
            "text": "Kiểm lời mình giải thích,",
            "x": 5964,
            "y": 1620,
            "size": 44,
            "at": "l3:checking"
          },
          {
            "id": "i-c2",
            "t": "text",
            "text": "chứ không kiểm người bệnh",
            "x": 5964,
            "y": 1690,
            "size": 44,
            "at": "l3:not",
            "hl": [
              {
                "text": "không kiểm người bệnh",
                "at": "l3:testing"
              }
            ]
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: AHRQ — Teach-Back Method (Tool 5)",
            "x": 6804,
            "y": 1790,
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
          "say": "This is teach-back. AHRQ says do you understand is not a teach-back question.",
          "sub": "Đó là teach-back. AHRQ nói: “Do you understand?” không phải câu teach-back."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Patients often say yes even when they haven't understood.",
          "sub": "Vì người bệnh thường nói “có” dù chưa hiểu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And you're checking your own explanation, not testing the patient.",
          "sub": "Và bạn đang kiểm tra cách mình giải thích, chứ không kiểm tra bệnh nhân.",
          "keys": [
            "không kiểm tra bệnh nhân"
          ]
        }
      ],
      "ref": "p21"
    },
    {
      "id": "s23",
      "module": "BRK-02",
      "data": {
        "kicker": "Ý chính",
        "title": "Đừng hỏi “hiểu chưa”",
        "hl": "hiểu chưa",
        "sub": "Hãy mời bệnh nhân nói lại"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Don't ask if they understood.",
          "sub": "Đừng hỏi “hiểu chưa”."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Invite them to say it back.",
          "sub": "Hãy mời bệnh nhân nói lại.",
          "keys": [
            "nói lại"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
        }
      ],
      "ref": "p20"
    },
    {
      "id": "s24",
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
            "at": "l2:Five",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "I",
            "zoom": 0.8
          },
          {
            "at": "l6",
            "fit": "J",
            "ms": 1000
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: đúng chặng, mời nói lại",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:journey"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Tiếp nhận → hỏi đau → thủ thuật",
            "x": 7932,
            "y": 1260,
            "size": 44,
            "at": "l1:admission"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "→ trấn an → thuốc → ra viện",
            "x": 7972,
            "y": 1330,
            "size": 44,
            "at": "l1:medicines"
          },
          {
            "id": "j-a",
            "t": "text",
            "text": "Làm ngay: 2 câu cho lần tới",
            "x": 7932,
            "y": 1430,
            "size": 50,
            "at": "l6:Try now",
            "hl": [
              {
                "text": "2 câu",
                "at": "l6:two sentences"
              }
            ]
          },
          {
            "id": "j-a2",
            "t": "text",
            "text": "câu chào + câu xác nhận",
            "x": 7972,
            "y": 1510,
            "size": 38,
            "at": "l6:greeting"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: Tiếp nhận bệnh nhân",
            "x": 7932,
            "y": 1600,
            "size": 48,
            "at": "l7:next",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4706,
            "y": 250,
            "at": "l2:frame"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 760,
            "y": 1430,
            "at": "l4:Plain"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6664,
            "y": 1530,
            "at": "l5:habit"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo giao tiếp; chẩn đoán, thuốc, thủ thuật luôn theo bác sĩ và quy trình bệnh viện. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l7:end",
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
          "say": "So: one patient's journey, from admission and pain to medicines and discharge.",
          "sub": "Tóm lại: hành trình một bệnh nhân, từ tiếp nhận, hỏi đau đến dùng thuốc, ra viện.",
          "keys": [
            "hành trình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Five clinical criteria as your frame.",
          "sub": "Năm tiêu chí lâm sàng làm khung."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Plain words for the patient, medical terms for the notes.",
          "sub": "Lời thường cho bệnh nhân, thuật ngữ cho hồ sơ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And one habit for every stage: invite the patient to say it back.",
          "sub": "Và một thói quen cho mọi chặng: mời bệnh nhân nói lại.",
          "keys": [
            "mời bệnh nhân nói lại"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Try now: write two sentences for your next foreign patient. One greeting, one identity check.",
          "sub": "Làm ngay: ghi hai câu cho bệnh nhân nước ngoài lần tới: một câu chào, một câu xác nhận danh tính.",
          "keys": [
            "hai câu"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Then open the next lesson: admitting a patient.",
          "sub": "Rồi mở bài tiếp theo: tiếp nhận bệnh nhân nhập viện."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p24,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "According to AHRQ, who is really being checked in teach back?",
        "options": [
          "The nurse, because it checks how clearly the information was explained",
          "The patient, because it is a memory test with a score at the end",
          "The doctor, because only doctors are allowed to give any instructions"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "speech-balloon",
        "why": "AHRQ nhấn mạnh bạn đang kiểm tra cách mình giải thích, không kiểm tra bệnh nhân. Nói rõ điều này giúp bệnh nhân không thấy bị xấu hổ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "According to AHRQ, who is really being checked in teach back?",
          "sub": "Theo AHRQ, teach-back thật ra đang kiểm tra ai?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "The nurse, because it checks how clearly the information was explained.",
          "sub": "Chính người điều dưỡng: teach-back kiểm tra mình đã giải thích rõ chưa."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[30]"
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
          "say": "Two sentences for your next patient. Then try the forty questions below.",
          "sub": "Hai câu cho bệnh nhân lần tới. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (bài tổng chuỗi en-nurses-foreign-patients) dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-21: đoán OET có mấy tiêu chí chấm giao tiếp (1–2 hay 5 / 9) rồi lật. Dòng thời gian: bốn ngày nằm viện của Sam (Ngày 1 8:00 đến khoa, Thảo chỉ cười gật → 8:15 cô Hoa đưa năm tiêu chí → 8:30 tiếp nhận → 14:00 hỏi đau → Ngày 2 7:00 Dũng lấy máu, “Khoan đã!” venepuncture → Ngày 3 18:00 tập vai → Ngày 4 7:45 thuốc mang về, cách A → 8:00 cách B teach-back, khép vòng). Nhân vật: Thảo (p19), Dũng (p15), cô Hoa (điều dưỡng trưởng), Sam (bệnh nhân người Úc; gộp bệnh nhân Úc p15 và người Anh p19). Ca dao: “Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau.” Cảnh ngắt nhịp: BRK-10 (trích OET), BRK-08 (hành trình), BRK-04 (Sai/Đúng), BRK-07 (rehook), BRK-02 (ý chính). Câu đố questions[30].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
