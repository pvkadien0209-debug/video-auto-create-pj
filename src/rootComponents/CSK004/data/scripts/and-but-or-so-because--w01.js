// and-but-or-so-because--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "and-but-or-so-because--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "grammar-adult-linking-sentences",
    "slug": "and-but-or-so-because",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Dùng and, but, or, so, because thế nào cho đúng dấu câu?",
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
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "cloud-with-rain",
                "mobile-phone"
              ]
            },
            "at": "l1",
            "caption": "Thứ Ba · 7:30 · trời mưa",
            "icon": "cloud-with-rain"
          },
          {
            "id": "a-s1",
            "t": "text",
            "text": "Because I was tired,",
            "x": 60,
            "y": 110,
            "size": 52,
            "at": "l2:tired"
          },
          {
            "id": "a-s2",
            "t": "text",
            "text": "so I went home early.",
            "x": 60,
            "y": 180,
            "size": 52,
            "at": "l2:home",
            "hl": [
              {
                "text": "so",
                "at": "l4:connector"
              }
            ]
          },
          {
            "id": "a-bA",
            "t": "box",
            "x": 60,
            "y": 280,
            "w": 720,
            "h": 90,
            "at": "l3:right",
            "stroke": 5
          },
          {
            "id": "a-A",
            "t": "text",
            "text": "A. Đúng: như “vì… nên…”",
            "x": 85,
            "y": 292,
            "size": 44,
            "at": "l3:right+200"
          },
          {
            "id": "a-bB",
            "t": "box",
            "x": 60,
            "y": 395,
            "w": 720,
            "h": 90,
            "at": "l3:wrong",
            "stroke": 5
          },
          {
            "id": "a-B",
            "t": "text",
            "text": "B. Sai: thừa một từ nối",
            "x": 85,
            "y": 407,
            "size": 44,
            "at": "l3:wrong+200"
          },
          {
            "id": "a-Ax",
            "t": "strike",
            "over": "a-A",
            "at": "l4:most"
          },
          {
            "id": "a-Br",
            "t": "ring",
            "around": [
              "a-B"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l4:B"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Một núi không thể có hai hổ”",
            "x": 60,
            "y": 560,
            "size": 50,
            "at": "l5:mountain",
            "color": "accent",
            "hl": [
              {
                "text": "hai hổ",
                "at": "l5:tigers"
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
          "say": "Seven thirty, a rainy Tuesday. Meet Dũng, from our furniture workshop, texting about yesterday.",
          "sub": "Bảy rưỡi sáng thứ Ba, trời mưa. Đây là Dũng, ở xưởng đồ gỗ, đang nhắn tin kể chuyện hôm qua."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Because I was tired, so I went home early.",
          "sub": "“Because I was tired, so I went home early.”",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Quick guess. Right, because Vietnamese says vì… nên…? Or wrong?",
          "sub": "Đoán nhanh nhé. Đúng, vì tiếng Việt vẫn nói “vì… nên…”? Hay sai?",
          "keys": [
            "Đúng",
            "Hay sai?"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Most of us pick A. The answer is B: one connector too many.",
          "sub": "Phần đông chọn A. Đáp án là B: thừa một từ nối.",
          "keys": [
            "thừa một từ nối"
          ],
          "wait": 1500
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "One mountain can't hold two tigers. Here, because and so are the tigers.",
          "sub": "“Một núi không thể có hai hổ.” Because và so chính là hai con hổ.",
          "keys": [
            "Một núi không thể có hai hổ"
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
      "ref": "intro,p10"
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
            "text": "5 từ nối: phẩy ở đâu?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:comma",
            "hl": [
              {
                "text": "phẩy ở đâu?",
                "at": "l1:comma"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "and → thêm ý",
            "x": 2028,
            "y": 170,
            "size": 48,
            "at": "l2:adds"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "but → ý khác, bất ngờ",
            "x": 2028,
            "y": 240,
            "size": 48,
            "at": "l2:surprising"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "or → lựa chọn",
            "x": 2028,
            "y": 310,
            "size": 48,
            "at": "l2:choice"
          },
          {
            "id": "b-4",
            "t": "text",
            "text": "because → lý do",
            "x": 2868,
            "y": 170,
            "size": 48,
            "at": "l3:reason"
          },
          {
            "id": "b-5",
            "t": "text",
            "text": "so → kết quả",
            "x": 2868,
            "y": 240,
            "size": 48,
            "at": "l3:result"
          },
          {
            "id": "b-c",
            "t": "text",
            "text": ", but  · , so",
            "x": 2028,
            "y": 420,
            "size": 60,
            "at": "l4:before",
            "color": "accent",
            "hl": [
              {
                "text": ", but",
                "at": "l4:but"
              },
              {
                "text": ", so",
                "at": "l4:so"
              }
            ]
          },
          {
            "id": "b-bc",
            "t": "text",
            "text": "because giữa câu: không phẩy",
            "x": 2868,
            "y": 420,
            "size": 42,
            "at": "l4:middle"
          },
          {
            "id": "b-tr",
            "t": "text",
            "text": "2 bẫy: because + so; because of",
            "x": 2028,
            "y": 560,
            "size": 42,
            "at": "l5:traps",
            "color": "coral",
            "hl": [
              {
                "text": "2 bẫy",
                "at": "l5:traps"
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
          "say": "So how do you use and, but, or, so and because, and where does the comma go?",
          "sub": "Vậy dùng and, but, or, so, because thế nào cho đúng dấu câu?",
          "keys": [
            "đúng dấu câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Short answer. And adds. But brings something different or surprising. Or gives a choice.",
          "sub": "Trả lời ngắn: and thêm ý, but đưa ý khác hoặc bất ngờ, or đưa lựa chọn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Because gives the reason. So gives the result.",
          "sub": "Because nêu lý do, so nêu kết quả.",
          "keys": [
            "lý do",
            "kết quả"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A comma usually goes before but and so. Because in the middle needs none.",
          "sub": "Dấu phẩy thường đứng trước but và so; because đứng giữa câu thì không cần.",
          "keys": [
            "trước but và so"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Plus two Vietnamese traps: because with so, and a full clause after because of.",
          "sub": "Thêm hai bẫy người Việt hay mắc: viết cả because lẫn so, và đặt mệnh đề sau because of.",
          "keys": [
            "hai bẫy"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s02",
      "module": "BRK-08",
      "data": {
        "title": "Một ngày thứ Ba mưa",
        "current": 0,
        "points": [
          {
            "label": "7:30",
            "sub": "Dũng nhắn tin",
            "illus": "mobile-phone"
          },
          {
            "label": "7:45",
            "sub": "Thảo trên xe buýt",
            "illus": "bus"
          },
          {
            "label": "9:30",
            "sub": "Chị Sam tới",
            "illus": "teacup-without-handle"
          },
          {
            "label": "14:00",
            "sub": "Ghế mẫu giao trễ",
            "illus": "delivery-truck"
          },
          {
            "label": "16:30",
            "sub": "Email cho sếp",
            "illus": "e-mail"
          },
          {
            "label": "T4 7:30",
            "sub": "Nhắn lại",
            "illus": "check-mark-button"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One rainy Tuesday, from a text at seven thirty to the next morning.",
          "sub": "Một ngày thứ Ba mưa, từ tin nhắn lúc bảy rưỡi đến sáng hôm sau."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Five little words, two traps, and a lot of rain.",
          "sub": "Năm từ nối nhỏ, hai cái bẫy, và rất nhiều mưa.",
          "keys": [
            "hai cái bẫy"
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
            "text": "① 7:45 · Năm từ, năm việc",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:seven"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "street",
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
                "bus",
                "umbrella"
              ]
            },
            "at": "l1:thảo",
            "caption": "Thứ Ba · 7:45 · xe buýt chậm",
            "icon": "bus"
          },
          {
            "id": "c-and",
            "t": "text",
            "text": "I bought bread and I made soup.",
            "x": 3996,
            "y": 170,
            "size": 40,
            "at": "l4:bread",
            "hl": [
              {
                "text": "and",
                "at": "l4:adds"
              }
            ]
          },
          {
            "id": "c-or",
            "t": "text",
            "text": "Would you like tea or coffee?",
            "x": 3996,
            "y": 245,
            "size": 40,
            "at": "l4:tea",
            "hl": [
              {
                "text": "or",
                "at": "l4:choice"
              }
            ]
          },
          {
            "id": "c-but",
            "t": "text",
            "text": "She wants to come,",
            "x": 3996,
            "y": 310,
            "size": 40,
            "at": "l5:come"
          },
          {
            "id": "c-but2",
            "t": "text",
            "text": "but she is busy.",
            "x": 4036,
            "y": 365,
            "size": 40,
            "at": "l5:busy",
            "hl": [
              {
                "text": "but",
                "at": "l5:surprising"
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
          "say": "Stop one: seven forty-five. And this is Thảo, an accountant, on a very slow bus.",
          "sub": "Chặng một: bảy giờ bốn lăm. Còn đây là Thảo, kế toán, trên một chuyến xe buýt rất chậm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "It's raining, so the bus is slow. Again.",
          "sub": "“It's raining, so the bus is slow.” Lại thế.",
          "face": "worried",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "On LearnEnglish Teens, British Council gives each linking word its own job.",
          "sub": "Trên LearnEnglish Teens, British Council giao mỗi từ nối một việc riêng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And adds information: I bought bread and I made soup. Or offers a choice: tea or coffee?",
          "sub": "And thêm thông tin: “I bought bread and I made soup.” Or đưa lựa chọn: “Would you like tea or coffee?”"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "But brings something different or surprising: She wants to come, but she is busy.",
          "sub": "But đưa thông tin khác hoặc bất ngờ: “She wants to come, but she is busy.”",
          "keys": [
            "khác hoặc bất ngờ"
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
          }
        ],
        "items": [
          {
            "id": "c-bc",
            "t": "text",
            "text": "We stayed inside because it was raining.",
            "x": 3996,
            "y": 440,
            "size": 36,
            "at": "l1:stayed",
            "hl": [
              {
                "text": "because",
                "at": "l1:reason"
              }
            ]
          },
          {
            "id": "c-so",
            "t": "text",
            "text": "It was raining, so we stayed inside.",
            "x": 3996,
            "y": 505,
            "size": 36,
            "at": "l1:result",
            "hl": [
              {
                "text": "so",
                "at": "l1:result"
              }
            ]
          },
          {
            "id": "c-ord",
            "t": "text",
            "text": "Đổi chiều: kết quả ⇄ lý do",
            "x": 3996,
            "y": 570,
            "size": 38,
            "at": "l2:order",
            "color": "accent"
          },
          {
            "id": "c-cl",
            "t": "text",
            "text": "because, so: nối 2 mệnh đề",
            "x": 4816,
            "y": 685,
            "size": 42,
            "at": "l3:clauses",
            "hl": [
              {
                "text": "2 mệnh đề",
                "at": "l3:clauses"
              }
            ]
          },
          {
            "id": "c-few",
            "t": "text",
            "text": "Học vài từ, dùng thật quen",
            "x": 3996,
            "y": 650,
            "size": 42,
            "at": "l4:few",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Because gives the reason: We stayed inside because it was raining. So gives the result: It was raining, so we stayed inside.",
          "sub": "Because nêu lý do: “We stayed inside because it was raining.” So nêu kết quả: “It was raining, so we stayed inside.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Same story, different order. Because puts the result first. So goes from reason to result.",
          "sub": "Cùng một chuyện, khác thứ tự: câu because đặt kết quả trước, câu so đi từ lý do sang kết quả.",
          "keys": [
            "khác thứ tự"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And, or, but join two of the same kind: two words, or two clauses. Because and so join clauses.",
          "sub": "And, or, but nối hai phần cùng loại: hai từ, hoặc hai mệnh đề. Because và so thì nối hai mệnh đề."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The same page says: learn a few at a time, and use them well.",
          "sub": "Trang này cũng khuyên: mỗi lần học vài từ nối, dùng thật quen.",
          "keys": [
            "dùng thật quen"
          ]
        }
      ],
      "ref": "p2,p3"
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
          },
          {
            "at": "l5",
            "fit": [
              "d-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 7:50 · Đặt dấu phẩy",
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
                  "id": "thao",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "bus",
                "nine-oclock"
              ]
            },
            "at": "l1:team",
            "caption": "Thứ Ba · 7:50 · nhắn nhóm",
            "icon": "nine-oclock"
          },
          {
            "id": "d-o",
            "t": "text",
            "text": "Meeting at nine. Late. Bus slow.",
            "x": 5964,
            "y": 170,
            "size": 42,
            "at": "l2:nine",
            "color": "muted"
          },
          {
            "id": "d-r",
            "t": "text",
            "text": "trễ = ý khác · xe chậm = lý do",
            "x": 5964,
            "y": 250,
            "size": 42,
            "at": "l3:reason",
            "hl": [
              {
                "text": "lý do",
                "at": "l3:reason"
              }
            ]
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "The meeting is at nine,",
            "x": 5964,
            "y": 340,
            "size": 46,
            "at": "l5:nine"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "but I will be late",
            "x": 5964,
            "y": 410,
            "size": 46,
            "at": "l5:late",
            "hl": [
              {
                "text": "but",
                "at": "l6:but"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "because my bus is slow.",
            "x": 5964,
            "y": 480,
            "size": 46,
            "at": "l5:slow",
            "hl": [
              {
                "text": "because",
                "at": "l6:because"
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
          "say": "Stop two: seven fifty. Thảo has three short sentences for her team.",
          "sub": "Chặng hai: bảy giờ năm mươi. Thảo có ba câu ngắn định nhắn cho nhóm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "The meeting is at nine. I will be late. My bus is slow.",
          "sub": "“The meeting is at nine. I will be late. My bus is slow.”",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Step one, the relationships. Being late is different from the plan. The slow bus is the reason.",
          "sub": "Bước một, tìm quan hệ: đến trễ là điều khác với dự định, xe buýt chậm là lý do.",
          "keys": [
            "lý do"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Step two, the words: but for the different idea, because for the reason.",
          "sub": "Bước hai, chọn từ nối: but cho ý khác, because cho lý do."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "The meeting is at nine, but I will be late because my bus is slow.",
          "sub": "“The meeting is at nine, but I will be late because my bus is slow.”",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Step three, punctuation. A comma before but. Because sits in the middle, so no comma.",
          "sub": "Bước ba, dấu câu: but có dấu phẩy phía trước; because đứng giữa câu nên không cần.",
          "keys": [
            "but có dấu phẩy phía trước"
          ]
        }
      ],
      "ref": "p7"
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
            "id": "d-idp",
            "t": "text",
            "text": "The match was postponed",
            "x": 5964,
            "y": 570,
            "size": 40,
            "at": "l2:match"
          },
          {
            "id": "d-idp2",
            "t": "text",
            "text": "because the pitch was flooded.",
            "x": 5964,
            "y": 625,
            "size": 40,
            "at": "l2:flooded",
            "hl": [
              {
                "text": "because",
                "at": "l2:because"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Phẩy trước but, so",
            "x": 6784,
            "y": 685,
            "size": 50,
            "at": "l3:before",
            "color": "accent",
            "hl": [
              {
                "text": "but, so",
                "at": "l3:but"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: LearnEnglish Teens (British Council); IDP IELTS",
            "x": 5964,
            "y": 735,
            "size": 24,
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
          "say": "In LearnEnglish Teens, every but or so between two clauses has a comma before it.",
          "sub": "Trong các câu mẫu của LearnEnglish Teens, but và so đứng giữa hai mệnh đề đều có dấu phẩy phía trước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Because in the middle, after the main clause, needs none. IDP's example: The match was postponed because the pitch was flooded.",
          "sub": "Because đứng giữa câu, sau mệnh đề chính, thì không cần phẩy. Ví dụ của IDP: “The match was postponed because the pitch was flooded.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The rule: a comma before but and so. Because in the middle, no comma.",
          "sub": "Rút ra: phẩy trước but và so; because ở giữa câu thì không cần phẩy.",
          "keys": [
            "phẩy trước but và so"
          ]
        }
      ],
      "ref": "p4,p6,p8"
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
            "at": "l4",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-t",
            "t": "text",
            "text": "③ 9:30 · Chị Sam tới",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
            "y": 150,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "give",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "face": "happy",
                  "pose": "wave"
                }
              ],
              "props": [
                "teacup-without-handle",
                "umbrella"
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
            "at": "l1:sam",
            "caption": "Thứ Ba · 9:30 · khách tới thăm xưởng",
            "icon": "teacup-without-handle"
          },
          {
            "id": "e-to",
            "t": "text",
            "text": "tea or coffee",
            "x": 7932,
            "y": 170,
            "size": 56,
            "at": "l2:coffee",
            "hl": [
              {
                "text": "or",
                "at": "l4:two single words"
              }
            ]
          },
          {
            "id": "e-no",
            "t": "text",
            "text": "→ 2 từ đơn: không phẩy",
            "x": 7932,
            "y": 260,
            "size": 46,
            "at": "l4:no comma",
            "color": "accent",
            "hl": [
              {
                "text": "không phẩy",
                "at": "l4:no comma"
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
          "say": "Stop three: nine thirty. Sam, a buyer from abroad, arrives to see the workshop, soaking wet.",
          "sub": "Chặng ba: chín rưỡi. Chị Sam, khách mua hàng nước ngoài, tới xem xưởng, ướt sũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Welcome, Sam! Would you like tea or coffee?",
          "sub": "Chào chị Sam! “Would you like tea or coffee?”",
          "face": "happy",
          "pose": "give"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Tea, please. Hot tea!",
          "sub": "Trà nhé. Trà nóng!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Tea or coffee: or joins two single words, so no comma is needed.",
          "sub": "“Tea or coffee”: or chỉ nối hai từ đơn, nên không cần dấu phẩy.",
          "keys": [
            "không cần dấu phẩy"
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
            "at": "l1",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
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
            "id": "e-sam",
            "t": "text",
            "text": "It's raining so I'm late",
            "x": 7932,
            "y": 350,
            "size": 46,
            "at": "l1:raining",
            "color": "muted"
          },
          {
            "id": "e-inf",
            "t": "text",
            "text": "Tin bạn bè: bỏ phẩy được",
            "x": 7932,
            "y": 440,
            "size": 46,
            "at": "l3:informal",
            "hl": [
              {
                "text": "bỏ phẩy được",
                "at": "l3:leaves"
              }
            ]
          },
          {
            "id": "e-wk",
            "t": "text",
            "text": "Email công việc: giữ phẩy",
            "x": 7932,
            "y": 520,
            "size": 50,
            "at": "l4:work email",
            "color": "accent",
            "hl": [
              {
                "text": "giữ phẩy",
                "at": "l4:keep"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: LearnEnglish, trả lời bình luận bài Intensifiers",
            "x": 7932,
            "y": 730,
            "size": 24,
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
          "who": "sam",
          "say": "Sorry I'm late. I texted you: It's raining so I'm late. No comma, I know!",
          "sub": "Xin lỗi chị tới trễ. Chị đã nhắn: “It's raining so I'm late.” Thiếu dấu phẩy, chị biết rồi!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The LearnEnglish team says: a comma normally comes before so, but informal writing often leaves it out.",
          "sub": "Nhóm LearnEnglish nói: trước so thường có dấu phẩy, nhưng khi viết thân mật người ta hay bỏ.",
          "keys": [
            "hay bỏ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "So a text to a friend isn't really wrong. In a work email, keep the comma.",
          "sub": "Vì thế tin nhắn bạn bè thiếu phẩy chưa hẳn là sai; còn email công việc thì nên giữ.",
          "keys": [
            "email công việc thì nên giữ"
          ]
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
            "at": "l3:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 11:00 · Because hay so?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:shows"
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
                  "id": "dung",
                  "side": "left",
                  "pose": "shrug",
                  "face": "thinking"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "carpentry-saw",
                "mobile-phone"
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
            "at": "l1:workshop",
            "caption": "Thứ Ba · 11:00 · xưởng gỗ",
            "icon": "carpentry-saw"
          },
          {
            "id": "f-vn",
            "t": "text",
            "text": "vì… nên… = 2 từ, bình thường",
            "x": 60,
            "y": 1260,
            "size": 42,
            "at": "l2:vì",
            "color": "muted"
          },
          {
            "id": "f-en",
            "t": "text",
            "text": "1 cặp ý → 1 từ nối",
            "x": 60,
            "y": 1340,
            "size": 52,
            "at": "l3:one",
            "color": "accent",
            "hl": [
              {
                "text": "1 từ nối",
                "at": "l3:one"
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
          "say": "Stop four: eleven a.m., in the workshop. Thảo shows Dũng his morning text.",
          "sub": "Chặng bốn: mười một giờ, ở xưởng. Thảo cho Dũng xem lại tin nhắn sáng nay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "But in Vietnamese we say vì… nên… Two words. That's normal!",
          "sub": "Nhưng tiếng Việt mình nói “vì… nên…”, hai chữ. Bình thường mà!",
          "pose": "shrug",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "In English, one pair of ideas gets one word. Pick one.",
          "sub": "Tiếng Anh thì một cặp ý chỉ một từ nối. Chọn một thôi.",
          "pose": "explain"
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s10",
      "module": "BRK-04",
      "data": {
        "title": "Vì… nên…",
        "wrong": "Because I was tired, so I went home",
        "right": "I was tired, so I went home",
        "wrongIllus": "tiger-face",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Not: Because I was tired, so I went home.",
          "sub": "Không viết: “Because I was tired, so I went home.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "But: I was tired, so I went home.",
          "sub": "Mà là: “I was tired, so I went home.”",
          "keys": [
            "I was tired, so I went home"
          ]
        }
      ],
      "ref": "p10"
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
            "id": "f-sw",
            "t": "text",
            "text": "Đổi từ nối → đổi thứ tự ý",
            "x": 60,
            "y": 1440,
            "size": 48,
            "at": "l1:order",
            "hl": [
              {
                "text": "đổi thứ tự ý",
                "at": "l1:order"
              }
            ]
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "Because I was tired, I went home.",
            "x": 60,
            "y": 1530,
            "size": 40,
            "at": "l2:every"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "I was tired, so I went home.",
            "x": 60,
            "y": 1600,
            "size": 40,
            "at": "l2:connector"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "1 cặp ý = because HOẶC so",
            "x": 880,
            "y": 1775,
            "size": 46,
            "at": "l3:either",
            "color": "accent",
            "hl": [
              {
                "text": "HOẶC",
                "at": "l3:either"
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
          "say": "Because goes before the reason, so before the result. Change the word, and you change the order too.",
          "sub": "Because đứng trước lý do, so đứng trước kết quả. Muốn đổi từ nối thì phải đổi luôn thứ tự hai ý.",
          "keys": [
            "đổi luôn thứ tự hai ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In every example from LearnEnglish Teens and IDP, one pair of ideas gets one connector.",
          "sub": "Trong mọi câu mẫu của LearnEnglish Teens và IDP, một cặp ý chỉ được nối bằng một từ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "So: one pair of ideas, one word. Either because, or so.",
          "sub": "Rút ra: một cặp ý chỉ cần một từ nối, because hoặc so.",
          "keys": [
            "because hoặc so"
          ]
        }
      ],
      "ref": "p9,p10,p11"
    },
    {
      "id": "s12",
      "module": "DLG-01",
      "data": {
        "set": "online",
        "label": "Thứ Ba · 14:00 · giao trễ",
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
          "label": "because of + mệnh đề",
          "why": "Because of là cụm giới từ, phía sau là danh từ; “the traffic was heavy” là mệnh đề, có chủ ngữ và động từ.",
          "rule": "Có động từ: because · chỉ danh từ: because of"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Sorry, the delivery is late because of the traffic was heavy.",
          "sub": "“Sorry, the delivery is late because of the traffic was heavy.”",
          "pose": "phone",
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
          "say": "The traffic was heavy has a subject and a verb. That's a clause. Because of can't carry it.",
          "sub": "“The traffic was heavy” có chủ ngữ, có động từ: đó là mệnh đề. Because of không gánh nổi.",
          "keys": [
            "Because of không gánh nổi"
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
          "who": "dung",
          "say": "Sorry, the delivery is late because the traffic was heavy.",
          "sub": "“Sorry, the delivery is late because the traffic was heavy.”",
          "phase": "redo",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "sam",
          "say": "No problem, Dũng. Drive safely!",
          "sub": "Không sao, Dũng. Lái xe cẩn thận nhé!",
          "phase": "redo",
          "face": "happy"
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
            "at": "l4",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ 14:10 · because of?",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:ten"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "delivery-truck",
                "cloud-with-rain"
              ]
            },
            "at": "l1:ten",
            "caption": "Thứ Ba · 14:10 · Dũng sửa tin nhắn",
            "icon": "delivery-truck"
          },
          {
            "id": "g-c",
            "t": "text",
            "text": "because + chủ ngữ + động từ",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l2:clause",
            "hl": [
              {
                "text": "chủ ngữ + động từ",
                "at": "l2:clause"
              }
            ]
          },
          {
            "id": "g-c2",
            "t": "text",
            "text": "…because it rained.",
            "x": 2068,
            "y": 1330,
            "size": 42,
            "at": "l2:rained",
            "color": "muted"
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "because of + danh từ, V-ing",
            "x": 2028,
            "y": 1410,
            "size": 44,
            "at": "l3:noun",
            "hl": [
              {
                "text": "danh từ, V-ing",
                "at": "l3:noun"
              }
            ]
          },
          {
            "id": "g-n2",
            "t": "text",
            "text": "…because of the heavy rain.",
            "x": 2068,
            "y": 1480,
            "size": 42,
            "at": "l3:heavy rain",
            "color": "muted"
          },
          {
            "id": "g-alt",
            "t": "text",
            "text": "…because of the heavy traffic ✓",
            "x": 2028,
            "y": 1570,
            "size": 40,
            "at": "l4:heavy traffic",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five: ten minutes later. Why did Dũng's first text break?",
          "sub": "Chặng năm: mười phút sau. Vì sao tin nhắn đầu của Dũng bị gãy?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IDP IELTS: because is a conjunction, so a full clause follows. The picnic was cancelled because it rained.",
          "sub": "Theo IDP IELTS, because là liên từ, phía sau phải là mệnh đề đủ chủ ngữ và động từ: “The picnic was cancelled because it rained.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Because of is a preposition phrase. A noun, a pronoun or an ing form follows: because of the heavy rain.",
          "sub": "Because of là cụm giới từ, phía sau là danh từ, đại từ hoặc V-ing: “because of the heavy rain.”",
          "keys": [
            "cụm giới từ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "So I can also keep of: because of the heavy traffic.",
          "sub": "Vậy em cũng có thể giữ of: “because of the heavy traffic.”",
          "face": "happy",
          "pose": "phone"
        }
      ],
      "ref": "p12,p15"
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
              "g-e1",
              "g-e2",
              "g-e3"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "G",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "g-e1",
            "t": "text",
            "text": "Because of she was tired ✗",
            "x": 2028,
            "y": 1645,
            "size": 32,
            "at": "l1:she",
            "color": "coral"
          },
          {
            "id": "g-e2",
            "t": "text",
            "text": "Because the storm ✗",
            "x": 2468,
            "y": 1645,
            "size": 32,
            "at": "l1:storm",
            "color": "coral"
          },
          {
            "id": "g-e3",
            "t": "text",
            "text": "Because raining ✗",
            "x": 2028,
            "y": 1695,
            "size": 32,
            "at": "l2:raining",
            "color": "coral"
          },
          {
            "id": "g-tf",
            "t": "text",
            "text": "tired → tiredness · raining → the rain",
            "x": 2028,
            "y": 1745,
            "size": 32,
            "at": "l3:tiredness"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Động từ: because · danh từ: because of",
            "x": 2028,
            "y": 1795,
            "size": 34,
            "at": "l4:verb",
            "color": "accent",
            "hl": [
              {
                "text": "because of",
                "at": "l4:only a noun"
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
          "say": "IDP lists three common mistakes. Because of she was tired: drop the of. Because the storm: add of.",
          "sub": "IDP nêu ba lỗi hay gặp. “Because of she was tired”: bỏ of. “Because the storm”: thêm of."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And because raining: add a subject and a verb. Because it was raining.",
          "sub": "Và “Because raining”: thêm chủ ngữ, động từ thành “Because it was raining”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "To switch, turn the idea into a noun: because of her tiredness, because of the rain.",
          "sub": "Muốn đổi sang because of thì đổi thành danh từ: “because of her tiredness”, “because of the rain”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The quick rule: a verb follows, use because. Only a noun follows, use because of.",
          "sub": "Quy tắc nhanh: phía sau có động từ thì dùng because; chỉ có danh từ thì dùng because of.",
          "keys": [
            "chỉ có danh từ thì dùng because of"
          ]
        }
      ],
      "ref": "p13,p14,p16"
    },
    {
      "id": "s15",
      "module": "BRK-07",
      "data": {
        "question": "Một câu chỉ có because, đứng một mình được không?",
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
          "say": "Can a sentence with only because stand on its own?",
          "sub": "Một câu chỉ có because, đứng một mình được không?",
          "keys": [
            "đứng một mình"
          ]
        }
      ],
      "ref": "p19"
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
            "at": "l3",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 16:30 · Email cho sếp",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:four"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "phone",
                  "face": "thinking"
                },
                {
                  "id": "binh",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "neutral"
                }
              ],
              "props": [
                "e-mail",
                "bar-chart"
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
            "at": "l1:bình",
            "caption": "Thứ Ba · 16:30 · báo cáo trễ một ngày",
            "icon": "e-mail"
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "I finished the report.",
            "x": 3996,
            "y": 1260,
            "size": 42,
            "at": "l2:report"
          },
          {
            "id": "h-2",
            "t": "text",
            "text": "But I need one more day.",
            "x": 3996,
            "y": 1325,
            "size": 42,
            "at": "l2:day",
            "hl": [
              {
                "text": "But",
                "at": "l4:but"
              }
            ]
          },
          {
            "id": "h-3",
            "t": "text",
            "text": "Because the data is not ready.",
            "x": 3996,
            "y": 1390,
            "size": 40,
            "at": "l2:ready",
            "color": "coral",
            "hl": [
              {
                "text": "Because",
                "at": "l4:because"
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
          "say": "Stop six: four thirty. Thảo emails her boss, Bác Bình, the director.",
          "sub": "Chặng sáu: bốn rưỡi chiều. Thảo viết email cho sếp là Bác Bình, giám đốc công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I finished the report. But I need one more day. Because the data is not ready.",
          "sub": "“I finished the report. But I need one more day. Because the data is not ready.”",
          "pose": "phone",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Puzzle for you: how would you fix it?",
          "sub": "Thử nghĩ xem: sửa thế nào?",
          "keys": [
            "sửa thế nào"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The third sentence is only a because clause. And the second one opens with But.",
          "sub": "Câu thứ ba chỉ có mệnh đề because. Câu thứ hai lại mở đầu bằng But.",
          "wait": 1200
        }
      ],
      "ref": "p19"
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
            "at": "l1",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-2x",
            "t": "strike",
            "over": "h-2",
            "at": "l1:finished"
          },
          {
            "id": "h-3x",
            "t": "strike",
            "over": "h-3",
            "at": "l1:because"
          },
          {
            "id": "h-f1",
            "t": "text",
            "text": "I finished the report, but",
            "x": 3996,
            "y": 1480,
            "size": 40,
            "at": "l1:but",
            "color": "accent"
          },
          {
            "id": "h-f2",
            "t": "text",
            "text": "I need one more day because",
            "x": 3996,
            "y": 1540,
            "size": 40,
            "at": "l1:day",
            "color": "accent",
            "hl": [
              {
                "text": "because",
                "at": "l1:because"
              }
            ]
          },
          {
            "id": "h-f3",
            "t": "text",
            "text": "the data is not ready.",
            "x": 3996,
            "y": 1600,
            "size": 40,
            "at": "l1:ready",
            "color": "accent"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Because không đứng một mình",
            "x": 4816,
            "y": 1775,
            "size": 46,
            "at": "l4:alone",
            "color": "accent",
            "hl": [
              {
                "text": "không đứng một mình",
                "at": "l4:alone"
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
          "say": "I finished the report, but I need one more day because the data is not ready.",
          "sub": "“I finished the report, but I need one more day because the data is not ready.”",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "binh",
          "say": "Clear. One more day, then.",
          "sub": "Rõ rồi. Thêm một ngày nhé.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Because needs a main clause, so attach it. But joins the first sentence with a comma.",
          "sub": "Because cần một mệnh đề chính, nên gắn vào câu trước; But nối vào câu đầu bằng dấu phẩy."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A because clause never stands alone. Attach it to the main sentence.",
          "sub": "Rút ra: mệnh đề because không đứng một mình; hãy gắn nó vào câu chính.",
          "keys": [
            "không đứng một mình"
          ]
        }
      ],
      "ref": "p19,p20,p18"
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
            "id": "h-st",
            "t": "text",
            "text": "Because the roads were closed,",
            "x": 3996,
            "y": 1670,
            "size": 36,
            "at": "l1:roads",
            "hl": [
              {
                "text": "closed,",
                "at": "l1:comma"
              }
            ]
          },
          {
            "id": "h-st2",
            "t": "text",
            "text": "we took the train.",
            "x": 4536,
            "y": 1720,
            "size": 36,
            "at": "l1:train"
          },
          {
            "id": "h-but",
            "t": "text",
            "text": "Khi viết: tránh mở câu bằng But",
            "x": 3996,
            "y": 1790,
            "size": 34,
            "at": "l3:avoid",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Because can also start a sentence, with a comma after the reason: Because the roads were closed, we took the train.",
          "sub": "Because cũng đứng đầu câu được, khi đó phẩy sau mệnh đề lý do: “Because the roads were closed, we took the train.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Because of too: Because of the road closures, we took the train.",
          "sub": "Because of cũng vậy: “Because of the road closures, we took the train.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But LearnEnglish Teens says: in writing, avoid starting with and, but or so. In speech and chat, it's common.",
          "sub": "Còn với and, but, so, LearnEnglish Teens khuyên tránh mở đầu câu khi viết, dù lúc nói và nhắn tin thì rất phổ biến.",
          "keys": [
            "tránh mở đầu câu khi viết"
          ]
        }
      ],
      "ref": "p17,p18"
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
            "text": "⑦ 17:30 · Soát tin nhắn",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:five thirty"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 1240,
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
                "clipboard"
              ]
            },
            "at": "l1:five thirty",
            "caption": "Thứ Ba · 17:30 · trước khi bấm gửi",
            "icon": "clipboard"
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1250,
            "w": 40,
            "h": 40,
            "at": "l2:adding",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1234,
            "size": 50,
            "at": "l2:adding+500",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "Thêm ý: and · lựa chọn: or",
            "x": 6026,
            "y": 1242,
            "size": 36,
            "at": "l2:adding+150"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1322,
            "w": 40,
            "h": 40,
            "at": "l2:but",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1306,
            "size": 50,
            "at": "l2:but+500",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Ý khác: , but",
            "x": 6026,
            "y": 1314,
            "size": 36,
            "at": "l2:but+150"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1394,
            "w": 40,
            "h": 40,
            "at": "l3:because",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1378,
            "size": 50,
            "at": "l3:because+500",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "Lý do: because + mệnh đề",
            "x": 6026,
            "y": 1386,
            "size": 36,
            "at": "l3:because+150"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 5964,
            "y": 1466,
            "w": 40,
            "h": 40,
            "at": "l3:of",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1450,
            "size": 50,
            "at": "l3:of+500",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "Danh từ: because of",
            "x": 6026,
            "y": 1458,
            "size": 36,
            "at": "l3:of+150"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1538,
            "w": 40,
            "h": 40,
            "at": "l3:so",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1522,
            "size": 50,
            "at": "l3:so+500",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Kết quả: , so",
            "x": 6026,
            "y": 1530,
            "size": 36,
            "at": "l3:so+150"
          },
          {
            "id": "i-c5",
            "t": "box",
            "x": 5964,
            "y": 1610,
            "w": 40,
            "h": 40,
            "at": "l4:one",
            "stroke": 5
          },
          {
            "id": "i-k5",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1594,
            "size": 50,
            "at": "l4:one+500",
            "color": "accent"
          },
          {
            "id": "i-l5",
            "t": "text",
            "text": "Mỗi cặp ý một từ nối",
            "x": 6026,
            "y": 1602,
            "size": 36,
            "at": "l4:one+150"
          },
          {
            "id": "i-c6",
            "t": "box",
            "x": 5964,
            "y": 1682,
            "w": 40,
            "h": 40,
            "at": "l4:attached",
            "stroke": 5
          },
          {
            "id": "i-k6",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1666,
            "size": 50,
            "at": "l4:attached+500",
            "color": "accent"
          },
          {
            "id": "i-l6",
            "t": "text",
            "text": "because gắn câu chính",
            "x": 6026,
            "y": 1674,
            "size": 36,
            "at": "l4:attached+150"
          },
          {
            "id": "i-al",
            "t": "text",
            "text": "Sau đó: although, even though",
            "x": 6784,
            "y": 1775,
            "size": 40,
            "at": "l5:although",
            "color": "muted",
            "hl": [
              {
                "text": "although",
                "at": "l5:although"
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
          "say": "Stop seven: five thirty. Before sending anything, Thảo checks seven things.",
          "sub": "Chặng bảy: năm rưỡi chiều. Trước khi gửi, Thảo soát bảy điều.",
          "keys": [
            "soát bảy điều"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Adding? And. A choice? Or. Something different? Comma, but.",
          "sub": "Thêm ý: and. Lựa chọn: or. Ý khác hoặc bất ngờ: but, có phẩy phía trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A reason? Because plus a clause, because of plus a noun. A result? Comma, so.",
          "sub": "Lý do: because + mệnh đề, because of + danh từ. Kết quả: so, có phẩy phía trước."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One connector for each pair. And the because clause stays attached to a main clause.",
          "sub": "Mỗi cặp ý chỉ một từ nối. Mệnh đề because luôn gắn với câu chính.",
          "keys": [
            "Mỗi cặp ý chỉ một từ nối"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Later, add although for contrast. First or second, same meaning. Even though works too.",
          "sub": "Quen rồi thêm although cho ý trái ngược: đầu hay giữa câu đều được; even though thay được."
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
            "at": "l4",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Thứ Tư · 7:30",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:wednesday"
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
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "sunrise",
                "mobile-phone"
              ]
            },
            "at": "l1:seven",
            "caption": "Thứ Tư · 7:30 · tạnh mưa",
            "icon": "sunrise"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "I was tired yesterday,",
            "x": 7932,
            "y": 1260,
            "size": 50,
            "at": "l2:tired"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "so I went home early.",
            "x": 7932,
            "y": 1335,
            "size": 50,
            "at": "l2:home",
            "hl": [
              {
                "text": "so",
                "at": "l4:one"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Một núi, một hổ” ✓",
            "x": 7932,
            "y": 1450,
            "size": 56,
            "at": "l4:mountain",
            "color": "accent",
            "hl": [
              {
                "text": "một hổ",
                "at": "l4:tiger"
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
          "say": "Wednesday, seven thirty. The rain has stopped. Same phone, same Dũng.",
          "sub": "Thứ Tư, bảy rưỡi sáng. Tạnh mưa rồi. Vẫn chiếc điện thoại ấy, vẫn Dũng ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I was tired yesterday, so I went home early. Back to work now!",
          "sub": "“I was tired yesterday, so I went home early.” Giờ đi làm đây!",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Got it. Nice comma, Dũng!",
          "sub": "Got it. Dấu phẩy đẹp đấy, Dũng!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One mountain, one tiger. This time, so rules the mountain alone.",
          "sub": "“Một núi không thể có hai hổ.” Lần này chỉ một con hổ so làm chủ ngọn núi.",
          "keys": [
            "chỉ một con hổ"
          ]
        }
      ],
      "ref": "outro,p10"
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
            "at": "l1:comma",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:pair",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:verb",
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
            "x": 6684,
            "y": 340,
            "at": "l1:comma+900"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 780,
            "y": 1340,
            "at": "l2:pair+900"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2758,
            "y": 1260,
            "at": "l3:verb+900"
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
          "say": "So: a comma before but and so. Because in the middle, no comma.",
          "sub": "Tóm lại: phẩy trước but và so; because ở giữa câu thì không phẩy.",
          "keys": [
            "phẩy trước but và so"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One pair of ideas, one connector: because, or so.",
          "sub": "Một cặp ý, một từ nối: because hoặc so.",
          "keys": [
            "một từ nối"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "A verb follows? Because. Only a noun? Because of.",
          "sub": "Sau là động từ: because. Chỉ có danh từ: because of.",
          "keys": [
            "because of"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Try now: rewrite your last three work messages, each with at least one connector. Next: saying why, with to.",
          "sub": "Làm ngay: viết lại ba tin nhắn công việc gần nhất, mỗi tin một từ nối. Bài tiếp: nói mục đích.",
          "keys": [
            "ba tin nhắn công việc gần nhất"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p8,p11,p16"
    },
    {
      "id": "s22",
      "module": "QUIZ-01",
      "data": {
        "q": "What is the quick rule for choosing because or because of?",
        "options": [
          "Use because in the morning and because of in the evening",
          "Use because of for people and because for things and places",
          "If a verb follows, use because, and if only a noun follows, use because of"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "delivery-truck",
        "why": "Phía sau có động từ thì dùng because. Chỉ có danh từ thì dùng because of."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is the quick rule for choosing because or because of?",
          "sub": "Quy tắc nhanh để chọn because hay because of là gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "If a verb follows, use because, and if only a noun follows, use because of.",
          "sub": "Phía sau có động từ thì dùng because; chỉ có danh từ thì dùng because of."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[30]"
    },
    {
      "id": "s23",
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
          "say": "Fix three messages today. Then try the forty questions below.",
          "sub": "Hôm nay sửa ba tin nhắn. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi grammar-adult-linking-sentences, bài 1) dựng theo hạt nhân (#136) + biến thể #144: Đét trái + bảng 10 ô theo MỘT NGÀY THỨ BA MƯA (7:30 Dũng nhắn “Because I was tired, so I went home early” — đoán Đúng/Sai (HOOK-21) → 7:45 Thảo trên xe buýt, năm việc của năm từ → 7:50 Thảo làm mẫu dấu phẩy (p7) → 9:30 Sam tới “tea or coffee”, phẩy trước so khi thân mật (p5) → 11:00 xưởng “vì… nên…” → 14:00 “Khoan đã!” because of + mệnh đề (p15) → 14:10 because/because of (IDP) → 16:30 email Bác Bình (p19) → 17:30 soát bảy điều → Thứ Tư 7:30 Dũng nhắn lại đúng, khép vòng). Nhân vật: Dũng, Thảo, Sam, Bác Bình — w145/_series/grammar-adult-linking-sentences.md. Ngắt nhịp: BRK-08 ngày mưa, BRK-04 because + so, DLG-01, BRK-07 rehook. Câu mở/khép: “Một núi không thể có hai hổ”. Câu đố questions[30].",
  "loop": {
    "open": "s00",
    "close": "s20"
  }
};
