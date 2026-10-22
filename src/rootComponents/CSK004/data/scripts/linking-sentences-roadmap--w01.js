// linking-sentences-roadmap--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "linking-sentences-roadmap--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "grammar-adult-linking-sentences",
    "slug": "linking-sentences-roadmap",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Làm sao nối những câu ngắn rời rạc thành câu dài mạch lạc?",
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
            "module": "SCENE-01",
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "office",
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
                "mobile-phone",
                "crescent-moon"
              ]
            },
            "at": "l1",
            "caption": "Thứ Hai · 20:00 · vẫn ở văn phòng",
            "icon": "crescent-moon"
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "I am at the office.",
            "x": 60,
            "y": 120,
            "size": 54,
            "at": "l3:office"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "I am tired.",
            "x": 60,
            "y": 200,
            "size": 54,
            "at": "l3:tired"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "I have a lot of work.",
            "x": 60,
            "y": 280,
            "size": 54,
            "at": "l3:work"
          },
          {
            "id": "a-4",
            "t": "text",
            "text": "I want to go home.",
            "x": 60,
            "y": 360,
            "size": 54,
            "at": "l3:home"
          },
          {
            "id": "a-n",
            "t": "text",
            "text": "4 câu · 0 từ nối",
            "x": 60,
            "y": 460,
            "size": 64,
            "at": "l4:robot",
            "color": "coral",
            "hl": [
              {
                "text": "0 từ nối",
                "at": "l4:robot"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Một cây làm chẳng nên non”",
            "x": 60,
            "y": 600,
            "size": 50,
            "at": "l5:hill",
            "color": "accent",
            "hl": [
              {
                "text": "chẳng nên non",
                "at": "l5:hill"
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
          "say": "Eight p.m., Monday, at the office. Meet Thảo, an accountant, still glued to her desk.",
          "sub": "Tám giờ tối thứ Hai, ở văn phòng. Đây là Thảo, kế toán, vẫn dính chặt vào bàn làm việc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "She texts her husband. Four sentences.",
          "sub": "Thảo nhắn cho chồng. Bốn câu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I am at the office. I am tired. I have a lot of work. I want to go home.",
          "sub": "“I am at the office. I am tired. I have a lot of work. I want to go home.”",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Every sentence is correct. Together, they sound like a robot reading a shopping list.",
          "sub": "Câu nào cũng đúng. Ghép lại thì nghe như rô-bốt đọc danh sách đi chợ.",
          "keys": [
            "rô-bốt đọc danh sách đi chợ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: one tree alone can't make a hill.",
          "sub": "Ông bà dặn: “Một cây làm chẳng nên non.”",
          "keys": [
            "Một cây làm chẳng nên non"
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
      "ref": "intro,p2"
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
            "text": "Nối câu ngắn thành câu dài?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:turn",
            "hl": [
              {
                "text": "câu dài",
                "at": "l1:longer"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "1 câu ngắn = 1 ý",
            "x": 2028,
            "y": 170,
            "size": 52,
            "at": "l2:one idea"
          },
          {
            "id": "b-g",
            "t": "text",
            "text": "Vì sao? Rồi sao? Để làm gì?",
            "x": 2028,
            "y": 255,
            "size": 52,
            "at": "l3:why",
            "color": "coral",
            "hl": [
              {
                "text": "Để làm gì?",
                "at": "l3:for"
              }
            ]
          },
          {
            "id": "b-n",
            "t": "text",
            "text": "Từ nối: đoán thay người nghe",
            "x": 2028,
            "y": 345,
            "size": 50,
            "at": "l4:guessing",
            "color": "accent",
            "hl": [
              {
                "text": "đoán thay",
                "at": "l4:guessing"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: cấu trúc phức tạp",
            "x": 2028,
            "y": 460,
            "size": 50,
            "at": "l5:complex",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l5:complex+600"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: vài công cụ nhỏ",
            "x": 2028,
            "y": 550,
            "size": 58,
            "at": "l5:small tools",
            "color": "accent",
            "hl": [
              {
                "text": "vài công cụ nhỏ",
                "at": "l5:small tools"
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
          "say": "So how do you turn short, choppy sentences into longer, clearer ones?",
          "sub": "Vậy làm sao nối những câu ngắn rời rạc thành câu dài mạch lạc?",
          "keys": [
            "câu dài mạch lạc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each short sentence holds one idea. Line them up, and the listener must guess the links.",
          "sub": "Mỗi câu ngắn chứa một ý. Xếp cạnh nhau, người nghe phải tự đoán chúng liên quan thế nào.",
          "keys": [
            "tự đoán"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Why did it happen? What came next? What was it for?",
          "sub": "Việc này vì sao? Rồi sau đó thế nào? Làm việc kia để làm gì?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Linking words do that guessing for the listener. Longer, yet easier to follow.",
          "sub": "Từ nối làm thay người nghe việc đoán đó, nên câu dài hơn mà lại dễ hiểu hơn.",
          "keys": [
            "dài hơn mà lại dễ hiểu hơn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And you don't need complex structures. Just a few small tools, like screws in a furniture workshop.",
          "sub": "Không cần cấu trúc phức tạp. Chỉ cần vài công cụ nhỏ, như con vít trong xưởng đồ gỗ.",
          "keys": [
            "vài công cụ nhỏ"
          ]
        }
      ],
      "ref": "p1,intro"
    },
    {
      "id": "s02",
      "module": "BRK-08",
      "data": {
        "title": "Một tuần, bảy công cụ",
        "current": 0,
        "points": [
          {
            "label": "T2 20:00",
            "sub": "Tin nhắn cụt",
            "illus": "mobile-phone"
          },
          {
            "label": "Thứ Ba",
            "sub": "Từ nối",
            "illus": "link"
          },
          {
            "label": "Thứ Tư",
            "sub": "to, V-ing",
            "illus": "bus"
          },
          {
            "label": "Thứ Năm",
            "sub": "Tính từ, lượng từ",
            "illus": "yawning-face"
          },
          {
            "label": "Thứ Sáu",
            "sub": "in on at, enough",
            "illus": "ladder"
          },
          {
            "label": "Chủ Nhật",
            "sub": "Dũng làm mẫu",
            "illus": "writing-hand"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One week, seven small tools, in the order of the seven lessons.",
          "sub": "Một tuần, bảy công cụ nhỏ, theo đúng thứ tự bảy bài của chuỗi."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Starting with Thảo's four lonely sentences.",
          "sub": "Bắt đầu từ bốn câu đứng lẻ loi của Thảo.",
          "keys": [
            "bốn câu đứng lẻ loi"
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
            "at": "l4",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① Thứ Hai 20:05 · Viết lại",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:five minutes"
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
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone"
              ]
            },
            "at": "l1:tries",
            "caption": "Thứ Hai · 20:05 · vẫn bốn ý ấy",
            "icon": "mobile-phone"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "I'm still at the office",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l2:office"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "because I have a lot of work,",
            "x": 3996,
            "y": 240,
            "size": 46,
            "at": "l2:because",
            "hl": [
              {
                "text": "because",
                "at": "l4:because"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "so I'm tired",
            "x": 3996,
            "y": 310,
            "size": 46,
            "at": "l3:tired",
            "hl": [
              {
                "text": "so",
                "at": "l4:so"
              }
            ]
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "and I want to go home.",
            "x": 3996,
            "y": 380,
            "size": 46,
            "at": "l3:home",
            "hl": [
              {
                "text": "and",
                "at": "l5:and"
              }
            ]
          },
          {
            "id": "c-r",
            "t": "text",
            "text": "because → lý do · so → kết quả",
            "x": 3996,
            "y": 480,
            "size": 42,
            "at": "l4:reason",
            "color": "accent"
          },
          {
            "id": "c-a",
            "t": "text",
            "text": "and → thêm một ý",
            "x": 3996,
            "y": 550,
            "size": 42,
            "at": "l5:adds",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one: five minutes later. Thảo tries again, with the same four ideas.",
          "sub": "Chặng một: năm phút sau. Thảo viết lại, vẫn đúng bốn ý ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm still at the office because I have a lot of work,",
          "sub": "“I'm still at the office because I have a lot of work,”",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "so I'm tired and I want to go home.",
          "sub": "“so I'm tired and I want to go home.”",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Four ideas, nothing lost. Because gives the reason. So gives the result.",
          "sub": "Bốn ý không mất ý nào. Because cho biết lý do, so cho biết kết quả.",
          "keys": [
            "lý do",
            "kết quả"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And adds one more idea. Three little screws, one solid cabinet.",
          "sub": "And thêm một ý. Ba con vít nhỏ, thành một cái tủ đứng vững.",
          "keys": [
            "Ba con vít nhỏ"
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
          }
        ],
        "items": [
          {
            "id": "c-k",
            "t": "text",
            "text": "Câu ngắn: đúng nhưng rời",
            "x": 4816,
            "y": 685,
            "size": 48,
            "at": "l1:separate",
            "color": "accent",
            "hl": [
              {
                "text": "đúng nhưng rời",
                "at": "l1:separate"
              }
            ]
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "Từ nối: ý nối nhau ra sao",
            "x": 3996,
            "y": 640,
            "size": 38,
            "at": "l2:connect"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "The lesson: short sentences are correct, but separate.",
          "sub": "Rút ra: câu ngắn đúng, nhưng rời.",
          "keys": [
            "đúng, nhưng rời"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Linking words tell the listener how the ideas connect.",
          "sub": "Từ nối cho người nghe biết các ý liên quan với nhau thế nào.",
          "keys": [
            "liên quan với nhau thế nào"
          ]
        }
      ],
      "ref": "p3,p1"
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
            "text": "② Thứ Ba · Bài 1: từ nối",
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
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "cloud-with-rain",
                "chair"
              ]
            },
            "at": "l1:dũng",
            "caption": "Thứ Ba · mưa · xưởng đồ gỗ",
            "icon": "cloud-with-rain"
          },
          {
            "id": "d-ex",
            "t": "text",
            "text": "It was raining, so we stayed inside.",
            "x": 5964,
            "y": 170,
            "size": 38,
            "at": "l2:raining",
            "hl": [
              {
                "text": "so",
                "at": "l3:so"
              }
            ]
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "and → thêm ý",
            "x": 5964,
            "y": 260,
            "size": 46,
            "at": "l4:adds"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "or → lựa chọn",
            "x": 5964,
            "y": 325,
            "size": 46,
            "at": "l4:choice"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "but → ý khác, bất ngờ",
            "x": 5964,
            "y": 390,
            "size": 46,
            "at": "l5:different"
          },
          {
            "id": "d-4",
            "t": "text",
            "text": "because → lý do",
            "x": 5964,
            "y": 455,
            "size": 46,
            "at": "l5:reason"
          },
          {
            "id": "d-5",
            "t": "text",
            "text": "so → kết quả",
            "x": 5964,
            "y": 520,
            "size": 46,
            "at": "l5:result"
          },
          {
            "id": "d-6",
            "t": "text",
            "text": "Bài 1: dấu phẩy · because of",
            "x": 5964,
            "y": 610,
            "size": 42,
            "at": "l6:comma",
            "color": "muted"
          },
          {
            "id": "d-vn",
            "t": "text",
            "text": "vì… nên → because… so…",
            "x": 6784,
            "y": 685,
            "size": 44,
            "at": "l7:trap",
            "color": "coral",
            "hl": [
              {
                "text": "because… so…",
                "at": "l7:because"
              }
            ]
          },
          {
            "id": "d-vnx",
            "t": "strike",
            "over": "d-vn",
            "at": "l7:end"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two: a rainy Tuesday. And this is Dũng, a technician in our furniture workshop.",
          "sub": "Chặng hai: thứ Ba trời mưa. Còn đây là Dũng, kỹ thuật viên xưởng đồ gỗ của công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "It was raining, so we stayed inside and packed the chairs.",
          "sub": "“It was raining, so we stayed inside…” Mưa nên cả tổ ở trong xưởng đóng gói ghế.",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One word, so, and the rain becomes a cause with a result.",
          "sub": "Chỉ một chữ so, cơn mưa thành nguyên nhân, có ngay kết quả.",
          "keys": [
            "một chữ so"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "British Council's LearnEnglish Teens gives each word a job. And adds. Or offers a choice.",
          "sub": "LearnEnglish Teens của British Council giao mỗi từ một việc. And thêm ý. Or đưa lựa chọn."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "But brings something different or surprising. Because gives a reason. So gives a result.",
          "sub": "But đưa ý khác hoặc bất ngờ. Because nêu lý do. So nêu kết quả."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Lesson one goes deeper: the comma before but and so, and because versus because of.",
          "sub": "Bài 1 đi sâu: dấu phẩy trước but và so, because khác because of ra sao."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Plus the classic trap: translating vì… nên… straight into because… so…",
          "sub": "Và cái bẫy kinh điển: dịch thẳng “vì… nên…” thành because… so…",
          "keys": [
            "dịch thẳng"
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
            "text": "③ Thứ Tư 7:15 · Để làm gì?",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:wednesday"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "bus-stop",
                "money-bag"
              ]
            },
            "at": "l1:bus stop",
            "caption": "Thứ Tư · 7:15 · bến xe buýt",
            "icon": "bus"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "I take the bus. I want to…",
            "x": 7932,
            "y": 170,
            "size": 44,
            "at": "l2:bus",
            "color": "muted"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "I take the bus to save money.",
            "x": 7932,
            "y": 250,
            "size": 44,
            "at": "l3:save",
            "color": "accent",
            "hl": [
              {
                "text": "to save",
                "at": "l3:save"
              }
            ]
          },
          {
            "id": "e-w",
            "t": "text",
            "text": "to = mục đích → trả lời “Why?”",
            "x": 7932,
            "y": 340,
            "size": 42,
            "at": "l4:purpose",
            "hl": [
              {
                "text": "“Why?”",
                "at": "l4:why"
              }
            ]
          },
          {
            "id": "e-l2",
            "t": "text",
            "text": "Bài 2: in order to",
            "x": 7932,
            "y": 420,
            "size": 38,
            "at": "l5:order",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three: Wednesday, seven fifteen, at the bus stop.",
          "sub": "Chặng ba: bảy giờ mười lăm sáng thứ Tư, ở bến xe buýt."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I take the bus. I want to save money.",
          "sub": "“I take the bus. I want to save money.”",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two sentences, one tiny word: I take the bus to save money.",
          "sub": "Hai câu, một chữ nhỏ: “I take the bus to save money.”",
          "keys": [
            "to save money"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "To shows purpose. It answers why, like British Council's: We eat at home to save money.",
          "sub": "To chỉ mục đích, trả lời câu hỏi “Why?”, như ví dụ của British Council: “We eat at home to save money.”",
          "keys": [
            "chỉ mục đích"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Lesson two adds in order to, so as to, and why we never write for plus a verb.",
          "sub": "Bài 2 thêm in order to, so as to, và vì sao không viết “for + động từ”."
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s07",
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
            "id": "e-v1",
            "t": "text",
            "text": "enjoy + V-ing",
            "x": 7932,
            "y": 510,
            "size": 50,
            "at": "l2:enjoy",
            "hl": [
              {
                "text": "V-ing",
                "at": "l2:travelling"
              }
            ]
          },
          {
            "id": "e-v2",
            "t": "text",
            "text": "want + to V",
            "x": 8332,
            "y": 510,
            "size": 50,
            "at": "l2:want",
            "hl": [
              {
                "text": "to V",
                "at": "l2:speak"
              }
            ]
          },
          {
            "id": "e-v3",
            "t": "text",
            "text": "Bài 3: học theo cụm",
            "x": 7932,
            "y": 610,
            "size": 52,
            "at": "l3:phrases",
            "color": "accent",
            "hl": [
              {
                "text": "học theo cụm",
                "at": "l3:phrases"
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
          "say": "Next, two actions side by side. The second verb changes its form.",
          "sub": "Tiếp theo: hai hành động đứng cạnh nhau, động từ thứ hai đổi dạng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "I enjoy travelling, but I want to speak to the manager. Both are British Council examples.",
          "sub": "“I enjoy travelling” nhưng “I want to speak to the manager”, đều là ví dụ của British Council."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No meaning trick guesses right every time. So lesson three says: learn them in phrases.",
          "sub": "Không có mẹo nghĩa nào đoán đúng mọi lúc, nên bài 3 hướng dẫn học theo cụm.",
          "keys": [
            "học theo cụm"
          ]
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s08",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Tư · 21:00 · ở nhà",
        "actors": [
          {
            "id": "thao",
            "side": "center",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Muốn câu dài phải học cấu trúc khó trước",
          "why": "Danh mục A1–A2 của British Council đã có công cụ nối ý đơn giản: to chỉ mục đích, V-ing và to V.",
          "rule": "Câu dài bắt đầu từ những công cụ nhỏ"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Long sentences need relative clauses and conditionals. I'll learn those first!",
          "sub": "Câu dài thì phải có mệnh đề quan hệ, câu điều kiện. Mình học mấy cái đó trước!",
          "pose": "hold",
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
          "say": "British Council's A1 to A2 list already has simple linking tools: to for purpose, ing and to after verbs.",
          "sub": "Danh mục A1–A2 của British Council đã có sẵn công cụ nối ý đơn giản: to chỉ mục đích, V-ing và to V.",
          "keys": [
            "công cụ nối ý đơn giản"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind!",
          "sub": "Tua lại!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Small tools first. I take the bus to save money, and I enjoy it.",
          "sub": "Công cụ nhỏ trước đã. “I take the bus to save money, and I enjoy it.”",
          "phase": "redo",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Long sentences start with small tools.",
          "sub": "Đúng. Câu dài bắt đầu từ những công cụ nhỏ.",
          "phase": "redo",
          "keys": [
            "những công cụ nhỏ"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p7,p8"
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
            "at": "l4",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm 15:00 · Tính từ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:three"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "face": "sad"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "face": "surprised"
                }
              ],
              "props": [
                "yawning-face"
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
            "at": "l1:meeting",
            "caption": "Thứ Năm · 15:00 · họp trực tuyến",
            "icon": "yawning-face"
          },
          {
            "id": "f-bad",
            "t": "text",
            "text": "I am boring.",
            "x": 60,
            "y": 1260,
            "size": 56,
            "at": "l2:boring",
            "color": "coral"
          },
          {
            "id": "f-ok",
            "t": "text",
            "text": "I am bored.",
            "x": 60,
            "y": 1350,
            "size": 56,
            "at": "l4:felt bored",
            "color": "accent",
            "hl": [
              {
                "text": "bored",
                "at": "l4:felt bored"
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
          "say": "Stop four: Thursday, three p.m. A very long online meeting with Sam, a buyer from abroad.",
          "sub": "Chặng bốn: ba giờ chiều thứ Năm. Một cuộc họp trực tuyến rất dài với chị Sam, khách mua hàng nước ngoài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Sorry, Sam. I am boring in this meeting.",
          "sub": "“Sorry, Sam. I am boring in this meeting.”",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "You're not boring, Dũng! You're very interesting.",
          "sub": "Em có nhạt đâu, Dũng! Em thú vị lắm mà.",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Oops. Dũng felt bored, but he just told a client he is a boring person.",
          "sub": "Ối. Dũng thấy chán, mà lại tự nhận với khách mình là người nhạt nhẽo.",
          "keys": [
            "người nhạt nhẽo"
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
      "ref": "p9"
    },
    {
      "id": "s10",
      "module": "BRK-04",
      "data": {
        "title": "-ed hay -ing?",
        "wrong": "I am boring",
        "right": "I am bored",
        "wrongIllus": "cross-mark",
        "rightIllus": "yawning-face"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Not: I am boring. Unless you really are.",
          "sub": "Không phải “I am boring”, trừ khi bạn nhạt thật."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "But: I am bored. The meeting is the boring one.",
          "sub": "Mà là “I am bored”. Cuộc họp mới là thứ “boring”.",
          "keys": [
            "I am bored"
          ]
        }
      ],
      "ref": "p9"
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
            "at": "l5",
            "fit": [
              "f-v"
            ],
            "zoom": 1.3,
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
            "id": "f-badx",
            "t": "strike",
            "over": "f-bad",
            "at": "l1:feels"
          },
          {
            "id": "f-r",
            "t": "text",
            "text": "-ed: mình thấy · -ing: thứ gây ra",
            "x": 60,
            "y": 1440,
            "size": 40,
            "at": "l1:causes",
            "hl": [
              {
                "text": "mình thấy",
                "at": "l1:feels"
              }
            ]
          },
          {
            "id": "f-p",
            "t": "text",
            "text": "good at · worried about",
            "x": 60,
            "y": 1510,
            "size": 42,
            "at": "l2:good at"
          },
          {
            "id": "f-q1",
            "t": "text",
            "text": "a few friends → ổn",
            "x": 60,
            "y": 1600,
            "size": 46,
            "at": "l4:a few",
            "color": "accent"
          },
          {
            "id": "f-q2",
            "t": "text",
            "text": "few friends → hơi cô đơn",
            "x": 60,
            "y": 1670,
            "size": 46,
            "at": "l4:lonely",
            "color": "coral",
            "hl": [
              {
                "text": "hơi cô đơn",
                "at": "l4:lonely"
              }
            ]
          },
          {
            "id": "f-l5",
            "t": "text",
            "text": "Bài 5: đếm được hay không",
            "x": 880,
            "y": 1775,
            "size": 42,
            "at": "l6:countable",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "British Council: ed says how a person feels. Ing describes what causes the feeling.",
          "sub": "British Council: đuôi -ed nói người đó cảm thấy thế nào, đuôi -ing tả thứ gây ra cảm giác.",
          "keys": [
            "cảm thấy thế nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Adjectives also bring their own prepositions: good at, worried about, interested in. That's lesson four.",
          "sub": "Tính từ còn đi với giới từ riêng: good at, worried about, interested in. Đó là bài 4."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then quantifiers: many or few, enough or not enough.",
          "sub": "Rồi lượng từ: nhiều hay ít, đủ hay không đủ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "I have a few friends? That's fine. I have few friends? A little lonely.",
          "sub": "“I have a few friends”: số bạn là ổn. “I have few friends”: nghe hơi cô đơn.",
          "keys": [
            "hơi cô đơn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "A few friends, then. One little a, much less lonely!",
          "sub": "Vậy là “a few friends”. Thêm chữ a, đỡ cô đơn hẳn!",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Lesson five sorts few, a little, much and many, by countable or uncountable nouns.",
          "sub": "Bài 5 phân biệt few, a little, much, many theo danh từ đếm được hay không."
        }
      ],
      "ref": "p9,p10"
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
            "at": "l2",
            "fit": [
              "g-v"
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
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Sáu 8:00 · in · on · at",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l5",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "bus",
                "card-index-dividers"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:road",
            "caption": "Thứ Sáu · 8:00 → văn phòng",
            "icon": "bus"
          },
          {
            "id": "g-m",
            "t": "text",
            "text": "I'm on the bus.",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:bus",
            "hl": [
              {
                "text": "on",
                "at": "l3:on the bus"
              }
            ]
          },
          {
            "id": "g-m2",
            "t": "text",
            "text": "I'll be at work soon.",
            "x": 2028,
            "y": 1335,
            "size": 50,
            "at": "l2:work",
            "hl": [
              {
                "text": "at",
                "at": "l3:at work"
              }
            ]
          },
          {
            "id": "g-tx",
            "t": "text",
            "text": "in a taxi · on the fifth floor",
            "x": 2028,
            "y": 1420,
            "size": 42,
            "at": "l3:taxi",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: Friday morning. Thảo texts from the road.",
          "sub": "Chặng năm: sáng thứ Sáu. Thảo nhắn tin trên đường đi làm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm on the bus. I'll be at work soon.",
          "sub": "“I'm on the bus. I'll be at work soon.”",
          "pose": "phone",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "On the bus, but in a taxi. At work. We live on the fifth floor. All British Council examples.",
          "sub": "On the bus nhưng in a taxi. At work. “We live on the fifth floor.” Đều là ví dụ của British Council."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three small words, often in the wrong place. Lesson six sorts them, plus texting directions.",
          "sub": "Ba giới từ nhỏ mà hay đặt nhầm. Bài 6 đi qua từng nhóm, cả cách nhắn tin chỉ đường.",
          "keys": [
            "hay đặt nhầm"
          ]
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
          },
          {
            "at": "l3",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
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
            "id": "g-e1",
            "t": "text",
            "text": "not tall enough",
            "x": 2028,
            "y": 1520,
            "size": 50,
            "at": "l2:enough",
            "hl": [
              {
                "text": "enough",
                "at": "l2:after"
              }
            ]
          },
          {
            "id": "g-e2",
            "t": "text",
            "text": "→ enough đứng sau tính từ",
            "x": 2028,
            "y": 1590,
            "size": 42,
            "at": "l2:after",
            "color": "accent"
          },
          {
            "id": "g-too",
            "t": "text",
            "text": "too good",
            "x": 2028,
            "y": 1680,
            "size": 50,
            "at": "l3:too",
            "color": "coral"
          },
          {
            "id": "g-toox",
            "t": "strike",
            "over": "g-too",
            "at": "l4:very"
          },
          {
            "id": "g-very",
            "t": "text",
            "text": "very good",
            "x": 2328,
            "y": 1680,
            "size": 50,
            "at": "l4:very",
            "color": "accent",
            "hl": [
              {
                "text": "very",
                "at": "l4:very"
              }
            ]
          },
          {
            "id": "g-l7",
            "t": "text",
            "text": "Khen: very, không phải too",
            "x": 2848,
            "y": 1775,
            "size": 44,
            "at": "l4:praise",
            "color": "accent",
            "hl": [
              {
                "text": "very",
                "at": "l4:praise"
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
          "say": "The file is on the top shelf. I'm not tall enough to reach it.",
          "sub": "Tập hồ sơ ở kệ trên cùng. “I'm not tall enough to reach it.”",
          "pose": "hold",
          "face": "worried"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Enough goes after the adjective: not tall enough. Like British Council's top shelf example.",
          "sub": "Enough đứng sau tính từ: “not tall enough”, đúng như câu kệ trên cùng của British Council.",
          "keys": [
            "Enough đứng sau tính từ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Got it for you. Your English is too good today!",
          "sub": "Để em lấy cho. “Your English is too good today!”",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Kind, but to praise, use very: very good. Lesson seven explains why.",
          "sub": "Ý tốt, nhưng muốn khen thì dùng very: “very good”. Bài 7 giải thích vì sao.",
          "keys": [
            "muốn khen thì dùng very"
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
            "text": "⑥ Thứ Bảy 20:00 · Học thế nào",
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
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "spiral-calendar",
                "notebook"
              ]
            },
            "at": "l1:home",
            "caption": "Thứ Bảy · 20:00 · lên kế hoạch",
            "icon": "spiral-calendar"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Mỗi tối 1 bài",
            "x": 3996,
            "y": 1260,
            "size": 54,
            "at": "l2:each evening",
            "color": "accent",
            "hl": [
              {
                "text": "1 bài",
                "at": "l2:one lesson"
              }
            ]
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "Ít từ nối, dùng thật quen",
            "x": 3996,
            "y": 1350,
            "size": 46,
            "at": "l3:few"
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Chú ý cụm từ",
            "x": 3996,
            "y": 1430,
            "size": 48,
            "at": "l4:phrases",
            "hl": [
              {
                "text": "cụm từ",
                "at": "l4:phrases"
              }
            ]
          },
          {
            "id": "h-4",
            "t": "text",
            "text": "Nhớ lại = tự nói ra",
            "x": 3996,
            "y": 1510,
            "size": 52,
            "at": "l5:saying",
            "color": "accent",
            "hl": [
              {
                "text": "tự nói ra",
                "at": "l5:yourself"
              }
            ]
          },
          {
            "id": "h-5",
            "t": "text",
            "text": "Đọc lại",
            "x": 3996,
            "y": 1590,
            "size": 46,
            "at": "l5:reading",
            "color": "muted"
          },
          {
            "id": "h-5x",
            "t": "strike",
            "over": "h-5",
            "at": "l5:again"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: Paul Nation (2014), Victoria University of Wellington",
            "x": 3996,
            "y": 1812,
            "size": 26,
            "at": "l4",
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
          "say": "Stop six: Saturday evening, at home. Thảo plans her study.",
          "sub": "Chặng sáu: tối thứ Bảy, ở nhà. Thảo lên kế hoạch học."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Seven lessons. One lesson each evening. Got it.",
          "sub": "Bảy bài. Mỗi tối một bài. Got it.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "LearnEnglish Teens agrees: learn a few linking words at a time, and use them well.",
          "sub": "LearnEnglish Teens cũng khuyên: mỗi lần chỉ học vài từ nối, dùng thật quen."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Researcher Paul Nation adds: notice phrases, and practise recall.",
          "sub": "Nhà nghiên cứu Paul Nation thêm: chú ý cụm từ, và luyện nhớ lại.",
          "keys": [
            "luyện nhớ lại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Recall means saying it yourself, not just reading it again.",
          "sub": "Nhớ lại là tự nói ra, chứ không chỉ đọc lại.",
          "keys": [
            "tự nói ra"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Verb patterns, adjectives with prepositions: learn them as phrases, and they stick longer.",
          "sub": "Mẫu động từ, tính từ đi với giới từ: học theo cụm thì nhớ lâu hơn.",
          "keys": [
            "nhớ lâu hơn"
          ]
        }
      ],
      "ref": "p13"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Bảy công cụ rồi, ghép vào một đoạn văn thật thế nào?",
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
          "say": "Seven tools. How do you use them on a real paragraph?",
          "sub": "Bảy công cụ rồi. Ghép vào một đoạn văn thật thế nào?",
          "keys": [
            "đoạn văn thật"
          ]
        }
      ],
      "ref": "p14"
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
            "text": "⑦ Chủ Nhật · Dũng làm mẫu",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:sunday"
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
                "writing-hand",
                "notebook"
              ]
            },
            "at": "l1:rewrites",
            "caption": "Chủ Nhật · viết lại đoạn tự giới thiệu",
            "icon": "writing-hand"
          },
          {
            "id": "i-o",
            "t": "text",
            "text": "7 câu ngắn = 7 tấm ván rời",
            "x": 5964,
            "y": 1260,
            "size": 46,
            "at": "l4:floor",
            "color": "coral",
            "hl": [
              {
                "text": "7 tấm ván rời",
                "at": "l4:planks"
              }
            ]
          },
          {
            "id": "i-s1",
            "t": "text",
            "text": "① Tìm quan hệ",
            "x": 5964,
            "y": 1350,
            "size": 50,
            "at": "l4:step one",
            "color": "accent"
          },
          {
            "id": "i-r1",
            "t": "text",
            "text": "thích ← vì thú vị",
            "x": 6004,
            "y": 1430,
            "size": 42,
            "at": "l5:interesting"
          },
          {
            "id": "i-r2",
            "t": "text",
            "text": "mệt = ý trái chiều",
            "x": 6004,
            "y": 1495,
            "size": 42,
            "at": "l5:other side"
          },
          {
            "id": "i-r3",
            "t": "text",
            "text": "học tiếng Anh → để có việc tốt",
            "x": 6004,
            "y": 1560,
            "size": 42,
            "at": "l5:better job"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven: Sunday. Dũng rewrites his self-introduction.",
          "sub": "Chặng bảy: Chủ Nhật. Dũng viết lại đoạn văn tự giới thiệu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I work in a factory. I am a technician. I like my job. The work is interesting.",
          "sub": "“I work in a factory. I am a technician. I like my job. The work is interesting.”",
          "pose": "think"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I am tired in the evening. I study English. I want a better job.",
          "sub": "“I am tired in the evening. I study English. I want a better job.”",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Seven planks on the workshop floor. Let's build. Step one: find the relationships.",
          "sub": "Bảy tấm ván nằm dưới sàn xưởng. Đóng thôi. Bước một: tìm quan hệ.",
          "keys": [
            "tìm quan hệ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "He likes the job because it's interesting. Tired is the other side. English is for a better job.",
          "sub": "Thích việc vì việc thú vị. Mệt là ý trái chiều. Học tiếng Anh để có việc tốt hơn."
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
            "fit": "I",
            "move": "cut"
          },
          {
            "at": "l2",
            "fit": [
              "i-v"
            ],
            "zoom": 1.3,
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
            "id": "i-s2",
            "t": "text",
            "text": "② because · but · to",
            "x": 5964,
            "y": 1630,
            "size": 48,
            "at": "l1:choose",
            "color": "accent",
            "hl": [
              {
                "text": "because · but · to",
                "at": "l1:tools"
              }
            ]
          },
          {
            "id": "i-s3",
            "t": "text",
            "text": "③ Viết lại ✓",
            "x": 5964,
            "y": 1710,
            "size": 48,
            "at": "l4:step three",
            "color": "accent"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Quan hệ trước, công cụ sau",
            "x": 6784,
            "y": 1775,
            "size": 40,
            "at": "l4:first",
            "color": "accent",
            "hl": [
              {
                "text": "Quan hệ trước",
                "at": "l4:first"
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
          "say": "Step two: choose the tools. Because, but, to.",
          "sub": "Bước hai: chọn công cụ. Because, but, to.",
          "keys": [
            "chọn công cụ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I'm a technician in a factory. I like my job because the work is interesting,",
          "sub": "“I'm a technician in a factory. I like my job because the work is interesting,”",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "but I'm tired in the evening. Still, I study English to get a better job.",
          "sub": "“but I'm tired in the evening. Still, I study English to get a better job.”",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Step three, done. Find the relationships first, then pick the tool.",
          "sub": "Bước ba, xong. Tìm quan hệ giữa các ý trước, rồi mới chọn công cụ nối.",
          "keys": [
            "Tìm quan hệ giữa các ý trước"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "text": "Thứ Hai sau · 20:00",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "crescent-moon"
              ]
            },
            "at": "l1:eight",
            "caption": "Thứ Hai sau · 20:00 · vẫn văn phòng ấy",
            "icon": "crescent-moon"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "…because the report isn't finished,",
            "x": 7932,
            "y": 1260,
            "size": 38,
            "at": "l2:because",
            "hl": [
              {
                "text": "because",
                "at": "l4:because"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "but I'll be home soon",
            "x": 7932,
            "y": 1330,
            "size": 44,
            "at": "l3:but",
            "hl": [
              {
                "text": "but",
                "at": "l4:but"
              }
            ]
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "to have dinner with you.",
            "x": 7932,
            "y": 1395,
            "size": 44,
            "at": "l3:dinner",
            "hl": [
              {
                "text": "to",
                "at": "l4:to"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Ba cây chụm lại",
            "x": 7932,
            "y": 1490,
            "size": 48,
            "at": "l4:trees",
            "color": "accent"
          },
          {
            "id": "j-ca2",
            "t": "text",
            "text": "nên hòn núi cao”",
            "x": 7972,
            "y": 1555,
            "size": 48,
            "at": "l4:mountain",
            "color": "accent",
            "hl": [
              {
                "text": "nên hòn núi cao",
                "at": "l4:mountain"
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
          "say": "Monday again. Eight p.m. Same office, same Thảo.",
          "sub": "Lại thứ Hai. Tám giờ tối. Vẫn văn phòng ấy, vẫn Thảo ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I'm still at the office because the report isn't finished,",
          "sub": "“I'm still at the office because the report isn't finished,”",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "but I'll be home soon to have dinner with you.",
          "sub": "“but I'll be home soon to have dinner with you.”",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Because, but, to. Three trees together, and here is the mountain.",
          "sub": "Because, but, to. “Ba cây chụm lại nên hòn núi cao.”",
          "keys": [
            "Ba cây chụm lại nên hòn núi cao"
          ]
        }
      ],
      "ref": "outro,p2"
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
          }
        ],
        "items": [
          {
            "id": "j-ex",
            "t": "text",
            "text": "Bài tập: 5 câu ngắn",
            "x": 7932,
            "y": 1650,
            "size": 50,
            "at": "l1:five",
            "color": "coral",
            "hl": [
              {
                "text": "5 câu ngắn",
                "at": "l1:five"
              }
            ]
          },
          {
            "id": "j-ex2",
            "t": "text",
            "text": "→ 2–3 câu dài, theo 3 bước",
            "x": 7932,
            "y": 1720,
            "size": 44,
            "at": "l2:three steps"
          },
          {
            "id": "j-ex3",
            "t": "text",
            "text": "Cất đi · học xong làm lại",
            "x": 8752,
            "y": 1775,
            "size": 44,
            "at": "l3:keep",
            "color": "accent",
            "hl": [
              {
                "text": "làm lại",
                "at": "l3:again"
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
          "say": "Your turn. Write five short sentences about your own workday.",
          "sub": "Đến lượt bạn. Viết năm câu ngắn về một ngày làm việc của mình.",
          "keys": [
            "năm câu ngắn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then rewrite them as two or three long ones, with Dũng's three steps.",
          "sub": "Rồi viết lại thành hai ba câu dài, theo ba bước của Dũng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Keep it. After the whole series, do it again, and compare the two versions.",
          "sub": "Cất bản này đi. Học xong cả chuỗi, làm lại một lần nữa rồi so sánh hai bản.",
          "keys": [
            "so sánh hai bản"
          ]
        }
      ],
      "ref": "p16"
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
            "at": "l1:separate",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:small",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:relationship",
            "fit": "I",
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
            "y": 560,
            "at": "l1:separate+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8652,
            "y": 260,
            "at": "l2:small+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 6694,
            "y": 1360,
            "at": "l3:relationship+900"
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
          "say": "So: short sentences are correct, but separate.",
          "sub": "Tóm lại: câu ngắn đúng, nhưng rời.",
          "keys": [
            "đúng, nhưng rời"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Long sentences start with small tools: because, so, to, in, on, at, enough.",
          "sub": "Câu dài bắt đầu từ công cụ nhỏ: because, so, to, in, on, at, enough.",
          "keys": [
            "công cụ nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Find the relationship first, then choose the tool.",
          "sub": "Tìm quan hệ trước, rồi mới chọn công cụ.",
          "keys": [
            "Tìm quan hệ trước"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next: lesson one. And, but, or, so, because, and where the comma goes.",
          "sub": "Bài tiếp: and, but, or, so, because, và dấu phẩy đặt ở đâu."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p3,p8,p15"
    },
    {
      "id": "s21",
      "module": "QUIZ-01",
      "data": {
        "q": "What is the takeaway from Dung's model?",
        "options": [
          "Delete half of the sentences, then the paragraph will be shorter",
          "Find how the ideas are related first, then choose the linking tool",
          "Pick the longest words first, then add as many commas as possible"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "writing-hand",
        "why": "Tìm quan hệ giữa các ý trước. Rồi chọn công cụ nối phù hợp."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the takeaway from Dung's model?",
          "sub": "Điều rút ra từ phần làm mẫu của Dũng là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Find how the ideas are related first, then choose the linking tool.",
          "sub": "Tìm quan hệ giữa các ý trước, rồi mới chọn công cụ nối."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[37]"
    },
    {
      "id": "s22",
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
          "say": "Write your five short sentences today. Then try the forty questions below.",
          "sub": "Hôm nay viết năm câu ngắn của bạn. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi grammar-adult-linking-sentences, bài 0 tổng) dựng theo hạt nhân (#136) + biến thể #144: Đét trái + bảng 10 ô theo MỘT TUẦN của Thảo (Thứ Hai 20:00 tin nhắn bốn câu cụt (HOOK-24) → 20:05 viết lại because/so/and → Thứ Ba mưa Dũng “so” → Thứ Tư 7:15 to chỉ mục đích → 21:00 “Khoan đã!” ôm sách cấu trúc khó → Thứ Năm họp với Sam “I am boring” → Thứ Sáu in/on/at, enough, very → Thứ Bảy kế hoạch học (Paul Nation) → Chủ Nhật Dũng làm mẫu ba bước → Thứ Hai sau 20:00 tin nhắn mạch lạc, khép vòng). Nhân vật: Thảo (p2), Dũng (p14), Sam — w145/_series/grammar-adult-linking-sentences.md. Ngắt nhịp: BRK-08 tuần, DLG-01 (p7), BRK-04 bored/boring (p9), BRK-07 rehook (trước p14). Câu ca dao mở/khép: “Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao”. Câu đố questions[37].",
  "loop": {
    "open": "s00",
    "close": "s18"
  }
};
