// connected-speech-weak-forms--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "connected-speech-weak-forms--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "beginner-listening-learners",
    "slug": "connected-speech-weak-forms",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Vì sao người bản xứ nói 'nuốt chữ' và tai mình bỏ sót?",
    "series": "Nghe được tiếng Anh từ chậm đến nhanh — cho người mới học bị 'đứng hình' khi nghe"
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
            "text": "“geton”",
            "x": 60,
            "y": 90,
            "size": 150,
            "at": "l2:geton",
            "color": "accent"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "A. một từ lạ hoắc?",
            "x": 70,
            "y": 330,
            "size": 56,
            "at": "l1:strange"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "B. hai từ quen dính nhau?",
            "x": 70,
            "y": 420,
            "size": 56,
            "at": "l1:two words"
          },
          {
            "id": "a-1x",
            "t": "strike",
            "over": "a-1",
            "at": "l3:No"
          },
          {
            "id": "a-2r",
            "t": "ring",
            "around": [
              "a-2"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l3:glued"
          },
          {
            "id": "a-ans",
            "t": "text",
            "text": "= Get on",
            "x": 560,
            "y": 120,
            "size": 96,
            "at": "l3:get on",
            "hl": [
              {
                "text": "Get on",
                "at": "l3:get on"
              }
            ]
          },
          {
            "id": "a-src",
            "t": "text",
            "text": "Ví dụ: British Council TeachingEnglish, Voices — Connected speech",
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
          "say": "Quick guess. Is this one strange word, or two words you already know?",
          "sub": "Đoán nhanh: đây là một từ lạ, hay hai từ bạn đã biết?",
          "keys": [
            "Đoán nhanh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Listen. Geton. A brand new word, right?",
          "sub": "Nghe nhé: “geton”. Một từ mới tinh, đúng không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No. It's get on. Two tiny words you know, glued together.",
          "sub": "Không. Đó là “get on”. Hai từ nhỏ bạn biết thừa, dính vào nhau.",
          "keys": [
            "dính vào nhau"
          ]
        }
      ],
      "beats": {
        "after": 300
      },
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
            "at": "l4",
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
              "set": "online",
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
                  "at": "l3"
                }
              ],
              "props": [
                "laptop"
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
            "caption": "Thứ Hai 9:00 · họp trực tuyến",
            "icon": "laptop"
          },
          {
            "id": "a-snow",
            "t": "text",
            "text": "“snow joke”??",
            "x": 60,
            "y": 520,
            "size": 52,
            "at": "l5:Snow",
            "color": "coral"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nghe như vịt nghe sấm”",
            "x": 60,
            "y": 620,
            "size": 54,
            "at": "l6:duck",
            "color": "accent",
            "hl": [
              {
                "text": "vịt nghe sấm",
                "at": "l6:thunder"
              }
            ]
          },
          {
            "id": "a-duck",
            "t": "illus",
            "name": "duck",
            "x": 700,
            "y": 600,
            "size": 80,
            "at": "l6:duck"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Thảo, an import-export officer in Hà Nội.",
          "sub": "Đây là Thảo, nhân viên xuất nhập khẩu ở Hà Nội."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "English emails? She reads them faster than her morning coffee cools.",
          "sub": "Email tiếng Anh? Thảo đọc xong trước khi cà phê sáng kịp nguội.",
          "keys": [
            "đọc xong"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Monday, nine a.m. An online meeting with Sam, a partner abroad.",
          "sub": "Thứ Hai, chín giờ sáng. Họp trực tuyến với Sam, đối tác ở nước ngoài.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "sam",
          "say": "Right, let's get on with it. This deadline? It's no joke.",
          "sub": "Nào, mình bắt đầu luôn nhé. Hạn chót này? Không đùa được đâu.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Geton? Snow joke? Who is talking about snow?",
          "sub": "“Geton”? “Snow joke”? Ai đang nói chuyện tuyết vậy?",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents have a phrase for this: listening like a duck hearing thunder.",
          "sub": "Ông bà gọi cảnh này là: “Nghe như vịt nghe sấm.”",
          "keys": [
            "Nghe như vịt nghe sấm"
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
            "text": "Vì sao như “nuốt chữ”?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:swallow",
            "hl": [
              {
                "text": "nuốt chữ",
                "at": "l1:swallow"
              }
            ]
          },
          {
            "id": "b-def",
            "t": "text",
            "text": "Âm đổi theo từ đứng quanh",
            "x": 2028,
            "y": 165,
            "size": 50,
            "at": "l2:changes",
            "hl": [
              {
                "text": "từ đứng quanh",
                "at": "l2:around"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "1. Âm nối · linking",
            "x": 2028,
            "y": 255,
            "size": 50,
            "at": "l3:linking"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "2. Âm chèn · intrusion",
            "x": 2028,
            "y": 330,
            "size": 50,
            "at": "l3:intrusion"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "3. Lược âm · elision",
            "x": 2028,
            "y": 405,
            "size": 50,
            "at": "l3:elision"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "4. Âm yếu · weak forms",
            "x": 2028,
            "y": 480,
            "size": 50,
            "at": "l3:weak forms"
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: thiếu từ, nói ẩu",
            "x": 2928,
            "y": 255,
            "size": 50,
            "at": "l4:missing",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l4:Four"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: 4 kiểu có quy luật",
            "x": 2928,
            "y": 340,
            "size": 54,
            "at": "l4:Four",
            "color": "accent",
            "hl": [
              {
                "text": "có quy luật",
                "at": "l4:rules"
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
          "say": "So why do native speakers seem to swallow words?",
          "sub": "Vậy vì sao người bản xứ như đang “nuốt chữ”?",
          "keys": [
            "nuốt chữ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "TeachingEnglish says: in connected speech, a word's sound changes with the words around it.",
          "sub": "TeachingEnglish nói: trong lời nói liền mạch, âm của một từ thay đổi theo những từ đứng quanh nó.",
          "keys": [
            "thay đổi theo những từ đứng quanh"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Four things happen: linking, intrusion, elision and weak forms.",
          "sub": "Có bốn hiện tượng: âm nối, âm chèn, lược âm và âm yếu.",
          "keys": [
            "bốn hiện tượng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not a missing word, not careless talk. Four patterns, with rules.",
          "sub": "Không phải thiếu từ, cũng chẳng phải nói ẩu. Mà là bốn kiểu, có quy luật hẳn hoi.",
          "keys": [
            "có quy luật"
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
            "id": "b-pr",
            "t": "text",
            "text": "Không đọc “như in trên giấy”",
            "x": 2028,
            "y": 590,
            "size": 46,
            "at": "l1:printed",
            "hl": [
              {
                "text": "như in trên giấy",
                "at": "l1:printed"
              }
            ]
          },
          {
            "id": "b-cl",
            "t": "text",
            "text": "Nói rõ ràng > nói giống bản xứ",
            "x": 2928,
            "y": 440,
            "size": 48,
            "at": "l2:clear",
            "color": "accent",
            "hl": [
              {
                "text": "rõ ràng",
                "at": "l2:clear"
              }
            ]
          },
          {
            "id": "b-ord",
            "t": "text",
            "text": "Học để NGHE trước, nói sau",
            "x": 2928,
            "y": 530,
            "size": 44,
            "at": "l3:hear"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: British Council Voices — Pop songs and connected speech",
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
          "say": "Voices adds: fluent speakers don't say words the way they're printed.",
          "sub": "Voices thêm: người nói lưu loát không đọc từ “như in trên giấy”.",
          "keys": [
            "như in trên giấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And for learners, being clear matters more than sounding native.",
          "sub": "Còn với người học, nói rõ ràng quan trọng hơn cố nói giống người bản xứ.",
          "keys": [
            "nói rõ ràng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So we learn these first to hear them. Copying them comes later.",
          "sub": "Nên ta học những kiểu này trước hết để nghe ra. Nói theo là chuyện sau."
        }
      ],
      "ref": "p2"
    },
    {
      "id": "s04",
      "module": "BRK-08",
      "data": {
        "title": "Một tuần của Thảo",
        "points": [
          {
            "label": "Thứ Hai",
            "sub": "Âm nối",
            "illus": "link"
          },
          {
            "label": "Thứ Ba",
            "sub": "Âm chèn",
            "illus": "bridge-at-night"
          },
          {
            "label": "Thứ Tư",
            "sub": "Lược âm",
            "illus": "scissors"
          },
          {
            "label": "Thứ Năm",
            "sub": "Âm yếu",
            "illus": "bus"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Nghe rồi nhại",
            "illus": "studio-microphone"
          },
          {
            "label": "Thứ Bảy",
            "sub": "Bài nghe thử",
            "illus": "headphone"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One week, six stops.",
          "sub": "Một tuần, sáu chặng.",
          "keys": [
            "Một tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Headphones on. Let's follow Thảo.",
          "sub": "Đeo tai nghe vào. Theo Thảo nào."
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
            "text": "① Thứ Hai 11:00 · Âm nối",
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
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "laptop",
                "headphone"
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
            "at": "l1:replays",
            "caption": "Thứ Hai 11:00 · nghe lại bản ghi",
            "icon": "headphone"
          },
          {
            "id": "c-r",
            "t": "text",
            "text": "phụ âm cuối + nguyên âm đầu",
            "x": 3996,
            "y": 165,
            "size": 46,
            "at": "l3:consonant",
            "hl": [
              {
                "text": "phụ âm cuối",
                "at": "l3:consonant"
              }
            ]
          },
          {
            "id": "c-r2",
            "t": "text",
            "text": "→ hai từ nắm tay nhau",
            "x": 4036,
            "y": 235,
            "size": 46,
            "at": "l3:hands",
            "color": "accent"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Get on → “geton”",
            "x": 3996,
            "y": 320,
            "size": 52,
            "at": "l4:Get on"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Not at all → “notatall”",
            "x": 3996,
            "y": 400,
            "size": 52,
            "at": "l4:Not at all"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "get out · put on · come out",
            "x": 3996,
            "y": 480,
            "size": 44,
            "at": "l5:get out",
            "color": "muted"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "big opportunity · woke up",
            "x": 3996,
            "y": 545,
            "size": 44,
            "at": "l5:opportunity",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, Monday, eleven a.m. Thảo replays the meeting recording.",
          "sub": "Chặng một, mười một giờ trưa thứ Hai. Thảo mở lại bản ghi cuộc họp."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Geton, again. I know get. I know on. So where did they go?",
          "sub": "Lại “geton”. Get mình biết. On mình biết. Thế chúng trốn đâu rồi?",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "That's linking. A word ends in a consonant, the next starts with a vowel, and they hold hands.",
          "sub": "Đó là âm nối. Từ trước tận cùng bằng phụ âm, từ sau mở đầu bằng nguyên âm, thế là hai đứa nắm tay nhau.",
          "keys": [
            "âm nối"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Get on sounds like geton. Not at all sounds like notatall.",
          "sub": "Get on nghe thành “geton”. Not at all nghe thành “notatall”."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Phrasal verbs too: get out, put on, come out. Voices adds big opportunity and woke up.",
          "sub": "Cụm động từ cũng thế: get out, put on, come out. Voices thêm big opportunity và woke up."
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
          },
          {
            "at": "l2",
            "fit": [
              "c-sj",
              "c-b"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l4",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-sj",
            "t": "text",
            "text": "It's no joke → “snow joke”",
            "x": 3996,
            "y": 615,
            "size": 48,
            "at": "l1:snow",
            "color": "coral",
            "hl": [
              {
                "text": "snow",
                "at": "l2:slides"
              }
            ]
          },
          {
            "id": "c-b",
            "t": "text",
            "text": "Ranh giới từ dịch đi",
            "x": 3996,
            "y": 690,
            "size": 44,
            "at": "l3:borders",
            "hl": [
              {
                "text": "Ranh giới",
                "at": "l3:borders"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Từ lạ? Tách thành 2 từ",
            "x": 4836,
            "y": 690,
            "size": 44,
            "at": "l4:splitting",
            "color": "accent",
            "hl": [
              {
                "text": "2 từ",
                "at": "l4:familiar"
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
          "say": "Now the snow joke. Why did Thảo hear snow?",
          "sub": "Giờ đến vụ “snow joke”. Vì sao Thảo nghe ra tuyết?",
          "keys": [
            "snow joke"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The s of it's slides onto no, and the start of it's is said very lightly.",
          "sub": "Âm s cuối của it's trượt sang no, còn phần đầu của it's đọc rất nhẹ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Her ear builds a familiar syllable: snow. No word was missing. The word borders moved.",
          "sub": "Tai ghép lại thành âm quen là snow. Chẳng thiếu từ nào, chỉ là ranh giới giữa các từ đã dịch đi.",
          "keys": [
            "ranh giới giữa các từ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: hear a strange new word? Try splitting it into two familiar ones.",
          "sub": "Rút ra: nghe thấy “từ lạ”, hãy thử tách nó thành hai từ quen dính vào nhau.",
          "keys": [
            "tách nó thành hai từ quen"
          ]
        }
      ],
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
            "at": "l3",
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
            "text": "② Thứ Ba 20:00 · Âm chèn",
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
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "think",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "left"
                }
              ],
              "props": [
                "open-book"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:Lan",
            "caption": "Thứ Ba 20:00 · ở nhà Thảo",
            "icon": "open-book"
          },
          {
            "id": "d-q",
            "t": "text",
            "text": "go up → “go-wup”?",
            "x": 5964,
            "y": 165,
            "size": 56,
            "at": "l3:wup",
            "color": "coral"
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "nguyên âm + nguyên âm",
            "x": 5964,
            "y": 255,
            "size": 46,
            "at": "l4:vowel"
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "→ chen một âm nhẹ làm cầu",
            "x": 6004,
            "y": 325,
            "size": 46,
            "at": "l4:bridge",
            "color": "accent",
            "hl": [
              {
                "text": "làm cầu",
                "at": "l4:bridge"
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
          "say": "Stop two, Tuesday, eight p.m., at Thảo's place.",
          "sub": "Chặng hai, tám giờ tối thứ Ba, ở nhà Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Lan, Thảo's cousin, a second-year student who lives with her.",
          "sub": "Đây là Lan, em họ Thảo, sinh viên năm hai đang ở nhờ nhà chị.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "My teacher said go up, but I heard go wup. Where did that w come from?",
          "sub": "Cô giáo nói “go up”, mà em nghe ra “go-wup”. Chữ w ở đâu chui ra vậy?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Intrusion. One word ends in a vowel, the next starts with one, so a light sound slips in, like a bridge.",
          "sub": "Âm chèn. Từ trước tận cùng bằng nguyên âm, từ sau cũng mở bằng nguyên âm, nên một âm nhẹ chen vào làm cầu.",
          "keys": [
            "Âm chèn"
          ]
        }
      ],
      "ref": "p6"
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
            "id": "d-w",
            "t": "text",
            "text": "/w/: go up · please do it",
            "x": 5964,
            "y": 420,
            "size": 50,
            "at": "l1:please",
            "hl": [
              {
                "text": "/w/",
                "at": "l1:w"
              }
            ]
          },
          {
            "id": "d-j",
            "t": "text",
            "text": "/j/: I agree · they are here",
            "x": 5964,
            "y": 500,
            "size": 50,
            "at": "l2:agree",
            "hl": [
              {
                "text": "/j/",
                "at": "l2:y sound"
              }
            ]
          },
          {
            "id": "d-rr",
            "t": "text",
            "text": "/r/: law and order",
            "x": 5964,
            "y": 580,
            "size": 50,
            "at": "l3:law",
            "hl": [
              {
                "text": "/r/",
                "at": "l3:r"
              }
            ]
          },
          {
            "id": "d-rr2",
            "t": "text",
            "text": "the media are to blame",
            "x": 6024,
            "y": 645,
            "size": 36,
            "at": "l3:media",
            "color": "muted"
          },
          {
            "id": "d-v2",
            "t": "text",
            "text": "Voices: go ahead · I ate",
            "x": 6024,
            "y": 705,
            "size": 36,
            "at": "l4:ahead",
            "color": "muted"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Âm thừa? → âm chèn",
            "x": 6804,
            "y": 690,
            "size": 44,
            "at": "l4:extra sound",
            "color": "accent",
            "hl": [
              {
                "text": "âm chèn",
                "at": "l4:intrusion"
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
          "say": "Go up and please do it both get a light w.",
          "sub": "Go up và please do it đều có một âm /w/ nhẹ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A y sound, almost an i, appears in I agree and they are here.",
          "sub": "Âm /j/, gần như “i”, xuất hiện trong I agree và they are here."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "An r slips into law and order, and the media are to blame.",
          "sub": "Âm /r/ chen vào law and order, và the media are to blame."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Voices adds go ahead and I ate. Hear an extra sound between two words? Probably intrusion.",
          "sub": "Voices thêm go ahead và I ate. Nghe như có âm thừa giữa hai từ? Rất có thể là âm chèn.",
          "keys": [
            "âm chèn"
          ]
        }
      ],
      "ref": "p6,p7"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Âm thêm được vào, thì có bay mất được không?",
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
          "say": "If sounds can be added, can they also disappear?",
          "sub": "Âm thêm được vào, thì có bay mất được không?"
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s10",
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
            "text": "③ Thứ Tư · Lược âm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three",
            "hl": [
              {
                "text": "Lược âm",
                "at": "l2:Elision"
              }
            ]
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Nguyên âm không nhấn rơi trước:",
            "x": 7932,
            "y": 165,
            "size": 46,
            "at": "l2:Unstressed"
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "interest · similar · different · tonight",
            "x": 7972,
            "y": 235,
            "size": 44,
            "at": "l2:interest",
            "color": "muted"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "/t/, /d/ giữa cụm phụ âm:",
            "x": 7932,
            "y": 320,
            "size": 46,
            "at": "l3:between"
          },
          {
            "id": "e-2b",
            "t": "text",
            "text": "Christmas · sandwich · must be",
            "x": 7972,
            "y": 390,
            "size": 44,
            "at": "l3:Christmas",
            "color": "muted"
          },
          {
            "id": "e-2c",
            "t": "text",
            "text": "you and me · the first three",
            "x": 7972,
            "y": 455,
            "size": 44,
            "at": "l4:first three",
            "color": "muted"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "/h/ của từ nhỏ: tell him → “tellim”",
            "x": 7932,
            "y": 540,
            "size": 48,
            "at": "l5:tell him",
            "color": "coral",
            "hl": [
              {
                "text": "“tellim”",
                "at": "l5:tellim"
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
          "say": "Stop three, Wednesday. Yes, sounds also vanish.",
          "sub": "Chặng ba, thứ Tư. Đúng vậy, âm cũng biết bay mất."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Elision. Unstressed vowels go first: interest, similar, different, tonight.",
          "sub": "Lược âm. Nguyên âm không nhấn rơi trước tiên: interest, similar, different, tonight.",
          "keys": [
            "Lược âm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "T and d between consonants drop too: Christmas, sandwich, must be.",
          "sub": "Âm /t/, /d/ kẹt giữa cụm phụ âm cũng hay rơi: Christmas, sandwich, must be."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Also you and me, the first three, and we stopped for lunch.",
          "sub": "Cả you and me, the first three, và we stopped for lunch."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Even the h of small words: you shouldn't have, tell him. Tell him sounds like tellim.",
          "sub": "Cả âm /h/ của từ nhỏ: you shouldn't have, tell him. Tell him nghe gần như “tellim”.",
          "keys": [
            "tellim"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Thứ Tư 18:00 · bàn làm việc",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Bỏ âm là nói ẩu, nói sai",
          "why": "TeachingEnglish: lược âm là đặc điểm tự nhiên, giúp câu dễ nói; tiếng nói khác chữ viết.",
          "rule": "Nghe âm thật, đừng dựa vào chính tả"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "New plan: like the dictionary. In-ter-est. Christ-mas!",
          "sub": "Kế hoạch mới: nói như từ điển. In-ter-est. Christ-mas!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "People who drop sounds are just being careless.",
          "sub": "Ai bỏ âm là nói ẩu thôi.",
          "pose": "cross",
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
          "say": "TeachingEnglish calls elision natural. It makes phrases easier to say. Speech is not spelling.",
          "sub": "TeachingEnglish coi lược âm là tự nhiên, giúp câu dễ nói hơn. Tiếng nói đâu phải chính tả.",
          "keys": [
            "Tiếng nói đâu phải chính tả"
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
          "say": "Tell him, tellim. Fine, I'll learn the spoken form too.",
          "sub": "Tell him, “tellim”. Được rồi, mình học cả dạng nói nữa.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Right. Hear only dictionaries, understand only dictionaries.",
          "sub": "Đúng. Chỉ nghe giọng từ điển thì chỉ hiểu được… từ điển.",
          "phase": "redo",
          "keys": [
            "chỉ hiểu được… từ điển"
          ]
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
      "id": "s12",
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
            "id": "e-k",
            "t": "text",
            "text": "Lược âm = quy luật, không phải lỗi",
            "x": 7932,
            "y": 630,
            "size": 54,
            "at": "l1:rule",
            "color": "accent",
            "hl": [
              {
                "text": "quy luật",
                "at": "l1:rule"
              }
            ]
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "→ tai quen dạng NÓI",
            "x": 7972,
            "y": 705,
            "size": 40,
            "at": "l2:spoken"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: elision is a natural rule, not a mistake.",
          "sub": "Rút ra: lược âm là quy luật tự nhiên, không phải lỗi.",
          "keys": [
            "quy luật tự nhiên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Your ear needs the spoken form, not only the written one.",
          "sub": "Tai cần quen với dạng nói, chứ không chỉ dạng chữ."
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
            "text": "④ Thứ Năm 7:30 · Âm yếu",
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
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "surprised"
                }
              ],
              "props": [
                "bus",
                "headphone"
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
            "at": "l1:bus",
            "caption": "Thứ Năm 7:30 · trên xe buýt",
            "icon": "bus"
          },
          {
            "id": "f-s",
            "t": "text",
            "text": "schwa /ə/ = “ơ” nhẹ",
            "x": 60,
            "y": 1255,
            "size": 56,
            "at": "l3:schwa",
            "color": "accent",
            "hl": [
              {
                "text": "/ə/",
                "at": "l3:uh"
              }
            ]
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "giới từ: from · to · of",
            "x": 60,
            "y": 1360,
            "size": 46,
            "at": "l4:from"
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "trợ động từ: have · are",
            "x": 60,
            "y": 1430,
            "size": 46,
            "at": "l4:have"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "đại từ: it · us",
            "x": 60,
            "y": 1500,
            "size": 46,
            "at": "l4:us"
          },
          {
            "id": "f-h",
            "t": "text",
            "text": "→ khó nghe",
            "x": 60,
            "y": 1580,
            "size": 52,
            "at": "l4:hard",
            "color": "coral",
            "hl": [
              {
                "text": "khó nghe",
                "at": "l4:hard"
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
          "say": "Stop four, Thursday, seven thirty, on the bus. Thảo plays a short dialogue.",
          "sub": "Chặng bốn, bảy rưỡi sáng thứ Năm, trên xe buýt. Thảo bật một đoạn hội thoại ngắn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm gonna visit my aunt? Where did going to go?",
          "sub": "“I'm gonna visit my aunt”? Thế going to đi đâu mất rồi?",
          "face": "surprised"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Meet the schwa: a tiny, lazy uh sound. Voices says it plays a huge role.",
          "sub": "Xin giới thiệu âm schwa: tiếng “ơ” bé xíu, lười biếng. Voices nói nó đóng vai rất lớn.",
          "keys": [
            "âm schwa"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "It becomes the vowel of small words: from, to, of, have, are, it, us. Voices admits they're hard to hear.",
          "sub": "Nó thành nguyên âm của các từ nhỏ: from, to, of, have, are, it, us. Voices thừa nhận: những từ này khó nghe.",
          "keys": [
            "khó nghe"
          ]
        }
      ],
      "ref": "p12"
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
          }
        ],
        "items": [
          {
            "id": "f-fr",
            "t": "text",
            "text": "from France → /frəm/",
            "x": 60,
            "y": 1660,
            "size": 42,
            "at": "l1:France"
          },
          {
            "id": "f-hv",
            "t": "text",
            "text": "should have → /əv/",
            "x": 60,
            "y": 1720,
            "size": 42,
            "at": "l2:studied"
          },
          {
            "id": "f-dc",
            "t": "text",
            "text": "don't you → “donchu”",
            "x": 60,
            "y": 1780,
            "size": 42,
            "at": "l3:donchu",
            "hl": [
              {
                "text": "“donchu”",
                "at": "l3:donchu"
              }
            ]
          },
          {
            "id": "f-gn",
            "t": "text",
            "text": "going to → /ˈgənə/",
            "x": 900,
            "y": 1780,
            "size": 44,
            "at": "l4:gonna",
            "color": "accent",
            "hl": [
              {
                "text": "/ˈgənə/",
                "at": "l4:gonna"
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
          "say": "From in he's visiting from France shrinks to a quick, weak frum.",
          "sub": "From trong he's visiting from France co lại thành /frəm/ nhẹ và nhanh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Have in you should have studied more is just uv.",
          "sub": "Have trong you should have studied more chỉ còn /əv/."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "There's assimilation too: don't you sounds almost like donchu.",
          "sub": "Còn có đồng hoá: don't you nghe gần như “donchu”.",
          "keys": [
            "đồng hoá"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And going to can become gonna. Just two light syllables. The speaker said it all.",
          "sub": "Còn going to có thể thành /ˈgənə/, chỉ hai âm tiết nhẹ. Người nói đã nói đủ cả rồi.",
          "keys": [
            "hai âm tiết nhẹ"
          ]
        }
      ],
      "ref": "p13,p14"
    },
    {
      "id": "s15",
      "module": "BRK-04",
      "data": {
        "title": "Nghe từ nhỏ thế nào?",
        "wrong": "Chờ nghe rõ từng từ nhỏ",
        "right": "Bắt từ mang nghĩa, từ nhỏ tự lấp vào",
        "wrongIllus": "hourglass-done",
        "rightIllus": "bullseye"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Waiting to hear every small word clearly?",
          "sub": "Chờ nghe rõ từng từ nhỏ?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Catch the meaning words. Small ones fill in.",
          "sub": "Bắt từ mang nghĩa, từ nhỏ tự lấp vào.",
          "keys": [
            "từ mang nghĩa"
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
            "text": "⑤ Thứ Sáu 21:00 · Nghe rồi nhại",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-c",
            "t": "text",
            "text": "Đếm âm: “You must tell him.”",
            "x": 2028,
            "y": 1255,
            "size": 50,
            "at": "l2:Count",
            "hl": [
              {
                "text": "Đếm âm",
                "at": "l2:Count"
              }
            ]
          },
          {
            "id": "g-c2",
            "t": "text",
            "text": "→ so với cái tai nghe thật",
            "x": 2068,
            "y": 1330,
            "size": 44,
            "at": "l2:compare"
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "the longest river → /t/ rơi",
            "x": 2028,
            "y": 1410,
            "size": 44,
            "at": "l3:longest",
            "color": "muted"
          },
          {
            "id": "g-na",
            "t": "text",
            "text": "Nation: nhại phim ngắn nhiều lần",
            "x": 2928,
            "y": 1255,
            "size": 44,
            "at": "l4:imitating"
          },
          {
            "id": "g-na2",
            "t": "text",
            "text": "+ nghe nhiều → phát âm lên",
            "x": 2968,
            "y": 1325,
            "size": 42,
            "at": "l4:listening",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, Friday, nine p.m. Rules are nice. Now train the ear.",
          "sub": "Chặng năm, chín giờ tối thứ Sáu. Biết luật rồi, giờ luyện tai."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "TeachingEnglish's drill: count the sounds in you must tell him, then compare with what you hear.",
          "sub": "Bài tập của TeachingEnglish: đếm số âm trong “You must tell him.”, rồi so với cái mình thực sự nghe được.",
          "keys": [
            "đếm số âm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Or the Nile is the longest river in the world. Listen for the t falling in longest.",
          "sub": "Hoặc câu The Nile is the longest river in the world: để ý âm /t/ rơi trong longest."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Nation notes that imitating short film clips again and again helps pronunciation. So does lots of listening.",
          "sub": "Nation ghi nhận: nhại lại nhiều lần các đoạn phim ngắn giúp phát âm; được nghe nhiều cũng vậy."
        }
      ],
      "ref": "p16"
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
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2968,
            "y": 1410,
            "w": 640,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "studio-microphone",
                "headphone"
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
            "at": "l1:picks",
            "caption": "Thứ Sáu 21:00 · một câu, bốn bước",
            "icon": "studio-microphone"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1490,
            "w": 44,
            "h": 44,
            "at": "l2:guess",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1472,
            "size": 56,
            "at": "l2:guess+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "(1) nhìn câu, đoán chỗ đổi",
            "x": 2093,
            "y": 1482,
            "size": 40,
            "at": "l2:guess+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1562,
            "w": 44,
            "h": 44,
            "at": "l3:three",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1544,
            "size": 56,
            "at": "l3:three+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "(2) nghe 3 lượt, 2 chỗ",
            "x": 2093,
            "y": 1554,
            "size": 40,
            "at": "l3:three+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1634,
            "w": 44,
            "h": 44,
            "at": "l4:rhythm",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1616,
            "size": 56,
            "at": "l4:rhythm+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "(3) nói theo, đúng nhịp",
            "x": 2093,
            "y": 1626,
            "size": 40,
            "at": "l4:rhythm+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1706,
            "w": 44,
            "h": 44,
            "at": "l4:record",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1688,
            "size": 56,
            "at": "l4:record+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "(4) ghi âm, so bản gốc",
            "x": 2093,
            "y": 1698,
            "size": 40,
            "at": "l4:record+200"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Nhại kỹ > nghe lướt",
            "x": 2028,
            "y": 1790,
            "size": 50,
            "at": "l5:skimmed",
            "color": "accent",
            "hl": [
              {
                "text": "Nhại kỹ",
                "at": "l5:imitated"
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
          "say": "Thảo picks one line from a recording: you must tell him.",
          "sub": "Thảo chọn một câu trong bài nghe: “You must tell him.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Step one, I guess. The t in must may drop, and the h in him.",
          "sub": "Bước một, đoán trước. Âm /t/ trong must có thể rơi, cả /h/ trong him.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Step two, I listen three times, only for those two spots.",
          "sub": "Bước hai, nghe ba lần, chỉ để ý hai chỗ ấy.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Step three, say it with the same rhythm. Step four, record yourself and compare.",
          "sub": "Bước ba, nói theo đúng nhịp người nói. Bước bốn, ghi âm giọng mình rồi so với bản gốc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Only a few lines a day. One short line imitated well beats a long one skimmed.",
          "sub": "Mỗi ngày chỉ vài câu. Một câu ngắn nhại kỹ dạy tai nhiều hơn một bài dài nghe lướt.",
          "keys": [
            "nhại kỹ"
          ]
        }
      ],
      "ref": "p18,p19"
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
            "at": "l2",
            "fit": [
              "g-v2"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l3",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2968,
            "y": 1410,
            "w": 640,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "wave",
                  "face": "happy"
                }
              ],
              "props": [
                "musical-notes"
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
            "at": "l1:kitchen",
            "caption": "Cùng lúc ấy · trong bếp",
            "icon": "musical-notes"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meanwhile, Lan is singing in the kitchen. Loudly.",
          "sub": "Trong lúc ấy, Lan đang hát trong bếp. Hát to."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Songs repeat a lot, so I can hear where words join, and sing along!",
          "sub": "Bài hát lặp đi lặp lại, nên em nghe ra chỗ các từ nối nhau, rồi hát theo!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Voices agrees: songs repeat, so you notice the links and practise them as you sing.",
          "sub": "Voices cũng nói vậy: lời hát lặp nhiều, dịp tốt để để ý chỗ nối và luyện nói liền khi hát theo.",
          "keys": [
            "luyện nói liền"
          ]
        }
      ],
      "ref": "p17"
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
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Bảy 9:00 · Bài nghe thử",
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
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "pencil"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:practice",
            "caption": "Thứ Bảy 9:00 · đề nghe thử",
            "icon": "memo"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Gạch chân từ khoá:",
            "x": 3996,
            "y": 1255,
            "size": 50,
            "at": "l2:underline",
            "hl": [
              {
                "text": "từ khoá",
                "at": "l2:key words"
              }
            ]
          },
          {
            "id": "h-1b",
            "t": "text",
            "text": "danh từ, động từ",
            "x": 4036,
            "y": 1325,
            "size": 46,
            "at": "l2:nouns"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Đoán trước: tên? số? nơi chốn?",
            "x": 3996,
            "y": 1410,
            "size": 46,
            "at": "l3:predict"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Từ nhỏ yếu → bắt từ mang nghĩa",
            "x": 3996,
            "y": 1495,
            "size": 46,
            "at": "l4:weak",
            "color": "accent",
            "hl": [
              {
                "text": "từ mang nghĩa",
                "at": "l4:meaning words"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "“Từ lạ” → nối âm? lược âm?",
            "x": 3996,
            "y": 1580,
            "size": 46,
            "at": "l5:linking",
            "color": "coral"
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Bài sau: transcript — chưa biết từ hay chưa quen dạng nói?",
            "x": 3996,
            "y": 1780,
            "size": 32,
            "at": "l6:transcripts",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Cambridge English — Tips for listening",
            "x": 3996,
            "y": 1690,
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
          "say": "Stop six, Saturday morning: a practice listening test.",
          "sub": "Chặng sáu, sáng thứ Bảy: làm một đề nghe thử."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Cambridge English tips: underline key words in the questions, usually nouns and verbs.",
          "sub": "Mẹo của Cambridge English: gạch chân từ khoá trong câu hỏi, thường là danh từ và động từ.",
          "keys": [
            "gạch chân từ khoá"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then predict the answer. A name? A number? A place?",
          "sub": "Rồi đoán trước đáp án: một cái tên? một con số? một nơi chốn?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Small words are often weak, so meaning words are easier to catch. Aim there.",
          "sub": "Từ nhỏ thường bị đọc yếu, nên từ mang nghĩa dễ nghe hơn. Nhắm vào đó.",
          "keys": [
            "từ mang nghĩa"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "A strange word? First I ask: is it linking, or a dropped sound?",
          "sub": "Gặp “từ lạ”? Mình hỏi trước: nối âm, hay lược âm?",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "That habit helps with transcripts next time: an unknown word, or just an unfamiliar spoken form?",
          "sub": "Thói quen ấy còn giúp khi luyện transcript ở bài sau: chỗ hụt là chưa biết từ, hay chưa quen dạng nói?"
        }
      ],
      "ref": "p20,p21"
    },
    {
      "id": "s20",
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
            "text": "Thứ Hai sau · 9:00",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Next Monday"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
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
                "laptop"
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
                  "shot": "E-SHOT-05",
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
            "at": "l1:meeting",
            "caption": "Thứ Hai sau 9:00 · cùng cuộc họp",
            "icon": "laptop"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "get on with it ✓",
            "x": 5964,
            "y": 1270,
            "size": 54,
            "at": "l3:Get on",
            "color": "accent"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "it's no joke ✓",
            "x": 5964,
            "y": 1360,
            "size": 54,
            "at": "l3:no joke",
            "color": "accent"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Vịt” đã nghe ra sấm nói gì",
            "x": 5964,
            "y": 1510,
            "size": 54,
            "at": "l4:thunder",
            "color": "accent",
            "hl": [
              {
                "text": "nghe ra",
                "at": "l4:hears"
              }
            ]
          },
          {
            "id": "i-duck",
            "t": "illus",
            "name": "duck",
            "x": 5964,
            "y": 1600,
            "size": 90,
            "at": "l4:duck"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Next Monday, nine a.m. Same meeting, same Sam, same Thảo.",
          "sub": "Thứ Hai tuần sau, chín giờ sáng. Vẫn cuộc họp ấy, vẫn Sam, vẫn Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Okay, let's get on with it. The new deadline is no joke either.",
          "sub": "Nào, mình bắt đầu nhé. Hạn chót mới cũng không đùa được đâu.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Get on with it, and it's no joke. Got it. I'll send the files by Friday.",
          "sub": "Get on with it, it's no joke. Rõ rồi. Thứ Sáu em gửi đủ hồ sơ.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Listening like a duck hearing thunder? This duck now hears every word in the thunder.",
          "sub": "“Nghe như vịt nghe sấm”? Giờ chú vịt này nghe ra sấm nói gì rồi.",
          "keys": [
            "nghe ra sấm nói gì"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l5",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: 4 kiểu, có quy luật",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:patterns"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Làm ngay: 3 câu ngắn A1",
            "x": 7932,
            "y": 1290,
            "size": 50,
            "at": "l5:three",
            "hl": [
              {
                "text": "3 câu ngắn",
                "at": "l5:three"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "đoán chỗ đổi → nghe → nhại",
            "x": 7972,
            "y": 1370,
            "size": 46,
            "at": "l5:guess"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: nghe kỹ với transcript",
            "x": 7932,
            "y": 1470,
            "size": 50,
            "at": "l6:Next",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 170,
            "at": "l2:join"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9372,
            "y": 40,
            "at": "l3:vanish"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2728,
            "y": 1260,
            "at": "l4:Imitate"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; nội dung trang nguồn có thể thay đổi — điều chỉnh theo trình độ và thời gian của mình. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l6:end",
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
          "say": "So, swallowed words are really four patterns, and they follow rules.",
          "sub": "Tóm lại, “nuốt chữ” thật ra là bốn kiểu, có quy luật cả.",
          "keys": [
            "bốn kiểu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Linking and intrusion join words together.",
          "sub": "Âm nối và âm chèn làm các từ dính vào nhau."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Elision and weak forms make sounds vanish or shrink.",
          "sub": "Lược âm và âm yếu làm âm bay mất hoặc co lại."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Imitate short lines, and listen for the meaning words.",
          "sub": "Nhại câu ngắn, và bắt từ mang nghĩa."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: take three short lines from an A1 listening. Guess the changes, listen, then copy them.",
          "sub": "Làm ngay: chọn ba câu ngắn trong một bài nghe A1, đoán chỗ sẽ đổi, nghe rồi nhại lại.",
          "keys": [
            "ba câu ngắn"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: listening closely with a transcript.",
          "sub": "Bài tiếp theo: nghe kỹ với transcript.",
          "keys": [
            "transcript"
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
        "q": "You hear a strange new word in a fast sentence, what should you try first?",
        "options": [
          "Look it up at once in a dictionary of rare and technical words",
          "Ignore the whole sentence because it is too difficult for you",
          "Try splitting it into two familiar words that have been joined together"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "ear",
        "why": "Bài chốt: hãy thử tách “từ lạ” thành hai từ quen dính vào nhau. Nhiều khi đó chỉ là âm nối."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You hear a strange new word in a fast sentence, what should you try first?",
          "sub": "Bạn nghe thấy một “từ lạ” trong câu nói nhanh, nên thử gì trước?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Try splitting it into two familiar words that have been joined together.",
          "sub": "Thử tách nó thành hai từ quen đã dính vào nhau."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Remember geton? It was get on all along.",
          "sub": "Nhớ “geton” chứ? Hoá ra vẫn là get on."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[8]"
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
          "say": "Three short lines, guessed, heard and copied. Then try the forty questions below.",
          "sub": "Ba câu ngắn: đoán, nghe, nhại. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-21: câu hỏi để đoán sai (“geton” = một từ lạ hay hai từ quen?) rồi lật “Get on”. Dòng thời gian: MỘT TUẦN của Thảo (Thứ Hai 9:00 họp trực tuyến với Sam “get on… it's no joke” → T2 11:00 âm nối + “snow joke” → T3 20:00 Lan hỏi âm chèn → T4 lược âm + “Khoan đã!” đọc như từ điển → T5 7:30 xe buýt âm yếu → T6 21:00 bốn bước nhại câu, Lan hát → T7 9:00 đề nghe thử → Thứ Hai sau 9:00 khép vòng). Nhân vật: Thảo (gộp Thảo p10 + Quân p18 trong bài), Sam, Lan (em họ, p6–p7, p17). Ca dao: “Nghe như vịt nghe sấm” → “vịt đã nghe ra sấm”. Cảnh ngắt nhịp: BRK-08 (một tuần), BRK-07 (rehook), BRK-04 (Sai/Đúng nghe từ nhỏ). Câu đố questions[8].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
