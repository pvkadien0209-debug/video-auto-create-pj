// Kịch bản video W lần 3 (#110) — "Trả lời câu hỏi về điểm yếu bằng tiếng Anh" · chuỗi "Trả lời phỏng vấn bằng tiếng Anh"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-answer-what-is-your-weakness--w01",
  "unit": {
    "audience": "english-interview-candidates",
    "slug": "how-to-answer-what-is-your-weakness",
    "door": "ky-nang",
    "level": "B1",
    "title": "Trả lời câu hỏi về điểm yếu bằng tiếng Anh",
    "series": "Trả lời phỏng vấn bằng tiếng Anh"
  },
  "format": "W",
  "mode": "text",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
  "narrator": "det",
  "presenter": {
    "side": "left"
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
            "text": "1 câu + 3 câu",
            "x": 60,
            "y": 140,
            "size": 150,
            "at": "l1:one",
            "color": "accent",
            "hl": [
              {
                "text": "3 câu",
                "at": "l1:three"
              }
            ]
          },
          {
            "id": "a-nb",
            "t": "text",
            "text": "điểm yếu · cách cải thiện",
            "x": 70,
            "y": 370,
            "size": 56,
            "at": "l1:improve"
          },
          {
            "id": "a-trap",
            "t": "text",
            "text": "Ta tưởng: câu gài bẫy?",
            "x": 70,
            "y": 470,
            "size": 52,
            "at": "l2:trap",
            "color": "muted"
          },
          {
            "id": "a-trapx",
            "t": "strike",
            "over": "a-trap",
            "at": "l2:end"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One sentence for your weakness, three for how you improve.",
          "sub": "Một câu cho điểm yếu, ba câu cho cách cải thiện.",
          "keys": [
            "ba câu cho cách cải thiện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet most of us hear this question as a trap.",
          "sub": "Vậy mà đa số nghe câu này như một cái bẫy.",
          "keys": [
            "một cái bẫy"
          ]
        }
      ],
      "ref": "intro,p13"
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
            "at": "l2",
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
            "x": 880,
            "y": 110,
            "w": 800,
            "data": {
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Thứ Tư, 14:00 · phòng phỏng vấn",
            "icon": "office-building"
          },
          {
            "id": "a-cd",
            "t": "text",
            "text": "“Tốt đẹp phô ra,",
            "x": 70,
            "y": 570,
            "size": 50,
            "at": "l5:show",
            "color": "accent"
          },
          {
            "id": "a-cd2",
            "t": "text",
            "text": "xấu xa đậy lại”",
            "x": 70,
            "y": 635,
            "size": 50,
            "at": "l5:cover",
            "color": "accent",
            "hl": [
              {
                "text": "đậy lại",
                "at": "l5:cover"
              }
            ]
          },
          {
            "id": "a-rw",
            "t": "text",
            "text": "⟲ Tua lại tối qua",
            "x": 900,
            "y": 690,
            "size": 46,
            "at": "l6:rewind",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, an accountant. Wednesday, two p.m., an accounting job at a foreign company.",
          "sub": "Đây là Dũng, kế toán. Hai giờ chiều thứ Tư, phỏng vấn kế toán ở công ty nước ngoài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And this is Sam, the manager interviewing him.",
          "sub": "Còn đây là Sam, quản lý đang phỏng vấn cậu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "sam",
          "say": "What is your greatest weakness?",
          "sub": "Điểm yếu lớn nhất của bạn là gì?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Well... my weakness is...",
          "sub": "Dạ... điểm yếu của em là...",
          "face": "worried"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Grandma taught him: show the good, cover the bad. Now someone asks for the bad.",
          "sub": "Bà dạy: “Tốt đẹp phô ra, xấu xa đậy lại.” Giờ người ta lại hỏi đúng cái xấu.",
          "keys": [
            "xấu xa đậy lại"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Rewind to last night.",
          "sub": "Tua lại tối hôm qua.",
          "keys": [
            "Tua lại"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 400
        }
      ],
      "ref": "intro,p8"
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
            "text": "Hỏi điểm yếu để làm gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:weaknesses",
            "hl": [
              {
                "text": "để làm gì",
                "at": "l1:why"
              }
            ]
          },
          {
            "id": "b-p",
            "t": "text",
            "text": "Không ai hoàn hảo: họ biết",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:perfect"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "1. Tự nhận ra mình?",
            "x": 2028,
            "y": 250,
            "size": 50,
            "at": "l3:see"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "2. Trung thực?",
            "x": 2028,
            "y": 320,
            "size": 50,
            "at": "l3:honest",
            "hl": [
              {
                "text": "Trung thực",
                "at": "l3:honest"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "3. Thấy lỗi có tự sửa?",
            "x": 2028,
            "y": 390,
            "size": 50,
            "at": "l3:fix",
            "hl": [
              {
                "text": "tự sửa",
                "at": "l3:fix"
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
          "say": "So why do they even ask about weaknesses?",
          "sub": "Vậy hỏi điểm yếu để làm gì?",
          "keys": [
            "để làm gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Interviewers know nobody is perfect. They are not hunting for a saint.",
          "sub": "Người phỏng vấn biết không ai hoàn hảo. Họ đâu đi tìm thánh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "They want three things: can you see yourself, are you honest, and do you fix problems?",
          "sub": "Họ muốn biết ba điều: bạn có tự nhận ra mình, có trung thực, và thấy vấn đề có chủ động sửa?",
          "keys": [
            "chủ động sửa"
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
            "id": "b-ev",
            "t": "text",
            "text": "1 buổi tối tập với Thảo",
            "x": 2028,
            "y": 470,
            "size": 52,
            "at": "l1:evening",
            "hl": [
              {
                "text": "1 buổi tối",
                "at": "l1:evening"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+0",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2233,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+220",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2438,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+440",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2643,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+660",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2848,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+880",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3053,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+1100",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3258,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+1320",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d7",
            "t": "box",
            "x": 3463,
            "y": 570,
            "w": 185,
            "h": 90,
            "at": "l2+1540",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "19:00",
            "x": 2040,
            "y": 588,
            "size": 44,
            "at": "l2+120"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "19:30",
            "x": 2245,
            "y": 588,
            "size": 44,
            "at": "l2+340"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "20:00",
            "x": 2450,
            "y": 588,
            "size": 44,
            "at": "l2+560"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "20:30",
            "x": 2655,
            "y": 588,
            "size": 44,
            "at": "l2+780"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "21:00",
            "x": 2860,
            "y": 588,
            "size": 44,
            "at": "l2+1000"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "21:30",
            "x": 3065,
            "y": 588,
            "size": 44,
            "at": "l2+1220"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "22:00",
            "x": 3270,
            "y": 588,
            "size": 44,
            "at": "l2+1440"
          },
          {
            "id": "b-dt7",
            "t": "text",
            "text": "T4 14:00",
            "x": 3475,
            "y": 588,
            "size": 34,
            "at": "l2+1660"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last night, one evening of practice with Thảo, his friend from the cafe.",
          "sub": "Tối qua, một buổi tập với Thảo, cô bạn ở quán cà phê.",
          "keys": [
            "một buổi tập"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Seven stops, every half hour, then back to this chair.",
          "sub": "Bảy chặng, nửa tiếng một, rồi quay về chiếc ghế này."
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
            "at": "l5:end",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-t",
            "t": "text",
            "text": "① 19:00 · Lần thử đầu",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:seven"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "hold",
                  "enter": "pop",
                  "at": "l2"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
                  "on": "thao",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-07",
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
            "at": "l1:living",
            "caption": "Tối thứ Ba, 19:00 · nhà Thảo",
            "icon": "house"
          },
          {
            "id": "c-no",
            "t": "text",
            "text": "“I don't have any weaknesses”",
            "x": 3996,
            "y": 170,
            "size": 44,
            "at": "l4:any",
            "color": "muted"
          },
          {
            "id": "c-nox",
            "t": "strike",
            "over": "c-no",
            "at": "l6:worst"
          },
          {
            "id": "c-w",
            "t": "text",
            "text": "= câu tệ nhất",
            "x": 3996,
            "y": 250,
            "size": 56,
            "at": "l6:worst",
            "color": "coral",
            "hl": [
              {
                "text": "tệ nhất",
                "at": "l6:worst"
              }
            ]
          },
          {
            "id": "c-sa",
            "t": "text",
            "text": "thiếu tự nhận thức",
            "x": 3996,
            "y": 340,
            "size": 50,
            "at": "l6:self",
            "color": "muted"
          },
          {
            "id": "c-fix",
            "t": "text",
            "text": "Điểm yếu + cách khắc phục",
            "x": 3996,
            "y": 450,
            "size": 50,
            "at": "l7:fix",
            "color": "accent",
            "hl": [
              {
                "text": "cách khắc phục",
                "at": "l7:fix"
              }
            ]
          },
          {
            "id": "c-learn",
            "t": "text",
            "text": "= biết học, đội nào cũng cần",
            "x": 3996,
            "y": 530,
            "size": 46,
            "at": "l7:learn",
            "hl": [
              {
                "text": "biết học",
                "at": "l7:learn"
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
          "say": "First stop: seven p.m., Thảo's living room.",
          "sub": "Chặng một: bảy giờ tối, phòng khách nhà Thảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Thảo plays the interviewer, serious as a tax officer.",
          "sub": "Thảo đóng vai người phỏng vấn, nghiêm như cán bộ thuế."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "What is your greatest weakness?",
          "sub": "Điểm yếu lớn nhất của em là gì?",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "I don't have any weaknesses.",
          "sub": "Em không có điểm yếu nào ạ.",
          "face": "happy",
          "pose": "thumb"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Really? None at all?",
          "sub": "Thật á? Không một cái nào?",
          "face": "surprised"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "The worst answer. It shows a lack of self awareness.",
          "sub": "Câu tệ nhất. Nó cho thấy bạn thiếu tự nhận thức.",
          "keys": [
            "Câu tệ nhất"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "A weakness with a fix shows you can learn, and every team needs that.",
          "sub": "Một điểm yếu kèm cách khắc phục cho thấy bạn biết học, điều đội nào cũng cần.",
          "keys": [
            "biết học"
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
      "ref": "p2"
    },
    {
      "id": "s05",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "19:15 · lần thử hai",
        "actors": [
          {
            "id": "thao",
            "side": "left",
            "pose": "hold"
          },
          {
            "id": "dung",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Điểm yếu giả",
          "why": "“I'm a perfectionist” không kèm ví dụ thật: người phỏng vấn nghe quá nhiều, coi là né câu hỏi.",
          "rule": "Chọn điểm yếu thật, có chuyện cải thiện"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Okay, okay. I'm a perfectionist, and I work too hard.",
          "sub": "Thôi được. Em cầu toàn, và em làm việc quá chăm.",
          "face": "happy",
          "pose": "shrug",
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
          "say": "A fake weakness. Without a real example, interviewers hear dodging.",
          "sub": "Điểm yếu giả. Không kèm ví dụ thật, người nghe thấy bạn đang né."
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
          "say": "Honestly? I used to underestimate how long my tasks would take.",
          "sub": "Nói thật thì em từng ước lượng thiếu thời gian làm việc.",
          "phase": "redo",
          "face": "thinking",
          "pose": "think",
          "react": {
            "thao": "happy"
          }
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "sfx": [
        {
          "at": "l2",
          "key": "whoosh"
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
            "text": "② 19:30 · Chọn điểm yếu nào?",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:thirty"
          },
          {
            "id": "d-1",
            "t": "text",
            "text": "☐ Có thật? Sếp cũ đồng ý?",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l2:real"
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "☐ Không phải kỹ năng chính?",
            "x": 5964,
            "y": 245,
            "size": 48,
            "at": "l2:key"
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "☐ Có chuyện cải thiện?",
            "x": 5964,
            "y": 320,
            "size": 48,
            "at": "l3:story"
          },
          {
            "id": "d-ok",
            "t": "text",
            "text": "3 ✓ → chọn",
            "x": 5964,
            "y": 400,
            "size": 60,
            "at": "l3:choose",
            "color": "accent",
            "hl": [
              {
                "text": "chọn",
                "at": "l3:choose"
              }
            ]
          },
          {
            "id": "d-r1",
            "t": "text",
            "text": "Hay đi muộn · ngại làm cùng ai",
            "x": 5964,
            "y": 560,
            "size": 46,
            "at": "l6:late",
            "color": "coral"
          },
          {
            "id": "d-r2",
            "t": "text",
            "text": "→ lý do để loại",
            "x": 5964,
            "y": 640,
            "size": 54,
            "at": "l6:reject",
            "color": "coral",
            "hl": [
              {
                "text": "loại",
                "at": "l6:reject"
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
          "say": "Second stop: seven thirty. Which weakness to pick?",
          "sub": "Chặng hai: bảy rưỡi. Chọn điểm yếu nào?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask three questions. Is it real, would your last manager agree? Is it a key skill for this job?",
          "sub": "Hỏi ba câu. Có thật không, sếp cũ có đồng ý? Có phải kỹ năng chính của vị trí?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Do you have a real story of improving? Three yeses, choose it.",
          "sub": "Có câu chuyện cải thiện thật không? Cả ba ổn thì chọn.",
          "keys": [
            "Cả ba ổn thì chọn"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Avoid fake ones too, like I'm a perfectionist, with no real example.",
          "sub": "Tránh cả điểm yếu giả, như “em cầu toàn”, mà không có ví dụ thật."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And always late, or dislike working with people? Not weaknesses to share. Reasons to reject.",
          "sub": "Còn hay đi muộn, ngại làm cùng người khác? Không phải điểm yếu để kể, mà là lý do để loại.",
          "keys": [
            "lý do để loại"
          ]
        }
      ],
      "ref": "p5,p7"
    },
    {
      "id": "s06b",
      "module": "BRK-06",
      "data": {
        "title": "Thường hợp, nếu đúng với bạn",
        "items": [
          {
            "illus": "busts-in-silhouette",
            "text": "Ngại đám đông"
          },
          {
            "illus": "handshake",
            "text": "Khó từ chối"
          },
          {
            "illus": "magnifying-glass-tilted-left",
            "text": "Quá kỹ nên chậm"
          },
          {
            "illus": "clipboard",
            "text": "Ngại giao việc"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Shy with groups. Can't say no. Too detailed. New leader.",
          "sub": "Ngại đám đông. Khó từ chối. Quá kỹ nên chậm. Mới làm trưởng nhóm, ngại giao việc."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Fine, if true for you.",
          "sub": "Thường hợp, nếu chúng đúng với bạn."
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
            "at": "l3:end",
            "fit": "E",
            "ms": 700
          },
          {
            "at": "l5",
            "fit": [
              "e-v"
            ],
            "zoom": 1.35,
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
            "text": "③ 20:00 · Đừng cãi góp ý",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:eight"
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
                  "side": "left",
                  "pose": "cross"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
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
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:eight",
            "caption": "20:00 · Dũng kể chuyện báo cáo",
            "icon": "page-facing-up"
          },
          {
            "id": "e-b",
            "t": "text",
            "text": "“…but the deadlines were not fair”",
            "x": 7932,
            "y": 170,
            "size": 42,
            "at": "l3:argue",
            "color": "muted"
          },
          {
            "id": "e-bx",
            "t": "strike",
            "over": "e-b",
            "at": "l4:push"
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "→ lo bạn “hay phản bác”",
            "x": 7932,
            "y": 250,
            "size": 46,
            "at": "l4:push",
            "color": "coral"
          },
          {
            "id": "e-a1",
            "t": "text",
            "text": "“…and she was right.”",
            "x": 7932,
            "y": 350,
            "size": 48,
            "at": "l5:right",
            "color": "accent",
            "hl": [
              {
                "text": "she was right",
                "at": "l5:right"
              }
            ]
          },
          {
            "id": "e-a2",
            "t": "text",
            "text": "template · hạn riêng sớm 1 ngày",
            "x": 7932,
            "y": 430,
            "size": 44,
            "at": "l5:template",
            "hl": [
              {
                "text": "sớm 1 ngày",
                "at": "l5:early"
              }
            ]
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Kể để thấy, không để cãi",
            "x": 7932,
            "y": 560,
            "size": 58,
            "at": "l6:argue",
            "color": "accent",
            "hl": [
              {
                "text": "không để cãi",
                "at": "l6:argue"
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
          "say": "Third stop: eight p.m. Dũng tells the story behind it.",
          "sub": "Chặng ba: tám giờ tối. Dũng kể câu chuyện đằng sau."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My last manager said I was too slow with reports, but honestly the deadlines were not fair.",
          "sub": "Sếp cũ bảo em làm báo cáo chậm, nhưng nói thật hạn chót không công bằng.",
          "face": "worried",
          "pose": "shrug"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "So now you argue with old feedback, in front of me?",
          "sub": "Thế là cậu cãi lại góp ý cũ, ngay trước mặt mình à?",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Exactly her worry. She'll wonder if you push back a lot.",
          "sub": "Đúng nỗi lo ấy. Người nghe sẽ ngại bạn hay phản bác."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "My last manager told me my reports were too slow, and she was right. So I made a template and set my own deadline one day early.",
          "sub": "Sếp cũ nói báo cáo của em chậm, và chị ấy đúng. Nên em làm mẫu sẵn và tự đặt hạn sớm một ngày.",
          "face": "happy",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Tell a weakness to show you see it, not to argue with it.",
          "sub": "Kể điểm yếu để cho thấy mình nhìn ra nó, không phải để cãi lại nó.",
          "keys": [
            "không phải để cãi lại nó"
          ]
        }
      ],
      "ref": "p3,p4"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 20:30 · Công thức",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:formula"
          },
          {
            "id": "f-f",
            "t": "text",
            "text": "Yếu → ví dụ → làm → tiến bộ",
            "x": 60,
            "y": 1250,
            "size": 40,
            "at": "l2:weakness"
          },
          {
            "id": "f-bar",
            "t": "box",
            "x": 60,
            "y": 1330,
            "w": 1600,
            "h": 80,
            "at": "l3:quarter",
            "stroke": 4
          },
          {
            "id": "f-q",
            "t": "box",
            "x": 60,
            "y": 1330,
            "w": 400,
            "h": 80,
            "at": "l3:quarter",
            "hatch": true,
            "color": "coral",
            "stroke": 4
          },
          {
            "id": "f-q1",
            "t": "text",
            "text": "¼ điểm yếu",
            "x": 80,
            "y": 1430,
            "size": 46,
            "at": "l3:quarter+300",
            "color": "coral"
          },
          {
            "id": "f-q3",
            "t": "text",
            "text": "¾ làm gì, kết quả ra sao",
            "x": 560,
            "y": 1430,
            "size": 46,
            "at": "l3:three",
            "color": "accent",
            "hl": [
              {
                "text": "¾",
                "at": "l3:three quarters"
              }
            ]
          },
          {
            "id": "f-1m",
            "t": "text",
            "text": "≈ 1 phút",
            "x": 1300,
            "y": 1430,
            "size": 52,
            "at": "l3:minute"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Fourth stop: eight thirty. Thảo writes the formula.",
          "sub": "Chặng bốn: tám rưỡi. Thảo viết công thức."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Weakness, a short example, your action, your progress.",
          "sub": "Điểm yếu, ví dụ ngắn, hành động, tiến bộ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The weakness is only a quarter. Three quarters is what you did and how it went. About one minute in all.",
          "sub": "Điểm yếu chỉ một phần tư. Ba phần tư là bạn làm gì, kết quả ra sao. Cả thảy chừng một phút.",
          "keys": [
            "Ba phần tư"
          ]
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s09",
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
            "at": "l1",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2:end",
            "fit": "F",
            "ms": 700
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
            "at": "l6:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 880,
            "y": 1510,
            "w": 560,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "think"
                }
              ],
              "camera": [
                {
                  "at": "l1",
                  "shot": "E-SHOT-05",
                  "on": "thao",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l7",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "20:30 · Thảo làm mẫu, Dũng làm theo",
            "icon": "spiral-notepad"
          },
          {
            "id": "f-s1",
            "t": "text",
            "text": "(1) underestimate how long",
            "x": 60,
            "y": 1530,
            "size": 40,
            "at": "l3:underestimate"
          },
          {
            "id": "f-s2",
            "t": "text",
            "text": "(2) plan every Monday",
            "x": 60,
            "y": 1590,
            "size": 40,
            "at": "l4:Monday"
          },
          {
            "id": "f-s3",
            "t": "text",
            "text": "(3) check list each day",
            "x": 60,
            "y": 1650,
            "size": 40,
            "at": "l5:check"
          },
          {
            "id": "f-s4",
            "t": "text",
            "text": "(4) not a single missed deadline",
            "x": 60,
            "y": 1710,
            "size": 40,
            "at": "l6:single",
            "color": "accent",
            "hl": [
              {
                "text": "not a single",
                "at": "l6:single"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Họ nhớ tiến bộ",
            "x": 60,
            "y": 1790,
            "size": 50,
            "at": "l7:progress",
            "color": "accent",
            "hl": [
              {
                "text": "tiến bộ",
                "at": "l7:progress"
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
          "say": "Mine: I tend to say yes to every request. Now I check my priorities first, and suggest a realistic time.",
          "sub": "Của mình: mình hay nhận lời mọi việc. Giờ mình xem ưu tiên trước, và hẹn một thời điểm thực tế.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "It's made me much more reliable. Your turn.",
          "sub": "Nhờ vậy mình đáng tin hơn nhiều. Tới cậu."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "I used to underestimate how long my tasks would take.",
          "sub": "Em từng ước lượng thiếu thời gian làm việc.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Now I plan my week every Monday and break big tasks into small steps.",
          "sub": "Giờ em lên kế hoạch tuần mỗi thứ Hai, chia việc lớn thành bước nhỏ."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "I also check my list at the end of each day.",
          "sub": "Cuối mỗi ngày em cũng rà lại danh sách."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "dung",
          "say": "Last quarter, I didn't miss a single deadline.",
          "sub": "Quý vừa rồi, em không trễ hạn lần nào.",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "One sentence of weakness, so they leave remembering his progress.",
          "sub": "Điểm yếu chỉ một câu, nên người nghe ra về nhớ cách cậu tiến bộ.",
          "keys": [
            "nhớ cách cậu tiến bộ"
          ]
        }
      ],
      "ref": "p11,p12"
    },
    {
      "id": "s10",
      "module": "BRK-02",
      "data": {
        "kicker": "Rút ra",
        "title": "Điểm yếu một câu, cải thiện ba câu",
        "hl": "cải thiện ba câu",
        "sub": "Phần lớn thời gian dành cho việc bạn đã làm"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "One sentence for the weakness.",
          "sub": "Điểm yếu: một câu."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three for the improvement.",
          "sub": "Cải thiện: ba câu."
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
            "text": "⑤ 21:00 · Nói mềm mà thật",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:nine"
          },
          {
            "id": "g-bad",
            "t": "text",
            "text": "I am bad at…",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:bad",
            "color": "muted"
          },
          {
            "id": "g-badx",
            "t": "strike",
            "over": "g-bad",
            "at": "l2:tend"
          },
          {
            "id": "g-tend",
            "t": "text",
            "text": "I tend to… · I used to…",
            "x": 2388,
            "y": 1260,
            "size": 50,
            "at": "l2:tend",
            "color": "accent",
            "hl": [
              {
                "text": "I tend to…",
                "at": "l2:tend"
              }
            ]
          },
          {
            "id": "g-work",
            "t": "text",
            "text": "I've been working on…",
            "x": 2028,
            "y": 1345,
            "size": 50,
            "at": "l3:working"
          },
          {
            "id": "g-still",
            "t": "text",
            "text": "I'm still improving, but…",
            "x": 2028,
            "y": 1420,
            "size": 50,
            "at": "l3:still",
            "hl": [
              {
                "text": "still improving",
                "at": "l3:improving"
              }
            ]
          },
          {
            "id": "g-tense",
            "t": "text",
            "text": "used to (cũ) + I've (đến nay)",
            "x": 2028,
            "y": 1520,
            "size": 48,
            "at": "l4:used"
          },
          {
            "id": "g-ex",
            "t": "text",
            "text": "“I used to rush… I've become calmer.”",
            "x": 2028,
            "y": 1600,
            "size": 40,
            "at": "l5:rush",
            "color": "accent"
          },
          {
            "id": "g-res",
            "t": "text",
            "text": "Kết: As a result… / Now I can…",
            "x": 2028,
            "y": 1710,
            "size": 50,
            "at": "l6:result",
            "color": "accent",
            "hl": [
              {
                "text": "Now I can…",
                "at": "l6:now"
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
          "say": "Fifth stop: nine p.m. English that is soft, but still honest.",
          "sub": "Chặng năm: chín giờ tối. Tiếng Anh mềm mà vẫn thật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not I am bad at. Say I tend to, or I used to.",
          "sub": "Đừng nói “I am bad at…”. Nói “I tend to…” hoặc “I used to…”.",
          "keys": [
            "I tend to…"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "I've been working on shows you are fixing it. I'm still improving, but is honest and positive.",
          "sub": "“I've been working on…” cho thấy bạn đang sửa. “I'm still improving, but…” vừa thật vừa tích cực."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Mix two tenses: used to for the old you, present perfect for progress until now.",
          "sub": "Ghép hai thì: “used to” cho mình ngày trước, hiện tại hoàn thành cho tiến bộ đến nay.",
          "keys": [
            "hiện tại hoàn thành"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "I used to rush my presentations. I've joined a speaking club, and I've become much calmer.",
          "sub": "“Tôi từng nói vội khi thuyết trình. Tôi đã vào câu lạc bộ, và bình tĩnh hơn nhiều.”"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Always end with a result: As a result, or Now I can.",
          "sub": "Luôn kết bằng kết quả: “As a result…”, “Now I can…”.",
          "keys": [
            "kết quả"
          ]
        }
      ],
      "ref": "p14,p15,p16"
    },
    {
      "id": "s12",
      "module": "BRK-07",
      "data": {
        "question": "Tiếng Anh là điểm yếu, nói được không?",
        "illus": "speaking-head"
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
          "say": "Can English itself be your weakness?",
          "sub": "Chính tiếng Anh là điểm yếu thì có nói được không?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p17"
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
            "at": "l4",
            "fit": [
              "h-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 21:30 · Tiếng Anh là điểm yếu?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:thirty"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "medium",
                  "on": "dung",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:thirty",
            "caption": "21:30 · Dũng tự ghi âm",
            "icon": "studio-microphone"
          },
          {
            "id": "h-y",
            "t": "text",
            "text": "Được, nếu: ít nói tiếng Anh",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l2:yes",
            "hl": [
              {
                "text": "Được",
                "at": "l2:yes"
              }
            ]
          },
          {
            "id": "h-y2",
            "t": "text",
            "text": "+ kế hoạch cụ thể",
            "x": 3996,
            "y": 1335,
            "size": 46,
            "at": "l2:plan"
          },
          {
            "id": "h-n",
            "t": "text",
            "text": "Dùng tiếng Anh cả ngày → đổi",
            "x": 3996,
            "y": 1420,
            "size": 46,
            "at": "l3:all day",
            "color": "coral"
          },
          {
            "id": "h-n2",
            "t": "text",
            "text": "= tự chê kỹ năng cốt lõi",
            "x": 3996,
            "y": 1495,
            "size": 46,
            "at": "l3:core",
            "color": "coral",
            "hl": [
              {
                "text": "cốt lõi",
                "at": "l3:core"
              }
            ]
          },
          {
            "id": "h-d",
            "t": "text",
            "text": "Dũng: tiếng Anh chủ yếu qua email",
            "x": 3996,
            "y": 1590,
            "size": 42,
            "at": "l4:emails",
            "color": "accent"
          },
          {
            "id": "h-p",
            "t": "text",
            "text": "10 phút ghi âm/tối · CLB tiếng Anh",
            "x": 3996,
            "y": 1660,
            "size": 40,
            "at": "l4:ten",
            "hl": [
              {
                "text": "10 phút",
                "at": "l4:ten"
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
          "say": "Sixth stop: nine thirty. Can English be your weakness?",
          "sub": "Chặng sáu: chín rưỡi. Tiếng Anh làm điểm yếu được không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yes, if the job doesn't need spoken English all the time, and you have a clear plan.",
          "sub": "Được, nếu việc không cần nói tiếng Anh liên tục, và bạn có kế hoạch cụ thể.",
          "keys": [
            "kế hoạch cụ thể"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Using English all day with foreign clients? Pick another. Otherwise you criticise the core skill itself.",
          "sub": "Dùng tiếng Anh cả ngày với khách nước ngoài? Chọn điểm yếu khác, kẻo tự chê đúng kỹ năng cốt lõi.",
          "keys": [
            "kỹ năng cốt lõi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "My job uses English mostly in emails. So I record myself for ten minutes every evening, and I joined an English club.",
          "sub": "Việc của mình dùng tiếng Anh chủ yếu qua email. Nên tối nào mình cũng ghi âm mười phút, và vào câu lạc bộ tiếng Anh.",
          "pose": "explain"
        }
      ],
      "ref": "p17,p18,p8"
    },
    {
      "id": "s14",
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
            "at": "l3",
            "fit": [
              "i-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l4:end",
            "fit": "I",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ 22:00 · Hỏi kiểu khác",
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
              "set": "home",
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
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "at": "l1:ten",
            "caption": "22:00 · Thảo kể vòng hai",
            "icon": "speech-balloon"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "What area to improve?",
            "x": 5964,
            "y": 1250,
            "size": 42,
            "at": "l2:area"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "What would your manager say?",
            "x": 5964,
            "y": 1310,
            "size": 42,
            "at": "l2:manager"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Critical feedback?",
            "x": 5964,
            "y": 1370,
            "size": 42,
            "at": "l2:critical"
          },
          {
            "id": "i-same",
            "t": "text",
            "text": "→ cùng một câu chuyện",
            "x": 5964,
            "y": 1435,
            "size": 50,
            "at": "l2:same",
            "color": "accent",
            "hl": [
              {
                "text": "cùng một câu chuyện",
                "at": "l2:same story"
              }
            ]
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "1 chuyện tốt → nhiều câu hỏi",
            "x": 5964,
            "y": 1515,
            "size": 48,
            "at": "l5:many",
            "color": "accent",
            "hl": [
              {
                "text": "nhiều câu hỏi",
                "at": "l5:many"
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
          "say": "Seventh stop: ten p.m. The question in other clothes.",
          "sub": "Chặng bảy: mười giờ tối. Câu hỏi thay áo."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "What area would you like to improve? What would your manager say? Critical feedback? Use the same story.",
          "sub": "“Muốn cải thiện mảng nào?” “Sếp sẽ nói gì?” “Một lần bị góp ý thẳng?” Vẫn dùng cùng một câu chuyện.",
          "keys": [
            "cùng một câu chuyện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "In my second round they asked: What would your last manager say about you? Not on my list!",
          "sub": "Vòng hai của mình, họ hỏi: “Sếp cũ sẽ nói gì về bạn?” Câu này mình chưa luyện!",
          "face": "surprised"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "So I reused my yes-to-everything story: her feedback, my morning priorities, no missed deadlines.",
          "sub": "Thế là mình dùng lại chuyện ôm việc: lời góp ý, việc xếp ưu tiên mỗi sáng, không trễ hạn lần nào.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "The interviewer nodded and took notes. One good story answers many questions.",
          "sub": "Người phỏng vấn gật gù ghi chép. Một câu chuyện tốt trả lời được nhiều câu hỏi.",
          "keys": [
            "Một câu chuyện tốt"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Asked for two or three weaknesses? Have two or three short stories, half a minute each.",
          "sub": "Bị hỏi hai ba điểm yếu? Chuẩn bị hai ba chuyện ngắn, mỗi chuyện chừng nửa phút."
        }
      ],
      "ref": "p19,p20,p21,p22"
    },
    {
      "id": "s15",
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
            "id": "i-c0",
            "t": "box",
            "x": 5964,
            "y": 1620,
            "w": 36,
            "h": 36,
            "at": "l1:real",
            "stroke": 4
          },
          {
            "id": "i-ck0",
            "t": "text",
            "text": "✓",
            "x": 5967,
            "y": 1604,
            "size": 46,
            "at": "l1:real+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "1 điểm yếu thật",
            "x": 6014,
            "y": 1616,
            "size": 34,
            "at": "l1:real+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 6364,
            "y": 1620,
            "w": 36,
            "h": 36,
            "at": "l1:example",
            "stroke": 4
          },
          {
            "id": "i-ck1",
            "t": "text",
            "text": "✓",
            "x": 6367,
            "y": 1604,
            "size": 46,
            "at": "l1:example+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "Ví dụ 1 câu",
            "x": 6414,
            "y": 1616,
            "size": 34,
            "at": "l1:example+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 5964,
            "y": 1690,
            "w": 36,
            "h": 36,
            "at": "l2:actions",
            "stroke": 4
          },
          {
            "id": "i-ck2",
            "t": "text",
            "text": "✓",
            "x": 5967,
            "y": 1674,
            "size": 46,
            "at": "l2:actions+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "2–3 hành động",
            "x": 6014,
            "y": 1686,
            "size": 34,
            "at": "l2:actions+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 6364,
            "y": 1690,
            "w": 36,
            "h": 36,
            "at": "l2:result",
            "stroke": 4
          },
          {
            "id": "i-ck3",
            "t": "text",
            "text": "✓",
            "x": 6367,
            "y": 1674,
            "size": 46,
            "at": "l2:result+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "1 kết quả",
            "x": 6414,
            "y": 1686,
            "size": 34,
            "at": "l2:result+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 5964,
            "y": 1760,
            "w": 36,
            "h": 36,
            "at": "l3:phrases",
            "stroke": 4
          },
          {
            "id": "i-ck4",
            "t": "text",
            "text": "✓",
            "x": 5967,
            "y": 1744,
            "size": 46,
            "at": "l3:phrases+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "I tend to, Now I can",
            "x": 6014,
            "y": 1756,
            "size": 34,
            "at": "l3:phrases+200"
          },
          {
            "id": "i-c5",
            "t": "box",
            "x": 6364,
            "y": 1760,
            "w": 36,
            "h": 36,
            "at": "l3:backup",
            "stroke": 4
          },
          {
            "id": "i-ck5",
            "t": "text",
            "text": "✓",
            "x": 6367,
            "y": 1744,
            "size": 46,
            "at": "l3:backup+600",
            "color": "accent"
          },
          {
            "id": "i-l5",
            "t": "text",
            "text": "1 điểm yếu dự phòng",
            "x": 6414,
            "y": 1756,
            "size": 34,
            "at": "l3:backup+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Dũng's bag: one real weakness, not a key skill. A one line example.",
          "sub": "Hành trang: một điểm yếu thật, không phải kỹ năng chính. Một câu ví dụ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two or three actions, and one result.",
          "sub": "Hai ba hành động, và một kết quả."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The soft phrases, and one backup weakness.",
          "sub": "Mấy cụm nói mềm, và một điểm yếu dự phòng."
        }
      ],
      "ref": "p23"
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
            "at": "l5:end",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "⑧ Thứ Tư, 14:00: cùng ghế",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "sam",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-10",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "E-SHOT-06",
                  "on": "sam",
                  "move": "cut"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same",
            "caption": "Thứ Tư, 14:00 · phòng phỏng vấn",
            "icon": "office-building"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "✓ Điểm yếu: nói chậm hơn viết",
            "x": 7932,
            "y": 1260,
            "size": 44,
            "at": "l3:slower"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "✓ 10 phút ghi âm · CLB",
            "x": 7932,
            "y": 1335,
            "size": 44,
            "at": "l4:record"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "✓ Việc chủ yếu qua email",
            "x": 7932,
            "y": 1410,
            "size": 44,
            "at": "l2:emails"
          },
          {
            "id": "j-s",
            "t": "text",
            "text": "“It sounds clear to me today.”",
            "x": 7932,
            "y": 1510,
            "size": 46,
            "at": "l5:clear",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop: Wednesday, two p.m. Same chair, same question. This job uses English mostly in emails.",
          "sub": "Chặng cuối: hai giờ chiều thứ Tư. Vẫn ghế ấy, câu hỏi ấy. Việc này dùng tiếng Anh chủ yếu qua email.",
          "keys": [
            "Vẫn ghế ấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "sam",
          "say": "What is your greatest weakness? Our team writes a lot of emails.",
          "sub": "Điểm yếu lớn nhất của bạn là gì? Đội tôi viết email rất nhiều.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "My spoken English is slower than my written English.",
          "sub": "Tiếng Anh nói của em chậm hơn tiếng Anh viết.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "So I record myself speaking for ten minutes every evening, and I joined an English club.",
          "sub": "Nên tối nào em cũng tự ghi âm mười phút, và em đã vào câu lạc bộ tiếng Anh.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "sam",
          "say": "Well, it sounds clear to me today.",
          "sub": "Ồ, hôm nay tôi nghe rõ lắm mà.",
          "face": "happy"
        }
      ],
      "ref": "p8"
    },
    {
      "id": "s17",
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
            "id": "j-k",
            "t": "text",
            "text": "Có kế hoạch → đang thu nhỏ",
            "x": 7932,
            "y": 1630,
            "size": 56,
            "at": "l1:shrinking",
            "color": "accent",
            "hl": [
              {
                "text": "đang thu nhỏ",
                "at": "l1:shrinking"
              }
            ]
          },
          {
            "id": "j-cd",
            "t": "text",
            "text": "Xấu xa… kèm cách sửa",
            "x": 7932,
            "y": 1730,
            "size": 52,
            "at": "l2:fix",
            "hl": [
              {
                "text": "kèm cách sửa",
                "at": "l2:fix"
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
          "say": "A weakness with a plan is a weakness that is shrinking.",
          "sub": "Điểm yếu có kế hoạch là điểm yếu đang thu nhỏ.",
          "keys": [
            "đang thu nhỏ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Show the good, cover the bad? This time Dũng showed the bad, with its fix attached.",
          "sub": "“Tốt đẹp phô ra, xấu xa đậy lại”? Lần này Dũng phô cả cái xấu, kèm luôn cách sửa.",
          "keys": [
            "kèm luôn cách sửa"
          ]
        }
      ],
      "ref": "p9,outro"
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
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:real",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:quarters",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l3:result",
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
            "x": 6664,
            "y": 400,
            "at": "l1:real"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1500,
            "y": 1120,
            "at": "l2:quarters"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 3468,
            "y": 1690,
            "at": "l3:result"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: a real weakness, but not a key skill for the job.",
          "sub": "Tóm lại: một điểm yếu thật, nhưng không phải kỹ năng chính.",
          "keys": [
            "điểm yếu thật"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One quarter weakness, three quarters improvement.",
          "sub": "Một phần tư điểm yếu, ba phần tư cải thiện.",
          "keys": [
            "ba phần tư cải thiện"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Soft but honest English, ending with a result.",
          "sub": "Tiếng Anh mềm mà thật, kết bằng một kết quả.",
          "keys": [
            "kết bằng một kết quả"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p5,p10,p16,outro"
    },
    {
      "id": "s29",
      "module": "QUIZ-01",
      "ref": "questions[9]",
      "data": {
        "q": "How much of your weakness answer should be about improvement?",
        "options": [
          "About three quarters, with the weakness itself taking only a short part",
          "None of it, because talking about improvement sounds like boasting to employers",
          "About a tenth, since the interviewer mostly wants details of the weakness"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "chart-increasing",
        "why": "Điểm yếu nói ngắn, phần lớn là hành động và tiến bộ."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "How much of your weakness answer should be about improvement?",
          "sub": "Bao nhiêu phần câu trả lời nên dành cho việc cải thiện?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "About three quarters, with the weakness itself taking only a short part.",
          "sub": "Khoảng ba phần tư, điểm yếu chỉ chiếm phần ngắn."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Then they remember how you improved, not your mistake.",
          "sub": "Nhờ vậy họ nhớ cách bạn sửa, không phải lỗi của bạn."
        }
      ]
    },
    {
      "id": "s31",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: một câu điểm yếu, ba câu cải thiện",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, write one sentence for your weakness and three for what you did. Read it aloud, then try the forty questions below!",
          "sub": "Hôm nay viết một câu điểm yếu, ba câu bạn đã làm gì, đọc to lên. Rồi thử bốn mươi câu bên dưới nhé!",
          "face": "laugh"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 (hạt nhân #136 + biến thể #144): Đét đứng trái + bảng trắng 10 ô theo MỘT BUỔI TỐI TẬP của Dũng với Thảo: thứ Tư 14:00 (Sam hỏi, Dũng đứng hình) → tua lại tối thứ Ba 19:00 “I don't have any” (C) → 19:15 “Khoan đã!” điểm yếu giả → 19:30 chọn điểm yếu (D) → 20:00 đừng cãi góp ý (E) → 20:30 công thức ¼–¾, Thảo làm mẫu p11, Dũng p12 (F) → 21:00 nói mềm mà thật (G) → 21:30 tiếng Anh là điểm yếu (H) → 22:00 hỏi kiểu khác + hành trang (I) → thứ Tư 14:00 cùng phòng (J, khép vòng “Tốt đẹp phô ra, xấu xa đậy lại”). Đổi tên: Lụa (p8), “bạn” (p3), ví dụ p12 → Dũng (kế toán, ứng tuyển công ty nước ngoài); Châu (p20) và câu mẫu p11 → Thảo (giữ mạch bài tổng: chuyện ôm việc của Thảo); người phỏng vấn nước ngoài → Sam. Cảnh ngắt nhịp: BRK-02 (s10, p13), BRK-07 (s12, p17). Bản cũ: w145/bak/how-to-answer-what-is-your-weakness--w01.js.",
  "loop": {
    "open": "s01",
    "close": "s16"
  }
};
