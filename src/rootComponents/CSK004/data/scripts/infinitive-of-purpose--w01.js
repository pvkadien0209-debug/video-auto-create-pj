// infinitive-of-purpose--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "infinitive-of-purpose--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "grammar-adult-linking-sentences",
    "slug": "infinitive-of-purpose",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Nói mục đích 'để làm gì': to, in order to hay for?",
    "series": "Từ câu ngắn đến câu dài — ngữ pháp nối câu cho người học A2 lên B1"
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
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo",
                "sunrise"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · 6:00 · mẩu giấy dán",
            "icon": "memo"
          },
          {
            "id": "a-line",
            "t": "text",
            "text": "I learn English for…",
            "x": 60,
            "y": 130,
            "size": 70,
            "at": "l2:english"
          },
          {
            "id": "a-cut",
            "t": "text",
            "text": "✂ ???",
            "x": 60,
            "y": 250,
            "size": 90,
            "at": "l3:cut",
            "color": "coral",
            "hl": [
              {
                "text": "???",
                "at": "l3:tiny"
              }
            ]
          },
          {
            "id": "a-de",
            "t": "text",
            "text": "“để” = ?",
            "x": 420,
            "y": 260,
            "size": 70,
            "at": "l4:để",
            "color": "muted"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Ăn để sống,",
            "x": 60,
            "y": 450,
            "size": 54,
            "at": "l5:eat",
            "color": "accent"
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "chứ không phải sống để ăn”",
            "x": 60,
            "y": 525,
            "size": 46,
            "at": "l5:live to eat",
            "color": "accent",
            "hl": [
              {
                "text": "sống để ăn",
                "at": "l5:live to eat"
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
          "say": "Six a.m., Monday. Meet Dũng, from our furniture workshop, writing his goal on a sticky note.",
          "sub": "Sáu giờ sáng thứ Hai. Đây là Dũng, ở xưởng đồ gỗ, đang viết mục tiêu lên mẩu giấy dán."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I learn English for…",
          "sub": "“I learn English for…”",
          "pose": "think",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Cut! That next tiny word decides whether the sentence works.",
          "sub": "Cắt! Chữ nhỏ tiếp theo quyết định câu này đúng hay sai.",
          "keys": [
            "Chữ nhỏ tiếp theo"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In Vietnamese, it's just one word: để. In English? Hold that gap.",
          "sub": "Tiếng Việt chỉ một chữ “để”. Tiếng Anh thì sao? Nhớ chỗ trống này nhé."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "As the famous line goes: eat to live, don't live to eat.",
          "sub": "Như câu quen thuộc: “Ăn để sống, chứ không phải sống để ăn.”",
          "keys": [
            "Ăn để sống"
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
            "text": "Nói “để”: to hay for?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:why",
            "hl": [
              {
                "text": "to hay for?",
                "at": "l1:for"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Hành động → to + động từ",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:action",
            "hl": [
              {
                "text": "to + động từ",
                "at": "l2:verb"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Nhấn rõ → in order to",
            "x": 2028,
            "y": 250,
            "size": 44,
            "at": "l3:clearer"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Phủ định → so as not to",
            "x": 2028,
            "y": 325,
            "size": 44,
            "at": "l3:negative"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "Sự vật → for + danh từ",
            "x": 2028,
            "y": 410,
            "size": 50,
            "at": "l4:thing",
            "color": "accent"
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "for + động từ",
            "x": 2028,
            "y": 500,
            "size": 52,
            "at": "l4:never",
            "color": "coral"
          },
          {
            "id": "b-5x",
            "t": "strike",
            "over": "b-5",
            "at": "l4:bare"
          },
          {
            "id": "b-6",
            "t": "text",
            "text": "2 câu → 1 câu, chỉ bằng “to”",
            "x": 2868,
            "y": 500,
            "size": 46,
            "at": "l5:neatest",
            "color": "accent",
            "hl": [
              {
                "text": "chỉ bằng “to”",
                "at": "l5:to"
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
          "say": "So how do you say why: to, in order to, or for?",
          "sub": "Vậy nói mục đích “để làm gì”: to, in order to hay for?",
          "keys": [
            "“để làm gì”"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short answer. If the purpose is an action, use to plus a verb.",
          "sub": "Trả lời ngắn: mục đích là một hành động thì dùng to + động từ.",
          "keys": [
            "to + động từ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Want it clearer? In order to, so as to. Negative? In order not to, so as not to.",
          "sub": "Muốn nhấn rõ: in order to, so as to. Phủ định: in order not to, so as not to."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "If the purpose is a thing, for plus a noun can work. But never for plus a bare verb.",
          "sub": "Mục đích là một sự vật thì có thể dùng for + danh từ. Không viết for + động từ nguyên mẫu.",
          "keys": [
            "for + danh từ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "It's also the neatest way to join two sentences: one little word, to.",
          "sub": "Đây cũng là cách nối câu gọn nhất: hai câu thành một, chỉ bằng chữ to.",
          "keys": [
            "cách nối câu gọn nhất"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s02",
      "module": "BRK-08",
      "data": {
        "title": "Một tuần, một chữ “to”",
        "current": 0,
        "points": [
          {
            "label": "T2 6:00",
            "sub": "Mẩu giấy dán",
            "illus": "memo"
          },
          {
            "label": "T2 7:00",
            "sub": "Podcast trên xe buýt",
            "illus": "headphone"
          },
          {
            "label": "T3 22:00",
            "sub": "Hai báo thức",
            "illus": "alarm-clock"
          },
          {
            "label": "T4 17:30",
            "sub": "Cà phê với chị Sam",
            "illus": "hot-beverage"
          },
          {
            "label": "T6 9:00",
            "sub": "Ứng dụng mới",
            "illus": "mobile-phone"
          },
          {
            "label": "T2 sau",
            "sub": "Mẩu giấy mới",
            "illus": "check-mark-button"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One week, from a sticky note to a full sentence.",
          "sub": "Một tuần, từ mẩu giấy dán đến một câu trọn vẹn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "And one little word that keeps going missing.",
          "sub": "Và một chữ nhỏ cứ hay bị đánh rơi.",
          "keys": [
            "một chữ nhỏ"
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
            "at": "l3",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai 6:10 · To + động từ",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:ten"
          },
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
                  "id": "dung",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "memo"
              ]
            },
            "at": "l1:missing",
            "caption": "Thứ Hai · 6:10 · viết lại mẩu giấy",
            "icon": "memo"
          },
          {
            "id": "c-ok",
            "t": "text",
            "text": "I learn English",
            "x": 3996,
            "y": 165,
            "size": 50,
            "at": "l2:english",
            "color": "accent"
          },
          {
            "id": "c-ok2",
            "t": "text",
            "text": "to get a better job.",
            "x": 4036,
            "y": 230,
            "size": 50,
            "at": "l2:job",
            "color": "accent",
            "hl": [
              {
                "text": "to",
                "at": "l3:to"
              }
            ]
          },
          {
            "id": "c-why",
            "t": "text",
            "text": "trả lời câu hỏi “Why?”",
            "x": 3996,
            "y": 320,
            "size": 48,
            "at": "l3:why",
            "hl": [
              {
                "text": "“Why?”",
                "at": "l3:why"
              }
            ]
          },
          {
            "id": "c-e1",
            "t": "text",
            "text": "We eat at home to save money.",
            "x": 3996,
            "y": 400,
            "size": 40,
            "at": "l4:eat"
          },
          {
            "id": "c-e2",
            "t": "text",
            "text": "She runs to keep fit.",
            "x": 3996,
            "y": 460,
            "size": 40,
            "at": "l4:runs"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: ten minutes later. Here's the missing word.",
          "sub": "Chặng một: mười phút sau. Chữ còn thiếu đây rồi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I learn English to get a better job.",
          "sub": "“I learn English to get a better job.”",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "To, not for. British Council calls it the infinitive of purpose. It answers why.",
          "sub": "To, chứ không phải for. British Council gọi đây là cụm chỉ mục đích, trả lời câu hỏi “Why?”.",
          "keys": [
            "To, chứ không phải for"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Most of the time it's to plus a verb: We eat at home to save money. She runs to keep fit.",
          "sub": "Phần lớn trường hợp là to + động từ: “We eat at home to save money.” “She runs to keep fit.”"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p1"
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
          },
          {
            "at": "l2",
            "fit": [
              "c-v"
            ],
            "zoom": 1.3,
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
            "id": "c-q",
            "t": "text",
            "text": "Why do you have the app?",
            "x": 3996,
            "y": 540,
            "size": 40,
            "at": "l1:app",
            "color": "muted"
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "– To improve my grammar.",
            "x": 3996,
            "y": 600,
            "size": 40,
            "at": "l1:improve",
            "color": "accent",
            "hl": [
              {
                "text": "To improve",
                "at": "l1:improve"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Viết đoạn văn: gắn vào câu chính",
            "x": 4816,
            "y": 685,
            "size": 40,
            "at": "l3:paragraph",
            "color": "accent",
            "hl": [
              {
                "text": "gắn vào câu chính",
                "at": "l3:attach"
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
          "say": "A short answer can be just the to phrase. Why do you have the Grammar app? To improve my grammar.",
          "sub": "Trả lời ngắn câu Why, chỉ cần cụm to: “Why do you have the LearnEnglish Grammar app?” – “To improve my grammar.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Why do I get up so early? To study English!",
          "sub": "Sao mình dậy sớm thế? “To study English!”",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Natural when you talk. In a paragraph, attach it to the main sentence.",
          "sub": "Nói chuyện thì rất tự nhiên. Viết đoạn văn thì gắn cụm này vào câu chính.",
          "keys": [
            "gắn cụm này vào câu chính"
          ]
        }
      ],
      "ref": "p2"
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Hai 7:00 · Rút gọn",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:seven"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "bus",
                "headphone"
              ]
            },
            "at": "l1:bus",
            "caption": "Thứ Hai · 7:00 · podcast trên xe buýt",
            "icon": "headphone"
          },
          {
            "id": "d-o1",
            "t": "text",
            "text": "I get up early. I want to…",
            "x": 5964,
            "y": 170,
            "size": 42,
            "at": "l2:early",
            "color": "muted"
          },
          {
            "id": "d-o2",
            "t": "text",
            "text": "I listen to podcasts. I want to…",
            "x": 5964,
            "y": 235,
            "size": 40,
            "at": "l3:podcasts",
            "color": "muted"
          },
          {
            "id": "d-s1",
            "t": "text",
            "text": "① Tìm câu “I want to…”",
            "x": 5964,
            "y": 320,
            "size": 46,
            "at": "l4:step one",
            "color": "accent"
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "② Bỏ “I want”, giữ to + V",
            "x": 5964,
            "y": 395,
            "size": 46,
            "at": "l5:drop",
            "color": "accent",
            "hl": [
              {
                "text": "giữ to + V",
                "at": "l5:keep"
              }
            ]
          },
          {
            "id": "d-s3",
            "t": "text",
            "text": "③ Gắn vào câu hành động",
            "x": 5964,
            "y": 470,
            "size": 46,
            "at": "l5:attach",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: seven a.m., on the bus. Dũng drafts a few lines about his study habit.",
          "sub": "Chặng hai: bảy giờ sáng, trên xe buýt. Dũng nháp vài câu về thói quen học tiếng Anh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I get up early. I want to study English.",
          "sub": "“I get up early. I want to study English.”",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I listen to podcasts on the bus. I want to learn new words.",
          "sub": "“I listen to podcasts on the bus. I want to learn new words.”",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Step one: find the purpose sentences. Here, the two I want to.",
          "sub": "Bước một: tìm câu nói mục đích, chính là hai câu “I want to…”.",
          "keys": [
            "tìm câu nói mục đích"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Step two: drop I want, keep to plus the verb. Step three: attach it to the action.",
          "sub": "Bước hai: bỏ “I want”, giữ to + động từ. Bước ba: gắn vào câu hành động."
        }
      ],
      "ref": "p4,p3"
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
            "at": "l1",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
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
            "id": "d-f1",
            "t": "text",
            "text": "I get up early to study English,",
            "x": 5964,
            "y": 555,
            "size": 38,
            "at": "l1:early",
            "hl": [
              {
                "text": "to study",
                "at": "l1:study"
              }
            ]
          },
          {
            "id": "d-f2",
            "t": "text",
            "text": "and I listen… to learn new words.",
            "x": 5964,
            "y": 615,
            "size": 38,
            "at": "l2:learn",
            "hl": [
              {
                "text": "to learn",
                "at": "l2:learn"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "“I want to…” → to + V",
            "x": 6784,
            "y": 685,
            "size": 48,
            "at": "l4:shrinks",
            "color": "accent",
            "hl": [
              {
                "text": "to + V",
                "at": "l4:shrinks"
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
          "say": "I get up early to study English,",
          "sub": "“I get up early to study English,”",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "and I listen to podcasts on the bus to learn new words.",
          "sub": "“and I listen to podcasts on the bus to learn new words.”",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same at the gym: I go to the gym. I want to keep fit. Becomes: I go to the gym to keep fit.",
          "sub": "Như “I go to the gym. I want to keep fit.” thành “I go to the gym to keep fit.”"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No need for because I want. The I want to sentence shrinks to to plus a verb.",
          "sub": "Không cần thêm “because I want”. Câu “I want to…” rút gọn thành to + động từ.",
          "keys": [
            "rút gọn thành to + động từ"
          ]
        }
      ],
      "ref": "p3,p4,p5"
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
            "text": "③ Thứ Ba 22:00 · Phủ định",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:tuesday"
          },
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
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "worried"
                }
              ],
              "props": [
                "alarm-clock",
                "high-speed-train"
              ]
            },
            "at": "l1:thảo",
            "caption": "Thứ Ba · 22:00 · mai đi tàu sớm",
            "icon": "alarm-clock"
          },
          {
            "id": "e-o",
            "t": "text",
            "text": "Two alarms. I don't want to…",
            "x": 7932,
            "y": 170,
            "size": 38,
            "at": "l2:alarms",
            "color": "muted"
          },
          {
            "id": "e-io",
            "t": "text",
            "text": "in order to · so as to",
            "x": 7932,
            "y": 260,
            "size": 50,
            "at": "l4:order"
          },
          {
            "id": "e-sh",
            "t": "text",
            "text": "We left early to avoid the traffic.",
            "x": 7932,
            "y": 345,
            "size": 38,
            "at": "l5:shortest",
            "hl": [
              {
                "text": "to avoid",
                "at": "l5:shortest"
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
          "say": "Stop three: Tuesday, ten p.m. And this is Thảo, an accountant, catching an early train tomorrow.",
          "sub": "Chặng ba: mười giờ tối thứ Ba. Còn đây là Thảo, kế toán, sáng mai phải bắt chuyến tàu sớm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I set two alarms. I don't want to miss the train.",
          "sub": "“I set two alarms. I don't want to miss the train.”",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Joining these is trickier. The purpose is negative: not missing the train.",
          "sub": "Nối hai câu này khó hơn chút: mục đích là phủ định, tức không lỡ tàu.",
          "keys": [
            "mục đích là phủ định"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "British Council: in order to also gives a purpose. We left early in order to avoid the traffic.",
          "sub": "British Council: in order to cũng nêu mục đích. “We left early in order to avoid the traffic.”"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So as to works the same way. And the shortest: We left early to avoid the traffic.",
          "sub": "So as to dùng y như vậy. Gọn nhất vẫn là “We left early to avoid the traffic.”"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p8,p6"
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
            "at": "l3",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
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
            "id": "e-neg",
            "t": "text",
            "text": "so as not to",
            "x": 7932,
            "y": 440,
            "size": 50,
            "at": "l1:negative",
            "color": "accent",
            "hl": [
              {
                "text": "not to",
                "at": "l1:right before"
              }
            ]
          },
          {
            "id": "e-kid",
            "t": "text",
            "text": "…so as not to wake the children.",
            "x": 7932,
            "y": 520,
            "size": 38,
            "at": "l2:wake"
          },
          {
            "id": "e-th",
            "t": "text",
            "text": "…so as not to miss the train ✓",
            "x": 7932,
            "y": 600,
            "size": 34,
            "at": "l3:miss",
            "color": "accent"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Phủ định: not đứng trước to",
            "x": 8752,
            "y": 685,
            "size": 44,
            "at": "l4:negative",
            "color": "accent",
            "hl": [
              {
                "text": "not đứng trước to",
                "at": "l4:not"
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
          "say": "For a negative purpose: in order not to, so as not to. Not goes right before to.",
          "sub": "Mục đích phủ định: in order not to, so as not to. Not đứng ngay trước to.",
          "keys": [
            "Not đứng ngay trước to"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Their example: We spoke quietly so as not to wake the children.",
          "sub": "Ví dụ của trang: “We spoke quietly so as not to wake the children.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I set two alarms so as not to miss the train. Got it.",
          "sub": "“I set two alarms so as not to miss the train.” Got it.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The rule: a negative purpose takes in order not to, or so as not to.",
          "sub": "Rút ra: mục đích phủ định dùng in order not to hoặc so as not to.",
          "keys": [
            "in order not to hoặc so as not to"
          ]
        }
      ],
      "ref": "p7,p8,p9"
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
            "text": "④ Thứ Tư 17:30 · for + danh từ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:thirty"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "wave",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage",
                "glass-of-milk"
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
                }
              ]
            },
            "at": "l1:sam",
            "caption": "Thứ Tư · 17:30 · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "f-dr",
            "t": "text",
            "text": "…to the cafe for a drink.",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l2:drink",
            "hl": [
              {
                "text": "for a drink",
                "at": "l3:noun"
              }
            ]
          },
          {
            "id": "f-pub",
            "t": "text",
            "text": "…to the pub for a drink.",
            "x": 60,
            "y": 1340,
            "size": 40,
            "at": "l4:pub",
            "color": "muted"
          },
          {
            "id": "f-top",
            "t": "text",
            "text": "…to the top for the views.",
            "x": 60,
            "y": 1405,
            "size": 40,
            "at": "l4:views",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four: Wednesday, five thirty. Sam, a buyer from abroad, is in town.",
          "sub": "Chặng bốn: năm rưỡi chiều thứ Tư. Chị Sam, khách mua hàng nước ngoài, đang ở Hà Nội."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Long day! Let's go to the cafe for a drink.",
          "sub": "Một ngày dài! “Let's go to the cafe for a drink.”",
          "face": "happy",
          "pose": "wave"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For plus a noun: a drink. Test English says for plus a noun also gives a purpose.",
          "sub": "For + danh từ: “a drink”. Trang Test-English nói for + danh từ cũng chỉ mục đích.",
          "keys": [
            "for + danh từ cũng chỉ mục đích"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Its examples: Let's go to the pub for a drink. We climbed to the top for the views.",
          "sub": "Ví dụ của trang: “Let's go to the pub for a drink.” “We climbed to the top for the views.”"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-m1",
            "t": "text",
            "text": "…to buy some milk.",
            "x": 60,
            "y": 1500,
            "size": 46,
            "at": "l1:buy",
            "hl": [
              {
                "text": "to buy",
                "at": "l2:verb"
              }
            ]
          },
          {
            "id": "f-m2",
            "t": "text",
            "text": "…for some milk.",
            "x": 520,
            "y": 1500,
            "size": 46,
            "at": "l1:for some",
            "hl": [
              {
                "text": "for some milk",
                "at": "l2:noun"
              }
            ]
          },
          {
            "id": "f-both",
            "t": "text",
            "text": "Cả hai đều đúng",
            "x": 60,
            "y": 1580,
            "size": 48,
            "at": "l2:both",
            "color": "accent"
          },
          {
            "id": "f-de",
            "t": "text",
            "text": "“để” + động từ → to",
            "x": 60,
            "y": 1660,
            "size": 48,
            "at": "l4:verb",
            "color": "accent",
            "hl": [
              {
                "text": "→ to",
                "at": "l4:to"
              }
            ]
          },
          {
            "id": "f-de2",
            "t": "text",
            "text": "“để” + danh từ → for",
            "x": 60,
            "y": 1735,
            "size": 48,
            "at": "l4:noun",
            "hl": [
              {
                "text": "→ for",
                "at": "l4:for"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "for buy · for drink",
            "x": 880,
            "y": 1775,
            "size": 46,
            "at": "l3:for buy",
            "color": "coral"
          },
          {
            "id": "f-kx",
            "t": "strike",
            "over": "f-k",
            "at": "l3:end"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Test English compares: I went to the shop to buy some milk. I went to the shop for some milk.",
          "sub": "Test-English so sánh: “I went to the shop to buy some milk.” và “I went to the shop for some milk.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Both correct. After to, a verb. After for, a noun.",
          "sub": "Cả hai đều đúng. Sau to là động từ; sau for là danh từ.",
          "keys": [
            "Sau to là động từ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Vietnamese uses one word, để, for both. So we write for buy, for drink.",
          "sub": "Tiếng Việt dùng một chữ “để” cho cả hai, nên nhiều người viết “for buy”, “for drink”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The trick: a verb after để? Use to. A noun? For can work.",
          "sub": "Mẹo: sau “để” là động từ thì dùng to; là danh từ thì có thể dùng for.",
          "keys": [
            "là động từ thì dùng to"
          ]
        }
      ],
      "ref": "p11,p12,p13"
    },
    {
      "id": "s11",
      "module": "BRK-04",
      "data": {
        "title": "Sau chữ “để”",
        "wrong": "I went to the shop for buy milk",
        "right": "I went to the shop to buy milk",
        "wrongIllus": "cross-mark",
        "rightIllus": "glass-of-milk"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Not: for buy some milk.",
          "sub": "Không viết: “for buy some milk”."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "But: to buy some milk. Or simply: for some milk.",
          "sub": "Mà là: “to buy some milk”, hoặc gọn: “for some milk”.",
          "keys": [
            "to buy some milk"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "online",
        "label": "Thứ Năm · 19:00 · gọi chị Sam",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "phone"
          },
          {
            "id": "sam",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Cứ “để làm gì” là dịch for",
          "why": "Mục đích là một hành động thì mẫu đúng là to + động từ, không phải for + động từ hay for + V-ing.",
          "rule": "Mục đích là hành động: to + động từ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Why do you study at night, Dũng?",
          "sub": "Sao em học buổi tối thế, Dũng?",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I study at night for getting a better job.",
          "sub": "“I study at night for getting a better job.”",
          "pose": "phone",
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
          "say": "Getting a better job is an action. An action as a purpose takes to plus a verb.",
          "sub": "Có việc tốt hơn là một hành động. Mục đích là hành động thì dùng to + động từ.",
          "keys": [
            "to + động từ"
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
          "say": "I study at night to get a better job.",
          "sub": "“I study at night to get a better job.”",
          "phase": "redo",
          "face": "happy",
          "pose": "phone"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p15"
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
            "at": "l3",
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
            "text": "⑤ Thứ Năm 19:10 · for + V-ing?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:thursday"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "point",
                  "face": "happy"
                }
              ],
              "props": [
                "television"
              ]
            },
            "at": "l1:evening",
            "caption": "Thứ Năm · 19:10 · giờ thời sự",
            "icon": "television"
          },
          {
            "id": "g-w1",
            "t": "text",
            "text": "I work hard for improving…",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "l2:wrong",
            "color": "coral"
          },
          {
            "id": "g-w1x",
            "t": "strike",
            "over": "g-w1",
            "at": "l2:right"
          },
          {
            "id": "g-r1",
            "t": "text",
            "text": "I work hard to improve my English.",
            "x": 2028,
            "y": 1335,
            "size": 38,
            "at": "l2:right",
            "color": "accent",
            "hl": [
              {
                "text": "to improve",
                "at": "l2:improve"
              }
            ]
          },
          {
            "id": "g-tv",
            "t": "text",
            "text": "…TV on to watch the news.",
            "x": 2028,
            "y": 1420,
            "size": 38,
            "at": "l3:watch",
            "hl": [
              {
                "text": "to watch",
                "at": "l3:watch"
              }
            ]
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Hành động: to + V",
            "x": 2028,
            "y": 1520,
            "size": 56,
            "at": "l4:action",
            "color": "accent",
            "hl": [
              {
                "text": "to + V",
                "at": "l4:verb"
              }
            ]
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "không for + V · không for + V-ing",
            "x": 2028,
            "y": 1610,
            "size": 40,
            "at": "l4:not",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: Thursday evening. Test English names this exact mistake: for plus ing to say why.",
          "sub": "Chặng năm: tối thứ Năm. Test-English gọi tên đúng lỗi này: dùng for + V-ing để nói vì sao mình làm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wrong: I work hard for improving my English. Right: I work hard to improve my English.",
          "sub": "Sai: “I work hard for improving my English.” Đúng: “I work hard to improve my English.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "News time! Turn the TV on to watch the news. Not for watching!",
          "sub": "Giờ thời sự! “Turn the TV on to watch the news.” Không phải “for watching”!",
          "face": "happy",
          "pose": "point"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The purpose is an action? To plus a verb. Not for plus a verb, not for plus ing.",
          "sub": "Rút ra: mục đích là hành động thì dùng to + động từ, không dùng for + động từ hay for + V-ing.",
          "keys": [
            "to + động từ"
          ]
        }
      ],
      "ref": "p14,p16"
    },
    {
      "id": "s14",
      "module": "BRK-07",
      "data": {
        "question": "Có lúc for + V-ing lại đúng?",
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
          "say": "Is for plus ing ever right?",
          "sub": "Có lúc for + V-ing lại đúng?",
          "keys": [
            "lại đúng"
          ]
        }
      ],
      "ref": "p17"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Sáu 9:00 · Ứng dụng mới",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
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
                  "pose": "present",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "spiral-calendar"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:team",
            "caption": "Thứ Sáu · 9:00 · họp nhóm",
            "icon": "mobile-phone"
          },
          {
            "id": "h-b1",
            "t": "text",
            "text": "…this app for track our tasks.",
            "x": 3996,
            "y": 1260,
            "size": 38,
            "at": "l2:track",
            "color": "coral"
          },
          {
            "id": "h-b2",
            "t": "text",
            "text": "…every morning for knowing…",
            "x": 3996,
            "y": 1325,
            "size": 38,
            "at": "l2:knowing",
            "color": "coral"
          },
          {
            "id": "h-m1",
            "t": "text",
            "text": "used for cleaning cars ✓",
            "x": 3996,
            "y": 1420,
            "size": 42,
            "at": "l5:cleaning",
            "hl": [
              {
                "text": "for cleaning",
                "at": "l5:cleaning"
              }
            ]
          },
          {
            "id": "h-m2",
            "t": "text",
            "text": "used to clean cars ✓",
            "x": 3996,
            "y": 1490,
            "size": 42,
            "at": "l5:clean cars",
            "hl": [
              {
                "text": "to clean",
                "at": "l5:clean cars"
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
          "say": "Stop six: Friday, nine a.m. Thảo shows the team a new task app.",
          "sub": "Chặng sáu: chín giờ sáng thứ Sáu. Thảo giới thiệu ứng dụng mới cho cả nhóm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "We use this app for track our tasks. I check it every morning for knowing my deadlines.",
          "sub": "“We use this app for track our tasks. I check it every morning for knowing my deadlines.”",
          "pose": "present"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two sentences, two different cases. One is about the app, one is about Thảo.",
          "sub": "Hai câu, hai trường hợp khác nhau: một câu về ứng dụng, một câu về chính Thảo."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Test English: for plus ing is right when we say what an object is used for.",
          "sub": "Test-English: for + V-ing đúng khi nói công dụng của một đồ vật.",
          "keys": [
            "công dụng của một đồ vật"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "This machine is used for cleaning cars. Or: used to clean cars. Both fine.",
          "sub": "“This machine is used for cleaning cars.” hoặc “used to clean cars.” Cả hai đều đúng."
        }
      ],
      "ref": "p19,p17"
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
          },
          {
            "at": "l2",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-ask",
            "t": "text",
            "text": "Đồ vật đang được dùng? Hay người?",
            "x": 3996,
            "y": 1570,
            "size": 40,
            "at": "l1:thing",
            "hl": [
              {
                "text": "Hay người?",
                "at": "l1:person"
              }
            ]
          },
          {
            "id": "h-b1x",
            "t": "strike",
            "over": "h-b1",
            "at": "l2:track"
          },
          {
            "id": "h-b2x",
            "t": "strike",
            "over": "h-b2",
            "at": "l2:know"
          },
          {
            "id": "h-a1",
            "t": "text",
            "text": "to track / for tracking",
            "x": 3996,
            "y": 1650,
            "size": 42,
            "at": "l3:tracking",
            "color": "accent"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "Thảo: to know",
            "x": 4456,
            "y": 1650,
            "size": 42,
            "at": "l3:know",
            "color": "accent",
            "hl": [
              {
                "text": "to know",
                "at": "l3:know"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Đồ vật: for + V-ing / to",
            "x": 3996,
            "y": 1730,
            "size": 44,
            "at": "l4:things"
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "Người: to + V",
            "x": 4816,
            "y": 1775,
            "size": 52,
            "at": "l4:people",
            "color": "accent",
            "hl": [
              {
                "text": "to + V",
                "at": "l4:people"
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
          "say": "So ask: is the subject a thing being used, or a person doing something?",
          "sub": "Vậy hãy hỏi: chủ ngữ là đồ vật đang được dùng, hay một người đang hành động?",
          "keys": [
            "đồ vật đang được dùng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "We use this app to track our tasks. I check it every morning to know my deadlines.",
          "sub": "“We use this app to track our tasks. I check it every morning to know my deadlines.”",
          "face": "happy",
          "pose": "present"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The app takes to track or for tracking, never for track. Thảo's own purpose: to know.",
          "sub": "Ứng dụng: to track hoặc for tracking, không bao giờ for track. Mục đích của chính Thảo: to know."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Things: for plus ing, or to. People: to plus a verb.",
          "sub": "Rút ra: đồ vật dùng để làm gì thì for + V-ing hoặc to; người làm để làm gì thì to + động từ.",
          "keys": [
            "người làm để làm gì thì to + động từ"
          ]
        }
      ],
      "ref": "p18,p19,p20"
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
          },
          {
            "at": 150,
            "fit": "I",
            "ms": 900
          },
          {
            "at": "l1",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Thứ Bảy · Soát năm câu",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:saturday"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "notebook",
                "pencil"
              ]
            },
            "at": "l1:five",
            "caption": "Thứ Bảy · năm câu về thói quen",
            "icon": "notebook"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1250,
            "w": 40,
            "h": 40,
            "at": "l2:what for",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1234,
            "size": 50,
            "at": "l2:what for+500",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Trả lời “để làm gì?”",
            "x": 6026,
            "y": 1242,
            "size": 36,
            "at": "l2:what for+150"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1322,
            "w": 40,
            "h": 40,
            "at": "l2:verb",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1306,
            "size": 50,
            "at": "l2:verb+500",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Sau là động từ: to + V",
            "x": 6026,
            "y": 1314,
            "size": 36,
            "at": "l2:verb+150"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1394,
            "w": 40,
            "h": 40,
            "at": "l3:clearer",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1378,
            "size": 50,
            "at": "l3:clearer+500",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Nhấn rõ: in order to",
            "x": 6026,
            "y": 1386,
            "size": 36,
            "at": "l3:clearer+150"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1466,
            "w": 40,
            "h": 40,
            "at": "l3:negative",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1450,
            "size": 50,
            "at": "l3:negative+500",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Phủ định: so as not to",
            "x": 6026,
            "y": 1458,
            "size": 36,
            "at": "l3:negative+150"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1538,
            "w": 40,
            "h": 40,
            "at": "l4:noun",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1522,
            "size": 50,
            "at": "l4:noun+500",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Sau là danh từ: for",
            "x": 6026,
            "y": 1530,
            "size": 36,
            "at": "l4:noun+150"
          },
          {
            "id": "i-c5",
            "t": "box",
            "x": 5964,
            "y": 1610,
            "w": 40,
            "h": 40,
            "at": "l4:bare",
            "stroke": 5
          },
          {
            "id": "i-k5",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1594,
            "size": 50,
            "at": "l4:bare+500",
            "color": "accent"
          },
          {
            "id": "i-l5",
            "t": "text",
            "text": "Không for + động từ",
            "x": 6026,
            "y": 1602,
            "size": 36,
            "at": "l4:bare+150"
          },
          {
            "id": "i-c6",
            "t": "box",
            "x": 5964,
            "y": 1682,
            "w": 40,
            "h": 40,
            "at": "l4:person",
            "stroke": 5
          },
          {
            "id": "i-k6",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1666,
            "size": 50,
            "at": "l4:person+500",
            "color": "accent"
          },
          {
            "id": "i-l6",
            "t": "text",
            "text": "Người: không for + V-ing",
            "x": 6026,
            "y": 1674,
            "size": 36,
            "at": "l4:person+150"
          },
          {
            "id": "i-nx",
            "t": "text",
            "text": "Bài sau: enjoy, decide + ?",
            "x": 6784,
            "y": 1775,
            "size": 44,
            "at": "l5:enjoy",
            "color": "muted",
            "hl": [
              {
                "text": "enjoy, decide",
                "at": "l5:enjoy"
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
          "say": "Stop seven: Saturday. Dũng writes five sentences about his daily habits, then checks them.",
          "sub": "Chặng bảy: thứ Bảy. Dũng viết năm câu về thói quen hằng ngày, rồi soát lại.",
          "keys": [
            "soát lại"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Does it answer what for? A verb follows? To plus the verb.",
          "sub": "Ý này trả lời “để làm gì?” không? Phía sau là động từ: to + động từ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Want it clearer? In order to. Negative? So as not to.",
          "sub": "Muốn nhấn rõ: in order to. Phủ định: so as not to."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A noun follows? For can work. Never for plus a bare verb, and no for plus ing for a person.",
          "sub": "Phía sau là danh từ: có thể dùng for. Không viết for + động từ, không dùng for + V-ing cho mục đích của người."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "After to, always the base verb. But after enjoy or decide? Sometimes ing, sometimes to. That's next.",
          "sub": "Sau to chỉ mục đích, động từ luôn nguyên mẫu. Còn sau enjoy, decide thì lúc V-ing, lúc to V. Đó là bài tiếp theo."
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
            "text": "Thứ Hai sau · 6:00",
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "sunrise"
              ]
            },
            "at": "l1:six",
            "caption": "Thứ Hai sau · 6:00 · mẩu giấy mới",
            "icon": "memo"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "I get up early to study English.",
            "x": 7932,
            "y": 1260,
            "size": 40,
            "at": "l2:early",
            "hl": [
              {
                "text": "to study",
                "at": "l2:study"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "I learn English",
            "x": 7932,
            "y": 1330,
            "size": 40,
            "at": "l3:english"
          },
          {
            "id": "j-2b",
            "t": "text",
            "text": "to get a better job.",
            "x": 7972,
            "y": 1390,
            "size": 40,
            "at": "l3:job",
            "hl": [
              {
                "text": "to get",
                "at": "l3:get"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Ăn để sống” · eat to live",
            "x": 7932,
            "y": 1490,
            "size": 50,
            "at": "l4:eat",
            "color": "accent",
            "hl": [
              {
                "text": "eat to live",
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
          "say": "Monday again, six a.m. Same sticky note, same Dũng.",
          "sub": "Lại thứ Hai, sáu giờ sáng. Vẫn mẩu giấy ấy, vẫn Dũng ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I get up early to study English.",
          "sub": "“I get up early to study English.”",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "And I learn English to get a better job. No gap this time!",
          "sub": "“And I learn English to get a better job.” Lần này không còn chỗ trống!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Eat to live, don't live to eat. And now, learn to get a better job. To, every time.",
          "sub": "“Ăn để sống, chứ không phải sống để ăn.” Giờ thì học để có việc tốt hơn: lần nào cũng là to.",
          "keys": [
            "lần nào cũng là to"
          ]
        }
      ],
      "ref": "outro,p4"
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
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:verb",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:negative",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:noun",
            "fit": "F",
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
            "x": 4716,
            "y": 170,
            "at": "l1:verb+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8662,
            "y": 440,
            "at": "l2:negative+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 790,
            "y": 1660,
            "at": "l3:noun+900"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo; bài thi: kiểm lại với giáo viên.",
            "x": 7932,
            "y": 1812,
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
          "say": "So: a purpose that's an action takes to plus a verb.",
          "sub": "Tóm lại: mục đích là hành động thì dùng to + động từ.",
          "keys": [
            "to + động từ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Clearer: in order to. Negative: so as not to.",
          "sub": "Nhấn rõ: in order to. Phủ định: so as not to."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A noun after it? For can work. Never for plus a bare verb.",
          "sub": "Sau là danh từ thì có thể dùng for. Không bao giờ for + động từ nguyên mẫu.",
          "keys": [
            "Không bao giờ for + động từ nguyên mẫu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Try now: five sentences about your daily habits, each with to plus a verb. Like: I take the bus to save money.",
          "sub": "Làm ngay: viết năm câu về thói quen hằng ngày, mỗi câu một cụm to + động từ, như “I take the bus to save money.”",
          "keys": [
            "năm câu về thói quen hằng ngày"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p9,p13,p16"
    },
    {
      "id": "s20",
      "module": "QUIZ-01",
      "data": {
        "q": "What is the takeaway about for and to?",
        "options": [
          "A noun comes after for, while a verb comes after to",
          "For and to are the same, so you can choose either one",
          "Both words must be followed by a verb ending in ing"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "memo",
        "why": "Sau for là danh từ, sau to là động từ. Nhớ điều này sẽ tránh được lỗi for buy."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the takeaway about for and to?",
          "sub": "Điều rút ra về for và to là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A noun comes after for, while a verb comes after to.",
          "sub": "Sau for là danh từ; sau to là động từ."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[24]"
    },
    {
      "id": "s21",
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
          "say": "Write your five to sentences today. Then try the forty questions below.",
          "sub": "Hôm nay viết năm câu có to. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi grammar-adult-linking-sentences, bài 2) dựng theo hạt nhân (#136) + biến thể #144: Đét trái + bảng 10 ô theo MỘT TUẦN (Thứ Hai 6:00 Dũng viết “I learn English for…” — câu bị cắt (HOOK-22), nói trọn “to get a better job” ở chặng ① → 7:00 xe buýt Dũng làm mẫu ba bước (p4) → Thứ Ba 22:00 Thảo hai báo thức “so as not to” (p8) → Thứ Tư 17:30 cà phê với Sam “for a drink” (p10–p12) → Thứ Năm 19:00 “Khoan đã!” for getting (p15) → 19:10 Test-English for + V-ing → Thứ Sáu 9:00 ứng dụng mới, đồ vật/người (p19) → Thứ Bảy soát bảy điều → Thứ Hai sau 6:00 mẩu giấy mới, khép vòng). Nhân vật: Dũng, Thảo, Sam — w145/_series/grammar-adult-linking-sentences.md. Ngắt nhịp: BRK-08 tuần, BRK-04 for buy/to buy, DLG-01, BRK-07 rehook. Câu mở/khép: “Ăn để sống, chứ không phải sống để ăn” (eat to live). Câu đố questions[24].",
  "loop": {
    "open": "s00",
    "close": "s18"
  }
};
