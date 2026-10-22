// am-is-are-to-be--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "am-is-are-to-be--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "grammar-zero-beginners",
    "slug": "am-is-are-to-be",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Khi nào dùng am, is, are và vì sao 'I am hungry' không thể bỏ 'am'?",
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
            "at": "l4",
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
            "y": 150,
            "w": 780,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "wave",
                  "face": "sad"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "oncoming-taxi",
                "steaming-bowl"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1",
            "caption": "Thứ Sáu 17:30 · đầu ngõ",
            "icon": "oncoming-taxi"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "“Sam! I",
            "x": 60,
            "y": 160,
            "size": 96,
            "at": "l3:Sam",
            "color": "coral"
          },
          {
            "id": "a-gap",
            "t": "box",
            "x": 420,
            "y": 160,
            "w": 230,
            "h": 110,
            "at": "l3:end",
            "stroke": 6,
            "color": "accent"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "hungry.”",
            "x": 60,
            "y": 300,
            "size": 96,
            "at": "l4:Hungry",
            "color": "coral"
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Thiếu một chữ. Chữ gì?",
            "x": 60,
            "y": 460,
            "size": 56,
            "at": "l4:missing",
            "hl": [
              {
                "text": "Chữ gì?",
                "at": "l4:Which"
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
          "say": "Meet Dũng, a ride-hailing driver, just off work. Friday, five thirty p.m.",
          "sub": "Đây là Dũng, tài xế xe công nghệ, vừa chạy xe về. Năm rưỡi chiều thứ Sáu.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "His sister's new neighbour, Sam, smiles at him. And there's food in the air.",
          "sub": "Sam, hàng xóm mới của chị gái Dũng, mỉm cười chào. Và trong ngõ đang thơm mùi đồ ăn.",
          "keys": [
            "Sam"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Sam! I...",
          "sub": "Sam! I…",
          "face": "sad",
          "pose": "wave"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Hungry, yes. But one word is missing. Which one?",
          "sub": "Đói thì rõ rồi. Nhưng thiếu một chữ. Chữ gì?",
          "keys": [
            "thiếu một chữ"
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
            "text": "am, is, are: khi nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:are",
            "hl": [
              {
                "text": "khi nào",
                "at": "l1:are"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "Vì sao không bỏ được am?",
            "x": 2028,
            "y": 170,
            "size": 54,
            "at": "l1:drop",
            "color": "coral",
            "hl": [
              {
                "text": "không bỏ",
                "at": "l1:drop"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "Liên hoan chào hàng xóm mới",
            "x": 2028,
            "y": 270,
            "size": 50,
            "at": "l2:party",
            "hl": [
              {
                "text": "Liên hoan",
                "at": "l2:party"
              }
            ]
          },
          {
            "id": "b-p",
            "t": "illus",
            "name": "party-popper",
            "x": 2728,
            "y": 250,
            "size": 100,
            "at": "l2:party"
          },
          {
            "id": "b-ca",
            "t": "text",
            "text": "“Lời nói chẳng mất tiền mua”",
            "x": 2028,
            "y": 400,
            "size": 54,
            "at": "l3:words",
            "color": "accent",
            "hl": [
              {
                "text": "chẳng mất tiền mua",
                "at": "l3:cost"
              }
            ]
          },
          {
            "id": "b-ca2",
            "t": "text",
            "text": "“Lựa lời mà nói…”",
            "x": 2028,
            "y": 480,
            "size": 50,
            "at": "l3:choose",
            "color": "accent"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "→ chọn đúng am, is, are",
            "x": 2068,
            "y": 580,
            "size": 52,
            "at": "l4:right",
            "hl": [
              {
                "text": "am, is, are",
                "at": "l4:am"
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
          "say": "So, when do we use am, is, are? And why can't we drop am?",
          "sub": "Vậy khi nào dùng am, is, are? Và vì sao không bỏ được am?",
          "keys": [
            "không bỏ được am"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tonight there's a little party in the alley, to welcome Sam.",
          "sub": "Tối nay trong ngõ có bữa liên hoan nhỏ chào Sam.",
          "keys": [
            "liên hoan nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: words cost nothing, so choose them to please each other.",
          "sub": "Ông bà dặn: “Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau.”",
          "keys": [
            "Lời nói chẳng mất tiền mua"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "In English, choosing words starts with picking the right am, is, are.",
          "sub": "Trong tiếng Anh, lựa lời bắt đầu từ chọn đúng am, is, are."
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
            "text": "① 17:45 · To be là gì?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-0",
            "t": "text",
            "text": "Hiện tại: am · is · are",
            "x": 3996,
            "y": 165,
            "size": 54,
            "at": "l1:three",
            "hl": [
              {
                "text": "am · is · are",
                "at": "l1:are"
              }
            ]
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "My mother is a teacher.",
            "x": 3996,
            "y": 255,
            "size": 46,
            "at": "l3:teacher",
            "hl": [
              {
                "text": "is",
                "at": "l3:mother is"
              }
            ]
          },
          {
            "id": "c-1b",
            "t": "text",
            "text": "nghề",
            "x": 4576,
            "y": 262,
            "size": 38,
            "at": "l3:job",
            "color": "muted"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "This soup is very tasty.",
            "x": 3996,
            "y": 330,
            "size": 46,
            "at": "l3:tasty"
          },
          {
            "id": "c-2b",
            "t": "text",
            "text": "tính chất",
            "x": 4576,
            "y": 337,
            "size": 38,
            "at": "l3:quality",
            "color": "muted"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "The flowers are on the table.",
            "x": 3996,
            "y": 405,
            "size": 46,
            "at": "l4:flowers",
            "hl": [
              {
                "text": "are",
                "at": "l4:are"
              }
            ]
          },
          {
            "id": "c-3b",
            "t": "text",
            "text": "nơi chốn",
            "x": 4656,
            "y": 412,
            "size": 38,
            "at": "l4:place",
            "color": "muted"
          },
          {
            "id": "c-link",
            "t": "text",
            "text": "be = động từ nối",
            "x": 4836,
            "y": 170,
            "size": 60,
            "at": "l2:linking",
            "color": "accent",
            "hl": [
              {
                "text": "động từ nối",
                "at": "l2:linking verb"
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
          "say": "Stop one, five forty-five. To be has three forms in the present: am, is, are.",
          "sub": "Chặng một, sáu giờ kém mười lăm. To be ở hiện tại có ba dạng: am, is, are.",
          "keys": [
            "ba dạng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "British Council calls be a linking verb. It links the subject to information about it.",
          "sub": "British Council gọi be là động từ nối: nó nối chủ ngữ với thông tin về chủ ngữ.",
          "keys": [
            "động từ nối"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A job: my mother is a teacher. A quality: this soup is very tasty.",
          "sub": "Nghề nghiệp: My mother is a teacher. Tính chất: This soup is very tasty."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Or a place: the flowers are on the table.",
          "sub": "Hay nơi chốn: The flowers are on the table."
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
            "fit": "C",
            "move": "cut"
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
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4836,
            "y": 290,
            "w": 720,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "thumb",
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
                "steaming-bowl"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
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
            "at": "l1",
            "caption": "17:45 · Dũng nói lại",
            "icon": "steaming-bowl"
          },
          {
            "id": "c-he",
            "t": "text",
            "text": "“Nó đói” → He hungry",
            "x": 3996,
            "y": 500,
            "size": 46,
            "at": "l1:He hungry",
            "color": "coral"
          },
          {
            "id": "c-hex",
            "t": "strike",
            "over": "c-he",
            "at": "l2:He is hungry"
          },
          {
            "id": "c-he2",
            "t": "text",
            "text": "He is hungry.",
            "x": 3996,
            "y": 575,
            "size": 56,
            "at": "l2:He is hungry",
            "color": "accent",
            "hl": [
              {
                "text": "is",
                "at": "l2:is hungry"
              }
            ]
          },
          {
            "id": "c-am",
            "t": "text",
            "text": "I am hungry!",
            "x": 3996,
            "y": 665,
            "size": 60,
            "at": "l3:I am hungry",
            "color": "accent",
            "hl": [
              {
                "text": "am",
                "at": "l3:am hungry"
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
          "say": "Vietnamese says nó đói, with nothing in between. So learners say he hungry.",
          "sub": "Tiếng Việt nói “Nó đói”, không có chữ nào ở giữa, nên người học hay nói “He hungry”.",
          "keys": [
            "He hungry"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The TEFL Academy notes this mistake. Correct: he is hungry. Dũng, again!",
          "sub": "The TEFL Academy ghi nhận lỗi này. Câu đúng: He is hungry. Dũng, nói lại nào!",
          "keys": [
            "He is hungry"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Sam! I am hungry!",
          "sub": "Sam! I am hungry!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The missing word was am. Small as a nail, but it holds two planks together.",
          "sub": "Chữ bị thiếu là am. Nhỏ như cây đinh, nhưng giữ hai tấm ván dính vào nhau.",
          "keys": [
            "Nhỏ như cây đinh"
          ]
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
            "text": "② 18:00 · Không có “là”",
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
            "w": 780,
            "data": {
              "set": "kitchen",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "worried"
                }
              ],
              "props": [
                "cooking",
                "steaming-bowl"
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
            "caption": "18:00 · bếp nhà Thảo",
            "icon": "cooking"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "“We very busy!”",
            "x": 5964,
            "y": 170,
            "size": 54,
            "at": "l2:very busy",
            "color": "coral"
          },
          {
            "id": "d-1x",
            "t": "strike",
            "over": "d-1",
            "at": "l4:We're"
          },
          {
            "id": "d-my",
            "t": "text",
            "text": "am, is, are = “là”?",
            "x": 5964,
            "y": 260,
            "size": 54,
            "at": "l3:only",
            "color": "muted"
          },
          {
            "id": "d-myx",
            "t": "strike",
            "over": "d-my",
            "at": "l4:many"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, six p.m. Meet Thảo, Dũng's sister, a housewife, cooking for the whole alley.",
          "sub": "Chặng hai, sáu giờ tối. Đây là Thảo, chị gái Dũng, nội trợ, đang nấu cho cả ngõ.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Sam, sorry! We very busy!",
          "sub": "Sam ơi, xin lỗi nhé! We very busy!",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A common myth: am, is, are only mean là. No là in Vietnamese, so no to be.",
          "sub": "Hiểu lầm thường gặp: am, is, are chỉ có nghĩa là “là”. Tiếng Việt không có “là” thì bỏ luôn.",
          "keys": [
            "Hiểu lầm thường gặp"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But to be sits in many sentences without là. We're very busy.",
          "sub": "Nhưng to be có mặt trong rất nhiều câu không có chữ “là”: We're very busy.",
          "keys": [
            "không có chữ “là”"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s05",
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
            "id": "d-2",
            "t": "text",
            "text": "I am hungry. · We're very busy.",
            "x": 5964,
            "y": 360,
            "size": 44,
            "at": "l1:adjective",
            "hl": [
              {
                "text": "am",
                "at": "l1:I am"
              }
            ]
          },
          {
            "id": "d-2b",
            "t": "text",
            "text": "trước tính từ",
            "x": 5964,
            "y": 425,
            "size": 36,
            "at": "l1:adjective+300",
            "color": "muted"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "I'm not at work.",
            "x": 5964,
            "y": 490,
            "size": 44,
            "at": "l2:at work",
            "hl": [
              {
                "text": "I'm",
                "at": "l2:I'm"
              }
            ]
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "They're on holiday in Italy.",
            "x": 5964,
            "y": 555,
            "size": 44,
            "at": "l2:Italy"
          },
          {
            "id": "d-3b",
            "t": "text",
            "text": "trước nơi chốn",
            "x": 5964,
            "y": 620,
            "size": 36,
            "at": "l2:place",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Before an adjective: I am hungry. We're very busy.",
          "sub": "Trước tính từ: I am hungry. We're very busy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Before a place: I'm not at work. They're on holiday in Italy.",
          "sub": "Trước nơi chốn: I'm not at work. They're on holiday in Italy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No là in the Vietnamese. But the English still needs am, is or are.",
          "sub": "Câu tiếng Việt không có “là”, nhưng câu tiếng Anh vẫn phải có am, is hoặc are."
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s06",
      "module": "BRK-10",
      "data": {
        "quote": "Không có chữ “là” vẫn phải có am, is, are",
        "mark": "vẫn phải có",
        "by": "Rút ra cho Thảo",
        "illus": "light-bulb"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "No là? You still need am, is, are.",
          "sub": "Không có chữ “là” vẫn phải có am, is, are.",
          "keys": [
            "vẫn phải có"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Takeaway for Thảo.",
          "sub": "Rút ra cho Thảo."
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
            "text": "③ 18:30 · Ai đi với chữ nào",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "I → am",
            "x": 7932,
            "y": 165,
            "size": 56,
            "at": "l2:I goes",
            "hl": [
              {
                "text": "am",
                "at": "l2:am"
              }
            ]
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "he, she, it → is",
            "x": 7932,
            "y": 235,
            "size": 56,
            "at": "l3:He",
            "hl": [
              {
                "text": "is",
                "at": "l3:is"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "you, we, they → are",
            "x": 7932,
            "y": 305,
            "size": 56,
            "at": "l4:You",
            "hl": [
              {
                "text": "are",
                "at": "l4:are"
              }
            ]
          },
          {
            "id": "e-ex",
            "t": "text",
            "text": "I am a student.",
            "x": 7932,
            "y": 390,
            "size": 40,
            "at": "l5:student"
          },
          {
            "id": "e-ex2",
            "t": "text",
            "text": "She is busy. · They are late.",
            "x": 7932,
            "y": 445,
            "size": 40,
            "at": "l5:busy"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, six thirty. The table is very short.",
          "sub": "Chặng ba, sáu rưỡi. Bảng chia rất ngắn.",
          "keys": [
            "Bảng chia rất ngắn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "I goes with am.",
          "sub": "I đi với am."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "He, she, it go with is.",
          "sub": "He, she, it đi với is."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "You, we, they go with are.",
          "sub": "You, we, they đi với are."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "I am a student. She is busy. They are late.",
          "sub": "I am a student. She is busy. They are late."
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s08",
      "module": "BRK-11",
      "data": {
        "title": "Bảng chia to be",
        "items": [
          "I → am",
          "he, she, it → is",
          "you, we, they → are"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three: you, we, they, are.",
          "sub": "Ba: you, we, they đi với are."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two: he, she, it, is.",
          "sub": "Hai: he, she, it đi với is."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "One: I am.",
          "sub": "Một: I am."
        }
      ],
      "ref": "p5"
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
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 8772,
            "y": 150,
            "w": 720,
            "data": {
              "set": "street",
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
                  "id": "thao",
                  "side": "right",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "woman-health-worker",
                "steaming-bowl"
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
            "caption": "18:40 · trước nhà Thảo",
            "icon": "woman-health-worker"
          },
          {
            "id": "e-s1",
            "t": "text",
            "text": "1. my mum",
            "x": 7932,
            "y": 530,
            "size": 44,
            "at": "l4:my mum"
          },
          {
            "id": "e-s2",
            "t": "text",
            "text": "2. → she",
            "x": 8172,
            "y": 530,
            "size": 44,
            "at": "l5:she",
            "color": "coral"
          },
          {
            "id": "e-s3",
            "t": "text",
            "text": "3. → is",
            "x": 8392,
            "y": 530,
            "size": 44,
            "at": "l5:is"
          },
          {
            "id": "e-s4",
            "t": "text",
            "text": "4. a doctor",
            "x": 7932,
            "y": 600,
            "size": 44,
            "at": "l6:a doctor"
          },
          {
            "id": "e-out",
            "t": "text",
            "text": "My mum's a doctor.",
            "x": 7932,
            "y": 670,
            "size": 54,
            "at": "l7:mum's",
            "color": "accent",
            "hl": [
              {
                "text": "'s",
                "at": "l7:mum's"
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
          "say": "Then a real test for Thảo, at the party table.",
          "sub": "Rồi một bài thi thật cho Thảo, ngay bàn liên hoan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Thảo, what does your mum do?",
          "sub": "Thảo, mẹ chị làm nghề gì?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Er... my mum... doctor... how do I say it?",
          "sub": "Ơ… mẹ tôi… bác sĩ… nói sao nhỉ?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Step one, the subject: my mum.",
          "sub": "Bước một, tìm chủ ngữ: mẹ tôi là my mum."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Step two, turn it into a pronoun: a woman, so she. Step three, she takes is.",
          "sub": "Bước hai, đổi ra đại từ: mẹ là phụ nữ, tức she. Bước ba, she đi với is."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Step four, the job, with a in front: a doctor.",
          "sub": "Bước bốn, thêm nghề, có chữ a phía trước: a doctor."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "thao",
          "say": "My mum is a doctor! Or fast: my mum's a doctor. Got it!",
          "sub": "My mum is a doctor! Nói nhanh: My mum's a doctor. Got it!",
          "face": "happy"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Same with my children: they, so are. Takeaway: turn the subject into I, he, she, they.",
          "sub": "My children cũng vậy: they, nên dùng are. Rút ra: đổi chủ ngữ ra I, he, she, they là biết ngay.",
          "keys": [
            "đổi chủ ngữ ra I, he, she, they"
          ]
        }
      ],
      "ref": "p6,p7,p8"
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
            "text": "④ 19:00 · Viết tắt, phủ định",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 900,
            "y": 1240,
            "w": 720,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "bin",
                  "side": "center",
                  "enter": "pop",
                  "at": "l3",
                  "pose": "cross",
                  "face": "worried"
                }
              ],
              "props": [
                "broccoli",
                "steaming-bowl"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "close",
                  "on": "bin",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l3",
            "caption": "19:00 · bàn liên hoan",
            "icon": "broccoli"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "I'm · you're · he's · she's",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l1:I'm",
            "hl": [
              {
                "text": "I'm",
                "at": "l1:I'm"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "it's · we're · they're",
            "x": 60,
            "y": 1330,
            "size": 46,
            "at": "l2:it's"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "phổ biến hơn khi nói",
            "x": 60,
            "y": 1400,
            "size": 40,
            "at": "l2:speech",
            "color": "muted"
          },
          {
            "id": "f-am",
            "t": "text",
            "text": "“I amn't hungry!”",
            "x": 60,
            "y": 1490,
            "size": 52,
            "at": "l4:amn't",
            "color": "coral"
          },
          {
            "id": "f-amx",
            "t": "strike",
            "over": "f-am",
            "at": "l5:no"
          },
          {
            "id": "f-ok",
            "t": "text",
            "text": "I'm not hungry.",
            "x": 60,
            "y": 1570,
            "size": 56,
            "at": "l5:I'm not",
            "color": "accent",
            "hl": [
              {
                "text": "I'm not",
                "at": "l5:I'm not"
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
          "say": "Stop four, seven p.m. In speech, people shorten: I'm, you're, he's, she's...",
          "sub": "Chặng bốn, bảy giờ tối. Khi nói, người bản xứ hay rút gọn: I'm, you're, he's, she's…"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "...it's, we're, they're. British Council notes these are more common in speech.",
          "sub": "…it's, we're, they're. British Council ghi chú: dạng rút gọn phổ biến hơn trong văn nói.",
          "keys": [
            "phổ biến hơn trong văn nói"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And this is Bé Bin, Thảo's son, facing a bowl of vegetables.",
          "sub": "Còn đây là Bé Bin, con trai Thảo, đang đối mặt bát rau.",
          "keys": [
            "Bé Bin"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "bin",
          "say": "Mum, I amn't hungry!",
          "sub": "Mẹ ơi, I amn't hungry!",
          "face": "worried",
          "pose": "cross"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Nice try, but there's no amn't. Only I'm not. I'm not hungry.",
          "sub": "Cố lắm, nhưng không có dạng “I amn't”. Chỉ có I'm not: I'm not hungry.",
          "keys": [
            "Chỉ có I'm not"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l3",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p9,p10"
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
            "id": "f-n1",
            "t": "text",
            "text": "+ not sau to be",
            "x": 60,
            "y": 1670,
            "size": 48,
            "at": "l1:not",
            "hl": [
              {
                "text": "not",
                "at": "l1:not"
              }
            ]
          },
          {
            "id": "f-n2",
            "t": "text",
            "text": "We aren't hungry.",
            "x": 60,
            "y": 1740,
            "size": 44,
            "at": "l1:aren't"
          },
          {
            "id": "f-n3",
            "t": "text",
            "text": "She isn't / She's not a student.",
            "x": 900,
            "y": 1780,
            "size": 38,
            "at": "l2:isn't",
            "hl": [
              {
                "text": "isn't",
                "at": "l2:isn't"
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
          "say": "For the negative, just add not after to be. We aren't hungry.",
          "sub": "Phủ định chỉ cần thêm not sau to be: We aren't hungry.",
          "keys": [
            "thêm not sau to be"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "With is, two ways: she isn't a student, or she's not a student.",
          "sub": "Với is có hai cách: She isn't a student, hoặc She's not a student."
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "street",
        "label": "20:00 · dọn dẹp sau liên hoan",
        "actors": [
          {
            "id": "sam",
            "side": "left",
            "pose": "explain"
          },
          {
            "id": "thao",
            "side": "right",
            "pose": "hold",
            "face": "worried"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Yes, I'm.",
          "why": "Câu trả lời ngắn khẳng định không viết tắt; chỉ câu phủ định mới rút gọn.",
          "rule": "“Yes” nói đủ, “No” mới rút gọn"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "You cooked all day, Thảo. Are you tired?",
          "sub": "Chị nấu cả ngày rồi, Thảo. Are you tired?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Yes, I'm.",
          "sub": "Yes, I'm.",
          "face": "worried",
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
          "say": "Short yes answers don't shorten. Only negative ones do. Sounds neat, but it's wrong.",
          "sub": "Trả lời ngắn khẳng định không viết tắt, chỉ câu phủ định mới rút gọn. Nghe gọn nhưng sai.",
          "keys": [
            "chỉ câu phủ định mới rút gọn"
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
          "say": "Yes, I am. Very tired!",
          "sub": "Yes, I am. Mệt lắm!",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "And if not: no, I'm not. Takeaway: say yes in full, shorten only no.",
          "sub": "Còn nếu không mệt: No, I'm not. Rút ra: trả lời “Yes” thì nói đủ, “No” mới được rút gọn.",
          "phase": "redo",
          "keys": [
            "“No” mới được rút gọn"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p11,p12"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 20:15 · Đảo lên để hỏi",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "You are tired.",
            "x": 2028,
            "y": 1260,
            "size": 54,
            "at": "l2:You are tired",
            "color": "muted"
          },
          {
            "id": "g-1b",
            "t": "text",
            "text": "→ Are you tired?",
            "x": 2468,
            "y": 1260,
            "size": 54,
            "at": "l2:Are you",
            "color": "accent",
            "hl": [
              {
                "text": "Are",
                "at": "l2:Are you"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "Is she Mexican? · Is this your phone?",
            "x": 2028,
            "y": 1350,
            "size": 42,
            "at": "l3:Mexican",
            "hl": [
              {
                "text": "Is",
                "at": "l3:Is she"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "Are we late?",
            "x": 2028,
            "y": 1415,
            "size": 42,
            "at": "l3:late"
          },
          {
            "id": "g-4",
            "t": "text",
            "text": "Yes, he is. · No, they aren't.",
            "x": 2028,
            "y": 1500,
            "size": 46,
            "at": "l4:Yes",
            "hl": [
              {
                "text": "he is",
                "at": "l4:he is"
              }
            ]
          },
          {
            "id": "g-4b",
            "t": "text",
            "text": "lịch sự hơn chỉ “Yes”, “No”",
            "x": 2028,
            "y": 1570,
            "size": 38,
            "at": "l4:polite",
            "color": "muted"
          },
          {
            "id": "g-5",
            "t": "text",
            "text": "Từ hỏi → be → chủ ngữ",
            "x": 2868,
            "y": 1260,
            "size": 52,
            "at": "l5:question word",
            "color": "accent",
            "hl": [
              {
                "text": "be",
                "at": "l5:then be"
              }
            ]
          },
          {
            "id": "g-6",
            "t": "text",
            "text": "Where are you from?",
            "x": 2868,
            "y": 1350,
            "size": 46,
            "at": "l6:Where"
          },
          {
            "id": "g-7",
            "t": "text",
            "text": "When is the meeting?",
            "x": 2868,
            "y": 1420,
            "size": 46,
            "at": "l6:When"
          },
          {
            "id": "g-8",
            "t": "text",
            "text": "Who's she? · What time is it?",
            "x": 2868,
            "y": 1490,
            "size": 42,
            "at": "l6:Who's"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, eight fifteen. To ask, move to be in front of the subject.",
          "sub": "Chặng năm, tám giờ mười lăm. Muốn hỏi, đảo to be lên trước chủ ngữ.",
          "keys": [
            "đảo to be lên trước chủ ngữ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "You are tired becomes: are you tired?",
          "sub": "You are tired thành: Are you tired?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Is she Mexican? Is this your phone? Are we late?",
          "sub": "Is she Mexican? Is this your phone? Are we late?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Short answers repeat the subject and to be: yes, he is. No, they aren't. More polite than just yes.",
          "sub": "Trả lời ngắn lặp lại chủ ngữ và to be: Yes, he is. No, they aren't. Lịch sự hơn chỉ nói “Yes”.",
          "keys": [
            "Lịch sự hơn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "With a question word: question word first, then be, then the subject.",
          "sub": "Có từ để hỏi: từ để hỏi đứng đầu, rồi đến to be, rồi chủ ngữ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Where are you from? When is the meeting? Who's she? What time is it?",
          "sub": "Where are you from? When is the meeting? Who's she? What time is it?"
        }
      ],
      "ref": "p13,p14,p15"
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
          },
          {
            "at": "l1",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 2868,
            "y": 1560,
            "w": 520,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "oncoming-taxi"
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l2",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "20:30 · Dũng kể chuyện",
            "icon": "oncoming-taxi"
          },
          {
            "id": "g-dq",
            "t": "text",
            "text": "“Where you are from?”",
            "x": 2028,
            "y": 1670,
            "size": 48,
            "at": "l1:Where you",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Sam, today I met a new driver. I asked him: where you are from?",
          "sub": "Sam, hôm nay em gặp một tài xế mới. Em hỏi: Where you are from?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "He understood. But the order was off.",
          "sub": "Người ta vẫn hiểu. Nhưng khuôn câu lệch rồi."
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s15",
      "module": "BRK-04",
      "data": {
        "title": "Câu hỏi của Dũng",
        "labels": [
          "Sai",
          "Đúng"
        ],
        "wrong": "Where you are from?",
        "right": "Where are you from?",
        "wrongIllus": "red-question-mark",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Where you are from?",
          "sub": "Where you are from?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Where are you from? Are goes before you.",
          "sub": "Where are you from? Are đứng trước you.",
          "keys": [
            "Are đứng trước you"
          ]
        }
      ],
      "ref": "p16"
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
            "id": "g-dqx",
            "t": "strike",
            "over": "g-dq",
            "at": "l1:sure"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Muốn hỏi: am, is, are lên trước",
            "x": 2028,
            "y": 1770,
            "size": 44,
            "at": "l2:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "lên trước",
                "at": "l2:in front"
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
          "say": "The right pattern makes Dũng sound much more sure of himself.",
          "sub": "Câu đúng khuôn giúp Dũng nghe chắc chắn hơn nhiều.",
          "keys": [
            "nghe chắc chắn hơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: to ask, put am, is, are in front of the person.",
          "sub": "Rút ra: muốn hỏi, đưa am, is, are lên trước người.",
          "keys": [
            "đưa am, is, are lên trước người"
          ]
        }
      ],
      "ref": "p16,p17"
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
            "text": "⑥ 21:00 · Tự giới thiệu",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4836,
            "y": 1240,
            "w": 720,
            "data": {
              "set": "street",
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
              "props": [
                "house"
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
            "caption": "21:00 · trước nhà Thảo",
            "icon": "house"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "I'm Thảo.",
            "x": 3996,
            "y": 1260,
            "size": 60,
            "at": "l3:I'm Thảo",
            "hl": [
              {
                "text": "I'm",
                "at": "l3:I'm Thảo"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "I'm a housewife.",
            "x": 3996,
            "y": 1345,
            "size": 60,
            "at": "l3:housewife",
            "hl": [
              {
                "text": "a",
                "at": "l3:housewife"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "I'm very busy in the morning.",
            "x": 3996,
            "y": 1430,
            "size": 50,
            "at": "l3:morning"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "chủ ngữ + to be + thông tin",
            "x": 3996,
            "y": 1520,
            "size": 46,
            "at": "l4:pattern",
            "color": "accent",
            "hl": [
              {
                "text": "to be",
                "at": "l4:to be"
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
          "say": "Stop six, nine p.m. The party winds down.",
          "sub": "Chặng sáu, chín giờ tối. Bữa liên hoan sắp tàn."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Tell me about you, Thảo.",
          "sub": "Kể về chị đi, Thảo.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I'm Thảo. I'm a housewife. I'm very busy in the morning!",
          "sub": "I'm Thảo. I'm a housewife. I'm very busy in the morning!",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three introductions, one pattern: subject, to be, information.",
          "sub": "Ba câu tự giới thiệu, cùng một khuôn: chủ ngữ, to be, thông tin.",
          "keys": [
            "cùng một khuôn"
          ]
        }
      ],
      "ref": "p20"
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
            "id": "h-a",
            "t": "text",
            "text": "Nghề: a / an trước nghề",
            "x": 3996,
            "y": 1610,
            "size": 44,
            "at": "l1:jobs",
            "color": "coral",
            "hl": [
              {
                "text": "a / an",
                "at": "l1:a or an"
              }
            ]
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "I'm a student. · Is he a teacher?",
            "x": 3996,
            "y": 1675,
            "size": 38,
            "at": "l1:student"
          },
          {
            "id": "h-b",
            "t": "text",
            "text": "He's my wife's brother.",
            "x": 3996,
            "y": 1740,
            "size": 40,
            "at": "l3:brother"
          },
          {
            "id": "h-c",
            "t": "text",
            "text": "Are you tired? · Is she Mexican?",
            "x": 4836,
            "y": 1790,
            "size": 34,
            "at": "l2:feelings"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "For jobs, remember a or an: I'm a student. Is he a teacher? People often drop it, so check.",
          "sub": "Với nghề nghiệp, nhớ a hoặc an: I'm a student. Is he a teacher? Lỗi bỏ mạo từ rất hay gặp, nên soát.",
          "keys": [
            "nhớ a hoặc an"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "To be also carries feelings, places and nationality: are you tired? They're on holiday in Italy. Is she Mexican?",
          "sub": "To be còn đi với cảm giác, nơi chốn, quốc tịch: Are you tired? They're on holiday in Italy. Is she Mexican?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And relationships: he's my wife's brother.",
          "sub": "Và quan hệ: He's my wife's brother: anh ấy là anh trai vợ tôi."
        }
      ],
      "ref": "p18,p19"
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
            "text": "⑦ 22:00 · Bốn ô mỗi tối",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop seven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1240,
            "w": 720,
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
                "notebook",
                "pencil"
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
            "caption": "22:00 · sổ tay của Thảo",
            "icon": "notebook"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 44,
            "h": 44,
            "at": "l3:pronoun",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1252,
            "size": 56,
            "at": "l3:pronoun+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Đổi ra I, he, she… chưa?",
            "x": 6029,
            "y": 1262,
            "size": 40,
            "at": "l3:pronoun+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1350,
            "w": 44,
            "h": 44,
            "at": "l3:form",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1332,
            "size": 56,
            "at": "l3:form+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Đúng am, is, are chưa?",
            "x": 6029,
            "y": 1342,
            "size": 40,
            "at": "l3:form+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1430,
            "w": 44,
            "h": 44,
            "at": "l4:question",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1412,
            "size": 56,
            "at": "l4:question+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Hỏi: to be lên trước chưa?",
            "x": 6029,
            "y": 1422,
            "size": 40,
            "at": "l4:question+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1510,
            "w": 44,
            "h": 44,
            "at": "l4:yes",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1492,
            "size": 56,
            "at": "l4:yes+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "“Yes” đã nói đủ chưa?",
            "x": 6029,
            "y": 1502,
            "size": 40,
            "at": "l4:yes+200"
          },
          {
            "id": "i-5",
            "t": "text",
            "text": "Mỗi tối: 5 câu về người nhà",
            "x": 5964,
            "y": 1610,
            "size": 48,
            "at": "l5:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 câu",
                "at": "l5:five"
              }
            ]
          },
          {
            "id": "i-nx",
            "t": "text",
            "text": "my · 's → bài sau",
            "x": 5964,
            "y": 1700,
            "size": 48,
            "at": "l6:my",
            "hl": [
              {
                "text": "my · 's",
                "at": "l6:my"
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
          "say": "Stop seven, ten p.m. Thảo writes about her family.",
          "sub": "Chặng bảy, mười giờ đêm. Thảo viết vài câu về người trong nhà."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Bin is my son. Dũng is a driver. We are very happy.",
          "sub": "Bin is my son. Dũng is a driver. We are very happy.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Check one: subject turned into a pronoun? Check two: the right form?",
          "sub": "Ô một: chủ ngữ đã đổi ra đại từ chưa? Ô hai: đã chọn đúng am, is, are chưa?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Check three: in a question, to be in front? Check four: yes answers in full?",
          "sub": "Ô ba: câu hỏi đã đưa to be lên trước chưa? Ô bốn: trả lời “Yes” đã nói đủ chưa?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Every evening, five sentences about your family, then these four boxes.",
          "sub": "Mỗi tối viết năm câu về người trong nhà rồi soát bốn ô này.",
          "keys": [
            "năm câu về người trong nhà"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And in he's my wife's brother, two small words wait: my and apostrophe s. Next lesson.",
          "sub": "Trong “He's my wife's brother” còn hai chữ nhỏ hay rối: my và 's. Đó là bài kế tiếp."
        }
      ],
      "ref": "p21,p22"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Bảy · 17:30",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Saturday"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 8772,
            "y": 1240,
            "w": 720,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "thumb",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "pose": "wave",
                  "face": "happy"
                }
              ],
              "props": [
                "oncoming-taxi",
                "steaming-bowl"
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
            "at": "l1",
            "caption": "Thứ Bảy 17:30 · đầu ngõ",
            "icon": "oncoming-taxi"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "“Sam! I am hungry.”",
            "x": 7932,
            "y": 1270,
            "size": 54,
            "at": "l2:hungry",
            "color": "accent",
            "hl": [
              {
                "text": "am",
                "at": "l2:am"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "“Are you hungry too?”",
            "x": 7932,
            "y": 1350,
            "size": 50,
            "at": "l2:too",
            "hl": [
              {
                "text": "Are",
                "at": "l2:Are"
              }
            ]
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "“Yes, I am!”",
            "x": 7932,
            "y": 1430,
            "size": 50,
            "at": "l3:Yes"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Saturday, five thirty p.m. Same alley, same Dũng, same smell of food.",
          "sub": "Thứ Bảy, năm rưỡi chiều. Vẫn đầu ngõ ấy, vẫn Dũng ấy, vẫn mùi đồ ăn ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Sam! I am hungry. Are you hungry too?",
          "sub": "Sam! I am hungry. Are you hungry too?",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Yes, I am!",
          "sub": "Yes, I am!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Words cost nothing. Today, Dũng chose all of them, am included.",
          "sub": "“Lời nói chẳng mất tiền mua.” Hôm nay Dũng lựa đủ lời, có cả am.",
          "keys": [
            "có cả am"
          ]
        }
      ],
      "ref": "intro"
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
            "at": "l2",
            "fit": "E",
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
            "at": "l5",
            "fit": "J",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "j-s",
            "t": "text",
            "text": "I am · he, she, it is",
            "x": 7932,
            "y": 1515,
            "size": 40,
            "at": "l1:three forms",
            "hl": [
              {
                "text": "am",
                "at": "l1:I am"
              }
            ]
          },
          {
            "id": "j-s2",
            "t": "text",
            "text": "you, we, they are",
            "x": 7932,
            "y": 1570,
            "size": 40,
            "at": "l1:they are"
          },
          {
            "id": "j-do",
            "t": "text",
            "text": "Làm ngay: 3 câu “I'm…”",
            "x": 7932,
            "y": 1640,
            "size": 50,
            "at": "l5:Do it now",
            "color": "accent",
            "hl": [
              {
                "text": "I'm…",
                "at": "l5:I'm"
              }
            ]
          },
          {
            "id": "j-nx",
            "t": "text",
            "text": "Bài sau: I, me, my, mine, 's",
            "x": 7932,
            "y": 1720,
            "size": 44,
            "at": "l6:Next"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 8572,
            "y": 170,
            "at": "l2:I"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 520,
            "y": 1670,
            "at": "l3:not"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3568,
            "y": 1340,
            "at": "l4:ask"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Nhân vật trong bài là minh hoạ. Câu mẫu theo British Council LearnEnglish, The TEFL Academy.",
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
          "say": "So, to be has three forms now: I am; he, she, it is; you, we, they are.",
          "sub": "Tóm lại, to be ở hiện tại có ba dạng: I am; he, she, it is; you, we, they are.",
          "keys": [
            "ba dạng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Pick the form by the subject: I, he, she, they.",
          "sub": "Chọn dạng theo chủ ngữ: I, he, she, they."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For the negative, add not. No amn't.",
          "sub": "Phủ định thì thêm not. Không có amn't."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "To ask, move to be to the front. And say yes, I am in full.",
          "sub": "Muốn hỏi, đưa to be lên trước. Trả lời “Yes, I am” cho đủ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Do it now: write three introductions starting with I'm.",
          "sub": "Việc làm ngay: viết ba câu tự giới thiệu theo khuôn “I'm…”.",
          "keys": [
            "ba câu tự giới thiệu"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: I, me, my, mine and apostrophe s.",
          "sub": "Bài tiếp theo: I, me, my, mine và 's."
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
        "q": "Someone asks Thao are you tired, and she is tired, what should she answer?",
        "options": [
          "Yes, I am, without making it shorter after the word yes",
          "Yes, I'm, because short forms are always more natural in speech",
          "Yes, I tired, because the question already has the verb"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "tired-face",
        "why": "Câu trả lời ngắn khẳng định không rút gọn. Nói “Yes, I am”, không nói “Yes, I'm”."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Someone asks Thao are you tired, and she is tired, what should she answer?",
          "sub": "Có người hỏi chị Thảo are you tired, và chị đang mệt, chị nên trả lời gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Yes, I am, without making it shorter after the word yes.",
          "sub": "Yes, I am: trả lời khẳng định thì nói đủ, không rút gọn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Yes in full. Only no gets shortened.",
          "sub": "“Yes” nói đủ, “No” mới rút gọn."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[18]"
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
          "say": "I am, he is, they are. Now try the forty questions below.",
          "sub": "I am, he is, they are. Giờ thử bốn mươi câu hỏi bên dưới nhé.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo BỮA LIÊN HOAN CHÀO HÀNG XÓM MỚI tối thứ Sáu trong ngõ nhà Thảo (17:30 Dũng chạy xe về “Sam! I…” bị cắt → 17:45 to be là động từ nối, Dũng nói trọn “I am hungry” → 18:00 không có “là” vẫn cần to be → 18:30 bảng chia, “My mum is a doctor” → 19:00 viết tắt, phủ định, Bin “I amn't” → 20:00 “Khoan đã!” “Yes, I'm.” → 20:15 câu hỏi, Dũng “Where you are from?” → 21:00 Thảo tự giới thiệu → 22:00 bốn ô → Thứ Bảy 17:30 khép vòng). HOOK-22 câu thoại bị cắt. Nhân vật: Dũng, Thảo, Sam, Bé Bin — w145/_series/grammar-zero-beginners.md. Cảnh ngắt nhịp: BRK-10 (không “là” vẫn có to be), BRK-11 (bảng chia), BRK-04 (Where you are from?). Ca dao: “Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau”. Câu đố questions[18].",
  "loop": {
    "open": "s00",
    "close": "s20"
  }
};
