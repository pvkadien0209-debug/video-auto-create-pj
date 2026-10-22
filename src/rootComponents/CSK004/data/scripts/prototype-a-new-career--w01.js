// prototype-a-new-career--w01 — dựng bằng bang-trang-kit (#136)
export default {
  "schema": "detpro.video-script/0.2",
  "id": "prototype-a-new-career--w01",
  "hook": "HOOK-22",
  "unit": {
    "audience": "career-changers-over-35",
    "slug": "prototype-a-new-career",
    "door": "kien-thuc",
    "level": "B1",
    "title": "Thử một nghề mới trước khi bỏ việc bằng cách nào?",
    "series": "Đổi nghề tuổi 35 mà không đánh cược cả nhà — cho người đi làm lâu năm muốn rẽ hướng"
  },
  "format": "W",
  "mode": "text",
  "narrator": "det",
  "audio": {
    "sfxPack": "detpro-1",
    "sfxOff": [
      "but-viet"
    ]
  },
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
          },
          {
            "at": "l2",
            "fit": [
              "a-v"
            ],
            "zoom": 1.35,
            "ms": 600
          },
          {
            "at": "l3",
            "fit": "A",
            "ms": 600
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
                  "face": "thinking"
                }
              ],
              "props": [
                "mobile-phone",
                "crescent-moon"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1",
            "caption": "Tối thứ Hai · tuần 1 · ghế sofa",
            "icon": "mobile-phone"
          },
          {
            "id": "a-msg",
            "t": "text",
            "text": "“Lan ơi, bên em có…”",
            "x": 60,
            "y": 120,
            "size": 64,
            "at": "l2:Lan",
            "color": "coral"
          },
          {
            "id": "a-stop",
            "t": "text",
            "text": "Khoan bấm gửi!",
            "x": 60,
            "y": 260,
            "size": 72,
            "at": "l3:send",
            "color": "accent",
            "hl": [
              {
                "text": "Khoan",
                "at": "l3:Hold"
              }
            ]
          },
          {
            "id": "a-ph",
            "t": "illus",
            "name": "mobile-phone-with-arrow",
            "x": 60,
            "y": 380,
            "size": 120,
            "at": "l3:send"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Dũng, thirty-eight, is texting someone who works in the job he dreams about.",
          "sub": "Dũng, 38 tuổi, đang nhắn cho một người làm đúng cái nghề anh đang mơ."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Lan, does your company have any...",
          "sub": "Lan ơi, bên em có…",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Hold it! Don't hit send yet. We'll finish that message in a minute.",
          "sub": "Khoan! Đừng bấm gửi vội. Lát nữa mình viết nốt tin nhắn này.",
          "keys": [
            "Đừng bấm gửi vội"
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
      "ref": "intro,p5"
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
          }
        ],
        "items": [
          {
            "id": "a-prev",
            "t": "text",
            "text": "Bài trước: “mình có hợp đào tạo?”",
            "x": 60,
            "y": 540,
            "size": 40,
            "at": "l1:question",
            "color": "muted"
          },
          {
            "id": "a-ca",
            "t": "text",
            "text": "“Trăm nghe không bằng một thấy”",
            "x": 60,
            "y": 620,
            "size": 48,
            "at": "l2:hundred",
            "color": "accent",
            "hl": [
              {
                "text": "một thấy",
                "at": "l2:seeing"
              }
            ]
          },
          {
            "id": "a-ca2",
            "t": "text",
            "text": "“trăm thấy không bằng một làm”",
            "x": 90,
            "y": 690,
            "size": 48,
            "at": "l2:doing",
            "color": "accent",
            "hl": [
              {
                "text": "một làm",
                "at": "l2:doing"
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
          "say": "Last time, Dũng's journal gave him one question: do I fit training?",
          "sub": "Lần trước, nhật ký cho Dũng một câu hỏi: mình có hợp nghề đào tạo không?",
          "keys": [
            "hợp nghề đào tạo"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Our elders say: hearing a hundred times beats nothing, seeing once beats hearing, and doing once beats seeing.",
          "sub": "Ông bà dạy: “Trăm nghe không bằng một thấy, trăm thấy không bằng một làm.”",
          "keys": [
            "một làm"
          ]
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
            "text": "Thử nghề mới trước khi bỏ việc?",
            "x": 2018,
            "y": 24,
            "size": 84,
            "at": "l1:test",
            "hl": [
              {
                "text": "trước khi bỏ việc",
                "at": "l1:before"
              }
            ]
          },
          {
            "id": "b-no",
            "t": "text",
            "text": "Nộp đơn rồi mới biết",
            "x": 2028,
            "y": 160,
            "size": 52,
            "at": "l2:quit",
            "color": "muted"
          },
          {
            "id": "b-nox",
            "t": "strike",
            "over": "b-no",
            "at": "l2:But"
          },
          {
            "id": "b-yes",
            "t": "text",
            "text": "Làm bản mẫu, vẫn giữ việc",
            "x": 2688,
            "y": 160,
            "size": 56,
            "at": "l2:prototypes",
            "color": "accent",
            "hl": [
              {
                "text": "bản mẫu",
                "at": "l2:prototypes"
              }
            ]
          },
          {
            "id": "b-pal",
            "t": "illus",
            "name": "artist-palette",
            "x": 2028,
            "y": 260,
            "size": 100,
            "at": "l3:designers"
          },
          {
            "id": "b-des",
            "t": "text",
            "text": "Nhà thiết kế: mô hình rẻ trước",
            "x": 2148,
            "y": 280,
            "size": 44,
            "at": "l3:cheap",
            "hl": [
              {
                "text": "mô hình rẻ",
                "at": "l3:cheap model"
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
          "say": "So how do you test a new career, before you quit your job?",
          "sub": "Vậy thử một nghề mới thế nào, trước khi bỏ việc?",
          "keys": [
            "trước khi bỏ việc"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Not quit, then find out. But build small prototypes, while you keep your job.",
          "sub": "Không phải nộp đơn rồi mới biết. Mà là làm những bản mẫu nhỏ, trong lúc vẫn giữ việc.",
          "keys": [
            "bản mẫu nhỏ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Designing Your Life borrows this from designers: build a cheap model before the real thing.",
          "sub": "Sách Designing Your Life mượn từ nhà thiết kế: làm thử một mô hình rẻ trước khi sản xuất thật.",
          "keys": [
            "mô hình rẻ"
          ]
        }
      ],
      "ref": "intro,p1"
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
            "id": "b-r1",
            "t": "text",
            "text": "1 bản mẫu = 1 câu hỏi",
            "x": 2028,
            "y": 400,
            "size": 52,
            "at": "l1:one",
            "color": "accent",
            "hl": [
              {
                "text": "1 câu hỏi",
                "at": "l1:question"
              }
            ]
          },
          {
            "id": "b-r2",
            "t": "text",
            "text": "Thất bại sớm > lý thuyết chậm",
            "x": 2028,
            "y": 480,
            "size": 46,
            "at": "l1:fail",
            "hl": [
              {
                "text": "Thất bại sớm",
                "at": "l1:fail early"
              }
            ]
          },
          {
            "id": "b-k1",
            "t": "box",
            "x": 2028,
            "y": 590,
            "w": 700,
            "h": 120,
            "at": "l2:conversations",
            "stroke": 5,
            "color": "accent"
          },
          {
            "id": "b-k1t",
            "t": "text",
            "text": "① Trò chuyện",
            "x": 2068,
            "y": 610,
            "size": 56,
            "at": "l2:conversations+200"
          },
          {
            "id": "b-k2",
            "t": "box",
            "x": 2788,
            "y": 590,
            "w": 700,
            "h": 120,
            "at": "l2:experiences",
            "stroke": 5
          },
          {
            "id": "b-k2t",
            "t": "text",
            "text": "② Trải nghiệm",
            "x": 2828,
            "y": 610,
            "size": 56,
            "at": "l2:experiences+200"
          },
          {
            "id": "b-src",
            "t": "text",
            "text": "Theo tóm tắt sách của Antoine Buteau",
            "x": 2788,
            "y": 495,
            "size": 26,
            "at": "l1",
            "font": "base",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Two rules: each prototype answers one specific question. And fail early to learn, instead of slow theory.",
          "sub": "Hai nguyên tắc: mỗi bản mẫu trả lời một câu hỏi cụ thể. Và thất bại sớm để học, thay vì nghiên cứu lý thuyết chậm chạp.",
          "keys": [
            "một câu hỏi cụ thể"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Two kinds: conversations with people in the job, and real experiences. Two months, side by side with work.",
          "sub": "Hai loại: trò chuyện với người trong nghề, và trải nghiệm thật. Hai tháng, song song với công việc.",
          "keys": [
            "Hai loại"
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
            "text": "Tuần 1 · Xin lời kể",
            "x": 3986,
            "y": 24,
            "size": 84,
            "at": "l1:Week one",
            "hl": [
              {
                "text": "lời kể",
                "at": "l2:not a job"
              }
            ]
          },
          {
            "id": "c-30",
            "t": "text",
            "text": "30 phút",
            "x": 3996,
            "y": 150,
            "size": 110,
            "at": "l2:thirty",
            "color": "accent",
            "hl": [
              {
                "text": "30 phút",
                "at": "l2:minutes"
              }
            ]
          },
          {
            "id": "c-f",
            "t": "text",
            "text": "một ngày làm việc · con đường · ngành",
            "x": 3996,
            "y": 300,
            "size": 38,
            "at": "l3:daily"
          },
          {
            "id": "c-op",
            "t": "text",
            "text": "Có việc? Để họ tự nhắc",
            "x": 3996,
            "y": 370,
            "size": 44,
            "at": "l3:mention",
            "color": "muted"
          },
          {
            "id": "c-map",
            "t": "illus",
            "name": "world-map",
            "x": 5136,
            "y": 180,
            "size": 220,
            "at": "l4:directions"
          },
          {
            "id": "c-dir",
            "t": "text",
            "text": "Hỏi đường, không săn việc",
            "x": 4936,
            "y": 430,
            "size": 52,
            "at": "l4:directions",
            "color": "accent",
            "hl": [
              {
                "text": "Hỏi đường",
                "at": "l4:directions"
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
          "say": "Week one. The cheapest prototype is a conversation.",
          "sub": "Tuần một. Bản mẫu rẻ nhất là một cuộc trò chuyện.",
          "keys": [
            "một cuộc trò chuyện"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask for about thirty minutes, not a job.",
          "sub": "Xin một cuộc nói chuyện khoảng ba mươi phút, chứ không xin việc.",
          "keys": [
            "không xin việc"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Focus on their daily work, their path and their field. If there's an opening, let them mention it.",
          "sub": "Tập trung vào công việc hằng ngày, con đường nghề và ngành của họ. Có cơ hội việc làm thì để họ tự nhắc."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Think of it as asking for directions, not hunting for a job.",
          "sub": "Hãy nghĩ như đi hỏi đường, không phải đi săn việc.",
          "keys": [
            "hỏi đường"
          ]
        }
      ],
      "ref": "p3"
    },
    {
      "id": "s05",
      "module": "BRK-04",
      "data": {
        "title": "Tin nhắn của Dũng",
        "labels": [
          "Trước",
          "Sau"
        ],
        "wrong": "Bên em có tuyển người không?",
        "right": "Cho anh xin 30 phút, nghe em kể một ngày làm việc",
        "wrongIllus": "briefcase",
        "rightIllus": "hot-beverage"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Old ending: any jobs for me?",
          "sub": "Đuôi cũ: bên em có tuyển người không?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "New ending: thirty minutes, your day.",
          "sub": "Đuôi mới: xin 30 phút, nghe kể một ngày.",
          "keys": [
            "30 phút"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "nhan"
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
            "at": "l1",
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
            "id": "c-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 4816,
            "y": 150,
            "w": 800,
            "data": {
              "set": "home",
              "label": "Tin nhắn sau khi sửa",
              "actor": {
                "id": "dung",
                "side": "left"
              },
              "contact": {
                "name": "Lan (đào tạo nội bộ)",
                "illus": "woman-teacher"
              },
              "messages": [
                {
                  "from": "me",
                  "text": "Anh làm mua hàng 13 năm, đang tìm hiểu nghề đào tạo nội bộ. Cho anh xin 30 phút cà phê tuần sau, nghe em kể một ngày làm việc.",
                  "at": "l1"
                },
                {
                  "from": "them",
                  "text": "Dạ được anh, chiều thứ Năm nhé!",
                  "at": "l3"
                }
              ]
            },
            "at": "l1",
            "caption": "Gửi lúc 21:40 · trả lời sau 5 phút",
            "icon": "mobile-phone"
          },
          {
            "id": "c-who",
            "t": "text",
            "text": "Ai · bao lâu · nghe gì",
            "x": 3996,
            "y": 480,
            "size": 34,
            "at": "l2:who",
            "hl": [
              {
                "text": "bao lâu",
                "at": "l2:how long"
              }
            ]
          },
          {
            "id": "c-cl",
            "t": "text",
            "text": "→ dễ nhận lời",
            "x": 3996,
            "y": 550,
            "size": 48,
            "at": "l2:easy",
            "color": "accent"
          },
          {
            "id": "c-3",
            "t": "text",
            "text": "CareerLink: 3–5 người, 2–4 tuần",
            "x": 3996,
            "y": 640,
            "size": 40,
            "at": "l4:three",
            "hl": [
              {
                "text": "3–5 người",
                "at": "l4:five people"
              }
            ]
          },
          {
            "id": "c-rel",
            "t": "text",
            "text": "Cơ hội: phần lớn qua quan hệ",
            "x": 3996,
            "y": 705,
            "size": 36,
            "at": "l5:relationships",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "I've done purchasing for thirteen years and I'm exploring internal training. Could I have thirty minutes over coffee next week, to hear about your day?",
          "sub": "Anh làm mua hàng mười ba năm, đang tìm hiểu nghề đào tạo nội bộ. Cho anh xin 30 phút cà phê tuần sau, nghe em kể một ngày làm việc.",
          "face": "thinking",
          "pose": "phone"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Who he is, how long he asks for, what he wants to hear. Clear, so it's easy to say yes.",
          "sub": "Mình là ai, xin bao lâu, muốn nghe gì. Rõ ràng nên người nhận dễ nhận lời.",
          "keys": [
            "dễ nhận lời"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Sure! Thursday afternoon?",
          "sub": "Dạ được anh, chiều thứ Năm nhé!"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "CareerLink suggests two to four weeks of these, with three to five people in the field.",
          "sub": "CareerLink gợi ý dành hai đến bốn tuần phỏng vấn thông tin với ba đến năm người trong ngành.",
          "keys": [
            "ba đến năm người"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Their thirty-five article adds: talk to at least three people, since good chances mostly come through relationships.",
          "sub": "Bài về tuổi 35 thêm: nói chuyện với ít nhất ba người, vì phần lớn cơ hội tốt đến qua quan hệ."
        }
      ],
      "ref": "p4,p5,p6"
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
            "at": "l5",
            "fit": "D",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "d-t",
            "t": "text",
            "text": "Tuần 2 · 30 phút cà phê",
            "x": 5954,
            "y": 24,
            "size": 84,
            "at": "l1:Thursday",
            "hl": [
              {
                "text": "30 phút",
                "at": "l1:Thursday"
              }
            ]
          },
          {
            "id": "d-v",
            "t": "vignette",
            "module": "SCENE-01",
            "x": 6784,
            "y": 150,
            "w": 800,
            "data": {
              "set": "cafe",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "hold"
                },
                {
                  "id": "lan",
                  "side": "right",
                  "enter": "pop",
                  "at": "l1",
                  "pose": "explain",
                  "face": "happy"
                }
              ],
              "props": [
                "hot-beverage",
                "notebook"
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
                  "shot": "E-SHOT-10",
                  "on": "dung",
                  "move": "cut"
                },
                {
                  "at": "l5",
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:Lan",
            "caption": "Chiều thứ Năm · quán cà phê",
            "icon": "hot-beverage"
          },
          {
            "id": "d-c0",
            "t": "box",
            "x": 5964,
            "y": 170,
            "w": 44,
            "h": 44,
            "at": "l2:normal day",
            "stroke": 5
          },
          {
            "id": "d-k0",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 156,
            "size": 56,
            "at": "l2:normal day+600",
            "color": "accent"
          },
          {
            "id": "d-l0",
            "t": "text",
            "text": "Một ngày gồm những việc gì?",
            "x": 6030,
            "y": 160,
            "size": 38,
            "at": "l2:normal day+200"
          },
          {
            "id": "d-c1",
            "t": "box",
            "x": 5964,
            "y": 240,
            "w": 44,
            "h": 44,
            "at": "l2:favourite",
            "stroke": 5
          },
          {
            "id": "d-k1",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 226,
            "size": 56,
            "at": "l2:favourite+600",
            "color": "accent"
          },
          {
            "id": "d-l1",
            "t": "text",
            "text": "Thích nhất, mệt nhất?",
            "x": 6030,
            "y": 230,
            "size": 38,
            "at": "l2:favourite+200"
          },
          {
            "id": "d-c2",
            "t": "box",
            "x": 5964,
            "y": 310,
            "w": 44,
            "h": 44,
            "at": "l4:path",
            "stroke": 5
          },
          {
            "id": "d-k2",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 296,
            "size": 56,
            "at": "l4:path+600",
            "color": "accent"
          },
          {
            "id": "d-l2",
            "t": "text",
            "text": "Vào nghề bằng đường nào?",
            "x": 6030,
            "y": 300,
            "size": 38,
            "at": "l4:path+200"
          },
          {
            "id": "d-c3",
            "t": "box",
            "x": 5964,
            "y": 380,
            "w": 44,
            "h": 44,
            "at": "l4:lack",
            "stroke": 5
          },
          {
            "id": "d-k3",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 366,
            "size": 56,
            "at": "l4:lack+600",
            "color": "accent"
          },
          {
            "id": "d-l3",
            "t": "text",
            "text": "Người chuyển ngành hay thiếu gì?",
            "x": 6030,
            "y": 370,
            "size": 38,
            "at": "l4:lack+200"
          },
          {
            "id": "d-c4",
            "t": "box",
            "x": 5964,
            "y": 450,
            "w": 44,
            "h": 44,
            "at": "l5:else",
            "stroke": 5
          },
          {
            "id": "d-k4",
            "t": "text",
            "text": "✓",
            "x": 5969,
            "y": 436,
            "size": 56,
            "at": "l5:else+600",
            "color": "accent"
          },
          {
            "id": "d-l4",
            "t": "text",
            "text": "Nên hỏi thêm ai?",
            "x": 6030,
            "y": 440,
            "size": 38,
            "at": "l5:else+200"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Week two, Thursday. This is Lan, a trainer at a retail company, half Dũng's age and twice as calm.",
          "sub": "Tuần hai, chiều thứ Năm. Đây là Lan, chuyên viên đào tạo nội bộ ở một công ty bán lẻ, trẻ hơn Dũng mà điềm tĩnh hơn hẳn.",
          "keys": [
            "Lan"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "What does a normal day look like for you? Your favourite part, and the most tiring one?",
          "sub": "Một ngày làm việc bình thường của em gồm những gì? Việc em thích nhất, việc mệt nhất?",
          "pose": "explain"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "lan",
          "say": "Best part: when a new person finally gets it. Tiring part: the same lesson, again and again.",
          "sub": "Vui nhất là lúc người mới hiểu ra. Mệt nhất là một bài giảng đi giảng lại mãi.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "dung",
          "say": "How did you get into this path? And what do people switching in usually lack?",
          "sub": "Em vào nghề bằng con đường nào? Người chuyển từ nghề khác sang thường thiếu gì?",
          "face": "thinking"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Last one: who else should I talk to?",
          "sub": "Câu cuối: em gợi ý anh nên nói chuyện thêm với ai?"
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 900
        }
      ],
      "ref": "p7,p8"
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
            "id": "d-note",
            "t": "text",
            "text": "Ghi ngay sau buổi gặp",
            "x": 5964,
            "y": 540,
            "size": 40,
            "at": "l1:notes",
            "hl": [
              {
                "text": "Ghi ngay",
                "at": "l1:right after"
              }
            ]
          },
          {
            "id": "d-3",
            "t": "text",
            "text": "3 bất ngờ, 1 câu mở",
            "x": 5964,
            "y": 615,
            "size": 44,
            "at": "l2:surprises",
            "color": "accent",
            "hl": [
              {
                "text": "3 bất ngờ",
                "at": "l2:three"
              }
            ]
          },
          {
            "id": "d-k",
            "t": "text",
            "text": "Hỏi một ngày thật > “nghề có tốt?”",
            "x": 5964,
            "y": 700,
            "size": 40,
            "at": "l3:real day"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Take notes right after. Small details, like hours, pressure and repetition, are the data you need.",
          "sub": "Ghi chú ngay sau buổi gặp. Chi tiết nhỏ như giờ giấc, áp lực, việc lặp lại mới là dữ liệu cần.",
          "keys": [
            "Ghi chú ngay"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Dũng writes three surprises, and one open question.",
          "sub": "Dũng ghi ba điều bất ngờ, và một câu hỏi còn bỏ ngỏ.",
          "keys": [
            "ba điều bất ngờ"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Asking about a real day beats asking “is this job good?”",
          "sub": "Hỏi về một ngày làm việc thật cho nhiều dữ liệu hơn câu “nghề này có tốt không”.",
          "keys": [
            "một ngày làm việc thật"
          ]
        }
      ],
      "ref": "p7,p8,p9"
    },
    {
      "id": "s09",
      "module": "BRK-07",
      "data": {
        "question": "Nghe kể thì hay. Nhưng Dũng có thích đứng lớp thật không?",
        "illus": "thinking-face"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "But wait.",
          "sub": "Nhưng khoan."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Great stories. But does Dũng actually like standing in front of a class?",
          "sub": "Nghe kể thì hay. Nhưng Dũng có thích đứng lớp thật không?",
          "keys": [
            "thích đứng lớp"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l2",
          "key": "cau-hoi"
        }
      ],
      "ref": "p11"
    },
    {
      "id": "s10",
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
            "text": "Tháng 1 · Làm thử một phần nghề",
            "x": 7922,
            "y": 24,
            "size": 84,
            "at": "l1:Month one",
            "hl": [
              {
                "text": "Làm thử",
                "at": "l1:experience"
              }
            ]
          },
          {
            "id": "e-eye",
            "t": "illus",
            "name": "eyes",
            "x": 7932,
            "y": 160,
            "size": 100,
            "at": "l2:shadow"
          },
          {
            "id": "e-sh",
            "t": "text",
            "text": "Đi theo quan sát người làm",
            "x": 8052,
            "y": 175,
            "size": 44,
            "at": "l2:shadow"
          },
          {
            "id": "e-ham",
            "t": "illus",
            "name": "hammer-and-wrench",
            "x": 7932,
            "y": 290,
            "size": 100,
            "at": "l2:project"
          },
          {
            "id": "e-pr",
            "t": "text",
            "text": "Làm một dự án nhỏ",
            "x": 8052,
            "y": 305,
            "size": 44,
            "at": "l2:project"
          },
          {
            "id": "e-cl",
            "t": "text",
            "text": "Việc tự do · tình nguyện",
            "x": 7932,
            "y": 430,
            "size": 42,
            "at": "l3:freelance",
            "color": "muted"
          },
          {
            "id": "e-cl2",
            "t": "text",
            "text": "Nhiệm vụ liên quan ở công ty",
            "x": 7932,
            "y": 495,
            "size": 42,
            "at": "l3:current",
            "color": "accent",
            "hl": [
              {
                "text": "ở công ty",
                "at": "l3:current company"
              }
            ]
          },
          {
            "id": "e-pf",
            "t": "text",
            "text": "2–3 sản phẩm → hồ sơ trực tuyến",
            "x": 8772,
            "y": 180,
            "size": 44,
            "at": "l4:portfolio",
            "hl": [
              {
                "text": "2–3 sản phẩm",
                "at": "l4:three"
              }
            ]
          },
          {
            "id": "e-tools",
            "t": "text",
            "text": "Google Sites · Notion · Behance",
            "x": 8772,
            "y": 260,
            "size": 38,
            "at": "l4:Notion",
            "color": "muted"
          },
          {
            "id": "e-cv",
            "t": "text",
            "text": "→ gắn đường dẫn vào CV",
            "x": 8772,
            "y": 330,
            "size": 42,
            "at": "l4:CV"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Month one. Prototype two: experience. Do a real piece of the job.",
          "sub": "Tháng một. Loại bản mẫu thứ hai: trải nghiệm. Làm thử một phần thật của nghề.",
          "keys": [
            "trải nghiệm"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Shadow someone at work, or do a small project.",
          "sub": "Đi theo quan sát một người làm việc, hoặc làm một dự án nhỏ."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "CareerLink adds: freelance jobs, volunteer projects, or related tasks at your current company.",
          "sub": "CareerLink thêm: nhận việc tự do, dự án tình nguyện, hoặc xin nhiệm vụ liên quan ngay ở công ty hiện tại.",
          "keys": [
            "ngay ở công ty hiện tại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "And gather two or three things you made into a small portfolio, on Google Sites, Notion or Behance, linked in your CV.",
          "sub": "Gom hai, ba sản phẩm tự làm thành hồ sơ nhỏ trên Google Sites, Notion hay Behance, gắn đường dẫn vào CV."
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "So, what does Dũng do first?",
          "sub": "Vậy Dũng làm gì trước?"
        }
      ],
      "ref": "p10"
    },
    {
      "id": "s11",
      "module": "DLG-01",
      "data": {
        "set": "office",
        "label": "Đầu tháng 1 · giờ nghỉ trưa",
        "actors": [
          {
            "id": "dung",
            "side": "left",
            "pose": "phone",
            "face": "happy"
          },
          {
            "id": "binh",
            "side": "right"
          }
        ],
        "verdict": {
          "ok": false,
          "label": "Đăng ký ngay khoá dài, đắt tiền",
          "why": "Trả tiền cho cả con đường khi chưa biết mình có thích đứng lớp không.",
          "rule": "Thử một phần thật trước khi trả tiền cả con đường"
        }
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "dung",
          "say": "A long training course! Paying today!",
          "sub": "Khoá đào tạo dài, đắt! Đóng tiền luôn hôm nay!",
          "face": "happy",
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
          "say": "Buying the whole road, before one step?",
          "sub": "Mua cả con đường khi chưa đi thử một bước.",
          "keys": [
            "Mua cả con đường"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Rewind! Dũng asks his boss, Bác Bình.",
          "sub": "Tua lại! Dũng sang hỏi bác Bình, trưởng phòng mua hàng.",
          "phase": "redo",
          "keys": [
            "bác Bình"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "dung",
          "say": "Could I guide new staff for a few months? And teach one evening class?",
          "sub": "Bác cho cháu hướng dẫn nhân viên mới vài tháng nhé? Cháu dạy tình nguyện thêm một lớp tin học buổi tối.",
          "phase": "redo",
          "pose": "explain"
        },
        {
          "id": "l6",
          "lang": "en",
          "who": "binh",
          "say": "Fine. Try it with the next new hires.",
          "sub": "Được. Cháu thử với lứa mới tới.",
          "phase": "redo",
          "face": "happy"
        },
        {
          "id": "l7",
          "lang": "en",
          "who": "det",
          "say": "No certificate yet. But a cheap answer.",
          "sub": "Chưa có chứng chỉ ngay. Nhưng có câu trả lời, mà rẻ.",
          "phase": "redo",
          "keys": [
            "mà rẻ"
          ]
        }
      ],
      "transition": {
        "type": "whip",
        "frames": 5,
        "dir": 1
      },
      "ref": "p11"
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
            "text": "Thử một phần thật",
            "x": 7932,
            "y": 600,
            "size": 56,
            "at": "l1:real part",
            "color": "accent",
            "hl": [
              {
                "text": "một phần thật",
                "at": "l1:real part"
              }
            ]
          },
          {
            "id": "e-k2",
            "t": "text",
            "text": "trước khi trả tiền cả con đường",
            "x": 7932,
            "y": 680,
            "size": 42,
            "at": "l1:whole"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Try a real part of the job, before you pay for the whole path.",
          "sub": "Hãy thử một phần thật của nghề, trước khi trả tiền cho cả con đường.",
          "keys": [
            "một phần thật của nghề"
          ]
        }
      ],
      "ref": "p12"
    },
    {
      "id": "s13",
      "module": "BRK-06",
      "data": {
        "title": "Đăng ký hết cùng lúc?",
        "items": [
          {
            "illus": "books",
            "text": "Khoá học"
          },
          {
            "illus": "laptop",
            "text": "Lớp trực tuyến"
          },
          {
            "illus": "busts-in-silhouette",
            "text": "Câu lạc bộ"
          },
          {
            "illus": "mobile-phone",
            "text": "Ứng dụng"
          },
          {
            "illus": "spiral-calendar",
            "text": "Hội thảo"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Courses, classes, clubs, apps, talks, all at once?",
          "sub": "Khoá học, lớp mạng, câu lạc bộ, ứng dụng, hội thảo, cùng lúc?"
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "That's not testing fast. That's burning out fast.",
          "sub": "Đó không phải thử nhanh. Đó là kiệt sức nhanh.",
          "keys": [
            "kiệt sức nhanh"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "whoosh"
        }
      ],
      "ref": "p14"
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
            "at": "l4",
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
            "text": "Tháng 1–2 · Song song, đừng vắt kiệt",
            "x": 50,
            "y": 1114,
            "size": 84,
            "at": "l1:parallel",
            "hl": [
              {
                "text": "đừng vắt kiệt",
                "at": "l1:wringing"
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
              "set": "home",
              "actors": [
                {
                  "id": "dung",
                  "side": "left",
                  "pose": "phone",
                  "face": "worried"
                },
                {
                  "id": "thao",
                  "side": "right",
                  "enter": "pop",
                  "at": "l4",
                  "pose": "explain"
                }
              ],
              "props": [
                "spiral-calendar"
              ],
              "camera": [
                {
                  "at": "l4",
                  "shot": "E-SHOT-06",
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
            "at": "l4",
            "caption": "Tối thứ Sáu · lịch tuần sau",
            "icon": "spiral-calendar"
          },
          {
            "id": "f-12",
            "t": "text",
            "text": "Chỉ 1–2 kỹ năng bổ trợ",
            "x": 60,
            "y": 1250,
            "size": 50,
            "at": "l2:one or two",
            "color": "accent",
            "hl": [
              {
                "text": "1–2 kỹ năng",
                "at": "l2:two skills"
              }
            ]
          },
          {
            "id": "f-sp",
            "t": "text",
            "text": "Học dàn trải",
            "x": 60,
            "y": 1340,
            "size": 46,
            "at": "l2:spreading",
            "color": "muted"
          },
          {
            "id": "f-spx",
            "t": "strike",
            "over": "f-sp",
            "at": "l2:spreading+400"
          },
          {
            "id": "f-g",
            "t": "text",
            "text": "Giữ: sức khoẻ · vui chơi · tình thân",
            "x": 60,
            "y": 1430,
            "size": 38,
            "at": "l3:health"
          },
          {
            "id": "f-fam",
            "t": "text",
            "text": "→ lịch chừa chỗ cho gia đình",
            "x": 60,
            "y": 1500,
            "size": 42,
            "at": "l5:family",
            "color": "accent"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Months one and two. Testing runs parallel to your main job, without wringing yourself dry.",
          "sub": "Tháng một, tháng hai. Thử nghề chạy song song với việc chính, mà không vắt kiệt mình.",
          "keys": [
            "không vắt kiệt mình"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "CareerLink: pick one or two skills that support your expertise. Avoid spreading yourself thin.",
          "sub": "CareerLink khuyên: chọn một hoặc hai kỹ năng bổ trợ chuyên môn sẵn có. Tránh học dàn trải.",
          "keys": [
            "một hoặc hai kỹ năng"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Remember the four gauges? Health, play and love still need keeping.",
          "sub": "Nhớ bảng đồng hồ bốn mặt chứ? Sức khoẻ, vui chơi, tình thân vẫn cần được giữ."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "thao",
          "say": "Saturday evening belongs to Bé Bin. Put that in your calendar first.",
          "sub": "Tối thứ Bảy là của Bé Bin. Anh ghi cái đó vào lịch trước đã.",
          "pose": "explain"
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Thảo, the family's chief accountant, has spoken. The schedule leaves room for family.",
          "sub": "Thảo, kế toán trưởng của gia đình, đã lên tiếng. Lịch thử nghề phải chừa chỗ cho gia đình.",
          "keys": [
            "chừa chỗ cho gia đình"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l4",
          "key": "pop",
          "offsetMs": 500
        }
      ],
      "ref": "p13"
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
            "id": "f-5",
            "t": "text",
            "text": "5 việc cùng lúc = mệt + mù",
            "x": 60,
            "y": 1610,
            "size": 46,
            "at": "l1:five",
            "color": "coral"
          },
          {
            "id": "f-k",
            "t": "text",
            "text": "Ít thử nghiệm, rõ câu hỏi",
            "x": 60,
            "y": 1700,
            "size": 54,
            "at": "l2:Fewer",
            "color": "accent",
            "hl": [
              {
                "text": "rõ câu hỏi",
                "at": "l2:clear questions"
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
          "say": "Five things at once? You get tired, and can't tell which test gave which result.",
          "sub": "Làm năm việc cùng lúc? Vừa mệt, vừa khó biết việc nào cho kết quả gì.",
          "keys": [
            "khó biết việc nào cho kết quả gì"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Fewer tests with clear questions beat many tests with no idea what you're checking.",
          "sub": "Ít thử nghiệm mà rõ câu hỏi tốt hơn nhiều thử nghiệm mà không biết mình đang kiểm gì.",
          "keys": [
            "rõ câu hỏi"
          ]
        }
      ],
      "ref": "p14,p15"
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
            "text": "Cuối tháng 2 · Đọc kết quả",
            "x": 2018,
            "y": 1114,
            "size": 84,
            "at": "l1:month two",
            "hl": [
              {
                "text": "Đọc kết quả",
                "at": "l1:read"
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
              "set": "campus",
              "actors": [
                {
                  "id": "dung",
                  "side": "center",
                  "pose": "explain",
                  "face": "worried"
                }
              ],
              "props": [
                "desktop-computer"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:class",
            "caption": "Lớp tin học buổi tối · buổi thứ ba",
            "icon": "desktop-computer"
          },
          {
            "id": "g-log",
            "t": "text",
            "text": "Nhật ký thất bại:",
            "x": 2028,
            "y": 1250,
            "size": 50,
            "at": "l3:failure log",
            "hl": [
              {
                "text": "thất bại",
                "at": "l3:failure"
              }
            ]
          },
          {
            "id": "g-f0",
            "t": "text",
            "text": "Lỗi vặt",
            "x": 2028,
            "y": 1330,
            "size": 44,
            "at": "l3:screwups",
            "color": "ink"
          },
          {
            "id": "g-g0",
            "t": "text",
            "text": "sửa ngay",
            "x": 2488,
            "y": 1340,
            "size": 34,
            "at": "l3:screwups+200",
            "color": "muted"
          },
          {
            "id": "g-f1",
            "t": "text",
            "text": "Điểm yếu lặp lại",
            "x": 2028,
            "y": 1420,
            "size": 44,
            "at": "l3:weaknesses",
            "color": "ink"
          },
          {
            "id": "g-g1",
            "t": "text",
            "text": "chấp nhận, đi vòng",
            "x": 2488,
            "y": 1430,
            "size": 34,
            "at": "l3:weaknesses+200",
            "color": "muted"
          },
          {
            "id": "g-f2",
            "t": "text",
            "text": "Cơ hội phát triển",
            "x": 2028,
            "y": 1510,
            "size": 44,
            "at": "l3:growth",
            "color": "accent"
          },
          {
            "id": "g-g2",
            "t": "text",
            "text": "sửa được",
            "x": 2488,
            "y": 1520,
            "size": 34,
            "at": "l3:growth+200",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "End of month two. Time to read the results. Evening class, session three.",
          "sub": "Cuối tháng hai. Đến lúc đọc kết quả. Lớp tin học buổi tối, buổi thứ ba."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "I went way too fast. The whole class looked lost.",
          "sub": "Mình giảng nhanh quá. Cả lớp ngơ ngác.",
          "face": "sad"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "The book says: build failure immunity. Keep a failure log: screwups, weaknesses, and growth opportunities.",
          "sub": "Sách khuyên tập “miễn dịch với thất bại”: ghi nhật ký thất bại, chia ba loại: lỗi vặt, điểm yếu lặp lại, cơ hội phát triển sửa được.",
          "keys": [
            "miễn dịch với thất bại"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Going too fast? A growth opportunity. Fixable. Learn the lesson, skip the self-blame.",
          "sub": "Giảng nhanh quá? Cơ hội phát triển, sửa được. Rút bài học, khỏi tự trách.",
          "keys": [
            "khỏi tự trách"
          ]
        }
      ],
      "ref": "p16"
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
            "id": "g-no",
            "t": "text",
            "text": "“Không hợp” vẫn tốt",
            "x": 2028,
            "y": 1650,
            "size": 40,
            "at": "l1:not for me",
            "color": "accent",
            "hl": [
              {
                "text": "vẫn tốt",
                "at": "l1:good result"
              }
            ]
          },
          {
            "id": "g-yr",
            "t": "text",
            "text": "→ tiết kiệm nhiều năm",
            "x": 2028,
            "y": 1730,
            "size": 46,
            "at": "l1:years",
            "hl": [
              {
                "text": "nhiều năm",
                "at": "l1:years"
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
          "say": "And a test that says “not for me” is still a good result. It saves you years.",
          "sub": "Một thử nghiệm cho thấy “mình không hợp” vẫn là kết quả tốt, vì nó tiết kiệm cho bạn nhiều năm.",
          "keys": [
            "vẫn là kết quả tốt"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Session four, I slowed down. Hands went up. I liked that.",
          "sub": "Buổi bốn, mình giảng chậm lại. Cả lớp giơ tay hỏi. Thích thật.",
          "face": "happy"
        }
      ],
      "ref": "p16"
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
            "at": "l4",
            "fit": "H",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "h-t",
            "t": "text",
            "text": "Lợi ích phụ · Thị trường ẩn",
            "x": 3986,
            "y": 1114,
            "size": 84,
            "at": "l1:bonus",
            "hl": [
              {
                "text": "Thị trường ẩn",
                "at": "l4:hidden"
              }
            ]
          },
          {
            "id": "h-v",
            "t": "vignette",
            "module": "SCENE-02",
            "x": 4816,
            "y": 1240,
            "w": 800,
            "data": {
              "set": "home",
              "label": "Lan nhắn lại",
              "actor": {
                "id": "dung",
                "side": "left"
              },
              "contact": {
                "name": "Lan (đào tạo nội bộ)",
                "illus": "woman-teacher"
              },
              "messages": [
                {
                  "from": "them",
                  "text": "Anh ơi, bên em sắp cần người hướng dẫn kho. Anh muốn nghe thử không?",
                  "at": "l2"
                },
                {
                  "from": "me",
                  "text": "Có chứ! Anh vẫn đang thử, kể anh nghe nhé.",
                  "at": "l3"
                }
              ]
            },
            "at": "l2",
            "caption": "Lan tự nhắc tới cơ hội",
            "icon": "mobile-phone"
          },
          {
            "id": "h-ice",
            "t": "illus",
            "name": "mountain",
            "x": 3996,
            "y": 1260,
            "size": 160,
            "at": "l4:hidden"
          },
          {
            "id": "h-hid",
            "t": "text",
            "text": "Phần lớn cơ hội: ẩn",
            "x": 4186,
            "y": 1280,
            "size": 48,
            "at": "l4:most",
            "color": "accent"
          },
          {
            "id": "h-qua",
            "t": "text",
            "text": "→ đến qua trò chuyện",
            "x": 4186,
            "y": 1350,
            "size": 44,
            "at": "l4:conversations"
          },
          {
            "id": "h-job",
            "t": "text",
            "text": "Trang đăng tin: tỉ lệ thấp",
            "x": 3996,
            "y": 1470,
            "size": 44,
            "at": "l5:job boards",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "A bonus. Remember: if there's an opening, let them mention it.",
          "sub": "Một lợi ích phụ. Nhớ không: có cơ hội thì để họ tự nhắc."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "lan",
          "say": "Our team will soon need someone to train warehouse staff. Want to hear more?",
          "sub": "Anh ơi, bên em sắp cần người hướng dẫn kho. Anh muốn nghe thử không?"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "dung",
          "say": "Absolutely! I'm still testing, but tell me more.",
          "sub": "Có chứ! Anh vẫn đang thử, kể anh nghe nhé.",
          "face": "happy"
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "The book summary says most opportunities sit in a hidden job market, reached through conversations.",
          "sub": "Bản tóm tắt sách nói phần lớn cơ hội nằm ở thị trường việc làm ẩn, tiếp cận qua trò chuyện.",
          "keys": [
            "thị trường việc làm ẩn"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Job boards alone? Low success rates.",
          "sub": "Chỉ tìm qua trang đăng tin? Tỉ lệ thành công thấp."
        }
      ],
      "ref": "p3,p17"
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
          }
        ],
        "items": [
          {
            "id": "i-t",
            "t": "text",
            "text": "Gom kết quả thành hướng đi",
            "x": 5954,
            "y": 1114,
            "size": 84,
            "at": "l1:results"
          },
          {
            "id": "i-1",
            "t": "text",
            "text": "Lan kể: một ngày thật ✓",
            "x": 5964,
            "y": 1250,
            "size": 46,
            "at": "l2:Lan"
          },
          {
            "id": "i-2",
            "t": "text",
            "text": "Hướng dẫn người mới: thích ✓",
            "x": 5964,
            "y": 1330,
            "size": 46,
            "at": "l2:new staff"
          },
          {
            "id": "i-3",
            "t": "text",
            "text": "Lớp tối: chậm lại thì ổn ✓",
            "x": 5964,
            "y": 1410,
            "size": 46,
            "at": "l2:slowed"
          },
          {
            "id": "i-4",
            "t": "text",
            "text": "Cơ hội ẩn: kho hàng ?",
            "x": 5964,
            "y": 1490,
            "size": 46,
            "at": "l3:warehouse",
            "color": "coral"
          },
          {
            "id": "i-ar",
            "t": "arrow",
            "from": [
              6604,
              1540
            ],
            "to": [
              7004,
              1390
            ],
            "at": "l4:directions"
          },
          {
            "id": "i-dir",
            "t": "text",
            "text": "Nhiều hướng để so",
            "x": 6954,
            "y": 1290,
            "size": 56,
            "at": "l4:directions",
            "color": "accent",
            "hl": [
              {
                "text": "Nhiều hướng",
                "at": "l4:different directions"
              }
            ]
          },
          {
            "id": "i-next",
            "t": "text",
            "text": "→ bài “Vẽ ba phương án”",
            "x": 6954,
            "y": 1390,
            "size": 40,
            "at": "l5:next",
            "color": "muted"
          }
        ]
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "After two months, Dũng has a pile of results.",
          "sub": "Sau hai tháng, Dũng có cả một chồng kết quả."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Lan's real day. Guiding new staff: he loves it. Evening class: fine, once he slowed down.",
          "sub": "Một ngày thật của Lan. Hướng dẫn người mới: rất thích. Lớp tối: ổn, khi đã giảng chậm lại."
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "And a warehouse training role, still a question mark.",
          "sub": "Và vị trí hướng dẫn kho, vẫn là dấu hỏi."
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Next, arrange the results into different directions to compare.",
          "sub": "Bước tiếp: sắp các kết quả thành những hướng đi khác nhau để so sánh.",
          "keys": [
            "những hướng đi khác nhau"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "That's our next video: three possible futures.",
          "sub": "Đó là bài tiếp theo: vẽ ba phương án tương lai."
        }
      ],
      "ref": "p17"
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
            "at": "l3",
            "fit": "J",
            "ms": 700
          }
        ],
        "items": [
          {
            "id": "j-t",
            "t": "text",
            "text": "Tối thứ Hai · hai tháng sau",
            "x": 7922,
            "y": 1114,
            "size": 84,
            "at": "l1:Monday"
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
                "mobile-phone",
                "crescent-moon"
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
                  "shot": "wide",
                  "move": "cut"
                }
              ]
            },
            "at": "l1:sofa",
            "caption": "Vẫn ghế sofa ấy",
            "icon": "mobile-phone"
          },
          {
            "id": "j-m",
            "t": "text",
            "text": "“Cho anh xin 30 phút…”",
            "x": 7932,
            "y": 1260,
            "size": 54,
            "at": "l2:thirty",
            "color": "accent",
            "hl": [
              {
                "text": "30 phút",
                "at": "l2:minutes"
              }
            ]
          },
          {
            "id": "j-2",
            "t": "text",
            "text": "Người thứ hai Lan giới thiệu",
            "x": 7932,
            "y": 1350,
            "size": 42,
            "at": "l2:Message two",
            "color": "muted"
          },
          {
            "id": "j-ca",
            "t": "text",
            "text": "“trăm thấy không bằng một làm”",
            "x": 7932,
            "y": 1490,
            "size": 50,
            "at": "l3:doing",
            "color": "accent",
            "hl": [
              {
                "text": "một làm",
                "at": "l3:doing"
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
          "say": "Monday night, two months later. Same sofa, same phone.",
          "sub": "Tối thứ Hai, hai tháng sau. Vẫn ghế sofa ấy, vẫn điện thoại ấy."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "dung",
          "say": "Message two, to the person Lan suggested: could I have thirty minutes to hear about your day?",
          "sub": "Tin thứ hai, gửi người Lan giới thiệu: cho anh xin 30 phút, nghe chị kể một ngày làm việc nhé?",
          "face": "happy",
          "pose": "phone"
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Seeing beats hearing, and doing beats seeing. This time, the message is finished. Send.",
          "sub": "“Trăm thấy không bằng một làm.” Lần này tin nhắn đã viết trọn. Gửi.",
          "keys": [
            "một làm"
          ]
        }
      ],
      "sfx": [
        {
          "at": "l1",
          "key": "pop",
          "offsetMs": 600
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
            "fit": "J",
            "move": "cut"
          },
          {
            "at": 200,
            "fit": "all",
            "ms": 1200
          },
          {
            "at": "l1",
            "fit": "C",
            "zoom": 0.8
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
            "id": "z-1",
            "t": "badge",
            "n": 1,
            "x": 4356,
            "y": 150,
            "at": "l1+400"
          },
          {
            "id": "z-2",
            "t": "badge",
            "n": 2,
            "x": 6544,
            "y": 600,
            "at": "l2+400"
          },
          {
            "id": "z-3",
            "t": "badge",
            "n": 3,
            "x": 8492,
            "y": 600,
            "at": "l3+400"
          },
          {
            "id": "z-4",
            "t": "badge",
            "n": 4,
            "x": 720,
            "y": 1700,
            "at": "l4+400"
          },
          {
            "id": "z-note",
            "t": "text",
            "text": "Bài để tham khảo; thử nghề cần tính cả sức khoẻ, tài chính gia đình.",
            "x": 7932,
            "y": 1805,
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
          "id": "l0",
          "lang": "en",
          "who": "det",
          "say": "Step back. Two months, one board.",
          "sub": "Lùi lại xem. Hai tháng, một tấm bảng."
        },
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "So: ask for a story, not a job.",
          "sub": "Tóm lại: xin lời kể, đừng xin việc.",
          "keys": [
            "xin lời kể"
          ]
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Ask about a real working day.",
          "sub": "Hỏi về một ngày làm việc thật.",
          "keys": [
            "một ngày làm việc thật"
          ]
        },
        {
          "id": "l3",
          "lang": "en",
          "who": "det",
          "say": "Try a real part of the job, before paying for the whole path.",
          "sub": "Thử một phần thật, trước khi trả tiền cả con đường.",
          "keys": [
            "một phần thật"
          ]
        },
        {
          "id": "l4",
          "lang": "en",
          "who": "det",
          "say": "Few tests, clear questions.",
          "sub": "Ít thử nghiệm, rõ câu hỏi.",
          "keys": [
            "rõ câu hỏi"
          ]
        },
        {
          "id": "l5",
          "lang": "en",
          "who": "det",
          "say": "Your turn: one question to test, two people to ask for thirty minutes.",
          "sub": "Đến lượt bạn: một câu hỏi để kiểm, hai người để xin 30 phút trò chuyện.",
          "keys": [
            "hai người"
          ]
        }
      ],
      "beats": {
        "after": 600
      },
      "ref": "outro"
    },
    {
      "id": "s22",
      "module": "QUIZ-01",
      "data": {
        "q": "Why can a test that shows a poor fit still be a good result?",
        "options": [
          "It proves that you should never try anything new again in life",
          "It saves you years you might have spent in the wrong career",
          "It means the test was badly designed and must be repeated forever"
        ],
        "correct": 1,
        "countdown": 5,
        "illus": "seedling",
        "why": "Biết sớm mình không hợp là tiết kiệm nhiều năm đi sai đường."
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "say": "Why can a test that shows a poor fit still be a good result?",
          "sub": "Vì sao một thử nghiệm cho thấy mình không hợp vẫn là kết quả tốt?"
        },
        {
          "id": "l2",
          "lang": "en",
          "say": "It saves you years you might have spent on the wrong path.",
          "sub": "Nó tiết kiệm cho bạn nhiều năm có thể đã đi sai đường."
        },
        {
          "id": "l3",
          "lang": "en",
          "say": "Not for me is still data.",
          "sub": "“Không hợp” cũng là dữ liệu."
        }
      ],
      "ref": "questions[37]"
    },
    {
      "id": "s23",
      "module": "END-05",
      "data": {
        "text": "Bốn mươi câu hỏi đang chờ bạn",
        "sub": "Rồi soạn tin xin 30 phút theo mẫu “sau”"
      },
      "lines": [
        {
          "id": "l1",
          "lang": "en",
          "who": "det",
          "say": "Tonight, write one question to test, and draft a thirty-minute message.",
          "sub": "Tối nay, viết một câu hỏi cần kiểm, và soạn tin xin 30 phút trò chuyện."
        },
        {
          "id": "l2",
          "lang": "en",
          "who": "det",
          "say": "Then try the forty questions below.",
          "sub": "Rồi thử bốn mươi câu hỏi bên dưới nhé."
        }
      ],
      "ref": "outro"
    }
  ],
  "notes": "#145 bài MỚI (chuỗi career-changers-over-35, bài 2) dựng theo hạt nhân kịch bản (#136) + biến thể edit (#144). HOOK-22 (câu thoại bị cắt): Dũng gõ “Lan ơi, bên em có…” → Đét “Khoan bấm gửi!” → câu được nói trọn ở BRK-04 Trước/Sau s05 + tin nhắn sửa s06 (✍️ p5). Dòng thời gian: HAI THÁNG Dũng thử nghề đào tạo (tối thứ Hai tuần 1 → tuần 1 trò chuyện bản mẫu → tuần 2 cà phê 30 phút với Lan → tháng 1 trải nghiệm + “Khoan đã!” khoá dài đắt tiền → tháng 1–2 song song, Thảo giữ tối thứ Bảy cho Bé Bin → cuối tháng 2 đọc kết quả, nhật ký thất bại → cơ hội ẩn Lan tự nhắc → gom thành hướng đi → tối thứ Hai hai tháng sau, cùng ghế, tin nhắn thứ hai). Nhân vật theo w145/_series/career-changers-over-35.md: Dũng (= anh Tuấn p5, p8, p11), Lan (người quen làm đào tạo nội bộ p5; bài xưng “chị”, chuỗi để Lan trẻ hơn nên Dũng xưng “anh”), Bác Bình (trưởng phòng p11), Thảo (giữ lịch gia đình p13). Chi tiết minh hoạ tự đặt, không phải số liệu: lớp tin học “buổi thứ ba / bốn”, Lan nhắc vị trí hướng dẫn kho (minh hoạ p3/p17 “để họ tự nhắc”, thị trường ẩn). Số chỉ từ bài: 30 phút, 2–4 tuần, 3–5 người, ít nhất 3 người, 13 năm, 5 câu hỏi, 3 điều bất ngờ + 1 câu hỏi, 2–3 sản phẩm, 1–2 kỹ năng, 5 việc cùng lúc. Ngắt nhịp: BRK-04 s05 (Trước/Sau tin nhắn), BRK-07 s09 (rehook), BRK-06 s13 (montage đăng ký dàn trải p14), DLG-01 s11 (cách A/B p11). Tục ngữ: “Trăm nghe không bằng một thấy, trăm thấy không bằng một làm”. Câu đố questions[37]. Lưu ý chung (#133) ở cảnh tóm tắt.",
  "loop": {
    "open": "s00",
    "close": "s20"
  }
};
