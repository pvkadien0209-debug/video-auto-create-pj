// en-email-professor-asking-for-a-meeting--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "en-email-professor-asking-for-a-meeting--w01",
  "hook": "HOOK-24",
  "unit": {
    "audience": "en-students-emailing-professors",
    "slug": "en-email-professor-asking-for-a-meeting",
    "door": "ky-nang",
    "level": "B1",
    "title": "Xin gặp giảng viên ngoài giờ (office hours) viết thế nào?",
    "series": "Viết email cho giáo sư — cho sinh viên Việt, được trả lời mà không thất lễ"
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
            "text": "4 lượt thư",
            "x": 60,
            "y": 90,
            "size": 150,
            "at": "l1:Four",
            "color": "accent",
            "hl": [
              {
                "text": "4 lượt thư",
                "at": "l1:emails"
              }
            ]
          },
          {
            "id": "a-sub",
            "t": "text",
            "text": "để chốt MỘT buổi gặp",
            "x": 70,
            "y": 290,
            "size": 58,
            "at": "l1:one meeting"
          },
          {
            "id": "a-e0",
            "t": "illus",
            "name": "envelope",
            "x": 70,
            "y": 400,
            "size": 100,
            "at": "l1:meeting+300"
          },
          {
            "id": "a-e1",
            "t": "illus",
            "name": "envelope",
            "x": 210,
            "y": 400,
            "size": 100,
            "at": "l1:meeting+550"
          },
          {
            "id": "a-e2",
            "t": "illus",
            "name": "envelope",
            "x": 350,
            "y": 400,
            "size": 100,
            "at": "l1:meeting+800"
          },
          {
            "id": "a-e3",
            "t": "illus",
            "name": "envelope",
            "x": 490,
            "y": 400,
            "size": 100,
            "at": "l1:meeting+1050"
          },
          {
            "id": "a-why",
            "t": "text",
            "text": "Thầy khó? Không. Thư thiếu.",
            "x": 70,
            "y": 540,
            "size": 52,
            "at": "l2:missing",
            "color": "coral",
            "hl": [
              {
                "text": "Thư thiếu",
                "at": "l2:missing"
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
          "say": "Four emails back and forth, just to book one meeting.",
          "sub": "Bốn lượt thư qua lại, chỉ để chốt một buổi gặp.",
          "keys": [
            "Bốn lượt thư"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a difficult professor. Just a first email missing two things.",
          "sub": "Chẳng phải thầy khó. Chỉ là bức thư đầu thiếu hai thứ.",
          "keys": [
            "thiếu hai thứ"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "x": 900,
            "y": 120,
            "w": 720,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "phone",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "crescent-moon"
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
            "caption": "Thứ Hai 22:00 · phòng trọ",
            "icon": "crescent-moon"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Lựa lời mà nói",
            "x": 60,
            "y": 640,
            "size": 52,
            "at": "l4:choose",
            "color": "accent"
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "cho vừa lòng nhau”",
            "x": 420,
            "y": 700,
            "size": 48,
            "at": "l4:both",
            "color": "accent",
            "hl": [
              {
                "text": "vừa lòng nhau",
                "at": "l4:both"
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
          "say": "Meet Thảo, a first-year student. She wants to discuss her final project topic for History two-ten.",
          "sub": "Đây là Thảo, sinh viên năm nhất. Thảo muốn bàn đề tài dự án cuối kỳ môn HIST 210.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Monday, ten p.m. One quick line to Professor Evans.",
          "sub": "Mười giờ tối thứ Hai. Một dòng gửi thầy Evans."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Dear Professor Evans, can I meet you sometime next week? Sent!",
          "sub": "“Dear Professor Evans, can I meet you sometime next week?” Gửi!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Our grandparents say: words cost nothing, so choose them to please both sides.",
          "sub": "Ông bà dạy: “Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau.”",
          "keys": [
            "lựa lời mà nói"
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
      "ref": "p3"
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
            "text": "Xin gặp, viết sao cho một lượt?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:ask",
            "hl": [
              {
                "text": "một lượt",
                "at": "l1:one go"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: “lúc nào cũng được”",
            "x": 2028,
            "y": 170,
            "size": 50,
            "at": "l2:any",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:not"
          },
          {
            "id": "b-1",
            "t": "text",
            "text": "1. Gặp để làm gì",
            "x": 2028,
            "y": 270,
            "size": 54,
            "at": "l3:why"
          },
          {
            "id": "b-2",
            "t": "text",
            "text": "2. Hai, ba khung giờ",
            "x": 2028,
            "y": 350,
            "size": 54,
            "at": "l3:time slots",
            "hl": [
              {
                "text": "khung giờ",
                "at": "l3:time slots"
              }
            ]
          },
          {
            "id": "b-3",
            "t": "text",
            "text": "3. Xác nhận, cảm ơn",
            "x": 2028,
            "y": 430,
            "size": 54,
            "at": "l4:confirm"
          },
          {
            "id": "b-cal",
            "t": "illus",
            "name": "spiral-calendar",
            "x": 3368,
            "y": 170,
            "size": 150,
            "at": "l3:time slots"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how do you ask a lecturer for a meeting, and settle it in one go?",
          "sub": "Vậy xin gặp giảng viên thế nào để chốt được ngay một lượt?",
          "keys": [
            "một lượt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "The secret is not any time is fine. That sounds kind, but it isn't helpful.",
          "sub": "Bí quyết không phải “lúc nào cũng được”. Nghe thì dễ chịu, nhưng chẳng giúp gì.",
          "keys": [
            "lúc nào cũng được"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Say why you want to meet. Offer two or three time slots.",
          "sub": "Nói rõ gặp để làm gì. Đưa sẵn hai, ba khung giờ.",
          "keys": [
            "hai, ba khung giờ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then confirm, and say thank you.",
          "sub": "Rồi xác nhận, và cảm ơn."
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "BRK-08",
      "data": {
        "title": "Hai tuần chốt đề tài",
        "points": [
          {
            "label": "Thứ Năm",
            "sub": "Bốn lượt thư",
            "illus": "envelope"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Office hours",
            "illus": "door"
          },
          {
            "label": "Cuối tuần",
            "sub": "Viết thư xin gặp",
            "illus": "memo"
          },
          {
            "label": "Thứ Hai",
            "sub": "Xác nhận",
            "illus": "check-mark-button"
          },
          {
            "label": "Thứ Sáu",
            "sub": "Buổi gặp",
            "illus": "handshake"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Two weeks, one project topic.",
          "sub": "Hai tuần, một đề tài dự án.",
          "keys": [
            "Hai tuần"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Let's count the emails.",
          "sub": "Cùng đếm số thư nào."
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
            "text": "① Thứ Năm · Bốn lượt thư",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "Thầy: Bàn gì? Rảnh lúc nào?",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l2:discuss"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "Thảo: Any time is fine.",
            "x": 3996,
            "y": 250,
            "size": 50,
            "at": "l3:Any time",
            "color": "coral",
            "hl": [
              {
                "text": "Any time",
                "at": "l3:Any time"
              }
            ]
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "Thầy: Thứ Hai, 9 giờ?",
            "x": 3996,
            "y": 330,
            "size": 50,
            "at": "l4:Monday"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "Thảo: Em có lớp ạ…",
            "x": 3996,
            "y": 410,
            "size": 50,
            "at": "l4:class",
            "color": "coral"
          },
          {
            "id": "c-e0",
            "t": "illus",
            "name": "envelope",
            "x": 4896,
            "y": 180,
            "size": 110,
            "at": "l5:Four+0"
          },
          {
            "id": "c-e1",
            "t": "illus",
            "name": "envelope",
            "x": 5046,
            "y": 180,
            "size": 110,
            "at": "l5:Four+250"
          },
          {
            "id": "c-e2",
            "t": "illus",
            "name": "envelope",
            "x": 5196,
            "y": 180,
            "size": 110,
            "at": "l5:Four+500"
          },
          {
            "id": "c-e3",
            "t": "illus",
            "name": "envelope",
            "x": 5346,
            "y": 180,
            "size": 110,
            "at": "l5:Four+750"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Nói rõ việc, đưa sẵn giờ",
            "x": 4896,
            "y": 360,
            "size": 54,
            "at": "l6:purpose",
            "color": "accent",
            "hl": [
              {
                "text": "đưa sẵn giờ",
                "at": "l6:times"
              }
            ]
          },
          {
            "id": "c-k2",
            "t": "text",
            "text": "→ đỡ bốn lượt thư",
            "x": 4936,
            "y": 440,
            "size": 50,
            "at": "l6:save"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop one. Thursday. Professor Evans replies.",
          "sub": "Chặng một. Thứ Năm. Thầy Evans trả lời."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Sure. What would you like to discuss, and when are you free?",
          "sub": "“Được chứ. Em muốn bàn chuyện gì, và em rảnh lúc nào?”"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Thảo replies: Any time is fine.",
          "sub": "Thảo đáp: “Any time is fine.”, lúc nào cũng được.",
          "keys": [
            "lúc nào cũng được"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "He offers Monday at nine. Exactly when Thảo has another class.",
          "sub": "Thầy đề xuất chín giờ thứ Hai, đúng giờ Thảo có lớp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Four more emails before they agree on a time. Four rounds, like ping pong.",
          "sub": "Bốn lượt thư nữa mới chốt được lịch. Như đánh bóng bàn.",
          "keys": [
            "Bốn lượt thư"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: state your purpose, give your times, save four emails.",
          "sub": "Rút ra: nói rõ việc, đưa sẵn giờ, đỡ bốn lượt thư.",
          "keys": [
            "nói rõ việc, đưa sẵn giờ"
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
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Thứ Sáu 10:00 · Office hours",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6904,
            "y": 120,
            "w": 640,
            "data": {
              "set": "campus",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "face": "thinking"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                }
              ],
              "props": [
                "open-book",
                "door"
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
                  "shot": "E-SHOT-05",
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
            "at": "l2:Lan",
            "caption": "Thứ Sáu 10:00 · hành lang khoa",
            "icon": "door"
          },
          {
            "id": "d-oh",
            "t": "text",
            "text": "Office hours =",
            "x": 5964,
            "y": 170,
            "size": 56,
            "at": "l5:Office hours"
          },
          {
            "id": "d-oh2",
            "t": "text",
            "text": "giờ tiếp sinh viên mỗi tuần",
            "x": 6004,
            "y": 250,
            "size": 46,
            "at": "l5:every week",
            "hl": [
              {
                "text": "mỗi tuần",
                "at": "l5:every week"
              }
            ]
          },
          {
            "id": "d-oh3",
            "t": "text",
            "text": "giờ, phòng, đường dẫn: đề cương",
            "x": 6004,
            "y": 320,
            "size": 42,
            "at": "l5:syllabus",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two. Friday, ten a.m., in the department hallway.",
          "sub": "Chặng hai. Mười giờ sáng thứ Sáu, hành lang khoa."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Meet Lan, Thảo's classmate in year two, who has photos of every syllabus.",
          "sub": "Đây là Lan, bạn cùng lớp năm hai của Thảo, chụp sẵn ảnh mọi đề cương.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Professor Evans has office hours on Thursdays. No booking needed. You just go!",
          "sub": "Thầy Evans có giờ tiếp sinh viên chiều thứ Năm. Không cần hẹn. Cứ đến thôi!",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Four emails, and the door was open all along?",
          "sub": "Bốn lượt thư, mà cửa vẫn mở từ đầu à?",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Office hours are the times a lecturer sets aside every week. The syllabus lists them, with a room or a link.",
          "sub": "Office hours là giờ giảng viên dành sẵn mỗi tuần để tiếp sinh viên, ghi trong đề cương kèm phòng hoặc đường dẫn.",
          "keys": [
            "giờ giảng viên dành sẵn mỗi tuần"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 600
        }
      ],
      "ref": "p1,p2"
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
            "id": "d-pi",
            "t": "text",
            "text": "Đến để thầy biết mình",
            "x": 5964,
            "y": 420,
            "size": 50,
            "at": "l1:know you",
            "hl": [
              {
                "text": "thầy biết mình",
                "at": "l1:know you"
              }
            ]
          },
          {
            "id": "d-pi2",
            "t": "text",
            "text": "→ có ích khi xin thư giới thiệu",
            "x": 6004,
            "y": 490,
            "size": 42,
            "at": "l1:recommendation",
            "color": "muted"
          },
          {
            "id": "d-gr",
            "t": "text",
            "text": "Thắc mắc điểm → office hours",
            "x": 5964,
            "y": 570,
            "size": 46,
            "at": "l2:grade"
          },
          {
            "id": "d-bk",
            "t": "text",
            "text": "Phải đặt lịch? Trùng giờ?",
            "x": 5964,
            "y": 650,
            "size": 50,
            "at": "l3:booking",
            "color": "coral"
          },
          {
            "id": "d-bk2",
            "t": "text",
            "text": "→ mới cần email xin hẹn",
            "x": 6864,
            "y": 650,
            "size": 50,
            "at": "l3:email",
            "color": "accent",
            "hl": [
              {
                "text": "email xin hẹn",
                "at": "l3:email"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: Pittsburgh Career Central · Tulane · University at Buffalo",
            "x": 5964,
            "y": 730,
            "size": 26,
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
          "say": "Pittsburgh's career centre says: go, so lecturers know you. Useful later for a recommendation letter.",
          "sub": "Trung tâm hướng nghiệp Pittsburgh khuyên: đến để giảng viên biết mình, sau này xin thư giới thiệu sẽ có ích.",
          "keys": [
            "giảng viên biết mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tulane and Buffalo suggest office hours for things like a grade question.",
          "sub": "Tulane và Buffalo gợi ý mang những chuyện như thắc mắc về điểm đến giờ tiếp sinh viên."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Booking required, or a clash with your class? Only then do you email to ask for an appointment.",
          "sub": "Phải đặt lịch trước, hoặc trùng giờ học của bạn? Lúc đó mới cần email xin hẹn.",
          "keys": [
            "email xin hẹn"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "text": "③ Thứ Bảy · Tiêu đề, câu mở",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-s",
            "t": "text",
            "text": "Appointment request:",
            "x": 7932,
            "y": 170,
            "size": 60,
            "at": "l2:Appointment",
            "color": "accent",
            "hl": [
              {
                "text": "Appointment request",
                "at": "l2:request"
              }
            ]
          },
          {
            "id": "e-s2",
            "t": "text",
            "text": "HIST 210 final project",
            "x": 7972,
            "y": 260,
            "size": 54,
            "at": "l3:HIST",
            "color": "accent"
          },
          {
            "id": "e-o1",
            "t": "text",
            "text": "I would like to meet with you",
            "x": 7932,
            "y": 370,
            "size": 48,
            "at": "l4:meet"
          },
          {
            "id": "e-o1b",
            "t": "text",
            "text": "to discuss my topic…",
            "x": 7972,
            "y": 435,
            "size": 48,
            "at": "l4:topic",
            "hl": [
              {
                "text": "discuss",
                "at": "l4:discuss"
              }
            ]
          },
          {
            "id": "e-o2",
            "t": "text",
            "text": "I would like to go over",
            "x": 7932,
            "y": 520,
            "size": 48,
            "at": "l5:go over",
            "hl": [
              {
                "text": "go over",
                "at": "l5:go over"
              }
            ]
          },
          {
            "id": "e-o2b",
            "t": "text",
            "text": "your feedback on my essay.",
            "x": 7972,
            "y": 585,
            "size": 48,
            "at": "l5:feedback"
          },
          {
            "id": "e-mail",
            "t": "illus",
            "name": "e-mail",
            "x": 9322,
            "y": 170,
            "size": 140,
            "at": "l2:subject"
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: UMass Boston Writing Center",
            "x": 7932,
            "y": 720,
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
          "say": "Stop three. Saturday. Thursday afternoons clash with Thảo's class, so she needs a proper request.",
          "sub": "Chặng ba. Thứ Bảy. Chiều thứ Năm Thảo trùng lớp, nên cần một thư xin hẹn tử tế."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "UMass Boston suggests a subject like Appointment request.",
          "sub": "UMass Boston gợi ý tiêu đề kiểu “Appointment request”, xin hẹn gặp.",
          "keys": [
            "Appointment request"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Add the course code: Appointment request, HIST two-ten final project.",
          "sub": "Thêm mã môn: “Appointment request: HIST 210 final project”."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The first sentence states the purpose. I would like to meet with you to discuss my topic for the final project.",
          "sub": "Câu đầu nói luôn mục đích: “I would like to meet with you to discuss my topic for the final project.”",
          "keys": [
            "mục đích"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Or: I would like to go over your feedback on my first essay.",
          "sub": "Hoặc: “I would like to go over your feedback on my first essay.”"
        }
      ],
      "ref": "p5,p6"
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
            "at": "l2",
            "fit": [
              "e-4"
            ],
            "zoom": 1.15,
            "ms": 600
          },
          {
            "at": "l2:end",
            "fit": "E",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "e-4",
            "t": "text",
            "text": "Ai · lớp nào · bàn gì · khi nào?",
            "x": 8832,
            "y": 380,
            "size": 52,
            "at": "l2:who",
            "color": "accent",
            "hl": [
              {
                "text": "khi nào?",
                "at": "l2:free"
              }
            ]
          },
          {
            "id": "e-sj",
            "t": "text",
            "text": "San José: đủ chi tiết",
            "x": 8832,
            "y": 470,
            "size": 44,
            "at": "l1:detail",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "San José State has a good exercise: write a meeting request with every detail the lecturer needs.",
          "sub": "San José State có một bài tập đáng làm: viết thư xin hẹn với đủ mọi chi tiết giảng viên cần.",
          "keys": [
            "đủ mọi chi tiết"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Self-check: does he know who you are, which class, what you'll discuss, and when you're free?",
          "sub": "Tự kiểm: đọc xong, thầy đã biết bạn là ai, học lớp nào, muốn bàn gì, rảnh lúc nào chưa?",
          "keys": [
            "rảnh lúc nào"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Meanwhile, meet Dũng, Thảo's classmate in the same History course. He needs a meeting too.",
          "sub": "Cùng lúc ấy, xin giới thiệu Dũng, bạn cùng khoá của Thảo, cùng môn HIST 210. Cậu cũng cần gặp thầy.",
          "keys": [
            "Dũng"
          ]
        }
      ],
      "ref": "p7,p14"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Rảnh lúc nào: viết một giờ, hay cả lịch tuần?",
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
          "say": "When you're free: one time, or your whole week?",
          "sub": "Rảnh lúc nào: viết một giờ, hay cả lịch tuần?"
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
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "Chủ nhật 21:00 · Dũng",
        "actors": [
          {
            "id": "dung",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "“whenever you are free”",
          "why": "Đẩy việc tìm giờ sang giảng viên; thầy phải hỏi lại, thêm lượt thư.",
          "rule": "Đưa ba lựa chọn, để thầy chỉ việc chọn"
        }
      },
      "lines": [
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Easy. Can we meet whenever you are free? Very polite!",
          "sub": "Dễ ợt. “Can we meet whenever you are free?” Lịch sự ghê!",
          "face": "happy",
          "pose": "explain",
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
          "say": "That hands the whole puzzle to him. Rewind!",
          "sub": "Câu đó đẩy cả việc tìm giờ sang thầy. Tua lại!",
          "phase": "redo",
          "keys": [
            "đẩy cả việc tìm giờ sang thầy"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Would Wednesday after two, Thursday after twelve, or Friday one to three work for you?",
          "sub": "Thầy có tiện chiều thứ Tư sau 2 giờ, thứ Năm sau 12 giờ, hoặc thứ Sáu từ 1 đến 3 giờ không ạ?",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Better. Now he only has to pick one.",
          "sub": "Thế mới được. Giờ thầy chỉ việc chọn một.",
          "phase": "redo",
          "keys": [
            "chỉ việc chọn một"
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
            "text": "④ Chủ nhật 21:00 · Khung giờ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-3",
            "t": "text",
            "text": "3 khung giờ · 3 ngày khác nhau",
            "x": 60,
            "y": 1255,
            "size": 50,
            "at": "l2:three",
            "hl": [
              {
                "text": "3 khung giờ",
                "at": "l2:three"
              }
            ]
          },
          {
            "id": "f-z",
            "t": "text",
            "text": "gặp trực tiếp hay Zoom",
            "x": 100,
            "y": 1330,
            "size": 46,
            "at": "l2:Zoom"
          },
          {
            "id": "f-c",
            "t": "text",
            "text": "I am not able to attend your",
            "x": 60,
            "y": 1420,
            "size": 46,
            "at": "l3:not able",
            "color": "accent"
          },
          {
            "id": "f-c2",
            "t": "text",
            "text": "office hours on Mondays…",
            "x": 100,
            "y": 1480,
            "size": 46,
            "at": "l3:Mondays",
            "color": "accent"
          },
          {
            "id": "f-w",
            "t": "text",
            "text": "Would any of these times work?",
            "x": 60,
            "y": 1560,
            "size": 46,
            "at": "l4:work",
            "color": "accent",
            "hl": [
              {
                "text": "work",
                "at": "l4:work"
              }
            ]
          },
          {
            "id": "f-t1",
            "t": "text",
            "text": "Wed 15 May, after 2 p.m.",
            "x": 960,
            "y": 1560,
            "size": 44,
            "at": "l5:Wednesday"
          },
          {
            "id": "f-t2",
            "t": "text",
            "text": "Thu 16 May, after 12 p.m.",
            "x": 960,
            "y": 1620,
            "size": 44,
            "at": "l5:Thursday"
          },
          {
            "id": "f-t3",
            "t": "text",
            "text": "Fri 17 May, 1–3 p.m.",
            "x": 960,
            "y": 1680,
            "size": 44,
            "at": "l5:Friday"
          },
          {
            "id": "f-p",
            "t": "text",
            "text": "in person or on Zoom",
            "x": 60,
            "y": 1650,
            "size": 44,
            "at": "l6:happy"
          },
          {
            "id": "f-cal",
            "t": "illus",
            "name": "spiral-calendar",
            "x": 1450,
            "y": 1260,
            "size": 140,
            "at": "l2:three"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: UMass Boston Writing Center",
            "x": 60,
            "y": 1810,
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
          "say": "Stop four. Sunday, nine p.m. Why does take two work?",
          "sub": "Chặng bốn. Chín giờ tối Chủ nhật. Vì sao bản viết lại hiệu quả?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "UMass Boston's sample gives three time slots, on three different days, in person or on Zoom.",
          "sub": "Thư mẫu của UMass Boston đưa ba khung giờ, ở ba ngày khác nhau, gặp trực tiếp hoặc qua Zoom.",
          "keys": [
            "ba khung giờ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Explain the clash: I am not able to attend your office hours on Mondays, because I have another class.",
          "sub": "Nói lý do trùng lịch: em không đến được giờ tiếp sinh viên thứ Hai vì trùng lớp khác."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then: would any of these times work for you?",
          "sub": "Rồi: “Would any of these times work for you?”",
          "keys": [
            "Would any of these times work for you?"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Wednesday the fifteenth after two. Thursday after twelve. Friday, one to three.",
          "sub": "Thứ Tư 15/5 sau 2 giờ. Thứ Năm 16/5 sau 12 giờ. Thứ Sáu 17/5 từ 1 đến 3 giờ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And: I am happy to meet in person or on Zoom.",
          "sub": "Và: “I am happy to meet in person or on Zoom.”"
        }
      ],
      "ref": "p8,p9"
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
            "at": "l1",
            "fit": [
              "f-tz"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "F",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "f-tz",
            "t": "text",
            "text": "Online, khác nước → ghi múi giờ",
            "x": 960,
            "y": 1750,
            "size": 44,
            "at": "l1:time zone",
            "color": "coral",
            "hl": [
              {
                "text": "múi giờ",
                "at": "l1:time zone"
              }
            ]
          },
          {
            "id": "f-ld",
            "t": "text",
            "text": "“2 p.m. London time”",
            "x": 1000,
            "y": 1805,
            "size": 40,
            "at": "l1:London"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Ba lựa chọn, thầy chỉ chọn",
            "x": 60,
            "y": 1730,
            "size": 50,
            "at": "l3:three choices",
            "color": "accent",
            "hl": [
              {
                "text": "thầy chỉ chọn",
                "at": "l3:pick"
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
          "say": "Meeting online with a lecturer in another country? Add the time zone, like two p.m. London time.",
          "sub": "Gặp trực tuyến với giảng viên ở nước khác? Ghi rõ múi giờ, như “2 p.m. London time”.",
          "keys": [
            "múi giờ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That's common sense, not a university rule. But it saves an hour of waiting for each other.",
          "sub": "Đó là kinh nghiệm chung, không phải quy định của trường nào, nhưng tránh cảnh chờ nhau lệch một tiếng."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Three choices, so he can simply pick one.",
          "sub": "Đưa ba lựa chọn, để thầy chỉ việc chọn.",
          "keys": [
            "Đưa ba lựa chọn"
          ]
        }
      ],
      "ref": "p10,p12"
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
            "at": "l2",
            "fit": [
              "g-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l5",
            "fit": "G",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "g-t",
            "t": "text",
            "text": "⑤ Chủ nhật 21:30 · Thư hoàn chỉnh",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2968,
            "y": 1210,
            "w": 640,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
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
            "at": "l1:email",
            "caption": "Chủ nhật 21:30 · thư của Dũng",
            "icon": "memo"
          },
          {
            "id": "g-c0",
            "t": "box",
            "x": 2028,
            "y": 1255,
            "w": 44,
            "h": 44,
            "at": "l2:subject",
            "stroke": 5
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1237,
            "size": 56,
            "at": "l2:subject+600",
            "color": "accent"
          },
          {
            "id": "g-l0",
            "t": "text",
            "text": "(1) Appointment request: HIST 210…",
            "x": 2093,
            "y": 1247,
            "size": 38,
            "at": "l2:subject+200"
          },
          {
            "id": "g-c1",
            "t": "box",
            "x": 2028,
            "y": 1335,
            "w": 44,
            "h": 44,
            "at": "l2:Dear",
            "stroke": 5
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1317,
            "size": 56,
            "at": "l2:Dear+600",
            "color": "accent"
          },
          {
            "id": "g-l1",
            "t": "text",
            "text": "(2) Dear Professor Evans,",
            "x": 2093,
            "y": 1327,
            "size": 38,
            "at": "l2:Dear+200"
          },
          {
            "id": "g-c2",
            "t": "box",
            "x": 2028,
            "y": 1415,
            "w": 44,
            "h": 44,
            "at": "l3:Dung Tran",
            "stroke": 5
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1397,
            "size": 56,
            "at": "l3:Dung Tran+600",
            "color": "accent"
          },
          {
            "id": "g-l2",
            "t": "text",
            "text": "(3) I am Dung Tran from…",
            "x": 2093,
            "y": 1407,
            "size": 38,
            "at": "l3:Dung Tran+200"
          },
          {
            "id": "g-c3",
            "t": "box",
            "x": 2028,
            "y": 1495,
            "w": 44,
            "h": 44,
            "at": "l3:two possible",
            "stroke": 5
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1477,
            "size": 56,
            "at": "l3:two possible+600",
            "color": "accent"
          },
          {
            "id": "g-l3",
            "t": "text",
            "text": "(4) to discuss two possible topics",
            "x": 2093,
            "y": 1487,
            "size": 38,
            "at": "l3:two possible+200"
          },
          {
            "id": "g-c4",
            "t": "box",
            "x": 2028,
            "y": 1575,
            "w": 44,
            "h": 44,
            "at": "l4:clash",
            "stroke": 5
          },
          {
            "id": "g-k4",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1557,
            "size": 56,
            "at": "l4:clash+600",
            "color": "accent"
          },
          {
            "id": "g-l4",
            "t": "text",
            "text": "(5) clash with my lab · Wed? Fri?",
            "x": 2093,
            "y": 1567,
            "size": 38,
            "at": "l4:clash+200"
          },
          {
            "id": "g-c5",
            "t": "box",
            "x": 2028,
            "y": 1655,
            "w": 44,
            "h": 44,
            "at": "l5:Thank you",
            "stroke": 5
          },
          {
            "id": "g-k5",
            "t": "text",
            "text": "✓",
            "x": 2032,
            "y": 1637,
            "size": 56,
            "at": "l5:Thank you+600",
            "color": "accent"
          },
          {
            "id": "g-l5",
            "t": "text",
            "text": "(6) Thank you… Student ID",
            "x": 2093,
            "y": 1647,
            "size": 38,
            "at": "l5:Thank you+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five. Sunday, nine thirty. Dũng's full email.",
          "sub": "Chặng năm. Chín rưỡi tối Chủ nhật. Bức thư hoàn chỉnh của Dũng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Step one, the subject. Step two, Dear Professor Evans.",
          "sub": "Bước một, tiêu đề. Bước hai, “Dear Professor Evans,”.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Three, I am Dung Tran from your Tuesday and Thursday class. Four, I'd like to discuss two possible topics.",
          "sub": "Ba: em là Dũng Trần, lớp thứ Ba và thứ Năm của thầy. Bốn: em muốn bàn hai đề tài có thể chọn."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Five, your office hours clash with my lab. Would Wednesday after two or Friday morning work?",
          "sub": "Năm: giờ tiếp sinh viên của thầy trùng giờ thí nghiệm của em. Chiều thứ Tư sau 2 giờ hay sáng thứ Sáu có tiện không ạ?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Six: Thank you for your time. Best regards, his name, student ID, and the course.",
          "sub": "Sáu: “Thank you for your time. Best regards,” rồi tên, mã sinh viên, mã môn."
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-k",
            "t": "text",
            "text": "Ai, lớp nào, bàn gì, khi nào",
            "x": 2928,
            "y": 1650,
            "size": 46,
            "at": "l1:who",
            "color": "accent",
            "hl": [
              {
                "text": "khi nào",
                "at": "l1:when"
              }
            ]
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "→ đủ bốn ý là đủ thư",
            "x": 2968,
            "y": 1715,
            "size": 44,
            "at": "l1:enough"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Who, which class, what, and when. Four points are enough for one email.",
          "sub": "Ai, lớp nào, bàn gì, khi nào: đủ bốn ý là đủ một email.",
          "keys": [
            "đủ bốn ý là đủ một email"
          ]
        }
      ],
      "ref": "p14"
    },
    {
      "id": "s15",
      "module": "BRK-03",
      "data": {
        "value": 8,
        "suffix": " câu",
        "label": "là cả bức thư xin gặp của Dũng",
        "illus": "memo"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Count the sentences.",
          "sub": "Đếm số câu nhé."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "About eight. That's the whole email.",
          "sub": "Khoảng tám câu. Cả bức thư chỉ có vậy.",
          "keys": [
            "Khoảng tám câu"
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-at",
            "t": "text",
            "text": "Kèm bản nháp → nói rõ",
            "x": 2028,
            "y": 1730,
            "size": 42,
            "at": "l2:draft",
            "hl": [
              {
                "text": "nói rõ",
                "at": "l2:mention"
              }
            ]
          },
          {
            "id": "g-src",
            "t": "text",
            "text": "Nguồn: University at Buffalo (CSE) · San José State Writing Center",
            "x": 2028,
            "y": 1810,
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
          "say": "Buffalo says keep it short, get to the point, and use please and thank you.",
          "sub": "Buffalo nhắc: giữ thư ngắn, đi thẳng vào việc, và dùng “please”, “thank you”.",
          "keys": [
            "đi thẳng vào việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Want him to see a draft first? Attach it, and mention it, as San José State suggests.",
          "sub": "Muốn thầy xem trước bản nháp? Đính kèm và nói rõ trong thư, như San José State gợi ý.",
          "keys": [
            "nói rõ trong thư"
          ]
        }
      ],
      "ref": "p15"
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
            "at": "l3",
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
            "text": "⑥ Thứ Hai · Xác nhận",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4936,
            "y": 1210,
            "w": 640,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "phone",
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "envelope"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "close",
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
            "at": "l1:reply",
            "caption": "Thứ Hai 12:00 · thư thầy Evans",
            "icon": "envelope"
          },
          {
            "id": "h-r",
            "t": "text",
            "text": "“Friday at 10 works.",
            "x": 3996,
            "y": 1260,
            "size": 58,
            "at": "l2:Friday",
            "color": "accent"
          },
          {
            "id": "h-r2",
            "t": "text",
            "text": "Room B204.”",
            "x": 4036,
            "y": 1345,
            "size": 58,
            "at": "l2:Room",
            "color": "accent"
          },
          {
            "id": "h-q1",
            "t": "text",
            "text": "A. Im lặng, có lịch rồi",
            "x": 3996,
            "y": 1450,
            "size": 48,
            "at": "l3:silent"
          },
          {
            "id": "h-q2",
            "t": "text",
            "text": "B. Gửi lại một câu",
            "x": 3996,
            "y": 1530,
            "size": 48,
            "at": "l3:send"
          },
          {
            "id": "h-q1x",
            "t": "strike",
            "over": "h-q1",
            "at": "l4:One line"
          },
          {
            "id": "h-q2r",
            "t": "ring",
            "around": [
              "h-q2"
            ],
            "color": "accent",
            "stroke": 8,
            "at": "l4:One line"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six. Monday, noon. A reply arrives.",
          "sub": "Chặng sáu. Mười hai giờ trưa thứ Hai. Thư trả lời đến."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Friday at ten works. Room B two-oh-four.",
          "sub": "“Friday at 10 works. Room B204.” Thứ Sáu 10 giờ, phòng B204."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Done, I have a meeting. Stay silent, or send one more line?",
          "sub": "Xong, có lịch rồi. Im lặng, hay gửi thêm một câu?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One line, repeating the time and room. Buffalo says always reply.",
          "sub": "Gửi một câu, nhắc lại giờ và phòng. Buffalo khuyên luôn hồi âm.",
          "keys": [
            "nhắc lại giờ và phòng"
          ]
        }
      ],
      "ref": "p16,p17"
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
            "id": "h-c",
            "t": "text",
            "text": "Thank you. I will see you on",
            "x": 3996,
            "y": 1630,
            "size": 44,
            "at": "l1:see you",
            "color": "accent"
          },
          {
            "id": "h-c2",
            "t": "text",
            "text": "Friday at 10 a.m. in Room B204.",
            "x": 4036,
            "y": 1690,
            "size": 44,
            "at": "l1:Room",
            "color": "accent",
            "hl": [
              {
                "text": "Room B204",
                "at": "l1:Room"
              }
            ]
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Nhận lịch → nhắc giờ, phòng",
            "x": 4896,
            "y": 1730,
            "size": 46,
            "at": "l2:time",
            "hl": [
              {
                "text": "nhắc giờ, phòng",
                "at": "l2:repeat"
              }
            ]
          },
          {
            "id": "h-rs",
            "t": "text",
            "text": "Would it be possible to reschedule?",
            "x": 3996,
            "y": 1780,
            "size": 40,
            "at": "l3:reschedule",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "Thank you. I will see you on Friday at ten a.m. in Room B two-oh-four.",
          "sub": "Em cảm ơn thầy. Em sẽ gặp thầy lúc 10 giờ sáng thứ Sáu tại phòng B204.",
          "face": "happy"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Now he knows you got it. And if you wrote the time wrong, he can fix it. Repeat time and room.",
          "sub": "Thầy biết bạn đã nhận và giữ lịch; ghi nhầm giờ thì thầy còn kịp sửa. Nhắc lại giờ và phòng.",
          "keys": [
            "còn kịp sửa"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Can't make it? Tell him early: I am very sorry, but would it be possible to reschedule?",
          "sub": "Không đến được? Báo càng sớm càng tốt: “I am very sorry… Would it be possible to reschedule?”",
          "keys": [
            "Báo càng sớm càng tốt"
          ]
        }
      ],
      "ref": "p17,p18,p19"
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
            "zoom": 1.3,
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
            "text": "⑦ Thứ Sáu 10:00 · Buổi gặp",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop seven"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6904,
            "y": 1210,
            "w": 640,
            "data": {
              "set": "office",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "hold",
                  "face": "happy"
                }
              ],
              "props": [
                "memo",
                "page-facing-up"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "medium",
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
            "at": "l1:Room",
            "caption": "Thứ Sáu 10:00 · phòng B204",
            "icon": "door"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Mang: câu hỏi viết sẵn",
            "x": 5964,
            "y": 1260,
            "size": 50,
            "at": "l2:questions",
            "hl": [
              {
                "text": "viết sẵn",
                "at": "l2:written"
              }
            ]
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "+ bài làm liên quan",
            "x": 6004,
            "y": 1335,
            "size": 46,
            "at": "l3:related"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Chuyện riêng → gặp riêng",
            "x": 5964,
            "y": 1425,
            "size": 50,
            "at": "l4:private",
            "color": "coral",
            "hl": [
              {
                "text": "gặp riêng",
                "at": "l4:private meeting"
              }
            ]
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "email có thể đến tay người khác",
            "x": 6004,
            "y": 1500,
            "size": 40,
            "at": "l4:wrong",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop seven. Friday, ten a.m., Room B two-oh-four. Dũng is right on time.",
          "sub": "Chặng bảy. Mười giờ sáng thứ Sáu, phòng B204. Dũng đến đúng giờ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I brought my two topics and my questions, all written down.",
          "sub": "Em mang theo hai đề tài và các câu hỏi, viết sẵn cả rồi ạ.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Written questions and related work. A short meeting that hits the target.",
          "sub": "Câu hỏi viết sẵn và bài làm liên quan: buổi gặp ngắn mà trúng.",
          "keys": [
            "ngắn mà trúng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Something private? San José State says arrange a private meeting. Emails can reach the wrong readers.",
          "sub": "Chuyện riêng tư? San José State khuyên sắp xếp gặp riêng, vì email có thể đến tay người không mong muốn.",
          "keys": [
            "gặp riêng"
          ]
        }
      ],
      "ref": "p20"
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
          }
        ],
        "items": [
          {
            "id": "i-ty",
            "t": "text",
            "text": "Thank you for meeting with me today.",
            "x": 5964,
            "y": 1610,
            "size": 42,
            "at": "l1:meeting",
            "color": "accent"
          },
          {
            "id": "i-ty2",
            "t": "text",
            "text": "Your advice on narrowing my topic",
            "x": 5964,
            "y": 1670,
            "size": 42,
            "at": "l1:narrowing",
            "color": "accent",
            "hl": [
              {
                "text": "narrowing my topic",
                "at": "l1:narrowing"
              }
            ]
          },
          {
            "id": "i-ty3",
            "t": "text",
            "text": "was very helpful.",
            "x": 6004,
            "y": 1730,
            "size": 42,
            "at": "l1:helpful",
            "color": "accent"
          },
          {
            "id": "i-k",
            "t": "text",
            "text": "Cảm ơn + một lời khuyên cụ thể",
            "x": 6864,
            "y": 1750,
            "size": 44,
            "at": "l2:specific",
            "hl": [
              {
                "text": "cụ thể",
                "at": "l2:specific"
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
          "say": "That evening, one short email: thank you for meeting with me today. Your advice on narrowing my topic was very helpful.",
          "sub": "Tối đó, một email ngắn: cảm ơn thầy đã gặp em hôm nay, lời khuyên thu hẹp đề tài rất có ích.",
          "keys": [
            "thu hẹp đề tài"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Tulane says thank lecturers whenever they help. Naming one specific tip shows you listened.",
          "sub": "Tulane nhắc cảm ơn mỗi khi giảng viên giúp. Nhắc một lời khuyên cụ thể cho thấy bạn đã lắng nghe.",
          "keys": [
            "một lời khuyên cụ thể"
          ]
        }
      ],
      "ref": "p21"
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
            "text": "Thứ Hai sau · 22:00",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:ten"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8752,
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
                "check-mark-button"
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
            "at": "l1:room",
            "caption": "Thứ Hai sau 22:00 · cùng căn phòng",
            "icon": "e-mail"
          },
          {
            "id": "j-4",
            "t": "text",
            "text": "4 lượt thư",
            "x": 7932,
            "y": 1260,
            "size": 80,
            "at": "l3:four",
            "color": "muted"
          },
          {
            "id": "j-4x",
            "t": "strike",
            "over": "j-4",
            "at": "l3:one"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "→ 1 lượt",
            "x": 8322,
            "y": 1260,
            "size": 80,
            "at": "l3:one",
            "color": "accent",
            "hl": [
              {
                "text": "1 lượt",
                "at": "l3:one"
              }
            ]
          },
          {
            "id": "jc-c0",
            "t": "box",
            "x": 7932,
            "y": 1520,
            "w": 44,
            "h": 44,
            "at": "l2:Appointment",
            "stroke": 5
          },
          {
            "id": "jc-k0",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1502,
            "size": 56,
            "at": "l2:Appointment+600",
            "color": "accent"
          },
          {
            "id": "jc-l0",
            "t": "text",
            "text": "Office hours trong đề cương",
            "x": 7997,
            "y": 1512,
            "size": 36,
            "at": "l2:Appointment+200"
          },
          {
            "id": "jc-c1",
            "t": "box",
            "x": 7932,
            "y": 1582,
            "w": 44,
            "h": 44,
            "at": "l2:request",
            "stroke": 5
          },
          {
            "id": "jc-k1",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1564,
            "size": 56,
            "at": "l2:request+600",
            "color": "accent"
          },
          {
            "id": "jc-l1",
            "t": "text",
            "text": "Appointment request + mã môn",
            "x": 7997,
            "y": 1574,
            "size": 36,
            "at": "l2:request+200"
          },
          {
            "id": "jc-c2",
            "t": "box",
            "x": 7932,
            "y": 1644,
            "w": 44,
            "h": 44,
            "at": "l2:discuss",
            "stroke": 5
          },
          {
            "id": "jc-k2",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1626,
            "size": 56,
            "at": "l2:discuss+600",
            "color": "accent"
          },
          {
            "id": "jc-l2",
            "t": "text",
            "text": "Một câu: muốn bàn gì",
            "x": 7997,
            "y": 1636,
            "size": 36,
            "at": "l2:discuss+200"
          },
          {
            "id": "jc-c3",
            "t": "box",
            "x": 7932,
            "y": 1706,
            "w": 44,
            "h": 44,
            "at": "l2:three",
            "stroke": 5
          },
          {
            "id": "jc-k3",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1688,
            "size": 56,
            "at": "l2:three+600",
            "color": "accent"
          },
          {
            "id": "jc-l3",
            "t": "text",
            "text": "Ba khung giờ, múi giờ",
            "x": 7997,
            "y": 1698,
            "size": 36,
            "at": "l2:three+200"
          },
          {
            "id": "jc-c4",
            "t": "box",
            "x": 7932,
            "y": 1768,
            "w": 44,
            "h": 44,
            "at": "l3:replies",
            "stroke": 5
          },
          {
            "id": "jc-k4",
            "t": "text",
            "text": "✓",
            "x": 7936,
            "y": 1750,
            "size": 56,
            "at": "l3:replies+600",
            "color": "accent"
          },
          {
            "id": "jc-l4",
            "t": "text",
            "text": "Xác nhận giờ, phòng",
            "x": 7997,
            "y": 1760,
            "size": 36,
            "at": "l3:replies+200"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "Lựa lời… vừa lòng nhau",
            "x": 7932,
            "y": 1410,
            "size": 52,
            "at": "l4:choose",
            "color": "accent",
            "hl": [
              {
                "text": "vừa lòng nhau",
                "at": "l4:both"
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
          "say": "Next Monday, ten p.m. Same room, same Thảo. She needs feedback on her outline.",
          "sub": "Thứ Hai tuần sau, mười giờ tối. Vẫn căn phòng ấy, vẫn Thảo. Lần này cần góp ý cho dàn ý."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Appointment request. Who I am, my class, what I want to discuss, and three time slots.",
          "sub": "Appointment request. Em là ai, lớp nào, muốn bàn gì, và ba khung giờ.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Professor Evans replies: Wednesday at two works. Four emails became one.",
          "sub": "Thầy Evans trả lời: “Wednesday at 2 works.” Bốn lượt thư thành một.",
          "keys": [
            "Bốn lượt thư thành một"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Choose your words to please both sides. Here, both sides save time.",
          "sub": "“Lựa lời mà nói cho vừa lòng nhau.” Ở đây, cả hai cùng đỡ mất thời gian.",
          "keys": [
            "cả hai cùng đỡ mất thời gian"
          ]
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s22",
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
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "F",
            "zoom": 0.8
          },
          {
            "at": "l4",
            "fit": "H",
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
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 5436,
            "y": 40,
            "at": "l2:syllabus"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 1500,
            "y": 1130,
            "at": "l3:slots"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 5436,
            "y": 1130,
            "at": "l4:confirm"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo; quy định mỗi trường, mỗi giảng viên một khác — xem đề cương. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1815,
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
          "say": "So, a good meeting request saves time for both of you. He picks a time and replies in one line.",
          "sub": "Tóm lại, một email xin gặp tốt tiết kiệm thời gian của cả hai: thầy chọn một giờ, trả lời một dòng.",
          "keys": [
            "tiết kiệm thời gian của cả hai"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Check the office hours in the syllabus first. Subject: Appointment request, plus the course code.",
          "sub": "Xem giờ tiếp sinh viên trong đề cương trước. Tiêu đề: Appointment request kèm mã môn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One purpose sentence, and two or three slots, with a time zone if online.",
          "sub": "Một câu nói mục đích, hai ba khung giờ, ghi múi giờ nếu gặp trực tuyến."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Then confirm the time and room, and say thank you afterwards.",
          "sub": "Rồi xác nhận giờ và phòng, và cảm ơn sau buổi gặp."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Now: find each course's office hours and put them in your calendar. Next: asking for an extension.",
          "sub": "Làm ngay: tìm giờ tiếp sinh viên của từng môn, ghi vào lịch. Bài sau: xin gia hạn nộp bài.",
          "keys": [
            "ghi vào lịch"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "p22,outro"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "Thao wrote can I meet you sometime, what happened next?",
        "options": [
          "They needed four more emails before they could agree on a time",
          "The professor booked a meeting at once at a time that suited her",
          "The professor refused to meet her because the email was too short"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "envelope",
        "why": "Email không nói muốn bàn gì và rảnh lúc nào. Hai bên phải trao đổi thêm nhiều lượt mới chốt được lịch."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Thao wrote can I meet you sometime, what happened next?",
          "sub": "Thảo viết “can I meet you sometime”, chuyện gì xảy ra sau đó?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "They needed four more emails before they could agree on a time.",
          "sub": "Bốn lượt thư nữa mới chốt được lịch."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Purpose and times in the first email. One round is enough.",
          "sub": "Mục đích và khung giờ ngay thư đầu. Một lượt là đủ."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[4]"
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
          "say": "Office hours in your calendar, three time slots ready. Then try the forty questions below.",
          "sub": "Giờ tiếp sinh viên vào lịch, ba khung giờ sẵn sàng. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144. Hook HOOK-24: vật neo con số “4 lượt thư” (p3: bốn lượt thư sau mới chốt lịch) → không phải thầy khó, thư thiếu. Dòng thời gian: HAI TUẦN chốt đề tài HIST 210 (Thứ Hai 22:00 Thảo “can I meet you sometime?” → T5 bốn lượt thư → T6 10:00 Lan chỉ office hours → T7 tiêu đề, câu mở → CN 21:00 “Khoan đã!” Dũng “whenever you are free” → khung giờ → CN 21:30 thư hoàn chỉnh của Dũng → T2 thầy Evans “Friday at 10 works. Room B204.”, xác nhận → T6 10:00 buổi gặp, thư cảm ơn → Thứ Hai sau 22:00 khép vòng: 4 lượt → 1). Nhân vật: Thảo, Lan, Dũng; thầy Evans chỉ qua thư. Tục ngữ: “Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau”. Cảnh ngắt nhịp: BRK-08, BRK-07, BRK-03 (8 câu). Câu đố questions[4].",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
