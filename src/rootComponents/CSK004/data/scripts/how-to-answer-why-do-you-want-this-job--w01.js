// Kịch bản video W lần 3 (#110) — "Trả lời câu "Why do you want this job?"" · chuỗi "Trả lời phỏng vấn bằng tiếng Anh"
// Giọng đọc tiếng Anh, phụ đề tiếng Việt; hoạt hình + thẻ. Đủ ý cho 40 câu bài tập.
const L = (id, who, say, sub, extra = {}) => ({ id, lang: "en", ...(who ? { who } : {}), say, sub, ...extra });

export default {
  "schema": "detpro.video-script/0.2",
  "id": "how-to-answer-why-do-you-want-this-job--w01",
  "unit": {
    "audience": "english-interview-candidates",
    "slug": "how-to-answer-why-do-you-want-this-job",
    "door": "ky-nang",
    "level": "B1",
    "title": "Trả lời câu \"Why do you want this job?\"",
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
            "id": "a-3",
            "t": "text",
            "text": "3 thứ · 1 phút",
            "x": 60,
            "y": 140,
            "size": 150,
            "at": "l1:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 thứ",
                "at": "l1:three things"
              }
            ]
          },
          {
            "id": "a-3b",
            "t": "text",
            "text": "việc · công ty · bạn hợp",
            "x": 70,
            "y": 370,
            "size": 56,
            "at": "l1:job"
          },
          {
            "id": "a-big",
            "t": "text",
            "text": "Ta tưởng: “công ty lớn”",
            "x": 70,
            "y": 470,
            "size": 52,
            "at": "l2:big",
            "color": "muted"
          },
          {
            "id": "a-bigx",
            "t": "strike",
            "over": "a-big",
            "at": "l2:end"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Three things in one minute: the job, the company, and why you fit.",
          "sub": "Ba thứ trong một phút: công việc, công ty, và vì sao bạn hợp.",
          "keys": [
            "Ba thứ trong một phút"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Yet most of us only manage: because your company is big.",
          "sub": "Vậy mà đa số chỉ nghĩ ra: “vì công ty mình lớn”.",
          "keys": [
            "vì công ty mình lớn"
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
            "at": "l2",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
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
                  "on": "hoa",
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
                  "on": "hoa",
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
            "caption": "Thứ Hai, 9:05 · phòng phỏng vấn",
            "icon": "office-building"
          },
          {
            "id": "a-cm",
            "t": "text",
            "text": "“Chọn mặt gửi vàng”",
            "x": 70,
            "y": 580,
            "size": 56,
            "at": "l6:gold",
            "color": "accent",
            "hl": [
              {
                "text": "gửi vàng",
                "at": "l6:gold"
              }
            ]
          },
          {
            "id": "a-rw",
            "t": "text",
            "text": "⟲ Tua lại 7 ngày",
            "x": 900,
            "y": 690,
            "size": 46,
            "at": "l7:rewind",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng. An accountant, now applying to be a data analyst.",
          "sub": "Đây là Dũng. Kế toán, giờ ứng tuyển phân tích dữ liệu."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Monday, nine oh five. And this is Cô Hoa, the interviewer.",
          "sub": "Chín giờ năm, thứ Hai. Còn đây là cô Hoa, người phỏng vấn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "hoa",
          "say": "Why do you want this job?",
          "sub": "Vì sao em muốn làm công việc này?",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "The salary here is better than at my current company.",
          "sub": "Lương ở đây cao hơn chỗ em đang làm ạ.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "And if another company offers more next year?",
          "sub": "Thế năm sau chỗ khác trả cao hơn thì sao?",
          "face": "thinking"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Choose the face, then trust it with gold, they say. She is choosing a face. He talked gold.",
          "sub": "“Chọn mặt gửi vàng.” Cô đang chọn mặt, cậu lại nói chuyện vàng.",
          "keys": [
            "chọn mặt gửi vàng"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "Let's rewind seven days.",
          "sub": "Tua lại bảy ngày nào.",
          "keys": [
            "Tua lại bảy ngày"
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
      "ref": "p16"
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
            "text": "Hỏi câu này, họ lo gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:worried",
            "hl": [
              {
                "text": "lo gì",
                "at": "l1:worried"
              }
            ]
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "1. Hiểu công việc không?",
            "x": 2028,
            "y": 160,
            "size": 50,
            "at": "l2:understand"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "2. Thật lòng, hay rải hồ sơ?",
            "x": 2028,
            "y": 235,
            "size": 50,
            "at": "l3:care",
            "hl": [
              {
                "text": "rải hồ sơ",
                "at": "l3:everywhere"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "3. Có ở lâu không?",
            "x": 2028,
            "y": 310,
            "size": 50,
            "at": "l4:stay",
            "hl": [
              {
                "text": "ở lâu",
                "at": "l4:stay"
              }
            ]
          },
          {
            "id": "b-big",
            "t": "text",
            "text": "“big and professional”",
            "x": 2868,
            "y": 170,
            "size": 46,
            "at": "l5:big",
            "color": "muted"
          },
          {
            "id": "b-bigx",
            "t": "strike",
            "over": "b-big",
            "at": "l5:hundreds"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Nối: việc + công ty + bạn",
            "x": 2868,
            "y": 260,
            "size": 52,
            "at": "l6:connects",
            "color": "accent",
            "hl": [
              {
                "text": "Nối",
                "at": "l6:connects"
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
          "say": "So what is the interviewer really worried about?",
          "sub": "Vậy người phỏng vấn thật ra lo điều gì? Ba thứ.",
          "keys": [
            "lo điều gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Do you understand the job?",
          "sub": "Bạn có hiểu công việc không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Do you really care about this company, or are you applying everywhere?",
          "sub": "Bạn thật quan tâm công ty này, hay đang rải hồ sơ khắp nơi?",
          "keys": [
            "rải hồ sơ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And will you stay? Hiring is costly, nobody wants to choose wrong.",
          "sub": "Và bạn có ở lâu không? Tuyển người tốn công, ai cũng sợ chọn nhầm.",
          "keys": [
            "ở lâu"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Big and professional fits hundreds of companies.",
          "sub": "“Lớn và chuyên nghiệp” đúng với hàng trăm công ty."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "A good answer connects three things: the job, the company, and your fit.",
          "sub": "Câu tốt nối ba thứ: công việc, công ty, và sự phù hợp của bạn.",
          "keys": [
            "nối ba thứ"
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
            "id": "b-wk",
            "t": "text",
            "text": "7 chặng · tuần của Dũng",
            "x": 2028,
            "y": 450,
            "size": 52,
            "at": "l1:week",
            "hl": [
              {
                "text": "tuần của Dũng",
                "at": "l1:week"
              }
            ]
          },
          {
            "id": "b-d0",
            "t": "box",
            "x": 2028,
            "y": 560,
            "w": 210,
            "h": 100,
            "at": "l1:week+500",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d1",
            "t": "box",
            "x": 2263,
            "y": 560,
            "w": 210,
            "h": 100,
            "at": "l1:week+720",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d2",
            "t": "box",
            "x": 2498,
            "y": 560,
            "w": 210,
            "h": 100,
            "at": "l1:week+940",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d3",
            "t": "box",
            "x": 2733,
            "y": 560,
            "w": 210,
            "h": 100,
            "at": "l1:week+1160",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d4",
            "t": "box",
            "x": 2968,
            "y": 560,
            "w": 210,
            "h": 100,
            "at": "l1:week+1380",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d5",
            "t": "box",
            "x": 3203,
            "y": 560,
            "w": 210,
            "h": 100,
            "at": "l1:week+1600",
            "color": "ink",
            "stroke": 4
          },
          {
            "id": "b-d6",
            "t": "box",
            "x": 3438,
            "y": 560,
            "w": 210,
            "h": 100,
            "at": "l1:week+1820",
            "color": "accent",
            "stroke": 4
          },
          {
            "id": "b-dt0",
            "t": "text",
            "text": "T2 tối",
            "x": 2046,
            "y": 580,
            "size": 40,
            "at": "l1:week+620"
          },
          {
            "id": "b-dt1",
            "t": "text",
            "text": "T3",
            "x": 2281,
            "y": 580,
            "size": 48,
            "at": "l1:week+840"
          },
          {
            "id": "b-dt2",
            "t": "text",
            "text": "T4",
            "x": 2516,
            "y": 580,
            "size": 48,
            "at": "l1:week+1060"
          },
          {
            "id": "b-dt3",
            "t": "text",
            "text": "T5",
            "x": 2751,
            "y": 580,
            "size": 48,
            "at": "l1:week+1280"
          },
          {
            "id": "b-dt4",
            "t": "text",
            "text": "T6",
            "x": 2986,
            "y": 580,
            "size": 48,
            "at": "l1:week+1500"
          },
          {
            "id": "b-dt5",
            "t": "text",
            "text": "CN",
            "x": 3221,
            "y": 580,
            "size": 48,
            "at": "l1:week+1720"
          },
          {
            "id": "b-dt6",
            "t": "text",
            "text": "T2 9:05",
            "x": 3456,
            "y": 580,
            "size": 40,
            "at": "l1:week+1940"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "One week, and Thảo as his coach. Seven stops, last stop: the same chair.",
          "sub": "Một tuần, Thảo làm huấn luyện viên. Bảy chặng, trạm cuối: chính chiếc ghế ấy.",
          "keys": [
            "chính chiếc ghế ấy"
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
            "text": "① Tối thứ Hai: khen công ty",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:monday"
          },
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "cross"
                },
                {
                  "id": "dung",
                  "side": "right"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-06",
                  "on": "thao",
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
            "at": "l1:cafe",
            "caption": "Tối thứ Hai · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "c-f",
            "t": "text",
            "text": "“famous… good environment”",
            "x": 3996,
            "y": 170,
            "size": 46,
            "at": "l4:famous",
            "color": "muted"
          },
          {
            "id": "c-fx",
            "t": "strike",
            "over": "c-f",
            "at": "l6:hear"
          },
          {
            "id": "c-why",
            "t": "text",
            "text": "→ “Many companies do. Why us?”",
            "x": 3996,
            "y": 250,
            "size": 42,
            "at": "l5:why us",
            "color": "coral"
          },
          {
            "id": "c-sil",
            "t": "text",
            "text": "… im lặng vài giây",
            "x": 3996,
            "y": 330,
            "size": 48,
            "at": "l6:silent",
            "color": "muted"
          },
          {
            "id": "c-save",
            "t": "text",
            "text": "Cứu: 1 chi tiết + lý do thật",
            "x": 3996,
            "y": 430,
            "size": 50,
            "at": "l7:detail",
            "color": "accent",
            "hl": [
              {
                "text": "1 chi tiết",
                "at": "l7:detail"
              }
            ]
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Khen chung → không ai nhớ",
            "x": 3996,
            "y": 530,
            "size": 54,
            "at": "l8:nobody",
            "color": "accent",
            "hl": [
              {
                "text": "không ai nhớ",
                "at": "l8:nobody"
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
          "say": "First stop: Monday night, a cafe.",
          "sub": "Chặng một: tối thứ Hai, quán cà phê.",
          "keys": [
            "tối thứ Hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "This is Thảo, his friend, fresh from her own interview.",
          "sub": "Đây là Thảo, bạn Dũng, vừa phỏng vấn xong tuần trước."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Okay. Why do you want this job?",
          "sub": "Rồi. Vì sao cậu muốn làm việc này?",
          "face": "stern"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Because your company is famous and has a good environment.",
          "sub": "Vì công ty mình nổi tiếng và môi trường tốt ạ.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Many companies do. Why us?",
          "sub": "Nhiều công ty cũng vậy. Sao lại là chỗ chúng tôi?"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "They hear that all day. Nothing specific ready? You go silent.",
          "sub": "Câu ấy họ nghe cả ngày. Không có gì riêng sẵn là im mất mấy giây.",
          "keys": [
            "im mất mấy giây"
          ]
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "What saves you: one specific detail, and a reason you really care.",
          "sub": "Thứ cứu bạn: một chi tiết cụ thể, kèm lý do bạn thật sự quan tâm.",
          "keys": [
            "một chi tiết cụ thể"
          ]
        },
        {
          "id": "l8",
          "lang": "en",
          "who": "det",
          "say": "Praise anyone can say is praise nobody remembers.",
          "sub": "Câu khen ai cũng nói được thì không ai nhớ.",
          "keys": [
            "không ai nhớ"
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
            "text": "② Thứ Ba: thích gì ở việc?",
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
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "think",
                  "face": "worried"
                }
              ],
              "props": [
                "spiral-notepad"
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
                  "shot": "medium",
                  "on": "dung",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:tuesday",
            "caption": "Tối thứ Ba · phòng của Dũng",
            "icon": "spiral-notepad"
          },
          {
            "id": "d-need",
            "t": "text",
            "text": "“Mình chỉ cần việc thôi”",
            "x": 5964,
            "y": 170,
            "size": 48,
            "at": "l2:need",
            "color": "muted"
          },
          {
            "id": "d-small",
            "t": "text",
            "text": "→ 1 điều nhỏ có thật",
            "x": 5964,
            "y": 250,
            "size": 52,
            "at": "l3:small",
            "color": "accent",
            "hl": [
              {
                "text": "có thật",
                "at": "l3:truly"
              }
            ]
          },
          {
            "id": "d-jd",
            "t": "text",
            "text": "Chọn 1–2 nhiệm vụ trong JD",
            "x": 5964,
            "y": 360,
            "size": 46,
            "at": "l4:tasks"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Nói về việc, không chỉ chức danh",
            "x": 5964,
            "y": 440,
            "size": 44,
            "at": "l5:work",
            "hl": [
              {
                "text": "việc",
                "at": "l5:work"
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
          "say": "Second stop: Tuesday. What does Dũng like about the job itself?",
          "sub": "Chặng hai: thứ Ba. Dũng thích gì ở chính công việc?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Honestly? I just need a job.",
          "sub": "Nói thật nhé? Mình chỉ cần có việc.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Fair. Then find one small thing you truly like, like meeting customers or learning a new tool.",
          "sub": "Cũng được. Vậy tìm một điều nhỏ có thật bạn thích, như gặp khách hay học công cụ mới.",
          "keys": [
            "một điều nhỏ có thật"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Pick one or two tasks from the job description, and say why you like them.",
          "sub": "Chọn một hai nhiệm vụ trong mô tả công việc, và nói vì sao bạn thích."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Talk about the work, not just the title.",
          "sub": "Nói về việc, không chỉ chức danh.",
          "keys": [
            "Nói về việc"
          ]
        }
      ],
      "ref": "p5,p7"
    },
    {
      "id": "s05b",
      "module": "BRK-04",
      "data": {
        "title": "Việc hay chức danh?",
        "labels": [
          "Yếu",
          "Mạnh"
        ],
        "wrong": "I want to be a manager",
        "right": "I enjoy coaching new team members",
        "wrongIllus": "crown",
        "rightIllus": "handshake"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Weak: I want to be a manager.",
          "sub": "Yếu: “Em muốn làm quản lý.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Strong: I enjoy coaching new team members.",
          "sub": "Mạnh: “Em thích kèm cặp người mới.”"
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
          },
          {
            "at": "l1",
            "fit": [
              "d-cs1",
              "d-cs2"
            ],
            "zoom": 1.2,
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
            "id": "d-cs0",
            "t": "text",
            "text": "Chăm sóc khách hàng:",
            "x": 5964,
            "y": 610,
            "size": 40,
            "at": "l1:customer service",
            "color": "muted"
          },
          {
            "id": "d-cs1",
            "t": "text",
            "text": "“unhappy customer →",
            "x": 6384,
            "y": 610,
            "size": 40,
            "at": "l2:unhappy"
          },
          {
            "id": "d-cs2",
            "t": "text",
            "text": "happy one, every day”",
            "x": 6384,
            "y": 665,
            "size": 40,
            "at": "l2:every day"
          },
          {
            "id": "d-dg",
            "t": "text",
            "text": "Dũng: “data → real questions”",
            "x": 6804,
            "y": 690,
            "size": 42,
            "at": "l3:data",
            "color": "accent",
            "hl": [
              {
                "text": "real questions",
                "at": "l3:real"
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
          "say": "For a customer service role: I really enjoy solving problems for customers.",
          "sub": "Cho vị trí chăm sóc khách hàng: “Em rất thích giải quyết vấn đề cho khách.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The best part: turning an unhappy customer into a happy one, every day.",
          "sub": "“Vui nhất là biến khách không vui thành vui, mỗi ngày.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Mine: I love using data to answer real business questions.",
          "sub": "Của mình: em thích dùng dữ liệu trả lời những câu hỏi kinh doanh thật.",
          "face": "happy"
        }
      ],
      "ref": "p6,p13"
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
            "text": "③ Thứ Tư: tìm 1 chi tiết",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:wednesday"
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
                  "id": "dung",
                  "side": "center",
                  "pose": "phone"
                }
              ],
              "props": [
                "laptop"
              ],
              "camera": [
                {
                  "at": "l5",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "medium",
                  "on": "dung",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:wednesday",
            "caption": "Tối thứ Tư · lướt trang công ty",
            "icon": "laptop"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "☐ Trang web, tin tuyển dụng",
            "x": 7932,
            "y": 170,
            "size": 46,
            "at": "l2:website"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "☐ Sản phẩm từng dùng thử",
            "x": 7932,
            "y": 240,
            "size": 46,
            "at": "l2:tried"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "☐ Tin mới: chi nhánh, sản phẩm",
            "x": 7932,
            "y": 310,
            "size": 46,
            "at": "l3:news"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "☐ Điều thấy ở vòng trước",
            "x": 7932,
            "y": 380,
            "size": 46,
            "at": "l3:earlier"
          },
          {
            "id": "e-one",
            "t": "text",
            "text": "1 chi tiết thật là đủ",
            "x": 7932,
            "y": 470,
            "size": 56,
            "at": "l4:enough",
            "color": "accent",
            "hl": [
              {
                "text": "là đủ",
                "at": "l4:enough"
              }
            ]
          },
          {
            "id": "e-find",
            "t": "text",
            "text": "Lớp miễn phí cho cửa hàng nhỏ",
            "x": 7932,
            "y": 570,
            "size": 44,
            "at": "l5:free training",
            "color": "coral",
            "hl": [
              {
                "text": "cửa hàng nhỏ",
                "at": "l5:small shops"
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
          "say": "Third stop: Wednesday. Where do you find a company detail?",
          "sub": "Chặng ba: thứ Tư. Chi tiết về công ty lấy ở đâu?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Their website and job ad. Products or services you have tried.",
          "sub": "Trang web và tin tuyển dụng. Sản phẩm, dịch vụ bạn từng dùng thử."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Recent news, like a new branch. Or what you noticed in an earlier round.",
          "sub": "Tin gần đây như mở chi nhánh. Hay điều bạn thấy ở vòng phỏng vấn trước."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One real detail is enough. You are not writing their biography.",
          "sub": "Một chi tiết thật là đủ. Bạn đâu viết tiểu sử cho họ.",
          "keys": [
            "Một chi tiết thật là đủ"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Look! They just opened free training for small shops. My parents run a small shop!",
          "sub": "Xem này! Họ vừa mở lớp miễn phí cho cửa hàng nhỏ. Bố mẹ mình có một cửa hàng nhỏ!",
          "face": "surprised"
        }
      ],
      "ref": "p8,p10"
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
              "e-s1",
              "e-why"
            ],
            "zoom": 1.1,
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
            "id": "e-s1",
            "t": "text",
            "text": "“…expansion into smaller cities”",
            "x": 8772,
            "y": 690,
            "size": 40,
            "at": "l1:expansion"
          },
          {
            "id": "e-why",
            "t": "text",
            "text": "+ vì sao điều đó quan trọng",
            "x": 7932,
            "y": 680,
            "size": 46,
            "at": "l3:why",
            "color": "accent",
            "hl": [
              {
                "text": "vì sao",
                "at": "l3:why"
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
          "say": "Another sample: I've been following your expansion into smaller cities.",
          "sub": "Một câu mẫu khác: “Em theo dõi việc công ty mở rộng về các thành phố nhỏ.”"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And I like that you focus on affordable healthcare. That's something I really care about.",
          "sub": "“Em thích việc công ty chú trọng chăm sóc sức khoẻ giá vừa phải. Đó là điều em thật sự quan tâm.”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "It shows research, and why it matters to you.",
          "sub": "Nó cho thấy bạn đã tìm hiểu, và vì sao điều đó quan trọng với bạn.",
          "keys": [
            "vì sao điều đó quan trọng"
          ]
        }
      ],
      "ref": "p9"
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
            "at": "l3",
            "fit": [
              "f-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l5:end",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Thứ Năm: nối với nhu cầu",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:skills"
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
                  "id": "thao",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "explain"
                }
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-10",
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
            "at": "l1:thursday",
            "caption": "Tối thứ Năm · Thảo nghe thử",
            "icon": "speaking-head"
          },
          {
            "id": "f-few",
            "t": "text",
            "text": "“There are a few reasons.”",
            "x": 60,
            "y": 1260,
            "size": 46,
            "at": "l3:few reasons",
            "color": "accent"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "First: dữ liệu, hành vi khách",
            "x": 60,
            "y": 1340,
            "size": 46,
            "at": "l3:first",
            "hl": [
              {
                "text": "First",
                "at": "l3:first"
              }
            ]
          },
          {
            "id": "f-2",
            "t": "text",
            "text": "Second: dùng web của họ",
            "x": 60,
            "y": 1410,
            "size": 46,
            "at": "l4:second",
            "hl": [
              {
                "text": "Second",
                "at": "l4:second"
              }
            ]
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "And finally: báo cáo 2 năm",
            "x": 60,
            "y": 1480,
            "size": 46,
            "at": "l5:finally",
            "hl": [
              {
                "text": "finally",
                "at": "l5:finally"
              }
            ]
          },
          {
            "id": "f-day",
            "t": "text",
            "text": "→ góp sức từ ngày đầu",
            "x": 60,
            "y": 1560,
            "size": 50,
            "at": "l5:day one",
            "color": "accent",
            "hl": [
              {
                "text": "ngày đầu",
                "at": "l5:day one"
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
          "say": "Fourth stop: Thursday. Link your skills to their needs, so they picture you there.",
          "sub": "Chặng bốn: thứ Năm. Nối kỹ năng với nhu cầu của họ, để họ hình dung bạn ở đó.",
          "keys": [
            "nhu cầu của họ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng puts it all together.",
          "sub": "Dũng ghép tất cả lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "There are a few reasons. First, I love using data to answer real business questions, and this role focuses on customer behavior.",
          "sub": "Có vài lý do. Thứ nhất, em thích dùng dữ liệu trả lời câu hỏi kinh doanh thật, mà vị trí này tập trung vào hành vi khách hàng.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Second, I've used your website for years and noticed how quickly you improve it.",
          "sub": "Thứ hai, em dùng web của mình nhiều năm và thấy nó được cải tiến rất nhanh."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "And finally, I've spent two years building sales reports, so I could contribute from day one.",
          "sub": "Và cuối cùng, em có hai năm làm báo cáo bán hàng, nên có thể góp sức từ ngày đầu.",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "First, second, finally: road signs for the listener, and a guard rail for you.",
          "sub": "“First, second, finally”: biển chỉ đường cho người nghe, lan can cho người nói.",
          "keys": [
            "biển chỉ đường"
          ]
        }
      ],
      "ref": "p12,p13,p14"
    },
    {
      "id": "s11",
      "module": "BRK-07",
      "data": {
        "question": "Lý do thật là lương thì nói không?",
        "illus": "money-bag"
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
          "say": "What if the real reason is the salary?",
          "sub": "Nếu lý do thật là lương thì sao?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "cau-hoi"
        }
      ],
      "ref": "p15"
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
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Thứ Sáu: lương, gần nhà",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:friday"
          },
          {
            "id": "g-ok",
            "t": "text",
            "text": "Lương, gần nhà: bình thường",
            "x": 2028,
            "y": 1260,
            "size": 50,
            "at": "l2:normal",
            "hl": [
              {
                "text": "bình thường",
                "at": "l2:normal"
              }
            ]
          },
          {
            "id": "g-main",
            "t": "text",
            "text": "… nhưng đừng là lý do chính",
            "x": 2028,
            "y": 1340,
            "size": 50,
            "at": "l2:main",
            "color": "coral"
          },
          {
            "id": "g-plus",
            "t": "text",
            "text": "Gần nhà: điểm cộng nhỏ ở cuối",
            "x": 2028,
            "y": 1420,
            "size": 46,
            "at": "l3:plus",
            "color": "muted"
          },
          {
            "id": "g-mon",
            "t": "text",
            "text": "Thứ Hai: mở bằng lương",
            "x": 2868,
            "y": 1260,
            "size": 46,
            "at": "l4:salary",
            "color": "muted"
          },
          {
            "id": "g-mon2",
            "t": "text",
            "text": "→ cả buổi hỏi: có ở lâu?",
            "x": 2868,
            "y": 1335,
            "size": 46,
            "at": "l4:stay",
            "color": "coral"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Nói lương trước → sợ đi trước",
            "x": 2028,
            "y": 1540,
            "size": 56,
            "at": "l5:leave first",
            "color": "accent",
            "hl": [
              {
                "text": "sợ đi trước",
                "at": "l5:leave first"
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
          "say": "Fifth stop: Friday. Dũng confesses: the pay is better.",
          "sub": "Chặng năm: thứ Sáu. Dũng thú thật: lương ở đó cao hơn thật."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Good pay or a short commute are normal reasons. Just don't make them the main one.",
          "sub": "Lương tốt hay gần nhà là lý do bình thường. Chỉ đừng để thành lý do chính.",
          "keys": [
            "lý do chính"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Living close? A small plus at the end, never your first line.",
          "sub": "Gần nhà? Điểm cộng nhỏ ở cuối, đừng là câu đầu tiên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Remember Monday? Open with salary, and it all becomes: will he stay?",
          "sub": "Nhớ sáng thứ Hai chứ? Mở bằng lương, cả buổi chỉ xoay quanh: cậu có ở lâu không?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Talk about salary first, and they fear you will leave first.",
          "sub": "Nói lương trước, họ sợ bạn đi trước.",
          "keys": [
            "họ sợ bạn đi trước"
          ]
        }
      ],
      "ref": "p15,p16,p17"
    },
    {
      "id": "s13",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "Thứ Sáu · Thảo hỏi vặn",
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
        "verdict": {
          "ok": false,
          "label": "Kể tội sếp cũ",
          "why": "Có thể đúng, nhưng người nghe tự hỏi bạn xử lý bất đồng ra sao, câu hỏi sau thành “điều tra”.",
          "rule": "Nói về nơi muốn đến, đừng kể tội nơi muốn rời"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Why do you want to change jobs?",
          "sub": "Sao cậu muốn chuyển việc?",
          "face": "stern"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "My current boss is terrible. He never listens to anyone.",
          "sub": "Sếp hiện tại tệ lắm. Chẳng bao giờ nghe ai.",
          "face": "worried",
          "pose": "shrug",
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
          "say": "Maybe true. But now she wonders how you handle disagreements.",
          "sub": "Có thể đúng. Nhưng giờ người nghe tự hỏi bạn xử lý bất đồng thế nào."
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
          "say": "I'm looking for a role where I can work more closely with clients, and this position offers exactly that.",
          "sub": "Em tìm một vị trí được làm sát với khách hàng hơn, và vị trí này đúng như vậy.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain",
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
          "at": "l3",
          "key": "whoosh"
        }
      ],
      "ref": "p18"
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
          }
        ],
        "items": [
          {
            "id": "g-boss",
            "t": "text",
            "text": "“My boss is terrible”",
            "x": 2028,
            "y": 1650,
            "size": 46,
            "at": "l1:boss",
            "color": "muted"
          },
          {
            "id": "g-bossx",
            "t": "strike",
            "over": "g-boss",
            "at": "l1:investigation"
          },
          {
            "id": "g-to",
            "t": "text",
            "text": "Nơi muốn đến > nơi muốn rời",
            "x": 2028,
            "y": 1740,
            "size": 56,
            "at": "l2:going",
            "color": "accent",
            "hl": [
              {
                "text": "Nơi muốn đến",
                "at": "l2:going"
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
          "say": "Complain about the boss, and the next questions turn into an investigation.",
          "sub": "Kể tội sếp, câu hỏi sau dễ biến thành cuộc “điều tra”."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Talk about where you're going, not the faults of where you're leaving.",
          "sub": "Nói về nơi muốn đến, đừng kể tội nơi muốn rời.",
          "keys": [
            "Nói về nơi muốn đến"
          ]
        }
      ],
      "ref": "p18,p19"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Thứ Bảy: sửa tiếng Anh",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:saturday"
          },
          {
            "id": "h-a1",
            "t": "text",
            "text": "apply this job",
            "x": 3996,
            "y": 1260,
            "size": 50,
            "at": "l2:apply",
            "color": "muted"
          },
          {
            "id": "h-a1x",
            "t": "strike",
            "over": "h-a1",
            "at": "l2:for"
          },
          {
            "id": "h-a2",
            "t": "text",
            "text": "apply for this job",
            "x": 4436,
            "y": 1260,
            "size": 50,
            "at": "l2:for",
            "color": "accent",
            "hl": [
              {
                "text": "for",
                "at": "l2:for"
              }
            ]
          },
          {
            "id": "h-v1",
            "t": "text",
            "text": "I very like",
            "x": 3996,
            "y": 1350,
            "size": 50,
            "at": "l3:very",
            "color": "muted"
          },
          {
            "id": "h-v1x",
            "t": "strike",
            "over": "h-v1",
            "at": "l3:really"
          },
          {
            "id": "h-v2",
            "t": "text",
            "text": "I really like",
            "x": 4436,
            "y": 1350,
            "size": 50,
            "at": "l3:really",
            "color": "accent",
            "hl": [
              {
                "text": "really",
                "at": "l3:really"
              }
            ]
          },
          {
            "id": "h-f1",
            "t": "text",
            "text": "I follow… for two years",
            "x": 3996,
            "y": 1440,
            "size": 46,
            "at": "l4:follow",
            "color": "muted"
          },
          {
            "id": "h-f1x",
            "t": "strike",
            "over": "h-f1",
            "at": "l4:been"
          },
          {
            "id": "h-f2",
            "t": "text",
            "text": "I've been following…",
            "x": 3996,
            "y": 1510,
            "size": 50,
            "at": "l4:been",
            "color": "accent",
            "hl": [
              {
                "text": "I've been following",
                "at": "l4:following"
              }
            ]
          },
          {
            "id": "h-st",
            "t": "text",
            "text": "bắt đầu trước, vẫn đang tiếp diễn",
            "x": 3996,
            "y": 1585,
            "size": 40,
            "at": "l5:started",
            "color": "muted"
          },
          {
            "id": "h-dy",
            "t": "text",
            "text": "dynamic environment",
            "x": 4836,
            "y": 1260,
            "size": 46,
            "at": "l6:dynamic",
            "color": "muted"
          },
          {
            "id": "h-dyx",
            "t": "strike",
            "over": "h-dy",
            "at": "l6:detail"
          },
          {
            "id": "h-dt",
            "t": "text",
            "text": "→ 1 chi tiết cụ thể",
            "x": 4836,
            "y": 1340,
            "size": 50,
            "at": "l6:detail",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Sixth stop: Saturday, English check.",
          "sub": "Chặng sáu: thứ Bảy, soát tiếng Anh."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not apply this job, but apply for this job.",
          "sub": "Không phải “apply this job”, mà “apply for this job”."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Not I very like. Say I really like, or I like it very much.",
          "sub": "Không nói “I very like”. Nói “I really like” hoặc “I like it very much”.",
          "keys": [
            "I really like"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Not I follow you for two years, but I've been following.",
          "sub": "Không phải “I follow… for two years”, mà “I've been following…”.",
          "keys": [
            "I've been following"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "It started before and is still going on.",
          "sub": "Vì việc theo dõi bắt đầu từ trước và vẫn đang tiếp diễn."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And retire dynamic environment. Use one specific detail instead.",
          "sub": "Cho “dynamic environment” nghỉ hưu. Thay bằng một chi tiết cụ thể.",
          "keys": [
            "Một chi tiết cụ thể"
          ]
        }
      ],
      "ref": "p20,p21,p22"
    },
    {
      "id": "s16",
      "module": "BRK-11",
      "data": {
        "title": "3 chỗ cần sửa",
        "items": [
          "apply for this job",
          "I really like",
          "I've been following"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Three: I've been following.",
          "sub": "Ba: I've been following."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two: I really like.",
          "sub": "Hai: I really like."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "One: apply for this job.",
          "sub": "Một: apply for this job."
        }
      ],
      "ref": "p20,p21"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "⑦ Chủ nhật: đổi chữ",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:sunday"
          },
          {
            "id": "i-j",
            "t": "text",
            "text": "Why this job? → công việc",
            "x": 5964,
            "y": 1260,
            "size": 48,
            "at": "l2:job",
            "hl": [
              {
                "text": "công việc",
                "at": "l2:job"
              }
            ]
          },
          {
            "id": "i-h",
            "t": "text",
            "text": "Why work here? → công ty",
            "x": 5964,
            "y": 1335,
            "size": 48,
            "at": "l2:here",
            "hl": [
              {
                "text": "công ty",
                "at": "l2:company"
              }
            ]
          },
          {
            "id": "i-b",
            "t": "text",
            "text": "Nhắc cả hai, nặng phần được hỏi",
            "x": 5964,
            "y": 1410,
            "size": 44,
            "at": "l3:both",
            "color": "muted"
          },
          {
            "id": "i-g",
            "t": "text",
            "text": "Thăng tiến → nói học hỏi",
            "x": 5964,
            "y": 1500,
            "size": 50,
            "at": "l4:promotion",
            "hl": [
              {
                "text": "học hỏi",
                "at": "l4:learning"
              }
            ]
          },
          {
            "id": "i-gs",
            "t": "text",
            "text": "“grow with a team that invests…”",
            "x": 5964,
            "y": 1570,
            "size": 42,
            "at": "l4:grow",
            "color": "accent"
          },
          {
            "id": "i-st",
            "t": "text",
            "text": "không phải bước đệm",
            "x": 5964,
            "y": 1640,
            "size": 44,
            "at": "l5:stepping",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Seventh stop: Sunday. Same question, new words.",
          "sub": "Chặng bảy: Chủ nhật. Cùng câu hỏi, đổi chữ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Why this job is about the job. Why work here is about the company.",
          "sub": "“Why this job?” nhấn vào công việc. “Why work here?” nhấn vào công ty.",
          "keys": [
            "công việc",
            "công ty"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Mention both, but spend more time on the part being asked.",
          "sub": "Nhắc cả hai, nhưng dành nhiều thời gian cho phần đang được hỏi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Promotion? Say it as learning: I'd like to grow with a team that invests in training.",
          "sub": "Thăng tiến? Nói theo hướng học hỏi: “Em muốn lớn lên cùng một đội đầu tư cho đào tạo.”",
          "keys": [
            "học hỏi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Never sound like this job is a stepping stone.",
          "sub": "Đừng nói như thể việc này chỉ là bước đệm."
        }
      ],
      "ref": "p23,p24"
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
          }
        ],
        "items": [
          {
            "id": "i-c0",
            "t": "box",
            "x": 6804,
            "y": 1260,
            "w": 50,
            "h": 50,
            "at": "l1:tasks",
            "stroke": 5
          },
          {
            "id": "i-k0",
            "t": "text",
            "text": "✓",
            "x": 6809,
            "y": 1242,
            "size": 64,
            "at": "l1:tasks+600",
            "color": "accent"
          },
          {
            "id": "i-l0",
            "t": "text",
            "text": "1–2 việc thật sự thích",
            "x": 6879,
            "y": 1258,
            "size": 46,
            "at": "l1:tasks+200"
          },
          {
            "id": "i-c1",
            "t": "box",
            "x": 6804,
            "y": 1365,
            "w": 50,
            "h": 50,
            "at": "l1:detail",
            "stroke": 5
          },
          {
            "id": "i-k1",
            "t": "text",
            "text": "✓",
            "x": 6809,
            "y": 1347,
            "size": 64,
            "at": "l1:detail+600",
            "color": "accent"
          },
          {
            "id": "i-l1",
            "t": "text",
            "text": "1 chi tiết thật về công ty",
            "x": 6879,
            "y": 1363,
            "size": 46,
            "at": "l1:detail+200"
          },
          {
            "id": "i-c2",
            "t": "box",
            "x": 6804,
            "y": 1470,
            "w": 50,
            "h": 50,
            "at": "l2:links",
            "stroke": 5
          },
          {
            "id": "i-k2",
            "t": "text",
            "text": "✓",
            "x": 6809,
            "y": 1452,
            "size": 64,
            "at": "l2:links+600",
            "color": "accent"
          },
          {
            "id": "i-l2",
            "t": "text",
            "text": "1 câu nối kỹ năng–nhu cầu",
            "x": 6879,
            "y": 1468,
            "size": 46,
            "at": "l2:links+200"
          },
          {
            "id": "i-c3",
            "t": "box",
            "x": 6804,
            "y": 1575,
            "w": 50,
            "h": 50,
            "at": "l2:first",
            "stroke": 5
          },
          {
            "id": "i-k3",
            "t": "text",
            "text": "✓",
            "x": 6809,
            "y": 1557,
            "size": 64,
            "at": "l2:first+600",
            "color": "accent"
          },
          {
            "id": "i-l3",
            "t": "text",
            "text": "First, second, finally",
            "x": 6879,
            "y": 1573,
            "size": 46,
            "at": "l2:first+200"
          },
          {
            "id": "i-c4",
            "t": "box",
            "x": 6804,
            "y": 1680,
            "w": 50,
            "h": 50,
            "at": "l3:salary",
            "stroke": 5
          },
          {
            "id": "i-k4",
            "t": "text",
            "text": "✓",
            "x": 6809,
            "y": 1662,
            "size": 64,
            "at": "l3:salary+600",
            "color": "accent"
          },
          {
            "id": "i-l4",
            "t": "text",
            "text": "Lương, tiện lợi: để sau",
            "x": 6879,
            "y": 1678,
            "size": 46,
            "at": "l3:salary+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Dũng's bag: one or two tasks he likes, one real company detail.",
          "sub": "Hành trang của Dũng: một hai việc cậu thích, một chi tiết thật về công ty."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A line that links his skills to their needs, with first, second, finally.",
          "sub": "Một câu nối kỹ năng với nhu cầu của họ, có first, second, finally."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And salary and convenience saved for later.",
          "sub": "Còn lương và sự tiện lợi, để sau."
        }
      ],
      "ref": "p25"
    },
    {
      "id": "s19",
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
            "text": "⑧ Thứ Hai, 9:05: cùng ghế",
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
              "set": "meeting",
              "actors": [
                {
                  "id": "hoa",
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
                  "on": "hoa",
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
                  "on": "hoa",
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
            "caption": "Thứ Hai, 9:05 · phòng phỏng vấn",
            "icon": "office-building"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "✓ Việc: dữ liệu, hành vi khách",
            "x": 7932,
            "y": 1260,
            "size": 46,
            "at": "l3:data"
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "✓ Chi tiết: lớp cho cửa hàng nhỏ",
            "x": 7932,
            "y": 1335,
            "size": 44,
            "at": "l4:training",
            "hl": [
              {
                "text": "cửa hàng nhỏ",
                "at": "l4:small shops"
              }
            ]
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "✓ Lý do: bố mẹ bán hàng",
            "x": 7932,
            "y": 1410,
            "size": 44,
            "at": "l4:parents"
          },
          {
            "id": "j-run",
            "t": "text",
            "text": "“I actually run that program!”",
            "x": 7932,
            "y": 1510,
            "size": 46,
            "at": "l5:run",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Last stop: Monday, nine oh five. Same room, same chair, same question.",
          "sub": "Chặng cuối: chín giờ năm thứ Hai. Vẫn phòng ấy, ghế ấy, câu hỏi ấy.",
          "keys": [
            "Vẫn phòng ấy"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "hoa",
          "say": "Why do you want this job?",
          "sub": "Vì sao em muốn làm công việc này?",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "First, I love using data to answer real business questions.",
          "sub": "Thứ nhất, em thích dùng dữ liệu trả lời câu hỏi kinh doanh thật.",
          "pose": "explain"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "I saw your free training for small shops. My parents run one, so I know what that help means.",
          "sub": "Em thấy lớp miễn phí cho cửa hàng nhỏ. Bố mẹ em có một cửa hàng, nên em hiểu sự giúp ấy quý thế nào.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "hoa",
          "say": "Really? I actually run that program!",
          "sub": "Thật à? Chính chị phụ trách chương trình đó đấy!",
          "face": "surprised"
        }
      ],
      "ref": "p10"
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
          }
        ],
        "items": [
          {
            "id": "j-k",
            "t": "text",
            "text": "1 chi tiết thật > 10 lời khen",
            "x": 7932,
            "y": 1630,
            "size": 56,
            "at": "l1:outweighs",
            "color": "accent",
            "hl": [
              {
                "text": "1 chi tiết thật",
                "at": "l1:one real detail"
              }
            ]
          },
          {
            "id": "j-cm",
            "t": "text",
            "text": "Chọn mặt gửi vàng: cả hai chọn",
            "x": 7932,
            "y": 1730,
            "size": 48,
            "at": "l2:choose",
            "hl": [
              {
                "text": "cả hai chọn",
                "at": "l2:both"
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
          "say": "The talk gets friendly at once. One real detail outweighs ten compliments.",
          "sub": "Câu chuyện thân thiện hẳn. Một chi tiết thật nặng hơn mười lời khen.",
          "keys": [
            "Một chi tiết thật nặng hơn mười lời khen"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Choose the face before trusting the gold? This time, both sides chose on purpose.",
          "sub": "“Chọn mặt gửi vàng”? Lần này, cả hai bên đều chọn có chủ ý.",
          "keys": [
            "chọn có chủ ý"
          ]
        }
      ],
      "ref": "p11,outro"
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
            "at": "l1:job",
            "fit": "D",
            "zoom": 0.8
          },
          {
            "at": "l2:detail",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l3:fit",
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
            "x": 7404,
            "y": 30,
            "at": "l1:job"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8632,
            "y": 470,
            "at": "l2:detail"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1500,
            "y": 1120,
            "at": "l3:fit"
          },
          {
            "id": "z-r",
            "t": "ring",
            "around": [
              "g-k"
            ],
            "color": "accent",
            "stroke": 10,
            "at": "l4:salary"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: one or two tasks you really like in the job.",
          "sub": "Tóm lại: một hai việc bạn thật sự thích ở công việc.",
          "keys": [
            "thật sự thích"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One real detail about the company, and why you care.",
          "sub": "Một chi tiết thật về công ty, và vì sao bạn quan tâm.",
          "keys": [
            "Một chi tiết thật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One line on why you fit their needs.",
          "sub": "Một câu vì sao bạn hợp nhu cầu của họ.",
          "keys": [
            "hợp nhu cầu"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And salary? Save it for later.",
          "sub": "Còn lương? Để sau.",
          "keys": [
            "Để sau"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p4,p11,p17,outro"
    },
    {
      "id": "s31",
      "module": "QUIZ-01",
      "ref": "questions[17]",
      "data": {
        "q": "In the before and after example, why is complaining about your boss risky?",
        "options": [
          "It is risky only because you say it in English instead of Vietnamese",
          "It is not risky, because interviewers always agree that most bosses are bad",
          "It makes the interviewer wonder how you handle conflict with other people"
        ],
        "correct": 2,
        "countdown": 5,
        "illus": "speaking-head",
        "why": "Kể xấu nơi cũ, người nghe tự hỏi bạn có khó hợp tác không."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "In the before and after example, why is complaining about your boss risky?",
          "sub": "Trong ví dụ trước – sau, vì sao phàn nàn về sếp cũ lại rủi ro?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It makes the interviewer wonder how you handle conflict with other people.",
          "sub": "Người phỏng vấn sẽ tự hỏi bạn xử lý bất đồng với người khác thế nào."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "So the next questions may turn to how you deal with disagreements.",
          "sub": "Nên câu hỏi sau dễ xoay sang chuyện bạn xử lý bất đồng."
        }
      ]
    },
    {
      "id": "s33",
      "module": "END-05",
      "data": {
        "text": "Hôm nay: tìm một chi tiết thật về công ty",
        "sub": "Rồi làm bốn mươi câu bên dưới"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Today, open the company website, note one detail you like, and say why in one English sentence. Then try the forty questions below!",
          "sub": "Hôm nay mở trang công ty, ghi một chi tiết bạn thích và một câu tiếng Anh vì sao. Rồi thử bốn mươi câu bên dưới nhé!",
          "face": "laugh"
        }
      ],
      "ref": "outro"
    }
  ],
  "hook": "HOOK-24",
  "notes": "#145 (hạt nhân #136 + biến thể #144): Đét đứng trái + bảng trắng 10 ô theo TUẦN CHUẨN BỊ của Dũng: thứ Hai 9:05 (mở bằng lương, bị hỏi vặn, p16) → tua lại 7 ngày → tối T2 khen công ty (C, p3–p4) → T3 thích gì ở việc (D) → T4 tìm chi tiết (E) → T5 nối nhu cầu, ghép First/Second/Finally (F) → T6 lương + “Khoan đã!” kể tội sếp (G) → T7 lỗi tiếng Anh (H) → CN đổi chữ + hành trang (I) → thứ Hai 9:05 cùng phòng (J, khép vòng “Chọn mặt gửi vàng”). Đổi tên: Kiên (p16), Uyên (p10), ứng viên p13, “bạn” p18 → Dũng (kế toán, ứng tuyển phân tích dữ liệu ở công ty bán hàng trực tuyến); Thảo làm huấn luyện viên (giữ mạch bài tổng: Thảo vừa phỏng vấn xong); người phỏng vấn → Cô Hoa. Cảnh ngắt nhịp: BRK-07 (s11, lương), BRK-11 (s16, 3 lỗi tiếng Anh). Bản cũ: w145/bak/how-to-answer-why-do-you-want-this-job--w01.js.",
  "loop": {
    "open": "s01",
    "close": "s19"
  }
};
