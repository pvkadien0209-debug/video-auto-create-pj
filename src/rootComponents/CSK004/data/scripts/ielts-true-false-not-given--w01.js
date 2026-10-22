// ielts-true-false-not-given--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-true-false-not-given--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "ielts-academic-reading-takers",
    "slug": "ielts-true-false-not-given",
    "door": "kien-thuc",
    "level": "B1",
    "title": "True, False hay Not Given: phân biệt thế nào cho chắc?",
    "series": "IELTS Academic Reading trong 60 phút — chiến thuật từng dạng câu hỏi cho thí sinh band 5.5–7"
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
            "text": "Bài không nhắc tới → ?",
            "x": 60,
            "y": 90,
            "size": 84,
            "at": "l1:never",
            "hl": [
              {
                "text": "không nhắc tới",
                "at": "l1:never"
              }
            ]
          },
          {
            "id": "a-b1",
            "t": "box",
            "x": 60,
            "y": 260,
            "w": 480,
            "h": 140,
            "at": "l2:False",
            "stroke": 6
          },
          {
            "id": "a-f",
            "t": "text",
            "text": "False",
            "x": 160,
            "y": 285,
            "size": 80,
            "at": "l2:False+200"
          },
          {
            "id": "a-b2",
            "t": "box",
            "x": 600,
            "y": 260,
            "w": 640,
            "h": 140,
            "at": "l2:Not Given",
            "stroke": 6,
            "color": "accent"
          },
          {
            "id": "a-ng",
            "t": "text",
            "text": "Not Given",
            "x": 680,
            "y": 285,
            "size": 80,
            "at": "l2:Not Given+200",
            "color": "accent",
            "hl": [
              {
                "text": "Not Given",
                "at": "l4:Not"
              }
            ]
          },
          {
            "id": "a-fx",
            "t": "strike",
            "over": "a-f",
            "at": "l4:Not"
          },
          {
            "id": "a-r",
            "t": "ring",
            "around": [
              "a-b2"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l4:Given"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Quick guess. A statement that the passage never mentions.",
          "sub": "Đoán nhanh. Một nhận định mà bài đọc không hề nhắc tới.",
          "keys": [
            "không hề nhắc tới"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Is it False, or Not Given? Pick one. Now.",
          "sub": "False, hay Not Given? Chọn đi. Ngay.",
          "keys": [
            "False, hay Not Given"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Most people say False. It feels so safe.",
          "sub": "Đa số chọn False. Nghe chắc ăn quá mà."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The answer is Not Given.",
          "sub": "Đáp án là Not Given.",
          "keys": [
            "Not Given"
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
            "y": 360,
            "w": 760,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "sad"
                }
              ],
              "props": [
                "laptop",
                "memo"
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
            "at": "l1",
            "caption": "Thứ Ba 19:00 · chữa đề",
            "icon": "memo"
          },
          {
            "id": "a-x",
            "t": "text",
            "text": "5 câu False sai → Not Given",
            "x": 60,
            "y": 460,
            "size": 46,
            "at": "l3:five",
            "color": "coral",
            "hl": [
              {
                "text": "Not Given",
                "at": "l3:Not Given"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Nói có sách, mách có chứng”",
            "x": 60,
            "y": 600,
            "size": 50,
            "at": "l5:book",
            "color": "accent",
            "hl": [
              {
                "text": "mách có chứng",
                "at": "l5:proof"
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
          "say": "Meet Thảo again. Tuesday, seven p.m., checking last Sunday's practice test.",
          "sub": "Lại là Thảo. Thứ Ba, bảy giờ tối, chữa đề thi thử hôm Chủ nhật.",
          "keys": [
            "chữa đề"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Timing is fixed. True, False, Not Given? Not yet.",
          "sub": "Chia giờ đã ổn. True, False, Not Given thì chưa."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "I chose False five times, and every one was Not Given!",
          "sub": "Năm câu mình chọn False, đáp án đều là Not Given!",
          "face": "sad"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "She marks it like a judge who convicts because nobody spoke up.",
          "sub": "Thảo chấm như ông toà xử thua chỉ vì… không ai lên tiếng.",
          "keys": [
            "không ai lên tiếng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Our saying: speak with a book, accuse with proof.",
          "sub": "Ông bà dặn: “Nói có sách, mách có chứng.”",
          "keys": [
            "Nói có sách, mách có chứng"
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
      "ref": "intro,p7"
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
            "text": "False hay Not Given?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:tell",
            "hl": [
              {
                "text": "hay",
                "at": "l1:tell"
              }
            ]
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "T/F/NG: thông tin · Y/N/NG: người viết",
            "x": 2028,
            "y": 165,
            "size": 40,
            "at": "l2:information"
          },
          {
            "id": "b-t",
            "t": "text",
            "text": "True = khớp với bài",
            "x": 2028,
            "y": 260,
            "size": 54,
            "at": "l3:True",
            "hl": [
              {
                "text": "khớp",
                "at": "l3:matches"
              }
            ]
          },
          {
            "id": "b-f",
            "t": "text",
            "text": "False = bài nói NGƯỢC lại",
            "x": 2028,
            "y": 350,
            "size": 54,
            "at": "l4:False",
            "color": "coral",
            "hl": [
              {
                "text": "NGƯỢC",
                "at": "l4:opposite"
              }
            ]
          },
          {
            "id": "b-n",
            "t": "text",
            "text": "Not Given = bài IM LẶNG",
            "x": 2028,
            "y": 440,
            "size": 54,
            "at": "l5:Not Given",
            "color": "accent",
            "hl": [
              {
                "text": "IM LẶNG",
                "at": "l5:neither"
              }
            ]
          },
          {
            "id": "b-n2",
            "t": "text",
            "text": "không xác nhận, không phủ nhận",
            "x": 2068,
            "y": 520,
            "size": 42,
            "at": "l5:confirms"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: British Council; IDP — Academic Reading",
            "x": 2028,
            "y": 720,
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
          "say": "So how do you tell False from Not Given, with confidence?",
          "sub": "Vậy phân biệt False với Not Given thế nào cho chắc?",
          "keys": [
            "cho chắc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The British Council lists two types: identifying information, and identifying the writer's views.",
          "sub": "British Council có hai dạng: xác định thông tin, và xác định nhận định của người viết.",
          "keys": [
            "hai dạng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "IDP explains: True means the statement matches the passage.",
          "sub": "IDP giải thích: True là nhận định khớp với bài.",
          "keys": [
            "khớp với bài"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "False means the passage says the opposite.",
          "sub": "False là bài nói điều ngược lại.",
          "keys": [
            "ngược lại"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not Given means the passage neither confirms nor denies it.",
          "sub": "Not Given là bài không xác nhận, cũng không phủ nhận.",
          "keys": [
            "không xác nhận, cũng không phủ nhận"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "id": "b-no",
            "t": "text",
            "text": "Yes/No/NG: No = người viết phản đối",
            "x": 2928,
            "y": 260,
            "size": 40,
            "at": "l1:disagrees",
            "hl": [
              {
                "text": "phản đối",
                "at": "l1:disagrees"
              }
            ]
          },
          {
            "id": "b-wk",
            "t": "text",
            "text": "6 chặng, 1 buổi tối",
            "x": 2928,
            "y": 360,
            "size": 50,
            "at": "l2:six",
            "hl": [
              {
                "text": "1 buổi tối",
                "at": "l2:evening"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l2:six+600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2298,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l2:six+900",
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2568,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l2:six+1200",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2838,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l2:six+1500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 3108,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l2:six+1800",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3378,
            "y": 615,
            "w": 240,
            "h": 90,
            "at": "l2:six+2100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "19:20",
            "x": 2053,
            "y": 628,
            "size": 48,
            "at": "l2:six+720"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "19:40",
            "x": 2323,
            "y": 628,
            "size": 48,
            "at": "l2:six+1020"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "20:00",
            "x": 2593,
            "y": 628,
            "size": 48,
            "at": "l2:six+1320"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "20:20",
            "x": 2863,
            "y": 628,
            "size": 48,
            "at": "l2:six+1620"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "20:40",
            "x": 3133,
            "y": 628,
            "size": 48,
            "at": "l2:six+1920"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "21:00",
            "x": 3403,
            "y": 628,
            "size": 48,
            "at": "l2:six+2220"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "And in Yes No Not Given, No means the writer clearly disagrees.",
          "sub": "Còn ở dạng Yes/No/Not Given, No là người viết rõ ràng không đồng ý.",
          "keys": [
            "rõ ràng không đồng ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One evening, six stops. Pen and highlighter ready.",
          "sub": "Một buổi tối, sáu chặng. Bút, bút dạ sẵn sàng.",
          "keys": [
            "Một buổi tối"
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
            "text": "① 19:20 · False",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-card",
            "t": "box",
            "x": 4836,
            "y": 150,
            "w": 780,
            "h": 400,
            "at": "l2:practice",
            "stroke": 4
          },
          {
            "id": "c-lb",
            "t": "text",
            "text": "Đoạn luyện (tự soạn, không phải đề thật)",
            "x": 4856,
            "y": 110,
            "size": 28,
            "at": "l2:practice",
            "font": "base",
            "color": "muted"
          },
          {
            "id": "c-p0",
            "t": "text",
            "text": "Urban beekeeping has grown in many",
            "x": 4866,
            "y": 175,
            "size": 34,
            "at": "l3:Urban",
            "hl": [
              {
                "text": "has grown",
                "at": "l6:grown"
              }
            ]
          },
          {
            "id": "c-p1",
            "t": "text",
            "text": "European cities over the past decade.",
            "x": 4866,
            "y": 235,
            "size": 34,
            "at": "l3:Urban"
          },
          {
            "id": "c-p2",
            "t": "text",
            "text": "Not all researchers welcome this trend:",
            "x": 4866,
            "y": 295,
            "size": 34,
            "at": "l4:Not all"
          },
          {
            "id": "c-p3",
            "t": "text",
            "text": "some argue that too many hives",
            "x": 4866,
            "y": 355,
            "size": 34,
            "at": "l4:Not all"
          },
          {
            "id": "c-p4",
            "t": "text",
            "text": "may leave little food for wild bees,",
            "x": 4866,
            "y": 415,
            "size": 34,
            "at": "l4:Not all"
          },
          {
            "id": "c-p5",
            "t": "text",
            "text": "while others believe the risk is small.",
            "x": 4866,
            "y": 475,
            "size": 34,
            "at": "l4:Not all"
          },
          {
            "id": "c-s",
            "t": "text",
            "text": "“…has become less popular…”",
            "x": 3996,
            "y": 170,
            "size": 48,
            "at": "l5:less",
            "color": "coral",
            "hl": [
              {
                "text": "less popular",
                "at": "l5:less popular"
              }
            ]
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "B1: gạch beekeeping, cities, less popular",
            "x": 3996,
            "y": 270,
            "size": 36,
            "at": "l6:underline"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "B2: dò → câu đầu",
            "x": 3996,
            "y": 330,
            "size": 40,
            "at": "l6:scan"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "B3: has grown ↔ less popular",
            "x": 3996,
            "y": 390,
            "size": 40,
            "at": "l6:grown"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "B4: ngược → False",
            "x": 3996,
            "y": 450,
            "size": 48,
            "at": "l7:False",
            "color": "accent",
            "hl": [
              {
                "text": "False",
                "at": "l7:False"
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
          "say": "Stop one, seven twenty. When is it really False?",
          "sub": "Chặng một, bảy giờ hai mươi. Khi nào mới thật là False?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "To choose False, you must point to a sentence that says the opposite. Here's a practice paragraph, written for learning.",
          "sub": "Muốn chọn False, phải chỉ ra được câu trong bài nói ngược lại. Đây là đoạn luyện, tự soạn để học.",
          "keys": [
            "chỉ ra được câu"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Urban beekeeping has grown in many European cities over the past decade.",
          "sub": "Nuôi ong trong đô thị đã tăng ở nhiều thành phố châu Âu trong mười năm qua."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not all researchers welcome this: some fear little food for wild bees, others see a small risk.",
          "sub": "Không phải nhà nghiên cứu nào cũng hoan nghênh: có người lo ong hoang dã thiếu thức ăn, có người cho rủi ro nhỏ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Statement: urban beekeeping has become less popular.",
          "sub": "Nhận định: nuôi ong đô thị đã kém phổ biến hơn.",
          "keys": [
            "kém phổ biến hơn"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Underline beekeeping, cities, less popular. Scan: the first sentence. Compare: has grown versus less popular.",
          "sub": "Gạch beekeeping, cities, less popular. Dò: câu đầu. So: has grown, trái với less popular."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Opposite. False.",
          "sub": "Ngược nhau. False.",
          "keys": [
            "False"
          ]
        }
      ],
      "ref": "p3,p4"
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
          }
        ],
        "items": [
          {
            "id": "c-hand",
            "t": "illus",
            "name": "backhand-index-pointing-left",
            "x": 5496,
            "y": 600,
            "size": 100,
            "at": "l1:point"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "False = chỉ tay được vào câu ngược",
            "x": 3996,
            "y": 560,
            "size": 48,
            "at": "l1:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "chỉ tay được",
                "at": "l1:point"
              }
            ]
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "Không tìm thấy ≠ False",
            "x": 3996,
            "y": 650,
            "size": 48,
            "at": "l2:not enough",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: choose False when you can point to the sentence that says the opposite.",
          "sub": "Rút ra: chọn False khi chỉ tay được vào câu nói ngược lại.",
          "keys": [
            "chỉ tay được"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Just not finding a sentence? That's not enough for False.",
          "sub": "Chỉ là không tìm thấy câu nào? Chưa đủ để chọn False.",
          "keys": [
            "Chưa đủ"
          ]
        }
      ],
      "ref": "p5,p3"
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
            "at": "l2:end",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② 19:40 · Not Given",
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
                  "side": "center",
                  "pose": "point",
                  "face": "happy"
                }
              ],
              "props": [
                "honey-pot",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                }
              ]
            },
            "at": "l1:honey",
            "caption": "19:40 · cùng đoạn luyện",
            "icon": "honey-pot"
          },
          {
            "id": "d-s",
            "t": "text",
            "text": "“City honey tastes better…”",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l1:tastes",
            "color": "coral"
          },
          {
            "id": "d-hp",
            "t": "illus",
            "name": "honey-pot",
            "x": 5964,
            "y": 250,
            "size": 90,
            "at": "l1:honey"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, seven forty. Same paragraph. Statement: honey from city hives tastes better than countryside honey.",
          "sub": "Chặng hai, bảy giờ bốn mươi. Cùng đoạn luyện. Nhận định: mật ong tổ trong phố ngon hơn mật ong quê.",
          "keys": [
            "ngon hơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "I searched the whole thing. Nothing says city honey is better. So... False!",
          "sub": "Mình dò cả đoạn rồi. Chẳng câu nào nói mật phố ngon hơn. Vậy là… False!",
          "face": "happy",
          "stop": true
        }
      ],
      "ref": "p6"
    },
    {
      "id": "s07",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Thứ Ba 19:40",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Không thấy trong bài thì là False",
          "why": "Bài chỉ nói số tổ ong và thức ăn cho ong hoang dã, không câu nào so vị mật.",
          "rule": "Bài im lặng là Not Given"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Not in the passage, so it's False. Easy.",
          "sub": "Không có trong bài, vậy là False. Dễ ợt.",
          "face": "happy",
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
          "say": "Show me the sentence that says city honey is worse. You can't. It doesn't exist.",
          "sub": "Chỉ cho tôi câu nói mật phố dở hơn. Không có. Vì bài không hề nói.",
          "keys": [
            "bài không hề nói"
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
          "say": "Does the passage say the opposite? No. It's silent about taste. Not Given.",
          "sub": "Bài có nói ngược lại không? Không. Bài im lặng về vị mật. Not Given.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Hives and wild bees, yes. Taste, never.",
          "sub": "Đúng. Bài nói tổ ong, ong hoang dã. Vị mật thì không.",
          "phase": "redo",
          "keys": [
            "Vị mật thì không"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p6,p7"
    },
    {
      "id": "s08",
      "module": "BRK-04",
      "data": {
        "title": "Không tìm thấy trong bài",
        "wrong": "Không thấy trong bài → False",
        "right": "Có câu ngược → False · Bài im lặng → Not Given",
        "wrongIllus": "cross-mark",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Can't find it, so it's False? No.",
          "sub": "Không thấy trong bài thì là False? Sai.",
          "keys": [
            "Sai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A contradiction is False. Silence is Not Given.",
          "sub": "Có câu ngược mới là False. Bài im lặng là Not Given.",
          "keys": [
            "Bài im lặng là Not Given"
          ]
        }
      ],
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
            "fit": "D",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "d-ask",
            "t": "text",
            "text": "Hỏi: bài có nói NGƯỢC lại không?",
            "x": 5964,
            "y": 380,
            "size": 44,
            "at": "l1:ask",
            "hl": [
              {
                "text": "NGƯỢC",
                "at": "l1:opposite"
              }
            ]
          },
          {
            "id": "d-y",
            "t": "text",
            "text": "Có → False",
            "x": 6004,
            "y": 460,
            "size": 52,
            "at": "l2:Yes",
            "color": "coral"
          },
          {
            "id": "d-n",
            "t": "text",
            "text": "Không đề cập → Not Given",
            "x": 6004,
            "y": 540,
            "size": 52,
            "at": "l2:mention",
            "color": "accent"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Im lặng ≠ phản bác",
            "x": 5964,
            "y": 650,
            "size": 60,
            "at": "l3:Silence",
            "color": "accent",
            "hl": [
              {
                "text": "≠",
                "at": "l3:contradiction"
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
          "say": "So the only question to ask: does the passage say the opposite?",
          "sub": "Vậy câu duy nhất cần tự hỏi: bài có nói điều ngược lại không?",
          "keys": [
            "nói điều ngược lại không"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yes means False. If it doesn't mention it, Not Given.",
          "sub": "Có thì False. Bài không đề cập thì Not Given."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: silence is Not Given, only contradiction is False.",
          "sub": "Rút ra: bài im lặng là Not Given, bài phản bác mới là False.",
          "keys": [
            "bài phản bác mới là False"
          ]
        }
      ],
      "ref": "p7,p8"
    },
    {
      "id": "s10",
      "module": "BRK-06",
      "data": {
        "title": "Chữ nhỏ, đổi cả đáp án",
        "items": [
          {
            "illus": "globe-showing-europe-africa",
            "text": "all"
          },
          {
            "illus": "busts-in-silhouette",
            "text": "some · most"
          },
          {
            "illus": "repeat-button",
            "text": "always · often"
          },
          {
            "illus": "no-entry",
            "text": "never"
          },
          {
            "illus": "index-pointing-up",
            "text": "only"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "All, some, most, always, often, never, only.",
          "sub": "All, some, most, always, often, never, only."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Small words that change the whole answer.",
          "sub": "Chữ nhỏ mà đổi cả đáp án.",
          "keys": [
            "đổi cả đáp án"
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
            "text": "③ 20:00 · Từ chỉ mức độ",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three",
            "hl": [
              {
                "text": "mức độ",
                "at": "l1:degree"
              }
            ]
          },
          {
            "id": "e-s",
            "t": "text",
            "text": "“All researchers agree…”",
            "x": 7932,
            "y": 170,
            "size": 54,
            "at": "l2:All",
            "color": "coral",
            "hl": [
              {
                "text": "All",
                "at": "l2:All"
              }
            ]
          },
          {
            "id": "e-p",
            "t": "text",
            "text": "Bài: “Not all researchers welcome…”",
            "x": 7932,
            "y": 260,
            "size": 44,
            "at": "l3:Not all",
            "hl": [
              {
                "text": "Not all",
                "at": "l3:Not all"
              }
            ]
          },
          {
            "id": "e-p2",
            "t": "text",
            "text": "+ có người cho rủi ro nhỏ",
            "x": 7972,
            "y": 330,
            "size": 42,
            "at": "l3:small"
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "→ False",
            "x": 7972,
            "y": 400,
            "size": 60,
            "at": "l4:False",
            "color": "coral"
          },
          {
            "id": "e-s2",
            "t": "text",
            "text": "“Some researchers are concerned…”",
            "x": 8772,
            "y": 170,
            "size": 44,
            "at": "l5:Some",
            "hl": [
              {
                "text": "Some",
                "at": "l5:Some"
              }
            ]
          },
          {
            "id": "e-p3",
            "t": "text",
            "text": "Bài: “some argue… little food”",
            "x": 8772,
            "y": 250,
            "size": 42,
            "at": "l5:argue"
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "→ True, dù khác chữ",
            "x": 8812,
            "y": 330,
            "size": 54,
            "at": "l6:True",
            "color": "accent",
            "hl": [
              {
                "text": "khác chữ",
                "at": "l6:different"
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
          "say": "Stop three, eight p.m. Words of degree and frequency.",
          "sub": "Chặng ba, tám giờ tối. Từ chỉ mức độ, tần suất.",
          "keys": [
            "Từ chỉ mức độ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Try this: all researchers agree that city hives harm wild bees. True, False, or Not Given?",
          "sub": "Thử nhé: mọi nhà nghiên cứu đều đồng ý tổ ong trong phố hại ong hoang dã. True, False hay Not Given?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The passage: not all researchers welcome this trend, and some think the risk is small.",
          "sub": "Bài viết: không phải ai cũng hoan nghênh xu hướng này, có người cho rủi ro nhỏ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "All versus not all. False.",
          "sub": "All, trái với not all. False.",
          "keys": [
            "False"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Now: some researchers are concerned about food for wild bees. The passage: some argue hives leave little food.",
          "sub": "Còn: một số nhà nghiên cứu lo về thức ăn cho ong hoang dã. Bài: some argue tổ ong làm ong hoang dã thiếu ăn."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "True, even with different words. Compare meaning, not spelling.",
          "sub": "True, dù diễn đạt khác chữ. So ý, đừng so mặt chữ.",
          "keys": [
            "So ý, đừng so mặt chữ"
          ]
        }
      ],
      "ref": "p10,p12"
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
            "text": "Gạch chân mọi chữ chỉ mức độ",
            "x": 7932,
            "y": 560,
            "size": 54,
            "at": "l1:Underline",
            "color": "accent",
            "hl": [
              {
                "text": "Gạch chân",
                "at": "l1:Underline"
              }
            ]
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "Đọc chậm đúng một chữ ấy",
            "x": 7932,
            "y": 650,
            "size": 46,
            "at": "l2:slowly"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: underline every word of degree before you compare with the passage.",
          "sub": "Rút ra: gạch chân mọi chữ chỉ mức độ trước khi so với bài.",
          "keys": [
            "gạch chân mọi chữ chỉ mức độ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Read slowly there. One tiny only can sink a whole answer.",
          "sub": "Đọc chậm ở chỗ đó. Một chữ only bé tí cũng đủ đánh chìm đáp án."
        }
      ],
      "ref": "p11,p9"
    },
    {
      "id": "s13",
      "module": "BRK-07",
      "data": {
        "question": "Biết chắc ngoài đời là đúng, sao vẫn bị chấm sai?",
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
          "say": "What if you know it's true in real life?",
          "sub": "Nếu ngoài đời bạn biết chắc là đúng thì sao?"
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
      "id": "s14",
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
            "text": "④ 20:20 · Hiểu biết riêng",
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1"
                },
                {
                  "id": "thao",
                  "side": "right"
                }
              ],
              "props": [
                "sunflower",
                "honeybee"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "20:20 · Dũng ghé chữa đề cùng",
            "icon": "honeybee"
          },
          {
            "id": "f-s",
            "t": "text",
            "text": "“City bees depend on flowers…”",
            "x": 60,
            "y": 1260,
            "size": 44,
            "at": "l2:flowers",
            "color": "coral",
            "hl": [
              {
                "text": "flowers",
                "at": "l2:flowers"
              }
            ]
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "A: “Sinh học dạy rồi” → True",
            "x": 60,
            "y": 1350,
            "size": 46,
            "at": "l3:biology",
            "color": "muted"
          },
          {
            "id": "f-ax",
            "t": "strike",
            "over": "f-a",
            "at": "l4:bees"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "B: bài không nhắc hoa → Not Given",
            "x": 60,
            "y": 1440,
            "size": 42,
            "at": "l5:flowers",
            "color": "accent",
            "hl": [
              {
                "text": "Not Given",
                "at": "l5:Not Given"
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
          "say": "Stop four, eight twenty. Dũng drops by, Thảo's cousin, the biology student.",
          "sub": "Chặng bốn, tám giờ hai mươi. Dũng ghé qua, em họ Thảo, cậu sinh viên sinh học.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Statement: city bees depend on flowers for food.",
          "sub": "Nhận định: ong trong phố sống nhờ hoa để kiếm ăn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Easy! Bees need flowers for nectar. We learnt that in biology. True!",
          "sub": "Dễ! Ong cần hoa lấy mật, học sinh học rồi. True!",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Real-life fact, yes. But option A trusts the biology book, not the passage. Bees, slow down.",
          "sub": "Đúng ngoài đời. Nhưng cách A tin sách sinh học, không tin bài. Ong ơi, chậm lại."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Option B: check the passage again. It only says little food for wild bees. No flowers. Not Given.",
          "sub": "Cách B: dò lại đoạn luyện. Bài chỉ nói ong hoang dã thiếu ăn, không nhắc hoa. Not Given.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "So knowing more... can cost me marks?",
          "sub": "Vậy biết nhiều… lại mất điểm à?",
          "face": "surprised"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
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
            "fit": "F",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "f-idp",
            "t": "text",
            "text": "IDP: hiểu biết riêng đứng ngoài",
            "x": 60,
            "y": 1560,
            "size": 40,
            "at": "l1:knowledge"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Chỉ tin vào bài",
            "x": 60,
            "y": 1650,
            "size": 64,
            "at": "l2:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Chỉ tin vào bài",
                "at": "l2:Trust"
              }
            ]
          },
          {
            "id": "f-k2",
            "t": "text",
            "text": "gác kiến thức riêng sang bên",
            "x": 100,
            "y": 1750,
            "size": 44,
            "at": "l2:aside"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Here, yes. IDP warns: don't let your own knowledge affect True False or Yes No answers.",
          "sub": "Ở dạng này thì có. IDP lưu ý: đừng để hiểu biết riêng ảnh hưởng đáp án.",
          "keys": [
            "hiểu biết riêng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: trust only the passage, and put your own knowledge aside.",
          "sub": "Rút ra: chỉ tin vào bài, gác kiến thức riêng sang một bên.",
          "keys": [
            "chỉ tin vào bài"
          ]
        }
      ],
      "ref": "p13,p15"
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
            "text": "⑤ 20:40 · Yes / No / Not Given",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "Hỏi về QUAN ĐIỂM người viết",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:views",
            "hl": [
              {
                "text": "QUAN ĐIỂM",
                "at": "l2:views"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "hay gặp ở bài bàn luận",
            "x": 2068,
            "y": 1340,
            "size": 44,
            "at": "l3:discuss"
          },
          {
            "id": "g-y",
            "t": "text",
            "text": "Yes: người viết đồng ý",
            "x": 2028,
            "y": 1440,
            "size": 50,
            "at": "l4:Yes"
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "No: rõ ràng không đồng ý",
            "x": 2028,
            "y": 1520,
            "size": 50,
            "at": "l4:No",
            "color": "coral"
          },
          {
            "id": "g-ng",
            "t": "text",
            "text": "Not Given: không nêu ý mình",
            "x": 2028,
            "y": 1600,
            "size": 50,
            "at": "l4:Not Given",
            "color": "accent"
          },
          {
            "id": "g-tr",
            "t": "text",
            "text": "Thuật lại ý người khác",
            "x": 2868,
            "y": 1440,
            "size": 46,
            "at": "l5:reports",
            "color": "muted"
          },
          {
            "id": "g-tr2",
            "t": "text",
            "text": "≠ ý của người viết",
            "x": 2908,
            "y": 1510,
            "size": 50,
            "at": "l5:own",
            "color": "coral",
            "hl": [
              {
                "text": "≠",
                "at": "l5:own"
              }
            ]
          },
          {
            "id": "g-ic",
            "t": "illus",
            "name": "writing-hand",
            "x": 3468,
            "y": 1240,
            "size": 120,
            "at": "l2:writer"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, eight forty. The twin type: Yes, No, Not Given.",
          "sub": "Chặng năm, tám giờ bốn mươi. Dạng sinh đôi: Yes/No/Not Given.",
          "keys": [
            "Dạng sinh đôi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It asks about the writer's views and claims, not only facts.",
          "sub": "Dạng này hỏi quan điểm, nhận định của người viết, không chỉ sự kiện.",
          "keys": [
            "quan điểm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "You often meet it in passages that discuss, judge, or compare opinions.",
          "sub": "Hay gặp ở bài bàn luận, nơi người viết đánh giá, so sánh các quan điểm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Find where the writer speaks for themselves. Agrees: Yes. Clearly disagrees: No. Says nothing: Not Given.",
          "sub": "Tìm chỗ người viết nói ý mình. Đồng ý: Yes. Rõ ràng không đồng ý: No. Không nêu: Not Given."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Careful: when the writer only reports someone else's idea, it may not be their own view.",
          "sub": "Cẩn thận: ý bài chỉ thuật lại của người khác chưa chắc là quan điểm của chính người viết.",
          "keys": [
            "chưa chắc là quan điểm"
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
          }
        ],
        "items": [
          {
            "id": "g-ex",
            "t": "text",
            "text": "“some argue…” = người khác nói",
            "x": 2028,
            "y": 1700,
            "size": 44,
            "at": "l1:some argue",
            "hl": [
              {
                "text": "người khác nói",
                "at": "l1:someone"
              }
            ]
          },
          {
            "id": "g-ex2",
            "t": "text",
            "text": "chưa phải giọng người viết",
            "x": 2068,
            "y": 1780,
            "size": 40,
            "at": "l1:writer",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "In our bee paragraph, some argue is someone else talking, not the writer.",
          "sub": "Trong đoạn về ong, some argue là người khác nói, chưa phải người viết.",
          "keys": [
            "người khác nói"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Like quoting your neighbour. It's gossip, not your opinion.",
          "sub": "Như kể lời bà hàng xóm: là chuyện nghe kể, đâu phải ý mình."
        }
      ],
      "ref": "p17"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 21:00 · Bốn bước",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six",
            "hl": [
              {
                "text": "Bốn bước",
                "at": "l1:four"
              }
            ]
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1280,
            "w": 44,
            "h": 44,
            "at": "l2:One",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1262,
            "size": 56,
            "at": "l2:One+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "B1: gạch từ khoá + chữ mức độ",
            "x": 4061,
            "y": 1272,
            "size": 46,
            "at": "l2:One+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1380,
            "w": 44,
            "h": 44,
            "at": "l3:Two",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1362,
            "size": 56,
            "at": "l3:Two+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "B2: dò chỗ liên quan, tô sáng",
            "x": 4061,
            "y": 1372,
            "size": 46,
            "at": "l3:Two+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1480,
            "w": 44,
            "h": 44,
            "at": "l4:Three",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1462,
            "size": 56,
            "at": "l4:Three+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "B3: đọc kỹ 1–2 câu, so ý",
            "x": 4061,
            "y": 1472,
            "size": 46,
            "at": "l4:Three+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1580,
            "w": 44,
            "h": 44,
            "at": "l5:Four",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1562,
            "size": 56,
            "at": "l5:Four+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "B4: khớp T · ngược F · im NG",
            "x": 4061,
            "y": 1572,
            "size": 46,
            "at": "l5:Four+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, nine p.m. Thảo writes four steps on a sticky note.",
          "sub": "Chặng sáu, chín giờ tối. Thảo ghi bốn bước lên tờ giấy nhớ.",
          "keys": [
            "bốn bước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: underline key words and words of degree.",
          "sub": "Một: gạch từ khoá và từ chỉ mức độ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: scan for the related place. On computer, highlight it.",
          "sub": "Hai: dò chỗ liên quan trong bài, trên máy thì tô sáng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: read one or two sentences around it closely. Compare meaning, not each word.",
          "sub": "Ba: đọc kỹ một hai câu quanh đó, so ý, không so từng chữ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Four: matches, True. Opposite, False. Not mentioned, Not Given.",
          "sub": "Bốn: khớp là True, ngược là False, không đề cập là Not Given.",
          "keys": [
            "không đề cập là Not Given"
          ]
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
            "fit": "H",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "h-st",
            "t": "text",
            "text": "Tìm mãi không ra?",
            "x": 3996,
            "y": 1690,
            "size": 50,
            "at": "l1:can't find",
            "color": "coral"
          },
          {
            "id": "h-st2",
            "t": "text",
            "text": "→ đánh dấu, làm tiếp, quay lại sau",
            "x": 4036,
            "y": 1770,
            "size": 44,
            "at": "l1:mark",
            "color": "accent",
            "hl": [
              {
                "text": "đánh dấu",
                "at": "l1:mark"
              }
            ]
          },
          {
            "id": "h-1",
            "t": "text",
            "text": "Mỗi câu: 1 điểm",
            "x": 4936,
            "y": 1690,
            "size": 50,
            "at": "l2:one mark"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Can't find the place after a short while? Mark it, move on, come back if time is left.",
          "sub": "Tìm một lúc không ra? Đánh dấu, làm câu sau, còn giờ thì quay lại.",
          "keys": [
            "Đánh dấu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Each question is worth one mark, like every other one in Reading.",
          "sub": "Mỗi câu chỉ một điểm, như mọi câu khác trong phần Đọc."
        }
      ],
      "ref": "p19"
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
            "text": "22:00 · Năm câu False",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:ten"
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
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "memo"
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
            "at": "l1:ten",
            "caption": "22:00 · cùng bàn ấy",
            "icon": "memo"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Mỗi False: chép câu ngược",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:copy",
            "hl": [
              {
                "text": "chép câu ngược",
                "at": "l2:opposite"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Chép được: 1 · không chép được: 4",
            "x": 5964,
            "y": 1350,
            "size": 42,
            "at": "l3:four"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "→ 4 câu ấy là Not Given",
            "x": 6004,
            "y": 1430,
            "size": 50,
            "at": "l3:Not Given",
            "color": "accent"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Nói có sách, mách có chứng”",
            "x": 5964,
            "y": 1560,
            "size": 50,
            "at": "l5:book",
            "color": "accent",
            "hl": [
              {
                "text": "có chứng",
                "at": "l5:proof"
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
          "say": "Ten p.m. Same desk, same five red crosses.",
          "sub": "Mười giờ tối. Vẫn bàn ấy, vẫn năm dấu gạch đỏ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "For every False, I copy the sentence that says the opposite.",
          "sub": "Mỗi câu chọn False, mình chép ra câu trong bài nói ngược lại.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Only one has a sentence. The other four? Not Given. Now I can point!",
          "sub": "Chỉ một câu chép được. Bốn câu kia? Not Given. Giờ thì chỉ tay được rồi!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No sentence to copy? Then it was never False.",
          "sub": "Không có câu để chép? Vậy nó chưa bao giờ là False."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Speak with a book, accuse with proof. False needs its proof too.",
          "sub": "“Nói có sách, mách có chứng.” Chọn False cũng phải có chứng.",
          "keys": [
            "Chọn False cũng phải có chứng"
          ]
        }
      ],
      "ref": "outro,p3"
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
            "fit": "F",
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
            "text": "Tóm lại: ngược hay im lặng?",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:question"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Làm ngay: bài T/F/NG đã sai",
            "x": 7932,
            "y": 1290,
            "size": 50,
            "at": "l5:Try",
            "hl": [
              {
                "text": "đã sai",
                "at": "l5:wrong"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "mỗi False → chép câu ngược",
            "x": 7972,
            "y": 1375,
            "size": 46,
            "at": "l5:copy"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: nối tiêu đề",
            "x": 7932,
            "y": 1480,
            "size": 50,
            "at": "l6:Next",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5536,
            "y": 40,
            "at": "l2:point"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8692,
            "y": 560,
            "at": "l3:underline"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 600,
            "y": 1650,
            "at": "l4:passage"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; cấu trúc đề, quy định thi có thể đổi — kiểm lại trang chính thức IELTS. Nhân vật là minh hoạ.",
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
          "say": "So False and Not Given differ by one question: does the passage say the opposite?",
          "sub": "Tóm lại, False và Not Given chỉ khác ở một câu hỏi: bài có nói điều ngược lại không?",
          "keys": [
            "một câu hỏi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: False only when you can point to it.",
          "sub": "Một: chỉ chọn False khi chỉ tay được vào câu ngược."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: underline every word of degree.",
          "sub": "Hai: gạch chân mọi chữ chỉ mức độ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: trust the passage, not your own knowledge.",
          "sub": "Ba: tin vào bài, không tin hiểu biết riêng."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: take a True False Not Given set you got wrong. For each False, copy the opposite sentence.",
          "sub": "Làm ngay: lấy một bài True/False/Not Given đã làm sai, với mỗi câu False, chép ra câu ngược lại.",
          "keys": [
            "chép ra câu ngược lại"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: matching headings.",
          "sub": "Bài tiếp theo: nối tiêu đề với đoạn văn.",
          "keys": [
            "nối tiêu đề"
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
        "q": "What question should you ask yourself to decide between False and Not Given?",
        "options": [
          "Is the statement longer or shorter than the sentence in the passage",
          "Does the statement sound like something a scientist would usually say",
          "Does the passage say the opposite, or does it simply not mention this"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "magnifying-glass-tilted-left",
        "why": "Câu tự hỏi là bài có nói điều ngược lại không. Có thì False, không đề cập thì Not Given."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What question should you ask yourself to decide between False and Not Given?",
          "sub": "Nên tự hỏi câu gì để quyết định giữa False và Not Given?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Does the passage say the opposite, or does it simply not mention this.",
          "sub": "Bài có nói ngược lại, hay chỉ không đề cập?"
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Contradiction is False. Silence is Not Given.",
          "sub": "Ngược là False. Im lặng là Not Given."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[13]"
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
          "say": "Point to the sentence, or call it Not Given. Then try the forty questions below.",
          "sub": "Chỉ tay được vào câu, hoặc gọi đúng tên Not Given. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT BUỔI TỐI CHỮA ĐỀ của Thảo (Thứ Ba 19:00 năm câu False sai → 19:20 False làm mẫu đoạn ong → 19:40 Not Given + “Khoan đã!” → 20:00 từ chỉ mức độ → 20:20 Dũng (vai Khoa) dùng kiến thức sinh học → 20:40 Yes/No/Not Given → 21:00 bốn bước → 22:00 cùng bàn khép vòng). HOOK-21: đoán “bài không nhắc → False?” rồi lật Not Given. Nhân vật: Thảo, Dũng — w145/_series/ielts-academic-reading-takers.md. Đoạn luyện về nuôi ong là đoạn tự soạn của bài, ghi rõ trên bảng. Cảnh ngắt nhịp: BRK-04 (Không thấy → False / Bài im lặng → Not Given), BRK-06 (từ chỉ mức độ), BRK-07 (rehook kiến thức riêng). Ca dao: “Nói có sách, mách có chứng”. Câu đố questions[13].",
  "loop": {
    "open": "s01",
    "close": "s20"
  }
};
