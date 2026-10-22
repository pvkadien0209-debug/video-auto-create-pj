// future-continuous-and-future-perfect--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "future-continuous-and-future-perfect--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "b2-grammar-for-exam-takers",
    "slug": "future-continuous-and-future-perfect",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Will be doing và will have done dùng khi nào?",
    "series": "Ngữ pháp B2 để viết và nói ăn điểm — cho người nhắm VSTEP bậc 4, IELTS 6.0"
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
            "text": "5 năm nữa?",
            "x": 60,
            "y": 110,
            "size": 150,
            "at": "l1:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 năm",
                "at": "l1:five"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "What will you be doing…?",
            "x": 70,
            "y": 330,
            "size": 54,
            "at": "l1:doing"
          },
          {
            "id": "a-w",
            "t": "text",
            "text": "I will… I will… I will…",
            "x": 70,
            "y": 430,
            "size": 54,
            "at": "l2:will",
            "color": "muted"
          },
          {
            "id": "a-wx",
            "t": "strike",
            "over": "a-w",
            "at": "l2:one"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "What will you be doing in five years? A classic speaking question.",
          "sub": "Năm năm nữa bạn đang làm gì? Câu hỏi kinh điển của phần Nói.",
          "keys": [
            "Năm năm nữa"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And many candidates have one tool for it: I will, I will, and again, I will.",
          "sub": "Và nhiều thí sinh chỉ có một khuôn: I will, I will, rồi lại I will.",
          "keys": [
            "một khuôn"
          ]
        }
      ],
      "ref": "p19,intro"
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
            "y": 110,
            "w": 800,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "envelope",
                "graduation-cap"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
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
            "at": "l1",
            "caption": "Thứ Tư 7:00 · thư xin học bổng",
            "icon": "envelope"
          },
          {
            "id": "a-gap",
            "t": "text",
            "text": "At nine tomorrow, I … my exam",
            "x": 60,
            "y": 540,
            "size": 46,
            "at": "l3:nine",
            "color": "coral",
            "hl": [
              {
                "text": "…",
                "at": "l3:exam"
              }
            ]
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Chưa đỗ ông Nghè…”",
            "x": 60,
            "y": 650,
            "size": 54,
            "at": "l5:mandarin",
            "color": "accent",
            "hl": [
              {
                "text": "Chưa đỗ ông Nghè",
                "at": "l5:mandarin"
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
          "say": "Meet Lan, a student with her final exam tomorrow at nine.",
          "sub": "Đây là Lan, sinh viên, chín giờ sáng mai thi cuối kỳ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Wednesday, seven a.m. She's writing a scholarship letter, coffee in one hand, panic in the other.",
          "sub": "Thứ Tư, bảy giờ sáng. Lan viết thư xin học bổng, tay cầm cà phê, tay kia cầm… nỗi lo.",
          "keys": [
            "thư xin học bổng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "At nine tomorrow morning, I will take my exam? Will be taking? Will have taken?",
          "sub": "At nine tomorrow morning, I will take? Will be taking? Will have taken?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three futures, one blank. Our ancestors had a saying for people who talk about tomorrow too boldly.",
          "sub": "Ba kiểu tương lai, một chỗ trống. Ông bà ta có câu dành cho người nói về ngày mai quá sớm."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not yet a mandarin, already bossing the village. Today we talk about tomorrow precisely instead.",
          "sub": "“Chưa đỗ ông Nghè đã đe hàng tổng.” Hôm nay ta học nói về ngày mai cho chính xác.",
          "keys": [
            "Chưa đỗ ông Nghè"
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
      "ref": "p9"
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
            "text": "Đang dở hay đã xong?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:where",
            "hl": [
              {
                "text": "Đang dở",
                "at": "l3:progress"
              },
              {
                "text": "đã xong",
                "at": "l3:finished"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "will, be going to = sẽ làm",
            "x": 2028,
            "y": 170,
            "size": 48,
            "at": "l1:going to"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "… nhưng nằm đâu trên dòng thời gian?",
            "x": 2028,
            "y": 245,
            "size": 42,
            "at": "l2:timeline",
            "color": "coral"
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "Cambridge: B2 = nói tương lai thành thạo",
            "x": 2028,
            "y": 330,
            "size": 40,
            "at": "l4:B2",
            "color": "accent",
            "hl": [
              {
                "text": "thành thạo",
                "at": "l4:competent"
              }
            ]
          },
          {
            "id": "b-ln",
            "t": "line",
            "pts": [
              [
                2048,
                560
              ],
              [
                3628,
                560
              ]
            ],
            "at": "l3:line",
            "stroke": 8
          },
          {
            "id": "b-pt",
            "t": "line",
            "pts": [
              [
                2968,
                470
              ],
              [
                2968,
                650
              ]
            ],
            "at": "l3:point",
            "stroke": 10,
            "color": "coral"
          },
          {
            "id": "b-pl",
            "t": "text",
            "text": "mốc",
            "x": 2938,
            "y": 410,
            "size": 46,
            "at": "l3:point",
            "color": "coral"
          },
          {
            "id": "b-seg1",
            "t": "box",
            "x": 2668,
            "y": 520,
            "w": 560,
            "h": 30,
            "at": "l3:progress",
            "color": "accent",
            "stroke": 6
          },
          {
            "id": "b-s1",
            "t": "text",
            "text": "will be doing",
            "x": 2688,
            "y": 600,
            "size": 44,
            "at": "l3:progress",
            "color": "accent"
          },
          {
            "id": "b-seg2",
            "t": "box",
            "x": 2168,
            "y": 520,
            "w": 600,
            "h": 30,
            "at": "l3:finished",
            "stroke": 6
          },
          {
            "id": "b-s2",
            "t": "text",
            "text": "will have done",
            "x": 2168,
            "y": 600,
            "size": 44,
            "at": "l3:finished"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Will and be going to say: I'll do it. But where does it sit on the timeline?",
          "sub": "Will và be going to đủ để nói “sẽ làm”. Nhưng việc đó nằm ở đâu trên dòng thời gian?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "They don't tell you. These two forms fill exactly that gap on the timeline.",
          "sub": "Chúng không cho biết. Hai cấu trúc hôm nay lấp đúng chỗ trống ấy trên dòng thời gian."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Draw a line, mark a point. At that point, is the action in progress, or already finished?",
          "sub": "Vẽ một đường, đánh một mốc. Tại mốc đó, việc đang dở hay đã xong?",
          "keys": [
            "đang dở hay đã xong"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Cambridge even names competent future forms as one sign of B2. One will for everything won't cut it.",
          "sub": "Cambridge còn lấy việc dùng thành thạo các cách nói tương lai làm một ví dụ cho B2. Một will cho mọi việc là chưa đủ.",
          "keys": [
            "thành thạo"
          ]
        }
      ],
      "ref": "p1,p2,p8"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Thứ Tư của Lan",
        "points": [
          {
            "label": "7:00",
            "sub": "Viết thư",
            "illus": "envelope"
          },
          {
            "label": "10:00",
            "sub": "Đọc lại",
            "illus": "open-book"
          },
          {
            "label": "17:00",
            "sub": "Lớp nói",
            "illus": "microphone"
          },
          {
            "label": "20:00",
            "sub": "Thảo hỏi",
            "illus": "mobile-phone"
          },
          {
            "label": "7:00 thứ Năm",
            "sub": "Hoàn thư",
            "illus": "check-mark-button"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Letter, lessons, class, a late question.",
          "sub": "Lá thư, bài học, lớp nói, một câu hỏi muộn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "One Wednesday, one blank to fill.",
          "sub": "Một ngày thứ Tư, một chỗ trống cần điền.",
          "keys": [
            "một chỗ trống"
          ]
        }
      ],
      "ref": "intro"
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
            "text": "① 8:00 · Will be doing",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one",
            "hl": [
              {
                "text": "be doing",
                "at": "l1:be"
              }
            ]
          },
          {
            "id": "c-f",
            "t": "text",
            "text": "will / won't + be + V-ing",
            "x": 3996,
            "y": 170,
            "size": 54,
            "at": "l2:form",
            "color": "accent",
            "hl": [
              {
                "text": "be + V-ing",
                "at": "l2:ing"
              }
            ]
          },
          {
            "id": "c-u",
            "t": "text",
            "text": "đang diễn ra tại một lúc",
            "x": 3996,
            "y": 260,
            "size": 50,
            "at": "l2:moment",
            "hl": [
              {
                "text": "tại một lúc",
                "at": "l2:moment"
              }
            ]
          },
          {
            "id": "c-e",
            "t": "text",
            "text": "When you come out of school,",
            "x": 3996,
            "y": 360,
            "size": 42,
            "at": "l3:school"
          },
          {
            "id": "c-e2",
            "t": "text",
            "text": "I'll be boarding a plane",
            "x": 4036,
            "y": 425,
            "size": 46,
            "at": "l3:boarding",
            "color": "accent",
            "hl": [
              {
                "text": "be boarding",
                "at": "l3:boarding"
              }
            ]
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Ví dụ: British Council LearnEnglish",
            "x": 3996,
            "y": 500,
            "size": 28,
            "at": "l3",
            "font": "base",
            "color": "muted",
            "enter": "fade"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Dùng 2: tạm thời, khác thường",
            "x": 4896,
            "y": 170,
            "size": 48,
            "at": "l5:temporary",
            "color": "coral",
            "hl": [
              {
                "text": "tạm thời",
                "at": "l5:temporary"
              }
            ]
          },
          {
            "id": "c-2e",
            "t": "text",
            "text": "Next month I'll be working",
            "x": 4896,
            "y": 250,
            "size": 44,
            "at": "l6:working",
            "hl": [
              {
                "text": "be working",
                "at": "l6:working"
              }
            ]
          },
          {
            "id": "c-2f",
            "t": "text",
            "text": "from home…",
            "x": 4936,
            "y": 320,
            "size": 44,
            "at": "l6:home"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one, eight a.m. Lan takes a break from the letter and opens her notes. Will be doing.",
          "sub": "Chặng một, tám giờ. Lan tạm gác lá thư, mở vở ghi. Will be doing."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Form: will or won't, be, plus a verb with ing. An action in progress at a moment in the future.",
          "sub": "Dạng: will hoặc won't, be, cộng động từ thêm ing. Việc sẽ đang diễn ra tại một lúc trong tương lai.",
          "keys": [
            "đang diễn ra"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "British Council's example: when you come out of school tomorrow, I'll be boarding a plane.",
          "sub": "Ví dụ của British Council: lúc bạn tan học ngày mai, tôi đang lên máy bay."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Second use: something new, unusual or temporary. Bus today, train next week.",
          "sub": "Cách dùng thứ hai: việc mới, khác thường hay tạm thời. Hôm nay đi xe buýt, tuần sau đi tàu.",
          "keys": [
            "tạm thời"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next month I'll be working from home while the office is repaired.",
          "sub": "Next month I'll be working from home while the office is repaired."
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
            "text": "② 10:00 · Will have done",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two",
            "hl": [
              {
                "text": "have done",
                "at": "l1:have"
              }
            ]
          },
          {
            "id": "d-f",
            "t": "text",
            "text": "will / won't + have + V3",
            "x": 5964,
            "y": 170,
            "size": 54,
            "at": "l2:participle",
            "color": "accent",
            "hl": [
              {
                "text": "have + V3",
                "at": "l2:participle"
              }
            ]
          },
          {
            "id": "d-u",
            "t": "text",
            "text": "xong TRƯỚC một mốc",
            "x": 5964,
            "y": 260,
            "size": 52,
            "at": "l2:before",
            "hl": [
              {
                "text": "TRƯỚC",
                "at": "l2:before"
              }
            ]
          },
          {
            "id": "d-e",
            "t": "text",
            "text": "I'll have finished cooking by then",
            "x": 5964,
            "y": 360,
            "size": 44,
            "at": "l3:finished",
            "color": "accent",
            "hl": [
              {
                "text": "have finished",
                "at": "l3:finished"
              }
            ]
          },
          {
            "id": "d-n",
            "t": "text",
            "text": "Không hẳn là “thì”:",
            "x": 6864,
            "y": 170,
            "size": 48,
            "at": "l5:tenses",
            "color": "coral"
          },
          {
            "id": "d-n2",
            "t": "text",
            "text": "will + be doing / have done",
            "x": 6864,
            "y": 250,
            "size": 44,
            "at": "l5:infinitive"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Sau will: be / have, không chia",
            "x": 6864,
            "y": 340,
            "size": 44,
            "at": "l6:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "không chia",
                "at": "l6:never"
              }
            ]
          },
          {
            "id": "d-x",
            "t": "text",
            "text": "She will has finished",
            "x": 6864,
            "y": 430,
            "size": 46,
            "at": "l6:has",
            "color": "muted"
          },
          {
            "id": "d-xx",
            "t": "strike",
            "over": "d-x",
            "at": "l6:has+400"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, ten a.m. The second form: will have done.",
          "sub": "Chặng hai, mười giờ. Dạng thứ hai: will have done."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Will or won't, have, plus the past participle. Something completed before a future point.",
          "sub": "Will hoặc won't, have, cộng quá khứ phân từ. Việc sẽ hoàn thành trước một mốc trong tương lai.",
          "keys": [
            "trước một mốc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "British Council: I'll have finished cooking by then. The cooking sits entirely before the point.",
          "sub": "British Council: I'll have finished cooking by then. Việc nấu nằm trọn trước mốc."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Did you know? The LearnEnglish team says these aren't strictly tenses: just will plus an infinitive form.",
          "sub": "Bạn có biết: đội LearnEnglish nói xét chặt thì đây không hẳn là thì, mà là will cộng một dạng nguyên mẫu.",
          "keys": [
            "không hẳn là thì"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: after will, always be or have, never has. She will has finished? No way.",
          "sub": "Rút ra: sau will luôn là be hoặc have, không chia. She will has finished? Không đời nào.",
          "keys": [
            "không chia"
          ]
        }
      ],
      "ref": "p5,p6,p7,p8"
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
            "id": "d-ln",
            "t": "line",
            "pts": [
              [
                5964,
                600
              ],
              [
                6724,
                600
              ]
            ],
            "at": "l1:line",
            "stroke": 7
          },
          {
            "id": "d-pt",
            "t": "line",
            "pts": [
              [
                6524,
                530
              ],
              [
                6524,
                670
              ]
            ],
            "at": "l1:point",
            "stroke": 9,
            "color": "coral"
          },
          {
            "id": "d-seg",
            "t": "box",
            "x": 6024,
            "y": 585,
            "w": 440,
            "h": 30,
            "at": "l1:ended",
            "stroke": 6
          },
          {
            "id": "d-sl",
            "t": "text",
            "text": "have done: xong bên trái mốc",
            "x": 5964,
            "y": 680,
            "size": 40,
            "at": "l1:left",
            "hl": [
              {
                "text": "bên trái mốc",
                "at": "l1:left"
              }
            ]
          },
          {
            "id": "d-seg2",
            "t": "box",
            "x": 6904,
            "y": 585,
            "w": 600,
            "h": 30,
            "at": "l2:cross",
            "color": "accent",
            "stroke": 6
          },
          {
            "id": "d-ln2",
            "t": "line",
            "pts": [
              [
                6864,
                600
              ],
              [
                7584,
                600
              ]
            ],
            "at": "l2:cross",
            "stroke": 7
          },
          {
            "id": "d-pt2",
            "t": "line",
            "pts": [
              [
                7204,
                530
              ],
              [
                7204,
                670
              ]
            ],
            "at": "l2:cross",
            "stroke": 9,
            "color": "coral"
          },
          {
            "id": "d-sl2",
            "t": "text",
            "text": "be doing: cắt qua mốc",
            "x": 6864,
            "y": 680,
            "size": 40,
            "at": "l2:cross",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "On our line: a segment that has already ended, left of the point.",
          "sub": "Trên dòng thời gian: một đoạn đã kết thúc, nằm bên trái mốc.",
          "keys": [
            "bên trái mốc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Will be doing would cross the point instead. Still going.",
          "sub": "Còn will be doing là một đoạn cắt qua mốc, vẫn đang chạy."
        }
      ],
      "ref": "p8"
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
            "text": "③ 12:00 · Điền chỗ trống",
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
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "envelope",
                "alarm-clock"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:letter",
            "caption": "12:00 · quay lại lá thư",
            "icon": "envelope"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "9:00 bài thi đang diễn ra",
            "x": 7932,
            "y": 170,
            "size": 48,
            "at": "l2:in progress"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "At nine, I'll be taking",
            "x": 7932,
            "y": 250,
            "size": 50,
            "at": "l3:taking",
            "color": "accent",
            "hl": [
              {
                "text": "be taking",
                "at": "l3:taking"
              }
            ]
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "my final exam",
            "x": 7972,
            "y": 325,
            "size": 50,
            "at": "l3:exam"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "By nine, I'll have taken it",
            "x": 7932,
            "y": 430,
            "size": 46,
            "at": "l4:By nine",
            "hl": [
              {
                "text": "have taken",
                "at": "l4:taken"
              }
            ]
          },
          {
            "id": "e-5",
            "t": "text",
            "text": "→ đến 9 giờ đã thi xong",
            "x": 7972,
            "y": 505,
            "size": 44,
            "at": "l4:done",
            "color": "coral"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Đang dở: be doing · xong: have done",
            "x": 7932,
            "y": 620,
            "size": 42,
            "at": "l5:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Đang dở",
                "at": "l5:progress"
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
          "say": "Stop three, noon. Back to the letter and its blank.",
          "sub": "Chặng ba, mười hai giờ trưa. Quay lại lá thư và chỗ trống."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "At nine, the exam is in progress. I'm sitting there, writing.",
          "sub": "Lúc chín giờ, bài thi đang diễn ra. Mình đang ngồi viết.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "So: at nine tomorrow morning, I'll be taking my final exam.",
          "sub": "Vậy: At nine tomorrow morning, I'll be taking my final exam.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Right. If she meant done by nine, it's: by nine, I will have taken my final exam.",
          "sub": "Chuẩn. Nếu muốn nói đến chín giờ đã thi xong thì: By nine, I will have taken my final exam."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: in progress at the point, be doing. Finished before the point, have done.",
          "sub": "Rút ra: đang dở tại mốc dùng be doing, đã xong trước mốc dùng have done.",
          "keys": [
            "đang dở tại mốc"
          ]
        }
      ],
      "ref": "p9,p10"
    },
    {
      "id": "s08",
      "module": "BRK-07",
      "data": {
        "question": "Câu có by the time thì will đặt ở đâu?",
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
          "say": "With by the time, where does will go?",
          "sub": "Câu có by the time thì will đặt ở đâu?"
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
      "id": "s09",
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
            "id": "e-sam",
            "t": "text",
            "text": "17:00 · lớp nói",
            "x": 8772,
            "y": 700,
            "size": 44,
            "at": "l1:class"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Five p.m., speaking class. Meet Sam, the native-speaker teacher. Today's topic: future plans.",
          "sub": "Năm giờ chiều, lớp luyện nói. Đây là Sam, cô giáo bản ngữ. Chủ đề hôm nay: dự định.",
          "keys": [
            "Sam"
          ]
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s10",
      "module": "DLG-01",
      "data": {
        "set": "meeting",
        "label": "17:00 · lớp luyện nói",
        "actors": [
          {
            "id": "lan",
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
          "label": "By the time I will graduate",
          "why": "Vế chỉ thời gian nói về tương lai dùng thì hiện tại, không dùng will.",
          "rule": "Will chỉ đứng ở vế chính"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "sam",
          "say": "Lan, what about money after university?",
          "sub": "Lan, chuyện tiền bạc sau đại học thì sao?",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "By the time I will graduate, I will have saved enough money.",
          "sub": "By the time I will graduate, I will have saved enough money.",
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
          "say": "After by the time, English uses the present, even about the future.",
          "sub": "Sau by the time, tiếng Anh dùng thì hiện tại, dù là chuyện tương lai.",
          "keys": [
            "dùng thì hiện tại"
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
          "who": "lan",
          "say": "By the time I graduate, I will have saved enough money.",
          "sub": "By the time I graduate, I will have saved enough money.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Will stays in the main clause.",
          "sub": "Will chỉ đứng ở vế chính, vế kể kết quả.",
          "phase": "redo",
          "keys": [
            "vế chính"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 18:00 · Tín hiệu của mốc",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:signals"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "by / by the time = trước mốc",
            "x": 60,
            "y": 1260,
            "size": 50,
            "at": "l2:before",
            "hl": [
              {
                "text": "trước mốc",
                "at": "l2:before"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "By the time we arrive,",
            "x": 60,
            "y": 1345,
            "size": 46,
            "at": "l3:arrive"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "the kids will have gone to bed",
            "x": 100,
            "y": 1415,
            "size": 44,
            "at": "l3:bed",
            "color": "accent",
            "hl": [
              {
                "text": "will have gone",
                "at": "l3:gone"
              }
            ]
          },
          {
            "id": "f-4",
            "t": "text",
            "text": "in + khoảng = cuối khoảng đó",
            "x": 60,
            "y": 1510,
            "size": 48,
            "at": "l5:end",
            "hl": [
              {
                "text": "cuối khoảng",
                "at": "l5:end"
              }
            ]
          },
          {
            "id": "f-5",
            "t": "text",
            "text": "In three years' time, I'll have finished",
            "x": 60,
            "y": 1590,
            "size": 40,
            "at": "l6:finished",
            "color": "accent"
          },
          {
            "id": "f-6",
            "t": "text",
            "text": "by the time I will graduate",
            "x": 960,
            "y": 1260,
            "size": 44,
            "at": "l7:slip",
            "color": "muted"
          },
          {
            "id": "f-6x",
            "t": "strike",
            "over": "f-6",
            "at": "l7:present"
          },
          {
            "id": "f-7",
            "t": "text",
            "text": "→ by the time I graduate",
            "x": 960,
            "y": 1340,
            "size": 48,
            "at": "l7:present",
            "color": "accent",
            "hl": [
              {
                "text": "I graduate",
                "at": "l7:present"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Sau by the time, when: hiện tại",
            "x": 960,
            "y": 1440,
            "size": 42,
            "at": "l8:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "hiện tại",
                "at": "l8:present"
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
          "say": "Stop four, six p.m. Lan notes the signals of a time point.",
          "sub": "Chặng bốn, sáu giờ chiều. Lan ghi lại các tín hiệu của mốc thời gian."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "By and by the time mean at some point before that moment.",
          "sub": "By và by the time nghĩa là vào một lúc nào đó trước mốc ấy.",
          "keys": [
            "trước mốc ấy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "British Council: by the time we arrive, the kids will have gone to bed.",
          "sub": "British Council: By the time we arrive, the kids will have gone to bed."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "And in plus a period, like in three years' time, means at the end of that period.",
          "sub": "Còn in cộng một khoảng, như in three years' time, nghĩa là vào cuối khoảng đó.",
          "keys": [
            "cuối khoảng đó"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "In three years' time, I'll have finished my degree. Three years from now, done.",
          "sub": "In three years' time, I'll have finished my degree: ba năm nữa tính từ bây giờ, đã học xong."
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "And Lan's slip: in a future time clause, use the present. By the time I graduate.",
          "sub": "Và lỗi của Lan: vế chỉ thời gian về tương lai dùng thì hiện tại. By the time I graduate."
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: after by the time and when, use the present. Save will for the main clause.",
          "sub": "Rút ra: sau by the time và when dùng hiện tại, will để dành cho vế chính.",
          "keys": [
            "will để dành cho vế chính"
          ]
        }
      ],
      "ref": "p11,p12,p13,p14"
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
            "text": "⑤ 19:00 · Hỏi và phủ định",
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
              "set": "campus",
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
                "mobile-phone"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:Dũng",
            "caption": "19:00 · tin nhắn của Dũng",
            "icon": "mobile-phone"
          },
          {
            "id": "g-w",
            "t": "text",
            "text": "When I will arrive, I'll call",
            "x": 2028,
            "y": 1260,
            "size": 44,
            "at": "l2:arrive",
            "color": "muted"
          },
          {
            "id": "g-wx",
            "t": "strike",
            "over": "g-w",
            "at": "l3:same"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "→ When I arrive, I'll call",
            "x": 2028,
            "y": 1335,
            "size": 48,
            "at": "l3:When I arrive",
            "color": "accent",
            "hl": [
              {
                "text": "I arrive",
                "at": "l3:arrive"
              }
            ]
          },
          {
            "id": "g-q",
            "t": "text",
            "text": "Will you have gone to bed…?",
            "x": 2028,
            "y": 1435,
            "size": 46,
            "at": "l4:Will you",
            "hl": [
              {
                "text": "Will you",
                "at": "l4:Will you"
              }
            ]
          },
          {
            "id": "g-n",
            "t": "text",
            "text": "I won't have finished by Friday",
            "x": 2028,
            "y": 1515,
            "size": 42,
            "at": "l5:won't",
            "color": "coral",
            "hl": [
              {
                "text": "won't have",
                "at": "l5:won't"
              }
            ]
          },
          {
            "id": "g-s",
            "t": "text",
            "text": "This time next year, I'll be living…",
            "x": 2028,
            "y": 1610,
            "size": 40,
            "at": "l6:living",
            "color": "accent",
            "hl": [
              {
                "text": "be living",
                "at": "l6:living"
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
          "say": "Stop five, seven p.m. Meet Dũng, Lan's study buddy, typing faster than he thinks.",
          "sub": "Chặng năm, bảy giờ tối. Đây là Dũng, bạn cùng nhóm học của Lan, gõ phím nhanh hơn nghĩ.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "When I will arrive at the library, I will call you!",
          "sub": "When I will arrive at the library, I will call you!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Same slip, Dũng. When I arrive, I'll call you. Will stays in the main clause.",
          "sub": "Cùng một lỗi đó, Dũng. When I arrive, I'll call you. Will ở vế chính."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Questions put will before the subject: will you have gone to bed when I get back?",
          "sub": "Câu hỏi đưa will lên trước chủ ngữ: Will you have gone to bed when I get back?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Negatives use won't: I won't have finished the report by Friday.",
          "sub": "Câu phủ định dùng won't: I won't have finished the report by Friday."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "In speaking, paint a future day: this time next year, I'll be living in a new city.",
          "sub": "Phần Nói, vẽ một ngày tương lai: This time next year, I'll be living in a new city, and I'll be studying for my master's degree."
        }
      ],
      "ref": "p15,p16"
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
            "at": 150,
            "fit": "H",
            "ms": 900
          },
          {
            "at": "l3",
            "fit": [
              "h-v"
            ],
            "zoom": 1.3,
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
            "text": "⑥ 20:00 · Bốn bước của Thảo",
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
              "set": "office",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "calendar",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "close",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Thảo",
            "caption": "20:00 · Thảo, IELTS 6.0",
            "icon": "calendar"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1270,
            "w": 44,
            "h": 44,
            "at": "l3:point",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1252,
            "size": 56,
            "at": "l3:point+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "(1) chọn mốc: cuối năm sau",
            "x": 4061,
            "y": 1262,
            "size": 44,
            "at": "l3:point+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1355,
            "w": 44,
            "h": 44,
            "at": "l4:done",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1337,
            "size": 56,
            "at": "l4:done+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "(2) việc nào xong?",
            "x": 4061,
            "y": 1347,
            "size": 44,
            "at": "l4:done+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1440,
            "w": 44,
            "h": 44,
            "at": "l5:going on",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1422,
            "size": 56,
            "at": "l5:going on+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "(3) việc nào đang dở?",
            "x": 4061,
            "y": 1432,
            "size": 44,
            "at": "l5:going on+200"
          },
          {
            "id": "h-c3",
            "t": "box",
            "x": 3996,
            "y": 1525,
            "w": 44,
            "h": 44,
            "at": "l6:together",
            "stroke": 5
          },
          {
            "id": "h-k3",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1507,
            "size": 56,
            "at": "l6:together+600",
            "color": "accent"
          },
          {
            "id": "h-l3",
            "t": "text",
            "text": "(4) ghép lại",
            "x": 4061,
            "y": 1517,
            "size": 44,
            "at": "l6:together+200"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Chọn mốc trước, rồi hỏi",
            "x": 3996,
            "y": 1650,
            "size": 50,
            "at": "l7:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Chọn mốc trước",
                "at": "l7:point first"
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
          "say": "Stop six, eight p.m. Meet Thảo, an office worker in Lan's evening class, aiming for IELTS six.",
          "sub": "Chặng sáu, tám giờ tối. Đây là Thảo, nhân viên văn phòng học cùng lớp tối, nhắm IELTS 6.0.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Sam will ask about my plans. Let me build my answer step by step.",
          "sub": "Sam sẽ hỏi về dự định. Mình dựng câu trả lời từng bước.",
          "face": "thinking"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Step one: a time point. The end of next year.",
          "sub": "Bước một: chọn mốc. Cuối năm sau."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Step two: what will be done by then? My certificate.",
          "sub": "Bước hai: đến lúc đó việc gì đã xong? Lấy chứng chỉ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Step three: what will be going on? Working in a new position.",
          "sub": "Bước ba: việc gì đang diễn ra? Làm ở vị trí mới."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "thao",
          "say": "All together: by the end of next year, I will have got my certificate, and I'll be working in a new position.",
          "sub": "Ghép lại: By the end of next year, I will have got my certificate, and I'll be working in a new position.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: choose the time point first, then ask what's done and what's in progress.",
          "sub": "Rút ra: chọn mốc trước, rồi hỏi việc nào xong, việc nào đang dở.",
          "keys": [
            "chọn mốc trước"
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
      "ref": "p17,p18"
    },
    {
      "id": "s14",
      "module": "BRK-04",
      "data": {
        "title": "Năm năm nữa bạn đang làm gì?",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "I will work in a bank. I will finish my master's.",
        "right": "In five years' time, I'll be working… I'll have finished…",
        "wrongIllus": "red-question-mark",
        "rightIllus": "check-mark-button"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Before: I will work. I will finish.",
          "sub": "Trước: I will work. I will finish."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "After: I'll be working, and I'll have finished.",
          "sub": "Sau: I'll be working, and I'll have finished.",
          "keys": [
            "I'll be working",
            "I'll have finished"
          ]
        }
      ],
      "ref": "p19"
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
          }
        ],
        "items": [
          {
            "id": "h-2",
            "t": "text",
            "text": "2 dạng, 1 câu → làm chủ",
            "x": 3996,
            "y": 1740,
            "size": 48,
            "at": "l2:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "làm chủ",
                "at": "l2:control"
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
          "say": "Each form, one job, plus a clear signal: in five years' time.",
          "sub": "Mỗi dạng một việc, thêm tín hiệu rõ ràng: in five years' time."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: two future forms in one sentence show you control the timeline.",
          "sub": "Rút ra: hai dạng tương lai trong một câu cho thấy bạn làm chủ dòng thời gian.",
          "keys": [
            "làm chủ dòng thời gian"
          ]
        }
      ],
      "ref": "p19,p20"
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
            "text": "Thứ Năm · 7:00",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:desk"
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
                  "id": "lan",
                  "side": "center",
                  "pose": "thumb",
                  "face": "happy"
                }
              ],
              "props": [
                "envelope",
                "graduation-cap"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "close",
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
            "at": "l1:Thursday",
            "caption": "Thứ Năm 7:00 · cùng bàn ấy",
            "icon": "envelope"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "At nine, I'll be taking…",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:taking",
            "color": "accent",
            "hl": [
              {
                "text": "be taking",
                "at": "l2:taking"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "By noon, I'll have finished",
            "x": 5964,
            "y": 1350,
            "size": 48,
            "at": "l3:finished",
            "color": "accent",
            "hl": [
              {
                "text": "have finished",
                "at": "l3:finished"
              }
            ]
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Chưa đỗ ông Nghè…”",
            "x": 5964,
            "y": 1470,
            "size": 54,
            "at": "l5:mandarin",
            "color": "accent",
            "hl": [
              {
                "text": "ông Nghè",
                "at": "l5:mandarin"
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
          "say": "Thursday, seven a.m. Same desk, same letter, same Lan, on exam day.",
          "sub": "Thứ Năm, bảy giờ sáng. Vẫn bàn ấy, lá thư ấy, Lan ấy, hôm nay đi thi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "At nine this morning, I'll be taking my final exam.",
          "sub": "At nine this morning, I'll be taking my final exam.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "By noon, I'll have finished it. By the time results come out, I'll have done my best.",
          "sub": "By noon, I'll have finished it. By the time results come out, I'll have done my best."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "No blank, no wobble. In progress at nine, done by noon.",
          "sub": "Không còn chỗ trống, không còn chần chừ. Chín giờ đang thi, trưa đã xong."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Not yet a mandarin, Lan bosses nobody. She simply puts tomorrow in the right place.",
          "sub": "“Chưa đỗ ông Nghè” thì Lan chẳng “đe” ai. Lan chỉ đặt ngày mai vào đúng chỗ.",
          "keys": [
            "đúng chỗ"
          ]
        }
      ],
      "ref": "p9"
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
            "fit": "F",
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
            "text": "Tóm lại: đặt việc lên mốc",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:place"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4696,
            "y": 170,
            "at": "l2:doing"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6664,
            "y": 170,
            "at": "l3:done"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1600,
            "y": 1260,
            "at": "l4:clause"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So, these two forms place each action on the timeline.",
          "sub": "Tóm lại, hai cấu trúc này đặt việc đúng chỗ trên dòng thời gian.",
          "keys": [
            "đúng chỗ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "In progress at the point: will be doing.",
          "sub": "Đang dở tại mốc: will be doing."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Finished before the point: will have done.",
          "sub": "Đã xong trước mốc: will have done."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "After by the time and when, the present. Will stays in the main clause.",
          "sub": "Sau by the time, when dùng hiện tại. Will ở vế chính."
        }
      ],
      "ref": "p10,p14"
    },
    {
      "id": "s18",
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
            "at": "l2:clear",
            "stroke": 5
          },
          {
            "id": "j-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1242,
            "size": 56,
            "at": "l2:clear+600",
            "color": "accent"
          },
          {
            "id": "j-l0",
            "t": "text",
            "text": "có mốc thời gian rõ",
            "x": 7997,
            "y": 1252,
            "size": 44,
            "at": "l2:clear+200"
          },
          {
            "id": "j-c1",
            "t": "box",
            "x": 7932,
            "y": 1340,
            "w": 44,
            "h": 44,
            "at": "l2:progress",
            "stroke": 5
          },
          {
            "id": "j-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1322,
            "size": 56,
            "at": "l2:progress+600",
            "color": "accent"
          },
          {
            "id": "j-l1",
            "t": "text",
            "text": "đang dở: will be doing",
            "x": 7997,
            "y": 1332,
            "size": 44,
            "at": "l2:progress+200"
          },
          {
            "id": "j-c2",
            "t": "box",
            "x": 7932,
            "y": 1420,
            "w": 44,
            "h": 44,
            "at": "l2:finished",
            "stroke": 5
          },
          {
            "id": "j-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1402,
            "size": 56,
            "at": "l2:finished+600",
            "color": "accent"
          },
          {
            "id": "j-l2",
            "t": "text",
            "text": "xong trước: will have done",
            "x": 7997,
            "y": 1412,
            "size": 44,
            "at": "l2:finished+200"
          },
          {
            "id": "j-c3",
            "t": "box",
            "x": 7932,
            "y": 1500,
            "w": 44,
            "h": 44,
            "at": "l3:present",
            "stroke": 5
          },
          {
            "id": "j-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1482,
            "size": 56,
            "at": "l3:present+600",
            "color": "accent"
          },
          {
            "id": "j-l3",
            "t": "text",
            "text": "sau by the time: hiện tại",
            "x": 7997,
            "y": 1492,
            "size": 44,
            "at": "l3:present+200"
          },
          {
            "id": "j-c4",
            "t": "box",
            "x": 7932,
            "y": 1580,
            "w": 44,
            "h": 44,
            "at": "l3:have",
            "stroke": 5
          },
          {
            "id": "j-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1562,
            "size": 56,
            "at": "l3:have+600",
            "color": "accent"
          },
          {
            "id": "j-l4",
            "t": "text",
            "text": "sau will: be / have",
            "x": 7997,
            "y": 1572,
            "size": 44,
            "at": "l3:have+200"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: must be, might be",
            "x": 7932,
            "y": 1690,
            "size": 46,
            "at": "l5:Next",
            "color": "accent"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; cách chấm từng kỳ thi có thể thay đổi — kiểm lại trên trang chính thức. Nhân vật là minh hoạ.",
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
          "say": "Before you hand anything in, five quick checks.",
          "sub": "Trước khi nộp, soát nhanh năm điều."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A clear time point. Be doing for in progress. Have done for finished.",
          "sub": "Có mốc rõ. Đang dở dùng be doing. Đã xong dùng have done."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The present after by the time and when. And after will, be or have, with no s.",
          "sub": "Sau by the time, when dùng hiện tại. Sau will là be hoặc have, không thêm s.",
          "keys": [
            "không thêm s"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Try now: three sentences about your next year, each with a time point.",
          "sub": "Làm ngay: viết ba câu về một năm tới, mỗi câu có một mốc.",
          "keys": [
            "ba câu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Next up: must be, might be, can't be.",
          "sub": "Bài tiếp theo: must be, might be, can't be."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p21,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "What is wrong with by the time I will graduate?",
        "options": [
          "Graduate must always be in the passive voice in formal writing",
          "By the time can only be used with past events, never future",
          "A time clause about the future uses the present, not will"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "graduation-cap",
        "why": "Trong vế chỉ thời gian nói về tương lai, dùng thì hiện tại. Câu đúng là by the time I graduate."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "What is wrong with by the time I will graduate?",
          "sub": "Cụm by the time I will graduate sai ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "A time clause about the future uses the present, not will.",
          "sub": "Vế chỉ thời gian về tương lai dùng thì hiện tại, không dùng will."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "By the time I graduate, I will have saved enough money.",
          "sub": "By the time I graduate, I will have saved enough money."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[21]"
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
          "say": "By the end of this video, you'll have learned two futures. Now try the forty questions below.",
          "sub": "Hết video này, bạn đã nắm hai dạng tương lai. Giờ thử bốn mươi câu hỏi bên dưới nhé.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT NGÀY THỨ TƯ của Lan trước ngày thi cuối kỳ (7:00 viết thư xin học bổng có chỗ trống → 8:00 will be doing → 10:00 will have done → 12:00 điền chỗ trống → 17:00 lớp nói “Khoan đã!” by the time I will graduate → 18:00 by/by the time/in → 19:00 câu hỏi, phủ định + tin nhắn Dũng → 20:00 Thảo dựng câu trả lời → 7:00 thứ Năm khép vòng). Neo mở: câu hỏi “5 năm nữa bạn đang làm gì?”. Nhân vật: Lan (Hương trong bài), Sam, Dũng, Thảo (Minh trong bài) — w145/_series/b2-grammar-for-exam-takers.md. Cảnh ngắt nhịp: BRK-08 (một ngày), BRK-07 (rehook by the time), BRK-04 (trước–sau câu trả lời 5 năm). Ca dao: “Chưa đỗ ông Nghè đã đe hàng tổng”. Câu đố questions[21].",
  "loop": {
    "open": "s01",
    "close": "s16"
  }
};
