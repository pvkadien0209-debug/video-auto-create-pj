// grammar-from-zero-roadmap--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "grammar-from-zero-roadmap--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "grammar-zero-beginners",
    "slug": "grammar-from-zero-roadmap",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Bắt đầu học ngữ pháp tiếng Anh từ con số 0 thì học gì trước, học gì sau?",
    "series": "Ngữ pháp từ con số 0 — cho người lớn mới bắt đầu, nói được câu tiếng Anh đầu tiên cho đúng"
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
            "id": "a-num",
            "t": "text",
            "text": "18 điểm",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:Eighteen",
            "color": "accent",
            "hl": [
              {
                "text": "18",
                "at": "l1:Eighteen"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "ngữ pháp A1 – A2",
            "x": 70,
            "y": 320,
            "size": 56,
            "at": "l1:A one"
          },
          {
            "id": "a-mt",
            "t": "text",
            "text": "Thì, mạo từ, so sánh…",
            "x": 70,
            "y": 420,
            "size": 50,
            "at": "l2:Tenses",
            "color": "muted"
          },
          {
            "id": "a-mtn",
            "t": "illus",
            "name": "snow-capped-mountain",
            "x": 640,
            "y": 400,
            "size": 110,
            "at": "l2:mountain"
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Nguồn: British Council LearnEnglish — ngữ pháp A1–A2",
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
          "say": "Eighteen grammar points. That's the British Council list for levels A one to A two.",
          "sub": "Mười tám điểm ngữ pháp: danh mục A1–A2 của British Council.",
          "keys": [
            "Mười tám điểm ngữ pháp"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tenses, articles, comparatives... For a total beginner, it looks like a mountain.",
          "sub": "Thì, mạo từ, so sánh… Với người mới bắt đầu, nhìn như một ngọn núi.",
          "keys": [
            "một ngọn núi"
          ]
        }
      ],
      "ref": "p6"
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
            "at": "l5",
            "fit": "A",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "a-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "wave",
                  "face": "happy"
                }
              ],
              "props": [
                "house",
                "waving-hand"
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
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Chủ nhật 17:00 · đầu ngõ",
            "icon": "house"
          },
          {
            "id": "a-cm",
            "t": "text",
            "text": "“Where are you from?”",
            "x": 60,
            "y": 530,
            "size": 54,
            "at": "l3:Where",
            "color": "coral",
            "hl": [
              {
                "text": "Where",
                "at": "l3:Where"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Đi đâu mà vội mà vàng”",
            "x": 60,
            "y": 640,
            "size": 52,
            "at": "l5:rush",
            "color": "accent",
            "hl": [
              {
                "text": "vội mà vàng",
                "at": "l5:hurry"
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
          "say": "Meet Thảo, a housewife. She left English behind many years ago.",
          "sub": "Đây là Thảo, nội trợ, đã bỏ quên tiếng Anh từ nhiều năm trước.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sunday, five p.m. Her new neighbour stops by. Meet Sam.",
          "sub": "Chủ nhật, năm giờ chiều. Hàng xóm mới ghé qua. Đây là Sam.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Hi! I'm Sam. Where are you from?",
          "sub": "Chào chị! Tôi là Sam. Chị từ đâu đến?",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Er... I... Hà Nội... yes!",
          "sub": "Ơ… tôi… Hà Nội… vâng!",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: why rush and hurry, only to trip on stones and tangle in vines?",
          "sub": "Ông bà dặn: “Đi đâu mà vội mà vàng, mà vấp phải đá mà quàng phải dây.”",
          "keys": [
            "Đi đâu mà vội mà vàng"
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
            "text": "Học gì trước, gì sau?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l2:first",
            "hl": [
              {
                "text": "trước",
                "at": "l2:first"
              }
            ]
          },
          {
            "id": "b-bk",
            "t": "text",
            "text": "Cả chục thì, trăm quy tắc",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l1:dozen",
            "color": "muted"
          },
          {
            "id": "b-book",
            "t": "illus",
            "name": "books",
            "x": 2728,
            "y": 150,
            "size": 100,
            "at": "l1:thick"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: nuốt cả cuốn",
            "x": 2028,
            "y": 270,
            "size": 52,
            "at": "l3:swallowing",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l3:seven"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: 7 chặng, đúng thứ tự",
            "x": 2028,
            "y": 360,
            "size": 56,
            "at": "l3:seven",
            "color": "accent",
            "hl": [
              {
                "text": "7 chặng",
                "at": "l3:seven stages"
              }
            ]
          },
          {
            "id": "b-g",
            "t": "text",
            "text": "Đích: giới thiệu · mô tả · hỏi",
            "x": 2028,
            "y": 470,
            "size": 50,
            "at": "l4:introduce",
            "hl": [
              {
                "text": "giới thiệu",
                "at": "l4:introduce"
              }
            ]
          },
          {
            "id": "b-flag",
            "t": "illus",
            "name": "chequered-flag",
            "x": 2828,
            "y": 450,
            "size": 90,
            "at": "l4:Goal"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "That night, Thảo opens a thick grammar book. A dozen tenses, hundreds of rules.",
          "sub": "Tối đó, Thảo mở cuốn ngữ pháp dày: cả chục thì, hàng trăm quy tắc.",
          "keys": [
            "hàng trăm quy tắc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "So, starting from zero: what comes first, and what comes later?",
          "sub": "Vậy học từ con số 0 thì học gì trước, học gì sau?",
          "keys": [
            "học gì trước, học gì sau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not swallowing the whole book, but seven stages, in the right order.",
          "sub": "Không phải nuốt cả cuốn sách, mà là bảy chặng, đúng thứ tự.",
          "keys": [
            "bảy chặng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Goal: introduce yourself, describe simple things, ask simple questions.",
          "sub": "Đích: tự giới thiệu, mô tả đơn giản, hỏi câu đơn giản.",
          "keys": [
            "tự giới thiệu"
          ]
        }
      ],
      "ref": "intro,p3"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Tuần tự học đầu tiên của Thảo",
        "points": [
          {
            "label": "Thứ Hai",
            "sub": "Đích Bậc 1",
            "illus": "chequered-flag"
          },
          {
            "label": "Thứ Tư",
            "sub": "18 điểm, 7 chặng",
            "illus": "ladder"
          },
          {
            "label": "Thứ Năm",
            "sub": "Khuôn câu, to be",
            "illus": "brick"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Chữ “có”, câu hỏi",
            "illus": "red-question-mark"
          },
          {
            "label": "Thứ Bảy",
            "sub": "Ba bước tự luyện",
            "illus": "laptop"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One week of evenings, five stops.",
          "sub": "Một tuần buổi tối, năm chặng.",
          "keys": [
            "năm chặng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Let's walk it with Thảo.",
          "sub": "Cùng Thảo đi hết tuần ấy."
        }
      ],
      "ref": "p7"
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
            "text": "① Thứ Hai 20:00 · Đích Bậc 1",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "3 cấp · 6 bậc · + Tiền bậc 1",
            "x": 3996,
            "y": 165,
            "size": 50,
            "at": "l2:three groups",
            "hl": [
              {
                "text": "6 bậc",
                "at": "l2:six levels"
              }
            ]
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Thông tư 33/2026 · từ 31/5/2026",
            "x": 3996,
            "y": 245,
            "size": 44,
            "at": "l3:Circular"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Bậc 1 = A1",
            "x": 3996,
            "y": 320,
            "size": 70,
            "at": "l4:matches",
            "color": "accent",
            "hl": [
              {
                "text": "A1",
                "at": "l4:A one"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: TT 33/2026/TT-BGDĐT (thay TT 01/2014); VOH, Cổng PBGDPL Cần Thơ",
            "x": 3996,
            "y": 730,
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
          "say": "Stop one, Monday, eight p.m. Thảo looks up the goal first: Level One.",
          "sub": "Chặng một, tám giờ tối thứ Hai. Thảo tra đích trước: Bậc 1.",
          "keys": [
            "Bậc 1"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Vietnam's language framework has three groups and six levels, now with a step before Level One.",
          "sub": "Khung năng lực ngoại ngữ Việt Nam có ba cấp, sáu bậc, nay thêm Tiền bậc 1.",
          "keys": [
            "ba cấp, sáu bậc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Circular thirty-three of twenty twenty-six replaced the old one, from May thirty-first.",
          "sub": "Thông tư 33/2026 thay Thông tư 01/2014, có hiệu lực từ 31/5/2026."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And Level One still matches A one, in the European framework.",
          "sub": "Và Bậc 1 vẫn ứng với A1 của khung tham chiếu châu Âu.",
          "keys": [
            "Bậc 1 vẫn ứng với A1"
          ]
        }
      ],
      "ref": "p1"
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
            "at": "l2",
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
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "bin",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "open-book"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "bin",
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
            "caption": "Thứ Hai 20:00 · ở nhà",
            "icon": "open-book"
          },
          {
            "id": "c-c0",
            "t": "box",
            "x": 3996,
            "y": 440,
            "w": 44,
            "h": 44,
            "at": "l2:introduce",
            "stroke": 5
          },
          {
            "id": "c-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 422,
            "size": 50,
            "at": "l2:introduce+600",
            "color": "accent"
          },
          {
            "id": "c-l0",
            "t": "text",
            "text": "Tự giới thiệu mình, người khác",
            "x": 4061,
            "y": 432,
            "size": 36,
            "at": "l2:introduce+200"
          },
          {
            "id": "c-c1",
            "t": "box",
            "x": 3996,
            "y": 500,
            "w": 44,
            "h": 44,
            "at": "l3:slowly",
            "stroke": 5
          },
          {
            "id": "c-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 482,
            "size": 50,
            "at": "l3:slowly+600",
            "color": "accent"
          },
          {
            "id": "c-l1",
            "t": "text",
            "text": "Giao tiếp khi người kia nói chậm",
            "x": 4061,
            "y": 492,
            "size": 36,
            "at": "l3:slowly+200"
          },
          {
            "id": "c-c2",
            "t": "box",
            "x": 3996,
            "y": 560,
            "w": 44,
            "h": 44,
            "at": "l4:Short",
            "stroke": 5
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 542,
            "size": 50,
            "at": "l4:Short+600",
            "color": "accent"
          },
          {
            "id": "c-l2",
            "t": "text",
            "text": "Viết câu ngắn về mình",
            "x": 4061,
            "y": 552,
            "size": 36,
            "at": "l4:Short+200"
          },
          {
            "id": "c-c3",
            "t": "box",
            "x": 3996,
            "y": 620,
            "w": 44,
            "h": 44,
            "at": "l5:Ask",
            "stroke": 5
          },
          {
            "id": "c-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 602,
            "size": 50,
            "at": "l5:Ask+600",
            "color": "accent"
          },
          {
            "id": "c-l3",
            "t": "text",
            "text": "Hỏi, đáp câu đơn giản",
            "x": 4061,
            "y": 612,
            "size": 36,
            "at": "l5:Ask+200"
          },
          {
            "id": "c-old",
            "t": "text",
            "text": "Trích khung cũ → kiểm văn bản mới",
            "x": 3996,
            "y": 680,
            "size": 34,
            "at": "l6:old",
            "color": "coral",
            "hl": [
              {
                "text": "khung cũ",
                "at": "l6:old"
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
          "say": "This is Bé Bin, Thảo's son. He learns English at school, and reads the description aloud.",
          "sub": "Đây là Bé Bin, con trai Thảo, đang học tiếng Anh ở trường. Bin đọc to mô tả Bậc 1.",
          "keys": [
            "Bé Bin"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Level One: you can introduce yourself and others, and say where you live!",
          "sub": "Bậc 1: có thể tự giới thiệu bản thân và người khác, trả lời về nơi sinh sống!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And talk simply, if the other person speaks slowly, clearly, and is ready to help.",
          "sub": "Và giao tiếp đơn giản nếu người đối thoại nói chậm, rõ ràng, sẵn sàng giúp đỡ.",
          "keys": [
            "nói chậm, rõ ràng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Writing? Short phrases and sentences about yourself, family, school, work.",
          "sub": "Viết thì sao? Cụm từ, câu ngắn về bản thân, gia đình, trường lớp, nơi làm việc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Speaking? Ask and answer simple questions. That is our finish line.",
          "sub": "Nói thì hỏi và trả lời câu hỏi đơn giản. Đó chính là vạch đích của chuỗi.",
          "keys": [
            "vạch đích"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Note: this description comes from the old framework. Check the new text too.",
          "sub": "Lưu ý: mô tả này trích theo khung cũ, nên kiểm thêm văn bản mới.",
          "keys": [
            "khung cũ"
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
      "ref": "p2,p3"
    },
    {
      "id": "s06",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Ba 20:00 · ở nhà",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Học hết ngữ pháp rồi mới nói",
          "why": "Bậc 1 chỉ cần cấu trúc quen thuộc thường nhật và giao tiếp đơn giản; chưa cần thì quá khứ, câu điều kiện.",
          "rule": "Đích A1: nói đúng câu quen thuộc"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "First, I learn every tense and the passive. Then I talk to Sam.",
          "sub": "Trước hết học hết các thì, cả bị động. Rồi mới nói chuyện với Sam.",
          "face": "worried",
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
          "say": "Level One only asks for familiar, everyday structures. No past tense, no conditionals yet.",
          "sub": "Bậc 1 chỉ đòi hỏi cấu trúc quen thuộc thường nhật. Chưa cần thì quá khứ, chưa cần câu điều kiện.",
          "keys": [
            "cấu trúc quen thuộc thường nhật"
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
          "who": "thao",
          "say": "First, simple sentences. My name, my family, where I live.",
          "sub": "Trước hết là câu đơn giản: tên mình, gia đình, nơi ở.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. The A one goal is saying familiar sentences correctly, not knowing all grammar.",
          "sub": "Đúng. Đích A1 là nói đúng câu quen thuộc, chưa phải biết hết ngữ pháp.",
          "phase": "redo",
          "keys": [
            "nói đúng câu quen thuộc"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p4,p5"
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
            "at": "l6",
            "fit": [
              "d-s0",
              "d-s6"
            ],
            "zoom": 1.15,
            "ms": 700
          },
          {
            "at": "l7",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Tư 20:00 · 18 → 7",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-18",
            "t": "text",
            "text": "18 điểm A1–A2",
            "x": 5964,
            "y": 165,
            "size": 56,
            "at": "l2:Eighteen",
            "hl": [
              {
                "text": "18",
                "at": "l2:Eighteen"
              }
            ]
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "to be · have got · there is",
            "x": 5964,
            "y": 245,
            "size": 42,
            "at": "l2:to be",
            "color": "muted"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "'s · đếm được · câu hỏi",
            "x": 5964,
            "y": 305,
            "size": 42,
            "at": "l2:possessive",
            "color": "muted"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "mạo từ · giới từ · quá khứ",
            "x": 5964,
            "y": 365,
            "size": 42,
            "at": "l3:articles",
            "color": "muted"
          },
          {
            "id": "d-7",
            "t": "text",
            "text": "→ chọn 7 chặng",
            "x": 5964,
            "y": 450,
            "size": 60,
            "at": "l4:Seven",
            "color": "accent",
            "hl": [
              {
                "text": "7 chặng",
                "at": "l4:Seven stages"
              }
            ]
          },
          {
            "id": "d-w",
            "t": "text",
            "text": "Để sau: quá khứ, so sánh",
            "x": 5964,
            "y": 560,
            "size": 46,
            "at": "l5:wait",
            "color": "coral",
            "hl": [
              {
                "text": "Để sau",
                "at": "l5:wait"
              }
            ]
          },
          {
            "id": "d-w2",
            "t": "text",
            "text": "… khi nền đã vững",
            "x": 6004,
            "y": 630,
            "size": 44,
            "at": "l5:solid"
          },
          {
            "id": "d-b0",
            "t": "box",
            "x": 6784,
            "y": 640,
            "w": 380,
            "h": 62,
            "at": "l6:sentence order",
            "stroke": 4,
            "color": "coral"
          },
          {
            "id": "d-b1",
            "t": "box",
            "x": 6802,
            "y": 562,
            "w": 380,
            "h": 62,
            "at": "l6:to be",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "d-b2",
            "t": "box",
            "x": 6820,
            "y": 484,
            "w": 380,
            "h": 62,
            "at": "l6:pronouns",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "d-b3",
            "t": "box",
            "x": 6838,
            "y": 406,
            "w": 380,
            "h": 62,
            "at": "l6:nouns",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "d-b4",
            "t": "box",
            "x": 6856,
            "y": 328,
            "w": 380,
            "h": 62,
            "at": "l6:there is",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "d-b5",
            "t": "box",
            "x": 6874,
            "y": 250,
            "w": 380,
            "h": 62,
            "at": "l6:have got",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "d-b6",
            "t": "box",
            "x": 6892,
            "y": 172,
            "w": 380,
            "h": 62,
            "at": "l6:questions",
            "stroke": 4,
            "color": "ink"
          },
          {
            "id": "d-s0",
            "t": "text",
            "text": "1. Khuôn câu",
            "x": 6804,
            "y": 650,
            "size": 38,
            "at": "l6:sentence order+200"
          },
          {
            "id": "d-s1",
            "t": "text",
            "text": "2. To be",
            "x": 6822,
            "y": 572,
            "size": 38,
            "at": "l6:to be+200"
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "3. Đại từ, sở hữu",
            "x": 6840,
            "y": 494,
            "size": 38,
            "at": "l6:pronouns+200"
          },
          {
            "id": "d-s3",
            "t": "text",
            "text": "4. Danh từ",
            "x": 6858,
            "y": 416,
            "size": 38,
            "at": "l6:nouns+200"
          },
          {
            "id": "d-s4",
            "t": "text",
            "text": "5. There is",
            "x": 6876,
            "y": 338,
            "size": 38,
            "at": "l6:there is+200"
          },
          {
            "id": "d-s5",
            "t": "text",
            "text": "6. Have got",
            "x": 6894,
            "y": 260,
            "size": 38,
            "at": "l6:have got+200"
          },
          {
            "id": "d-s6",
            "t": "text",
            "text": "7. Câu hỏi",
            "x": 6912,
            "y": 182,
            "size": 38,
            "at": "l6:questions+200"
          },
          {
            "id": "d-lad",
            "t": "illus",
            "name": "ladder",
            "x": 7404,
            "y": 560,
            "size": 110,
            "at": "l7:stairs"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, Wednesday. Thảo opens the British Council A one to A two grammar page.",
          "sub": "Chặng hai, tối thứ Tư. Thảo mở trang ngữ pháp A1–A2 của British Council."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Eighteen points: to be, have got, there is, possessive s, countable nouns, questions...",
          "sub": "Mười tám điểm: to be, have got, there is, sở hữu cách 's, danh từ đếm được, câu hỏi…",
          "keys": [
            "Mười tám điểm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "...plus articles, prepositions, comparatives and the past tense.",
          "sub": "…cùng mạo từ, giới từ, so sánh hơn và thì quá khứ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Seven stages: the series keeps only what serves our three kinds of sentences.",
          "sub": "Bảy chặng: chuỗi chỉ giữ những mảng phục vụ ba loại câu đích.",
          "keys": [
            "Bảy chặng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The past tense and comparatives? They wait, until the base is solid.",
          "sub": "Thì quá khứ, so sánh hơn? Để dành bước sau, khi nền đã vững.",
          "keys": [
            "khi nền đã vững"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "In order: sentence order, to be, pronouns, nouns, there is, have got, questions.",
          "sub": "Theo thứ tự: khuôn câu, to be, đại từ, danh từ, there is, have got, câu hỏi."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Like stairs. Skip a step, and you trip, just as our elders warned.",
          "sub": "Như bậc cầu thang. Nhảy cóc là vấp, đúng như ông bà dặn.",
          "keys": [
            "Nhảy cóc là vấp"
          ]
        }
      ],
      "ref": "p6,p7"
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
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ Thứ Năm 20:00 · Chặng 1, 2",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Chủ ngữ → động từ → …",
            "x": 7932,
            "y": 165,
            "size": 54,
            "at": "l2:subject",
            "hl": [
              {
                "text": "Chủ ngữ",
                "at": "l2:Subject first"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "a beautiful house",
            "x": 7932,
            "y": 250,
            "size": 54,
            "at": "l3:adjectives",
            "color": "accent",
            "hl": [
              {
                "text": "beautiful",
                "at": "l3:before"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "I am · he is · they are",
            "x": 7932,
            "y": 340,
            "size": 56,
            "at": "l4:to be",
            "hl": [
              {
                "text": "am",
                "at": "l4:I am"
              },
              {
                "text": "is",
                "at": "l4:he is"
              }
            ]
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "gần như mọi câu giới thiệu",
            "x": 7932,
            "y": 425,
            "size": 46,
            "at": "l5:introduction",
            "color": "accent",
            "hl": [
              {
                "text": "mọi câu giới thiệu",
                "at": "l5:every"
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
          "say": "Stop three, Thursday. Stage one is sentence order.",
          "sub": "Chặng ba, tối thứ Năm. Chặng một của chuỗi: khuôn câu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Every sentence needs a subject and a verb. Subject first, verb next, then the rest.",
          "sub": "Câu nào cũng có chủ ngữ và động từ: chủ ngữ trước, động từ sau, rồi phần còn lại.",
          "keys": [
            "chủ ngữ trước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And adjectives go before nouns.",
          "sub": "Và tính từ đứng trước danh từ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Stage two is to be: I am, he is, they are, negatives, questions, short answers.",
          "sub": "Chặng hai là to be: I am, he is, they are, phủ định, câu hỏi, trả lời ngắn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "It's the verb of almost every introduction.",
          "sub": "Đó là động từ của gần như mọi câu giới thiệu.",
          "keys": [
            "gần như mọi câu giới thiệu"
          ]
        }
      ],
      "ref": "p8,p9"
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
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "bin",
                  "side": "left",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "open-book",
                "red-question-mark"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "bin",
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
            "caption": "Thứ Năm 20:30 · Bin hỏi",
            "icon": "red-question-mark"
          },
          {
            "id": "e-q1",
            "t": "text",
            "text": "You are tired.",
            "x": 7932,
            "y": 520,
            "size": 46,
            "at": "l3:Are you",
            "color": "muted"
          },
          {
            "id": "e-q2",
            "t": "text",
            "text": "→ Are you tired?",
            "x": 8292,
            "y": 520,
            "size": 50,
            "at": "l3:Are you",
            "color": "accent",
            "hl": [
              {
                "text": "Are",
                "at": "l3:Are you"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Học chữ trước, đổi chỗ sau",
            "x": 7932,
            "y": 640,
            "size": 58,
            "at": "l5:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Học chữ trước",
                "at": "l5:words first"
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
          "say": "Then Bin asks a smart question.",
          "sub": "Rồi Bin hỏi một câu rất khôn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "bin",
          "say": "Mum, why learn to be before questions? Questions are more fun!",
          "sub": "Mẹ ơi, sao học to be trước câu hỏi? Học hỏi vui hơn mà!",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Because many basic questions just move to be to the front. Are you tired? Where are you from?",
          "sub": "Vì nhiều câu hỏi cơ bản chỉ là đảo to be lên trước: Are you tired? Where are you from?",
          "keys": [
            "đảo to be lên trước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Don't know am, is, are yet? Then you can't move them correctly either.",
          "sub": "Chưa biết chủ ngữ nào đi với am, is, are thì cũng chưa đảo đúng được."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: learn the words first, then learn to move them.",
          "sub": "Rút ra: học chữ trước, rồi mới học cách đổi chỗ chữ.",
          "keys": [
            "học chữ trước"
          ]
        }
      ],
      "ref": "p10,p11"
    },
    {
      "id": "s10",
      "module": "BRK-07",
      "data": {
        "question": "Chữ “có” nói sao cho đúng?",
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
          "say": "Vietnamese has one word, có. English needs two ways.",
          "sub": "Tiếng Việt chỉ một chữ “có”. Tiếng Anh cần hai cách.",
          "keys": [
            "hai cách"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p13"
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
            "text": "④ Thứ Sáu 20:00 · Chặng 3 → 7",
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
              "set": "kitchen",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "baguette-bread",
                "bread"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:kitchen",
            "caption": "Thứ Sáu 20:00 · bếp nhà Thảo",
            "icon": "bread"
          },
          {
            "id": "f-br",
            "t": "text",
            "text": "“two breads”",
            "x": 60,
            "y": 1260,
            "size": 54,
            "at": "l3:Two breads",
            "color": "coral"
          },
          {
            "id": "f-brx",
            "t": "strike",
            "over": "f-br",
            "at": "l3:count"
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "4. số nhiều · không đếm được",
            "x": 60,
            "y": 1345,
            "size": 44,
            "at": "l3:plural",
            "hl": [
              {
                "text": "không đếm được",
                "at": "l3:count"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "3. I, me, my, mine, 's",
            "x": 60,
            "y": 1420,
            "size": 44,
            "at": "l4:stage three",
            "hl": [
              {
                "text": "'s",
                "at": "l4:apostrophe"
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
          "say": "Stop four, Friday, in the kitchen. Meet Dũng, Thảo's younger brother, a ride-hailing driver.",
          "sub": "Chặng bốn, tối thứ Sáu, trong bếp. Đây là Dũng, em trai Thảo, tài xế xe công nghệ.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Sis! I bought two breads for breakfast!",
          "sub": "Chị ơi! Em mua “two breads” cho bữa sáng này!",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two breads? That's stage four: plural nouns, and nouns you can't count, like bread.",
          "sub": "Two breads? Đó là chặng bốn: danh từ số nhiều và danh từ không đếm được, như bread.",
          "keys": [
            "không đếm được"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Just before it, stage three: I, me, my, mine, and apostrophe s, for whose things.",
          "sub": "Ngay trước đó là chặng ba: I, me, my, mine và 's để nói đồ của ai, con của ai."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
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
            "id": "f-co",
            "t": "text",
            "text": "“có” → 2 cách",
            "x": 60,
            "y": 1490,
            "size": 52,
            "at": "l1:split",
            "color": "accent",
            "hl": [
              {
                "text": "2 cách",
                "at": "l1:two"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "5. There's bread in the kitchen",
            "x": 60,
            "y": 1565,
            "size": 40,
            "at": "l2:There's",
            "hl": [
              {
                "text": "There's",
                "at": "l2:There's"
              }
            ]
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "6. have, have got: người sở hữu",
            "x": 60,
            "y": 1630,
            "size": 40,
            "at": "l3:owns",
            "hl": [
              {
                "text": "have got",
                "at": "l3:have got"
              }
            ]
          },
          {
            "id": "f-7",
            "t": "text",
            "text": "7. Ba khuôn câu hỏi",
            "x": 60,
            "y": 1695,
            "size": 44,
            "at": "l4:three question",
            "color": "accent",
            "hl": [
              {
                "text": "Ba khuôn",
                "at": "l4:three"
              }
            ]
          },
          {
            "id": "f-7b",
            "t": "text",
            "text": "be, can, have · do, does · không do",
            "x": 60,
            "y": 1765,
            "size": 34,
            "at": "l5:Move"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stages five and six split one Vietnamese word, có, into two.",
          "sub": "Chặng năm và sáu tách chữ “có” của tiếng Việt thành hai cách nói.",
          "keys": [
            "hai cách nói"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "There is, there are: a place has something. There's bread in the kitchen.",
          "sub": "There is, there are: một nơi có thứ gì. There's bread in the kitchen."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Have and have got: a person owns it. Things, family, even a cold.",
          "sub": "Have, have got: người sở hữu. Đồ vật, gia đình, cả bệnh."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Stage seven gathers everything into three question patterns.",
          "sub": "Chặng bảy gom tất cả vào ba khuôn câu hỏi.",
          "keys": [
            "ba khuôn câu hỏi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Move be, can or have to the front. Use do or does. And subject questions, with no do.",
          "sub": "Đảo be, can, have lên trước chủ ngữ; dùng do, does; câu hỏi về chủ ngữ không cần do."
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s13",
      "module": "BRK-05",
      "data": {
        "title": "Đến đây, mình đã biết",
        "points": [
          "Đích A1: nói đúng câu quen thuộc",
          "Bảy chặng, đi đúng thứ tự",
          "Học chữ trước, đổi chỗ sau"
        ],
        "illus": "light-bulb"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Quick recap. The A one goal: familiar sentences, said correctly.",
          "sub": "Nhắc nhanh. Đích A1: nói đúng câu quen thuộc.",
          "keys": [
            "nói đúng câu quen thuộc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Seven stages, in order.",
          "sub": "Bảy chặng, đi đúng thứ tự."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Words first, then move them.",
          "sub": "Học chữ trước, đổi chỗ sau."
        }
      ],
      "ref": "p5,p11"
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
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Bảy 9:00 · Ba bước",
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
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
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
            "at": "l1:Saturday",
            "caption": "Thứ Bảy 9:00 · laptop của Thảo",
            "icon": "laptop"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "1. Kiểm tra: biết gì rồi?",
            "x": 2028,
            "y": 1255,
            "size": 44,
            "at": "l3:Test first",
            "hl": [
              {
                "text": "Kiểm tra",
                "at": "l3:Test first"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "2. Đọc giải thích",
            "x": 2028,
            "y": 1325,
            "size": 44,
            "at": "l3:Read"
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "3. Kiểm tra lại",
            "x": 2028,
            "y": 1395,
            "size": 44,
            "at": "l3:test again"
          },
          {
            "id": "g-skip",
            "t": "text",
            "text": "“Bỏ qua bước 1?”",
            "x": 2028,
            "y": 1475,
            "size": 46,
            "at": "l4:skip",
            "color": "coral"
          },
          {
            "id": "g-skx",
            "t": "strike",
            "over": "g-skip",
            "at": "l5:don't skip"
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Đừng bỏ bước đầu",
            "x": 2028,
            "y": 1545,
            "size": 52,
            "at": "l5:don't skip",
            "color": "accent",
            "hl": [
              {
                "text": "Đừng bỏ",
                "at": "l5:don't skip"
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
          "say": "Stop five, Saturday morning. How do you practise more, for free?",
          "sub": "Chặng năm, sáng thứ Bảy. Tự luyện thêm miễn phí thế nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each British Council grammar page is a short lesson in three steps.",
          "sub": "Mỗi trang ngữ pháp A1–A2 của British Council là một bài ngắn theo ba bước.",
          "keys": [
            "ba bước"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Test first to see what you know. Read the explanation. Then test again.",
          "sub": "Làm bài kiểm tra xem mình biết gì, đọc giải thích, rồi kiểm tra lại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "A test before I learn anything? I'll skip that one.",
          "sub": "Chưa học gì đã kiểm tra? Thôi, bỏ qua bước này.",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The guide is clear: don't skip the first step.",
          "sub": "Trang hướng dẫn nói rõ: đừng bỏ qua bước đầu.",
          "keys": [
            "đừng bỏ qua bước đầu"
          ]
        }
      ],
      "ref": "p15"
    },
    {
      "id": "s15",
      "module": "BRK-04",
      "data": {
        "title": "Mở một trang ngữ pháp",
        "labels": [
          "Thảo định làm",
          "Nên làm"
        ],
        "wrong": "Đọc giải thích trước, bỏ bài kiểm tra",
        "right": "Làm bài kiểm tra trước, ghi câu sai",
        "wrongIllus": "open-book",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Read first, and skip the test?",
          "sub": "Đọc trước, bỏ bài kiểm tra?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Test first. It shows what you already know.",
          "sub": "Kiểm trước: biết mình đã biết gì.",
          "keys": [
            "Kiểm trước"
          ]
        }
      ],
      "ref": "p15"
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
            "at": "l2",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
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
            "id": "g-pg",
            "t": "text",
            "text": "Làm mẫu: “Present simple: to be”",
            "x": 2028,
            "y": 1630,
            "size": 38,
            "at": "l1:present simple",
            "hl": [
              {
                "text": "to be",
                "at": "l1:to be"
              }
            ]
          },
          {
            "id": "g-v1",
            "t": "text",
            "text": "✓ ghi câu sai",
            "x": 2608,
            "y": 1255,
            "size": 40,
            "at": "l2:mistakes",
            "color": "accent"
          },
          {
            "id": "g-v2",
            "t": "text",
            "text": "✓ đối chiếu",
            "x": 2488,
            "y": 1325,
            "size": 40,
            "at": "l3:match",
            "color": "accent"
          },
          {
            "id": "g-v3",
            "t": "text",
            "text": "✓ cuối trang",
            "x": 2448,
            "y": 1395,
            "size": 40,
            "at": "l4:bottom",
            "color": "accent"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "4. Xem bình luận",
            "x": 2028,
            "y": 1690,
            "size": 42,
            "at": "l5:comments",
            "hl": [
              {
                "text": "bình luận",
                "at": "l5:comments"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Kiểm trước · học sau · kiểm lại",
            "x": 2028,
            "y": 1760,
            "size": 44,
            "at": "l6:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Kiểm trước",
                "at": "l6:test first"
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
          "say": "Try it after our to be lesson. Open the page: present simple, to be.",
          "sub": "Làm thử sau bài to be của chuỗi: mở trang “Present simple: to be”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Step one: the test at the top, before reading. I write down my mistakes.",
          "sub": "Bước một: làm bài kiểm tra đầu trang, chưa đọc gì. Ghi lại số câu sai.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Step two: read the explanation, and match it with my mistakes.",
          "sub": "Bước hai: đọc giải thích, đối chiếu với những câu vừa sai."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Step three: the second test, at the bottom.",
          "sub": "Bước ba: làm bài kiểm tra thứ hai ở cuối trang."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Step four: still confused? Scroll down to the comments. Someone may have asked already.",
          "sub": "Bước bốn: còn chưa hiểu? Kéo xuống phần bình luận, có thể đã có người hỏi.",
          "keys": [
            "phần bình luận"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: test first, learn next, test again. Repeat it for every stage.",
          "sub": "Rút ra: kiểm trước, học sau, kiểm lại. Lặp lại cho từng chặng.",
          "keys": [
            "kiểm trước, học sau, kiểm lại"
          ]
        }
      ],
      "ref": "p18,p19"
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
            "text": "⑥ Thứ Bảy 21:00 · Tra, đo",
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
                  "pose": "hold",
                  "face": "surprised"
                }
              ],
              "props": [
                "laptop",
                "card-index"
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
            "at": "l1:Saturday night",
            "caption": "Thứ Bảy 21:00 · bài kiểm tra trên mạng",
            "icon": "card-index"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Tra cứu = sách tham khảo",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l1:reference",
            "hl": [
              {
                "text": "sách tham khảo",
                "at": "l1:dictionary"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Đọc từ đầu đến cuối",
            "x": 3996,
            "y": 1340,
            "size": 46,
            "at": "l2:start",
            "color": "muted"
          },
          {
            "id": "h-2x",
            "t": "strike",
            "over": "h-2",
            "at": "l2:Look up"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "→ tìm đúng điểm cần",
            "x": 3996,
            "y": 1410,
            "size": 50,
            "at": "l2:Look up",
            "color": "accent",
            "hl": [
              {
                "text": "đúng điểm cần",
                "at": "l2:need"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Bài kiểm trình độ = ước lượng",
            "x": 3996,
            "y": 1510,
            "size": 46,
            "at": "l4:rough",
            "color": "coral",
            "hl": [
              {
                "text": "ước lượng",
                "at": "l4:rough guide"
              }
            ]
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Dễ quá ↑ · khó quá ↓ một bậc",
            "x": 3996,
            "y": 1590,
            "size": 46,
            "at": "l5:Too easy"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, Saturday night. The grammar reference is like a dictionary.",
          "sub": "Chặng sáu, tối thứ Bảy. Phần tra cứu ngữ pháp giống một cuốn sách tham khảo.",
          "keys": [
            "sách tham khảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Don't read it from start to finish. Look up just the point you need.",
          "sub": "Đừng đọc từ đầu đến cuối. Tìm đúng điểm mình cần.",
          "keys": [
            "Tìm đúng điểm mình cần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I took a level test online. It says A one! Is that exact?",
          "sub": "Mình làm bài kiểm tra trình độ trên mạng. Nó bảo A1! Có chính xác không?",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Online level tests are only a rough guide. And your level can differ between skills.",
          "sub": "Bài kiểm tra trình độ trên mạng chỉ là ước lượng, mỗi kỹ năng có thể khác nhau.",
          "keys": [
            "chỉ là ước lượng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Start at the suggested level. Too easy or too hard? Move one level up or down.",
          "sub": "Bắt đầu ở bậc được gợi ý. Dễ quá hay khó quá thì lên hoặc xuống một bậc."
        }
      ],
      "ref": "p16,p17"
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
            "id": "h-a2",
            "t": "text",
            "text": "Vững A1 → đích A2",
            "x": 3996,
            "y": 1680,
            "size": 54,
            "at": "l1:A two",
            "color": "accent",
            "hl": [
              {
                "text": "A2",
                "at": "l1:A two"
              }
            ]
          },
          {
            "id": "h-key",
            "t": "text",
            "text": "A2 Key: gia đình · ăn uống · nhà",
            "x": 3996,
            "y": 1760,
            "size": 40,
            "at": "l2:topic"
          },
          {
            "id": "h-lim",
            "t": "text",
            "text": "đừng chỉ học từ trong danh sách",
            "x": 4836,
            "y": 1780,
            "size": 40,
            "at": "l3:only",
            "color": "coral",
            "hl": [
              {
                "text": "đừng chỉ",
                "at": "l3:only"
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
          "say": "Once A one feels solid, the next goal can be A two.",
          "sub": "Khi đã vững A1, đích tiếp theo có thể là A2.",
          "keys": [
            "A2"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cambridge's A two Key word list groups words by topic: family and friends, food and drink, house and home.",
          "sub": "Danh sách từ vựng A2 Key của Cambridge chia theo chủ đề: gia đình, bạn bè, ăn uống, nhà cửa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The very topics of this series. But don't study only the words on the list.",
          "sub": "Đúng những chủ đề của chuỗi này. Nhưng đừng chỉ học từ trong danh sách.",
          "keys": [
            "đừng chỉ học từ trong danh sách"
          ]
        }
      ],
      "ref": "p20"
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
            "at": "l4",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Chủ nhật sau · 17:00",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Next Sunday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "wave",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "house",
                "waving-hand"
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
            "caption": "Chủ nhật sau 17:00 · đầu ngõ",
            "icon": "house"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "“I'm Thảo. I'm from Hà Nội.”",
            "x": 5964,
            "y": 1270,
            "size": 46,
            "at": "l3:I'm Thảo",
            "color": "accent",
            "hl": [
              {
                "text": "I'm",
                "at": "l3:I'm Thảo"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "“And you?”",
            "x": 5964,
            "y": 1350,
            "size": 50,
            "at": "l3:And you"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Đi đâu mà vội mà vàng”",
            "x": 5964,
            "y": 1510,
            "size": 52,
            "at": "l4:rush",
            "color": "accent",
            "hl": [
              {
                "text": "vội mà vàng",
                "at": "l4:hurry"
              }
            ]
          },
          {
            "id": "i-ca2",
            "t": "text",
            "text": "→ đi từng chặng một",
            "x": 6004,
            "y": 1590,
            "size": 48,
            "at": "l4:one stage"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next Sunday, five p.m. Same alley, same neighbour.",
          "sub": "Chủ nhật tuần sau, năm giờ chiều. Vẫn đầu ngõ ấy, vẫn người hàng xóm ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Hi, Thảo! Where are you from?",
          "sub": "Chào Thảo! Chị từ đâu đến?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Hi, Sam! I'm Thảo. I'm from Hà Nội. And you?",
          "sub": "Chào Sam! Tôi là Thảo. Tôi đến từ Hà Nội. Còn chị?",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Why rush and hurry? Thảo took one stage at a time, and didn't trip once.",
          "sub": "“Đi đâu mà vội mà vàng”: Thảo đi từng chặng một, chẳng vấp lần nào.",
          "keys": [
            "đi từng chặng một"
          ]
        }
      ],
      "ref": "p3"
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
            "at": "l1:end",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "J",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: đích A1, 7 chặng",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:So"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Câu quen thuộc, nói đúng",
            "x": 7932,
            "y": 1270,
            "size": 52,
            "at": "l1:familiar",
            "hl": [
              {
                "text": "nói đúng",
                "at": "l1:correctly"
              }
            ]
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "Làm ngay: bài 1 — khuôn câu",
            "x": 7932,
            "y": 1390,
            "size": 52,
            "at": "l5:Do it now",
            "color": "accent",
            "hl": [
              {
                "text": "bài 1",
                "at": "l5:lesson one"
              }
            ]
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4536,
            "y": 320,
            "at": "l2:goal"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 7404,
            "y": 160,
            "at": "l3:Seven"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2668,
            "y": 1760,
            "at": "l4:test"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Khung năng lực đã đổi sang TT 33/2026; mô tả Bậc 1 trích khung cũ — kiểm văn bản hiện hành. Nhân vật là minh hoạ.",
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
          "say": "So: the A one goal isn't all grammar. It's familiar sentences, said correctly.",
          "sub": "Tóm lại: đích A1 không phải biết hết ngữ pháp, mà là nói đúng câu quen thuộc.",
          "keys": [
            "nói đúng câu quen thuộc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Monday's goal: Level One, simple everyday talk.",
          "sub": "Đích của thứ Hai: Bậc 1, giao tiếp đơn giản hằng ngày."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Seven stages, from sentence order to questions.",
          "sub": "Bảy chặng, từ khuôn câu đến câu hỏi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "For each stage: test, learn, test again.",
          "sub": "Mỗi chặng: kiểm tra, học, kiểm tra lại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Do it now: start with lesson one, what a simple sentence needs.",
          "sub": "Việc làm ngay: bắt đầu với bài một, câu đơn giản nhất cần những gì.",
          "keys": [
            "bài một"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "Is it true that you must learn all grammar before you start speaking?",
        "options": [
          "Yes, you need every tense and the passive before saying one sentence",
          "Yes, because people will not understand you if you miss any rule",
          "No, Level One only needs familiar everyday structures and simple talk"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "thinking-face",
        "why": "Mô tả Bậc 1 chỉ đòi hỏi cấu trúc quen thuộc thường nhật. Người ở Bậc 1 chưa cần thì quá khứ hay câu điều kiện."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Is it true that you must learn all grammar before you start speaking?",
          "sub": "Có đúng là phải học hết ngữ pháp rồi mới bắt đầu nói không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "No, Level One only needs familiar everyday structures and simple talk.",
          "sub": "Không. Bậc 1 chỉ cần cấu trúc quen thuộc thường nhật và giao tiếp đơn giản."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Familiar sentences first. Harder grammar can wait.",
          "sub": "Câu quen thuộc trước, ngữ pháp khó để sau."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[6]"
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
          "say": "One stage at a time. Now, try the forty questions below.",
          "sub": "Đi từng chặng một. Giờ thử bốn mươi câu hỏi bên dưới nhé.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo TUẦN TỰ HỌC ĐẦU TIÊN của Thảo (Chủ nhật 17:00 đầu ngõ cứng họng trước câu “Where are you from?” của Sam → Thứ Hai đích Bậc 1 → Thứ Ba “Khoan đã!” học hết rồi mới nói → Thứ Tư 18 điểm → 7 chặng → Thứ Năm khuôn câu, to be, Bin hỏi → Thứ Sáu chữ “có”, câu hỏi, Dũng “two breads” → Thứ Bảy 9:00 ba bước British Council → Thứ Bảy 21:00 tra cứu, kiểm trình độ, A2 → Chủ nhật sau 17:00 khép vòng). HOOK-24 neo “18 điểm ngữ pháp” (British Council). Nhân vật: Thảo, Sam, Bé Bin, Dũng — w145/_series/grammar-zero-beginners.md. Cảnh ngắt nhịp: BRK-08 (tuần), BRK-07 (rehook chữ “có”), BRK-05 (nhắc nhanh), BRK-04 (kiểm trước / đọc trước). Ca dao: “Đi đâu mà vội mà vàng”. Câu đố questions[6].",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
