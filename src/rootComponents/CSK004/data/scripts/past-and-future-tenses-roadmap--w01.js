// past-and-future-tenses-roadmap--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "past-and-future-tenses-roadmap--w01",
  "hook": "HOOK-21",
  "unit": {
    "audience": "grammar-a2-past-and-future",
    "slug": "past-and-future-tenses-roadmap",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Kể chuyện quá khứ và nói kế hoạch tương lai cần nắm những thì nào?",
    "series": "Kể chuyện hôm qua, hẹn chuyện ngày mai — ngữ pháp quá khứ và tương lai cho người học A2"
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
            "id": "a-ex",
            "t": "text",
            "text": "“Yesterday I go to work.”",
            "x": 60,
            "y": 110,
            "size": 84,
            "at": "l1:Yesterday",
            "hl": [
              {
                "text": "go",
                "at": "l3:verb"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Có yesterday rồi — đủ chưa?",
            "x": 70,
            "y": 270,
            "size": 56,
            "at": "l1:enough",
            "color": "coral"
          },
          {
            "id": "a-b1",
            "t": "box",
            "x": 80,
            "y": 380,
            "w": 300,
            "h": 110,
            "at": "l2:Enough",
            "stroke": 6
          },
          {
            "id": "a-b1t",
            "t": "text",
            "text": "Đủ",
            "x": 180,
            "y": 400,
            "size": 64,
            "at": "l2:Enough"
          },
          {
            "id": "a-b2",
            "t": "box",
            "x": 460,
            "y": 380,
            "w": 360,
            "h": 110,
            "at": "l2:not",
            "stroke": 6,
            "color": "accent"
          },
          {
            "id": "a-b2t",
            "t": "text",
            "text": "Chưa đủ",
            "x": 510,
            "y": 400,
            "size": 64,
            "at": "l2:not",
            "color": "accent"
          },
          {
            "id": "a-b1x",
            "t": "strike",
            "over": "a-b1t",
            "at": "l3:Not"
          },
          {
            "id": "a-ok",
            "t": "text",
            "text": "→ Yesterday I went to work.",
            "x": 60,
            "y": 560,
            "size": 64,
            "at": "l3:went",
            "color": "accent",
            "hl": [
              {
                "text": "went",
                "at": "l3:went"
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
          "say": "Quick guess. Yesterday I go to work. The time word is right there. Is that enough?",
          "sub": "Đoán nhanh. “Yesterday I go to work.” Có chữ yesterday rồi. Vậy đã đủ chưa?",
          "keys": [
            "đủ chưa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Enough, or not enough? Pick one before I tell you.",
          "sub": "Đủ, hay chưa đủ? Chọn một đáp án trước khi Đét nói nhé."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not enough. People can guess, but the verb itself must change. Go becomes went.",
          "sub": "Chưa đủ. Người nghe đoán được, nhưng chính động từ phải đổi. Go thành went.",
          "keys": [
            "chính động từ phải đổi"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p2,intro"
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
            "module": "SCENE-01",
            "x": 900,
            "y": 110,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "sam",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
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
            "caption": "Thứ Ba 9:00 · gọi chị Sam",
            "icon": "laptop"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Có công mài sắt…”",
            "x": 60,
            "y": 660,
            "size": 54,
            "at": "l6:iron",
            "color": "accent",
            "hl": [
              {
                "text": "mài sắt",
                "at": "l6:iron"
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
          "say": "Meet Thảo, an accountant in Hà Nội, and Sam, her foreign partner, on their Tuesday call.",
          "sub": "Đây là Thảo, kế toán ở Hà Nội, và chị Sam, đối tác nước ngoài, trong cuộc gọi sáng thứ Ba.",
          "keys": [
            "Thảo",
            "chị Sam"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Nine a.m. Sam is flying to Hà Nội soon, so there's a lot to tell.",
          "sub": "Chín giờ sáng. Chị Sam sắp sang Hà Nội, nên có nhiều chuyện để kể."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "Morning, Thảo! How's your week going?",
          "sub": "Chào Thảo! Tuần này của em thế nào?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Busy! Yesterday I go to work very late. Your order, you know!",
          "sub": "Bận lắm chị! Yesterday I go to work very late. Đơn hàng của chị đó!",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Sam understands. But Thảo's verbs stand still, like a photo on the wall.",
          "sub": "Chị Sam hiểu. Nhưng động từ của Thảo đứng im như tấm ảnh treo tường.",
          "keys": [
            "đứng im"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The old saying: keep grinding an iron bar, and one day it's a needle. Let's start grinding.",
          "sub": "Ông bà dặn: “Có công mài sắt, có ngày nên kim.” Ta bắt đầu mài nhé.",
          "keys": [
            "Có công mài sắt, có ngày nên kim"
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
      "ref": "p2"
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
            "text": "Cần nắm những thì nào?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:tenses",
            "hl": [
              {
                "text": "những thì nào",
                "at": "l1:need"
              }
            ]
          },
          {
            "id": "b-vn",
            "t": "text",
            "text": "Việt: đã · đang · sẽ · từng + đi",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:Vietnamese"
          },
          {
            "id": "b-vn2",
            "t": "text",
            "text": "“đi” vẫn là “đi”",
            "x": 2068,
            "y": 250,
            "size": 50,
            "at": "l3:stays",
            "color": "muted",
            "hl": [
              {
                "text": "vẫn là",
                "at": "l3:stays"
              }
            ]
          },
          {
            "id": "b-en",
            "t": "text",
            "text": "Anh: go → went · was going",
            "x": 2028,
            "y": 350,
            "size": 50,
            "at": "l4:English",
            "color": "accent",
            "hl": [
              {
                "text": "went",
                "at": "l4:went"
              }
            ]
          },
          {
            "id": "b-en2",
            "t": "text",
            "text": "will go · am going to go",
            "x": 2068,
            "y": 430,
            "size": 50,
            "at": "l4:will"
          },
          {
            "id": "b-fz",
            "t": "text",
            "text": "Động từ hay đứng im",
            "x": 2028,
            "y": 540,
            "size": 42,
            "at": "l5:frozen",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So which past and future tenses do you really need at A2?",
          "sub": "Vậy ở trình độ A2, kể quá khứ và nói tương lai cần nắm những thì nào?",
          "keys": [
            "những thì nào"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Vietnamese puts small time words before the verb.",
          "sub": "Tiếng Việt đặt chữ nhỏ trước động từ: đã, đang, sẽ, từng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The verb itself stays the same, yesterday or tomorrow.",
          "sub": "Còn động từ thì giữ nguyên: “đi” vẫn là “đi”, dù hôm qua hay ngày mai.",
          "keys": [
            "giữ nguyên"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "English changes the verb, or adds helpers: went, was going, will go, am going to go.",
          "sub": "Tiếng Anh đổi chính động từ hoặc thêm trợ động từ: went, was going, will go, am going to go.",
          "keys": [
            "đổi chính động từ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Used to the present simple, learners keep the verb frozen when telling stories.",
          "sub": "Quen câu hiện tại đơn, người học hay để động từ đứng im khi kể chuyện."
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
            "id": "b-m",
            "t": "text",
            "text": "⚖️ Chỉ cần thêm yesterday?",
            "x": 2928,
            "y": 170,
            "size": 46,
            "at": "l1:yesterday",
            "color": "coral"
          },
          {
            "id": "b-bc",
            "t": "text",
            "text": "BC: went, met — dạng riêng",
            "x": 2928,
            "y": 250,
            "size": 44,
            "at": "l2:forms",
            "hl": [
              {
                "text": "dạng riêng",
                "at": "l2:forms"
              }
            ]
          },
          {
            "id": "b-ft",
            "t": "text",
            "text": "Tương lai: chia theo loại",
            "x": 2928,
            "y": 330,
            "size": 44,
            "at": "l3:types",
            "hl": [
              {
                "text": "chia theo loại",
                "at": "l3:types"
              }
            ]
          },
          {
            "id": "b-sign",
            "t": "illus",
            "name": "construction",
            "x": 2948,
            "y": 430,
            "size": 130,
            "at": "l4:signs"
          },
          {
            "id": "b-k",
            "t": "text",
            "text": "Mốc = biển báo",
            "x": 3108,
            "y": 440,
            "size": 54,
            "at": "l4:signs",
            "color": "accent",
            "hl": [
              {
                "text": "biển báo",
                "at": "l4:signs"
              }
            ]
          },
          {
            "id": "b-k2",
            "t": "text",
            "text": "Động từ = xe chở thì",
            "x": 3108,
            "y": 520,
            "size": 54,
            "at": "l4:car",
            "color": "accent",
            "hl": [
              {
                "text": "xe chở thì",
                "at": "l4:car"
              }
            ]
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Nguồn: British Council LearnEnglish",
            "x": 2928,
            "y": 640,
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
          "say": "Many people think yesterday or tomorrow is enough, and the verb can stay.",
          "sub": "Nhiều người nghĩ chỉ cần thêm yesterday hay tomorrow, động từ để nguyên cũng được.",
          "keys": [
            "để nguyên"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "British Council disagrees. The past simple has its own forms, like went and met.",
          "sub": "British Council thì khác: quá khứ đơn có dạng riêng, như went, met.",
          "keys": [
            "dạng riêng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And future plans come in types: a decision now, an earlier plan, or a fixed arrangement.",
          "sub": "Còn kế hoạch tương lai chia theo loại: quyết định ngay lúc nói, dự định có từ trước, hay lịch đã hẹn.",
          "keys": [
            "chia theo loại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: time words are road signs. The verb is the car that carries the tense.",
          "sub": "Rút ra: mốc thời gian là biển báo, động từ mới là chiếc xe chở thì.",
          "keys": [
            "biển báo"
          ]
        }
      ],
      "ref": "p2,p3"
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
            "text": "① Tối thứ Ba · Quá khứ đơn",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-u",
            "t": "text",
            "text": "đã xong · lặp lại · trạng thái",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l2:finished",
            "hl": [
              {
                "text": "đã xong",
                "at": "l2:finished"
              }
            ]
          },
          {
            "id": "c-e",
            "t": "text",
            "text": "I met my wife in 1983.",
            "x": 3996,
            "y": 270,
            "size": 60,
            "at": "l3:met",
            "color": "accent",
            "hl": [
              {
                "text": "met",
                "at": "l3:met"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Ví dụ: British Council LearnEnglish",
            "x": 3996,
            "y": 360,
            "size": 28,
            "at": "l3",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-ed",
            "t": "text",
            "text": "-ed: work → worked",
            "x": 3996,
            "y": 440,
            "size": 50,
            "at": "l4:spelling",
            "hl": [
              {
                "text": "-ed",
                "at": "l4:spelling"
              }
            ]
          },
          {
            "id": "c-ir",
            "t": "text",
            "text": "go → went · buy → bought",
            "x": 3996,
            "y": 520,
            "size": 50,
            "at": "l4:went",
            "color": "coral",
            "hl": [
              {
                "text": "went",
                "at": "l4:went"
              },
              {
                "text": "bought",
                "at": "l4:bought"
              }
            ]
          },
          {
            "id": "c-n",
            "t": "text",
            "text": "+ did, didn't → Bài 1",
            "x": 3996,
            "y": 620,
            "size": 46,
            "at": "l5:did",
            "color": "accent"
          },
          {
            "id": "c-nb",
            "t": "illus",
            "name": "spiral-notepad",
            "x": 5186,
            "y": 180,
            "size": 260,
            "at": "l1:notebook"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, Tuesday evening. Thảo opens her notebook. The foundation: the past simple.",
          "sub": "Chặng một, tối thứ Ba. Thảo mở sổ. Nền móng: thì quá khứ đơn.",
          "keys": [
            "quá khứ đơn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "British Council: it's for finished actions, repeated actions, and past states.",
          "sub": "Theo British Council, nó dùng cho việc đã xong, việc lặp lại và trạng thái trong quá khứ.",
          "keys": [
            "việc đã xong"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Like this: I met my wife in nineteen eighty-three.",
          "sub": "Như câu: I met my wife in 1983."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The hard parts: ed spelling, and irregular verbs. Go becomes went, buy becomes bought.",
          "sub": "Phần khó: chính tả -ed và động từ bất quy tắc. Go thành went, buy thành bought.",
          "keys": [
            "bất quy tắc"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The first lesson covers all that, plus negatives and questions with did.",
          "sub": "Bài đầu tiên lo hết phần này, kèm câu phủ định và câu hỏi với did."
        }
      ],
      "ref": "p4"
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
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Tư · Đang làm gì?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-f",
            "t": "text",
            "text": "was / were + V-ing",
            "x": 5964,
            "y": 170,
            "size": 58,
            "at": "l2:Was",
            "color": "accent",
            "hl": [
              {
                "text": "V-ing",
                "at": "l2:ing"
              }
            ]
          },
          {
            "id": "d-e1",
            "t": "text",
            "text": "We were watching television",
            "x": 5964,
            "y": 270,
            "size": 48,
            "at": "l3:watching",
            "hl": [
              {
                "text": "were watching",
                "at": "l3:watching"
              }
            ]
          },
          {
            "id": "d-e2",
            "t": "text",
            "text": "when the power went off.",
            "x": 6004,
            "y": 340,
            "size": 48,
            "at": "l3:went",
            "color": "coral",
            "hl": [
              {
                "text": "went off",
                "at": "l3:went"
              }
            ]
          },
          {
            "id": "d-w",
            "t": "text",
            "text": "+ when, while → Bài 2",
            "x": 5964,
            "y": 440,
            "size": 46,
            "at": "l4:while",
            "color": "accent"
          },
          {
            "id": "d-tv",
            "t": "illus",
            "name": "television",
            "x": 7204,
            "y": 200,
            "size": 220,
            "at": "l3:television"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, Wednesday. What were you doing when something happened? Add the past continuous.",
          "sub": "Chặng hai, thứ Tư. Đang làm gì thì chuyện gì xảy ra? Thêm thì quá khứ tiếp diễn.",
          "keys": [
            "quá khứ tiếp diễn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Was or were, plus a verb with ing.",
          "sub": "Was hoặc were, cộng động từ thêm ing."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "We were watching television when the power went off.",
          "sub": "We were watching television when the power went off: đang xem tivi thì mất điện."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The second lesson pairs the two tenses, with when and while.",
          "sub": "Bài thứ hai chỉ cách ghép hai thì, dùng when và while.",
          "keys": [
            "when và while"
          ]
        }
      ],
      "ref": "p5"
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
            "id": "d-h",
            "t": "text",
            "text": "Thói quen ngày xưa:",
            "x": 6864,
            "y": 440,
            "size": 48,
            "at": "l1:habits",
            "color": "coral"
          },
          {
            "id": "d-u",
            "t": "text",
            "text": "used to: đã thôi",
            "x": 6864,
            "y": 515,
            "size": 50,
            "at": "l1:stopped",
            "hl": [
              {
                "text": "đã thôi",
                "at": "l1:stopped"
              }
            ]
          },
          {
            "id": "d-wd",
            "t": "text",
            "text": "would: chỉ việc lặp lại",
            "x": 6864,
            "y": 590,
            "size": 46,
            "at": "l2:Would"
          },
          {
            "id": "d-x",
            "t": "text",
            "text": "didn't used to",
            "x": 5964,
            "y": 560,
            "size": 50,
            "at": "l3:didn't",
            "color": "muted"
          },
          {
            "id": "d-xx",
            "t": "strike",
            "over": "d-x",
            "at": "l3:mistake"
          },
          {
            "id": "d-ok",
            "t": "text",
            "text": "→ didn't use to",
            "x": 5964,
            "y": 640,
            "size": 50,
            "at": "l3:mistake",
            "color": "accent",
            "hl": [
              {
                "text": "use to",
                "at": "l3:mistake"
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
          "say": "Old habits get their own tool: used to, for habits and states that have stopped.",
          "sub": "Thói quen ngày xưa có cách nói riêng: used to cho thói quen và trạng thái đã thôi.",
          "keys": [
            "đã thôi"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Would works only for repeated actions.",
          "sub": "Would chỉ dùng cho việc lặp lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Classic mistake: didn't used to. It's didn't use to.",
          "sub": "Lỗi kinh điển: didn't used to. Phải là didn't use to."
        }
      ],
      "ref": "p6"
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
            "text": "③ Thứ Năm · Làm được",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "page-facing-up",
                "laptop"
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
            "at": "l1:office",
            "caption": "Thứ Năm 17:00 · văn phòng",
            "icon": "page-facing-up"
          },
          {
            "id": "e-x",
            "t": "text",
            "text": "Yesterday I could finish…?",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:could",
            "color": "muted"
          },
          {
            "id": "e-c",
            "t": "text",
            "text": "could = ngày xưa biết làm",
            "x": 7932,
            "y": 280,
            "size": 48,
            "at": "l4:Could",
            "hl": [
              {
                "text": "biết làm",
                "at": "l4:how"
              }
            ]
          },
          {
            "id": "e-a",
            "t": "text",
            "text": "was able to / managed to",
            "x": 7932,
            "y": 370,
            "size": 46,
            "at": "l4:able",
            "color": "accent",
            "hl": [
              {
                "text": "managed to",
                "at": "l4:managed"
              }
            ]
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "= hôm đó làm được",
            "x": 7972,
            "y": 440,
            "size": 48,
            "at": "l4:day",
            "color": "accent",
            "hl": [
              {
                "text": "làm được",
                "at": "l4:day"
              }
            ]
          },
          {
            "id": "e-n",
            "t": "text",
            "text": "→ một bài riêng trong chuỗi",
            "x": 7932,
            "y": 560,
            "size": 42,
            "at": "l5:lesson",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, Thursday, five p.m., at the office. Thảo is very proud of herself.",
          "sub": "Chặng ba, năm giờ chiều thứ Năm, ở văn phòng. Thảo đang tự hào lắm."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Yesterday I could finish the report before the deadline!",
          "sub": "Yesterday I could finish the report before the deadline!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Good news, slightly odd grammar. Past ability splits in two.",
          "sub": "Tin vui, nhưng ngữ pháp hơi lạ. Khả năng trong quá khứ tách làm đôi.",
          "keys": [
            "tách làm đôi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Could means you knew how, back then. Was able to and managed to mean you did it, that day.",
          "sub": "Could là ngày xưa biết làm. Was able to, managed to là hôm đó làm được.",
          "keys": [
            "hôm đó làm được"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "A later lesson shows why her sentence doesn't sound natural yet.",
          "sub": "Một bài sau sẽ giải thích vì sao câu của Thảo nghe chưa tự nhiên."
        }
      ],
      "ref": "p7"
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
            "at": "l7",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Tối thứ Năm · Bốn mảnh",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four",
            "hl": [
              {
                "text": "Bốn mảnh",
                "at": "l1:four"
              }
            ]
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
                  "id": "thao",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "mobile-phone",
                "cooked-rice"
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
                  "shot": "medium",
                  "on": "thao",
                  "move": "cut"
                },
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
            "at": "l1:practises",
            "caption": "Thứ Năm 21:00 · tập kể",
            "icon": "cooked-rice"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "1 · I used to cook…",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l3:One",
            "hl": [
              {
                "text": "used to",
                "at": "l3:One"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "2 · I was cooking lunch",
            "x": 60,
            "y": 1345,
            "size": 46,
            "at": "l5:scene",
            "hl": [
              {
                "text": "was cooking",
                "at": "l5:scene"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "3 · when my phone rang",
            "x": 60,
            "y": 1430,
            "size": 46,
            "at": "l5:phone",
            "color": "coral",
            "hl": [
              {
                "text": "rang",
                "at": "l5:phone"
              }
            ]
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "4 · I managed to answer",
            "x": 60,
            "y": 1515,
            "size": 46,
            "at": "l7:Four",
            "hl": [
              {
                "text": "managed to",
                "at": "l7:success"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "xong · đang dở · thói quen · khả năng",
            "x": 60,
            "y": 1650,
            "size": 40,
            "at": "l8:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "đang dở",
                "at": "l8:progress"
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
          "say": "Stop four, Thursday evening. Thảo practises a story for Sam, using all four pieces.",
          "sub": "Chặng bốn, tối thứ Năm. Thảo tập kể chuyện cho chị Sam, dùng đủ bốn mảnh.",
          "keys": [
            "bốn mảnh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "When I was a child, I used to cook with my grandmother.",
          "sub": "When I was a child, I used to cook with my grandmother.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One, the background: an old habit that has stopped.",
          "sub": "Một, nền từ xưa: thói quen đã thôi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Last Sunday, I was cooking lunch when my phone rang.",
          "sub": "Last Sunday, I was cooking lunch when my phone rang."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Two sets the scene, in progress. Three, the phone, cuts in with the past simple.",
          "sub": "Hai, khung cảnh đang diễn ra. Ba, điện thoại reo, chen ngang bằng quá khứ đơn.",
          "keys": [
            "chen ngang"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "I managed to answer it with one hand.",
          "sub": "I managed to answer it with one hand.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Four: one difficult success. Four sentences, four pasts.",
          "sub": "Bốn: một lần làm được việc khó. Bốn câu, bốn cách nói quá khứ."
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: finished actions, actions in progress, old habits, and ability.",
          "sub": "Rút ra: quá khứ có bốn mảnh: việc đã xong, việc đang dở, thói quen cũ và khả năng.",
          "keys": [
            "bốn mảnh"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Còn tương lai: một chữ “sẽ” là đủ?",
        "illus": "crystal-ball"
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
          "say": "Vietnamese has one word for the future. Is will enough?",
          "sub": "Tiếng Việt chỉ cần chữ “sẽ”. Vậy will là đủ?",
          "keys": [
            "chữ “sẽ”"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "online",
        "label": "Thứ Sáu 9:00 · gọi chị Sam",
        "actors": [
          {
            "id": "thao",
            "side": "left"
          },
          {
            "id": "sam",
            "side": "right",
            "pose": "hold"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Tomorrow I meet my boss",
          "why": "Lịch đã hẹn với người khác: dùng hiện tại tiếp diễn.",
          "rule": "Chọn theo loại kế hoạch"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Thảo, can we talk tomorrow morning?",
          "sub": "Thảo ơi, sáng mai mình nói chuyện được không?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Sorry, tomorrow I meet my boss.",
          "sub": "Sorry, tomorrow I meet my boss.",
          "face": "happy",
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
          "say": "Tomorrow is only a signal. This is a fixed arrangement with another person.",
          "sub": "Tomorrow chỉ là tín hiệu. Đây là lịch đã hẹn với người khác.",
          "keys": [
            "lịch đã hẹn"
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
          "say": "Sorry, I'm meeting my boss tomorrow.",
          "sub": "Sorry, I'm meeting my boss tomorrow.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Arranged plan, present continuous.",
          "sub": "Lịch đã hẹn: dùng hiện tại tiếp diễn.",
          "phase": "redo",
          "keys": [
            "hiện tại tiếp diễn"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p2,p10"
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
            "at": 150,
            "fit": "G",
            "ms": 900
          },
          {
            "at": "l5",
            "fit": [
              "g-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l8",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Sáu · Loại kế hoạch",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-1",
            "t": "text",
            "text": "will: quyết ngay lúc nói",
            "x": 2028,
            "y": 1260,
            "size": 46,
            "at": "l2:decision",
            "hl": [
              {
                "text": "will",
                "at": "l2:decision"
              }
            ]
          },
          {
            "id": "g-2",
            "t": "text",
            "text": "be going to: dự định từ trước",
            "x": 2028,
            "y": 1335,
            "size": 44,
            "at": "l2:going",
            "hl": [
              {
                "text": "be going to",
                "at": "l2:going"
              }
            ]
          },
          {
            "id": "g-3",
            "t": "text",
            "text": "am / is / are + V-ing: lịch hẹn",
            "x": 2028,
            "y": 1410,
            "size": 44,
            "at": "l3:arranged",
            "hl": [
              {
                "text": "lịch hẹn",
                "at": "l3:arranged"
              }
            ]
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2848,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "street",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "enter": "pop",
                  "at": "l4",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "motorcycle",
                "automobile"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "close",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l8",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l4:Dũng",
            "caption": "Thứ Sáu 18:00 · Dũng",
            "icon": "motorcycle"
          },
          {
            "id": "g-d1",
            "t": "text",
            "text": "I'm meeting a client… → lịch hẹn",
            "x": 2028,
            "y": 1520,
            "size": 40,
            "at": "l9:arrangement",
            "color": "accent"
          },
          {
            "id": "g-d2",
            "t": "text",
            "text": "I'm going to learn… → dự định",
            "x": 2028,
            "y": 1590,
            "size": 40,
            "at": "l9:plan",
            "color": "accent"
          },
          {
            "id": "g-d3",
            "t": "text",
            "text": "It'll probably rain → dự đoán",
            "x": 2028,
            "y": 1660,
            "size": 40,
            "at": "l9:prediction",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, Friday. Vietnamese just says sẽ. English picks by the type of plan.",
          "sub": "Chặng năm, thứ Sáu. Tiếng Việt chỉ cần chữ “sẽ”, tiếng Anh chọn theo loại kế hoạch.",
          "keys": [
            "theo loại kế hoạch"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "British Council: will for a decision made now. Be going to for a plan made earlier.",
          "sub": "British Council: will cho quyết định ngay lúc nói, be going to cho dự định có từ trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And the present continuous for things arranged with other people.",
          "sub": "Còn hiện tại tiếp diễn cho việc đã sắp xếp với người khác.",
          "keys": [
            "đã sắp xếp với người khác"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, the company's delivery guy, parking his motorbike. Three sentences about next week.",
          "sub": "Đây là Dũng, anh giao hàng của công ty, vừa dựng xe. Ba câu về tuần sau.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "I'm meeting a client on Monday at ten.",
          "sub": "I'm meeting a client on Monday at ten.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "I'm going to learn to drive this year.",
          "sub": "I'm going to learn to drive this year."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "dung",
          "say": "And it'll probably rain on Friday.",
          "sub": "And it'll probably rain on Friday.",
          "face": "thinking"
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Which form, and why? Think for a second.",
          "sub": "Mỗi câu dùng cách nào, vì sao? Nghĩ một giây.",
          "keys": [
            "vì sao"
          ]
        },
        {
          "id": "l9",
          "lang": "en",
          "who": "det",
          "say": "An arrangement, with a time. A plan he already had. A prediction, almost sure.",
          "sub": "Lịch đã hẹn, có giờ. Dự định có từ trước. Dự đoán gần như chắc chắn."
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 300
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
            "text": "⑥ Thứ Bảy · Chắc đến đâu?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-ar",
            "t": "arrow",
            "from": [
              4026,
              1650
            ],
            "to": [
              4026,
              1280
            ],
            "at": "l2:scale",
            "stroke": 8
          },
          {
            "id": "h-s1",
            "t": "text",
            "text": "will definitely",
            "x": 4076,
            "y": 1260,
            "size": 48,
            "at": "l2:definitely",
            "color": "accent",
            "hl": [
              {
                "text": "definitely",
                "at": "l2:definitely"
              }
            ]
          },
          {
            "id": "h-s2",
            "t": "text",
            "text": "will probably · be likely to",
            "x": 4076,
            "y": 1350,
            "size": 46,
            "at": "l2:probably"
          },
          {
            "id": "h-s3",
            "t": "text",
            "text": "might · may",
            "x": 4076,
            "y": 1440,
            "size": 46,
            "at": "l2:might",
            "color": "muted"
          },
          {
            "id": "h-n",
            "t": "text",
            "text": "→ bài cuối chuỗi: một thang",
            "x": 4076,
            "y": 1530,
            "size": 40,
            "at": "l3:last"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Loại kế hoạch? Chắc đến đâu?",
            "x": 3996,
            "y": 1690,
            "size": 52,
            "at": "l4:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Chắc đến đâu",
                "at": "l4:sure"
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
          "say": "Stop six, Saturday morning. Besides plans, we also predict, and each prediction has a level of certainty.",
          "sub": "Chặng sáu, sáng thứ Bảy. Ngoài kế hoạch còn có dự đoán, mà dự đoán nào cũng có mức chắc chắn.",
          "keys": [
            "mức chắc chắn"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "On the scale: will definitely, will probably, be likely to, might, may.",
          "sub": "Trên thang: will definitely, will probably, be likely to, might, may."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The last lesson builds that scale, and places probably and definitely.",
          "sub": "Bài cuối chuỗi dựng thang này, chỉ chỗ đặt probably, definitely."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: for the future, ask two questions. What kind of plan? And how sure am I?",
          "sub": "Rút ra: nói tương lai, hỏi hai câu. Loại kế hoạch nào? Và mình chắc đến đâu?",
          "keys": [
            "hỏi hai câu"
          ]
        }
      ],
      "ref": "p11,p13"
    },
    {
      "id": "s13",
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
            "id": "h-p",
            "t": "text",
            "text": "Quá khứ: yesterday · last week",
            "x": 4896,
            "y": 1260,
            "size": 44,
            "at": "l1:yesterday",
            "hl": [
              {
                "text": "yesterday",
                "at": "l1:yesterday"
              }
            ]
          },
          {
            "id": "h-p2",
            "t": "text",
            "text": "ago · in 2020 · when I was…",
            "x": 4896,
            "y": 1330,
            "size": 40,
            "at": "l1:ago"
          },
          {
            "id": "h-wh",
            "t": "text",
            "text": "While I was studying… = đang dở",
            "x": 4896,
            "y": 1400,
            "size": 40,
            "at": "l2:While",
            "color": "coral"
          },
          {
            "id": "h-f",
            "t": "text",
            "text": "Tương lai: tomorrow · next week",
            "x": 4896,
            "y": 1490,
            "size": 44,
            "at": "l3:tomorrow",
            "hl": [
              {
                "text": "tomorrow",
                "at": "l3:tomorrow"
              }
            ]
          },
          {
            "id": "h-f2",
            "t": "text",
            "text": "this weekend · tonight · soon",
            "x": 4896,
            "y": 1560,
            "size": 40,
            "at": "l3:soon"
          },
          {
            "id": "h-pp",
            "t": "text",
            "text": "have/has + V3: bài riêng",
            "x": 4896,
            "y": 1650,
            "size": 42,
            "at": "l5:perfect",
            "color": "muted"
          },
          {
            "id": "h-pp2",
            "t": "text",
            "text": "Có mốc đã qua → quá khứ đơn",
            "x": 4896,
            "y": 1720,
            "size": 44,
            "at": "l6:finished",
            "color": "accent",
            "hl": [
              {
                "text": "quá khứ đơn",
                "at": "l6:simple"
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
          "say": "Time signals for the past: yesterday, last night, last week, ago, in twenty twenty, when I was a child.",
          "sub": "Dấu hiệu quá khứ: yesterday, last night, last week, ago, in 2020, when I was a child.",
          "keys": [
            "Dấu hiệu quá khứ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "While often marks something in progress: while I was studying, I suddenly felt sleepy.",
          "sub": "While thường báo một việc đang diễn ra: While I was studying, I suddenly felt sleepy."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "For the future: tomorrow, next week, this weekend, tonight, soon.",
          "sub": "Dấu hiệu tương lai: tomorrow, next week, this weekend, tonight, soon."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "But tomorrow fits will, be going to and the present continuous, so still check the type of plan.",
          "sub": "Nhưng tomorrow đi được với cả will, be going to lẫn hiện tại tiếp diễn, nên vẫn phải xét loại kế hoạch.",
          "keys": [
            "xét loại kế hoạch"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And the present perfect? It already has its own lesson in the grammar review series.",
          "sub": "Còn hiện tại hoàn thành? Đã có bài riêng trong chuỗi ôn lại ngữ pháp."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The link to remember: a finished time like in nineteen eighty-three takes the past simple.",
          "sub": "Điểm nối cần nhớ: có mốc đã qua như in 1983 thì dùng quá khứ đơn.",
          "keys": [
            "mốc đã qua"
          ]
        }
      ],
      "ref": "p14,p15,p16"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Thảo kể chuyện tuần này",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Yesterday I go to work. Tomorrow I meet my boss.",
        "right": "Yesterday I went to work. I'm meeting my boss tomorrow.",
        "wrongIllus": "red-question-mark",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: yesterday I go. Tomorrow I meet.",
          "sub": "Trước: Yesterday I go. Tomorrow I meet."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: yesterday I went. I'm meeting my boss tomorrow.",
          "sub": "Sau: Yesterday I went. I'm meeting my boss tomorrow.",
          "keys": [
            "I went",
            "I'm meeting"
          ]
        }
      ],
      "ref": "p2,p3"
    },
    {
      "id": "s15",
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Chủ nhật · Ba câu mỗi tối",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop seven",
            "hl": [
              {
                "text": "Ba câu",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1270,
            "w": 44,
            "h": 44,
            "at": "l2:today",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1252,
            "size": 56,
            "at": "l2:today+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "việc đã làm hôm nay",
            "x": 6029,
            "y": 1262,
            "size": 44,
            "at": "l2:today+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 5964,
            "y": 1355,
            "w": 44,
            "h": 44,
            "at": "l2:old",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1337,
            "size": 56,
            "at": "l2:old+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "chuyện ngày xưa",
            "x": 6029,
            "y": 1347,
            "size": 44,
            "at": "l2:old+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1440,
            "w": 44,
            "h": 44,
            "at": "l2:tomorrow",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 5968,
            "y": 1422,
            "size": 56,
            "at": "l2:tomorrow+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "kế hoạch ngày mai",
            "x": 6029,
            "y": 1432,
            "size": 44,
            "at": "l2:tomorrow+200"
          },
          {
            "id": "i-v",
            "t": "text",
            "text": "→ soát động từ từng câu",
            "x": 5964,
            "y": 1540,
            "size": 48,
            "at": "l3:verb",
            "color": "accent",
            "hl": [
              {
                "text": "soát động từ",
                "at": "l3:verb"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“…có ngày nên kim”",
            "x": 5964,
            "y": 1650,
            "size": 54,
            "at": "l4:needle",
            "color": "accent",
            "hl": [
              {
                "text": "nên kim",
                "at": "l4:needle"
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
          "say": "Stop seven, Sunday night. One practice for the whole series: three sentences every evening.",
          "sub": "Chặng bảy, tối Chủ nhật. Một cách luyện cho cả chuỗi: mỗi tối viết ba câu.",
          "keys": [
            "mỗi tối viết ba câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One about today, one about the old days, one about tomorrow's plan.",
          "sub": "Một câu về việc đã làm hôm nay, một câu về chuyện ngày xưa, một câu về kế hoạch ngày mai."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Then check the verb in each one.",
          "sub": "Rồi soát động từ của từng câu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Grind a little every night, and the iron becomes a needle.",
          "sub": "Mỗi tối mài một chút, “có công mài sắt, có ngày nên kim”.",
          "keys": [
            "có ngày nên kim"
          ]
        }
      ],
      "ref": "p18"
    },
    {
      "id": "s16",
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
              "i-v2"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-v2",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 1200,
            "w": 780,
            "data": {
              "set": "online",
              "actors": [
                {
                  "id": "thao",
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
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l3",
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
            "at": "l1:Tuesday",
            "caption": "Thứ Ba tuần sau 9:00 · gọi chị Sam",
            "icon": "laptop"
          },
          {
            "id": "i-w",
            "t": "text",
            "text": "went · was cooking · I'm meeting",
            "x": 6864,
            "y": 1760,
            "size": 40,
            "at": "l5:verb",
            "color": "accent",
            "hl": [
              {
                "text": "went",
                "at": "l5:verb"
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
          "say": "Next Tuesday, nine a.m. Same call, same question.",
          "sub": "Thứ Ba tuần sau, chín giờ sáng. Vẫn cuộc gọi ấy, vẫn câu hỏi ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "Morning, Thảo! How's your week going?",
          "sub": "Chào Thảo! Tuần này của em thế nào?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Yesterday I went to work early. I was checking your order when the factory called.",
          "sub": "Yesterday I went to work early. I was checking your order when the factory called.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "And I'm meeting you at the airport on Friday. Got it.",
          "sub": "And I'm meeting you at the airport on Friday. Got it.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The photo on the wall starts to move. Every verb carries its tense now.",
          "sub": "Tấm ảnh treo tường bắt đầu chuyển động. Giờ động từ nào cũng chở đúng thì.",
          "keys": [
            "chở đúng thì"
          ]
        }
      ],
      "ref": "p9,p13"
    },
    {
      "id": "s17",
      "module": "BRK-08",
      "data": {
        "title": "Lộ trình sáu bài",
        "points": [
          {
            "label": "Bài 1",
            "sub": "Quá khứ đơn",
            "illus": "spiral-notepad"
          },
          {
            "label": "Bài 2",
            "sub": "Đang dở, chen ngang",
            "illus": "television"
          },
          {
            "label": "Bài 3",
            "sub": "Thói quen xưa",
            "illus": "old-woman"
          },
          {
            "label": "Bài 4",
            "sub": "Ba cách nói tương lai",
            "illus": "spiral-calendar"
          },
          {
            "label": "Bài 5",
            "sub": "Could, was able to",
            "illus": "check-mark-button"
          },
          {
            "label": "Bài 6",
            "sub": "Chắc đến đâu",
            "illus": "crystal-ball"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Past simple first: everything else builds on it.",
          "sub": "Quá khứ đơn trước: mọi thì quá khứ khác dựa vào nó.",
          "keys": [
            "Quá khứ đơn trước"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Then easy to hard, as British Council lists them.",
          "sub": "Rồi đi từ dễ đến khó, theo danh mục British Council.",
          "keys": [
            "từ dễ đến khó"
          ]
        }
      ],
      "ref": "p17,p19"
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
            "at": "l1:end",
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l2",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "B",
            "zoom": 0.8
          },
          {
            "at": "l4:end",
            "fit": "all",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tóm lại: bản đồ hai phía",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:map"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 1600,
            "y": 1130,
            "at": "l2:four"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 3618,
            "y": 1130,
            "at": "l3:two"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3568,
            "y": 440,
            "at": "l4:signs"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So here's the whole map, past on one side, future on the other.",
          "sub": "Tóm lại, đây là cả tấm bản đồ: một bên quá khứ, một bên tương lai.",
          "keys": [
            "cả tấm bản đồ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The past has four pieces: finished, in progress, old habits, ability.",
          "sub": "Quá khứ có bốn mảnh: đã xong, đang dở, thói quen cũ, khả năng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The future has two questions: what kind of plan, and how sure.",
          "sub": "Tương lai có hai câu hỏi: loại kế hoạch nào, và chắc đến đâu."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And time words are road signs. The verb still has to change.",
          "sub": "Còn mốc thời gian chỉ là biển báo. Động từ vẫn phải đổi."
        }
      ],
      "ref": "p9,p13,outro"
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
            "id": "j-c0",
            "t": "box",
            "x": 7932,
            "y": 1260,
            "w": 44,
            "h": 44,
            "at": "l1:change",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1242,
            "size": 56,
            "at": "l1:change+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "có mốc: đổi động từ",
            "x": 7997,
            "y": 1252,
            "size": 44,
            "at": "l1:change+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1345,
            "w": 44,
            "h": 44,
            "at": "l2:piece",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1327,
            "size": 56,
            "at": "l2:piece+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "quá khứ: chọn đúng mảnh",
            "x": 7997,
            "y": 1337,
            "size": 44,
            "at": "l2:piece+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1430,
            "w": 44,
            "h": 44,
            "at": "l2:plan",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1412,
            "size": 56,
            "at": "l2:plan+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "tương lai: loại kế hoạch",
            "x": 7997,
            "y": 1422,
            "size": 44,
            "at": "l2:plan+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1515,
            "w": 44,
            "h": 44,
            "at": "l2:sure",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1497,
            "size": 56,
            "at": "l2:sure+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "dự đoán: chắc đến đâu",
            "x": 7997,
            "y": 1507,
            "size": 44,
            "at": "l2:sure+200"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: quá khứ đơn",
            "x": 7932,
            "y": 1650,
            "size": 42,
            "at": "l4:Next",
            "color": "accent"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; cách dùng có thể khác theo ngữ cảnh — tra từ điển hoặc hỏi giáo viên. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1780,
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
          "say": "Quick checks: a time word means the verb must change.",
          "sub": "Soát nhanh: có mốc thời gian thì động từ phải đổi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Pick the right past piece. For the future, name the type of plan and how sure you are.",
          "sub": "Chọn đúng mảnh quá khứ. Với tương lai, gọi tên loại kế hoạch và mức chắc chắn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Try tonight: three sentences, today, the old days, tomorrow.",
          "sub": "Làm ngay tối nay: ba câu, hôm nay, ngày xưa, ngày mai.",
          "keys": [
            "ba câu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next up: the past simple, with ed spelling and irregular verbs.",
          "sub": "Bài tiếp theo: quá khứ đơn, thêm -ed thế nào và học động từ bất quy tắc ra sao."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p18,p19,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "Your friend says yesterday I go to work, what should she change?",
        "options": [
          "Remove yesterday, because the sentence is already clear without any time word",
          "Add will before go, because every story about work needs the future",
          "Change go to went, because the time word alone does not show the past"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "spiral-notepad",
        "why": "Mốc yesterday chỉ là tín hiệu. Động từ vẫn phải đổi sang quá khứ là went."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Your friend says yesterday I go to work, what should she change?",
          "sub": "Bạn của bạn nói yesterday I go to work, bạn ấy nên sửa gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Change go to went, because the time word alone does not show the past.",
          "sub": "Đổi go thành went, vì riêng mốc thời gian không cho thấy quá khứ."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Yesterday I went to work.",
          "sub": "Yesterday I went to work."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[38]"
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
          "say": "You watched the whole map. Now try the forty questions below.",
          "sub": "Bạn đã xem hết tấm bản đồ. Giờ thử bốn mươi câu hỏi bên dưới nhé.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân (#136) + biến thể #144. HOOK-21 (câu hỏi đoán sai): “Yesterday I go to work.” — có yesterday rồi, đủ chưa? → chưa đủ. Dòng thời gian: một tuần của Thảo trước khi chị Sam sang Hà Nội (thứ Ba 9:00 gọi video → ① tối thứ Ba quá khứ đơn → ② thứ Tư đang dở + thói quen → ③ thứ Năm 17:00 could/was able to → ④ tối thứ Năm bốn mảnh → “Khoan đã!” thứ Sáu 9:00 “Tomorrow I meet my boss” → ⑤ thứ Sáu Dũng ba câu tuần sau → ⑥ thứ Bảy mức chắc chắn, dấu hiệu, hiện tại hoàn thành → ⑦ Chủ nhật ba câu mỗi tối → thứ Ba tuần sau 9:00 khép vòng). Nhân vật: Thảo (giữ tên), chị Sam, Dũng (= anh Quang p12) — w145/_series/grammar-a2-past-and-future.md. BRK-07 (rehook tương lai), BRK-04 (trước/sau), BRK-08 (lộ trình sáu bài). Ca dao: “Có công mài sắt, có ngày nên kim”.",
  "loop": {
    "open": "s01",
    "close": "s16"
  }
};
