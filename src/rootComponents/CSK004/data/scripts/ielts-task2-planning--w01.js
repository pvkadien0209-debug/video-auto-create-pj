// ielts-task2-planning--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "ielts-task2-planning--w01",
  "hook": "HOOK-20",
  "unit": {
    "audience": "ielts-writing-task2-takers",
    "slug": "ielts-task2-planning",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Lập dàn ý 5 phút trước khi viết Task 2 thế nào?",
    "series": "IELTS Writing Task 2 vượt band 6 — đọc đề, lập ý và viết bài luận cho thí sinh IELTS"
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
            "id": "a-5",
            "t": "text",
            "text": "5 phút đầu",
            "x": 60,
            "y": 90,
            "size": 120,
            "at": "l1:five",
            "color": "accent",
            "hl": [
              {
                "text": "5 phút",
                "at": "l1:five"
              }
            ]
          },
          {
            "id": "a-1",
            "t": "text",
            "text": "1 câu quan điểm",
            "x": 80,
            "y": 270,
            "size": 54,
            "at": "l2:one"
          },
          {
            "id": "a-2",
            "t": "text",
            "text": "2 ý chính",
            "x": 80,
            "y": 350,
            "size": 54,
            "at": "l2:two"
          },
          {
            "id": "a-3",
            "t": "text",
            "text": "mỗi ý 1 ví dụ",
            "x": 80,
            "y": 430,
            "size": 54,
            "at": "l2:example",
            "hl": [
              {
                "text": "ví dụ",
                "at": "l2:example"
              }
            ]
          },
          {
            "id": "a-n",
            "t": "text",
            "text": "Nghe đơn giản… 3 chỗ hay sai",
            "x": 60,
            "y": 540,
            "size": 44,
            "at": "l3:three",
            "color": "coral"
          },
          {
            "id": "a-g",
            "t": "text",
            "text": "5 phút, 2 ý: gợi ý luyện tập, không phải quy định thi",
            "x": 60,
            "y": 720,
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
          "say": "Here's the answer first. The first five minutes of Task 2:",
          "sub": "Đáp án trước nhé. Năm phút đầu của Task 2:",
          "keys": [
            "Năm phút đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One opinion sentence. Two main ideas. One specific example for each.",
          "sub": "Một câu quan điểm. Hai ý chính. Mỗi ý một ví dụ cụ thể.",
          "keys": [
            "Một câu quan điểm"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Sounds simple. But there are three places people slip.",
          "sub": "Nghe đơn giản. Nhưng có ba chỗ người ta hay trượt chân.",
          "keys": [
            "ba chỗ"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "One note: five minutes and two ideas are practice tips, not exam rules.",
          "sub": "Lưu ý: năm phút và hai ý là gợi ý luyện tập, không phải quy định của kỳ thi.",
          "keys": [
            "gợi ý luyện tập"
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
            "x": 860,
            "y": 110,
            "w": 780,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "point",
                  "face": "worried"
                }
              ],
              "props": [
                "stopwatch",
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
            "at": "l1",
            "caption": "20:00 · phút 0 · thi thử",
            "icon": "stopwatch"
          },
          {
            "id": "a-t",
            "t": "text",
            "text": "Phút 0: gõ ngay!",
            "x": 60,
            "y": 620,
            "size": 50,
            "at": "l2:typing",
            "color": "coral",
            "hl": [
              {
                "text": "gõ ngay",
                "at": "l2:typing"
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
          "say": "Meet Thảo, twenty-seven, an office worker taking IELTS Academic. Eight p.m., a forty-minute mock essay. Stopwatch on.",
          "sub": "Đây là Thảo, hai mươi bảy tuổi, nhân viên văn phòng, thi IELTS Academic. Tám giờ tối, thi thử bài luận bốn mươi phút. Bấm giờ.",
          "keys": [
            "Thảo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Forty minutes? No time to plan. I'm typing right now!",
          "sub": "Bốn mươi phút á? Không kịp lập ý đâu. Gõ ngay thôi!",
          "face": "worried"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Minute zero. Let's watch where that road goes.",
          "sub": "Phút số không. Xem con đường ấy dẫn tới đâu nhé."
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
            "text": "Năm phút đầu làm gì?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:five",
            "hl": [
              {
                "text": "Năm phút đầu",
                "at": "l1:five"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Không phải: gõ ngay cho kịp",
            "x": 2028,
            "y": 190,
            "size": 52,
            "at": "l2:typing",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:fast+300"
          },
          {
            "id": "b-y1",
            "t": "text",
            "text": "Mà là: một dàn ý ngắn",
            "x": 2028,
            "y": 290,
            "size": 58,
            "at": "l3:plan",
            "color": "accent",
            "hl": [
              {
                "text": "dàn ý ngắn",
                "at": "l3:plan"
              }
            ]
          },
          {
            "id": "b-y2",
            "t": "text",
            "text": "giữ cả bài đi một hướng",
            "x": 2088,
            "y": 380,
            "size": 50,
            "at": "l3:direction"
          },
          {
            "id": "b-ca",
            "t": "text",
            "text": "“Cẩn tắc vô áy náy”",
            "x": 2028,
            "y": 520,
            "size": 60,
            "at": "l4:care",
            "color": "accent",
            "hl": [
              {
                "text": "Cẩn tắc",
                "at": "l4:care"
              }
            ]
          },
          {
            "id": "b-i",
            "t": "illus",
            "name": "compass",
            "x": 3218,
            "y": 220,
            "size": 300,
            "at": "l3:plan"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So what should those first five minutes do?",
          "sub": "Vậy năm phút đầu nên làm gì?",
          "keys": [
            "năm phút đầu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not typing straight away to be fast.",
          "sub": "Không phải gõ ngay cho nhanh."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "But a short plan that keeps the whole essay going in one direction.",
          "sub": "Mà là một dàn ý ngắn, giữ cho cả bài đi một hướng.",
          "keys": [
            "đi một hướng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "As our grandparents say: a little care now saves a lot of regret.",
          "sub": "Ông bà dặn: “Cẩn tắc vô áy náy.”",
          "keys": [
            "Cẩn tắc vô áy náy"
          ]
        }
      ],
      "ref": "intro"
    },
    {
      "id": "s03",
      "module": "DLG-01",
      "data": {
        "set": "room",
        "label": "20:15 · phút 15",
        "actors": [
          {
            "id": "thao",
            "side": "center"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đọc đề xong là gõ ngay",
          "why": "Vừa viết vừa nghĩ ý: đến đoạn ba hết ý, kết bài nói khác mở bài.",
          "rule": "Năm phút đầu: chốt quan điểm và ý"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "thao",
          "say": "Minute fifteen. Paragraph three… and I'm out of ideas. And my conclusion disagrees with my intro!",
          "sub": "Phút mười lăm. Đoạn ba… hết ý rồi. Kết bài lại nói ngược mở bài!",
          "face": "worried",
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
          "say": "Thinking while typing: the ideas run dry, and the view changes halfway.",
          "sub": "Vừa viết vừa nghĩ ý: ý cạn dần, quan điểm đổi giữa chừng.",
          "keys": [
            "đổi giữa chừng"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind to minute zero!",
          "sub": "Tua về phút số không!",
          "phase": "redo"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "Hands off the keyboard. Five minutes, scratch paper first.",
          "sub": "Bỏ tay khỏi bàn phím. Năm phút, giấy nháp trước.",
          "phase": "redo",
          "face": "happy",
          "pose": "explain"
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "intro,p3"
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
            "text": "① Vì sao lập dàn ý?",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Stop one"
          },
          {
            "id": "c-0",
            "t": "text",
            "text": "Vài phút nghĩ trước khi viết",
            "x": 3996,
            "y": 170,
            "size": 50,
            "at": "l1:few minutes",
            "hl": [
              {
                "text": "Vài phút nghĩ",
                "at": "l1:few minutes"
              }
            ]
          },
          {
            "id": "c-1",
            "t": "text",
            "text": "quan điểm rõ ràng",
            "x": 4036,
            "y": 260,
            "size": 46,
            "at": "l2:clear"
          },
          {
            "id": "c-2",
            "t": "text",
            "text": "lập luận phát triển đủ",
            "x": 4036,
            "y": 330,
            "size": 46,
            "at": "l2:developed"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "bám sát chủ đề",
            "x": 4036,
            "y": 400,
            "size": 46,
            "at": "l2:relevant"
          },
          {
            "id": "c-4",
            "t": "text",
            "text": "mở · thân · kết",
            "x": 4036,
            "y": 470,
            "size": 46,
            "at": "l2:introduction"
          },
          {
            "id": "c-5",
            "t": "text",
            "text": "Vừa viết vừa nghĩ → khó giữ",
            "x": 3996,
            "y": 560,
            "size": 48,
            "at": "l3:while",
            "color": "coral",
            "hl": [
              {
                "text": "khó giữ",
                "at": "l3:hard"
              }
            ]
          },
          {
            "id": "c-i",
            "t": "illus",
            "name": "memo",
            "x": 5186,
            "y": 200,
            "size": 280,
            "at": "l1:few minutes"
          },
          {
            "id": "c-src",
            "t": "text",
            "text": "Nguồn: British Council — IELTS Writing",
            "x": 3996,
            "y": 720,
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
          "say": "Stop one: why plan? The British Council advises a few minutes of thinking before you start.",
          "sub": "Chặng một: vì sao lập dàn ý? British Council khuyên dành vài phút suy nghĩ trước khi viết.",
          "keys": [
            "vài phút suy nghĩ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Task 2 needs a clear position, fully developed arguments, staying relevant, with introduction, body and conclusion.",
          "sub": "Task 2 cần quan điểm rõ, lập luận phát triển đủ, bám sát chủ đề, theo bố cục mở bài, thân bài, kết bài.",
          "keys": [
            "quan điểm rõ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Those are hard to hold while you write and think at the same time.",
          "sub": "Ba yêu cầu ấy khó giữ nếu vừa viết vừa nghĩ ý.",
          "keys": [
            "vừa viết vừa nghĩ ý"
          ]
        }
      ],
      "ref": "p1"
    },
    {
      "id": "s05",
      "module": "BRK-08",
      "data": {
        "title": "Bốn mươi phút của Thảo",
        "points": [
          {
            "label": "Phút 0",
            "sub": "Đọc đề",
            "illus": "memo"
          },
          {
            "label": "Phút 1",
            "sub": "Câu quan điểm",
            "illus": "compass"
          },
          {
            "label": "Phút 2–4",
            "sub": "Hai ý, ví dụ",
            "illus": "pencil"
          },
          {
            "label": "Phút 5",
            "sub": "Soát dàn ý",
            "illus": "magnifying-glass-tilted-left"
          },
          {
            "label": "Phút 35",
            "sub": "Soát bài",
            "illus": "stopwatch"
          }
        ],
        "current": 0
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "About five minutes to plan, most of the time to write, a few minutes to check.",
          "sub": "Khoảng năm phút lập ý, phần lớn để viết, vài phút cuối để soát.",
          "keys": [
            "năm phút lập ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Adjust to your speed. Keep both steps.",
          "sub": "Chỉnh theo tốc độ mình. Giữ cả hai bước.",
          "keys": [
            "Giữ cả hai bước"
          ]
        }
      ],
      "ref": "p2"
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
            "at": "l2",
            "fit": [
              "c-6"
            ],
            "zoom": 1.2,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "C",
            "ms": 600
          }
        ],
        "items": [
          {
            "id": "c-6",
            "t": "text",
            "text": "Band 6: kết luận có thể mờ",
            "x": 4796,
            "y": 560,
            "size": 44,
            "at": "l1:conclusions",
            "hl": [
              {
                "text": "mờ",
                "at": "l1:unclear"
              }
            ]
          },
          {
            "id": "c-7",
            "t": "text",
            "text": "= dấu hiệu đổi ý giữa chừng",
            "x": 4836,
            "y": 630,
            "size": 40,
            "at": "l2:changed",
            "color": "coral"
          },
          {
            "id": "c-k",
            "t": "text",
            "text": "Mở bài = kết bài",
            "x": 4796,
            "y": 470,
            "size": 56,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Mở bài = kết bài",
                "at": "l3:same"
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
          "say": "Band six on Task Response: the position is relevant, but conclusions may be unclear, unjustified or repetitive.",
          "sub": "Band sáu ở Task Response: quan điểm có liên quan, nhưng kết luận có thể chưa rõ, thiếu căn cứ hoặc lặp lại.",
          "keys": [
            "kết luận có thể chưa rõ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A drifting conclusion often means the writer changed their mind halfway.",
          "sub": "Kết luận lệch thường là dấu hiệu người viết đổi ý giữa chừng.",
          "keys": [
            "đổi ý giữa chừng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: five minutes of planning make your introduction and conclusion say the same thing.",
          "sub": "Rút ra: năm phút lập ý giúp mở bài và kết bài nói cùng một điều.",
          "keys": [
            "nói cùng một điều"
          ]
        }
      ],
      "ref": "p3,p4"
    },
    {
      "id": "s07",
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
            "at": "l4",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "② Phút 1 · Câu quan điểm",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Stop two"
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6764,
            "y": 150,
            "w": 780,
            "data": {
              "set": "room",
              "actors": [
                {
                  "id": "thao",
                  "side": "center",
                  "pose": "think",
                  "face": "thinking"
                }
              ],
              "props": [
                "memo",
                "pencil"
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
            "at": "l1:Stop two",
            "caption": "20:01 · phút 1 · giấy nháp",
            "icon": "pencil"
          },
          {
            "id": "d-p",
            "t": "text",
            "text": "Vé buýt miễn phí giảm kẹt xe?",
            "x": 5964,
            "y": 170,
            "size": 40,
            "at": "l1:free"
          },
          {
            "id": "d-e",
            "t": "text",
            "text": "To what extent…?",
            "x": 5964,
            "y": 240,
            "size": 52,
            "at": "l2:extent",
            "color": "muted"
          },
          {
            "id": "d-bx",
            "t": "box",
            "x": 5954,
            "y": 320,
            "w": 780,
            "h": 150,
            "at": "l3:Partly",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "d-s",
            "t": "text",
            "text": "Partly agree: helps,",
            "x": 5984,
            "y": 335,
            "size": 50,
            "at": "l3:Partly+200",
            "color": "accent",
            "hl": [
              {
                "text": "Partly agree",
                "at": "l3:Partly"
              }
            ]
          },
          {
            "id": "d-s2",
            "t": "text",
            "text": "but not the best way alone",
            "x": 5984,
            "y": 400,
            "size": 44,
            "at": "l3:best"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop two, minute one. The practice prompt: is making public transport free the best way to cut big-city traffic?",
          "sub": "Chặng hai, phút một. Đề luyện: miễn phí giao thông công cộng có phải cách tốt nhất giảm kẹt xe ở thành phố lớn?",
          "keys": [
            "Đề luyện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "To what extent do you agree? Before any ideas, answer that in one short sentence.",
          "sub": "Bạn đồng ý tới mức nào? Trước khi nghĩ ý, trả lời câu lệnh bằng một câu ngắn.",
          "keys": [
            "một câu ngắn"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Partly agree: free transport helps, but it's not the best way on its own.",
          "sub": "Đồng ý một phần: miễn phí có giúp, nhưng tự nó chưa phải cách tốt nhất.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Thảo plays Quân from the lesson here. And that sentence is her compass.",
          "sub": "Ở đây Thảo vào vai Quân trong bài. Câu ấy là kim chỉ nam của cô.",
          "keys": [
            "kim chỉ nam"
          ]
        }
      ],
      "ref": "p5"
    },
    {
      "id": "s08",
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
            "id": "d-1",
            "t": "text",
            "text": "Ý không đỡ câu này → bỏ",
            "x": 5964,
            "y": 510,
            "size": 46,
            "at": "l1:drop",
            "hl": [
              {
                "text": "bỏ",
                "at": "l1:drop"
              }
            ]
          },
          {
            "id": "d-2",
            "t": "text",
            "text": "“there are pros and cons”",
            "x": 5964,
            "y": 590,
            "size": 44,
            "at": "l2:pros",
            "color": "coral"
          },
          {
            "id": "d-2x",
            "t": "strike",
            "over": "d-2",
            "at": "l2:vague"
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Đủ cụ thể để phát triển",
            "x": 5964,
            "y": 665,
            "size": 46,
            "at": "l3:specific",
            "color": "accent",
            "hl": [
              {
                "text": "cụ thể",
                "at": "l3:specific"
              }
            ]
          },
          {
            "id": "d-src",
            "t": "text",
            "text": "Nguồn: IELTS Writing Task 2 Band Descriptors (5/2023)",
            "x": 6804,
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
          "say": "Every idea after this must support it. An idea that doesn't? Drop it, even if it's a good one.",
          "sub": "Mỗi ý chọn sau đó phải đỡ cho câu này. Ý nào không đỡ thì bỏ, dù ý đó hay.",
          "keys": [
            "dù ý đó hay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "There are pros and cons? Too vague to develop.",
          "sub": "“There are pros and cons”? Mơ hồ quá, không phát triển được."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Band seven wants a clear, developed position, so make the sentence specific enough to grow.",
          "sub": "Band bảy đòi quan điểm rõ và được phát triển, nên câu quan điểm phải đủ cụ thể để phát triển.",
          "keys": [
            "đủ cụ thể"
          ]
        }
      ],
      "ref": "p6"
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
            "text": "③ Phút 2 · Hai ý, không phải năm",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Stop three",
            "hl": [
              {
                "text": "Hai ý",
                "at": "l1:two"
              }
            ]
          },
          {
            "id": "e-w",
            "t": "text",
            "text": "250–300 từ = 2 đoạn thân bài",
            "x": 7932,
            "y": 170,
            "size": 50,
            "at": "l1:hundred"
          },
          {
            "id": "e-b1",
            "t": "box",
            "x": 7932,
            "y": 260,
            "w": 780,
            "h": 190,
            "at": "l2:tickets",
            "stroke": 5
          },
          {
            "id": "e-1",
            "t": "text",
            "text": "Ý 1: vé miễn phí",
            "x": 7962,
            "y": 275,
            "size": 50,
            "at": "l2:tickets+200",
            "color": "accent"
          },
          {
            "id": "e-1b",
            "t": "text",
            "text": "→ vài người bỏ xe máy, ô tô",
            "x": 7962,
            "y": 350,
            "size": 44,
            "at": "l2:motorbikes"
          },
          {
            "id": "e-b2",
            "t": "box",
            "x": 8772,
            "y": 260,
            "w": 780,
            "h": 190,
            "at": "l3:buses",
            "stroke": 5
          },
          {
            "id": "e-2",
            "t": "text",
            "text": "Ý 2: xe buýt chậm, ít tuyến",
            "x": 8802,
            "y": 275,
            "size": 46,
            "at": "l3:buses+200",
            "color": "accent"
          },
          {
            "id": "e-2b",
            "t": "text",
            "text": "→ nhiều người vẫn không đi",
            "x": 8802,
            "y": 350,
            "size": 44,
            "at": "l3:still"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop three, minute two. With two hundred and fifty to three hundred words, two main ideas, one body paragraph each.",
          "sub": "Chặng ba, phút hai. Với khoảng hai trăm năm mươi đến ba trăm từ, hai ý chính, mỗi ý một đoạn thân bài.",
          "keys": [
            "hai ý chính"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Idea one: free tickets make some people leave their motorbikes and cars.",
          "sub": "Ý một: vé miễn phí khiến một số người bỏ xe máy, ô tô."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Idea two: but if buses are slow with few routes, many people still won't ride.",
          "sub": "Ý hai: nhưng nếu xe buýt chậm và ít tuyến, nhiều người vẫn không đi.",
          "keys": [
            "vẫn không đi"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Only two? I had five ideas ready!",
          "sub": "Chỉ hai thôi à? Mình nghĩ sẵn năm ý cơ!",
          "face": "surprised"
        }
      ],
      "ref": "p7"
    },
    {
      "id": "s10",
      "module": "BRK-04",
      "data": {
        "title": "Bao nhiêu ý?",
        "wrong": "Năm ý, mỗi ý một câu",
        "right": "Hai ý, giải thích kỹ, có dẫn chứng",
        "wrongIllus": "scroll",
        "rightIllus": "bullseye"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Five ideas, one line each: band five, underdeveloped.",
          "sub": "Năm ý, mỗi ý một câu: band năm, chưa phát triển.",
          "keys": [
            "chưa phát triển"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Two ideas, explained: band seven, supported.",
          "sub": "Hai ý giải thích kỹ: band bảy, có dẫn chứng.",
          "keys": [
            "có dẫn chứng"
          ]
        }
      ],
      "ref": "p8"
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
          }
        ],
        "items": [
          {
            "id": "e-m",
            "t": "text",
            "text": "Nhiều ý ≠ hiểu biết hơn",
            "x": 7932,
            "y": 520,
            "size": 50,
            "at": "l1:more",
            "color": "coral"
          },
          {
            "id": "e-k",
            "t": "text",
            "text": "Ít mà sâu > nhiều mà nông",
            "x": 7932,
            "y": 620,
            "size": 60,
            "at": "l2:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "Ít mà sâu",
                "at": "l2:deep"
              }
            ]
          },
          {
            "id": "e-src",
            "t": "text",
            "text": "Nguồn: IELTS Writing Task 2 Band Descriptors (5/2023)",
            "x": 8772,
            "y": 720,
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
          "say": "Many think more ideas show more knowledge, and earn more marks. The descriptors say otherwise.",
          "sub": "Nhiều người nghĩ càng nhiều ý càng chứng tỏ hiểu biết, càng được điểm. Bản mô tả band nói khác.",
          "keys": [
            "Bản mô tả band nói khác"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: few ideas, deep, beat many ideas, shallow. A well, not a puddle.",
          "sub": "Rút ra: ít ý mà sâu tốt hơn nhiều ý mà nông. Đào giếng, đừng đào vũng.",
          "keys": [
            "ít ý mà sâu"
          ]
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
            "at": "l5",
            "fit": "F",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "f-t",
            "t": "text",
            "text": "④ Phút 3 · Mỗi ý một ví dụ",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop four"
          },
          {
            "id": "f-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 860,
            "y": 1240,
            "w": 780,
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
                "memo",
                "bus"
              ],
              "camera": [
                {
                  "at": "l3",
                  "shot": "medium",
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
            "at": "l3",
            "caption": "20:03 · ví dụ cho ý 2",
            "icon": "bus"
          },
          {
            "id": "f-1",
            "t": "text",
            "text": "Cụ thể · gắn ý · giải thích được",
            "x": 60,
            "y": 1260,
            "size": 38,
            "at": "l2:specific"
          },
          {
            "id": "f-b",
            "t": "text",
            "text": "Trước: “public transport",
            "x": 60,
            "y": 1350,
            "size": 44,
            "at": "l3:Before",
            "color": "coral"
          },
          {
            "id": "f-b2",
            "t": "text",
            "text": "is not good…” → nhắc lại ý",
            "x": 100,
            "y": 1415,
            "size": 40,
            "at": "l3:good",
            "color": "coral"
          },
          {
            "id": "f-bx",
            "t": "strike",
            "over": "f-b",
            "at": "l4:repeats"
          },
          {
            "id": "f-a",
            "t": "text",
            "text": "Sau: tuyến phải đổi 2 lần",
            "x": 60,
            "y": 1510,
            "size": 46,
            "at": "l5:two changes",
            "color": "accent",
            "hl": [
              {
                "text": "đổi 2 lần",
                "at": "l5:two changes"
              }
            ]
          },
          {
            "id": "f-a2",
            "t": "text",
            "text": "→ vé miễn phí vẫn đi xe máy",
            "x": 100,
            "y": 1585,
            "size": 40,
            "at": "l5:motorbike"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Stop four, minute three. The British Council reminds you: examples support your position.",
          "sub": "Chặng bốn, phút ba. British Council nhắc: cần ví dụ để đỡ cho lập trường.",
          "keys": [
            "ví dụ để đỡ"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A good example is specific, linked straight to the idea, and explained in a sentence or two.",
          "sub": "Ví dụ tốt là ví dụ cụ thể, gắn thẳng với ý, giải thích được trong một hai câu.",
          "keys": [
            "ví dụ cụ thể"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "thao",
          "say": "Before: public transport is not good in many places.",
          "sub": "Trước: “public transport is not good in many places”.",
          "face": "thinking"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "That just repeats the idea. The reader sees nothing new.",
          "sub": "Câu này chỉ nhắc lại ý, người đọc không thấy gì mới.",
          "keys": [
            "chỉ nhắc lại ý"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "thao",
          "say": "After: a worker whose bus route needs two changes still rides a motorbike, even if the ticket is free.",
          "sub": "Sau: một người đi làm mà tuyến xe buýt phải đổi hai lần vẫn đi xe máy, dù vé miễn phí.",
          "face": "happy"
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
          }
        ],
        "items": [
          {
            "id": "f-n",
            "t": "text",
            "text": "Không bịa số liệu, nghiên cứu",
            "x": 60,
            "y": 1680,
            "size": 44,
            "at": "l1:invent",
            "color": "coral",
            "hl": [
              {
                "text": "Không bịa",
                "at": "l1:invent"
              }
            ]
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Ví dụ cho thấy, ý chỉ nói",
            "x": 60,
            "y": 1755,
            "size": 46,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "cho thấy",
                "at": "l3:shows"
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
          "say": "No need for real statistics. And don't invent numbers or studies.",
          "sub": "Ví dụ không cần là số liệu thật, và đừng bịa con số hay nghiên cứu.",
          "keys": [
            "đừng bịa con số"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "A familiar situation, described specifically, is enough.",
          "sub": "Một tình huống quen thuộc, tả cụ thể, là đủ.",
          "keys": [
            "tình huống quen thuộc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: an example shows what the main idea only says.",
          "sub": "Rút ra: ví dụ phải cho thấy điều mà ý chính mới chỉ nói ra.",
          "keys": [
            "cho thấy"
          ]
        }
      ],
      "ref": "p11,p13"
    },
    {
      "id": "s14",
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
            "text": "⑤ Phút 4 · Dàn ý trên nháp",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop five"
          },
          {
            "id": "g-k0",
            "t": "text",
            "text": "Quan điểm",
            "x": 2028,
            "y": 1260,
            "size": 42,
            "at": "l2:position",
            "color": "accent"
          },
          {
            "id": "g-v0",
            "t": "text",
            "text": "partly agree: helps + better service",
            "x": 2298,
            "y": 1262,
            "size": 40,
            "at": "l2:position+300"
          },
          {
            "id": "g-k1",
            "t": "text",
            "text": "Thân 1",
            "x": 2028,
            "y": 1340,
            "size": 42,
            "at": "l3:Body one",
            "color": "accent"
          },
          {
            "id": "g-v1",
            "t": "text",
            "text": "free tickets remove the cost barrier",
            "x": 2298,
            "y": 1342,
            "size": 40,
            "at": "l3:Body one+300"
          },
          {
            "id": "g-k2",
            "t": "text",
            "text": "  ví dụ",
            "x": 2028,
            "y": 1405,
            "size": 42,
            "at": "l3:students",
            "color": "accent"
          },
          {
            "id": "g-v2",
            "t": "text",
            "text": "students, low income workers switch",
            "x": 2298,
            "y": 1407,
            "size": 40,
            "at": "l3:students+300"
          },
          {
            "id": "g-k3",
            "t": "text",
            "text": "Thân 2",
            "x": 2028,
            "y": 1485,
            "size": 42,
            "at": "l4:Body two",
            "color": "accent"
          },
          {
            "id": "g-v3",
            "t": "text",
            "text": "price is not the only reason",
            "x": 2298,
            "y": 1487,
            "size": 40,
            "at": "l4:Body two+300"
          },
          {
            "id": "g-k4",
            "t": "text",
            "text": "  ví dụ",
            "x": 2028,
            "y": 1550,
            "size": 42,
            "at": "l4:changes",
            "color": "accent"
          },
          {
            "id": "g-v4",
            "t": "text",
            "text": "two changes take too long",
            "x": 2298,
            "y": 1552,
            "size": 40,
            "at": "l4:changes+300"
          },
          {
            "id": "g-k5",
            "t": "text",
            "text": "Kết",
            "x": 2028,
            "y": 1630,
            "size": 42,
            "at": "l5:Conclusion",
            "color": "accent"
          },
          {
            "id": "g-v5",
            "t": "text",
            "text": "free only works with more routes",
            "x": 2298,
            "y": 1632,
            "size": 40,
            "at": "l5:Conclusion+300"
          },
          {
            "id": "g-c",
            "t": "text",
            "text": "Bước 5: đọc lại câu lệnh ✓",
            "x": 2028,
            "y": 1720,
            "size": 44,
            "at": "l6:reread",
            "hl": [
              {
                "text": "đọc lại câu lệnh",
                "at": "l6:reread"
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
          "say": "Stop five, minute four. Thảo's whole plan on scratch paper, about five minutes in total.",
          "sub": "Chặng năm, phút bốn. Cả dàn ý của Thảo trên nháp, tổng cộng khoảng năm phút.",
          "keys": [
            "dàn ý"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Position: partly agree. Free transport helps, but needs better service.",
          "sub": "Quan điểm: đồng ý một phần. Miễn phí có giúp, nhưng cần dịch vụ tốt hơn."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Body one: free tickets remove the cost barrier. Example: students and low-income workers may switch from motorbikes.",
          "sub": "Thân bài một: vé miễn phí gỡ rào cản chi phí. Ví dụ: học sinh, người thu nhập thấp có thể bỏ xe máy."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Body two: price isn't the only reason people drive. Example: a route with two changes takes too long.",
          "sub": "Thân bài hai: giá không phải lý do duy nhất. Ví dụ: tuyến phải đổi hai lần thì quá lâu."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Conclusion: free transport is useful only with more routes and faster buses.",
          "sub": "Kết bài: miễn phí chỉ có ích khi đi kèm nhiều tuyến hơn, xe nhanh hơn."
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Step five: reread the instruction. Yes, it answers to what extent.",
          "sub": "Bước năm: đọc lại câu lệnh. Đúng, dàn ý đã trả lời “to what extent”.",
          "keys": [
            "đọc lại câu lệnh"
          ]
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
            "fit": "G",
            "move": "cut"
          }
        ],
        "items": [
          {
            "id": "g-m",
            "t": "text",
            "text": "Từ khoá tiếng Anh, không viết câu",
            "x": 2868,
            "y": 1720,
            "size": 38,
            "at": "l1:keywords",
            "color": "muted"
          },
          {
            "id": "g-k",
            "t": "text",
            "text": "Mỗi dòng: để làm gì?",
            "x": 2028,
            "y": 1780,
            "size": 44,
            "at": "l3:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "để làm gì",
                "at": "l3:serves"
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
          "say": "Write it in short English keywords, not full sentences.",
          "sub": "Dàn ý viết bằng từ khoá tiếng Anh ngắn, không viết thành câu.",
          "keys": [
            "từ khoá tiếng Anh"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then each line becomes text: the position ends the introduction, each idea a topic sentence, each example two or three sentences.",
          "sub": "Khi gõ bài: dòng quan điểm thành câu cuối mở bài, mỗi ý thành câu chủ đề, mỗi ví dụ thành hai ba câu minh hoạ.",
          "keys": [
            "câu chủ đề"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: a plan is ready when every line can say how it serves the position.",
          "sub": "Rút ra: dàn ý đủ dùng khi mỗi dòng trả lời được câu “để làm gì cho quan điểm”.",
          "keys": [
            "để làm gì cho quan điểm"
          ]
        }
      ],
      "ref": "p15,p16"
    },
    {
      "id": "s16",
      "module": "BRK-07",
      "data": {
        "question": "Dàn ý đủ dòng rồi — nhưng có ý nào lệch đề?",
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
          "say": "The plan looks full. Is any idea off topic?",
          "sub": "Dàn ý đủ dòng rồi. Có ý nào lệch đề không?",
          "keys": [
            "lệch đề"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p17"
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
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "⑥ Phút 5 · Soát dàn ý",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:Stop six"
          },
          {
            "id": "h-c0",
            "t": "box",
            "x": 3996,
            "y": 1280,
            "w": 44,
            "h": 44,
            "at": "l2:every part",
            "stroke": 5
          },
          {
            "id": "h-k0",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1262,
            "size": 56,
            "at": "l2:every part+600",
            "color": "accent"
          },
          {
            "id": "h-l0",
            "t": "text",
            "text": "Trả lời mọi phần câu lệnh?",
            "x": 4061,
            "y": 1272,
            "size": 44,
            "at": "l2:every part+200"
          },
          {
            "id": "h-c1",
            "t": "box",
            "x": 3996,
            "y": 1365,
            "w": 44,
            "h": 44,
            "at": "l3:both",
            "stroke": 5
          },
          {
            "id": "h-k1",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1347,
            "size": 56,
            "at": "l3:both+600",
            "color": "accent"
          },
          {
            "id": "h-l1",
            "t": "text",
            "text": "Hai ý cùng đỡ quan điểm?",
            "x": 4061,
            "y": 1357,
            "size": 44,
            "at": "l3:both+200"
          },
          {
            "id": "h-c2",
            "t": "box",
            "x": 3996,
            "y": 1450,
            "w": 44,
            "h": 44,
            "at": "l4:example",
            "stroke": 5
          },
          {
            "id": "h-k2",
            "t": "text",
            "text": "✓",
            "x": 4000,
            "y": 1432,
            "size": 56,
            "at": "l4:example+600",
            "color": "accent"
          },
          {
            "id": "h-l2",
            "t": "text",
            "text": "Mỗi ý có ví dụ cụ thể?",
            "x": 4061,
            "y": 1442,
            "size": 44,
            "at": "l4:example+200"
          },
          {
            "id": "h-src",
            "t": "text",
            "text": "Nguồn: British Council — IELTS Writing — lập trường rõ, phát triển, bám đề",
            "x": 3996,
            "y": 1810,
            "size": 28,
            "at": "l5",
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
          "say": "Stop six, minute five. Before the first word, three quick questions.",
          "sub": "Chặng sáu, phút năm. Trước khi gõ chữ đầu tiên, hỏi nhanh ba câu.",
          "keys": [
            "ba câu"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Does the plan answer every part of the instruction?",
          "sub": "Dàn ý đã trả lời mọi phần của câu lệnh chưa?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Do both ideas support the same position?",
          "sub": "Hai ý có cùng đỡ cho quan điểm không?"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Does each idea have a specific example?",
          "sub": "Mỗi ý có ví dụ cụ thể chưa?"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "They match what the British Council stresses: clear position, developed argument, staying relevant.",
          "sub": "Ba câu này đúng với điều British Council nhấn mạnh: lập trường rõ, lập luận phát triển, bám sát chủ đề."
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
            "fit": "H",
            "move": "cut"
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
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 4796,
            "y": 1240,
            "w": 780,
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
                "memo",
                "pencil"
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
                  "shot": "E-SHOT-09",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Dũng",
            "caption": "20:05 · nháp của Dũng",
            "icon": "memo"
          },
          {
            "id": "h-d1",
            "t": "text",
            "text": "Ý 1: free transport → ít kẹt xe",
            "x": 3996,
            "y": 1530,
            "size": 38,
            "at": "l2:reduces"
          },
          {
            "id": "h-d2",
            "t": "text",
            "text": "Ý 2: cars → ô nhiễm, sức khoẻ",
            "x": 3996,
            "y": 1590,
            "size": 38,
            "at": "l2:pollution",
            "color": "coral"
          },
          {
            "id": "h-d3",
            "t": "text",
            "text": "Kết: agree",
            "x": 3996,
            "y": 1650,
            "size": 38,
            "at": "l2:agree"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Meet Dũng, Thảo's cousin, a biology student, trying the same prompt as Phương from the lesson.",
          "sub": "Đây là Dũng, em họ Thảo, sinh viên sinh học, làm cùng đề trong vai Phương của bài.",
          "keys": [
            "Dũng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Idea one: free transport reduces traffic. Idea two: cars cause air pollution and health problems. Conclusion: agree!",
          "sub": "Ý một: miễn phí giảm kẹt xe. Ý hai: ô tô gây ô nhiễm không khí, hại sức khoẻ. Kết: đồng ý!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "What's wrong with this plan? Think for a second.",
          "sub": "Dàn ý này có vấn đề gì? Nghĩ một chút nhé.",
          "keys": [
            "có vấn đề gì"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 700
        }
      ],
      "beats": {
        "after": 1200
      },
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
            "id": "h-x",
            "t": "strike",
            "over": "h-d2",
            "at": "l1:off"
          },
          {
            "id": "h-fix",
            "t": "text",
            "text": "→ vé miễn phí: SV bỏ xe máy",
            "x": 3996,
            "y": 1710,
            "size": 40,
            "at": "l3:students",
            "color": "accent"
          },
          {
            "id": "h-k",
            "t": "text",
            "text": "Ý hay mà lệch lệnh = lạc đề",
            "x": 4836,
            "y": 1750,
            "size": 40,
            "at": "l4:Takeaway",
            "color": "accent",
            "hl": [
              {
                "text": "lạc đề",
                "at": "l4:off"
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
          "say": "Idea two is off topic. The prompt asks about the best way to cut traffic.",
          "sub": "Ý hai lệch chủ đề. Đề hỏi đâu là cách tốt nhất để giảm kẹt xe.",
          "keys": [
            "lệch chủ đề"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Air pollution is true, but it's another issue. It doesn't support the answer.",
          "sub": "Ô nhiễm không khí là thật, nhưng là chuyện khác, không đỡ cho câu trả lời."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Swap it, then. Free tickets help students leave their motorbikes.",
          "sub": "Vậy em đổi: vé miễn phí giúp học sinh, sinh viên bỏ xe máy.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Takeaway: a good idea that misses the instruction is still off topic.",
          "sub": "Rút ra: ý hay mà lệch câu lệnh vẫn là ý lạc đề.",
          "keys": [
            "vẫn là ý lạc đề"
          ]
        }
      ],
      "ref": "p18,p19"
    },
    {
      "id": "s20",
      "module": "BRK-03",
      "data": {
        "value": 30,
        "suffix": " phút",
        "label": "viết đúng một hướng nhờ năm phút lập ý",
        "illus": "stopwatch"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Plan done. Now the long stretch.",
          "sub": "Xong dàn ý. Giờ là chặng dài."
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "About thirty minutes of writing, one direction.",
          "sub": "Khoảng ba mươi phút viết, đi một hướng.",
          "keys": [
            "ba mươi phút viết"
          ]
        }
      ],
      "ref": "outro"
    },
    {
      "id": "s21",
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
            "text": "Phút 35 → 40 · Soát",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:checks"
          },
          {
            "id": "i-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6764,
            "y": 1240,
            "w": 780,
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
                "stopwatch",
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
                  "at": "l4",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:thirty-five",
            "caption": "20:40 · phút 40 · cùng bàn ấy",
            "icon": "stopwatch"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Mở bài: partly agree",
            "x": 5964,
            "y": 1270,
            "size": 46,
            "at": "l2:intro"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Kết bài: partly agree ✓",
            "x": 5964,
            "y": 1350,
            "size": 46,
            "at": "l2:conclusion",
            "color": "accent",
            "hl": [
              {
                "text": "✓",
                "at": "l2:same"
              }
            ]
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Đoạn 3: không hết ý",
            "x": 5964,
            "y": 1430,
            "size": 46,
            "at": "l3:ideas"
          },
          {
            "id": "i-ca",
            "t": "text",
            "text": "“Cẩn tắc…” — khỏi áy náy",
            "x": 5964,
            "y": 1560,
            "size": 50,
            "at": "l4:regret",
            "color": "accent",
            "hl": [
              {
                "text": "khỏi áy náy",
                "at": "l4:regret"
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
          "say": "Minute thirty-five. Thảo stops writing and checks. Eight forty, same desk, same stopwatch.",
          "sub": "Phút ba mươi lăm, Thảo dừng viết để soát. Tám giờ bốn mươi, vẫn bàn ấy, đồng hồ ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "thao",
          "say": "Intro: partly agree. Conclusion: the same. Pointed it out!",
          "sub": "Mở bài: đồng ý một phần. Kết bài: y như vậy. Chỉ tay được rồi!",
          "face": "happy"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "No running out of ideas at paragraph three this time.",
          "sub": "Lần này không hết ý ở đoạn ba."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Five minutes of care, forty minutes without regret.",
          "sub": "Cẩn tắc năm phút, bốn mươi phút khỏi áy náy.",
          "keys": [
            "khỏi áy náy"
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
            "fit": "D",
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
            "text": "Tóm lại: 5 phút, một hướng",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:So"
          },
          {
            "id": "j-1",
            "t": "text",
            "text": "Làm ngay: đề giao thông",
            "x": 7932,
            "y": 1290,
            "size": 50,
            "at": "l5:Try",
            "hl": [
              {
                "text": "đề giao thông",
                "at": "l5:traffic"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "chọn quan điểm khác Thảo",
            "x": 7972,
            "y": 1375,
            "size": 46,
            "at": "l5:different"
          },
          {
            "id": "j-3",
            "t": "text",
            "text": "soát bằng ba câu hỏi",
            "x": 7972,
            "y": 1450,
            "size": 46,
            "at": "l5:three"
          },
          {
            "id": "j-n",
            "t": "text",
            "text": "Bài tiếp: đoạn thân bài mạch lạc",
            "x": 7932,
            "y": 1550,
            "size": 46,
            "at": "l6:Next",
            "color": "accent"
          },
          {
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 7504,
            "y": 40,
            "at": "l2:sentence"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 9472,
            "y": 40,
            "at": "l3:two"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 1600,
            "y": 1130,
            "at": "l4:example"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo khi học; quy định thi có thể đổi — kiểm lại trang chính thức IELTS. Đề là đề luyện, nhân vật là minh hoạ.",
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
          "say": "So, five minutes of planning don't waste time. They keep thirty minutes of writing on one road.",
          "sub": "Tóm lại, năm phút lập ý không mất thời gian, mà giữ ba mươi phút viết đi đúng một hướng.",
          "keys": [
            "đi đúng một hướng"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "One: an opinion sentence first.",
          "sub": "Một: câu quan điểm trước tiên."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Two: two ideas, not five.",
          "sub": "Hai: hai ý, không phải năm."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Three: one specific example per idea, never invented numbers.",
          "sub": "Ba: mỗi ý một ví dụ cụ thể, không bịa số."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Try now: plan the traffic prompt in five steps, but with a different position from Thảo. Then check with the three questions.",
          "sub": "Làm ngay: lập dàn ý đề giao thông theo năm bước, chọn quan điểm khác Thảo, rồi soát bằng ba câu hỏi.",
          "keys": [
            "quan điểm khác Thảo"
          ]
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "det",
          "say": "Next up: turning each line into a clear body paragraph.",
          "sub": "Bài tiếp theo: biến từng dòng thành đoạn thân bài mạch lạc.",
          "keys": [
            "đoạn thân bài mạch lạc"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro,p20"
    },
    {
      "id": "s28",
      "module": "QUIZ-01",
      "data": {
        "q": "You type quickly, should you still keep a planning step?",
        "options": [
          "Yes, fast typing does not replace choosing a position and ideas first",
          "No, fast typists can think and write at the same time without risk",
          "No, planning is only useful for candidates writing on paper by hand"
        ],
        "correct": 0,
        "countdown": 5,
        "illus": "stopwatch",
        "why": "Bài nhấn mạnh điều cần giữ là luôn có bước lập ý và bước soát. Gõ nhanh không thay được việc chốt quan điểm."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "You type quickly, should you still keep a planning step?",
          "sub": "Bạn gõ nhanh, có nên giữ bước lập ý không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "Yes, fast typing does not replace choosing a position and ideas first.",
          "sub": "Bài nhấn mạnh điều cần giữ là luôn có bước lập ý và bước soát. Gõ nhanh không thay được việc chốt quan điểm."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Remember minute zero? Plan first, type second.",
          "sub": "Nhớ phút số không chứ? Lập ý trước, gõ sau."
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "questions[39]"
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
          "say": "Scratch paper first, keyboard second. Then try the forty questions below.",
          "sub": "Giấy nháp trước, bàn phím sau. Rồi thử bốn mươi câu hỏi bên dưới.",
          "face": "wink"
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI dựng theo hạt nhân kịch bản (#136) + biến thể #144: Đét đứng trái + bảng 10 ô theo MỘT BÀI THI THỬ 40 PHÚT của Thảo, tính theo phút (20:00 phút 0 gõ ngay → phút 15 hết ý, “Khoan đã!” tua về phút 0 → vì sao lập ý → phút 1 câu quan điểm → phút 2 hai ý → phút 3 ví dụ → phút 4 dàn ý mẫu → phút 5 soát, Dũng ý ô nhiễm → 30 phút viết → phút 35–40 soát, khép vòng). Mở HOOK-20: đáp án trước “5 phút: 1 câu quan điểm, 2 ý, mỗi ý 1 ví dụ” + lưu ý gợi ý luyện tập. Nhân vật: Thảo (chính, vai Quân), Dũng (vai Phương) — w145/_series/ielts-writing-task2-takers.md. Cảnh ngắt nhịp: BRK-08 (bốn mươi phút), BRK-04 (năm ý / hai ý), BRK-07 (rehook lệch đề), BRK-03 (30 phút viết). Tục ngữ: “Cẩn tắc vô áy náy”.",
  "loop": {
    "open": "s01",
    "close": "s21"
  }
};
