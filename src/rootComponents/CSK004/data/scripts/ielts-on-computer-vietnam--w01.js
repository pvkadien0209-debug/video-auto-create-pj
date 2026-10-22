// ielts-on-computer-vietnam--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-on-computer-vietnam--w01",
  "hook": "HOOK-23",
  "unit": {
    "audience": "ielts-first-time-takers",
    "slug": "ielts-on-computer-vietnam",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Thi IELTS trên máy tính ở Việt Nam khác gì và cần làm quen gì?",
    "series": "IELTS lần đầu không bỡ ngỡ — cho học sinh, sinh viên hiểu bài thi, chọn loại thi và đăng ký đúng"
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
            "fit": [
              "a-w"
            ],
            "move": "cut",
            "zoom": 1.6
          },
          {
            "at": "l2",
            "fit": "A",
            "ms": 1200
          }
        ],
        "items": [
          {
            "id": "a-w",
            "t": "illus",
            "name": "watch",
            "x": 90,
            "y": 110,
            "size": 300,
            "at": 0
          },
          {
            "id": "a-8",
            "t": "text",
            "text": "8:00",
            "x": 430,
            "y": 150,
            "size": 120,
            "at": "l1:Eight",
            "color": "accent"
          },
          {
            "id": "a-60",
            "t": "text",
            "text": "đếm ngược 60 phút",
            "x": 430,
            "y": 310,
            "size": 52,
            "at": "l1:sixty",
            "hl": [
              {
                "text": "60 phút",
                "at": "l1:sixty"
              }
            ]
          },
          {
            "id": "a-q",
            "t": "text",
            "text": "Của ai? Lát nữa quay lại…",
            "x": 90,
            "y": 480,
            "size": 52,
            "at": "l2:comes back",
            "color": "coral"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A smartwatch. Eight a.m. A countdown set for sixty minutes.",
          "sub": "Một chiếc đồng hồ thông minh. Tám giờ sáng. Đặt đếm ngược 60 phút.",
          "keys": [
            "đồng hồ thông minh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "It belongs to someone very organised. Remember this watch. It comes back later.",
          "sub": "Nó thuộc về một người rất ngăn nắp. Nhớ chiếc đồng hồ này, lát nữa nó quay lại."
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "tich-tac-dai",
          "to": "l1"
        }
      ],
      "ref": "p18"
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
            "y": 110,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "hold"
                }
              ],
              "props": [
                "laptop",
                "watch"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
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
            "caption": "Thứ Bảy 8:00 · nhà Thảo",
            "icon": "laptop"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Trăm hay không bằng tay quen”",
            "x": 60,
            "y": 640,
            "size": 54,
            "at": "l4:practised",
            "color": "accent",
            "hl": [
              {
                "text": "tay quen",
                "at": "l4:practised hand"
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
          "say": "Meet Lan, from the weekend IELTS group. She never studies without her watch.",
          "sub": "Đây là Lan, bạn trong nhóm tự học IELTS cuối tuần. Lan chưa bao giờ học mà thiếu đồng hồ.",
          "keys": [
            "thiếu đồng hồ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "And Dũng, second year student, first time IELTS taker, typing English with two fingers.",
          "sub": "Còn đây là Dũng, sinh viên năm hai, lần đầu thi IELTS, gõ tiếng Anh bằng hai ngón.",
          "keys": [
            "hai ngón"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Seniors talk about paper tests. Videos talk about computers. What will our day look like?",
          "sub": "Anh chị khoá trên kể thi giấy, video trên mạng nói thi máy. Ngày thi của tụi mình sẽ ra sao?",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Today they practise on screen at Thảo's place. The elders say: a hundred talents lose to a practised hand.",
          "sub": "Hôm nay hai bạn tập thi máy ở nhà Thảo. Ông bà dặn: “Trăm hay không bằng tay quen.”",
          "keys": [
            "Trăm hay không bằng tay quen"
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
            "text": "Thi máy: khác gì, tập gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:practise",
            "hl": [
              {
                "text": "tập gì",
                "at": "l1:practise"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: học đề mới",
            "x": 2028,
            "y": 190,
            "size": 56,
            "at": "l2:new exam",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:Same"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Mà là: tập tay",
            "x": 2028,
            "y": 290,
            "size": 64,
            "at": "l2:hands",
            "color": "accent",
            "hl": [
              {
                "text": "tập tay",
                "at": "l2:hands"
              }
            ]
          },
          {
            "id": "b-m",
            "t": "illus",
            "name": "computer-mouse",
            "x": 2038,
            "y": 420,
            "size": 120,
            "at": "l2:mouse"
          },
          {
            "id": "b-k",
            "t": "illus",
            "name": "keyboard",
            "x": 2228,
            "y": 420,
            "size": 120,
            "at": "l2:keyboard"
          },
          {
            "id": "b-s",
            "t": "illus",
            "name": "desktop-computer",
            "x": 2418,
            "y": 420,
            "size": 120,
            "at": "l2:screen"
          },
          {
            "id": "b-7",
            "t": "text",
            "text": "Một sáng thứ Bảy, bảy chặng",
            "x": 2868,
            "y": 300,
            "size": 52,
            "at": "l3:seven",
            "hl": [
              {
                "text": "bảy chặng",
                "at": "l3:seven"
              }
            ]
          },
          {
            "id": "b-cal",
            "t": "illus",
            "name": "spiral-calendar",
            "x": 3068,
            "y": 420,
            "size": 160,
            "at": "l3:Saturday"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So how does IELTS on computer work in Vietnam, and what should you practise?",
          "sub": "Vậy thi IELTS trên máy ở Việt Nam diễn ra thế nào, và cần tập gì?",
          "keys": [
            "cần tập gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not a new exam. Same test, new hands: mouse, keyboard, screen.",
          "sub": "Không phải học đề mới, mà là tập tay: chuột, bàn phím, màn hình.",
          "keys": [
            "tập tay"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "One Saturday morning, seven stops.",
          "sub": "Một sáng thứ Bảy, bảy chặng."
        }
      ],
      "ref": "intro,p3"
    },
    {
      "id": "s03",
      "module": "BRK-06",
      "data": {
        "title": "Tay bạn sẽ ở đâu?",
        "items": [
          {
            "illus": "headphone",
            "text": "Tai nghe"
          },
          {
            "illus": "computer-mouse",
            "text": "Chuột phải"
          },
          {
            "illus": "keyboard",
            "text": "Bàn phím"
          },
          {
            "illus": "speaking-head",
            "text": "Giám khảo"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Headphones, right clicks, keyboard, an examiner.",
          "sub": "Tai nghe, chuột phải, bàn phím, giám khảo."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Where will your hands be on test day?",
          "sub": "Ngày thi, tay bạn sẽ ở đâu?",
          "keys": [
            "tay bạn sẽ ở đâu"
          ]
        }
      ],
      "ref": "p5,p7,p10,p15"
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
            "text": "① 8:15 · Vì sao chỉ thi máy?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-d",
            "t": "text",
            "text": "07/01/2025: thông báo",
            "x": 3996,
            "y": 170,
            "size": 48,
            "at": "l2:January"
          },
          {
            "id": "c-d2",
            "t": "text",
            "text": "Sau 29/3/2025 → thi máy",
            "x": 3996,
            "y": 250,
            "size": 52,
            "at": "l2:computer",
            "color": "coral",
            "hl": [
              {
                "text": "thi máy",
                "at": "l2:computer"
              }
            ]
          },
          {
            "id": "c-r",
            "t": "text",
            "text": "nhanh · gọn · ngày nào cũng thi",
            "x": 3996,
            "y": 340,
            "size": 44,
            "at": "l3:faster"
          },
          {
            "id": "c-2d",
            "t": "text",
            "text": "kết quả ~2 ngày",
            "x": 3996,
            "y": 410,
            "size": 48,
            "at": "l3:two days",
            "color": "accent",
            "hl": [
              {
                "text": "~2 ngày",
                "at": "l3:two days"
              }
            ]
          },
          {
            "id": "c-o",
            "t": "text",
            "text": "Đã đăng ký giấy: 3 lựa chọn",
            "x": 3996,
            "y": 490,
            "size": 44,
            "at": "l4:booked"
          },
          {
            "id": "c-o2",
            "t": "text",
            "text": "đổi sang máy · ngày sớm · hoàn phí",
            "x": 4036,
            "y": 555,
            "size": 36,
            "at": "l4:refund",
            "color": "muted"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: British Council Việt Nam, thông cáo 07/01/2025",
            "x": 3996,
            "y": 725,
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
          "say": "Stop one, eight fifteen. Why only computer now?",
          "sub": "Chặng một, tám giờ mười lăm. Vì sao giờ chỉ còn thi máy?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "On January seventh, twenty twenty five, British Council Vietnam announced: after March twenty ninth, every IELTS goes computer.",
          "sub": "Ngày 07/01/2025, British Council Việt Nam thông báo: từ sau 29/3/2025, mọi bài IELTS chuyển hẳn sang thi máy.",
          "keys": [
            "chuyển hẳn sang thi máy"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The reasons: faster, simpler, a test any day of the week, results in about two days.",
          "sub": "Lý do nêu ra: nhanh hơn, gọn hơn, thi được bất kỳ ngày nào trong tuần, kết quả khoảng 2 ngày.",
          "keys": [
            "khoảng 2 ngày"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Those booked on later paper dates could switch free to computer, move free to an earlier paper date, or get a full refund.",
          "sub": "Ai đã đăng ký thi giấy sau mốc ấy được chọn: chuyển miễn phí sang thi máy, sang ngày thi giấy sớm hơn, hoặc nhận lại toàn bộ lệ phí."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Booking now? Computer is the only option.",
          "sub": "Đăng ký từ bây giờ? Chỉ còn thi máy.",
          "keys": [
            "Chỉ còn thi máy"
          ]
        }
      ],
      "ref": "p1,p2"
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
            "at": "l1",
            "fit": [
              "c-v"
            ],
            "zoom": 1.35,
            "ms": 700
          },
          {
            "at": "l2",
            "fit": "C",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4836,
            "y": 150,
            "w": 760,
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
                "desktop-computer",
                "page-facing-up"
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
            "at": 0,
            "caption": "8:20 · Dũng nghi ngờ",
            "icon": "red-question-mark"
          },
          {
            "id": "c-m",
            "t": "text",
            "text": "“Đề máy khó hơn?”",
            "x": 4936,
            "y": 690,
            "size": 46,
            "at": "l1:harder",
            "color": "muted"
          },
          {
            "id": "c-mx",
            "t": "strike",
            "over": "c-m",
            "at": "l2:identical"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Đề không đổi, đổi cách làm",
            "x": 3996,
            "y": 630,
            "size": 50,
            "at": "l4:Same test",
            "color": "accent",
            "hl": [
              {
                "text": "đổi cách làm",
                "at": "l4:new way"
              }
            ]
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "So the computer test must be a different, harder exam, right?",
          "sub": "Vậy đề thi máy chắc khác, khó hơn đề giấy, đúng không?",
          "face": "thinking"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "British Council says computer and paper are identical in all four skills.",
          "sub": "British Council viết: thi máy và thi giấy giống hệt nhau ở cả bốn kỹ năng.",
          "keys": [
            "giống hệt nhau"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "IDP Vietnam adds: same content, structure, question types, scoring and security.",
          "sub": "IDP Việt Nam ghi thêm: nội dung, cấu trúc, dạng câu hỏi, cách chấm, bảo mật đều giữ nguyên."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "What changes is how you answer: mouse, keyboard, screen. Same test, new way.",
          "sub": "Thứ thay đổi là cách làm bài: chuột, bàn phím, màn hình. Đề không đổi, chỉ đổi cách làm bài.",
          "keys": [
            "chỉ đổi cách làm bài"
          ]
        }
      ],
      "ref": "p3,p4"
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
            "at": "l4",
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
            "text": "② 8:30 · Nghe",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6804,
            "y": 150,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "think",
                  "face": "surprised"
                },
                {
                  "id": "lan",
                  "side": "right"
                }
              ],
              "props": [
                "headphone",
                "laptop"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Listening",
            "caption": "8:30 · tai nghe đã đeo",
            "icon": "headphone"
          },
          {
            "id": "d-hp",
            "t": "illus",
            "name": "headphone",
            "x": 5964,
            "y": 160,
            "size": 100,
            "at": "l2:headphones"
          },
          {
            "id": "d-hpt",
            "t": "text",
            "text": "tai nghe chống ồn",
            "x": 6084,
            "y": 180,
            "size": 46,
            "at": "l2:headphones+200"
          },
          {
            "id": "d-ty",
            "t": "text",
            "text": "gõ đáp án vào ô",
            "x": 5964,
            "y": 290,
            "size": 52,
            "at": "l2:typed",
            "hl": [
              {
                "text": "gõ đáp án",
                "at": "l2:typed"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "3 phút soát cuối phần",
            "x": 5964,
            "y": 380,
            "size": 52,
            "at": "l3:three",
            "color": "accent",
            "hl": [
              {
                "text": "3 phút",
                "at": "l3:three"
              }
            ]
          },
          {
            "id": "d-p",
            "t": "text",
            "text": "Tập vừa nghe vừa gõ",
            "x": 5964,
            "y": 480,
            "size": 52,
            "at": "l5:practise",
            "color": "accent",
            "hl": [
              {
                "text": "vừa nghe vừa gõ",
                "at": "l5:together"
              }
            ]
          },
          {
            "id": "d-c",
            "t": "text",
            "text": "ô trống · thiếu chữ · sai chữ",
            "x": 5964,
            "y": 570,
            "size": 44,
            "at": "l6:empty",
            "color": "muted"
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: IDP Việt Nam — IELTS trên máy tính (cập nhật 18/09/2026)",
            "x": 5964,
            "y": 725,
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
          "say": "Stop two, eight thirty. Listening: about thirty minutes.",
          "sub": "Chặng hai, tám rưỡi. Phần Nghe: khoảng 30 phút."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IDP says: noise cancelling headphones from the centre, answers typed straight into boxes on screen.",
          "sub": "Theo IDP: đeo tai nghe chống ồn của điểm thi, gõ đáp án thẳng vào ô trên màn hình.",
          "keys": [
            "gõ đáp án"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And three minutes at the end to check your answers.",
          "sub": "Cuối phần Nghe có 3 phút để soát lại đáp án.",
          "keys": [
            "3 phút"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "Listen and type at once? My fingers are still looking for the letter T!",
          "sub": "Vừa nghe vừa gõ? Ngón tay em còn đang đi tìm chữ T!",
          "face": "surprised"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So practise listening and typing together, especially gap fills.",
          "sub": "Vậy hãy tập vừa nghe vừa gõ, nhất là câu điền từ.",
          "keys": [
            "vừa nghe vừa gõ"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "And use those three minutes: empty boxes, missing letters, typos.",
          "sub": "Và dùng 3 phút ấy: soát ô còn trống, từ gõ vội thiếu chữ, sai chữ."
        }
      ],
      "ref": "p5,p6"
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
            "text": "③ 9:10 · Đọc trên màn hình",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three"
          },
          {
            "id": "e-sc",
            "t": "box",
            "x": 7932,
            "y": 160,
            "w": 760,
            "h": 300,
            "at": "l1:split",
            "stroke": 5
          },
          {
            "id": "e-mid",
            "t": "line",
            "pts": [
              [
                8312,
                170
              ],
              [
                8312,
                450
              ]
            ],
            "at": "l1:split+300"
          },
          {
            "id": "e-l",
            "t": "text",
            "text": "Bài đọc",
            "x": 7982,
            "y": 270,
            "size": 50,
            "at": "l2:Passage"
          },
          {
            "id": "e-r",
            "t": "text",
            "text": "Câu hỏi",
            "x": 8372,
            "y": 270,
            "size": 50,
            "at": "l2:questions"
          },
          {
            "id": "e-hl",
            "t": "text",
            "text": "bôi đen → chuột phải",
            "x": 7932,
            "y": 490,
            "size": 48,
            "at": "l2:right click",
            "hl": [
              {
                "text": "chuột phải",
                "at": "l2:right click"
              }
            ]
          },
          {
            "id": "e-dd",
            "t": "text",
            "text": "nối đáp án: kéo thả",
            "x": 7932,
            "y": 570,
            "size": 48,
            "at": "l3:Drag",
            "color": "accent",
            "hl": [
              {
                "text": "kéo thả",
                "at": "l3:Drag and drop"
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
          "say": "Stop three, ten past nine. Reading: sixty minutes, on a split screen.",
          "sub": "Chặng ba, chín giờ mười. Phần Đọc: 60 phút, màn hình chia đôi."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Passage on one side, questions on the other. Select words, right click, highlight or add a note.",
          "sub": "Một bên bài đọc, một bên câu hỏi. Bôi đen chữ, bấm chuột phải để tô sáng hoặc ghi chú.",
          "keys": [
            "bấm chuột phải"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Matching questions? Drag and drop.",
          "sub": "Câu nối đáp án? Kéo và thả.",
          "keys": [
            "Kéo và thả"
          ]
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
            "at": "l2",
            "fit": [
              "e-v"
            ],
            "zoom": 1.3,
            "ms": 700
          },
          {
            "at": "l6",
            "fit": "E",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "e-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 150,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "center",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "laptop",
                "computer-mouse"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l6",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Lan",
            "caption": "9:30 · Lan làm mẫu",
            "icon": "computer-mouse"
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "1 · từ khoá",
            "x": 8872,
            "y": 690,
            "size": 40,
            "at": "l2:One"
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "2 · tô sáng",
            "x": 9122,
            "y": 690,
            "size": 40,
            "at": "l3:Two"
          },
          {
            "id": "e-3",
            "t": "text",
            "text": "3 · ghi chú",
            "x": 8872,
            "y": 735,
            "size": 34,
            "at": "l4:Three"
          },
          {
            "id": "e-4",
            "t": "text",
            "text": "4 · kéo thả",
            "x": 9122,
            "y": 735,
            "size": 34,
            "at": "l5:Four"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Tay quen chuột, mắt cho chữ",
            "x": 7932,
            "y": 660,
            "size": 48,
            "at": "l6:Train",
            "color": "accent",
            "hl": [
              {
                "text": "Tay quen chuột",
                "at": "l6:hands"
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
          "say": "Lan shows how she practises, step by step.",
          "sub": "Lan làm mẫu cách tập, từng bước."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "One: read the question on the right, spot the keywords.",
          "sub": "Một: đọc câu hỏi bên phải, tìm từ khoá.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Two: find them in the passage on the left. Select, right click, highlight.",
          "sub": "Hai: tìm từ khoá ở bài đọc bên trái. Bôi đen, chuột phải, tô sáng."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "Three: unsure? A short note right beside that paragraph.",
          "sub": "Ba: câu còn phân vân thì thêm ghi chú ngắn cạnh đoạn đó."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "lan",
          "say": "Four: for headings, drag each one into place.",
          "sub": "Bốn: câu nối tiêu đề thì kéo từng tiêu đề thả vào đúng chỗ."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "After a few rounds, no more fumbling. Train your hands on the mouse, keep your eyes on the words.",
          "sub": "Vài lần là hết lúng túng. Tập tay quen chuột, để mắt dành cho chữ.",
          "keys": [
            "Tập tay quen chuột"
          ]
        }
      ],
      "ref": "p8,p9"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Gõ bằng hai ngón, Viết có kịp?",
        "illus": "keyboard"
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
          "say": "Two finger typing, sixty minutes, two tasks?",
          "sub": "Gõ bằng hai ngón, 60 phút, hai bài?",
          "keys": [
            "Gõ bằng hai ngón"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p12"
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
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ 10:15 · Viết: gõ hay tay?",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-kb",
            "t": "illus",
            "name": "keyboard",
            "x": 60,
            "y": 1250,
            "size": 100,
            "at": "l1:keyboard"
          },
          {
            "id": "f-kbt",
            "t": "text",
            "text": "60 phút, gõ phím",
            "x": 180,
            "y": 1270,
            "size": 48,
            "at": "l1:keyboard+200"
          },
          {
            "id": "f-tool",
            "t": "text",
            "text": "đồng hồ đếm ngược · đếm từ",
            "x": 60,
            "y": 1370,
            "size": 44,
            "at": "l2:countdown",
            "hl": [
              {
                "text": "đếm từ",
                "at": "l2:word counter"
              }
            ]
          },
          {
            "id": "f-cp",
            "t": "text",
            "text": "được sửa, chép, dán",
            "x": 60,
            "y": 1440,
            "size": 44,
            "at": "l2:copy"
          },
          {
            "id": "f-no",
            "t": "text",
            "text": "không sửa chính tả, ngữ pháp",
            "x": 60,
            "y": 1510,
            "size": 44,
            "at": "l3:spelling",
            "color": "coral",
            "hl": [
              {
                "text": "không sửa chính tả",
                "at": "l3:no spelling"
              }
            ]
          },
          {
            "id": "f-pp",
            "t": "text",
            "text": "IDP: Viết trên giấy",
            "x": 900,
            "y": 1260,
            "size": 56,
            "at": "l4:paper",
            "color": "accent",
            "hl": [
              {
                "text": "Viết trên giấy",
                "at": "l4:writing on paper"
              }
            ]
          },
          {
            "id": "f-pp2",
            "t": "text",
            "text": "Nghe, Đọc vẫn trên máy",
            "x": 900,
            "y": 1350,
            "size": 44,
            "at": "l4:listening"
          },
          {
            "id": "f-ask",
            "t": "text",
            "text": "→ hỏi điểm thi khi đăng ký",
            "x": 900,
            "y": 1430,
            "size": 44,
            "at": "l5:Ask"
          },
          {
            "id": "f-src",
            "t": "text",
            "text": "Nguồn: IDP Việt Nam — IELTS trên máy tính, lựa chọn Viết trên giấy",
            "x": 60,
            "y": 1815,
            "size": 28,
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
          "say": "Stop four, quarter past ten. Writing: sixty minutes, on the keyboard.",
          "sub": "Chặng bốn, mười giờ mười lăm. Phần Viết: 60 phút, gõ bằng bàn phím."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A countdown clock and an automatic word counter. You can edit, copy and paste your own text.",
          "sub": "Có đồng hồ đếm ngược và bộ đếm từ tự động. Được sửa, sao chép, dán trong bài của mình.",
          "keys": [
            "bộ đếm từ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But no spelling or grammar checker comes to save you.",
          "sub": "Nhưng không có công cụ sửa chính tả hay ngữ pháp nào cứu bạn.",
          "keys": [
            "không có công cụ sửa chính tả"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "IDP also offers writing on paper: listening and reading on screen, writing by hand on the answer sheet.",
          "sub": "IDP còn có lựa chọn Viết trên giấy: Nghe, Đọc vẫn trên máy, riêng Viết làm bằng tay trên phiếu trả lời.",
          "keys": [
            "Viết trên giấy"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Want it? Ask if your centre offers it when you register.",
          "sub": "Muốn chọn? Hỏi rõ điểm thi có tổ chức không khi đăng ký."
        }
      ],
      "ref": "p10,p11"
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
            "at": "a1",
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
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-03",
            "x": 900,
            "y": 1510,
            "w": 520,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "dung"
                }
              ],
              "left": {
                "label": "Cách A: gõ, không tập",
                "ok": false
              },
              "right": {
                "label": "Cách B: thử cả hai",
                "ok": true
              }
            },
            "at": "l1:versions",
            "caption": "Cùng một bài Viết",
            "icon": "keyboard"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "A: hết giờ, bài 2 dang dở",
            "x": 60,
            "y": 1590,
            "size": 44,
            "at": "a2:unfinished",
            "color": "coral"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "B: bấm giờ thử máy và giấy",
            "x": 60,
            "y": 1660,
            "size": 44,
            "at": "b1:time",
            "color": "accent"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Thử cả hai, chọn tay nhanh",
            "x": 60,
            "y": 1740,
            "size": 48,
            "at": "l4:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Thử cả hai",
                "at": "l4:try both"
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
          "say": "Dũng types Vietnamese fast, English slowly. Two versions.",
          "sub": "Dũng gõ tiếng Việt nhanh, tiếng Anh còn chậm. Hai phiên bản."
        },
        {
          "id": "a1",
          "lang": "en",
          "who": "dung",
          "say": "Computer it is. No practice needed!",
          "sub": "Gõ máy luôn. Khỏi tập!",
          "phase": "a",
          "face": "happy"
        },
        {
          "id": "a2",
          "lang": "en",
          "who": "dung",
          "say": "Thinking and hunting for keys. Time's up, task two unfinished!",
          "sub": "Vừa nghĩ ý vừa dò phím. Hết giờ, bài hai còn dang dở!",
          "phase": "a",
          "face": "sad"
        },
        {
          "id": "b1",
          "lang": "en",
          "who": "dung",
          "say": "Before booking, I time one essay on screen and one on paper.",
          "sub": "Trước khi đăng ký, em bấm giờ viết thử một bài trên máy, một bài trên giấy.",
          "phase": "b",
          "face": "thinking"
        },
        {
          "id": "b2",
          "lang": "en",
          "who": "dung",
          "say": "Paper is faster, so I ask the centre. No paper option? Two weeks of daily typing.",
          "sub": "Viết tay kịp hơn, em hỏi điểm thi. Không có thì hai tuần tập gõ mỗi ngày.",
          "phase": "b",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: try both first, then choose what your hands do faster.",
          "sub": "Rút ra: thử cả hai cách trước, chọn cách tay mình nhanh hơn.",
          "keys": [
            "thử cả hai cách trước"
          ]
        }
      ],
      "ref": "p12,p13"
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
            "at": "l3",
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
            "id": "g-t",
            "t": "text",
            "text": "⑤ 11:20 · Nói: với người",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 2868,
            "y": 1240,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "thao",
                  "side": "left",
                  "enter": "pop",
                  "at": "l2",
                  "pose": "explain"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "hold"
                }
              ],
              "props": [
                "speaking-head",
                "stopwatch"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l2:Thảo",
            "caption": "11:20 · Thảo làm giám khảo",
            "icon": "speaking-head"
          },
          {
            "id": "g-all",
            "t": "text",
            "text": "11–14 phút · 3 phần",
            "x": 2028,
            "y": 1260,
            "size": 52,
            "at": "l4:eleven",
            "color": "accent"
          },
          {
            "id": "g-p1",
            "t": "text",
            "text": "Phần 1: ~4–5 phút",
            "x": 2028,
            "y": 1345,
            "size": 44,
            "at": "l4:Part one"
          },
          {
            "id": "g-p2",
            "t": "text",
            "text": "Phần 2: 1′ chuẩn bị · nói 2′",
            "x": 2028,
            "y": 1415,
            "size": 44,
            "at": "l3:Part two",
            "hl": [
              {
                "text": "1′ chuẩn bị",
                "at": "l3:one minute"
              }
            ]
          },
          {
            "id": "g-p3",
            "t": "text",
            "text": "Phần 3: ~4–5 phút",
            "x": 2028,
            "y": 1485,
            "size": 44,
            "at": "l4:part three"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop five, eleven twenty. Speaking. Is it on the computer?",
          "sub": "Chặng năm, mười một giờ hai mươi. Phần Nói. Có làm trên máy không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No. Meet Thảo, Dũng's cousin, playing examiner today.",
          "sub": "Không. Đây là Thảo, chị họ Dũng, hôm nay đóng vai giám khảo.",
          "keys": [
            "đóng vai giám khảo"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Part two. You have one minute to prepare, then talk for up to two minutes.",
          "sub": "Phần 2. Em có 1 phút chuẩn bị, rồi nói tối đa 2 phút.",
          "face": "neutral"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Speaking: eleven to fourteen minutes, three parts. Part one and part three, about four to five minutes each.",
          "sub": "Phần Nói: 11 đến 14 phút, ba phần. Phần 1 và Phần 3 mỗi phần khoảng 4 đến 5 phút."
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p14"
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
          }
        ],
        "items": [
          {
            "id": "g-f",
            "t": "text",
            "text": "Trực tiếp: Hà Nội, TP.HCM, Đà Nẵng",
            "x": 2028,
            "y": 1570,
            "size": 42,
            "at": "l1:Face to face"
          },
          {
            "id": "g-vd",
            "t": "text",
            "text": "Qua video: vẫn đến điểm thi",
            "x": 2028,
            "y": 1635,
            "size": 46,
            "at": "l2:video",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn đến điểm thi",
                "at": "l2:still go"
              }
            ]
          },
          {
            "id": "g-no",
            "t": "text",
            "text": "Không thi ở nhà · không gõ",
            "x": 2028,
            "y": 1710,
            "size": 46,
            "at": "l3:home",
            "color": "coral"
          },
          {
            "id": "g-em",
            "t": "text",
            "text": "Lịch Nói: đọc kỹ email",
            "x": 2868,
            "y": 1780,
            "size": 46,
            "at": "l5:email",
            "hl": [
              {
                "text": "email",
                "at": "l5:email"
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
          "say": "Two ways to meet the examiner. Face to face: IDP lists Hanoi, and some centres in Ho Chi Minh City and Da Nang.",
          "sub": "Hai cách gặp giám khảo. Trực tiếp: IDP ghi có ở Hà Nội, một số điểm ở TP.HCM và Đà Nẵng."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "By video: you still go to the centre, but talk through a screen.",
          "sub": "Qua video: vẫn đến điểm thi, nhưng trò chuyện qua màn hình.",
          "keys": [
            "vẫn đến điểm thi"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No speaking from home, no typed answers.",
          "sub": "Không thi Nói tại nhà, không gõ câu trả lời."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Speaking may be on another day. British Council says up to a week before or after.",
          "sub": "Lịch Nói có thể khác ngày. British Council ghi sớm hay muộn tối đa một tuần."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "IDP says some centres put it a day before. So read your confirmation email.",
          "sub": "IDP ghi một số điểm xếp Nói trước một ngày. Vậy hãy đọc kỹ email xác nhận.",
          "keys": [
            "đọc kỹ email xác nhận"
          ]
        }
      ],
      "ref": "p15"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ 11:45 · Mang gì vào phòng?",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-no",
            "t": "text",
            "text": "Không cần máy, tai nghe",
            "x": 3996,
            "y": 1260,
            "size": 46,
            "at": "l2:laptop"
          },
          {
            "id": "h-pp",
            "t": "text",
            "text": "phát giấy nháp, bút chì",
            "x": 3996,
            "y": 1335,
            "size": 46,
            "at": "l2:scratch",
            "hl": [
              {
                "text": "giấy nháp, bút chì",
                "at": "l2:pencil"
              }
            ]
          },
          {
            "id": "h-help",
            "t": "text",
            "text": "nút trợ giúp · cỡ chữ",
            "x": 3996,
            "y": 1410,
            "size": 46,
            "at": "l3:help"
          },
          {
            "id": "h-pc",
            "t": "illus",
            "name": "desktop-computer",
            "x": 4936,
            "y": 1270,
            "size": 200,
            "at": "l2:centre"
          },
          {
            "id": "h-hp",
            "t": "illus",
            "name": "headphone",
            "x": 5186,
            "y": 1290,
            "size": 160,
            "at": "l2:headphones"
          },
          {
            "id": "h-pn",
            "t": "illus",
            "name": "pencil",
            "x": 4936,
            "y": 1520,
            "size": 140,
            "at": "l2:pencil"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop six, quarter to twelve. What goes in, what stays out?",
          "sub": "Chặng sáu, mười hai giờ kém mười lăm. Mang gì vào, để gì ngoài?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "No laptop, no headphones needed. The centre provides them, plus scratch paper and a pencil.",
          "sub": "Không cần mang máy tính hay tai nghe; điểm thi lo đủ, phát cả giấy nháp và bút chì.",
          "keys": [
            "giấy nháp và bút chì"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "On screen, a help button explains question types, and you can adjust settings like text size.",
          "sub": "Trên màn hình có nút trợ giúp giải thích dạng câu hỏi, chỉnh được cỡ chữ."
        }
      ],
      "ref": "p16"
    },
    {
      "id": "s15",
      "module": "BRK-11",
      "data": {
        "title": "4 điều ở cửa phòng thi",
        "items": [
          "Căn cước, hộ chiếu bản gốc",
          "Nước lọc, chai trong suốt",
          "Đồ điện tử: tắt, để ngoài",
          "Không bút bi, ví, đồ ăn"
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Four: no pens, bags or food.",
          "sub": "Bốn: không bút bi, túi, đồ ăn."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Three: phones and watches, outside.",
          "sub": "Ba: điện thoại, đồng hồ để ngoài.",
          "keys": [
            "để ngoài"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Two: water, clear bottle.",
          "sub": "Hai: nước lọc, chai trong suốt."
        },
        {
          "id": "l4",
          "lang": "en",
          "say": "One: your original ID.",
          "sub": "Một: giấy tờ bản gốc, đúng loại đã đăng ký."
        }
      ],
      "ref": "p17"
    },
    {
      "id": "s16",
      "module": "DLG-01",
      "data": {
        "set": "home",
        "label": "11:50 · Lan và chiếc đồng hồ",
        "actors": [
          {
            "id": "lan",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đeo đồng hồ thông minh để canh giờ",
          "why": "Theo IDP: điện thoại, đồng hồ thông minh, thiết bị điện tử phải tắt, để ngoài; mang theo có thể bị huỷ bài thi.",
          "rule": "Đồ điện tử ở ngoài, giờ xem trên màn hình"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "lan",
          "say": "On test day, my watch stays on. It's my timer!",
          "sub": "Ngày thi em vẫn đeo đồng hồ. Nó là bộ canh giờ của em!",
          "face": "happy",
          "pose": "thumb",
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
          "say": "IDP says smartwatches go off and outside. Bring one in, and your test may be cancelled.",
          "sub": "Theo IDP, đồng hồ thông minh phải tắt, để ngoài. Mang vào, bài thi có thể bị huỷ.",
          "keys": [
            "bị huỷ"
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
          "who": "lan",
          "say": "Watch in my bag, outside. The writing screen has its own countdown.",
          "sub": "Đồng hồ cất túi, để ngoài. Màn hình Viết đã có đồng hồ đếm ngược.",
          "phase": "redo",
          "face": "thinking",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Right. Electronics outside, time on the screen.",
          "sub": "Đúng. Đồ điện tử ở ngoài, giờ giấc xem trên màn hình.",
          "phase": "redo",
          "keys": [
            "giờ giấc xem trên màn hình"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p18,p19"
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
          },
          {
            "at": "l4",
            "fit": [
              "i-v"
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
            "id": "i-t",
            "t": "text",
            "text": "⑦ 12:00 · Tập ở đâu?",
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
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "explain",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "pose": "thumb"
                }
              ],
              "props": [
                "laptop",
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:practise",
            "caption": "12:00 · lịch tập tuần sau",
            "icon": "spiral-calendar"
          },
          {
            "id": "i-idp",
            "t": "text",
            "text": "IDP: thi thử miễn phí hằng tuần",
            "x": 5964,
            "y": 1260,
            "size": 42,
            "at": "l2:mock",
            "hl": [
              {
                "text": "miễn phí",
                "at": "l2:free"
              }
            ]
          },
          {
            "id": "i-bc",
            "t": "text",
            "text": "BC: lệ phí gồm tài liệu ôn",
            "x": 5964,
            "y": 1340,
            "size": 42,
            "at": "l3:includes"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "1 lần: trọn đề trên máy",
            "x": 5964,
            "y": 1430,
            "size": 42,
            "at": "l4:once",
            "color": "accent",
            "hl": [
              {
                "text": "trọn đề",
                "at": "l4:full test"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Nghe → Đọc → Viết liền mạch",
            "x": 5964,
            "y": 1510,
            "size": 42,
            "at": "l4:no break"
          },
          {
            "id": "i-n",
            "t": "text",
            "text": "Tiếp: chọn ngày, điểm thi, lệ phí",
            "x": 5964,
            "y": 1600,
            "size": 40,
            "at": "l5:date",
            "color": "muted"
          },
          {
            "id": "i-src",
            "t": "text",
            "text": "Nguồn: IDP Việt Nam; British Council Việt Nam — lệ phí, địa điểm, lịch thi",
            "x": 5964,
            "y": 1815,
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
          "say": "Stop seven, noon. Where can you practise before the real day?",
          "sub": "Chặng bảy, mười hai giờ trưa. Tập ở đâu trước ngày thi thật?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "IDP Vietnam offers free weekly mock tests, and free study materials when you register.",
          "sub": "IDP Việt Nam có thi thử miễn phí hằng tuần và tài liệu ôn miễn phí khi đăng ký.",
          "keys": [
            "thi thử miễn phí hằng tuần"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "British Council Vietnam says its fee includes free prep materials too.",
          "sub": "British Council Việt Nam cũng ghi lệ phí đã gồm tài liệu ôn thi miễn phí."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "lan",
          "say": "At least once, a full test on a computer: listening, reading, writing, no break.",
          "sub": "Ít nhất một lần, làm trọn đề trên máy: Nghe, Đọc, Viết liền một mạch, không nghỉ.",
          "face": "happy"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "After that: choose a date and a centre, then pay. That's the next lesson.",
          "sub": "Sau đó: chọn ngày, chọn điểm thi, trả lệ phí. Đó là bài sau."
        }
      ],
      "ref": "p20,p21"
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
            "text": "12:30 · Chiếc đồng hồ",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:smartwatch"
          },
          {
            "id": "j-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 8772,
            "y": 1240,
            "w": 760,
            "data": {
              "set": "home",
              "actors": [
                {
                  "id": "lan",
                  "side": "left",
                  "pose": "hold",
                  "face": "happy"
                },
                {
                  "id": "dung",
                  "side": "right",
                  "face": "happy"
                }
              ],
              "props": [
                "watch",
                "laptop"
              ],
              "camera": [
                {
                  "at": "l2",
                  "shot": "E-SHOT-05",
                  "on": "lan",
                  "move": "push"
                },
                {
                  "at": "l3",
                  "shot": "E-SHOT-05",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:same",
            "caption": "Thứ Bảy 12:30 · nhà Thảo",
            "icon": "watch"
          },
          {
            "id": "j-w",
            "t": "illus",
            "name": "watch",
            "x": 7932,
            "y": 1250,
            "size": 120,
            "at": "l2:bag"
          },
          {
            "id": "j-wt",
            "t": "text",
            "text": "→ vào túi, để ngoài",
            "x": 8072,
            "y": 1280,
            "size": 48,
            "at": "l2:bag+200",
            "hl": [
              {
                "text": "để ngoài",
                "at": "l2:bag"
              }
            ]
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“Trăm hay không bằng tay quen”",
            "x": 7932,
            "y": 1410,
            "size": 46,
            "at": "l4:practised",
            "color": "accent",
            "hl": [
              {
                "text": "tay quen",
                "at": "l4:practised hand"
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
          "say": "Twelve thirty. The same smartwatch from this morning.",
          "sub": "Mười hai giờ rưỡi. Vẫn chiếc đồng hồ thông minh sáng nay."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Into the bag it goes. From now on, I time myself with the clock on screen.",
          "sub": "Cho vào túi thôi. Từ giờ em canh giờ bằng đồng hồ trên màn hình.",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "And me? Two weeks of typing practice. Every single day.",
          "sub": "Còn em? Hai tuần tập gõ. Ngày nào cũng tập.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "A hundred talents lose to a practised hand. Now their hands know the way.",
          "sub": "“Trăm hay không bằng tay quen.” Giờ tay đã quen đường.",
          "keys": [
            "tay đã quen đường"
          ]
        }
      ],
      "ref": "p19"
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
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1400
          },
          {
            "at": "l1:Same test",
            "fit": "C",
            "zoom": 0.8
          },
          {
            "at": "l2:highlights",
            "fit": "E",
            "zoom": 0.8
          },
          {
            "at": "l2:Speaking",
            "fit": "G",
            "zoom": 0.8
          },
          {
            "at": "l3",
            "fit": "J",
            "ms": 900
          }
        ],
        "items": [
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4756,
            "y": 620,
            "at": "l1:Same test"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 8672,
            "y": 570,
            "at": "l2:highlights"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 2748,
            "y": 1635,
            "at": "l2:Speaking"
          },
          {
            "id": "z-do",
            "t": "text",
            "text": "Làm ngay: thử Đọc trên máy",
            "x": 7932,
            "y": 1650,
            "size": 44,
            "at": "l3:week",
            "color": "accent",
            "hl": [
              {
                "text": "Làm ngay",
                "at": "l3:Do it"
              }
            ]
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo; đề, lệ phí, lịch có thể đổi — kiểm lại trang IELTS, British Council, IDP. Nhân vật là minh hoạ.",
            "x": 7932,
            "y": 1810,
            "size": 28,
            "at": "l3:end",
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
          "say": "So: in Vietnam, IELTS is on computer. Same test, new way of answering.",
          "sub": "Tóm lại: ở Việt Nam, IELTS thi trên máy. Đề không đổi, chỉ đổi cách làm bài."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Practise typing while listening, highlights and drag and drop. Speaking stays with a person.",
          "sub": "Tập vừa nghe vừa gõ, tô sáng, kéo thả. Phần Nói vẫn nói với người.",
          "keys": [
            "Phần Nói vẫn nói với người"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Do it now: this week, try one reading test on a computer.",
          "sub": "Làm ngay: tuần này làm thử một bài Đọc trên máy.",
          "keys": [
            "Làm ngay"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p4"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "Lan wants to wear her smartwatch to manage time, what should she do?",
        "options": [
          "Leave it outside the room, and practise using the clock on the screen",
          "Give it to the examiner, who will tell her the time aloud",
          "Wear it but turn the screen down, so no one can see it"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "watch",
        "why": "Theo IDP, đồng hồ thông minh phải tắt và để ngoài phòng thi; mang theo có thể khiến bài thi bị huỷ. Phần Viết đã có đồng hồ đếm ngược trên màn hình."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Lan wants to wear her smartwatch to manage time, what should she do?",
          "sub": "Lan muốn đeo đồng hồ thông minh để canh giờ, Lan nên làm gì?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Leave it outside the room, and practise using the clock on the screen.",
          "sub": "Để đồng hồ ở ngoài, tập canh giờ bằng đồng hồ trên màn hình."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[31]"
    },
    {
      "id": "s29",
      "module": "END-05",
      "data": {
        "text": "Tay đã quen. Còn bốn mươi câu hỏi",
        "sub": "Nghe câu hỏi tiếng Anh, chọn đáp án đúng"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Hands ready. Forty questions below. Next: where to register, the fee, and the deadline.",
          "sub": "Tay đã quen. Bốn mươi câu bên dưới. Bài sau: đăng ký ở đâu, lệ phí, hạn đăng ký.",
          "face": "wink"
        }
      ],
      "ref": "outro,p21"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi ielts-first-time-takers, bài 2) dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT SÁNG THỨ BẢY TẬP THI MÁY ở nhà Thảo (8:00 đồng hồ của Lan → ① 8:15 vì sao chỉ thi máy → ② 8:30 Nghe → ③ 9:10 Đọc, Lan làm mẫu (p8) → ④ 10:15 Viết, hai cách của Dũng (p12) → ⑤ 11:20 Nói, Thảo đóng vai giám khảo → ⑥ 11:45 mang gì + “Khoan đã!” đồng hồ thông minh (p18) → ⑦ 12:00 tập ở đâu → 12:30 đồng hồ vào túi, khép vòng). HOOK-23: đồ vật kể chuyện (đồng hồ thông minh, cận rồi kéo ra). Nhân vật: Lan, Dũng, Thảo — w145/_series/ielts-first-time-takers.md. Cảnh ngắt nhịp: BRK-06 (tay ở đâu), BRK-07 (gõ hai ngón), BRK-11 (4 điều ở cửa phòng thi). Tục ngữ: “Trăm hay không bằng tay quen”. Câu đố questions[31].",
  "loop": {
    "open": "s01",
    "close": "s18"
  }
};
